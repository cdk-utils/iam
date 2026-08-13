// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/application-signals.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the application-signals service.
 */
export class ApplicationSignalsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "application-signals";

	/** [Write] application-signals:BatchDeleteInstrumentationConfigurations */
	static readonly BatchDeleteInstrumentationConfigurations =
		"application-signals:BatchDeleteInstrumentationConfigurations";
	/** [Read] application-signals:BatchGetServiceLevelObjectiveBudgetReport */
	static readonly BatchGetServiceLevelObjectiveBudgetReport =
		"application-signals:BatchGetServiceLevelObjectiveBudgetReport";
	/** [Write] application-signals:BatchUpdateExclusionWindows */
	static readonly BatchUpdateExclusionWindows =
		"application-signals:BatchUpdateExclusionWindows";
	/** [Write] application-signals:CreateInstrumentationConfiguration */
	static readonly CreateInstrumentationConfiguration =
		"application-signals:CreateInstrumentationConfiguration";
	/** [Write] application-signals:CreateServiceLevelObjective */
	static readonly CreateServiceLevelObjective =
		"application-signals:CreateServiceLevelObjective";
	/** [Write] application-signals:DeleteGroupingConfiguration */
	static readonly DeleteGroupingConfiguration =
		"application-signals:DeleteGroupingConfiguration";
	/** [Write] application-signals:DeleteInstrumentationConfiguration */
	static readonly DeleteInstrumentationConfiguration =
		"application-signals:DeleteInstrumentationConfiguration";
	/** [Write] application-signals:DeleteServiceLevelObjective */
	static readonly DeleteServiceLevelObjective =
		"application-signals:DeleteServiceLevelObjective";
	/** [Read] application-signals:GetInstrumentationConfiguration */
	static readonly actionGetInstrumentationConfiguration =
		"application-signals:GetInstrumentationConfiguration";
	/** [Read] application-signals:GetInstrumentationConfigurationStatus */
	static readonly actionGetInstrumentationConfigurationStatus =
		"application-signals:GetInstrumentationConfigurationStatus";
	/** [Read] application-signals:GetService */
	static readonly actionGetService = "application-signals:GetService";
	/** [Read] application-signals:GetServiceLevelObjective */
	static readonly actionGetServiceLevelObjective =
		"application-signals:GetServiceLevelObjective";
	/** [Write] application-signals:Link */
	static readonly Link = "application-signals:Link";
	/** [List] application-signals:ListAuditFindings */
	static readonly ListAuditFindings = "application-signals:ListAuditFindings";
	/** [List] application-signals:ListEntityEvents */
	static readonly ListEntityEvents = "application-signals:ListEntityEvents";
	/** [List] application-signals:ListGroupingAttributeDefinitions */
	static readonly ListGroupingAttributeDefinitions =
		"application-signals:ListGroupingAttributeDefinitions";
	/** [List] application-signals:ListInstrumentationConfigurations */
	static readonly ListInstrumentationConfigurations =
		"application-signals:ListInstrumentationConfigurations";
	/** [List] application-signals:ListObservedEntities */
	static readonly ListObservedEntities =
		"application-signals:ListObservedEntities";
	/** [Read] application-signals:ListServiceDependencies */
	static readonly ListServiceDependencies =
		"application-signals:ListServiceDependencies";
	/** [Read] application-signals:ListServiceDependents */
	static readonly ListServiceDependents =
		"application-signals:ListServiceDependents";
	/** [List] application-signals:ListServiceLevelObjectiveExclusionWindows */
	static readonly ListServiceLevelObjectiveExclusionWindows =
		"application-signals:ListServiceLevelObjectiveExclusionWindows";
	/** [List] application-signals:ListServiceLevelObjectives */
	static readonly ListServiceLevelObjectives =
		"application-signals:ListServiceLevelObjectives";
	/** [Read] application-signals:ListServiceOperations */
	static readonly ListServiceOperations =
		"application-signals:ListServiceOperations";
	/** [List] application-signals:ListServiceStates */
	static readonly ListServiceStates = "application-signals:ListServiceStates";
	/** [List] application-signals:ListServices */
	static readonly ListServices = "application-signals:ListServices";
	/** [Read] application-signals:ListTagsForResource */
	static readonly ListTagsForResource =
		"application-signals:ListTagsForResource";
	/** [Write] application-signals:PutGroupingConfiguration */
	static readonly PutGroupingConfiguration =
		"application-signals:PutGroupingConfiguration";
	/** [Write] application-signals:ReportInstrumentationConfigurationStatus */
	static readonly ReportInstrumentationConfigurationStatus =
		"application-signals:ReportInstrumentationConfigurationStatus";
	/** [Write] application-signals:StartDiscovery */
	static readonly StartDiscovery = "application-signals:StartDiscovery";
	/** [Tagging] application-signals:TagResource */
	static readonly TagResource = "application-signals:TagResource";
	/** [Tagging] application-signals:UntagResource */
	static readonly UntagResource = "application-signals:UntagResource";
	/** [Write] application-signals:UpdateServiceLevelObjective */
	static readonly UpdateServiceLevelObjective =
		"application-signals:UpdateServiceLevelObjective";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ApplicationSignalsActions.BatchGetServiceLevelObjectiveBudgetReport,
		ApplicationSignalsActions.actionGetInstrumentationConfiguration,
		ApplicationSignalsActions.actionGetInstrumentationConfigurationStatus,
		ApplicationSignalsActions.actionGetService,
		ApplicationSignalsActions.actionGetServiceLevelObjective,
		ApplicationSignalsActions.ListServiceDependencies,
		ApplicationSignalsActions.ListServiceDependents,
		ApplicationSignalsActions.ListServiceOperations,
		ApplicationSignalsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ApplicationSignalsActions.BatchDeleteInstrumentationConfigurations,
		ApplicationSignalsActions.BatchUpdateExclusionWindows,
		ApplicationSignalsActions.CreateInstrumentationConfiguration,
		ApplicationSignalsActions.CreateServiceLevelObjective,
		ApplicationSignalsActions.DeleteGroupingConfiguration,
		ApplicationSignalsActions.DeleteInstrumentationConfiguration,
		ApplicationSignalsActions.DeleteServiceLevelObjective,
		ApplicationSignalsActions.Link,
		ApplicationSignalsActions.PutGroupingConfiguration,
		ApplicationSignalsActions.ReportInstrumentationConfigurationStatus,
		ApplicationSignalsActions.StartDiscovery,
		ApplicationSignalsActions.UpdateServiceLevelObjective,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ApplicationSignalsActions.ListAuditFindings,
		ApplicationSignalsActions.ListEntityEvents,
		ApplicationSignalsActions.ListGroupingAttributeDefinitions,
		ApplicationSignalsActions.ListInstrumentationConfigurations,
		ApplicationSignalsActions.ListObservedEntities,
		ApplicationSignalsActions.ListServiceLevelObjectiveExclusionWindows,
		ApplicationSignalsActions.ListServiceLevelObjectives,
		ApplicationSignalsActions.ListServiceStates,
		ApplicationSignalsActions.ListServices,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ApplicationSignalsActions.TagResource,
		ApplicationSignalsActions.UntagResource,
	];
}

