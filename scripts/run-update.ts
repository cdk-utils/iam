#!/usr/bin/env tsx
/**
 * End-to-end update: syncs service reference data and regenerates constants.
 *
 * Flow:
 * 1. Read .last-sync-timestamp and fetch the service reference list
 * 2. Filter to services updated since last sync
 * 3. If nothing changed → stop gracefully
 * 4. For each updated service:
 *    a. Fetch the service detail JSON
 *    b. Store it to data/service-reference/{name}.json
 *    c. Regenerate the TypeScript constants for that service
 * 5. Regenerate the barrel index (picks up any new services)
 * 6. Update .last-sync-timestamp
 *
 * Usage: npx projen update-service-reference
 */

import * as path from "node:path";

import { fetchServiceDetail, fetchServiceReferenceList } from "./fetch-service-reference";
import { generateForService } from "./generate-service";
import { generateIndex } from "./generate-index";
import {
	filterUpdatedServices,
	readLastSyncTimestamp,
	writeLastSyncTimestamp,
	writeServiceDetail,
} from "./sync-service-reference";

const DATA_DIR = path.resolve(__dirname, "../data/service-reference");
const TIMESTAMP_FILE = path.join(DATA_DIR, ".last-sync-timestamp");

export interface UpdateResult {
	/** Whether the update was skipped (nothing to update). */
	readonly skipped: boolean;
	/** Number of services updated. */
	readonly updatedCount: number;
	/** Names of services that were updated. */
	readonly updatedServices: string[];
	/** Number of services that failed. */
	readonly failedCount: number;
	/** Services that failed with error messages. */
	readonly failures: { service: string; error: string }[];
	/** The sync timestamp written. */
	readonly syncTimestamp: number;
}

export async function updateServiceReference(options?: {
	dataDir?: string;
	timestampFile?: string;
	nowTimestamp?: number;
}): Promise<UpdateResult> {
	const dataDir = options?.dataDir ?? DATA_DIR;
	const timestampFile = options?.timestampFile ?? TIMESTAMP_FILE;
	const nowTimestamp = options?.nowTimestamp ?? Math.floor(Date.now() / 1000);

	// Step 1: Read timestamp and fetch list
	const lastSync = readLastSyncTimestamp(timestampFile);
	const serviceList = await fetchServiceReferenceList();

	// Step 2: Filter
	const updatedList = filterUpdatedServices(serviceList, lastSync);

	// Step 3: Early return if nothing changed
	if (updatedList.length === 0) {
		return {
			skipped: true,
			updatedCount: 0,
			updatedServices: [],
			failedCount: 0,
			failures: [],
			syncTimestamp: nowTimestamp,
		};
	}

	// Step 4: For each updated service: fetch, store, regenerate
	const updatedServices: string[] = [];
	const failures: { service: string; error: string }[] = [];

	for (const entry of updatedList) {
		try {
			// 4a: Fetch service detail
			const detail = await fetchServiceDetail(entry.url);

			// 4b: Store to data folder
			writeServiceDetail(detail.Name, detail, dataDir);

			// 4c: Regenerate constants for this service
			const jsonPath = path.join(dataDir, `${detail.Name}.json`);
			await generateForService(jsonPath);

			updatedServices.push(detail.Name);
		} catch (err: unknown) {
			const message = err instanceof Error ? err.message : String(err);
			failures.push({ service: entry.service, error: message });
		}
	}

	// Step 5: Regenerate barrel index
	generateIndex();

	// Step 6: Update timestamp
	writeLastSyncTimestamp(nowTimestamp, timestampFile);

	return {
		skipped: false,
		updatedCount: updatedServices.length,
		updatedServices,
		failedCount: failures.length,
		failures,
		syncTimestamp: nowTimestamp,
	};
}

// CLI entry point
async function main() {
	console.log("🔄 Updating AWS Service Authorization Reference...\n");

	const result = await updateServiceReference();

	if (result.skipped) {
		console.log("✅ No updates available. All service references are up to date.");
		return;
	}

	console.log(`✅ Updated ${result.updatedCount} service(s):`);
	for (const name of result.updatedServices) {
		console.log(`   • ${name}`);
	}

	if (result.failedCount > 0) {
		console.log(`\n⚠️  ${result.failedCount} service(s) failed:`);
		for (const f of result.failures) {
			console.log(`   ✗ ${f.service}: ${f.error}`);
		}
	}

	console.log(`\n📝 Sync timestamp updated to: ${result.syncTimestamp}`);
	console.log("📦 Barrel index regenerated");
}

main().catch((err) => {
	console.error("❌ Update failed:", err.message);
	process.exit(1);
});
