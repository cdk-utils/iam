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
	static readonly AssociateResource = "synthetics:AssociateResource";
	/** [Write] synthetics:CreateCanary */
	static readonly CreateCanary = "synthetics:CreateCanary";
	/** [Write] synthetics:CreateGroup */
	static readonly CreateGroup = "synthetics:CreateGroup";
	/** [Write] synthetics:DeleteCanary */
	static readonly DeleteCanary = "synthetics:DeleteCanary";
	/** [Write] synthetics:DeleteGroup */
	static readonly DeleteGroup = "synthetics:DeleteGroup";
	/** [Read] synthetics:DescribeCanaries */
	static readonly DescribeCanaries = "synthetics:DescribeCanaries";
	/** [Read] synthetics:DescribeCanariesLastRun */
	static readonly DescribeCanariesLastRun =
		"synthetics:DescribeCanariesLastRun";
	/** [Read] synthetics:DescribeRuntimeVersions */
	static readonly DescribeRuntimeVersions =
		"synthetics:DescribeRuntimeVersions";
	/** [Write] synthetics:DisassociateResource */
	static readonly DisassociateResource = "synthetics:DisassociateResource";
	/** [Read] synthetics:GetCanary */
	static readonly actionGetCanary = "synthetics:GetCanary";
	/** [Read] synthetics:GetCanaryRuns */
	static readonly actionGetCanaryRuns = "synthetics:GetCanaryRuns";
	/** [Read] synthetics:GetGroup */
	static readonly actionGetGroup = "synthetics:GetGroup";
	/** [List] synthetics:ListAssociatedGroups */
	static readonly ListAssociatedGroups = "synthetics:ListAssociatedGroups";
	/** [List] synthetics:ListGroupResources */
	static readonly ListGroupResources = "synthetics:ListGroupResources";
	/** [List] synthetics:ListGroups */
	static readonly ListGroups = "synthetics:ListGroups";
	/** [Read] synthetics:ListTagsForResource */
	static readonly ListTagsForResource = "synthetics:ListTagsForResource";
	/** [Write] synthetics:StartCanary */
	static readonly StartCanary = "synthetics:StartCanary";
	/** [Write] synthetics:StartCanaryDryRun */
	static readonly StartCanaryDryRun = "synthetics:StartCanaryDryRun";
	/** [Write] synthetics:StopCanary */
	static readonly StopCanary = "synthetics:StopCanary";
	/** [Tagging] synthetics:TagResource */
	static readonly TagResource = "synthetics:TagResource";
	/** [Tagging] synthetics:UntagResource */
	static readonly UntagResource = "synthetics:UntagResource";
	/** [Write] synthetics:UpdateCanary */
	static readonly UpdateCanary = "synthetics:UpdateCanary";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SyntheticsActions.DescribeCanaries,
		SyntheticsActions.DescribeCanariesLastRun,
		SyntheticsActions.DescribeRuntimeVersions,
		SyntheticsActions.actionGetCanary,
		SyntheticsActions.actionGetCanaryRuns,
		SyntheticsActions.actionGetGroup,
		SyntheticsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SyntheticsActions.AssociateResource,
		SyntheticsActions.CreateCanary,
		SyntheticsActions.CreateGroup,
		SyntheticsActions.DeleteCanary,
		SyntheticsActions.DeleteGroup,
		SyntheticsActions.DisassociateResource,
		SyntheticsActions.StartCanary,
		SyntheticsActions.StartCanaryDryRun,
		SyntheticsActions.StopCanary,
		SyntheticsActions.UpdateCanary,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SyntheticsActions.ListAssociatedGroups,
		SyntheticsActions.ListGroupResources,
		SyntheticsActions.ListGroups,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SyntheticsActions.TagResource,
		SyntheticsActions.UntagResource,
	];
}

/**
 * Properties for building a canary ARN.
 */
export interface SyntheticsCanaryArnProps {
	/** The CanaryName component of the ARN. */
	readonly canaryName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a canary ARN.
 */
export interface SyntheticsCanaryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CanaryName component. */
	readonly canaryName: string;
}

/**
 * Properties for building a group ARN.
 */
export interface SyntheticsGroupArnProps {
	/** The GroupId component of the ARN. */
	readonly groupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a group ARN.
 */
export interface SyntheticsGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupId component. */
	readonly groupId: string;
}

const CanaryArnRegex =
	/^arn:(?<partition>[^:]+):synthetics:(?<region>[^:]*):(?<account>[^:]*):canary:(?<canaryName>[^:/?]+)$/;
