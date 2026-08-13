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
	static readonly actionGetExecution = "ts:GetExecution";
	/** [Read] ts:GetExecutionOutput */
	static readonly actionGetExecutionOutput = "ts:GetExecutionOutput";
	/** [Read] ts:GetTool */
	static readonly actionGetTool = "ts:GetTool";
	/** [List] ts:ListExecutions */
	static readonly ListExecutions = "ts:ListExecutions";
	/** [Read] ts:ListTagsForResource */
	static readonly ListTagsForResource = "ts:ListTagsForResource";
	/** [List] ts:ListTools */
	static readonly ListTools = "ts:ListTools";
	/** [Write] ts:StartExecution */
	static readonly StartExecution = "ts:StartExecution";
	/** [Tagging] ts:TagResource */
	static readonly TagResource = "ts:TagResource";
	/** [Tagging] ts:UntagResource */
	static readonly UntagResource = "ts:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TsActions.actionGetExecution,
		TsActions.actionGetExecutionOutput,
		TsActions.actionGetTool,
		TsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [TsActions.StartExecution];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		TsActions.ListExecutions,
		TsActions.ListTools,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		TsActions.TagResource,
		TsActions.UntagResource,
	];
}

/**
 * Properties for building a execution ARN.
 */
export interface TsExecutionArnProps {
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
}

/**
 * Parsed components of a execution ARN.
 */
export interface TsExecutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UserId component. */
	readonly userId: string;
	/** The ToolId component. */
	readonly toolId: string;
	/** The ExecutionId component. */
	readonly executionId: string;
}

/**
 * Properties for building a tool ARN.
 */
export interface TsToolArnProps {
	/** The ToolId component of the ARN. */
	readonly toolId: string;
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
export interface TsToolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ToolId component. */
	readonly toolId: string;
}

const ExecutionArnRegex =
	/^arn:(?<partition>[^:]+):ts::(?<account>[^:]*):execution\/(?<userId>[^:/?]+)\/(?<toolId>[^:/?]+)\/(?<executionId>[^:/?]+)$/;
const ToolArnRegex =
	/^arn:(?<partition>[^:]+):ts::aws:tool\/(?<toolId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ts resources.
 */
export class TsResources {
	/**
	 * Builds an ARN for the execution resource.
	 */
	static execution(props: TsExecutionArnProps): string {
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
	static parseExecutionArn(arn: string): TsExecutionArnComponents {
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
	static tool(props: TsToolArnProps): string {
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
	static parseToolArn(arn: string): TsToolArnComponents {
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
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartExecution action. */
	static readonly StartExecutionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
