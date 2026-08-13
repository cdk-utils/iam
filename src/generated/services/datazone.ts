// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/datazone.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the datazone service.
 */
export class DatazoneActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "datazone";

	/** [Write] datazone:AcceptPredictions */
	static readonly ACCEPT_PREDICTIONS = "datazone:AcceptPredictions";
	/** [Write] datazone:AcceptSubscriptionRequest */
	static readonly ACCEPT_SUBSCRIPTION_REQUEST =
		"datazone:AcceptSubscriptionRequest";
	/** [Write] datazone:AddEntityOwner */
	static readonly ADD_ENTITY_OWNER = "datazone:AddEntityOwner";
	/** [PermissionManagement] datazone:AddPolicyGrant */
	static readonly ADD_POLICY_GRANT = "datazone:AddPolicyGrant";
	/** [Write] datazone:AssociateEnvironmentRole */
	static readonly ASSOCIATE_ENVIRONMENT_ROLE =
		"datazone:AssociateEnvironmentRole";
	/** [Write] datazone:AssociateGovernedTerms */
	static readonly ASSOCIATE_GOVERNED_TERMS = "datazone:AssociateGovernedTerms";
	/** [Write] datazone:BatchDeleteLinkedTypes */
	static readonly BATCH_DELETE_LINKED_TYPES = "datazone:BatchDeleteLinkedTypes";
	/** [Read] datazone:BatchGetAttributesMetadata */
	static readonly BATCH_GET_ATTRIBUTES_METADATA =
		"datazone:BatchGetAttributesMetadata";
	/** [Read] datazone:BatchGetCell */
	static readonly BATCH_GET_CELL = "datazone:BatchGetCell";
	/** [Read] datazone:BatchGetCellRun */
	static readonly BATCH_GET_CELL_RUN = "datazone:BatchGetCellRun";
	/** [Write] datazone:BatchPutAttributesMetadata */
	static readonly BATCH_PUT_ATTRIBUTES_METADATA =
		"datazone:BatchPutAttributesMetadata";
	/** [Write] datazone:BatchPutLinkedTypes */
	static readonly BATCH_PUT_LINKED_TYPES = "datazone:BatchPutLinkedTypes";
	/** [Write] datazone:BatchUpdateNotifications */
	static readonly BATCH_UPDATE_NOTIFICATIONS =
		"datazone:BatchUpdateNotifications";
	/** [Write] datazone:CancelMessage */
	static readonly CANCEL_MESSAGE = "datazone:CancelMessage";
	/** [Write] datazone:CancelMetadataGenerationRun */
	static readonly CANCEL_METADATA_GENERATION_RUN =
		"datazone:CancelMetadataGenerationRun";
	/** [Write] datazone:CancelSubscription */
	static readonly CANCEL_SUBSCRIPTION = "datazone:CancelSubscription";
	/** [Write] datazone:CreateAccountPool */
	static readonly CREATE_ACCOUNT_POOL = "datazone:CreateAccountPool";
	/** [Write] datazone:CreateAsset */
	static readonly CREATE_ASSET = "datazone:CreateAsset";
	/** [Write] datazone:CreateAssetFilter */
	static readonly CREATE_ASSET_FILTER = "datazone:CreateAssetFilter";
	/** [Write] datazone:CreateAssetRevision */
	static readonly CREATE_ASSET_REVISION = "datazone:CreateAssetRevision";
	/** [Write] datazone:CreateAssetType */
	static readonly CREATE_ASSET_TYPE = "datazone:CreateAssetType";
	/** [Write] datazone:CreateCell */
	static readonly CREATE_CELL = "datazone:CreateCell";
	/** [Write] datazone:CreateCellRun */
	static readonly CREATE_CELL_RUN = "datazone:CreateCellRun";
	/** [Write] datazone:CreateConnection */
	static readonly CREATE_CONNECTION = "datazone:CreateConnection";
	/** [Write] datazone:CreateDataProduct */
	static readonly CREATE_DATA_PRODUCT = "datazone:CreateDataProduct";
	/** [Write] datazone:CreateDataProductRevision */
	static readonly CREATE_DATA_PRODUCT_REVISION =
		"datazone:CreateDataProductRevision";
	/** [Write] datazone:CreateDataSource */
	static readonly CREATE_DATA_SOURCE = "datazone:CreateDataSource";
	/** [Write] datazone:CreateDesignation */
	static readonly CREATE_DESIGNATION = "datazone:CreateDesignation";
	/** [Write] datazone:CreateDomain */
	static readonly CREATE_DOMAIN = "datazone:CreateDomain";
	/** [Write] datazone:CreateDomainUnit */
	static readonly CREATE_DOMAIN_UNIT = "datazone:CreateDomainUnit";
	/** [Write] datazone:CreateEnvironment */
	static readonly CREATE_ENVIRONMENT = "datazone:CreateEnvironment";
	/** [Write] datazone:CreateEnvironmentAction */
	static readonly CREATE_ENVIRONMENT_ACTION =
		"datazone:CreateEnvironmentAction";
	/** [Write] datazone:CreateEnvironmentBlueprint */
	static readonly CREATE_ENVIRONMENT_BLUEPRINT =
		"datazone:CreateEnvironmentBlueprint";
	/** [Write] datazone:CreateEnvironmentProfile */
	static readonly CREATE_ENVIRONMENT_PROFILE =
		"datazone:CreateEnvironmentProfile";
	/** [Write] datazone:CreateFormType */
	static readonly CREATE_FORM_TYPE = "datazone:CreateFormType";
	/** [Write] datazone:CreateGlossary */
	static readonly CREATE_GLOSSARY = "datazone:CreateGlossary";
	/** [Write] datazone:CreateGlossaryTerm */
	static readonly CREATE_GLOSSARY_TERM = "datazone:CreateGlossaryTerm";
	/** [Write] datazone:CreateGroupProfile */
	static readonly CREATE_GROUP_PROFILE = "datazone:CreateGroupProfile";
	/** [Write] datazone:CreateListingChangeSet */
	static readonly CREATE_LISTING_CHANGE_SET = "datazone:CreateListingChangeSet";
	/** [Write] datazone:CreateNotebook */
	static readonly CREATE_NOTEBOOK = "datazone:CreateNotebook";
	/** [Write] datazone:CreateProject */
	static readonly CREATE_PROJECT = "datazone:CreateProject";
	/** [Write] datazone:CreateProjectMembership */
	static readonly CREATE_PROJECT_MEMBERSHIP =
		"datazone:CreateProjectMembership";
	/** [Write] datazone:CreateProjectProfile */
	static readonly CREATE_PROJECT_PROFILE = "datazone:CreateProjectProfile";
	/** [Write] datazone:CreateRule */
	static readonly CREATE_RULE = "datazone:CreateRule";
	/** [Write] datazone:CreateSubscriptionGrant */
	static readonly CREATE_SUBSCRIPTION_GRANT =
		"datazone:CreateSubscriptionGrant";
	/** [Write] datazone:CreateSubscriptionRequest */
	static readonly CREATE_SUBSCRIPTION_REQUEST =
		"datazone:CreateSubscriptionRequest";
	/** [Write] datazone:CreateSubscriptionTarget */
	static readonly CREATE_SUBSCRIPTION_TARGET =
		"datazone:CreateSubscriptionTarget";
	/** [Write] datazone:CreateUserProfile */
	static readonly CREATE_USER_PROFILE = "datazone:CreateUserProfile";
	/** [Write] datazone:DeleteAccountPool */
	static readonly DELETE_ACCOUNT_POOL = "datazone:DeleteAccountPool";
	/** [Write] datazone:DeleteAsset */
	static readonly DELETE_ASSET = "datazone:DeleteAsset";
	/** [Write] datazone:DeleteAssetFilter */
	static readonly DELETE_ASSET_FILTER = "datazone:DeleteAssetFilter";
	/** [Write] datazone:DeleteAssetType */
	static readonly DELETE_ASSET_TYPE = "datazone:DeleteAssetType";
	/** [Write] datazone:DeleteCell */
	static readonly DELETE_CELL = "datazone:DeleteCell";
	/** [Write] datazone:DeleteCellRun */
	static readonly DELETE_CELL_RUN = "datazone:DeleteCellRun";
	/** [Write] datazone:DeleteConnection */
	static readonly DELETE_CONNECTION = "datazone:DeleteConnection";
	/** [Write] datazone:DeleteDataExportConfiguration */
	static readonly DELETE_DATA_EXPORT_CONFIGURATION =
		"datazone:DeleteDataExportConfiguration";
	/** [Write] datazone:DeleteDataProduct */
	static readonly DELETE_DATA_PRODUCT = "datazone:DeleteDataProduct";
	/** [Write] datazone:DeleteDataSource */
	static readonly DELETE_DATA_SOURCE = "datazone:DeleteDataSource";
	/** [Write] datazone:DeleteDesignation */
	static readonly DELETE_DESIGNATION = "datazone:DeleteDesignation";
	/** [Write] datazone:DeleteDomain */
	static readonly DELETE_DOMAIN = "datazone:DeleteDomain";
	/** [PermissionManagement] datazone:DeleteDomainSharingPolicy */
	static readonly DELETE_DOMAIN_SHARING_POLICY =
		"datazone:DeleteDomainSharingPolicy";
	/** [Write] datazone:DeleteDomainUnit */
	static readonly DELETE_DOMAIN_UNIT = "datazone:DeleteDomainUnit";
	/** [Write] datazone:DeleteEnvironment */
	static readonly DELETE_ENVIRONMENT = "datazone:DeleteEnvironment";
	/** [Write] datazone:DeleteEnvironmentAction */
	static readonly DELETE_ENVIRONMENT_ACTION =
		"datazone:DeleteEnvironmentAction";
	/** [Write] datazone:DeleteEnvironmentBlueprint */
	static readonly DELETE_ENVIRONMENT_BLUEPRINT =
		"datazone:DeleteEnvironmentBlueprint";
	/** [Write] datazone:DeleteEnvironmentBlueprintConfiguration */
	static readonly DELETE_ENVIRONMENT_BLUEPRINT_CONFIGURATION =
		"datazone:DeleteEnvironmentBlueprintConfiguration";
	/** [Write] datazone:DeleteEnvironmentProfile */
	static readonly DELETE_ENVIRONMENT_PROFILE =
		"datazone:DeleteEnvironmentProfile";
	/** [Write] datazone:DeleteFormType */
	static readonly DELETE_FORM_TYPE = "datazone:DeleteFormType";
	/** [Write] datazone:DeleteGlossary */
	static readonly DELETE_GLOSSARY = "datazone:DeleteGlossary";
	/** [Write] datazone:DeleteGlossaryTerm */
	static readonly DELETE_GLOSSARY_TERM = "datazone:DeleteGlossaryTerm";
	/** [Write] datazone:DeleteLineageEvent */
	static readonly DELETE_LINEAGE_EVENT = "datazone:DeleteLineageEvent";
	/** [Write] datazone:DeleteListing */
	static readonly DELETE_LISTING = "datazone:DeleteListing";
	/** [Write] datazone:DeleteNotebook */
	static readonly DELETE_NOTEBOOK = "datazone:DeleteNotebook";
	/** [Write] datazone:DeleteProject */
	static readonly DELETE_PROJECT = "datazone:DeleteProject";
	/** [Write] datazone:DeleteProjectMembership */
	static readonly DELETE_PROJECT_MEMBERSHIP =
		"datazone:DeleteProjectMembership";
	/** [Write] datazone:DeleteProjectProfile */
	static readonly DELETE_PROJECT_PROFILE = "datazone:DeleteProjectProfile";
	/** [Write] datazone:DeleteRule */
	static readonly DELETE_RULE = "datazone:DeleteRule";
	/** [Write] datazone:DeleteSubscriptionGrant */
	static readonly DELETE_SUBSCRIPTION_GRANT =
		"datazone:DeleteSubscriptionGrant";
	/** [Write] datazone:DeleteSubscriptionRequest */
	static readonly DELETE_SUBSCRIPTION_REQUEST =
		"datazone:DeleteSubscriptionRequest";
	/** [Write] datazone:DeleteSubscriptionTarget */
	static readonly DELETE_SUBSCRIPTION_TARGET =
		"datazone:DeleteSubscriptionTarget";
	/** [Write] datazone:DeleteTimeSeriesDataPoints */
	static readonly DELETE_TIME_SERIES_DATA_POINTS =
		"datazone:DeleteTimeSeriesDataPoints";
	/** [Write] datazone:DisassociateEnvironmentRole */
	static readonly DISASSOCIATE_ENVIRONMENT_ROLE =
		"datazone:DisassociateEnvironmentRole";
	/** [Write] datazone:DisassociateGovernedTerms */
	static readonly DISASSOCIATE_GOVERNED_TERMS =
		"datazone:DisassociateGovernedTerms";
	/** [Write] datazone:GenerateCode */
	static readonly GENERATE_CODE = "datazone:GenerateCode";
	/** [Read] datazone:GetAccountPool */
	static readonly GET_ACCOUNT_POOL = "datazone:GetAccountPool";
	/** [Read] datazone:GetAsset */
	static readonly GET_ASSET = "datazone:GetAsset";
	/** [Read] datazone:GetAssetFilter */
	static readonly GET_ASSET_FILTER = "datazone:GetAssetFilter";
	/** [Read] datazone:GetAssetType */
	static readonly GET_ASSET_TYPE = "datazone:GetAssetType";
	/** [Read] datazone:GetCell */
	static readonly GET_CELL = "datazone:GetCell";
	/** [Read] datazone:GetCellRun */
	static readonly GET_CELL_RUN = "datazone:GetCellRun";
	/** [Read] datazone:GetCellRunResult */
	static readonly GET_CELL_RUN_RESULT = "datazone:GetCellRunResult";
	/** [Read] datazone:GetCompute */
	static readonly GET_COMPUTE = "datazone:GetCompute";
	/** [Read] datazone:GetConnection */
	static readonly GET_CONNECTION = "datazone:GetConnection";
	/** [Read] datazone:GetConversation */
	static readonly GET_CONVERSATION = "datazone:GetConversation";
	/** [Read] datazone:GetCurrentEffectivePolicy */
	static readonly GET_CURRENT_EFFECTIVE_POLICY =
		"datazone:GetCurrentEffectivePolicy";
	/** [Read] datazone:GetDataExportConfiguration */
	static readonly GET_DATA_EXPORT_CONFIGURATION =
		"datazone:GetDataExportConfiguration";
	/** [Read] datazone:GetDataProduct */
	static readonly GET_DATA_PRODUCT = "datazone:GetDataProduct";
	/** [Read] datazone:GetDataSource */
	static readonly GET_DATA_SOURCE = "datazone:GetDataSource";
	/** [Read] datazone:GetDataSourceRun */
	static readonly GET_DATA_SOURCE_RUN = "datazone:GetDataSourceRun";
	/** [Read] datazone:GetDesignation */
	static readonly GET_DESIGNATION = "datazone:GetDesignation";
	/** [Read] datazone:GetDomain */
	static readonly GET_DOMAIN = "datazone:GetDomain";
	/** [Read] datazone:GetDomainExecutionRoleCredentials */
	static readonly GET_DOMAIN_EXECUTION_ROLE_CREDENTIALS =
		"datazone:GetDomainExecutionRoleCredentials";
	/** [Read] datazone:GetDomainSharingPolicy */
	static readonly GET_DOMAIN_SHARING_POLICY = "datazone:GetDomainSharingPolicy";
	/** [Read] datazone:GetDomainUnit */
	static readonly GET_DOMAIN_UNIT = "datazone:GetDomainUnit";
	/** [Read] datazone:GetEnvironment */
	static readonly GET_ENVIRONMENT = "datazone:GetEnvironment";
	/** [Read] datazone:GetEnvironmentAction */
	static readonly GET_ENVIRONMENT_ACTION = "datazone:GetEnvironmentAction";
	/** [Read] datazone:GetEnvironmentActionLink */
	static readonly GET_ENVIRONMENT_ACTION_LINK =
		"datazone:GetEnvironmentActionLink";
	/** [Read] datazone:GetEnvironmentBlueprint */
	static readonly GET_ENVIRONMENT_BLUEPRINT =
		"datazone:GetEnvironmentBlueprint";
	/** [Read] datazone:GetEnvironmentBlueprintConfiguration */
	static readonly GET_ENVIRONMENT_BLUEPRINT_CONFIGURATION =
		"datazone:GetEnvironmentBlueprintConfiguration";
	/** [Read] datazone:GetEnvironmentCredentials */
	static readonly GET_ENVIRONMENT_CREDENTIALS =
		"datazone:GetEnvironmentCredentials";
	/** [Read] datazone:GetEnvironmentProfile */
	static readonly GET_ENVIRONMENT_PROFILE = "datazone:GetEnvironmentProfile";
	/** [Read] datazone:GetFormType */
	static readonly GET_FORM_TYPE = "datazone:GetFormType";
	/** [Read] datazone:GetGlossary */
	static readonly GET_GLOSSARY = "datazone:GetGlossary";
	/** [Read] datazone:GetGlossaryTerm */
	static readonly GET_GLOSSARY_TERM = "datazone:GetGlossaryTerm";
	/** [Read] datazone:GetGroupProfile */
	static readonly GET_GROUP_PROFILE = "datazone:GetGroupProfile";
	/** [PermissionManagement] datazone:GetIamPortalLoginUrl */
	static readonly GET_IAM_PORTAL_LOGIN_URL = "datazone:GetIamPortalLoginUrl";
	/** [Read] datazone:GetJobRun */
	static readonly GET_JOB_RUN = "datazone:GetJobRun";
	/** [Read] datazone:GetLineageEvent */
	static readonly GET_LINEAGE_EVENT = "datazone:GetLineageEvent";
	/** [Read] datazone:GetLineageNode */
	static readonly GET_LINEAGE_NODE = "datazone:GetLineageNode";
	/** [Read] datazone:GetListing */
	static readonly GET_LISTING = "datazone:GetListing";
	/** [Read] datazone:GetMetadataGenerationRun */
	static readonly GET_METADATA_GENERATION_RUN =
		"datazone:GetMetadataGenerationRun";
	/** [Read] datazone:GetNotebook */
	static readonly GET_NOTEBOOK = "datazone:GetNotebook";
	/** [Read] datazone:GetNotebookCompute */
	static readonly GET_NOTEBOOK_COMPUTE = "datazone:GetNotebookCompute";
	/** [Read] datazone:GetNotebookExport */
	static readonly GET_NOTEBOOK_EXPORT = "datazone:GetNotebookExport";
	/** [Read] datazone:GetNotebookRun */
	static readonly GET_NOTEBOOK_RUN = "datazone:GetNotebookRun";
	/** [Read] datazone:GetProject */
	static readonly GET_PROJECT = "datazone:GetProject";
	/** [Read] datazone:GetProjectProfile */
	static readonly GET_PROJECT_PROFILE = "datazone:GetProjectProfile";
	/** [Read] datazone:GetRule */
	static readonly GET_RULE = "datazone:GetRule";
	/** [Read] datazone:GetSubscription */
	static readonly GET_SUBSCRIPTION = "datazone:GetSubscription";
	/** [Read] datazone:GetSubscriptionEligibility */
	static readonly GET_SUBSCRIPTION_ELIGIBILITY =
		"datazone:GetSubscriptionEligibility";
	/** [Read] datazone:GetSubscriptionGrant */
	static readonly GET_SUBSCRIPTION_GRANT = "datazone:GetSubscriptionGrant";
	/** [Read] datazone:GetSubscriptionRequestDetails */
	static readonly GET_SUBSCRIPTION_REQUEST_DETAILS =
		"datazone:GetSubscriptionRequestDetails";
	/** [Read] datazone:GetSubscriptionTarget */
	static readonly GET_SUBSCRIPTION_TARGET = "datazone:GetSubscriptionTarget";
	/** [Read] datazone:GetTimeSeriesDataPoint */
	static readonly GET_TIME_SERIES_DATA_POINT =
		"datazone:GetTimeSeriesDataPoint";
	/** [Read] datazone:GetUpdateEligibility */
	static readonly GET_UPDATE_ELIGIBILITY = "datazone:GetUpdateEligibility";
	/** [Read] datazone:GetUserProfile */
	static readonly GET_USER_PROFILE = "datazone:GetUserProfile";
	/** [List] datazone:ListAccountEnvironments */
	static readonly LIST_ACCOUNT_ENVIRONMENTS =
		"datazone:ListAccountEnvironments";
	/** [List] datazone:ListAccountPools */
	static readonly LIST_ACCOUNT_POOLS = "datazone:ListAccountPools";
	/** [List] datazone:ListAccountsInAccountPool */
	static readonly LIST_ACCOUNTS_IN_ACCOUNT_POOL =
		"datazone:ListAccountsInAccountPool";
	/** [List] datazone:ListAssetFilters */
	static readonly LIST_ASSET_FILTERS = "datazone:ListAssetFilters";
	/** [List] datazone:ListAssetRevisions */
	static readonly LIST_ASSET_REVISIONS = "datazone:ListAssetRevisions";
	/** [List] datazone:ListCellRuns */
	static readonly LIST_CELL_RUNS = "datazone:ListCellRuns";
	/** [List] datazone:ListConnections */
	static readonly LIST_CONNECTIONS = "datazone:ListConnections";
	/** [List] datazone:ListConversations */
	static readonly LIST_CONVERSATIONS = "datazone:ListConversations";
	/** [List] datazone:ListDataProductRevisions */
	static readonly LIST_DATA_PRODUCT_REVISIONS =
		"datazone:ListDataProductRevisions";
	/** [List] datazone:ListDataSourceRunActivities */
	static readonly LIST_DATA_SOURCE_RUN_ACTIVITIES =
		"datazone:ListDataSourceRunActivities";
	/** [List] datazone:ListDataSourceRuns */
	static readonly LIST_DATA_SOURCE_RUNS = "datazone:ListDataSourceRuns";
	/** [List] datazone:ListDataSources */
	static readonly LIST_DATA_SOURCES = "datazone:ListDataSources";
	/** [List] datazone:ListDesignations */
	static readonly LIST_DESIGNATIONS = "datazone:ListDesignations";
	/** [List] datazone:ListDomainUnitsForParent */
	static readonly LIST_DOMAIN_UNITS_FOR_PARENT =
		"datazone:ListDomainUnitsForParent";
	/** [List] datazone:ListDomains */
	static readonly LIST_DOMAINS = "datazone:ListDomains";
	/** [List] datazone:ListEntityOwners */
	static readonly LIST_ENTITY_OWNERS = "datazone:ListEntityOwners";
	/** [List] datazone:ListEnvironmentActions */
	static readonly LIST_ENVIRONMENT_ACTIONS = "datazone:ListEnvironmentActions";
	/** [List] datazone:ListEnvironmentBlueprintConfigurationSummaries */
	static readonly LIST_ENVIRONMENT_BLUEPRINT_CONFIGURATION_SUMMARIES =
		"datazone:ListEnvironmentBlueprintConfigurationSummaries";
	/** [List] datazone:ListEnvironmentBlueprintConfigurations */
	static readonly LIST_ENVIRONMENT_BLUEPRINT_CONFIGURATIONS =
		"datazone:ListEnvironmentBlueprintConfigurations";
	/** [List] datazone:ListEnvironmentBlueprints */
	static readonly LIST_ENVIRONMENT_BLUEPRINTS =
		"datazone:ListEnvironmentBlueprints";
	/** [List] datazone:ListEnvironmentProfiles */
	static readonly LIST_ENVIRONMENT_PROFILES =
		"datazone:ListEnvironmentProfiles";
	/** [List] datazone:ListEnvironments */
	static readonly LIST_ENVIRONMENTS = "datazone:ListEnvironments";
	/** [List] datazone:ListGroupsForUser */
	static readonly LIST_GROUPS_FOR_USER = "datazone:ListGroupsForUser";
	/** [List] datazone:ListJobRuns */
	static readonly LIST_JOB_RUNS = "datazone:ListJobRuns";
	/** [List] datazone:ListLineageEvents */
	static readonly LIST_LINEAGE_EVENTS = "datazone:ListLineageEvents";
	/** [List] datazone:ListLineageNodeHistory */
	static readonly LIST_LINEAGE_NODE_HISTORY = "datazone:ListLineageNodeHistory";
	/** [List] datazone:ListLinkedTypes */
	static readonly LIST_LINKED_TYPES = "datazone:ListLinkedTypes";
	/** [List] datazone:ListMetadataGenerationRuns */
	static readonly LIST_METADATA_GENERATION_RUNS =
		"datazone:ListMetadataGenerationRuns";
	/** [List] datazone:ListNotebookRuns */
	static readonly LIST_NOTEBOOK_RUNS = "datazone:ListNotebookRuns";
	/** [List] datazone:ListNotebooks */
	static readonly LIST_NOTEBOOKS = "datazone:ListNotebooks";
	/** [List] datazone:ListNotifications */
	static readonly LIST_NOTIFICATIONS = "datazone:ListNotifications";
	/** [List] datazone:ListPolicyGrants */
	static readonly LIST_POLICY_GRANTS = "datazone:ListPolicyGrants";
	/** [List] datazone:ListProjectMemberships */
	static readonly LIST_PROJECT_MEMBERSHIPS = "datazone:ListProjectMemberships";
	/** [List] datazone:ListProjectProfiles */
	static readonly LIST_PROJECT_PROFILES = "datazone:ListProjectProfiles";
	/** [List] datazone:ListProjects */
	static readonly LIST_PROJECTS = "datazone:ListProjects";
	/** [List] datazone:ListRules */
	static readonly LIST_RULES = "datazone:ListRules";
	/** [List] datazone:ListSubscriptionGrants */
	static readonly LIST_SUBSCRIPTION_GRANTS = "datazone:ListSubscriptionGrants";
	/** [List] datazone:ListSubscriptionRequests */
	static readonly LIST_SUBSCRIPTION_REQUESTS =
		"datazone:ListSubscriptionRequests";
	/** [List] datazone:ListSubscriptionTargets */
	static readonly LIST_SUBSCRIPTION_TARGETS =
		"datazone:ListSubscriptionTargets";
	/** [List] datazone:ListSubscriptions */
	static readonly LIST_SUBSCRIPTIONS = "datazone:ListSubscriptions";
	/** [Read] datazone:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "datazone:ListTagsForResource";
	/** [List] datazone:ListTimeSeriesDataPoints */
	static readonly LIST_TIME_SERIES_DATA_POINTS =
		"datazone:ListTimeSeriesDataPoints";
	/** [List] datazone:ListWarehouseMetadata */
	static readonly LIST_WAREHOUSE_METADATA = "datazone:ListWarehouseMetadata";
	/** [Write] datazone:PostLineageEvent */
	static readonly POST_LINEAGE_EVENT = "datazone:PostLineageEvent";
	/** [Write] datazone:PostTimeSeriesDataPoints */
	static readonly POST_TIME_SERIES_DATA_POINTS =
		"datazone:PostTimeSeriesDataPoints";
	/** [Write] datazone:ProvisionDomain */
	static readonly PROVISION_DOMAIN = "datazone:ProvisionDomain";
	/** [Write] datazone:PutCellRunResult */
	static readonly PUT_CELL_RUN_RESULT = "datazone:PutCellRunResult";
	/** [Write] datazone:PutDataExportConfiguration */
	static readonly PUT_DATA_EXPORT_CONFIGURATION =
		"datazone:PutDataExportConfiguration";
	/** [PermissionManagement] datazone:PutDomainSharingPolicy */
	static readonly PUT_DOMAIN_SHARING_POLICY = "datazone:PutDomainSharingPolicy";
	/** [Write] datazone:PutEnvironmentBlueprintConfiguration */
	static readonly PUT_ENVIRONMENT_BLUEPRINT_CONFIGURATION =
		"datazone:PutEnvironmentBlueprintConfiguration";
	/** [List] datazone:QueryGraph */
	static readonly QUERY_GRAPH = "datazone:QueryGraph";
	/** [Write] datazone:RefreshToken */
	static readonly REFRESH_TOKEN = "datazone:RefreshToken";
	/** [Write] datazone:RejectPredictions */
	static readonly REJECT_PREDICTIONS = "datazone:RejectPredictions";
	/** [Write] datazone:RejectSubscriptionRequest */
	static readonly REJECT_SUBSCRIPTION_REQUEST =
		"datazone:RejectSubscriptionRequest";
	/** [Write] datazone:RemoveEntityOwner */
	static readonly REMOVE_ENTITY_OWNER = "datazone:RemoveEntityOwner";
	/** [PermissionManagement] datazone:RemovePolicyGrant */
	static readonly REMOVE_POLICY_GRANT = "datazone:RemovePolicyGrant";
	/** [PermissionManagement] datazone:RevokeSubscription */
	static readonly REVOKE_SUBSCRIPTION = "datazone:RevokeSubscription";
	/** [List] datazone:Search */
	static readonly SEARCH = "datazone:Search";
	/** [List] datazone:SearchGroupProfiles */
	static readonly SEARCH_GROUP_PROFILES = "datazone:SearchGroupProfiles";
	/** [List] datazone:SearchListings */
	static readonly SEARCH_LISTINGS = "datazone:SearchListings";
	/** [List] datazone:SearchRules */
	static readonly SEARCH_RULES = "datazone:SearchRules";
	/** [List] datazone:SearchTypes */
	static readonly SEARCH_TYPES = "datazone:SearchTypes";
	/** [List] datazone:SearchUserProfiles */
	static readonly SEARCH_USER_PROFILES = "datazone:SearchUserProfiles";
	/** [Write] datazone:SendMessage */
	static readonly SEND_MESSAGE = "datazone:SendMessage";
	/** [Write] datazone:SsoLogin */
	static readonly SSO_LOGIN = "datazone:SsoLogin";
	/** [Write] datazone:SsoLogout */
	static readonly SSO_LOGOUT = "datazone:SsoLogout";
	/** [Write] datazone:StartAccountBootstrapAction */
	static readonly START_ACCOUNT_BOOTSTRAP_ACTION =
		"datazone:StartAccountBootstrapAction";
	/** [Write] datazone:StartCompute */
	static readonly START_COMPUTE = "datazone:StartCompute";
	/** [Write] datazone:StartConversation */
	static readonly START_CONVERSATION = "datazone:StartConversation";
	/** [Write] datazone:StartDataSourceRun */
	static readonly START_DATA_SOURCE_RUN = "datazone:StartDataSourceRun";
	/** [Write] datazone:StartMetadataGenerationRun */
	static readonly START_METADATA_GENERATION_RUN =
		"datazone:StartMetadataGenerationRun";
	/** [Write] datazone:StartNotebookCompute */
	static readonly START_NOTEBOOK_COMPUTE = "datazone:StartNotebookCompute";
	/** [Write] datazone:StartNotebookExport */
	static readonly START_NOTEBOOK_EXPORT = "datazone:StartNotebookExport";
	/** [Write] datazone:StartNotebookImport */
	static readonly START_NOTEBOOK_IMPORT = "datazone:StartNotebookImport";
	/** [Write] datazone:StartNotebookRun */
	static readonly START_NOTEBOOK_RUN = "datazone:StartNotebookRun";
	/** [Write] datazone:StartNotebookSync */
	static readonly START_NOTEBOOK_SYNC = "datazone:StartNotebookSync";
	/** [Write] datazone:StopCompute */
	static readonly STOP_COMPUTE = "datazone:StopCompute";
	/** [Write] datazone:StopMetadataGenerationRun */
	static readonly STOP_METADATA_GENERATION_RUN =
		"datazone:StopMetadataGenerationRun";
	/** [Write] datazone:StopNotebookCompute */
	static readonly STOP_NOTEBOOK_COMPUTE = "datazone:StopNotebookCompute";
	/** [Write] datazone:StopNotebookRun */
	static readonly STOP_NOTEBOOK_RUN = "datazone:StopNotebookRun";
	/** [Tagging] datazone:TagResource */
	static readonly TAG_RESOURCE = "datazone:TagResource";
	/** [Tagging] datazone:UntagResource */
	static readonly UNTAG_RESOURCE = "datazone:UntagResource";
	/** [Write] datazone:UpdateAccountPool */
	static readonly UPDATE_ACCOUNT_POOL = "datazone:UpdateAccountPool";
	/** [Write] datazone:UpdateAssetFilter */
	static readonly UPDATE_ASSET_FILTER = "datazone:UpdateAssetFilter";
	/** [Write] datazone:UpdateCell */
	static readonly UPDATE_CELL = "datazone:UpdateCell";
	/** [Write] datazone:UpdateCellRun */
	static readonly UPDATE_CELL_RUN = "datazone:UpdateCellRun";
	/** [Write] datazone:UpdateConnection */
	static readonly UPDATE_CONNECTION = "datazone:UpdateConnection";
	/** [Write] datazone:UpdateDataSource */
	static readonly UPDATE_DATA_SOURCE = "datazone:UpdateDataSource";
	/** [Write] datazone:UpdateDataSourceRunActivities */
	static readonly UPDATE_DATA_SOURCE_RUN_ACTIVITIES =
		"datazone:UpdateDataSourceRunActivities";
	/** [Write] datazone:UpdateDesignation */
	static readonly UPDATE_DESIGNATION = "datazone:UpdateDesignation";
	/** [Write] datazone:UpdateDomain */
	static readonly UPDATE_DOMAIN = "datazone:UpdateDomain";
	/** [Write] datazone:UpdateDomainUnit */
	static readonly UPDATE_DOMAIN_UNIT = "datazone:UpdateDomainUnit";
	/** [Write] datazone:UpdateEnvironment */
	static readonly UPDATE_ENVIRONMENT = "datazone:UpdateEnvironment";
	/** [Write] datazone:UpdateEnvironmentAction */
	static readonly UPDATE_ENVIRONMENT_ACTION =
		"datazone:UpdateEnvironmentAction";
	/** [Write] datazone:UpdateEnvironmentBlueprint */
	static readonly UPDATE_ENVIRONMENT_BLUEPRINT =
		"datazone:UpdateEnvironmentBlueprint";
	/** [Write] datazone:UpdateEnvironmentConfiguration */
	static readonly UPDATE_ENVIRONMENT_CONFIGURATION =
		"datazone:UpdateEnvironmentConfiguration";
	/** [Write] datazone:UpdateEnvironmentDeploymentStatus */
	static readonly UPDATE_ENVIRONMENT_DEPLOYMENT_STATUS =
		"datazone:UpdateEnvironmentDeploymentStatus";
	/** [Write] datazone:UpdateEnvironmentProfile */
	static readonly UPDATE_ENVIRONMENT_PROFILE =
		"datazone:UpdateEnvironmentProfile";
	/** [Write] datazone:UpdateGlossary */
	static readonly UPDATE_GLOSSARY = "datazone:UpdateGlossary";
	/** [Write] datazone:UpdateGlossaryTerm */
	static readonly UPDATE_GLOSSARY_TERM = "datazone:UpdateGlossaryTerm";
	/** [Write] datazone:UpdateGroupProfile */
	static readonly UPDATE_GROUP_PROFILE = "datazone:UpdateGroupProfile";
	/** [Write] datazone:UpdateNotebook */
	static readonly UPDATE_NOTEBOOK = "datazone:UpdateNotebook";
	/** [Write] datazone:UpdateProject */
	static readonly UPDATE_PROJECT = "datazone:UpdateProject";
	/** [Write] datazone:UpdateProjectProfile */
	static readonly UPDATE_PROJECT_PROFILE = "datazone:UpdateProjectProfile";
	/** [Write] datazone:UpdateRule */
	static readonly UPDATE_RULE = "datazone:UpdateRule";
	/** [Write] datazone:UpdateSubscriptionGrantStatus */
	static readonly UPDATE_SUBSCRIPTION_GRANT_STATUS =
		"datazone:UpdateSubscriptionGrantStatus";
	/** [Write] datazone:UpdateSubscriptionRequest */
	static readonly UPDATE_SUBSCRIPTION_REQUEST =
		"datazone:UpdateSubscriptionRequest";
	/** [Write] datazone:UpdateSubscriptionTarget */
	static readonly UPDATE_SUBSCRIPTION_TARGET =
		"datazone:UpdateSubscriptionTarget";
	/** [Write] datazone:UpdateUserProfile */
	static readonly UPDATE_USER_PROFILE = "datazone:UpdateUserProfile";
	/** [Write] datazone:ValidatePassRole */
	static readonly VALIDATE_PASS_ROLE = "datazone:ValidatePassRole";
	/** [Read] datazone:ValidatePolicy */
	static readonly VALIDATE_POLICY = "datazone:ValidatePolicy";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DatazoneActions.BATCH_GET_ATTRIBUTES_METADATA,
		DatazoneActions.BATCH_GET_CELL,
		DatazoneActions.BATCH_GET_CELL_RUN,
		DatazoneActions.GET_ACCOUNT_POOL,
		DatazoneActions.GET_ASSET,
		DatazoneActions.GET_ASSET_FILTER,
		DatazoneActions.GET_ASSET_TYPE,
		DatazoneActions.GET_CELL,
		DatazoneActions.GET_CELL_RUN,
		DatazoneActions.GET_CELL_RUN_RESULT,
		DatazoneActions.GET_COMPUTE,
		DatazoneActions.GET_CONNECTION,
		DatazoneActions.GET_CONVERSATION,
		DatazoneActions.GET_CURRENT_EFFECTIVE_POLICY,
		DatazoneActions.GET_DATA_EXPORT_CONFIGURATION,
		DatazoneActions.GET_DATA_PRODUCT,
		DatazoneActions.GET_DATA_SOURCE,
		DatazoneActions.GET_DATA_SOURCE_RUN,
		DatazoneActions.GET_DESIGNATION,
		DatazoneActions.GET_DOMAIN,
		DatazoneActions.GET_DOMAIN_EXECUTION_ROLE_CREDENTIALS,
		DatazoneActions.GET_DOMAIN_SHARING_POLICY,
		DatazoneActions.GET_DOMAIN_UNIT,
		DatazoneActions.GET_ENVIRONMENT,
		DatazoneActions.GET_ENVIRONMENT_ACTION,
		DatazoneActions.GET_ENVIRONMENT_ACTION_LINK,
		DatazoneActions.GET_ENVIRONMENT_BLUEPRINT,
		DatazoneActions.GET_ENVIRONMENT_BLUEPRINT_CONFIGURATION,
		DatazoneActions.GET_ENVIRONMENT_CREDENTIALS,
		DatazoneActions.GET_ENVIRONMENT_PROFILE,
		DatazoneActions.GET_FORM_TYPE,
		DatazoneActions.GET_GLOSSARY,
		DatazoneActions.GET_GLOSSARY_TERM,
		DatazoneActions.GET_GROUP_PROFILE,
		DatazoneActions.GET_JOB_RUN,
		DatazoneActions.GET_LINEAGE_EVENT,
		DatazoneActions.GET_LINEAGE_NODE,
		DatazoneActions.GET_LISTING,
		DatazoneActions.GET_METADATA_GENERATION_RUN,
		DatazoneActions.GET_NOTEBOOK,
		DatazoneActions.GET_NOTEBOOK_COMPUTE,
		DatazoneActions.GET_NOTEBOOK_EXPORT,
		DatazoneActions.GET_NOTEBOOK_RUN,
		DatazoneActions.GET_PROJECT,
		DatazoneActions.GET_PROJECT_PROFILE,
		DatazoneActions.GET_RULE,
		DatazoneActions.GET_SUBSCRIPTION,
		DatazoneActions.GET_SUBSCRIPTION_ELIGIBILITY,
		DatazoneActions.GET_SUBSCRIPTION_GRANT,
		DatazoneActions.GET_SUBSCRIPTION_REQUEST_DETAILS,
		DatazoneActions.GET_SUBSCRIPTION_TARGET,
		DatazoneActions.GET_TIME_SERIES_DATA_POINT,
		DatazoneActions.GET_UPDATE_ELIGIBILITY,
		DatazoneActions.GET_USER_PROFILE,
		DatazoneActions.LIST_TAGS_FOR_RESOURCE,
		DatazoneActions.VALIDATE_POLICY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DatazoneActions.ACCEPT_PREDICTIONS,
		DatazoneActions.ACCEPT_SUBSCRIPTION_REQUEST,
		DatazoneActions.ADD_ENTITY_OWNER,
		DatazoneActions.ASSOCIATE_ENVIRONMENT_ROLE,
		DatazoneActions.ASSOCIATE_GOVERNED_TERMS,
		DatazoneActions.BATCH_DELETE_LINKED_TYPES,
		DatazoneActions.BATCH_PUT_ATTRIBUTES_METADATA,
		DatazoneActions.BATCH_PUT_LINKED_TYPES,
		DatazoneActions.BATCH_UPDATE_NOTIFICATIONS,
		DatazoneActions.CANCEL_MESSAGE,
		DatazoneActions.CANCEL_METADATA_GENERATION_RUN,
		DatazoneActions.CANCEL_SUBSCRIPTION,
		DatazoneActions.CREATE_ACCOUNT_POOL,
		DatazoneActions.CREATE_ASSET,
		DatazoneActions.CREATE_ASSET_FILTER,
		DatazoneActions.CREATE_ASSET_REVISION,
		DatazoneActions.CREATE_ASSET_TYPE,
		DatazoneActions.CREATE_CELL,
		DatazoneActions.CREATE_CELL_RUN,
		DatazoneActions.CREATE_CONNECTION,
		DatazoneActions.CREATE_DATA_PRODUCT,
		DatazoneActions.CREATE_DATA_PRODUCT_REVISION,
		DatazoneActions.CREATE_DATA_SOURCE,
		DatazoneActions.CREATE_DESIGNATION,
		DatazoneActions.CREATE_DOMAIN,
		DatazoneActions.CREATE_DOMAIN_UNIT,
		DatazoneActions.CREATE_ENVIRONMENT,
		DatazoneActions.CREATE_ENVIRONMENT_ACTION,
		DatazoneActions.CREATE_ENVIRONMENT_BLUEPRINT,
		DatazoneActions.CREATE_ENVIRONMENT_PROFILE,
		DatazoneActions.CREATE_FORM_TYPE,
		DatazoneActions.CREATE_GLOSSARY,
		DatazoneActions.CREATE_GLOSSARY_TERM,
		DatazoneActions.CREATE_GROUP_PROFILE,
		DatazoneActions.CREATE_LISTING_CHANGE_SET,
		DatazoneActions.CREATE_NOTEBOOK,
		DatazoneActions.CREATE_PROJECT,
		DatazoneActions.CREATE_PROJECT_MEMBERSHIP,
		DatazoneActions.CREATE_PROJECT_PROFILE,
		DatazoneActions.CREATE_RULE,
		DatazoneActions.CREATE_SUBSCRIPTION_GRANT,
		DatazoneActions.CREATE_SUBSCRIPTION_REQUEST,
		DatazoneActions.CREATE_SUBSCRIPTION_TARGET,
		DatazoneActions.CREATE_USER_PROFILE,
		DatazoneActions.DELETE_ACCOUNT_POOL,
		DatazoneActions.DELETE_ASSET,
		DatazoneActions.DELETE_ASSET_FILTER,
		DatazoneActions.DELETE_ASSET_TYPE,
		DatazoneActions.DELETE_CELL,
		DatazoneActions.DELETE_CELL_RUN,
		DatazoneActions.DELETE_CONNECTION,
		DatazoneActions.DELETE_DATA_EXPORT_CONFIGURATION,
		DatazoneActions.DELETE_DATA_PRODUCT,
		DatazoneActions.DELETE_DATA_SOURCE,
		DatazoneActions.DELETE_DESIGNATION,
		DatazoneActions.DELETE_DOMAIN,
		DatazoneActions.DELETE_DOMAIN_UNIT,
		DatazoneActions.DELETE_ENVIRONMENT,
		DatazoneActions.DELETE_ENVIRONMENT_ACTION,
		DatazoneActions.DELETE_ENVIRONMENT_BLUEPRINT,
		DatazoneActions.DELETE_ENVIRONMENT_BLUEPRINT_CONFIGURATION,
		DatazoneActions.DELETE_ENVIRONMENT_PROFILE,
		DatazoneActions.DELETE_FORM_TYPE,
		DatazoneActions.DELETE_GLOSSARY,
		DatazoneActions.DELETE_GLOSSARY_TERM,
		DatazoneActions.DELETE_LINEAGE_EVENT,
		DatazoneActions.DELETE_LISTING,
		DatazoneActions.DELETE_NOTEBOOK,
		DatazoneActions.DELETE_PROJECT,
		DatazoneActions.DELETE_PROJECT_MEMBERSHIP,
		DatazoneActions.DELETE_PROJECT_PROFILE,
		DatazoneActions.DELETE_RULE,
		DatazoneActions.DELETE_SUBSCRIPTION_GRANT,
		DatazoneActions.DELETE_SUBSCRIPTION_REQUEST,
		DatazoneActions.DELETE_SUBSCRIPTION_TARGET,
		DatazoneActions.DELETE_TIME_SERIES_DATA_POINTS,
		DatazoneActions.DISASSOCIATE_ENVIRONMENT_ROLE,
		DatazoneActions.DISASSOCIATE_GOVERNED_TERMS,
		DatazoneActions.GENERATE_CODE,
		DatazoneActions.POST_LINEAGE_EVENT,
		DatazoneActions.POST_TIME_SERIES_DATA_POINTS,
		DatazoneActions.PROVISION_DOMAIN,
		DatazoneActions.PUT_CELL_RUN_RESULT,
		DatazoneActions.PUT_DATA_EXPORT_CONFIGURATION,
		DatazoneActions.PUT_ENVIRONMENT_BLUEPRINT_CONFIGURATION,
		DatazoneActions.REFRESH_TOKEN,
		DatazoneActions.REJECT_PREDICTIONS,
		DatazoneActions.REJECT_SUBSCRIPTION_REQUEST,
		DatazoneActions.REMOVE_ENTITY_OWNER,
		DatazoneActions.SEND_MESSAGE,
		DatazoneActions.SSO_LOGIN,
		DatazoneActions.SSO_LOGOUT,
		DatazoneActions.START_ACCOUNT_BOOTSTRAP_ACTION,
		DatazoneActions.START_COMPUTE,
		DatazoneActions.START_CONVERSATION,
		DatazoneActions.START_DATA_SOURCE_RUN,
		DatazoneActions.START_METADATA_GENERATION_RUN,
		DatazoneActions.START_NOTEBOOK_COMPUTE,
		DatazoneActions.START_NOTEBOOK_EXPORT,
		DatazoneActions.START_NOTEBOOK_IMPORT,
		DatazoneActions.START_NOTEBOOK_RUN,
		DatazoneActions.START_NOTEBOOK_SYNC,
		DatazoneActions.STOP_COMPUTE,
		DatazoneActions.STOP_METADATA_GENERATION_RUN,
		DatazoneActions.STOP_NOTEBOOK_COMPUTE,
		DatazoneActions.STOP_NOTEBOOK_RUN,
		DatazoneActions.UPDATE_ACCOUNT_POOL,
		DatazoneActions.UPDATE_ASSET_FILTER,
		DatazoneActions.UPDATE_CELL,
		DatazoneActions.UPDATE_CELL_RUN,
		DatazoneActions.UPDATE_CONNECTION,
		DatazoneActions.UPDATE_DATA_SOURCE,
		DatazoneActions.UPDATE_DATA_SOURCE_RUN_ACTIVITIES,
		DatazoneActions.UPDATE_DESIGNATION,
		DatazoneActions.UPDATE_DOMAIN,
		DatazoneActions.UPDATE_DOMAIN_UNIT,
		DatazoneActions.UPDATE_ENVIRONMENT,
		DatazoneActions.UPDATE_ENVIRONMENT_ACTION,
		DatazoneActions.UPDATE_ENVIRONMENT_BLUEPRINT,
		DatazoneActions.UPDATE_ENVIRONMENT_CONFIGURATION,
		DatazoneActions.UPDATE_ENVIRONMENT_DEPLOYMENT_STATUS,
		DatazoneActions.UPDATE_ENVIRONMENT_PROFILE,
		DatazoneActions.UPDATE_GLOSSARY,
		DatazoneActions.UPDATE_GLOSSARY_TERM,
		DatazoneActions.UPDATE_GROUP_PROFILE,
		DatazoneActions.UPDATE_NOTEBOOK,
		DatazoneActions.UPDATE_PROJECT,
		DatazoneActions.UPDATE_PROJECT_PROFILE,
		DatazoneActions.UPDATE_RULE,
		DatazoneActions.UPDATE_SUBSCRIPTION_GRANT_STATUS,
		DatazoneActions.UPDATE_SUBSCRIPTION_REQUEST,
		DatazoneActions.UPDATE_SUBSCRIPTION_TARGET,
		DatazoneActions.UPDATE_USER_PROFILE,
		DatazoneActions.VALIDATE_PASS_ROLE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DatazoneActions.LIST_ACCOUNT_ENVIRONMENTS,
		DatazoneActions.LIST_ACCOUNT_POOLS,
		DatazoneActions.LIST_ACCOUNTS_IN_ACCOUNT_POOL,
		DatazoneActions.LIST_ASSET_FILTERS,
		DatazoneActions.LIST_ASSET_REVISIONS,
		DatazoneActions.LIST_CELL_RUNS,
		DatazoneActions.LIST_CONNECTIONS,
		DatazoneActions.LIST_CONVERSATIONS,
		DatazoneActions.LIST_DATA_PRODUCT_REVISIONS,
		DatazoneActions.LIST_DATA_SOURCE_RUN_ACTIVITIES,
		DatazoneActions.LIST_DATA_SOURCE_RUNS,
		DatazoneActions.LIST_DATA_SOURCES,
		DatazoneActions.LIST_DESIGNATIONS,
		DatazoneActions.LIST_DOMAIN_UNITS_FOR_PARENT,
		DatazoneActions.LIST_DOMAINS,
		DatazoneActions.LIST_ENTITY_OWNERS,
		DatazoneActions.LIST_ENVIRONMENT_ACTIONS,
		DatazoneActions.LIST_ENVIRONMENT_BLUEPRINT_CONFIGURATION_SUMMARIES,
		DatazoneActions.LIST_ENVIRONMENT_BLUEPRINT_CONFIGURATIONS,
		DatazoneActions.LIST_ENVIRONMENT_BLUEPRINTS,
		DatazoneActions.LIST_ENVIRONMENT_PROFILES,
		DatazoneActions.LIST_ENVIRONMENTS,
		DatazoneActions.LIST_GROUPS_FOR_USER,
		DatazoneActions.LIST_JOB_RUNS,
		DatazoneActions.LIST_LINEAGE_EVENTS,
		DatazoneActions.LIST_LINEAGE_NODE_HISTORY,
		DatazoneActions.LIST_LINKED_TYPES,
		DatazoneActions.LIST_METADATA_GENERATION_RUNS,
		DatazoneActions.LIST_NOTEBOOK_RUNS,
		DatazoneActions.LIST_NOTEBOOKS,
		DatazoneActions.LIST_NOTIFICATIONS,
		DatazoneActions.LIST_POLICY_GRANTS,
		DatazoneActions.LIST_PROJECT_MEMBERSHIPS,
		DatazoneActions.LIST_PROJECT_PROFILES,
		DatazoneActions.LIST_PROJECTS,
		DatazoneActions.LIST_RULES,
		DatazoneActions.LIST_SUBSCRIPTION_GRANTS,
		DatazoneActions.LIST_SUBSCRIPTION_REQUESTS,
		DatazoneActions.LIST_SUBSCRIPTION_TARGETS,
		DatazoneActions.LIST_SUBSCRIPTIONS,
		DatazoneActions.LIST_TIME_SERIES_DATA_POINTS,
		DatazoneActions.LIST_WAREHOUSE_METADATA,
		DatazoneActions.QUERY_GRAPH,
		DatazoneActions.SEARCH,
		DatazoneActions.SEARCH_GROUP_PROFILES,
		DatazoneActions.SEARCH_LISTINGS,
		DatazoneActions.SEARCH_RULES,
		DatazoneActions.SEARCH_TYPES,
		DatazoneActions.SEARCH_USER_PROFILES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		DatazoneActions.ADD_POLICY_GRANT,
		DatazoneActions.DELETE_DOMAIN_SHARING_POLICY,
		DatazoneActions.GET_IAM_PORTAL_LOGIN_URL,
		DatazoneActions.PUT_DOMAIN_SHARING_POLICY,
		DatazoneActions.REMOVE_POLICY_GRANT,
		DatazoneActions.REVOKE_SUBSCRIPTION,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DatazoneActions.TAG_RESOURCE,
		DatazoneActions.UNTAG_RESOURCE,
	];
}

