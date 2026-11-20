// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/health.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the health service.
 */
export class HealthActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "health";

	/** [Write] health:ConfigureTags */
	static readonly ConfigureTags = "health:ConfigureTags";
	/** [Write] health:ConfigureTagsForOrganization */
	static readonly ConfigureTagsForOrganization =
		"health:ConfigureTagsForOrganization";
	/** [Read] health:DescribeAffectedAccountsForOrganization */
	static readonly DescribeAffectedAccountsForOrganization =
		"health:DescribeAffectedAccountsForOrganization";
	/** [Read] health:DescribeAffectedEntities */
	static readonly DescribeAffectedEntities = "health:DescribeAffectedEntities";
	/** [Read] health:DescribeAffectedEntitiesForOrganization */
	static readonly DescribeAffectedEntitiesForOrganization =
		"health:DescribeAffectedEntitiesForOrganization";
	/** [Read] health:DescribeEntityAggregates */
	static readonly DescribeEntityAggregates = "health:DescribeEntityAggregates";
	/** [Read] health:DescribeEntityAggregatesForOrganization */
	static readonly DescribeEntityAggregatesForOrganization =
		"health:DescribeEntityAggregatesForOrganization";
	/** [Read] health:DescribeEventAggregates */
	static readonly DescribeEventAggregates = "health:DescribeEventAggregates";
	/** [Read] health:DescribeEventDetails */
	static readonly DescribeEventDetails = "health:DescribeEventDetails";
	/** [Read] health:DescribeEventDetailsForOrganization */
	static readonly DescribeEventDetailsForOrganization =
		"health:DescribeEventDetailsForOrganization";
	/** [Read] health:DescribeEventTypes */
	static readonly DescribeEventTypes = "health:DescribeEventTypes";
	/** [Read] health:DescribeEvents */
	static readonly DescribeEvents = "health:DescribeEvents";
	/** [Read] health:DescribeEventsForOrganization */
	static readonly DescribeEventsForOrganization =
		"health:DescribeEventsForOrganization";
	/** [Read] health:DescribeHealthServiceStatusForOrganization */
	static readonly DescribeHealthServiceStatusForOrganization =
		"health:DescribeHealthServiceStatusForOrganization";
	/** [Read] health:DescribeTagKeys */
	static readonly DescribeTagKeys = "health:DescribeTagKeys";
	/** [Read] health:DescribeTagKeysForOrganization */
	static readonly DescribeTagKeysForOrganization =
		"health:DescribeTagKeysForOrganization";
	/** [Read] health:DescribeTags */
	static readonly DescribeTags = "health:DescribeTags";
	/** [Read] health:DescribeTagsForOrganization */
	static readonly DescribeTagsForOrganization =
		"health:DescribeTagsForOrganization";
	/** [Read] health:DescribeTagsOnboardingStatus */
	static readonly DescribeTagsOnboardingStatus =
		"health:DescribeTagsOnboardingStatus";
	/** [Read] health:DescribeTagsOnboardingStatusForOrganization */
	static readonly DescribeTagsOnboardingStatusForOrganization =
		"health:DescribeTagsOnboardingStatusForOrganization";
	/** [PermissionManagement] health:DisableHealthServiceAccessForOrganization */
	static readonly DisableHealthServiceAccessForOrganization =
		"health:DisableHealthServiceAccessForOrganization";
	/** [Write] health:DisableTags */
	static readonly DisableTags = "health:DisableTags";
	/** [Write] health:DisableTagsForOrganization */
	static readonly DisableTagsForOrganization =
		"health:DisableTagsForOrganization";
	/** [PermissionManagement] health:EnableHealthServiceAccessForOrganization */
	static readonly EnableHealthServiceAccessForOrganization =
		"health:EnableHealthServiceAccessForOrganization";
	/** [Write] health:EnableTags */
	static readonly EnableTags = "health:EnableTags";
	/** [Write] health:EnableTagsForOrganization */
	static readonly EnableTagsForOrganization =
		"health:EnableTagsForOrganization";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		HealthActions.DescribeAffectedAccountsForOrganization,
		HealthActions.DescribeAffectedEntities,
		HealthActions.DescribeAffectedEntitiesForOrganization,
		HealthActions.DescribeEntityAggregates,
		HealthActions.DescribeEntityAggregatesForOrganization,
		HealthActions.DescribeEventAggregates,
		HealthActions.DescribeEventDetails,
		HealthActions.DescribeEventDetailsForOrganization,
		HealthActions.DescribeEventTypes,
		HealthActions.DescribeEvents,
		HealthActions.DescribeEventsForOrganization,
		HealthActions.DescribeHealthServiceStatusForOrganization,
		HealthActions.DescribeTagKeys,
		HealthActions.DescribeTagKeysForOrganization,
		HealthActions.DescribeTags,
		HealthActions.DescribeTagsForOrganization,
		HealthActions.DescribeTagsOnboardingStatus,
		HealthActions.DescribeTagsOnboardingStatusForOrganization,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		HealthActions.ConfigureTags,
		HealthActions.ConfigureTagsForOrganization,
		HealthActions.DisableTags,
		HealthActions.DisableTagsForOrganization,
		HealthActions.EnableTags,
		HealthActions.EnableTagsForOrganization,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		HealthActions.DisableHealthServiceAccessForOrganization,
		HealthActions.EnableHealthServiceAccessForOrganization,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a event ARN.
 */
