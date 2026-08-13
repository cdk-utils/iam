// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/storagegateway.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the storagegateway service.
 */
export class StorageGatewayActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "storagegateway";

	/** [Write] storagegateway:ActivateGateway */
	static readonly ActivateGateway = "storagegateway:ActivateGateway";
	/** [Write] storagegateway:AddCache */
	static readonly AddCache = "storagegateway:AddCache";
	/** [Tagging] storagegateway:AddTagsToResource */
	static readonly AddTagsToResource = "storagegateway:AddTagsToResource";
	/** [Write] storagegateway:AddUploadBuffer */
	static readonly AddUploadBuffer = "storagegateway:AddUploadBuffer";
	/** [Write] storagegateway:AddWorkingStorage */
	static readonly AddWorkingStorage = "storagegateway:AddWorkingStorage";
	/** [Write] storagegateway:AssignTapePool */
	static readonly AssignTapePool = "storagegateway:AssignTapePool";
	/** [Write] storagegateway:AssociateFileSystem */
	static readonly AssociateFileSystem = "storagegateway:AssociateFileSystem";
	/** [Write] storagegateway:AttachVolume */
	static readonly AttachVolume = "storagegateway:AttachVolume";
	/** [Write] storagegateway:BypassGovernanceRetention */
	static readonly BypassGovernanceRetention =
		"storagegateway:BypassGovernanceRetention";
	/** [Write] storagegateway:CancelArchival */
	static readonly CancelArchival = "storagegateway:CancelArchival";
	/** [Write] storagegateway:CancelCacheReport */
	static readonly CancelCacheReport = "storagegateway:CancelCacheReport";
	/** [Write] storagegateway:CancelRetrieval */
	static readonly CancelRetrieval = "storagegateway:CancelRetrieval";
	/** [Write] storagegateway:CreateCachediSCSIVolume */
	static readonly CreateCachediSCSIVolume =
		"storagegateway:CreateCachediSCSIVolume";
	/** [Write] storagegateway:CreateNFSFileShare */
	static readonly CreateNFSFileShare = "storagegateway:CreateNFSFileShare";
	/** [Write] storagegateway:CreateSMBFileShare */
	static readonly CreateSMBFileShare = "storagegateway:CreateSMBFileShare";
	/** [Write] storagegateway:CreateSnapshot */
	static readonly CreateSnapshot = "storagegateway:CreateSnapshot";
	/** [Write] storagegateway:CreateSnapshotFromVolumeRecoveryPoint */
	static readonly CreateSnapshotFromVolumeRecoveryPoint =
		"storagegateway:CreateSnapshotFromVolumeRecoveryPoint";
	/** [Write] storagegateway:CreateStorediSCSIVolume */
	static readonly CreateStorediSCSIVolume =
		"storagegateway:CreateStorediSCSIVolume";
	/** [Write] storagegateway:CreateTapePool */
	static readonly CreateTapePool = "storagegateway:CreateTapePool";
	/** [Write] storagegateway:CreateTapeWithBarcode */
	static readonly CreateTapeWithBarcode =
		"storagegateway:CreateTapeWithBarcode";
	/** [Write] storagegateway:CreateTapes */
	static readonly CreateTapes = "storagegateway:CreateTapes";
	/** [Write] storagegateway:DeleteAutomaticTapeCreationPolicy */
	static readonly DeleteAutomaticTapeCreationPolicy =
		"storagegateway:DeleteAutomaticTapeCreationPolicy";
	/** [Write] storagegateway:DeleteBandwidthRateLimit */
	static readonly DeleteBandwidthRateLimit =
		"storagegateway:DeleteBandwidthRateLimit";
	/** [Write] storagegateway:DeleteCacheReport */
	static readonly DeleteCacheReport = "storagegateway:DeleteCacheReport";
	/** [Write] storagegateway:DeleteChapCredentials */
	static readonly DeleteChapCredentials =
		"storagegateway:DeleteChapCredentials";
	/** [Write] storagegateway:DeleteFileShare */
	static readonly DeleteFileShare = "storagegateway:DeleteFileShare";
	/** [Write] storagegateway:DeleteGateway */
	static readonly DeleteGateway = "storagegateway:DeleteGateway";
	/** [Write] storagegateway:DeleteSnapshotSchedule */
	static readonly DeleteSnapshotSchedule =
		"storagegateway:DeleteSnapshotSchedule";
	/** [Write] storagegateway:DeleteTape */
	static readonly DeleteTape = "storagegateway:DeleteTape";
	/** [Write] storagegateway:DeleteTapeArchive */
	static readonly DeleteTapeArchive = "storagegateway:DeleteTapeArchive";
	/** [Write] storagegateway:DeleteTapePool */
	static readonly DeleteTapePool = "storagegateway:DeleteTapePool";
	/** [Write] storagegateway:DeleteVolume */
	static readonly DeleteVolume = "storagegateway:DeleteVolume";
	/** [Read] storagegateway:DescribeAvailabilityMonitorTest */
	static readonly DescribeAvailabilityMonitorTest =
		"storagegateway:DescribeAvailabilityMonitorTest";
	/** [Read] storagegateway:DescribeBandwidthRateLimit */
	static readonly DescribeBandwidthRateLimit =
		"storagegateway:DescribeBandwidthRateLimit";
	/** [Read] storagegateway:DescribeBandwidthRateLimitSchedule */
	static readonly DescribeBandwidthRateLimitSchedule =
		"storagegateway:DescribeBandwidthRateLimitSchedule";
	/** [Read] storagegateway:DescribeCache */
	static readonly DescribeCache = "storagegateway:DescribeCache";
	/** [Read] storagegateway:DescribeCacheReport */
	static readonly DescribeCacheReport = "storagegateway:DescribeCacheReport";
	/** [Read] storagegateway:DescribeCachediSCSIVolumes */
	static readonly DescribeCachediSCSIVolumes =
		"storagegateway:DescribeCachediSCSIVolumes";
	/** [Read] storagegateway:DescribeChapCredentials */
	static readonly DescribeChapCredentials =
		"storagegateway:DescribeChapCredentials";
	/** [Read] storagegateway:DescribeFileSystemAssociations */
	static readonly DescribeFileSystemAssociations =
		"storagegateway:DescribeFileSystemAssociations";
	/** [Read] storagegateway:DescribeGatewayInformation */
	static readonly DescribeGatewayInformation =
		"storagegateway:DescribeGatewayInformation";
	/** [Read] storagegateway:DescribeMaintenanceStartTime */
	static readonly DescribeMaintenanceStartTime =
		"storagegateway:DescribeMaintenanceStartTime";
	/** [Read] storagegateway:DescribeNFSFileShares */
	static readonly DescribeNFSFileShares =
		"storagegateway:DescribeNFSFileShares";
	/** [Read] storagegateway:DescribeSMBFileShares */
	static readonly DescribeSMBFileShares =
		"storagegateway:DescribeSMBFileShares";
	/** [Read] storagegateway:DescribeSMBSettings */
	static readonly DescribeSMBSettings = "storagegateway:DescribeSMBSettings";
	/** [Read] storagegateway:DescribeSnapshotSchedule */
	static readonly DescribeSnapshotSchedule =
		"storagegateway:DescribeSnapshotSchedule";
	/** [Read] storagegateway:DescribeStorediSCSIVolumes */
	static readonly DescribeStorediSCSIVolumes =
		"storagegateway:DescribeStorediSCSIVolumes";
	/** [Read] storagegateway:DescribeTapeArchives */
	static readonly DescribeTapeArchives = "storagegateway:DescribeTapeArchives";
	/** [Read] storagegateway:DescribeTapeRecoveryPoints */
	static readonly DescribeTapeRecoveryPoints =
		"storagegateway:DescribeTapeRecoveryPoints";
	/** [Read] storagegateway:DescribeTapes */
	static readonly DescribeTapes = "storagegateway:DescribeTapes";
	/** [Read] storagegateway:DescribeUploadBuffer */
	static readonly DescribeUploadBuffer = "storagegateway:DescribeUploadBuffer";
	/** [Read] storagegateway:DescribeVTLDevices */
	static readonly DescribeVTLDevices = "storagegateway:DescribeVTLDevices";
	/** [Read] storagegateway:DescribeWorkingStorage */
	static readonly DescribeWorkingStorage =
		"storagegateway:DescribeWorkingStorage";
	/** [Write] storagegateway:DetachVolume */
	static readonly DetachVolume = "storagegateway:DetachVolume";
	/** [Write] storagegateway:DisableGateway */
	static readonly DisableGateway = "storagegateway:DisableGateway";
	/** [Write] storagegateway:DisassociateFileSystem */
	static readonly DisassociateFileSystem =
		"storagegateway:DisassociateFileSystem";
	/** [Write] storagegateway:EvictFilesFailingUpload */
	static readonly EvictFilesFailingUpload =
		"storagegateway:EvictFilesFailingUpload";
	/** [Write] storagegateway:JoinDomain */
	static readonly JoinDomain = "storagegateway:JoinDomain";
	/** [List] storagegateway:ListAutomaticTapeCreationPolicies */
	static readonly ListAutomaticTapeCreationPolicies =
		"storagegateway:ListAutomaticTapeCreationPolicies";
	/** [List] storagegateway:ListCacheReports */
	static readonly ListCacheReports = "storagegateway:ListCacheReports";
	/** [List] storagegateway:ListFileShares */
	static readonly ListFileShares = "storagegateway:ListFileShares";
	/** [List] storagegateway:ListFileSystemAssociations */
	static readonly ListFileSystemAssociations =
		"storagegateway:ListFileSystemAssociations";
	/** [List] storagegateway:ListGateways */
	static readonly ListGateways = "storagegateway:ListGateways";
	/** [List] storagegateway:ListLocalDisks */
	static readonly ListLocalDisks = "storagegateway:ListLocalDisks";
	/** [List] storagegateway:ListTagsForResource */
	static readonly ListTagsForResource = "storagegateway:ListTagsForResource";
	/** [List] storagegateway:ListTapePools */
	static readonly ListTapePools = "storagegateway:ListTapePools";
	/** [List] storagegateway:ListTapes */
	static readonly ListTapes = "storagegateway:ListTapes";
	/** [List] storagegateway:ListVolumeInitiators */
	static readonly ListVolumeInitiators = "storagegateway:ListVolumeInitiators";
	/** [List] storagegateway:ListVolumeRecoveryPoints */
	static readonly ListVolumeRecoveryPoints =
		"storagegateway:ListVolumeRecoveryPoints";
	/** [List] storagegateway:ListVolumes */
	static readonly ListVolumes = "storagegateway:ListVolumes";
	/** [Write] storagegateway:NotifyWhenUploaded */
	static readonly NotifyWhenUploaded = "storagegateway:NotifyWhenUploaded";
	/** [Write] storagegateway:RefreshCache */
	static readonly RefreshCache = "storagegateway:RefreshCache";
	/** [Tagging] storagegateway:RemoveTagsFromResource */
	static readonly RemoveTagsFromResource =
		"storagegateway:RemoveTagsFromResource";
	/** [Write] storagegateway:ResetCache */
	static readonly ResetCache = "storagegateway:ResetCache";
	/** [Write] storagegateway:RetrieveTapeArchive */
	static readonly RetrieveTapeArchive = "storagegateway:RetrieveTapeArchive";
	/** [Write] storagegateway:RetrieveTapeRecoveryPoint */
	static readonly RetrieveTapeRecoveryPoint =
		"storagegateway:RetrieveTapeRecoveryPoint";
	/** [Write] storagegateway:SetLocalConsolePassword */
	static readonly actionSetLocalConsolePassword =
		"storagegateway:SetLocalConsolePassword";
	/** [Write] storagegateway:SetSMBGuestPassword */
	static readonly actionSetSMBGuestPassword =
		"storagegateway:SetSMBGuestPassword";
	/** [Write] storagegateway:ShutdownGateway */
	static readonly ShutdownGateway = "storagegateway:ShutdownGateway";
	/** [Write] storagegateway:StartAvailabilityMonitorTest */
	static readonly StartAvailabilityMonitorTest =
		"storagegateway:StartAvailabilityMonitorTest";
	/** [Write] storagegateway:StartCacheReport */
	static readonly StartCacheReport = "storagegateway:StartCacheReport";
	/** [Write] storagegateway:StartGateway */
	static readonly StartGateway = "storagegateway:StartGateway";
	/** [Write] storagegateway:UpdateAutomaticTapeCreationPolicy */
	static readonly UpdateAutomaticTapeCreationPolicy =
		"storagegateway:UpdateAutomaticTapeCreationPolicy";
	/** [Write] storagegateway:UpdateBandwidthRateLimit */
	static readonly UpdateBandwidthRateLimit =
		"storagegateway:UpdateBandwidthRateLimit";
	/** [Write] storagegateway:UpdateBandwidthRateLimitSchedule */
	static readonly UpdateBandwidthRateLimitSchedule =
		"storagegateway:UpdateBandwidthRateLimitSchedule";
	/** [Write] storagegateway:UpdateChapCredentials */
	static readonly UpdateChapCredentials =
		"storagegateway:UpdateChapCredentials";
	/** [Write] storagegateway:UpdateFileSystemAssociation */
	static readonly UpdateFileSystemAssociation =
		"storagegateway:UpdateFileSystemAssociation";
	/** [Write] storagegateway:UpdateGatewayInformation */
	static readonly UpdateGatewayInformation =
		"storagegateway:UpdateGatewayInformation";
	/** [Write] storagegateway:UpdateGatewaySoftwareNow */
	static readonly UpdateGatewaySoftwareNow =
		"storagegateway:UpdateGatewaySoftwareNow";
	/** [Write] storagegateway:UpdateMaintenanceStartTime */
	static readonly UpdateMaintenanceStartTime =
		"storagegateway:UpdateMaintenanceStartTime";
	/** [Write] storagegateway:UpdateNFSFileShare */
	static readonly UpdateNFSFileShare = "storagegateway:UpdateNFSFileShare";
	/** [Write] storagegateway:UpdateSMBFileShare */
	static readonly UpdateSMBFileShare = "storagegateway:UpdateSMBFileShare";
	/** [Write] storagegateway:UpdateSMBFileShareVisibility */
	static readonly UpdateSMBFileShareVisibility =
		"storagegateway:UpdateSMBFileShareVisibility";
	/** [Write] storagegateway:UpdateSMBLocalGroups */
	static readonly UpdateSMBLocalGroups = "storagegateway:UpdateSMBLocalGroups";
	/** [Write] storagegateway:UpdateSMBSecurityStrategy */
	static readonly UpdateSMBSecurityStrategy =
		"storagegateway:UpdateSMBSecurityStrategy";
	/** [Write] storagegateway:UpdateSnapshotSchedule */
	static readonly UpdateSnapshotSchedule =
		"storagegateway:UpdateSnapshotSchedule";
	/** [Write] storagegateway:UpdateVTLDeviceType */
	static readonly UpdateVTLDeviceType = "storagegateway:UpdateVTLDeviceType";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		StorageGatewayActions.DescribeAvailabilityMonitorTest,
		StorageGatewayActions.DescribeBandwidthRateLimit,
		StorageGatewayActions.DescribeBandwidthRateLimitSchedule,
		StorageGatewayActions.DescribeCache,
		StorageGatewayActions.DescribeCacheReport,
		StorageGatewayActions.DescribeCachediSCSIVolumes,
		StorageGatewayActions.DescribeChapCredentials,
		StorageGatewayActions.DescribeFileSystemAssociations,
		StorageGatewayActions.DescribeGatewayInformation,
		StorageGatewayActions.DescribeMaintenanceStartTime,
		StorageGatewayActions.DescribeNFSFileShares,
		StorageGatewayActions.DescribeSMBFileShares,
		StorageGatewayActions.DescribeSMBSettings,
		StorageGatewayActions.DescribeSnapshotSchedule,
		StorageGatewayActions.DescribeStorediSCSIVolumes,
		StorageGatewayActions.DescribeTapeArchives,
		StorageGatewayActions.DescribeTapeRecoveryPoints,
		StorageGatewayActions.DescribeTapes,
		StorageGatewayActions.DescribeUploadBuffer,
		StorageGatewayActions.DescribeVTLDevices,
		StorageGatewayActions.DescribeWorkingStorage,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		StorageGatewayActions.ActivateGateway,
		StorageGatewayActions.AddCache,
		StorageGatewayActions.AddUploadBuffer,
		StorageGatewayActions.AddWorkingStorage,
		StorageGatewayActions.AssignTapePool,
		StorageGatewayActions.AssociateFileSystem,
		StorageGatewayActions.AttachVolume,
		StorageGatewayActions.BypassGovernanceRetention,
		StorageGatewayActions.CancelArchival,
		StorageGatewayActions.CancelCacheReport,
		StorageGatewayActions.CancelRetrieval,
		StorageGatewayActions.CreateCachediSCSIVolume,
		StorageGatewayActions.CreateNFSFileShare,
		StorageGatewayActions.CreateSMBFileShare,
		StorageGatewayActions.CreateSnapshot,
		StorageGatewayActions.CreateSnapshotFromVolumeRecoveryPoint,
		StorageGatewayActions.CreateStorediSCSIVolume,
		StorageGatewayActions.CreateTapePool,
		StorageGatewayActions.CreateTapeWithBarcode,
		StorageGatewayActions.CreateTapes,
		StorageGatewayActions.DeleteAutomaticTapeCreationPolicy,
		StorageGatewayActions.DeleteBandwidthRateLimit,
		StorageGatewayActions.DeleteCacheReport,
		StorageGatewayActions.DeleteChapCredentials,
		StorageGatewayActions.DeleteFileShare,
		StorageGatewayActions.DeleteGateway,
		StorageGatewayActions.DeleteSnapshotSchedule,
		StorageGatewayActions.DeleteTape,
		StorageGatewayActions.DeleteTapeArchive,
		StorageGatewayActions.DeleteTapePool,
		StorageGatewayActions.DeleteVolume,
		StorageGatewayActions.DetachVolume,
		StorageGatewayActions.DisableGateway,
		StorageGatewayActions.DisassociateFileSystem,
		StorageGatewayActions.EvictFilesFailingUpload,
		StorageGatewayActions.JoinDomain,
		StorageGatewayActions.NotifyWhenUploaded,
		StorageGatewayActions.RefreshCache,
		StorageGatewayActions.ResetCache,
		StorageGatewayActions.RetrieveTapeArchive,
		StorageGatewayActions.RetrieveTapeRecoveryPoint,
		StorageGatewayActions.actionSetLocalConsolePassword,
		StorageGatewayActions.actionSetSMBGuestPassword,
		StorageGatewayActions.ShutdownGateway,
		StorageGatewayActions.StartAvailabilityMonitorTest,
		StorageGatewayActions.StartCacheReport,
		StorageGatewayActions.StartGateway,
		StorageGatewayActions.UpdateAutomaticTapeCreationPolicy,
		StorageGatewayActions.UpdateBandwidthRateLimit,
		StorageGatewayActions.UpdateBandwidthRateLimitSchedule,
		StorageGatewayActions.UpdateChapCredentials,
		StorageGatewayActions.UpdateFileSystemAssociation,
		StorageGatewayActions.UpdateGatewayInformation,
		StorageGatewayActions.UpdateGatewaySoftwareNow,
		StorageGatewayActions.UpdateMaintenanceStartTime,
		StorageGatewayActions.UpdateNFSFileShare,
		StorageGatewayActions.UpdateSMBFileShare,
		StorageGatewayActions.UpdateSMBFileShareVisibility,
		StorageGatewayActions.UpdateSMBLocalGroups,
		StorageGatewayActions.UpdateSMBSecurityStrategy,
		StorageGatewayActions.UpdateSnapshotSchedule,
		StorageGatewayActions.UpdateVTLDeviceType,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		StorageGatewayActions.ListAutomaticTapeCreationPolicies,
		StorageGatewayActions.ListCacheReports,
		StorageGatewayActions.ListFileShares,
		StorageGatewayActions.ListFileSystemAssociations,
		StorageGatewayActions.ListGateways,
		StorageGatewayActions.ListLocalDisks,
		StorageGatewayActions.ListTagsForResource,
		StorageGatewayActions.ListTapePools,
		StorageGatewayActions.ListTapes,
		StorageGatewayActions.ListVolumeInitiators,
		StorageGatewayActions.ListVolumeRecoveryPoints,
		StorageGatewayActions.ListVolumes,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		StorageGatewayActions.AddTagsToResource,
		StorageGatewayActions.RemoveTagsFromResource,
	];
}

