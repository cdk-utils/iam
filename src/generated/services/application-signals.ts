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
	static readonly BATCH_DELETE_INSTRUMENTATION_CONFIGURATIONS =
		"application-signals:BatchDeleteInstrumentationConfigurations";
	/** [Read] application-signals:BatchGetServiceLevelObjectiveBudgetReport */
	static readonly BATCH_GET_SERVICE_LEVEL_OBJECTIVE_BUDGET_REPORT =
		"application-signals:BatchGetServiceLevelObjectiveBudgetReport";
	/** [Write] application-signals:BatchUpdateExclusionWindows */
	static readonly BATCH_UPDATE_EXCLUSION_WINDOWS =
		"application-signals:BatchUpdateExclusionWindows";
	/** [Write] application-signals:CreateInstrumentationConfiguration */
	static readonly CREATE_INSTRUMENTATION_CONFIGURATION =
		"application-signals:CreateInstrumentationConfiguration";
	/** [Write] application-signals:CreateServiceLevelObjective */
	static readonly CREATE_SERVICE_LEVEL_OBJECTIVE =
		"application-signals:CreateServiceLevelObjective";
	/** [Write] application-signals:DeleteGroupingConfiguration */
	static readonly DELETE_GROUPING_CONFIGURATION =
		"application-signals:DeleteGroupingConfiguration";
	/** [Write] application-signals:DeleteInstrumentationConfiguration */
	static readonly DELETE_INSTRUMENTATION_CONFIGURATION =
		"application-signals:DeleteInstrumentationConfiguration";
	/** [Write] application-signals:DeleteServiceLevelObjective */
	static readonly DELETE_SERVICE_LEVEL_OBJECTIVE =
		"application-signals:DeleteServiceLevelObjective";
	/** [Read] application-signals:GetInstrumentationConfiguration */
	static readonly GET_INSTRUMENTATION_CONFIGURATION =
		"application-signals:GetInstrumentationConfiguration";
	/** [Read] application-signals:GetInstrumentationConfigurationStatus */
	static readonly GET_INSTRUMENTATION_CONFIGURATION_STATUS =
		"application-signals:GetInstrumentationConfigurationStatus";
	/** [Read] application-signals:GetService */
	static readonly GET_SERVICE = "application-signals:GetService";
	/** [Read] application-signals:GetServiceLevelObjective */
	static readonly GET_SERVICE_LEVEL_OBJECTIVE =
		"application-signals:GetServiceLevelObjective";
	/** [Write] application-signals:Link */
	static readonly LINK = "application-signals:Link";
	/** [List] application-signals:ListAuditFindings */
	static readonly LIST_AUDIT_FINDINGS = "application-signals:ListAuditFindings";
	/** [List] application-signals:ListEntityEvents */
	static readonly LIST_ENTITY_EVENTS = "application-signals:ListEntityEvents";
	/** [List] application-signals:ListGroupingAttributeDefinitions */
	static readonly LIST_GROUPING_ATTRIBUTE_DEFINITIONS =
		"application-signals:ListGroupingAttributeDefinitions";
	/** [List] application-signals:ListInstrumentationConfigurations */
	static readonly LIST_INSTRUMENTATION_CONFIGURATIONS =
		"application-signals:ListInstrumentationConfigurations";
	/** [List] application-signals:ListObservedEntities */
	static readonly LIST_OBSERVED_ENTITIES =
		"application-signals:ListObservedEntities";
	/** [Read] application-signals:ListServiceDependencies */
	static readonly LIST_SERVICE_DEPENDENCIES =
		"application-signals:ListServiceDependencies";
	/** [Read] application-signals:ListServiceDependents */
	static readonly LIST_SERVICE_DEPENDENTS =
		"application-signals:ListServiceDependents";
	/** [List] application-signals:ListServiceLevelObjectiveExclusionWindows */
	static readonly LIST_SERVICE_LEVEL_OBJECTIVE_EXCLUSION_WINDOWS =
		"application-signals:ListServiceLevelObjectiveExclusionWindows";
	/** [List] application-signals:ListServiceLevelObjectives */
	static readonly LIST_SERVICE_LEVEL_OBJECTIVES =
		"application-signals:ListServiceLevelObjectives";
	/** [Read] application-signals:ListServiceOperations */
	static readonly LIST_SERVICE_OPERATIONS =
		"application-signals:ListServiceOperations";
	/** [List] application-signals:ListServiceStates */
	static readonly LIST_SERVICE_STATES = "application-signals:ListServiceStates";
	/** [List] application-signals:ListServices */
	static readonly LIST_SERVICES = "application-signals:ListServices";
	/** [Read] application-signals:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"application-signals:ListTagsForResource";
	/** [Write] application-signals:PutGroupingConfiguration */
	static readonly PUT_GROUPING_CONFIGURATION =
		"application-signals:PutGroupingConfiguration";
	/** [Write] application-signals:ReportInstrumentationConfigurationStatus */
	static readonly REPORT_INSTRUMENTATION_CONFIGURATION_STATUS =
		"application-signals:ReportInstrumentationConfigurationStatus";
	/** [Write] application-signals:StartDiscovery */
	static readonly START_DISCOVERY = "application-signals:StartDiscovery";
	/** [Tagging] application-signals:TagResource */
	static readonly TAG_RESOURCE = "application-signals:TagResource";
	/** [Tagging] application-signals:UntagResource */
	static readonly UNTAG_RESOURCE = "application-signals:UntagResource";
	/** [Write] application-signals:UpdateServiceLevelObjective */
	static readonly UPDATE_SERVICE_LEVEL_OBJECTIVE =
		"application-signals:UpdateServiceLevelObjective";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ApplicationSignalsActions.BATCH_GET_SERVICE_LEVEL_OBJECTIVE_BUDGET_REPORT,
		ApplicationSignalsActions.GET_INSTRUMENTATION_CONFIGURATION,
		ApplicationSignalsActions.GET_INSTRUMENTATION_CONFIGURATION_STATUS,
		ApplicationSignalsActions.GET_SERVICE,
		ApplicationSignalsActions.GET_SERVICE_LEVEL_OBJECTIVE,
		ApplicationSignalsActions.LIST_SERVICE_DEPENDENCIES,
		ApplicationSignalsActions.LIST_SERVICE_DEPENDENTS,
		ApplicationSignalsActions.LIST_SERVICE_OPERATIONS,
		ApplicationSignalsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ApplicationSignalsActions.BATCH_DELETE_INSTRUMENTATION_CONFIGURATIONS,
		ApplicationSignalsActions.BATCH_UPDATE_EXCLUSION_WINDOWS,
		ApplicationSignalsActions.CREATE_INSTRUMENTATION_CONFIGURATION,
		ApplicationSignalsActions.CREATE_SERVICE_LEVEL_OBJECTIVE,
		ApplicationSignalsActions.DELETE_GROUPING_CONFIGURATION,
		ApplicationSignalsActions.DELETE_INSTRUMENTATION_CONFIGURATION,
		ApplicationSignalsActions.DELETE_SERVICE_LEVEL_OBJECTIVE,
		ApplicationSignalsActions.LINK,
		ApplicationSignalsActions.PUT_GROUPING_CONFIGURATION,
		ApplicationSignalsActions.REPORT_INSTRUMENTATION_CONFIGURATION_STATUS,
		ApplicationSignalsActions.START_DISCOVERY,
		ApplicationSignalsActions.UPDATE_SERVICE_LEVEL_OBJECTIVE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ApplicationSignalsActions.LIST_AUDIT_FINDINGS,
		ApplicationSignalsActions.LIST_ENTITY_EVENTS,
		ApplicationSignalsActions.LIST_GROUPING_ATTRIBUTE_DEFINITIONS,
		ApplicationSignalsActions.LIST_INSTRUMENTATION_CONFIGURATIONS,
		ApplicationSignalsActions.LIST_OBSERVED_ENTITIES,
		ApplicationSignalsActions.LIST_SERVICE_LEVEL_OBJECTIVE_EXCLUSION_WINDOWS,
		ApplicationSignalsActions.LIST_SERVICE_LEVEL_OBJECTIVES,
		ApplicationSignalsActions.LIST_SERVICE_STATES,
		ApplicationSignalsActions.LIST_SERVICES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ApplicationSignalsActions.TAG_RESOURCE,
		ApplicationSignalsActions.UNTAG_RESOURCE,
	];
}

const InstrumentationConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):application-signals:(?<region>[^:]*):(?<account>[^:]*):instrumentationConfig/(?<service>[^:/?]+)/(?<environment>[^:/?]+)/(?<signalType>[^:/?]+)/(?<locationHash>[^:/?]+)$",
);
const SloArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):application-signals:(?<region>[^:]*):(?<account>[^:]*):slo/(?<sloName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for application-signals resources.
 */
export class ApplicationSignalsResources {
	/**
	 * Builds an ARN for the instrumentationConfig resource.
	 */
	static instrumentationConfig(props: {
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
	}): string {
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
	static parseInstrumentationConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		service: string;
		environment: string;
		signalType: string;
		locationHash: string;
	} {
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
	static slo(props: {
		/** The SloName component of the ARN. */
		readonly sloName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSloArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sloName: string;
	} {
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
	static readonly BATCH_DELETE_INSTRUMENTATION_CONFIGURATIONS: string[] = [
		"application-signals:BatchDeleteInstrumentationConfigurations",
	];
	/** IAM actions required for the BatchGetServiceLevelObjectiveBudgetReport API call. */
	static readonly BATCH_GET_SERVICE_LEVEL_OBJECTIVE_BUDGET_REPORT: string[] = [
		"application-signals:BatchGetServiceLevelObjectiveBudgetReport",
	];
	/** IAM actions required for the BatchUpdateExclusionWindows API call. */
	static readonly BATCH_UPDATE_EXCLUSION_WINDOWS: string[] = [
		"application-signals:BatchUpdateExclusionWindows",
	];
	/** IAM actions required for the CreateInstrumentationConfiguration API call. */
	static readonly CREATE_INSTRUMENTATION_CONFIGURATION: string[] = [
		"application-signals:CreateInstrumentationConfiguration",
		"application-signals:TagResource",
	];
	/** IAM actions required for the CreateServiceLevelObjective API call. */
	static readonly CREATE_SERVICE_LEVEL_OBJECTIVE: string[] = [
		"application-signals:CreateServiceLevelObjective",
		"application-signals:TagResource",
	];
	/** IAM actions required for the DeleteGroupingConfiguration API call. */
	static readonly DELETE_GROUPING_CONFIGURATION: string[] = [
		"application-signals:DeleteGroupingConfiguration",
	];
	/** IAM actions required for the DeleteInstrumentationConfiguration API call. */
	static readonly DELETE_INSTRUMENTATION_CONFIGURATION: string[] = [
		"application-signals:DeleteInstrumentationConfiguration",
	];
	/** IAM actions required for the DeleteServiceLevelObjective API call. */
	static readonly DELETE_SERVICE_LEVEL_OBJECTIVE: string[] = [
		"application-signals:DeleteServiceLevelObjective",
	];
	/** IAM actions required for the GetInstrumentationConfiguration API call. */
	static readonly GET_INSTRUMENTATION_CONFIGURATION: string[] = [
		"application-signals:GetInstrumentationConfiguration",
	];
	/** IAM actions required for the GetInstrumentationConfigurationStatus API call. */
	static readonly GET_INSTRUMENTATION_CONFIGURATION_STATUS: string[] = [
		"application-signals:GetInstrumentationConfigurationStatus",
	];
	/** IAM actions required for the GetService API call. */
	static readonly GET_SERVICE: string[] = ["application-signals:GetService"];
	/** IAM actions required for the GetServiceLevelObjective API call. */
	static readonly GET_SERVICE_LEVEL_OBJECTIVE: string[] = [
		"application-signals:GetServiceLevelObjective",
	];
	/** IAM actions required for the ListAuditFindings API call. */
	static readonly LIST_AUDIT_FINDINGS: string[] = [
		"application-signals:GetServiceLevelObjective",
		"application-signals:ListAuditFindings",
		"application-signals:ListServiceLevelObjectives",
	];
	/** IAM actions required for the ListEntityEvents API call. */
	static readonly LIST_ENTITY_EVENTS: string[] = [
		"application-signals:ListEntityEvents",
	];
	/** IAM actions required for the ListGroupingAttributeDefinitions API call. */
	static readonly LIST_GROUPING_ATTRIBUTE_DEFINITIONS: string[] = [
		"application-signals:ListGroupingAttributeDefinitions",
	];
	/** IAM actions required for the ListInstrumentationConfigurations API call. */
	static readonly LIST_INSTRUMENTATION_CONFIGURATIONS: string[] = [
		"application-signals:ListInstrumentationConfigurations",
	];
	/** IAM actions required for the ListServiceDependencies API call. */
	static readonly LIST_SERVICE_DEPENDENCIES: string[] = [
		"application-signals:ListServiceDependencies",
	];
	/** IAM actions required for the ListServiceDependents API call. */
	static readonly LIST_SERVICE_DEPENDENTS: string[] = [
		"application-signals:ListServiceDependents",
	];
	/** IAM actions required for the ListServiceLevelObjectiveExclusionWindows API call. */
	static readonly LIST_SERVICE_LEVEL_OBJECTIVE_EXCLUSION_WINDOWS: string[] = [
		"application-signals:ListServiceLevelObjectiveExclusionWindows",
	];
	/** IAM actions required for the ListServiceLevelObjectives API call. */
	static readonly LIST_SERVICE_LEVEL_OBJECTIVES: string[] = [
		"application-signals:ListServiceLevelObjectives",
	];
	/** IAM actions required for the ListServiceOperations API call. */
	static readonly LIST_SERVICE_OPERATIONS: string[] = [
		"application-signals:ListServiceOperations",
	];
	/** IAM actions required for the ListServiceStates API call. */
	static readonly LIST_SERVICE_STATES: string[] = [
		"application-signals:ListServiceStates",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly LIST_SERVICES: string[] = [
		"application-signals:ListServices",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"application-signals:ListTagsForResource",
	];
	/** IAM actions required for the PutGroupingConfiguration API call. */
	static readonly PUT_GROUPING_CONFIGURATION: string[] = [
		"application-signals:PutGroupingConfiguration",
	];
	/** IAM actions required for the ReportInstrumentationConfigurationStatus API call. */
	static readonly REPORT_INSTRUMENTATION_CONFIGURATION_STATUS: string[] = [
		"application-signals:ReportInstrumentationConfigurationStatus",
	];
	/** IAM actions required for the StartDiscovery API call. */
	static readonly START_DISCOVERY: string[] = [
		"application-signals:StartDiscovery",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["application-signals:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"application-signals:UntagResource",
	];
	/** IAM actions required for the UpdateServiceLevelObjective API call. */
	static readonly UPDATE_SERVICE_LEVEL_OBJECTIVE: string[] = [
		"application-signals:UpdateServiceLevelObjective",
	];
}

/**
 * Condition key constants and builders for application-signals.
 */
export class ApplicationSignalsConditions {
	/** Condition keys applicable to the CreateInstrumentationConfiguration action. */
	static readonly CREATE_INSTRUMENTATION_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateServiceLevelObjective action. */
	static readonly CREATE_SERVICE_LEVEL_OBJECTIVE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
