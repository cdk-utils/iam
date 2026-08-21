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
	static readonly ActivateEvaluationForm = "connect:ActivateEvaluationForm";
	/** [Write] connect:AdminGetEmergencyAccessToken */
	static readonly AdminGetEmergencyAccessToken =
		"connect:AdminGetEmergencyAccessToken";
	/** [Write] connect:AssociateAnalyticsDataSet */
	static readonly AssociateAnalyticsDataSet =
		"connect:AssociateAnalyticsDataSet";
	/** [Write] connect:AssociateApprovedOrigin */
	static readonly AssociateApprovedOrigin = "connect:AssociateApprovedOrigin";
	/** [Write] connect:AssociateBot */
	static readonly AssociateBot = "connect:AssociateBot";
	/** [Write] connect:AssociateContactWithUser */
	static readonly AssociateContactWithUser = "connect:AssociateContactWithUser";
	/** [Write] connect:AssociateCustomerProfilesDomain */
	static readonly AssociateCustomerProfilesDomain =
		"connect:AssociateCustomerProfilesDomain";
	/** [Write] connect:AssociateDefaultVocabulary */
	static readonly AssociateDefaultVocabulary =
		"connect:AssociateDefaultVocabulary";
	/** [Write] connect:AssociateEmailAddressAlias */
	static readonly AssociateEmailAddressAlias =
		"connect:AssociateEmailAddressAlias";
	/** [Write] connect:AssociateFlow */
	static readonly AssociateFlow = "connect:AssociateFlow";
	/** [Write] connect:AssociateInstanceStorageConfig */
	static readonly AssociateInstanceStorageConfig =
		"connect:AssociateInstanceStorageConfig";
	/** [Write] connect:AssociateLambdaFunction */
	static readonly AssociateLambdaFunction = "connect:AssociateLambdaFunction";
	/** [Write] connect:AssociateLexBot */
	static readonly AssociateLexBot = "connect:AssociateLexBot";
	/** [Write] connect:AssociatePhoneNumberContactFlow */
	static readonly AssociatePhoneNumberContactFlow =
		"connect:AssociatePhoneNumberContactFlow";
	/** [Write] connect:AssociateQueueEmailAddresses */
	static readonly AssociateQueueEmailAddresses =
		"connect:AssociateQueueEmailAddresses";
	/** [Write] connect:AssociateQueueQuickConnects */
	static readonly AssociateQueueQuickConnects =
		"connect:AssociateQueueQuickConnects";
	/** [Write] connect:AssociateRoutingProfileQueues */
	static readonly AssociateRoutingProfileQueues =
		"connect:AssociateRoutingProfileQueues";
	/** [Write] connect:AssociateSecurityKey */
	static readonly AssociateSecurityKey = "connect:AssociateSecurityKey";
	/** [Write] connect:AssociateSecurityProfiles */
	static readonly AssociateSecurityProfiles =
		"connect:AssociateSecurityProfiles";
	/** [Write] connect:AssociateTrafficDistributionGroupUser */
	static readonly AssociateTrafficDistributionGroupUser =
		"connect:AssociateTrafficDistributionGroupUser";
	/** [Write] connect:AssociateUserProficiencies */
	static readonly AssociateUserProficiencies =
		"connect:AssociateUserProficiencies";
	/** [Write] connect:AssociateWorkspace */
	static readonly AssociateWorkspace = "connect:AssociateWorkspace";
	/** [Write] connect:BatchAssociateAnalyticsDataSet */
	static readonly BatchAssociateAnalyticsDataSet =
		"connect:BatchAssociateAnalyticsDataSet";
	/** [Write] connect:BatchCreateDataTableValue */
	static readonly BatchCreateDataTableValue =
		"connect:BatchCreateDataTableValue";
	/** [Write] connect:BatchDeleteDataTableValue */
	static readonly BatchDeleteDataTableValue =
		"connect:BatchDeleteDataTableValue";
	/** [Read] connect:BatchDescribeDataTableValue */
	static readonly BatchDescribeDataTableValue =
		"connect:BatchDescribeDataTableValue";
	/** [Write] connect:BatchDisassociateAnalyticsDataSet */
	static readonly BatchDisassociateAnalyticsDataSet =
		"connect:BatchDisassociateAnalyticsDataSet";
	/** [Read] connect:BatchGetAttachedFileMetadata */
	static readonly BatchGetAttachedFileMetadata =
		"connect:BatchGetAttachedFileMetadata";
	/** [List] connect:BatchGetFlowAssociation */
	static readonly BatchGetFlowAssociation = "connect:BatchGetFlowAssociation";
	/** [Write] connect:BatchPutContact */
	static readonly BatchPutContact = "connect:BatchPutContact";
	/** [Write] connect:BatchUpdateDataTableValue */
	static readonly BatchUpdateDataTableValue =
		"connect:BatchUpdateDataTableValue";
	/** [Write] connect:ClaimPhoneNumber */
	static readonly ClaimPhoneNumber = "connect:ClaimPhoneNumber";
	/** [Write] connect:CompleteAttachedFileUpload */
	static readonly CompleteAttachedFileUpload =
		"connect:CompleteAttachedFileUpload";
	/** [Write] connect:CreateAgentStatus */
	static readonly CreateAgentStatus = "connect:CreateAgentStatus";
	/** [Write] connect:CreateAttachedFile */
	static readonly CreateAttachedFile = "connect:CreateAttachedFile";
	/** [Write] connect:CreateAuthenticationProfile */
	static readonly CreateAuthenticationProfile =
		"connect:CreateAuthenticationProfile";
	/** [Write] connect:CreateContact */
	static readonly CreateContact = "connect:CreateContact";
	/** [Write] connect:CreateContactFlow */
	static readonly CreateContactFlow = "connect:CreateContactFlow";
	/** [Write] connect:CreateContactFlowModule */
	static readonly CreateContactFlowModule = "connect:CreateContactFlowModule";
	/** [Write] connect:CreateContactFlowModuleAlias */
	static readonly CreateContactFlowModuleAlias =
		"connect:CreateContactFlowModuleAlias";
	/** [Write] connect:CreateContactFlowModuleVersion */
	static readonly CreateContactFlowModuleVersion =
		"connect:CreateContactFlowModuleVersion";
	/** [Write] connect:CreateContactFlowVersion */
	static readonly CreateContactFlowVersion = "connect:CreateContactFlowVersion";
	/** [Write] connect:CreateDataTable */
	static readonly CreateDataTable = "connect:CreateDataTable";
	/** [Write] connect:CreateDataTableAttribute */
	static readonly CreateDataTableAttribute = "connect:CreateDataTableAttribute";
	/** [Write] connect:CreateEmailAddress */
	static readonly CreateEmailAddress = "connect:CreateEmailAddress";
	/** [Write] connect:CreateEvaluationForm */
	static readonly CreateEvaluationForm = "connect:CreateEvaluationForm";
	/** [Write] connect:CreateHoursOfOperation */
	static readonly CreateHoursOfOperation = "connect:CreateHoursOfOperation";
	/** [Write] connect:CreateHoursOfOperationOverride */
	static readonly CreateHoursOfOperationOverride =
		"connect:CreateHoursOfOperationOverride";
	/** [Write] connect:CreateInstance */
	static readonly CreateInstance = "connect:CreateInstance";
	/** [Write] connect:CreateIntegrationAssociation */
	static readonly CreateIntegrationAssociation =
		"connect:CreateIntegrationAssociation";
	/** [Write] connect:CreateMetric */
	static readonly CreateMetric = "connect:CreateMetric";
	/** [Write] connect:CreateNotification */
	static readonly CreateNotification = "connect:CreateNotification";
	/** [Write] connect:CreateParticipant */
	static readonly CreateParticipant = "connect:CreateParticipant";
	/** [Write] connect:CreatePersistentContactAssociation */
	static readonly CreatePersistentContactAssociation =
		"connect:CreatePersistentContactAssociation";
	/** [Write] connect:CreatePredefinedAttribute */
	static readonly CreatePredefinedAttribute =
		"connect:CreatePredefinedAttribute";
	/** [Write] connect:CreatePrompt */
	static readonly CreatePrompt = "connect:CreatePrompt";
	/** [Write] connect:CreatePushNotificationRegistration */
	static readonly CreatePushNotificationRegistration =
		"connect:CreatePushNotificationRegistration";
	/** [Write] connect:CreateQueue */
	static readonly CreateQueue = "connect:CreateQueue";
	/** [Write] connect:CreateQuickConnect */
	static readonly CreateQuickConnect = "connect:CreateQuickConnect";
	/** [Write] connect:CreateRoutingProfile */
	static readonly CreateRoutingProfile = "connect:CreateRoutingProfile";
	/** [Write] connect:CreateRule */
	static readonly CreateRule = "connect:CreateRule";
	/** [Write] connect:CreateSecurityProfile */
	static readonly CreateSecurityProfile = "connect:CreateSecurityProfile";
	/** [Write] connect:CreateTaskTemplate */
	static readonly CreateTaskTemplate = "connect:CreateTaskTemplate";
	/** [Write] connect:CreateTrafficDistributionGroup */
	static readonly CreateTrafficDistributionGroup =
		"connect:CreateTrafficDistributionGroup";
	/** [Write] connect:CreateUseCase */
	static readonly CreateUseCase = "connect:CreateUseCase";
	/** [Write] connect:CreateUser */
	static readonly CreateUser = "connect:CreateUser";
	/** [Write] connect:CreateUserHierarchyGroup */
	static readonly CreateUserHierarchyGroup = "connect:CreateUserHierarchyGroup";
	/** [Write] connect:CreateView */
	static readonly CreateView = "connect:CreateView";
	/** [Write] connect:CreateViewVersion */
	static readonly CreateViewVersion = "connect:CreateViewVersion";
	/** [Write] connect:CreateVocabulary */
	static readonly CreateVocabulary = "connect:CreateVocabulary";
	/** [Write] connect:CreateWorkspace */
	static readonly CreateWorkspace = "connect:CreateWorkspace";
	/** [Write] connect:CreateWorkspacePage */
	static readonly CreateWorkspacePage = "connect:CreateWorkspacePage";
	/** [Write] connect:DeactivateEvaluationForm */
	static readonly DeactivateEvaluationForm = "connect:DeactivateEvaluationForm";
	/** [Write] connect:DeleteAttachedFile */
	static readonly DeleteAttachedFile = "connect:DeleteAttachedFile";
	/** [Write] connect:DeleteContactEvaluation */
	static readonly DeleteContactEvaluation = "connect:DeleteContactEvaluation";
	/** [Write] connect:DeleteContactFlow */
	static readonly DeleteContactFlow = "connect:DeleteContactFlow";
	/** [Write] connect:DeleteContactFlowModule */
	static readonly DeleteContactFlowModule = "connect:DeleteContactFlowModule";
	/** [Write] connect:DeleteContactFlowModuleAlias */
	static readonly DeleteContactFlowModuleAlias =
		"connect:DeleteContactFlowModuleAlias";
	/** [Write] connect:DeleteContactFlowModuleVersion */
	static readonly DeleteContactFlowModuleVersion =
		"connect:DeleteContactFlowModuleVersion";
	/** [Write] connect:DeleteContactFlowVersion */
	static readonly DeleteContactFlowVersion = "connect:DeleteContactFlowVersion";
	/** [Write] connect:DeleteDataTable */
	static readonly DeleteDataTable = "connect:DeleteDataTable";
	/** [Write] connect:DeleteDataTableAttribute */
	static readonly DeleteDataTableAttribute = "connect:DeleteDataTableAttribute";
	/** [Write] connect:DeleteEmailAddress */
	static readonly DeleteEmailAddress = "connect:DeleteEmailAddress";
	/** [Write] connect:DeleteEvaluationForm */
	static readonly DeleteEvaluationForm = "connect:DeleteEvaluationForm";
	/** [Write] connect:DeleteHoursOfOperation */
	static readonly DeleteHoursOfOperation = "connect:DeleteHoursOfOperation";
	/** [Write] connect:DeleteHoursOfOperationOverride */
	static readonly DeleteHoursOfOperationOverride =
		"connect:DeleteHoursOfOperationOverride";
	/** [Write] connect:DeleteInstance */
	static readonly DeleteInstance = "connect:DeleteInstance";
	/** [Write] connect:DeleteIntegrationAssociation */
	static readonly DeleteIntegrationAssociation =
		"connect:DeleteIntegrationAssociation";
	/** [Write] connect:DeleteMetric */
	static readonly DeleteMetric = "connect:DeleteMetric";
	/** [Write] connect:DeleteNotification */
	static readonly DeleteNotification = "connect:DeleteNotification";
	/** [Write] connect:DeletePredefinedAttribute */
	static readonly DeletePredefinedAttribute =
		"connect:DeletePredefinedAttribute";
	/** [Write] connect:DeletePrompt */
	static readonly DeletePrompt = "connect:DeletePrompt";
	/** [Write] connect:DeletePushNotificationRegistration */
	static readonly DeletePushNotificationRegistration =
		"connect:DeletePushNotificationRegistration";
	/** [Write] connect:DeleteQueue */
	static readonly DeleteQueue = "connect:DeleteQueue";
	/** [Write] connect:DeleteQuickConnect */
	static readonly DeleteQuickConnect = "connect:DeleteQuickConnect";
	/** [Write] connect:DeleteRoutingProfile */
	static readonly DeleteRoutingProfile = "connect:DeleteRoutingProfile";
	/** [Write] connect:DeleteRule */
	static readonly DeleteRule = "connect:DeleteRule";
	/** [Write] connect:DeleteSecurityProfile */
	static readonly DeleteSecurityProfile = "connect:DeleteSecurityProfile";
	/** [Write] connect:DeleteTaskTemplate */
	static readonly DeleteTaskTemplate = "connect:DeleteTaskTemplate";
	/** [Write] connect:DeleteTrafficDistributionGroup */
	static readonly DeleteTrafficDistributionGroup =
		"connect:DeleteTrafficDistributionGroup";
	/** [Write] connect:DeleteUseCase */
	static readonly DeleteUseCase = "connect:DeleteUseCase";
	/** [Write] connect:DeleteUser */
	static readonly DeleteUser = "connect:DeleteUser";
	/** [Write] connect:DeleteUserHierarchyGroup */
	static readonly DeleteUserHierarchyGroup = "connect:DeleteUserHierarchyGroup";
	/** [Write] connect:DeleteView */
	static readonly DeleteView = "connect:DeleteView";
	/** [Write] connect:DeleteViewVersion */
	static readonly DeleteViewVersion = "connect:DeleteViewVersion";
	/** [Write] connect:DeleteVocabulary */
	static readonly DeleteVocabulary = "connect:DeleteVocabulary";
	/** [Write] connect:DeleteWorkspace */
	static readonly DeleteWorkspace = "connect:DeleteWorkspace";
	/** [Write] connect:DeleteWorkspaceMedia */
	static readonly DeleteWorkspaceMedia = "connect:DeleteWorkspaceMedia";
	/** [Write] connect:DeleteWorkspacePage */
	static readonly DeleteWorkspacePage = "connect:DeleteWorkspacePage";
	/** [Read] connect:DescribeAgentStatus */
	static readonly DescribeAgentStatus = "connect:DescribeAgentStatus";
	/** [Read] connect:DescribeAttachedFilesConfiguration */
	static readonly DescribeAttachedFilesConfiguration =
		"connect:DescribeAttachedFilesConfiguration";
	/** [Read] connect:DescribeAuthenticationProfile */
	static readonly DescribeAuthenticationProfile =
		"connect:DescribeAuthenticationProfile";
	/** [Read] connect:DescribeContact */
	static readonly DescribeContact = "connect:DescribeContact";
	/** [Read] connect:DescribeContactEvaluation */
	static readonly DescribeContactEvaluation =
		"connect:DescribeContactEvaluation";
	/** [Read] connect:DescribeContactFlow */
	static readonly DescribeContactFlow = "connect:DescribeContactFlow";
	/** [Read] connect:DescribeContactFlowModule */
	static readonly DescribeContactFlowModule =
		"connect:DescribeContactFlowModule";
	/** [Read] connect:DescribeContactFlowModuleAlias */
	static readonly DescribeContactFlowModuleAlias =
		"connect:DescribeContactFlowModuleAlias";
	/** [Read] connect:DescribeDataTable */
	static readonly DescribeDataTable = "connect:DescribeDataTable";
	/** [Read] connect:DescribeDataTableAttribute */
	static readonly DescribeDataTableAttribute =
		"connect:DescribeDataTableAttribute";
	/** [Read] connect:DescribeEmailAddress */
	static readonly DescribeEmailAddress = "connect:DescribeEmailAddress";
	/** [Read] connect:DescribeEvaluationForm */
	static readonly DescribeEvaluationForm = "connect:DescribeEvaluationForm";
	/** [Read] connect:DescribeForecastingPlanningSchedulingIntegration */
	static readonly DescribeForecastingPlanningSchedulingIntegration =
		"connect:DescribeForecastingPlanningSchedulingIntegration";
	/** [Read] connect:DescribeHoursOfOperation */
	static readonly DescribeHoursOfOperation = "connect:DescribeHoursOfOperation";
	/** [Read] connect:DescribeHoursOfOperationOverride */
	static readonly DescribeHoursOfOperationOverride =
		"connect:DescribeHoursOfOperationOverride";
	/** [Read] connect:DescribeInstance */
	static readonly DescribeInstance = "connect:DescribeInstance";
	/** [Read] connect:DescribeInstanceAttribute */
	static readonly DescribeInstanceAttribute =
		"connect:DescribeInstanceAttribute";
	/** [Read] connect:DescribeInstanceStorageConfig */
	static readonly DescribeInstanceStorageConfig =
		"connect:DescribeInstanceStorageConfig";
	/** [Read] connect:DescribeMetric */
	static readonly DescribeMetric = "connect:DescribeMetric";
	/** [Read] connect:DescribeNotification */
	static readonly DescribeNotification = "connect:DescribeNotification";
	/** [Read] connect:DescribePhoneNumber */
	static readonly DescribePhoneNumber = "connect:DescribePhoneNumber";
	/** [Read] connect:DescribePredefinedAttribute */
	static readonly DescribePredefinedAttribute =
		"connect:DescribePredefinedAttribute";
	/** [Read] connect:DescribePrompt */
	static readonly DescribePrompt = "connect:DescribePrompt";
	/** [Read] connect:DescribeQueue */
	static readonly DescribeQueue = "connect:DescribeQueue";
	/** [Read] connect:DescribeQuickConnect */
	static readonly DescribeQuickConnect = "connect:DescribeQuickConnect";
	/** [Read] connect:DescribeRoutingProfile */
	static readonly DescribeRoutingProfile = "connect:DescribeRoutingProfile";
	/** [Read] connect:DescribeRule */
	static readonly DescribeRule = "connect:DescribeRule";
	/** [Read] connect:DescribeSecurityProfile */
	static readonly DescribeSecurityProfile = "connect:DescribeSecurityProfile";
	/** [Read] connect:DescribeTrafficDistributionGroup */
	static readonly DescribeTrafficDistributionGroup =
		"connect:DescribeTrafficDistributionGroup";
	/** [Read] connect:DescribeUser */
	static readonly DescribeUser = "connect:DescribeUser";
	/** [Read] connect:DescribeUserHierarchyGroup */
	static readonly DescribeUserHierarchyGroup =
		"connect:DescribeUserHierarchyGroup";
	/** [Read] connect:DescribeUserHierarchyStructure */
	static readonly DescribeUserHierarchyStructure =
		"connect:DescribeUserHierarchyStructure";
	/** [Read] connect:DescribeView */
	static readonly DescribeView = "connect:DescribeView";
	/** [Read] connect:DescribeVocabulary */
	static readonly DescribeVocabulary = "connect:DescribeVocabulary";
	/** [Read] connect:DescribeWorkspace */
	static readonly DescribeWorkspace = "connect:DescribeWorkspace";
	/** [Write] connect:DisassociateAnalyticsDataSet */
	static readonly DisassociateAnalyticsDataSet =
		"connect:DisassociateAnalyticsDataSet";
	/** [Write] connect:DisassociateApprovedOrigin */
	static readonly DisassociateApprovedOrigin =
		"connect:DisassociateApprovedOrigin";
	/** [Write] connect:DisassociateBot */
	static readonly DisassociateBot = "connect:DisassociateBot";
	/** [Write] connect:DisassociateCustomerProfilesDomain */
	static readonly DisassociateCustomerProfilesDomain =
		"connect:DisassociateCustomerProfilesDomain";
	/** [Write] connect:DisassociateEmailAddressAlias */
	static readonly DisassociateEmailAddressAlias =
		"connect:DisassociateEmailAddressAlias";
	/** [Write] connect:DisassociateFlow */
	static readonly DisassociateFlow = "connect:DisassociateFlow";
	/** [Write] connect:DisassociateInstanceStorageConfig */
	static readonly DisassociateInstanceStorageConfig =
		"connect:DisassociateInstanceStorageConfig";
	/** [Write] connect:DisassociateLambdaFunction */
	static readonly DisassociateLambdaFunction =
		"connect:DisassociateLambdaFunction";
	/** [Write] connect:DisassociateLexBot */
	static readonly DisassociateLexBot = "connect:DisassociateLexBot";
	/** [Write] connect:DisassociatePhoneNumberContactFlow */
	static readonly DisassociatePhoneNumberContactFlow =
		"connect:DisassociatePhoneNumberContactFlow";
	/** [Write] connect:DisassociateQueueEmailAddresses */
	static readonly DisassociateQueueEmailAddresses =
		"connect:DisassociateQueueEmailAddresses";
	/** [Write] connect:DisassociateQueueQuickConnects */
	static readonly DisassociateQueueQuickConnects =
		"connect:DisassociateQueueQuickConnects";
	/** [Write] connect:DisassociateRoutingProfileQueues */
	static readonly DisassociateRoutingProfileQueues =
		"connect:DisassociateRoutingProfileQueues";
	/** [Write] connect:DisassociateSecurityKey */
	static readonly DisassociateSecurityKey = "connect:DisassociateSecurityKey";
	/** [Write] connect:DisassociateSecurityProfiles */
	static readonly DisassociateSecurityProfiles =
		"connect:DisassociateSecurityProfiles";
	/** [Write] connect:DisassociateTrafficDistributionGroupUser */
	static readonly DisassociateTrafficDistributionGroupUser =
		"connect:DisassociateTrafficDistributionGroupUser";
	/** [Write] connect:DisassociateUserProficiencies */
	static readonly DisassociateUserProficiencies =
		"connect:DisassociateUserProficiencies";
	/** [Write] connect:DisassociateWorkspace */
	static readonly DisassociateWorkspace = "connect:DisassociateWorkspace";
	/** [Write] connect:DismissUserContact */
	static readonly DismissUserContact = "connect:DismissUserContact";
	/** [Read] connect:EvaluateDataTableValues */
	static readonly EvaluateDataTableValues = "connect:EvaluateDataTableValues";
	/** [Read] connect:GetAttachedFile */
	static readonly actionGetAttachedFile = "connect:GetAttachedFile";
	/** [Read] connect:GetContactAttributes */
	static readonly actionGetContactAttributes = "connect:GetContactAttributes";
	/** [Read] connect:GetContactMetrics */
	static readonly actionGetContactMetrics = "connect:GetContactMetrics";
	/** [Read] connect:GetCurrentMetricData */
	static readonly actionGetCurrentMetricData = "connect:GetCurrentMetricData";
	/** [Read] connect:GetCurrentUserData */
	static readonly actionGetCurrentUserData = "connect:GetCurrentUserData";
	/** [Read] connect:GetEffectiveHoursOfOperations */
	static readonly actionGetEffectiveHoursOfOperations =
		"connect:GetEffectiveHoursOfOperations";
	/** [Read] connect:GetEvaluationFormValidation */
	static readonly actionGetEvaluationFormValidation =
		"connect:GetEvaluationFormValidation";
	/** [Read] connect:GetFederationToken */
	static readonly actionGetFederationToken = "connect:GetFederationToken";
	/** [Read] connect:GetFlowAssociation */
	static readonly actionGetFlowAssociation = "connect:GetFlowAssociation";
	/** [Read] connect:GetMetricData */
	static readonly actionGetMetricData = "connect:GetMetricData";
	/** [Read] connect:GetMetricDataV2 */
	static readonly actionGetMetricDataV2 = "connect:GetMetricDataV2";
	/** [Read] connect:GetPromptFile */
	static readonly actionGetPromptFile = "connect:GetPromptFile";
	/** [Read] connect:GetTaskTemplate */
	static readonly actionGetTaskTemplate = "connect:GetTaskTemplate";
	/** [List] connect:GetTrafficDistribution */
	static readonly actionGetTrafficDistribution =
		"connect:GetTrafficDistribution";
	/** [Write] connect:ImportPhoneNumber */
	static readonly ImportPhoneNumber = "connect:ImportPhoneNumber";
	/** [Write] connect:ImportWorkspaceMedia */
	static readonly ImportWorkspaceMedia = "connect:ImportWorkspaceMedia";
	/** [List] connect:ListAgentStatuses */
	static readonly ListAgentStatuses = "connect:ListAgentStatuses";
	/** [List] connect:ListAnalyticsDataAssociations */
	static readonly ListAnalyticsDataAssociations =
		"connect:ListAnalyticsDataAssociations";
	/** [List] connect:ListAnalyticsDataLakeDataSets */
	static readonly ListAnalyticsDataLakeDataSets =
		"connect:ListAnalyticsDataLakeDataSets";
	/** [List] connect:ListApprovedOrigins */
	static readonly ListApprovedOrigins = "connect:ListApprovedOrigins";
	/** [List] connect:ListAssociatedContacts */
	static readonly ListAssociatedContacts = "connect:ListAssociatedContacts";
	/** [List] connect:ListAttachedFilesConfigurations */
	static readonly ListAttachedFilesConfigurations =
		"connect:ListAttachedFilesConfigurations";
	/** [List] connect:ListAuthenticationProfiles */
	static readonly ListAuthenticationProfiles =
		"connect:ListAuthenticationProfiles";
	/** [List] connect:ListBots */
	static readonly ListBots = "connect:ListBots";
	/** [List] connect:ListContactEvaluations */
	static readonly ListContactEvaluations = "connect:ListContactEvaluations";
	/** [List] connect:ListContactFlowModuleAliases */
	static readonly ListContactFlowModuleAliases =
		"connect:ListContactFlowModuleAliases";
	/** [List] connect:ListContactFlowModuleVersions */
	static readonly ListContactFlowModuleVersions =
		"connect:ListContactFlowModuleVersions";
	/** [List] connect:ListContactFlowModules */
	static readonly ListContactFlowModules = "connect:ListContactFlowModules";
	/** [List] connect:ListContactFlowVersions */
	static readonly ListContactFlowVersions = "connect:ListContactFlowVersions";
	/** [List] connect:ListContactFlows */
	static readonly ListContactFlows = "connect:ListContactFlows";
	/** [List] connect:ListContactReferences */
	static readonly ListContactReferences = "connect:ListContactReferences";
	/** [List] connect:ListDataTableAttributes */
	static readonly ListDataTableAttributes = "connect:ListDataTableAttributes";
	/** [List] connect:ListDataTablePrimaryValues */
	static readonly ListDataTablePrimaryValues =
		"connect:ListDataTablePrimaryValues";
	/** [List] connect:ListDataTableValues */
	static readonly ListDataTableValues = "connect:ListDataTableValues";
	/** [List] connect:ListDataTables */
	static readonly ListDataTables = "connect:ListDataTables";
	/** [List] connect:ListDefaultVocabularies */
	static readonly ListDefaultVocabularies = "connect:ListDefaultVocabularies";
	/** [List] connect:ListEntitySecurityProfiles */
	static readonly ListEntitySecurityProfiles =
		"connect:ListEntitySecurityProfiles";
	/** [List] connect:ListEvaluationFormVersions */
	static readonly ListEvaluationFormVersions =
		"connect:ListEvaluationFormVersions";
	/** [List] connect:ListEvaluationForms */
	static readonly ListEvaluationForms = "connect:ListEvaluationForms";
	/** [List] connect:ListFlowAssociations */
	static readonly ListFlowAssociations = "connect:ListFlowAssociations";
	/** [List] connect:ListHoursOfOperationOverrides */
	static readonly ListHoursOfOperationOverrides =
		"connect:ListHoursOfOperationOverrides";
	/** [List] connect:ListHoursOfOperations */
	static readonly ListHoursOfOperations = "connect:ListHoursOfOperations";
	/** [List] connect:ListInstanceAttributes */
	static readonly ListInstanceAttributes = "connect:ListInstanceAttributes";
	/** [List] connect:ListInstanceStorageConfigs */
	static readonly ListInstanceStorageConfigs =
		"connect:ListInstanceStorageConfigs";
	/** [List] connect:ListInstances */
	static readonly ListInstances = "connect:ListInstances";
	/** [List] connect:ListIntegrationAssociations */
	static readonly ListIntegrationAssociations =
		"connect:ListIntegrationAssociations";
	/** [List] connect:ListLambdaFunctions */
	static readonly ListLambdaFunctions = "connect:ListLambdaFunctions";
	/** [List] connect:ListLexBots */
	static readonly ListLexBots = "connect:ListLexBots";
	/** [List] connect:ListMetrics */
	static readonly ListMetrics = "connect:ListMetrics";
	/** [Read] connect:ListNotifications */
	static readonly ListNotifications = "connect:ListNotifications";
	/** [List] connect:ListPhoneNumbers */
	static readonly ListPhoneNumbers = "connect:ListPhoneNumbers";
	/** [List] connect:ListPhoneNumbersV2 */
	static readonly ListPhoneNumbersV2 = "connect:ListPhoneNumbersV2";
	/** [List] connect:ListPredefinedAttributes */
	static readonly ListPredefinedAttributes = "connect:ListPredefinedAttributes";
	/** [List] connect:ListPrompts */
	static readonly ListPrompts = "connect:ListPrompts";
	/** [List] connect:ListQueueEmailAddresses */
	static readonly ListQueueEmailAddresses = "connect:ListQueueEmailAddresses";
	/** [List] connect:ListQueueQuickConnects */
	static readonly ListQueueQuickConnects = "connect:ListQueueQuickConnects";
	/** [List] connect:ListQueues */
	static readonly ListQueues = "connect:ListQueues";
	/** [List] connect:ListQuickConnects */
	static readonly ListQuickConnects = "connect:ListQuickConnects";
	/** [Read] connect:ListRealtimeContactAnalysisSegments */
	static readonly ListRealtimeContactAnalysisSegments =
		"connect:ListRealtimeContactAnalysisSegments";
	/** [List] connect:ListRealtimeContactAnalysisSegmentsV2 */
	static readonly ListRealtimeContactAnalysisSegmentsV2 =
		"connect:ListRealtimeContactAnalysisSegmentsV2";
	/** [List] connect:ListRoutingProfileManualAssignmentQueues */
	static readonly ListRoutingProfileManualAssignmentQueues =
		"connect:ListRoutingProfileManualAssignmentQueues";
	/** [List] connect:ListRoutingProfileQueues */
	static readonly ListRoutingProfileQueues = "connect:ListRoutingProfileQueues";
	/** [List] connect:ListRoutingProfiles */
	static readonly ListRoutingProfiles = "connect:ListRoutingProfiles";
	/** [List] connect:ListRules */
	static readonly ListRules = "connect:ListRules";
	/** [List] connect:ListSecurityKeys */
	static readonly ListSecurityKeys = "connect:ListSecurityKeys";
	/** [List] connect:ListSecurityProfileApplications */
	static readonly ListSecurityProfileApplications =
		"connect:ListSecurityProfileApplications";
	/** [List] connect:ListSecurityProfileFlowModules */
	static readonly ListSecurityProfileFlowModules =
		"connect:ListSecurityProfileFlowModules";
	/** [List] connect:ListSecurityProfilePermissions */
	static readonly ListSecurityProfilePermissions =
		"connect:ListSecurityProfilePermissions";
	/** [List] connect:ListSecurityProfiles */
	static readonly ListSecurityProfiles = "connect:ListSecurityProfiles";
	/** [Read] connect:ListTagsForResource */
	static readonly ListTagsForResource = "connect:ListTagsForResource";
	/** [List] connect:ListTaskTemplates */
	static readonly ListTaskTemplates = "connect:ListTaskTemplates";
	/** [List] connect:ListTrafficDistributionGroupUsers */
	static readonly ListTrafficDistributionGroupUsers =
		"connect:ListTrafficDistributionGroupUsers";
	/** [List] connect:ListTrafficDistributionGroups */
	static readonly ListTrafficDistributionGroups =
		"connect:ListTrafficDistributionGroups";
	/** [List] connect:ListUseCases */
	static readonly ListUseCases = "connect:ListUseCases";
	/** [List] connect:ListUserHierarchyGroups */
	static readonly ListUserHierarchyGroups = "connect:ListUserHierarchyGroups";
	/** [Read] connect:ListUserNotifications */
	static readonly ListUserNotifications = "connect:ListUserNotifications";
	/** [List] connect:ListUserProficiencies */
	static readonly ListUserProficiencies = "connect:ListUserProficiencies";
	/** [List] connect:ListUsers */
	static readonly ListUsers = "connect:ListUsers";
	/** [List] connect:ListViewVersions */
	static readonly ListViewVersions = "connect:ListViewVersions";
	/** [List] connect:ListViews */
	static readonly ListViews = "connect:ListViews";
	/** [List] connect:ListWorkspaceMedia */
	static readonly ListWorkspaceMedia = "connect:ListWorkspaceMedia";
	/** [List] connect:ListWorkspacePages */
	static readonly ListWorkspacePages = "connect:ListWorkspacePages";
	/** [List] connect:ListWorkspaces */
	static readonly ListWorkspaces = "connect:ListWorkspaces";
	/** [Write] connect:MonitorContact */
	static readonly MonitorContact = "connect:MonitorContact";
	/** [Write] connect:PauseContact */
	static readonly PauseContact = "connect:PauseContact";
	/** [Write] connect:PutUserStatus */
	static readonly PutUserStatus = "connect:PutUserStatus";
	/** [Write] connect:ReleasePhoneNumber */
	static readonly ReleasePhoneNumber = "connect:ReleasePhoneNumber";
	/** [Write] connect:ReplicateInstance */
	static readonly ReplicateInstance = "connect:ReplicateInstance";
	/** [Write] connect:ResumeContact */
	static readonly ResumeContact = "connect:ResumeContact";
	/** [Write] connect:ResumeContactRecording */
	static readonly ResumeContactRecording = "connect:ResumeContactRecording";
	/** [Read] connect:SearchAgentStatuses */
	static readonly SearchAgentStatuses = "connect:SearchAgentStatuses";
	/** [List] connect:SearchAvailablePhoneNumbers */
	static readonly SearchAvailablePhoneNumbers =
		"connect:SearchAvailablePhoneNumbers";
	/** [Read] connect:SearchContactEvaluations */
	static readonly SearchContactEvaluations = "connect:SearchContactEvaluations";
	/** [Read] connect:SearchContactFlowModules */
	static readonly SearchContactFlowModules = "connect:SearchContactFlowModules";
	/** [Read] connect:SearchContactFlows */
	static readonly SearchContactFlows = "connect:SearchContactFlows";
	/** [Read] connect:SearchContacts */
	static readonly SearchContacts = "connect:SearchContacts";
	/** [Read] connect:SearchDataTables */
	static readonly SearchDataTables = "connect:SearchDataTables";
	/** [Read] connect:SearchEmailAddresses */
	static readonly SearchEmailAddresses = "connect:SearchEmailAddresses";
	/** [Read] connect:SearchEvaluationForms */
	static readonly SearchEvaluationForms = "connect:SearchEvaluationForms";
	/** [Read] connect:SearchHoursOfOperationOverrides */
	static readonly SearchHoursOfOperationOverrides =
		"connect:SearchHoursOfOperationOverrides";
	/** [Read] connect:SearchHoursOfOperations */
	static readonly SearchHoursOfOperations = "connect:SearchHoursOfOperations";
	/** [Read] connect:SearchMetrics */
	static readonly SearchMetrics = "connect:SearchMetrics";
	/** [Read] connect:SearchNotifications */
	static readonly SearchNotifications = "connect:SearchNotifications";
	/** [Read] connect:SearchPredefinedAttributes */
	static readonly SearchPredefinedAttributes =
		"connect:SearchPredefinedAttributes";
	/** [Read] connect:SearchPrompts */
	static readonly SearchPrompts = "connect:SearchPrompts";
	/** [Read] connect:SearchQueues */
	static readonly SearchQueues = "connect:SearchQueues";
	/** [Read] connect:SearchQuickConnects */
	static readonly SearchQuickConnects = "connect:SearchQuickConnects";
	/** [List] connect:SearchResourceTags */
	static readonly SearchResourceTags = "connect:SearchResourceTags";
	/** [Read] connect:SearchRoutingProfiles */
	static readonly SearchRoutingProfiles = "connect:SearchRoutingProfiles";
	/** [Read] connect:SearchRules */
	static readonly SearchRules = "connect:SearchRules";
	/** [Read] connect:SearchSecurityProfiles */
	static readonly SearchSecurityProfiles = "connect:SearchSecurityProfiles";
	/** [Read] connect:SearchUserHierarchyGroups */
	static readonly SearchUserHierarchyGroups =
		"connect:SearchUserHierarchyGroups";
	/** [Read] connect:SearchUsers */
	static readonly SearchUsers = "connect:SearchUsers";
	/** [Read] connect:SearchViews */
	static readonly SearchViews = "connect:SearchViews";
	/** [List] connect:SearchVocabularies */
	static readonly SearchVocabularies = "connect:SearchVocabularies";
	/** [Read] connect:SearchWorkspaceAssociations */
	static readonly SearchWorkspaceAssociations =
		"connect:SearchWorkspaceAssociations";
	/** [Read] connect:SearchWorkspaces */
	static readonly SearchWorkspaces = "connect:SearchWorkspaces";
	/** [Write] connect:SendChatIntegrationEvent */
	static readonly SendChatIntegrationEvent = "connect:SendChatIntegrationEvent";
	/** [Write] connect:SendIntegrationEvent */
	static readonly SendIntegrationEvent = "connect:SendIntegrationEvent";
	/** [Write] connect:SendOutboundChatMessage */
	static readonly SendOutboundChatMessage = "connect:SendOutboundChatMessage";
	/** [Write] connect:SendOutboundEmail */
	static readonly SendOutboundEmail = "connect:SendOutboundEmail";
	/** [Write] connect:SendOutboundWebNotification */
	static readonly SendOutboundWebNotification =
		"connect:SendOutboundWebNotification";
	/** [Write] connect:StartAttachedFileUpload */
	static readonly StartAttachedFileUpload = "connect:StartAttachedFileUpload";
	/** [Write] connect:StartChatContact */
	static readonly StartChatContact = "connect:StartChatContact";
	/** [Write] connect:StartContactConversationalAnalyticsJob */
	static readonly StartContactConversationalAnalyticsJob =
		"connect:StartContactConversationalAnalyticsJob";
	/** [Write] connect:StartContactEvaluation */
	static readonly StartContactEvaluation = "connect:StartContactEvaluation";
	/** [Write] connect:StartContactMediaProcessing */
	static readonly StartContactMediaProcessing =
		"connect:StartContactMediaProcessing";
	/** [Write] connect:StartContactRecording */
	static readonly StartContactRecording = "connect:StartContactRecording";
	/** [Write] connect:StartContactStreaming */
	static readonly StartContactStreaming = "connect:StartContactStreaming";
	/** [Write] connect:StartEmailContact */
	static readonly StartEmailContact = "connect:StartEmailContact";
	/** [Write] connect:StartEvaluationFormValidation */
	static readonly StartEvaluationFormValidation =
		"connect:StartEvaluationFormValidation";
	/** [Write] connect:StartForecastingPlanningSchedulingIntegration */
	static readonly StartForecastingPlanningSchedulingIntegration =
		"connect:StartForecastingPlanningSchedulingIntegration";
	/** [Write] connect:StartOutboundChatContact */
	static readonly StartOutboundChatContact = "connect:StartOutboundChatContact";
	/** [Write] connect:StartOutboundEmailContact */
	static readonly StartOutboundEmailContact =
		"connect:StartOutboundEmailContact";
	/** [Write] connect:StartOutboundVoiceContact */
	static readonly StartOutboundVoiceContact =
		"connect:StartOutboundVoiceContact";
	/** [Write] connect:StartScreenSharing */
	static readonly StartScreenSharing = "connect:StartScreenSharing";
	/** [Write] connect:StartTaskContact */
	static readonly StartTaskContact = "connect:StartTaskContact";
	/** [Write] connect:StartWebRTCContact */
	static readonly StartWebRTCContact = "connect:StartWebRTCContact";
	/** [Write] connect:StopContact */
	static readonly StopContact = "connect:StopContact";
	/** [Write] connect:StopContactMediaProcessing */
	static readonly StopContactMediaProcessing =
		"connect:StopContactMediaProcessing";
	/** [Write] connect:StopContactRecording */
	static readonly StopContactRecording = "connect:StopContactRecording";
	/** [Write] connect:StopContactStreaming */
	static readonly StopContactStreaming = "connect:StopContactStreaming";
	/** [Write] connect:StopForecastingPlanningSchedulingIntegration */
	static readonly StopForecastingPlanningSchedulingIntegration =
		"connect:StopForecastingPlanningSchedulingIntegration";
	/** [Write] connect:SubmitContactEvaluation */
	static readonly SubmitContactEvaluation = "connect:SubmitContactEvaluation";
	/** [Write] connect:SuspendContactRecording */
	static readonly SuspendContactRecording = "connect:SuspendContactRecording";
	/** [Write] connect:TagContact */
	static readonly TagContact = "connect:TagContact";
	/** [Tagging] connect:TagResource */
	static readonly TagResource = "connect:TagResource";
	/** [Write] connect:TransferContact */
	static readonly TransferContact = "connect:TransferContact";
	/** [Write] connect:UntagContact */
	static readonly UntagContact = "connect:UntagContact";
	/** [Tagging] connect:UntagResource */
	static readonly UntagResource = "connect:UntagResource";
	/** [Write] connect:UpdateAgentStatus */
	static readonly UpdateAgentStatus = "connect:UpdateAgentStatus";
	/** [Write] connect:UpdateAttachedFilesConfiguration */
	static readonly UpdateAttachedFilesConfiguration =
		"connect:UpdateAttachedFilesConfiguration";
	/** [Write] connect:UpdateAuthenticationProfile */
	static readonly UpdateAuthenticationProfile =
		"connect:UpdateAuthenticationProfile";
	/** [Write] connect:UpdateContact */
	static readonly UpdateContact = "connect:UpdateContact";
	/** [Write] connect:UpdateContactAttributes */
	static readonly UpdateContactAttributes = "connect:UpdateContactAttributes";
	/** [Write] connect:UpdateContactEvaluation */
	static readonly UpdateContactEvaluation = "connect:UpdateContactEvaluation";
	/** [Write] connect:UpdateContactFlowContent */
	static readonly UpdateContactFlowContent = "connect:UpdateContactFlowContent";
	/** [Write] connect:UpdateContactFlowMetadata */
	static readonly UpdateContactFlowMetadata =
		"connect:UpdateContactFlowMetadata";
	/** [Write] connect:UpdateContactFlowModuleAlias */
	static readonly UpdateContactFlowModuleAlias =
		"connect:UpdateContactFlowModuleAlias";
	/** [Write] connect:UpdateContactFlowModuleContent */
	static readonly UpdateContactFlowModuleContent =
		"connect:UpdateContactFlowModuleContent";
	/** [Write] connect:UpdateContactFlowModuleMetadata */
	static readonly UpdateContactFlowModuleMetadata =
		"connect:UpdateContactFlowModuleMetadata";
	/** [Write] connect:UpdateContactFlowName */
	static readonly UpdateContactFlowName = "connect:UpdateContactFlowName";
	/** [Write] connect:UpdateContactRoutingData */
	static readonly UpdateContactRoutingData = "connect:UpdateContactRoutingData";
	/** [Write] connect:UpdateContactSchedule */
	static readonly UpdateContactSchedule = "connect:UpdateContactSchedule";
	/** [Write] connect:UpdateDataTableAttribute */
	static readonly UpdateDataTableAttribute = "connect:UpdateDataTableAttribute";
	/** [Write] connect:UpdateDataTableMetadata */
	static readonly UpdateDataTableMetadata = "connect:UpdateDataTableMetadata";
	/** [Write] connect:UpdateDataTablePrimaryValues */
	static readonly UpdateDataTablePrimaryValues =
		"connect:UpdateDataTablePrimaryValues";
	/** [Write] connect:UpdateEmailAddressMetadata */
	static readonly UpdateEmailAddressMetadata =
		"connect:UpdateEmailAddressMetadata";
	/** [Write] connect:UpdateEvaluationForm */
	static readonly UpdateEvaluationForm = "connect:UpdateEvaluationForm";
	/** [Write] connect:UpdateHoursOfOperation */
	static readonly UpdateHoursOfOperation = "connect:UpdateHoursOfOperation";
	/** [Write] connect:UpdateHoursOfOperationOverride */
	static readonly UpdateHoursOfOperationOverride =
		"connect:UpdateHoursOfOperationOverride";
	/** [Write] connect:UpdateInstanceAttribute */
	static readonly UpdateInstanceAttribute = "connect:UpdateInstanceAttribute";
	/** [Write] connect:UpdateInstanceStorageConfig */
	static readonly UpdateInstanceStorageConfig =
		"connect:UpdateInstanceStorageConfig";
	/** [Write] connect:UpdateMetricContent */
	static readonly UpdateMetricContent = "connect:UpdateMetricContent";
	/** [Write] connect:UpdateMetricMetadata */
	static readonly UpdateMetricMetadata = "connect:UpdateMetricMetadata";
	/** [Write] connect:UpdateNotificationContent */
	static readonly UpdateNotificationContent =
		"connect:UpdateNotificationContent";
	/** [Write] connect:UpdateParticipantAuthentication */
	static readonly UpdateParticipantAuthentication =
		"connect:UpdateParticipantAuthentication";
	/** [Write] connect:UpdateParticipantRoleConfig */
	static readonly UpdateParticipantRoleConfig =
		"connect:UpdateParticipantRoleConfig";
	/** [Write] connect:UpdatePhoneNumber */
	static readonly UpdatePhoneNumber = "connect:UpdatePhoneNumber";
	/** [Write] connect:UpdatePhoneNumberMetadata */
	static readonly UpdatePhoneNumberMetadata =
		"connect:UpdatePhoneNumberMetadata";
	/** [Write] connect:UpdatePredefinedAttribute */
	static readonly UpdatePredefinedAttribute =
		"connect:UpdatePredefinedAttribute";
	/** [Write] connect:UpdatePrompt */
	static readonly UpdatePrompt = "connect:UpdatePrompt";
	/** [Write] connect:UpdateQueueHoursOfOperation */
	static readonly UpdateQueueHoursOfOperation =
		"connect:UpdateQueueHoursOfOperation";
	/** [Write] connect:UpdateQueueMaxContacts */
	static readonly UpdateQueueMaxContacts = "connect:UpdateQueueMaxContacts";
	/** [Write] connect:UpdateQueueName */
	static readonly UpdateQueueName = "connect:UpdateQueueName";
	/** [Write] connect:UpdateQueueOutboundCallerConfig */
	static readonly UpdateQueueOutboundCallerConfig =
		"connect:UpdateQueueOutboundCallerConfig";
	/** [Write] connect:UpdateQueueOutboundEmailConfig */
	static readonly UpdateQueueOutboundEmailConfig =
		"connect:UpdateQueueOutboundEmailConfig";
	/** [Write] connect:UpdateQueueStatus */
	static readonly UpdateQueueStatus = "connect:UpdateQueueStatus";
	/** [Write] connect:UpdateQuickConnectConfig */
	static readonly UpdateQuickConnectConfig = "connect:UpdateQuickConnectConfig";
	/** [Write] connect:UpdateQuickConnectName */
	static readonly UpdateQuickConnectName = "connect:UpdateQuickConnectName";
	/** [Write] connect:UpdateRoutingProfileAgentAvailabilityTimer */
	static readonly UpdateRoutingProfileAgentAvailabilityTimer =
		"connect:UpdateRoutingProfileAgentAvailabilityTimer";
	/** [Write] connect:UpdateRoutingProfileConcurrency */
	static readonly UpdateRoutingProfileConcurrency =
		"connect:UpdateRoutingProfileConcurrency";
	/** [Write] connect:UpdateRoutingProfileDefaultOutboundQueue */
	static readonly UpdateRoutingProfileDefaultOutboundQueue =
		"connect:UpdateRoutingProfileDefaultOutboundQueue";
	/** [Write] connect:UpdateRoutingProfileName */
	static readonly UpdateRoutingProfileName = "connect:UpdateRoutingProfileName";
	/** [Write] connect:UpdateRoutingProfileQueues */
	static readonly UpdateRoutingProfileQueues =
		"connect:UpdateRoutingProfileQueues";
	/** [Write] connect:UpdateRule */
	static readonly UpdateRule = "connect:UpdateRule";
	/** [Write] connect:UpdateSecurityProfile */
	static readonly UpdateSecurityProfile = "connect:UpdateSecurityProfile";
	/** [Write] connect:UpdateTaskTemplate */
	static readonly UpdateTaskTemplate = "connect:UpdateTaskTemplate";
	/** [Write] connect:UpdateTrafficDistribution */
	static readonly UpdateTrafficDistribution =
		"connect:UpdateTrafficDistribution";
	/** [Write] connect:UpdateUserHierarchy */
	static readonly UpdateUserHierarchy = "connect:UpdateUserHierarchy";
	/** [Write] connect:UpdateUserHierarchyGroupName */
	static readonly UpdateUserHierarchyGroupName =
		"connect:UpdateUserHierarchyGroupName";
	/** [Write] connect:UpdateUserHierarchyStructure */
	static readonly UpdateUserHierarchyStructure =
		"connect:UpdateUserHierarchyStructure";
	/** [Write] connect:UpdateUserIdentityInfo */
	static readonly UpdateUserIdentityInfo = "connect:UpdateUserIdentityInfo";
	/** [Write] connect:UpdateUserNotificationStatus */
	static readonly UpdateUserNotificationStatus =
		"connect:UpdateUserNotificationStatus";
	/** [Write] connect:UpdateUserPhoneConfig */
	static readonly UpdateUserPhoneConfig = "connect:UpdateUserPhoneConfig";
	/** [Write] connect:UpdateUserProficiencies */
	static readonly UpdateUserProficiencies = "connect:UpdateUserProficiencies";
	/** [Write] connect:UpdateUserRoutingProfile */
	static readonly UpdateUserRoutingProfile = "connect:UpdateUserRoutingProfile";
	/** [Write] connect:UpdateUserSecurityProfiles */
	static readonly UpdateUserSecurityProfiles =
		"connect:UpdateUserSecurityProfiles";
	/** [Write] connect:UpdateViewContent */
	static readonly UpdateViewContent = "connect:UpdateViewContent";
	/** [Write] connect:UpdateViewMetadata */
	static readonly UpdateViewMetadata = "connect:UpdateViewMetadata";
	/** [Write] connect:UpdateWorkspaceMetadata */
	static readonly UpdateWorkspaceMetadata = "connect:UpdateWorkspaceMetadata";
	/** [Write] connect:UpdateWorkspacePage */
	static readonly UpdateWorkspacePage = "connect:UpdateWorkspacePage";
	/** [Write] connect:UpdateWorkspaceTheme */
	static readonly UpdateWorkspaceTheme = "connect:UpdateWorkspaceTheme";
	/** [Write] connect:UpdateWorkspaceVisibility */
	static readonly UpdateWorkspaceVisibility =
		"connect:UpdateWorkspaceVisibility";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ConnectActions.BatchDescribeDataTableValue,
		ConnectActions.BatchGetAttachedFileMetadata,
		ConnectActions.DescribeAgentStatus,
		ConnectActions.DescribeAttachedFilesConfiguration,
		ConnectActions.DescribeAuthenticationProfile,
		ConnectActions.DescribeContact,
		ConnectActions.DescribeContactEvaluation,
		ConnectActions.DescribeContactFlow,
		ConnectActions.DescribeContactFlowModule,
		ConnectActions.DescribeContactFlowModuleAlias,
		ConnectActions.DescribeDataTable,
		ConnectActions.DescribeDataTableAttribute,
		ConnectActions.DescribeEmailAddress,
		ConnectActions.DescribeEvaluationForm,
		ConnectActions.DescribeForecastingPlanningSchedulingIntegration,
		ConnectActions.DescribeHoursOfOperation,
		ConnectActions.DescribeHoursOfOperationOverride,
		ConnectActions.DescribeInstance,
		ConnectActions.DescribeInstanceAttribute,
		ConnectActions.DescribeInstanceStorageConfig,
		ConnectActions.DescribeMetric,
		ConnectActions.DescribeNotification,
		ConnectActions.DescribePhoneNumber,
		ConnectActions.DescribePredefinedAttribute,
		ConnectActions.DescribePrompt,
		ConnectActions.DescribeQueue,
		ConnectActions.DescribeQuickConnect,
		ConnectActions.DescribeRoutingProfile,
		ConnectActions.DescribeRule,
		ConnectActions.DescribeSecurityProfile,
		ConnectActions.DescribeTrafficDistributionGroup,
		ConnectActions.DescribeUser,
		ConnectActions.DescribeUserHierarchyGroup,
		ConnectActions.DescribeUserHierarchyStructure,
		ConnectActions.DescribeView,
		ConnectActions.DescribeVocabulary,
		ConnectActions.DescribeWorkspace,
		ConnectActions.EvaluateDataTableValues,
		ConnectActions.actionGetAttachedFile,
		ConnectActions.actionGetContactAttributes,
		ConnectActions.actionGetContactMetrics,
		ConnectActions.actionGetCurrentMetricData,
		ConnectActions.actionGetCurrentUserData,
		ConnectActions.actionGetEffectiveHoursOfOperations,
		ConnectActions.actionGetEvaluationFormValidation,
		ConnectActions.actionGetFederationToken,
		ConnectActions.actionGetFlowAssociation,
		ConnectActions.actionGetMetricData,
		ConnectActions.actionGetMetricDataV2,
		ConnectActions.actionGetPromptFile,
		ConnectActions.actionGetTaskTemplate,
		ConnectActions.ListNotifications,
		ConnectActions.ListRealtimeContactAnalysisSegments,
		ConnectActions.ListTagsForResource,
		ConnectActions.ListUserNotifications,
		ConnectActions.SearchAgentStatuses,
		ConnectActions.SearchContactEvaluations,
		ConnectActions.SearchContactFlowModules,
		ConnectActions.SearchContactFlows,
		ConnectActions.SearchContacts,
		ConnectActions.SearchDataTables,
		ConnectActions.SearchEmailAddresses,
		ConnectActions.SearchEvaluationForms,
		ConnectActions.SearchHoursOfOperationOverrides,
		ConnectActions.SearchHoursOfOperations,
		ConnectActions.SearchMetrics,
		ConnectActions.SearchNotifications,
		ConnectActions.SearchPredefinedAttributes,
		ConnectActions.SearchPrompts,
		ConnectActions.SearchQueues,
		ConnectActions.SearchQuickConnects,
		ConnectActions.SearchRoutingProfiles,
		ConnectActions.SearchRules,
		ConnectActions.SearchSecurityProfiles,
		ConnectActions.SearchUserHierarchyGroups,
		ConnectActions.SearchUsers,
		ConnectActions.SearchViews,
		ConnectActions.SearchWorkspaceAssociations,
		ConnectActions.SearchWorkspaces,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ConnectActions.ActivateEvaluationForm,
		ConnectActions.AdminGetEmergencyAccessToken,
		ConnectActions.AssociateAnalyticsDataSet,
		ConnectActions.AssociateApprovedOrigin,
		ConnectActions.AssociateBot,
		ConnectActions.AssociateContactWithUser,
		ConnectActions.AssociateCustomerProfilesDomain,
		ConnectActions.AssociateDefaultVocabulary,
		ConnectActions.AssociateEmailAddressAlias,
		ConnectActions.AssociateFlow,
		ConnectActions.AssociateInstanceStorageConfig,
		ConnectActions.AssociateLambdaFunction,
		ConnectActions.AssociateLexBot,
		ConnectActions.AssociatePhoneNumberContactFlow,
		ConnectActions.AssociateQueueEmailAddresses,
		ConnectActions.AssociateQueueQuickConnects,
		ConnectActions.AssociateRoutingProfileQueues,
		ConnectActions.AssociateSecurityKey,
		ConnectActions.AssociateSecurityProfiles,
		ConnectActions.AssociateTrafficDistributionGroupUser,
		ConnectActions.AssociateUserProficiencies,
		ConnectActions.AssociateWorkspace,
		ConnectActions.BatchAssociateAnalyticsDataSet,
		ConnectActions.BatchCreateDataTableValue,
		ConnectActions.BatchDeleteDataTableValue,
		ConnectActions.BatchDisassociateAnalyticsDataSet,
		ConnectActions.BatchPutContact,
		ConnectActions.BatchUpdateDataTableValue,
		ConnectActions.ClaimPhoneNumber,
		ConnectActions.CompleteAttachedFileUpload,
		ConnectActions.CreateAgentStatus,
		ConnectActions.CreateAttachedFile,
		ConnectActions.CreateAuthenticationProfile,
		ConnectActions.CreateContact,
		ConnectActions.CreateContactFlow,
		ConnectActions.CreateContactFlowModule,
		ConnectActions.CreateContactFlowModuleAlias,
		ConnectActions.CreateContactFlowModuleVersion,
		ConnectActions.CreateContactFlowVersion,
		ConnectActions.CreateDataTable,
		ConnectActions.CreateDataTableAttribute,
		ConnectActions.CreateEmailAddress,
		ConnectActions.CreateEvaluationForm,
		ConnectActions.CreateHoursOfOperation,
		ConnectActions.CreateHoursOfOperationOverride,
		ConnectActions.CreateInstance,
		ConnectActions.CreateIntegrationAssociation,
		ConnectActions.CreateMetric,
		ConnectActions.CreateNotification,
		ConnectActions.CreateParticipant,
		ConnectActions.CreatePersistentContactAssociation,
		ConnectActions.CreatePredefinedAttribute,
		ConnectActions.CreatePrompt,
		ConnectActions.CreatePushNotificationRegistration,
		ConnectActions.CreateQueue,
		ConnectActions.CreateQuickConnect,
		ConnectActions.CreateRoutingProfile,
		ConnectActions.CreateRule,
		ConnectActions.CreateSecurityProfile,
		ConnectActions.CreateTaskTemplate,
		ConnectActions.CreateTrafficDistributionGroup,
		ConnectActions.CreateUseCase,
		ConnectActions.CreateUser,
		ConnectActions.CreateUserHierarchyGroup,
		ConnectActions.CreateView,
		ConnectActions.CreateViewVersion,
		ConnectActions.CreateVocabulary,
		ConnectActions.CreateWorkspace,
		ConnectActions.CreateWorkspacePage,
		ConnectActions.DeactivateEvaluationForm,
		ConnectActions.DeleteAttachedFile,
		ConnectActions.DeleteContactEvaluation,
		ConnectActions.DeleteContactFlow,
		ConnectActions.DeleteContactFlowModule,
		ConnectActions.DeleteContactFlowModuleAlias,
		ConnectActions.DeleteContactFlowModuleVersion,
		ConnectActions.DeleteContactFlowVersion,
		ConnectActions.DeleteDataTable,
		ConnectActions.DeleteDataTableAttribute,
		ConnectActions.DeleteEmailAddress,
		ConnectActions.DeleteEvaluationForm,
		ConnectActions.DeleteHoursOfOperation,
		ConnectActions.DeleteHoursOfOperationOverride,
		ConnectActions.DeleteInstance,
		ConnectActions.DeleteIntegrationAssociation,
		ConnectActions.DeleteMetric,
		ConnectActions.DeleteNotification,
		ConnectActions.DeletePredefinedAttribute,
		ConnectActions.DeletePrompt,
		ConnectActions.DeletePushNotificationRegistration,
		ConnectActions.DeleteQueue,
		ConnectActions.DeleteQuickConnect,
		ConnectActions.DeleteRoutingProfile,
		ConnectActions.DeleteRule,
		ConnectActions.DeleteSecurityProfile,
		ConnectActions.DeleteTaskTemplate,
		ConnectActions.DeleteTrafficDistributionGroup,
		ConnectActions.DeleteUseCase,
		ConnectActions.DeleteUser,
		ConnectActions.DeleteUserHierarchyGroup,
		ConnectActions.DeleteView,
		ConnectActions.DeleteViewVersion,
		ConnectActions.DeleteVocabulary,
		ConnectActions.DeleteWorkspace,
		ConnectActions.DeleteWorkspaceMedia,
		ConnectActions.DeleteWorkspacePage,
		ConnectActions.DisassociateAnalyticsDataSet,
		ConnectActions.DisassociateApprovedOrigin,
		ConnectActions.DisassociateBot,
		ConnectActions.DisassociateCustomerProfilesDomain,
		ConnectActions.DisassociateEmailAddressAlias,
		ConnectActions.DisassociateFlow,
		ConnectActions.DisassociateInstanceStorageConfig,
		ConnectActions.DisassociateLambdaFunction,
		ConnectActions.DisassociateLexBot,
		ConnectActions.DisassociatePhoneNumberContactFlow,
		ConnectActions.DisassociateQueueEmailAddresses,
		ConnectActions.DisassociateQueueQuickConnects,
		ConnectActions.DisassociateRoutingProfileQueues,
		ConnectActions.DisassociateSecurityKey,
		ConnectActions.DisassociateSecurityProfiles,
		ConnectActions.DisassociateTrafficDistributionGroupUser,
		ConnectActions.DisassociateUserProficiencies,
		ConnectActions.DisassociateWorkspace,
		ConnectActions.DismissUserContact,
		ConnectActions.ImportPhoneNumber,
		ConnectActions.ImportWorkspaceMedia,
		ConnectActions.MonitorContact,
		ConnectActions.PauseContact,
		ConnectActions.PutUserStatus,
		ConnectActions.ReleasePhoneNumber,
		ConnectActions.ReplicateInstance,
		ConnectActions.ResumeContact,
		ConnectActions.ResumeContactRecording,
		ConnectActions.SendChatIntegrationEvent,
		ConnectActions.SendIntegrationEvent,
		ConnectActions.SendOutboundChatMessage,
		ConnectActions.SendOutboundEmail,
		ConnectActions.SendOutboundWebNotification,
		ConnectActions.StartAttachedFileUpload,
		ConnectActions.StartChatContact,
		ConnectActions.StartContactConversationalAnalyticsJob,
		ConnectActions.StartContactEvaluation,
		ConnectActions.StartContactMediaProcessing,
		ConnectActions.StartContactRecording,
		ConnectActions.StartContactStreaming,
		ConnectActions.StartEmailContact,
		ConnectActions.StartEvaluationFormValidation,
		ConnectActions.StartForecastingPlanningSchedulingIntegration,
		ConnectActions.StartOutboundChatContact,
		ConnectActions.StartOutboundEmailContact,
		ConnectActions.StartOutboundVoiceContact,
		ConnectActions.StartScreenSharing,
		ConnectActions.StartTaskContact,
		ConnectActions.StartWebRTCContact,
		ConnectActions.StopContact,
		ConnectActions.StopContactMediaProcessing,
		ConnectActions.StopContactRecording,
		ConnectActions.StopContactStreaming,
		ConnectActions.StopForecastingPlanningSchedulingIntegration,
		ConnectActions.SubmitContactEvaluation,
		ConnectActions.SuspendContactRecording,
		ConnectActions.TagContact,
		ConnectActions.TransferContact,
		ConnectActions.UntagContact,
		ConnectActions.UpdateAgentStatus,
		ConnectActions.UpdateAttachedFilesConfiguration,
		ConnectActions.UpdateAuthenticationProfile,
		ConnectActions.UpdateContact,
		ConnectActions.UpdateContactAttributes,
		ConnectActions.UpdateContactEvaluation,
		ConnectActions.UpdateContactFlowContent,
		ConnectActions.UpdateContactFlowMetadata,
		ConnectActions.UpdateContactFlowModuleAlias,
		ConnectActions.UpdateContactFlowModuleContent,
		ConnectActions.UpdateContactFlowModuleMetadata,
		ConnectActions.UpdateContactFlowName,
		ConnectActions.UpdateContactRoutingData,
		ConnectActions.UpdateContactSchedule,
		ConnectActions.UpdateDataTableAttribute,
		ConnectActions.UpdateDataTableMetadata,
		ConnectActions.UpdateDataTablePrimaryValues,
		ConnectActions.UpdateEmailAddressMetadata,
		ConnectActions.UpdateEvaluationForm,
		ConnectActions.UpdateHoursOfOperation,
		ConnectActions.UpdateHoursOfOperationOverride,
		ConnectActions.UpdateInstanceAttribute,
		ConnectActions.UpdateInstanceStorageConfig,
		ConnectActions.UpdateMetricContent,
		ConnectActions.UpdateMetricMetadata,
		ConnectActions.UpdateNotificationContent,
		ConnectActions.UpdateParticipantAuthentication,
		ConnectActions.UpdateParticipantRoleConfig,
		ConnectActions.UpdatePhoneNumber,
		ConnectActions.UpdatePhoneNumberMetadata,
		ConnectActions.UpdatePredefinedAttribute,
		ConnectActions.UpdatePrompt,
		ConnectActions.UpdateQueueHoursOfOperation,
		ConnectActions.UpdateQueueMaxContacts,
		ConnectActions.UpdateQueueName,
		ConnectActions.UpdateQueueOutboundCallerConfig,
		ConnectActions.UpdateQueueOutboundEmailConfig,
		ConnectActions.UpdateQueueStatus,
		ConnectActions.UpdateQuickConnectConfig,
		ConnectActions.UpdateQuickConnectName,
		ConnectActions.UpdateRoutingProfileAgentAvailabilityTimer,
		ConnectActions.UpdateRoutingProfileConcurrency,
		ConnectActions.UpdateRoutingProfileDefaultOutboundQueue,
		ConnectActions.UpdateRoutingProfileName,
		ConnectActions.UpdateRoutingProfileQueues,
		ConnectActions.UpdateRule,
		ConnectActions.UpdateSecurityProfile,
		ConnectActions.UpdateTaskTemplate,
		ConnectActions.UpdateTrafficDistribution,
		ConnectActions.UpdateUserHierarchy,
		ConnectActions.UpdateUserHierarchyGroupName,
		ConnectActions.UpdateUserHierarchyStructure,
		ConnectActions.UpdateUserIdentityInfo,
		ConnectActions.UpdateUserNotificationStatus,
		ConnectActions.UpdateUserPhoneConfig,
		ConnectActions.UpdateUserProficiencies,
		ConnectActions.UpdateUserRoutingProfile,
		ConnectActions.UpdateUserSecurityProfiles,
		ConnectActions.UpdateViewContent,
		ConnectActions.UpdateViewMetadata,
		ConnectActions.UpdateWorkspaceMetadata,
		ConnectActions.UpdateWorkspacePage,
		ConnectActions.UpdateWorkspaceTheme,
		ConnectActions.UpdateWorkspaceVisibility,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ConnectActions.BatchGetFlowAssociation,
		ConnectActions.actionGetTrafficDistribution,
		ConnectActions.ListAgentStatuses,
		ConnectActions.ListAnalyticsDataAssociations,
		ConnectActions.ListAnalyticsDataLakeDataSets,
		ConnectActions.ListApprovedOrigins,
		ConnectActions.ListAssociatedContacts,
		ConnectActions.ListAttachedFilesConfigurations,
		ConnectActions.ListAuthenticationProfiles,
		ConnectActions.ListBots,
		ConnectActions.ListContactEvaluations,
		ConnectActions.ListContactFlowModuleAliases,
		ConnectActions.ListContactFlowModuleVersions,
		ConnectActions.ListContactFlowModules,
		ConnectActions.ListContactFlowVersions,
		ConnectActions.ListContactFlows,
		ConnectActions.ListContactReferences,
		ConnectActions.ListDataTableAttributes,
		ConnectActions.ListDataTablePrimaryValues,
		ConnectActions.ListDataTableValues,
		ConnectActions.ListDataTables,
		ConnectActions.ListDefaultVocabularies,
		ConnectActions.ListEntitySecurityProfiles,
		ConnectActions.ListEvaluationFormVersions,
		ConnectActions.ListEvaluationForms,
		ConnectActions.ListFlowAssociations,
		ConnectActions.ListHoursOfOperationOverrides,
		ConnectActions.ListHoursOfOperations,
		ConnectActions.ListInstanceAttributes,
		ConnectActions.ListInstanceStorageConfigs,
		ConnectActions.ListInstances,
		ConnectActions.ListIntegrationAssociations,
		ConnectActions.ListLambdaFunctions,
		ConnectActions.ListLexBots,
		ConnectActions.ListMetrics,
		ConnectActions.ListPhoneNumbers,
		ConnectActions.ListPhoneNumbersV2,
		ConnectActions.ListPredefinedAttributes,
		ConnectActions.ListPrompts,
		ConnectActions.ListQueueEmailAddresses,
		ConnectActions.ListQueueQuickConnects,
		ConnectActions.ListQueues,
		ConnectActions.ListQuickConnects,
		ConnectActions.ListRealtimeContactAnalysisSegmentsV2,
		ConnectActions.ListRoutingProfileManualAssignmentQueues,
		ConnectActions.ListRoutingProfileQueues,
		ConnectActions.ListRoutingProfiles,
		ConnectActions.ListRules,
		ConnectActions.ListSecurityKeys,
		ConnectActions.ListSecurityProfileApplications,
		ConnectActions.ListSecurityProfileFlowModules,
		ConnectActions.ListSecurityProfilePermissions,
		ConnectActions.ListSecurityProfiles,
		ConnectActions.ListTaskTemplates,
		ConnectActions.ListTrafficDistributionGroupUsers,
		ConnectActions.ListTrafficDistributionGroups,
		ConnectActions.ListUseCases,
		ConnectActions.ListUserHierarchyGroups,
		ConnectActions.ListUserProficiencies,
		ConnectActions.ListUsers,
		ConnectActions.ListViewVersions,
		ConnectActions.ListViews,
		ConnectActions.ListWorkspaceMedia,
		ConnectActions.ListWorkspacePages,
		ConnectActions.ListWorkspaces,
		ConnectActions.SearchAvailablePhoneNumbers,
		ConnectActions.SearchResourceTags,
		ConnectActions.SearchVocabularies,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ConnectActions.TagResource,
		ConnectActions.UntagResource,
	];
}

