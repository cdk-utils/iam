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
	static readonly CreateApplication = "app-integrations:CreateApplication";
	/** [Write] app-integrations:CreateApplicationAssociation */
	static readonly CreateApplicationAssociation =
		"app-integrations:CreateApplicationAssociation";
	/** [Write] app-integrations:CreateDataIntegration */
	static readonly CreateDataIntegration =
		"app-integrations:CreateDataIntegration";
	/** [Write] app-integrations:CreateDataIntegrationAssociation */
	static readonly CreateDataIntegrationAssociation =
		"app-integrations:CreateDataIntegrationAssociation";
	/** [Write] app-integrations:CreateDataIntegrationSchedule */
	static readonly CreateDataIntegrationSchedule =
		"app-integrations:CreateDataIntegrationSchedule";
	/** [Write] app-integrations:CreateEventIntegration */
	static readonly CreateEventIntegration =
		"app-integrations:CreateEventIntegration";
	/** [Write] app-integrations:CreateEventIntegrationAssociation */
	static readonly CreateEventIntegrationAssociation =
		"app-integrations:CreateEventIntegrationAssociation";
	/** [Write] app-integrations:DeleteApplication */
	static readonly DeleteApplication = "app-integrations:DeleteApplication";
	/** [Write] app-integrations:DeleteApplicationAssociation */
	static readonly DeleteApplicationAssociation =
		"app-integrations:DeleteApplicationAssociation";
	/** [Write] app-integrations:DeleteDataIntegration */
	static readonly DeleteDataIntegration =
		"app-integrations:DeleteDataIntegration";
	/** [Write] app-integrations:DeleteDataIntegrationAssociation */
	static readonly DeleteDataIntegrationAssociation =
		"app-integrations:DeleteDataIntegrationAssociation";
	/** [Write] app-integrations:DeleteEventIntegration */
	static readonly DeleteEventIntegration =
		"app-integrations:DeleteEventIntegration";
	/** [Write] app-integrations:DeleteEventIntegrationAssociation */
	static readonly DeleteEventIntegrationAssociation =
		"app-integrations:DeleteEventIntegrationAssociation";
	/** [Read] app-integrations:GetApplication */
	static readonly actionGetApplication = "app-integrations:GetApplication";
	/** [Read] app-integrations:GetDataIntegration */
	static readonly actionGetDataIntegration =
		"app-integrations:GetDataIntegration";
	/** [Read] app-integrations:GetDataIntegrationExecution */
	static readonly actionGetDataIntegrationExecution =
		"app-integrations:GetDataIntegrationExecution";
	/** [Read] app-integrations:GetDataIntegrationSchedule */
	static readonly actionGetDataIntegrationSchedule =
		"app-integrations:GetDataIntegrationSchedule";
	/** [Read] app-integrations:GetEventIntegration */
	static readonly actionGetEventIntegration =
		"app-integrations:GetEventIntegration";
	/** [List] app-integrations:ListApplicationAssociations */
	static readonly ListApplicationAssociations =
		"app-integrations:ListApplicationAssociations";
	/** [List] app-integrations:ListApplications */
	static readonly ListApplications = "app-integrations:ListApplications";
	/** [List] app-integrations:ListDataIntegrationAssociations */
	static readonly ListDataIntegrationAssociations =
		"app-integrations:ListDataIntegrationAssociations";
	/** [List] app-integrations:ListDataIntegrationExecutions */
	static readonly ListDataIntegrationExecutions =
		"app-integrations:ListDataIntegrationExecutions";
	/** [List] app-integrations:ListDataIntegrationSchedules */
	static readonly ListDataIntegrationSchedules =
		"app-integrations:ListDataIntegrationSchedules";
	/** [List] app-integrations:ListDataIntegrations */
	static readonly ListDataIntegrations =
		"app-integrations:ListDataIntegrations";
	/** [Read] app-integrations:ListEventIntegrationAssociations */
	static readonly ListEventIntegrationAssociations =
		"app-integrations:ListEventIntegrationAssociations";
	/** [List] app-integrations:ListEventIntegrations */
	static readonly ListEventIntegrations =
		"app-integrations:ListEventIntegrations";
	/** [Read] app-integrations:ListTagsForResource */
	static readonly ListTagsForResource = "app-integrations:ListTagsForResource";
	/** [Write] app-integrations:StartDataIntegrationExecution */
	static readonly StartDataIntegrationExecution =
		"app-integrations:StartDataIntegrationExecution";
	/** [Tagging] app-integrations:TagResource */
	static readonly TagResource = "app-integrations:TagResource";
	/** [Tagging] app-integrations:UntagResource */
	static readonly UntagResource = "app-integrations:UntagResource";
	/** [Write] app-integrations:UpdateApplication */
	static readonly UpdateApplication = "app-integrations:UpdateApplication";
	/** [Write] app-integrations:UpdateDataIntegration */
	static readonly UpdateDataIntegration =
		"app-integrations:UpdateDataIntegration";
	/** [Write] app-integrations:UpdateDataIntegrationAssociation */
	static readonly UpdateDataIntegrationAssociation =
		"app-integrations:UpdateDataIntegrationAssociation";
	/** [Write] app-integrations:UpdateDataIntegrationSchedule */
	static readonly UpdateDataIntegrationSchedule =
		"app-integrations:UpdateDataIntegrationSchedule";
	/** [Write] app-integrations:UpdateEventIntegration */
	static readonly UpdateEventIntegration =
		"app-integrations:UpdateEventIntegration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AppIntegrationsActions.actionGetApplication,
		AppIntegrationsActions.actionGetDataIntegration,
		AppIntegrationsActions.actionGetDataIntegrationExecution,
		AppIntegrationsActions.actionGetDataIntegrationSchedule,
		AppIntegrationsActions.actionGetEventIntegration,
		AppIntegrationsActions.ListEventIntegrationAssociations,
		AppIntegrationsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AppIntegrationsActions.CreateApplication,
		AppIntegrationsActions.CreateApplicationAssociation,
		AppIntegrationsActions.CreateDataIntegration,
		AppIntegrationsActions.CreateDataIntegrationAssociation,
		AppIntegrationsActions.CreateDataIntegrationSchedule,
		AppIntegrationsActions.CreateEventIntegration,
		AppIntegrationsActions.CreateEventIntegrationAssociation,
		AppIntegrationsActions.DeleteApplication,
		AppIntegrationsActions.DeleteApplicationAssociation,
		AppIntegrationsActions.DeleteDataIntegration,
		AppIntegrationsActions.DeleteDataIntegrationAssociation,
		AppIntegrationsActions.DeleteEventIntegration,
		AppIntegrationsActions.DeleteEventIntegrationAssociation,
		AppIntegrationsActions.StartDataIntegrationExecution,
		AppIntegrationsActions.UpdateApplication,
		AppIntegrationsActions.UpdateDataIntegration,
		AppIntegrationsActions.UpdateDataIntegrationAssociation,
		AppIntegrationsActions.UpdateDataIntegrationSchedule,
		AppIntegrationsActions.UpdateEventIntegration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AppIntegrationsActions.ListApplicationAssociations,
		AppIntegrationsActions.ListApplications,
		AppIntegrationsActions.ListDataIntegrationAssociations,
		AppIntegrationsActions.ListDataIntegrationExecutions,
		AppIntegrationsActions.ListDataIntegrationSchedules,
		AppIntegrationsActions.ListDataIntegrations,
		AppIntegrationsActions.ListEventIntegrations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AppIntegrationsActions.TagResource,
		AppIntegrationsActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface AppIntegrationsApplicationArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a application ARN.
 */
