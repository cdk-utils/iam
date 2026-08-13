import {
	fetchServiceDetail,
	fetchServiceReferenceList,
	validateServiceDetail,
	validateServiceReferenceList,
} from "../../scripts/fetch-service-reference";
import type { ServiceDetail, ServiceReferenceList } from "../../scripts/types";

// Mock global fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;

beforeEach(() => {
	mockFetch.mockReset();
});

// =============================================================================
// Fixtures
// =============================================================================

const validServiceReferenceList: ServiceReferenceList = [
	{
		service: "dynamodb",
		url: "https://servicereference.us-east-1.amazonaws.com/v1/dynamodb/dynamodb.json",
		modified: 1774454984,
	},
	{
		service: "s3",
		url: "https://servicereference.us-east-1.amazonaws.com/v1/s3/s3.json",
		modified: 1785247299,
	},
];

const validServiceDetail: ServiceDetail = {
	Name: "dynamodb",
	Version: "v1.4",
	Actions: [
		{
			Name: "BatchGetItem",
			ActionConditionKeys: ["dynamodb:Attributes"],
			Annotations: {
				Properties: {
					IsList: false,
					IsPermissionManagement: false,
					IsTaggingOnly: false,
					IsWrite: false,
				},
			},
			Resources: [{ Name: "table" }],
			SupportedBy: {
				"IAM Access Analyzer Policy Generation": false,
				"IAM Action Last Accessed": false,
			},
		},
	],
	ConditionKeys: [
		{
			Name: "aws:RequestTag/${TagKey}",
			Types: ["String"],
		},
	],
	Operations: [
		{
			Name: "BatchExecuteStatement",
			AuthorizedActions: [{ Name: "PartiQLDelete", Service: "dynamodb" }],
			SDK: [
				{
					Name: "dynamodb",
					Method: "batch_execute_statement",
					Package: "Boto3",
				},
			],
		},
	],
	Resources: [
		{
			Name: "table",
			ARNFormats: [
				"arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}",
			],
			ConditionKeys: ["aws:ResourceTag/${TagKey}"],
		},
	],
};

// =============================================================================
// validateServiceReferenceList
// =============================================================================

describe("validateServiceReferenceList", () => {
	it("accepts a valid service reference list", () => {
		expect(() =>
			validateServiceReferenceList(validServiceReferenceList),
		).not.toThrow();
	});

	it("rejects non-array input", () => {
		expect(() => validateServiceReferenceList("not an array")).toThrow(
			"expected an array",
		);
		expect(() => validateServiceReferenceList(null)).toThrow(
			"expected an array",
		);
		expect(() => validateServiceReferenceList(123)).toThrow(
			"expected an array",
		);
		expect(() => validateServiceReferenceList({})).toThrow("expected an array");
	});

	it("rejects empty array", () => {
		expect(() => validateServiceReferenceList([])).toThrow(
			"expected a non-empty array",
		);
	});

	it("rejects entry with missing service", () => {
		expect(() =>
			validateServiceReferenceList([
				{ url: "https://example.com", modified: 123 },
			]),
		).toThrow("'service' must be a non-empty string");
	});

	it("rejects entry with empty service", () => {
		expect(() =>
			validateServiceReferenceList([
				{ service: "", url: "https://example.com", modified: 123 },
			]),
		).toThrow("'service' must be a non-empty string");
	});

	it("rejects entry with missing url", () => {
		expect(() =>
			validateServiceReferenceList([{ service: "s3", modified: 123 }]),
		).toThrow("'url' must be a non-empty string");
	});

	it("rejects entry with non-number modified", () => {
		expect(() =>
			validateServiceReferenceList([
				{ service: "s3", url: "https://example.com", modified: "abc" },
			]),
		).toThrow("'modified' must be a finite number");
	});

	it("rejects entry with Infinity modified", () => {
		expect(() =>
			validateServiceReferenceList([
				{
					service: "s3",
					url: "https://example.com",
					modified: Number.POSITIVE_INFINITY,
				},
			]),
		).toThrow("'modified' must be a finite number");
	});

	it("rejects entry that is not an object", () => {
		expect(() => validateServiceReferenceList(["string"])).toThrow(
			"expected an object",
		);
		expect(() => validateServiceReferenceList([null])).toThrow(
			"expected an object",
		);
	});

	it("includes the index in error messages", () => {
		expect(() =>
			validateServiceReferenceList([
				{ service: "s3", url: "https://example.com", modified: 123 },
				{ service: "", url: "https://example.com", modified: 456 },
			]),
		).toThrow("index 1");
	});
});