/**
 * Properties for building a agent-status ARN.
 */
export interface ConnectAgentStatusArnProps {
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
}

/**
 * Parsed components of a agent-status ARN.
 */
export interface ConnectAgentStatusArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The AgentStatusId component. */
	readonly agentStatusId: string;
}

/**
 * Properties for building a ai-agent ARN.
 */
export interface ConnectAiAgentArnProps {
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
}

/**
 * Parsed components of a ai-agent ARN.
 */
export interface ConnectAiAgentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssistantId component. */
	readonly assistantId: string;
	/** The AIAgentId component. */
	readonly aiAgentId: string;
	/** The Version component. */
	readonly version: string;
}

/**
 * Properties for building a attached-file ARN.
 */
export interface ConnectAttachedFileArnProps {
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
}

/**
 * Parsed components of a attached-file ARN.
 */
export interface ConnectAttachedFileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The FileId component. */
	readonly fileId: string;
}

/**
 * Properties for building a authentication-profile ARN.
 */
export interface ConnectAuthenticationProfileArnProps {
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
}

/**
 * Parsed components of a authentication-profile ARN.
 */
export interface ConnectAuthenticationProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The AuthenticationProfileId component. */
	readonly authenticationProfileId: string;
}

/**
 * Properties for building a aws-managed-view ARN.
 */
