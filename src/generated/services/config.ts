// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/config.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the config service.
 */
export class ConfigActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "config";

	/** [Write] config:AssociateResourceTypes */
	static readonly ASSOCIATE_RESOURCE_TYPES = "config:AssociateResourceTypes";
	/** [Read] config:BatchGetAggregateResourceConfig */
	static readonly BATCH_GET_AGGREGATE_RESOURCE_CONFIG =
		"config:BatchGetAggregateResourceConfig";
	/** [Read] config:BatchGetResourceConfig */
	static readonly BATCH_GET_RESOURCE_CONFIG = "config:BatchGetResourceConfig";
	/** [Write] config:DeleteAggregationAuthorization */
	static readonly DELETE_AGGREGATION_AUTHORIZATION =
		"config:DeleteAggregationAuthorization";
	/** [Write] config:DeleteConfigRule */
	static readonly DELETE_CONFIG_RULE = "config:DeleteConfigRule";
	/** [Write] config:DeleteConfigurationAggregator */
	static readonly DELETE_CONFIGURATION_AGGREGATOR =
		"config:DeleteConfigurationAggregator";
	/** [Write] config:DeleteConfigurationRecorder */
	static readonly DELETE_CONFIGURATION_RECORDER =
		"config:DeleteConfigurationRecorder";
	/** [Write] config:DeleteConformancePack */
	static readonly DELETE_CONFORMANCE_PACK = "config:DeleteConformancePack";
	/** [Write] config:DeleteConnector */
	static readonly DELETE_CONNECTOR = "config:DeleteConnector";
	/** [Write] config:DeleteDeliveryChannel */
	static readonly DELETE_DELIVERY_CHANNEL = "config:DeleteDeliveryChannel";
	/** [Write] config:DeleteEvaluationResults */
	static readonly DELETE_EVALUATION_RESULTS = "config:DeleteEvaluationResults";
	/** [Write] config:DeleteOrganizationConfigRule */
	static readonly DELETE_ORGANIZATION_CONFIG_RULE =
		"config:DeleteOrganizationConfigRule";
	/** [Write] config:DeleteOrganizationConformancePack */
	static readonly DELETE_ORGANIZATION_CONFORMANCE_PACK =
		"config:DeleteOrganizationConformancePack";
	/** [Write] config:DeletePendingAggregationRequest */
	static readonly DELETE_PENDING_AGGREGATION_REQUEST =
		"config:DeletePendingAggregationRequest";
	/** [Write] config:DeleteRemediationConfiguration */
	static readonly DELETE_REMEDIATION_CONFIGURATION =
		"config:DeleteRemediationConfiguration";
	/** [Write] config:DeleteRemediationExceptions */
	static readonly DELETE_REMEDIATION_EXCEPTIONS =
		"config:DeleteRemediationExceptions";
	/** [Write] config:DeleteResourceConfig */
	static readonly DELETE_RESOURCE_CONFIG = "config:DeleteResourceConfig";
	/** [Write] config:DeleteRetentionConfiguration */
	static readonly DELETE_RETENTION_CONFIGURATION =
		"config:DeleteRetentionConfiguration";
	/** [Write] config:DeleteServiceLinkedConfigurationRecorder */
	static readonly DELETE_SERVICE_LINKED_CONFIGURATION_RECORDER =
		"config:DeleteServiceLinkedConfigurationRecorder";
	/** [Write] config:DeleteStoredQuery */
	static readonly DELETE_STORED_QUERY = "config:DeleteStoredQuery";
	/** [Read] config:DeliverConfigSnapshot */
	static readonly DELIVER_CONFIG_SNAPSHOT = "config:DeliverConfigSnapshot";
	/** [Read] config:DescribeAggregateComplianceByConfigRules */
	static readonly DESCRIBE_AGGREGATE_COMPLIANCE_BY_CONFIG_RULES =
		"config:DescribeAggregateComplianceByConfigRules";
	/** [Read] config:DescribeAggregateComplianceByConformancePacks */
	static readonly DESCRIBE_AGGREGATE_COMPLIANCE_BY_CONFORMANCE_PACKS =
		"config:DescribeAggregateComplianceByConformancePacks";
	/** [List] config:DescribeAggregationAuthorizations */
	static readonly DESCRIBE_AGGREGATION_AUTHORIZATIONS =
		"config:DescribeAggregationAuthorizations";
	/** [Read] config:DescribeComplianceByConfigRule */
	static readonly DESCRIBE_COMPLIANCE_BY_CONFIG_RULE =
		"config:DescribeComplianceByConfigRule";
	/** [Read] config:DescribeComplianceByResource */
	static readonly DESCRIBE_COMPLIANCE_BY_RESOURCE =
		"config:DescribeComplianceByResource";
	/** [Read] config:DescribeConfigRuleEvaluationStatus */
	static readonly DESCRIBE_CONFIG_RULE_EVALUATION_STATUS =
		"config:DescribeConfigRuleEvaluationStatus";
	/** [List] config:DescribeConfigRules */
	static readonly DESCRIBE_CONFIG_RULES = "config:DescribeConfigRules";
	/** [Read] config:DescribeConfigurationAggregatorSourcesStatus */
	static readonly DESCRIBE_CONFIGURATION_AGGREGATOR_SOURCES_STATUS =
		"config:DescribeConfigurationAggregatorSourcesStatus";
	/** [List] config:DescribeConfigurationAggregators */
	static readonly DESCRIBE_CONFIGURATION_AGGREGATORS =
		"config:DescribeConfigurationAggregators";
	/** [Read] config:DescribeConfigurationRecorderStatus */
	static readonly DESCRIBE_CONFIGURATION_RECORDER_STATUS =
		"config:DescribeConfigurationRecorderStatus";
	/** [Read] config:DescribeConfigurationRecorders */
	static readonly DESCRIBE_CONFIGURATION_RECORDERS =
		"config:DescribeConfigurationRecorders";
	/** [Read] config:DescribeConformancePackCompliance */
	static readonly DESCRIBE_CONFORMANCE_PACK_COMPLIANCE =
		"config:DescribeConformancePackCompliance";
	/** [Read] config:DescribeConformancePackStatus */
	static readonly DESCRIBE_CONFORMANCE_PACK_STATUS =
		"config:DescribeConformancePackStatus";
	/** [List] config:DescribeConformancePacks */
	static readonly DESCRIBE_CONFORMANCE_PACKS =
		"config:DescribeConformancePacks";
	/** [Read] config:DescribeDeliveryChannelStatus */
	static readonly DESCRIBE_DELIVERY_CHANNEL_STATUS =
		"config:DescribeDeliveryChannelStatus";
	/** [List] config:DescribeDeliveryChannels */
	static readonly DESCRIBE_DELIVERY_CHANNELS =
		"config:DescribeDeliveryChannels";
	/** [Read] config:DescribeOrganizationConfigRuleStatuses */
	static readonly DESCRIBE_ORGANIZATION_CONFIG_RULE_STATUSES =
		"config:DescribeOrganizationConfigRuleStatuses";
	/** [List] config:DescribeOrganizationConfigRules */
	static readonly DESCRIBE_ORGANIZATION_CONFIG_RULES =
		"config:DescribeOrganizationConfigRules";
	/** [Read] config:DescribeOrganizationConformancePackStatuses */
	static readonly DESCRIBE_ORGANIZATION_CONFORMANCE_PACK_STATUSES =
		"config:DescribeOrganizationConformancePackStatuses";
	/** [List] config:DescribeOrganizationConformancePacks */
	static readonly DESCRIBE_ORGANIZATION_CONFORMANCE_PACKS =
		"config:DescribeOrganizationConformancePacks";
	/** [List] config:DescribePendingAggregationRequests */
	static readonly DESCRIBE_PENDING_AGGREGATION_REQUESTS =
		"config:DescribePendingAggregationRequests";
	/** [List] config:DescribeRemediationConfigurations */
	static readonly DESCRIBE_REMEDIATION_CONFIGURATIONS =
		"config:DescribeRemediationConfigurations";
	/** [List] config:DescribeRemediationExceptions */
	static readonly DESCRIBE_REMEDIATION_EXCEPTIONS =
		"config:DescribeRemediationExceptions";
	/** [Read] config:DescribeRemediationExecutionStatus */
	static readonly DESCRIBE_REMEDIATION_EXECUTION_STATUS =
		"config:DescribeRemediationExecutionStatus";
	/** [List] config:DescribeRetentionConfigurations */
	static readonly DESCRIBE_RETENTION_CONFIGURATIONS =
		"config:DescribeRetentionConfigurations";
	/** [Write] config:DisassociateResourceTypes */
	static readonly DISASSOCIATE_RESOURCE_TYPES =
		"config:DisassociateResourceTypes";
	/** [Read] config:GetAggregateComplianceDetailsByConfigRule */
	static readonly GET_AGGREGATE_COMPLIANCE_DETAILS_BY_CONFIG_RULE =
		"config:GetAggregateComplianceDetailsByConfigRule";
	/** [Read] config:GetAggregateConfigRuleComplianceSummary */
	static readonly GET_AGGREGATE_CONFIG_RULE_COMPLIANCE_SUMMARY =
		"config:GetAggregateConfigRuleComplianceSummary";
	/** [Read] config:GetAggregateConformancePackComplianceSummary */
	static readonly GET_AGGREGATE_CONFORMANCE_PACK_COMPLIANCE_SUMMARY =
		"config:GetAggregateConformancePackComplianceSummary";
	/** [Read] config:GetAggregateDiscoveredResourceCounts */
	static readonly GET_AGGREGATE_DISCOVERED_RESOURCE_COUNTS =
		"config:GetAggregateDiscoveredResourceCounts";
	/** [Read] config:GetAggregateResourceConfig */
	static readonly GET_AGGREGATE_RESOURCE_CONFIG =
		"config:GetAggregateResourceConfig";
	/** [Read] config:GetComplianceDetailsByConfigRule */
	static readonly GET_COMPLIANCE_DETAILS_BY_CONFIG_RULE =
		"config:GetComplianceDetailsByConfigRule";
	/** [Read] config:GetComplianceDetailsByResource */
	static readonly GET_COMPLIANCE_DETAILS_BY_RESOURCE =
		"config:GetComplianceDetailsByResource";
	/** [Read] config:GetComplianceSummaryByConfigRule */
	static readonly GET_COMPLIANCE_SUMMARY_BY_CONFIG_RULE =
		"config:GetComplianceSummaryByConfigRule";
	/** [Read] config:GetComplianceSummaryByResourceType */
	static readonly GET_COMPLIANCE_SUMMARY_BY_RESOURCE_TYPE =
		"config:GetComplianceSummaryByResourceType";
	/** [Read] config:GetConformancePackComplianceDetails */
	static readonly GET_CONFORMANCE_PACK_COMPLIANCE_DETAILS =
		"config:GetConformancePackComplianceDetails";
	/** [Read] config:GetConformancePackComplianceSummary */
	static readonly GET_CONFORMANCE_PACK_COMPLIANCE_SUMMARY =
		"config:GetConformancePackComplianceSummary";
	/** [Read] config:GetConnector */
	static readonly GET_CONNECTOR = "config:GetConnector";
	/** [Read] config:GetCustomRulePolicy */
	static readonly GET_CUSTOM_RULE_POLICY = "config:GetCustomRulePolicy";
	/** [Read] config:GetDiscoveredResourceCounts */
	static readonly GET_DISCOVERED_RESOURCE_COUNTS =
		"config:GetDiscoveredResourceCounts";
	/** [Read] config:GetOrganizationConfigRuleDetailedStatus */
	static readonly GET_ORGANIZATION_CONFIG_RULE_DETAILED_STATUS =
		"config:GetOrganizationConfigRuleDetailedStatus";
	/** [Read] config:GetOrganizationConformancePackDetailedStatus */
	static readonly GET_ORGANIZATION_CONFORMANCE_PACK_DETAILED_STATUS =
		"config:GetOrganizationConformancePackDetailedStatus";
	/** [Read] config:GetOrganizationCustomRulePolicy */
	static readonly GET_ORGANIZATION_CUSTOM_RULE_POLICY =
		"config:GetOrganizationCustomRulePolicy";
	/** [Read] config:GetResourceConfigHistory */
	static readonly GET_RESOURCE_CONFIG_HISTORY =
		"config:GetResourceConfigHistory";
	/** [Read] config:GetResourceEvaluationSummary */
	static readonly GET_RESOURCE_EVALUATION_SUMMARY =
		"config:GetResourceEvaluationSummary";
	/** [Read] config:GetStoredQuery */
	static readonly GET_STORED_QUERY = "config:GetStoredQuery";
	/** [List] config:ListAggregateDiscoveredResources */
	static readonly LIST_AGGREGATE_DISCOVERED_RESOURCES =
		"config:ListAggregateDiscoveredResources";
	/** [List] config:ListConfigurationRecorders */
	static readonly LIST_CONFIGURATION_RECORDERS =
		"config:ListConfigurationRecorders";
	/** [List] config:ListConformancePackComplianceScores */
	static readonly LIST_CONFORMANCE_PACK_COMPLIANCE_SCORES =
		"config:ListConformancePackComplianceScores";
	/** [List] config:ListConnectors */
	static readonly LIST_CONNECTORS = "config:ListConnectors";
	/** [List] config:ListDiscoveredResources */
	static readonly LIST_DISCOVERED_RESOURCES = "config:ListDiscoveredResources";
	/** [List] config:ListResourceEvaluations */
	static readonly LIST_RESOURCE_EVALUATIONS = "config:ListResourceEvaluations";
	/** [List] config:ListStoredQueries */
	static readonly LIST_STORED_QUERIES = "config:ListStoredQueries";
	/** [Read] config:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "config:ListTagsForResource";
	/** [Write] config:PutAggregationAuthorization */
	static readonly PUT_AGGREGATION_AUTHORIZATION =
		"config:PutAggregationAuthorization";
	/** [Write] config:PutConfigRule */
	static readonly PUT_CONFIG_RULE = "config:PutConfigRule";
	/** [Write] config:PutConfigurationAggregator */
	static readonly PUT_CONFIGURATION_AGGREGATOR =
		"config:PutConfigurationAggregator";
	/** [Write] config:PutConfigurationRecorder */
	static readonly PUT_CONFIGURATION_RECORDER =
		"config:PutConfigurationRecorder";
	/** [Write] config:PutConformancePack */
	static readonly PUT_CONFORMANCE_PACK = "config:PutConformancePack";
	/** [Write] config:PutConnector */
	static readonly PUT_CONNECTOR = "config:PutConnector";
	/** [Write] config:PutDeliveryChannel */
	static readonly PUT_DELIVERY_CHANNEL = "config:PutDeliveryChannel";
	/** [Write] config:PutEvaluations */
	static readonly PUT_EVALUATIONS = "config:PutEvaluations";
	/** [Write] config:PutExternalEvaluation */
	static readonly PUT_EXTERNAL_EVALUATION = "config:PutExternalEvaluation";
	/** [Write] config:PutOrganizationConfigRule */
	static readonly PUT_ORGANIZATION_CONFIG_RULE =
		"config:PutOrganizationConfigRule";
	/** [Write] config:PutOrganizationConformancePack */
	static readonly PUT_ORGANIZATION_CONFORMANCE_PACK =
		"config:PutOrganizationConformancePack";
	/** [Write] config:PutRemediationConfigurations */
	static readonly PUT_REMEDIATION_CONFIGURATIONS =
		"config:PutRemediationConfigurations";
	/** [Write] config:PutRemediationExceptions */
	static readonly PUT_REMEDIATION_EXCEPTIONS =
		"config:PutRemediationExceptions";
	/** [Write] config:PutResourceConfig */
	static readonly PUT_RESOURCE_CONFIG = "config:PutResourceConfig";
	/** [Write] config:PutRetentionConfiguration */
	static readonly PUT_RETENTION_CONFIGURATION =
		"config:PutRetentionConfiguration";
	/** [Write] config:PutServiceLinkedConfigurationRecorder */
	static readonly PUT_SERVICE_LINKED_CONFIGURATION_RECORDER =
		"config:PutServiceLinkedConfigurationRecorder";
	/** [Write] config:PutStoredQuery */
	static readonly PUT_STORED_QUERY = "config:PutStoredQuery";
	/** [Write] config:PutThirdPartyServiceLinkedConfigurationRecorder */
	static readonly PUT_THIRD_PARTY_SERVICE_LINKED_CONFIGURATION_RECORDER =
		"config:PutThirdPartyServiceLinkedConfigurationRecorder";
	/** [Read] config:SelectAggregateResourceConfig */
	static readonly SELECT_AGGREGATE_RESOURCE_CONFIG =
		"config:SelectAggregateResourceConfig";
	/** [Read] config:SelectResourceConfig */
	static readonly SELECT_RESOURCE_CONFIG = "config:SelectResourceConfig";
	/** [Write] config:StartConfigRulesEvaluation */
	static readonly START_CONFIG_RULES_EVALUATION =
		"config:StartConfigRulesEvaluation";
	/** [Write] config:StartConfigurationRecorder */
	static readonly START_CONFIGURATION_RECORDER =
		"config:StartConfigurationRecorder";
	/** [Write] config:StartRemediationExecution */
	static readonly START_REMEDIATION_EXECUTION =
		"config:StartRemediationExecution";
	/** [Write] config:StartResourceEvaluation */
	static readonly START_RESOURCE_EVALUATION = "config:StartResourceEvaluation";
	/** [Write] config:StopConfigurationRecorder */
	static readonly STOP_CONFIGURATION_RECORDER =
		"config:StopConfigurationRecorder";
	/** [Tagging] config:TagResource */
	static readonly TAG_RESOURCE = "config:TagResource";
	/** [Tagging] config:UntagResource */
	static readonly UNTAG_RESOURCE = "config:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ConfigActions.BATCH_GET_AGGREGATE_RESOURCE_CONFIG,
		ConfigActions.BATCH_GET_RESOURCE_CONFIG,
		ConfigActions.DELIVER_CONFIG_SNAPSHOT,
		ConfigActions.DESCRIBE_AGGREGATE_COMPLIANCE_BY_CONFIG_RULES,
		ConfigActions.DESCRIBE_AGGREGATE_COMPLIANCE_BY_CONFORMANCE_PACKS,
		ConfigActions.DESCRIBE_COMPLIANCE_BY_CONFIG_RULE,
		ConfigActions.DESCRIBE_COMPLIANCE_BY_RESOURCE,
		ConfigActions.DESCRIBE_CONFIG_RULE_EVALUATION_STATUS,
		ConfigActions.DESCRIBE_CONFIGURATION_AGGREGATOR_SOURCES_STATUS,
		ConfigActions.DESCRIBE_CONFIGURATION_RECORDER_STATUS,
		ConfigActions.DESCRIBE_CONFIGURATION_RECORDERS,
		ConfigActions.DESCRIBE_CONFORMANCE_PACK_COMPLIANCE,
		ConfigActions.DESCRIBE_CONFORMANCE_PACK_STATUS,
		ConfigActions.DESCRIBE_DELIVERY_CHANNEL_STATUS,
		ConfigActions.DESCRIBE_ORGANIZATION_CONFIG_RULE_STATUSES,
		ConfigActions.DESCRIBE_ORGANIZATION_CONFORMANCE_PACK_STATUSES,
		ConfigActions.DESCRIBE_REMEDIATION_EXECUTION_STATUS,
		ConfigActions.GET_AGGREGATE_COMPLIANCE_DETAILS_BY_CONFIG_RULE,
		ConfigActions.GET_AGGREGATE_CONFIG_RULE_COMPLIANCE_SUMMARY,
		ConfigActions.GET_AGGREGATE_CONFORMANCE_PACK_COMPLIANCE_SUMMARY,
		ConfigActions.GET_AGGREGATE_DISCOVERED_RESOURCE_COUNTS,
		ConfigActions.GET_AGGREGATE_RESOURCE_CONFIG,
		ConfigActions.GET_COMPLIANCE_DETAILS_BY_CONFIG_RULE,
		ConfigActions.GET_COMPLIANCE_DETAILS_BY_RESOURCE,
		ConfigActions.GET_COMPLIANCE_SUMMARY_BY_CONFIG_RULE,
		ConfigActions.GET_COMPLIANCE_SUMMARY_BY_RESOURCE_TYPE,
		ConfigActions.GET_CONFORMANCE_PACK_COMPLIANCE_DETAILS,
		ConfigActions.GET_CONFORMANCE_PACK_COMPLIANCE_SUMMARY,
		ConfigActions.GET_CONNECTOR,
		ConfigActions.GET_CUSTOM_RULE_POLICY,
		ConfigActions.GET_DISCOVERED_RESOURCE_COUNTS,
		ConfigActions.GET_ORGANIZATION_CONFIG_RULE_DETAILED_STATUS,
		ConfigActions.GET_ORGANIZATION_CONFORMANCE_PACK_DETAILED_STATUS,
		ConfigActions.GET_ORGANIZATION_CUSTOM_RULE_POLICY,
		ConfigActions.GET_RESOURCE_CONFIG_HISTORY,
		ConfigActions.GET_RESOURCE_EVALUATION_SUMMARY,
		ConfigActions.GET_STORED_QUERY,
		ConfigActions.LIST_TAGS_FOR_RESOURCE,
		ConfigActions.SELECT_AGGREGATE_RESOURCE_CONFIG,
		ConfigActions.SELECT_RESOURCE_CONFIG,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ConfigActions.ASSOCIATE_RESOURCE_TYPES,
		ConfigActions.DELETE_AGGREGATION_AUTHORIZATION,
		ConfigActions.DELETE_CONFIG_RULE,
		ConfigActions.DELETE_CONFIGURATION_AGGREGATOR,
		ConfigActions.DELETE_CONFIGURATION_RECORDER,
		ConfigActions.DELETE_CONFORMANCE_PACK,
		ConfigActions.DELETE_CONNECTOR,
		ConfigActions.DELETE_DELIVERY_CHANNEL,
		ConfigActions.DELETE_EVALUATION_RESULTS,
		ConfigActions.DELETE_ORGANIZATION_CONFIG_RULE,
		ConfigActions.DELETE_ORGANIZATION_CONFORMANCE_PACK,
		ConfigActions.DELETE_PENDING_AGGREGATION_REQUEST,
		ConfigActions.DELETE_REMEDIATION_CONFIGURATION,
		ConfigActions.DELETE_REMEDIATION_EXCEPTIONS,
		ConfigActions.DELETE_RESOURCE_CONFIG,
		ConfigActions.DELETE_RETENTION_CONFIGURATION,
		ConfigActions.DELETE_SERVICE_LINKED_CONFIGURATION_RECORDER,
		ConfigActions.DELETE_STORED_QUERY,
		ConfigActions.DISASSOCIATE_RESOURCE_TYPES,
		ConfigActions.PUT_AGGREGATION_AUTHORIZATION,
		ConfigActions.PUT_CONFIG_RULE,
		ConfigActions.PUT_CONFIGURATION_AGGREGATOR,
		ConfigActions.PUT_CONFIGURATION_RECORDER,
		ConfigActions.PUT_CONFORMANCE_PACK,
		ConfigActions.PUT_CONNECTOR,
		ConfigActions.PUT_DELIVERY_CHANNEL,
		ConfigActions.PUT_EVALUATIONS,
		ConfigActions.PUT_EXTERNAL_EVALUATION,
		ConfigActions.PUT_ORGANIZATION_CONFIG_RULE,
		ConfigActions.PUT_ORGANIZATION_CONFORMANCE_PACK,
		ConfigActions.PUT_REMEDIATION_CONFIGURATIONS,
		ConfigActions.PUT_REMEDIATION_EXCEPTIONS,
		ConfigActions.PUT_RESOURCE_CONFIG,
		ConfigActions.PUT_RETENTION_CONFIGURATION,
		ConfigActions.PUT_SERVICE_LINKED_CONFIGURATION_RECORDER,
		ConfigActions.PUT_STORED_QUERY,
		ConfigActions.PUT_THIRD_PARTY_SERVICE_LINKED_CONFIGURATION_RECORDER,
		ConfigActions.START_CONFIG_RULES_EVALUATION,
		ConfigActions.START_CONFIGURATION_RECORDER,
		ConfigActions.START_REMEDIATION_EXECUTION,
		ConfigActions.START_RESOURCE_EVALUATION,
		ConfigActions.STOP_CONFIGURATION_RECORDER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ConfigActions.DESCRIBE_AGGREGATION_AUTHORIZATIONS,
		ConfigActions.DESCRIBE_CONFIG_RULES,
		ConfigActions.DESCRIBE_CONFIGURATION_AGGREGATORS,
		ConfigActions.DESCRIBE_CONFORMANCE_PACKS,
		ConfigActions.DESCRIBE_DELIVERY_CHANNELS,
		ConfigActions.DESCRIBE_ORGANIZATION_CONFIG_RULES,
		ConfigActions.DESCRIBE_ORGANIZATION_CONFORMANCE_PACKS,
		ConfigActions.DESCRIBE_PENDING_AGGREGATION_REQUESTS,
		ConfigActions.DESCRIBE_REMEDIATION_CONFIGURATIONS,
		ConfigActions.DESCRIBE_REMEDIATION_EXCEPTIONS,
		ConfigActions.DESCRIBE_RETENTION_CONFIGURATIONS,
		ConfigActions.LIST_AGGREGATE_DISCOVERED_RESOURCES,
		ConfigActions.LIST_CONFIGURATION_RECORDERS,
		ConfigActions.LIST_CONFORMANCE_PACK_COMPLIANCE_SCORES,
		ConfigActions.LIST_CONNECTORS,
		ConfigActions.LIST_DISCOVERED_RESOURCES,
		ConfigActions.LIST_RESOURCE_EVALUATIONS,
		ConfigActions.LIST_STORED_QUERIES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ConfigActions.TAG_RESOURCE,
		ConfigActions.UNTAG_RESOURCE,
	];
}

const AggregationAuthorizationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):aggregation-authorization/(?<aggregatorAccount>[^:/?]+)/(?<aggregatorRegion>[^:/?]+)$",
);
const ConfigRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):config-rule/(?<configRuleId>[^:/?]+)$",
);
const ConfigurationAggregatorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):config-aggregator/(?<aggregatorId>[^:/?]+)$",
);
const ConfigurationRecorderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):configuration-recorder/(?<recorderName>[^:/?]+)/(?<recorderId>[^:/?]+)$",
);
const ConformancePackArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):conformance-pack/(?<conformancePackName>[^:/?]+)/(?<conformancePackId>[^:/?]+)$",
);
const ConnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):connector/(?<provider>[^:/?]+)/(?<providerId>[^:/?]+)/(?<connectorId>[^:/?]+)$",
);
const OrganizationConfigRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):organization-config-rule/(?<organizationConfigRuleId>[^:/?]+)$",
);
const OrganizationConformancePackArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):organization-conformance-pack/(?<organizationConformancePackId>[^:/?]+)$",
);
const RemediationConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):remediation-configuration/(?<remediationConfigurationId>[^:/?]+)$",
);
const StoredQueryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):stored-query/(?<storedQueryName>[^:/?]+)/(?<storedQueryId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for config resources.
 */
export class ConfigResources {
	/**
	 * Builds an ARN for the AggregationAuthorization resource.
	 */
	static aggregationAuthorization(props: {
		/** The AggregatorAccount component of the ARN. */
		readonly aggregatorAccount: string;
		/** The AggregatorRegion component of the ARN. */
		readonly aggregatorRegion: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:config:${props.region ?? "*"}:${props.account ?? "*"}:aggregation-authorization/${props.aggregatorAccount}/${props.aggregatorRegion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AggregationAuthorization resource.
	 */
	static isValidAggregationAuthorizationArn(arn: string): boolean {
		return AggregationAuthorizationArnRegex.test(arn);
	}

	/**
	 * Parses a AggregationAuthorization ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAggregationAuthorizationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		aggregatorAccount: string;
		aggregatorRegion: string;
	} {
		const match = AggregationAuthorizationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AggregationAuthorization ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			aggregatorAccount: match.groups!.aggregatorAccount,
			aggregatorRegion: match.groups!.aggregatorRegion,
		};
	}

	/**
	 * Builds an ARN for the ConfigRule resource.
	 */
	static configRule(props: {
		/** The ConfigRuleId component of the ARN. */
		readonly configRuleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:config:${props.region ?? "*"}:${props.account ?? "*"}:config-rule/${props.configRuleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ConfigRule resource.
	 */
	static isValidConfigRuleArn(arn: string): boolean {
		return ConfigRuleArnRegex.test(arn);
	}

	/**
	 * Parses a ConfigRule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		configRuleId: string;
	} {
		const match = ConfigRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ConfigRule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			configRuleId: match.groups!.configRuleId,
		};
	}

	/**
	 * Builds an ARN for the ConfigurationAggregator resource.
	 */
	static configurationAggregator(props: {
		/** The AggregatorId component of the ARN. */
		readonly aggregatorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:config:${props.region ?? "*"}:${props.account ?? "*"}:config-aggregator/${props.aggregatorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ConfigurationAggregator resource.
	 */
	static isValidConfigurationAggregatorArn(arn: string): boolean {
		return ConfigurationAggregatorArnRegex.test(arn);
	}

	/**
	 * Parses a ConfigurationAggregator ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationAggregatorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		aggregatorId: string;
	} {
		const match = ConfigurationAggregatorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ConfigurationAggregator ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			aggregatorId: match.groups!.aggregatorId,
		};
	}

	/**
	 * Builds an ARN for the ConfigurationRecorder resource.
	 */
	static configurationRecorder(props: {
		/** The RecorderName component of the ARN. */
		readonly recorderName: string;
		/** The RecorderId component of the ARN. */
		readonly recorderId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:config:${props.region ?? "*"}:${props.account ?? "*"}:configuration-recorder/${props.recorderName}/${props.recorderId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ConfigurationRecorder resource.
	 */
	static isValidConfigurationRecorderArn(arn: string): boolean {
		return ConfigurationRecorderArnRegex.test(arn);
	}

	/**
	 * Parses a ConfigurationRecorder ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationRecorderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		recorderName: string;
		recorderId: string;
	} {
		const match = ConfigurationRecorderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ConfigurationRecorder ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			recorderName: match.groups!.recorderName,
			recorderId: match.groups!.recorderId,
		};
	}

	/**
	 * Builds an ARN for the ConformancePack resource.
	 */
	static conformancePack(props: {
		/** The ConformancePackName component of the ARN. */
		readonly conformancePackName: string;
		/** The ConformancePackId component of the ARN. */
		readonly conformancePackId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:config:${props.region ?? "*"}:${props.account ?? "*"}:conformance-pack/${props.conformancePackName}/${props.conformancePackId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ConformancePack resource.
	 */
	static isValidConformancePackArn(arn: string): boolean {
		return ConformancePackArnRegex.test(arn);
	}

	/**
	 * Parses a ConformancePack ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConformancePackArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		conformancePackName: string;
		conformancePackId: string;
	} {
		const match = ConformancePackArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ConformancePack ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			conformancePackName: match.groups!.conformancePackName,
			conformancePackId: match.groups!.conformancePackId,
		};
	}

	/**
	 * Builds an ARN for the Connector resource.
	 */
	static connector(props: {
		/** The Provider component of the ARN. */
		readonly provider: string;
		/** The ProviderId component of the ARN. */
		readonly providerId: string;
		/** The ConnectorId component of the ARN. */
		readonly connectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:config:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.provider}/${props.providerId}/${props.connectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Connector resource.
	 */
	static isValidConnectorArn(arn: string): boolean {
		return ConnectorArnRegex.test(arn);
	}

	/**
	 * Parses a Connector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		provider: string;
		providerId: string;
		connectorId: string;
	} {
		const match = ConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Connector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			provider: match.groups!.provider,
			providerId: match.groups!.providerId,
			connectorId: match.groups!.connectorId,
		};
	}

	/**
	 * Builds an ARN for the OrganizationConfigRule resource.
	 */
	static organizationConfigRule(props: {
		/** The OrganizationConfigRuleId component of the ARN. */
		readonly organizationConfigRuleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:config:${props.region ?? "*"}:${props.account ?? "*"}:organization-config-rule/${props.organizationConfigRuleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the OrganizationConfigRule resource.
	 */
	static isValidOrganizationConfigRuleArn(arn: string): boolean {
		return OrganizationConfigRuleArnRegex.test(arn);
	}

	/**
	 * Parses a OrganizationConfigRule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOrganizationConfigRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		organizationConfigRuleId: string;
	} {
		const match = OrganizationConfigRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid OrganizationConfigRule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			organizationConfigRuleId: match.groups!.organizationConfigRuleId,
		};
	}

	/**
	 * Builds an ARN for the OrganizationConformancePack resource.
	 */
	static organizationConformancePack(props: {
		/** The OrganizationConformancePackId component of the ARN. */
		readonly organizationConformancePackId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:config:${props.region ?? "*"}:${props.account ?? "*"}:organization-conformance-pack/${props.organizationConformancePackId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the OrganizationConformancePack resource.
	 */
	static isValidOrganizationConformancePackArn(arn: string): boolean {
		return OrganizationConformancePackArnRegex.test(arn);
	}

	/**
	 * Parses a OrganizationConformancePack ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOrganizationConformancePackArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		organizationConformancePackId: string;
	} {
		const match = OrganizationConformancePackArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid OrganizationConformancePack ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			organizationConformancePackId:
				match.groups!.organizationConformancePackId,
		};
	}

	/**
	 * Builds an ARN for the RemediationConfiguration resource.
	 */
	static remediationConfiguration(props: {
		/** The RemediationConfigurationId component of the ARN. */
		readonly remediationConfigurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:config:${props.region ?? "*"}:${props.account ?? "*"}:remediation-configuration/${props.remediationConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RemediationConfiguration resource.
	 */
	static isValidRemediationConfigurationArn(arn: string): boolean {
		return RemediationConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a RemediationConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRemediationConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		remediationConfigurationId: string;
	} {
		const match = RemediationConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RemediationConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			remediationConfigurationId: match.groups!.remediationConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the StoredQuery resource.
	 */
	static storedQuery(props: {
		/** The StoredQueryName component of the ARN. */
		readonly storedQueryName: string;
		/** The StoredQueryId component of the ARN. */
		readonly storedQueryId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:config:${props.region ?? "*"}:${props.account ?? "*"}:stored-query/${props.storedQueryName}/${props.storedQueryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the StoredQuery resource.
	 */
	static isValidStoredQueryArn(arn: string): boolean {
		return StoredQueryArnRegex.test(arn);
	}

	/**
	 * Parses a StoredQuery ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStoredQueryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		storedQueryName: string;
		storedQueryId: string;
	} {
		const match = StoredQueryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid StoredQuery ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			storedQueryName: match.groups!.storedQueryName,
			storedQueryId: match.groups!.storedQueryId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for config.
 */
export class ConfigOperations {
	/** IAM actions required for the AssociateResourceTypes API call. */
	static readonly ASSOCIATE_RESOURCE_TYPES: string[] = [
		"config:AssociateResourceTypes",
	];
	/** IAM actions required for the BatchGetAggregateResourceConfig API call. */
	static readonly BATCH_GET_AGGREGATE_RESOURCE_CONFIG: string[] = [
		"config:BatchGetAggregateResourceConfig",
	];
	/** IAM actions required for the BatchGetResourceConfig API call. */
	static readonly BATCH_GET_RESOURCE_CONFIG: string[] = [
		"config:BatchGetResourceConfig",
	];
	/** IAM actions required for the DeleteAggregationAuthorization API call. */
	static readonly DELETE_AGGREGATION_AUTHORIZATION: string[] = [
		"config:DeleteAggregationAuthorization",
	];
	/** IAM actions required for the DeleteConfigRule API call. */
	static readonly DELETE_CONFIG_RULE: string[] = ["config:DeleteConfigRule"];
	/** IAM actions required for the DeleteConfigurationAggregator API call. */
	static readonly DELETE_CONFIGURATION_AGGREGATOR: string[] = [
		"config:DeleteConfigurationAggregator",
	];
	/** IAM actions required for the DeleteConfigurationRecorder API call. */
	static readonly DELETE_CONFIGURATION_RECORDER: string[] = [
		"config:DeleteConfigurationRecorder",
	];
	/** IAM actions required for the DeleteConformancePack API call. */
	static readonly DELETE_CONFORMANCE_PACK: string[] = [
		"config:DeleteConformancePack",
	];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DELETE_CONNECTOR: string[] = ["config:DeleteConnector"];
	/** IAM actions required for the DeleteDeliveryChannel API call. */
	static readonly DELETE_DELIVERY_CHANNEL: string[] = [
		"config:DeleteDeliveryChannel",
	];
	/** IAM actions required for the DeleteEvaluationResults API call. */
	static readonly DELETE_EVALUATION_RESULTS: string[] = [
		"config:DeleteEvaluationResults",
	];
	/** IAM actions required for the DeleteOrganizationConfigRule API call. */
	static readonly DELETE_ORGANIZATION_CONFIG_RULE: string[] = [
		"config:DeleteOrganizationConfigRule",
	];
	/** IAM actions required for the DeleteOrganizationConformancePack API call. */
	static readonly DELETE_ORGANIZATION_CONFORMANCE_PACK: string[] = [
		"config:DeleteOrganizationConformancePack",
	];
	/** IAM actions required for the DeletePendingAggregationRequest API call. */
	static readonly DELETE_PENDING_AGGREGATION_REQUEST: string[] = [
		"config:DeletePendingAggregationRequest",
	];
	/** IAM actions required for the DeleteRemediationConfiguration API call. */
	static readonly DELETE_REMEDIATION_CONFIGURATION: string[] = [
		"config:DeleteRemediationConfiguration",
	];
	/** IAM actions required for the DeleteRemediationExceptions API call. */
	static readonly DELETE_REMEDIATION_EXCEPTIONS: string[] = [
		"config:DeleteRemediationExceptions",
	];
	/** IAM actions required for the DeleteResourceConfig API call. */
	static readonly DELETE_RESOURCE_CONFIG: string[] = [
		"config:DeleteResourceConfig",
	];
	/** IAM actions required for the DeleteRetentionConfiguration API call. */
	static readonly DELETE_RETENTION_CONFIGURATION: string[] = [
		"config:DeleteRetentionConfiguration",
	];
	/** IAM actions required for the DeleteServiceLinkedConfigurationRecorder API call. */
	static readonly DELETE_SERVICE_LINKED_CONFIGURATION_RECORDER: string[] = [
		"config:DeleteServiceLinkedConfigurationRecorder",
	];
	/** IAM actions required for the DeleteStoredQuery API call. */
	static readonly DELETE_STORED_QUERY: string[] = ["config:DeleteStoredQuery"];
	/** IAM actions required for the DeliverConfigSnapshot API call. */
	static readonly DELIVER_CONFIG_SNAPSHOT: string[] = [
		"config:DeliverConfigSnapshot",
	];
	/** IAM actions required for the DescribeAggregateComplianceByConfigRules API call. */
	static readonly DESCRIBE_AGGREGATE_COMPLIANCE_BY_CONFIG_RULES: string[] = [
		"config:DescribeAggregateComplianceByConfigRules",
	];
	/** IAM actions required for the DescribeAggregateComplianceByConformancePacks API call. */
	static readonly DESCRIBE_AGGREGATE_COMPLIANCE_BY_CONFORMANCE_PACKS: string[] =
		["config:DescribeAggregateComplianceByConformancePacks"];
	/** IAM actions required for the DescribeAggregationAuthorizations API call. */
	static readonly DESCRIBE_AGGREGATION_AUTHORIZATIONS: string[] = [
		"config:DescribeAggregationAuthorizations",
	];
	/** IAM actions required for the DescribeComplianceByConfigRule API call. */
	static readonly DESCRIBE_COMPLIANCE_BY_CONFIG_RULE: string[] = [
		"config:DescribeComplianceByConfigRule",
	];
	/** IAM actions required for the DescribeComplianceByResource API call. */
	static readonly DESCRIBE_COMPLIANCE_BY_RESOURCE: string[] = [
		"config:DescribeComplianceByResource",
	];
	/** IAM actions required for the DescribeConfigRuleEvaluationStatus API call. */
	static readonly DESCRIBE_CONFIG_RULE_EVALUATION_STATUS: string[] = [
		"config:DescribeConfigRuleEvaluationStatus",
	];
	/** IAM actions required for the DescribeConfigRules API call. */
	static readonly DESCRIBE_CONFIG_RULES: string[] = [
		"config:DescribeConfigRules",
	];
	/** IAM actions required for the DescribeConfigurationAggregatorSourcesStatus API call. */
	static readonly DESCRIBE_CONFIGURATION_AGGREGATOR_SOURCES_STATUS: string[] = [
		"config:DescribeConfigurationAggregatorSourcesStatus",
	];
	/** IAM actions required for the DescribeConfigurationAggregators API call. */
	static readonly DESCRIBE_CONFIGURATION_AGGREGATORS: string[] = [
		"config:DescribeConfigurationAggregators",
	];
	/** IAM actions required for the DescribeConfigurationRecorderStatus API call. */
	static readonly DESCRIBE_CONFIGURATION_RECORDER_STATUS: string[] = [
		"config:DescribeConfigurationRecorderStatus",
	];
	/** IAM actions required for the DescribeConfigurationRecorders API call. */
	static readonly DESCRIBE_CONFIGURATION_RECORDERS: string[] = [
		"config:DescribeConfigurationRecorders",
	];
	/** IAM actions required for the DescribeConformancePackCompliance API call. */
	static readonly DESCRIBE_CONFORMANCE_PACK_COMPLIANCE: string[] = [
		"config:DescribeConformancePackCompliance",
	];
	/** IAM actions required for the DescribeConformancePackStatus API call. */
	static readonly DESCRIBE_CONFORMANCE_PACK_STATUS: string[] = [
		"config:DescribeConformancePackStatus",
	];
	/** IAM actions required for the DescribeConformancePacks API call. */
	static readonly DESCRIBE_CONFORMANCE_PACKS: string[] = [
		"config:DescribeConformancePacks",
	];
	/** IAM actions required for the DescribeDeliveryChannelStatus API call. */
	static readonly DESCRIBE_DELIVERY_CHANNEL_STATUS: string[] = [
		"config:DescribeDeliveryChannelStatus",
	];
	/** IAM actions required for the DescribeDeliveryChannels API call. */
	static readonly DESCRIBE_DELIVERY_CHANNELS: string[] = [
		"config:DescribeDeliveryChannels",
	];
	/** IAM actions required for the DescribeOrganizationConfigRuleStatuses API call. */
	static readonly DESCRIBE_ORGANIZATION_CONFIG_RULE_STATUSES: string[] = [
		"config:DescribeOrganizationConfigRuleStatuses",
	];
	/** IAM actions required for the DescribeOrganizationConfigRules API call. */
	static readonly DESCRIBE_ORGANIZATION_CONFIG_RULES: string[] = [
		"config:DescribeOrganizationConfigRules",
	];
	/** IAM actions required for the DescribeOrganizationConformancePackStatuses API call. */
	static readonly DESCRIBE_ORGANIZATION_CONFORMANCE_PACK_STATUSES: string[] = [
		"config:DescribeOrganizationConformancePackStatuses",
	];
	/** IAM actions required for the DescribeOrganizationConformancePacks API call. */
	static readonly DESCRIBE_ORGANIZATION_CONFORMANCE_PACKS: string[] = [
		"config:DescribeOrganizationConformancePacks",
	];
	/** IAM actions required for the DescribePendingAggregationRequests API call. */
	static readonly DESCRIBE_PENDING_AGGREGATION_REQUESTS: string[] = [
		"config:DescribePendingAggregationRequests",
	];
	/** IAM actions required for the DescribeRemediationConfigurations API call. */
	static readonly DESCRIBE_REMEDIATION_CONFIGURATIONS: string[] = [
		"config:DescribeRemediationConfigurations",
	];
	/** IAM actions required for the DescribeRemediationExceptions API call. */
	static readonly DESCRIBE_REMEDIATION_EXCEPTIONS: string[] = [
		"config:DescribeRemediationExceptions",
	];
	/** IAM actions required for the DescribeRemediationExecutionStatus API call. */
	static readonly DESCRIBE_REMEDIATION_EXECUTION_STATUS: string[] = [
		"config:DescribeRemediationExecutionStatus",
	];
	/** IAM actions required for the DescribeRetentionConfigurations API call. */
	static readonly DESCRIBE_RETENTION_CONFIGURATIONS: string[] = [
		"config:DescribeRetentionConfigurations",
	];
	/** IAM actions required for the DisassociateResourceTypes API call. */
	static readonly DISASSOCIATE_RESOURCE_TYPES: string[] = [
		"config:DisassociateResourceTypes",
	];
	/** IAM actions required for the GetAggregateComplianceDetailsByConfigRule API call. */
	static readonly GET_AGGREGATE_COMPLIANCE_DETAILS_BY_CONFIG_RULE: string[] = [
		"config:GetAggregateComplianceDetailsByConfigRule",
	];
	/** IAM actions required for the GetAggregateConfigRuleComplianceSummary API call. */
	static readonly GET_AGGREGATE_CONFIG_RULE_COMPLIANCE_SUMMARY: string[] = [
		"config:GetAggregateConfigRuleComplianceSummary",
	];
	/** IAM actions required for the GetAggregateConformancePackComplianceSummary API call. */
	static readonly GET_AGGREGATE_CONFORMANCE_PACK_COMPLIANCE_SUMMARY: string[] =
		["config:GetAggregateConformancePackComplianceSummary"];
	/** IAM actions required for the GetAggregateDiscoveredResourceCounts API call. */
	static readonly GET_AGGREGATE_DISCOVERED_RESOURCE_COUNTS: string[] = [
		"config:GetAggregateDiscoveredResourceCounts",
	];
	/** IAM actions required for the GetAggregateResourceConfig API call. */
	static readonly GET_AGGREGATE_RESOURCE_CONFIG: string[] = [
		"config:GetAggregateResourceConfig",
	];
	/** IAM actions required for the GetComplianceDetailsByConfigRule API call. */
	static readonly GET_COMPLIANCE_DETAILS_BY_CONFIG_RULE: string[] = [
		"config:GetComplianceDetailsByConfigRule",
	];
	/** IAM actions required for the GetComplianceDetailsByResource API call. */
	static readonly GET_COMPLIANCE_DETAILS_BY_RESOURCE: string[] = [
		"config:GetComplianceDetailsByResource",
	];
	/** IAM actions required for the GetComplianceSummaryByConfigRule API call. */
	static readonly GET_COMPLIANCE_SUMMARY_BY_CONFIG_RULE: string[] = [
		"config:GetComplianceSummaryByConfigRule",
	];
	/** IAM actions required for the GetComplianceSummaryByResourceType API call. */
	static readonly GET_COMPLIANCE_SUMMARY_BY_RESOURCE_TYPE: string[] = [
		"config:GetComplianceSummaryByResourceType",
	];
	/** IAM actions required for the GetConformancePackComplianceDetails API call. */
	static readonly GET_CONFORMANCE_PACK_COMPLIANCE_DETAILS: string[] = [
		"config:GetConformancePackComplianceDetails",
	];
	/** IAM actions required for the GetConformancePackComplianceSummary API call. */
	static readonly GET_CONFORMANCE_PACK_COMPLIANCE_SUMMARY: string[] = [
		"config:GetConformancePackComplianceSummary",
	];
	/** IAM actions required for the GetConnector API call. */
	static readonly GET_CONNECTOR: string[] = ["config:GetConnector"];
	/** IAM actions required for the GetCustomRulePolicy API call. */
	static readonly GET_CUSTOM_RULE_POLICY: string[] = [
		"config:GetCustomRulePolicy",
	];
	/** IAM actions required for the GetDiscoveredResourceCounts API call. */
	static readonly GET_DISCOVERED_RESOURCE_COUNTS: string[] = [
		"config:GetDiscoveredResourceCounts",
	];
	/** IAM actions required for the GetOrganizationConfigRuleDetailedStatus API call. */
	static readonly GET_ORGANIZATION_CONFIG_RULE_DETAILED_STATUS: string[] = [
		"config:GetOrganizationConfigRuleDetailedStatus",
	];
	/** IAM actions required for the GetOrganizationConformancePackDetailedStatus API call. */
	static readonly GET_ORGANIZATION_CONFORMANCE_PACK_DETAILED_STATUS: string[] =
		["config:GetOrganizationConformancePackDetailedStatus"];
	/** IAM actions required for the GetOrganizationCustomRulePolicy API call. */
	static readonly GET_ORGANIZATION_CUSTOM_RULE_POLICY: string[] = [
		"config:GetOrganizationCustomRulePolicy",
	];
	/** IAM actions required for the GetResourceConfigHistory API call. */
	static readonly GET_RESOURCE_CONFIG_HISTORY: string[] = [
		"config:GetResourceConfigHistory",
	];
	/** IAM actions required for the GetResourceEvaluationSummary API call. */
	static readonly GET_RESOURCE_EVALUATION_SUMMARY: string[] = [
		"config:GetResourceEvaluationSummary",
	];
	/** IAM actions required for the GetStoredQuery API call. */
	static readonly GET_STORED_QUERY: string[] = ["config:GetStoredQuery"];
	/** IAM actions required for the ListAggregateDiscoveredResources API call. */
	static readonly LIST_AGGREGATE_DISCOVERED_RESOURCES: string[] = [
		"config:ListAggregateDiscoveredResources",
	];
	/** IAM actions required for the ListConfigurationRecorders API call. */
	static readonly LIST_CONFIGURATION_RECORDERS: string[] = [
		"config:ListConfigurationRecorders",
	];
	/** IAM actions required for the ListConformancePackComplianceScores API call. */
	static readonly LIST_CONFORMANCE_PACK_COMPLIANCE_SCORES: string[] = [
		"config:ListConformancePackComplianceScores",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly LIST_CONNECTORS: string[] = ["config:ListConnectors"];
	/** IAM actions required for the ListDiscoveredResources API call. */
	static readonly LIST_DISCOVERED_RESOURCES: string[] = [
		"config:ListDiscoveredResources",
	];
	/** IAM actions required for the ListResourceEvaluations API call. */
	static readonly LIST_RESOURCE_EVALUATIONS: string[] = [
		"config:ListResourceEvaluations",
	];
	/** IAM actions required for the ListStoredQueries API call. */
	static readonly LIST_STORED_QUERIES: string[] = ["config:ListStoredQueries"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"config:ListTagsForResource",
	];
	/** IAM actions required for the PutAggregationAuthorization API call. */
	static readonly PUT_AGGREGATION_AUTHORIZATION: string[] = [
		"config:PutAggregationAuthorization",
		"config:TagResource",
	];
	/** IAM actions required for the PutConfigRule API call. */
	static readonly PUT_CONFIG_RULE: string[] = [
		"config:PutConfigRule",
		"config:TagResource",
	];
	/** IAM actions required for the PutConfigurationAggregator API call. */
	static readonly PUT_CONFIGURATION_AGGREGATOR: string[] = [
		"iam:PassRole",
		"config:PutConfigurationAggregator",
		"config:TagResource",
	];
	/** IAM actions required for the PutConfigurationRecorder API call. */
	static readonly PUT_CONFIGURATION_RECORDER: string[] = [
		"iam:PassRole",
		"config:PutConfigurationRecorder",
		"config:TagResource",
	];
	/** IAM actions required for the PutConformancePack API call. */
	static readonly PUT_CONFORMANCE_PACK: string[] = [
		"iam:PassRole",
		"config:PutConformancePack",
		"config:TagResource",
	];
	/** IAM actions required for the PutConnector API call. */
	static readonly PUT_CONNECTOR: string[] = [
		"config:PutConnector",
		"config:TagResource",
	];
	/** IAM actions required for the PutDeliveryChannel API call. */
	static readonly PUT_DELIVERY_CHANNEL: string[] = [
		"config:PutDeliveryChannel",
	];
	/** IAM actions required for the PutEvaluations API call. */
	static readonly PUT_EVALUATIONS: string[] = ["config:PutEvaluations"];
	/** IAM actions required for the PutExternalEvaluation API call. */
	static readonly PUT_EXTERNAL_EVALUATION: string[] = [
		"config:PutExternalEvaluation",
	];
	/** IAM actions required for the PutOrganizationConfigRule API call. */
	static readonly PUT_ORGANIZATION_CONFIG_RULE: string[] = [
		"config:PutOrganizationConfigRule",
	];
	/** IAM actions required for the PutOrganizationConformancePack API call. */
	static readonly PUT_ORGANIZATION_CONFORMANCE_PACK: string[] = [
		"iam:PassRole",
		"config:PutOrganizationConformancePack",
		"config:TagResource",
	];
	/** IAM actions required for the PutRemediationConfigurations API call. */
	static readonly PUT_REMEDIATION_CONFIGURATIONS: string[] = [
		"iam:PassRole",
		"config:PutRemediationConfigurations",
	];
	/** IAM actions required for the PutRemediationExceptions API call. */
	static readonly PUT_REMEDIATION_EXCEPTIONS: string[] = [
		"config:PutRemediationExceptions",
	];
	/** IAM actions required for the PutResourceConfig API call. */
	static readonly PUT_RESOURCE_CONFIG: string[] = ["config:PutResourceConfig"];
	/** IAM actions required for the PutRetentionConfiguration API call. */
	static readonly PUT_RETENTION_CONFIGURATION: string[] = [
		"config:PutRetentionConfiguration",
	];
	/** IAM actions required for the PutServiceLinkedConfigurationRecorder API call. */
	static readonly PUT_SERVICE_LINKED_CONFIGURATION_RECORDER: string[] = [
		"config:PutServiceLinkedConfigurationRecorder",
	];
	/** IAM actions required for the PutStoredQuery API call. */
	static readonly PUT_STORED_QUERY: string[] = [
		"config:PutStoredQuery",
		"config:TagResource",
	];
	/** IAM actions required for the PutThirdPartyServiceLinkedConfigurationRecorder API call. */
	static readonly PUT_THIRD_PARTY_SERVICE_LINKED_CONFIGURATION_RECORDER: string[] =
		[
			"config:GetConnector",
			"config:PutThirdPartyServiceLinkedConfigurationRecorder",
		];
	/** IAM actions required for the SelectAggregateResourceConfig API call. */
	static readonly SELECT_AGGREGATE_RESOURCE_CONFIG: string[] = [
		"config:SelectAggregateResourceConfig",
	];
	/** IAM actions required for the SelectResourceConfig API call. */
	static readonly SELECT_RESOURCE_CONFIG: string[] = [
		"config:SelectResourceConfig",
	];
	/** IAM actions required for the StartConfigRulesEvaluation API call. */
	static readonly START_CONFIG_RULES_EVALUATION: string[] = [
		"config:StartConfigRulesEvaluation",
	];
	/** IAM actions required for the StartConfigurationRecorder API call. */
	static readonly START_CONFIGURATION_RECORDER: string[] = [
		"config:StartConfigurationRecorder",
	];
	/** IAM actions required for the StartRemediationExecution API call. */
	static readonly START_REMEDIATION_EXECUTION: string[] = [
		"config:StartRemediationExecution",
	];
	/** IAM actions required for the StartResourceEvaluation API call. */
	static readonly START_RESOURCE_EVALUATION: string[] = [
		"config:StartResourceEvaluation",
	];
	/** IAM actions required for the StopConfigurationRecorder API call. */
	static readonly STOP_CONFIGURATION_RECORDER: string[] = [
		"config:StopConfigurationRecorder",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["config:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["config:UntagResource"];
}

/**
 * Condition key constants and builders for config.
 */
export class ConfigConditions {
	/** Condition keys applicable to the DeleteServiceLinkedConfigurationRecorder action. */
	static readonly DELETE_SERVICE_LINKED_CONFIGURATION_RECORDER_CONDITION_KEYS: string[] =
		["config:ConfigurationRecorderServicePrincipal"];
	/** Condition keys applicable to the DescribeConfigurationRecorderStatus action. */
	static readonly DESCRIBE_CONFIGURATION_RECORDER_STATUS_CONDITION_KEYS: string[] =
		["config:ConfigurationRecorderServicePrincipal"];
	/** Condition keys applicable to the DescribeConfigurationRecorders action. */
	static readonly DESCRIBE_CONFIGURATION_RECORDERS_CONDITION_KEYS: string[] = [
		"config:ConfigurationRecorderServicePrincipal",
	];
	/** Condition keys applicable to the PutAggregationAuthorization action. */
	static readonly PUT_AGGREGATION_AUTHORIZATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutConfigRule action. */
	static readonly PUT_CONFIG_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutConfigurationAggregator action. */
	static readonly PUT_CONFIGURATION_AGGREGATOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutConfigurationRecorder action. */
	static readonly PUT_CONFIGURATION_RECORDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutConnector action. */
	static readonly PUT_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutServiceLinkedConfigurationRecorder action. */
	static readonly PUT_SERVICE_LINKED_CONFIGURATION_RECORDER_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"config:ConfigurationRecorderServicePrincipal",
		];
	/** Condition keys applicable to the PutStoredQuery action. */
	static readonly PUT_STORED_QUERY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutThirdPartyServiceLinkedConfigurationRecorder action. */
	static readonly PUT_THIRD_PARTY_SERVICE_LINKED_CONFIGURATION_RECORDER_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"config:ConfigurationRecorderServicePrincipal",
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
	/** Condition key: config:ConfigurationRecorderServicePrincipal (String) */
	static readonly CONFIGURATION_RECORDER_SERVICE_PRINCIPAL =
		"config:ConfigurationRecorderServicePrincipal";

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

	/**
	 * Generates a condition block for `config:ConfigurationRecorderServicePrincipal`.
	 */
	static configurationRecorderServicePrincipal(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "config:ConfigurationRecorderServicePrincipal": value },
		};
	}
}
