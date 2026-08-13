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
	static readonly AssociateFileGateway = "fsx:AssociateFileGateway";
	/** [Write] fsx:AssociateFileSystemAliases */
	static readonly AssociateFileSystemAliases = "fsx:AssociateFileSystemAliases";
	/** [PermissionManagement] fsx:BypassSnaplockEnterpriseRetention */
	static readonly BypassSnaplockEnterpriseRetention =
		"fsx:BypassSnaplockEnterpriseRetention";
	/** [Write] fsx:CancelDataRepositoryTask */
	static readonly CancelDataRepositoryTask = "fsx:CancelDataRepositoryTask";
	/** [Write] fsx:CopyBackup */
	static readonly CopyBackup = "fsx:CopyBackup";
	/** [Write] fsx:CopySnapshotAndUpdateVolume */
	static readonly CopySnapshotAndUpdateVolume =
		"fsx:CopySnapshotAndUpdateVolume";
	/** [Write] fsx:CreateAndAttachS3AccessPoint */
	static readonly CreateAndAttachS3AccessPoint =
		"fsx:CreateAndAttachS3AccessPoint";
	/** [Write] fsx:CreateBackup */
	static readonly CreateBackup = "fsx:CreateBackup";
	/** [Write] fsx:CreateDataRepositoryAssociation */
	static readonly CreateDataRepositoryAssociation =
		"fsx:CreateDataRepositoryAssociation";
	/** [Write] fsx:CreateDataRepositoryTask */
	static readonly CreateDataRepositoryTask = "fsx:CreateDataRepositoryTask";
	/** [Write] fsx:CreateFileCache */
	static readonly CreateFileCache = "fsx:CreateFileCache";
	/** [Write] fsx:CreateFileSystem */
	static readonly CreateFileSystem = "fsx:CreateFileSystem";
	/** [Write] fsx:CreateFileSystemFromBackup */
	static readonly CreateFileSystemFromBackup = "fsx:CreateFileSystemFromBackup";
	/** [Write] fsx:CreateSnapshot */
	static readonly CreateSnapshot = "fsx:CreateSnapshot";
	/** [Write] fsx:CreateStorageVirtualMachine */
	static readonly CreateStorageVirtualMachine =
		"fsx:CreateStorageVirtualMachine";
	/** [Write] fsx:CreateVolume */
	static readonly CreateVolume = "fsx:CreateVolume";
	/** [Write] fsx:CreateVolumeFromBackup */
	static readonly CreateVolumeFromBackup = "fsx:CreateVolumeFromBackup";
	/** [Write] fsx:DeleteBackup */
	static readonly DeleteBackup = "fsx:DeleteBackup";
	/** [Write] fsx:DeleteDataRepositoryAssociation */
	static readonly DeleteDataRepositoryAssociation =
		"fsx:DeleteDataRepositoryAssociation";
	/** [Write] fsx:DeleteFileCache */
	static readonly DeleteFileCache = "fsx:DeleteFileCache";
	/** [Write] fsx:DeleteFileSystem */
	static readonly DeleteFileSystem = "fsx:DeleteFileSystem";
	/** [PermissionManagement] fsx:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "fsx:DeleteResourcePolicy";
	/** [Write] fsx:DeleteSnapshot */
	static readonly DeleteSnapshot = "fsx:DeleteSnapshot";
	/** [Write] fsx:DeleteStorageVirtualMachine */
	static readonly DeleteStorageVirtualMachine =
		"fsx:DeleteStorageVirtualMachine";
	/** [Write] fsx:DeleteVolume */
	static readonly DeleteVolume = "fsx:DeleteVolume";
	/** [Read] fsx:DescribeAssociatedFileGateways */
	static readonly DescribeAssociatedFileGateways =
		"fsx:DescribeAssociatedFileGateways";
	/** [Read] fsx:DescribeBackups */
	static readonly DescribeBackups = "fsx:DescribeBackups";
	/** [Read] fsx:DescribeDataRepositoryAssociations */
	static readonly DescribeDataRepositoryAssociations =
		"fsx:DescribeDataRepositoryAssociations";
	/** [Read] fsx:DescribeDataRepositoryTasks */
	static readonly DescribeDataRepositoryTasks =
		"fsx:DescribeDataRepositoryTasks";
	/** [Read] fsx:DescribeFileCaches */
	static readonly DescribeFileCaches = "fsx:DescribeFileCaches";
	/** [Read] fsx:DescribeFileSystemAliases */
	static readonly DescribeFileSystemAliases = "fsx:DescribeFileSystemAliases";
	/** [Read] fsx:DescribeFileSystems */
	static readonly DescribeFileSystems = "fsx:DescribeFileSystems";
	/** [Read] fsx:DescribeS3AccessPointAttachments */
	static readonly DescribeS3AccessPointAttachments =
		"fsx:DescribeS3AccessPointAttachments";
	/** [Read] fsx:DescribeSharedVpcConfiguration */
	static readonly DescribeSharedVpcConfiguration =
		"fsx:DescribeSharedVpcConfiguration";
	/** [Read] fsx:DescribeSnapshots */
	static readonly DescribeSnapshots = "fsx:DescribeSnapshots";
	/** [Read] fsx:DescribeStorageVirtualMachines */
	static readonly DescribeStorageVirtualMachines =
		"fsx:DescribeStorageVirtualMachines";
	/** [Read] fsx:DescribeVolumes */
	static readonly DescribeVolumes = "fsx:DescribeVolumes";
	/** [Write] fsx:DetachAndDeleteS3AccessPoint */
	static readonly DetachAndDeleteS3AccessPoint =
		"fsx:DetachAndDeleteS3AccessPoint";
	/** [Write] fsx:DisassociateFileGateway */
	static readonly DisassociateFileGateway = "fsx:DisassociateFileGateway";
	/** [Write] fsx:DisassociateFileSystemAliases */
	static readonly DisassociateFileSystemAliases =
		"fsx:DisassociateFileSystemAliases";
	/** [PermissionManagement] fsx:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "fsx:GetResourcePolicy";
	/** [Read] fsx:ListTagsForResource */
	static readonly ListTagsForResource = "fsx:ListTagsForResource";
	/** [PermissionManagement] fsx:ManageBackupPrincipalAssociations */
	static readonly ManageBackupPrincipalAssociations =
		"fsx:ManageBackupPrincipalAssociations";
	/** [PermissionManagement] fsx:PutResourcePolicy */
	static readonly PutResourcePolicy = "fsx:PutResourcePolicy";
	/** [Write] fsx:ReleaseFileSystemNfsV3Locks */
	static readonly ReleaseFileSystemNfsV3Locks =
		"fsx:ReleaseFileSystemNfsV3Locks";
	/** [Write] fsx:RestoreVolumeFromSnapshot */
	static readonly RestoreVolumeFromSnapshot = "fsx:RestoreVolumeFromSnapshot";
	/** [Write] fsx:StartMisconfiguredStateRecovery */
	static readonly StartMisconfiguredStateRecovery =
		"fsx:StartMisconfiguredStateRecovery";
	/** [Tagging] fsx:TagResource */
	static readonly TagResource = "fsx:TagResource";
	/** [Tagging] fsx:UntagResource */
	static readonly UntagResource = "fsx:UntagResource";
	/** [Write] fsx:UpdateDataRepositoryAssociation */
	static readonly UpdateDataRepositoryAssociation =
		"fsx:UpdateDataRepositoryAssociation";
	/** [Write] fsx:UpdateFileCache */
	static readonly UpdateFileCache = "fsx:UpdateFileCache";
	/** [Write] fsx:UpdateFileSystem */
	static readonly UpdateFileSystem = "fsx:UpdateFileSystem";
	/** [Write] fsx:UpdateSharedVpcConfiguration */
	static readonly UpdateSharedVpcConfiguration =
		"fsx:UpdateSharedVpcConfiguration";
	/** [Write] fsx:UpdateSnapshot */
	static readonly UpdateSnapshot = "fsx:UpdateSnapshot";
	/** [Write] fsx:UpdateStorageVirtualMachine */
	static readonly UpdateStorageVirtualMachine =
		"fsx:UpdateStorageVirtualMachine";
	/** [Write] fsx:UpdateVolume */
	static readonly UpdateVolume = "fsx:UpdateVolume";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		FsxActions.DescribeAssociatedFileGateways,
		FsxActions.DescribeBackups,
		FsxActions.DescribeDataRepositoryAssociations,
		FsxActions.DescribeDataRepositoryTasks,
		FsxActions.DescribeFileCaches,
		FsxActions.DescribeFileSystemAliases,
		FsxActions.DescribeFileSystems,
		FsxActions.DescribeS3AccessPointAttachments,
		FsxActions.DescribeSharedVpcConfiguration,
		FsxActions.DescribeSnapshots,
		FsxActions.DescribeStorageVirtualMachines,
		FsxActions.DescribeVolumes,
		FsxActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		FsxActions.AssociateFileGateway,
		FsxActions.AssociateFileSystemAliases,
		FsxActions.CancelDataRepositoryTask,
		FsxActions.CopyBackup,
		FsxActions.CopySnapshotAndUpdateVolume,
		FsxActions.CreateAndAttachS3AccessPoint,
		FsxActions.CreateBackup,
		FsxActions.CreateDataRepositoryAssociation,
		FsxActions.CreateDataRepositoryTask,
		FsxActions.CreateFileCache,
		FsxActions.CreateFileSystem,
		FsxActions.CreateFileSystemFromBackup,
		FsxActions.CreateSnapshot,
		FsxActions.CreateStorageVirtualMachine,
		FsxActions.CreateVolume,
		FsxActions.CreateVolumeFromBackup,
		FsxActions.DeleteBackup,
		FsxActions.DeleteDataRepositoryAssociation,
		FsxActions.DeleteFileCache,
		FsxActions.DeleteFileSystem,
		FsxActions.DeleteSnapshot,
		FsxActions.DeleteStorageVirtualMachine,
		FsxActions.DeleteVolume,
		FsxActions.DetachAndDeleteS3AccessPoint,
		FsxActions.DisassociateFileGateway,
		FsxActions.DisassociateFileSystemAliases,
		FsxActions.ReleaseFileSystemNfsV3Locks,
		FsxActions.RestoreVolumeFromSnapshot,
		FsxActions.StartMisconfiguredStateRecovery,
		FsxActions.UpdateDataRepositoryAssociation,
		FsxActions.UpdateFileCache,
		FsxActions.UpdateFileSystem,
		FsxActions.UpdateSharedVpcConfiguration,
		FsxActions.UpdateSnapshot,
		FsxActions.UpdateStorageVirtualMachine,
		FsxActions.UpdateVolume,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		FsxActions.BypassSnaplockEnterpriseRetention,
		FsxActions.DeleteResourcePolicy,
		FsxActions.actionGetResourcePolicy,
		FsxActions.ManageBackupPrincipalAssociations,
		FsxActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		FsxActions.TagResource,
		FsxActions.UntagResource,
	];
}