/**
 * Properties for building a cache-report ARN.
 */
export interface StorageGatewayCacheReportArnProps {
	/** The ShareId component of the ARN. */
	readonly shareId: string;
	/** The CacheReportId component of the ARN. */
	readonly cacheReportId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cache-report ARN.
 */
export interface StorageGatewayCacheReportArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ShareId component. */
	readonly shareId: string;
	/** The CacheReportId component. */
	readonly cacheReportId: string;
}

/**
 * Properties for building a device ARN.
 */
export interface StorageGatewayDeviceArnProps {
	/** The GatewayId component of the ARN. */
	readonly gatewayId: string;
	/** The Vtldevice component of the ARN. */
	readonly vtldevice: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a device ARN.
 */
export interface StorageGatewayDeviceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
	/** The Vtldevice component. */
	readonly vtldevice: string;
}

/**
 * Properties for building a fs-association ARN.
 */
export interface StorageGatewayFsAssociationArnProps {
	/** The FsaId component of the ARN. */
	readonly fsaId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a fs-association ARN.
 */
export interface StorageGatewayFsAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FsaId component. */
	readonly fsaId: string;
}

/**
 * Properties for building a gateway ARN.
 */
export interface StorageGatewayGatewayArnProps {
	/** The GatewayId component of the ARN. */
	readonly gatewayId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a gateway ARN.
 */
export interface StorageGatewayGatewayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
}

