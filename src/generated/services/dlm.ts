// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/dlm.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the dlm service.
 */
export class DlmActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "dlm";

	/** [Write] dlm:CreateLifecyclePolicy */
	static readonly CreateLifecyclePolicy = "dlm:CreateLifecyclePolicy";
	/** [Write] dlm:DeleteLifecyclePolicy */
	static readonly DeleteLifecyclePolicy = "dlm:DeleteLifecyclePolicy";
	/** [List] dlm:GetLifecyclePolicies */
	static readonly actionGetLifecyclePolicies = "dlm:GetLifecyclePolicies";
	/** [Read] dlm:GetLifecyclePolicy */
	static readonly actionGetLifecyclePolicy = "dlm:GetLifecyclePolicy";
	/** [Read] dlm:ListTagsForResource */
	static readonly ListTagsForResource = "dlm:ListTagsForResource";
	/** [Tagging] dlm:TagResource */
	static readonly TagResource = "dlm:TagResource";
	/** [Tagging] dlm:UntagResource */
	static readonly UntagResource = "dlm:UntagResource";
	/** [Write] dlm:UpdateLifecyclePolicy */
	static readonly UpdateLifecyclePolicy = "dlm:UpdateLifecyclePolicy";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DlmActions.actionGetLifecyclePolicy,
		DlmActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DlmActions.CreateLifecyclePolicy,
		DlmActions.DeleteLifecyclePolicy,
		DlmActions.UpdateLifecyclePolicy,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DlmActions.actionGetLifecyclePolicies,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DlmActions.TagResource,
		DlmActions.UntagResource,
	];
}

/**
 * Properties for building a policy ARN.
 */
export interface DlmPolicyArnProps {
	/** The ResourceName component of the ARN. */
	readonly resourceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a policy ARN.
 */
export interface DlmPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceName component. */
	readonly resourceName: string;
}

const PolicyArnRegex =
	/^arn:(?<partition>[^:]+):dlm:(?<region>[^:]*):(?<account>[^:]*):policy\/(?<resourceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for dlm resources.
 */
export class DlmResources {
	/**
	 * Builds an ARN for the policy resource.
	 */
	static policy(props: DlmPolicyArnProps): string {
		return `arn:${props.partition ?? "aws"}:dlm:${props.region ?? "*"}:${props.account ?? "*"}:policy/${props.resourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the policy resource.
	 */
	static isValidPolicyArn(arn: string): boolean {
		return PolicyArnRegex.test(arn);
	}

	/**
	 * Parses a policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePolicyArn(arn: string): DlmPolicyArnComponents {
		const match = PolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceName: match.groups!.resourceName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for dlm.
 */
export class DlmOperations {
	/** IAM actions required for the CreateLifecyclePolicy API call. */
	static readonly CreateLifecyclePolicy: string[] = [
		"dlm:CreateLifecyclePolicy",
		"iam:PassRole",
		"dlm:TagResource",
	];
	/** IAM actions required for the DeleteLifecyclePolicy API call. */
	static readonly DeleteLifecyclePolicy: string[] = [
		"dlm:DeleteLifecyclePolicy",
	];
	/** IAM actions required for the GetLifecyclePolicies API call. */
	static readonly opGetLifecyclePolicies: string[] = [
		"dlm:GetLifecyclePolicies",
	];
	/** IAM actions required for the GetLifecyclePolicy API call. */
	static readonly opGetLifecyclePolicy: string[] = ["dlm:GetLifecyclePolicy"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["dlm:ListTagsForResource"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["dlm:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["dlm:UntagResource"];
	/** IAM actions required for the UpdateLifecyclePolicy API call. */
	static readonly UpdateLifecyclePolicy: string[] = [
		"iam:PassRole",
		"dlm:UpdateLifecyclePolicy",
	];
}

/**
 * Condition key constants and builders for dlm.
 */
export class DlmConditions {
	/** Condition keys applicable to the CreateLifecyclePolicy action. */
	static readonly CreateLifecyclePolicyConditionKeys: string[] = [
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