export interface AppIntegrationsApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a application-association ARN.
 */
export interface AppIntegrationsApplicationAssociationArnProps {
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
}

/**
 * Parsed components of a application-association ARN.
 */
export interface AppIntegrationsApplicationAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The ApplicationAssociationId component. */
	readonly applicationAssociationId: string;
}

/**
 * Properties for building a data-integration ARN.
 */
export interface AppIntegrationsDataIntegrationArnProps {
	/** The DataIntegrationId component of the ARN. */
	readonly dataIntegrationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a data-integration ARN.
 */
export interface AppIntegrationsDataIntegrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataIntegrationId component. */
	readonly dataIntegrationId: string;
}

/**
 * Properties for building a data-integration-association ARN.
 */
export interface AppIntegrationsDataIntegrationAssociationArnProps {
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
}

/**
 * Parsed components of a data-integration-association ARN.
 */
export interface AppIntegrationsDataIntegrationAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataIntegrationId component. */
	readonly dataIntegrationId: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a event-integration ARN.
 */
export interface AppIntegrationsEventIntegrationArnProps {
	/** The EventIntegrationName component of the ARN. */
	readonly eventIntegrationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a event-integration ARN.
 */
export interface AppIntegrationsEventIntegrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EventIntegrationName component. */
	readonly eventIntegrationName: string;
}

