// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/elasticfilesystem.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the elasticfilesystem service.
 */
export class ElasticfilesystemActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "elasticfilesystem";

	/** [Write] elasticfilesystem:Backup */
	static readonly Backup = "elasticfilesystem:Backup";
	/** [Read] elasticfilesystem:ClientMount */
	static readonly ClientMount = "elasticfilesystem:ClientMount";
	/** [Write] elasticfilesystem:ClientRootAccess */
	static readonly ClientRootAccess = "elasticfilesystem:ClientRootAccess";
	/** [Write] elasticfilesystem:ClientWrite */
	static readonly ClientWrite = "elasticfilesystem:ClientWrite";
	/** [Write] elasticfilesystem:CreateAccessPoint */
	static readonly CreateAccessPoint = "elasticfilesystem:CreateAccessPoint";
	/** [Write] elasticfilesystem:CreateFileSystem */
	static readonly CreateFileSystem = "elasticfilesystem:CreateFileSystem";
	/** [Write] elasticfilesystem:CreateMountTarget */
	static readonly CreateMountTarget = "elasticfilesystem:CreateMountTarget";
	/** [Write] elasticfilesystem:CreateReplicationConfiguration */
	static readonly CreateReplicationConfiguration =
		"elasticfilesystem:CreateReplicationConfiguration";
	/** [Tagging] elasticfilesystem:CreateTags */
	static readonly CreateTags = "elasticfilesystem:CreateTags";
	/** [Write] elasticfilesystem:DeleteAccessPoint */
	static readonly DeleteAccessPoint = "elasticfilesystem:DeleteAccessPoint";
	/** [Write] elasticfilesystem:DeleteFileSystem */
	static readonly DeleteFileSystem = "elasticfilesystem:DeleteFileSystem";
	/** [PermissionManagement] elasticfilesystem:DeleteFileSystemPolicy */
	static readonly DeleteFileSystemPolicy =
		"elasticfilesystem:DeleteFileSystemPolicy";
	/** [Write] elasticfilesystem:DeleteMountTarget */
	static readonly DeleteMountTarget = "elasticfilesystem:DeleteMountTarget";
	/** [Write] elasticfilesystem:DeleteReplicationConfiguration */
	static readonly DeleteReplicationConfiguration =
		"elasticfilesystem:DeleteReplicationConfiguration";
	/** [Tagging] elasticfilesystem:DeleteTags */
	static readonly DeleteTags = "elasticfilesystem:DeleteTags";
	/** [List] elasticfilesystem:DescribeAccessPoints */
	static readonly DescribeAccessPoints =
		"elasticfilesystem:DescribeAccessPoints";
	/** [List] elasticfilesystem:DescribeAccountPreferences */
	static readonly DescribeAccountPreferences =
		"elasticfilesystem:DescribeAccountPreferences";
	/** [Read] elasticfilesystem:DescribeBackupPolicy */
	static readonly DescribeBackupPolicy =
		"elasticfilesystem:DescribeBackupPolicy";
	/** [Read] elasticfilesystem:DescribeFileSystemPolicy */
	static readonly DescribeFileSystemPolicy =
		"elasticfilesystem:DescribeFileSystemPolicy";
	/** [List] elasticfilesystem:DescribeFileSystems */
	static readonly DescribeFileSystems = "elasticfilesystem:DescribeFileSystems";
	/** [Read] elasticfilesystem:DescribeLifecycleConfiguration */
	static readonly DescribeLifecycleConfiguration =
		"elasticfilesystem:DescribeLifecycleConfiguration";
	/** [Read] elasticfilesystem:DescribeMountTargetSecurityGroups */
	static readonly DescribeMountTargetSecurityGroups =
		"elasticfilesystem:DescribeMountTargetSecurityGroups";
	/** [Read] elasticfilesystem:DescribeMountTargets */
	static readonly DescribeMountTargets =
		"elasticfilesystem:DescribeMountTargets";
	/** [List] elasticfilesystem:DescribeReplicationConfigurations */
	static readonly DescribeReplicationConfigurations =
		"elasticfilesystem:DescribeReplicationConfigurations";
	/** [Read] elasticfilesystem:DescribeTags */
	static readonly DescribeTags = "elasticfilesystem:DescribeTags";
	/** [Read] elasticfilesystem:ListTagsForResource */
	static readonly ListTagsForResource = "elasticfilesystem:ListTagsForResource";
	/** [Write] elasticfilesystem:ModifyMountTargetSecurityGroups */
	static readonly ModifyMountTargetSecurityGroups =
		"elasticfilesystem:ModifyMountTargetSecurityGroups";
	/** [Write] elasticfilesystem:PutAccountPreferences */
	static readonly PutAccountPreferences =
		"elasticfilesystem:PutAccountPreferences";
	/** [Write] elasticfilesystem:PutBackupPolicy */
	static readonly PutBackupPolicy = "elasticfilesystem:PutBackupPolicy";
	/** [PermissionManagement] elasticfilesystem:PutFileSystemPolicy */
	static readonly PutFileSystemPolicy = "elasticfilesystem:PutFileSystemPolicy";
	/** [Write] elasticfilesystem:PutLifecycleConfiguration */
	static readonly PutLifecycleConfiguration =
		"elasticfilesystem:PutLifecycleConfiguration";
	/** [Read] elasticfilesystem:ReplicationRead */
	static readonly ReplicationRead = "elasticfilesystem:ReplicationRead";
	/** [Write] elasticfilesystem:ReplicationWrite */
	static readonly ReplicationWrite = "elasticfilesystem:ReplicationWrite";
	/** [Write] elasticfilesystem:Restore */
	static readonly Restore = "elasticfilesystem:Restore";
	/** [Tagging] elasticfilesystem:TagResource */
	static readonly TagResource = "elasticfilesystem:TagResource";
	/** [Tagging] elasticfilesystem:UntagResource */
	static readonly UntagResource = "elasticfilesystem:UntagResource";
	/** [Write] elasticfilesystem:UpdateFileSystem */
	static readonly UpdateFileSystem = "elasticfilesystem:UpdateFileSystem";
	/** [Write] elasticfilesystem:UpdateFileSystemProtection */
	static readonly UpdateFileSystemProtection =
		"elasticfilesystem:UpdateFileSystemProtection";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ElasticfilesystemActions.ClientMount,
		ElasticfilesystemActions.DescribeBackupPolicy,
		ElasticfilesystemActions.DescribeFileSystemPolicy,
		ElasticfilesystemActions.DescribeLifecycleConfiguration,
		ElasticfilesystemActions.DescribeMountTargetSecurityGroups,
		ElasticfilesystemActions.DescribeMountTargets,
		ElasticfilesystemActions.DescribeTags,
		ElasticfilesystemActions.ListTagsForResource,
		ElasticfilesystemActions.ReplicationRead,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ElasticfilesystemActions.Backup,
		ElasticfilesystemActions.ClientRootAccess,
		ElasticfilesystemActions.ClientWrite,
		ElasticfilesystemActions.CreateAccessPoint,
		ElasticfilesystemActions.CreateFileSystem,
		ElasticfilesystemActions.CreateMountTarget,
		ElasticfilesystemActions.CreateReplicationConfiguration,
		ElasticfilesystemActions.DeleteAccessPoint,
		ElasticfilesystemActions.DeleteFileSystem,
		ElasticfilesystemActions.DeleteMountTarget,
		ElasticfilesystemActions.DeleteReplicationConfiguration,
		ElasticfilesystemActions.ModifyMountTargetSecurityGroups,
		ElasticfilesystemActions.PutAccountPreferences,
		ElasticfilesystemActions.PutBackupPolicy,
		ElasticfilesystemActions.PutLifecycleConfiguration,
		ElasticfilesystemActions.ReplicationWrite,
		ElasticfilesystemActions.Restore,
		ElasticfilesystemActions.UpdateFileSystem,
		ElasticfilesystemActions.UpdateFileSystemProtection,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ElasticfilesystemActions.DescribeAccessPoints,
		ElasticfilesystemActions.DescribeAccountPreferences,
		ElasticfilesystemActions.DescribeFileSystems,
		ElasticfilesystemActions.DescribeReplicationConfigurations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ElasticfilesystemActions.DeleteFileSystemPolicy,
		ElasticfilesystemActions.PutFileSystemPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ElasticfilesystemActions.CreateTags,
		ElasticfilesystemActions.DeleteTags,
		ElasticfilesystemActions.TagResource,
		ElasticfilesystemActions.UntagResource,
	];
}

