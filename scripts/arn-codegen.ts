/**
 * ARN code generation utilities.
 * Parses ARN templates and generates builder/validator/parser code.
 */

import { toCamelCase, toPascalCase } from "./naming";

/**
 * Parsed representation of an ARN template variable.
 */
export interface ArnVariable {
	/** The variable name as it appears in the template (e.g., "TableName"). */
	readonly name: string;
	/** The camelCase parameter name for the builder function. */
	readonly paramName: string;
	/** Whether this is a common variable (Partition, Region, Account). */
	readonly isCommon: boolean;
}

/**
 * Parsed representation of an ARN template.
 */
export interface ParsedArnTemplate {
	/** The original ARN format string. */
	readonly template: string;
	/** Whether the region slot is empty (global resource). */
	readonly isGlobal: boolean;
	/** Resource-specific variables (excluding Partition/Region/Account). */
	readonly resourceVariables: ArnVariable[];
	/** Regex pattern string for validation. */
	readonly regexPattern: string;
	/** All named capture groups in the regex. */
	readonly captureGroups: string[];
}

/**
 * Parses an ARN template string into its components.
 *
 * @example
 * parseArnTemplate("arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}")
 * // → { isGlobal: false, resourceVariables: [{ name: "TableName", paramName: "tableName", isCommon: false }], ... }
 */
export function parseArnTemplate(template: string): ParsedArnTemplate {
	const COMMON_VARS = new Set(["Partition", "Region", "Account"]);

	// Extract all ${Variable} placeholders
	const varRegex = /\$\{(\w+)\}/g;
	const allVars: ArnVariable[] = [];
	let match: RegExpExecArray | null;

	while ((match = varRegex.exec(template)) !== null) {
		const name = match[1];
		allVars.push({
			name,
			paramName: toCamelCase(name),
			isCommon: COMMON_VARS.has(name),
		});
	}

	const resourceVariables = allVars.filter((v) => !v.isCommon);

	// Check if region is empty (global resource)
	// Pattern: arn:${Partition}:service::${Account}:...
	const isGlobal = /:\$\{Partition\}:[^:]+::\$\{Account\}/.test(template);

	// Build regex pattern for validation
	const regexPattern = buildRegexPattern(template);

	// Extract capture group names
	const captureGroups = allVars.map((v) => v.paramName);

	return {
		template,
		isGlobal,
		resourceVariables,
		regexPattern,
		captureGroups,
	};
}

/**
 * Converts an ARN template to a regex pattern string with named capture groups.
 * ${Variable} becomes a named capture group, literal * stays as .* in the regex.
 */
