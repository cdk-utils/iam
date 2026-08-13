import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import { updateServiceReference } from "../../scripts/run-update";
import type { ServiceDetail, ServiceReferenceEntry } from "../../scripts/types";

// Mock dependencies
jest.mock("../../scripts/fetch-service-reference", () => ({
	fetchServiceReferenceList: jest.fn(),
	fetchServiceDetail: jest.fn(),
}));

jest.mock("../../scripts/generate-service", () => ({
	generateForService: jest.fn(),
}));

jest.mock("../../scripts/generate-index", () => ({
	generateIndex: jest.fn(),
}));

import {
	fetchServiceDetail,
	fetchServiceReferenceList,
} from "../../scripts/fetch-service-reference";
import { generateForService } from "../../scripts/generate-service";
import { generateIndex } from "../../scripts/generate-index";

const mockFetchList = fetchServiceReferenceList as jest.MockedFunction<typeof fetchServiceReferenceList>;
const mockFetchDetail = fetchServiceDetail as jest.MockedFunction<typeof fetchServiceDetail>;
const mockGenerateForService = generateForService as jest.MockedFunction<typeof generateForService>;
const mockGenerateIndex = generateIndex as jest.MockedFunction<typeof generateIndex>;

// =============================================================================
// Test helpers
// =============================================================================

let tmpDir: string;
let dataDir: string;
let timestampFile: string;

beforeEach(() => {
	tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "iam-update-test-"));
	dataDir = path.join(tmpDir, "data");
	timestampFile = path.join(dataDir, ".last-sync-timestamp");
	fs.mkdirSync(dataDir, { recursive: true });
	jest.resetAllMocks();
	mockGenerateForService.mockResolvedValue("/fake/path.ts");
	mockGenerateIndex.mockReturnValue("/fake/index.ts");
});

afterEach(() => {
	fs.rmSync(tmpDir, { recursive: true, force: true });
});

// =============================================================================
// Fixtures
// =============================================================================

const serviceEntries: ServiceReferenceEntry[] = [
	{ service: "dynamodb", url: "https://example.com/dynamodb.json", modified: 1000 },
	{ service: "s3", url: "https://example.com/s3.json", modified: 2000 },
	{ service: "lambda", url: "https://example.com/lambda.json", modified: 3000 },
];

function makeDetail(name: string): ServiceDetail {
	return {
		Name: name,
		Version: "v1.0",
		Actions: [{ Name: "TestAction" }],
		ConditionKeys: [{ Name: `${name}:key`, Types: ["String"] }],
		Operations: [{ Name: "TestOp", AuthorizedActions: [{ Name: "TestAction", Service: name }] }],
		Resources: [{ Name: "item", ARNFormats: [`arn:\${Partition}:${name}:\${Region}:\${Account}:item/\${Id}`] }],
	};
}

// =============================================================================
// Tests
// =============================================================================

