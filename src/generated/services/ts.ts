// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ts.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ts service.
 */
export class TsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ts";

	/** [Read] ts:GetExecution */
	static readonly GET_EXECUTION = "ts:GetExecution";
	/** [Read] ts:GetExecutionOutput */
	static readonly GET_EXECUTION_OUTPUT = "ts:GetExecutionOutput";
	/** [Read] ts:GetTool */
	static readonly GET_TOOL = "ts:GetTool";
	/** [List] ts:ListExecutions */
	static readonly LIST_EXECUTIONS = "ts:ListExecutions";
	/** [Read] ts:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ts:ListTagsForResource";
	/** [List] ts:ListTools */
	static readonly LIST_TOOLS = "ts:ListTools";
	/** [Write] ts:StartExecution */
	static readonly START_EXECUTION = "ts:StartExecution";
	/** [Tagging] ts:TagResource */
	static readonly TAG_RESOURCE = "ts:TagResource";
	/** [Tagging] ts:UntagResource */
	static readonly UNTAG_RESOURCE = "ts:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TsActions.GET_EXECUTION,
		TsActions.GET_EXECUTION_OUTPUT,
		TsActions.GET_TOOL,
		TsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [TsActions.START_EXECUTION];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		TsActions.LIST_EXECUTIONS,
		TsActions.LIST_TOOLS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		TsActions.TAG_RESOURCE,
		TsActions.UNTAG_RESOURCE,
	];
}

const ExecutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ts::(?<account>[^:]*):execution/(?<userId>[^:/?]+)/(?<toolId>[^:/?]+)/(?<executionId>[^:/?]+)$",
);
const ToolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ts::aws:tool/(?<toolId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ts resources.
 */
export class TsResources {
	/**
	 * Builds an ARN for the execution resource.
	 */
	static execution(props: {
		/** The UserId component of the ARN. */
		readonly userId: string;
		/** The ToolId component of the ARN. */
		readonly toolId: string;
		/** The ExecutionId component of the ARN. */
		readonly executionId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ts::${props.account ?? "*"}:execution/${props.userId}/${props.toolId}/${props.executionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the execution resource.
	 */
	static isValidExecutionArn(arn: string): boolean {
		return ExecutionArnRegex.test(arn);
	}

	/**
	 * Parses a execution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExecutionArn(arn: string): {
		partition: string;
		account: string;
		userId: string;
		toolId: string;
		executionId: string;
	} {
		const match = ExecutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid execution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			userId: match.groups!.userId,
			toolId: match.groups!.toolId,
			executionId: match.groups!.executionId,
		};
	}

	/**
	 * Builds an ARN for the tool resource.
	 */
	static tool(props: {
		/** The ToolId component of the ARN. */
		readonly toolId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ts::aws:tool/${props.toolId}`;
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
		toolId: string;
	} {
		const match = ToolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid tool ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			toolId: match.groups!.toolId,
		};
	}
}

/**
 * Condition key constants and builders for ts.
 */
export class TsConditions {
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartExecution action. */
	static readonly START_EXECUTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}
}
