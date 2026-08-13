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
	static readonly AcceptMatch = "gamelift:AcceptMatch";
	/** [Write] gamelift:ClaimGameServer */
	static readonly ClaimGameServer = "gamelift:ClaimGameServer";
	/** [Write] gamelift:CreateAlias */
	static readonly CreateAlias = "gamelift:CreateAlias";
	/** [Write] gamelift:CreateBuild */
	static readonly CreateBuild = "gamelift:CreateBuild";
	/** [Write] gamelift:CreateContainerFleet */
	static readonly CreateContainerFleet = "gamelift:CreateContainerFleet";
	/** [Write] gamelift:CreateContainerGroupDefinition */
	static readonly CreateContainerGroupDefinition =
		"gamelift:CreateContainerGroupDefinition";
	/** [Write] gamelift:CreateFleet */
	static readonly CreateFleet = "gamelift:CreateFleet";
	/** [Write] gamelift:CreateFleetLocations */
	static readonly CreateFleetLocations = "gamelift:CreateFleetLocations";
	/** [Write] gamelift:CreateGameServerGroup */
	static readonly CreateGameServerGroup = "gamelift:CreateGameServerGroup";
	/** [Write] gamelift:CreateGameSession */
	static readonly CreateGameSession = "gamelift:CreateGameSession";
	/** [Write] gamelift:CreateGameSessionQueue */
	static readonly CreateGameSessionQueue = "gamelift:CreateGameSessionQueue";
	/** [Write] gamelift:CreateLocation */
	static readonly CreateLocation = "gamelift:CreateLocation";
	/** [Write] gamelift:CreateMatchmakingConfiguration */
	static readonly CreateMatchmakingConfiguration =
		"gamelift:CreateMatchmakingConfiguration";
	/** [Write] gamelift:CreateMatchmakingRuleSet */
	static readonly CreateMatchmakingRuleSet =
		"gamelift:CreateMatchmakingRuleSet";
	/** [Write] gamelift:CreatePlayerSession */
	static readonly CreatePlayerSession = "gamelift:CreatePlayerSession";
	/** [Write] gamelift:CreatePlayerSessions */
	static readonly CreatePlayerSessions = "gamelift:CreatePlayerSessions";
	/** [Write] gamelift:CreateScript */
	static readonly CreateScript = "gamelift:CreateScript";
	/** [Write] gamelift:CreateVpcPeeringAuthorization */
	static readonly CreateVpcPeeringAuthorization =
		"gamelift:CreateVpcPeeringAuthorization";
	/** [Write] gamelift:CreateVpcPeeringConnection */
	static readonly CreateVpcPeeringConnection =
		"gamelift:CreateVpcPeeringConnection";
	/** [Write] gamelift:DeleteAlias */
	static readonly DeleteAlias = "gamelift:DeleteAlias";
	/** [Write] gamelift:DeleteBuild */
	static readonly DeleteBuild = "gamelift:DeleteBuild";
	/** [Write] gamelift:DeleteContainerFleet */
	static readonly DeleteContainerFleet = "gamelift:DeleteContainerFleet";
	/** [Write] gamelift:DeleteContainerGroupDefinition */
	static readonly DeleteContainerGroupDefinition =
		"gamelift:DeleteContainerGroupDefinition";
	/** [Write] gamelift:DeleteFleet */
	static readonly DeleteFleet = "gamelift:DeleteFleet";
	/** [Write] gamelift:DeleteFleetLocations */
	static readonly DeleteFleetLocations = "gamelift:DeleteFleetLocations";
	/** [Write] gamelift:DeleteGameServerGroup */
	static readonly DeleteGameServerGroup = "gamelift:DeleteGameServerGroup";
	/** [Write] gamelift:DeleteGameSessionQueue */
	static readonly DeleteGameSessionQueue = "gamelift:DeleteGameSessionQueue";
	/** [Write] gamelift:DeleteLocation */
	static readonly DeleteLocation = "gamelift:DeleteLocation";
	/** [Write] gamelift:DeleteMatchmakingConfiguration */
	static readonly DeleteMatchmakingConfiguration =
		"gamelift:DeleteMatchmakingConfiguration";
	/** [Write] gamelift:DeleteMatchmakingRuleSet */
	static readonly DeleteMatchmakingRuleSet =
		"gamelift:DeleteMatchmakingRuleSet";
	/** [Write] gamelift:DeleteScalingPolicy */
	static readonly DeleteScalingPolicy = "gamelift:DeleteScalingPolicy";
	/** [Write] gamelift:DeleteScript */
	static readonly DeleteScript = "gamelift:DeleteScript";
	/** [Write] gamelift:DeleteVpcPeeringAuthorization */
	static readonly DeleteVpcPeeringAuthorization =
		"gamelift:DeleteVpcPeeringAuthorization";
	/** [Write] gamelift:DeleteVpcPeeringConnection */
	static readonly DeleteVpcPeeringConnection =
		"gamelift:DeleteVpcPeeringConnection";
	/** [Write] gamelift:DeregisterCompute */
	static readonly DeregisterCompute = "gamelift:DeregisterCompute";
	/** [Write] gamelift:DeregisterGameServer */
	static readonly DeregisterGameServer = "gamelift:DeregisterGameServer";
	/** [Read] gamelift:DescribeAlias */
	static readonly DescribeAlias = "gamelift:DescribeAlias";
	/** [Read] gamelift:DescribeBuild */
	static readonly DescribeBuild = "gamelift:DescribeBuild";
	/** [Read] gamelift:DescribeCompute */
	static readonly DescribeCompute = "gamelift:DescribeCompute";
	/** [Read] gamelift:DescribeContainerFleet */
	static readonly DescribeContainerFleet = "gamelift:DescribeContainerFleet";
	/** [Read] gamelift:DescribeContainerGroupDefinition */
	static readonly DescribeContainerGroupDefinition =
		"gamelift:DescribeContainerGroupDefinition";
	/** [Read] gamelift:DescribeContainerGroupPortMappings */
	static readonly DescribeContainerGroupPortMappings =
		"gamelift:DescribeContainerGroupPortMappings";
	/** [Read] gamelift:DescribeEC2InstanceLimits */
	static readonly DescribeEC2InstanceLimits =
		"gamelift:DescribeEC2InstanceLimits";
	/** [Read] gamelift:DescribeFleetAttributes */
	static readonly DescribeFleetAttributes = "gamelift:DescribeFleetAttributes";
	/** [Read] gamelift:DescribeFleetCapacity */
	static readonly DescribeFleetCapacity = "gamelift:DescribeFleetCapacity";
	/** [Read] gamelift:DescribeFleetDeployment */
	static readonly DescribeFleetDeployment = "gamelift:DescribeFleetDeployment";
	/** [Read] gamelift:DescribeFleetEvents */
	static readonly DescribeFleetEvents = "gamelift:DescribeFleetEvents";
	/** [Read] gamelift:DescribeFleetLocationAttributes */
	static readonly DescribeFleetLocationAttributes =
		"gamelift:DescribeFleetLocationAttributes";
	/** [Read] gamelift:DescribeFleetLocationCapacity */
	static readonly DescribeFleetLocationCapacity =
		"gamelift:DescribeFleetLocationCapacity";
	/** [Read] gamelift:DescribeFleetLocationUtilization */
	static readonly DescribeFleetLocationUtilization =
		"gamelift:DescribeFleetLocationUtilization";
	/** [Read] gamelift:DescribeFleetPortSettings */
	static readonly DescribeFleetPortSettings =
		"gamelift:DescribeFleetPortSettings";
	/** [Read] gamelift:DescribeFleetUtilization */
	static readonly DescribeFleetUtilization =
		"gamelift:DescribeFleetUtilization";
	/** [Read] gamelift:DescribeGameServer */
	static readonly DescribeGameServer = "gamelift:DescribeGameServer";
	/** [Read] gamelift:DescribeGameServerGroup */
	static readonly DescribeGameServerGroup = "gamelift:DescribeGameServerGroup";
	/** [Read] gamelift:DescribeGameServerInstances */
	static readonly DescribeGameServerInstances =
		"gamelift:DescribeGameServerInstances";
	/** [Read] gamelift:DescribeGameSessionDetails */
	static readonly DescribeGameSessionDetails =
		"gamelift:DescribeGameSessionDetails";
	/** [Read] gamelift:DescribeGameSessionPlacement */
	static readonly DescribeGameSessionPlacement =
		"gamelift:DescribeGameSessionPlacement";
	/** [Read] gamelift:DescribeGameSessionQueues */
	static readonly DescribeGameSessionQueues =
		"gamelift:DescribeGameSessionQueues";
	/** [Read] gamelift:DescribeGameSessions */
	static readonly DescribeGameSessions = "gamelift:DescribeGameSessions";
	/** [Read] gamelift:DescribeInstances */
	static readonly DescribeInstances = "gamelift:DescribeInstances";
	/** [Read] gamelift:DescribeMatchmaking */
	static readonly DescribeMatchmaking = "gamelift:DescribeMatchmaking";
	/** [Read] gamelift:DescribeMatchmakingConfigurations */
	static readonly DescribeMatchmakingConfigurations =
		"gamelift:DescribeMatchmakingConfigurations";
	/** [Read] gamelift:DescribeMatchmakingRuleSets */
	static readonly DescribeMatchmakingRuleSets =
		"gamelift:DescribeMatchmakingRuleSets";
	/** [Read] gamelift:DescribePlayerSessions */
	static readonly DescribePlayerSessions = "gamelift:DescribePlayerSessions";
	/** [Read] gamelift:DescribeRuntimeConfiguration */
	static readonly DescribeRuntimeConfiguration =
		"gamelift:DescribeRuntimeConfiguration";
	/** [Read] gamelift:DescribeScalingPolicies */
	static readonly DescribeScalingPolicies = "gamelift:DescribeScalingPolicies";
	/** [Read] gamelift:DescribeScript */
	static readonly DescribeScript = "gamelift:DescribeScript";
	/** [Read] gamelift:DescribeVpcPeeringAuthorizations */
	static readonly DescribeVpcPeeringAuthorizations =
		"gamelift:DescribeVpcPeeringAuthorizations";
	/** [Read] gamelift:DescribeVpcPeeringConnections */
	static readonly DescribeVpcPeeringConnections =
		"gamelift:DescribeVpcPeeringConnections";
	/** [Read] gamelift:GetComputeAccess */
	static readonly actionGetComputeAccess = "gamelift:GetComputeAccess";
	/** [Read] gamelift:GetComputeAuthToken */
	static readonly actionGetComputeAuthToken = "gamelift:GetComputeAuthToken";
	/** [Read] gamelift:GetGameSessionLogUrl */
	static readonly actionGetGameSessionLogUrl = "gamelift:GetGameSessionLogUrl";
	/** [Read] gamelift:GetInstanceAccess */
	static readonly actionGetInstanceAccess = "gamelift:GetInstanceAccess";
	/** [Read] gamelift:GetPlayerConnectionDetails */
	static readonly actionGetPlayerConnectionDetails =
		"gamelift:GetPlayerConnectionDetails";
	/** [List] gamelift:ListAliases */
	static readonly ListAliases = "gamelift:ListAliases";
	/** [List] gamelift:ListBuilds */
	static readonly ListBuilds = "gamelift:ListBuilds";
	/** [List] gamelift:ListCompute */
	static readonly ListCompute = "gamelift:ListCompute";
	/** [List] gamelift:ListContainerFleets */
	static readonly ListContainerFleets = "gamelift:ListContainerFleets";
	/** [List] gamelift:ListContainerGroupDefinitionVersions */
	static readonly ListContainerGroupDefinitionVersions =
		"gamelift:ListContainerGroupDefinitionVersions";
	/** [List] gamelift:ListContainerGroupDefinitions */
	static readonly ListContainerGroupDefinitions =
		"gamelift:ListContainerGroupDefinitions";
	/** [List] gamelift:ListFleetDeployments */
	static readonly ListFleetDeployments = "gamelift:ListFleetDeployments";
	/** [List] gamelift:ListFleets */
	static readonly ListFleets = "gamelift:ListFleets";
	/** [List] gamelift:ListGameServerGroups */
	static readonly ListGameServerGroups = "gamelift:ListGameServerGroups";
	/** [List] gamelift:ListGameServers */
	static readonly ListGameServers = "gamelift:ListGameServers";
	/** [List] gamelift:ListLocations */
	static readonly ListLocations = "gamelift:ListLocations";
	/** [List] gamelift:ListScripts */
	static readonly ListScripts = "gamelift:ListScripts";
	/** [Read] gamelift:ListTagsForResource */
	static readonly ListTagsForResource = "gamelift:ListTagsForResource";
	/** [Write] gamelift:PutScalingPolicy */
	static readonly PutScalingPolicy = "gamelift:PutScalingPolicy";
	/** [Write] gamelift:RegisterCompute */
	static readonly RegisterCompute = "gamelift:RegisterCompute";
	/** [Write] gamelift:RegisterGameServer */
	static readonly RegisterGameServer = "gamelift:RegisterGameServer";
	/** [Read] gamelift:RequestUploadCredentials */
	static readonly RequestUploadCredentials =
		"gamelift:RequestUploadCredentials";
	/** [Read] gamelift:ResolveAlias */
	static readonly ResolveAlias = "gamelift:ResolveAlias";
	/** [Write] gamelift:ResumeGameServerGroup */
	static readonly ResumeGameServerGroup = "gamelift:ResumeGameServerGroup";
	/** [Read] gamelift:SearchGameSessions */
	static readonly SearchGameSessions = "gamelift:SearchGameSessions";
	/** [Write] gamelift:StartFleetActions */
	static readonly StartFleetActions = "gamelift:StartFleetActions";
	/** [Write] gamelift:StartGameSessionPlacement */
	static readonly StartGameSessionPlacement =
		"gamelift:StartGameSessionPlacement";
	/** [Write] gamelift:StartMatchBackfill */
	static readonly StartMatchBackfill = "gamelift:StartMatchBackfill";
	/** [Write] gamelift:StartMatchmaking */
	static readonly StartMatchmaking = "gamelift:StartMatchmaking";
	/** [Write] gamelift:StopFleetActions */
	static readonly StopFleetActions = "gamelift:StopFleetActions";
	/** [Write] gamelift:StopGameSessionPlacement */
	static readonly StopGameSessionPlacement =
		"gamelift:StopGameSessionPlacement";
	/** [Write] gamelift:StopMatchmaking */
	static readonly StopMatchmaking = "gamelift:StopMatchmaking";
	/** [Write] gamelift:SuspendGameServerGroup */
	static readonly SuspendGameServerGroup = "gamelift:SuspendGameServerGroup";
	/** [Tagging] gamelift:TagResource */
	static readonly TagResource = "gamelift:TagResource";
	/** [Write] gamelift:TerminateGameSession */
	static readonly TerminateGameSession = "gamelift:TerminateGameSession";
	/** [Tagging] gamelift:UntagResource */
	static readonly UntagResource = "gamelift:UntagResource";
	/** [Write] gamelift:UpdateAlias */
	static readonly UpdateAlias = "gamelift:UpdateAlias";
	/** [Write] gamelift:UpdateBuild */
	static readonly UpdateBuild = "gamelift:UpdateBuild";
	/** [Write] gamelift:UpdateContainerFleet */
	static readonly UpdateContainerFleet = "gamelift:UpdateContainerFleet";
	/** [Write] gamelift:UpdateContainerGroupDefinition */
	static readonly UpdateContainerGroupDefinition =
		"gamelift:UpdateContainerGroupDefinition";
	/** [Write] gamelift:UpdateFleetAttributes */
	static readonly UpdateFleetAttributes = "gamelift:UpdateFleetAttributes";
	/** [Write] gamelift:UpdateFleetCapacity */
	static readonly UpdateFleetCapacity = "gamelift:UpdateFleetCapacity";
	/** [Write] gamelift:UpdateFleetPortSettings */
	static readonly UpdateFleetPortSettings = "gamelift:UpdateFleetPortSettings";
	/** [Write] gamelift:UpdateGameServer */
	static readonly UpdateGameServer = "gamelift:UpdateGameServer";
	/** [Write] gamelift:UpdateGameServerGroup */
	static readonly UpdateGameServerGroup = "gamelift:UpdateGameServerGroup";
	/** [Write] gamelift:UpdateGameSession */
	static readonly UpdateGameSession = "gamelift:UpdateGameSession";
	/** [Write] gamelift:UpdateGameSessionQueue */
	static readonly UpdateGameSessionQueue = "gamelift:UpdateGameSessionQueue";
	/** [Write] gamelift:UpdateMatchmakingConfiguration */
	static readonly UpdateMatchmakingConfiguration =
		"gamelift:UpdateMatchmakingConfiguration";
	/** [Write] gamelift:UpdateRuntimeConfiguration */
	static readonly UpdateRuntimeConfiguration =
		"gamelift:UpdateRuntimeConfiguration";
	/** [Write] gamelift:UpdateScript */
	static readonly UpdateScript = "gamelift:UpdateScript";
	/** [Read] gamelift:ValidateMatchmakingRuleSet */
	static readonly ValidateMatchmakingRuleSet =
		"gamelift:ValidateMatchmakingRuleSet";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GameLiftActions.DescribeAlias,
		GameLiftActions.DescribeBuild,
		GameLiftActions.DescribeCompute,
		GameLiftActions.DescribeContainerFleet,
		GameLiftActions.DescribeContainerGroupDefinition,
		GameLiftActions.DescribeContainerGroupPortMappings,
		GameLiftActions.DescribeEC2InstanceLimits,
		GameLiftActions.DescribeFleetAttributes,
		GameLiftActions.DescribeFleetCapacity,
		GameLiftActions.DescribeFleetDeployment,
		GameLiftActions.DescribeFleetEvents,
		GameLiftActions.DescribeFleetLocationAttributes,
		GameLiftActions.DescribeFleetLocationCapacity,
		GameLiftActions.DescribeFleetLocationUtilization,
		GameLiftActions.DescribeFleetPortSettings,
		GameLiftActions.DescribeFleetUtilization,
		GameLiftActions.DescribeGameServer,
		GameLiftActions.DescribeGameServerGroup,
		GameLiftActions.DescribeGameServerInstances,
		GameLiftActions.DescribeGameSessionDetails,
		GameLiftActions.DescribeGameSessionPlacement,
		GameLiftActions.DescribeGameSessionQueues,
		GameLiftActions.DescribeGameSessions,
		GameLiftActions.DescribeInstances,
		GameLiftActions.DescribeMatchmaking,
		GameLiftActions.DescribeMatchmakingConfigurations,
		GameLiftActions.DescribeMatchmakingRuleSets,
		GameLiftActions.DescribePlayerSessions,
		GameLiftActions.DescribeRuntimeConfiguration,
		GameLiftActions.DescribeScalingPolicies,
		GameLiftActions.DescribeScript,
		GameLiftActions.DescribeVpcPeeringAuthorizations,
		GameLiftActions.DescribeVpcPeeringConnections,
		GameLiftActions.actionGetComputeAccess,
		GameLiftActions.actionGetComputeAuthToken,
		GameLiftActions.actionGetGameSessionLogUrl,
		GameLiftActions.actionGetInstanceAccess,
		GameLiftActions.actionGetPlayerConnectionDetails,
		GameLiftActions.ListTagsForResource,
		GameLiftActions.RequestUploadCredentials,
		GameLiftActions.ResolveAlias,
		GameLiftActions.SearchGameSessions,
		GameLiftActions.ValidateMatchmakingRuleSet,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		GameLiftActions.AcceptMatch,
		GameLiftActions.ClaimGameServer,
		GameLiftActions.CreateAlias,
		GameLiftActions.CreateBuild,
		GameLiftActions.CreateContainerFleet,
		GameLiftActions.CreateContainerGroupDefinition,
		GameLiftActions.CreateFleet,
		GameLiftActions.CreateFleetLocations,
		GameLiftActions.CreateGameServerGroup,
		GameLiftActions.CreateGameSession,
		GameLiftActions.CreateGameSessionQueue,
		GameLiftActions.CreateLocation,
		GameLiftActions.CreateMatchmakingConfiguration,
		GameLiftActions.CreateMatchmakingRuleSet,
		GameLiftActions.CreatePlayerSession,
		GameLiftActions.CreatePlayerSessions,
		GameLiftActions.CreateScript,
		GameLiftActions.CreateVpcPeeringAuthorization,
		GameLiftActions.CreateVpcPeeringConnection,
		GameLiftActions.DeleteAlias,
		GameLiftActions.DeleteBuild,
		GameLiftActions.DeleteContainerFleet,
		GameLiftActions.DeleteContainerGroupDefinition,
		GameLiftActions.DeleteFleet,
		GameLiftActions.DeleteFleetLocations,
		GameLiftActions.DeleteGameServerGroup,
		GameLiftActions.DeleteGameSessionQueue,
		GameLiftActions.DeleteLocation,
		GameLiftActions.DeleteMatchmakingConfiguration,
		GameLiftActions.DeleteMatchmakingRuleSet,
		GameLiftActions.DeleteScalingPolicy,
		GameLiftActions.DeleteScript,
		GameLiftActions.DeleteVpcPeeringAuthorization,
		GameLiftActions.DeleteVpcPeeringConnection,
		GameLiftActions.DeregisterCompute,
		GameLiftActions.DeregisterGameServer,
		GameLiftActions.PutScalingPolicy,
		GameLiftActions.RegisterCompute,
		GameLiftActions.RegisterGameServer,
		GameLiftActions.ResumeGameServerGroup,
		GameLiftActions.StartFleetActions,
		GameLiftActions.StartGameSessionPlacement,
		GameLiftActions.StartMatchBackfill,
		GameLiftActions.StartMatchmaking,
		GameLiftActions.StopFleetActions,
		GameLiftActions.StopGameSessionPlacement,
		GameLiftActions.StopMatchmaking,
		GameLiftActions.SuspendGameServerGroup,
		GameLiftActions.TerminateGameSession,
		GameLiftActions.UpdateAlias,
		GameLiftActions.UpdateBuild,
		GameLiftActions.UpdateContainerFleet,
		GameLiftActions.UpdateContainerGroupDefinition,
		GameLiftActions.UpdateFleetAttributes,
		GameLiftActions.UpdateFleetCapacity,
		GameLiftActions.UpdateFleetPortSettings,
		GameLiftActions.UpdateGameServer,
		GameLiftActions.UpdateGameServerGroup,
		GameLiftActions.UpdateGameSession,
		GameLiftActions.UpdateGameSessionQueue,
		GameLiftActions.UpdateMatchmakingConfiguration,
		GameLiftActions.UpdateRuntimeConfiguration,
		GameLiftActions.UpdateScript,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		GameLiftActions.ListAliases,
		GameLiftActions.ListBuilds,
		GameLiftActions.ListCompute,
		GameLiftActions.ListContainerFleets,
		GameLiftActions.ListContainerGroupDefinitionVersions,
		GameLiftActions.ListContainerGroupDefinitions,
		GameLiftActions.ListFleetDeployments,
		GameLiftActions.ListFleets,
		GameLiftActions.ListGameServerGroups,
		GameLiftActions.ListGameServers,
		GameLiftActions.ListLocations,
		GameLiftActions.ListScripts,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		GameLiftActions.TagResource,
		GameLiftActions.UntagResource,
	];
}