export interface HealthEventArnProps {
	/** The Service component of the ARN. */
	readonly service: string;
	/** The EventTypeCode component of the ARN. */
	readonly eventTypeCode: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a event ARN.
 */
export interface HealthEventArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Service component. */
	readonly service: string;
	/** The EventTypeCode component. */
	readonly eventTypeCode: string;
}

const EventArnRegex =
	/^arn:(?<partition>[^:]+):health:.*::event\/(?<service>[^:/?]+)\/(?<eventTypeCode>[^:/?]+)\/.*$/;

/**
 * ARN builders, validators, and parsers for health resources.
 */
export class HealthResources {
	/**
	 * Builds an ARN for the event resource.
	 */
	static event(props: HealthEventArnProps): string {
		return `arn:${props.partition ?? "aws"}:health:*::event/${props.service}/${props.eventTypeCode}/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the event resource.
	 */
	static isValidEventArn(arn: string): boolean {
		return EventArnRegex.test(arn);
	}

	/**
	 * Parses a event ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventArn(arn: string): HealthEventArnComponents {
		const match = EventArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid event ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			service: match.groups!.service,
			eventTypeCode: match.groups!.eventTypeCode,
		};
	}
}

/**
 * API operation to required IAM actions mapping for health.
 */
export class HealthOperations {
	/** IAM actions required for the ConfigureTags API call. */
	static readonly ConfigureTags: string[] = ["health:ConfigureTags"];
	/** IAM actions required for the ConfigureTagsForOrganization API call. */
	static readonly ConfigureTagsForOrganization: string[] = [
		"health:ConfigureTagsForOrganization",
	];
	/** IAM actions required for the DescribeAffectedAccountsForOrganization API call. */
	static readonly DescribeAffectedAccountsForOrganization: string[] = [
		"health:DescribeAffectedAccountsForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeAffectedEntities API call. */
	static readonly DescribeAffectedEntities: string[] = [
		"health:DescribeAffectedEntities",
	];
	/** IAM actions required for the DescribeAffectedEntitiesForOrganization API call. */
	static readonly DescribeAffectedEntitiesForOrganization: string[] = [
		"health:DescribeAffectedEntitiesForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeEntityAggregates API call. */
	static readonly DescribeEntityAggregates: string[] = [
		"health:DescribeEntityAggregates",
	];
	/** IAM actions required for the DescribeEntityAggregatesForOrganization API call. */
	static readonly DescribeEntityAggregatesForOrganization: string[] = [
		"health:DescribeEntityAggregatesForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeEventAggregates API call. */
	static readonly DescribeEventAggregates: string[] = [
		"health:DescribeEventAggregates",
	];
	/** IAM actions required for the DescribeEventDetails API call. */
	static readonly DescribeEventDetails: string[] = [
		"health:DescribeEventDetails",
	];
	/** IAM actions required for the DescribeEventDetailsForOrganization API call. */
	static readonly DescribeEventDetailsForOrganization: string[] = [
		"health:DescribeEventDetailsForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeEventTypes API call. */
	static readonly DescribeEventTypes: string[] = ["health:DescribeEventTypes"];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DescribeEvents: string[] = ["health:DescribeEvents"];
	/** IAM actions required for the DescribeEventsForOrganization API call. */
	static readonly DescribeEventsForOrganization: string[] = [
		"health:DescribeEventsForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeHealthServiceStatusForOrganization API call. */
	static readonly DescribeHealthServiceStatusForOrganization: string[] = [
		"health:DescribeHealthServiceStatusForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeServiceLifecycle API call. */
	static readonly DescribeServiceLifecycle: string[] = [];
	/** IAM actions required for the DescribeTagKeys API call. */
	static readonly DescribeTagKeys: string[] = ["health:DescribeTagKeys"];
	/** IAM actions required for the DescribeTagKeysForOrganization API call. */
	static readonly DescribeTagKeysForOrganization: string[] = [
		"health:DescribeTagKeysForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DescribeTags: string[] = ["health:DescribeTags"];
	/** IAM actions required for the DescribeTagsForOrganization API call. */
	static readonly DescribeTagsForOrganization: string[] = [
		"health:DescribeTagsForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeTagsOnboardingStatus API call. */
	static readonly DescribeTagsOnboardingStatus: string[] = [
		"health:DescribeTagsOnboardingStatus",
	];
	/** IAM actions required for the DescribeTagsOnboardingStatusForOrganization API call. */
	static readonly DescribeTagsOnboardingStatusForOrganization: string[] = [
		"health:DescribeTagsOnboardingStatusForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DisableHealthServiceAccessForOrganization API call. */
	static readonly DisableHealthServiceAccessForOrganization: string[] = [
		"organizations:DisableAWSServiceAccess",
		"health:DisableHealthServiceAccessForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DisableTags API call. */
	static readonly DisableTags: string[] = ["health:DisableTags"];
	/** IAM actions required for the DisableTagsForOrganization API call. */
	static readonly DisableTagsForOrganization: string[] = [
		"health:DisableTagsForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the EnableHealthServiceAccessForOrganization API call. */
	static readonly EnableHealthServiceAccessForOrganization: string[] = [
		"iam:CreateServiceLinkedRole",
		"organizations:EnableAWSServiceAccess",
		"health:EnableHealthServiceAccessForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the EnableTags API call. */
	static readonly EnableTags: string[] = ["health:EnableTags"];
	/** IAM actions required for the EnableTagsForOrganization API call. */
	static readonly EnableTagsForOrganization: string[] = [
		"health:EnableTagsForOrganization",
	];
}

/**
 * Condition key constants and builders for health.
 */
export class HealthConditions {
	/** Condition keys applicable to the ConfigureTags action. */
	static readonly ConfigureTagsConditionKeys: string[] = [
		"health:TagChannel",
		"health:TagKeys",
	];
	/** Condition keys applicable to the ConfigureTagsForOrganization action. */
	static readonly ConfigureTagsForOrganizationConditionKeys: string[] = [
		"health:TagChannel",
		"health:TagKeys",
	];
	/** Condition keys applicable to the DescribeAffectedAccountsForOrganization action. */
	static readonly DescribeAffectedAccountsForOrganizationConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the DescribeAffectedEntities action. */
	static readonly DescribeAffectedEntitiesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"health:eventTypeCode",
		"health:service",
	];
	/** Condition keys applicable to the DescribeAffectedEntitiesForOrganization action. */
	static readonly DescribeAffectedEntitiesForOrganizationConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the DescribeEntityAggregates action. */
	static readonly DescribeEntityAggregatesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeEntityAggregatesForOrganization action. */
	static readonly DescribeEntityAggregatesForOrganizationConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the DescribeEventAggregates action. */
	static readonly DescribeEventAggregatesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeEventDetails action. */
	static readonly DescribeEventDetailsConditionKeys: string[] = [
		"health:eventTypeCode",
		"health:service",
	];
	/** Condition keys applicable to the DescribeEvents action. */
	static readonly DescribeEventsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeEventsForOrganization action. */
	static readonly DescribeEventsForOrganizationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: health:TagChannel (ArrayOfString) */
	static readonly TAG_CHANNEL = "health:TagChannel";
	/** Condition key: health:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "health:TagKeys";
	/** Condition key: health:eventTypeCode (String) */
	static readonly EVENT_TYPE_CODE = "health:eventTypeCode";
	/** Condition key: health:service (String) */
	static readonly SERVICE = "health:service";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}

	/**
	 * Generates a condition block for `health:TagChannel`.
	 */
	static tagChannel(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "health:TagChannel": values } };
	}

	/**
	 * Generates a condition block for `health:eventTypeCode`.
	 */
	static eventTypeCode(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "health:eventTypeCode": value } };
	}

	/**
	 * Generates a condition block for `health:service`.
	 */
	static service(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "health:service": value } };
	}
}
