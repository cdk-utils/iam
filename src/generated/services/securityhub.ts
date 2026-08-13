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
	static readonly ACCEPT_ADMINISTRATOR_INVITATION =
		"securityhub:AcceptAdministratorInvitation";
	/** [Write] securityhub:AcceptInvitation */
	static readonly ACCEPT_INVITATION = "securityhub:AcceptInvitation";
	/** [PermissionManagement] securityhub:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"securityhub:AllowVendedLogDeliveryForResource";
	/** [Write] securityhub:BatchDeleteAutomationRules */
	static readonly BATCH_DELETE_AUTOMATION_RULES =
		"securityhub:BatchDeleteAutomationRules";
	/** [Write] securityhub:BatchDisableStandards */
	static readonly BATCH_DISABLE_STANDARDS = "securityhub:BatchDisableStandards";
	/** [Write] securityhub:BatchEnableStandards */
	static readonly BATCH_ENABLE_STANDARDS = "securityhub:BatchEnableStandards";
	/** [Read] securityhub:BatchGetAutomationRules */
	static readonly BATCH_GET_AUTOMATION_RULES =
		"securityhub:BatchGetAutomationRules";
	/** [Read] securityhub:BatchGetConfigurationPolicyAssociations */
	static readonly BATCH_GET_CONFIGURATION_POLICY_ASSOCIATIONS =
		"securityhub:BatchGetConfigurationPolicyAssociations";
	/** [Read] securityhub:BatchGetControlEvaluations */
	static readonly BATCH_GET_CONTROL_EVALUATIONS =
		"securityhub:BatchGetControlEvaluations";
	/** [Read] securityhub:BatchGetEnabledRegionsV2 */
	static readonly BATCH_GET_ENABLED_REGIONS_V2 =
		"securityhub:BatchGetEnabledRegionsV2";
	/** [Read] securityhub:BatchGetSecurityControls */
	static readonly BATCH_GET_SECURITY_CONTROLS =
		"securityhub:BatchGetSecurityControls";
	/** [Read] securityhub:BatchGetStandardsControlAssociations */
	static readonly BATCH_GET_STANDARDS_CONTROL_ASSOCIATIONS =
		"securityhub:BatchGetStandardsControlAssociations";
	/** [Write] securityhub:BatchImportFindings */
	static readonly BATCH_IMPORT_FINDINGS = "securityhub:BatchImportFindings";
	/** [Write] securityhub:BatchUpdateAutomationRules */
	static readonly BATCH_UPDATE_AUTOMATION_RULES =
		"securityhub:BatchUpdateAutomationRules";
	/** [Write] securityhub:BatchUpdateFindings */
	static readonly BATCH_UPDATE_FINDINGS = "securityhub:BatchUpdateFindings";
	/** [Write] securityhub:BatchUpdateStandardsControlAssociations */
	static readonly BATCH_UPDATE_STANDARDS_CONTROL_ASSOCIATIONS =
		"securityhub:BatchUpdateStandardsControlAssociations";
	/** [Write] securityhub:ConnectorRegistrationsV2 */
	static readonly CONNECTOR_REGISTRATIONS_V2 =
		"securityhub:ConnectorRegistrationsV2";
	/** [Write] securityhub:CreateActionTarget */
	static readonly CREATE_ACTION_TARGET = "securityhub:CreateActionTarget";
	/** [Write] securityhub:CreateAggregatorV2 */
	static readonly CREATE_AGGREGATOR_V2 = "securityhub:CreateAggregatorV2";
	/** [Write] securityhub:CreateAutomationRule */
	static readonly CREATE_AUTOMATION_RULE = "securityhub:CreateAutomationRule";
	/** [Write] securityhub:CreateAutomationRuleV2 */
	static readonly CREATE_AUTOMATION_RULE_V2 =
		"securityhub:CreateAutomationRuleV2";
	/** [Write] securityhub:CreateConfigurationPolicy */
	static readonly CREATE_CONFIGURATION_POLICY =
		"securityhub:CreateConfigurationPolicy";
	/** [Write] securityhub:CreateConnector */
	static readonly CREATE_CONNECTOR = "securityhub:CreateConnector";
	/** [Write] securityhub:CreateConnectorV2 */
	static readonly CREATE_CONNECTOR_V2 = "securityhub:CreateConnectorV2";
	/** [Write] securityhub:CreateFindingAggregator */
	static readonly CREATE_FINDING_AGGREGATOR =
		"securityhub:CreateFindingAggregator";
	/** [Write] securityhub:CreateInsight */
	static readonly CREATE_INSIGHT = "securityhub:CreateInsight";
	/** [Write] securityhub:CreateMembers */
	static readonly CREATE_MEMBERS = "securityhub:CreateMembers";
	/** [Write] securityhub:CreateTicketV2 */
	static readonly CREATE_TICKET_V2 = "securityhub:CreateTicketV2";
	/** [Write] securityhub:DeclineInvitations */
	static readonly DECLINE_INVITATIONS = "securityhub:DeclineInvitations";
	/** [Write] securityhub:DeleteActionTarget */
	static readonly DELETE_ACTION_TARGET = "securityhub:DeleteActionTarget";
	/** [Write] securityhub:DeleteAggregatorV2 */
	static readonly DELETE_AGGREGATOR_V2 = "securityhub:DeleteAggregatorV2";
	/** [Write] securityhub:DeleteAutomationRuleV2 */
	static readonly DELETE_AUTOMATION_RULE_V2 =
		"securityhub:DeleteAutomationRuleV2";
	/** [Write] securityhub:DeleteConfigurationPolicy */
	static readonly DELETE_CONFIGURATION_POLICY =
		"securityhub:DeleteConfigurationPolicy";
	/** [Write] securityhub:DeleteConnector */
	static readonly DELETE_CONNECTOR = "securityhub:DeleteConnector";
	/** [Write] securityhub:DeleteConnectorV2 */
	static readonly DELETE_CONNECTOR_V2 = "securityhub:DeleteConnectorV2";
	/** [Write] securityhub:DeleteFindingAggregator */
	static readonly DELETE_FINDING_AGGREGATOR =
		"securityhub:DeleteFindingAggregator";
	/** [Write] securityhub:DeleteInsight */
	static readonly DELETE_INSIGHT = "securityhub:DeleteInsight";
	/** [Write] securityhub:DeleteInvitations */
	static readonly DELETE_INVITATIONS = "securityhub:DeleteInvitations";
	/** [Write] securityhub:DeleteMembers */
	static readonly DELETE_MEMBERS = "securityhub:DeleteMembers";
	/** [Read] securityhub:DescribeActionTargets */
	static readonly DESCRIBE_ACTION_TARGETS = "securityhub:DescribeActionTargets";
	/** [Read] securityhub:DescribeHub */
	static readonly DESCRIBE_HUB = "securityhub:DescribeHub";
	/** [Read] securityhub:DescribeOrganizationConfiguration */
	static readonly DESCRIBE_ORGANIZATION_CONFIGURATION =
		"securityhub:DescribeOrganizationConfiguration";
	/** [Read] securityhub:DescribeProducts */
	static readonly DESCRIBE_PRODUCTS = "securityhub:DescribeProducts";
	/** [Read] securityhub:DescribeProductsV2 */
	static readonly DESCRIBE_PRODUCTS_V2 = "securityhub:DescribeProductsV2";
	/** [Read] securityhub:DescribeSecurityHubV2 */
	static readonly DESCRIBE_SECURITY_HUB_V2 =
		"securityhub:DescribeSecurityHubV2";
	/** [Read] securityhub:DescribeStandards */
	static readonly DESCRIBE_STANDARDS = "securityhub:DescribeStandards";
	/** [Read] securityhub:DescribeStandardsControls */
	static readonly DESCRIBE_STANDARDS_CONTROLS =
		"securityhub:DescribeStandardsControls";
	/** [Write] securityhub:DisableImportFindingsForProduct */
	static readonly DISABLE_IMPORT_FINDINGS_FOR_PRODUCT =
		"securityhub:DisableImportFindingsForProduct";
	/** [Write] securityhub:DisableOrganizationAdminAccount */
	static readonly DISABLE_ORGANIZATION_ADMIN_ACCOUNT =
		"securityhub:DisableOrganizationAdminAccount";
	/** [Write] securityhub:DisableSecurityHub */
	static readonly DISABLE_SECURITY_HUB = "securityhub:DisableSecurityHub";
	/** [Write] securityhub:DisableSecurityHubFeatureV2 */
	static readonly DISABLE_SECURITY_HUB_FEATURE_V2 =
		"securityhub:DisableSecurityHubFeatureV2";
	/** [Write] securityhub:DisableSecurityHubV2 */
	static readonly DISABLE_SECURITY_HUB_V2 = "securityhub:DisableSecurityHubV2";
	/** [Write] securityhub:DisassociateFromAdministratorAccount */
	static readonly DISASSOCIATE_FROM_ADMINISTRATOR_ACCOUNT =
		"securityhub:DisassociateFromAdministratorAccount";
	/** [Write] securityhub:DisassociateFromMasterAccount */
	static readonly DISASSOCIATE_FROM_MASTER_ACCOUNT =
		"securityhub:DisassociateFromMasterAccount";
	/** [Write] securityhub:DisassociateMembers */
	static readonly DISASSOCIATE_MEMBERS = "securityhub:DisassociateMembers";
	/** [Write] securityhub:EnableImportFindingsForProduct */
	static readonly ENABLE_IMPORT_FINDINGS_FOR_PRODUCT =
		"securityhub:EnableImportFindingsForProduct";
	/** [Write] securityhub:EnableOrganizationAdminAccount */
	static readonly ENABLE_ORGANIZATION_ADMIN_ACCOUNT =
		"securityhub:EnableOrganizationAdminAccount";
	/** [Write] securityhub:EnableSecurityHub */
	static readonly ENABLE_SECURITY_HUB = "securityhub:EnableSecurityHub";
	/** [Write] securityhub:EnableSecurityHubFeatureV2 */
	static readonly ENABLE_SECURITY_HUB_FEATURE_V2 =
		"securityhub:EnableSecurityHubFeatureV2";
	/** [Write] securityhub:EnableSecurityHubV2 */
	static readonly ENABLE_SECURITY_HUB_V2 = "securityhub:EnableSecurityHubV2";
	/** [Write] securityhub:GenerateRecommendedPolicyV2 */
	static readonly GENERATE_RECOMMENDED_POLICY_V2 =
		"securityhub:GenerateRecommendedPolicyV2";
	/** [Read] securityhub:GetAdhocInsightResults */
	static readonly GET_ADHOC_INSIGHT_RESULTS =
		"securityhub:GetAdhocInsightResults";
	/** [Read] securityhub:GetAdministratorAccount */
	static readonly GET_ADMINISTRATOR_ACCOUNT =
		"securityhub:GetAdministratorAccount";
	/** [Read] securityhub:GetAggregatorV2 */
	static readonly GET_AGGREGATOR_V2 = "securityhub:GetAggregatorV2";
	/** [Read] securityhub:GetAutomationRuleV2 */
	static readonly GET_AUTOMATION_RULE_V2 = "securityhub:GetAutomationRuleV2";
	/** [Read] securityhub:GetConfigurationPolicy */
	static readonly GET_CONFIGURATION_POLICY =
		"securityhub:GetConfigurationPolicy";
	/** [Read] securityhub:GetConfigurationPolicyAssociation */
	static readonly GET_CONFIGURATION_POLICY_ASSOCIATION =
		"securityhub:GetConfigurationPolicyAssociation";
	/** [Read] securityhub:GetConnector */
	static readonly GET_CONNECTOR = "securityhub:GetConnector";
	/** [Read] securityhub:GetConnectorV2 */
	static readonly GET_CONNECTOR_V2 = "securityhub:GetConnectorV2";
	/** [Read] securityhub:GetControlFindingSummary */
	static readonly GET_CONTROL_FINDING_SUMMARY =
		"securityhub:GetControlFindingSummary";
	/** [Read] securityhub:GetCoverageStatisticsV2 */
	static readonly GET_COVERAGE_STATISTICS_V2 =
		"securityhub:GetCoverageStatisticsV2";
	/** [List] securityhub:GetEnabledStandards */
	static readonly GET_ENABLED_STANDARDS = "securityhub:GetEnabledStandards";
	/** [Read] securityhub:GetFindingAggregator */
	static readonly GET_FINDING_AGGREGATOR = "securityhub:GetFindingAggregator";
	/** [Read] securityhub:GetFindingHistory */
	static readonly GET_FINDING_HISTORY = "securityhub:GetFindingHistory";
	/** [Read] securityhub:GetFindings */
	static readonly GET_FINDINGS = "securityhub:GetFindings";
	/** [Read] securityhub:GetFindingsTrendsV2 */
	static readonly GET_FINDINGS_TRENDS_V2 = "securityhub:GetFindingsTrendsV2";
	/** [Read] securityhub:GetFreeTrialEndDate */
	static readonly GET_FREE_TRIAL_END_DATE = "securityhub:GetFreeTrialEndDate";
	/** [Read] securityhub:GetFreeTrialUsage */
	static readonly GET_FREE_TRIAL_USAGE = "securityhub:GetFreeTrialUsage";
	/** [Read] securityhub:GetInsightFindingTrend */
	static readonly GET_INSIGHT_FINDING_TREND =
		"securityhub:GetInsightFindingTrend";
	/** [Read] securityhub:GetInsightResults */
	static readonly GET_INSIGHT_RESULTS = "securityhub:GetInsightResults";
	/** [List] securityhub:GetInsights */
	static readonly GET_INSIGHTS = "securityhub:GetInsights";
	/** [Read] securityhub:GetInvitationsCount */
	static readonly GET_INVITATIONS_COUNT = "securityhub:GetInvitationsCount";
	/** [Read] securityhub:GetMasterAccount */
	static readonly GET_MASTER_ACCOUNT = "securityhub:GetMasterAccount";
	/** [Read] securityhub:GetMembers */
	static readonly GET_MEMBERS = "securityhub:GetMembers";
	/** [Read] securityhub:GetRecommendedPolicyV2 */
	static readonly GET_RECOMMENDED_POLICY_V2 =
		"securityhub:GetRecommendedPolicyV2";
	/** [Read] securityhub:GetResourcesStatisticsV2 */
	static readonly GET_RESOURCES_STATISTICS_V2 =
		"securityhub:GetResourcesStatisticsV2";
	/** [Read] securityhub:GetResourcesTrendsV2 */
	static readonly GET_RESOURCES_TRENDS_V2 = "securityhub:GetResourcesTrendsV2";
	/** [Read] securityhub:GetResourcesV2 */
	static readonly GET_RESOURCES_V2 = "securityhub:GetResourcesV2";
	/** [Read] securityhub:GetSecurityControlDefinition */
	static readonly GET_SECURITY_CONTROL_DEFINITION =
		"securityhub:GetSecurityControlDefinition";
	/** [Read] securityhub:GetUsage */
	static readonly GET_USAGE = "securityhub:GetUsage";
	/** [Read] securityhub:GetUsageV2 */
	static readonly GET_USAGE_V2 = "securityhub:GetUsageV2";
	/** [Write] securityhub:InviteMembers */
	static readonly INVITE_MEMBERS = "securityhub:InviteMembers";
	/** [List] securityhub:ListAccountUsageV2 */
	static readonly LIST_ACCOUNT_USAGE_V2 = "securityhub:ListAccountUsageV2";
	/** [List] securityhub:ListAggregatorsV2 */
	static readonly LIST_AGGREGATORS_V2 = "securityhub:ListAggregatorsV2";
	/** [List] securityhub:ListAutomationRules */
	static readonly LIST_AUTOMATION_RULES = "securityhub:ListAutomationRules";
	/** [List] securityhub:ListAutomationRulesV2 */
	static readonly LIST_AUTOMATION_RULES_V2 =
		"securityhub:ListAutomationRulesV2";
	/** [List] securityhub:ListConfigurationPolicies */
	static readonly LIST_CONFIGURATION_POLICIES =
		"securityhub:ListConfigurationPolicies";
	/** [List] securityhub:ListConfigurationPolicyAssociations */
	static readonly LIST_CONFIGURATION_POLICY_ASSOCIATIONS =
		"securityhub:ListConfigurationPolicyAssociations";
	/** [List] securityhub:ListConnectors */
	static readonly LIST_CONNECTORS = "securityhub:ListConnectors";
	/** [List] securityhub:ListConnectorsV2 */
	static readonly LIST_CONNECTORS_V2 = "securityhub:ListConnectorsV2";
	/** [Read] securityhub:ListControlEvaluationSummaries */
	static readonly LIST_CONTROL_EVALUATION_SUMMARIES =
		"securityhub:ListControlEvaluationSummaries";
	/** [List] securityhub:ListEnabledProductsForImport */
	static readonly LIST_ENABLED_PRODUCTS_FOR_IMPORT =
		"securityhub:ListEnabledProductsForImport";
	/** [List] securityhub:ListFindingAggregators */
	static readonly LIST_FINDING_AGGREGATORS =
		"securityhub:ListFindingAggregators";
	/** [List] securityhub:ListFreeTrialStatusesV2 */
	static readonly LIST_FREE_TRIAL_STATUSES_V2 =
		"securityhub:ListFreeTrialStatusesV2";
	/** [List] securityhub:ListInvitations */
	static readonly LIST_INVITATIONS = "securityhub:ListInvitations";
	/** [List] securityhub:ListMembers */
	static readonly LIST_MEMBERS = "securityhub:ListMembers";
	/** [List] securityhub:ListOrganizationAdminAccounts */
	static readonly LIST_ORGANIZATION_ADMIN_ACCOUNTS =
		"securityhub:ListOrganizationAdminAccounts";
	/** [List] securityhub:ListSecurityControlDefinitions */
	static readonly LIST_SECURITY_CONTROL_DEFINITIONS =
		"securityhub:ListSecurityControlDefinitions";
	/** [List] securityhub:ListStandardsControlAssociations */
	static readonly LIST_STANDARDS_CONTROL_ASSOCIATIONS =
		"securityhub:ListStandardsControlAssociations";
	/** [Read] securityhub:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "securityhub:ListTagsForResource";
	/** [Read] securityhub:SendFindingEvents */
	static readonly SEND_FINDING_EVENTS = "securityhub:SendFindingEvents";
	/** [Read] securityhub:SendInsightEvents */
	static readonly SEND_INSIGHT_EVENTS = "securityhub:SendInsightEvents";
	/** [Write] securityhub:StartConfigurationPolicyAssociation */
	static readonly START_CONFIGURATION_POLICY_ASSOCIATION =
		"securityhub:StartConfigurationPolicyAssociation";
	/** [Write] securityhub:StartConfigurationPolicyDisassociation */
	static readonly START_CONFIGURATION_POLICY_DISASSOCIATION =
		"securityhub:StartConfigurationPolicyDisassociation";
	/** [Tagging] securityhub:TagResource */
	static readonly TAG_RESOURCE = "securityhub:TagResource";
	/** [Tagging] securityhub:UntagResource */
	static readonly UNTAG_RESOURCE = "securityhub:UntagResource";
	/** [Write] securityhub:UpdateActionTarget */
	static readonly UPDATE_ACTION_TARGET = "securityhub:UpdateActionTarget";
	/** [Write] securityhub:UpdateAggregatorV2 */
	static readonly UPDATE_AGGREGATOR_V2 = "securityhub:UpdateAggregatorV2";
	/** [Write] securityhub:UpdateAutomationRuleV2 */
	static readonly UPDATE_AUTOMATION_RULE_V2 =
		"securityhub:UpdateAutomationRuleV2";
	/** [Write] securityhub:UpdateConfigurationPolicy */
	static readonly UPDATE_CONFIGURATION_POLICY =
		"securityhub:UpdateConfigurationPolicy";
	/** [Write] securityhub:UpdateConnector */
	static readonly UPDATE_CONNECTOR = "securityhub:UpdateConnector";
	/** [Write] securityhub:UpdateConnectorV2 */
	static readonly UPDATE_CONNECTOR_V2 = "securityhub:UpdateConnectorV2";
	/** [Write] securityhub:UpdateFindingAggregator */
	static readonly UPDATE_FINDING_AGGREGATOR =
		"securityhub:UpdateFindingAggregator";
	/** [Write] securityhub:UpdateFindings */
	static readonly UPDATE_FINDINGS = "securityhub:UpdateFindings";
	/** [Write] securityhub:UpdateInsight */
	static readonly UPDATE_INSIGHT = "securityhub:UpdateInsight";
	/** [Write] securityhub:UpdateOrganizationConfiguration */
	static readonly UPDATE_ORGANIZATION_CONFIGURATION =
		"securityhub:UpdateOrganizationConfiguration";
	/** [Write] securityhub:UpdateSecurityControl */
	static readonly UPDATE_SECURITY_CONTROL = "securityhub:UpdateSecurityControl";
	/** [Write] securityhub:UpdateSecurityHubConfiguration */
	static readonly UPDATE_SECURITY_HUB_CONFIGURATION =
		"securityhub:UpdateSecurityHubConfiguration";
	/** [Write] securityhub:UpdateStandardsControl */
	static readonly UPDATE_STANDARDS_CONTROL =
		"securityhub:UpdateStandardsControl";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SecurityHubActions.BATCH_GET_AUTOMATION_RULES,
		SecurityHubActions.BATCH_GET_CONFIGURATION_POLICY_ASSOCIATIONS,
		SecurityHubActions.BATCH_GET_CONTROL_EVALUATIONS,
		SecurityHubActions.BATCH_GET_ENABLED_REGIONS_V2,
		SecurityHubActions.BATCH_GET_SECURITY_CONTROLS,
		SecurityHubActions.BATCH_GET_STANDARDS_CONTROL_ASSOCIATIONS,
		SecurityHubActions.DESCRIBE_ACTION_TARGETS,
		SecurityHubActions.DESCRIBE_HUB,
		SecurityHubActions.DESCRIBE_ORGANIZATION_CONFIGURATION,
		SecurityHubActions.DESCRIBE_PRODUCTS,
		SecurityHubActions.DESCRIBE_PRODUCTS_V2,
		SecurityHubActions.DESCRIBE_SECURITY_HUB_V2,
		SecurityHubActions.DESCRIBE_STANDARDS,
		SecurityHubActions.DESCRIBE_STANDARDS_CONTROLS,
		SecurityHubActions.GET_ADHOC_INSIGHT_RESULTS,
		SecurityHubActions.GET_ADMINISTRATOR_ACCOUNT,
		SecurityHubActions.GET_AGGREGATOR_V2,
		SecurityHubActions.GET_AUTOMATION_RULE_V2,
		SecurityHubActions.GET_CONFIGURATION_POLICY,
		SecurityHubActions.GET_CONFIGURATION_POLICY_ASSOCIATION,
		SecurityHubActions.GET_CONNECTOR,
		SecurityHubActions.GET_CONNECTOR_V2,
		SecurityHubActions.GET_CONTROL_FINDING_SUMMARY,
		SecurityHubActions.GET_COVERAGE_STATISTICS_V2,
		SecurityHubActions.GET_FINDING_AGGREGATOR,
		SecurityHubActions.GET_FINDING_HISTORY,
		SecurityHubActions.GET_FINDINGS,
		SecurityHubActions.GET_FINDINGS_TRENDS_V2,
		SecurityHubActions.GET_FREE_TRIAL_END_DATE,
		SecurityHubActions.GET_FREE_TRIAL_USAGE,
		SecurityHubActions.GET_INSIGHT_FINDING_TREND,
		SecurityHubActions.GET_INSIGHT_RESULTS,
		SecurityHubActions.GET_INVITATIONS_COUNT,
		SecurityHubActions.GET_MASTER_ACCOUNT,
		SecurityHubActions.GET_MEMBERS,
		SecurityHubActions.GET_RECOMMENDED_POLICY_V2,
		SecurityHubActions.GET_RESOURCES_STATISTICS_V2,
		SecurityHubActions.GET_RESOURCES_TRENDS_V2,
		SecurityHubActions.GET_RESOURCES_V2,
		SecurityHubActions.GET_SECURITY_CONTROL_DEFINITION,
		SecurityHubActions.GET_USAGE,
		SecurityHubActions.GET_USAGE_V2,
		SecurityHubActions.LIST_CONTROL_EVALUATION_SUMMARIES,
		SecurityHubActions.LIST_TAGS_FOR_RESOURCE,
		SecurityHubActions.SEND_FINDING_EVENTS,
		SecurityHubActions.SEND_INSIGHT_EVENTS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SecurityHubActions.ACCEPT_ADMINISTRATOR_INVITATION,
		SecurityHubActions.ACCEPT_INVITATION,
		SecurityHubActions.BATCH_DELETE_AUTOMATION_RULES,
		SecurityHubActions.BATCH_DISABLE_STANDARDS,
		SecurityHubActions.BATCH_ENABLE_STANDARDS,
		SecurityHubActions.BATCH_IMPORT_FINDINGS,
		SecurityHubActions.BATCH_UPDATE_AUTOMATION_RULES,
		SecurityHubActions.BATCH_UPDATE_FINDINGS,
		SecurityHubActions.BATCH_UPDATE_STANDARDS_CONTROL_ASSOCIATIONS,
		SecurityHubActions.CONNECTOR_REGISTRATIONS_V2,
		SecurityHubActions.CREATE_ACTION_TARGET,
		SecurityHubActions.CREATE_AGGREGATOR_V2,
		SecurityHubActions.CREATE_AUTOMATION_RULE,
		SecurityHubActions.CREATE_AUTOMATION_RULE_V2,
		SecurityHubActions.CREATE_CONFIGURATION_POLICY,
		SecurityHubActions.CREATE_CONNECTOR,
		SecurityHubActions.CREATE_CONNECTOR_V2,
		SecurityHubActions.CREATE_FINDING_AGGREGATOR,
		SecurityHubActions.CREATE_INSIGHT,
		SecurityHubActions.CREATE_MEMBERS,
		SecurityHubActions.CREATE_TICKET_V2,
		SecurityHubActions.DECLINE_INVITATIONS,
		SecurityHubActions.DELETE_ACTION_TARGET,
		SecurityHubActions.DELETE_AGGREGATOR_V2,
		SecurityHubActions.DELETE_AUTOMATION_RULE_V2,
		SecurityHubActions.DELETE_CONFIGURATION_POLICY,
		SecurityHubActions.DELETE_CONNECTOR,
		SecurityHubActions.DELETE_CONNECTOR_V2,
		SecurityHubActions.DELETE_FINDING_AGGREGATOR,
		SecurityHubActions.DELETE_INSIGHT,
		SecurityHubActions.DELETE_INVITATIONS,
		SecurityHubActions.DELETE_MEMBERS,
		SecurityHubActions.DISABLE_IMPORT_FINDINGS_FOR_PRODUCT,
		SecurityHubActions.DISABLE_ORGANIZATION_ADMIN_ACCOUNT,
		SecurityHubActions.DISABLE_SECURITY_HUB,
		SecurityHubActions.DISABLE_SECURITY_HUB_FEATURE_V2,
		SecurityHubActions.DISABLE_SECURITY_HUB_V2,
		SecurityHubActions.DISASSOCIATE_FROM_ADMINISTRATOR_ACCOUNT,
		SecurityHubActions.DISASSOCIATE_FROM_MASTER_ACCOUNT,
		SecurityHubActions.DISASSOCIATE_MEMBERS,
		SecurityHubActions.ENABLE_IMPORT_FINDINGS_FOR_PRODUCT,
		SecurityHubActions.ENABLE_ORGANIZATION_ADMIN_ACCOUNT,
		SecurityHubActions.ENABLE_SECURITY_HUB,
		SecurityHubActions.ENABLE_SECURITY_HUB_FEATURE_V2,
		SecurityHubActions.ENABLE_SECURITY_HUB_V2,
		SecurityHubActions.GENERATE_RECOMMENDED_POLICY_V2,
		SecurityHubActions.INVITE_MEMBERS,
		SecurityHubActions.START_CONFIGURATION_POLICY_ASSOCIATION,
		SecurityHubActions.START_CONFIGURATION_POLICY_DISASSOCIATION,
		SecurityHubActions.UPDATE_ACTION_TARGET,
		SecurityHubActions.UPDATE_AGGREGATOR_V2,
		SecurityHubActions.UPDATE_AUTOMATION_RULE_V2,
		SecurityHubActions.UPDATE_CONFIGURATION_POLICY,
		SecurityHubActions.UPDATE_CONNECTOR,
		SecurityHubActions.UPDATE_CONNECTOR_V2,
		SecurityHubActions.UPDATE_FINDING_AGGREGATOR,
		SecurityHubActions.UPDATE_FINDINGS,
		SecurityHubActions.UPDATE_INSIGHT,
		SecurityHubActions.UPDATE_ORGANIZATION_CONFIGURATION,
		SecurityHubActions.UPDATE_SECURITY_CONTROL,
		SecurityHubActions.UPDATE_SECURITY_HUB_CONFIGURATION,
		SecurityHubActions.UPDATE_STANDARDS_CONTROL,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SecurityHubActions.GET_ENABLED_STANDARDS,
		SecurityHubActions.GET_INSIGHTS,
		SecurityHubActions.LIST_ACCOUNT_USAGE_V2,
		SecurityHubActions.LIST_AGGREGATORS_V2,
		SecurityHubActions.LIST_AUTOMATION_RULES,
		SecurityHubActions.LIST_AUTOMATION_RULES_V2,
		SecurityHubActions.LIST_CONFIGURATION_POLICIES,
		SecurityHubActions.LIST_CONFIGURATION_POLICY_ASSOCIATIONS,
		SecurityHubActions.LIST_CONNECTORS,
		SecurityHubActions.LIST_CONNECTORS_V2,
		SecurityHubActions.LIST_ENABLED_PRODUCTS_FOR_IMPORT,
		SecurityHubActions.LIST_FINDING_AGGREGATORS,
		SecurityHubActions.LIST_FREE_TRIAL_STATUSES_V2,
		SecurityHubActions.LIST_INVITATIONS,
		SecurityHubActions.LIST_MEMBERS,
		SecurityHubActions.LIST_ORGANIZATION_ADMIN_ACCOUNTS,
		SecurityHubActions.LIST_SECURITY_CONTROL_DEFINITIONS,
		SecurityHubActions.LIST_STANDARDS_CONTROL_ASSOCIATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		SecurityHubActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SecurityHubActions.TAG_RESOURCE,
		SecurityHubActions.UNTAG_RESOURCE,
	];
}

