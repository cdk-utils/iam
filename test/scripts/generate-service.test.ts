import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import { generateServiceFile, generateForService } from "../../scripts/generate-service";
import type { ServiceDetail } from "../../scripts/types";

// =============================================================================
// Fixtures
// =============================================================================

const minimalService: ServiceDetail = {
	Name: "testservice",
	Version: "v1.0",
	Actions: [
		{
			Name: "GetItem",
			Annotations: { Properties: { IsList: false, IsPermissionManagement: false, IsTaggingOnly: false, IsWrite: false } },
			Resources: [{ Name: "item" }],
		},
		{
			Name: "PutItem",
			ActionConditionKeys: ["testservice:Attribute"],
			Annotations: { Properties: { IsList: false, IsPermissionManagement: false, IsTaggingOnly: false, IsWrite: true } },
			Resources: [{ Name: "item" }],
		},
		{
			Name: "ListItems",
			Annotations: { Properties: { IsList: true, IsPermissionManagement: false, IsTaggingOnly: false, IsWrite: false } },
		},
	],
	Resources: [
		{
			Name: "item",
			ARNFormats: ["arn:${Partition}:testservice:${Region}:${Account}:item/${ItemId}"],
			ConditionKeys: ["aws:ResourceTag/${TagKey}"],
		},
	],
	Operations: [
		{
			Name: "GetItem",
			AuthorizedActions: [{ Name: "GetItem", Service: "testservice" }],
			SDK: [{ Name: "testservice", Method: "get_item", Package: "Boto3" }],
		},
		{
			Name: "PutItem",
			AuthorizedActions: [
				{ Name: "PutItem", Service: "testservice" },
				{ Name: "ValidateItem", Service: "testservice" },
			],
		},
	],
	ConditionKeys: [
		{ Name: "testservice:Attribute", Types: ["String"] },
		{ Name: "aws:RequestTag/${TagKey}", Types: ["String"] },
		{ Name: "aws:TagKeys", Types: ["ArrayOfString"] },
	],
};

const serviceWithoutResources: ServiceDetail = {
	Name: "simple",
	Version: "v1.0",
	Actions: [
		{
			Name: "DoThing",
			Annotations: { Properties: { IsList: false, IsPermissionManagement: false, IsTaggingOnly: false, IsWrite: true } },
		},
	],
};

// =============================================================================
// Tests
// =============================================================================

