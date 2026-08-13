// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/bedrock-websearch.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the bedrock-websearch service.
 */
export class BedrockWebsearchActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "bedrock-websearch";

	/** [Read] bedrock-websearch:ExternalWebAccess */
	static readonly ExternalWebAccess = "bedrock-websearch:ExternalWebAccess";
	/** [Read] bedrock-websearch:InvokeFetch */
	static readonly InvokeFetch = "bedrock-websearch:InvokeFetch";
	/** [Read] bedrock-websearch:InvokeSearch */
	static readonly InvokeSearch = "bedrock-websearch:InvokeSearch";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BedrockWebsearchActions.ExternalWebAccess,
		BedrockWebsearchActions.InvokeFetch,
		BedrockWebsearchActions.InvokeSearch,
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
 * Properties for building a tool ARN.
 */
export interface BedrockWebsearchToolArnProps {
	/** The ToolName component of the ARN. */
	readonly toolName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a tool ARN.
 */
export interface BedrockWebsearchToolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ToolName component. */
	readonly toolName: string;
}

const ToolArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-websearch:(?<region>[^:]*):aws:tool\/(?<toolName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for bedrock-websearch resources.
 */
export class BedrockWebsearchResources {
	/**
	 * Builds an ARN for the tool resource.
	 */
	static tool(props: BedrockWebsearchToolArnProps): string {
		return `arn:${props.partition ?? "aws"}:bedrock-websearch:${props.region ?? "*"}:aws:tool/${props.toolName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the tool resource.
	 */
	static isValidToolArn(arn: string): boolean {
		return ToolArnRegex.test(arn);
	}

	/**
	 * Parses a tool ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseToolArn(arn: string): BedrockWebsearchToolArnComponents {
		const match = ToolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid tool ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			toolName: match.groups!.toolName,
		};
	}
}
