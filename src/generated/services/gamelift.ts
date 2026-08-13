// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/gamelift.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the gamelift service.
 */
export class GameLiftActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "gamelift";

	/** [Write] gamelift:AcceptMatch */
	static readonly ACCEPT_MATCH = "gamelift:AcceptMatch";
	/** [Write] gamelift:ClaimGameServer */
	static readonly CLAIM_GAME_SERVER = "gamelift:ClaimGameServer";
	/** [Write] gamelift:CreateAlias */
	static readonly CREATE_ALIAS = "gamelift:CreateAlias";
	/** [Write] gamelift:CreateBuild */
	static readonly CREATE_BUILD = "gamelift:CreateBuild";
	/** [Write] gamelift:CreateContainerFleet */
	static readonly CREATE_CONTAINER_FLEET = "gamelift:CreateContainerFleet";
	/** [Write] gamelift:CreateContainerGroupDefinition */
	static readonly CREATE_CONTAINER_GROUP_DEFINITION =
		"gamelift:CreateContainerGroupDefinition";
	/** [Write] gamelift:CreateFleet */
	static readonly CREATE_FLEET = "gamelift:CreateFleet";
	/** [Write] gamelift:CreateFleetLocations */
	static readonly CREATE_FLEET_LOCATIONS = "gamelift:CreateFleetLocations";
	/** [Write] gamelift:CreateGameServerGroup */
	static readonly CREATE_GAME_SERVER_GROUP = "gamelift:CreateGameServerGroup";
	/** [Write] gamelift:CreateGameSession */
	static readonly CREATE_GAME_SESSION = "gamelift:CreateGameSession";
	/** [Write] gamelift:CreateGameSessionQueue */
	static readonly CREATE_GAME_SESSION_QUEUE = "gamelift:CreateGameSessionQueue";
	/** [Write] gamelift:CreateLocation */
	static readonly CREATE_LOCATION = "gamelift:CreateLocation";
	/** [Write] gamelift:CreateMatchmakingConfiguration */
	static readonly CREATE_MATCHMAKING_CONFIGURATION =
		"gamelift:CreateMatchmakingConfiguration";
	/** [Write] gamelift:CreateMatchmakingRuleSet */
	static readonly CREATE_MATCHMAKING_RULE_SET =
		"gamelift:CreateMatchmakingRuleSet";
	/** [Write] gamelift:CreatePlayerSession */
	static readonly CREATE_PLAYER_SESSION = "gamelift:CreatePlayerSession";
	/** [Write] gamelift:CreatePlayerSessions */
	static readonly CREATE_PLAYER_SESSIONS = "gamelift:CreatePlayerSessions";
	/** [Write] gamelift:CreateScript */
	static readonly CREATE_SCRIPT = "gamelift:CreateScript";
	/** [Write] gamelift:CreateVpcPeeringAuthorization */
	static readonly CREATE_VPC_PEERING_AUTHORIZATION =
		"gamelift:CreateVpcPeeringAuthorization";
	/** [Write] gamelift:CreateVpcPeeringConnection */
	static readonly CREATE_VPC_PEERING_CONNECTION =
		"gamelift:CreateVpcPeeringConnection";
	/** [Write] gamelift:DeleteAlias */
	static readonly DELETE_ALIAS = "gamelift:DeleteAlias";
	/** [Write] gamelift:DeleteBuild */
	static readonly DELETE_BUILD = "gamelift:DeleteBuild";
	/** [Write] gamelift:DeleteContainerFleet */
	static readonly DELETE_CONTAINER_FLEET = "gamelift:DeleteContainerFleet";
	/** [Write] gamelift:DeleteContainerGroupDefinition */
	static readonly DELETE_CONTAINER_GROUP_DEFINITION =
		"gamelift:DeleteContainerGroupDefinition";
	/** [Write] gamelift:DeleteFleet */
	static readonly DELETE_FLEET = "gamelift:DeleteFleet";
	/** [Write] gamelift:DeleteFleetLocations */
	static readonly DELETE_FLEET_LOCATIONS = "gamelift:DeleteFleetLocations";
	/** [Write] gamelift:DeleteGameServerGroup */
	static readonly DELETE_GAME_SERVER_GROUP = "gamelift:DeleteGameServerGroup";
	/** [Write] gamelift:DeleteGameSessionQueue */
	static readonly DELETE_GAME_SESSION_QUEUE = "gamelift:DeleteGameSessionQueue";
	/** [Write] gamelift:DeleteLocation */
	static readonly DELETE_LOCATION = "gamelift:DeleteLocation";
	/** [Write] gamelift:DeleteMatchmakingConfiguration */
	static readonly DELETE_MATCHMAKING_CONFIGURATION =
		"gamelift:DeleteMatchmakingConfiguration";
	/** [Write] gamelift:DeleteMatchmakingRuleSet */
	static readonly DELETE_MATCHMAKING_RULE_SET =
		"gamelift:DeleteMatchmakingRuleSet";
	/** [Write] gamelift:DeleteScalingPolicy */
	static readonly DELETE_SCALING_POLICY = "gamelift:DeleteScalingPolicy";
	/** [Write] gamelift:DeleteScript */
	static readonly DELETE_SCRIPT = "gamelift:DeleteScript";
	/** [Write] gamelift:DeleteVpcPeeringAuthorization */
	static readonly DELETE_VPC_PEERING_AUTHORIZATION =
		"gamelift:DeleteVpcPeeringAuthorization";
	/** [Write] gamelift:DeleteVpcPeeringConnection */
	static readonly DELETE_VPC_PEERING_CONNECTION =
		"gamelift:DeleteVpcPeeringConnection";
	/** [Write] gamelift:DeregisterCompute */
	static readonly DEREGISTER_COMPUTE = "gamelift:DeregisterCompute";
	/** [Write] gamelift:DeregisterGameServer */
	static readonly DEREGISTER_GAME_SERVER = "gamelift:DeregisterGameServer";
	/** [Read] gamelift:DescribeAlias */
	static readonly DESCRIBE_ALIAS = "gamelift:DescribeAlias";
	/** [Read] gamelift:DescribeBuild */
	static readonly DESCRIBE_BUILD = "gamelift:DescribeBuild";
	/** [Read] gamelift:DescribeCompute */
	static readonly DESCRIBE_COMPUTE = "gamelift:DescribeCompute";
	/** [Read] gamelift:DescribeContainerFleet */
	static readonly DESCRIBE_CONTAINER_FLEET = "gamelift:DescribeContainerFleet";
	/** [Read] gamelift:DescribeContainerGroupDefinition */
	static readonly DESCRIBE_CONTAINER_GROUP_DEFINITION =
		"gamelift:DescribeContainerGroupDefinition";
	/** [Read] gamelift:DescribeContainerGroupPortMappings */
	static readonly DESCRIBE_CONTAINER_GROUP_PORT_MAPPINGS =
		"gamelift:DescribeContainerGroupPortMappings";
	/** [Read] gamelift:DescribeEC2InstanceLimits */
	static readonly DESCRIBE_EC2_INSTANCE_LIMITS =
		"gamelift:DescribeEC2InstanceLimits";
	/** [Read] gamelift:DescribeFleetAttributes */
	static readonly DESCRIBE_FLEET_ATTRIBUTES =
		"gamelift:DescribeFleetAttributes";
	/** [Read] gamelift:DescribeFleetCapacity */
	static readonly DESCRIBE_FLEET_CAPACITY = "gamelift:DescribeFleetCapacity";
	/** [Read] gamelift:DescribeFleetDeployment */
	static readonly DESCRIBE_FLEET_DEPLOYMENT =
		"gamelift:DescribeFleetDeployment";
	/** [Read] gamelift:DescribeFleetEvents */
	static readonly DESCRIBE_FLEET_EVENTS = "gamelift:DescribeFleetEvents";
	/** [Read] gamelift:DescribeFleetLocationAttributes */
	static readonly DESCRIBE_FLEET_LOCATION_ATTRIBUTES =
		"gamelift:DescribeFleetLocationAttributes";
	/** [Read] gamelift:DescribeFleetLocationCapacity */
	static readonly DESCRIBE_FLEET_LOCATION_CAPACITY =
		"gamelift:DescribeFleetLocationCapacity";
	/** [Read] gamelift:DescribeFleetLocationUtilization */
	static readonly DESCRIBE_FLEET_LOCATION_UTILIZATION =
		"gamelift:DescribeFleetLocationUtilization";
	/** [Read] gamelift:DescribeFleetPortSettings */
	static readonly DESCRIBE_FLEET_PORT_SETTINGS =
		"gamelift:DescribeFleetPortSettings";
	/** [Read] gamelift:DescribeFleetUtilization */
	static readonly DESCRIBE_FLEET_UTILIZATION =
		"gamelift:DescribeFleetUtilization";
	/** [Read] gamelift:DescribeGameServer */
	static readonly DESCRIBE_GAME_SERVER = "gamelift:DescribeGameServer";
	/** [Read] gamelift:DescribeGameServerGroup */
	static readonly DESCRIBE_GAME_SERVER_GROUP =
		"gamelift:DescribeGameServerGroup";
	/** [Read] gamelift:DescribeGameServerInstances */
	static readonly DESCRIBE_GAME_SERVER_INSTANCES =
		"gamelift:DescribeGameServerInstances";
	/** [Read] gamelift:DescribeGameSessionDetails */
	static readonly DESCRIBE_GAME_SESSION_DETAILS =
		"gamelift:DescribeGameSessionDetails";
	/** [Read] gamelift:DescribeGameSessionPlacement */
	static readonly DESCRIBE_GAME_SESSION_PLACEMENT =
		"gamelift:DescribeGameSessionPlacement";
	/** [Read] gamelift:DescribeGameSessionQueues */
	static readonly DESCRIBE_GAME_SESSION_QUEUES =
		"gamelift:DescribeGameSessionQueues";
	/** [Read] gamelift:DescribeGameSessions */
	static readonly DESCRIBE_GAME_SESSIONS = "gamelift:DescribeGameSessions";
	/** [Read] gamelift:DescribeInstances */
	static readonly DESCRIBE_INSTANCES = "gamelift:DescribeInstances";
	/** [Read] gamelift:DescribeMatchmaking */
	static readonly DESCRIBE_MATCHMAKING = "gamelift:DescribeMatchmaking";
	/** [Read] gamelift:DescribeMatchmakingConfigurations */
	static readonly DESCRIBE_MATCHMAKING_CONFIGURATIONS =
		"gamelift:DescribeMatchmakingConfigurations";
	/** [Read] gamelift:DescribeMatchmakingRuleSets */
	static readonly DESCRIBE_MATCHMAKING_RULE_SETS =
		"gamelift:DescribeMatchmakingRuleSets";
	/** [Read] gamelift:DescribePlayerSessions */
	static readonly DESCRIBE_PLAYER_SESSIONS = "gamelift:DescribePlayerSessions";
	/** [Read] gamelift:DescribeRuntimeConfiguration */
	static readonly DESCRIBE_RUNTIME_CONFIGURATION =
		"gamelift:DescribeRuntimeConfiguration";
	/** [Read] gamelift:DescribeScalingPolicies */
	static readonly DESCRIBE_SCALING_POLICIES =
		"gamelift:DescribeScalingPolicies";
	/** [Read] gamelift:DescribeScript */
	static readonly DESCRIBE_SCRIPT = "gamelift:DescribeScript";
	/** [Read] gamelift:DescribeVpcPeeringAuthorizations */
	static readonly DESCRIBE_VPC_PEERING_AUTHORIZATIONS =
		"gamelift:DescribeVpcPeeringAuthorizations";
	/** [Read] gamelift:DescribeVpcPeeringConnections */
	static readonly DESCRIBE_VPC_PEERING_CONNECTIONS =
		"gamelift:DescribeVpcPeeringConnections";
	/** [Read] gamelift:GetComputeAccess */
	static readonly GET_COMPUTE_ACCESS = "gamelift:GetComputeAccess";
	/** [Read] gamelift:GetComputeAuthToken */
	static readonly GET_COMPUTE_AUTH_TOKEN = "gamelift:GetComputeAuthToken";
	/** [Read] gamelift:GetGameSessionLogUrl */
	static readonly GET_GAME_SESSION_LOG_URL = "gamelift:GetGameSessionLogUrl";
	/** [Read] gamelift:GetInstanceAccess */
	static readonly GET_INSTANCE_ACCESS = "gamelift:GetInstanceAccess";
	/** [Read] gamelift:GetPlayerConnectionDetails */
	static readonly GET_PLAYER_CONNECTION_DETAILS =
		"gamelift:GetPlayerConnectionDetails";
	/** [List] gamelift:ListAliases */
	static readonly LIST_ALIASES = "gamelift:ListAliases";
	/** [List] gamelift:ListBuilds */
	static readonly LIST_BUILDS = "gamelift:ListBuilds";
	/** [List] gamelift:ListCompute */
	static readonly LIST_COMPUTE = "gamelift:ListCompute";
	/** [List] gamelift:ListContainerFleets */
	static readonly LIST_CONTAINER_FLEETS = "gamelift:ListContainerFleets";
	/** [List] gamelift:ListContainerGroupDefinitionVersions */
	static readonly LIST_CONTAINER_GROUP_DEFINITION_VERSIONS =
		"gamelift:ListContainerGroupDefinitionVersions";
	/** [List] gamelift:ListContainerGroupDefinitions */
	static readonly LIST_CONTAINER_GROUP_DEFINITIONS =
		"gamelift:ListContainerGroupDefinitions";
	/** [List] gamelift:ListFleetDeployments */
	static readonly LIST_FLEET_DEPLOYMENTS = "gamelift:ListFleetDeployments";
	/** [List] gamelift:ListFleets */
	static readonly LIST_FLEETS = "gamelift:ListFleets";
	/** [List] gamelift:ListGameServerGroups */
	static readonly LIST_GAME_SERVER_GROUPS = "gamelift:ListGameServerGroups";
	/** [List] gamelift:ListGameServers */
	static readonly LIST_GAME_SERVERS = "gamelift:ListGameServers";
	/** [List] gamelift:ListLocations */
	static readonly LIST_LOCATIONS = "gamelift:ListLocations";
	/** [List] gamelift:ListScripts */
	static readonly LIST_SCRIPTS = "gamelift:ListScripts";
	/** [Read] gamelift:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "gamelift:ListTagsForResource";
	/** [Write] gamelift:PutScalingPolicy */
	static readonly PUT_SCALING_POLICY = "gamelift:PutScalingPolicy";
	/** [Write] gamelift:RegisterCompute */
	static readonly REGISTER_COMPUTE = "gamelift:RegisterCompute";
	/** [Write] gamelift:RegisterGameServer */
	static readonly REGISTER_GAME_SERVER = "gamelift:RegisterGameServer";
	/** [Read] gamelift:RequestUploadCredentials */
	static readonly REQUEST_UPLOAD_CREDENTIALS =
		"gamelift:RequestUploadCredentials";
	/** [Read] gamelift:ResolveAlias */
	static readonly RESOLVE_ALIAS = "gamelift:ResolveAlias";
	/** [Write] gamelift:ResumeGameServerGroup */
	static readonly RESUME_GAME_SERVER_GROUP = "gamelift:ResumeGameServerGroup";
	/** [Read] gamelift:SearchGameSessions */
	static readonly SEARCH_GAME_SESSIONS = "gamelift:SearchGameSessions";
	/** [Write] gamelift:StartFleetActions */
	static readonly START_FLEET_ACTIONS = "gamelift:StartFleetActions";
	/** [Write] gamelift:StartGameSessionPlacement */
	static readonly START_GAME_SESSION_PLACEMENT =
		"gamelift:StartGameSessionPlacement";
	/** [Write] gamelift:StartMatchBackfill */
	static readonly START_MATCH_BACKFILL = "gamelift:StartMatchBackfill";
	/** [Write] gamelift:StartMatchmaking */
	static readonly START_MATCHMAKING = "gamelift:StartMatchmaking";
	/** [Write] gamelift:StopFleetActions */
	static readonly STOP_FLEET_ACTIONS = "gamelift:StopFleetActions";
	/** [Write] gamelift:StopGameSessionPlacement */
	static readonly STOP_GAME_SESSION_PLACEMENT =
		"gamelift:StopGameSessionPlacement";
	/** [Write] gamelift:StopMatchmaking */
	static readonly STOP_MATCHMAKING = "gamelift:StopMatchmaking";
	/** [Write] gamelift:SuspendGameServerGroup */
	static readonly SUSPEND_GAME_SERVER_GROUP = "gamelift:SuspendGameServerGroup";
	/** [Tagging] gamelift:TagResource */
	static readonly TAG_RESOURCE = "gamelift:TagResource";
	/** [Write] gamelift:TerminateGameSession */
	static readonly TERMINATE_GAME_SESSION = "gamelift:TerminateGameSession";
	/** [Tagging] gamelift:UntagResource */
	static readonly UNTAG_RESOURCE = "gamelift:UntagResource";
	/** [Write] gamelift:UpdateAlias */
	static readonly UPDATE_ALIAS = "gamelift:UpdateAlias";
	/** [Write] gamelift:UpdateBuild */
	static readonly UPDATE_BUILD = "gamelift:UpdateBuild";
	/** [Write] gamelift:UpdateContainerFleet */
	static readonly UPDATE_CONTAINER_FLEET = "gamelift:UpdateContainerFleet";
	/** [Write] gamelift:UpdateContainerGroupDefinition */
	static readonly UPDATE_CONTAINER_GROUP_DEFINITION =
		"gamelift:UpdateContainerGroupDefinition";
	/** [Write] gamelift:UpdateFleetAttributes */
	static readonly UPDATE_FLEET_ATTRIBUTES = "gamelift:UpdateFleetAttributes";
	/** [Write] gamelift:UpdateFleetCapacity */
	static readonly UPDATE_FLEET_CAPACITY = "gamelift:UpdateFleetCapacity";
	/** [Write] gamelift:UpdateFleetPortSettings */
	static readonly UPDATE_FLEET_PORT_SETTINGS =
		"gamelift:UpdateFleetPortSettings";
	/** [Write] gamelift:UpdateGameServer */
	static readonly UPDATE_GAME_SERVER = "gamelift:UpdateGameServer";
	/** [Write] gamelift:UpdateGameServerGroup */
	static readonly UPDATE_GAME_SERVER_GROUP = "gamelift:UpdateGameServerGroup";
	/** [Write] gamelift:UpdateGameSession */
	static readonly UPDATE_GAME_SESSION = "gamelift:UpdateGameSession";
	/** [Write] gamelift:UpdateGameSessionQueue */
	static readonly UPDATE_GAME_SESSION_QUEUE = "gamelift:UpdateGameSessionQueue";
	/** [Write] gamelift:UpdateMatchmakingConfiguration */
	static readonly UPDATE_MATCHMAKING_CONFIGURATION =
		"gamelift:UpdateMatchmakingConfiguration";
	/** [Write] gamelift:UpdateRuntimeConfiguration */
	static readonly UPDATE_RUNTIME_CONFIGURATION =
		"gamelift:UpdateRuntimeConfiguration";
	/** [Write] gamelift:UpdateScript */
	static readonly UPDATE_SCRIPT = "gamelift:UpdateScript";
	/** [Read] gamelift:ValidateMatchmakingRuleSet */
	static readonly VALIDATE_MATCHMAKING_RULE_SET =
		"gamelift:ValidateMatchmakingRuleSet";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		GameLiftActions.DESCRIBE_ALIAS,
		GameLiftActions.DESCRIBE_BUILD,
		GameLiftActions.DESCRIBE_COMPUTE,
		GameLiftActions.DESCRIBE_CONTAINER_FLEET,
		GameLiftActions.DESCRIBE_CONTAINER_GROUP_DEFINITION,
		GameLiftActions.DESCRIBE_CONTAINER_GROUP_PORT_MAPPINGS,
		GameLiftActions.DESCRIBE_EC2_INSTANCE_LIMITS,
		GameLiftActions.DESCRIBE_FLEET_ATTRIBUTES,
		GameLiftActions.DESCRIBE_FLEET_CAPACITY,
		GameLiftActions.DESCRIBE_FLEET_DEPLOYMENT,
		GameLiftActions.DESCRIBE_FLEET_EVENTS,
		GameLiftActions.DESCRIBE_FLEET_LOCATION_ATTRIBUTES,
		GameLiftActions.DESCRIBE_FLEET_LOCATION_CAPACITY,
		GameLiftActions.DESCRIBE_FLEET_LOCATION_UTILIZATION,
		GameLiftActions.DESCRIBE_FLEET_PORT_SETTINGS,
		GameLiftActions.DESCRIBE_FLEET_UTILIZATION,
		GameLiftActions.DESCRIBE_GAME_SERVER,
		GameLiftActions.DESCRIBE_GAME_SERVER_GROUP,
		GameLiftActions.DESCRIBE_GAME_SERVER_INSTANCES,
		GameLiftActions.DESCRIBE_GAME_SESSION_DETAILS,
		GameLiftActions.DESCRIBE_GAME_SESSION_PLACEMENT,
		GameLiftActions.DESCRIBE_GAME_SESSION_QUEUES,
		GameLiftActions.DESCRIBE_GAME_SESSIONS,
		GameLiftActions.DESCRIBE_INSTANCES,
		GameLiftActions.DESCRIBE_MATCHMAKING,
		GameLiftActions.DESCRIBE_MATCHMAKING_CONFIGURATIONS,
		GameLiftActions.DESCRIBE_MATCHMAKING_RULE_SETS,
		GameLiftActions.DESCRIBE_PLAYER_SESSIONS,
		GameLiftActions.DESCRIBE_RUNTIME_CONFIGURATION,
		GameLiftActions.DESCRIBE_SCALING_POLICIES,
		GameLiftActions.DESCRIBE_SCRIPT,
		GameLiftActions.DESCRIBE_VPC_PEERING_AUTHORIZATIONS,
		GameLiftActions.DESCRIBE_VPC_PEERING_CONNECTIONS,
		GameLiftActions.GET_COMPUTE_ACCESS,
		GameLiftActions.GET_COMPUTE_AUTH_TOKEN,
		GameLiftActions.GET_GAME_SESSION_LOG_URL,
		GameLiftActions.GET_INSTANCE_ACCESS,
		GameLiftActions.GET_PLAYER_CONNECTION_DETAILS,
		GameLiftActions.LIST_TAGS_FOR_RESOURCE,
		GameLiftActions.REQUEST_UPLOAD_CREDENTIALS,
		GameLiftActions.RESOLVE_ALIAS,
		GameLiftActions.SEARCH_GAME_SESSIONS,
		GameLiftActions.VALIDATE_MATCHMAKING_RULE_SET,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		GameLiftActions.ACCEPT_MATCH,
		GameLiftActions.CLAIM_GAME_SERVER,
		GameLiftActions.CREATE_ALIAS,
		GameLiftActions.CREATE_BUILD,
		GameLiftActions.CREATE_CONTAINER_FLEET,
		GameLiftActions.CREATE_CONTAINER_GROUP_DEFINITION,
		GameLiftActions.CREATE_FLEET,
		GameLiftActions.CREATE_FLEET_LOCATIONS,
		GameLiftActions.CREATE_GAME_SERVER_GROUP,
		GameLiftActions.CREATE_GAME_SESSION,
		GameLiftActions.CREATE_GAME_SESSION_QUEUE,
		GameLiftActions.CREATE_LOCATION,
		GameLiftActions.CREATE_MATCHMAKING_CONFIGURATION,
		GameLiftActions.CREATE_MATCHMAKING_RULE_SET,
		GameLiftActions.CREATE_PLAYER_SESSION,
		GameLiftActions.CREATE_PLAYER_SESSIONS,
		GameLiftActions.CREATE_SCRIPT,
		GameLiftActions.CREATE_VPC_PEERING_AUTHORIZATION,
		GameLiftActions.CREATE_VPC_PEERING_CONNECTION,
		GameLiftActions.DELETE_ALIAS,
		GameLiftActions.DELETE_BUILD,
		GameLiftActions.DELETE_CONTAINER_FLEET,
		GameLiftActions.DELETE_CONTAINER_GROUP_DEFINITION,
		GameLiftActions.DELETE_FLEET,
		GameLiftActions.DELETE_FLEET_LOCATIONS,
		GameLiftActions.DELETE_GAME_SERVER_GROUP,
		GameLiftActions.DELETE_GAME_SESSION_QUEUE,
		GameLiftActions.DELETE_LOCATION,
		GameLiftActions.DELETE_MATCHMAKING_CONFIGURATION,
		GameLiftActions.DELETE_MATCHMAKING_RULE_SET,
		GameLiftActions.DELETE_SCALING_POLICY,
		GameLiftActions.DELETE_SCRIPT,
		GameLiftActions.DELETE_VPC_PEERING_AUTHORIZATION,
		GameLiftActions.DELETE_VPC_PEERING_CONNECTION,
		GameLiftActions.DEREGISTER_COMPUTE,
		GameLiftActions.DEREGISTER_GAME_SERVER,
		GameLiftActions.PUT_SCALING_POLICY,
		GameLiftActions.REGISTER_COMPUTE,
		GameLiftActions.REGISTER_GAME_SERVER,
		GameLiftActions.RESUME_GAME_SERVER_GROUP,
		GameLiftActions.START_FLEET_ACTIONS,
		GameLiftActions.START_GAME_SESSION_PLACEMENT,
		GameLiftActions.START_MATCH_BACKFILL,
		GameLiftActions.START_MATCHMAKING,
		GameLiftActions.STOP_FLEET_ACTIONS,
		GameLiftActions.STOP_GAME_SESSION_PLACEMENT,
		GameLiftActions.STOP_MATCHMAKING,
		GameLiftActions.SUSPEND_GAME_SERVER_GROUP,
		GameLiftActions.TERMINATE_GAME_SESSION,
		GameLiftActions.UPDATE_ALIAS,
		GameLiftActions.UPDATE_BUILD,
		GameLiftActions.UPDATE_CONTAINER_FLEET,
		GameLiftActions.UPDATE_CONTAINER_GROUP_DEFINITION,
		GameLiftActions.UPDATE_FLEET_ATTRIBUTES,
		GameLiftActions.UPDATE_FLEET_CAPACITY,
		GameLiftActions.UPDATE_FLEET_PORT_SETTINGS,
		GameLiftActions.UPDATE_GAME_SERVER,
		GameLiftActions.UPDATE_GAME_SERVER_GROUP,
		GameLiftActions.UPDATE_GAME_SESSION,
		GameLiftActions.UPDATE_GAME_SESSION_QUEUE,
		GameLiftActions.UPDATE_MATCHMAKING_CONFIGURATION,
		GameLiftActions.UPDATE_RUNTIME_CONFIGURATION,
		GameLiftActions.UPDATE_SCRIPT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		GameLiftActions.LIST_ALIASES,
		GameLiftActions.LIST_BUILDS,
		GameLiftActions.LIST_COMPUTE,
		GameLiftActions.LIST_CONTAINER_FLEETS,
		GameLiftActions.LIST_CONTAINER_GROUP_DEFINITION_VERSIONS,
		GameLiftActions.LIST_CONTAINER_GROUP_DEFINITIONS,
		GameLiftActions.LIST_FLEET_DEPLOYMENTS,
		GameLiftActions.LIST_FLEETS,
		GameLiftActions.LIST_GAME_SERVER_GROUPS,
		GameLiftActions.LIST_GAME_SERVERS,
		GameLiftActions.LIST_LOCATIONS,
		GameLiftActions.LIST_SCRIPTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		GameLiftActions.TAG_RESOURCE,
		GameLiftActions.UNTAG_RESOURCE,
	];
}

const AliasArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*)::alias/(?<aliasId>[^:/?]+)$",
);
const BuildArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):build/(?<buildId>[^:/?]+)$",
);
const ContainerFleetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):containerfleet/(?<fleetId>[^:/?]+)$",
);
const ContainerGroupDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):containergroupdefinition/(?<name>[^:/?]+)$",
);
const FleetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):fleet/(?<fleetId>[^:/?]+)$",
);
const GameServerGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):gameservergroup/(?<gameServerGroupName>[^:/?]+)$",
);
const GameSessionQueueArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):gamesessionqueue/(?<gameSessionQueueName>[^:/?]+)$",
);
const LocationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):location/(?<locationId>[^:/?]+)$",
);
const MatchmakingConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):matchmakingconfiguration/(?<matchmakingConfigurationName>[^:/?]+)$",
);
const MatchmakingRuleSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):matchmakingruleset/(?<matchmakingRuleSetName>[^:/?]+)$",
);
const ScriptArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):script/(?<scriptId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for gamelift resources.
 */
export class GameLiftResources {
	/**
	 * Builds an ARN for the alias resource.
	 */
	static alias(props: {
		/** The AliasId component of the ARN. */
		readonly aliasId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gamelift:${props.region ?? "*"}::alias/${props.aliasId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the alias resource.
	 */
	static isValidAliasArn(arn: string): boolean {
		return AliasArnRegex.test(arn);
	}

	/**
	 * Parses a alias ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAliasArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		aliasId: string;
	} {
		const match = AliasArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid alias ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			aliasId: match.groups!.aliasId,
		};
	}

	/**
	 * Builds an ARN for the build resource.
	 */
	static build(props: {
		/** The BuildId component of the ARN. */
		readonly buildId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gamelift:${props.region ?? "*"}:${props.account ?? "*"}:build/${props.buildId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the build resource.
	 */
	static isValidBuildArn(arn: string): boolean {
		return BuildArnRegex.test(arn);
	}

	/**
	 * Parses a build ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBuildArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		buildId: string;
	} {
		const match = BuildArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid build ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			buildId: match.groups!.buildId,
		};
	}

	/**
	 * Builds an ARN for the containerFleet resource.
	 */
	static containerFleet(props: {
		/** The FleetId component of the ARN. */
		readonly fleetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gamelift:${props.region ?? "*"}:${props.account ?? "*"}:containerfleet/${props.fleetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the containerFleet resource.
	 */
	static isValidContainerFleetArn(arn: string): boolean {
		return ContainerFleetArnRegex.test(arn);
	}

	/**
	 * Parses a containerFleet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContainerFleetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fleetId: string;
	} {
		const match = ContainerFleetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid containerFleet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fleetId: match.groups!.fleetId,
		};
	}

	/**
	 * Builds an ARN for the containerGroupDefinition resource.
	 */
	static containerGroupDefinition(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gamelift:${props.region ?? "*"}:${props.account ?? "*"}:containergroupdefinition/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the containerGroupDefinition resource.
	 */
	static isValidContainerGroupDefinitionArn(arn: string): boolean {
		return ContainerGroupDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a containerGroupDefinition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContainerGroupDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
		const match = ContainerGroupDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid containerGroupDefinition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the fleet resource.
	 */
	static fleet(props: {
		/** The FleetId component of the ARN. */
		readonly fleetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gamelift:${props.region ?? "*"}:${props.account ?? "*"}:fleet/${props.fleetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the fleet resource.
	 */
	static isValidFleetArn(arn: string): boolean {
		return FleetArnRegex.test(arn);
	}

	/**
	 * Parses a fleet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFleetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fleetId: string;
	} {
		const match = FleetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid fleet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fleetId: match.groups!.fleetId,
		};
	}

	/**
	 * Builds an ARN for the gameServerGroup resource.
	 */
	static gameServerGroup(props: {
		/** The GameServerGroupName component of the ARN. */
		readonly gameServerGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gamelift:${props.region ?? "*"}:${props.account ?? "*"}:gameservergroup/${props.gameServerGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the gameServerGroup resource.
	 */
	static isValidGameServerGroupArn(arn: string): boolean {
		return GameServerGroupArnRegex.test(arn);
	}

	/**
	 * Parses a gameServerGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGameServerGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gameServerGroupName: string;
	} {
		const match = GameServerGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid gameServerGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gameServerGroupName: match.groups!.gameServerGroupName,
		};
	}

	/**
	 * Builds an ARN for the gameSessionQueue resource.
	 */
	static gameSessionQueue(props: {
		/** The GameSessionQueueName component of the ARN. */
		readonly gameSessionQueueName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gamelift:${props.region ?? "*"}:${props.account ?? "*"}:gamesessionqueue/${props.gameSessionQueueName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the gameSessionQueue resource.
	 */
	static isValidGameSessionQueueArn(arn: string): boolean {
		return GameSessionQueueArnRegex.test(arn);
	}

	/**
	 * Parses a gameSessionQueue ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGameSessionQueueArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gameSessionQueueName: string;
	} {
		const match = GameSessionQueueArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid gameSessionQueue ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gameSessionQueueName: match.groups!.gameSessionQueueName,
		};
	}

	/**
	 * Builds an ARN for the location resource.
	 */
	static location(props: {
		/** The LocationId component of the ARN. */
		readonly locationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gamelift:${props.region ?? "*"}:${props.account ?? "*"}:location/${props.locationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the location resource.
	 */
	static isValidLocationArn(arn: string): boolean {
		return LocationArnRegex.test(arn);
	}

	/**
	 * Parses a location ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLocationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		locationId: string;
	} {
		const match = LocationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid location ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			locationId: match.groups!.locationId,
		};
	}

	/**
	 * Builds an ARN for the matchmakingConfiguration resource.
	 */
	static matchmakingConfiguration(props: {
		/** The MatchmakingConfigurationName component of the ARN. */
		readonly matchmakingConfigurationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gamelift:${props.region ?? "*"}:${props.account ?? "*"}:matchmakingconfiguration/${props.matchmakingConfigurationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the matchmakingConfiguration resource.
	 */
	static isValidMatchmakingConfigurationArn(arn: string): boolean {
		return MatchmakingConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a matchmakingConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMatchmakingConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		matchmakingConfigurationName: string;
	} {
		const match = MatchmakingConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid matchmakingConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			matchmakingConfigurationName: match.groups!.matchmakingConfigurationName,
		};
	}

	/**
	 * Builds an ARN for the matchmakingRuleSet resource.
	 */
	static matchmakingRuleSet(props: {
		/** The MatchmakingRuleSetName component of the ARN. */
		readonly matchmakingRuleSetName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gamelift:${props.region ?? "*"}:${props.account ?? "*"}:matchmakingruleset/${props.matchmakingRuleSetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the matchmakingRuleSet resource.
	 */
	static isValidMatchmakingRuleSetArn(arn: string): boolean {
		return MatchmakingRuleSetArnRegex.test(arn);
	}

	/**
	 * Parses a matchmakingRuleSet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMatchmakingRuleSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		matchmakingRuleSetName: string;
	} {
		const match = MatchmakingRuleSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid matchmakingRuleSet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			matchmakingRuleSetName: match.groups!.matchmakingRuleSetName,
		};
	}

	/**
	 * Builds an ARN for the script resource.
	 */
	static script(props: {
		/** The ScriptId component of the ARN. */
		readonly scriptId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:gamelift:${props.region ?? "*"}:${props.account ?? "*"}:script/${props.scriptId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the script resource.
	 */
	static isValidScriptArn(arn: string): boolean {
		return ScriptArnRegex.test(arn);
	}

	/**
	 * Parses a script ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScriptArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		scriptId: string;
	} {
		const match = ScriptArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid script ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scriptId: match.groups!.scriptId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for gamelift.
 */
export class GameLiftOperations {
	/** IAM actions required for the AcceptMatch API call. */
	static readonly ACCEPT_MATCH: string[] = ["gamelift:AcceptMatch"];
	/** IAM actions required for the ClaimGameServer API call. */
	static readonly CLAIM_GAME_SERVER: string[] = ["gamelift:ClaimGameServer"];
	/** IAM actions required for the CreateAlias API call. */
	static readonly CREATE_ALIAS: string[] = [
		"gamelift:CreateAlias",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateBuild API call. */
	static readonly CREATE_BUILD: string[] = [
		"gamelift:CreateBuild",
		"gamelift:CreateBuild",
		"iam:PassRole",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateContainerFleet API call. */
	static readonly CREATE_CONTAINER_FLEET: string[] = [
		"gamelift:CreateContainerFleet",
		"gamelift:CreateContainerFleet",
		"iam:PassRole",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateContainerGroupDefinition API call. */
	static readonly CREATE_CONTAINER_GROUP_DEFINITION: string[] = [
		"gamelift:CreateContainerGroupDefinition",
		"gamelift:CreateContainerGroupDefinition",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateFleet API call. */
	static readonly CREATE_FLEET: string[] = [
		"gamelift:CreateFleet",
		"gamelift:CreateFleet",
		"iam:PassRole",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateFleetLocations API call. */
	static readonly CREATE_FLEET_LOCATIONS: string[] = [
		"gamelift:CreateFleetLocations",
	];
	/** IAM actions required for the CreateGameServerGroup API call. */
	static readonly CREATE_GAME_SERVER_GROUP: string[] = [
		"gamelift:CreateGameServerGroup",
		"gamelift:CreateGameServerGroup",
		"iam:PassRole",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateGameSession API call. */
	static readonly CREATE_GAME_SESSION: string[] = [
		"gamelift:CreateGameSession",
	];
	/** IAM actions required for the CreateGameSessionQueue API call. */
	static readonly CREATE_GAME_SESSION_QUEUE: string[] = [
		"gamelift:CreateGameSessionQueue",
		"gamelift:CreateGameSessionQueue",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateLocation API call. */
	static readonly CREATE_LOCATION: string[] = [
		"gamelift:CreateLocation",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateMatchmakingConfiguration API call. */
	static readonly CREATE_MATCHMAKING_CONFIGURATION: string[] = [
		"gamelift:CreateMatchmakingConfiguration",
		"gamelift:CreateMatchmakingConfiguration",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateMatchmakingRuleSet API call. */
	static readonly CREATE_MATCHMAKING_RULE_SET: string[] = [
		"gamelift:CreateMatchmakingRuleSet",
		"gamelift:CreateMatchmakingRuleSet",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreatePlayerSession API call. */
	static readonly CREATE_PLAYER_SESSION: string[] = [
		"gamelift:CreatePlayerSession",
	];
	/** IAM actions required for the CreatePlayerSessions API call. */
	static readonly CREATE_PLAYER_SESSIONS: string[] = [
		"gamelift:CreatePlayerSessions",
	];
	/** IAM actions required for the CreateScript API call. */
	static readonly CREATE_SCRIPT: string[] = [
		"gamelift:CreateScript",
		"gamelift:CreateScript",
		"iam:PassRole",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateVpcPeeringAuthorization API call. */
	static readonly CREATE_VPC_PEERING_AUTHORIZATION: string[] = [
		"gamelift:CreateVpcPeeringAuthorization",
	];
	/** IAM actions required for the CreateVpcPeeringConnection API call. */
	static readonly CREATE_VPC_PEERING_CONNECTION: string[] = [
		"gamelift:CreateVpcPeeringConnection",
	];
	/** IAM actions required for the DeleteAlias API call. */
	static readonly DELETE_ALIAS: string[] = ["gamelift:DeleteAlias"];
	/** IAM actions required for the DeleteBuild API call. */
	static readonly DELETE_BUILD: string[] = ["gamelift:DeleteBuild"];
	/** IAM actions required for the DeleteContainerFleet API call. */
	static readonly DELETE_CONTAINER_FLEET: string[] = [
		"gamelift:DeleteContainerFleet",
	];
	/** IAM actions required for the DeleteContainerGroupDefinition API call. */
	static readonly DELETE_CONTAINER_GROUP_DEFINITION: string[] = [
		"gamelift:DeleteContainerGroupDefinition",
	];
	/** IAM actions required for the DeleteFleet API call. */
	static readonly DELETE_FLEET: string[] = ["gamelift:DeleteFleet"];
	/** IAM actions required for the DeleteFleetLocations API call. */
	static readonly DELETE_FLEET_LOCATIONS: string[] = [
		"gamelift:DeleteFleetLocations",
	];
	/** IAM actions required for the DeleteGameServerGroup API call. */
	static readonly DELETE_GAME_SERVER_GROUP: string[] = [
		"gamelift:DeleteGameServerGroup",
	];
	/** IAM actions required for the DeleteGameSessionQueue API call. */
	static readonly DELETE_GAME_SESSION_QUEUE: string[] = [
		"gamelift:DeleteGameSessionQueue",
	];
	/** IAM actions required for the DeleteLocation API call. */
	static readonly DELETE_LOCATION: string[] = ["gamelift:DeleteLocation"];
	/** IAM actions required for the DeleteMatchmakingConfiguration API call. */
	static readonly DELETE_MATCHMAKING_CONFIGURATION: string[] = [
		"gamelift:DeleteMatchmakingConfiguration",
	];
	/** IAM actions required for the DeleteMatchmakingRuleSet API call. */
	static readonly DELETE_MATCHMAKING_RULE_SET: string[] = [
		"gamelift:DeleteMatchmakingRuleSet",
	];
	/** IAM actions required for the DeleteScalingPolicy API call. */
	static readonly DELETE_SCALING_POLICY: string[] = [
		"gamelift:DeleteScalingPolicy",
	];
	/** IAM actions required for the DeleteScript API call. */
	static readonly DELETE_SCRIPT: string[] = ["gamelift:DeleteScript"];
	/** IAM actions required for the DeleteVpcPeeringAuthorization API call. */
	static readonly DELETE_VPC_PEERING_AUTHORIZATION: string[] = [
		"gamelift:DeleteVpcPeeringAuthorization",
	];
	/** IAM actions required for the DeleteVpcPeeringConnection API call. */
	static readonly DELETE_VPC_PEERING_CONNECTION: string[] = [
		"gamelift:DeleteVpcPeeringConnection",
	];
	/** IAM actions required for the DeregisterCompute API call. */
	static readonly DEREGISTER_COMPUTE: string[] = ["gamelift:DeregisterCompute"];
	/** IAM actions required for the DeregisterGameServer API call. */
	static readonly DEREGISTER_GAME_SERVER: string[] = [
		"gamelift:DeregisterGameServer",
	];
	/** IAM actions required for the DescribeAlias API call. */
	static readonly DESCRIBE_ALIAS: string[] = ["gamelift:DescribeAlias"];
	/** IAM actions required for the DescribeBuild API call. */
	static readonly DESCRIBE_BUILD: string[] = ["gamelift:DescribeBuild"];
	/** IAM actions required for the DescribeCompute API call. */
	static readonly DESCRIBE_COMPUTE: string[] = ["gamelift:DescribeCompute"];
	/** IAM actions required for the DescribeContainerFleet API call. */
	static readonly DESCRIBE_CONTAINER_FLEET: string[] = [
		"gamelift:DescribeContainerFleet",
	];
	/** IAM actions required for the DescribeContainerGroupDefinition API call. */
	static readonly DESCRIBE_CONTAINER_GROUP_DEFINITION: string[] = [
		"gamelift:DescribeContainerGroupDefinition",
	];
	/** IAM actions required for the DescribeContainerGroupPortMappings API call. */
	static readonly DESCRIBE_CONTAINER_GROUP_PORT_MAPPINGS: string[] = [
		"gamelift:DescribeContainerGroupPortMappings",
	];
	/** IAM actions required for the DescribeEC2InstanceLimits API call. */
	static readonly DESCRIBE_EC2_INSTANCE_LIMITS: string[] = [
		"gamelift:DescribeEC2InstanceLimits",
	];
	/** IAM actions required for the DescribeFleetAttributes API call. */
	static readonly DESCRIBE_FLEET_ATTRIBUTES: string[] = [
		"gamelift:DescribeFleetAttributes",
	];
	/** IAM actions required for the DescribeFleetCapacity API call. */
	static readonly DESCRIBE_FLEET_CAPACITY: string[] = [
		"gamelift:DescribeFleetCapacity",
	];
	/** IAM actions required for the DescribeFleetDeployment API call. */
	static readonly DESCRIBE_FLEET_DEPLOYMENT: string[] = [
		"gamelift:DescribeFleetDeployment",
	];
	/** IAM actions required for the DescribeFleetEvents API call. */
	static readonly DESCRIBE_FLEET_EVENTS: string[] = [
		"gamelift:DescribeFleetEvents",
	];
	/** IAM actions required for the DescribeFleetLocationAttributes API call. */
	static readonly DESCRIBE_FLEET_LOCATION_ATTRIBUTES: string[] = [
		"gamelift:DescribeFleetLocationAttributes",
	];
	/** IAM actions required for the DescribeFleetLocationCapacity API call. */
	static readonly DESCRIBE_FLEET_LOCATION_CAPACITY: string[] = [
		"gamelift:DescribeFleetLocationCapacity",
	];
	/** IAM actions required for the DescribeFleetLocationUtilization API call. */
	static readonly DESCRIBE_FLEET_LOCATION_UTILIZATION: string[] = [
		"gamelift:DescribeFleetLocationUtilization",
	];
	/** IAM actions required for the DescribeFleetPortSettings API call. */
	static readonly DESCRIBE_FLEET_PORT_SETTINGS: string[] = [
		"gamelift:DescribeFleetPortSettings",
	];
	/** IAM actions required for the DescribeFleetUtilization API call. */
	static readonly DESCRIBE_FLEET_UTILIZATION: string[] = [
		"gamelift:DescribeFleetUtilization",
	];
	/** IAM actions required for the DescribeGameServer API call. */
	static readonly DESCRIBE_GAME_SERVER: string[] = [
		"gamelift:DescribeGameServer",
	];
	/** IAM actions required for the DescribeGameServerGroup API call. */
	static readonly DESCRIBE_GAME_SERVER_GROUP: string[] = [
		"gamelift:DescribeGameServerGroup",
	];
	/** IAM actions required for the DescribeGameServerInstances API call. */
	static readonly DESCRIBE_GAME_SERVER_INSTANCES: string[] = [
		"gamelift:DescribeGameServerInstances",
	];
	/** IAM actions required for the DescribeGameSessionDetails API call. */
	static readonly DESCRIBE_GAME_SESSION_DETAILS: string[] = [
		"gamelift:DescribeGameSessionDetails",
	];
	/** IAM actions required for the DescribeGameSessionPlacement API call. */
	static readonly DESCRIBE_GAME_SESSION_PLACEMENT: string[] = [
		"gamelift:DescribeGameSessionPlacement",
	];
	/** IAM actions required for the DescribeGameSessionQueues API call. */
	static readonly DESCRIBE_GAME_SESSION_QUEUES: string[] = [
		"gamelift:DescribeGameSessionQueues",
	];
	/** IAM actions required for the DescribeGameSessions API call. */
	static readonly DESCRIBE_GAME_SESSIONS: string[] = [
		"gamelift:DescribeGameSessions",
	];
	/** IAM actions required for the DescribeInstances API call. */
	static readonly DESCRIBE_INSTANCES: string[] = ["gamelift:DescribeInstances"];
	/** IAM actions required for the DescribeMatchmaking API call. */
	static readonly DESCRIBE_MATCHMAKING: string[] = [
		"gamelift:DescribeMatchmaking",
	];
	/** IAM actions required for the DescribeMatchmakingConfigurations API call. */
	static readonly DESCRIBE_MATCHMAKING_CONFIGURATIONS: string[] = [
		"gamelift:DescribeMatchmakingConfigurations",
	];
	/** IAM actions required for the DescribeMatchmakingRuleSets API call. */
	static readonly DESCRIBE_MATCHMAKING_RULE_SETS: string[] = [
		"gamelift:DescribeMatchmakingRuleSets",
	];
	/** IAM actions required for the DescribePlayerSessions API call. */
	static readonly DESCRIBE_PLAYER_SESSIONS: string[] = [
		"gamelift:DescribePlayerSessions",
	];
	/** IAM actions required for the DescribeRuntimeConfiguration API call. */
	static readonly DESCRIBE_RUNTIME_CONFIGURATION: string[] = [
		"gamelift:DescribeRuntimeConfiguration",
	];
	/** IAM actions required for the DescribeScalingPolicies API call. */
	static readonly DESCRIBE_SCALING_POLICIES: string[] = [
		"gamelift:DescribeScalingPolicies",
	];
	/** IAM actions required for the DescribeScript API call. */
	static readonly DESCRIBE_SCRIPT: string[] = ["gamelift:DescribeScript"];
	/** IAM actions required for the DescribeVpcPeeringAuthorizations API call. */
	static readonly DESCRIBE_VPC_PEERING_AUTHORIZATIONS: string[] = [
		"gamelift:DescribeVpcPeeringAuthorizations",
	];
	/** IAM actions required for the DescribeVpcPeeringConnections API call. */
	static readonly DESCRIBE_VPC_PEERING_CONNECTIONS: string[] = [
		"gamelift:DescribeVpcPeeringConnections",
	];
	/** IAM actions required for the GetComputeAccess API call. */
	static readonly GET_COMPUTE_ACCESS: string[] = ["gamelift:GetComputeAccess"];
	/** IAM actions required for the GetComputeAuthToken API call. */
	static readonly GET_COMPUTE_AUTH_TOKEN: string[] = [
		"gamelift:GetComputeAuthToken",
	];
	/** IAM actions required for the GetGameSessionLogUrl API call. */
	static readonly GET_GAME_SESSION_LOG_URL: string[] = [
		"gamelift:GetGameSessionLogUrl",
	];
	/** IAM actions required for the GetInstanceAccess API call. */
	static readonly GET_INSTANCE_ACCESS: string[] = [
		"gamelift:GetInstanceAccess",
	];
	/** IAM actions required for the GetPlayerConnectionDetails API call. */
	static readonly GET_PLAYER_CONNECTION_DETAILS: string[] = [
		"gamelift:GetPlayerConnectionDetails",
	];
	/** IAM actions required for the ListAliases API call. */
	static readonly LIST_ALIASES: string[] = ["gamelift:ListAliases"];
	/** IAM actions required for the ListBuilds API call. */
	static readonly LIST_BUILDS: string[] = ["gamelift:ListBuilds"];
	/** IAM actions required for the ListCompute API call. */
	static readonly LIST_COMPUTE: string[] = ["gamelift:ListCompute"];
	/** IAM actions required for the ListContainerFleets API call. */
	static readonly LIST_CONTAINER_FLEETS: string[] = [
		"gamelift:ListContainerFleets",
	];
	/** IAM actions required for the ListContainerGroupDefinitionVersions API call. */
	static readonly LIST_CONTAINER_GROUP_DEFINITION_VERSIONS: string[] = [
		"gamelift:ListContainerGroupDefinitionVersions",
	];
	/** IAM actions required for the ListContainerGroupDefinitions API call. */
	static readonly LIST_CONTAINER_GROUP_DEFINITIONS: string[] = [
		"gamelift:ListContainerGroupDefinitions",
	];
	/** IAM actions required for the ListFleetDeployments API call. */
	static readonly LIST_FLEET_DEPLOYMENTS: string[] = [
		"gamelift:ListFleetDeployments",
	];
	/** IAM actions required for the ListFleets API call. */
	static readonly LIST_FLEETS: string[] = ["gamelift:ListFleets"];
	/** IAM actions required for the ListGameServerGroups API call. */
	static readonly LIST_GAME_SERVER_GROUPS: string[] = [
		"gamelift:ListGameServerGroups",
	];
	/** IAM actions required for the ListGameServers API call. */
	static readonly LIST_GAME_SERVERS: string[] = ["gamelift:ListGameServers"];
	/** IAM actions required for the ListLocations API call. */
	static readonly LIST_LOCATIONS: string[] = ["gamelift:ListLocations"];
	/** IAM actions required for the ListScripts API call. */
	static readonly LIST_SCRIPTS: string[] = ["gamelift:ListScripts"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"gamelift:ListTagsForResource",
	];
	/** IAM actions required for the PutScalingPolicy API call. */
	static readonly PUT_SCALING_POLICY: string[] = ["gamelift:PutScalingPolicy"];
	/** IAM actions required for the RegisterCompute API call. */
	static readonly REGISTER_COMPUTE: string[] = ["gamelift:RegisterCompute"];
	/** IAM actions required for the RegisterGameServer API call. */
	static readonly REGISTER_GAME_SERVER: string[] = [
		"gamelift:RegisterGameServer",
	];
	/** IAM actions required for the RequestUploadCredentials API call. */
	static readonly REQUEST_UPLOAD_CREDENTIALS: string[] = [
		"gamelift:RequestUploadCredentials",
	];
	/** IAM actions required for the ResolveAlias API call. */
	static readonly RESOLVE_ALIAS: string[] = ["gamelift:ResolveAlias"];
	/** IAM actions required for the ResumeGameServerGroup API call. */
	static readonly RESUME_GAME_SERVER_GROUP: string[] = [
		"gamelift:ResumeGameServerGroup",
	];
	/** IAM actions required for the SearchGameSessions API call. */
	static readonly SEARCH_GAME_SESSIONS: string[] = [
		"gamelift:SearchGameSessions",
	];
	/** IAM actions required for the StartFleetActions API call. */
	static readonly START_FLEET_ACTIONS: string[] = [
		"gamelift:StartFleetActions",
	];
	/** IAM actions required for the StartGameSessionPlacement API call. */
	static readonly START_GAME_SESSION_PLACEMENT: string[] = [
		"gamelift:StartGameSessionPlacement",
	];
	/** IAM actions required for the StartMatchBackfill API call. */
	static readonly START_MATCH_BACKFILL: string[] = [
		"gamelift:StartMatchBackfill",
	];
	/** IAM actions required for the StartMatchmaking API call. */
	static readonly START_MATCHMAKING: string[] = ["gamelift:StartMatchmaking"];
	/** IAM actions required for the StopFleetActions API call. */
	static readonly STOP_FLEET_ACTIONS: string[] = ["gamelift:StopFleetActions"];
	/** IAM actions required for the StopGameSessionPlacement API call. */
	static readonly STOP_GAME_SESSION_PLACEMENT: string[] = [
		"gamelift:StopGameSessionPlacement",
	];
	/** IAM actions required for the StopMatchmaking API call. */
	static readonly STOP_MATCHMAKING: string[] = ["gamelift:StopMatchmaking"];
	/** IAM actions required for the SuspendGameServerGroup API call. */
	static readonly SUSPEND_GAME_SERVER_GROUP: string[] = [
		"gamelift:SuspendGameServerGroup",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"gamelift:TagResource",
		"gamelift:TagResource",
	];
	/** IAM actions required for the TerminateGameSession API call. */
	static readonly TERMINATE_GAME_SESSION: string[] = [
		"gamelift:TerminateGameSession",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"gamelift:UntagResource",
		"gamelift:UntagResource",
	];
	/** IAM actions required for the UpdateAlias API call. */
	static readonly UPDATE_ALIAS: string[] = ["gamelift:UpdateAlias"];
	/** IAM actions required for the UpdateBuild API call. */
	static readonly UPDATE_BUILD: string[] = ["gamelift:UpdateBuild"];
	/** IAM actions required for the UpdateContainerFleet API call. */
	static readonly UPDATE_CONTAINER_FLEET: string[] = [
		"gamelift:UpdateContainerFleet",
	];
	/** IAM actions required for the UpdateContainerGroupDefinition API call. */
	static readonly UPDATE_CONTAINER_GROUP_DEFINITION: string[] = [
		"gamelift:UpdateContainerGroupDefinition",
	];
	/** IAM actions required for the UpdateFleetAttributes API call. */
	static readonly UPDATE_FLEET_ATTRIBUTES: string[] = [
		"gamelift:UpdateFleetAttributes",
	];
	/** IAM actions required for the UpdateFleetCapacity API call. */
	static readonly UPDATE_FLEET_CAPACITY: string[] = [
		"gamelift:UpdateFleetCapacity",
	];
	/** IAM actions required for the UpdateFleetPortSettings API call. */
	static readonly UPDATE_FLEET_PORT_SETTINGS: string[] = [
		"gamelift:UpdateFleetPortSettings",
	];
	/** IAM actions required for the UpdateGameServer API call. */
	static readonly UPDATE_GAME_SERVER: string[] = ["gamelift:UpdateGameServer"];
	/** IAM actions required for the UpdateGameServerGroup API call. */
	static readonly UPDATE_GAME_SERVER_GROUP: string[] = [
		"iam:PassRole",
		"gamelift:UpdateGameServerGroup",
	];
	/** IAM actions required for the UpdateGameSession API call. */
	static readonly UPDATE_GAME_SESSION: string[] = [
		"gamelift:UpdateGameSession",
	];
	/** IAM actions required for the UpdateGameSessionQueue API call. */
	static readonly UPDATE_GAME_SESSION_QUEUE: string[] = [
		"gamelift:UpdateGameSessionQueue",
	];
	/** IAM actions required for the UpdateMatchmakingConfiguration API call. */
	static readonly UPDATE_MATCHMAKING_CONFIGURATION: string[] = [
		"gamelift:UpdateMatchmakingConfiguration",
	];
	/** IAM actions required for the UpdateRuntimeConfiguration API call. */
	static readonly UPDATE_RUNTIME_CONFIGURATION: string[] = [
		"gamelift:UpdateRuntimeConfiguration",
	];
	/** IAM actions required for the UpdateScript API call. */
	static readonly UPDATE_SCRIPT: string[] = [
		"iam:PassRole",
		"gamelift:UpdateScript",
	];
	/** IAM actions required for the ValidateMatchmakingRuleSet API call. */
	static readonly VALIDATE_MATCHMAKING_RULE_SET: string[] = [
		"gamelift:ValidateMatchmakingRuleSet",
	];
}

/**
 * Condition key constants and builders for gamelift.
 */
export class GameLiftConditions {
	/** Condition keys applicable to the CreateAlias action. */
	static readonly CREATE_ALIAS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBuild action. */
	static readonly CREATE_BUILD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContainerFleet action. */
	static readonly CREATE_CONTAINER_FLEET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContainerGroupDefinition action. */
	static readonly CREATE_CONTAINER_GROUP_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFleet action. */
	static readonly CREATE_FLEET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGameServerGroup action. */
	static readonly CREATE_GAME_SERVER_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGameSessionQueue action. */
	static readonly CREATE_GAME_SESSION_QUEUE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocation action. */
	static readonly CREATE_LOCATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMatchmakingConfiguration action. */
	static readonly CREATE_MATCHMAKING_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMatchmakingRuleSet action. */
	static readonly CREATE_MATCHMAKING_RULE_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScript action. */
	static readonly CREATE_SCRIPT_CONDITION_KEYS: string[] = [
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
