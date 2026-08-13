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
	static readonly ADD_LAYER_VERSION_PERMISSION =
		"lambda:AddLayerVersionPermission";
	/** [PermissionManagement] lambda:AddPermission */
	static readonly ADD_PERMISSION = "lambda:AddPermission";
	/** [Write] lambda:CheckpointDurableExecution */
	static readonly CHECKPOINT_DURABLE_EXECUTION =
		"lambda:CheckpointDurableExecution";
	/** [Write] lambda:ConnectMicrovm */
	static readonly CONNECT_MICROVM = "lambda:ConnectMicrovm";
	/** [Write] lambda:CreateAlias */
	static readonly CREATE_ALIAS = "lambda:CreateAlias";
	/** [Write] lambda:CreateCapacityProvider */
	static readonly CREATE_CAPACITY_PROVIDER = "lambda:CreateCapacityProvider";
	/** [Write] lambda:CreateCodeSigningConfig */
	static readonly CREATE_CODE_SIGNING_CONFIG = "lambda:CreateCodeSigningConfig";
	/** [Write] lambda:CreateEventSourceMapping */
	static readonly CREATE_EVENT_SOURCE_MAPPING =
		"lambda:CreateEventSourceMapping";
	/** [Write] lambda:CreateFunction */
	static readonly CREATE_FUNCTION = "lambda:CreateFunction";
	/** [Write] lambda:CreateFunctionUrlConfig */
	static readonly CREATE_FUNCTION_URL_CONFIG = "lambda:CreateFunctionUrlConfig";
	/** [Write] lambda:CreateMicrovmAuthToken */
	static readonly CREATE_MICROVM_AUTH_TOKEN = "lambda:CreateMicrovmAuthToken";
	/** [Write] lambda:CreateMicrovmImage */
	static readonly CREATE_MICROVM_IMAGE = "lambda:CreateMicrovmImage";
	/** [Write] lambda:CreateMicrovmShellAuthToken */
	static readonly CREATE_MICROVM_SHELL_AUTH_TOKEN =
		"lambda:CreateMicrovmShellAuthToken";
	/** [Write] lambda:CreateNetworkConnector */
	static readonly CREATE_NETWORK_CONNECTOR = "lambda:CreateNetworkConnector";
	/** [Write] lambda:DeleteAlias */
	static readonly DELETE_ALIAS = "lambda:DeleteAlias";
	/** [Write] lambda:DeleteCapacityProvider */
	static readonly DELETE_CAPACITY_PROVIDER = "lambda:DeleteCapacityProvider";
	/** [Write] lambda:DeleteCodeSigningConfig */
	static readonly DELETE_CODE_SIGNING_CONFIG = "lambda:DeleteCodeSigningConfig";
	/** [Write] lambda:DeleteEventSourceMapping */
	static readonly DELETE_EVENT_SOURCE_MAPPING =
		"lambda:DeleteEventSourceMapping";
	/** [Write] lambda:DeleteFunction */
	static readonly DELETE_FUNCTION = "lambda:DeleteFunction";
	/** [Write] lambda:DeleteFunctionCodeSigningConfig */
	static readonly DELETE_FUNCTION_CODE_SIGNING_CONFIG =
		"lambda:DeleteFunctionCodeSigningConfig";
	/** [Write] lambda:DeleteFunctionConcurrency */
	static readonly DELETE_FUNCTION_CONCURRENCY =
		"lambda:DeleteFunctionConcurrency";
	/** [Write] lambda:DeleteFunctionEventInvokeConfig */
	static readonly DELETE_FUNCTION_EVENT_INVOKE_CONFIG =
		"lambda:DeleteFunctionEventInvokeConfig";
	/** [Write] lambda:DeleteFunctionUrlConfig */
	static readonly DELETE_FUNCTION_URL_CONFIG = "lambda:DeleteFunctionUrlConfig";
	/** [Write] lambda:DeleteLayerVersion */
	static readonly DELETE_LAYER_VERSION = "lambda:DeleteLayerVersion";
	/** [Write] lambda:DeleteMicrovmImage */
	static readonly DELETE_MICROVM_IMAGE = "lambda:DeleteMicrovmImage";
	/** [Write] lambda:DeleteMicrovmImageVersion */
	static readonly DELETE_MICROVM_IMAGE_VERSION =
		"lambda:DeleteMicrovmImageVersion";
	/** [Write] lambda:DeleteNetworkConnector */
	static readonly DELETE_NETWORK_CONNECTOR = "lambda:DeleteNetworkConnector";
	/** [Write] lambda:DeleteProvisionedConcurrencyConfig */
	static readonly DELETE_PROVISIONED_CONCURRENCY_CONFIG =
		"lambda:DeleteProvisionedConcurrencyConfig";
	/** [PermissionManagement] lambda:DisableReplication */
	static readonly DISABLE_REPLICATION = "lambda:DisableReplication";
	/** [PermissionManagement] lambda:EnableReplication */
	static readonly ENABLE_REPLICATION = "lambda:EnableReplication";
	/** [Read] lambda:GetAccountSettings */
	static readonly GET_ACCOUNT_SETTINGS = "lambda:GetAccountSettings";
	/** [Read] lambda:GetAlias */
	static readonly GET_ALIAS = "lambda:GetAlias";
	/** [Read] lambda:GetCapacityProvider */
	static readonly GET_CAPACITY_PROVIDER = "lambda:GetCapacityProvider";
	/** [Read] lambda:GetCodeSigningConfig */
	static readonly GET_CODE_SIGNING_CONFIG = "lambda:GetCodeSigningConfig";
	/** [Read] lambda:GetDurableExecution */
	static readonly GET_DURABLE_EXECUTION = "lambda:GetDurableExecution";
	/** [Read] lambda:GetDurableExecutionHistory */
	static readonly GET_DURABLE_EXECUTION_HISTORY =
		"lambda:GetDurableExecutionHistory";
	/** [Read] lambda:GetDurableExecutionState */
	static readonly GET_DURABLE_EXECUTION_STATE =
		"lambda:GetDurableExecutionState";
	/** [Read] lambda:GetEventSourceMapping */
	static readonly GET_EVENT_SOURCE_MAPPING = "lambda:GetEventSourceMapping";
	/** [Read] lambda:GetFunction */
	static readonly GET_FUNCTION = "lambda:GetFunction";
	/** [Read] lambda:GetFunctionCodeSigningConfig */
	static readonly GET_FUNCTION_CODE_SIGNING_CONFIG =
		"lambda:GetFunctionCodeSigningConfig";
	/** [Read] lambda:GetFunctionConcurrency */
	static readonly GET_FUNCTION_CONCURRENCY = "lambda:GetFunctionConcurrency";
	/** [Read] lambda:GetFunctionConfiguration */
	static readonly GET_FUNCTION_CONFIGURATION =
		"lambda:GetFunctionConfiguration";
	/** [Read] lambda:GetFunctionEventInvokeConfig */
	static readonly GET_FUNCTION_EVENT_INVOKE_CONFIG =
		"lambda:GetFunctionEventInvokeConfig";
	/** [Read] lambda:GetFunctionRecursionConfig */
	static readonly GET_FUNCTION_RECURSION_CONFIG =
		"lambda:GetFunctionRecursionConfig";
	/** [Read] lambda:GetFunctionScalingConfig */
	static readonly GET_FUNCTION_SCALING_CONFIG =
		"lambda:GetFunctionScalingConfig";
	/** [Read] lambda:GetFunctionUrlConfig */
	static readonly GET_FUNCTION_URL_CONFIG = "lambda:GetFunctionUrlConfig";
	/** [Read] lambda:GetLayerVersion */
	static readonly GET_LAYER_VERSION = "lambda:GetLayerVersion";
	/** [Read] lambda:GetLayerVersionPolicy */
	static readonly GET_LAYER_VERSION_POLICY = "lambda:GetLayerVersionPolicy";
	/** [Read] lambda:GetMicrovm */
	static readonly GET_MICROVM = "lambda:GetMicrovm";
	/** [Read] lambda:GetMicrovmImage */
	static readonly GET_MICROVM_IMAGE = "lambda:GetMicrovmImage";
	/** [Read] lambda:GetMicrovmImageBuild */
	static readonly GET_MICROVM_IMAGE_BUILD = "lambda:GetMicrovmImageBuild";
	/** [Read] lambda:GetMicrovmImageVersion */
	static readonly GET_MICROVM_IMAGE_VERSION = "lambda:GetMicrovmImageVersion";
	/** [Read] lambda:GetNetworkConnector */
	static readonly GET_NETWORK_CONNECTOR = "lambda:GetNetworkConnector";
	/** [Read] lambda:GetPolicy */
	static readonly GET_POLICY = "lambda:GetPolicy";
	/** [Read] lambda:GetProvisionedConcurrencyConfig */
	static readonly GET_PROVISIONED_CONCURRENCY_CONFIG =
		"lambda:GetProvisionedConcurrencyConfig";
	/** [Read] lambda:GetRuntimeManagementConfig */
	static readonly GET_RUNTIME_MANAGEMENT_CONFIG =
		"lambda:GetRuntimeManagementConfig";
	/** [Write] lambda:InvokeAsync */
	static readonly INVOKE_ASYNC = "lambda:InvokeAsync";
	/** [Write] lambda:InvokeFunction */
	static readonly INVOKE_FUNCTION = "lambda:InvokeFunction";
	/** [Write] lambda:InvokeFunctionUrl */
	static readonly INVOKE_FUNCTION_URL = "lambda:InvokeFunctionUrl";
	/** [List] lambda:ListAliases */
	static readonly LIST_ALIASES = "lambda:ListAliases";
	/** [List] lambda:ListCapacityProviders */
	static readonly LIST_CAPACITY_PROVIDERS = "lambda:ListCapacityProviders";
	/** [List] lambda:ListCodeSigningConfigs */
	static readonly LIST_CODE_SIGNING_CONFIGS = "lambda:ListCodeSigningConfigs";
	/** [List] lambda:ListDurableExecutionsByFunction */
	static readonly LIST_DURABLE_EXECUTIONS_BY_FUNCTION =
		"lambda:ListDurableExecutionsByFunction";
	/** [List] lambda:ListEventSourceMappings */
	static readonly LIST_EVENT_SOURCE_MAPPINGS = "lambda:ListEventSourceMappings";
	/** [List] lambda:ListFunctionEventInvokeConfigs */
	static readonly LIST_FUNCTION_EVENT_INVOKE_CONFIGS =
		"lambda:ListFunctionEventInvokeConfigs";
	/** [List] lambda:ListFunctionUrlConfigs */
	static readonly LIST_FUNCTION_URL_CONFIGS = "lambda:ListFunctionUrlConfigs";
	/** [List] lambda:ListFunctionVersionsByCapacityProvider */
	static readonly LIST_FUNCTION_VERSIONS_BY_CAPACITY_PROVIDER =
		"lambda:ListFunctionVersionsByCapacityProvider";
	/** [List] lambda:ListFunctions */
	static readonly LIST_FUNCTIONS = "lambda:ListFunctions";
	/** [List] lambda:ListFunctionsByCodeSigningConfig */
	static readonly LIST_FUNCTIONS_BY_CODE_SIGNING_CONFIG =
		"lambda:ListFunctionsByCodeSigningConfig";
	/** [List] lambda:ListLayerVersions */
	static readonly LIST_LAYER_VERSIONS = "lambda:ListLayerVersions";
	/** [List] lambda:ListLayers */
	static readonly LIST_LAYERS = "lambda:ListLayers";
	/** [List] lambda:ListManagedMicrovmImageVersions */
	static readonly LIST_MANAGED_MICROVM_IMAGE_VERSIONS =
		"lambda:ListManagedMicrovmImageVersions";
	/** [List] lambda:ListManagedMicrovmImages */
	static readonly LIST_MANAGED_MICROVM_IMAGES =
		"lambda:ListManagedMicrovmImages";
	/** [List] lambda:ListMicrovmImageBuilds */
	static readonly LIST_MICROVM_IMAGE_BUILDS = "lambda:ListMicrovmImageBuilds";
	/** [List] lambda:ListMicrovmImageVersions */
	static readonly LIST_MICROVM_IMAGE_VERSIONS =
		"lambda:ListMicrovmImageVersions";
	/** [List] lambda:ListMicrovmImages */
	static readonly LIST_MICROVM_IMAGES = "lambda:ListMicrovmImages";
	/** [List] lambda:ListMicrovms */
	static readonly LIST_MICROVMS = "lambda:ListMicrovms";
	/** [List] lambda:ListNetworkConnectors */
	static readonly LIST_NETWORK_CONNECTORS = "lambda:ListNetworkConnectors";
	/** [List] lambda:ListProvisionedConcurrencyConfigs */
	static readonly LIST_PROVISIONED_CONCURRENCY_CONFIGS =
		"lambda:ListProvisionedConcurrencyConfigs";
	/** [Read] lambda:ListTags */
	static readonly LIST_TAGS = "lambda:ListTags";
	/** [List] lambda:ListVersionsByFunction */
	static readonly LIST_VERSIONS_BY_FUNCTION = "lambda:ListVersionsByFunction";
	/** [Write] lambda:PassCapacityProvider */
	static readonly PASS_CAPACITY_PROVIDER = "lambda:PassCapacityProvider";
	/** [Write] lambda:PassNetworkConnector */
	static readonly PASS_NETWORK_CONNECTOR = "lambda:PassNetworkConnector";
	/** [Write] lambda:PublishLayerVersion */
	static readonly PUBLISH_LAYER_VERSION = "lambda:PublishLayerVersion";
	/** [Write] lambda:PublishVersion */
	static readonly PUBLISH_VERSION = "lambda:PublishVersion";
	/** [Write] lambda:PutFunctionCodeSigningConfig */
	static readonly PUT_FUNCTION_CODE_SIGNING_CONFIG =
		"lambda:PutFunctionCodeSigningConfig";
	/** [Write] lambda:PutFunctionConcurrency */
	static readonly PUT_FUNCTION_CONCURRENCY = "lambda:PutFunctionConcurrency";
	/** [Write] lambda:PutFunctionEventInvokeConfig */
	static readonly PUT_FUNCTION_EVENT_INVOKE_CONFIG =
		"lambda:PutFunctionEventInvokeConfig";
	/** [Write] lambda:PutFunctionRecursionConfig */
	static readonly PUT_FUNCTION_RECURSION_CONFIG =
		"lambda:PutFunctionRecursionConfig";
	/** [Write] lambda:PutFunctionScalingConfig */
	static readonly PUT_FUNCTION_SCALING_CONFIG =
		"lambda:PutFunctionScalingConfig";
	/** [Write] lambda:PutProvisionedConcurrencyConfig */
	static readonly PUT_PROVISIONED_CONCURRENCY_CONFIG =
		"lambda:PutProvisionedConcurrencyConfig";
	/** [Write] lambda:PutRuntimeManagementConfig */
	static readonly PUT_RUNTIME_MANAGEMENT_CONFIG =
		"lambda:PutRuntimeManagementConfig";
	/** [PermissionManagement] lambda:RemoveLayerVersionPermission */
	static readonly REMOVE_LAYER_VERSION_PERMISSION =
		"lambda:RemoveLayerVersionPermission";
	/** [PermissionManagement] lambda:RemovePermission */
	static readonly REMOVE_PERMISSION = "lambda:RemovePermission";
	/** [Write] lambda:ResumeMicrovm */
	static readonly RESUME_MICROVM = "lambda:ResumeMicrovm";
	/** [Write] lambda:RunMicrovm */
	static readonly RUN_MICROVM = "lambda:RunMicrovm";
	/** [Write] lambda:SendDurableExecutionCallbackFailure */
	static readonly SEND_DURABLE_EXECUTION_CALLBACK_FAILURE =
		"lambda:SendDurableExecutionCallbackFailure";
	/** [Write] lambda:SendDurableExecutionCallbackHeartbeat */
	static readonly SEND_DURABLE_EXECUTION_CALLBACK_HEARTBEAT =
		"lambda:SendDurableExecutionCallbackHeartbeat";
	/** [Write] lambda:SendDurableExecutionCallbackSuccess */
	static readonly SEND_DURABLE_EXECUTION_CALLBACK_SUCCESS =
		"lambda:SendDurableExecutionCallbackSuccess";
	/** [Write] lambda:StopDurableExecution */
	static readonly STOP_DURABLE_EXECUTION = "lambda:StopDurableExecution";
	/** [Write] lambda:SuspendMicrovm */
	static readonly SUSPEND_MICROVM = "lambda:SuspendMicrovm";
	/** [Tagging] lambda:TagResource */
	static readonly TAG_RESOURCE = "lambda:TagResource";
	/** [Write] lambda:TerminateMicrovm */
	static readonly TERMINATE_MICROVM = "lambda:TerminateMicrovm";
	/** [Tagging] lambda:UntagResource */
	static readonly UNTAG_RESOURCE = "lambda:UntagResource";
	/** [Write] lambda:UpdateAlias */
	static readonly UPDATE_ALIAS = "lambda:UpdateAlias";
	/** [Write] lambda:UpdateCapacityProvider */
	static readonly UPDATE_CAPACITY_PROVIDER = "lambda:UpdateCapacityProvider";
	/** [Write] lambda:UpdateCodeSigningConfig */
	static readonly UPDATE_CODE_SIGNING_CONFIG = "lambda:UpdateCodeSigningConfig";
	/** [Write] lambda:UpdateEventSourceMapping */
	static readonly UPDATE_EVENT_SOURCE_MAPPING =
		"lambda:UpdateEventSourceMapping";
	/** [Write] lambda:UpdateFunctionCode */
	static readonly UPDATE_FUNCTION_CODE = "lambda:UpdateFunctionCode";
	/** [Write] lambda:UpdateFunctionCodeSigningConfig */
	static readonly UPDATE_FUNCTION_CODE_SIGNING_CONFIG =
		"lambda:UpdateFunctionCodeSigningConfig";
	/** [Write] lambda:UpdateFunctionConfiguration */
	static readonly UPDATE_FUNCTION_CONFIGURATION =
		"lambda:UpdateFunctionConfiguration";
	/** [Write] lambda:UpdateFunctionEventInvokeConfig */
	static readonly UPDATE_FUNCTION_EVENT_INVOKE_CONFIG =
		"lambda:UpdateFunctionEventInvokeConfig";
	/** [Write] lambda:UpdateFunctionUrlConfig */
	static readonly UPDATE_FUNCTION_URL_CONFIG = "lambda:UpdateFunctionUrlConfig";
	/** [Write] lambda:UpdateMicrovmImage */
	static readonly UPDATE_MICROVM_IMAGE = "lambda:UpdateMicrovmImage";
	/** [Write] lambda:UpdateMicrovmImageVersion */
	static readonly UPDATE_MICROVM_IMAGE_VERSION =
		"lambda:UpdateMicrovmImageVersion";
	/** [Write] lambda:UpdateNetworkConnector */
	static readonly UPDATE_NETWORK_CONNECTOR = "lambda:UpdateNetworkConnector";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		LambdaActions.GET_ACCOUNT_SETTINGS,
		LambdaActions.GET_ALIAS,
		LambdaActions.GET_CAPACITY_PROVIDER,
		LambdaActions.GET_CODE_SIGNING_CONFIG,
		LambdaActions.GET_DURABLE_EXECUTION,
		LambdaActions.GET_DURABLE_EXECUTION_HISTORY,
		LambdaActions.GET_DURABLE_EXECUTION_STATE,
		LambdaActions.GET_EVENT_SOURCE_MAPPING,
		LambdaActions.GET_FUNCTION,
		LambdaActions.GET_FUNCTION_CODE_SIGNING_CONFIG,
		LambdaActions.GET_FUNCTION_CONCURRENCY,
		LambdaActions.GET_FUNCTION_CONFIGURATION,
		LambdaActions.GET_FUNCTION_EVENT_INVOKE_CONFIG,
		LambdaActions.GET_FUNCTION_RECURSION_CONFIG,
		LambdaActions.GET_FUNCTION_SCALING_CONFIG,
		LambdaActions.GET_FUNCTION_URL_CONFIG,
		LambdaActions.GET_LAYER_VERSION,
		LambdaActions.GET_LAYER_VERSION_POLICY,
		LambdaActions.GET_MICROVM,
		LambdaActions.GET_MICROVM_IMAGE,
		LambdaActions.GET_MICROVM_IMAGE_BUILD,
		LambdaActions.GET_MICROVM_IMAGE_VERSION,
		LambdaActions.GET_NETWORK_CONNECTOR,
		LambdaActions.GET_POLICY,
		LambdaActions.GET_PROVISIONED_CONCURRENCY_CONFIG,
		LambdaActions.GET_RUNTIME_MANAGEMENT_CONFIG,
		LambdaActions.LIST_TAGS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		LambdaActions.CHECKPOINT_DURABLE_EXECUTION,
		LambdaActions.CONNECT_MICROVM,
		LambdaActions.CREATE_ALIAS,
		LambdaActions.CREATE_CAPACITY_PROVIDER,
		LambdaActions.CREATE_CODE_SIGNING_CONFIG,
		LambdaActions.CREATE_EVENT_SOURCE_MAPPING,
		LambdaActions.CREATE_FUNCTION,
		LambdaActions.CREATE_FUNCTION_URL_CONFIG,
		LambdaActions.CREATE_MICROVM_AUTH_TOKEN,
		LambdaActions.CREATE_MICROVM_IMAGE,
		LambdaActions.CREATE_MICROVM_SHELL_AUTH_TOKEN,
		LambdaActions.CREATE_NETWORK_CONNECTOR,
		LambdaActions.DELETE_ALIAS,
		LambdaActions.DELETE_CAPACITY_PROVIDER,
		LambdaActions.DELETE_CODE_SIGNING_CONFIG,
		LambdaActions.DELETE_EVENT_SOURCE_MAPPING,
		LambdaActions.DELETE_FUNCTION,
		LambdaActions.DELETE_FUNCTION_CODE_SIGNING_CONFIG,
		LambdaActions.DELETE_FUNCTION_CONCURRENCY,
		LambdaActions.DELETE_FUNCTION_EVENT_INVOKE_CONFIG,
		LambdaActions.DELETE_FUNCTION_URL_CONFIG,
		LambdaActions.DELETE_LAYER_VERSION,
		LambdaActions.DELETE_MICROVM_IMAGE,
		LambdaActions.DELETE_MICROVM_IMAGE_VERSION,
		LambdaActions.DELETE_NETWORK_CONNECTOR,
		LambdaActions.DELETE_PROVISIONED_CONCURRENCY_CONFIG,
		LambdaActions.INVOKE_ASYNC,
		LambdaActions.INVOKE_FUNCTION,
		LambdaActions.INVOKE_FUNCTION_URL,
		LambdaActions.PASS_CAPACITY_PROVIDER,
		LambdaActions.PASS_NETWORK_CONNECTOR,
		LambdaActions.PUBLISH_LAYER_VERSION,
		LambdaActions.PUBLISH_VERSION,
		LambdaActions.PUT_FUNCTION_CODE_SIGNING_CONFIG,
		LambdaActions.PUT_FUNCTION_CONCURRENCY,
		LambdaActions.PUT_FUNCTION_EVENT_INVOKE_CONFIG,
		LambdaActions.PUT_FUNCTION_RECURSION_CONFIG,
		LambdaActions.PUT_FUNCTION_SCALING_CONFIG,
		LambdaActions.PUT_PROVISIONED_CONCURRENCY_CONFIG,
		LambdaActions.PUT_RUNTIME_MANAGEMENT_CONFIG,
		LambdaActions.RESUME_MICROVM,
		LambdaActions.RUN_MICROVM,
		LambdaActions.SEND_DURABLE_EXECUTION_CALLBACK_FAILURE,
		LambdaActions.SEND_DURABLE_EXECUTION_CALLBACK_HEARTBEAT,
		LambdaActions.SEND_DURABLE_EXECUTION_CALLBACK_SUCCESS,
		LambdaActions.STOP_DURABLE_EXECUTION,
		LambdaActions.SUSPEND_MICROVM,
		LambdaActions.TERMINATE_MICROVM,
		LambdaActions.UPDATE_ALIAS,
		LambdaActions.UPDATE_CAPACITY_PROVIDER,
		LambdaActions.UPDATE_CODE_SIGNING_CONFIG,
		LambdaActions.UPDATE_EVENT_SOURCE_MAPPING,
		LambdaActions.UPDATE_FUNCTION_CODE,
		LambdaActions.UPDATE_FUNCTION_CODE_SIGNING_CONFIG,
		LambdaActions.UPDATE_FUNCTION_CONFIGURATION,
		LambdaActions.UPDATE_FUNCTION_EVENT_INVOKE_CONFIG,
		LambdaActions.UPDATE_FUNCTION_URL_CONFIG,
		LambdaActions.UPDATE_MICROVM_IMAGE,
		LambdaActions.UPDATE_MICROVM_IMAGE_VERSION,
		LambdaActions.UPDATE_NETWORK_CONNECTOR,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		LambdaActions.LIST_ALIASES,
		LambdaActions.LIST_CAPACITY_PROVIDERS,
		LambdaActions.LIST_CODE_SIGNING_CONFIGS,
		LambdaActions.LIST_DURABLE_EXECUTIONS_BY_FUNCTION,
		LambdaActions.LIST_EVENT_SOURCE_MAPPINGS,
		LambdaActions.LIST_FUNCTION_EVENT_INVOKE_CONFIGS,
		LambdaActions.LIST_FUNCTION_URL_CONFIGS,
		LambdaActions.LIST_FUNCTION_VERSIONS_BY_CAPACITY_PROVIDER,
		LambdaActions.LIST_FUNCTIONS,
		LambdaActions.LIST_FUNCTIONS_BY_CODE_SIGNING_CONFIG,
		LambdaActions.LIST_LAYER_VERSIONS,
		LambdaActions.LIST_LAYERS,
		LambdaActions.LIST_MANAGED_MICROVM_IMAGE_VERSIONS,
		LambdaActions.LIST_MANAGED_MICROVM_IMAGES,
		LambdaActions.LIST_MICROVM_IMAGE_BUILDS,
		LambdaActions.LIST_MICROVM_IMAGE_VERSIONS,
		LambdaActions.LIST_MICROVM_IMAGES,
		LambdaActions.LIST_MICROVMS,
		LambdaActions.LIST_NETWORK_CONNECTORS,
		LambdaActions.LIST_PROVISIONED_CONCURRENCY_CONFIGS,
		LambdaActions.LIST_VERSIONS_BY_FUNCTION,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		LambdaActions.ADD_LAYER_VERSION_PERMISSION,
		LambdaActions.ADD_PERMISSION,
		LambdaActions.DISABLE_REPLICATION,
		LambdaActions.ENABLE_REPLICATION,
		LambdaActions.REMOVE_LAYER_VERSION_PERMISSION,
		LambdaActions.REMOVE_PERMISSION,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		LambdaActions.TAG_RESOURCE,
		LambdaActions.UNTAG_RESOURCE,
	];
}

const CapacityProviderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):capacity-provider:(?<capacityProviderName>[^:/?]+)$",
);
const CodeSigningConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):code-signing-config:(?<codeSigningConfigId>[^:/?]+)$",
);
const DurableExecutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):function:(?<functionName>[^:/?]+):(?<version>[^:/?]+)/durable-execution/(?<executionName>[^:/?]+)/(?<executionId>[^:/?]+)$",
);
const EventSourceMappingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):event-source-mapping:(?<uuid>[^:/?]+)$",
);
const FunctionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):function:(?<functionName>[^:/?]+)$",
);
const FunctionAliasArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):function:(?<functionName>[^:/?]+):(?<alias>[^:/?]+)$",
);
const FunctionVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):function:(?<functionName>[^:/?]+):(?<version>[^:/?]+)$",
);
const LayerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):layer:(?<layerName>[^:/?]+)$",
);
const LayerVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):layer:(?<layerName>[^:/?]+):(?<layerVersion>[^:/?]+)$",
);
const MicrovmImageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):microvm-image:(?<microvmImageName>[^:/?]+)$",
);
const NetworkConnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lambda:(?<region>[^:]*):(?<account>[^:]*):network-connector:(?<networkConnectorId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for lambda resources.
 */
export class LambdaResources {
	/**
	 * Builds an ARN for the capacityProvider resource.
	 */
	static capacityProvider(props: {
		/** The CapacityProviderName component of the ARN. */
		readonly capacityProviderName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCapacityProviderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		capacityProviderName: string;
	} {
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
	static codeSigningConfig(props: {
		/** The CodeSigningConfigId component of the ARN. */
		readonly codeSigningConfigId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCodeSigningConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		codeSigningConfigId: string;
	} {
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
	static durableExecution(props: {
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
	}): string {
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
	static parseDurableExecutionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		functionName: string;
		version: string;
		executionName: string;
		executionId: string;
	} {
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
	static eventSourceMapping(props: {
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEventSourceMappingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		uuid: string;
	} {
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
	static function(props: {
		/** The FunctionName component of the ARN. */
		readonly functionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFunctionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		functionName: string;
	} {
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
	static functionAlias(props: {
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
	}): string {
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
	static parseFunctionAliasArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		functionName: string;
		alias: string;
	} {
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
	static functionVersion(props: {
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
	}): string {
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
	static parseFunctionVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		functionName: string;
		version: string;
	} {
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
	static layer(props: {
		/** The LayerName component of the ARN. */
		readonly layerName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseLayerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		layerName: string;
	} {
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
	static layerVersion(props: {
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
	}): string {
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
	static parseLayerVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		layerName: string;
		layerVersion: string;
	} {
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
	static microvmImage(props: {
		/** The MicrovmImageName component of the ARN. */
		readonly microvmImageName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseMicrovmImageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		microvmImageName: string;
	} {
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
	static networkConnector(props: {
		/** The NetworkConnectorId component of the ARN. */
		readonly networkConnectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseNetworkConnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkConnectorId: string;
	} {
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
	static readonly ADD_EVENT_SOURCE: string[] = ["iam:PassRole"];
	/** IAM actions required for the AddLayerVersionPermission API call. */
	static readonly ADD_LAYER_VERSION_PERMISSION: string[] = [
		"lambda:AddLayerVersionPermission",
	];
	/** IAM actions required for the AddPermission API call. */
	static readonly ADD_PERMISSION: string[] = ["lambda:AddPermission"];
	/** IAM actions required for the CheckpointDurableExecution API call. */
	static readonly CHECKPOINT_DURABLE_EXECUTION: string[] = [
		"lambda:CheckpointDurableExecution",
	];
	/** IAM actions required for the CreateAlias API call. */
	static readonly CREATE_ALIAS: string[] = ["lambda:CreateAlias"];
	/** IAM actions required for the CreateCapacityProvider API call. */
	static readonly CREATE_CAPACITY_PROVIDER: string[] = [
		"lambda:CreateCapacityProvider",
		"iam:PassRole",
		"lambda:TagResource",
	];
	/** IAM actions required for the CreateCodeSigningConfig API call. */
	static readonly CREATE_CODE_SIGNING_CONFIG: string[] = [
		"lambda:CreateCodeSigningConfig",
		"lambda:TagResource",
	];
	/** IAM actions required for the CreateEventSourceMapping API call. */
	static readonly CREATE_EVENT_SOURCE_MAPPING: string[] = [
		"lambda:CreateEventSourceMapping",
		"lambda:TagResource",
	];
	/** IAM actions required for the CreateFunction API call. */
	static readonly CREATE_FUNCTION: string[] = [
		"lambda:CreateFunction",
		"lambda:GetLayerVersion",
		"lambda:PassCapacityProvider",
		"iam:PassRole",
		"lambda:TagResource",
	];
	/** IAM actions required for the CreateFunctionUrlConfig API call. */
	static readonly CREATE_FUNCTION_URL_CONFIG: string[] = [
		"lambda:CreateFunctionUrlConfig",
	];
	/** IAM actions required for the CreateMicrovmAuthToken API call. */
	static readonly CREATE_MICROVM_AUTH_TOKEN: string[] = [
		"lambda:CreateMicrovmAuthToken",
	];
	/** IAM actions required for the CreateMicrovmImage API call. */
	static readonly CREATE_MICROVM_IMAGE: string[] = [
		"lambda:CreateMicrovmImage",
		"lambda:PassNetworkConnector",
		"iam:PassRole",
		"lambda:TagResource",
	];
	/** IAM actions required for the CreateMicrovmShellAuthToken API call. */
	static readonly CREATE_MICROVM_SHELL_AUTH_TOKEN: string[] = [
		"lambda:CreateMicrovmShellAuthToken",
	];
	/** IAM actions required for the CreateNetworkConnector API call. */
	static readonly CREATE_NETWORK_CONNECTOR: string[] = [
		"lambda:CreateNetworkConnector",
		"iam:PassRole",
		"lambda:TagResource",
	];
	/** IAM actions required for the DeleteAlias API call. */
	static readonly DELETE_ALIAS: string[] = ["lambda:DeleteAlias"];
	/** IAM actions required for the DeleteCapacityProvider API call. */
	static readonly DELETE_CAPACITY_PROVIDER: string[] = [
		"lambda:DeleteCapacityProvider",
	];
	/** IAM actions required for the DeleteCodeSigningConfig API call. */
	static readonly DELETE_CODE_SIGNING_CONFIG: string[] = [
		"lambda:DeleteCodeSigningConfig",
	];
	/** IAM actions required for the DeleteEventSourceMapping API call. */
	static readonly DELETE_EVENT_SOURCE_MAPPING: string[] = [
		"lambda:DeleteEventSourceMapping",
	];
	/** IAM actions required for the DeleteFunction API call. */
	static readonly DELETE_FUNCTION: string[] = ["lambda:DeleteFunction"];
	/** IAM actions required for the DeleteFunctionCodeSigningConfig API call. */
	static readonly DELETE_FUNCTION_CODE_SIGNING_CONFIG: string[] = [
		"lambda:DeleteFunctionCodeSigningConfig",
	];
	/** IAM actions required for the DeleteFunctionConcurrency API call. */
	static readonly DELETE_FUNCTION_CONCURRENCY: string[] = [
		"lambda:DeleteFunctionConcurrency",
	];
	/** IAM actions required for the DeleteFunctionEventInvokeConfig API call. */
	static readonly DELETE_FUNCTION_EVENT_INVOKE_CONFIG: string[] = [
		"lambda:DeleteFunctionEventInvokeConfig",
	];
	/** IAM actions required for the DeleteFunctionUrlConfig API call. */
	static readonly DELETE_FUNCTION_URL_CONFIG: string[] = [
		"lambda:DeleteFunctionUrlConfig",
	];
	/** IAM actions required for the DeleteLayerVersion API call. */
	static readonly DELETE_LAYER_VERSION: string[] = [
		"lambda:DeleteLayerVersion",
	];
	/** IAM actions required for the DeleteMicrovmImage API call. */
	static readonly DELETE_MICROVM_IMAGE: string[] = [
		"lambda:DeleteMicrovmImage",
	];
	/** IAM actions required for the DeleteMicrovmImageVersion API call. */
	static readonly DELETE_MICROVM_IMAGE_VERSION: string[] = [
		"lambda:DeleteMicrovmImageVersion",
	];
	/** IAM actions required for the DeleteNetworkConnector API call. */
	static readonly DELETE_NETWORK_CONNECTOR: string[] = [
		"lambda:DeleteNetworkConnector",
	];
	/** IAM actions required for the DeleteProvisionedConcurrencyConfig API call. */
	static readonly DELETE_PROVISIONED_CONCURRENCY_CONFIG: string[] = [
		"lambda:DeleteProvisionedConcurrencyConfig",
	];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly GET_ACCOUNT_SETTINGS: string[] = [
		"lambda:GetAccountSettings",
	];
	/** IAM actions required for the GetAlias API call. */
	static readonly GET_ALIAS: string[] = ["lambda:GetAlias"];
	/** IAM actions required for the GetCapacityProvider API call. */
	static readonly GET_CAPACITY_PROVIDER: string[] = [
		"lambda:GetCapacityProvider",
	];
	/** IAM actions required for the GetCodeSigningConfig API call. */
	static readonly GET_CODE_SIGNING_CONFIG: string[] = [
		"lambda:GetCodeSigningConfig",
	];
	/** IAM actions required for the GetDurableExecution API call. */
	static readonly GET_DURABLE_EXECUTION: string[] = [
		"lambda:GetDurableExecution",
	];
	/** IAM actions required for the GetDurableExecutionHistory API call. */
	static readonly GET_DURABLE_EXECUTION_HISTORY: string[] = [
		"lambda:GetDurableExecutionHistory",
	];
	/** IAM actions required for the GetDurableExecutionState API call. */
	static readonly GET_DURABLE_EXECUTION_STATE: string[] = [
		"lambda:GetDurableExecutionState",
	];
	/** IAM actions required for the GetEventSource API call. */
	static readonly GET_EVENT_SOURCE: string[] = [];
	/** IAM actions required for the GetEventSourceMapping API call. */
	static readonly GET_EVENT_SOURCE_MAPPING: string[] = [
		"lambda:GetEventSourceMapping",
	];
	/** IAM actions required for the GetFunction API call. */
	static readonly GET_FUNCTION: string[] = [
		"lambda:GetFunction",
		"lambda:ListTags",
	];
	/** IAM actions required for the GetFunctionCodeSigningConfig API call. */
	static readonly GET_FUNCTION_CODE_SIGNING_CONFIG: string[] = [
		"lambda:GetFunctionCodeSigningConfig",
	];
	/** IAM actions required for the GetFunctionConcurrency API call. */
	static readonly GET_FUNCTION_CONCURRENCY: string[] = [
		"lambda:GetFunctionConcurrency",
	];
	/** IAM actions required for the GetFunctionConfiguration API call. */
	static readonly GET_FUNCTION_CONFIGURATION: string[] = [
		"lambda:GetFunctionConfiguration",
	];
	/** IAM actions required for the GetFunctionEventInvokeConfig API call. */
	static readonly GET_FUNCTION_EVENT_INVOKE_CONFIG: string[] = [
		"lambda:GetFunctionEventInvokeConfig",
	];
	/** IAM actions required for the GetFunctionRecursionConfig API call. */
	static readonly GET_FUNCTION_RECURSION_CONFIG: string[] = [
		"lambda:GetFunctionRecursionConfig",
	];
	/** IAM actions required for the GetFunctionScalingConfig API call. */
	static readonly GET_FUNCTION_SCALING_CONFIG: string[] = [
		"lambda:GetFunctionScalingConfig",
	];
	/** IAM actions required for the GetFunctionUrlConfig API call. */
	static readonly GET_FUNCTION_URL_CONFIG: string[] = [
		"lambda:GetFunctionUrlConfig",
	];
	/** IAM actions required for the GetLayerVersion API call. */
	static readonly GET_LAYER_VERSION: string[] = ["lambda:GetLayerVersion"];
	/** IAM actions required for the GetLayerVersionByArn API call. */
	static readonly GET_LAYER_VERSION_BY_ARN: string[] = [
		"lambda:GetLayerVersion",
	];
	/** IAM actions required for the GetLayerVersionPolicy API call. */
	static readonly GET_LAYER_VERSION_POLICY: string[] = [
		"lambda:GetLayerVersionPolicy",
	];
	/** IAM actions required for the GetMicrovm API call. */
	static readonly GET_MICROVM: string[] = ["lambda:GetMicrovm"];
	/** IAM actions required for the GetMicrovmImage API call. */
	static readonly GET_MICROVM_IMAGE: string[] = ["lambda:GetMicrovmImage"];
	/** IAM actions required for the GetMicrovmImageBuild API call. */
	static readonly GET_MICROVM_IMAGE_BUILD: string[] = [
		"lambda:GetMicrovmImageBuild",
	];
	/** IAM actions required for the GetMicrovmImageVersion API call. */
	static readonly GET_MICROVM_IMAGE_VERSION: string[] = [
		"lambda:GetMicrovmImageVersion",
	];
	/** IAM actions required for the GetNetworkConnector API call. */
	static readonly GET_NETWORK_CONNECTOR: string[] = [
		"lambda:GetNetworkConnector",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly GET_POLICY: string[] = ["lambda:GetPolicy"];
	/** IAM actions required for the GetProvisionedConcurrencyConfig API call. */
	static readonly GET_PROVISIONED_CONCURRENCY_CONFIG: string[] = [
		"lambda:GetProvisionedConcurrencyConfig",
	];
	/** IAM actions required for the GetRuntimeManagementConfig API call. */
	static readonly GET_RUNTIME_MANAGEMENT_CONFIG: string[] = [
		"lambda:GetRuntimeManagementConfig",
	];
	/** IAM actions required for the Invoke API call. */
	static readonly INVOKE: string[] = ["lambda:InvokeFunction"];
	/** IAM actions required for the InvokeAsync API call. */
	static readonly INVOKE_ASYNC: string[] = ["lambda:InvokeAsync"];
	/** IAM actions required for the InvokeWithResponseStream API call. */
	static readonly INVOKE_WITH_RESPONSE_STREAM: string[] = [
		"lambda:InvokeFunction",
	];
	/** IAM actions required for the ListAliases API call. */
	static readonly LIST_ALIASES: string[] = ["lambda:ListAliases"];
	/** IAM actions required for the ListCapacityProviders API call. */
	static readonly LIST_CAPACITY_PROVIDERS: string[] = [
		"lambda:ListCapacityProviders",
	];
	/** IAM actions required for the ListCodeSigningConfigs API call. */
	static readonly LIST_CODE_SIGNING_CONFIGS: string[] = [
		"lambda:ListCodeSigningConfigs",
	];
	/** IAM actions required for the ListDurableExecutionsByFunction API call. */
	static readonly LIST_DURABLE_EXECUTIONS_BY_FUNCTION: string[] = [
		"lambda:ListDurableExecutionsByFunction",
	];
	/** IAM actions required for the ListEventSourceMappings API call. */
	static readonly LIST_EVENT_SOURCE_MAPPINGS: string[] = [
		"lambda:ListEventSourceMappings",
	];
	/** IAM actions required for the ListEventSources API call. */
	static readonly LIST_EVENT_SOURCES: string[] = [];
	/** IAM actions required for the ListFunctionEventInvokeConfigs API call. */
	static readonly LIST_FUNCTION_EVENT_INVOKE_CONFIGS: string[] = [
		"lambda:ListFunctionEventInvokeConfigs",
	];
	/** IAM actions required for the ListFunctionUrlConfigs API call. */
	static readonly LIST_FUNCTION_URL_CONFIGS: string[] = [
		"lambda:ListFunctionUrlConfigs",
	];
	/** IAM actions required for the ListFunctionVersionsByCapacityProvider API call. */
	static readonly LIST_FUNCTION_VERSIONS_BY_CAPACITY_PROVIDER: string[] = [
		"lambda:ListFunctionVersionsByCapacityProvider",
	];
	/** IAM actions required for the ListFunctions API call. */
	static readonly LIST_FUNCTIONS: string[] = ["lambda:ListFunctions"];
	/** IAM actions required for the ListFunctionsByCodeSigningConfig API call. */
	static readonly LIST_FUNCTIONS_BY_CODE_SIGNING_CONFIG: string[] = [
		"lambda:ListFunctionsByCodeSigningConfig",
	];
	/** IAM actions required for the ListLayerVersions API call. */
	static readonly LIST_LAYER_VERSIONS: string[] = ["lambda:ListLayerVersions"];
	/** IAM actions required for the ListLayers API call. */
	static readonly LIST_LAYERS: string[] = ["lambda:ListLayers"];
	/** IAM actions required for the ListManagedMicrovmImageVersions API call. */
	static readonly LIST_MANAGED_MICROVM_IMAGE_VERSIONS: string[] = [
		"lambda:ListManagedMicrovmImageVersions",
	];
	/** IAM actions required for the ListManagedMicrovmImages API call. */
	static readonly LIST_MANAGED_MICROVM_IMAGES: string[] = [
		"lambda:ListManagedMicrovmImages",
	];
	/** IAM actions required for the ListMicrovmImageBuilds API call. */
	static readonly LIST_MICROVM_IMAGE_BUILDS: string[] = [
		"lambda:ListMicrovmImageBuilds",
	];
	/** IAM actions required for the ListMicrovmImageVersions API call. */
	static readonly LIST_MICROVM_IMAGE_VERSIONS: string[] = [
		"lambda:ListMicrovmImageVersions",
	];
	/** IAM actions required for the ListMicrovmImages API call. */
	static readonly LIST_MICROVM_IMAGES: string[] = ["lambda:ListMicrovmImages"];
	/** IAM actions required for the ListMicrovms API call. */
	static readonly LIST_MICROVMS: string[] = ["lambda:ListMicrovms"];
	/** IAM actions required for the ListNetworkConnectors API call. */
	static readonly LIST_NETWORK_CONNECTORS: string[] = [
		"lambda:ListNetworkConnectors",
	];
	/** IAM actions required for the ListProvisionedConcurrencyConfigs API call. */
	static readonly LIST_PROVISIONED_CONCURRENCY_CONFIGS: string[] = [
		"lambda:ListProvisionedConcurrencyConfigs",
	];
	/** IAM actions required for the ListTags API call. */
	static readonly LIST_TAGS: string[] = ["lambda:ListTags"];
	/** IAM actions required for the ListVersionsByFunction API call. */
	static readonly LIST_VERSIONS_BY_FUNCTION: string[] = [
		"lambda:ListVersionsByFunction",
	];
	/** IAM actions required for the PublishLayerVersion API call. */
	static readonly PUBLISH_LAYER_VERSION: string[] = [
		"lambda:PublishLayerVersion",
	];
	/** IAM actions required for the PublishVersion API call. */
	static readonly PUBLISH_VERSION: string[] = ["lambda:PublishVersion"];
	/** IAM actions required for the PutFunctionCodeSigningConfig API call. */
	static readonly PUT_FUNCTION_CODE_SIGNING_CONFIG: string[] = [
		"lambda:PutFunctionCodeSigningConfig",
	];
	/** IAM actions required for the PutFunctionConcurrency API call. */
	static readonly PUT_FUNCTION_CONCURRENCY: string[] = [
		"lambda:PutFunctionConcurrency",
	];
	/** IAM actions required for the PutFunctionEventInvokeConfig API call. */
	static readonly PUT_FUNCTION_EVENT_INVOKE_CONFIG: string[] = [
		"lambda:PutFunctionEventInvokeConfig",
	];
	/** IAM actions required for the PutFunctionRecursionConfig API call. */
	static readonly PUT_FUNCTION_RECURSION_CONFIG: string[] = [
		"lambda:PutFunctionRecursionConfig",
	];
	/** IAM actions required for the PutFunctionScalingConfig API call. */
	static readonly PUT_FUNCTION_SCALING_CONFIG: string[] = [
		"lambda:PutFunctionScalingConfig",
	];
	/** IAM actions required for the PutProvisionedConcurrencyConfig API call. */
	static readonly PUT_PROVISIONED_CONCURRENCY_CONFIG: string[] = [
		"lambda:PutProvisionedConcurrencyConfig",
	];
	/** IAM actions required for the PutRuntimeManagementConfig API call. */
	static readonly PUT_RUNTIME_MANAGEMENT_CONFIG: string[] = [
		"lambda:PutRuntimeManagementConfig",
	];
	/** IAM actions required for the RemoveEventSource API call. */
	static readonly REMOVE_EVENT_SOURCE: string[] = [];
	/** IAM actions required for the RemoveLayerVersionPermission API call. */
	static readonly REMOVE_LAYER_VERSION_PERMISSION: string[] = [
		"lambda:RemoveLayerVersionPermission",
	];
	/** IAM actions required for the RemovePermission API call. */
	static readonly REMOVE_PERMISSION: string[] = ["lambda:RemovePermission"];
	/** IAM actions required for the ResumeMicrovm API call. */
	static readonly RESUME_MICROVM: string[] = ["lambda:ResumeMicrovm"];
	/** IAM actions required for the RunMicrovm API call. */
	static readonly RUN_MICROVM: string[] = [
		"lambda:PassNetworkConnector",
		"iam:PassRole",
		"lambda:RunMicrovm",
	];
	/** IAM actions required for the SendDurableExecutionCallbackFailure API call. */
	static readonly SEND_DURABLE_EXECUTION_CALLBACK_FAILURE: string[] = [
		"lambda:SendDurableExecutionCallbackFailure",
	];
	/** IAM actions required for the SendDurableExecutionCallbackHeartbeat API call. */
	static readonly SEND_DURABLE_EXECUTION_CALLBACK_HEARTBEAT: string[] = [
		"lambda:SendDurableExecutionCallbackHeartbeat",
	];
	/** IAM actions required for the SendDurableExecutionCallbackSuccess API call. */
	static readonly SEND_DURABLE_EXECUTION_CALLBACK_SUCCESS: string[] = [
		"lambda:SendDurableExecutionCallbackSuccess",
	];
	/** IAM actions required for the StopDurableExecution API call. */
	static readonly STOP_DURABLE_EXECUTION: string[] = [
		"lambda:StopDurableExecution",
	];
	/** IAM actions required for the SuspendMicrovm API call. */
	static readonly SUSPEND_MICROVM: string[] = ["lambda:SuspendMicrovm"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["lambda:TagResource"];
	/** IAM actions required for the TerminateMicrovm API call. */
	static readonly TERMINATE_MICROVM: string[] = ["lambda:TerminateMicrovm"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["lambda:UntagResource"];
	/** IAM actions required for the UpdateAlias API call. */
	static readonly UPDATE_ALIAS: string[] = ["lambda:UpdateAlias"];
	/** IAM actions required for the UpdateCapacityProvider API call. */
	static readonly UPDATE_CAPACITY_PROVIDER: string[] = [
		"lambda:UpdateCapacityProvider",
	];
	/** IAM actions required for the UpdateCodeSigningConfig API call. */
	static readonly UPDATE_CODE_SIGNING_CONFIG: string[] = [
		"lambda:UpdateCodeSigningConfig",
	];
	/** IAM actions required for the UpdateEventSourceMapping API call. */
	static readonly UPDATE_EVENT_SOURCE_MAPPING: string[] = [
		"lambda:UpdateEventSourceMapping",
	];
	/** IAM actions required for the UpdateFunctionCode API call. */
	static readonly UPDATE_FUNCTION_CODE: string[] = [
		"lambda:UpdateFunctionCode",
	];
	/** IAM actions required for the UpdateFunctionConfiguration API call. */
	static readonly UPDATE_FUNCTION_CONFIGURATION: string[] = [
		"lambda:GetLayerVersion",
		"lambda:PassCapacityProvider",
		"iam:PassRole",
		"lambda:UpdateFunctionConfiguration",
	];
	/** IAM actions required for the UpdateFunctionEventInvokeConfig API call. */
	static readonly UPDATE_FUNCTION_EVENT_INVOKE_CONFIG: string[] = [
		"lambda:UpdateFunctionEventInvokeConfig",
	];
	/** IAM actions required for the UpdateFunctionUrlConfig API call. */
	static readonly UPDATE_FUNCTION_URL_CONFIG: string[] = [
		"lambda:UpdateFunctionUrlConfig",
	];
	/** IAM actions required for the UpdateMicrovmImage API call. */
	static readonly UPDATE_MICROVM_IMAGE: string[] = [
		"lambda:PassNetworkConnector",
		"iam:PassRole",
		"lambda:UpdateMicrovmImage",
	];
	/** IAM actions required for the UpdateMicrovmImageVersion API call. */
	static readonly UPDATE_MICROVM_IMAGE_VERSION: string[] = [
		"lambda:UpdateMicrovmImageVersion",
	];
	/** IAM actions required for the UpdateNetworkConnector API call. */
	static readonly UPDATE_NETWORK_CONNECTOR: string[] = [
		"iam:PassRole",
		"lambda:UpdateNetworkConnector",
	];
	/** IAM actions required for the UploadFunction API call. */
	static readonly UPLOAD_FUNCTION: string[] = [];
}

/**
 * Condition key constants and builders for lambda.
 */
export class LambdaConditions {
	/** Condition keys applicable to the AddPermission action. */
	static readonly ADD_PERMISSION_CONDITION_KEYS: string[] = [
		"lambda:FunctionUrlAuthType",
		"lambda:Principal",
	];
	/** Condition keys applicable to the CreateCapacityProvider action. */
	static readonly CREATE_CAPACITY_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"lambda:SecurityGroupIds",
		"lambda:SubnetIds",
	];
	/** Condition keys applicable to the CreateCodeSigningConfig action. */
	static readonly CREATE_CODE_SIGNING_CONFIG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventSourceMapping action. */
	static readonly CREATE_EVENT_SOURCE_MAPPING_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"lambda:FunctionArn",
	];
	/** Condition keys applicable to the CreateFunction action. */
	static readonly CREATE_FUNCTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"lambda:CodeSigningConfigArn",
		"lambda:Layer",
		"lambda:SecurityGroupIds",
		"lambda:SubnetIds",
		"lambda:VpcIds",
	];
	/** Condition keys applicable to the CreateFunctionUrlConfig action. */
	static readonly CREATE_FUNCTION_URL_CONFIG_CONDITION_KEYS: string[] = [
		"lambda:FunctionArn",
		"lambda:FunctionUrlAuthType",
	];
	/** Condition keys applicable to the CreateMicrovmImage action. */
	static readonly CREATE_MICROVM_IMAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNetworkConnector action. */
	static readonly CREATE_NETWORK_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"lambda:SecurityGroupIds",
		"lambda:SubnetIds",
	];
	/** Condition keys applicable to the DeleteEventSourceMapping action. */
	static readonly DELETE_EVENT_SOURCE_MAPPING_CONDITION_KEYS: string[] = [
		"lambda:FunctionArn",
	];
	/** Condition keys applicable to the DeleteFunctionUrlConfig action. */
	static readonly DELETE_FUNCTION_URL_CONFIG_CONDITION_KEYS: string[] = [
		"lambda:FunctionArn",
		"lambda:FunctionUrlAuthType",
	];
	/** Condition keys applicable to the GetEventSourceMapping action. */
	static readonly GET_EVENT_SOURCE_MAPPING_CONDITION_KEYS: string[] = [
		"lambda:FunctionArn",
	];
	/** Condition keys applicable to the GetFunctionUrlConfig action. */
	static readonly GET_FUNCTION_URL_CONFIG_CONDITION_KEYS: string[] = [
		"lambda:FunctionArn",
		"lambda:FunctionUrlAuthType",
	];
	/** Condition keys applicable to the InvokeFunction action. */
	static readonly INVOKE_FUNCTION_CONDITION_KEYS: string[] = [
		"lambda:EventSourceToken",
		"lambda:InvokedViaFunctionUrl",
	];
	/** Condition keys applicable to the InvokeFunctionUrl action. */
	static readonly INVOKE_FUNCTION_URL_CONDITION_KEYS: string[] = [
		"lambda:EventSourceToken",
		"lambda:FunctionArn",
		"lambda:FunctionUrlAuthType",
	];
	/** Condition keys applicable to the ListFunctionUrlConfigs action. */
	static readonly LIST_FUNCTION_URL_CONFIGS_CONDITION_KEYS: string[] = [
		"lambda:FunctionUrlAuthType",
	];
	/** Condition keys applicable to the PutFunctionCodeSigningConfig action. */
	static readonly PUT_FUNCTION_CODE_SIGNING_CONFIG_CONDITION_KEYS: string[] = [
		"lambda:CodeSigningConfigArn",
	];
	/** Condition keys applicable to the RemovePermission action. */
	static readonly REMOVE_PERMISSION_CONDITION_KEYS: string[] = [
		"lambda:FunctionUrlAuthType",
		"lambda:Principal",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateEventSourceMapping action. */
	static readonly UPDATE_EVENT_SOURCE_MAPPING_CONDITION_KEYS: string[] = [
		"lambda:FunctionArn",
	];
	/** Condition keys applicable to the UpdateFunctionConfiguration action. */
	static readonly UPDATE_FUNCTION_CONFIGURATION_CONDITION_KEYS: string[] = [
		"lambda:Layer",
		"lambda:SecurityGroupIds",
		"lambda:SubnetIds",
		"lambda:VpcIds",
	];
	/** Condition keys applicable to the UpdateFunctionUrlConfig action. */
	static readonly UPDATE_FUNCTION_URL_CONFIG_CONDITION_KEYS: string[] = [
		"lambda:FunctionArn",
		"lambda:FunctionUrlAuthType",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
