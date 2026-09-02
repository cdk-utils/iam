// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/lightsail.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the lightsail service.
 */
export class LightSailActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "lightsail";

	/** [Write] lightsail:AllocateStaticIp */
	static readonly AllocateStaticIp = "lightsail:AllocateStaticIp";
	/** [Write] lightsail:AttachCertificateToDistribution */
	static readonly AttachCertificateToDistribution =
		"lightsail:AttachCertificateToDistribution";
	/** [Write] lightsail:AttachDisk */
	static readonly AttachDisk = "lightsail:AttachDisk";
	/** [Write] lightsail:AttachInstancesToLoadBalancer */
	static readonly AttachInstancesToLoadBalancer =
		"lightsail:AttachInstancesToLoadBalancer";
	/** [Write] lightsail:AttachLoadBalancerTlsCertificate */
	static readonly AttachLoadBalancerTlsCertificate =
		"lightsail:AttachLoadBalancerTlsCertificate";
	/** [Write] lightsail:AttachStaticIp */
	static readonly AttachStaticIp = "lightsail:AttachStaticIp";
	/** [Write] lightsail:CloseInstancePublicPorts */
	static readonly CloseInstancePublicPorts =
		"lightsail:CloseInstancePublicPorts";
	/** [Write] lightsail:CopySnapshot */
	static readonly CopySnapshot = "lightsail:CopySnapshot";
	/** [Write] lightsail:CreateBucket */
	static readonly CreateBucket = "lightsail:CreateBucket";
	/** [Write] lightsail:CreateBucketAccessKey */
	static readonly CreateBucketAccessKey = "lightsail:CreateBucketAccessKey";
	/** [Write] lightsail:CreateCertificate */
	static readonly CreateCertificate = "lightsail:CreateCertificate";
	/** [Write] lightsail:CreateCloudFormationStack */
	static readonly CreateCloudFormationStack =
		"lightsail:CreateCloudFormationStack";
	/** [Write] lightsail:CreateContactMethod */
	static readonly CreateContactMethod = "lightsail:CreateContactMethod";
	/** [Write] lightsail:CreateContainerService */
	static readonly CreateContainerService = "lightsail:CreateContainerService";
	/** [Write] lightsail:CreateContainerServiceDeployment */
	static readonly CreateContainerServiceDeployment =
		"lightsail:CreateContainerServiceDeployment";
	/** [Write] lightsail:CreateContainerServiceRegistryLogin */
	static readonly CreateContainerServiceRegistryLogin =
		"lightsail:CreateContainerServiceRegistryLogin";
	/** [Write] lightsail:CreateDisk */
	static readonly CreateDisk = "lightsail:CreateDisk";
	/** [Write] lightsail:CreateDiskFromSnapshot */
	static readonly CreateDiskFromSnapshot = "lightsail:CreateDiskFromSnapshot";
	/** [Write] lightsail:CreateDiskSnapshot */
	static readonly CreateDiskSnapshot = "lightsail:CreateDiskSnapshot";
	/** [Write] lightsail:CreateDistribution */
	static readonly CreateDistribution = "lightsail:CreateDistribution";
	/** [Write] lightsail:CreateDomain */
	static readonly CreateDomain = "lightsail:CreateDomain";
	/** [Write] lightsail:CreateDomainEntry */
	static readonly CreateDomainEntry = "lightsail:CreateDomainEntry";
	/** [Write] lightsail:CreateGUISessionAccessDetails */
	static readonly CreateGUISessionAccessDetails =
		"lightsail:CreateGUISessionAccessDetails";
	/** [Write] lightsail:CreateInstanceSnapshot */
	static readonly CreateInstanceSnapshot = "lightsail:CreateInstanceSnapshot";
	/** [Write] lightsail:CreateInstances */
	static readonly CreateInstances = "lightsail:CreateInstances";
	/** [Write] lightsail:CreateInstancesFromSnapshot */
	static readonly CreateInstancesFromSnapshot =
		"lightsail:CreateInstancesFromSnapshot";
	/** [Write] lightsail:CreateKeyPair */
	static readonly CreateKeyPair = "lightsail:CreateKeyPair";
	/** [Write] lightsail:CreateLoadBalancer */
	static readonly CreateLoadBalancer = "lightsail:CreateLoadBalancer";
	/** [Write] lightsail:CreateLoadBalancerTlsCertificate */
	static readonly CreateLoadBalancerTlsCertificate =
		"lightsail:CreateLoadBalancerTlsCertificate";
	/** [Write] lightsail:CreateRelationalDatabase */
	static readonly CreateRelationalDatabase =
		"lightsail:CreateRelationalDatabase";
	/** [Write] lightsail:CreateRelationalDatabaseFromSnapshot */
	static readonly CreateRelationalDatabaseFromSnapshot =
		"lightsail:CreateRelationalDatabaseFromSnapshot";
	/** [Write] lightsail:CreateRelationalDatabaseSnapshot */
	static readonly CreateRelationalDatabaseSnapshot =
		"lightsail:CreateRelationalDatabaseSnapshot";
	/** [Write] lightsail:DeleteAlarm */
	static readonly DeleteAlarm = "lightsail:DeleteAlarm";
	/** [Write] lightsail:DeleteAutoSnapshot */
	static readonly DeleteAutoSnapshot = "lightsail:DeleteAutoSnapshot";
	/** [Write] lightsail:DeleteBucket */
	static readonly DeleteBucket = "lightsail:DeleteBucket";
	/** [Write] lightsail:DeleteBucketAccessKey */
	static readonly DeleteBucketAccessKey = "lightsail:DeleteBucketAccessKey";
	/** [Write] lightsail:DeleteCertificate */
	static readonly DeleteCertificate = "lightsail:DeleteCertificate";
	/** [Write] lightsail:DeleteContactMethod */
	static readonly DeleteContactMethod = "lightsail:DeleteContactMethod";
	/** [Write] lightsail:DeleteContainerImage */
	static readonly DeleteContainerImage = "lightsail:DeleteContainerImage";
	/** [Write] lightsail:DeleteContainerService */
	static readonly DeleteContainerService = "lightsail:DeleteContainerService";
	/** [Write] lightsail:DeleteDisk */
	static readonly DeleteDisk = "lightsail:DeleteDisk";
	/** [Write] lightsail:DeleteDiskSnapshot */
	static readonly DeleteDiskSnapshot = "lightsail:DeleteDiskSnapshot";
	/** [Write] lightsail:DeleteDistribution */
	static readonly DeleteDistribution = "lightsail:DeleteDistribution";
	/** [Write] lightsail:DeleteDomain */
	static readonly DeleteDomain = "lightsail:DeleteDomain";
	/** [Write] lightsail:DeleteDomainEntry */
	static readonly DeleteDomainEntry = "lightsail:DeleteDomainEntry";
	/** [Write] lightsail:DeleteInstance */
	static readonly DeleteInstance = "lightsail:DeleteInstance";
	/** [Write] lightsail:DeleteInstanceSnapshot */
	static readonly DeleteInstanceSnapshot = "lightsail:DeleteInstanceSnapshot";
	/** [Write] lightsail:DeleteKeyPair */
	static readonly DeleteKeyPair = "lightsail:DeleteKeyPair";
	/** [Write] lightsail:DeleteKnownHostKeys */
	static readonly DeleteKnownHostKeys = "lightsail:DeleteKnownHostKeys";
	/** [Write] lightsail:DeleteLoadBalancer */
	static readonly DeleteLoadBalancer = "lightsail:DeleteLoadBalancer";
	/** [Write] lightsail:DeleteLoadBalancerTlsCertificate */
	static readonly DeleteLoadBalancerTlsCertificate =
		"lightsail:DeleteLoadBalancerTlsCertificate";
	/** [Write] lightsail:DeleteRelationalDatabase */
	static readonly DeleteRelationalDatabase =
		"lightsail:DeleteRelationalDatabase";
	/** [Write] lightsail:DeleteRelationalDatabaseSnapshot */
	static readonly DeleteRelationalDatabaseSnapshot =
		"lightsail:DeleteRelationalDatabaseSnapshot";
	/** [Write] lightsail:DetachCertificateFromDistribution */
	static readonly DetachCertificateFromDistribution =
		"lightsail:DetachCertificateFromDistribution";
	/** [Write] lightsail:DetachDisk */
	static readonly DetachDisk = "lightsail:DetachDisk";
	/** [Write] lightsail:DetachInstancesFromLoadBalancer */
	static readonly DetachInstancesFromLoadBalancer =
		"lightsail:DetachInstancesFromLoadBalancer";
	/** [Write] lightsail:DetachStaticIp */
	static readonly DetachStaticIp = "lightsail:DetachStaticIp";
	/** [Write] lightsail:DisableAddOn */
	static readonly DisableAddOn = "lightsail:DisableAddOn";
	/** [Write] lightsail:DownloadDefaultKeyPair */
	static readonly DownloadDefaultKeyPair = "lightsail:DownloadDefaultKeyPair";
	/** [Write] lightsail:EnableAddOn */
	static readonly EnableAddOn = "lightsail:EnableAddOn";
	/** [Write] lightsail:ExportSnapshot */
	static readonly ExportSnapshot = "lightsail:ExportSnapshot";
	/** [Read] lightsail:GetActiveNames */
	static readonly actionGetActiveNames = "lightsail:GetActiveNames";
	/** [Read] lightsail:GetAlarms */
	static readonly actionGetAlarms = "lightsail:GetAlarms";
	/** [Read] lightsail:GetAutoSnapshots */
	static readonly actionGetAutoSnapshots = "lightsail:GetAutoSnapshots";
	/** [Read] lightsail:GetBlueprints */
	static readonly actionGetBlueprints = "lightsail:GetBlueprints";
	/** [Read] lightsail:GetBucketAccessKeys */
	static readonly actionGetBucketAccessKeys = "lightsail:GetBucketAccessKeys";
	/** [Read] lightsail:GetBucketBundles */
	static readonly actionGetBucketBundles = "lightsail:GetBucketBundles";
	/** [Read] lightsail:GetBucketMetricData */
	static readonly actionGetBucketMetricData = "lightsail:GetBucketMetricData";
	/** [Read] lightsail:GetBuckets */
	static readonly actionGetBuckets = "lightsail:GetBuckets";
	/** [Read] lightsail:GetBundles */
	static readonly actionGetBundles = "lightsail:GetBundles";
	/** [Read] lightsail:GetCertificates */
	static readonly actionGetCertificates = "lightsail:GetCertificates";
	/** [Read] lightsail:GetCloudFormationStackRecords */
	static readonly actionGetCloudFormationStackRecords =
		"lightsail:GetCloudFormationStackRecords";
	/** [Read] lightsail:GetContactMethods */
	static readonly actionGetContactMethods = "lightsail:GetContactMethods";
	/** [Read] lightsail:GetContainerAPIMetadata */
	static readonly actionGetContainerAPIMetadata =
		"lightsail:GetContainerAPIMetadata";
	/** [Read] lightsail:GetContainerImages */
	static readonly actionGetContainerImages = "lightsail:GetContainerImages";
	/** [Read] lightsail:GetContainerLog */
	static readonly actionGetContainerLog = "lightsail:GetContainerLog";
	/** [Read] lightsail:GetContainerServiceDeployments */
	static readonly actionGetContainerServiceDeployments =
		"lightsail:GetContainerServiceDeployments";
	/** [Read] lightsail:GetContainerServiceMetricData */
	static readonly actionGetContainerServiceMetricData =
		"lightsail:GetContainerServiceMetricData";
	/** [Read] lightsail:GetContainerServicePowers */
	static readonly actionGetContainerServicePowers =
		"lightsail:GetContainerServicePowers";
	/** [Read] lightsail:GetContainerServices */
	static readonly actionGetContainerServices = "lightsail:GetContainerServices";
	/** [Read] lightsail:GetCostEstimate */
	static readonly actionGetCostEstimate = "lightsail:GetCostEstimate";
	/** [Read] lightsail:GetDisk */
	static readonly actionGetDisk = "lightsail:GetDisk";
	/** [Read] lightsail:GetDiskSnapshot */
	static readonly actionGetDiskSnapshot = "lightsail:GetDiskSnapshot";
	/** [Read] lightsail:GetDiskSnapshots */
	static readonly actionGetDiskSnapshots = "lightsail:GetDiskSnapshots";
	/** [Read] lightsail:GetDisks */
	static readonly actionGetDisks = "lightsail:GetDisks";
	/** [Read] lightsail:GetDistributionBundles */
	static readonly actionGetDistributionBundles =
		"lightsail:GetDistributionBundles";
	/** [Read] lightsail:GetDistributionLatestCacheReset */
	static readonly actionGetDistributionLatestCacheReset =
		"lightsail:GetDistributionLatestCacheReset";
	/** [Read] lightsail:GetDistributionMetricData */
	static readonly actionGetDistributionMetricData =
		"lightsail:GetDistributionMetricData";
	/** [Read] lightsail:GetDistributions */
	static readonly actionGetDistributions = "lightsail:GetDistributions";
	/** [Read] lightsail:GetDomain */
	static readonly actionGetDomain = "lightsail:GetDomain";
	/** [Read] lightsail:GetDomains */
	static readonly actionGetDomains = "lightsail:GetDomains";
	/** [Read] lightsail:GetExportSnapshotRecords */
	static readonly actionGetExportSnapshotRecords =
		"lightsail:GetExportSnapshotRecords";
	/** [Read] lightsail:GetInstance */
	static readonly actionGetInstance = "lightsail:GetInstance";
	/** [Write] lightsail:GetInstanceAccessDetails */
	static readonly actionGetInstanceAccessDetails =
		"lightsail:GetInstanceAccessDetails";
	/** [Read] lightsail:GetInstanceMetricData */
	static readonly actionGetInstanceMetricData =
		"lightsail:GetInstanceMetricData";
	/** [Read] lightsail:GetInstancePortStates */
	static readonly actionGetInstancePortStates =
		"lightsail:GetInstancePortStates";
	/** [Read] lightsail:GetInstanceSnapshot */
	static readonly actionGetInstanceSnapshot = "lightsail:GetInstanceSnapshot";
	/** [Read] lightsail:GetInstanceSnapshots */
	static readonly actionGetInstanceSnapshots = "lightsail:GetInstanceSnapshots";
	/** [Read] lightsail:GetInstanceState */
	static readonly actionGetInstanceState = "lightsail:GetInstanceState";
	/** [Read] lightsail:GetInstances */
	static readonly actionGetInstances = "lightsail:GetInstances";
	/** [Read] lightsail:GetKeyPair */
	static readonly actionGetKeyPair = "lightsail:GetKeyPair";
	/** [Read] lightsail:GetKeyPairs */
	static readonly actionGetKeyPairs = "lightsail:GetKeyPairs";
	/** [Read] lightsail:GetLoadBalancer */
	static readonly actionGetLoadBalancer = "lightsail:GetLoadBalancer";
	/** [Read] lightsail:GetLoadBalancerMetricData */
	static readonly actionGetLoadBalancerMetricData =
		"lightsail:GetLoadBalancerMetricData";
	/** [Read] lightsail:GetLoadBalancerTlsCertificates */
	static readonly actionGetLoadBalancerTlsCertificates =
		"lightsail:GetLoadBalancerTlsCertificates";
	/** [Read] lightsail:GetLoadBalancerTlsPolicies */
	static readonly actionGetLoadBalancerTlsPolicies =
		"lightsail:GetLoadBalancerTlsPolicies";
	/** [Read] lightsail:GetLoadBalancers */
	static readonly actionGetLoadBalancers = "lightsail:GetLoadBalancers";
	/** [Read] lightsail:GetOperation */
	static readonly actionGetOperation = "lightsail:GetOperation";
	/** [Read] lightsail:GetOperations */
	static readonly actionGetOperations = "lightsail:GetOperations";
	/** [Read] lightsail:GetOperationsForResource */
	static readonly actionGetOperationsForResource =
		"lightsail:GetOperationsForResource";
	/** [Read] lightsail:GetRegions */
	static readonly actionGetRegions = "lightsail:GetRegions";
	/** [Read] lightsail:GetRelationalDatabase */
	static readonly actionGetRelationalDatabase =
		"lightsail:GetRelationalDatabase";
	/** [Read] lightsail:GetRelationalDatabaseBlueprints */
	static readonly actionGetRelationalDatabaseBlueprints =
		"lightsail:GetRelationalDatabaseBlueprints";
	/** [Read] lightsail:GetRelationalDatabaseBundles */
	static readonly actionGetRelationalDatabaseBundles =
		"lightsail:GetRelationalDatabaseBundles";
	/** [Read] lightsail:GetRelationalDatabaseEvents */
	static readonly actionGetRelationalDatabaseEvents =
		"lightsail:GetRelationalDatabaseEvents";
	/** [Read] lightsail:GetRelationalDatabaseLogEvents */
	static readonly actionGetRelationalDatabaseLogEvents =
		"lightsail:GetRelationalDatabaseLogEvents";
	/** [Read] lightsail:GetRelationalDatabaseLogStreams */
	static readonly actionGetRelationalDatabaseLogStreams =
		"lightsail:GetRelationalDatabaseLogStreams";
	/** [Write] lightsail:GetRelationalDatabaseMasterUserPassword */
	static readonly actionGetRelationalDatabaseMasterUserPassword =
		"lightsail:GetRelationalDatabaseMasterUserPassword";
	/** [Read] lightsail:GetRelationalDatabaseMetricData */
	static readonly actionGetRelationalDatabaseMetricData =
		"lightsail:GetRelationalDatabaseMetricData";
	/** [Read] lightsail:GetRelationalDatabaseParameters */
	static readonly actionGetRelationalDatabaseParameters =
		"lightsail:GetRelationalDatabaseParameters";
	/** [Read] lightsail:GetRelationalDatabaseSnapshot */
	static readonly actionGetRelationalDatabaseSnapshot =
		"lightsail:GetRelationalDatabaseSnapshot";
	/** [Read] lightsail:GetRelationalDatabaseSnapshots */
	static readonly actionGetRelationalDatabaseSnapshots =
		"lightsail:GetRelationalDatabaseSnapshots";
	/** [Read] lightsail:GetRelationalDatabases */
	static readonly actionGetRelationalDatabases =
		"lightsail:GetRelationalDatabases";
	/** [Read] lightsail:GetSetupHistory */
	static readonly actionGetSetupHistory = "lightsail:GetSetupHistory";
	/** [Read] lightsail:GetStaticIp */
	static readonly actionGetStaticIp = "lightsail:GetStaticIp";
	/** [Read] lightsail:GetStaticIps */
	static readonly actionGetStaticIps = "lightsail:GetStaticIps";
	/** [Write] lightsail:ImportKeyPair */
	static readonly ImportKeyPair = "lightsail:ImportKeyPair";
	/** [Read] lightsail:IsVpcPeered */
	static readonly IsVpcPeered = "lightsail:IsVpcPeered";
	/** [Write] lightsail:OpenInstancePublicPorts */
	static readonly OpenInstancePublicPorts = "lightsail:OpenInstancePublicPorts";
	/** [Write] lightsail:PeerVpc */
	static readonly PeerVpc = "lightsail:PeerVpc";
	/** [Write] lightsail:PutAlarm */
	static readonly PutAlarm = "lightsail:PutAlarm";
	/** [Write] lightsail:PutInstancePublicPorts */
	static readonly PutInstancePublicPorts = "lightsail:PutInstancePublicPorts";
	/** [Write] lightsail:RebootInstance */
	static readonly RebootInstance = "lightsail:RebootInstance";
	/** [Write] lightsail:RebootRelationalDatabase */
	static readonly RebootRelationalDatabase =
		"lightsail:RebootRelationalDatabase";
	/** [Write] lightsail:RegisterContainerImage */
	static readonly RegisterContainerImage = "lightsail:RegisterContainerImage";
	/** [Write] lightsail:ReleaseStaticIp */
	static readonly ReleaseStaticIp = "lightsail:ReleaseStaticIp";
	/** [Write] lightsail:ResetDistributionCache */
	static readonly ResetDistributionCache = "lightsail:ResetDistributionCache";
	/** [Write] lightsail:SendContactMethodVerification */
	static readonly SendContactMethodVerification =
		"lightsail:SendContactMethodVerification";
	/** [Write] lightsail:SetIpAddressType */
	static readonly actionSetIpAddressType = "lightsail:SetIpAddressType";
	/** [Write] lightsail:SetResourceAccessForBucket */
	static readonly actionSetResourceAccessForBucket =
		"lightsail:SetResourceAccessForBucket";
	/** [Write] lightsail:SetupInstanceHttps */
	static readonly SetupInstanceHttps = "lightsail:SetupInstanceHttps";
	/** [Write] lightsail:StartGUISession */
	static readonly StartGUISession = "lightsail:StartGUISession";
	/** [Write] lightsail:StartInstance */
	static readonly StartInstance = "lightsail:StartInstance";
	/** [Write] lightsail:StartRelationalDatabase */
	static readonly StartRelationalDatabase = "lightsail:StartRelationalDatabase";
	/** [Write] lightsail:StopGUISession */
	static readonly StopGUISession = "lightsail:StopGUISession";
	/** [Write] lightsail:StopInstance */
	static readonly StopInstance = "lightsail:StopInstance";
	/** [Write] lightsail:StopRelationalDatabase */
	static readonly StopRelationalDatabase = "lightsail:StopRelationalDatabase";
	/** [Tagging] lightsail:TagResource */
	static readonly TagResource = "lightsail:TagResource";
	/** [Write] lightsail:TestAlarm */
	static readonly TestAlarm = "lightsail:TestAlarm";
	/** [Write] lightsail:UnpeerVpc */
	static readonly UnpeerVpc = "lightsail:UnpeerVpc";
	/** [Tagging] lightsail:UntagResource */
	static readonly UntagResource = "lightsail:UntagResource";
	/** [Write] lightsail:UpdateBucket */
	static readonly UpdateBucket = "lightsail:UpdateBucket";
	/** [Write] lightsail:UpdateBucketBundle */
	static readonly UpdateBucketBundle = "lightsail:UpdateBucketBundle";
	/** [Write] lightsail:UpdateContainerService */
	static readonly UpdateContainerService = "lightsail:UpdateContainerService";
	/** [Write] lightsail:UpdateDistribution */
	static readonly UpdateDistribution = "lightsail:UpdateDistribution";
	/** [Write] lightsail:UpdateDistributionBundle */
	static readonly UpdateDistributionBundle =
		"lightsail:UpdateDistributionBundle";
	/** [Write] lightsail:UpdateDomainEntry */
	static readonly UpdateDomainEntry = "lightsail:UpdateDomainEntry";
	/** [Write] lightsail:UpdateInstanceMetadataOptions */
	static readonly UpdateInstanceMetadataOptions =
		"lightsail:UpdateInstanceMetadataOptions";
	/** [Write] lightsail:UpdateLoadBalancerAttribute */
	static readonly UpdateLoadBalancerAttribute =
		"lightsail:UpdateLoadBalancerAttribute";
	/** [Write] lightsail:UpdateRelationalDatabase */
	static readonly UpdateRelationalDatabase =
		"lightsail:UpdateRelationalDatabase";
	/** [Write] lightsail:UpdateRelationalDatabaseParameters */
	static readonly UpdateRelationalDatabaseParameters =
		"lightsail:UpdateRelationalDatabaseParameters";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		LightSailActions.actionGetActiveNames,
		LightSailActions.actionGetAlarms,
		LightSailActions.actionGetAutoSnapshots,
		LightSailActions.actionGetBlueprints,
		LightSailActions.actionGetBucketAccessKeys,
		LightSailActions.actionGetBucketBundles,
		LightSailActions.actionGetBucketMetricData,
		LightSailActions.actionGetBuckets,
		LightSailActions.actionGetBundles,
		LightSailActions.actionGetCertificates,
		LightSailActions.actionGetCloudFormationStackRecords,
		LightSailActions.actionGetContactMethods,
		LightSailActions.actionGetContainerAPIMetadata,
		LightSailActions.actionGetContainerImages,
		LightSailActions.actionGetContainerLog,
		LightSailActions.actionGetContainerServiceDeployments,
		LightSailActions.actionGetContainerServiceMetricData,
		LightSailActions.actionGetContainerServicePowers,
		LightSailActions.actionGetContainerServices,
		LightSailActions.actionGetCostEstimate,
		LightSailActions.actionGetDisk,
		LightSailActions.actionGetDiskSnapshot,
		LightSailActions.actionGetDiskSnapshots,
		LightSailActions.actionGetDisks,
		LightSailActions.actionGetDistributionBundles,
		LightSailActions.actionGetDistributionLatestCacheReset,
		LightSailActions.actionGetDistributionMetricData,
		LightSailActions.actionGetDistributions,
		LightSailActions.actionGetDomain,
		LightSailActions.actionGetDomains,
		LightSailActions.actionGetExportSnapshotRecords,
		LightSailActions.actionGetInstance,
		LightSailActions.actionGetInstanceMetricData,
		LightSailActions.actionGetInstancePortStates,
		LightSailActions.actionGetInstanceSnapshot,
		LightSailActions.actionGetInstanceSnapshots,
		LightSailActions.actionGetInstanceState,
		LightSailActions.actionGetInstances,
		LightSailActions.actionGetKeyPair,
		LightSailActions.actionGetKeyPairs,
		LightSailActions.actionGetLoadBalancer,
		LightSailActions.actionGetLoadBalancerMetricData,
		LightSailActions.actionGetLoadBalancerTlsCertificates,
		LightSailActions.actionGetLoadBalancerTlsPolicies,
		LightSailActions.actionGetLoadBalancers,
		LightSailActions.actionGetOperation,
		LightSailActions.actionGetOperations,
		LightSailActions.actionGetOperationsForResource,
		LightSailActions.actionGetRegions,
		LightSailActions.actionGetRelationalDatabase,
		LightSailActions.actionGetRelationalDatabaseBlueprints,
		LightSailActions.actionGetRelationalDatabaseBundles,
		LightSailActions.actionGetRelationalDatabaseEvents,
		LightSailActions.actionGetRelationalDatabaseLogEvents,
		LightSailActions.actionGetRelationalDatabaseLogStreams,
		LightSailActions.actionGetRelationalDatabaseMetricData,
		LightSailActions.actionGetRelationalDatabaseParameters,
		LightSailActions.actionGetRelationalDatabaseSnapshot,
		LightSailActions.actionGetRelationalDatabaseSnapshots,
		LightSailActions.actionGetRelationalDatabases,
		LightSailActions.actionGetSetupHistory,
		LightSailActions.actionGetStaticIp,
		LightSailActions.actionGetStaticIps,
		LightSailActions.IsVpcPeered,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		LightSailActions.AllocateStaticIp,
		LightSailActions.AttachCertificateToDistribution,
		LightSailActions.AttachDisk,
		LightSailActions.AttachInstancesToLoadBalancer,
		LightSailActions.AttachLoadBalancerTlsCertificate,
		LightSailActions.AttachStaticIp,
		LightSailActions.CloseInstancePublicPorts,
		LightSailActions.CopySnapshot,
		LightSailActions.CreateBucket,
		LightSailActions.CreateBucketAccessKey,
		LightSailActions.CreateCertificate,
		LightSailActions.CreateCloudFormationStack,
		LightSailActions.CreateContactMethod,
		LightSailActions.CreateContainerService,
		LightSailActions.CreateContainerServiceDeployment,
		LightSailActions.CreateContainerServiceRegistryLogin,
		LightSailActions.CreateDisk,
		LightSailActions.CreateDiskFromSnapshot,
		LightSailActions.CreateDiskSnapshot,
		LightSailActions.CreateDistribution,
		LightSailActions.CreateDomain,
		LightSailActions.CreateDomainEntry,
		LightSailActions.CreateGUISessionAccessDetails,
		LightSailActions.CreateInstanceSnapshot,
		LightSailActions.CreateInstances,
		LightSailActions.CreateInstancesFromSnapshot,
		LightSailActions.CreateKeyPair,
		LightSailActions.CreateLoadBalancer,
		LightSailActions.CreateLoadBalancerTlsCertificate,
		LightSailActions.CreateRelationalDatabase,
		LightSailActions.CreateRelationalDatabaseFromSnapshot,
		LightSailActions.CreateRelationalDatabaseSnapshot,
		LightSailActions.DeleteAlarm,
		LightSailActions.DeleteAutoSnapshot,
		LightSailActions.DeleteBucket,
		LightSailActions.DeleteBucketAccessKey,
		LightSailActions.DeleteCertificate,
		LightSailActions.DeleteContactMethod,
		LightSailActions.DeleteContainerImage,
		LightSailActions.DeleteContainerService,
		LightSailActions.DeleteDisk,
		LightSailActions.DeleteDiskSnapshot,
		LightSailActions.DeleteDistribution,
		LightSailActions.DeleteDomain,
		LightSailActions.DeleteDomainEntry,
		LightSailActions.DeleteInstance,
		LightSailActions.DeleteInstanceSnapshot,
		LightSailActions.DeleteKeyPair,
		LightSailActions.DeleteKnownHostKeys,
		LightSailActions.DeleteLoadBalancer,
		LightSailActions.DeleteLoadBalancerTlsCertificate,
		LightSailActions.DeleteRelationalDatabase,
		LightSailActions.DeleteRelationalDatabaseSnapshot,
		LightSailActions.DetachCertificateFromDistribution,
		LightSailActions.DetachDisk,
		LightSailActions.DetachInstancesFromLoadBalancer,
		LightSailActions.DetachStaticIp,
		LightSailActions.DisableAddOn,
		LightSailActions.DownloadDefaultKeyPair,
		LightSailActions.EnableAddOn,
		LightSailActions.ExportSnapshot,
		LightSailActions.actionGetInstanceAccessDetails,
		LightSailActions.actionGetRelationalDatabaseMasterUserPassword,
		LightSailActions.ImportKeyPair,
		LightSailActions.OpenInstancePublicPorts,
		LightSailActions.PeerVpc,
		LightSailActions.PutAlarm,
		LightSailActions.PutInstancePublicPorts,
		LightSailActions.RebootInstance,
		LightSailActions.RebootRelationalDatabase,
		LightSailActions.RegisterContainerImage,
		LightSailActions.ReleaseStaticIp,
		LightSailActions.ResetDistributionCache,
		LightSailActions.SendContactMethodVerification,
		LightSailActions.actionSetIpAddressType,
		LightSailActions.actionSetResourceAccessForBucket,
		LightSailActions.SetupInstanceHttps,
		LightSailActions.StartGUISession,
		LightSailActions.StartInstance,
		LightSailActions.StartRelationalDatabase,
		LightSailActions.StopGUISession,
		LightSailActions.StopInstance,
		LightSailActions.StopRelationalDatabase,
		LightSailActions.TestAlarm,
		LightSailActions.UnpeerVpc,
		LightSailActions.UpdateBucket,
		LightSailActions.UpdateBucketBundle,
		LightSailActions.UpdateContainerService,
		LightSailActions.UpdateDistribution,
		LightSailActions.UpdateDistributionBundle,
		LightSailActions.UpdateDomainEntry,
		LightSailActions.UpdateInstanceMetadataOptions,
		LightSailActions.UpdateLoadBalancerAttribute,
		LightSailActions.UpdateRelationalDatabase,
		LightSailActions.UpdateRelationalDatabaseParameters,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		LightSailActions.TagResource,
		LightSailActions.UntagResource,
	];
}

