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
	static readonly CloneBackend = "amplifybackend:CloneBackend";
	/** [Write] amplifybackend:CreateBackend */
	static readonly CreateBackend = "amplifybackend:CreateBackend";
	/** [Write] amplifybackend:CreateBackendAPI */
	static readonly CreateBackendAPI = "amplifybackend:CreateBackendAPI";
	/** [Write] amplifybackend:CreateBackendAuth */
	static readonly CreateBackendAuth = "amplifybackend:CreateBackendAuth";
	/** [Write] amplifybackend:CreateBackendConfig */
	static readonly CreateBackendConfig = "amplifybackend:CreateBackendConfig";
	/** [Write] amplifybackend:CreateBackendStorage */
	static readonly CreateBackendStorage = "amplifybackend:CreateBackendStorage";
	/** [Write] amplifybackend:CreateToken */
	static readonly CreateToken = "amplifybackend:CreateToken";
	/** [Write] amplifybackend:DeleteBackend */
	static readonly DeleteBackend = "amplifybackend:DeleteBackend";
	/** [Write] amplifybackend:DeleteBackendAPI */
	static readonly DeleteBackendAPI = "amplifybackend:DeleteBackendAPI";
	/** [Write] amplifybackend:DeleteBackendAuth */
	static readonly DeleteBackendAuth = "amplifybackend:DeleteBackendAuth";
	/** [Write] amplifybackend:DeleteBackendStorage */
	static readonly DeleteBackendStorage = "amplifybackend:DeleteBackendStorage";
	/** [Write] amplifybackend:DeleteToken */
	static readonly DeleteToken = "amplifybackend:DeleteToken";
	/** [Write] amplifybackend:GenerateBackendAPIModels */
	static readonly GenerateBackendAPIModels =
		"amplifybackend:GenerateBackendAPIModels";
	/** [Read] amplifybackend:GetBackend */
	static readonly actionGetBackend = "amplifybackend:GetBackend";
	/** [Read] amplifybackend:GetBackendAPI */
	static readonly actionGetBackendAPI = "amplifybackend:GetBackendAPI";
	/** [Read] amplifybackend:GetBackendAPIModels */
	static readonly actionGetBackendAPIModels =
		"amplifybackend:GetBackendAPIModels";
	/** [Read] amplifybackend:GetBackendAuth */
	static readonly actionGetBackendAuth = "amplifybackend:GetBackendAuth";
	/** [Read] amplifybackend:GetBackendJob */
	static readonly actionGetBackendJob = "amplifybackend:GetBackendJob";
	/** [Read] amplifybackend:GetBackendStorage */
	static readonly actionGetBackendStorage = "amplifybackend:GetBackendStorage";
	/** [Read] amplifybackend:GetToken */
	static readonly actionGetToken = "amplifybackend:GetToken";
	/** [Write] amplifybackend:ImportBackendAuth */
	static readonly ImportBackendAuth = "amplifybackend:ImportBackendAuth";
	/** [Write] amplifybackend:ImportBackendStorage */
	static readonly ImportBackendStorage = "amplifybackend:ImportBackendStorage";
	/** [List] amplifybackend:ListBackendJobs */
	static readonly ListBackendJobs = "amplifybackend:ListBackendJobs";
	/** [List] amplifybackend:ListS3Buckets */
	static readonly ListS3Buckets = "amplifybackend:ListS3Buckets";
	/** [Write] amplifybackend:RemoveAllBackends */
	static readonly RemoveAllBackends = "amplifybackend:RemoveAllBackends";
	/** [Write] amplifybackend:RemoveBackendConfig */
	static readonly RemoveBackendConfig = "amplifybackend:RemoveBackendConfig";
	/** [Write] amplifybackend:UpdateBackendAPI */
	static readonly UpdateBackendAPI = "amplifybackend:UpdateBackendAPI";
	/** [Write] amplifybackend:UpdateBackendAuth */
	static readonly UpdateBackendAuth = "amplifybackend:UpdateBackendAuth";
	/** [Write] amplifybackend:UpdateBackendConfig */
	static readonly UpdateBackendConfig = "amplifybackend:UpdateBackendConfig";
	/** [Write] amplifybackend:UpdateBackendJob */
	static readonly UpdateBackendJob = "amplifybackend:UpdateBackendJob";
	/** [Write] amplifybackend:UpdateBackendStorage */
	static readonly UpdateBackendStorage = "amplifybackend:UpdateBackendStorage";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AmplifybackendActions.actionGetBackend,
		AmplifybackendActions.actionGetBackendAPI,
		AmplifybackendActions.actionGetBackendAPIModels,
		AmplifybackendActions.actionGetBackendAuth,
		AmplifybackendActions.actionGetBackendJob,
		AmplifybackendActions.actionGetBackendStorage,
		AmplifybackendActions.actionGetToken,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AmplifybackendActions.CloneBackend,
		AmplifybackendActions.CreateBackend,
		AmplifybackendActions.CreateBackendAPI,
		AmplifybackendActions.CreateBackendAuth,
		AmplifybackendActions.CreateBackendConfig,
		AmplifybackendActions.CreateBackendStorage,
		AmplifybackendActions.CreateToken,
		AmplifybackendActions.DeleteBackend,
		AmplifybackendActions.DeleteBackendAPI,
		AmplifybackendActions.DeleteBackendAuth,
		AmplifybackendActions.DeleteBackendStorage,
		AmplifybackendActions.DeleteToken,
		AmplifybackendActions.GenerateBackendAPIModels,
		AmplifybackendActions.ImportBackendAuth,
		AmplifybackendActions.ImportBackendStorage,
		AmplifybackendActions.RemoveAllBackends,
		AmplifybackendActions.RemoveBackendConfig,
		AmplifybackendActions.UpdateBackendAPI,
		AmplifybackendActions.UpdateBackendAuth,
		AmplifybackendActions.UpdateBackendConfig,
		AmplifybackendActions.UpdateBackendJob,
		AmplifybackendActions.UpdateBackendStorage,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AmplifybackendActions.ListBackendJobs,
		AmplifybackendActions.ListS3Buckets,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a api ARN.
 */