export function buildRegexPattern(template: string): string {
	// Escape regex special chars (except ${...} placeholders and *)
	let pattern = template
		.replace(/[.+?^${}()|[\]\\]/g, (char) => {
			// Don't escape $ when followed by { (it's a placeholder)
			return char === "$" ? "$" : `\\${char}`;
		})
		// Fix: re-enable ${...} by unescaping the braces we just escaped
		.replace(/\$\\\{(\w+)\\\}/g, "(?<$1>[^:/?]+)")
		// Handle literal wildcards
		.replace(/\*/g, ".*");

	// Special handling for the Partition/Region/Account positions
	// Partition, Region, Account use [^:]+ to match ARN segments
	pattern = pattern
		.replace("(?<Partition>[^:/?]+)", "(?<partition>[^:]+)")
		.replace("(?<Region>[^:/?]+)", "(?<region>[^:]*)")
		.replace("(?<Account>[^:/?]+)", "(?<account>[^:]*)");

	// Rename resource variables to camelCase in capture groups
	const varRegex = /\(\?<(\w+)>\[/g;
	pattern = pattern.replace(varRegex, (match, name) => {
		if (["partition", "region", "account"].includes(name)) {
			return match; // Already renamed
		}
		const camelName = toCamelCase(name);
		return `(?<${camelName}>[`;
	});

	return `^${pattern}$`;
}

/**
 * Generates the builder function parameter interface fields for a resource.
 */
export function generateBuilderParams(
	parsed: ParsedArnTemplate,
): { name: string; type: string; required: boolean; description: string }[] {
	const params: { name: string; type: string; required: boolean; description: string }[] = [];

	for (const v of parsed.resourceVariables) {
		params.push({
			name: v.paramName,
			type: "string",
			required: true,
			description: `The ${v.name} component of the ARN.`,
		});
	}

	// Common optional params (only if not global)
	if (!parsed.isGlobal) {
		params.push({
			name: "region",
			type: "string",
			required: false,
			description: 'AWS region. Defaults to "*".',
		});
	}

	params.push({
		name: "account",
		type: "string",
		required: false,
		description: 'AWS account ID. Defaults to "*".',
	});

	params.push({
		name: "partition",
		type: "string",
		required: false,
		description: 'AWS partition. Defaults to "aws".',
	});

	return params;
}

/**
 * Generates TypeScript code for an ARN builder static method.
 */
export function generateBuilderCode(
	resourceName: string,
	parsed: ParsedArnTemplate,
	_serviceName: string,
): string {
	const methodName = toCamelCase(resourceName);
	const params = generateBuilderParams(parsed);

	const requiredParams = params.filter((p) => p.required);
	const optionalParams = params.filter((p) => !p.required);

	// Build the interface fields
	const interfaceFields = [
		...requiredParams.map((p) => `\t\t/** ${p.description} */\n\t\treadonly ${p.name}: ${p.type};`),
		...optionalParams.map((p) => `\t\t/** ${p.description} */\n\t\treadonly ${p.name}?: ${p.type};`),
	].join("\n");

	// Build the template literal for the ARN
	let arnExpression = parsed.template
		.replace("${Partition}", "${props.partition ?? \"aws\"}")
		.replace("${Account}", "${props.account ?? \"*\"}");

	if (parsed.isGlobal) {
		// Global resources have empty region — keep it empty
		arnExpression = arnExpression.replace("${Region}", "");
	} else {
		arnExpression = arnExpression.replace("${Region}", "${props.region ?? \"*\"}");
	}

	// Replace resource variables
	for (const v of parsed.resourceVariables) {
		arnExpression = arnExpression.replace(`\${${v.name}}`, `\${props.${v.paramName}}`);
	}

	return `\t/**
\t * Builds an ARN for the ${resourceName} resource.
\t */
\tstatic ${methodName}(props: {
${interfaceFields}
\t}): string {
\t\treturn \`${arnExpression}\`;
\t}`;
}

/**
 * Generates TypeScript code for an ARN validator static method.
 */
export function generateValidatorCode(
	resourceName: string,
	_parsed: ParsedArnTemplate,
): string {
	const pascalName = toPascalCase(resourceName);
	return `\t/**
\t * Validates whether a string is a valid ARN for the ${resourceName} resource.
\t */
\tstatic isValid${pascalName}Arn(arn: string): boolean {
\t\treturn ${pascalName}ArnRegex.test(arn);
\t}`;
}

/**
 * Generates TypeScript code for an ARN parser static method.
 */
export function generateParserCode(
	resourceName: string,
	parsed: ParsedArnTemplate,
): string {
	const pascalName = toPascalCase(resourceName);
	const methodName = `parse${pascalName}Arn`;

	// Build the return type fields
	const returnFields = [
		"partition: string",
		...(parsed.isGlobal ? [] : ["region: string"]),
		"account: string",
		...parsed.resourceVariables.map((v) => `${v.paramName}: string`),
	];

	return `\t/**
\t * Parses a ${resourceName} ARN into its components.
\t * @throws Error if the ARN does not match the expected format.
\t */
\tstatic ${methodName}(arn: string): { ${returnFields.join("; ")} } {
\t\tconst match = ${pascalName}ArnRegex.exec(arn);
\t\tif (!match?.groups) {
\t\t\tthrow new Error(\`Invalid ${resourceName} ARN: \${arn}\`);
\t\t}
\t\treturn {
\t\t\tpartition: match.groups.partition,${parsed.isGlobal ? "" : "\n\t\t\tregion: match.groups.region,"}
\t\t\taccount: match.groups.account,
${parsed.resourceVariables.map((v) => `\t\t\t${v.paramName}: match.groups!.${v.paramName},`).join("\n")}
\t\t};
\t}`;
}

/**
 * Generates the regex constant for a resource ARN pattern.
 */
export function generateRegexConstant(
	resourceName: string,
	parsed: ParsedArnTemplate,
): string {
	const pascalName = toPascalCase(resourceName);
	return `const ${pascalName}ArnRegex = new RegExp("${parsed.regexPattern.replace(/\\/g, "\\\\")}");`;
}