/**
 * Properties for building a Alarm ARN.
 */
export interface LightSailAlarmArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Alarm ARN.
 */
export interface LightSailAlarmArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a Bucket ARN.
 */
export interface LightSailBucketArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Bucket ARN.
 */
export interface LightSailBucketArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a Certificate ARN.
 */
export interface LightSailCertificateArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Certificate ARN.
 */
export interface LightSailCertificateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a CloudFormationStackRecord ARN.
 */
export interface LightSailCloudFormationStackRecordArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a CloudFormationStackRecord ARN.
 */
export interface LightSailCloudFormationStackRecordArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a ContactMethod ARN.
 */
export interface LightSailContactMethodArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ContactMethod ARN.
 */
export interface LightSailContactMethodArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a ContainerService ARN.
 */
export interface LightSailContainerServiceArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ContainerService ARN.
 */
export interface LightSailContainerServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a Disk ARN.
 */
export interface LightSailDiskArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Disk ARN.
 */
export interface LightSailDiskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a DiskSnapshot ARN.
 */
export interface LightSailDiskSnapshotArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DiskSnapshot ARN.
 */
export interface LightSailDiskSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a Distribution ARN.
 */
export interface LightSailDistributionArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Distribution ARN.
 */
export interface LightSailDistributionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a Domain ARN.
 */