// =============================================================================
// validateServiceDetail
// =============================================================================

describe("validateServiceDetail", () => {
	it("accepts a valid service detail", () => {
		expect(() => validateServiceDetail(validServiceDetail)).not.toThrow();
	});

	it("accepts minimal valid service detail (empty arrays)", () => {
		expect(() =>
			validateServiceDetail({
				Name: "test",
				Version: "v1.0",
				Actions: [],
				ConditionKeys: [],
				Operations: [],
				Resources: [],
			}),
		).not.toThrow();
	});

	it("accepts service detail without optional arrays", () => {
		expect(() =>
			validateServiceDetail({
				Name: "test",
				Version: "v1.0",
				Actions: [],
			}),
		).not.toThrow();
	});

	it("rejects non-object input", () => {
		expect(() => validateServiceDetail(null)).toThrow("expected an object");
		expect(() => validateServiceDetail("string")).toThrow("expected an object");
		expect(() => validateServiceDetail([])).toThrow(
			"'Name' must be a non-empty string",
		);
	});

	it("rejects missing Name", () => {
		expect(() =>
			validateServiceDetail({
				Version: "v1.0",
				Actions: [],
				ConditionKeys: [],
				Operations: [],
				Resources: [],
			}),
		).toThrow("'Name' must be a non-empty string");
	});

	it("rejects empty Name", () => {
		expect(() =>
			validateServiceDetail({
				Name: "",
				Version: "v1.0",
				Actions: [],
				ConditionKeys: [],
				Operations: [],
				Resources: [],
			}),
		).toThrow("'Name' must be a non-empty string");
	});

	it("rejects missing Version", () => {
		expect(() =>
			validateServiceDetail({
				Name: "test",
				Actions: [],
				ConditionKeys: [],
				Operations: [],
				Resources: [],
			}),
		).toThrow("'Version' must be a non-empty string");
	});

	it("rejects non-array Actions", () => {
		expect(() =>
			validateServiceDetail({
				Name: "test",
				Version: "v1.0",
				Actions: "not-array",
				ConditionKeys: [],
				Operations: [],
				Resources: [],
			}),
		).toThrow("'Actions' must be an array");
	});

	it("rejects non-array ConditionKeys when present", () => {
		expect(() =>
			validateServiceDetail({
				Name: "test",
				Version: "v1.0",
				Actions: [],
				ConditionKeys: "not-array",
				Operations: [],
				Resources: [],
			}),
		).toThrow("'ConditionKeys' must be an array if present");
	});

	it("rejects non-array Operations when present", () => {
		expect(() =>
			validateServiceDetail({
				Name: "test",
				Version: "v1.0",
				Actions: [],
				ConditionKeys: [],
				Operations: {},
				Resources: [],
			}),
		).toThrow("'Operations' must be an array if present");
	});

	it("rejects non-array Resources when present", () => {
		expect(() =>
			validateServiceDetail({
				Name: "test",
				Version: "v1.0",
				Actions: [],
				ConditionKeys: [],
				Operations: [],
				Resources: 42,
			}),
		).toThrow("'Resources' must be an array if present");
	});

	it("rejects action with missing Name", () => {
		expect(() =>
			validateServiceDetail({
				Name: "test",
				Version: "v1.0",
				Actions: [{ Resources: [] }],
				ConditionKeys: [],
				Operations: [],
				Resources: [],
			}),
		).toThrow("Actions[0].Name must be a non-empty string");
	});

	it("rejects condition key with missing Name", () => {
		expect(() =>
			validateServiceDetail({
				Name: "test",
				Version: "v1.0",
				Actions: [],
				ConditionKeys: [{ Types: ["String"] }],
				Operations: [],
				Resources: [],
			}),
		).toThrow("ConditionKeys[0].Name must be a non-empty string");
	});

	it("rejects condition key with missing Types", () => {
		expect(() =>
			validateServiceDetail({
				Name: "test",
				Version: "v1.0",
				Actions: [],
				ConditionKeys: [{ Name: "aws:tag" }],
				Operations: [],
				Resources: [],
			}),
		).toThrow("ConditionKeys[0].Types must be an array");
	});

	it("rejects operation with missing Name", () => {
		expect(() =>
			validateServiceDetail({
				Name: "test",
				Version: "v1.0",
				Actions: [],
				ConditionKeys: [],
				Operations: [{ SDK: [] }],
				Resources: [],
			}),
		).toThrow("Operations[0].Name must be a non-empty string");
	});

	it("rejects resource with missing Name", () => {
		expect(() =>
			validateServiceDetail({
				Name: "test",
				Version: "v1.0",
				Actions: [],
				ConditionKeys: [],
				Operations: [],
				Resources: [{ ARNFormats: [] }],
			}),
		).toThrow("Resources[0].Name must be a non-empty string");
	});
});