describe("updateServiceReference", () => {
	it("skips when no services have been updated", async () => {
		fs.writeFileSync(timestampFile, "9999", "utf-8");
		mockFetchList.mockResolvedValueOnce(serviceEntries);

		const result = await updateServiceReference({
			dataDir,
			timestampFile,
			nowTimestamp: 10000,
		});

		expect(result.skipped).toBe(true);
		expect(result.updatedCount).toBe(0);
		expect(result.updatedServices).toEqual([]);
		expect(result.failedCount).toBe(0);
		expect(mockFetchDetail).not.toHaveBeenCalled();
		expect(mockGenerateForService).not.toHaveBeenCalled();
		expect(mockGenerateIndex).not.toHaveBeenCalled();
		// Timestamp should NOT be updated on skip
		expect(fs.readFileSync(timestampFile, "utf-8")).toBe("9999");
	});

	it("fetches all services when no timestamp file exists", async () => {
		mockFetchList.mockResolvedValueOnce(serviceEntries);
		mockFetchDetail
			.mockResolvedValueOnce(makeDetail("dynamodb"))
			.mockResolvedValueOnce(makeDetail("s3"))
			.mockResolvedValueOnce(makeDetail("lambda"));

		const result = await updateServiceReference({
			dataDir,
			timestampFile,
			nowTimestamp: 5000,
		});

		expect(result.skipped).toBe(false);
		expect(result.updatedCount).toBe(3);
		expect(result.updatedServices).toEqual(["dynamodb", "s3", "lambda"]);
		expect(result.failedCount).toBe(0);

		// Verify each service was fetched and generated
		expect(mockFetchDetail).toHaveBeenCalledTimes(3);
		expect(mockGenerateForService).toHaveBeenCalledTimes(3);
		expect(mockGenerateForService).toHaveBeenCalledWith(path.join(dataDir, "dynamodb.json"));
		expect(mockGenerateForService).toHaveBeenCalledWith(path.join(dataDir, "s3.json"));
		expect(mockGenerateForService).toHaveBeenCalledWith(path.join(dataDir, "lambda.json"));

		// Verify barrel index was regenerated
		expect(mockGenerateIndex).toHaveBeenCalledTimes(1);

		// Verify data files were stored
		expect(fs.existsSync(path.join(dataDir, "dynamodb.json"))).toBe(true);
		expect(fs.existsSync(path.join(dataDir, "s3.json"))).toBe(true);
		expect(fs.existsSync(path.join(dataDir, "lambda.json"))).toBe(true);

		// Verify timestamp was updated
		expect(fs.readFileSync(timestampFile, "utf-8")).toBe("5000");
	});

	it("only updates services modified after the timestamp", async () => {
		fs.writeFileSync(timestampFile, "1500", "utf-8");
		mockFetchList.mockResolvedValueOnce(serviceEntries);
		mockFetchDetail
			.mockResolvedValueOnce(makeDetail("s3"))
			.mockResolvedValueOnce(makeDetail("lambda"));

		const result = await updateServiceReference({
			dataDir,
			timestampFile,
			nowTimestamp: 6000,
		});

		expect(result.skipped).toBe(false);
		expect(result.updatedCount).toBe(2);
		expect(result.updatedServices).toEqual(["s3", "lambda"]);

		// dynamodb (modified=1000) should NOT be fetched
		expect(mockFetchDetail).toHaveBeenCalledTimes(2);
		expect(mockFetchDetail).toHaveBeenCalledWith("https://example.com/s3.json");
		expect(mockFetchDetail).toHaveBeenCalledWith("https://example.com/lambda.json");

		expect(mockGenerateForService).toHaveBeenCalledTimes(2);
		expect(mockGenerateIndex).toHaveBeenCalledTimes(1);
		expect(fs.readFileSync(timestampFile, "utf-8")).toBe("6000");
	});

	it("continues processing other services when one fails", async () => {
		mockFetchList.mockResolvedValueOnce(serviceEntries);
		mockFetchDetail
			.mockResolvedValueOnce(makeDetail("dynamodb"))
			.mockRejectedValueOnce(new Error("Network timeout"))
			.mockResolvedValueOnce(makeDetail("lambda"));

		const result = await updateServiceReference({
			dataDir,
			timestampFile,
			nowTimestamp: 7000,
		});

		expect(result.skipped).toBe(false);
		expect(result.updatedCount).toBe(2);
		expect(result.updatedServices).toEqual(["dynamodb", "lambda"]);
		expect(result.failedCount).toBe(1);
		expect(result.failures).toEqual([
			{ service: "s3", error: "Network timeout" },
		]);

		// Still regenerates index and updates timestamp despite partial failure
		expect(mockGenerateIndex).toHaveBeenCalledTimes(1);
		expect(fs.readFileSync(timestampFile, "utf-8")).toBe("7000");
	});

	it("continues when generateForService fails for one service", async () => {
		mockFetchList.mockResolvedValueOnce([serviceEntries[0]]);
		mockFetchDetail.mockResolvedValueOnce(makeDetail("dynamodb"));
		mockGenerateForService.mockRejectedValueOnce(new Error("Codegen error"));

		const result = await updateServiceReference({
			dataDir,
			timestampFile,
			nowTimestamp: 8000,
		});

		expect(result.failedCount).toBe(1);
		expect(result.failures[0].error).toBe("Codegen error");
		// Data file was still written (fetch succeeded)
		expect(fs.existsSync(path.join(dataDir, "dynamodb.json"))).toBe(true);
		// Index still regenerated
		expect(mockGenerateIndex).toHaveBeenCalledTimes(1);
	});

	it("uses ServiceDetail.Name for the JSON filename", async () => {
		// Entry says "dynamo" but detail says "dynamodb"
		mockFetchList.mockResolvedValueOnce([
			{ service: "dynamo", url: "https://example.com/dynamo.json", modified: 100 },
		]);
		mockFetchDetail.mockResolvedValueOnce(makeDetail("dynamodb"));

		const result = await updateServiceReference({
			dataDir,
			timestampFile,
			nowTimestamp: 200,
		});

		expect(result.updatedServices).toEqual(["dynamodb"]);
		expect(fs.existsSync(path.join(dataDir, "dynamodb.json"))).toBe(true);
		expect(mockGenerateForService).toHaveBeenCalledWith(path.join(dataDir, "dynamodb.json"));
	});

	it("propagates errors from fetchServiceReferenceList", async () => {
		mockFetchList.mockRejectedValueOnce(new Error("API down"));

		await expect(
			updateServiceReference({ dataDir, timestampFile }),
		).rejects.toThrow("API down");
	});
});