export interface LightSailDomainArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Domain ARN.
 */
export interface LightSailDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a ExportSnapshotRecord ARN.
 */
export interface LightSailExportSnapshotRecordArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ExportSnapshotRecord ARN.
 */
export interface LightSailExportSnapshotRecordArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a Instance ARN.
 */
export interface LightSailInstanceArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Instance ARN.
 */
export interface LightSailInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a InstanceSnapshot ARN.
 */
export interface LightSailInstanceSnapshotArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a InstanceSnapshot ARN.
 */
export interface LightSailInstanceSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a KeyPair ARN.
 */
export interface LightSailKeyPairArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a KeyPair ARN.
 */
export interface LightSailKeyPairArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a LoadBalancer ARN.
 */
export interface LightSailLoadBalancerArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a LoadBalancer ARN.
 */
export interface LightSailLoadBalancerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a LoadBalancerTlsCertificate ARN.
 */
export interface LightSailLoadBalancerTLSCertificateArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a LoadBalancerTlsCertificate ARN.
 */
export interface LightSailLoadBalancerTLSCertificateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a RelationalDatabase ARN.
 */
export interface LightSailRelationalDatabaseArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RelationalDatabase ARN.
 */
export interface LightSailRelationalDatabaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a RelationalDatabaseSnapshot ARN.
 */
