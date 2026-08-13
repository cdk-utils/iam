// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/app-integrations.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the app-integrations service.
 */
export class AppIntegrationsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "app-integrations";

	/** [Write] app-integrations:CreateApplication */
	static readonly CREATE_APPLICATION = "app-integrations:CreateApplication";
	/** [Write] app-integrations:CreateApplicationAssociation */
	static readonly CREATE_APPLICATION_ASSOCIATION =
		"app-integrations:CreateApplicationAssociation";
	/** [Write] app-integrations:CreateDataIntegration */
	static readonly CREATE_DATA_INTEGRATION =
		"app-integrations:CreateDataIntegration";
	/** [Write] app-integrations:CreateDataIntegrationAssociation */
	static readonly CREATE_DATA_INTEGRATION_ASSOCIATION =
		"app-integrations:CreateDataIntegrationAssociation";
	/** [Write] app-integrations:CreateDataIntegrationSchedule */
	static readonly CREATE_DATA_INTEGRATION_SCHEDULE =
		"app-integrations:CreateDataIntegrationSchedule";
	/** [Write] app-integrations:CreateEventIntegration */
	static readonly CREATE_EVENT_INTEGRATION =
		"app-integrations:CreateEventIntegration";
	/** [Write] app-integrations:CreateEventIntegrationAssociation */
	static readonly CREATE_EVENT_INTEGRATION_ASSOCIATION =
		"app-integrations:CreateEventIntegrationAssociation";
	/** [Write] app-integrations:DeleteApplication */
	static readonly DELETE_APPLICATION = "app-integrations:DeleteApplication";
	/** [Write] app-integrations:DeleteApplicationAssociation */
	static readonly DELETE_APPLICATION_ASSOCIATION =
		"app-integrations:DeleteApplicationAssociation";
	/** [Write] app-integrations:DeleteDataIntegration */
	static readonly DELETE_DATA_INTEGRATION =
		"app-integrations:DeleteDataIntegration";
	/** [Write] app-integrations:DeleteDataIntegrationAssociation */
	static readonly DELETE_DATA_INTEGRATION_ASSOCIATION =
		"app-integrations:DeleteDataIntegrationAssociation";
	/** [Write] app-integrations:DeleteEventIntegration */
	static readonly DELETE_EVENT_INTEGRATION =
		"app-integrations:DeleteEventIntegration";
	/** [Write] app-integrations:DeleteEventIntegrationAssociation */
	static readonly DELETE_EVENT_INTEGRATION_ASSOCIATION =
		"app-integrations:DeleteEventIntegrationAssociation";
	/** [Read] app-integrations:GetApplication */
	static readonly GET_APPLICATION = "app-integrations:GetApplication";
	/** [Read] app-integrations:GetDataIntegration */
	static readonly GET_DATA_INTEGRATION = "app-integrations:GetDataIntegration";
	/** [Read] app-integrations:GetDataIntegrationExecution */
	static readonly GET_DATA_INTEGRATION_EXECUTION =
		"app-integrations:GetDataIntegrationExecution";
	/** [Read] app-integrations:GetDataIntegrationSchedule */
	static readonly GET_DATA_INTEGRATION_SCHEDULE =
		"app-integrations:GetDataIntegrationSchedule";
	/** [Read] app-integrations:GetEventIntegration */
	static readonly GET_EVENT_INTEGRATION =
		"app-integrations:GetEventIntegration";
	/** [List] app-integrations:ListApplicationAssociations */
	static readonly LIST_APPLICATION_ASSOCIATIONS =
		"app-integrations:ListApplicationAssociations";
	/** [List] app-integrations:ListApplications */
	static readonly LIST_APPLICATIONS = "app-integrations:ListApplications";
	/** [List] app-integrations:ListDataIntegrationAssociations */
	static readonly LIST_DATA_INTEGRATION_ASSOCIATIONS =
		"app-integrations:ListDataIntegrationAssociations";
	/** [List] app-integrations:ListDataIntegrationExecutions */
	static readonly LIST_DATA_INTEGRATION_EXECUTIONS =
		"app-integrations:ListDataIntegrationExecutions";
	/** [List] app-integrations:ListDataIntegrationSchedules */
	static readonly LIST_DATA_INTEGRATION_SCHEDULES =
		"app-integrations:ListDataIntegrationSchedules";
	/** [List] app-integrations:ListDataIntegrations */
	static readonly LIST_DATA_INTEGRATIONS =
		"app-integrations:ListDataIntegrations";
	/** [Read] app-integrations:ListEventIntegrationAssociations */
	static readonly LIST_EVENT_INTEGRATION_ASSOCIATIONS =
		"app-integrations:ListEventIntegrationAssociations";
	/** [List] app-integrations:ListEventIntegrations */
	static readonly LIST_EVENT_INTEGRATIONS =
		"app-integrations:ListEventIntegrations";
	/** [Read] app-integrations:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"app-integrations:ListTagsForResource";
	/** [Write] app-integrations:StartDataIntegrationExecution */
	static readonly START_DATA_INTEGRATION_EXECUTION =
		"app-integrations:StartDataIntegrationExecution";
	/** [Tagging] app-integrations:TagResource */
	static readonly TAG_RESOURCE = "app-integrations:TagResource";
	/** [Tagging] app-integrations:UntagResource */
	static readonly UNTAG_RESOURCE = "app-integrations:UntagResource";
	/** [Write] app-integrations:UpdateApplication */
	static readonly UPDATE_APPLICATION = "app-integrations:UpdateApplication";
	/** [Write] app-integrations:UpdateDataIntegration */
	static readonly UPDATE_DATA_INTEGRATION =
		"app-integrations:UpdateDataIntegration";
	/** [Write] app-integrations:UpdateDataIntegrationAssociation */
	static readonly UPDATE_DATA_INTEGRATION_ASSOCIATION =
		"app-integrations:UpdateDataIntegrationAssociation";
	/** [Write] app-integrations:UpdateDataIntegrationSchedule */
	static readonly UPDATE_DATA_INTEGRATION_SCHEDULE =
		"app-integrations:UpdateDataIntegrationSchedule";
	/** [Write] app-integrations:UpdateEventIntegration */
	static readonly UPDATE_EVENT_INTEGRATION =
		"app-integrations:UpdateEventIntegration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AppIntegrationsActions.GET_APPLICATION,
		AppIntegrationsActions.GET_DATA_INTEGRATION,
		AppIntegrationsActions.GET_DATA_INTEGRATION_EXECUTION,
		AppIntegrationsActions.GET_DATA_INTEGRATION_SCHEDULE,
		AppIntegrationsActions.GET_EVENT_INTEGRATION,
		AppIntegrationsActions.LIST_EVENT_INTEGRATION_ASSOCIATIONS,
		AppIntegrationsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AppIntegrationsActions.CREATE_APPLICATION,
		AppIntegrationsActions.CREATE_APPLICATION_ASSOCIATION,
		AppIntegrationsActions.CREATE_DATA_INTEGRATION,
		AppIntegrationsActions.CREATE_DATA_INTEGRATION_ASSOCIATION,
		AppIntegrationsActions.CREATE_DATA_INTEGRATION_SCHEDULE,
		AppIntegrationsActions.CREATE_EVENT_INTEGRATION,
		AppIntegrationsActions.CREATE_EVENT_INTEGRATION_ASSOCIATION,
		AppIntegrationsActions.DELETE_APPLICATION,
		AppIntegrationsActions.DELETE_APPLICATION_ASSOCIATION,
		AppIntegrationsActions.DELETE_DATA_INTEGRATION,
		AppIntegrationsActions.DELETE_DATA_INTEGRATION_ASSOCIATION,
		AppIntegrationsActions.DELETE_EVENT_INTEGRATION,
		AppIntegrationsActions.DELETE_EVENT_INTEGRATION_ASSOCIATION,
		AppIntegrationsActions.START_DATA_INTEGRATION_EXECUTION,
		AppIntegrationsActions.UPDATE_APPLICATION,
		AppIntegrationsActions.UPDATE_DATA_INTEGRATION,
		AppIntegrationsActions.UPDATE_DATA_INTEGRATION_ASSOCIATION,
		AppIntegrationsActions.UPDATE_DATA_INTEGRATION_SCHEDULE,
		AppIntegrationsActions.UPDATE_EVENT_INTEGRATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AppIntegrationsActions.LIST_APPLICATION_ASSOCIATIONS,
		AppIntegrationsActions.LIST_APPLICATIONS,
		AppIntegrationsActions.LIST_DATA_INTEGRATION_ASSOCIATIONS,
		AppIntegrationsActions.LIST_DATA_INTEGRATION_EXECUTIONS,
		AppIntegrationsActions.LIST_DATA_INTEGRATION_SCHEDULES,
		AppIntegrationsActions.LIST_DATA_INTEGRATIONS,
		AppIntegrationsActions.LIST_EVENT_INTEGRATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AppIntegrationsActions.TAG_RESOURCE,
		AppIntegrationsActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):app-integrations:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)$",
);
const ApplicationAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):app-integrations:(?<region>[^:]*):(?<account>[^:]*):application-association/(?<applicationId>[^:/?]+)/(?<applicationAssociationId>[^:/?]+)$",
);
const DataIntegrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):app-integrations:(?<region>[^:]*):(?<account>[^:]*):data-integration/(?<dataIntegrationId>[^:/?]+)$",
);
const DataIntegrationAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):app-integrations:(?<region>[^:]*):(?<account>[^:]*):data-integration-association/(?<dataIntegrationId>[^:/?]+)/(?<resourceId>[^:/?]+)$",
);
const EventIntegrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):app-integrations:(?<region>[^:]*):(?<account>[^:]*):event-integration/(?<eventIntegrationName>[^:/?]+)$",
);
const EventIntegrationAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):app-integrations:(?<region>[^:]*):(?<account>[^:]*):event-integration-association/(?<eventIntegrationName>[^:/?]+)/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for app-integrations resources.
 */