export interface ConnectAWSManagedViewArnProps {
	/** The ViewId component of the ARN. */
	readonly viewId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a aws-managed-view ARN.
 */
export interface ConnectAWSManagedViewArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ViewId component. */
	readonly viewId: string;
}

/**
 * Properties for building a contact ARN.
 */
export interface ConnectContactArnProps {
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
}

/**
 * Parsed components of a contact ARN.
 */
export interface ConnectContactArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The ContactId component. */
	readonly contactId: string;
}

/**
 * Properties for building a contact-evaluation ARN.
 */
export interface ConnectContactEvaluationArnProps {
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
}

/**
 * Parsed components of a contact-evaluation ARN.
 */
export interface ConnectContactEvaluationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The EvaluationId component. */
	readonly evaluationId: string;
}

/**
 * Properties for building a contact-flow ARN.
 */
export interface ConnectContactFlowArnProps {
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
}

/**
 * Parsed components of a contact-flow ARN.
 */
export interface ConnectContactFlowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The ContactFlowId component. */
	readonly contactFlowId: string;
}

/**
 * Properties for building a contact-flow-module ARN.
 */
export interface ConnectContactFlowModuleArnProps {
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
}

/**
 * Parsed components of a contact-flow-module ARN.
 */
export interface ConnectContactFlowModuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The ContactFlowModuleId component. */
	readonly contactFlowModuleId: string;
}

