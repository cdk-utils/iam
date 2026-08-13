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
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"qbusiness:AllowVendedLogDeliveryForResource";
	/** [Write] qbusiness:AssociatePermission */
	static readonly ASSOCIATE_PERMISSION = "qbusiness:AssociatePermission";
	/** [Write] qbusiness:BatchDeleteDocument */
	static readonly BATCH_DELETE_DOCUMENT = "qbusiness:BatchDeleteDocument";
	/** [Write] qbusiness:BatchPutDocument */
	static readonly BATCH_PUT_DOCUMENT = "qbusiness:BatchPutDocument";
	/** [Write] qbusiness:CancelSubscription */
	static readonly CANCEL_SUBSCRIPTION = "qbusiness:CancelSubscription";
	/** [Read] qbusiness:Chat */
	static readonly CHAT = "qbusiness:Chat";
	/** [Read] qbusiness:ChatSync */
	static readonly CHAT_SYNC = "qbusiness:ChatSync";
	/** [Read] qbusiness:CheckDocumentAccess */
	static readonly CHECK_DOCUMENT_ACCESS = "qbusiness:CheckDocumentAccess";
	/** [Write] qbusiness:CreateAnonymousWebExperienceUrl */
	static readonly CREATE_ANONYMOUS_WEB_EXPERIENCE_URL =
		"qbusiness:CreateAnonymousWebExperienceUrl";
	/** [Write] qbusiness:CreateApplication */
	static readonly CREATE_APPLICATION = "qbusiness:CreateApplication";
	/** [Write] qbusiness:CreateChatResponseConfiguration */
	static readonly CREATE_CHAT_RESPONSE_CONFIGURATION =
		"qbusiness:CreateChatResponseConfiguration";
	/** [Write] qbusiness:CreateDataAccessor */
	static readonly CREATE_DATA_ACCESSOR = "qbusiness:CreateDataAccessor";
	/** [Write] qbusiness:CreateDataAccessorWithTti */
	static readonly CREATE_DATA_ACCESSOR_WITH_TTI =
		"qbusiness:CreateDataAccessorWithTti";
	/** [Write] qbusiness:CreateDataSource */
	static readonly CREATE_DATA_SOURCE = "qbusiness:CreateDataSource";
	/** [Write] qbusiness:CreateIndex */
	static readonly CREATE_INDEX = "qbusiness:CreateIndex";
	/** [Write] qbusiness:CreateIntegration */
	static readonly CREATE_INTEGRATION = "qbusiness:CreateIntegration";
	/** [Write] qbusiness:CreatePlugin */
	static readonly CREATE_PLUGIN = "qbusiness:CreatePlugin";
	/** [Write] qbusiness:CreateRetriever */
	static readonly CREATE_RETRIEVER = "qbusiness:CreateRetriever";
	/** [Write] qbusiness:CreateSubscription */
	static readonly CREATE_SUBSCRIPTION = "qbusiness:CreateSubscription";
	/** [Write] qbusiness:CreateUser */
	static readonly CREATE_USER = "qbusiness:CreateUser";
	/** [Write] qbusiness:CreateWebExperience */
	static readonly CREATE_WEB_EXPERIENCE = "qbusiness:CreateWebExperience";
	/** [Write] qbusiness:DeleteApplication */
	static readonly DELETE_APPLICATION = "qbusiness:DeleteApplication";
	/** [Write] qbusiness:DeleteAttachment */
	static readonly DELETE_ATTACHMENT = "qbusiness:DeleteAttachment";
	/** [Write] qbusiness:DeleteChatControlsConfiguration */
	static readonly DELETE_CHAT_CONTROLS_CONFIGURATION =
		"qbusiness:DeleteChatControlsConfiguration";
	/** [Write] qbusiness:DeleteChatResponseConfiguration */
	static readonly DELETE_CHAT_RESPONSE_CONFIGURATION =
		"qbusiness:DeleteChatResponseConfiguration";
	/** [Write] qbusiness:DeleteConversation */
	static readonly DELETE_CONVERSATION = "qbusiness:DeleteConversation";
	/** [Write] qbusiness:DeleteDataAccessor */
	static readonly DELETE_DATA_ACCESSOR = "qbusiness:DeleteDataAccessor";
	/** [Write] qbusiness:DeleteDataSource */
	static readonly DELETE_DATA_SOURCE = "qbusiness:DeleteDataSource";
	/** [Write] qbusiness:DeleteGroup */
	static readonly DELETE_GROUP = "qbusiness:DeleteGroup";
	/** [Write] qbusiness:DeleteIndex */
	static readonly DELETE_INDEX = "qbusiness:DeleteIndex";
	/** [Write] qbusiness:DeleteIntegration */
	static readonly DELETE_INTEGRATION = "qbusiness:DeleteIntegration";
	/** [Write] qbusiness:DeletePlugin */
	static readonly DELETE_PLUGIN = "qbusiness:DeletePlugin";
	/** [Write] qbusiness:DeleteRetriever */
	static readonly DELETE_RETRIEVER = "qbusiness:DeleteRetriever";
	/** [Write] qbusiness:DeleteUser */
	static readonly DELETE_USER = "qbusiness:DeleteUser";
	/** [Write] qbusiness:DeleteWebExperience */
	static readonly DELETE_WEB_EXPERIENCE = "qbusiness:DeleteWebExperience";
	/** [Write] qbusiness:DisableAclOnDataSource */
	static readonly DISABLE_ACL_ON_DATA_SOURCE =
		"qbusiness:DisableAclOnDataSource";
	/** [Write] qbusiness:DisassociatePermission */
	static readonly DISASSOCIATE_PERMISSION = "qbusiness:DisassociatePermission";
	/** [Read] qbusiness:GetApplication */
	static readonly GET_APPLICATION = "qbusiness:GetApplication";
	/** [List] qbusiness:GetChatControlsConfiguration */
	static readonly GET_CHAT_CONTROLS_CONFIGURATION =
		"qbusiness:GetChatControlsConfiguration";
	/** [Read] qbusiness:GetChatResponseConfiguration */
	static readonly GET_CHAT_RESPONSE_CONFIGURATION =
		"qbusiness:GetChatResponseConfiguration";
	/** [Read] qbusiness:GetDataAccessor */
	static readonly GET_DATA_ACCESSOR = "qbusiness:GetDataAccessor";
	/** [Read] qbusiness:GetDataSource */
	static readonly GET_DATA_SOURCE = "qbusiness:GetDataSource";
	/** [Read] qbusiness:GetDocumentContent */
	static readonly GET_DOCUMENT_CONTENT = "qbusiness:GetDocumentContent";
	/** [Read] qbusiness:GetGroup */
	static readonly GET_GROUP = "qbusiness:GetGroup";
	/** [Read] qbusiness:GetIndex */
	static readonly GET_INDEX = "qbusiness:GetIndex";
	/** [Read] qbusiness:GetIntegration */
	static readonly GET_INTEGRATION = "qbusiness:GetIntegration";
	/** [Read] qbusiness:GetMedia */
	static readonly GET_MEDIA = "qbusiness:GetMedia";
	/** [Read] qbusiness:GetPlugin */
	static readonly GET_PLUGIN = "qbusiness:GetPlugin";
	/** [Read] qbusiness:GetPolicy */
	static readonly GET_POLICY = "qbusiness:GetPolicy";
	/** [Read] qbusiness:GetRetriever */
	static readonly GET_RETRIEVER = "qbusiness:GetRetriever";
	/** [Read] qbusiness:GetUser */
	static readonly GET_USER = "qbusiness:GetUser";
	/** [Read] qbusiness:GetWebExperience */
	static readonly GET_WEB_EXPERIENCE = "qbusiness:GetWebExperience";
	/** [List] qbusiness:ListApplications */
	static readonly LIST_APPLICATIONS = "qbusiness:ListApplications";
	/** [List] qbusiness:ListAttachments */
	static readonly LIST_ATTACHMENTS = "qbusiness:ListAttachments";
	/** [List] qbusiness:ListChatResponseConfigurations */
	static readonly LIST_CHAT_RESPONSE_CONFIGURATIONS =
		"qbusiness:ListChatResponseConfigurations";
	/** [List] qbusiness:ListConversations */
	static readonly LIST_CONVERSATIONS = "qbusiness:ListConversations";
	/** [List] qbusiness:ListDataAccessors */
	static readonly LIST_DATA_ACCESSORS = "qbusiness:ListDataAccessors";
	/** [List] qbusiness:ListDataSourceSyncJobs */
	static readonly LIST_DATA_SOURCE_SYNC_JOBS =
		"qbusiness:ListDataSourceSyncJobs";
	/** [List] qbusiness:ListDataSources */
	static readonly LIST_DATA_SOURCES = "qbusiness:ListDataSources";
	/** [List] qbusiness:ListDocuments */
	static readonly LIST_DOCUMENTS = "qbusiness:ListDocuments";
	/** [List] qbusiness:ListGroups */
	static readonly LIST_GROUPS = "qbusiness:ListGroups";
	/** [List] qbusiness:ListIndices */
	static readonly LIST_INDICES = "qbusiness:ListIndices";
	/** [List] qbusiness:ListIntegrations */
	static readonly LIST_INTEGRATIONS = "qbusiness:ListIntegrations";
	/** [List] qbusiness:ListMessages */
	static readonly LIST_MESSAGES = "qbusiness:ListMessages";
	/** [Read] qbusiness:ListPluginActions */
	static readonly LIST_PLUGIN_ACTIONS = "qbusiness:ListPluginActions";
	/** [Read] qbusiness:ListPluginTypeActions */
	static readonly LIST_PLUGIN_TYPE_ACTIONS = "qbusiness:ListPluginTypeActions";
	/** [Read] qbusiness:ListPluginTypeMetadata */
	static readonly LIST_PLUGIN_TYPE_METADATA =
		"qbusiness:ListPluginTypeMetadata";
	/** [List] qbusiness:ListPlugins */
	static readonly LIST_PLUGINS = "qbusiness:ListPlugins";
	/** [List] qbusiness:ListRetrievers */
	static readonly LIST_RETRIEVERS = "qbusiness:ListRetrievers";
	/** [List] qbusiness:ListSubscriptions */
	static readonly LIST_SUBSCRIPTIONS = "qbusiness:ListSubscriptions";
	/** [Read] qbusiness:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "qbusiness:ListTagsForResource";
	/** [List] qbusiness:ListWebExperiences */
	static readonly LIST_WEB_EXPERIENCES = "qbusiness:ListWebExperiences";
	/** [Write] qbusiness:PutFeedback */
	static readonly PUT_FEEDBACK = "qbusiness:PutFeedback";
	/** [Write] qbusiness:PutGroup */
	static readonly PUT_GROUP = "qbusiness:PutGroup";
	/** [Write] qbusiness:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "qbusiness:PutResourcePolicy";
	/** [Read] qbusiness:SearchRelevantContent */
	static readonly SEARCH_RELEVANT_CONTENT = "qbusiness:SearchRelevantContent";
	/** [Write] qbusiness:StartDataSourceSyncJob */
	static readonly START_DATA_SOURCE_SYNC_JOB =
		"qbusiness:StartDataSourceSyncJob";
	/** [Write] qbusiness:StartDeployment */
	static readonly START_DEPLOYMENT = "qbusiness:StartDeployment";
	/** [Write] qbusiness:StopDataSourceSyncJob */
	static readonly STOP_DATA_SOURCE_SYNC_JOB = "qbusiness:StopDataSourceSyncJob";
	/** [Tagging] qbusiness:TagResource */
	static readonly TAG_RESOURCE = "qbusiness:TagResource";
	/** [Tagging] qbusiness:UntagResource */
	static readonly UNTAG_RESOURCE = "qbusiness:UntagResource";
	/** [Write] qbusiness:UpdateApplication */
	static readonly UPDATE_APPLICATION = "qbusiness:UpdateApplication";
	/** [Write] qbusiness:UpdateChatControlsConfiguration */
	static readonly UPDATE_CHAT_CONTROLS_CONFIGURATION =
		"qbusiness:UpdateChatControlsConfiguration";
	/** [Write] qbusiness:UpdateChatResponseConfiguration */
	static readonly UPDATE_CHAT_RESPONSE_CONFIGURATION =
		"qbusiness:UpdateChatResponseConfiguration";
	/** [Write] qbusiness:UpdateDataAccessor */
	static readonly UPDATE_DATA_ACCESSOR = "qbusiness:UpdateDataAccessor";
	/** [Write] qbusiness:UpdateDataSource */
	static readonly UPDATE_DATA_SOURCE = "qbusiness:UpdateDataSource";
	/** [Write] qbusiness:UpdateIndex */
	static readonly UPDATE_INDEX = "qbusiness:UpdateIndex";
	/** [Write] qbusiness:UpdateIntegration */
	static readonly UPDATE_INTEGRATION = "qbusiness:UpdateIntegration";
	/** [Write] qbusiness:UpdatePlugin */
	static readonly UPDATE_PLUGIN = "qbusiness:UpdatePlugin";
	/** [Write] qbusiness:UpdateRetriever */
	static readonly UPDATE_RETRIEVER = "qbusiness:UpdateRetriever";
	/** [Write] qbusiness:UpdateSubscription */
	static readonly UPDATE_SUBSCRIPTION = "qbusiness:UpdateSubscription";
	/** [Write] qbusiness:UpdateUser */
	static readonly UPDATE_USER = "qbusiness:UpdateUser";
	/** [Write] qbusiness:UpdateWebExperience */
	static readonly UPDATE_WEB_EXPERIENCE = "qbusiness:UpdateWebExperience";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		QbusinessActions.CHAT,
		QbusinessActions.CHAT_SYNC,
		QbusinessActions.CHECK_DOCUMENT_ACCESS,
		QbusinessActions.GET_APPLICATION,
		QbusinessActions.GET_CHAT_RESPONSE_CONFIGURATION,
		QbusinessActions.GET_DATA_ACCESSOR,
		QbusinessActions.GET_DATA_SOURCE,
		QbusinessActions.GET_DOCUMENT_CONTENT,
		QbusinessActions.GET_GROUP,
		QbusinessActions.GET_INDEX,
		QbusinessActions.GET_INTEGRATION,
		QbusinessActions.GET_MEDIA,
		QbusinessActions.GET_PLUGIN,
		QbusinessActions.GET_POLICY,
		QbusinessActions.GET_RETRIEVER,
		QbusinessActions.GET_USER,
		QbusinessActions.GET_WEB_EXPERIENCE,
		QbusinessActions.LIST_PLUGIN_ACTIONS,
		QbusinessActions.LIST_PLUGIN_TYPE_ACTIONS,
		QbusinessActions.LIST_PLUGIN_TYPE_METADATA,
		QbusinessActions.LIST_TAGS_FOR_RESOURCE,
		QbusinessActions.SEARCH_RELEVANT_CONTENT,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		QbusinessActions.ASSOCIATE_PERMISSION,
		QbusinessActions.BATCH_DELETE_DOCUMENT,
		QbusinessActions.BATCH_PUT_DOCUMENT,
		QbusinessActions.CANCEL_SUBSCRIPTION,
		QbusinessActions.CREATE_ANONYMOUS_WEB_EXPERIENCE_URL,
		QbusinessActions.CREATE_APPLICATION,
		QbusinessActions.CREATE_CHAT_RESPONSE_CONFIGURATION,
		QbusinessActions.CREATE_DATA_ACCESSOR,
		QbusinessActions.CREATE_DATA_ACCESSOR_WITH_TTI,
		QbusinessActions.CREATE_DATA_SOURCE,
		QbusinessActions.CREATE_INDEX,
		QbusinessActions.CREATE_INTEGRATION,
		QbusinessActions.CREATE_PLUGIN,
		QbusinessActions.CREATE_RETRIEVER,
		QbusinessActions.CREATE_SUBSCRIPTION,
		QbusinessActions.CREATE_USER,
		QbusinessActions.CREATE_WEB_EXPERIENCE,
		QbusinessActions.DELETE_APPLICATION,
		QbusinessActions.DELETE_ATTACHMENT,
		QbusinessActions.DELETE_CHAT_CONTROLS_CONFIGURATION,
		QbusinessActions.DELETE_CHAT_RESPONSE_CONFIGURATION,
		QbusinessActions.DELETE_CONVERSATION,
		QbusinessActions.DELETE_DATA_ACCESSOR,
		QbusinessActions.DELETE_DATA_SOURCE,
		QbusinessActions.DELETE_GROUP,
		QbusinessActions.DELETE_INDEX,
		QbusinessActions.DELETE_INTEGRATION,
		QbusinessActions.DELETE_PLUGIN,
		QbusinessActions.DELETE_RETRIEVER,
		QbusinessActions.DELETE_USER,
		QbusinessActions.DELETE_WEB_EXPERIENCE,
		QbusinessActions.DISABLE_ACL_ON_DATA_SOURCE,
		QbusinessActions.DISASSOCIATE_PERMISSION,
		QbusinessActions.PUT_FEEDBACK,
		QbusinessActions.PUT_GROUP,
		QbusinessActions.PUT_RESOURCE_POLICY,
		QbusinessActions.START_DATA_SOURCE_SYNC_JOB,
		QbusinessActions.START_DEPLOYMENT,
		QbusinessActions.STOP_DATA_SOURCE_SYNC_JOB,
		QbusinessActions.UPDATE_APPLICATION,
		QbusinessActions.UPDATE_CHAT_CONTROLS_CONFIGURATION,
		QbusinessActions.UPDATE_CHAT_RESPONSE_CONFIGURATION,
		QbusinessActions.UPDATE_DATA_ACCESSOR,
		QbusinessActions.UPDATE_DATA_SOURCE,
		QbusinessActions.UPDATE_INDEX,
		QbusinessActions.UPDATE_INTEGRATION,
		QbusinessActions.UPDATE_PLUGIN,
		QbusinessActions.UPDATE_RETRIEVER,
		QbusinessActions.UPDATE_SUBSCRIPTION,
		QbusinessActions.UPDATE_USER,
		QbusinessActions.UPDATE_WEB_EXPERIENCE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		QbusinessActions.GET_CHAT_CONTROLS_CONFIGURATION,
		QbusinessActions.LIST_APPLICATIONS,
		QbusinessActions.LIST_ATTACHMENTS,
		QbusinessActions.LIST_CHAT_RESPONSE_CONFIGURATIONS,
		QbusinessActions.LIST_CONVERSATIONS,
		QbusinessActions.LIST_DATA_ACCESSORS,
		QbusinessActions.LIST_DATA_SOURCE_SYNC_JOBS,
		QbusinessActions.LIST_DATA_SOURCES,
		QbusinessActions.LIST_DOCUMENTS,
		QbusinessActions.LIST_GROUPS,
		QbusinessActions.LIST_INDICES,
		QbusinessActions.LIST_INTEGRATIONS,
		QbusinessActions.LIST_MESSAGES,
		QbusinessActions.LIST_PLUGINS,
		QbusinessActions.LIST_RETRIEVERS,
		QbusinessActions.LIST_SUBSCRIPTIONS,
		QbusinessActions.LIST_WEB_EXPERIENCES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		QbusinessActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		QbusinessActions.TAG_RESOURCE,
		QbusinessActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)$",
);
const ChatResponseConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/chat-response-configuration/(?<chatResponseConfigurationId>[^:/?]+)$",
);
const DataAccessorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/data-accessor/(?<dataAccessorId>[^:/?]+)$",
);
const DataSourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/index/(?<indexId>[^:/?]+)/data-source/(?<dataSourceId>[^:/?]+)$",
);
const IndexArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/index/(?<indexId>[^:/?]+)$",
);
const IntegrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/integration/(?<integrationId>[^:/?]+)$",
);
const PluginArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/plugin/(?<pluginId>[^:/?]+)$",
);
const RetrieverArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/retriever/(?<retrieverId>[^:/?]+)$",
);
const SubscriptionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/subscription/(?<subscriptionId>[^:/?]+)$",
);
const WebExperienceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/web-experience/(?<webExperienceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for qbusiness resources.
 */
export class QbusinessResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
	} {
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
	static chatResponseConfiguration(props: {
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
	}): string {
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
	static parseChatResponseConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		chatResponseConfigurationId: string;
	} {
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
	static dataAccessor(props: {
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
	}): string {
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
	static parseDataAccessorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		dataAccessorId: string;
	} {
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
	static dataSource(props: {
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
	}): string {
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
	static parseDataSourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		indexId: string;
		dataSourceId: string;
	} {
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
	static index(props: {
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
	}): string {
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
	static parseIndexArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		indexId: string;
	} {
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
	static integration(props: {
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
	}): string {
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
	static parseIntegrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		integrationId: string;
	} {
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
	static plugin(props: {
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
	}): string {
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
	static parsePluginArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		pluginId: string;
	} {
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
	static retriever(props: {
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
	}): string {
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
	static parseRetrieverArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		retrieverId: string;
	} {
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
	static subscription(props: {
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
	}): string {
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
	static parseSubscriptionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		subscriptionId: string;
	} {
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
	static webExperience(props: {
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
	}): string {
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
	static parseWebExperienceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		webExperienceId: string;
	} {
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
	static readonly ASSOCIATE_PERMISSION: string[] = [
		"qbusiness:AssociatePermission",
		"qbusiness:PutResourcePolicy",
	];
	/** IAM actions required for the BatchDeleteDocument API call. */
	static readonly BATCH_DELETE_DOCUMENT: string[] = [
		"qbusiness:BatchDeleteDocument",
	];
	/** IAM actions required for the BatchPutDocument API call. */
	static readonly BATCH_PUT_DOCUMENT: string[] = [
		"qbusiness:BatchPutDocument",
		"iam:PassRole",
	];
	/** IAM actions required for the CancelSubscription API call. */
	static readonly CANCEL_SUBSCRIPTION: string[] = [
		"qbusiness:CancelSubscription",
	];
	/** IAM actions required for the Chat API call. */
	static readonly CHAT: string[] = ["qbusiness:Chat"];
	/** IAM actions required for the ChatSync API call. */
	static readonly CHAT_SYNC: string[] = ["qbusiness:ChatSync"];
	/** IAM actions required for the CheckDocumentAccess API call. */
	static readonly CHECK_DOCUMENT_ACCESS: string[] = [
		"qbusiness:CheckDocumentAccess",
	];
	/** IAM actions required for the CreateAnonymousWebExperienceUrl API call. */
	static readonly CREATE_ANONYMOUS_WEB_EXPERIENCE_URL: string[] = [
		"qbusiness:CreateAnonymousWebExperienceUrl",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"qbusiness:CreateApplication",
		"iam:PassRole",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreateChatResponseConfiguration API call. */
	static readonly CREATE_CHAT_RESPONSE_CONFIGURATION: string[] = [
		"qbusiness:CreateChatResponseConfiguration",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreateDataAccessor API call. */
	static readonly CREATE_DATA_ACCESSOR: string[] = [
		"qbusiness:CreateDataAccessor",
		"qbusiness:CreateDataAccessorWithTti",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreateDataSource API call. */
	static readonly CREATE_DATA_SOURCE: string[] = [
		"qbusiness:CreateDataSource",
		"qbusiness:DisableAclOnDataSource",
		"iam:PassRole",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreateIndex API call. */
	static readonly CREATE_INDEX: string[] = [
		"qbusiness:CreateIndex",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreatePlugin API call. */
	static readonly CREATE_PLUGIN: string[] = [
		"qbusiness:CreatePlugin",
		"iam:PassRole",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreateRetriever API call. */
	static readonly CREATE_RETRIEVER: string[] = [
		"qbusiness:CreateRetriever",
		"iam:PassRole",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the CreateSubscription API call. */
	static readonly CREATE_SUBSCRIPTION: string[] = [
		"qbusiness:CreateSubscription",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = ["qbusiness:CreateUser"];
	/** IAM actions required for the CreateWebExperience API call. */
	static readonly CREATE_WEB_EXPERIENCE: string[] = [
		"qbusiness:CreateWebExperience",
		"iam:PassRole",
		"qbusiness:TagResource",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"qbusiness:DeleteApplication",
	];
	/** IAM actions required for the DeleteAttachment API call. */
	static readonly DELETE_ATTACHMENT: string[] = ["qbusiness:DeleteAttachment"];
	/** IAM actions required for the DeleteChatControlsConfiguration API call. */
	static readonly DELETE_CHAT_CONTROLS_CONFIGURATION: string[] = [
		"qbusiness:DeleteChatControlsConfiguration",
	];
	/** IAM actions required for the DeleteChatResponseConfiguration API call. */
	static readonly DELETE_CHAT_RESPONSE_CONFIGURATION: string[] = [
		"qbusiness:DeleteChatResponseConfiguration",
	];
	/** IAM actions required for the DeleteConversation API call. */
	static readonly DELETE_CONVERSATION: string[] = [
		"qbusiness:DeleteConversation",
	];
	/** IAM actions required for the DeleteDataAccessor API call. */
	static readonly DELETE_DATA_ACCESSOR: string[] = [
		"qbusiness:DeleteDataAccessor",
	];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DELETE_DATA_SOURCE: string[] = ["qbusiness:DeleteDataSource"];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DELETE_GROUP: string[] = ["qbusiness:DeleteGroup"];
	/** IAM actions required for the DeleteIndex API call. */
	static readonly DELETE_INDEX: string[] = ["qbusiness:DeleteIndex"];
	/** IAM actions required for the DeletePlugin API call. */
	static readonly DELETE_PLUGIN: string[] = ["qbusiness:DeletePlugin"];
	/** IAM actions required for the DeleteRetriever API call. */
	static readonly DELETE_RETRIEVER: string[] = ["qbusiness:DeleteRetriever"];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["qbusiness:DeleteUser"];
	/** IAM actions required for the DeleteWebExperience API call. */
	static readonly DELETE_WEB_EXPERIENCE: string[] = [
		"qbusiness:DeleteWebExperience",
	];
	/** IAM actions required for the DisassociatePermission API call. */
	static readonly DISASSOCIATE_PERMISSION: string[] = [
		"qbusiness:DisassociatePermission",
		"qbusiness:PutResourcePolicy",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = ["qbusiness:GetApplication"];
	/** IAM actions required for the GetChatControlsConfiguration API call. */
	static readonly GET_CHAT_CONTROLS_CONFIGURATION: string[] = [
		"qbusiness:GetChatControlsConfiguration",
	];
	/** IAM actions required for the GetChatResponseConfiguration API call. */
	static readonly GET_CHAT_RESPONSE_CONFIGURATION: string[] = [
		"qbusiness:GetChatResponseConfiguration",
	];
	/** IAM actions required for the GetDataAccessor API call. */
	static readonly GET_DATA_ACCESSOR: string[] = ["qbusiness:GetDataAccessor"];
	/** IAM actions required for the GetDataSource API call. */
	static readonly GET_DATA_SOURCE: string[] = ["qbusiness:GetDataSource"];
	/** IAM actions required for the GetDocumentContent API call. */
	static readonly GET_DOCUMENT_CONTENT: string[] = [
		"qbusiness:GetDocumentContent",
	];
	/** IAM actions required for the GetGroup API call. */
	static readonly GET_GROUP: string[] = ["qbusiness:GetGroup"];
	/** IAM actions required for the GetIndex API call. */
	static readonly GET_INDEX: string[] = ["qbusiness:GetIndex"];
	/** IAM actions required for the GetMedia API call. */
	static readonly GET_MEDIA: string[] = ["qbusiness:GetMedia"];
	/** IAM actions required for the GetPlugin API call. */
	static readonly GET_PLUGIN: string[] = ["qbusiness:GetPlugin"];
	/** IAM actions required for the GetPolicy API call. */
	static readonly GET_POLICY: string[] = ["qbusiness:GetPolicy"];
	/** IAM actions required for the GetRetriever API call. */
	static readonly GET_RETRIEVER: string[] = ["qbusiness:GetRetriever"];
	/** IAM actions required for the GetUser API call. */
	static readonly GET_USER: string[] = ["qbusiness:GetUser"];
	/** IAM actions required for the GetWebExperience API call. */
	static readonly GET_WEB_EXPERIENCE: string[] = ["qbusiness:GetWebExperience"];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = ["qbusiness:ListApplications"];
	/** IAM actions required for the ListAttachments API call. */
	static readonly LIST_ATTACHMENTS: string[] = ["qbusiness:ListAttachments"];
	/** IAM actions required for the ListChatResponseConfigurations API call. */
	static readonly LIST_CHAT_RESPONSE_CONFIGURATIONS: string[] = [
		"qbusiness:ListChatResponseConfigurations",
	];
	/** IAM actions required for the ListConversations API call. */
	static readonly LIST_CONVERSATIONS: string[] = [
		"qbusiness:ListConversations",
	];
	/** IAM actions required for the ListDataAccessors API call. */
	static readonly LIST_DATA_ACCESSORS: string[] = [
		"qbusiness:ListDataAccessors",
	];
	/** IAM actions required for the ListDataSourceSyncJobs API call. */
	static readonly LIST_DATA_SOURCE_SYNC_JOBS: string[] = [
		"qbusiness:ListDataSourceSyncJobs",
	];
	/** IAM actions required for the ListDataSources API call. */
	static readonly LIST_DATA_SOURCES: string[] = ["qbusiness:ListDataSources"];
	/** IAM actions required for the ListDocuments API call. */
	static readonly LIST_DOCUMENTS: string[] = ["qbusiness:ListDocuments"];
	/** IAM actions required for the ListGroups API call. */
	static readonly LIST_GROUPS: string[] = ["qbusiness:ListGroups"];
	/** IAM actions required for the ListIndices API call. */
	static readonly LIST_INDICES: string[] = ["qbusiness:ListIndices"];
	/** IAM actions required for the ListMessages API call. */
	static readonly LIST_MESSAGES: string[] = ["qbusiness:ListMessages"];
	/** IAM actions required for the ListPluginActions API call. */
	static readonly LIST_PLUGIN_ACTIONS: string[] = [
		"qbusiness:ListPluginActions",
	];
	/** IAM actions required for the ListPluginTypeActions API call. */
	static readonly LIST_PLUGIN_TYPE_ACTIONS: string[] = [
		"qbusiness:ListPluginTypeActions",
	];
	/** IAM actions required for the ListPluginTypeMetadata API call. */
	static readonly LIST_PLUGIN_TYPE_METADATA: string[] = [
		"qbusiness:ListPluginTypeMetadata",
	];
	/** IAM actions required for the ListPlugins API call. */
	static readonly LIST_PLUGINS: string[] = ["qbusiness:ListPlugins"];
	/** IAM actions required for the ListRetrievers API call. */
	static readonly LIST_RETRIEVERS: string[] = ["qbusiness:ListRetrievers"];
	/** IAM actions required for the ListSubscriptions API call. */
	static readonly LIST_SUBSCRIPTIONS: string[] = [
		"qbusiness:ListSubscriptions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"qbusiness:ListTagsForResource",
	];
	/** IAM actions required for the ListWebExperiences API call. */
	static readonly LIST_WEB_EXPERIENCES: string[] = [
		"qbusiness:ListWebExperiences",
	];
	/** IAM actions required for the PutFeedback API call. */
	static readonly PUT_FEEDBACK: string[] = ["qbusiness:PutFeedback"];
	/** IAM actions required for the PutGroup API call. */
	static readonly PUT_GROUP: string[] = ["iam:PassRole", "qbusiness:PutGroup"];
	/** IAM actions required for the SearchRelevantContent API call. */
	static readonly SEARCH_RELEVANT_CONTENT: string[] = [
		"qbusiness:SearchRelevantContent",
	];
	/** IAM actions required for the StartDataSourceSyncJob API call. */
	static readonly START_DATA_SOURCE_SYNC_JOB: string[] = [
		"qbusiness:StartDataSourceSyncJob",
	];
	/** IAM actions required for the StopDataSourceSyncJob API call. */
	static readonly STOP_DATA_SOURCE_SYNC_JOB: string[] = [
		"qbusiness:StopDataSourceSyncJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["qbusiness:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["qbusiness:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [
		"iam:PassRole",
		"qbusiness:UpdateApplication",
	];
	/** IAM actions required for the UpdateChatControlsConfiguration API call. */
	static readonly UPDATE_CHAT_CONTROLS_CONFIGURATION: string[] = [
		"qbusiness:UpdateChatControlsConfiguration",
	];
	/** IAM actions required for the UpdateChatResponseConfiguration API call. */
	static readonly UPDATE_CHAT_RESPONSE_CONFIGURATION: string[] = [
		"qbusiness:UpdateChatResponseConfiguration",
	];
	/** IAM actions required for the UpdateDataAccessor API call. */
	static readonly UPDATE_DATA_ACCESSOR: string[] = [
		"qbusiness:UpdateDataAccessor",
	];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UPDATE_DATA_SOURCE: string[] = [
		"iam:PassRole",
		"qbusiness:UpdateDataSource",
	];
	/** IAM actions required for the UpdateIndex API call. */
	static readonly UPDATE_INDEX: string[] = ["qbusiness:UpdateIndex"];
	/** IAM actions required for the UpdatePlugin API call. */
	static readonly UPDATE_PLUGIN: string[] = [
		"iam:PassRole",
		"qbusiness:UpdatePlugin",
	];
	/** IAM actions required for the UpdateRetriever API call. */
	static readonly UPDATE_RETRIEVER: string[] = [
		"iam:PassRole",
		"qbusiness:UpdateRetriever",
	];
	/** IAM actions required for the UpdateSubscription API call. */
	static readonly UPDATE_SUBSCRIPTION: string[] = [
		"qbusiness:UpdateSubscription",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = ["qbusiness:UpdateUser"];
	/** IAM actions required for the UpdateWebExperience API call. */
	static readonly UPDATE_WEB_EXPERIENCE: string[] = [
		"iam:PassRole",
		"qbusiness:UpdateWebExperience",
	];
}

/**
 * Condition key constants and builders for qbusiness.
 */
export class QbusinessConditions {
	/** Condition keys applicable to the AllowVendedLogDeliveryForResource action. */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChatResponseConfiguration action. */
	static readonly CREATE_CHAT_RESPONSE_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateDataAccessor action. */
	static readonly CREATE_DATA_ACCESSOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataSource action. */
	static readonly CREATE_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIndex action. */
	static readonly CREATE_INDEX_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIntegration action. */
	static readonly CREATE_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePlugin action. */
	static readonly CREATE_PLUGIN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRetriever action. */
	static readonly CREATE_RETRIEVER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSubscription action. */
	static readonly CREATE_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"identitystore:GroupId",
		"identitystore:UserId",
	];
	/** Condition keys applicable to the CreateWebExperience action. */
	static readonly CREATE_WEB_EXPERIENCE_CONDITION_KEYS: string[] = [
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