/**
 * Properties for building a access-point ARN.
 */
export interface ElasticfilesystemAccessPointArnProps {
	/** The AccessPointId component of the ARN. */
	readonly accessPointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a access-point ARN.
 */
export interface ElasticfilesystemAccessPointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccessPointId component. */
	readonly accessPointId: string;
}

/**
 * Properties for building a file-system ARN.
 */
export interface ElasticfilesystemFileSystemArnProps {
	/** The FileSystemId component of the ARN. */
	readonly fileSystemId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a file-system ARN.
 */
export interface ElasticfilesystemFileSystemArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FileSystemId component. */
	readonly fileSystemId: string;
}

const AccessPointArnRegex =
	/^arn:(?<partition>[^:]+):elasticfilesystem:(?<region>[^:]*):(?<account>[^:]*):access-point\/(?<accessPointId>[^:/?]+)$/;
const FileSystemArnRegex =
	/^arn:(?<partition>[^:]+):elasticfilesystem:(?<region>[^:]*):(?<account>[^:]*):file-system\/(?<fileSystemId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for elasticfilesystem resources.
 */
export class ElasticfilesystemResources {
	/**
	 * Builds an ARN for the access-point resource.
	 */
	static accessPoint(props: ElasticfilesystemAccessPointArnProps): string {
		return `arn:${props.partition ?? "aws"}:elasticfilesystem:${props.region ?? "*"}:${props.account ?? "*"}:access-point/${props.accessPointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the access-point resource.
	 */
	static isValidAccessPointArn(arn: string): boolean {
		return AccessPointArnRegex.test(arn);
	}

	/**
	 * Parses a access-point ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessPointArn(
		arn: string,
	): ElasticfilesystemAccessPointArnComponents {
		const match = AccessPointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid access-point ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accessPointId: match.groups!.accessPointId,
		};
	}

	/**
	 * Builds an ARN for the file-system resource.
	 */
	static fileSystem(props: ElasticfilesystemFileSystemArnProps): string {
		return `arn:${props.partition ?? "aws"}:elasticfilesystem:${props.region ?? "*"}:${props.account ?? "*"}:file-system/${props.fileSystemId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the file-system resource.
	 */
	static isValidFileSystemArn(arn: string): boolean {
		return FileSystemArnRegex.test(arn);
	}

	/**
	 * Parses a file-system ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFileSystemArn(
		arn: string,
	): ElasticfilesystemFileSystemArnComponents {
		const match = FileSystemArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid file-system ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fileSystemId: match.groups!.fileSystemId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for elasticfilesystem.
 */
export class ElasticfilesystemOperations {
	/** IAM actions required for the CreateAccessPoint API call. */
	static readonly CreateAccessPoint: string[] = [
		"elasticfilesystem:CreateAccessPoint",
		"elasticfilesystem:TagResource",
	];
	/** IAM actions required for the CreateFileSystem API call. */
	static readonly CreateFileSystem: string[] = [
		"elasticfilesystem:CreateFileSystem",
		"elasticfilesystem:TagResource",
	];
	/** IAM actions required for the CreateMountTarget API call. */
	static readonly CreateMountTarget: string[] = [
		"elasticfilesystem:CreateMountTarget",
	];
	/** IAM actions required for the CreateReplicationConfiguration API call. */
	static readonly CreateReplicationConfiguration: string[] = [
		"elasticfilesystem:CreateReplicationConfiguration",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateTags API call. */
	static readonly CreateTags: string[] = ["elasticfilesystem:CreateTags"];
	/** IAM actions required for the DeleteAccessPoint API call. */
	static readonly DeleteAccessPoint: string[] = [
		"elasticfilesystem:DeleteAccessPoint",
	];
	/** IAM actions required for the DeleteFileSystem API call. */
	static readonly DeleteFileSystem: string[] = [
		"elasticfilesystem:DeleteFileSystem",
	];
	/** IAM actions required for the DeleteFileSystemPolicy API call. */
	static readonly DeleteFileSystemPolicy: string[] = [
		"elasticfilesystem:DeleteFileSystemPolicy",
	];
	/** IAM actions required for the DeleteMountTarget API call. */
	static readonly DeleteMountTarget: string[] = [
		"elasticfilesystem:DeleteMountTarget",
	];
	/** IAM actions required for the DeleteReplicationConfiguration API call. */
	static readonly DeleteReplicationConfiguration: string[] = [
		"elasticfilesystem:DeleteReplicationConfiguration",
	];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DeleteTags: string[] = ["elasticfilesystem:DeleteTags"];
	/** IAM actions required for the DescribeAccessPoints API call. */
	static readonly DescribeAccessPoints: string[] = [
		"elasticfilesystem:DescribeAccessPoints",
	];
	/** IAM actions required for the DescribeAccountPreferences API call. */
	static readonly DescribeAccountPreferences: string[] = [
		"elasticfilesystem:DescribeAccountPreferences",
	];
	/** IAM actions required for the DescribeBackupPolicy API call. */
	static readonly DescribeBackupPolicy: string[] = [
		"elasticfilesystem:DescribeBackupPolicy",
	];
	/** IAM actions required for the DescribeFileSystemPolicy API call. */
	static readonly DescribeFileSystemPolicy: string[] = [
		"elasticfilesystem:DescribeFileSystemPolicy",
	];
	/** IAM actions required for the DescribeFileSystems API call. */
	static readonly DescribeFileSystems: string[] = [
		"elasticfilesystem:DescribeFileSystems",
	];
	/** IAM actions required for the DescribeLifecycleConfiguration API call. */
	static readonly DescribeLifecycleConfiguration: string[] = [
		"elasticfilesystem:DescribeLifecycleConfiguration",
	];
	/** IAM actions required for the DescribeMountTargetSecurityGroups API call. */
	static readonly DescribeMountTargetSecurityGroups: string[] = [
		"elasticfilesystem:DescribeMountTargetSecurityGroups",
	];
	/** IAM actions required for the DescribeMountTargets API call. */
	static readonly DescribeMountTargets: string[] = [
		"elasticfilesystem:DescribeMountTargets",
	];
	/** IAM actions required for the DescribeReplicationConfigurations API call. */
	static readonly DescribeReplicationConfigurations: string[] = [
		"elasticfilesystem:DescribeReplicationConfigurations",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DescribeTags: string[] = ["elasticfilesystem:DescribeTags"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"elasticfilesystem:ListTagsForResource",
	];
	/** IAM actions required for the ModifyMountTargetSecurityGroups API call. */
	static readonly ModifyMountTargetSecurityGroups: string[] = [
		"elasticfilesystem:ModifyMountTargetSecurityGroups",
	];
	/** IAM actions required for the PutAccountPreferences API call. */
	static readonly PutAccountPreferences: string[] = [
		"elasticfilesystem:PutAccountPreferences",
	];
	/** IAM actions required for the PutBackupPolicy API call. */
	static readonly PutBackupPolicy: string[] = [
		"elasticfilesystem:PutBackupPolicy",
	];
	/** IAM actions required for the PutFileSystemPolicy API call. */
	static readonly PutFileSystemPolicy: string[] = [
		"elasticfilesystem:PutFileSystemPolicy",
	];
	/** IAM actions required for the PutLifecycleConfiguration API call. */
	static readonly PutLifecycleConfiguration: string[] = [
		"elasticfilesystem:PutLifecycleConfiguration",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["elasticfilesystem:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["elasticfilesystem:UntagResource"];
	/** IAM actions required for the UpdateFileSystem API call. */
	static readonly UpdateFileSystem: string[] = [
		"elasticfilesystem:UpdateFileSystem",
	];
	/** IAM actions required for the UpdateFileSystemProtection API call. */
	static readonly UpdateFileSystemProtection: string[] = [
		"elasticfilesystem:UpdateFileSystemProtection",
	];
}

/**
 * Condition key constants and builders for elasticfilesystem.
 */
export class ElasticfilesystemConditions {
	/** Condition keys applicable to the ClientMount action. */
	static readonly ClientMountConditionKeys: string[] = [
		"elasticfilesystem:AccessPointArn",
		"elasticfilesystem:AccessedViaMountTarget",
	];
	/** Condition keys applicable to the ClientRootAccess action. */
	static readonly ClientRootAccessConditionKeys: string[] = [
		"elasticfilesystem:AccessPointArn",
		"elasticfilesystem:AccessedViaMountTarget",
	];
	/** Condition keys applicable to the ClientWrite action. */
	static readonly ClientWriteConditionKeys: string[] = [
		"elasticfilesystem:AccessPointArn",
		"elasticfilesystem:AccessedViaMountTarget",
	];
	/** Condition keys applicable to the CreateAccessPoint action. */
	static readonly CreateAccessPointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFileSystem action. */
	static readonly CreateFileSystemConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticfilesystem:Encrypted",
	];
	/** Condition keys applicable to the CreateTags action. */
	static readonly CreateTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DeleteTagsConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticfilesystem:CreateAction",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: elasticfilesystem:AccessPointArn (ARN) */
	static readonly ACCESS_POINT_ARN = "elasticfilesystem:AccessPointArn";
	/** Condition key: elasticfilesystem:AccessedViaMountTarget (Bool) */
	static readonly ACCESSED_VIA_MOUNT_TARGET =
		"elasticfilesystem:AccessedViaMountTarget";
	/** Condition key: elasticfilesystem:CreateAction (String) */
	static readonly CREATE_ACTION = "elasticfilesystem:CreateAction";
	/** Condition key: elasticfilesystem:Encrypted (Bool) */
	static readonly ENCRYPTED = "elasticfilesystem:Encrypted";

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
	 * Generates a condition block for `elasticfilesystem:AccessPointArn`.
	 */
	static accessPointARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "elasticfilesystem:AccessPointArn": value } };
	}

	/**
	 * Generates a condition block for `elasticfilesystem:AccessedViaMountTarget`.
	 */
	static accessedViaMountTarget(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "elasticfilesystem:AccessedViaMountTarget": value } };
	}

	/**
	 * Generates a condition block for `elasticfilesystem:CreateAction`.
	 */
	static createAction(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "elasticfilesystem:CreateAction": value } };
	}

	/**
	 * Generates a condition block for `elasticfilesystem:Encrypted`.
	 */
	static encrypted(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "elasticfilesystem:Encrypted": value } };
	}
}
