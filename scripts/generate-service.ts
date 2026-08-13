/**
 * Generates TypeScript constants for a single AWS service from its reference JSON.
 *
 * Usage: tsx scripts/generate-service.ts <path-to-service.json>
 *
 * Produces: src/generated/services/{serviceName}.ts
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { execSync } from "node:child_process";

import {
	generateBuilderCode,
	generateParserCode,
	generateParserResultInterface,
	generatePropsInterface,
	generateRegexConstant,
	generateValidatorCode,
	parseArnTemplate,
} from "./arn-codegen";
import {
	conditionKeyToConstant,
	generateConditionBuilder,
	shouldGenerateBuilder,
} from "./condition-codegen";
import { toFileName, toPascalCase, toServiceClassName } from "./naming";
import type { ServiceDetail } from "./types";

const OUTPUT_DIR = path.resolve(__dirname, "../src/generated/services");

const FILE_HEADER = (serviceName: string) => `// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/${serviceName}.json
// Run \`npx projen generate-constants\` to regenerate
// =============================================================================

`;

/**
 * Determines the access level of an action from its annotations.
 */
function getAccessLevel(action: {
	Annotations?: { Properties?: { IsList?: boolean; IsWrite?: boolean; IsPermissionManagement?: boolean; IsTaggingOnly?: boolean } };
}): "Read" | "Write" | "List" | "PermissionManagement" | "Tagging" {
	const props = action.Annotations?.Properties;
	if (!props) return "Read";
	if (props.IsPermissionManagement) return "PermissionManagement";
	if (props.IsTaggingOnly) return "Tagging";
	if (props.IsList) return "List";
	if (props.IsWrite) return "Write";
	return "Read";
}

/**
 * Generates the Actions class for a service.
 */
function generateActionsClass(data: ServiceDetail, classPrefix: string): string {
	const lines: string[] = [];
	const serviceName = data.Name;

	lines.push(`/**`);
	lines.push(` * IAM action constants for the ${serviceName} service.`);
	lines.push(` */`);
	lines.push(`export class ${classPrefix}Actions {`);
	lines.push(`\t/** The IAM service prefix. */`);
	lines.push(`\tstatic readonly SERVICE_PREFIX = "${serviceName}";`);
	lines.push("");

	// Individual action constants
	const readActions: string[] = [];
	const writeActions: string[] = [];
	const listActions: string[] = [];
	const permActions: string[] = [];
	const tagActions: string[] = [];

	for (const action of data.Actions) {
		// Sanitize: remove hyphens/dots by converting to PascalCase segments
		// Prefix with 'action' if starts with Get/Set to avoid JSII5000 Java getter conflicts
		let constName = action.Name.replace(/[-. ]+(.)/g, (_: string, c: string) => c.toUpperCase()).replace(/[-. ]+/g, "");
		if (/^(Get|Set)[A-Z]/.test(constName)) {
			constName = `action${constName}`;
		}
		const fullAction = `${serviceName}:${action.Name}`;
		const level = getAccessLevel(action);

		lines.push(`\t/** [${level}] ${serviceName}:${action.Name} */`);
		lines.push(`\tstatic readonly ${constName} = "${fullAction}";`);

		switch (level) {
			case "Read": readActions.push(`${classPrefix}Actions.${constName}`); break;
			case "Write": writeActions.push(`${classPrefix}Actions.${constName}`); break;
			case "List": listActions.push(`${classPrefix}Actions.${constName}`); break;
			case "PermissionManagement": permActions.push(`${classPrefix}Actions.${constName}`); break;
			case "Tagging": tagActions.push(`${classPrefix}Actions.${constName}`); break;
		}
	}

	lines.push("");
	lines.push(`\t/** All read-level actions. */`);
	lines.push(`\tstatic readonly AllReadActions: string[] = [${readActions.join(", ")}];`);
	lines.push(`\t/** All write-level actions. */`);
	lines.push(`\tstatic readonly AllWriteActions: string[] = [${writeActions.join(", ")}];`);
	lines.push(`\t/** All list-level actions. */`);
	lines.push(`\tstatic readonly AllListActions: string[] = [${listActions.join(", ")}];`);
	lines.push(`\t/** All permission-management-level actions. */`);
	lines.push(`\tstatic readonly AllPermissionManagementActions: string[] = [${permActions.join(", ")}];`);
	lines.push(`\t/** All tagging-level actions. */`);
	lines.push(`\tstatic readonly AllTaggingActions: string[] = [${tagActions.join(", ")}];`);

	lines.push("}");
	return lines.join("\n");
}

/**
 * Generates the Resources class for a service.
 */
