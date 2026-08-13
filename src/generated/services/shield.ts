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
	static readonly AssociateDRTLogBucket = "shield:AssociateDRTLogBucket";
	/** [Write] shield:AssociateDRTRole */
	static readonly AssociateDRTRole = "shield:AssociateDRTRole";
	/** [Write] shield:AssociateHealthCheck */
	static readonly AssociateHealthCheck = "shield:AssociateHealthCheck";
	/** [Write] shield:AssociateProactiveEngagementDetails */
	static readonly AssociateProactiveEngagementDetails =
		"shield:AssociateProactiveEngagementDetails";
	/** [Write] shield:CreateProtection */
	static readonly CreateProtection = "shield:CreateProtection";
	/** [Write] shield:CreateProtectionGroup */
	static readonly CreateProtectionGroup = "shield:CreateProtectionGroup";
	/** [Write] shield:CreateSubscription */
	static readonly CreateSubscription = "shield:CreateSubscription";
	/** [Write] shield:DeleteProtection */
	static readonly DeleteProtection = "shield:DeleteProtection";
	/** [Write] shield:DeleteProtectionGroup */
	static readonly DeleteProtectionGroup = "shield:DeleteProtectionGroup";
	/** [Write] shield:DeleteSubscription */
	static readonly DeleteSubscription = "shield:DeleteSubscription";
	/** [Read] shield:DescribeAttack */
	static readonly DescribeAttack = "shield:DescribeAttack";
	/** [Read] shield:DescribeAttackContributors */
	static readonly DescribeAttackContributors =
		"shield:DescribeAttackContributors";
	/** [Read] shield:DescribeAttackStatistics */
	static readonly DescribeAttackStatistics = "shield:DescribeAttackStatistics";
	/** [Read] shield:DescribeDRTAccess */
	static readonly DescribeDRTAccess = "shield:DescribeDRTAccess";
	/** [Read] shield:DescribeEmergencyContactSettings */
	static readonly DescribeEmergencyContactSettings =
		"shield:DescribeEmergencyContactSettings";
	/** [Read] shield:DescribeProtection */
	static readonly DescribeProtection = "shield:DescribeProtection";
	/** [Read] shield:DescribeProtectionGroup */
	static readonly DescribeProtectionGroup = "shield:DescribeProtectionGroup";
	/** [Read] shield:DescribeSubscription */
	static readonly DescribeSubscription = "shield:DescribeSubscription";
	/** [Write] shield:DisableApplicationLayerAutomaticResponse */
	static readonly DisableApplicationLayerAutomaticResponse =
		"shield:DisableApplicationLayerAutomaticResponse";
	/** [Write] shield:DisableProactiveEngagement */
	static readonly DisableProactiveEngagement =
		"shield:DisableProactiveEngagement";
	/** [Write] shield:DisassociateDRTLogBucket */
	static readonly DisassociateDRTLogBucket = "shield:DisassociateDRTLogBucket";
	/** [Write] shield:DisassociateDRTRole */
	static readonly DisassociateDRTRole = "shield:DisassociateDRTRole";
	/** [Write] shield:DisassociateHealthCheck */
	static readonly DisassociateHealthCheck = "shield:DisassociateHealthCheck";
	/** [Write] shield:EnableApplicationLayerAutomaticResponse */
	static readonly EnableApplicationLayerAutomaticResponse =
		"shield:EnableApplicationLayerAutomaticResponse";
	/** [Write] shield:EnableProactiveEngagement */
	static readonly EnableProactiveEngagement =
		"shield:EnableProactiveEngagement";
	/** [Read] shield:GetGlobalThreatData */
	static readonly actionGetGlobalThreatData = "shield:GetGlobalThreatData";
	/** [Read] shield:GetSubscriptionState */
	static readonly actionGetSubscriptionState = "shield:GetSubscriptionState";
	/** [List] shield:ListAttacks */
	static readonly ListAttacks = "shield:ListAttacks";
	/** [List] shield:ListMitigations */
	static readonly ListMitigations = "shield:ListMitigations";
	/** [List] shield:ListProtectionGroups */
	static readonly ListProtectionGroups = "shield:ListProtectionGroups";
	/** [List] shield:ListProtections */
	static readonly ListProtections = "shield:ListProtections";
	/** [List] shield:ListResourcesInProtectionGroup */
	static readonly ListResourcesInProtectionGroup =
		"shield:ListResourcesInProtectionGroup";
	/** [Read] shield:ListTagsForResource */
	static readonly ListTagsForResource = "shield:ListTagsForResource";
	/** [Tagging] shield:TagResource */
	static readonly TagResource = "shield:TagResource";
	/** [Tagging] shield:UntagResource */
	static readonly UntagResource = "shield:UntagResource";
	/** [Write] shield:UpdateApplicationLayerAutomaticResponse */
	static readonly UpdateApplicationLayerAutomaticResponse =
		"shield:UpdateApplicationLayerAutomaticResponse";
	/** [Write] shield:UpdateEmergencyContactSettings */
	static readonly UpdateEmergencyContactSettings =
		"shield:UpdateEmergencyContactSettings";
	/** [Write] shield:UpdateProtectionGroup */
	static readonly UpdateProtectionGroup = "shield:UpdateProtectionGroup";
	/** [Write] shield:UpdateSubscription */
	static readonly UpdateSubscription = "shield:UpdateSubscription";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ShieldActions.DescribeAttack,
		ShieldActions.DescribeAttackContributors,
		ShieldActions.DescribeAttackStatistics,
		ShieldActions.DescribeDRTAccess,
		ShieldActions.DescribeEmergencyContactSettings,
		ShieldActions.DescribeProtection,
		ShieldActions.DescribeProtectionGroup,
		ShieldActions.DescribeSubscription,
		ShieldActions.actionGetGlobalThreatData,
		ShieldActions.actionGetSubscriptionState,
		ShieldActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ShieldActions.AssociateDRTLogBucket,
		ShieldActions.AssociateDRTRole,
		ShieldActions.AssociateHealthCheck,
		ShieldActions.AssociateProactiveEngagementDetails,
		ShieldActions.CreateProtection,
		ShieldActions.CreateProtectionGroup,
		ShieldActions.CreateSubscription,
		ShieldActions.DeleteProtection,
		ShieldActions.DeleteProtectionGroup,
		ShieldActions.DeleteSubscription,
		ShieldActions.DisableApplicationLayerAutomaticResponse,
		ShieldActions.DisableProactiveEngagement,
		ShieldActions.DisassociateDRTLogBucket,
		ShieldActions.DisassociateDRTRole,
		ShieldActions.DisassociateHealthCheck,
		ShieldActions.EnableApplicationLayerAutomaticResponse,
		ShieldActions.EnableProactiveEngagement,
		ShieldActions.UpdateApplicationLayerAutomaticResponse,
		ShieldActions.UpdateEmergencyContactSettings,
		ShieldActions.UpdateProtectionGroup,
		ShieldActions.UpdateSubscription,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ShieldActions.ListAttacks,
		ShieldActions.ListMitigations,
		ShieldActions.ListProtectionGroups,
		ShieldActions.ListProtections,
		ShieldActions.ListResourcesInProtectionGroup,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ShieldActions.TagResource,
		ShieldActions.UntagResource,
	];
}

