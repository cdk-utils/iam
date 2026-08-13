// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/devicefarm.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the devicefarm service.
 */
export class DevicefarmActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "devicefarm";

	/** [Write] devicefarm:CreateDevicePool */
	static readonly CREATE_DEVICE_POOL = "devicefarm:CreateDevicePool";
	/** [Write] devicefarm:CreateInstanceProfile */
	static readonly CREATE_INSTANCE_PROFILE = "devicefarm:CreateInstanceProfile";
	/** [Write] devicefarm:CreateNetworkProfile */
	static readonly CREATE_NETWORK_PROFILE = "devicefarm:CreateNetworkProfile";
	/** [Write] devicefarm:CreateProject */
	static readonly CREATE_PROJECT = "devicefarm:CreateProject";
	/** [Write] devicefarm:CreateRemoteAccessSession */
	static readonly CREATE_REMOTE_ACCESS_SESSION =
		"devicefarm:CreateRemoteAccessSession";
	/** [Write] devicefarm:CreateTestGridProject */
	static readonly CREATE_TEST_GRID_PROJECT = "devicefarm:CreateTestGridProject";
	/** [Write] devicefarm:CreateTestGridUrl */
	static readonly CREATE_TEST_GRID_URL = "devicefarm:CreateTestGridUrl";
	/** [Write] devicefarm:CreateUpload */
	static readonly CREATE_UPLOAD = "devicefarm:CreateUpload";
	/** [Write] devicefarm:CreateVPCEConfiguration */
	static readonly CREATE_VPCE_CONFIGURATION =
		"devicefarm:CreateVPCEConfiguration";
	/** [Write] devicefarm:DeleteDevicePool */
	static readonly DELETE_DEVICE_POOL = "devicefarm:DeleteDevicePool";
	/** [Write] devicefarm:DeleteInstanceProfile */
	static readonly DELETE_INSTANCE_PROFILE = "devicefarm:DeleteInstanceProfile";
	/** [Write] devicefarm:DeleteNetworkProfile */
	static readonly DELETE_NETWORK_PROFILE = "devicefarm:DeleteNetworkProfile";
	/** [Write] devicefarm:DeleteProject */
	static readonly DELETE_PROJECT = "devicefarm:DeleteProject";
	/** [Write] devicefarm:DeleteRemoteAccessSession */
	static readonly DELETE_REMOTE_ACCESS_SESSION =
		"devicefarm:DeleteRemoteAccessSession";
	/** [Write] devicefarm:DeleteRun */
	static readonly DELETE_RUN = "devicefarm:DeleteRun";
	/** [Write] devicefarm:DeleteTestGridProject */
	static readonly DELETE_TEST_GRID_PROJECT = "devicefarm:DeleteTestGridProject";
	/** [Write] devicefarm:DeleteUpload */
	static readonly DELETE_UPLOAD = "devicefarm:DeleteUpload";
	/** [Write] devicefarm:DeleteVPCEConfiguration */
	static readonly DELETE_VPCE_CONFIGURATION =
		"devicefarm:DeleteVPCEConfiguration";
	/** [Read] devicefarm:GetAccountSettings */
	static readonly GET_ACCOUNT_SETTINGS = "devicefarm:GetAccountSettings";
	/** [Read] devicefarm:GetDevice */
	static readonly GET_DEVICE = "devicefarm:GetDevice";
	/** [Read] devicefarm:GetDeviceInstance */
	static readonly GET_DEVICE_INSTANCE = "devicefarm:GetDeviceInstance";
	/** [Read] devicefarm:GetDevicePool */
	static readonly GET_DEVICE_POOL = "devicefarm:GetDevicePool";
	/** [Read] devicefarm:GetDevicePoolCompatibility */
	static readonly GET_DEVICE_POOL_COMPATIBILITY =
		"devicefarm:GetDevicePoolCompatibility";
	/** [Read] devicefarm:GetInstanceProfile */
	static readonly GET_INSTANCE_PROFILE = "devicefarm:GetInstanceProfile";
	/** [Read] devicefarm:GetJob */
	static readonly GET_JOB = "devicefarm:GetJob";
	/** [Read] devicefarm:GetNetworkProfile */
	static readonly GET_NETWORK_PROFILE = "devicefarm:GetNetworkProfile";
	/** [Read] devicefarm:GetOfferingStatus */
	static readonly GET_OFFERING_STATUS = "devicefarm:GetOfferingStatus";
	/** [Read] devicefarm:GetProject */
	static readonly GET_PROJECT = "devicefarm:GetProject";
	/** [Read] devicefarm:GetRemoteAccessSession */
	static readonly GET_REMOTE_ACCESS_SESSION =
		"devicefarm:GetRemoteAccessSession";
	/** [Read] devicefarm:GetRun */
	static readonly GET_RUN = "devicefarm:GetRun";
	/** [Read] devicefarm:GetSuite */
	static readonly GET_SUITE = "devicefarm:GetSuite";
	/** [Read] devicefarm:GetTest */
	static readonly GET_TEST = "devicefarm:GetTest";
	/** [Read] devicefarm:GetTestGridProject */
	static readonly GET_TEST_GRID_PROJECT = "devicefarm:GetTestGridProject";
	/** [Read] devicefarm:GetTestGridSession */
	static readonly GET_TEST_GRID_SESSION = "devicefarm:GetTestGridSession";
	/** [Read] devicefarm:GetUpload */
	static readonly GET_UPLOAD = "devicefarm:GetUpload";
	/** [Read] devicefarm:GetVPCEConfiguration */
	static readonly GET_VPCE_CONFIGURATION = "devicefarm:GetVPCEConfiguration";
	/** [Write] devicefarm:InstallToRemoteAccessSession */
	static readonly INSTALL_TO_REMOTE_ACCESS_SESSION =
		"devicefarm:InstallToRemoteAccessSession";
	/** [List] devicefarm:ListArtifacts */
	static readonly LIST_ARTIFACTS = "devicefarm:ListArtifacts";
	/** [List] devicefarm:ListDeviceInstances */
	static readonly LIST_DEVICE_INSTANCES = "devicefarm:ListDeviceInstances";
	/** [List] devicefarm:ListDevicePools */
	static readonly LIST_DEVICE_POOLS = "devicefarm:ListDevicePools";
	/** [List] devicefarm:ListDevices */
	static readonly LIST_DEVICES = "devicefarm:ListDevices";
	/** [List] devicefarm:ListInstanceProfiles */
	static readonly LIST_INSTANCE_PROFILES = "devicefarm:ListInstanceProfiles";
	/** [List] devicefarm:ListJobs */
	static readonly LIST_JOBS = "devicefarm:ListJobs";
	/** [List] devicefarm:ListNetworkProfiles */
	static readonly LIST_NETWORK_PROFILES = "devicefarm:ListNetworkProfiles";
	/** [List] devicefarm:ListOfferingPromotions */
	static readonly LIST_OFFERING_PROMOTIONS =
		"devicefarm:ListOfferingPromotions";
	/** [List] devicefarm:ListOfferingTransactions */
	static readonly LIST_OFFERING_TRANSACTIONS =
		"devicefarm:ListOfferingTransactions";
	/** [List] devicefarm:ListOfferings */
	static readonly LIST_OFFERINGS = "devicefarm:ListOfferings";
	/** [List] devicefarm:ListProjects */
	static readonly LIST_PROJECTS = "devicefarm:ListProjects";
	/** [List] devicefarm:ListRemoteAccessSessions */
	static readonly LIST_REMOTE_ACCESS_SESSIONS =
		"devicefarm:ListRemoteAccessSessions";
	/** [List] devicefarm:ListRuns */
	static readonly LIST_RUNS = "devicefarm:ListRuns";
	/** [List] devicefarm:ListSamples */
	static readonly LIST_SAMPLES = "devicefarm:ListSamples";
	/** [List] devicefarm:ListSuites */
	static readonly LIST_SUITES = "devicefarm:ListSuites";
	/** [List] devicefarm:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "devicefarm:ListTagsForResource";
	/** [List] devicefarm:ListTestGridProjects */
	static readonly LIST_TEST_GRID_PROJECTS = "devicefarm:ListTestGridProjects";
	/** [List] devicefarm:ListTestGridSessionActions */
	static readonly LIST_TEST_GRID_SESSION_ACTIONS =
		"devicefarm:ListTestGridSessionActions";
	/** [List] devicefarm:ListTestGridSessionArtifacts */
	static readonly LIST_TEST_GRID_SESSION_ARTIFACTS =
		"devicefarm:ListTestGridSessionArtifacts";
	/** [List] devicefarm:ListTestGridSessions */
	static readonly LIST_TEST_GRID_SESSIONS = "devicefarm:ListTestGridSessions";
	/** [List] devicefarm:ListTests */
	static readonly LIST_TESTS = "devicefarm:ListTests";
	/** [List] devicefarm:ListUniqueProblems */
	static readonly LIST_UNIQUE_PROBLEMS = "devicefarm:ListUniqueProblems";
	/** [List] devicefarm:ListUploads */
	static readonly LIST_UPLOADS = "devicefarm:ListUploads";
	/** [List] devicefarm:ListVPCEConfigurations */
	static readonly LIST_VPCE_CONFIGURATIONS =
		"devicefarm:ListVPCEConfigurations";
	/** [Write] devicefarm:PurchaseOffering */
	static readonly PURCHASE_OFFERING = "devicefarm:PurchaseOffering";
	/** [Write] devicefarm:RenewOffering */
	static readonly RENEW_OFFERING = "devicefarm:RenewOffering";
	/** [Write] devicefarm:ScheduleRun */
	static readonly SCHEDULE_RUN = "devicefarm:ScheduleRun";
	/** [Write] devicefarm:StopJob */
	static readonly STOP_JOB = "devicefarm:StopJob";
	/** [Write] devicefarm:StopRemoteAccessSession */
	static readonly STOP_REMOTE_ACCESS_SESSION =
		"devicefarm:StopRemoteAccessSession";
	/** [Write] devicefarm:StopRun */
	static readonly STOP_RUN = "devicefarm:StopRun";
	/** [Tagging] devicefarm:TagResource */
	static readonly TAG_RESOURCE = "devicefarm:TagResource";
	/** [Tagging] devicefarm:UntagResource */
	static readonly UNTAG_RESOURCE = "devicefarm:UntagResource";
	/** [Write] devicefarm:UpdateDeviceInstance */
	static readonly UPDATE_DEVICE_INSTANCE = "devicefarm:UpdateDeviceInstance";
	/** [Write] devicefarm:UpdateDevicePool */
	static readonly UPDATE_DEVICE_POOL = "devicefarm:UpdateDevicePool";
	/** [Write] devicefarm:UpdateInstanceProfile */
	static readonly UPDATE_INSTANCE_PROFILE = "devicefarm:UpdateInstanceProfile";
	/** [Write] devicefarm:UpdateNetworkProfile */
	static readonly UPDATE_NETWORK_PROFILE = "devicefarm:UpdateNetworkProfile";
	/** [Write] devicefarm:UpdateProject */
	static readonly UPDATE_PROJECT = "devicefarm:UpdateProject";
	/** [Write] devicefarm:UpdateTestGridProject */
	static readonly UPDATE_TEST_GRID_PROJECT = "devicefarm:UpdateTestGridProject";
	/** [Write] devicefarm:UpdateUpload */
	static readonly UPDATE_UPLOAD = "devicefarm:UpdateUpload";
	/** [Write] devicefarm:UpdateVPCEConfiguration */
	static readonly UPDATE_VPCE_CONFIGURATION =
		"devicefarm:UpdateVPCEConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DevicefarmActions.GET_ACCOUNT_SETTINGS,
		DevicefarmActions.GET_DEVICE,
		DevicefarmActions.GET_DEVICE_INSTANCE,
		DevicefarmActions.GET_DEVICE_POOL,
		DevicefarmActions.GET_DEVICE_POOL_COMPATIBILITY,
		DevicefarmActions.GET_INSTANCE_PROFILE,
		DevicefarmActions.GET_JOB,
		DevicefarmActions.GET_NETWORK_PROFILE,
		DevicefarmActions.GET_OFFERING_STATUS,
		DevicefarmActions.GET_PROJECT,
		DevicefarmActions.GET_REMOTE_ACCESS_SESSION,
		DevicefarmActions.GET_RUN,
		DevicefarmActions.GET_SUITE,
		DevicefarmActions.GET_TEST,
		DevicefarmActions.GET_TEST_GRID_PROJECT,
		DevicefarmActions.GET_TEST_GRID_SESSION,
		DevicefarmActions.GET_UPLOAD,
		DevicefarmActions.GET_VPCE_CONFIGURATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DevicefarmActions.CREATE_DEVICE_POOL,
		DevicefarmActions.CREATE_INSTANCE_PROFILE,
		DevicefarmActions.CREATE_NETWORK_PROFILE,
		DevicefarmActions.CREATE_PROJECT,
		DevicefarmActions.CREATE_REMOTE_ACCESS_SESSION,
		DevicefarmActions.CREATE_TEST_GRID_PROJECT,
		DevicefarmActions.CREATE_TEST_GRID_URL,
		DevicefarmActions.CREATE_UPLOAD,
		DevicefarmActions.CREATE_VPCE_CONFIGURATION,
		DevicefarmActions.DELETE_DEVICE_POOL,
		DevicefarmActions.DELETE_INSTANCE_PROFILE,
		DevicefarmActions.DELETE_NETWORK_PROFILE,
		DevicefarmActions.DELETE_PROJECT,
		DevicefarmActions.DELETE_REMOTE_ACCESS_SESSION,
		DevicefarmActions.DELETE_RUN,
		DevicefarmActions.DELETE_TEST_GRID_PROJECT,
		DevicefarmActions.DELETE_UPLOAD,
		DevicefarmActions.DELETE_VPCE_CONFIGURATION,
		DevicefarmActions.INSTALL_TO_REMOTE_ACCESS_SESSION,
		DevicefarmActions.PURCHASE_OFFERING,
		DevicefarmActions.RENEW_OFFERING,
		DevicefarmActions.SCHEDULE_RUN,
		DevicefarmActions.STOP_JOB,
		DevicefarmActions.STOP_REMOTE_ACCESS_SESSION,
		DevicefarmActions.STOP_RUN,
		DevicefarmActions.UPDATE_DEVICE_INSTANCE,
		DevicefarmActions.UPDATE_DEVICE_POOL,
		DevicefarmActions.UPDATE_INSTANCE_PROFILE,
		DevicefarmActions.UPDATE_NETWORK_PROFILE,
		DevicefarmActions.UPDATE_PROJECT,
		DevicefarmActions.UPDATE_TEST_GRID_PROJECT,
		DevicefarmActions.UPDATE_UPLOAD,
		DevicefarmActions.UPDATE_VPCE_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DevicefarmActions.LIST_ARTIFACTS,
		DevicefarmActions.LIST_DEVICE_INSTANCES,
		DevicefarmActions.LIST_DEVICE_POOLS,
		DevicefarmActions.LIST_DEVICES,
		DevicefarmActions.LIST_INSTANCE_PROFILES,
		DevicefarmActions.LIST_JOBS,
		DevicefarmActions.LIST_NETWORK_PROFILES,
		DevicefarmActions.LIST_OFFERING_PROMOTIONS,
		DevicefarmActions.LIST_OFFERING_TRANSACTIONS,
		DevicefarmActions.LIST_OFFERINGS,
		DevicefarmActions.LIST_PROJECTS,
		DevicefarmActions.LIST_REMOTE_ACCESS_SESSIONS,
		DevicefarmActions.LIST_RUNS,
		DevicefarmActions.LIST_SAMPLES,
		DevicefarmActions.LIST_SUITES,
		DevicefarmActions.LIST_TAGS_FOR_RESOURCE,
		DevicefarmActions.LIST_TEST_GRID_PROJECTS,
		DevicefarmActions.LIST_TEST_GRID_SESSION_ACTIONS,
		DevicefarmActions.LIST_TEST_GRID_SESSION_ARTIFACTS,
		DevicefarmActions.LIST_TEST_GRID_SESSIONS,
		DevicefarmActions.LIST_TESTS,
		DevicefarmActions.LIST_UNIQUE_PROBLEMS,
		DevicefarmActions.LIST_UPLOADS,
		DevicefarmActions.LIST_VPCE_CONFIGURATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DevicefarmActions.TAG_RESOURCE,
		DevicefarmActions.UNTAG_RESOURCE,
	];
}

const ArtifactArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):artifact:(?<resourceId>[^:/?]+)$",
);
const DeviceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*)::device:(?<resourceId>[^:/?]+)$",
);
const DeviceinstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*)::deviceinstance:(?<resourceId>[^:/?]+)$",
);
const DevicepoolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):devicepool:(?<resourceId>[^:/?]+)$",
);
const InstanceprofileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):instanceprofile:(?<resourceId>[^:/?]+)$",
);
const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):job:(?<resourceId>[^:/?]+)$",
);
const NetworkprofileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):networkprofile:(?<resourceId>[^:/?]+)$",
);
const ProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):project:(?<resourceId>[^:/?]+)$",
);
const RunArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):run:(?<resourceId>[^:/?]+)$",
);
const SampleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):sample:(?<resourceId>[^:/?]+)$",
);
const SessionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):session:(?<resourceId>[^:/?]+)$",
);
const SuiteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):suite:(?<resourceId>[^:/?]+)$",
);
const TestArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):test:(?<resourceId>[^:/?]+)$",
);
const TestgridProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):testgrid-project:(?<resourceId>[^:/?]+)$",
);
const TestgridSessionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):testgrid-session:(?<resourceId>[^:/?]+)$",
);
const UploadArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):upload:(?<resourceId>[^:/?]+)$",
);
const VpceconfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):vpceconfiguration:(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for devicefarm resources.
 */
export class DevicefarmResources {
	/**
	 * Builds an ARN for the artifact resource.
	 */
	static artifact(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:artifact:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the artifact resource.
	 */
	static isValidArtifactArn(arn: string): boolean {
		return ArtifactArnRegex.test(arn);
	}

	/**
	 * Parses a artifact ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseArtifactArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ArtifactArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid artifact ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the device resource.
	 */
	static device(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}::device:${props.resourceId}`;
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
		resourceId: string;
	} {
		const match = DeviceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid device ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the deviceinstance resource.
	 */
	static deviceinstance(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}::deviceinstance:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deviceinstance resource.
	 */
	static isValidDeviceinstanceArn(arn: string): boolean {
		return DeviceinstanceArnRegex.test(arn);
	}

	/**
	 * Parses a deviceinstance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeviceinstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DeviceinstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deviceinstance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the devicepool resource.
	 */
	static devicepool(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:devicepool:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the devicepool resource.
	 */
	static isValidDevicepoolArn(arn: string): boolean {
		return DevicepoolArnRegex.test(arn);
	}

	/**
	 * Parses a devicepool ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDevicepoolArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DevicepoolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid devicepool ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the instanceprofile resource.
	 */
	static instanceprofile(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:instanceprofile:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the instanceprofile resource.
	 */
	static isValidInstanceprofileArn(arn: string): boolean {
		return InstanceprofileArnRegex.test(arn);
	}

	/**
	 * Parses a instanceprofile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceprofileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = InstanceprofileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid instanceprofile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:job:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the networkprofile resource.
	 */
	static networkprofile(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:networkprofile:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the networkprofile resource.
	 */
	static isValidNetworkprofileArn(arn: string): boolean {
		return NetworkprofileArnRegex.test(arn);
	}

	/**
	 * Parses a networkprofile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNetworkprofileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = NetworkprofileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid networkprofile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:project:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the project resource.
	 */
	static isValidProjectArn(arn: string): boolean {
		return ProjectArnRegex.test(arn);
	}

	/**
	 * Parses a project ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the run resource.
	 */
	static run(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:run:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the run resource.
	 */
	static isValidRunArn(arn: string): boolean {
		return RunArnRegex.test(arn);
	}

	/**
	 * Parses a run ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRunArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = RunArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid run ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the sample resource.
	 */
	static sample(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:sample:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sample resource.
	 */
	static isValidSampleArn(arn: string): boolean {
		return SampleArnRegex.test(arn);
	}

	/**
	 * Parses a sample ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSampleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = SampleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sample ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the session resource.
	 */
	static session(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:session:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the session resource.
	 */
	static isValidSessionArn(arn: string): boolean {
		return SessionArnRegex.test(arn);
	}

	/**
	 * Parses a session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSessionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = SessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the suite resource.
	 */
	static suite(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:suite:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the suite resource.
	 */
	static isValidSuiteArn(arn: string): boolean {
		return SuiteArnRegex.test(arn);
	}

	/**
	 * Parses a suite ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSuiteArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = SuiteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid suite ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the test resource.
	 */
	static test(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:test:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the test resource.
	 */
	static isValidTestArn(arn: string): boolean {
		return TestArnRegex.test(arn);
	}

	/**
	 * Parses a test ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTestArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = TestArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid test ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the testgrid-project resource.
	 */
	static testgridProject(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:testgrid-project:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the testgrid-project resource.
	 */
	static isValidTestgridProjectArn(arn: string): boolean {
		return TestgridProjectArnRegex.test(arn);
	}

	/**
	 * Parses a testgrid-project ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTestgridProjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = TestgridProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid testgrid-project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the testgrid-session resource.
	 */
	static testgridSession(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:testgrid-session:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the testgrid-session resource.
	 */
	static isValidTestgridSessionArn(arn: string): boolean {
		return TestgridSessionArnRegex.test(arn);
	}

	/**
	 * Parses a testgrid-session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTestgridSessionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = TestgridSessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid testgrid-session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the upload resource.
	 */
	static upload(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:upload:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the upload resource.
	 */
	static isValidUploadArn(arn: string): boolean {
		return UploadArnRegex.test(arn);
	}

	/**
	 * Parses a upload ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUploadArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = UploadArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid upload ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the vpceconfiguration resource.
	 */
	static vpceconfiguration(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:devicefarm:${props.region ?? "*"}:${props.account ?? "*"}:vpceconfiguration:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vpceconfiguration resource.
	 */
	static isValidVpceconfigurationArn(arn: string): boolean {
		return VpceconfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a vpceconfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVpceconfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = VpceconfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vpceconfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for devicefarm.
 */
export class DevicefarmOperations {
	/** IAM actions required for the CreateDevicePool API call. */
	static readonly CREATE_DEVICE_POOL: string[] = [
		"devicefarm:CreateDevicePool",
	];
	/** IAM actions required for the CreateInstanceProfile API call. */
	static readonly CREATE_INSTANCE_PROFILE: string[] = [
		"devicefarm:CreateInstanceProfile",
	];
	/** IAM actions required for the CreateNetworkProfile API call. */
	static readonly CREATE_NETWORK_PROFILE: string[] = [
		"devicefarm:CreateNetworkProfile",
	];
	/** IAM actions required for the CreateProject API call. */
	static readonly CREATE_PROJECT: string[] = [
		"devicefarm:CreateProject",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateRemoteAccessSession API call. */
	static readonly CREATE_REMOTE_ACCESS_SESSION: string[] = [
		"devicefarm:CreateRemoteAccessSession",
	];
	/** IAM actions required for the CreateTestGridProject API call. */
	static readonly CREATE_TEST_GRID_PROJECT: string[] = [
		"devicefarm:CreateTestGridProject",
	];
	/** IAM actions required for the CreateTestGridUrl API call. */
	static readonly CREATE_TEST_GRID_URL: string[] = [
		"devicefarm:CreateTestGridUrl",
	];
	/** IAM actions required for the CreateUpload API call. */
	static readonly CREATE_UPLOAD: string[] = ["devicefarm:CreateUpload"];
	/** IAM actions required for the CreateVPCEConfiguration API call. */
	static readonly CREATE_VPCE_CONFIGURATION: string[] = [
		"devicefarm:CreateVPCEConfiguration",
	];
	/** IAM actions required for the DeleteDevicePool API call. */
	static readonly DELETE_DEVICE_POOL: string[] = [
		"devicefarm:DeleteDevicePool",
	];
	/** IAM actions required for the DeleteInstanceProfile API call. */
	static readonly DELETE_INSTANCE_PROFILE: string[] = [
		"devicefarm:DeleteInstanceProfile",
	];
	/** IAM actions required for the DeleteNetworkProfile API call. */
	static readonly DELETE_NETWORK_PROFILE: string[] = [
		"devicefarm:DeleteNetworkProfile",
	];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DELETE_PROJECT: string[] = ["devicefarm:DeleteProject"];
	/** IAM actions required for the DeleteRemoteAccessSession API call. */
	static readonly DELETE_REMOTE_ACCESS_SESSION: string[] = [
		"devicefarm:DeleteRemoteAccessSession",
	];
	/** IAM actions required for the DeleteRun API call. */
	static readonly DELETE_RUN: string[] = ["devicefarm:DeleteRun"];
	/** IAM actions required for the DeleteTestGridProject API call. */
	static readonly DELETE_TEST_GRID_PROJECT: string[] = [
		"devicefarm:DeleteTestGridProject",
	];
	/** IAM actions required for the DeleteUpload API call. */
	static readonly DELETE_UPLOAD: string[] = ["devicefarm:DeleteUpload"];
	/** IAM actions required for the DeleteVPCEConfiguration API call. */
	static readonly DELETE_VPCE_CONFIGURATION: string[] = [
		"devicefarm:DeleteVPCEConfiguration",
	];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly GET_ACCOUNT_SETTINGS: string[] = [
		"devicefarm:GetAccountSettings",
	];
	/** IAM actions required for the GetDevice API call. */
	static readonly GET_DEVICE: string[] = ["devicefarm:GetDevice"];
	/** IAM actions required for the GetDeviceInstance API call. */
	static readonly GET_DEVICE_INSTANCE: string[] = [
		"devicefarm:GetDeviceInstance",
	];
	/** IAM actions required for the GetDevicePool API call. */
	static readonly GET_DEVICE_POOL: string[] = ["devicefarm:GetDevicePool"];
	/** IAM actions required for the GetDevicePoolCompatibility API call. */
	static readonly GET_DEVICE_POOL_COMPATIBILITY: string[] = [
		"devicefarm:GetDevicePoolCompatibility",
	];
	/** IAM actions required for the GetInstanceProfile API call. */
	static readonly GET_INSTANCE_PROFILE: string[] = [
		"devicefarm:GetInstanceProfile",
	];
	/** IAM actions required for the GetJob API call. */
	static readonly GET_JOB: string[] = ["devicefarm:GetJob"];
	/** IAM actions required for the GetNetworkProfile API call. */
	static readonly GET_NETWORK_PROFILE: string[] = [
		"devicefarm:GetNetworkProfile",
	];
	/** IAM actions required for the GetOfferingStatus API call. */
	static readonly GET_OFFERING_STATUS: string[] = [
		"devicefarm:GetOfferingStatus",
	];
	/** IAM actions required for the GetProject API call. */
	static readonly GET_PROJECT: string[] = ["devicefarm:GetProject"];
	/** IAM actions required for the GetRemoteAccessSession API call. */
	static readonly GET_REMOTE_ACCESS_SESSION: string[] = [
		"devicefarm:GetRemoteAccessSession",
	];
	/** IAM actions required for the GetRun API call. */
	static readonly GET_RUN: string[] = ["devicefarm:GetRun"];
	/** IAM actions required for the GetSuite API call. */
	static readonly GET_SUITE: string[] = ["devicefarm:GetSuite"];
	/** IAM actions required for the GetTest API call. */
	static readonly GET_TEST: string[] = ["devicefarm:GetTest"];
	/** IAM actions required for the GetTestGridProject API call. */
	static readonly GET_TEST_GRID_PROJECT: string[] = [
		"devicefarm:GetTestGridProject",
	];
	/** IAM actions required for the GetTestGridSession API call. */
	static readonly GET_TEST_GRID_SESSION: string[] = [
		"devicefarm:GetTestGridSession",
	];
	/** IAM actions required for the GetUpload API call. */
	static readonly GET_UPLOAD: string[] = ["devicefarm:GetUpload"];
	/** IAM actions required for the GetVPCEConfiguration API call. */
	static readonly GET_VPCE_CONFIGURATION: string[] = [
		"devicefarm:GetVPCEConfiguration",
	];
	/** IAM actions required for the InstallToRemoteAccessSession API call. */
	static readonly INSTALL_TO_REMOTE_ACCESS_SESSION: string[] = [
		"devicefarm:InstallToRemoteAccessSession",
	];
	/** IAM actions required for the ListArtifacts API call. */
	static readonly LIST_ARTIFACTS: string[] = ["devicefarm:ListArtifacts"];
	/** IAM actions required for the ListDeviceInstances API call. */
	static readonly LIST_DEVICE_INSTANCES: string[] = [
		"devicefarm:ListDeviceInstances",
	];
	/** IAM actions required for the ListDevicePools API call. */
	static readonly LIST_DEVICE_POOLS: string[] = ["devicefarm:ListDevicePools"];
	/** IAM actions required for the ListDevices API call. */
	static readonly LIST_DEVICES: string[] = ["devicefarm:ListDevices"];
	/** IAM actions required for the ListInstanceProfiles API call. */
	static readonly LIST_INSTANCE_PROFILES: string[] = [
		"devicefarm:ListInstanceProfiles",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["devicefarm:ListJobs"];
	/** IAM actions required for the ListNetworkProfiles API call. */
	static readonly LIST_NETWORK_PROFILES: string[] = [
		"devicefarm:ListNetworkProfiles",
	];
	/** IAM actions required for the ListOfferingPromotions API call. */
	static readonly LIST_OFFERING_PROMOTIONS: string[] = [
		"devicefarm:ListOfferingPromotions",
	];
	/** IAM actions required for the ListOfferingTransactions API call. */
	static readonly LIST_OFFERING_TRANSACTIONS: string[] = [
		"devicefarm:ListOfferingTransactions",
	];
	/** IAM actions required for the ListOfferings API call. */
	static readonly LIST_OFFERINGS: string[] = ["devicefarm:ListOfferings"];
	/** IAM actions required for the ListProjects API call. */
	static readonly LIST_PROJECTS: string[] = ["devicefarm:ListProjects"];
	/** IAM actions required for the ListRemoteAccessSessions API call. */
	static readonly LIST_REMOTE_ACCESS_SESSIONS: string[] = [
		"devicefarm:ListRemoteAccessSessions",
	];
	/** IAM actions required for the ListRuns API call. */
	static readonly LIST_RUNS: string[] = ["devicefarm:ListRuns"];
	/** IAM actions required for the ListSamples API call. */
	static readonly LIST_SAMPLES: string[] = ["devicefarm:ListSamples"];
	/** IAM actions required for the ListSuites API call. */
	static readonly LIST_SUITES: string[] = ["devicefarm:ListSuites"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"devicefarm:ListTagsForResource",
	];
	/** IAM actions required for the ListTestGridProjects API call. */
	static readonly LIST_TEST_GRID_PROJECTS: string[] = [
		"devicefarm:ListTestGridProjects",
	];
	/** IAM actions required for the ListTestGridSessionActions API call. */
	static readonly LIST_TEST_GRID_SESSION_ACTIONS: string[] = [
		"devicefarm:ListTestGridSessionActions",
	];
	/** IAM actions required for the ListTestGridSessionArtifacts API call. */
	static readonly LIST_TEST_GRID_SESSION_ARTIFACTS: string[] = [
		"devicefarm:ListTestGridSessionArtifacts",
	];
	/** IAM actions required for the ListTestGridSessions API call. */
	static readonly LIST_TEST_GRID_SESSIONS: string[] = [
		"devicefarm:ListTestGridSessions",
	];
	/** IAM actions required for the ListTests API call. */
	static readonly LIST_TESTS: string[] = ["devicefarm:ListTests"];
	/** IAM actions required for the ListUniqueProblems API call. */
	static readonly LIST_UNIQUE_PROBLEMS: string[] = [
		"devicefarm:ListUniqueProblems",
	];
	/** IAM actions required for the ListUploads API call. */
	static readonly LIST_UPLOADS: string[] = ["devicefarm:ListUploads"];
	/** IAM actions required for the ListVPCEConfigurations API call. */
	static readonly LIST_VPCE_CONFIGURATIONS: string[] = [
		"devicefarm:ListVPCEConfigurations",
	];
	/** IAM actions required for the PurchaseOffering API call. */
	static readonly PURCHASE_OFFERING: string[] = ["devicefarm:PurchaseOffering"];
	/** IAM actions required for the RenewOffering API call. */
	static readonly RENEW_OFFERING: string[] = ["devicefarm:RenewOffering"];
	/** IAM actions required for the ScheduleRun API call. */
	static readonly SCHEDULE_RUN: string[] = [
		"iam:PassRole",
		"devicefarm:ScheduleRun",
	];
	/** IAM actions required for the StopJob API call. */
	static readonly STOP_JOB: string[] = ["devicefarm:StopJob"];
	/** IAM actions required for the StopRemoteAccessSession API call. */
	static readonly STOP_REMOTE_ACCESS_SESSION: string[] = [
		"devicefarm:StopRemoteAccessSession",
	];
	/** IAM actions required for the StopRun API call. */
	static readonly STOP_RUN: string[] = ["devicefarm:StopRun"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["devicefarm:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["devicefarm:UntagResource"];
	/** IAM actions required for the UpdateDeviceInstance API call. */
	static readonly UPDATE_DEVICE_INSTANCE: string[] = [
		"devicefarm:UpdateDeviceInstance",
	];
	/** IAM actions required for the UpdateDevicePool API call. */
	static readonly UPDATE_DEVICE_POOL: string[] = [
		"devicefarm:UpdateDevicePool",
	];
	/** IAM actions required for the UpdateInstanceProfile API call. */
	static readonly UPDATE_INSTANCE_PROFILE: string[] = [
		"devicefarm:UpdateInstanceProfile",
	];
	/** IAM actions required for the UpdateNetworkProfile API call. */
	static readonly UPDATE_NETWORK_PROFILE: string[] = [
		"devicefarm:UpdateNetworkProfile",
	];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UPDATE_PROJECT: string[] = [
		"iam:PassRole",
		"devicefarm:UpdateProject",
	];
	/** IAM actions required for the UpdateTestGridProject API call. */
	static readonly UPDATE_TEST_GRID_PROJECT: string[] = [
		"devicefarm:UpdateTestGridProject",
	];
	/** IAM actions required for the UpdateUpload API call. */
	static readonly UPDATE_UPLOAD: string[] = ["devicefarm:UpdateUpload"];
	/** IAM actions required for the UpdateVPCEConfiguration API call. */
	static readonly UPDATE_VPCE_CONFIGURATION: string[] = [
		"devicefarm:UpdateVPCEConfiguration",
	];
}

/**
 * Condition key constants and builders for devicefarm.
 */
export class DevicefarmConditions {
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
