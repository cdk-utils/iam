// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/lambda.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the lambda service.
 */
export class LambdaActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "lambda";

	/** [PermissionManagement] lambda:AddLayerVersionPermission */
	static readonly AddLayerVersionPermission =
		"lambda:AddLayerVersionPermission";
	/** [PermissionManagement] lambda:AddPermission */
	static readonly AddPermission = "lambda:AddPermission";
	/** [Write] lambda:CheckpointDurableExecution */
	static readonly CheckpointDurableExecution =
		"lambda:CheckpointDurableExecution";
	/** [Write] lambda:ConnectMicrovm */
	static readonly ConnectMicrovm = "lambda:ConnectMicrovm";
	/** [Write] lambda:CreateAlias */
	static readonly CreateAlias = "lambda:CreateAlias";
	/** [Write] lambda:CreateCapacityProvider */
	static readonly CreateCapacityProvider = "lambda:CreateCapacityProvider";
	/** [Write] lambda:CreateCodeSigningConfig */
	static readonly CreateCodeSigningConfig = "lambda:CreateCodeSigningConfig";
	/** [Write] lambda:CreateEventSourceMapping */
	static readonly CreateEventSourceMapping = "lambda:CreateEventSourceMapping";
	/** [Write] lambda:CreateFunction */
	static readonly CreateFunction = "lambda:CreateFunction";
	/** [Write] lambda:CreateFunctionUrlConfig */
	static readonly CreateFunctionUrlConfig = "lambda:CreateFunctionUrlConfig";
	/** [Write] lambda:CreateMicrovmAuthToken */
	static readonly CreateMicrovmAuthToken = "lambda:CreateMicrovmAuthToken";
	/** [Write] lambda:CreateMicrovmImage */
	static readonly CreateMicrovmImage = "lambda:CreateMicrovmImage";
	/** [Write] lambda:CreateMicrovmShellAuthToken */
	static readonly CreateMicrovmShellAuthToken =
		"lambda:CreateMicrovmShellAuthToken";
	/** [Write] lambda:CreateNetworkConnector */
	static readonly CreateNetworkConnector = "lambda:CreateNetworkConnector";
	/** [Write] lambda:DeleteAlias */
	static readonly DeleteAlias = "lambda:DeleteAlias";
	/** [Write] lambda:DeleteCapacityProvider */
	static readonly DeleteCapacityProvider = "lambda:DeleteCapacityProvider";
	/** [Write] lambda:DeleteCodeSigningConfig */
	static readonly DeleteCodeSigningConfig = "lambda:DeleteCodeSigningConfig";
	/** [Write] lambda:DeleteEventSourceMapping */
	static readonly DeleteEventSourceMapping = "lambda:DeleteEventSourceMapping";
	/** [Write] lambda:DeleteFunction */
	static readonly DeleteFunction = "lambda:DeleteFunction";
	/** [Write] lambda:DeleteFunctionCodeSigningConfig */
	static readonly DeleteFunctionCodeSigningConfig =
		"lambda:DeleteFunctionCodeSigningConfig";
	/** [Write] lambda:DeleteFunctionConcurrency */
	static readonly DeleteFunctionConcurrency =
		"lambda:DeleteFunctionConcurrency";
	/** [Write] lambda:DeleteFunctionEventInvokeConfig */
	static readonly DeleteFunctionEventInvokeConfig =
		"lambda:DeleteFunctionEventInvokeConfig";
	/** [Write] lambda:DeleteFunctionUrlConfig */
	static readonly DeleteFunctionUrlConfig = "lambda:DeleteFunctionUrlConfig";
	/** [Write] lambda:DeleteLayerVersion */
	static readonly DeleteLayerVersion = "lambda:DeleteLayerVersion";
	/** [Write] lambda:DeleteMicrovmImage */
	static readonly DeleteMicrovmImage = "lambda:DeleteMicrovmImage";
	/** [Write] lambda:DeleteMicrovmImageVersion */
	static readonly DeleteMicrovmImageVersion =
		"lambda:DeleteMicrovmImageVersion";
	/** [Write] lambda:DeleteNetworkConnector */
	static readonly DeleteNetworkConnector = "lambda:DeleteNetworkConnector";
	/** [Write] lambda:DeleteProvisionedConcurrencyConfig */
	static readonly DeleteProvisionedConcurrencyConfig =
		"lambda:DeleteProvisionedConcurrencyConfig";
	/** [PermissionManagement] lambda:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "lambda:DeleteResourcePolicy";
	/** [PermissionManagement] lambda:DisableReplication */
	static readonly DisableReplication = "lambda:DisableReplication";
	/** [PermissionManagement] lambda:EnableReplication */
	static readonly EnableReplication = "lambda:EnableReplication";
	/** [Read] lambda:GetAccountSettings */
	static readonly actionGetAccountSettings = "lambda:GetAccountSettings";
	/** [Read] lambda:GetAlias */
	static readonly actionGetAlias = "lambda:GetAlias";
	/** [Read] lambda:GetCapacityProvider */
	static readonly actionGetCapacityProvider = "lambda:GetCapacityProvider";
	/** [Read] lambda:GetCodeSigningConfig */
	static readonly actionGetCodeSigningConfig = "lambda:GetCodeSigningConfig";
	/** [Read] lambda:GetDurableExecution */
	static readonly actionGetDurableExecution = "lambda:GetDurableExecution";
	/** [Read] lambda:GetDurableExecutionHistory */
	static readonly actionGetDurableExecutionHistory =
		"lambda:GetDurableExecutionHistory";
	/** [Read] lambda:GetDurableExecutionState */
	static readonly actionGetDurableExecutionState =
		"lambda:GetDurableExecutionState";
	/** [Read] lambda:GetEventSourceMapping */
	static readonly actionGetEventSourceMapping = "lambda:GetEventSourceMapping";
	/** [Read] lambda:GetFunction */
	static readonly actionGetFunction = "lambda:GetFunction";
	/** [Read] lambda:GetFunctionCodeSigningConfig */
	static readonly actionGetFunctionCodeSigningConfig =
		"lambda:GetFunctionCodeSigningConfig";
	/** [Read] lambda:GetFunctionConcurrency */
	static readonly actionGetFunctionConcurrency =
		"lambda:GetFunctionConcurrency";
	/** [Read] lambda:GetFunctionConfiguration */
	static readonly actionGetFunctionConfiguration =
		"lambda:GetFunctionConfiguration";
	/** [Read] lambda:GetFunctionEventInvokeConfig */
	static readonly actionGetFunctionEventInvokeConfig =
		"lambda:GetFunctionEventInvokeConfig";
	/** [Read] lambda:GetFunctionRecursionConfig */
	static readonly actionGetFunctionRecursionConfig =
		"lambda:GetFunctionRecursionConfig";
	/** [Read] lambda:GetFunctionScalingConfig */
	static readonly actionGetFunctionScalingConfig =
		"lambda:GetFunctionScalingConfig";
	/** [Read] lambda:GetFunctionUrlConfig */
	static readonly actionGetFunctionUrlConfig = "lambda:GetFunctionUrlConfig";
	/** [Read] lambda:GetLayerVersion */
	static readonly actionGetLayerVersion = "lambda:GetLayerVersion";
	/** [Read] lambda:GetLayerVersionPolicy */
	static readonly actionGetLayerVersionPolicy = "lambda:GetLayerVersionPolicy";
	/** [Read] lambda:GetMicrovm */
	static readonly actionGetMicrovm = "lambda:GetMicrovm";
	/** [Read] lambda:GetMicrovmImage */
	static readonly actionGetMicrovmImage = "lambda:GetMicrovmImage";
	/** [Read] lambda:GetMicrovmImageBuild */
	static readonly actionGetMicrovmImageBuild = "lambda:GetMicrovmImageBuild";
	/** [Read] lambda:GetMicrovmImageVersion */
	static readonly actionGetMicrovmImageVersion =
		"lambda:GetMicrovmImageVersion";
	/** [Read] lambda:GetNetworkConnector */
	static readonly actionGetNetworkConnector = "lambda:GetNetworkConnector";
	/** [Read] lambda:GetPolicy */
	static readonly actionGetPolicy = "lambda:GetPolicy";
	/** [Read] lambda:GetProvisionedConcurrencyConfig */
	static readonly actionGetProvisionedConcurrencyConfig =
		"lambda:GetProvisionedConcurrencyConfig";
	/** [Read] lambda:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "lambda:GetResourcePolicy";
	/** [Read] lambda:GetRuntimeManagementConfig */
	static readonly actionGetRuntimeManagementConfig =
		"lambda:GetRuntimeManagementConfig";
	/** [Write] lambda:InvokeAsync */
	static readonly InvokeAsync = "lambda:InvokeAsync";
	/** [Write] lambda:InvokeFunction */
	static readonly InvokeFunction = "lambda:InvokeFunction";
	/** [Write] lambda:InvokeFunctionUrl */
	static readonly InvokeFunctionUrl = "lambda:InvokeFunctionUrl";
	/** [List] lambda:ListAliases */
	static readonly ListAliases = "lambda:ListAliases";
	/** [List] lambda:ListCapacityProviders */
	static readonly ListCapacityProviders = "lambda:ListCapacityProviders";
	/** [List] lambda:ListCodeSigningConfigs */
	static readonly ListCodeSigningConfigs = "lambda:ListCodeSigningConfigs";
	/** [List] lambda:ListDurableExecutionsByFunction */
	static readonly ListDurableExecutionsByFunction =
		"lambda:ListDurableExecutionsByFunction";
	/** [List] lambda:ListEventSourceMappings */
	static readonly ListEventSourceMappings = "lambda:ListEventSourceMappings";
	/** [List] lambda:ListFunctionEventInvokeConfigs */
	static readonly ListFunctionEventInvokeConfigs =
		"lambda:ListFunctionEventInvokeConfigs";
	/** [List] lambda:ListFunctionUrlConfigs */
	static readonly ListFunctionUrlConfigs = "lambda:ListFunctionUrlConfigs";
	/** [List] lambda:ListFunctionVersionsByCapacityProvider */
	static readonly ListFunctionVersionsByCapacityProvider =
		"lambda:ListFunctionVersionsByCapacityProvider";
	/** [List] lambda:ListFunctions */
	static readonly ListFunctions = "lambda:ListFunctions";
	/** [List] lambda:ListFunctionsByCodeSigningConfig */
	static readonly ListFunctionsByCodeSigningConfig =
		"lambda:ListFunctionsByCodeSigningConfig";
	/** [List] lambda:ListLayerVersions */
	static readonly ListLayerVersions = "lambda:ListLayerVersions";
	/** [List] lambda:ListLayers */
	static readonly ListLayers = "lambda:ListLayers";
	/** [List] lambda:ListManagedMicrovmImageVersions */
	static readonly ListManagedMicrovmImageVersions =
		"lambda:ListManagedMicrovmImageVersions";
	/** [List] lambda:ListManagedMicrovmImages */
	static readonly ListManagedMicrovmImages = "lambda:ListManagedMicrovmImages";
	/** [List] lambda:ListMicrovmImageBuilds */
	static readonly ListMicrovmImageBuilds = "lambda:ListMicrovmImageBuilds";
	/** [List] lambda:ListMicrovmImageVersions */
	static readonly ListMicrovmImageVersions = "lambda:ListMicrovmImageVersions";
	/** [List] lambda:ListMicrovmImages */
	static readonly ListMicrovmImages = "lambda:ListMicrovmImages";
	/** [List] lambda:ListMicrovms */
	static readonly ListMicrovms = "lambda:ListMicrovms";
	/** [List] lambda:ListNetworkConnectors */
	static readonly ListNetworkConnectors = "lambda:ListNetworkConnectors";
	/** [List] lambda:ListProvisionedConcurrencyConfigs */
	static readonly ListProvisionedConcurrencyConfigs =
		"lambda:ListProvisionedConcurrencyConfigs";
	/** [Read] lambda:ListTags */
	static readonly ListTags = "lambda:ListTags";
	/** [List] lambda:ListVersionsByFunction */
	static readonly ListVersionsByFunction = "lambda:ListVersionsByFunction";
	/** [Write] lambda:PassCapacityProvider */
	static readonly PassCapacityProvider = "lambda:PassCapacityProvider";
	/** [Write] lambda:PassNetworkConnector */
	static readonly PassNetworkConnector = "lambda:PassNetworkConnector";
	/** [Write] lambda:PublishLayerVersion */
	static readonly PublishLayerVersion = "lambda:PublishLayerVersion";
	/** [Write] lambda:PublishVersion */
	static readonly PublishVersion = "lambda:PublishVersion";
	/** [Write] lambda:PutFunctionCodeSigningConfig */
	static readonly PutFunctionCodeSigningConfig =
		"lambda:PutFunctionCodeSigningConfig";
	/** [Write] lambda:PutFunctionConcurrency */
	static readonly PutFunctionConcurrency = "lambda:PutFunctionConcurrency";
	/** [Write] lambda:PutFunctionEventInvokeConfig */
	static readonly PutFunctionEventInvokeConfig =
		"lambda:PutFunctionEventInvokeConfig";
	/** [Write] lambda:PutFunctionRecursionConfig */
	static readonly PutFunctionRecursionConfig =
		"lambda:PutFunctionRecursionConfig";
	/** [Write] lambda:PutFunctionScalingConfig */
	static readonly PutFunctionScalingConfig = "lambda:PutFunctionScalingConfig";
	/** [Write] lambda:PutProvisionedConcurrencyConfig */
	static readonly PutProvisionedConcurrencyConfig =
		"lambda:PutProvisionedConcurrencyConfig";
	/** [PermissionManagement] lambda:PutResourcePolicy */
	static readonly PutResourcePolicy = "lambda:PutResourcePolicy";
	/** [Write] lambda:PutRuntimeManagementConfig */
	static readonly PutRuntimeManagementConfig =
		"lambda:PutRuntimeManagementConfig";
	/** [PermissionManagement] lambda:RemoveLayerVersionPermission */
	static readonly RemoveLayerVersionPermission =
		"lambda:RemoveLayerVersionPermission";
	/** [PermissionManagement] lambda:RemovePermission */
	static readonly RemovePermission = "lambda:RemovePermission";
	/** [Write] lambda:ResumeMicrovm */
	static readonly ResumeMicrovm = "lambda:ResumeMicrovm";
	/** [Write] lambda:RunMicrovm */
	static readonly RunMicrovm = "lambda:RunMicrovm";
	/** [Write] lambda:SendDurableExecutionCallbackFailure */
	static readonly SendDurableExecutionCallbackFailure =
		"lambda:SendDurableExecutionCallbackFailure";
	/** [Write] lambda:SendDurableExecutionCallbackHeartbeat */
	static readonly SendDurableExecutionCallbackHeartbeat =
		"lambda:SendDurableExecutionCallbackHeartbeat";
	/** [Write] lambda:SendDurableExecutionCallbackSuccess */
	static readonly SendDurableExecutionCallbackSuccess =
		"lambda:SendDurableExecutionCallbackSuccess";
	/** [Write] lambda:StopDurableExecution */
	static readonly StopDurableExecution = "lambda:StopDurableExecution";
	/** [Write] lambda:SuspendMicrovm */
	static readonly SuspendMicrovm = "lambda:SuspendMicrovm";
	/** [Tagging] lambda:TagResource */
	static readonly TagResource = "lambda:TagResource";
	/** [Write] lambda:TerminateMicrovm */
	static readonly TerminateMicrovm = "lambda:TerminateMicrovm";
	/** [Tagging] lambda:UntagResource */
	static readonly UntagResource = "lambda:UntagResource";
	/** [Write] lambda:UpdateAlias */
	static readonly UpdateAlias = "lambda:UpdateAlias";
	/** [Write] lambda:UpdateCapacityProvider */
	static readonly UpdateCapacityProvider = "lambda:UpdateCapacityProvider";
	/** [Write] lambda:UpdateCodeSigningConfig */
	static readonly UpdateCodeSigningConfig = "lambda:UpdateCodeSigningConfig";
	/** [Write] lambda:UpdateEventSourceMapping */
	static readonly UpdateEventSourceMapping = "lambda:UpdateEventSourceMapping";
	/** [Write] lambda:UpdateFunctionCode */
	static readonly UpdateFunctionCode = "lambda:UpdateFunctionCode";
	/** [Write] lambda:UpdateFunctionCodeSigningConfig */
	static readonly UpdateFunctionCodeSigningConfig =
		"lambda:UpdateFunctionCodeSigningConfig";
	/** [Write] lambda:UpdateFunctionConfiguration */
	static readonly UpdateFunctionConfiguration =
		"lambda:UpdateFunctionConfiguration";
	/** [Write] lambda:UpdateFunctionEventInvokeConfig */
	static readonly UpdateFunctionEventInvokeConfig =
		"lambda:UpdateFunctionEventInvokeConfig";
	/** [Write] lambda:UpdateFunctionUrlConfig */
	static readonly UpdateFunctionUrlConfig = "lambda:UpdateFunctionUrlConfig";
	/** [Write] lambda:UpdateMicrovmImage */
	static readonly UpdateMicrovmImage = "lambda:UpdateMicrovmImage";
	/** [Write] lambda:UpdateMicrovmImageVersion */
	static readonly UpdateMicrovmImageVersion =
		"lambda:UpdateMicrovmImageVersion";
	/** [Write] lambda:UpdateNetworkConnector */
	static readonly UpdateNetworkConnector = "lambda:UpdateNetworkConnector";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		LambdaActions.actionGetAccountSettings,
		LambdaActions.actionGetAlias,
		LambdaActions.actionGetCapacityProvider,
		LambdaActions.actionGetCodeSigningConfig,
		LambdaActions.actionGetDurableExecution,
		LambdaActions.actionGetDurableExecutionHistory,
		LambdaActions.actionGetDurableExecutionState,
		LambdaActions.actionGetEventSourceMapping,
		LambdaActions.actionGetFunction,
		LambdaActions.actionGetFunctionCodeSigningConfig,
		LambdaActions.actionGetFunctionConcurrency,
		LambdaActions.actionGetFunctionConfiguration,
		LambdaActions.actionGetFunctionEventInvokeConfig,
		LambdaActions.actionGetFunctionRecursionConfig,
		LambdaActions.actionGetFunctionScalingConfig,
		LambdaActions.actionGetFunctionUrlConfig,
		LambdaActions.actionGetLayerVersion,
		LambdaActions.actionGetLayerVersionPolicy,
		LambdaActions.actionGetMicrovm,
		LambdaActions.actionGetMicrovmImage,
		LambdaActions.actionGetMicrovmImageBuild,
		LambdaActions.actionGetMicrovmImageVersion,
		LambdaActions.actionGetNetworkConnector,
		LambdaActions.actionGetPolicy,
		LambdaActions.actionGetProvisionedConcurrencyConfig,
		LambdaActions.actionGetResourcePolicy,
		LambdaActions.actionGetRuntimeManagementConfig,
		LambdaActions.ListTags,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		LambdaActions.CheckpointDurableExecution,
		LambdaActions.ConnectMicrovm,
		LambdaActions.CreateAlias,
		LambdaActions.CreateCapacityProvider,
		LambdaActions.CreateCodeSigningConfig,
		LambdaActions.CreateEventSourceMapping,
		LambdaActions.CreateFunction,
		LambdaActions.CreateFunctionUrlConfig,
		LambdaActions.CreateMicrovmAuthToken,
		LambdaActions.CreateMicrovmImage,
		LambdaActions.CreateMicrovmShellAuthToken,
		LambdaActions.CreateNetworkConnector,
		LambdaActions.DeleteAlias,
		LambdaActions.DeleteCapacityProvider,
		LambdaActions.DeleteCodeSigningConfig,
		LambdaActions.DeleteEventSourceMapping,
		LambdaActions.DeleteFunction,
		LambdaActions.DeleteFunctionCodeSigningConfig,
		LambdaActions.DeleteFunctionConcurrency,
		LambdaActions.DeleteFunctionEventInvokeConfig,
		LambdaActions.DeleteFunctionUrlConfig,
		LambdaActions.DeleteLayerVersion,
		LambdaActions.DeleteMicrovmImage,
		LambdaActions.DeleteMicrovmImageVersion,
		LambdaActions.DeleteNetworkConnector,
		LambdaActions.DeleteProvisionedConcurrencyConfig,
		LambdaActions.InvokeAsync,
		LambdaActions.InvokeFunction,
		LambdaActions.InvokeFunctionUrl,
		LambdaActions.PassCapacityProvider,
		LambdaActions.PassNetworkConnector,
		LambdaActions.PublishLayerVersion,
		LambdaActions.PublishVersion,
		LambdaActions.PutFunctionCodeSigningConfig,
		LambdaActions.PutFunctionConcurrency,
		LambdaActions.PutFunctionEventInvokeConfig,
		LambdaActions.PutFunctionRecursionConfig,
		LambdaActions.PutFunctionScalingConfig,
		LambdaActions.PutProvisionedConcurrencyConfig,
		LambdaActions.PutRuntimeManagementConfig,
		LambdaActions.ResumeMicrovm,
		LambdaActions.RunMicrovm,
		LambdaActions.SendDurableExecutionCallbackFailure,
		LambdaActions.SendDurableExecutionCallbackHeartbeat,
		LambdaActions.SendDurableExecutionCallbackSuccess,
		LambdaActions.StopDurableExecution,
		LambdaActions.SuspendMicrovm,
		LambdaActions.TerminateMicrovm,
		LambdaActions.UpdateAlias,
		LambdaActions.UpdateCapacityProvider,
		LambdaActions.UpdateCodeSigningConfig,
		LambdaActions.UpdateEventSourceMapping,
		LambdaActions.UpdateFunctionCode,
		LambdaActions.UpdateFunctionCodeSigningConfig,
		LambdaActions.UpdateFunctionConfiguration,
		LambdaActions.UpdateFunctionEventInvokeConfig,
		LambdaActions.UpdateFunctionUrlConfig,
		LambdaActions.UpdateMicrovmImage,
		LambdaActions.UpdateMicrovmImageVersion,
		LambdaActions.UpdateNetworkConnector,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		LambdaActions.ListAliases,
		LambdaActions.ListCapacityProviders,
		LambdaActions.ListCodeSigningConfigs,
		LambdaActions.ListDurableExecutionsByFunction,
		LambdaActions.ListEventSourceMappings,
		LambdaActions.ListFunctionEventInvokeConfigs,
		LambdaActions.ListFunctionUrlConfigs,
		LambdaActions.ListFunctionVersionsByCapacityProvider,
		LambdaActions.ListFunctions,
		LambdaActions.ListFunctionsByCodeSigningConfig,
		LambdaActions.ListLayerVersions,
		LambdaActions.ListLayers,
		LambdaActions.ListManagedMicrovmImageVersions,
		LambdaActions.ListManagedMicrovmImages,
		LambdaActions.ListMicrovmImageBuilds,
		LambdaActions.ListMicrovmImageVersions,
		LambdaActions.ListMicrovmImages,
		LambdaActions.ListMicrovms,
		LambdaActions.ListNetworkConnectors,
		LambdaActions.ListProvisionedConcurrencyConfigs,
		LambdaActions.ListVersionsByFunction,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		LambdaActions.AddLayerVersionPermission,
		LambdaActions.AddPermission,
		LambdaActions.DeleteResourcePolicy,
		LambdaActions.DisableReplication,
		LambdaActions.EnableReplication,
		LambdaActions.PutResourcePolicy,
		LambdaActions.RemoveLayerVersionPermission,
		LambdaActions.RemovePermission,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		LambdaActions.TagResource,
		LambdaActions.UntagResource,
	];
}

