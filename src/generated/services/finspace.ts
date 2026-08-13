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
	static readonly ConnectKxCluster = "finspace:ConnectKxCluster";
	/** [Write] finspace:CreateEnvironment */
	static readonly CreateEnvironment = "finspace:CreateEnvironment";
	/** [Write] finspace:CreateKxChangeset */
	static readonly CreateKxChangeset = "finspace:CreateKxChangeset";
	/** [Write] finspace:CreateKxCluster */
	static readonly CreateKxCluster = "finspace:CreateKxCluster";
	/** [Write] finspace:CreateKxDatabase */
	static readonly CreateKxDatabase = "finspace:CreateKxDatabase";
	/** [Write] finspace:CreateKxDataview */
	static readonly CreateKxDataview = "finspace:CreateKxDataview";
	/** [Write] finspace:CreateKxEnvironment */
	static readonly CreateKxEnvironment = "finspace:CreateKxEnvironment";
	/** [Write] finspace:CreateKxScalingGroup */
	static readonly CreateKxScalingGroup = "finspace:CreateKxScalingGroup";
	/** [Write] finspace:CreateKxUser */
	static readonly CreateKxUser = "finspace:CreateKxUser";
	/** [Write] finspace:CreateKxVolume */
	static readonly CreateKxVolume = "finspace:CreateKxVolume";
	/** [Write] finspace:CreateUser */
	static readonly CreateUser = "finspace:CreateUser";
	/** [Write] finspace:DeleteEnvironment */
	static readonly DeleteEnvironment = "finspace:DeleteEnvironment";
	/** [Write] finspace:DeleteKxCluster */
	static readonly DeleteKxCluster = "finspace:DeleteKxCluster";
	/** [Write] finspace:DeleteKxClusterNode */
	static readonly DeleteKxClusterNode = "finspace:DeleteKxClusterNode";
	/** [Write] finspace:DeleteKxDatabase */
	static readonly DeleteKxDatabase = "finspace:DeleteKxDatabase";
	/** [Write] finspace:DeleteKxDataview */
	static readonly DeleteKxDataview = "finspace:DeleteKxDataview";
	/** [Write] finspace:DeleteKxEnvironment */
	static readonly DeleteKxEnvironment = "finspace:DeleteKxEnvironment";
	/** [Write] finspace:DeleteKxScalingGroup */
	static readonly DeleteKxScalingGroup = "finspace:DeleteKxScalingGroup";
	/** [Write] finspace:DeleteKxUser */
	static readonly DeleteKxUser = "finspace:DeleteKxUser";
	/** [Write] finspace:DeleteKxVolume */
	static readonly DeleteKxVolume = "finspace:DeleteKxVolume";
	/** [Read] finspace:GetEnvironment */
	static readonly actionGetEnvironment = "finspace:GetEnvironment";
	/** [Read] finspace:GetKxChangeset */
	static readonly actionGetKxChangeset = "finspace:GetKxChangeset";
	/** [Read] finspace:GetKxCluster */
	static readonly actionGetKxCluster = "finspace:GetKxCluster";
	/** [Read] finspace:GetKxConnectionString */
	static readonly actionGetKxConnectionString =
		"finspace:GetKxConnectionString";
	/** [Read] finspace:GetKxDatabase */
	static readonly actionGetKxDatabase = "finspace:GetKxDatabase";
	/** [Read] finspace:GetKxDataview */
	static readonly actionGetKxDataview = "finspace:GetKxDataview";
	/** [Read] finspace:GetKxEnvironment */
	static readonly actionGetKxEnvironment = "finspace:GetKxEnvironment";
	/** [Read] finspace:GetKxScalingGroup */
	static readonly actionGetKxScalingGroup = "finspace:GetKxScalingGroup";
	/** [Read] finspace:GetKxUser */
	static readonly actionGetKxUser = "finspace:GetKxUser";
	/** [Read] finspace:GetKxVolume */
	static readonly actionGetKxVolume = "finspace:GetKxVolume";
	/** [Read] finspace:GetLoadSampleDataSetGroupIntoEnvironmentStatus */
	static readonly actionGetLoadSampleDataSetGroupIntoEnvironmentStatus =
		"finspace:GetLoadSampleDataSetGroupIntoEnvironmentStatus";
	/** [Read] finspace:GetUser */
	static readonly actionGetUser = "finspace:GetUser";
	/** [List] finspace:ListEnvironments */
	static readonly ListEnvironments = "finspace:ListEnvironments";
	/** [List] finspace:ListKxChangesets */
	static readonly ListKxChangesets = "finspace:ListKxChangesets";
	/** [List] finspace:ListKxClusterNodes */
	static readonly ListKxClusterNodes = "finspace:ListKxClusterNodes";
	/** [List] finspace:ListKxClusters */
	static readonly ListKxClusters = "finspace:ListKxClusters";
	/** [List] finspace:ListKxDatabases */
	static readonly ListKxDatabases = "finspace:ListKxDatabases";
	/** [List] finspace:ListKxDataviews */
	static readonly ListKxDataviews = "finspace:ListKxDataviews";
	/** [List] finspace:ListKxEnvironments */
	static readonly ListKxEnvironments = "finspace:ListKxEnvironments";
	/** [List] finspace:ListKxScalingGroups */
	static readonly ListKxScalingGroups = "finspace:ListKxScalingGroups";
	/** [List] finspace:ListKxUsers */
	static readonly ListKxUsers = "finspace:ListKxUsers";
	/** [List] finspace:ListKxVolumes */
	static readonly ListKxVolumes = "finspace:ListKxVolumes";
	/** [List] finspace:ListTagsForResource */
	static readonly ListTagsForResource = "finspace:ListTagsForResource";
	/** [List] finspace:ListUsers */
	static readonly ListUsers = "finspace:ListUsers";
	/** [Write] finspace:LoadSampleDataSetGroupIntoEnvironment */
	static readonly LoadSampleDataSetGroupIntoEnvironment =
		"finspace:LoadSampleDataSetGroupIntoEnvironment";
	/** [Write] finspace:MountKxDatabase */
	static readonly MountKxDatabase = "finspace:MountKxDatabase";
	/** [Write] finspace:ResetUserPassword */
	static readonly ResetUserPassword = "finspace:ResetUserPassword";
	/** [Tagging] finspace:TagResource */
	static readonly TagResource = "finspace:TagResource";
	/** [Tagging] finspace:UntagResource */
	static readonly UntagResource = "finspace:UntagResource";
	/** [Write] finspace:UpdateEnvironment */
	static readonly UpdateEnvironment = "finspace:UpdateEnvironment";
	/** [Write] finspace:UpdateKxClusterCodeConfiguration */
	static readonly UpdateKxClusterCodeConfiguration =
		"finspace:UpdateKxClusterCodeConfiguration";
	/** [Write] finspace:UpdateKxClusterDatabases */
	static readonly UpdateKxClusterDatabases =
		"finspace:UpdateKxClusterDatabases";
	/** [Write] finspace:UpdateKxDatabase */
	static readonly UpdateKxDatabase = "finspace:UpdateKxDatabase";
	/** [Write] finspace:UpdateKxDataview */
	static readonly UpdateKxDataview = "finspace:UpdateKxDataview";
	/** [Write] finspace:UpdateKxEnvironment */
	static readonly UpdateKxEnvironment = "finspace:UpdateKxEnvironment";
	/** [Write] finspace:UpdateKxEnvironmentNetwork */
	static readonly UpdateKxEnvironmentNetwork =
		"finspace:UpdateKxEnvironmentNetwork";
	/** [Write] finspace:UpdateKxUser */
	static readonly UpdateKxUser = "finspace:UpdateKxUser";
	/** [Write] finspace:UpdateKxVolume */
	static readonly UpdateKxVolume = "finspace:UpdateKxVolume";
	/** [Write] finspace:UpdateUser */
	static readonly UpdateUser = "finspace:UpdateUser";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		FinspaceActions.actionGetEnvironment,
		FinspaceActions.actionGetKxChangeset,
		FinspaceActions.actionGetKxCluster,
		FinspaceActions.actionGetKxConnectionString,
		FinspaceActions.actionGetKxDatabase,
		FinspaceActions.actionGetKxDataview,
		FinspaceActions.actionGetKxEnvironment,
		FinspaceActions.actionGetKxScalingGroup,
		FinspaceActions.actionGetKxUser,
		FinspaceActions.actionGetKxVolume,
		FinspaceActions.actionGetLoadSampleDataSetGroupIntoEnvironmentStatus,
		FinspaceActions.actionGetUser,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		FinspaceActions.ConnectKxCluster,
		FinspaceActions.CreateEnvironment,
		FinspaceActions.CreateKxChangeset,
		FinspaceActions.CreateKxCluster,
		FinspaceActions.CreateKxDatabase,
		FinspaceActions.CreateKxDataview,
		FinspaceActions.CreateKxEnvironment,
		FinspaceActions.CreateKxScalingGroup,
		FinspaceActions.CreateKxUser,
		FinspaceActions.CreateKxVolume,
		FinspaceActions.CreateUser,
		FinspaceActions.DeleteEnvironment,
		FinspaceActions.DeleteKxCluster,
		FinspaceActions.DeleteKxClusterNode,
		FinspaceActions.DeleteKxDatabase,
		FinspaceActions.DeleteKxDataview,
		FinspaceActions.DeleteKxEnvironment,
		FinspaceActions.DeleteKxScalingGroup,
		FinspaceActions.DeleteKxUser,
		FinspaceActions.DeleteKxVolume,
		FinspaceActions.LoadSampleDataSetGroupIntoEnvironment,
		FinspaceActions.MountKxDatabase,
		FinspaceActions.ResetUserPassword,
		FinspaceActions.UpdateEnvironment,
		FinspaceActions.UpdateKxClusterCodeConfiguration,
		FinspaceActions.UpdateKxClusterDatabases,
		FinspaceActions.UpdateKxDatabase,
		FinspaceActions.UpdateKxDataview,
		FinspaceActions.UpdateKxEnvironment,
		FinspaceActions.UpdateKxEnvironmentNetwork,
		FinspaceActions.UpdateKxUser,
		FinspaceActions.UpdateKxVolume,
		FinspaceActions.UpdateUser,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		FinspaceActions.ListEnvironments,
		FinspaceActions.ListKxChangesets,
		FinspaceActions.ListKxClusterNodes,
		FinspaceActions.ListKxClusters,
		FinspaceActions.ListKxDatabases,
		FinspaceActions.ListKxDataviews,
		FinspaceActions.ListKxEnvironments,
		FinspaceActions.ListKxScalingGroups,
		FinspaceActions.ListKxUsers,
		FinspaceActions.ListKxVolumes,
		FinspaceActions.ListTagsForResource,
		FinspaceActions.ListUsers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		FinspaceActions.TagResource,
		FinspaceActions.UntagResource,
	];
}

