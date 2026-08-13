/**
 * Regenerates the barrel index file for all generated service files.
 *
 * Usage: tsx scripts/generate-index.ts
 *
 * Produces: src/generated/index.ts
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { execSync } from "node:child_process";

const SERVICES_DIR = path.resolve(__dirname, "../src/generated/services");
const INDEX_PATH = path.resolve(__dirname, "../src/generated/index.ts");

const INDEX_HEADER = `// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Barrel re-exports for all generated service constants.
// Run \`npx projen generate-constants\` to regenerate
// =============================================================================

`;

/**
 * Scans the services directory and regenerates the barrel index.
 */
export function generateIndex(
	servicesDir: string = SERVICES_DIR,
	indexPath: string = INDEX_PATH,
): string {
	const files = fs.readdirSync(servicesDir)
		.filter((f) => f.endsWith(".ts") && f !== "index.ts")
		.sort();

	const exports = files.map((f) => {
		const moduleName = f.replace(/\.ts$/, "");
		return `export * from "./services/${moduleName}";`;
	});

	const content = INDEX_HEADER + exports.join("\n") + "\n";

	fs.mkdirSync(path.dirname(indexPath), { recursive: true });
	fs.writeFileSync(indexPath, content, "utf-8");

	// Format with Biome
	try {
		execSync(`npx biome format --write "${indexPath}"`, {
			stdio: "pipe",
			cwd: path.resolve(__dirname, ".."),
		});
	} catch {
		// If biome fails, the file is still valid TypeScript
	}

	return indexPath;
}

// CLI entry point
if (require.main === module) {
	const outputPath = generateIndex();
	console.log(`✅ Generated barrel index: ${outputPath}`);
}
