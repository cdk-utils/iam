// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/securityhub.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the securityhub service.
 */
export class SecurityHubActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "securityhub";

	/** [Write] securityhub:AcceptAdministratorInvitation */
	static readonly AcceptAdministratorInvitation =
		"securityhub:AcceptAdministratorInvitation";
	/** [Write] securityhub:AcceptInvitation */
	static readonly AcceptInvitation = "securityhub:AcceptInvitation";
	/** [PermissionManagement] securityhub:AllowVendedLogDeliveryForResource */
	static readonly AllowVendedLogDeliveryForResource =
		"securityhub:AllowVendedLogDeliveryForResource";
	/** [Write] securityhub:BatchDeleteAutomationRules */
	static readonly BatchDeleteAutomationRules =
		"securityhub:BatchDeleteAutomationRules";
	/** [Write] securityhub:BatchDisableStandards */
	static readonly BatchDisableStandards = "securityhub:BatchDisableStandards";
	/** [Write] securityhub:BatchEnableStandards */
	static readonly BatchEnableStandards = "securityhub:BatchEnableStandards";
	/** [Read] securityhub:BatchGetAutomationRules */
	static readonly BatchGetAutomationRules =
		"securityhub:BatchGetAutomationRules";
	/** [Read] securityhub:BatchGetConfigurationPolicyAssociations */
	static readonly BatchGetConfigurationPolicyAssociations =
		"securityhub:BatchGetConfigurationPolicyAssociations";
	/** [Read] securityhub:BatchGetControlEvaluations */
	static readonly BatchGetControlEvaluations =
		"securityhub:BatchGetControlEvaluations";
	/** [Read] securityhub:BatchGetEnabledRegionsV2 */
	static readonly BatchGetEnabledRegionsV2 =
		"securityhub:BatchGetEnabledRegionsV2";
	/** [Read] securityhub:BatchGetSecurityControls */
	static readonly BatchGetSecurityControls =
		"securityhub:BatchGetSecurityControls";
	/** [Read] securityhub:BatchGetStandardsControlAssociations */
	static readonly BatchGetStandardsControlAssociations =
		"securityhub:BatchGetStandardsControlAssociations";
	/** [Write] securityhub:BatchImportFindings */
	static readonly BatchImportFindings = "securityhub:BatchImportFindings";
	/** [Write] securityhub:BatchUpdateAutomationRules */
	static readonly BatchUpdateAutomationRules =
		"securityhub:BatchUpdateAutomationRules";
	/** [Write] securityhub:BatchUpdateFindings */
	static readonly BatchUpdateFindings = "securityhub:BatchUpdateFindings";
	/** [Write] securityhub:BatchUpdateStandardsControlAssociations */
	static readonly BatchUpdateStandardsControlAssociations =
		"securityhub:BatchUpdateStandardsControlAssociations";
	/** [Write] securityhub:ConnectorRegistrationsV2 */
	static readonly ConnectorRegistrationsV2 =
		"securityhub:ConnectorRegistrationsV2";
	/** [Write] securityhub:CreateActionTarget */
	static readonly CreateActionTarget = "securityhub:CreateActionTarget";
	/** [Write] securityhub:CreateAggregatorV2 */
	static readonly CreateAggregatorV2 = "securityhub:CreateAggregatorV2";
	/** [Write] securityhub:CreateAutomationRule */
	static readonly CreateAutomationRule = "securityhub:CreateAutomationRule";
	/** [Write] securityhub:CreateAutomationRuleV2 */
	static readonly CreateAutomationRuleV2 = "securityhub:CreateAutomationRuleV2";
	/** [Write] securityhub:CreateConfigurationPolicy */
	static readonly CreateConfigurationPolicy =
		"securityhub:CreateConfigurationPolicy";
	/** [Write] securityhub:CreateConnector */
	static readonly CreateConnector = "securityhub:CreateConnector";
	/** [Write] securityhub:CreateConnectorV2 */
	static readonly CreateConnectorV2 = "securityhub:CreateConnectorV2";
	/** [Write] securityhub:CreateFindingAggregator */
	static readonly CreateFindingAggregator =
		"securityhub:CreateFindingAggregator";
	/** [Write] securityhub:CreateInsight */
	static readonly CreateInsight = "securityhub:CreateInsight";
	/** [Write] securityhub:CreateMembers */
	static readonly CreateMembers = "securityhub:CreateMembers";
	/** [Write] securityhub:CreateTicketV2 */
	static readonly CreateTicketV2 = "securityhub:CreateTicketV2";
	/** [Write] securityhub:DeclineInvitations */
	static readonly DeclineInvitations = "securityhub:DeclineInvitations";
	/** [Write] securityhub:DeleteActionTarget */
	static readonly DeleteActionTarget = "securityhub:DeleteActionTarget";
	/** [Write] securityhub:DeleteAggregatorV2 */
	static readonly DeleteAggregatorV2 = "securityhub:DeleteAggregatorV2";
	/** [Write] securityhub:DeleteAutomationRuleV2 */
	static readonly DeleteAutomationRuleV2 = "securityhub:DeleteAutomationRuleV2";
	/** [Write] securityhub:DeleteConfigurationPolicy */
	static readonly DeleteConfigurationPolicy =
		"securityhub:DeleteConfigurationPolicy";
	/** [Write] securityhub:DeleteConnector */
	static readonly DeleteConnector = "securityhub:DeleteConnector";
	/** [Write] securityhub:DeleteConnectorV2 */
	static readonly DeleteConnectorV2 = "securityhub:DeleteConnectorV2";
	/** [Write] securityhub:DeleteFindingAggregator */
	static readonly DeleteFindingAggregator =
		"securityhub:DeleteFindingAggregator";
	/** [Write] securityhub:DeleteInsight */
	static readonly DeleteInsight = "securityhub:DeleteInsight";
	/** [Write] securityhub:DeleteInvitations */
	static readonly DeleteInvitations = "securityhub:DeleteInvitations";
	/** [Write] securityhub:DeleteMembers */
	static readonly DeleteMembers = "securityhub:DeleteMembers";
	/** [Read] securityhub:DescribeActionTargets */
	static readonly DescribeActionTargets = "securityhub:DescribeActionTargets";
	/** [Read] securityhub:DescribeHub */
	static readonly DescribeHub = "securityhub:DescribeHub";
	/** [Read] securityhub:DescribeOrganizationConfiguration */
	static readonly DescribeOrganizationConfiguration =
		"securityhub:DescribeOrganizationConfiguration";
	/** [Read] securityhub:DescribeProducts */
	static readonly DescribeProducts = "securityhub:DescribeProducts";
	/** [Read] securityhub:DescribeProductsV2 */
	static readonly DescribeProductsV2 = "securityhub:DescribeProductsV2";
	/** [Read] securityhub:DescribeSecurityHubV2 */
	static readonly DescribeSecurityHubV2 = "securityhub:DescribeSecurityHubV2";
	/** [Read] securityhub:DescribeStandards */
	static readonly DescribeStandards = "securityhub:DescribeStandards";
	/** [Read] securityhub:DescribeStandardsControls */
	static readonly DescribeStandardsControls =
		"securityhub:DescribeStandardsControls";
	/** [Write] securityhub:DisableImportFindingsForProduct */
	static readonly DisableImportFindingsForProduct =
		"securityhub:DisableImportFindingsForProduct";
	/** [Write] securityhub:DisableOrganizationAdminAccount */
	static readonly DisableOrganizationAdminAccount =
		"securityhub:DisableOrganizationAdminAccount";
	/** [Write] securityhub:DisableSecurityHub */
	static readonly DisableSecurityHub = "securityhub:DisableSecurityHub";
	/** [Write] securityhub:DisableSecurityHubFeatureV2 */
	static readonly DisableSecurityHubFeatureV2 =
		"securityhub:DisableSecurityHubFeatureV2";
	/** [Write] securityhub:DisableSecurityHubV2 */
	static readonly DisableSecurityHubV2 = "securityhub:DisableSecurityHubV2";
	/** [Write] securityhub:DisassociateFromAdministratorAccount */
	static readonly DisassociateFromAdministratorAccount =
		"securityhub:DisassociateFromAdministratorAccount";
	/** [Write] securityhub:DisassociateFromMasterAccount */
	static readonly DisassociateFromMasterAccount =
		"securityhub:DisassociateFromMasterAccount";
	/** [Write] securityhub:DisassociateMembers */
	static readonly DisassociateMembers = "securityhub:DisassociateMembers";
	/** [Write] securityhub:EnableImportFindingsForProduct */
	static readonly EnableImportFindingsForProduct =
		"securityhub:EnableImportFindingsForProduct";
	/** [Write] securityhub:EnableOrganizationAdminAccount */
	static readonly EnableOrganizationAdminAccount =
		"securityhub:EnableOrganizationAdminAccount";
	/** [Write] securityhub:EnableSecurityHub */
	static readonly EnableSecurityHub = "securityhub:EnableSecurityHub";
	/** [Write] securityhub:EnableSecurityHubFeatureV2 */
	static readonly EnableSecurityHubFeatureV2 =
		"securityhub:EnableSecurityHubFeatureV2";
	/** [Write] securityhub:EnableSecurityHubV2 */
	static readonly EnableSecurityHubV2 = "securityhub:EnableSecurityHubV2";
	/** [Write] securityhub:GenerateRecommendedPolicyV2 */
	static readonly GenerateRecommendedPolicyV2 =
		"securityhub:GenerateRecommendedPolicyV2";
	/** [Read] securityhub:GetAdhocInsightResults */
	static readonly actionGetAdhocInsightResults =
		"securityhub:GetAdhocInsightResults";
	/** [Read] securityhub:GetAdministratorAccount */
	static readonly actionGetAdministratorAccount =
		"securityhub:GetAdministratorAccount";
	/** [Read] securityhub:GetAggregatorV2 */
	static readonly actionGetAggregatorV2 = "securityhub:GetAggregatorV2";
	/** [Read] securityhub:GetAutomationRuleV2 */
	static readonly actionGetAutomationRuleV2 = "securityhub:GetAutomationRuleV2";
	/** [Read] securityhub:GetConfigurationPolicy */
	static readonly actionGetConfigurationPolicy =
		"securityhub:GetConfigurationPolicy";
	/** [Read] securityhub:GetConfigurationPolicyAssociation */
	static readonly actionGetConfigurationPolicyAssociation =
		"securityhub:GetConfigurationPolicyAssociation";
	/** [Read] securityhub:GetConnector */
	static readonly actionGetConnector = "securityhub:GetConnector";
	/** [Read] securityhub:GetConnectorV2 */
	static readonly actionGetConnectorV2 = "securityhub:GetConnectorV2";
	/** [Read] securityhub:GetControlFindingSummary */
	static readonly actionGetControlFindingSummary =
		"securityhub:GetControlFindingSummary";
	/** [Read] securityhub:GetCoverageStatisticsV2 */
	static readonly actionGetCoverageStatisticsV2 =
		"securityhub:GetCoverageStatisticsV2";
	/** [List] securityhub:GetEnabledStandards */
	static readonly actionGetEnabledStandards = "securityhub:GetEnabledStandards";
	/** [Read] securityhub:GetFindingAggregator */
	static readonly actionGetFindingAggregator =
		"securityhub:GetFindingAggregator";
	/** [Read] securityhub:GetFindingHistory */
	static readonly actionGetFindingHistory = "securityhub:GetFindingHistory";
	/** [Read] securityhub:GetFindings */
	static readonly actionGetFindings = "securityhub:GetFindings";
	/** [Read] securityhub:GetFindingsTrendsV2 */
	static readonly actionGetFindingsTrendsV2 = "securityhub:GetFindingsTrendsV2";
	/** [Read] securityhub:GetFreeTrialEndDate */
	static readonly actionGetFreeTrialEndDate = "securityhub:GetFreeTrialEndDate";
	/** [Read] securityhub:GetFreeTrialUsage */
	static readonly actionGetFreeTrialUsage = "securityhub:GetFreeTrialUsage";
	/** [Read] securityhub:GetInsightFindingTrend */
	static readonly actionGetInsightFindingTrend =
		"securityhub:GetInsightFindingTrend";
	/** [Read] securityhub:GetInsightResults */
	static readonly actionGetInsightResults = "securityhub:GetInsightResults";
	/** [List] securityhub:GetInsights */
	static readonly actionGetInsights = "securityhub:GetInsights";
	/** [Read] securityhub:GetInvitationsCount */
	static readonly actionGetInvitationsCount = "securityhub:GetInvitationsCount";
	/** [Read] securityhub:GetMasterAccount */
	static readonly actionGetMasterAccount = "securityhub:GetMasterAccount";
	/** [Read] securityhub:GetMembers */
	static readonly actionGetMembers = "securityhub:GetMembers";
	/** [Read] securityhub:GetRecommendedPolicyV2 */
	static readonly actionGetRecommendedPolicyV2 =
		"securityhub:GetRecommendedPolicyV2";
	/** [Read] securityhub:GetResourcesStatisticsV2 */
	static readonly actionGetResourcesStatisticsV2 =
		"securityhub:GetResourcesStatisticsV2";
	/** [Read] securityhub:GetResourcesTrendsV2 */
	static readonly actionGetResourcesTrendsV2 =
		"securityhub:GetResourcesTrendsV2";
	/** [Read] securityhub:GetResourcesV2 */
	static readonly actionGetResourcesV2 = "securityhub:GetResourcesV2";
	/** [Read] securityhub:GetSecurityControlDefinition */
	static readonly actionGetSecurityControlDefinition =
		"securityhub:GetSecurityControlDefinition";
	/** [Read] securityhub:GetUsage */
	static readonly actionGetUsage = "securityhub:GetUsage";
	/** [Read] securityhub:GetUsageV2 */
	static readonly actionGetUsageV2 = "securityhub:GetUsageV2";
	/** [Write] securityhub:InviteMembers */
	static readonly InviteMembers = "securityhub:InviteMembers";
	/** [List] securityhub:ListAccountUsageV2 */
	static readonly ListAccountUsageV2 = "securityhub:ListAccountUsageV2";
	/** [List] securityhub:ListAggregatorsV2 */
	static readonly ListAggregatorsV2 = "securityhub:ListAggregatorsV2";
	/** [List] securityhub:ListAutomationRules */
	static readonly ListAutomationRules = "securityhub:ListAutomationRules";
	/** [List] securityhub:ListAutomationRulesV2 */
	static readonly ListAutomationRulesV2 = "securityhub:ListAutomationRulesV2";
	/** [List] securityhub:ListConfigurationPolicies */
	static readonly ListConfigurationPolicies =
		"securityhub:ListConfigurationPolicies";
	/** [List] securityhub:ListConfigurationPolicyAssociations */
	static readonly ListConfigurationPolicyAssociations =
		"securityhub:ListConfigurationPolicyAssociations";
	/** [List] securityhub:ListConnectors */
	static readonly ListConnectors = "securityhub:ListConnectors";
	/** [List] securityhub:ListConnectorsV2 */
	static readonly ListConnectorsV2 = "securityhub:ListConnectorsV2";
	/** [Read] securityhub:ListControlEvaluationSummaries */
	static readonly ListControlEvaluationSummaries =
		"securityhub:ListControlEvaluationSummaries";
	/** [List] securityhub:ListEnabledProductsForImport */
	static readonly ListEnabledProductsForImport =
		"securityhub:ListEnabledProductsForImport";
	/** [List] securityhub:ListFindingAggregators */
	static readonly ListFindingAggregators = "securityhub:ListFindingAggregators";
	/** [List] securityhub:ListFreeTrialStatusesV2 */
	static readonly ListFreeTrialStatusesV2 =
		"securityhub:ListFreeTrialStatusesV2";
	/** [List] securityhub:ListInvitations */
	static readonly ListInvitations = "securityhub:ListInvitations";
	/** [List] securityhub:ListMembers */
	static readonly ListMembers = "securityhub:ListMembers";
	/** [List] securityhub:ListOrganizationAdminAccounts */
	static readonly ListOrganizationAdminAccounts =
		"securityhub:ListOrganizationAdminAccounts";
	/** [List] securityhub:ListSecurityControlDefinitions */
	static readonly ListSecurityControlDefinitions =
		"securityhub:ListSecurityControlDefinitions";
	/** [List] securityhub:ListStandardsControlAssociations */
	static readonly ListStandardsControlAssociations =
		"securityhub:ListStandardsControlAssociations";
	/** [Read] securityhub:ListTagsForResource */
	static readonly ListTagsForResource = "securityhub:ListTagsForResource";
	/** [Read] securityhub:SendFindingEvents */
	static readonly SendFindingEvents = "securityhub:SendFindingEvents";
	/** [Read] securityhub:SendInsightEvents */
	static readonly SendInsightEvents = "securityhub:SendInsightEvents";
	/** [Write] securityhub:StartConfigurationPolicyAssociation */
	static readonly StartConfigurationPolicyAssociation =
		"securityhub:StartConfigurationPolicyAssociation";
	/** [Write] securityhub:StartConfigurationPolicyDisassociation */
	static readonly StartConfigurationPolicyDisassociation =
		"securityhub:StartConfigurationPolicyDisassociation";
	/** [Tagging] securityhub:TagResource */
	static readonly TagResource = "securityhub:TagResource";
	/** [Tagging] securityhub:UntagResource */
	static readonly UntagResource = "securityhub:UntagResource";
	/** [Write] securityhub:UpdateActionTarget */
	static readonly UpdateActionTarget = "securityhub:UpdateActionTarget";
	/** [Write] securityhub:UpdateAggregatorV2 */
	static readonly UpdateAggregatorV2 = "securityhub:UpdateAggregatorV2";
	/** [Write] securityhub:UpdateAutomationRuleV2 */
	static readonly UpdateAutomationRuleV2 = "securityhub:UpdateAutomationRuleV2";
	/** [Write] securityhub:UpdateConfigurationPolicy */
	static readonly UpdateConfigurationPolicy =
		"securityhub:UpdateConfigurationPolicy";
	/** [Write] securityhub:UpdateConnector */
	static readonly UpdateConnector = "securityhub:UpdateConnector";
	/** [Write] securityhub:UpdateConnectorV2 */
	static readonly UpdateConnectorV2 = "securityhub:UpdateConnectorV2";
	/** [Write] securityhub:UpdateFindingAggregator */
	static readonly UpdateFindingAggregator =
		"securityhub:UpdateFindingAggregator";
	/** [Write] securityhub:UpdateFindings */
	static readonly UpdateFindings = "securityhub:UpdateFindings";
	/** [Write] securityhub:UpdateInsight */
	static readonly UpdateInsight = "securityhub:UpdateInsight";
	/** [Write] securityhub:UpdateOrganizationConfiguration */
	static readonly UpdateOrganizationConfiguration =
		"securityhub:UpdateOrganizationConfiguration";
	/** [Write] securityhub:UpdateSecurityControl */
	static readonly UpdateSecurityControl = "securityhub:UpdateSecurityControl";
	/** [Write] securityhub:UpdateSecurityHubConfiguration */
	static readonly UpdateSecurityHubConfiguration =
		"securityhub:UpdateSecurityHubConfiguration";
	/** [Write] securityhub:UpdateStandardsControl */
	static readonly UpdateStandardsControl = "securityhub:UpdateStandardsControl";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SecurityHubActions.BatchGetAutomationRules,
		SecurityHubActions.BatchGetConfigurationPolicyAssociations,
		SecurityHubActions.BatchGetControlEvaluations,
		SecurityHubActions.BatchGetEnabledRegionsV2,
		SecurityHubActions.BatchGetSecurityControls,
		SecurityHubActions.BatchGetStandardsControlAssociations,
		SecurityHubActions.DescribeActionTargets,
		SecurityHubActions.DescribeHub,
		SecurityHubActions.DescribeOrganizationConfiguration,
		SecurityHubActions.DescribeProducts,
		SecurityHubActions.DescribeProductsV2,
		SecurityHubActions.DescribeSecurityHubV2,
		SecurityHubActions.DescribeStandards,
		SecurityHubActions.DescribeStandardsControls,
		SecurityHubActions.actionGetAdhocInsightResults,
		SecurityHubActions.actionGetAdministratorAccount,
		SecurityHubActions.actionGetAggregatorV2,
		SecurityHubActions.actionGetAutomationRuleV2,
		SecurityHubActions.actionGetConfigurationPolicy,
		SecurityHubActions.actionGetConfigurationPolicyAssociation,
		SecurityHubActions.actionGetConnector,
		SecurityHubActions.actionGetConnectorV2,
		SecurityHubActions.actionGetControlFindingSummary,
		SecurityHubActions.actionGetCoverageStatisticsV2,
		SecurityHubActions.actionGetFindingAggregator,
		SecurityHubActions.actionGetFindingHistory,
		SecurityHubActions.actionGetFindings,
		SecurityHubActions.actionGetFindingsTrendsV2,
		SecurityHubActions.actionGetFreeTrialEndDate,
		SecurityHubActions.actionGetFreeTrialUsage,
		SecurityHubActions.actionGetInsightFindingTrend,
		SecurityHubActions.actionGetInsightResults,
		SecurityHubActions.actionGetInvitationsCount,
		SecurityHubActions.actionGetMasterAccount,
		SecurityHubActions.actionGetMembers,
		SecurityHubActions.actionGetRecommendedPolicyV2,
		SecurityHubActions.actionGetResourcesStatisticsV2,
		SecurityHubActions.actionGetResourcesTrendsV2,
		SecurityHubActions.actionGetResourcesV2,
		SecurityHubActions.actionGetSecurityControlDefinition,
		SecurityHubActions.actionGetUsage,
		SecurityHubActions.actionGetUsageV2,
		SecurityHubActions.ListControlEvaluationSummaries,
		SecurityHubActions.ListTagsForResource,
		SecurityHubActions.SendFindingEvents,
		SecurityHubActions.SendInsightEvents,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SecurityHubActions.AcceptAdministratorInvitation,
		SecurityHubActions.AcceptInvitation,
		SecurityHubActions.BatchDeleteAutomationRules,
		SecurityHubActions.BatchDisableStandards,
		SecurityHubActions.BatchEnableStandards,
		SecurityHubActions.BatchImportFindings,
		SecurityHubActions.BatchUpdateAutomationRules,
		SecurityHubActions.BatchUpdateFindings,
		SecurityHubActions.BatchUpdateStandardsControlAssociations,
		SecurityHubActions.ConnectorRegistrationsV2,
		SecurityHubActions.CreateActionTarget,
		SecurityHubActions.CreateAggregatorV2,
		SecurityHubActions.CreateAutomationRule,
		SecurityHubActions.CreateAutomationRuleV2,
		SecurityHubActions.CreateConfigurationPolicy,
		SecurityHubActions.CreateConnector,
		SecurityHubActions.CreateConnectorV2,
		SecurityHubActions.CreateFindingAggregator,
		SecurityHubActions.CreateInsight,
		SecurityHubActions.CreateMembers,
		SecurityHubActions.CreateTicketV2,
		SecurityHubActions.DeclineInvitations,
		SecurityHubActions.DeleteActionTarget,
		SecurityHubActions.DeleteAggregatorV2,
		SecurityHubActions.DeleteAutomationRuleV2,
		SecurityHubActions.DeleteConfigurationPolicy,
		SecurityHubActions.DeleteConnector,
		SecurityHubActions.DeleteConnectorV2,
		SecurityHubActions.DeleteFindingAggregator,
		SecurityHubActions.DeleteInsight,
		SecurityHubActions.DeleteInvitations,
		SecurityHubActions.DeleteMembers,
		SecurityHubActions.DisableImportFindingsForProduct,
		SecurityHubActions.DisableOrganizationAdminAccount,
		SecurityHubActions.DisableSecurityHub,
		SecurityHubActions.DisableSecurityHubFeatureV2,
		SecurityHubActions.DisableSecurityHubV2,
		SecurityHubActions.DisassociateFromAdministratorAccount,
		SecurityHubActions.DisassociateFromMasterAccount,
		SecurityHubActions.DisassociateMembers,
		SecurityHubActions.EnableImportFindingsForProduct,
		SecurityHubActions.EnableOrganizationAdminAccount,
		SecurityHubActions.EnableSecurityHub,
		SecurityHubActions.EnableSecurityHubFeatureV2,
		SecurityHubActions.EnableSecurityHubV2,
		SecurityHubActions.GenerateRecommendedPolicyV2,
		SecurityHubActions.InviteMembers,
		SecurityHubActions.StartConfigurationPolicyAssociation,
		SecurityHubActions.StartConfigurationPolicyDisassociation,
		SecurityHubActions.UpdateActionTarget,
		SecurityHubActions.UpdateAggregatorV2,
		SecurityHubActions.UpdateAutomationRuleV2,
		SecurityHubActions.UpdateConfigurationPolicy,
		SecurityHubActions.UpdateConnector,
		SecurityHubActions.UpdateConnectorV2,
		SecurityHubActions.UpdateFindingAggregator,
		SecurityHubActions.UpdateFindings,
		SecurityHubActions.UpdateInsight,
		SecurityHubActions.UpdateOrganizationConfiguration,
		SecurityHubActions.UpdateSecurityControl,
		SecurityHubActions.UpdateSecurityHubConfiguration,
		SecurityHubActions.UpdateStandardsControl,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SecurityHubActions.actionGetEnabledStandards,
		SecurityHubActions.actionGetInsights,
		SecurityHubActions.ListAccountUsageV2,
		SecurityHubActions.ListAggregatorsV2,
		SecurityHubActions.ListAutomationRules,
		SecurityHubActions.ListAutomationRulesV2,
		SecurityHubActions.ListConfigurationPolicies,
		SecurityHubActions.ListConfigurationPolicyAssociations,
		SecurityHubActions.ListConnectors,
		SecurityHubActions.ListConnectorsV2,
		SecurityHubActions.ListEnabledProductsForImport,
		SecurityHubActions.ListFindingAggregators,
		SecurityHubActions.ListFreeTrialStatusesV2,
		SecurityHubActions.ListInvitations,
		SecurityHubActions.ListMembers,
		SecurityHubActions.ListOrganizationAdminAccounts,
		SecurityHubActions.ListSecurityControlDefinitions,
		SecurityHubActions.ListStandardsControlAssociations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		SecurityHubActions.AllowVendedLogDeliveryForResource,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SecurityHubActions.TagResource,
		SecurityHubActions.UntagResource,
	];
}