/**
 * Properties for building a environment ARN.
 */
export interface FinspaceEnvironmentArnProps {
	/** The EnvironmentId component of the ARN. */
	readonly environmentId: string;
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
export interface FinspaceEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
}

/**
 * Properties for building a kxCluster ARN.
 */
export interface FinspaceKxClusterArnProps {
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
}

/**
 * Parsed components of a kxCluster ARN.
 */
export interface FinspaceKxClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The KxCluster component. */
	readonly kxCluster: string;
}

/**
 * Properties for building a kxDatabase ARN.
 */
export interface FinspaceKxDatabaseArnProps {
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
}

/**
 * Parsed components of a kxDatabase ARN.
 */
export interface FinspaceKxDatabaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The KxDatabase component. */
	readonly kxDatabase: string;
}

/**
 * Properties for building a kxDataview ARN.
 */
export interface FinspaceKxDataviewArnProps {
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
}

/**
 * Parsed components of a kxDataview ARN.
 */
export interface FinspaceKxDataviewArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The KxDatabase component. */
	readonly kxDatabase: string;
	/** The KxDataview component. */
	readonly kxDataview: string;
}

/**
 * Properties for building a kxEnvironment ARN.
 */
export interface FinspaceKxEnvironmentArnProps {
	/** The EnvironmentId component of the ARN. */
	readonly environmentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a kxEnvironment ARN.
 */
export interface FinspaceKxEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
}

