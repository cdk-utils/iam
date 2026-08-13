// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/connect.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the connect service.
 */
export class ConnectActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "connect";

	/** [Write] connect:ActivateEvaluationForm */
	static readonly ACTIVATE_EVALUATION_FORM = "connect:ActivateEvaluationForm";
	/** [Write] connect:AdminGetEmergencyAccessToken */
	static readonly ADMIN_GET_EMERGENCY_ACCESS_TOKEN =
		"connect:AdminGetEmergencyAccessToken";
	/** [Write] connect:AssociateAnalyticsDataSet */
	static readonly ASSOCIATE_ANALYTICS_DATA_SET =
		"connect:AssociateAnalyticsDataSet";
	/** [Write] connect:AssociateApprovedOrigin */
	static readonly ASSOCIATE_APPROVED_ORIGIN = "connect:AssociateApprovedOrigin";
	/** [Write] connect:AssociateBot */
	static readonly ASSOCIATE_BOT = "connect:AssociateBot";
	/** [Write] connect:AssociateContactWithUser */
	static readonly ASSOCIATE_CONTACT_WITH_USER =
		"connect:AssociateContactWithUser";
	/** [Write] connect:AssociateCustomerProfilesDomain */
	static readonly ASSOCIATE_CUSTOMER_PROFILES_DOMAIN =
		"connect:AssociateCustomerProfilesDomain";
	/** [Write] connect:AssociateDefaultVocabulary */
	static readonly ASSOCIATE_DEFAULT_VOCABULARY =
		"connect:AssociateDefaultVocabulary";
	/** [Write] connect:AssociateEmailAddressAlias */
	static readonly ASSOCIATE_EMAIL_ADDRESS_ALIAS =
		"connect:AssociateEmailAddressAlias";
	/** [Write] connect:AssociateFlow */
	static readonly ASSOCIATE_FLOW = "connect:AssociateFlow";
	/** [Write] connect:AssociateInstanceStorageConfig */
	static readonly ASSOCIATE_INSTANCE_STORAGE_CONFIG =
		"connect:AssociateInstanceStorageConfig";
	/** [Write] connect:AssociateLambdaFunction */
	static readonly ASSOCIATE_LAMBDA_FUNCTION = "connect:AssociateLambdaFunction";
	/** [Write] connect:AssociateLexBot */
	static readonly ASSOCIATE_LEX_BOT = "connect:AssociateLexBot";
	/** [Write] connect:AssociatePhoneNumberContactFlow */
	static readonly ASSOCIATE_PHONE_NUMBER_CONTACT_FLOW =
		"connect:AssociatePhoneNumberContactFlow";
	/** [Write] connect:AssociateQueueEmailAddresses */
	static readonly ASSOCIATE_QUEUE_EMAIL_ADDRESSES =
		"connect:AssociateQueueEmailAddresses";
	/** [Write] connect:AssociateQueueQuickConnects */
	static readonly ASSOCIATE_QUEUE_QUICK_CONNECTS =
		"connect:AssociateQueueQuickConnects";
	/** [Write] connect:AssociateRoutingProfileQueues */
	static readonly ASSOCIATE_ROUTING_PROFILE_QUEUES =
		"connect:AssociateRoutingProfileQueues";
	/** [Write] connect:AssociateSecurityKey */
	static readonly ASSOCIATE_SECURITY_KEY = "connect:AssociateSecurityKey";
	/** [Write] connect:AssociateSecurityProfiles */
	static readonly ASSOCIATE_SECURITY_PROFILES =
		"connect:AssociateSecurityProfiles";
	/** [Write] connect:AssociateTrafficDistributionGroupUser */
	static readonly ASSOCIATE_TRAFFIC_DISTRIBUTION_GROUP_USER =
		"connect:AssociateTrafficDistributionGroupUser";
	/** [Write] connect:AssociateUserProficiencies */
	static readonly ASSOCIATE_USER_PROFICIENCIES =
		"connect:AssociateUserProficiencies";
	/** [Write] connect:AssociateWorkspace */
	static readonly ASSOCIATE_WORKSPACE = "connect:AssociateWorkspace";
	/** [Write] connect:BatchAssociateAnalyticsDataSet */
	static readonly BATCH_ASSOCIATE_ANALYTICS_DATA_SET =
		"connect:BatchAssociateAnalyticsDataSet";
	/** [Write] connect:BatchCreateDataTableValue */
	static readonly BATCH_CREATE_DATA_TABLE_VALUE =
		"connect:BatchCreateDataTableValue";
	/** [Write] connect:BatchDeleteDataTableValue */
	static readonly BATCH_DELETE_DATA_TABLE_VALUE =
		"connect:BatchDeleteDataTableValue";
	/** [Read] connect:BatchDescribeDataTableValue */
	static readonly BATCH_DESCRIBE_DATA_TABLE_VALUE =
		"connect:BatchDescribeDataTableValue";
	/** [Write] connect:BatchDisassociateAnalyticsDataSet */
	static readonly BATCH_DISASSOCIATE_ANALYTICS_DATA_SET =
		"connect:BatchDisassociateAnalyticsDataSet";
	/** [Read] connect:BatchGetAttachedFileMetadata */
	static readonly BATCH_GET_ATTACHED_FILE_METADATA =
		"connect:BatchGetAttachedFileMetadata";
	/** [List] connect:BatchGetFlowAssociation */
	static readonly BATCH_GET_FLOW_ASSOCIATION =
		"connect:BatchGetFlowAssociation";
	/** [Write] connect:BatchPutContact */
	static readonly BATCH_PUT_CONTACT = "connect:BatchPutContact";
	/** [Write] connect:BatchUpdateDataTableValue */
	static readonly BATCH_UPDATE_DATA_TABLE_VALUE =
		"connect:BatchUpdateDataTableValue";
	/** [Write] connect:ClaimPhoneNumber */
	static readonly CLAIM_PHONE_NUMBER = "connect:ClaimPhoneNumber";
	/** [Write] connect:CompleteAttachedFileUpload */
	static readonly COMPLETE_ATTACHED_FILE_UPLOAD =
		"connect:CompleteAttachedFileUpload";
	/** [Write] connect:CreateAgentStatus */
	static readonly CREATE_AGENT_STATUS = "connect:CreateAgentStatus";
	/** [Write] connect:CreateAttachedFile */
	static readonly CREATE_ATTACHED_FILE = "connect:CreateAttachedFile";
	/** [Write] connect:CreateAuthenticationProfile */
	static readonly CREATE_AUTHENTICATION_PROFILE =
		"connect:CreateAuthenticationProfile";
	/** [Write] connect:CreateContact */
	static readonly CREATE_CONTACT = "connect:CreateContact";
	/** [Write] connect:CreateContactFlow */
	static readonly CREATE_CONTACT_FLOW = "connect:CreateContactFlow";
	/** [Write] connect:CreateContactFlowModule */
	static readonly CREATE_CONTACT_FLOW_MODULE =
		"connect:CreateContactFlowModule";
	/** [Write] connect:CreateContactFlowModuleAlias */
	static readonly CREATE_CONTACT_FLOW_MODULE_ALIAS =
		"connect:CreateContactFlowModuleAlias";
	/** [Write] connect:CreateContactFlowModuleVersion */
	static readonly CREATE_CONTACT_FLOW_MODULE_VERSION =
		"connect:CreateContactFlowModuleVersion";
	/** [Write] connect:CreateContactFlowVersion */
	static readonly CREATE_CONTACT_FLOW_VERSION =
		"connect:CreateContactFlowVersion";
	/** [Write] connect:CreateDataTable */
	static readonly CREATE_DATA_TABLE = "connect:CreateDataTable";
	/** [Write] connect:CreateDataTableAttribute */
	static readonly CREATE_DATA_TABLE_ATTRIBUTE =
		"connect:CreateDataTableAttribute";
	/** [Write] connect:CreateEmailAddress */
	static readonly CREATE_EMAIL_ADDRESS = "connect:CreateEmailAddress";
	/** [Write] connect:CreateEvaluationForm */
	static readonly CREATE_EVALUATION_FORM = "connect:CreateEvaluationForm";
	/** [Write] connect:CreateHoursOfOperation */
	static readonly CREATE_HOURS_OF_OPERATION = "connect:CreateHoursOfOperation";
	/** [Write] connect:CreateHoursOfOperationOverride */
	static readonly CREATE_HOURS_OF_OPERATION_OVERRIDE =
		"connect:CreateHoursOfOperationOverride";
	/** [Write] connect:CreateInstance */
	static readonly CREATE_INSTANCE = "connect:CreateInstance";
	/** [Write] connect:CreateIntegrationAssociation */
	static readonly CREATE_INTEGRATION_ASSOCIATION =
		"connect:CreateIntegrationAssociation";
	/** [Write] connect:CreateMetric */
	static readonly CREATE_METRIC = "connect:CreateMetric";
	/** [Write] connect:CreateNotification */
	static readonly CREATE_NOTIFICATION = "connect:CreateNotification";
	/** [Write] connect:CreateParticipant */
	static readonly CREATE_PARTICIPANT = "connect:CreateParticipant";
	/** [Write] connect:CreatePersistentContactAssociation */
	static readonly CREATE_PERSISTENT_CONTACT_ASSOCIATION =
		"connect:CreatePersistentContactAssociation";
	/** [Write] connect:CreatePredefinedAttribute */
	static readonly CREATE_PREDEFINED_ATTRIBUTE =
		"connect:CreatePredefinedAttribute";
	/** [Write] connect:CreatePrompt */
	static readonly CREATE_PROMPT = "connect:CreatePrompt";
	/** [Write] connect:CreatePushNotificationRegistration */
	static readonly CREATE_PUSH_NOTIFICATION_REGISTRATION =
		"connect:CreatePushNotificationRegistration";
	/** [Write] connect:CreateQueue */
	static readonly CREATE_QUEUE = "connect:CreateQueue";
	/** [Write] connect:CreateQuickConnect */
	static readonly CREATE_QUICK_CONNECT = "connect:CreateQuickConnect";
	/** [Write] connect:CreateRoutingProfile */
	static readonly CREATE_ROUTING_PROFILE = "connect:CreateRoutingProfile";
	/** [Write] connect:CreateRule */
	static readonly CREATE_RULE = "connect:CreateRule";
	/** [Write] connect:CreateSecurityProfile */
	static readonly CREATE_SECURITY_PROFILE = "connect:CreateSecurityProfile";
	/** [Write] connect:CreateTaskTemplate */
	static readonly CREATE_TASK_TEMPLATE = "connect:CreateTaskTemplate";
	/** [Write] connect:CreateTrafficDistributionGroup */
	static readonly CREATE_TRAFFIC_DISTRIBUTION_GROUP =
		"connect:CreateTrafficDistributionGroup";
	/** [Write] connect:CreateUseCase */
	static readonly CREATE_USE_CASE = "connect:CreateUseCase";
	/** [Write] connect:CreateUser */
	static readonly CREATE_USER = "connect:CreateUser";
	/** [Write] connect:CreateUserHierarchyGroup */
	static readonly CREATE_USER_HIERARCHY_GROUP =
		"connect:CreateUserHierarchyGroup";
	/** [Write] connect:CreateView */
	static readonly CREATE_VIEW = "connect:CreateView";
	/** [Write] connect:CreateViewVersion */
	static readonly CREATE_VIEW_VERSION = "connect:CreateViewVersion";
	/** [Write] connect:CreateVocabulary */
	static readonly CREATE_VOCABULARY = "connect:CreateVocabulary";
	/** [Write] connect:CreateWorkspace */
	static readonly CREATE_WORKSPACE = "connect:CreateWorkspace";
	/** [Write] connect:CreateWorkspacePage */
	static readonly CREATE_WORKSPACE_PAGE = "connect:CreateWorkspacePage";
	/** [Write] connect:DeactivateEvaluationForm */
	static readonly DEACTIVATE_EVALUATION_FORM =
		"connect:DeactivateEvaluationForm";
	/** [Write] connect:DeleteAttachedFile */
	static readonly DELETE_ATTACHED_FILE = "connect:DeleteAttachedFile";
	/** [Write] connect:DeleteContactEvaluation */
	static readonly DELETE_CONTACT_EVALUATION = "connect:DeleteContactEvaluation";
	/** [Write] connect:DeleteContactFlow */
	static readonly DELETE_CONTACT_FLOW = "connect:DeleteContactFlow";
	/** [Write] connect:DeleteContactFlowModule */
	static readonly DELETE_CONTACT_FLOW_MODULE =
		"connect:DeleteContactFlowModule";
	/** [Write] connect:DeleteContactFlowModuleAlias */
	static readonly DELETE_CONTACT_FLOW_MODULE_ALIAS =
		"connect:DeleteContactFlowModuleAlias";
	/** [Write] connect:DeleteContactFlowModuleVersion */
	static readonly DELETE_CONTACT_FLOW_MODULE_VERSION =
		"connect:DeleteContactFlowModuleVersion";
	/** [Write] connect:DeleteContactFlowVersion */
	static readonly DELETE_CONTACT_FLOW_VERSION =
		"connect:DeleteContactFlowVersion";
	/** [Write] connect:DeleteDataTable */
	static readonly DELETE_DATA_TABLE = "connect:DeleteDataTable";
	/** [Write] connect:DeleteDataTableAttribute */
	static readonly DELETE_DATA_TABLE_ATTRIBUTE =
		"connect:DeleteDataTableAttribute";
	/** [Write] connect:DeleteEmailAddress */
	static readonly DELETE_EMAIL_ADDRESS = "connect:DeleteEmailAddress";
	/** [Write] connect:DeleteEvaluationForm */
	static readonly DELETE_EVALUATION_FORM = "connect:DeleteEvaluationForm";
	/** [Write] connect:DeleteHoursOfOperation */
	static readonly DELETE_HOURS_OF_OPERATION = "connect:DeleteHoursOfOperation";
	/** [Write] connect:DeleteHoursOfOperationOverride */
	static readonly DELETE_HOURS_OF_OPERATION_OVERRIDE =
		"connect:DeleteHoursOfOperationOverride";
	/** [Write] connect:DeleteInstance */
	static readonly DELETE_INSTANCE = "connect:DeleteInstance";
	/** [Write] connect:DeleteIntegrationAssociation */
	static readonly DELETE_INTEGRATION_ASSOCIATION =
		"connect:DeleteIntegrationAssociation";
	/** [Write] connect:DeleteMetric */
	static readonly DELETE_METRIC = "connect:DeleteMetric";
	/** [Write] connect:DeleteNotification */
	static readonly DELETE_NOTIFICATION = "connect:DeleteNotification";
	/** [Write] connect:DeletePredefinedAttribute */
	static readonly DELETE_PREDEFINED_ATTRIBUTE =
		"connect:DeletePredefinedAttribute";
	/** [Write] connect:DeletePrompt */
	static readonly DELETE_PROMPT = "connect:DeletePrompt";
	/** [Write] connect:DeletePushNotificationRegistration */
	static readonly DELETE_PUSH_NOTIFICATION_REGISTRATION =
		"connect:DeletePushNotificationRegistration";
	/** [Write] connect:DeleteQueue */
	static readonly DELETE_QUEUE = "connect:DeleteQueue";
	/** [Write] connect:DeleteQuickConnect */
	static readonly DELETE_QUICK_CONNECT = "connect:DeleteQuickConnect";
	/** [Write] connect:DeleteRoutingProfile */
	static readonly DELETE_ROUTING_PROFILE = "connect:DeleteRoutingProfile";
	/** [Write] connect:DeleteRule */
	static readonly DELETE_RULE = "connect:DeleteRule";
	/** [Write] connect:DeleteSecurityProfile */
	static readonly DELETE_SECURITY_PROFILE = "connect:DeleteSecurityProfile";
	/** [Write] connect:DeleteTaskTemplate */
	static readonly DELETE_TASK_TEMPLATE = "connect:DeleteTaskTemplate";
	/** [Write] connect:DeleteTrafficDistributionGroup */
	static readonly DELETE_TRAFFIC_DISTRIBUTION_GROUP =
		"connect:DeleteTrafficDistributionGroup";
	/** [Write] connect:DeleteUseCase */
	static readonly DELETE_USE_CASE = "connect:DeleteUseCase";
	/** [Write] connect:DeleteUser */
	static readonly DELETE_USER = "connect:DeleteUser";
	/** [Write] connect:DeleteUserHierarchyGroup */
	static readonly DELETE_USER_HIERARCHY_GROUP =
		"connect:DeleteUserHierarchyGroup";
	/** [Write] connect:DeleteView */
	static readonly DELETE_VIEW = "connect:DeleteView";
	/** [Write] connect:DeleteViewVersion */
	static readonly DELETE_VIEW_VERSION = "connect:DeleteViewVersion";
	/** [Write] connect:DeleteVocabulary */
	static readonly DELETE_VOCABULARY = "connect:DeleteVocabulary";
	/** [Write] connect:DeleteWorkspace */
	static readonly DELETE_WORKSPACE = "connect:DeleteWorkspace";
	/** [Write] connect:DeleteWorkspaceMedia */
	static readonly DELETE_WORKSPACE_MEDIA = "connect:DeleteWorkspaceMedia";
	/** [Write] connect:DeleteWorkspacePage */
	static readonly DELETE_WORKSPACE_PAGE = "connect:DeleteWorkspacePage";
	/** [Read] connect:DescribeAgentStatus */
	static readonly DESCRIBE_AGENT_STATUS = "connect:DescribeAgentStatus";
	/** [Read] connect:DescribeAttachedFilesConfiguration */
	static readonly DESCRIBE_ATTACHED_FILES_CONFIGURATION =
		"connect:DescribeAttachedFilesConfiguration";
	/** [Read] connect:DescribeAuthenticationProfile */
	static readonly DESCRIBE_AUTHENTICATION_PROFILE =
		"connect:DescribeAuthenticationProfile";
	/** [Read] connect:DescribeContact */
	static readonly DESCRIBE_CONTACT = "connect:DescribeContact";
	/** [Read] connect:DescribeContactEvaluation */
	static readonly DESCRIBE_CONTACT_EVALUATION =
		"connect:DescribeContactEvaluation";
	/** [Read] connect:DescribeContactFlow */
	static readonly DESCRIBE_CONTACT_FLOW = "connect:DescribeContactFlow";
	/** [Read] connect:DescribeContactFlowModule */
	static readonly DESCRIBE_CONTACT_FLOW_MODULE =
		"connect:DescribeContactFlowModule";
	/** [Read] connect:DescribeContactFlowModuleAlias */
	static readonly DESCRIBE_CONTACT_FLOW_MODULE_ALIAS =
		"connect:DescribeContactFlowModuleAlias";
	/** [Read] connect:DescribeDataTable */
	static readonly DESCRIBE_DATA_TABLE = "connect:DescribeDataTable";
	/** [Read] connect:DescribeDataTableAttribute */
	static readonly DESCRIBE_DATA_TABLE_ATTRIBUTE =
		"connect:DescribeDataTableAttribute";
	/** [Read] connect:DescribeEmailAddress */
	static readonly DESCRIBE_EMAIL_ADDRESS = "connect:DescribeEmailAddress";
	/** [Read] connect:DescribeEvaluationForm */
	static readonly DESCRIBE_EVALUATION_FORM = "connect:DescribeEvaluationForm";
	/** [Read] connect:DescribeForecastingPlanningSchedulingIntegration */
	static readonly DESCRIBE_FORECASTING_PLANNING_SCHEDULING_INTEGRATION =
		"connect:DescribeForecastingPlanningSchedulingIntegration";
	/** [Read] connect:DescribeHoursOfOperation */
	static readonly DESCRIBE_HOURS_OF_OPERATION =
		"connect:DescribeHoursOfOperation";
	/** [Read] connect:DescribeHoursOfOperationOverride */
	static readonly DESCRIBE_HOURS_OF_OPERATION_OVERRIDE =
		"connect:DescribeHoursOfOperationOverride";
	/** [Read] connect:DescribeInstance */
	static readonly DESCRIBE_INSTANCE = "connect:DescribeInstance";
	/** [Read] connect:DescribeInstanceAttribute */
	static readonly DESCRIBE_INSTANCE_ATTRIBUTE =
		"connect:DescribeInstanceAttribute";
	/** [Read] connect:DescribeInstanceStorageConfig */
	static readonly DESCRIBE_INSTANCE_STORAGE_CONFIG =
		"connect:DescribeInstanceStorageConfig";
	/** [Read] connect:DescribeMetric */
	static readonly DESCRIBE_METRIC = "connect:DescribeMetric";
	/** [Read] connect:DescribeNotification */
	static readonly DESCRIBE_NOTIFICATION = "connect:DescribeNotification";
	/** [Read] connect:DescribePhoneNumber */
	static readonly DESCRIBE_PHONE_NUMBER = "connect:DescribePhoneNumber";
	/** [Read] connect:DescribePredefinedAttribute */
	static readonly DESCRIBE_PREDEFINED_ATTRIBUTE =
		"connect:DescribePredefinedAttribute";
	/** [Read] connect:DescribePrompt */
	static readonly DESCRIBE_PROMPT = "connect:DescribePrompt";
	/** [Read] connect:DescribeQueue */
	static readonly DESCRIBE_QUEUE = "connect:DescribeQueue";
	/** [Read] connect:DescribeQuickConnect */
	static readonly DESCRIBE_QUICK_CONNECT = "connect:DescribeQuickConnect";
	/** [Read] connect:DescribeRoutingProfile */
	static readonly DESCRIBE_ROUTING_PROFILE = "connect:DescribeRoutingProfile";
	/** [Read] connect:DescribeRule */
	static readonly DESCRIBE_RULE = "connect:DescribeRule";
	/** [Read] connect:DescribeSecurityProfile */
	static readonly DESCRIBE_SECURITY_PROFILE = "connect:DescribeSecurityProfile";
	/** [Read] connect:DescribeTrafficDistributionGroup */
	static readonly DESCRIBE_TRAFFIC_DISTRIBUTION_GROUP =
		"connect:DescribeTrafficDistributionGroup";
	/** [Read] connect:DescribeUser */
	static readonly DESCRIBE_USER = "connect:DescribeUser";
	/** [Read] connect:DescribeUserHierarchyGroup */
	static readonly DESCRIBE_USER_HIERARCHY_GROUP =
		"connect:DescribeUserHierarchyGroup";
	/** [Read] connect:DescribeUserHierarchyStructure */
	static readonly DESCRIBE_USER_HIERARCHY_STRUCTURE =
		"connect:DescribeUserHierarchyStructure";
	/** [Read] connect:DescribeView */
	static readonly DESCRIBE_VIEW = "connect:DescribeView";
	/** [Read] connect:DescribeVocabulary */
	static readonly DESCRIBE_VOCABULARY = "connect:DescribeVocabulary";
	/** [Read] connect:DescribeWorkspace */
	static readonly DESCRIBE_WORKSPACE = "connect:DescribeWorkspace";
	/** [Write] connect:DisassociateAnalyticsDataSet */
	static readonly DISASSOCIATE_ANALYTICS_DATA_SET =
		"connect:DisassociateAnalyticsDataSet";
	/** [Write] connect:DisassociateApprovedOrigin */
	static readonly DISASSOCIATE_APPROVED_ORIGIN =
		"connect:DisassociateApprovedOrigin";
	/** [Write] connect:DisassociateBot */
	static readonly DISASSOCIATE_BOT = "connect:DisassociateBot";
	/** [Write] connect:DisassociateCustomerProfilesDomain */
	static readonly DISASSOCIATE_CUSTOMER_PROFILES_DOMAIN =
		"connect:DisassociateCustomerProfilesDomain";
	/** [Write] connect:DisassociateEmailAddressAlias */
	static readonly DISASSOCIATE_EMAIL_ADDRESS_ALIAS =
		"connect:DisassociateEmailAddressAlias";
	/** [Write] connect:DisassociateFlow */
	static readonly DISASSOCIATE_FLOW = "connect:DisassociateFlow";
	/** [Write] connect:DisassociateInstanceStorageConfig */
	static readonly DISASSOCIATE_INSTANCE_STORAGE_CONFIG =
		"connect:DisassociateInstanceStorageConfig";
	/** [Write] connect:DisassociateLambdaFunction */
	static readonly DISASSOCIATE_LAMBDA_FUNCTION =
		"connect:DisassociateLambdaFunction";
	/** [Write] connect:DisassociateLexBot */
	static readonly DISASSOCIATE_LEX_BOT = "connect:DisassociateLexBot";
	/** [Write] connect:DisassociatePhoneNumberContactFlow */
	static readonly DISASSOCIATE_PHONE_NUMBER_CONTACT_FLOW =
		"connect:DisassociatePhoneNumberContactFlow";
	/** [Write] connect:DisassociateQueueEmailAddresses */
	static readonly DISASSOCIATE_QUEUE_EMAIL_ADDRESSES =
		"connect:DisassociateQueueEmailAddresses";
	/** [Write] connect:DisassociateQueueQuickConnects */
	static readonly DISASSOCIATE_QUEUE_QUICK_CONNECTS =
		"connect:DisassociateQueueQuickConnects";
	/** [Write] connect:DisassociateRoutingProfileQueues */
	static readonly DISASSOCIATE_ROUTING_PROFILE_QUEUES =
		"connect:DisassociateRoutingProfileQueues";
	/** [Write] connect:DisassociateSecurityKey */
	static readonly DISASSOCIATE_SECURITY_KEY = "connect:DisassociateSecurityKey";
	/** [Write] connect:DisassociateSecurityProfiles */
	static readonly DISASSOCIATE_SECURITY_PROFILES =
		"connect:DisassociateSecurityProfiles";
	/** [Write] connect:DisassociateTrafficDistributionGroupUser */
	static readonly DISASSOCIATE_TRAFFIC_DISTRIBUTION_GROUP_USER =
		"connect:DisassociateTrafficDistributionGroupUser";
	/** [Write] connect:DisassociateUserProficiencies */
	static readonly DISASSOCIATE_USER_PROFICIENCIES =
		"connect:DisassociateUserProficiencies";
	/** [Write] connect:DisassociateWorkspace */
	static readonly DISASSOCIATE_WORKSPACE = "connect:DisassociateWorkspace";
	/** [Write] connect:DismissUserContact */
	static readonly DISMISS_USER_CONTACT = "connect:DismissUserContact";
	/** [Read] connect:EvaluateDataTableValues */
	static readonly EVALUATE_DATA_TABLE_VALUES =
		"connect:EvaluateDataTableValues";
	/** [Read] connect:GetAttachedFile */
	static readonly GET_ATTACHED_FILE = "connect:GetAttachedFile";
	/** [Read] connect:GetContactAttributes */
	static readonly GET_CONTACT_ATTRIBUTES = "connect:GetContactAttributes";
	/** [Read] connect:GetContactMetrics */
	static readonly GET_CONTACT_METRICS = "connect:GetContactMetrics";
	/** [Read] connect:GetCurrentMetricData */
	static readonly GET_CURRENT_METRIC_DATA = "connect:GetCurrentMetricData";
	/** [Read] connect:GetCurrentUserData */
	static readonly GET_CURRENT_USER_DATA = "connect:GetCurrentUserData";
	/** [Read] connect:GetEffectiveHoursOfOperations */
	static readonly GET_EFFECTIVE_HOURS_OF_OPERATIONS =
		"connect:GetEffectiveHoursOfOperations";
	/** [Read] connect:GetEvaluationFormValidation */
	static readonly GET_EVALUATION_FORM_VALIDATION =
		"connect:GetEvaluationFormValidation";
	/** [Read] connect:GetFederationToken */
	static readonly GET_FEDERATION_TOKEN = "connect:GetFederationToken";
	/** [Read] connect:GetFlowAssociation */
	static readonly GET_FLOW_ASSOCIATION = "connect:GetFlowAssociation";
	/** [Read] connect:GetMetricData */
	static readonly GET_METRIC_DATA = "connect:GetMetricData";
	/** [Read] connect:GetMetricDataV2 */
	static readonly GET_METRIC_DATA_V2 = "connect:GetMetricDataV2";
	/** [Read] connect:GetPromptFile */
	static readonly GET_PROMPT_FILE = "connect:GetPromptFile";
	/** [Read] connect:GetTaskTemplate */
	static readonly GET_TASK_TEMPLATE = "connect:GetTaskTemplate";
	/** [List] connect:GetTrafficDistribution */
	static readonly GET_TRAFFIC_DISTRIBUTION = "connect:GetTrafficDistribution";
	/** [Write] connect:ImportPhoneNumber */
	static readonly IMPORT_PHONE_NUMBER = "connect:ImportPhoneNumber";
	/** [Write] connect:ImportWorkspaceMedia */
	static readonly IMPORT_WORKSPACE_MEDIA = "connect:ImportWorkspaceMedia";
	/** [List] connect:ListAgentStatuses */
	static readonly LIST_AGENT_STATUSES = "connect:ListAgentStatuses";
	/** [List] connect:ListAnalyticsDataAssociations */
	static readonly LIST_ANALYTICS_DATA_ASSOCIATIONS =
		"connect:ListAnalyticsDataAssociations";
	/** [List] connect:ListAnalyticsDataLakeDataSets */
	static readonly LIST_ANALYTICS_DATA_LAKE_DATA_SETS =
		"connect:ListAnalyticsDataLakeDataSets";
	/** [List] connect:ListApprovedOrigins */
	static readonly LIST_APPROVED_ORIGINS = "connect:ListApprovedOrigins";
	/** [List] connect:ListAssociatedContacts */
	static readonly LIST_ASSOCIATED_CONTACTS = "connect:ListAssociatedContacts";
	/** [List] connect:ListAttachedFilesConfigurations */
	static readonly LIST_ATTACHED_FILES_CONFIGURATIONS =
		"connect:ListAttachedFilesConfigurations";
	/** [List] connect:ListAuthenticationProfiles */
	static readonly LIST_AUTHENTICATION_PROFILES =
		"connect:ListAuthenticationProfiles";
	/** [List] connect:ListBots */
	static readonly LIST_BOTS = "connect:ListBots";
	/** [List] connect:ListContactEvaluations */
	static readonly LIST_CONTACT_EVALUATIONS = "connect:ListContactEvaluations";
	/** [List] connect:ListContactFlowModuleAliases */
	static readonly LIST_CONTACT_FLOW_MODULE_ALIASES =
		"connect:ListContactFlowModuleAliases";
	/** [List] connect:ListContactFlowModuleVersions */
	static readonly LIST_CONTACT_FLOW_MODULE_VERSIONS =
		"connect:ListContactFlowModuleVersions";
	/** [List] connect:ListContactFlowModules */
	static readonly LIST_CONTACT_FLOW_MODULES = "connect:ListContactFlowModules";
	/** [List] connect:ListContactFlowVersions */
	static readonly LIST_CONTACT_FLOW_VERSIONS =
		"connect:ListContactFlowVersions";
	/** [List] connect:ListContactFlows */
	static readonly LIST_CONTACT_FLOWS = "connect:ListContactFlows";
	/** [List] connect:ListContactReferences */
	static readonly LIST_CONTACT_REFERENCES = "connect:ListContactReferences";
	/** [List] connect:ListDataTableAttributes */
	static readonly LIST_DATA_TABLE_ATTRIBUTES =
		"connect:ListDataTableAttributes";
	/** [List] connect:ListDataTablePrimaryValues */
	static readonly LIST_DATA_TABLE_PRIMARY_VALUES =
		"connect:ListDataTablePrimaryValues";
	/** [List] connect:ListDataTableValues */
	static readonly LIST_DATA_TABLE_VALUES = "connect:ListDataTableValues";
	/** [List] connect:ListDataTables */
	static readonly LIST_DATA_TABLES = "connect:ListDataTables";
	/** [List] connect:ListDefaultVocabularies */
	static readonly LIST_DEFAULT_VOCABULARIES = "connect:ListDefaultVocabularies";
	/** [List] connect:ListEntitySecurityProfiles */
	static readonly LIST_ENTITY_SECURITY_PROFILES =
		"connect:ListEntitySecurityProfiles";
	/** [List] connect:ListEvaluationFormVersions */
	static readonly LIST_EVALUATION_FORM_VERSIONS =
		"connect:ListEvaluationFormVersions";
	/** [List] connect:ListEvaluationForms */
	static readonly LIST_EVALUATION_FORMS = "connect:ListEvaluationForms";
	/** [List] connect:ListFlowAssociations */
	static readonly LIST_FLOW_ASSOCIATIONS = "connect:ListFlowAssociations";
	/** [List] connect:ListHoursOfOperationOverrides */
	static readonly LIST_HOURS_OF_OPERATION_OVERRIDES =
		"connect:ListHoursOfOperationOverrides";
	/** [List] connect:ListHoursOfOperations */
	static readonly LIST_HOURS_OF_OPERATIONS = "connect:ListHoursOfOperations";
	/** [List] connect:ListInstanceAttributes */
	static readonly LIST_INSTANCE_ATTRIBUTES = "connect:ListInstanceAttributes";
	/** [List] connect:ListInstanceStorageConfigs */
	static readonly LIST_INSTANCE_STORAGE_CONFIGS =
		"connect:ListInstanceStorageConfigs";
	/** [List] connect:ListInstances */
	static readonly LIST_INSTANCES = "connect:ListInstances";
	/** [List] connect:ListIntegrationAssociations */
	static readonly LIST_INTEGRATION_ASSOCIATIONS =
		"connect:ListIntegrationAssociations";
	/** [List] connect:ListLambdaFunctions */
	static readonly LIST_LAMBDA_FUNCTIONS = "connect:ListLambdaFunctions";
	/** [List] connect:ListLexBots */
	static readonly LIST_LEX_BOTS = "connect:ListLexBots";
	/** [List] connect:ListMetrics */
	static readonly LIST_METRICS = "connect:ListMetrics";
	/** [Read] connect:ListNotifications */
	static readonly LIST_NOTIFICATIONS = "connect:ListNotifications";
	/** [List] connect:ListPhoneNumbers */
	static readonly LIST_PHONE_NUMBERS = "connect:ListPhoneNumbers";
	/** [List] connect:ListPhoneNumbersV2 */
	static readonly LIST_PHONE_NUMBERS_V2 = "connect:ListPhoneNumbersV2";
	/** [List] connect:ListPredefinedAttributes */
	static readonly LIST_PREDEFINED_ATTRIBUTES =
		"connect:ListPredefinedAttributes";
	/** [List] connect:ListPrompts */
	static readonly LIST_PROMPTS = "connect:ListPrompts";
	/** [List] connect:ListQueueEmailAddresses */
	static readonly LIST_QUEUE_EMAIL_ADDRESSES =
		"connect:ListQueueEmailAddresses";
	/** [List] connect:ListQueueQuickConnects */
	static readonly LIST_QUEUE_QUICK_CONNECTS = "connect:ListQueueQuickConnects";
	/** [List] connect:ListQueues */
	static readonly LIST_QUEUES = "connect:ListQueues";
	/** [List] connect:ListQuickConnects */
	static readonly LIST_QUICK_CONNECTS = "connect:ListQuickConnects";
	/** [Read] connect:ListRealtimeContactAnalysisSegments */
	static readonly LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS =
		"connect:ListRealtimeContactAnalysisSegments";
	/** [List] connect:ListRealtimeContactAnalysisSegmentsV2 */
	static readonly LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_V2 =
		"connect:ListRealtimeContactAnalysisSegmentsV2";
	/** [List] connect:ListRoutingProfileManualAssignmentQueues */
	static readonly LIST_ROUTING_PROFILE_MANUAL_ASSIGNMENT_QUEUES =
		"connect:ListRoutingProfileManualAssignmentQueues";
	/** [List] connect:ListRoutingProfileQueues */
	static readonly LIST_ROUTING_PROFILE_QUEUES =
		"connect:ListRoutingProfileQueues";
	/** [List] connect:ListRoutingProfiles */
	static readonly LIST_ROUTING_PROFILES = "connect:ListRoutingProfiles";
	/** [List] connect:ListRules */
	static readonly LIST_RULES = "connect:ListRules";
	/** [List] connect:ListSecurityKeys */
	static readonly LIST_SECURITY_KEYS = "connect:ListSecurityKeys";
	/** [List] connect:ListSecurityProfileApplications */
	static readonly LIST_SECURITY_PROFILE_APPLICATIONS =
		"connect:ListSecurityProfileApplications";
	/** [List] connect:ListSecurityProfileFlowModules */
	static readonly LIST_SECURITY_PROFILE_FLOW_MODULES =
		"connect:ListSecurityProfileFlowModules";
	/** [List] connect:ListSecurityProfilePermissions */
	static readonly LIST_SECURITY_PROFILE_PERMISSIONS =
		"connect:ListSecurityProfilePermissions";
	/** [List] connect:ListSecurityProfiles */
	static readonly LIST_SECURITY_PROFILES = "connect:ListSecurityProfiles";
	/** [Read] connect:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "connect:ListTagsForResource";
	/** [List] connect:ListTaskTemplates */
	static readonly LIST_TASK_TEMPLATES = "connect:ListTaskTemplates";
	/** [List] connect:ListTrafficDistributionGroupUsers */
	static readonly LIST_TRAFFIC_DISTRIBUTION_GROUP_USERS =
		"connect:ListTrafficDistributionGroupUsers";
	/** [List] connect:ListTrafficDistributionGroups */
	static readonly LIST_TRAFFIC_DISTRIBUTION_GROUPS =
		"connect:ListTrafficDistributionGroups";
	/** [List] connect:ListUseCases */
	static readonly LIST_USE_CASES = "connect:ListUseCases";
	/** [List] connect:ListUserHierarchyGroups */
	static readonly LIST_USER_HIERARCHY_GROUPS =
		"connect:ListUserHierarchyGroups";
	/** [Read] connect:ListUserNotifications */
	static readonly LIST_USER_NOTIFICATIONS = "connect:ListUserNotifications";
	/** [List] connect:ListUserProficiencies */
	static readonly LIST_USER_PROFICIENCIES = "connect:ListUserProficiencies";
	/** [List] connect:ListUsers */
	static readonly LIST_USERS = "connect:ListUsers";
	/** [List] connect:ListViewVersions */
	static readonly LIST_VIEW_VERSIONS = "connect:ListViewVersions";
	/** [List] connect:ListViews */
	static readonly LIST_VIEWS = "connect:ListViews";
	/** [List] connect:ListWorkspaceMedia */
	static readonly LIST_WORKSPACE_MEDIA = "connect:ListWorkspaceMedia";
	/** [List] connect:ListWorkspacePages */
	static readonly LIST_WORKSPACE_PAGES = "connect:ListWorkspacePages";
	/** [List] connect:ListWorkspaces */
	static readonly LIST_WORKSPACES = "connect:ListWorkspaces";
	/** [Write] connect:MonitorContact */
	static readonly MONITOR_CONTACT = "connect:MonitorContact";
	/** [Write] connect:PauseContact */
	static readonly PAUSE_CONTACT = "connect:PauseContact";
	/** [Write] connect:PutUserStatus */
	static readonly PUT_USER_STATUS = "connect:PutUserStatus";
	/** [Write] connect:ReleasePhoneNumber */
	static readonly RELEASE_PHONE_NUMBER = "connect:ReleasePhoneNumber";
	/** [Write] connect:ReplicateInstance */
	static readonly REPLICATE_INSTANCE = "connect:ReplicateInstance";
	/** [Write] connect:ResumeContact */
	static readonly RESUME_CONTACT = "connect:ResumeContact";
	/** [Write] connect:ResumeContactRecording */
	static readonly RESUME_CONTACT_RECORDING = "connect:ResumeContactRecording";
	/** [Read] connect:SearchAgentStatuses */
	static readonly SEARCH_AGENT_STATUSES = "connect:SearchAgentStatuses";
	/** [List] connect:SearchAvailablePhoneNumbers */
	static readonly SEARCH_AVAILABLE_PHONE_NUMBERS =
		"connect:SearchAvailablePhoneNumbers";
	/** [Read] connect:SearchContactEvaluations */
	static readonly SEARCH_CONTACT_EVALUATIONS =
		"connect:SearchContactEvaluations";
	/** [Read] connect:SearchContactFlowModules */
	static readonly SEARCH_CONTACT_FLOW_MODULES =
		"connect:SearchContactFlowModules";
	/** [Read] connect:SearchContactFlows */
	static readonly SEARCH_CONTACT_FLOWS = "connect:SearchContactFlows";
	/** [Read] connect:SearchContacts */
	static readonly SEARCH_CONTACTS = "connect:SearchContacts";
	/** [Read] connect:SearchDataTables */
	static readonly SEARCH_DATA_TABLES = "connect:SearchDataTables";
	/** [Read] connect:SearchEmailAddresses */
	static readonly SEARCH_EMAIL_ADDRESSES = "connect:SearchEmailAddresses";
	/** [Read] connect:SearchEvaluationForms */
	static readonly SEARCH_EVALUATION_FORMS = "connect:SearchEvaluationForms";
	/** [Read] connect:SearchHoursOfOperationOverrides */
	static readonly SEARCH_HOURS_OF_OPERATION_OVERRIDES =
		"connect:SearchHoursOfOperationOverrides";
	/** [Read] connect:SearchHoursOfOperations */
	static readonly SEARCH_HOURS_OF_OPERATIONS =
		"connect:SearchHoursOfOperations";
	/** [Read] connect:SearchMetrics */
	static readonly SEARCH_METRICS = "connect:SearchMetrics";
	/** [Read] connect:SearchNotifications */
	static readonly SEARCH_NOTIFICATIONS = "connect:SearchNotifications";
	/** [Read] connect:SearchPredefinedAttributes */
	static readonly SEARCH_PREDEFINED_ATTRIBUTES =
		"connect:SearchPredefinedAttributes";
	/** [Read] connect:SearchPrompts */
	static readonly SEARCH_PROMPTS = "connect:SearchPrompts";
	/** [Read] connect:SearchQueues */
	static readonly SEARCH_QUEUES = "connect:SearchQueues";
	/** [Read] connect:SearchQuickConnects */
	static readonly SEARCH_QUICK_CONNECTS = "connect:SearchQuickConnects";
	/** [List] connect:SearchResourceTags */
	static readonly SEARCH_RESOURCE_TAGS = "connect:SearchResourceTags";
	/** [Read] connect:SearchRoutingProfiles */
	static readonly SEARCH_ROUTING_PROFILES = "connect:SearchRoutingProfiles";
	/** [Read] connect:SearchRules */
	static readonly SEARCH_RULES = "connect:SearchRules";
	/** [Read] connect:SearchSecurityProfiles */
	static readonly SEARCH_SECURITY_PROFILES = "connect:SearchSecurityProfiles";
	/** [Read] connect:SearchUserHierarchyGroups */
	static readonly SEARCH_USER_HIERARCHY_GROUPS =
		"connect:SearchUserHierarchyGroups";
	/** [Read] connect:SearchUsers */
	static readonly SEARCH_USERS = "connect:SearchUsers";
	/** [Read] connect:SearchViews */
	static readonly SEARCH_VIEWS = "connect:SearchViews";
	/** [List] connect:SearchVocabularies */
	static readonly SEARCH_VOCABULARIES = "connect:SearchVocabularies";
	/** [Read] connect:SearchWorkspaceAssociations */
	static readonly SEARCH_WORKSPACE_ASSOCIATIONS =
		"connect:SearchWorkspaceAssociations";
	/** [Read] connect:SearchWorkspaces */
	static readonly SEARCH_WORKSPACES = "connect:SearchWorkspaces";
	/** [Write] connect:SendChatIntegrationEvent */
	static readonly SEND_CHAT_INTEGRATION_EVENT =
		"connect:SendChatIntegrationEvent";
	/** [Write] connect:SendIntegrationEvent */
	static readonly SEND_INTEGRATION_EVENT = "connect:SendIntegrationEvent";
	/** [Write] connect:SendOutboundChatMessage */
	static readonly SEND_OUTBOUND_CHAT_MESSAGE =
		"connect:SendOutboundChatMessage";
	/** [Write] connect:SendOutboundEmail */
	static readonly SEND_OUTBOUND_EMAIL = "connect:SendOutboundEmail";
	/** [Write] connect:SendOutboundWebNotification */
	static readonly SEND_OUTBOUND_WEB_NOTIFICATION =
		"connect:SendOutboundWebNotification";
	/** [Write] connect:StartAttachedFileUpload */
	static readonly START_ATTACHED_FILE_UPLOAD =
		"connect:StartAttachedFileUpload";
	/** [Write] connect:StartChatContact */
	static readonly START_CHAT_CONTACT = "connect:StartChatContact";
	/** [Write] connect:StartContactConversationalAnalyticsJob */
	static readonly START_CONTACT_CONVERSATIONAL_ANALYTICS_JOB =
		"connect:StartContactConversationalAnalyticsJob";
	/** [Write] connect:StartContactEvaluation */
	static readonly START_CONTACT_EVALUATION = "connect:StartContactEvaluation";
	/** [Write] connect:StartContactMediaProcessing */
	static readonly START_CONTACT_MEDIA_PROCESSING =
		"connect:StartContactMediaProcessing";
	/** [Write] connect:StartContactRecording */
	static readonly START_CONTACT_RECORDING = "connect:StartContactRecording";
	/** [Write] connect:StartContactStreaming */
	static readonly START_CONTACT_STREAMING = "connect:StartContactStreaming";
	/** [Write] connect:StartEmailContact */
	static readonly START_EMAIL_CONTACT = "connect:StartEmailContact";
	/** [Write] connect:StartEvaluationFormValidation */
	static readonly START_EVALUATION_FORM_VALIDATION =
		"connect:StartEvaluationFormValidation";
	/** [Write] connect:StartForecastingPlanningSchedulingIntegration */
	static readonly START_FORECASTING_PLANNING_SCHEDULING_INTEGRATION =
		"connect:StartForecastingPlanningSchedulingIntegration";
	/** [Write] connect:StartOutboundChatContact */
	static readonly START_OUTBOUND_CHAT_CONTACT =
		"connect:StartOutboundChatContact";
	/** [Write] connect:StartOutboundEmailContact */
	static readonly START_OUTBOUND_EMAIL_CONTACT =
		"connect:StartOutboundEmailContact";
	/** [Write] connect:StartOutboundVoiceContact */
	static readonly START_OUTBOUND_VOICE_CONTACT =
		"connect:StartOutboundVoiceContact";
	/** [Write] connect:StartScreenSharing */
	static readonly START_SCREEN_SHARING = "connect:StartScreenSharing";
	/** [Write] connect:StartTaskContact */
	static readonly START_TASK_CONTACT = "connect:StartTaskContact";
	/** [Write] connect:StartWebRTCContact */
	static readonly START_WEB_RTC_CONTACT = "connect:StartWebRTCContact";
	/** [Write] connect:StopContact */
	static readonly STOP_CONTACT = "connect:StopContact";
	/** [Write] connect:StopContactMediaProcessing */
	static readonly STOP_CONTACT_MEDIA_PROCESSING =
		"connect:StopContactMediaProcessing";
	/** [Write] connect:StopContactRecording */
	static readonly STOP_CONTACT_RECORDING = "connect:StopContactRecording";
	/** [Write] connect:StopContactStreaming */
	static readonly STOP_CONTACT_STREAMING = "connect:StopContactStreaming";
	/** [Write] connect:StopForecastingPlanningSchedulingIntegration */
	static readonly STOP_FORECASTING_PLANNING_SCHEDULING_INTEGRATION =
		"connect:StopForecastingPlanningSchedulingIntegration";
	/** [Write] connect:SubmitContactEvaluation */
	static readonly SUBMIT_CONTACT_EVALUATION = "connect:SubmitContactEvaluation";
	/** [Write] connect:SuspendContactRecording */
	static readonly SUSPEND_CONTACT_RECORDING = "connect:SuspendContactRecording";
	/** [Write] connect:TagContact */
	static readonly TAG_CONTACT = "connect:TagContact";
	/** [Tagging] connect:TagResource */
	static readonly TAG_RESOURCE = "connect:TagResource";
	/** [Write] connect:TransferContact */
	static readonly TRANSFER_CONTACT = "connect:TransferContact";
	/** [Write] connect:UntagContact */
	static readonly UNTAG_CONTACT = "connect:UntagContact";
	/** [Tagging] connect:UntagResource */
	static readonly UNTAG_RESOURCE = "connect:UntagResource";
	/** [Write] connect:UpdateAgentStatus */
	static readonly UPDATE_AGENT_STATUS = "connect:UpdateAgentStatus";
	/** [Write] connect:UpdateAttachedFilesConfiguration */
	static readonly UPDATE_ATTACHED_FILES_CONFIGURATION =
		"connect:UpdateAttachedFilesConfiguration";
	/** [Write] connect:UpdateAuthenticationProfile */
	static readonly UPDATE_AUTHENTICATION_PROFILE =
		"connect:UpdateAuthenticationProfile";
	/** [Write] connect:UpdateContact */
	static readonly UPDATE_CONTACT = "connect:UpdateContact";
	/** [Write] connect:UpdateContactAttributes */
	static readonly UPDATE_CONTACT_ATTRIBUTES = "connect:UpdateContactAttributes";
	/** [Write] connect:UpdateContactEvaluation */
	static readonly UPDATE_CONTACT_EVALUATION = "connect:UpdateContactEvaluation";
	/** [Write] connect:UpdateContactFlowContent */
	static readonly UPDATE_CONTACT_FLOW_CONTENT =
		"connect:UpdateContactFlowContent";
	/** [Write] connect:UpdateContactFlowMetadata */
	static readonly UPDATE_CONTACT_FLOW_METADATA =
		"connect:UpdateContactFlowMetadata";
	/** [Write] connect:UpdateContactFlowModuleAlias */
	static readonly UPDATE_CONTACT_FLOW_MODULE_ALIAS =
		"connect:UpdateContactFlowModuleAlias";
	/** [Write] connect:UpdateContactFlowModuleContent */
	static readonly UPDATE_CONTACT_FLOW_MODULE_CONTENT =
		"connect:UpdateContactFlowModuleContent";
	/** [Write] connect:UpdateContactFlowModuleMetadata */
	static readonly UPDATE_CONTACT_FLOW_MODULE_METADATA =
		"connect:UpdateContactFlowModuleMetadata";
	/** [Write] connect:UpdateContactFlowName */
	static readonly UPDATE_CONTACT_FLOW_NAME = "connect:UpdateContactFlowName";
	/** [Write] connect:UpdateContactRoutingData */
	static readonly UPDATE_CONTACT_ROUTING_DATA =
		"connect:UpdateContactRoutingData";
	/** [Write] connect:UpdateContactSchedule */
	static readonly UPDATE_CONTACT_SCHEDULE = "connect:UpdateContactSchedule";
	/** [Write] connect:UpdateDataTableAttribute */
	static readonly UPDATE_DATA_TABLE_ATTRIBUTE =
		"connect:UpdateDataTableAttribute";
	/** [Write] connect:UpdateDataTableMetadata */
	static readonly UPDATE_DATA_TABLE_METADATA =
		"connect:UpdateDataTableMetadata";
	/** [Write] connect:UpdateDataTablePrimaryValues */
	static readonly UPDATE_DATA_TABLE_PRIMARY_VALUES =
		"connect:UpdateDataTablePrimaryValues";
	/** [Write] connect:UpdateEmailAddressMetadata */
	static readonly UPDATE_EMAIL_ADDRESS_METADATA =
		"connect:UpdateEmailAddressMetadata";
	/** [Write] connect:UpdateEvaluationForm */
	static readonly UPDATE_EVALUATION_FORM = "connect:UpdateEvaluationForm";
	/** [Write] connect:UpdateHoursOfOperation */
	static readonly UPDATE_HOURS_OF_OPERATION = "connect:UpdateHoursOfOperation";
	/** [Write] connect:UpdateHoursOfOperationOverride */
	static readonly UPDATE_HOURS_OF_OPERATION_OVERRIDE =
		"connect:UpdateHoursOfOperationOverride";
	/** [Write] connect:UpdateInstanceAttribute */
	static readonly UPDATE_INSTANCE_ATTRIBUTE = "connect:UpdateInstanceAttribute";
	/** [Write] connect:UpdateInstanceStorageConfig */
	static readonly UPDATE_INSTANCE_STORAGE_CONFIG =
		"connect:UpdateInstanceStorageConfig";
	/** [Write] connect:UpdateMetricContent */
	static readonly UPDATE_METRIC_CONTENT = "connect:UpdateMetricContent";
	/** [Write] connect:UpdateMetricMetadata */
	static readonly UPDATE_METRIC_METADATA = "connect:UpdateMetricMetadata";
	/** [Write] connect:UpdateNotificationContent */
	static readonly UPDATE_NOTIFICATION_CONTENT =
		"connect:UpdateNotificationContent";
	/** [Write] connect:UpdateParticipantAuthentication */
	static readonly UPDATE_PARTICIPANT_AUTHENTICATION =
		"connect:UpdateParticipantAuthentication";
	/** [Write] connect:UpdateParticipantRoleConfig */
	static readonly UPDATE_PARTICIPANT_ROLE_CONFIG =
		"connect:UpdateParticipantRoleConfig";
	/** [Write] connect:UpdatePhoneNumber */
	static readonly UPDATE_PHONE_NUMBER = "connect:UpdatePhoneNumber";
	/** [Write] connect:UpdatePhoneNumberMetadata */
	static readonly UPDATE_PHONE_NUMBER_METADATA =
		"connect:UpdatePhoneNumberMetadata";
	/** [Write] connect:UpdatePredefinedAttribute */
	static readonly UPDATE_PREDEFINED_ATTRIBUTE =
		"connect:UpdatePredefinedAttribute";
	/** [Write] connect:UpdatePrompt */
	static readonly UPDATE_PROMPT = "connect:UpdatePrompt";
	/** [Write] connect:UpdateQueueHoursOfOperation */
	static readonly UPDATE_QUEUE_HOURS_OF_OPERATION =
		"connect:UpdateQueueHoursOfOperation";
	/** [Write] connect:UpdateQueueMaxContacts */
	static readonly UPDATE_QUEUE_MAX_CONTACTS = "connect:UpdateQueueMaxContacts";
	/** [Write] connect:UpdateQueueName */
	static readonly UPDATE_QUEUE_NAME = "connect:UpdateQueueName";
	/** [Write] connect:UpdateQueueOutboundCallerConfig */
	static readonly UPDATE_QUEUE_OUTBOUND_CALLER_CONFIG =
		"connect:UpdateQueueOutboundCallerConfig";
	/** [Write] connect:UpdateQueueOutboundEmailConfig */
	static readonly UPDATE_QUEUE_OUTBOUND_EMAIL_CONFIG =
		"connect:UpdateQueueOutboundEmailConfig";
	/** [Write] connect:UpdateQueueStatus */
	static readonly UPDATE_QUEUE_STATUS = "connect:UpdateQueueStatus";
	/** [Write] connect:UpdateQuickConnectConfig */
	static readonly UPDATE_QUICK_CONNECT_CONFIG =
		"connect:UpdateQuickConnectConfig";
	/** [Write] connect:UpdateQuickConnectName */
	static readonly UPDATE_QUICK_CONNECT_NAME = "connect:UpdateQuickConnectName";
	/** [Write] connect:UpdateRoutingProfileAgentAvailabilityTimer */
	static readonly UPDATE_ROUTING_PROFILE_AGENT_AVAILABILITY_TIMER =
		"connect:UpdateRoutingProfileAgentAvailabilityTimer";
	/** [Write] connect:UpdateRoutingProfileConcurrency */
	static readonly UPDATE_ROUTING_PROFILE_CONCURRENCY =
		"connect:UpdateRoutingProfileConcurrency";
	/** [Write] connect:UpdateRoutingProfileDefaultOutboundQueue */
	static readonly UPDATE_ROUTING_PROFILE_DEFAULT_OUTBOUND_QUEUE =
		"connect:UpdateRoutingProfileDefaultOutboundQueue";
	/** [Write] connect:UpdateRoutingProfileName */
	static readonly UPDATE_ROUTING_PROFILE_NAME =
		"connect:UpdateRoutingProfileName";
	/** [Write] connect:UpdateRoutingProfileQueues */
	static readonly UPDATE_ROUTING_PROFILE_QUEUES =
		"connect:UpdateRoutingProfileQueues";
	/** [Write] connect:UpdateRule */
	static readonly UPDATE_RULE = "connect:UpdateRule";
	/** [Write] connect:UpdateSecurityProfile */
	static readonly UPDATE_SECURITY_PROFILE = "connect:UpdateSecurityProfile";
	/** [Write] connect:UpdateTaskTemplate */
	static readonly UPDATE_TASK_TEMPLATE = "connect:UpdateTaskTemplate";
	/** [Write] connect:UpdateTrafficDistribution */
	static readonly UPDATE_TRAFFIC_DISTRIBUTION =
		"connect:UpdateTrafficDistribution";
	/** [Write] connect:UpdateUserHierarchy */
	static readonly UPDATE_USER_HIERARCHY = "connect:UpdateUserHierarchy";
	/** [Write] connect:UpdateUserHierarchyGroupName */
	static readonly UPDATE_USER_HIERARCHY_GROUP_NAME =
		"connect:UpdateUserHierarchyGroupName";
	/** [Write] connect:UpdateUserHierarchyStructure */
	static readonly UPDATE_USER_HIERARCHY_STRUCTURE =
		"connect:UpdateUserHierarchyStructure";
	/** [Write] connect:UpdateUserIdentityInfo */
	static readonly UPDATE_USER_IDENTITY_INFO = "connect:UpdateUserIdentityInfo";
	/** [Write] connect:UpdateUserNotificationStatus */
	static readonly UPDATE_USER_NOTIFICATION_STATUS =
		"connect:UpdateUserNotificationStatus";
	/** [Write] connect:UpdateUserPhoneConfig */
	static readonly UPDATE_USER_PHONE_CONFIG = "connect:UpdateUserPhoneConfig";
	/** [Write] connect:UpdateUserProficiencies */
	static readonly UPDATE_USER_PROFICIENCIES = "connect:UpdateUserProficiencies";
	/** [Write] connect:UpdateUserRoutingProfile */
	static readonly UPDATE_USER_ROUTING_PROFILE =
		"connect:UpdateUserRoutingProfile";
	/** [Write] connect:UpdateUserSecurityProfiles */
	static readonly UPDATE_USER_SECURITY_PROFILES =
		"connect:UpdateUserSecurityProfiles";
	/** [Write] connect:UpdateViewContent */
	static readonly UPDATE_VIEW_CONTENT = "connect:UpdateViewContent";
	/** [Write] connect:UpdateViewMetadata */
	static readonly UPDATE_VIEW_METADATA = "connect:UpdateViewMetadata";
	/** [Write] connect:UpdateWorkspaceMetadata */
	static readonly UPDATE_WORKSPACE_METADATA = "connect:UpdateWorkspaceMetadata";
	/** [Write] connect:UpdateWorkspacePage */
	static readonly UPDATE_WORKSPACE_PAGE = "connect:UpdateWorkspacePage";
	/** [Write] connect:UpdateWorkspaceTheme */
	static readonly UPDATE_WORKSPACE_THEME = "connect:UpdateWorkspaceTheme";
	/** [Write] connect:UpdateWorkspaceVisibility */
	static readonly UPDATE_WORKSPACE_VISIBILITY =
		"connect:UpdateWorkspaceVisibility";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ConnectActions.BATCH_DESCRIBE_DATA_TABLE_VALUE,
		ConnectActions.BATCH_GET_ATTACHED_FILE_METADATA,
		ConnectActions.DESCRIBE_AGENT_STATUS,
		ConnectActions.DESCRIBE_ATTACHED_FILES_CONFIGURATION,
		ConnectActions.DESCRIBE_AUTHENTICATION_PROFILE,
		ConnectActions.DESCRIBE_CONTACT,
		ConnectActions.DESCRIBE_CONTACT_EVALUATION,
		ConnectActions.DESCRIBE_CONTACT_FLOW,
		ConnectActions.DESCRIBE_CONTACT_FLOW_MODULE,
		ConnectActions.DESCRIBE_CONTACT_FLOW_MODULE_ALIAS,
		ConnectActions.DESCRIBE_DATA_TABLE,
		ConnectActions.DESCRIBE_DATA_TABLE_ATTRIBUTE,
		ConnectActions.DESCRIBE_EMAIL_ADDRESS,
		ConnectActions.DESCRIBE_EVALUATION_FORM,
		ConnectActions.DESCRIBE_FORECASTING_PLANNING_SCHEDULING_INTEGRATION,
		ConnectActions.DESCRIBE_HOURS_OF_OPERATION,
		ConnectActions.DESCRIBE_HOURS_OF_OPERATION_OVERRIDE,
		ConnectActions.DESCRIBE_INSTANCE,
		ConnectActions.DESCRIBE_INSTANCE_ATTRIBUTE,
		ConnectActions.DESCRIBE_INSTANCE_STORAGE_CONFIG,
		ConnectActions.DESCRIBE_METRIC,
		ConnectActions.DESCRIBE_NOTIFICATION,
		ConnectActions.DESCRIBE_PHONE_NUMBER,
		ConnectActions.DESCRIBE_PREDEFINED_ATTRIBUTE,
		ConnectActions.DESCRIBE_PROMPT,
		ConnectActions.DESCRIBE_QUEUE,
		ConnectActions.DESCRIBE_QUICK_CONNECT,
		ConnectActions.DESCRIBE_ROUTING_PROFILE,
		ConnectActions.DESCRIBE_RULE,
		ConnectActions.DESCRIBE_SECURITY_PROFILE,
		ConnectActions.DESCRIBE_TRAFFIC_DISTRIBUTION_GROUP,
		ConnectActions.DESCRIBE_USER,
		ConnectActions.DESCRIBE_USER_HIERARCHY_GROUP,
		ConnectActions.DESCRIBE_USER_HIERARCHY_STRUCTURE,
		ConnectActions.DESCRIBE_VIEW,
		ConnectActions.DESCRIBE_VOCABULARY,
		ConnectActions.DESCRIBE_WORKSPACE,
		ConnectActions.EVALUATE_DATA_TABLE_VALUES,
		ConnectActions.GET_ATTACHED_FILE,
		ConnectActions.GET_CONTACT_ATTRIBUTES,
		ConnectActions.GET_CONTACT_METRICS,
		ConnectActions.GET_CURRENT_METRIC_DATA,
		ConnectActions.GET_CURRENT_USER_DATA,
		ConnectActions.GET_EFFECTIVE_HOURS_OF_OPERATIONS,
		ConnectActions.GET_EVALUATION_FORM_VALIDATION,
		ConnectActions.GET_FEDERATION_TOKEN,
		ConnectActions.GET_FLOW_ASSOCIATION,
		ConnectActions.GET_METRIC_DATA,
		ConnectActions.GET_METRIC_DATA_V2,
		ConnectActions.GET_PROMPT_FILE,
		ConnectActions.GET_TASK_TEMPLATE,
		ConnectActions.LIST_NOTIFICATIONS,
		ConnectActions.LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS,
		ConnectActions.LIST_TAGS_FOR_RESOURCE,
		ConnectActions.LIST_USER_NOTIFICATIONS,
		ConnectActions.SEARCH_AGENT_STATUSES,
		ConnectActions.SEARCH_CONTACT_EVALUATIONS,
		ConnectActions.SEARCH_CONTACT_FLOW_MODULES,
		ConnectActions.SEARCH_CONTACT_FLOWS,
		ConnectActions.SEARCH_CONTACTS,
		ConnectActions.SEARCH_DATA_TABLES,
		ConnectActions.SEARCH_EMAIL_ADDRESSES,
		ConnectActions.SEARCH_EVALUATION_FORMS,
		ConnectActions.SEARCH_HOURS_OF_OPERATION_OVERRIDES,
		ConnectActions.SEARCH_HOURS_OF_OPERATIONS,
		ConnectActions.SEARCH_METRICS,
		ConnectActions.SEARCH_NOTIFICATIONS,
		ConnectActions.SEARCH_PREDEFINED_ATTRIBUTES,
		ConnectActions.SEARCH_PROMPTS,
		ConnectActions.SEARCH_QUEUES,
		ConnectActions.SEARCH_QUICK_CONNECTS,
		ConnectActions.SEARCH_ROUTING_PROFILES,
		ConnectActions.SEARCH_RULES,
		ConnectActions.SEARCH_SECURITY_PROFILES,
		ConnectActions.SEARCH_USER_HIERARCHY_GROUPS,
		ConnectActions.SEARCH_USERS,
		ConnectActions.SEARCH_VIEWS,
		ConnectActions.SEARCH_WORKSPACE_ASSOCIATIONS,
		ConnectActions.SEARCH_WORKSPACES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ConnectActions.ACTIVATE_EVALUATION_FORM,
		ConnectActions.ADMIN_GET_EMERGENCY_ACCESS_TOKEN,
		ConnectActions.ASSOCIATE_ANALYTICS_DATA_SET,
		ConnectActions.ASSOCIATE_APPROVED_ORIGIN,
		ConnectActions.ASSOCIATE_BOT,
		ConnectActions.ASSOCIATE_CONTACT_WITH_USER,
		ConnectActions.ASSOCIATE_CUSTOMER_PROFILES_DOMAIN,
		ConnectActions.ASSOCIATE_DEFAULT_VOCABULARY,
		ConnectActions.ASSOCIATE_EMAIL_ADDRESS_ALIAS,
		ConnectActions.ASSOCIATE_FLOW,
		ConnectActions.ASSOCIATE_INSTANCE_STORAGE_CONFIG,
		ConnectActions.ASSOCIATE_LAMBDA_FUNCTION,
		ConnectActions.ASSOCIATE_LEX_BOT,
		ConnectActions.ASSOCIATE_PHONE_NUMBER_CONTACT_FLOW,
		ConnectActions.ASSOCIATE_QUEUE_EMAIL_ADDRESSES,
		ConnectActions.ASSOCIATE_QUEUE_QUICK_CONNECTS,
		ConnectActions.ASSOCIATE_ROUTING_PROFILE_QUEUES,
		ConnectActions.ASSOCIATE_SECURITY_KEY,
		ConnectActions.ASSOCIATE_SECURITY_PROFILES,
		ConnectActions.ASSOCIATE_TRAFFIC_DISTRIBUTION_GROUP_USER,
		ConnectActions.ASSOCIATE_USER_PROFICIENCIES,
		ConnectActions.ASSOCIATE_WORKSPACE,
		ConnectActions.BATCH_ASSOCIATE_ANALYTICS_DATA_SET,
		ConnectActions.BATCH_CREATE_DATA_TABLE_VALUE,
		ConnectActions.BATCH_DELETE_DATA_TABLE_VALUE,
		ConnectActions.BATCH_DISASSOCIATE_ANALYTICS_DATA_SET,
		ConnectActions.BATCH_PUT_CONTACT,
		ConnectActions.BATCH_UPDATE_DATA_TABLE_VALUE,
		ConnectActions.CLAIM_PHONE_NUMBER,
		ConnectActions.COMPLETE_ATTACHED_FILE_UPLOAD,
		ConnectActions.CREATE_AGENT_STATUS,
		ConnectActions.CREATE_ATTACHED_FILE,
		ConnectActions.CREATE_AUTHENTICATION_PROFILE,
		ConnectActions.CREATE_CONTACT,
		ConnectActions.CREATE_CONTACT_FLOW,
		ConnectActions.CREATE_CONTACT_FLOW_MODULE,
		ConnectActions.CREATE_CONTACT_FLOW_MODULE_ALIAS,
		ConnectActions.CREATE_CONTACT_FLOW_MODULE_VERSION,
		ConnectActions.CREATE_CONTACT_FLOW_VERSION,
		ConnectActions.CREATE_DATA_TABLE,
		ConnectActions.CREATE_DATA_TABLE_ATTRIBUTE,
		ConnectActions.CREATE_EMAIL_ADDRESS,
		ConnectActions.CREATE_EVALUATION_FORM,
		ConnectActions.CREATE_HOURS_OF_OPERATION,
		ConnectActions.CREATE_HOURS_OF_OPERATION_OVERRIDE,
		ConnectActions.CREATE_INSTANCE,
		ConnectActions.CREATE_INTEGRATION_ASSOCIATION,
		ConnectActions.CREATE_METRIC,
		ConnectActions.CREATE_NOTIFICATION,
		ConnectActions.CREATE_PARTICIPANT,
		ConnectActions.CREATE_PERSISTENT_CONTACT_ASSOCIATION,
		ConnectActions.CREATE_PREDEFINED_ATTRIBUTE,
		ConnectActions.CREATE_PROMPT,
		ConnectActions.CREATE_PUSH_NOTIFICATION_REGISTRATION,
		ConnectActions.CREATE_QUEUE,
		ConnectActions.CREATE_QUICK_CONNECT,
		ConnectActions.CREATE_ROUTING_PROFILE,
		ConnectActions.CREATE_RULE,
		ConnectActions.CREATE_SECURITY_PROFILE,
		ConnectActions.CREATE_TASK_TEMPLATE,
		ConnectActions.CREATE_TRAFFIC_DISTRIBUTION_GROUP,
		ConnectActions.CREATE_USE_CASE,
		ConnectActions.CREATE_USER,
		ConnectActions.CREATE_USER_HIERARCHY_GROUP,
		ConnectActions.CREATE_VIEW,
		ConnectActions.CREATE_VIEW_VERSION,
		ConnectActions.CREATE_VOCABULARY,
		ConnectActions.CREATE_WORKSPACE,
		ConnectActions.CREATE_WORKSPACE_PAGE,
		ConnectActions.DEACTIVATE_EVALUATION_FORM,
		ConnectActions.DELETE_ATTACHED_FILE,
		ConnectActions.DELETE_CONTACT_EVALUATION,
		ConnectActions.DELETE_CONTACT_FLOW,
		ConnectActions.DELETE_CONTACT_FLOW_MODULE,
		ConnectActions.DELETE_CONTACT_FLOW_MODULE_ALIAS,
		ConnectActions.DELETE_CONTACT_FLOW_MODULE_VERSION,
		ConnectActions.DELETE_CONTACT_FLOW_VERSION,
		ConnectActions.DELETE_DATA_TABLE,
		ConnectActions.DELETE_DATA_TABLE_ATTRIBUTE,
		ConnectActions.DELETE_EMAIL_ADDRESS,
		ConnectActions.DELETE_EVALUATION_FORM,
		ConnectActions.DELETE_HOURS_OF_OPERATION,
		ConnectActions.DELETE_HOURS_OF_OPERATION_OVERRIDE,
		ConnectActions.DELETE_INSTANCE,
		ConnectActions.DELETE_INTEGRATION_ASSOCIATION,
		ConnectActions.DELETE_METRIC,
		ConnectActions.DELETE_NOTIFICATION,
		ConnectActions.DELETE_PREDEFINED_ATTRIBUTE,
		ConnectActions.DELETE_PROMPT,
		ConnectActions.DELETE_PUSH_NOTIFICATION_REGISTRATION,
		ConnectActions.DELETE_QUEUE,
		ConnectActions.DELETE_QUICK_CONNECT,
		ConnectActions.DELETE_ROUTING_PROFILE,
		ConnectActions.DELETE_RULE,
		ConnectActions.DELETE_SECURITY_PROFILE,
		ConnectActions.DELETE_TASK_TEMPLATE,
		ConnectActions.DELETE_TRAFFIC_DISTRIBUTION_GROUP,
		ConnectActions.DELETE_USE_CASE,
		ConnectActions.DELETE_USER,
		ConnectActions.DELETE_USER_HIERARCHY_GROUP,
		ConnectActions.DELETE_VIEW,
		ConnectActions.DELETE_VIEW_VERSION,
		ConnectActions.DELETE_VOCABULARY,
		ConnectActions.DELETE_WORKSPACE,
		ConnectActions.DELETE_WORKSPACE_MEDIA,
		ConnectActions.DELETE_WORKSPACE_PAGE,
		ConnectActions.DISASSOCIATE_ANALYTICS_DATA_SET,
		ConnectActions.DISASSOCIATE_APPROVED_ORIGIN,
		ConnectActions.DISASSOCIATE_BOT,
		ConnectActions.DISASSOCIATE_CUSTOMER_PROFILES_DOMAIN,
		ConnectActions.DISASSOCIATE_EMAIL_ADDRESS_ALIAS,
		ConnectActions.DISASSOCIATE_FLOW,
		ConnectActions.DISASSOCIATE_INSTANCE_STORAGE_CONFIG,
		ConnectActions.DISASSOCIATE_LAMBDA_FUNCTION,
		ConnectActions.DISASSOCIATE_LEX_BOT,
		ConnectActions.DISASSOCIATE_PHONE_NUMBER_CONTACT_FLOW,
		ConnectActions.DISASSOCIATE_QUEUE_EMAIL_ADDRESSES,
		ConnectActions.DISASSOCIATE_QUEUE_QUICK_CONNECTS,
		ConnectActions.DISASSOCIATE_ROUTING_PROFILE_QUEUES,
		ConnectActions.DISASSOCIATE_SECURITY_KEY,
		ConnectActions.DISASSOCIATE_SECURITY_PROFILES,
		ConnectActions.DISASSOCIATE_TRAFFIC_DISTRIBUTION_GROUP_USER,
		ConnectActions.DISASSOCIATE_USER_PROFICIENCIES,
		ConnectActions.DISASSOCIATE_WORKSPACE,
		ConnectActions.DISMISS_USER_CONTACT,
		ConnectActions.IMPORT_PHONE_NUMBER,
		ConnectActions.IMPORT_WORKSPACE_MEDIA,
		ConnectActions.MONITOR_CONTACT,
		ConnectActions.PAUSE_CONTACT,
		ConnectActions.PUT_USER_STATUS,
		ConnectActions.RELEASE_PHONE_NUMBER,
		ConnectActions.REPLICATE_INSTANCE,
		ConnectActions.RESUME_CONTACT,
		ConnectActions.RESUME_CONTACT_RECORDING,
		ConnectActions.SEND_CHAT_INTEGRATION_EVENT,
		ConnectActions.SEND_INTEGRATION_EVENT,
		ConnectActions.SEND_OUTBOUND_CHAT_MESSAGE,
		ConnectActions.SEND_OUTBOUND_EMAIL,
		ConnectActions.SEND_OUTBOUND_WEB_NOTIFICATION,
		ConnectActions.START_ATTACHED_FILE_UPLOAD,
		ConnectActions.START_CHAT_CONTACT,
		ConnectActions.START_CONTACT_CONVERSATIONAL_ANALYTICS_JOB,
		ConnectActions.START_CONTACT_EVALUATION,
		ConnectActions.START_CONTACT_MEDIA_PROCESSING,
		ConnectActions.START_CONTACT_RECORDING,
		ConnectActions.START_CONTACT_STREAMING,
		ConnectActions.START_EMAIL_CONTACT,
		ConnectActions.START_EVALUATION_FORM_VALIDATION,
		ConnectActions.START_FORECASTING_PLANNING_SCHEDULING_INTEGRATION,
		ConnectActions.START_OUTBOUND_CHAT_CONTACT,
		ConnectActions.START_OUTBOUND_EMAIL_CONTACT,
		ConnectActions.START_OUTBOUND_VOICE_CONTACT,
		ConnectActions.START_SCREEN_SHARING,
		ConnectActions.START_TASK_CONTACT,
		ConnectActions.START_WEB_RTC_CONTACT,
		ConnectActions.STOP_CONTACT,
		ConnectActions.STOP_CONTACT_MEDIA_PROCESSING,
		ConnectActions.STOP_CONTACT_RECORDING,
		ConnectActions.STOP_CONTACT_STREAMING,
		ConnectActions.STOP_FORECASTING_PLANNING_SCHEDULING_INTEGRATION,
		ConnectActions.SUBMIT_CONTACT_EVALUATION,
		ConnectActions.SUSPEND_CONTACT_RECORDING,
		ConnectActions.TAG_CONTACT,
		ConnectActions.TRANSFER_CONTACT,
		ConnectActions.UNTAG_CONTACT,
		ConnectActions.UPDATE_AGENT_STATUS,
		ConnectActions.UPDATE_ATTACHED_FILES_CONFIGURATION,
		ConnectActions.UPDATE_AUTHENTICATION_PROFILE,
		ConnectActions.UPDATE_CONTACT,
		ConnectActions.UPDATE_CONTACT_ATTRIBUTES,
		ConnectActions.UPDATE_CONTACT_EVALUATION,
		ConnectActions.UPDATE_CONTACT_FLOW_CONTENT,
		ConnectActions.UPDATE_CONTACT_FLOW_METADATA,
		ConnectActions.UPDATE_CONTACT_FLOW_MODULE_ALIAS,
		ConnectActions.UPDATE_CONTACT_FLOW_MODULE_CONTENT,
		ConnectActions.UPDATE_CONTACT_FLOW_MODULE_METADATA,
		ConnectActions.UPDATE_CONTACT_FLOW_NAME,
		ConnectActions.UPDATE_CONTACT_ROUTING_DATA,
		ConnectActions.UPDATE_CONTACT_SCHEDULE,
		ConnectActions.UPDATE_DATA_TABLE_ATTRIBUTE,
		ConnectActions.UPDATE_DATA_TABLE_METADATA,
		ConnectActions.UPDATE_DATA_TABLE_PRIMARY_VALUES,
		ConnectActions.UPDATE_EMAIL_ADDRESS_METADATA,
		ConnectActions.UPDATE_EVALUATION_FORM,
		ConnectActions.UPDATE_HOURS_OF_OPERATION,
		ConnectActions.UPDATE_HOURS_OF_OPERATION_OVERRIDE,
		ConnectActions.UPDATE_INSTANCE_ATTRIBUTE,
		ConnectActions.UPDATE_INSTANCE_STORAGE_CONFIG,
		ConnectActions.UPDATE_METRIC_CONTENT,
		ConnectActions.UPDATE_METRIC_METADATA,
		ConnectActions.UPDATE_NOTIFICATION_CONTENT,
		ConnectActions.UPDATE_PARTICIPANT_AUTHENTICATION,
		ConnectActions.UPDATE_PARTICIPANT_ROLE_CONFIG,
		ConnectActions.UPDATE_PHONE_NUMBER,
		ConnectActions.UPDATE_PHONE_NUMBER_METADATA,
		ConnectActions.UPDATE_PREDEFINED_ATTRIBUTE,
		ConnectActions.UPDATE_PROMPT,
		ConnectActions.UPDATE_QUEUE_HOURS_OF_OPERATION,
		ConnectActions.UPDATE_QUEUE_MAX_CONTACTS,
		ConnectActions.UPDATE_QUEUE_NAME,
		ConnectActions.UPDATE_QUEUE_OUTBOUND_CALLER_CONFIG,
		ConnectActions.UPDATE_QUEUE_OUTBOUND_EMAIL_CONFIG,
		ConnectActions.UPDATE_QUEUE_STATUS,
		ConnectActions.UPDATE_QUICK_CONNECT_CONFIG,
		ConnectActions.UPDATE_QUICK_CONNECT_NAME,
		ConnectActions.UPDATE_ROUTING_PROFILE_AGENT_AVAILABILITY_TIMER,
		ConnectActions.UPDATE_ROUTING_PROFILE_CONCURRENCY,
		ConnectActions.UPDATE_ROUTING_PROFILE_DEFAULT_OUTBOUND_QUEUE,
		ConnectActions.UPDATE_ROUTING_PROFILE_NAME,
		ConnectActions.UPDATE_ROUTING_PROFILE_QUEUES,
		ConnectActions.UPDATE_RULE,
		ConnectActions.UPDATE_SECURITY_PROFILE,
		ConnectActions.UPDATE_TASK_TEMPLATE,
		ConnectActions.UPDATE_TRAFFIC_DISTRIBUTION,
		ConnectActions.UPDATE_USER_HIERARCHY,
		ConnectActions.UPDATE_USER_HIERARCHY_GROUP_NAME,
		ConnectActions.UPDATE_USER_HIERARCHY_STRUCTURE,
		ConnectActions.UPDATE_USER_IDENTITY_INFO,
		ConnectActions.UPDATE_USER_NOTIFICATION_STATUS,
		ConnectActions.UPDATE_USER_PHONE_CONFIG,
		ConnectActions.UPDATE_USER_PROFICIENCIES,
		ConnectActions.UPDATE_USER_ROUTING_PROFILE,
		ConnectActions.UPDATE_USER_SECURITY_PROFILES,
		ConnectActions.UPDATE_VIEW_CONTENT,
		ConnectActions.UPDATE_VIEW_METADATA,
		ConnectActions.UPDATE_WORKSPACE_METADATA,
		ConnectActions.UPDATE_WORKSPACE_PAGE,
		ConnectActions.UPDATE_WORKSPACE_THEME,
		ConnectActions.UPDATE_WORKSPACE_VISIBILITY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ConnectActions.BATCH_GET_FLOW_ASSOCIATION,
		ConnectActions.GET_TRAFFIC_DISTRIBUTION,
		ConnectActions.LIST_AGENT_STATUSES,
		ConnectActions.LIST_ANALYTICS_DATA_ASSOCIATIONS,
		ConnectActions.LIST_ANALYTICS_DATA_LAKE_DATA_SETS,
		ConnectActions.LIST_APPROVED_ORIGINS,
		ConnectActions.LIST_ASSOCIATED_CONTACTS,
		ConnectActions.LIST_ATTACHED_FILES_CONFIGURATIONS,
		ConnectActions.LIST_AUTHENTICATION_PROFILES,
		ConnectActions.LIST_BOTS,
		ConnectActions.LIST_CONTACT_EVALUATIONS,
		ConnectActions.LIST_CONTACT_FLOW_MODULE_ALIASES,
		ConnectActions.LIST_CONTACT_FLOW_MODULE_VERSIONS,
		ConnectActions.LIST_CONTACT_FLOW_MODULES,
		ConnectActions.LIST_CONTACT_FLOW_VERSIONS,
		ConnectActions.LIST_CONTACT_FLOWS,
		ConnectActions.LIST_CONTACT_REFERENCES,
		ConnectActions.LIST_DATA_TABLE_ATTRIBUTES,
		ConnectActions.LIST_DATA_TABLE_PRIMARY_VALUES,
		ConnectActions.LIST_DATA_TABLE_VALUES,
		ConnectActions.LIST_DATA_TABLES,
		ConnectActions.LIST_DEFAULT_VOCABULARIES,
		ConnectActions.LIST_ENTITY_SECURITY_PROFILES,
		ConnectActions.LIST_EVALUATION_FORM_VERSIONS,
		ConnectActions.LIST_EVALUATION_FORMS,
		ConnectActions.LIST_FLOW_ASSOCIATIONS,
		ConnectActions.LIST_HOURS_OF_OPERATION_OVERRIDES,
		ConnectActions.LIST_HOURS_OF_OPERATIONS,
		ConnectActions.LIST_INSTANCE_ATTRIBUTES,
		ConnectActions.LIST_INSTANCE_STORAGE_CONFIGS,
		ConnectActions.LIST_INSTANCES,
		ConnectActions.LIST_INTEGRATION_ASSOCIATIONS,
		ConnectActions.LIST_LAMBDA_FUNCTIONS,
		ConnectActions.LIST_LEX_BOTS,
		ConnectActions.LIST_METRICS,
		ConnectActions.LIST_PHONE_NUMBERS,
		ConnectActions.LIST_PHONE_NUMBERS_V2,
		ConnectActions.LIST_PREDEFINED_ATTRIBUTES,
		ConnectActions.LIST_PROMPTS,
		ConnectActions.LIST_QUEUE_EMAIL_ADDRESSES,
		ConnectActions.LIST_QUEUE_QUICK_CONNECTS,
		ConnectActions.LIST_QUEUES,
		ConnectActions.LIST_QUICK_CONNECTS,
		ConnectActions.LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_V2,
		ConnectActions.LIST_ROUTING_PROFILE_MANUAL_ASSIGNMENT_QUEUES,
		ConnectActions.LIST_ROUTING_PROFILE_QUEUES,
		ConnectActions.LIST_ROUTING_PROFILES,
		ConnectActions.LIST_RULES,
		ConnectActions.LIST_SECURITY_KEYS,
		ConnectActions.LIST_SECURITY_PROFILE_APPLICATIONS,
		ConnectActions.LIST_SECURITY_PROFILE_FLOW_MODULES,
		ConnectActions.LIST_SECURITY_PROFILE_PERMISSIONS,
		ConnectActions.LIST_SECURITY_PROFILES,
		ConnectActions.LIST_TASK_TEMPLATES,
		ConnectActions.LIST_TRAFFIC_DISTRIBUTION_GROUP_USERS,
		ConnectActions.LIST_TRAFFIC_DISTRIBUTION_GROUPS,
		ConnectActions.LIST_USE_CASES,
		ConnectActions.LIST_USER_HIERARCHY_GROUPS,
		ConnectActions.LIST_USER_PROFICIENCIES,
		ConnectActions.LIST_USERS,
		ConnectActions.LIST_VIEW_VERSIONS,
		ConnectActions.LIST_VIEWS,
		ConnectActions.LIST_WORKSPACE_MEDIA,
		ConnectActions.LIST_WORKSPACE_PAGES,
		ConnectActions.LIST_WORKSPACES,
		ConnectActions.SEARCH_AVAILABLE_PHONE_NUMBERS,
		ConnectActions.SEARCH_RESOURCE_TAGS,
		ConnectActions.SEARCH_VOCABULARIES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ConnectActions.TAG_RESOURCE,
		ConnectActions.UNTAG_RESOURCE,
	];
}

const AgentStatusArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/agent-state/(?<agentStatusId>[^:/?]+)$",
);
const AiAgentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):ai-agent/(?<assistantId>[^:/?]+)/(?<aiAgentId>[^:/?]+):(?<version>[^:/?]+)$",
);
const AttachedFileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/file/(?<fileId>[^:/?]+)$",
);
const AuthenticationProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/authentication-profile/(?<authenticationProfileId>[^:/?]+)$",
);
const AWSManagedViewArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):aws:view/(?<viewId>[^:/?]+)$",
);
const ContactArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/contact/(?<contactId>[^:/?]+)$",
);
const ContactEvaluationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/contact-evaluation/(?<evaluationId>[^:/?]+)$",
);
const ContactFlowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/contact-flow/(?<contactFlowId>[^:/?]+)$",
);
const ContactFlowModuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/flow-module/(?<contactFlowModuleId>[^:/?]+)$",
);
const CustomerManagedViewArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/view/(?<viewId>[^:/?]+)$",
);
const CustomerManagedViewVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/view/(?<viewId>[^:/?]+):(?<viewVersion>[^:/?]+)$",
);
const DataTableArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/data-table/(?<dataTableId>[^:/?]+)$",
);
const EmailAddressArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/email-address/(?<emailAddressId>[^:/?]+)$",
);
const EvaluationFormArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/evaluation-form/(?<formId>[^:/?]+)$",
);
const HierarchyGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/agent-group/(?<hierarchyGroupId>[^:/?]+)$",
);
const HoursOfOperationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/operating-hours/(?<hoursOfOperationId>[^:/?]+)$",
);
const InstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)$",
);
const IntegrationAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/integration-association/(?<integrationAssociationId>[^:/?]+)$",
);
const LegacyPhoneNumberArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/phone-number/(?<phoneNumberId>[^:/?]+)$",
);
const MetricArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/metric/(?<metricId>[^:/?]+)$",
);
const NotificationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/notification/(?<notificationId>[^:/?]+)$",
);
const PhoneNumberArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):phone-number/(?<phoneNumberId>[^:/?]+)$",
);
const PromptArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/prompt/(?<promptId>[^:/?]+)$",
);
const QualifiedAWSManagedViewArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):aws:view/(?<viewId>[^:/?]+):(?<viewQualifier>[^:/?]+)$",
);
const QualifiedCustomerManagedViewArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/view/(?<viewId>[^:/?]+):(?<viewQualifier>[^:/?]+)$",
);
const QualifiedMetricArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/metric/(?<metricId>[^:/?]+):(?<metricQualifier>[^:/?]+)$",
);
const QueueArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/queue/(?<queueId>[^:/?]+)$",
);
const QuickConnectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/transfer-destination/(?<quickConnectId>[^:/?]+)$",
);
const RoutingProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/routing-profile/(?<routingProfileId>[^:/?]+)$",
);
const RuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/rule/(?<ruleId>[^:/?]+)$",
);
const SecurityProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/security-profile/(?<securityProfileId>[^:/?]+)$",
);
const TaskTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/task-template/(?<taskTemplateId>[^:/?]+)$",
);
const TrafficDistributionGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):traffic-distribution-group/(?<trafficDistributionGroupId>[^:/?]+)$",
);
const UseCaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/use-case/(?<useCaseId>[^:/?]+)$",
);
const UserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/agent/(?<userId>[^:/?]+)$",
);
const VocabularyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/vocabulary/(?<vocabularyId>[^:/?]+)$",
);
const WildcardAgentStatusArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/agent-state/.*$",
);
const WildcardContactFlowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/contact-flow/.*$",
);
const WildcardLegacyPhoneNumberArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/phone-number/.*$",
);
const WildcardPhoneNumberArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):phone-number/.*$",
);
const WildcardQueueArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/queue/.*$",
);
const WildcardQuickConnectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/transfer-destination/.*$",
);
const WorkspaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/workspace/(?<workspaceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for connect resources.
 */
export class ConnectResources {
	/**
	 * Builds an ARN for the agent-status resource.
	 */
	static agentStatus(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The AgentStatusId component of the ARN. */
		readonly agentStatusId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/agent-state/${props.agentStatusId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agent-status resource.
	 */
	static isValidAgentStatusArn(arn: string): boolean {
		return AgentStatusArnRegex.test(arn);
	}

	/**
	 * Parses a agent-status ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentStatusArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		agentStatusId: string;
	} {
		const match = AgentStatusArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agent-status ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			agentStatusId: match.groups!.agentStatusId,
		};
	}

	/**
	 * Builds an ARN for the ai-agent resource.
	 */
	static aiAgent(props: {
		/** The AssistantId component of the ARN. */
		readonly assistantId: string;
		/** The AIAgentId component of the ARN. */
		readonly aiAgentId: string;
		/** The Version component of the ARN. */
		readonly version: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wisdom:${props.region ?? "*"}:${props.account ?? "*"}:ai-agent/${props.assistantId}/${props.aiAgentId}:${props.version}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ai-agent resource.
	 */
	static isValidAiAgentArn(arn: string): boolean {
		return AiAgentArnRegex.test(arn);
	}

	/**
	 * Parses a ai-agent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAiAgentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		assistantId: string;
		aiAgentId: string;
		version: string;
	} {
		const match = AiAgentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ai-agent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assistantId: match.groups!.assistantId,
			aiAgentId: match.groups!.aiAgentId,
			version: match.groups!.version,
		};
	}

	/**
	 * Builds an ARN for the attached-file resource.
	 */
	static attachedFile(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The FileId component of the ARN. */
		readonly fileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/file/${props.fileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the attached-file resource.
	 */
	static isValidAttachedFileArn(arn: string): boolean {
		return AttachedFileArnRegex.test(arn);
	}

	/**
	 * Parses a attached-file ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAttachedFileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		fileId: string;
	} {
		const match = AttachedFileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid attached-file ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			fileId: match.groups!.fileId,
		};
	}

	/**
	 * Builds an ARN for the authentication-profile resource.
	 */
	static authenticationProfile(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The AuthenticationProfileId component of the ARN. */
		readonly authenticationProfileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/authentication-profile/${props.authenticationProfileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the authentication-profile resource.
	 */
	static isValidAuthenticationProfileArn(arn: string): boolean {
		return AuthenticationProfileArnRegex.test(arn);
	}

	/**
	 * Parses a authentication-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAuthenticationProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		authenticationProfileId: string;
	} {
		const match = AuthenticationProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid authentication-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			authenticationProfileId: match.groups!.authenticationProfileId,
		};
	}

	/**
	 * Builds an ARN for the aws-managed-view resource.
	 */
	static awsManagedView(props: {
		/** The ViewId component of the ARN. */
		readonly viewId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:aws:view/${props.viewId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the aws-managed-view resource.
	 */
	static isValidAWSManagedViewArn(arn: string): boolean {
		return AWSManagedViewArnRegex.test(arn);
	}

	/**
	 * Parses a aws-managed-view ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAWSManagedViewArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		viewId: string;
	} {
		const match = AWSManagedViewArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid aws-managed-view ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			viewId: match.groups!.viewId,
		};
	}

	/**
	 * Builds an ARN for the contact resource.
	 */
	static contact(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The ContactId component of the ARN. */
		readonly contactId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/contact/${props.contactId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the contact resource.
	 */
	static isValidContactArn(arn: string): boolean {
		return ContactArnRegex.test(arn);
	}

	/**
	 * Parses a contact ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContactArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		contactId: string;
	} {
		const match = ContactArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid contact ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			contactId: match.groups!.contactId,
		};
	}

	/**
	 * Builds an ARN for the contact-evaluation resource.
	 */
	static contactEvaluation(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The EvaluationId component of the ARN. */
		readonly evaluationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/contact-evaluation/${props.evaluationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the contact-evaluation resource.
	 */
	static isValidContactEvaluationArn(arn: string): boolean {
		return ContactEvaluationArnRegex.test(arn);
	}

	/**
	 * Parses a contact-evaluation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContactEvaluationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		evaluationId: string;
	} {
		const match = ContactEvaluationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid contact-evaluation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			evaluationId: match.groups!.evaluationId,
		};
	}

	/**
	 * Builds an ARN for the contact-flow resource.
	 */
	static contactFlow(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The ContactFlowId component of the ARN. */
		readonly contactFlowId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/contact-flow/${props.contactFlowId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the contact-flow resource.
	 */
	static isValidContactFlowArn(arn: string): boolean {
		return ContactFlowArnRegex.test(arn);
	}

	/**
	 * Parses a contact-flow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContactFlowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		contactFlowId: string;
	} {
		const match = ContactFlowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid contact-flow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			contactFlowId: match.groups!.contactFlowId,
		};
	}

	/**
	 * Builds an ARN for the contact-flow-module resource.
	 */
	static contactFlowModule(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The ContactFlowModuleId component of the ARN. */
		readonly contactFlowModuleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/flow-module/${props.contactFlowModuleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the contact-flow-module resource.
	 */
	static isValidContactFlowModuleArn(arn: string): boolean {
		return ContactFlowModuleArnRegex.test(arn);
	}

	/**
	 * Parses a contact-flow-module ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContactFlowModuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		contactFlowModuleId: string;
	} {
		const match = ContactFlowModuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid contact-flow-module ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			contactFlowModuleId: match.groups!.contactFlowModuleId,
		};
	}

	/**
	 * Builds an ARN for the customer-managed-view resource.
	 */
	static customerManagedView(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The ViewId component of the ARN. */
		readonly viewId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/view/${props.viewId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the customer-managed-view resource.
	 */
	static isValidCustomerManagedViewArn(arn: string): boolean {
		return CustomerManagedViewArnRegex.test(arn);
	}

	/**
	 * Parses a customer-managed-view ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomerManagedViewArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		viewId: string;
	} {
		const match = CustomerManagedViewArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid customer-managed-view ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			viewId: match.groups!.viewId,
		};
	}

	/**
	 * Builds an ARN for the customer-managed-view-version resource.
	 */
	static customerManagedViewVersion(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The ViewId component of the ARN. */
		readonly viewId: string;
		/** The ViewVersion component of the ARN. */
		readonly viewVersion: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/view/${props.viewId}:${props.viewVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the customer-managed-view-version resource.
	 */
	static isValidCustomerManagedViewVersionArn(arn: string): boolean {
		return CustomerManagedViewVersionArnRegex.test(arn);
	}

	/**
	 * Parses a customer-managed-view-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomerManagedViewVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		viewId: string;
		viewVersion: string;
	} {
		const match = CustomerManagedViewVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid customer-managed-view-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			viewId: match.groups!.viewId,
			viewVersion: match.groups!.viewVersion,
		};
	}

	/**
	 * Builds an ARN for the data-table resource.
	 */
	static dataTable(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The DataTableId component of the ARN. */
		readonly dataTableId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/data-table/${props.dataTableId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-table resource.
	 */
	static isValidDataTableArn(arn: string): boolean {
		return DataTableArnRegex.test(arn);
	}

	/**
	 * Parses a data-table ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataTableArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		dataTableId: string;
	} {
		const match = DataTableArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-table ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			dataTableId: match.groups!.dataTableId,
		};
	}

	/**
	 * Builds an ARN for the email-address resource.
	 */
	static emailAddress(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The EmailAddressId component of the ARN. */
		readonly emailAddressId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/email-address/${props.emailAddressId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the email-address resource.
	 */
	static isValidEmailAddressArn(arn: string): boolean {
		return EmailAddressArnRegex.test(arn);
	}

	/**
	 * Parses a email-address ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEmailAddressArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		emailAddressId: string;
	} {
		const match = EmailAddressArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid email-address ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			emailAddressId: match.groups!.emailAddressId,
		};
	}

	/**
	 * Builds an ARN for the evaluation-form resource.
	 */
	static evaluationForm(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The FormId component of the ARN. */
		readonly formId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/evaluation-form/${props.formId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the evaluation-form resource.
	 */
	static isValidEvaluationFormArn(arn: string): boolean {
		return EvaluationFormArnRegex.test(arn);
	}

	/**
	 * Parses a evaluation-form ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEvaluationFormArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		formId: string;
	} {
		const match = EvaluationFormArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid evaluation-form ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			formId: match.groups!.formId,
		};
	}

	/**
	 * Builds an ARN for the hierarchy-group resource.
	 */
	static hierarchyGroup(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The HierarchyGroupId component of the ARN. */
		readonly hierarchyGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/agent-group/${props.hierarchyGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the hierarchy-group resource.
	 */
	static isValidHierarchyGroupArn(arn: string): boolean {
		return HierarchyGroupArnRegex.test(arn);
	}

	/**
	 * Parses a hierarchy-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHierarchyGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		hierarchyGroupId: string;
	} {
		const match = HierarchyGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid hierarchy-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			hierarchyGroupId: match.groups!.hierarchyGroupId,
		};
	}

	/**
	 * Builds an ARN for the hours-of-operation resource.
	 */
	static hoursOfOperation(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The HoursOfOperationId component of the ARN. */
		readonly hoursOfOperationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/operating-hours/${props.hoursOfOperationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the hours-of-operation resource.
	 */
	static isValidHoursOfOperationArn(arn: string): boolean {
		return HoursOfOperationArnRegex.test(arn);
	}

	/**
	 * Parses a hours-of-operation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHoursOfOperationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		hoursOfOperationId: string;
	} {
		const match = HoursOfOperationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid hours-of-operation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			hoursOfOperationId: match.groups!.hoursOfOperationId,
		};
	}

	/**
	 * Builds an ARN for the instance resource.
	 */
	static instance(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the instance resource.
	 */
	static isValidInstanceArn(arn: string): boolean {
		return InstanceArnRegex.test(arn);
	}

	/**
	 * Parses a instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
	} {
		const match = InstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
		};
	}

	/**
	 * Builds an ARN for the integration-association resource.
	 */
	static integrationAssociation(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The IntegrationAssociationId component of the ARN. */
		readonly integrationAssociationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/integration-association/${props.integrationAssociationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the integration-association resource.
	 */
	static isValidIntegrationAssociationArn(arn: string): boolean {
		return IntegrationAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a integration-association ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntegrationAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		integrationAssociationId: string;
	} {
		const match = IntegrationAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid integration-association ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			integrationAssociationId: match.groups!.integrationAssociationId,
		};
	}

	/**
	 * Builds an ARN for the legacy-phone-number resource.
	 */
	static legacyPhoneNumber(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The PhoneNumberId component of the ARN. */
		readonly phoneNumberId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/phone-number/${props.phoneNumberId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the legacy-phone-number resource.
	 */
	static isValidLegacyPhoneNumberArn(arn: string): boolean {
		return LegacyPhoneNumberArnRegex.test(arn);
	}

	/**
	 * Parses a legacy-phone-number ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLegacyPhoneNumberArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		phoneNumberId: string;
	} {
		const match = LegacyPhoneNumberArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid legacy-phone-number ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			phoneNumberId: match.groups!.phoneNumberId,
		};
	}

	/**
	 * Builds an ARN for the metric resource.
	 */
	static metric(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The MetricId component of the ARN. */
		readonly metricId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/metric/${props.metricId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the metric resource.
	 */
	static isValidMetricArn(arn: string): boolean {
		return MetricArnRegex.test(arn);
	}

	/**
	 * Parses a metric ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMetricArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		metricId: string;
	} {
		const match = MetricArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid metric ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			metricId: match.groups!.metricId,
		};
	}

	/**
	 * Builds an ARN for the notification resource.
	 */
	static notification(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The NotificationId component of the ARN. */
		readonly notificationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/notification/${props.notificationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the notification resource.
	 */
	static isValidNotificationArn(arn: string): boolean {
		return NotificationArnRegex.test(arn);
	}

	/**
	 * Parses a notification ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNotificationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		notificationId: string;
	} {
		const match = NotificationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid notification ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			notificationId: match.groups!.notificationId,
		};
	}

	/**
	 * Builds an ARN for the phone-number resource.
	 */
	static phoneNumber(props: {
		/** The PhoneNumberId component of the ARN. */
		readonly phoneNumberId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:phone-number/${props.phoneNumberId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the phone-number resource.
	 */
	static isValidPhoneNumberArn(arn: string): boolean {
		return PhoneNumberArnRegex.test(arn);
	}

	/**
	 * Parses a phone-number ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePhoneNumberArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		phoneNumberId: string;
	} {
		const match = PhoneNumberArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid phone-number ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			phoneNumberId: match.groups!.phoneNumberId,
		};
	}

	/**
	 * Builds an ARN for the prompt resource.
	 */
	static prompt(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The PromptId component of the ARN. */
		readonly promptId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/prompt/${props.promptId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the prompt resource.
	 */
	static isValidPromptArn(arn: string): boolean {
		return PromptArnRegex.test(arn);
	}

	/**
	 * Parses a prompt ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePromptArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		promptId: string;
	} {
		const match = PromptArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid prompt ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			promptId: match.groups!.promptId,
		};
	}

	/**
	 * Builds an ARN for the qualified-aws-managed-view resource.
	 */
	static qualifiedAWSManagedView(props: {
		/** The ViewId component of the ARN. */
		readonly viewId: string;
		/** The ViewQualifier component of the ARN. */
		readonly viewQualifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:aws:view/${props.viewId}:${props.viewQualifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the qualified-aws-managed-view resource.
	 */
	static isValidQualifiedAWSManagedViewArn(arn: string): boolean {
		return QualifiedAWSManagedViewArnRegex.test(arn);
	}

	/**
	 * Parses a qualified-aws-managed-view ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQualifiedAWSManagedViewArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		viewId: string;
		viewQualifier: string;
	} {
		const match = QualifiedAWSManagedViewArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid qualified-aws-managed-view ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			viewId: match.groups!.viewId,
			viewQualifier: match.groups!.viewQualifier,
		};
	}

	/**
	 * Builds an ARN for the qualified-customer-managed-view resource.
	 */
	static qualifiedCustomerManagedView(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The ViewId component of the ARN. */
		readonly viewId: string;
		/** The ViewQualifier component of the ARN. */
		readonly viewQualifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/view/${props.viewId}:${props.viewQualifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the qualified-customer-managed-view resource.
	 */
	static isValidQualifiedCustomerManagedViewArn(arn: string): boolean {
		return QualifiedCustomerManagedViewArnRegex.test(arn);
	}

	/**
	 * Parses a qualified-customer-managed-view ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQualifiedCustomerManagedViewArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		viewId: string;
		viewQualifier: string;
	} {
		const match = QualifiedCustomerManagedViewArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid qualified-customer-managed-view ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			viewId: match.groups!.viewId,
			viewQualifier: match.groups!.viewQualifier,
		};
	}

	/**
	 * Builds an ARN for the qualified-metric resource.
	 */
	static qualifiedMetric(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The MetricId component of the ARN. */
		readonly metricId: string;
		/** The MetricQualifier component of the ARN. */
		readonly metricQualifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/metric/${props.metricId}:${props.metricQualifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the qualified-metric resource.
	 */
	static isValidQualifiedMetricArn(arn: string): boolean {
		return QualifiedMetricArnRegex.test(arn);
	}

	/**
	 * Parses a qualified-metric ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQualifiedMetricArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		metricId: string;
		metricQualifier: string;
	} {
		const match = QualifiedMetricArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid qualified-metric ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			metricId: match.groups!.metricId,
			metricQualifier: match.groups!.metricQualifier,
		};
	}

	/**
	 * Builds an ARN for the queue resource.
	 */
	static queue(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The QueueId component of the ARN. */
		readonly queueId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/queue/${props.queueId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the queue resource.
	 */
	static isValidQueueArn(arn: string): boolean {
		return QueueArnRegex.test(arn);
	}

	/**
	 * Parses a queue ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQueueArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		queueId: string;
	} {
		const match = QueueArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid queue ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			queueId: match.groups!.queueId,
		};
	}

	/**
	 * Builds an ARN for the quick-connect resource.
	 */
	static quickConnect(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The QuickConnectId component of the ARN. */
		readonly quickConnectId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/transfer-destination/${props.quickConnectId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the quick-connect resource.
	 */
	static isValidQuickConnectArn(arn: string): boolean {
		return QuickConnectArnRegex.test(arn);
	}

	/**
	 * Parses a quick-connect ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQuickConnectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		quickConnectId: string;
	} {
		const match = QuickConnectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid quick-connect ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			quickConnectId: match.groups!.quickConnectId,
		};
	}

	/**
	 * Builds an ARN for the routing-profile resource.
	 */
	static routingProfile(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The RoutingProfileId component of the ARN. */
		readonly routingProfileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/routing-profile/${props.routingProfileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the routing-profile resource.
	 */
	static isValidRoutingProfileArn(arn: string): boolean {
		return RoutingProfileArnRegex.test(arn);
	}

	/**
	 * Parses a routing-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRoutingProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		routingProfileId: string;
	} {
		const match = RoutingProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid routing-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			routingProfileId: match.groups!.routingProfileId,
		};
	}

	/**
	 * Builds an ARN for the rule resource.
	 */
	static rule(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The RuleId component of the ARN. */
		readonly ruleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/rule/${props.ruleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rule resource.
	 */
	static isValidRuleArn(arn: string): boolean {
		return RuleArnRegex.test(arn);
	}

	/**
	 * Parses a rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		ruleId: string;
	} {
		const match = RuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			ruleId: match.groups!.ruleId,
		};
	}

	/**
	 * Builds an ARN for the security-profile resource.
	 */
	static securityProfile(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The SecurityProfileId component of the ARN. */
		readonly securityProfileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/security-profile/${props.securityProfileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the security-profile resource.
	 */
	static isValidSecurityProfileArn(arn: string): boolean {
		return SecurityProfileArnRegex.test(arn);
	}

	/**
	 * Parses a security-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSecurityProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		securityProfileId: string;
	} {
		const match = SecurityProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid security-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			securityProfileId: match.groups!.securityProfileId,
		};
	}

	/**
	 * Builds an ARN for the task-template resource.
	 */
	static taskTemplate(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The TaskTemplateId component of the ARN. */
		readonly taskTemplateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/task-template/${props.taskTemplateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the task-template resource.
	 */
	static isValidTaskTemplateArn(arn: string): boolean {
		return TaskTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a task-template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTaskTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		taskTemplateId: string;
	} {
		const match = TaskTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid task-template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			taskTemplateId: match.groups!.taskTemplateId,
		};
	}

	/**
	 * Builds an ARN for the traffic-distribution-group resource.
	 */
	static trafficDistributionGroup(props: {
		/** The TrafficDistributionGroupId component of the ARN. */
		readonly trafficDistributionGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:traffic-distribution-group/${props.trafficDistributionGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the traffic-distribution-group resource.
	 */
	static isValidTrafficDistributionGroupArn(arn: string): boolean {
		return TrafficDistributionGroupArnRegex.test(arn);
	}

	/**
	 * Parses a traffic-distribution-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTrafficDistributionGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		trafficDistributionGroupId: string;
	} {
		const match = TrafficDistributionGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid traffic-distribution-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			trafficDistributionGroupId: match.groups!.trafficDistributionGroupId,
		};
	}

	/**
	 * Builds an ARN for the use-case resource.
	 */
	static useCase(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The UseCaseId component of the ARN. */
		readonly useCaseId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/use-case/${props.useCaseId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the use-case resource.
	 */
	static isValidUseCaseArn(arn: string): boolean {
		return UseCaseArnRegex.test(arn);
	}

	/**
	 * Parses a use-case ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUseCaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		useCaseId: string;
	} {
		const match = UseCaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid use-case ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			useCaseId: match.groups!.useCaseId,
		};
	}

	/**
	 * Builds an ARN for the user resource.
	 */
	static user(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The UserId component of the ARN. */
		readonly userId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/agent/${props.userId}`;
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
		instanceId: string;
		userId: string;
	} {
		const match = UserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			userId: match.groups!.userId,
		};
	}

	/**
	 * Builds an ARN for the vocabulary resource.
	 */
	static vocabulary(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The VocabularyId component of the ARN. */
		readonly vocabularyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/vocabulary/${props.vocabularyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vocabulary resource.
	 */
	static isValidVocabularyArn(arn: string): boolean {
		return VocabularyArnRegex.test(arn);
	}

	/**
	 * Parses a vocabulary ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVocabularyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		vocabularyId: string;
	} {
		const match = VocabularyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vocabulary ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			vocabularyId: match.groups!.vocabularyId,
		};
	}

	/**
	 * Builds an ARN for the wildcard-agent-status resource.
	 */
	static wildcardAgentStatus(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/agent-state/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the wildcard-agent-status resource.
	 */
	static isValidWildcardAgentStatusArn(arn: string): boolean {
		return WildcardAgentStatusArnRegex.test(arn);
	}

	/**
	 * Parses a wildcard-agent-status ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWildcardAgentStatusArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
	} {
		const match = WildcardAgentStatusArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid wildcard-agent-status ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
		};
	}

	/**
	 * Builds an ARN for the wildcard-contact-flow resource.
	 */
	static wildcardContactFlow(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/contact-flow/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the wildcard-contact-flow resource.
	 */
	static isValidWildcardContactFlowArn(arn: string): boolean {
		return WildcardContactFlowArnRegex.test(arn);
	}

	/**
	 * Parses a wildcard-contact-flow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWildcardContactFlowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
	} {
		const match = WildcardContactFlowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid wildcard-contact-flow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
		};
	}

	/**
	 * Builds an ARN for the wildcard-legacy-phone-number resource.
	 */
	static wildcardLegacyPhoneNumber(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/phone-number/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the wildcard-legacy-phone-number resource.
	 */
	static isValidWildcardLegacyPhoneNumberArn(arn: string): boolean {
		return WildcardLegacyPhoneNumberArnRegex.test(arn);
	}

	/**
	 * Parses a wildcard-legacy-phone-number ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWildcardLegacyPhoneNumberArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
	} {
		const match = WildcardLegacyPhoneNumberArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid wildcard-legacy-phone-number ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
		};
	}

	/**
	 * Builds an ARN for the wildcard-phone-number resource.
	 */
	static wildcardPhoneNumber(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:phone-number/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the wildcard-phone-number resource.
	 */
	static isValidWildcardPhoneNumberArn(arn: string): boolean {
		return WildcardPhoneNumberArnRegex.test(arn);
	}

	/**
	 * Parses a wildcard-phone-number ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWildcardPhoneNumberArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = WildcardPhoneNumberArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid wildcard-phone-number ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the wildcard-queue resource.
	 */
	static wildcardQueue(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/queue/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the wildcard-queue resource.
	 */
	static isValidWildcardQueueArn(arn: string): boolean {
		return WildcardQueueArnRegex.test(arn);
	}

	/**
	 * Parses a wildcard-queue ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWildcardQueueArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
	} {
		const match = WildcardQueueArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid wildcard-queue ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
		};
	}

	/**
	 * Builds an ARN for the wildcard-quick-connect resource.
	 */
	static wildcardQuickConnect(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/transfer-destination/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the wildcard-quick-connect resource.
	 */
	static isValidWildcardQuickConnectArn(arn: string): boolean {
		return WildcardQuickConnectArnRegex.test(arn);
	}

	/**
	 * Parses a wildcard-quick-connect ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWildcardQuickConnectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
	} {
		const match = WildcardQuickConnectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid wildcard-quick-connect ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
		};
	}

	/**
	 * Builds an ARN for the workspace resource.
	 */
	static workspace(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The WorkspaceId component of the ARN. */
		readonly workspaceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:connect:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/workspace/${props.workspaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workspace resource.
	 */
	static isValidWorkspaceArn(arn: string): boolean {
		return WorkspaceArnRegex.test(arn);
	}

	/**
	 * Parses a workspace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkspaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		workspaceId: string;
	} {
		const match = WorkspaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workspace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			workspaceId: match.groups!.workspaceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for connect.
 */
export class ConnectOperations {
	/** IAM actions required for the ActivateEvaluationForm API call. */
	static readonly ACTIVATE_EVALUATION_FORM: string[] = [
		"connect:ActivateEvaluationForm",
	];
	/** IAM actions required for the AssociateAnalyticsDataSet API call. */
	static readonly ASSOCIATE_ANALYTICS_DATA_SET: string[] = [
		"connect:AssociateAnalyticsDataSet",
	];
	/** IAM actions required for the AssociateApprovedOrigin API call. */
	static readonly ASSOCIATE_APPROVED_ORIGIN: string[] = [
		"connect:AssociateApprovedOrigin",
	];
	/** IAM actions required for the AssociateBot API call. */
	static readonly ASSOCIATE_BOT: string[] = ["connect:AssociateBot"];
	/** IAM actions required for the AssociateContactWithUser API call. */
	static readonly ASSOCIATE_CONTACT_WITH_USER: string[] = [
		"connect:AssociateContactWithUser",
	];
	/** IAM actions required for the AssociateDefaultVocabulary API call. */
	static readonly ASSOCIATE_DEFAULT_VOCABULARY: string[] = [
		"connect:AssociateDefaultVocabulary",
	];
	/** IAM actions required for the AssociateEmailAddressAlias API call. */
	static readonly ASSOCIATE_EMAIL_ADDRESS_ALIAS: string[] = [
		"connect:AssociateEmailAddressAlias",
	];
	/** IAM actions required for the AssociateFlow API call. */
	static readonly ASSOCIATE_FLOW: string[] = ["connect:AssociateFlow"];
	/** IAM actions required for the AssociateHoursOfOperations API call. */
	static readonly ASSOCIATE_HOURS_OF_OPERATIONS: string[] = [];
	/** IAM actions required for the AssociateInstanceStorageConfig API call. */
	static readonly ASSOCIATE_INSTANCE_STORAGE_CONFIG: string[] = [
		"connect:AssociateInstanceStorageConfig",
	];
	/** IAM actions required for the AssociateLambdaFunction API call. */
	static readonly ASSOCIATE_LAMBDA_FUNCTION: string[] = [
		"connect:AssociateLambdaFunction",
	];
	/** IAM actions required for the AssociateLexBot API call. */
	static readonly ASSOCIATE_LEX_BOT: string[] = ["connect:AssociateLexBot"];
	/** IAM actions required for the AssociatePhoneNumberContactFlow API call. */
	static readonly ASSOCIATE_PHONE_NUMBER_CONTACT_FLOW: string[] = [
		"connect:AssociatePhoneNumberContactFlow",
	];
	/** IAM actions required for the AssociateQueueEmailAddresses API call. */
	static readonly ASSOCIATE_QUEUE_EMAIL_ADDRESSES: string[] = [
		"connect:AssociateQueueEmailAddresses",
	];
	/** IAM actions required for the AssociateQueueQuickConnects API call. */
	static readonly ASSOCIATE_QUEUE_QUICK_CONNECTS: string[] = [
		"connect:AssociateQueueQuickConnects",
	];
	/** IAM actions required for the AssociateRoutingProfileQueues API call. */
	static readonly ASSOCIATE_ROUTING_PROFILE_QUEUES: string[] = [
		"connect:AssociateRoutingProfileQueues",
	];
	/** IAM actions required for the AssociateSecurityKey API call. */
	static readonly ASSOCIATE_SECURITY_KEY: string[] = [
		"connect:AssociateSecurityKey",
	];
	/** IAM actions required for the AssociateSecurityProfiles API call. */
	static readonly ASSOCIATE_SECURITY_PROFILES: string[] = [
		"connect:AssociateSecurityProfiles",
	];
	/** IAM actions required for the AssociateTrafficDistributionGroupUser API call. */
	static readonly ASSOCIATE_TRAFFIC_DISTRIBUTION_GROUP_USER: string[] = [
		"connect:AssociateTrafficDistributionGroupUser",
	];
	/** IAM actions required for the AssociateUserProficiencies API call. */
	static readonly ASSOCIATE_USER_PROFICIENCIES: string[] = [
		"connect:AssociateUserProficiencies",
	];
	/** IAM actions required for the AssociateWorkspace API call. */
	static readonly ASSOCIATE_WORKSPACE: string[] = [
		"connect:AssociateWorkspace",
	];
	/** IAM actions required for the BatchAssociateAnalyticsDataSet API call. */
	static readonly BATCH_ASSOCIATE_ANALYTICS_DATA_SET: string[] = [
		"connect:BatchAssociateAnalyticsDataSet",
	];
	/** IAM actions required for the BatchCreateDataTableValue API call. */
	static readonly BATCH_CREATE_DATA_TABLE_VALUE: string[] = [
		"connect:BatchCreateDataTableValue",
	];
	/** IAM actions required for the BatchDeleteDataTableValue API call. */
	static readonly BATCH_DELETE_DATA_TABLE_VALUE: string[] = [
		"connect:BatchDeleteDataTableValue",
	];
	/** IAM actions required for the BatchDescribeDataTableValue API call. */
	static readonly BATCH_DESCRIBE_DATA_TABLE_VALUE: string[] = [
		"connect:BatchDescribeDataTableValue",
	];
	/** IAM actions required for the BatchDisassociateAnalyticsDataSet API call. */
	static readonly BATCH_DISASSOCIATE_ANALYTICS_DATA_SET: string[] = [
		"connect:BatchDisassociateAnalyticsDataSet",
	];
	/** IAM actions required for the BatchGetAttachedFileMetadata API call. */
	static readonly BATCH_GET_ATTACHED_FILE_METADATA: string[] = [
		"connect:BatchGetAttachedFileMetadata",
	];
	/** IAM actions required for the BatchGetFlowAssociation API call. */
	static readonly BATCH_GET_FLOW_ASSOCIATION: string[] = [
		"connect:BatchGetFlowAssociation",
	];
	/** IAM actions required for the BatchPutContact API call. */
	static readonly BATCH_PUT_CONTACT: string[] = ["connect:BatchPutContact"];
	/** IAM actions required for the BatchUpdateDataTableValue API call. */
	static readonly BATCH_UPDATE_DATA_TABLE_VALUE: string[] = [
		"connect:BatchUpdateDataTableValue",
	];
	/** IAM actions required for the CancelParticipantAuthentication API call. */
	static readonly CANCEL_PARTICIPANT_AUTHENTICATION: string[] = [];
	/** IAM actions required for the ClaimPhoneNumber API call. */
	static readonly CLAIM_PHONE_NUMBER: string[] = [
		"connect:ClaimPhoneNumber",
		"connect:TagResource",
	];
	/** IAM actions required for the CompleteAttachedFileUpload API call. */
	static readonly COMPLETE_ATTACHED_FILE_UPLOAD: string[] = [
		"connect:CompleteAttachedFileUpload",
	];
	/** IAM actions required for the CompleteAttachmentUpload API call. */
	static readonly COMPLETE_ATTACHMENT_UPLOAD: string[] = [];
	/** IAM actions required for the CreateAgentStatus API call. */
	static readonly CREATE_AGENT_STATUS: string[] = [
		"connect:CreateAgentStatus",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateAttachedFile API call. */
	static readonly CREATE_ATTACHED_FILE: string[] = [
		"connect:CreateAttachedFile",
	];
	/** IAM actions required for the CreateAuthCode API call. */
	static readonly CREATE_AUTH_CODE: string[] = [];
	/** IAM actions required for the CreateContact API call. */
	static readonly CREATE_CONTACT: string[] = ["connect:CreateContact"];
	/** IAM actions required for the CreateContactFlow API call. */
	static readonly CREATE_CONTACT_FLOW: string[] = [
		"connect:CreateContactFlow",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateContactFlowModule API call. */
	static readonly CREATE_CONTACT_FLOW_MODULE: string[] = [
		"connect:CreateContactFlowModule",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateContactFlowModuleAlias API call. */
	static readonly CREATE_CONTACT_FLOW_MODULE_ALIAS: string[] = [
		"connect:CreateContactFlowModuleAlias",
	];
	/** IAM actions required for the CreateContactFlowModuleVersion API call. */
	static readonly CREATE_CONTACT_FLOW_MODULE_VERSION: string[] = [
		"connect:CreateContactFlowModuleVersion",
	];
	/** IAM actions required for the CreateContactFlowVersion API call. */
	static readonly CREATE_CONTACT_FLOW_VERSION: string[] = [
		"connect:CreateContactFlowVersion",
	];
	/** IAM actions required for the CreateDataTable API call. */
	static readonly CREATE_DATA_TABLE: string[] = [
		"connect:CreateDataTable",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateDataTableAttribute API call. */
	static readonly CREATE_DATA_TABLE_ATTRIBUTE: string[] = [
		"connect:CreateDataTableAttribute",
	];
	/** IAM actions required for the CreateEmailAddress API call. */
	static readonly CREATE_EMAIL_ADDRESS: string[] = [
		"connect:CreateEmailAddress",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateEvaluationForm API call. */
	static readonly CREATE_EVALUATION_FORM: string[] = [
		"connect:CreateEvaluationForm",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateHoursOfOperation API call. */
	static readonly CREATE_HOURS_OF_OPERATION: string[] = [
		"connect:CreateHoursOfOperation",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateHoursOfOperationOverride API call. */
	static readonly CREATE_HOURS_OF_OPERATION_OVERRIDE: string[] = [
		"connect:CreateHoursOfOperationOverride",
	];
	/** IAM actions required for the CreateInstance API call. */
	static readonly CREATE_INSTANCE: string[] = [
		"connect:CreateInstance",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateIntegrationAssociation API call. */
	static readonly CREATE_INTEGRATION_ASSOCIATION: string[] = [
		"connect:CreateIntegrationAssociation",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateMetric API call. */
	static readonly CREATE_METRIC: string[] = [
		"connect:CreateMetric",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateNotification API call. */
	static readonly CREATE_NOTIFICATION: string[] = [
		"connect:CreateNotification",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateParticipant API call. */
	static readonly CREATE_PARTICIPANT: string[] = ["connect:CreateParticipant"];
	/** IAM actions required for the CreateParticipantConnection API call. */
	static readonly CREATE_PARTICIPANT_CONNECTION: string[] = [];
	/** IAM actions required for the CreatePersistentContactAssociation API call. */
	static readonly CREATE_PERSISTENT_CONTACT_ASSOCIATION: string[] = [
		"connect:CreatePersistentContactAssociation",
	];
	/** IAM actions required for the CreatePredefinedAttribute API call. */
	static readonly CREATE_PREDEFINED_ATTRIBUTE: string[] = [
		"connect:CreatePredefinedAttribute",
	];
	/** IAM actions required for the CreatePrompt API call. */
	static readonly CREATE_PROMPT: string[] = [
		"connect:CreatePrompt",
		"connect:TagResource",
	];
	/** IAM actions required for the CreatePushNotificationRegistration API call. */
	static readonly CREATE_PUSH_NOTIFICATION_REGISTRATION: string[] = [
		"connect:CreatePushNotificationRegistration",
	];
	/** IAM actions required for the CreateQueue API call. */
	static readonly CREATE_QUEUE: string[] = [
		"connect:CreateQueue",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateQuickConnect API call. */
	static readonly CREATE_QUICK_CONNECT: string[] = [
		"connect:CreateQuickConnect",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateRoutingProfile API call. */
	static readonly CREATE_ROUTING_PROFILE: string[] = [
		"connect:CreateRoutingProfile",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateRule API call. */
	static readonly CREATE_RULE: string[] = ["connect:CreateRule"];
	/** IAM actions required for the CreateSecurityProfile API call. */
	static readonly CREATE_SECURITY_PROFILE: string[] = [
		"connect:CreateSecurityProfile",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateTaskTemplate API call. */
	static readonly CREATE_TASK_TEMPLATE: string[] = [
		"connect:CreateTaskTemplate",
	];
	/** IAM actions required for the CreateTestCase API call. */
	static readonly CREATE_TEST_CASE: string[] = ["connect:TagResource"];
	/** IAM actions required for the CreateTrafficDistributionGroup API call. */
	static readonly CREATE_TRAFFIC_DISTRIBUTION_GROUP: string[] = [
		"connect:CreateTrafficDistributionGroup",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateUseCase API call. */
	static readonly CREATE_USE_CASE: string[] = [
		"connect:CreateUseCase",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = [
		"connect:CreateUser",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateUserHierarchyGroup API call. */
	static readonly CREATE_USER_HIERARCHY_GROUP: string[] = [
		"connect:CreateUserHierarchyGroup",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateView API call. */
	static readonly CREATE_VIEW: string[] = [
		"connect:CreateView",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateViewVersion API call. */
	static readonly CREATE_VIEW_VERSION: string[] = ["connect:CreateViewVersion"];
	/** IAM actions required for the CreateVocabulary API call. */
	static readonly CREATE_VOCABULARY: string[] = [
		"connect:CreateVocabulary",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateWorkspace API call. */
	static readonly CREATE_WORKSPACE: string[] = [
		"connect:CreateWorkspace",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateWorkspacePage API call. */
	static readonly CREATE_WORKSPACE_PAGE: string[] = [
		"connect:CreateWorkspacePage",
	];
	/** IAM actions required for the DeactivateEvaluationForm API call. */
	static readonly DEACTIVATE_EVALUATION_FORM: string[] = [
		"connect:DeactivateEvaluationForm",
	];
	/** IAM actions required for the DeleteAttachedFile API call. */
	static readonly DELETE_ATTACHED_FILE: string[] = [
		"connect:DeleteAttachedFile",
	];
	/** IAM actions required for the DeleteContactData API call. */
	static readonly DELETE_CONTACT_DATA: string[] = [];
	/** IAM actions required for the DeleteContactEvaluation API call. */
	static readonly DELETE_CONTACT_EVALUATION: string[] = [
		"connect:DeleteContactEvaluation",
	];
	/** IAM actions required for the DeleteContactFlow API call. */
	static readonly DELETE_CONTACT_FLOW: string[] = ["connect:DeleteContactFlow"];
	/** IAM actions required for the DeleteContactFlowModule API call. */
	static readonly DELETE_CONTACT_FLOW_MODULE: string[] = [
		"connect:DeleteContactFlowModule",
	];
	/** IAM actions required for the DeleteContactFlowModuleAlias API call. */
	static readonly DELETE_CONTACT_FLOW_MODULE_ALIAS: string[] = [
		"connect:DeleteContactFlowModuleAlias",
	];
	/** IAM actions required for the DeleteContactFlowModuleVersion API call. */
	static readonly DELETE_CONTACT_FLOW_MODULE_VERSION: string[] = [
		"connect:DeleteContactFlowModuleVersion",
	];
	/** IAM actions required for the DeleteContactFlowVersion API call. */
	static readonly DELETE_CONTACT_FLOW_VERSION: string[] = [
		"connect:DeleteContactFlowVersion",
	];
	/** IAM actions required for the DeleteDataTable API call. */
	static readonly DELETE_DATA_TABLE: string[] = ["connect:DeleteDataTable"];
	/** IAM actions required for the DeleteDataTableAttribute API call. */
	static readonly DELETE_DATA_TABLE_ATTRIBUTE: string[] = [
		"connect:DeleteDataTableAttribute",
	];
	/** IAM actions required for the DeleteEmailAddress API call. */
	static readonly DELETE_EMAIL_ADDRESS: string[] = [
		"connect:DeleteEmailAddress",
	];
	/** IAM actions required for the DeleteEvaluationForm API call. */
	static readonly DELETE_EVALUATION_FORM: string[] = [
		"connect:DeleteEvaluationForm",
	];
	/** IAM actions required for the DeleteHoursOfOperation API call. */
	static readonly DELETE_HOURS_OF_OPERATION: string[] = [
		"connect:DeleteHoursOfOperation",
	];
	/** IAM actions required for the DeleteHoursOfOperationOverride API call. */
	static readonly DELETE_HOURS_OF_OPERATION_OVERRIDE: string[] = [
		"connect:DeleteHoursOfOperationOverride",
	];
	/** IAM actions required for the DeleteInstance API call. */
	static readonly DELETE_INSTANCE: string[] = ["connect:DeleteInstance"];
	/** IAM actions required for the DeleteIntegrationAssociation API call. */
	static readonly DELETE_INTEGRATION_ASSOCIATION: string[] = [
		"connect:DeleteIntegrationAssociation",
	];
	/** IAM actions required for the DeleteMetric API call. */
	static readonly DELETE_METRIC: string[] = ["connect:DeleteMetric"];
	/** IAM actions required for the DeleteNotification API call. */
	static readonly DELETE_NOTIFICATION: string[] = [
		"connect:DeleteNotification",
	];
	/** IAM actions required for the DeletePredefinedAttribute API call. */
	static readonly DELETE_PREDEFINED_ATTRIBUTE: string[] = [
		"connect:DeletePredefinedAttribute",
	];
	/** IAM actions required for the DeletePrompt API call. */
	static readonly DELETE_PROMPT: string[] = ["connect:DeletePrompt"];
	/** IAM actions required for the DeletePushNotificationRegistration API call. */
	static readonly DELETE_PUSH_NOTIFICATION_REGISTRATION: string[] = [
		"connect:DeletePushNotificationRegistration",
	];
	/** IAM actions required for the DeleteQueue API call. */
	static readonly DELETE_QUEUE: string[] = ["connect:DeleteQueue"];
	/** IAM actions required for the DeleteQuickConnect API call. */
	static readonly DELETE_QUICK_CONNECT: string[] = [
		"connect:DeleteQuickConnect",
	];
	/** IAM actions required for the DeleteRoutingProfile API call. */
	static readonly DELETE_ROUTING_PROFILE: string[] = [
		"connect:DeleteRoutingProfile",
	];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DELETE_RULE: string[] = ["connect:DeleteRule"];
	/** IAM actions required for the DeleteSecurityProfile API call. */
	static readonly DELETE_SECURITY_PROFILE: string[] = [
		"connect:DeleteSecurityProfile",
	];
	/** IAM actions required for the DeleteSession API call. */
	static readonly DELETE_SESSION: string[] = [];
	/** IAM actions required for the DeleteTaskTemplate API call. */
	static readonly DELETE_TASK_TEMPLATE: string[] = [
		"connect:DeleteTaskTemplate",
	];
	/** IAM actions required for the DeleteTestCase API call. */
	static readonly DELETE_TEST_CASE: string[] = [];
	/** IAM actions required for the DeleteTrafficDistributionGroup API call. */
	static readonly DELETE_TRAFFIC_DISTRIBUTION_GROUP: string[] = [
		"connect:DeleteTrafficDistributionGroup",
	];
	/** IAM actions required for the DeleteUseCase API call. */
	static readonly DELETE_USE_CASE: string[] = ["connect:DeleteUseCase"];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["connect:DeleteUser"];
	/** IAM actions required for the DeleteUserHierarchyGroup API call. */
	static readonly DELETE_USER_HIERARCHY_GROUP: string[] = [
		"connect:DeleteUserHierarchyGroup",
	];
	/** IAM actions required for the DeleteView API call. */
	static readonly DELETE_VIEW: string[] = ["connect:DeleteView"];
	/** IAM actions required for the DeleteViewVersion API call. */
	static readonly DELETE_VIEW_VERSION: string[] = ["connect:DeleteViewVersion"];
	/** IAM actions required for the DeleteVocabulary API call. */
	static readonly DELETE_VOCABULARY: string[] = ["connect:DeleteVocabulary"];
	/** IAM actions required for the DeleteWorkspace API call. */
	static readonly DELETE_WORKSPACE: string[] = ["connect:DeleteWorkspace"];
	/** IAM actions required for the DeleteWorkspaceMedia API call. */
	static readonly DELETE_WORKSPACE_MEDIA: string[] = [
		"connect:DeleteWorkspaceMedia",
	];
	/** IAM actions required for the DeleteWorkspacePage API call. */
	static readonly DELETE_WORKSPACE_PAGE: string[] = [
		"connect:DeleteWorkspacePage",
	];
	/** IAM actions required for the DescribeAgentStatus API call. */
	static readonly DESCRIBE_AGENT_STATUS: string[] = [
		"connect:DescribeAgentStatus",
	];
	/** IAM actions required for the DescribeAttachedFilesConfiguration API call. */
	static readonly DESCRIBE_ATTACHED_FILES_CONFIGURATION: string[] = [
		"connect:DescribeAttachedFilesConfiguration",
	];
	/** IAM actions required for the DescribeAuthenticationProfile API call. */
	static readonly DESCRIBE_AUTHENTICATION_PROFILE: string[] = [
		"connect:DescribeAuthenticationProfile",
	];
	/** IAM actions required for the DescribeContact API call. */
	static readonly DESCRIBE_CONTACT: string[] = ["connect:DescribeContact"];
	/** IAM actions required for the DescribeContactEvaluation API call. */
	static readonly DESCRIBE_CONTACT_EVALUATION: string[] = [
		"connect:DescribeContactEvaluation",
	];
	/** IAM actions required for the DescribeContactFlow API call. */
	static readonly DESCRIBE_CONTACT_FLOW: string[] = [
		"connect:DescribeContactFlow",
	];
	/** IAM actions required for the DescribeContactFlowModule API call. */
	static readonly DESCRIBE_CONTACT_FLOW_MODULE: string[] = [
		"connect:DescribeContactFlowModule",
	];
	/** IAM actions required for the DescribeContactFlowModuleAlias API call. */
	static readonly DESCRIBE_CONTACT_FLOW_MODULE_ALIAS: string[] = [
		"connect:DescribeContactFlowModuleAlias",
	];
	/** IAM actions required for the DescribeDataTable API call. */
	static readonly DESCRIBE_DATA_TABLE: string[] = ["connect:DescribeDataTable"];
	/** IAM actions required for the DescribeDataTableAttribute API call. */
	static readonly DESCRIBE_DATA_TABLE_ATTRIBUTE: string[] = [
		"connect:DescribeDataTableAttribute",
	];
	/** IAM actions required for the DescribeEmailAddress API call. */
	static readonly DESCRIBE_EMAIL_ADDRESS: string[] = [
		"connect:DescribeEmailAddress",
	];
	/** IAM actions required for the DescribeEvaluationForm API call. */
	static readonly DESCRIBE_EVALUATION_FORM: string[] = [
		"connect:DescribeEvaluationForm",
	];
	/** IAM actions required for the DescribeHoursOfOperation API call. */
	static readonly DESCRIBE_HOURS_OF_OPERATION: string[] = [
		"connect:DescribeHoursOfOperation",
	];
	/** IAM actions required for the DescribeHoursOfOperationOverride API call. */
	static readonly DESCRIBE_HOURS_OF_OPERATION_OVERRIDE: string[] = [
		"connect:DescribeHoursOfOperationOverride",
	];
	/** IAM actions required for the DescribeInstance API call. */
	static readonly DESCRIBE_INSTANCE: string[] = ["connect:DescribeInstance"];
	/** IAM actions required for the DescribeInstanceAttribute API call. */
	static readonly DESCRIBE_INSTANCE_ATTRIBUTE: string[] = [
		"connect:DescribeInstanceAttribute",
	];
	/** IAM actions required for the DescribeInstanceStorageConfig API call. */
	static readonly DESCRIBE_INSTANCE_STORAGE_CONFIG: string[] = [
		"connect:DescribeInstanceStorageConfig",
	];
	/** IAM actions required for the DescribeMetric API call. */
	static readonly DESCRIBE_METRIC: string[] = ["connect:DescribeMetric"];
	/** IAM actions required for the DescribeNotification API call. */
	static readonly DESCRIBE_NOTIFICATION: string[] = [
		"connect:DescribeNotification",
	];
	/** IAM actions required for the DescribePhoneNumber API call. */
	static readonly DESCRIBE_PHONE_NUMBER: string[] = [
		"connect:DescribePhoneNumber",
	];
	/** IAM actions required for the DescribePredefinedAttribute API call. */
	static readonly DESCRIBE_PREDEFINED_ATTRIBUTE: string[] = [
		"connect:DescribePredefinedAttribute",
	];
	/** IAM actions required for the DescribePrompt API call. */
	static readonly DESCRIBE_PROMPT: string[] = ["connect:DescribePrompt"];
	/** IAM actions required for the DescribeQueue API call. */
	static readonly DESCRIBE_QUEUE: string[] = ["connect:DescribeQueue"];
	/** IAM actions required for the DescribeQuickConnect API call. */
	static readonly DESCRIBE_QUICK_CONNECT: string[] = [
		"connect:DescribeQuickConnect",
	];
	/** IAM actions required for the DescribeRoutingProfile API call. */
	static readonly DESCRIBE_ROUTING_PROFILE: string[] = [
		"connect:DescribeRoutingProfile",
	];
	/** IAM actions required for the DescribeRule API call. */
	static readonly DESCRIBE_RULE: string[] = ["connect:DescribeRule"];
	/** IAM actions required for the DescribeSecurityProfile API call. */
	static readonly DESCRIBE_SECURITY_PROFILE: string[] = [
		"connect:DescribeSecurityProfile",
	];
	/** IAM actions required for the DescribeTestCase API call. */
	static readonly DESCRIBE_TEST_CASE: string[] = [];
	/** IAM actions required for the DescribeTrafficDistributionGroup API call. */
	static readonly DESCRIBE_TRAFFIC_DISTRIBUTION_GROUP: string[] = [
		"connect:DescribeTrafficDistributionGroup",
	];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DESCRIBE_USER: string[] = ["connect:DescribeUser"];
	/** IAM actions required for the DescribeUserHierarchyGroup API call. */
	static readonly DESCRIBE_USER_HIERARCHY_GROUP: string[] = [
		"connect:DescribeUserHierarchyGroup",
	];
	/** IAM actions required for the DescribeUserHierarchyStructure API call. */
	static readonly DESCRIBE_USER_HIERARCHY_STRUCTURE: string[] = [
		"connect:DescribeUserHierarchyStructure",
	];
	/** IAM actions required for the DescribeView API call. */
	static readonly DESCRIBE_VIEW: string[] = ["connect:DescribeView"];
	/** IAM actions required for the DescribeVocabulary API call. */
	static readonly DESCRIBE_VOCABULARY: string[] = [
		"connect:DescribeVocabulary",
	];
	/** IAM actions required for the DescribeWorkspace API call. */
	static readonly DESCRIBE_WORKSPACE: string[] = ["connect:DescribeWorkspace"];
	/** IAM actions required for the DisassociateAnalyticsDataSet API call. */
	static readonly DISASSOCIATE_ANALYTICS_DATA_SET: string[] = [
		"connect:DisassociateAnalyticsDataSet",
	];
	/** IAM actions required for the DisassociateApprovedOrigin API call. */
	static readonly DISASSOCIATE_APPROVED_ORIGIN: string[] = [
		"connect:DisassociateApprovedOrigin",
	];
	/** IAM actions required for the DisassociateBot API call. */
	static readonly DISASSOCIATE_BOT: string[] = ["connect:DisassociateBot"];
	/** IAM actions required for the DisassociateEmailAddressAlias API call. */
	static readonly DISASSOCIATE_EMAIL_ADDRESS_ALIAS: string[] = [
		"connect:DisassociateEmailAddressAlias",
	];
	/** IAM actions required for the DisassociateFlow API call. */
	static readonly DISASSOCIATE_FLOW: string[] = ["connect:DisassociateFlow"];
	/** IAM actions required for the DisassociateHoursOfOperations API call. */
	static readonly DISASSOCIATE_HOURS_OF_OPERATIONS: string[] = [];
	/** IAM actions required for the DisassociateInstanceStorageConfig API call. */
	static readonly DISASSOCIATE_INSTANCE_STORAGE_CONFIG: string[] = [
		"connect:DisassociateInstanceStorageConfig",
	];
	/** IAM actions required for the DisassociateLambdaFunction API call. */
	static readonly DISASSOCIATE_LAMBDA_FUNCTION: string[] = [
		"connect:DisassociateLambdaFunction",
	];
	/** IAM actions required for the DisassociateLexBot API call. */
	static readonly DISASSOCIATE_LEX_BOT: string[] = [
		"connect:DisassociateLexBot",
	];
	/** IAM actions required for the DisassociatePhoneNumberContactFlow API call. */
	static readonly DISASSOCIATE_PHONE_NUMBER_CONTACT_FLOW: string[] = [
		"connect:DisassociatePhoneNumberContactFlow",
	];
	/** IAM actions required for the DisassociateQueueEmailAddresses API call. */
	static readonly DISASSOCIATE_QUEUE_EMAIL_ADDRESSES: string[] = [
		"connect:DisassociateQueueEmailAddresses",
	];
	/** IAM actions required for the DisassociateQueueQuickConnects API call. */
	static readonly DISASSOCIATE_QUEUE_QUICK_CONNECTS: string[] = [
		"connect:DisassociateQueueQuickConnects",
	];
	/** IAM actions required for the DisassociateRoutingProfileQueues API call. */
	static readonly DISASSOCIATE_ROUTING_PROFILE_QUEUES: string[] = [
		"connect:DisassociateRoutingProfileQueues",
	];
	/** IAM actions required for the DisassociateSecurityKey API call. */
	static readonly DISASSOCIATE_SECURITY_KEY: string[] = [
		"connect:DisassociateSecurityKey",
	];
	/** IAM actions required for the DisassociateSecurityProfiles API call. */
	static readonly DISASSOCIATE_SECURITY_PROFILES: string[] = [
		"connect:DisassociateSecurityProfiles",
	];
	/** IAM actions required for the DisassociateTrafficDistributionGroupUser API call. */
	static readonly DISASSOCIATE_TRAFFIC_DISTRIBUTION_GROUP_USER: string[] = [
		"connect:DisassociateTrafficDistributionGroupUser",
	];
	/** IAM actions required for the DisassociateUserProficiencies API call. */
	static readonly DISASSOCIATE_USER_PROFICIENCIES: string[] = [
		"connect:DisassociateUserProficiencies",
	];
	/** IAM actions required for the DisassociateWorkspace API call. */
	static readonly DISASSOCIATE_WORKSPACE: string[] = [
		"connect:DisassociateWorkspace",
	];
	/** IAM actions required for the DisconnectParticipant API call. */
	static readonly DISCONNECT_PARTICIPANT: string[] = [];
	/** IAM actions required for the DismissUserContact API call. */
	static readonly DISMISS_USER_CONTACT: string[] = [
		"connect:DismissUserContact",
	];
	/** IAM actions required for the EvaluateDataTableValues API call. */
	static readonly EVALUATE_DATA_TABLE_VALUES: string[] = [
		"connect:EvaluateDataTableValues",
	];
	/** IAM actions required for the GetAttachedFile API call. */
	static readonly GET_ATTACHED_FILE: string[] = ["connect:GetAttachedFile"];
	/** IAM actions required for the GetAttachment API call. */
	static readonly GET_ATTACHMENT: string[] = [];
	/** IAM actions required for the GetAuthenticationUrl API call. */
	static readonly GET_AUTHENTICATION_URL: string[] = [];
	/** IAM actions required for the GetContactAttributes API call. */
	static readonly GET_CONTACT_ATTRIBUTES: string[] = [
		"connect:GetContactAttributes",
	];
	/** IAM actions required for the GetContactMetrics API call. */
	static readonly GET_CONTACT_METRICS: string[] = ["connect:GetContactMetrics"];
	/** IAM actions required for the GetCurrentMetricData API call. */
	static readonly GET_CURRENT_METRIC_DATA: string[] = [
		"connect:GetCurrentMetricData",
	];
	/** IAM actions required for the GetCurrentUserData API call. */
	static readonly GET_CURRENT_USER_DATA: string[] = [
		"connect:GetCurrentUserData",
	];
	/** IAM actions required for the GetEffectiveHoursOfOperations API call. */
	static readonly GET_EFFECTIVE_HOURS_OF_OPERATIONS: string[] = [
		"connect:GetEffectiveHoursOfOperations",
	];
	/** IAM actions required for the GetEvaluationFormValidation API call. */
	static readonly GET_EVALUATION_FORM_VALIDATION: string[] = [
		"connect:GetEvaluationFormValidation",
	];
	/** IAM actions required for the GetFederationToken API call. */
	static readonly GET_FEDERATION_TOKEN: string[] = [
		"connect:GetFederationToken",
	];
	/** IAM actions required for the GetFlowAssociation API call. */
	static readonly GET_FLOW_ASSOCIATION: string[] = [
		"connect:GetFlowAssociation",
	];
	/** IAM actions required for the GetMetricData API call. */
	static readonly GET_METRIC_DATA: string[] = ["connect:GetMetricData"];
	/** IAM actions required for the GetMetricDataV2 API call. */
	static readonly GET_METRIC_DATA_V2: string[] = ["connect:GetMetricDataV2"];
	/** IAM actions required for the GetPromptFile API call. */
	static readonly GET_PROMPT_FILE: string[] = ["connect:GetPromptFile"];
	/** IAM actions required for the GetTaskTemplate API call. */
	static readonly GET_TASK_TEMPLATE: string[] = ["connect:GetTaskTemplate"];
	/** IAM actions required for the GetTestCaseExecutionSummary API call. */
	static readonly GET_TEST_CASE_EXECUTION_SUMMARY: string[] = [];
	/** IAM actions required for the GetTrafficDistribution API call. */
	static readonly GET_TRAFFIC_DISTRIBUTION: string[] = [
		"connect:GetTrafficDistribution",
	];
	/** IAM actions required for the GetTranscript API call. */
	static readonly GET_TRANSCRIPT: string[] = [];
	/** IAM actions required for the ImportPhoneNumber API call. */
	static readonly IMPORT_PHONE_NUMBER: string[] = [
		"connect:ImportPhoneNumber",
		"connect:TagResource",
	];
	/** IAM actions required for the ImportWorkspaceMedia API call. */
	static readonly IMPORT_WORKSPACE_MEDIA: string[] = [
		"connect:ImportWorkspaceMedia",
	];
	/** IAM actions required for the ListAgentStatuses API call. */
	static readonly LIST_AGENT_STATUSES: string[] = ["connect:ListAgentStatuses"];
	/** IAM actions required for the ListAnalyticsDataAssociations API call. */
	static readonly LIST_ANALYTICS_DATA_ASSOCIATIONS: string[] = [
		"connect:ListAnalyticsDataAssociations",
	];
	/** IAM actions required for the ListAnalyticsDataLakeDataSets API call. */
	static readonly LIST_ANALYTICS_DATA_LAKE_DATA_SETS: string[] = [
		"connect:ListAnalyticsDataLakeDataSets",
	];
	/** IAM actions required for the ListApprovedOrigins API call. */
	static readonly LIST_APPROVED_ORIGINS: string[] = [
		"connect:ListApprovedOrigins",
	];
	/** IAM actions required for the ListAssociatedContacts API call. */
	static readonly LIST_ASSOCIATED_CONTACTS: string[] = [
		"connect:ListAssociatedContacts",
	];
	/** IAM actions required for the ListAttachedFilesConfigurations API call. */
	static readonly LIST_ATTACHED_FILES_CONFIGURATIONS: string[] = [
		"connect:ListAttachedFilesConfigurations",
	];
	/** IAM actions required for the ListAuthenticationProfiles API call. */
	static readonly LIST_AUTHENTICATION_PROFILES: string[] = [
		"connect:ListAuthenticationProfiles",
	];
	/** IAM actions required for the ListBots API call. */
	static readonly LIST_BOTS: string[] = ["connect:ListBots"];
	/** IAM actions required for the ListChildHoursOfOperations API call. */
	static readonly LIST_CHILD_HOURS_OF_OPERATIONS: string[] = [];
	/** IAM actions required for the ListContactEvaluations API call. */
	static readonly LIST_CONTACT_EVALUATIONS: string[] = [
		"connect:ListContactEvaluations",
	];
	/** IAM actions required for the ListContactFlowModuleAliases API call. */
	static readonly LIST_CONTACT_FLOW_MODULE_ALIASES: string[] = [
		"connect:ListContactFlowModuleAliases",
	];
	/** IAM actions required for the ListContactFlowModuleVersions API call. */
	static readonly LIST_CONTACT_FLOW_MODULE_VERSIONS: string[] = [
		"connect:ListContactFlowModuleVersions",
	];
	/** IAM actions required for the ListContactFlowModules API call. */
	static readonly LIST_CONTACT_FLOW_MODULES: string[] = [
		"connect:ListContactFlowModules",
	];
	/** IAM actions required for the ListContactFlowVersions API call. */
	static readonly LIST_CONTACT_FLOW_VERSIONS: string[] = [
		"connect:ListContactFlowVersions",
	];
	/** IAM actions required for the ListContactFlows API call. */
	static readonly LIST_CONTACT_FLOWS: string[] = ["connect:ListContactFlows"];
	/** IAM actions required for the ListContactReferences API call. */
	static readonly LIST_CONTACT_REFERENCES: string[] = [
		"connect:ListContactReferences",
	];
	/** IAM actions required for the ListDataTableAttributes API call. */
	static readonly LIST_DATA_TABLE_ATTRIBUTES: string[] = [
		"connect:ListDataTableAttributes",
	];
	/** IAM actions required for the ListDataTablePrimaryValues API call. */
	static readonly LIST_DATA_TABLE_PRIMARY_VALUES: string[] = [
		"connect:ListDataTablePrimaryValues",
	];
	/** IAM actions required for the ListDataTableValues API call. */
	static readonly LIST_DATA_TABLE_VALUES: string[] = [
		"connect:ListDataTableValues",
	];
	/** IAM actions required for the ListDataTables API call. */
	static readonly LIST_DATA_TABLES: string[] = ["connect:ListDataTables"];
	/** IAM actions required for the ListDefaultVocabularies API call. */
	static readonly LIST_DEFAULT_VOCABULARIES: string[] = [
		"connect:ListDefaultVocabularies",
	];
	/** IAM actions required for the ListEntitySecurityProfiles API call. */
	static readonly LIST_ENTITY_SECURITY_PROFILES: string[] = [
		"connect:ListEntitySecurityProfiles",
	];
	/** IAM actions required for the ListEvaluationFormVersions API call. */
	static readonly LIST_EVALUATION_FORM_VERSIONS: string[] = [
		"connect:ListEvaluationFormVersions",
	];
	/** IAM actions required for the ListEvaluationForms API call. */
	static readonly LIST_EVALUATION_FORMS: string[] = [
		"connect:ListEvaluationForms",
	];
	/** IAM actions required for the ListFlowAssociations API call. */
	static readonly LIST_FLOW_ASSOCIATIONS: string[] = [
		"connect:ListFlowAssociations",
	];
	/** IAM actions required for the ListHoursOfOperationOverrides API call. */
	static readonly LIST_HOURS_OF_OPERATION_OVERRIDES: string[] = [
		"connect:ListHoursOfOperationOverrides",
	];
	/** IAM actions required for the ListHoursOfOperations API call. */
	static readonly LIST_HOURS_OF_OPERATIONS: string[] = [
		"connect:ListHoursOfOperations",
	];
	/** IAM actions required for the ListInstanceAttributes API call. */
	static readonly LIST_INSTANCE_ATTRIBUTES: string[] = [
		"connect:ListInstanceAttributes",
	];
	/** IAM actions required for the ListInstanceStorageConfigs API call. */
	static readonly LIST_INSTANCE_STORAGE_CONFIGS: string[] = [
		"connect:ListInstanceStorageConfigs",
	];
	/** IAM actions required for the ListInstances API call. */
	static readonly LIST_INSTANCES: string[] = ["connect:ListInstances"];
	/** IAM actions required for the ListIntegrationAssociations API call. */
	static readonly LIST_INTEGRATION_ASSOCIATIONS: string[] = [
		"connect:ListIntegrationAssociations",
	];
	/** IAM actions required for the ListLambdaFunctions API call. */
	static readonly LIST_LAMBDA_FUNCTIONS: string[] = [
		"connect:ListLambdaFunctions",
	];
	/** IAM actions required for the ListLexBots API call. */
	static readonly LIST_LEX_BOTS: string[] = ["connect:ListLexBots"];
	/** IAM actions required for the ListMetrics API call. */
	static readonly LIST_METRICS: string[] = ["connect:ListMetrics"];
	/** IAM actions required for the ListNotifications API call. */
	static readonly LIST_NOTIFICATIONS: string[] = ["connect:ListNotifications"];
	/** IAM actions required for the ListPhoneNumbers API call. */
	static readonly LIST_PHONE_NUMBERS: string[] = ["connect:ListPhoneNumbers"];
	/** IAM actions required for the ListPhoneNumbersV2 API call. */
	static readonly LIST_PHONE_NUMBERS_V2: string[] = [
		"connect:ListPhoneNumbersV2",
	];
	/** IAM actions required for the ListPredefinedAttributes API call. */
	static readonly LIST_PREDEFINED_ATTRIBUTES: string[] = [
		"connect:ListPredefinedAttributes",
	];
	/** IAM actions required for the ListPrompts API call. */
	static readonly LIST_PROMPTS: string[] = ["connect:ListPrompts"];
	/** IAM actions required for the ListQueueEmailAddresses API call. */
	static readonly LIST_QUEUE_EMAIL_ADDRESSES: string[] = [
		"connect:ListQueueEmailAddresses",
	];
	/** IAM actions required for the ListQueueQuickConnects API call. */
	static readonly LIST_QUEUE_QUICK_CONNECTS: string[] = [
		"connect:ListQueueQuickConnects",
	];
	/** IAM actions required for the ListQueues API call. */
	static readonly LIST_QUEUES: string[] = ["connect:ListQueues"];
	/** IAM actions required for the ListQuickConnects API call. */
	static readonly LIST_QUICK_CONNECTS: string[] = ["connect:ListQuickConnects"];
	/** IAM actions required for the ListRealtimeContactAnalysisSegments API call. */
	static readonly LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS: string[] = [
		"connect:ListRealtimeContactAnalysisSegments",
	];
	/** IAM actions required for the ListRealtimeContactAnalysisSegmentsV2 API call. */
	static readonly LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_V2: string[] = [
		"connect:ListRealtimeContactAnalysisSegmentsV2",
	];
	/** IAM actions required for the ListRoutingProfileManualAssignmentQueues API call. */
	static readonly LIST_ROUTING_PROFILE_MANUAL_ASSIGNMENT_QUEUES: string[] = [
		"connect:ListRoutingProfileManualAssignmentQueues",
	];
	/** IAM actions required for the ListRoutingProfileQueues API call. */
	static readonly LIST_ROUTING_PROFILE_QUEUES: string[] = [
		"connect:ListRoutingProfileQueues",
	];
	/** IAM actions required for the ListRoutingProfiles API call. */
	static readonly LIST_ROUTING_PROFILES: string[] = [
		"connect:ListRoutingProfiles",
	];
	/** IAM actions required for the ListRules API call. */
	static readonly LIST_RULES: string[] = ["connect:ListRules"];
	/** IAM actions required for the ListSecurityKeys API call. */
	static readonly LIST_SECURITY_KEYS: string[] = ["connect:ListSecurityKeys"];
	/** IAM actions required for the ListSecurityProfileApplications API call. */
	static readonly LIST_SECURITY_PROFILE_APPLICATIONS: string[] = [
		"connect:ListSecurityProfileApplications",
	];
	/** IAM actions required for the ListSecurityProfileFlowModules API call. */
	static readonly LIST_SECURITY_PROFILE_FLOW_MODULES: string[] = [
		"connect:ListSecurityProfileFlowModules",
	];
	/** IAM actions required for the ListSecurityProfilePermissions API call. */
	static readonly LIST_SECURITY_PROFILE_PERMISSIONS: string[] = [
		"connect:ListSecurityProfilePermissions",
	];
	/** IAM actions required for the ListSecurityProfiles API call. */
	static readonly LIST_SECURITY_PROFILES: string[] = [
		"connect:ListSecurityProfiles",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"connect:ListTagsForResource",
	];
	/** IAM actions required for the ListTaskTemplates API call. */
	static readonly LIST_TASK_TEMPLATES: string[] = ["connect:ListTaskTemplates"];
	/** IAM actions required for the ListTestCaseExecutionRecords API call. */
	static readonly LIST_TEST_CASE_EXECUTION_RECORDS: string[] = [];
	/** IAM actions required for the ListTestCaseExecutions API call. */
	static readonly LIST_TEST_CASE_EXECUTIONS: string[] = [];
	/** IAM actions required for the ListTestCases API call. */
	static readonly LIST_TEST_CASES: string[] = [];
	/** IAM actions required for the ListTrafficDistributionGroupUsers API call. */
	static readonly LIST_TRAFFIC_DISTRIBUTION_GROUP_USERS: string[] = [
		"connect:ListTrafficDistributionGroupUsers",
	];
	/** IAM actions required for the ListTrafficDistributionGroups API call. */
	static readonly LIST_TRAFFIC_DISTRIBUTION_GROUPS: string[] = [
		"connect:ListTrafficDistributionGroups",
	];
	/** IAM actions required for the ListUseCases API call. */
	static readonly LIST_USE_CASES: string[] = ["connect:ListUseCases"];
	/** IAM actions required for the ListUserHierarchyGroups API call. */
	static readonly LIST_USER_HIERARCHY_GROUPS: string[] = [
		"connect:ListUserHierarchyGroups",
	];
	/** IAM actions required for the ListUserNotifications API call. */
	static readonly LIST_USER_NOTIFICATIONS: string[] = [
		"connect:ListUserNotifications",
	];
	/** IAM actions required for the ListUserProficiencies API call. */
	static readonly LIST_USER_PROFICIENCIES: string[] = [
		"connect:ListUserProficiencies",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = ["connect:ListUsers"];
	/** IAM actions required for the ListViewVersions API call. */
	static readonly LIST_VIEW_VERSIONS: string[] = ["connect:ListViewVersions"];
	/** IAM actions required for the ListViews API call. */
	static readonly LIST_VIEWS: string[] = ["connect:ListViews"];
	/** IAM actions required for the ListWorkspaceMedia API call. */
	static readonly LIST_WORKSPACE_MEDIA: string[] = [
		"connect:ListWorkspaceMedia",
	];
	/** IAM actions required for the ListWorkspacePages API call. */
	static readonly LIST_WORKSPACE_PAGES: string[] = [
		"connect:ListWorkspacePages",
	];
	/** IAM actions required for the ListWorkspaces API call. */
	static readonly LIST_WORKSPACES: string[] = ["connect:ListWorkspaces"];
	/** IAM actions required for the MonitorContact API call. */
	static readonly MONITOR_CONTACT: string[] = ["connect:MonitorContact"];
	/** IAM actions required for the PauseContact API call. */
	static readonly PAUSE_CONTACT: string[] = ["connect:PauseContact"];
	/** IAM actions required for the PutUserStatus API call. */
	static readonly PUT_USER_STATUS: string[] = ["connect:PutUserStatus"];
	/** IAM actions required for the ReleasePhoneNumber API call. */
	static readonly RELEASE_PHONE_NUMBER: string[] = [
		"connect:ReleasePhoneNumber",
	];
	/** IAM actions required for the ReplicateInstance API call. */
	static readonly REPLICATE_INSTANCE: string[] = ["connect:ReplicateInstance"];
	/** IAM actions required for the ResumeContact API call. */
	static readonly RESUME_CONTACT: string[] = ["connect:ResumeContact"];
	/** IAM actions required for the ResumeContactRecording API call. */
	static readonly RESUME_CONTACT_RECORDING: string[] = [
		"connect:ResumeContactRecording",
	];
	/** IAM actions required for the SearchAgentStatuses API call. */
	static readonly SEARCH_AGENT_STATUSES: string[] = [
		"connect:DescribeAgentStatus",
		"connect:SearchAgentStatuses",
	];
	/** IAM actions required for the SearchAvailablePhoneNumbers API call. */
	static readonly SEARCH_AVAILABLE_PHONE_NUMBERS: string[] = [
		"connect:SearchAvailablePhoneNumbers",
	];
	/** IAM actions required for the SearchContactEvaluations API call. */
	static readonly SEARCH_CONTACT_EVALUATIONS: string[] = [
		"connect:DescribeContactEvaluation",
		"connect:SearchContactEvaluations",
	];
	/** IAM actions required for the SearchContactFlowModules API call. */
	static readonly SEARCH_CONTACT_FLOW_MODULES: string[] = [
		"connect:DescribeContactFlowModule",
		"connect:SearchContactFlowModules",
	];
	/** IAM actions required for the SearchContactFlows API call. */
	static readonly SEARCH_CONTACT_FLOWS: string[] = [
		"connect:DescribeContactFlow",
		"connect:SearchContactFlows",
	];
	/** IAM actions required for the SearchContacts API call. */
	static readonly SEARCH_CONTACTS: string[] = [
		"connect:DescribeContact",
		"connect:GetContactAttributes",
		"connect:SearchContacts",
	];
	/** IAM actions required for the SearchDataTables API call. */
	static readonly SEARCH_DATA_TABLES: string[] = [
		"connect:DescribeDataTable",
		"connect:SearchDataTables",
	];
	/** IAM actions required for the SearchEmailAddresses API call. */
	static readonly SEARCH_EMAIL_ADDRESSES: string[] = [
		"connect:DescribeEmailAddress",
		"connect:SearchEmailAddresses",
	];
	/** IAM actions required for the SearchEvaluationForms API call. */
	static readonly SEARCH_EVALUATION_FORMS: string[] = [
		"connect:DescribeEvaluationForm",
		"connect:SearchEvaluationForms",
	];
	/** IAM actions required for the SearchHoursOfOperationOverrides API call. */
	static readonly SEARCH_HOURS_OF_OPERATION_OVERRIDES: string[] = [
		"connect:DescribeHoursOfOperationOverride",
		"connect:SearchHoursOfOperationOverrides",
	];
	/** IAM actions required for the SearchHoursOfOperations API call. */
	static readonly SEARCH_HOURS_OF_OPERATIONS: string[] = [
		"connect:DescribeHoursOfOperation",
		"connect:SearchHoursOfOperations",
	];
	/** IAM actions required for the SearchMetrics API call. */
	static readonly SEARCH_METRICS: string[] = [
		"connect:DescribeMetric",
		"connect:SearchMetrics",
	];
	/** IAM actions required for the SearchNotifications API call. */
	static readonly SEARCH_NOTIFICATIONS: string[] = [
		"connect:DescribeNotification",
		"connect:SearchNotifications",
	];
	/** IAM actions required for the SearchPredefinedAttributes API call. */
	static readonly SEARCH_PREDEFINED_ATTRIBUTES: string[] = [
		"connect:DescribePredefinedAttribute",
		"connect:SearchPredefinedAttributes",
	];
	/** IAM actions required for the SearchPrompts API call. */
	static readonly SEARCH_PROMPTS: string[] = [
		"connect:DescribePrompt",
		"connect:SearchPrompts",
	];
	/** IAM actions required for the SearchQueues API call. */
	static readonly SEARCH_QUEUES: string[] = [
		"connect:DescribeQueue",
		"connect:SearchQueues",
	];
	/** IAM actions required for the SearchQuickConnects API call. */
	static readonly SEARCH_QUICK_CONNECTS: string[] = [
		"connect:DescribeQuickConnect",
		"connect:SearchQuickConnects",
	];
	/** IAM actions required for the SearchResourceTags API call. */
	static readonly SEARCH_RESOURCE_TAGS: string[] = [
		"connect:SearchResourceTags",
	];
	/** IAM actions required for the SearchRoutingProfiles API call. */
	static readonly SEARCH_ROUTING_PROFILES: string[] = [
		"connect:DescribeRoutingProfile",
		"connect:SearchRoutingProfiles",
	];
	/** IAM actions required for the SearchRules API call. */
	static readonly SEARCH_RULES: string[] = [
		"connect:DescribeRule",
		"connect:SearchRules",
	];
	/** IAM actions required for the SearchSecurityProfiles API call. */
	static readonly SEARCH_SECURITY_PROFILES: string[] = [
		"connect:DescribeSecurityProfile",
		"connect:SearchSecurityProfiles",
	];
	/** IAM actions required for the SearchTestCases API call. */
	static readonly SEARCH_TEST_CASES: string[] = [];
	/** IAM actions required for the SearchUserHierarchyGroups API call. */
	static readonly SEARCH_USER_HIERARCHY_GROUPS: string[] = [
		"connect:DescribeUserHierarchyGroup",
		"connect:SearchUserHierarchyGroups",
	];
	/** IAM actions required for the SearchUsers API call. */
	static readonly SEARCH_USERS: string[] = [
		"connect:DescribeUser",
		"connect:ListUserProficiencies",
		"connect:SearchUsers",
	];
	/** IAM actions required for the SearchViews API call. */
	static readonly SEARCH_VIEWS: string[] = [
		"connect:DescribeView",
		"connect:SearchViews",
	];
	/** IAM actions required for the SearchVocabularies API call. */
	static readonly SEARCH_VOCABULARIES: string[] = [
		"connect:SearchVocabularies",
	];
	/** IAM actions required for the SearchWorkspaceAssociations API call. */
	static readonly SEARCH_WORKSPACE_ASSOCIATIONS: string[] = [
		"connect:SearchWorkspaceAssociations",
	];
	/** IAM actions required for the SearchWorkspaces API call. */
	static readonly SEARCH_WORKSPACES: string[] = [
		"connect:DescribeWorkspace",
		"connect:SearchWorkspaces",
	];
	/** IAM actions required for the SendChatIntegrationEvent API call. */
	static readonly SEND_CHAT_INTEGRATION_EVENT: string[] = [
		"connect:SendChatIntegrationEvent",
	];
	/** IAM actions required for the SendEvent API call. */
	static readonly SEND_EVENT: string[] = [];
	/** IAM actions required for the SendMessage API call. */
	static readonly SEND_MESSAGE: string[] = [];
	/** IAM actions required for the SendOutboundEmail API call. */
	static readonly SEND_OUTBOUND_EMAIL: string[] = ["connect:SendOutboundEmail"];
	/** IAM actions required for the SendOutboundWebNotification API call. */
	static readonly SEND_OUTBOUND_WEB_NOTIFICATION: string[] = [
		"connect:SendOutboundWebNotification",
	];
	/** IAM actions required for the StartAttachedFileUpload API call. */
	static readonly START_ATTACHED_FILE_UPLOAD: string[] = [
		"connect:StartAttachedFileUpload",
		"connect:TagResource",
	];
	/** IAM actions required for the StartAttachmentUpload API call. */
	static readonly START_ATTACHMENT_UPLOAD: string[] = [];
	/** IAM actions required for the StartChatContact API call. */
	static readonly START_CHAT_CONTACT: string[] = ["connect:StartChatContact"];
	/** IAM actions required for the StartContactConversationalAnalyticsJob API call. */
	static readonly START_CONTACT_CONVERSATIONAL_ANALYTICS_JOB: string[] = [
		"connect:StartContactConversationalAnalyticsJob",
	];
	/** IAM actions required for the StartContactEvaluation API call. */
	static readonly START_CONTACT_EVALUATION: string[] = [
		"connect:StartContactEvaluation",
		"connect:TagResource",
	];
	/** IAM actions required for the StartContactMediaProcessing API call. */
	static readonly START_CONTACT_MEDIA_PROCESSING: string[] = [
		"connect:StartContactMediaProcessing",
	];
	/** IAM actions required for the StartContactRecording API call. */
	static readonly START_CONTACT_RECORDING: string[] = [
		"connect:StartContactRecording",
	];
	/** IAM actions required for the StartContactStreaming API call. */
	static readonly START_CONTACT_STREAMING: string[] = [
		"connect:StartContactStreaming",
	];
	/** IAM actions required for the StartEmailContact API call. */
	static readonly START_EMAIL_CONTACT: string[] = ["connect:StartEmailContact"];
	/** IAM actions required for the StartEvaluationFormValidation API call. */
	static readonly START_EVALUATION_FORM_VALIDATION: string[] = [
		"connect:StartEvaluationFormValidation",
	];
	/** IAM actions required for the StartOutboundChatContact API call. */
	static readonly START_OUTBOUND_CHAT_CONTACT: string[] = [
		"connect:StartOutboundChatContact",
	];
	/** IAM actions required for the StartOutboundEmailContact API call. */
	static readonly START_OUTBOUND_EMAIL_CONTACT: string[] = [
		"connect:StartOutboundEmailContact",
	];
	/** IAM actions required for the StartOutboundVoiceContact API call. */
	static readonly START_OUTBOUND_VOICE_CONTACT: string[] = [
		"connect:StartOutboundVoiceContact",
	];
	/** IAM actions required for the StartScreenSharing API call. */
	static readonly START_SCREEN_SHARING: string[] = [
		"connect:StartScreenSharing",
	];
	/** IAM actions required for the StartTaskContact API call. */
	static readonly START_TASK_CONTACT: string[] = ["connect:StartTaskContact"];
	/** IAM actions required for the StartTestCaseExecution API call. */
	static readonly START_TEST_CASE_EXECUTION: string[] = [];
	/** IAM actions required for the StartWebRTCContact API call. */
	static readonly START_WEB_RTC_CONTACT: string[] = [
		"connect:StartWebRTCContact",
	];
	/** IAM actions required for the StopContact API call. */
	static readonly STOP_CONTACT: string[] = ["connect:StopContact"];
	/** IAM actions required for the StopContactMediaProcessing API call. */
	static readonly STOP_CONTACT_MEDIA_PROCESSING: string[] = [
		"connect:StopContactMediaProcessing",
	];
	/** IAM actions required for the StopContactRecording API call. */
	static readonly STOP_CONTACT_RECORDING: string[] = [
		"connect:StopContactRecording",
	];
	/** IAM actions required for the StopContactStreaming API call. */
	static readonly STOP_CONTACT_STREAMING: string[] = [
		"connect:StopContactStreaming",
	];
	/** IAM actions required for the StopTestCaseExecution API call. */
	static readonly STOP_TEST_CASE_EXECUTION: string[] = [];
	/** IAM actions required for the SubmitContactEvaluation API call. */
	static readonly SUBMIT_CONTACT_EVALUATION: string[] = [
		"connect:SubmitContactEvaluation",
	];
	/** IAM actions required for the SuspendContactRecording API call. */
	static readonly SUSPEND_CONTACT_RECORDING: string[] = [
		"connect:SuspendContactRecording",
	];
	/** IAM actions required for the TagContact API call. */
	static readonly TAG_CONTACT: string[] = ["connect:TagContact"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["connect:TagResource"];
	/** IAM actions required for the TransferContact API call. */
	static readonly TRANSFER_CONTACT: string[] = ["connect:TransferContact"];
	/** IAM actions required for the UntagContact API call. */
	static readonly UNTAG_CONTACT: string[] = ["connect:UntagContact"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["connect:UntagResource"];
	/** IAM actions required for the UpdateAgentStatus API call. */
	static readonly UPDATE_AGENT_STATUS: string[] = ["connect:UpdateAgentStatus"];
	/** IAM actions required for the UpdateAttachedFilesConfiguration API call. */
	static readonly UPDATE_ATTACHED_FILES_CONFIGURATION: string[] = [
		"connect:UpdateAttachedFilesConfiguration",
	];
	/** IAM actions required for the UpdateAuthenticationProfile API call. */
	static readonly UPDATE_AUTHENTICATION_PROFILE: string[] = [
		"connect:UpdateAuthenticationProfile",
	];
	/** IAM actions required for the UpdateContact API call. */
	static readonly UPDATE_CONTACT: string[] = ["connect:UpdateContact"];
	/** IAM actions required for the UpdateContactAttributes API call. */
	static readonly UPDATE_CONTACT_ATTRIBUTES: string[] = [
		"connect:UpdateContactAttributes",
	];
	/** IAM actions required for the UpdateContactEvaluation API call. */
	static readonly UPDATE_CONTACT_EVALUATION: string[] = [
		"connect:UpdateContactEvaluation",
	];
	/** IAM actions required for the UpdateContactFlowContent API call. */
	static readonly UPDATE_CONTACT_FLOW_CONTENT: string[] = [
		"connect:UpdateContactFlowContent",
	];
	/** IAM actions required for the UpdateContactFlowMetadata API call. */
	static readonly UPDATE_CONTACT_FLOW_METADATA: string[] = [
		"connect:UpdateContactFlowMetadata",
	];
	/** IAM actions required for the UpdateContactFlowModuleAlias API call. */
	static readonly UPDATE_CONTACT_FLOW_MODULE_ALIAS: string[] = [
		"connect:UpdateContactFlowModuleAlias",
	];
	/** IAM actions required for the UpdateContactFlowModuleContent API call. */
	static readonly UPDATE_CONTACT_FLOW_MODULE_CONTENT: string[] = [
		"connect:UpdateContactFlowModuleContent",
	];
	/** IAM actions required for the UpdateContactFlowModuleMetadata API call. */
	static readonly UPDATE_CONTACT_FLOW_MODULE_METADATA: string[] = [
		"connect:UpdateContactFlowModuleMetadata",
	];
	/** IAM actions required for the UpdateContactFlowName API call. */
	static readonly UPDATE_CONTACT_FLOW_NAME: string[] = [
		"connect:UpdateContactFlowName",
	];
	/** IAM actions required for the UpdateContactRoutingData API call. */
	static readonly UPDATE_CONTACT_ROUTING_DATA: string[] = [
		"connect:UpdateContactRoutingData",
	];
	/** IAM actions required for the UpdateContactSchedule API call. */
	static readonly UPDATE_CONTACT_SCHEDULE: string[] = [
		"connect:UpdateContactSchedule",
	];
	/** IAM actions required for the UpdateContactTaskTemplate API call. */
	static readonly UPDATE_CONTACT_TASK_TEMPLATE: string[] = [];
	/** IAM actions required for the UpdateDataTableAttribute API call. */
	static readonly UPDATE_DATA_TABLE_ATTRIBUTE: string[] = [
		"connect:UpdateDataTableAttribute",
	];
	/** IAM actions required for the UpdateDataTableMetadata API call. */
	static readonly UPDATE_DATA_TABLE_METADATA: string[] = [
		"connect:UpdateDataTableMetadata",
	];
	/** IAM actions required for the UpdateDataTablePrimaryValues API call. */
	static readonly UPDATE_DATA_TABLE_PRIMARY_VALUES: string[] = [
		"connect:UpdateDataTablePrimaryValues",
	];
	/** IAM actions required for the UpdateEmailAddressMetadata API call. */
	static readonly UPDATE_EMAIL_ADDRESS_METADATA: string[] = [
		"connect:UpdateEmailAddressMetadata",
	];
	/** IAM actions required for the UpdateEvaluationForm API call. */
	static readonly UPDATE_EVALUATION_FORM: string[] = [
		"connect:UpdateEvaluationForm",
	];
	/** IAM actions required for the UpdateHoursOfOperation API call. */
	static readonly UPDATE_HOURS_OF_OPERATION: string[] = [
		"connect:UpdateHoursOfOperation",
	];
	/** IAM actions required for the UpdateHoursOfOperationOverride API call. */
	static readonly UPDATE_HOURS_OF_OPERATION_OVERRIDE: string[] = [
		"connect:UpdateHoursOfOperationOverride",
	];
	/** IAM actions required for the UpdateInstanceAttribute API call. */
	static readonly UPDATE_INSTANCE_ATTRIBUTE: string[] = [
		"connect:UpdateInstanceAttribute",
	];
	/** IAM actions required for the UpdateInstanceStorageConfig API call. */
	static readonly UPDATE_INSTANCE_STORAGE_CONFIG: string[] = [
		"connect:UpdateInstanceStorageConfig",
	];
	/** IAM actions required for the UpdateMetricContent API call. */
	static readonly UPDATE_METRIC_CONTENT: string[] = [
		"connect:UpdateMetricContent",
	];
	/** IAM actions required for the UpdateMetricMetadata API call. */
	static readonly UPDATE_METRIC_METADATA: string[] = [
		"connect:UpdateMetricMetadata",
	];
	/** IAM actions required for the UpdateNotificationContent API call. */
	static readonly UPDATE_NOTIFICATION_CONTENT: string[] = [
		"connect:UpdateNotificationContent",
	];
	/** IAM actions required for the UpdateParticipantAuthentication API call. */
	static readonly UPDATE_PARTICIPANT_AUTHENTICATION: string[] = [
		"connect:UpdateParticipantAuthentication",
	];
	/** IAM actions required for the UpdateParticipantRoleConfig API call. */
	static readonly UPDATE_PARTICIPANT_ROLE_CONFIG: string[] = [
		"connect:UpdateParticipantRoleConfig",
	];
	/** IAM actions required for the UpdatePhoneNumber API call. */
	static readonly UPDATE_PHONE_NUMBER: string[] = ["connect:UpdatePhoneNumber"];
	/** IAM actions required for the UpdatePhoneNumberMetadata API call. */
	static readonly UPDATE_PHONE_NUMBER_METADATA: string[] = [
		"connect:UpdatePhoneNumberMetadata",
	];
	/** IAM actions required for the UpdatePredefinedAttribute API call. */
	static readonly UPDATE_PREDEFINED_ATTRIBUTE: string[] = [
		"connect:UpdatePredefinedAttribute",
	];
	/** IAM actions required for the UpdatePrompt API call. */
	static readonly UPDATE_PROMPT: string[] = ["connect:UpdatePrompt"];
	/** IAM actions required for the UpdateQueueHoursOfOperation API call. */
	static readonly UPDATE_QUEUE_HOURS_OF_OPERATION: string[] = [
		"connect:UpdateQueueHoursOfOperation",
	];
	/** IAM actions required for the UpdateQueueMaxContacts API call. */
	static readonly UPDATE_QUEUE_MAX_CONTACTS: string[] = [
		"connect:UpdateQueueMaxContacts",
	];
	/** IAM actions required for the UpdateQueueName API call. */
	static readonly UPDATE_QUEUE_NAME: string[] = ["connect:UpdateQueueName"];
	/** IAM actions required for the UpdateQueueOutboundCallerConfig API call. */
	static readonly UPDATE_QUEUE_OUTBOUND_CALLER_CONFIG: string[] = [
		"connect:UpdateQueueOutboundCallerConfig",
	];
	/** IAM actions required for the UpdateQueueOutboundEmailConfig API call. */
	static readonly UPDATE_QUEUE_OUTBOUND_EMAIL_CONFIG: string[] = [
		"connect:UpdateQueueOutboundEmailConfig",
	];
	/** IAM actions required for the UpdateQueueStatus API call. */
	static readonly UPDATE_QUEUE_STATUS: string[] = ["connect:UpdateQueueStatus"];
	/** IAM actions required for the UpdateQuickConnectConfig API call. */
	static readonly UPDATE_QUICK_CONNECT_CONFIG: string[] = [
		"connect:UpdateQuickConnectConfig",
	];
	/** IAM actions required for the UpdateQuickConnectName API call. */
	static readonly UPDATE_QUICK_CONNECT_NAME: string[] = [
		"connect:UpdateQuickConnectName",
	];
	/** IAM actions required for the UpdateRoutingProfileAgentAvailabilityTimer API call. */
	static readonly UPDATE_ROUTING_PROFILE_AGENT_AVAILABILITY_TIMER: string[] = [
		"connect:UpdateRoutingProfileAgentAvailabilityTimer",
	];
	/** IAM actions required for the UpdateRoutingProfileConcurrency API call. */
	static readonly UPDATE_ROUTING_PROFILE_CONCURRENCY: string[] = [
		"connect:UpdateRoutingProfileConcurrency",
	];
	/** IAM actions required for the UpdateRoutingProfileDefaultOutboundQueue API call. */
	static readonly UPDATE_ROUTING_PROFILE_DEFAULT_OUTBOUND_QUEUE: string[] = [
		"connect:UpdateRoutingProfileDefaultOutboundQueue",
	];
	/** IAM actions required for the UpdateRoutingProfileName API call. */
	static readonly UPDATE_ROUTING_PROFILE_NAME: string[] = [
		"connect:UpdateRoutingProfileName",
	];
	/** IAM actions required for the UpdateRoutingProfileQueues API call. */
	static readonly UPDATE_ROUTING_PROFILE_QUEUES: string[] = [
		"connect:UpdateRoutingProfileQueues",
	];
	/** IAM actions required for the UpdateRule API call. */
	static readonly UPDATE_RULE: string[] = ["connect:UpdateRule"];
	/** IAM actions required for the UpdateSecurityProfile API call. */
	static readonly UPDATE_SECURITY_PROFILE: string[] = [
		"connect:UpdateSecurityProfile",
	];
	/** IAM actions required for the UpdateTaskTemplate API call. */
	static readonly UPDATE_TASK_TEMPLATE: string[] = [
		"connect:UpdateTaskTemplate",
	];
	/** IAM actions required for the UpdateTestCase API call. */
	static readonly UPDATE_TEST_CASE: string[] = [];
	/** IAM actions required for the UpdateTrafficDistribution API call. */
	static readonly UPDATE_TRAFFIC_DISTRIBUTION: string[] = [
		"connect:UpdateTrafficDistribution",
	];
	/** IAM actions required for the UpdateUserConfig API call. */
	static readonly UPDATE_USER_CONFIG: string[] = [
		"connect:UpdateUserPhoneConfig",
	];
	/** IAM actions required for the UpdateUserHierarchy API call. */
	static readonly UPDATE_USER_HIERARCHY: string[] = [
		"connect:UpdateUserHierarchy",
	];
	/** IAM actions required for the UpdateUserHierarchyGroupName API call. */
	static readonly UPDATE_USER_HIERARCHY_GROUP_NAME: string[] = [
		"connect:UpdateUserHierarchyGroupName",
	];
	/** IAM actions required for the UpdateUserHierarchyStructure API call. */
	static readonly UPDATE_USER_HIERARCHY_STRUCTURE: string[] = [
		"connect:UpdateUserHierarchyStructure",
	];
	/** IAM actions required for the UpdateUserIdentityInfo API call. */
	static readonly UPDATE_USER_IDENTITY_INFO: string[] = [
		"connect:UpdateUserIdentityInfo",
	];
	/** IAM actions required for the UpdateUserNotificationStatus API call. */
	static readonly UPDATE_USER_NOTIFICATION_STATUS: string[] = [
		"connect:UpdateUserNotificationStatus",
	];
	/** IAM actions required for the UpdateUserPhoneConfig API call. */
	static readonly UPDATE_USER_PHONE_CONFIG: string[] = [
		"connect:UpdateUserPhoneConfig",
	];
	/** IAM actions required for the UpdateUserProficiencies API call. */
	static readonly UPDATE_USER_PROFICIENCIES: string[] = [
		"connect:UpdateUserProficiencies",
	];
	/** IAM actions required for the UpdateUserRoutingProfile API call. */
	static readonly UPDATE_USER_ROUTING_PROFILE: string[] = [
		"connect:UpdateUserRoutingProfile",
	];
	/** IAM actions required for the UpdateUserSecurityProfiles API call. */
	static readonly UPDATE_USER_SECURITY_PROFILES: string[] = [
		"connect:UpdateUserSecurityProfiles",
	];
	/** IAM actions required for the UpdateViewContent API call. */
	static readonly UPDATE_VIEW_CONTENT: string[] = ["connect:UpdateViewContent"];
	/** IAM actions required for the UpdateViewMetadata API call. */
	static readonly UPDATE_VIEW_METADATA: string[] = [
		"connect:UpdateViewMetadata",
	];
	/** IAM actions required for the UpdateWorkspaceMetadata API call. */
	static readonly UPDATE_WORKSPACE_METADATA: string[] = [
		"connect:UpdateWorkspaceMetadata",
	];
	/** IAM actions required for the UpdateWorkspacePage API call. */
	static readonly UPDATE_WORKSPACE_PAGE: string[] = [
		"connect:UpdateWorkspacePage",
	];
	/** IAM actions required for the UpdateWorkspaceTheme API call. */
	static readonly UPDATE_WORKSPACE_THEME: string[] = [
		"connect:UpdateWorkspaceTheme",
	];
	/** IAM actions required for the UpdateWorkspaceVisibility API call. */
	static readonly UPDATE_WORKSPACE_VISIBILITY: string[] = [
		"connect:UpdateWorkspaceVisibility",
	];
}

/**
 * Condition key constants and builders for connect.
 */
export class ConnectConditions {
	/** Condition keys applicable to the ActivateEvaluationForm action. */
	static readonly ACTIVATE_EVALUATION_FORM_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateAnalyticsDataSet action. */
	static readonly ASSOCIATE_ANALYTICS_DATA_SET_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateApprovedOrigin action. */
	static readonly ASSOCIATE_APPROVED_ORIGIN_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateBot action. */
	static readonly ASSOCIATE_BOT_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateContactWithUser action. */
	static readonly ASSOCIATE_CONTACT_WITH_USER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PreferredUserArn",
	];
	/** Condition keys applicable to the AssociateDefaultVocabulary action. */
	static readonly ASSOCIATE_DEFAULT_VOCABULARY_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateEmailAddressAlias action. */
	static readonly ASSOCIATE_EMAIL_ADDRESS_ALIAS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateFlow action. */
	static readonly ASSOCIATE_FLOW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateInstanceStorageConfig action. */
	static readonly ASSOCIATE_INSTANCE_STORAGE_CONFIG_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:StorageResourceType",
	];
	/** Condition keys applicable to the AssociateLambdaFunction action. */
	static readonly ASSOCIATE_LAMBDA_FUNCTION_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateLexBot action. */
	static readonly ASSOCIATE_LEX_BOT_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociatePhoneNumberContactFlow action. */
	static readonly ASSOCIATE_PHONE_NUMBER_CONTACT_FLOW_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the AssociateQueueEmailAddresses action. */
	static readonly ASSOCIATE_QUEUE_EMAIL_ADDRESSES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateQueueQuickConnects action. */
	static readonly ASSOCIATE_QUEUE_QUICK_CONNECTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateRoutingProfileQueues action. */
	static readonly ASSOCIATE_ROUTING_PROFILE_QUEUES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateSecurityKey action. */
	static readonly ASSOCIATE_SECURITY_KEY_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateSecurityProfiles action. */
	static readonly ASSOCIATE_SECURITY_PROFILES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateTrafficDistributionGroupUser action. */
	static readonly ASSOCIATE_TRAFFIC_DISTRIBUTION_GROUP_USER_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"connect:InstanceId",
			"connect:SearchTag/${TagKey}",
		];
	/** Condition keys applicable to the AssociateUserProficiencies action. */
	static readonly ASSOCIATE_USER_PROFICIENCIES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateWorkspace action. */
	static readonly ASSOCIATE_WORKSPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the BatchAssociateAnalyticsDataSet action. */
	static readonly BATCH_ASSOCIATE_ANALYTICS_DATA_SET_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the BatchCreateDataTableValue action. */
	static readonly BATCH_CREATE_DATA_TABLE_VALUE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:ExpressionValue",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the BatchDeleteDataTableValue action. */
	static readonly BATCH_DELETE_DATA_TABLE_VALUE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the BatchDescribeDataTableValue action. */
	static readonly BATCH_DESCRIBE_DATA_TABLE_VALUE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the BatchDisassociateAnalyticsDataSet action. */
	static readonly BATCH_DISASSOCIATE_ANALYTICS_DATA_SET_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the BatchGetAttachedFileMetadata action. */
	static readonly BATCH_GET_ATTACHED_FILE_METADATA_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the BatchGetFlowAssociation action. */
	static readonly BATCH_GET_FLOW_ASSOCIATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the BatchPutContact action. */
	static readonly BATCH_PUT_CONTACT_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the BatchUpdateDataTableValue action. */
	static readonly BATCH_UPDATE_DATA_TABLE_VALUE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:ExpressionValue",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the ClaimPhoneNumber action. */
	static readonly CLAIM_PHONE_NUMBER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CompleteAttachedFileUpload action. */
	static readonly COMPLETE_ATTACHED_FILE_UPLOAD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateAgentStatus action. */
	static readonly CREATE_AGENT_STATUS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateAttachedFile action. */
	static readonly CREATE_ATTACHED_FILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateAuthenticationProfile action. */
	static readonly CREATE_AUTHENTICATION_PROFILE_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateContact action. */
	static readonly CREATE_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:ContactInitiationMethod",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateContactFlow action. */
	static readonly CREATE_CONTACT_FLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateContactFlowModule action. */
	static readonly CREATE_CONTACT_FLOW_MODULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateContactFlowModuleAlias action. */
	static readonly CREATE_CONTACT_FLOW_MODULE_ALIAS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateContactFlowModuleVersion action. */
	static readonly CREATE_CONTACT_FLOW_MODULE_VERSION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the CreateContactFlowVersion action. */
	static readonly CREATE_CONTACT_FLOW_VERSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateDataTable action. */
	static readonly CREATE_DATA_TABLE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateDataTableAttribute action. */
	static readonly CREATE_DATA_TABLE_ATTRIBUTE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateEmailAddress action. */
	static readonly CREATE_EMAIL_ADDRESS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateEvaluationForm action. */
	static readonly CREATE_EVALUATION_FORM_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateHoursOfOperation action. */
	static readonly CREATE_HOURS_OF_OPERATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateHoursOfOperationOverride action. */
	static readonly CREATE_HOURS_OF_OPERATION_OVERRIDE_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the CreateInstance action. */
	static readonly CREATE_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIntegrationAssociation action. */
	static readonly CREATE_INTEGRATION_ASSOCIATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateMetric action. */
	static readonly CREATE_METRIC_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateNotification action. */
	static readonly CREATE_NOTIFICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateParticipant action. */
	static readonly CREATE_PARTICIPANT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreatePersistentContactAssociation action. */
	static readonly CREATE_PERSISTENT_CONTACT_ASSOCIATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the CreatePredefinedAttribute action. */
	static readonly CREATE_PREDEFINED_ATTRIBUTE_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreatePrompt action. */
	static readonly CREATE_PROMPT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreatePushNotificationRegistration action. */
	static readonly CREATE_PUSH_NOTIFICATION_REGISTRATION_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the CreateQueue action. */
	static readonly CREATE_QUEUE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateQuickConnect action. */
	static readonly CREATE_QUICK_CONNECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateRoutingProfile action. */
	static readonly CREATE_ROUTING_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateRule action. */
	static readonly CREATE_RULE_CONDITION_KEYS: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the CreateSecurityProfile action. */
	static readonly CREATE_SECURITY_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateTrafficDistributionGroup action. */
	static readonly CREATE_TRAFFIC_DISTRIBUTION_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateUseCase action. */
	static readonly CREATE_USE_CASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CREATE_USER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateUserHierarchyGroup action. */
	static readonly CREATE_USER_HIERARCHY_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateView action. */
	static readonly CREATE_VIEW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateViewVersion action. */
	static readonly CREATE_VIEW_VERSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateVocabulary action. */
	static readonly CREATE_VOCABULARY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateWorkspace action. */
	static readonly CREATE_WORKSPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateWorkspacePage action. */
	static readonly CREATE_WORKSPACE_PAGE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeactivateEvaluationForm action. */
	static readonly DEACTIVATE_EVALUATION_FORM_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteAttachedFile action. */
	static readonly DELETE_ATTACHED_FILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteContactEvaluation action. */
	static readonly DELETE_CONTACT_EVALUATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteContactFlow action. */
	static readonly DELETE_CONTACT_FLOW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteContactFlowModule action. */
	static readonly DELETE_CONTACT_FLOW_MODULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteContactFlowModuleAlias action. */
	static readonly DELETE_CONTACT_FLOW_MODULE_ALIAS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteContactFlowModuleVersion action. */
	static readonly DELETE_CONTACT_FLOW_MODULE_VERSION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the DeleteContactFlowVersion action. */
	static readonly DELETE_CONTACT_FLOW_VERSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteDataTable action. */
	static readonly DELETE_DATA_TABLE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteDataTableAttribute action. */
	static readonly DELETE_DATA_TABLE_ATTRIBUTE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteEmailAddress action. */
	static readonly DELETE_EMAIL_ADDRESS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteEvaluationForm action. */
	static readonly DELETE_EVALUATION_FORM_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteHoursOfOperation action. */
	static readonly DELETE_HOURS_OF_OPERATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteHoursOfOperationOverride action. */
	static readonly DELETE_HOURS_OF_OPERATION_OVERRIDE_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the DeleteInstance action. */
	static readonly DELETE_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteIntegrationAssociation action. */
	static readonly DELETE_INTEGRATION_ASSOCIATION_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteMetric action. */
	static readonly DELETE_METRIC_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteNotification action. */
	static readonly DELETE_NOTIFICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeletePredefinedAttribute action. */
	static readonly DELETE_PREDEFINED_ATTRIBUTE_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeletePrompt action. */
	static readonly DELETE_PROMPT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeletePushNotificationRegistration action. */
	static readonly DELETE_PUSH_NOTIFICATION_REGISTRATION_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the DeleteQueue action. */
	static readonly DELETE_QUEUE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteQuickConnect action. */
	static readonly DELETE_QUICK_CONNECT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteRoutingProfile action. */
	static readonly DELETE_ROUTING_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteRule action. */
	static readonly DELETE_RULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteSecurityProfile action. */
	static readonly DELETE_SECURITY_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteTaskTemplate action. */
	static readonly DELETE_TASK_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteTrafficDistributionGroup action. */
	static readonly DELETE_TRAFFIC_DISTRIBUTION_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteUseCase action. */
	static readonly DELETE_USE_CASE_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteUser action. */
	static readonly DELETE_USER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteUserHierarchyGroup action. */
	static readonly DELETE_USER_HIERARCHY_GROUP_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteView action. */
	static readonly DELETE_VIEW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteViewVersion action. */
	static readonly DELETE_VIEW_VERSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteVocabulary action. */
	static readonly DELETE_VOCABULARY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteWorkspace action. */
	static readonly DELETE_WORKSPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteWorkspaceMedia action. */
	static readonly DELETE_WORKSPACE_MEDIA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteWorkspacePage action. */
	static readonly DELETE_WORKSPACE_PAGE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeAgentStatus action. */
	static readonly DESCRIBE_AGENT_STATUS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeAttachedFilesConfiguration action. */
	static readonly DESCRIBE_ATTACHED_FILES_CONFIGURATION_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the DescribeAuthenticationProfile action. */
	static readonly DESCRIBE_AUTHENTICATION_PROFILE_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeContact action. */
	static readonly DESCRIBE_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the DescribeContactEvaluation action. */
	static readonly DESCRIBE_CONTACT_EVALUATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeContactFlow action. */
	static readonly DESCRIBE_CONTACT_FLOW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeContactFlowModule action. */
	static readonly DESCRIBE_CONTACT_FLOW_MODULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeContactFlowModuleAlias action. */
	static readonly DESCRIBE_CONTACT_FLOW_MODULE_ALIAS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the DescribeDataTable action. */
	static readonly DESCRIBE_DATA_TABLE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeDataTableAttribute action. */
	static readonly DESCRIBE_DATA_TABLE_ATTRIBUTE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeEmailAddress action. */
	static readonly DESCRIBE_EMAIL_ADDRESS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeEvaluationForm action. */
	static readonly DESCRIBE_EVALUATION_FORM_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeForecastingPlanningSchedulingIntegration action. */
	static readonly DESCRIBE_FORECASTING_PLANNING_SCHEDULING_INTEGRATION_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the DescribeHoursOfOperation action. */
	static readonly DESCRIBE_HOURS_OF_OPERATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeHoursOfOperationOverride action. */
	static readonly DESCRIBE_HOURS_OF_OPERATION_OVERRIDE_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the DescribeInstance action. */
	static readonly DESCRIBE_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeInstanceAttribute action. */
	static readonly DESCRIBE_INSTANCE_ATTRIBUTE_CONDITION_KEYS: string[] = [
		"connect:AttributeType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeInstanceStorageConfig action. */
	static readonly DESCRIBE_INSTANCE_STORAGE_CONFIG_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:StorageResourceType",
	];
	/** Condition keys applicable to the DescribeMetric action. */
	static readonly DESCRIBE_METRIC_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeNotification action. */
	static readonly DESCRIBE_NOTIFICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribePhoneNumber action. */
	static readonly DESCRIBE_PHONE_NUMBER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribePredefinedAttribute action. */
	static readonly DESCRIBE_PREDEFINED_ATTRIBUTE_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribePrompt action. */
	static readonly DESCRIBE_PROMPT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeQueue action. */
	static readonly DESCRIBE_QUEUE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeQuickConnect action. */
	static readonly DESCRIBE_QUICK_CONNECT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeRoutingProfile action. */
	static readonly DESCRIBE_ROUTING_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeRule action. */
	static readonly DESCRIBE_RULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeSecurityProfile action. */
	static readonly DESCRIBE_SECURITY_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeTrafficDistributionGroup action. */
	static readonly DESCRIBE_TRAFFIC_DISTRIBUTION_GROUP_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DescribeUser action. */
	static readonly DESCRIBE_USER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeUserHierarchyGroup action. */
	static readonly DESCRIBE_USER_HIERARCHY_GROUP_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeUserHierarchyStructure action. */
	static readonly DESCRIBE_USER_HIERARCHY_STRUCTURE_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeView action. */
	static readonly DESCRIBE_VIEW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeVocabulary action. */
	static readonly DESCRIBE_VOCABULARY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeWorkspace action. */
	static readonly DESCRIBE_WORKSPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateAnalyticsDataSet action. */
	static readonly DISASSOCIATE_ANALYTICS_DATA_SET_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateApprovedOrigin action. */
	static readonly DISASSOCIATE_APPROVED_ORIGIN_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateBot action. */
	static readonly DISASSOCIATE_BOT_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateEmailAddressAlias action. */
	static readonly DISASSOCIATE_EMAIL_ADDRESS_ALIAS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateFlow action. */
	static readonly DISASSOCIATE_FLOW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateInstanceStorageConfig action. */
	static readonly DISASSOCIATE_INSTANCE_STORAGE_CONFIG_CONDITION_KEYS: string[] =
		["connect:InstanceId", "connect:StorageResourceType"];
	/** Condition keys applicable to the DisassociateLambdaFunction action. */
	static readonly DISASSOCIATE_LAMBDA_FUNCTION_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateLexBot action. */
	static readonly DISASSOCIATE_LEX_BOT_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociatePhoneNumberContactFlow action. */
	static readonly DISASSOCIATE_PHONE_NUMBER_CONTACT_FLOW_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the DisassociateQueueEmailAddresses action. */
	static readonly DISASSOCIATE_QUEUE_EMAIL_ADDRESSES_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the DisassociateQueueQuickConnects action. */
	static readonly DISASSOCIATE_QUEUE_QUICK_CONNECTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateRoutingProfileQueues action. */
	static readonly DISASSOCIATE_ROUTING_PROFILE_QUEUES_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the DisassociateSecurityKey action. */
	static readonly DISASSOCIATE_SECURITY_KEY_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateSecurityProfiles action. */
	static readonly DISASSOCIATE_SECURITY_PROFILES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateTrafficDistributionGroupUser action. */
	static readonly DISASSOCIATE_TRAFFIC_DISTRIBUTION_GROUP_USER_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the DisassociateUserProficiencies action. */
	static readonly DISASSOCIATE_USER_PROFICIENCIES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateWorkspace action. */
	static readonly DISASSOCIATE_WORKSPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DismissUserContact action. */
	static readonly DISMISS_USER_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the EvaluateDataTableValues action. */
	static readonly EVALUATE_DATA_TABLE_VALUES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the GetAttachedFile action. */
	static readonly GET_ATTACHED_FILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetContactAttributes action. */
	static readonly GET_CONTACT_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the GetContactMetrics action. */
	static readonly GET_CONTACT_METRICS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetCurrentMetricData action. */
	static readonly GET_CURRENT_METRIC_DATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetCurrentUserData action. */
	static readonly GET_CURRENT_USER_DATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetEffectiveHoursOfOperations action. */
	static readonly GET_EFFECTIVE_HOURS_OF_OPERATIONS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetEvaluationFormValidation action. */
	static readonly GET_EVALUATION_FORM_VALIDATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetFederationToken action. */
	static readonly GET_FEDERATION_TOKEN_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetFlowAssociation action. */
	static readonly GET_FLOW_ASSOCIATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetMetricData action. */
	static readonly GET_METRIC_DATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetMetricDataV2 action. */
	static readonly GET_METRIC_DATA_V2_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetPromptFile action. */
	static readonly GET_PROMPT_FILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetTaskTemplate action. */
	static readonly GET_TASK_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetTrafficDistribution action. */
	static readonly GET_TRAFFIC_DISTRIBUTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ImportPhoneNumber action. */
	static readonly IMPORT_PHONE_NUMBER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportWorkspaceMedia action. */
	static readonly IMPORT_WORKSPACE_MEDIA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListAnalyticsDataAssociations action. */
	static readonly LIST_ANALYTICS_DATA_ASSOCIATIONS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListAnalyticsDataLakeDataSets action. */
	static readonly LIST_ANALYTICS_DATA_LAKE_DATA_SETS_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the ListApprovedOrigins action. */
	static readonly LIST_APPROVED_ORIGINS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListAssociatedContacts action. */
	static readonly LIST_ASSOCIATED_CONTACTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListAttachedFilesConfigurations action. */
	static readonly LIST_ATTACHED_FILES_CONFIGURATIONS_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the ListAuthenticationProfiles action. */
	static readonly LIST_AUTHENTICATION_PROFILES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListBots action. */
	static readonly LIST_BOTS_CONDITION_KEYS: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the ListContactEvaluations action. */
	static readonly LIST_CONTACT_EVALUATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListContactFlowModuleAliases action. */
	static readonly LIST_CONTACT_FLOW_MODULE_ALIASES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListContactFlowModuleVersions action. */
	static readonly LIST_CONTACT_FLOW_MODULE_VERSIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListContactFlowVersions action. */
	static readonly LIST_CONTACT_FLOW_VERSIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListContactFlows action. */
	static readonly LIST_CONTACT_FLOWS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListContactReferences action. */
	static readonly LIST_CONTACT_REFERENCES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the ListDataTableAttributes action. */
	static readonly LIST_DATA_TABLE_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListDataTablePrimaryValues action. */
	static readonly LIST_DATA_TABLE_PRIMARY_VALUES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the ListDataTableValues action. */
	static readonly LIST_DATA_TABLE_VALUES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the ListDataTables action. */
	static readonly LIST_DATA_TABLES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListDefaultVocabularies action. */
	static readonly LIST_DEFAULT_VOCABULARIES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListEntitySecurityProfiles action. */
	static readonly LIST_ENTITY_SECURITY_PROFILES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListEvaluationFormVersions action. */
	static readonly LIST_EVALUATION_FORM_VERSIONS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListEvaluationForms action. */
	static readonly LIST_EVALUATION_FORMS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListFlowAssociations action. */
	static readonly LIST_FLOW_ASSOCIATIONS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListHoursOfOperationOverrides action. */
	static readonly LIST_HOURS_OF_OPERATION_OVERRIDES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListHoursOfOperations action. */
	static readonly LIST_HOURS_OF_OPERATIONS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListInstanceAttributes action. */
	static readonly LIST_INSTANCE_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListInstanceStorageConfigs action. */
	static readonly LIST_INSTANCE_STORAGE_CONFIGS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListIntegrationAssociations action. */
	static readonly LIST_INTEGRATION_ASSOCIATIONS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListLambdaFunctions action. */
	static readonly LIST_LAMBDA_FUNCTIONS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListLexBots action. */
	static readonly LIST_LEX_BOTS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListMetrics action. */
	static readonly LIST_METRICS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListNotifications action. */
	static readonly LIST_NOTIFICATIONS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListPredefinedAttributes action. */
	static readonly LIST_PREDEFINED_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListPrompts action. */
	static readonly LIST_PROMPTS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListQueueEmailAddresses action. */
	static readonly LIST_QUEUE_EMAIL_ADDRESSES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListQueueQuickConnects action. */
	static readonly LIST_QUEUE_QUICK_CONNECTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListRealtimeContactAnalysisSegments action. */
	static readonly LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListRealtimeContactAnalysisSegmentsV2 action. */
	static readonly LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_V2_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"connect:ListRealtimeContactAnalysisSegmentsByOutputType",
			"connect:ListRealtimeContactAnalysisSegmentsBySegmentType",
		];
	/** Condition keys applicable to the ListRoutingProfileManualAssignmentQueues action. */
	static readonly LIST_ROUTING_PROFILE_MANUAL_ASSIGNMENT_QUEUES_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the ListRoutingProfileQueues action. */
	static readonly LIST_ROUTING_PROFILE_QUEUES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListRoutingProfiles action. */
	static readonly LIST_ROUTING_PROFILES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListRules action. */
	static readonly LIST_RULES_CONDITION_KEYS: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the ListSecurityKeys action. */
	static readonly LIST_SECURITY_KEYS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListSecurityProfileApplications action. */
	static readonly LIST_SECURITY_PROFILE_APPLICATIONS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the ListSecurityProfileFlowModules action. */
	static readonly LIST_SECURITY_PROFILE_FLOW_MODULES_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the ListSecurityProfilePermissions action. */
	static readonly LIST_SECURITY_PROFILE_PERMISSIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListSecurityProfiles action. */
	static readonly LIST_SECURITY_PROFILES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTrafficDistributionGroupUsers action. */
	static readonly LIST_TRAFFIC_DISTRIBUTION_GROUP_USERS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListUseCases action. */
	static readonly LIST_USE_CASES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListUserHierarchyGroups action. */
	static readonly LIST_USER_HIERARCHY_GROUPS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListUserNotifications action. */
	static readonly LIST_USER_NOTIFICATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListUserProficiencies action. */
	static readonly LIST_USER_PROFICIENCIES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListUsers action. */
	static readonly LIST_USERS_CONDITION_KEYS: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the ListViewVersions action. */
	static readonly LIST_VIEW_VERSIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListViews action. */
	static readonly LIST_VIEWS_CONDITION_KEYS: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the ListWorkspaceMedia action. */
	static readonly LIST_WORKSPACE_MEDIA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListWorkspacePages action. */
	static readonly LIST_WORKSPACE_PAGES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListWorkspaces action. */
	static readonly LIST_WORKSPACES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the MonitorContact action. */
	static readonly MONITOR_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:MonitorCapabilities",
	];
	/** Condition keys applicable to the PauseContact action. */
	static readonly PAUSE_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the PutUserStatus action. */
	static readonly PUT_USER_STATUS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ReleasePhoneNumber action. */
	static readonly RELEASE_PHONE_NUMBER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ReplicateInstance action. */
	static readonly REPLICATE_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ResumeContact action. */
	static readonly RESUME_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ResumeContactRecording action. */
	static readonly RESUME_CONTACT_RECORDING_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the SearchAgentStatuses action. */
	static readonly SEARCH_AGENT_STATUSES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchContactEvaluations action. */
	static readonly SEARCH_CONTACT_EVALUATIONS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchContactFlowModules action. */
	static readonly SEARCH_CONTACT_FLOW_MODULES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchContactFlows action. */
	static readonly SEARCH_CONTACT_FLOWS_CONDITION_KEYS: string[] = [
		"connect:FlowType",
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchContacts action. */
	static readonly SEARCH_CONTACTS_CONDITION_KEYS: string[] = [
		"connect:Channel",
		"connect:InstanceId",
		"connect:PreferredUserArn",
		"connect:SearchContactsByContactAnalysis",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchDataTables action. */
	static readonly SEARCH_DATA_TABLES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchEmailAddresses action. */
	static readonly SEARCH_EMAIL_ADDRESSES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchEvaluationForms action. */
	static readonly SEARCH_EVALUATION_FORMS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchHoursOfOperationOverrides action. */
	static readonly SEARCH_HOURS_OF_OPERATION_OVERRIDES_CONDITION_KEYS: string[] =
		["connect:InstanceId", "connect:SearchTag/${TagKey}"];
	/** Condition keys applicable to the SearchHoursOfOperations action. */
	static readonly SEARCH_HOURS_OF_OPERATIONS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchMetrics action. */
	static readonly SEARCH_METRICS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchNotifications action. */
	static readonly SEARCH_NOTIFICATIONS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchPredefinedAttributes action. */
	static readonly SEARCH_PREDEFINED_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the SearchPrompts action. */
	static readonly SEARCH_PROMPTS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchQueues action. */
	static readonly SEARCH_QUEUES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchQuickConnects action. */
	static readonly SEARCH_QUICK_CONNECTS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchResourceTags action. */
	static readonly SEARCH_RESOURCE_TAGS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the SearchRoutingProfiles action. */
	static readonly SEARCH_ROUTING_PROFILES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchRules action. */
	static readonly SEARCH_RULES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchSecurityProfiles action. */
	static readonly SEARCH_SECURITY_PROFILES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchUserHierarchyGroups action. */
	static readonly SEARCH_USER_HIERARCHY_GROUPS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchUsers action. */
	static readonly SEARCH_USERS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchViews action. */
	static readonly SEARCH_VIEWS_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchVocabularies action. */
	static readonly SEARCH_VOCABULARIES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the SearchWorkspaceAssociations action. */
	static readonly SEARCH_WORKSPACE_ASSOCIATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the SearchWorkspaces action. */
	static readonly SEARCH_WORKSPACES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SendOutboundChatMessage action. */
	static readonly SEND_OUTBOUND_CHAT_MESSAGE_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:Subtype",
	];
	/** Condition keys applicable to the SendOutboundEmail action. */
	static readonly SEND_OUTBOUND_EMAIL_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the SendOutboundWebNotification action. */
	static readonly SEND_OUTBOUND_WEB_NOTIFICATION_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartAttachedFileUpload action. */
	static readonly START_ATTACHED_FILE_UPLOAD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the StartChatContact action. */
	static readonly START_CHAT_CONTACT_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartContactConversationalAnalyticsJob action. */
	static readonly START_CONTACT_CONVERSATIONAL_ANALYTICS_JOB_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:ResourceTag/${TagKey}",
			"aws:TagKeys",
			"connect:InstanceId",
		];
	/** Condition keys applicable to the StartContactEvaluation action. */
	static readonly START_CONTACT_EVALUATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartContactMediaProcessing action. */
	static readonly START_CONTACT_MEDIA_PROCESSING_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartContactRecording action. */
	static readonly START_CONTACT_RECORDING_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the StartContactStreaming action. */
	static readonly START_CONTACT_STREAMING_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartEmailContact action. */
	static readonly START_EMAIL_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartEvaluationFormValidation action. */
	static readonly START_EVALUATION_FORM_VALIDATION_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartForecastingPlanningSchedulingIntegration action. */
	static readonly START_FORECASTING_PLANNING_SCHEDULING_INTEGRATION_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the StartOutboundChatContact action. */
	static readonly START_OUTBOUND_CHAT_CONTACT_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:Subtype",
	];
	/** Condition keys applicable to the StartOutboundEmailContact action. */
	static readonly START_OUTBOUND_EMAIL_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartScreenSharing action. */
	static readonly START_SCREEN_SHARING_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the StartTaskContact action. */
	static readonly START_TASK_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:AssignmentType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartWebRTCContact action. */
	static readonly START_WEB_RTC_CONTACT_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StopContact action. */
	static readonly STOP_CONTACT_CONDITION_KEYS: string[] = [
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the StopContactMediaProcessing action. */
	static readonly STOP_CONTACT_MEDIA_PROCESSING_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StopContactRecording action. */
	static readonly STOP_CONTACT_RECORDING_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the StopContactStreaming action. */
	static readonly STOP_CONTACT_STREAMING_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopForecastingPlanningSchedulingIntegration action. */
	static readonly STOP_FORECASTING_PLANNING_SCHEDULING_INTEGRATION_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the SubmitContactEvaluation action. */
	static readonly SUBMIT_CONTACT_EVALUATION_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the SuspendContactRecording action. */
	static readonly SUSPEND_CONTACT_RECORDING_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the TagContact action. */
	static readonly TAG_CONTACT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TransferContact action. */
	static readonly TRANSFER_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the UntagContact action. */
	static readonly UNTAG_CONTACT_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAgentStatus action. */
	static readonly UPDATE_AGENT_STATUS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateAttachedFilesConfiguration action. */
	static readonly UPDATE_ATTACHED_FILES_CONFIGURATION_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the UpdateAuthenticationProfile action. */
	static readonly UPDATE_AUTHENTICATION_PROFILE_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContact action. */
	static readonly UPDATE_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the UpdateContactAttributes action. */
	static readonly UPDATE_CONTACT_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the UpdateContactEvaluation action. */
	static readonly UPDATE_CONTACT_EVALUATION_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContactFlowContent action. */
	static readonly UPDATE_CONTACT_FLOW_CONTENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContactFlowMetadata action. */
	static readonly UPDATE_CONTACT_FLOW_METADATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContactFlowModuleAlias action. */
	static readonly UPDATE_CONTACT_FLOW_MODULE_ALIAS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContactFlowModuleContent action. */
	static readonly UPDATE_CONTACT_FLOW_MODULE_CONTENT_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the UpdateContactFlowModuleMetadata action. */
	static readonly UPDATE_CONTACT_FLOW_MODULE_METADATA_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the UpdateContactFlowName action. */
	static readonly UPDATE_CONTACT_FLOW_NAME_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContactRoutingData action. */
	static readonly UPDATE_CONTACT_ROUTING_DATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the UpdateContactSchedule action. */
	static readonly UPDATE_CONTACT_SCHEDULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the UpdateDataTableAttribute action. */
	static readonly UPDATE_DATA_TABLE_ATTRIBUTE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateDataTableMetadata action. */
	static readonly UPDATE_DATA_TABLE_METADATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateDataTablePrimaryValues action. */
	static readonly UPDATE_DATA_TABLE_PRIMARY_VALUES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the UpdateEmailAddressMetadata action. */
	static readonly UPDATE_EMAIL_ADDRESS_METADATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateEvaluationForm action. */
	static readonly UPDATE_EVALUATION_FORM_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateHoursOfOperation action. */
	static readonly UPDATE_HOURS_OF_OPERATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateHoursOfOperationOverride action. */
	static readonly UPDATE_HOURS_OF_OPERATION_OVERRIDE_CONDITION_KEYS: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the UpdateInstanceAttribute action. */
	static readonly UPDATE_INSTANCE_ATTRIBUTE_CONDITION_KEYS: string[] = [
		"connect:AttributeType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateInstanceStorageConfig action. */
	static readonly UPDATE_INSTANCE_STORAGE_CONFIG_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
		"connect:StorageResourceType",
	];
	/** Condition keys applicable to the UpdateMetricContent action. */
	static readonly UPDATE_METRIC_CONTENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateMetricMetadata action. */
	static readonly UPDATE_METRIC_METADATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateNotificationContent action. */
	static readonly UPDATE_NOTIFICATION_CONTENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateParticipantAuthentication action. */
	static readonly UPDATE_PARTICIPANT_AUTHENTICATION_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateParticipantRoleConfig action. */
	static readonly UPDATE_PARTICIPANT_ROLE_CONFIG_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdatePhoneNumber action. */
	static readonly UPDATE_PHONE_NUMBER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdatePhoneNumberMetadata action. */
	static readonly UPDATE_PHONE_NUMBER_METADATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdatePredefinedAttribute action. */
	static readonly UPDATE_PREDEFINED_ATTRIBUTE_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdatePrompt action. */
	static readonly UPDATE_PROMPT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQueueHoursOfOperation action. */
	static readonly UPDATE_QUEUE_HOURS_OF_OPERATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQueueMaxContacts action. */
	static readonly UPDATE_QUEUE_MAX_CONTACTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQueueName action. */
	static readonly UPDATE_QUEUE_NAME_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQueueOutboundCallerConfig action. */
	static readonly UPDATE_QUEUE_OUTBOUND_CALLER_CONFIG_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the UpdateQueueOutboundEmailConfig action. */
	static readonly UPDATE_QUEUE_OUTBOUND_EMAIL_CONFIG_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the UpdateQueueStatus action. */
	static readonly UPDATE_QUEUE_STATUS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQuickConnectConfig action. */
	static readonly UPDATE_QUICK_CONNECT_CONFIG_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQuickConnectName action. */
	static readonly UPDATE_QUICK_CONNECT_NAME_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateRoutingProfileAgentAvailabilityTimer action. */
	static readonly UPDATE_ROUTING_PROFILE_AGENT_AVAILABILITY_TIMER_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the UpdateRoutingProfileConcurrency action. */
	static readonly UPDATE_ROUTING_PROFILE_CONCURRENCY_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the UpdateRoutingProfileDefaultOutboundQueue action. */
	static readonly UPDATE_ROUTING_PROFILE_DEFAULT_OUTBOUND_QUEUE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the UpdateRoutingProfileName action. */
	static readonly UPDATE_ROUTING_PROFILE_NAME_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateRoutingProfileQueues action. */
	static readonly UPDATE_ROUTING_PROFILE_QUEUES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateRule action. */
	static readonly UPDATE_RULE_CONDITION_KEYS: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the UpdateSecurityProfile action. */
	static readonly UPDATE_SECURITY_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateTaskTemplate action. */
	static readonly UPDATE_TASK_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateTrafficDistribution action. */
	static readonly UPDATE_TRAFFIC_DISTRIBUTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateUserHierarchy action. */
	static readonly UPDATE_USER_HIERARCHY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserHierarchyGroupName action. */
	static readonly UPDATE_USER_HIERARCHY_GROUP_NAME_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserHierarchyStructure action. */
	static readonly UPDATE_USER_HIERARCHY_STRUCTURE_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserIdentityInfo action. */
	static readonly UPDATE_USER_IDENTITY_INFO_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserNotificationStatus action. */
	static readonly UPDATE_USER_NOTIFICATION_STATUS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserPhoneConfig action. */
	static readonly UPDATE_USER_PHONE_CONFIG_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserProficiencies action. */
	static readonly UPDATE_USER_PROFICIENCIES_CONDITION_KEYS: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserRoutingProfile action. */
	static readonly UPDATE_USER_ROUTING_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserSecurityProfiles action. */
	static readonly UPDATE_USER_SECURITY_PROFILES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateViewContent action. */
	static readonly UPDATE_VIEW_CONTENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateViewMetadata action. */
	static readonly UPDATE_VIEW_METADATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateWorkspaceMetadata action. */
	static readonly UPDATE_WORKSPACE_METADATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateWorkspacePage action. */
	static readonly UPDATE_WORKSPACE_PAGE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateWorkspaceTheme action. */
	static readonly UPDATE_WORKSPACE_THEME_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateWorkspaceVisibility action. */
	static readonly UPDATE_WORKSPACE_VISIBILITY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: connect:AssignmentType (String) */
	static readonly ASSIGNMENT_TYPE = "connect:AssignmentType";
	/** Condition key: connect:AttributeType (String) */
	static readonly ATTRIBUTE_TYPE = "connect:AttributeType";
	/** Condition key: connect:Channel (String) */
	static readonly CHANNEL = "connect:Channel";
	/** Condition key: connect:ContactAssociationId (String) */
	static readonly CONTACT_ASSOCIATION_ID = "connect:ContactAssociationId";
	/** Condition key: connect:ContactInitiationMethod (String) */
	static readonly CONTACT_INITIATION_METHOD = "connect:ContactInitiationMethod";
	/** Condition key: connect:ExpressionValue (String) */
	static readonly EXPRESSION_VALUE = "connect:ExpressionValue";
	/** Condition key: connect:FlowType (ArrayOfString) */
	static readonly FLOW_TYPE = "connect:FlowType";
	/** Condition key: connect:InstanceId (String) */
	static readonly INSTANCE_ID = "connect:InstanceId";
	/** Condition key: connect:ListRealtimeContactAnalysisSegmentsByOutputType (String) */
	static readonly LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_OUTPUT_TYPE =
		"connect:ListRealtimeContactAnalysisSegmentsByOutputType";
	/** Condition key: connect:ListRealtimeContactAnalysisSegmentsBySegmentType (ArrayOfString) */
	static readonly LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_SEGMENT_TYPE =
		"connect:ListRealtimeContactAnalysisSegmentsBySegmentType";
	/** Condition key: connect:MonitorCapabilities (ArrayOfString) */
	static readonly MONITOR_CAPABILITIES = "connect:MonitorCapabilities";
	/** Condition key: connect:PreferredUserArn (ARN) */
	static readonly PREFERRED_USER_ARN = "connect:PreferredUserArn";
	/** Condition key: connect:PrimaryAttribute/${PrimaryAttribute} (String) */
	static readonly PRIMARY_ATTRIBUTE =
		"connect:PrimaryAttribute/${PrimaryAttribute}";
	/** Condition key: connect:SearchContactsByContactAnalysis (ArrayOfString) */
	static readonly SEARCH_CONTACTS_BY_CONTACT_ANALYSIS =
		"connect:SearchContactsByContactAnalysis";
	/** Condition key: connect:SearchTag/${TagKey} (String) */
	static readonly SEARCH_TAG = "connect:SearchTag/${TagKey}";
	/** Condition key: connect:StorageResourceType (String) */
	static readonly STORAGE_RESOURCE_TYPE = "connect:StorageResourceType";
	/** Condition key: connect:Subtype (String) */
	static readonly SUBTYPE = "connect:Subtype";
	/** Condition key: connect:UserArn (ARN) */
	static readonly USER_ARN = "connect:UserArn";

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
	 * Generates a condition block for `connect:AssignmentType`.
	 */
	static assignmentType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "connect:AssignmentType": value } };
	}

	/**
	 * Generates a condition block for `connect:AttributeType`.
	 */
	static attributeType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "connect:AttributeType": value } };
	}

	/**
	 * Generates a condition block for `connect:Channel`.
	 */
	static channel(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "connect:Channel": value } };
	}

	/**
	 * Generates a condition block for `connect:ContactAssociationId`.
	 */
	static contactAssociationId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "connect:ContactAssociationId": value } };
	}

	/**
	 * Generates a condition block for `connect:ContactInitiationMethod`.
	 */
	static contactInitiationMethod(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "connect:ContactInitiationMethod": value } };
	}

	/**
	 * Generates a condition block for `connect:ExpressionValue`.
	 */
	static expressionValue(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "connect:ExpressionValue": value } };
	}

	/**
	 * Generates a condition block for `connect:FlowType`.
	 */
	static flowType(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "connect:FlowType": values } };
	}

	/**
	 * Generates a condition block for `connect:InstanceId`.
	 */
	static instanceId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "connect:InstanceId": value } };
	}

	/**
	 * Generates a condition block for `connect:ListRealtimeContactAnalysisSegmentsByOutputType`.
	 */
	static listRealtimeContactAnalysisSegmentsByOutputType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"connect:ListRealtimeContactAnalysisSegmentsByOutputType": value,
			},
		};
	}

	/**
	 * Generates a condition block for `connect:ListRealtimeContactAnalysisSegmentsBySegmentType`.
	 */
	static listRealtimeContactAnalysisSegmentsBySegmentType(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"connect:ListRealtimeContactAnalysisSegmentsBySegmentType": values,
			},
		};
	}

	/**
	 * Generates a condition block for `connect:MonitorCapabilities`.
	 */
	static monitorCapabilities(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "connect:MonitorCapabilities": values },
		};
	}

	/**
	 * Generates a condition block for `connect:PreferredUserArn`.
	 */
	static preferredUserARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "connect:PreferredUserArn": value } };
	}

	/**
	 * Generates a condition block for `connect:PrimaryAttribute/${PrimaryAttribute}`.
	 */
	static primaryAttribute(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "connect:PrimaryAttribute/${PrimaryAttribute}": value },
		};
	}

	/**
	 * Generates a condition block for `connect:SearchContactsByContactAnalysis`.
	 */
	static searchContactsByContactAnalysis(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"connect:SearchContactsByContactAnalysis": values,
			},
		};
	}

	/**
	 * Generates a condition block for `connect:SearchTag/${TagKey}`.
	 */
	static searchTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "connect:SearchTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `connect:StorageResourceType`.
	 */
	static storageResourceType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "connect:StorageResourceType": value } };
	}

	/**
	 * Generates a condition block for `connect:Subtype`.
	 */
	static subtype(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "connect:Subtype": value } };
	}

	/**
	 * Generates a condition block for `connect:UserArn`.
	 */
	static userARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "connect:UserArn": value } };
	}
}