/**
 * Properties for building a capacityProvider ARN.
 */
export interface LambdaCapacityProviderArnProps {
	/** The CapacityProviderName component of the ARN. */
	readonly capacityProviderName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a capacityProvider ARN.
 */
export interface LambdaCapacityProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CapacityProviderName component. */
	readonly capacityProviderName: string;
}

/**
 * Properties for building a code signing config ARN.
 */
export interface LambdaCodeSigningConfigArnProps {
	/** The CodeSigningConfigId component of the ARN. */
	readonly codeSigningConfigId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a code signing config ARN.
 */
export interface LambdaCodeSigningConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CodeSigningConfigId component. */
	readonly codeSigningConfigId: string;
}

/**
 * Properties for building a durable execution ARN.
 */
export interface LambdaDurableExecutionArnProps {
	/** The FunctionName component of the ARN. */
	readonly functionName: string;
	/** The Version component of the ARN. */
	readonly version: string;
	/** The ExecutionName component of the ARN. */
	readonly executionName: string;
	/** The ExecutionId component of the ARN. */
	readonly executionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a durable execution ARN.
 */
export interface LambdaDurableExecutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FunctionName component. */
	readonly functionName: string;
	/** The Version component. */
	readonly version: string;
	/** The ExecutionName component. */
	readonly executionName: string;
	/** The ExecutionId component. */
	readonly executionId: string;
}

