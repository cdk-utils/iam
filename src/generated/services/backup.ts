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
	static readonly AssociateBackupVaultMpaApprovalTeam =
		"backup:AssociateBackupVaultMpaApprovalTeam";
	/** [Write] backup:CancelLegalHold */
	static readonly CancelLegalHold = "backup:CancelLegalHold";
	/** [Write] backup:CopyFromBackupVault */
	static readonly CopyFromBackupVault = "backup:CopyFromBackupVault";
	/** [Write] backup:CopyIntoBackupVault */
	static readonly CopyIntoBackupVault = "backup:CopyIntoBackupVault";
	/** [Write] backup:CreateBackupAccessPoint */
	static readonly CreateBackupAccessPoint = "backup:CreateBackupAccessPoint";
	/** [Write] backup:CreateBackupPlan */
	static readonly CreateBackupPlan = "backup:CreateBackupPlan";
	/** [Write] backup:CreateBackupSelection */
	static readonly CreateBackupSelection = "backup:CreateBackupSelection";
	/** [Write] backup:CreateBackupVault */
	static readonly CreateBackupVault = "backup:CreateBackupVault";
	/** [Write] backup:CreateFramework */
	static readonly CreateFramework = "backup:CreateFramework";
	/** [Write] backup:CreateLegalHold */
	static readonly CreateLegalHold = "backup:CreateLegalHold";
	/** [Write] backup:CreateLogicallyAirGappedBackupVault */
	static readonly CreateLogicallyAirGappedBackupVault =
		"backup:CreateLogicallyAirGappedBackupVault";
	/** [Write] backup:CreateReportPlan */
	static readonly CreateReportPlan = "backup:CreateReportPlan";
	/** [Write] backup:CreateRestoreAccessBackupVault */
	static readonly CreateRestoreAccessBackupVault =
		"backup:CreateRestoreAccessBackupVault";
	/** [Write] backup:CreateRestoreTestingPlan */
	static readonly CreateRestoreTestingPlan = "backup:CreateRestoreTestingPlan";
	/** [Write] backup:CreateRestoreTestingSelection */
	static readonly CreateRestoreTestingSelection =
		"backup:CreateRestoreTestingSelection";
	/** [Write] backup:CreateTieringConfiguration */
	static readonly CreateTieringConfiguration =
		"backup:CreateTieringConfiguration";
	/** [Write] backup:DeleteBackupAccessPoint */
	static readonly DeleteBackupAccessPoint = "backup:DeleteBackupAccessPoint";
	/** [Write] backup:DeleteBackupPlan */
	static readonly DeleteBackupPlan = "backup:DeleteBackupPlan";
	/** [Write] backup:DeleteBackupSelection */
	static readonly DeleteBackupSelection = "backup:DeleteBackupSelection";
	/** [Write] backup:DeleteBackupVault */
	static readonly DeleteBackupVault = "backup:DeleteBackupVault";
	/** [PermissionManagement] backup:DeleteBackupVaultAccessPolicy */
	static readonly DeleteBackupVaultAccessPolicy =
		"backup:DeleteBackupVaultAccessPolicy";
	/** [Write] backup:DeleteBackupVaultLockConfiguration */
	static readonly DeleteBackupVaultLockConfiguration =
		"backup:DeleteBackupVaultLockConfiguration";
	/** [Write] backup:DeleteBackupVaultNotifications */
	static readonly DeleteBackupVaultNotifications =
		"backup:DeleteBackupVaultNotifications";
	/** [PermissionManagement] backup:DeleteBackupVaultSharingPolicy */
	static readonly DeleteBackupVaultSharingPolicy =
		"backup:DeleteBackupVaultSharingPolicy";
	/** [Write] backup:DeleteFramework */
	static readonly DeleteFramework = "backup:DeleteFramework";
	/** [Write] backup:DeleteRecoveryPoint */
	static readonly DeleteRecoveryPoint = "backup:DeleteRecoveryPoint";
	/** [Write] backup:DeleteReportPlan */
	static readonly DeleteReportPlan = "backup:DeleteReportPlan";
	/** [Write] backup:DeleteRestoreTestingPlan */
	static readonly DeleteRestoreTestingPlan = "backup:DeleteRestoreTestingPlan";
	/** [Write] backup:DeleteRestoreTestingSelection */
	static readonly DeleteRestoreTestingSelection =
		"backup:DeleteRestoreTestingSelection";
	/** [Write] backup:DeleteTieringConfiguration */
	static readonly DeleteTieringConfiguration =
		"backup:DeleteTieringConfiguration";
	/** [Read] backup:DescribeBackupAccessPoint */
	static readonly DescribeBackupAccessPoint =
		"backup:DescribeBackupAccessPoint";
	/** [Read] backup:DescribeBackupJob */
	static readonly DescribeBackupJob = "backup:DescribeBackupJob";
	/** [Read] backup:DescribeBackupVault */
	static readonly DescribeBackupVault = "backup:DescribeBackupVault";
	/** [Read] backup:DescribeCopyJob */
	static readonly DescribeCopyJob = "backup:DescribeCopyJob";
	/** [Read] backup:DescribeFramework */
	static readonly DescribeFramework = "backup:DescribeFramework";
	/** [Read] backup:DescribeGlobalSettings */
	static readonly DescribeGlobalSettings = "backup:DescribeGlobalSettings";
	/** [Read] backup:DescribeProtectedResource */
	static readonly DescribeProtectedResource =
		"backup:DescribeProtectedResource";
	/** [Read] backup:DescribeRecoveryPoint */
	static readonly DescribeRecoveryPoint = "backup:DescribeRecoveryPoint";
	/** [Read] backup:DescribeRegionSettings */
	static readonly DescribeRegionSettings = "backup:DescribeRegionSettings";
	/** [Read] backup:DescribeReportJob */
	static readonly DescribeReportJob = "backup:DescribeReportJob";
	/** [Read] backup:DescribeReportPlan */
	static readonly DescribeReportPlan = "backup:DescribeReportPlan";
	/** [Read] backup:DescribeRestoreJob */
	static readonly DescribeRestoreJob = "backup:DescribeRestoreJob";
	/** [Read] backup:DescribeScanJob */
	static readonly DescribeScanJob = "backup:DescribeScanJob";
	/** [Write] backup:DisassociateBackupVaultMpaApprovalTeam */
	static readonly DisassociateBackupVaultMpaApprovalTeam =
		"backup:DisassociateBackupVaultMpaApprovalTeam";
	/** [Write] backup:DisassociateRecoveryPoint */
	static readonly DisassociateRecoveryPoint =
		"backup:DisassociateRecoveryPoint";
	/** [Write] backup:DisassociateRecoveryPointFromParent */
	static readonly DisassociateRecoveryPointFromParent =
		"backup:DisassociateRecoveryPointFromParent";
	/** [Read] backup:ExportBackupPlanTemplate */
	static readonly ExportBackupPlanTemplate = "backup:ExportBackupPlanTemplate";
	/** [Read] backup:GetBackupPlan */
	static readonly actionGetBackupPlan = "backup:GetBackupPlan";
	/** [Read] backup:GetBackupPlanFromJSON */
	static readonly actionGetBackupPlanFromJSON = "backup:GetBackupPlanFromJSON";
	/** [Read] backup:GetBackupPlanFromTemplate */
	static readonly actionGetBackupPlanFromTemplate =
		"backup:GetBackupPlanFromTemplate";
	/** [Read] backup:GetBackupSelection */
	static readonly actionGetBackupSelection = "backup:GetBackupSelection";
	/** [Read] backup:GetBackupVaultAccessPolicy */
	static readonly actionGetBackupVaultAccessPolicy =
		"backup:GetBackupVaultAccessPolicy";
	/** [Read] backup:GetBackupVaultNotifications */
	static readonly actionGetBackupVaultNotifications =
		"backup:GetBackupVaultNotifications";
	/** [Read] backup:GetBackupVaultSharingPolicy */
	static readonly actionGetBackupVaultSharingPolicy =
		"backup:GetBackupVaultSharingPolicy";
	/** [Read] backup:GetLegalHold */
	static readonly actionGetLegalHold = "backup:GetLegalHold";
	/** [Read] backup:GetPITRMalwareScanResults */
	static readonly actionGetPITRMalwareScanResults =
		"backup:GetPITRMalwareScanResults";
	/** [Read] backup:GetRecoveryPointIndexDetails */
	static readonly actionGetRecoveryPointIndexDetails =
		"backup:GetRecoveryPointIndexDetails";
	/** [Read] backup:GetRecoveryPointRestoreMetadata */
	static readonly actionGetRecoveryPointRestoreMetadata =
		"backup:GetRecoveryPointRestoreMetadata";
	/** [Read] backup:GetRestoreJobMetadata */
	static readonly actionGetRestoreJobMetadata = "backup:GetRestoreJobMetadata";
	/** [Read] backup:GetRestoreTestingInferredMetadata */
	static readonly actionGetRestoreTestingInferredMetadata =
		"backup:GetRestoreTestingInferredMetadata";
	/** [Read] backup:GetRestoreTestingPlan */
	static readonly actionGetRestoreTestingPlan = "backup:GetRestoreTestingPlan";
	/** [Read] backup:GetRestoreTestingSelection */
	static readonly actionGetRestoreTestingSelection =
		"backup:GetRestoreTestingSelection";
	/** [Read] backup:GetSupportedResourceTypes */
	static readonly actionGetSupportedResourceTypes =
		"backup:GetSupportedResourceTypes";
	/** [Read] backup:GetTieringConfiguration */
	static readonly actionGetTieringConfiguration =
		"backup:GetTieringConfiguration";
	/** [List] backup:ListBackupAccessPoints */
	static readonly ListBackupAccessPoints = "backup:ListBackupAccessPoints";
	/** [List] backup:ListBackupAccessPointsByRecoveryPoint */
	static readonly ListBackupAccessPointsByRecoveryPoint =
		"backup:ListBackupAccessPointsByRecoveryPoint";
	/** [List] backup:ListBackupAccessPointsByResource */
	static readonly ListBackupAccessPointsByResource =
		"backup:ListBackupAccessPointsByResource";
	/** [List] backup:ListBackupJobSummaries */
	static readonly ListBackupJobSummaries = "backup:ListBackupJobSummaries";
	/** [List] backup:ListBackupJobs */
	static readonly ListBackupJobs = "backup:ListBackupJobs";
	/** [List] backup:ListBackupPlanTemplates */
	static readonly ListBackupPlanTemplates = "backup:ListBackupPlanTemplates";
	/** [List] backup:ListBackupPlanVersions */
	static readonly ListBackupPlanVersions = "backup:ListBackupPlanVersions";
	/** [List] backup:ListBackupPlans */
	static readonly ListBackupPlans = "backup:ListBackupPlans";
	/** [List] backup:ListBackupSelections */
	static readonly ListBackupSelections = "backup:ListBackupSelections";
	/** [List] backup:ListBackupVaults */
	static readonly ListBackupVaults = "backup:ListBackupVaults";
	/** [List] backup:ListCopyJobSummaries */
	static readonly ListCopyJobSummaries = "backup:ListCopyJobSummaries";
	/** [List] backup:ListCopyJobs */
	static readonly ListCopyJobs = "backup:ListCopyJobs";
	/** [List] backup:ListFrameworks */
	static readonly ListFrameworks = "backup:ListFrameworks";
	/** [List] backup:ListIndexedRecoveryPoints */
	static readonly ListIndexedRecoveryPoints =
		"backup:ListIndexedRecoveryPoints";
	/** [PermissionManagement] backup:ListIndexedRecoveryPointsForSearch */
	static readonly ListIndexedRecoveryPointsForSearch =
		"backup:ListIndexedRecoveryPointsForSearch";
	/** [List] backup:ListLegalHolds */
	static readonly ListLegalHolds = "backup:ListLegalHolds";
	/** [List] backup:ListProtectedResources */
	static readonly ListProtectedResources = "backup:ListProtectedResources";
	/** [List] backup:ListProtectedResourcesByBackupVault */
	static readonly ListProtectedResourcesByBackupVault =
		"backup:ListProtectedResourcesByBackupVault";
	/** [List] backup:ListRecoveryPointsByBackupVault */
	static readonly ListRecoveryPointsByBackupVault =
		"backup:ListRecoveryPointsByBackupVault";
	/** [List] backup:ListRecoveryPointsByLegalHold */
	static readonly ListRecoveryPointsByLegalHold =
		"backup:ListRecoveryPointsByLegalHold";
	/** [List] backup:ListRecoveryPointsByResource */
	static readonly ListRecoveryPointsByResource =
		"backup:ListRecoveryPointsByResource";
	/** [List] backup:ListReportJobs */
	static readonly ListReportJobs = "backup:ListReportJobs";
	/** [List] backup:ListReportPlans */
	static readonly ListReportPlans = "backup:ListReportPlans";
	/** [List] backup:ListRestoreAccessBackupVaults */
	static readonly ListRestoreAccessBackupVaults =
		"backup:ListRestoreAccessBackupVaults";
	/** [List] backup:ListRestoreJobSummaries */
	static readonly ListRestoreJobSummaries = "backup:ListRestoreJobSummaries";
	/** [List] backup:ListRestoreJobs */
	static readonly ListRestoreJobs = "backup:ListRestoreJobs";
	/** [List] backup:ListRestoreJobsByProtectedResource */
	static readonly ListRestoreJobsByProtectedResource =
		"backup:ListRestoreJobsByProtectedResource";
	/** [List] backup:ListRestoreTestingPlans */
	static readonly ListRestoreTestingPlans = "backup:ListRestoreTestingPlans";
	/** [List] backup:ListRestoreTestingSelections */
	static readonly ListRestoreTestingSelections =
		"backup:ListRestoreTestingSelections";
	/** [List] backup:ListScanJobSummaries */
	static readonly ListScanJobSummaries = "backup:ListScanJobSummaries";
	/** [List] backup:ListScanJobs */
	static readonly ListScanJobs = "backup:ListScanJobs";
	/** [Read] backup:ListTags */
	static readonly ListTags = "backup:ListTags";
	/** [List] backup:ListTieringConfigurations */
	static readonly ListTieringConfigurations =
		"backup:ListTieringConfigurations";
	/** [PermissionManagement] backup:PutBackupVaultAccessPolicy */
	static readonly PutBackupVaultAccessPolicy =
		"backup:PutBackupVaultAccessPolicy";
	/** [Write] backup:PutBackupVaultLockConfiguration */
	static readonly PutBackupVaultLockConfiguration =
		"backup:PutBackupVaultLockConfiguration";
	/** [Write] backup:PutBackupVaultNotifications */
	static readonly PutBackupVaultNotifications =
		"backup:PutBackupVaultNotifications";
	/** [PermissionManagement] backup:PutBackupVaultSharingPolicy */
	static readonly PutBackupVaultSharingPolicy =
		"backup:PutBackupVaultSharingPolicy";
	/** [Write] backup:PutRestoreValidationResult */
	static readonly PutRestoreValidationResult =
		"backup:PutRestoreValidationResult";
	/** [Write] backup:RevokeRestoreAccessBackupVault */
	static readonly RevokeRestoreAccessBackupVault =
		"backup:RevokeRestoreAccessBackupVault";
	/** [PermissionManagement] backup:SearchRecoveryPoint */
	static readonly SearchRecoveryPoint = "backup:SearchRecoveryPoint";
	/** [Write] backup:StartBackupJob */
	static readonly StartBackupJob = "backup:StartBackupJob";
	/** [Write] backup:StartCopyJob */
	static readonly StartCopyJob = "backup:StartCopyJob";
	/** [Write] backup:StartReportJob */
	static readonly StartReportJob = "backup:StartReportJob";
	/** [Write] backup:StartRestoreJob */
	static readonly StartRestoreJob = "backup:StartRestoreJob";
	/** [Write] backup:StartScanJob */
	static readonly StartScanJob = "backup:StartScanJob";
	/** [Write] backup:StopBackupJob */
	static readonly StopBackupJob = "backup:StopBackupJob";
	/** [Tagging] backup:TagResource */
	static readonly TagResource = "backup:TagResource";
	/** [Tagging] backup:UntagResource */
	static readonly UntagResource = "backup:UntagResource";
	/** [Write] backup:UpdateBackupPlan */
	static readonly UpdateBackupPlan = "backup:UpdateBackupPlan";
	/** [Write] backup:UpdateFramework */
	static readonly UpdateFramework = "backup:UpdateFramework";
	/** [Write] backup:UpdateGlobalSettings */
	static readonly UpdateGlobalSettings = "backup:UpdateGlobalSettings";
	/** [Write] backup:UpdateRecoveryPointIndexSettings */
	static readonly UpdateRecoveryPointIndexSettings =
		"backup:UpdateRecoveryPointIndexSettings";
	/** [Write] backup:UpdateRecoveryPointLifecycle */
	static readonly UpdateRecoveryPointLifecycle =
		"backup:UpdateRecoveryPointLifecycle";
	/** [Write] backup:UpdateRegionSettings */
	static readonly UpdateRegionSettings = "backup:UpdateRegionSettings";
	/** [Write] backup:UpdateReportPlan */
	static readonly UpdateReportPlan = "backup:UpdateReportPlan";
	/** [Write] backup:UpdateRestoreTestingPlan */
	static readonly UpdateRestoreTestingPlan = "backup:UpdateRestoreTestingPlan";
	/** [Write] backup:UpdateRestoreTestingSelection */
	static readonly UpdateRestoreTestingSelection =
		"backup:UpdateRestoreTestingSelection";
	/** [Write] backup:UpdateTieringConfiguration */
	static readonly UpdateTieringConfiguration =
		"backup:UpdateTieringConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BackupActions.DescribeBackupAccessPoint,
		BackupActions.DescribeBackupJob,
		BackupActions.DescribeBackupVault,
		BackupActions.DescribeCopyJob,
		BackupActions.DescribeFramework,
		BackupActions.DescribeGlobalSettings,
		BackupActions.DescribeProtectedResource,
		BackupActions.DescribeRecoveryPoint,
		BackupActions.DescribeRegionSettings,
		BackupActions.DescribeReportJob,
		BackupActions.DescribeReportPlan,
		BackupActions.DescribeRestoreJob,
		BackupActions.DescribeScanJob,
		BackupActions.ExportBackupPlanTemplate,
		BackupActions.actionGetBackupPlan,
		BackupActions.actionGetBackupPlanFromJSON,
		BackupActions.actionGetBackupPlanFromTemplate,
		BackupActions.actionGetBackupSelection,
		BackupActions.actionGetBackupVaultAccessPolicy,
		BackupActions.actionGetBackupVaultNotifications,
		BackupActions.actionGetBackupVaultSharingPolicy,
		BackupActions.actionGetLegalHold,
		BackupActions.actionGetPITRMalwareScanResults,
		BackupActions.actionGetRecoveryPointIndexDetails,
		BackupActions.actionGetRecoveryPointRestoreMetadata,
		BackupActions.actionGetRestoreJobMetadata,
		BackupActions.actionGetRestoreTestingInferredMetadata,
		BackupActions.actionGetRestoreTestingPlan,
		BackupActions.actionGetRestoreTestingSelection,
		BackupActions.actionGetSupportedResourceTypes,
		BackupActions.actionGetTieringConfiguration,
		BackupActions.ListTags,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BackupActions.AssociateBackupVaultMpaApprovalTeam,
		BackupActions.CancelLegalHold,
		BackupActions.CopyFromBackupVault,
		BackupActions.CopyIntoBackupVault,
		BackupActions.CreateBackupAccessPoint,
		BackupActions.CreateBackupPlan,
		BackupActions.CreateBackupSelection,
		BackupActions.CreateBackupVault,
		BackupActions.CreateFramework,
		BackupActions.CreateLegalHold,
		BackupActions.CreateLogicallyAirGappedBackupVault,
		BackupActions.CreateReportPlan,
		BackupActions.CreateRestoreAccessBackupVault,
		BackupActions.CreateRestoreTestingPlan,
		BackupActions.CreateRestoreTestingSelection,
		BackupActions.CreateTieringConfiguration,
		BackupActions.DeleteBackupAccessPoint,
		BackupActions.DeleteBackupPlan,
		BackupActions.DeleteBackupSelection,
		BackupActions.DeleteBackupVault,
		BackupActions.DeleteBackupVaultLockConfiguration,
		BackupActions.DeleteBackupVaultNotifications,
		BackupActions.DeleteFramework,
		BackupActions.DeleteRecoveryPoint,
		BackupActions.DeleteReportPlan,
		BackupActions.DeleteRestoreTestingPlan,
		BackupActions.DeleteRestoreTestingSelection,
		BackupActions.DeleteTieringConfiguration,
		BackupActions.DisassociateBackupVaultMpaApprovalTeam,
		BackupActions.DisassociateRecoveryPoint,
		BackupActions.DisassociateRecoveryPointFromParent,
		BackupActions.PutBackupVaultLockConfiguration,
		BackupActions.PutBackupVaultNotifications,
		BackupActions.PutRestoreValidationResult,
		BackupActions.RevokeRestoreAccessBackupVault,
		BackupActions.StartBackupJob,
		BackupActions.StartCopyJob,
		BackupActions.StartReportJob,
		BackupActions.StartRestoreJob,
		BackupActions.StartScanJob,
		BackupActions.StopBackupJob,
		BackupActions.UpdateBackupPlan,
		BackupActions.UpdateFramework,
		BackupActions.UpdateGlobalSettings,
		BackupActions.UpdateRecoveryPointIndexSettings,
		BackupActions.UpdateRecoveryPointLifecycle,
		BackupActions.UpdateRegionSettings,
		BackupActions.UpdateReportPlan,
		BackupActions.UpdateRestoreTestingPlan,
		BackupActions.UpdateRestoreTestingSelection,
		BackupActions.UpdateTieringConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BackupActions.ListBackupAccessPoints,
		BackupActions.ListBackupAccessPointsByRecoveryPoint,
		BackupActions.ListBackupAccessPointsByResource,
		BackupActions.ListBackupJobSummaries,
		BackupActions.ListBackupJobs,
		BackupActions.ListBackupPlanTemplates,
		BackupActions.ListBackupPlanVersions,
		BackupActions.ListBackupPlans,
		BackupActions.ListBackupSelections,
		BackupActions.ListBackupVaults,
		BackupActions.ListCopyJobSummaries,
		BackupActions.ListCopyJobs,
		BackupActions.ListFrameworks,
		BackupActions.ListIndexedRecoveryPoints,
		BackupActions.ListLegalHolds,
		BackupActions.ListProtectedResources,
		BackupActions.ListProtectedResourcesByBackupVault,
		BackupActions.ListRecoveryPointsByBackupVault,
		BackupActions.ListRecoveryPointsByLegalHold,
		BackupActions.ListRecoveryPointsByResource,
		BackupActions.ListReportJobs,
		BackupActions.ListReportPlans,
		BackupActions.ListRestoreAccessBackupVaults,
		BackupActions.ListRestoreJobSummaries,
		BackupActions.ListRestoreJobs,
		BackupActions.ListRestoreJobsByProtectedResource,
		BackupActions.ListRestoreTestingPlans,
		BackupActions.ListRestoreTestingSelections,
		BackupActions.ListScanJobSummaries,
		BackupActions.ListScanJobs,
		BackupActions.ListTieringConfigurations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		BackupActions.DeleteBackupVaultAccessPolicy,
		BackupActions.DeleteBackupVaultSharingPolicy,
		BackupActions.ListIndexedRecoveryPointsForSearch,
		BackupActions.PutBackupVaultAccessPolicy,
		BackupActions.PutBackupVaultSharingPolicy,
		BackupActions.SearchRecoveryPoint,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BackupActions.TagResource,
		BackupActions.UntagResource,
	];
}

