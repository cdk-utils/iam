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
	static readonly CommitBackupJob = "backup-storage:CommitBackupJob";
	/** [Write] backup-storage:DeleteObjects */
	static readonly DeleteObjects = "backup-storage:DeleteObjects";
	/** [Write] backup-storage:DescribeBackupJob */
	static readonly DescribeBackupJob = "backup-storage:DescribeBackupJob";
	/** [Write] backup-storage:GetBaseBackup */
	static readonly actionGetBaseBackup = "backup-storage:GetBaseBackup";
	/** [Write] backup-storage:GetChunk */
	static readonly actionGetChunk = "backup-storage:GetChunk";
	/** [Write] backup-storage:GetIncrementalBaseBackup */
	static readonly actionGetIncrementalBaseBackup =
		"backup-storage:GetIncrementalBaseBackup";
	/** [Write] backup-storage:GetObjectMetadata */
	static readonly actionGetObjectMetadata = "backup-storage:GetObjectMetadata";
	/** [Write] backup-storage:ListChunks */
	static readonly ListChunks = "backup-storage:ListChunks";
	/** [Write] backup-storage:ListObjects */
	static readonly ListObjects = "backup-storage:ListObjects";
	/** [Write] backup-storage:MountCapsule */
	static readonly MountCapsule = "backup-storage:MountCapsule";
	/** [Write] backup-storage:NotifyObjectComplete */
	static readonly NotifyObjectComplete = "backup-storage:NotifyObjectComplete";
	/** [Write] backup-storage:PutChunk */
	static readonly PutChunk = "backup-storage:PutChunk";
	/** [Write] backup-storage:PutObject */
	static readonly PutObject = "backup-storage:PutObject";
	/** [Write] backup-storage:StartObject */
	static readonly StartObject = "backup-storage:StartObject";
	/** [Write] backup-storage:UpdateObjectComplete */
	static readonly UpdateObjectComplete = "backup-storage:UpdateObjectComplete";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BackupStorageActions.CommitBackupJob,
		BackupStorageActions.DeleteObjects,
		BackupStorageActions.DescribeBackupJob,
		BackupStorageActions.actionGetBaseBackup,
		BackupStorageActions.actionGetChunk,
		BackupStorageActions.actionGetIncrementalBaseBackup,
		BackupStorageActions.actionGetObjectMetadata,
		BackupStorageActions.ListChunks,
		BackupStorageActions.ListObjects,
		BackupStorageActions.MountCapsule,
		BackupStorageActions.NotifyObjectComplete,
		BackupStorageActions.PutChunk,
		BackupStorageActions.PutObject,
		BackupStorageActions.StartObject,
		BackupStorageActions.UpdateObjectComplete,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