/**
 * Properties for building a customer-managed-view ARN.
 */
export interface ConnectCustomerManagedViewArnProps {
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
}

/**
 * Parsed components of a customer-managed-view ARN.
 */
export interface ConnectCustomerManagedViewArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The ViewId component. */
	readonly viewId: string;
}

/**
 * Properties for building a customer-managed-view-version ARN.
 */
export interface ConnectCustomerManagedViewVersionArnProps {
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
}

/**
 * Parsed components of a customer-managed-view-version ARN.
 */
export interface ConnectCustomerManagedViewVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The ViewId component. */
	readonly viewId: string;
	/** The ViewVersion component. */
	readonly viewVersion: string;
}

/**
 * Properties for building a data-table ARN.
 */
export interface ConnectDataTableArnProps {
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
}

/**
 * Parsed components of a data-table ARN.
 */
export interface ConnectDataTableArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The DataTableId component. */
	readonly dataTableId: string;
}

/**
 * Properties for building a email-address ARN.
 */
export interface ConnectEmailAddressArnProps {
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
}

/**
 * Parsed components of a email-address ARN.
 */
export interface ConnectEmailAddressArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The EmailAddressId component. */
	readonly emailAddressId: string;
}

/**
 * Properties for building a evaluation-form ARN.
 */
export interface ConnectEvaluationFormArnProps {
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
}

/**
 * Parsed components of a evaluation-form ARN.
 */
export interface ConnectEvaluationFormArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The FormId component. */
	readonly formId: string;
}

/**
 * Properties for building a hierarchy-group ARN.
 */
export interface ConnectHierarchyGroupArnProps {
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
}

/**
 * Parsed components of a hierarchy-group ARN.
 */
export interface ConnectHierarchyGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The HierarchyGroupId component. */
	readonly hierarchyGroupId: string;
}

/**
 * Properties for building a hours-of-operation ARN.
 */
export interface ConnectHoursOfOperationArnProps {
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
}

/**
 * Parsed components of a hours-of-operation ARN.
 */
export interface ConnectHoursOfOperationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The HoursOfOperationId component. */
	readonly hoursOfOperationId: string;
}

/**
 * Properties for building a instance ARN.
 */
export interface ConnectInstanceArnProps {
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a instance ARN.
 */
export interface ConnectInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a integration-association ARN.
 */
export interface ConnectIntegrationAssociationArnProps {
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
}

/**
 * Parsed components of a integration-association ARN.
 */
export interface ConnectIntegrationAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The IntegrationAssociationId component. */
	readonly integrationAssociationId: string;
}

/**
 * Properties for building a legacy-phone-number ARN.
 */
export interface ConnectLegacyPhoneNumberArnProps {
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
}

/**
 * Parsed components of a legacy-phone-number ARN.
 */
export interface ConnectLegacyPhoneNumberArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The PhoneNumberId component. */
	readonly phoneNumberId: string;
}

/**
 * Properties for building a metric ARN.
 */
export interface ConnectMetricArnProps {
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
}

/**
 * Parsed components of a metric ARN.
 */
export interface ConnectMetricArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The MetricId component. */
	readonly metricId: string;
}

/**
 * Properties for building a notification ARN.
 */
export interface ConnectNotificationArnProps {
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
}

/**
 * Parsed components of a notification ARN.
 */
export interface ConnectNotificationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The NotificationId component. */
	readonly notificationId: string;
}

/**
 * Properties for building a phone-number ARN.
 */
export interface ConnectPhoneNumberArnProps {
	/** The PhoneNumberId component of the ARN. */
	readonly phoneNumberId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a phone-number ARN.
 */
export interface ConnectPhoneNumberArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PhoneNumberId component. */
	readonly phoneNumberId: string;
}

/**
 * Properties for building a prompt ARN.
 */
export interface ConnectPromptArnProps {
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
}

/**
 * Parsed components of a prompt ARN.
 */
export interface ConnectPromptArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The PromptId component. */
	readonly promptId: string;
}

/**
 * Properties for building a qualified-aws-managed-view ARN.
 */
export interface ConnectQualifiedAWSManagedViewArnProps {
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
}

/**
 * Parsed components of a qualified-aws-managed-view ARN.
 */
export interface ConnectQualifiedAWSManagedViewArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ViewId component. */
	readonly viewId: string;
	/** The ViewQualifier component. */
	readonly viewQualifier: string;
}

/**
 * Properties for building a qualified-customer-managed-view ARN.
 */
export interface ConnectQualifiedCustomerManagedViewArnProps {
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
}

/**
 * Parsed components of a qualified-customer-managed-view ARN.
 */
export interface ConnectQualifiedCustomerManagedViewArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The ViewId component. */
	readonly viewId: string;
	/** The ViewQualifier component. */
	readonly viewQualifier: string;
}

/**
 * Properties for building a qualified-metric ARN.
 */
export interface ConnectQualifiedMetricArnProps {
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
}

/**
 * Parsed components of a qualified-metric ARN.
 */
export interface ConnectQualifiedMetricArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The MetricId component. */
	readonly metricId: string;
	/** The MetricQualifier component. */
	readonly metricQualifier: string;
}

/**
 * Properties for building a queue ARN.
 */
export interface ConnectQueueArnProps {
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
}

/**
 * Parsed components of a queue ARN.
 */
export interface ConnectQueueArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The QueueId component. */
	readonly queueId: string;
}

/**
 * Properties for building a quick-connect ARN.
 */
export interface ConnectQuickConnectArnProps {
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
}

/**
 * Parsed components of a quick-connect ARN.
 */
export interface ConnectQuickConnectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The QuickConnectId component. */
	readonly quickConnectId: string;
}

/**
 * Properties for building a routing-profile ARN.
 */
export interface ConnectRoutingProfileArnProps {
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
}

/**
 * Parsed components of a routing-profile ARN.
 */
export interface ConnectRoutingProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The RoutingProfileId component. */
	readonly routingProfileId: string;
}

/**
 * Properties for building a rule ARN.
 */
export interface ConnectRuleArnProps {
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
}

/**
 * Parsed components of a rule ARN.
 */
export interface ConnectRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The RuleId component. */
	readonly ruleId: string;
}

/**
 * Properties for building a security-profile ARN.
 */
export interface ConnectSecurityProfileArnProps {
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
}

/**
 * Parsed components of a security-profile ARN.
 */
export interface ConnectSecurityProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The SecurityProfileId component. */
	readonly securityProfileId: string;
}

/**
 * Properties for building a task-template ARN.
 */
export interface ConnectTaskTemplateArnProps {
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
}

/**
 * Parsed components of a task-template ARN.
 */
export interface ConnectTaskTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The TaskTemplateId component. */
	readonly taskTemplateId: string;
}

/**
 * Properties for building a traffic-distribution-group ARN.
 */
export interface ConnectTrafficDistributionGroupArnProps {
	/** The TrafficDistributionGroupId component of the ARN. */
	readonly trafficDistributionGroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a traffic-distribution-group ARN.
 */
export interface ConnectTrafficDistributionGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TrafficDistributionGroupId component. */
	readonly trafficDistributionGroupId: string;
}

/**
 * Properties for building a use-case ARN.
 */
export interface ConnectUseCaseArnProps {
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
}

/**
 * Parsed components of a use-case ARN.
 */
export interface ConnectUseCaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The UseCaseId component. */
	readonly useCaseId: string;
}

/**
 * Properties for building a user ARN.
 */
export interface ConnectUserArnProps {
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
}

/**
 * Parsed components of a user ARN.
 */
export interface ConnectUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The UserId component. */
	readonly userId: string;
}

/**
 * Properties for building a vocabulary ARN.
 */
export interface ConnectVocabularyArnProps {
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
}

/**
 * Parsed components of a vocabulary ARN.
 */
export interface ConnectVocabularyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The VocabularyId component. */
	readonly vocabularyId: string;
}

/**
 * Properties for building a wildcard-agent-status ARN.
 */
