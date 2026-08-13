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
	static readonly CreateDevicePool = "devicefarm:CreateDevicePool";
	/** [Write] devicefarm:CreateInstanceProfile */
	static readonly CreateInstanceProfile = "devicefarm:CreateInstanceProfile";
	/** [Write] devicefarm:CreateNetworkProfile */
	static readonly CreateNetworkProfile = "devicefarm:CreateNetworkProfile";
	/** [Write] devicefarm:CreateProject */
	static readonly CreateProject = "devicefarm:CreateProject";
	/** [Write] devicefarm:CreateRemoteAccessSession */
	static readonly CreateRemoteAccessSession =
		"devicefarm:CreateRemoteAccessSession";
	/** [Write] devicefarm:CreateTestGridProject */
	static readonly CreateTestGridProject = "devicefarm:CreateTestGridProject";
	/** [Write] devicefarm:CreateTestGridUrl */
	static readonly CreateTestGridUrl = "devicefarm:CreateTestGridUrl";
	/** [Write] devicefarm:CreateUpload */
	static readonly CreateUpload = "devicefarm:CreateUpload";
	/** [Write] devicefarm:CreateVPCEConfiguration */
	static readonly CreateVPCEConfiguration =
		"devicefarm:CreateVPCEConfiguration";
	/** [Write] devicefarm:DeleteDevicePool */
	static readonly DeleteDevicePool = "devicefarm:DeleteDevicePool";
	/** [Write] devicefarm:DeleteInstanceProfile */
	static readonly DeleteInstanceProfile = "devicefarm:DeleteInstanceProfile";
	/** [Write] devicefarm:DeleteNetworkProfile */
	static readonly DeleteNetworkProfile = "devicefarm:DeleteNetworkProfile";
	/** [Write] devicefarm:DeleteProject */
	static readonly DeleteProject = "devicefarm:DeleteProject";
	/** [Write] devicefarm:DeleteRemoteAccessSession */
	static readonly DeleteRemoteAccessSession =
		"devicefarm:DeleteRemoteAccessSession";
	/** [Write] devicefarm:DeleteRun */
	static readonly DeleteRun = "devicefarm:DeleteRun";
	/** [Write] devicefarm:DeleteTestGridProject */
	static readonly DeleteTestGridProject = "devicefarm:DeleteTestGridProject";
	/** [Write] devicefarm:DeleteUpload */
	static readonly DeleteUpload = "devicefarm:DeleteUpload";
	/** [Write] devicefarm:DeleteVPCEConfiguration */
	static readonly DeleteVPCEConfiguration =
		"devicefarm:DeleteVPCEConfiguration";
	/** [Read] devicefarm:GetAccountSettings */
	static readonly actionGetAccountSettings = "devicefarm:GetAccountSettings";
	/** [Read] devicefarm:GetDevice */
	static readonly actionGetDevice = "devicefarm:GetDevice";
	/** [Read] devicefarm:GetDeviceInstance */
	static readonly actionGetDeviceInstance = "devicefarm:GetDeviceInstance";
	/** [Read] devicefarm:GetDevicePool */
	static readonly actionGetDevicePool = "devicefarm:GetDevicePool";
	/** [Read] devicefarm:GetDevicePoolCompatibility */
	static readonly actionGetDevicePoolCompatibility =
		"devicefarm:GetDevicePoolCompatibility";
	/** [Read] devicefarm:GetInstanceProfile */
	static readonly actionGetInstanceProfile = "devicefarm:GetInstanceProfile";
	/** [Read] devicefarm:GetJob */
	static readonly actionGetJob = "devicefarm:GetJob";
	/** [Read] devicefarm:GetNetworkProfile */
	static readonly actionGetNetworkProfile = "devicefarm:GetNetworkProfile";
	/** [Read] devicefarm:GetOfferingStatus */
	static readonly actionGetOfferingStatus = "devicefarm:GetOfferingStatus";
	/** [Read] devicefarm:GetProject */
	static readonly actionGetProject = "devicefarm:GetProject";
	/** [Read] devicefarm:GetRemoteAccessSession */
	static readonly actionGetRemoteAccessSession =
		"devicefarm:GetRemoteAccessSession";
	/** [Read] devicefarm:GetRun */
	static readonly actionGetRun = "devicefarm:GetRun";
	/** [Read] devicefarm:GetSuite */
	static readonly actionGetSuite = "devicefarm:GetSuite";
	/** [Read] devicefarm:GetTest */
	static readonly actionGetTest = "devicefarm:GetTest";
	/** [Read] devicefarm:GetTestGridProject */
	static readonly actionGetTestGridProject = "devicefarm:GetTestGridProject";
	/** [Read] devicefarm:GetTestGridSession */
	static readonly actionGetTestGridSession = "devicefarm:GetTestGridSession";
	/** [Read] devicefarm:GetUpload */
	static readonly actionGetUpload = "devicefarm:GetUpload";
	/** [Read] devicefarm:GetVPCEConfiguration */
	static readonly actionGetVPCEConfiguration =
		"devicefarm:GetVPCEConfiguration";
	/** [Write] devicefarm:InstallToRemoteAccessSession */
	static readonly InstallToRemoteAccessSession =
		"devicefarm:InstallToRemoteAccessSession";
	/** [List] devicefarm:ListArtifacts */
	static readonly ListArtifacts = "devicefarm:ListArtifacts";
	/** [List] devicefarm:ListDeviceInstances */
	static readonly ListDeviceInstances = "devicefarm:ListDeviceInstances";
	/** [List] devicefarm:ListDevicePools */
	static readonly ListDevicePools = "devicefarm:ListDevicePools";
	/** [List] devicefarm:ListDevices */
	static readonly ListDevices = "devicefarm:ListDevices";
	/** [List] devicefarm:ListInstanceProfiles */
	static readonly ListInstanceProfiles = "devicefarm:ListInstanceProfiles";
	/** [List] devicefarm:ListJobs */
	static readonly ListJobs = "devicefarm:ListJobs";
	/** [List] devicefarm:ListNetworkProfiles */
	static readonly ListNetworkProfiles = "devicefarm:ListNetworkProfiles";
	/** [List] devicefarm:ListOfferingPromotions */
	static readonly ListOfferingPromotions = "devicefarm:ListOfferingPromotions";
	/** [List] devicefarm:ListOfferingTransactions */
	static readonly ListOfferingTransactions =
		"devicefarm:ListOfferingTransactions";
	/** [List] devicefarm:ListOfferings */
	static readonly ListOfferings = "devicefarm:ListOfferings";
	/** [List] devicefarm:ListProjects */
	static readonly ListProjects = "devicefarm:ListProjects";
	/** [List] devicefarm:ListRemoteAccessSessions */
	static readonly ListRemoteAccessSessions =
		"devicefarm:ListRemoteAccessSessions";
	/** [List] devicefarm:ListRuns */
	static readonly ListRuns = "devicefarm:ListRuns";
	/** [List] devicefarm:ListSamples */
	static readonly ListSamples = "devicefarm:ListSamples";
	/** [List] devicefarm:ListSuites */
	static readonly ListSuites = "devicefarm:ListSuites";
	/** [List] devicefarm:ListTagsForResource */
	static readonly ListTagsForResource = "devicefarm:ListTagsForResource";
	/** [List] devicefarm:ListTestGridProjects */
	static readonly ListTestGridProjects = "devicefarm:ListTestGridProjects";
	/** [List] devicefarm:ListTestGridSessionActions */
	static readonly ListTestGridSessionActions =
		"devicefarm:ListTestGridSessionActions";
	/** [List] devicefarm:ListTestGridSessionArtifacts */
	static readonly ListTestGridSessionArtifacts =
		"devicefarm:ListTestGridSessionArtifacts";
	/** [List] devicefarm:ListTestGridSessions */
	static readonly ListTestGridSessions = "devicefarm:ListTestGridSessions";
	/** [List] devicefarm:ListTests */
	static readonly ListTests = "devicefarm:ListTests";
	/** [List] devicefarm:ListUniqueProblems */
	static readonly ListUniqueProblems = "devicefarm:ListUniqueProblems";
	/** [List] devicefarm:ListUploads */
	static readonly ListUploads = "devicefarm:ListUploads";
	/** [List] devicefarm:ListVPCEConfigurations */
	static readonly ListVPCEConfigurations = "devicefarm:ListVPCEConfigurations";
	/** [Write] devicefarm:PurchaseOffering */
	static readonly PurchaseOffering = "devicefarm:PurchaseOffering";
	/** [Write] devicefarm:RenewOffering */
	static readonly RenewOffering = "devicefarm:RenewOffering";
	/** [Write] devicefarm:ScheduleRun */
	static readonly ScheduleRun = "devicefarm:ScheduleRun";
	/** [Write] devicefarm:StopJob */
	static readonly StopJob = "devicefarm:StopJob";
	/** [Write] devicefarm:StopRemoteAccessSession */
	static readonly StopRemoteAccessSession =
		"devicefarm:StopRemoteAccessSession";
	/** [Write] devicefarm:StopRun */
	static readonly StopRun = "devicefarm:StopRun";
	/** [Tagging] devicefarm:TagResource */
	static readonly TagResource = "devicefarm:TagResource";
	/** [Tagging] devicefarm:UntagResource */
	static readonly UntagResource = "devicefarm:UntagResource";
	/** [Write] devicefarm:UpdateDeviceInstance */
	static readonly UpdateDeviceInstance = "devicefarm:UpdateDeviceInstance";
	/** [Write] devicefarm:UpdateDevicePool */
	static readonly UpdateDevicePool = "devicefarm:UpdateDevicePool";
	/** [Write] devicefarm:UpdateInstanceProfile */
	static readonly UpdateInstanceProfile = "devicefarm:UpdateInstanceProfile";
	/** [Write] devicefarm:UpdateNetworkProfile */
	static readonly UpdateNetworkProfile = "devicefarm:UpdateNetworkProfile";
	/** [Write] devicefarm:UpdateProject */
	static readonly UpdateProject = "devicefarm:UpdateProject";
	/** [Write] devicefarm:UpdateTestGridProject */
	static readonly UpdateTestGridProject = "devicefarm:UpdateTestGridProject";
	/** [Write] devicefarm:UpdateUpload */
	static readonly UpdateUpload = "devicefarm:UpdateUpload";
	/** [Write] devicefarm:UpdateVPCEConfiguration */
	static readonly UpdateVPCEConfiguration =
		"devicefarm:UpdateVPCEConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DevicefarmActions.actionGetAccountSettings,
		DevicefarmActions.actionGetDevice,
		DevicefarmActions.actionGetDeviceInstance,
		DevicefarmActions.actionGetDevicePool,
		DevicefarmActions.actionGetDevicePoolCompatibility,
		DevicefarmActions.actionGetInstanceProfile,
		DevicefarmActions.actionGetJob,
		DevicefarmActions.actionGetNetworkProfile,
		DevicefarmActions.actionGetOfferingStatus,
		DevicefarmActions.actionGetProject,
		DevicefarmActions.actionGetRemoteAccessSession,
		DevicefarmActions.actionGetRun,
		DevicefarmActions.actionGetSuite,
		DevicefarmActions.actionGetTest,
		DevicefarmActions.actionGetTestGridProject,
		DevicefarmActions.actionGetTestGridSession,
		DevicefarmActions.actionGetUpload,
		DevicefarmActions.actionGetVPCEConfiguration,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DevicefarmActions.CreateDevicePool,
		DevicefarmActions.CreateInstanceProfile,
		DevicefarmActions.CreateNetworkProfile,
		DevicefarmActions.CreateProject,
		DevicefarmActions.CreateRemoteAccessSession,
		DevicefarmActions.CreateTestGridProject,
		DevicefarmActions.CreateTestGridUrl,
		DevicefarmActions.CreateUpload,
		DevicefarmActions.CreateVPCEConfiguration,
		DevicefarmActions.DeleteDevicePool,
		DevicefarmActions.DeleteInstanceProfile,
		DevicefarmActions.DeleteNetworkProfile,
		DevicefarmActions.DeleteProject,
		DevicefarmActions.DeleteRemoteAccessSession,
		DevicefarmActions.DeleteRun,
		DevicefarmActions.DeleteTestGridProject,
		DevicefarmActions.DeleteUpload,
		DevicefarmActions.DeleteVPCEConfiguration,
		DevicefarmActions.InstallToRemoteAccessSession,
		DevicefarmActions.PurchaseOffering,
		DevicefarmActions.RenewOffering,
		DevicefarmActions.ScheduleRun,
		DevicefarmActions.StopJob,
		DevicefarmActions.StopRemoteAccessSession,
		DevicefarmActions.StopRun,
		DevicefarmActions.UpdateDeviceInstance,
		DevicefarmActions.UpdateDevicePool,
		DevicefarmActions.UpdateInstanceProfile,
		DevicefarmActions.UpdateNetworkProfile,
		DevicefarmActions.UpdateProject,
		DevicefarmActions.UpdateTestGridProject,
		DevicefarmActions.UpdateUpload,
		DevicefarmActions.UpdateVPCEConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DevicefarmActions.ListArtifacts,
		DevicefarmActions.ListDeviceInstances,
		DevicefarmActions.ListDevicePools,
		DevicefarmActions.ListDevices,
		DevicefarmActions.ListInstanceProfiles,
		DevicefarmActions.ListJobs,
		DevicefarmActions.ListNetworkProfiles,
		DevicefarmActions.ListOfferingPromotions,
		DevicefarmActions.ListOfferingTransactions,
		DevicefarmActions.ListOfferings,
		DevicefarmActions.ListProjects,
		DevicefarmActions.ListRemoteAccessSessions,
		DevicefarmActions.ListRuns,
		DevicefarmActions.ListSamples,
		DevicefarmActions.ListSuites,
		DevicefarmActions.ListTagsForResource,
		DevicefarmActions.ListTestGridProjects,
		DevicefarmActions.ListTestGridSessionActions,
		DevicefarmActions.ListTestGridSessionArtifacts,
		DevicefarmActions.ListTestGridSessions,
		DevicefarmActions.ListTests,
		DevicefarmActions.ListUniqueProblems,
		DevicefarmActions.ListUploads,
		DevicefarmActions.ListVPCEConfigurations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DevicefarmActions.TagResource,
		DevicefarmActions.UntagResource,
	];
}