// =============================================================================
// fetchServiceReferenceList
// =============================================================================

describe("fetchServiceReferenceList", () => {
	it("fetches and returns a validated service reference list", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			status: 200,
			json: async () => validServiceReferenceList,
		});

		const result = await fetchServiceReferenceList();

		expect(mockFetch).toHaveBeenCalledWith(
			"https://servicereference.us-east-1.amazonaws.com",
		);
		expect(result).toEqual(validServiceReferenceList);
		expect(result).toHaveLength(2);
		expect(result[0].service).toBe("dynamodb");
	});

	it("throws on HTTP error", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			status: 503,
			statusText: "Service Unavailable",
		});

		await expect(fetchServiceReferenceList()).rejects.toThrow(
			"Failed to fetch service reference list: HTTP 503 Service Unavailable",
		);
	});

	it("throws on invalid response body", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			status: 200,
			json: async () => ({ not: "an array" }),
		});

		await expect(fetchServiceReferenceList()).rejects.toThrow(
			"expected an array",
		);
	});

	it("throws on network error", async () => {
		mockFetch.mockRejectedValueOnce(new Error("Network failure"));

		await expect(fetchServiceReferenceList()).rejects.toThrow(
			"Network failure",
		);
	});
});

// =============================================================================
// fetchServiceDetail
// =============================================================================

describe("fetchServiceDetail", () => {
	const serviceUrl =
		"https://servicereference.us-east-1.amazonaws.com/v1/dynamodb/dynamodb.json";

	it("fetches and returns a validated service detail", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			status: 200,
			json: async () => validServiceDetail,
		});

		const result = await fetchServiceDetail(serviceUrl);

		expect(mockFetch).toHaveBeenCalledWith(serviceUrl);
		expect(result.Name).toBe("dynamodb");
		expect(result.Version).toBe("v1.4");
		expect(result.Actions).toHaveLength(1);
		expect(result.Actions[0].Name).toBe("BatchGetItem");
		expect(result.ConditionKeys).toHaveLength(1);
		expect(result.Operations).toHaveLength(1);
		expect(result.Resources).toHaveLength(1);
	});

	it("throws on HTTP error", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			status: 404,
			statusText: "Not Found",
		});

		await expect(fetchServiceDetail(serviceUrl)).rejects.toThrow(
			"Failed to fetch service detail from",
		);
	});

	it("includes status code in HTTP error message", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			status: 500,
			statusText: "Internal Server Error",
		});

		await expect(fetchServiceDetail(serviceUrl)).rejects.toThrow(
			"HTTP 500 Internal Server Error",
		);
	});

	it("throws on invalid response body", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			status: 200,
			json: async () => "not an object",
		});

		await expect(fetchServiceDetail(serviceUrl)).rejects.toThrow(
			"expected an object",
		);
	});

	it("throws when serviceUrl is empty", async () => {
		await expect(fetchServiceDetail("")).rejects.toThrow(
			"serviceUrl must be a non-empty string",
		);
	});

	it("throws when serviceUrl is not a string", async () => {
		await expect(fetchServiceDetail(null as unknown as string)).rejects.toThrow(
			"serviceUrl must be a non-empty string",
		);
	});

	it("throws on network error", async () => {
		mockFetch.mockRejectedValueOnce(new Error("ECONNREFUSED"));

		await expect(fetchServiceDetail(serviceUrl)).rejects.toThrow(
			"ECONNREFUSED",
		);
	});
});
