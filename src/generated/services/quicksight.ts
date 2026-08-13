// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/quicksight.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the quicksight service.
 */
export class QuickSightActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "quicksight";

	/** [Write] quicksight:AccountConfigurations */
	static readonly ACCOUNT_CONFIGURATIONS = "quicksight:AccountConfigurations";
	/** [PermissionManagement] quicksight:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"quicksight:AllowVendedLogDeliveryForResource";
	/** [Write] quicksight:BatchCreateTopicReviewedAnswer */
	static readonly BATCH_CREATE_TOPIC_REVIEWED_ANSWER =
		"quicksight:BatchCreateTopicReviewedAnswer";
	/** [Write] quicksight:BatchDeleteKnowledgeBase */
	static readonly BATCH_DELETE_KNOWLEDGE_BASE =
		"quicksight:BatchDeleteKnowledgeBase";
	/** [Write] quicksight:BatchDeleteTopicReviewedAnswer */
	static readonly BATCH_DELETE_TOPIC_REVIEWED_ANSWER =
		"quicksight:BatchDeleteTopicReviewedAnswer";
	/** [Read] quicksight:BatchDescribeUserLimits */
	static readonly BATCH_DESCRIBE_USER_LIMITS =
		"quicksight:BatchDescribeUserLimits";
	/** [Read] quicksight:BatchGetPreferences */
	static readonly BATCH_GET_PREFERENCES = "quicksight:BatchGetPreferences";
	/** [Write] quicksight:BatchUpdatePreferences */
	static readonly BATCH_UPDATE_PREFERENCES =
		"quicksight:BatchUpdatePreferences";
	/** [Write] quicksight:CancelIngestion */
	static readonly CANCEL_INGESTION = "quicksight:CancelIngestion";
	/** [Write] quicksight:CreateAccountCustomization */
	static readonly CREATE_ACCOUNT_CUSTOMIZATION =
		"quicksight:CreateAccountCustomization";
	/** [Write] quicksight:CreateAccountSubscription */
	static readonly CREATE_ACCOUNT_SUBSCRIPTION =
		"quicksight:CreateAccountSubscription";
	/** [Write] quicksight:CreateActionConnector */
	static readonly CREATE_ACTION_CONNECTOR = "quicksight:CreateActionConnector";
	/** [Write] quicksight:CreateAdmin */
	static readonly CREATE_ADMIN = "quicksight:CreateAdmin";
	/** [Write] quicksight:CreateAgent */
	static readonly CREATE_AGENT = "quicksight:CreateAgent";
	/** [Write] quicksight:CreateAnalysis */
	static readonly CREATE_ANALYSIS = "quicksight:CreateAnalysis";
	/** [Write] quicksight:CreateApprovalPolicy */
	static readonly CREATE_APPROVAL_POLICY = "quicksight:CreateApprovalPolicy";
	/** [Write] quicksight:CreateBrand */
	static readonly CREATE_BRAND = "quicksight:CreateBrand";
	/** [Write] quicksight:CreateCustomPermissions */
	static readonly CREATE_CUSTOM_PERMISSIONS =
		"quicksight:CreateCustomPermissions";
	/** [Write] quicksight:CreateDashboard */
	static readonly CREATE_DASHBOARD = "quicksight:CreateDashboard";
	/** [Write] quicksight:CreateDataSet */
	static readonly CREATE_DATA_SET = "quicksight:CreateDataSet";
	/** [Write] quicksight:CreateDataSource */
	static readonly CREATE_DATA_SOURCE = "quicksight:CreateDataSource";
	/** [Write] quicksight:CreateDlpSetting */
	static readonly CREATE_DLP_SETTING = "quicksight:CreateDlpSetting";
	/** [Write] quicksight:CreateEmailCustomizationTemplate */
	static readonly CREATE_EMAIL_CUSTOMIZATION_TEMPLATE =
		"quicksight:CreateEmailCustomizationTemplate";
	/** [Write] quicksight:CreateExtensionAccess */
	static readonly CREATE_EXTENSION_ACCESS = "quicksight:CreateExtensionAccess";
	/** [Write] quicksight:CreateFlow */
	static readonly CREATE_FLOW = "quicksight:CreateFlow";
	/** [Write] quicksight:CreateFolder */
	static readonly CREATE_FOLDER = "quicksight:CreateFolder";
	/** [Write] quicksight:CreateFolderMembership */
	static readonly CREATE_FOLDER_MEMBERSHIP =
		"quicksight:CreateFolderMembership";
	/** [Write] quicksight:CreateGroup */
	static readonly CREATE_GROUP = "quicksight:CreateGroup";
	/** [Write] quicksight:CreateGroupMembership */
	static readonly CREATE_GROUP_MEMBERSHIP = "quicksight:CreateGroupMembership";
	/** [Write] quicksight:CreateIAMPolicyAssignment */
	static readonly CREATE_IAM_POLICY_ASSIGNMENT =
		"quicksight:CreateIAMPolicyAssignment";
	/** [Write] quicksight:CreateIngestion */
	static readonly CREATE_INGESTION = "quicksight:CreateIngestion";
	/** [Write] quicksight:CreateKnowledgeBase */
	static readonly CREATE_KNOWLEDGE_BASE = "quicksight:CreateKnowledgeBase";
	/** [Write] quicksight:CreateLimitsProfile */
	static readonly CREATE_LIMITS_PROFILE = "quicksight:CreateLimitsProfile";
	/** [Write] quicksight:CreateNamespace */
	static readonly CREATE_NAMESPACE = "quicksight:CreateNamespace";
	/** [Write] quicksight:CreateOAuthClientApplication */
	static readonly CREATE_O_AUTH_CLIENT_APPLICATION =
		"quicksight:CreateOAuthClientApplication";
	/** [Write] quicksight:CreateReader */
	static readonly CREATE_READER = "quicksight:CreateReader";
	/** [Write] quicksight:CreateRefreshSchedule */
	static readonly CREATE_REFRESH_SCHEDULE = "quicksight:CreateRefreshSchedule";
	/** [Write] quicksight:CreateRoleMembership */
	static readonly CREATE_ROLE_MEMBERSHIP = "quicksight:CreateRoleMembership";
	/** [Write] quicksight:CreateSpace */
	static readonly CREATE_SPACE = "quicksight:CreateSpace";
	/** [Write] quicksight:CreateTemplate */
	static readonly CREATE_TEMPLATE = "quicksight:CreateTemplate";
	/** [Write] quicksight:CreateTemplateAlias */
	static readonly CREATE_TEMPLATE_ALIAS = "quicksight:CreateTemplateAlias";
	/** [Write] quicksight:CreateTheme */
	static readonly CREATE_THEME = "quicksight:CreateTheme";
	/** [Write] quicksight:CreateThemeAlias */
	static readonly CREATE_THEME_ALIAS = "quicksight:CreateThemeAlias";
	/** [Write] quicksight:CreateTopic */
	static readonly CREATE_TOPIC = "quicksight:CreateTopic";
	/** [Write] quicksight:CreateTopicRefreshSchedule */
	static readonly CREATE_TOPIC_REFRESH_SCHEDULE =
		"quicksight:CreateTopicRefreshSchedule";
	/** [Write] quicksight:CreateUser */
	static readonly CREATE_USER = "quicksight:CreateUser";
	/** [Write] quicksight:CreateVPCConnection */
	static readonly CREATE_VPC_CONNECTION = "quicksight:CreateVPCConnection";
	/** [Write] quicksight:DeleteAccountCustomPermission */
	static readonly DELETE_ACCOUNT_CUSTOM_PERMISSION =
		"quicksight:DeleteAccountCustomPermission";
	/** [Write] quicksight:DeleteAccountCustomization */
	static readonly DELETE_ACCOUNT_CUSTOMIZATION =
		"quicksight:DeleteAccountCustomization";
	/** [Write] quicksight:DeleteAccountSubscription */
	static readonly DELETE_ACCOUNT_SUBSCRIPTION =
		"quicksight:DeleteAccountSubscription";
	/** [Write] quicksight:DeleteActionConnector */
	static readonly DELETE_ACTION_CONNECTOR = "quicksight:DeleteActionConnector";
	/** [Write] quicksight:DeleteAgent */
	static readonly DELETE_AGENT = "quicksight:DeleteAgent";
	/** [Write] quicksight:DeleteAnalysis */
	static readonly DELETE_ANALYSIS = "quicksight:DeleteAnalysis";
	/** [Write] quicksight:DeleteApp */
	static readonly DELETE_APP = "quicksight:DeleteApp";
	/** [Write] quicksight:DeleteApprovalPolicy */
	static readonly DELETE_APPROVAL_POLICY = "quicksight:DeleteApprovalPolicy";
	/** [Write] quicksight:DeleteBrand */
	static readonly DELETE_BRAND = "quicksight:DeleteBrand";
	/** [Write] quicksight:DeleteBrandAssignment */
	static readonly DELETE_BRAND_ASSIGNMENT = "quicksight:DeleteBrandAssignment";
	/** [Write] quicksight:DeleteCustomPermissions */
	static readonly DELETE_CUSTOM_PERMISSIONS =
		"quicksight:DeleteCustomPermissions";
	/** [Write] quicksight:DeleteDashboard */
	static readonly DELETE_DASHBOARD = "quicksight:DeleteDashboard";
	/** [Write] quicksight:DeleteDataSet */
	static readonly DELETE_DATA_SET = "quicksight:DeleteDataSet";
	/** [Write] quicksight:DeleteDataSetRefreshProperties */
	static readonly DELETE_DATA_SET_REFRESH_PROPERTIES =
		"quicksight:DeleteDataSetRefreshProperties";
	/** [Write] quicksight:DeleteDataSource */
	static readonly DELETE_DATA_SOURCE = "quicksight:DeleteDataSource";
	/** [Write] quicksight:DeleteDefaultQBusinessApplication */
	static readonly DELETE_DEFAULT_Q_BUSINESS_APPLICATION =
		"quicksight:DeleteDefaultQBusinessApplication";
	/** [Write] quicksight:DeleteDlpSetting */
	static readonly DELETE_DLP_SETTING = "quicksight:DeleteDlpSetting";
	/** [Write] quicksight:DeleteEmailCustomizationTemplate */
	static readonly DELETE_EMAIL_CUSTOMIZATION_TEMPLATE =
		"quicksight:DeleteEmailCustomizationTemplate";
	/** [Write] quicksight:DeleteExtensionAccess */
	static readonly DELETE_EXTENSION_ACCESS = "quicksight:DeleteExtensionAccess";
	/** [Write] quicksight:DeleteFlow */
	static readonly DELETE_FLOW = "quicksight:DeleteFlow";
	/** [Write] quicksight:DeleteFolder */
	static readonly DELETE_FOLDER = "quicksight:DeleteFolder";
	/** [Write] quicksight:DeleteFolderMembership */
	static readonly DELETE_FOLDER_MEMBERSHIP =
		"quicksight:DeleteFolderMembership";
	/** [Write] quicksight:DeleteGroup */
	static readonly DELETE_GROUP = "quicksight:DeleteGroup";
	/** [Write] quicksight:DeleteGroupMembership */
	static readonly DELETE_GROUP_MEMBERSHIP = "quicksight:DeleteGroupMembership";
	/** [Write] quicksight:DeleteIAMPolicyAssignment */
	static readonly DELETE_IAM_POLICY_ASSIGNMENT =
		"quicksight:DeleteIAMPolicyAssignment";
	/** [Write] quicksight:DeleteIdentityPropagationConfig */
	static readonly DELETE_IDENTITY_PROPAGATION_CONFIG =
		"quicksight:DeleteIdentityPropagationConfig";
	/** [Write] quicksight:DeleteKnowledgeBase */
	static readonly DELETE_KNOWLEDGE_BASE = "quicksight:DeleteKnowledgeBase";
	/** [Write] quicksight:DeleteLimitsProfile */
	static readonly DELETE_LIMITS_PROFILE = "quicksight:DeleteLimitsProfile";
	/** [Write] quicksight:DeleteNamespace */
	static readonly DELETE_NAMESPACE = "quicksight:DeleteNamespace";
	/** [Write] quicksight:DeleteOAuthClientApplication */
	static readonly DELETE_O_AUTH_CLIENT_APPLICATION =
		"quicksight:DeleteOAuthClientApplication";
	/** [Write] quicksight:DeleteRefreshSchedule */
	static readonly DELETE_REFRESH_SCHEDULE = "quicksight:DeleteRefreshSchedule";
	/** [Write] quicksight:DeleteRoleCustomPermission */
	static readonly DELETE_ROLE_CUSTOM_PERMISSION =
		"quicksight:DeleteRoleCustomPermission";
	/** [Write] quicksight:DeleteRoleMembership */
	static readonly DELETE_ROLE_MEMBERSHIP = "quicksight:DeleteRoleMembership";
	/** [Write] quicksight:DeleteSpace */
	static readonly DELETE_SPACE = "quicksight:DeleteSpace";
	/** [Write] quicksight:DeleteTemplate */
	static readonly DELETE_TEMPLATE = "quicksight:DeleteTemplate";
	/** [Write] quicksight:DeleteTemplateAlias */
	static readonly DELETE_TEMPLATE_ALIAS = "quicksight:DeleteTemplateAlias";
	/** [Write] quicksight:DeleteTheme */
	static readonly DELETE_THEME = "quicksight:DeleteTheme";
	/** [Write] quicksight:DeleteThemeAlias */
	static readonly DELETE_THEME_ALIAS = "quicksight:DeleteThemeAlias";
	/** [Write] quicksight:DeleteTopic */
	static readonly DELETE_TOPIC = "quicksight:DeleteTopic";
	/** [Write] quicksight:DeleteTopicRefreshSchedule */
	static readonly DELETE_TOPIC_REFRESH_SCHEDULE =
		"quicksight:DeleteTopicRefreshSchedule";
	/** [Write] quicksight:DeleteUser */
	static readonly DELETE_USER = "quicksight:DeleteUser";
	/** [Write] quicksight:DeleteUserByPrincipalId */
	static readonly DELETE_USER_BY_PRINCIPAL_ID =
		"quicksight:DeleteUserByPrincipalId";
	/** [Write] quicksight:DeleteUserCustomPermission */
	static readonly DELETE_USER_CUSTOM_PERMISSION =
		"quicksight:DeleteUserCustomPermission";
	/** [Write] quicksight:DeleteVPCConnection */
	static readonly DELETE_VPC_CONNECTION = "quicksight:DeleteVPCConnection";
	/** [Read] quicksight:DescribeAccountCustomPermission */
	static readonly DESCRIBE_ACCOUNT_CUSTOM_PERMISSION =
		"quicksight:DescribeAccountCustomPermission";
	/** [Read] quicksight:DescribeAccountCustomization */
	static readonly DESCRIBE_ACCOUNT_CUSTOMIZATION =
		"quicksight:DescribeAccountCustomization";
	/** [Read] quicksight:DescribeAccountSettings */
	static readonly DESCRIBE_ACCOUNT_SETTINGS =
		"quicksight:DescribeAccountSettings";
	/** [Read] quicksight:DescribeAccountSubscription */
	static readonly DESCRIBE_ACCOUNT_SUBSCRIPTION =
		"quicksight:DescribeAccountSubscription";
	/** [Read] quicksight:DescribeActionConnector */
	static readonly DESCRIBE_ACTION_CONNECTOR =
		"quicksight:DescribeActionConnector";
	/** [Read] quicksight:DescribeActionConnectorPermissions */
	static readonly DESCRIBE_ACTION_CONNECTOR_PERMISSIONS =
		"quicksight:DescribeActionConnectorPermissions";
	/** [Read] quicksight:DescribeAgent */
	static readonly DESCRIBE_AGENT = "quicksight:DescribeAgent";
	/** [Read] quicksight:DescribeAgentPermissions */
	static readonly DESCRIBE_AGENT_PERMISSIONS =
		"quicksight:DescribeAgentPermissions";
	/** [Read] quicksight:DescribeAnalysis */
	static readonly DESCRIBE_ANALYSIS = "quicksight:DescribeAnalysis";
	/** [Read] quicksight:DescribeAnalysisPermissions */
	static readonly DESCRIBE_ANALYSIS_PERMISSIONS =
		"quicksight:DescribeAnalysisPermissions";
	/** [Read] quicksight:DescribeApp */
	static readonly DESCRIBE_APP = "quicksight:DescribeApp";
	/** [Read] quicksight:DescribeAppPermissions */
	static readonly DESCRIBE_APP_PERMISSIONS =
		"quicksight:DescribeAppPermissions";
	/** [Read] quicksight:DescribeApprovalPolicy */
	static readonly DESCRIBE_APPROVAL_POLICY =
		"quicksight:DescribeApprovalPolicy";
	/** [Read] quicksight:DescribeAssetBundleExportJob */
	static readonly DESCRIBE_ASSET_BUNDLE_EXPORT_JOB =
		"quicksight:DescribeAssetBundleExportJob";
	/** [Read] quicksight:DescribeAssetBundleImportJob */
	static readonly DESCRIBE_ASSET_BUNDLE_IMPORT_JOB =
		"quicksight:DescribeAssetBundleImportJob";
	/** [Read] quicksight:DescribeAutomationGroup */
	static readonly DESCRIBE_AUTOMATION_GROUP =
		"quicksight:DescribeAutomationGroup";
	/** [PermissionManagement] quicksight:DescribeAutomationGroupPermissions */
	static readonly DESCRIBE_AUTOMATION_GROUP_PERMISSIONS =
		"quicksight:DescribeAutomationGroupPermissions";
	/** [Read] quicksight:DescribeAutomationJob */
	static readonly DESCRIBE_AUTOMATION_JOB = "quicksight:DescribeAutomationJob";
	/** [Read] quicksight:DescribeBrand */
	static readonly DESCRIBE_BRAND = "quicksight:DescribeBrand";
	/** [Read] quicksight:DescribeBrandAssignment */
	static readonly DESCRIBE_BRAND_ASSIGNMENT =
		"quicksight:DescribeBrandAssignment";
	/** [Read] quicksight:DescribeBrandPublishedVersion */
	static readonly DESCRIBE_BRAND_PUBLISHED_VERSION =
		"quicksight:DescribeBrandPublishedVersion";
	/** [Read] quicksight:DescribeChatConfiguration */
	static readonly DESCRIBE_CHAT_CONFIGURATION =
		"quicksight:DescribeChatConfiguration";
	/** [Read] quicksight:DescribeCustomPermissions */
	static readonly DESCRIBE_CUSTOM_PERMISSIONS =
		"quicksight:DescribeCustomPermissions";
	/** [Read] quicksight:DescribeDashboard */
	static readonly DESCRIBE_DASHBOARD = "quicksight:DescribeDashboard";
	/** [Read] quicksight:DescribeDashboardPermissions */
	static readonly DESCRIBE_DASHBOARD_PERMISSIONS =
		"quicksight:DescribeDashboardPermissions";
	/** [Read] quicksight:DescribeDashboardSnapshotJob */
	static readonly DESCRIBE_DASHBOARD_SNAPSHOT_JOB =
		"quicksight:DescribeDashboardSnapshotJob";
	/** [Read] quicksight:DescribeDashboardSnapshotJobResult */
	static readonly DESCRIBE_DASHBOARD_SNAPSHOT_JOB_RESULT =
		"quicksight:DescribeDashboardSnapshotJobResult";
	/** [Read] quicksight:DescribeDashboardsQAConfiguration */
	static readonly DESCRIBE_DASHBOARDS_QA_CONFIGURATION =
		"quicksight:DescribeDashboardsQAConfiguration";
	/** [Read] quicksight:DescribeDataSet */
	static readonly DESCRIBE_DATA_SET = "quicksight:DescribeDataSet";
	/** [Read] quicksight:DescribeDataSetPermissions */
	static readonly DESCRIBE_DATA_SET_PERMISSIONS =
		"quicksight:DescribeDataSetPermissions";
	/** [Read] quicksight:DescribeDataSetRefreshProperties */
	static readonly DESCRIBE_DATA_SET_REFRESH_PROPERTIES =
		"quicksight:DescribeDataSetRefreshProperties";
	/** [Read] quicksight:DescribeDataSource */
	static readonly DESCRIBE_DATA_SOURCE = "quicksight:DescribeDataSource";
	/** [Read] quicksight:DescribeDataSourcePermissions */
	static readonly DESCRIBE_DATA_SOURCE_PERMISSIONS =
		"quicksight:DescribeDataSourcePermissions";
	/** [Read] quicksight:DescribeDefaultQBusinessApplication */
	static readonly DESCRIBE_DEFAULT_Q_BUSINESS_APPLICATION =
		"quicksight:DescribeDefaultQBusinessApplication";
	/** [Read] quicksight:DescribeDlpJob */
	static readonly DESCRIBE_DLP_JOB = "quicksight:DescribeDlpJob";
	/** [Read] quicksight:DescribeDlpSetting */
	static readonly DESCRIBE_DLP_SETTING = "quicksight:DescribeDlpSetting";
	/** [Read] quicksight:DescribeEmailCustomizationTemplate */
	static readonly DESCRIBE_EMAIL_CUSTOMIZATION_TEMPLATE =
		"quicksight:DescribeEmailCustomizationTemplate";
	/** [Read] quicksight:DescribeExtensionAccess */
	static readonly DESCRIBE_EXTENSION_ACCESS =
		"quicksight:DescribeExtensionAccess";
	/** [Read] quicksight:DescribeFlow */
	static readonly DESCRIBE_FLOW = "quicksight:DescribeFlow";
	/** [Read] quicksight:DescribeFolder */
	static readonly DESCRIBE_FOLDER = "quicksight:DescribeFolder";
	/** [Read] quicksight:DescribeFolderPermissions */
	static readonly DESCRIBE_FOLDER_PERMISSIONS =
		"quicksight:DescribeFolderPermissions";
	/** [Read] quicksight:DescribeFolderResolvedPermissions */
	static readonly DESCRIBE_FOLDER_RESOLVED_PERMISSIONS =
		"quicksight:DescribeFolderResolvedPermissions";
	/** [Read] quicksight:DescribeGroup */
	static readonly DESCRIBE_GROUP = "quicksight:DescribeGroup";
	/** [Read] quicksight:DescribeGroupMembership */
	static readonly DESCRIBE_GROUP_MEMBERSHIP =
		"quicksight:DescribeGroupMembership";
	/** [Read] quicksight:DescribeIAMPolicyAssignment */
	static readonly DESCRIBE_IAM_POLICY_ASSIGNMENT =
		"quicksight:DescribeIAMPolicyAssignment";
	/** [Read] quicksight:DescribeIngestion */
	static readonly DESCRIBE_INGESTION = "quicksight:DescribeIngestion";
	/** [Read] quicksight:DescribeIpRestriction */
	static readonly DESCRIBE_IP_RESTRICTION = "quicksight:DescribeIpRestriction";
	/** [Read] quicksight:DescribeKeyRegistration */
	static readonly DESCRIBE_KEY_REGISTRATION =
		"quicksight:DescribeKeyRegistration";
	/** [Read] quicksight:DescribeKnowledgeBase */
	static readonly DESCRIBE_KNOWLEDGE_BASE = "quicksight:DescribeKnowledgeBase";
	/** [PermissionManagement] quicksight:DescribeKnowledgeBasePermissions */
	static readonly DESCRIBE_KNOWLEDGE_BASE_PERMISSIONS =
		"quicksight:DescribeKnowledgeBasePermissions";
	/** [Read] quicksight:DescribeLimitsProfile */
	static readonly DESCRIBE_LIMITS_PROFILE = "quicksight:DescribeLimitsProfile";
	/** [Read] quicksight:DescribeNamespace */
	static readonly DESCRIBE_NAMESPACE = "quicksight:DescribeNamespace";
	/** [Read] quicksight:DescribeOAuthClientApplication */
	static readonly DESCRIBE_O_AUTH_CLIENT_APPLICATION =
		"quicksight:DescribeOAuthClientApplication";
	/** [Read] quicksight:DescribeQPersonalizationConfiguration */
	static readonly DESCRIBE_Q_PERSONALIZATION_CONFIGURATION =
		"quicksight:DescribeQPersonalizationConfiguration";
	/** [Read] quicksight:DescribeQuickIndexCapacity */
	static readonly DESCRIBE_QUICK_INDEX_CAPACITY =
		"quicksight:DescribeQuickIndexCapacity";
	/** [Read] quicksight:DescribeQuickSightQSearchConfiguration */
	static readonly DESCRIBE_QUICK_SIGHT_Q_SEARCH_CONFIGURATION =
		"quicksight:DescribeQuickSightQSearchConfiguration";
	/** [Read] quicksight:DescribeRefreshSchedule */
	static readonly DESCRIBE_REFRESH_SCHEDULE =
		"quicksight:DescribeRefreshSchedule";
	/** [Read] quicksight:DescribeRoleCustomPermission */
	static readonly DESCRIBE_ROLE_CUSTOM_PERMISSION =
		"quicksight:DescribeRoleCustomPermission";
	/** [Read] quicksight:DescribeSelfUpgradeConfiguration */
	static readonly DESCRIBE_SELF_UPGRADE_CONFIGURATION =
		"quicksight:DescribeSelfUpgradeConfiguration";
	/** [Read] quicksight:DescribeSpace */
	static readonly DESCRIBE_SPACE = "quicksight:DescribeSpace";
	/** [PermissionManagement] quicksight:DescribeSpacePermissions */
	static readonly DESCRIBE_SPACE_PERMISSIONS =
		"quicksight:DescribeSpacePermissions";
	/** [Read] quicksight:DescribeTemplate */
	static readonly DESCRIBE_TEMPLATE = "quicksight:DescribeTemplate";
	/** [Read] quicksight:DescribeTemplateAlias */
	static readonly DESCRIBE_TEMPLATE_ALIAS = "quicksight:DescribeTemplateAlias";
	/** [Read] quicksight:DescribeTemplatePermissions */
	static readonly DESCRIBE_TEMPLATE_PERMISSIONS =
		"quicksight:DescribeTemplatePermissions";
	/** [Read] quicksight:DescribeTheme */
	static readonly DESCRIBE_THEME = "quicksight:DescribeTheme";
	/** [Read] quicksight:DescribeThemeAlias */
	static readonly DESCRIBE_THEME_ALIAS = "quicksight:DescribeThemeAlias";
	/** [Read] quicksight:DescribeThemePermissions */
	static readonly DESCRIBE_THEME_PERMISSIONS =
		"quicksight:DescribeThemePermissions";
	/** [Read] quicksight:DescribeTopic */
	static readonly DESCRIBE_TOPIC = "quicksight:DescribeTopic";
	/** [PermissionManagement] quicksight:DescribeTopicPermissions */
	static readonly DESCRIBE_TOPIC_PERMISSIONS =
		"quicksight:DescribeTopicPermissions";
	/** [Read] quicksight:DescribeTopicRefresh */
	static readonly DESCRIBE_TOPIC_REFRESH = "quicksight:DescribeTopicRefresh";
	/** [Read] quicksight:DescribeTopicRefreshSchedule */
	static readonly DESCRIBE_TOPIC_REFRESH_SCHEDULE =
		"quicksight:DescribeTopicRefreshSchedule";
	/** [Read] quicksight:DescribeUser */
	static readonly DESCRIBE_USER = "quicksight:DescribeUser";
	/** [Read] quicksight:DescribeVPCConnection */
	static readonly DESCRIBE_VPC_CONNECTION = "quicksight:DescribeVPCConnection";
	/** [Write] quicksight:GenerateEmbedUrlForAnonymousUser */
	static readonly GENERATE_EMBED_URL_FOR_ANONYMOUS_USER =
		"quicksight:GenerateEmbedUrlForAnonymousUser";
	/** [Write] quicksight:GenerateEmbedUrlForRegisteredUser */
	static readonly GENERATE_EMBED_URL_FOR_REGISTERED_USER =
		"quicksight:GenerateEmbedUrlForRegisteredUser";
	/** [Write] quicksight:GenerateEmbedUrlForRegisteredUserWithIdentity */
	static readonly GENERATE_EMBED_URL_FOR_REGISTERED_USER_WITH_IDENTITY =
		"quicksight:GenerateEmbedUrlForRegisteredUserWithIdentity";
	/** [Read] quicksight:GetAnonymousUserEmbedUrl */
	static readonly GET_ANONYMOUS_USER_EMBED_URL =
		"quicksight:GetAnonymousUserEmbedUrl";
	/** [Read] quicksight:GetAuthCode */
	static readonly GET_AUTH_CODE = "quicksight:GetAuthCode";
	/** [Read] quicksight:GetCustomPermissionsSummary */
	static readonly GET_CUSTOM_PERMISSIONS_SUMMARY =
		"quicksight:GetCustomPermissionsSummary";
	/** [Read] quicksight:GetDashboardEmbedUrl */
	static readonly GET_DASHBOARD_EMBED_URL = "quicksight:GetDashboardEmbedUrl";
	/** [Read] quicksight:GetFlowMetadata */
	static readonly GET_FLOW_METADATA = "quicksight:GetFlowMetadata";
	/** [Read] quicksight:GetFlowPermissions */
	static readonly GET_FLOW_PERMISSIONS = "quicksight:GetFlowPermissions";
	/** [Read] quicksight:GetGroupMapping */
	static readonly GET_GROUP_MAPPING = "quicksight:GetGroupMapping";
	/** [Read] quicksight:GetIdentityContext */
	static readonly GET_IDENTITY_CONTEXT = "quicksight:GetIdentityContext";
	/** [Read] quicksight:GetSessionEmbedUrl */
	static readonly GET_SESSION_EMBED_URL = "quicksight:GetSessionEmbedUrl";
	/** [List] quicksight:ListActionConnectors */
	static readonly LIST_ACTION_CONNECTORS = "quicksight:ListActionConnectors";
	/** [List] quicksight:ListAgents */
	static readonly LIST_AGENTS = "quicksight:ListAgents";
	/** [List] quicksight:ListAnalyses */
	static readonly LIST_ANALYSES = "quicksight:ListAnalyses";
	/** [List] quicksight:ListApprovalPolicies */
	static readonly LIST_APPROVAL_POLICIES = "quicksight:ListApprovalPolicies";
	/** [List] quicksight:ListApps */
	static readonly LIST_APPS = "quicksight:ListApps";
	/** [List] quicksight:ListAssetBundleExportJobs */
	static readonly LIST_ASSET_BUNDLE_EXPORT_JOBS =
		"quicksight:ListAssetBundleExportJobs";
	/** [List] quicksight:ListAssetBundleImportJobs */
	static readonly LIST_ASSET_BUNDLE_IMPORT_JOBS =
		"quicksight:ListAssetBundleImportJobs";
	/** [List] quicksight:ListAutomationGroups */
	static readonly LIST_AUTOMATION_GROUPS = "quicksight:ListAutomationGroups";
	/** [List] quicksight:ListBrands */
	static readonly LIST_BRANDS = "quicksight:ListBrands";
	/** [List] quicksight:ListCustomPermissions */
	static readonly LIST_CUSTOM_PERMISSIONS = "quicksight:ListCustomPermissions";
	/** [List] quicksight:ListCustomerManagedKeys */
	static readonly LIST_CUSTOMER_MANAGED_KEYS =
		"quicksight:ListCustomerManagedKeys";
	/** [List] quicksight:ListDashboardVersions */
	static readonly LIST_DASHBOARD_VERSIONS = "quicksight:ListDashboardVersions";
	/** [List] quicksight:ListDashboards */
	static readonly LIST_DASHBOARDS = "quicksight:ListDashboards";
	/** [List] quicksight:ListDataSets */
	static readonly LIST_DATA_SETS = "quicksight:ListDataSets";
	/** [List] quicksight:ListDataSources */
	static readonly LIST_DATA_SOURCES = "quicksight:ListDataSources";
	/** [List] quicksight:ListDlpLabels */
	static readonly LIST_DLP_LABELS = "quicksight:ListDlpLabels";
	/** [List] quicksight:ListDlpSettings */
	static readonly LIST_DLP_SETTINGS = "quicksight:ListDlpSettings";
	/** [List] quicksight:ListExtensionAccesses */
	static readonly LIST_EXTENSION_ACCESSES = "quicksight:ListExtensionAccesses";
	/** [List] quicksight:ListFlows */
	static readonly LIST_FLOWS = "quicksight:ListFlows";
	/** [Read] quicksight:ListFolderMembers */
	static readonly LIST_FOLDER_MEMBERS = "quicksight:ListFolderMembers";
	/** [List] quicksight:ListFolders */
	static readonly LIST_FOLDERS = "quicksight:ListFolders";
	/** [List] quicksight:ListFoldersForResource */
	static readonly LIST_FOLDERS_FOR_RESOURCE =
		"quicksight:ListFoldersForResource";
	/** [List] quicksight:ListGroupMemberships */
	static readonly LIST_GROUP_MEMBERSHIPS = "quicksight:ListGroupMemberships";
	/** [List] quicksight:ListGroups */
	static readonly LIST_GROUPS = "quicksight:ListGroups";
	/** [List] quicksight:ListIAMPolicyAssignments */
	static readonly LIST_IAM_POLICY_ASSIGNMENTS =
		"quicksight:ListIAMPolicyAssignments";
	/** [List] quicksight:ListIAMPolicyAssignmentsForUser */
	static readonly LIST_IAM_POLICY_ASSIGNMENTS_FOR_USER =
		"quicksight:ListIAMPolicyAssignmentsForUser";
	/** [List] quicksight:ListIdentityPropagationConfigs */
	static readonly LIST_IDENTITY_PROPAGATION_CONFIGS =
		"quicksight:ListIdentityPropagationConfigs";
	/** [List] quicksight:ListIngestions */
	static readonly LIST_INGESTIONS = "quicksight:ListIngestions";
	/** [List] quicksight:ListKMSKeysForUser */
	static readonly LIST_KMS_KEYS_FOR_USER = "quicksight:ListKMSKeysForUser";
	/** [List] quicksight:ListKnowledgeBases */
	static readonly LIST_KNOWLEDGE_BASES = "quicksight:ListKnowledgeBases";
	/** [List] quicksight:ListLimitsProfiles */
	static readonly LIST_LIMITS_PROFILES = "quicksight:ListLimitsProfiles";
	/** [List] quicksight:ListNamespaces */
	static readonly LIST_NAMESPACES = "quicksight:ListNamespaces";
	/** [List] quicksight:ListOAuthClientApplications */
	static readonly LIST_O_AUTH_CLIENT_APPLICATIONS =
		"quicksight:ListOAuthClientApplications";
	/** [List] quicksight:ListRefreshSchedules */
	static readonly LIST_REFRESH_SCHEDULES = "quicksight:ListRefreshSchedules";
	/** [List] quicksight:ListRoleMemberships */
	static readonly LIST_ROLE_MEMBERSHIPS = "quicksight:ListRoleMemberships";
	/** [List] quicksight:ListSelfUpgrades */
	static readonly LIST_SELF_UPGRADES = "quicksight:ListSelfUpgrades";
	/** [List] quicksight:ListSpaceResources */
	static readonly LIST_SPACE_RESOURCES = "quicksight:ListSpaceResources";
	/** [List] quicksight:ListSpaces */
	static readonly LIST_SPACES = "quicksight:ListSpaces";
	/** [Read] quicksight:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "quicksight:ListTagsForResource";
	/** [List] quicksight:ListTemplateAliases */
	static readonly LIST_TEMPLATE_ALIASES = "quicksight:ListTemplateAliases";
	/** [List] quicksight:ListTemplateVersions */
	static readonly LIST_TEMPLATE_VERSIONS = "quicksight:ListTemplateVersions";
	/** [List] quicksight:ListTemplates */
	static readonly LIST_TEMPLATES = "quicksight:ListTemplates";
	/** [List] quicksight:ListThemeAliases */
	static readonly LIST_THEME_ALIASES = "quicksight:ListThemeAliases";
	/** [List] quicksight:ListThemeVersions */
	static readonly LIST_THEME_VERSIONS = "quicksight:ListThemeVersions";
	/** [List] quicksight:ListThemes */
	static readonly LIST_THEMES = "quicksight:ListThemes";
	/** [List] quicksight:ListTopicRefreshSchedules */
	static readonly LIST_TOPIC_REFRESH_SCHEDULES =
		"quicksight:ListTopicRefreshSchedules";
	/** [List] quicksight:ListTopicReviewedAnswers */
	static readonly LIST_TOPIC_REVIEWED_ANSWERS =
		"quicksight:ListTopicReviewedAnswers";
	/** [List] quicksight:ListTopics */
	static readonly LIST_TOPICS = "quicksight:ListTopics";
	/** [List] quicksight:ListUserGroups */
	static readonly LIST_USER_GROUPS = "quicksight:ListUserGroups";
	/** [List] quicksight:ListUsers */
	static readonly LIST_USERS = "quicksight:ListUsers";
	/** [List] quicksight:ListUsersIndexCapacity */
	static readonly LIST_USERS_INDEX_CAPACITY =
		"quicksight:ListUsersIndexCapacity";
	/** [List] quicksight:ListVPCConnections */
	static readonly LIST_VPC_CONNECTIONS = "quicksight:ListVPCConnections";
	/** [Read] quicksight:PassDataSet */
	static readonly PASS_DATA_SET = "quicksight:PassDataSet";
	/** [Read] quicksight:PassDataSource */
	static readonly PASS_DATA_SOURCE = "quicksight:PassDataSource";
	/** [Read] quicksight:PassTopic */
	static readonly PASS_TOPIC = "quicksight:PassTopic";
	/** [Read] quicksight:PredictQAResults */
	static readonly PREDICT_QA_RESULTS = "quicksight:PredictQAResults";
	/** [Write] quicksight:PutDataSetRefreshProperties */
	static readonly PUT_DATA_SET_REFRESH_PROPERTIES =
		"quicksight:PutDataSetRefreshProperties";
	/** [Read] quicksight:QuickSuiteUsageMetrics */
	static readonly QUICK_SUITE_USAGE_METRICS =
		"quicksight:QuickSuiteUsageMetrics";
	/** [Write] quicksight:RegisterCustomerManagedKey */
	static readonly REGISTER_CUSTOMER_MANAGED_KEY =
		"quicksight:RegisterCustomerManagedKey";
	/** [Write] quicksight:RegisterUser */
	static readonly REGISTER_USER = "quicksight:RegisterUser";
	/** [Write] quicksight:RemoveCustomerManagedKey */
	static readonly REMOVE_CUSTOMER_MANAGED_KEY =
		"quicksight:RemoveCustomerManagedKey";
	/** [Write] quicksight:RestoreAnalysis */
	static readonly RESTORE_ANALYSIS = "quicksight:RestoreAnalysis";
	/** [Write] quicksight:ScopeDownPolicy */
	static readonly SCOPE_DOWN_POLICY = "quicksight:ScopeDownPolicy";
	/** [List] quicksight:SearchActionConnectors */
	static readonly SEARCH_ACTION_CONNECTORS =
		"quicksight:SearchActionConnectors";
	/** [List] quicksight:SearchAgents */
	static readonly SEARCH_AGENTS = "quicksight:SearchAgents";
	/** [List] quicksight:SearchAnalyses */
	static readonly SEARCH_ANALYSES = "quicksight:SearchAnalyses";
	/** [List] quicksight:SearchApps */
	static readonly SEARCH_APPS = "quicksight:SearchApps";
	/** [List] quicksight:SearchAutomationGroups */
	static readonly SEARCH_AUTOMATION_GROUPS =
		"quicksight:SearchAutomationGroups";
	/** [List] quicksight:SearchDashboards */
	static readonly SEARCH_DASHBOARDS = "quicksight:SearchDashboards";
	/** [List] quicksight:SearchDataSets */
	static readonly SEARCH_DATA_SETS = "quicksight:SearchDataSets";
	/** [List] quicksight:SearchDataSources */
	static readonly SEARCH_DATA_SOURCES = "quicksight:SearchDataSources";
	/** [List] quicksight:SearchDirectoryGroups */
	static readonly SEARCH_DIRECTORY_GROUPS = "quicksight:SearchDirectoryGroups";
	/** [List] quicksight:SearchFlows */
	static readonly SEARCH_FLOWS = "quicksight:SearchFlows";
	/** [Read] quicksight:SearchFolders */
	static readonly SEARCH_FOLDERS = "quicksight:SearchFolders";
	/** [List] quicksight:SearchGroups */
	static readonly SEARCH_GROUPS = "quicksight:SearchGroups";
	/** [List] quicksight:SearchKnowledgeBases */
	static readonly SEARCH_KNOWLEDGE_BASES = "quicksight:SearchKnowledgeBases";
	/** [List] quicksight:SearchSpaces */
	static readonly SEARCH_SPACES = "quicksight:SearchSpaces";
	/** [List] quicksight:SearchTopics */
	static readonly SEARCH_TOPICS = "quicksight:SearchTopics";
	/** [List] quicksight:SearchUsers */
	static readonly SEARCH_USERS = "quicksight:SearchUsers";
	/** [Write] quicksight:SetGroupMapping */
	static readonly SET_GROUP_MAPPING = "quicksight:SetGroupMapping";
	/** [Write] quicksight:StartAssetBundleExportJob */
	static readonly START_ASSET_BUNDLE_EXPORT_JOB =
		"quicksight:StartAssetBundleExportJob";
	/** [Write] quicksight:StartAssetBundleImportJob */
	static readonly START_ASSET_BUNDLE_IMPORT_JOB =
		"quicksight:StartAssetBundleImportJob";
	/** [Write] quicksight:StartAutomationJob */
	static readonly START_AUTOMATION_JOB = "quicksight:StartAutomationJob";
	/** [Write] quicksight:StartDashboardSnapshotJob */
	static readonly START_DASHBOARD_SNAPSHOT_JOB =
		"quicksight:StartDashboardSnapshotJob";
	/** [Write] quicksight:StartDashboardSnapshotJobSchedule */
	static readonly START_DASHBOARD_SNAPSHOT_JOB_SCHEDULE =
		"quicksight:StartDashboardSnapshotJobSchedule";
	/** [Write] quicksight:StartDlpJob */
	static readonly START_DLP_JOB = "quicksight:StartDlpJob";
	/** [Write] quicksight:Subscribe */
	static readonly SUBSCRIBE = "quicksight:Subscribe";
	/** [Tagging] quicksight:TagResource */
	static readonly TAG_RESOURCE = "quicksight:TagResource";
	/** [Write] quicksight:UnpublishFlow */
	static readonly UNPUBLISH_FLOW = "quicksight:UnpublishFlow";
	/** [Write] quicksight:Unsubscribe */
	static readonly UNSUBSCRIBE = "quicksight:Unsubscribe";
	/** [Tagging] quicksight:UntagResource */
	static readonly UNTAG_RESOURCE = "quicksight:UntagResource";
	/** [Write] quicksight:UpdateAccountCustomPermission */
	static readonly UPDATE_ACCOUNT_CUSTOM_PERMISSION =
		"quicksight:UpdateAccountCustomPermission";
	/** [Write] quicksight:UpdateAccountCustomization */
	static readonly UPDATE_ACCOUNT_CUSTOMIZATION =
		"quicksight:UpdateAccountCustomization";
	/** [Write] quicksight:UpdateAccountSettings */
	static readonly UPDATE_ACCOUNT_SETTINGS = "quicksight:UpdateAccountSettings";
	/** [Write] quicksight:UpdateActionConnector */
	static readonly UPDATE_ACTION_CONNECTOR = "quicksight:UpdateActionConnector";
	/** [PermissionManagement] quicksight:UpdateActionConnectorPermissions */
	static readonly UPDATE_ACTION_CONNECTOR_PERMISSIONS =
		"quicksight:UpdateActionConnectorPermissions";
	/** [Write] quicksight:UpdateAgent */
	static readonly UPDATE_AGENT = "quicksight:UpdateAgent";
	/** [PermissionManagement] quicksight:UpdateAgentPermissions */
	static readonly UPDATE_AGENT_PERMISSIONS =
		"quicksight:UpdateAgentPermissions";
	/** [Write] quicksight:UpdateAnalysis */
	static readonly UPDATE_ANALYSIS = "quicksight:UpdateAnalysis";
	/** [PermissionManagement] quicksight:UpdateAnalysisPermissions */
	static readonly UPDATE_ANALYSIS_PERMISSIONS =
		"quicksight:UpdateAnalysisPermissions";
	/** [PermissionManagement] quicksight:UpdateAppPermissions */
	static readonly UPDATE_APP_PERMISSIONS = "quicksight:UpdateAppPermissions";
	/** [Write] quicksight:UpdateApplicationWithTokenExchangeGrant */
	static readonly UPDATE_APPLICATION_WITH_TOKEN_EXCHANGE_GRANT =
		"quicksight:UpdateApplicationWithTokenExchangeGrant";
	/** [Write] quicksight:UpdateApprovalPolicy */
	static readonly UPDATE_APPROVAL_POLICY = "quicksight:UpdateApprovalPolicy";
	/** [PermissionManagement] quicksight:UpdateAutomationGroupPermissions */
	static readonly UPDATE_AUTOMATION_GROUP_PERMISSIONS =
		"quicksight:UpdateAutomationGroupPermissions";
	/** [Write] quicksight:UpdateBrand */
	static readonly UPDATE_BRAND = "quicksight:UpdateBrand";
	/** [Write] quicksight:UpdateBrandAssignment */
	static readonly UPDATE_BRAND_ASSIGNMENT = "quicksight:UpdateBrandAssignment";
	/** [Write] quicksight:UpdateBrandPublishedVersion */
	static readonly UPDATE_BRAND_PUBLISHED_VERSION =
		"quicksight:UpdateBrandPublishedVersion";
	/** [Write] quicksight:UpdateChatConfiguration */
	static readonly UPDATE_CHAT_CONFIGURATION =
		"quicksight:UpdateChatConfiguration";
	/** [Write] quicksight:UpdateCustomPermissions */
	static readonly UPDATE_CUSTOM_PERMISSIONS =
		"quicksight:UpdateCustomPermissions";
	/** [Write] quicksight:UpdateDashboard */
	static readonly UPDATE_DASHBOARD = "quicksight:UpdateDashboard";
	/** [Write] quicksight:UpdateDashboardLinks */
	static readonly UPDATE_DASHBOARD_LINKS = "quicksight:UpdateDashboardLinks";
	/** [PermissionManagement] quicksight:UpdateDashboardPermissions */
	static readonly UPDATE_DASHBOARD_PERMISSIONS =
		"quicksight:UpdateDashboardPermissions";
	/** [Write] quicksight:UpdateDashboardPublishedVersion */
	static readonly UPDATE_DASHBOARD_PUBLISHED_VERSION =
		"quicksight:UpdateDashboardPublishedVersion";
	/** [Write] quicksight:UpdateDashboardsQAConfiguration */
	static readonly UPDATE_DASHBOARDS_QA_CONFIGURATION =
		"quicksight:UpdateDashboardsQAConfiguration";
	/** [Write] quicksight:UpdateDataSet */
	static readonly UPDATE_DATA_SET = "quicksight:UpdateDataSet";
	/** [PermissionManagement] quicksight:UpdateDataSetPermissions */
	static readonly UPDATE_DATA_SET_PERMISSIONS =
		"quicksight:UpdateDataSetPermissions";
	/** [Write] quicksight:UpdateDataSource */
	static readonly UPDATE_DATA_SOURCE = "quicksight:UpdateDataSource";
	/** [PermissionManagement] quicksight:UpdateDataSourcePermissions */
	static readonly UPDATE_DATA_SOURCE_PERMISSIONS =
		"quicksight:UpdateDataSourcePermissions";
	/** [Write] quicksight:UpdateDefaultQBusinessApplication */
	static readonly UPDATE_DEFAULT_Q_BUSINESS_APPLICATION =
		"quicksight:UpdateDefaultQBusinessApplication";
	/** [Write] quicksight:UpdateDlpSetting */
	static readonly UPDATE_DLP_SETTING = "quicksight:UpdateDlpSetting";
	/** [Write] quicksight:UpdateEmailCustomizationTemplate */
	static readonly UPDATE_EMAIL_CUSTOMIZATION_TEMPLATE =
		"quicksight:UpdateEmailCustomizationTemplate";
	/** [Write] quicksight:UpdateExtensionAccess */
	static readonly UPDATE_EXTENSION_ACCESS = "quicksight:UpdateExtensionAccess";
	/** [Write] quicksight:UpdateFlow */
	static readonly UPDATE_FLOW = "quicksight:UpdateFlow";
	/** [PermissionManagement] quicksight:UpdateFlowPermissions */
	static readonly UPDATE_FLOW_PERMISSIONS = "quicksight:UpdateFlowPermissions";
	/** [Write] quicksight:UpdateFolder */
	static readonly UPDATE_FOLDER = "quicksight:UpdateFolder";
	/** [PermissionManagement] quicksight:UpdateFolderPermissions */
	static readonly UPDATE_FOLDER_PERMISSIONS =
		"quicksight:UpdateFolderPermissions";
	/** [Write] quicksight:UpdateGroup */
	static readonly UPDATE_GROUP = "quicksight:UpdateGroup";
	/** [Write] quicksight:UpdateIAMPolicyAssignment */
	static readonly UPDATE_IAM_POLICY_ASSIGNMENT =
		"quicksight:UpdateIAMPolicyAssignment";
	/** [Write] quicksight:UpdateIdentityPropagationConfig */
	static readonly UPDATE_IDENTITY_PROPAGATION_CONFIG =
		"quicksight:UpdateIdentityPropagationConfig";
	/** [Write] quicksight:UpdateIpRestriction */
	static readonly UPDATE_IP_RESTRICTION = "quicksight:UpdateIpRestriction";
	/** [Write] quicksight:UpdateKeyRegistration */
	static readonly UPDATE_KEY_REGISTRATION = "quicksight:UpdateKeyRegistration";
	/** [Write] quicksight:UpdateKnowledgeBase */
	static readonly UPDATE_KNOWLEDGE_BASE = "quicksight:UpdateKnowledgeBase";
	/** [PermissionManagement] quicksight:UpdateKnowledgeBasePermissions */
	static readonly UPDATE_KNOWLEDGE_BASE_PERMISSIONS =
		"quicksight:UpdateKnowledgeBasePermissions";
	/** [Write] quicksight:UpdateLimitsProfile */
	static readonly UPDATE_LIMITS_PROFILE = "quicksight:UpdateLimitsProfile";
	/** [Write] quicksight:UpdateOAuthClientApplication */
	static readonly UPDATE_O_AUTH_CLIENT_APPLICATION =
		"quicksight:UpdateOAuthClientApplication";
	/** [Write] quicksight:UpdatePublicSharingSettings */
	static readonly UPDATE_PUBLIC_SHARING_SETTINGS =
		"quicksight:UpdatePublicSharingSettings";
	/** [Write] quicksight:UpdateQPersonalizationConfiguration */
	static readonly UPDATE_Q_PERSONALIZATION_CONFIGURATION =
		"quicksight:UpdateQPersonalizationConfiguration";
	/** [Write] quicksight:UpdateQuickIndexCapacity */
	static readonly UPDATE_QUICK_INDEX_CAPACITY =
		"quicksight:UpdateQuickIndexCapacity";
	/** [Write] quicksight:UpdateQuickSightQSearchConfiguration */
	static readonly UPDATE_QUICK_SIGHT_Q_SEARCH_CONFIGURATION =
		"quicksight:UpdateQuickSightQSearchConfiguration";
	/** [Write] quicksight:UpdateRefreshSchedule */
	static readonly UPDATE_REFRESH_SCHEDULE = "quicksight:UpdateRefreshSchedule";
	/** [Write] quicksight:UpdateResourcePermissions */
	static readonly UPDATE_RESOURCE_PERMISSIONS =
		"quicksight:UpdateResourcePermissions";
	/** [Write] quicksight:UpdateRoleCustomPermission */
	static readonly UPDATE_ROLE_CUSTOM_PERMISSION =
		"quicksight:UpdateRoleCustomPermission";
	/** [Write] quicksight:UpdateSPICECapacityConfiguration */
	static readonly UPDATE_SPICE_CAPACITY_CONFIGURATION =
		"quicksight:UpdateSPICECapacityConfiguration";
	/** [Write] quicksight:UpdateSelfUpgrade */
	static readonly UPDATE_SELF_UPGRADE = "quicksight:UpdateSelfUpgrade";
	/** [Write] quicksight:UpdateSelfUpgradeConfiguration */
	static readonly UPDATE_SELF_UPGRADE_CONFIGURATION =
		"quicksight:UpdateSelfUpgradeConfiguration";
	/** [Write] quicksight:UpdateSpace */
	static readonly UPDATE_SPACE = "quicksight:UpdateSpace";
	/** [PermissionManagement] quicksight:UpdateSpacePermissions */
	static readonly UPDATE_SPACE_PERMISSIONS =
		"quicksight:UpdateSpacePermissions";
	/** [Write] quicksight:UpdateSpaceResources */
	static readonly UPDATE_SPACE_RESOURCES = "quicksight:UpdateSpaceResources";
	/** [Write] quicksight:UpdateTemplate */
	static readonly UPDATE_TEMPLATE = "quicksight:UpdateTemplate";
	/** [Write] quicksight:UpdateTemplateAlias */
	static readonly UPDATE_TEMPLATE_ALIAS = "quicksight:UpdateTemplateAlias";
	/** [PermissionManagement] quicksight:UpdateTemplatePermissions */
	static readonly UPDATE_TEMPLATE_PERMISSIONS =
		"quicksight:UpdateTemplatePermissions";
	/** [Write] quicksight:UpdateTheme */
	static readonly UPDATE_THEME = "quicksight:UpdateTheme";
	/** [Write] quicksight:UpdateThemeAlias */
	static readonly UPDATE_THEME_ALIAS = "quicksight:UpdateThemeAlias";
	/** [PermissionManagement] quicksight:UpdateThemePermissions */
	static readonly UPDATE_THEME_PERMISSIONS =
		"quicksight:UpdateThemePermissions";
	/** [Write] quicksight:UpdateTopic */
	static readonly UPDATE_TOPIC = "quicksight:UpdateTopic";
	/** [PermissionManagement] quicksight:UpdateTopicPermissions */
	static readonly UPDATE_TOPIC_PERMISSIONS =
		"quicksight:UpdateTopicPermissions";
	/** [Write] quicksight:UpdateTopicRefreshSchedule */
	static readonly UPDATE_TOPIC_REFRESH_SCHEDULE =
		"quicksight:UpdateTopicRefreshSchedule";
	/** [Write] quicksight:UpdateUser */
	static readonly UPDATE_USER = "quicksight:UpdateUser";
	/** [Write] quicksight:UpdateUserCustomPermission */
	static readonly UPDATE_USER_CUSTOM_PERMISSION =
		"quicksight:UpdateUserCustomPermission";
	/** [Write] quicksight:UpdateVPCConnection */
	static readonly UPDATE_VPC_CONNECTION = "quicksight:UpdateVPCConnection";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		QuickSightActions.BATCH_DESCRIBE_USER_LIMITS,
		QuickSightActions.BATCH_GET_PREFERENCES,
		QuickSightActions.DESCRIBE_ACCOUNT_CUSTOM_PERMISSION,
		QuickSightActions.DESCRIBE_ACCOUNT_CUSTOMIZATION,
		QuickSightActions.DESCRIBE_ACCOUNT_SETTINGS,
		QuickSightActions.DESCRIBE_ACCOUNT_SUBSCRIPTION,
		QuickSightActions.DESCRIBE_ACTION_CONNECTOR,
		QuickSightActions.DESCRIBE_ACTION_CONNECTOR_PERMISSIONS,
		QuickSightActions.DESCRIBE_AGENT,
		QuickSightActions.DESCRIBE_AGENT_PERMISSIONS,
		QuickSightActions.DESCRIBE_ANALYSIS,
		QuickSightActions.DESCRIBE_ANALYSIS_PERMISSIONS,
		QuickSightActions.DESCRIBE_APP,
		QuickSightActions.DESCRIBE_APP_PERMISSIONS,
		QuickSightActions.DESCRIBE_APPROVAL_POLICY,
		QuickSightActions.DESCRIBE_ASSET_BUNDLE_EXPORT_JOB,
		QuickSightActions.DESCRIBE_ASSET_BUNDLE_IMPORT_JOB,
		QuickSightActions.DESCRIBE_AUTOMATION_GROUP,
		QuickSightActions.DESCRIBE_AUTOMATION_JOB,
		QuickSightActions.DESCRIBE_BRAND,
		QuickSightActions.DESCRIBE_BRAND_ASSIGNMENT,
		QuickSightActions.DESCRIBE_BRAND_PUBLISHED_VERSION,
		QuickSightActions.DESCRIBE_CHAT_CONFIGURATION,
		QuickSightActions.DESCRIBE_CUSTOM_PERMISSIONS,
		QuickSightActions.DESCRIBE_DASHBOARD,
		QuickSightActions.DESCRIBE_DASHBOARD_PERMISSIONS,
		QuickSightActions.DESCRIBE_DASHBOARD_SNAPSHOT_JOB,
		QuickSightActions.DESCRIBE_DASHBOARD_SNAPSHOT_JOB_RESULT,
		QuickSightActions.DESCRIBE_DASHBOARDS_QA_CONFIGURATION,
		QuickSightActions.DESCRIBE_DATA_SET,
		QuickSightActions.DESCRIBE_DATA_SET_PERMISSIONS,
		QuickSightActions.DESCRIBE_DATA_SET_REFRESH_PROPERTIES,
		QuickSightActions.DESCRIBE_DATA_SOURCE,
		QuickSightActions.DESCRIBE_DATA_SOURCE_PERMISSIONS,
		QuickSightActions.DESCRIBE_DEFAULT_Q_BUSINESS_APPLICATION,
		QuickSightActions.DESCRIBE_DLP_JOB,
		QuickSightActions.DESCRIBE_DLP_SETTING,
		QuickSightActions.DESCRIBE_EMAIL_CUSTOMIZATION_TEMPLATE,
		QuickSightActions.DESCRIBE_EXTENSION_ACCESS,
		QuickSightActions.DESCRIBE_FLOW,
		QuickSightActions.DESCRIBE_FOLDER,
		QuickSightActions.DESCRIBE_FOLDER_PERMISSIONS,
		QuickSightActions.DESCRIBE_FOLDER_RESOLVED_PERMISSIONS,
		QuickSightActions.DESCRIBE_GROUP,
		QuickSightActions.DESCRIBE_GROUP_MEMBERSHIP,
		QuickSightActions.DESCRIBE_IAM_POLICY_ASSIGNMENT,
		QuickSightActions.DESCRIBE_INGESTION,
		QuickSightActions.DESCRIBE_IP_RESTRICTION,
		QuickSightActions.DESCRIBE_KEY_REGISTRATION,
		QuickSightActions.DESCRIBE_KNOWLEDGE_BASE,
		QuickSightActions.DESCRIBE_LIMITS_PROFILE,
		QuickSightActions.DESCRIBE_NAMESPACE,
		QuickSightActions.DESCRIBE_O_AUTH_CLIENT_APPLICATION,
		QuickSightActions.DESCRIBE_Q_PERSONALIZATION_CONFIGURATION,
		QuickSightActions.DESCRIBE_QUICK_INDEX_CAPACITY,
		QuickSightActions.DESCRIBE_QUICK_SIGHT_Q_SEARCH_CONFIGURATION,
		QuickSightActions.DESCRIBE_REFRESH_SCHEDULE,
		QuickSightActions.DESCRIBE_ROLE_CUSTOM_PERMISSION,
		QuickSightActions.DESCRIBE_SELF_UPGRADE_CONFIGURATION,
		QuickSightActions.DESCRIBE_SPACE,
		QuickSightActions.DESCRIBE_TEMPLATE,
		QuickSightActions.DESCRIBE_TEMPLATE_ALIAS,
		QuickSightActions.DESCRIBE_TEMPLATE_PERMISSIONS,
		QuickSightActions.DESCRIBE_THEME,
		QuickSightActions.DESCRIBE_THEME_ALIAS,
		QuickSightActions.DESCRIBE_THEME_PERMISSIONS,
		QuickSightActions.DESCRIBE_TOPIC,
		QuickSightActions.DESCRIBE_TOPIC_REFRESH,
		QuickSightActions.DESCRIBE_TOPIC_REFRESH_SCHEDULE,
		QuickSightActions.DESCRIBE_USER,
		QuickSightActions.DESCRIBE_VPC_CONNECTION,
		QuickSightActions.GET_ANONYMOUS_USER_EMBED_URL,
		QuickSightActions.GET_AUTH_CODE,
		QuickSightActions.GET_CUSTOM_PERMISSIONS_SUMMARY,
		QuickSightActions.GET_DASHBOARD_EMBED_URL,
		QuickSightActions.GET_FLOW_METADATA,
		QuickSightActions.GET_FLOW_PERMISSIONS,
		QuickSightActions.GET_GROUP_MAPPING,
		QuickSightActions.GET_IDENTITY_CONTEXT,
		QuickSightActions.GET_SESSION_EMBED_URL,
		QuickSightActions.LIST_FOLDER_MEMBERS,
		QuickSightActions.LIST_TAGS_FOR_RESOURCE,
		QuickSightActions.PASS_DATA_SET,
		QuickSightActions.PASS_DATA_SOURCE,
		QuickSightActions.PASS_TOPIC,
		QuickSightActions.PREDICT_QA_RESULTS,
		QuickSightActions.QUICK_SUITE_USAGE_METRICS,
		QuickSightActions.SEARCH_FOLDERS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		QuickSightActions.ACCOUNT_CONFIGURATIONS,
		QuickSightActions.BATCH_CREATE_TOPIC_REVIEWED_ANSWER,
		QuickSightActions.BATCH_DELETE_KNOWLEDGE_BASE,
		QuickSightActions.BATCH_DELETE_TOPIC_REVIEWED_ANSWER,
		QuickSightActions.BATCH_UPDATE_PREFERENCES,
		QuickSightActions.CANCEL_INGESTION,
		QuickSightActions.CREATE_ACCOUNT_CUSTOMIZATION,
		QuickSightActions.CREATE_ACCOUNT_SUBSCRIPTION,
		QuickSightActions.CREATE_ACTION_CONNECTOR,
		QuickSightActions.CREATE_ADMIN,
		QuickSightActions.CREATE_AGENT,
		QuickSightActions.CREATE_ANALYSIS,
		QuickSightActions.CREATE_APPROVAL_POLICY,
		QuickSightActions.CREATE_BRAND,
		QuickSightActions.CREATE_CUSTOM_PERMISSIONS,
		QuickSightActions.CREATE_DASHBOARD,
		QuickSightActions.CREATE_DATA_SET,
		QuickSightActions.CREATE_DATA_SOURCE,
		QuickSightActions.CREATE_DLP_SETTING,
		QuickSightActions.CREATE_EMAIL_CUSTOMIZATION_TEMPLATE,
		QuickSightActions.CREATE_EXTENSION_ACCESS,
		QuickSightActions.CREATE_FLOW,
		QuickSightActions.CREATE_FOLDER,
		QuickSightActions.CREATE_FOLDER_MEMBERSHIP,
		QuickSightActions.CREATE_GROUP,
		QuickSightActions.CREATE_GROUP_MEMBERSHIP,
		QuickSightActions.CREATE_IAM_POLICY_ASSIGNMENT,
		QuickSightActions.CREATE_INGESTION,
		QuickSightActions.CREATE_KNOWLEDGE_BASE,
		QuickSightActions.CREATE_LIMITS_PROFILE,
		QuickSightActions.CREATE_NAMESPACE,
		QuickSightActions.CREATE_O_AUTH_CLIENT_APPLICATION,
		QuickSightActions.CREATE_READER,
		QuickSightActions.CREATE_REFRESH_SCHEDULE,
		QuickSightActions.CREATE_ROLE_MEMBERSHIP,
		QuickSightActions.CREATE_SPACE,
		QuickSightActions.CREATE_TEMPLATE,
		QuickSightActions.CREATE_TEMPLATE_ALIAS,
		QuickSightActions.CREATE_THEME,
		QuickSightActions.CREATE_THEME_ALIAS,
		QuickSightActions.CREATE_TOPIC,
		QuickSightActions.CREATE_TOPIC_REFRESH_SCHEDULE,
		QuickSightActions.CREATE_USER,
		QuickSightActions.CREATE_VPC_CONNECTION,
		QuickSightActions.DELETE_ACCOUNT_CUSTOM_PERMISSION,
		QuickSightActions.DELETE_ACCOUNT_CUSTOMIZATION,
		QuickSightActions.DELETE_ACCOUNT_SUBSCRIPTION,
		QuickSightActions.DELETE_ACTION_CONNECTOR,
		QuickSightActions.DELETE_AGENT,
		QuickSightActions.DELETE_ANALYSIS,
		QuickSightActions.DELETE_APP,
		QuickSightActions.DELETE_APPROVAL_POLICY,
		QuickSightActions.DELETE_BRAND,
		QuickSightActions.DELETE_BRAND_ASSIGNMENT,
		QuickSightActions.DELETE_CUSTOM_PERMISSIONS,
		QuickSightActions.DELETE_DASHBOARD,
		QuickSightActions.DELETE_DATA_SET,
		QuickSightActions.DELETE_DATA_SET_REFRESH_PROPERTIES,
		QuickSightActions.DELETE_DATA_SOURCE,
		QuickSightActions.DELETE_DEFAULT_Q_BUSINESS_APPLICATION,
		QuickSightActions.DELETE_DLP_SETTING,
		QuickSightActions.DELETE_EMAIL_CUSTOMIZATION_TEMPLATE,
		QuickSightActions.DELETE_EXTENSION_ACCESS,
		QuickSightActions.DELETE_FLOW,
		QuickSightActions.DELETE_FOLDER,
		QuickSightActions.DELETE_FOLDER_MEMBERSHIP,
		QuickSightActions.DELETE_GROUP,
		QuickSightActions.DELETE_GROUP_MEMBERSHIP,
		QuickSightActions.DELETE_IAM_POLICY_ASSIGNMENT,
		QuickSightActions.DELETE_IDENTITY_PROPAGATION_CONFIG,
		QuickSightActions.DELETE_KNOWLEDGE_BASE,
		QuickSightActions.DELETE_LIMITS_PROFILE,
		QuickSightActions.DELETE_NAMESPACE,
		QuickSightActions.DELETE_O_AUTH_CLIENT_APPLICATION,
		QuickSightActions.DELETE_REFRESH_SCHEDULE,
		QuickSightActions.DELETE_ROLE_CUSTOM_PERMISSION,
		QuickSightActions.DELETE_ROLE_MEMBERSHIP,
		QuickSightActions.DELETE_SPACE,
		QuickSightActions.DELETE_TEMPLATE,
		QuickSightActions.DELETE_TEMPLATE_ALIAS,
		QuickSightActions.DELETE_THEME,
		QuickSightActions.DELETE_THEME_ALIAS,
		QuickSightActions.DELETE_TOPIC,
		QuickSightActions.DELETE_TOPIC_REFRESH_SCHEDULE,
		QuickSightActions.DELETE_USER,
		QuickSightActions.DELETE_USER_BY_PRINCIPAL_ID,
		QuickSightActions.DELETE_USER_CUSTOM_PERMISSION,
		QuickSightActions.DELETE_VPC_CONNECTION,
		QuickSightActions.GENERATE_EMBED_URL_FOR_ANONYMOUS_USER,
		QuickSightActions.GENERATE_EMBED_URL_FOR_REGISTERED_USER,
		QuickSightActions.GENERATE_EMBED_URL_FOR_REGISTERED_USER_WITH_IDENTITY,
		QuickSightActions.PUT_DATA_SET_REFRESH_PROPERTIES,
		QuickSightActions.REGISTER_CUSTOMER_MANAGED_KEY,
		QuickSightActions.REGISTER_USER,
		QuickSightActions.REMOVE_CUSTOMER_MANAGED_KEY,
		QuickSightActions.RESTORE_ANALYSIS,
		QuickSightActions.SCOPE_DOWN_POLICY,
		QuickSightActions.SET_GROUP_MAPPING,
		QuickSightActions.START_ASSET_BUNDLE_EXPORT_JOB,
		QuickSightActions.START_ASSET_BUNDLE_IMPORT_JOB,
		QuickSightActions.START_AUTOMATION_JOB,
		QuickSightActions.START_DASHBOARD_SNAPSHOT_JOB,
		QuickSightActions.START_DASHBOARD_SNAPSHOT_JOB_SCHEDULE,
		QuickSightActions.START_DLP_JOB,
		QuickSightActions.SUBSCRIBE,
		QuickSightActions.UNPUBLISH_FLOW,
		QuickSightActions.UNSUBSCRIBE,
		QuickSightActions.UPDATE_ACCOUNT_CUSTOM_PERMISSION,
		QuickSightActions.UPDATE_ACCOUNT_CUSTOMIZATION,
		QuickSightActions.UPDATE_ACCOUNT_SETTINGS,
		QuickSightActions.UPDATE_ACTION_CONNECTOR,
		QuickSightActions.UPDATE_AGENT,
		QuickSightActions.UPDATE_ANALYSIS,
		QuickSightActions.UPDATE_APPLICATION_WITH_TOKEN_EXCHANGE_GRANT,
		QuickSightActions.UPDATE_APPROVAL_POLICY,
		QuickSightActions.UPDATE_BRAND,
		QuickSightActions.UPDATE_BRAND_ASSIGNMENT,
		QuickSightActions.UPDATE_BRAND_PUBLISHED_VERSION,
		QuickSightActions.UPDATE_CHAT_CONFIGURATION,
		QuickSightActions.UPDATE_CUSTOM_PERMISSIONS,
		QuickSightActions.UPDATE_DASHBOARD,
		QuickSightActions.UPDATE_DASHBOARD_LINKS,
		QuickSightActions.UPDATE_DASHBOARD_PUBLISHED_VERSION,
		QuickSightActions.UPDATE_DASHBOARDS_QA_CONFIGURATION,
		QuickSightActions.UPDATE_DATA_SET,
		QuickSightActions.UPDATE_DATA_SOURCE,
		QuickSightActions.UPDATE_DEFAULT_Q_BUSINESS_APPLICATION,
		QuickSightActions.UPDATE_DLP_SETTING,
		QuickSightActions.UPDATE_EMAIL_CUSTOMIZATION_TEMPLATE,
		QuickSightActions.UPDATE_EXTENSION_ACCESS,
		QuickSightActions.UPDATE_FLOW,
		QuickSightActions.UPDATE_FOLDER,
		QuickSightActions.UPDATE_GROUP,
		QuickSightActions.UPDATE_IAM_POLICY_ASSIGNMENT,
		QuickSightActions.UPDATE_IDENTITY_PROPAGATION_CONFIG,
		QuickSightActions.UPDATE_IP_RESTRICTION,
		QuickSightActions.UPDATE_KEY_REGISTRATION,
		QuickSightActions.UPDATE_KNOWLEDGE_BASE,
		QuickSightActions.UPDATE_LIMITS_PROFILE,
		QuickSightActions.UPDATE_O_AUTH_CLIENT_APPLICATION,
		QuickSightActions.UPDATE_PUBLIC_SHARING_SETTINGS,
		QuickSightActions.UPDATE_Q_PERSONALIZATION_CONFIGURATION,
		QuickSightActions.UPDATE_QUICK_INDEX_CAPACITY,
		QuickSightActions.UPDATE_QUICK_SIGHT_Q_SEARCH_CONFIGURATION,
		QuickSightActions.UPDATE_REFRESH_SCHEDULE,
		QuickSightActions.UPDATE_RESOURCE_PERMISSIONS,
		QuickSightActions.UPDATE_ROLE_CUSTOM_PERMISSION,
		QuickSightActions.UPDATE_SPICE_CAPACITY_CONFIGURATION,
		QuickSightActions.UPDATE_SELF_UPGRADE,
		QuickSightActions.UPDATE_SELF_UPGRADE_CONFIGURATION,
		QuickSightActions.UPDATE_SPACE,
		QuickSightActions.UPDATE_SPACE_RESOURCES,
		QuickSightActions.UPDATE_TEMPLATE,
		QuickSightActions.UPDATE_TEMPLATE_ALIAS,
		QuickSightActions.UPDATE_THEME,
		QuickSightActions.UPDATE_THEME_ALIAS,
		QuickSightActions.UPDATE_TOPIC,
		QuickSightActions.UPDATE_TOPIC_REFRESH_SCHEDULE,
		QuickSightActions.UPDATE_USER,
		QuickSightActions.UPDATE_USER_CUSTOM_PERMISSION,
		QuickSightActions.UPDATE_VPC_CONNECTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		QuickSightActions.LIST_ACTION_CONNECTORS,
		QuickSightActions.LIST_AGENTS,
		QuickSightActions.LIST_ANALYSES,
		QuickSightActions.LIST_APPROVAL_POLICIES,
		QuickSightActions.LIST_APPS,
		QuickSightActions.LIST_ASSET_BUNDLE_EXPORT_JOBS,
		QuickSightActions.LIST_ASSET_BUNDLE_IMPORT_JOBS,
		QuickSightActions.LIST_AUTOMATION_GROUPS,
		QuickSightActions.LIST_BRANDS,
		QuickSightActions.LIST_CUSTOM_PERMISSIONS,
		QuickSightActions.LIST_CUSTOMER_MANAGED_KEYS,
		QuickSightActions.LIST_DASHBOARD_VERSIONS,
		QuickSightActions.LIST_DASHBOARDS,
		QuickSightActions.LIST_DATA_SETS,
		QuickSightActions.LIST_DATA_SOURCES,
		QuickSightActions.LIST_DLP_LABELS,
		QuickSightActions.LIST_DLP_SETTINGS,
		QuickSightActions.LIST_EXTENSION_ACCESSES,
		QuickSightActions.LIST_FLOWS,
		QuickSightActions.LIST_FOLDERS,
		QuickSightActions.LIST_FOLDERS_FOR_RESOURCE,
		QuickSightActions.LIST_GROUP_MEMBERSHIPS,
		QuickSightActions.LIST_GROUPS,
		QuickSightActions.LIST_IAM_POLICY_ASSIGNMENTS,
		QuickSightActions.LIST_IAM_POLICY_ASSIGNMENTS_FOR_USER,
		QuickSightActions.LIST_IDENTITY_PROPAGATION_CONFIGS,
		QuickSightActions.LIST_INGESTIONS,
		QuickSightActions.LIST_KMS_KEYS_FOR_USER,
		QuickSightActions.LIST_KNOWLEDGE_BASES,
		QuickSightActions.LIST_LIMITS_PROFILES,
		QuickSightActions.LIST_NAMESPACES,
		QuickSightActions.LIST_O_AUTH_CLIENT_APPLICATIONS,
		QuickSightActions.LIST_REFRESH_SCHEDULES,
		QuickSightActions.LIST_ROLE_MEMBERSHIPS,
		QuickSightActions.LIST_SELF_UPGRADES,
		QuickSightActions.LIST_SPACE_RESOURCES,
		QuickSightActions.LIST_SPACES,
		QuickSightActions.LIST_TEMPLATE_ALIASES,
		QuickSightActions.LIST_TEMPLATE_VERSIONS,
		QuickSightActions.LIST_TEMPLATES,
		QuickSightActions.LIST_THEME_ALIASES,
		QuickSightActions.LIST_THEME_VERSIONS,
		QuickSightActions.LIST_THEMES,
		QuickSightActions.LIST_TOPIC_REFRESH_SCHEDULES,
		QuickSightActions.LIST_TOPIC_REVIEWED_ANSWERS,
		QuickSightActions.LIST_TOPICS,
		QuickSightActions.LIST_USER_GROUPS,
		QuickSightActions.LIST_USERS,
		QuickSightActions.LIST_USERS_INDEX_CAPACITY,
		QuickSightActions.LIST_VPC_CONNECTIONS,
		QuickSightActions.SEARCH_ACTION_CONNECTORS,
		QuickSightActions.SEARCH_AGENTS,
		QuickSightActions.SEARCH_ANALYSES,
		QuickSightActions.SEARCH_APPS,
		QuickSightActions.SEARCH_AUTOMATION_GROUPS,
		QuickSightActions.SEARCH_DASHBOARDS,
		QuickSightActions.SEARCH_DATA_SETS,
		QuickSightActions.SEARCH_DATA_SOURCES,
		QuickSightActions.SEARCH_DIRECTORY_GROUPS,
		QuickSightActions.SEARCH_FLOWS,
		QuickSightActions.SEARCH_GROUPS,
		QuickSightActions.SEARCH_KNOWLEDGE_BASES,
		QuickSightActions.SEARCH_SPACES,
		QuickSightActions.SEARCH_TOPICS,
		QuickSightActions.SEARCH_USERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		QuickSightActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
		QuickSightActions.DESCRIBE_AUTOMATION_GROUP_PERMISSIONS,
		QuickSightActions.DESCRIBE_KNOWLEDGE_BASE_PERMISSIONS,
		QuickSightActions.DESCRIBE_SPACE_PERMISSIONS,
		QuickSightActions.DESCRIBE_TOPIC_PERMISSIONS,
		QuickSightActions.UPDATE_ACTION_CONNECTOR_PERMISSIONS,
		QuickSightActions.UPDATE_AGENT_PERMISSIONS,
		QuickSightActions.UPDATE_ANALYSIS_PERMISSIONS,
		QuickSightActions.UPDATE_APP_PERMISSIONS,
		QuickSightActions.UPDATE_AUTOMATION_GROUP_PERMISSIONS,
		QuickSightActions.UPDATE_DASHBOARD_PERMISSIONS,
		QuickSightActions.UPDATE_DATA_SET_PERMISSIONS,
		QuickSightActions.UPDATE_DATA_SOURCE_PERMISSIONS,
		QuickSightActions.UPDATE_FLOW_PERMISSIONS,
		QuickSightActions.UPDATE_FOLDER_PERMISSIONS,
		QuickSightActions.UPDATE_KNOWLEDGE_BASE_PERMISSIONS,
		QuickSightActions.UPDATE_SPACE_PERMISSIONS,
		QuickSightActions.UPDATE_TEMPLATE_PERMISSIONS,
		QuickSightActions.UPDATE_THEME_PERMISSIONS,
		QuickSightActions.UPDATE_TOPIC_PERMISSIONS,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		QuickSightActions.TAG_RESOURCE,
		QuickSightActions.UNTAG_RESOURCE,
	];
}

const AccountArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):account/(?<resourceId>[^:/?]+)$",
);
const ActionconnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):action-connector/(?<resourceId>[^:/?]+)$",
);
const AgentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):agent/(?<resourceId>[^:/?]+)$",
);
const AnalysisArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):analysis/(?<resourceId>[^:/?]+)$",
);
const AppArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):app/(?<resourceId>[^:/?]+)$",
);
const ApprovalPolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):approval-policy/(?<resourceId>[^:/?]+)$",
);
const AssetBundleExportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):asset-bundle-export-job/(?<resourceId>[^:/?]+)$",
);
const AssetBundleImportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):asset-bundle-import-job/(?<resourceId>[^:/?]+)$",
);
const AssignmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight::(?<account>[^:]*):assignment/(?<resourceId>[^:/?]+)$",
);
const AutomationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):automation-group/(?<automationGroupId>[^:/?]+)/automation/(?<resourceId>[^:/?]+)$",
);
const AutomationGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):automation-group/(?<resourceId>[^:/?]+)$",
);
const AutomationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):automation-group/(?<automationGroupId>[^:/?]+)/automation/(?<automationId>[^:/?]+)/job/(?<resourceId>[^:/?]+)$",
);
const BrandArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):brand/(?<resourceId>[^:/?]+)$",
);
const CustomizationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):customization/(?<resourceId>[^:/?]+)$",
);
const CustompermissionsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):custompermissions/(?<resourceId>[^:/?]+)$",
);
const DashboardArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):dashboard/(?<resourceId>[^:/?]+)$",
);
const DashboardSnapshotJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):dashboard/(?<dashboardId>[^:/?]+)/snapshot-job/(?<resourceId>[^:/?]+)$",
);
const DatasetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):dataset/(?<resourceId>[^:/?]+)$",
);
const DatasourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):datasource/(?<resourceId>[^:/?]+)$",
);
const DlpSettingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):dlpsetting/(?<resourceId>[^:/?]+)$",
);
const EmailCustomizationTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):email-customization-template/(?<resourceId>[^:/?]+)$",
);
const ExtensionaccessArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):extension-access/(?<resourceId>[^:/?]+)$",
);
const FlowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):flow/(?<resourceId>[^:/?]+)$",
);
const FolderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):folder/(?<resourceId>[^:/?]+)$",
);
const GroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):group/(?<resourceId>[^:/?]+)$",
);
const IngestionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):dataset/(?<datasetId>[^:/?]+)/ingestion/(?<resourceId>[^:/?]+)$",
);
const KnowledgeBaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):knowledge-base/(?<resourceId>[^:/?]+)$",
);
const LimitsProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):limits-profile/(?<resourceId>[^:/?]+)$",
);
const NamespaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):namespace/(?<resourceId>[^:/?]+)$",
);
const OauthClientApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):oauthClientApplication/(?<resourceId>[^:/?]+)$",
);
const RefreshscheduleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):dataset/(?<datasetId>[^:/?]+)/refresh-schedule/(?<resourceId>[^:/?]+)$",
);
const SpaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):space/(?<resourceId>[^:/?]+)$",
);
const TemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):template/(?<resourceId>[^:/?]+)$",
);
const ThemeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):theme/(?<resourceId>[^:/?]+)$",
);
const TopicArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):topic/(?<resourceId>[^:/?]+)$",
);
const UserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):user/(?<resourceId>[^:/?]+)$",
);
const VpcconnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):quicksight:(?<region>[^:]*):(?<account>[^:]*):vpcConnection/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for quicksight resources.
 */