/**
 * Properties for building a share ARN.
 */
export interface StorageGatewayShareArnProps {
	/** The ShareId component of the ARN. */
	readonly shareId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a share ARN.
 */
export interface StorageGatewayShareArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ShareId component. */
	readonly shareId: string;
}

/**
 * Properties for building a tape ARN.
 */
export interface StorageGatewayTapeArnProps {
	/** The TapeBarcode component of the ARN. */
	readonly tapeBarcode: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a tape ARN.
 */
export interface StorageGatewayTapeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TapeBarcode component. */
	readonly tapeBarcode: string;
}

/**
 * Properties for building a tapepool ARN.
 */
export interface StorageGatewayTapepoolArnProps {
	/** The PoolId component of the ARN. */
	readonly poolId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a tapepool ARN.
 */
export interface StorageGatewayTapepoolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PoolId component. */
	readonly poolId: string;
}

/**
 * Properties for building a target ARN.
 */
export interface StorageGatewayTargetArnProps {
	/** The GatewayId component of the ARN. */
	readonly gatewayId: string;
	/** The IscsiTarget component of the ARN. */
	readonly iscsiTarget: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a target ARN.
 */
export interface StorageGatewayTargetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
	/** The IscsiTarget component. */
	readonly iscsiTarget: string;
}