/**
 * Properties for building a eventSourceMapping ARN.
 */
export interface LambdaEventSourceMappingArnProps {
	/** The UUID component of the ARN. */
	readonly uuid: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a eventSourceMapping ARN.
 */
export interface LambdaEventSourceMappingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UUID component. */
	readonly uuid: string;
}

/**
 * Properties for building a function ARN.
 */
export interface LambdaFunctionArnProps {
	/** The FunctionName component of the ARN. */
	readonly functionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a function ARN.
 */
export interface LambdaFunctionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FunctionName component. */
	readonly functionName: string;
}

/**
 * Properties for building a function alias ARN.
 */
export interface LambdaFunctionAliasArnProps {
	/** The FunctionName component of the ARN. */
	readonly functionName: string;
	/** The Alias component of the ARN. */
	readonly alias: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a function alias ARN.
 */
export interface LambdaFunctionAliasArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FunctionName component. */
	readonly functionName: string;
	/** The Alias component. */
	readonly alias: string;
}

/**
 * Properties for building a function version ARN.
 */
export interface LambdaFunctionVersionArnProps {
	/** The FunctionName component of the ARN. */
	readonly functionName: string;
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
 * Parsed components of a function version ARN.
 */
export interface LambdaFunctionVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FunctionName component. */
	readonly functionName: string;
	/** The Version component. */
	readonly version: string;
}

