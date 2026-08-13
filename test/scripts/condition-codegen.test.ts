import {
	conditionKeyToConstant,
	conditionKeyToMethodName,
	generateConditionBuilder,
	shouldGenerateBuilder,
	typeToOperator,
	typeToTsType,
} from "../../scripts/condition-codegen";

describe("typeToOperator", () => {
	it("maps String to StringEquals", () => {
		expect(typeToOperator("String")).toBe("StringEquals");
	});

	it("maps ArrayOfString to ForAllValues:StringEquals", () => {
		expect(typeToOperator("ArrayOfString")).toBe("ForAllValues:StringEquals");
	});

	it("maps Numeric to NumericEquals", () => {
		expect(typeToOperator("Numeric")).toBe("NumericEquals");
	});

	it("maps Bool to Bool", () => {
		expect(typeToOperator("Bool")).toBe("Bool");
	});

	it("maps Date to DateEquals", () => {
		expect(typeToOperator("Date")).toBe("DateEquals");
	});

	it("maps ARN to ArnEquals", () => {
		expect(typeToOperator("ARN")).toBe("ArnEquals");
	});

	it("maps ArrayOfARN to ForAllValues:ArnEquals", () => {
		expect(typeToOperator("ArrayOfARN")).toBe("ForAllValues:ArnEquals");
	});

	it("maps IPAddress to IpAddress", () => {
		expect(typeToOperator("IPAddress")).toBe("IpAddress");
	});

	it("defaults unknown types to StringEquals", () => {
		expect(typeToOperator("UnknownType")).toBe("StringEquals");
	});
});

describe("typeToTsType", () => {
	it("maps String to string", () => {
		expect(typeToTsType("String")).toBe("string");
	});

	it("maps ArrayOfString to string[]", () => {
		expect(typeToTsType("ArrayOfString")).toBe("string[]");
	});

	it("maps Numeric to number", () => {
		expect(typeToTsType("Numeric")).toBe("number");
	});

	it("maps Bool to boolean", () => {
		expect(typeToTsType("Bool")).toBe("boolean");
	});

	it("maps Date to string", () => {
		expect(typeToTsType("Date")).toBe("string");
	});

	it("maps ARN to string", () => {
		expect(typeToTsType("ARN")).toBe("string");
	});

	it("maps ArrayOfARN to string[]", () => {
		expect(typeToTsType("ArrayOfARN")).toBe("string[]");
	});

	it("maps IPAddress to string", () => {
		expect(typeToTsType("IPAddress")).toBe("string");
	});
});

describe("shouldGenerateBuilder", () => {
	it("returns true for service-specific keys", () => {
		expect(shouldGenerateBuilder("dynamodb:Attributes", "dynamodb")).toBe(true);
		expect(shouldGenerateBuilder("s3:prefix", "s3")).toBe(true);
	});

	it("returns true for aws: global keys", () => {
		expect(shouldGenerateBuilder("aws:RequestTag/${TagKey}", "dynamodb")).toBe(
			true,
		);
		expect(shouldGenerateBuilder("aws:TagKeys", "s3")).toBe(true);
	});

	it("returns false for third-party OIDC keys", () => {
		expect(shouldGenerateBuilder("accounts.google.com:aud", "sts")).toBe(false);
		expect(
			shouldGenerateBuilder("token.actions.githubusercontent.com:sub", "sts"),
		).toBe(false);
		expect(shouldGenerateBuilder("saml:aud", "sts")).toBe(false);
	});
});

describe("conditionKeyToMethodName", () => {
	it("converts service-prefixed keys", () => {
		expect(conditionKeyToMethodName("dynamodb:Attributes", "dynamodb")).toBe(
			"attributes",
		);
		expect(conditionKeyToMethodName("dynamodb:LeadingKeys", "dynamodb")).toBe(
			"leadingKeys",
		);
		expect(
			conditionKeyToMethodName("dynamodb:ReturnConsumedCapacity", "dynamodb"),
		).toBe("returnConsumedCapacity");
	});

	it("converts aws: global keys", () => {
		expect(
			conditionKeyToMethodName("aws:RequestTag/${TagKey}", "dynamodb"),
		).toBe("requestTag");
		expect(conditionKeyToMethodName("aws:TagKeys", "dynamodb")).toBe("tagKeys");
		expect(
			conditionKeyToMethodName("aws:ResourceTag/${TagKey}", "dynamodb"),
		).toBe("resourceTag");
	});

	it("handles keys with no template variable", () => {
		expect(conditionKeyToMethodName("dynamodb:FullTableScan", "dynamodb")).toBe(
			"fullTableScan",
		);
	});
});

describe("conditionKeyToConstant", () => {
	it("converts to UPPER_SNAKE_CASE", () => {
		expect(conditionKeyToConstant("dynamodb:Attributes")).toBe("ATTRIBUTES");
		expect(conditionKeyToConstant("dynamodb:LeadingKeys")).toBe("LEADING_KEYS");
		expect(conditionKeyToConstant("aws:RequestTag/${TagKey}")).toBe(
			"AWS_REQUEST_TAG",
		);
		expect(conditionKeyToConstant("aws:TagKeys")).toBe("AWS_TAG_KEYS");
	});
});

describe("generateConditionBuilder", () => {
	it("generates a String condition builder", () => {
		const code = generateConditionBuilder(
			"dynamodb:EnclosingOperation",
			["String"],
			"dynamodb",
		);

		expect(code).toContain("static enclosingOperation(value: string)");
		expect(code).toContain('"StringEquals"');
		expect(code).toContain('"dynamodb:EnclosingOperation"');
	});

	it("generates an ArrayOfString condition builder", () => {
		const code = generateConditionBuilder(
			"dynamodb:Attributes",
			["ArrayOfString"],
			"dynamodb",
		);

		expect(code).toContain("static attributes(values: string[])");
		expect(code).toContain('"ForAllValues:StringEquals"');
		expect(code).toContain('"dynamodb:Attributes"');
	});

	it("generates a Bool condition builder", () => {
		const code = generateConditionBuilder(
			"dynamodb:FullTableScan",
			["Bool"],
			"dynamodb",
		);

		expect(code).toContain("static fullTableScan(value: boolean)");
		expect(code).toContain('"Bool"');
	});

	it("generates a Numeric condition builder", () => {
		const code = generateConditionBuilder("s3:max-keys", ["Numeric"], "s3");

		expect(code).toContain("value: number");
		expect(code).toContain('"NumericEquals"');
	});
});
