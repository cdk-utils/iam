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
	static readonly CREATE_RULE = "rbin:CreateRule";
	/** [Write] rbin:DeleteRule */
	static readonly DELETE_RULE = "rbin:DeleteRule";
	/** [Read] rbin:GetRule */
	static readonly GET_RULE = "rbin:GetRule";
	/** [Read] rbin:ListRules */
	static readonly LIST_RULES = "rbin:ListRules";
	/** [Read] rbin:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "rbin:ListTagsForResource";
	/** [Write] rbin:LockRule */
	static readonly LOCK_RULE = "rbin:LockRule";
	/** [Tagging] rbin:TagResource */
	static readonly TAG_RESOURCE = "rbin:TagResource";
	/** [Write] rbin:UnlockRule */
	static readonly UNLOCK_RULE = "rbin:UnlockRule";
	/** [Tagging] rbin:UntagResource */
	static readonly UNTAG_RESOURCE = "rbin:UntagResource";
	/** [Write] rbin:UpdateRule */
	static readonly UPDATE_RULE = "rbin:UpdateRule";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [RbinActions.GET_RULE, RbinActions.LIST_RULES, RbinActions.LIST_TAGS_FOR_RESOURCE];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [RbinActions.CREATE_RULE, RbinActions.DELETE_RULE, RbinActions.LOCK_RULE, RbinActions.UNLOCK_RULE, RbinActions.UPDATE_RULE];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [RbinActions.TAG_RESOURCE, RbinActions.UNTAG_RESOURCE];
}

const RuleArnRegex = new RegExp("^arn:(?<partition>[^:]+):rbin:(?<region>[^:]*):(?<account>[^:]*):rule/(?<resourceName>[^:/?]+)$");

/**
 * ARN builders, validators, and parsers for rbin resources.
 */
export class RbinResources {
	/**
	 * Builds an ARN for the rule resource.
	 */
	static rule(props: {
		/** The ResourceName component of the ARN. */
		readonly resourceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRuleArn(arn: string): { partition: string; region: string; account: string; resourceName: string } {
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
	static readonly CREATE_RULE: string[] = ["rbin:CreateRule", "rbin:LockRule", "rbin:TagResource"];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DELETE_RULE: string[] = ["rbin:DeleteRule"];
	/** IAM actions required for the GetRule API call. */
	static readonly GET_RULE: string[] = ["rbin:GetRule"];
	/** IAM actions required for the ListRules API call. */
	static readonly LIST_RULES: string[] = ["rbin:ListRules"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = ["rbin:ListTagsForResource"];
	/** IAM actions required for the LockRule API call. */
	static readonly LOCK_RULE: string[] = ["rbin:LockRule"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["rbin:TagResource"];
	/** IAM actions required for the UnlockRule API call. */
	static readonly UNLOCK_RULE: string[] = ["rbin:UnlockRule"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["rbin:UntagResource"];
	/** IAM actions required for the UpdateRule API call. */
	static readonly UPDATE_RULE: string[] = ["rbin:UpdateRule"];
}

/**
 * Condition key constants and builders for rbin.
 */
export class RbinConditions {
	/** Condition keys applicable to the CreateRule action. */
	static readonly CREATE_RULE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys", "rbin:Request/ResourceType"];
	/** Condition keys applicable to the DeleteRule action. */
	static readonly DELETE_RULE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "rbin:Attribute/ResourceType"];
	/** Condition keys applicable to the GetRule action. */
	static readonly GET_RULE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "rbin:Attribute/ResourceType"];
	/** Condition keys applicable to the ListRules action. */
	static readonly LIST_RULES_CONDITION_KEYS: string[] = ["rbin:Request/ResourceType"];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "rbin:Attribute/ResourceType"];
	/** Condition keys applicable to the LockRule action. */
	static readonly LOCK_RULE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "rbin:Attribute/ResourceType"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys", "rbin:Attribute/ResourceType"];
	/** Condition keys applicable to the UnlockRule action. */
	static readonly UNLOCK_RULE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "rbin:Attribute/ResourceType"];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "aws:TagKeys", "rbin:Attribute/ResourceType"];
	/** Condition keys applicable to the UpdateRule action. */
	static readonly UPDATE_RULE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "rbin:Attribute/ResourceType"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: rbin:Attribute/ResourceType (String) */
	static readonly ATTRIBUTE/RESOURCE_TYPE = "rbin:Attribute/ResourceType";
	/** Condition key: rbin:Request/ResourceType (String) */
	static readonly REQUEST/RESOURCE_TYPE = "rbin:Request/ResourceType";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "aws:ResourceTag/${TagKey}": value } };
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
	static attribute/resourceType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "rbin:Attribute/ResourceType": value } };
	}

	/**
	 * Generates a condition block for `rbin:Request/ResourceType`.
	 */
	static request/resourceType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "rbin:Request/ResourceType": value } };
	}

}
