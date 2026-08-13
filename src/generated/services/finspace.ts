// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/finspace.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the finspace service.
 */
export class FinspaceActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "finspace";

	/** [Write] finspace:ConnectKxCluster */
	static readonly CONNECT_KX_CLUSTER = "finspace:ConnectKxCluster";
	/** [Write] finspace:CreateEnvironment */
	static readonly CREATE_ENVIRONMENT = "finspace:CreateEnvironment";
	/** [Write] finspace:CreateKxChangeset */
	static readonly CREATE_KX_CHANGESET = "finspace:CreateKxChangeset";
	/** [Write] finspace:CreateKxCluster */
	static readonly CREATE_KX_CLUSTER = "finspace:CreateKxCluster";
	/** [Write] finspace:CreateKxDatabase */
	static readonly CREATE_KX_DATABASE = "finspace:CreateKxDatabase";
	/** [Write] finspace:CreateKxDataview */
	static readonly CREATE_KX_DATAVIEW = "finspace:CreateKxDataview";
	/** [Write] finspace:CreateKxEnvironment */
	static readonly CREATE_KX_ENVIRONMENT = "finspace:CreateKxEnvironment";
	/** [Write] finspace:CreateKxScalingGroup */
	static readonly CREATE_KX_SCALING_GROUP = "finspace:CreateKxScalingGroup";
	/** [Write] finspace:CreateKxUser */
	static readonly CREATE_KX_USER = "finspace:CreateKxUser";
	/** [Write] finspace:CreateKxVolume */
	static readonly CREATE_KX_VOLUME = "finspace:CreateKxVolume";
	/** [Write] finspace:CreateUser */
	static readonly CREATE_USER = "finspace:CreateUser";
	/** [Write] finspace:DeleteEnvironment */
	static readonly DELETE_ENVIRONMENT = "finspace:DeleteEnvironment";
	/** [Write] finspace:DeleteKxCluster */
	static readonly DELETE_KX_CLUSTER = "finspace:DeleteKxCluster";
	/** [Write] finspace:DeleteKxClusterNode */
	static readonly DELETE_KX_CLUSTER_NODE = "finspace:DeleteKxClusterNode";
	/** [Write] finspace:DeleteKxDatabase */
	static readonly DELETE_KX_DATABASE = "finspace:DeleteKxDatabase";
	/** [Write] finspace:DeleteKxDataview */
	static readonly DELETE_KX_DATAVIEW = "finspace:DeleteKxDataview";
	/** [Write] finspace:DeleteKxEnvironment */
	static readonly DELETE_KX_ENVIRONMENT = "finspace:DeleteKxEnvironment";
	/** [Write] finspace:DeleteKxScalingGroup */
	static readonly DELETE_KX_SCALING_GROUP = "finspace:DeleteKxScalingGroup";
	/** [Write] finspace:DeleteKxUser */
	static readonly DELETE_KX_USER = "finspace:DeleteKxUser";
	/** [Write] finspace:DeleteKxVolume */
	static readonly DELETE_KX_VOLUME = "finspace:DeleteKxVolume";
	/** [Read] finspace:GetEnvironment */
	static readonly GET_ENVIRONMENT = "finspace:GetEnvironment";
	/** [Read] finspace:GetKxChangeset */
	static readonly GET_KX_CHANGESET = "finspace:GetKxChangeset";
	/** [Read] finspace:GetKxCluster */
	static readonly GET_KX_CLUSTER = "finspace:GetKxCluster";
	/** [Read] finspace:GetKxConnectionString */
	static readonly GET_KX_CONNECTION_STRING = "finspace:GetKxConnectionString";
	/** [Read] finspace:GetKxDatabase */
	static readonly GET_KX_DATABASE = "finspace:GetKxDatabase";
	/** [Read] finspace:GetKxDataview */
	static readonly GET_KX_DATAVIEW = "finspace:GetKxDataview";
	/** [Read] finspace:GetKxEnvironment */
	static readonly GET_KX_ENVIRONMENT = "finspace:GetKxEnvironment";
	/** [Read] finspace:GetKxScalingGroup */
	static readonly GET_KX_SCALING_GROUP = "finspace:GetKxScalingGroup";
	/** [Read] finspace:GetKxUser */
	static readonly GET_KX_USER = "finspace:GetKxUser";
	/** [Read] finspace:GetKxVolume */
	static readonly GET_KX_VOLUME = "finspace:GetKxVolume";
	/** [Read] finspace:GetLoadSampleDataSetGroupIntoEnvironmentStatus */
	static readonly GET_LOAD_SAMPLE_DATA_SET_GROUP_INTO_ENVIRONMENT_STATUS =
		"finspace:GetLoadSampleDataSetGroupIntoEnvironmentStatus";
	/** [Read] finspace:GetUser */
	static readonly GET_USER = "finspace:GetUser";
	/** [List] finspace:ListEnvironments */
	static readonly LIST_ENVIRONMENTS = "finspace:ListEnvironments";
	/** [List] finspace:ListKxChangesets */
	static readonly LIST_KX_CHANGESETS = "finspace:ListKxChangesets";
	/** [List] finspace:ListKxClusterNodes */
	static readonly LIST_KX_CLUSTER_NODES = "finspace:ListKxClusterNodes";
	/** [List] finspace:ListKxClusters */
	static readonly LIST_KX_CLUSTERS = "finspace:ListKxClusters";
	/** [List] finspace:ListKxDatabases */
	static readonly LIST_KX_DATABASES = "finspace:ListKxDatabases";
	/** [List] finspace:ListKxDataviews */
	static readonly LIST_KX_DATAVIEWS = "finspace:ListKxDataviews";
	/** [List] finspace:ListKxEnvironments */
	static readonly LIST_KX_ENVIRONMENTS = "finspace:ListKxEnvironments";
	/** [List] finspace:ListKxScalingGroups */
	static readonly LIST_KX_SCALING_GROUPS = "finspace:ListKxScalingGroups";
	/** [List] finspace:ListKxUsers */
	static readonly LIST_KX_USERS = "finspace:ListKxUsers";
	/** [List] finspace:ListKxVolumes */
	static readonly LIST_KX_VOLUMES = "finspace:ListKxVolumes";
	/** [List] finspace:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "finspace:ListTagsForResource";
	/** [List] finspace:ListUsers */
	static readonly LIST_USERS = "finspace:ListUsers";
	/** [Write] finspace:LoadSampleDataSetGroupIntoEnvironment */
	static readonly LOAD_SAMPLE_DATA_SET_GROUP_INTO_ENVIRONMENT =
		"finspace:LoadSampleDataSetGroupIntoEnvironment";
	/** [Write] finspace:MountKxDatabase */
	static readonly MOUNT_KX_DATABASE = "finspace:MountKxDatabase";
	/** [Write] finspace:ResetUserPassword */
	static readonly RESET_USER_PASSWORD = "finspace:ResetUserPassword";
	/** [Tagging] finspace:TagResource */
	static readonly TAG_RESOURCE = "finspace:TagResource";
	/** [Tagging] finspace:UntagResource */
	static readonly UNTAG_RESOURCE = "finspace:UntagResource";
	/** [Write] finspace:UpdateEnvironment */
	static readonly UPDATE_ENVIRONMENT = "finspace:UpdateEnvironment";
	/** [Write] finspace:UpdateKxClusterCodeConfiguration */
	static readonly UPDATE_KX_CLUSTER_CODE_CONFIGURATION =
		"finspace:UpdateKxClusterCodeConfiguration";
	/** [Write] finspace:UpdateKxClusterDatabases */
	static readonly UPDATE_KX_CLUSTER_DATABASES =
		"finspace:UpdateKxClusterDatabases";
	/** [Write] finspace:UpdateKxDatabase */
	static readonly UPDATE_KX_DATABASE = "finspace:UpdateKxDatabase";
	/** [Write] finspace:UpdateKxDataview */
	static readonly UPDATE_KX_DATAVIEW = "finspace:UpdateKxDataview";
	/** [Write] finspace:UpdateKxEnvironment */
	static readonly UPDATE_KX_ENVIRONMENT = "finspace:UpdateKxEnvironment";
	/** [Write] finspace:UpdateKxEnvironmentNetwork */
	static readonly UPDATE_KX_ENVIRONMENT_NETWORK =
		"finspace:UpdateKxEnvironmentNetwork";
	/** [Write] finspace:UpdateKxUser */
	static readonly UPDATE_KX_USER = "finspace:UpdateKxUser";
	/** [Write] finspace:UpdateKxVolume */
	static readonly UPDATE_KX_VOLUME = "finspace:UpdateKxVolume";
	/** [Write] finspace:UpdateUser */
	static readonly UPDATE_USER = "finspace:UpdateUser";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		FinspaceActions.GET_ENVIRONMENT,
		FinspaceActions.GET_KX_CHANGESET,
		FinspaceActions.GET_KX_CLUSTER,
		FinspaceActions.GET_KX_CONNECTION_STRING,
		FinspaceActions.GET_KX_DATABASE,
		FinspaceActions.GET_KX_DATAVIEW,
		FinspaceActions.GET_KX_ENVIRONMENT,
		FinspaceActions.GET_KX_SCALING_GROUP,
		FinspaceActions.GET_KX_USER,
		FinspaceActions.GET_KX_VOLUME,
		FinspaceActions.GET_LOAD_SAMPLE_DATA_SET_GROUP_INTO_ENVIRONMENT_STATUS,
		FinspaceActions.GET_USER,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		FinspaceActions.CONNECT_KX_CLUSTER,
		FinspaceActions.CREATE_ENVIRONMENT,
		FinspaceActions.CREATE_KX_CHANGESET,
		FinspaceActions.CREATE_KX_CLUSTER,
		FinspaceActions.CREATE_KX_DATABASE,
		FinspaceActions.CREATE_KX_DATAVIEW,
		FinspaceActions.CREATE_KX_ENVIRONMENT,
		FinspaceActions.CREATE_KX_SCALING_GROUP,
		FinspaceActions.CREATE_KX_USER,
		FinspaceActions.CREATE_KX_VOLUME,
		FinspaceActions.CREATE_USER,
		FinspaceActions.DELETE_ENVIRONMENT,
		FinspaceActions.DELETE_KX_CLUSTER,
		FinspaceActions.DELETE_KX_CLUSTER_NODE,
		FinspaceActions.DELETE_KX_DATABASE,
		FinspaceActions.DELETE_KX_DATAVIEW,
		FinspaceActions.DELETE_KX_ENVIRONMENT,
		FinspaceActions.DELETE_KX_SCALING_GROUP,
		FinspaceActions.DELETE_KX_USER,
		FinspaceActions.DELETE_KX_VOLUME,
		FinspaceActions.LOAD_SAMPLE_DATA_SET_GROUP_INTO_ENVIRONMENT,
		FinspaceActions.MOUNT_KX_DATABASE,
		FinspaceActions.RESET_USER_PASSWORD,
		FinspaceActions.UPDATE_ENVIRONMENT,
		FinspaceActions.UPDATE_KX_CLUSTER_CODE_CONFIGURATION,
		FinspaceActions.UPDATE_KX_CLUSTER_DATABASES,
		FinspaceActions.UPDATE_KX_DATABASE,
		FinspaceActions.UPDATE_KX_DATAVIEW,
		FinspaceActions.UPDATE_KX_ENVIRONMENT,
		FinspaceActions.UPDATE_KX_ENVIRONMENT_NETWORK,
		FinspaceActions.UPDATE_KX_USER,
		FinspaceActions.UPDATE_KX_VOLUME,
		FinspaceActions.UPDATE_USER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		FinspaceActions.LIST_ENVIRONMENTS,
		FinspaceActions.LIST_KX_CHANGESETS,
		FinspaceActions.LIST_KX_CLUSTER_NODES,
		FinspaceActions.LIST_KX_CLUSTERS,
		FinspaceActions.LIST_KX_DATABASES,
		FinspaceActions.LIST_KX_DATAVIEWS,
		FinspaceActions.LIST_KX_ENVIRONMENTS,
		FinspaceActions.LIST_KX_SCALING_GROUPS,
		FinspaceActions.LIST_KX_USERS,
		FinspaceActions.LIST_KX_VOLUMES,
		FinspaceActions.LIST_TAGS_FOR_RESOURCE,
		FinspaceActions.LIST_USERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		FinspaceActions.TAG_RESOURCE,
		FinspaceActions.UNTAG_RESOURCE,
	];
}

