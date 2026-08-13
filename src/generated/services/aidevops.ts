// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/aidevops.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the aidevops service.
 */
export class AidevopsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "aidevops";

	/** [PermissionManagement] aidevops:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"aidevops:AllowVendedLogDeliveryForResource";
	/** [Write] aidevops:AssociateService */
	static readonly ASSOCIATE_SERVICE = "aidevops:AssociateService";
	/** [Write] aidevops:CreateAccessToken */
	static readonly CREATE_ACCESS_TOKEN = "aidevops:CreateAccessToken";
	/** [Write] aidevops:CreateAgentSpace */
	static readonly CREATE_AGENT_SPACE = "aidevops:CreateAgentSpace";
	/** [Write] aidevops:CreateAsset */
	static readonly CREATE_ASSET = "aidevops:CreateAsset";
	/** [Write] aidevops:CreateAssetFile */
	static readonly CREATE_ASSET_FILE = "aidevops:CreateAssetFile";
	/** [Write] aidevops:CreateBacklogTask */
	static readonly CREATE_BACKLOG_TASK = "aidevops:CreateBacklogTask";
	/** [Write] aidevops:CreateChat */
	static readonly CREATE_CHAT = "aidevops:CreateChat";
	/** [Write] aidevops:CreateKnowledgeItem */
	static readonly CREATE_KNOWLEDGE_ITEM = "aidevops:CreateKnowledgeItem";
	/** [Write] aidevops:CreateOneTimeLoginSession */
	static readonly CREATE_ONE_TIME_LOGIN_SESSION =
		"aidevops:CreateOneTimeLoginSession";
	/** [Write] aidevops:CreatePrivateConnection */
	static readonly CREATE_PRIVATE_CONNECTION =
		"aidevops:CreatePrivateConnection";
	/** [Write] aidevops:CreateTrigger */
	static readonly CREATE_TRIGGER = "aidevops:CreateTrigger";
	/** [Write] aidevops:DeleteAgentSpace */
	static readonly DELETE_AGENT_SPACE = "aidevops:DeleteAgentSpace";
	/** [Write] aidevops:DeleteAsset */
	static readonly DELETE_ASSET = "aidevops:DeleteAsset";
	/** [Write] aidevops:DeleteAssetFile */
	static readonly DELETE_ASSET_FILE = "aidevops:DeleteAssetFile";
	/** [Write] aidevops:DeleteKnowledgeItem */
	static readonly DELETE_KNOWLEDGE_ITEM = "aidevops:DeleteKnowledgeItem";
	/** [Write] aidevops:DeletePrivateConnection */
	static readonly DELETE_PRIVATE_CONNECTION =
		"aidevops:DeletePrivateConnection";
	/** [Write] aidevops:DeleteTrigger */
	static readonly DELETE_TRIGGER = "aidevops:DeleteTrigger";
	/** [Write] aidevops:DeregisterService */
	static readonly DEREGISTER_SERVICE = "aidevops:DeregisterService";
	/** [Read] aidevops:DescribePrivateConnection */
	static readonly DESCRIBE_PRIVATE_CONNECTION =
		"aidevops:DescribePrivateConnection";
	/** [Read] aidevops:DescribeServices */
	static readonly DESCRIBE_SERVICES = "aidevops:DescribeServices";
	/** [Write] aidevops:DescribeSupportLevel */
	static readonly DESCRIBE_SUPPORT_LEVEL = "aidevops:DescribeSupportLevel";
	/** [Write] aidevops:DisableOperatorApp */
	static readonly DISABLE_OPERATOR_APP = "aidevops:DisableOperatorApp";
	/** [Write] aidevops:DisassociateService */
	static readonly DISASSOCIATE_SERVICE = "aidevops:DisassociateService";
	/** [Write] aidevops:DiscoverTopology */
	static readonly DISCOVER_TOPOLOGY = "aidevops:DiscoverTopology";
	/** [Write] aidevops:EnableOperatorApp */
	static readonly ENABLE_OPERATOR_APP = "aidevops:EnableOperatorApp";
	/** [Write] aidevops:EndChatForCase */
	static readonly END_CHAT_FOR_CASE = "aidevops:EndChatForCase";
	/** [Read] aidevops:GetAccessToken */
	static readonly GET_ACCESS_TOKEN = "aidevops:GetAccessToken";
	/** [Read] aidevops:GetAccountUsage */
	static readonly GET_ACCOUNT_USAGE = "aidevops:GetAccountUsage";
	/** [Read] aidevops:GetAgentSpace */
	static readonly GET_AGENT_SPACE = "aidevops:GetAgentSpace";
	/** [Read] aidevops:GetAsset */
	static readonly GET_ASSET = "aidevops:GetAsset";
	/** [Read] aidevops:GetAssetContent */
	static readonly GET_ASSET_CONTENT = "aidevops:GetAssetContent";
	/** [Read] aidevops:GetAssetFile */
	static readonly GET_ASSET_FILE = "aidevops:GetAssetFile";
	/** [Read] aidevops:GetAssociation */
	static readonly GET_ASSOCIATION = "aidevops:GetAssociation";
	/** [Read] aidevops:GetBacklogTask */
	static readonly GET_BACKLOG_TASK = "aidevops:GetBacklogTask";
	/** [Read] aidevops:GetKnowledgeItem */
	static readonly GET_KNOWLEDGE_ITEM = "aidevops:GetKnowledgeItem";
	/** [Read] aidevops:GetOperatorApp */
	static readonly GET_OPERATOR_APP = "aidevops:GetOperatorApp";
	/** [Read] aidevops:GetRecommendation */
	static readonly GET_RECOMMENDATION = "aidevops:GetRecommendation";
	/** [Read] aidevops:GetService */
	static readonly GET_SERVICE = "aidevops:GetService";
	/** [Read] aidevops:GetTrigger */
	static readonly GET_TRIGGER = "aidevops:GetTrigger";
	/** [Write] aidevops:InitiateChatForCase */
	static readonly INITIATE_CHAT_FOR_CASE = "aidevops:InitiateChatForCase";
	/** [List] aidevops:ListAccessTokens */
	static readonly LIST_ACCESS_TOKENS = "aidevops:ListAccessTokens";
	/** [List] aidevops:ListAgentSpaces */
	static readonly LIST_AGENT_SPACES = "aidevops:ListAgentSpaces";
	/** [List] aidevops:ListAssetFiles */
	static readonly LIST_ASSET_FILES = "aidevops:ListAssetFiles";
	/** [List] aidevops:ListAssetTypes */
	static readonly LIST_ASSET_TYPES = "aidevops:ListAssetTypes";
	/** [List] aidevops:ListAssetVersions */
	static readonly LIST_ASSET_VERSIONS = "aidevops:ListAssetVersions";
	/** [List] aidevops:ListAssets */
	static readonly LIST_ASSETS = "aidevops:ListAssets";
	/** [List] aidevops:ListAssociations */
	static readonly LIST_ASSOCIATIONS = "aidevops:ListAssociations";
	/** [List] aidevops:ListBacklogTasks */
	static readonly LIST_BACKLOG_TASKS = "aidevops:ListBacklogTasks";
	/** [List] aidevops:ListChats */
	static readonly LIST_CHATS = "aidevops:ListChats";
	/** [List] aidevops:ListExecutions */
	static readonly LIST_EXECUTIONS = "aidevops:ListExecutions";
	/** [List] aidevops:ListGoals */
	static readonly LIST_GOALS = "aidevops:ListGoals";
	/** [List] aidevops:ListJournalRecords */
	static readonly LIST_JOURNAL_RECORDS = "aidevops:ListJournalRecords";
	/** [List] aidevops:ListKnowledgeItemVersions */
	static readonly LIST_KNOWLEDGE_ITEM_VERSIONS =
		"aidevops:ListKnowledgeItemVersions";
	/** [List] aidevops:ListKnowledgeItems */
	static readonly LIST_KNOWLEDGE_ITEMS = "aidevops:ListKnowledgeItems";
	/** [List] aidevops:ListPendingMessages */
	static readonly LIST_PENDING_MESSAGES = "aidevops:ListPendingMessages";
	/** [List] aidevops:ListPrivateConnections */
	static readonly LIST_PRIVATE_CONNECTIONS = "aidevops:ListPrivateConnections";
	/** [List] aidevops:ListRecommendations */
	static readonly LIST_RECOMMENDATIONS = "aidevops:ListRecommendations";
	/** [List] aidevops:ListServices */
	static readonly LIST_SERVICES = "aidevops:ListServices";
	/** [Read] aidevops:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "aidevops:ListTagsForResource";
	/** [List] aidevops:ListTriggers */
	static readonly LIST_TRIGGERS = "aidevops:ListTriggers";
	/** [List] aidevops:ListWebhooks */
	static readonly LIST_WEBHOOKS = "aidevops:ListWebhooks";
	/** [Write] aidevops:RegisterService */
	static readonly REGISTER_SERVICE = "aidevops:RegisterService";
	/** [Write] aidevops:RevokeAccessToken */
	static readonly REVOKE_ACCESS_TOKEN = "aidevops:RevokeAccessToken";
	/** [Write] aidevops:RotateAccessToken */
	static readonly ROTATE_ACCESS_TOKEN = "aidevops:RotateAccessToken";
	/** [Read] aidevops:SearchServiceAccessibleResource */
	static readonly SEARCH_SERVICE_ACCESSIBLE_RESOURCE =
		"aidevops:SearchServiceAccessibleResource";
	/** [Write] aidevops:SendMessage */
	static readonly SEND_MESSAGE = "aidevops:SendMessage";
	/** [Tagging] aidevops:TagResource */
	static readonly TAG_RESOURCE = "aidevops:TagResource";
	/** [Tagging] aidevops:UntagResource */
	static readonly UNTAG_RESOURCE = "aidevops:UntagResource";
	/** [Write] aidevops:UpdateAgentSpace */
	static readonly UPDATE_AGENT_SPACE = "aidevops:UpdateAgentSpace";
	/** [Write] aidevops:UpdateApprovalAction */
	static readonly UPDATE_APPROVAL_ACTION = "aidevops:UpdateApprovalAction";
	/** [Write] aidevops:UpdateAsset */
	static readonly UPDATE_ASSET = "aidevops:UpdateAsset";
	/** [Write] aidevops:UpdateAssetFile */
	static readonly UPDATE_ASSET_FILE = "aidevops:UpdateAssetFile";
	/** [Write] aidevops:UpdateAssociation */
	static readonly UPDATE_ASSOCIATION = "aidevops:UpdateAssociation";
	/** [Write] aidevops:UpdateBacklogTask */
	static readonly UPDATE_BACKLOG_TASK = "aidevops:UpdateBacklogTask";
	/** [Write] aidevops:UpdateGoal */
	static readonly UPDATE_GOAL = "aidevops:UpdateGoal";
	/** [Write] aidevops:UpdateKnowledgeItem */
	static readonly UPDATE_KNOWLEDGE_ITEM = "aidevops:UpdateKnowledgeItem";
	/** [Write] aidevops:UpdateOperatorAppIdpConfig */
	static readonly UPDATE_OPERATOR_APP_IDP_CONFIG =
		"aidevops:UpdateOperatorAppIdpConfig";
	/** [Write] aidevops:UpdatePrivateConnectionCertificate */
	static readonly UPDATE_PRIVATE_CONNECTION_CERTIFICATE =
		"aidevops:UpdatePrivateConnectionCertificate";
	/** [Write] aidevops:UpdateRecommendation */
	static readonly UPDATE_RECOMMENDATION = "aidevops:UpdateRecommendation";
	/** [Write] aidevops:UpdateTrigger */
	static readonly UPDATE_TRIGGER = "aidevops:UpdateTrigger";
	/** [Write] aidevops:ValidateAwsAssociations */
	static readonly VALIDATE_AWS_ASSOCIATIONS =
		"aidevops:ValidateAwsAssociations";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AidevopsActions.DESCRIBE_PRIVATE_CONNECTION,
		AidevopsActions.DESCRIBE_SERVICES,
		AidevopsActions.GET_ACCESS_TOKEN,
		AidevopsActions.GET_ACCOUNT_USAGE,
		AidevopsActions.GET_AGENT_SPACE,
		AidevopsActions.GET_ASSET,
		AidevopsActions.GET_ASSET_CONTENT,
		AidevopsActions.GET_ASSET_FILE,
		AidevopsActions.GET_ASSOCIATION,
		AidevopsActions.GET_BACKLOG_TASK,
		AidevopsActions.GET_KNOWLEDGE_ITEM,
		AidevopsActions.GET_OPERATOR_APP,
		AidevopsActions.GET_RECOMMENDATION,
		AidevopsActions.GET_SERVICE,
		AidevopsActions.GET_TRIGGER,
		AidevopsActions.LIST_TAGS_FOR_RESOURCE,
		AidevopsActions.SEARCH_SERVICE_ACCESSIBLE_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AidevopsActions.ASSOCIATE_SERVICE,
		AidevopsActions.CREATE_ACCESS_TOKEN,
		AidevopsActions.CREATE_AGENT_SPACE,
		AidevopsActions.CREATE_ASSET,
		AidevopsActions.CREATE_ASSET_FILE,
		AidevopsActions.CREATE_BACKLOG_TASK,
		AidevopsActions.CREATE_CHAT,
		AidevopsActions.CREATE_KNOWLEDGE_ITEM,
		AidevopsActions.CREATE_ONE_TIME_LOGIN_SESSION,
		AidevopsActions.CREATE_PRIVATE_CONNECTION,
		AidevopsActions.CREATE_TRIGGER,
		AidevopsActions.DELETE_AGENT_SPACE,
		AidevopsActions.DELETE_ASSET,
		AidevopsActions.DELETE_ASSET_FILE,
		AidevopsActions.DELETE_KNOWLEDGE_ITEM,
		AidevopsActions.DELETE_PRIVATE_CONNECTION,
		AidevopsActions.DELETE_TRIGGER,
		AidevopsActions.DEREGISTER_SERVICE,
		AidevopsActions.DESCRIBE_SUPPORT_LEVEL,
		AidevopsActions.DISABLE_OPERATOR_APP,
		AidevopsActions.DISASSOCIATE_SERVICE,
		AidevopsActions.DISCOVER_TOPOLOGY,
		AidevopsActions.ENABLE_OPERATOR_APP,
		AidevopsActions.END_CHAT_FOR_CASE,
		AidevopsActions.INITIATE_CHAT_FOR_CASE,
		AidevopsActions.REGISTER_SERVICE,
		AidevopsActions.REVOKE_ACCESS_TOKEN,
		AidevopsActions.ROTATE_ACCESS_TOKEN,
		AidevopsActions.SEND_MESSAGE,
		AidevopsActions.UPDATE_AGENT_SPACE,
		AidevopsActions.UPDATE_APPROVAL_ACTION,
		AidevopsActions.UPDATE_ASSET,
		AidevopsActions.UPDATE_ASSET_FILE,
		AidevopsActions.UPDATE_ASSOCIATION,
		AidevopsActions.UPDATE_BACKLOG_TASK,
		AidevopsActions.UPDATE_GOAL,
		AidevopsActions.UPDATE_KNOWLEDGE_ITEM,
		AidevopsActions.UPDATE_OPERATOR_APP_IDP_CONFIG,
		AidevopsActions.UPDATE_PRIVATE_CONNECTION_CERTIFICATE,
		AidevopsActions.UPDATE_RECOMMENDATION,
		AidevopsActions.UPDATE_TRIGGER,
		AidevopsActions.VALIDATE_AWS_ASSOCIATIONS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AidevopsActions.LIST_ACCESS_TOKENS,
		AidevopsActions.LIST_AGENT_SPACES,
		AidevopsActions.LIST_ASSET_FILES,
		AidevopsActions.LIST_ASSET_TYPES,
		AidevopsActions.LIST_ASSET_VERSIONS,
		AidevopsActions.LIST_ASSETS,
		AidevopsActions.LIST_ASSOCIATIONS,
		AidevopsActions.LIST_BACKLOG_TASKS,
		AidevopsActions.LIST_CHATS,
		AidevopsActions.LIST_EXECUTIONS,
		AidevopsActions.LIST_GOALS,
		AidevopsActions.LIST_JOURNAL_RECORDS,
		AidevopsActions.LIST_KNOWLEDGE_ITEM_VERSIONS,
		AidevopsActions.LIST_KNOWLEDGE_ITEMS,
		AidevopsActions.LIST_PENDING_MESSAGES,
		AidevopsActions.LIST_PRIVATE_CONNECTIONS,
		AidevopsActions.LIST_RECOMMENDATIONS,
		AidevopsActions.LIST_SERVICES,
		AidevopsActions.LIST_TRIGGERS,
		AidevopsActions.LIST_WEBHOOKS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		AidevopsActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AidevopsActions.TAG_RESOURCE,
		AidevopsActions.UNTAG_RESOURCE,
	];
}

const AgentspaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aidevops:(?<region>[^:]*):(?<account>[^:]*):agentspace/(?<agentSpaceId>[^:/?]+)$",
);
const AssetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aidevops:(?<region>[^:]*):(?<account>[^:]*):agentspace/(?<agentSpaceId>[^:/?]+)/asset/(?<assetId>[^:/?]+)$",
);
const AssociationsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aidevops:(?<region>[^:]*):(?<account>[^:]*):agentspace/(?<agentSpaceId>[^:/?]+)/association/(?<associationId>[^:/?]+)$",
);
const PrivateConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aidevops:(?<region>[^:]*):(?<account>[^:]*):private-connection/(?<name>[^:/?]+)$",
);
const ServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aidevops:(?<region>[^:]*):(?<account>[^:]*):service/(?<serviceId>[^:/?]+)$",
);
const TriggerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aidevops:(?<region>[^:]*):(?<account>[^:]*):agentspace/(?<agentSpaceId>[^:/?]+)/trigger/(?<triggerId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for aidevops resources.
 */
export class AidevopsResources {
	/**
	 * Builds an ARN for the agentspace resource.
	 */
	static agentspace(props: {
		/** The AgentSpaceId component of the ARN. */
		readonly agentSpaceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aidevops:${props.region ?? "*"}:${props.account ?? "*"}:agentspace/${props.agentSpaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agentspace resource.
	 */
	static isValidAgentspaceArn(arn: string): boolean {
		return AgentspaceArnRegex.test(arn);
	}

	/**
	 * Parses a agentspace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentspaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		agentSpaceId: string;
	} {
		const match = AgentspaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agentspace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agentSpaceId: match.groups!.agentSpaceId,
		};
	}

	/**
	 * Builds an ARN for the asset resource.
	 */
	static asset(props: {
		/** The AgentSpaceId component of the ARN. */
		readonly agentSpaceId: string;
		/** The AssetId component of the ARN. */
		readonly assetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aidevops:${props.region ?? "*"}:${props.account ?? "*"}:agentspace/${props.agentSpaceId}/asset/${props.assetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the asset resource.
	 */
	static isValidAssetArn(arn: string): boolean {
		return AssetArnRegex.test(arn);
	}

	/**
	 * Parses a asset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		agentSpaceId: string;
		assetId: string;
	} {
		const match = AssetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid asset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agentSpaceId: match.groups!.agentSpaceId,
			assetId: match.groups!.assetId,
		};
	}

	/**
	 * Builds an ARN for the associations resource.
	 */
	static associations(props: {
		/** The AgentSpaceId component of the ARN. */
		readonly agentSpaceId: string;
		/** The AssociationId component of the ARN. */
		readonly associationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aidevops:${props.region ?? "*"}:${props.account ?? "*"}:agentspace/${props.agentSpaceId}/association/${props.associationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the associations resource.
	 */
	static isValidAssociationsArn(arn: string): boolean {
		return AssociationsArnRegex.test(arn);
	}

	/**
	 * Parses a associations ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssociationsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		agentSpaceId: string;
		associationId: string;
	} {
		const match = AssociationsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid associations ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agentSpaceId: match.groups!.agentSpaceId,
			associationId: match.groups!.associationId,
		};
	}

	/**
	 * Builds an ARN for the private-connection resource.
	 */
	static privateConnection(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aidevops:${props.region ?? "*"}:${props.account ?? "*"}:private-connection/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the private-connection resource.
	 */
	static isValidPrivateConnectionArn(arn: string): boolean {
		return PrivateConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a private-connection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePrivateConnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
		const match = PrivateConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid private-connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the service resource.
	 */
	static service(props: {
		/** The ServiceId component of the ARN. */
		readonly serviceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aidevops:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service resource.
	 */
	static isValidServiceArn(arn: string): boolean {
		return ServiceArnRegex.test(arn);
	}

	/**
	 * Parses a service ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceId: string;
	} {
		const match = ServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceId: match.groups!.serviceId,
		};
	}

	/**
	 * Builds an ARN for the trigger resource.
	 */
	static trigger(props: {
		/** The AgentSpaceId component of the ARN. */
		readonly agentSpaceId: string;
		/** The TriggerId component of the ARN. */
		readonly triggerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aidevops:${props.region ?? "*"}:${props.account ?? "*"}:agentspace/${props.agentSpaceId}/trigger/${props.triggerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the trigger resource.
	 */
	static isValidTriggerArn(arn: string): boolean {
		return TriggerArnRegex.test(arn);
	}

	/**
	 * Parses a trigger ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTriggerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		agentSpaceId: string;
		triggerId: string;
	} {
		const match = TriggerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid trigger ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agentSpaceId: match.groups!.agentSpaceId,
			triggerId: match.groups!.triggerId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for aidevops.
 */
export class AidevopsOperations {
	/** IAM actions required for the AssociateService API call. */
	static readonly ASSOCIATE_SERVICE: string[] = [
		"aidevops:AssociateService",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAgentSpace API call. */
	static readonly CREATE_AGENT_SPACE: string[] = [
		"aidevops:CreateAgentSpace",
		"aidevops:TagResource",
	];
	/** IAM actions required for the CreateAsset API call. */
	static readonly CREATE_ASSET: string[] = [];
	/** IAM actions required for the CreateAssetFile API call. */
	static readonly CREATE_ASSET_FILE: string[] = [];
	/** IAM actions required for the CreateBacklogTask API call. */
	static readonly CREATE_BACKLOG_TASK: string[] = [];
	/** IAM actions required for the CreateChat API call. */
	static readonly CREATE_CHAT: string[] = [];
	/** IAM actions required for the CreatePrivateConnection API call. */
	static readonly CREATE_PRIVATE_CONNECTION: string[] = [
		"aidevops:CreatePrivateConnection",
		"aidevops:TagResource",
	];
	/** IAM actions required for the CreateTrigger API call. */
	static readonly CREATE_TRIGGER: string[] = [];
	/** IAM actions required for the DeleteAgentSpace API call. */
	static readonly DELETE_AGENT_SPACE: string[] = ["aidevops:DeleteAgentSpace"];
	/** IAM actions required for the DeleteAsset API call. */
	static readonly DELETE_ASSET: string[] = [];
	/** IAM actions required for the DeleteAssetFile API call. */
	static readonly DELETE_ASSET_FILE: string[] = [];
	/** IAM actions required for the DeletePrivateConnection API call. */
	static readonly DELETE_PRIVATE_CONNECTION: string[] = [
		"aidevops:DeletePrivateConnection",
	];
	/** IAM actions required for the DeleteTrigger API call. */
	static readonly DELETE_TRIGGER: string[] = [];
	/** IAM actions required for the DeregisterService API call. */
	static readonly DEREGISTER_SERVICE: string[] = ["aidevops:DeregisterService"];
	/** IAM actions required for the DescribePrivateConnection API call. */
	static readonly DESCRIBE_PRIVATE_CONNECTION: string[] = [
		"aidevops:DescribePrivateConnection",
	];
	/** IAM actions required for the DisableOperatorApp API call. */
	static readonly DISABLE_OPERATOR_APP: string[] = [
		"aidevops:DisableOperatorApp",
	];
	/** IAM actions required for the DisassociateService API call. */
	static readonly DISASSOCIATE_SERVICE: string[] = [
		"aidevops:DisassociateService",
	];
	/** IAM actions required for the EnableOperatorApp API call. */
	static readonly ENABLE_OPERATOR_APP: string[] = [
		"aidevops:EnableOperatorApp",
		"iam:PassRole",
	];
	/** IAM actions required for the GetAccountUsage API call. */
	static readonly GET_ACCOUNT_USAGE: string[] = [];
	/** IAM actions required for the GetAgentSpace API call. */
	static readonly GET_AGENT_SPACE: string[] = ["aidevops:GetAgentSpace"];
	/** IAM actions required for the GetAsset API call. */
	static readonly GET_ASSET: string[] = [];
	/** IAM actions required for the GetAssetContent API call. */
	static readonly GET_ASSET_CONTENT: string[] = [];
	/** IAM actions required for the GetAssetFile API call. */
	static readonly GET_ASSET_FILE: string[] = [];
	/** IAM actions required for the GetAssociation API call. */
	static readonly GET_ASSOCIATION: string[] = ["aidevops:GetAssociation"];
	/** IAM actions required for the GetBacklogTask API call. */
	static readonly GET_BACKLOG_TASK: string[] = [];
	/** IAM actions required for the GetOperatorApp API call. */
	static readonly GET_OPERATOR_APP: string[] = ["aidevops:GetOperatorApp"];
	/** IAM actions required for the GetRecommendation API call. */
	static readonly GET_RECOMMENDATION: string[] = [];
	/** IAM actions required for the GetService API call. */
	static readonly GET_SERVICE: string[] = ["aidevops:GetService"];
	/** IAM actions required for the GetTrigger API call. */
	static readonly GET_TRIGGER: string[] = [];
	/** IAM actions required for the ListAgentSpaces API call. */
	static readonly LIST_AGENT_SPACES: string[] = ["aidevops:ListAgentSpaces"];
	/** IAM actions required for the ListAssetFiles API call. */
	static readonly LIST_ASSET_FILES: string[] = [];
	/** IAM actions required for the ListAssetTypes API call. */
	static readonly LIST_ASSET_TYPES: string[] = [];
	/** IAM actions required for the ListAssetVersions API call. */
	static readonly LIST_ASSET_VERSIONS: string[] = [];
	/** IAM actions required for the ListAssets API call. */
	static readonly LIST_ASSETS: string[] = [];
	/** IAM actions required for the ListAssociations API call. */
	static readonly LIST_ASSOCIATIONS: string[] = ["aidevops:ListAssociations"];
	/** IAM actions required for the ListBacklogTasks API call. */
	static readonly LIST_BACKLOG_TASKS: string[] = [];
	/** IAM actions required for the ListChats API call. */
	static readonly LIST_CHATS: string[] = [];
	/** IAM actions required for the ListExecutions API call. */
	static readonly LIST_EXECUTIONS: string[] = [];
	/** IAM actions required for the ListGoals API call. */
	static readonly LIST_GOALS: string[] = [];
	/** IAM actions required for the ListJournalRecords API call. */
	static readonly LIST_JOURNAL_RECORDS: string[] = [];
	/** IAM actions required for the ListPendingMessages API call. */
	static readonly LIST_PENDING_MESSAGES: string[] = [];
	/** IAM actions required for the ListPrivateConnections API call. */
	static readonly LIST_PRIVATE_CONNECTIONS: string[] = [
		"aidevops:ListPrivateConnections",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly LIST_RECOMMENDATIONS: string[] = [];
	/** IAM actions required for the ListServices API call. */
	static readonly LIST_SERVICES: string[] = ["aidevops:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"aidevops:ListTagsForResource",
	];
	/** IAM actions required for the ListTriggers API call. */
	static readonly LIST_TRIGGERS: string[] = [];
	/** IAM actions required for the ListWebhooks API call. */
	static readonly LIST_WEBHOOKS: string[] = ["aidevops:ListWebhooks"];
	/** IAM actions required for the RegisterService API call. */
	static readonly REGISTER_SERVICE: string[] = [
		"iam:PassRole",
		"aidevops:RegisterService",
		"aidevops:TagResource",
	];
	/** IAM actions required for the SendMessage API call. */
	static readonly SEND_MESSAGE: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["aidevops:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["aidevops:UntagResource"];
	/** IAM actions required for the UpdateAgentSpace API call. */
	static readonly UPDATE_AGENT_SPACE: string[] = ["aidevops:UpdateAgentSpace"];
	/** IAM actions required for the UpdateAsset API call. */
	static readonly UPDATE_ASSET: string[] = [];
	/** IAM actions required for the UpdateAssetFile API call. */
	static readonly UPDATE_ASSET_FILE: string[] = [];
	/** IAM actions required for the UpdateAssociation API call. */
	static readonly UPDATE_ASSOCIATION: string[] = [
		"iam:PassRole",
		"aidevops:UpdateAssociation",
	];
	/** IAM actions required for the UpdateBacklogTask API call. */
	static readonly UPDATE_BACKLOG_TASK: string[] = [];
	/** IAM actions required for the UpdateGoal API call. */
	static readonly UPDATE_GOAL: string[] = [];
	/** IAM actions required for the UpdateOperatorAppIdpConfig API call. */
	static readonly UPDATE_OPERATOR_APP_IDP_CONFIG: string[] = [
		"aidevops:UpdateOperatorAppIdpConfig",
	];
	/** IAM actions required for the UpdatePrivateConnectionCertificate API call. */
	static readonly UPDATE_PRIVATE_CONNECTION_CERTIFICATE: string[] = [
		"aidevops:UpdatePrivateConnectionCertificate",
	];
	/** IAM actions required for the UpdateRecommendation API call. */
	static readonly UPDATE_RECOMMENDATION: string[] = [];
	/** IAM actions required for the UpdateTrigger API call. */
	static readonly UPDATE_TRIGGER: string[] = [];
	/** IAM actions required for the ValidateAwsAssociations API call. */
	static readonly VALIDATE_AWS_ASSOCIATIONS: string[] = [
		"aidevops:ValidateAwsAssociations",
	];
}

/**
 * Condition key constants and builders for aidevops.
 */
export class AidevopsConditions {
	/** Condition keys applicable to the CreateAgentSpace action. */
	static readonly CREATE_AGENT_SPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePrivateConnection action. */
	static readonly CREATE_PRIVATE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAgentSpace action. */
	static readonly DELETE_AGENT_SPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeletePrivateConnection action. */
	static readonly DELETE_PRIVATE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeregisterService action. */
	static readonly DEREGISTER_SERVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribePrivateConnection action. */
	static readonly DESCRIBE_PRIVATE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAgentSpace action. */
	static readonly GET_AGENT_SPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetService action. */
	static readonly GET_SERVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RegisterService action. */
	static readonly REGISTER_SERVICE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateAgentSpace action. */
	static readonly UPDATE_AGENT_SPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdatePrivateConnectionCertificate action. */
	static readonly UPDATE_PRIVATE_CONNECTION_CERTIFICATE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