/**
 * Properties for building a association ARN.
 */
export interface FsxAssociationArnProps {
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
}

/**
 * Parsed components of a association ARN.
 */
export interface FsxAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FileSystemIdOrFileCacheId component. */
	readonly fileSystemIdOrFileCacheId: string;
	/** The DataRepositoryAssociationId component. */
	readonly dataRepositoryAssociationId: string;
}

/**
 * Properties for building a backup ARN.
 */
export interface FsxBackupArnProps {
	/** The BackupId component of the ARN. */
	readonly backupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a backup ARN.
 */
export interface FsxBackupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BackupId component. */
	readonly backupId: string;
}

/**
 * Properties for building a file-cache ARN.
 */
export interface FsxFileCacheArnProps {
	/** The FileCacheId component of the ARN. */
	readonly fileCacheId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a file-cache ARN.
 */
export interface FsxFileCacheArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FileCacheId component. */
	readonly fileCacheId: string;
}

/**
 * Properties for building a file-system ARN.
 */
export interface FsxFileSystemArnProps {
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
export interface FsxFileSystemArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FileSystemId component. */
	readonly fileSystemId: string;
}

/**
 * Properties for building a snapshot ARN.
 */
export interface FsxSnapshotArnProps {
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
}

/**
 * Parsed components of a snapshot ARN.
 */
