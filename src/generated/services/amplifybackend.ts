// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/amplifybackend.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the amplifybackend service.
 */
export class AmplifybackendActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "amplifybackend";

	/** [Write] amplifybackend:CloneBackend */
	static readonly CLONE_BACKEND = "amplifybackend:CloneBackend";
	/** [Write] amplifybackend:CreateBackend */
	static readonly CREATE_BACKEND = "amplifybackend:CreateBackend";
	/** [Write] amplifybackend:CreateBackendAPI */
	static readonly CREATE_BACKEND_API = "amplifybackend:CreateBackendAPI";
	/** [Write] amplifybackend:CreateBackendAuth */
	static readonly CREATE_BACKEND_AUTH = "amplifybackend:CreateBackendAuth";
	/** [Write] amplifybackend:CreateBackendConfig */
	static readonly CREATE_BACKEND_CONFIG = "amplifybackend:CreateBackendConfig";
	/** [Write] amplifybackend:CreateBackendStorage */
	static readonly CREATE_BACKEND_STORAGE =
		"amplifybackend:CreateBackendStorage";
	/** [Write] amplifybackend:CreateToken */
	static readonly CREATE_TOKEN = "amplifybackend:CreateToken";
	/** [Write] amplifybackend:DeleteBackend */
	static readonly DELETE_BACKEND = "amplifybackend:DeleteBackend";
	/** [Write] amplifybackend:DeleteBackendAPI */
	static readonly DELETE_BACKEND_API = "amplifybackend:DeleteBackendAPI";
	/** [Write] amplifybackend:DeleteBackendAuth */
	static readonly DELETE_BACKEND_AUTH = "amplifybackend:DeleteBackendAuth";
	/** [Write] amplifybackend:DeleteBackendStorage */
	static readonly DELETE_BACKEND_STORAGE =
		"amplifybackend:DeleteBackendStorage";
	/** [Write] amplifybackend:DeleteToken */
	static readonly DELETE_TOKEN = "amplifybackend:DeleteToken";
	/** [Write] amplifybackend:GenerateBackendAPIModels */
	static readonly GENERATE_BACKEND_API_MODELS =
		"amplifybackend:GenerateBackendAPIModels";
	/** [Read] amplifybackend:GetBackend */
	static readonly GET_BACKEND = "amplifybackend:GetBackend";
	/** [Read] amplifybackend:GetBackendAPI */
	static readonly GET_BACKEND_API = "amplifybackend:GetBackendAPI";
	/** [Read] amplifybackend:GetBackendAPIModels */
	static readonly GET_BACKEND_API_MODELS = "amplifybackend:GetBackendAPIModels";
	/** [Read] amplifybackend:GetBackendAuth */
	static readonly GET_BACKEND_AUTH = "amplifybackend:GetBackendAuth";
	/** [Read] amplifybackend:GetBackendJob */
	static readonly GET_BACKEND_JOB = "amplifybackend:GetBackendJob";
	/** [Read] amplifybackend:GetBackendStorage */
	static readonly GET_BACKEND_STORAGE = "amplifybackend:GetBackendStorage";
	/** [Read] amplifybackend:GetToken */
	static readonly GET_TOKEN = "amplifybackend:GetToken";
	/** [Write] amplifybackend:ImportBackendAuth */
	static readonly IMPORT_BACKEND_AUTH = "amplifybackend:ImportBackendAuth";
	/** [Write] amplifybackend:ImportBackendStorage */
	static readonly IMPORT_BACKEND_STORAGE =
		"amplifybackend:ImportBackendStorage";
	/** [List] amplifybackend:ListBackendJobs */
	static readonly LIST_BACKEND_JOBS = "amplifybackend:ListBackendJobs";
	/** [List] amplifybackend:ListS3Buckets */
	static readonly LIST_S3_BUCKETS = "amplifybackend:ListS3Buckets";
	/** [Write] amplifybackend:RemoveAllBackends */
	static readonly REMOVE_ALL_BACKENDS = "amplifybackend:RemoveAllBackends";
	/** [Write] amplifybackend:RemoveBackendConfig */
	static readonly REMOVE_BACKEND_CONFIG = "amplifybackend:RemoveBackendConfig";
	/** [Write] amplifybackend:UpdateBackendAPI */
	static readonly UPDATE_BACKEND_API = "amplifybackend:UpdateBackendAPI";
	/** [Write] amplifybackend:UpdateBackendAuth */
	static readonly UPDATE_BACKEND_AUTH = "amplifybackend:UpdateBackendAuth";
	/** [Write] amplifybackend:UpdateBackendConfig */
	static readonly UPDATE_BACKEND_CONFIG = "amplifybackend:UpdateBackendConfig";
	/** [Write] amplifybackend:UpdateBackendJob */
	static readonly UPDATE_BACKEND_JOB = "amplifybackend:UpdateBackendJob";
	/** [Write] amplifybackend:UpdateBackendStorage */
	static readonly UPDATE_BACKEND_STORAGE =
		"amplifybackend:UpdateBackendStorage";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AmplifybackendActions.GET_BACKEND,
		AmplifybackendActions.GET_BACKEND_API,
		AmplifybackendActions.GET_BACKEND_API_MODELS,
		AmplifybackendActions.GET_BACKEND_AUTH,
		AmplifybackendActions.GET_BACKEND_JOB,
		AmplifybackendActions.GET_BACKEND_STORAGE,
		AmplifybackendActions.GET_TOKEN,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AmplifybackendActions.CLONE_BACKEND,
		AmplifybackendActions.CREATE_BACKEND,
		AmplifybackendActions.CREATE_BACKEND_API,
		AmplifybackendActions.CREATE_BACKEND_AUTH,
		AmplifybackendActions.CREATE_BACKEND_CONFIG,
		AmplifybackendActions.CREATE_BACKEND_STORAGE,
		AmplifybackendActions.CREATE_TOKEN,
		AmplifybackendActions.DELETE_BACKEND,
		AmplifybackendActions.DELETE_BACKEND_API,
		AmplifybackendActions.DELETE_BACKEND_AUTH,
		AmplifybackendActions.DELETE_BACKEND_STORAGE,
		AmplifybackendActions.DELETE_TOKEN,
		AmplifybackendActions.GENERATE_BACKEND_API_MODELS,
		AmplifybackendActions.IMPORT_BACKEND_AUTH,
		AmplifybackendActions.IMPORT_BACKEND_STORAGE,
		AmplifybackendActions.REMOVE_ALL_BACKENDS,
		AmplifybackendActions.REMOVE_BACKEND_CONFIG,
		AmplifybackendActions.UPDATE_BACKEND_API,
		AmplifybackendActions.UPDATE_BACKEND_AUTH,
		AmplifybackendActions.UPDATE_BACKEND_CONFIG,
		AmplifybackendActions.UPDATE_BACKEND_JOB,
		AmplifybackendActions.UPDATE_BACKEND_STORAGE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AmplifybackendActions.LIST_BACKEND_JOBS,
		AmplifybackendActions.LIST_S3_BUCKETS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const APIArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):/backend/(?<appId>[^:/?]+)/api/.*$",
);
const AuthArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):/backend/(?<appId>[^:/?]+)/auth/.*$",
);
const BackendArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):/backend/(?<appId>[^:/?]+)/.*$",
);
const ConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):/backend/(?<appId>[^:/?]+)/config/.*$",
);
const CreatedBackendArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):/backend/.*$",
);
const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):/backend/(?<appId>[^:/?]+)/environments/.*$",
);
const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):/backend/(?<appId>[^:/?]+)/job/.*$",
);
const StorageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):/backend/(?<appId>[^:/?]+)/storage/.*$",
);
const TokenArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):/backend/(?<appId>[^:/?]+)/challenge/.*$",
);