/**
 * Properties for building a instrumentationConfig ARN.
 */
export interface ApplicationSignalsInstrumentationConfigArnProps {
	/** The Service component of the ARN. */
	readonly service: string;
	/** The Environment component of the ARN. */
	readonly environment: string;
	/** The SignalType component of the ARN. */
	readonly signalType: string;
	/** The LocationHash component of the ARN. */
	readonly locationHash: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a instrumentationConfig ARN.
 */
export interface ApplicationSignalsInstrumentationConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Service component. */
	readonly service: string;
	/** The Environment component. */
	readonly environment: string;
	/** The SignalType component. */
	readonly signalType: string;
	/** The LocationHash component. */
	readonly locationHash: string;
}

/**
 * Properties for building a slo ARN.
 */
export interface ApplicationSignalsSloArnProps {
	/** The SloName component of the ARN. */
	readonly sloName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a slo ARN.
 */
export interface ApplicationSignalsSloArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SloName component. */
	readonly sloName: string;
}

const InstrumentationConfigArnRegex =
	/^arn:(?<partition>[^:]+):application-signals:(?<region>[^:]*):(?<account>[^:]*):instrumentationConfig\/(?<service>[^:/?]+)\/(?<environment>[^:/?]+)\/(?<signalType>[^:/?]+)\/(?<locationHash>[^:/?]+)$/;