/**
 * Properties for building a layer ARN.
 */
export interface LambdaLayerArnProps {
	/** The LayerName component of the ARN. */
	readonly layerName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a layer ARN.
 */
export interface LambdaLayerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LayerName component. */
	readonly layerName: string;
}

/**
 * Properties for building a layerVersion ARN.
 */
export interface LambdaLayerVersionArnProps {
	/** The LayerName component of the ARN. */
	readonly layerName: string;
	/** The LayerVersion component of the ARN. */
	readonly layerVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a layerVersion ARN.
 */
export interface LambdaLayerVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LayerName component. */
	readonly layerName: string;
	/** The LayerVersion component. */
	readonly layerVersion: string;
}

/**
 * Properties for building a microvmImage ARN.
 */
export interface LambdaMicrovmImageArnProps {
	/** The MicrovmImageName component of the ARN. */
	readonly microvmImageName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a microvmImage ARN.
 */
export interface LambdaMicrovmImageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MicrovmImageName component. */
	readonly microvmImageName: string;
}

/**
 * Properties for building a networkConnector ARN.
 */
export interface LambdaNetworkConnectorArnProps {
	/** The NetworkConnectorId component of the ARN. */
	readonly networkConnectorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a networkConnector ARN.
 */
export interface LambdaNetworkConnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NetworkConnectorId component. */
	readonly networkConnectorId: string;
}

const CapacityProviderArnRegex =
	/^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):capacity-provider:(?<capacityProviderName>[^:/?]+)$/;
const CodeSigningConfigArnRegex =
	/^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):code-signing-config:(?<codeSigningConfigId>[^:/?]+)$/;
const DurableExecutionArnRegex =
	/^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):function:(?<functionName>[^:/?]+):(?<version>[^:/?]+)\/durable-execution\/(?<executionName>[^:/?]+)\/(?<executionId>[^:/?]+)$/;
const EventSourceMappingArnRegex =
	/^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):event-source-mapping:(?<uuid>[^:/?]+)$/;
const FunctionArnRegex =
	/^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):function:(?<functionName>[^:/?]+)$/;
const FunctionAliasArnRegex =
	/^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):function:(?<functionName>[^:/?]+):(?<alias>[^:/?]+)$/;
const FunctionVersionArnRegex =
	/^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):function:(?<functionName>[^:/?]+):(?<version>[^:/?]+)$/;
const LayerArnRegex =
	/^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):layer:(?<layerName>[^:/?]+)$/;
const LayerVersionArnRegex =
	/^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):layer:(?<layerName>[^:/?]+):(?<layerVersion>[^:/?]+)$/;
const MicrovmImageArnRegex =
	/^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):microvm-image:(?<microvmImageName>[^:/?]+)$/;
