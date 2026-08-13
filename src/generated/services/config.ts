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
	static readonly AssociateResourceTypes = "config:AssociateResourceTypes";
	/** [Read] config:BatchGetAggregateResourceConfig */
	static readonly BatchGetAggregateResourceConfig =
		"config:BatchGetAggregateResourceConfig";
	/** [Read] config:BatchGetResourceConfig */
	static readonly BatchGetResourceConfig = "config:BatchGetResourceConfig";
	/** [Write] config:DeleteAggregationAuthorization */
	static readonly DeleteAggregationAuthorization =
		"config:DeleteAggregationAuthorization";
	/** [Write] config:DeleteConfigRule */
	static readonly DeleteConfigRule = "config:DeleteConfigRule";
	/** [Write] config:DeleteConfigurationAggregator */
	static readonly DeleteConfigurationAggregator =
		"config:DeleteConfigurationAggregator";
	/** [Write] config:DeleteConfigurationRecorder */
	static readonly DeleteConfigurationRecorder =
		"config:DeleteConfigurationRecorder";
	/** [Write] config:DeleteConformancePack */
	static readonly DeleteConformancePack = "config:DeleteConformancePack";
	/** [Write] config:DeleteConnector */
	static readonly DeleteConnector = "config:DeleteConnector";
	/** [Write] config:DeleteDeliveryChannel */
	static readonly DeleteDeliveryChannel = "config:DeleteDeliveryChannel";
	/** [Write] config:DeleteEvaluationResults */
	static readonly DeleteEvaluationResults = "config:DeleteEvaluationResults";
	/** [Write] config:DeleteOrganizationConfigRule */
	static readonly DeleteOrganizationConfigRule =
		"config:DeleteOrganizationConfigRule";
	/** [Write] config:DeleteOrganizationConformancePack */
	static readonly DeleteOrganizationConformancePack =
		"config:DeleteOrganizationConformancePack";
	/** [Write] config:DeletePendingAggregationRequest */
	static readonly DeletePendingAggregationRequest =
		"config:DeletePendingAggregationRequest";
	/** [Write] config:DeleteRemediationConfiguration */
	static readonly DeleteRemediationConfiguration =
		"config:DeleteRemediationConfiguration";
	/** [Write] config:DeleteRemediationExceptions */
	static readonly DeleteRemediationExceptions =
		"config:DeleteRemediationExceptions";
	/** [Write] config:DeleteResourceConfig */
	static readonly DeleteResourceConfig = "config:DeleteResourceConfig";
	/** [Write] config:DeleteRetentionConfiguration */
	static readonly DeleteRetentionConfiguration =
		"config:DeleteRetentionConfiguration";
	/** [Write] config:DeleteServiceLinkedConfigurationRecorder */
	static readonly DeleteServiceLinkedConfigurationRecorder =
		"config:DeleteServiceLinkedConfigurationRecorder";
	/** [Write] config:DeleteStoredQuery */
	static readonly DeleteStoredQuery = "config:DeleteStoredQuery";
	/** [Read] config:DeliverConfigSnapshot */
	static readonly DeliverConfigSnapshot = "config:DeliverConfigSnapshot";
	/** [Read] config:DescribeAggregateComplianceByConfigRules */
	static readonly DescribeAggregateComplianceByConfigRules =
		"config:DescribeAggregateComplianceByConfigRules";
	/** [Read] config:DescribeAggregateComplianceByConformancePacks */
	static readonly DescribeAggregateComplianceByConformancePacks =
		"config:DescribeAggregateComplianceByConformancePacks";
	/** [List] config:DescribeAggregationAuthorizations */
	static readonly DescribeAggregationAuthorizations =
		"config:DescribeAggregationAuthorizations";
	/** [Read] config:DescribeComplianceByConfigRule */
	static readonly DescribeComplianceByConfigRule =
		"config:DescribeComplianceByConfigRule";
	/** [Read] config:DescribeComplianceByResource */
	static readonly DescribeComplianceByResource =
		"config:DescribeComplianceByResource";
	/** [Read] config:DescribeConfigRuleEvaluationStatus */
	static readonly DescribeConfigRuleEvaluationStatus =
		"config:DescribeConfigRuleEvaluationStatus";
	/** [List] config:DescribeConfigRules */
	static readonly DescribeConfigRules = "config:DescribeConfigRules";
	/** [Read] config:DescribeConfigurationAggregatorSourcesStatus */
	static readonly DescribeConfigurationAggregatorSourcesStatus =
		"config:DescribeConfigurationAggregatorSourcesStatus";
	/** [List] config:DescribeConfigurationAggregators */
	static readonly DescribeConfigurationAggregators =
		"config:DescribeConfigurationAggregators";
	/** [Read] config:DescribeConfigurationRecorderStatus */
	static readonly DescribeConfigurationRecorderStatus =
		"config:DescribeConfigurationRecorderStatus";
	/** [Read] config:DescribeConfigurationRecorders */
	static readonly DescribeConfigurationRecorders =
		"config:DescribeConfigurationRecorders";
	/** [Read] config:DescribeConformancePackCompliance */
	static readonly DescribeConformancePackCompliance =
		"config:DescribeConformancePackCompliance";
	/** [Read] config:DescribeConformancePackStatus */
	static readonly DescribeConformancePackStatus =
		"config:DescribeConformancePackStatus";
	/** [List] config:DescribeConformancePacks */
	static readonly DescribeConformancePacks = "config:DescribeConformancePacks";
	/** [Read] config:DescribeDeliveryChannelStatus */
	static readonly DescribeDeliveryChannelStatus =
		"config:DescribeDeliveryChannelStatus";
	/** [List] config:DescribeDeliveryChannels */
	static readonly DescribeDeliveryChannels = "config:DescribeDeliveryChannels";
	/** [Read] config:DescribeOrganizationConfigRuleStatuses */
	static readonly DescribeOrganizationConfigRuleStatuses =
		"config:DescribeOrganizationConfigRuleStatuses";
	/** [List] config:DescribeOrganizationConfigRules */
	static readonly DescribeOrganizationConfigRules =
		"config:DescribeOrganizationConfigRules";
	/** [Read] config:DescribeOrganizationConformancePackStatuses */
	static readonly DescribeOrganizationConformancePackStatuses =
		"config:DescribeOrganizationConformancePackStatuses";
	/** [List] config:DescribeOrganizationConformancePacks */
	static readonly DescribeOrganizationConformancePacks =
		"config:DescribeOrganizationConformancePacks";
	/** [List] config:DescribePendingAggregationRequests */
	static readonly DescribePendingAggregationRequests =
		"config:DescribePendingAggregationRequests";
	/** [List] config:DescribeRemediationConfigurations */
	static readonly DescribeRemediationConfigurations =
		"config:DescribeRemediationConfigurations";
	/** [List] config:DescribeRemediationExceptions */
	static readonly DescribeRemediationExceptions =
		"config:DescribeRemediationExceptions";
	/** [Read] config:DescribeRemediationExecutionStatus */
	static readonly DescribeRemediationExecutionStatus =
		"config:DescribeRemediationExecutionStatus";
	/** [List] config:DescribeRetentionConfigurations */
	static readonly DescribeRetentionConfigurations =
		"config:DescribeRetentionConfigurations";
	/** [Write] config:DisassociateResourceTypes */
	static readonly DisassociateResourceTypes =
		"config:DisassociateResourceTypes";
	/** [Read] config:GetAggregateComplianceDetailsByConfigRule */
	static readonly actionGetAggregateComplianceDetailsByConfigRule =
		"config:GetAggregateComplianceDetailsByConfigRule";
	/** [Read] config:GetAggregateConfigRuleComplianceSummary */
	static readonly actionGetAggregateConfigRuleComplianceSummary =
		"config:GetAggregateConfigRuleComplianceSummary";
	/** [Read] config:GetAggregateConformancePackComplianceSummary */
	static readonly actionGetAggregateConformancePackComplianceSummary =
		"config:GetAggregateConformancePackComplianceSummary";
	/** [Read] config:GetAggregateDiscoveredResourceCounts */
	static readonly actionGetAggregateDiscoveredResourceCounts =
		"config:GetAggregateDiscoveredResourceCounts";
	/** [Read] config:GetAggregateResourceConfig */
	static readonly actionGetAggregateResourceConfig =
		"config:GetAggregateResourceConfig";
	/** [Read] config:GetComplianceDetailsByConfigRule */
	static readonly actionGetComplianceDetailsByConfigRule =
		"config:GetComplianceDetailsByConfigRule";
	/** [Read] config:GetComplianceDetailsByResource */
	static readonly actionGetComplianceDetailsByResource =
		"config:GetComplianceDetailsByResource";
	/** [Read] config:GetComplianceSummaryByConfigRule */
	static readonly actionGetComplianceSummaryByConfigRule =
		"config:GetComplianceSummaryByConfigRule";
	/** [Read] config:GetComplianceSummaryByResourceType */
	static readonly actionGetComplianceSummaryByResourceType =
		"config:GetComplianceSummaryByResourceType";
	/** [Read] config:GetConformancePackComplianceDetails */
	static readonly actionGetConformancePackComplianceDetails =
		"config:GetConformancePackComplianceDetails";
	/** [Read] config:GetConformancePackComplianceSummary */
	static readonly actionGetConformancePackComplianceSummary =
		"config:GetConformancePackComplianceSummary";
	/** [Read] config:GetConnector */
	static readonly actionGetConnector = "config:GetConnector";
	/** [Read] config:GetCustomRulePolicy */
	static readonly actionGetCustomRulePolicy = "config:GetCustomRulePolicy";
	/** [Read] config:GetDiscoveredResourceCounts */
	static readonly actionGetDiscoveredResourceCounts =
		"config:GetDiscoveredResourceCounts";
	/** [Read] config:GetOrganizationConfigRuleDetailedStatus */
	static readonly actionGetOrganizationConfigRuleDetailedStatus =
		"config:GetOrganizationConfigRuleDetailedStatus";
	/** [Read] config:GetOrganizationConformancePackDetailedStatus */
	static readonly actionGetOrganizationConformancePackDetailedStatus =
		"config:GetOrganizationConformancePackDetailedStatus";
	/** [Read] config:GetOrganizationCustomRulePolicy */
	static readonly actionGetOrganizationCustomRulePolicy =
		"config:GetOrganizationCustomRulePolicy";
	/** [Read] config:GetResourceConfigHistory */
	static readonly actionGetResourceConfigHistory =
		"config:GetResourceConfigHistory";
	/** [Read] config:GetResourceEvaluationSummary */
	static readonly actionGetResourceEvaluationSummary =
		"config:GetResourceEvaluationSummary";
	/** [Read] config:GetStoredQuery */
	static readonly actionGetStoredQuery = "config:GetStoredQuery";
	/** [List] config:ListAggregateDiscoveredResources */
	static readonly ListAggregateDiscoveredResources =
		"config:ListAggregateDiscoveredResources";
	/** [List] config:ListConfigurationRecorders */
	static readonly ListConfigurationRecorders =
		"config:ListConfigurationRecorders";
	/** [List] config:ListConformancePackComplianceScores */
	static readonly ListConformancePackComplianceScores =
		"config:ListConformancePackComplianceScores";
	/** [List] config:ListConnectors */
	static readonly ListConnectors = "config:ListConnectors";
	/** [List] config:ListDiscoveredResources */
	static readonly ListDiscoveredResources = "config:ListDiscoveredResources";
	/** [List] config:ListResourceEvaluations */
	static readonly ListResourceEvaluations = "config:ListResourceEvaluations";
	/** [List] config:ListStoredQueries */
	static readonly ListStoredQueries = "config:ListStoredQueries";
	/** [Read] config:ListTagsForResource */
	static readonly ListTagsForResource = "config:ListTagsForResource";
	/** [Write] config:PutAggregationAuthorization */
	static readonly PutAggregationAuthorization =
		"config:PutAggregationAuthorization";
	/** [Write] config:PutConfigRule */
	static readonly PutConfigRule = "config:PutConfigRule";
	/** [Write] config:PutConfigurationAggregator */
	static readonly PutConfigurationAggregator =
		"config:PutConfigurationAggregator";
	/** [Write] config:PutConfigurationRecorder */
	static readonly PutConfigurationRecorder = "config:PutConfigurationRecorder";
	/** [Write] config:PutConformancePack */
	static readonly PutConformancePack = "config:PutConformancePack";
	/** [Write] config:PutConnector */
	static readonly PutConnector = "config:PutConnector";
	/** [Write] config:PutDeliveryChannel */
	static readonly PutDeliveryChannel = "config:PutDeliveryChannel";
	/** [Write] config:PutEvaluations */
	static readonly PutEvaluations = "config:PutEvaluations";
	/** [Write] config:PutExternalEvaluation */
	static readonly PutExternalEvaluation = "config:PutExternalEvaluation";
	/** [Write] config:PutOrganizationConfigRule */
	static readonly PutOrganizationConfigRule =
		"config:PutOrganizationConfigRule";
	/** [Write] config:PutOrganizationConformancePack */
	static readonly PutOrganizationConformancePack =
		"config:PutOrganizationConformancePack";
	/** [Write] config:PutRemediationConfigurations */
	static readonly PutRemediationConfigurations =
		"config:PutRemediationConfigurations";
	/** [Write] config:PutRemediationExceptions */
	static readonly PutRemediationExceptions = "config:PutRemediationExceptions";
	/** [Write] config:PutResourceConfig */
	static readonly PutResourceConfig = "config:PutResourceConfig";
	/** [Write] config:PutRetentionConfiguration */
	static readonly PutRetentionConfiguration =
		"config:PutRetentionConfiguration";
	/** [Write] config:PutServiceLinkedConfigurationRecorder */
	static readonly PutServiceLinkedConfigurationRecorder =
		"config:PutServiceLinkedConfigurationRecorder";
	/** [Write] config:PutStoredQuery */
	static readonly PutStoredQuery = "config:PutStoredQuery";
	/** [Write] config:PutThirdPartyServiceLinkedConfigurationRecorder */
	static readonly PutThirdPartyServiceLinkedConfigurationRecorder =
		"config:PutThirdPartyServiceLinkedConfigurationRecorder";
	/** [Read] config:SelectAggregateResourceConfig */
	static readonly SelectAggregateResourceConfig =
		"config:SelectAggregateResourceConfig";
	/** [Read] config:SelectResourceConfig */
	static readonly SelectResourceConfig = "config:SelectResourceConfig";
	/** [Write] config:StartConfigRulesEvaluation */
	static readonly StartConfigRulesEvaluation =
		"config:StartConfigRulesEvaluation";
	/** [Write] config:StartConfigurationRecorder */
	static readonly StartConfigurationRecorder =
		"config:StartConfigurationRecorder";
	/** [Write] config:StartRemediationExecution */
	static readonly StartRemediationExecution =
		"config:StartRemediationExecution";
	/** [Write] config:StartResourceEvaluation */
	static readonly StartResourceEvaluation = "config:StartResourceEvaluation";
	/** [Write] config:StopConfigurationRecorder */
	static readonly StopConfigurationRecorder =
		"config:StopConfigurationRecorder";
	/** [Tagging] config:TagResource */
	static readonly TagResource = "config:TagResource";
	/** [Tagging] config:UntagResource */
	static readonly UntagResource = "config:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ConfigActions.BatchGetAggregateResourceConfig,
		ConfigActions.BatchGetResourceConfig,
		ConfigActions.DeliverConfigSnapshot,
		ConfigActions.DescribeAggregateComplianceByConfigRules,
		ConfigActions.DescribeAggregateComplianceByConformancePacks,
		ConfigActions.DescribeComplianceByConfigRule,
		ConfigActions.DescribeComplianceByResource,
		ConfigActions.DescribeConfigRuleEvaluationStatus,
		ConfigActions.DescribeConfigurationAggregatorSourcesStatus,
		ConfigActions.DescribeConfigurationRecorderStatus,
		ConfigActions.DescribeConfigurationRecorders,
		ConfigActions.DescribeConformancePackCompliance,
		ConfigActions.DescribeConformancePackStatus,
		ConfigActions.DescribeDeliveryChannelStatus,
		ConfigActions.DescribeOrganizationConfigRuleStatuses,
		ConfigActions.DescribeOrganizationConformancePackStatuses,
		ConfigActions.DescribeRemediationExecutionStatus,
		ConfigActions.actionGetAggregateComplianceDetailsByConfigRule,
		ConfigActions.actionGetAggregateConfigRuleComplianceSummary,
		ConfigActions.actionGetAggregateConformancePackComplianceSummary,
		ConfigActions.actionGetAggregateDiscoveredResourceCounts,
		ConfigActions.actionGetAggregateResourceConfig,
		ConfigActions.actionGetComplianceDetailsByConfigRule,
		ConfigActions.actionGetComplianceDetailsByResource,
		ConfigActions.actionGetComplianceSummaryByConfigRule,
		ConfigActions.actionGetComplianceSummaryByResourceType,
		ConfigActions.actionGetConformancePackComplianceDetails,
		ConfigActions.actionGetConformancePackComplianceSummary,
		ConfigActions.actionGetConnector,
		ConfigActions.actionGetCustomRulePolicy,
		ConfigActions.actionGetDiscoveredResourceCounts,
		ConfigActions.actionGetOrganizationConfigRuleDetailedStatus,
		ConfigActions.actionGetOrganizationConformancePackDetailedStatus,
		ConfigActions.actionGetOrganizationCustomRulePolicy,
		ConfigActions.actionGetResourceConfigHistory,
		ConfigActions.actionGetResourceEvaluationSummary,
		ConfigActions.actionGetStoredQuery,
		ConfigActions.ListTagsForResource,
		ConfigActions.SelectAggregateResourceConfig,
		ConfigActions.SelectResourceConfig,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ConfigActions.AssociateResourceTypes,
		ConfigActions.DeleteAggregationAuthorization,
		ConfigActions.DeleteConfigRule,
		ConfigActions.DeleteConfigurationAggregator,
		ConfigActions.DeleteConfigurationRecorder,
		ConfigActions.DeleteConformancePack,
		ConfigActions.DeleteConnector,
		ConfigActions.DeleteDeliveryChannel,
		ConfigActions.DeleteEvaluationResults,
		ConfigActions.DeleteOrganizationConfigRule,
		ConfigActions.DeleteOrganizationConformancePack,
		ConfigActions.DeletePendingAggregationRequest,
		ConfigActions.DeleteRemediationConfiguration,
		ConfigActions.DeleteRemediationExceptions,
		ConfigActions.DeleteResourceConfig,
		ConfigActions.DeleteRetentionConfiguration,
		ConfigActions.DeleteServiceLinkedConfigurationRecorder,
		ConfigActions.DeleteStoredQuery,
		ConfigActions.DisassociateResourceTypes,
		ConfigActions.PutAggregationAuthorization,
		ConfigActions.PutConfigRule,
		ConfigActions.PutConfigurationAggregator,
		ConfigActions.PutConfigurationRecorder,
		ConfigActions.PutConformancePack,
		ConfigActions.PutConnector,
		ConfigActions.PutDeliveryChannel,
		ConfigActions.PutEvaluations,
		ConfigActions.PutExternalEvaluation,
		ConfigActions.PutOrganizationConfigRule,
		ConfigActions.PutOrganizationConformancePack,
		ConfigActions.PutRemediationConfigurations,
		ConfigActions.PutRemediationExceptions,
		ConfigActions.PutResourceConfig,
		ConfigActions.PutRetentionConfiguration,
		ConfigActions.PutServiceLinkedConfigurationRecorder,
		ConfigActions.PutStoredQuery,
		ConfigActions.PutThirdPartyServiceLinkedConfigurationRecorder,
		ConfigActions.StartConfigRulesEvaluation,
		ConfigActions.StartConfigurationRecorder,
		ConfigActions.StartRemediationExecution,
		ConfigActions.StartResourceEvaluation,
		ConfigActions.StopConfigurationRecorder,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ConfigActions.DescribeAggregationAuthorizations,
		ConfigActions.DescribeConfigRules,
		ConfigActions.DescribeConfigurationAggregators,
		ConfigActions.DescribeConformancePacks,
		ConfigActions.DescribeDeliveryChannels,
		ConfigActions.DescribeOrganizationConfigRules,
		ConfigActions.DescribeOrganizationConformancePacks,
		ConfigActions.DescribePendingAggregationRequests,
		ConfigActions.DescribeRemediationConfigurations,
		ConfigActions.DescribeRemediationExceptions,
		ConfigActions.DescribeRetentionConfigurations,
		ConfigActions.ListAggregateDiscoveredResources,
		ConfigActions.ListConfigurationRecorders,
		ConfigActions.ListConformancePackComplianceScores,
		ConfigActions.ListConnectors,
		ConfigActions.ListDiscoveredResources,
		ConfigActions.ListResourceEvaluations,
		ConfigActions.ListStoredQueries,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ConfigActions.TagResource,
		ConfigActions.UntagResource,
	];
}

