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
	static readonly AllowVendedLogDeliveryForResource =
		"aidevops:AllowVendedLogDeliveryForResource";
	/** [Write] aidevops:AssociateService */
	static readonly AssociateService = "aidevops:AssociateService";
	/** [Write] aidevops:CreateAccessToken */
	static readonly CreateAccessToken = "aidevops:CreateAccessToken";
	/** [Write] aidevops:CreateAgentSpace */
	static readonly CreateAgentSpace = "aidevops:CreateAgentSpace";
	/** [Write] aidevops:CreateAsset */
	static readonly CreateAsset = "aidevops:CreateAsset";
	/** [Write] aidevops:CreateAssetFile */
	static readonly CreateAssetFile = "aidevops:CreateAssetFile";
	/** [Write] aidevops:CreateBacklogTask */
	static readonly CreateBacklogTask = "aidevops:CreateBacklogTask";
	/** [Write] aidevops:CreateChat */
	static readonly CreateChat = "aidevops:CreateChat";
	/** [Write] aidevops:CreateKnowledgeItem */
	static readonly CreateKnowledgeItem = "aidevops:CreateKnowledgeItem";
	/** [Write] aidevops:CreateOneTimeLoginSession */
	static readonly CreateOneTimeLoginSession =
		"aidevops:CreateOneTimeLoginSession";
	/** [Write] aidevops:CreatePrivateConnection */
	static readonly CreatePrivateConnection = "aidevops:CreatePrivateConnection";
	/** [Write] aidevops:CreateTrigger */
	static readonly CreateTrigger = "aidevops:CreateTrigger";
	/** [Write] aidevops:DeleteAgentSpace */
	static readonly DeleteAgentSpace = "aidevops:DeleteAgentSpace";
	/** [Write] aidevops:DeleteAsset */
	static readonly DeleteAsset = "aidevops:DeleteAsset";
	/** [Write] aidevops:DeleteAssetFile */
	static readonly DeleteAssetFile = "aidevops:DeleteAssetFile";
	/** [Write] aidevops:DeleteKnowledgeItem */
	static readonly DeleteKnowledgeItem = "aidevops:DeleteKnowledgeItem";
	/** [Write] aidevops:DeletePrivateConnection */
	static readonly DeletePrivateConnection = "aidevops:DeletePrivateConnection";
	/** [Write] aidevops:DeleteTrigger */
	static readonly DeleteTrigger = "aidevops:DeleteTrigger";
	/** [Write] aidevops:DeregisterService */
	static readonly DeregisterService = "aidevops:DeregisterService";
	/** [Read] aidevops:DescribePrivateConnection */
	static readonly DescribePrivateConnection =
		"aidevops:DescribePrivateConnection";
	/** [Read] aidevops:DescribeServices */
	static readonly DescribeServices = "aidevops:DescribeServices";
	/** [Write] aidevops:DescribeSupportLevel */
	static readonly DescribeSupportLevel = "aidevops:DescribeSupportLevel";
	/** [Write] aidevops:DisableOperatorApp */
	static readonly DisableOperatorApp = "aidevops:DisableOperatorApp";
	/** [Write] aidevops:DisassociateService */
	static readonly DisassociateService = "aidevops:DisassociateService";
	/** [Write] aidevops:DiscoverTopology */
	static readonly DiscoverTopology = "aidevops:DiscoverTopology";
	/** [Write] aidevops:EnableOperatorApp */
	static readonly EnableOperatorApp = "aidevops:EnableOperatorApp";
	/** [Write] aidevops:EndChatForCase */
	static readonly EndChatForCase = "aidevops:EndChatForCase";
	/** [Read] aidevops:GetAccessToken */
	static readonly actionGetAccessToken = "aidevops:GetAccessToken";
	/** [Read] aidevops:GetAccountUsage */
	static readonly actionGetAccountUsage = "aidevops:GetAccountUsage";
	/** [Read] aidevops:GetAgentSpace */
	static readonly actionGetAgentSpace = "aidevops:GetAgentSpace";
	/** [Read] aidevops:GetAsset */
	static readonly actionGetAsset = "aidevops:GetAsset";
	/** [Read] aidevops:GetAssetContent */
	static readonly actionGetAssetContent = "aidevops:GetAssetContent";
	/** [Read] aidevops:GetAssetFile */
	static readonly actionGetAssetFile = "aidevops:GetAssetFile";
	/** [Read] aidevops:GetAssociation */
	static readonly actionGetAssociation = "aidevops:GetAssociation";
	/** [Read] aidevops:GetBacklogTask */
	static readonly actionGetBacklogTask = "aidevops:GetBacklogTask";
	/** [Read] aidevops:GetKnowledgeItem */
	static readonly actionGetKnowledgeItem = "aidevops:GetKnowledgeItem";
	/** [Read] aidevops:GetOperatorApp */
	static readonly actionGetOperatorApp = "aidevops:GetOperatorApp";
	/** [Read] aidevops:GetRecommendation */
	static readonly actionGetRecommendation = "aidevops:GetRecommendation";
	/** [Read] aidevops:GetService */
	static readonly actionGetService = "aidevops:GetService";
	/** [Read] aidevops:GetTrigger */
	static readonly actionGetTrigger = "aidevops:GetTrigger";
	/** [Write] aidevops:InitiateChatForCase */
	static readonly InitiateChatForCase = "aidevops:InitiateChatForCase";
	/** [List] aidevops:ListAccessTokens */
	static readonly ListAccessTokens = "aidevops:ListAccessTokens";
	/** [List] aidevops:ListAgentSpaces */
	static readonly ListAgentSpaces = "aidevops:ListAgentSpaces";
	/** [List] aidevops:ListAssetFiles */
	static readonly ListAssetFiles = "aidevops:ListAssetFiles";
	/** [List] aidevops:ListAssetTypes */
	static readonly ListAssetTypes = "aidevops:ListAssetTypes";
	/** [List] aidevops:ListAssetVersions */
	static readonly ListAssetVersions = "aidevops:ListAssetVersions";
	/** [List] aidevops:ListAssets */
	static readonly ListAssets = "aidevops:ListAssets";
	/** [List] aidevops:ListAssociations */
	static readonly ListAssociations = "aidevops:ListAssociations";
	/** [List] aidevops:ListBacklogTasks */
	static readonly ListBacklogTasks = "aidevops:ListBacklogTasks";
	/** [List] aidevops:ListChats */
	static readonly ListChats = "aidevops:ListChats";
	/** [List] aidevops:ListExecutions */
	static readonly ListExecutions = "aidevops:ListExecutions";
	/** [List] aidevops:ListGoals */
	static readonly ListGoals = "aidevops:ListGoals";
	/** [List] aidevops:ListJournalRecords */
	static readonly ListJournalRecords = "aidevops:ListJournalRecords";
	/** [List] aidevops:ListKnowledgeItemVersions */
	static readonly ListKnowledgeItemVersions =
		"aidevops:ListKnowledgeItemVersions";
	/** [List] aidevops:ListKnowledgeItems */
	static readonly ListKnowledgeItems = "aidevops:ListKnowledgeItems";
	/** [List] aidevops:ListPendingMessages */
	static readonly ListPendingMessages = "aidevops:ListPendingMessages";
	/** [List] aidevops:ListPrivateConnections */
	static readonly ListPrivateConnections = "aidevops:ListPrivateConnections";
	/** [List] aidevops:ListRecommendations */
	static readonly ListRecommendations = "aidevops:ListRecommendations";
	/** [List] aidevops:ListServices */
	static readonly ListServices = "aidevops:ListServices";
	/** [Read] aidevops:ListTagsForResource */
	static readonly ListTagsForResource = "aidevops:ListTagsForResource";
	/** [List] aidevops:ListTriggers */
	static readonly ListTriggers = "aidevops:ListTriggers";
	/** [List] aidevops:ListWebhooks */
	static readonly ListWebhooks = "aidevops:ListWebhooks";
	/** [Write] aidevops:RegisterService */
	static readonly RegisterService = "aidevops:RegisterService";
	/** [Write] aidevops:RevokeAccessToken */
	static readonly RevokeAccessToken = "aidevops:RevokeAccessToken";
	/** [Write] aidevops:RotateAccessToken */
	static readonly RotateAccessToken = "aidevops:RotateAccessToken";
	/** [Read] aidevops:SearchServiceAccessibleResource */
	static readonly SearchServiceAccessibleResource =
		"aidevops:SearchServiceAccessibleResource";
	/** [Write] aidevops:SendMessage */
	static readonly SendMessage = "aidevops:SendMessage";
	/** [Tagging] aidevops:TagResource */
	static readonly TagResource = "aidevops:TagResource";
	/** [Tagging] aidevops:UntagResource */
	static readonly UntagResource = "aidevops:UntagResource";
	/** [Write] aidevops:UpdateAgentSpace */
	static readonly UpdateAgentSpace = "aidevops:UpdateAgentSpace";
	/** [Write] aidevops:UpdateApprovalAction */
	static readonly UpdateApprovalAction = "aidevops:UpdateApprovalAction";
	/** [Write] aidevops:UpdateAsset */
	static readonly UpdateAsset = "aidevops:UpdateAsset";
	/** [Write] aidevops:UpdateAssetFile */
	static readonly UpdateAssetFile = "aidevops:UpdateAssetFile";
	/** [Write] aidevops:UpdateAssociation */
	static readonly UpdateAssociation = "aidevops:UpdateAssociation";
	/** [Write] aidevops:UpdateBacklogTask */
	static readonly UpdateBacklogTask = "aidevops:UpdateBacklogTask";
	/** [Write] aidevops:UpdateGoal */
	static readonly UpdateGoal = "aidevops:UpdateGoal";
	/** [Write] aidevops:UpdateKnowledgeItem */
	static readonly UpdateKnowledgeItem = "aidevops:UpdateKnowledgeItem";
	/** [Write] aidevops:UpdateOperatorAppIdpConfig */
	static readonly UpdateOperatorAppIdpConfig =
		"aidevops:UpdateOperatorAppIdpConfig";
	/** [Write] aidevops:UpdatePrivateConnectionCertificate */
	static readonly UpdatePrivateConnectionCertificate =
		"aidevops:UpdatePrivateConnectionCertificate";
	/** [Write] aidevops:UpdateRecommendation */
	static readonly UpdateRecommendation = "aidevops:UpdateRecommendation";
	/** [Write] aidevops:UpdateTrigger */
	static readonly UpdateTrigger = "aidevops:UpdateTrigger";
	/** [Write] aidevops:ValidateAwsAssociations */
	static readonly ValidateAwsAssociations = "aidevops:ValidateAwsAssociations";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AidevopsActions.DescribePrivateConnection,
		AidevopsActions.DescribeServices,
		AidevopsActions.actionGetAccessToken,
		AidevopsActions.actionGetAccountUsage,
		AidevopsActions.actionGetAgentSpace,
		AidevopsActions.actionGetAsset,
		AidevopsActions.actionGetAssetContent,
		AidevopsActions.actionGetAssetFile,
		AidevopsActions.actionGetAssociation,
		AidevopsActions.actionGetBacklogTask,
		AidevopsActions.actionGetKnowledgeItem,
		AidevopsActions.actionGetOperatorApp,
		AidevopsActions.actionGetRecommendation,
		AidevopsActions.actionGetService,
		AidevopsActions.actionGetTrigger,
		AidevopsActions.ListTagsForResource,
		AidevopsActions.SearchServiceAccessibleResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AidevopsActions.AssociateService,
		AidevopsActions.CreateAccessToken,
		AidevopsActions.CreateAgentSpace,
		AidevopsActions.CreateAsset,
		AidevopsActions.CreateAssetFile,
		AidevopsActions.CreateBacklogTask,
		AidevopsActions.CreateChat,
		AidevopsActions.CreateKnowledgeItem,
		AidevopsActions.CreateOneTimeLoginSession,
		AidevopsActions.CreatePrivateConnection,
		AidevopsActions.CreateTrigger,
		AidevopsActions.DeleteAgentSpace,
		AidevopsActions.DeleteAsset,
		AidevopsActions.DeleteAssetFile,
		AidevopsActions.DeleteKnowledgeItem,
		AidevopsActions.DeletePrivateConnection,
		AidevopsActions.DeleteTrigger,
		AidevopsActions.DeregisterService,
		AidevopsActions.DescribeSupportLevel,
		AidevopsActions.DisableOperatorApp,
		AidevopsActions.DisassociateService,
		AidevopsActions.DiscoverTopology,
		AidevopsActions.EnableOperatorApp,
		AidevopsActions.EndChatForCase,
		AidevopsActions.InitiateChatForCase,
		AidevopsActions.RegisterService,
		AidevopsActions.RevokeAccessToken,
		AidevopsActions.RotateAccessToken,
		AidevopsActions.SendMessage,
		AidevopsActions.UpdateAgentSpace,
		AidevopsActions.UpdateApprovalAction,
		AidevopsActions.UpdateAsset,
		AidevopsActions.UpdateAssetFile,
		AidevopsActions.UpdateAssociation,
		AidevopsActions.UpdateBacklogTask,
		AidevopsActions.UpdateGoal,
		AidevopsActions.UpdateKnowledgeItem,
		AidevopsActions.UpdateOperatorAppIdpConfig,
		AidevopsActions.UpdatePrivateConnectionCertificate,
		AidevopsActions.UpdateRecommendation,
		AidevopsActions.UpdateTrigger,
		AidevopsActions.ValidateAwsAssociations,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AidevopsActions.ListAccessTokens,
		AidevopsActions.ListAgentSpaces,
		AidevopsActions.ListAssetFiles,
		AidevopsActions.ListAssetTypes,
		AidevopsActions.ListAssetVersions,
		AidevopsActions.ListAssets,
		AidevopsActions.ListAssociations,
		AidevopsActions.ListBacklogTasks,
		AidevopsActions.ListChats,
		AidevopsActions.ListExecutions,
		AidevopsActions.ListGoals,
		AidevopsActions.ListJournalRecords,
		AidevopsActions.ListKnowledgeItemVersions,
		AidevopsActions.ListKnowledgeItems,
		AidevopsActions.ListPendingMessages,
		AidevopsActions.ListPrivateConnections,
		AidevopsActions.ListRecommendations,
		AidevopsActions.ListServices,
		AidevopsActions.ListTriggers,
		AidevopsActions.ListWebhooks,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		AidevopsActions.AllowVendedLogDeliveryForResource,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AidevopsActions.TagResource,
		AidevopsActions.UntagResource,
	];
}

