// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/fsx.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the fsx service.
 */
export class FsxActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "fsx";

	/** [Write] fsx:AssociateFileGateway */
	static readonly ASSOCIATE_FILE_GATEWAY = "fsx:AssociateFileGateway";
	/** [Write] fsx:AssociateFileSystemAliases */
	static readonly ASSOCIATE_FILE_SYSTEM_ALIASES =
		"fsx:AssociateFileSystemAliases";
	/** [PermissionManagement] fsx:BypassSnaplockEnterpriseRetention */
	static readonly BYPASS_SNAPLOCK_ENTERPRISE_RETENTION =
		"fsx:BypassSnaplockEnterpriseRetention";
	/** [Write] fsx:CancelDataRepositoryTask */
	static readonly CANCEL_DATA_REPOSITORY_TASK = "fsx:CancelDataRepositoryTask";
	/** [Write] fsx:CopyBackup */
	static readonly COPY_BACKUP = "fsx:CopyBackup";
	/** [Write] fsx:CopySnapshotAndUpdateVolume */
	static readonly COPY_SNAPSHOT_AND_UPDATE_VOLUME =
		"fsx:CopySnapshotAndUpdateVolume";
	/** [Write] fsx:CreateAndAttachS3AccessPoint */
	static readonly CREATE_AND_ATTACH_S3_ACCESS_POINT =
		"fsx:CreateAndAttachS3AccessPoint";
	/** [Write] fsx:CreateBackup */
	static readonly CREATE_BACKUP = "fsx:CreateBackup";
	/** [Write] fsx:CreateDataRepositoryAssociation */
	static readonly CREATE_DATA_REPOSITORY_ASSOCIATION =
		"fsx:CreateDataRepositoryAssociation";
	/** [Write] fsx:CreateDataRepositoryTask */
	static readonly CREATE_DATA_REPOSITORY_TASK = "fsx:CreateDataRepositoryTask";
	/** [Write] fsx:CreateFileCache */
	static readonly CREATE_FILE_CACHE = "fsx:CreateFileCache";
	/** [Write] fsx:CreateFileSystem */
	static readonly CREATE_FILE_SYSTEM = "fsx:CreateFileSystem";
	/** [Write] fsx:CreateFileSystemFromBackup */
	static readonly CREATE_FILE_SYSTEM_FROM_BACKUP =
		"fsx:CreateFileSystemFromBackup";
	/** [Write] fsx:CreateSnapshot */
	static readonly CREATE_SNAPSHOT = "fsx:CreateSnapshot";
	/** [Write] fsx:CreateStorageVirtualMachine */
	static readonly CREATE_STORAGE_VIRTUAL_MACHINE =
		"fsx:CreateStorageVirtualMachine";
	/** [Write] fsx:CreateVolume */
	static readonly CREATE_VOLUME = "fsx:CreateVolume";
	/** [Write] fsx:CreateVolumeFromBackup */
	static readonly CREATE_VOLUME_FROM_BACKUP = "fsx:CreateVolumeFromBackup";
	/** [Write] fsx:DeleteBackup */
	static readonly DELETE_BACKUP = "fsx:DeleteBackup";
	/** [Write] fsx:DeleteDataRepositoryAssociation */
	static readonly DELETE_DATA_REPOSITORY_ASSOCIATION =
		"fsx:DeleteDataRepositoryAssociation";
	/** [Write] fsx:DeleteFileCache */
	static readonly DELETE_FILE_CACHE = "fsx:DeleteFileCache";
	/** [Write] fsx:DeleteFileSystem */
	static readonly DELETE_FILE_SYSTEM = "fsx:DeleteFileSystem";
	/** [PermissionManagement] fsx:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "fsx:DeleteResourcePolicy";
	/** [Write] fsx:DeleteSnapshot */
	static readonly DELETE_SNAPSHOT = "fsx:DeleteSnapshot";
	/** [Write] fsx:DeleteStorageVirtualMachine */
	static readonly DELETE_STORAGE_VIRTUAL_MACHINE =
		"fsx:DeleteStorageVirtualMachine";
	/** [Write] fsx:DeleteVolume */
	static readonly DELETE_VOLUME = "fsx:DeleteVolume";
	/** [Read] fsx:DescribeAssociatedFileGateways */
	static readonly DESCRIBE_ASSOCIATED_FILE_GATEWAYS =
		"fsx:DescribeAssociatedFileGateways";
	/** [Read] fsx:DescribeBackups */
	static readonly DESCRIBE_BACKUPS = "fsx:DescribeBackups";
	/** [Read] fsx:DescribeDataRepositoryAssociations */
	static readonly DESCRIBE_DATA_REPOSITORY_ASSOCIATIONS =
		"fsx:DescribeDataRepositoryAssociations";
	/** [Read] fsx:DescribeDataRepositoryTasks */
	static readonly DESCRIBE_DATA_REPOSITORY_TASKS =
		"fsx:DescribeDataRepositoryTasks";
	/** [Read] fsx:DescribeFileCaches */
	static readonly DESCRIBE_FILE_CACHES = "fsx:DescribeFileCaches";
	/** [Read] fsx:DescribeFileSystemAliases */
	static readonly DESCRIBE_FILE_SYSTEM_ALIASES =
		"fsx:DescribeFileSystemAliases";
	/** [Read] fsx:DescribeFileSystems */
	static readonly DESCRIBE_FILE_SYSTEMS = "fsx:DescribeFileSystems";
	/** [Read] fsx:DescribeS3AccessPointAttachments */
	static readonly DESCRIBE_S3_ACCESS_POINT_ATTACHMENTS =
		"fsx:DescribeS3AccessPointAttachments";
	/** [Read] fsx:DescribeSharedVpcConfiguration */
	static readonly DESCRIBE_SHARED_VPC_CONFIGURATION =
		"fsx:DescribeSharedVpcConfiguration";
	/** [Read] fsx:DescribeSnapshots */
	static readonly DESCRIBE_SNAPSHOTS = "fsx:DescribeSnapshots";
	/** [Read] fsx:DescribeStorageVirtualMachines */
	static readonly DESCRIBE_STORAGE_VIRTUAL_MACHINES =
		"fsx:DescribeStorageVirtualMachines";
	/** [Read] fsx:DescribeVolumes */
	static readonly DESCRIBE_VOLUMES = "fsx:DescribeVolumes";
	/** [Write] fsx:DetachAndDeleteS3AccessPoint */
	static readonly DETACH_AND_DELETE_S3_ACCESS_POINT =
		"fsx:DetachAndDeleteS3AccessPoint";
	/** [Write] fsx:DisassociateFileGateway */
	static readonly DISASSOCIATE_FILE_GATEWAY = "fsx:DisassociateFileGateway";
	/** [Write] fsx:DisassociateFileSystemAliases */
	static readonly DISASSOCIATE_FILE_SYSTEM_ALIASES =
		"fsx:DisassociateFileSystemAliases";
	/** [PermissionManagement] fsx:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "fsx:GetResourcePolicy";
	/** [Read] fsx:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "fsx:ListTagsForResource";
	/** [PermissionManagement] fsx:ManageBackupPrincipalAssociations */
	static readonly MANAGE_BACKUP_PRINCIPAL_ASSOCIATIONS =
		"fsx:ManageBackupPrincipalAssociations";
	/** [PermissionManagement] fsx:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "fsx:PutResourcePolicy";
	/** [Write] fsx:ReleaseFileSystemNfsV3Locks */
	static readonly RELEASE_FILE_SYSTEM_NFS_V3_LOCKS =
		"fsx:ReleaseFileSystemNfsV3Locks";
	/** [Write] fsx:RestoreVolumeFromSnapshot */
	static readonly RESTORE_VOLUME_FROM_SNAPSHOT =
		"fsx:RestoreVolumeFromSnapshot";
	/** [Write] fsx:StartMisconfiguredStateRecovery */
	static readonly START_MISCONFIGURED_STATE_RECOVERY =
		"fsx:StartMisconfiguredStateRecovery";
	/** [Tagging] fsx:TagResource */
	static readonly TAG_RESOURCE = "fsx:TagResource";
	/** [Tagging] fsx:UntagResource */
	static readonly UNTAG_RESOURCE = "fsx:UntagResource";
	/** [Write] fsx:UpdateDataRepositoryAssociation */
	static readonly UPDATE_DATA_REPOSITORY_ASSOCIATION =
		"fsx:UpdateDataRepositoryAssociation";
	/** [Write] fsx:UpdateFileCache */
	static readonly UPDATE_FILE_CACHE = "fsx:UpdateFileCache";
	/** [Write] fsx:UpdateFileSystem */
	static readonly UPDATE_FILE_SYSTEM = "fsx:UpdateFileSystem";
	/** [Write] fsx:UpdateSharedVpcConfiguration */
	static readonly UPDATE_SHARED_VPC_CONFIGURATION =
		"fsx:UpdateSharedVpcConfiguration";
	/** [Write] fsx:UpdateSnapshot */
	static readonly UPDATE_SNAPSHOT = "fsx:UpdateSnapshot";
	/** [Write] fsx:UpdateStorageVirtualMachine */
	static readonly UPDATE_STORAGE_VIRTUAL_MACHINE =
		"fsx:UpdateStorageVirtualMachine";
	/** [Write] fsx:UpdateVolume */
	static readonly UPDATE_VOLUME = "fsx:UpdateVolume";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		FsxActions.DESCRIBE_ASSOCIATED_FILE_GATEWAYS,
		FsxActions.DESCRIBE_BACKUPS,
		FsxActions.DESCRIBE_DATA_REPOSITORY_ASSOCIATIONS,
		FsxActions.DESCRIBE_DATA_REPOSITORY_TASKS,
		FsxActions.DESCRIBE_FILE_CACHES,
		FsxActions.DESCRIBE_FILE_SYSTEM_ALIASES,
		FsxActions.DESCRIBE_FILE_SYSTEMS,
		FsxActions.DESCRIBE_S3_ACCESS_POINT_ATTACHMENTS,
		FsxActions.DESCRIBE_SHARED_VPC_CONFIGURATION,
		FsxActions.DESCRIBE_SNAPSHOTS,
		FsxActions.DESCRIBE_STORAGE_VIRTUAL_MACHINES,
		FsxActions.DESCRIBE_VOLUMES,
		FsxActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		FsxActions.ASSOCIATE_FILE_GATEWAY,
		FsxActions.ASSOCIATE_FILE_SYSTEM_ALIASES,
		FsxActions.CANCEL_DATA_REPOSITORY_TASK,
		FsxActions.COPY_BACKUP,
		FsxActions.COPY_SNAPSHOT_AND_UPDATE_VOLUME,
		FsxActions.CREATE_AND_ATTACH_S3_ACCESS_POINT,
		FsxActions.CREATE_BACKUP,
		FsxActions.CREATE_DATA_REPOSITORY_ASSOCIATION,
		FsxActions.CREATE_DATA_REPOSITORY_TASK,
		FsxActions.CREATE_FILE_CACHE,
		FsxActions.CREATE_FILE_SYSTEM,
		FsxActions.CREATE_FILE_SYSTEM_FROM_BACKUP,
		FsxActions.CREATE_SNAPSHOT,
		FsxActions.CREATE_STORAGE_VIRTUAL_MACHINE,
		FsxActions.CREATE_VOLUME,
		FsxActions.CREATE_VOLUME_FROM_BACKUP,
		FsxActions.DELETE_BACKUP,
		FsxActions.DELETE_DATA_REPOSITORY_ASSOCIATION,
		FsxActions.DELETE_FILE_CACHE,
		FsxActions.DELETE_FILE_SYSTEM,
		FsxActions.DELETE_SNAPSHOT,
		FsxActions.DELETE_STORAGE_VIRTUAL_MACHINE,
		FsxActions.DELETE_VOLUME,
		FsxActions.DETACH_AND_DELETE_S3_ACCESS_POINT,
		FsxActions.DISASSOCIATE_FILE_GATEWAY,
		FsxActions.DISASSOCIATE_FILE_SYSTEM_ALIASES,
		FsxActions.RELEASE_FILE_SYSTEM_NFS_V3_LOCKS,
		FsxActions.RESTORE_VOLUME_FROM_SNAPSHOT,
		FsxActions.START_MISCONFIGURED_STATE_RECOVERY,
		FsxActions.UPDATE_DATA_REPOSITORY_ASSOCIATION,
		FsxActions.UPDATE_FILE_CACHE,
		FsxActions.UPDATE_FILE_SYSTEM,
		FsxActions.UPDATE_SHARED_VPC_CONFIGURATION,
		FsxActions.UPDATE_SNAPSHOT,
		FsxActions.UPDATE_STORAGE_VIRTUAL_MACHINE,
		FsxActions.UPDATE_VOLUME,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		FsxActions.BYPASS_SNAPLOCK_ENTERPRISE_RETENTION,
		FsxActions.DELETE_RESOURCE_POLICY,
		FsxActions.GET_RESOURCE_POLICY,
		FsxActions.MANAGE_BACKUP_PRINCIPAL_ASSOCIATIONS,
		FsxActions.PUT_RESOURCE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		FsxActions.TAG_RESOURCE,
		FsxActions.UNTAG_RESOURCE,
	];
}

const AssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):association/(?<fileSystemIdOrFileCacheId>[^:/?]+)/(?<dataRepositoryAssociationId>[^:/?]+)$",
);
const BackupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):backup/(?<backupId>[^:/?]+)$",
);
const FileCacheArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):file-cache/(?<fileCacheId>[^:/?]+)$",
);
const FileSystemArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):file-system/(?<fileSystemId>[^:/?]+)$",
);
const SnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):snapshot/(?<volumeId>[^:/?]+)/(?<snapshotId>[^:/?]+)$",
);
const StorageVirtualMachineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):storage-virtual-machine/(?<fileSystemId>[^:/?]+)/(?<storageVirtualMachineId>[^:/?]+)$",
);
const TaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):task/(?<taskId>[^:/?]+)$",
);
const VolumeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):volume/(?<fileSystemId>[^:/?]+)/(?<volumeId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for fsx resources.
 */
export class FsxResources {
	/**
	 * Builds an ARN for the association resource.
	 */
	static association(props: {
		/** The FileSystemIdOrFileCacheId component of the ARN. */
		readonly fileSystemIdOrFileCacheId: string;
		/** The DataRepositoryAssociationId component of the ARN. */
		readonly dataRepositoryAssociationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:fsx:${props.region ?? "*"}:${props.account ?? "*"}:association/${props.fileSystemIdOrFileCacheId}/${props.dataRepositoryAssociationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the association resource.
	 */
	static isValidAssociationArn(arn: string): boolean {
		return AssociationArnRegex.test(arn);
	}

	/**
	 * Parses a association ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fileSystemIdOrFileCacheId: string;
		dataRepositoryAssociationId: string;
	} {
		const match = AssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid association ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fileSystemIdOrFileCacheId: match.groups!.fileSystemIdOrFileCacheId,
			dataRepositoryAssociationId: match.groups!.dataRepositoryAssociationId,
		};
	}

	/**
	 * Builds an ARN for the backup resource.
	 */
	static backup(props: {
		/** The BackupId component of the ARN. */
		readonly backupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:fsx:${props.region ?? "*"}:${props.account ?? "*"}:backup/${props.backupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the backup resource.
	 */
	static isValidBackupArn(arn: string): boolean {
		return BackupArnRegex.test(arn);
	}

	/**
	 * Parses a backup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBackupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		backupId: string;
	} {
		const match = BackupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid backup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			backupId: match.groups!.backupId,
		};
	}

	/**
	 * Builds an ARN for the file-cache resource.
	 */
	static fileCache(props: {
		/** The FileCacheId component of the ARN. */
		readonly fileCacheId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:fsx:${props.region ?? "*"}:${props.account ?? "*"}:file-cache/${props.fileCacheId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the file-cache resource.
	 */
	static isValidFileCacheArn(arn: string): boolean {
		return FileCacheArnRegex.test(arn);
	}

	/**
	 * Parses a file-cache ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFileCacheArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fileCacheId: string;
	} {
		const match = FileCacheArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid file-cache ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fileCacheId: match.groups!.fileCacheId,
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
		return `arn:${props.partition ?? "aws"}:fsx:${props.region ?? "*"}:${props.account ?? "*"}:file-system/${props.fileSystemId}`;
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

	/**
	 * Builds an ARN for the snapshot resource.
	 */
	static snapshot(props: {
		/** The VolumeId component of the ARN. */
		readonly volumeId: string;
		/** The SnapshotId component of the ARN. */
		readonly snapshotId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:fsx:${props.region ?? "*"}:${props.account ?? "*"}:snapshot/${props.volumeId}/${props.snapshotId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the snapshot resource.
	 */
	static isValidSnapshotArn(arn: string): boolean {
		return SnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		volumeId: string;
		snapshotId: string;
	} {
		const match = SnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			volumeId: match.groups!.volumeId,
			snapshotId: match.groups!.snapshotId,
		};
	}

	/**
	 * Builds an ARN for the storage-virtual-machine resource.
	 */
	static storageVirtualMachine(props: {
		/** The FileSystemId component of the ARN. */
		readonly fileSystemId: string;
		/** The StorageVirtualMachineId component of the ARN. */
		readonly storageVirtualMachineId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:fsx:${props.region ?? "*"}:${props.account ?? "*"}:storage-virtual-machine/${props.fileSystemId}/${props.storageVirtualMachineId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the storage-virtual-machine resource.
	 */
	static isValidStorageVirtualMachineArn(arn: string): boolean {
		return StorageVirtualMachineArnRegex.test(arn);
	}

	/**
	 * Parses a storage-virtual-machine ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStorageVirtualMachineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fileSystemId: string;
		storageVirtualMachineId: string;
	} {
		const match = StorageVirtualMachineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid storage-virtual-machine ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fileSystemId: match.groups!.fileSystemId,
			storageVirtualMachineId: match.groups!.storageVirtualMachineId,
		};
	}

	/**
	 * Builds an ARN for the task resource.
	 */
	static task(props: {
		/** The TaskId component of the ARN. */
		readonly taskId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:fsx:${props.region ?? "*"}:${props.account ?? "*"}:task/${props.taskId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the task resource.
	 */
	static isValidTaskArn(arn: string): boolean {
		return TaskArnRegex.test(arn);
	}

	/**
	 * Parses a task ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		taskId: string;
	} {
		const match = TaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid task ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			taskId: match.groups!.taskId,
		};
	}

	/**
	 * Builds an ARN for the volume resource.
	 */
	static volume(props: {
		/** The FileSystemId component of the ARN. */
		readonly fileSystemId: string;
		/** The VolumeId component of the ARN. */
		readonly volumeId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:fsx:${props.region ?? "*"}:${props.account ?? "*"}:volume/${props.fileSystemId}/${props.volumeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the volume resource.
	 */
	static isValidVolumeArn(arn: string): boolean {
		return VolumeArnRegex.test(arn);
	}

	/**
	 * Parses a volume ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVolumeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fileSystemId: string;
		volumeId: string;
	} {
		const match = VolumeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid volume ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fileSystemId: match.groups!.fileSystemId,
			volumeId: match.groups!.volumeId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for fsx.
 */
export class FsxOperations {
	/** IAM actions required for the AssociateFileSystemAliases API call. */
	static readonly ASSOCIATE_FILE_SYSTEM_ALIASES: string[] = [
		"fsx:AssociateFileSystemAliases",
	];
	/** IAM actions required for the CancelDataRepositoryTask API call. */
	static readonly CANCEL_DATA_REPOSITORY_TASK: string[] = [
		"fsx:CancelDataRepositoryTask",
	];
	/** IAM actions required for the CopyBackup API call. */
	static readonly COPY_BACKUP: string[] = ["fsx:CopyBackup", "fsx:TagResource"];
	/** IAM actions required for the CopySnapshotAndUpdateVolume API call. */
	static readonly COPY_SNAPSHOT_AND_UPDATE_VOLUME: string[] = [
		"fsx:CopySnapshotAndUpdateVolume",
	];
	/** IAM actions required for the CreateAndAttachS3AccessPoint API call. */
	static readonly CREATE_AND_ATTACH_S3_ACCESS_POINT: string[] = [
		"fsx:CreateAndAttachS3AccessPoint",
	];
	/** IAM actions required for the CreateBackup API call. */
	static readonly CREATE_BACKUP: string[] = [
		"fsx:CreateBackup",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateDataRepositoryAssociation API call. */
	static readonly CREATE_DATA_REPOSITORY_ASSOCIATION: string[] = [
		"fsx:CreateDataRepositoryAssociation",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateDataRepositoryTask API call. */
	static readonly CREATE_DATA_REPOSITORY_TASK: string[] = [
		"fsx:CreateDataRepositoryTask",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateFileCache API call. */
	static readonly CREATE_FILE_CACHE: string[] = [
		"fsx:CreateDataRepositoryAssociation",
		"fsx:CreateFileCache",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateFileSystem API call. */
	static readonly CREATE_FILE_SYSTEM: string[] = [
		"fsx:CreateFileSystem",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateFileSystemFromBackup API call. */
	static readonly CREATE_FILE_SYSTEM_FROM_BACKUP: string[] = [
		"fsx:CreateFileSystemFromBackup",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateSnapshot API call. */
	static readonly CREATE_SNAPSHOT: string[] = [
		"fsx:CreateSnapshot",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateStorageVirtualMachine API call. */
	static readonly CREATE_STORAGE_VIRTUAL_MACHINE: string[] = [
		"fsx:CreateStorageVirtualMachine",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateVolume API call. */
	static readonly CREATE_VOLUME: string[] = [
		"fsx:CreateVolume",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateVolumeFromBackup API call. */
	static readonly CREATE_VOLUME_FROM_BACKUP: string[] = [
		"fsx:CreateVolumeFromBackup",
		"fsx:TagResource",
	];
	/** IAM actions required for the DeleteBackup API call. */
	static readonly DELETE_BACKUP: string[] = ["fsx:DeleteBackup"];
	/** IAM actions required for the DeleteDataRepositoryAssociation API call. */
	static readonly DELETE_DATA_REPOSITORY_ASSOCIATION: string[] = [
		"fsx:DeleteDataRepositoryAssociation",
	];
	/** IAM actions required for the DeleteFileCache API call. */
	static readonly DELETE_FILE_CACHE: string[] = [
		"fsx:DeleteDataRepositoryAssociation",
		"fsx:DeleteFileCache",
	];
	/** IAM actions required for the DeleteFileSystem API call. */
	static readonly DELETE_FILE_SYSTEM: string[] = [
		"fsx:CreateBackup",
		"fsx:DeleteFileSystem",
		"fsx:TagResource",
	];
	/** IAM actions required for the DeleteSnapshot API call. */
	static readonly DELETE_SNAPSHOT: string[] = ["fsx:DeleteSnapshot"];
	/** IAM actions required for the DeleteStorageVirtualMachine API call. */
	static readonly DELETE_STORAGE_VIRTUAL_MACHINE: string[] = [
		"fsx:DeleteStorageVirtualMachine",
	];
	/** IAM actions required for the DeleteVolume API call. */
	static readonly DELETE_VOLUME: string[] = [
		"fsx:BypassSnaplockEnterpriseRetention",
		"fsx:DeleteVolume",
		"fsx:TagResource",
	];
	/** IAM actions required for the DescribeBackups API call. */
	static readonly DESCRIBE_BACKUPS: string[] = ["fsx:DescribeBackups"];
	/** IAM actions required for the DescribeDataRepositoryAssociations API call. */
	static readonly DESCRIBE_DATA_REPOSITORY_ASSOCIATIONS: string[] = [
		"fsx:DescribeDataRepositoryAssociations",
	];
	/** IAM actions required for the DescribeDataRepositoryTasks API call. */
	static readonly DESCRIBE_DATA_REPOSITORY_TASKS: string[] = [
		"fsx:DescribeDataRepositoryTasks",
	];
	/** IAM actions required for the DescribeFileCaches API call. */
	static readonly DESCRIBE_FILE_CACHES: string[] = ["fsx:DescribeFileCaches"];
	/** IAM actions required for the DescribeFileSystemAliases API call. */
	static readonly DESCRIBE_FILE_SYSTEM_ALIASES: string[] = [
		"fsx:DescribeFileSystemAliases",
	];
	/** IAM actions required for the DescribeFileSystems API call. */
	static readonly DESCRIBE_FILE_SYSTEMS: string[] = ["fsx:DescribeFileSystems"];
	/** IAM actions required for the DescribeS3AccessPointAttachments API call. */
	static readonly DESCRIBE_S3_ACCESS_POINT_ATTACHMENTS: string[] = [
		"fsx:DescribeS3AccessPointAttachments",
	];
	/** IAM actions required for the DescribeSharedVpcConfiguration API call. */
	static readonly DESCRIBE_SHARED_VPC_CONFIGURATION: string[] = [
		"fsx:DescribeSharedVpcConfiguration",
	];
	/** IAM actions required for the DescribeSnapshots API call. */
	static readonly DESCRIBE_SNAPSHOTS: string[] = ["fsx:DescribeSnapshots"];
	/** IAM actions required for the DescribeStorageVirtualMachines API call. */
	static readonly DESCRIBE_STORAGE_VIRTUAL_MACHINES: string[] = [
		"fsx:DescribeStorageVirtualMachines",
	];
	/** IAM actions required for the DescribeVolumes API call. */
	static readonly DESCRIBE_VOLUMES: string[] = ["fsx:DescribeVolumes"];
	/** IAM actions required for the DetachAndDeleteS3AccessPoint API call. */
	static readonly DETACH_AND_DELETE_S3_ACCESS_POINT: string[] = [
		"fsx:DetachAndDeleteS3AccessPoint",
	];
	/** IAM actions required for the DisassociateFileSystemAliases API call. */
	static readonly DISASSOCIATE_FILE_SYSTEM_ALIASES: string[] = [
		"fsx:DisassociateFileSystemAliases",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"fsx:ListTagsForResource",
	];
	/** IAM actions required for the ReleaseFileSystemNfsV3Locks API call. */
	static readonly RELEASE_FILE_SYSTEM_NFS_V3_LOCKS: string[] = [
		"fsx:ReleaseFileSystemNfsV3Locks",
	];
	/** IAM actions required for the RestoreVolumeFromSnapshot API call. */
	static readonly RESTORE_VOLUME_FROM_SNAPSHOT: string[] = [
		"fsx:RestoreVolumeFromSnapshot",
	];
	/** IAM actions required for the StartMisconfiguredStateRecovery API call. */
	static readonly START_MISCONFIGURED_STATE_RECOVERY: string[] = [
		"fsx:StartMisconfiguredStateRecovery",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["fsx:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["fsx:UntagResource"];
	/** IAM actions required for the UpdateDataRepositoryAssociation API call. */
	static readonly UPDATE_DATA_REPOSITORY_ASSOCIATION: string[] = [
		"fsx:UpdateDataRepositoryAssociation",
	];
	/** IAM actions required for the UpdateFileCache API call. */
	static readonly UPDATE_FILE_CACHE: string[] = ["fsx:UpdateFileCache"];
	/** IAM actions required for the UpdateFileSystem API call. */
	static readonly UPDATE_FILE_SYSTEM: string[] = ["fsx:UpdateFileSystem"];
	/** IAM actions required for the UpdateSharedVpcConfiguration API call. */
	static readonly UPDATE_SHARED_VPC_CONFIGURATION: string[] = [
		"fsx:UpdateSharedVpcConfiguration",
	];
	/** IAM actions required for the UpdateSnapshot API call. */
	static readonly UPDATE_SNAPSHOT: string[] = ["fsx:UpdateSnapshot"];
	/** IAM actions required for the UpdateStorageVirtualMachine API call. */
	static readonly UPDATE_STORAGE_VIRTUAL_MACHINE: string[] = [
		"fsx:UpdateStorageVirtualMachine",
	];
	/** IAM actions required for the UpdateVolume API call. */
	static readonly UPDATE_VOLUME: string[] = ["fsx:UpdateVolume"];
}

/**
 * Condition key constants and builders for fsx.
 */
export class FsxConditions {
	/** Condition keys applicable to the CopyBackup action. */
	static readonly COPY_BACKUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBackup action. */
	static readonly CREATE_BACKUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataRepositoryAssociation action. */
	static readonly CREATE_DATA_REPOSITORY_ASSOCIATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateDataRepositoryTask action. */
	static readonly CREATE_DATA_REPOSITORY_TASK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFileCache action. */
	static readonly CREATE_FILE_CACHE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFileSystem action. */
	static readonly CREATE_FILE_SYSTEM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFileSystemFromBackup action. */
	static readonly CREATE_FILE_SYSTEM_FROM_BACKUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshot action. */
	static readonly CREATE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStorageVirtualMachine action. */
	static readonly CREATE_STORAGE_VIRTUAL_MACHINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVolumeFromBackup action. */
	static readonly CREATE_VOLUME_FROM_BACKUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"fsx:StorageVirtualMachineId",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateVolume action. */
	static readonly UPDATE_VOLUME_CONDITION_KEYS: string[] = [
		"fsx:ParentVolumeId",
		"fsx:StorageVirtualMachineId",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: fsx:IsBackupCopyDestination (Bool) */
	static readonly IS_BACKUP_COPY_DESTINATION = "fsx:IsBackupCopyDestination";
	/** Condition key: fsx:IsBackupCopySource (Bool) */
	static readonly IS_BACKUP_COPY_SOURCE = "fsx:IsBackupCopySource";
	/** Condition key: fsx:NfsDataRepositoryAuthenticationEnabled (Bool) */
	static readonly NFS_DATA_REPOSITORY_AUTHENTICATION_ENABLED =
		"fsx:NfsDataRepositoryAuthenticationEnabled";
	/** Condition key: fsx:NfsDataRepositoryEncryptionInTransitEnabled (Bool) */
	static readonly NFS_DATA_REPOSITORY_ENCRYPTION_IN_TRANSIT_ENABLED =
		"fsx:NfsDataRepositoryEncryptionInTransitEnabled";
	/** Condition key: fsx:ParentVolumeId (String) */
	static readonly PARENT_VOLUME_ID = "fsx:ParentVolumeId";
	/** Condition key: fsx:StorageVirtualMachineId (String) */
	static readonly STORAGE_VIRTUAL_MACHINE_ID = "fsx:StorageVirtualMachineId";

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
	 * Generates a condition block for `fsx:IsBackupCopyDestination`.
	 */
	static isBackupCopyDestination(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "fsx:IsBackupCopyDestination": value } };
	}

	/**
	 * Generates a condition block for `fsx:IsBackupCopySource`.
	 */
	static isBackupCopySource(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "fsx:IsBackupCopySource": value } };
	}

	/**
	 * Generates a condition block for `fsx:NfsDataRepositoryAuthenticationEnabled`.
	 */
	static nfsDataRepositoryAuthenticationEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "fsx:NfsDataRepositoryAuthenticationEnabled": value } };
	}

	/**
	 * Generates a condition block for `fsx:NfsDataRepositoryEncryptionInTransitEnabled`.
	 */
	static nfsDataRepositoryEncryptionInTransitEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return {
			Bool: { "fsx:NfsDataRepositoryEncryptionInTransitEnabled": value },
		};
	}

	/**
	 * Generates a condition block for `fsx:ParentVolumeId`.
	 */
	static parentVolumeId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "fsx:ParentVolumeId": value } };
	}

	/**
	 * Generates a condition block for `fsx:StorageVirtualMachineId`.
	 */
	static storageVirtualMachineId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "fsx:StorageVirtualMachineId": value } };
	}
}
