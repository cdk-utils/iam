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
	static readonly DESCRIBE_AFFECTED_ACCOUNTS_FOR_ORGANIZATION =
		"health:DescribeAffectedAccountsForOrganization";
	/** [Read] health:DescribeAffectedEntities */
	static readonly DESCRIBE_AFFECTED_ENTITIES =
		"health:DescribeAffectedEntities";
	/** [Read] health:DescribeAffectedEntitiesForOrganization */
	static readonly DESCRIBE_AFFECTED_ENTITIES_FOR_ORGANIZATION =
		"health:DescribeAffectedEntitiesForOrganization";
	/** [Read] health:DescribeEntityAggregates */
	static readonly DESCRIBE_ENTITY_AGGREGATES =
		"health:DescribeEntityAggregates";
	/** [Read] health:DescribeEntityAggregatesForOrganization */
	static readonly DESCRIBE_ENTITY_AGGREGATES_FOR_ORGANIZATION =
		"health:DescribeEntityAggregatesForOrganization";
	/** [Read] health:DescribeEventAggregates */
	static readonly DESCRIBE_EVENT_AGGREGATES = "health:DescribeEventAggregates";
	/** [Read] health:DescribeEventDetails */
	static readonly DESCRIBE_EVENT_DETAILS = "health:DescribeEventDetails";
	/** [Read] health:DescribeEventDetailsForOrganization */
	static readonly DESCRIBE_EVENT_DETAILS_FOR_ORGANIZATION =
		"health:DescribeEventDetailsForOrganization";
	/** [Read] health:DescribeEventTypes */
	static readonly DESCRIBE_EVENT_TYPES = "health:DescribeEventTypes";
	/** [Read] health:DescribeEvents */
	static readonly DESCRIBE_EVENTS = "health:DescribeEvents";
	/** [Read] health:DescribeEventsForOrganization */
	static readonly DESCRIBE_EVENTS_FOR_ORGANIZATION =
		"health:DescribeEventsForOrganization";
	/** [Read] health:DescribeHealthServiceStatusForOrganization */
	static readonly DESCRIBE_HEALTH_SERVICE_STATUS_FOR_ORGANIZATION =
		"health:DescribeHealthServiceStatusForOrganization";
	/** [PermissionManagement] health:DisableHealthServiceAccessForOrganization */
	static readonly DISABLE_HEALTH_SERVICE_ACCESS_FOR_ORGANIZATION =
		"health:DisableHealthServiceAccessForOrganization";
	/** [PermissionManagement] health:EnableHealthServiceAccessForOrganization */
	static readonly ENABLE_HEALTH_SERVICE_ACCESS_FOR_ORGANIZATION =
		"health:EnableHealthServiceAccessForOrganization";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		HealthActions.DESCRIBE_AFFECTED_ACCOUNTS_FOR_ORGANIZATION,
		HealthActions.DESCRIBE_AFFECTED_ENTITIES,
		HealthActions.DESCRIBE_AFFECTED_ENTITIES_FOR_ORGANIZATION,
		HealthActions.DESCRIBE_ENTITY_AGGREGATES,
		HealthActions.DESCRIBE_ENTITY_AGGREGATES_FOR_ORGANIZATION,
		HealthActions.DESCRIBE_EVENT_AGGREGATES,
		HealthActions.DESCRIBE_EVENT_DETAILS,
		HealthActions.DESCRIBE_EVENT_DETAILS_FOR_ORGANIZATION,
		HealthActions.DESCRIBE_EVENT_TYPES,
		HealthActions.DESCRIBE_EVENTS,
		HealthActions.DESCRIBE_EVENTS_FOR_ORGANIZATION,
		HealthActions.DESCRIBE_HEALTH_SERVICE_STATUS_FOR_ORGANIZATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		HealthActions.DISABLE_HEALTH_SERVICE_ACCESS_FOR_ORGANIZATION,
		HealthActions.ENABLE_HEALTH_SERVICE_ACCESS_FOR_ORGANIZATION,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const EventArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):health:.*::event/(?<service>[^:/?]+)/(?<eventTypeCode>[^:/?]+)/.*$",
);

/**
 * ARN builders, validators, and parsers for health resources.
 */
export class HealthResources {
	/**
	 * Builds an ARN for the event resource.
	 */
	static event(props: {
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
	}): string {
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
	static parseEventArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		service: string;
		eventTypeCode: string;
	} {
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
	static readonly DESCRIBE_AFFECTED_ACCOUNTS_FOR_ORGANIZATION: string[] = [
		"health:DescribeAffectedAccountsForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeAffectedEntities API call. */
	static readonly DESCRIBE_AFFECTED_ENTITIES: string[] = [
		"health:DescribeAffectedEntities",
	];
	/** IAM actions required for the DescribeAffectedEntitiesForOrganization API call. */
	static readonly DESCRIBE_AFFECTED_ENTITIES_FOR_ORGANIZATION: string[] = [
		"health:DescribeAffectedEntitiesForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeEntityAggregates API call. */
	static readonly DESCRIBE_ENTITY_AGGREGATES: string[] = [
		"health:DescribeEntityAggregates",
	];
	/** IAM actions required for the DescribeEntityAggregatesForOrganization API call. */
	static readonly DESCRIBE_ENTITY_AGGREGATES_FOR_ORGANIZATION: string[] = [
		"health:DescribeEntityAggregatesForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeEventAggregates API call. */
	static readonly DESCRIBE_EVENT_AGGREGATES: string[] = [
		"health:DescribeEventAggregates",
	];
	/** IAM actions required for the DescribeEventDetails API call. */
	static readonly DESCRIBE_EVENT_DETAILS: string[] = [
		"health:DescribeEventDetails",
	];
	/** IAM actions required for the DescribeEventDetailsForOrganization API call. */
	static readonly DESCRIBE_EVENT_DETAILS_FOR_ORGANIZATION: string[] = [
		"health:DescribeEventDetailsForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeEventTypes API call. */
	static readonly DESCRIBE_EVENT_TYPES: string[] = [
		"health:DescribeEventTypes",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DESCRIBE_EVENTS: string[] = ["health:DescribeEvents"];
	/** IAM actions required for the DescribeEventsForOrganization API call. */
	static readonly DESCRIBE_EVENTS_FOR_ORGANIZATION: string[] = [
		"health:DescribeEventsForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DescribeHealthServiceStatusForOrganization API call. */
	static readonly DESCRIBE_HEALTH_SERVICE_STATUS_FOR_ORGANIZATION: string[] = [
		"health:DescribeHealthServiceStatusForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the DisableHealthServiceAccessForOrganization API call. */
	static readonly DISABLE_HEALTH_SERVICE_ACCESS_FOR_ORGANIZATION: string[] = [
		"organizations:DisableAWSServiceAccess",
		"health:DisableHealthServiceAccessForOrganization",
		"organizations:ListAccounts",
	];
	/** IAM actions required for the EnableHealthServiceAccessForOrganization API call. */
	static readonly ENABLE_HEALTH_SERVICE_ACCESS_FOR_ORGANIZATION: string[] = [
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
	static readonly DESCRIBE_AFFECTED_ENTITIES_CONDITION_KEYS: string[] = [
		"health:eventTypeCode",
		"health:service",
	];
	/** Condition keys applicable to the DescribeEventDetails action. */
	static readonly DESCRIBE_EVENT_DETAILS_CONDITION_KEYS: string[] = [
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