export interface FsxSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VolumeId component. */
	readonly volumeId: string;
	/** The SnapshotId component. */
	readonly snapshotId: string;
}

/**
 * Properties for building a storage-virtual-machine ARN.
 */
export interface FsxStorageVirtualMachineArnProps {
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
}

/**
 * Parsed components of a storage-virtual-machine ARN.
 */
export interface FsxStorageVirtualMachineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FileSystemId component. */
	readonly fileSystemId: string;
	/** The StorageVirtualMachineId component. */
	readonly storageVirtualMachineId: string;
}

/**
 * Properties for building a task ARN.
 */
export interface FsxTaskArnProps {
	/** The TaskId component of the ARN. */
	readonly taskId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a task ARN.
 */
export interface FsxTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TaskId component. */
	readonly taskId: string;
}

/**
 * Properties for building a volume ARN.
 */
export interface FsxVolumeArnProps {
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
}

/**
 * Parsed components of a volume ARN.
 */
export interface FsxVolumeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FileSystemId component. */
	readonly fileSystemId: string;
	/** The VolumeId component. */
	readonly volumeId: string;
}

const AssociationArnRegex =
	/^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):association\/(?<fileSystemIdOrFileCacheId>[^:/?]+)\/(?<dataRepositoryAssociationId>[^:/?]+)$/;