const GroupArnRegex =
	/^arn:(?<partition>[^:]+):synthetics:(?<region>[^:]*):(?<account>[^:]*):group:(?<groupId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for synthetics resources.
 */
export class SyntheticsResources {
	/**
	 * Builds an ARN for the canary resource.
	 */
	static canary(props: SyntheticsCanaryArnProps): string {
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
	static parseCanaryArn(arn: string): SyntheticsCanaryArnComponents {
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
	static group(props: SyntheticsGroupArnProps): string {
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
	static parseGroupArn(arn: string): SyntheticsGroupArnComponents {
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
	static readonly AssociateResource: string[] = [
		"synthetics:AssociateResource",
	];
	/** IAM actions required for the CreateCanary API call. */
	static readonly CreateCanary: string[] = [
		"synthetics:CreateCanary",
		"iam:PassRole",
		"synthetics:TagResource",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CreateGroup: string[] = [
		"synthetics:CreateGroup",
		"synthetics:TagResource",
	];
	/** IAM actions required for the DeleteCanary API call. */
	static readonly DeleteCanary: string[] = ["synthetics:DeleteCanary"];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DeleteGroup: string[] = ["synthetics:DeleteGroup"];
	/** IAM actions required for the DescribeCanaries API call. */
	static readonly DescribeCanaries: string[] = [
		"synthetics:DescribeCanaries",
		"synthetics:ListTagsForResource",
	];
	/** IAM actions required for the DescribeCanariesLastRun API call. */
	static readonly DescribeCanariesLastRun: string[] = [
		"synthetics:DescribeCanariesLastRun",
	];
	/** IAM actions required for the DescribeRuntimeVersions API call. */
	static readonly DescribeRuntimeVersions: string[] = [
		"synthetics:DescribeRuntimeVersions",
	];
	/** IAM actions required for the DisassociateResource API call. */
	static readonly DisassociateResource: string[] = [
		"synthetics:DisassociateResource",
	];
	/** IAM actions required for the GetCanary API call. */
	static readonly opGetCanary: string[] = ["synthetics:GetCanary"];
	/** IAM actions required for the GetCanaryRuns API call. */
	static readonly opGetCanaryRuns: string[] = ["synthetics:GetCanaryRuns"];
	/** IAM actions required for the GetGroup API call. */
	static readonly opGetGroup: string[] = [
		"synthetics:GetGroup",
		"synthetics:ListTagsForResource",
	];
	/** IAM actions required for the ListAssociatedGroups API call. */
	static readonly ListAssociatedGroups: string[] = [
		"synthetics:ListAssociatedGroups",
	];
	/** IAM actions required for the ListGroupResources API call. */
	static readonly ListGroupResources: string[] = [
		"synthetics:ListGroupResources",
	];
	/** IAM actions required for the ListGroups API call. */
	static readonly ListGroups: string[] = ["synthetics:ListGroups"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"synthetics:ListTagsForResource",
	];
	/** IAM actions required for the StartCanary API call. */
	static readonly StartCanary: string[] = ["synthetics:StartCanary"];
	/** IAM actions required for the StartCanaryDryRun API call. */
	static readonly StartCanaryDryRun: string[] = [
		"iam:PassRole",
		"synthetics:StartCanaryDryRun",
	];
	/** IAM actions required for the StopCanary API call. */
	static readonly StopCanary: string[] = ["synthetics:StopCanary"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["synthetics:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["synthetics:UntagResource"];
	/** IAM actions required for the UpdateCanary API call. */
	static readonly UpdateCanary: string[] = [
		"iam:PassRole",
		"synthetics:UpdateCanary",
	];
}

/**
 * Condition key constants and builders for synthetics.
 */
export class SyntheticsConditions {
	/** Condition keys applicable to the AssociateResource action. */
	static readonly AssociateResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCanary action. */
	static readonly CreateCanaryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGroup action. */
	static readonly CreateGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteCanary action. */
	static readonly DeleteCanaryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteGroup action. */
	static readonly DeleteGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeCanaries action. */
	static readonly DescribeCanariesConditionKeys: string[] = [
		"synthetics:Names",
	];
	/** Condition keys applicable to the DescribeCanariesLastRun action. */
	static readonly DescribeCanariesLastRunConditionKeys: string[] = [
		"synthetics:Names",
	];
	/** Condition keys applicable to the DisassociateResource action. */
	static readonly DisassociateResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetCanary action. */
	static readonly actionGetCanaryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetCanaryRuns action. */
	static readonly actionGetCanaryRunsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetGroup action. */
	static readonly actionGetGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListAssociatedGroups action. */
	static readonly ListAssociatedGroupsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListGroupResources action. */
	static readonly ListGroupResourcesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCanary action. */
	static readonly StartCanaryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCanaryDryRun action. */
	static readonly StartCanaryDryRunConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StopCanary action. */
	static readonly StopCanaryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateCanary action. */
	static readonly UpdateCanaryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