/**
 * Properties for building a aggregatorv2 ARN.
 */
export interface SecurityHubAggregatorv2ArnProps {
	/** The AggregatorV2Id component of the ARN. */
	readonly aggregatorV2Id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a aggregatorv2 ARN.
 */
export interface SecurityHubAggregatorv2ArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AggregatorV2Id component. */
	readonly aggregatorV2Id: string;
}

/**
 * Properties for building a automation-rule ARN.
 */
export interface SecurityHubAutomationRuleArnProps {
	/** The AutomationRuleId component of the ARN. */
	readonly automationRuleId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a automation-rule ARN.
 */
export interface SecurityHubAutomationRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AutomationRuleId component. */
	readonly automationRuleId: string;
}

/**
 * Properties for building a automation-rulev2 ARN.
 */
export interface SecurityHubAutomationRulev2ArnProps {
	/** The AutomationRuleV2Id component of the ARN. */
	readonly automationRuleV2Id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a automation-rulev2 ARN.
 */
export interface SecurityHubAutomationRulev2ArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AutomationRuleV2Id component. */
	readonly automationRuleV2Id: string;
}

/**
 * Properties for building a configuration-policy ARN.
 */
export interface SecurityHubConfigurationPolicyArnProps {
	/** The ConfigurationPolicyId component of the ARN. */
	readonly configurationPolicyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a configuration-policy ARN.
 */
export interface SecurityHubConfigurationPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConfigurationPolicyId component. */
	readonly configurationPolicyId: string;
}

