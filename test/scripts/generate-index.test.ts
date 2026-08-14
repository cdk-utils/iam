import * as fs from "node:fs";
import * as path from "node:path";
import { generateIndex, toSubmoduleName } from "../../scripts/generate-index";

describe("toSubmoduleName", () => {
	it("converts hyphens to underscores", () => {
		expect(toSubmoduleName("access-analyzer")).toBe("access_analyzer");
	});

	it("leaves names without hyphens unchanged", () => {
		expect(toSubmoduleName("s3")).toBe("s3");
		expect(toSubmoduleName("dynamodb")).toBe("dynamodb");
	});

	it("handles multiple hyphens", () => {
		expect(toSubmoduleName("s3-object-lambda")).toBe("s3_object_lambda");
	});

	it("handles names starting with numbers", () => {
		expect(toSubmoduleName("a2c")).toBe("a2c");
		expect(toSubmoduleName("a4b")).toBe("a4b");
	});

	it("handles complex service names", () => {
		expect(toSubmoduleName("route53-recovery-cluster")).toBe(
			"route53_recovery_cluster",
		);
		expect(toSubmoduleName("ec2-instance-connect")).toBe(
			"ec2_instance_connect",
		);
	});
});

describe("generateIndex", () => {
	const tmpDir = path.join(__dirname, "../../.tmp-test-generate-index");
	const servicesDir = path.join(tmpDir, "services");
	const indexPath = path.join(tmpDir, "index.ts");

	beforeEach(() => {
		fs.mkdirSync(servicesDir, { recursive: true });
	});

	afterEach(() => {
		fs.rmSync(tmpDir, { recursive: true, force: true });
	});

	it("generates aliased submodule exports", () => {
		// Create sample service files
		fs.writeFileSync(
			path.join(servicesDir, "s3.ts"),
			"export class S3Actions {}",
		);
		fs.writeFileSync(
			path.join(servicesDir, "dynamodb.ts"),
			"export class DynamoDBActions {}",
		);
		fs.writeFileSync(
			path.join(servicesDir, "access-analyzer.ts"),
			"export class AccessAnalyzerActions {}",
		);

		generateIndex(servicesDir, indexPath);

		const content = fs.readFileSync(indexPath, "utf-8");

		// Should use aliased exports (jsii submodule pattern)
		expect(content).toContain(
			'export * as access_analyzer from "./services/access-analyzer";',
		);
		expect(content).toContain(
			'export * as dynamodb from "./services/dynamodb";',
		);
		expect(content).toContain('export * as s3 from "./services/s3";');

		// Should NOT have flat re-exports
		expect(content).not.toContain('export * from "./services/s3";');
	});

	it("ignores non-ts files and .gitkeep", () => {
		fs.writeFileSync(
			path.join(servicesDir, "s3.ts"),
			"export class S3Actions {}",
		);
		fs.writeFileSync(path.join(servicesDir, ".gitkeep"), "");
		fs.writeFileSync(path.join(servicesDir, "README.md"), "# Readme");

		generateIndex(servicesDir, indexPath);

		const content = fs.readFileSync(indexPath, "utf-8");
		expect(content).toContain('export * as s3 from "./services/s3";');
		expect(content).not.toContain("gitkeep");
		expect(content).not.toContain("README");
	});

	it("sorts exports alphabetically", () => {
		fs.writeFileSync(path.join(servicesDir, "zzz.ts"), "export class Z {}");
		fs.writeFileSync(path.join(servicesDir, "aaa.ts"), "export class A {}");
		fs.writeFileSync(path.join(servicesDir, "mmm.ts"), "export class M {}");

		generateIndex(servicesDir, indexPath);

		const content = fs.readFileSync(indexPath, "utf-8");
		const lines = content.split("\n").filter((l) => l.startsWith("export"));
		expect(lines[0]).toContain("aaa");
		expect(lines[1]).toContain("mmm");
		expect(lines[2]).toContain("zzz");
	});

	it("includes auto-generated header", () => {
		fs.writeFileSync(
			path.join(servicesDir, "s3.ts"),
			"export class S3Actions {}",
		);

		generateIndex(servicesDir, indexPath);

		const content = fs.readFileSync(indexPath, "utf-8");
		expect(content).toContain("AUTO-GENERATED FILE");
		expect(content).toContain("jsii submodule exports");
	});
});