/**
 * Properties for building a kxScalingGroup ARN.
 */
export interface FinspaceKxScalingGroupArnProps {
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
}

/**
 * Parsed components of a kxScalingGroup ARN.
 */
export interface FinspaceKxScalingGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The KxScalingGroup component. */
	readonly kxScalingGroup: string;
}

/**
 * Properties for building a kxUser ARN.
 */
export interface FinspaceKxUserArnProps {
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
}

/**
 * Parsed components of a kxUser ARN.
 */
export interface FinspaceKxUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The UserName component. */
	readonly userName: string;
}

/**
 * Properties for building a kxVolume ARN.
 */
export interface FinspaceKxVolumeArnProps {
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
}

/**
 * Parsed components of a kxVolume ARN.
 */
export interface FinspaceKxVolumeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The KxVolume component. */
	readonly kxVolume: string;
}

/**
 * Properties for building a user ARN.
 */
export interface FinspaceUserArnProps {
	/** The UserId component of the ARN. */
	readonly userId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a user ARN.
 */
export interface FinspaceUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UserId component. */
	readonly userId: string;
}

const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<environmentId>[^:/?]+)$/;
const KxClusterArnRegex =
	/^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment\/(?<environmentId>[^:/?]+)\/kxCluster\/(?<kxCluster>[^:/?]+)$/;
