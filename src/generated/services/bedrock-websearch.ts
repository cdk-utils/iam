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
	static readonly EXTERNAL_WEB_ACCESS = "bedrock-websearch:ExternalWebAccess";
	/** [Read] bedrock-websearch:InvokeFetch */
	static readonly INVOKE_FETCH = "bedrock-websearch:InvokeFetch";
	/** [Read] bedrock-websearch:InvokeSearch */
	static readonly INVOKE_SEARCH = "bedrock-websearch:InvokeSearch";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BedrockWebsearchActions.EXTERNAL_WEB_ACCESS,
		BedrockWebsearchActions.INVOKE_FETCH,
		BedrockWebsearchActions.INVOKE_SEARCH,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ToolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock-websearch:(?<region>[^:]*):aws:tool/(?<toolName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for bedrock-websearch resources.
 */
export class BedrockWebsearchResources {
	/**
	 * Builds an ARN for the tool resource.
	 */
	static tool(props: {
		/** The ToolName component of the ARN. */
		readonly toolName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseToolArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		toolName: string;
	} {
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
