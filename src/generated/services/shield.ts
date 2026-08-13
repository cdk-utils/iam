// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/shield.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the shield service.
 */
export class ShieldActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "shield";

	/** [Write] shield:AssociateDRTLogBucket */
	static readonly ASSOCIATE_DRT_LOG_BUCKET = "shield:AssociateDRTLogBucket";
	/** [Write] shield:AssociateDRTRole */
	static readonly ASSOCIATE_DRT_ROLE = "shield:AssociateDRTRole";
	/** [Write] shield:AssociateHealthCheck */
	static readonly ASSOCIATE_HEALTH_CHECK = "shield:AssociateHealthCheck";
	/** [Write] shield:AssociateProactiveEngagementDetails */
	static readonly ASSOCIATE_PROACTIVE_ENGAGEMENT_DETAILS =
		"shield:AssociateProactiveEngagementDetails";
	/** [Write] shield:CreateProtection */
	static readonly CREATE_PROTECTION = "shield:CreateProtection";
	/** [Write] shield:CreateProtectionGroup */
	static readonly CREATE_PROTECTION_GROUP = "shield:CreateProtectionGroup";
	/** [Write] shield:CreateSubscription */
	static readonly CREATE_SUBSCRIPTION = "shield:CreateSubscription";
	/** [Write] shield:DeleteProtection */
	static readonly DELETE_PROTECTION = "shield:DeleteProtection";
	/** [Write] shield:DeleteProtectionGroup */
	static readonly DELETE_PROTECTION_GROUP = "shield:DeleteProtectionGroup";
	/** [Write] shield:DeleteSubscription */
	static readonly DELETE_SUBSCRIPTION = "shield:DeleteSubscription";
	/** [Read] shield:DescribeAttack */
	static readonly DESCRIBE_ATTACK = "shield:DescribeAttack";
	/** [Read] shield:DescribeAttackContributors */
	static readonly DESCRIBE_ATTACK_CONTRIBUTORS =
		"shield:DescribeAttackContributors";
	/** [Read] shield:DescribeAttackStatistics */
	static readonly DESCRIBE_ATTACK_STATISTICS =
		"shield:DescribeAttackStatistics";
	/** [Read] shield:DescribeDRTAccess */
	static readonly DESCRIBE_DRT_ACCESS = "shield:DescribeDRTAccess";
	/** [Read] shield:DescribeEmergencyContactSettings */
	static readonly DESCRIBE_EMERGENCY_CONTACT_SETTINGS =
		"shield:DescribeEmergencyContactSettings";
	/** [Read] shield:DescribeProtection */
	static readonly DESCRIBE_PROTECTION = "shield:DescribeProtection";
	/** [Read] shield:DescribeProtectionGroup */
	static readonly DESCRIBE_PROTECTION_GROUP = "shield:DescribeProtectionGroup";
	/** [Read] shield:DescribeSubscription */
	static readonly DESCRIBE_SUBSCRIPTION = "shield:DescribeSubscription";
	/** [Write] shield:DisableApplicationLayerAutomaticResponse */
	static readonly DISABLE_APPLICATION_LAYER_AUTOMATIC_RESPONSE =
		"shield:DisableApplicationLayerAutomaticResponse";
	/** [Write] shield:DisableProactiveEngagement */
	static readonly DISABLE_PROACTIVE_ENGAGEMENT =
		"shield:DisableProactiveEngagement";
	/** [Write] shield:DisassociateDRTLogBucket */
	static readonly DISASSOCIATE_DRT_LOG_BUCKET =
		"shield:DisassociateDRTLogBucket";
	/** [Write] shield:DisassociateDRTRole */
	static readonly DISASSOCIATE_DRT_ROLE = "shield:DisassociateDRTRole";
	/** [Write] shield:DisassociateHealthCheck */
	static readonly DISASSOCIATE_HEALTH_CHECK = "shield:DisassociateHealthCheck";
	/** [Write] shield:EnableApplicationLayerAutomaticResponse */
	static readonly ENABLE_APPLICATION_LAYER_AUTOMATIC_RESPONSE =
		"shield:EnableApplicationLayerAutomaticResponse";
	/** [Write] shield:EnableProactiveEngagement */
	static readonly ENABLE_PROACTIVE_ENGAGEMENT =
		"shield:EnableProactiveEngagement";
	/** [Read] shield:GetGlobalThreatData */
	static readonly GET_GLOBAL_THREAT_DATA = "shield:GetGlobalThreatData";
	/** [Read] shield:GetSubscriptionState */
	static readonly GET_SUBSCRIPTION_STATE = "shield:GetSubscriptionState";
	/** [List] shield:ListAttacks */
	static readonly LIST_ATTACKS = "shield:ListAttacks";
	/** [List] shield:ListMitigations */
	static readonly LIST_MITIGATIONS = "shield:ListMitigations";
	/** [List] shield:ListProtectionGroups */
	static readonly LIST_PROTECTION_GROUPS = "shield:ListProtectionGroups";
	/** [List] shield:ListProtections */
	static readonly LIST_PROTECTIONS = "shield:ListProtections";
	/** [List] shield:ListResourcesInProtectionGroup */
	static readonly LIST_RESOURCES_IN_PROTECTION_GROUP =
		"shield:ListResourcesInProtectionGroup";
	/** [Read] shield:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "shield:ListTagsForResource";
	/** [Tagging] shield:TagResource */
	static readonly TAG_RESOURCE = "shield:TagResource";
	/** [Tagging] shield:UntagResource */
	static readonly UNTAG_RESOURCE = "shield:UntagResource";
	/** [Write] shield:UpdateApplicationLayerAutomaticResponse */
	static readonly UPDATE_APPLICATION_LAYER_AUTOMATIC_RESPONSE =
		"shield:UpdateApplicationLayerAutomaticResponse";
	/** [Write] shield:UpdateEmergencyContactSettings */
	static readonly UPDATE_EMERGENCY_CONTACT_SETTINGS =
		"shield:UpdateEmergencyContactSettings";
	/** [Write] shield:UpdateProtectionGroup */
	static readonly UPDATE_PROTECTION_GROUP = "shield:UpdateProtectionGroup";
	/** [Write] shield:UpdateSubscription */
	static readonly UPDATE_SUBSCRIPTION = "shield:UpdateSubscription";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ShieldActions.DESCRIBE_ATTACK,
		ShieldActions.DESCRIBE_ATTACK_CONTRIBUTORS,
		ShieldActions.DESCRIBE_ATTACK_STATISTICS,
		ShieldActions.DESCRIBE_DRT_ACCESS,
		ShieldActions.DESCRIBE_EMERGENCY_CONTACT_SETTINGS,
		ShieldActions.DESCRIBE_PROTECTION,
		ShieldActions.DESCRIBE_PROTECTION_GROUP,
		ShieldActions.DESCRIBE_SUBSCRIPTION,
		ShieldActions.GET_GLOBAL_THREAT_DATA,
		ShieldActions.GET_SUBSCRIPTION_STATE,
		ShieldActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ShieldActions.ASSOCIATE_DRT_LOG_BUCKET,
		ShieldActions.ASSOCIATE_DRT_ROLE,
		ShieldActions.ASSOCIATE_HEALTH_CHECK,
		ShieldActions.ASSOCIATE_PROACTIVE_ENGAGEMENT_DETAILS,
		ShieldActions.CREATE_PROTECTION,
		ShieldActions.CREATE_PROTECTION_GROUP,
		ShieldActions.CREATE_SUBSCRIPTION,
		ShieldActions.DELETE_PROTECTION,
		ShieldActions.DELETE_PROTECTION_GROUP,
		ShieldActions.DELETE_SUBSCRIPTION,
		ShieldActions.DISABLE_APPLICATION_LAYER_AUTOMATIC_RESPONSE,
		ShieldActions.DISABLE_PROACTIVE_ENGAGEMENT,
		ShieldActions.DISASSOCIATE_DRT_LOG_BUCKET,
		ShieldActions.DISASSOCIATE_DRT_ROLE,
		ShieldActions.DISASSOCIATE_HEALTH_CHECK,
		ShieldActions.ENABLE_APPLICATION_LAYER_AUTOMATIC_RESPONSE,
		ShieldActions.ENABLE_PROACTIVE_ENGAGEMENT,
		ShieldActions.UPDATE_APPLICATION_LAYER_AUTOMATIC_RESPONSE,
		ShieldActions.UPDATE_EMERGENCY_CONTACT_SETTINGS,
		ShieldActions.UPDATE_PROTECTION_GROUP,
		ShieldActions.UPDATE_SUBSCRIPTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ShieldActions.LIST_ATTACKS,
		ShieldActions.LIST_MITIGATIONS,
		ShieldActions.LIST_PROTECTION_GROUPS,
		ShieldActions.LIST_PROTECTIONS,
		ShieldActions.LIST_RESOURCES_IN_PROTECTION_GROUP,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ShieldActions.TAG_RESOURCE,
		ShieldActions.UNTAG_RESOURCE,
	];
}

const AttackArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):shield::(?<account>[^:]*):attack/(?<id>[^:/?]+)$",
);
const ProtectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):shield::(?<account>[^:]*):protection/(?<id>[^:/?]+)$",
);
const ProtectionGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):shield::(?<account>[^:]*):protection-group/(?<id>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for shield resources.
 */
export class ShieldResources {
	/**
	 * Builds an ARN for the attack resource.
	 */
	static attack(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:shield::${props.account ?? "*"}:attack/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the attack resource.
	 */
	static isValidAttackArn(arn: string): boolean {
		return AttackArnRegex.test(arn);
	}

	/**
	 * Parses a attack ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAttackArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = AttackArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid attack ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the protection resource.
	 */
	static protection(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:shield::${props.account ?? "*"}:protection/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the protection resource.
	 */
	static isValidProtectionArn(arn: string): boolean {
		return ProtectionArnRegex.test(arn);
	}

	/**
	 * Parses a protection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProtectionArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = ProtectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid protection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the protection-group resource.
	 */
	static protectionGroup(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:shield::${props.account ?? "*"}:protection-group/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the protection-group resource.
	 */
	static isValidProtectionGroupArn(arn: string): boolean {
		return ProtectionGroupArnRegex.test(arn);
	}

	/**
	 * Parses a protection-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProtectionGroupArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = ProtectionGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid protection-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}
}

/**
 * API operation to required IAM actions mapping for shield.
 */
export class ShieldOperations {
	/** IAM actions required for the AssociateDRTLogBucket API call. */
	static readonly ASSOCIATE_DRT_LOG_BUCKET: string[] = [
		"shield:AssociateDRTLogBucket",
	];
	/** IAM actions required for the AssociateDRTRole API call. */
	static readonly ASSOCIATE_DRT_ROLE: string[] = [
		"shield:AssociateDRTRole",
		"iam:PassRole",
	];
	/** IAM actions required for the AssociateHealthCheck API call. */
	static readonly ASSOCIATE_HEALTH_CHECK: string[] = [
		"shield:AssociateHealthCheck",
	];
	/** IAM actions required for the AssociateProactiveEngagementDetails API call. */
	static readonly ASSOCIATE_PROACTIVE_ENGAGEMENT_DETAILS: string[] = [
		"shield:AssociateProactiveEngagementDetails",
	];
	/** IAM actions required for the CreateProtection API call. */
	static readonly CREATE_PROTECTION: string[] = [
		"shield:CreateProtection",
		"shield:TagResource",
	];
	/** IAM actions required for the CreateProtectionGroup API call. */
	static readonly CREATE_PROTECTION_GROUP: string[] = [
		"shield:CreateProtectionGroup",
		"shield:TagResource",
	];
	/** IAM actions required for the CreateSubscription API call. */
	static readonly CREATE_SUBSCRIPTION: string[] = ["shield:CreateSubscription"];
	/** IAM actions required for the DeleteProtection API call. */
	static readonly DELETE_PROTECTION: string[] = ["shield:DeleteProtection"];
	/** IAM actions required for the DeleteProtectionGroup API call. */
	static readonly DELETE_PROTECTION_GROUP: string[] = [
		"shield:DeleteProtectionGroup",
	];
	/** IAM actions required for the DeleteSubscription API call. */
	static readonly DELETE_SUBSCRIPTION: string[] = ["shield:DeleteSubscription"];
	/** IAM actions required for the DescribeAttack API call. */
	static readonly DESCRIBE_ATTACK: string[] = [
		"shield:DescribeAttack",
		"shield:DescribeProtectionGroup",
	];
	/** IAM actions required for the DescribeAttackStatistics API call. */
	static readonly DESCRIBE_ATTACK_STATISTICS: string[] = [
		"shield:DescribeAttackStatistics",
	];
	/** IAM actions required for the DescribeDRTAccess API call. */
	static readonly DESCRIBE_DRT_ACCESS: string[] = ["shield:DescribeDRTAccess"];
	/** IAM actions required for the DescribeEmergencyContactSettings API call. */
	static readonly DESCRIBE_EMERGENCY_CONTACT_SETTINGS: string[] = [
		"shield:DescribeEmergencyContactSettings",
	];
	/** IAM actions required for the DescribeProtection API call. */
	static readonly DESCRIBE_PROTECTION: string[] = ["shield:DescribeProtection"];
	/** IAM actions required for the DescribeProtectionGroup API call. */
	static readonly DESCRIBE_PROTECTION_GROUP: string[] = [
		"shield:DescribeProtectionGroup",
	];
	/** IAM actions required for the DescribeSubscription API call. */
	static readonly DESCRIBE_SUBSCRIPTION: string[] = [
		"shield:DescribeSubscription",
	];
	/** IAM actions required for the DisableApplicationLayerAutomaticResponse API call. */
	static readonly DISABLE_APPLICATION_LAYER_AUTOMATIC_RESPONSE: string[] = [
		"shield:DisableApplicationLayerAutomaticResponse",
	];
	/** IAM actions required for the DisableProactiveEngagement API call. */
	static readonly DISABLE_PROACTIVE_ENGAGEMENT: string[] = [
		"shield:DisableProactiveEngagement",
	];
	/** IAM actions required for the DisassociateDRTLogBucket API call. */
	static readonly DISASSOCIATE_DRT_LOG_BUCKET: string[] = [
		"shield:DisassociateDRTLogBucket",
	];
	/** IAM actions required for the DisassociateDRTRole API call. */
	static readonly DISASSOCIATE_DRT_ROLE: string[] = [
		"shield:DisassociateDRTRole",
	];
	/** IAM actions required for the DisassociateHealthCheck API call. */
	static readonly DISASSOCIATE_HEALTH_CHECK: string[] = [
		"shield:DisassociateHealthCheck",
	];
	/** IAM actions required for the EnableApplicationLayerAutomaticResponse API call. */
	static readonly ENABLE_APPLICATION_LAYER_AUTOMATIC_RESPONSE: string[] = [
		"shield:EnableApplicationLayerAutomaticResponse",
	];
	/** IAM actions required for the EnableProactiveEngagement API call. */
	static readonly ENABLE_PROACTIVE_ENGAGEMENT: string[] = [
		"shield:EnableProactiveEngagement",
	];
	/** IAM actions required for the GetSubscriptionState API call. */
	static readonly GET_SUBSCRIPTION_STATE: string[] = [
		"shield:GetSubscriptionState",
	];
	/** IAM actions required for the ListAttacks API call. */
	static readonly LIST_ATTACKS: string[] = ["shield:ListAttacks"];
	/** IAM actions required for the ListProtectionGroups API call. */
	static readonly LIST_PROTECTION_GROUPS: string[] = [
		"shield:ListProtectionGroups",
	];
	/** IAM actions required for the ListProtections API call. */
	static readonly LIST_PROTECTIONS: string[] = ["shield:ListProtections"];
	/** IAM actions required for the ListResourcesInProtectionGroup API call. */
	static readonly LIST_RESOURCES_IN_PROTECTION_GROUP: string[] = [
		"shield:ListResourcesInProtectionGroup",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"shield:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["shield:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["shield:UntagResource"];
	/** IAM actions required for the UpdateApplicationLayerAutomaticResponse API call. */
	static readonly UPDATE_APPLICATION_LAYER_AUTOMATIC_RESPONSE: string[] = [
		"shield:UpdateApplicationLayerAutomaticResponse",
	];
	/** IAM actions required for the UpdateEmergencyContactSettings API call. */
	static readonly UPDATE_EMERGENCY_CONTACT_SETTINGS: string[] = [
		"shield:UpdateEmergencyContactSettings",
	];
	/** IAM actions required for the UpdateProtectionGroup API call. */
	static readonly UPDATE_PROTECTION_GROUP: string[] = [
		"shield:UpdateProtectionGroup",
	];
	/** IAM actions required for the UpdateSubscription API call. */
	static readonly UPDATE_SUBSCRIPTION: string[] = ["shield:UpdateSubscription"];
}

/**
 * Condition key constants and builders for shield.
 */
export class ShieldConditions {
	/** Condition keys applicable to the AssociateHealthCheck action. */
	static readonly ASSOCIATE_HEALTH_CHECK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateProtection action. */
	static readonly CREATE_PROTECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProtectionGroup action. */
	static readonly CREATE_PROTECTION_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteProtection action. */
	static readonly DELETE_PROTECTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteProtectionGroup action. */
	static readonly DELETE_PROTECTION_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeProtection action. */
	static readonly DESCRIBE_PROTECTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeProtectionGroup action. */
	static readonly DESCRIBE_PROTECTION_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateHealthCheck action. */
	static readonly DISASSOCIATE_HEALTH_CHECK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateProtectionGroup action. */
	static readonly UPDATE_PROTECTION_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