/**
 * Properties for building a AggregationAuthorization ARN.
 */
export interface ConfigAggregationAuthorizationArnProps {
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
}

/**
 * Parsed components of a AggregationAuthorization ARN.
 */
export interface ConfigAggregationAuthorizationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AggregatorAccount component. */
	readonly aggregatorAccount: string;
	/** The AggregatorRegion component. */
	readonly aggregatorRegion: string;
}

/**
 * Properties for building a ConfigRule ARN.
 */
export interface ConfigConfigRuleArnProps {
	/** The ConfigRuleId component of the ARN. */
	readonly configRuleId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ConfigRule ARN.
 */
export interface ConfigConfigRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConfigRuleId component. */
	readonly configRuleId: string;
}

/**
 * Properties for building a ConfigurationAggregator ARN.
 */
export interface ConfigConfigurationAggregatorArnProps {
	/** The AggregatorId component of the ARN. */
	readonly aggregatorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ConfigurationAggregator ARN.
 */
export interface ConfigConfigurationAggregatorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AggregatorId component. */
	readonly aggregatorId: string;
}

/**
 * Properties for building a ConfigurationRecorder ARN.
 */
export interface ConfigConfigurationRecorderArnProps {
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
}

/**
 * Parsed components of a ConfigurationRecorder ARN.
 */
export interface ConfigConfigurationRecorderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RecorderName component. */
	readonly recorderName: string;
	/** The RecorderId component. */
	readonly recorderId: string;
}

/**
 * Properties for building a ConformancePack ARN.
 */
export interface ConfigConformancePackArnProps {
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
}

/**
 * Parsed components of a ConformancePack ARN.
 */
export interface ConfigConformancePackArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConformancePackName component. */
	readonly conformancePackName: string;
	/** The ConformancePackId component. */
	readonly conformancePackId: string;
}

/**
 * Properties for building a Connector ARN.
 */
export interface ConfigConnectorArnProps {
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
}

/**
 * Parsed components of a Connector ARN.
 */
export interface ConfigConnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Provider component. */
	readonly provider: string;
	/** The ProviderId component. */
	readonly providerId: string;
	/** The ConnectorId component. */
	readonly connectorId: string;
}

/**
 * Properties for building a OrganizationConfigRule ARN.
 */
export interface ConfigOrganizationConfigRuleArnProps {
	/** The OrganizationConfigRuleId component of the ARN. */
	readonly organizationConfigRuleId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a OrganizationConfigRule ARN.
 */
export interface ConfigOrganizationConfigRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OrganizationConfigRuleId component. */
	readonly organizationConfigRuleId: string;
}