/**
 * Properties for building a connector ARN.
 */
export interface SecurityHubConnectorArnProps {
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
 * Parsed components of a connector ARN.
 */
export interface SecurityHubConnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorId component. */
	readonly connectorId: string;
}

/**
 * Properties for building a connectorv2 ARN.
 */
export interface SecurityHubConnectorv2ArnProps {
	/** The ConnectorV2Id component of the ARN. */
	readonly connectorV2Id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connectorv2 ARN.
 */
export interface SecurityHubConnectorv2ArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorV2Id component. */
	readonly connectorV2Id: string;
}

/**
 * Properties for building a finding-aggregator ARN.
 */
export interface SecurityHubFindingAggregatorArnProps {
	/** The FindingAggregatorId component of the ARN. */
	readonly findingAggregatorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a finding-aggregator ARN.
 */
export interface SecurityHubFindingAggregatorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FindingAggregatorId component. */
	readonly findingAggregatorId: string;
}

/**
 * Properties for building a hub ARN.
 */
export interface SecurityHubHubArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a hub ARN.
 */
export interface SecurityHubHubArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a hubv2 ARN.
 */
export interface SecurityHubHubv2ArnProps {
	/** The HubV2Id component of the ARN. */
	readonly hubV2Id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a hubv2 ARN.
 */
export interface SecurityHubHubv2ArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HubV2Id component. */
	readonly hubV2Id: string;
}

