// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/qbusiness.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the qbusiness service.
 */
export class QbusinessActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "qbusiness";

	/** [PermissionManagement] qbusiness:AllowVendedLogDeliveryForResource */
	static readonly AllowVendedLogDeliveryForResource =
		"qbusiness:AllowVendedLogDeliveryForResource";
	/** [Write] qbusiness:AssociatePermission */
	static readonly AssociatePermission = "qbusiness:AssociatePermission";
	/** [Write] qbusiness:BatchDeleteDocument */
	static readonly BatchDeleteDocument = "qbusiness:BatchDeleteDocument";
	/** [Write] qbusiness:BatchPutDocument */
	static readonly BatchPutDocument = "qbusiness:BatchPutDocument";
	/** [Write] qbusiness:CancelSubscription */
	static readonly CancelSubscription = "qbusiness:CancelSubscription";
	/** [Read] qbusiness:Chat */
	static readonly Chat = "qbusiness:Chat";
	/** [Read] qbusiness:ChatSync */
	static readonly ChatSync = "qbusiness:ChatSync";
	/** [Read] qbusiness:CheckDocumentAccess */
	static readonly CheckDocumentAccess = "qbusiness:CheckDocumentAccess";
	/** [Write] qbusiness:CreateAnonymousWebExperienceUrl */
	static readonly CreateAnonymousWebExperienceUrl =
		"qbusiness:CreateAnonymousWebExperienceUrl";
	/** [Write] qbusiness:CreateApplication */
	static readonly CreateApplication = "qbusiness:CreateApplication";
	/** [Write] qbusiness:CreateChatResponseConfiguration */
	static readonly CreateChatResponseConfiguration =
		"qbusiness:CreateChatResponseConfiguration";
	/** [Write] qbusiness:CreateDataAccessor */
	static readonly CreateDataAccessor = "qbusiness:CreateDataAccessor";
	/** [Write] qbusiness:CreateDataAccessorWithTti */
	static readonly CreateDataAccessorWithTti =
		"qbusiness:CreateDataAccessorWithTti";
	/** [Write] qbusiness:CreateDataSource */
	static readonly CreateDataSource = "qbusiness:CreateDataSource";
	/** [Write] qbusiness:CreateIndex */
	static readonly CreateIndex = "qbusiness:CreateIndex";
	/** [Write] qbusiness:CreateIntegration */
	static readonly CreateIntegration = "qbusiness:CreateIntegration";
	/** [Write] qbusiness:CreatePlugin */
	static readonly CreatePlugin = "qbusiness:CreatePlugin";
	/** [Write] qbusiness:CreateRetriever */
	static readonly CreateRetriever = "qbusiness:CreateRetriever";
	/** [Write] qbusiness:CreateSubscription */
	static readonly CreateSubscription = "qbusiness:CreateSubscription";
	/** [Write] qbusiness:CreateUser */
	static readonly CreateUser = "qbusiness:CreateUser";
	/** [Write] qbusiness:CreateWebExperience */
	static readonly CreateWebExperience = "qbusiness:CreateWebExperience";
	/** [Write] qbusiness:DeleteApplication */
	static readonly DeleteApplication = "qbusiness:DeleteApplication";
	/** [Write] qbusiness:DeleteAttachment */
	static readonly DeleteAttachment = "qbusiness:DeleteAttachment";
	/** [Write] qbusiness:DeleteChatControlsConfiguration */
	static readonly DeleteChatControlsConfiguration =
		"qbusiness:DeleteChatControlsConfiguration";
	/** [Write] qbusiness:DeleteChatResponseConfiguration */
	static readonly DeleteChatResponseConfiguration =
		"qbusiness:DeleteChatResponseConfiguration";
	/** [Write] qbusiness:DeleteConversation */
	static readonly DeleteConversation = "qbusiness:DeleteConversation";
	/** [Write] qbusiness:DeleteDataAccessor */
	static readonly DeleteDataAccessor = "qbusiness:DeleteDataAccessor";
	/** [Write] qbusiness:DeleteDataSource */
	static readonly DeleteDataSource = "qbusiness:DeleteDataSource";
	/** [Write] qbusiness:DeleteGroup */
	static readonly DeleteGroup = "qbusiness:DeleteGroup";
	/** [Write] qbusiness:DeleteIndex */
	static readonly DeleteIndex = "qbusiness:DeleteIndex";
	/** [Write] qbusiness:DeleteIntegration */
	static readonly DeleteIntegration = "qbusiness:DeleteIntegration";
	/** [Write] qbusiness:DeletePlugin */
	static readonly DeletePlugin = "qbusiness:DeletePlugin";
	/** [Write] qbusiness:DeleteRetriever */
	static readonly DeleteRetriever = "qbusiness:DeleteRetriever";
	/** [Write] qbusiness:DeleteUser */
	static readonly DeleteUser = "qbusiness:DeleteUser";
	/** [Write] qbusiness:DeleteWebExperience */
	static readonly DeleteWebExperience = "qbusiness:DeleteWebExperience";
	/** [Write] qbusiness:DisableAclOnDataSource */
	static readonly DisableAclOnDataSource = "qbusiness:DisableAclOnDataSource";
	/** [Write] qbusiness:DisassociatePermission */
	static readonly DisassociatePermission = "qbusiness:DisassociatePermission";
	/** [Read] qbusiness:GetApplication */
	static readonly actionGetApplication = "qbusiness:GetApplication";
	/** [List] qbusiness:GetChatControlsConfiguration */
	static readonly actionGetChatControlsConfiguration =
		"qbusiness:GetChatControlsConfiguration";
	/** [Read] qbusiness:GetChatResponseConfiguration */
	static readonly actionGetChatResponseConfiguration =
		"qbusiness:GetChatResponseConfiguration";
	/** [Read] qbusiness:GetDataAccessor */
	static readonly actionGetDataAccessor = "qbusiness:GetDataAccessor";
	/** [Read] qbusiness:GetDataSource */
	static readonly actionGetDataSource = "qbusiness:GetDataSource";
	/** [Read] qbusiness:GetDocumentContent */
	static readonly actionGetDocumentContent = "qbusiness:GetDocumentContent";
	/** [Read] qbusiness:GetGroup */
	static readonly actionGetGroup = "qbusiness:GetGroup";
	/** [Read] qbusiness:GetIndex */
	static readonly actionGetIndex = "qbusiness:GetIndex";
	/** [Read] qbusiness:GetIntegration */
	static readonly actionGetIntegration = "qbusiness:GetIntegration";
	/** [Read] qbusiness:GetMedia */
	static readonly actionGetMedia = "qbusiness:GetMedia";
	/** [Read] qbusiness:GetPlugin */
	static readonly actionGetPlugin = "qbusiness:GetPlugin";
	/** [Read] qbusiness:GetPolicy */
	static readonly actionGetPolicy = "qbusiness:GetPolicy";
	/** [Read] qbusiness:GetRetriever */
	static readonly actionGetRetriever = "qbusiness:GetRetriever";
	/** [Read] qbusiness:GetUser */
	static readonly actionGetUser = "qbusiness:GetUser";
	/** [Read] qbusiness:GetWebExperience */
	static readonly actionGetWebExperience = "qbusiness:GetWebExperience";
	/** [List] qbusiness:ListApplications */
	static readonly ListApplications = "qbusiness:ListApplications";
	/** [List] qbusiness:ListAttachments */
	static readonly ListAttachments = "qbusiness:ListAttachments";
	/** [List] qbusiness:ListChatResponseConfigurations */
	static readonly ListChatResponseConfigurations =
		"qbusiness:ListChatResponseConfigurations";
	/** [List] qbusiness:ListConversations */
	static readonly ListConversations = "qbusiness:ListConversations";
	/** [List] qbusiness:ListDataAccessors */
	static readonly ListDataAccessors = "qbusiness:ListDataAccessors";
	/** [List] qbusiness:ListDataSourceSyncJobs */
	static readonly ListDataSourceSyncJobs = "qbusiness:ListDataSourceSyncJobs";
	/** [List] qbusiness:ListDataSources */
	static readonly ListDataSources = "qbusiness:ListDataSources";
	/** [List] qbusiness:ListDocuments */
	static readonly ListDocuments = "qbusiness:ListDocuments";
	/** [List] qbusiness:ListGroups */
	static readonly ListGroups = "qbusiness:ListGroups";
	/** [List] qbusiness:ListIndices */
	static readonly ListIndices = "qbusiness:ListIndices";
	/** [List] qbusiness:ListIntegrations */
	static readonly ListIntegrations = "qbusiness:ListIntegrations";
	/** [List] qbusiness:ListMessages */
	static readonly ListMessages = "qbusiness:ListMessages";
	/** [Read] qbusiness:ListPluginActions */
	static readonly ListPluginActions = "qbusiness:ListPluginActions";
	/** [Read] qbusiness:ListPluginTypeActions */
	static readonly ListPluginTypeActions = "qbusiness:ListPluginTypeActions";
	/** [Read] qbusiness:ListPluginTypeMetadata */
	static readonly ListPluginTypeMetadata = "qbusiness:ListPluginTypeMetadata";
	/** [List] qbusiness:ListPlugins */
	static readonly ListPlugins = "qbusiness:ListPlugins";
	/** [List] qbusiness:ListRetrievers */
	static readonly ListRetrievers = "qbusiness:ListRetrievers";
	/** [List] qbusiness:ListSubscriptions */
	static readonly ListSubscriptions = "qbusiness:ListSubscriptions";
	/** [Read] qbusiness:ListTagsForResource */
	static readonly ListTagsForResource = "qbusiness:ListTagsForResource";
	/** [List] qbusiness:ListWebExperiences */
	static readonly ListWebExperiences = "qbusiness:ListWebExperiences";
	/** [Write] qbusiness:PutFeedback */
	static readonly PutFeedback = "qbusiness:PutFeedback";
	/** [Write] qbusiness:PutGroup */
	static readonly PutGroup = "qbusiness:PutGroup";
	/** [Write] qbusiness:PutResourcePolicy */
	static readonly PutResourcePolicy = "qbusiness:PutResourcePolicy";
	/** [Read] qbusiness:SearchRelevantContent */
	static readonly SearchRelevantContent = "qbusiness:SearchRelevantContent";
	/** [Write] qbusiness:StartDataSourceSyncJob */
	static readonly StartDataSourceSyncJob = "qbusiness:StartDataSourceSyncJob";
	/** [Write] qbusiness:StartDeployment */
	static readonly StartDeployment = "qbusiness:StartDeployment";
	/** [Write] qbusiness:StopDataSourceSyncJob */
	static readonly StopDataSourceSyncJob = "qbusiness:StopDataSourceSyncJob";
	/** [Tagging] qbusiness:TagResource */
	static readonly TagResource = "qbusiness:TagResource";
	/** [Tagging] qbusiness:UntagResource */
	static readonly UntagResource = "qbusiness:UntagResource";
	/** [Write] qbusiness:UpdateApplication */
	static readonly UpdateApplication = "qbusiness:UpdateApplication";
	/** [Write] qbusiness:UpdateChatControlsConfiguration */
	static readonly UpdateChatControlsConfiguration =
		"qbusiness:UpdateChatControlsConfiguration";
	/** [Write] qbusiness:UpdateChatResponseConfiguration */
	static readonly UpdateChatResponseConfiguration =
		"qbusiness:UpdateChatResponseConfiguration";
	/** [Write] qbusiness:UpdateDataAccessor */
	static readonly UpdateDataAccessor = "qbusiness:UpdateDataAccessor";
	/** [Write] qbusiness:UpdateDataSource */
	static readonly UpdateDataSource = "qbusiness:UpdateDataSource";
	/** [Write] qbusiness:UpdateIndex */
	static readonly UpdateIndex = "qbusiness:UpdateIndex";
	/** [Write] qbusiness:UpdateIntegration */
	static readonly UpdateIntegration = "qbusiness:UpdateIntegration";
	/** [Write] qbusiness:UpdatePlugin */
	static readonly UpdatePlugin = "qbusiness:UpdatePlugin";
	/** [Write] qbusiness:UpdateRetriever */
	static readonly UpdateRetriever = "qbusiness:UpdateRetriever";
	/** [Write] qbusiness:UpdateSubscription */
	static readonly UpdateSubscription = "qbusiness:UpdateSubscription";
	/** [Write] qbusiness:UpdateUser */
	static readonly UpdateUser = "qbusiness:UpdateUser";
	/** [Write] qbusiness:UpdateWebExperience */
	static readonly UpdateWebExperience = "qbusiness:UpdateWebExperience";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		QbusinessActions.Chat,
		QbusinessActions.ChatSync,
		QbusinessActions.CheckDocumentAccess,
		QbusinessActions.actionGetApplication,
		QbusinessActions.actionGetChatResponseConfiguration,
		QbusinessActions.actionGetDataAccessor,
		QbusinessActions.actionGetDataSource,
		QbusinessActions.actionGetDocumentContent,
		QbusinessActions.actionGetGroup,
		QbusinessActions.actionGetIndex,
		QbusinessActions.actionGetIntegration,
		QbusinessActions.actionGetMedia,
		QbusinessActions.actionGetPlugin,
		QbusinessActions.actionGetPolicy,
		QbusinessActions.actionGetRetriever,
		QbusinessActions.actionGetUser,
		QbusinessActions.actionGetWebExperience,
		QbusinessActions.ListPluginActions,
		QbusinessActions.ListPluginTypeActions,
		QbusinessActions.ListPluginTypeMetadata,
		QbusinessActions.ListTagsForResource,
		QbusinessActions.SearchRelevantContent,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		QbusinessActions.AssociatePermission,
		QbusinessActions.BatchDeleteDocument,
		QbusinessActions.BatchPutDocument,
		QbusinessActions.CancelSubscription,
		QbusinessActions.CreateAnonymousWebExperienceUrl,
		QbusinessActions.CreateApplication,
		QbusinessActions.CreateChatResponseConfiguration,
		QbusinessActions.CreateDataAccessor,
		QbusinessActions.CreateDataAccessorWithTti,
		QbusinessActions.CreateDataSource,
		QbusinessActions.CreateIndex,
		QbusinessActions.CreateIntegration,
		QbusinessActions.CreatePlugin,
		QbusinessActions.CreateRetriever,
		QbusinessActions.CreateSubscription,
		QbusinessActions.CreateUser,
		QbusinessActions.CreateWebExperience,
		QbusinessActions.DeleteApplication,
		QbusinessActions.DeleteAttachment,
		QbusinessActions.DeleteChatControlsConfiguration,
		QbusinessActions.DeleteChatResponseConfiguration,
		QbusinessActions.DeleteConversation,
		QbusinessActions.DeleteDataAccessor,
		QbusinessActions.DeleteDataSource,
		QbusinessActions.DeleteGroup,
		QbusinessActions.DeleteIndex,
		QbusinessActions.DeleteIntegration,
		QbusinessActions.DeletePlugin,
		QbusinessActions.DeleteRetriever,
		QbusinessActions.DeleteUser,
		QbusinessActions.DeleteWebExperience,
		QbusinessActions.DisableAclOnDataSource,
		QbusinessActions.DisassociatePermission,
		QbusinessActions.PutFeedback,
		QbusinessActions.PutGroup,
		QbusinessActions.PutResourcePolicy,
		QbusinessActions.StartDataSourceSyncJob,
		QbusinessActions.StartDeployment,
		QbusinessActions.StopDataSourceSyncJob,
		QbusinessActions.UpdateApplication,
		QbusinessActions.UpdateChatControlsConfiguration,
		QbusinessActions.UpdateChatResponseConfiguration,
		QbusinessActions.UpdateDataAccessor,
		QbusinessActions.UpdateDataSource,
		QbusinessActions.UpdateIndex,
		QbusinessActions.UpdateIntegration,
		QbusinessActions.UpdatePlugin,
		QbusinessActions.UpdateRetriever,
		QbusinessActions.UpdateSubscription,
		QbusinessActions.UpdateUser,
		QbusinessActions.UpdateWebExperience,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		QbusinessActions.actionGetChatControlsConfiguration,
		QbusinessActions.ListApplications,
		QbusinessActions.ListAttachments,
		QbusinessActions.ListChatResponseConfigurations,
		QbusinessActions.ListConversations,
		QbusinessActions.ListDataAccessors,
		QbusinessActions.ListDataSourceSyncJobs,
		QbusinessActions.ListDataSources,
		QbusinessActions.ListDocuments,
		QbusinessActions.ListGroups,
		QbusinessActions.ListIndices,
		QbusinessActions.ListIntegrations,
		QbusinessActions.ListMessages,
		QbusinessActions.ListPlugins,
		QbusinessActions.ListRetrievers,
		QbusinessActions.ListSubscriptions,
		QbusinessActions.ListWebExperiences,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		QbusinessActions.AllowVendedLogDeliveryForResource,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		QbusinessActions.TagResource,
		QbusinessActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface QbusinessApplicationArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a application ARN.
 */
