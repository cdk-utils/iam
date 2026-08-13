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
	static readonly BACKUP = "elasticfilesystem:Backup";
	/** [Read] elasticfilesystem:ClientMount */
	static readonly CLIENT_MOUNT = "elasticfilesystem:ClientMount";
	/** [Write] elasticfilesystem:ClientRootAccess */
	static readonly CLIENT_ROOT_ACCESS = "elasticfilesystem:ClientRootAccess";
	/** [Write] elasticfilesystem:ClientWrite */
	static readonly CLIENT_WRITE = "elasticfilesystem:ClientWrite";
	/** [Write] elasticfilesystem:CreateAccessPoint */
	static readonly CREATE_ACCESS_POINT = "elasticfilesystem:CreateAccessPoint";
	/** [Write] elasticfilesystem:CreateFileSystem */
	static readonly CREATE_FILE_SYSTEM = "elasticfilesystem:CreateFileSystem";
	/** [Write] elasticfilesystem:CreateMountTarget */
	static readonly CREATE_MOUNT_TARGET = "elasticfilesystem:CreateMountTarget";
	/** [Write] elasticfilesystem:CreateReplicationConfiguration */
	static readonly CREATE_REPLICATION_CONFIGURATION =
		"elasticfilesystem:CreateReplicationConfiguration";
	/** [Tagging] elasticfilesystem:CreateTags */
	static readonly CREATE_TAGS = "elasticfilesystem:CreateTags";
	/** [Write] elasticfilesystem:DeleteAccessPoint */
	static readonly DELETE_ACCESS_POINT = "elasticfilesystem:DeleteAccessPoint";
	/** [Write] elasticfilesystem:DeleteFileSystem */
	static readonly DELETE_FILE_SYSTEM = "elasticfilesystem:DeleteFileSystem";
	/** [PermissionManagement] elasticfilesystem:DeleteFileSystemPolicy */
	static readonly DELETE_FILE_SYSTEM_POLICY =
		"elasticfilesystem:DeleteFileSystemPolicy";
	/** [Write] elasticfilesystem:DeleteMountTarget */
	static readonly DELETE_MOUNT_TARGET = "elasticfilesystem:DeleteMountTarget";
	/** [Write] elasticfilesystem:DeleteReplicationConfiguration */
	static readonly DELETE_REPLICATION_CONFIGURATION =
		"elasticfilesystem:DeleteReplicationConfiguration";
	/** [Tagging] elasticfilesystem:DeleteTags */
	static readonly DELETE_TAGS = "elasticfilesystem:DeleteTags";
	/** [List] elasticfilesystem:DescribeAccessPoints */
	static readonly DESCRIBE_ACCESS_POINTS =
		"elasticfilesystem:DescribeAccessPoints";
	/** [List] elasticfilesystem:DescribeAccountPreferences */
	static readonly DESCRIBE_ACCOUNT_PREFERENCES =
		"elasticfilesystem:DescribeAccountPreferences";
	/** [Read] elasticfilesystem:DescribeBackupPolicy */
	static readonly DESCRIBE_BACKUP_POLICY =
		"elasticfilesystem:DescribeBackupPolicy";
	/** [Read] elasticfilesystem:DescribeFileSystemPolicy */
	static readonly DESCRIBE_FILE_SYSTEM_POLICY =
		"elasticfilesystem:DescribeFileSystemPolicy";
	/** [List] elasticfilesystem:DescribeFileSystems */
	static readonly DESCRIBE_FILE_SYSTEMS =
		"elasticfilesystem:DescribeFileSystems";
	/** [Read] elasticfilesystem:DescribeLifecycleConfiguration */
	static readonly DESCRIBE_LIFECYCLE_CONFIGURATION =
		"elasticfilesystem:DescribeLifecycleConfiguration";
	/** [Read] elasticfilesystem:DescribeMountTargetSecurityGroups */
	static readonly DESCRIBE_MOUNT_TARGET_SECURITY_GROUPS =
		"elasticfilesystem:DescribeMountTargetSecurityGroups";
	/** [Read] elasticfilesystem:DescribeMountTargets */
	static readonly DESCRIBE_MOUNT_TARGETS =
		"elasticfilesystem:DescribeMountTargets";
	/** [List] elasticfilesystem:DescribeReplicationConfigurations */
	static readonly DESCRIBE_REPLICATION_CONFIGURATIONS =
		"elasticfilesystem:DescribeReplicationConfigurations";
	/** [Read] elasticfilesystem:DescribeTags */
	static readonly DESCRIBE_TAGS = "elasticfilesystem:DescribeTags";
	/** [Read] elasticfilesystem:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"elasticfilesystem:ListTagsForResource";
	/** [Write] elasticfilesystem:ModifyMountTargetSecurityGroups */
	static readonly MODIFY_MOUNT_TARGET_SECURITY_GROUPS =
		"elasticfilesystem:ModifyMountTargetSecurityGroups";
	/** [Write] elasticfilesystem:PutAccountPreferences */
	static readonly PUT_ACCOUNT_PREFERENCES =
		"elasticfilesystem:PutAccountPreferences";
	/** [Write] elasticfilesystem:PutBackupPolicy */
	static readonly PUT_BACKUP_POLICY = "elasticfilesystem:PutBackupPolicy";
	/** [PermissionManagement] elasticfilesystem:PutFileSystemPolicy */
	static readonly PUT_FILE_SYSTEM_POLICY =
		"elasticfilesystem:PutFileSystemPolicy";
	/** [Write] elasticfilesystem:PutLifecycleConfiguration */
	static readonly PUT_LIFECYCLE_CONFIGURATION =
		"elasticfilesystem:PutLifecycleConfiguration";
	/** [Read] elasticfilesystem:ReplicationRead */
	static readonly REPLICATION_READ = "elasticfilesystem:ReplicationRead";
	/** [Write] elasticfilesystem:ReplicationWrite */
	static readonly REPLICATION_WRITE = "elasticfilesystem:ReplicationWrite";
	/** [Write] elasticfilesystem:Restore */
	static readonly RESTORE = "elasticfilesystem:Restore";
	/** [Tagging] elasticfilesystem:TagResource */
	static readonly TAG_RESOURCE = "elasticfilesystem:TagResource";
	/** [Tagging] elasticfilesystem:UntagResource */
	static readonly UNTAG_RESOURCE = "elasticfilesystem:UntagResource";
	/** [Write] elasticfilesystem:UpdateFileSystem */
	static readonly UPDATE_FILE_SYSTEM = "elasticfilesystem:UpdateFileSystem";
	/** [Write] elasticfilesystem:UpdateFileSystemProtection */
	static readonly UPDATE_FILE_SYSTEM_PROTECTION =
		"elasticfilesystem:UpdateFileSystemProtection";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ElasticfilesystemActions.CLIENT_MOUNT,
		ElasticfilesystemActions.DESCRIBE_BACKUP_POLICY,
		ElasticfilesystemActions.DESCRIBE_FILE_SYSTEM_POLICY,
		ElasticfilesystemActions.DESCRIBE_LIFECYCLE_CONFIGURATION,
		ElasticfilesystemActions.DESCRIBE_MOUNT_TARGET_SECURITY_GROUPS,
		ElasticfilesystemActions.DESCRIBE_MOUNT_TARGETS,
		ElasticfilesystemActions.DESCRIBE_TAGS,
		ElasticfilesystemActions.LIST_TAGS_FOR_RESOURCE,
		ElasticfilesystemActions.REPLICATION_READ,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ElasticfilesystemActions.BACKUP,
		ElasticfilesystemActions.CLIENT_ROOT_ACCESS,
		ElasticfilesystemActions.CLIENT_WRITE,
		ElasticfilesystemActions.CREATE_ACCESS_POINT,
		ElasticfilesystemActions.CREATE_FILE_SYSTEM,
		ElasticfilesystemActions.CREATE_MOUNT_TARGET,
		ElasticfilesystemActions.CREATE_REPLICATION_CONFIGURATION,
		ElasticfilesystemActions.DELETE_ACCESS_POINT,
		ElasticfilesystemActions.DELETE_FILE_SYSTEM,
		ElasticfilesystemActions.DELETE_MOUNT_TARGET,
		ElasticfilesystemActions.DELETE_REPLICATION_CONFIGURATION,
		ElasticfilesystemActions.MODIFY_MOUNT_TARGET_SECURITY_GROUPS,
		ElasticfilesystemActions.PUT_ACCOUNT_PREFERENCES,
		ElasticfilesystemActions.PUT_BACKUP_POLICY,
		ElasticfilesystemActions.PUT_LIFECYCLE_CONFIGURATION,
		ElasticfilesystemActions.REPLICATION_WRITE,
		ElasticfilesystemActions.RESTORE,
		ElasticfilesystemActions.UPDATE_FILE_SYSTEM,
		ElasticfilesystemActions.UPDATE_FILE_SYSTEM_PROTECTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ElasticfilesystemActions.DESCRIBE_ACCESS_POINTS,
		ElasticfilesystemActions.DESCRIBE_ACCOUNT_PREFERENCES,
		ElasticfilesystemActions.DESCRIBE_FILE_SYSTEMS,
		ElasticfilesystemActions.DESCRIBE_REPLICATION_CONFIGURATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		ElasticfilesystemActions.DELETE_FILE_SYSTEM_POLICY,
		ElasticfilesystemActions.PUT_FILE_SYSTEM_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ElasticfilesystemActions.CREATE_TAGS,
		ElasticfilesystemActions.DELETE_TAGS,
		ElasticfilesystemActions.TAG_RESOURCE,
		ElasticfilesystemActions.UNTAG_RESOURCE,
	];
}

const AccessPointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticfilesystem:(?<region>[^:]*):(?<account>[^:]*):access-point/(?<accessPointId>[^:/?]+)$",
);
const FileSystemArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticfilesystem:(?<region>[^:]*):(?<account>[^:]*):file-system/(?<fileSystemId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for elasticfilesystem resources.
 */
export class ElasticfilesystemResources {
	/**
	 * Builds an ARN for the access-point resource.
	 */
	static accessPoint(props: {
		/** The AccessPointId component of the ARN. */
		readonly accessPointId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAccessPointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accessPointId: string;
	} {
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
	static fileSystem(props: {
		/** The FileSystemId component of the ARN. */
		readonly fileSystemId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFileSystemArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fileSystemId: string;
	} {
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
	static readonly CREATE_ACCESS_POINT: string[] = [
		"elasticfilesystem:CreateAccessPoint",
		"elasticfilesystem:TagResource",
	];
	/** IAM actions required for the CreateFileSystem API call. */
	static readonly CREATE_FILE_SYSTEM: string[] = [
		"elasticfilesystem:CreateFileSystem",
		"elasticfilesystem:TagResource",
	];
	/** IAM actions required for the CreateMountTarget API call. */
	static readonly CREATE_MOUNT_TARGET: string[] = [
		"elasticfilesystem:CreateMountTarget",
	];
	/** IAM actions required for the CreateReplicationConfiguration API call. */
	static readonly CREATE_REPLICATION_CONFIGURATION: string[] = [
		"elasticfilesystem:CreateReplicationConfiguration",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateTags API call. */
	static readonly CREATE_TAGS: string[] = ["elasticfilesystem:CreateTags"];
	/** IAM actions required for the DeleteAccessPoint API call. */
	static readonly DELETE_ACCESS_POINT: string[] = [
		"elasticfilesystem:DeleteAccessPoint",
	];
	/** IAM actions required for the DeleteFileSystem API call. */
	static readonly DELETE_FILE_SYSTEM: string[] = [
		"elasticfilesystem:DeleteFileSystem",
	];
	/** IAM actions required for the DeleteFileSystemPolicy API call. */
	static readonly DELETE_FILE_SYSTEM_POLICY: string[] = [
		"elasticfilesystem:DeleteFileSystemPolicy",
	];
	/** IAM actions required for the DeleteMountTarget API call. */
	static readonly DELETE_MOUNT_TARGET: string[] = [
		"elasticfilesystem:DeleteMountTarget",
	];
	/** IAM actions required for the DeleteReplicationConfiguration API call. */
	static readonly DELETE_REPLICATION_CONFIGURATION: string[] = [
		"elasticfilesystem:DeleteReplicationConfiguration",
	];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DELETE_TAGS: string[] = ["elasticfilesystem:DeleteTags"];
	/** IAM actions required for the DescribeAccessPoints API call. */
	static readonly DESCRIBE_ACCESS_POINTS: string[] = [
		"elasticfilesystem:DescribeAccessPoints",
	];
	/** IAM actions required for the DescribeAccountPreferences API call. */
	static readonly DESCRIBE_ACCOUNT_PREFERENCES: string[] = [
		"elasticfilesystem:DescribeAccountPreferences",
	];
	/** IAM actions required for the DescribeBackupPolicy API call. */
	static readonly DESCRIBE_BACKUP_POLICY: string[] = [
		"elasticfilesystem:DescribeBackupPolicy",
	];
	/** IAM actions required for the DescribeFileSystemPolicy API call. */
	static readonly DESCRIBE_FILE_SYSTEM_POLICY: string[] = [
		"elasticfilesystem:DescribeFileSystemPolicy",
	];
	/** IAM actions required for the DescribeFileSystems API call. */
	static readonly DESCRIBE_FILE_SYSTEMS: string[] = [
		"elasticfilesystem:DescribeFileSystems",
	];
	/** IAM actions required for the DescribeLifecycleConfiguration API call. */
	static readonly DESCRIBE_LIFECYCLE_CONFIGURATION: string[] = [
		"elasticfilesystem:DescribeLifecycleConfiguration",
	];
	/** IAM actions required for the DescribeMountTargetSecurityGroups API call. */
	static readonly DESCRIBE_MOUNT_TARGET_SECURITY_GROUPS: string[] = [
		"elasticfilesystem:DescribeMountTargetSecurityGroups",
	];
	/** IAM actions required for the DescribeMountTargets API call. */
	static readonly DESCRIBE_MOUNT_TARGETS: string[] = [
		"elasticfilesystem:DescribeMountTargets",
	];
	/** IAM actions required for the DescribeReplicationConfigurations API call. */
	static readonly DESCRIBE_REPLICATION_CONFIGURATIONS: string[] = [
		"elasticfilesystem:DescribeReplicationConfigurations",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DESCRIBE_TAGS: string[] = ["elasticfilesystem:DescribeTags"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"elasticfilesystem:ListTagsForResource",
	];
	/** IAM actions required for the ModifyMountTargetSecurityGroups API call. */
	static readonly MODIFY_MOUNT_TARGET_SECURITY_GROUPS: string[] = [
		"elasticfilesystem:ModifyMountTargetSecurityGroups",
	];
	/** IAM actions required for the PutAccountPreferences API call. */
	static readonly PUT_ACCOUNT_PREFERENCES: string[] = [
		"elasticfilesystem:PutAccountPreferences",
	];
	/** IAM actions required for the PutBackupPolicy API call. */
	static readonly PUT_BACKUP_POLICY: string[] = [
		"elasticfilesystem:PutBackupPolicy",
	];
	/** IAM actions required for the PutFileSystemPolicy API call. */
	static readonly PUT_FILE_SYSTEM_POLICY: string[] = [
		"elasticfilesystem:PutFileSystemPolicy",
	];
	/** IAM actions required for the PutLifecycleConfiguration API call. */
	static readonly PUT_LIFECYCLE_CONFIGURATION: string[] = [
		"elasticfilesystem:PutLifecycleConfiguration",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["elasticfilesystem:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"elasticfilesystem:UntagResource",
	];
	/** IAM actions required for the UpdateFileSystem API call. */
	static readonly UPDATE_FILE_SYSTEM: string[] = [
		"elasticfilesystem:UpdateFileSystem",
	];
	/** IAM actions required for the UpdateFileSystemProtection API call. */
	static readonly UPDATE_FILE_SYSTEM_PROTECTION: string[] = [
		"elasticfilesystem:UpdateFileSystemProtection",
	];
}

/**
 * Condition key constants and builders for elasticfilesystem.
 */
export class ElasticfilesystemConditions {
	/** Condition keys applicable to the ClientMount action. */
	static readonly CLIENT_MOUNT_CONDITION_KEYS: string[] = [
		"elasticfilesystem:AccessPointArn",
		"elasticfilesystem:AccessedViaMountTarget",
	];
	/** Condition keys applicable to the ClientRootAccess action. */
	static readonly CLIENT_ROOT_ACCESS_CONDITION_KEYS: string[] = [
		"elasticfilesystem:AccessPointArn",
		"elasticfilesystem:AccessedViaMountTarget",
	];
	/** Condition keys applicable to the ClientWrite action. */
	static readonly CLIENT_WRITE_CONDITION_KEYS: string[] = [
		"elasticfilesystem:AccessPointArn",
		"elasticfilesystem:AccessedViaMountTarget",
	];
	/** Condition keys applicable to the CreateAccessPoint action. */
	static readonly CREATE_ACCESS_POINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFileSystem action. */
	static readonly CREATE_FILE_SYSTEM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticfilesystem:Encrypted",
	];
	/** Condition keys applicable to the CreateTags action. */
	static readonly CREATE_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DELETE_TAGS_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"elasticfilesystem:CreateAction",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