/**
 * Properties for building a OrganizationConformancePack ARN.
 */
export interface ConfigOrganizationConformancePackArnProps {
	/** The OrganizationConformancePackId component of the ARN. */
	readonly organizationConformancePackId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a OrganizationConformancePack ARN.
 */
export interface ConfigOrganizationConformancePackArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OrganizationConformancePackId component. */
	readonly organizationConformancePackId: string;
}

/**
 * Properties for building a RemediationConfiguration ARN.
 */
export interface ConfigRemediationConfigurationArnProps {
	/** The RemediationConfigurationId component of the ARN. */
	readonly remediationConfigurationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RemediationConfiguration ARN.
 */
export interface ConfigRemediationConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RemediationConfigurationId component. */
	readonly remediationConfigurationId: string;
}

/**
 * Properties for building a StoredQuery ARN.
 */
export interface ConfigStoredQueryArnProps {
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
}

/**
 * Parsed components of a StoredQuery ARN.
 */
export interface ConfigStoredQueryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StoredQueryName component. */
	readonly storedQueryName: string;
	/** The StoredQueryId component. */
	readonly storedQueryId: string;
}

const AggregationAuthorizationArnRegex =
	/^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):aggregation-authorization\/(?<aggregatorAccount>[^:/?]+)\/(?<aggregatorRegion>[^:/?]+)$/;