export interface QbusinessApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a chat-response-configuration ARN.
 */
export interface QbusinessChatResponseConfigurationArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The ChatResponseConfigurationId component of the ARN. */
	readonly chatResponseConfigurationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a chat-response-configuration ARN.
 */
export interface QbusinessChatResponseConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The ChatResponseConfigurationId component. */
	readonly chatResponseConfigurationId: string;
}

/**
 * Properties for building a data-accessor ARN.
 */
export interface QbusinessDataAccessorArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The DataAccessorId component of the ARN. */
	readonly dataAccessorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a data-accessor ARN.
 */
export interface QbusinessDataAccessorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The DataAccessorId component. */
	readonly dataAccessorId: string;
}

/**
 * Properties for building a data-source ARN.
 */
export interface QbusinessDataSourceArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The IndexId component of the ARN. */
	readonly indexId: string;
	/** The DataSourceId component of the ARN. */
	readonly dataSourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a data-source ARN.
 */
export interface QbusinessDataSourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The IndexId component. */
	readonly indexId: string;
	/** The DataSourceId component. */
	readonly dataSourceId: string;
}

/**
 * Properties for building a index ARN.
 */
export interface QbusinessIndexArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The IndexId component of the ARN. */
	readonly indexId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a index ARN.
 */