/**
 * Properties for building a agentspace ARN.
 */
export interface AidevopsAgentspaceArnProps {
	/** The AgentSpaceId component of the ARN. */
	readonly agentSpaceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a agentspace ARN.
 */
export interface AidevopsAgentspaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AgentSpaceId component. */
	readonly agentSpaceId: string;
}

/**
 * Properties for building a asset ARN.
 */
export interface AidevopsAssetArnProps {
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
}

/**
 * Parsed components of a asset ARN.
 */
export interface AidevopsAssetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AgentSpaceId component. */
	readonly agentSpaceId: string;
	/** The AssetId component. */
	readonly assetId: string;
}

/**
 * Properties for building a associations ARN.
 */
export interface AidevopsAssociationsArnProps {
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
}

/**
 * Parsed components of a associations ARN.
 */
export interface AidevopsAssociationsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AgentSpaceId component. */
	readonly agentSpaceId: string;
	/** The AssociationId component. */
	readonly associationId: string;
}

/**
 * Properties for building a private-connection ARN.
 */
export interface AidevopsPrivateConnectionArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a private-connection ARN.
 */
export interface AidevopsPrivateConnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a service ARN.
 */
export interface AidevopsServiceArnProps {
	/** The ServiceId component of the ARN. */
	readonly serviceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a service ARN.
 */
export interface AidevopsServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceId component. */
	readonly serviceId: string;
}

