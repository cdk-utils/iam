#!/usr/bin/env tsx
/**
 * CLI entry point for syncing AWS Service Reference data.
 * Run via: npx projen sync-service-reference
 */

import { syncServiceReference } from "./sync-service-reference";

async function main() {
	console.log("🔄 Syncing AWS Service Authorization Reference data...\n");

	const result = await syncServiceReference();

	if (result.skipped) {
		console.log("✅ No updates available. All service references are up to date.");
	} else {
		console.log(`✅ Updated ${result.updatedCount} service(s):`);
		for (const name of result.updatedServices) {
			console.log(`   • ${name}`);
		}
		console.log(`\n📝 Sync timestamp updated to: ${result.syncTimestamp}`);
	}
}

main().catch((err) => {
	console.error("❌ Sync failed:", err.message);
	process.exit(1);
});