/**
 * Properties for building a product ARN.
 */
export interface SecurityHubProductArnProps {
	/** The Company component of the ARN. */
	readonly company: string;
	/** The ProductId component of the ARN. */
	readonly productId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a product ARN.
 */
export interface SecurityHubProductArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Company component. */
	readonly company: string;
	/** The ProductId component. */
	readonly productId: string;
}

const Aggregatorv2ArnRegex =
	/^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):aggregatorv2\/(?<aggregatorV2Id>[^:/?]+)$/;
const AutomationRuleArnRegex =
	/^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):automation-rule\/(?<automationRuleId>[^:/?]+)$/;
const AutomationRulev2ArnRegex =
	/^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):automation-rulev2\/(?<automationRuleV2Id>[^:/?]+)$/;
const ConfigurationPolicyArnRegex =
	/^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):configuration-policy\/(?<configurationPolicyId>[^:/?]+)$/;
const ConnectorArnRegex =
	/^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<connectorId>[^:/?]+)$/;
const Connectorv2ArnRegex =
	/^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):connectorv2\/(?<connectorV2Id>[^:/?]+)$/;
const FindingAggregatorArnRegex =
	/^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):finding-aggregator\/(?<findingAggregatorId>[^:/?]+)$/;
const HubArnRegex =
	/^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):hub\/default$/;
