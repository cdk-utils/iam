// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/backup-storage.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the backup-storage service.
 */
export class BackupStorageActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "backup-storage";

	/** [Write] backup-storage:CommitBackupJob */
	static readonly COMMIT_BACKUP_JOB = "backup-storage:CommitBackupJob";
	/** [Write] backup-storage:DeleteObjects */
	static readonly DELETE_OBJECTS = "backup-storage:DeleteObjects";
	/** [Write] backup-storage:DescribeBackupJob */
	static readonly DESCRIBE_BACKUP_JOB = "backup-storage:DescribeBackupJob";
	/** [Write] backup-storage:GetBaseBackup */
	static readonly GET_BASE_BACKUP = "backup-storage:GetBaseBackup";
	/** [Write] backup-storage:GetChunk */
	static readonly GET_CHUNK = "backup-storage:GetChunk";
	/** [Write] backup-storage:GetIncrementalBaseBackup */
	static readonly GET_INCREMENTAL_BASE_BACKUP =
		"backup-storage:GetIncrementalBaseBackup";
	/** [Write] backup-storage:GetObjectMetadata */
	static readonly GET_OBJECT_METADATA = "backup-storage:GetObjectMetadata";
	/** [Write] backup-storage:ListChunks */
	static readonly LIST_CHUNKS = "backup-storage:ListChunks";
	/** [Write] backup-storage:ListObjects */
	static readonly LIST_OBJECTS = "backup-storage:ListObjects";
	/** [Write] backup-storage:MountCapsule */
	static readonly MOUNT_CAPSULE = "backup-storage:MountCapsule";
	/** [Write] backup-storage:NotifyObjectComplete */
	static readonly NOTIFY_OBJECT_COMPLETE =
		"backup-storage:NotifyObjectComplete";
	/** [Write] backup-storage:PutChunk */
	static readonly PUT_CHUNK = "backup-storage:PutChunk";
	/** [Write] backup-storage:PutObject */
	static readonly PUT_OBJECT = "backup-storage:PutObject";
	/** [Write] backup-storage:StartObject */
	static readonly START_OBJECT = "backup-storage:StartObject";
	/** [Write] backup-storage:UpdateObjectComplete */
	static readonly UPDATE_OBJECT_COMPLETE =
		"backup-storage:UpdateObjectComplete";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BackupStorageActions.COMMIT_BACKUP_JOB,
		BackupStorageActions.DELETE_OBJECTS,
		BackupStorageActions.DESCRIBE_BACKUP_JOB,
		BackupStorageActions.GET_BASE_BACKUP,
		BackupStorageActions.GET_CHUNK,
		BackupStorageActions.GET_INCREMENTAL_BASE_BACKUP,
		BackupStorageActions.GET_OBJECT_METADATA,
		BackupStorageActions.LIST_CHUNKS,
		BackupStorageActions.LIST_OBJECTS,
		BackupStorageActions.MOUNT_CAPSULE,
		BackupStorageActions.NOTIFY_OBJECT_COMPLETE,
		BackupStorageActions.PUT_CHUNK,
		BackupStorageActions.PUT_OBJECT,
		BackupStorageActions.START_OBJECT,
		BackupStorageActions.UPDATE_OBJECT_COMPLETE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
