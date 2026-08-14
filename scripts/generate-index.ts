/**
 * Regenerates the barrel index file for all generated service files.
 * Produces jsii submodule-compatible aliased exports for per-service documentation,
 * plus a flat re-export file for backwards-compatible imports.
 *
 * Usage: tsx scripts/generate-index.ts
 *
 * Produces:
 *   - src/generated/index.ts (submodule aliased exports)
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { execSync } from "node:child_process";

const SERVICES_DIR = path.resolve(__dirname, "../src/generated/services");
const INDEX_PATH = path.resolve(__dirname, "../src/generated/index.ts");

const INDEX_HEADER = `// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// jsii submodule exports for per-service documentation and namespaced access.
// Each service is exported as a submodule namespace.
// Run \`npx projen generate-constants\` to regenerate
// =============================================================================

`;

/**
 * Converts a service file name (e.g., "access-analyzer") to a valid
 * jsii submodule name. jsii submodule names must use underscores (snake_case).
 */
export function toSubmoduleName(fileName: string): string {
	return fileName.replace(/-/g, "_");
}

/**
 * Scans the services directory and regenerates the barrel index with
 * jsii submodule aliased exports.
 */
export function generateIndex(
	servicesDir: string = SERVICES_DIR,
	indexPath: string = INDEX_PATH,
): string {
	const files = fs
		.readdirSync(servicesDir)
		.filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== ".gitkeep")
		.sort();

	// Generate aliased submodule exports (jsii recognizes these as submodules)
	const submoduleExports = files.map((f) => {
		const moduleName = f.replace(/\.ts$/, "");
		const submoduleName = toSubmoduleName(moduleName);
		return `export * as ${submoduleName} from "./services/${moduleName}";`;
	});

	const content = INDEX_HEADER + submoduleExports.join("\n") + "\n";

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
	console.log(`✅ Generated submodule barrel index: ${outputPath}`);
}