/**
 * Properties for building a trigger ARN.
 */
export interface AidevopsTriggerArnProps {
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
}

/**
 * Parsed components of a trigger ARN.
 */
export interface AidevopsTriggerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AgentSpaceId component. */
	readonly agentSpaceId: string;
	/** The TriggerId component. */
	readonly triggerId: string;
}

const AgentspaceArnRegex =
	/^arn:(?<partition>[^:]+):aidevops:(?<region>[^:]*):(?<account>[^:]*):agentspace\/(?<agentSpaceId>[^:/?]+)$/;
const AssetArnRegex =
	/^arn:(?<partition>[^:]+):aidevops:(?<region>[^:]*):(?<account>[^:]*):agentspace\/(?<agentSpaceId>[^:/?]+)\/asset\/(?<assetId>[^:/?]+)$/;
const AssociationsArnRegex =
	/^arn:(?<partition>[^:]+):aidevops:(?<region>[^:]*):(?<account>[^:]*):agentspace\/(?<agentSpaceId>[^:/?]+)\/association\/(?<associationId>[^:/?]+)$/;
const PrivateConnectionArnRegex =
	/^arn:(?<partition>[^:]+):aidevops:(?<region>[^:]*):(?<account>[^:]*):private-connection\/(?<name>[^:/?]+)$/;