/**
 * Properties for building a event-integration-association ARN.
 */
export interface AppIntegrationsEventIntegrationAssociationArnProps {
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
}

/**
 * Parsed components of a event-integration-association ARN.
 */
export interface AppIntegrationsEventIntegrationAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EventIntegrationName component. */
	readonly eventIntegrationName: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):app-integrations:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)$/;
const ApplicationAssociationArnRegex =
	/^arn:(?<partition>[^:]+):app-integrations:(?<region>[^:]*):(?<account>[^:]*):application-association\/(?<applicationId>[^:/?]+)\/(?<applicationAssociationId>[^:/?]+)$/;
const DataIntegrationArnRegex =
	/^arn:(?<partition>[^:]+):app-integrations:(?<region>[^:]*):(?<account>[^:]*):data-integration\/(?<dataIntegrationId>[^:/?]+)$/;
const DataIntegrationAssociationArnRegex =
	/^arn:(?<partition>[^:]+):app-integrations:(?<region>[^:]*):(?<account>[^:]*):data-integration-association\/(?<dataIntegrationId>[^:/?]+)\/(?<resourceId>[^:/?]+)$/;
const EventIntegrationArnRegex =
	/^arn:(?<partition>[^:]+):app-integrations:(?<region>[^:]*):(?<account>[^:]*):event-integration\/(?<eventIntegrationName>[^:/?]+)$/;
const EventIntegrationAssociationArnRegex =
	/^arn:(?<partition>[^:]+):app-integrations:(?<region>[^:]*):(?<account>[^:]*):event-integration-association\/(?<eventIntegrationName>[^:/?]+)\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for app-integrations resources.
 */
