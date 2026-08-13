// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/backup.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the backup service.
 */
export class BackupActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "backup";

	/** [Write] backup:AssociateBackupVaultMpaApprovalTeam */
	static readonly ASSOCIATE_BACKUP_VAULT_MPA_APPROVAL_TEAM =
		"backup:AssociateBackupVaultMpaApprovalTeam";
	/** [Write] backup:CancelLegalHold */
	static readonly CANCEL_LEGAL_HOLD = "backup:CancelLegalHold";
	/** [Write] backup:CopyFromBackupVault */
	static readonly COPY_FROM_BACKUP_VAULT = "backup:CopyFromBackupVault";
	/** [Write] backup:CopyIntoBackupVault */
	static readonly COPY_INTO_BACKUP_VAULT = "backup:CopyIntoBackupVault";
	/** [Write] backup:CreateBackupAccessPoint */
	static readonly CREATE_BACKUP_ACCESS_POINT = "backup:CreateBackupAccessPoint";
	/** [Write] backup:CreateBackupPlan */
	static readonly CREATE_BACKUP_PLAN = "backup:CreateBackupPlan";
	/** [Write] backup:CreateBackupSelection */
	static readonly CREATE_BACKUP_SELECTION = "backup:CreateBackupSelection";
	/** [Write] backup:CreateBackupVault */
	static readonly CREATE_BACKUP_VAULT = "backup:CreateBackupVault";
	/** [Write] backup:CreateFramework */
	static readonly CREATE_FRAMEWORK = "backup:CreateFramework";
	/** [Write] backup:CreateLegalHold */
	static readonly CREATE_LEGAL_HOLD = "backup:CreateLegalHold";
	/** [Write] backup:CreateLogicallyAirGappedBackupVault */
	static readonly CREATE_LOGICALLY_AIR_GAPPED_BACKUP_VAULT =
		"backup:CreateLogicallyAirGappedBackupVault";
	/** [Write] backup:CreateReportPlan */
	static readonly CREATE_REPORT_PLAN = "backup:CreateReportPlan";
	/** [Write] backup:CreateRestoreAccessBackupVault */
	static readonly CREATE_RESTORE_ACCESS_BACKUP_VAULT =
		"backup:CreateRestoreAccessBackupVault";
	/** [Write] backup:CreateRestoreTestingPlan */
	static readonly CREATE_RESTORE_TESTING_PLAN =
		"backup:CreateRestoreTestingPlan";
	/** [Write] backup:CreateRestoreTestingSelection */
	static readonly CREATE_RESTORE_TESTING_SELECTION =
		"backup:CreateRestoreTestingSelection";
	/** [Write] backup:CreateTieringConfiguration */
	static readonly CREATE_TIERING_CONFIGURATION =
		"backup:CreateTieringConfiguration";
	/** [Write] backup:DeleteBackupAccessPoint */
	static readonly DELETE_BACKUP_ACCESS_POINT = "backup:DeleteBackupAccessPoint";
	/** [Write] backup:DeleteBackupPlan */
	static readonly DELETE_BACKUP_PLAN = "backup:DeleteBackupPlan";
	/** [Write] backup:DeleteBackupSelection */
	static readonly DELETE_BACKUP_SELECTION = "backup:DeleteBackupSelection";
	/** [Write] backup:DeleteBackupVault */
	static readonly DELETE_BACKUP_VAULT = "backup:DeleteBackupVault";
	/** [PermissionManagement] backup:DeleteBackupVaultAccessPolicy */
	static readonly DELETE_BACKUP_VAULT_ACCESS_POLICY =
		"backup:DeleteBackupVaultAccessPolicy";
	/** [Write] backup:DeleteBackupVaultLockConfiguration */
	static readonly DELETE_BACKUP_VAULT_LOCK_CONFIGURATION =
		"backup:DeleteBackupVaultLockConfiguration";
	/** [Write] backup:DeleteBackupVaultNotifications */
	static readonly DELETE_BACKUP_VAULT_NOTIFICATIONS =
		"backup:DeleteBackupVaultNotifications";
	/** [PermissionManagement] backup:DeleteBackupVaultSharingPolicy */
	static readonly DELETE_BACKUP_VAULT_SHARING_POLICY =
		"backup:DeleteBackupVaultSharingPolicy";
	/** [Write] backup:DeleteFramework */
	static readonly DELETE_FRAMEWORK = "backup:DeleteFramework";
	/** [Write] backup:DeleteRecoveryPoint */
	static readonly DELETE_RECOVERY_POINT = "backup:DeleteRecoveryPoint";
	/** [Write] backup:DeleteReportPlan */
	static readonly DELETE_REPORT_PLAN = "backup:DeleteReportPlan";
	/** [Write] backup:DeleteRestoreTestingPlan */
	static readonly DELETE_RESTORE_TESTING_PLAN =
		"backup:DeleteRestoreTestingPlan";
	/** [Write] backup:DeleteRestoreTestingSelection */
	static readonly DELETE_RESTORE_TESTING_SELECTION =
		"backup:DeleteRestoreTestingSelection";
	/** [Write] backup:DeleteTieringConfiguration */
	static readonly DELETE_TIERING_CONFIGURATION =
		"backup:DeleteTieringConfiguration";
	/** [Read] backup:DescribeBackupAccessPoint */
	static readonly DESCRIBE_BACKUP_ACCESS_POINT =
		"backup:DescribeBackupAccessPoint";
	/** [Read] backup:DescribeBackupJob */
	static readonly DESCRIBE_BACKUP_JOB = "backup:DescribeBackupJob";
	/** [Read] backup:DescribeBackupVault */
	static readonly DESCRIBE_BACKUP_VAULT = "backup:DescribeBackupVault";
	/** [Read] backup:DescribeCopyJob */
	static readonly DESCRIBE_COPY_JOB = "backup:DescribeCopyJob";
	/** [Read] backup:DescribeFramework */
	static readonly DESCRIBE_FRAMEWORK = "backup:DescribeFramework";
	/** [Read] backup:DescribeGlobalSettings */
	static readonly DESCRIBE_GLOBAL_SETTINGS = "backup:DescribeGlobalSettings";
	/** [Read] backup:DescribeProtectedResource */
	static readonly DESCRIBE_PROTECTED_RESOURCE =
		"backup:DescribeProtectedResource";
	/** [Read] backup:DescribeRecoveryPoint */
	static readonly DESCRIBE_RECOVERY_POINT = "backup:DescribeRecoveryPoint";
	/** [Read] backup:DescribeRegionSettings */
	static readonly DESCRIBE_REGION_SETTINGS = "backup:DescribeRegionSettings";
	/** [Read] backup:DescribeReportJob */
	static readonly DESCRIBE_REPORT_JOB = "backup:DescribeReportJob";
	/** [Read] backup:DescribeReportPlan */
	static readonly DESCRIBE_REPORT_PLAN = "backup:DescribeReportPlan";
	/** [Read] backup:DescribeRestoreJob */
	static readonly DESCRIBE_RESTORE_JOB = "backup:DescribeRestoreJob";
	/** [Read] backup:DescribeScanJob */
	static readonly DESCRIBE_SCAN_JOB = "backup:DescribeScanJob";
	/** [Write] backup:DisassociateBackupVaultMpaApprovalTeam */
	static readonly DISASSOCIATE_BACKUP_VAULT_MPA_APPROVAL_TEAM =
		"backup:DisassociateBackupVaultMpaApprovalTeam";
	/** [Write] backup:DisassociateRecoveryPoint */
	static readonly DISASSOCIATE_RECOVERY_POINT =
		"backup:DisassociateRecoveryPoint";
	/** [Write] backup:DisassociateRecoveryPointFromParent */
	static readonly DISASSOCIATE_RECOVERY_POINT_FROM_PARENT =
		"backup:DisassociateRecoveryPointFromParent";
	/** [Read] backup:ExportBackupPlanTemplate */
	static readonly EXPORT_BACKUP_PLAN_TEMPLATE =
		"backup:ExportBackupPlanTemplate";
	/** [Read] backup:GetBackupPlan */
	static readonly GET_BACKUP_PLAN = "backup:GetBackupPlan";
	/** [Read] backup:GetBackupPlanFromJSON */
	static readonly GET_BACKUP_PLAN_FROM_JSON = "backup:GetBackupPlanFromJSON";
	/** [Read] backup:GetBackupPlanFromTemplate */
	static readonly GET_BACKUP_PLAN_FROM_TEMPLATE =
		"backup:GetBackupPlanFromTemplate";
	/** [Read] backup:GetBackupSelection */
	static readonly GET_BACKUP_SELECTION = "backup:GetBackupSelection";
	/** [Read] backup:GetBackupVaultAccessPolicy */
	static readonly GET_BACKUP_VAULT_ACCESS_POLICY =
		"backup:GetBackupVaultAccessPolicy";
	/** [Read] backup:GetBackupVaultNotifications */
	static readonly GET_BACKUP_VAULT_NOTIFICATIONS =
		"backup:GetBackupVaultNotifications";
	/** [Read] backup:GetBackupVaultSharingPolicy */
	static readonly GET_BACKUP_VAULT_SHARING_POLICY =
		"backup:GetBackupVaultSharingPolicy";
	/** [Read] backup:GetLegalHold */
	static readonly GET_LEGAL_HOLD = "backup:GetLegalHold";
	/** [Read] backup:GetPITRMalwareScanResults */
	static readonly GET_PITR_MALWARE_SCAN_RESULTS =
		"backup:GetPITRMalwareScanResults";
	/** [Read] backup:GetRecoveryPointIndexDetails */
	static readonly GET_RECOVERY_POINT_INDEX_DETAILS =
		"backup:GetRecoveryPointIndexDetails";
	/** [Read] backup:GetRecoveryPointRestoreMetadata */
	static readonly GET_RECOVERY_POINT_RESTORE_METADATA =
		"backup:GetRecoveryPointRestoreMetadata";
	/** [Read] backup:GetRestoreJobMetadata */
	static readonly GET_RESTORE_JOB_METADATA = "backup:GetRestoreJobMetadata";
	/** [Read] backup:GetRestoreTestingInferredMetadata */
	static readonly GET_RESTORE_TESTING_INFERRED_METADATA =
		"backup:GetRestoreTestingInferredMetadata";
	/** [Read] backup:GetRestoreTestingPlan */
	static readonly GET_RESTORE_TESTING_PLAN = "backup:GetRestoreTestingPlan";
	/** [Read] backup:GetRestoreTestingSelection */
	static readonly GET_RESTORE_TESTING_SELECTION =
		"backup:GetRestoreTestingSelection";
	/** [Read] backup:GetSupportedResourceTypes */
	static readonly GET_SUPPORTED_RESOURCE_TYPES =
		"backup:GetSupportedResourceTypes";
	/** [Read] backup:GetTieringConfiguration */
	static readonly GET_TIERING_CONFIGURATION = "backup:GetTieringConfiguration";
	/** [List] backup:ListBackupAccessPoints */
	static readonly LIST_BACKUP_ACCESS_POINTS = "backup:ListBackupAccessPoints";
	/** [List] backup:ListBackupAccessPointsByRecoveryPoint */
	static readonly LIST_BACKUP_ACCESS_POINTS_BY_RECOVERY_POINT =
		"backup:ListBackupAccessPointsByRecoveryPoint";
	/** [List] backup:ListBackupAccessPointsByResource */
	static readonly LIST_BACKUP_ACCESS_POINTS_BY_RESOURCE =
		"backup:ListBackupAccessPointsByResource";
	/** [List] backup:ListBackupJobSummaries */
	static readonly LIST_BACKUP_JOB_SUMMARIES = "backup:ListBackupJobSummaries";
	/** [List] backup:ListBackupJobs */
	static readonly LIST_BACKUP_JOBS = "backup:ListBackupJobs";
	/** [List] backup:ListBackupPlanTemplates */
	static readonly LIST_BACKUP_PLAN_TEMPLATES = "backup:ListBackupPlanTemplates";
	/** [List] backup:ListBackupPlanVersions */
	static readonly LIST_BACKUP_PLAN_VERSIONS = "backup:ListBackupPlanVersions";
	/** [List] backup:ListBackupPlans */
	static readonly LIST_BACKUP_PLANS = "backup:ListBackupPlans";
	/** [List] backup:ListBackupSelections */
	static readonly LIST_BACKUP_SELECTIONS = "backup:ListBackupSelections";
	/** [List] backup:ListBackupVaults */
	static readonly LIST_BACKUP_VAULTS = "backup:ListBackupVaults";
	/** [List] backup:ListCopyJobSummaries */
	static readonly LIST_COPY_JOB_SUMMARIES = "backup:ListCopyJobSummaries";
	/** [List] backup:ListCopyJobs */
	static readonly LIST_COPY_JOBS = "backup:ListCopyJobs";
	/** [List] backup:ListFrameworks */
	static readonly LIST_FRAMEWORKS = "backup:ListFrameworks";
	/** [List] backup:ListIndexedRecoveryPoints */
	static readonly LIST_INDEXED_RECOVERY_POINTS =
		"backup:ListIndexedRecoveryPoints";
	/** [PermissionManagement] backup:ListIndexedRecoveryPointsForSearch */
	static readonly LIST_INDEXED_RECOVERY_POINTS_FOR_SEARCH =
		"backup:ListIndexedRecoveryPointsForSearch";
	/** [List] backup:ListLegalHolds */
	static readonly LIST_LEGAL_HOLDS = "backup:ListLegalHolds";
	/** [List] backup:ListProtectedResources */
	static readonly LIST_PROTECTED_RESOURCES = "backup:ListProtectedResources";
	/** [List] backup:ListProtectedResourcesByBackupVault */
	static readonly LIST_PROTECTED_RESOURCES_BY_BACKUP_VAULT =
		"backup:ListProtectedResourcesByBackupVault";
	/** [List] backup:ListRecoveryPointsByBackupVault */
	static readonly LIST_RECOVERY_POINTS_BY_BACKUP_VAULT =
		"backup:ListRecoveryPointsByBackupVault";
	/** [List] backup:ListRecoveryPointsByLegalHold */
	static readonly LIST_RECOVERY_POINTS_BY_LEGAL_HOLD =
		"backup:ListRecoveryPointsByLegalHold";
	/** [List] backup:ListRecoveryPointsByResource */
	static readonly LIST_RECOVERY_POINTS_BY_RESOURCE =
		"backup:ListRecoveryPointsByResource";
	/** [List] backup:ListReportJobs */
	static readonly LIST_REPORT_JOBS = "backup:ListReportJobs";
	/** [List] backup:ListReportPlans */
	static readonly LIST_REPORT_PLANS = "backup:ListReportPlans";
	/** [List] backup:ListRestoreAccessBackupVaults */
	static readonly LIST_RESTORE_ACCESS_BACKUP_VAULTS =
		"backup:ListRestoreAccessBackupVaults";
	/** [List] backup:ListRestoreJobSummaries */
	static readonly LIST_RESTORE_JOB_SUMMARIES = "backup:ListRestoreJobSummaries";
	/** [List] backup:ListRestoreJobs */
	static readonly LIST_RESTORE_JOBS = "backup:ListRestoreJobs";
	/** [List] backup:ListRestoreJobsByProtectedResource */
	static readonly LIST_RESTORE_JOBS_BY_PROTECTED_RESOURCE =
		"backup:ListRestoreJobsByProtectedResource";
	/** [List] backup:ListRestoreTestingPlans */
	static readonly LIST_RESTORE_TESTING_PLANS = "backup:ListRestoreTestingPlans";
	/** [List] backup:ListRestoreTestingSelections */
	static readonly LIST_RESTORE_TESTING_SELECTIONS =
		"backup:ListRestoreTestingSelections";
	/** [List] backup:ListScanJobSummaries */
	static readonly LIST_SCAN_JOB_SUMMARIES = "backup:ListScanJobSummaries";
	/** [List] backup:ListScanJobs */
	static readonly LIST_SCAN_JOBS = "backup:ListScanJobs";
	/** [Read] backup:ListTags */
	static readonly LIST_TAGS = "backup:ListTags";
	/** [List] backup:ListTieringConfigurations */
	static readonly LIST_TIERING_CONFIGURATIONS =
		"backup:ListTieringConfigurations";
	/** [PermissionManagement] backup:PutBackupVaultAccessPolicy */
	static readonly PUT_BACKUP_VAULT_ACCESS_POLICY =
		"backup:PutBackupVaultAccessPolicy";
	/** [Write] backup:PutBackupVaultLockConfiguration */
	static readonly PUT_BACKUP_VAULT_LOCK_CONFIGURATION =
		"backup:PutBackupVaultLockConfiguration";
	/** [Write] backup:PutBackupVaultNotifications */
	static readonly PUT_BACKUP_VAULT_NOTIFICATIONS =
		"backup:PutBackupVaultNotifications";
	/** [PermissionManagement] backup:PutBackupVaultSharingPolicy */
	static readonly PUT_BACKUP_VAULT_SHARING_POLICY =
		"backup:PutBackupVaultSharingPolicy";
	/** [Write] backup:PutRestoreValidationResult */
	static readonly PUT_RESTORE_VALIDATION_RESULT =
		"backup:PutRestoreValidationResult";
	/** [Write] backup:RevokeRestoreAccessBackupVault */
	static readonly REVOKE_RESTORE_ACCESS_BACKUP_VAULT =
		"backup:RevokeRestoreAccessBackupVault";
	/** [PermissionManagement] backup:SearchRecoveryPoint */
	static readonly SEARCH_RECOVERY_POINT = "backup:SearchRecoveryPoint";
	/** [Write] backup:StartBackupJob */
	static readonly START_BACKUP_JOB = "backup:StartBackupJob";
	/** [Write] backup:StartCopyJob */
	static readonly START_COPY_JOB = "backup:StartCopyJob";
	/** [Write] backup:StartReportJob */
	static readonly START_REPORT_JOB = "backup:StartReportJob";
	/** [Write] backup:StartRestoreJob */
	static readonly START_RESTORE_JOB = "backup:StartRestoreJob";
	/** [Write] backup:StartScanJob */
	static readonly START_SCAN_JOB = "backup:StartScanJob";
	/** [Write] backup:StopBackupJob */
	static readonly STOP_BACKUP_JOB = "backup:StopBackupJob";
	/** [Tagging] backup:TagResource */
	static readonly TAG_RESOURCE = "backup:TagResource";
	/** [Tagging] backup:UntagResource */
	static readonly UNTAG_RESOURCE = "backup:UntagResource";
	/** [Write] backup:UpdateBackupPlan */
	static readonly UPDATE_BACKUP_PLAN = "backup:UpdateBackupPlan";
	/** [Write] backup:UpdateFramework */
	static readonly UPDATE_FRAMEWORK = "backup:UpdateFramework";
	/** [Write] backup:UpdateGlobalSettings */
	static readonly UPDATE_GLOBAL_SETTINGS = "backup:UpdateGlobalSettings";
	/** [Write] backup:UpdateRecoveryPointIndexSettings */
	static readonly UPDATE_RECOVERY_POINT_INDEX_SETTINGS =
		"backup:UpdateRecoveryPointIndexSettings";
	/** [Write] backup:UpdateRecoveryPointLifecycle */
	static readonly UPDATE_RECOVERY_POINT_LIFECYCLE =
		"backup:UpdateRecoveryPointLifecycle";
	/** [Write] backup:UpdateRegionSettings */
	static readonly UPDATE_REGION_SETTINGS = "backup:UpdateRegionSettings";
	/** [Write] backup:UpdateReportPlan */
	static readonly UPDATE_REPORT_PLAN = "backup:UpdateReportPlan";
	/** [Write] backup:UpdateRestoreTestingPlan */
	static readonly UPDATE_RESTORE_TESTING_PLAN =
		"backup:UpdateRestoreTestingPlan";
	/** [Write] backup:UpdateRestoreTestingSelection */
	static readonly UPDATE_RESTORE_TESTING_SELECTION =
		"backup:UpdateRestoreTestingSelection";
	/** [Write] backup:UpdateTieringConfiguration */
	static readonly UPDATE_TIERING_CONFIGURATION =
		"backup:UpdateTieringConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BackupActions.DESCRIBE_BACKUP_ACCESS_POINT,
		BackupActions.DESCRIBE_BACKUP_JOB,
		BackupActions.DESCRIBE_BACKUP_VAULT,
		BackupActions.DESCRIBE_COPY_JOB,
		BackupActions.DESCRIBE_FRAMEWORK,
		BackupActions.DESCRIBE_GLOBAL_SETTINGS,
		BackupActions.DESCRIBE_PROTECTED_RESOURCE,
		BackupActions.DESCRIBE_RECOVERY_POINT,
		BackupActions.DESCRIBE_REGION_SETTINGS,
		BackupActions.DESCRIBE_REPORT_JOB,
		BackupActions.DESCRIBE_REPORT_PLAN,
		BackupActions.DESCRIBE_RESTORE_JOB,
		BackupActions.DESCRIBE_SCAN_JOB,
		BackupActions.EXPORT_BACKUP_PLAN_TEMPLATE,
		BackupActions.GET_BACKUP_PLAN,
		BackupActions.GET_BACKUP_PLAN_FROM_JSON,
		BackupActions.GET_BACKUP_PLAN_FROM_TEMPLATE,
		BackupActions.GET_BACKUP_SELECTION,
		BackupActions.GET_BACKUP_VAULT_ACCESS_POLICY,
		BackupActions.GET_BACKUP_VAULT_NOTIFICATIONS,
		BackupActions.GET_BACKUP_VAULT_SHARING_POLICY,
		BackupActions.GET_LEGAL_HOLD,
		BackupActions.GET_PITR_MALWARE_SCAN_RESULTS,
		BackupActions.GET_RECOVERY_POINT_INDEX_DETAILS,
		BackupActions.GET_RECOVERY_POINT_RESTORE_METADATA,
		BackupActions.GET_RESTORE_JOB_METADATA,
		BackupActions.GET_RESTORE_TESTING_INFERRED_METADATA,
		BackupActions.GET_RESTORE_TESTING_PLAN,
		BackupActions.GET_RESTORE_TESTING_SELECTION,
		BackupActions.GET_SUPPORTED_RESOURCE_TYPES,
		BackupActions.GET_TIERING_CONFIGURATION,
		BackupActions.LIST_TAGS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BackupActions.ASSOCIATE_BACKUP_VAULT_MPA_APPROVAL_TEAM,
		BackupActions.CANCEL_LEGAL_HOLD,
		BackupActions.COPY_FROM_BACKUP_VAULT,
		BackupActions.COPY_INTO_BACKUP_VAULT,
		BackupActions.CREATE_BACKUP_ACCESS_POINT,
		BackupActions.CREATE_BACKUP_PLAN,
		BackupActions.CREATE_BACKUP_SELECTION,
		BackupActions.CREATE_BACKUP_VAULT,
		BackupActions.CREATE_FRAMEWORK,
		BackupActions.CREATE_LEGAL_HOLD,
		BackupActions.CREATE_LOGICALLY_AIR_GAPPED_BACKUP_VAULT,
		BackupActions.CREATE_REPORT_PLAN,
		BackupActions.CREATE_RESTORE_ACCESS_BACKUP_VAULT,
		BackupActions.CREATE_RESTORE_TESTING_PLAN,
		BackupActions.CREATE_RESTORE_TESTING_SELECTION,
		BackupActions.CREATE_TIERING_CONFIGURATION,
		BackupActions.DELETE_BACKUP_ACCESS_POINT,
		BackupActions.DELETE_BACKUP_PLAN,
		BackupActions.DELETE_BACKUP_SELECTION,
		BackupActions.DELETE_BACKUP_VAULT,
		BackupActions.DELETE_BACKUP_VAULT_LOCK_CONFIGURATION,
		BackupActions.DELETE_BACKUP_VAULT_NOTIFICATIONS,
		BackupActions.DELETE_FRAMEWORK,
		BackupActions.DELETE_RECOVERY_POINT,
		BackupActions.DELETE_REPORT_PLAN,
		BackupActions.DELETE_RESTORE_TESTING_PLAN,
		BackupActions.DELETE_RESTORE_TESTING_SELECTION,
		BackupActions.DELETE_TIERING_CONFIGURATION,
		BackupActions.DISASSOCIATE_BACKUP_VAULT_MPA_APPROVAL_TEAM,
		BackupActions.DISASSOCIATE_RECOVERY_POINT,
		BackupActions.DISASSOCIATE_RECOVERY_POINT_FROM_PARENT,
		BackupActions.PUT_BACKUP_VAULT_LOCK_CONFIGURATION,
		BackupActions.PUT_BACKUP_VAULT_NOTIFICATIONS,
		BackupActions.PUT_RESTORE_VALIDATION_RESULT,
		BackupActions.REVOKE_RESTORE_ACCESS_BACKUP_VAULT,
		BackupActions.START_BACKUP_JOB,
		BackupActions.START_COPY_JOB,
		BackupActions.START_REPORT_JOB,
		BackupActions.START_RESTORE_JOB,
		BackupActions.START_SCAN_JOB,
		BackupActions.STOP_BACKUP_JOB,
		BackupActions.UPDATE_BACKUP_PLAN,
		BackupActions.UPDATE_FRAMEWORK,
		BackupActions.UPDATE_GLOBAL_SETTINGS,
		BackupActions.UPDATE_RECOVERY_POINT_INDEX_SETTINGS,
		BackupActions.UPDATE_RECOVERY_POINT_LIFECYCLE,
		BackupActions.UPDATE_REGION_SETTINGS,
		BackupActions.UPDATE_REPORT_PLAN,
		BackupActions.UPDATE_RESTORE_TESTING_PLAN,
		BackupActions.UPDATE_RESTORE_TESTING_SELECTION,
		BackupActions.UPDATE_TIERING_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		BackupActions.LIST_BACKUP_ACCESS_POINTS,
		BackupActions.LIST_BACKUP_ACCESS_POINTS_BY_RECOVERY_POINT,
		BackupActions.LIST_BACKUP_ACCESS_POINTS_BY_RESOURCE,
		BackupActions.LIST_BACKUP_JOB_SUMMARIES,
		BackupActions.LIST_BACKUP_JOBS,
		BackupActions.LIST_BACKUP_PLAN_TEMPLATES,
		BackupActions.LIST_BACKUP_PLAN_VERSIONS,
		BackupActions.LIST_BACKUP_PLANS,
		BackupActions.LIST_BACKUP_SELECTIONS,
		BackupActions.LIST_BACKUP_VAULTS,
		BackupActions.LIST_COPY_JOB_SUMMARIES,
		BackupActions.LIST_COPY_JOBS,
		BackupActions.LIST_FRAMEWORKS,
		BackupActions.LIST_INDEXED_RECOVERY_POINTS,
		BackupActions.LIST_LEGAL_HOLDS,
		BackupActions.LIST_PROTECTED_RESOURCES,
		BackupActions.LIST_PROTECTED_RESOURCES_BY_BACKUP_VAULT,
		BackupActions.LIST_RECOVERY_POINTS_BY_BACKUP_VAULT,
		BackupActions.LIST_RECOVERY_POINTS_BY_LEGAL_HOLD,
		BackupActions.LIST_RECOVERY_POINTS_BY_RESOURCE,
		BackupActions.LIST_REPORT_JOBS,
		BackupActions.LIST_REPORT_PLANS,
		BackupActions.LIST_RESTORE_ACCESS_BACKUP_VAULTS,
		BackupActions.LIST_RESTORE_JOB_SUMMARIES,
		BackupActions.LIST_RESTORE_JOBS,
		BackupActions.LIST_RESTORE_JOBS_BY_PROTECTED_RESOURCE,
		BackupActions.LIST_RESTORE_TESTING_PLANS,
		BackupActions.LIST_RESTORE_TESTING_SELECTIONS,
		BackupActions.LIST_SCAN_JOB_SUMMARIES,
		BackupActions.LIST_SCAN_JOBS,
		BackupActions.LIST_TIERING_CONFIGURATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		BackupActions.DELETE_BACKUP_VAULT_ACCESS_POLICY,
		BackupActions.DELETE_BACKUP_VAULT_SHARING_POLICY,
		BackupActions.LIST_INDEXED_RECOVERY_POINTS_FOR_SEARCH,
		BackupActions.PUT_BACKUP_VAULT_ACCESS_POLICY,
		BackupActions.PUT_BACKUP_VAULT_SHARING_POLICY,
		BackupActions.SEARCH_RECOVERY_POINT,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BackupActions.TAG_RESOURCE,
		BackupActions.UNTAG_RESOURCE,
	];
}

const BackupAccessPointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):accesspoint/(?<accessPointName>[^:/?]+)$",
);
const BackupPlanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):backup-plan:(?<backupPlanId>[^:/?]+)$",
);
const BackupVaultArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):backup-vault:(?<backupVaultName>[^:/?]+)$",
);
const FrameworkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):framework:(?<frameworkName>[^:/?]+)-(?<frameworkId>[^:/?]+)$",
);
const LegalHoldArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):legal-hold:(?<legalHoldId>[^:/?]+)$",
);
const RecoveryPointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):(?<vendor>[^:/?]+):(?<region>[^:]*):.*:(?<resourceType>[^:/?]+):(?<recoveryPointId>[^:/?]+)$",
);
const ReportPlanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):report-plan:(?<reportPlanName>[^:/?]+)-(?<reportPlanId>[^:/?]+)$",
);
const RestoreTestingPlanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):restore-testing-plan:(?<restoreTestingPlanName>[^:/?]+)-(?<restoreTestingPlanId>[^:/?]+)$",
);
const TieringConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):tiering-configuration:(?<tieringConfigurationName>[^:/?]+)-(?<tieringConfigurationId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for backup resources.
 */
export class BackupResources {
	/**
	 * Builds an ARN for the backupAccessPoint resource.
	 */
	static backupAccessPoint(props: {
		/** The AccessPointName component of the ARN. */
		readonly accessPointName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup:${props.region ?? "*"}:${props.account ?? "*"}:accesspoint/${props.accessPointName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the backupAccessPoint resource.
	 */
	static isValidBackupAccessPointArn(arn: string): boolean {
		return BackupAccessPointArnRegex.test(arn);
	}

	/**
	 * Parses a backupAccessPoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBackupAccessPointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accessPointName: string;
	} {
		const match = BackupAccessPointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid backupAccessPoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accessPointName: match.groups!.accessPointName,
		};
	}

	/**
	 * Builds an ARN for the backupPlan resource.
	 */
	static backupPlan(props: {
		/** The BackupPlanId component of the ARN. */
		readonly backupPlanId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup:${props.region ?? "*"}:${props.account ?? "*"}:backup-plan:${props.backupPlanId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the backupPlan resource.
	 */
	static isValidBackupPlanArn(arn: string): boolean {
		return BackupPlanArnRegex.test(arn);
	}

	/**
	 * Parses a backupPlan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBackupPlanArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		backupPlanId: string;
	} {
		const match = BackupPlanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid backupPlan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			backupPlanId: match.groups!.backupPlanId,
		};
	}

	/**
	 * Builds an ARN for the backupVault resource.
	 */
	static backupVault(props: {
		/** The BackupVaultName component of the ARN. */
		readonly backupVaultName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup:${props.region ?? "*"}:${props.account ?? "*"}:backup-vault:${props.backupVaultName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the backupVault resource.
	 */
	static isValidBackupVaultArn(arn: string): boolean {
		return BackupVaultArnRegex.test(arn);
	}

	/**
	 * Parses a backupVault ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBackupVaultArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		backupVaultName: string;
	} {
		const match = BackupVaultArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid backupVault ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			backupVaultName: match.groups!.backupVaultName,
		};
	}

	/**
	 * Builds an ARN for the framework resource.
	 */
	static framework(props: {
		/** The FrameworkName component of the ARN. */
		readonly frameworkName: string;
		/** The FrameworkId component of the ARN. */
		readonly frameworkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup:${props.region ?? "*"}:${props.account ?? "*"}:framework:${props.frameworkName}-${props.frameworkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the framework resource.
	 */
	static isValidFrameworkArn(arn: string): boolean {
		return FrameworkArnRegex.test(arn);
	}

	/**
	 * Parses a framework ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFrameworkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		frameworkName: string;
		frameworkId: string;
	} {
		const match = FrameworkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid framework ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			frameworkName: match.groups!.frameworkName,
			frameworkId: match.groups!.frameworkId,
		};
	}

	/**
	 * Builds an ARN for the legalHold resource.
	 */
	static legalHold(props: {
		/** The LegalHoldId component of the ARN. */
		readonly legalHoldId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup:${props.region ?? "*"}:${props.account ?? "*"}:legal-hold:${props.legalHoldId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the legalHold resource.
	 */
	static isValidLegalHoldArn(arn: string): boolean {
		return LegalHoldArnRegex.test(arn);
	}

	/**
	 * Parses a legalHold ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLegalHoldArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		legalHoldId: string;
	} {
		const match = LegalHoldArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid legalHold ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			legalHoldId: match.groups!.legalHoldId,
		};
	}

	/**
	 * Builds an ARN for the recoveryPoint resource.
	 */
	static recoveryPoint(props: {
		/** The Vendor component of the ARN. */
		readonly vendor: string;
		/** The ResourceType component of the ARN. */
		readonly resourceType: string;
		/** The RecoveryPointId component of the ARN. */
		readonly recoveryPointId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:${props.vendor}:${props.region ?? "*"}:*:${props.resourceType}:${props.recoveryPointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the recoveryPoint resource.
	 */
	static isValidRecoveryPointArn(arn: string): boolean {
		return RecoveryPointArnRegex.test(arn);
	}

	/**
	 * Parses a recoveryPoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecoveryPointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vendor: string;
		resourceType: string;
		recoveryPointId: string;
	} {
		const match = RecoveryPointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid recoveryPoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vendor: match.groups!.vendor,
			resourceType: match.groups!.resourceType,
			recoveryPointId: match.groups!.recoveryPointId,
		};
	}

	/**
	 * Builds an ARN for the reportPlan resource.
	 */
	static reportPlan(props: {
		/** The ReportPlanName component of the ARN. */
		readonly reportPlanName: string;
		/** The ReportPlanId component of the ARN. */
		readonly reportPlanId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup:${props.region ?? "*"}:${props.account ?? "*"}:report-plan:${props.reportPlanName}-${props.reportPlanId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the reportPlan resource.
	 */
	static isValidReportPlanArn(arn: string): boolean {
		return ReportPlanArnRegex.test(arn);
	}

	/**
	 * Parses a reportPlan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReportPlanArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		reportPlanName: string;
		reportPlanId: string;
	} {
		const match = ReportPlanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid reportPlan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reportPlanName: match.groups!.reportPlanName,
			reportPlanId: match.groups!.reportPlanId,
		};
	}

	/**
	 * Builds an ARN for the restoreTestingPlan resource.
	 */
	static restoreTestingPlan(props: {
		/** The RestoreTestingPlanName component of the ARN. */
		readonly restoreTestingPlanName: string;
		/** The RestoreTestingPlanId component of the ARN. */
		readonly restoreTestingPlanId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup:${props.region ?? "*"}:${props.account ?? "*"}:restore-testing-plan:${props.restoreTestingPlanName}-${props.restoreTestingPlanId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the restoreTestingPlan resource.
	 */
	static isValidRestoreTestingPlanArn(arn: string): boolean {
		return RestoreTestingPlanArnRegex.test(arn);
	}

	/**
	 * Parses a restoreTestingPlan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRestoreTestingPlanArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		restoreTestingPlanName: string;
		restoreTestingPlanId: string;
	} {
		const match = RestoreTestingPlanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid restoreTestingPlan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			restoreTestingPlanName: match.groups!.restoreTestingPlanName,
			restoreTestingPlanId: match.groups!.restoreTestingPlanId,
		};
	}

	/**
	 * Builds an ARN for the tieringConfiguration resource.
	 */
	static tieringConfiguration(props: {
		/** The TieringConfigurationName component of the ARN. */
		readonly tieringConfigurationName: string;
		/** The TieringConfigurationId component of the ARN. */
		readonly tieringConfigurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup:${props.region ?? "*"}:${props.account ?? "*"}:tiering-configuration:${props.tieringConfigurationName}-${props.tieringConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the tieringConfiguration resource.
	 */
	static isValidTieringConfigurationArn(arn: string): boolean {
		return TieringConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a tieringConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTieringConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tieringConfigurationName: string;
		tieringConfigurationId: string;
	} {
		const match = TieringConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid tieringConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tieringConfigurationName: match.groups!.tieringConfigurationName,
			tieringConfigurationId: match.groups!.tieringConfigurationId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for backup.
 */
export class BackupOperations {
	/** IAM actions required for the AssociateBackupVaultMpaApprovalTeam API call. */
	static readonly ASSOCIATE_BACKUP_VAULT_MPA_APPROVAL_TEAM: string[] = [
		"backup:AssociateBackupVaultMpaApprovalTeam",
	];
	/** IAM actions required for the CancelLegalHold API call. */
	static readonly CANCEL_LEGAL_HOLD: string[] = ["backup:CancelLegalHold"];
	/** IAM actions required for the CreateBackupAccessPoint API call. */
	static readonly CREATE_BACKUP_ACCESS_POINT: string[] = [
		"backup:CreateBackupAccessPoint",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateBackupPlan API call. */
	static readonly CREATE_BACKUP_PLAN: string[] = [
		"backup:CreateBackupPlan",
		"iam:PassRole",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateBackupSelection API call. */
	static readonly CREATE_BACKUP_SELECTION: string[] = [
		"backup:CreateBackupSelection",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateBackupVault API call. */
	static readonly CREATE_BACKUP_VAULT: string[] = [
		"backup:CreateBackupVault",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateFramework API call. */
	static readonly CREATE_FRAMEWORK: string[] = [
		"backup:CreateFramework",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateLegalHold API call. */
	static readonly CREATE_LEGAL_HOLD: string[] = [
		"backup:CreateLegalHold",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateLogicallyAirGappedBackupVault API call. */
	static readonly CREATE_LOGICALLY_AIR_GAPPED_BACKUP_VAULT: string[] = [
		"backup:CreateLogicallyAirGappedBackupVault",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateReportPlan API call. */
	static readonly CREATE_REPORT_PLAN: string[] = [
		"backup:CreateReportPlan",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateRestoreAccessBackupVault API call. */
	static readonly CREATE_RESTORE_ACCESS_BACKUP_VAULT: string[] = [
		"backup:CreateRestoreAccessBackupVault",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateRestoreTestingPlan API call. */
	static readonly CREATE_RESTORE_TESTING_PLAN: string[] = [
		"backup:CreateRestoreTestingPlan",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateRestoreTestingSelection API call. */
	static readonly CREATE_RESTORE_TESTING_SELECTION: string[] = [
		"backup:CreateRestoreTestingSelection",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateTieringConfiguration API call. */
	static readonly CREATE_TIERING_CONFIGURATION: string[] = [
		"backup:CreateTieringConfiguration",
		"backup:TagResource",
	];
	/** IAM actions required for the DeleteBackupAccessPoint API call. */
	static readonly DELETE_BACKUP_ACCESS_POINT: string[] = [
		"backup:DeleteBackupAccessPoint",
	];
	/** IAM actions required for the DeleteBackupPlan API call. */
	static readonly DELETE_BACKUP_PLAN: string[] = ["backup:DeleteBackupPlan"];
	/** IAM actions required for the DeleteBackupSelection API call. */
	static readonly DELETE_BACKUP_SELECTION: string[] = [
		"backup:DeleteBackupSelection",
	];
	/** IAM actions required for the DeleteBackupVault API call. */
	static readonly DELETE_BACKUP_VAULT: string[] = ["backup:DeleteBackupVault"];
	/** IAM actions required for the DeleteBackupVaultAccessPolicy API call. */
	static readonly DELETE_BACKUP_VAULT_ACCESS_POLICY: string[] = [
		"backup:DeleteBackupVaultAccessPolicy",
	];
	/** IAM actions required for the DeleteBackupVaultLockConfiguration API call. */
	static readonly DELETE_BACKUP_VAULT_LOCK_CONFIGURATION: string[] = [
		"backup:DeleteBackupVaultLockConfiguration",
	];
	/** IAM actions required for the DeleteBackupVaultNotifications API call. */
	static readonly DELETE_BACKUP_VAULT_NOTIFICATIONS: string[] = [
		"backup:DeleteBackupVaultNotifications",
	];
	/** IAM actions required for the DeleteFramework API call. */
	static readonly DELETE_FRAMEWORK: string[] = ["backup:DeleteFramework"];
	/** IAM actions required for the DeleteRecoveryPoint API call. */
	static readonly DELETE_RECOVERY_POINT: string[] = [
		"backup:DeleteRecoveryPoint",
	];
	/** IAM actions required for the DeleteReportPlan API call. */
	static readonly DELETE_REPORT_PLAN: string[] = ["backup:DeleteReportPlan"];
	/** IAM actions required for the DeleteRestoreTestingPlan API call. */
	static readonly DELETE_RESTORE_TESTING_PLAN: string[] = [
		"backup:DeleteRestoreTestingPlan",
	];
	/** IAM actions required for the DeleteRestoreTestingSelection API call. */
	static readonly DELETE_RESTORE_TESTING_SELECTION: string[] = [
		"backup:DeleteRestoreTestingSelection",
	];
	/** IAM actions required for the DeleteTieringConfiguration API call. */
	static readonly DELETE_TIERING_CONFIGURATION: string[] = [
		"backup:DeleteTieringConfiguration",
	];
	/** IAM actions required for the DescribeBackupAccessPoint API call. */
	static readonly DESCRIBE_BACKUP_ACCESS_POINT: string[] = [
		"backup:DescribeBackupAccessPoint",
	];
	/** IAM actions required for the DescribeBackupJob API call. */
	static readonly DESCRIBE_BACKUP_JOB: string[] = ["backup:DescribeBackupJob"];
	/** IAM actions required for the DescribeBackupVault API call. */
	static readonly DESCRIBE_BACKUP_VAULT: string[] = [
		"backup:DescribeBackupVault",
	];
	/** IAM actions required for the DescribeCopyJob API call. */
	static readonly DESCRIBE_COPY_JOB: string[] = ["backup:DescribeCopyJob"];
	/** IAM actions required for the DescribeFramework API call. */
	static readonly DESCRIBE_FRAMEWORK: string[] = ["backup:DescribeFramework"];
	/** IAM actions required for the DescribeGlobalSettings API call. */
	static readonly DESCRIBE_GLOBAL_SETTINGS: string[] = [
		"backup:DescribeGlobalSettings",
	];
	/** IAM actions required for the DescribeProtectedResource API call. */
	static readonly DESCRIBE_PROTECTED_RESOURCE: string[] = [
		"backup:DescribeProtectedResource",
	];
	/** IAM actions required for the DescribeRecoveryPoint API call. */
	static readonly DESCRIBE_RECOVERY_POINT: string[] = [
		"backup:DescribeRecoveryPoint",
	];
	/** IAM actions required for the DescribeRegionSettings API call. */
	static readonly DESCRIBE_REGION_SETTINGS: string[] = [
		"backup:DescribeRegionSettings",
	];
	/** IAM actions required for the DescribeReportJob API call. */
	static readonly DESCRIBE_REPORT_JOB: string[] = ["backup:DescribeReportJob"];
	/** IAM actions required for the DescribeReportPlan API call. */
	static readonly DESCRIBE_REPORT_PLAN: string[] = [
		"backup:DescribeReportPlan",
	];
	/** IAM actions required for the DescribeRestoreJob API call. */
	static readonly DESCRIBE_RESTORE_JOB: string[] = [
		"backup:DescribeRestoreJob",
	];
	/** IAM actions required for the DescribeScanJob API call. */
	static readonly DESCRIBE_SCAN_JOB: string[] = ["backup:DescribeScanJob"];
	/** IAM actions required for the DisassociateBackupVaultMpaApprovalTeam API call. */
	static readonly DISASSOCIATE_BACKUP_VAULT_MPA_APPROVAL_TEAM: string[] = [
		"backup:DisassociateBackupVaultMpaApprovalTeam",
	];
	/** IAM actions required for the DisassociateRecoveryPoint API call. */
	static readonly DISASSOCIATE_RECOVERY_POINT: string[] = [
		"backup:DisassociateRecoveryPoint",
	];
	/** IAM actions required for the DisassociateRecoveryPointFromParent API call. */
	static readonly DISASSOCIATE_RECOVERY_POINT_FROM_PARENT: string[] = [
		"backup:DisassociateRecoveryPointFromParent",
	];
	/** IAM actions required for the ExportBackupPlanTemplate API call. */
	static readonly EXPORT_BACKUP_PLAN_TEMPLATE: string[] = [
		"backup:ExportBackupPlanTemplate",
	];
	/** IAM actions required for the GetBackupPlan API call. */
	static readonly GET_BACKUP_PLAN: string[] = ["backup:GetBackupPlan"];
	/** IAM actions required for the GetBackupPlanFromJSON API call. */
	static readonly GET_BACKUP_PLAN_FROM_JSON: string[] = [
		"backup:GetBackupPlanFromJSON",
	];
	/** IAM actions required for the GetBackupPlanFromTemplate API call. */
	static readonly GET_BACKUP_PLAN_FROM_TEMPLATE: string[] = [
		"backup:GetBackupPlanFromTemplate",
	];
	/** IAM actions required for the GetBackupSelection API call. */
	static readonly GET_BACKUP_SELECTION: string[] = [
		"backup:GetBackupSelection",
	];
	/** IAM actions required for the GetBackupVaultAccessPolicy API call. */
	static readonly GET_BACKUP_VAULT_ACCESS_POLICY: string[] = [
		"backup:GetBackupVaultAccessPolicy",
	];
	/** IAM actions required for the GetBackupVaultNotifications API call. */
	static readonly GET_BACKUP_VAULT_NOTIFICATIONS: string[] = [
		"backup:GetBackupVaultNotifications",
	];
	/** IAM actions required for the GetLegalHold API call. */
	static readonly GET_LEGAL_HOLD: string[] = ["backup:GetLegalHold"];
	/** IAM actions required for the GetPITRMalwareScanResults API call. */
	static readonly GET_PITR_MALWARE_SCAN_RESULTS: string[] = [
		"backup:GetPITRMalwareScanResults",
	];
	/** IAM actions required for the GetRecoveryPointIndexDetails API call. */
	static readonly GET_RECOVERY_POINT_INDEX_DETAILS: string[] = [
		"backup:GetRecoveryPointIndexDetails",
	];
	/** IAM actions required for the GetRecoveryPointRestoreMetadata API call. */
	static readonly GET_RECOVERY_POINT_RESTORE_METADATA: string[] = [
		"backup:GetRecoveryPointRestoreMetadata",
	];
	/** IAM actions required for the GetRestoreJobMetadata API call. */
	static readonly GET_RESTORE_JOB_METADATA: string[] = [
		"backup:GetRestoreJobMetadata",
	];
	/** IAM actions required for the GetRestoreTestingInferredMetadata API call. */
	static readonly GET_RESTORE_TESTING_INFERRED_METADATA: string[] = [
		"backup:GetRestoreTestingInferredMetadata",
	];
	/** IAM actions required for the GetRestoreTestingPlan API call. */
	static readonly GET_RESTORE_TESTING_PLAN: string[] = [
		"backup:GetRestoreTestingPlan",
	];
	/** IAM actions required for the GetRestoreTestingSelection API call. */
	static readonly GET_RESTORE_TESTING_SELECTION: string[] = [
		"backup:GetRestoreTestingSelection",
	];
	/** IAM actions required for the GetSupportedResourceTypes API call. */
	static readonly GET_SUPPORTED_RESOURCE_TYPES: string[] = [
		"backup:GetSupportedResourceTypes",
	];
	/** IAM actions required for the GetTieringConfiguration API call. */
	static readonly GET_TIERING_CONFIGURATION: string[] = [
		"backup:GetTieringConfiguration",
	];
	/** IAM actions required for the ListBackupAccessPoints API call. */
	static readonly LIST_BACKUP_ACCESS_POINTS: string[] = [
		"backup:ListBackupAccessPoints",
	];
	/** IAM actions required for the ListBackupAccessPointsByRecoveryPoint API call. */
	static readonly LIST_BACKUP_ACCESS_POINTS_BY_RECOVERY_POINT: string[] = [
		"backup:ListBackupAccessPointsByRecoveryPoint",
	];
	/** IAM actions required for the ListBackupAccessPointsByResource API call. */
	static readonly LIST_BACKUP_ACCESS_POINTS_BY_RESOURCE: string[] = [
		"backup:ListBackupAccessPointsByResource",
	];
	/** IAM actions required for the ListBackupJobSummaries API call. */
	static readonly LIST_BACKUP_JOB_SUMMARIES: string[] = [
		"backup:ListBackupJobSummaries",
	];
	/** IAM actions required for the ListBackupJobs API call. */
	static readonly LIST_BACKUP_JOBS: string[] = ["backup:ListBackupJobs"];
	/** IAM actions required for the ListBackupPlanTemplates API call. */
	static readonly LIST_BACKUP_PLAN_TEMPLATES: string[] = [
		"backup:ListBackupPlanTemplates",
	];
	/** IAM actions required for the ListBackupPlanVersions API call. */
	static readonly LIST_BACKUP_PLAN_VERSIONS: string[] = [
		"backup:ListBackupPlanVersions",
	];
	/** IAM actions required for the ListBackupPlans API call. */
	static readonly LIST_BACKUP_PLANS: string[] = ["backup:ListBackupPlans"];
	/** IAM actions required for the ListBackupSelections API call. */
	static readonly LIST_BACKUP_SELECTIONS: string[] = [
		"backup:ListBackupSelections",
	];
	/** IAM actions required for the ListBackupVaults API call. */
	static readonly LIST_BACKUP_VAULTS: string[] = ["backup:ListBackupVaults"];
	/** IAM actions required for the ListCopyJobSummaries API call. */
	static readonly LIST_COPY_JOB_SUMMARIES: string[] = [
		"backup:ListCopyJobSummaries",
	];
	/** IAM actions required for the ListCopyJobs API call. */
	static readonly LIST_COPY_JOBS: string[] = ["backup:ListCopyJobs"];
	/** IAM actions required for the ListFrameworks API call. */
	static readonly LIST_FRAMEWORKS: string[] = ["backup:ListFrameworks"];
	/** IAM actions required for the ListIndexedRecoveryPoints API call. */
	static readonly LIST_INDEXED_RECOVERY_POINTS: string[] = [
		"backup:ListIndexedRecoveryPoints",
	];
	/** IAM actions required for the ListLegalHolds API call. */
	static readonly LIST_LEGAL_HOLDS: string[] = ["backup:ListLegalHolds"];
	/** IAM actions required for the ListProtectedResources API call. */
	static readonly LIST_PROTECTED_RESOURCES: string[] = [
		"backup:ListProtectedResources",
	];
	/** IAM actions required for the ListProtectedResourcesByBackupVault API call. */
	static readonly LIST_PROTECTED_RESOURCES_BY_BACKUP_VAULT: string[] = [
		"backup:ListProtectedResourcesByBackupVault",
	];
	/** IAM actions required for the ListRecoveryPointsByBackupVault API call. */
	static readonly LIST_RECOVERY_POINTS_BY_BACKUP_VAULT: string[] = [
		"backup:ListRecoveryPointsByBackupVault",
	];
	/** IAM actions required for the ListRecoveryPointsByLegalHold API call. */
	static readonly LIST_RECOVERY_POINTS_BY_LEGAL_HOLD: string[] = [
		"backup:ListRecoveryPointsByLegalHold",
	];
	/** IAM actions required for the ListRecoveryPointsByResource API call. */
	static readonly LIST_RECOVERY_POINTS_BY_RESOURCE: string[] = [
		"backup:ListRecoveryPointsByResource",
	];
	/** IAM actions required for the ListReportJobs API call. */
	static readonly LIST_REPORT_JOBS: string[] = ["backup:ListReportJobs"];
	/** IAM actions required for the ListReportPlans API call. */
	static readonly LIST_REPORT_PLANS: string[] = ["backup:ListReportPlans"];
	/** IAM actions required for the ListRestoreAccessBackupVaults API call. */
	static readonly LIST_RESTORE_ACCESS_BACKUP_VAULTS: string[] = [
		"backup:ListRestoreAccessBackupVaults",
	];
	/** IAM actions required for the ListRestoreJobSummaries API call. */
	static readonly LIST_RESTORE_JOB_SUMMARIES: string[] = [
		"backup:ListRestoreJobSummaries",
	];
	/** IAM actions required for the ListRestoreJobs API call. */
	static readonly LIST_RESTORE_JOBS: string[] = ["backup:ListRestoreJobs"];
	/** IAM actions required for the ListRestoreJobsByProtectedResource API call. */
	static readonly LIST_RESTORE_JOBS_BY_PROTECTED_RESOURCE: string[] = [
		"backup:ListRestoreJobsByProtectedResource",
	];
	/** IAM actions required for the ListRestoreTestingPlans API call. */
	static readonly LIST_RESTORE_TESTING_PLANS: string[] = [
		"backup:ListRestoreTestingPlans",
	];
	/** IAM actions required for the ListRestoreTestingSelections API call. */
	static readonly LIST_RESTORE_TESTING_SELECTIONS: string[] = [
		"backup:ListRestoreTestingSelections",
	];
	/** IAM actions required for the ListScanJobSummaries API call. */
	static readonly LIST_SCAN_JOB_SUMMARIES: string[] = [
		"backup:ListScanJobSummaries",
	];
	/** IAM actions required for the ListScanJobs API call. */
	static readonly LIST_SCAN_JOBS: string[] = ["backup:ListScanJobs"];
	/** IAM actions required for the ListTags API call. */
	static readonly LIST_TAGS: string[] = ["backup:ListTags"];
	/** IAM actions required for the ListTieringConfigurations API call. */
	static readonly LIST_TIERING_CONFIGURATIONS: string[] = [
		"backup:ListTieringConfigurations",
	];
	/** IAM actions required for the PutBackupVaultAccessPolicy API call. */
	static readonly PUT_BACKUP_VAULT_ACCESS_POLICY: string[] = [
		"backup:PutBackupVaultAccessPolicy",
	];
	/** IAM actions required for the PutBackupVaultLockConfiguration API call. */
	static readonly PUT_BACKUP_VAULT_LOCK_CONFIGURATION: string[] = [
		"backup:PutBackupVaultLockConfiguration",
	];
	/** IAM actions required for the PutBackupVaultNotifications API call. */
	static readonly PUT_BACKUP_VAULT_NOTIFICATIONS: string[] = [
		"backup:PutBackupVaultNotifications",
	];
	/** IAM actions required for the PutRestoreValidationResult API call. */
	static readonly PUT_RESTORE_VALIDATION_RESULT: string[] = [
		"backup:PutRestoreValidationResult",
	];
	/** IAM actions required for the RevokeRestoreAccessBackupVault API call. */
	static readonly REVOKE_RESTORE_ACCESS_BACKUP_VAULT: string[] = [
		"backup:RevokeRestoreAccessBackupVault",
	];
	/** IAM actions required for the StartBackupJob API call. */
	static readonly START_BACKUP_JOB: string[] = [
		"iam:PassRole",
		"backup:StartBackupJob",
	];
	/** IAM actions required for the StartCopyJob API call. */
	static readonly START_COPY_JOB: string[] = [
		"iam:PassRole",
		"backup:StartCopyJob",
	];
	/** IAM actions required for the StartReportJob API call. */
	static readonly START_REPORT_JOB: string[] = ["backup:StartReportJob"];
	/** IAM actions required for the StartRestoreJob API call. */
	static readonly START_RESTORE_JOB: string[] = [
		"iam:PassRole",
		"backup:StartRestoreJob",
	];
	/** IAM actions required for the StartScanJob API call. */
	static readonly START_SCAN_JOB: string[] = [
		"iam:PassRole",
		"backup:StartScanJob",
	];
	/** IAM actions required for the StopBackupJob API call. */
	static readonly STOP_BACKUP_JOB: string[] = ["backup:StopBackupJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["backup:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["backup:UntagResource"];
	/** IAM actions required for the UpdateBackupPlan API call. */
	static readonly UPDATE_BACKUP_PLAN: string[] = [
		"iam:PassRole",
		"backup:UpdateBackupPlan",
	];
	/** IAM actions required for the UpdateFramework API call. */
	static readonly UPDATE_FRAMEWORK: string[] = ["backup:UpdateFramework"];
	/** IAM actions required for the UpdateGlobalSettings API call. */
	static readonly UPDATE_GLOBAL_SETTINGS: string[] = [
		"backup:UpdateGlobalSettings",
	];
	/** IAM actions required for the UpdateRecoveryPointIndexSettings API call. */
	static readonly UPDATE_RECOVERY_POINT_INDEX_SETTINGS: string[] = [
		"iam:PassRole",
		"backup:UpdateRecoveryPointIndexSettings",
	];
	/** IAM actions required for the UpdateRecoveryPointLifecycle API call. */
	static readonly UPDATE_RECOVERY_POINT_LIFECYCLE: string[] = [
		"backup:UpdateRecoveryPointLifecycle",
	];
	/** IAM actions required for the UpdateRegionSettings API call. */
	static readonly UPDATE_REGION_SETTINGS: string[] = [
		"backup:UpdateRegionSettings",
	];
	/** IAM actions required for the UpdateReportPlan API call. */
	static readonly UPDATE_REPORT_PLAN: string[] = ["backup:UpdateReportPlan"];
	/** IAM actions required for the UpdateRestoreTestingPlan API call. */
	static readonly UPDATE_RESTORE_TESTING_PLAN: string[] = [
		"backup:UpdateRestoreTestingPlan",
	];
	/** IAM actions required for the UpdateRestoreTestingSelection API call. */
	static readonly UPDATE_RESTORE_TESTING_SELECTION: string[] = [
		"iam:PassRole",
		"backup:UpdateRestoreTestingSelection",
	];
	/** IAM actions required for the UpdateTieringConfiguration API call. */
	static readonly UPDATE_TIERING_CONFIGURATION: string[] = [
		"backup:UpdateTieringConfiguration",
	];
}

/**
 * Condition key constants and builders for backup.
 */
export class BackupConditions {
	/** Condition keys applicable to the AssociateBackupVaultMpaApprovalTeam action. */
	static readonly ASSOCIATE_BACKUP_VAULT_MPA_APPROVAL_TEAM_CONDITION_KEYS: string[] =
		["backup:MpaApprovalTeamArn"];
	/** Condition keys applicable to the CopyFromBackupVault action. */
	static readonly COPY_FROM_BACKUP_VAULT_CONDITION_KEYS: string[] = [
		"backup:CopyTargetOrgPaths",
		"backup:CopyTargets",
	];
	/** Condition keys applicable to the CopyIntoBackupVault action. */
	static readonly COPY_INTO_BACKUP_VAULT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateBackupAccessPoint action. */
	static readonly CREATE_BACKUP_ACCESS_POINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBackupPlan action. */
	static readonly CREATE_BACKUP_PLAN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBackupVault action. */
	static readonly CREATE_BACKUP_VAULT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFramework action. */
	static readonly CREATE_FRAMEWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLegalHold action. */
	static readonly CREATE_LEGAL_HOLD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLogicallyAirGappedBackupVault action. */
	static readonly CREATE_LOGICALLY_AIR_GAPPED_BACKUP_VAULT_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"backup:MaxRetentionDays",
			"backup:MinRetentionDays",
		];
	/** Condition keys applicable to the CreateReportPlan action. */
	static readonly CREATE_REPORT_PLAN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"backup:FrameworkArns",
	];
	/** Condition keys applicable to the CreateRestoreAccessBackupVault action. */
	static readonly CREATE_RESTORE_ACCESS_BACKUP_VAULT_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateRestoreTestingPlan action. */
	static readonly CREATE_RESTORE_TESTING_PLAN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTieringConfiguration action. */
	static readonly CREATE_TIERING_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutBackupVaultLockConfiguration action. */
	static readonly PUT_BACKUP_VAULT_LOCK_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"backup:ChangeableForDays",
			"backup:MaxRetentionDays",
			"backup:MinRetentionDays",
		];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateRecoveryPointIndexSettings action. */
	static readonly UPDATE_RECOVERY_POINT_INDEX_SETTINGS_CONDITION_KEYS: string[] =
		["backup:Index"];
	/** Condition keys applicable to the UpdateReportPlan action. */
	static readonly UPDATE_REPORT_PLAN_CONDITION_KEYS: string[] = [
		"backup:FrameworkArns",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: backup:ChangeableForDays (Numeric) */
	static readonly CHANGEABLE_FOR_DAYS = "backup:ChangeableForDays";
	/** Condition key: backup:CopyTargetOrgPaths (ArrayOfString) */
	static readonly COPY_TARGET_ORG_PATHS = "backup:CopyTargetOrgPaths";
	/** Condition key: backup:CopyTargets (ArrayOfARN) */
	static readonly COPY_TARGETS = "backup:CopyTargets";
	/** Condition key: backup:FrameworkArns (ArrayOfARN) */
	static readonly FRAMEWORK_ARNS = "backup:FrameworkArns";
	/** Condition key: backup:Index (String) */
	static readonly INDEX = "backup:Index";
	/** Condition key: backup:MaxRetentionDays (Numeric) */
	static readonly MAX_RETENTION_DAYS = "backup:MaxRetentionDays";
	/** Condition key: backup:MinRetentionDays (Numeric) */
	static readonly MIN_RETENTION_DAYS = "backup:MinRetentionDays";
	/** Condition key: backup:MpaApprovalTeamArn (ARN) */
	static readonly MPA_APPROVAL_TEAM_ARN = "backup:MpaApprovalTeamArn";

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
	 * Generates a condition block for `backup:ChangeableForDays`.
	 */
	static changeableForDays(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "backup:ChangeableForDays": value } };
	}

	/**
	 * Generates a condition block for `backup:CopyTargetOrgPaths`.
	 */
	static copyTargetOrgPaths(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "backup:CopyTargetOrgPaths": values },
		};
	}

	/**
	 * Generates a condition block for `backup:CopyTargets`.
	 */
	static copyTargets(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "backup:CopyTargets": values } };
	}

	/**
	 * Generates a condition block for `backup:FrameworkArns`.
	 */
	static frameworkArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "backup:FrameworkArns": values } };
	}

	/**
	 * Generates a condition block for `backup:Index`.
	 */
	static index(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "backup:Index": value } };
	}

	/**
	 * Generates a condition block for `backup:MaxRetentionDays`.
	 */
	static maxRetentionDays(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "backup:MaxRetentionDays": value } };
	}

	/**
	 * Generates a condition block for `backup:MinRetentionDays`.
	 */
	static minRetentionDays(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "backup:MinRetentionDays": value } };
	}

	/**
	 * Generates a condition block for `backup:MpaApprovalTeamArn`.
	 */
	static mpaApprovalTeamARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "backup:MpaApprovalTeamArn": value } };
	}
}