describe("generateServiceFile", () => {
	it("generates a file with the auto-generated header", () => {
		const output = generateServiceFile(minimalService);
		expect(output).toContain("AUTO-GENERATED FILE — DO NOT EDIT MANUALLY");
		expect(output).toContain("data/service-reference/testservice.json");
		expect(output).toContain("npx projen generate-constants");
	});

	it("generates the Actions class with correct constants", () => {
		const output = generateServiceFile(minimalService);
		expect(output).toContain("export class TestserviceActions");
		expect(output).toContain('static readonly SERVICE_PREFIX = "testservice"');
		expect(output).toContain('static readonly GET_ITEM = "testservice:GetItem"');
		expect(output).toContain('static readonly PUT_ITEM = "testservice:PutItem"');
		expect(output).toContain('static readonly LIST_ITEMS = "testservice:ListItems"');
	});

	it("groups actions by access level", () => {
		const output = generateServiceFile(minimalService);
		expect(output).toContain("READ_ACTIONS");
		expect(output).toContain("WRITE_ACTIONS");
		expect(output).toContain("LIST_ACTIONS");
		// GetItem should be in READ_ACTIONS
		expect(output).toMatch(/READ_ACTIONS.*TestserviceActions\.GET_ITEM/s);
		// PutItem should be in WRITE_ACTIONS
		expect(output).toMatch(/WRITE_ACTIONS.*TestserviceActions\.PUT_ITEM/s);
		// ListItems should be in LIST_ACTIONS
		expect(output).toMatch(/LIST_ACTIONS.*TestserviceActions\.LIST_ITEMS/s);
	});

	it("generates the Resources class with builder, validator, parser", () => {
		const output = generateServiceFile(minimalService);
		expect(output).toContain("export class TestserviceResources");
		// Builder
		expect(output).toContain("static item(props:");
		expect(output).toContain("readonly itemId: string");
		// Validator
		expect(output).toContain("static isValidItemArn(arn: string): boolean");
		// Parser
		expect(output).toContain("static parseItemArn(arn: string)");
	});

	it("generates the Operations class with required actions", () => {
		const output = generateServiceFile(minimalService);
		expect(output).toContain("export class TestserviceOperations");
		expect(output).toContain('static readonly GET_ITEM: string[] = ["testservice:GetItem"]');
		expect(output).toContain('"testservice:PutItem"');
		expect(output).toContain('"testservice:ValidateItem"');
	});

	it("generates the Conditions class with constants and builders", () => {
		const output = generateServiceFile(minimalService);
		expect(output).toContain("export class TestserviceConditions");
		// Action condition key mapping
		expect(output).toContain("PUT_ITEM_CONDITION_KEYS");
		expect(output).toContain('"testservice:Attribute"');
		// Condition key constants
		expect(output).toContain('static readonly ATTRIBUTE = "testservice:Attribute"');
		expect(output).toContain('static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}"');
		// Builder method
		expect(output).toContain("static attribute(value: string)");
		expect(output).toContain("static tagKeys(values: string[])");
	});

	it("skips Resources class when service has no resources", () => {
		const output = generateServiceFile(serviceWithoutResources);
		expect(output).toContain("export class SimpleActions");
		expect(output).not.toContain("SimpleResources");
	});

	it("skips Operations class when service has no operations", () => {
		const output = generateServiceFile(serviceWithoutResources);
		expect(output).not.toContain("SimpleOperations");
	});

	it("skips Conditions class when service has no condition keys", () => {
		const output = generateServiceFile(serviceWithoutResources);
		expect(output).not.toContain("SimpleConditions");
	});

	it("annotates access level in action comments", () => {
		const output = generateServiceFile(minimalService);
		expect(output).toContain("[Read] testservice:GetItem");
		expect(output).toContain("[Write] testservice:PutItem");
		expect(output).toContain("[List] testservice:ListItems");
	});

	it("generates multi-ARN resources with variant builders", () => {
		const multiArnService: ServiceDetail = {
			Name: "multiservice",
			Version: "v1.0",
			Actions: [
				{
					Name: "GetThing",
					Annotations: { Properties: { IsList: false, IsPermissionManagement: false, IsTaggingOnly: false, IsWrite: false } },
				},
			],
			Resources: [
				{
					Name: "widget",
					ARNFormats: [
						"arn:${Partition}:multiservice:${Region}:${Account}:apis/${ApiId}/widgets/${WidgetId}",
						"arn:${Partition}:multiservice:${Region}:${Account}:restapis/${RestApiId}/widgets/${WidgetId}",
					],
				},
			],
		};

		const output = generateServiceFile(multiArnService);

		// Should generate variant builders
		expect(output).toContain("widgetVariant1");
		expect(output).toContain("widgetVariant2");
		// Should have validator
		expect(output).toContain("isValidWidgetArn");
		// Should have parser
		expect(output).toContain("parseWidgetArn");
		// Should have the combined regex (non-capturing) and parse regex
		expect(output).toContain("WidgetArnRegex");
		expect(output).toContain("WidgetParseRegex");
		// Regex should use non-capturing groups for the validator
		expect(output).toMatch(/WidgetArnRegex.*\(\?:/);
	});

	it("handles resources with no ARN formats", () => {
		const noArnService: ServiceDetail = {
			Name: "noarn",
			Version: "v1.0",
			Actions: [
				{
					Name: "Do",
					Annotations: { Properties: { IsList: false, IsPermissionManagement: false, IsTaggingOnly: false, IsWrite: true } },
				},
			],
			Resources: [
				{ Name: "thing" }, // No ARNFormats
			],
		};

		const output = generateServiceFile(noArnService);
		// Resources class should still be generated but without builders for this resource
		expect(output).not.toContain("static thing(");
		expect(output).not.toContain("isValidThingArn");
	});

	it("handles permission management and tagging access levels", () => {
		const permService: ServiceDetail = {
			Name: "permtest",
			Version: "v1.0",
			Actions: [
				{
					Name: "SetPolicy",
					Annotations: { Properties: { IsList: false, IsPermissionManagement: true, IsTaggingOnly: false, IsWrite: false } },
				},
				{
					Name: "TagResource",
					Annotations: { Properties: { IsList: false, IsPermissionManagement: false, IsTaggingOnly: true, IsWrite: false } },
				},
			],
		};

		const output = generateServiceFile(permService);
		expect(output).toContain("[PermissionManagement] permtest:SetPolicy");
		expect(output).toContain("[Tagging] permtest:TagResource");
		expect(output).toMatch(/PERMISSION_MANAGEMENT_ACTIONS.*PermtestActions\.SET_POLICY/s);
		expect(output).toMatch(/TAGGING_ACTIONS.*PermtestActions\.TAG_RESOURCE/s);
	});
});

describe("generateForService (file I/O)", () => {
	let tmpDir: string;

	beforeEach(() => {
		tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "gen-service-test-"));
	});

	afterEach(() => {
		fs.rmSync(tmpDir, { recursive: true, force: true });
	});

	it("writes a TypeScript file to the output directory", async () => {
		const dataDir = path.join(tmpDir, "data");
		const outputDir = path.join(tmpDir, "output");
		fs.mkdirSync(dataDir, { recursive: true });

		const serviceData: ServiceDetail = {
			Name: "filetest",
			Version: "v1.0",
			Actions: [
				{
					Name: "Read",
					Annotations: { Properties: { IsList: false, IsPermissionManagement: false, IsTaggingOnly: false, IsWrite: false } },
				},
			],
		};

		const jsonPath = path.join(dataDir, "filetest.json");
		fs.writeFileSync(jsonPath, JSON.stringify(serviceData), "utf-8");

		const outputPath = await generateForService(jsonPath, outputDir);

		expect(outputPath).toBe(path.join(outputDir, "filetest.ts"));
		expect(fs.existsSync(outputPath)).toBe(true);

		const content = fs.readFileSync(outputPath, "utf-8");
		expect(content).toContain("AUTO-GENERATED FILE");
		expect(content).toContain("FiletestActions");
		expect(content).toContain('static readonly READ = "filetest:Read"');
	});

	it("creates the output directory if it does not exist", async () => {
		const dataDir = path.join(tmpDir, "data");
		const outputDir = path.join(tmpDir, "nested", "output");
		fs.mkdirSync(dataDir, { recursive: true });

		const serviceData: ServiceDetail = {
			Name: "nested",
			Version: "v1.0",
			Actions: [{ Name: "Act", Annotations: { Properties: { IsList: false, IsPermissionManagement: false, IsTaggingOnly: false, IsWrite: true } } }],
		};

		fs.writeFileSync(path.join(dataDir, "nested.json"), JSON.stringify(serviceData), "utf-8");

		const outputPath = await generateForService(path.join(dataDir, "nested.json"), outputDir);
		expect(fs.existsSync(outputPath)).toBe(true);
	});
});
