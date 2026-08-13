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
	static readonly ACTIVATE_GATEWAY = "storagegateway:ActivateGateway";
	/** [Write] storagegateway:AddCache */
	static readonly ADD_CACHE = "storagegateway:AddCache";
	/** [Tagging] storagegateway:AddTagsToResource */
	static readonly ADD_TAGS_TO_RESOURCE = "storagegateway:AddTagsToResource";
	/** [Write] storagegateway:AddUploadBuffer */
	static readonly ADD_UPLOAD_BUFFER = "storagegateway:AddUploadBuffer";
	/** [Write] storagegateway:AddWorkingStorage */
	static readonly ADD_WORKING_STORAGE = "storagegateway:AddWorkingStorage";
	/** [Write] storagegateway:AssignTapePool */
	static readonly ASSIGN_TAPE_POOL = "storagegateway:AssignTapePool";
	/** [Write] storagegateway:AssociateFileSystem */
	static readonly ASSOCIATE_FILE_SYSTEM = "storagegateway:AssociateFileSystem";
	/** [Write] storagegateway:AttachVolume */
	static readonly ATTACH_VOLUME = "storagegateway:AttachVolume";
	/** [Write] storagegateway:BypassGovernanceRetention */
	static readonly BYPASS_GOVERNANCE_RETENTION =
		"storagegateway:BypassGovernanceRetention";
	/** [Write] storagegateway:CancelArchival */
	static readonly CANCEL_ARCHIVAL = "storagegateway:CancelArchival";
	/** [Write] storagegateway:CancelCacheReport */
	static readonly CANCEL_CACHE_REPORT = "storagegateway:CancelCacheReport";
	/** [Write] storagegateway:CancelRetrieval */
	static readonly CANCEL_RETRIEVAL = "storagegateway:CancelRetrieval";
	/** [Write] storagegateway:CreateCachediSCSIVolume */
	static readonly CREATE_CACHEDI_SCSI_VOLUME =
		"storagegateway:CreateCachediSCSIVolume";
	/** [Write] storagegateway:CreateNFSFileShare */
	static readonly CREATE_NFS_FILE_SHARE = "storagegateway:CreateNFSFileShare";
	/** [Write] storagegateway:CreateSMBFileShare */
	static readonly CREATE_SMB_FILE_SHARE = "storagegateway:CreateSMBFileShare";
	/** [Write] storagegateway:CreateSnapshot */
	static readonly CREATE_SNAPSHOT = "storagegateway:CreateSnapshot";
	/** [Write] storagegateway:CreateSnapshotFromVolumeRecoveryPoint */
	static readonly CREATE_SNAPSHOT_FROM_VOLUME_RECOVERY_POINT =
		"storagegateway:CreateSnapshotFromVolumeRecoveryPoint";
	/** [Write] storagegateway:CreateStorediSCSIVolume */
	static readonly CREATE_STOREDI_SCSI_VOLUME =
		"storagegateway:CreateStorediSCSIVolume";
	/** [Write] storagegateway:CreateTapePool */
	static readonly CREATE_TAPE_POOL = "storagegateway:CreateTapePool";
	/** [Write] storagegateway:CreateTapeWithBarcode */
	static readonly CREATE_TAPE_WITH_BARCODE =
		"storagegateway:CreateTapeWithBarcode";
	/** [Write] storagegateway:CreateTapes */
	static readonly CREATE_TAPES = "storagegateway:CreateTapes";
	/** [Write] storagegateway:DeleteAutomaticTapeCreationPolicy */
	static readonly DELETE_AUTOMATIC_TAPE_CREATION_POLICY =
		"storagegateway:DeleteAutomaticTapeCreationPolicy";
	/** [Write] storagegateway:DeleteBandwidthRateLimit */
	static readonly DELETE_BANDWIDTH_RATE_LIMIT =
		"storagegateway:DeleteBandwidthRateLimit";
	/** [Write] storagegateway:DeleteCacheReport */
	static readonly DELETE_CACHE_REPORT = "storagegateway:DeleteCacheReport";
	/** [Write] storagegateway:DeleteChapCredentials */
	static readonly DELETE_CHAP_CREDENTIALS =
		"storagegateway:DeleteChapCredentials";
	/** [Write] storagegateway:DeleteFileShare */
	static readonly DELETE_FILE_SHARE = "storagegateway:DeleteFileShare";
	/** [Write] storagegateway:DeleteGateway */
	static readonly DELETE_GATEWAY = "storagegateway:DeleteGateway";
	/** [Write] storagegateway:DeleteSnapshotSchedule */
	static readonly DELETE_SNAPSHOT_SCHEDULE =
		"storagegateway:DeleteSnapshotSchedule";
	/** [Write] storagegateway:DeleteTape */
	static readonly DELETE_TAPE = "storagegateway:DeleteTape";
	/** [Write] storagegateway:DeleteTapeArchive */
	static readonly DELETE_TAPE_ARCHIVE = "storagegateway:DeleteTapeArchive";
	/** [Write] storagegateway:DeleteTapePool */
	static readonly DELETE_TAPE_POOL = "storagegateway:DeleteTapePool";
	/** [Write] storagegateway:DeleteVolume */
	static readonly DELETE_VOLUME = "storagegateway:DeleteVolume";
	/** [Read] storagegateway:DescribeAvailabilityMonitorTest */
	static readonly DESCRIBE_AVAILABILITY_MONITOR_TEST =
		"storagegateway:DescribeAvailabilityMonitorTest";
	/** [Read] storagegateway:DescribeBandwidthRateLimit */
	static readonly DESCRIBE_BANDWIDTH_RATE_LIMIT =
		"storagegateway:DescribeBandwidthRateLimit";
	/** [Read] storagegateway:DescribeBandwidthRateLimitSchedule */
	static readonly DESCRIBE_BANDWIDTH_RATE_LIMIT_SCHEDULE =
		"storagegateway:DescribeBandwidthRateLimitSchedule";
	/** [Read] storagegateway:DescribeCache */
	static readonly DESCRIBE_CACHE = "storagegateway:DescribeCache";
	/** [Read] storagegateway:DescribeCacheReport */
	static readonly DESCRIBE_CACHE_REPORT = "storagegateway:DescribeCacheReport";
	/** [Read] storagegateway:DescribeCachediSCSIVolumes */
	static readonly DESCRIBE_CACHEDI_SCSI_VOLUMES =
		"storagegateway:DescribeCachediSCSIVolumes";
	/** [Read] storagegateway:DescribeChapCredentials */
	static readonly DESCRIBE_CHAP_CREDENTIALS =
		"storagegateway:DescribeChapCredentials";
	/** [Read] storagegateway:DescribeFileSystemAssociations */
	static readonly DESCRIBE_FILE_SYSTEM_ASSOCIATIONS =
		"storagegateway:DescribeFileSystemAssociations";
	/** [Read] storagegateway:DescribeGatewayInformation */
	static readonly DESCRIBE_GATEWAY_INFORMATION =
		"storagegateway:DescribeGatewayInformation";
	/** [Read] storagegateway:DescribeMaintenanceStartTime */
	static readonly DESCRIBE_MAINTENANCE_START_TIME =
		"storagegateway:DescribeMaintenanceStartTime";
	/** [Read] storagegateway:DescribeNFSFileShares */
	static readonly DESCRIBE_NFS_FILE_SHARES =
		"storagegateway:DescribeNFSFileShares";
	/** [Read] storagegateway:DescribeSMBFileShares */
	static readonly DESCRIBE_SMB_FILE_SHARES =
		"storagegateway:DescribeSMBFileShares";
	/** [Read] storagegateway:DescribeSMBSettings */
	static readonly DESCRIBE_SMB_SETTINGS = "storagegateway:DescribeSMBSettings";
	/** [Read] storagegateway:DescribeSnapshotSchedule */
	static readonly DESCRIBE_SNAPSHOT_SCHEDULE =
		"storagegateway:DescribeSnapshotSchedule";
	/** [Read] storagegateway:DescribeStorediSCSIVolumes */
	static readonly DESCRIBE_STOREDI_SCSI_VOLUMES =
		"storagegateway:DescribeStorediSCSIVolumes";
	/** [Read] storagegateway:DescribeTapeArchives */
	static readonly DESCRIBE_TAPE_ARCHIVES =
		"storagegateway:DescribeTapeArchives";
	/** [Read] storagegateway:DescribeTapeRecoveryPoints */
	static readonly DESCRIBE_TAPE_RECOVERY_POINTS =
		"storagegateway:DescribeTapeRecoveryPoints";
	/** [Read] storagegateway:DescribeTapes */
	static readonly DESCRIBE_TAPES = "storagegateway:DescribeTapes";
	/** [Read] storagegateway:DescribeUploadBuffer */
	static readonly DESCRIBE_UPLOAD_BUFFER =
		"storagegateway:DescribeUploadBuffer";
	/** [Read] storagegateway:DescribeVTLDevices */
	static readonly DESCRIBE_VTL_DEVICES = "storagegateway:DescribeVTLDevices";
	/** [Read] storagegateway:DescribeWorkingStorage */
	static readonly DESCRIBE_WORKING_STORAGE =
		"storagegateway:DescribeWorkingStorage";
	/** [Write] storagegateway:DetachVolume */
	static readonly DETACH_VOLUME = "storagegateway:DetachVolume";
	/** [Write] storagegateway:DisableGateway */
	static readonly DISABLE_GATEWAY = "storagegateway:DisableGateway";
	/** [Write] storagegateway:DisassociateFileSystem */
	static readonly DISASSOCIATE_FILE_SYSTEM =
		"storagegateway:DisassociateFileSystem";
	/** [Write] storagegateway:EvictFilesFailingUpload */
	static readonly EVICT_FILES_FAILING_UPLOAD =
		"storagegateway:EvictFilesFailingUpload";
	/** [Write] storagegateway:JoinDomain */
	static readonly JOIN_DOMAIN = "storagegateway:JoinDomain";
	/** [List] storagegateway:ListAutomaticTapeCreationPolicies */
	static readonly LIST_AUTOMATIC_TAPE_CREATION_POLICIES =
		"storagegateway:ListAutomaticTapeCreationPolicies";
	/** [List] storagegateway:ListCacheReports */
	static readonly LIST_CACHE_REPORTS = "storagegateway:ListCacheReports";
	/** [List] storagegateway:ListFileShares */
	static readonly LIST_FILE_SHARES = "storagegateway:ListFileShares";
	/** [List] storagegateway:ListFileSystemAssociations */
	static readonly LIST_FILE_SYSTEM_ASSOCIATIONS =
		"storagegateway:ListFileSystemAssociations";
	/** [List] storagegateway:ListGateways */
	static readonly LIST_GATEWAYS = "storagegateway:ListGateways";
	/** [List] storagegateway:ListLocalDisks */
	static readonly LIST_LOCAL_DISKS = "storagegateway:ListLocalDisks";
	/** [List] storagegateway:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "storagegateway:ListTagsForResource";
	/** [List] storagegateway:ListTapePools */
	static readonly LIST_TAPE_POOLS = "storagegateway:ListTapePools";
	/** [List] storagegateway:ListTapes */
	static readonly LIST_TAPES = "storagegateway:ListTapes";
	/** [List] storagegateway:ListVolumeInitiators */
	static readonly LIST_VOLUME_INITIATORS =
		"storagegateway:ListVolumeInitiators";
	/** [List] storagegateway:ListVolumeRecoveryPoints */
	static readonly LIST_VOLUME_RECOVERY_POINTS =
		"storagegateway:ListVolumeRecoveryPoints";
	/** [List] storagegateway:ListVolumes */
	static readonly LIST_VOLUMES = "storagegateway:ListVolumes";
	/** [Write] storagegateway:NotifyWhenUploaded */
	static readonly NOTIFY_WHEN_UPLOADED = "storagegateway:NotifyWhenUploaded";
	/** [Write] storagegateway:RefreshCache */
	static readonly REFRESH_CACHE = "storagegateway:RefreshCache";
	/** [Tagging] storagegateway:RemoveTagsFromResource */
	static readonly REMOVE_TAGS_FROM_RESOURCE =
		"storagegateway:RemoveTagsFromResource";
	/** [Write] storagegateway:ResetCache */
	static readonly RESET_CACHE = "storagegateway:ResetCache";
	/** [Write] storagegateway:RetrieveTapeArchive */
	static readonly RETRIEVE_TAPE_ARCHIVE = "storagegateway:RetrieveTapeArchive";
	/** [Write] storagegateway:RetrieveTapeRecoveryPoint */
	static readonly RETRIEVE_TAPE_RECOVERY_POINT =
		"storagegateway:RetrieveTapeRecoveryPoint";
	/** [Write] storagegateway:SetLocalConsolePassword */
	static readonly SET_LOCAL_CONSOLE_PASSWORD =
		"storagegateway:SetLocalConsolePassword";
	/** [Write] storagegateway:SetSMBGuestPassword */
	static readonly SET_SMB_GUEST_PASSWORD = "storagegateway:SetSMBGuestPassword";
	/** [Write] storagegateway:ShutdownGateway */
	static readonly SHUTDOWN_GATEWAY = "storagegateway:ShutdownGateway";
	/** [Write] storagegateway:StartAvailabilityMonitorTest */
	static readonly START_AVAILABILITY_MONITOR_TEST =
		"storagegateway:StartAvailabilityMonitorTest";
	/** [Write] storagegateway:StartCacheReport */
	static readonly START_CACHE_REPORT = "storagegateway:StartCacheReport";
	/** [Write] storagegateway:StartGateway */
	static readonly START_GATEWAY = "storagegateway:StartGateway";
	/** [Write] storagegateway:UpdateAutomaticTapeCreationPolicy */
	static readonly UPDATE_AUTOMATIC_TAPE_CREATION_POLICY =
		"storagegateway:UpdateAutomaticTapeCreationPolicy";
	/** [Write] storagegateway:UpdateBandwidthRateLimit */
	static readonly UPDATE_BANDWIDTH_RATE_LIMIT =
		"storagegateway:UpdateBandwidthRateLimit";
	/** [Write] storagegateway:UpdateBandwidthRateLimitSchedule */
	static readonly UPDATE_BANDWIDTH_RATE_LIMIT_SCHEDULE =
		"storagegateway:UpdateBandwidthRateLimitSchedule";
	/** [Write] storagegateway:UpdateChapCredentials */
	static readonly UPDATE_CHAP_CREDENTIALS =
		"storagegateway:UpdateChapCredentials";
	/** [Write] storagegateway:UpdateFileSystemAssociation */
	static readonly UPDATE_FILE_SYSTEM_ASSOCIATION =
		"storagegateway:UpdateFileSystemAssociation";
	/** [Write] storagegateway:UpdateGatewayInformation */
	static readonly UPDATE_GATEWAY_INFORMATION =
		"storagegateway:UpdateGatewayInformation";
	/** [Write] storagegateway:UpdateGatewaySoftwareNow */
	static readonly UPDATE_GATEWAY_SOFTWARE_NOW =
		"storagegateway:UpdateGatewaySoftwareNow";
	/** [Write] storagegateway:UpdateMaintenanceStartTime */
	static readonly UPDATE_MAINTENANCE_START_TIME =
		"storagegateway:UpdateMaintenanceStartTime";
	/** [Write] storagegateway:UpdateNFSFileShare */
	static readonly UPDATE_NFS_FILE_SHARE = "storagegateway:UpdateNFSFileShare";
	/** [Write] storagegateway:UpdateSMBFileShare */
	static readonly UPDATE_SMB_FILE_SHARE = "storagegateway:UpdateSMBFileShare";
	/** [Write] storagegateway:UpdateSMBFileShareVisibility */
	static readonly UPDATE_SMB_FILE_SHARE_VISIBILITY =
		"storagegateway:UpdateSMBFileShareVisibility";
	/** [Write] storagegateway:UpdateSMBLocalGroups */
	static readonly UPDATE_SMB_LOCAL_GROUPS =
		"storagegateway:UpdateSMBLocalGroups";
	/** [Write] storagegateway:UpdateSMBSecurityStrategy */
	static readonly UPDATE_SMB_SECURITY_STRATEGY =
		"storagegateway:UpdateSMBSecurityStrategy";
	/** [Write] storagegateway:UpdateSnapshotSchedule */
	static readonly UPDATE_SNAPSHOT_SCHEDULE =
		"storagegateway:UpdateSnapshotSchedule";
	/** [Write] storagegateway:UpdateVTLDeviceType */
	static readonly UPDATE_VTL_DEVICE_TYPE = "storagegateway:UpdateVTLDeviceType";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		StorageGatewayActions.DESCRIBE_AVAILABILITY_MONITOR_TEST,
		StorageGatewayActions.DESCRIBE_BANDWIDTH_RATE_LIMIT,
		StorageGatewayActions.DESCRIBE_BANDWIDTH_RATE_LIMIT_SCHEDULE,
		StorageGatewayActions.DESCRIBE_CACHE,
		StorageGatewayActions.DESCRIBE_CACHE_REPORT,
		StorageGatewayActions.DESCRIBE_CACHEDI_SCSI_VOLUMES,
		StorageGatewayActions.DESCRIBE_CHAP_CREDENTIALS,
		StorageGatewayActions.DESCRIBE_FILE_SYSTEM_ASSOCIATIONS,
		StorageGatewayActions.DESCRIBE_GATEWAY_INFORMATION,
		StorageGatewayActions.DESCRIBE_MAINTENANCE_START_TIME,
		StorageGatewayActions.DESCRIBE_NFS_FILE_SHARES,
		StorageGatewayActions.DESCRIBE_SMB_FILE_SHARES,
		StorageGatewayActions.DESCRIBE_SMB_SETTINGS,
		StorageGatewayActions.DESCRIBE_SNAPSHOT_SCHEDULE,
		StorageGatewayActions.DESCRIBE_STOREDI_SCSI_VOLUMES,
		StorageGatewayActions.DESCRIBE_TAPE_ARCHIVES,
		StorageGatewayActions.DESCRIBE_TAPE_RECOVERY_POINTS,
		StorageGatewayActions.DESCRIBE_TAPES,
		StorageGatewayActions.DESCRIBE_UPLOAD_BUFFER,
		StorageGatewayActions.DESCRIBE_VTL_DEVICES,
		StorageGatewayActions.DESCRIBE_WORKING_STORAGE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		StorageGatewayActions.ACTIVATE_GATEWAY,
		StorageGatewayActions.ADD_CACHE,
		StorageGatewayActions.ADD_UPLOAD_BUFFER,
		StorageGatewayActions.ADD_WORKING_STORAGE,
		StorageGatewayActions.ASSIGN_TAPE_POOL,
		StorageGatewayActions.ASSOCIATE_FILE_SYSTEM,
		StorageGatewayActions.ATTACH_VOLUME,
		StorageGatewayActions.BYPASS_GOVERNANCE_RETENTION,
		StorageGatewayActions.CANCEL_ARCHIVAL,
		StorageGatewayActions.CANCEL_CACHE_REPORT,
		StorageGatewayActions.CANCEL_RETRIEVAL,
		StorageGatewayActions.CREATE_CACHEDI_SCSI_VOLUME,
		StorageGatewayActions.CREATE_NFS_FILE_SHARE,
		StorageGatewayActions.CREATE_SMB_FILE_SHARE,
		StorageGatewayActions.CREATE_SNAPSHOT,
		StorageGatewayActions.CREATE_SNAPSHOT_FROM_VOLUME_RECOVERY_POINT,
		StorageGatewayActions.CREATE_STOREDI_SCSI_VOLUME,
		StorageGatewayActions.CREATE_TAPE_POOL,
		StorageGatewayActions.CREATE_TAPE_WITH_BARCODE,
		StorageGatewayActions.CREATE_TAPES,
		StorageGatewayActions.DELETE_AUTOMATIC_TAPE_CREATION_POLICY,
		StorageGatewayActions.DELETE_BANDWIDTH_RATE_LIMIT,
		StorageGatewayActions.DELETE_CACHE_REPORT,
		StorageGatewayActions.DELETE_CHAP_CREDENTIALS,
		StorageGatewayActions.DELETE_FILE_SHARE,
		StorageGatewayActions.DELETE_GATEWAY,
		StorageGatewayActions.DELETE_SNAPSHOT_SCHEDULE,
		StorageGatewayActions.DELETE_TAPE,
		StorageGatewayActions.DELETE_TAPE_ARCHIVE,
		StorageGatewayActions.DELETE_TAPE_POOL,
		StorageGatewayActions.DELETE_VOLUME,
		StorageGatewayActions.DETACH_VOLUME,
		StorageGatewayActions.DISABLE_GATEWAY,
		StorageGatewayActions.DISASSOCIATE_FILE_SYSTEM,
		StorageGatewayActions.EVICT_FILES_FAILING_UPLOAD,
		StorageGatewayActions.JOIN_DOMAIN,
		StorageGatewayActions.NOTIFY_WHEN_UPLOADED,
		StorageGatewayActions.REFRESH_CACHE,
		StorageGatewayActions.RESET_CACHE,
		StorageGatewayActions.RETRIEVE_TAPE_ARCHIVE,
		StorageGatewayActions.RETRIEVE_TAPE_RECOVERY_POINT,
		StorageGatewayActions.SET_LOCAL_CONSOLE_PASSWORD,
		StorageGatewayActions.SET_SMB_GUEST_PASSWORD,
		StorageGatewayActions.SHUTDOWN_GATEWAY,
		StorageGatewayActions.START_AVAILABILITY_MONITOR_TEST,
		StorageGatewayActions.START_CACHE_REPORT,
		StorageGatewayActions.START_GATEWAY,
		StorageGatewayActions.UPDATE_AUTOMATIC_TAPE_CREATION_POLICY,
		StorageGatewayActions.UPDATE_BANDWIDTH_RATE_LIMIT,
		StorageGatewayActions.UPDATE_BANDWIDTH_RATE_LIMIT_SCHEDULE,
		StorageGatewayActions.UPDATE_CHAP_CREDENTIALS,
		StorageGatewayActions.UPDATE_FILE_SYSTEM_ASSOCIATION,
		StorageGatewayActions.UPDATE_GATEWAY_INFORMATION,
		StorageGatewayActions.UPDATE_GATEWAY_SOFTWARE_NOW,
		StorageGatewayActions.UPDATE_MAINTENANCE_START_TIME,
		StorageGatewayActions.UPDATE_NFS_FILE_SHARE,
		StorageGatewayActions.UPDATE_SMB_FILE_SHARE,
		StorageGatewayActions.UPDATE_SMB_FILE_SHARE_VISIBILITY,
		StorageGatewayActions.UPDATE_SMB_LOCAL_GROUPS,
		StorageGatewayActions.UPDATE_SMB_SECURITY_STRATEGY,
		StorageGatewayActions.UPDATE_SNAPSHOT_SCHEDULE,
		StorageGatewayActions.UPDATE_VTL_DEVICE_TYPE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		StorageGatewayActions.LIST_AUTOMATIC_TAPE_CREATION_POLICIES,
		StorageGatewayActions.LIST_CACHE_REPORTS,
		StorageGatewayActions.LIST_FILE_SHARES,
		StorageGatewayActions.LIST_FILE_SYSTEM_ASSOCIATIONS,
		StorageGatewayActions.LIST_GATEWAYS,
		StorageGatewayActions.LIST_LOCAL_DISKS,
		StorageGatewayActions.LIST_TAGS_FOR_RESOURCE,
		StorageGatewayActions.LIST_TAPE_POOLS,
		StorageGatewayActions.LIST_TAPES,
		StorageGatewayActions.LIST_VOLUME_INITIATORS,
		StorageGatewayActions.LIST_VOLUME_RECOVERY_POINTS,
		StorageGatewayActions.LIST_VOLUMES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		StorageGatewayActions.ADD_TAGS_TO_RESOURCE,
		StorageGatewayActions.REMOVE_TAGS_FROM_RESOURCE,
	];
}

const CacheReportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):share/(?<shareId>[^:/?]+)/cache-report/(?<cacheReportId>[^:/?]+)$",
);
const DeviceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)/device/(?<vtldevice>[^:/?]+)$",
);
const FsAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):fs-association/(?<fsaId>[^:/?]+)$",
);
const GatewayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)$",
);
const ShareArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):share/(?<shareId>[^:/?]+)$",
);
const TapeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):tape/(?<tapeBarcode>[^:/?]+)$",
);
const TapepoolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):tapepool/(?<poolId>[^:/?]+)$",
);
const TargetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)/target/(?<iscsiTarget>[^:/?]+)$",
);
const VolumeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):storagegateway:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)/volume/(?<volumeId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for storagegateway resources.
 */
export class StorageGatewayResources {
	/**
	 * Builds an ARN for the cache-report resource.
	 */
	static cacheReport(props: {
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
	}): string {
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
	static parseCacheReportArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		shareId: string;
		cacheReportId: string;
	} {
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
	static device(props: {
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
	}): string {
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
	static parseDeviceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
		vtldevice: string;
	} {
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
	static fsAssociation(props: {
		/** The FsaId component of the ARN. */
		readonly fsaId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFsAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fsaId: string;
	} {
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
	static gateway(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseGatewayArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
	} {
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
	static share(props: {
		/** The ShareId component of the ARN. */
		readonly shareId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseShareArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		shareId: string;
	} {
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
	static tape(props: {
		/** The TapeBarcode component of the ARN. */
		readonly tapeBarcode: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTapeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tapeBarcode: string;
	} {
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
	static tapepool(props: {
		/** The PoolId component of the ARN. */
		readonly poolId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTapepoolArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		poolId: string;
	} {
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
	static target(props: {
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
	}): string {
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
	static parseTargetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
		iscsiTarget: string;
	} {
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
	static volume(props: {
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
	}): string {
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
	static parseVolumeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
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
	static readonly ACTIVATE_GATEWAY: string[] = [
		"storagegateway:ActivateGateway",
		"storagegateway:AddTagsToResource",
	];
	/** IAM actions required for the AddCache API call. */
	static readonly ADD_CACHE: string[] = ["storagegateway:AddCache"];
	/** IAM actions required for the AddTagsToResource API call. */
	static readonly ADD_TAGS_TO_RESOURCE: string[] = [
		"storagegateway:AddTagsToResource",
	];
	/** IAM actions required for the AddUploadBuffer API call. */
	static readonly ADD_UPLOAD_BUFFER: string[] = [
		"storagegateway:AddUploadBuffer",
	];
	/** IAM actions required for the AddWorkingStorage API call. */
	static readonly ADD_WORKING_STORAGE: string[] = [
		"storagegateway:AddWorkingStorage",
	];
	/** IAM actions required for the AssignTapePool API call. */
	static readonly ASSIGN_TAPE_POOL: string[] = [
		"storagegateway:AssignTapePool",
		"storagegateway:BypassGovernanceRetention",
	];
	/** IAM actions required for the AssociateFileSystem API call. */
	static readonly ASSOCIATE_FILE_SYSTEM: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:AssociateFileSystem",
	];
	/** IAM actions required for the AttachVolume API call. */
	static readonly ATTACH_VOLUME: string[] = ["storagegateway:AttachVolume"];
	/** IAM actions required for the CancelArchival API call. */
	static readonly CANCEL_ARCHIVAL: string[] = ["storagegateway:CancelArchival"];
	/** IAM actions required for the CancelCacheReport API call. */
	static readonly CANCEL_CACHE_REPORT: string[] = [
		"storagegateway:CancelCacheReport",
	];
	/** IAM actions required for the CancelRetrieval API call. */
	static readonly CANCEL_RETRIEVAL: string[] = [
		"storagegateway:CancelRetrieval",
	];
	/** IAM actions required for the CreateCachediSCSIVolume API call. */
	static readonly CREATE_CACHEDI_SCSI_VOLUME: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateCachediSCSIVolume",
	];
	/** IAM actions required for the CreateNFSFileShare API call. */
	static readonly CREATE_NFS_FILE_SHARE: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateNFSFileShare",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateSMBFileShare API call. */
	static readonly CREATE_SMB_FILE_SHARE: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateSMBFileShare",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateSnapshot API call. */
	static readonly CREATE_SNAPSHOT: string[] = ["storagegateway:CreateSnapshot"];
	/** IAM actions required for the CreateSnapshotFromVolumeRecoveryPoint API call. */
	static readonly CREATE_SNAPSHOT_FROM_VOLUME_RECOVERY_POINT: string[] = [
		"storagegateway:CreateSnapshotFromVolumeRecoveryPoint",
	];
	/** IAM actions required for the CreateStorediSCSIVolume API call. */
	static readonly CREATE_STOREDI_SCSI_VOLUME: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateStorediSCSIVolume",
	];
	/** IAM actions required for the CreateTapePool API call. */
	static readonly CREATE_TAPE_POOL: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateTapePool",
	];
	/** IAM actions required for the CreateTapeWithBarcode API call. */
	static readonly CREATE_TAPE_WITH_BARCODE: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateTapeWithBarcode",
	];
	/** IAM actions required for the CreateTapes API call. */
	static readonly CREATE_TAPES: string[] = [
		"storagegateway:AddTagsToResource",
		"storagegateway:CreateTapes",
	];
	/** IAM actions required for the DeleteAutomaticTapeCreationPolicy API call. */
	static readonly DELETE_AUTOMATIC_TAPE_CREATION_POLICY: string[] = [
		"storagegateway:DeleteAutomaticTapeCreationPolicy",
	];
	/** IAM actions required for the DeleteBandwidthRateLimit API call. */
	static readonly DELETE_BANDWIDTH_RATE_LIMIT: string[] = [
		"storagegateway:DeleteBandwidthRateLimit",
	];
	/** IAM actions required for the DeleteCacheReport API call. */
	static readonly DELETE_CACHE_REPORT: string[] = [
		"storagegateway:DeleteCacheReport",
	];
	/** IAM actions required for the DeleteChapCredentials API call. */
	static readonly DELETE_CHAP_CREDENTIALS: string[] = [
		"storagegateway:DeleteChapCredentials",
	];
	/** IAM actions required for the DeleteFileShare API call. */
	static readonly DELETE_FILE_SHARE: string[] = [
		"storagegateway:DeleteFileShare",
	];
	/** IAM actions required for the DeleteGateway API call. */
	static readonly DELETE_GATEWAY: string[] = ["storagegateway:DeleteGateway"];
	/** IAM actions required for the DeleteSnapshotSchedule API call. */
	static readonly DELETE_SNAPSHOT_SCHEDULE: string[] = [
		"storagegateway:DeleteSnapshotSchedule",
	];
	/** IAM actions required for the DeleteTape API call. */
	static readonly DELETE_TAPE: string[] = ["storagegateway:DeleteTape"];
	/** IAM actions required for the DeleteTapeArchive API call. */
	static readonly DELETE_TAPE_ARCHIVE: string[] = [
		"storagegateway:BypassGovernanceRetention",
		"storagegateway:DeleteTapeArchive",
	];
	/** IAM actions required for the DeleteTapePool API call. */
	static readonly DELETE_TAPE_POOL: string[] = [
		"storagegateway:DeleteTapePool",
	];
	/** IAM actions required for the DeleteVolume API call. */
	static readonly DELETE_VOLUME: string[] = ["storagegateway:DeleteVolume"];
	/** IAM actions required for the DescribeAvailabilityMonitorTest API call. */
	static readonly DESCRIBE_AVAILABILITY_MONITOR_TEST: string[] = [
		"storagegateway:DescribeAvailabilityMonitorTest",
	];
	/** IAM actions required for the DescribeBandwidthRateLimit API call. */
	static readonly DESCRIBE_BANDWIDTH_RATE_LIMIT: string[] = [
		"storagegateway:DescribeBandwidthRateLimit",
	];
	/** IAM actions required for the DescribeBandwidthRateLimitSchedule API call. */
	static readonly DESCRIBE_BANDWIDTH_RATE_LIMIT_SCHEDULE: string[] = [
		"storagegateway:DescribeBandwidthRateLimitSchedule",
	];
	/** IAM actions required for the DescribeCache API call. */
	static readonly DESCRIBE_CACHE: string[] = ["storagegateway:DescribeCache"];
	/** IAM actions required for the DescribeCacheReport API call. */
	static readonly DESCRIBE_CACHE_REPORT: string[] = [
		"storagegateway:DescribeCacheReport",
	];
	/** IAM actions required for the DescribeCachediSCSIVolumes API call. */
	static readonly DESCRIBE_CACHEDI_SCSI_VOLUMES: string[] = [
		"storagegateway:DescribeCachediSCSIVolumes",
	];
	/** IAM actions required for the DescribeChapCredentials API call. */
	static readonly DESCRIBE_CHAP_CREDENTIALS: string[] = [
		"storagegateway:DescribeChapCredentials",
	];
	/** IAM actions required for the DescribeFileSystemAssociations API call. */
	static readonly DESCRIBE_FILE_SYSTEM_ASSOCIATIONS: string[] = [
		"storagegateway:DescribeFileSystemAssociations",
	];
	/** IAM actions required for the DescribeGatewayInformation API call. */
	static readonly DESCRIBE_GATEWAY_INFORMATION: string[] = [
		"storagegateway:DescribeGatewayInformation",
	];
	/** IAM actions required for the DescribeMaintenanceStartTime API call. */
	static readonly DESCRIBE_MAINTENANCE_START_TIME: string[] = [
		"storagegateway:DescribeMaintenanceStartTime",
	];
	/** IAM actions required for the DescribeNFSFileShares API call. */
	static readonly DESCRIBE_NFS_FILE_SHARES: string[] = [
		"storagegateway:DescribeNFSFileShares",
	];
	/** IAM actions required for the DescribeSMBFileShares API call. */
	static readonly DESCRIBE_SMB_FILE_SHARES: string[] = [
		"storagegateway:DescribeSMBFileShares",
	];
	/** IAM actions required for the DescribeSMBSettings API call. */
	static readonly DESCRIBE_SMB_SETTINGS: string[] = [
		"storagegateway:DescribeSMBSettings",
	];
	/** IAM actions required for the DescribeSnapshotSchedule API call. */
	static readonly DESCRIBE_SNAPSHOT_SCHEDULE: string[] = [
		"storagegateway:DescribeSnapshotSchedule",
	];
	/** IAM actions required for the DescribeStorediSCSIVolumes API call. */
	static readonly DESCRIBE_STOREDI_SCSI_VOLUMES: string[] = [
		"storagegateway:DescribeStorediSCSIVolumes",
	];
	/** IAM actions required for the DescribeTapeArchives API call. */
	static readonly DESCRIBE_TAPE_ARCHIVES: string[] = [
		"storagegateway:DescribeTapeArchives",
	];
	/** IAM actions required for the DescribeTapeRecoveryPoints API call. */
	static readonly DESCRIBE_TAPE_RECOVERY_POINTS: string[] = [
		"storagegateway:DescribeTapeRecoveryPoints",
	];
	/** IAM actions required for the DescribeTapes API call. */
	static readonly DESCRIBE_TAPES: string[] = ["storagegateway:DescribeTapes"];
	/** IAM actions required for the DescribeUploadBuffer API call. */
	static readonly DESCRIBE_UPLOAD_BUFFER: string[] = [
		"storagegateway:DescribeUploadBuffer",
	];
	/** IAM actions required for the DescribeVTLDevices API call. */
	static readonly DESCRIBE_VTL_DEVICES: string[] = [
		"storagegateway:DescribeVTLDevices",
	];
	/** IAM actions required for the DescribeWorkingStorage API call. */
	static readonly DESCRIBE_WORKING_STORAGE: string[] = [
		"storagegateway:DescribeWorkingStorage",
	];
	/** IAM actions required for the DetachVolume API call. */
	static readonly DETACH_VOLUME: string[] = ["storagegateway:DetachVolume"];
	/** IAM actions required for the DisableGateway API call. */
	static readonly DISABLE_GATEWAY: string[] = ["storagegateway:DisableGateway"];
	/** IAM actions required for the DisassociateFileSystem API call. */
	static readonly DISASSOCIATE_FILE_SYSTEM: string[] = [
		"storagegateway:DisassociateFileSystem",
	];
	/** IAM actions required for the EvictFilesFailingUpload API call. */
	static readonly EVICT_FILES_FAILING_UPLOAD: string[] = [
		"storagegateway:EvictFilesFailingUpload",
	];
	/** IAM actions required for the JoinDomain API call. */
	static readonly JOIN_DOMAIN: string[] = ["storagegateway:JoinDomain"];
	/** IAM actions required for the ListAutomaticTapeCreationPolicies API call. */
	static readonly LIST_AUTOMATIC_TAPE_CREATION_POLICIES: string[] = [
		"storagegateway:ListAutomaticTapeCreationPolicies",
	];
	/** IAM actions required for the ListCacheReports API call. */
	static readonly LIST_CACHE_REPORTS: string[] = [
		"storagegateway:ListCacheReports",
	];
	/** IAM actions required for the ListFileShares API call. */
	static readonly LIST_FILE_SHARES: string[] = [
		"storagegateway:ListFileShares",
	];
	/** IAM actions required for the ListFileSystemAssociations API call. */
	static readonly LIST_FILE_SYSTEM_ASSOCIATIONS: string[] = [
		"storagegateway:ListFileSystemAssociations",
	];
	/** IAM actions required for the ListGateways API call. */
	static readonly LIST_GATEWAYS: string[] = ["storagegateway:ListGateways"];
	/** IAM actions required for the ListLocalDisks API call. */
	static readonly LIST_LOCAL_DISKS: string[] = [
		"storagegateway:ListLocalDisks",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"storagegateway:ListTagsForResource",
	];
	/** IAM actions required for the ListTapePools API call. */
	static readonly LIST_TAPE_POOLS: string[] = ["storagegateway:ListTapePools"];
	/** IAM actions required for the ListTapes API call. */
	static readonly LIST_TAPES: string[] = ["storagegateway:ListTapes"];
	/** IAM actions required for the ListVolumeInitiators API call. */
	static readonly LIST_VOLUME_INITIATORS: string[] = [
		"storagegateway:ListVolumeInitiators",
	];
	/** IAM actions required for the ListVolumeRecoveryPoints API call. */
	static readonly LIST_VOLUME_RECOVERY_POINTS: string[] = [
		"storagegateway:ListVolumeRecoveryPoints",
	];
	/** IAM actions required for the ListVolumes API call. */
	static readonly LIST_VOLUMES: string[] = ["storagegateway:ListVolumes"];
	/** IAM actions required for the NotifyWhenUploaded API call. */
	static readonly NOTIFY_WHEN_UPLOADED: string[] = [
		"storagegateway:NotifyWhenUploaded",
	];
	/** IAM actions required for the RefreshCache API call. */
	static readonly REFRESH_CACHE: string[] = ["storagegateway:RefreshCache"];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly REMOVE_TAGS_FROM_RESOURCE: string[] = [
		"storagegateway:RemoveTagsFromResource",
	];
	/** IAM actions required for the ResetCache API call. */
	static readonly RESET_CACHE: string[] = ["storagegateway:ResetCache"];
	/** IAM actions required for the RetrieveTapeArchive API call. */
	static readonly RETRIEVE_TAPE_ARCHIVE: string[] = [
		"storagegateway:RetrieveTapeArchive",
	];
	/** IAM actions required for the RetrieveTapeRecoveryPoint API call. */
	static readonly RETRIEVE_TAPE_RECOVERY_POINT: string[] = [
		"storagegateway:RetrieveTapeRecoveryPoint",
	];
	/** IAM actions required for the SetLocalConsolePassword API call. */
	static readonly SET_LOCAL_CONSOLE_PASSWORD: string[] = [
		"storagegateway:SetLocalConsolePassword",
	];
	/** IAM actions required for the SetSMBGuestPassword API call. */
	static readonly SET_SMB_GUEST_PASSWORD: string[] = [
		"storagegateway:SetSMBGuestPassword",
	];
	/** IAM actions required for the ShutdownGateway API call. */
	static readonly SHUTDOWN_GATEWAY: string[] = [
		"storagegateway:ShutdownGateway",
	];
	/** IAM actions required for the StartAvailabilityMonitorTest API call. */
	static readonly START_AVAILABILITY_MONITOR_TEST: string[] = [
		"storagegateway:StartAvailabilityMonitorTest",
	];
	/** IAM actions required for the StartCacheReport API call. */
	static readonly START_CACHE_REPORT: string[] = [
		"storagegateway:AddTagsToResource",
		"iam:PassRole",
		"storagegateway:StartCacheReport",
	];
	/** IAM actions required for the StartGateway API call. */
	static readonly START_GATEWAY: string[] = ["storagegateway:StartGateway"];
	/** IAM actions required for the UpdateAutomaticTapeCreationPolicy API call. */
	static readonly UPDATE_AUTOMATIC_TAPE_CREATION_POLICY: string[] = [
		"storagegateway:UpdateAutomaticTapeCreationPolicy",
	];
	/** IAM actions required for the UpdateBandwidthRateLimit API call. */
	static readonly UPDATE_BANDWIDTH_RATE_LIMIT: string[] = [
		"storagegateway:UpdateBandwidthRateLimit",
	];
	/** IAM actions required for the UpdateBandwidthRateLimitSchedule API call. */
	static readonly UPDATE_BANDWIDTH_RATE_LIMIT_SCHEDULE: string[] = [
		"storagegateway:UpdateBandwidthRateLimitSchedule",
	];
	/** IAM actions required for the UpdateChapCredentials API call. */
	static readonly UPDATE_CHAP_CREDENTIALS: string[] = [
		"storagegateway:UpdateChapCredentials",
	];
	/** IAM actions required for the UpdateFileSystemAssociation API call. */
	static readonly UPDATE_FILE_SYSTEM_ASSOCIATION: string[] = [
		"storagegateway:UpdateFileSystemAssociation",
	];
	/** IAM actions required for the UpdateGatewayInformation API call. */
	static readonly UPDATE_GATEWAY_INFORMATION: string[] = [
		"storagegateway:UpdateGatewayInformation",
	];
	/** IAM actions required for the UpdateGatewaySoftwareNow API call. */
	static readonly UPDATE_GATEWAY_SOFTWARE_NOW: string[] = [
		"storagegateway:UpdateGatewaySoftwareNow",
	];
	/** IAM actions required for the UpdateMaintenanceStartTime API call. */
	static readonly UPDATE_MAINTENANCE_START_TIME: string[] = [
		"storagegateway:UpdateMaintenanceStartTime",
	];
	/** IAM actions required for the UpdateNFSFileShare API call. */
	static readonly UPDATE_NFS_FILE_SHARE: string[] = [
		"storagegateway:UpdateNFSFileShare",
	];
	/** IAM actions required for the UpdateSMBFileShare API call. */
	static readonly UPDATE_SMB_FILE_SHARE: string[] = [
		"storagegateway:UpdateSMBFileShare",
	];
	/** IAM actions required for the UpdateSMBFileShareVisibility API call. */
	static readonly UPDATE_SMB_FILE_SHARE_VISIBILITY: string[] = [
		"storagegateway:UpdateSMBFileShareVisibility",
	];
	/** IAM actions required for the UpdateSMBLocalGroups API call. */
	static readonly UPDATE_SMB_LOCAL_GROUPS: string[] = [
		"storagegateway:UpdateSMBLocalGroups",
	];
	/** IAM actions required for the UpdateSMBSecurityStrategy API call. */
	static readonly UPDATE_SMB_SECURITY_STRATEGY: string[] = [
		"storagegateway:UpdateSMBSecurityStrategy",
	];
	/** IAM actions required for the UpdateSnapshotSchedule API call. */
	static readonly UPDATE_SNAPSHOT_SCHEDULE: string[] = [
		"storagegateway:UpdateSnapshotSchedule",
	];
	/** IAM actions required for the UpdateVTLDeviceType API call. */
	static readonly UPDATE_VTL_DEVICE_TYPE: string[] = [
		"storagegateway:UpdateVTLDeviceType",
	];
}

/**
 * Condition key constants and builders for storagegateway.
 */
export class StorageGatewayConditions {
	/** Condition keys applicable to the ActivateGateway action. */
	static readonly ACTIVATE_GATEWAY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AddTagsToResource action. */
	static readonly ADD_TAGS_TO_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AssociateFileSystem action. */
	static readonly ASSOCIATE_FILE_SYSTEM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCachediSCSIVolume action. */
	static readonly CREATE_CACHEDI_SCSI_VOLUME_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNFSFileShare action. */
	static readonly CREATE_NFS_FILE_SHARE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSMBFileShare action. */
	static readonly CREATE_SMB_FILE_SHARE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshot action. */
	static readonly CREATE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshotFromVolumeRecoveryPoint action. */
	static readonly CREATE_SNAPSHOT_FROM_VOLUME_RECOVERY_POINT_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateStorediSCSIVolume action. */
	static readonly CREATE_STOREDI_SCSI_VOLUME_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTapePool action. */
	static readonly CREATE_TAPE_POOL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTapeWithBarcode action. */
	static readonly CREATE_TAPE_WITH_BARCODE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTapes action. */
	static readonly CREATE_TAPES_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTagsFromResource action. */
	static readonly REMOVE_TAGS_FROM_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCacheReport action. */
	static readonly START_CACHE_REPORT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateSnapshotSchedule action. */
	static readonly UPDATE_SNAPSHOT_SCHEDULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
