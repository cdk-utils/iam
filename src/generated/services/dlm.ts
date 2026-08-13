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
	static readonly CREATE_LIFECYCLE_POLICY = "dlm:CreateLifecyclePolicy";
	/** [Write] dlm:DeleteLifecyclePolicy */
	static readonly DELETE_LIFECYCLE_POLICY = "dlm:DeleteLifecyclePolicy";
	/** [List] dlm:GetLifecyclePolicies */
	static readonly GET_LIFECYCLE_POLICIES = "dlm:GetLifecyclePolicies";
	/** [Read] dlm:GetLifecyclePolicy */
	static readonly GET_LIFECYCLE_POLICY = "dlm:GetLifecyclePolicy";
	/** [Read] dlm:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "dlm:ListTagsForResource";
	/** [Tagging] dlm:TagResource */
	static readonly TAG_RESOURCE = "dlm:TagResource";
	/** [Tagging] dlm:UntagResource */
	static readonly UNTAG_RESOURCE = "dlm:UntagResource";
	/** [Write] dlm:UpdateLifecyclePolicy */
	static readonly UPDATE_LIFECYCLE_POLICY = "dlm:UpdateLifecyclePolicy";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DlmActions.GET_LIFECYCLE_POLICY,
		DlmActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DlmActions.CREATE_LIFECYCLE_POLICY,
		DlmActions.DELETE_LIFECYCLE_POLICY,
		DlmActions.UPDATE_LIFECYCLE_POLICY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [DlmActions.GET_LIFECYCLE_POLICIES];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DlmActions.TAG_RESOURCE,
		DlmActions.UNTAG_RESOURCE,
	];
}

const PolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dlm:(?<region>[^:]*):(?<account>[^:]*):policy/(?<resourceName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for dlm resources.
 */
export class DlmResources {
	/**
	 * Builds an ARN for the policy resource.
	 */
	static policy(props: {
		/** The ResourceName component of the ARN. */
		readonly resourceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceName: string;
	} {
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
	static readonly CREATE_LIFECYCLE_POLICY: string[] = [
		"dlm:CreateLifecyclePolicy",
		"iam:PassRole",
		"dlm:TagResource",
	];
	/** IAM actions required for the DeleteLifecyclePolicy API call. */
	static readonly DELETE_LIFECYCLE_POLICY: string[] = [
		"dlm:DeleteLifecyclePolicy",
	];
	/** IAM actions required for the GetLifecyclePolicies API call. */
	static readonly GET_LIFECYCLE_POLICIES: string[] = [
		"dlm:GetLifecyclePolicies",
	];
	/** IAM actions required for the GetLifecyclePolicy API call. */
	static readonly GET_LIFECYCLE_POLICY: string[] = ["dlm:GetLifecyclePolicy"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"dlm:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["dlm:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["dlm:UntagResource"];
	/** IAM actions required for the UpdateLifecyclePolicy API call. */
	static readonly UPDATE_LIFECYCLE_POLICY: string[] = [
		"iam:PassRole",
		"dlm:UpdateLifecyclePolicy",
	];
}

/**
 * Condition key constants and builders for dlm.
 */
export class DlmConditions {
	/** Condition keys applicable to the CreateLifecyclePolicy action. */
	static readonly CREATE_LIFECYCLE_POLICY_CONDITION_KEYS: string[] = [
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
