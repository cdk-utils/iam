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
	/** [PermissionManagement] health:DisableHealthServiceAccessForOrganization */
	static readonly DisableHealthServiceAccessForOrganization =
		"health:DisableHealthServiceAccessForOrganization";
	/** [PermissionManagement] health:EnableHealthServiceAccessForOrganization */
	static readonly EnableHealthServiceAccessForOrganization =
		"health:EnableHealthServiceAccessForOrganization";

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
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
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
	/** IAM actions required for the DisableHealthServiceAccessForOrganization API call. */
	static readonly DisableHealthServiceAccessForOrganization: string[] = [
		"organizations:DisableAWSServiceAccess",
		"health:DisableHealthServiceAccessForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the EnableHealthServiceAccessForOrganization API call. */
	static readonly EnableHealthServiceAccessForOrganization: string[] = [
		"iam:CreateServiceLinkedRole",
		"organizations:EnableAWSServiceAccess",
		"health:EnableHealthServiceAccessForOrganization",
		"organizations:ListAccounts",
	];
}

/**
 * Condition key constants and builders for health.
 */
export class HealthConditions {
	/** Condition keys applicable to the DescribeAffectedEntities action. */
	static readonly DescribeAffectedEntitiesConditionKeys: string[] = [
		"health:eventTypeCode",
		"health:service",
	];
	/** Condition keys applicable to the DescribeEventDetails action. */
	static readonly DescribeEventDetailsConditionKeys: string[] = [
		"health:eventTypeCode",
		"health:service",
	];

	/** Condition key: health:eventTypeCode (String) */
	static readonly EVENT_TYPE_CODE = "health:eventTypeCode";
	/** Condition key: health:service (String) */
	static readonly SERVICE = "health:service";

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