const NetworkConnectorArnRegex =
	/^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):network-connector:(?<networkConnectorId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for lambda resources.
 */
export class LambdaResources {
	/**
	 * Builds an ARN for the capacityProvider resource.
	 */
	static capacityProvider(props: LambdaCapacityProviderArnProps): string {
		return `arn:${props.partition ?? "aws"}:lambda:${props.region ?? "*"}:${props.account ?? "*"}:capacity-provider:${props.capacityProviderName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the capacityProvider resource.
	 */
	static isValidCapacityProviderArn(arn: string): boolean {
		return CapacityProviderArnRegex.test(arn);
	}

	/**
	 * Parses a capacityProvider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCapacityProviderArn(
		arn: string,
	): LambdaCapacityProviderArnComponents {
		const match = CapacityProviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid capacityProvider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			capacityProviderName: match.groups!.capacityProviderName,
		};
	}

	/**
	 * Builds an ARN for the code signing config resource.
	 */
	static codeSigningConfig(props: LambdaCodeSigningConfigArnProps): string {
		return `arn:${props.partition ?? "aws"}:lambda:${props.region ?? "*"}:${props.account ?? "*"}:code-signing-config:${props.codeSigningConfigId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the code signing config resource.
	 */
	static isValidCodeSigningConfigArn(arn: string): boolean {
		return CodeSigningConfigArnRegex.test(arn);
	}

	/**
	 * Parses a code signing config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCodeSigningConfigArn(
		arn: string,
	): LambdaCodeSigningConfigArnComponents {
		const match = CodeSigningConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid code signing config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			codeSigningConfigId: match.groups!.codeSigningConfigId,
		};
	}

	/**
	 * Builds an ARN for the durable execution resource.
	 */
	static durableExecution(props: LambdaDurableExecutionArnProps): string {
		return `arn:${props.partition ?? "aws"}:lambda:${props.region ?? "*"}:${props.account ?? "*"}:function:${props.functionName}:${props.version}/durable-execution/${props.executionName}/${props.executionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the durable execution resource.
	 */
	static isValidDurableExecutionArn(arn: string): boolean {
		return DurableExecutionArnRegex.test(arn);
	}

	/**
	 * Parses a durable execution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDurableExecutionArn(
		arn: string,
	): LambdaDurableExecutionArnComponents {
		const match = DurableExecutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid durable execution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			functionName: match.groups!.functionName,
			version: match.groups!.version,
			executionName: match.groups!.executionName,
			executionId: match.groups!.executionId,
		};
	}

	/**
	 * Builds an ARN for the eventSourceMapping resource.
	 */
	static eventSourceMapping(props: LambdaEventSourceMappingArnProps): string {
		return `arn:${props.partition ?? "aws"}:lambda:${props.region ?? "*"}:${props.account ?? "*"}:event-source-mapping:${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the eventSourceMapping resource.
	 */
	static isValidEventSourceMappingArn(arn: string): boolean {
		return EventSourceMappingArnRegex.test(arn);
	}

	/**
	 * Parses a eventSourceMapping ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventSourceMappingArn(
		arn: string,
	): LambdaEventSourceMappingArnComponents {
		const match = EventSourceMappingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid eventSourceMapping ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the function resource.
	 */
	static function(props: LambdaFunctionArnProps): string {
		return `arn:${props.partition ?? "aws"}:lambda:${props.region ?? "*"}:${props.account ?? "*"}:function:${props.functionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the function resource.
	 */
	static isValidFunctionArn(arn: string): boolean {
		return FunctionArnRegex.test(arn);
	}

	/**
	 * Parses a function ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFunctionArn(arn: string): LambdaFunctionArnComponents {
		const match = FunctionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid function ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			functionName: match.groups!.functionName,
		};
	}

	/**
	 * Builds an ARN for the function alias resource.
	 */
	static functionAlias(props: LambdaFunctionAliasArnProps): string {
		return `arn:${props.partition ?? "aws"}:lambda:${props.region ?? "*"}:${props.account ?? "*"}:function:${props.functionName}:${props.alias}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the function alias resource.
	 */
	static isValidFunctionAliasArn(arn: string): boolean {
		return FunctionAliasArnRegex.test(arn);
	}

	/**
	 * Parses a function alias ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFunctionAliasArn(arn: string): LambdaFunctionAliasArnComponents {
		const match = FunctionAliasArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid function alias ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			functionName: match.groups!.functionName,
			alias: match.groups!.alias,
		};
	}

	/**
	 * Builds an ARN for the function version resource.
	 */
	static functionVersion(props: LambdaFunctionVersionArnProps): string {
		return `arn:${props.partition ?? "aws"}:lambda:${props.region ?? "*"}:${props.account ?? "*"}:function:${props.functionName}:${props.version}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the function version resource.
	 */
	static isValidFunctionVersionArn(arn: string): boolean {
		return FunctionVersionArnRegex.test(arn);
	}

	/**
	 * Parses a function version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFunctionVersionArn(
		arn: string,
	): LambdaFunctionVersionArnComponents {
		const match = FunctionVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid function version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			functionName: match.groups!.functionName,
			version: match.groups!.version,
		};
	}

	/**
	 * Builds an ARN for the layer resource.
	 */
	static layer(props: LambdaLayerArnProps): string {
		return `arn:${props.partition ?? "aws"}:lambda:${props.region ?? "*"}:${props.account ?? "*"}:layer:${props.layerName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the layer resource.
	 */
	static isValidLayerArn(arn: string): boolean {
		return LayerArnRegex.test(arn);
	}

	/**
	 * Parses a layer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLayerArn(arn: string): LambdaLayerArnComponents {
		const match = LayerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid layer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			layerName: match.groups!.layerName,
		};
	}

	/**
	 * Builds an ARN for the layerVersion resource.
	 */
	static layerVersion(props: LambdaLayerVersionArnProps): string {
		return `arn:${props.partition ?? "aws"}:lambda:${props.region ?? "*"}:${props.account ?? "*"}:layer:${props.layerName}:${props.layerVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the layerVersion resource.
	 */
	static isValidLayerVersionArn(arn: string): boolean {
		return LayerVersionArnRegex.test(arn);
	}

	/**
	 * Parses a layerVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLayerVersionArn(arn: string): LambdaLayerVersionArnComponents {
		const match = LayerVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid layerVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			layerName: match.groups!.layerName,
			layerVersion: match.groups!.layerVersion,
		};
	}

	/**
	 * Builds an ARN for the microvmImage resource.
	 */
	static microvmImage(props: LambdaMicrovmImageArnProps): string {
		return `arn:${props.partition ?? "aws"}:lambda:${props.region ?? "*"}:${props.account ?? "*"}:microvm-image:${props.microvmImageName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the microvmImage resource.
	 */
	static isValidMicrovmImageArn(arn: string): boolean {
		return MicrovmImageArnRegex.test(arn);
	}

	/**
	 * Parses a microvmImage ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMicrovmImageArn(arn: string): LambdaMicrovmImageArnComponents {
		const match = MicrovmImageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid microvmImage ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			microvmImageName: match.groups!.microvmImageName,
		};
	}

	/**
	 * Builds an ARN for the networkConnector resource.
	 */
	static networkConnector(props: LambdaNetworkConnectorArnProps): string {
		return `arn:${props.partition ?? "aws"}:lambda:${props.region ?? "*"}:${props.account ?? "*"}:network-connector:${props.networkConnectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the networkConnector resource.
	 */
	static isValidNetworkConnectorArn(arn: string): boolean {
		return NetworkConnectorArnRegex.test(arn);
	}

	/**
	 * Parses a networkConnector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNetworkConnectorArn(
		arn: string,
	): LambdaNetworkConnectorArnComponents {
		const match = NetworkConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid networkConnector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkConnectorId: match.groups!.networkConnectorId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for lambda.
 */
export class LambdaOperations {
	/** IAM actions required for the AddEventSource API call. */
	static readonly AddEventSource: string[] = ["iam:PassRole"];
	/** IAM actions required for the AddLayerVersionPermission API call. */
	static readonly AddLayerVersionPermission: string[] = [
		"lambda:AddLayerVersionPermission",
	];
	/** IAM actions required for the AddPermission API call. */
	static readonly AddPermission: string[] = ["lambda:AddPermission"];
	/** IAM actions required for the CheckpointDurableExecution API call. */
	static readonly CheckpointDurableExecution: string[] = [
		"lambda:CheckpointDurableExecution",
	];
	/** IAM actions required for the CreateAlias API call. */
	static readonly CreateAlias: string[] = ["lambda:CreateAlias"];
	/** IAM actions required for the CreateCapacityProvider API call. */
	static readonly CreateCapacityProvider: string[] = [
		"lambda:CreateCapacityProvider",
		"iam:PassRole",
		"lambda:TagResource",
	];
	/** IAM actions required for the CreateCodeSigningConfig API call. */
	static readonly CreateCodeSigningConfig: string[] = [
		"lambda:CreateCodeSigningConfig",
		"lambda:TagResource",
	];
	/** IAM actions required for the CreateEventSourceMapping API call. */
	static readonly CreateEventSourceMapping: string[] = [
		"lambda:CreateEventSourceMapping",
		"lambda:TagResource",
	];
	/** IAM actions required for the CreateFunction API call. */
	static readonly CreateFunction: string[] = [
		"lambda:CreateFunction",
		"lambda:GetLayerVersion",
		"lambda:PassCapacityProvider",
		"iam:PassRole",
		"lambda:TagResource",
	];
	/** IAM actions required for the CreateFunctionUrlConfig API call. */
	static readonly CreateFunctionUrlConfig: string[] = [
		"lambda:CreateFunctionUrlConfig",
	];
	/** IAM actions required for the CreateMicrovmAuthToken API call. */
	static readonly CreateMicrovmAuthToken: string[] = [
		"lambda:CreateMicrovmAuthToken",
	];
	/** IAM actions required for the CreateMicrovmImage API call. */
	static readonly CreateMicrovmImage: string[] = [
		"lambda:CreateMicrovmImage",
		"lambda:PassNetworkConnector",
		"iam:PassRole",
		"lambda:TagResource",
	];
	/** IAM actions required for the CreateMicrovmShellAuthToken API call. */
	static readonly CreateMicrovmShellAuthToken: string[] = [
		"lambda:CreateMicrovmShellAuthToken",
	];
	/** IAM actions required for the CreateNetworkConnector API call. */
	static readonly CreateNetworkConnector: string[] = [
		"lambda:CreateNetworkConnector",
		"iam:PassRole",
		"lambda:TagResource",
	];
	/** IAM actions required for the DeleteAlias API call. */
	static readonly DeleteAlias: string[] = ["lambda:DeleteAlias"];
	/** IAM actions required for the DeleteCapacityProvider API call. */
	static readonly DeleteCapacityProvider: string[] = [
		"lambda:DeleteCapacityProvider",
	];
	/** IAM actions required for the DeleteCodeSigningConfig API call. */
	static readonly DeleteCodeSigningConfig: string[] = [
		"lambda:DeleteCodeSigningConfig",
	];
	/** IAM actions required for the DeleteEventSourceMapping API call. */
	static readonly DeleteEventSourceMapping: string[] = [
		"lambda:DeleteEventSourceMapping",
	];
	/** IAM actions required for the DeleteFunction API call. */
	static readonly DeleteFunction: string[] = ["lambda:DeleteFunction"];
	/** IAM actions required for the DeleteFunctionCodeSigningConfig API call. */
	static readonly DeleteFunctionCodeSigningConfig: string[] = [
		"lambda:DeleteFunctionCodeSigningConfig",
	];
	/** IAM actions required for the DeleteFunctionConcurrency API call. */
	static readonly DeleteFunctionConcurrency: string[] = [
		"lambda:DeleteFunctionConcurrency",
	];
	/** IAM actions required for the DeleteFunctionEventInvokeConfig API call. */
	static readonly DeleteFunctionEventInvokeConfig: string[] = [
		"lambda:DeleteFunctionEventInvokeConfig",
	];
	/** IAM actions required for the DeleteFunctionUrlConfig API call. */
	static readonly DeleteFunctionUrlConfig: string[] = [
		"lambda:DeleteFunctionUrlConfig",
	];
	/** IAM actions required for the DeleteLayerVersion API call. */
	static readonly DeleteLayerVersion: string[] = ["lambda:DeleteLayerVersion"];
	/** IAM actions required for the DeleteMicrovmImage API call. */
	static readonly DeleteMicrovmImage: string[] = ["lambda:DeleteMicrovmImage"];
	/** IAM actions required for the DeleteMicrovmImageVersion API call. */
	static readonly DeleteMicrovmImageVersion: string[] = [
		"lambda:DeleteMicrovmImageVersion",
	];
	/** IAM actions required for the DeleteNetworkConnector API call. */
	static readonly DeleteNetworkConnector: string[] = [
		"lambda:DeleteNetworkConnector",
	];
	/** IAM actions required for the DeleteProvisionedConcurrencyConfig API call. */
	static readonly DeleteProvisionedConcurrencyConfig: string[] = [
		"lambda:DeleteProvisionedConcurrencyConfig",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"lambda:DeleteResourcePolicy",
		"lambda:RemovePermission",
	];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly opGetAccountSettings: string[] = [
		"lambda:GetAccountSettings",
	];
	/** IAM actions required for the GetAlias API call. */
	static readonly opGetAlias: string[] = ["lambda:GetAlias"];
	/** IAM actions required for the GetCapacityProvider API call. */
	static readonly opGetCapacityProvider: string[] = [
		"lambda:GetCapacityProvider",
	];
	/** IAM actions required for the GetCodeSigningConfig API call. */
	static readonly opGetCodeSigningConfig: string[] = [
		"lambda:GetCodeSigningConfig",
	];
	/** IAM actions required for the GetDurableExecution API call. */
	static readonly opGetDurableExecution: string[] = [
		"lambda:GetDurableExecution",
	];
	/** IAM actions required for the GetDurableExecutionHistory API call. */
	static readonly opGetDurableExecutionHistory: string[] = [
		"lambda:GetDurableExecutionHistory",
	];
	/** IAM actions required for the GetDurableExecutionState API call. */
	static readonly opGetDurableExecutionState: string[] = [
		"lambda:GetDurableExecutionState",
	];
	/** IAM actions required for the GetEventSource API call. */
	static readonly opGetEventSource: string[] = [];
	/** IAM actions required for the GetEventSourceMapping API call. */
	static readonly opGetEventSourceMapping: string[] = [
		"lambda:GetEventSourceMapping",
	];
	/** IAM actions required for the GetFunction API call. */
	static readonly opGetFunction: string[] = [
		"lambda:GetFunction",
		"lambda:ListTags",
	];
	/** IAM actions required for the GetFunctionCodeSigningConfig API call. */
	static readonly opGetFunctionCodeSigningConfig: string[] = [
		"lambda:GetFunctionCodeSigningConfig",
	];
	/** IAM actions required for the GetFunctionConcurrency API call. */
	static readonly opGetFunctionConcurrency: string[] = [
		"lambda:GetFunctionConcurrency",
	];
	/** IAM actions required for the GetFunctionConfiguration API call. */
	static readonly opGetFunctionConfiguration: string[] = [
		"lambda:GetFunctionConfiguration",
	];
	/** IAM actions required for the GetFunctionEventInvokeConfig API call. */
	static readonly opGetFunctionEventInvokeConfig: string[] = [
		"lambda:GetFunctionEventInvokeConfig",
	];
	/** IAM actions required for the GetFunctionRecursionConfig API call. */
	static readonly opGetFunctionRecursionConfig: string[] = [
		"lambda:GetFunctionRecursionConfig",
	];
	/** IAM actions required for the GetFunctionScalingConfig API call. */
	static readonly opGetFunctionScalingConfig: string[] = [
		"lambda:GetFunctionScalingConfig",
	];
	/** IAM actions required for the GetFunctionUrlConfig API call. */
	static readonly opGetFunctionUrlConfig: string[] = [
		"lambda:GetFunctionUrlConfig",
	];
	/** IAM actions required for the GetLayerVersion API call. */
	static readonly opGetLayerVersion: string[] = ["lambda:GetLayerVersion"];
	/** IAM actions required for the GetLayerVersionByArn API call. */
	static readonly opGetLayerVersionByArn: string[] = ["lambda:GetLayerVersion"];
	/** IAM actions required for the GetLayerVersionPolicy API call. */
	static readonly opGetLayerVersionPolicy: string[] = [
		"lambda:GetLayerVersionPolicy",
	];
	/** IAM actions required for the GetMicrovm API call. */
	static readonly opGetMicrovm: string[] = ["lambda:GetMicrovm"];
	/** IAM actions required for the GetMicrovmImage API call. */
	static readonly opGetMicrovmImage: string[] = ["lambda:GetMicrovmImage"];
	/** IAM actions required for the GetMicrovmImageBuild API call. */
	static readonly opGetMicrovmImageBuild: string[] = [
		"lambda:GetMicrovmImageBuild",
	];
	/** IAM actions required for the GetMicrovmImageVersion API call. */
	static readonly opGetMicrovmImageVersion: string[] = [
		"lambda:GetMicrovmImageVersion",
	];
	/** IAM actions required for the GetNetworkConnector API call. */
	static readonly opGetNetworkConnector: string[] = [
		"lambda:GetNetworkConnector",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly opGetPolicy: string[] = ["lambda:GetPolicy"];
	/** IAM actions required for the GetProvisionedConcurrencyConfig API call. */
	static readonly opGetProvisionedConcurrencyConfig: string[] = [
		"lambda:GetProvisionedConcurrencyConfig",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"lambda:GetPolicy",
		"lambda:GetResourcePolicy",
	];
	/** IAM actions required for the GetRuntimeManagementConfig API call. */
	static readonly opGetRuntimeManagementConfig: string[] = [
		"lambda:GetRuntimeManagementConfig",
	];
	/** IAM actions required for the Invoke API call. */
	static readonly Invoke: string[] = ["lambda:InvokeFunction"];
	/** IAM actions required for the InvokeAsync API call. */
	static readonly InvokeAsync: string[] = ["lambda:InvokeAsync"];
	/** IAM actions required for the InvokeWithResponseStream API call. */
	static readonly InvokeWithResponseStream: string[] = [
		"lambda:InvokeFunction",
	];
	/** IAM actions required for the ListAliases API call. */
	static readonly ListAliases: string[] = ["lambda:ListAliases"];
	/** IAM actions required for the ListCapacityProviders API call. */
	static readonly ListCapacityProviders: string[] = [
		"lambda:ListCapacityProviders",
	];
	/** IAM actions required for the ListCodeSigningConfigs API call. */
	static readonly ListCodeSigningConfigs: string[] = [
		"lambda:ListCodeSigningConfigs",
	];
	/** IAM actions required for the ListDurableExecutionsByFunction API call. */
	static readonly ListDurableExecutionsByFunction: string[] = [
		"lambda:ListDurableExecutionsByFunction",
	];
	/** IAM actions required for the ListEventSourceMappings API call. */
	static readonly ListEventSourceMappings: string[] = [
		"lambda:ListEventSourceMappings",
	];
	/** IAM actions required for the ListEventSources API call. */
	static readonly ListEventSources: string[] = [];
	/** IAM actions required for the ListFunctionEventInvokeConfigs API call. */
	static readonly ListFunctionEventInvokeConfigs: string[] = [
		"lambda:ListFunctionEventInvokeConfigs",
	];
	/** IAM actions required for the ListFunctionUrlConfigs API call. */
	static readonly ListFunctionUrlConfigs: string[] = [
		"lambda:ListFunctionUrlConfigs",
	];
	/** IAM actions required for the ListFunctionVersionsByCapacityProvider API call. */
	static readonly ListFunctionVersionsByCapacityProvider: string[] = [
		"lambda:ListFunctionVersionsByCapacityProvider",
	];
	/** IAM actions required for the ListFunctions API call. */
	static readonly ListFunctions: string[] = ["lambda:ListFunctions"];
	/** IAM actions required for the ListFunctionsByCodeSigningConfig API call. */
	static readonly ListFunctionsByCodeSigningConfig: string[] = [
		"lambda:ListFunctionsByCodeSigningConfig",
	];
	/** IAM actions required for the ListLayerVersions API call. */
	static readonly ListLayerVersions: string[] = ["lambda:ListLayerVersions"];
	/** IAM actions required for the ListLayers API call. */
	static readonly ListLayers: string[] = ["lambda:ListLayers"];
	/** IAM actions required for the ListManagedMicrovmImageVersions API call. */
	static readonly ListManagedMicrovmImageVersions: string[] = [
		"lambda:ListManagedMicrovmImageVersions",
	];
	/** IAM actions required for the ListManagedMicrovmImages API call. */
	static readonly ListManagedMicrovmImages: string[] = [
		"lambda:ListManagedMicrovmImages",
	];
	/** IAM actions required for the ListMicrovmImageBuilds API call. */
	static readonly ListMicrovmImageBuilds: string[] = [
		"lambda:ListMicrovmImageBuilds",
	];
	/** IAM actions required for the ListMicrovmImageVersions API call. */
	static readonly ListMicrovmImageVersions: string[] = [
		"lambda:ListMicrovmImageVersions",
	];
	/** IAM actions required for the ListMicrovmImages API call. */
	static readonly ListMicrovmImages: string[] = ["lambda:ListMicrovmImages"];
	/** IAM actions required for the ListMicrovms API call. */
	static readonly ListMicrovms: string[] = ["lambda:ListMicrovms"];
	/** IAM actions required for the ListNetworkConnectors API call. */
	static readonly ListNetworkConnectors: string[] = [
		"lambda:ListNetworkConnectors",
	];
	/** IAM actions required for the ListProvisionedConcurrencyConfigs API call. */
	static readonly ListProvisionedConcurrencyConfigs: string[] = [
		"lambda:ListProvisionedConcurrencyConfigs",
	];
	/** IAM actions required for the ListTags API call. */
	static readonly ListTags: string[] = ["lambda:ListTags"];
	/** IAM actions required for the ListVersionsByFunction API call. */
	static readonly ListVersionsByFunction: string[] = [
		"lambda:ListVersionsByFunction",
	];
	/** IAM actions required for the PublishLayerVersion API call. */
	static readonly PublishLayerVersion: string[] = [
		"lambda:PublishLayerVersion",
	];
	/** IAM actions required for the PublishVersion API call. */
	static readonly PublishVersion: string[] = ["lambda:PublishVersion"];
	/** IAM actions required for the PutFunctionCodeSigningConfig API call. */
	static readonly PutFunctionCodeSigningConfig: string[] = [
		"lambda:PutFunctionCodeSigningConfig",
	];
	/** IAM actions required for the PutFunctionConcurrency API call. */
	static readonly PutFunctionConcurrency: string[] = [
		"lambda:PutFunctionConcurrency",
	];
	/** IAM actions required for the PutFunctionEventInvokeConfig API call. */
	static readonly PutFunctionEventInvokeConfig: string[] = [
		"lambda:PutFunctionEventInvokeConfig",
	];
	/** IAM actions required for the PutFunctionRecursionConfig API call. */
	static readonly PutFunctionRecursionConfig: string[] = [
		"lambda:PutFunctionRecursionConfig",
	];
	/** IAM actions required for the PutFunctionScalingConfig API call. */
	static readonly PutFunctionScalingConfig: string[] = [
		"lambda:PutFunctionScalingConfig",
	];
	/** IAM actions required for the PutProvisionedConcurrencyConfig API call. */
	static readonly PutProvisionedConcurrencyConfig: string[] = [
		"lambda:PutProvisionedConcurrencyConfig",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"lambda:AddPermission",
		"lambda:PutResourcePolicy",
		"lambda:RemovePermission",
	];
	/** IAM actions required for the PutRuntimeManagementConfig API call. */
	static readonly PutRuntimeManagementConfig: string[] = [
		"lambda:PutRuntimeManagementConfig",
	];
	/** IAM actions required for the RemoveEventSource API call. */
	static readonly RemoveEventSource: string[] = [];
	/** IAM actions required for the RemoveLayerVersionPermission API call. */
	static readonly RemoveLayerVersionPermission: string[] = [
		"lambda:RemoveLayerVersionPermission",
	];
	/** IAM actions required for the RemovePermission API call. */
	static readonly RemovePermission: string[] = ["lambda:RemovePermission"];
	/** IAM actions required for the ResumeMicrovm API call. */
	static readonly ResumeMicrovm: string[] = ["lambda:ResumeMicrovm"];
	/** IAM actions required for the RunMicrovm API call. */
	static readonly RunMicrovm: string[] = [
		"lambda:PassNetworkConnector",
		"iam:PassRole",
		"lambda:RunMicrovm",
	];
	/** IAM actions required for the SendDurableExecutionCallbackFailure API call. */
	static readonly SendDurableExecutionCallbackFailure: string[] = [
		"lambda:SendDurableExecutionCallbackFailure",
	];
	/** IAM actions required for the SendDurableExecutionCallbackHeartbeat API call. */
	static readonly SendDurableExecutionCallbackHeartbeat: string[] = [
		"lambda:SendDurableExecutionCallbackHeartbeat",
	];
	/** IAM actions required for the SendDurableExecutionCallbackSuccess API call. */
	static readonly SendDurableExecutionCallbackSuccess: string[] = [
		"lambda:SendDurableExecutionCallbackSuccess",
	];
	/** IAM actions required for the StopDurableExecution API call. */
	static readonly StopDurableExecution: string[] = [
		"lambda:StopDurableExecution",
	];
	/** IAM actions required for the SuspendMicrovm API call. */
	static readonly SuspendMicrovm: string[] = ["lambda:SuspendMicrovm"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["lambda:TagResource"];
	/** IAM actions required for the TerminateMicrovm API call. */
	static readonly TerminateMicrovm: string[] = ["lambda:TerminateMicrovm"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["lambda:UntagResource"];
	/** IAM actions required for the UpdateAlias API call. */
	static readonly UpdateAlias: string[] = ["lambda:UpdateAlias"];
	/** IAM actions required for the UpdateCapacityProvider API call. */
	static readonly UpdateCapacityProvider: string[] = [
		"lambda:UpdateCapacityProvider",
	];
	/** IAM actions required for the UpdateCodeSigningConfig API call. */
	static readonly UpdateCodeSigningConfig: string[] = [
		"lambda:UpdateCodeSigningConfig",
	];
	/** IAM actions required for the UpdateEventSourceMapping API call. */
	static readonly UpdateEventSourceMapping: string[] = [
		"lambda:UpdateEventSourceMapping",
	];
	/** IAM actions required for the UpdateFunctionCode API call. */
	static readonly UpdateFunctionCode: string[] = ["lambda:UpdateFunctionCode"];
	/** IAM actions required for the UpdateFunctionConfiguration API call. */
	static readonly UpdateFunctionConfiguration: string[] = [
		"lambda:GetLayerVersion",
		"lambda:PassCapacityProvider",
		"iam:PassRole",
		"lambda:UpdateFunctionConfiguration",
	];
	/** IAM actions required for the UpdateFunctionEventInvokeConfig API call. */
	static readonly UpdateFunctionEventInvokeConfig: string[] = [
		"lambda:UpdateFunctionEventInvokeConfig",
	];
	/** IAM actions required for the UpdateFunctionUrlConfig API call. */
	static readonly UpdateFunctionUrlConfig: string[] = [
		"lambda:UpdateFunctionUrlConfig",
	];
	/** IAM actions required for the UpdateMicrovmImage API call. */
	static readonly UpdateMicrovmImage: string[] = [
		"lambda:PassNetworkConnector",
		"iam:PassRole",
		"lambda:UpdateMicrovmImage",
	];
	/** IAM actions required for the UpdateMicrovmImageVersion API call. */
	static readonly UpdateMicrovmImageVersion: string[] = [
		"lambda:UpdateMicrovmImageVersion",
	];
	/** IAM actions required for the UpdateNetworkConnector API call. */
	static readonly UpdateNetworkConnector: string[] = [
		"iam:PassRole",
		"lambda:UpdateNetworkConnector",
	];
	/** IAM actions required for the UploadFunction API call. */
	static readonly UploadFunction: string[] = [];
}

/**
 * Condition key constants and builders for lambda.
 */
export class LambdaConditions {
	/** Condition keys applicable to the AddPermission action. */
	static readonly AddPermissionConditionKeys: string[] = [
		"lambda:FunctionUrlAuthType",
		"lambda:Principal",
	];
	/** Condition keys applicable to the CreateCapacityProvider action. */
	static readonly CreateCapacityProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"lambda:SecurityGroupIds",
		"lambda:SubnetIds",
	];
	/** Condition keys applicable to the CreateCodeSigningConfig action. */
	static readonly CreateCodeSigningConfigConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventSourceMapping action. */
	static readonly CreateEventSourceMappingConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"lambda:FunctionArn",
	];
	/** Condition keys applicable to the CreateFunction action. */
	static readonly CreateFunctionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"lambda:CodeSigningConfigArn",
		"lambda:Layer",
		"lambda:SecurityGroupIds",
		"lambda:SubnetIds",
		"lambda:VpcIds",
	];
	/** Condition keys applicable to the CreateFunctionUrlConfig action. */
	static readonly CreateFunctionUrlConfigConditionKeys: string[] = [
		"lambda:FunctionArn",
		"lambda:FunctionUrlAuthType",
	];
	/** Condition keys applicable to the CreateMicrovmImage action. */
	static readonly CreateMicrovmImageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNetworkConnector action. */
	static readonly CreateNetworkConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"lambda:SecurityGroupIds",
		"lambda:SubnetIds",
	];
	/** Condition keys applicable to the DeleteEventSourceMapping action. */
	static readonly DeleteEventSourceMappingConditionKeys: string[] = [
		"lambda:FunctionArn",
	];
	/** Condition keys applicable to the DeleteFunctionUrlConfig action. */
	static readonly DeleteFunctionUrlConfigConditionKeys: string[] = [
		"lambda:FunctionArn",
		"lambda:FunctionUrlAuthType",
	];
	/** Condition keys applicable to the DeleteResourcePolicy action. */
	static readonly DeleteResourcePolicyConditionKeys: string[] = [
		"lambda:Principal",
	];
	/** Condition keys applicable to the GetEventSourceMapping action. */
	static readonly actionGetEventSourceMappingConditionKeys: string[] = [
		"lambda:FunctionArn",
	];
	/** Condition keys applicable to the GetFunctionUrlConfig action. */
	static readonly actionGetFunctionUrlConfigConditionKeys: string[] = [
		"lambda:FunctionArn",
		"lambda:FunctionUrlAuthType",
	];
	/** Condition keys applicable to the InvokeFunction action. */
	static readonly InvokeFunctionConditionKeys: string[] = [
		"lambda:EventSourceToken",
		"lambda:InvokedViaFunctionUrl",
	];
	/** Condition keys applicable to the InvokeFunctionUrl action. */
	static readonly InvokeFunctionUrlConditionKeys: string[] = [
		"lambda:EventSourceToken",
		"lambda:FunctionArn",
		"lambda:FunctionUrlAuthType",
	];
	/** Condition keys applicable to the ListFunctionUrlConfigs action. */
	static readonly ListFunctionUrlConfigsConditionKeys: string[] = [
		"lambda:FunctionUrlAuthType",
	];
	/** Condition keys applicable to the PutFunctionCodeSigningConfig action. */
	static readonly PutFunctionCodeSigningConfigConditionKeys: string[] = [
		"lambda:CodeSigningConfigArn",
	];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PutResourcePolicyConditionKeys: string[] = [
		"lambda:Principal",
	];
	/** Condition keys applicable to the RemovePermission action. */
	static readonly RemovePermissionConditionKeys: string[] = [
		"lambda:FunctionUrlAuthType",
		"lambda:Principal",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateEventSourceMapping action. */
	static readonly UpdateEventSourceMappingConditionKeys: string[] = [
		"lambda:FunctionArn",
	];
	/** Condition keys applicable to the UpdateFunctionConfiguration action. */
	static readonly UpdateFunctionConfigurationConditionKeys: string[] = [
		"lambda:Layer",
		"lambda:SecurityGroupIds",
		"lambda:SubnetIds",
		"lambda:VpcIds",
	];
	/** Condition keys applicable to the UpdateFunctionUrlConfig action. */
	static readonly UpdateFunctionUrlConfigConditionKeys: string[] = [
		"lambda:FunctionArn",
		"lambda:FunctionUrlAuthType",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: lambda:CodeSigningConfigArn (ARN) */
	static readonly CODE_SIGNING_CONFIG_ARN = "lambda:CodeSigningConfigArn";
	/** Condition key: lambda:EventSourceToken (String) */
	static readonly EVENT_SOURCE_TOKEN = "lambda:EventSourceToken";
	/** Condition key: lambda:FunctionArn (ARN) */
	static readonly FUNCTION_ARN = "lambda:FunctionArn";
	/** Condition key: lambda:FunctionUrlAuthType (String) */
	static readonly FUNCTION_URL_AUTH_TYPE = "lambda:FunctionUrlAuthType";
	/** Condition key: lambda:InvokedViaFunctionUrl (Bool) */
	static readonly INVOKED_VIA_FUNCTION_URL = "lambda:InvokedViaFunctionUrl";
	/** Condition key: lambda:Layer (ArrayOfString) */
	static readonly LAYER = "lambda:Layer";
	/** Condition key: lambda:Principal (String) */
	static readonly PRINCIPAL = "lambda:Principal";
	/** Condition key: lambda:SecurityGroupIds (ArrayOfString) */
	static readonly SECURITY_GROUP_IDS = "lambda:SecurityGroupIds";
	/** Condition key: lambda:SourceFunctionArn (ARN) */
	static readonly SOURCE_FUNCTION_ARN = "lambda:SourceFunctionArn";
	/** Condition key: lambda:SubnetIds (ArrayOfString) */
	static readonly SUBNET_IDS = "lambda:SubnetIds";
	/** Condition key: lambda:VpcIds (String) */
	static readonly VPC_IDS = "lambda:VpcIds";

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
	 * Generates a condition block for `lambda:CodeSigningConfigArn`.
	 */
	static codeSigningConfigARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "lambda:CodeSigningConfigArn": value } };
	}

	/**
	 * Generates a condition block for `lambda:EventSourceToken`.
	 */
	static eventSourceToken(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "lambda:EventSourceToken": value } };
	}

	/**
	 * Generates a condition block for `lambda:FunctionArn`.
	 */
	static functionARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "lambda:FunctionArn": value } };
	}

	/**
	 * Generates a condition block for `lambda:FunctionUrlAuthType`.
	 */
	static functionURLAuthType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "lambda:FunctionUrlAuthType": value } };
	}

	/**
	 * Generates a condition block for `lambda:InvokedViaFunctionUrl`.
	 */
	static invokedViaFunctionURL(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "lambda:InvokedViaFunctionUrl": value } };
	}

	/**
	 * Generates a condition block for `lambda:Layer`.
	 */
	static layer(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "lambda:Layer": values } };
	}

	/**
	 * Generates a condition block for `lambda:Principal`.
	 */
	static principal(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "lambda:Principal": value } };
	}

	/**
	 * Generates a condition block for `lambda:SecurityGroupIds`.
	 */
	static securityGroupIds(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "lambda:SecurityGroupIds": values },
		};
	}

	/**
	 * Generates a condition block for `lambda:SourceFunctionArn`.
	 */
	static sourceFunctionARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "lambda:SourceFunctionArn": value } };
	}

	/**
	 * Generates a condition block for `lambda:SubnetIds`.
	 */
	static subnetIds(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "lambda:SubnetIds": values } };
	}

	/**
	 * Generates a condition block for `lambda:VpcIds`.
	 */
	static vpcIds(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "lambda:VpcIds": value } };
	}
}