function generateResourcesClass(data: ServiceDetail, classPrefix: string): string | null {
	const resources = data.Resources ?? [];
	if (resources.length === 0) return null;

	const interfaces: string[] = [];
	const lines: string[] = [];
	const regexConstants: string[] = [];

	// Generate interfaces and regex constants
	for (const resource of resources) {
		const arnFormats = resource.ARNFormats ?? [];
		if (arnFormats.length === 0) continue;

		if (arnFormats.length === 1) {
			const parsed = parseArnTemplate(arnFormats[0]);
			interfaces.push(generatePropsInterface(resource.Name, parsed, classPrefix));
			interfaces.push(generateParserResultInterface(resource.Name, parsed, classPrefix));
			regexConstants.push(generateRegexConstant(resource.Name, parsed));
		} else {
			// Multi-ARN: generate interfaces for each variant's props
			for (let i = 0; i < arnFormats.length; i++) {
				const parsed = parseArnTemplate(arnFormats[i]);
				const variantName = `${resource.Name}Variant${i + 1}`;
				interfaces.push(generatePropsInterface(variantName, parsed, classPrefix));
			}
			// Parser result uses first variant's shape
			const firstParsed = parseArnTemplate(arnFormats[0]);
			interfaces.push(generateParserResultInterface(resource.Name, firstParsed, classPrefix));

			// Combined regex for validation (strip named groups to avoid duplicates)
			const patterns = arnFormats.map((arn) => {
				const p = parseArnTemplate(arn).regexPattern.slice(1, -1);
				return p.replace(/\(\?<\w+>/g, "(?:");
			});
			const combined = `^(?:${patterns.join("|")})$`;
			const pascalName = toPascalCase(resource.Name);
			regexConstants.push(`const ${pascalName}ArnRegex = new RegExp("${combined.replace(/\\/g, "\\\\")}");`);
			// Individual regex for parsing (first variant only)
			regexConstants.push(`const ${pascalName}ParseRegex = new RegExp("${firstParsed.regexPattern.replace(/\\/g, "\\\\")}");`);
		}
	}

	lines.push(`/**`);
	lines.push(` * ARN builders, validators, and parsers for ${data.Name} resources.`);
	lines.push(` */`);
	lines.push(`export class ${classPrefix}Resources {`);

	for (const resource of resources) {
		const arnFormats = resource.ARNFormats ?? [];
		if (arnFormats.length === 0) continue;

		if (arnFormats.length === 1) {
			const parsed = parseArnTemplate(arnFormats[0]);
			lines.push(generateBuilderCode(resource.Name, parsed, data.Name, classPrefix));
			lines.push("");
			lines.push(generateValidatorCode(resource.Name, parsed));
			lines.push("");
			lines.push(generateParserCode(resource.Name, parsed, classPrefix));
			lines.push("");
		} else {
			// Multi-ARN: generate one builder per variant with suffix
			for (let i = 0; i < arnFormats.length; i++) {
				const parsed = parseArnTemplate(arnFormats[i]);
				const suffix = `Variant${i + 1}`;
				const variantName = `${resource.Name}${suffix}`;
				lines.push(generateBuilderCode(variantName, parsed, data.Name, classPrefix));
				lines.push("");
			}
			// Validator uses the combined regex (no named groups, just matching)
			const firstParsed = parseArnTemplate(arnFormats[0]);
			lines.push(generateValidatorCode(resource.Name, firstParsed));
			lines.push("");
			// Parser uses the first variant's regex (with named groups)
			const pascalName = toPascalCase(resource.Name);
			lines.push(`\t/**
\t * Parses a ${resource.Name} ARN into its components (uses first ARN variant format).
\t * @throws Error if the ARN does not match the expected format.
\t */
\tstatic parse${pascalName}Arn(arn: string): ${classPrefix}${pascalName}ArnComponents {
\t\tconst match = ${pascalName}ParseRegex.exec(arn);
\t\tif (!match?.groups) {
\t\t\tthrow new Error(\`Invalid ${resource.Name} ARN: \${arn}\`);
\t\t}
\t\treturn {
\t\t\tpartition: match.groups.partition,${firstParsed.isGlobal ? "" : "\n\t\t\tregion: match.groups.region,"}
\t\t\taccount: match.groups.account,
${firstParsed.resourceVariables.map((v) => `\t\t\t${v.paramName}: match.groups!.${v.paramName},`).join("\n")}
\t\t};
\t}`);
			lines.push("");
		}
	}

	lines.push("}");

	return interfaces.join("\n\n") + "\n\n" + regexConstants.join("\n") + "\n\n" + lines.join("\n");
}

/**
 * Generates the Operations class for a service.
 */
function generateOperationsClass(data: ServiceDetail, classPrefix: string): string | null {
	const operations = data.Operations ?? [];
	if (operations.length === 0) return null;

	const lines: string[] = [];
	lines.push(`/**`);
	lines.push(` * API operation to required IAM actions mapping for ${data.Name}.`);
	lines.push(` */`);
	lines.push(`export class ${classPrefix}Operations {`);

	for (const op of operations) {
		let constName = op.Name.replace(/[-. ]+(.)/g, (_: string, c: string) => c.toUpperCase()).replace(/[-. ]+/g, "");
		if (/^(Get|Set)[A-Z]/.test(constName)) {
			constName = `op${constName}`;
		}
		const actions = (op.AuthorizedActions ?? []).map(
			(a) => `"${a.Service}:${a.Name}"`,
		);

		lines.push(`\t/** IAM actions required for the ${op.Name} API call. */`);
		lines.push(`\tstatic readonly ${constName}: string[] = [${actions.join(", ")}];`);
	}

	lines.push("}");
	return lines.join("\n");
}

/**
 * Generates the Conditions class for a service.
 */
function generateConditionsClass(data: ServiceDetail, classPrefix: string): string | null {
	const conditionKeys = data.ConditionKeys ?? [];
	if (conditionKeys.length === 0) return null;

	const lines: string[] = [];
	lines.push(`/**`);
	lines.push(` * Condition key constants and builders for ${data.Name}.`);
	lines.push(` */`);
	lines.push(`export class ${classPrefix}Conditions {`);

	// Action → condition keys mapping
	for (const action of data.Actions) {
		const actionCks = action.ActionConditionKeys ?? [];
		if (actionCks.length > 0) {
			let constName = `${action.Name.replace(/[-. ]+(.)/g, (_: string, c: string) => c.toUpperCase()).replace(/[-. ]+/g, "")}ConditionKeys`;
			if (/^(Get|Set)[A-Z]/.test(constName)) {
				constName = `action${constName}`;
			}
			lines.push(`\t/** Condition keys applicable to the ${action.Name} action. */`);
			lines.push(`\tstatic readonly ${constName}: string[] = [${actionCks.map((k) => `"${k}"`).join(", ")}];`);
		}
	}

	lines.push("");

	// Condition key constants (deduplicate by constant name)
	const seenConstants = new Set<string>();
	for (const ck of conditionKeys) {
		const constName = conditionKeyToConstant(ck.Name);
		if (seenConstants.has(constName)) continue;
		seenConstants.add(constName);
		lines.push(`\t/** Condition key: ${ck.Name} (${ck.Types.join(", ")}) */`);
		lines.push(`\tstatic readonly ${constName} = "${ck.Name}";`);
	}

	lines.push("");

	// Builder methods (only for service-specific and aws: keys, deduplicate by method name)
	const seenMethods = new Set<string>();
	for (const ck of conditionKeys) {
		if (shouldGenerateBuilder(ck.Name, data.Name)) {
			const code = generateConditionBuilder(ck.Name, ck.Types, data.Name);
			// Extract method name from the generated code
			const methodMatch = code.match(/static (\w+)\(/);
			const methodName = methodMatch?.[1];
			if (methodName && seenMethods.has(methodName)) continue;
			if (methodName) seenMethods.add(methodName);
			lines.push(code);
			lines.push("");
		}
	}

	lines.push("}");
	return lines.join("\n");
}

/**
 * Generates the full TypeScript file for a single service.
 */
export function generateServiceFile(data: ServiceDetail): string {
	const classPrefix = toServiceClassName(data.Name);
	const sections: string[] = [];

	sections.push(FILE_HEADER(data.Name));
	sections.push(generateActionsClass(data, classPrefix));
	sections.push("");

	const resourcesClass = generateResourcesClass(data, classPrefix);
	if (resourcesClass) {
		sections.push(resourcesClass);
		sections.push("");
	}

	const operationsClass = generateOperationsClass(data, classPrefix);
	if (operationsClass) {
		sections.push(operationsClass);
		sections.push("");
	}

	const conditionsClass = generateConditionsClass(data, classPrefix);
	if (conditionsClass) {
		sections.push(conditionsClass);
		sections.push("");
	}

	return sections.join("\n");
}

/**
 * Main: reads a service JSON, generates the TypeScript file, formats it.
 */
export async function generateForService(jsonPath: string, outputDir: string = OUTPUT_DIR): Promise<string> {
	const raw = fs.readFileSync(jsonPath, "utf-8");
	const data: ServiceDetail = JSON.parse(raw);

	const fileName = toFileName(data.Name);
	const outputPath = path.join(outputDir, `${fileName}.ts`);

	const content = generateServiceFile(data);

	fs.mkdirSync(outputDir, { recursive: true });
	fs.writeFileSync(outputPath, content, "utf-8");

	// Format with Biome
	try {
		execSync(`npx biome format --write "${outputPath}"`, {
			stdio: "pipe",
			cwd: path.resolve(__dirname, ".."),
		});
	} catch {
		// If biome fails, the file is still valid TypeScript — just unformatted
	}

	return outputPath;
}

// CLI entry point
if (require.main === module) {
	const jsonPath = process.argv[2];
	if (!jsonPath) {
		console.error("Usage: tsx scripts/generate-service.ts <path-to-service.json>");
		process.exit(1);
	}

	generateForService(jsonPath).then((outputPath) => {
		console.log(`✅ Generated: ${outputPath}`);
	}).catch((err) => {
		console.error(`❌ Failed: ${err.message}`);
		process.exit(1);
	});
}
