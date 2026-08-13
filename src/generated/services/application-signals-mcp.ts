// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/application-signals-mcp.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the application-signals-mcp service.
 */
export class ApplicationSignalsMcpActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "application-signals-mcp";

	/** [Read] application-signals-mcp:CallReadOnlyTool */
	static readonly CallReadOnlyTool = "application-signals-mcp:CallReadOnlyTool";
	/** [Read] application-signals-mcp:InvokeMcp */
	static readonly InvokeMcp = "application-signals-mcp:InvokeMcp";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ApplicationSignalsMcpActions.CallReadOnlyTool,
		ApplicationSignalsMcpActions.InvokeMcp,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a mcp-server ARN.
 */
export interface ApplicationSignalsMcpMcpServerArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mcp-server ARN.
 */
export interface ApplicationSignalsMcpMcpServerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

const McpServerArnRegex =
	/^arn:(?<partition>[^:]+):application-signals-mcp:(?<region>[^:]*):(?<account>[^:]*):mcp-server\/.*$/;

/**
 * ARN builders, validators, and parsers for application-signals-mcp resources.
 */
export class ApplicationSignalsMcpResources {
	/**
	 * Builds an ARN for the mcp-server resource.
	 */
	static mcpServer(props: ApplicationSignalsMcpMcpServerArnProps): string {
		return `arn:${props.partition ?? "aws"}:application-signals-mcp:${props.region ?? "*"}:${props.account ?? "*"}:mcp-server/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mcp-server resource.
	 */
	static isValidMcpServerArn(arn: string): boolean {
		return McpServerArnRegex.test(arn);
	}

	/**
	 * Parses a mcp-server ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMcpServerArn(
		arn: string,
	): ApplicationSignalsMcpMcpServerArnComponents {
		const match = McpServerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mcp-server ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}
}

/**
 * Condition key constants and builders for application-signals-mcp.
 */
export class ApplicationSignalsMcpConditions {
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}
}
