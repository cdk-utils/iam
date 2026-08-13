#!/usr/bin/env tsx
/**
 * Generates TypeScript constants for ALL service reference files.
 *
 * Usage: npx projen generate-constants
 *
 * Iterates data/service-reference/*.json, generates each service file,
 * then regenerates the barrel index.
 */

import * as fs from "node:fs";
import * as path from "node:path";

import { generateForService } from "./generate-service";
import { generateIndex } from "./generate-index";

const DATA_DIR = path.resolve(__dirname, "../data/service-reference");

async function main() {
	const files = fs.readdirSync(DATA_DIR)
		.filter((f) => f.endsWith(".json"))
		.sort();

	console.log(`🔄 Generating constants for ${files.length} services...\n`);

	let success = 0;
	let failed = 0;

	for (const file of files) {
		const jsonPath = path.join(DATA_DIR, file);
		try {
			await generateForService(jsonPath);
			success++;
		} catch (err: unknown) {
			const message = err instanceof Error ? err.message : String(err);
			console.error(`  ❌ ${file}: ${message}`);
			failed++;
		}
	}

	// Regenerate barrel index
	generateIndex();

	console.log(`\n✅ Generated ${success} service files`);
	if (failed > 0) {
		console.log(`❌ ${failed} service(s) failed`);
	}
	console.log("📝 Barrel index regenerated");
}

main().catch((err) => {
	console.error("❌ Generation failed:", err.message);
	process.exit(1);
});
