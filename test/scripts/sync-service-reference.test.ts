import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import {
	filterUpdatedServices,
	readLastSyncTimestamp,
	syncServiceReference,
	writeLastSyncTimestamp,
	writeServiceDetail,
} from "../../scripts/sync-service-reference";
import type { ServiceDetail, ServiceReferenceEntry } from "../../scripts/types";

// Mock the fetch helpers
jest.mock("../../scripts/fetch-service-reference", () => ({
	fetchServiceReferenceList: jest.fn(),
	fetchServiceDetail: jest.fn(),
}));

import {
	fetchServiceDetail,
	fetchServiceReferenceList,
} from "../../scripts/fetch-service-reference";

const mockFetchList = fetchServiceReferenceList as jest.MockedFunction<
	typeof fetchServiceReferenceList
>;
const mockFetchDetail = fetchServiceDetail as jest.MockedFunction<
	typeof fetchServiceDetail
>;

// =============================================================================
// Test helpers
// =============================================================================

let tmpDir: string;

beforeEach(() => {
	tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "iam-sync-test-"));
	jest.resetAllMocks();
});

afterEach(() => {
	fs.rmSync(tmpDir, { recursive: true, force: true });
});

// =============================================================================
// Fixtures
// =============================================================================

const serviceEntries: ServiceReferenceEntry[] = [
	{
		service: "dynamodb",
		url: "https://servicereference.us-east-1.amazonaws.com/v1/dynamodb/dynamodb.json",
		modified: 1000,
	},
	{
		service: "s3",
		url: "https://servicereference.us-east-1.amazonaws.com/v1/s3/s3.json",
		modified: 2000,
	},
	{
		service: "lambda",
		url: "https://servicereference.us-east-1.amazonaws.com/v1/lambda/lambda.json",
		modified: 3000,
	},
];

function makeServiceDetail(name: string): ServiceDetail {
	return {
		Name: name,
		Version: "v1.0",
		Actions: [{ Name: "TestAction" }],
		ConditionKeys: [{ Name: "aws:tag", Types: ["String"] }],
		Operations: [{ Name: "TestOp" }],
		Resources: [{ Name: "resource" }],
	};
}

// =============================================================================
// readLastSyncTimestamp
// =============================================================================

describe("readLastSyncTimestamp", () => {
	it("returns the timestamp from a valid file", () => {
		const file = path.join(tmpDir, ".last-sync-timestamp");
		fs.writeFileSync(file, "1500", "utf-8");

		expect(readLastSyncTimestamp(file)).toBe(1500);
	});

	it("handles timestamps with trailing newline", () => {
		const file = path.join(tmpDir, ".last-sync-timestamp");
		fs.writeFileSync(file, "2500\n", "utf-8");

		expect(readLastSyncTimestamp(file)).toBe(2500);
	});

	it("handles timestamps with whitespace", () => {
		const file = path.join(tmpDir, ".last-sync-timestamp");
		fs.writeFileSync(file, "  3000  \n", "utf-8");

		expect(readLastSyncTimestamp(file)).toBe(3000);
	});

	it("returns undefined when the file does not exist", () => {
		const file = path.join(tmpDir, "nonexistent");

		expect(readLastSyncTimestamp(file)).toBeUndefined();
	});

	it("returns undefined when the file content is not a number", () => {
		const file = path.join(tmpDir, ".last-sync-timestamp");
		fs.writeFileSync(file, "not-a-number", "utf-8");

		expect(readLastSyncTimestamp(file)).toBeUndefined();
	});

	it("returns undefined when the file is empty", () => {
		const file = path.join(tmpDir, ".last-sync-timestamp");
		fs.writeFileSync(file, "", "utf-8");

		expect(readLastSyncTimestamp(file)).toBeUndefined();
	});

	it("returns undefined for zero timestamp", () => {
		const file = path.join(tmpDir, ".last-sync-timestamp");
		fs.writeFileSync(file, "0", "utf-8");

		expect(readLastSyncTimestamp(file)).toBeUndefined();
	});

	it("returns undefined for negative timestamp", () => {
		const file = path.join(tmpDir, ".last-sync-timestamp");
		fs.writeFileSync(file, "-100", "utf-8");

		expect(readLastSyncTimestamp(file)).toBeUndefined();
	});
});

// =============================================================================
// filterUpdatedServices
// =============================================================================