/**
 * ARN builders, validators, and parsers for amplifybackend resources.
 */
export class AmplifybackendResources {
	/**
	 * Builds an ARN for the api resource.
	 */
	static api(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifybackend:${props.region ?? "*"}:${props.account ?? "*"}:/backend/${props.appId}/api/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the api resource.
	 */
	static isValidAPIArn(arn: string): boolean {
		return APIArnRegex.test(arn);
	}

	/**
	 * Parses a api ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAPIArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
	} {
		const match = APIArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid api ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the auth resource.
	 */
	static auth(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifybackend:${props.region ?? "*"}:${props.account ?? "*"}:/backend/${props.appId}/auth/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the auth resource.
	 */
	static isValidAuthArn(arn: string): boolean {
		return AuthArnRegex.test(arn);
	}

	/**
	 * Parses a auth ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAuthArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
	} {
		const match = AuthArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid auth ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the backend resource.
	 */
	static backend(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifybackend:${props.region ?? "*"}:${props.account ?? "*"}:/backend/${props.appId}/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the backend resource.
	 */
	static isValidBackendArn(arn: string): boolean {
		return BackendArnRegex.test(arn);
	}

	/**
	 * Parses a backend ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBackendArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
	} {
		const match = BackendArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid backend ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the config resource.
	 */
	static config(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifybackend:${props.region ?? "*"}:${props.account ?? "*"}:/backend/${props.appId}/config/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the config resource.
	 */
	static isValidConfigArn(arn: string): boolean {
		return ConfigArnRegex.test(arn);
	}

	/**
	 * Parses a config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
	} {
		const match = ConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the created-backend resource.
	 */
	static createdBackend(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifybackend:${props.region ?? "*"}:${props.account ?? "*"}:/backend/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the created-backend resource.
	 */
	static isValidCreatedBackendArn(arn: string): boolean {
		return CreatedBackendArnRegex.test(arn);
	}

	/**
	 * Parses a created-backend ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCreatedBackendArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = CreatedBackendArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid created-backend ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifybackend:${props.region ?? "*"}:${props.account ?? "*"}:/backend/${props.appId}/environments/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment resource.
	 */
	static isValidEnvironmentArn(arn: string): boolean {
		return EnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
	} {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifybackend:${props.region ?? "*"}:${props.account ?? "*"}:/backend/${props.appId}/job/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
	} {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the storage resource.
	 */
	static storage(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifybackend:${props.region ?? "*"}:${props.account ?? "*"}:/backend/${props.appId}/storage/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the storage resource.
	 */
	static isValidStorageArn(arn: string): boolean {
		return StorageArnRegex.test(arn);
	}

	/**
	 * Parses a storage ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStorageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
	} {
		const match = StorageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid storage ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the token resource.
	 */
	static token(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifybackend:${props.region ?? "*"}:${props.account ?? "*"}:/backend/${props.appId}/challenge/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the token resource.
	 */
	static isValidTokenArn(arn: string): boolean {
		return TokenArnRegex.test(arn);
	}

	/**
	 * Parses a token ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTokenArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
	} {
		const match = TokenArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid token ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for amplifybackend.
 */
export class AmplifybackendOperations {
	/** IAM actions required for the CloneBackend API call. */
	static readonly CLONE_BACKEND: string[] = ["amplifybackend:CloneBackend"];
	/** IAM actions required for the CreateBackend API call. */
	static readonly CREATE_BACKEND: string[] = ["amplifybackend:CreateBackend"];
	/** IAM actions required for the CreateBackendAPI API call. */
	static readonly CREATE_BACKEND_API: string[] = [
		"amplifybackend:CreateBackendAPI",
	];
	/** IAM actions required for the CreateBackendAuth API call. */
	static readonly CREATE_BACKEND_AUTH: string[] = [
		"amplifybackend:CreateBackendAuth",
	];
	/** IAM actions required for the CreateBackendConfig API call. */
	static readonly CREATE_BACKEND_CONFIG: string[] = [
		"amplifybackend:CreateBackendConfig",
	];
	/** IAM actions required for the CreateBackendStorage API call. */
	static readonly CREATE_BACKEND_STORAGE: string[] = [
		"amplifybackend:CreateBackendStorage",
	];
	/** IAM actions required for the CreateToken API call. */
	static readonly CREATE_TOKEN: string[] = ["amplifybackend:CreateToken"];
	/** IAM actions required for the DeleteBackend API call. */
	static readonly DELETE_BACKEND: string[] = ["amplifybackend:DeleteBackend"];
	/** IAM actions required for the DeleteBackendAPI API call. */
	static readonly DELETE_BACKEND_API: string[] = [
		"amplifybackend:DeleteBackendAPI",
	];
	/** IAM actions required for the DeleteBackendAuth API call. */
	static readonly DELETE_BACKEND_AUTH: string[] = [
		"amplifybackend:DeleteBackendAuth",
	];
	/** IAM actions required for the DeleteBackendStorage API call. */
	static readonly DELETE_BACKEND_STORAGE: string[] = [
		"amplifybackend:DeleteBackendStorage",
	];
	/** IAM actions required for the DeleteToken API call. */
	static readonly DELETE_TOKEN: string[] = ["amplifybackend:DeleteToken"];
	/** IAM actions required for the GenerateBackendAPIModels API call. */
	static readonly GENERATE_BACKEND_API_MODELS: string[] = [
		"amplifybackend:GenerateBackendAPIModels",
	];
	/** IAM actions required for the GetBackend API call. */
	static readonly GET_BACKEND: string[] = ["amplifybackend:GetBackend"];
	/** IAM actions required for the GetBackendAPI API call. */
	static readonly GET_BACKEND_API: string[] = ["amplifybackend:GetBackendAPI"];
	/** IAM actions required for the GetBackendAPIModels API call. */
	static readonly GET_BACKEND_API_MODELS: string[] = [
		"amplifybackend:GetBackendAPIModels",
	];
	/** IAM actions required for the GetBackendAuth API call. */
	static readonly GET_BACKEND_AUTH: string[] = [
		"amplifybackend:GetBackendAuth",
	];
	/** IAM actions required for the GetBackendJob API call. */
	static readonly GET_BACKEND_JOB: string[] = ["amplifybackend:GetBackendJob"];
	/** IAM actions required for the GetBackendStorage API call. */
	static readonly GET_BACKEND_STORAGE: string[] = [
		"amplifybackend:GetBackendStorage",
	];
	/** IAM actions required for the GetToken API call. */
	static readonly GET_TOKEN: string[] = ["amplifybackend:GetToken"];
	/** IAM actions required for the ImportBackendAuth API call. */
	static readonly IMPORT_BACKEND_AUTH: string[] = [
		"amplifybackend:ImportBackendAuth",
	];
	/** IAM actions required for the ImportBackendStorage API call. */
	static readonly IMPORT_BACKEND_STORAGE: string[] = [
		"amplifybackend:ImportBackendStorage",
	];
	/** IAM actions required for the ListBackendJobs API call. */
	static readonly LIST_BACKEND_JOBS: string[] = [
		"amplifybackend:ListBackendJobs",
	];
	/** IAM actions required for the ListS3Buckets API call. */
	static readonly LIST_S3_BUCKETS: string[] = ["amplifybackend:ListS3Buckets"];
	/** IAM actions required for the RemoveAllBackends API call. */
	static readonly REMOVE_ALL_BACKENDS: string[] = [
		"amplifybackend:RemoveAllBackends",
	];
	/** IAM actions required for the RemoveBackendConfig API call. */
	static readonly REMOVE_BACKEND_CONFIG: string[] = [
		"amplifybackend:RemoveBackendConfig",
	];
	/** IAM actions required for the UpdateBackendAPI API call. */
	static readonly UPDATE_BACKEND_API: string[] = [
		"amplifybackend:UpdateBackendAPI",
	];
	/** IAM actions required for the UpdateBackendAuth API call. */
	static readonly UPDATE_BACKEND_AUTH: string[] = [
		"amplifybackend:UpdateBackendAuth",
	];
	/** IAM actions required for the UpdateBackendConfig API call. */
	static readonly UPDATE_BACKEND_CONFIG: string[] = [
		"amplifybackend:UpdateBackendConfig",
	];
	/** IAM actions required for the UpdateBackendJob API call. */
	static readonly UPDATE_BACKEND_JOB: string[] = [
		"amplifybackend:UpdateBackendJob",
	];
	/** IAM actions required for the UpdateBackendStorage API call. */
	static readonly UPDATE_BACKEND_STORAGE: string[] = [
		"amplifybackend:UpdateBackendStorage",
	];
}