const SloArnRegex =
	/^arn:(?<partition>[^:]+):application-signals:(?<region>[^:]*):(?<account>[^:]*):slo\/(?<sloName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for application-signals resources.
 */
export class ApplicationSignalsResources {
	/**
	 * Builds an ARN for the instrumentationConfig resource.
	 */
	static instrumentationConfig(
		props: ApplicationSignalsInstrumentationConfigArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:application-signals:${props.region ?? "*"}:${props.account ?? "*"}:instrumentationConfig/${props.service}/${props.environment}/${props.signalType}/${props.locationHash}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the instrumentationConfig resource.
	 */
	static isValidInstrumentationConfigArn(arn: string): boolean {
		return InstrumentationConfigArnRegex.test(arn);
	}

	/**
	 * Parses a instrumentationConfig ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstrumentationConfigArn(
		arn: string,
	): ApplicationSignalsInstrumentationConfigArnComponents {
		const match = InstrumentationConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid instrumentationConfig ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			service: match.groups!.service,
			environment: match.groups!.environment,
			signalType: match.groups!.signalType,
			locationHash: match.groups!.locationHash,
		};
	}

	/**
	 * Builds an ARN for the slo resource.
	 */
	static slo(props: ApplicationSignalsSloArnProps): string {
		return `arn:${props.partition ?? "aws"}:application-signals:${props.region ?? "*"}:${props.account ?? "*"}:slo/${props.sloName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the slo resource.
	 */
	static isValidSloArn(arn: string): boolean {
		return SloArnRegex.test(arn);
	}

	/**
	 * Parses a slo ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSloArn(arn: string): ApplicationSignalsSloArnComponents {
		const match = SloArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid slo ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sloName: match.groups!.sloName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for application-signals.
 */
export class ApplicationSignalsOperations {
	/** IAM actions required for the BatchDeleteInstrumentationConfigurations API call. */
	static readonly BatchDeleteInstrumentationConfigurations: string[] = [
		"application-signals:BatchDeleteInstrumentationConfigurations",
	];
	/** IAM actions required for the BatchGetServiceLevelObjectiveBudgetReport API call. */
	static readonly BatchGetServiceLevelObjectiveBudgetReport: string[] = [
		"application-signals:BatchGetServiceLevelObjectiveBudgetReport",
	];
	/** IAM actions required for the BatchUpdateExclusionWindows API call. */
	static readonly BatchUpdateExclusionWindows: string[] = [
		"application-signals:BatchUpdateExclusionWindows",
	];
	/** IAM actions required for the CreateInstrumentationConfiguration API call. */
	static readonly CreateInstrumentationConfiguration: string[] = [
		"application-signals:CreateInstrumentationConfiguration",
		"application-signals:TagResource",
	];
	/** IAM actions required for the CreateServiceLevelObjective API call. */
	static readonly CreateServiceLevelObjective: string[] = [
		"application-signals:CreateServiceLevelObjective",
		"application-signals:TagResource",
	];
	/** IAM actions required for the DeleteGroupingConfiguration API call. */
	static readonly DeleteGroupingConfiguration: string[] = [
		"application-signals:DeleteGroupingConfiguration",
	];
	/** IAM actions required for the DeleteInstrumentationConfiguration API call. */
	static readonly DeleteInstrumentationConfiguration: string[] = [
		"application-signals:DeleteInstrumentationConfiguration",
	];
	/** IAM actions required for the DeleteServiceLevelObjective API call. */
	static readonly DeleteServiceLevelObjective: string[] = [
		"application-signals:DeleteServiceLevelObjective",
	];
	/** IAM actions required for the GetInstrumentationConfiguration API call. */
	static readonly opGetInstrumentationConfiguration: string[] = [
		"application-signals:GetInstrumentationConfiguration",
	];
	/** IAM actions required for the GetInstrumentationConfigurationStatus API call. */
	static readonly opGetInstrumentationConfigurationStatus: string[] = [
		"application-signals:GetInstrumentationConfigurationStatus",
	];
	/** IAM actions required for the GetService API call. */
	static readonly opGetService: string[] = ["application-signals:GetService"];
	/** IAM actions required for the GetServiceLevelObjective API call. */
	static readonly opGetServiceLevelObjective: string[] = [
		"application-signals:GetServiceLevelObjective",
	];
	/** IAM actions required for the ListAuditFindings API call. */
	static readonly ListAuditFindings: string[] = [
		"application-signals:GetServiceLevelObjective",
		"application-signals:ListAuditFindings",
		"application-signals:ListServiceLevelObjectives",
	];
	/** IAM actions required for the ListEntityEvents API call. */
	static readonly ListEntityEvents: string[] = [
		"application-signals:ListEntityEvents",
	];
	/** IAM actions required for the ListGroupingAttributeDefinitions API call. */
	static readonly ListGroupingAttributeDefinitions: string[] = [
		"application-signals:ListGroupingAttributeDefinitions",
	];
	/** IAM actions required for the ListInstrumentationConfigurations API call. */
	static readonly ListInstrumentationConfigurations: string[] = [
		"application-signals:ListInstrumentationConfigurations",
	];
	/** IAM actions required for the ListServiceDependencies API call. */
	static readonly ListServiceDependencies: string[] = [
		"application-signals:ListServiceDependencies",
	];
	/** IAM actions required for the ListServiceDependents API call. */
	static readonly ListServiceDependents: string[] = [
		"application-signals:ListServiceDependents",
	];
	/** IAM actions required for the ListServiceLevelObjectiveExclusionWindows API call. */
	static readonly ListServiceLevelObjectiveExclusionWindows: string[] = [
		"application-signals:ListServiceLevelObjectiveExclusionWindows",
	];
	/** IAM actions required for the ListServiceLevelObjectives API call. */
	static readonly ListServiceLevelObjectives: string[] = [
		"application-signals:ListServiceLevelObjectives",
	];
	/** IAM actions required for the ListServiceOperations API call. */
	static readonly ListServiceOperations: string[] = [
		"application-signals:ListServiceOperations",
	];
	/** IAM actions required for the ListServiceStates API call. */
	static readonly ListServiceStates: string[] = [
		"application-signals:ListServiceStates",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly ListServices: string[] = ["application-signals:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"application-signals:ListTagsForResource",
	];
	/** IAM actions required for the PutGroupingConfiguration API call. */
	static readonly PutGroupingConfiguration: string[] = [
		"application-signals:PutGroupingConfiguration",
	];
	/** IAM actions required for the ReportInstrumentationConfigurationStatus API call. */
	static readonly ReportInstrumentationConfigurationStatus: string[] = [
		"application-signals:ReportInstrumentationConfigurationStatus",
	];
	/** IAM actions required for the StartDiscovery API call. */
	static readonly StartDiscovery: string[] = [
		"application-signals:StartDiscovery",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["application-signals:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"application-signals:UntagResource",
	];
	/** IAM actions required for the UpdateServiceLevelObjective API call. */
	static readonly UpdateServiceLevelObjective: string[] = [
		"application-signals:UpdateServiceLevelObjective",
	];
}

/**
 * Condition key constants and builders for application-signals.
 */
export class ApplicationSignalsConditions {
	/** Condition keys applicable to the CreateInstrumentationConfiguration action. */
	static readonly CreateInstrumentationConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServiceLevelObjective action. */
	static readonly CreateServiceLevelObjectiveConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

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