export class AppIntegrationsResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: AppIntegrationsApplicationArnProps): string {
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
	static parseApplicationArn(
		arn: string,
	): AppIntegrationsApplicationArnComponents {
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
	static applicationAssociation(
		props: AppIntegrationsApplicationAssociationArnProps,
	): string {
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
	static parseApplicationAssociationArn(
		arn: string,
	): AppIntegrationsApplicationAssociationArnComponents {
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
	static dataIntegration(
		props: AppIntegrationsDataIntegrationArnProps,
	): string {
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
	static parseDataIntegrationArn(
		arn: string,
	): AppIntegrationsDataIntegrationArnComponents {
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
	static dataIntegrationAssociation(
		props: AppIntegrationsDataIntegrationAssociationArnProps,
	): string {
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
	static parseDataIntegrationAssociationArn(
		arn: string,
	): AppIntegrationsDataIntegrationAssociationArnComponents {
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
	static eventIntegration(
		props: AppIntegrationsEventIntegrationArnProps,
	): string {
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
	static parseEventIntegrationArn(
		arn: string,
	): AppIntegrationsEventIntegrationArnComponents {
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
	static eventIntegrationAssociation(
		props: AppIntegrationsEventIntegrationAssociationArnProps,
	): string {
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
	static parseEventIntegrationAssociationArn(
		arn: string,
	): AppIntegrationsEventIntegrationAssociationArnComponents {
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
	static readonly CreateApplication: string[] = [
		"app-integrations:CreateApplication",
		"app-integrations:TagResource",
	];
	/** IAM actions required for the CreateDataIntegration API call. */
	static readonly CreateDataIntegration: string[] = [
		"app-integrations:CreateDataIntegration",
		"app-integrations:TagResource",
	];
	/** IAM actions required for the CreateDataIntegrationAssociation API call. */
	static readonly CreateDataIntegrationAssociation: string[] = [
		"app-integrations:CreateDataIntegrationAssociation",
	];
	/** IAM actions required for the CreateEventIntegration API call. */
	static readonly CreateEventIntegration: string[] = [
		"app-integrations:CreateEventIntegration",
		"app-integrations:TagResource",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [
		"app-integrations:DeleteApplication",
	];
	/** IAM actions required for the DeleteDataIntegration API call. */
	static readonly DeleteDataIntegration: string[] = [
		"app-integrations:DeleteDataIntegration",
	];
	/** IAM actions required for the DeleteEventIntegration API call. */
	static readonly DeleteEventIntegration: string[] = [
		"app-integrations:DeleteEventIntegration",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = [
		"app-integrations:GetApplication",
	];
	/** IAM actions required for the GetDataIntegration API call. */
	static readonly opGetDataIntegration: string[] = [
		"app-integrations:GetDataIntegration",
	];
	/** IAM actions required for the GetEventIntegration API call. */
	static readonly opGetEventIntegration: string[] = [
		"app-integrations:GetEventIntegration",
	];
	/** IAM actions required for the ListApplicationAssociations API call. */
	static readonly ListApplicationAssociations: string[] = [
		"app-integrations:ListApplicationAssociations",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = [
		"app-integrations:ListApplications",
	];
	/** IAM actions required for the ListDataIntegrationAssociations API call. */
	static readonly ListDataIntegrationAssociations: string[] = [
		"app-integrations:ListDataIntegrationAssociations",
	];
	/** IAM actions required for the ListDataIntegrations API call. */
	static readonly ListDataIntegrations: string[] = [
		"app-integrations:ListDataIntegrations",
	];
	/** IAM actions required for the ListEventIntegrationAssociations API call. */
	static readonly ListEventIntegrationAssociations: string[] = [
		"app-integrations:ListEventIntegrationAssociations",
	];
	/** IAM actions required for the ListEventIntegrations API call. */
	static readonly ListEventIntegrations: string[] = [
		"app-integrations:ListEventIntegrations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"app-integrations:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["app-integrations:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["app-integrations:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [
		"app-integrations:UpdateApplication",
	];
	/** IAM actions required for the UpdateDataIntegration API call. */
	static readonly UpdateDataIntegration: string[] = [
		"app-integrations:UpdateDataIntegration",
	];
	/** IAM actions required for the UpdateDataIntegrationAssociation API call. */
	static readonly UpdateDataIntegrationAssociation: string[] = [
		"app-integrations:UpdateDataIntegrationAssociation",
	];
	/** IAM actions required for the UpdateEventIntegration API call. */
	static readonly UpdateEventIntegration: string[] = [
		"app-integrations:UpdateEventIntegration",
	];
}

/**
 * Condition key constants and builders for app-integrations.
 */
export class AppIntegrationsConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApplicationAssociation action. */
	static readonly CreateApplicationAssociationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataIntegration action. */
	static readonly CreateDataIntegrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataIntegrationAssociation action. */
	static readonly CreateDataIntegrationAssociationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventIntegration action. */
	static readonly CreateEventIntegrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventIntegrationAssociation action. */
	static readonly CreateEventIntegrationAssociationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteApplication action. */
	static readonly DeleteApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteDataIntegration action. */
	static readonly DeleteDataIntegrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteEventIntegration action. */
	static readonly DeleteEventIntegrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetApplication action. */
	static readonly actionGetApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDataIntegration action. */
	static readonly actionGetDataIntegrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEventIntegration action. */
	static readonly actionGetEventIntegrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateApplication action. */
	static readonly UpdateApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateDataIntegration action. */
	static readonly UpdateDataIntegrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateDataIntegrationAssociation action. */
	static readonly UpdateDataIntegrationAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateEventIntegration action. */
	static readonly UpdateEventIntegrationConditionKeys: string[] = [
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
