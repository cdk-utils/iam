// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/rbin.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the rbin service.
 */
export class RbinActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "rbin";

	/** [Write] rbin:CreateRule */
	static readonly CreateRule = "rbin:CreateRule";
	/** [Write] rbin:DeleteRule */
	static readonly DeleteRule = "rbin:DeleteRule";
	/** [Read] rbin:GetRule */
	static readonly actionGetRule = "rbin:GetRule";
	/** [Read] rbin:ListRules */
	static readonly ListRules = "rbin:ListRules";
	/** [Read] rbin:ListTagsForResource */
	static readonly ListTagsForResource = "rbin:ListTagsForResource";
	/** [Write] rbin:LockRule */
	static readonly LockRule = "rbin:LockRule";
	/** [Tagging] rbin:TagResource */
	static readonly TagResource = "rbin:TagResource";
	/** [Write] rbin:UnlockRule */
	static readonly UnlockRule = "rbin:UnlockRule";
	/** [Tagging] rbin:UntagResource */
	static readonly UntagResource = "rbin:UntagResource";
	/** [Write] rbin:UpdateRule */
	static readonly UpdateRule = "rbin:UpdateRule";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RbinActions.actionGetRule,
		RbinActions.ListRules,
		RbinActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RbinActions.CreateRule,
		RbinActions.DeleteRule,
		RbinActions.LockRule,
		RbinActions.UnlockRule,
		RbinActions.UpdateRule,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		RbinActions.TagResource,
		RbinActions.UntagResource,
	];
}

/**
 * Properties for building a rule ARN.
 */
export interface RbinRuleArnProps {
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
 * Parsed components of a rule ARN.
 */
export interface RbinRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceName component. */
	readonly resourceName: string;
}

const RuleArnRegex =
	/^arn:(?<partition>[^:]+):rbin:(?<region>[^:]*):(?<account>[^:]*):rule\/(?<resourceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for rbin resources.
 */
export class RbinResources {
	/**
	 * Builds an ARN for the rule resource.
	 */
	static rule(props: RbinRuleArnProps): string {
		return `arn:${props.partition ?? "aws"}:rbin:${props.region ?? "*"}:${props.account ?? "*"}:rule/${props.resourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rule resource.
	 */
	static isValidRuleArn(arn: string): boolean {
		return RuleArnRegex.test(arn);
	}

	/**
	 * Parses a rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRuleArn(arn: string): RbinRuleArnComponents {
		const match = RuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rule ARN: ${arn}`);
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
 * API operation to required IAM actions mapping for rbin.
 */
export class RbinOperations {
	/** IAM actions required for the CreateRule API call. */
	static readonly CreateRule: string[] = [
		"rbin:CreateRule",
		"rbin:LockRule",
		"rbin:TagResource",
	];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DeleteRule: string[] = ["rbin:DeleteRule"];
	/** IAM actions required for the GetRule API call. */
	static readonly opGetRule: string[] = ["rbin:GetRule"];
	/** IAM actions required for the ListRules API call. */
	static readonly ListRules: string[] = ["rbin:ListRules"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["rbin:ListTagsForResource"];
	/** IAM actions required for the LockRule API call. */
	static readonly LockRule: string[] = ["rbin:LockRule"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["rbin:TagResource"];
	/** IAM actions required for the UnlockRule API call. */
	static readonly UnlockRule: string[] = ["rbin:UnlockRule"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["rbin:UntagResource"];
	/** IAM actions required for the UpdateRule API call. */
	static readonly UpdateRule: string[] = ["rbin:UpdateRule"];
}

/**
 * Condition key constants and builders for rbin.
 */
export class RbinConditions {
	/** Condition keys applicable to the CreateRule action. */
	static readonly CreateRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rbin:Request/ResourceType",
	];
	/** Condition keys applicable to the DeleteRule action. */
	static readonly DeleteRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"rbin:Attribute/ResourceType",
	];
	/** Condition keys applicable to the GetRule action. */
	static readonly actionGetRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"rbin:Attribute/ResourceType",
	];
	/** Condition keys applicable to the ListRules action. */
	static readonly ListRulesConditionKeys: string[] = [
		"rbin:Request/ResourceType",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"rbin:Attribute/ResourceType",
	];
	/** Condition keys applicable to the LockRule action. */
	static readonly LockRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"rbin:Attribute/ResourceType",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"rbin:Attribute/ResourceType",
	];
	/** Condition keys applicable to the UnlockRule action. */
	static readonly UnlockRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"rbin:Attribute/ResourceType",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"rbin:Attribute/ResourceType",
	];
	/** Condition keys applicable to the UpdateRule action. */
	static readonly UpdateRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"rbin:Attribute/ResourceType",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: rbin:Attribute/ResourceType (String) */
	static readonly ATTRIBUTE_RESOURCE_TYPE = "rbin:Attribute/ResourceType";
	/** Condition key: rbin:Request/ResourceType (String) */
	static readonly REQUEST_RESOURCE_TYPE = "rbin:Request/ResourceType";

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
	 * Generates a condition block for `rbin:Attribute/ResourceType`.
	 */
	static attributeResourceType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "rbin:Attribute/ResourceType": value } };
	}

	/**
	 * Generates a condition block for `rbin:Request/ResourceType`.
	 */
	static requestResourceType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "rbin:Request/ResourceType": value } };
	}
}
