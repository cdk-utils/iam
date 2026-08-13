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
	generateRegexConstant,
	generateValidatorCode,
	parseArnTemplate,
} from "./arn-codegen";
import {
	conditionKeyToConstant,
	generateConditionBuilder,
	shouldGenerateBuilder,
} from "./condition-codegen";
import { toFileName, toPascalCase, toServiceClassName, toUpperSnakeCase } from "./naming";
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
		const constName = toUpperSnakeCase(action.Name);
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
	lines.push(`\tstatic readonly READ_ACTIONS: string[] = [${readActions.join(", ")}];`);
	lines.push(`\t/** All write-level actions. */`);
	lines.push(`\tstatic readonly WRITE_ACTIONS: string[] = [${writeActions.join(", ")}];`);
	lines.push(`\t/** All list-level actions. */`);
	lines.push(`\tstatic readonly LIST_ACTIONS: string[] = [${listActions.join(", ")}];`);
	lines.push(`\t/** All permission-management-level actions. */`);
	lines.push(`\tstatic readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [${permActions.join(", ")}];`);
	lines.push(`\t/** All tagging-level actions. */`);
	lines.push(`\tstatic readonly TAGGING_ACTIONS: string[] = [${tagActions.join(", ")}];`);

	lines.push("}");
	return lines.join("\n");
}

/**
 * Generates the Resources class for a service.
 */
function generateResourcesClass(data: ServiceDetail, classPrefix: string): string | null {
	const resources = data.Resources ?? [];
	if (resources.length === 0) return null;

	const lines: string[] = [];
	const regexConstants: string[] = [];

	// Generate regex constants (placed before the class)
	for (const resource of resources) {
		const arnFormats = resource.ARNFormats ?? [];
		if (arnFormats.length === 0) continue;

		// For multi-ARN resources, generate one regex per variant
		if (arnFormats.length === 1) {
			const parsed = parseArnTemplate(arnFormats[0]);
			regexConstants.push(generateRegexConstant(resource.Name, parsed));
		} else {
			// Multi-ARN: generate combined regex (matches any variant)
			const patterns = arnFormats.map((arn) => parseArnTemplate(arn).regexPattern.slice(1, -1)); // strip ^$
			const combined = `^(?:${patterns.join("|")})$`;
			const pascalName = toPascalCase(resource.Name);
			regexConstants.push(`const ${pascalName}ArnRegex = new RegExp("${combined.replace(/\\/g, "\\\\")}");`);
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
			lines.push(generateBuilderCode(resource.Name, parsed, data.Name));
			lines.push("");
			lines.push(generateValidatorCode(resource.Name, parsed));
			lines.push("");
			lines.push(generateParserCode(resource.Name, parsed));
			lines.push("");
		} else {
			// Multi-ARN: generate one builder per variant with suffix
			for (let i = 0; i < arnFormats.length; i++) {
				const parsed = parseArnTemplate(arnFormats[i]);
				const suffix = `Variant${i + 1}`;
				const variantName = `${resource.Name}${suffix}`;
				lines.push(generateBuilderCode(variantName, parsed, data.Name));
				lines.push("");
			}
			// Single validator and parser that matches any variant
			const parsed = parseArnTemplate(arnFormats[0]);
			lines.push(generateValidatorCode(resource.Name, parsed));
			lines.push("");
			lines.push(generateParserCode(resource.Name, parsed));
			lines.push("");
		}
	}

	lines.push("}");

	return regexConstants.join("\n") + "\n\n" + lines.join("\n");
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
		const constName = toUpperSnakeCase(op.Name);
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
			const constName = `${toUpperSnakeCase(action.Name)}_CONDITION_KEYS`;
			lines.push(`\t/** Condition keys applicable to the ${action.Name} action. */`);
			lines.push(`\tstatic readonly ${constName}: string[] = [${actionCks.map((k) => `"${k}"`).join(", ")}];`);
		}
	}

	lines.push("");

	// Condition key constants
	for (const ck of conditionKeys) {
		const constName = conditionKeyToConstant(ck.Name);
		lines.push(`\t/** Condition key: ${ck.Name} (${ck.Types.join(", ")}) */`);
		lines.push(`\tstatic readonly ${constName} = "${ck.Name}";`);
	}

	lines.push("");

	// Builder methods (only for service-specific and aws: keys)
	for (const ck of conditionKeys) {
		if (shouldGenerateBuilder(ck.Name, data.Name)) {
			lines.push(generateConditionBuilder(ck.Name, ck.Types, data.Name));
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