/**
 * Properties for building a alias ARN.
 */
export interface GameLiftAliasArnProps {
	/** The AliasId component of the ARN. */
	readonly aliasId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a alias ARN.
 */
export interface GameLiftAliasArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AliasId component. */
	readonly aliasId: string;
}

/**
 * Properties for building a build ARN.
 */
export interface GameLiftBuildArnProps {
	/** The BuildId component of the ARN. */
	readonly buildId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a build ARN.
 */
export interface GameLiftBuildArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BuildId component. */
	readonly buildId: string;
}

/**
 * Properties for building a containerFleet ARN.
 */
export interface GameLiftContainerFleetArnProps {
	/** The FleetId component of the ARN. */
	readonly fleetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a containerFleet ARN.
 */
export interface GameLiftContainerFleetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FleetId component. */
	readonly fleetId: string;
}

/**
 * Properties for building a containerGroupDefinition ARN.
 */
export interface GameLiftContainerGroupDefinitionArnProps {
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
 * Parsed components of a containerGroupDefinition ARN.
 */
export interface GameLiftContainerGroupDefinitionArnComponents {
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
 * Properties for building a fleet ARN.
 */
export interface GameLiftFleetArnProps {
	/** The FleetId component of the ARN. */
	readonly fleetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a fleet ARN.
 */
export interface GameLiftFleetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FleetId component. */
	readonly fleetId: string;
}

/**
 * Properties for building a gameServerGroup ARN.
 */
export interface GameLiftGameServerGroupArnProps {
	/** The GameServerGroupName component of the ARN. */
	readonly gameServerGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a gameServerGroup ARN.
 */
export interface GameLiftGameServerGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GameServerGroupName component. */
	readonly gameServerGroupName: string;
}

/**
 * Properties for building a gameSessionQueue ARN.
 */
export interface GameLiftGameSessionQueueArnProps {
	/** The GameSessionQueueName component of the ARN. */
	readonly gameSessionQueueName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a gameSessionQueue ARN.
 */
export interface GameLiftGameSessionQueueArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GameSessionQueueName component. */
	readonly gameSessionQueueName: string;
}

/**
 * Properties for building a location ARN.
 */
export interface GameLiftLocationArnProps {
	/** The LocationId component of the ARN. */
	readonly locationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a location ARN.
 */
export interface GameLiftLocationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LocationId component. */
	readonly locationId: string;
}

/**
 * Properties for building a matchmakingConfiguration ARN.
 */
export interface GameLiftMatchmakingConfigurationArnProps {
	/** The MatchmakingConfigurationName component of the ARN. */
	readonly matchmakingConfigurationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a matchmakingConfiguration ARN.
 */
export interface GameLiftMatchmakingConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MatchmakingConfigurationName component. */
	readonly matchmakingConfigurationName: string;
}

/**
 * Properties for building a matchmakingRuleSet ARN.
 */
export interface GameLiftMatchmakingRuleSetArnProps {
	/** The MatchmakingRuleSetName component of the ARN. */
	readonly matchmakingRuleSetName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a matchmakingRuleSet ARN.
 */
export interface GameLiftMatchmakingRuleSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MatchmakingRuleSetName component. */
	readonly matchmakingRuleSetName: string;
}

/**
 * Properties for building a script ARN.
 */
export interface GameLiftScriptArnProps {
	/** The ScriptId component of the ARN. */
	readonly scriptId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a script ARN.
 */
export interface GameLiftScriptArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ScriptId component. */
	readonly scriptId: string;
}

const AliasArnRegex =
	/^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*)::alias\/(?<aliasId>[^:/?]+)$/;
const BuildArnRegex =
	/^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):build\/(?<buildId>[^:/?]+)$/;