/**
 * Properties for building a backupAccessPoint ARN.
 */
export interface BackupBackupAccessPointArnProps {
	/** The AccessPointName component of the ARN. */
	readonly accessPointName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a backupAccessPoint ARN.
 */
export interface BackupBackupAccessPointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccessPointName component. */
	readonly accessPointName: string;
}

/**
 * Properties for building a backupPlan ARN.
 */
export interface BackupBackupPlanArnProps {
	/** The BackupPlanId component of the ARN. */
	readonly backupPlanId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a backupPlan ARN.
 */
export interface BackupBackupPlanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BackupPlanId component. */
	readonly backupPlanId: string;
}

/**
 * Properties for building a backupVault ARN.
 */
export interface BackupBackupVaultArnProps {
	/** The BackupVaultName component of the ARN. */
	readonly backupVaultName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a backupVault ARN.
 */
export interface BackupBackupVaultArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BackupVaultName component. */
	readonly backupVaultName: string;
}

/**
 * Properties for building a framework ARN.
 */
export interface BackupFrameworkArnProps {
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
}

/**
 * Parsed components of a framework ARN.
 */
export interface BackupFrameworkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FrameworkName component. */
	readonly frameworkName: string;
	/** The FrameworkId component. */
	readonly frameworkId: string;
}