const Hubv2ArnRegex =
	/^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):hubv2\/(?<hubV2Id>[^:/?]+)$/;
const ProductArnRegex =
	/^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):product\/(?<company>[^:/?]+)\/(?<productId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for securityhub resources.
 */
export class SecurityHubResources {
	/**
	 * Builds an ARN for the aggregatorv2 resource.
	 */
	static aggregatorv2(props: SecurityHubAggregatorv2ArnProps): string {
		return `arn:${props.partition ?? "aws"}:securityhub:${props.region ?? "*"}:${props.account ?? "*"}:aggregatorv2/${props.aggregatorV2Id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the aggregatorv2 resource.
	 */
	static isValidAggregatorv2Arn(arn: string): boolean {
		return Aggregatorv2ArnRegex.test(arn);
	}

	/**
	 * Parses a aggregatorv2 ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAggregatorv2Arn(
		arn: string,
	): SecurityHubAggregatorv2ArnComponents {
		const match = Aggregatorv2ArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid aggregatorv2 ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			aggregatorV2Id: match.groups!.aggregatorV2Id,
		};
	}

	/**
	 * Builds an ARN for the automation-rule resource.
	 */
	static automationRule(props: SecurityHubAutomationRuleArnProps): string {
		return `arn:${props.partition ?? "aws"}:securityhub:${props.region ?? "*"}:${props.account ?? "*"}:automation-rule/${props.automationRuleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the automation-rule resource.
	 */
	static isValidAutomationRuleArn(arn: string): boolean {
		return AutomationRuleArnRegex.test(arn);
	}

	/**
	 * Parses a automation-rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomationRuleArn(
		arn: string,
	): SecurityHubAutomationRuleArnComponents {
		const match = AutomationRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid automation-rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			automationRuleId: match.groups!.automationRuleId,
		};
	}

	/**
	 * Builds an ARN for the automation-rulev2 resource.
	 */
	static automationRulev2(props: SecurityHubAutomationRulev2ArnProps): string {
		return `arn:${props.partition ?? "aws"}:securityhub:${props.region ?? "*"}:${props.account ?? "*"}:automation-rulev2/${props.automationRuleV2Id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the automation-rulev2 resource.
	 */
	static isValidAutomationRulev2Arn(arn: string): boolean {
		return AutomationRulev2ArnRegex.test(arn);
	}

	/**
	 * Parses a automation-rulev2 ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomationRulev2Arn(
		arn: string,
	): SecurityHubAutomationRulev2ArnComponents {
		const match = AutomationRulev2ArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid automation-rulev2 ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			automationRuleV2Id: match.groups!.automationRuleV2Id,
		};
	}

	/**
	 * Builds an ARN for the configuration-policy resource.
	 */
	static configurationPolicy(
		props: SecurityHubConfigurationPolicyArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:securityhub:${props.region ?? "*"}:${props.account ?? "*"}:configuration-policy/${props.configurationPolicyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the configuration-policy resource.
	 */
	static isValidConfigurationPolicyArn(arn: string): boolean {
		return ConfigurationPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a configuration-policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationPolicyArn(
		arn: string,
	): SecurityHubConfigurationPolicyArnComponents {
		const match = ConfigurationPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid configuration-policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			configurationPolicyId: match.groups!.configurationPolicyId,
		};
	}

	/**
	 * Builds an ARN for the connector resource.
	 */
	static connector(props: SecurityHubConnectorArnProps): string {
		return `arn:${props.partition ?? "aws"}:securityhub:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.connectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connector resource.
	 */
	static isValidConnectorArn(arn: string): boolean {
		return ConnectorArnRegex.test(arn);
	}

	/**
	 * Parses a connector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorArn(arn: string): SecurityHubConnectorArnComponents {
		const match = ConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorId: match.groups!.connectorId,
		};
	}

	/**
	 * Builds an ARN for the connectorv2 resource.
	 */
	static connectorv2(props: SecurityHubConnectorv2ArnProps): string {
		return `arn:${props.partition ?? "aws"}:securityhub:${props.region ?? "*"}:${props.account ?? "*"}:connectorv2/${props.connectorV2Id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connectorv2 resource.
	 */
	static isValidConnectorv2Arn(arn: string): boolean {
		return Connectorv2ArnRegex.test(arn);
	}

	/**
	 * Parses a connectorv2 ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorv2Arn(arn: string): SecurityHubConnectorv2ArnComponents {
		const match = Connectorv2ArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connectorv2 ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorV2Id: match.groups!.connectorV2Id,
		};
	}

	/**
	 * Builds an ARN for the finding-aggregator resource.
	 */
	static findingAggregator(
		props: SecurityHubFindingAggregatorArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:securityhub:${props.region ?? "*"}:${props.account ?? "*"}:finding-aggregator/${props.findingAggregatorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the finding-aggregator resource.
	 */
	static isValidFindingAggregatorArn(arn: string): boolean {
		return FindingAggregatorArnRegex.test(arn);
	}

	/**
	 * Parses a finding-aggregator ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFindingAggregatorArn(
		arn: string,
	): SecurityHubFindingAggregatorArnComponents {
		const match = FindingAggregatorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid finding-aggregator ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			findingAggregatorId: match.groups!.findingAggregatorId,
		};
	}

	/**
	 * Builds an ARN for the hub resource.
	 */
	static hub(props: SecurityHubHubArnProps): string {
		return `arn:${props.partition ?? "aws"}:securityhub:${props.region ?? "*"}:${props.account ?? "*"}:hub/default`;
	}

	/**
	 * Validates whether a string is a valid ARN for the hub resource.
	 */
	static isValidHubArn(arn: string): boolean {
		return HubArnRegex.test(arn);
	}

	/**
	 * Parses a hub ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHubArn(arn: string): SecurityHubHubArnComponents {
		const match = HubArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid hub ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the hubv2 resource.
	 */
	static hubv2(props: SecurityHubHubv2ArnProps): string {
		return `arn:${props.partition ?? "aws"}:securityhub:${props.region ?? "*"}:${props.account ?? "*"}:hubv2/${props.hubV2Id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the hubv2 resource.
	 */
	static isValidHubv2Arn(arn: string): boolean {
		return Hubv2ArnRegex.test(arn);
	}

	/**
	 * Parses a hubv2 ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHubv2Arn(arn: string): SecurityHubHubv2ArnComponents {
		const match = Hubv2ArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid hubv2 ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			hubV2Id: match.groups!.hubV2Id,
		};
	}

	/**
	 * Builds an ARN for the product resource.
	 */
	static product(props: SecurityHubProductArnProps): string {
		return `arn:${props.partition ?? "aws"}:securityhub:${props.region ?? "*"}:${props.account ?? "*"}:product/${props.company}/${props.productId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the product resource.
	 */
	static isValidProductArn(arn: string): boolean {
		return ProductArnRegex.test(arn);
	}

	/**
	 * Parses a product ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProductArn(arn: string): SecurityHubProductArnComponents {
		const match = ProductArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid product ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			company: match.groups!.company,
			productId: match.groups!.productId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for securityhub.
 */
export class SecurityHubOperations {
	/** IAM actions required for the AcceptAdministratorInvitation API call. */
	static readonly AcceptAdministratorInvitation: string[] = [
		"securityhub:AcceptAdministratorInvitation",
	];
	/** IAM actions required for the AcceptInvitation API call. */
	static readonly AcceptInvitation: string[] = ["securityhub:AcceptInvitation"];
	/** IAM actions required for the BatchDeleteAutomationRules API call. */
	static readonly BatchDeleteAutomationRules: string[] = [
		"securityhub:BatchDeleteAutomationRules",
	];
	/** IAM actions required for the BatchDisableStandards API call. */
	static readonly BatchDisableStandards: string[] = [
		"securityhub:BatchDisableStandards",
	];
	/** IAM actions required for the BatchEnableStandards API call. */
	static readonly BatchEnableStandards: string[] = [
		"securityhub:BatchEnableStandards",
	];
	/** IAM actions required for the BatchGetAutomationRules API call. */
	static readonly BatchGetAutomationRules: string[] = [
		"securityhub:BatchGetAutomationRules",
	];
	/** IAM actions required for the BatchGetConfigurationPolicyAssociations API call. */
	static readonly BatchGetConfigurationPolicyAssociations: string[] = [
		"securityhub:BatchGetConfigurationPolicyAssociations",
	];
	/** IAM actions required for the BatchGetSecurityControls API call. */
	static readonly BatchGetSecurityControls: string[] = [
		"securityhub:BatchGetSecurityControls",
		"securityhub:DescribeStandardsControls",
	];
	/** IAM actions required for the BatchGetStandardsControlAssociations API call. */
	static readonly BatchGetStandardsControlAssociations: string[] = [
		"securityhub:BatchGetStandardsControlAssociations",
		"securityhub:DescribeStandardsControls",
	];
	/** IAM actions required for the BatchImportFindings API call. */
	static readonly BatchImportFindings: string[] = [
		"securityhub:BatchImportFindings",
	];
	/** IAM actions required for the BatchUpdateAutomationRules API call. */
	static readonly BatchUpdateAutomationRules: string[] = [
		"securityhub:BatchUpdateAutomationRules",
	];
	/** IAM actions required for the BatchUpdateFindings API call. */
	static readonly BatchUpdateFindings: string[] = [
		"securityhub:BatchUpdateFindings",
	];
	/** IAM actions required for the BatchUpdateFindingsV2 API call. */
	static readonly BatchUpdateFindingsV2: string[] = [
		"securityhub:BatchUpdateFindings",
	];
	/** IAM actions required for the BatchUpdateStandardsControlAssociations API call. */
	static readonly BatchUpdateStandardsControlAssociations: string[] = [
		"securityhub:BatchUpdateStandardsControlAssociations",
		"securityhub:UpdateStandardsControl",
	];
	/** IAM actions required for the CreateActionTarget API call. */
	static readonly CreateActionTarget: string[] = [
		"securityhub:CreateActionTarget",
	];
	/** IAM actions required for the CreateAggregatorV2 API call. */
	static readonly CreateAggregatorV2: string[] = [
		"securityhub:CreateAggregatorV2",
		"securityhub:TagResource",
	];
	/** IAM actions required for the CreateAutomationRule API call. */
	static readonly CreateAutomationRule: string[] = [
		"securityhub:CreateAutomationRule",
		"securityhub:TagResource",
	];
	/** IAM actions required for the CreateAutomationRuleV2 API call. */
	static readonly CreateAutomationRuleV2: string[] = [
		"securityhub:CreateAutomationRuleV2",
		"securityhub:TagResource",
	];
	/** IAM actions required for the CreateConfigurationPolicy API call. */
	static readonly CreateConfigurationPolicy: string[] = [
		"securityhub:CreateConfigurationPolicy",
		"securityhub:TagResource",
	];
	/** IAM actions required for the CreateConnector API call. */
	static readonly CreateConnector: string[] = [
		"securityhub:CreateConnector",
		"securityhub:TagResource",
	];
	/** IAM actions required for the CreateConnectorV2 API call. */
	static readonly CreateConnectorV2: string[] = [
		"securityhub:CreateConnectorV2",
		"securityhub:TagResource",
	];
	/** IAM actions required for the CreateFindingAggregator API call. */
	static readonly CreateFindingAggregator: string[] = [
		"securityhub:CreateFindingAggregator",
	];
	/** IAM actions required for the CreateInsight API call. */
	static readonly CreateInsight: string[] = ["securityhub:CreateInsight"];
	/** IAM actions required for the CreateMembers API call. */
	static readonly CreateMembers: string[] = ["securityhub:CreateMembers"];
	/** IAM actions required for the CreateTicketV2 API call. */
	static readonly CreateTicketV2: string[] = ["securityhub:CreateTicketV2"];
	/** IAM actions required for the DeclineInvitations API call. */
	static readonly DeclineInvitations: string[] = [
		"securityhub:DeclineInvitations",
	];
	/** IAM actions required for the DeleteActionTarget API call. */
	static readonly DeleteActionTarget: string[] = [
		"securityhub:DeleteActionTarget",
	];
	/** IAM actions required for the DeleteAggregatorV2 API call. */
	static readonly DeleteAggregatorV2: string[] = [
		"securityhub:DeleteAggregatorV2",
	];
	/** IAM actions required for the DeleteAutomationRuleV2 API call. */
	static readonly DeleteAutomationRuleV2: string[] = [
		"securityhub:DeleteAutomationRuleV2",
	];
	/** IAM actions required for the DeleteConfigurationPolicy API call. */
	static readonly DeleteConfigurationPolicy: string[] = [
		"securityhub:DeleteConfigurationPolicy",
	];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DeleteConnector: string[] = ["securityhub:DeleteConnector"];
	/** IAM actions required for the DeleteConnectorV2 API call. */
	static readonly DeleteConnectorV2: string[] = [
		"securityhub:DeleteConnectorV2",
	];
	/** IAM actions required for the DeleteFindingAggregator API call. */
	static readonly DeleteFindingAggregator: string[] = [
		"securityhub:DeleteFindingAggregator",
	];
	/** IAM actions required for the DeleteInsight API call. */
	static readonly DeleteInsight: string[] = ["securityhub:DeleteInsight"];
	/** IAM actions required for the DeleteInvitations API call. */
	static readonly DeleteInvitations: string[] = [
		"securityhub:DeleteInvitations",
	];
	/** IAM actions required for the DeleteMembers API call. */
	static readonly DeleteMembers: string[] = ["securityhub:DeleteMembers"];
	/** IAM actions required for the DescribeActionTargets API call. */
	static readonly DescribeActionTargets: string[] = [
		"securityhub:DescribeActionTargets",
	];
	/** IAM actions required for the DescribeHub API call. */
	static readonly DescribeHub: string[] = ["securityhub:DescribeHub"];
	/** IAM actions required for the DescribeOrganizationConfiguration API call. */
	static readonly DescribeOrganizationConfiguration: string[] = [
		"securityhub:DescribeOrganizationConfiguration",
	];
	/** IAM actions required for the DescribeProducts API call. */
	static readonly DescribeProducts: string[] = ["securityhub:DescribeProducts"];
	/** IAM actions required for the DescribeProductsV2 API call. */
	static readonly DescribeProductsV2: string[] = [
		"securityhub:DescribeProductsV2",
	];
	/** IAM actions required for the DescribeSecurityHubV2 API call. */
	static readonly DescribeSecurityHubV2: string[] = [
		"securityhub:DescribeSecurityHubV2",
	];
	/** IAM actions required for the DescribeStandards API call. */
	static readonly DescribeStandards: string[] = [
		"securityhub:DescribeStandards",
	];
	/** IAM actions required for the DescribeStandardsControls API call. */
	static readonly DescribeStandardsControls: string[] = [
		"securityhub:DescribeStandardsControls",
	];
	/** IAM actions required for the DisableImportFindingsForProduct API call. */
	static readonly DisableImportFindingsForProduct: string[] = [
		"securityhub:DisableImportFindingsForProduct",
	];
	/** IAM actions required for the DisableOrganizationAdminAccount API call. */
	static readonly DisableOrganizationAdminAccount: string[] = [
		"securityhub:DisableOrganizationAdminAccount",
	];
	/** IAM actions required for the DisableSecurityHub API call. */
	static readonly DisableSecurityHub: string[] = [
		"securityhub:DisableSecurityHub",
	];
	/** IAM actions required for the DisableSecurityHubFeatureV2 API call. */
	static readonly DisableSecurityHubFeatureV2: string[] = [
		"securityhub:DisableSecurityHubFeatureV2",
	];
	/** IAM actions required for the DisableSecurityHubV2 API call. */
	static readonly DisableSecurityHubV2: string[] = [
		"securityhub:DisableSecurityHubV2",
	];
	/** IAM actions required for the DisassociateFromAdministratorAccount API call. */
	static readonly DisassociateFromAdministratorAccount: string[] = [
		"securityhub:DisassociateFromAdministratorAccount",
	];
	/** IAM actions required for the DisassociateFromMasterAccount API call. */
	static readonly DisassociateFromMasterAccount: string[] = [
		"securityhub:DisassociateFromMasterAccount",
	];
	/** IAM actions required for the DisassociateMembers API call. */
	static readonly DisassociateMembers: string[] = [
		"securityhub:DisassociateMembers",
	];
	/** IAM actions required for the EnableImportFindingsForProduct API call. */
	static readonly EnableImportFindingsForProduct: string[] = [
		"securityhub:EnableImportFindingsForProduct",
	];
	/** IAM actions required for the EnableOrganizationAdminAccount API call. */
	static readonly EnableOrganizationAdminAccount: string[] = [
		"securityhub:EnableOrganizationAdminAccount",
	];
	/** IAM actions required for the EnableSecurityHub API call. */
	static readonly EnableSecurityHub: string[] = [
		"securityhub:EnableSecurityHub",
		"securityhub:TagResource",
	];
	/** IAM actions required for the EnableSecurityHubFeatureV2 API call. */
	static readonly EnableSecurityHubFeatureV2: string[] = [
		"securityhub:EnableSecurityHubFeatureV2",
	];
	/** IAM actions required for the EnableSecurityHubV2 API call. */
	static readonly EnableSecurityHubV2: string[] = [
		"securityhub:EnableSecurityHubV2",
		"securityhub:TagResource",
	];
	/** IAM actions required for the GenerateRecommendedPolicyV2 API call. */
	static readonly GenerateRecommendedPolicyV2: string[] = [
		"securityhub:GenerateRecommendedPolicyV2",
	];
	/** IAM actions required for the GetAdministratorAccount API call. */
	static readonly opGetAdministratorAccount: string[] = [
		"securityhub:GetAdministratorAccount",
	];
	/** IAM actions required for the GetAggregatorV2 API call. */
	static readonly opGetAggregatorV2: string[] = ["securityhub:GetAggregatorV2"];
	/** IAM actions required for the GetAutomationRuleV2 API call. */
	static readonly opGetAutomationRuleV2: string[] = [
		"securityhub:GetAutomationRuleV2",
	];
	/** IAM actions required for the GetConfigurationPolicy API call. */
	static readonly opGetConfigurationPolicy: string[] = [
		"securityhub:GetConfigurationPolicy",
	];
	/** IAM actions required for the GetConfigurationPolicyAssociation API call. */
	static readonly opGetConfigurationPolicyAssociation: string[] = [
		"securityhub:GetConfigurationPolicyAssociation",
	];
	/** IAM actions required for the GetConnector API call. */
	static readonly opGetConnector: string[] = ["securityhub:GetConnector"];
	/** IAM actions required for the GetConnectorV2 API call. */
	static readonly opGetConnectorV2: string[] = ["securityhub:GetConnectorV2"];
	/** IAM actions required for the GetEnabledStandards API call. */
	static readonly opGetEnabledStandards: string[] = [
		"securityhub:GetEnabledStandards",
	];
	/** IAM actions required for the GetFindingAggregator API call. */
	static readonly opGetFindingAggregator: string[] = [
		"securityhub:GetFindingAggregator",
	];
	/** IAM actions required for the GetFindingHistory API call. */
	static readonly opGetFindingHistory: string[] = [
		"securityhub:GetFindingHistory",
	];
	/** IAM actions required for the GetFindingStatisticsV2 API call. */
	static readonly opGetFindingStatisticsV2: string[] = [
		"securityhub:GetAdhocInsightResults",
	];
	/** IAM actions required for the GetFindings API call. */
	static readonly opGetFindings: string[] = ["securityhub:GetFindings"];
	/** IAM actions required for the GetFindingsTrendsV2 API call. */
	static readonly opGetFindingsTrendsV2: string[] = [
		"securityhub:GetFindingsTrendsV2",
	];
	/** IAM actions required for the GetFindingsV2 API call. */
	static readonly opGetFindingsV2: string[] = ["securityhub:GetFindings"];
	/** IAM actions required for the GetInsightResults API call. */
	static readonly opGetInsightResults: string[] = [
		"securityhub:GetInsightResults",
	];
	/** IAM actions required for the GetInsights API call. */
	static readonly opGetInsights: string[] = ["securityhub:GetInsights"];
	/** IAM actions required for the GetInvitationsCount API call. */
	static readonly opGetInvitationsCount: string[] = [
		"securityhub:GetInvitationsCount",
	];
	/** IAM actions required for the GetMasterAccount API call. */
	static readonly opGetMasterAccount: string[] = [
		"securityhub:GetMasterAccount",
	];
	/** IAM actions required for the GetMembers API call. */
	static readonly opGetMembers: string[] = ["securityhub:GetMembers"];
	/** IAM actions required for the GetRecommendedPolicyV2 API call. */
	static readonly opGetRecommendedPolicyV2: string[] = [
		"securityhub:GetRecommendedPolicyV2",
	];
	/** IAM actions required for the GetResourcesStatisticsV2 API call. */
	static readonly opGetResourcesStatisticsV2: string[] = [
		"securityhub:GetResourcesStatisticsV2",
	];
	/** IAM actions required for the GetResourcesTrendsV2 API call. */
	static readonly opGetResourcesTrendsV2: string[] = [
		"securityhub:GetResourcesTrendsV2",
	];
	/** IAM actions required for the GetResourcesV2 API call. */
	static readonly opGetResourcesV2: string[] = ["securityhub:GetResourcesV2"];
	/** IAM actions required for the GetSecurityControlDefinition API call. */
	static readonly opGetSecurityControlDefinition: string[] = [
		"securityhub:GetSecurityControlDefinition",
	];
	/** IAM actions required for the InviteMembers API call. */
	static readonly InviteMembers: string[] = ["securityhub:InviteMembers"];
	/** IAM actions required for the ListAggregatorsV2 API call. */
	static readonly ListAggregatorsV2: string[] = [
		"securityhub:ListAggregatorsV2",
	];
	/** IAM actions required for the ListAutomationRules API call. */
	static readonly ListAutomationRules: string[] = [
		"securityhub:ListAutomationRules",
	];
	/** IAM actions required for the ListAutomationRulesV2 API call. */
	static readonly ListAutomationRulesV2: string[] = [
		"securityhub:ListAutomationRulesV2",
	];
	/** IAM actions required for the ListConfigurationPolicies API call. */
	static readonly ListConfigurationPolicies: string[] = [
		"securityhub:ListConfigurationPolicies",
	];
	/** IAM actions required for the ListConfigurationPolicyAssociations API call. */
	static readonly ListConfigurationPolicyAssociations: string[] = [
		"securityhub:ListConfigurationPolicyAssociations",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly ListConnectors: string[] = ["securityhub:ListConnectors"];
	/** IAM actions required for the ListConnectorsV2 API call. */
	static readonly ListConnectorsV2: string[] = ["securityhub:ListConnectorsV2"];
	/** IAM actions required for the ListEnabledProductsForImport API call. */
	static readonly ListEnabledProductsForImport: string[] = [
		"securityhub:ListEnabledProductsForImport",
	];
	/** IAM actions required for the ListFindingAggregators API call. */
	static readonly ListFindingAggregators: string[] = [
		"securityhub:ListFindingAggregators",
	];
	/** IAM actions required for the ListFreeTrialStatusesV2 API call. */
	static readonly ListFreeTrialStatusesV2: string[] = [
		"securityhub:ListFreeTrialStatusesV2",
	];
	/** IAM actions required for the ListInvitations API call. */
	static readonly ListInvitations: string[] = ["securityhub:ListInvitations"];
	/** IAM actions required for the ListMembers API call. */
	static readonly ListMembers: string[] = ["securityhub:ListMembers"];
	/** IAM actions required for the ListOrganizationAdminAccounts API call. */
	static readonly ListOrganizationAdminAccounts: string[] = [
		"securityhub:ListOrganizationAdminAccounts",
	];
	/** IAM actions required for the ListSecurityControlDefinitions API call. */
	static readonly ListSecurityControlDefinitions: string[] = [
		"securityhub:ListSecurityControlDefinitions",
	];
	/** IAM actions required for the ListStandardsControlAssociations API call. */
	static readonly ListStandardsControlAssociations: string[] = [
		"securityhub:DescribeStandardsControls",
		"securityhub:ListStandardsControlAssociations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"securityhub:ListTagsForResource",
	];
	/** IAM actions required for the RegisterConnectorV2 API call. */
	static readonly RegisterConnectorV2: string[] = [];
	/** IAM actions required for the StartConfigurationPolicyAssociation API call. */
	static readonly StartConfigurationPolicyAssociation: string[] = [
		"securityhub:StartConfigurationPolicyAssociation",
	];
	/** IAM actions required for the StartConfigurationPolicyDisassociation API call. */
	static readonly StartConfigurationPolicyDisassociation: string[] = [
		"securityhub:StartConfigurationPolicyDisassociation",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["securityhub:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["securityhub:UntagResource"];
	/** IAM actions required for the UpdateActionTarget API call. */
	static readonly UpdateActionTarget: string[] = [
		"securityhub:UpdateActionTarget",
	];
	/** IAM actions required for the UpdateAggregatorV2 API call. */
	static readonly UpdateAggregatorV2: string[] = [
		"securityhub:UpdateAggregatorV2",
	];
	/** IAM actions required for the UpdateAutomationRuleV2 API call. */
	static readonly UpdateAutomationRuleV2: string[] = [
		"securityhub:UpdateAutomationRuleV2",
	];
	/** IAM actions required for the UpdateConfigurationPolicy API call. */
	static readonly UpdateConfigurationPolicy: string[] = [
		"securityhub:UpdateConfigurationPolicy",
	];
	/** IAM actions required for the UpdateConnector API call. */
	static readonly UpdateConnector: string[] = ["securityhub:UpdateConnector"];
	/** IAM actions required for the UpdateConnectorV2 API call. */
	static readonly UpdateConnectorV2: string[] = [
		"securityhub:UpdateConnectorV2",
	];
	/** IAM actions required for the UpdateFindingAggregator API call. */
	static readonly UpdateFindingAggregator: string[] = [
		"securityhub:UpdateFindingAggregator",
	];
	/** IAM actions required for the UpdateFindings API call. */
	static readonly UpdateFindings: string[] = ["securityhub:UpdateFindings"];
	/** IAM actions required for the UpdateInsight API call. */
	static readonly UpdateInsight: string[] = ["securityhub:UpdateInsight"];
	/** IAM actions required for the UpdateOrganizationConfiguration API call. */
	static readonly UpdateOrganizationConfiguration: string[] = [
		"securityhub:UpdateOrganizationConfiguration",
	];
	/** IAM actions required for the UpdateSecurityControl API call. */
	static readonly UpdateSecurityControl: string[] = [
		"securityhub:UpdateSecurityControl",
		"securityhub:UpdateStandardsControl",
	];
	/** IAM actions required for the UpdateSecurityHubConfiguration API call. */
	static readonly UpdateSecurityHubConfiguration: string[] = [
		"securityhub:UpdateSecurityHubConfiguration",
	];
	/** IAM actions required for the UpdateStandardsControl API call. */
	static readonly UpdateStandardsControl: string[] = [
		"securityhub:UpdateStandardsControl",
	];
}

/**
 * Condition key constants and builders for securityhub.
 */
export class SecurityHubConditions {
	/** Condition keys applicable to the BatchImportFindings action. */
	static readonly BatchImportFindingsConditionKeys: string[] = [
		"securityhub:TargetAccount",
	];
	/** Condition keys applicable to the BatchUpdateFindings action. */
	static readonly BatchUpdateFindingsConditionKeys: string[] = [
		"securityhub:ASFFSyntaxPath/${ASFFSyntaxPath}",
		"securityhub:OCSFSyntaxPath/${OCSFSyntaxPath}",
	];
	/** Condition keys applicable to the CreateAutomationRule action. */
	static readonly CreateAutomationRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAutomationRuleV2 action. */
	static readonly CreateAutomationRuleV2ConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConfigurationPolicy action. */
	static readonly CreateConfigurationPolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnector action. */
	static readonly CreateConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnectorV2 action. */
	static readonly CreateConnectorV2ConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the EnableSecurityHub action. */
	static readonly EnableSecurityHubConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the EnableSecurityHubV2 action. */
	static readonly EnableSecurityHubV2ConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: securityhub:ASFFSyntaxPath/${ASFFSyntaxPath} (String) */
	static readonly ASFF_SYNTAX_PATH =
		"securityhub:ASFFSyntaxPath/${ASFFSyntaxPath}";
	/** Condition key: securityhub:OCSFSyntaxPath/${OCSFSyntaxPath} (String) */
	static readonly OCSF_SYNTAX_PATH =
		"securityhub:OCSFSyntaxPath/${OCSFSyntaxPath}";
	/** Condition key: securityhub:TargetAccount (String) */
	static readonly TARGET_ACCOUNT = "securityhub:TargetAccount";

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
	 * Generates a condition block for `securityhub:ASFFSyntaxPath/${ASFFSyntaxPath}`.
	 */
	static asffSyntaxPath(value: string): Record<string, Record<string, string>> {
		return {
			StringEquals: { "securityhub:ASFFSyntaxPath/${ASFFSyntaxPath}": value },
		};
	}

	/**
	 * Generates a condition block for `securityhub:OCSFSyntaxPath/${OCSFSyntaxPath}`.
	 */
	static ocsfSyntaxPath(value: string): Record<string, Record<string, string>> {
		return {
			StringEquals: { "securityhub:OCSFSyntaxPath/${OCSFSyntaxPath}": value },
		};
	}

	/**
	 * Generates a condition block for `securityhub:TargetAccount`.
	 */
	static targetAccount(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "securityhub:TargetAccount": value } };
	}
}
