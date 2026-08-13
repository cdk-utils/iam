/**
 * Orchestrates fetching updated AWS Service Reference data and storing it locally.
 *
 * Reads the last sync timestamp, fetches the service list, filters for updates,
 * downloads changed service details, and updates the timestamp file.
 */

import * as fs from "node:fs";
import * as path from "node:path";

import { fetchServiceDetail, fetchServiceReferenceList } from "./fetch-service-reference";
import type { ServiceReferenceEntry } from "./types";

/** Directory where service reference JSON files are stored. */
const DATA_DIR = path.resolve(__dirname, "../data/service-reference");

/** Path to the last-sync-timestamp file. */
const TIMESTAMP_FILE = path.join(DATA_DIR, ".last-sync-timestamp");

/**
 * Result of a sync operation.
 */
export interface SyncResult {
	/** Number of services that were updated. */
	readonly updatedCount: number;
	/** Names of services that were updated. */
	readonly updatedServices: string[];
	/** Whether the sync was skipped (no updates available). */
	readonly skipped: boolean;
	/** The timestamp written after a successful sync. */
	readonly syncTimestamp: number;
}

/**
 * Reads the last sync timestamp from the `.last-sync-timestamp` file.
 * Returns `undefined` if the file does not exist or cannot be parsed.
 */
export function readLastSyncTimestamp(
	timestampFile: string = TIMESTAMP_FILE,
): number | undefined {
	try {
		const content = fs.readFileSync(timestampFile, "utf-8").trim();
		const timestamp = Number(content);
		if (Number.isFinite(timestamp) && timestamp > 0) {
			return timestamp;
		}
		return undefined;
	} catch {
		return undefined;
	}
}

/**
 * Filters a service reference list to only include entries modified after the given timestamp.
 * If no timestamp is provided, returns the full list (no filtering).
 */
export function filterUpdatedServices(
	services: ServiceReferenceEntry[],
	sinceTimestamp?: number,
): ServiceReferenceEntry[] {
	if (sinceTimestamp === undefined) {
		return services;
	}
	return services.filter((entry) => entry.modified > sinceTimestamp);
}

/**
 * Writes a service detail JSON to the data directory.
 */
export function writeServiceDetail(
	serviceName: string,
	data: unknown,
	dataDir: string = DATA_DIR,
): void {
	fs.mkdirSync(dataDir, { recursive: true });
	const filePath = path.join(dataDir, `${serviceName}.json`);
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

/**
 * Writes the current timestamp to the `.last-sync-timestamp` file.
 */
export function writeLastSyncTimestamp(
	timestamp: number,
	timestampFile: string = TIMESTAMP_FILE,
): void {
	const dir = path.dirname(timestampFile);
	fs.mkdirSync(dir, { recursive: true });
	fs.writeFileSync(timestampFile, String(timestamp), "utf-8");
}

/**
 * Synchronizes the local service reference data with the AWS Service Authorization Reference API.
 *
 * 1. Reads `.last-sync-timestamp` (if available) to determine what's new
 * 2. Fetches the full service reference list
 * 3. Filters to only services modified after the last sync
 * 4. Early returns if nothing has changed
 * 5. Downloads each updated service detail and saves it as `{Name}.json`
 * 6. Updates `.last-sync-timestamp` with the current execution time
 *
 * @param options - Optional overrides for paths and time (useful for testing)
 * @returns A SyncResult describing what was updated
 */
export async function syncServiceReference(options?: {
	/** Override the data directory path. */
	dataDir?: string;
	/** Override the timestamp file path. */
	timestampFile?: string;
	/** Override the current timestamp (unix seconds). Defaults to Date.now()/1000 floored. */
	nowTimestamp?: number;
}): Promise<SyncResult> {
	const dataDir = options?.dataDir ?? DATA_DIR;
	const timestampFile = options?.timestampFile ?? TIMESTAMP_FILE;
	const nowTimestamp =
		options?.nowTimestamp ?? Math.floor(Date.now() / 1000);

	// Step 1: Read last sync timestamp
	const lastSync = readLastSyncTimestamp(timestampFile);

	// Step 2: Fetch the full service list
	const serviceList = await fetchServiceReferenceList();

	// Step 3: Filter to only updated services
	const updatedList = filterUpdatedServices(serviceList, lastSync);

	// Step 4: Early return if nothing changed
	if (updatedList.length === 0) {
		return {
			updatedCount: 0,
			updatedServices: [],
			skipped: true,
			syncTimestamp: nowTimestamp,
		};
	}

	// Step 5: Download and store each updated service
	const updatedServices: string[] = [];

	for (const entry of updatedList) {
		const detail = await fetchServiceDetail(entry.url);
		writeServiceDetail(detail.Name, detail, dataDir);
		updatedServices.push(detail.Name);
	}

	// Step 6: Update the timestamp
	writeLastSyncTimestamp(nowTimestamp, timestampFile);

	return {
		updatedCount: updatedServices.length,
		updatedServices,
		skipped: false,
		syncTimestamp: nowTimestamp,
	};
}