const ContainerFleetArnRegex =
	/^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):containerfleet\/(?<fleetId>[^:/?]+)$/;
const ContainerGroupDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):containergroupdefinition\/(?<name>[^:/?]+)$/;
const FleetArnRegex =
	/^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):fleet\/(?<fleetId>[^:/?]+)$/;
const GameServerGroupArnRegex =
	/^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):gameservergroup\/(?<gameServerGroupName>[^:/?]+)$/;
const GameSessionQueueArnRegex =
	/^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):gamesessionqueue\/(?<gameSessionQueueName>[^:/?]+)$/;
const LocationArnRegex =
	/^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):location\/(?<locationId>[^:/?]+)$/;
const MatchmakingConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):matchmakingconfiguration\/(?<matchmakingConfigurationName>[^:/?]+)$/;
const MatchmakingRuleSetArnRegex =
	/^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):matchmakingruleset\/(?<matchmakingRuleSetName>[^:/?]+)$/;
const ScriptArnRegex =
	/^arn:(?<partition>[^:]+):gamelift:(?<region>[^:]*):(?<account>[^:]*):script\/(?<scriptId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for gamelift resources.
 */
export class GameLiftResources {
	/**
	 * Builds an ARN for the alias resource.
	 */
	static alias(props: GameLiftAliasArnProps): string {
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
	static parseAliasArn(arn: string): GameLiftAliasArnComponents {
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
	static buildResource(props: GameLiftBuildArnProps): string {
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
	static parseBuildArn(arn: string): GameLiftBuildArnComponents {
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
	static containerFleet(props: GameLiftContainerFleetArnProps): string {
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
	static parseContainerFleetArn(
		arn: string,
	): GameLiftContainerFleetArnComponents {
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
	static containerGroupDefinition(
		props: GameLiftContainerGroupDefinitionArnProps,
	): string {
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
	static parseContainerGroupDefinitionArn(
		arn: string,
	): GameLiftContainerGroupDefinitionArnComponents {
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
	static fleet(props: GameLiftFleetArnProps): string {
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
	static parseFleetArn(arn: string): GameLiftFleetArnComponents {
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
	static gameServerGroup(props: GameLiftGameServerGroupArnProps): string {
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
	static parseGameServerGroupArn(
		arn: string,
	): GameLiftGameServerGroupArnComponents {
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
	static gameSessionQueue(props: GameLiftGameSessionQueueArnProps): string {
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
	static parseGameSessionQueueArn(
		arn: string,
	): GameLiftGameSessionQueueArnComponents {
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
	static location(props: GameLiftLocationArnProps): string {
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
	static parseLocationArn(arn: string): GameLiftLocationArnComponents {
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
	static matchmakingConfiguration(
		props: GameLiftMatchmakingConfigurationArnProps,
	): string {
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
	static parseMatchmakingConfigurationArn(
		arn: string,
	): GameLiftMatchmakingConfigurationArnComponents {
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
	static matchmakingRuleSet(props: GameLiftMatchmakingRuleSetArnProps): string {
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
	static parseMatchmakingRuleSetArn(
		arn: string,
	): GameLiftMatchmakingRuleSetArnComponents {
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
	static script(props: GameLiftScriptArnProps): string {
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
	static parseScriptArn(arn: string): GameLiftScriptArnComponents {
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
	static readonly AcceptMatch: string[] = ["gamelift:AcceptMatch"];
	/** IAM actions required for the ClaimGameServer API call. */
	static readonly ClaimGameServer: string[] = ["gamelift:ClaimGameServer"];
	/** IAM actions required for the CreateAlias API call. */
	static readonly CreateAlias: string[] = [
		"gamelift:CreateAlias",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateBuild API call. */
	static readonly CreateBuild: string[] = [
		"gamelift:CreateBuild",
		"gamelift:CreateBuild",
		"iam:PassRole",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateContainerFleet API call. */
	static readonly CreateContainerFleet: string[] = [
		"gamelift:CreateContainerFleet",
		"gamelift:CreateContainerFleet",
		"iam:PassRole",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateContainerGroupDefinition API call. */
	static readonly CreateContainerGroupDefinition: string[] = [
		"gamelift:CreateContainerGroupDefinition",
		"gamelift:CreateContainerGroupDefinition",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateFleet API call. */
	static readonly CreateFleet: string[] = [
		"gamelift:CreateFleet",
		"gamelift:CreateFleet",
		"iam:PassRole",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateFleetLocations API call. */
	static readonly CreateFleetLocations: string[] = [
		"gamelift:CreateFleetLocations",
	];
	/** IAM actions required for the CreateGameServerGroup API call. */
	static readonly CreateGameServerGroup: string[] = [
		"gamelift:CreateGameServerGroup",
		"gamelift:CreateGameServerGroup",
		"iam:PassRole",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateGameSession API call. */
	static readonly CreateGameSession: string[] = ["gamelift:CreateGameSession"];
	/** IAM actions required for the CreateGameSessionQueue API call. */
	static readonly CreateGameSessionQueue: string[] = [
		"gamelift:CreateGameSessionQueue",
		"gamelift:CreateGameSessionQueue",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateLocation API call. */
	static readonly CreateLocation: string[] = [
		"gamelift:CreateLocation",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateMatchmakingConfiguration API call. */
	static readonly CreateMatchmakingConfiguration: string[] = [
		"gamelift:CreateMatchmakingConfiguration",
		"gamelift:CreateMatchmakingConfiguration",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateMatchmakingRuleSet API call. */
	static readonly CreateMatchmakingRuleSet: string[] = [
		"gamelift:CreateMatchmakingRuleSet",
		"gamelift:CreateMatchmakingRuleSet",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreatePlayerSession API call. */
	static readonly CreatePlayerSession: string[] = [
		"gamelift:CreatePlayerSession",
	];
	/** IAM actions required for the CreatePlayerSessions API call. */
	static readonly CreatePlayerSessions: string[] = [
		"gamelift:CreatePlayerSessions",
	];
	/** IAM actions required for the CreateScript API call. */
	static readonly CreateScript: string[] = [
		"gamelift:CreateScript",
		"gamelift:CreateScript",
		"iam:PassRole",
		"gamelift:TagResource",
	];
	/** IAM actions required for the CreateVpcPeeringAuthorization API call. */
	static readonly CreateVpcPeeringAuthorization: string[] = [
		"gamelift:CreateVpcPeeringAuthorization",
	];
	/** IAM actions required for the CreateVpcPeeringConnection API call. */
	static readonly CreateVpcPeeringConnection: string[] = [
		"gamelift:CreateVpcPeeringConnection",
	];
	/** IAM actions required for the DeleteAlias API call. */
	static readonly DeleteAlias: string[] = ["gamelift:DeleteAlias"];
	/** IAM actions required for the DeleteBuild API call. */
	static readonly DeleteBuild: string[] = ["gamelift:DeleteBuild"];
	/** IAM actions required for the DeleteContainerFleet API call. */
	static readonly DeleteContainerFleet: string[] = [
		"gamelift:DeleteContainerFleet",
	];
	/** IAM actions required for the DeleteContainerGroupDefinition API call. */
	static readonly DeleteContainerGroupDefinition: string[] = [
		"gamelift:DeleteContainerGroupDefinition",
	];
	/** IAM actions required for the DeleteFleet API call. */
	static readonly DeleteFleet: string[] = ["gamelift:DeleteFleet"];
	/** IAM actions required for the DeleteFleetLocations API call. */
	static readonly DeleteFleetLocations: string[] = [
		"gamelift:DeleteFleetLocations",
	];
	/** IAM actions required for the DeleteGameServerGroup API call. */
	static readonly DeleteGameServerGroup: string[] = [
		"gamelift:DeleteGameServerGroup",
	];
	/** IAM actions required for the DeleteGameSessionQueue API call. */
	static readonly DeleteGameSessionQueue: string[] = [
		"gamelift:DeleteGameSessionQueue",
	];
	/** IAM actions required for the DeleteLocation API call. */
	static readonly DeleteLocation: string[] = ["gamelift:DeleteLocation"];
	/** IAM actions required for the DeleteMatchmakingConfiguration API call. */
	static readonly DeleteMatchmakingConfiguration: string[] = [
		"gamelift:DeleteMatchmakingConfiguration",
	];
	/** IAM actions required for the DeleteMatchmakingRuleSet API call. */
	static readonly DeleteMatchmakingRuleSet: string[] = [
		"gamelift:DeleteMatchmakingRuleSet",
	];
	/** IAM actions required for the DeleteScalingPolicy API call. */
	static readonly DeleteScalingPolicy: string[] = [
		"gamelift:DeleteScalingPolicy",
	];
	/** IAM actions required for the DeleteScript API call. */
	static readonly DeleteScript: string[] = ["gamelift:DeleteScript"];
	/** IAM actions required for the DeleteVpcPeeringAuthorization API call. */
	static readonly DeleteVpcPeeringAuthorization: string[] = [
		"gamelift:DeleteVpcPeeringAuthorization",
	];
	/** IAM actions required for the DeleteVpcPeeringConnection API call. */
	static readonly DeleteVpcPeeringConnection: string[] = [
		"gamelift:DeleteVpcPeeringConnection",
	];
	/** IAM actions required for the DeregisterCompute API call. */
	static readonly DeregisterCompute: string[] = ["gamelift:DeregisterCompute"];
	/** IAM actions required for the DeregisterGameServer API call. */
	static readonly DeregisterGameServer: string[] = [
		"gamelift:DeregisterGameServer",
	];
	/** IAM actions required for the DescribeAlias API call. */
	static readonly DescribeAlias: string[] = ["gamelift:DescribeAlias"];
	/** IAM actions required for the DescribeBuild API call. */
	static readonly DescribeBuild: string[] = ["gamelift:DescribeBuild"];
	/** IAM actions required for the DescribeCompute API call. */
	static readonly DescribeCompute: string[] = ["gamelift:DescribeCompute"];
	/** IAM actions required for the DescribeContainerFleet API call. */
	static readonly DescribeContainerFleet: string[] = [
		"gamelift:DescribeContainerFleet",
	];
	/** IAM actions required for the DescribeContainerGroupDefinition API call. */
	static readonly DescribeContainerGroupDefinition: string[] = [
		"gamelift:DescribeContainerGroupDefinition",
	];
	/** IAM actions required for the DescribeContainerGroupPortMappings API call. */
	static readonly DescribeContainerGroupPortMappings: string[] = [
		"gamelift:DescribeContainerGroupPortMappings",
	];
	/** IAM actions required for the DescribeEC2InstanceLimits API call. */
	static readonly DescribeEC2InstanceLimits: string[] = [
		"gamelift:DescribeEC2InstanceLimits",
	];
	/** IAM actions required for the DescribeFleetAttributes API call. */
	static readonly DescribeFleetAttributes: string[] = [
		"gamelift:DescribeFleetAttributes",
	];
	/** IAM actions required for the DescribeFleetCapacity API call. */
	static readonly DescribeFleetCapacity: string[] = [
		"gamelift:DescribeFleetCapacity",
	];
	/** IAM actions required for the DescribeFleetDeployment API call. */
	static readonly DescribeFleetDeployment: string[] = [
		"gamelift:DescribeFleetDeployment",
	];
	/** IAM actions required for the DescribeFleetEvents API call. */
	static readonly DescribeFleetEvents: string[] = [
		"gamelift:DescribeFleetEvents",
	];
	/** IAM actions required for the DescribeFleetLocationAttributes API call. */
	static readonly DescribeFleetLocationAttributes: string[] = [
		"gamelift:DescribeFleetLocationAttributes",
	];
	/** IAM actions required for the DescribeFleetLocationCapacity API call. */
	static readonly DescribeFleetLocationCapacity: string[] = [
		"gamelift:DescribeFleetLocationCapacity",
	];
	/** IAM actions required for the DescribeFleetLocationUtilization API call. */
	static readonly DescribeFleetLocationUtilization: string[] = [
		"gamelift:DescribeFleetLocationUtilization",
	];
	/** IAM actions required for the DescribeFleetPortSettings API call. */
	static readonly DescribeFleetPortSettings: string[] = [
		"gamelift:DescribeFleetPortSettings",
	];
	/** IAM actions required for the DescribeFleetUtilization API call. */
	static readonly DescribeFleetUtilization: string[] = [
		"gamelift:DescribeFleetUtilization",
	];
	/** IAM actions required for the DescribeGameServer API call. */
	static readonly DescribeGameServer: string[] = [
		"gamelift:DescribeGameServer",
	];
	/** IAM actions required for the DescribeGameServerGroup API call. */
	static readonly DescribeGameServerGroup: string[] = [
		"gamelift:DescribeGameServerGroup",
	];
	/** IAM actions required for the DescribeGameServerInstances API call. */
	static readonly DescribeGameServerInstances: string[] = [
		"gamelift:DescribeGameServerInstances",
	];
	/** IAM actions required for the DescribeGameSessionDetails API call. */
	static readonly DescribeGameSessionDetails: string[] = [
		"gamelift:DescribeGameSessionDetails",
	];
	/** IAM actions required for the DescribeGameSessionPlacement API call. */
	static readonly DescribeGameSessionPlacement: string[] = [
		"gamelift:DescribeGameSessionPlacement",
	];
	/** IAM actions required for the DescribeGameSessionQueues API call. */
	static readonly DescribeGameSessionQueues: string[] = [
		"gamelift:DescribeGameSessionQueues",
	];
	/** IAM actions required for the DescribeGameSessions API call. */
	static readonly DescribeGameSessions: string[] = [
		"gamelift:DescribeGameSessions",
	];
	/** IAM actions required for the DescribeInstances API call. */
	static readonly DescribeInstances: string[] = ["gamelift:DescribeInstances"];
	/** IAM actions required for the DescribeMatchmaking API call. */
	static readonly DescribeMatchmaking: string[] = [
		"gamelift:DescribeMatchmaking",
	];
	/** IAM actions required for the DescribeMatchmakingConfigurations API call. */
	static readonly DescribeMatchmakingConfigurations: string[] = [
		"gamelift:DescribeMatchmakingConfigurations",
	];
	/** IAM actions required for the DescribeMatchmakingRuleSets API call. */
	static readonly DescribeMatchmakingRuleSets: string[] = [
		"gamelift:DescribeMatchmakingRuleSets",
	];
	/** IAM actions required for the DescribePlayerSessions API call. */
	static readonly DescribePlayerSessions: string[] = [
		"gamelift:DescribePlayerSessions",
	];
	/** IAM actions required for the DescribeRuntimeConfiguration API call. */
	static readonly DescribeRuntimeConfiguration: string[] = [
		"gamelift:DescribeRuntimeConfiguration",
	];
	/** IAM actions required for the DescribeScalingPolicies API call. */
	static readonly DescribeScalingPolicies: string[] = [
		"gamelift:DescribeScalingPolicies",
	];
	/** IAM actions required for the DescribeScript API call. */
	static readonly DescribeScript: string[] = ["gamelift:DescribeScript"];
	/** IAM actions required for the DescribeVpcPeeringAuthorizations API call. */
	static readonly DescribeVpcPeeringAuthorizations: string[] = [
		"gamelift:DescribeVpcPeeringAuthorizations",
	];
	/** IAM actions required for the DescribeVpcPeeringConnections API call. */
	static readonly DescribeVpcPeeringConnections: string[] = [
		"gamelift:DescribeVpcPeeringConnections",
	];
	/** IAM actions required for the GetComputeAccess API call. */
	static readonly opGetComputeAccess: string[] = ["gamelift:GetComputeAccess"];
	/** IAM actions required for the GetComputeAuthToken API call. */
	static readonly opGetComputeAuthToken: string[] = [
		"gamelift:GetComputeAuthToken",
	];
	/** IAM actions required for the GetGameSessionLogUrl API call. */
	static readonly opGetGameSessionLogUrl: string[] = [
		"gamelift:GetGameSessionLogUrl",
	];
	/** IAM actions required for the GetInstanceAccess API call. */
	static readonly opGetInstanceAccess: string[] = [
		"gamelift:GetInstanceAccess",
	];
	/** IAM actions required for the GetPlayerConnectionDetails API call. */
	static readonly opGetPlayerConnectionDetails: string[] = [
		"gamelift:GetPlayerConnectionDetails",
	];
	/** IAM actions required for the ListAliases API call. */
	static readonly ListAliases: string[] = ["gamelift:ListAliases"];
	/** IAM actions required for the ListBuilds API call. */
	static readonly ListBuilds: string[] = ["gamelift:ListBuilds"];
	/** IAM actions required for the ListCompute API call. */
	static readonly ListCompute: string[] = ["gamelift:ListCompute"];
	/** IAM actions required for the ListContainerFleets API call. */
	static readonly ListContainerFleets: string[] = [
		"gamelift:ListContainerFleets",
	];
	/** IAM actions required for the ListContainerGroupDefinitionVersions API call. */
	static readonly ListContainerGroupDefinitionVersions: string[] = [
		"gamelift:ListContainerGroupDefinitionVersions",
	];
	/** IAM actions required for the ListContainerGroupDefinitions API call. */
	static readonly ListContainerGroupDefinitions: string[] = [
		"gamelift:ListContainerGroupDefinitions",
	];
	/** IAM actions required for the ListFleetDeployments API call. */
	static readonly ListFleetDeployments: string[] = [
		"gamelift:ListFleetDeployments",
	];
	/** IAM actions required for the ListFleets API call. */
	static readonly ListFleets: string[] = ["gamelift:ListFleets"];
	/** IAM actions required for the ListGameServerGroups API call. */
	static readonly ListGameServerGroups: string[] = [
		"gamelift:ListGameServerGroups",
	];
	/** IAM actions required for the ListGameServers API call. */
	static readonly ListGameServers: string[] = ["gamelift:ListGameServers"];
	/** IAM actions required for the ListLocations API call. */
	static readonly ListLocations: string[] = ["gamelift:ListLocations"];
	/** IAM actions required for the ListScripts API call. */
	static readonly ListScripts: string[] = ["gamelift:ListScripts"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"gamelift:ListTagsForResource",
	];
	/** IAM actions required for the PutScalingPolicy API call. */
	static readonly PutScalingPolicy: string[] = ["gamelift:PutScalingPolicy"];
	/** IAM actions required for the RegisterCompute API call. */
	static readonly RegisterCompute: string[] = ["gamelift:RegisterCompute"];
	/** IAM actions required for the RegisterGameServer API call. */
	static readonly RegisterGameServer: string[] = [
		"gamelift:RegisterGameServer",
	];
	/** IAM actions required for the RequestUploadCredentials API call. */
	static readonly RequestUploadCredentials: string[] = [
		"gamelift:RequestUploadCredentials",
	];
	/** IAM actions required for the ResolveAlias API call. */
	static readonly ResolveAlias: string[] = ["gamelift:ResolveAlias"];
	/** IAM actions required for the ResumeGameServerGroup API call. */
	static readonly ResumeGameServerGroup: string[] = [
		"gamelift:ResumeGameServerGroup",
	];
	/** IAM actions required for the SearchGameSessions API call. */
	static readonly SearchGameSessions: string[] = [
		"gamelift:SearchGameSessions",
	];
	/** IAM actions required for the StartFleetActions API call. */
	static readonly StartFleetActions: string[] = ["gamelift:StartFleetActions"];
	/** IAM actions required for the StartGameSessionPlacement API call. */
	static readonly StartGameSessionPlacement: string[] = [
		"gamelift:StartGameSessionPlacement",
	];
	/** IAM actions required for the StartMatchBackfill API call. */
	static readonly StartMatchBackfill: string[] = [
		"gamelift:StartMatchBackfill",
	];
	/** IAM actions required for the StartMatchmaking API call. */
	static readonly StartMatchmaking: string[] = ["gamelift:StartMatchmaking"];
	/** IAM actions required for the StopFleetActions API call. */
	static readonly StopFleetActions: string[] = ["gamelift:StopFleetActions"];
	/** IAM actions required for the StopGameSessionPlacement API call. */
	static readonly StopGameSessionPlacement: string[] = [
		"gamelift:StopGameSessionPlacement",
	];
	/** IAM actions required for the StopMatchmaking API call. */
	static readonly StopMatchmaking: string[] = ["gamelift:StopMatchmaking"];
	/** IAM actions required for the SuspendGameServerGroup API call. */
	static readonly SuspendGameServerGroup: string[] = [
		"gamelift:SuspendGameServerGroup",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"gamelift:TagResource",
		"gamelift:TagResource",
	];
	/** IAM actions required for the TerminateGameSession API call. */
	static readonly TerminateGameSession: string[] = [
		"gamelift:TerminateGameSession",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"gamelift:UntagResource",
		"gamelift:UntagResource",
	];
	/** IAM actions required for the UpdateAlias API call. */
	static readonly UpdateAlias: string[] = ["gamelift:UpdateAlias"];
	/** IAM actions required for the UpdateBuild API call. */
	static readonly UpdateBuild: string[] = ["gamelift:UpdateBuild"];
	/** IAM actions required for the UpdateContainerFleet API call. */
	static readonly UpdateContainerFleet: string[] = [
		"gamelift:UpdateContainerFleet",
	];
	/** IAM actions required for the UpdateContainerGroupDefinition API call. */
	static readonly UpdateContainerGroupDefinition: string[] = [
		"gamelift:UpdateContainerGroupDefinition",
	];
	/** IAM actions required for the UpdateFleetAttributes API call. */
	static readonly UpdateFleetAttributes: string[] = [
		"gamelift:UpdateFleetAttributes",
	];
	/** IAM actions required for the UpdateFleetCapacity API call. */
	static readonly UpdateFleetCapacity: string[] = [
		"gamelift:UpdateFleetCapacity",
	];
	/** IAM actions required for the UpdateFleetPortSettings API call. */
	static readonly UpdateFleetPortSettings: string[] = [
		"gamelift:UpdateFleetPortSettings",
	];
	/** IAM actions required for the UpdateGameServer API call. */
	static readonly UpdateGameServer: string[] = ["gamelift:UpdateGameServer"];
	/** IAM actions required for the UpdateGameServerGroup API call. */
	static readonly UpdateGameServerGroup: string[] = [
		"iam:PassRole",
		"gamelift:UpdateGameServerGroup",
	];
	/** IAM actions required for the UpdateGameSession API call. */
	static readonly UpdateGameSession: string[] = ["gamelift:UpdateGameSession"];
	/** IAM actions required for the UpdateGameSessionQueue API call. */
	static readonly UpdateGameSessionQueue: string[] = [
		"gamelift:UpdateGameSessionQueue",
	];
	/** IAM actions required for the UpdateMatchmakingConfiguration API call. */
	static readonly UpdateMatchmakingConfiguration: string[] = [
		"gamelift:UpdateMatchmakingConfiguration",
	];
	/** IAM actions required for the UpdateRuntimeConfiguration API call. */
	static readonly UpdateRuntimeConfiguration: string[] = [
		"gamelift:UpdateRuntimeConfiguration",
	];
	/** IAM actions required for the UpdateScript API call. */
	static readonly UpdateScript: string[] = [
		"iam:PassRole",
		"gamelift:UpdateScript",
	];
	/** IAM actions required for the ValidateMatchmakingRuleSet API call. */
	static readonly ValidateMatchmakingRuleSet: string[] = [
		"gamelift:ValidateMatchmakingRuleSet",
	];
}

/**
 * Condition key constants and builders for gamelift.
 */
export class GameLiftConditions {
	/** Condition keys applicable to the CreateAlias action. */
	static readonly CreateAliasConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBuild action. */
	static readonly CreateBuildConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContainerFleet action. */
	static readonly CreateContainerFleetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContainerGroupDefinition action. */
	static readonly CreateContainerGroupDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFleet action. */
	static readonly CreateFleetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGameServerGroup action. */
	static readonly CreateGameServerGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGameSessionQueue action. */
	static readonly CreateGameSessionQueueConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLocation action. */
	static readonly CreateLocationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMatchmakingConfiguration action. */
	static readonly CreateMatchmakingConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMatchmakingRuleSet action. */
	static readonly CreateMatchmakingRuleSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScript action. */
	static readonly CreateScriptConditionKeys: string[] = [
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
