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
	static readonly ACCEPT_CONNECTION_PROPOSAL =
		"interconnect:AcceptConnectionProposal";
	/** [Write] interconnect:CreateConnection */
	static readonly CREATE_CONNECTION = "interconnect:CreateConnection";
	/** [Write] interconnect:DeleteConnection */
	static readonly DELETE_CONNECTION = "interconnect:DeleteConnection";
	/** [Read] interconnect:DescribeConnectionProposal */
	static readonly DESCRIBE_CONNECTION_PROPOSAL =
		"interconnect:DescribeConnectionProposal";
	/** [Read] interconnect:GetConnection */
	static readonly GET_CONNECTION = "interconnect:GetConnection";
	/** [Read] interconnect:GetEnvironment */
	static readonly GET_ENVIRONMENT = "interconnect:GetEnvironment";
	/** [Read] interconnect:ListAttachPoints */
	static readonly LIST_ATTACH_POINTS = "interconnect:ListAttachPoints";
	/** [List] interconnect:ListConnections */
	static readonly LIST_CONNECTIONS = "interconnect:ListConnections";
	/** [List] interconnect:ListEnvironments */
	static readonly LIST_ENVIRONMENTS = "interconnect:ListEnvironments";
	/** [Read] interconnect:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "interconnect:ListTagsForResource";
	/** [Tagging] interconnect:TagResource */
	static readonly TAG_RESOURCE = "interconnect:TagResource";
	/** [Tagging] interconnect:UntagResource */
	static readonly UNTAG_RESOURCE = "interconnect:UntagResource";
	/** [Write] interconnect:UpdateConnection */
	static readonly UPDATE_CONNECTION = "interconnect:UpdateConnection";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		InterconnectActions.DESCRIBE_CONNECTION_PROPOSAL,
		InterconnectActions.GET_CONNECTION,
		InterconnectActions.GET_ENVIRONMENT,
		InterconnectActions.LIST_ATTACH_POINTS,
		InterconnectActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		InterconnectActions.ACCEPT_CONNECTION_PROPOSAL,
		InterconnectActions.CREATE_CONNECTION,
		InterconnectActions.DELETE_CONNECTION,
		InterconnectActions.UPDATE_CONNECTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		InterconnectActions.LIST_CONNECTIONS,
		InterconnectActions.LIST_ENVIRONMENTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		InterconnectActions.TAG_RESOURCE,
		InterconnectActions.UNTAG_RESOURCE,
	];
}

const ConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):interconnect:(?<region>[^:]*):(?<account>[^:]*):connection/(?<id>[^:/?]+)$",
);
const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):interconnect:(?<region>[^:]*):(?<account>[^:]*):environment/(?<id>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for interconnect resources.
 */
export class InterconnectResources {
	/**
	 * Builds an ARN for the connection resource.
	 */
	static connection(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static environment(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static readonly ACCEPT_CONNECTION_PROPOSAL: string[] = [
		"interconnect:AcceptConnectionProposal",
		"interconnect:TagResource",
	];
	/** IAM actions required for the CreateConnection API call. */
	static readonly CREATE_CONNECTION: string[] = [
		"interconnect:CreateConnection",
		"interconnect:TagResource",
	];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DELETE_CONNECTION: string[] = [
		"interconnect:DeleteConnection",
	];
	/** IAM actions required for the DescribeConnectionProposal API call. */
	static readonly DESCRIBE_CONNECTION_PROPOSAL: string[] = [
		"interconnect:DescribeConnectionProposal",
	];
	/** IAM actions required for the GetConnection API call. */
	static readonly GET_CONNECTION: string[] = ["interconnect:GetConnection"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly GET_ENVIRONMENT: string[] = ["interconnect:GetEnvironment"];
	/** IAM actions required for the ListAttachPoints API call. */
	static readonly LIST_ATTACH_POINTS: string[] = [
		"interconnect:ListAttachPoints",
	];
	/** IAM actions required for the ListConnections API call. */
	static readonly LIST_CONNECTIONS: string[] = ["interconnect:ListConnections"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly LIST_ENVIRONMENTS: string[] = [
		"interconnect:ListEnvironments",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"interconnect:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["interconnect:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["interconnect:UntagResource"];
	/** IAM actions required for the UpdateConnection API call. */
	static readonly UPDATE_CONNECTION: string[] = [
		"interconnect:UpdateConnection",
	];
}

/**
 * Condition key constants and builders for interconnect.
 */
export class InterconnectConditions {
	/** Condition keys applicable to the AcceptConnectionProposal action. */
	static readonly ACCEPT_CONNECTION_PROPOSAL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CREATE_CONNECTION_CONDITION_KEYS: string[] = [
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
