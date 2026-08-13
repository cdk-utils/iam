/**
 * Condition key code generation utilities.
 * Maps AWS condition key types to IAM policy operators and generates builder code.
 */

import { toCamelCase, toUpperSnakeCase } from "./naming";

/**
 * Maps an AWS condition key type to the default IAM condition operator.
 */
export function typeToOperator(type: string): string {
	switch (type) {
		case "String":
			return "StringEquals";
		case "ArrayOfString":
			return "ForAllValues:StringEquals";
		case "Numeric":
			return "NumericEquals";
		case "Bool":
			return "Bool";
		case "Date":
			return "DateEquals";
		case "ARN":
			return "ArnEquals";
		case "ArrayOfARN":
			return "ForAllValues:ArnEquals";
		case "IPAddress":
			return "IpAddress";
		case "ArrayOfBool":
			return "ForAllValues:StringEquals";
		default:
			return "StringEquals";
	}
}

/**
 * Maps an AWS condition key type to the TypeScript parameter type.
 */
export function typeToTsType(type: string): string {
	switch (type) {
		case "String":
		case "Date":
		case "ARN":
		case "IPAddress":
			return "string";
		case "ArrayOfString":
		case "ArrayOfARN":
			return "string[]";
		case "Numeric":
			return "number";
		case "Bool":
			return "boolean";
		case "ArrayOfBool":
			return "boolean[]";
		default:
			return "string";
	}
}

/**
 * Determines whether a condition key should get a builder helper.
 * Only generates builders for service-specific and aws: keys.
 * Skips third-party OIDC/SAML keys (e.g., accounts.google.com:*).
 */
export function shouldGenerateBuilder(
	conditionKeyName: string,
	serviceName: string,
): boolean {
	const prefix = conditionKeyName.split(":")[0];
	return prefix === "aws" || prefix === serviceName;
}

/**
 * Extracts the short name from a condition key for use as a method name.
 * Strips the service prefix.
 *
 * @example
 * conditionKeyToMethodName("dynamodb:Attributes", "dynamodb") → "attributes"
 * conditionKeyToMethodName("aws:RequestTag/${TagKey}", "dynamodb") → "requestTag"
 * conditionKeyToMethodName("dynamodb:LeadingKeys", "dynamodb") → "leadingKeys"
 */
export function conditionKeyToMethodName(
	conditionKeyName: string,
	_serviceName: string,
): string {
	// Strip prefix (e.g., "dynamodb:" or "aws:")
	const prefix = conditionKeyName.split(":")[0];
	let shortName = conditionKeyName.slice(prefix.length + 1);

	// Remove template variables like ${TagKey} and <key>
	shortName = shortName.replace(/\/?\$\{[^}]+\}/g, "");
	shortName = shortName.replace(/\/?<[^>]+>/g, "");

	// Remove trailing colons and slashes
	shortName = shortName.replace(/[/:]+$/, "");

	// Replace remaining colons with hyphens for splitting
	shortName = shortName.replace(/:/g, "-");

	return toCamelCase(shortName);
}

/**
 * Generates the constant name for a condition key.
 *
 * @example
 * conditionKeyToConstant("dynamodb:Attributes") → "ATTRIBUTES"
 * conditionKeyToConstant("aws:RequestTag/${TagKey}") → "REQUEST_TAG"
 */
export function conditionKeyToConstant(conditionKeyName: string): string {
	const prefix = conditionKeyName.split(":")[0];
	let shortName = conditionKeyName.slice(prefix.length + 1);

	// Remove template variables (${Var} and <var> styles)
	shortName = shortName.replace(/\/?\$\{[^}]+\}/g, "");
	shortName = shortName.replace(/\/?<[^>]+>/g, "");
	// Remove trailing slashes and colons
	shortName = shortName.replace(/[/:]+$/, "");
	// Replace remaining colons with underscores
	shortName = shortName.replace(/:/g, "_");

	return toUpperSnakeCase(shortName);
}

/**
 * Generates TypeScript code for a condition builder static method.
 */
export function generateConditionBuilder(
	conditionKeyName: string,
	types: string[],
	serviceName: string,
): string {
	const methodName = conditionKeyToMethodName(conditionKeyName, serviceName);
	const type = types[0] || "String";
	const tsType = typeToTsType(type);
	const operator = typeToOperator(type);

	// Determine if this is an array type
	const isArray = tsType.endsWith("[]");
	const paramName = isArray ? "values" : "value";

	return `\t/**
\t * Generates a condition block for \`${conditionKeyName}\`.
\t */
\tstatic ${methodName}(${paramName}: ${tsType}): Record<string, Record<string, ${tsType}>> {
\t\treturn { "${operator}": { "${conditionKeyName}": ${paramName} } };
\t}`;
}