const ConfigRuleArnRegex =
	/^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):config-rule\/(?<configRuleId>[^:/?]+)$/;
const ConfigurationAggregatorArnRegex =
	/^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):config-aggregator\/(?<aggregatorId>[^:/?]+)$/;
const ConfigurationRecorderArnRegex =
	/^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):configuration-recorder\/(?<recorderName>[^:/?]+)\/(?<recorderId>[^:/?]+)$/;
const ConformancePackArnRegex =
	/^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):conformance-pack\/(?<conformancePackName>[^:/?]+)\/(?<conformancePackId>[^:/?]+)$/;
const ConnectorArnRegex =
	/^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<provider>[^:/?]+)\/(?<providerId>[^:/?]+)\/(?<connectorId>[^:/?]+)$/;
const OrganizationConfigRuleArnRegex =
	/^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):organization-config-rule\/(?<organizationConfigRuleId>[^:/?]+)$/;
const OrganizationConformancePackArnRegex =
	/^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):organization-conformance-pack\/(?<organizationConformancePackId>[^:/?]+)$/;
const RemediationConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):remediation-configuration\/(?<remediationConfigurationId>[^:/?]+)$/;
const StoredQueryArnRegex =
	/^arn:(?<partition>[^:]+):config:(?<region>[^:]*):(?<account>[^:]*):stored-query\/(?<storedQueryName>[^:/?]+)\/(?<storedQueryId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for config resources.
 */
export class ConfigResources {
	/**
	 * Builds an ARN for the AggregationAuthorization resource.
	 */
	static aggregationAuthorization(
		props: ConfigAggregationAuthorizationArnProps,
	): string {
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
	static parseAggregationAuthorizationArn(
		arn: string,
	): ConfigAggregationAuthorizationArnComponents {
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
	static configRule(props: ConfigConfigRuleArnProps): string {
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
	static parseConfigRuleArn(arn: string): ConfigConfigRuleArnComponents {
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
	static configurationAggregator(
		props: ConfigConfigurationAggregatorArnProps,
	): string {
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
	static parseConfigurationAggregatorArn(
		arn: string,
	): ConfigConfigurationAggregatorArnComponents {
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
	static configurationRecorder(
		props: ConfigConfigurationRecorderArnProps,
	): string {
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
	static parseConfigurationRecorderArn(
		arn: string,
	): ConfigConfigurationRecorderArnComponents {
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
	static conformancePack(props: ConfigConformancePackArnProps): string {
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
	static parseConformancePackArn(
		arn: string,
	): ConfigConformancePackArnComponents {
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
	static connector(props: ConfigConnectorArnProps): string {
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
	static parseConnectorArn(arn: string): ConfigConnectorArnComponents {
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
	static organizationConfigRule(
		props: ConfigOrganizationConfigRuleArnProps,
	): string {
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
	static parseOrganizationConfigRuleArn(
		arn: string,
	): ConfigOrganizationConfigRuleArnComponents {
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
	static organizationConformancePack(
		props: ConfigOrganizationConformancePackArnProps,
	): string {
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
	static parseOrganizationConformancePackArn(
		arn: string,
	): ConfigOrganizationConformancePackArnComponents {
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
	static remediationConfiguration(
		props: ConfigRemediationConfigurationArnProps,
	): string {
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
	static parseRemediationConfigurationArn(
		arn: string,
	): ConfigRemediationConfigurationArnComponents {
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
	static storedQuery(props: ConfigStoredQueryArnProps): string {
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
	static parseStoredQueryArn(arn: string): ConfigStoredQueryArnComponents {
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
	static readonly AssociateResourceTypes: string[] = [
		"config:AssociateResourceTypes",
	];
	/** IAM actions required for the BatchGetAggregateResourceConfig API call. */
	static readonly BatchGetAggregateResourceConfig: string[] = [
		"config:BatchGetAggregateResourceConfig",
	];
	/** IAM actions required for the BatchGetResourceConfig API call. */
	static readonly BatchGetResourceConfig: string[] = [
		"config:BatchGetResourceConfig",
	];
	/** IAM actions required for the DeleteAggregationAuthorization API call. */
	static readonly DeleteAggregationAuthorization: string[] = [
		"config:DeleteAggregationAuthorization",
	];
	/** IAM actions required for the DeleteConfigRule API call. */
	static readonly DeleteConfigRule: string[] = ["config:DeleteConfigRule"];
	/** IAM actions required for the DeleteConfigurationAggregator API call. */
	static readonly DeleteConfigurationAggregator: string[] = [
		"config:DeleteConfigurationAggregator",
	];
	/** IAM actions required for the DeleteConfigurationRecorder API call. */
	static readonly DeleteConfigurationRecorder: string[] = [
		"config:DeleteConfigurationRecorder",
	];
	/** IAM actions required for the DeleteConformancePack API call. */
	static readonly DeleteConformancePack: string[] = [
		"config:DeleteConformancePack",
	];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DeleteConnector: string[] = ["config:DeleteConnector"];
	/** IAM actions required for the DeleteDeliveryChannel API call. */
	static readonly DeleteDeliveryChannel: string[] = [
		"config:DeleteDeliveryChannel",
	];
	/** IAM actions required for the DeleteEvaluationResults API call. */
	static readonly DeleteEvaluationResults: string[] = [
		"config:DeleteEvaluationResults",
	];
	/** IAM actions required for the DeleteOrganizationConfigRule API call. */
	static readonly DeleteOrganizationConfigRule: string[] = [
		"config:DeleteOrganizationConfigRule",
	];
	/** IAM actions required for the DeleteOrganizationConformancePack API call. */
	static readonly DeleteOrganizationConformancePack: string[] = [
		"config:DeleteOrganizationConformancePack",
	];
	/** IAM actions required for the DeletePendingAggregationRequest API call. */
	static readonly DeletePendingAggregationRequest: string[] = [
		"config:DeletePendingAggregationRequest",
	];
	/** IAM actions required for the DeleteRemediationConfiguration API call. */
	static readonly DeleteRemediationConfiguration: string[] = [
		"config:DeleteRemediationConfiguration",
	];
	/** IAM actions required for the DeleteRemediationExceptions API call. */
	static readonly DeleteRemediationExceptions: string[] = [
		"config:DeleteRemediationExceptions",
	];
	/** IAM actions required for the DeleteResourceConfig API call. */
	static readonly DeleteResourceConfig: string[] = [
		"config:DeleteResourceConfig",
	];
	/** IAM actions required for the DeleteRetentionConfiguration API call. */
	static readonly DeleteRetentionConfiguration: string[] = [
		"config:DeleteRetentionConfiguration",
	];
	/** IAM actions required for the DeleteServiceLinkedConfigurationRecorder API call. */
	static readonly DeleteServiceLinkedConfigurationRecorder: string[] = [
		"config:DeleteServiceLinkedConfigurationRecorder",
	];
	/** IAM actions required for the DeleteStoredQuery API call. */
	static readonly DeleteStoredQuery: string[] = ["config:DeleteStoredQuery"];
	/** IAM actions required for the DeliverConfigSnapshot API call. */
	static readonly DeliverConfigSnapshot: string[] = [
		"config:DeliverConfigSnapshot",
	];
	/** IAM actions required for the DescribeAggregateComplianceByConfigRules API call. */
	static readonly DescribeAggregateComplianceByConfigRules: string[] = [
		"config:DescribeAggregateComplianceByConfigRules",
	];
	/** IAM actions required for the DescribeAggregateComplianceByConformancePacks API call. */
	static readonly DescribeAggregateComplianceByConformancePacks: string[] = [
		"config:DescribeAggregateComplianceByConformancePacks",
	];
	/** IAM actions required for the DescribeAggregationAuthorizations API call. */
	static readonly DescribeAggregationAuthorizations: string[] = [
		"config:DescribeAggregationAuthorizations",
	];
	/** IAM actions required for the DescribeComplianceByConfigRule API call. */
	static readonly DescribeComplianceByConfigRule: string[] = [
		"config:DescribeComplianceByConfigRule",
	];
	/** IAM actions required for the DescribeComplianceByResource API call. */
	static readonly DescribeComplianceByResource: string[] = [
		"config:DescribeComplianceByResource",
	];
	/** IAM actions required for the DescribeConfigRuleEvaluationStatus API call. */
	static readonly DescribeConfigRuleEvaluationStatus: string[] = [
		"config:DescribeConfigRuleEvaluationStatus",
	];
	/** IAM actions required for the DescribeConfigRules API call. */
	static readonly DescribeConfigRules: string[] = [
		"config:DescribeConfigRules",
	];
	/** IAM actions required for the DescribeConfigurationAggregatorSourcesStatus API call. */
	static readonly DescribeConfigurationAggregatorSourcesStatus: string[] = [
		"config:DescribeConfigurationAggregatorSourcesStatus",
	];
	/** IAM actions required for the DescribeConfigurationAggregators API call. */
	static readonly DescribeConfigurationAggregators: string[] = [
		"config:DescribeConfigurationAggregators",
	];
	/** IAM actions required for the DescribeConfigurationRecorderStatus API call. */
	static readonly DescribeConfigurationRecorderStatus: string[] = [
		"config:DescribeConfigurationRecorderStatus",
	];
	/** IAM actions required for the DescribeConfigurationRecorders API call. */
	static readonly DescribeConfigurationRecorders: string[] = [
		"config:DescribeConfigurationRecorders",
	];
	/** IAM actions required for the DescribeConformancePackCompliance API call. */
	static readonly DescribeConformancePackCompliance: string[] = [
		"config:DescribeConformancePackCompliance",
	];
	/** IAM actions required for the DescribeConformancePackStatus API call. */
	static readonly DescribeConformancePackStatus: string[] = [
		"config:DescribeConformancePackStatus",
	];
	/** IAM actions required for the DescribeConformancePacks API call. */
	static readonly DescribeConformancePacks: string[] = [
		"config:DescribeConformancePacks",
	];
	/** IAM actions required for the DescribeDeliveryChannelStatus API call. */
	static readonly DescribeDeliveryChannelStatus: string[] = [
		"config:DescribeDeliveryChannelStatus",
	];
	/** IAM actions required for the DescribeDeliveryChannels API call. */
	static readonly DescribeDeliveryChannels: string[] = [
		"config:DescribeDeliveryChannels",
	];
	/** IAM actions required for the DescribeOrganizationConfigRuleStatuses API call. */
	static readonly DescribeOrganizationConfigRuleStatuses: string[] = [
		"config:DescribeOrganizationConfigRuleStatuses",
	];
	/** IAM actions required for the DescribeOrganizationConfigRules API call. */
	static readonly DescribeOrganizationConfigRules: string[] = [
		"config:DescribeOrganizationConfigRules",
	];
	/** IAM actions required for the DescribeOrganizationConformancePackStatuses API call. */
	static readonly DescribeOrganizationConformancePackStatuses: string[] = [
		"config:DescribeOrganizationConformancePackStatuses",
	];
	/** IAM actions required for the DescribeOrganizationConformancePacks API call. */
	static readonly DescribeOrganizationConformancePacks: string[] = [
		"config:DescribeOrganizationConformancePacks",
	];
	/** IAM actions required for the DescribePendingAggregationRequests API call. */
	static readonly DescribePendingAggregationRequests: string[] = [
		"config:DescribePendingAggregationRequests",
	];
	/** IAM actions required for the DescribeRemediationConfigurations API call. */
	static readonly DescribeRemediationConfigurations: string[] = [
		"config:DescribeRemediationConfigurations",
	];
	/** IAM actions required for the DescribeRemediationExceptions API call. */
	static readonly DescribeRemediationExceptions: string[] = [
		"config:DescribeRemediationExceptions",
	];
	/** IAM actions required for the DescribeRemediationExecutionStatus API call. */
	static readonly DescribeRemediationExecutionStatus: string[] = [
		"config:DescribeRemediationExecutionStatus",
	];
	/** IAM actions required for the DescribeRetentionConfigurations API call. */
	static readonly DescribeRetentionConfigurations: string[] = [
		"config:DescribeRetentionConfigurations",
	];
	/** IAM actions required for the DisassociateResourceTypes API call. */
	static readonly DisassociateResourceTypes: string[] = [
		"config:DisassociateResourceTypes",
	];
	/** IAM actions required for the GetAggregateComplianceDetailsByConfigRule API call. */
	static readonly opGetAggregateComplianceDetailsByConfigRule: string[] = [
		"config:GetAggregateComplianceDetailsByConfigRule",
	];
	/** IAM actions required for the GetAggregateConfigRuleComplianceSummary API call. */
	static readonly opGetAggregateConfigRuleComplianceSummary: string[] = [
		"config:GetAggregateConfigRuleComplianceSummary",
	];
	/** IAM actions required for the GetAggregateConformancePackComplianceSummary API call. */
	static readonly opGetAggregateConformancePackComplianceSummary: string[] = [
		"config:GetAggregateConformancePackComplianceSummary",
	];
	/** IAM actions required for the GetAggregateDiscoveredResourceCounts API call. */
	static readonly opGetAggregateDiscoveredResourceCounts: string[] = [
		"config:GetAggregateDiscoveredResourceCounts",
	];
	/** IAM actions required for the GetAggregateResourceConfig API call. */
	static readonly opGetAggregateResourceConfig: string[] = [
		"config:GetAggregateResourceConfig",
	];
	/** IAM actions required for the GetComplianceDetailsByConfigRule API call. */
	static readonly opGetComplianceDetailsByConfigRule: string[] = [
		"config:GetComplianceDetailsByConfigRule",
	];
	/** IAM actions required for the GetComplianceDetailsByResource API call. */
	static readonly opGetComplianceDetailsByResource: string[] = [
		"config:GetComplianceDetailsByResource",
	];
	/** IAM actions required for the GetComplianceSummaryByConfigRule API call. */
	static readonly opGetComplianceSummaryByConfigRule: string[] = [
		"config:GetComplianceSummaryByConfigRule",
	];
	/** IAM actions required for the GetComplianceSummaryByResourceType API call. */
	static readonly opGetComplianceSummaryByResourceType: string[] = [
		"config:GetComplianceSummaryByResourceType",
	];
	/** IAM actions required for the GetConformancePackComplianceDetails API call. */
	static readonly opGetConformancePackComplianceDetails: string[] = [
		"config:GetConformancePackComplianceDetails",
	];
	/** IAM actions required for the GetConformancePackComplianceSummary API call. */
	static readonly opGetConformancePackComplianceSummary: string[] = [
		"config:GetConformancePackComplianceSummary",
	];
	/** IAM actions required for the GetConnector API call. */
	static readonly opGetConnector: string[] = ["config:GetConnector"];
	/** IAM actions required for the GetCustomRulePolicy API call. */
	static readonly opGetCustomRulePolicy: string[] = [
		"config:GetCustomRulePolicy",
	];
	/** IAM actions required for the GetDiscoveredResourceCounts API call. */
	static readonly opGetDiscoveredResourceCounts: string[] = [
		"config:GetDiscoveredResourceCounts",
	];
	/** IAM actions required for the GetOrganizationConfigRuleDetailedStatus API call. */
	static readonly opGetOrganizationConfigRuleDetailedStatus: string[] = [
		"config:GetOrganizationConfigRuleDetailedStatus",
	];
	/** IAM actions required for the GetOrganizationConformancePackDetailedStatus API call. */
	static readonly opGetOrganizationConformancePackDetailedStatus: string[] = [
		"config:GetOrganizationConformancePackDetailedStatus",
	];
	/** IAM actions required for the GetOrganizationCustomRulePolicy API call. */
	static readonly opGetOrganizationCustomRulePolicy: string[] = [
		"config:GetOrganizationCustomRulePolicy",
	];
	/** IAM actions required for the GetResourceConfigHistory API call. */
	static readonly opGetResourceConfigHistory: string[] = [
		"config:GetResourceConfigHistory",
	];
	/** IAM actions required for the GetResourceEvaluationSummary API call. */
	static readonly opGetResourceEvaluationSummary: string[] = [
		"config:GetResourceEvaluationSummary",
	];
	/** IAM actions required for the GetStoredQuery API call. */
	static readonly opGetStoredQuery: string[] = ["config:GetStoredQuery"];
	/** IAM actions required for the ListAggregateDiscoveredResources API call. */
	static readonly ListAggregateDiscoveredResources: string[] = [
		"config:ListAggregateDiscoveredResources",
	];
	/** IAM actions required for the ListConfigurationRecorders API call. */
	static readonly ListConfigurationRecorders: string[] = [
		"config:ListConfigurationRecorders",
	];
	/** IAM actions required for the ListConformancePackComplianceScores API call. */
	static readonly ListConformancePackComplianceScores: string[] = [
		"config:ListConformancePackComplianceScores",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly ListConnectors: string[] = ["config:ListConnectors"];
	/** IAM actions required for the ListDiscoveredResources API call. */
	static readonly ListDiscoveredResources: string[] = [
		"config:ListDiscoveredResources",
	];
	/** IAM actions required for the ListResourceEvaluations API call. */
	static readonly ListResourceEvaluations: string[] = [
		"config:ListResourceEvaluations",
	];
	/** IAM actions required for the ListStoredQueries API call. */
	static readonly ListStoredQueries: string[] = ["config:ListStoredQueries"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"config:ListTagsForResource",
	];
	/** IAM actions required for the PutAggregationAuthorization API call. */
	static readonly PutAggregationAuthorization: string[] = [
		"config:PutAggregationAuthorization",
		"config:TagResource",
	];
	/** IAM actions required for the PutConfigRule API call. */
	static readonly PutConfigRule: string[] = [
		"config:PutConfigRule",
		"config:TagResource",
	];
	/** IAM actions required for the PutConfigurationAggregator API call. */
	static readonly PutConfigurationAggregator: string[] = [
		"iam:PassRole",
		"config:PutConfigurationAggregator",
		"config:TagResource",
	];
	/** IAM actions required for the PutConfigurationRecorder API call. */
	static readonly PutConfigurationRecorder: string[] = [
		"iam:PassRole",
		"config:PutConfigurationRecorder",
		"config:TagResource",
	];
	/** IAM actions required for the PutConformancePack API call. */
	static readonly PutConformancePack: string[] = [
		"iam:PassRole",
		"config:PutConformancePack",
		"config:TagResource",
	];
	/** IAM actions required for the PutConnector API call. */
	static readonly PutConnector: string[] = [
		"config:PutConnector",
		"config:TagResource",
	];
	/** IAM actions required for the PutDeliveryChannel API call. */
	static readonly PutDeliveryChannel: string[] = ["config:PutDeliveryChannel"];
	/** IAM actions required for the PutEvaluations API call. */
	static readonly PutEvaluations: string[] = ["config:PutEvaluations"];
	/** IAM actions required for the PutExternalEvaluation API call. */
	static readonly PutExternalEvaluation: string[] = [
		"config:PutExternalEvaluation",
	];
	/** IAM actions required for the PutOrganizationConfigRule API call. */
	static readonly PutOrganizationConfigRule: string[] = [
		"config:PutOrganizationConfigRule",
	];
	/** IAM actions required for the PutOrganizationConformancePack API call. */
	static readonly PutOrganizationConformancePack: string[] = [
		"iam:PassRole",
		"config:PutOrganizationConformancePack",
		"config:TagResource",
	];
	/** IAM actions required for the PutRemediationConfigurations API call. */
	static readonly PutRemediationConfigurations: string[] = [
		"iam:PassRole",
		"config:PutRemediationConfigurations",
	];
	/** IAM actions required for the PutRemediationExceptions API call. */
	static readonly PutRemediationExceptions: string[] = [
		"config:PutRemediationExceptions",
	];
	/** IAM actions required for the PutResourceConfig API call. */
	static readonly PutResourceConfig: string[] = ["config:PutResourceConfig"];
	/** IAM actions required for the PutRetentionConfiguration API call. */
	static readonly PutRetentionConfiguration: string[] = [
		"config:PutRetentionConfiguration",
	];
	/** IAM actions required for the PutServiceLinkedConfigurationRecorder API call. */
	static readonly PutServiceLinkedConfigurationRecorder: string[] = [
		"config:PutServiceLinkedConfigurationRecorder",
	];
	/** IAM actions required for the PutStoredQuery API call. */
	static readonly PutStoredQuery: string[] = [
		"config:PutStoredQuery",
		"config:TagResource",
	];
	/** IAM actions required for the PutThirdPartyServiceLinkedConfigurationRecorder API call. */
	static readonly PutThirdPartyServiceLinkedConfigurationRecorder: string[] = [
		"config:GetConnector",
		"config:PutThirdPartyServiceLinkedConfigurationRecorder",
	];
	/** IAM actions required for the SelectAggregateResourceConfig API call. */
	static readonly SelectAggregateResourceConfig: string[] = [
		"config:SelectAggregateResourceConfig",
	];
	/** IAM actions required for the SelectResourceConfig API call. */
	static readonly SelectResourceConfig: string[] = [
		"config:SelectResourceConfig",
	];
	/** IAM actions required for the StartConfigRulesEvaluation API call. */
	static readonly StartConfigRulesEvaluation: string[] = [
		"config:StartConfigRulesEvaluation",
	];
	/** IAM actions required for the StartConfigurationRecorder API call. */
	static readonly StartConfigurationRecorder: string[] = [
		"config:StartConfigurationRecorder",
	];
	/** IAM actions required for the StartRemediationExecution API call. */
	static readonly StartRemediationExecution: string[] = [
		"config:StartRemediationExecution",
	];
	/** IAM actions required for the StartResourceEvaluation API call. */
	static readonly StartResourceEvaluation: string[] = [
		"config:StartResourceEvaluation",
	];
	/** IAM actions required for the StopConfigurationRecorder API call. */
	static readonly StopConfigurationRecorder: string[] = [
		"config:StopConfigurationRecorder",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["config:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["config:UntagResource"];
}

/**
 * Condition key constants and builders for config.
 */
export class ConfigConditions {
	/** Condition keys applicable to the DeleteServiceLinkedConfigurationRecorder action. */
	static readonly DeleteServiceLinkedConfigurationRecorderConditionKeys: string[] =
		["config:ConfigurationRecorderServicePrincipal"];
	/** Condition keys applicable to the DescribeConfigurationRecorderStatus action. */
	static readonly DescribeConfigurationRecorderStatusConditionKeys: string[] = [
		"config:ConfigurationRecorderServicePrincipal",
	];
	/** Condition keys applicable to the DescribeConfigurationRecorders action. */
	static readonly DescribeConfigurationRecordersConditionKeys: string[] = [
		"config:ConfigurationRecorderServicePrincipal",
	];
	/** Condition keys applicable to the PutAggregationAuthorization action. */
	static readonly PutAggregationAuthorizationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutConfigRule action. */
	static readonly PutConfigRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutConfigurationAggregator action. */
	static readonly PutConfigurationAggregatorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutConfigurationRecorder action. */
	static readonly PutConfigurationRecorderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutConnector action. */
	static readonly PutConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutServiceLinkedConfigurationRecorder action. */
	static readonly PutServiceLinkedConfigurationRecorderConditionKeys: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"config:ConfigurationRecorderServicePrincipal",
		];
	/** Condition keys applicable to the PutStoredQuery action. */
	static readonly PutStoredQueryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutThirdPartyServiceLinkedConfigurationRecorder action. */
	static readonly PutThirdPartyServiceLinkedConfigurationRecorderConditionKeys: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"config:ConfigurationRecorderServicePrincipal",
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