export class AppIntegrationsResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:app-integrations:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
	} {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the application-association resource.
	 */
	static applicationAssociation(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** The ApplicationAssociationId component of the ARN. */
		readonly applicationAssociationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:app-integrations:${props.region ?? "*"}:${props.account ?? "*"}:application-association/${props.applicationId}/${props.applicationAssociationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application-association resource.
	 */
	static isValidApplicationAssociationArn(arn: string): boolean {
		return ApplicationAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a application-association ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		applicationAssociationId: string;
	} {
		const match = ApplicationAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application-association ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			applicationAssociationId: match.groups!.applicationAssociationId,
		};
	}

	/**
	 * Builds an ARN for the data-integration resource.
	 */
	static dataIntegration(props: {
		/** The DataIntegrationId component of the ARN. */
		readonly dataIntegrationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:app-integrations:${props.region ?? "*"}:${props.account ?? "*"}:data-integration/${props.dataIntegrationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-integration resource.
	 */
	static isValidDataIntegrationArn(arn: string): boolean {
		return DataIntegrationArnRegex.test(arn);
	}

	/**
	 * Parses a data-integration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataIntegrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataIntegrationId: string;
	} {
		const match = DataIntegrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-integration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataIntegrationId: match.groups!.dataIntegrationId,
		};
	}

	/**
	 * Builds an ARN for the data-integration-association resource.
	 */
	static dataIntegrationAssociation(props: {
		/** The DataIntegrationId component of the ARN. */
		readonly dataIntegrationId: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:app-integrations:${props.region ?? "*"}:${props.account ?? "*"}:data-integration-association/${props.dataIntegrationId}/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-integration-association resource.
	 */
	static isValidDataIntegrationAssociationArn(arn: string): boolean {
		return DataIntegrationAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a data-integration-association ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataIntegrationAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataIntegrationId: string;
		resourceId: string;
	} {
		const match = DataIntegrationAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-integration-association ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataIntegrationId: match.groups!.dataIntegrationId,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the event-integration resource.
	 */
	static eventIntegration(props: {
		/** The EventIntegrationName component of the ARN. */
		readonly eventIntegrationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:app-integrations:${props.region ?? "*"}:${props.account ?? "*"}:event-integration/${props.eventIntegrationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the event-integration resource.
	 */
	static isValidEventIntegrationArn(arn: string): boolean {
		return EventIntegrationArnRegex.test(arn);
	}

	/**
	 * Parses a event-integration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventIntegrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eventIntegrationName: string;
	} {
		const match = EventIntegrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid event-integration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eventIntegrationName: match.groups!.eventIntegrationName,
		};
	}

	/**
	 * Builds an ARN for the event-integration-association resource.
	 */
	static eventIntegrationAssociation(props: {
		/** The EventIntegrationName component of the ARN. */
		readonly eventIntegrationName: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:app-integrations:${props.region ?? "*"}:${props.account ?? "*"}:event-integration-association/${props.eventIntegrationName}/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the event-integration-association resource.
	 */
	static isValidEventIntegrationAssociationArn(arn: string): boolean {
		return EventIntegrationAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a event-integration-association ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventIntegrationAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eventIntegrationName: string;
		resourceId: string;
	} {
		const match = EventIntegrationAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid event-integration-association ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eventIntegrationName: match.groups!.eventIntegrationName,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for app-integrations.
 */
export class AppIntegrationsOperations {
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"app-integrations:CreateApplication",
		"app-integrations:TagResource",
	];
	/** IAM actions required for the CreateDataIntegration API call. */
	static readonly CREATE_DATA_INTEGRATION: string[] = [
		"app-integrations:CreateDataIntegration",
		"app-integrations:TagResource",
	];
	/** IAM actions required for the CreateDataIntegrationAssociation API call. */
	static readonly CREATE_DATA_INTEGRATION_ASSOCIATION: string[] = [
		"app-integrations:CreateDataIntegrationAssociation",
	];
	/** IAM actions required for the CreateEventIntegration API call. */
	static readonly CREATE_EVENT_INTEGRATION: string[] = [
		"app-integrations:CreateEventIntegration",
		"app-integrations:TagResource",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"app-integrations:DeleteApplication",
	];
	/** IAM actions required for the DeleteDataIntegration API call. */
	static readonly DELETE_DATA_INTEGRATION: string[] = [
		"app-integrations:DeleteDataIntegration",
	];
	/** IAM actions required for the DeleteEventIntegration API call. */
	static readonly DELETE_EVENT_INTEGRATION: string[] = [
		"app-integrations:DeleteEventIntegration",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = [
		"app-integrations:GetApplication",
	];
	/** IAM actions required for the GetDataIntegration API call. */
	static readonly GET_DATA_INTEGRATION: string[] = [
		"app-integrations:GetDataIntegration",
	];
	/** IAM actions required for the GetEventIntegration API call. */
	static readonly GET_EVENT_INTEGRATION: string[] = [
		"app-integrations:GetEventIntegration",
	];
	/** IAM actions required for the ListApplicationAssociations API call. */
	static readonly LIST_APPLICATION_ASSOCIATIONS: string[] = [
		"app-integrations:ListApplicationAssociations",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [
		"app-integrations:ListApplications",
	];
	/** IAM actions required for the ListDataIntegrationAssociations API call. */
	static readonly LIST_DATA_INTEGRATION_ASSOCIATIONS: string[] = [
		"app-integrations:ListDataIntegrationAssociations",
	];
	/** IAM actions required for the ListDataIntegrations API call. */
	static readonly LIST_DATA_INTEGRATIONS: string[] = [
		"app-integrations:ListDataIntegrations",
	];
	/** IAM actions required for the ListEventIntegrationAssociations API call. */
	static readonly LIST_EVENT_INTEGRATION_ASSOCIATIONS: string[] = [
		"app-integrations:ListEventIntegrationAssociations",
	];
	/** IAM actions required for the ListEventIntegrations API call. */
	static readonly LIST_EVENT_INTEGRATIONS: string[] = [
		"app-integrations:ListEventIntegrations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"app-integrations:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["app-integrations:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["app-integrations:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [
		"app-integrations:UpdateApplication",
	];
	/** IAM actions required for the UpdateDataIntegration API call. */
	static readonly UPDATE_DATA_INTEGRATION: string[] = [
		"app-integrations:UpdateDataIntegration",
	];
	/** IAM actions required for the UpdateDataIntegrationAssociation API call. */
	static readonly UPDATE_DATA_INTEGRATION_ASSOCIATION: string[] = [
		"app-integrations:UpdateDataIntegrationAssociation",
	];
	/** IAM actions required for the UpdateEventIntegration API call. */
	static readonly UPDATE_EVENT_INTEGRATION: string[] = [
		"app-integrations:UpdateEventIntegration",
	];
}

/**
 * Condition key constants and builders for app-integrations.
 */
export class AppIntegrationsConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApplicationAssociation action. */
	static readonly CREATE_APPLICATION_ASSOCIATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataIntegration action. */
	static readonly CREATE_DATA_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataIntegrationAssociation action. */
	static readonly CREATE_DATA_INTEGRATION_ASSOCIATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateEventIntegration action. */
	static readonly CREATE_EVENT_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventIntegrationAssociation action. */
	static readonly CREATE_EVENT_INTEGRATION_ASSOCIATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the DeleteApplication action. */
	static readonly DELETE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteDataIntegration action. */
	static readonly DELETE_DATA_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteEventIntegration action. */
	static readonly DELETE_EVENT_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetApplication action. */
	static readonly GET_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDataIntegration action. */
	static readonly GET_DATA_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEventIntegration action. */
	static readonly GET_EVENT_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateApplication action. */
	static readonly UPDATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateDataIntegration action. */
	static readonly UPDATE_DATA_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateDataIntegrationAssociation action. */
	static readonly UPDATE_DATA_INTEGRATION_ASSOCIATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateEventIntegration action. */
	static readonly UPDATE_EVENT_INTEGRATION_CONDITION_KEYS: string[] = [
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