/**
 * Properties for building a attack ARN.
 */
export interface ShieldAttackArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a attack ARN.
 */
export interface ShieldAttackArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a protection ARN.
 */
export interface ShieldProtectionArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a protection ARN.
 */
export interface ShieldProtectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a protection-group ARN.
 */
export interface ShieldProtectionGroupArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a protection-group ARN.
 */
export interface ShieldProtectionGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

const AttackArnRegex =
	/^arn:(?<partition>[^:]+):shield::(?<account>[^:]*):attack\/(?<id>[^:/?]+)$/;
const ProtectionArnRegex =
	/^arn:(?<partition>[^:]+):shield::(?<account>[^:]*):protection\/(?<id>[^:/?]+)$/;
const ProtectionGroupArnRegex =
	/^arn:(?<partition>[^:]+):shield::(?<account>[^:]*):protection-group\/(?<id>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for shield resources.
 */
export class ShieldResources {
	/**
	 * Builds an ARN for the attack resource.
	 */
	static attack(props: ShieldAttackArnProps): string {
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
	static parseAttackArn(arn: string): ShieldAttackArnComponents {
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
	static protection(props: ShieldProtectionArnProps): string {
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
	static parseProtectionArn(arn: string): ShieldProtectionArnComponents {
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
	static protectionGroup(props: ShieldProtectionGroupArnProps): string {
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
	static parseProtectionGroupArn(
		arn: string,
	): ShieldProtectionGroupArnComponents {
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
	static readonly AssociateDRTLogBucket: string[] = [
		"shield:AssociateDRTLogBucket",
	];
	/** IAM actions required for the AssociateDRTRole API call. */
	static readonly AssociateDRTRole: string[] = [
		"shield:AssociateDRTRole",
		"iam:PassRole",
	];
	/** IAM actions required for the AssociateHealthCheck API call. */
	static readonly AssociateHealthCheck: string[] = [
		"shield:AssociateHealthCheck",
	];
	/** IAM actions required for the AssociateProactiveEngagementDetails API call. */
	static readonly AssociateProactiveEngagementDetails: string[] = [
		"shield:AssociateProactiveEngagementDetails",
	];
	/** IAM actions required for the CreateProtection API call. */
	static readonly CreateProtection: string[] = [
		"shield:CreateProtection",
		"shield:TagResource",
	];
	/** IAM actions required for the CreateProtectionGroup API call. */
	static readonly CreateProtectionGroup: string[] = [
		"shield:CreateProtectionGroup",
		"shield:TagResource",
	];
	/** IAM actions required for the CreateSubscription API call. */
	static readonly CreateSubscription: string[] = ["shield:CreateSubscription"];
	/** IAM actions required for the DeleteProtection API call. */
	static readonly DeleteProtection: string[] = ["shield:DeleteProtection"];
	/** IAM actions required for the DeleteProtectionGroup API call. */
	static readonly DeleteProtectionGroup: string[] = [
		"shield:DeleteProtectionGroup",
	];
	/** IAM actions required for the DeleteSubscription API call. */
	static readonly DeleteSubscription: string[] = ["shield:DeleteSubscription"];
	/** IAM actions required for the DescribeAttack API call. */
	static readonly DescribeAttack: string[] = [
		"shield:DescribeAttack",
		"shield:DescribeProtectionGroup",
	];
	/** IAM actions required for the DescribeAttackStatistics API call. */
	static readonly DescribeAttackStatistics: string[] = [
		"shield:DescribeAttackStatistics",
	];
	/** IAM actions required for the DescribeDRTAccess API call. */
	static readonly DescribeDRTAccess: string[] = ["shield:DescribeDRTAccess"];
	/** IAM actions required for the DescribeEmergencyContactSettings API call. */
	static readonly DescribeEmergencyContactSettings: string[] = [
		"shield:DescribeEmergencyContactSettings",
	];
	/** IAM actions required for the DescribeProtection API call. */
	static readonly DescribeProtection: string[] = ["shield:DescribeProtection"];
	/** IAM actions required for the DescribeProtectionGroup API call. */
	static readonly DescribeProtectionGroup: string[] = [
		"shield:DescribeProtectionGroup",
	];
	/** IAM actions required for the DescribeSubscription API call. */
	static readonly DescribeSubscription: string[] = [
		"shield:DescribeSubscription",
	];
	/** IAM actions required for the DisableApplicationLayerAutomaticResponse API call. */
	static readonly DisableApplicationLayerAutomaticResponse: string[] = [
		"shield:DisableApplicationLayerAutomaticResponse",
	];
	/** IAM actions required for the DisableProactiveEngagement API call. */
	static readonly DisableProactiveEngagement: string[] = [
		"shield:DisableProactiveEngagement",
	];
	/** IAM actions required for the DisassociateDRTLogBucket API call. */
	static readonly DisassociateDRTLogBucket: string[] = [
		"shield:DisassociateDRTLogBucket",
	];
	/** IAM actions required for the DisassociateDRTRole API call. */
	static readonly DisassociateDRTRole: string[] = [
		"shield:DisassociateDRTRole",
	];
	/** IAM actions required for the DisassociateHealthCheck API call. */
	static readonly DisassociateHealthCheck: string[] = [
		"shield:DisassociateHealthCheck",
	];
	/** IAM actions required for the EnableApplicationLayerAutomaticResponse API call. */
	static readonly EnableApplicationLayerAutomaticResponse: string[] = [
		"shield:EnableApplicationLayerAutomaticResponse",
	];
	/** IAM actions required for the EnableProactiveEngagement API call. */
	static readonly EnableProactiveEngagement: string[] = [
		"shield:EnableProactiveEngagement",
	];
	/** IAM actions required for the GetSubscriptionState API call. */
	static readonly opGetSubscriptionState: string[] = [
		"shield:GetSubscriptionState",
	];
	/** IAM actions required for the ListAttacks API call. */
	static readonly ListAttacks: string[] = ["shield:ListAttacks"];
	/** IAM actions required for the ListProtectionGroups API call. */
	static readonly ListProtectionGroups: string[] = [
		"shield:ListProtectionGroups",
	];
	/** IAM actions required for the ListProtections API call. */
	static readonly ListProtections: string[] = ["shield:ListProtections"];
	/** IAM actions required for the ListResourcesInProtectionGroup API call. */
	static readonly ListResourcesInProtectionGroup: string[] = [
		"shield:ListResourcesInProtectionGroup",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"shield:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["shield:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["shield:UntagResource"];
	/** IAM actions required for the UpdateApplicationLayerAutomaticResponse API call. */
	static readonly UpdateApplicationLayerAutomaticResponse: string[] = [
		"shield:UpdateApplicationLayerAutomaticResponse",
	];
	/** IAM actions required for the UpdateEmergencyContactSettings API call. */
	static readonly UpdateEmergencyContactSettings: string[] = [
		"shield:UpdateEmergencyContactSettings",
	];
	/** IAM actions required for the UpdateProtectionGroup API call. */
	static readonly UpdateProtectionGroup: string[] = [
		"shield:UpdateProtectionGroup",
	];
	/** IAM actions required for the UpdateSubscription API call. */
	static readonly UpdateSubscription: string[] = ["shield:UpdateSubscription"];
}

/**
 * Condition key constants and builders for shield.
 */
export class ShieldConditions {
	/** Condition keys applicable to the AssociateHealthCheck action. */
	static readonly AssociateHealthCheckConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateProtection action. */
	static readonly CreateProtectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProtectionGroup action. */
	static readonly CreateProtectionGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteProtection action. */
	static readonly DeleteProtectionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteProtectionGroup action. */
	static readonly DeleteProtectionGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeProtection action. */
	static readonly DescribeProtectionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeProtectionGroup action. */
	static readonly DescribeProtectionGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateHealthCheck action. */
	static readonly DisassociateHealthCheckConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateProtectionGroup action. */
	static readonly UpdateProtectionGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
