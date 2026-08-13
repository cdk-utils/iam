// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/interconnect.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the interconnect service.
 */
export class InterconnectActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "interconnect";

	/** [Write] interconnect:AcceptConnectionProposal */
	static readonly AcceptConnectionProposal =
		"interconnect:AcceptConnectionProposal";
	/** [Write] interconnect:CreateConnection */
	static readonly CreateConnection = "interconnect:CreateConnection";
	/** [Write] interconnect:DeleteConnection */
	static readonly DeleteConnection = "interconnect:DeleteConnection";
	/** [Read] interconnect:DescribeConnectionProposal */
	static readonly DescribeConnectionProposal =
		"interconnect:DescribeConnectionProposal";
	/** [Read] interconnect:GetConnection */
	static readonly actionGetConnection = "interconnect:GetConnection";
	/** [Read] interconnect:GetEnvironment */
	static readonly actionGetEnvironment = "interconnect:GetEnvironment";
	/** [Read] interconnect:ListAttachPoints */
	static readonly ListAttachPoints = "interconnect:ListAttachPoints";
	/** [List] interconnect:ListConnections */
	static readonly ListConnections = "interconnect:ListConnections";
	/** [List] interconnect:ListEnvironments */
	static readonly ListEnvironments = "interconnect:ListEnvironments";
	/** [Read] interconnect:ListTagsForResource */
	static readonly ListTagsForResource = "interconnect:ListTagsForResource";
	/** [Tagging] interconnect:TagResource */
	static readonly TagResource = "interconnect:TagResource";
	/** [Tagging] interconnect:UntagResource */
	static readonly UntagResource = "interconnect:UntagResource";
	/** [Write] interconnect:UpdateConnection */
	static readonly UpdateConnection = "interconnect:UpdateConnection";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		InterconnectActions.DescribeConnectionProposal,
		InterconnectActions.actionGetConnection,
		InterconnectActions.actionGetEnvironment,
		InterconnectActions.ListAttachPoints,
		InterconnectActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		InterconnectActions.AcceptConnectionProposal,
		InterconnectActions.CreateConnection,
		InterconnectActions.DeleteConnection,
		InterconnectActions.UpdateConnection,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		InterconnectActions.ListConnections,
		InterconnectActions.ListEnvironments,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		InterconnectActions.TagResource,
		InterconnectActions.UntagResource,
	];
}

/**
 * Properties for building a connection ARN.
 */
export interface InterconnectConnectionArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connection ARN.
 */
export interface InterconnectConnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a environment ARN.
 */
export interface InterconnectEnvironmentArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment ARN.
 */
export interface InterconnectEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

const ConnectionArnRegex =
	/^arn:(?<partition>[^:]+):interconnect:(?<region>[^:]*):(?<account>[^:]*):connection\/(?<id>[^:/?]+)$/;
const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):interconnect:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<id>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for interconnect resources.
 */
export class InterconnectResources {
	/**
	 * Builds an ARN for the connection resource.
	 */
	static connection(props: InterconnectConnectionArnProps): string {
		return `arn:${props.partition ?? "aws"}:interconnect:${props.region ?? "*"}:${props.account ?? "*"}:connection/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connection resource.
	 */
	static isValidConnectionArn(arn: string): boolean {
		return ConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a connection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionArn(arn: string): InterconnectConnectionArnComponents {
		const match = ConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: InterconnectEnvironmentArnProps): string {
		return `arn:${props.partition ?? "aws"}:interconnect:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment resource.
	 */
	static isValidEnvironmentArn(arn: string): boolean {
		return EnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentArn(
		arn: string,
	): InterconnectEnvironmentArnComponents {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}
}

/**
 * API operation to required IAM actions mapping for interconnect.
 */
export class InterconnectOperations {
	/** IAM actions required for the AcceptConnectionProposal API call. */
	static readonly AcceptConnectionProposal: string[] = [
		"interconnect:AcceptConnectionProposal",
		"interconnect:TagResource",
	];
	/** IAM actions required for the CreateConnection API call. */
	static readonly CreateConnection: string[] = [
		"interconnect:CreateConnection",
		"interconnect:TagResource",
	];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DeleteConnection: string[] = [
		"interconnect:DeleteConnection",
	];
	/** IAM actions required for the DescribeConnectionProposal API call. */
	static readonly DescribeConnectionProposal: string[] = [
		"interconnect:DescribeConnectionProposal",
	];
	/** IAM actions required for the GetConnection API call. */
	static readonly opGetConnection: string[] = ["interconnect:GetConnection"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly opGetEnvironment: string[] = ["interconnect:GetEnvironment"];
	/** IAM actions required for the ListAttachPoints API call. */
	static readonly ListAttachPoints: string[] = [
		"interconnect:ListAttachPoints",
	];
	/** IAM actions required for the ListConnections API call. */
	static readonly ListConnections: string[] = ["interconnect:ListConnections"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly ListEnvironments: string[] = [
		"interconnect:ListEnvironments",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"interconnect:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["interconnect:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["interconnect:UntagResource"];
	/** IAM actions required for the UpdateConnection API call. */
	static readonly UpdateConnection: string[] = [
		"interconnect:UpdateConnection",
	];
}

/**
 * Condition key constants and builders for interconnect.
 */
export class InterconnectConditions {
	/** Condition keys applicable to the AcceptConnectionProposal action. */
	static readonly AcceptConnectionProposalConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CreateConnectionConditionKeys: string[] = [
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