/**
 * Properties for building a legalHold ARN.
 */
export interface BackupLegalHoldArnProps {
	/** The LegalHoldId component of the ARN. */
	readonly legalHoldId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a legalHold ARN.
 */
export interface BackupLegalHoldArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LegalHoldId component. */
	readonly legalHoldId: string;
}

/**
 * Properties for building a recoveryPoint ARN.
 */
export interface BackupRecoveryPointArnProps {
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
}

/**
 * Parsed components of a recoveryPoint ARN.
 */
export interface BackupRecoveryPointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Vendor component. */
	readonly vendor: string;
	/** The ResourceType component. */
	readonly resourceType: string;
	/** The RecoveryPointId component. */
	readonly recoveryPointId: string;
}

/**
 * Properties for building a reportPlan ARN.
 */
export interface BackupReportPlanArnProps {
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
}

/**
 * Parsed components of a reportPlan ARN.
 */
export interface BackupReportPlanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReportPlanName component. */
	readonly reportPlanName: string;
	/** The ReportPlanId component. */
	readonly reportPlanId: string;
}

/**
 * Properties for building a restoreTestingPlan ARN.
 */
export interface BackupRestoreTestingPlanArnProps {
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
}

/**
 * Parsed components of a restoreTestingPlan ARN.
 */
export interface BackupRestoreTestingPlanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RestoreTestingPlanName component. */
	readonly restoreTestingPlanName: string;
	/** The RestoreTestingPlanId component. */
	readonly restoreTestingPlanId: string;
}

/**
 * Properties for building a tieringConfiguration ARN.
 */
export interface BackupTieringConfigurationArnProps {
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
}

/**
 * Parsed components of a tieringConfiguration ARN.
 */
export interface BackupTieringConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TieringConfigurationName component. */
	readonly tieringConfigurationName: string;
	/** The TieringConfigurationId component. */
	readonly tieringConfigurationId: string;
}

const BackupAccessPointArnRegex =
	/^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):accesspoint\/(?<accessPointName>[^:/?]+)$/;
const BackupPlanArnRegex =
	/^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):backup-plan:(?<backupPlanId>[^:/?]+)$/;
const BackupVaultArnRegex =
	/^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):backup-vault:(?<backupVaultName>[^:/?]+)$/;
const FrameworkArnRegex =
	/^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):framework:(?<frameworkName>[^:/?]+)-(?<frameworkId>[^:/?]+)$/;
const LegalHoldArnRegex =
	/^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):legal-hold:(?<legalHoldId>[^:/?]+)$/;
const RecoveryPointArnRegex =
	/^arn:(?<partition>[^:]+):(?<vendor>[^:/?]+):(?<region>[^:]*):.*:(?<resourceType>[^:/?]+):(?<recoveryPointId>[^:/?]+)$/;
