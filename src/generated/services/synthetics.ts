// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/synthetics.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the synthetics service.
 */
export class SyntheticsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "synthetics";

	/** [Write] synthetics:AssociateResource */
	static readonly ASSOCIATE_RESOURCE = "synthetics:AssociateResource";
	/** [Write] synthetics:CreateCanary */
	static readonly CREATE_CANARY = "synthetics:CreateCanary";
	/** [Write] synthetics:CreateGroup */
	static readonly CREATE_GROUP = "synthetics:CreateGroup";
	/** [Write] synthetics:DeleteCanary */
	static readonly DELETE_CANARY = "synthetics:DeleteCanary";
	/** [Write] synthetics:DeleteGroup */
	static readonly DELETE_GROUP = "synthetics:DeleteGroup";
	/** [Read] synthetics:DescribeCanaries */
	static readonly DESCRIBE_CANARIES = "synthetics:DescribeCanaries";
	/** [Read] synthetics:DescribeCanariesLastRun */
	static readonly DESCRIBE_CANARIES_LAST_RUN =
		"synthetics:DescribeCanariesLastRun";
	/** [Read] synthetics:DescribeRuntimeVersions */
	static readonly DESCRIBE_RUNTIME_VERSIONS =
		"synthetics:DescribeRuntimeVersions";
	/** [Write] synthetics:DisassociateResource */
	static readonly DISASSOCIATE_RESOURCE = "synthetics:DisassociateResource";
	/** [Read] synthetics:GetCanary */
	static readonly GET_CANARY = "synthetics:GetCanary";
	/** [Read] synthetics:GetCanaryRuns */
	static readonly GET_CANARY_RUNS = "synthetics:GetCanaryRuns";
	/** [Read] synthetics:GetGroup */
	static readonly GET_GROUP = "synthetics:GetGroup";
	/** [List] synthetics:ListAssociatedGroups */
	static readonly LIST_ASSOCIATED_GROUPS = "synthetics:ListAssociatedGroups";
	/** [List] synthetics:ListGroupResources */
	static readonly LIST_GROUP_RESOURCES = "synthetics:ListGroupResources";
	/** [List] synthetics:ListGroups */
	static readonly LIST_GROUPS = "synthetics:ListGroups";
	/** [Read] synthetics:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "synthetics:ListTagsForResource";
	/** [Write] synthetics:StartCanary */
	static readonly START_CANARY = "synthetics:StartCanary";
	/** [Write] synthetics:StartCanaryDryRun */
	static readonly START_CANARY_DRY_RUN = "synthetics:StartCanaryDryRun";
	/** [Write] synthetics:StopCanary */
	static readonly STOP_CANARY = "synthetics:StopCanary";
	/** [Tagging] synthetics:TagResource */
	static readonly TAG_RESOURCE = "synthetics:TagResource";
	/** [Tagging] synthetics:UntagResource */
	static readonly UNTAG_RESOURCE = "synthetics:UntagResource";
	/** [Write] synthetics:UpdateCanary */
	static readonly UPDATE_CANARY = "synthetics:UpdateCanary";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SyntheticsActions.DESCRIBE_CANARIES,
		SyntheticsActions.DESCRIBE_CANARIES_LAST_RUN,
		SyntheticsActions.DESCRIBE_RUNTIME_VERSIONS,
		SyntheticsActions.GET_CANARY,
		SyntheticsActions.GET_CANARY_RUNS,
		SyntheticsActions.GET_GROUP,
		SyntheticsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SyntheticsActions.ASSOCIATE_RESOURCE,
		SyntheticsActions.CREATE_CANARY,
		SyntheticsActions.CREATE_GROUP,
		SyntheticsActions.DELETE_CANARY,
		SyntheticsActions.DELETE_GROUP,
		SyntheticsActions.DISASSOCIATE_RESOURCE,
		SyntheticsActions.START_CANARY,
		SyntheticsActions.START_CANARY_DRY_RUN,
		SyntheticsActions.STOP_CANARY,
		SyntheticsActions.UPDATE_CANARY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SyntheticsActions.LIST_ASSOCIATED_GROUPS,
		SyntheticsActions.LIST_GROUP_RESOURCES,
		SyntheticsActions.LIST_GROUPS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SyntheticsActions.TAG_RESOURCE,
		SyntheticsActions.UNTAG_RESOURCE,
	];
}

const CanaryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):synthetics:(?<region>[^:]*):(?<account>[^:]*):canary:(?<canaryName>[^:/?]+)$",
);
const GroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):synthetics:(?<region>[^:]*):(?<account>[^:]*):group:(?<groupId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for synthetics resources.
 */
export class SyntheticsResources {
	/**
	 * Builds an ARN for the canary resource.
	 */
	static canary(props: {
		/** The CanaryName component of the ARN. */
		readonly canaryName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:synthetics:${props.region ?? "*"}:${props.account ?? "*"}:canary:${props.canaryName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the canary resource.
	 */
	static isValidCanaryArn(arn: string): boolean {
		return CanaryArnRegex.test(arn);
	}

	/**
	 * Parses a canary ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCanaryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		canaryName: string;
	} {
		const match = CanaryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid canary ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			canaryName: match.groups!.canaryName,
		};
	}

	/**
	 * Builds an ARN for the group resource.
	 */
	static group(props: {
		/** The GroupId component of the ARN. */
		readonly groupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:synthetics:${props.region ?? "*"}:${props.account ?? "*"}:group:${props.groupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the group resource.
	 */
	static isValidGroupArn(arn: string): boolean {
		return GroupArnRegex.test(arn);
	}

	/**
	 * Parses a group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupId: string;
	} {
		const match = GroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupId: match.groups!.groupId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for synthetics.
 */
export class SyntheticsOperations {
	/** IAM actions required for the AssociateResource API call. */
	static readonly ASSOCIATE_RESOURCE: string[] = [
		"synthetics:AssociateResource",
	];
	/** IAM actions required for the CreateCanary API call. */
	static readonly CREATE_CANARY: string[] = [
		"synthetics:CreateCanary",
		"iam:PassRole",
		"synthetics:TagResource",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CREATE_GROUP: string[] = [
		"synthetics:CreateGroup",
		"synthetics:TagResource",
	];
	/** IAM actions required for the DeleteCanary API call. */
	static readonly DELETE_CANARY: string[] = ["synthetics:DeleteCanary"];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DELETE_GROUP: string[] = ["synthetics:DeleteGroup"];
	/** IAM actions required for the DescribeCanaries API call. */
	static readonly DESCRIBE_CANARIES: string[] = [
		"synthetics:DescribeCanaries",
		"synthetics:ListTagsForResource",
	];
	/** IAM actions required for the DescribeCanariesLastRun API call. */
	static readonly DESCRIBE_CANARIES_LAST_RUN: string[] = [
		"synthetics:DescribeCanariesLastRun",
	];
	/** IAM actions required for the DescribeRuntimeVersions API call. */
	static readonly DESCRIBE_RUNTIME_VERSIONS: string[] = [
		"synthetics:DescribeRuntimeVersions",
	];
	/** IAM actions required for the DisassociateResource API call. */
	static readonly DISASSOCIATE_RESOURCE: string[] = [
		"synthetics:DisassociateResource",
	];
	/** IAM actions required for the GetCanary API call. */
	static readonly GET_CANARY: string[] = ["synthetics:GetCanary"];
	/** IAM actions required for the GetCanaryRuns API call. */
	static readonly GET_CANARY_RUNS: string[] = ["synthetics:GetCanaryRuns"];
	/** IAM actions required for the GetGroup API call. */
	static readonly GET_GROUP: string[] = [
		"synthetics:GetGroup",
		"synthetics:ListTagsForResource",
	];
	/** IAM actions required for the ListAssociatedGroups API call. */
	static readonly LIST_ASSOCIATED_GROUPS: string[] = [
		"synthetics:ListAssociatedGroups",
	];
	/** IAM actions required for the ListGroupResources API call. */
	static readonly LIST_GROUP_RESOURCES: string[] = [
		"synthetics:ListGroupResources",
	];
	/** IAM actions required for the ListGroups API call. */
	static readonly LIST_GROUPS: string[] = ["synthetics:ListGroups"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"synthetics:ListTagsForResource",
	];
	/** IAM actions required for the StartCanary API call. */
	static readonly START_CANARY: string[] = ["synthetics:StartCanary"];
	/** IAM actions required for the StartCanaryDryRun API call. */
	static readonly START_CANARY_DRY_RUN: string[] = [
		"iam:PassRole",
		"synthetics:StartCanaryDryRun",
	];
	/** IAM actions required for the StopCanary API call. */
	static readonly STOP_CANARY: string[] = ["synthetics:StopCanary"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["synthetics:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["synthetics:UntagResource"];
	/** IAM actions required for the UpdateCanary API call. */
	static readonly UPDATE_CANARY: string[] = [
		"iam:PassRole",
		"synthetics:UpdateCanary",
	];
}

/**
 * Condition key constants and builders for synthetics.
 */
export class SyntheticsConditions {
	/** Condition keys applicable to the AssociateResource action. */
	static readonly ASSOCIATE_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCanary action. */
	static readonly CREATE_CANARY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGroup action. */
	static readonly CREATE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteCanary action. */
	static readonly DELETE_CANARY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteGroup action. */
	static readonly DELETE_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeCanaries action. */
	static readonly DESCRIBE_CANARIES_CONDITION_KEYS: string[] = [
		"synthetics:Names",
	];
	/** Condition keys applicable to the DescribeCanariesLastRun action. */
	static readonly DESCRIBE_CANARIES_LAST_RUN_CONDITION_KEYS: string[] = [
		"synthetics:Names",
	];
	/** Condition keys applicable to the DisassociateResource action. */
	static readonly DISASSOCIATE_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetCanary action. */
	static readonly GET_CANARY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetCanaryRuns action. */
	static readonly GET_CANARY_RUNS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetGroup action. */
	static readonly GET_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListAssociatedGroups action. */
	static readonly LIST_ASSOCIATED_GROUPS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListGroupResources action. */
	static readonly LIST_GROUP_RESOURCES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCanary action. */
	static readonly START_CANARY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCanaryDryRun action. */
	static readonly START_CANARY_DRY_RUN_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StopCanary action. */
	static readonly STOP_CANARY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateCanary action. */
	static readonly UPDATE_CANARY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: synthetics:Names (ArrayOfString) */
	static readonly NAMES = "synthetics:Names";

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

	/**
	 * Generates a condition block for `synthetics:Names`.
	 */
	static names(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "synthetics:Names": values } };
	}
}