export interface AmplifybackendAPIArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a api ARN.
 */
export interface AmplifybackendAPIArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a auth ARN.
 */
export interface AmplifybackendAuthArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a auth ARN.
 */
export interface AmplifybackendAuthArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a backend ARN.
 */
export interface AmplifybackendBackendArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a backend ARN.
 */
export interface AmplifybackendBackendArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a config ARN.
 */
export interface AmplifybackendConfigArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a config ARN.
 */
export interface AmplifybackendConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a created-backend ARN.
 */
export interface AmplifybackendCreatedBackendArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a created-backend ARN.
 */
export interface AmplifybackendCreatedBackendArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a environment ARN.
 */
export interface AmplifybackendEnvironmentArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment ARN.
 */
export interface AmplifybackendEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a job ARN.
 */
export interface AmplifybackendJobArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a job ARN.
 */
export interface AmplifybackendJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a storage ARN.
 */
export interface AmplifybackendStorageArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a storage ARN.
 */
export interface AmplifybackendStorageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a token ARN.
 */
export interface AmplifybackendTokenArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a token ARN.
 */
export interface AmplifybackendTokenArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

const APIArnRegex =
	/^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):\/backend\/(?<appId>[^:/?]+)\/api\/.*$/;
const AuthArnRegex =
	/^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):\/backend\/(?<appId>[^:/?]+)\/auth\/.*$/;
const BackendArnRegex =
	/^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):\/backend\/(?<appId>[^:/?]+)\/.*$/;
const ConfigArnRegex =
	/^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):\/backend\/(?<appId>[^:/?]+)\/config\/.*$/;
const CreatedBackendArnRegex =
	/^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):\/backend\/.*$/;
const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):\/backend\/(?<appId>[^:/?]+)\/environments\/.*$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):\/backend\/(?<appId>[^:/?]+)\/job\/.*$/;
const StorageArnRegex =
	/^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):\/backend\/(?<appId>[^:/?]+)\/storage\/.*$/;
const TokenArnRegex =
	/^arn:(?<partition>[^:]+):amplifybackend:(?<region>[^:]*):(?<account>[^:]*):\/backend\/(?<appId>[^:/?]+)\/challenge\/.*$/;

/**
 * ARN builders, validators, and parsers for amplifybackend resources.
 */