describe("filterUpdatedServices", () => {
	it("returns all services when no timestamp is provided", () => {
		const result = filterUpdatedServices(serviceEntries);
		expect(result).toEqual(serviceEntries);
		expect(result).toHaveLength(3);
	});

	it("returns all services when timestamp is undefined", () => {
		const result = filterUpdatedServices(serviceEntries, undefined);
		expect(result).toEqual(serviceEntries);
	});

	it("filters out services modified at or before the timestamp", () => {
		const result = filterUpdatedServices(serviceEntries, 1000);
		expect(result).toHaveLength(2);
		expect(result.map((e) => e.service)).toEqual(["s3", "lambda"]);
	});

	it("filters out all services when timestamp is after all entries", () => {
		const result = filterUpdatedServices(serviceEntries, 5000);
		expect(result).toHaveLength(0);
	});

	it("returns only services strictly modified after the timestamp", () => {
		const result = filterUpdatedServices(serviceEntries, 2000);
		expect(result).toHaveLength(1);
		expect(result[0].service).toBe("lambda");
	});

	it("handles an empty input list", () => {
		const result = filterUpdatedServices([], 1000);
		expect(result).toHaveLength(0);
	});
});

// =============================================================================
// writeServiceDetail
// =============================================================================

describe("writeServiceDetail", () => {
	it("writes a JSON file named after the service", () => {
		const detail = makeServiceDetail("dynamodb");
		writeServiceDetail("dynamodb", detail, tmpDir);

		const filePath = path.join(tmpDir, "dynamodb.json");
		expect(fs.existsSync(filePath)).toBe(true);

		const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
		expect(content.Name).toBe("dynamodb");
	});

	it("creates the directory if it does not exist", () => {
		const nestedDir = path.join(tmpDir, "nested", "dir");
		writeServiceDetail("s3", makeServiceDetail("s3"), nestedDir);

		const filePath = path.join(nestedDir, "s3.json");
		expect(fs.existsSync(filePath)).toBe(true);
	});

	it("overwrites an existing file", () => {
		const filePath = path.join(tmpDir, "lambda.json");
		fs.writeFileSync(filePath, '{"old": true}', "utf-8");

		const detail = makeServiceDetail("lambda");
		writeServiceDetail("lambda", detail, tmpDir);

		const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
		expect(content.Name).toBe("lambda");
		expect(content.old).toBeUndefined();
	});

	it("writes pretty-printed JSON", () => {
		writeServiceDetail("test", { Name: "test" }, tmpDir);

		const raw = fs.readFileSync(path.join(tmpDir, "test.json"), "utf-8");
		expect(raw).toContain("\n");
		expect(raw).toMatch(/^\{\n {2}/);
	});
});

// =============================================================================
// writeLastSyncTimestamp
// =============================================================================

describe("writeLastSyncTimestamp", () => {
	it("writes the timestamp to the file", () => {
		const file = path.join(tmpDir, ".last-sync-timestamp");
		writeLastSyncTimestamp(4000, file);

		const content = fs.readFileSync(file, "utf-8");
		expect(content).toBe("4000");
	});

	it("creates parent directories if needed", () => {
		const file = path.join(tmpDir, "sub", "dir", ".last-sync-timestamp");
		writeLastSyncTimestamp(5000, file);

		expect(fs.existsSync(file)).toBe(true);
		expect(fs.readFileSync(file, "utf-8")).toBe("5000");
	});

	it("overwrites an existing timestamp", () => {
		const file = path.join(tmpDir, ".last-sync-timestamp");
		fs.writeFileSync(file, "1000", "utf-8");
		writeLastSyncTimestamp(9999, file);

		expect(fs.readFileSync(file, "utf-8")).toBe("9999");
	});
});

// =============================================================================
// syncServiceReference (integration)
// =============================================================================

describe("syncServiceReference", () => {
	it("fetches all services when no timestamp file exists", async () => {
		const dataDir = path.join(tmpDir, "data");
		const timestampFile = path.join(dataDir, ".last-sync-timestamp");

		mockFetchList.mockResolvedValueOnce(serviceEntries);
		mockFetchDetail
			.mockResolvedValueOnce(makeServiceDetail("dynamodb"))
			.mockResolvedValueOnce(makeServiceDetail("s3"))
			.mockResolvedValueOnce(makeServiceDetail("lambda"));

		const result = await syncServiceReference({
			dataDir,
			timestampFile,
			nowTimestamp: 5000,
		});

		expect(result.skipped).toBe(false);
		expect(result.updatedCount).toBe(3);
		expect(result.updatedServices).toEqual(["dynamodb", "s3", "lambda"]);
		expect(result.syncTimestamp).toBe(5000);

		// Verify files were written
		expect(fs.existsSync(path.join(dataDir, "dynamodb.json"))).toBe(true);
		expect(fs.existsSync(path.join(dataDir, "s3.json"))).toBe(true);
		expect(fs.existsSync(path.join(dataDir, "lambda.json"))).toBe(true);

		// Verify timestamp was written
		expect(fs.readFileSync(timestampFile, "utf-8")).toBe("5000");
	});

	it("filters services when a timestamp file exists", async () => {
		const dataDir = path.join(tmpDir, "data");
		fs.mkdirSync(dataDir, { recursive: true });
		const timestampFile = path.join(dataDir, ".last-sync-timestamp");
		fs.writeFileSync(timestampFile, "1500", "utf-8");

		mockFetchList.mockResolvedValueOnce(serviceEntries);
		mockFetchDetail
			.mockResolvedValueOnce(makeServiceDetail("s3"))
			.mockResolvedValueOnce(makeServiceDetail("lambda"));

		const result = await syncServiceReference({
			dataDir,
			timestampFile,
			nowTimestamp: 6000,
		});

		expect(result.skipped).toBe(false);
		expect(result.updatedCount).toBe(2);
		expect(result.updatedServices).toEqual(["s3", "lambda"]);

		// dynamodb (modified=1000) should NOT have been fetched
		expect(mockFetchDetail).toHaveBeenCalledTimes(2);
		expect(mockFetchDetail).toHaveBeenCalledWith(serviceEntries[1].url);
		expect(mockFetchDetail).toHaveBeenCalledWith(serviceEntries[2].url);

		// Timestamp updated
		expect(fs.readFileSync(timestampFile, "utf-8")).toBe("6000");
	});

	it("returns skipped=true when no services have been updated", async () => {
		const dataDir = path.join(tmpDir, "data");
		fs.mkdirSync(dataDir, { recursive: true });
		const timestampFile = path.join(dataDir, ".last-sync-timestamp");
		fs.writeFileSync(timestampFile, "9999", "utf-8");

		mockFetchList.mockResolvedValueOnce(serviceEntries);

		const result = await syncServiceReference({
			dataDir,
			timestampFile,
			nowTimestamp: 10000,
		});

		expect(result.skipped).toBe(true);
		expect(result.updatedCount).toBe(0);
		expect(result.updatedServices).toEqual([]);
		expect(mockFetchDetail).not.toHaveBeenCalled();

		// Timestamp file should NOT be updated on skip
		expect(fs.readFileSync(timestampFile, "utf-8")).toBe("9999");
	});

	it("does not update timestamp when sync is skipped", async () => {
		const dataDir = path.join(tmpDir, "data");
		fs.mkdirSync(dataDir, { recursive: true });
		const timestampFile = path.join(dataDir, ".last-sync-timestamp");
		fs.writeFileSync(timestampFile, "5000", "utf-8");

		mockFetchList.mockResolvedValueOnce([
			{ service: "old-service", url: "http://example.com", modified: 100 },
		]);

		const result = await syncServiceReference({
			dataDir,
			timestampFile,
			nowTimestamp: 7000,
		});

		expect(result.skipped).toBe(true);
		// Original timestamp preserved
		expect(fs.readFileSync(timestampFile, "utf-8")).toBe("5000");
	});

	it("uses the ServiceDetail.Name as the filename (not the list entry service name)", async () => {
		const dataDir = path.join(tmpDir, "data");
		const timestampFile = path.join(dataDir, ".last-sync-timestamp");

		// Entry says "dynamo" but detail says "dynamodb"
		const entries: ServiceReferenceEntry[] = [
			{ service: "dynamo", url: "http://example.com/dynamo.json", modified: 100 },
		];

		mockFetchList.mockResolvedValueOnce(entries);
		mockFetchDetail.mockResolvedValueOnce(makeServiceDetail("dynamodb"));

		await syncServiceReference({
			dataDir,
			timestampFile,
			nowTimestamp: 200,
		});

		// File should be named after Detail.Name, not entry.service
		expect(fs.existsSync(path.join(dataDir, "dynamodb.json"))).toBe(true);
		expect(fs.existsSync(path.join(dataDir, "dynamo.json"))).toBe(false);
	});

	it("propagates errors from fetchServiceReferenceList", async () => {
		const dataDir = path.join(tmpDir, "data");
		const timestampFile = path.join(dataDir, ".last-sync-timestamp");

		mockFetchList.mockRejectedValueOnce(new Error("Network error"));

		await expect(
			syncServiceReference({ dataDir, timestampFile }),
		).rejects.toThrow("Network error");
	});

	it("propagates errors from fetchServiceDetail", async () => {
		const dataDir = path.join(tmpDir, "data");
		const timestampFile = path.join(dataDir, ".last-sync-timestamp");

		mockFetchList.mockResolvedValueOnce([
			{ service: "s3", url: "http://example.com/s3.json", modified: 100 },
		]);
		mockFetchDetail.mockRejectedValueOnce(new Error("503 Service Unavailable"));

		await expect(
			syncServiceReference({ dataDir, timestampFile }),
		).rejects.toThrow("503 Service Unavailable");
	});
});