/**
 * Properties for building a artifact ARN.
 */
export interface DevicefarmArtifactArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a artifact ARN.
 */
export interface DevicefarmArtifactArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a device ARN.
 */
export interface DevicefarmDeviceArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
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
export interface DevicefarmDeviceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a deviceinstance ARN.
 */
export interface DevicefarmDeviceinstanceArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a deviceinstance ARN.
 */
export interface DevicefarmDeviceinstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a devicepool ARN.
 */
export interface DevicefarmDevicepoolArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a devicepool ARN.
 */
export interface DevicefarmDevicepoolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a instanceprofile ARN.
 */
export interface DevicefarmInstanceprofileArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a instanceprofile ARN.
 */
export interface DevicefarmInstanceprofileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a job ARN.
 */
export interface DevicefarmJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a job ARN.
 */
export interface DevicefarmJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a networkprofile ARN.
 */
export interface DevicefarmNetworkprofileArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a networkprofile ARN.
 */
export interface DevicefarmNetworkprofileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a project ARN.
 */
export interface DevicefarmProjectArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a project ARN.
 */
export interface DevicefarmProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a run ARN.
 */
export interface DevicefarmRunArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a run ARN.
 */
export interface DevicefarmRunArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a sample ARN.
 */