export interface QbusinessIndexArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The IndexId component. */
	readonly indexId: string;
}

/**
 * Properties for building a integration ARN.
 */
export interface QbusinessIntegrationArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The IntegrationId component of the ARN. */
	readonly integrationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a integration ARN.
 */
export interface QbusinessIntegrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The IntegrationId component. */
	readonly integrationId: string;
}

/**
 * Properties for building a plugin ARN.
 */
export interface QbusinessPluginArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The PluginId component of the ARN. */
	readonly pluginId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a plugin ARN.
 */
export interface QbusinessPluginArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The PluginId component. */
	readonly pluginId: string;
}

/**
 * Properties for building a retriever ARN.
 */
export interface QbusinessRetrieverArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The RetrieverId component of the ARN. */
	readonly retrieverId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a retriever ARN.
 */
export interface QbusinessRetrieverArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The RetrieverId component. */
	readonly retrieverId: string;
}

/**
 * Properties for building a subscription ARN.
 */
export interface QbusinessSubscriptionArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The SubscriptionId component of the ARN. */
	readonly subscriptionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a subscription ARN.
 */
export interface QbusinessSubscriptionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The SubscriptionId component. */
	readonly subscriptionId: string;
}

/**
 * Properties for building a web-experience ARN.
 */
export interface QbusinessWebExperienceArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The WebExperienceId component of the ARN. */
	readonly webExperienceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a web-experience ARN.
 */