const KxDatabaseArnRegex =
	/^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment\/(?<environmentId>[^:/?]+)\/kxDatabase\/(?<kxDatabase>[^:/?]+)$/;
const KxDataviewArnRegex =
	/^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment\/(?<environmentId>[^:/?]+)\/kxDatabase\/(?<kxDatabase>[^:/?]+)\/kxDataview\/(?<kxDataview>[^:/?]+)$/;
const KxEnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment\/(?<environmentId>[^:/?]+)$/;
const KxScalingGroupArnRegex =
	/^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment\/(?<environmentId>[^:/?]+)\/kxScalingGroup\/(?<kxScalingGroup>[^:/?]+)$/;
const KxUserArnRegex =
	/^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment\/(?<environmentId>[^:/?]+)\/kxUser\/(?<userName>[^:/?]+)$/;
const KxVolumeArnRegex =
	/^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):kxEnvironment\/(?<environmentId>[^:/?]+)\/kxVolume\/(?<kxVolume>[^:/?]+)$/;
const UserArnRegex =
	/^arn:(?<partition>[^:]+):finspace:(?<region>[^:]*):(?<account>[^:]*):user\/(?<userId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for finspace resources.
 */
export class FinspaceResources {
	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: FinspaceEnvironmentArnProps): string {
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
	static parseEnvironmentArn(arn: string): FinspaceEnvironmentArnComponents {
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
	static kxCluster(props: FinspaceKxClusterArnProps): string {
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
	static parseKxClusterArn(arn: string): FinspaceKxClusterArnComponents {
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
	static kxDatabase(props: FinspaceKxDatabaseArnProps): string {
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
	static parseKxDatabaseArn(arn: string): FinspaceKxDatabaseArnComponents {
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
	static kxDataview(props: FinspaceKxDataviewArnProps): string {
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
	static parseKxDataviewArn(arn: string): FinspaceKxDataviewArnComponents {
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
	static kxEnvironment(props: FinspaceKxEnvironmentArnProps): string {
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
	static parseKxEnvironmentArn(
		arn: string,
	): FinspaceKxEnvironmentArnComponents {
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
	static kxScalingGroup(props: FinspaceKxScalingGroupArnProps): string {
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
	static parseKxScalingGroupArn(
		arn: string,
	): FinspaceKxScalingGroupArnComponents {
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
	static kxUser(props: FinspaceKxUserArnProps): string {
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
	static parseKxUserArn(arn: string): FinspaceKxUserArnComponents {
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
	static kxVolume(props: FinspaceKxVolumeArnProps): string {
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
	static parseKxVolumeArn(arn: string): FinspaceKxVolumeArnComponents {
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
	static user(props: FinspaceUserArnProps): string {
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
	static parseUserArn(arn: string): FinspaceUserArnComponents {
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
	static readonly CreateEnvironment: string[] = [
		"finspace:CreateEnvironment",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxChangeset API call. */
	static readonly CreateKxChangeset: string[] = ["finspace:CreateKxChangeset"];
	/** IAM actions required for the CreateKxCluster API call. */
	static readonly CreateKxCluster: string[] = [
		"finspace:CreateKxCluster",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxDatabase API call. */
	static readonly CreateKxDatabase: string[] = [
		"finspace:CreateKxDatabase",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxDataview API call. */
	static readonly CreateKxDataview: string[] = [
		"finspace:CreateKxDataview",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxEnvironment API call. */
	static readonly CreateKxEnvironment: string[] = [
		"finspace:CreateKxEnvironment",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxScalingGroup API call. */
	static readonly CreateKxScalingGroup: string[] = [
		"finspace:CreateKxScalingGroup",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxUser API call. */
	static readonly CreateKxUser: string[] = [
		"finspace:CreateKxUser",
		"iam:PassRole",
		"finspace:TagResource",
	];
	/** IAM actions required for the CreateKxVolume API call. */
	static readonly CreateKxVolume: string[] = [
		"finspace:CreateKxVolume",
		"finspace:TagResource",
	];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DeleteEnvironment: string[] = ["finspace:DeleteEnvironment"];
	/** IAM actions required for the DeleteKxCluster API call. */
	static readonly DeleteKxCluster: string[] = ["finspace:DeleteKxCluster"];
	/** IAM actions required for the DeleteKxClusterNode API call. */
	static readonly DeleteKxClusterNode: string[] = [
		"finspace:DeleteKxClusterNode",
	];
	/** IAM actions required for the DeleteKxDatabase API call. */
	static readonly DeleteKxDatabase: string[] = ["finspace:DeleteKxDatabase"];
	/** IAM actions required for the DeleteKxDataview API call. */
	static readonly DeleteKxDataview: string[] = ["finspace:DeleteKxDataview"];
	/** IAM actions required for the DeleteKxEnvironment API call. */
	static readonly DeleteKxEnvironment: string[] = [
		"finspace:DeleteKxEnvironment",
	];
	/** IAM actions required for the DeleteKxScalingGroup API call. */
	static readonly DeleteKxScalingGroup: string[] = [
		"finspace:DeleteKxScalingGroup",
	];
	/** IAM actions required for the DeleteKxUser API call. */
	static readonly DeleteKxUser: string[] = ["finspace:DeleteKxUser"];
	/** IAM actions required for the DeleteKxVolume API call. */
	static readonly DeleteKxVolume: string[] = ["finspace:DeleteKxVolume"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly opGetEnvironment: string[] = ["finspace:GetEnvironment"];
	/** IAM actions required for the GetKxChangeset API call. */
	static readonly opGetKxChangeset: string[] = ["finspace:GetKxChangeset"];
	/** IAM actions required for the GetKxCluster API call. */
	static readonly opGetKxCluster: string[] = ["finspace:GetKxCluster"];
	/** IAM actions required for the GetKxConnectionString API call. */
	static readonly opGetKxConnectionString: string[] = [
		"finspace:GetKxConnectionString",
	];
	/** IAM actions required for the GetKxDatabase API call. */
	static readonly opGetKxDatabase: string[] = ["finspace:GetKxDatabase"];
	/** IAM actions required for the GetKxDataview API call. */
	static readonly opGetKxDataview: string[] = ["finspace:GetKxDataview"];
	/** IAM actions required for the GetKxEnvironment API call. */
	static readonly opGetKxEnvironment: string[] = ["finspace:GetKxEnvironment"];
	/** IAM actions required for the GetKxScalingGroup API call. */
	static readonly opGetKxScalingGroup: string[] = [
		"finspace:GetKxScalingGroup",
	];
	/** IAM actions required for the GetKxUser API call. */
	static readonly opGetKxUser: string[] = ["finspace:GetKxUser"];
	/** IAM actions required for the GetKxVolume API call. */
	static readonly opGetKxVolume: string[] = ["finspace:GetKxVolume"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly ListEnvironments: string[] = ["finspace:ListEnvironments"];
	/** IAM actions required for the ListKxChangesets API call. */
	static readonly ListKxChangesets: string[] = ["finspace:ListKxChangesets"];
	/** IAM actions required for the ListKxClusterNodes API call. */
	static readonly ListKxClusterNodes: string[] = [
		"finspace:ListKxClusterNodes",
	];
	/** IAM actions required for the ListKxClusters API call. */
	static readonly ListKxClusters: string[] = ["finspace:ListKxClusters"];
	/** IAM actions required for the ListKxDatabases API call. */
	static readonly ListKxDatabases: string[] = ["finspace:ListKxDatabases"];
	/** IAM actions required for the ListKxDataviews API call. */
	static readonly ListKxDataviews: string[] = ["finspace:ListKxDataviews"];
	/** IAM actions required for the ListKxEnvironments API call. */
	static readonly ListKxEnvironments: string[] = [
		"finspace:ListKxEnvironments",
	];
	/** IAM actions required for the ListKxScalingGroups API call. */
	static readonly ListKxScalingGroups: string[] = [
		"finspace:ListKxScalingGroups",
	];
	/** IAM actions required for the ListKxUsers API call. */
	static readonly ListKxUsers: string[] = ["finspace:ListKxUsers"];
	/** IAM actions required for the ListKxVolumes API call. */
	static readonly ListKxVolumes: string[] = ["finspace:ListKxVolumes"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"finspace:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["finspace:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["finspace:UntagResource"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UpdateEnvironment: string[] = ["finspace:UpdateEnvironment"];
	/** IAM actions required for the UpdateKxClusterCodeConfiguration API call. */
	static readonly UpdateKxClusterCodeConfiguration: string[] = [
		"finspace:UpdateKxClusterCodeConfiguration",
	];
	/** IAM actions required for the UpdateKxClusterDatabases API call. */
	static readonly UpdateKxClusterDatabases: string[] = [
		"finspace:UpdateKxClusterDatabases",
	];
	/** IAM actions required for the UpdateKxDatabase API call. */
	static readonly UpdateKxDatabase: string[] = ["finspace:UpdateKxDatabase"];
	/** IAM actions required for the UpdateKxDataview API call. */
	static readonly UpdateKxDataview: string[] = ["finspace:UpdateKxDataview"];
	/** IAM actions required for the UpdateKxEnvironment API call. */
	static readonly UpdateKxEnvironment: string[] = [
		"finspace:UpdateKxEnvironment",
	];
	/** IAM actions required for the UpdateKxEnvironmentNetwork API call. */
	static readonly UpdateKxEnvironmentNetwork: string[] = [
		"finspace:UpdateKxEnvironmentNetwork",
	];
	/** IAM actions required for the UpdateKxUser API call. */
	static readonly UpdateKxUser: string[] = [
		"iam:PassRole",
		"finspace:UpdateKxUser",
	];
	/** IAM actions required for the UpdateKxVolume API call. */
	static readonly UpdateKxVolume: string[] = ["finspace:UpdateKxVolume"];
}

/**
 * Condition key constants and builders for finspace.
 */
export class FinspaceConditions {
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CreateEnvironmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxCluster action. */
	static readonly CreateKxClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxDatabase action. */
	static readonly CreateKxDatabaseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxDataview action. */
	static readonly CreateKxDataviewConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxEnvironment action. */
	static readonly CreateKxEnvironmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxScalingGroup action. */
	static readonly CreateKxScalingGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxUser action. */
	static readonly CreateKxUserConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKxVolume action. */
	static readonly CreateKxVolumeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CreateUserConditionKeys: string[] = [
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
