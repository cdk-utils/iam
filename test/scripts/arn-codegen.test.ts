import {
	buildRegexPattern,
	generateBuilderParams,
	parseArnTemplate,
} from "../../scripts/arn-codegen";

describe("parseArnTemplate", () => {
	it("parses a standard regional resource ARN", () => {
		const parsed = parseArnTemplate(
			"arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}",
		);

		expect(parsed.isGlobal).toBe(false);
		expect(parsed.resourceVariables).toHaveLength(1);
		expect(parsed.resourceVariables[0].name).toBe("TableName");
		expect(parsed.resourceVariables[0].paramName).toBe("tableName");
		expect(parsed.resourceVariables[0].isCommon).toBe(false);
	});

	it("parses a global resource ARN (empty region)", () => {
		const parsed = parseArnTemplate(
			"arn:${Partition}:dynamodb::${Account}:global-table/${GlobalTableName}",
		);

		expect(parsed.isGlobal).toBe(true);
		expect(parsed.resourceVariables).toHaveLength(1);
		expect(parsed.resourceVariables[0].name).toBe("GlobalTableName");
		expect(parsed.resourceVariables[0].paramName).toBe("globalTableName");
	});

	it("parses a multi-variable resource ARN", () => {
		const parsed = parseArnTemplate(
			"arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}/index/${IndexName}",
		);

		expect(parsed.resourceVariables).toHaveLength(2);
		expect(parsed.resourceVariables[0].name).toBe("TableName");
		expect(parsed.resourceVariables[1].name).toBe("IndexName");
	});

	it("identifies common variables correctly", () => {
		const parsed = parseArnTemplate("arn:${Partition}:s3:::${BucketName}");

		// Partition is common, BucketName is resource-specific
		expect(parsed.resourceVariables).toHaveLength(1);
		expect(parsed.resourceVariables[0].name).toBe("BucketName");
	});
});

describe("buildRegexPattern", () => {
	it("generates a pattern that matches valid ARNs", () => {
		const pattern = buildRegexPattern(
			"arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}",
		);
		const regex = new RegExp(pattern);

		expect(
			regex.test("arn:aws:dynamodb:us-east-1:123456789012:table/MyTable"),
		).toBe(true);
		expect(
			regex.test("arn:aws-cn:dynamodb:cn-north-1:111222333444:table/Test"),
		).toBe(true);
	});

	it("rejects invalid ARNs", () => {
		const pattern = buildRegexPattern(
			"arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}",
		);
		const regex = new RegExp(pattern);

		expect(
			regex.test("arn:aws:dynamodb:us-east-1:123456789012:index/MyIndex"),
		).toBe(false);
		expect(regex.test("not-an-arn")).toBe(false);
	});

	it("handles global resources (empty region)", () => {
		const pattern = buildRegexPattern(
			"arn:${Partition}:dynamodb::${Account}:global-table/${GlobalTableName}",
		);
		const regex = new RegExp(pattern);

		expect(
			regex.test("arn:aws:dynamodb::123456789012:global-table/MyGlobal"),
		).toBe(true);
		// Should not match if region is present
		expect(
			regex.test(
				"arn:aws:dynamodb:us-east-1:123456789012:global-table/MyGlobal",
			),
		).toBe(false);
	});

	it("extracts named capture groups", () => {
		const pattern = buildRegexPattern(
			"arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}",
		);
		const regex = new RegExp(pattern);
		const match = regex.exec(
			"arn:aws:dynamodb:us-east-1:123456789012:table/MyTable",
		);

		expect(match?.groups?.partition).toBe("aws");
		expect(match?.groups?.region).toBe("us-east-1");
		expect(match?.groups?.account).toBe("123456789012");
		expect(match?.groups?.tableName).toBe("MyTable");
	});

	it("handles ARNs with wildcard characters", () => {
		const pattern = buildRegexPattern(
			"arn:${Partition}:amplifybackend:${Region}:${Account}:/backend/${AppId}/api/*",
		);
		const regex = new RegExp(pattern);

		expect(
			regex.test(
				"arn:aws:amplifybackend:us-east-1:123456789012:/backend/app1/api/anything",
			),
		).toBe(true);
	});

	it("handles multi-variable ARNs", () => {
		const pattern = buildRegexPattern(
			"arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}/index/${IndexName}",
		);
		const regex = new RegExp(pattern);
		const match = regex.exec(
			"arn:aws:dynamodb:eu-west-1:999:table/Orders/index/GSI1",
		);

		expect(match?.groups?.tableName).toBe("Orders");
		expect(match?.groups?.indexName).toBe("GSI1");
	});
});

describe("generateBuilderParams", () => {
	it("returns resource-specific required params and common optional params", () => {
		const parsed = parseArnTemplate(
			"arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}",
		);
		const params = generateBuilderParams(parsed);

		const required = params.filter((p) => p.required);
		const optional = params.filter((p) => !p.required);

		expect(required).toHaveLength(1);
		expect(required[0].name).toBe("tableName");

		// region, account, partition
		expect(optional).toHaveLength(3);
		expect(optional.map((p) => p.name)).toContain("region");
		expect(optional.map((p) => p.name)).toContain("account");
		expect(optional.map((p) => p.name)).toContain("partition");
	});

	it("omits region param for global resources", () => {
		const parsed = parseArnTemplate(
			"arn:${Partition}:dynamodb::${Account}:global-table/${GlobalTableName}",
		);
		const params = generateBuilderParams(parsed);

		const optional = params.filter((p) => !p.required);
		expect(optional.map((p) => p.name)).not.toContain("region");
		// Still has account and partition
		expect(optional).toHaveLength(2);
	});

	it("handles multiple resource variables", () => {
		const parsed = parseArnTemplate(
			"arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}/index/${IndexName}",
		);
		const params = generateBuilderParams(parsed);

		const required = params.filter((p) => p.required);
		expect(required).toHaveLength(2);
		expect(required[0].name).toBe("tableName");
		expect(required[1].name).toBe("indexName");
	});
});