export interface QbusinessWebExperienceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The WebExperienceId component. */
	readonly webExperienceId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)$/;
const ChatResponseConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/chat-response-configuration\/(?<chatResponseConfigurationId>[^:/?]+)$/;
const DataAccessorArnRegex =
	/^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/data-accessor\/(?<dataAccessorId>[^:/?]+)$/;
const DataSourceArnRegex =
	/^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/index\/(?<indexId>[^:/?]+)\/data-source\/(?<dataSourceId>[^:/?]+)$/;
const IndexArnRegex =
	/^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/index\/(?<indexId>[^:/?]+)$/;
const IntegrationArnRegex =
	/^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/integration\/(?<integrationId>[^:/?]+)$/;
const PluginArnRegex =
	/^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/plugin\/(?<pluginId>[^:/?]+)$/;
const RetrieverArnRegex =
	/^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/retriever\/(?<retrieverId>[^:/?]+)$/;
const SubscriptionArnRegex =
	/^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/subscription\/(?<subscriptionId>[^:/?]+)$/;
const WebExperienceArnRegex =
	/^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/web-experience\/(?<webExperienceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for qbusiness resources.
 */
export class QbusinessResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: QbusinessApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:qbusiness:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): QbusinessApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the chat-response-configuration resource.
	 */
	static chatResponseConfiguration(
		props: QbusinessChatResponseConfigurationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:qbusiness:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/chat-response-configuration/${props.chatResponseConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the chat-response-configuration resource.
	 */
	static isValidChatResponseConfigurationArn(arn: string): boolean {
		return ChatResponseConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a chat-response-configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChatResponseConfigurationArn(
		arn: string,
	): QbusinessChatResponseConfigurationArnComponents {
		const match = ChatResponseConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid chat-response-configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			chatResponseConfigurationId: match.groups!.chatResponseConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the data-accessor resource.
	 */
	static dataAccessor(props: QbusinessDataAccessorArnProps): string {
		return `arn:${props.partition ?? "aws"}:qbusiness:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/data-accessor/${props.dataAccessorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-accessor resource.
	 */
	static isValidDataAccessorArn(arn: string): boolean {
		return DataAccessorArnRegex.test(arn);
	}

	/**
	 * Parses a data-accessor ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataAccessorArn(arn: string): QbusinessDataAccessorArnComponents {
		const match = DataAccessorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-accessor ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			dataAccessorId: match.groups!.dataAccessorId,
		};
	}

	/**
	 * Builds an ARN for the data-source resource.
	 */
	static dataSource(props: QbusinessDataSourceArnProps): string {
		return `arn:${props.partition ?? "aws"}:qbusiness:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/index/${props.indexId}/data-source/${props.dataSourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-source resource.
	 */
	static isValidDataSourceArn(arn: string): boolean {
		return DataSourceArnRegex.test(arn);
	}

	/**
	 * Parses a data-source ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataSourceArn(arn: string): QbusinessDataSourceArnComponents {
		const match = DataSourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-source ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			indexId: match.groups!.indexId,
			dataSourceId: match.groups!.dataSourceId,
		};
	}

	/**
	 * Builds an ARN for the index resource.
	 */
	static index(props: QbusinessIndexArnProps): string {
		return `arn:${props.partition ?? "aws"}:qbusiness:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/index/${props.indexId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the index resource.
	 */
	static isValidIndexArn(arn: string): boolean {
		return IndexArnRegex.test(arn);
	}

	/**
	 * Parses a index ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIndexArn(arn: string): QbusinessIndexArnComponents {
		const match = IndexArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid index ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			indexId: match.groups!.indexId,
		};
	}

	/**
	 * Builds an ARN for the integration resource.
	 */
	static integration(props: QbusinessIntegrationArnProps): string {
		return `arn:${props.partition ?? "aws"}:qbusiness:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/integration/${props.integrationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the integration resource.
	 */
	static isValidIntegrationArn(arn: string): boolean {
		return IntegrationArnRegex.test(arn);
	}

	/**
	 * Parses a integration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntegrationArn(arn: string): QbusinessIntegrationArnComponents {
		const match = IntegrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid integration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			integrationId: match.groups!.integrationId,
		};
	}

	/**
	 * Builds an ARN for the plugin resource.
	 */
	static plugin(props: QbusinessPluginArnProps): string {
		return `arn:${props.partition ?? "aws"}:qbusiness:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/plugin/${props.pluginId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the plugin resource.
	 */
	static isValidPluginArn(arn: string): boolean {
		return PluginArnRegex.test(arn);
	}

	/**
	 * Parses a plugin ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePluginArn(arn: string): QbusinessPluginArnComponents {
		const match = PluginArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid plugin ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			pluginId: match.groups!.pluginId,
		};
	}

	/**
	 * Builds an ARN for the retriever resource.
	 */
	static retriever(props: QbusinessRetrieverArnProps): string {
		return `arn:${props.partition ?? "aws"}:qbusiness:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/retriever/${props.retrieverId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the retriever resource.
	 */
	static isValidRetrieverArn(arn: string): boolean {
		return RetrieverArnRegex.test(arn);
	}

	/**
	 * Parses a retriever ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRetrieverArn(arn: string): QbusinessRetrieverArnComponents {
		const match = RetrieverArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid retriever ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			retrieverId: match.groups!.retrieverId,
		};
	}

	/**
	 * Builds an ARN for the subscription resource.
	 */
	static subscription(props: QbusinessSubscriptionArnProps): string {
		return `arn:${props.partition ?? "aws"}:qbusiness:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/subscription/${props.subscriptionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the subscription resource.
	 */
	static isValidSubscriptionArn(arn: string): boolean {
		return SubscriptionArnRegex.test(arn);
	}

	/**
	 * Parses a subscription ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSubscriptionArn(arn: string): QbusinessSubscriptionArnComponents {
		const match = SubscriptionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid subscription ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			subscriptionId: match.groups!.subscriptionId,
		};
	}

	/**
	 * Builds an ARN for the web-experience resource.
	 */
	static webExperience(props: QbusinessWebExperienceArnProps): string {
		return `arn:${props.partition ?? "aws"}:qbusiness:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/web-experience/${props.webExperienceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the web-experience resource.
	 */
	static isValidWebExperienceArn(arn: string): boolean {
		return WebExperienceArnRegex.test(arn);
	}

	/**
	 * Parses a web-experience ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWebExperienceArn(
		arn: string,
	): QbusinessWebExperienceArnComponents {
		const match = WebExperienceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid web-experience ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			webExperienceId: match.groups!.webExperienceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for qbusiness.
 */
export class QbusinessOperations {
	/** IAM actions required for the AssociatePermission API call. */
	static readonly AssociatePermission: string[] = [
		"qbusiness:AssociatePermission",
		"qbusiness:PutResourcePolicy",
	];
	/** IAM actions required for the BatchDeleteDocument API call. */
	static readonly BatchDeleteDocument: string[] = [
		"qbusiness:BatchDeleteDocument",
	];
	/** IAM actions required for the BatchPutDocument API call. */
	static readonly BatchPutDocument: string[] = [
		"qbusiness:BatchPutDocument",
		"iam:PassRole",
	];
	/** IAM actions required for the CancelSubscription API call. */
	static readonly CancelSubscription: string[] = [
		"qbusiness:CancelSubscription",
	];
	/** IAM actions required for the Chat API call. */
	static readonly Chat: string[] = ["qbusiness:Chat"];
	/** IAM actions required for the ChatSync API call. */
	static readonly ChatSync: string[] = ["qbusiness:ChatSync"];
	/** IAM actions required for the CheckDocumentAccess API call. */
	static readonly CheckDocumentAccess: string[] = [
		"qbusiness:CheckDocumentAccess",
	];
	/** IAM actions required for the CreateAnonymousWebExperienceUrl API call. */
	static readonly CreateAnonymousWebExperienceUrl: string[] = [
		"qbusiness:CreateAnonymousWebExperienceUrl",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [
		"qbusiness:CreateApplication",
		"iam:PassRole",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreateChatResponseConfiguration API call. */
	static readonly CreateChatResponseConfiguration: string[] = [
		"qbusiness:CreateChatResponseConfiguration",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreateDataAccessor API call. */
	static readonly CreateDataAccessor: string[] = [
		"qbusiness:CreateDataAccessor",
		"qbusiness:CreateDataAccessorWithTti",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreateDataSource API call. */
	static readonly CreateDataSource: string[] = [
		"qbusiness:CreateDataSource",
		"qbusiness:DisableAclOnDataSource",
		"iam:PassRole",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreateIndex API call. */
	static readonly CreateIndex: string[] = [
		"qbusiness:CreateIndex",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreatePlugin API call. */
	static readonly CreatePlugin: string[] = [
		"qbusiness:CreatePlugin",
		"iam:PassRole",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreateRetriever API call. */
	static readonly CreateRetriever: string[] = [
		"qbusiness:CreateRetriever",
		"iam:PassRole",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreateSubscription API call. */
	static readonly CreateSubscription: string[] = [
		"qbusiness:CreateSubscription",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = ["qbusiness:CreateUser"];
	/** IAM actions required for the CreateWebExperience API call. */
	static readonly CreateWebExperience: string[] = [
		"qbusiness:CreateWebExperience",
		"iam:PassRole",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = ["qbusiness:DeleteApplication"];
	/** IAM actions required for the DeleteAttachment API call. */
	static readonly DeleteAttachment: string[] = ["qbusiness:DeleteAttachment"];
	/** IAM actions required for the DeleteChatControlsConfiguration API call. */
	static readonly DeleteChatControlsConfiguration: string[] = [
		"qbusiness:DeleteChatControlsConfiguration",
	];
	/** IAM actions required for the DeleteChatResponseConfiguration API call. */
	static readonly DeleteChatResponseConfiguration: string[] = [
		"qbusiness:DeleteChatResponseConfiguration",
	];
	/** IAM actions required for the DeleteConversation API call. */
	static readonly DeleteConversation: string[] = [
		"qbusiness:DeleteConversation",
	];
	/** IAM actions required for the DeleteDataAccessor API call. */
	static readonly DeleteDataAccessor: string[] = [
		"qbusiness:DeleteDataAccessor",
	];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DeleteDataSource: string[] = ["qbusiness:DeleteDataSource"];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DeleteGroup: string[] = ["qbusiness:DeleteGroup"];
	/** IAM actions required for the DeleteIndex API call. */
	static readonly DeleteIndex: string[] = ["qbusiness:DeleteIndex"];
	/** IAM actions required for the DeletePlugin API call. */
	static readonly DeletePlugin: string[] = ["qbusiness:DeletePlugin"];
	/** IAM actions required for the DeleteRetriever API call. */
	static readonly DeleteRetriever: string[] = ["qbusiness:DeleteRetriever"];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = ["qbusiness:DeleteUser"];
	/** IAM actions required for the DeleteWebExperience API call. */
	static readonly DeleteWebExperience: string[] = [
		"qbusiness:DeleteWebExperience",
	];
	/** IAM actions required for the DisassociatePermission API call. */
	static readonly DisassociatePermission: string[] = [
		"qbusiness:DisassociatePermission",
		"qbusiness:PutResourcePolicy",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = ["qbusiness:GetApplication"];
	/** IAM actions required for the GetChatControlsConfiguration API call. */
	static readonly opGetChatControlsConfiguration: string[] = [
		"qbusiness:GetChatControlsConfiguration",
	];
	/** IAM actions required for the GetChatResponseConfiguration API call. */
	static readonly opGetChatResponseConfiguration: string[] = [
		"qbusiness:GetChatResponseConfiguration",
	];
	/** IAM actions required for the GetDataAccessor API call. */
	static readonly opGetDataAccessor: string[] = ["qbusiness:GetDataAccessor"];
	/** IAM actions required for the GetDataSource API call. */
	static readonly opGetDataSource: string[] = ["qbusiness:GetDataSource"];
	/** IAM actions required for the GetDocumentContent API call. */
	static readonly opGetDocumentContent: string[] = [
		"qbusiness:GetDocumentContent",
	];
	/** IAM actions required for the GetGroup API call. */
	static readonly opGetGroup: string[] = ["qbusiness:GetGroup"];
	/** IAM actions required for the GetIndex API call. */
	static readonly opGetIndex: string[] = ["qbusiness:GetIndex"];
	/** IAM actions required for the GetMedia API call. */
	static readonly opGetMedia: string[] = ["qbusiness:GetMedia"];
	/** IAM actions required for the GetPlugin API call. */
	static readonly opGetPlugin: string[] = ["qbusiness:GetPlugin"];
	/** IAM actions required for the GetPolicy API call. */
	static readonly opGetPolicy: string[] = ["qbusiness:GetPolicy"];
	/** IAM actions required for the GetRetriever API call. */
	static readonly opGetRetriever: string[] = ["qbusiness:GetRetriever"];
	/** IAM actions required for the GetUser API call. */
	static readonly opGetUser: string[] = ["qbusiness:GetUser"];
	/** IAM actions required for the GetWebExperience API call. */
	static readonly opGetWebExperience: string[] = ["qbusiness:GetWebExperience"];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = ["qbusiness:ListApplications"];
	/** IAM actions required for the ListAttachments API call. */
	static readonly ListAttachments: string[] = ["qbusiness:ListAttachments"];
	/** IAM actions required for the ListChatResponseConfigurations API call. */
	static readonly ListChatResponseConfigurations: string[] = [
		"qbusiness:ListChatResponseConfigurations",
	];
	/** IAM actions required for the ListConversations API call. */
	static readonly ListConversations: string[] = ["qbusiness:ListConversations"];
	/** IAM actions required for the ListDataAccessors API call. */
	static readonly ListDataAccessors: string[] = ["qbusiness:ListDataAccessors"];
	/** IAM actions required for the ListDataSourceSyncJobs API call. */
	static readonly ListDataSourceSyncJobs: string[] = [
		"qbusiness:ListDataSourceSyncJobs",
	];
	/** IAM actions required for the ListDataSources API call. */
	static readonly ListDataSources: string[] = ["qbusiness:ListDataSources"];
	/** IAM actions required for the ListDocuments API call. */
	static readonly ListDocuments: string[] = ["qbusiness:ListDocuments"];
	/** IAM actions required for the ListGroups API call. */
	static readonly ListGroups: string[] = ["qbusiness:ListGroups"];
	/** IAM actions required for the ListIndices API call. */
	static readonly ListIndices: string[] = ["qbusiness:ListIndices"];
	/** IAM actions required for the ListMessages API call. */
	static readonly ListMessages: string[] = ["qbusiness:ListMessages"];
	/** IAM actions required for the ListPluginActions API call. */
	static readonly ListPluginActions: string[] = ["qbusiness:ListPluginActions"];
	/** IAM actions required for the ListPluginTypeActions API call. */
	static readonly ListPluginTypeActions: string[] = [
		"qbusiness:ListPluginTypeActions",
	];
	/** IAM actions required for the ListPluginTypeMetadata API call. */
	static readonly ListPluginTypeMetadata: string[] = [
		"qbusiness:ListPluginTypeMetadata",
	];
	/** IAM actions required for the ListPlugins API call. */
	static readonly ListPlugins: string[] = ["qbusiness:ListPlugins"];
	/** IAM actions required for the ListRetrievers API call. */
	static readonly ListRetrievers: string[] = ["qbusiness:ListRetrievers"];
	/** IAM actions required for the ListSubscriptions API call. */
	static readonly ListSubscriptions: string[] = ["qbusiness:ListSubscriptions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"qbusiness:ListTagsForResource",
	];
	/** IAM actions required for the ListWebExperiences API call. */
	static readonly ListWebExperiences: string[] = [
		"qbusiness:ListWebExperiences",
	];
	/** IAM actions required for the PutFeedback API call. */
	static readonly PutFeedback: string[] = ["qbusiness:PutFeedback"];
	/** IAM actions required for the PutGroup API call. */
	static readonly PutGroup: string[] = ["iam:PassRole", "qbusiness:PutGroup"];
	/** IAM actions required for the SearchRelevantContent API call. */
	static readonly SearchRelevantContent: string[] = [
		"qbusiness:SearchRelevantContent",
	];
	/** IAM actions required for the StartDataSourceSyncJob API call. */
	static readonly StartDataSourceSyncJob: string[] = [
		"qbusiness:StartDataSourceSyncJob",
	];
	/** IAM actions required for the StopDataSourceSyncJob API call. */
	static readonly StopDataSourceSyncJob: string[] = [
		"qbusiness:StopDataSourceSyncJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["qbusiness:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["qbusiness:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [
		"iam:PassRole",
		"qbusiness:UpdateApplication",
	];
	/** IAM actions required for the UpdateChatControlsConfiguration API call. */
	static readonly UpdateChatControlsConfiguration: string[] = [
		"qbusiness:UpdateChatControlsConfiguration",
	];
	/** IAM actions required for the UpdateChatResponseConfiguration API call. */
	static readonly UpdateChatResponseConfiguration: string[] = [
		"qbusiness:UpdateChatResponseConfiguration",
	];
	/** IAM actions required for the UpdateDataAccessor API call. */
	static readonly UpdateDataAccessor: string[] = [
		"qbusiness:UpdateDataAccessor",
	];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UpdateDataSource: string[] = [
		"iam:PassRole",
		"qbusiness:UpdateDataSource",
	];
	/** IAM actions required for the UpdateIndex API call. */
	static readonly UpdateIndex: string[] = ["qbusiness:UpdateIndex"];
	/** IAM actions required for the UpdatePlugin API call. */
	static readonly UpdatePlugin: string[] = [
		"iam:PassRole",
		"qbusiness:UpdatePlugin",
	];
	/** IAM actions required for the UpdateRetriever API call. */
	static readonly UpdateRetriever: string[] = [
		"iam:PassRole",
		"qbusiness:UpdateRetriever",
	];
	/** IAM actions required for the UpdateSubscription API call. */
	static readonly UpdateSubscription: string[] = [
		"qbusiness:UpdateSubscription",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UpdateUser: string[] = ["qbusiness:UpdateUser"];
	/** IAM actions required for the UpdateWebExperience API call. */
	static readonly UpdateWebExperience: string[] = [
		"iam:PassRole",
		"qbusiness:UpdateWebExperience",
	];
}

/**
 * Condition key constants and builders for qbusiness.
 */
export class QbusinessConditions {
	/** Condition keys applicable to the AllowVendedLogDeliveryForResource action. */
	static readonly AllowVendedLogDeliveryForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChatResponseConfiguration action. */
	static readonly CreateChatResponseConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataAccessor action. */
	static readonly CreateDataAccessorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataSource action. */
	static readonly CreateDataSourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIndex action. */
	static readonly CreateIndexConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIntegration action. */
	static readonly CreateIntegrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePlugin action. */
	static readonly CreatePluginConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRetriever action. */
	static readonly CreateRetrieverConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSubscription action. */
	static readonly CreateSubscriptionConditionKeys: string[] = [
		"identitystore:GroupId",
		"identitystore:UserId",
	];
	/** Condition keys applicable to the CreateWebExperience action. */
	static readonly CreateWebExperienceConditionKeys: string[] = [
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
	/** Condition key: identitystore:GroupId (ArrayOfString) */
	static readonly GROUP_ID = "identitystore:GroupId";
	/** Condition key: identitystore:UserId (ArrayOfString) */
	static readonly USER_ID = "identitystore:UserId";

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