export interface DevicefarmSampleArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a sample ARN.
 */
export interface DevicefarmSampleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a session ARN.
 */
export interface DevicefarmSessionArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a session ARN.
 */
export interface DevicefarmSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a suite ARN.
 */
export interface DevicefarmSuiteArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a suite ARN.
 */
export interface DevicefarmSuiteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a test ARN.
 */
export interface DevicefarmTestArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a test ARN.
 */
export interface DevicefarmTestArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a testgrid-project ARN.
 */
export interface DevicefarmTestgridProjectArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a testgrid-project ARN.
 */
export interface DevicefarmTestgridProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a testgrid-session ARN.
 */
export interface DevicefarmTestgridSessionArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a testgrid-session ARN.
 */
export interface DevicefarmTestgridSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a upload ARN.
 */
export interface DevicefarmUploadArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a upload ARN.
 */
export interface DevicefarmUploadArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a vpceconfiguration ARN.
 */
export interface DevicefarmVpceconfigurationArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a vpceconfiguration ARN.
 */
export interface DevicefarmVpceconfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const ArtifactArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):artifact:(?<resourceId>[^:/?]+)$/;
const DeviceArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*)::device:(?<resourceId>[^:/?]+)$/;
const DeviceinstanceArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*)::deviceinstance:(?<resourceId>[^:/?]+)$/;
const DevicepoolArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):devicepool:(?<resourceId>[^:/?]+)$/;
const InstanceprofileArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):instanceprofile:(?<resourceId>[^:/?]+)$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):job:(?<resourceId>[^:/?]+)$/;
const NetworkprofileArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):networkprofile:(?<resourceId>[^:/?]+)$/;
const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):project:(?<resourceId>[^:/?]+)$/;
const RunArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):run:(?<resourceId>[^:/?]+)$/;
const SampleArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):sample:(?<resourceId>[^:/?]+)$/;
const SessionArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):session:(?<resourceId>[^:/?]+)$/;
const SuiteArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):suite:(?<resourceId>[^:/?]+)$/;
const TestArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):test:(?<resourceId>[^:/?]+)$/;
const TestgridProjectArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):testgrid-project:(?<resourceId>[^:/?]+)$/;
const TestgridSessionArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):testgrid-session:(?<resourceId>[^:/?]+)$/;
const UploadArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):upload:(?<resourceId>[^:/?]+)$/;
const VpceconfigurationArnRegex =
	/^arn:(?<partition>[^:]+):devicefarm:(?<region>[^:]*):(?<account>[^:]*):vpceconfiguration:(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for devicefarm resources.
 */
export class DevicefarmResources {
	/**
	 * Builds an ARN for the artifact resource.
	 */
	static artifact(props: DevicefarmArtifactArnProps): string {
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
	static parseArtifactArn(arn: string): DevicefarmArtifactArnComponents {
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
	static device(props: DevicefarmDeviceArnProps): string {
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
	static parseDeviceArn(arn: string): DevicefarmDeviceArnComponents {
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
	static deviceinstance(props: DevicefarmDeviceinstanceArnProps): string {
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
	static parseDeviceinstanceArn(
		arn: string,
	): DevicefarmDeviceinstanceArnComponents {
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
	static devicepool(props: DevicefarmDevicepoolArnProps): string {
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
	static parseDevicepoolArn(arn: string): DevicefarmDevicepoolArnComponents {
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
	static instanceprofile(props: DevicefarmInstanceprofileArnProps): string {
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
	static parseInstanceprofileArn(
		arn: string,
	): DevicefarmInstanceprofileArnComponents {
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
	static job(props: DevicefarmJobArnProps): string {
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
	static parseJobArn(arn: string): DevicefarmJobArnComponents {
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
	static networkprofile(props: DevicefarmNetworkprofileArnProps): string {
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
	static parseNetworkprofileArn(
		arn: string,
	): DevicefarmNetworkprofileArnComponents {
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
	static project(props: DevicefarmProjectArnProps): string {
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
	static parseProjectArn(arn: string): DevicefarmProjectArnComponents {
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
	static run(props: DevicefarmRunArnProps): string {
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
	static parseRunArn(arn: string): DevicefarmRunArnComponents {
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
	static sample(props: DevicefarmSampleArnProps): string {
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
	static parseSampleArn(arn: string): DevicefarmSampleArnComponents {
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
	static session(props: DevicefarmSessionArnProps): string {
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
	static parseSessionArn(arn: string): DevicefarmSessionArnComponents {
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
	static suite(props: DevicefarmSuiteArnProps): string {
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
	static parseSuiteArn(arn: string): DevicefarmSuiteArnComponents {
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
	static test(props: DevicefarmTestArnProps): string {
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
	static parseTestArn(arn: string): DevicefarmTestArnComponents {
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
	static testgridProject(props: DevicefarmTestgridProjectArnProps): string {
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
	static parseTestgridProjectArn(
		arn: string,
	): DevicefarmTestgridProjectArnComponents {
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
	static testgridSession(props: DevicefarmTestgridSessionArnProps): string {
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
	static parseTestgridSessionArn(
		arn: string,
	): DevicefarmTestgridSessionArnComponents {
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
	static upload(props: DevicefarmUploadArnProps): string {
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
	static parseUploadArn(arn: string): DevicefarmUploadArnComponents {
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
	static vpceconfiguration(props: DevicefarmVpceconfigurationArnProps): string {
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
	static parseVpceconfigurationArn(
		arn: string,
	): DevicefarmVpceconfigurationArnComponents {
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
	static readonly CreateDevicePool: string[] = ["devicefarm:CreateDevicePool"];
	/** IAM actions required for the CreateInstanceProfile API call. */
	static readonly CreateInstanceProfile: string[] = [
		"devicefarm:CreateInstanceProfile",
	];
	/** IAM actions required for the CreateNetworkProfile API call. */
	static readonly CreateNetworkProfile: string[] = [
		"devicefarm:CreateNetworkProfile",
	];
	/** IAM actions required for the CreateProject API call. */
	static readonly CreateProject: string[] = [
		"devicefarm:CreateProject",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateRemoteAccessSession API call. */
	static readonly CreateRemoteAccessSession: string[] = [
		"devicefarm:CreateRemoteAccessSession",
	];
	/** IAM actions required for the CreateTestGridProject API call. */
	static readonly CreateTestGridProject: string[] = [
		"devicefarm:CreateTestGridProject",
	];
	/** IAM actions required for the CreateTestGridUrl API call. */
	static readonly CreateTestGridUrl: string[] = [
		"devicefarm:CreateTestGridUrl",
	];
	/** IAM actions required for the CreateUpload API call. */
	static readonly CreateUpload: string[] = ["devicefarm:CreateUpload"];
	/** IAM actions required for the CreateVPCEConfiguration API call. */
	static readonly CreateVPCEConfiguration: string[] = [
		"devicefarm:CreateVPCEConfiguration",
	];
	/** IAM actions required for the DeleteDevicePool API call. */
	static readonly DeleteDevicePool: string[] = ["devicefarm:DeleteDevicePool"];
	/** IAM actions required for the DeleteInstanceProfile API call. */
	static readonly DeleteInstanceProfile: string[] = [
		"devicefarm:DeleteInstanceProfile",
	];
	/** IAM actions required for the DeleteNetworkProfile API call. */
	static readonly DeleteNetworkProfile: string[] = [
		"devicefarm:DeleteNetworkProfile",
	];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DeleteProject: string[] = ["devicefarm:DeleteProject"];
	/** IAM actions required for the DeleteRemoteAccessSession API call. */
	static readonly DeleteRemoteAccessSession: string[] = [
		"devicefarm:DeleteRemoteAccessSession",
	];
	/** IAM actions required for the DeleteRun API call. */
	static readonly DeleteRun: string[] = ["devicefarm:DeleteRun"];
	/** IAM actions required for the DeleteTestGridProject API call. */
	static readonly DeleteTestGridProject: string[] = [
		"devicefarm:DeleteTestGridProject",
	];
	/** IAM actions required for the DeleteUpload API call. */
	static readonly DeleteUpload: string[] = ["devicefarm:DeleteUpload"];
	/** IAM actions required for the DeleteVPCEConfiguration API call. */
	static readonly DeleteVPCEConfiguration: string[] = [
		"devicefarm:DeleteVPCEConfiguration",
	];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly opGetAccountSettings: string[] = [
		"devicefarm:GetAccountSettings",
	];
	/** IAM actions required for the GetDevice API call. */
	static readonly opGetDevice: string[] = ["devicefarm:GetDevice"];
	/** IAM actions required for the GetDeviceInstance API call. */
	static readonly opGetDeviceInstance: string[] = [
		"devicefarm:GetDeviceInstance",
	];
	/** IAM actions required for the GetDevicePool API call. */
	static readonly opGetDevicePool: string[] = ["devicefarm:GetDevicePool"];
	/** IAM actions required for the GetDevicePoolCompatibility API call. */
	static readonly opGetDevicePoolCompatibility: string[] = [
		"devicefarm:GetDevicePoolCompatibility",
	];
	/** IAM actions required for the GetInstanceProfile API call. */
	static readonly opGetInstanceProfile: string[] = [
		"devicefarm:GetInstanceProfile",
	];
	/** IAM actions required for the GetJob API call. */
	static readonly opGetJob: string[] = ["devicefarm:GetJob"];
	/** IAM actions required for the GetNetworkProfile API call. */
	static readonly opGetNetworkProfile: string[] = [
		"devicefarm:GetNetworkProfile",
	];
	/** IAM actions required for the GetOfferingStatus API call. */
	static readonly opGetOfferingStatus: string[] = [
		"devicefarm:GetOfferingStatus",
	];
	/** IAM actions required for the GetProject API call. */
	static readonly opGetProject: string[] = ["devicefarm:GetProject"];
	/** IAM actions required for the GetRemoteAccessSession API call. */
	static readonly opGetRemoteAccessSession: string[] = [
		"devicefarm:GetRemoteAccessSession",
	];
	/** IAM actions required for the GetRun API call. */
	static readonly opGetRun: string[] = ["devicefarm:GetRun"];
	/** IAM actions required for the GetSuite API call. */
	static readonly opGetSuite: string[] = ["devicefarm:GetSuite"];
	/** IAM actions required for the GetTest API call. */
	static readonly opGetTest: string[] = ["devicefarm:GetTest"];
	/** IAM actions required for the GetTestGridProject API call. */
	static readonly opGetTestGridProject: string[] = [
		"devicefarm:GetTestGridProject",
	];
	/** IAM actions required for the GetTestGridSession API call. */
	static readonly opGetTestGridSession: string[] = [
		"devicefarm:GetTestGridSession",
	];
	/** IAM actions required for the GetUpload API call. */
	static readonly opGetUpload: string[] = ["devicefarm:GetUpload"];
	/** IAM actions required for the GetVPCEConfiguration API call. */
	static readonly opGetVPCEConfiguration: string[] = [
		"devicefarm:GetVPCEConfiguration",
	];
	/** IAM actions required for the InstallToRemoteAccessSession API call. */
	static readonly InstallToRemoteAccessSession: string[] = [
		"devicefarm:InstallToRemoteAccessSession",
	];
	/** IAM actions required for the ListArtifacts API call. */
	static readonly ListArtifacts: string[] = ["devicefarm:ListArtifacts"];
	/** IAM actions required for the ListDeviceInstances API call. */
	static readonly ListDeviceInstances: string[] = [
		"devicefarm:ListDeviceInstances",
	];
	/** IAM actions required for the ListDevicePools API call. */
	static readonly ListDevicePools: string[] = ["devicefarm:ListDevicePools"];
	/** IAM actions required for the ListDevices API call. */
	static readonly ListDevices: string[] = ["devicefarm:ListDevices"];
	/** IAM actions required for the ListInstanceProfiles API call. */
	static readonly ListInstanceProfiles: string[] = [
		"devicefarm:ListInstanceProfiles",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["devicefarm:ListJobs"];
	/** IAM actions required for the ListNetworkProfiles API call. */
	static readonly ListNetworkProfiles: string[] = [
		"devicefarm:ListNetworkProfiles",
	];
	/** IAM actions required for the ListOfferingPromotions API call. */
	static readonly ListOfferingPromotions: string[] = [
		"devicefarm:ListOfferingPromotions",
	];
	/** IAM actions required for the ListOfferingTransactions API call. */
	static readonly ListOfferingTransactions: string[] = [
		"devicefarm:ListOfferingTransactions",
	];
	/** IAM actions required for the ListOfferings API call. */
	static readonly ListOfferings: string[] = ["devicefarm:ListOfferings"];
	/** IAM actions required for the ListProjects API call. */
	static readonly ListProjects: string[] = ["devicefarm:ListProjects"];
	/** IAM actions required for the ListRemoteAccessSessions API call. */
	static readonly ListRemoteAccessSessions: string[] = [
		"devicefarm:ListRemoteAccessSessions",
	];
	/** IAM actions required for the ListRuns API call. */
	static readonly ListRuns: string[] = ["devicefarm:ListRuns"];
	/** IAM actions required for the ListSamples API call. */
	static readonly ListSamples: string[] = ["devicefarm:ListSamples"];
	/** IAM actions required for the ListSuites API call. */
	static readonly ListSuites: string[] = ["devicefarm:ListSuites"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"devicefarm:ListTagsForResource",
	];
	/** IAM actions required for the ListTestGridProjects API call. */
	static readonly ListTestGridProjects: string[] = [
		"devicefarm:ListTestGridProjects",
	];
	/** IAM actions required for the ListTestGridSessionActions API call. */
	static readonly ListTestGridSessionActions: string[] = [
		"devicefarm:ListTestGridSessionActions",
	];
	/** IAM actions required for the ListTestGridSessionArtifacts API call. */
	static readonly ListTestGridSessionArtifacts: string[] = [
		"devicefarm:ListTestGridSessionArtifacts",
	];
	/** IAM actions required for the ListTestGridSessions API call. */
	static readonly ListTestGridSessions: string[] = [
		"devicefarm:ListTestGridSessions",
	];
	/** IAM actions required for the ListTests API call. */
	static readonly ListTests: string[] = ["devicefarm:ListTests"];
	/** IAM actions required for the ListUniqueProblems API call. */
	static readonly ListUniqueProblems: string[] = [
		"devicefarm:ListUniqueProblems",
	];
	/** IAM actions required for the ListUploads API call. */
	static readonly ListUploads: string[] = ["devicefarm:ListUploads"];
	/** IAM actions required for the ListVPCEConfigurations API call. */
	static readonly ListVPCEConfigurations: string[] = [
		"devicefarm:ListVPCEConfigurations",
	];
	/** IAM actions required for the PurchaseOffering API call. */
	static readonly PurchaseOffering: string[] = ["devicefarm:PurchaseOffering"];
	/** IAM actions required for the RenewOffering API call. */
	static readonly RenewOffering: string[] = ["devicefarm:RenewOffering"];
	/** IAM actions required for the ScheduleRun API call. */
	static readonly ScheduleRun: string[] = [
		"iam:PassRole",
		"devicefarm:ScheduleRun",
	];
	/** IAM actions required for the StopJob API call. */
	static readonly StopJob: string[] = ["devicefarm:StopJob"];
	/** IAM actions required for the StopRemoteAccessSession API call. */
	static readonly StopRemoteAccessSession: string[] = [
		"devicefarm:StopRemoteAccessSession",
	];
	/** IAM actions required for the StopRun API call. */
	static readonly StopRun: string[] = ["devicefarm:StopRun"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["devicefarm:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["devicefarm:UntagResource"];
	/** IAM actions required for the UpdateDeviceInstance API call. */
	static readonly UpdateDeviceInstance: string[] = [
		"devicefarm:UpdateDeviceInstance",
	];
	/** IAM actions required for the UpdateDevicePool API call. */
	static readonly UpdateDevicePool: string[] = ["devicefarm:UpdateDevicePool"];
	/** IAM actions required for the UpdateInstanceProfile API call. */
	static readonly UpdateInstanceProfile: string[] = [
		"devicefarm:UpdateInstanceProfile",
	];
	/** IAM actions required for the UpdateNetworkProfile API call. */
	static readonly UpdateNetworkProfile: string[] = [
		"devicefarm:UpdateNetworkProfile",
	];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UpdateProject: string[] = [
		"iam:PassRole",
		"devicefarm:UpdateProject",
	];
	/** IAM actions required for the UpdateTestGridProject API call. */
	static readonly UpdateTestGridProject: string[] = [
		"devicefarm:UpdateTestGridProject",
	];
	/** IAM actions required for the UpdateUpload API call. */
	static readonly UpdateUpload: string[] = ["devicefarm:UpdateUpload"];
	/** IAM actions required for the UpdateVPCEConfiguration API call. */
	static readonly UpdateVPCEConfiguration: string[] = [
		"devicefarm:UpdateVPCEConfiguration",
	];
}

/**
 * Condition key constants and builders for devicefarm.
 */
export class DevicefarmConditions {
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
