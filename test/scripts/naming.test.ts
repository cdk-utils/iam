import {
	splitWords,
	toCamelCase,
	toFileName,
	toPascalCase,
	toServiceClassName,
	toUpperSnakeCase,
} from "../../scripts/naming";

describe("splitWords", () => {
	it("splits on hyphens", () => {
		expect(splitWords("access-analyzer")).toEqual(["access", "analyzer"]);
	});

	it("splits on underscores", () => {
		expect(splitWords("batch_get_item")).toEqual(["batch", "get", "item"]);
	});

	it("splits on camelCase boundaries", () => {
		expect(splitWords("BatchGetItem")).toEqual(["Batch", "Get", "Item"]);
	});

	it("splits on ACRONYM-Word boundaries", () => {
		expect(splitWords("DynamoDB")).toEqual(["Dynamo", "DB"]);
		expect(splitWords("IAMRole")).toEqual(["IAM", "Role"]);
	});

	it("handles single words", () => {
		expect(splitWords("table")).toEqual(["table"]);
		expect(splitWords("S3")).toEqual(["S3"]);
	});

	it("handles dots", () => {
		expect(splitWords("some.dotted.name")).toEqual(["some", "dotted", "name"]);
	});

	it("handles empty string", () => {
		expect(splitWords("")).toEqual([]);
	});
});

describe("toPascalCase", () => {
	it("converts simple words", () => {
		expect(toPascalCase("access-analyzer")).toBe("AccessAnalyzer");
		expect(toPascalCase("cloud-trail")).toBe("CloudTrail");
	});

	it("handles acronyms", () => {
		expect(toPascalCase("s3")).toBe("S3");
		expect(toPascalCase("ec2")).toBe("EC2");
		expect(toPascalCase("iam")).toBe("IAM");
		expect(toPascalCase("kms")).toBe("KMS");
		expect(toPascalCase("sts")).toBe("STS");
	});

	it("handles mixed acronyms and words", () => {
		expect(toPascalCase("ec2-instance-connect")).toBe("EC2InstanceConnect");
		expect(toPascalCase("rds-data")).toBe("RDSData");
	});

	it("handles already-PascalCase input", () => {
		expect(toPascalCase("BatchGetItem")).toBe("BatchGetItem");
	});

	it("handles single character", () => {
		expect(toPascalCase("q")).toBe("Q");
	});
});

describe("toUpperSnakeCase", () => {
	it("converts PascalCase", () => {
		expect(toUpperSnakeCase("BatchGetItem")).toBe("BATCH_GET_ITEM");
		expect(toUpperSnakeCase("CreateTable")).toBe("CREATE_TABLE");
		expect(toUpperSnakeCase("PutItem")).toBe("PUT_ITEM");
	});

	it("converts hyphenated names", () => {
		expect(toUpperSnakeCase("global-table")).toBe("GLOBAL_TABLE");
		expect(toUpperSnakeCase("access-analyzer")).toBe("ACCESS_ANALYZER");
	});

	it("handles single words", () => {
		expect(toUpperSnakeCase("table")).toBe("TABLE");
		expect(toUpperSnakeCase("Query")).toBe("QUERY");
	});

	it("handles acronyms in PascalCase", () => {
		expect(toUpperSnakeCase("IAMRole")).toBe("IAM_ROLE");
		expect(toUpperSnakeCase("GetDBInstance")).toBe("GET_DB_INSTANCE");
	});

	it("handles already-upper input", () => {
		expect(toUpperSnakeCase("TABLE")).toBe("TABLE");
	});
});

describe("toCamelCase", () => {
	it("converts hyphenated names", () => {
		expect(toCamelCase("global-table")).toBe("globalTable");
		expect(toCamelCase("access-analyzer")).toBe("accessAnalyzer");
	});

	it("converts PascalCase to camelCase", () => {
		expect(toCamelCase("BatchGetItem")).toBe("batchGetItem");
		expect(toCamelCase("CreateTable")).toBe("createTable");
	});

	it("handles single words", () => {
		expect(toCamelCase("table")).toBe("table");
		expect(toCamelCase("Table")).toBe("table");
	});

	it("lowercases first word even if acronym", () => {
		expect(toCamelCase("IAMRole")).toBe("iamRole");
		expect(toCamelCase("S3Bucket")).toBe("s3Bucket");
	});

	it("keeps non-first acronyms uppercase", () => {
		expect(toCamelCase("my-vpc")).toBe("myVPC");
		expect(toCamelCase("get-api")).toBe("getAPI");
	});
});

describe("toFileName", () => {
	it("lowercases and preserves hyphens", () => {
		expect(toFileName("dynamodb")).toBe("dynamodb");
		expect(toFileName("access-analyzer")).toBe("access-analyzer");
		expect(toFileName("S3")).toBe("s3");
	});
});

describe("toServiceClassName", () => {
	it("uses known compound mappings", () => {
		expect(toServiceClassName("dynamodb")).toBe("DynamoDB");
		expect(toServiceClassName("apigateway")).toBe("ApiGateway");
		expect(toServiceClassName("cloudformation")).toBe("CloudFormation");
		expect(toServiceClassName("elasticache")).toBe("ElastiCache");
		expect(toServiceClassName("sagemaker")).toBe("SageMaker");
		expect(toServiceClassName("secretsmanager")).toBe("SecretsManager");
	});

	it("falls back to toPascalCase for unknown services", () => {
		expect(toServiceClassName("s3")).toBe("S3");
		expect(toServiceClassName("iam")).toBe("IAM");
		expect(toServiceClassName("access-analyzer")).toBe("AccessAnalyzer");
		expect(toServiceClassName("ec2")).toBe("EC2");
	});

	it("handles hyphenated compound names not in the known list", () => {
		expect(toServiceClassName("some-new-service")).toBe("SomeNewService");
	});
});