/**
 * Properties for building a volume ARN.
 */
export interface StorageGatewayVolumeArnProps {
	/** The GatewayId component of the ARN. */
	readonly gatewayId: string;
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
export interface StorageGatewayVolumeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
	/** The VolumeId component. */
	readonly volumeId: string;
}

const CacheReportArnRegex =
	/^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):share\/(?<shareId>[^:/?]+)\/cache-report\/(?<cacheReportId>[^:/?]+)$/;
const DeviceArnRegex =
	/^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)\/device\/(?<vtldevice>[^:/?]+)$/;
const FsAssociationArnRegex =
	/^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):fs-association\/(?<fsaId>[^:/?]+)$/;
const GatewayArnRegex =
	/^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)$/;
const ShareArnRegex =
	/^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):share\/(?<shareId>[^:/?]+)$/;
const TapeArnRegex =
	/^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):tape\/(?<tapeBarcode>[^:/?]+)$/;
const TapepoolArnRegex =
	/^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):tapepool\/(?<poolId>[^:/?]+)$/;
const TargetArnRegex =
	/^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)\/target\/(?<iscsiTarget>[^:/?]+)$/;
const VolumeArnRegex =
	/^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)\/volume\/(?<volumeId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for storagegateway resources.
 */
export class StorageGatewayResources {
	/**
	 * Builds an ARN for the cache-report resource.
	 */
	static cacheReport(props: StorageGatewayCacheReportArnProps): string {
		return `arn:${props.partition ?? "aws"}:storagegateway:${props.region ?? "*"}:${props.account ?? "*"}:share/${props.shareId}/cache-report/${props.cacheReportId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cache-report resource.
	 */
	static isValidCacheReportArn(arn: string): boolean {
		return CacheReportArnRegex.test(arn);
	}

	/**
	 * Parses a cache-report ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCacheReportArn(
		arn: string,
	): StorageGatewayCacheReportArnComponents {
		const match = CacheReportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cache-report ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			shareId: match.groups!.shareId,
			cacheReportId: match.groups!.cacheReportId,
		};
	}

	/**
	 * Builds an ARN for the device resource.
	 */
	static device(props: StorageGatewayDeviceArnProps): string {
		return `arn:${props.partition ?? "aws"}:storagegateway:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}/device/${props.vtldevice}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the device resource.
	 */
	static isValidDeviceArn(arn: string): boolean {
		return DeviceArnRegex.test(arn);
	}

	/**
	 * Parses a device ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeviceArn(arn: string): StorageGatewayDeviceArnComponents {
		const match = DeviceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid device ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
			vtldevice: match.groups!.vtldevice,
		};
	}

	/**
	 * Builds an ARN for the fs-association resource.
	 */
	static fsAssociation(props: StorageGatewayFsAssociationArnProps): string {
		return `arn:${props.partition ?? "aws"}:storagegateway:${props.region ?? "*"}:${props.account ?? "*"}:fs-association/${props.fsaId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the fs-association resource.
	 */
	static isValidFsAssociationArn(arn: string): boolean {
		return FsAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a fs-association ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFsAssociationArn(
		arn: string,
	): StorageGatewayFsAssociationArnComponents {
		const match = FsAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid fs-association ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fsaId: match.groups!.fsaId,
		};
	}

	/**
	 * Builds an ARN for the gateway resource.
	 */
	static gateway(props: StorageGatewayGatewayArnProps): string {
		return `arn:${props.partition ?? "aws"}:storagegateway:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the gateway resource.
	 */
	static isValidGatewayArn(arn: string): boolean {
		return GatewayArnRegex.test(arn);
	}

	/**
	 * Parses a gateway ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGatewayArn(arn: string): StorageGatewayGatewayArnComponents {
		const match = GatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid gateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
		};
	}

	/**
	 * Builds an ARN for the share resource.
	 */
	static share(props: StorageGatewayShareArnProps): string {
		return `arn:${props.partition ?? "aws"}:storagegateway:${props.region ?? "*"}:${props.account ?? "*"}:share/${props.shareId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the share resource.
	 */
	static isValidShareArn(arn: string): boolean {
		return ShareArnRegex.test(arn);
	}

	/**
	 * Parses a share ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseShareArn(arn: string): StorageGatewayShareArnComponents {
		const match = ShareArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid share ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			shareId: match.groups!.shareId,
		};
	}

	/**
	 * Builds an ARN for the tape resource.
	 */
	static tape(props: StorageGatewayTapeArnProps): string {
		return `arn:${props.partition ?? "aws"}:storagegateway:${props.region ?? "*"}:${props.account ?? "*"}:tape/${props.tapeBarcode}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the tape resource.
	 */
	static isValidTapeArn(arn: string): boolean {
		return TapeArnRegex.test(arn);
	}

	/**
	 * Parses a tape ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTapeArn(arn: string): StorageGatewayTapeArnComponents {
		const match = TapeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid tape ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tapeBarcode: match.groups!.tapeBarcode,
		};
	}

	/**
	 * Builds an ARN for the tapepool resource.
	 */
	static tapepool(props: StorageGatewayTapepoolArnProps): string {
		return `arn:${props.partition ?? "aws"}:storagegateway:${props.region ?? "*"}:${props.account ?? "*"}:tapepool/${props.poolId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the tapepool resource.
	 */
	static isValidTapepoolArn(arn: string): boolean {
		return TapepoolArnRegex.test(arn);
	}

	/**
	 * Parses a tapepool ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTapepoolArn(arn: string): StorageGatewayTapepoolArnComponents {
		const match = TapepoolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid tapepool ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			poolId: match.groups!.poolId,
		};
	}

	/**
	 * Builds an ARN for the target resource.
	 */
	static target(props: StorageGatewayTargetArnProps): string {
		return `arn:${props.partition ?? "aws"}:storagegateway:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}/target/${props.iscsiTarget}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the target resource.
	 */
	static isValidTargetArn(arn: string): boolean {
		return TargetArnRegex.test(arn);
	}

	/**
	 * Parses a target ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTargetArn(arn: string): StorageGatewayTargetArnComponents {
		const match = TargetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid target ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
			iscsiTarget: match.groups!.iscsiTarget,
		};
	}

	/**
	 * Builds an ARN for the volume resource.
	 */
	static volume(props: StorageGatewayVolumeArnProps): string {
		return `arn:${props.partition ?? "aws"}:storagegateway:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}/volume/${props.volumeId}`;
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
	static parseVolumeArn(arn: string): StorageGatewayVolumeArnComponents {
		const match = VolumeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid volume ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
			volumeId: match.groups!.volumeId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for storagegateway.
 */
export class StorageGatewayOperations {
	/** IAM actions required for the ActivateGateway API call. */
	static readonly ActivateGateway: string[] = [
		"storagegateway:ActivateGateway",
		"storagegateway:AddTagsToResource",
	];
	/** IAM actions required for the AddCache API call. */
	static readonly AddCache: string[] = ["storagegateway:AddCache"];
	/** IAM actions required for the AddTagsToResource API call. */
	static readonly AddTagsToResource: string[] = [
		"storagegateway:AddTagsToResource",
	];
	/** IAM actions required for the AddUploadBuffer API call. */
	static readonly AddUploadBuffer: string[] = [
		"storagegateway:AddUploadBuffer",
	];
	/** IAM actions required for the AddWorkingStorage API call. */
	static readonly AddWorkingStorage: string[] = [
		"storagegateway:AddWorkingStorage",
	];
	/** IAM actions required for the AssignTapePool API call. */
	static readonly AssignTapePool: string[] = [
		"storagegateway:AssignTapePool",
		"storagegateway:BypassGovernanceRetention",
	];
	/** IAM actions required for the AssociateFileSystem API call. */
	static readonly AssociateFileSystem: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:AssociateFileSystem",
	];
	/** IAM actions required for the AttachVolume API call. */
	static readonly AttachVolume: string[] = ["storagegateway:AttachVolume"];
	/** IAM actions required for the CancelArchival API call. */
	static readonly CancelArchival: string[] = ["storagegateway:CancelArchival"];
	/** IAM actions required for the CancelCacheReport API call. */
	static readonly CancelCacheReport: string[] = [
		"storagegateway:CancelCacheReport",
	];
	/** IAM actions required for the CancelRetrieval API call. */
	static readonly CancelRetrieval: string[] = [
		"storagegateway:CancelRetrieval",
	];
	/** IAM actions required for the CreateCachediSCSIVolume API call. */
	static readonly CreateCachediSCSIVolume: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateCachediSCSIVolume",
	];
	/** IAM actions required for the CreateNFSFileShare API call. */
	static readonly CreateNFSFileShare: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateNFSFileShare",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateSMBFileShare API call. */
	static readonly CreateSMBFileShare: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateSMBFileShare",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateSnapshot API call. */
	static readonly CreateSnapshot: string[] = ["storagegateway:CreateSnapshot"];
	/** IAM actions required for the CreateSnapshotFromVolumeRecoveryPoint API call. */
	static readonly CreateSnapshotFromVolumeRecoveryPoint: string[] = [
		"storagegateway:CreateSnapshotFromVolumeRecoveryPoint",
	];
	/** IAM actions required for the CreateStorediSCSIVolume API call. */
	static readonly CreateStorediSCSIVolume: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateStorediSCSIVolume",
	];
	/** IAM actions required for the CreateTapePool API call. */
	static readonly CreateTapePool: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateTapePool",
	];
	/** IAM actions required for the CreateTapeWithBarcode API call. */
	static readonly CreateTapeWithBarcode: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateTapeWithBarcode",
	];
	/** IAM actions required for the CreateTapes API call. */
	static readonly CreateTapes: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateTapes",
	];
	/** IAM actions required for the DeleteAutomaticTapeCreationPolicy API call. */
	static readonly DeleteAutomaticTapeCreationPolicy: string[] = [
		"storagegateway:DeleteAutomaticTapeCreationPolicy",
	];
	/** IAM actions required for the DeleteBandwidthRateLimit API call. */
	static readonly DeleteBandwidthRateLimit: string[] = [
		"storagegateway:DeleteBandwidthRateLimit",
	];
	/** IAM actions required for the DeleteCacheReport API call. */
	static readonly DeleteCacheReport: string[] = [
		"storagegateway:DeleteCacheReport",
	];
	/** IAM actions required for the DeleteChapCredentials API call. */
	static readonly DeleteChapCredentials: string[] = [
		"storagegateway:DeleteChapCredentials",
	];
	/** IAM actions required for the DeleteFileShare API call. */
	static readonly DeleteFileShare: string[] = [
		"storagegateway:DeleteFileShare",
	];
	/** IAM actions required for the DeleteGateway API call. */
	static readonly DeleteGateway: string[] = ["storagegateway:DeleteGateway"];
	/** IAM actions required for the DeleteSnapshotSchedule API call. */
	static readonly DeleteSnapshotSchedule: string[] = [
		"storagegateway:DeleteSnapshotSchedule",
	];
	/** IAM actions required for the DeleteTape API call. */
	static readonly DeleteTape: string[] = ["storagegateway:DeleteTape"];
	/** IAM actions required for the DeleteTapeArchive API call. */
	static readonly DeleteTapeArchive: string[] = [
		"storagegateway:BypassGovernanceRetention",
		"storagegateway:DeleteTapeArchive",
	];
	/** IAM actions required for the DeleteTapePool API call. */
	static readonly DeleteTapePool: string[] = ["storagegateway:DeleteTapePool"];
	/** IAM actions required for the DeleteVolume API call. */
	static readonly DeleteVolume: string[] = ["storagegateway:DeleteVolume"];
	/** IAM actions required for the DescribeAvailabilityMonitorTest API call. */
	static readonly DescribeAvailabilityMonitorTest: string[] = [
		"storagegateway:DescribeAvailabilityMonitorTest",
	];
	/** IAM actions required for the DescribeBandwidthRateLimit API call. */
	static readonly DescribeBandwidthRateLimit: string[] = [
		"storagegateway:DescribeBandwidthRateLimit",
	];
	/** IAM actions required for the DescribeBandwidthRateLimitSchedule API call. */
	static readonly DescribeBandwidthRateLimitSchedule: string[] = [
		"storagegateway:DescribeBandwidthRateLimitSchedule",
	];
	/** IAM actions required for the DescribeCache API call. */
	static readonly DescribeCache: string[] = ["storagegateway:DescribeCache"];
	/** IAM actions required for the DescribeCacheReport API call. */
	static readonly DescribeCacheReport: string[] = [
		"storagegateway:DescribeCacheReport",
	];
	/** IAM actions required for the DescribeCachediSCSIVolumes API call. */
	static readonly DescribeCachediSCSIVolumes: string[] = [
		"storagegateway:DescribeCachediSCSIVolumes",
	];
	/** IAM actions required for the DescribeChapCredentials API call. */
	static readonly DescribeChapCredentials: string[] = [
		"storagegateway:DescribeChapCredentials",
	];
	/** IAM actions required for the DescribeFileSystemAssociations API call. */
	static readonly DescribeFileSystemAssociations: string[] = [
		"storagegateway:DescribeFileSystemAssociations",
	];
	/** IAM actions required for the DescribeGatewayInformation API call. */
	static readonly DescribeGatewayInformation: string[] = [
		"storagegateway:DescribeGatewayInformation",
	];
	/** IAM actions required for the DescribeMaintenanceStartTime API call. */
	static readonly DescribeMaintenanceStartTime: string[] = [
		"storagegateway:DescribeMaintenanceStartTime",
	];
	/** IAM actions required for the DescribeNFSFileShares API call. */
	static readonly DescribeNFSFileShares: string[] = [
		"storagegateway:DescribeNFSFileShares",
	];
	/** IAM actions required for the DescribeSMBFileShares API call. */
	static readonly DescribeSMBFileShares: string[] = [
		"storagegateway:DescribeSMBFileShares",
	];
	/** IAM actions required for the DescribeSMBSettings API call. */
	static readonly DescribeSMBSettings: string[] = [
		"storagegateway:DescribeSMBSettings",
	];
	/** IAM actions required for the DescribeSnapshotSchedule API call. */
	static readonly DescribeSnapshotSchedule: string[] = [
		"storagegateway:DescribeSnapshotSchedule",
	];
	/** IAM actions required for the DescribeStorediSCSIVolumes API call. */
	static readonly DescribeStorediSCSIVolumes: string[] = [
		"storagegateway:DescribeStorediSCSIVolumes",
	];
	/** IAM actions required for the DescribeTapeArchives API call. */
	static readonly DescribeTapeArchives: string[] = [
		"storagegateway:DescribeTapeArchives",
	];
	/** IAM actions required for the DescribeTapeRecoveryPoints API call. */
	static readonly DescribeTapeRecoveryPoints: string[] = [
		"storagegateway:DescribeTapeRecoveryPoints",
	];
	/** IAM actions required for the DescribeTapes API call. */
	static readonly DescribeTapes: string[] = ["storagegateway:DescribeTapes"];
	/** IAM actions required for the DescribeUploadBuffer API call. */
	static readonly DescribeUploadBuffer: string[] = [
		"storagegateway:DescribeUploadBuffer",
	];
	/** IAM actions required for the DescribeVTLDevices API call. */
	static readonly DescribeVTLDevices: string[] = [
		"storagegateway:DescribeVTLDevices",
	];
	/** IAM actions required for the DescribeWorkingStorage API call. */
	static readonly DescribeWorkingStorage: string[] = [
		"storagegateway:DescribeWorkingStorage",
	];
	/** IAM actions required for the DetachVolume API call. */
	static readonly DetachVolume: string[] = ["storagegateway:DetachVolume"];
	/** IAM actions required for the DisableGateway API call. */
	static readonly DisableGateway: string[] = ["storagegateway:DisableGateway"];
	/** IAM actions required for the DisassociateFileSystem API call. */
	static readonly DisassociateFileSystem: string[] = [
		"storagegateway:DisassociateFileSystem",
	];
	/** IAM actions required for the EvictFilesFailingUpload API call. */
	static readonly EvictFilesFailingUpload: string[] = [
		"storagegateway:EvictFilesFailingUpload",
	];
	/** IAM actions required for the JoinDomain API call. */
	static readonly JoinDomain: string[] = ["storagegateway:JoinDomain"];
	/** IAM actions required for the ListAutomaticTapeCreationPolicies API call. */
	static readonly ListAutomaticTapeCreationPolicies: string[] = [
		"storagegateway:ListAutomaticTapeCreationPolicies",
	];
	/** IAM actions required for the ListCacheReports API call. */
	static readonly ListCacheReports: string[] = [
		"storagegateway:ListCacheReports",
	];
	/** IAM actions required for the ListFileShares API call. */
	static readonly ListFileShares: string[] = ["storagegateway:ListFileShares"];
	/** IAM actions required for the ListFileSystemAssociations API call. */
	static readonly ListFileSystemAssociations: string[] = [
		"storagegateway:ListFileSystemAssociations",
	];
	/** IAM actions required for the ListGateways API call. */
	static readonly ListGateways: string[] = ["storagegateway:ListGateways"];
	/** IAM actions required for the ListLocalDisks API call. */
	static readonly ListLocalDisks: string[] = ["storagegateway:ListLocalDisks"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"storagegateway:ListTagsForResource",
	];
	/** IAM actions required for the ListTapePools API call. */
	static readonly ListTapePools: string[] = ["storagegateway:ListTapePools"];
	/** IAM actions required for the ListTapes API call. */
	static readonly ListTapes: string[] = ["storagegateway:ListTapes"];
	/** IAM actions required for the ListVolumeInitiators API call. */
	static readonly ListVolumeInitiators: string[] = [
		"storagegateway:ListVolumeInitiators",
	];
	/** IAM actions required for the ListVolumeRecoveryPoints API call. */
	static readonly ListVolumeRecoveryPoints: string[] = [
		"storagegateway:ListVolumeRecoveryPoints",
	];
	/** IAM actions required for the ListVolumes API call. */
	static readonly ListVolumes: string[] = ["storagegateway:ListVolumes"];
	/** IAM actions required for the NotifyWhenUploaded API call. */
	static readonly NotifyWhenUploaded: string[] = [
		"storagegateway:NotifyWhenUploaded",
	];
	/** IAM actions required for the RefreshCache API call. */
	static readonly RefreshCache: string[] = ["storagegateway:RefreshCache"];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly RemoveTagsFromResource: string[] = [
		"storagegateway:RemoveTagsFromResource",
	];
	/** IAM actions required for the ResetCache API call. */
	static readonly ResetCache: string[] = ["storagegateway:ResetCache"];
	/** IAM actions required for the RetrieveTapeArchive API call. */
	static readonly RetrieveTapeArchive: string[] = [
		"storagegateway:RetrieveTapeArchive",
	];
	/** IAM actions required for the RetrieveTapeRecoveryPoint API call. */
	static readonly RetrieveTapeRecoveryPoint: string[] = [
		"storagegateway:RetrieveTapeRecoveryPoint",
	];
	/** IAM actions required for the SetLocalConsolePassword API call. */
	static readonly opSetLocalConsolePassword: string[] = [
		"storagegateway:SetLocalConsolePassword",
	];
	/** IAM actions required for the SetSMBGuestPassword API call. */
	static readonly opSetSMBGuestPassword: string[] = [
		"storagegateway:SetSMBGuestPassword",
	];
	/** IAM actions required for the ShutdownGateway API call. */
	static readonly ShutdownGateway: string[] = [
		"storagegateway:ShutdownGateway",
	];
	/** IAM actions required for the StartAvailabilityMonitorTest API call. */
	static readonly StartAvailabilityMonitorTest: string[] = [
		"storagegateway:StartAvailabilityMonitorTest",
	];
	/** IAM actions required for the StartCacheReport API call. */
	static readonly StartCacheReport: string[] = [
		"storagegateway:AddTagsToResource",
		"iam:PassRole",
		"storagegateway:StartCacheReport",
	];
	/** IAM actions required for the StartGateway API call. */
	static readonly StartGateway: string[] = ["storagegateway:StartGateway"];
	/** IAM actions required for the UpdateAutomaticTapeCreationPolicy API call. */
	static readonly UpdateAutomaticTapeCreationPolicy: string[] = [
		"storagegateway:UpdateAutomaticTapeCreationPolicy",
	];
	/** IAM actions required for the UpdateBandwidthRateLimit API call. */
	static readonly UpdateBandwidthRateLimit: string[] = [
		"storagegateway:UpdateBandwidthRateLimit",
	];
	/** IAM actions required for the UpdateBandwidthRateLimitSchedule API call. */
	static readonly UpdateBandwidthRateLimitSchedule: string[] = [
		"storagegateway:UpdateBandwidthRateLimitSchedule",
	];
	/** IAM actions required for the UpdateChapCredentials API call. */
	static readonly UpdateChapCredentials: string[] = [
		"storagegateway:UpdateChapCredentials",
	];
	/** IAM actions required for the UpdateFileSystemAssociation API call. */
	static readonly UpdateFileSystemAssociation: string[] = [
		"storagegateway:UpdateFileSystemAssociation",
	];
	/** IAM actions required for the UpdateGatewayInformation API call. */
	static readonly UpdateGatewayInformation: string[] = [
		"storagegateway:UpdateGatewayInformation",
	];
	/** IAM actions required for the UpdateGatewaySoftwareNow API call. */
	static readonly UpdateGatewaySoftwareNow: string[] = [
		"storagegateway:UpdateGatewaySoftwareNow",
	];
	/** IAM actions required for the UpdateMaintenanceStartTime API call. */
	static readonly UpdateMaintenanceStartTime: string[] = [
		"storagegateway:UpdateMaintenanceStartTime",
	];
	/** IAM actions required for the UpdateNFSFileShare API call. */
	static readonly UpdateNFSFileShare: string[] = [
		"storagegateway:UpdateNFSFileShare",
	];
	/** IAM actions required for the UpdateSMBFileShare API call. */
	static readonly UpdateSMBFileShare: string[] = [
		"storagegateway:UpdateSMBFileShare",
	];
	/** IAM actions required for the UpdateSMBFileShareVisibility API call. */
	static readonly UpdateSMBFileShareVisibility: string[] = [
		"storagegateway:UpdateSMBFileShareVisibility",
	];
	/** IAM actions required for the UpdateSMBLocalGroups API call. */
	static readonly UpdateSMBLocalGroups: string[] = [
		"storagegateway:UpdateSMBLocalGroups",
	];
	/** IAM actions required for the UpdateSMBSecurityStrategy API call. */
	static readonly UpdateSMBSecurityStrategy: string[] = [
		"storagegateway:UpdateSMBSecurityStrategy",
	];
	/** IAM actions required for the UpdateSnapshotSchedule API call. */
	static readonly UpdateSnapshotSchedule: string[] = [
		"storagegateway:UpdateSnapshotSchedule",
	];
	/** IAM actions required for the UpdateVTLDeviceType API call. */
	static readonly UpdateVTLDeviceType: string[] = [
		"storagegateway:UpdateVTLDeviceType",
	];
}

/**
 * Condition key constants and builders for storagegateway.
 */
export class StorageGatewayConditions {
	/** Condition keys applicable to the ActivateGateway action. */
	static readonly ActivateGatewayConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AddTagsToResource action. */
	static readonly AddTagsToResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AssociateFileSystem action. */
	static readonly AssociateFileSystemConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCachediSCSIVolume action. */
	static readonly CreateCachediSCSIVolumeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNFSFileShare action. */
	static readonly CreateNFSFileShareConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSMBFileShare action. */
	static readonly CreateSMBFileShareConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshot action. */
	static readonly CreateSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshotFromVolumeRecoveryPoint action. */
	static readonly CreateSnapshotFromVolumeRecoveryPointConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateStorediSCSIVolume action. */
	static readonly CreateStorediSCSIVolumeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTapePool action. */
	static readonly CreateTapePoolConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTapeWithBarcode action. */
	static readonly CreateTapeWithBarcodeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTapes action. */
	static readonly CreateTapesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTagsFromResource action. */
	static readonly RemoveTagsFromResourceConditionKeys: string[] = [
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCacheReport action. */
	static readonly StartCacheReportConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateSnapshotSchedule action. */
	static readonly UpdateSnapshotScheduleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

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