const ReportPlanArnRegex =
	/^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):report-plan:(?<reportPlanName>[^:/?]+)-(?<reportPlanId>[^:/?]+)$/;
const RestoreTestingPlanArnRegex =
	/^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):restore-testing-plan:(?<restoreTestingPlanName>[^:/?]+)-(?<restoreTestingPlanId>[^:/?]+)$/;
const TieringConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):backup:(?<region>[^:]*):(?<account>[^:]*):tiering-configuration:(?<tieringConfigurationName>[^:/?]+)-(?<tieringConfigurationId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for backup resources.
 */
export class BackupResources {
	/**
	 * Builds an ARN for the backupAccessPoint resource.
	 */
	static backupAccessPoint(props: BackupBackupAccessPointArnProps): string {
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
	static parseBackupAccessPointArn(
		arn: string,
	): BackupBackupAccessPointArnComponents {
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
	static backupPlan(props: BackupBackupPlanArnProps): string {
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
	static parseBackupPlanArn(arn: string): BackupBackupPlanArnComponents {
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
	static backupVault(props: BackupBackupVaultArnProps): string {
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
	static parseBackupVaultArn(arn: string): BackupBackupVaultArnComponents {
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
	static framework(props: BackupFrameworkArnProps): string {
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
	static parseFrameworkArn(arn: string): BackupFrameworkArnComponents {
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
	static legalHold(props: BackupLegalHoldArnProps): string {
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
	static parseLegalHoldArn(arn: string): BackupLegalHoldArnComponents {
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
	static recoveryPoint(props: BackupRecoveryPointArnProps): string {
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
	static parseRecoveryPointArn(arn: string): BackupRecoveryPointArnComponents {
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
	static reportPlan(props: BackupReportPlanArnProps): string {
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
	static parseReportPlanArn(arn: string): BackupReportPlanArnComponents {
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
	static restoreTestingPlan(props: BackupRestoreTestingPlanArnProps): string {
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
	static parseRestoreTestingPlanArn(
		arn: string,
	): BackupRestoreTestingPlanArnComponents {
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
	static tieringConfiguration(
		props: BackupTieringConfigurationArnProps,
	): string {
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
	static parseTieringConfigurationArn(
		arn: string,
	): BackupTieringConfigurationArnComponents {
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
	static readonly AssociateBackupVaultMpaApprovalTeam: string[] = [
		"backup:AssociateBackupVaultMpaApprovalTeam",
	];
	/** IAM actions required for the CancelLegalHold API call. */
	static readonly CancelLegalHold: string[] = ["backup:CancelLegalHold"];
	/** IAM actions required for the CreateBackupAccessPoint API call. */
	static readonly CreateBackupAccessPoint: string[] = [
		"backup:CreateBackupAccessPoint",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateBackupPlan API call. */
	static readonly CreateBackupPlan: string[] = [
		"backup:CreateBackupPlan",
		"iam:PassRole",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateBackupSelection API call. */
	static readonly CreateBackupSelection: string[] = [
		"backup:CreateBackupSelection",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateBackupVault API call. */
	static readonly CreateBackupVault: string[] = [
		"backup:CreateBackupVault",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateFramework API call. */
	static readonly CreateFramework: string[] = [
		"backup:CreateFramework",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateLegalHold API call. */
	static readonly CreateLegalHold: string[] = [
		"backup:CreateLegalHold",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateLogicallyAirGappedBackupVault API call. */
	static readonly CreateLogicallyAirGappedBackupVault: string[] = [
		"backup:CreateLogicallyAirGappedBackupVault",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateReportPlan API call. */
	static readonly CreateReportPlan: string[] = [
		"backup:CreateReportPlan",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateRestoreAccessBackupVault API call. */
	static readonly CreateRestoreAccessBackupVault: string[] = [
		"backup:CreateRestoreAccessBackupVault",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateRestoreTestingPlan API call. */
	static readonly CreateRestoreTestingPlan: string[] = [
		"backup:CreateRestoreTestingPlan",
		"backup:TagResource",
	];
	/** IAM actions required for the CreateRestoreTestingSelection API call. */
	static readonly CreateRestoreTestingSelection: string[] = [
		"backup:CreateRestoreTestingSelection",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateTieringConfiguration API call. */
	static readonly CreateTieringConfiguration: string[] = [
		"backup:CreateTieringConfiguration",
		"backup:TagResource",
	];
	/** IAM actions required for the DeleteBackupAccessPoint API call. */
	static readonly DeleteBackupAccessPoint: string[] = [
		"backup:DeleteBackupAccessPoint",
	];
	/** IAM actions required for the DeleteBackupPlan API call. */
	static readonly DeleteBackupPlan: string[] = ["backup:DeleteBackupPlan"];
	/** IAM actions required for the DeleteBackupSelection API call. */
	static readonly DeleteBackupSelection: string[] = [
		"backup:DeleteBackupSelection",
	];
	/** IAM actions required for the DeleteBackupVault API call. */
	static readonly DeleteBackupVault: string[] = ["backup:DeleteBackupVault"];
	/** IAM actions required for the DeleteBackupVaultAccessPolicy API call. */
	static readonly DeleteBackupVaultAccessPolicy: string[] = [
		"backup:DeleteBackupVaultAccessPolicy",
	];
	/** IAM actions required for the DeleteBackupVaultLockConfiguration API call. */
	static readonly DeleteBackupVaultLockConfiguration: string[] = [
		"backup:DeleteBackupVaultLockConfiguration",
	];
	/** IAM actions required for the DeleteBackupVaultNotifications API call. */
	static readonly DeleteBackupVaultNotifications: string[] = [
		"backup:DeleteBackupVaultNotifications",
	];
	/** IAM actions required for the DeleteFramework API call. */
	static readonly DeleteFramework: string[] = ["backup:DeleteFramework"];
	/** IAM actions required for the DeleteRecoveryPoint API call. */
	static readonly DeleteRecoveryPoint: string[] = [
		"backup:DeleteRecoveryPoint",
	];
	/** IAM actions required for the DeleteReportPlan API call. */
	static readonly DeleteReportPlan: string[] = ["backup:DeleteReportPlan"];
	/** IAM actions required for the DeleteRestoreTestingPlan API call. */
	static readonly DeleteRestoreTestingPlan: string[] = [
		"backup:DeleteRestoreTestingPlan",
	];
	/** IAM actions required for the DeleteRestoreTestingSelection API call. */
	static readonly DeleteRestoreTestingSelection: string[] = [
		"backup:DeleteRestoreTestingSelection",
	];
	/** IAM actions required for the DeleteTieringConfiguration API call. */
	static readonly DeleteTieringConfiguration: string[] = [
		"backup:DeleteTieringConfiguration",
	];
	/** IAM actions required for the DescribeBackupAccessPoint API call. */
	static readonly DescribeBackupAccessPoint: string[] = [
		"backup:DescribeBackupAccessPoint",
	];
	/** IAM actions required for the DescribeBackupJob API call. */
	static readonly DescribeBackupJob: string[] = ["backup:DescribeBackupJob"];
	/** IAM actions required for the DescribeBackupVault API call. */
	static readonly DescribeBackupVault: string[] = [
		"backup:DescribeBackupVault",
	];
	/** IAM actions required for the DescribeCopyJob API call. */
	static readonly DescribeCopyJob: string[] = ["backup:DescribeCopyJob"];
	/** IAM actions required for the DescribeFramework API call. */
	static readonly DescribeFramework: string[] = ["backup:DescribeFramework"];
	/** IAM actions required for the DescribeGlobalSettings API call. */
	static readonly DescribeGlobalSettings: string[] = [
		"backup:DescribeGlobalSettings",
	];
	/** IAM actions required for the DescribeProtectedResource API call. */
	static readonly DescribeProtectedResource: string[] = [
		"backup:DescribeProtectedResource",
	];
	/** IAM actions required for the DescribeRecoveryPoint API call. */
	static readonly DescribeRecoveryPoint: string[] = [
		"backup:DescribeRecoveryPoint",
	];
	/** IAM actions required for the DescribeRegionSettings API call. */
	static readonly DescribeRegionSettings: string[] = [
		"backup:DescribeRegionSettings",
	];
	/** IAM actions required for the DescribeReportJob API call. */
	static readonly DescribeReportJob: string[] = ["backup:DescribeReportJob"];
	/** IAM actions required for the DescribeReportPlan API call. */
	static readonly DescribeReportPlan: string[] = ["backup:DescribeReportPlan"];
	/** IAM actions required for the DescribeRestoreJob API call. */
	static readonly DescribeRestoreJob: string[] = ["backup:DescribeRestoreJob"];
	/** IAM actions required for the DescribeScanJob API call. */
	static readonly DescribeScanJob: string[] = ["backup:DescribeScanJob"];
	/** IAM actions required for the DisassociateBackupVaultMpaApprovalTeam API call. */
	static readonly DisassociateBackupVaultMpaApprovalTeam: string[] = [
		"backup:DisassociateBackupVaultMpaApprovalTeam",
	];
	/** IAM actions required for the DisassociateRecoveryPoint API call. */
	static readonly DisassociateRecoveryPoint: string[] = [
		"backup:DisassociateRecoveryPoint",
	];
	/** IAM actions required for the DisassociateRecoveryPointFromParent API call. */
	static readonly DisassociateRecoveryPointFromParent: string[] = [
		"backup:DisassociateRecoveryPointFromParent",
	];
	/** IAM actions required for the ExportBackupPlanTemplate API call. */
	static readonly ExportBackupPlanTemplate: string[] = [
		"backup:ExportBackupPlanTemplate",
	];
	/** IAM actions required for the GetBackupPlan API call. */
	static readonly opGetBackupPlan: string[] = ["backup:GetBackupPlan"];
	/** IAM actions required for the GetBackupPlanFromJSON API call. */
	static readonly opGetBackupPlanFromJSON: string[] = [
		"backup:GetBackupPlanFromJSON",
	];
	/** IAM actions required for the GetBackupPlanFromTemplate API call. */
	static readonly opGetBackupPlanFromTemplate: string[] = [
		"backup:GetBackupPlanFromTemplate",
	];
	/** IAM actions required for the GetBackupSelection API call. */
	static readonly opGetBackupSelection: string[] = [
		"backup:GetBackupSelection",
	];
	/** IAM actions required for the GetBackupVaultAccessPolicy API call. */
	static readonly opGetBackupVaultAccessPolicy: string[] = [
		"backup:GetBackupVaultAccessPolicy",
	];
	/** IAM actions required for the GetBackupVaultNotifications API call. */
	static readonly opGetBackupVaultNotifications: string[] = [
		"backup:GetBackupVaultNotifications",
	];
	/** IAM actions required for the GetLegalHold API call. */
	static readonly opGetLegalHold: string[] = ["backup:GetLegalHold"];
	/** IAM actions required for the GetPITRMalwareScanResults API call. */
	static readonly opGetPITRMalwareScanResults: string[] = [
		"backup:GetPITRMalwareScanResults",
	];
	/** IAM actions required for the GetRecoveryPointIndexDetails API call. */
	static readonly opGetRecoveryPointIndexDetails: string[] = [
		"backup:GetRecoveryPointIndexDetails",
	];
	/** IAM actions required for the GetRecoveryPointRestoreMetadata API call. */
	static readonly opGetRecoveryPointRestoreMetadata: string[] = [
		"backup:GetRecoveryPointRestoreMetadata",
	];
	/** IAM actions required for the GetRestoreJobMetadata API call. */
	static readonly opGetRestoreJobMetadata: string[] = [
		"backup:GetRestoreJobMetadata",
	];
	/** IAM actions required for the GetRestoreTestingInferredMetadata API call. */
	static readonly opGetRestoreTestingInferredMetadata: string[] = [
		"backup:GetRestoreTestingInferredMetadata",
	];
	/** IAM actions required for the GetRestoreTestingPlan API call. */
	static readonly opGetRestoreTestingPlan: string[] = [
		"backup:GetRestoreTestingPlan",
	];
	/** IAM actions required for the GetRestoreTestingSelection API call. */
	static readonly opGetRestoreTestingSelection: string[] = [
		"backup:GetRestoreTestingSelection",
	];
	/** IAM actions required for the GetSupportedResourceTypes API call. */
	static readonly opGetSupportedResourceTypes: string[] = [
		"backup:GetSupportedResourceTypes",
	];
	/** IAM actions required for the GetTieringConfiguration API call. */
	static readonly opGetTieringConfiguration: string[] = [
		"backup:GetTieringConfiguration",
	];
	/** IAM actions required for the ListBackupAccessPoints API call. */
	static readonly ListBackupAccessPoints: string[] = [
		"backup:ListBackupAccessPoints",
	];
	/** IAM actions required for the ListBackupAccessPointsByRecoveryPoint API call. */
	static readonly ListBackupAccessPointsByRecoveryPoint: string[] = [
		"backup:ListBackupAccessPointsByRecoveryPoint",
	];
	/** IAM actions required for the ListBackupAccessPointsByResource API call. */
	static readonly ListBackupAccessPointsByResource: string[] = [
		"backup:ListBackupAccessPointsByResource",
	];
	/** IAM actions required for the ListBackupJobSummaries API call. */
	static readonly ListBackupJobSummaries: string[] = [
		"backup:ListBackupJobSummaries",
	];
	/** IAM actions required for the ListBackupJobs API call. */
	static readonly ListBackupJobs: string[] = ["backup:ListBackupJobs"];
	/** IAM actions required for the ListBackupPlanTemplates API call. */
	static readonly ListBackupPlanTemplates: string[] = [
		"backup:ListBackupPlanTemplates",
	];
	/** IAM actions required for the ListBackupPlanVersions API call. */
	static readonly ListBackupPlanVersions: string[] = [
		"backup:ListBackupPlanVersions",
	];
	/** IAM actions required for the ListBackupPlans API call. */
	static readonly ListBackupPlans: string[] = ["backup:ListBackupPlans"];
	/** IAM actions required for the ListBackupSelections API call. */
	static readonly ListBackupSelections: string[] = [
		"backup:ListBackupSelections",
	];
	/** IAM actions required for the ListBackupVaults API call. */
	static readonly ListBackupVaults: string[] = ["backup:ListBackupVaults"];
	/** IAM actions required for the ListCopyJobSummaries API call. */
	static readonly ListCopyJobSummaries: string[] = [
		"backup:ListCopyJobSummaries",
	];
	/** IAM actions required for the ListCopyJobs API call. */
	static readonly ListCopyJobs: string[] = ["backup:ListCopyJobs"];
	/** IAM actions required for the ListFrameworks API call. */
	static readonly ListFrameworks: string[] = ["backup:ListFrameworks"];
	/** IAM actions required for the ListIndexedRecoveryPoints API call. */
	static readonly ListIndexedRecoveryPoints: string[] = [
		"backup:ListIndexedRecoveryPoints",
	];
	/** IAM actions required for the ListLegalHolds API call. */
	static readonly ListLegalHolds: string[] = ["backup:ListLegalHolds"];
	/** IAM actions required for the ListProtectedResources API call. */
	static readonly ListProtectedResources: string[] = [
		"backup:ListProtectedResources",
	];
	/** IAM actions required for the ListProtectedResourcesByBackupVault API call. */
	static readonly ListProtectedResourcesByBackupVault: string[] = [
		"backup:ListProtectedResourcesByBackupVault",
	];
	/** IAM actions required for the ListRecoveryPointsByBackupVault API call. */
	static readonly ListRecoveryPointsByBackupVault: string[] = [
		"backup:ListRecoveryPointsByBackupVault",
	];
	/** IAM actions required for the ListRecoveryPointsByLegalHold API call. */
	static readonly ListRecoveryPointsByLegalHold: string[] = [
		"backup:ListRecoveryPointsByLegalHold",
	];
	/** IAM actions required for the ListRecoveryPointsByResource API call. */
	static readonly ListRecoveryPointsByResource: string[] = [
		"backup:ListRecoveryPointsByResource",
	];
	/** IAM actions required for the ListReportJobs API call. */
	static readonly ListReportJobs: string[] = ["backup:ListReportJobs"];
	/** IAM actions required for the ListReportPlans API call. */
	static readonly ListReportPlans: string[] = ["backup:ListReportPlans"];
	/** IAM actions required for the ListRestoreAccessBackupVaults API call. */
	static readonly ListRestoreAccessBackupVaults: string[] = [
		"backup:ListRestoreAccessBackupVaults",
	];
	/** IAM actions required for the ListRestoreJobSummaries API call. */
	static readonly ListRestoreJobSummaries: string[] = [
		"backup:ListRestoreJobSummaries",
	];
	/** IAM actions required for the ListRestoreJobs API call. */
	static readonly ListRestoreJobs: string[] = ["backup:ListRestoreJobs"];
	/** IAM actions required for the ListRestoreJobsByProtectedResource API call. */
	static readonly ListRestoreJobsByProtectedResource: string[] = [
		"backup:ListRestoreJobsByProtectedResource",
	];
	/** IAM actions required for the ListRestoreTestingPlans API call. */
	static readonly ListRestoreTestingPlans: string[] = [
		"backup:ListRestoreTestingPlans",
	];
	/** IAM actions required for the ListRestoreTestingSelections API call. */
	static readonly ListRestoreTestingSelections: string[] = [
		"backup:ListRestoreTestingSelections",
	];
	/** IAM actions required for the ListScanJobSummaries API call. */
	static readonly ListScanJobSummaries: string[] = [
		"backup:ListScanJobSummaries",
	];
	/** IAM actions required for the ListScanJobs API call. */
	static readonly ListScanJobs: string[] = ["backup:ListScanJobs"];
	/** IAM actions required for the ListTags API call. */
	static readonly ListTags: string[] = ["backup:ListTags"];
	/** IAM actions required for the ListTieringConfigurations API call. */
	static readonly ListTieringConfigurations: string[] = [
		"backup:ListTieringConfigurations",
	];
	/** IAM actions required for the PutBackupVaultAccessPolicy API call. */
	static readonly PutBackupVaultAccessPolicy: string[] = [
		"backup:PutBackupVaultAccessPolicy",
	];
	/** IAM actions required for the PutBackupVaultLockConfiguration API call. */
	static readonly PutBackupVaultLockConfiguration: string[] = [
		"backup:PutBackupVaultLockConfiguration",
	];
	/** IAM actions required for the PutBackupVaultNotifications API call. */
	static readonly PutBackupVaultNotifications: string[] = [
		"backup:PutBackupVaultNotifications",
	];
	/** IAM actions required for the PutRestoreValidationResult API call. */
	static readonly PutRestoreValidationResult: string[] = [
		"backup:PutRestoreValidationResult",
	];
	/** IAM actions required for the RevokeRestoreAccessBackupVault API call. */
	static readonly RevokeRestoreAccessBackupVault: string[] = [
		"backup:RevokeRestoreAccessBackupVault",
	];
	/** IAM actions required for the StartBackupJob API call. */
	static readonly StartBackupJob: string[] = [
		"iam:PassRole",
		"backup:StartBackupJob",
	];
	/** IAM actions required for the StartCopyJob API call. */
	static readonly StartCopyJob: string[] = [
		"iam:PassRole",
		"backup:StartCopyJob",
	];
	/** IAM actions required for the StartReportJob API call. */
	static readonly StartReportJob: string[] = ["backup:StartReportJob"];
	/** IAM actions required for the StartRestoreJob API call. */
	static readonly StartRestoreJob: string[] = [
		"iam:PassRole",
		"backup:StartRestoreJob",
	];
	/** IAM actions required for the StartScanJob API call. */
	static readonly StartScanJob: string[] = [
		"iam:PassRole",
		"backup:StartScanJob",
	];
	/** IAM actions required for the StopBackupJob API call. */
	static readonly StopBackupJob: string[] = ["backup:StopBackupJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["backup:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["backup:UntagResource"];
	/** IAM actions required for the UpdateBackupPlan API call. */
	static readonly UpdateBackupPlan: string[] = [
		"iam:PassRole",
		"backup:UpdateBackupPlan",
	];
	/** IAM actions required for the UpdateFramework API call. */
	static readonly UpdateFramework: string[] = ["backup:UpdateFramework"];
	/** IAM actions required for the UpdateGlobalSettings API call. */
	static readonly UpdateGlobalSettings: string[] = [
		"backup:UpdateGlobalSettings",
	];
	/** IAM actions required for the UpdateRecoveryPointIndexSettings API call. */
	static readonly UpdateRecoveryPointIndexSettings: string[] = [
		"iam:PassRole",
		"backup:UpdateRecoveryPointIndexSettings",
	];
	/** IAM actions required for the UpdateRecoveryPointLifecycle API call. */
	static readonly UpdateRecoveryPointLifecycle: string[] = [
		"backup:UpdateRecoveryPointLifecycle",
	];
	/** IAM actions required for the UpdateRegionSettings API call. */
	static readonly UpdateRegionSettings: string[] = [
		"backup:UpdateRegionSettings",
	];
	/** IAM actions required for the UpdateReportPlan API call. */
	static readonly UpdateReportPlan: string[] = ["backup:UpdateReportPlan"];
	/** IAM actions required for the UpdateRestoreTestingPlan API call. */
	static readonly UpdateRestoreTestingPlan: string[] = [
		"backup:UpdateRestoreTestingPlan",
	];
	/** IAM actions required for the UpdateRestoreTestingSelection API call. */
	static readonly UpdateRestoreTestingSelection: string[] = [
		"iam:PassRole",
		"backup:UpdateRestoreTestingSelection",
	];
	/** IAM actions required for the UpdateTieringConfiguration API call. */
	static readonly UpdateTieringConfiguration: string[] = [
		"backup:UpdateTieringConfiguration",
	];
}

/**
 * Condition key constants and builders for backup.
 */
export class BackupConditions {
	/** Condition keys applicable to the AssociateBackupVaultMpaApprovalTeam action. */
	static readonly AssociateBackupVaultMpaApprovalTeamConditionKeys: string[] = [
		"backup:MpaApprovalTeamArn",
	];
	/** Condition keys applicable to the CopyFromBackupVault action. */
	static readonly CopyFromBackupVaultConditionKeys: string[] = [
		"backup:CopyTargetOrgPaths",
		"backup:CopyTargets",
	];
	/** Condition keys applicable to the CopyIntoBackupVault action. */
	static readonly CopyIntoBackupVaultConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateBackupAccessPoint action. */
	static readonly CreateBackupAccessPointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBackupPlan action. */
	static readonly CreateBackupPlanConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBackupVault action. */
	static readonly CreateBackupVaultConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFramework action. */
	static readonly CreateFrameworkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLegalHold action. */
	static readonly CreateLegalHoldConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLogicallyAirGappedBackupVault action. */
	static readonly CreateLogicallyAirGappedBackupVaultConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"backup:MaxRetentionDays",
		"backup:MinRetentionDays",
	];
	/** Condition keys applicable to the CreateReportPlan action. */
	static readonly CreateReportPlanConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"backup:FrameworkArns",
	];
	/** Condition keys applicable to the CreateRestoreAccessBackupVault action. */
	static readonly CreateRestoreAccessBackupVaultConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRestoreTestingPlan action. */
	static readonly CreateRestoreTestingPlanConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTieringConfiguration action. */
	static readonly CreateTieringConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutBackupVaultLockConfiguration action. */
	static readonly PutBackupVaultLockConfigurationConditionKeys: string[] = [
		"backup:ChangeableForDays",
		"backup:MaxRetentionDays",
		"backup:MinRetentionDays",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateRecoveryPointIndexSettings action. */
	static readonly UpdateRecoveryPointIndexSettingsConditionKeys: string[] = [
		"backup:Index",
	];
	/** Condition keys applicable to the UpdateReportPlan action. */
	static readonly UpdateReportPlanConditionKeys: string[] = [
		"backup:FrameworkArns",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