export interface LightSailRelationalDatabaseSnapshotArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RelationalDatabaseSnapshot ARN.
 */
export interface LightSailRelationalDatabaseSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a StaticIp ARN.
 */
export interface LightSailStaticIPArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a StaticIp ARN.
 */
export interface LightSailStaticIPArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

const AlarmArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Alarm\/(?<id>[^:/?]+)$/;
const BucketArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Bucket\/(?<id>[^:/?]+)$/;
const CertificateArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Certificate\/(?<id>[^:/?]+)$/;
const CloudFormationStackRecordArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):CloudFormationStackRecord\/(?<id>[^:/?]+)$/;
const ContactMethodArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):ContactMethod\/(?<id>[^:/?]+)$/;
const ContainerServiceArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):ContainerService\/(?<id>[^:/?]+)$/;
const DiskArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Disk\/(?<id>[^:/?]+)$/;
const DiskSnapshotArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):DiskSnapshot\/(?<id>[^:/?]+)$/;
const DistributionArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Distribution\/(?<id>[^:/?]+)$/;
const DomainArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Domain\/(?<id>[^:/?]+)$/;
const ExportSnapshotRecordArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):ExportSnapshotRecord\/(?<id>[^:/?]+)$/;
const InstanceArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Instance\/(?<id>[^:/?]+)$/;
const InstanceSnapshotArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):InstanceSnapshot\/(?<id>[^:/?]+)$/;
const KeyPairArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):KeyPair\/(?<id>[^:/?]+)$/;
const LoadBalancerArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):LoadBalancer\/(?<id>[^:/?]+)$/;
const LoadBalancerTLSCertificateArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):LoadBalancerTlsCertificate\/(?<id>[^:/?]+)$/;
const RelationalDatabaseArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):RelationalDatabase\/(?<id>[^:/?]+)$/;
const RelationalDatabaseSnapshotArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):RelationalDatabaseSnapshot\/(?<id>[^:/?]+)$/;
const StaticIPArnRegex =
	/^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):StaticIp\/(?<id>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for lightsail resources.
 */
export class LightSailResources {
	/**
	 * Builds an ARN for the Alarm resource.
	 */
	static alarm(props: LightSailAlarmArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:Alarm/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Alarm resource.
	 */
	static isValidAlarmArn(arn: string): boolean {
		return AlarmArnRegex.test(arn);
	}

	/**
	 * Parses a Alarm ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAlarmArn(arn: string): LightSailAlarmArnComponents {
		const match = AlarmArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Alarm ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the Bucket resource.
	 */
	static bucket(props: LightSailBucketArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:Bucket/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Bucket resource.
	 */
	static isValidBucketArn(arn: string): boolean {
		return BucketArnRegex.test(arn);
	}

	/**
	 * Parses a Bucket ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBucketArn(arn: string): LightSailBucketArnComponents {
		const match = BucketArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Bucket ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the Certificate resource.
	 */
	static certificate(props: LightSailCertificateArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:Certificate/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Certificate resource.
	 */
	static isValidCertificateArn(arn: string): boolean {
		return CertificateArnRegex.test(arn);
	}

	/**
	 * Parses a Certificate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCertificateArn(arn: string): LightSailCertificateArnComponents {
		const match = CertificateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Certificate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the CloudFormationStackRecord resource.
	 */
	static cloudFormationStackRecord(
		props: LightSailCloudFormationStackRecordArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:CloudFormationStackRecord/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the CloudFormationStackRecord resource.
	 */
	static isValidCloudFormationStackRecordArn(arn: string): boolean {
		return CloudFormationStackRecordArnRegex.test(arn);
	}

	/**
	 * Parses a CloudFormationStackRecord ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCloudFormationStackRecordArn(
		arn: string,
	): LightSailCloudFormationStackRecordArnComponents {
		const match = CloudFormationStackRecordArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid CloudFormationStackRecord ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the ContactMethod resource.
	 */
	static contactMethod(props: LightSailContactMethodArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:ContactMethod/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ContactMethod resource.
	 */
	static isValidContactMethodArn(arn: string): boolean {
		return ContactMethodArnRegex.test(arn);
	}

	/**
	 * Parses a ContactMethod ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContactMethodArn(
		arn: string,
	): LightSailContactMethodArnComponents {
		const match = ContactMethodArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ContactMethod ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the ContainerService resource.
	 */
	static containerService(props: LightSailContainerServiceArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:ContainerService/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ContainerService resource.
	 */
	static isValidContainerServiceArn(arn: string): boolean {
		return ContainerServiceArnRegex.test(arn);
	}

	/**
	 * Parses a ContainerService ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContainerServiceArn(
		arn: string,
	): LightSailContainerServiceArnComponents {
		const match = ContainerServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ContainerService ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the Disk resource.
	 */
	static disk(props: LightSailDiskArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:Disk/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Disk resource.
	 */
	static isValidDiskArn(arn: string): boolean {
		return DiskArnRegex.test(arn);
	}

	/**
	 * Parses a Disk ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDiskArn(arn: string): LightSailDiskArnComponents {
		const match = DiskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Disk ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the DiskSnapshot resource.
	 */
	static diskSnapshot(props: LightSailDiskSnapshotArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:DiskSnapshot/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DiskSnapshot resource.
	 */
	static isValidDiskSnapshotArn(arn: string): boolean {
		return DiskSnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a DiskSnapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDiskSnapshotArn(arn: string): LightSailDiskSnapshotArnComponents {
		const match = DiskSnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DiskSnapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the Distribution resource.
	 */
	static distribution(props: LightSailDistributionArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:Distribution/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Distribution resource.
	 */
	static isValidDistributionArn(arn: string): boolean {
		return DistributionArnRegex.test(arn);
	}

	/**
	 * Parses a Distribution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDistributionArn(arn: string): LightSailDistributionArnComponents {
		const match = DistributionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Distribution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the Domain resource.
	 */
	static domain(props: LightSailDomainArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:Domain/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Domain resource.
	 */
	static isValidDomainArn(arn: string): boolean {
		return DomainArnRegex.test(arn);
	}

	/**
	 * Parses a Domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainArn(arn: string): LightSailDomainArnComponents {
		const match = DomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the ExportSnapshotRecord resource.
	 */
	static exportSnapshotRecord(
		props: LightSailExportSnapshotRecordArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:ExportSnapshotRecord/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ExportSnapshotRecord resource.
	 */
	static isValidExportSnapshotRecordArn(arn: string): boolean {
		return ExportSnapshotRecordArnRegex.test(arn);
	}

	/**
	 * Parses a ExportSnapshotRecord ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExportSnapshotRecordArn(
		arn: string,
	): LightSailExportSnapshotRecordArnComponents {
		const match = ExportSnapshotRecordArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ExportSnapshotRecord ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the Instance resource.
	 */
	static instance(props: LightSailInstanceArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:Instance/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Instance resource.
	 */
	static isValidInstanceArn(arn: string): boolean {
		return InstanceArnRegex.test(arn);
	}

	/**
	 * Parses a Instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceArn(arn: string): LightSailInstanceArnComponents {
		const match = InstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the InstanceSnapshot resource.
	 */
	static instanceSnapshot(props: LightSailInstanceSnapshotArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:InstanceSnapshot/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the InstanceSnapshot resource.
	 */
	static isValidInstanceSnapshotArn(arn: string): boolean {
		return InstanceSnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a InstanceSnapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceSnapshotArn(
		arn: string,
	): LightSailInstanceSnapshotArnComponents {
		const match = InstanceSnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid InstanceSnapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the KeyPair resource.
	 */
	static keyPair(props: LightSailKeyPairArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:KeyPair/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the KeyPair resource.
	 */
	static isValidKeyPairArn(arn: string): boolean {
		return KeyPairArnRegex.test(arn);
	}

	/**
	 * Parses a KeyPair ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKeyPairArn(arn: string): LightSailKeyPairArnComponents {
		const match = KeyPairArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid KeyPair ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the LoadBalancer resource.
	 */
	static loadBalancer(props: LightSailLoadBalancerArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:LoadBalancer/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the LoadBalancer resource.
	 */
	static isValidLoadBalancerArn(arn: string): boolean {
		return LoadBalancerArnRegex.test(arn);
	}

	/**
	 * Parses a LoadBalancer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLoadBalancerArn(arn: string): LightSailLoadBalancerArnComponents {
		const match = LoadBalancerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid LoadBalancer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the LoadBalancerTlsCertificate resource.
	 */
	static loadBalancerTLSCertificate(
		props: LightSailLoadBalancerTLSCertificateArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:LoadBalancerTlsCertificate/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the LoadBalancerTlsCertificate resource.
	 */
	static isValidLoadBalancerTLSCertificateArn(arn: string): boolean {
		return LoadBalancerTLSCertificateArnRegex.test(arn);
	}

	/**
	 * Parses a LoadBalancerTlsCertificate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLoadBalancerTLSCertificateArn(
		arn: string,
	): LightSailLoadBalancerTLSCertificateArnComponents {
		const match = LoadBalancerTLSCertificateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid LoadBalancerTlsCertificate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the RelationalDatabase resource.
	 */
	static relationalDatabase(
		props: LightSailRelationalDatabaseArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:RelationalDatabase/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RelationalDatabase resource.
	 */
	static isValidRelationalDatabaseArn(arn: string): boolean {
		return RelationalDatabaseArnRegex.test(arn);
	}

	/**
	 * Parses a RelationalDatabase ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRelationalDatabaseArn(
		arn: string,
	): LightSailRelationalDatabaseArnComponents {
		const match = RelationalDatabaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RelationalDatabase ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the RelationalDatabaseSnapshot resource.
	 */
	static relationalDatabaseSnapshot(
		props: LightSailRelationalDatabaseSnapshotArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:RelationalDatabaseSnapshot/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RelationalDatabaseSnapshot resource.
	 */
	static isValidRelationalDatabaseSnapshotArn(arn: string): boolean {
		return RelationalDatabaseSnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a RelationalDatabaseSnapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRelationalDatabaseSnapshotArn(
		arn: string,
	): LightSailRelationalDatabaseSnapshotArnComponents {
		const match = RelationalDatabaseSnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RelationalDatabaseSnapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the StaticIp resource.
	 */
	static staticIP(props: LightSailStaticIPArnProps): string {
		return `arn:${props.partition ?? "aws"}:lightsail:${props.region ?? "*"}:${props.account ?? "*"}:StaticIp/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the StaticIp resource.
	 */
	static isValidStaticIPArn(arn: string): boolean {
		return StaticIPArnRegex.test(arn);
	}

	/**
	 * Parses a StaticIp ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStaticIPArn(arn: string): LightSailStaticIPArnComponents {
		const match = StaticIPArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid StaticIp ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}
}

/**
 * API operation to required IAM actions mapping for lightsail.
 */
export class LightSailOperations {
	/** IAM actions required for the AllocateStaticIp API call. */
	static readonly AllocateStaticIp: string[] = ["lightsail:AllocateStaticIp"];
	/** IAM actions required for the AttachCertificateToDistribution API call. */
	static readonly AttachCertificateToDistribution: string[] = [
		"lightsail:AttachCertificateToDistribution",
	];
	/** IAM actions required for the AttachDisk API call. */
	static readonly AttachDisk: string[] = ["lightsail:AttachDisk"];
	/** IAM actions required for the AttachInstancesToLoadBalancer API call. */
	static readonly AttachInstancesToLoadBalancer: string[] = [
		"lightsail:AttachInstancesToLoadBalancer",
	];
	/** IAM actions required for the AttachLoadBalancerTlsCertificate API call. */
	static readonly AttachLoadBalancerTlsCertificate: string[] = [
		"lightsail:AttachLoadBalancerTlsCertificate",
	];
	/** IAM actions required for the AttachStaticIp API call. */
	static readonly AttachStaticIp: string[] = ["lightsail:AttachStaticIp"];
	/** IAM actions required for the CloseInstancePublicPorts API call. */
	static readonly CloseInstancePublicPorts: string[] = [
		"lightsail:CloseInstancePublicPorts",
	];
	/** IAM actions required for the CopySnapshot API call. */
	static readonly CopySnapshot: string[] = ["lightsail:CopySnapshot"];
	/** IAM actions required for the CreateBucket API call. */
	static readonly CreateBucket: string[] = [
		"lightsail:CreateBucket",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateBucketAccessKey API call. */
	static readonly CreateBucketAccessKey: string[] = [
		"lightsail:CreateBucketAccessKey",
	];
	/** IAM actions required for the CreateCertificate API call. */
	static readonly CreateCertificate: string[] = [
		"lightsail:CreateCertificate",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateCloudFormationStack API call. */
	static readonly CreateCloudFormationStack: string[] = [
		"lightsail:CreateCloudFormationStack",
	];
	/** IAM actions required for the CreateContactMethod API call. */
	static readonly CreateContactMethod: string[] = [
		"lightsail:CreateContactMethod",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateContainerService API call. */
	static readonly CreateContainerService: string[] = [
		"lightsail:CreateContainerService",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateContainerServiceDeployment API call. */
	static readonly CreateContainerServiceDeployment: string[] = [
		"lightsail:CreateContainerServiceDeployment",
	];
	/** IAM actions required for the CreateContainerServiceRegistryLogin API call. */
	static readonly CreateContainerServiceRegistryLogin: string[] = [
		"lightsail:CreateContainerServiceRegistryLogin",
	];
	/** IAM actions required for the CreateDisk API call. */
	static readonly CreateDisk: string[] = [
		"lightsail:CreateDisk",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateDiskFromSnapshot API call. */
	static readonly CreateDiskFromSnapshot: string[] = [
		"lightsail:CreateDiskFromSnapshot",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateDiskSnapshot API call. */
	static readonly CreateDiskSnapshot: string[] = [
		"lightsail:CreateDiskSnapshot",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateDistribution API call. */
	static readonly CreateDistribution: string[] = [
		"lightsail:CreateDistribution",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CreateDomain: string[] = [
		"lightsail:CreateDomain",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateDomainEntry API call. */
	static readonly CreateDomainEntry: string[] = ["lightsail:CreateDomainEntry"];
	/** IAM actions required for the CreateGUISessionAccessDetails API call. */
	static readonly CreateGUISessionAccessDetails: string[] = [
		"lightsail:CreateGUISessionAccessDetails",
	];
	/** IAM actions required for the CreateInstanceSnapshot API call. */
	static readonly CreateInstanceSnapshot: string[] = [
		"lightsail:CreateInstanceSnapshot",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateInstances API call. */
	static readonly CreateInstances: string[] = [
		"lightsail:CreateInstances",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateInstancesFromSnapshot API call. */
	static readonly CreateInstancesFromSnapshot: string[] = [
		"lightsail:CreateInstancesFromSnapshot",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateKeyPair API call. */
	static readonly CreateKeyPair: string[] = [
		"lightsail:CreateKeyPair",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateLoadBalancer API call. */
	static readonly CreateLoadBalancer: string[] = [
		"lightsail:CreateLoadBalancer",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateLoadBalancerTlsCertificate API call. */
	static readonly CreateLoadBalancerTlsCertificate: string[] = [
		"lightsail:CreateLoadBalancerTlsCertificate",
	];
	/** IAM actions required for the CreateRelationalDatabase API call. */
	static readonly CreateRelationalDatabase: string[] = [
		"lightsail:CreateRelationalDatabase",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateRelationalDatabaseFromSnapshot API call. */
	static readonly CreateRelationalDatabaseFromSnapshot: string[] = [
		"lightsail:CreateRelationalDatabaseFromSnapshot",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateRelationalDatabaseSnapshot API call. */
	static readonly CreateRelationalDatabaseSnapshot: string[] = [
		"lightsail:CreateRelationalDatabaseSnapshot",
		"lightsail:TagResource",
	];
	/** IAM actions required for the DeleteAlarm API call. */
	static readonly DeleteAlarm: string[] = ["lightsail:DeleteAlarm"];
	/** IAM actions required for the DeleteAutoSnapshot API call. */
	static readonly DeleteAutoSnapshot: string[] = [
		"lightsail:DeleteAutoSnapshot",
	];
	/** IAM actions required for the DeleteBucket API call. */
	static readonly DeleteBucket: string[] = ["lightsail:DeleteBucket"];
	/** IAM actions required for the DeleteBucketAccessKey API call. */
	static readonly DeleteBucketAccessKey: string[] = [
		"lightsail:DeleteBucketAccessKey",
	];
	/** IAM actions required for the DeleteCertificate API call. */
	static readonly DeleteCertificate: string[] = ["lightsail:DeleteCertificate"];
	/** IAM actions required for the DeleteContactMethod API call. */
	static readonly DeleteContactMethod: string[] = [
		"lightsail:DeleteContactMethod",
	];
	/** IAM actions required for the DeleteContainerImage API call. */
	static readonly DeleteContainerImage: string[] = [
		"lightsail:DeleteContainerImage",
	];
	/** IAM actions required for the DeleteContainerService API call. */
	static readonly DeleteContainerService: string[] = [
		"lightsail:DeleteContainerService",
	];
	/** IAM actions required for the DeleteDisk API call. */
	static readonly DeleteDisk: string[] = ["lightsail:DeleteDisk"];
	/** IAM actions required for the DeleteDiskSnapshot API call. */
	static readonly DeleteDiskSnapshot: string[] = [
		"lightsail:DeleteDiskSnapshot",
	];
	/** IAM actions required for the DeleteDistribution API call. */
	static readonly DeleteDistribution: string[] = [
		"lightsail:DeleteDistribution",
	];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DeleteDomain: string[] = ["lightsail:DeleteDomain"];
	/** IAM actions required for the DeleteDomainEntry API call. */
	static readonly DeleteDomainEntry: string[] = ["lightsail:DeleteDomainEntry"];
	/** IAM actions required for the DeleteInstance API call. */
	static readonly DeleteInstance: string[] = ["lightsail:DeleteInstance"];
	/** IAM actions required for the DeleteInstanceSnapshot API call. */
	static readonly DeleteInstanceSnapshot: string[] = [
		"lightsail:DeleteInstanceSnapshot",
	];
	/** IAM actions required for the DeleteKeyPair API call. */
	static readonly DeleteKeyPair: string[] = ["lightsail:DeleteKeyPair"];
	/** IAM actions required for the DeleteKnownHostKeys API call. */
	static readonly DeleteKnownHostKeys: string[] = [
		"lightsail:DeleteKnownHostKeys",
	];
	/** IAM actions required for the DeleteLoadBalancer API call. */
	static readonly DeleteLoadBalancer: string[] = [
		"lightsail:DeleteLoadBalancer",
	];
	/** IAM actions required for the DeleteLoadBalancerTlsCertificate API call. */
	static readonly DeleteLoadBalancerTlsCertificate: string[] = [
		"lightsail:DeleteLoadBalancerTlsCertificate",
	];
	/** IAM actions required for the DeleteRelationalDatabase API call. */
	static readonly DeleteRelationalDatabase: string[] = [
		"lightsail:DeleteRelationalDatabase",
	];
	/** IAM actions required for the DeleteRelationalDatabaseSnapshot API call. */
	static readonly DeleteRelationalDatabaseSnapshot: string[] = [
		"lightsail:DeleteRelationalDatabaseSnapshot",
	];
	/** IAM actions required for the DetachCertificateFromDistribution API call. */
	static readonly DetachCertificateFromDistribution: string[] = [
		"lightsail:DetachCertificateFromDistribution",
	];
	/** IAM actions required for the DetachDisk API call. */
	static readonly DetachDisk: string[] = ["lightsail:DetachDisk"];
	/** IAM actions required for the DetachInstancesFromLoadBalancer API call. */
	static readonly DetachInstancesFromLoadBalancer: string[] = [
		"lightsail:DetachInstancesFromLoadBalancer",
	];
	/** IAM actions required for the DetachStaticIp API call. */
	static readonly DetachStaticIp: string[] = ["lightsail:DetachStaticIp"];
	/** IAM actions required for the DisableAddOn API call. */
	static readonly DisableAddOn: string[] = ["lightsail:DisableAddOn"];
	/** IAM actions required for the DownloadDefaultKeyPair API call. */
	static readonly DownloadDefaultKeyPair: string[] = [
		"lightsail:DownloadDefaultKeyPair",
	];
	/** IAM actions required for the EnableAddOn API call. */
	static readonly EnableAddOn: string[] = ["lightsail:EnableAddOn"];
	/** IAM actions required for the ExportSnapshot API call. */
	static readonly ExportSnapshot: string[] = ["lightsail:ExportSnapshot"];
	/** IAM actions required for the GetActiveNames API call. */
	static readonly opGetActiveNames: string[] = ["lightsail:GetActiveNames"];
	/** IAM actions required for the GetAlarms API call. */
	static readonly opGetAlarms: string[] = ["lightsail:GetAlarms"];
	/** IAM actions required for the GetAutoSnapshots API call. */
	static readonly opGetAutoSnapshots: string[] = ["lightsail:GetAutoSnapshots"];
	/** IAM actions required for the GetBlueprints API call. */
	static readonly opGetBlueprints: string[] = ["lightsail:GetBlueprints"];
	/** IAM actions required for the GetBucketAccessKeys API call. */
	static readonly opGetBucketAccessKeys: string[] = [
		"lightsail:GetBucketAccessKeys",
	];
	/** IAM actions required for the GetBucketBundles API call. */
	static readonly opGetBucketBundles: string[] = ["lightsail:GetBucketBundles"];
	/** IAM actions required for the GetBucketMetricData API call. */
	static readonly opGetBucketMetricData: string[] = [
		"lightsail:GetBucketMetricData",
	];
	/** IAM actions required for the GetBuckets API call. */
	static readonly opGetBuckets: string[] = ["lightsail:GetBuckets"];
	/** IAM actions required for the GetBundles API call. */
	static readonly opGetBundles: string[] = ["lightsail:GetBundles"];
	/** IAM actions required for the GetCertificates API call. */
	static readonly opGetCertificates: string[] = ["lightsail:GetCertificates"];
	/** IAM actions required for the GetCloudFormationStackRecords API call. */
	static readonly opGetCloudFormationStackRecords: string[] = [
		"lightsail:GetCloudFormationStackRecords",
	];
	/** IAM actions required for the GetContactMethods API call. */
	static readonly opGetContactMethods: string[] = [
		"lightsail:GetContactMethods",
	];
	/** IAM actions required for the GetContainerAPIMetadata API call. */
	static readonly opGetContainerAPIMetadata: string[] = [
		"lightsail:GetContainerAPIMetadata",
	];
	/** IAM actions required for the GetContainerImages API call. */
	static readonly opGetContainerImages: string[] = [
		"lightsail:GetContainerImages",
	];
	/** IAM actions required for the GetContainerLog API call. */
	static readonly opGetContainerLog: string[] = ["lightsail:GetContainerLog"];
	/** IAM actions required for the GetContainerServiceDeployments API call. */
	static readonly opGetContainerServiceDeployments: string[] = [
		"lightsail:GetContainerServiceDeployments",
	];
	/** IAM actions required for the GetContainerServiceMetricData API call. */
	static readonly opGetContainerServiceMetricData: string[] = [
		"lightsail:GetContainerServiceMetricData",
	];
	/** IAM actions required for the GetContainerServicePowers API call. */
	static readonly opGetContainerServicePowers: string[] = [
		"lightsail:GetContainerServicePowers",
	];
	/** IAM actions required for the GetContainerServices API call. */
	static readonly opGetContainerServices: string[] = [
		"lightsail:GetContainerServices",
	];
	/** IAM actions required for the GetCostEstimate API call. */
	static readonly opGetCostEstimate: string[] = ["lightsail:GetCostEstimate"];
	/** IAM actions required for the GetDisk API call. */
	static readonly opGetDisk: string[] = ["lightsail:GetDisk"];
	/** IAM actions required for the GetDiskSnapshot API call. */
	static readonly opGetDiskSnapshot: string[] = ["lightsail:GetDiskSnapshot"];
	/** IAM actions required for the GetDiskSnapshots API call. */
	static readonly opGetDiskSnapshots: string[] = ["lightsail:GetDiskSnapshots"];
	/** IAM actions required for the GetDisks API call. */
	static readonly opGetDisks: string[] = ["lightsail:GetDisks"];
	/** IAM actions required for the GetDistributionBundles API call. */
	static readonly opGetDistributionBundles: string[] = [
		"lightsail:GetDistributionBundles",
	];
	/** IAM actions required for the GetDistributionLatestCacheReset API call. */
	static readonly opGetDistributionLatestCacheReset: string[] = [
		"lightsail:GetDistributionLatestCacheReset",
	];
	/** IAM actions required for the GetDistributionMetricData API call. */
	static readonly opGetDistributionMetricData: string[] = [
		"lightsail:GetDistributionMetricData",
	];
	/** IAM actions required for the GetDistributions API call. */
	static readonly opGetDistributions: string[] = ["lightsail:GetDistributions"];
	/** IAM actions required for the GetDomain API call. */
	static readonly opGetDomain: string[] = ["lightsail:GetDomain"];
	/** IAM actions required for the GetDomains API call. */
	static readonly opGetDomains: string[] = ["lightsail:GetDomains"];
	/** IAM actions required for the GetExportSnapshotRecords API call. */
	static readonly opGetExportSnapshotRecords: string[] = [
		"lightsail:GetExportSnapshotRecords",
	];
	/** IAM actions required for the GetInstance API call. */
	static readonly opGetInstance: string[] = ["lightsail:GetInstance"];
	/** IAM actions required for the GetInstanceAccessDetails API call. */
	static readonly opGetInstanceAccessDetails: string[] = [
		"lightsail:GetInstanceAccessDetails",
	];
	/** IAM actions required for the GetInstanceMetricData API call. */
	static readonly opGetInstanceMetricData: string[] = [
		"lightsail:GetInstanceMetricData",
	];
	/** IAM actions required for the GetInstancePortStates API call. */
	static readonly opGetInstancePortStates: string[] = [
		"lightsail:GetInstancePortStates",
	];
	/** IAM actions required for the GetInstanceSnapshot API call. */
	static readonly opGetInstanceSnapshot: string[] = [
		"lightsail:GetInstanceSnapshot",
	];
	/** IAM actions required for the GetInstanceSnapshots API call. */
	static readonly opGetInstanceSnapshots: string[] = [
		"lightsail:GetInstanceSnapshots",
	];
	/** IAM actions required for the GetInstanceState API call. */
	static readonly opGetInstanceState: string[] = ["lightsail:GetInstanceState"];
	/** IAM actions required for the GetInstances API call. */
	static readonly opGetInstances: string[] = ["lightsail:GetInstances"];
	/** IAM actions required for the GetKeyPair API call. */
	static readonly opGetKeyPair: string[] = ["lightsail:GetKeyPair"];
	/** IAM actions required for the GetKeyPairs API call. */
	static readonly opGetKeyPairs: string[] = ["lightsail:GetKeyPairs"];
	/** IAM actions required for the GetLoadBalancer API call. */
	static readonly opGetLoadBalancer: string[] = ["lightsail:GetLoadBalancer"];
	/** IAM actions required for the GetLoadBalancerMetricData API call. */
	static readonly opGetLoadBalancerMetricData: string[] = [
		"lightsail:GetLoadBalancerMetricData",
	];
	/** IAM actions required for the GetLoadBalancerTlsCertificates API call. */
	static readonly opGetLoadBalancerTlsCertificates: string[] = [
		"lightsail:GetLoadBalancerTlsCertificates",
	];
	/** IAM actions required for the GetLoadBalancerTlsPolicies API call. */
	static readonly opGetLoadBalancerTlsPolicies: string[] = [
		"lightsail:GetLoadBalancerTlsPolicies",
	];
	/** IAM actions required for the GetLoadBalancers API call. */
	static readonly opGetLoadBalancers: string[] = ["lightsail:GetLoadBalancers"];
	/** IAM actions required for the GetOperation API call. */
	static readonly opGetOperation: string[] = ["lightsail:GetOperation"];
	/** IAM actions required for the GetOperations API call. */
	static readonly opGetOperations: string[] = ["lightsail:GetOperations"];
	/** IAM actions required for the GetOperationsForResource API call. */
	static readonly opGetOperationsForResource: string[] = [
		"lightsail:GetOperationsForResource",
	];
	/** IAM actions required for the GetProfile API call. */
	static readonly opGetProfile: string[] = [];
	/** IAM actions required for the GetRegions API call. */
	static readonly opGetRegions: string[] = ["lightsail:GetRegions"];
	/** IAM actions required for the GetRelationalDatabase API call. */
	static readonly opGetRelationalDatabase: string[] = [
		"lightsail:GetRelationalDatabase",
	];
	/** IAM actions required for the GetRelationalDatabaseBlueprints API call. */
	static readonly opGetRelationalDatabaseBlueprints: string[] = [
		"lightsail:GetRelationalDatabaseBlueprints",
	];
	/** IAM actions required for the GetRelationalDatabaseBundles API call. */
	static readonly opGetRelationalDatabaseBundles: string[] = [
		"lightsail:GetRelationalDatabaseBundles",
	];
	/** IAM actions required for the GetRelationalDatabaseEvents API call. */
	static readonly opGetRelationalDatabaseEvents: string[] = [
		"lightsail:GetRelationalDatabaseEvents",
	];
	/** IAM actions required for the GetRelationalDatabaseLogEvents API call. */
	static readonly opGetRelationalDatabaseLogEvents: string[] = [
		"lightsail:GetRelationalDatabaseLogEvents",
	];
	/** IAM actions required for the GetRelationalDatabaseLogStreams API call. */
	static readonly opGetRelationalDatabaseLogStreams: string[] = [
		"lightsail:GetRelationalDatabaseLogStreams",
	];
	/** IAM actions required for the GetRelationalDatabaseMasterUserPassword API call. */
	static readonly opGetRelationalDatabaseMasterUserPassword: string[] = [
		"lightsail:GetRelationalDatabaseMasterUserPassword",
	];
	/** IAM actions required for the GetRelationalDatabaseMetricData API call. */
	static readonly opGetRelationalDatabaseMetricData: string[] = [
		"lightsail:GetRelationalDatabaseMetricData",
	];
	/** IAM actions required for the GetRelationalDatabaseParameters API call. */
	static readonly opGetRelationalDatabaseParameters: string[] = [
		"lightsail:GetRelationalDatabaseParameters",
	];
	/** IAM actions required for the GetRelationalDatabaseSnapshot API call. */
	static readonly opGetRelationalDatabaseSnapshot: string[] = [
		"lightsail:GetRelationalDatabaseSnapshot",
	];
	/** IAM actions required for the GetRelationalDatabaseSnapshots API call. */
	static readonly opGetRelationalDatabaseSnapshots: string[] = [
		"lightsail:GetRelationalDatabaseSnapshots",
	];
	/** IAM actions required for the GetRelationalDatabases API call. */
	static readonly opGetRelationalDatabases: string[] = [
		"lightsail:GetRelationalDatabases",
	];
	/** IAM actions required for the GetSetupHistory API call. */
	static readonly opGetSetupHistory: string[] = ["lightsail:GetSetupHistory"];
	/** IAM actions required for the GetStaticIp API call. */
	static readonly opGetStaticIp: string[] = ["lightsail:GetStaticIp"];
	/** IAM actions required for the GetStaticIps API call. */
	static readonly opGetStaticIps: string[] = ["lightsail:GetStaticIps"];
	/** IAM actions required for the ImportKeyPair API call. */
	static readonly ImportKeyPair: string[] = ["lightsail:ImportKeyPair"];
	/** IAM actions required for the IsVpcPeered API call. */
	static readonly IsVpcPeered: string[] = ["lightsail:IsVpcPeered"];
	/** IAM actions required for the OpenInstancePublicPorts API call. */
	static readonly OpenInstancePublicPorts: string[] = [
		"lightsail:OpenInstancePublicPorts",
	];
	/** IAM actions required for the PeerVpc API call. */
	static readonly PeerVpc: string[] = ["lightsail:PeerVpc"];
	/** IAM actions required for the PutAlarm API call. */
	static readonly PutAlarm: string[] = [
		"lightsail:PutAlarm",
		"lightsail:TagResource",
	];
	/** IAM actions required for the PutInstancePublicPorts API call. */
	static readonly PutInstancePublicPorts: string[] = [
		"lightsail:PutInstancePublicPorts",
	];
	/** IAM actions required for the RebootInstance API call. */
	static readonly RebootInstance: string[] = ["lightsail:RebootInstance"];
	/** IAM actions required for the RebootRelationalDatabase API call. */
	static readonly RebootRelationalDatabase: string[] = [
		"lightsail:RebootRelationalDatabase",
	];
	/** IAM actions required for the RegisterContainerImage API call. */
	static readonly RegisterContainerImage: string[] = [
		"lightsail:RegisterContainerImage",
	];
	/** IAM actions required for the ReleaseStaticIp API call. */
	static readonly ReleaseStaticIp: string[] = ["lightsail:ReleaseStaticIp"];
	/** IAM actions required for the ResetDistributionCache API call. */
	static readonly ResetDistributionCache: string[] = [
		"lightsail:ResetDistributionCache",
	];
	/** IAM actions required for the SendContactMethodVerification API call. */
	static readonly SendContactMethodVerification: string[] = [
		"lightsail:SendContactMethodVerification",
	];
	/** IAM actions required for the SetIpAddressType API call. */
	static readonly opSetIpAddressType: string[] = ["lightsail:SetIpAddressType"];
	/** IAM actions required for the SetResourceAccessForBucket API call. */
	static readonly opSetResourceAccessForBucket: string[] = [
		"lightsail:SetResourceAccessForBucket",
	];
	/** IAM actions required for the SetupInstanceHttps API call. */
	static readonly SetupInstanceHttps: string[] = [
		"lightsail:SetupInstanceHttps",
	];
	/** IAM actions required for the StartGUISession API call. */
	static readonly StartGUISession: string[] = ["lightsail:StartGUISession"];
	/** IAM actions required for the StartInstance API call. */
	static readonly StartInstance: string[] = ["lightsail:StartInstance"];
	/** IAM actions required for the StartRelationalDatabase API call. */
	static readonly StartRelationalDatabase: string[] = [
		"lightsail:StartRelationalDatabase",
	];
	/** IAM actions required for the StopGUISession API call. */
	static readonly StopGUISession: string[] = ["lightsail:StopGUISession"];
	/** IAM actions required for the StopInstance API call. */
	static readonly StopInstance: string[] = ["lightsail:StopInstance"];
	/** IAM actions required for the StopRelationalDatabase API call. */
	static readonly StopRelationalDatabase: string[] = [
		"lightsail:StopRelationalDatabase",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["lightsail:TagResource"];
	/** IAM actions required for the TestAlarm API call. */
	static readonly TestAlarm: string[] = ["lightsail:TestAlarm"];
	/** IAM actions required for the UnpeerVpc API call. */
	static readonly UnpeerVpc: string[] = ["lightsail:UnpeerVpc"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["lightsail:UntagResource"];
	/** IAM actions required for the UpdateBucket API call. */
	static readonly UpdateBucket: string[] = ["lightsail:UpdateBucket"];
	/** IAM actions required for the UpdateBucketBundle API call. */
	static readonly UpdateBucketBundle: string[] = [
		"lightsail:UpdateBucketBundle",
	];
	/** IAM actions required for the UpdateContainerService API call. */
	static readonly UpdateContainerService: string[] = [
		"lightsail:UpdateContainerService",
	];
	/** IAM actions required for the UpdateDistribution API call. */
	static readonly UpdateDistribution: string[] = [
		"lightsail:UpdateDistribution",
	];
	/** IAM actions required for the UpdateDistributionBundle API call. */
	static readonly UpdateDistributionBundle: string[] = [
		"lightsail:UpdateDistributionBundle",
	];
	/** IAM actions required for the UpdateDomainEntry API call. */
	static readonly UpdateDomainEntry: string[] = ["lightsail:UpdateDomainEntry"];
	/** IAM actions required for the UpdateInstanceMetadataOptions API call. */
	static readonly UpdateInstanceMetadataOptions: string[] = [
		"lightsail:UpdateInstanceMetadataOptions",
	];
	/** IAM actions required for the UpdateLoadBalancerAttribute API call. */
	static readonly UpdateLoadBalancerAttribute: string[] = [
		"lightsail:UpdateLoadBalancerAttribute",
	];
	/** IAM actions required for the UpdateRelationalDatabase API call. */
	static readonly UpdateRelationalDatabase: string[] = [
		"lightsail:UpdateRelationalDatabase",
	];
	/** IAM actions required for the UpdateRelationalDatabaseParameters API call. */
	static readonly UpdateRelationalDatabaseParameters: string[] = [
		"lightsail:UpdateRelationalDatabaseParameters",
	];
}

/**
 * Condition key constants and builders for lightsail.
 */
export class LightSailConditions {
	/** Condition keys applicable to the CreateBucket action. */
	static readonly CreateBucketConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCertificate action. */
	static readonly CreateCertificateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContactMethod action. */
	static readonly CreateContactMethodConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContainerService action. */
	static readonly CreateContainerServiceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDisk action. */
	static readonly CreateDiskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDiskFromSnapshot action. */
	static readonly CreateDiskFromSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDiskSnapshot action. */
	static readonly CreateDiskSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDistribution action. */
	static readonly CreateDistributionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CreateDomainConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInstanceSnapshot action. */
	static readonly CreateInstanceSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInstances action. */
	static readonly CreateInstancesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInstancesFromSnapshot action. */
	static readonly CreateInstancesFromSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKeyPair action. */
	static readonly CreateKeyPairConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLoadBalancer action. */
	static readonly CreateLoadBalancerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRelationalDatabase action. */
	static readonly CreateRelationalDatabaseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRelationalDatabaseFromSnapshot action. */
	static readonly CreateRelationalDatabaseFromSnapshotConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateRelationalDatabaseSnapshot action. */
	static readonly CreateRelationalDatabaseSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutAlarm action. */
	static readonly PutAlarmConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

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