const BackupArnRegex =
	/^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):backup\/(?<backupId>[^:/?]+)$/;
const FileCacheArnRegex =
	/^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):file-cache\/(?<fileCacheId>[^:/?]+)$/;
const FileSystemArnRegex =
	/^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):file-system\/(?<fileSystemId>[^:/?]+)$/;
const SnapshotArnRegex =
	/^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):snapshot\/(?<volumeId>[^:/?]+)\/(?<snapshotId>[^:/?]+)$/;
const StorageVirtualMachineArnRegex =
	/^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):storage-virtual-machine\/(?<fileSystemId>[^:/?]+)\/(?<storageVirtualMachineId>[^:/?]+)$/;
const TaskArnRegex =
	/^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):task\/(?<taskId>[^:/?]+)$/;
const VolumeArnRegex =
	/^arn:(?<partition>[^:]+):fsx:(?<region>[^:]*):(?<account>[^:]*):volume\/(?<fileSystemId>[^:/?]+)\/(?<volumeId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for fsx resources.
 */
export class FsxResources {
	/**
	 * Builds an ARN for the association resource.
	 */
	static association(props: FsxAssociationArnProps): string {
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
	static parseAssociationArn(arn: string): FsxAssociationArnComponents {
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
	static backup(props: FsxBackupArnProps): string {
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
	static parseBackupArn(arn: string): FsxBackupArnComponents {
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
	static fileCache(props: FsxFileCacheArnProps): string {
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
	static parseFileCacheArn(arn: string): FsxFileCacheArnComponents {
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
	static fileSystem(props: FsxFileSystemArnProps): string {
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
	static parseFileSystemArn(arn: string): FsxFileSystemArnComponents {
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
	static snapshot(props: FsxSnapshotArnProps): string {
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
	static parseSnapshotArn(arn: string): FsxSnapshotArnComponents {
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
	static storageVirtualMachine(
		props: FsxStorageVirtualMachineArnProps,
	): string {
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
	static parseStorageVirtualMachineArn(
		arn: string,
	): FsxStorageVirtualMachineArnComponents {
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
	static task(props: FsxTaskArnProps): string {
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
	static parseTaskArn(arn: string): FsxTaskArnComponents {
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
	static volume(props: FsxVolumeArnProps): string {
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
	static parseVolumeArn(arn: string): FsxVolumeArnComponents {
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
	static readonly AssociateFileSystemAliases: string[] = [
		"fsx:AssociateFileSystemAliases",
	];
	/** IAM actions required for the CancelDataRepositoryTask API call. */
	static readonly CancelDataRepositoryTask: string[] = [
		"fsx:CancelDataRepositoryTask",
	];
	/** IAM actions required for the CopyBackup API call. */
	static readonly CopyBackup: string[] = ["fsx:CopyBackup", "fsx:TagResource"];
	/** IAM actions required for the CopySnapshotAndUpdateVolume API call. */
	static readonly CopySnapshotAndUpdateVolume: string[] = [
		"fsx:CopySnapshotAndUpdateVolume",
	];
	/** IAM actions required for the CreateAndAttachS3AccessPoint API call. */
	static readonly CreateAndAttachS3AccessPoint: string[] = [
		"fsx:CreateAndAttachS3AccessPoint",
	];
	/** IAM actions required for the CreateBackup API call. */
	static readonly CreateBackup: string[] = [
		"fsx:CreateBackup",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateDataRepositoryAssociation API call. */
	static readonly CreateDataRepositoryAssociation: string[] = [
		"fsx:CreateDataRepositoryAssociation",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateDataRepositoryTask API call. */
	static readonly CreateDataRepositoryTask: string[] = [
		"fsx:CreateDataRepositoryTask",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateFileCache API call. */
	static readonly CreateFileCache: string[] = [
		"fsx:CreateDataRepositoryAssociation",
		"fsx:CreateFileCache",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateFileSystem API call. */
	static readonly CreateFileSystem: string[] = [
		"fsx:CreateFileSystem",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateFileSystemFromBackup API call. */
	static readonly CreateFileSystemFromBackup: string[] = [
		"fsx:CreateFileSystemFromBackup",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateSnapshot API call. */
	static readonly CreateSnapshot: string[] = [
		"fsx:CreateSnapshot",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateStorageVirtualMachine API call. */
	static readonly CreateStorageVirtualMachine: string[] = [
		"fsx:CreateStorageVirtualMachine",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateVolume API call. */
	static readonly CreateVolume: string[] = [
		"fsx:CreateVolume",
		"fsx:TagResource",
	];
	/** IAM actions required for the CreateVolumeFromBackup API call. */
	static readonly CreateVolumeFromBackup: string[] = [
		"fsx:CreateVolumeFromBackup",
		"fsx:TagResource",
	];
	/** IAM actions required for the DeleteBackup API call. */
	static readonly DeleteBackup: string[] = ["fsx:DeleteBackup"];
	/** IAM actions required for the DeleteDataRepositoryAssociation API call. */
	static readonly DeleteDataRepositoryAssociation: string[] = [
		"fsx:DeleteDataRepositoryAssociation",
	];
	/** IAM actions required for the DeleteFileCache API call. */
	static readonly DeleteFileCache: string[] = [
		"fsx:DeleteDataRepositoryAssociation",
		"fsx:DeleteFileCache",
	];
	/** IAM actions required for the DeleteFileSystem API call. */
	static readonly DeleteFileSystem: string[] = [
		"fsx:CreateBackup",
		"fsx:DeleteFileSystem",
		"fsx:TagResource",
	];
	/** IAM actions required for the DeleteSnapshot API call. */
	static readonly DeleteSnapshot: string[] = ["fsx:DeleteSnapshot"];
	/** IAM actions required for the DeleteStorageVirtualMachine API call. */
	static readonly DeleteStorageVirtualMachine: string[] = [
		"fsx:DeleteStorageVirtualMachine",
	];
	/** IAM actions required for the DeleteVolume API call. */
	static readonly DeleteVolume: string[] = [
		"fsx:BypassSnaplockEnterpriseRetention",
		"fsx:DeleteVolume",
		"fsx:TagResource",
	];
	/** IAM actions required for the DescribeBackups API call. */
	static readonly DescribeBackups: string[] = ["fsx:DescribeBackups"];
	/** IAM actions required for the DescribeDataRepositoryAssociations API call. */
	static readonly DescribeDataRepositoryAssociations: string[] = [
		"fsx:DescribeDataRepositoryAssociations",
	];
	/** IAM actions required for the DescribeDataRepositoryTasks API call. */
	static readonly DescribeDataRepositoryTasks: string[] = [
		"fsx:DescribeDataRepositoryTasks",
	];
	/** IAM actions required for the DescribeFileCaches API call. */
	static readonly DescribeFileCaches: string[] = ["fsx:DescribeFileCaches"];
	/** IAM actions required for the DescribeFileSystemAliases API call. */
	static readonly DescribeFileSystemAliases: string[] = [
		"fsx:DescribeFileSystemAliases",
	];
	/** IAM actions required for the DescribeFileSystems API call. */
	static readonly DescribeFileSystems: string[] = ["fsx:DescribeFileSystems"];
	/** IAM actions required for the DescribeS3AccessPointAttachments API call. */
	static readonly DescribeS3AccessPointAttachments: string[] = [
		"fsx:DescribeS3AccessPointAttachments",
	];
	/** IAM actions required for the DescribeSharedVpcConfiguration API call. */
	static readonly DescribeSharedVpcConfiguration: string[] = [
		"fsx:DescribeSharedVpcConfiguration",
	];
	/** IAM actions required for the DescribeSnapshots API call. */
	static readonly DescribeSnapshots: string[] = ["fsx:DescribeSnapshots"];
	/** IAM actions required for the DescribeStorageVirtualMachines API call. */
	static readonly DescribeStorageVirtualMachines: string[] = [
		"fsx:DescribeStorageVirtualMachines",
	];
	/** IAM actions required for the DescribeVolumes API call. */
	static readonly DescribeVolumes: string[] = ["fsx:DescribeVolumes"];
	/** IAM actions required for the DetachAndDeleteS3AccessPoint API call. */
	static readonly DetachAndDeleteS3AccessPoint: string[] = [
		"fsx:DetachAndDeleteS3AccessPoint",
	];
	/** IAM actions required for the DisassociateFileSystemAliases API call. */
	static readonly DisassociateFileSystemAliases: string[] = [
		"fsx:DisassociateFileSystemAliases",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["fsx:ListTagsForResource"];
	/** IAM actions required for the ReleaseFileSystemNfsV3Locks API call. */
	static readonly ReleaseFileSystemNfsV3Locks: string[] = [
		"fsx:ReleaseFileSystemNfsV3Locks",
	];
	/** IAM actions required for the RestoreVolumeFromSnapshot API call. */
	static readonly RestoreVolumeFromSnapshot: string[] = [
		"fsx:RestoreVolumeFromSnapshot",
	];
	/** IAM actions required for the StartMisconfiguredStateRecovery API call. */
	static readonly StartMisconfiguredStateRecovery: string[] = [
		"fsx:StartMisconfiguredStateRecovery",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["fsx:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["fsx:UntagResource"];
	/** IAM actions required for the UpdateDataRepositoryAssociation API call. */
	static readonly UpdateDataRepositoryAssociation: string[] = [
		"fsx:UpdateDataRepositoryAssociation",
	];
	/** IAM actions required for the UpdateFileCache API call. */
	static readonly UpdateFileCache: string[] = ["fsx:UpdateFileCache"];
	/** IAM actions required for the UpdateFileSystem API call. */
	static readonly UpdateFileSystem: string[] = ["fsx:UpdateFileSystem"];
	/** IAM actions required for the UpdateSharedVpcConfiguration API call. */
	static readonly UpdateSharedVpcConfiguration: string[] = [
		"fsx:UpdateSharedVpcConfiguration",
	];
	/** IAM actions required for the UpdateSnapshot API call. */
	static readonly UpdateSnapshot: string[] = ["fsx:UpdateSnapshot"];
	/** IAM actions required for the UpdateStorageVirtualMachine API call. */
	static readonly UpdateStorageVirtualMachine: string[] = [
		"fsx:UpdateStorageVirtualMachine",
	];
	/** IAM actions required for the UpdateVolume API call. */
	static readonly UpdateVolume: string[] = ["fsx:UpdateVolume"];
}

/**
 * Condition key constants and builders for fsx.
 */
export class FsxConditions {
	/** Condition keys applicable to the CopyBackup action. */
	static readonly CopyBackupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBackup action. */
	static readonly CreateBackupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataRepositoryAssociation action. */
	static readonly CreateDataRepositoryAssociationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataRepositoryTask action. */
	static readonly CreateDataRepositoryTaskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFileCache action. */
	static readonly CreateFileCacheConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFileSystem action. */
	static readonly CreateFileSystemConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFileSystemFromBackup action. */
	static readonly CreateFileSystemFromBackupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshot action. */
	static readonly CreateSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStorageVirtualMachine action. */
	static readonly CreateStorageVirtualMachineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVolumeFromBackup action. */
	static readonly CreateVolumeFromBackupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"fsx:StorageVirtualMachineId",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateVolume action. */
	static readonly UpdateVolumeConditionKeys: string[] = [
		"fsx:ParentVolumeId",
		"fsx:StorageVirtualMachineId",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