const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):datazone:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for datazone resources.
 */
export class DatazoneResources {
	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:datazone:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domain resource.
	 */
	static isValidDomainArn(arn: string): boolean {
		return DomainArnRegex.test(arn);
	}

	/**
	 * Parses a domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
	} {
		const match = DomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for datazone.
 */
export class DatazoneOperations {
	/** IAM actions required for the AcceptPredictions API call. */
	static readonly ACCEPT_PREDICTIONS: string[] = ["datazone:AcceptPredictions"];
	/** IAM actions required for the AcceptSubscriptionRequest API call. */
	static readonly ACCEPT_SUBSCRIPTION_REQUEST: string[] = [
		"datazone:AcceptSubscriptionRequest",
	];
	/** IAM actions required for the AddEntityOwner API call. */
	static readonly ADD_ENTITY_OWNER: string[] = ["datazone:AddEntityOwner"];
	/** IAM actions required for the AddPolicyGrant API call. */
	static readonly ADD_POLICY_GRANT: string[] = ["datazone:AddPolicyGrant"];
	/** IAM actions required for the AssociateEnvironmentRole API call. */
	static readonly ASSOCIATE_ENVIRONMENT_ROLE: string[] = [
		"datazone:AssociateEnvironmentRole",
		"iam:PassRole",
	];
	/** IAM actions required for the AssociateGovernedTerms API call. */
	static readonly ASSOCIATE_GOVERNED_TERMS: string[] = [
		"datazone:AssociateGovernedTerms",
	];
	/** IAM actions required for the BatchGetAttributesMetadata API call. */
	static readonly BATCH_GET_ATTRIBUTES_METADATA: string[] = [
		"datazone:BatchGetAttributesMetadata",
	];
	/** IAM actions required for the BatchPutAttributesMetadata API call. */
	static readonly BATCH_PUT_ATTRIBUTES_METADATA: string[] = [
		"datazone:BatchPutAttributesMetadata",
	];
	/** IAM actions required for the CancelMetadataGenerationRun API call. */
	static readonly CANCEL_METADATA_GENERATION_RUN: string[] = [
		"datazone:CancelMetadataGenerationRun",
	];
	/** IAM actions required for the CancelSubscription API call. */
	static readonly CANCEL_SUBSCRIPTION: string[] = [
		"datazone:CancelSubscription",
	];
	/** IAM actions required for the CreateAccountPool API call. */
	static readonly CREATE_ACCOUNT_POOL: string[] = [
		"datazone:CreateAccountPool",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAsset API call. */
	static readonly CREATE_ASSET: string[] = ["datazone:CreateAsset"];
	/** IAM actions required for the CreateAssetFilter API call. */
	static readonly CREATE_ASSET_FILTER: string[] = [
		"datazone:CreateAssetFilter",
	];
	/** IAM actions required for the CreateAssetRevision API call. */
	static readonly CREATE_ASSET_REVISION: string[] = [
		"datazone:CreateAssetRevision",
	];
	/** IAM actions required for the CreateAssetType API call. */
	static readonly CREATE_ASSET_TYPE: string[] = ["datazone:CreateAssetType"];
	/** IAM actions required for the CreateConnection API call. */
	static readonly CREATE_CONNECTION: string[] = ["datazone:CreateConnection"];
	/** IAM actions required for the CreateDataProduct API call. */
	static readonly CREATE_DATA_PRODUCT: string[] = [
		"datazone:CreateDataProduct",
	];
	/** IAM actions required for the CreateDataProductRevision API call. */
	static readonly CREATE_DATA_PRODUCT_REVISION: string[] = [
		"datazone:CreateDataProductRevision",
	];
	/** IAM actions required for the CreateDataSource API call. */
	static readonly CREATE_DATA_SOURCE: string[] = [
		"datazone:CreateDataSource",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CREATE_DOMAIN: string[] = [
		"datazone:CreateDomain",
		"iam:PassRole",
		"datazone:TagResource",
	];
	/** IAM actions required for the CreateDomainUnit API call. */
	static readonly CREATE_DOMAIN_UNIT: string[] = ["datazone:CreateDomainUnit"];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CREATE_ENVIRONMENT: string[] = ["datazone:CreateEnvironment"];
	/** IAM actions required for the CreateEnvironmentAction API call. */
	static readonly CREATE_ENVIRONMENT_ACTION: string[] = [
		"datazone:CreateEnvironmentAction",
	];
	/** IAM actions required for the CreateEnvironmentBlueprint API call. */
	static readonly CREATE_ENVIRONMENT_BLUEPRINT: string[] = [
		"datazone:CreateEnvironmentBlueprint",
	];
	/** IAM actions required for the CreateEnvironmentProfile API call. */
	static readonly CREATE_ENVIRONMENT_PROFILE: string[] = [
		"datazone:CreateEnvironmentProfile",
	];
	/** IAM actions required for the CreateFormType API call. */
	static readonly CREATE_FORM_TYPE: string[] = ["datazone:CreateFormType"];
	/** IAM actions required for the CreateGlossary API call. */
	static readonly CREATE_GLOSSARY: string[] = ["datazone:CreateGlossary"];
	/** IAM actions required for the CreateGlossaryTerm API call. */
	static readonly CREATE_GLOSSARY_TERM: string[] = [
		"datazone:CreateGlossaryTerm",
	];
	/** IAM actions required for the CreateGroupProfile API call. */
	static readonly CREATE_GROUP_PROFILE: string[] = [
		"datazone:CreateGroupProfile",
	];
	/** IAM actions required for the CreateListingChangeSet API call. */
	static readonly CREATE_LISTING_CHANGE_SET: string[] = [
		"datazone:CreateListingChangeSet",
	];
	/** IAM actions required for the CreateNotebook API call. */
	static readonly CREATE_NOTEBOOK: string[] = ["datazone:CreateNotebook"];
	/** IAM actions required for the CreateProject API call. */
	static readonly CREATE_PROJECT: string[] = [
		"datazone:CreateProject",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateProjectMembership API call. */
	static readonly CREATE_PROJECT_MEMBERSHIP: string[] = [
		"datazone:CreateProjectMembership",
	];
	/** IAM actions required for the CreateProjectProfile API call. */
	static readonly CREATE_PROJECT_PROFILE: string[] = [
		"datazone:CreateProjectProfile",
	];
	/** IAM actions required for the CreateRule API call. */
	static readonly CREATE_RULE: string[] = ["datazone:CreateRule"];
	/** IAM actions required for the CreateSubscriptionGrant API call. */
	static readonly CREATE_SUBSCRIPTION_GRANT: string[] = [
		"datazone:CreateSubscriptionGrant",
	];
	/** IAM actions required for the CreateSubscriptionRequest API call. */
	static readonly CREATE_SUBSCRIPTION_REQUEST: string[] = [
		"datazone:CreateSubscriptionRequest",
	];
	/** IAM actions required for the CreateSubscriptionTarget API call. */
	static readonly CREATE_SUBSCRIPTION_TARGET: string[] = [
		"datazone:CreateSubscriptionTarget",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateUserProfile API call. */
	static readonly CREATE_USER_PROFILE: string[] = [
		"datazone:CreateUserProfile",
	];
	/** IAM actions required for the DeleteAccountPool API call. */
	static readonly DELETE_ACCOUNT_POOL: string[] = [
		"datazone:DeleteAccountPool",
	];
	/** IAM actions required for the DeleteAsset API call. */
	static readonly DELETE_ASSET: string[] = ["datazone:DeleteAsset"];
	/** IAM actions required for the DeleteAssetFilter API call. */
	static readonly DELETE_ASSET_FILTER: string[] = [
		"datazone:DeleteAssetFilter",
	];
	/** IAM actions required for the DeleteAssetType API call. */
	static readonly DELETE_ASSET_TYPE: string[] = ["datazone:DeleteAssetType"];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DELETE_CONNECTION: string[] = ["datazone:DeleteConnection"];
	/** IAM actions required for the DeleteDataExportConfiguration API call. */
	static readonly DELETE_DATA_EXPORT_CONFIGURATION: string[] = [
		"datazone:DeleteDataExportConfiguration",
	];
	/** IAM actions required for the DeleteDataProduct API call. */
	static readonly DELETE_DATA_PRODUCT: string[] = [
		"datazone:DeleteDataProduct",
	];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DELETE_DATA_SOURCE: string[] = ["datazone:DeleteDataSource"];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DELETE_DOMAIN: string[] = ["datazone:DeleteDomain"];
	/** IAM actions required for the DeleteDomainUnit API call. */
	static readonly DELETE_DOMAIN_UNIT: string[] = ["datazone:DeleteDomainUnit"];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DELETE_ENVIRONMENT: string[] = ["datazone:DeleteEnvironment"];
	/** IAM actions required for the DeleteEnvironmentAction API call. */
	static readonly DELETE_ENVIRONMENT_ACTION: string[] = [
		"datazone:DeleteEnvironmentAction",
	];
	/** IAM actions required for the DeleteEnvironmentBlueprint API call. */
	static readonly DELETE_ENVIRONMENT_BLUEPRINT: string[] = [
		"datazone:DeleteEnvironmentBlueprint",
	];
	/** IAM actions required for the DeleteEnvironmentBlueprintConfiguration API call. */
	static readonly DELETE_ENVIRONMENT_BLUEPRINT_CONFIGURATION: string[] = [
		"datazone:DeleteEnvironmentBlueprintConfiguration",
	];
	/** IAM actions required for the DeleteEnvironmentProfile API call. */
	static readonly DELETE_ENVIRONMENT_PROFILE: string[] = [
		"datazone:DeleteEnvironmentProfile",
	];
	/** IAM actions required for the DeleteFormType API call. */
	static readonly DELETE_FORM_TYPE: string[] = ["datazone:DeleteFormType"];
	/** IAM actions required for the DeleteGlossary API call. */
	static readonly DELETE_GLOSSARY: string[] = ["datazone:DeleteGlossary"];
	/** IAM actions required for the DeleteGlossaryTerm API call. */
	static readonly DELETE_GLOSSARY_TERM: string[] = [
		"datazone:DeleteGlossaryTerm",
	];
	/** IAM actions required for the DeleteLineageEvent API call. */
	static readonly DELETE_LINEAGE_EVENT: string[] = [
		"datazone:DeleteLineageEvent",
	];
	/** IAM actions required for the DeleteListing API call. */
	static readonly DELETE_LISTING: string[] = ["datazone:DeleteListing"];
	/** IAM actions required for the DeleteNotebook API call. */
	static readonly DELETE_NOTEBOOK: string[] = ["datazone:DeleteNotebook"];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DELETE_PROJECT: string[] = ["datazone:DeleteProject"];
	/** IAM actions required for the DeleteProjectMembership API call. */
	static readonly DELETE_PROJECT_MEMBERSHIP: string[] = [
		"datazone:DeleteProjectMembership",
	];
	/** IAM actions required for the DeleteProjectProfile API call. */
	static readonly DELETE_PROJECT_PROFILE: string[] = [
		"datazone:DeleteProjectProfile",
	];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DELETE_RULE: string[] = ["datazone:DeleteRule"];
	/** IAM actions required for the DeleteSubscriptionGrant API call. */
	static readonly DELETE_SUBSCRIPTION_GRANT: string[] = [
		"datazone:DeleteSubscriptionGrant",
	];
	/** IAM actions required for the DeleteSubscriptionRequest API call. */
	static readonly DELETE_SUBSCRIPTION_REQUEST: string[] = [
		"datazone:DeleteSubscriptionRequest",
	];
	/** IAM actions required for the DeleteSubscriptionTarget API call. */
	static readonly DELETE_SUBSCRIPTION_TARGET: string[] = [
		"datazone:DeleteSubscriptionTarget",
	];
	/** IAM actions required for the DeleteTimeSeriesDataPoints API call. */
	static readonly DELETE_TIME_SERIES_DATA_POINTS: string[] = [
		"datazone:DeleteTimeSeriesDataPoints",
	];
	/** IAM actions required for the DisassociateEnvironmentRole API call. */
	static readonly DISASSOCIATE_ENVIRONMENT_ROLE: string[] = [
		"datazone:DisassociateEnvironmentRole",
	];
	/** IAM actions required for the DisassociateGovernedTerms API call. */
	static readonly DISASSOCIATE_GOVERNED_TERMS: string[] = [
		"datazone:DisassociateGovernedTerms",
	];
	/** IAM actions required for the GetAccountPool API call. */
	static readonly GET_ACCOUNT_POOL: string[] = ["datazone:GetAccountPool"];
	/** IAM actions required for the GetAsset API call. */
	static readonly GET_ASSET: string[] = ["datazone:GetAsset"];
	/** IAM actions required for the GetAssetFilter API call. */
	static readonly GET_ASSET_FILTER: string[] = ["datazone:GetAssetFilter"];
	/** IAM actions required for the GetAssetType API call. */
	static readonly GET_ASSET_TYPE: string[] = ["datazone:GetAssetType"];
	/** IAM actions required for the GetConnection API call. */
	static readonly GET_CONNECTION: string[] = ["datazone:GetConnection"];
	/** IAM actions required for the GetDataExportConfiguration API call. */
	static readonly GET_DATA_EXPORT_CONFIGURATION: string[] = [
		"datazone:GetDataExportConfiguration",
	];
	/** IAM actions required for the GetDataProduct API call. */
	static readonly GET_DATA_PRODUCT: string[] = ["datazone:GetDataProduct"];
	/** IAM actions required for the GetDataSource API call. */
	static readonly GET_DATA_SOURCE: string[] = ["datazone:GetDataSource"];
	/** IAM actions required for the GetDataSourceRun API call. */
	static readonly GET_DATA_SOURCE_RUN: string[] = ["datazone:GetDataSourceRun"];
	/** IAM actions required for the GetDomain API call. */
	static readonly GET_DOMAIN: string[] = ["datazone:GetDomain"];
	/** IAM actions required for the GetDomainUnit API call. */
	static readonly GET_DOMAIN_UNIT: string[] = ["datazone:GetDomainUnit"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly GET_ENVIRONMENT: string[] = ["datazone:GetEnvironment"];
	/** IAM actions required for the GetEnvironmentAction API call. */
	static readonly GET_ENVIRONMENT_ACTION: string[] = [
		"datazone:GetEnvironmentAction",
	];
	/** IAM actions required for the GetEnvironmentBlueprint API call. */
	static readonly GET_ENVIRONMENT_BLUEPRINT: string[] = [
		"datazone:GetEnvironmentBlueprint",
	];
	/** IAM actions required for the GetEnvironmentBlueprintConfiguration API call. */
	static readonly GET_ENVIRONMENT_BLUEPRINT_CONFIGURATION: string[] = [
		"datazone:GetEnvironmentBlueprintConfiguration",
	];
	/** IAM actions required for the GetEnvironmentCredentials API call. */
	static readonly GET_ENVIRONMENT_CREDENTIALS: string[] = [
		"datazone:GetEnvironmentCredentials",
	];
	/** IAM actions required for the GetEnvironmentProfile API call. */
	static readonly GET_ENVIRONMENT_PROFILE: string[] = [
		"datazone:GetEnvironmentProfile",
	];
	/** IAM actions required for the GetFormType API call. */
	static readonly GET_FORM_TYPE: string[] = ["datazone:GetFormType"];
	/** IAM actions required for the GetGlossary API call. */
	static readonly GET_GLOSSARY: string[] = ["datazone:GetGlossary"];
	/** IAM actions required for the GetGlossaryTerm API call. */
	static readonly GET_GLOSSARY_TERM: string[] = ["datazone:GetGlossaryTerm"];
	/** IAM actions required for the GetGroupProfile API call. */
	static readonly GET_GROUP_PROFILE: string[] = ["datazone:GetGroupProfile"];
	/** IAM actions required for the GetIamPortalLoginUrl API call. */
	static readonly GET_IAM_PORTAL_LOGIN_URL: string[] = [
		"datazone:GetIamPortalLoginUrl",
	];
	/** IAM actions required for the GetJobRun API call. */
	static readonly GET_JOB_RUN: string[] = ["datazone:GetJobRun"];
	/** IAM actions required for the GetLineageEvent API call. */
	static readonly GET_LINEAGE_EVENT: string[] = ["datazone:GetLineageEvent"];
	/** IAM actions required for the GetLineageNode API call. */
	static readonly GET_LINEAGE_NODE: string[] = ["datazone:GetLineageNode"];
	/** IAM actions required for the GetListing API call. */
	static readonly GET_LISTING: string[] = ["datazone:GetListing"];
	/** IAM actions required for the GetMetadataGenerationRun API call. */
	static readonly GET_METADATA_GENERATION_RUN: string[] = [
		"datazone:GetMetadataGenerationRun",
	];
	/** IAM actions required for the GetNotebook API call. */
	static readonly GET_NOTEBOOK: string[] = ["datazone:GetNotebook"];
	/** IAM actions required for the GetNotebookExport API call. */
	static readonly GET_NOTEBOOK_EXPORT: string[] = [
		"datazone:GetNotebookExport",
	];
	/** IAM actions required for the GetNotebookRun API call. */
	static readonly GET_NOTEBOOK_RUN: string[] = ["datazone:GetNotebookRun"];
	/** IAM actions required for the GetProject API call. */
	static readonly GET_PROJECT: string[] = ["datazone:GetProject"];
	/** IAM actions required for the GetProjectProfile API call. */
	static readonly GET_PROJECT_PROFILE: string[] = [
		"datazone:GetProjectProfile",
	];
	/** IAM actions required for the GetRule API call. */
	static readonly GET_RULE: string[] = ["datazone:GetRule"];
	/** IAM actions required for the GetSubscription API call. */
	static readonly GET_SUBSCRIPTION: string[] = ["datazone:GetSubscription"];
	/** IAM actions required for the GetSubscriptionGrant API call. */
	static readonly GET_SUBSCRIPTION_GRANT: string[] = [
		"datazone:GetSubscriptionGrant",
	];
	/** IAM actions required for the GetSubscriptionRequestDetails API call. */
	static readonly GET_SUBSCRIPTION_REQUEST_DETAILS: string[] = [
		"datazone:GetSubscriptionRequestDetails",
	];
	/** IAM actions required for the GetSubscriptionTarget API call. */
	static readonly GET_SUBSCRIPTION_TARGET: string[] = [
		"datazone:GetSubscriptionTarget",
	];
	/** IAM actions required for the GetTimeSeriesDataPoint API call. */
	static readonly GET_TIME_SERIES_DATA_POINT: string[] = [
		"datazone:GetTimeSeriesDataPoint",
	];
	/** IAM actions required for the GetUserProfile API call. */
	static readonly GET_USER_PROFILE: string[] = ["datazone:GetUserProfile"];
	/** IAM actions required for the ListAccountPools API call. */
	static readonly LIST_ACCOUNT_POOLS: string[] = ["datazone:ListAccountPools"];
	/** IAM actions required for the ListAccountsInAccountPool API call. */
	static readonly LIST_ACCOUNTS_IN_ACCOUNT_POOL: string[] = [
		"datazone:ListAccountsInAccountPool",
	];
	/** IAM actions required for the ListAssetFilters API call. */
	static readonly LIST_ASSET_FILTERS: string[] = ["datazone:ListAssetFilters"];
	/** IAM actions required for the ListAssetRevisions API call. */
	static readonly LIST_ASSET_REVISIONS: string[] = [
		"datazone:ListAssetRevisions",
	];
	/** IAM actions required for the ListConnections API call. */
	static readonly LIST_CONNECTIONS: string[] = ["datazone:ListConnections"];
	/** IAM actions required for the ListDataProductRevisions API call. */
	static readonly LIST_DATA_PRODUCT_REVISIONS: string[] = [
		"datazone:ListDataProductRevisions",
	];
	/** IAM actions required for the ListDataSourceRunActivities API call. */
	static readonly LIST_DATA_SOURCE_RUN_ACTIVITIES: string[] = [
		"datazone:ListDataSourceRunActivities",
	];
	/** IAM actions required for the ListDataSourceRuns API call. */
	static readonly LIST_DATA_SOURCE_RUNS: string[] = [
		"datazone:ListDataSourceRuns",
	];
	/** IAM actions required for the ListDataSources API call. */
	static readonly LIST_DATA_SOURCES: string[] = ["datazone:ListDataSources"];
	/** IAM actions required for the ListDomainUnitsForParent API call. */
	static readonly LIST_DOMAIN_UNITS_FOR_PARENT: string[] = [
		"datazone:ListDomainUnitsForParent",
	];
	/** IAM actions required for the ListDomains API call. */
	static readonly LIST_DOMAINS: string[] = ["datazone:ListDomains"];
	/** IAM actions required for the ListEntityOwners API call. */
	static readonly LIST_ENTITY_OWNERS: string[] = ["datazone:ListEntityOwners"];
	/** IAM actions required for the ListEnvironmentActions API call. */
	static readonly LIST_ENVIRONMENT_ACTIONS: string[] = [
		"datazone:ListEnvironmentActions",
	];
	/** IAM actions required for the ListEnvironmentBlueprintConfigurations API call. */
	static readonly LIST_ENVIRONMENT_BLUEPRINT_CONFIGURATIONS: string[] = [
		"datazone:ListEnvironmentBlueprintConfigurations",
	];
	/** IAM actions required for the ListEnvironmentBlueprints API call. */
	static readonly LIST_ENVIRONMENT_BLUEPRINTS: string[] = [
		"datazone:ListEnvironmentBlueprints",
	];
	/** IAM actions required for the ListEnvironmentProfiles API call. */
	static readonly LIST_ENVIRONMENT_PROFILES: string[] = [
		"datazone:ListEnvironmentProfiles",
	];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly LIST_ENVIRONMENTS: string[] = ["datazone:ListEnvironments"];
	/** IAM actions required for the ListJobRuns API call. */
	static readonly LIST_JOB_RUNS: string[] = ["datazone:ListJobRuns"];
	/** IAM actions required for the ListLineageEvents API call. */
	static readonly LIST_LINEAGE_EVENTS: string[] = [
		"datazone:ListLineageEvents",
	];
	/** IAM actions required for the ListLineageNodeHistory API call. */
	static readonly LIST_LINEAGE_NODE_HISTORY: string[] = [
		"datazone:ListLineageNodeHistory",
	];
	/** IAM actions required for the ListMetadataGenerationRuns API call. */
	static readonly LIST_METADATA_GENERATION_RUNS: string[] = [
		"datazone:ListMetadataGenerationRuns",
	];
	/** IAM actions required for the ListNotebookRuns API call. */
	static readonly LIST_NOTEBOOK_RUNS: string[] = ["datazone:ListNotebookRuns"];
	/** IAM actions required for the ListNotebooks API call. */
	static readonly LIST_NOTEBOOKS: string[] = ["datazone:ListNotebooks"];
	/** IAM actions required for the ListNotifications API call. */
	static readonly LIST_NOTIFICATIONS: string[] = ["datazone:ListNotifications"];
	/** IAM actions required for the ListPolicyGrants API call. */
	static readonly LIST_POLICY_GRANTS: string[] = ["datazone:ListPolicyGrants"];
	/** IAM actions required for the ListProjectMemberships API call. */
	static readonly LIST_PROJECT_MEMBERSHIPS: string[] = [
		"datazone:ListProjectMemberships",
	];
	/** IAM actions required for the ListProjectProfiles API call. */
	static readonly LIST_PROJECT_PROFILES: string[] = [
		"datazone:ListProjectProfiles",
	];
	/** IAM actions required for the ListProjects API call. */
	static readonly LIST_PROJECTS: string[] = ["datazone:ListProjects"];
	/** IAM actions required for the ListRules API call. */
	static readonly LIST_RULES: string[] = ["datazone:ListRules"];
	/** IAM actions required for the ListSubscriptionGrants API call. */
	static readonly LIST_SUBSCRIPTION_GRANTS: string[] = [
		"datazone:ListSubscriptionGrants",
	];
	/** IAM actions required for the ListSubscriptionRequests API call. */
	static readonly LIST_SUBSCRIPTION_REQUESTS: string[] = [
		"datazone:ListSubscriptionRequests",
	];
	/** IAM actions required for the ListSubscriptionTargets API call. */
	static readonly LIST_SUBSCRIPTION_TARGETS: string[] = [
		"datazone:ListSubscriptionTargets",
	];
	/** IAM actions required for the ListSubscriptions API call. */
	static readonly LIST_SUBSCRIPTIONS: string[] = ["datazone:ListSubscriptions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"datazone:ListTagsForResource",
	];
	/** IAM actions required for the ListTimeSeriesDataPoints API call. */
	static readonly LIST_TIME_SERIES_DATA_POINTS: string[] = [
		"datazone:ListTimeSeriesDataPoints",
	];
	/** IAM actions required for the PostLineageEvent API call. */
	static readonly POST_LINEAGE_EVENT: string[] = ["datazone:PostLineageEvent"];
	/** IAM actions required for the PostTimeSeriesDataPoints API call. */
	static readonly POST_TIME_SERIES_DATA_POINTS: string[] = [
		"datazone:PostTimeSeriesDataPoints",
	];
	/** IAM actions required for the PutDataExportConfiguration API call. */
	static readonly PUT_DATA_EXPORT_CONFIGURATION: string[] = [
		"datazone:PutDataExportConfiguration",
	];
	/** IAM actions required for the PutEnvironmentBlueprintConfiguration API call. */
	static readonly PUT_ENVIRONMENT_BLUEPRINT_CONFIGURATION: string[] = [
		"iam:PassRole",
		"datazone:PutEnvironmentBlueprintConfiguration",
	];
	/** IAM actions required for the QueryGraph API call. */
	static readonly QUERY_GRAPH: string[] = ["datazone:QueryGraph"];
	/** IAM actions required for the RejectPredictions API call. */
	static readonly REJECT_PREDICTIONS: string[] = ["datazone:RejectPredictions"];
	/** IAM actions required for the RejectSubscriptionRequest API call. */
	static readonly REJECT_SUBSCRIPTION_REQUEST: string[] = [
		"datazone:RejectSubscriptionRequest",
	];
	/** IAM actions required for the RemoveEntityOwner API call. */
	static readonly REMOVE_ENTITY_OWNER: string[] = [
		"datazone:RemoveEntityOwner",
	];
	/** IAM actions required for the RemovePolicyGrant API call. */
	static readonly REMOVE_POLICY_GRANT: string[] = [
		"datazone:RemovePolicyGrant",
	];
	/** IAM actions required for the RevokeSubscription API call. */
	static readonly REVOKE_SUBSCRIPTION: string[] = [
		"datazone:RevokeSubscription",
	];
	/** IAM actions required for the Search API call. */
	static readonly SEARCH: string[] = ["datazone:Search"];
	/** IAM actions required for the SearchGroupProfiles API call. */
	static readonly SEARCH_GROUP_PROFILES: string[] = [
		"datazone:SearchGroupProfiles",
	];
	/** IAM actions required for the SearchListings API call. */
	static readonly SEARCH_LISTINGS: string[] = ["datazone:SearchListings"];
	/** IAM actions required for the SearchTypes API call. */
	static readonly SEARCH_TYPES: string[] = ["datazone:SearchTypes"];
	/** IAM actions required for the SearchUserProfiles API call. */
	static readonly SEARCH_USER_PROFILES: string[] = [
		"datazone:SearchUserProfiles",
	];
	/** IAM actions required for the StartDataSourceRun API call. */
	static readonly START_DATA_SOURCE_RUN: string[] = [
		"datazone:StartDataSourceRun",
	];
	/** IAM actions required for the StartMetadataGenerationRun API call. */
	static readonly START_METADATA_GENERATION_RUN: string[] = [
		"datazone:StartMetadataGenerationRun",
	];
	/** IAM actions required for the StartNotebookExport API call. */
	static readonly START_NOTEBOOK_EXPORT: string[] = [
		"datazone:StartNotebookExport",
	];
	/** IAM actions required for the StartNotebookImport API call. */
	static readonly START_NOTEBOOK_IMPORT: string[] = [
		"datazone:StartNotebookImport",
	];
	/** IAM actions required for the StartNotebookRun API call. */
	static readonly START_NOTEBOOK_RUN: string[] = ["datazone:StartNotebookRun"];
	/** IAM actions required for the StartNotebookSync API call. */
	static readonly START_NOTEBOOK_SYNC: string[] = [];
	/** IAM actions required for the StopNotebookRun API call. */
	static readonly STOP_NOTEBOOK_RUN: string[] = ["datazone:StopNotebookRun"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["datazone:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["datazone:UntagResource"];
	/** IAM actions required for the UpdateAccountPool API call. */
	static readonly UPDATE_ACCOUNT_POOL: string[] = [
		"iam:PassRole",
		"datazone:UpdateAccountPool",
	];
	/** IAM actions required for the UpdateAssetFilter API call. */
	static readonly UPDATE_ASSET_FILTER: string[] = [
		"datazone:UpdateAssetFilter",
	];
	/** IAM actions required for the UpdateConnection API call. */
	static readonly UPDATE_CONNECTION: string[] = ["datazone:UpdateConnection"];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UPDATE_DATA_SOURCE: string[] = [
		"iam:PassRole",
		"datazone:UpdateDataSource",
	];
	/** IAM actions required for the UpdateDomain API call. */
	static readonly UPDATE_DOMAIN: string[] = [
		"iam:PassRole",
		"datazone:UpdateDomain",
	];
	/** IAM actions required for the UpdateDomainUnit API call. */
	static readonly UPDATE_DOMAIN_UNIT: string[] = ["datazone:UpdateDomainUnit"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UPDATE_ENVIRONMENT: string[] = ["datazone:UpdateEnvironment"];
	/** IAM actions required for the UpdateEnvironmentAction API call. */
	static readonly UPDATE_ENVIRONMENT_ACTION: string[] = [
		"datazone:UpdateEnvironmentAction",
	];
	/** IAM actions required for the UpdateEnvironmentBlueprint API call. */
	static readonly UPDATE_ENVIRONMENT_BLUEPRINT: string[] = [
		"datazone:UpdateEnvironmentBlueprint",
	];
	/** IAM actions required for the UpdateEnvironmentProfile API call. */
	static readonly UPDATE_ENVIRONMENT_PROFILE: string[] = [
		"datazone:UpdateEnvironmentProfile",
	];
	/** IAM actions required for the UpdateGlossary API call. */
	static readonly UPDATE_GLOSSARY: string[] = ["datazone:UpdateGlossary"];
	/** IAM actions required for the UpdateGlossaryTerm API call. */
	static readonly UPDATE_GLOSSARY_TERM: string[] = [
		"datazone:UpdateGlossaryTerm",
	];
	/** IAM actions required for the UpdateGroupProfile API call. */
	static readonly UPDATE_GROUP_PROFILE: string[] = [
		"datazone:UpdateGroupProfile",
	];
	/** IAM actions required for the UpdateNotebook API call. */
	static readonly UPDATE_NOTEBOOK: string[] = ["datazone:UpdateNotebook"];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UPDATE_PROJECT: string[] = ["datazone:UpdateProject"];
	/** IAM actions required for the UpdateProjectProfile API call. */
	static readonly UPDATE_PROJECT_PROFILE: string[] = [
		"datazone:UpdateProjectProfile",
	];
	/** IAM actions required for the UpdateRootDomainUnitOwner API call. */
	static readonly UPDATE_ROOT_DOMAIN_UNIT_OWNER: string[] = [];
	/** IAM actions required for the UpdateRule API call. */
	static readonly UPDATE_RULE: string[] = ["datazone:UpdateRule"];
	/** IAM actions required for the UpdateSubscriptionGrantStatus API call. */
	static readonly UPDATE_SUBSCRIPTION_GRANT_STATUS: string[] = [
		"datazone:UpdateSubscriptionGrantStatus",
	];
	/** IAM actions required for the UpdateSubscriptionRequest API call. */
	static readonly UPDATE_SUBSCRIPTION_REQUEST: string[] = [
		"datazone:UpdateSubscriptionRequest",
	];
	/** IAM actions required for the UpdateSubscriptionTarget API call. */
	static readonly UPDATE_SUBSCRIPTION_TARGET: string[] = [
		"iam:PassRole",
		"datazone:UpdateSubscriptionTarget",
	];
	/** IAM actions required for the UpdateUserProfile API call. */
	static readonly UPDATE_USER_PROFILE: string[] = [
		"datazone:UpdateUserProfile",
	];
}

/**
 * Condition key constants and builders for datazone.
 */
export class DatazoneConditions {
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CREATE_DOMAIN_CONDITION_KEYS: string[] = [
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
	/** Condition key: datazone:domainId (String) */
	static readonly DOMAIN_ID = "datazone:domainId";
	/** Condition key: datazone:projectId (String) */
	static readonly PROJECT_ID = "datazone:projectId";
	/** Condition key: datazone:userId (String) */
	static readonly USER_ID = "datazone:userId";

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
	 * Generates a condition block for `datazone:domainId`.
	 */
	static domainId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "datazone:domainId": value } };
	}

	/**
	 * Generates a condition block for `datazone:projectId`.
	 */
	static projectId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "datazone:projectId": value } };
	}

	/**
	 * Generates a condition block for `datazone:userId`.
	 */
	static userId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "datazone:userId": value } };
	}
}