export class QuickSightResources {
	/**
	 * Builds an ARN for the account resource.
	 */
	static account(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:account/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the account resource.
	 */
	static isValidAccountArn(arn: string): boolean {
		return AccountArnRegex.test(arn);
	}

	/**
	 * Parses a account ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccountArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AccountArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid account ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the actionconnector resource.
	 */
	static actionconnector(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:action-connector/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the actionconnector resource.
	 */
	static isValidActionconnectorArn(arn: string): boolean {
		return ActionconnectorArnRegex.test(arn);
	}

	/**
	 * Parses a actionconnector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseActionconnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ActionconnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid actionconnector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the agent resource.
	 */
	static agent(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:agent/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agent resource.
	 */
	static isValidAgentArn(arn: string): boolean {
		return AgentArnRegex.test(arn);
	}

	/**
	 * Parses a agent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AgentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the analysis resource.
	 */
	static analysis(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:analysis/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the analysis resource.
	 */
	static isValidAnalysisArn(arn: string): boolean {
		return AnalysisArnRegex.test(arn);
	}

	/**
	 * Parses a analysis ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAnalysisArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AnalysisArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid analysis ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the app resource.
	 */
	static app(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:app/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the app resource.
	 */
	static isValidAppArn(arn: string): boolean {
		return AppArnRegex.test(arn);
	}

	/**
	 * Parses a app ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AppArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid app ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the approvalPolicy resource.
	 */
	static approvalPolicy(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:approval-policy/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the approvalPolicy resource.
	 */
	static isValidApprovalPolicyArn(arn: string): boolean {
		return ApprovalPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a approvalPolicy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApprovalPolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ApprovalPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid approvalPolicy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the assetBundleExportJob resource.
	 */
	static assetBundleExportJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:asset-bundle-export-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the assetBundleExportJob resource.
	 */
	static isValidAssetBundleExportJobArn(arn: string): boolean {
		return AssetBundleExportJobArnRegex.test(arn);
	}

	/**
	 * Parses a assetBundleExportJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssetBundleExportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AssetBundleExportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid assetBundleExportJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the assetBundleImportJob resource.
	 */
	static assetBundleImportJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:asset-bundle-import-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the assetBundleImportJob resource.
	 */
	static isValidAssetBundleImportJobArn(arn: string): boolean {
		return AssetBundleImportJobArnRegex.test(arn);
	}

	/**
	 * Parses a assetBundleImportJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssetBundleImportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AssetBundleImportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid assetBundleImportJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the assignment resource.
	 */
	static assignment(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight::${props.account ?? "*"}:assignment/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the assignment resource.
	 */
	static isValidAssignmentArn(arn: string): boolean {
		return AssignmentArnRegex.test(arn);
	}

	/**
	 * Parses a assignment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssignmentArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = AssignmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid assignment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the automation resource.
	 */
	static automation(props: {
		/** The AutomationGroupId component of the ARN. */
		readonly automationGroupId: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:automation-group/${props.automationGroupId}/automation/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the automation resource.
	 */
	static isValidAutomationArn(arn: string): boolean {
		return AutomationArnRegex.test(arn);
	}

	/**
	 * Parses a automation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		automationGroupId: string;
		resourceId: string;
	} {
		const match = AutomationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid automation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			automationGroupId: match.groups!.automationGroupId,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the automationGroup resource.
	 */
	static automationGroup(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:automation-group/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the automationGroup resource.
	 */
	static isValidAutomationGroupArn(arn: string): boolean {
		return AutomationGroupArnRegex.test(arn);
	}

	/**
	 * Parses a automationGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomationGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AutomationGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid automationGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the automationJob resource.
	 */
	static automationJob(props: {
		/** The AutomationGroupId component of the ARN. */
		readonly automationGroupId: string;
		/** The AutomationId component of the ARN. */
		readonly automationId: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:automation-group/${props.automationGroupId}/automation/${props.automationId}/job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the automationJob resource.
	 */
	static isValidAutomationJobArn(arn: string): boolean {
		return AutomationJobArnRegex.test(arn);
	}

	/**
	 * Parses a automationJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		automationGroupId: string;
		automationId: string;
		resourceId: string;
	} {
		const match = AutomationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid automationJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			automationGroupId: match.groups!.automationGroupId,
			automationId: match.groups!.automationId,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the brand resource.
	 */
	static brand(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:brand/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the brand resource.
	 */
	static isValidBrandArn(arn: string): boolean {
		return BrandArnRegex.test(arn);
	}

	/**
	 * Parses a brand ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBrandArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = BrandArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid brand ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the customization resource.
	 */
	static customization(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:customization/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the customization resource.
	 */
	static isValidCustomizationArn(arn: string): boolean {
		return CustomizationArnRegex.test(arn);
	}

	/**
	 * Parses a customization ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomizationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = CustomizationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid customization ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the custompermissions resource.
	 */
	static custompermissions(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:custompermissions/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the custompermissions resource.
	 */
	static isValidCustompermissionsArn(arn: string): boolean {
		return CustompermissionsArnRegex.test(arn);
	}

	/**
	 * Parses a custompermissions ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustompermissionsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = CustompermissionsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid custompermissions ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the dashboard resource.
	 */
	static dashboard(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:dashboard/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dashboard resource.
	 */
	static isValidDashboardArn(arn: string): boolean {
		return DashboardArnRegex.test(arn);
	}

	/**
	 * Parses a dashboard ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDashboardArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DashboardArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dashboard ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the dashboardSnapshotJob resource.
	 */
	static dashboardSnapshotJob(props: {
		/** The DashboardId component of the ARN. */
		readonly dashboardId: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:dashboard/${props.dashboardId}/snapshot-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dashboardSnapshotJob resource.
	 */
	static isValidDashboardSnapshotJobArn(arn: string): boolean {
		return DashboardSnapshotJobArnRegex.test(arn);
	}

	/**
	 * Parses a dashboardSnapshotJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDashboardSnapshotJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dashboardId: string;
		resourceId: string;
	} {
		const match = DashboardSnapshotJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dashboardSnapshotJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dashboardId: match.groups!.dashboardId,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataset resource.
	 */
	static isValidDatasetArn(arn: string): boolean {
		return DatasetArnRegex.test(arn);
	}

	/**
	 * Parses a dataset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the datasource resource.
	 */
	static datasource(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:datasource/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the datasource resource.
	 */
	static isValidDatasourceArn(arn: string): boolean {
		return DatasourceArnRegex.test(arn);
	}

	/**
	 * Parses a datasource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DatasourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datasource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the dlpSetting resource.
	 */
	static dlpSetting(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:dlpsetting/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dlpSetting resource.
	 */
	static isValidDlpSettingArn(arn: string): boolean {
		return DlpSettingArnRegex.test(arn);
	}

	/**
	 * Parses a dlpSetting ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDlpSettingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DlpSettingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dlpSetting ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the emailCustomizationTemplate resource.
	 */
	static emailCustomizationTemplate(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:email-customization-template/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the emailCustomizationTemplate resource.
	 */
	static isValidEmailCustomizationTemplateArn(arn: string): boolean {
		return EmailCustomizationTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a emailCustomizationTemplate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEmailCustomizationTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = EmailCustomizationTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid emailCustomizationTemplate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the extensionaccess resource.
	 */
	static extensionaccess(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:extension-access/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the extensionaccess resource.
	 */
	static isValidExtensionaccessArn(arn: string): boolean {
		return ExtensionaccessArnRegex.test(arn);
	}

	/**
	 * Parses a extensionaccess ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExtensionaccessArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ExtensionaccessArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid extensionaccess ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the flow resource.
	 */
	static flow(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:flow/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the flow resource.
	 */
	static isValidFlowArn(arn: string): boolean {
		return FlowArnRegex.test(arn);
	}

	/**
	 * Parses a flow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFlowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = FlowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid flow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the folder resource.
	 */
	static folder(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:folder/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the folder resource.
	 */
	static isValidFolderArn(arn: string): boolean {
		return FolderArnRegex.test(arn);
	}

	/**
	 * Parses a folder ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFolderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = FolderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid folder ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the group resource.
	 */
	static group(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:group/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the group resource.
	 */
	static isValidGroupArn(arn: string): boolean {
		return GroupArnRegex.test(arn);
	}

	/**
	 * Parses a group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = GroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the ingestion resource.
	 */
	static ingestion(props: {
		/** The DatasetId component of the ARN. */
		readonly datasetId: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.datasetId}/ingestion/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ingestion resource.
	 */
	static isValidIngestionArn(arn: string): boolean {
		return IngestionArnRegex.test(arn);
	}

	/**
	 * Parses a ingestion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIngestionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		datasetId: string;
		resourceId: string;
	} {
		const match = IngestionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ingestion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			datasetId: match.groups!.datasetId,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the knowledgeBase resource.
	 */
	static knowledgeBase(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:knowledge-base/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the knowledgeBase resource.
	 */
	static isValidKnowledgeBaseArn(arn: string): boolean {
		return KnowledgeBaseArnRegex.test(arn);
	}

	/**
	 * Parses a knowledgeBase ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKnowledgeBaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = KnowledgeBaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid knowledgeBase ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the limitsProfile resource.
	 */
	static limitsProfile(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:limits-profile/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the limitsProfile resource.
	 */
	static isValidLimitsProfileArn(arn: string): boolean {
		return LimitsProfileArnRegex.test(arn);
	}

	/**
	 * Parses a limitsProfile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLimitsProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = LimitsProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid limitsProfile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the namespace resource.
	 */
	static namespace(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:namespace/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the namespace resource.
	 */
	static isValidNamespaceArn(arn: string): boolean {
		return NamespaceArnRegex.test(arn);
	}

	/**
	 * Parses a namespace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNamespaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = NamespaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid namespace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the oauthClientApplication resource.
	 */
	static oauthClientApplication(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:oauthClientApplication/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the oauthClientApplication resource.
	 */
	static isValidOauthClientApplicationArn(arn: string): boolean {
		return OauthClientApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a oauthClientApplication ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOauthClientApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = OauthClientApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid oauthClientApplication ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the refreshschedule resource.
	 */
	static refreshschedule(props: {
		/** The DatasetId component of the ARN. */
		readonly datasetId: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.datasetId}/refresh-schedule/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the refreshschedule resource.
	 */
	static isValidRefreshscheduleArn(arn: string): boolean {
		return RefreshscheduleArnRegex.test(arn);
	}

	/**
	 * Parses a refreshschedule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRefreshscheduleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		datasetId: string;
		resourceId: string;
	} {
		const match = RefreshscheduleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid refreshschedule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			datasetId: match.groups!.datasetId,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the space resource.
	 */
	static space(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:space/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the space resource.
	 */
	static isValidSpaceArn(arn: string): boolean {
		return SpaceArnRegex.test(arn);
	}

	/**
	 * Parses a space ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSpaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = SpaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid space ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the template resource.
	 */
	static template(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:template/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the template resource.
	 */
	static isValidTemplateArn(arn: string): boolean {
		return TemplateArnRegex.test(arn);
	}

	/**
	 * Parses a template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = TemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the theme resource.
	 */
	static theme(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:theme/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the theme resource.
	 */
	static isValidThemeArn(arn: string): boolean {
		return ThemeArnRegex.test(arn);
	}

	/**
	 * Parses a theme ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseThemeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ThemeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid theme ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the topic resource.
	 */
	static topic(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:topic/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the topic resource.
	 */
	static isValidTopicArn(arn: string): boolean {
		return TopicArnRegex.test(arn);
	}

	/**
	 * Parses a topic ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTopicArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = TopicArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid topic ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the user resource.
	 */
	static user(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:user/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the user resource.
	 */
	static isValidUserArn(arn: string): boolean {
		return UserArnRegex.test(arn);
	}

	/**
	 * Parses a user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = UserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the vpcconnection resource.
	 */
	static vpcconnection(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:quicksight:${props.region ?? "*"}:${props.account ?? "*"}:vpcConnection/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vpcconnection resource.
	 */
	static isValidVpcconnectionArn(arn: string): boolean {
		return VpcconnectionArnRegex.test(arn);
	}

	/**
	 * Parses a vpcconnection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVpcconnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = VpcconnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vpcconnection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for quicksight.
 */
export class QuickSightOperations {
	/** IAM actions required for the BatchCreateTopicReviewedAnswer API call. */
	static readonly BATCH_CREATE_TOPIC_REVIEWED_ANSWER: string[] = [
		"quicksight:BatchCreateTopicReviewedAnswer",
	];
	/** IAM actions required for the BatchDeleteKnowledgeBase API call. */
	static readonly BATCH_DELETE_KNOWLEDGE_BASE: string[] = [
		"quicksight:BatchDeleteKnowledgeBase",
		"quicksight:DeleteKnowledgeBase",
	];
	/** IAM actions required for the BatchDeleteTopicReviewedAnswer API call. */
	static readonly BATCH_DELETE_TOPIC_REVIEWED_ANSWER: string[] = [
		"quicksight:BatchDeleteTopicReviewedAnswer",
	];
	/** IAM actions required for the BatchDescribeUserLimits API call. */
	static readonly BATCH_DESCRIBE_USER_LIMITS: string[] = [
		"quicksight:BatchDescribeUserLimits",
	];
	/** IAM actions required for the CancelIngestion API call. */
	static readonly CANCEL_INGESTION: string[] = ["quicksight:CancelIngestion"];
	/** IAM actions required for the CreateAccountCustomization API call. */
	static readonly CREATE_ACCOUNT_CUSTOMIZATION: string[] = [
		"quicksight:CreateAccountCustomization",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateAccountSubscription API call. */
	static readonly CREATE_ACCOUNT_SUBSCRIPTION: string[] = [
		"quicksight:CreateAccountSubscription",
		"quicksight:Subscribe",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateActionConnector API call. */
	static readonly CREATE_ACTION_CONNECTOR: string[] = [
		"quicksight:CreateActionConnector",
		"iam:PassRole",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateAgent API call. */
	static readonly CREATE_AGENT: string[] = [
		"quicksight:CreateAgent",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateAnalysis API call. */
	static readonly CREATE_ANALYSIS: string[] = [
		"quicksight:CreateAnalysis",
		"quicksight:CreateFolderMembership",
		"quicksight:DescribeTemplate",
		"quicksight:DescribeTheme",
		"quicksight:PassDataSet",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateApprovalPolicy API call. */
	static readonly CREATE_APPROVAL_POLICY: string[] = [
		"quicksight:CreateApprovalPolicy",
	];
	/** IAM actions required for the CreateBrand API call. */
	static readonly CREATE_BRAND: string[] = [
		"quicksight:CreateBrand",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateCustomPermissions API call. */
	static readonly CREATE_CUSTOM_PERMISSIONS: string[] = [
		"quicksight:CreateCustomPermissions",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateDashboard API call. */
	static readonly CREATE_DASHBOARD: string[] = [
		"quicksight:CreateDashboard",
		"quicksight:CreateFolderMembership",
		"quicksight:DescribeTemplate",
		"quicksight:DescribeTheme",
		"quicksight:PassDataSet",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateDataSet API call. */
	static readonly CREATE_DATA_SET: string[] = [
		"quicksight:CreateDataSet",
		"quicksight:CreateFolderMembership",
		"quicksight:PassDataSet",
		"quicksight:PassDataSource",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateDataSource API call. */
	static readonly CREATE_DATA_SOURCE: string[] = [
		"quicksight:CreateDataSource",
		"quicksight:CreateFolderMembership",
		"iam:PassRole",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateDlpSetting API call. */
	static readonly CREATE_DLP_SETTING: string[] = [
		"quicksight:CreateDlpSetting",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateFlow API call. */
	static readonly CREATE_FLOW: string[] = [
		"quicksight:CreateFlow",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateFolder API call. */
	static readonly CREATE_FOLDER: string[] = [
		"quicksight:CreateFolder",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateFolderMembership API call. */
	static readonly CREATE_FOLDER_MEMBERSHIP: string[] = [
		"quicksight:CreateFolderMembership",
		"quicksight:UpdateAnalysisPermissions",
		"quicksight:UpdateDashboardPermissions",
		"quicksight:UpdateDataSetPermissions",
		"quicksight:UpdateDataSourcePermissions",
		"quicksight:UpdateTopicPermissions",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CREATE_GROUP: string[] = ["quicksight:CreateGroup"];
	/** IAM actions required for the CreateGroupMembership API call. */
	static readonly CREATE_GROUP_MEMBERSHIP: string[] = [
		"quicksight:CreateGroupMembership",
	];
	/** IAM actions required for the CreateIAMPolicyAssignment API call. */
	static readonly CREATE_IAM_POLICY_ASSIGNMENT: string[] = [
		"quicksight:CreateIAMPolicyAssignment",
	];
	/** IAM actions required for the CreateIngestion API call. */
	static readonly CREATE_INGESTION: string[] = ["quicksight:CreateIngestion"];
	/** IAM actions required for the CreateKnowledgeBase API call. */
	static readonly CREATE_KNOWLEDGE_BASE: string[] = [
		"quicksight:CreateKnowledgeBase",
		"quicksight:PassDataSource",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateLimitsProfile API call. */
	static readonly CREATE_LIMITS_PROFILE: string[] = [
		"quicksight:CreateLimitsProfile",
	];
	/** IAM actions required for the CreateNamespace API call. */
	static readonly CREATE_NAMESPACE: string[] = [
		"quicksight:CreateNamespace",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateOAuthClientApplication API call. */
	static readonly CREATE_O_AUTH_CLIENT_APPLICATION: string[] = [
		"quicksight:CreateDataSource",
		"quicksight:CreateOAuthClientApplication",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateRefreshSchedule API call. */
	static readonly CREATE_REFRESH_SCHEDULE: string[] = [
		"quicksight:CreateRefreshSchedule",
	];
	/** IAM actions required for the CreateRoleMembership API call. */
	static readonly CREATE_ROLE_MEMBERSHIP: string[] = [
		"quicksight:CreateRoleMembership",
		"quicksight:SetGroupMapping",
	];
	/** IAM actions required for the CreateSpace API call. */
	static readonly CREATE_SPACE: string[] = ["quicksight:CreateSpace"];
	/** IAM actions required for the CreateTemplate API call. */
	static readonly CREATE_TEMPLATE: string[] = [
		"quicksight:CreateTemplate",
		"quicksight:DescribeAnalysis",
		"quicksight:DescribeTemplate",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateTemplateAlias API call. */
	static readonly CREATE_TEMPLATE_ALIAS: string[] = [
		"quicksight:CreateTemplateAlias",
	];
	/** IAM actions required for the CreateTheme API call. */
	static readonly CREATE_THEME: string[] = [
		"quicksight:CreateTheme",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateThemeAlias API call. */
	static readonly CREATE_THEME_ALIAS: string[] = [
		"quicksight:CreateThemeAlias",
	];
	/** IAM actions required for the CreateTopic API call. */
	static readonly CREATE_TOPIC: string[] = [
		"quicksight:CreateFolderMembership",
		"quicksight:CreateTopic",
		"quicksight:PassDataSet",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateTopicRefreshSchedule API call. */
	static readonly CREATE_TOPIC_REFRESH_SCHEDULE: string[] = [
		"quicksight:CreateTopicRefreshSchedule",
	];
	/** IAM actions required for the CreateTopicV2 API call. */
	static readonly CREATE_TOPIC_V2: string[] = [
		"quicksight:CreateFolderMembership",
		"quicksight:CreateTopic",
		"quicksight:PassDataSet",
		"quicksight:TagResource",
	];
	/** IAM actions required for the CreateVPCConnection API call. */
	static readonly CREATE_VPC_CONNECTION: string[] = [
		"quicksight:CreateVPCConnection",
		"iam:PassRole",
		"quicksight:TagResource",
	];
	/** IAM actions required for the DeleteAccountCustomPermission API call. */
	static readonly DELETE_ACCOUNT_CUSTOM_PERMISSION: string[] = [
		"quicksight:DeleteAccountCustomPermission",
	];
	/** IAM actions required for the DeleteAccountCustomization API call. */
	static readonly DELETE_ACCOUNT_CUSTOMIZATION: string[] = [
		"quicksight:DeleteAccountCustomization",
	];
	/** IAM actions required for the DeleteAccountSubscription API call. */
	static readonly DELETE_ACCOUNT_SUBSCRIPTION: string[] = [
		"quicksight:DeleteAccountSubscription",
		"quicksight:Unsubscribe",
	];
	/** IAM actions required for the DeleteActionConnector API call. */
	static readonly DELETE_ACTION_CONNECTOR: string[] = [
		"quicksight:DeleteActionConnector",
	];
	/** IAM actions required for the DeleteAgent API call. */
	static readonly DELETE_AGENT: string[] = ["quicksight:DeleteAgent"];
	/** IAM actions required for the DeleteAnalysis API call. */
	static readonly DELETE_ANALYSIS: string[] = ["quicksight:DeleteAnalysis"];
	/** IAM actions required for the DeleteApprovalPolicy API call. */
	static readonly DELETE_APPROVAL_POLICY: string[] = [
		"quicksight:DeleteApprovalPolicy",
	];
	/** IAM actions required for the DeleteBrand API call. */
	static readonly DELETE_BRAND: string[] = ["quicksight:DeleteBrand"];
	/** IAM actions required for the DeleteBrandAssignment API call. */
	static readonly DELETE_BRAND_ASSIGNMENT: string[] = [
		"quicksight:DeleteBrandAssignment",
	];
	/** IAM actions required for the DeleteCustomPermissions API call. */
	static readonly DELETE_CUSTOM_PERMISSIONS: string[] = [
		"quicksight:DeleteCustomPermissions",
	];
	/** IAM actions required for the DeleteDashboard API call. */
	static readonly DELETE_DASHBOARD: string[] = ["quicksight:DeleteDashboard"];
	/** IAM actions required for the DeleteDataSet API call. */
	static readonly DELETE_DATA_SET: string[] = ["quicksight:DeleteDataSet"];
	/** IAM actions required for the DeleteDataSetRefreshProperties API call. */
	static readonly DELETE_DATA_SET_REFRESH_PROPERTIES: string[] = [
		"quicksight:DeleteDataSetRefreshProperties",
	];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DELETE_DATA_SOURCE: string[] = [
		"quicksight:DeleteDataSource",
	];
	/** IAM actions required for the DeleteDefaultQBusinessApplication API call. */
	static readonly DELETE_DEFAULT_Q_BUSINESS_APPLICATION: string[] = [
		"quicksight:DeleteDefaultQBusinessApplication",
	];
	/** IAM actions required for the DeleteDlpSetting API call. */
	static readonly DELETE_DLP_SETTING: string[] = [
		"quicksight:DeleteDlpSetting",
	];
	/** IAM actions required for the DeleteFlow API call. */
	static readonly DELETE_FLOW: string[] = ["quicksight:DeleteFlow"];
	/** IAM actions required for the DeleteFolder API call. */
	static readonly DELETE_FOLDER: string[] = ["quicksight:DeleteFolder"];
	/** IAM actions required for the DeleteFolderMembership API call. */
	static readonly DELETE_FOLDER_MEMBERSHIP: string[] = [
		"quicksight:DeleteFolderMembership",
		"quicksight:UpdateAnalysisPermissions",
		"quicksight:UpdateDashboardPermissions",
		"quicksight:UpdateDataSetPermissions",
		"quicksight:UpdateDataSourcePermissions",
		"quicksight:UpdateTopicPermissions",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DELETE_GROUP: string[] = ["quicksight:DeleteGroup"];
	/** IAM actions required for the DeleteGroupMembership API call. */
	static readonly DELETE_GROUP_MEMBERSHIP: string[] = [
		"quicksight:DeleteGroupMembership",
	];
	/** IAM actions required for the DeleteIAMPolicyAssignment API call. */
	static readonly DELETE_IAM_POLICY_ASSIGNMENT: string[] = [
		"quicksight:DeleteIAMPolicyAssignment",
	];
	/** IAM actions required for the DeleteIdentityPropagationConfig API call. */
	static readonly DELETE_IDENTITY_PROPAGATION_CONFIG: string[] = [
		"quicksight:DeleteIdentityPropagationConfig",
	];
	/** IAM actions required for the DeleteKnowledgeBase API call. */
	static readonly DELETE_KNOWLEDGE_BASE: string[] = [
		"quicksight:DeleteKnowledgeBase",
	];
	/** IAM actions required for the DeleteLimitsProfile API call. */
	static readonly DELETE_LIMITS_PROFILE: string[] = [
		"quicksight:DeleteLimitsProfile",
	];
	/** IAM actions required for the DeleteNamespace API call. */
	static readonly DELETE_NAMESPACE: string[] = ["quicksight:DeleteNamespace"];
	/** IAM actions required for the DeleteOAuthClientApplication API call. */
	static readonly DELETE_O_AUTH_CLIENT_APPLICATION: string[] = [
		"quicksight:DeleteDataSource",
		"quicksight:DeleteOAuthClientApplication",
	];
	/** IAM actions required for the DeleteRefreshSchedule API call. */
	static readonly DELETE_REFRESH_SCHEDULE: string[] = [
		"quicksight:DeleteRefreshSchedule",
	];
	/** IAM actions required for the DeleteRoleCustomPermission API call. */
	static readonly DELETE_ROLE_CUSTOM_PERMISSION: string[] = [
		"quicksight:DeleteRoleCustomPermission",
	];
	/** IAM actions required for the DeleteRoleMembership API call. */
	static readonly DELETE_ROLE_MEMBERSHIP: string[] = [
		"quicksight:DeleteRoleMembership",
		"quicksight:SetGroupMapping",
	];
	/** IAM actions required for the DeleteSpace API call. */
	static readonly DELETE_SPACE: string[] = ["quicksight:DeleteSpace"];
	/** IAM actions required for the DeleteTemplate API call. */
	static readonly DELETE_TEMPLATE: string[] = ["quicksight:DeleteTemplate"];
	/** IAM actions required for the DeleteTemplateAlias API call. */
	static readonly DELETE_TEMPLATE_ALIAS: string[] = [
		"quicksight:DeleteTemplateAlias",
	];
	/** IAM actions required for the DeleteTheme API call. */
	static readonly DELETE_THEME: string[] = ["quicksight:DeleteTheme"];
	/** IAM actions required for the DeleteThemeAlias API call. */
	static readonly DELETE_THEME_ALIAS: string[] = [
		"quicksight:DeleteThemeAlias",
	];
	/** IAM actions required for the DeleteTopic API call. */
	static readonly DELETE_TOPIC: string[] = ["quicksight:DeleteTopic"];
	/** IAM actions required for the DeleteTopicRefreshSchedule API call. */
	static readonly DELETE_TOPIC_REFRESH_SCHEDULE: string[] = [
		"quicksight:DeleteTopicRefreshSchedule",
	];
	/** IAM actions required for the DeleteTopicV2 API call. */
	static readonly DELETE_TOPIC_V2: string[] = ["quicksight:DeleteTopic"];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["quicksight:DeleteUser"];
	/** IAM actions required for the DeleteUserByPrincipalId API call. */
	static readonly DELETE_USER_BY_PRINCIPAL_ID: string[] = [
		"quicksight:DeleteUserByPrincipalId",
	];
	/** IAM actions required for the DeleteUserCustomPermission API call. */
	static readonly DELETE_USER_CUSTOM_PERMISSION: string[] = [
		"quicksight:DeleteUserCustomPermission",
		"quicksight:UpdateUser",
	];
	/** IAM actions required for the DeleteVPCConnection API call. */
	static readonly DELETE_VPC_CONNECTION: string[] = [
		"quicksight:DeleteVPCConnection",
		"iam:PassRole",
	];
	/** IAM actions required for the DescribeAccountCustomPermission API call. */
	static readonly DESCRIBE_ACCOUNT_CUSTOM_PERMISSION: string[] = [
		"quicksight:DescribeAccountCustomPermission",
	];
	/** IAM actions required for the DescribeAccountCustomization API call. */
	static readonly DESCRIBE_ACCOUNT_CUSTOMIZATION: string[] = [
		"quicksight:DescribeAccountCustomization",
	];
	/** IAM actions required for the DescribeAccountSettings API call. */
	static readonly DESCRIBE_ACCOUNT_SETTINGS: string[] = [
		"quicksight:DescribeAccountSettings",
	];
	/** IAM actions required for the DescribeAccountSubscription API call. */
	static readonly DESCRIBE_ACCOUNT_SUBSCRIPTION: string[] = [
		"quicksight:DescribeAccountSubscription",
	];
	/** IAM actions required for the DescribeActionConnector API call. */
	static readonly DESCRIBE_ACTION_CONNECTOR: string[] = [
		"quicksight:DescribeActionConnector",
	];
	/** IAM actions required for the DescribeActionConnectorPermissions API call. */
	static readonly DESCRIBE_ACTION_CONNECTOR_PERMISSIONS: string[] = [
		"quicksight:DescribeActionConnectorPermissions",
	];
	/** IAM actions required for the DescribeAgent API call. */
	static readonly DESCRIBE_AGENT: string[] = ["quicksight:DescribeAgent"];
	/** IAM actions required for the DescribeAgentPermissions API call. */
	static readonly DESCRIBE_AGENT_PERMISSIONS: string[] = [
		"quicksight:DescribeAgentPermissions",
	];
	/** IAM actions required for the DescribeAnalysis API call. */
	static readonly DESCRIBE_ANALYSIS: string[] = ["quicksight:DescribeAnalysis"];
	/** IAM actions required for the DescribeAnalysisDefinition API call. */
	static readonly DESCRIBE_ANALYSIS_DEFINITION: string[] = [
		"quicksight:DescribeAnalysis",
	];
	/** IAM actions required for the DescribeAnalysisPermissions API call. */
	static readonly DESCRIBE_ANALYSIS_PERMISSIONS: string[] = [
		"quicksight:DescribeAnalysisPermissions",
	];
	/** IAM actions required for the DescribeApprovalPolicy API call. */
	static readonly DESCRIBE_APPROVAL_POLICY: string[] = [
		"quicksight:DescribeApprovalPolicy",
	];
	/** IAM actions required for the DescribeAssetBundleExportJob API call. */
	static readonly DESCRIBE_ASSET_BUNDLE_EXPORT_JOB: string[] = [
		"quicksight:DescribeAssetBundleExportJob",
	];
	/** IAM actions required for the DescribeAssetBundleImportJob API call. */
	static readonly DESCRIBE_ASSET_BUNDLE_IMPORT_JOB: string[] = [
		"quicksight:DescribeAssetBundleImportJob",
	];
	/** IAM actions required for the DescribeAutomationJob API call. */
	static readonly DESCRIBE_AUTOMATION_JOB: string[] = [
		"quicksight:DescribeAutomationJob",
	];
	/** IAM actions required for the DescribeBrand API call. */
	static readonly DESCRIBE_BRAND: string[] = ["quicksight:DescribeBrand"];
	/** IAM actions required for the DescribeBrandAssignment API call. */
	static readonly DESCRIBE_BRAND_ASSIGNMENT: string[] = [
		"quicksight:DescribeBrandAssignment",
	];
	/** IAM actions required for the DescribeBrandPublishedVersion API call. */
	static readonly DESCRIBE_BRAND_PUBLISHED_VERSION: string[] = [
		"quicksight:DescribeBrandPublishedVersion",
	];
	/** IAM actions required for the DescribeCustomPermissions API call. */
	static readonly DESCRIBE_CUSTOM_PERMISSIONS: string[] = [
		"quicksight:DescribeCustomPermissions",
	];
	/** IAM actions required for the DescribeDashboard API call. */
	static readonly DESCRIBE_DASHBOARD: string[] = [
		"quicksight:DescribeDashboard",
	];
	/** IAM actions required for the DescribeDashboardDefinition API call. */
	static readonly DESCRIBE_DASHBOARD_DEFINITION: string[] = [
		"quicksight:DescribeDashboard",
	];
	/** IAM actions required for the DescribeDashboardPermissions API call. */
	static readonly DESCRIBE_DASHBOARD_PERMISSIONS: string[] = [
		"quicksight:DescribeDashboardPermissions",
	];
	/** IAM actions required for the DescribeDashboardSnapshotJob API call. */
	static readonly DESCRIBE_DASHBOARD_SNAPSHOT_JOB: string[] = [
		"quicksight:DescribeDashboardSnapshotJob",
	];
	/** IAM actions required for the DescribeDashboardSnapshotJobResult API call. */
	static readonly DESCRIBE_DASHBOARD_SNAPSHOT_JOB_RESULT: string[] = [
		"quicksight:DescribeDashboardSnapshotJobResult",
	];
	/** IAM actions required for the DescribeDashboardsQAConfiguration API call. */
	static readonly DESCRIBE_DASHBOARDS_QA_CONFIGURATION: string[] = [
		"quicksight:DescribeDashboardsQAConfiguration",
	];
	/** IAM actions required for the DescribeDataSet API call. */
	static readonly DESCRIBE_DATA_SET: string[] = ["quicksight:DescribeDataSet"];
	/** IAM actions required for the DescribeDataSetPermissions API call. */
	static readonly DESCRIBE_DATA_SET_PERMISSIONS: string[] = [
		"quicksight:DescribeDataSetPermissions",
	];
	/** IAM actions required for the DescribeDataSetRefreshProperties API call. */
	static readonly DESCRIBE_DATA_SET_REFRESH_PROPERTIES: string[] = [
		"quicksight:DescribeDataSetRefreshProperties",
	];
	/** IAM actions required for the DescribeDataSource API call. */
	static readonly DESCRIBE_DATA_SOURCE: string[] = [
		"quicksight:DescribeDataSource",
	];
	/** IAM actions required for the DescribeDataSourcePermissions API call. */
	static readonly DESCRIBE_DATA_SOURCE_PERMISSIONS: string[] = [
		"quicksight:DescribeDataSourcePermissions",
	];
	/** IAM actions required for the DescribeDefaultQBusinessApplication API call. */
	static readonly DESCRIBE_DEFAULT_Q_BUSINESS_APPLICATION: string[] = [
		"quicksight:DescribeDefaultQBusinessApplication",
	];
	/** IAM actions required for the DescribeDlpSetting API call. */
	static readonly DESCRIBE_DLP_SETTING: string[] = [
		"quicksight:DescribeDlpSetting",
	];
	/** IAM actions required for the DescribeFlow API call. */
	static readonly DESCRIBE_FLOW: string[] = ["quicksight:DescribeFlow"];
	/** IAM actions required for the DescribeFolder API call. */
	static readonly DESCRIBE_FOLDER: string[] = ["quicksight:DescribeFolder"];
	/** IAM actions required for the DescribeFolderPermissions API call. */
	static readonly DESCRIBE_FOLDER_PERMISSIONS: string[] = [
		"quicksight:DescribeFolderPermissions",
	];
	/** IAM actions required for the DescribeFolderResolvedPermissions API call. */
	static readonly DESCRIBE_FOLDER_RESOLVED_PERMISSIONS: string[] = [
		"quicksight:DescribeFolderResolvedPermissions",
	];
	/** IAM actions required for the DescribeGroup API call. */
	static readonly DESCRIBE_GROUP: string[] = ["quicksight:DescribeGroup"];
	/** IAM actions required for the DescribeGroupMembership API call. */
	static readonly DESCRIBE_GROUP_MEMBERSHIP: string[] = [
		"quicksight:DescribeGroupMembership",
	];
	/** IAM actions required for the DescribeIAMPolicyAssignment API call. */
	static readonly DESCRIBE_IAM_POLICY_ASSIGNMENT: string[] = [
		"quicksight:DescribeIAMPolicyAssignment",
	];
	/** IAM actions required for the DescribeIngestion API call. */
	static readonly DESCRIBE_INGESTION: string[] = [
		"quicksight:DescribeIngestion",
	];
	/** IAM actions required for the DescribeIpRestriction API call. */
	static readonly DESCRIBE_IP_RESTRICTION: string[] = [
		"quicksight:DescribeIpRestriction",
	];
	/** IAM actions required for the DescribeKeyRegistration API call. */
	static readonly DESCRIBE_KEY_REGISTRATION: string[] = [
		"quicksight:DescribeKeyRegistration",
		"quicksight:ListCustomerManagedKeys",
	];
	/** IAM actions required for the DescribeKnowledgeBase API call. */
	static readonly DESCRIBE_KNOWLEDGE_BASE: string[] = [
		"quicksight:DescribeKnowledgeBase",
	];
	/** IAM actions required for the DescribeKnowledgeBasePermissions API call. */
	static readonly DESCRIBE_KNOWLEDGE_BASE_PERMISSIONS: string[] = [
		"quicksight:DescribeKnowledgeBasePermissions",
	];
	/** IAM actions required for the DescribeLimitsProfile API call. */
	static readonly DESCRIBE_LIMITS_PROFILE: string[] = [
		"quicksight:DescribeLimitsProfile",
	];
	/** IAM actions required for the DescribeNamespace API call. */
	static readonly DESCRIBE_NAMESPACE: string[] = [
		"quicksight:DescribeNamespace",
	];
	/** IAM actions required for the DescribeOAuthClientApplication API call. */
	static readonly DESCRIBE_O_AUTH_CLIENT_APPLICATION: string[] = [
		"quicksight:DescribeDataSource",
		"quicksight:DescribeOAuthClientApplication",
	];
	/** IAM actions required for the DescribeQPersonalizationConfiguration API call. */
	static readonly DESCRIBE_Q_PERSONALIZATION_CONFIGURATION: string[] = [
		"quicksight:DescribeQPersonalizationConfiguration",
	];
	/** IAM actions required for the DescribeQuickSightQSearchConfiguration API call. */
	static readonly DESCRIBE_QUICK_SIGHT_Q_SEARCH_CONFIGURATION: string[] = [
		"quicksight:DescribeQuickSightQSearchConfiguration",
	];
	/** IAM actions required for the DescribeRefreshSchedule API call. */
	static readonly DESCRIBE_REFRESH_SCHEDULE: string[] = [
		"quicksight:DescribeRefreshSchedule",
	];
	/** IAM actions required for the DescribeRoleCustomPermission API call. */
	static readonly DESCRIBE_ROLE_CUSTOM_PERMISSION: string[] = [
		"quicksight:DescribeRoleCustomPermission",
	];
	/** IAM actions required for the DescribeSelfUpgradeConfiguration API call. */
	static readonly DESCRIBE_SELF_UPGRADE_CONFIGURATION: string[] = [
		"quicksight:DescribeSelfUpgradeConfiguration",
	];
	/** IAM actions required for the DescribeSpace API call. */
	static readonly DESCRIBE_SPACE: string[] = ["quicksight:DescribeSpace"];
	/** IAM actions required for the DescribeSpacePermissions API call. */
	static readonly DESCRIBE_SPACE_PERMISSIONS: string[] = [
		"quicksight:DescribeSpacePermissions",
	];
	/** IAM actions required for the DescribeTemplate API call. */
	static readonly DESCRIBE_TEMPLATE: string[] = ["quicksight:DescribeTemplate"];
	/** IAM actions required for the DescribeTemplateAlias API call. */
	static readonly DESCRIBE_TEMPLATE_ALIAS: string[] = [
		"quicksight:DescribeTemplateAlias",
	];
	/** IAM actions required for the DescribeTemplateDefinition API call. */
	static readonly DESCRIBE_TEMPLATE_DEFINITION: string[] = [
		"quicksight:DescribeTemplate",
	];
	/** IAM actions required for the DescribeTemplatePermissions API call. */
	static readonly DESCRIBE_TEMPLATE_PERMISSIONS: string[] = [
		"quicksight:DescribeTemplatePermissions",
	];
	/** IAM actions required for the DescribeTheme API call. */
	static readonly DESCRIBE_THEME: string[] = ["quicksight:DescribeTheme"];
	/** IAM actions required for the DescribeThemeAlias API call. */
	static readonly DESCRIBE_THEME_ALIAS: string[] = [
		"quicksight:DescribeThemeAlias",
	];
	/** IAM actions required for the DescribeThemePermissions API call. */
	static readonly DESCRIBE_THEME_PERMISSIONS: string[] = [
		"quicksight:DescribeThemePermissions",
	];
	/** IAM actions required for the DescribeTopic API call. */
	static readonly DESCRIBE_TOPIC: string[] = ["quicksight:DescribeTopic"];
	/** IAM actions required for the DescribeTopicPermissions API call. */
	static readonly DESCRIBE_TOPIC_PERMISSIONS: string[] = [
		"quicksight:DescribeTopicPermissions",
	];
	/** IAM actions required for the DescribeTopicPermissionsV2 API call. */
	static readonly DESCRIBE_TOPIC_PERMISSIONS_V2: string[] = [
		"quicksight:DescribeTopicPermissions",
	];
	/** IAM actions required for the DescribeTopicRefresh API call. */
	static readonly DESCRIBE_TOPIC_REFRESH: string[] = [
		"quicksight:DescribeTopicRefresh",
	];
	/** IAM actions required for the DescribeTopicRefreshSchedule API call. */
	static readonly DESCRIBE_TOPIC_REFRESH_SCHEDULE: string[] = [
		"quicksight:DescribeTopicRefreshSchedule",
	];
	/** IAM actions required for the DescribeTopicV2 API call. */
	static readonly DESCRIBE_TOPIC_V2: string[] = ["quicksight:DescribeTopic"];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DESCRIBE_USER: string[] = ["quicksight:DescribeUser"];
	/** IAM actions required for the DescribeVPCConnection API call. */
	static readonly DESCRIBE_VPC_CONNECTION: string[] = [
		"quicksight:DescribeVPCConnection",
	];
	/** IAM actions required for the GenerateEmbedUrlForAnonymousUser API call. */
	static readonly GENERATE_EMBED_URL_FOR_ANONYMOUS_USER: string[] = [
		"quicksight:GenerateEmbedUrlForAnonymousUser",
	];
	/** IAM actions required for the GenerateEmbedUrlForRegisteredUser API call. */
	static readonly GENERATE_EMBED_URL_FOR_REGISTERED_USER: string[] = [
		"quicksight:GenerateEmbedUrlForRegisteredUser",
	];
	/** IAM actions required for the GenerateEmbedUrlForRegisteredUserWithIdentity API call. */
	static readonly GENERATE_EMBED_URL_FOR_REGISTERED_USER_WITH_IDENTITY: string[] =
		["quicksight:GenerateEmbedUrlForRegisteredUserWithIdentity"];
	/** IAM actions required for the GetDashboardEmbedUrl API call. */
	static readonly GET_DASHBOARD_EMBED_URL: string[] = [
		"quicksight:GetAnonymousUserEmbedUrl",
		"quicksight:GetAuthCode",
		"quicksight:GetDashboardEmbedUrl",
	];
	/** IAM actions required for the GetFlowMetadata API call. */
	static readonly GET_FLOW_METADATA: string[] = ["quicksight:GetFlowMetadata"];
	/** IAM actions required for the GetFlowPermissions API call. */
	static readonly GET_FLOW_PERMISSIONS: string[] = [
		"quicksight:GetFlowPermissions",
	];
	/** IAM actions required for the GetIdentityContext API call. */
	static readonly GET_IDENTITY_CONTEXT: string[] = [
		"quicksight:GetIdentityContext",
	];
	/** IAM actions required for the GetSessionEmbedUrl API call. */
	static readonly GET_SESSION_EMBED_URL: string[] = [
		"quicksight:GetAuthCode",
		"quicksight:GetSessionEmbedUrl",
	];
	/** IAM actions required for the ListActionConnectors API call. */
	static readonly LIST_ACTION_CONNECTORS: string[] = [
		"quicksight:ListActionConnectors",
	];
	/** IAM actions required for the ListAgents API call. */
	static readonly LIST_AGENTS: string[] = ["quicksight:ListAgents"];
	/** IAM actions required for the ListAnalyses API call. */
	static readonly LIST_ANALYSES: string[] = ["quicksight:ListAnalyses"];
	/** IAM actions required for the ListApprovalPolicies API call. */
	static readonly LIST_APPROVAL_POLICIES: string[] = [
		"quicksight:ListApprovalPolicies",
	];
	/** IAM actions required for the ListAssetBundleExportJobs API call. */
	static readonly LIST_ASSET_BUNDLE_EXPORT_JOBS: string[] = [
		"quicksight:ListAssetBundleExportJobs",
	];
	/** IAM actions required for the ListAssetBundleImportJobs API call. */
	static readonly LIST_ASSET_BUNDLE_IMPORT_JOBS: string[] = [
		"quicksight:ListAssetBundleImportJobs",
	];
	/** IAM actions required for the ListBrands API call. */
	static readonly LIST_BRANDS: string[] = ["quicksight:ListBrands"];
	/** IAM actions required for the ListCustomPermissions API call. */
	static readonly LIST_CUSTOM_PERMISSIONS: string[] = [
		"quicksight:ListCustomPermissions",
	];
	/** IAM actions required for the ListDashboardVersions API call. */
	static readonly LIST_DASHBOARD_VERSIONS: string[] = [
		"quicksight:ListDashboardVersions",
	];
	/** IAM actions required for the ListDashboards API call. */
	static readonly LIST_DASHBOARDS: string[] = ["quicksight:ListDashboards"];
	/** IAM actions required for the ListDataSets API call. */
	static readonly LIST_DATA_SETS: string[] = ["quicksight:ListDataSets"];
	/** IAM actions required for the ListDataSources API call. */
	static readonly LIST_DATA_SOURCES: string[] = ["quicksight:ListDataSources"];
	/** IAM actions required for the ListDlpSettings API call. */
	static readonly LIST_DLP_SETTINGS: string[] = ["quicksight:ListDlpSettings"];
	/** IAM actions required for the ListFlows API call. */
	static readonly LIST_FLOWS: string[] = ["quicksight:ListFlows"];
	/** IAM actions required for the ListFolderMembers API call. */
	static readonly LIST_FOLDER_MEMBERS: string[] = [
		"quicksight:ListFolderMembers",
	];
	/** IAM actions required for the ListFolders API call. */
	static readonly LIST_FOLDERS: string[] = ["quicksight:ListFolders"];
	/** IAM actions required for the ListFoldersForResource API call. */
	static readonly LIST_FOLDERS_FOR_RESOURCE: string[] = [
		"quicksight:ListFoldersForResource",
	];
	/** IAM actions required for the ListGroupMemberships API call. */
	static readonly LIST_GROUP_MEMBERSHIPS: string[] = [
		"quicksight:ListGroupMemberships",
	];
	/** IAM actions required for the ListGroups API call. */
	static readonly LIST_GROUPS: string[] = ["quicksight:ListGroups"];
	/** IAM actions required for the ListIAMPolicyAssignments API call. */
	static readonly LIST_IAM_POLICY_ASSIGNMENTS: string[] = [
		"quicksight:ListIAMPolicyAssignments",
	];
	/** IAM actions required for the ListIAMPolicyAssignmentsForUser API call. */
	static readonly LIST_IAM_POLICY_ASSIGNMENTS_FOR_USER: string[] = [
		"quicksight:ListIAMPolicyAssignmentsForUser",
	];
	/** IAM actions required for the ListIdentityPropagationConfigs API call. */
	static readonly LIST_IDENTITY_PROPAGATION_CONFIGS: string[] = [
		"quicksight:ListIdentityPropagationConfigs",
	];
	/** IAM actions required for the ListIngestions API call. */
	static readonly LIST_INGESTIONS: string[] = ["quicksight:ListIngestions"];
	/** IAM actions required for the ListKnowledgeBases API call. */
	static readonly LIST_KNOWLEDGE_BASES: string[] = [
		"quicksight:ListKnowledgeBases",
	];
	/** IAM actions required for the ListLimitsProfiles API call. */
	static readonly LIST_LIMITS_PROFILES: string[] = [
		"quicksight:ListLimitsProfiles",
	];
	/** IAM actions required for the ListNamespaces API call. */
	static readonly LIST_NAMESPACES: string[] = ["quicksight:ListNamespaces"];
	/** IAM actions required for the ListOAuthClientApplications API call. */
	static readonly LIST_O_AUTH_CLIENT_APPLICATIONS: string[] = [
		"quicksight:ListDataSources",
		"quicksight:ListOAuthClientApplications",
	];
	/** IAM actions required for the ListRefreshSchedules API call. */
	static readonly LIST_REFRESH_SCHEDULES: string[] = [
		"quicksight:ListRefreshSchedules",
	];
	/** IAM actions required for the ListRoleMemberships API call. */
	static readonly LIST_ROLE_MEMBERSHIPS: string[] = [
		"quicksight:GetGroupMapping",
		"quicksight:ListRoleMemberships",
	];
	/** IAM actions required for the ListSelfUpgrades API call. */
	static readonly LIST_SELF_UPGRADES: string[] = [
		"quicksight:ListSelfUpgrades",
	];
	/** IAM actions required for the ListSpaceResources API call. */
	static readonly LIST_SPACE_RESOURCES: string[] = [
		"quicksight:ListSpaceResources",
	];
	/** IAM actions required for the ListSpaces API call. */
	static readonly LIST_SPACES: string[] = ["quicksight:ListSpaces"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"quicksight:ListTagsForResource",
	];
	/** IAM actions required for the ListTemplateAliases API call. */
	static readonly LIST_TEMPLATE_ALIASES: string[] = [
		"quicksight:ListTemplateAliases",
	];
	/** IAM actions required for the ListTemplateVersions API call. */
	static readonly LIST_TEMPLATE_VERSIONS: string[] = [
		"quicksight:ListTemplateVersions",
	];
	/** IAM actions required for the ListTemplates API call. */
	static readonly LIST_TEMPLATES: string[] = ["quicksight:ListTemplates"];
	/** IAM actions required for the ListThemeAliases API call. */
	static readonly LIST_THEME_ALIASES: string[] = [
		"quicksight:ListThemeAliases",
	];
	/** IAM actions required for the ListThemeVersions API call. */
	static readonly LIST_THEME_VERSIONS: string[] = [
		"quicksight:ListThemeVersions",
	];
	/** IAM actions required for the ListThemes API call. */
	static readonly LIST_THEMES: string[] = ["quicksight:ListThemes"];
	/** IAM actions required for the ListTopicRefreshSchedules API call. */
	static readonly LIST_TOPIC_REFRESH_SCHEDULES: string[] = [
		"quicksight:ListTopicRefreshSchedules",
	];
	/** IAM actions required for the ListTopicReviewedAnswers API call. */
	static readonly LIST_TOPIC_REVIEWED_ANSWERS: string[] = [
		"quicksight:ListTopicReviewedAnswers",
	];
	/** IAM actions required for the ListTopics API call. */
	static readonly LIST_TOPICS: string[] = ["quicksight:ListTopics"];
	/** IAM actions required for the ListTopicsV2 API call. */
	static readonly LIST_TOPICS_V2: string[] = ["quicksight:ListTopics"];
	/** IAM actions required for the ListUserGroups API call. */
	static readonly LIST_USER_GROUPS: string[] = ["quicksight:ListUserGroups"];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = ["quicksight:ListUsers"];
	/** IAM actions required for the ListUsersIndexCapacity API call. */
	static readonly LIST_USERS_INDEX_CAPACITY: string[] = [
		"quicksight:ListUsersIndexCapacity",
	];
	/** IAM actions required for the ListVPCConnections API call. */
	static readonly LIST_VPC_CONNECTIONS: string[] = [
		"quicksight:ListVPCConnections",
	];
	/** IAM actions required for the PredictQAResults API call. */
	static readonly PREDICT_QA_RESULTS: string[] = [
		"quicksight:PredictQAResults",
	];
	/** IAM actions required for the PutDataSetRefreshProperties API call. */
	static readonly PUT_DATA_SET_REFRESH_PROPERTIES: string[] = [
		"quicksight:PutDataSetRefreshProperties",
	];
	/** IAM actions required for the RegisterUser API call. */
	static readonly REGISTER_USER: string[] = [
		"quicksight:RegisterUser",
		"quicksight:TagResource",
	];
	/** IAM actions required for the RestoreAnalysis API call. */
	static readonly RESTORE_ANALYSIS: string[] = [
		"quicksight:CreateFolderMembership",
		"quicksight:ListFoldersForResource",
		"quicksight:RestoreAnalysis",
	];
	/** IAM actions required for the SearchActionConnectors API call. */
	static readonly SEARCH_ACTION_CONNECTORS: string[] = [
		"quicksight:SearchActionConnectors",
	];
	/** IAM actions required for the SearchAgents API call. */
	static readonly SEARCH_AGENTS: string[] = ["quicksight:SearchAgents"];
	/** IAM actions required for the SearchAnalyses API call. */
	static readonly SEARCH_ANALYSES: string[] = ["quicksight:SearchAnalyses"];
	/** IAM actions required for the SearchDashboards API call. */
	static readonly SEARCH_DASHBOARDS: string[] = ["quicksight:SearchDashboards"];
	/** IAM actions required for the SearchDataSets API call. */
	static readonly SEARCH_DATA_SETS: string[] = ["quicksight:SearchDataSets"];
	/** IAM actions required for the SearchDataSources API call. */
	static readonly SEARCH_DATA_SOURCES: string[] = [
		"quicksight:SearchDataSources",
	];
	/** IAM actions required for the SearchFlows API call. */
	static readonly SEARCH_FLOWS: string[] = ["quicksight:SearchFlows"];
	/** IAM actions required for the SearchFolders API call. */
	static readonly SEARCH_FOLDERS: string[] = ["quicksight:SearchFolders"];
	/** IAM actions required for the SearchGroups API call. */
	static readonly SEARCH_GROUPS: string[] = ["quicksight:SearchGroups"];
	/** IAM actions required for the SearchKnowledgeBases API call. */
	static readonly SEARCH_KNOWLEDGE_BASES: string[] = [
		"quicksight:SearchKnowledgeBases",
	];
	/** IAM actions required for the SearchSpaces API call. */
	static readonly SEARCH_SPACES: string[] = ["quicksight:SearchSpaces"];
	/** IAM actions required for the SearchTopics API call. */
	static readonly SEARCH_TOPICS: string[] = ["quicksight:SearchTopics"];
	/** IAM actions required for the SearchTopicsV2 API call. */
	static readonly SEARCH_TOPICS_V2: string[] = [];
	/** IAM actions required for the StartAssetBundleExportJob API call. */
	static readonly START_ASSET_BUNDLE_EXPORT_JOB: string[] = [
		"quicksight:StartAssetBundleExportJob",
	];
	/** IAM actions required for the StartAssetBundleImportJob API call. */
	static readonly START_ASSET_BUNDLE_IMPORT_JOB: string[] = [
		"quicksight:StartAssetBundleImportJob",
	];
	/** IAM actions required for the StartAutomationJob API call. */
	static readonly START_AUTOMATION_JOB: string[] = [
		"quicksight:StartAutomationJob",
	];
	/** IAM actions required for the StartDashboardSnapshotJob API call. */
	static readonly START_DASHBOARD_SNAPSHOT_JOB: string[] = [
		"quicksight:StartDashboardSnapshotJob",
	];
	/** IAM actions required for the StartDashboardSnapshotJobSchedule API call. */
	static readonly START_DASHBOARD_SNAPSHOT_JOB_SCHEDULE: string[] = [
		"quicksight:StartDashboardSnapshotJobSchedule",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["quicksight:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["quicksight:UntagResource"];
	/** IAM actions required for the UpdateAccountCustomPermission API call. */
	static readonly UPDATE_ACCOUNT_CUSTOM_PERMISSION: string[] = [
		"quicksight:UpdateAccountCustomPermission",
	];
	/** IAM actions required for the UpdateAccountCustomization API call. */
	static readonly UPDATE_ACCOUNT_CUSTOMIZATION: string[] = [
		"quicksight:UpdateAccountCustomization",
	];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UPDATE_ACCOUNT_SETTINGS: string[] = [
		"quicksight:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateActionConnector API call. */
	static readonly UPDATE_ACTION_CONNECTOR: string[] = [
		"iam:PassRole",
		"quicksight:UpdateActionConnector",
	];
	/** IAM actions required for the UpdateActionConnectorPermissions API call. */
	static readonly UPDATE_ACTION_CONNECTOR_PERMISSIONS: string[] = [
		"quicksight:UpdateActionConnectorPermissions",
	];
	/** IAM actions required for the UpdateAgent API call. */
	static readonly UPDATE_AGENT: string[] = ["quicksight:UpdateAgent"];
	/** IAM actions required for the UpdateAgentPermissions API call. */
	static readonly UPDATE_AGENT_PERMISSIONS: string[] = [
		"quicksight:UpdateAgentPermissions",
	];
	/** IAM actions required for the UpdateAnalysis API call. */
	static readonly UPDATE_ANALYSIS: string[] = [
		"quicksight:DescribeTemplate",
		"quicksight:DescribeTheme",
		"quicksight:PassDataSet",
		"quicksight:UpdateAnalysis",
	];
	/** IAM actions required for the UpdateAnalysisPermissions API call. */
	static readonly UPDATE_ANALYSIS_PERMISSIONS: string[] = [
		"quicksight:UpdateAnalysisPermissions",
	];
	/** IAM actions required for the UpdateApplicationWithTokenExchangeGrant API call. */
	static readonly UPDATE_APPLICATION_WITH_TOKEN_EXCHANGE_GRANT: string[] = [
		"quicksight:UpdateApplicationWithTokenExchangeGrant",
	];
	/** IAM actions required for the UpdateApprovalPolicy API call. */
	static readonly UPDATE_APPROVAL_POLICY: string[] = [
		"quicksight:UpdateApprovalPolicy",
	];
	/** IAM actions required for the UpdateBrand API call. */
	static readonly UPDATE_BRAND: string[] = ["quicksight:UpdateBrand"];
	/** IAM actions required for the UpdateBrandAssignment API call. */
	static readonly UPDATE_BRAND_ASSIGNMENT: string[] = [
		"quicksight:UpdateBrandAssignment",
	];
	/** IAM actions required for the UpdateBrandPublishedVersion API call. */
	static readonly UPDATE_BRAND_PUBLISHED_VERSION: string[] = [
		"quicksight:UpdateBrandPublishedVersion",
	];
	/** IAM actions required for the UpdateCustomPermissions API call. */
	static readonly UPDATE_CUSTOM_PERMISSIONS: string[] = [
		"quicksight:UpdateCustomPermissions",
	];
	/** IAM actions required for the UpdateDashboard API call. */
	static readonly UPDATE_DASHBOARD: string[] = [
		"quicksight:DescribeTemplate",
		"quicksight:DescribeTheme",
		"quicksight:PassDataSet",
		"quicksight:UpdateDashboard",
	];
	/** IAM actions required for the UpdateDashboardLinks API call. */
	static readonly UPDATE_DASHBOARD_LINKS: string[] = [
		"quicksight:UpdateDashboardLinks",
	];
	/** IAM actions required for the UpdateDashboardPermissions API call. */
	static readonly UPDATE_DASHBOARD_PERMISSIONS: string[] = [
		"quicksight:UpdateDashboardPermissions",
	];
	/** IAM actions required for the UpdateDashboardPublishedVersion API call. */
	static readonly UPDATE_DASHBOARD_PUBLISHED_VERSION: string[] = [
		"quicksight:UpdateDashboardPublishedVersion",
	];
	/** IAM actions required for the UpdateDashboardsQAConfiguration API call. */
	static readonly UPDATE_DASHBOARDS_QA_CONFIGURATION: string[] = [
		"quicksight:UpdateDashboardsQAConfiguration",
	];
	/** IAM actions required for the UpdateDataSet API call. */
	static readonly UPDATE_DATA_SET: string[] = [
		"quicksight:PassDataSet",
		"quicksight:PassDataSource",
		"quicksight:UpdateDataSet",
	];
	/** IAM actions required for the UpdateDataSetPermissions API call. */
	static readonly UPDATE_DATA_SET_PERMISSIONS: string[] = [
		"quicksight:UpdateDataSetPermissions",
	];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UPDATE_DATA_SOURCE: string[] = [
		"iam:PassRole",
		"quicksight:UpdateDataSource",
	];
	/** IAM actions required for the UpdateDataSourcePermissions API call. */
	static readonly UPDATE_DATA_SOURCE_PERMISSIONS: string[] = [
		"quicksight:UpdateDataSourcePermissions",
	];
	/** IAM actions required for the UpdateDefaultQBusinessApplication API call. */
	static readonly UPDATE_DEFAULT_Q_BUSINESS_APPLICATION: string[] = [
		"quicksight:UpdateDefaultQBusinessApplication",
	];
	/** IAM actions required for the UpdateDlpSetting API call. */
	static readonly UPDATE_DLP_SETTING: string[] = [
		"quicksight:UpdateDlpSetting",
	];
	/** IAM actions required for the UpdateFlow API call. */
	static readonly UPDATE_FLOW: string[] = ["quicksight:UpdateFlow"];
	/** IAM actions required for the UpdateFlowPermissions API call. */
	static readonly UPDATE_FLOW_PERMISSIONS: string[] = [
		"quicksight:UpdateFlowPermissions",
	];
	/** IAM actions required for the UpdateFolder API call. */
	static readonly UPDATE_FOLDER: string[] = ["quicksight:UpdateFolder"];
	/** IAM actions required for the UpdateFolderPermissions API call. */
	static readonly UPDATE_FOLDER_PERMISSIONS: string[] = [
		"quicksight:UpdateFolderPermissions",
	];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UPDATE_GROUP: string[] = ["quicksight:UpdateGroup"];
	/** IAM actions required for the UpdateIAMPolicyAssignment API call. */
	static readonly UPDATE_IAM_POLICY_ASSIGNMENT: string[] = [
		"quicksight:UpdateIAMPolicyAssignment",
	];
	/** IAM actions required for the UpdateIdentityPropagationConfig API call. */
	static readonly UPDATE_IDENTITY_PROPAGATION_CONFIG: string[] = [
		"quicksight:UpdateIdentityPropagationConfig",
	];
	/** IAM actions required for the UpdateIpRestriction API call. */
	static readonly UPDATE_IP_RESTRICTION: string[] = [
		"quicksight:UpdateIpRestriction",
	];
	/** IAM actions required for the UpdateKeyRegistration API call. */
	static readonly UPDATE_KEY_REGISTRATION: string[] = [
		"quicksight:RegisterCustomerManagedKey",
		"quicksight:RemoveCustomerManagedKey",
		"quicksight:UpdateKeyRegistration",
	];
	/** IAM actions required for the UpdateKnowledgeBase API call. */
	static readonly UPDATE_KNOWLEDGE_BASE: string[] = [
		"quicksight:UpdateKnowledgeBase",
	];
	/** IAM actions required for the UpdateKnowledgeBasePermissions API call. */
	static readonly UPDATE_KNOWLEDGE_BASE_PERMISSIONS: string[] = [
		"quicksight:UpdateKnowledgeBasePermissions",
	];
	/** IAM actions required for the UpdateLimitsProfile API call. */
	static readonly UPDATE_LIMITS_PROFILE: string[] = [
		"quicksight:UpdateLimitsProfile",
	];
	/** IAM actions required for the UpdateOAuthClientApplication API call. */
	static readonly UPDATE_O_AUTH_CLIENT_APPLICATION: string[] = [
		"quicksight:UpdateDataSource",
		"quicksight:UpdateOAuthClientApplication",
	];
	/** IAM actions required for the UpdatePublicSharingSettings API call. */
	static readonly UPDATE_PUBLIC_SHARING_SETTINGS: string[] = [
		"quicksight:UpdatePublicSharingSettings",
	];
	/** IAM actions required for the UpdateQPersonalizationConfiguration API call. */
	static readonly UPDATE_Q_PERSONALIZATION_CONFIGURATION: string[] = [
		"quicksight:UpdateQPersonalizationConfiguration",
	];
	/** IAM actions required for the UpdateQuickSightQSearchConfiguration API call. */
	static readonly UPDATE_QUICK_SIGHT_Q_SEARCH_CONFIGURATION: string[] = [
		"quicksight:UpdateQuickSightQSearchConfiguration",
	];
	/** IAM actions required for the UpdateRefreshSchedule API call. */
	static readonly UPDATE_REFRESH_SCHEDULE: string[] = [
		"quicksight:UpdateRefreshSchedule",
	];
	/** IAM actions required for the UpdateRoleCustomPermission API call. */
	static readonly UPDATE_ROLE_CUSTOM_PERMISSION: string[] = [
		"quicksight:UpdateRoleCustomPermission",
	];
	/** IAM actions required for the UpdateSPICECapacityConfiguration API call. */
	static readonly UPDATE_SPICE_CAPACITY_CONFIGURATION: string[] = [
		"quicksight:UpdateSPICECapacityConfiguration",
	];
	/** IAM actions required for the UpdateSelfUpgrade API call. */
	static readonly UPDATE_SELF_UPGRADE: string[] = [
		"quicksight:UpdateSelfUpgrade",
	];
	/** IAM actions required for the UpdateSelfUpgradeConfiguration API call. */
	static readonly UPDATE_SELF_UPGRADE_CONFIGURATION: string[] = [
		"quicksight:UpdateSelfUpgradeConfiguration",
	];
	/** IAM actions required for the UpdateSpace API call. */
	static readonly UPDATE_SPACE: string[] = ["quicksight:UpdateSpace"];
	/** IAM actions required for the UpdateSpacePermissions API call. */
	static readonly UPDATE_SPACE_PERMISSIONS: string[] = [
		"quicksight:UpdateSpacePermissions",
	];
	/** IAM actions required for the UpdateSpaceResources API call. */
	static readonly UPDATE_SPACE_RESOURCES: string[] = [
		"quicksight:UpdateSpaceResources",
	];
	/** IAM actions required for the UpdateTemplate API call. */
	static readonly UPDATE_TEMPLATE: string[] = [
		"quicksight:DescribeAnalysis",
		"quicksight:DescribeTemplate",
		"quicksight:UpdateTemplate",
	];
	/** IAM actions required for the UpdateTemplateAlias API call. */
	static readonly UPDATE_TEMPLATE_ALIAS: string[] = [
		"quicksight:UpdateTemplateAlias",
	];
	/** IAM actions required for the UpdateTemplatePermissions API call. */
	static readonly UPDATE_TEMPLATE_PERMISSIONS: string[] = [
		"quicksight:UpdateTemplatePermissions",
	];
	/** IAM actions required for the UpdateTheme API call. */
	static readonly UPDATE_THEME: string[] = ["quicksight:UpdateTheme"];
	/** IAM actions required for the UpdateThemeAlias API call. */
	static readonly UPDATE_THEME_ALIAS: string[] = [
		"quicksight:UpdateThemeAlias",
	];
	/** IAM actions required for the UpdateThemePermissions API call. */
	static readonly UPDATE_THEME_PERMISSIONS: string[] = [
		"quicksight:UpdateThemePermissions",
	];
	/** IAM actions required for the UpdateTopic API call. */
	static readonly UPDATE_TOPIC: string[] = [
		"quicksight:PassDataSet",
		"quicksight:UpdateTopic",
	];
	/** IAM actions required for the UpdateTopicPermissions API call. */
	static readonly UPDATE_TOPIC_PERMISSIONS: string[] = [
		"quicksight:UpdateTopicPermissions",
	];
	/** IAM actions required for the UpdateTopicPermissionsV2 API call. */
	static readonly UPDATE_TOPIC_PERMISSIONS_V2: string[] = [
		"quicksight:UpdateTopicPermissions",
	];
	/** IAM actions required for the UpdateTopicRefreshSchedule API call. */
	static readonly UPDATE_TOPIC_REFRESH_SCHEDULE: string[] = [
		"quicksight:UpdateTopicRefreshSchedule",
	];
	/** IAM actions required for the UpdateTopicV2 API call. */
	static readonly UPDATE_TOPIC_V2: string[] = [
		"quicksight:PassDataSet",
		"quicksight:UpdateTopic",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = ["quicksight:UpdateUser"];
	/** IAM actions required for the UpdateUserCustomPermission API call. */
	static readonly UPDATE_USER_CUSTOM_PERMISSION: string[] = [
		"quicksight:UpdateUser",
		"quicksight:UpdateUserCustomPermission",
	];
	/** IAM actions required for the UpdateVPCConnection API call. */
	static readonly UPDATE_VPC_CONNECTION: string[] = [
		"iam:PassRole",
		"quicksight:UpdateVPCConnection",
	];
}

/**
 * Condition key constants and builders for quicksight.
 */
export class QuickSightConditions {
	/** Condition keys applicable to the BatchCreateTopicReviewedAnswer action. */
	static readonly BATCH_CREATE_TOPIC_REVIEWED_ANSWER_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the BatchDeleteTopicReviewedAnswer action. */
	static readonly BATCH_DELETE_TOPIC_REVIEWED_ANSWER_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CancelIngestion action. */
	static readonly CANCEL_INGESTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAccountCustomization action. */
	static readonly CREATE_ACCOUNT_CUSTOMIZATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAccountSubscription action. */
	static readonly CREATE_ACCOUNT_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"quicksight:DirectoryType",
		"quicksight:Edition",
	];
	/** Condition keys applicable to the CreateActionConnector action. */
	static readonly CREATE_ACTION_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAnalysis action. */
	static readonly CREATE_ANALYSIS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBrand action. */
	static readonly CREATE_BRAND_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomPermissions action. */
	static readonly CREATE_CUSTOM_PERMISSIONS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDashboard action. */
	static readonly CREATE_DASHBOARD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataSet action. */
	static readonly CREATE_DATA_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataSource action. */
	static readonly CREATE_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDlpSetting action. */
	static readonly CREATE_DLP_SETTING_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEmailCustomizationTemplate action. */
	static readonly CREATE_EMAIL_CUSTOMIZATION_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateFolder action. */
	static readonly CREATE_FOLDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGroupMembership action. */
	static readonly CREATE_GROUP_MEMBERSHIP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIngestion action. */
	static readonly CREATE_INGESTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKnowledgeBase action. */
	static readonly CREATE_KNOWLEDGE_BASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNamespace action. */
	static readonly CREATE_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOAuthClientApplication action. */
	static readonly CREATE_O_AUTH_CLIENT_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRoleMembership action. */
	static readonly CREATE_ROLE_MEMBERSHIP_CONDITION_KEYS: string[] = [
		"quicksight:Group",
	];
	/** Condition keys applicable to the CreateTemplate action. */
	static readonly CREATE_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTemplateAlias action. */
	static readonly CREATE_TEMPLATE_ALIAS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTheme action. */
	static readonly CREATE_THEME_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateThemeAlias action. */
	static readonly CREATE_THEME_ALIAS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTopic action. */
	static readonly CREATE_TOPIC_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVPCConnection action. */
	static readonly CREATE_VPC_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteDataSet action. */
	static readonly DELETE_DATA_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteDataSource action. */
	static readonly DELETE_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteOAuthClientApplication action. */
	static readonly DELETE_O_AUTH_CLIENT_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteRoleMembership action. */
	static readonly DELETE_ROLE_MEMBERSHIP_CONDITION_KEYS: string[] = [
		"quicksight:Group",
	];
	/** Condition keys applicable to the DeleteTopic action. */
	static readonly DELETE_TOPIC_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteVPCConnection action. */
	static readonly DELETE_VPC_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeDataSet action. */
	static readonly DESCRIBE_DATA_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeDataSetPermissions action. */
	static readonly DESCRIBE_DATA_SET_PERMISSIONS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeDataSource action. */
	static readonly DESCRIBE_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeDataSourcePermissions action. */
	static readonly DESCRIBE_DATA_SOURCE_PERMISSIONS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeIngestion action. */
	static readonly DESCRIBE_INGESTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeOAuthClientApplication action. */
	static readonly DESCRIBE_O_AUTH_CLIENT_APPLICATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the DescribeTopic action. */
	static readonly DESCRIBE_TOPIC_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeTopicPermissions action. */
	static readonly DESCRIBE_TOPIC_PERMISSIONS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeTopicRefresh action. */
	static readonly DESCRIBE_TOPIC_REFRESH_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeVPCConnection action. */
	static readonly DESCRIBE_VPC_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GenerateEmbedUrlForAnonymousUser action. */
	static readonly GENERATE_EMBED_URL_FOR_ANONYMOUS_USER_CONDITION_KEYS: string[] =
		["quicksight:AllowedEmbeddingDomains"];
	/** Condition keys applicable to the GenerateEmbedUrlForRegisteredUser action. */
	static readonly GENERATE_EMBED_URL_FOR_REGISTERED_USER_CONDITION_KEYS: string[] =
		["quicksight:AllowedEmbeddingDomains"];
	/** Condition keys applicable to the GenerateEmbedUrlForRegisteredUserWithIdentity action. */
	static readonly GENERATE_EMBED_URL_FOR_REGISTERED_USER_WITH_IDENTITY_CONDITION_KEYS: string[] =
		["quicksight:AllowedEmbeddingDomains"];
	/** Condition keys applicable to the ListDataSets action. */
	static readonly LIST_DATA_SETS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListDataSources action. */
	static readonly LIST_DATA_SOURCES_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListIngestions action. */
	static readonly LIST_INGESTIONS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListOAuthClientApplications action. */
	static readonly LIST_O_AUTH_CLIENT_APPLICATIONS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTopicReviewedAnswers action. */
	static readonly LIST_TOPIC_REVIEWED_ANSWERS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTopics action. */
	static readonly LIST_TOPICS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListVPCConnections action. */
	static readonly LIST_VPC_CONNECTIONS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PassDataSet action. */
	static readonly PASS_DATA_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PassDataSource action. */
	static readonly PASS_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PassTopic action. */
	static readonly PASS_TOPIC_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterUser action. */
	static readonly REGISTER_USER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Subscribe action. */
	static readonly SUBSCRIBE_CONDITION_KEYS: string[] = [
		"quicksight:DirectoryType",
		"quicksight:Edition",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateDataSet action. */
	static readonly UPDATE_DATA_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateDataSetPermissions action. */
	static readonly UPDATE_DATA_SET_PERMISSIONS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateDataSource action. */
	static readonly UPDATE_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateDataSourcePermissions action. */
	static readonly UPDATE_DATA_SOURCE_PERMISSIONS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateOAuthClientApplication action. */
	static readonly UPDATE_O_AUTH_CLIENT_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateTopic action. */
	static readonly UPDATE_TOPIC_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateTopicPermissions action. */
	static readonly UPDATE_TOPIC_PERMISSIONS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateVPCConnection action. */
	static readonly UPDATE_VPC_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: quicksight:AllowedEmbeddingDomains (ArrayOfString) */
	static readonly ALLOWED_EMBEDDING_DOMAINS =
		"quicksight:AllowedEmbeddingDomains";
	/** Condition key: quicksight:DirectoryType (String) */
	static readonly DIRECTORY_TYPE = "quicksight:DirectoryType";
	/** Condition key: quicksight:Edition (String) */
	static readonly EDITION = "quicksight:Edition";
	/** Condition key: quicksight:Group (ARN) */
	static readonly GROUP = "quicksight:Group";
	/** Condition key: quicksight:IamArn (ARN) */
	static readonly IAM_ARN = "quicksight:IamArn";
	/** Condition key: quicksight:KmsKeyArns (ArrayOfARN) */
	static readonly KMS_KEY_ARNS = "quicksight:KmsKeyArns";
	/** Condition key: quicksight:SessionName (String) */
	static readonly SESSION_NAME = "quicksight:SessionName";
	/** Condition key: quicksight:UserName (String) */
	static readonly USER_NAME = "quicksight:UserName";

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
	 * Generates a condition block for `quicksight:AllowedEmbeddingDomains`.
	 */
	static allowedEmbeddingDomains(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"quicksight:AllowedEmbeddingDomains": values,
			},
		};
	}

	/**
	 * Generates a condition block for `quicksight:DirectoryType`.
	 */
	static directoryType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "quicksight:DirectoryType": value } };
	}

	/**
	 * Generates a condition block for `quicksight:Edition`.
	 */
	static edition(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "quicksight:Edition": value } };
	}

	/**
	 * Generates a condition block for `quicksight:Group`.
	 */
	static group(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "quicksight:Group": value } };
	}

	/**
	 * Generates a condition block for `quicksight:IamArn`.
	 */
	static iamARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "quicksight:IamArn": value } };
	}

	/**
	 * Generates a condition block for `quicksight:KmsKeyArns`.
	 */
	static kmsKeyArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "quicksight:KmsKeyArns": values } };
	}

	/**
	 * Generates a condition block for `quicksight:SessionName`.
	 */
	static sessionName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "quicksight:SessionName": value } };
	}

	/**
	 * Generates a condition block for `quicksight:UserName`.
	 */
	static userName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "quicksight:UserName": value } };
	}
}