const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):environment/(?<environmentId>[^:/?]+)$",
);
const KxClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment/(?<environmentId>[^:/?]+)/kxCluster/(?<kxCluster>[^:/?]+)$",
);
const KxDatabaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment/(?<environmentId>[^:/?]+)/kxDatabase/(?<kxDatabase>[^:/?]+)$",
);
const KxDataviewArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment/(?<environmentId>[^:/?]+)/kxDatabase/(?<kxDatabase>[^:/?]+)/kxDataview/(?<kxDataview>[^:/?]+)$",
);
const KxEnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment/(?<environmentId>[^:/?]+)$",
);
const KxScalingGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment/(?<environmentId>[^:/?]+)/kxScalingGroup/(?<kxScalingGroup>[^:/?]+)$",
);
const KxUserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment/(?<environmentId>[^:/?]+)/kxUser/(?<userName>[^:/?]+)$",
);
const KxVolumeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment/(?<environmentId>[^:/?]+)/kxVolume/(?<kxVolume>[^:/?]+)$",
);
const UserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):user/(?<userId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for finspace resources.
 */
export class FinspaceResources {
	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:finspace:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.environmentId}`;
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
		environmentId: string;
	} {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
		};
	}

	/**
	 * Builds an ARN for the kxCluster resource.
	 */
	static kxCluster(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** The KxCluster component of the ARN. */
		readonly kxCluster: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:finspace:${props.region ?? "*"}:${props.account ?? "*"}:kxEnvironment/${props.environmentId}/kxCluster/${props.kxCluster}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the kxCluster resource.
	 */
	static isValidKxClusterArn(arn: string): boolean {
		return KxClusterArnRegex.test(arn);
	}

	/**
	 * Parses a kxCluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKxClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
		kxCluster: string;
	} {
		const match = KxClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid kxCluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
			kxCluster: match.groups!.kxCluster,
		};
	}

	/**
	 * Builds an ARN for the kxDatabase resource.
	 */
	static kxDatabase(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** The KxDatabase component of the ARN. */
		readonly kxDatabase: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:finspace:${props.region ?? "*"}:${props.account ?? "*"}:kxEnvironment/${props.environmentId}/kxDatabase/${props.kxDatabase}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the kxDatabase resource.
	 */
	static isValidKxDatabaseArn(arn: string): boolean {
		return KxDatabaseArnRegex.test(arn);
	}

	/**
	 * Parses a kxDatabase ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKxDatabaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
		kxDatabase: string;
	} {
		const match = KxDatabaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid kxDatabase ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
			kxDatabase: match.groups!.kxDatabase,
		};
	}

	/**
	 * Builds an ARN for the kxDataview resource.
	 */
	static kxDataview(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** The KxDatabase component of the ARN. */
		readonly kxDatabase: string;
		/** The KxDataview component of the ARN. */
		readonly kxDataview: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:finspace:${props.region ?? "*"}:${props.account ?? "*"}:kxEnvironment/${props.environmentId}/kxDatabase/${props.kxDatabase}/kxDataview/${props.kxDataview}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the kxDataview resource.
	 */
	static isValidKxDataviewArn(arn: string): boolean {
		return KxDataviewArnRegex.test(arn);
	}

	/**
	 * Parses a kxDataview ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKxDataviewArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
		kxDatabase: string;
		kxDataview: string;
	} {
		const match = KxDataviewArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid kxDataview ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
			kxDatabase: match.groups!.kxDatabase,
			kxDataview: match.groups!.kxDataview,
		};
	}

	/**
	 * Builds an ARN for the kxEnvironment resource.
	 */
	static kxEnvironment(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:finspace:${props.region ?? "*"}:${props.account ?? "*"}:kxEnvironment/${props.environmentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the kxEnvironment resource.
	 */
	static isValidKxEnvironmentArn(arn: string): boolean {
		return KxEnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a kxEnvironment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKxEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
	} {
		const match = KxEnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid kxEnvironment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
		};
	}

	/**
	 * Builds an ARN for the kxScalingGroup resource.
	 */
	static kxScalingGroup(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** The KxScalingGroup component of the ARN. */
		readonly kxScalingGroup: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:finspace:${props.region ?? "*"}:${props.account ?? "*"}:kxEnvironment/${props.environmentId}/kxScalingGroup/${props.kxScalingGroup}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the kxScalingGroup resource.
	 */
	static isValidKxScalingGroupArn(arn: string): boolean {
		return KxScalingGroupArnRegex.test(arn);
	}

	/**
	 * Parses a kxScalingGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKxScalingGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
		kxScalingGroup: string;
	} {
		const match = KxScalingGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid kxScalingGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
			kxScalingGroup: match.groups!.kxScalingGroup,
		};
	}

	/**
	 * Builds an ARN for the kxUser resource.
	 */
	static kxUser(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** The UserName component of the ARN. */
		readonly userName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:finspace:${props.region ?? "*"}:${props.account ?? "*"}:kxEnvironment/${props.environmentId}/kxUser/${props.userName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the kxUser resource.
	 */
	static isValidKxUserArn(arn: string): boolean {
		return KxUserArnRegex.test(arn);
	}

	/**
	 * Parses a kxUser ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKxUserArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
		userName: string;
	} {
		const match = KxUserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid kxUser ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
			userName: match.groups!.userName,
		};
	}

	/**
	 * Builds an ARN for the kxVolume resource.
	 */
	static kxVolume(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** The KxVolume component of the ARN. */
		readonly kxVolume: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:finspace:${props.region ?? "*"}:${props.account ?? "*"}:kxEnvironment/${props.environmentId}/kxVolume/${props.kxVolume}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the kxVolume resource.
	 */
	static isValidKxVolumeArn(arn: string): boolean {
		return KxVolumeArnRegex.test(arn);
	}

	/**
	 * Parses a kxVolume ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKxVolumeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
		kxVolume: string;
	} {
		const match = KxVolumeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid kxVolume ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
			kxVolume: match.groups!.kxVolume,
		};
	}

	/**
	 * Builds an ARN for the user resource.
	 */
	static user(props: {
		/** The UserId component of the ARN. */
		readonly userId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:finspace:${props.region ?? "*"}:${props.account ?? "*"}:user/${props.userId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the user resource.
	 */
	static isValidUserArn(arn: string): boolean {
		return UserArnRegex.test(arn);
	}

	/**
	 * Parses a user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		userId: string;
	} {
		const match = UserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			userId: match.groups!.userId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for finspace.
 */
export class FinspaceOperations {
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CREATE_ENVIRONMENT: string[] = [
		"finspace:CreateEnvironment",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxChangeset API call. */
	static readonly CREATE_KX_CHANGESET: string[] = [
		"finspace:CreateKxChangeset",
	];
	/** IAM actions required for the CreateKxCluster API call. */
	static readonly CREATE_KX_CLUSTER: string[] = [
		"finspace:CreateKxCluster",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxDatabase API call. */
	static readonly CREATE_KX_DATABASE: string[] = [
		"finspace:CreateKxDatabase",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxDataview API call. */
	static readonly CREATE_KX_DATAVIEW: string[] = [
		"finspace:CreateKxDataview",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxEnvironment API call. */
	static readonly CREATE_KX_ENVIRONMENT: string[] = [
		"finspace:CreateKxEnvironment",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxScalingGroup API call. */
	static readonly CREATE_KX_SCALING_GROUP: string[] = [
		"finspace:CreateKxScalingGroup",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxUser API call. */
	static readonly CREATE_KX_USER: string[] = [
		"finspace:CreateKxUser",
		"iam:PassRole",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxVolume API call. */
	static readonly CREATE_KX_VOLUME: string[] = [
		"finspace:CreateKxVolume",
		"finspace:TagResource",
	];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DELETE_ENVIRONMENT: string[] = ["finspace:DeleteEnvironment"];
	/** IAM actions required for the DeleteKxCluster API call. */
	static readonly DELETE_KX_CLUSTER: string[] = ["finspace:DeleteKxCluster"];
	/** IAM actions required for the DeleteKxClusterNode API call. */
	static readonly DELETE_KX_CLUSTER_NODE: string[] = [
		"finspace:DeleteKxClusterNode",
	];
	/** IAM actions required for the DeleteKxDatabase API call. */
	static readonly DELETE_KX_DATABASE: string[] = ["finspace:DeleteKxDatabase"];
	/** IAM actions required for the DeleteKxDataview API call. */
	static readonly DELETE_KX_DATAVIEW: string[] = ["finspace:DeleteKxDataview"];
	/** IAM actions required for the DeleteKxEnvironment API call. */
	static readonly DELETE_KX_ENVIRONMENT: string[] = [
		"finspace:DeleteKxEnvironment",
	];
	/** IAM actions required for the DeleteKxScalingGroup API call. */
	static readonly DELETE_KX_SCALING_GROUP: string[] = [
		"finspace:DeleteKxScalingGroup",
	];
	/** IAM actions required for the DeleteKxUser API call. */
	static readonly DELETE_KX_USER: string[] = ["finspace:DeleteKxUser"];
	/** IAM actions required for the DeleteKxVolume API call. */
	static readonly DELETE_KX_VOLUME: string[] = ["finspace:DeleteKxVolume"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly GET_ENVIRONMENT: string[] = ["finspace:GetEnvironment"];
	/** IAM actions required for the GetKxChangeset API call. */
	static readonly GET_KX_CHANGESET: string[] = ["finspace:GetKxChangeset"];
	/** IAM actions required for the GetKxCluster API call. */
	static readonly GET_KX_CLUSTER: string[] = ["finspace:GetKxCluster"];
	/** IAM actions required for the GetKxConnectionString API call. */
	static readonly GET_KX_CONNECTION_STRING: string[] = [
		"finspace:GetKxConnectionString",
	];
	/** IAM actions required for the GetKxDatabase API call. */
	static readonly GET_KX_DATABASE: string[] = ["finspace:GetKxDatabase"];
	/** IAM actions required for the GetKxDataview API call. */
	static readonly GET_KX_DATAVIEW: string[] = ["finspace:GetKxDataview"];
	/** IAM actions required for the GetKxEnvironment API call. */
	static readonly GET_KX_ENVIRONMENT: string[] = ["finspace:GetKxEnvironment"];
	/** IAM actions required for the GetKxScalingGroup API call. */
	static readonly GET_KX_SCALING_GROUP: string[] = [
		"finspace:GetKxScalingGroup",
	];
	/** IAM actions required for the GetKxUser API call. */
	static readonly GET_KX_USER: string[] = ["finspace:GetKxUser"];
	/** IAM actions required for the GetKxVolume API call. */
	static readonly GET_KX_VOLUME: string[] = ["finspace:GetKxVolume"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly LIST_ENVIRONMENTS: string[] = ["finspace:ListEnvironments"];
	/** IAM actions required for the ListKxChangesets API call. */
	static readonly LIST_KX_CHANGESETS: string[] = ["finspace:ListKxChangesets"];
	/** IAM actions required for the ListKxClusterNodes API call. */
	static readonly LIST_KX_CLUSTER_NODES: string[] = [
		"finspace:ListKxClusterNodes",
	];
	/** IAM actions required for the ListKxClusters API call. */
	static readonly LIST_KX_CLUSTERS: string[] = ["finspace:ListKxClusters"];
	/** IAM actions required for the ListKxDatabases API call. */
	static readonly LIST_KX_DATABASES: string[] = ["finspace:ListKxDatabases"];
	/** IAM actions required for the ListKxDataviews API call. */
	static readonly LIST_KX_DATAVIEWS: string[] = ["finspace:ListKxDataviews"];
	/** IAM actions required for the ListKxEnvironments API call. */
	static readonly LIST_KX_ENVIRONMENTS: string[] = [
		"finspace:ListKxEnvironments",
	];
	/** IAM actions required for the ListKxScalingGroups API call. */
	static readonly LIST_KX_SCALING_GROUPS: string[] = [
		"finspace:ListKxScalingGroups",
	];
	/** IAM actions required for the ListKxUsers API call. */
	static readonly LIST_KX_USERS: string[] = ["finspace:ListKxUsers"];
	/** IAM actions required for the ListKxVolumes API call. */
	static readonly LIST_KX_VOLUMES: string[] = ["finspace:ListKxVolumes"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"finspace:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["finspace:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["finspace:UntagResource"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UPDATE_ENVIRONMENT: string[] = ["finspace:UpdateEnvironment"];
	/** IAM actions required for the UpdateKxClusterCodeConfiguration API call. */
	static readonly UPDATE_KX_CLUSTER_CODE_CONFIGURATION: string[] = [
		"finspace:UpdateKxClusterCodeConfiguration",
	];
	/** IAM actions required for the UpdateKxClusterDatabases API call. */
	static readonly UPDATE_KX_CLUSTER_DATABASES: string[] = [
		"finspace:UpdateKxClusterDatabases",
	];
	/** IAM actions required for the UpdateKxDatabase API call. */
	static readonly UPDATE_KX_DATABASE: string[] = ["finspace:UpdateKxDatabase"];
	/** IAM actions required for the UpdateKxDataview API call. */
	static readonly UPDATE_KX_DATAVIEW: string[] = ["finspace:UpdateKxDataview"];
	/** IAM actions required for the UpdateKxEnvironment API call. */
	static readonly UPDATE_KX_ENVIRONMENT: string[] = [
		"finspace:UpdateKxEnvironment",
	];
	/** IAM actions required for the UpdateKxEnvironmentNetwork API call. */
	static readonly UPDATE_KX_ENVIRONMENT_NETWORK: string[] = [
		"finspace:UpdateKxEnvironmentNetwork",
	];
	/** IAM actions required for the UpdateKxUser API call. */
	static readonly UPDATE_KX_USER: string[] = [
		"iam:PassRole",
		"finspace:UpdateKxUser",
	];
	/** IAM actions required for the UpdateKxVolume API call. */
	static readonly UPDATE_KX_VOLUME: string[] = ["finspace:UpdateKxVolume"];
}

/**
 * Condition key constants and builders for finspace.
 */
export class FinspaceConditions {
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CREATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxCluster action. */
	static readonly CREATE_KX_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxDatabase action. */
	static readonly CREATE_KX_DATABASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxDataview action. */
	static readonly CREATE_KX_DATAVIEW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxEnvironment action. */
	static readonly CREATE_KX_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxScalingGroup action. */
	static readonly CREATE_KX_SCALING_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxUser action. */
	static readonly CREATE_KX_USER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxVolume action. */
	static readonly CREATE_KX_VOLUME_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CREATE_USER_CONDITION_KEYS: string[] = [
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