export interface ConnectWildcardAgentStatusArnProps {
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a wildcard-agent-status ARN.
 */
export interface ConnectWildcardAgentStatusArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a wildcard-contact-flow ARN.
 */
export interface ConnectWildcardContactFlowArnProps {
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a wildcard-contact-flow ARN.
 */
export interface ConnectWildcardContactFlowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a wildcard-legacy-phone-number ARN.
 */
export interface ConnectWildcardLegacyPhoneNumberArnProps {
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a wildcard-legacy-phone-number ARN.
 */
export interface ConnectWildcardLegacyPhoneNumberArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a wildcard-phone-number ARN.
 */
export interface ConnectWildcardPhoneNumberArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a wildcard-phone-number ARN.
 */
export interface ConnectWildcardPhoneNumberArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a wildcard-queue ARN.
 */
export interface ConnectWildcardQueueArnProps {
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a wildcard-queue ARN.
 */
export interface ConnectWildcardQueueArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a wildcard-quick-connect ARN.
 */
export interface ConnectWildcardQuickConnectArnProps {
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a wildcard-quick-connect ARN.
 */
export interface ConnectWildcardQuickConnectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a workspace ARN.
 */
export interface ConnectWorkspaceArnProps {
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
}

/**
 * Parsed components of a workspace ARN.
 */
export interface ConnectWorkspaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The WorkspaceId component. */
	readonly workspaceId: string;
}

const AgentStatusArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/agent-state\/(?<agentStatusId>[^:/?]+)$/;
const AiAgentArnRegex =
	/^arn:(?<partition>[^:]+):wisdom:(?<region>[^:]*):(?<account>[^:]*):ai-agent\/(?<assistantId>[^:/?]+)\/(?<aiAgentId>[^:/?]+):(?<version>[^:/?]+)$/;
const AttachedFileArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/file\/(?<fileId>[^:/?]+)$/;
const AuthenticationProfileArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/authentication-profile\/(?<authenticationProfileId>[^:/?]+)$/;
const AWSManagedViewArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):aws:view\/(?<viewId>[^:/?]+)$/;
const ContactArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/contact\/(?<contactId>[^:/?]+)$/;
const ContactEvaluationArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/contact-evaluation\/(?<evaluationId>[^:/?]+)$/;
const ContactFlowArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/contact-flow\/(?<contactFlowId>[^:/?]+)$/;
const ContactFlowModuleArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/flow-module\/(?<contactFlowModuleId>[^:/?]+)$/;
const CustomerManagedViewArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/view\/(?<viewId>[^:/?]+)$/;
const CustomerManagedViewVersionArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/view\/(?<viewId>[^:/?]+):(?<viewVersion>[^:/?]+)$/;
const DataTableArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/data-table\/(?<dataTableId>[^:/?]+)$/;
const EmailAddressArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/email-address\/(?<emailAddressId>[^:/?]+)$/;
const EvaluationFormArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/evaluation-form\/(?<formId>[^:/?]+)$/;
const HierarchyGroupArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/agent-group\/(?<hierarchyGroupId>[^:/?]+)$/;
const HoursOfOperationArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/operating-hours\/(?<hoursOfOperationId>[^:/?]+)$/;
const InstanceArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)$/;
const IntegrationAssociationArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/integration-association\/(?<integrationAssociationId>[^:/?]+)$/;
const LegacyPhoneNumberArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/phone-number\/(?<phoneNumberId>[^:/?]+)$/;
const MetricArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/metric\/(?<metricId>[^:/?]+)$/;
const NotificationArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/notification\/(?<notificationId>[^:/?]+)$/;
const PhoneNumberArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):phone-number\/(?<phoneNumberId>[^:/?]+)$/;
const PromptArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/prompt\/(?<promptId>[^:/?]+)$/;
const QualifiedAWSManagedViewArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):aws:view\/(?<viewId>[^:/?]+):(?<viewQualifier>[^:/?]+)$/;
const QualifiedCustomerManagedViewArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/view\/(?<viewId>[^:/?]+):(?<viewQualifier>[^:/?]+)$/;
const QualifiedMetricArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/metric\/(?<metricId>[^:/?]+):(?<metricQualifier>[^:/?]+)$/;
const QueueArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/queue\/(?<queueId>[^:/?]+)$/;
const QuickConnectArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/transfer-destination\/(?<quickConnectId>[^:/?]+)$/;
const RoutingProfileArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/routing-profile\/(?<routingProfileId>[^:/?]+)$/;
const RuleArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/rule\/(?<ruleId>[^:/?]+)$/;
const SecurityProfileArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/security-profile\/(?<securityProfileId>[^:/?]+)$/;
const TaskTemplateArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/task-template\/(?<taskTemplateId>[^:/?]+)$/;
const TrafficDistributionGroupArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):traffic-distribution-group\/(?<trafficDistributionGroupId>[^:/?]+)$/;
const UseCaseArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/use-case\/(?<useCaseId>[^:/?]+)$/;
const UserArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/agent\/(?<userId>[^:/?]+)$/;
const VocabularyArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/vocabulary\/(?<vocabularyId>[^:/?]+)$/;
const WildcardAgentStatusArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/agent-state\/.*$/;
const WildcardContactFlowArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/contact-flow\/.*$/;
const WildcardLegacyPhoneNumberArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/phone-number\/.*$/;
const WildcardPhoneNumberArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):phone-number\/.*$/;
const WildcardQueueArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/queue\/.*$/;
const WildcardQuickConnectArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/transfer-destination\/.*$/;
const WorkspaceArnRegex =
	/^arn:(?<partition>[^:]+):connect:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/workspace\/(?<workspaceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for connect resources.
 */
export class ConnectResources {
	/**
	 * Builds an ARN for the agent-status resource.
	 */
	static agentStatus(props: ConnectAgentStatusArnProps): string {
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
	static parseAgentStatusArn(arn: string): ConnectAgentStatusArnComponents {
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
	static aiAgent(props: ConnectAiAgentArnProps): string {
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
	static parseAiAgentArn(arn: string): ConnectAiAgentArnComponents {
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
	static attachedFile(props: ConnectAttachedFileArnProps): string {
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
	static parseAttachedFileArn(arn: string): ConnectAttachedFileArnComponents {
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
	static authenticationProfile(
		props: ConnectAuthenticationProfileArnProps,
	): string {
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
	static parseAuthenticationProfileArn(
		arn: string,
	): ConnectAuthenticationProfileArnComponents {
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
	static awsManagedView(props: ConnectAWSManagedViewArnProps): string {
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
	static parseAWSManagedViewArn(
		arn: string,
	): ConnectAWSManagedViewArnComponents {
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
	static contact(props: ConnectContactArnProps): string {
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
	static parseContactArn(arn: string): ConnectContactArnComponents {
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
	static contactEvaluation(props: ConnectContactEvaluationArnProps): string {
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
	static parseContactEvaluationArn(
		arn: string,
	): ConnectContactEvaluationArnComponents {
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
	static contactFlow(props: ConnectContactFlowArnProps): string {
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
	static parseContactFlowArn(arn: string): ConnectContactFlowArnComponents {
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
	static contactFlowModule(props: ConnectContactFlowModuleArnProps): string {
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
	static parseContactFlowModuleArn(
		arn: string,
	): ConnectContactFlowModuleArnComponents {
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
	static customerManagedView(
		props: ConnectCustomerManagedViewArnProps,
	): string {
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
	static parseCustomerManagedViewArn(
		arn: string,
	): ConnectCustomerManagedViewArnComponents {
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
	static customerManagedViewVersion(
		props: ConnectCustomerManagedViewVersionArnProps,
	): string {
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
	static parseCustomerManagedViewVersionArn(
		arn: string,
	): ConnectCustomerManagedViewVersionArnComponents {
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
	static dataTable(props: ConnectDataTableArnProps): string {
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
	static parseDataTableArn(arn: string): ConnectDataTableArnComponents {
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
	static emailAddress(props: ConnectEmailAddressArnProps): string {
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
	static parseEmailAddressArn(arn: string): ConnectEmailAddressArnComponents {
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
	static evaluationForm(props: ConnectEvaluationFormArnProps): string {
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
	static parseEvaluationFormArn(
		arn: string,
	): ConnectEvaluationFormArnComponents {
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
	static hierarchyGroup(props: ConnectHierarchyGroupArnProps): string {
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
	static parseHierarchyGroupArn(
		arn: string,
	): ConnectHierarchyGroupArnComponents {
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
	static hoursOfOperation(props: ConnectHoursOfOperationArnProps): string {
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
	static parseHoursOfOperationArn(
		arn: string,
	): ConnectHoursOfOperationArnComponents {
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
	static instance(props: ConnectInstanceArnProps): string {
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
	static parseInstanceArn(arn: string): ConnectInstanceArnComponents {
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
	static integrationAssociation(
		props: ConnectIntegrationAssociationArnProps,
	): string {
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
	static parseIntegrationAssociationArn(
		arn: string,
	): ConnectIntegrationAssociationArnComponents {
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
	static legacyPhoneNumber(props: ConnectLegacyPhoneNumberArnProps): string {
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
	static parseLegacyPhoneNumberArn(
		arn: string,
	): ConnectLegacyPhoneNumberArnComponents {
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
	static metric(props: ConnectMetricArnProps): string {
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
	static parseMetricArn(arn: string): ConnectMetricArnComponents {
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
	static notification(props: ConnectNotificationArnProps): string {
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
	static parseNotificationArn(arn: string): ConnectNotificationArnComponents {
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
	static phoneNumber(props: ConnectPhoneNumberArnProps): string {
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
	static parsePhoneNumberArn(arn: string): ConnectPhoneNumberArnComponents {
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
	static prompt(props: ConnectPromptArnProps): string {
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
	static parsePromptArn(arn: string): ConnectPromptArnComponents {
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
	static qualifiedAWSManagedView(
		props: ConnectQualifiedAWSManagedViewArnProps,
	): string {
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
	static parseQualifiedAWSManagedViewArn(
		arn: string,
	): ConnectQualifiedAWSManagedViewArnComponents {
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
	static qualifiedCustomerManagedView(
		props: ConnectQualifiedCustomerManagedViewArnProps,
	): string {
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
	static parseQualifiedCustomerManagedViewArn(
		arn: string,
	): ConnectQualifiedCustomerManagedViewArnComponents {
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
	static qualifiedMetric(props: ConnectQualifiedMetricArnProps): string {
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
	static parseQualifiedMetricArn(
		arn: string,
	): ConnectQualifiedMetricArnComponents {
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
	static queue(props: ConnectQueueArnProps): string {
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
	static parseQueueArn(arn: string): ConnectQueueArnComponents {
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
	static quickConnect(props: ConnectQuickConnectArnProps): string {
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
	static parseQuickConnectArn(arn: string): ConnectQuickConnectArnComponents {
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
	static routingProfile(props: ConnectRoutingProfileArnProps): string {
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
	static parseRoutingProfileArn(
		arn: string,
	): ConnectRoutingProfileArnComponents {
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
	static rule(props: ConnectRuleArnProps): string {
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
	static parseRuleArn(arn: string): ConnectRuleArnComponents {
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
	static securityProfile(props: ConnectSecurityProfileArnProps): string {
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
	static parseSecurityProfileArn(
		arn: string,
	): ConnectSecurityProfileArnComponents {
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
	static taskTemplate(props: ConnectTaskTemplateArnProps): string {
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
	static parseTaskTemplateArn(arn: string): ConnectTaskTemplateArnComponents {
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
	static trafficDistributionGroup(
		props: ConnectTrafficDistributionGroupArnProps,
	): string {
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
	static parseTrafficDistributionGroupArn(
		arn: string,
	): ConnectTrafficDistributionGroupArnComponents {
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
	static useCase(props: ConnectUseCaseArnProps): string {
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
	static parseUseCaseArn(arn: string): ConnectUseCaseArnComponents {
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
	static user(props: ConnectUserArnProps): string {
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
	static parseUserArn(arn: string): ConnectUserArnComponents {
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
	static vocabulary(props: ConnectVocabularyArnProps): string {
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
	static parseVocabularyArn(arn: string): ConnectVocabularyArnComponents {
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
	static wildcardAgentStatus(
		props: ConnectWildcardAgentStatusArnProps,
	): string {
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
	static parseWildcardAgentStatusArn(
		arn: string,
	): ConnectWildcardAgentStatusArnComponents {
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
	static wildcardContactFlow(
		props: ConnectWildcardContactFlowArnProps,
	): string {
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
	static parseWildcardContactFlowArn(
		arn: string,
	): ConnectWildcardContactFlowArnComponents {
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
	static wildcardLegacyPhoneNumber(
		props: ConnectWildcardLegacyPhoneNumberArnProps,
	): string {
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
	static parseWildcardLegacyPhoneNumberArn(
		arn: string,
	): ConnectWildcardLegacyPhoneNumberArnComponents {
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
	static wildcardPhoneNumber(
		props: ConnectWildcardPhoneNumberArnProps,
	): string {
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
	static parseWildcardPhoneNumberArn(
		arn: string,
	): ConnectWildcardPhoneNumberArnComponents {
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
	static wildcardQueue(props: ConnectWildcardQueueArnProps): string {
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
	static parseWildcardQueueArn(arn: string): ConnectWildcardQueueArnComponents {
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
	static wildcardQuickConnect(
		props: ConnectWildcardQuickConnectArnProps,
	): string {
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
	static parseWildcardQuickConnectArn(
		arn: string,
	): ConnectWildcardQuickConnectArnComponents {
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
	static workspace(props: ConnectWorkspaceArnProps): string {
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
	static parseWorkspaceArn(arn: string): ConnectWorkspaceArnComponents {
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
	static readonly ActivateEvaluationForm: string[] = [
		"connect:ActivateEvaluationForm",
	];
	/** IAM actions required for the AssociateAnalyticsDataSet API call. */
	static readonly AssociateAnalyticsDataSet: string[] = [
		"connect:AssociateAnalyticsDataSet",
	];
	/** IAM actions required for the AssociateApprovedOrigin API call. */
	static readonly AssociateApprovedOrigin: string[] = [
		"connect:AssociateApprovedOrigin",
	];
	/** IAM actions required for the AssociateBot API call. */
	static readonly AssociateBot: string[] = ["connect:AssociateBot"];
	/** IAM actions required for the AssociateContactWithUser API call. */
	static readonly AssociateContactWithUser: string[] = [
		"connect:AssociateContactWithUser",
	];
	/** IAM actions required for the AssociateDefaultVocabulary API call. */
	static readonly AssociateDefaultVocabulary: string[] = [
		"connect:AssociateDefaultVocabulary",
	];
	/** IAM actions required for the AssociateEmailAddressAlias API call. */
	static readonly AssociateEmailAddressAlias: string[] = [
		"connect:AssociateEmailAddressAlias",
	];
	/** IAM actions required for the AssociateFlow API call. */
	static readonly AssociateFlow: string[] = ["connect:AssociateFlow"];
	/** IAM actions required for the AssociateHoursOfOperations API call. */
	static readonly AssociateHoursOfOperations: string[] = [];
	/** IAM actions required for the AssociateInstanceStorageConfig API call. */
	static readonly AssociateInstanceStorageConfig: string[] = [
		"connect:AssociateInstanceStorageConfig",
	];
	/** IAM actions required for the AssociateLambdaFunction API call. */
	static readonly AssociateLambdaFunction: string[] = [
		"connect:AssociateLambdaFunction",
	];
	/** IAM actions required for the AssociateLexBot API call. */
	static readonly AssociateLexBot: string[] = ["connect:AssociateLexBot"];
	/** IAM actions required for the AssociatePhoneNumberContactFlow API call. */
	static readonly AssociatePhoneNumberContactFlow: string[] = [
		"connect:AssociatePhoneNumberContactFlow",
	];
	/** IAM actions required for the AssociateQueueEmailAddresses API call. */
	static readonly AssociateQueueEmailAddresses: string[] = [
		"connect:AssociateQueueEmailAddresses",
	];
	/** IAM actions required for the AssociateQueueQuickConnects API call. */
	static readonly AssociateQueueQuickConnects: string[] = [
		"connect:AssociateQueueQuickConnects",
	];
	/** IAM actions required for the AssociateRoutingProfileQueues API call. */
	static readonly AssociateRoutingProfileQueues: string[] = [
		"connect:AssociateRoutingProfileQueues",
	];
	/** IAM actions required for the AssociateSecurityKey API call. */
	static readonly AssociateSecurityKey: string[] = [
		"connect:AssociateSecurityKey",
	];
	/** IAM actions required for the AssociateSecurityProfiles API call. */
	static readonly AssociateSecurityProfiles: string[] = [
		"connect:AssociateSecurityProfiles",
	];
	/** IAM actions required for the AssociateTrafficDistributionGroupUser API call. */
	static readonly AssociateTrafficDistributionGroupUser: string[] = [
		"connect:AssociateTrafficDistributionGroupUser",
	];
	/** IAM actions required for the AssociateUserProficiencies API call. */
	static readonly AssociateUserProficiencies: string[] = [
		"connect:AssociateUserProficiencies",
	];
	/** IAM actions required for the AssociateWorkspace API call. */
	static readonly AssociateWorkspace: string[] = ["connect:AssociateWorkspace"];
	/** IAM actions required for the BatchAssociateAnalyticsDataSet API call. */
	static readonly BatchAssociateAnalyticsDataSet: string[] = [
		"connect:BatchAssociateAnalyticsDataSet",
	];
	/** IAM actions required for the BatchCreateDataTableValue API call. */
	static readonly BatchCreateDataTableValue: string[] = [
		"connect:BatchCreateDataTableValue",
	];
	/** IAM actions required for the BatchDeleteDataTableValue API call. */
	static readonly BatchDeleteDataTableValue: string[] = [
		"connect:BatchDeleteDataTableValue",
	];
	/** IAM actions required for the BatchDescribeDataTableValue API call. */
	static readonly BatchDescribeDataTableValue: string[] = [
		"connect:BatchDescribeDataTableValue",
	];
	/** IAM actions required for the BatchDisassociateAnalyticsDataSet API call. */
	static readonly BatchDisassociateAnalyticsDataSet: string[] = [
		"connect:BatchDisassociateAnalyticsDataSet",
	];
	/** IAM actions required for the BatchGetAttachedFileMetadata API call. */
	static readonly BatchGetAttachedFileMetadata: string[] = [
		"connect:BatchGetAttachedFileMetadata",
	];
	/** IAM actions required for the BatchGetFlowAssociation API call. */
	static readonly BatchGetFlowAssociation: string[] = [
		"connect:BatchGetFlowAssociation",
	];
	/** IAM actions required for the BatchPutContact API call. */
	static readonly BatchPutContact: string[] = ["connect:BatchPutContact"];
	/** IAM actions required for the BatchUpdateDataTableValue API call. */
	static readonly BatchUpdateDataTableValue: string[] = [
		"connect:BatchUpdateDataTableValue",
	];
	/** IAM actions required for the CancelParticipantAuthentication API call. */
	static readonly CancelParticipantAuthentication: string[] = [];
	/** IAM actions required for the ClaimPhoneNumber API call. */
	static readonly ClaimPhoneNumber: string[] = [
		"connect:ClaimPhoneNumber",
		"connect:TagResource",
	];
	/** IAM actions required for the CompleteAttachedFileUpload API call. */
	static readonly CompleteAttachedFileUpload: string[] = [
		"connect:CompleteAttachedFileUpload",
	];
	/** IAM actions required for the CompleteAttachmentUpload API call. */
	static readonly CompleteAttachmentUpload: string[] = [];
	/** IAM actions required for the CreateAgentStatus API call. */
	static readonly CreateAgentStatus: string[] = [
		"connect:CreateAgentStatus",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateAttachedFile API call. */
	static readonly CreateAttachedFile: string[] = [
		"connect:CreateAttachedFile",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateAuthCode API call. */
	static readonly CreateAuthCode: string[] = [];
	/** IAM actions required for the CreateContact API call. */
	static readonly CreateContact: string[] = ["connect:CreateContact"];
	/** IAM actions required for the CreateContactFlow API call. */
	static readonly CreateContactFlow: string[] = [
		"connect:CreateContactFlow",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateContactFlowModule API call. */
	static readonly CreateContactFlowModule: string[] = [
		"connect:CreateContactFlowModule",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateContactFlowModuleAlias API call. */
	static readonly CreateContactFlowModuleAlias: string[] = [
		"connect:CreateContactFlowModuleAlias",
	];
	/** IAM actions required for the CreateContactFlowModuleVersion API call. */
	static readonly CreateContactFlowModuleVersion: string[] = [
		"connect:CreateContactFlowModuleVersion",
	];
	/** IAM actions required for the CreateContactFlowVersion API call. */
	static readonly CreateContactFlowVersion: string[] = [
		"connect:CreateContactFlowVersion",
	];
	/** IAM actions required for the CreateDataTable API call. */
	static readonly CreateDataTable: string[] = [
		"connect:CreateDataTable",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateDataTableAttribute API call. */
	static readonly CreateDataTableAttribute: string[] = [
		"connect:CreateDataTableAttribute",
	];
	/** IAM actions required for the CreateEmailAddress API call. */
	static readonly CreateEmailAddress: string[] = [
		"connect:CreateEmailAddress",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateEvaluationForm API call. */
	static readonly CreateEvaluationForm: string[] = [
		"connect:CreateEvaluationForm",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateExtractionDefinition API call. */
	static readonly CreateExtractionDefinition: string[] = [];
	/** IAM actions required for the CreateHoursOfOperation API call. */
	static readonly CreateHoursOfOperation: string[] = [
		"connect:CreateHoursOfOperation",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateHoursOfOperationOverride API call. */
	static readonly CreateHoursOfOperationOverride: string[] = [
		"connect:CreateHoursOfOperationOverride",
	];
	/** IAM actions required for the CreateInstance API call. */
	static readonly CreateInstance: string[] = [
		"connect:CreateInstance",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateIntegrationAssociation API call. */
	static readonly CreateIntegrationAssociation: string[] = [
		"connect:CreateIntegrationAssociation",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateMetric API call. */
	static readonly CreateMetric: string[] = [
		"connect:CreateMetric",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateNotification API call. */
	static readonly CreateNotification: string[] = [
		"connect:CreateNotification",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateParticipant API call. */
	static readonly CreateParticipant: string[] = ["connect:CreateParticipant"];
	/** IAM actions required for the CreateParticipantConnection API call. */
	static readonly CreateParticipantConnection: string[] = [];
	/** IAM actions required for the CreatePersistentContactAssociation API call. */
	static readonly CreatePersistentContactAssociation: string[] = [
		"connect:CreatePersistentContactAssociation",
	];
	/** IAM actions required for the CreatePredefinedAttribute API call. */
	static readonly CreatePredefinedAttribute: string[] = [
		"connect:CreatePredefinedAttribute",
	];
	/** IAM actions required for the CreatePrompt API call. */
	static readonly CreatePrompt: string[] = [
		"connect:CreatePrompt",
		"connect:TagResource",
	];
	/** IAM actions required for the CreatePushNotificationRegistration API call. */
	static readonly CreatePushNotificationRegistration: string[] = [
		"connect:CreatePushNotificationRegistration",
	];
	/** IAM actions required for the CreateQueue API call. */
	static readonly CreateQueue: string[] = [
		"connect:CreateQueue",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateQuickConnect API call. */
	static readonly CreateQuickConnect: string[] = [
		"connect:CreateQuickConnect",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateRoutingProfile API call. */
	static readonly CreateRoutingProfile: string[] = [
		"connect:CreateRoutingProfile",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateRule API call. */
	static readonly CreateRule: string[] = [
		"connect:CreateRule",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateSecurityProfile API call. */
	static readonly CreateSecurityProfile: string[] = [
		"connect:CreateSecurityProfile",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateTaskTemplate API call. */
	static readonly CreateTaskTemplate: string[] = ["connect:CreateTaskTemplate"];
	/** IAM actions required for the CreateTestCase API call. */
	static readonly CreateTestCase: string[] = ["connect:TagResource"];
	/** IAM actions required for the CreateTrafficDistributionGroup API call. */
	static readonly CreateTrafficDistributionGroup: string[] = [
		"connect:CreateTrafficDistributionGroup",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateUseCase API call. */
	static readonly CreateUseCase: string[] = [
		"connect:CreateUseCase",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = [
		"connect:CreateUser",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateUserHierarchyGroup API call. */
	static readonly CreateUserHierarchyGroup: string[] = [
		"connect:CreateUserHierarchyGroup",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateView API call. */
	static readonly CreateView: string[] = [
		"connect:CreateView",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateViewVersion API call. */
	static readonly CreateViewVersion: string[] = ["connect:CreateViewVersion"];
	/** IAM actions required for the CreateVocabulary API call. */
	static readonly CreateVocabulary: string[] = [
		"connect:CreateVocabulary",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateWorkspace API call. */
	static readonly CreateWorkspace: string[] = [
		"connect:CreateWorkspace",
		"connect:TagResource",
	];
	/** IAM actions required for the CreateWorkspacePage API call. */
	static readonly CreateWorkspacePage: string[] = [
		"connect:CreateWorkspacePage",
	];
	/** IAM actions required for the DeactivateEvaluationForm API call. */
	static readonly DeactivateEvaluationForm: string[] = [
		"connect:DeactivateEvaluationForm",
	];
	/** IAM actions required for the DeleteAttachedFile API call. */
	static readonly DeleteAttachedFile: string[] = ["connect:DeleteAttachedFile"];
	/** IAM actions required for the DeleteContactData API call. */
	static readonly DeleteContactData: string[] = [];
	/** IAM actions required for the DeleteContactEvaluation API call. */
	static readonly DeleteContactEvaluation: string[] = [
		"connect:DeleteContactEvaluation",
	];
	/** IAM actions required for the DeleteContactFlow API call. */
	static readonly DeleteContactFlow: string[] = ["connect:DeleteContactFlow"];
	/** IAM actions required for the DeleteContactFlowModule API call. */
	static readonly DeleteContactFlowModule: string[] = [
		"connect:DeleteContactFlowModule",
	];
	/** IAM actions required for the DeleteContactFlowModuleAlias API call. */
	static readonly DeleteContactFlowModuleAlias: string[] = [
		"connect:DeleteContactFlowModuleAlias",
	];
	/** IAM actions required for the DeleteContactFlowModuleVersion API call. */
	static readonly DeleteContactFlowModuleVersion: string[] = [
		"connect:DeleteContactFlowModuleVersion",
	];
	/** IAM actions required for the DeleteContactFlowVersion API call. */
	static readonly DeleteContactFlowVersion: string[] = [
		"connect:DeleteContactFlowVersion",
	];
	/** IAM actions required for the DeleteDataTable API call. */
	static readonly DeleteDataTable: string[] = ["connect:DeleteDataTable"];
	/** IAM actions required for the DeleteDataTableAttribute API call. */
	static readonly DeleteDataTableAttribute: string[] = [
		"connect:DeleteDataTableAttribute",
	];
	/** IAM actions required for the DeleteEmailAddress API call. */
	static readonly DeleteEmailAddress: string[] = ["connect:DeleteEmailAddress"];
	/** IAM actions required for the DeleteEvaluationForm API call. */
	static readonly DeleteEvaluationForm: string[] = [
		"connect:DeleteEvaluationForm",
	];
	/** IAM actions required for the DeleteExtractionDefinition API call. */
	static readonly DeleteExtractionDefinition: string[] = [];
	/** IAM actions required for the DeleteHoursOfOperation API call. */
	static readonly DeleteHoursOfOperation: string[] = [
		"connect:DeleteHoursOfOperation",
	];
	/** IAM actions required for the DeleteHoursOfOperationOverride API call. */
	static readonly DeleteHoursOfOperationOverride: string[] = [
		"connect:DeleteHoursOfOperationOverride",
	];
	/** IAM actions required for the DeleteInstance API call. */
	static readonly DeleteInstance: string[] = ["connect:DeleteInstance"];
	/** IAM actions required for the DeleteIntegrationAssociation API call. */
	static readonly DeleteIntegrationAssociation: string[] = [
		"connect:DeleteIntegrationAssociation",
	];
	/** IAM actions required for the DeleteMetric API call. */
	static readonly DeleteMetric: string[] = ["connect:DeleteMetric"];
	/** IAM actions required for the DeleteNotification API call. */
	static readonly DeleteNotification: string[] = ["connect:DeleteNotification"];
	/** IAM actions required for the DeletePredefinedAttribute API call. */
	static readonly DeletePredefinedAttribute: string[] = [
		"connect:DeletePredefinedAttribute",
	];
	/** IAM actions required for the DeletePrompt API call. */
	static readonly DeletePrompt: string[] = ["connect:DeletePrompt"];
	/** IAM actions required for the DeletePushNotificationRegistration API call. */
	static readonly DeletePushNotificationRegistration: string[] = [
		"connect:DeletePushNotificationRegistration",
	];
	/** IAM actions required for the DeleteQueue API call. */
	static readonly DeleteQueue: string[] = ["connect:DeleteQueue"];
	/** IAM actions required for the DeleteQuickConnect API call. */
	static readonly DeleteQuickConnect: string[] = ["connect:DeleteQuickConnect"];
	/** IAM actions required for the DeleteRoutingProfile API call. */
	static readonly DeleteRoutingProfile: string[] = [
		"connect:DeleteRoutingProfile",
	];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DeleteRule: string[] = ["connect:DeleteRule"];
	/** IAM actions required for the DeleteSecurityProfile API call. */
	static readonly DeleteSecurityProfile: string[] = [
		"connect:DeleteSecurityProfile",
	];
	/** IAM actions required for the DeleteSession API call. */
	static readonly DeleteSession: string[] = [];
	/** IAM actions required for the DeleteTaskTemplate API call. */
	static readonly DeleteTaskTemplate: string[] = ["connect:DeleteTaskTemplate"];
	/** IAM actions required for the DeleteTestCase API call. */
	static readonly DeleteTestCase: string[] = [];
	/** IAM actions required for the DeleteTrafficDistributionGroup API call. */
	static readonly DeleteTrafficDistributionGroup: string[] = [
		"connect:DeleteTrafficDistributionGroup",
	];
	/** IAM actions required for the DeleteUseCase API call. */
	static readonly DeleteUseCase: string[] = ["connect:DeleteUseCase"];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = ["connect:DeleteUser"];
	/** IAM actions required for the DeleteUserHierarchyGroup API call. */
	static readonly DeleteUserHierarchyGroup: string[] = [
		"connect:DeleteUserHierarchyGroup",
	];
	/** IAM actions required for the DeleteView API call. */
	static readonly DeleteView: string[] = ["connect:DeleteView"];
	/** IAM actions required for the DeleteViewVersion API call. */
	static readonly DeleteViewVersion: string[] = ["connect:DeleteViewVersion"];
	/** IAM actions required for the DeleteVocabulary API call. */
	static readonly DeleteVocabulary: string[] = ["connect:DeleteVocabulary"];
	/** IAM actions required for the DeleteWorkspace API call. */
	static readonly DeleteWorkspace: string[] = ["connect:DeleteWorkspace"];
	/** IAM actions required for the DeleteWorkspaceMedia API call. */
	static readonly DeleteWorkspaceMedia: string[] = [
		"connect:DeleteWorkspaceMedia",
	];
	/** IAM actions required for the DeleteWorkspacePage API call. */
	static readonly DeleteWorkspacePage: string[] = [
		"connect:DeleteWorkspacePage",
	];
	/** IAM actions required for the DescribeAgentStatus API call. */
	static readonly DescribeAgentStatus: string[] = [
		"connect:DescribeAgentStatus",
	];
	/** IAM actions required for the DescribeAttachedFilesConfiguration API call. */
	static readonly DescribeAttachedFilesConfiguration: string[] = [
		"connect:DescribeAttachedFilesConfiguration",
	];
	/** IAM actions required for the DescribeAuthenticationProfile API call. */
	static readonly DescribeAuthenticationProfile: string[] = [
		"connect:DescribeAuthenticationProfile",
	];
	/** IAM actions required for the DescribeContact API call. */
	static readonly DescribeContact: string[] = ["connect:DescribeContact"];
	/** IAM actions required for the DescribeContactEvaluation API call. */
	static readonly DescribeContactEvaluation: string[] = [
		"connect:DescribeContactEvaluation",
	];
	/** IAM actions required for the DescribeContactFlow API call. */
	static readonly DescribeContactFlow: string[] = [
		"connect:DescribeContactFlow",
	];
	/** IAM actions required for the DescribeContactFlowModule API call. */
	static readonly DescribeContactFlowModule: string[] = [
		"connect:DescribeContactFlowModule",
	];
	/** IAM actions required for the DescribeContactFlowModuleAlias API call. */
	static readonly DescribeContactFlowModuleAlias: string[] = [
		"connect:DescribeContactFlowModuleAlias",
	];
	/** IAM actions required for the DescribeDataTable API call. */
	static readonly DescribeDataTable: string[] = ["connect:DescribeDataTable"];
	/** IAM actions required for the DescribeDataTableAttribute API call. */
	static readonly DescribeDataTableAttribute: string[] = [
		"connect:DescribeDataTableAttribute",
	];
	/** IAM actions required for the DescribeEmailAddress API call. */
	static readonly DescribeEmailAddress: string[] = [
		"connect:DescribeEmailAddress",
	];
	/** IAM actions required for the DescribeEvaluationForm API call. */
	static readonly DescribeEvaluationForm: string[] = [
		"connect:DescribeEvaluationForm",
	];
	/** IAM actions required for the DescribeExtractionDefinition API call. */
	static readonly DescribeExtractionDefinition: string[] = [];
	/** IAM actions required for the DescribeHoursOfOperation API call. */
	static readonly DescribeHoursOfOperation: string[] = [
		"connect:DescribeHoursOfOperation",
	];
	/** IAM actions required for the DescribeHoursOfOperationOverride API call. */
	static readonly DescribeHoursOfOperationOverride: string[] = [
		"connect:DescribeHoursOfOperationOverride",
	];
	/** IAM actions required for the DescribeInstance API call. */
	static readonly DescribeInstance: string[] = ["connect:DescribeInstance"];
	/** IAM actions required for the DescribeInstanceAttribute API call. */
	static readonly DescribeInstanceAttribute: string[] = [
		"connect:DescribeInstanceAttribute",
	];
	/** IAM actions required for the DescribeInstanceStorageConfig API call. */
	static readonly DescribeInstanceStorageConfig: string[] = [
		"connect:DescribeInstanceStorageConfig",
	];
	/** IAM actions required for the DescribeMetric API call. */
	static readonly DescribeMetric: string[] = ["connect:DescribeMetric"];
	/** IAM actions required for the DescribeNotification API call. */
	static readonly DescribeNotification: string[] = [
		"connect:DescribeNotification",
	];
	/** IAM actions required for the DescribePhoneNumber API call. */
	static readonly DescribePhoneNumber: string[] = [
		"connect:DescribePhoneNumber",
	];
	/** IAM actions required for the DescribePredefinedAttribute API call. */
	static readonly DescribePredefinedAttribute: string[] = [
		"connect:DescribePredefinedAttribute",
	];
	/** IAM actions required for the DescribePrompt API call. */
	static readonly DescribePrompt: string[] = ["connect:DescribePrompt"];
	/** IAM actions required for the DescribeQueue API call. */
	static readonly DescribeQueue: string[] = ["connect:DescribeQueue"];
	/** IAM actions required for the DescribeQuickConnect API call. */
	static readonly DescribeQuickConnect: string[] = [
		"connect:DescribeQuickConnect",
	];
	/** IAM actions required for the DescribeRoutingProfile API call. */
	static readonly DescribeRoutingProfile: string[] = [
		"connect:DescribeRoutingProfile",
	];
	/** IAM actions required for the DescribeRule API call. */
	static readonly DescribeRule: string[] = ["connect:DescribeRule"];
	/** IAM actions required for the DescribeSecurityProfile API call. */
	static readonly DescribeSecurityProfile: string[] = [
		"connect:DescribeSecurityProfile",
	];
	/** IAM actions required for the DescribeTestCase API call. */
	static readonly DescribeTestCase: string[] = [];
	/** IAM actions required for the DescribeTrafficDistributionGroup API call. */
	static readonly DescribeTrafficDistributionGroup: string[] = [
		"connect:DescribeTrafficDistributionGroup",
	];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DescribeUser: string[] = ["connect:DescribeUser"];
	/** IAM actions required for the DescribeUserHierarchyGroup API call. */
	static readonly DescribeUserHierarchyGroup: string[] = [
		"connect:DescribeUserHierarchyGroup",
	];
	/** IAM actions required for the DescribeUserHierarchyStructure API call. */
	static readonly DescribeUserHierarchyStructure: string[] = [
		"connect:DescribeUserHierarchyStructure",
	];
	/** IAM actions required for the DescribeView API call. */
	static readonly DescribeView: string[] = ["connect:DescribeView"];
	/** IAM actions required for the DescribeVocabulary API call. */
	static readonly DescribeVocabulary: string[] = ["connect:DescribeVocabulary"];
	/** IAM actions required for the DescribeWorkspace API call. */
	static readonly DescribeWorkspace: string[] = ["connect:DescribeWorkspace"];
	/** IAM actions required for the DisassociateAnalyticsDataSet API call. */
	static readonly DisassociateAnalyticsDataSet: string[] = [
		"connect:DisassociateAnalyticsDataSet",
	];
	/** IAM actions required for the DisassociateApprovedOrigin API call. */
	static readonly DisassociateApprovedOrigin: string[] = [
		"connect:DisassociateApprovedOrigin",
	];
	/** IAM actions required for the DisassociateBot API call. */
	static readonly DisassociateBot: string[] = ["connect:DisassociateBot"];
	/** IAM actions required for the DisassociateEmailAddressAlias API call. */
	static readonly DisassociateEmailAddressAlias: string[] = [
		"connect:DisassociateEmailAddressAlias",
	];
	/** IAM actions required for the DisassociateFlow API call. */
	static readonly DisassociateFlow: string[] = ["connect:DisassociateFlow"];
	/** IAM actions required for the DisassociateHoursOfOperations API call. */
	static readonly DisassociateHoursOfOperations: string[] = [];
	/** IAM actions required for the DisassociateInstanceStorageConfig API call. */
	static readonly DisassociateInstanceStorageConfig: string[] = [
		"connect:DisassociateInstanceStorageConfig",
	];
	/** IAM actions required for the DisassociateLambdaFunction API call. */
	static readonly DisassociateLambdaFunction: string[] = [
		"connect:DisassociateLambdaFunction",
	];
	/** IAM actions required for the DisassociateLexBot API call. */
	static readonly DisassociateLexBot: string[] = ["connect:DisassociateLexBot"];
	/** IAM actions required for the DisassociatePhoneNumberContactFlow API call. */
	static readonly DisassociatePhoneNumberContactFlow: string[] = [
		"connect:DisassociatePhoneNumberContactFlow",
	];
	/** IAM actions required for the DisassociateQueueEmailAddresses API call. */
	static readonly DisassociateQueueEmailAddresses: string[] = [
		"connect:DisassociateQueueEmailAddresses",
	];
	/** IAM actions required for the DisassociateQueueQuickConnects API call. */
	static readonly DisassociateQueueQuickConnects: string[] = [
		"connect:DisassociateQueueQuickConnects",
	];
	/** IAM actions required for the DisassociateRoutingProfileQueues API call. */
	static readonly DisassociateRoutingProfileQueues: string[] = [
		"connect:DisassociateRoutingProfileQueues",
	];
	/** IAM actions required for the DisassociateSecurityKey API call. */
	static readonly DisassociateSecurityKey: string[] = [
		"connect:DisassociateSecurityKey",
	];
	/** IAM actions required for the DisassociateSecurityProfiles API call. */
	static readonly DisassociateSecurityProfiles: string[] = [
		"connect:DisassociateSecurityProfiles",
	];
	/** IAM actions required for the DisassociateTrafficDistributionGroupUser API call. */
	static readonly DisassociateTrafficDistributionGroupUser: string[] = [
		"connect:DisassociateTrafficDistributionGroupUser",
	];
	/** IAM actions required for the DisassociateUserProficiencies API call. */
	static readonly DisassociateUserProficiencies: string[] = [
		"connect:DisassociateUserProficiencies",
	];
	/** IAM actions required for the DisassociateWorkspace API call. */
	static readonly DisassociateWorkspace: string[] = [
		"connect:DisassociateWorkspace",
	];
	/** IAM actions required for the DisconnectParticipant API call. */
	static readonly DisconnectParticipant: string[] = [];
	/** IAM actions required for the DismissUserContact API call. */
	static readonly DismissUserContact: string[] = ["connect:DismissUserContact"];
	/** IAM actions required for the EvaluateDataTableValues API call. */
	static readonly EvaluateDataTableValues: string[] = [
		"connect:EvaluateDataTableValues",
	];
	/** IAM actions required for the GetAttachedFile API call. */
	static readonly opGetAttachedFile: string[] = ["connect:GetAttachedFile"];
	/** IAM actions required for the GetAttachment API call. */
	static readonly opGetAttachment: string[] = [];
	/** IAM actions required for the GetAuthenticationUrl API call. */
	static readonly opGetAuthenticationUrl: string[] = [];
	/** IAM actions required for the GetContactAttributes API call. */
	static readonly opGetContactAttributes: string[] = [
		"connect:GetContactAttributes",
	];
	/** IAM actions required for the GetContactMetrics API call. */
	static readonly opGetContactMetrics: string[] = ["connect:GetContactMetrics"];
	/** IAM actions required for the GetCurrentMetricData API call. */
	static readonly opGetCurrentMetricData: string[] = [
		"connect:GetCurrentMetricData",
	];
	/** IAM actions required for the GetCurrentUserData API call. */
	static readonly opGetCurrentUserData: string[] = [
		"connect:GetCurrentUserData",
	];
	/** IAM actions required for the GetEffectiveHoursOfOperations API call. */
	static readonly opGetEffectiveHoursOfOperations: string[] = [
		"connect:GetEffectiveHoursOfOperations",
	];
	/** IAM actions required for the GetEvaluationFormValidation API call. */
	static readonly opGetEvaluationFormValidation: string[] = [
		"connect:GetEvaluationFormValidation",
	];
	/** IAM actions required for the GetFederationToken API call. */
	static readonly opGetFederationToken: string[] = [
		"connect:GetFederationToken",
	];
	/** IAM actions required for the GetFlowAssociation API call. */
	static readonly opGetFlowAssociation: string[] = [
		"connect:GetFlowAssociation",
	];
	/** IAM actions required for the GetMetricData API call. */
	static readonly opGetMetricData: string[] = ["connect:GetMetricData"];
	/** IAM actions required for the GetMetricDataV2 API call. */
	static readonly opGetMetricDataV2: string[] = ["connect:GetMetricDataV2"];
	/** IAM actions required for the GetPromptFile API call. */
	static readonly opGetPromptFile: string[] = ["connect:GetPromptFile"];
	/** IAM actions required for the GetTaskTemplate API call. */
	static readonly opGetTaskTemplate: string[] = ["connect:GetTaskTemplate"];
	/** IAM actions required for the GetTestCaseExecutionSummary API call. */
	static readonly opGetTestCaseExecutionSummary: string[] = [];
	/** IAM actions required for the GetTrafficDistribution API call. */
	static readonly opGetTrafficDistribution: string[] = [
		"connect:GetTrafficDistribution",
	];
	/** IAM actions required for the GetTranscript API call. */
	static readonly opGetTranscript: string[] = [];
	/** IAM actions required for the ImportPhoneNumber API call. */
	static readonly ImportPhoneNumber: string[] = [
		"connect:ImportPhoneNumber",
		"connect:TagResource",
	];
	/** IAM actions required for the ImportWorkspaceMedia API call. */
	static readonly ImportWorkspaceMedia: string[] = [
		"connect:ImportWorkspaceMedia",
	];
	/** IAM actions required for the ListAgentStatuses API call. */
	static readonly ListAgentStatuses: string[] = ["connect:ListAgentStatuses"];
	/** IAM actions required for the ListAnalyticsDataAssociations API call. */
	static readonly ListAnalyticsDataAssociations: string[] = [
		"connect:ListAnalyticsDataAssociations",
	];
	/** IAM actions required for the ListAnalyticsDataLakeDataSets API call. */
	static readonly ListAnalyticsDataLakeDataSets: string[] = [
		"connect:ListAnalyticsDataLakeDataSets",
	];
	/** IAM actions required for the ListApprovedOrigins API call. */
	static readonly ListApprovedOrigins: string[] = [
		"connect:ListApprovedOrigins",
	];
	/** IAM actions required for the ListAssociatedContacts API call. */
	static readonly ListAssociatedContacts: string[] = [
		"connect:ListAssociatedContacts",
	];
	/** IAM actions required for the ListAttachedFilesConfigurations API call. */
	static readonly ListAttachedFilesConfigurations: string[] = [
		"connect:ListAttachedFilesConfigurations",
	];
	/** IAM actions required for the ListAuthenticationProfiles API call. */
	static readonly ListAuthenticationProfiles: string[] = [
		"connect:ListAuthenticationProfiles",
	];
	/** IAM actions required for the ListBots API call. */
	static readonly ListBots: string[] = ["connect:ListBots"];
	/** IAM actions required for the ListChildHoursOfOperations API call. */
	static readonly ListChildHoursOfOperations: string[] = [];
	/** IAM actions required for the ListContactEvaluations API call. */
	static readonly ListContactEvaluations: string[] = [
		"connect:ListContactEvaluations",
	];
	/** IAM actions required for the ListContactFlowModuleAliases API call. */
	static readonly ListContactFlowModuleAliases: string[] = [
		"connect:ListContactFlowModuleAliases",
	];
	/** IAM actions required for the ListContactFlowModuleVersions API call. */
	static readonly ListContactFlowModuleVersions: string[] = [
		"connect:ListContactFlowModuleVersions",
	];
	/** IAM actions required for the ListContactFlowModules API call. */
	static readonly ListContactFlowModules: string[] = [
		"connect:ListContactFlowModules",
	];
	/** IAM actions required for the ListContactFlowVersions API call. */
	static readonly ListContactFlowVersions: string[] = [
		"connect:ListContactFlowVersions",
	];
	/** IAM actions required for the ListContactFlows API call. */
	static readonly ListContactFlows: string[] = ["connect:ListContactFlows"];
	/** IAM actions required for the ListContactReferences API call. */
	static readonly ListContactReferences: string[] = [
		"connect:ListContactReferences",
	];
	/** IAM actions required for the ListDataTableAttributes API call. */
	static readonly ListDataTableAttributes: string[] = [
		"connect:ListDataTableAttributes",
	];
	/** IAM actions required for the ListDataTablePrimaryValues API call. */
	static readonly ListDataTablePrimaryValues: string[] = [
		"connect:ListDataTablePrimaryValues",
	];
	/** IAM actions required for the ListDataTableValues API call. */
	static readonly ListDataTableValues: string[] = [
		"connect:ListDataTableValues",
	];
	/** IAM actions required for the ListDataTables API call. */
	static readonly ListDataTables: string[] = ["connect:ListDataTables"];
	/** IAM actions required for the ListDefaultVocabularies API call. */
	static readonly ListDefaultVocabularies: string[] = [
		"connect:ListDefaultVocabularies",
	];
	/** IAM actions required for the ListEntitySecurityProfiles API call. */
	static readonly ListEntitySecurityProfiles: string[] = [
		"connect:ListEntitySecurityProfiles",
	];
	/** IAM actions required for the ListEvaluationFormVersions API call. */
	static readonly ListEvaluationFormVersions: string[] = [
		"connect:ListEvaluationFormVersions",
	];
	/** IAM actions required for the ListEvaluationForms API call. */
	static readonly ListEvaluationForms: string[] = [
		"connect:ListEvaluationForms",
	];
	/** IAM actions required for the ListExtractionDefinitions API call. */
	static readonly ListExtractionDefinitions: string[] = [];
	/** IAM actions required for the ListFlowAssociations API call. */
	static readonly ListFlowAssociations: string[] = [
		"connect:ListFlowAssociations",
	];
	/** IAM actions required for the ListHoursOfOperationOverrides API call. */
	static readonly ListHoursOfOperationOverrides: string[] = [
		"connect:ListHoursOfOperationOverrides",
	];
	/** IAM actions required for the ListHoursOfOperations API call. */
	static readonly ListHoursOfOperations: string[] = [
		"connect:ListHoursOfOperations",
	];
	/** IAM actions required for the ListInstanceAttributes API call. */
	static readonly ListInstanceAttributes: string[] = [
		"connect:ListInstanceAttributes",
	];
	/** IAM actions required for the ListInstanceStorageConfigs API call. */
	static readonly ListInstanceStorageConfigs: string[] = [
		"connect:ListInstanceStorageConfigs",
	];
	/** IAM actions required for the ListInstances API call. */
	static readonly ListInstances: string[] = ["connect:ListInstances"];
	/** IAM actions required for the ListIntegrationAssociations API call. */
	static readonly ListIntegrationAssociations: string[] = [
		"connect:ListIntegrationAssociations",
	];
	/** IAM actions required for the ListLambdaFunctions API call. */
	static readonly ListLambdaFunctions: string[] = [
		"connect:ListLambdaFunctions",
	];
	/** IAM actions required for the ListLexBots API call. */
	static readonly ListLexBots: string[] = ["connect:ListLexBots"];
	/** IAM actions required for the ListMetrics API call. */
	static readonly ListMetrics: string[] = ["connect:ListMetrics"];
	/** IAM actions required for the ListNotifications API call. */
	static readonly ListNotifications: string[] = ["connect:ListNotifications"];
	/** IAM actions required for the ListPhoneNumbers API call. */
	static readonly ListPhoneNumbers: string[] = ["connect:ListPhoneNumbers"];
	/** IAM actions required for the ListPhoneNumbersV2 API call. */
	static readonly ListPhoneNumbersV2: string[] = ["connect:ListPhoneNumbersV2"];
	/** IAM actions required for the ListPredefinedAttributes API call. */
	static readonly ListPredefinedAttributes: string[] = [
		"connect:ListPredefinedAttributes",
	];
	/** IAM actions required for the ListPrompts API call. */
	static readonly ListPrompts: string[] = ["connect:ListPrompts"];
	/** IAM actions required for the ListQueueEmailAddresses API call. */
	static readonly ListQueueEmailAddresses: string[] = [
		"connect:ListQueueEmailAddresses",
	];
	/** IAM actions required for the ListQueueQuickConnects API call. */
	static readonly ListQueueQuickConnects: string[] = [
		"connect:ListQueueQuickConnects",
	];
	/** IAM actions required for the ListQueues API call. */
	static readonly ListQueues: string[] = ["connect:ListQueues"];
	/** IAM actions required for the ListQuickConnects API call. */
	static readonly ListQuickConnects: string[] = ["connect:ListQuickConnects"];
	/** IAM actions required for the ListRealtimeContactAnalysisSegments API call. */
	static readonly ListRealtimeContactAnalysisSegments: string[] = [
		"connect:ListRealtimeContactAnalysisSegments",
	];
	/** IAM actions required for the ListRealtimeContactAnalysisSegmentsV2 API call. */
	static readonly ListRealtimeContactAnalysisSegmentsV2: string[] = [
		"connect:ListRealtimeContactAnalysisSegmentsV2",
	];
	/** IAM actions required for the ListRoutingProfileManualAssignmentQueues API call. */
	static readonly ListRoutingProfileManualAssignmentQueues: string[] = [
		"connect:ListRoutingProfileManualAssignmentQueues",
	];
	/** IAM actions required for the ListRoutingProfileQueues API call. */
	static readonly ListRoutingProfileQueues: string[] = [
		"connect:ListRoutingProfileQueues",
	];
	/** IAM actions required for the ListRoutingProfiles API call. */
	static readonly ListRoutingProfiles: string[] = [
		"connect:ListRoutingProfiles",
	];
	/** IAM actions required for the ListRules API call. */
	static readonly ListRules: string[] = ["connect:ListRules"];
	/** IAM actions required for the ListSecurityKeys API call. */
	static readonly ListSecurityKeys: string[] = ["connect:ListSecurityKeys"];
	/** IAM actions required for the ListSecurityProfileApplications API call. */
	static readonly ListSecurityProfileApplications: string[] = [
		"connect:ListSecurityProfileApplications",
	];
	/** IAM actions required for the ListSecurityProfileFlowModules API call. */
	static readonly ListSecurityProfileFlowModules: string[] = [
		"connect:ListSecurityProfileFlowModules",
	];
	/** IAM actions required for the ListSecurityProfilePermissions API call. */
	static readonly ListSecurityProfilePermissions: string[] = [
		"connect:ListSecurityProfilePermissions",
	];
	/** IAM actions required for the ListSecurityProfiles API call. */
	static readonly ListSecurityProfiles: string[] = [
		"connect:ListSecurityProfiles",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"connect:ListTagsForResource",
	];
	/** IAM actions required for the ListTaskTemplates API call. */
	static readonly ListTaskTemplates: string[] = ["connect:ListTaskTemplates"];
	/** IAM actions required for the ListTestCaseExecutionRecords API call. */
	static readonly ListTestCaseExecutionRecords: string[] = [];
	/** IAM actions required for the ListTestCaseExecutions API call. */
	static readonly ListTestCaseExecutions: string[] = [];
	/** IAM actions required for the ListTestCases API call. */
	static readonly ListTestCases: string[] = [];
	/** IAM actions required for the ListTrafficDistributionGroupUsers API call. */
	static readonly ListTrafficDistributionGroupUsers: string[] = [
		"connect:ListTrafficDistributionGroupUsers",
	];
	/** IAM actions required for the ListTrafficDistributionGroups API call. */
	static readonly ListTrafficDistributionGroups: string[] = [
		"connect:ListTrafficDistributionGroups",
	];
	/** IAM actions required for the ListUseCases API call. */
	static readonly ListUseCases: string[] = ["connect:ListUseCases"];
	/** IAM actions required for the ListUserHierarchyGroups API call. */
	static readonly ListUserHierarchyGroups: string[] = [
		"connect:ListUserHierarchyGroups",
	];
	/** IAM actions required for the ListUserNotifications API call. */
	static readonly ListUserNotifications: string[] = [
		"connect:ListUserNotifications",
	];
	/** IAM actions required for the ListUserProficiencies API call. */
	static readonly ListUserProficiencies: string[] = [
		"connect:ListUserProficiencies",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly ListUsers: string[] = ["connect:ListUsers"];
	/** IAM actions required for the ListViewVersions API call. */
	static readonly ListViewVersions: string[] = ["connect:ListViewVersions"];
	/** IAM actions required for the ListViews API call. */
	static readonly ListViews: string[] = ["connect:ListViews"];
	/** IAM actions required for the ListWorkspaceMedia API call. */
	static readonly ListWorkspaceMedia: string[] = ["connect:ListWorkspaceMedia"];
	/** IAM actions required for the ListWorkspacePages API call. */
	static readonly ListWorkspacePages: string[] = ["connect:ListWorkspacePages"];
	/** IAM actions required for the ListWorkspaces API call. */
	static readonly ListWorkspaces: string[] = ["connect:ListWorkspaces"];
	/** IAM actions required for the MonitorContact API call. */
	static readonly MonitorContact: string[] = ["connect:MonitorContact"];
	/** IAM actions required for the PauseContact API call. */
	static readonly PauseContact: string[] = ["connect:PauseContact"];
	/** IAM actions required for the PutUserStatus API call. */
	static readonly PutUserStatus: string[] = ["connect:PutUserStatus"];
	/** IAM actions required for the ReleasePhoneNumber API call. */
	static readonly ReleasePhoneNumber: string[] = ["connect:ReleasePhoneNumber"];
	/** IAM actions required for the ReplicateInstance API call. */
	static readonly ReplicateInstance: string[] = ["connect:ReplicateInstance"];
	/** IAM actions required for the ResumeContact API call. */
	static readonly ResumeContact: string[] = ["connect:ResumeContact"];
	/** IAM actions required for the ResumeContactRecording API call. */
	static readonly ResumeContactRecording: string[] = [
		"connect:ResumeContactRecording",
	];
	/** IAM actions required for the SearchAgentStatuses API call. */
	static readonly SearchAgentStatuses: string[] = [
		"connect:DescribeAgentStatus",
		"connect:SearchAgentStatuses",
	];
	/** IAM actions required for the SearchAvailablePhoneNumbers API call. */
	static readonly SearchAvailablePhoneNumbers: string[] = [
		"connect:SearchAvailablePhoneNumbers",
	];
	/** IAM actions required for the SearchContactEvaluations API call. */
	static readonly SearchContactEvaluations: string[] = [
		"connect:DescribeContactEvaluation",
		"connect:SearchContactEvaluations",
	];
	/** IAM actions required for the SearchContactFlowModules API call. */
	static readonly SearchContactFlowModules: string[] = [
		"connect:DescribeContactFlowModule",
		"connect:SearchContactFlowModules",
	];
	/** IAM actions required for the SearchContactFlows API call. */
	static readonly SearchContactFlows: string[] = [
		"connect:DescribeContactFlow",
		"connect:SearchContactFlows",
	];
	/** IAM actions required for the SearchContacts API call. */
	static readonly SearchContacts: string[] = [
		"connect:DescribeContact",
		"connect:GetContactAttributes",
		"connect:SearchContacts",
	];
	/** IAM actions required for the SearchDataTables API call. */
	static readonly SearchDataTables: string[] = [
		"connect:DescribeDataTable",
		"connect:SearchDataTables",
	];
	/** IAM actions required for the SearchEmailAddresses API call. */
	static readonly SearchEmailAddresses: string[] = [
		"connect:DescribeEmailAddress",
		"connect:SearchEmailAddresses",
	];
	/** IAM actions required for the SearchEvaluationForms API call. */
	static readonly SearchEvaluationForms: string[] = [
		"connect:DescribeEvaluationForm",
		"connect:SearchEvaluationForms",
	];
	/** IAM actions required for the SearchHoursOfOperationOverrides API call. */
	static readonly SearchHoursOfOperationOverrides: string[] = [
		"connect:DescribeHoursOfOperationOverride",
		"connect:SearchHoursOfOperationOverrides",
	];
	/** IAM actions required for the SearchHoursOfOperations API call. */
	static readonly SearchHoursOfOperations: string[] = [
		"connect:DescribeHoursOfOperation",
		"connect:SearchHoursOfOperations",
	];
	/** IAM actions required for the SearchMetrics API call. */
	static readonly SearchMetrics: string[] = [
		"connect:DescribeMetric",
		"connect:SearchMetrics",
	];
	/** IAM actions required for the SearchNotifications API call. */
	static readonly SearchNotifications: string[] = [
		"connect:DescribeNotification",
		"connect:SearchNotifications",
	];
	/** IAM actions required for the SearchPredefinedAttributes API call. */
	static readonly SearchPredefinedAttributes: string[] = [
		"connect:DescribePredefinedAttribute",
		"connect:SearchPredefinedAttributes",
	];
	/** IAM actions required for the SearchPrompts API call. */
	static readonly SearchPrompts: string[] = [
		"connect:DescribePrompt",
		"connect:SearchPrompts",
	];
	/** IAM actions required for the SearchQueues API call. */
	static readonly SearchQueues: string[] = [
		"connect:DescribeQueue",
		"connect:SearchQueues",
	];
	/** IAM actions required for the SearchQuickConnects API call. */
	static readonly SearchQuickConnects: string[] = [
		"connect:DescribeQuickConnect",
		"connect:SearchQuickConnects",
	];
	/** IAM actions required for the SearchResourceTags API call. */
	static readonly SearchResourceTags: string[] = ["connect:SearchResourceTags"];
	/** IAM actions required for the SearchRoutingProfiles API call. */
	static readonly SearchRoutingProfiles: string[] = [
		"connect:DescribeRoutingProfile",
		"connect:SearchRoutingProfiles",
	];
	/** IAM actions required for the SearchRules API call. */
	static readonly SearchRules: string[] = [
		"connect:DescribeRule",
		"connect:SearchRules",
	];
	/** IAM actions required for the SearchSecurityProfiles API call. */
	static readonly SearchSecurityProfiles: string[] = [
		"connect:DescribeSecurityProfile",
		"connect:SearchSecurityProfiles",
	];
	/** IAM actions required for the SearchTestCases API call. */
	static readonly SearchTestCases: string[] = [];
	/** IAM actions required for the SearchUserHierarchyGroups API call. */
	static readonly SearchUserHierarchyGroups: string[] = [
		"connect:DescribeUserHierarchyGroup",
		"connect:SearchUserHierarchyGroups",
	];
	/** IAM actions required for the SearchUsers API call. */
	static readonly SearchUsers: string[] = [
		"connect:DescribeUser",
		"connect:ListUserProficiencies",
		"connect:SearchUsers",
	];
	/** IAM actions required for the SearchViews API call. */
	static readonly SearchViews: string[] = [
		"connect:DescribeView",
		"connect:SearchViews",
	];
	/** IAM actions required for the SearchVocabularies API call. */
	static readonly SearchVocabularies: string[] = ["connect:SearchVocabularies"];
	/** IAM actions required for the SearchWorkspaceAssociations API call. */
	static readonly SearchWorkspaceAssociations: string[] = [
		"connect:SearchWorkspaceAssociations",
	];
	/** IAM actions required for the SearchWorkspaces API call. */
	static readonly SearchWorkspaces: string[] = [
		"connect:DescribeWorkspace",
		"connect:SearchWorkspaces",
	];
	/** IAM actions required for the SendChatIntegrationEvent API call. */
	static readonly SendChatIntegrationEvent: string[] = [
		"connect:SendChatIntegrationEvent",
	];
	/** IAM actions required for the SendEvent API call. */
	static readonly SendEvent: string[] = [];
	/** IAM actions required for the SendMessage API call. */
	static readonly SendMessage: string[] = [];
	/** IAM actions required for the SendOutboundEmail API call. */
	static readonly SendOutboundEmail: string[] = ["connect:SendOutboundEmail"];
	/** IAM actions required for the SendOutboundWebNotification API call. */
	static readonly SendOutboundWebNotification: string[] = [
		"connect:SendOutboundWebNotification",
	];
	/** IAM actions required for the StartAssistantContact API call. */
	static readonly StartAssistantContact: string[] = [];
	/** IAM actions required for the StartAttachedFileUpload API call. */
	static readonly StartAttachedFileUpload: string[] = [
		"connect:StartAttachedFileUpload",
		"connect:TagResource",
	];
	/** IAM actions required for the StartAttachmentUpload API call. */
	static readonly StartAttachmentUpload: string[] = [];
	/** IAM actions required for the StartChatContact API call. */
	static readonly StartChatContact: string[] = ["connect:StartChatContact"];
	/** IAM actions required for the StartContactConversationalAnalyticsJob API call. */
	static readonly StartContactConversationalAnalyticsJob: string[] = [
		"connect:StartContactConversationalAnalyticsJob",
	];
	/** IAM actions required for the StartContactEvaluation API call. */
	static readonly StartContactEvaluation: string[] = [
		"connect:StartContactEvaluation",
		"connect:TagResource",
	];
	/** IAM actions required for the StartContactMediaProcessing API call. */
	static readonly StartContactMediaProcessing: string[] = [
		"connect:StartContactMediaProcessing",
	];
	/** IAM actions required for the StartContactRecording API call. */
	static readonly StartContactRecording: string[] = [
		"connect:StartContactRecording",
	];
	/** IAM actions required for the StartContactStreaming API call. */
	static readonly StartContactStreaming: string[] = [
		"connect:StartContactStreaming",
	];
	/** IAM actions required for the StartEmailContact API call. */
	static readonly StartEmailContact: string[] = ["connect:StartEmailContact"];
	/** IAM actions required for the StartEvaluationFormValidation API call. */
	static readonly StartEvaluationFormValidation: string[] = [
		"connect:StartEvaluationFormValidation",
	];
	/** IAM actions required for the StartOutboundChatContact API call. */
	static readonly StartOutboundChatContact: string[] = [
		"connect:StartOutboundChatContact",
	];
	/** IAM actions required for the StartOutboundEmailContact API call. */
	static readonly StartOutboundEmailContact: string[] = [
		"connect:StartOutboundEmailContact",
	];
	/** IAM actions required for the StartOutboundVoiceContact API call. */
	static readonly StartOutboundVoiceContact: string[] = [
		"connect:StartOutboundVoiceContact",
	];
	/** IAM actions required for the StartScreenSharing API call. */
	static readonly StartScreenSharing: string[] = ["connect:StartScreenSharing"];
	/** IAM actions required for the StartTaskContact API call. */
	static readonly StartTaskContact: string[] = ["connect:StartTaskContact"];
	/** IAM actions required for the StartTestCaseExecution API call. */
	static readonly StartTestCaseExecution: string[] = [];
	/** IAM actions required for the StartWebRTCContact API call. */
	static readonly StartWebRTCContact: string[] = ["connect:StartWebRTCContact"];
	/** IAM actions required for the StopContact API call. */
	static readonly StopContact: string[] = ["connect:StopContact"];
	/** IAM actions required for the StopContactMediaProcessing API call. */
	static readonly StopContactMediaProcessing: string[] = [
		"connect:StopContactMediaProcessing",
	];
	/** IAM actions required for the StopContactRecording API call. */
	static readonly StopContactRecording: string[] = [
		"connect:StopContactRecording",
	];
	/** IAM actions required for the StopContactStreaming API call. */
	static readonly StopContactStreaming: string[] = [
		"connect:StopContactStreaming",
	];
	/** IAM actions required for the StopTestCaseExecution API call. */
	static readonly StopTestCaseExecution: string[] = [];
	/** IAM actions required for the SubmitContactEvaluation API call. */
	static readonly SubmitContactEvaluation: string[] = [
		"connect:SubmitContactEvaluation",
	];
	/** IAM actions required for the SuspendContactRecording API call. */
	static readonly SuspendContactRecording: string[] = [
		"connect:SuspendContactRecording",
	];
	/** IAM actions required for the TagContact API call. */
	static readonly TagContact: string[] = ["connect:TagContact"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["connect:TagResource"];
	/** IAM actions required for the TransferContact API call. */
	static readonly TransferContact: string[] = ["connect:TransferContact"];
	/** IAM actions required for the UntagContact API call. */
	static readonly UntagContact: string[] = ["connect:UntagContact"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["connect:UntagResource"];
	/** IAM actions required for the UpdateAgentStatus API call. */
	static readonly UpdateAgentStatus: string[] = ["connect:UpdateAgentStatus"];
	/** IAM actions required for the UpdateAttachedFilesConfiguration API call. */
	static readonly UpdateAttachedFilesConfiguration: string[] = [
		"connect:UpdateAttachedFilesConfiguration",
	];
	/** IAM actions required for the UpdateAuthenticationProfile API call. */
	static readonly UpdateAuthenticationProfile: string[] = [
		"connect:UpdateAuthenticationProfile",
	];
	/** IAM actions required for the UpdateContact API call. */
	static readonly UpdateContact: string[] = ["connect:UpdateContact"];
	/** IAM actions required for the UpdateContactAttributes API call. */
	static readonly UpdateContactAttributes: string[] = [
		"connect:UpdateContactAttributes",
	];
	/** IAM actions required for the UpdateContactEvaluation API call. */
	static readonly UpdateContactEvaluation: string[] = [
		"connect:UpdateContactEvaluation",
	];
	/** IAM actions required for the UpdateContactFlowContent API call. */
	static readonly UpdateContactFlowContent: string[] = [
		"connect:UpdateContactFlowContent",
	];
	/** IAM actions required for the UpdateContactFlowMetadata API call. */
	static readonly UpdateContactFlowMetadata: string[] = [
		"connect:UpdateContactFlowMetadata",
	];
	/** IAM actions required for the UpdateContactFlowModuleAlias API call. */
	static readonly UpdateContactFlowModuleAlias: string[] = [
		"connect:UpdateContactFlowModuleAlias",
	];
	/** IAM actions required for the UpdateContactFlowModuleContent API call. */
	static readonly UpdateContactFlowModuleContent: string[] = [
		"connect:UpdateContactFlowModuleContent",
	];
	/** IAM actions required for the UpdateContactFlowModuleMetadata API call. */
	static readonly UpdateContactFlowModuleMetadata: string[] = [
		"connect:UpdateContactFlowModuleMetadata",
	];
	/** IAM actions required for the UpdateContactFlowName API call. */
	static readonly UpdateContactFlowName: string[] = [
		"connect:UpdateContactFlowName",
	];
	/** IAM actions required for the UpdateContactRoutingData API call. */
	static readonly UpdateContactRoutingData: string[] = [
		"connect:UpdateContactRoutingData",
	];
	/** IAM actions required for the UpdateContactSchedule API call. */
	static readonly UpdateContactSchedule: string[] = [
		"connect:UpdateContactSchedule",
	];
	/** IAM actions required for the UpdateContactTaskTemplate API call. */
	static readonly UpdateContactTaskTemplate: string[] = [];
	/** IAM actions required for the UpdateDataTableAttribute API call. */
	static readonly UpdateDataTableAttribute: string[] = [
		"connect:UpdateDataTableAttribute",
	];
	/** IAM actions required for the UpdateDataTableMetadata API call. */
	static readonly UpdateDataTableMetadata: string[] = [
		"connect:UpdateDataTableMetadata",
	];
	/** IAM actions required for the UpdateDataTablePrimaryValues API call. */
	static readonly UpdateDataTablePrimaryValues: string[] = [
		"connect:UpdateDataTablePrimaryValues",
	];
	/** IAM actions required for the UpdateEmailAddressMetadata API call. */
	static readonly UpdateEmailAddressMetadata: string[] = [
		"connect:UpdateEmailAddressMetadata",
	];
	/** IAM actions required for the UpdateEvaluationForm API call. */
	static readonly UpdateEvaluationForm: string[] = [
		"connect:UpdateEvaluationForm",
	];
	/** IAM actions required for the UpdateExtractionDefinition API call. */
	static readonly UpdateExtractionDefinition: string[] = [];
	/** IAM actions required for the UpdateHoursOfOperation API call. */
	static readonly UpdateHoursOfOperation: string[] = [
		"connect:UpdateHoursOfOperation",
	];
	/** IAM actions required for the UpdateHoursOfOperationOverride API call. */
	static readonly UpdateHoursOfOperationOverride: string[] = [
		"connect:UpdateHoursOfOperationOverride",
	];
	/** IAM actions required for the UpdateInstanceAttribute API call. */
	static readonly UpdateInstanceAttribute: string[] = [
		"connect:UpdateInstanceAttribute",
	];
	/** IAM actions required for the UpdateInstanceStorageConfig API call. */
	static readonly UpdateInstanceStorageConfig: string[] = [
		"connect:UpdateInstanceStorageConfig",
	];
	/** IAM actions required for the UpdateMetricContent API call. */
	static readonly UpdateMetricContent: string[] = [
		"connect:UpdateMetricContent",
	];
	/** IAM actions required for the UpdateMetricMetadata API call. */
	static readonly UpdateMetricMetadata: string[] = [
		"connect:UpdateMetricMetadata",
	];
	/** IAM actions required for the UpdateNotificationContent API call. */
	static readonly UpdateNotificationContent: string[] = [
		"connect:UpdateNotificationContent",
	];
	/** IAM actions required for the UpdateParticipantAuthentication API call. */
	static readonly UpdateParticipantAuthentication: string[] = [
		"connect:UpdateParticipantAuthentication",
	];
	/** IAM actions required for the UpdateParticipantRoleConfig API call. */
	static readonly UpdateParticipantRoleConfig: string[] = [
		"connect:UpdateParticipantRoleConfig",
	];
	/** IAM actions required for the UpdatePhoneNumber API call. */
	static readonly UpdatePhoneNumber: string[] = ["connect:UpdatePhoneNumber"];
	/** IAM actions required for the UpdatePhoneNumberMetadata API call. */
	static readonly UpdatePhoneNumberMetadata: string[] = [
		"connect:UpdatePhoneNumberMetadata",
	];
	/** IAM actions required for the UpdatePredefinedAttribute API call. */
	static readonly UpdatePredefinedAttribute: string[] = [
		"connect:UpdatePredefinedAttribute",
	];
	/** IAM actions required for the UpdatePrompt API call. */
	static readonly UpdatePrompt: string[] = ["connect:UpdatePrompt"];
	/** IAM actions required for the UpdateQueueHoursOfOperation API call. */
	static readonly UpdateQueueHoursOfOperation: string[] = [
		"connect:UpdateQueueHoursOfOperation",
	];
	/** IAM actions required for the UpdateQueueMaxContacts API call. */
	static readonly UpdateQueueMaxContacts: string[] = [
		"connect:UpdateQueueMaxContacts",
	];
	/** IAM actions required for the UpdateQueueName API call. */
	static readonly UpdateQueueName: string[] = ["connect:UpdateQueueName"];
	/** IAM actions required for the UpdateQueueOutboundCallerConfig API call. */
	static readonly UpdateQueueOutboundCallerConfig: string[] = [
		"connect:UpdateQueueOutboundCallerConfig",
	];
	/** IAM actions required for the UpdateQueueOutboundEmailConfig API call. */
	static readonly UpdateQueueOutboundEmailConfig: string[] = [
		"connect:UpdateQueueOutboundEmailConfig",
	];
	/** IAM actions required for the UpdateQueueStatus API call. */
	static readonly UpdateQueueStatus: string[] = ["connect:UpdateQueueStatus"];
	/** IAM actions required for the UpdateQuickConnectConfig API call. */
	static readonly UpdateQuickConnectConfig: string[] = [
		"connect:UpdateQuickConnectConfig",
	];
	/** IAM actions required for the UpdateQuickConnectName API call. */
	static readonly UpdateQuickConnectName: string[] = [
		"connect:UpdateQuickConnectName",
	];
	/** IAM actions required for the UpdateRoutingProfileAgentAvailabilityTimer API call. */
	static readonly UpdateRoutingProfileAgentAvailabilityTimer: string[] = [
		"connect:UpdateRoutingProfileAgentAvailabilityTimer",
	];
	/** IAM actions required for the UpdateRoutingProfileConcurrency API call. */
	static readonly UpdateRoutingProfileConcurrency: string[] = [
		"connect:UpdateRoutingProfileConcurrency",
	];
	/** IAM actions required for the UpdateRoutingProfileDefaultOutboundQueue API call. */
	static readonly UpdateRoutingProfileDefaultOutboundQueue: string[] = [
		"connect:UpdateRoutingProfileDefaultOutboundQueue",
	];
	/** IAM actions required for the UpdateRoutingProfileName API call. */
	static readonly UpdateRoutingProfileName: string[] = [
		"connect:UpdateRoutingProfileName",
	];
	/** IAM actions required for the UpdateRoutingProfileQueues API call. */
	static readonly UpdateRoutingProfileQueues: string[] = [
		"connect:UpdateRoutingProfileQueues",
	];
	/** IAM actions required for the UpdateRule API call. */
	static readonly UpdateRule: string[] = ["connect:UpdateRule"];
	/** IAM actions required for the UpdateSecurityProfile API call. */
	static readonly UpdateSecurityProfile: string[] = [
		"connect:UpdateSecurityProfile",
	];
	/** IAM actions required for the UpdateTaskTemplate API call. */
	static readonly UpdateTaskTemplate: string[] = ["connect:UpdateTaskTemplate"];
	/** IAM actions required for the UpdateTestCase API call. */
	static readonly UpdateTestCase: string[] = [];
	/** IAM actions required for the UpdateTrafficDistribution API call. */
	static readonly UpdateTrafficDistribution: string[] = [
		"connect:UpdateTrafficDistribution",
	];
	/** IAM actions required for the UpdateUserConfig API call. */
	static readonly UpdateUserConfig: string[] = [
		"connect:UpdateUserPhoneConfig",
	];
	/** IAM actions required for the UpdateUserHierarchy API call. */
	static readonly UpdateUserHierarchy: string[] = [
		"connect:UpdateUserHierarchy",
	];
	/** IAM actions required for the UpdateUserHierarchyGroupName API call. */
	static readonly UpdateUserHierarchyGroupName: string[] = [
		"connect:UpdateUserHierarchyGroupName",
	];
	/** IAM actions required for the UpdateUserHierarchyStructure API call. */
	static readonly UpdateUserHierarchyStructure: string[] = [
		"connect:UpdateUserHierarchyStructure",
	];
	/** IAM actions required for the UpdateUserIdentityInfo API call. */
	static readonly UpdateUserIdentityInfo: string[] = [
		"connect:UpdateUserIdentityInfo",
	];
	/** IAM actions required for the UpdateUserNotificationStatus API call. */
	static readonly UpdateUserNotificationStatus: string[] = [
		"connect:UpdateUserNotificationStatus",
	];
	/** IAM actions required for the UpdateUserPhoneConfig API call. */
	static readonly UpdateUserPhoneConfig: string[] = [
		"connect:UpdateUserPhoneConfig",
	];
	/** IAM actions required for the UpdateUserProficiencies API call. */
	static readonly UpdateUserProficiencies: string[] = [
		"connect:UpdateUserProficiencies",
	];
	/** IAM actions required for the UpdateUserRoutingProfile API call. */
	static readonly UpdateUserRoutingProfile: string[] = [
		"connect:UpdateUserRoutingProfile",
	];
	/** IAM actions required for the UpdateUserSecurityProfiles API call. */
	static readonly UpdateUserSecurityProfiles: string[] = [
		"connect:UpdateUserSecurityProfiles",
	];
	/** IAM actions required for the UpdateViewContent API call. */
	static readonly UpdateViewContent: string[] = ["connect:UpdateViewContent"];
	/** IAM actions required for the UpdateViewMetadata API call. */
	static readonly UpdateViewMetadata: string[] = ["connect:UpdateViewMetadata"];
	/** IAM actions required for the UpdateWorkspaceMetadata API call. */
	static readonly UpdateWorkspaceMetadata: string[] = [
		"connect:UpdateWorkspaceMetadata",
	];
	/** IAM actions required for the UpdateWorkspacePage API call. */
	static readonly UpdateWorkspacePage: string[] = [
		"connect:UpdateWorkspacePage",
	];
	/** IAM actions required for the UpdateWorkspaceTheme API call. */
	static readonly UpdateWorkspaceTheme: string[] = [
		"connect:UpdateWorkspaceTheme",
	];
	/** IAM actions required for the UpdateWorkspaceVisibility API call. */
	static readonly UpdateWorkspaceVisibility: string[] = [
		"connect:UpdateWorkspaceVisibility",
	];
}

/**
 * Condition key constants and builders for connect.
 */
export class ConnectConditions {
	/** Condition keys applicable to the ActivateEvaluationForm action. */
	static readonly ActivateEvaluationFormConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateAnalyticsDataSet action. */
	static readonly AssociateAnalyticsDataSetConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateApprovedOrigin action. */
	static readonly AssociateApprovedOriginConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateBot action. */
	static readonly AssociateBotConditionKeys: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the AssociateContactWithUser action. */
	static readonly AssociateContactWithUserConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PreferredUserArn",
	];
	/** Condition keys applicable to the AssociateDefaultVocabulary action. */
	static readonly AssociateDefaultVocabularyConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateEmailAddressAlias action. */
	static readonly AssociateEmailAddressAliasConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateFlow action. */
	static readonly AssociateFlowConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateInstanceStorageConfig action. */
	static readonly AssociateInstanceStorageConfigConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:StorageResourceType",
	];
	/** Condition keys applicable to the AssociateLambdaFunction action. */
	static readonly AssociateLambdaFunctionConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateLexBot action. */
	static readonly AssociateLexBotConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociatePhoneNumberContactFlow action. */
	static readonly AssociatePhoneNumberContactFlowConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateQueueEmailAddresses action. */
	static readonly AssociateQueueEmailAddressesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateQueueQuickConnects action. */
	static readonly AssociateQueueQuickConnectsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateRoutingProfileQueues action. */
	static readonly AssociateRoutingProfileQueuesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateSecurityKey action. */
	static readonly AssociateSecurityKeyConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateSecurityProfiles action. */
	static readonly AssociateSecurityProfilesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateTrafficDistributionGroupUser action. */
	static readonly AssociateTrafficDistributionGroupUserConditionKeys: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"connect:InstanceId",
			"connect:SearchTag/${TagKey}",
		];
	/** Condition keys applicable to the AssociateUserProficiencies action. */
	static readonly AssociateUserProficienciesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the AssociateWorkspace action. */
	static readonly AssociateWorkspaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the BatchAssociateAnalyticsDataSet action. */
	static readonly BatchAssociateAnalyticsDataSetConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the BatchCreateDataTableValue action. */
	static readonly BatchCreateDataTableValueConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:ExpressionValue",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the BatchDeleteDataTableValue action. */
	static readonly BatchDeleteDataTableValueConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the BatchDescribeDataTableValue action. */
	static readonly BatchDescribeDataTableValueConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the BatchDisassociateAnalyticsDataSet action. */
	static readonly BatchDisassociateAnalyticsDataSetConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the BatchGetAttachedFileMetadata action. */
	static readonly BatchGetAttachedFileMetadataConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the BatchGetFlowAssociation action. */
	static readonly BatchGetFlowAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the BatchPutContact action. */
	static readonly BatchPutContactConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the BatchUpdateDataTableValue action. */
	static readonly BatchUpdateDataTableValueConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:ExpressionValue",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the ClaimPhoneNumber action. */
	static readonly ClaimPhoneNumberConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CompleteAttachedFileUpload action. */
	static readonly CompleteAttachedFileUploadConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateAgentStatus action. */
	static readonly CreateAgentStatusConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateAttachedFile action. */
	static readonly CreateAttachedFileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateAuthenticationProfile action. */
	static readonly CreateAuthenticationProfileConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateContact action. */
	static readonly CreateContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:ContactInitiationMethod",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateContactFlow action. */
	static readonly CreateContactFlowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateContactFlowModule action. */
	static readonly CreateContactFlowModuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateContactFlowModuleAlias action. */
	static readonly CreateContactFlowModuleAliasConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateContactFlowModuleVersion action. */
	static readonly CreateContactFlowModuleVersionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateContactFlowVersion action. */
	static readonly CreateContactFlowVersionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateDataTable action. */
	static readonly CreateDataTableConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateDataTableAttribute action. */
	static readonly CreateDataTableAttributeConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateEmailAddress action. */
	static readonly CreateEmailAddressConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateEvaluationForm action. */
	static readonly CreateEvaluationFormConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateHoursOfOperation action. */
	static readonly CreateHoursOfOperationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateHoursOfOperationOverride action. */
	static readonly CreateHoursOfOperationOverrideConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateInstance action. */
	static readonly CreateInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIntegrationAssociation action. */
	static readonly CreateIntegrationAssociationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateMetric action. */
	static readonly CreateMetricConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateNotification action. */
	static readonly CreateNotificationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateParticipant action. */
	static readonly CreateParticipantConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreatePersistentContactAssociation action. */
	static readonly CreatePersistentContactAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreatePredefinedAttribute action. */
	static readonly CreatePredefinedAttributeConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreatePrompt action. */
	static readonly CreatePromptConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreatePushNotificationRegistration action. */
	static readonly CreatePushNotificationRegistrationConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateQueue action. */
	static readonly CreateQueueConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateQuickConnect action. */
	static readonly CreateQuickConnectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateRoutingProfile action. */
	static readonly CreateRoutingProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateRule action. */
	static readonly CreateRuleConditionKeys: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the CreateSecurityProfile action. */
	static readonly CreateSecurityProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateTrafficDistributionGroup action. */
	static readonly CreateTrafficDistributionGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateUseCase action. */
	static readonly CreateUseCaseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CreateUserConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateUserHierarchyGroup action. */
	static readonly CreateUserHierarchyGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateView action. */
	static readonly CreateViewConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateViewVersion action. */
	static readonly CreateViewVersionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateVocabulary action. */
	static readonly CreateVocabularyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateWorkspace action. */
	static readonly CreateWorkspaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the CreateWorkspacePage action. */
	static readonly CreateWorkspacePageConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeactivateEvaluationForm action. */
	static readonly DeactivateEvaluationFormConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteAttachedFile action. */
	static readonly DeleteAttachedFileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteContactEvaluation action. */
	static readonly DeleteContactEvaluationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteContactFlow action. */
	static readonly DeleteContactFlowConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteContactFlowModule action. */
	static readonly DeleteContactFlowModuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteContactFlowModuleAlias action. */
	static readonly DeleteContactFlowModuleAliasConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteContactFlowModuleVersion action. */
	static readonly DeleteContactFlowModuleVersionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteContactFlowVersion action. */
	static readonly DeleteContactFlowVersionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteDataTable action. */
	static readonly DeleteDataTableConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteDataTableAttribute action. */
	static readonly DeleteDataTableAttributeConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteEmailAddress action. */
	static readonly DeleteEmailAddressConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteEvaluationForm action. */
	static readonly DeleteEvaluationFormConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteHoursOfOperation action. */
	static readonly DeleteHoursOfOperationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteHoursOfOperationOverride action. */
	static readonly DeleteHoursOfOperationOverrideConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteInstance action. */
	static readonly DeleteInstanceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteIntegrationAssociation action. */
	static readonly DeleteIntegrationAssociationConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteMetric action. */
	static readonly DeleteMetricConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteNotification action. */
	static readonly DeleteNotificationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeletePredefinedAttribute action. */
	static readonly DeletePredefinedAttributeConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeletePrompt action. */
	static readonly DeletePromptConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeletePushNotificationRegistration action. */
	static readonly DeletePushNotificationRegistrationConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteQueue action. */
	static readonly DeleteQueueConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteQuickConnect action. */
	static readonly DeleteQuickConnectConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteRoutingProfile action. */
	static readonly DeleteRoutingProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteRule action. */
	static readonly DeleteRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteSecurityProfile action. */
	static readonly DeleteSecurityProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteTaskTemplate action. */
	static readonly DeleteTaskTemplateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteTrafficDistributionGroup action. */
	static readonly DeleteTrafficDistributionGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteUseCase action. */
	static readonly DeleteUseCaseConditionKeys: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the DeleteUser action. */
	static readonly DeleteUserConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteUserHierarchyGroup action. */
	static readonly DeleteUserHierarchyGroupConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteView action. */
	static readonly DeleteViewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteViewVersion action. */
	static readonly DeleteViewVersionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteVocabulary action. */
	static readonly DeleteVocabularyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteWorkspace action. */
	static readonly DeleteWorkspaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteWorkspaceMedia action. */
	static readonly DeleteWorkspaceMediaConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DeleteWorkspacePage action. */
	static readonly DeleteWorkspacePageConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeAgentStatus action. */
	static readonly DescribeAgentStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeAttachedFilesConfiguration action. */
	static readonly DescribeAttachedFilesConfigurationConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeAuthenticationProfile action. */
	static readonly DescribeAuthenticationProfileConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeContact action. */
	static readonly DescribeContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the DescribeContactEvaluation action. */
	static readonly DescribeContactEvaluationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeContactFlow action. */
	static readonly DescribeContactFlowConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeContactFlowModule action. */
	static readonly DescribeContactFlowModuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeContactFlowModuleAlias action. */
	static readonly DescribeContactFlowModuleAliasConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeDataTable action. */
	static readonly DescribeDataTableConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeDataTableAttribute action. */
	static readonly DescribeDataTableAttributeConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeEmailAddress action. */
	static readonly DescribeEmailAddressConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeEvaluationForm action. */
	static readonly DescribeEvaluationFormConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeForecastingPlanningSchedulingIntegration action. */
	static readonly DescribeForecastingPlanningSchedulingIntegrationConditionKeys: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the DescribeHoursOfOperation action. */
	static readonly DescribeHoursOfOperationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeHoursOfOperationOverride action. */
	static readonly DescribeHoursOfOperationOverrideConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeInstance action. */
	static readonly DescribeInstanceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeInstanceAttribute action. */
	static readonly DescribeInstanceAttributeConditionKeys: string[] = [
		"connect:AttributeType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeInstanceStorageConfig action. */
	static readonly DescribeInstanceStorageConfigConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:StorageResourceType",
	];
	/** Condition keys applicable to the DescribeMetric action. */
	static readonly DescribeMetricConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeNotification action. */
	static readonly DescribeNotificationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribePhoneNumber action. */
	static readonly DescribePhoneNumberConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribePredefinedAttribute action. */
	static readonly DescribePredefinedAttributeConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribePrompt action. */
	static readonly DescribePromptConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeQueue action. */
	static readonly DescribeQueueConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeQuickConnect action. */
	static readonly DescribeQuickConnectConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeRoutingProfile action. */
	static readonly DescribeRoutingProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeRule action. */
	static readonly DescribeRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeSecurityProfile action. */
	static readonly DescribeSecurityProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeTrafficDistributionGroup action. */
	static readonly DescribeTrafficDistributionGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeUser action. */
	static readonly DescribeUserConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeUserHierarchyGroup action. */
	static readonly DescribeUserHierarchyGroupConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeUserHierarchyStructure action. */
	static readonly DescribeUserHierarchyStructureConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeView action. */
	static readonly DescribeViewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeVocabulary action. */
	static readonly DescribeVocabularyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DescribeWorkspace action. */
	static readonly DescribeWorkspaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateAnalyticsDataSet action. */
	static readonly DisassociateAnalyticsDataSetConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateApprovedOrigin action. */
	static readonly DisassociateApprovedOriginConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateBot action. */
	static readonly DisassociateBotConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateEmailAddressAlias action. */
	static readonly DisassociateEmailAddressAliasConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateFlow action. */
	static readonly DisassociateFlowConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateInstanceStorageConfig action. */
	static readonly DisassociateInstanceStorageConfigConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:StorageResourceType",
	];
	/** Condition keys applicable to the DisassociateLambdaFunction action. */
	static readonly DisassociateLambdaFunctionConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateLexBot action. */
	static readonly DisassociateLexBotConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociatePhoneNumberContactFlow action. */
	static readonly DisassociatePhoneNumberContactFlowConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateQueueEmailAddresses action. */
	static readonly DisassociateQueueEmailAddressesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateQueueQuickConnects action. */
	static readonly DisassociateQueueQuickConnectsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateRoutingProfileQueues action. */
	static readonly DisassociateRoutingProfileQueuesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateSecurityKey action. */
	static readonly DisassociateSecurityKeyConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateSecurityProfiles action. */
	static readonly DisassociateSecurityProfilesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateTrafficDistributionGroupUser action. */
	static readonly DisassociateTrafficDistributionGroupUserConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the DisassociateUserProficiencies action. */
	static readonly DisassociateUserProficienciesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DisassociateWorkspace action. */
	static readonly DisassociateWorkspaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the DismissUserContact action. */
	static readonly DismissUserContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the EvaluateDataTableValues action. */
	static readonly EvaluateDataTableValuesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the GetAttachedFile action. */
	static readonly actionGetAttachedFileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetContactAttributes action. */
	static readonly actionGetContactAttributesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the GetContactMetrics action. */
	static readonly actionGetContactMetricsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetCurrentMetricData action. */
	static readonly actionGetCurrentMetricDataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetCurrentUserData action. */
	static readonly actionGetCurrentUserDataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetEffectiveHoursOfOperations action. */
	static readonly actionGetEffectiveHoursOfOperationsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetEvaluationFormValidation action. */
	static readonly actionGetEvaluationFormValidationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetFederationToken action. */
	static readonly actionGetFederationTokenConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetFlowAssociation action. */
	static readonly actionGetFlowAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetMetricData action. */
	static readonly actionGetMetricDataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetMetricDataV2 action. */
	static readonly actionGetMetricDataV2ConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetPromptFile action. */
	static readonly actionGetPromptFileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetTaskTemplate action. */
	static readonly actionGetTaskTemplateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the GetTrafficDistribution action. */
	static readonly actionGetTrafficDistributionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ImportPhoneNumber action. */
	static readonly ImportPhoneNumberConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportWorkspaceMedia action. */
	static readonly ImportWorkspaceMediaConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListAnalyticsDataAssociations action. */
	static readonly ListAnalyticsDataAssociationsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListAnalyticsDataLakeDataSets action. */
	static readonly ListAnalyticsDataLakeDataSetsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListApprovedOrigins action. */
	static readonly ListApprovedOriginsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListAssociatedContacts action. */
	static readonly ListAssociatedContactsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListAttachedFilesConfigurations action. */
	static readonly ListAttachedFilesConfigurationsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListAuthenticationProfiles action. */
	static readonly ListAuthenticationProfilesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListBots action. */
	static readonly ListBotsConditionKeys: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the ListContactEvaluations action. */
	static readonly ListContactEvaluationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListContactFlowModuleAliases action. */
	static readonly ListContactFlowModuleAliasesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListContactFlowModuleVersions action. */
	static readonly ListContactFlowModuleVersionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListContactFlowVersions action. */
	static readonly ListContactFlowVersionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListContactFlows action. */
	static readonly ListContactFlowsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListContactReferences action. */
	static readonly ListContactReferencesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the ListDataTableAttributes action. */
	static readonly ListDataTableAttributesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListDataTablePrimaryValues action. */
	static readonly ListDataTablePrimaryValuesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the ListDataTableValues action. */
	static readonly ListDataTableValuesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the ListDataTables action. */
	static readonly ListDataTablesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListDefaultVocabularies action. */
	static readonly ListDefaultVocabulariesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListEntitySecurityProfiles action. */
	static readonly ListEntitySecurityProfilesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListEvaluationFormVersions action. */
	static readonly ListEvaluationFormVersionsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListEvaluationForms action. */
	static readonly ListEvaluationFormsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListFlowAssociations action. */
	static readonly ListFlowAssociationsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListHoursOfOperationOverrides action. */
	static readonly ListHoursOfOperationOverridesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListHoursOfOperations action. */
	static readonly ListHoursOfOperationsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListInstanceAttributes action. */
	static readonly ListInstanceAttributesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListInstanceStorageConfigs action. */
	static readonly ListInstanceStorageConfigsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListIntegrationAssociations action. */
	static readonly ListIntegrationAssociationsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListLambdaFunctions action. */
	static readonly ListLambdaFunctionsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListLexBots action. */
	static readonly ListLexBotsConditionKeys: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the ListMetrics action. */
	static readonly ListMetricsConditionKeys: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the ListNotifications action. */
	static readonly ListNotificationsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListPredefinedAttributes action. */
	static readonly ListPredefinedAttributesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListPrompts action. */
	static readonly ListPromptsConditionKeys: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the ListQueueEmailAddresses action. */
	static readonly ListQueueEmailAddressesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListQueueQuickConnects action. */
	static readonly ListQueueQuickConnectsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListRealtimeContactAnalysisSegments action. */
	static readonly ListRealtimeContactAnalysisSegmentsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListRealtimeContactAnalysisSegmentsV2 action. */
	static readonly ListRealtimeContactAnalysisSegmentsV2ConditionKeys: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"connect:ListRealtimeContactAnalysisSegmentsByOutputType",
			"connect:ListRealtimeContactAnalysisSegmentsBySegmentType",
		];
	/** Condition keys applicable to the ListRoutingProfileManualAssignmentQueues action. */
	static readonly ListRoutingProfileManualAssignmentQueuesConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the ListRoutingProfileQueues action. */
	static readonly ListRoutingProfileQueuesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListRoutingProfiles action. */
	static readonly ListRoutingProfilesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListRules action. */
	static readonly ListRulesConditionKeys: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the ListSecurityKeys action. */
	static readonly ListSecurityKeysConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListSecurityProfileApplications action. */
	static readonly ListSecurityProfileApplicationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListSecurityProfileFlowModules action. */
	static readonly ListSecurityProfileFlowModulesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListSecurityProfilePermissions action. */
	static readonly ListSecurityProfilePermissionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListSecurityProfiles action. */
	static readonly ListSecurityProfilesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTrafficDistributionGroupUsers action. */
	static readonly ListTrafficDistributionGroupUsersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListUseCases action. */
	static readonly ListUseCasesConditionKeys: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the ListUserHierarchyGroups action. */
	static readonly ListUserHierarchyGroupsConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListUserNotifications action. */
	static readonly ListUserNotificationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListUserProficiencies action. */
	static readonly ListUserProficienciesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListUsers action. */
	static readonly ListUsersConditionKeys: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the ListViewVersions action. */
	static readonly ListViewVersionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListViews action. */
	static readonly ListViewsConditionKeys: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the ListWorkspaceMedia action. */
	static readonly ListWorkspaceMediaConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListWorkspacePages action. */
	static readonly ListWorkspacePagesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ListWorkspaces action. */
	static readonly ListWorkspacesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the MonitorContact action. */
	static readonly MonitorContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:MonitorCapabilities",
	];
	/** Condition keys applicable to the PauseContact action. */
	static readonly PauseContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the PutUserStatus action. */
	static readonly PutUserStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ReleasePhoneNumber action. */
	static readonly ReleasePhoneNumberConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ReplicateInstance action. */
	static readonly ReplicateInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ResumeContact action. */
	static readonly ResumeContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the ResumeContactRecording action. */
	static readonly ResumeContactRecordingConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the SearchAgentStatuses action. */
	static readonly SearchAgentStatusesConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchContactEvaluations action. */
	static readonly SearchContactEvaluationsConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchContactFlowModules action. */
	static readonly SearchContactFlowModulesConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchContactFlows action. */
	static readonly SearchContactFlowsConditionKeys: string[] = [
		"connect:FlowType",
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchContacts action. */
	static readonly SearchContactsConditionKeys: string[] = [
		"connect:Channel",
		"connect:InstanceId",
		"connect:PreferredUserArn",
		"connect:SearchContactsByContactAnalysis",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchDataTables action. */
	static readonly SearchDataTablesConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchEmailAddresses action. */
	static readonly SearchEmailAddressesConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchEvaluationForms action. */
	static readonly SearchEvaluationFormsConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchHoursOfOperationOverrides action. */
	static readonly SearchHoursOfOperationOverridesConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchHoursOfOperations action. */
	static readonly SearchHoursOfOperationsConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchMetrics action. */
	static readonly SearchMetricsConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchNotifications action. */
	static readonly SearchNotificationsConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchPredefinedAttributes action. */
	static readonly SearchPredefinedAttributesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the SearchPrompts action. */
	static readonly SearchPromptsConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchQueues action. */
	static readonly SearchQueuesConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchQuickConnects action. */
	static readonly SearchQuickConnectsConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchResourceTags action. */
	static readonly SearchResourceTagsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the SearchRoutingProfiles action. */
	static readonly SearchRoutingProfilesConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchRules action. */
	static readonly SearchRulesConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchSecurityProfiles action. */
	static readonly SearchSecurityProfilesConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchUserHierarchyGroups action. */
	static readonly SearchUserHierarchyGroupsConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchUsers action. */
	static readonly SearchUsersConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchViews action. */
	static readonly SearchViewsConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SearchVocabularies action. */
	static readonly SearchVocabulariesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the SearchWorkspaceAssociations action. */
	static readonly SearchWorkspaceAssociationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the SearchWorkspaces action. */
	static readonly SearchWorkspacesConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:SearchTag/${TagKey}",
	];
	/** Condition keys applicable to the SendOutboundChatMessage action. */
	static readonly SendOutboundChatMessageConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:Subtype",
	];
	/** Condition keys applicable to the SendOutboundEmail action. */
	static readonly SendOutboundEmailConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the SendOutboundWebNotification action. */
	static readonly SendOutboundWebNotificationConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartAttachedFileUpload action. */
	static readonly StartAttachedFileUploadConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the StartChatContact action. */
	static readonly StartChatContactConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartContactConversationalAnalyticsJob action. */
	static readonly StartContactConversationalAnalyticsJobConditionKeys: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:ResourceTag/${TagKey}",
			"aws:TagKeys",
			"connect:InstanceId",
		];
	/** Condition keys applicable to the StartContactEvaluation action. */
	static readonly StartContactEvaluationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartContactMediaProcessing action. */
	static readonly StartContactMediaProcessingConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartContactRecording action. */
	static readonly StartContactRecordingConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the StartContactStreaming action. */
	static readonly StartContactStreamingConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartEmailContact action. */
	static readonly StartEmailContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartEvaluationFormValidation action. */
	static readonly StartEvaluationFormValidationConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartForecastingPlanningSchedulingIntegration action. */
	static readonly StartForecastingPlanningSchedulingIntegrationConditionKeys: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the StartOutboundChatContact action. */
	static readonly StartOutboundChatContactConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:Subtype",
	];
	/** Condition keys applicable to the StartOutboundEmailContact action. */
	static readonly StartOutboundEmailContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartScreenSharing action. */
	static readonly StartScreenSharingConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the StartTaskContact action. */
	static readonly StartTaskContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:AssignmentType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StartWebRTCContact action. */
	static readonly StartWebRTCContactConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StopContact action. */
	static readonly StopContactConditionKeys: string[] = [
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the StopContactMediaProcessing action. */
	static readonly StopContactMediaProcessingConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the StopContactRecording action. */
	static readonly StopContactRecordingConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the StopContactStreaming action. */
	static readonly StopContactStreamingConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopForecastingPlanningSchedulingIntegration action. */
	static readonly StopForecastingPlanningSchedulingIntegrationConditionKeys: string[] =
		["connect:InstanceId"];
	/** Condition keys applicable to the SubmitContactEvaluation action. */
	static readonly SubmitContactEvaluationConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the SuspendContactRecording action. */
	static readonly SuspendContactRecordingConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the TagContact action. */
	static readonly TagContactConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TransferContact action. */
	static readonly TransferContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the UntagContact action. */
	static readonly UntagContactConditionKeys: string[] = [
		"aws:TagKeys",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAgentStatus action. */
	static readonly UpdateAgentStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateAttachedFilesConfiguration action. */
	static readonly UpdateAttachedFilesConfigurationConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateAuthenticationProfile action. */
	static readonly UpdateAuthenticationProfileConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContact action. */
	static readonly UpdateContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the UpdateContactAttributes action. */
	static readonly UpdateContactAttributesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the UpdateContactEvaluation action. */
	static readonly UpdateContactEvaluationConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContactFlowContent action. */
	static readonly UpdateContactFlowContentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContactFlowMetadata action. */
	static readonly UpdateContactFlowMetadataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContactFlowModuleAlias action. */
	static readonly UpdateContactFlowModuleAliasConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContactFlowModuleContent action. */
	static readonly UpdateContactFlowModuleContentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContactFlowModuleMetadata action. */
	static readonly UpdateContactFlowModuleMetadataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContactFlowName action. */
	static readonly UpdateContactFlowNameConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:FlowType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateContactRoutingData action. */
	static readonly UpdateContactRoutingDataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the UpdateContactSchedule action. */
	static readonly UpdateContactScheduleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:Channel",
		"connect:ContactAssociationId",
		"connect:InstanceId",
		"connect:UserArn",
	];
	/** Condition keys applicable to the UpdateDataTableAttribute action. */
	static readonly UpdateDataTableAttributeConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateDataTableMetadata action. */
	static readonly UpdateDataTableMetadataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateDataTablePrimaryValues action. */
	static readonly UpdateDataTablePrimaryValuesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
		"connect:PrimaryAttribute/${PrimaryAttribute}",
	];
	/** Condition keys applicable to the UpdateEmailAddressMetadata action. */
	static readonly UpdateEmailAddressMetadataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateEvaluationForm action. */
	static readonly UpdateEvaluationFormConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateHoursOfOperation action. */
	static readonly UpdateHoursOfOperationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateHoursOfOperationOverride action. */
	static readonly UpdateHoursOfOperationOverrideConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateInstanceAttribute action. */
	static readonly UpdateInstanceAttributeConditionKeys: string[] = [
		"connect:AttributeType",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateInstanceStorageConfig action. */
	static readonly UpdateInstanceStorageConfigConditionKeys: string[] = [
		"connect:InstanceId",
		"connect:StorageResourceType",
	];
	/** Condition keys applicable to the UpdateMetricContent action. */
	static readonly UpdateMetricContentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateMetricMetadata action. */
	static readonly UpdateMetricMetadataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateNotificationContent action. */
	static readonly UpdateNotificationContentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateParticipantAuthentication action. */
	static readonly UpdateParticipantAuthenticationConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateParticipantRoleConfig action. */
	static readonly UpdateParticipantRoleConfigConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdatePhoneNumber action. */
	static readonly UpdatePhoneNumberConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdatePhoneNumberMetadata action. */
	static readonly UpdatePhoneNumberMetadataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdatePredefinedAttribute action. */
	static readonly UpdatePredefinedAttributeConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdatePrompt action. */
	static readonly UpdatePromptConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQueueHoursOfOperation action. */
	static readonly UpdateQueueHoursOfOperationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQueueMaxContacts action. */
	static readonly UpdateQueueMaxContactsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQueueName action. */
	static readonly UpdateQueueNameConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQueueOutboundCallerConfig action. */
	static readonly UpdateQueueOutboundCallerConfigConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQueueOutboundEmailConfig action. */
	static readonly UpdateQueueOutboundEmailConfigConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQueueStatus action. */
	static readonly UpdateQueueStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQuickConnectConfig action. */
	static readonly UpdateQuickConnectConfigConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateQuickConnectName action. */
	static readonly UpdateQuickConnectNameConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateRoutingProfileAgentAvailabilityTimer action. */
	static readonly UpdateRoutingProfileAgentAvailabilityTimerConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the UpdateRoutingProfileConcurrency action. */
	static readonly UpdateRoutingProfileConcurrencyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateRoutingProfileDefaultOutboundQueue action. */
	static readonly UpdateRoutingProfileDefaultOutboundQueueConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "connect:InstanceId"];
	/** Condition keys applicable to the UpdateRoutingProfileName action. */
	static readonly UpdateRoutingProfileNameConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateRoutingProfileQueues action. */
	static readonly UpdateRoutingProfileQueuesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateRule action. */
	static readonly UpdateRuleConditionKeys: string[] = ["connect:InstanceId"];
	/** Condition keys applicable to the UpdateSecurityProfile action. */
	static readonly UpdateSecurityProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateTaskTemplate action. */
	static readonly UpdateTaskTemplateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateTrafficDistribution action. */
	static readonly UpdateTrafficDistributionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateUserHierarchy action. */
	static readonly UpdateUserHierarchyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserHierarchyGroupName action. */
	static readonly UpdateUserHierarchyGroupNameConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserHierarchyStructure action. */
	static readonly UpdateUserHierarchyStructureConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserIdentityInfo action. */
	static readonly UpdateUserIdentityInfoConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserNotificationStatus action. */
	static readonly UpdateUserNotificationStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserPhoneConfig action. */
	static readonly UpdateUserPhoneConfigConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserProficiencies action. */
	static readonly UpdateUserProficienciesConditionKeys: string[] = [
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserRoutingProfile action. */
	static readonly UpdateUserRoutingProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateUserSecurityProfiles action. */
	static readonly UpdateUserSecurityProfilesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateViewContent action. */
	static readonly UpdateViewContentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateViewMetadata action. */
	static readonly UpdateViewMetadataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateWorkspaceMetadata action. */
	static readonly UpdateWorkspaceMetadataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateWorkspacePage action. */
	static readonly UpdateWorkspacePageConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateWorkspaceTheme action. */
	static readonly UpdateWorkspaceThemeConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];
	/** Condition keys applicable to the UpdateWorkspaceVisibility action. */
	static readonly UpdateWorkspaceVisibilityConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"connect:InstanceId",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