const ServiceArnRegex =
	/^arn:(?<partition>[^:]+):aidevops:(?<region>[^:]*):(?<account>[^:]*):service\/(?<serviceId>[^:/?]+)$/;
const TriggerArnRegex =
	/^arn:(?<partition>[^:]+):aidevops:(?<region>[^:]*):(?<account>[^:]*):agentspace\/(?<agentSpaceId>[^:/?]+)\/trigger\/(?<triggerId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for aidevops resources.
 */
export class AidevopsResources {
	/**
	 * Builds an ARN for the agentspace resource.
	 */
	static agentspace(props: AidevopsAgentspaceArnProps): string {
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
	static parseAgentspaceArn(arn: string): AidevopsAgentspaceArnComponents {
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
	static asset(props: AidevopsAssetArnProps): string {
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
	static parseAssetArn(arn: string): AidevopsAssetArnComponents {
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
	static associations(props: AidevopsAssociationsArnProps): string {
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
	static parseAssociationsArn(arn: string): AidevopsAssociationsArnComponents {
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
	static privateConnection(props: AidevopsPrivateConnectionArnProps): string {
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
	static parsePrivateConnectionArn(
		arn: string,
	): AidevopsPrivateConnectionArnComponents {
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
	static service(props: AidevopsServiceArnProps): string {
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
	static parseServiceArn(arn: string): AidevopsServiceArnComponents {
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
	static trigger(props: AidevopsTriggerArnProps): string {
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
	static parseTriggerArn(arn: string): AidevopsTriggerArnComponents {
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
	static readonly AssociateService: string[] = [
		"aidevops:AssociateService",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAgentSpace API call. */
	static readonly CreateAgentSpace: string[] = [
		"aidevops:CreateAgentSpace",
		"aidevops:TagResource",
	];
	/** IAM actions required for the CreateAsset API call. */
	static readonly CreateAsset: string[] = [];
	/** IAM actions required for the CreateAssetFile API call. */
	static readonly CreateAssetFile: string[] = [];
	/** IAM actions required for the CreateBacklogTask API call. */
	static readonly CreateBacklogTask: string[] = [];
	/** IAM actions required for the CreateChat API call. */
	static readonly CreateChat: string[] = [];
	/** IAM actions required for the CreatePrivateConnection API call. */
	static readonly CreatePrivateConnection: string[] = [
		"aidevops:CreatePrivateConnection",
		"aidevops:TagResource",
	];
	/** IAM actions required for the CreateTrigger API call. */
	static readonly CreateTrigger: string[] = [];
	/** IAM actions required for the DeleteAgentSpace API call. */
	static readonly DeleteAgentSpace: string[] = ["aidevops:DeleteAgentSpace"];
	/** IAM actions required for the DeleteAsset API call. */
	static readonly DeleteAsset: string[] = [];
	/** IAM actions required for the DeleteAssetFile API call. */
	static readonly DeleteAssetFile: string[] = [];
	/** IAM actions required for the DeletePrivateConnection API call. */
	static readonly DeletePrivateConnection: string[] = [
		"aidevops:DeletePrivateConnection",
	];
	/** IAM actions required for the DeleteTrigger API call. */
	static readonly DeleteTrigger: string[] = [];
	/** IAM actions required for the DeregisterService API call. */
	static readonly DeregisterService: string[] = ["aidevops:DeregisterService"];
	/** IAM actions required for the DescribePrivateConnection API call. */
	static readonly DescribePrivateConnection: string[] = [
		"aidevops:DescribePrivateConnection",
	];
	/** IAM actions required for the DisableOperatorApp API call. */
	static readonly DisableOperatorApp: string[] = [
		"aidevops:DisableOperatorApp",
	];
	/** IAM actions required for the DisassociateService API call. */
	static readonly DisassociateService: string[] = [
		"aidevops:DisassociateService",
	];
	/** IAM actions required for the EnableOperatorApp API call. */
	static readonly EnableOperatorApp: string[] = [
		"aidevops:EnableOperatorApp",
		"iam:PassRole",
	];
	/** IAM actions required for the GetAccountUsage API call. */
	static readonly opGetAccountUsage: string[] = [];
	/** IAM actions required for the GetAgentSpace API call. */
	static readonly opGetAgentSpace: string[] = ["aidevops:GetAgentSpace"];
	/** IAM actions required for the GetAsset API call. */
	static readonly opGetAsset: string[] = [];
	/** IAM actions required for the GetAssetContent API call. */
	static readonly opGetAssetContent: string[] = [];
	/** IAM actions required for the GetAssetFile API call. */
	static readonly opGetAssetFile: string[] = [];
	/** IAM actions required for the GetAssociation API call. */
	static readonly opGetAssociation: string[] = ["aidevops:GetAssociation"];
	/** IAM actions required for the GetBacklogTask API call. */
	static readonly opGetBacklogTask: string[] = [];
	/** IAM actions required for the GetOperatorApp API call. */
	static readonly opGetOperatorApp: string[] = ["aidevops:GetOperatorApp"];
	/** IAM actions required for the GetRecommendation API call. */
	static readonly opGetRecommendation: string[] = [];
	/** IAM actions required for the GetService API call. */
	static readonly opGetService: string[] = ["aidevops:GetService"];
	/** IAM actions required for the GetTrigger API call. */
	static readonly opGetTrigger: string[] = [];
	/** IAM actions required for the ListAgentSpaces API call. */
	static readonly ListAgentSpaces: string[] = ["aidevops:ListAgentSpaces"];
	/** IAM actions required for the ListAssetFiles API call. */
	static readonly ListAssetFiles: string[] = [];
	/** IAM actions required for the ListAssetTypes API call. */
	static readonly ListAssetTypes: string[] = [];
	/** IAM actions required for the ListAssetVersions API call. */
	static readonly ListAssetVersions: string[] = [];
	/** IAM actions required for the ListAssets API call. */
	static readonly ListAssets: string[] = [];
	/** IAM actions required for the ListAssociations API call. */
	static readonly ListAssociations: string[] = ["aidevops:ListAssociations"];
	/** IAM actions required for the ListBacklogTasks API call. */
	static readonly ListBacklogTasks: string[] = [];
	/** IAM actions required for the ListChats API call. */
	static readonly ListChats: string[] = [];
	/** IAM actions required for the ListExecutions API call. */
	static readonly ListExecutions: string[] = [];
	/** IAM actions required for the ListGoals API call. */
	static readonly ListGoals: string[] = [];
	/** IAM actions required for the ListJournalRecords API call. */
	static readonly ListJournalRecords: string[] = [];
	/** IAM actions required for the ListPendingMessages API call. */
	static readonly ListPendingMessages: string[] = [];
	/** IAM actions required for the ListPrivateConnections API call. */
	static readonly ListPrivateConnections: string[] = [
		"aidevops:ListPrivateConnections",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly ListRecommendations: string[] = [];
	/** IAM actions required for the ListServices API call. */
	static readonly ListServices: string[] = ["aidevops:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"aidevops:ListTagsForResource",
	];
	/** IAM actions required for the ListTriggers API call. */
	static readonly ListTriggers: string[] = [];
	/** IAM actions required for the ListWebhooks API call. */
	static readonly ListWebhooks: string[] = ["aidevops:ListWebhooks"];
	/** IAM actions required for the RegisterService API call. */
	static readonly RegisterService: string[] = [
		"iam:PassRole",
		"aidevops:RegisterService",
		"aidevops:TagResource",
	];
	/** IAM actions required for the SendMessage API call. */
	static readonly SendMessage: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["aidevops:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["aidevops:UntagResource"];
	/** IAM actions required for the UpdateAgentSpace API call. */
	static readonly UpdateAgentSpace: string[] = ["aidevops:UpdateAgentSpace"];
	/** IAM actions required for the UpdateAsset API call. */
	static readonly UpdateAsset: string[] = [];
	/** IAM actions required for the UpdateAssetFile API call. */
	static readonly UpdateAssetFile: string[] = [];
	/** IAM actions required for the UpdateAssociation API call. */
	static readonly UpdateAssociation: string[] = [
		"iam:PassRole",
		"aidevops:UpdateAssociation",
	];
	/** IAM actions required for the UpdateBacklogTask API call. */
	static readonly UpdateBacklogTask: string[] = [];
	/** IAM actions required for the UpdateGoal API call. */
	static readonly UpdateGoal: string[] = [];
	/** IAM actions required for the UpdateOperatorAppIdpConfig API call. */
	static readonly UpdateOperatorAppIdpConfig: string[] = [
		"aidevops:UpdateOperatorAppIdpConfig",
	];
	/** IAM actions required for the UpdatePrivateConnectionCertificate API call. */
	static readonly UpdatePrivateConnectionCertificate: string[] = [
		"aidevops:UpdatePrivateConnectionCertificate",
	];
	/** IAM actions required for the UpdateRecommendation API call. */
	static readonly UpdateRecommendation: string[] = [];
	/** IAM actions required for the UpdateTrigger API call. */
	static readonly UpdateTrigger: string[] = [];
	/** IAM actions required for the ValidateAwsAssociations API call. */
	static readonly ValidateAwsAssociations: string[] = [
		"aidevops:ValidateAwsAssociations",
	];
}

/**
 * Condition key constants and builders for aidevops.
 */
export class AidevopsConditions {
	/** Condition keys applicable to the CreateAgentSpace action. */
	static readonly CreateAgentSpaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePrivateConnection action. */
	static readonly CreatePrivateConnectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAgentSpace action. */
	static readonly DeleteAgentSpaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeletePrivateConnection action. */
	static readonly DeletePrivateConnectionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeregisterService action. */
	static readonly DeregisterServiceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribePrivateConnection action. */
	static readonly DescribePrivateConnectionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAgentSpace action. */
	static readonly actionGetAgentSpaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetService action. */
	static readonly actionGetServiceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RegisterService action. */
	static readonly RegisterServiceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateAgentSpace action. */
	static readonly UpdateAgentSpaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdatePrivateConnectionCertificate action. */
	static readonly UpdatePrivateConnectionCertificateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