const Aggregatorv2ArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):aggregatorv2/(?<aggregatorV2Id>[^:/?]+)$",
);
const AutomationRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):automation-rule/(?<automationRuleId>[^:/?]+)$",
);
const AutomationRulev2ArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):automation-rulev2/(?<automationRuleV2Id>[^:/?]+)$",
);
const ConfigurationPolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):configuration-policy/(?<configurationPolicyId>[^:/?]+)$",
);
const ConnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):connector/(?<connectorId>[^:/?]+)$",
);
const Connectorv2ArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):connectorv2/(?<connectorV2Id>[^:/?]+)$",
);
const FindingAggregatorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):finding-aggregator/(?<findingAggregatorId>[^:/?]+)$",
);
const HubArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):hub/default$",
);
const Hubv2ArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):hubv2/(?<hubV2Id>[^:/?]+)$",
);
const ProductArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityhub:(?<region>[^:]*):(?<account>[^:]*):product/(?<company>[^:/?]+)/(?<productId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for securityhub resources.
 */
export class SecurityHubResources {
	/**
	 * Builds an ARN for the aggregatorv2 resource.
	 */
	static aggregatorv2(props: {
		/** The AggregatorV2Id component of the ARN. */
		readonly aggregatorV2Id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAggregatorv2Arn(arn: string): {
		partition: string;
		region: string;
		account: string;
		aggregatorV2Id: string;
	} {
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
	static automationRule(props: {
		/** The AutomationRuleId component of the ARN. */
		readonly automationRuleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAutomationRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		automationRuleId: string;
	} {
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
	static automationRulev2(props: {
		/** The AutomationRuleV2Id component of the ARN. */
		readonly automationRuleV2Id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAutomationRulev2Arn(arn: string): {
		partition: string;
		region: string;
		account: string;
		automationRuleV2Id: string;
	} {
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
	static configurationPolicy(props: {
		/** The ConfigurationPolicyId component of the ARN. */
		readonly configurationPolicyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConfigurationPolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		configurationPolicyId: string;
	} {
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
	static connector(props: {
		/** The ConnectorId component of the ARN. */
		readonly connectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorId: string;
	} {
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
	static connectorv2(props: {
		/** The ConnectorV2Id component of the ARN. */
		readonly connectorV2Id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectorv2Arn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorV2Id: string;
	} {
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
	static findingAggregator(props: {
		/** The FindingAggregatorId component of the ARN. */
		readonly findingAggregatorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFindingAggregatorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		findingAggregatorId: string;
	} {
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
	static hub(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseHubArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static hubv2(props: {
		/** The HubV2Id component of the ARN. */
		readonly hubV2Id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseHubv2Arn(arn: string): {
		partition: string;
		region: string;
		account: string;
		hubV2Id: string;
	} {
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
	static product(props: {
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
	}): string {
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
	static parseProductArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		company: string;
		productId: string;
	} {
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
	static readonly ACCEPT_ADMINISTRATOR_INVITATION: string[] = [
		"securityhub:AcceptAdministratorInvitation",
	];
	/** IAM actions required for the AcceptInvitation API call. */
	static readonly ACCEPT_INVITATION: string[] = [
		"securityhub:AcceptInvitation",
	];
	/** IAM actions required for the BatchDeleteAutomationRules API call. */
	static readonly BATCH_DELETE_AUTOMATION_RULES: string[] = [
		"securityhub:BatchDeleteAutomationRules",
	];
	/** IAM actions required for the BatchDisableStandards API call. */
	static readonly BATCH_DISABLE_STANDARDS: string[] = [
		"securityhub:BatchDisableStandards",
	];
	/** IAM actions required for the BatchEnableStandards API call. */
	static readonly BATCH_ENABLE_STANDARDS: string[] = [
		"securityhub:BatchEnableStandards",
	];
	/** IAM actions required for the BatchGetAutomationRules API call. */
	static readonly BATCH_GET_AUTOMATION_RULES: string[] = [
		"securityhub:BatchGetAutomationRules",
	];
	/** IAM actions required for the BatchGetConfigurationPolicyAssociations API call. */
	static readonly BATCH_GET_CONFIGURATION_POLICY_ASSOCIATIONS: string[] = [
		"securityhub:BatchGetConfigurationPolicyAssociations",
	];
	/** IAM actions required for the BatchGetSecurityControls API call. */
	static readonly BATCH_GET_SECURITY_CONTROLS: string[] = [
		"securityhub:BatchGetSecurityControls",
		"securityhub:DescribeStandardsControls",
	];
	/** IAM actions required for the BatchGetStandardsControlAssociations API call. */
	static readonly BATCH_GET_STANDARDS_CONTROL_ASSOCIATIONS: string[] = [
		"securityhub:BatchGetStandardsControlAssociations",
		"securityhub:DescribeStandardsControls",
	];
	/** IAM actions required for the BatchImportFindings API call. */
	static readonly BATCH_IMPORT_FINDINGS: string[] = [
		"securityhub:BatchImportFindings",
	];
	/** IAM actions required for the BatchUpdateAutomationRules API call. */
	static readonly BATCH_UPDATE_AUTOMATION_RULES: string[] = [
		"securityhub:BatchUpdateAutomationRules",
	];
	/** IAM actions required for the BatchUpdateFindings API call. */
	static readonly BATCH_UPDATE_FINDINGS: string[] = [
		"securityhub:BatchUpdateFindings",
	];
	/** IAM actions required for the BatchUpdateFindingsV2 API call. */
	static readonly BATCH_UPDATE_FINDINGS_V2: string[] = [
		"securityhub:BatchUpdateFindings",
	];
	/** IAM actions required for the BatchUpdateStandardsControlAssociations API call. */
	static readonly BATCH_UPDATE_STANDARDS_CONTROL_ASSOCIATIONS: string[] = [
		"securityhub:BatchUpdateStandardsControlAssociations",
		"securityhub:UpdateStandardsControl",
	];
	/** IAM actions required for the CreateActionTarget API call. */
	static readonly CREATE_ACTION_TARGET: string[] = [
		"securityhub:CreateActionTarget",
	];
	/** IAM actions required for the CreateAggregatorV2 API call. */
	static readonly CREATE_AGGREGATOR_V2: string[] = [
		"securityhub:CreateAggregatorV2",
		"securityhub:TagResource",
	];
	/** IAM actions required for the CreateAutomationRule API call. */
	static readonly CREATE_AUTOMATION_RULE: string[] = [
		"securityhub:CreateAutomationRule",
		"securityhub:TagResource",
	];
	/** IAM actions required for the CreateAutomationRuleV2 API call. */
	static readonly CREATE_AUTOMATION_RULE_V2: string[] = [
		"securityhub:CreateAutomationRuleV2",
		"securityhub:TagResource",
	];
	/** IAM actions required for the CreateConfigurationPolicy API call. */
	static readonly CREATE_CONFIGURATION_POLICY: string[] = [
		"securityhub:CreateConfigurationPolicy",
		"securityhub:TagResource",
	];
	/** IAM actions required for the CreateConnector API call. */
	static readonly CREATE_CONNECTOR: string[] = [
		"securityhub:CreateConnector",
		"securityhub:TagResource",
	];
	/** IAM actions required for the CreateConnectorV2 API call. */
	static readonly CREATE_CONNECTOR_V2: string[] = [
		"securityhub:CreateConnectorV2",
		"securityhub:TagResource",
	];
	/** IAM actions required for the CreateFindingAggregator API call. */
	static readonly CREATE_FINDING_AGGREGATOR: string[] = [
		"securityhub:CreateFindingAggregator",
	];
	/** IAM actions required for the CreateInsight API call. */
	static readonly CREATE_INSIGHT: string[] = ["securityhub:CreateInsight"];
	/** IAM actions required for the CreateMembers API call. */
	static readonly CREATE_MEMBERS: string[] = ["securityhub:CreateMembers"];
	/** IAM actions required for the CreateTicketV2 API call. */
	static readonly CREATE_TICKET_V2: string[] = ["securityhub:CreateTicketV2"];
	/** IAM actions required for the DeclineInvitations API call. */
	static readonly DECLINE_INVITATIONS: string[] = [
		"securityhub:DeclineInvitations",
	];
	/** IAM actions required for the DeleteActionTarget API call. */
	static readonly DELETE_ACTION_TARGET: string[] = [
		"securityhub:DeleteActionTarget",
	];
	/** IAM actions required for the DeleteAggregatorV2 API call. */
	static readonly DELETE_AGGREGATOR_V2: string[] = [
		"securityhub:DeleteAggregatorV2",
	];
	/** IAM actions required for the DeleteAutomationRuleV2 API call. */
	static readonly DELETE_AUTOMATION_RULE_V2: string[] = [
		"securityhub:DeleteAutomationRuleV2",
	];
	/** IAM actions required for the DeleteConfigurationPolicy API call. */
	static readonly DELETE_CONFIGURATION_POLICY: string[] = [
		"securityhub:DeleteConfigurationPolicy",
	];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DELETE_CONNECTOR: string[] = ["securityhub:DeleteConnector"];
	/** IAM actions required for the DeleteConnectorV2 API call. */
	static readonly DELETE_CONNECTOR_V2: string[] = [
		"securityhub:DeleteConnectorV2",
	];
	/** IAM actions required for the DeleteFindingAggregator API call. */
	static readonly DELETE_FINDING_AGGREGATOR: string[] = [
		"securityhub:DeleteFindingAggregator",
	];
	/** IAM actions required for the DeleteInsight API call. */
	static readonly DELETE_INSIGHT: string[] = ["securityhub:DeleteInsight"];
	/** IAM actions required for the DeleteInvitations API call. */
	static readonly DELETE_INVITATIONS: string[] = [
		"securityhub:DeleteInvitations",
	];
	/** IAM actions required for the DeleteMembers API call. */
	static readonly DELETE_MEMBERS: string[] = ["securityhub:DeleteMembers"];
	/** IAM actions required for the DescribeActionTargets API call. */
	static readonly DESCRIBE_ACTION_TARGETS: string[] = [
		"securityhub:DescribeActionTargets",
	];
	/** IAM actions required for the DescribeHub API call. */
	static readonly DESCRIBE_HUB: string[] = ["securityhub:DescribeHub"];
	/** IAM actions required for the DescribeOrganizationConfiguration API call. */
	static readonly DESCRIBE_ORGANIZATION_CONFIGURATION: string[] = [
		"securityhub:DescribeOrganizationConfiguration",
	];
	/** IAM actions required for the DescribeProducts API call. */
	static readonly DESCRIBE_PRODUCTS: string[] = [
		"securityhub:DescribeProducts",
	];
	/** IAM actions required for the DescribeProductsV2 API call. */
	static readonly DESCRIBE_PRODUCTS_V2: string[] = [
		"securityhub:DescribeProductsV2",
	];
	/** IAM actions required for the DescribeSecurityHubV2 API call. */
	static readonly DESCRIBE_SECURITY_HUB_V2: string[] = [
		"securityhub:DescribeSecurityHubV2",
	];
	/** IAM actions required for the DescribeStandards API call. */
	static readonly DESCRIBE_STANDARDS: string[] = [
		"securityhub:DescribeStandards",
	];
	/** IAM actions required for the DescribeStandardsControls API call. */
	static readonly DESCRIBE_STANDARDS_CONTROLS: string[] = [
		"securityhub:DescribeStandardsControls",
	];
	/** IAM actions required for the DisableImportFindingsForProduct API call. */
	static readonly DISABLE_IMPORT_FINDINGS_FOR_PRODUCT: string[] = [
		"securityhub:DisableImportFindingsForProduct",
	];
	/** IAM actions required for the DisableOrganizationAdminAccount API call. */
	static readonly DISABLE_ORGANIZATION_ADMIN_ACCOUNT: string[] = [
		"securityhub:DisableOrganizationAdminAccount",
	];
	/** IAM actions required for the DisableSecurityHub API call. */
	static readonly DISABLE_SECURITY_HUB: string[] = [
		"securityhub:DisableSecurityHub",
	];
	/** IAM actions required for the DisableSecurityHubFeatureV2 API call. */
	static readonly DISABLE_SECURITY_HUB_FEATURE_V2: string[] = [
		"securityhub:DisableSecurityHubFeatureV2",
	];
	/** IAM actions required for the DisableSecurityHubV2 API call. */
	static readonly DISABLE_SECURITY_HUB_V2: string[] = [
		"securityhub:DisableSecurityHubV2",
	];
	/** IAM actions required for the DisassociateFromAdministratorAccount API call. */
	static readonly DISASSOCIATE_FROM_ADMINISTRATOR_ACCOUNT: string[] = [
		"securityhub:DisassociateFromAdministratorAccount",
	];
	/** IAM actions required for the DisassociateFromMasterAccount API call. */
	static readonly DISASSOCIATE_FROM_MASTER_ACCOUNT: string[] = [
		"securityhub:DisassociateFromMasterAccount",
	];
	/** IAM actions required for the DisassociateMembers API call. */
	static readonly DISASSOCIATE_MEMBERS: string[] = [
		"securityhub:DisassociateMembers",
	];
	/** IAM actions required for the EnableImportFindingsForProduct API call. */
	static readonly ENABLE_IMPORT_FINDINGS_FOR_PRODUCT: string[] = [
		"securityhub:EnableImportFindingsForProduct",
	];
	/** IAM actions required for the EnableOrganizationAdminAccount API call. */
	static readonly ENABLE_ORGANIZATION_ADMIN_ACCOUNT: string[] = [
		"securityhub:EnableOrganizationAdminAccount",
	];
	/** IAM actions required for the EnableSecurityHub API call. */
	static readonly ENABLE_SECURITY_HUB: string[] = [
		"securityhub:EnableSecurityHub",
		"securityhub:TagResource",
	];
	/** IAM actions required for the EnableSecurityHubFeatureV2 API call. */
	static readonly ENABLE_SECURITY_HUB_FEATURE_V2: string[] = [
		"securityhub:EnableSecurityHubFeatureV2",
	];
	/** IAM actions required for the EnableSecurityHubV2 API call. */
	static readonly ENABLE_SECURITY_HUB_V2: string[] = [
		"securityhub:EnableSecurityHubV2",
		"securityhub:TagResource",
	];
	/** IAM actions required for the GenerateRecommendedPolicyV2 API call. */
	static readonly GENERATE_RECOMMENDED_POLICY_V2: string[] = [
		"securityhub:GenerateRecommendedPolicyV2",
	];
	/** IAM actions required for the GetAdministratorAccount API call. */
	static readonly GET_ADMINISTRATOR_ACCOUNT: string[] = [
		"securityhub:GetAdministratorAccount",
	];
	/** IAM actions required for the GetAggregatorV2 API call. */
	static readonly GET_AGGREGATOR_V2: string[] = ["securityhub:GetAggregatorV2"];
	/** IAM actions required for the GetAutomationRuleV2 API call. */
	static readonly GET_AUTOMATION_RULE_V2: string[] = [
		"securityhub:GetAutomationRuleV2",
	];
	/** IAM actions required for the GetConfigurationPolicy API call. */
	static readonly GET_CONFIGURATION_POLICY: string[] = [
		"securityhub:GetConfigurationPolicy",
	];
	/** IAM actions required for the GetConfigurationPolicyAssociation API call. */
	static readonly GET_CONFIGURATION_POLICY_ASSOCIATION: string[] = [
		"securityhub:GetConfigurationPolicyAssociation",
	];
	/** IAM actions required for the GetConnector API call. */
	static readonly GET_CONNECTOR: string[] = ["securityhub:GetConnector"];
	/** IAM actions required for the GetConnectorV2 API call. */
	static readonly GET_CONNECTOR_V2: string[] = ["securityhub:GetConnectorV2"];
	/** IAM actions required for the GetEnabledStandards API call. */
	static readonly GET_ENABLED_STANDARDS: string[] = [
		"securityhub:GetEnabledStandards",
	];
	/** IAM actions required for the GetFindingAggregator API call. */
	static readonly GET_FINDING_AGGREGATOR: string[] = [
		"securityhub:GetFindingAggregator",
	];
	/** IAM actions required for the GetFindingHistory API call. */
	static readonly GET_FINDING_HISTORY: string[] = [
		"securityhub:GetFindingHistory",
	];
	/** IAM actions required for the GetFindingStatisticsV2 API call. */
	static readonly GET_FINDING_STATISTICS_V2: string[] = [
		"securityhub:GetAdhocInsightResults",
	];
	/** IAM actions required for the GetFindings API call. */
	static readonly GET_FINDINGS: string[] = ["securityhub:GetFindings"];
	/** IAM actions required for the GetFindingsTrendsV2 API call. */
	static readonly GET_FINDINGS_TRENDS_V2: string[] = [
		"securityhub:GetFindingsTrendsV2",
	];
	/** IAM actions required for the GetFindingsV2 API call. */
	static readonly GET_FINDINGS_V2: string[] = ["securityhub:GetFindings"];
	/** IAM actions required for the GetInsightResults API call. */
	static readonly GET_INSIGHT_RESULTS: string[] = [
		"securityhub:GetInsightResults",
	];
	/** IAM actions required for the GetInsights API call. */
	static readonly GET_INSIGHTS: string[] = ["securityhub:GetInsights"];
	/** IAM actions required for the GetInvitationsCount API call. */
	static readonly GET_INVITATIONS_COUNT: string[] = [
		"securityhub:GetInvitationsCount",
	];
	/** IAM actions required for the GetMasterAccount API call. */
	static readonly GET_MASTER_ACCOUNT: string[] = [
		"securityhub:GetMasterAccount",
	];
	/** IAM actions required for the GetMembers API call. */
	static readonly GET_MEMBERS: string[] = ["securityhub:GetMembers"];
	/** IAM actions required for the GetRecommendedPolicyV2 API call. */
	static readonly GET_RECOMMENDED_POLICY_V2: string[] = [
		"securityhub:GetRecommendedPolicyV2",
	];
	/** IAM actions required for the GetResourcesStatisticsV2 API call. */
	static readonly GET_RESOURCES_STATISTICS_V2: string[] = [
		"securityhub:GetResourcesStatisticsV2",
	];
	/** IAM actions required for the GetResourcesTrendsV2 API call. */
	static readonly GET_RESOURCES_TRENDS_V2: string[] = [
		"securityhub:GetResourcesTrendsV2",
	];
	/** IAM actions required for the GetResourcesV2 API call. */
	static readonly GET_RESOURCES_V2: string[] = ["securityhub:GetResourcesV2"];
	/** IAM actions required for the GetSecurityControlDefinition API call. */
	static readonly GET_SECURITY_CONTROL_DEFINITION: string[] = [
		"securityhub:GetSecurityControlDefinition",
	];
	/** IAM actions required for the InviteMembers API call. */
	static readonly INVITE_MEMBERS: string[] = ["securityhub:InviteMembers"];
	/** IAM actions required for the ListAggregatorsV2 API call. */
	static readonly LIST_AGGREGATORS_V2: string[] = [
		"securityhub:ListAggregatorsV2",
	];
	/** IAM actions required for the ListAutomationRules API call. */
	static readonly LIST_AUTOMATION_RULES: string[] = [
		"securityhub:ListAutomationRules",
	];
	/** IAM actions required for the ListAutomationRulesV2 API call. */
	static readonly LIST_AUTOMATION_RULES_V2: string[] = [
		"securityhub:ListAutomationRulesV2",
	];
	/** IAM actions required for the ListConfigurationPolicies API call. */
	static readonly LIST_CONFIGURATION_POLICIES: string[] = [
		"securityhub:ListConfigurationPolicies",
	];
	/** IAM actions required for the ListConfigurationPolicyAssociations API call. */
	static readonly LIST_CONFIGURATION_POLICY_ASSOCIATIONS: string[] = [
		"securityhub:ListConfigurationPolicyAssociations",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly LIST_CONNECTORS: string[] = ["securityhub:ListConnectors"];
	/** IAM actions required for the ListConnectorsV2 API call. */
	static readonly LIST_CONNECTORS_V2: string[] = [
		"securityhub:ListConnectorsV2",
	];
	/** IAM actions required for the ListEnabledProductsForImport API call. */
	static readonly LIST_ENABLED_PRODUCTS_FOR_IMPORT: string[] = [
		"securityhub:ListEnabledProductsForImport",
	];
	/** IAM actions required for the ListFindingAggregators API call. */
	static readonly LIST_FINDING_AGGREGATORS: string[] = [
		"securityhub:ListFindingAggregators",
	];
	/** IAM actions required for the ListFreeTrialStatusesV2 API call. */
	static readonly LIST_FREE_TRIAL_STATUSES_V2: string[] = [
		"securityhub:ListFreeTrialStatusesV2",
	];
	/** IAM actions required for the ListInvitations API call. */
	static readonly LIST_INVITATIONS: string[] = ["securityhub:ListInvitations"];
	/** IAM actions required for the ListMembers API call. */
	static readonly LIST_MEMBERS: string[] = ["securityhub:ListMembers"];
	/** IAM actions required for the ListOrganizationAdminAccounts API call. */
	static readonly LIST_ORGANIZATION_ADMIN_ACCOUNTS: string[] = [
		"securityhub:ListOrganizationAdminAccounts",
	];
	/** IAM actions required for the ListSecurityControlDefinitions API call. */
	static readonly LIST_SECURITY_CONTROL_DEFINITIONS: string[] = [
		"securityhub:ListSecurityControlDefinitions",
	];
	/** IAM actions required for the ListStandardsControlAssociations API call. */
	static readonly LIST_STANDARDS_CONTROL_ASSOCIATIONS: string[] = [
		"securityhub:DescribeStandardsControls",
		"securityhub:ListStandardsControlAssociations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"securityhub:ListTagsForResource",
	];
	/** IAM actions required for the RegisterConnectorV2 API call. */
	static readonly REGISTER_CONNECTOR_V2: string[] = [];
	/** IAM actions required for the StartConfigurationPolicyAssociation API call. */
	static readonly START_CONFIGURATION_POLICY_ASSOCIATION: string[] = [
		"securityhub:StartConfigurationPolicyAssociation",
	];
	/** IAM actions required for the StartConfigurationPolicyDisassociation API call. */
	static readonly START_CONFIGURATION_POLICY_DISASSOCIATION: string[] = [
		"securityhub:StartConfigurationPolicyDisassociation",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["securityhub:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["securityhub:UntagResource"];
	/** IAM actions required for the UpdateActionTarget API call. */
	static readonly UPDATE_ACTION_TARGET: string[] = [
		"securityhub:UpdateActionTarget",
	];
	/** IAM actions required for the UpdateAggregatorV2 API call. */
	static readonly UPDATE_AGGREGATOR_V2: string[] = [
		"securityhub:UpdateAggregatorV2",
	];
	/** IAM actions required for the UpdateAutomationRuleV2 API call. */
	static readonly UPDATE_AUTOMATION_RULE_V2: string[] = [
		"securityhub:UpdateAutomationRuleV2",
	];
	/** IAM actions required for the UpdateConfigurationPolicy API call. */
	static readonly UPDATE_CONFIGURATION_POLICY: string[] = [
		"securityhub:UpdateConfigurationPolicy",
	];
	/** IAM actions required for the UpdateConnector API call. */
	static readonly UPDATE_CONNECTOR: string[] = ["securityhub:UpdateConnector"];
	/** IAM actions required for the UpdateConnectorV2 API call. */
	static readonly UPDATE_CONNECTOR_V2: string[] = [
		"securityhub:UpdateConnectorV2",
	];
	/** IAM actions required for the UpdateFindingAggregator API call. */
	static readonly UPDATE_FINDING_AGGREGATOR: string[] = [
		"securityhub:UpdateFindingAggregator",
	];
	/** IAM actions required for the UpdateFindings API call. */
	static readonly UPDATE_FINDINGS: string[] = ["securityhub:UpdateFindings"];
	/** IAM actions required for the UpdateInsight API call. */
	static readonly UPDATE_INSIGHT: string[] = ["securityhub:UpdateInsight"];
	/** IAM actions required for the UpdateOrganizationConfiguration API call. */
	static readonly UPDATE_ORGANIZATION_CONFIGURATION: string[] = [
		"securityhub:UpdateOrganizationConfiguration",
	];
	/** IAM actions required for the UpdateSecurityControl API call. */
	static readonly UPDATE_SECURITY_CONTROL: string[] = [
		"securityhub:UpdateSecurityControl",
		"securityhub:UpdateStandardsControl",
	];
	/** IAM actions required for the UpdateSecurityHubConfiguration API call. */
	static readonly UPDATE_SECURITY_HUB_CONFIGURATION: string[] = [
		"securityhub:UpdateSecurityHubConfiguration",
	];
	/** IAM actions required for the UpdateStandardsControl API call. */
	static readonly UPDATE_STANDARDS_CONTROL: string[] = [
		"securityhub:UpdateStandardsControl",
	];
}

/**
 * Condition key constants and builders for securityhub.
 */
export class SecurityHubConditions {
	/** Condition keys applicable to the BatchImportFindings action. */
	static readonly BATCH_IMPORT_FINDINGS_CONDITION_KEYS: string[] = [
		"securityhub:TargetAccount",
	];
	/** Condition keys applicable to the BatchUpdateFindings action. */
	static readonly BATCH_UPDATE_FINDINGS_CONDITION_KEYS: string[] = [
		"securityhub:ASFFSyntaxPath/${ASFFSyntaxPath}",
		"securityhub:OCSFSyntaxPath/${OCSFSyntaxPath}",
	];
	/** Condition keys applicable to the CreateAutomationRule action. */
	static readonly CREATE_AUTOMATION_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAutomationRuleV2 action. */
	static readonly CREATE_AUTOMATION_RULE_V2_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConfigurationPolicy action. */
	static readonly CREATE_CONFIGURATION_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnector action. */
	static readonly CREATE_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnectorV2 action. */
	static readonly CREATE_CONNECTOR_V2_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the EnableSecurityHub action. */
	static readonly ENABLE_SECURITY_HUB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the EnableSecurityHubV2 action. */
	static readonly ENABLE_SECURITY_HUB_V2_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
