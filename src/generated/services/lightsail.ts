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
	static readonly ALLOCATE_STATIC_IP = "lightsail:AllocateStaticIp";
	/** [Write] lightsail:AttachCertificateToDistribution */
	static readonly ATTACH_CERTIFICATE_TO_DISTRIBUTION =
		"lightsail:AttachCertificateToDistribution";
	/** [Write] lightsail:AttachDisk */
	static readonly ATTACH_DISK = "lightsail:AttachDisk";
	/** [Write] lightsail:AttachInstancesToLoadBalancer */
	static readonly ATTACH_INSTANCES_TO_LOAD_BALANCER =
		"lightsail:AttachInstancesToLoadBalancer";
	/** [Write] lightsail:AttachLoadBalancerTlsCertificate */
	static readonly ATTACH_LOAD_BALANCER_TLS_CERTIFICATE =
		"lightsail:AttachLoadBalancerTlsCertificate";
	/** [Write] lightsail:AttachStaticIp */
	static readonly ATTACH_STATIC_IP = "lightsail:AttachStaticIp";
	/** [Write] lightsail:CloseInstancePublicPorts */
	static readonly CLOSE_INSTANCE_PUBLIC_PORTS =
		"lightsail:CloseInstancePublicPorts";
	/** [Write] lightsail:CopySnapshot */
	static readonly COPY_SNAPSHOT = "lightsail:CopySnapshot";
	/** [Write] lightsail:CreateBucket */
	static readonly CREATE_BUCKET = "lightsail:CreateBucket";
	/** [Write] lightsail:CreateBucketAccessKey */
	static readonly CREATE_BUCKET_ACCESS_KEY = "lightsail:CreateBucketAccessKey";
	/** [Write] lightsail:CreateCertificate */
	static readonly CREATE_CERTIFICATE = "lightsail:CreateCertificate";
	/** [Write] lightsail:CreateCloudFormationStack */
	static readonly CREATE_CLOUD_FORMATION_STACK =
		"lightsail:CreateCloudFormationStack";
	/** [Write] lightsail:CreateContactMethod */
	static readonly CREATE_CONTACT_METHOD = "lightsail:CreateContactMethod";
	/** [Write] lightsail:CreateContainerService */
	static readonly CREATE_CONTAINER_SERVICE = "lightsail:CreateContainerService";
	/** [Write] lightsail:CreateContainerServiceDeployment */
	static readonly CREATE_CONTAINER_SERVICE_DEPLOYMENT =
		"lightsail:CreateContainerServiceDeployment";
	/** [Write] lightsail:CreateContainerServiceRegistryLogin */
	static readonly CREATE_CONTAINER_SERVICE_REGISTRY_LOGIN =
		"lightsail:CreateContainerServiceRegistryLogin";
	/** [Write] lightsail:CreateDisk */
	static readonly CREATE_DISK = "lightsail:CreateDisk";
	/** [Write] lightsail:CreateDiskFromSnapshot */
	static readonly CREATE_DISK_FROM_SNAPSHOT =
		"lightsail:CreateDiskFromSnapshot";
	/** [Write] lightsail:CreateDiskSnapshot */
	static readonly CREATE_DISK_SNAPSHOT = "lightsail:CreateDiskSnapshot";
	/** [Write] lightsail:CreateDistribution */
	static readonly CREATE_DISTRIBUTION = "lightsail:CreateDistribution";
	/** [Write] lightsail:CreateDomain */
	static readonly CREATE_DOMAIN = "lightsail:CreateDomain";
	/** [Write] lightsail:CreateDomainEntry */
	static readonly CREATE_DOMAIN_ENTRY = "lightsail:CreateDomainEntry";
	/** [Write] lightsail:CreateGUISessionAccessDetails */
	static readonly CREATE_GUI_SESSION_ACCESS_DETAILS =
		"lightsail:CreateGUISessionAccessDetails";
	/** [Write] lightsail:CreateInstanceSnapshot */
	static readonly CREATE_INSTANCE_SNAPSHOT = "lightsail:CreateInstanceSnapshot";
	/** [Write] lightsail:CreateInstances */
	static readonly CREATE_INSTANCES = "lightsail:CreateInstances";
	/** [Write] lightsail:CreateInstancesFromSnapshot */
	static readonly CREATE_INSTANCES_FROM_SNAPSHOT =
		"lightsail:CreateInstancesFromSnapshot";
	/** [Write] lightsail:CreateKeyPair */
	static readonly CREATE_KEY_PAIR = "lightsail:CreateKeyPair";
	/** [Write] lightsail:CreateLoadBalancer */
	static readonly CREATE_LOAD_BALANCER = "lightsail:CreateLoadBalancer";
	/** [Write] lightsail:CreateLoadBalancerTlsCertificate */
	static readonly CREATE_LOAD_BALANCER_TLS_CERTIFICATE =
		"lightsail:CreateLoadBalancerTlsCertificate";
	/** [Write] lightsail:CreateRelationalDatabase */
	static readonly CREATE_RELATIONAL_DATABASE =
		"lightsail:CreateRelationalDatabase";
	/** [Write] lightsail:CreateRelationalDatabaseFromSnapshot */
	static readonly CREATE_RELATIONAL_DATABASE_FROM_SNAPSHOT =
		"lightsail:CreateRelationalDatabaseFromSnapshot";
	/** [Write] lightsail:CreateRelationalDatabaseSnapshot */
	static readonly CREATE_RELATIONAL_DATABASE_SNAPSHOT =
		"lightsail:CreateRelationalDatabaseSnapshot";
	/** [Write] lightsail:DeleteAlarm */
	static readonly DELETE_ALARM = "lightsail:DeleteAlarm";
	/** [Write] lightsail:DeleteAutoSnapshot */
	static readonly DELETE_AUTO_SNAPSHOT = "lightsail:DeleteAutoSnapshot";
	/** [Write] lightsail:DeleteBucket */
	static readonly DELETE_BUCKET = "lightsail:DeleteBucket";
	/** [Write] lightsail:DeleteBucketAccessKey */
	static readonly DELETE_BUCKET_ACCESS_KEY = "lightsail:DeleteBucketAccessKey";
	/** [Write] lightsail:DeleteCertificate */
	static readonly DELETE_CERTIFICATE = "lightsail:DeleteCertificate";
	/** [Write] lightsail:DeleteContactMethod */
	static readonly DELETE_CONTACT_METHOD = "lightsail:DeleteContactMethod";
	/** [Write] lightsail:DeleteContainerImage */
	static readonly DELETE_CONTAINER_IMAGE = "lightsail:DeleteContainerImage";
	/** [Write] lightsail:DeleteContainerService */
	static readonly DELETE_CONTAINER_SERVICE = "lightsail:DeleteContainerService";
	/** [Write] lightsail:DeleteDisk */
	static readonly DELETE_DISK = "lightsail:DeleteDisk";
	/** [Write] lightsail:DeleteDiskSnapshot */
	static readonly DELETE_DISK_SNAPSHOT = "lightsail:DeleteDiskSnapshot";
	/** [Write] lightsail:DeleteDistribution */
	static readonly DELETE_DISTRIBUTION = "lightsail:DeleteDistribution";
	/** [Write] lightsail:DeleteDomain */
	static readonly DELETE_DOMAIN = "lightsail:DeleteDomain";
	/** [Write] lightsail:DeleteDomainEntry */
	static readonly DELETE_DOMAIN_ENTRY = "lightsail:DeleteDomainEntry";
	/** [Write] lightsail:DeleteInstance */
	static readonly DELETE_INSTANCE = "lightsail:DeleteInstance";
	/** [Write] lightsail:DeleteInstanceSnapshot */
	static readonly DELETE_INSTANCE_SNAPSHOT = "lightsail:DeleteInstanceSnapshot";
	/** [Write] lightsail:DeleteKeyPair */
	static readonly DELETE_KEY_PAIR = "lightsail:DeleteKeyPair";
	/** [Write] lightsail:DeleteKnownHostKeys */
	static readonly DELETE_KNOWN_HOST_KEYS = "lightsail:DeleteKnownHostKeys";
	/** [Write] lightsail:DeleteLoadBalancer */
	static readonly DELETE_LOAD_BALANCER = "lightsail:DeleteLoadBalancer";
	/** [Write] lightsail:DeleteLoadBalancerTlsCertificate */
	static readonly DELETE_LOAD_BALANCER_TLS_CERTIFICATE =
		"lightsail:DeleteLoadBalancerTlsCertificate";
	/** [Write] lightsail:DeleteRelationalDatabase */
	static readonly DELETE_RELATIONAL_DATABASE =
		"lightsail:DeleteRelationalDatabase";
	/** [Write] lightsail:DeleteRelationalDatabaseSnapshot */
	static readonly DELETE_RELATIONAL_DATABASE_SNAPSHOT =
		"lightsail:DeleteRelationalDatabaseSnapshot";
	/** [Write] lightsail:DetachCertificateFromDistribution */
	static readonly DETACH_CERTIFICATE_FROM_DISTRIBUTION =
		"lightsail:DetachCertificateFromDistribution";
	/** [Write] lightsail:DetachDisk */
	static readonly DETACH_DISK = "lightsail:DetachDisk";
	/** [Write] lightsail:DetachInstancesFromLoadBalancer */
	static readonly DETACH_INSTANCES_FROM_LOAD_BALANCER =
		"lightsail:DetachInstancesFromLoadBalancer";
	/** [Write] lightsail:DetachStaticIp */
	static readonly DETACH_STATIC_IP = "lightsail:DetachStaticIp";
	/** [Write] lightsail:DisableAddOn */
	static readonly DISABLE_ADD_ON = "lightsail:DisableAddOn";
	/** [Write] lightsail:DownloadDefaultKeyPair */
	static readonly DOWNLOAD_DEFAULT_KEY_PAIR =
		"lightsail:DownloadDefaultKeyPair";
	/** [Write] lightsail:EnableAddOn */
	static readonly ENABLE_ADD_ON = "lightsail:EnableAddOn";
	/** [Write] lightsail:ExportSnapshot */
	static readonly EXPORT_SNAPSHOT = "lightsail:ExportSnapshot";
	/** [Read] lightsail:GetActiveNames */
	static readonly GET_ACTIVE_NAMES = "lightsail:GetActiveNames";
	/** [Read] lightsail:GetAlarms */
	static readonly GET_ALARMS = "lightsail:GetAlarms";
	/** [Read] lightsail:GetAutoSnapshots */
	static readonly GET_AUTO_SNAPSHOTS = "lightsail:GetAutoSnapshots";
	/** [Read] lightsail:GetBlueprints */
	static readonly GET_BLUEPRINTS = "lightsail:GetBlueprints";
	/** [Read] lightsail:GetBucketAccessKeys */
	static readonly GET_BUCKET_ACCESS_KEYS = "lightsail:GetBucketAccessKeys";
	/** [Read] lightsail:GetBucketBundles */
	static readonly GET_BUCKET_BUNDLES = "lightsail:GetBucketBundles";
	/** [Read] lightsail:GetBucketMetricData */
	static readonly GET_BUCKET_METRIC_DATA = "lightsail:GetBucketMetricData";
	/** [Read] lightsail:GetBuckets */
	static readonly GET_BUCKETS = "lightsail:GetBuckets";
	/** [Read] lightsail:GetBundles */
	static readonly GET_BUNDLES = "lightsail:GetBundles";
	/** [Read] lightsail:GetCertificates */
	static readonly GET_CERTIFICATES = "lightsail:GetCertificates";
	/** [Read] lightsail:GetCloudFormationStackRecords */
	static readonly GET_CLOUD_FORMATION_STACK_RECORDS =
		"lightsail:GetCloudFormationStackRecords";
	/** [Read] lightsail:GetContactMethods */
	static readonly GET_CONTACT_METHODS = "lightsail:GetContactMethods";
	/** [Read] lightsail:GetContainerAPIMetadata */
	static readonly GET_CONTAINER_API_METADATA =
		"lightsail:GetContainerAPIMetadata";
	/** [Read] lightsail:GetContainerImages */
	static readonly GET_CONTAINER_IMAGES = "lightsail:GetContainerImages";
	/** [Read] lightsail:GetContainerLog */
	static readonly GET_CONTAINER_LOG = "lightsail:GetContainerLog";
	/** [Read] lightsail:GetContainerServiceDeployments */
	static readonly GET_CONTAINER_SERVICE_DEPLOYMENTS =
		"lightsail:GetContainerServiceDeployments";
	/** [Read] lightsail:GetContainerServiceMetricData */
	static readonly GET_CONTAINER_SERVICE_METRIC_DATA =
		"lightsail:GetContainerServiceMetricData";
	/** [Read] lightsail:GetContainerServicePowers */
	static readonly GET_CONTAINER_SERVICE_POWERS =
		"lightsail:GetContainerServicePowers";
	/** [Read] lightsail:GetContainerServices */
	static readonly GET_CONTAINER_SERVICES = "lightsail:GetContainerServices";
	/** [Read] lightsail:GetCostEstimate */
	static readonly GET_COST_ESTIMATE = "lightsail:GetCostEstimate";
	/** [Read] lightsail:GetDisk */
	static readonly GET_DISK = "lightsail:GetDisk";
	/** [Read] lightsail:GetDiskSnapshot */
	static readonly GET_DISK_SNAPSHOT = "lightsail:GetDiskSnapshot";
	/** [Read] lightsail:GetDiskSnapshots */
	static readonly GET_DISK_SNAPSHOTS = "lightsail:GetDiskSnapshots";
	/** [Read] lightsail:GetDisks */
	static readonly GET_DISKS = "lightsail:GetDisks";
	/** [Read] lightsail:GetDistributionBundles */
	static readonly GET_DISTRIBUTION_BUNDLES = "lightsail:GetDistributionBundles";
	/** [Read] lightsail:GetDistributionLatestCacheReset */
	static readonly GET_DISTRIBUTION_LATEST_CACHE_RESET =
		"lightsail:GetDistributionLatestCacheReset";
	/** [Read] lightsail:GetDistributionMetricData */
	static readonly GET_DISTRIBUTION_METRIC_DATA =
		"lightsail:GetDistributionMetricData";
	/** [Read] lightsail:GetDistributions */
	static readonly GET_DISTRIBUTIONS = "lightsail:GetDistributions";
	/** [Read] lightsail:GetDomain */
	static readonly GET_DOMAIN = "lightsail:GetDomain";
	/** [Read] lightsail:GetDomains */
	static readonly GET_DOMAINS = "lightsail:GetDomains";
	/** [Read] lightsail:GetExportSnapshotRecords */
	static readonly GET_EXPORT_SNAPSHOT_RECORDS =
		"lightsail:GetExportSnapshotRecords";
	/** [Read] lightsail:GetInstance */
	static readonly GET_INSTANCE = "lightsail:GetInstance";
	/** [Write] lightsail:GetInstanceAccessDetails */
	static readonly GET_INSTANCE_ACCESS_DETAILS =
		"lightsail:GetInstanceAccessDetails";
	/** [Read] lightsail:GetInstanceMetricData */
	static readonly GET_INSTANCE_METRIC_DATA = "lightsail:GetInstanceMetricData";
	/** [Read] lightsail:GetInstancePortStates */
	static readonly GET_INSTANCE_PORT_STATES = "lightsail:GetInstancePortStates";
	/** [Read] lightsail:GetInstanceSnapshot */
	static readonly GET_INSTANCE_SNAPSHOT = "lightsail:GetInstanceSnapshot";
	/** [Read] lightsail:GetInstanceSnapshots */
	static readonly GET_INSTANCE_SNAPSHOTS = "lightsail:GetInstanceSnapshots";
	/** [Read] lightsail:GetInstanceState */
	static readonly GET_INSTANCE_STATE = "lightsail:GetInstanceState";
	/** [Read] lightsail:GetInstances */
	static readonly GET_INSTANCES = "lightsail:GetInstances";
	/** [Read] lightsail:GetKeyPair */
	static readonly GET_KEY_PAIR = "lightsail:GetKeyPair";
	/** [Read] lightsail:GetKeyPairs */
	static readonly GET_KEY_PAIRS = "lightsail:GetKeyPairs";
	/** [Read] lightsail:GetLoadBalancer */
	static readonly GET_LOAD_BALANCER = "lightsail:GetLoadBalancer";
	/** [Read] lightsail:GetLoadBalancerMetricData */
	static readonly GET_LOAD_BALANCER_METRIC_DATA =
		"lightsail:GetLoadBalancerMetricData";
	/** [Read] lightsail:GetLoadBalancerTlsCertificates */
	static readonly GET_LOAD_BALANCER_TLS_CERTIFICATES =
		"lightsail:GetLoadBalancerTlsCertificates";
	/** [Read] lightsail:GetLoadBalancerTlsPolicies */
	static readonly GET_LOAD_BALANCER_TLS_POLICIES =
		"lightsail:GetLoadBalancerTlsPolicies";
	/** [Read] lightsail:GetLoadBalancers */
	static readonly GET_LOAD_BALANCERS = "lightsail:GetLoadBalancers";
	/** [Read] lightsail:GetOperation */
	static readonly GET_OPERATION = "lightsail:GetOperation";
	/** [Read] lightsail:GetOperations */
	static readonly GET_OPERATIONS = "lightsail:GetOperations";
	/** [Read] lightsail:GetOperationsForResource */
	static readonly GET_OPERATIONS_FOR_RESOURCE =
		"lightsail:GetOperationsForResource";
	/** [Read] lightsail:GetRegions */
	static readonly GET_REGIONS = "lightsail:GetRegions";
	/** [Read] lightsail:GetRelationalDatabase */
	static readonly GET_RELATIONAL_DATABASE = "lightsail:GetRelationalDatabase";
	/** [Read] lightsail:GetRelationalDatabaseBlueprints */
	static readonly GET_RELATIONAL_DATABASE_BLUEPRINTS =
		"lightsail:GetRelationalDatabaseBlueprints";
	/** [Read] lightsail:GetRelationalDatabaseBundles */
	static readonly GET_RELATIONAL_DATABASE_BUNDLES =
		"lightsail:GetRelationalDatabaseBundles";
	/** [Read] lightsail:GetRelationalDatabaseEvents */
	static readonly GET_RELATIONAL_DATABASE_EVENTS =
		"lightsail:GetRelationalDatabaseEvents";
	/** [Read] lightsail:GetRelationalDatabaseLogEvents */
	static readonly GET_RELATIONAL_DATABASE_LOG_EVENTS =
		"lightsail:GetRelationalDatabaseLogEvents";
	/** [Read] lightsail:GetRelationalDatabaseLogStreams */
	static readonly GET_RELATIONAL_DATABASE_LOG_STREAMS =
		"lightsail:GetRelationalDatabaseLogStreams";
	/** [Write] lightsail:GetRelationalDatabaseMasterUserPassword */
	static readonly GET_RELATIONAL_DATABASE_MASTER_USER_PASSWORD =
		"lightsail:GetRelationalDatabaseMasterUserPassword";
	/** [Read] lightsail:GetRelationalDatabaseMetricData */
	static readonly GET_RELATIONAL_DATABASE_METRIC_DATA =
		"lightsail:GetRelationalDatabaseMetricData";
	/** [Read] lightsail:GetRelationalDatabaseParameters */
	static readonly GET_RELATIONAL_DATABASE_PARAMETERS =
		"lightsail:GetRelationalDatabaseParameters";
	/** [Read] lightsail:GetRelationalDatabaseSnapshot */
	static readonly GET_RELATIONAL_DATABASE_SNAPSHOT =
		"lightsail:GetRelationalDatabaseSnapshot";
	/** [Read] lightsail:GetRelationalDatabaseSnapshots */
	static readonly GET_RELATIONAL_DATABASE_SNAPSHOTS =
		"lightsail:GetRelationalDatabaseSnapshots";
	/** [Read] lightsail:GetRelationalDatabases */
	static readonly GET_RELATIONAL_DATABASES = "lightsail:GetRelationalDatabases";
	/** [Read] lightsail:GetSetupHistory */
	static readonly GET_SETUP_HISTORY = "lightsail:GetSetupHistory";
	/** [Read] lightsail:GetStaticIp */
	static readonly GET_STATIC_IP = "lightsail:GetStaticIp";
	/** [Read] lightsail:GetStaticIps */
	static readonly GET_STATIC_IPS = "lightsail:GetStaticIps";
	/** [Write] lightsail:ImportKeyPair */
	static readonly IMPORT_KEY_PAIR = "lightsail:ImportKeyPair";
	/** [Read] lightsail:IsVpcPeered */
	static readonly IS_VPC_PEERED = "lightsail:IsVpcPeered";
	/** [Write] lightsail:OpenInstancePublicPorts */
	static readonly OPEN_INSTANCE_PUBLIC_PORTS =
		"lightsail:OpenInstancePublicPorts";
	/** [Write] lightsail:PeerVpc */
	static readonly PEER_VPC = "lightsail:PeerVpc";
	/** [Write] lightsail:PutAlarm */
	static readonly PUT_ALARM = "lightsail:PutAlarm";
	/** [Write] lightsail:PutInstancePublicPorts */
	static readonly PUT_INSTANCE_PUBLIC_PORTS =
		"lightsail:PutInstancePublicPorts";
	/** [Write] lightsail:RebootInstance */
	static readonly REBOOT_INSTANCE = "lightsail:RebootInstance";
	/** [Write] lightsail:RebootRelationalDatabase */
	static readonly REBOOT_RELATIONAL_DATABASE =
		"lightsail:RebootRelationalDatabase";
	/** [Write] lightsail:RegisterContainerImage */
	static readonly REGISTER_CONTAINER_IMAGE = "lightsail:RegisterContainerImage";
	/** [Write] lightsail:ReleaseStaticIp */
	static readonly RELEASE_STATIC_IP = "lightsail:ReleaseStaticIp";
	/** [Write] lightsail:ResetDistributionCache */
	static readonly RESET_DISTRIBUTION_CACHE = "lightsail:ResetDistributionCache";
	/** [Write] lightsail:SendContactMethodVerification */
	static readonly SEND_CONTACT_METHOD_VERIFICATION =
		"lightsail:SendContactMethodVerification";
	/** [Write] lightsail:SetIpAddressType */
	static readonly SET_IP_ADDRESS_TYPE = "lightsail:SetIpAddressType";
	/** [Write] lightsail:SetResourceAccessForBucket */
	static readonly SET_RESOURCE_ACCESS_FOR_BUCKET =
		"lightsail:SetResourceAccessForBucket";
	/** [Write] lightsail:SetupInstanceHttps */
	static readonly SETUP_INSTANCE_HTTPS = "lightsail:SetupInstanceHttps";
	/** [Write] lightsail:StartGUISession */
	static readonly START_GUI_SESSION = "lightsail:StartGUISession";
	/** [Write] lightsail:StartInstance */
	static readonly START_INSTANCE = "lightsail:StartInstance";
	/** [Write] lightsail:StartRelationalDatabase */
	static readonly START_RELATIONAL_DATABASE =
		"lightsail:StartRelationalDatabase";
	/** [Write] lightsail:StopGUISession */
	static readonly STOP_GUI_SESSION = "lightsail:StopGUISession";
	/** [Write] lightsail:StopInstance */
	static readonly STOP_INSTANCE = "lightsail:StopInstance";
	/** [Write] lightsail:StopRelationalDatabase */
	static readonly STOP_RELATIONAL_DATABASE = "lightsail:StopRelationalDatabase";
	/** [Tagging] lightsail:TagResource */
	static readonly TAG_RESOURCE = "lightsail:TagResource";
	/** [Write] lightsail:TestAlarm */
	static readonly TEST_ALARM = "lightsail:TestAlarm";
	/** [Write] lightsail:UnpeerVpc */
	static readonly UNPEER_VPC = "lightsail:UnpeerVpc";
	/** [Tagging] lightsail:UntagResource */
	static readonly UNTAG_RESOURCE = "lightsail:UntagResource";
	/** [Write] lightsail:UpdateBucket */
	static readonly UPDATE_BUCKET = "lightsail:UpdateBucket";
	/** [Write] lightsail:UpdateBucketBundle */
	static readonly UPDATE_BUCKET_BUNDLE = "lightsail:UpdateBucketBundle";
	/** [Write] lightsail:UpdateContainerService */
	static readonly UPDATE_CONTAINER_SERVICE = "lightsail:UpdateContainerService";
	/** [Write] lightsail:UpdateDistribution */
	static readonly UPDATE_DISTRIBUTION = "lightsail:UpdateDistribution";
	/** [Write] lightsail:UpdateDistributionBundle */
	static readonly UPDATE_DISTRIBUTION_BUNDLE =
		"lightsail:UpdateDistributionBundle";
	/** [Write] lightsail:UpdateDomainEntry */
	static readonly UPDATE_DOMAIN_ENTRY = "lightsail:UpdateDomainEntry";
	/** [Write] lightsail:UpdateInstanceMetadataOptions */
	static readonly UPDATE_INSTANCE_METADATA_OPTIONS =
		"lightsail:UpdateInstanceMetadataOptions";
	/** [Write] lightsail:UpdateLoadBalancerAttribute */
	static readonly UPDATE_LOAD_BALANCER_ATTRIBUTE =
		"lightsail:UpdateLoadBalancerAttribute";
	/** [Write] lightsail:UpdateRelationalDatabase */
	static readonly UPDATE_RELATIONAL_DATABASE =
		"lightsail:UpdateRelationalDatabase";
	/** [Write] lightsail:UpdateRelationalDatabaseParameters */
	static readonly UPDATE_RELATIONAL_DATABASE_PARAMETERS =
		"lightsail:UpdateRelationalDatabaseParameters";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		LightSailActions.GET_ACTIVE_NAMES,
		LightSailActions.GET_ALARMS,
		LightSailActions.GET_AUTO_SNAPSHOTS,
		LightSailActions.GET_BLUEPRINTS,
		LightSailActions.GET_BUCKET_ACCESS_KEYS,
		LightSailActions.GET_BUCKET_BUNDLES,
		LightSailActions.GET_BUCKET_METRIC_DATA,
		LightSailActions.GET_BUCKETS,
		LightSailActions.GET_BUNDLES,
		LightSailActions.GET_CERTIFICATES,
		LightSailActions.GET_CLOUD_FORMATION_STACK_RECORDS,
		LightSailActions.GET_CONTACT_METHODS,
		LightSailActions.GET_CONTAINER_API_METADATA,
		LightSailActions.GET_CONTAINER_IMAGES,
		LightSailActions.GET_CONTAINER_LOG,
		LightSailActions.GET_CONTAINER_SERVICE_DEPLOYMENTS,
		LightSailActions.GET_CONTAINER_SERVICE_METRIC_DATA,
		LightSailActions.GET_CONTAINER_SERVICE_POWERS,
		LightSailActions.GET_CONTAINER_SERVICES,
		LightSailActions.GET_COST_ESTIMATE,
		LightSailActions.GET_DISK,
		LightSailActions.GET_DISK_SNAPSHOT,
		LightSailActions.GET_DISK_SNAPSHOTS,
		LightSailActions.GET_DISKS,
		LightSailActions.GET_DISTRIBUTION_BUNDLES,
		LightSailActions.GET_DISTRIBUTION_LATEST_CACHE_RESET,
		LightSailActions.GET_DISTRIBUTION_METRIC_DATA,
		LightSailActions.GET_DISTRIBUTIONS,
		LightSailActions.GET_DOMAIN,
		LightSailActions.GET_DOMAINS,
		LightSailActions.GET_EXPORT_SNAPSHOT_RECORDS,
		LightSailActions.GET_INSTANCE,
		LightSailActions.GET_INSTANCE_METRIC_DATA,
		LightSailActions.GET_INSTANCE_PORT_STATES,
		LightSailActions.GET_INSTANCE_SNAPSHOT,
		LightSailActions.GET_INSTANCE_SNAPSHOTS,
		LightSailActions.GET_INSTANCE_STATE,
		LightSailActions.GET_INSTANCES,
		LightSailActions.GET_KEY_PAIR,
		LightSailActions.GET_KEY_PAIRS,
		LightSailActions.GET_LOAD_BALANCER,
		LightSailActions.GET_LOAD_BALANCER_METRIC_DATA,
		LightSailActions.GET_LOAD_BALANCER_TLS_CERTIFICATES,
		LightSailActions.GET_LOAD_BALANCER_TLS_POLICIES,
		LightSailActions.GET_LOAD_BALANCERS,
		LightSailActions.GET_OPERATION,
		LightSailActions.GET_OPERATIONS,
		LightSailActions.GET_OPERATIONS_FOR_RESOURCE,
		LightSailActions.GET_REGIONS,
		LightSailActions.GET_RELATIONAL_DATABASE,
		LightSailActions.GET_RELATIONAL_DATABASE_BLUEPRINTS,
		LightSailActions.GET_RELATIONAL_DATABASE_BUNDLES,
		LightSailActions.GET_RELATIONAL_DATABASE_EVENTS,
		LightSailActions.GET_RELATIONAL_DATABASE_LOG_EVENTS,
		LightSailActions.GET_RELATIONAL_DATABASE_LOG_STREAMS,
		LightSailActions.GET_RELATIONAL_DATABASE_METRIC_DATA,
		LightSailActions.GET_RELATIONAL_DATABASE_PARAMETERS,
		LightSailActions.GET_RELATIONAL_DATABASE_SNAPSHOT,
		LightSailActions.GET_RELATIONAL_DATABASE_SNAPSHOTS,
		LightSailActions.GET_RELATIONAL_DATABASES,
		LightSailActions.GET_SETUP_HISTORY,
		LightSailActions.GET_STATIC_IP,
		LightSailActions.GET_STATIC_IPS,
		LightSailActions.IS_VPC_PEERED,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		LightSailActions.ALLOCATE_STATIC_IP,
		LightSailActions.ATTACH_CERTIFICATE_TO_DISTRIBUTION,
		LightSailActions.ATTACH_DISK,
		LightSailActions.ATTACH_INSTANCES_TO_LOAD_BALANCER,
		LightSailActions.ATTACH_LOAD_BALANCER_TLS_CERTIFICATE,
		LightSailActions.ATTACH_STATIC_IP,
		LightSailActions.CLOSE_INSTANCE_PUBLIC_PORTS,
		LightSailActions.COPY_SNAPSHOT,
		LightSailActions.CREATE_BUCKET,
		LightSailActions.CREATE_BUCKET_ACCESS_KEY,
		LightSailActions.CREATE_CERTIFICATE,
		LightSailActions.CREATE_CLOUD_FORMATION_STACK,
		LightSailActions.CREATE_CONTACT_METHOD,
		LightSailActions.CREATE_CONTAINER_SERVICE,
		LightSailActions.CREATE_CONTAINER_SERVICE_DEPLOYMENT,
		LightSailActions.CREATE_CONTAINER_SERVICE_REGISTRY_LOGIN,
		LightSailActions.CREATE_DISK,
		LightSailActions.CREATE_DISK_FROM_SNAPSHOT,
		LightSailActions.CREATE_DISK_SNAPSHOT,
		LightSailActions.CREATE_DISTRIBUTION,
		LightSailActions.CREATE_DOMAIN,
		LightSailActions.CREATE_DOMAIN_ENTRY,
		LightSailActions.CREATE_GUI_SESSION_ACCESS_DETAILS,
		LightSailActions.CREATE_INSTANCE_SNAPSHOT,
		LightSailActions.CREATE_INSTANCES,
		LightSailActions.CREATE_INSTANCES_FROM_SNAPSHOT,
		LightSailActions.CREATE_KEY_PAIR,
		LightSailActions.CREATE_LOAD_BALANCER,
		LightSailActions.CREATE_LOAD_BALANCER_TLS_CERTIFICATE,
		LightSailActions.CREATE_RELATIONAL_DATABASE,
		LightSailActions.CREATE_RELATIONAL_DATABASE_FROM_SNAPSHOT,
		LightSailActions.CREATE_RELATIONAL_DATABASE_SNAPSHOT,
		LightSailActions.DELETE_ALARM,
		LightSailActions.DELETE_AUTO_SNAPSHOT,
		LightSailActions.DELETE_BUCKET,
		LightSailActions.DELETE_BUCKET_ACCESS_KEY,
		LightSailActions.DELETE_CERTIFICATE,
		LightSailActions.DELETE_CONTACT_METHOD,
		LightSailActions.DELETE_CONTAINER_IMAGE,
		LightSailActions.DELETE_CONTAINER_SERVICE,
		LightSailActions.DELETE_DISK,
		LightSailActions.DELETE_DISK_SNAPSHOT,
		LightSailActions.DELETE_DISTRIBUTION,
		LightSailActions.DELETE_DOMAIN,
		LightSailActions.DELETE_DOMAIN_ENTRY,
		LightSailActions.DELETE_INSTANCE,
		LightSailActions.DELETE_INSTANCE_SNAPSHOT,
		LightSailActions.DELETE_KEY_PAIR,
		LightSailActions.DELETE_KNOWN_HOST_KEYS,
		LightSailActions.DELETE_LOAD_BALANCER,
		LightSailActions.DELETE_LOAD_BALANCER_TLS_CERTIFICATE,
		LightSailActions.DELETE_RELATIONAL_DATABASE,
		LightSailActions.DELETE_RELATIONAL_DATABASE_SNAPSHOT,
		LightSailActions.DETACH_CERTIFICATE_FROM_DISTRIBUTION,
		LightSailActions.DETACH_DISK,
		LightSailActions.DETACH_INSTANCES_FROM_LOAD_BALANCER,
		LightSailActions.DETACH_STATIC_IP,
		LightSailActions.DISABLE_ADD_ON,
		LightSailActions.DOWNLOAD_DEFAULT_KEY_PAIR,
		LightSailActions.ENABLE_ADD_ON,
		LightSailActions.EXPORT_SNAPSHOT,
		LightSailActions.GET_INSTANCE_ACCESS_DETAILS,
		LightSailActions.GET_RELATIONAL_DATABASE_MASTER_USER_PASSWORD,
		LightSailActions.IMPORT_KEY_PAIR,
		LightSailActions.OPEN_INSTANCE_PUBLIC_PORTS,
		LightSailActions.PEER_VPC,
		LightSailActions.PUT_ALARM,
		LightSailActions.PUT_INSTANCE_PUBLIC_PORTS,
		LightSailActions.REBOOT_INSTANCE,
		LightSailActions.REBOOT_RELATIONAL_DATABASE,
		LightSailActions.REGISTER_CONTAINER_IMAGE,
		LightSailActions.RELEASE_STATIC_IP,
		LightSailActions.RESET_DISTRIBUTION_CACHE,
		LightSailActions.SEND_CONTACT_METHOD_VERIFICATION,
		LightSailActions.SET_IP_ADDRESS_TYPE,
		LightSailActions.SET_RESOURCE_ACCESS_FOR_BUCKET,
		LightSailActions.SETUP_INSTANCE_HTTPS,
		LightSailActions.START_GUI_SESSION,
		LightSailActions.START_INSTANCE,
		LightSailActions.START_RELATIONAL_DATABASE,
		LightSailActions.STOP_GUI_SESSION,
		LightSailActions.STOP_INSTANCE,
		LightSailActions.STOP_RELATIONAL_DATABASE,
		LightSailActions.TEST_ALARM,
		LightSailActions.UNPEER_VPC,
		LightSailActions.UPDATE_BUCKET,
		LightSailActions.UPDATE_BUCKET_BUNDLE,
		LightSailActions.UPDATE_CONTAINER_SERVICE,
		LightSailActions.UPDATE_DISTRIBUTION,
		LightSailActions.UPDATE_DISTRIBUTION_BUNDLE,
		LightSailActions.UPDATE_DOMAIN_ENTRY,
		LightSailActions.UPDATE_INSTANCE_METADATA_OPTIONS,
		LightSailActions.UPDATE_LOAD_BALANCER_ATTRIBUTE,
		LightSailActions.UPDATE_RELATIONAL_DATABASE,
		LightSailActions.UPDATE_RELATIONAL_DATABASE_PARAMETERS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		LightSailActions.TAG_RESOURCE,
		LightSailActions.UNTAG_RESOURCE,
	];
}

const AlarmArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Alarm/(?<id>[^:/?]+)$",
);
const BucketArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Bucket/(?<id>[^:/?]+)$",
);
const CertificateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Certificate/(?<id>[^:/?]+)$",
);
const CloudFormationStackRecordArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):CloudFormationStackRecord/(?<id>[^:/?]+)$",
);
const ContactMethodArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):ContactMethod/(?<id>[^:/?]+)$",
);
const ContainerServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):ContainerService/(?<id>[^:/?]+)$",
);
const DiskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Disk/(?<id>[^:/?]+)$",
);
const DiskSnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):DiskSnapshot/(?<id>[^:/?]+)$",
);
const DistributionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Distribution/(?<id>[^:/?]+)$",
);
const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Domain/(?<id>[^:/?]+)$",
);
const ExportSnapshotRecordArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):ExportSnapshotRecord/(?<id>[^:/?]+)$",
);
const InstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):Instance/(?<id>[^:/?]+)$",
);
const InstanceSnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):InstanceSnapshot/(?<id>[^:/?]+)$",
);
const KeyPairArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):KeyPair/(?<id>[^:/?]+)$",
);
const LoadBalancerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):LoadBalancer/(?<id>[^:/?]+)$",
);
const LoadBalancerTLSCertificateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):LoadBalancerTlsCertificate/(?<id>[^:/?]+)$",
);
const RelationalDatabaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):RelationalDatabase/(?<id>[^:/?]+)$",
);
const RelationalDatabaseSnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):RelationalDatabaseSnapshot/(?<id>[^:/?]+)$",
);
const StaticIPArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lightsail:(?<region>[^:]*):(?<account>[^:]*):StaticIp/(?<id>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for lightsail resources.
 */
export class LightSailResources {
	/**
	 * Builds an ARN for the Alarm resource.
	 */
	static alarm(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAlarmArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static bucket(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseBucketArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static certificate(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCertificateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static cloudFormationStackRecord(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCloudFormationStackRecordArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static contactMethod(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseContactMethodArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static containerService(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseContainerServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static disk(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDiskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static diskSnapshot(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDiskSnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static distribution(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDistributionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static domain(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static exportSnapshotRecord(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseExportSnapshotRecordArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static instance(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static instanceSnapshot(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseInstanceSnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static keyPair(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseKeyPairArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static loadBalancer(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseLoadBalancerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static loadBalancerTLSCertificate(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseLoadBalancerTLSCertificateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static relationalDatabase(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRelationalDatabaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static relationalDatabaseSnapshot(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRelationalDatabaseSnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static staticIP(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseStaticIPArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static readonly ALLOCATE_STATIC_IP: string[] = ["lightsail:AllocateStaticIp"];
	/** IAM actions required for the AttachCertificateToDistribution API call. */
	static readonly ATTACH_CERTIFICATE_TO_DISTRIBUTION: string[] = [
		"lightsail:AttachCertificateToDistribution",
	];
	/** IAM actions required for the AttachDisk API call. */
	static readonly ATTACH_DISK: string[] = ["lightsail:AttachDisk"];
	/** IAM actions required for the AttachInstancesToLoadBalancer API call. */
	static readonly ATTACH_INSTANCES_TO_LOAD_BALANCER: string[] = [
		"lightsail:AttachInstancesToLoadBalancer",
	];
	/** IAM actions required for the AttachLoadBalancerTlsCertificate API call. */
	static readonly ATTACH_LOAD_BALANCER_TLS_CERTIFICATE: string[] = [
		"lightsail:AttachLoadBalancerTlsCertificate",
	];
	/** IAM actions required for the AttachStaticIp API call. */
	static readonly ATTACH_STATIC_IP: string[] = ["lightsail:AttachStaticIp"];
	/** IAM actions required for the CloseInstancePublicPorts API call. */
	static readonly CLOSE_INSTANCE_PUBLIC_PORTS: string[] = [
		"lightsail:CloseInstancePublicPorts",
	];
	/** IAM actions required for the CopySnapshot API call. */
	static readonly COPY_SNAPSHOT: string[] = ["lightsail:CopySnapshot"];
	/** IAM actions required for the CreateBucket API call. */
	static readonly CREATE_BUCKET: string[] = [
		"lightsail:CreateBucket",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateBucketAccessKey API call. */
	static readonly CREATE_BUCKET_ACCESS_KEY: string[] = [
		"lightsail:CreateBucketAccessKey",
	];
	/** IAM actions required for the CreateCertificate API call. */
	static readonly CREATE_CERTIFICATE: string[] = [
		"lightsail:CreateCertificate",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateCloudFormationStack API call. */
	static readonly CREATE_CLOUD_FORMATION_STACK: string[] = [
		"lightsail:CreateCloudFormationStack",
	];
	/** IAM actions required for the CreateContactMethod API call. */
	static readonly CREATE_CONTACT_METHOD: string[] = [
		"lightsail:CreateContactMethod",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateContainerService API call. */
	static readonly CREATE_CONTAINER_SERVICE: string[] = [
		"lightsail:CreateContainerService",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateContainerServiceDeployment API call. */
	static readonly CREATE_CONTAINER_SERVICE_DEPLOYMENT: string[] = [
		"lightsail:CreateContainerServiceDeployment",
	];
	/** IAM actions required for the CreateContainerServiceRegistryLogin API call. */
	static readonly CREATE_CONTAINER_SERVICE_REGISTRY_LOGIN: string[] = [
		"lightsail:CreateContainerServiceRegistryLogin",
	];
	/** IAM actions required for the CreateDisk API call. */
	static readonly CREATE_DISK: string[] = [
		"lightsail:CreateDisk",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateDiskFromSnapshot API call. */
	static readonly CREATE_DISK_FROM_SNAPSHOT: string[] = [
		"lightsail:CreateDiskFromSnapshot",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateDiskSnapshot API call. */
	static readonly CREATE_DISK_SNAPSHOT: string[] = [
		"lightsail:CreateDiskSnapshot",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateDistribution API call. */
	static readonly CREATE_DISTRIBUTION: string[] = [
		"lightsail:CreateDistribution",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CREATE_DOMAIN: string[] = [
		"lightsail:CreateDomain",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateDomainEntry API call. */
	static readonly CREATE_DOMAIN_ENTRY: string[] = [
		"lightsail:CreateDomainEntry",
	];
	/** IAM actions required for the CreateGUISessionAccessDetails API call. */
	static readonly CREATE_GUI_SESSION_ACCESS_DETAILS: string[] = [
		"lightsail:CreateGUISessionAccessDetails",
	];
	/** IAM actions required for the CreateInstanceSnapshot API call. */
	static readonly CREATE_INSTANCE_SNAPSHOT: string[] = [
		"lightsail:CreateInstanceSnapshot",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateInstances API call. */
	static readonly CREATE_INSTANCES: string[] = [
		"lightsail:CreateInstances",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateInstancesFromSnapshot API call. */
	static readonly CREATE_INSTANCES_FROM_SNAPSHOT: string[] = [
		"lightsail:CreateInstancesFromSnapshot",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateKeyPair API call. */
	static readonly CREATE_KEY_PAIR: string[] = [
		"lightsail:CreateKeyPair",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateLoadBalancer API call. */
	static readonly CREATE_LOAD_BALANCER: string[] = [
		"lightsail:CreateLoadBalancer",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateLoadBalancerTlsCertificate API call. */
	static readonly CREATE_LOAD_BALANCER_TLS_CERTIFICATE: string[] = [
		"lightsail:CreateLoadBalancerTlsCertificate",
	];
	/** IAM actions required for the CreateRelationalDatabase API call. */
	static readonly CREATE_RELATIONAL_DATABASE: string[] = [
		"lightsail:CreateRelationalDatabase",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateRelationalDatabaseFromSnapshot API call. */
	static readonly CREATE_RELATIONAL_DATABASE_FROM_SNAPSHOT: string[] = [
		"lightsail:CreateRelationalDatabaseFromSnapshot",
		"lightsail:TagResource",
	];
	/** IAM actions required for the CreateRelationalDatabaseSnapshot API call. */
	static readonly CREATE_RELATIONAL_DATABASE_SNAPSHOT: string[] = [
		"lightsail:CreateRelationalDatabaseSnapshot",
		"lightsail:TagResource",
	];
	/** IAM actions required for the DeleteAlarm API call. */
	static readonly DELETE_ALARM: string[] = ["lightsail:DeleteAlarm"];
	/** IAM actions required for the DeleteAutoSnapshot API call. */
	static readonly DELETE_AUTO_SNAPSHOT: string[] = [
		"lightsail:DeleteAutoSnapshot",
	];
	/** IAM actions required for the DeleteBucket API call. */
	static readonly DELETE_BUCKET: string[] = ["lightsail:DeleteBucket"];
	/** IAM actions required for the DeleteBucketAccessKey API call. */
	static readonly DELETE_BUCKET_ACCESS_KEY: string[] = [
		"lightsail:DeleteBucketAccessKey",
	];
	/** IAM actions required for the DeleteCertificate API call. */
	static readonly DELETE_CERTIFICATE: string[] = [
		"lightsail:DeleteCertificate",
	];
	/** IAM actions required for the DeleteContactMethod API call. */
	static readonly DELETE_CONTACT_METHOD: string[] = [
		"lightsail:DeleteContactMethod",
	];
	/** IAM actions required for the DeleteContainerImage API call. */
	static readonly DELETE_CONTAINER_IMAGE: string[] = [
		"lightsail:DeleteContainerImage",
	];
	/** IAM actions required for the DeleteContainerService API call. */
	static readonly DELETE_CONTAINER_SERVICE: string[] = [
		"lightsail:DeleteContainerService",
	];
	/** IAM actions required for the DeleteDisk API call. */
	static readonly DELETE_DISK: string[] = ["lightsail:DeleteDisk"];
	/** IAM actions required for the DeleteDiskSnapshot API call. */
	static readonly DELETE_DISK_SNAPSHOT: string[] = [
		"lightsail:DeleteDiskSnapshot",
	];
	/** IAM actions required for the DeleteDistribution API call. */
	static readonly DELETE_DISTRIBUTION: string[] = [
		"lightsail:DeleteDistribution",
	];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DELETE_DOMAIN: string[] = ["lightsail:DeleteDomain"];
	/** IAM actions required for the DeleteDomainEntry API call. */
	static readonly DELETE_DOMAIN_ENTRY: string[] = [
		"lightsail:DeleteDomainEntry",
	];
	/** IAM actions required for the DeleteInstance API call. */
	static readonly DELETE_INSTANCE: string[] = ["lightsail:DeleteInstance"];
	/** IAM actions required for the DeleteInstanceSnapshot API call. */
	static readonly DELETE_INSTANCE_SNAPSHOT: string[] = [
		"lightsail:DeleteInstanceSnapshot",
	];
	/** IAM actions required for the DeleteKeyPair API call. */
	static readonly DELETE_KEY_PAIR: string[] = ["lightsail:DeleteKeyPair"];
	/** IAM actions required for the DeleteKnownHostKeys API call. */
	static readonly DELETE_KNOWN_HOST_KEYS: string[] = [
		"lightsail:DeleteKnownHostKeys",
	];
	/** IAM actions required for the DeleteLoadBalancer API call. */
	static readonly DELETE_LOAD_BALANCER: string[] = [
		"lightsail:DeleteLoadBalancer",
	];
	/** IAM actions required for the DeleteLoadBalancerTlsCertificate API call. */
	static readonly DELETE_LOAD_BALANCER_TLS_CERTIFICATE: string[] = [
		"lightsail:DeleteLoadBalancerTlsCertificate",
	];
	/** IAM actions required for the DeleteRelationalDatabase API call. */
	static readonly DELETE_RELATIONAL_DATABASE: string[] = [
		"lightsail:DeleteRelationalDatabase",
	];
	/** IAM actions required for the DeleteRelationalDatabaseSnapshot API call. */
	static readonly DELETE_RELATIONAL_DATABASE_SNAPSHOT: string[] = [
		"lightsail:DeleteRelationalDatabaseSnapshot",
	];
	/** IAM actions required for the DetachCertificateFromDistribution API call. */
	static readonly DETACH_CERTIFICATE_FROM_DISTRIBUTION: string[] = [
		"lightsail:DetachCertificateFromDistribution",
	];
	/** IAM actions required for the DetachDisk API call. */
	static readonly DETACH_DISK: string[] = ["lightsail:DetachDisk"];
	/** IAM actions required for the DetachInstancesFromLoadBalancer API call. */
	static readonly DETACH_INSTANCES_FROM_LOAD_BALANCER: string[] = [
		"lightsail:DetachInstancesFromLoadBalancer",
	];
	/** IAM actions required for the DetachStaticIp API call. */
	static readonly DETACH_STATIC_IP: string[] = ["lightsail:DetachStaticIp"];
	/** IAM actions required for the DisableAddOn API call. */
	static readonly DISABLE_ADD_ON: string[] = ["lightsail:DisableAddOn"];
	/** IAM actions required for the DownloadDefaultKeyPair API call. */
	static readonly DOWNLOAD_DEFAULT_KEY_PAIR: string[] = [
		"lightsail:DownloadDefaultKeyPair",
	];
	/** IAM actions required for the EnableAddOn API call. */
	static readonly ENABLE_ADD_ON: string[] = ["lightsail:EnableAddOn"];
	/** IAM actions required for the ExportSnapshot API call. */
	static readonly EXPORT_SNAPSHOT: string[] = ["lightsail:ExportSnapshot"];
	/** IAM actions required for the GetActiveNames API call. */
	static readonly GET_ACTIVE_NAMES: string[] = ["lightsail:GetActiveNames"];
	/** IAM actions required for the GetAlarms API call. */
	static readonly GET_ALARMS: string[] = ["lightsail:GetAlarms"];
	/** IAM actions required for the GetAutoSnapshots API call. */
	static readonly GET_AUTO_SNAPSHOTS: string[] = ["lightsail:GetAutoSnapshots"];
	/** IAM actions required for the GetBlueprints API call. */
	static readonly GET_BLUEPRINTS: string[] = ["lightsail:GetBlueprints"];
	/** IAM actions required for the GetBucketAccessKeys API call. */
	static readonly GET_BUCKET_ACCESS_KEYS: string[] = [
		"lightsail:GetBucketAccessKeys",
	];
	/** IAM actions required for the GetBucketBundles API call. */
	static readonly GET_BUCKET_BUNDLES: string[] = ["lightsail:GetBucketBundles"];
	/** IAM actions required for the GetBucketMetricData API call. */
	static readonly GET_BUCKET_METRIC_DATA: string[] = [
		"lightsail:GetBucketMetricData",
	];
	/** IAM actions required for the GetBuckets API call. */
	static readonly GET_BUCKETS: string[] = ["lightsail:GetBuckets"];
	/** IAM actions required for the GetBundles API call. */
	static readonly GET_BUNDLES: string[] = ["lightsail:GetBundles"];
	/** IAM actions required for the GetCertificates API call. */
	static readonly GET_CERTIFICATES: string[] = ["lightsail:GetCertificates"];
	/** IAM actions required for the GetCloudFormationStackRecords API call. */
	static readonly GET_CLOUD_FORMATION_STACK_RECORDS: string[] = [
		"lightsail:GetCloudFormationStackRecords",
	];
	/** IAM actions required for the GetContactMethods API call. */
	static readonly GET_CONTACT_METHODS: string[] = [
		"lightsail:GetContactMethods",
	];
	/** IAM actions required for the GetContainerAPIMetadata API call. */
	static readonly GET_CONTAINER_API_METADATA: string[] = [
		"lightsail:GetContainerAPIMetadata",
	];
	/** IAM actions required for the GetContainerImages API call. */
	static readonly GET_CONTAINER_IMAGES: string[] = [
		"lightsail:GetContainerImages",
	];
	/** IAM actions required for the GetContainerLog API call. */
	static readonly GET_CONTAINER_LOG: string[] = ["lightsail:GetContainerLog"];
	/** IAM actions required for the GetContainerServiceDeployments API call. */
	static readonly GET_CONTAINER_SERVICE_DEPLOYMENTS: string[] = [
		"lightsail:GetContainerServiceDeployments",
	];
	/** IAM actions required for the GetContainerServiceMetricData API call. */
	static readonly GET_CONTAINER_SERVICE_METRIC_DATA: string[] = [
		"lightsail:GetContainerServiceMetricData",
	];
	/** IAM actions required for the GetContainerServicePowers API call. */
	static readonly GET_CONTAINER_SERVICE_POWERS: string[] = [
		"lightsail:GetContainerServicePowers",
	];
	/** IAM actions required for the GetContainerServices API call. */
	static readonly GET_CONTAINER_SERVICES: string[] = [
		"lightsail:GetContainerServices",
	];
	/** IAM actions required for the GetCostEstimate API call. */
	static readonly GET_COST_ESTIMATE: string[] = ["lightsail:GetCostEstimate"];
	/** IAM actions required for the GetDisk API call. */
	static readonly GET_DISK: string[] = ["lightsail:GetDisk"];
	/** IAM actions required for the GetDiskSnapshot API call. */
	static readonly GET_DISK_SNAPSHOT: string[] = ["lightsail:GetDiskSnapshot"];
	/** IAM actions required for the GetDiskSnapshots API call. */
	static readonly GET_DISK_SNAPSHOTS: string[] = ["lightsail:GetDiskSnapshots"];
	/** IAM actions required for the GetDisks API call. */
	static readonly GET_DISKS: string[] = ["lightsail:GetDisks"];
	/** IAM actions required for the GetDistributionBundles API call. */
	static readonly GET_DISTRIBUTION_BUNDLES: string[] = [
		"lightsail:GetDistributionBundles",
	];
	/** IAM actions required for the GetDistributionLatestCacheReset API call. */
	static readonly GET_DISTRIBUTION_LATEST_CACHE_RESET: string[] = [
		"lightsail:GetDistributionLatestCacheReset",
	];
	/** IAM actions required for the GetDistributionMetricData API call. */
	static readonly GET_DISTRIBUTION_METRIC_DATA: string[] = [
		"lightsail:GetDistributionMetricData",
	];
	/** IAM actions required for the GetDistributions API call. */
	static readonly GET_DISTRIBUTIONS: string[] = ["lightsail:GetDistributions"];
	/** IAM actions required for the GetDomain API call. */
	static readonly GET_DOMAIN: string[] = ["lightsail:GetDomain"];
	/** IAM actions required for the GetDomains API call. */
	static readonly GET_DOMAINS: string[] = ["lightsail:GetDomains"];
	/** IAM actions required for the GetExportSnapshotRecords API call. */
	static readonly GET_EXPORT_SNAPSHOT_RECORDS: string[] = [
		"lightsail:GetExportSnapshotRecords",
	];
	/** IAM actions required for the GetInstance API call. */
	static readonly GET_INSTANCE: string[] = ["lightsail:GetInstance"];
	/** IAM actions required for the GetInstanceAccessDetails API call. */
	static readonly GET_INSTANCE_ACCESS_DETAILS: string[] = [
		"lightsail:GetInstanceAccessDetails",
	];
	/** IAM actions required for the GetInstanceMetricData API call. */
	static readonly GET_INSTANCE_METRIC_DATA: string[] = [
		"lightsail:GetInstanceMetricData",
	];
	/** IAM actions required for the GetInstancePortStates API call. */
	static readonly GET_INSTANCE_PORT_STATES: string[] = [
		"lightsail:GetInstancePortStates",
	];
	/** IAM actions required for the GetInstanceSnapshot API call. */
	static readonly GET_INSTANCE_SNAPSHOT: string[] = [
		"lightsail:GetInstanceSnapshot",
	];
	/** IAM actions required for the GetInstanceSnapshots API call. */
	static readonly GET_INSTANCE_SNAPSHOTS: string[] = [
		"lightsail:GetInstanceSnapshots",
	];
	/** IAM actions required for the GetInstanceState API call. */
	static readonly GET_INSTANCE_STATE: string[] = ["lightsail:GetInstanceState"];
	/** IAM actions required for the GetInstances API call. */
	static readonly GET_INSTANCES: string[] = ["lightsail:GetInstances"];
	/** IAM actions required for the GetKeyPair API call. */
	static readonly GET_KEY_PAIR: string[] = ["lightsail:GetKeyPair"];
	/** IAM actions required for the GetKeyPairs API call. */
	static readonly GET_KEY_PAIRS: string[] = ["lightsail:GetKeyPairs"];
	/** IAM actions required for the GetLoadBalancer API call. */
	static readonly GET_LOAD_BALANCER: string[] = ["lightsail:GetLoadBalancer"];
	/** IAM actions required for the GetLoadBalancerMetricData API call. */
	static readonly GET_LOAD_BALANCER_METRIC_DATA: string[] = [
		"lightsail:GetLoadBalancerMetricData",
	];
	/** IAM actions required for the GetLoadBalancerTlsCertificates API call. */
	static readonly GET_LOAD_BALANCER_TLS_CERTIFICATES: string[] = [
		"lightsail:GetLoadBalancerTlsCertificates",
	];
	/** IAM actions required for the GetLoadBalancerTlsPolicies API call. */
	static readonly GET_LOAD_BALANCER_TLS_POLICIES: string[] = [
		"lightsail:GetLoadBalancerTlsPolicies",
	];
	/** IAM actions required for the GetLoadBalancers API call. */
	static readonly GET_LOAD_BALANCERS: string[] = ["lightsail:GetLoadBalancers"];
	/** IAM actions required for the GetOperation API call. */
	static readonly GET_OPERATION: string[] = ["lightsail:GetOperation"];
	/** IAM actions required for the GetOperations API call. */
	static readonly GET_OPERATIONS: string[] = ["lightsail:GetOperations"];
	/** IAM actions required for the GetOperationsForResource API call. */
	static readonly GET_OPERATIONS_FOR_RESOURCE: string[] = [
		"lightsail:GetOperationsForResource",
	];
	/** IAM actions required for the GetRegions API call. */
	static readonly GET_REGIONS: string[] = ["lightsail:GetRegions"];
	/** IAM actions required for the GetRelationalDatabase API call. */
	static readonly GET_RELATIONAL_DATABASE: string[] = [
		"lightsail:GetRelationalDatabase",
	];
	/** IAM actions required for the GetRelationalDatabaseBlueprints API call. */
	static readonly GET_RELATIONAL_DATABASE_BLUEPRINTS: string[] = [
		"lightsail:GetRelationalDatabaseBlueprints",
	];
	/** IAM actions required for the GetRelationalDatabaseBundles API call. */
	static readonly GET_RELATIONAL_DATABASE_BUNDLES: string[] = [
		"lightsail:GetRelationalDatabaseBundles",
	];
	/** IAM actions required for the GetRelationalDatabaseEvents API call. */
	static readonly GET_RELATIONAL_DATABASE_EVENTS: string[] = [
		"lightsail:GetRelationalDatabaseEvents",
	];
	/** IAM actions required for the GetRelationalDatabaseLogEvents API call. */
	static readonly GET_RELATIONAL_DATABASE_LOG_EVENTS: string[] = [
		"lightsail:GetRelationalDatabaseLogEvents",
	];
	/** IAM actions required for the GetRelationalDatabaseLogStreams API call. */
	static readonly GET_RELATIONAL_DATABASE_LOG_STREAMS: string[] = [
		"lightsail:GetRelationalDatabaseLogStreams",
	];
	/** IAM actions required for the GetRelationalDatabaseMasterUserPassword API call. */
	static readonly GET_RELATIONAL_DATABASE_MASTER_USER_PASSWORD: string[] = [
		"lightsail:GetRelationalDatabaseMasterUserPassword",
	];
	/** IAM actions required for the GetRelationalDatabaseMetricData API call. */
	static readonly GET_RELATIONAL_DATABASE_METRIC_DATA: string[] = [
		"lightsail:GetRelationalDatabaseMetricData",
	];
	/** IAM actions required for the GetRelationalDatabaseParameters API call. */
	static readonly GET_RELATIONAL_DATABASE_PARAMETERS: string[] = [
		"lightsail:GetRelationalDatabaseParameters",
	];
	/** IAM actions required for the GetRelationalDatabaseSnapshot API call. */
	static readonly GET_RELATIONAL_DATABASE_SNAPSHOT: string[] = [
		"lightsail:GetRelationalDatabaseSnapshot",
	];
	/** IAM actions required for the GetRelationalDatabaseSnapshots API call. */
	static readonly GET_RELATIONAL_DATABASE_SNAPSHOTS: string[] = [
		"lightsail:GetRelationalDatabaseSnapshots",
	];
	/** IAM actions required for the GetRelationalDatabases API call. */
	static readonly GET_RELATIONAL_DATABASES: string[] = [
		"lightsail:GetRelationalDatabases",
	];
	/** IAM actions required for the GetSetupHistory API call. */
	static readonly GET_SETUP_HISTORY: string[] = ["lightsail:GetSetupHistory"];
	/** IAM actions required for the GetStaticIp API call. */
	static readonly GET_STATIC_IP: string[] = ["lightsail:GetStaticIp"];
	/** IAM actions required for the GetStaticIps API call. */
	static readonly GET_STATIC_IPS: string[] = ["lightsail:GetStaticIps"];
	/** IAM actions required for the ImportKeyPair API call. */
	static readonly IMPORT_KEY_PAIR: string[] = ["lightsail:ImportKeyPair"];
	/** IAM actions required for the IsVpcPeered API call. */
	static readonly IS_VPC_PEERED: string[] = ["lightsail:IsVpcPeered"];
	/** IAM actions required for the OpenInstancePublicPorts API call. */
	static readonly OPEN_INSTANCE_PUBLIC_PORTS: string[] = [
		"lightsail:OpenInstancePublicPorts",
	];
	/** IAM actions required for the PeerVpc API call. */
	static readonly PEER_VPC: string[] = ["lightsail:PeerVpc"];
	/** IAM actions required for the PutAlarm API call. */
	static readonly PUT_ALARM: string[] = [
		"lightsail:PutAlarm",
		"lightsail:TagResource",
	];
	/** IAM actions required for the PutInstancePublicPorts API call. */
	static readonly PUT_INSTANCE_PUBLIC_PORTS: string[] = [
		"lightsail:PutInstancePublicPorts",
	];
	/** IAM actions required for the RebootInstance API call. */
	static readonly REBOOT_INSTANCE: string[] = ["lightsail:RebootInstance"];
	/** IAM actions required for the RebootRelationalDatabase API call. */
	static readonly REBOOT_RELATIONAL_DATABASE: string[] = [
		"lightsail:RebootRelationalDatabase",
	];
	/** IAM actions required for the RegisterContainerImage API call. */
	static readonly REGISTER_CONTAINER_IMAGE: string[] = [
		"lightsail:RegisterContainerImage",
	];
	/** IAM actions required for the ReleaseStaticIp API call. */
	static readonly RELEASE_STATIC_IP: string[] = ["lightsail:ReleaseStaticIp"];
	/** IAM actions required for the ResetDistributionCache API call. */
	static readonly RESET_DISTRIBUTION_CACHE: string[] = [
		"lightsail:ResetDistributionCache",
	];
	/** IAM actions required for the SendContactMethodVerification API call. */
	static readonly SEND_CONTACT_METHOD_VERIFICATION: string[] = [
		"lightsail:SendContactMethodVerification",
	];
	/** IAM actions required for the SetIpAddressType API call. */
	static readonly SET_IP_ADDRESS_TYPE: string[] = [
		"lightsail:SetIpAddressType",
	];
	/** IAM actions required for the SetResourceAccessForBucket API call. */
	static readonly SET_RESOURCE_ACCESS_FOR_BUCKET: string[] = [
		"lightsail:SetResourceAccessForBucket",
	];
	/** IAM actions required for the SetupInstanceHttps API call. */
	static readonly SETUP_INSTANCE_HTTPS: string[] = [
		"lightsail:SetupInstanceHttps",
	];
	/** IAM actions required for the StartGUISession API call. */
	static readonly START_GUI_SESSION: string[] = ["lightsail:StartGUISession"];
	/** IAM actions required for the StartInstance API call. */
	static readonly START_INSTANCE: string[] = ["lightsail:StartInstance"];
	/** IAM actions required for the StartRelationalDatabase API call. */
	static readonly START_RELATIONAL_DATABASE: string[] = [
		"lightsail:StartRelationalDatabase",
	];
	/** IAM actions required for the StopGUISession API call. */
	static readonly STOP_GUI_SESSION: string[] = ["lightsail:StopGUISession"];
	/** IAM actions required for the StopInstance API call. */
	static readonly STOP_INSTANCE: string[] = ["lightsail:StopInstance"];
	/** IAM actions required for the StopRelationalDatabase API call. */
	static readonly STOP_RELATIONAL_DATABASE: string[] = [
		"lightsail:StopRelationalDatabase",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["lightsail:TagResource"];
	/** IAM actions required for the TestAlarm API call. */
	static readonly TEST_ALARM: string[] = ["lightsail:TestAlarm"];
	/** IAM actions required for the UnpeerVpc API call. */
	static readonly UNPEER_VPC: string[] = ["lightsail:UnpeerVpc"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["lightsail:UntagResource"];
	/** IAM actions required for the UpdateBucket API call. */
	static readonly UPDATE_BUCKET: string[] = ["lightsail:UpdateBucket"];
	/** IAM actions required for the UpdateBucketBundle API call. */
	static readonly UPDATE_BUCKET_BUNDLE: string[] = [
		"lightsail:UpdateBucketBundle",
	];
	/** IAM actions required for the UpdateContainerService API call. */
	static readonly UPDATE_CONTAINER_SERVICE: string[] = [
		"lightsail:UpdateContainerService",
	];
	/** IAM actions required for the UpdateDistribution API call. */
	static readonly UPDATE_DISTRIBUTION: string[] = [
		"lightsail:UpdateDistribution",
	];
	/** IAM actions required for the UpdateDistributionBundle API call. */
	static readonly UPDATE_DISTRIBUTION_BUNDLE: string[] = [
		"lightsail:UpdateDistributionBundle",
	];
	/** IAM actions required for the UpdateDomainEntry API call. */
	static readonly UPDATE_DOMAIN_ENTRY: string[] = [
		"lightsail:UpdateDomainEntry",
	];
	/** IAM actions required for the UpdateInstanceMetadataOptions API call. */
	static readonly UPDATE_INSTANCE_METADATA_OPTIONS: string[] = [
		"lightsail:UpdateInstanceMetadataOptions",
	];
	/** IAM actions required for the UpdateLoadBalancerAttribute API call. */
	static readonly UPDATE_LOAD_BALANCER_ATTRIBUTE: string[] = [
		"lightsail:UpdateLoadBalancerAttribute",
	];
	/** IAM actions required for the UpdateRelationalDatabase API call. */
	static readonly UPDATE_RELATIONAL_DATABASE: string[] = [
		"lightsail:UpdateRelationalDatabase",
	];
	/** IAM actions required for the UpdateRelationalDatabaseParameters API call. */
	static readonly UPDATE_RELATIONAL_DATABASE_PARAMETERS: string[] = [
		"lightsail:UpdateRelationalDatabaseParameters",
	];
}

/**
 * Condition key constants and builders for lightsail.
 */
export class LightSailConditions {
	/** Condition keys applicable to the CreateBucket action. */
	static readonly CREATE_BUCKET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCertificate action. */
	static readonly CREATE_CERTIFICATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContactMethod action. */
	static readonly CREATE_CONTACT_METHOD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContainerService action. */
	static readonly CREATE_CONTAINER_SERVICE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDisk action. */
	static readonly CREATE_DISK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDiskFromSnapshot action. */
	static readonly CREATE_DISK_FROM_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDiskSnapshot action. */
	static readonly CREATE_DISK_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDistribution action. */
	static readonly CREATE_DISTRIBUTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CREATE_DOMAIN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInstanceSnapshot action. */
	static readonly CREATE_INSTANCE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInstances action. */
	static readonly CREATE_INSTANCES_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInstancesFromSnapshot action. */
	static readonly CREATE_INSTANCES_FROM_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKeyPair action. */
	static readonly CREATE_KEY_PAIR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLoadBalancer action. */
	static readonly CREATE_LOAD_BALANCER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRelationalDatabase action. */
	static readonly CREATE_RELATIONAL_DATABASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRelationalDatabaseFromSnapshot action. */
	static readonly CREATE_RELATIONAL_DATABASE_FROM_SNAPSHOT_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateRelationalDatabaseSnapshot action. */
	static readonly CREATE_RELATIONAL_DATABASE_SNAPSHOT_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the PutAlarm action. */
	static readonly PUT_ALARM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