export class AmplifybackendResources {
	/**
	 * Builds an ARN for the api resource.
	 */
	static api(props: AmplifybackendAPIArnProps): string {
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
	static parseAPIArn(arn: string): AmplifybackendAPIArnComponents {
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
	static auth(props: AmplifybackendAuthArnProps): string {
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
	static parseAuthArn(arn: string): AmplifybackendAuthArnComponents {
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
	static backend(props: AmplifybackendBackendArnProps): string {
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
	static parseBackendArn(arn: string): AmplifybackendBackendArnComponents {
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
	static config(props: AmplifybackendConfigArnProps): string {
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
	static parseConfigArn(arn: string): AmplifybackendConfigArnComponents {
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
	static createdBackend(props: AmplifybackendCreatedBackendArnProps): string {
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
	static parseCreatedBackendArn(
		arn: string,
	): AmplifybackendCreatedBackendArnComponents {
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
	static environment(props: AmplifybackendEnvironmentArnProps): string {
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
	static parseEnvironmentArn(
		arn: string,
	): AmplifybackendEnvironmentArnComponents {
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
	static job(props: AmplifybackendJobArnProps): string {
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
	static parseJobArn(arn: string): AmplifybackendJobArnComponents {
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
	static storage(props: AmplifybackendStorageArnProps): string {
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
	static parseStorageArn(arn: string): AmplifybackendStorageArnComponents {
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
	static token(props: AmplifybackendTokenArnProps): string {
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
	static parseTokenArn(arn: string): AmplifybackendTokenArnComponents {
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
	static readonly CloneBackend: string[] = ["amplifybackend:CloneBackend"];
	/** IAM actions required for the CreateBackend API call. */
	static readonly CreateBackend: string[] = ["amplifybackend:CreateBackend"];
	/** IAM actions required for the CreateBackendAPI API call. */
	static readonly CreateBackendAPI: string[] = [
		"amplifybackend:CreateBackendAPI",
	];
	/** IAM actions required for the CreateBackendAuth API call. */
	static readonly CreateBackendAuth: string[] = [
		"amplifybackend:CreateBackendAuth",
	];
	/** IAM actions required for the CreateBackendConfig API call. */
	static readonly CreateBackendConfig: string[] = [
		"amplifybackend:CreateBackendConfig",
	];
	/** IAM actions required for the CreateBackendStorage API call. */
	static readonly CreateBackendStorage: string[] = [
		"amplifybackend:CreateBackendStorage",
	];
	/** IAM actions required for the CreateToken API call. */
	static readonly CreateToken: string[] = ["amplifybackend:CreateToken"];
	/** IAM actions required for the DeleteBackend API call. */
	static readonly DeleteBackend: string[] = ["amplifybackend:DeleteBackend"];
	/** IAM actions required for the DeleteBackendAPI API call. */
	static readonly DeleteBackendAPI: string[] = [
		"amplifybackend:DeleteBackendAPI",
	];
	/** IAM actions required for the DeleteBackendAuth API call. */
	static readonly DeleteBackendAuth: string[] = [
		"amplifybackend:DeleteBackendAuth",
	];
	/** IAM actions required for the DeleteBackendStorage API call. */
	static readonly DeleteBackendStorage: string[] = [
		"amplifybackend:DeleteBackendStorage",
	];
	/** IAM actions required for the DeleteToken API call. */
	static readonly DeleteToken: string[] = ["amplifybackend:DeleteToken"];
	/** IAM actions required for the GenerateBackendAPIModels API call. */
	static readonly GenerateBackendAPIModels: string[] = [
		"amplifybackend:GenerateBackendAPIModels",
	];
	/** IAM actions required for the GetBackend API call. */
	static readonly opGetBackend: string[] = ["amplifybackend:GetBackend"];
	/** IAM actions required for the GetBackendAPI API call. */
	static readonly opGetBackendAPI: string[] = ["amplifybackend:GetBackendAPI"];
	/** IAM actions required for the GetBackendAPIModels API call. */
	static readonly opGetBackendAPIModels: string[] = [
		"amplifybackend:GetBackendAPIModels",
	];
	/** IAM actions required for the GetBackendAuth API call. */
	static readonly opGetBackendAuth: string[] = [
		"amplifybackend:GetBackendAuth",
	];
	/** IAM actions required for the GetBackendJob API call. */
	static readonly opGetBackendJob: string[] = ["amplifybackend:GetBackendJob"];
	/** IAM actions required for the GetBackendStorage API call. */
	static readonly opGetBackendStorage: string[] = [
		"amplifybackend:GetBackendStorage",
	];
	/** IAM actions required for the GetToken API call. */
	static readonly opGetToken: string[] = ["amplifybackend:GetToken"];
	/** IAM actions required for the ImportBackendAuth API call. */
	static readonly ImportBackendAuth: string[] = [
		"amplifybackend:ImportBackendAuth",
	];
	/** IAM actions required for the ImportBackendStorage API call. */
	static readonly ImportBackendStorage: string[] = [
		"amplifybackend:ImportBackendStorage",
	];
	/** IAM actions required for the ListBackendJobs API call. */
	static readonly ListBackendJobs: string[] = [
		"amplifybackend:ListBackendJobs",
	];
	/** IAM actions required for the ListS3Buckets API call. */
	static readonly ListS3Buckets: string[] = ["amplifybackend:ListS3Buckets"];
	/** IAM actions required for the RemoveAllBackends API call. */
	static readonly RemoveAllBackends: string[] = [
		"amplifybackend:RemoveAllBackends",
	];
	/** IAM actions required for the RemoveBackendConfig API call. */
	static readonly RemoveBackendConfig: string[] = [
		"amplifybackend:RemoveBackendConfig",
	];
	/** IAM actions required for the UpdateBackendAPI API call. */
	static readonly UpdateBackendAPI: string[] = [
		"amplifybackend:UpdateBackendAPI",
	];
	/** IAM actions required for the UpdateBackendAuth API call. */
	static readonly UpdateBackendAuth: string[] = [
		"amplifybackend:UpdateBackendAuth",
	];
	/** IAM actions required for the UpdateBackendConfig API call. */
	static readonly UpdateBackendConfig: string[] = [
		"amplifybackend:UpdateBackendConfig",
	];
	/** IAM actions required for the UpdateBackendJob API call. */
	static readonly UpdateBackendJob: string[] = [
		"amplifybackend:UpdateBackendJob",
	];
	/** IAM actions required for the UpdateBackendStorage API call. */
	static readonly UpdateBackendStorage: string[] = [
		"amplifybackend:UpdateBackendStorage",
	];
}
