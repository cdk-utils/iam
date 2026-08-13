// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/a4b.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the a4b service.
 */
export class A4bActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "a4b";

	/** [Write] a4b:ApproveSkill */
	static readonly ApproveSkill = "a4b:ApproveSkill";
	/** [Write] a4b:AssociateContactWithAddressBook */
	static readonly AssociateContactWithAddressBook =
		"a4b:AssociateContactWithAddressBook";
	/** [Write] a4b:AssociateDeviceWithNetworkProfile */
	static readonly AssociateDeviceWithNetworkProfile =
		"a4b:AssociateDeviceWithNetworkProfile";
	/** [Write] a4b:AssociateDeviceWithRoom */
	static readonly AssociateDeviceWithRoom = "a4b:AssociateDeviceWithRoom";
	/** [Write] a4b:AssociateSkillGroupWithRoom */
	static readonly AssociateSkillGroupWithRoom =
		"a4b:AssociateSkillGroupWithRoom";
	/** [Write] a4b:AssociateSkillWithSkillGroup */
	static readonly AssociateSkillWithSkillGroup =
		"a4b:AssociateSkillWithSkillGroup";
	/** [Write] a4b:AssociateSkillWithUsers */
	static readonly AssociateSkillWithUsers = "a4b:AssociateSkillWithUsers";
	/** [Write] a4b:CompleteRegistration */
	static readonly CompleteRegistration = "a4b:CompleteRegistration";
	/** [Write] a4b:CreateAddressBook */
	static readonly CreateAddressBook = "a4b:CreateAddressBook";
	/** [Write] a4b:CreateBusinessReportSchedule */
	static readonly CreateBusinessReportSchedule =
		"a4b:CreateBusinessReportSchedule";
	/** [Write] a4b:CreateConferenceProvider */
	static readonly CreateConferenceProvider = "a4b:CreateConferenceProvider";
	/** [Write] a4b:CreateContact */
	static readonly CreateContact = "a4b:CreateContact";
	/** [Write] a4b:CreateGatewayGroup */
	static readonly CreateGatewayGroup = "a4b:CreateGatewayGroup";
	/** [Write] a4b:CreateNetworkProfile */
	static readonly CreateNetworkProfile = "a4b:CreateNetworkProfile";
	/** [Write] a4b:CreateProfile */
	static readonly CreateProfile = "a4b:CreateProfile";
	/** [Write] a4b:CreateRoom */
	static readonly CreateRoom = "a4b:CreateRoom";
	/** [Write] a4b:CreateSkillGroup */
	static readonly CreateSkillGroup = "a4b:CreateSkillGroup";
	/** [Write] a4b:CreateUser */
	static readonly CreateUser = "a4b:CreateUser";
	/** [Write] a4b:DeleteAddressBook */
	static readonly DeleteAddressBook = "a4b:DeleteAddressBook";
	/** [Write] a4b:DeleteBusinessReportSchedule */
	static readonly DeleteBusinessReportSchedule =
		"a4b:DeleteBusinessReportSchedule";
	/** [Write] a4b:DeleteConferenceProvider */
	static readonly DeleteConferenceProvider = "a4b:DeleteConferenceProvider";
	/** [Write] a4b:DeleteContact */
	static readonly DeleteContact = "a4b:DeleteContact";
	/** [Write] a4b:DeleteDevice */
	static readonly DeleteDevice = "a4b:DeleteDevice";
	/** [Write] a4b:DeleteDeviceUsageData */
	static readonly DeleteDeviceUsageData = "a4b:DeleteDeviceUsageData";
	/** [Write] a4b:DeleteGatewayGroup */
	static readonly DeleteGatewayGroup = "a4b:DeleteGatewayGroup";
	/** [Write] a4b:DeleteNetworkProfile */
	static readonly DeleteNetworkProfile = "a4b:DeleteNetworkProfile";
	/** [Write] a4b:DeleteProfile */
	static readonly DeleteProfile = "a4b:DeleteProfile";
	/** [Write] a4b:DeleteRoom */
	static readonly DeleteRoom = "a4b:DeleteRoom";
	/** [Write] a4b:DeleteRoomSkillParameter */
	static readonly DeleteRoomSkillParameter = "a4b:DeleteRoomSkillParameter";
	/** [Write] a4b:DeleteSkillAuthorization */
	static readonly DeleteSkillAuthorization = "a4b:DeleteSkillAuthorization";
	/** [Write] a4b:DeleteSkillGroup */
	static readonly DeleteSkillGroup = "a4b:DeleteSkillGroup";
	/** [Write] a4b:DeleteUser */
	static readonly DeleteUser = "a4b:DeleteUser";
	/** [Write] a4b:DisassociateContactFromAddressBook */
	static readonly DisassociateContactFromAddressBook =
		"a4b:DisassociateContactFromAddressBook";
	/** [Write] a4b:DisassociateDeviceFromRoom */
	static readonly DisassociateDeviceFromRoom = "a4b:DisassociateDeviceFromRoom";
	/** [Write] a4b:DisassociateSkillFromSkillGroup */
	static readonly DisassociateSkillFromSkillGroup =
		"a4b:DisassociateSkillFromSkillGroup";
	/** [Write] a4b:DisassociateSkillFromUsers */
	static readonly DisassociateSkillFromUsers = "a4b:DisassociateSkillFromUsers";
	/** [Write] a4b:DisassociateSkillGroupFromRoom */
	static readonly DisassociateSkillGroupFromRoom =
		"a4b:DisassociateSkillGroupFromRoom";
	/** [Write] a4b:ForgetSmartHomeAppliances */
	static readonly ForgetSmartHomeAppliances = "a4b:ForgetSmartHomeAppliances";
	/** [Read] a4b:GetAddressBook */
	static readonly actionGetAddressBook = "a4b:GetAddressBook";
	/** [Read] a4b:GetConferencePreference */
	static readonly actionGetConferencePreference = "a4b:GetConferencePreference";
	/** [Read] a4b:GetConferenceProvider */
	static readonly actionGetConferenceProvider = "a4b:GetConferenceProvider";
	/** [Read] a4b:GetContact */
	static readonly actionGetContact = "a4b:GetContact";
	/** [Read] a4b:GetDevice */
	static readonly actionGetDevice = "a4b:GetDevice";
	/** [Read] a4b:GetGateway */
	static readonly actionGetGateway = "a4b:GetGateway";
	/** [Read] a4b:GetGatewayGroup */
	static readonly actionGetGatewayGroup = "a4b:GetGatewayGroup";
	/** [Read] a4b:GetInvitationConfiguration */
	static readonly actionGetInvitationConfiguration =
		"a4b:GetInvitationConfiguration";
	/** [Read] a4b:GetNetworkProfile */
	static readonly actionGetNetworkProfile = "a4b:GetNetworkProfile";
	/** [Read] a4b:GetProfile */
	static readonly actionGetProfile = "a4b:GetProfile";
	/** [Read] a4b:GetRoom */
	static readonly actionGetRoom = "a4b:GetRoom";
	/** [Read] a4b:GetRoomSkillParameter */
	static readonly actionGetRoomSkillParameter = "a4b:GetRoomSkillParameter";
	/** [Read] a4b:GetSkillGroup */
	static readonly actionGetSkillGroup = "a4b:GetSkillGroup";
	/** [List] a4b:ListBusinessReportSchedules */
	static readonly ListBusinessReportSchedules =
		"a4b:ListBusinessReportSchedules";
	/** [List] a4b:ListConferenceProviders */
	static readonly ListConferenceProviders = "a4b:ListConferenceProviders";
	/** [List] a4b:ListDeviceEvents */
	static readonly ListDeviceEvents = "a4b:ListDeviceEvents";
	/** [List] a4b:ListGatewayGroups */
	static readonly ListGatewayGroups = "a4b:ListGatewayGroups";
	/** [List] a4b:ListGateways */
	static readonly ListGateways = "a4b:ListGateways";
	/** [List] a4b:ListSkills */
	static readonly ListSkills = "a4b:ListSkills";
	/** [List] a4b:ListSkillsStoreCategories */
	static readonly ListSkillsStoreCategories = "a4b:ListSkillsStoreCategories";
	/** [List] a4b:ListSkillsStoreSkillsByCategory */
	static readonly ListSkillsStoreSkillsByCategory =
		"a4b:ListSkillsStoreSkillsByCategory";
	/** [List] a4b:ListSmartHomeAppliances */
	static readonly ListSmartHomeAppliances = "a4b:ListSmartHomeAppliances";
	/** [Read] a4b:ListTags */
	static readonly ListTags = "a4b:ListTags";
	/** [Write] a4b:PutConferencePreference */
	static readonly PutConferencePreference = "a4b:PutConferencePreference";
	/** [Write] a4b:PutDeviceSetupEvents */
	static readonly PutDeviceSetupEvents = "a4b:PutDeviceSetupEvents";
	/** [Write] a4b:PutInvitationConfiguration */
	static readonly PutInvitationConfiguration = "a4b:PutInvitationConfiguration";
	/** [Write] a4b:PutRoomSkillParameter */
	static readonly PutRoomSkillParameter = "a4b:PutRoomSkillParameter";
	/** [Write] a4b:PutSkillAuthorization */
	static readonly PutSkillAuthorization = "a4b:PutSkillAuthorization";
	/** [Write] a4b:RegisterAVSDevice */
	static readonly RegisterAVSDevice = "a4b:RegisterAVSDevice";
	/** [Write] a4b:RegisterDevice */
	static readonly RegisterDevice = "a4b:RegisterDevice";
	/** [Write] a4b:RejectSkill */
	static readonly RejectSkill = "a4b:RejectSkill";
	/** [Read] a4b:ResolveRoom */
	static readonly ResolveRoom = "a4b:ResolveRoom";
	/** [Write] a4b:RevokeInvitation */
	static readonly RevokeInvitation = "a4b:RevokeInvitation";
	/** [List] a4b:SearchAddressBooks */
	static readonly SearchAddressBooks = "a4b:SearchAddressBooks";
	/** [List] a4b:SearchContacts */
	static readonly SearchContacts = "a4b:SearchContacts";
	/** [List] a4b:SearchDevices */
	static readonly SearchDevices = "a4b:SearchDevices";
	/** [List] a4b:SearchNetworkProfiles */
	static readonly SearchNetworkProfiles = "a4b:SearchNetworkProfiles";
	/** [List] a4b:SearchProfiles */
	static readonly SearchProfiles = "a4b:SearchProfiles";
	/** [List] a4b:SearchRooms */
	static readonly SearchRooms = "a4b:SearchRooms";
	/** [List] a4b:SearchSkillGroups */
	static readonly SearchSkillGroups = "a4b:SearchSkillGroups";
	/** [List] a4b:SearchUsers */
	static readonly SearchUsers = "a4b:SearchUsers";
	/** [Write] a4b:SendAnnouncement */
	static readonly SendAnnouncement = "a4b:SendAnnouncement";
	/** [Write] a4b:SendInvitation */
	static readonly SendInvitation = "a4b:SendInvitation";
	/** [Write] a4b:StartDeviceSync */
	static readonly StartDeviceSync = "a4b:StartDeviceSync";
	/** [Read] a4b:StartSmartHomeApplianceDiscovery */
	static readonly StartSmartHomeApplianceDiscovery =
		"a4b:StartSmartHomeApplianceDiscovery";
	/** [Tagging] a4b:TagResource */
	static readonly TagResource = "a4b:TagResource";
	/** [Tagging] a4b:UntagResource */
	static readonly UntagResource = "a4b:UntagResource";
	/** [Write] a4b:UpdateAddressBook */
	static readonly UpdateAddressBook = "a4b:UpdateAddressBook";
	/** [Write] a4b:UpdateBusinessReportSchedule */
	static readonly UpdateBusinessReportSchedule =
		"a4b:UpdateBusinessReportSchedule";
	/** [Write] a4b:UpdateConferenceProvider */
	static readonly UpdateConferenceProvider = "a4b:UpdateConferenceProvider";
	/** [Write] a4b:UpdateContact */
	static readonly UpdateContact = "a4b:UpdateContact";
	/** [Write] a4b:UpdateDevice */
	static readonly UpdateDevice = "a4b:UpdateDevice";
	/** [Write] a4b:UpdateGateway */
	static readonly UpdateGateway = "a4b:UpdateGateway";
	/** [Write] a4b:UpdateGatewayGroup */
	static readonly UpdateGatewayGroup = "a4b:UpdateGatewayGroup";
	/** [Write] a4b:UpdateNetworkProfile */
	static readonly UpdateNetworkProfile = "a4b:UpdateNetworkProfile";
	/** [Write] a4b:UpdateProfile */
	static readonly UpdateProfile = "a4b:UpdateProfile";
	/** [Write] a4b:UpdateRoom */
	static readonly UpdateRoom = "a4b:UpdateRoom";
	/** [Write] a4b:UpdateSkillGroup */
	static readonly UpdateSkillGroup = "a4b:UpdateSkillGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		A4bActions.actionGetAddressBook,
		A4bActions.actionGetConferencePreference,
		A4bActions.actionGetConferenceProvider,
		A4bActions.actionGetContact,
		A4bActions.actionGetDevice,
		A4bActions.actionGetGateway,
		A4bActions.actionGetGatewayGroup,
		A4bActions.actionGetInvitationConfiguration,
		A4bActions.actionGetNetworkProfile,
		A4bActions.actionGetProfile,
		A4bActions.actionGetRoom,
		A4bActions.actionGetRoomSkillParameter,
		A4bActions.actionGetSkillGroup,
		A4bActions.ListTags,
		A4bActions.ResolveRoom,
		A4bActions.StartSmartHomeApplianceDiscovery,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		A4bActions.ApproveSkill,
		A4bActions.AssociateContactWithAddressBook,
		A4bActions.AssociateDeviceWithNetworkProfile,
		A4bActions.AssociateDeviceWithRoom,
		A4bActions.AssociateSkillGroupWithRoom,
		A4bActions.AssociateSkillWithSkillGroup,
		A4bActions.AssociateSkillWithUsers,
		A4bActions.CompleteRegistration,
		A4bActions.CreateAddressBook,
		A4bActions.CreateBusinessReportSchedule,
		A4bActions.CreateConferenceProvider,
		A4bActions.CreateContact,
		A4bActions.CreateGatewayGroup,
		A4bActions.CreateNetworkProfile,
		A4bActions.CreateProfile,
		A4bActions.CreateRoom,
		A4bActions.CreateSkillGroup,
		A4bActions.CreateUser,
		A4bActions.DeleteAddressBook,
		A4bActions.DeleteBusinessReportSchedule,
		A4bActions.DeleteConferenceProvider,
		A4bActions.DeleteContact,
		A4bActions.DeleteDevice,
		A4bActions.DeleteDeviceUsageData,
		A4bActions.DeleteGatewayGroup,
		A4bActions.DeleteNetworkProfile,
		A4bActions.DeleteProfile,
		A4bActions.DeleteRoom,
		A4bActions.DeleteRoomSkillParameter,
		A4bActions.DeleteSkillAuthorization,
		A4bActions.DeleteSkillGroup,
		A4bActions.DeleteUser,
		A4bActions.DisassociateContactFromAddressBook,
		A4bActions.DisassociateDeviceFromRoom,
		A4bActions.DisassociateSkillFromSkillGroup,
		A4bActions.DisassociateSkillFromUsers,
		A4bActions.DisassociateSkillGroupFromRoom,
		A4bActions.ForgetSmartHomeAppliances,
		A4bActions.PutConferencePreference,
		A4bActions.PutDeviceSetupEvents,
		A4bActions.PutInvitationConfiguration,
		A4bActions.PutRoomSkillParameter,
		A4bActions.PutSkillAuthorization,
		A4bActions.RegisterAVSDevice,
		A4bActions.RegisterDevice,
		A4bActions.RejectSkill,
		A4bActions.RevokeInvitation,
		A4bActions.SendAnnouncement,
		A4bActions.SendInvitation,
		A4bActions.StartDeviceSync,
		A4bActions.UpdateAddressBook,
		A4bActions.UpdateBusinessReportSchedule,
		A4bActions.UpdateConferenceProvider,
		A4bActions.UpdateContact,
		A4bActions.UpdateDevice,
		A4bActions.UpdateGateway,
		A4bActions.UpdateGatewayGroup,
		A4bActions.UpdateNetworkProfile,
		A4bActions.UpdateProfile,
		A4bActions.UpdateRoom,
		A4bActions.UpdateSkillGroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		A4bActions.ListBusinessReportSchedules,
		A4bActions.ListConferenceProviders,
		A4bActions.ListDeviceEvents,
		A4bActions.ListGatewayGroups,
		A4bActions.ListGateways,
		A4bActions.ListSkills,
		A4bActions.ListSkillsStoreCategories,
		A4bActions.ListSkillsStoreSkillsByCategory,
		A4bActions.ListSmartHomeAppliances,
		A4bActions.SearchAddressBooks,
		A4bActions.SearchContacts,
		A4bActions.SearchDevices,
		A4bActions.SearchNetworkProfiles,
		A4bActions.SearchProfiles,
		A4bActions.SearchRooms,
		A4bActions.SearchSkillGroups,
		A4bActions.SearchUsers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		A4bActions.TagResource,
		A4bActions.UntagResource,
	];
}

/**
 * Properties for building a addressbook ARN.
 */
export interface A4bAddressbookArnProps {
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
 * Parsed components of a addressbook ARN.
 */
export interface A4bAddressbookArnComponents {
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
 * Properties for building a conferenceprovider ARN.
 */
export interface A4bConferenceproviderArnProps {
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
 * Parsed components of a conferenceprovider ARN.
 */
export interface A4bConferenceproviderArnComponents {
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
 * Properties for building a contact ARN.
 */
export interface A4bContactArnProps {
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
 * Parsed components of a contact ARN.
 */
export interface A4bContactArnComponents {
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
export interface A4bDeviceArnProps {
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
export interface A4bDeviceArnComponents {
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
 * Properties for building a gateway ARN.
 */
export interface A4bGatewayArnProps {
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
 * Parsed components of a gateway ARN.
 */
export interface A4bGatewayArnComponents {
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
 * Properties for building a gatewaygroup ARN.
 */
export interface A4bGatewaygroupArnProps {
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
 * Parsed components of a gatewaygroup ARN.
 */
export interface A4bGatewaygroupArnComponents {
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
export interface A4bNetworkprofileArnProps {
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
export interface A4bNetworkprofileArnComponents {
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
 * Properties for building a profile ARN.
 */
export interface A4bProfileArnProps {
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
 * Parsed components of a profile ARN.
 */
export interface A4bProfileArnComponents {
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
 * Properties for building a room ARN.
 */
export interface A4bRoomArnProps {
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
 * Parsed components of a room ARN.
 */
export interface A4bRoomArnComponents {
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
 * Properties for building a schedule ARN.
 */
export interface A4bScheduleArnProps {
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
 * Parsed components of a schedule ARN.
 */
export interface A4bScheduleArnComponents {
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
 * Properties for building a skillgroup ARN.
 */
export interface A4bSkillgroupArnProps {
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
 * Parsed components of a skillgroup ARN.
 */
export interface A4bSkillgroupArnComponents {
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
 * Properties for building a user ARN.
 */
export interface A4bUserArnProps {
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
 * Parsed components of a user ARN.
 */
export interface A4bUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const AddressbookArnRegex =
	/^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):address-book\/(?<resourceId>[^:/?]+)$/;
const ConferenceproviderArnRegex =
	/^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):conference-provider\/(?<resourceId>[^:/?]+)$/;
const ContactArnRegex =
	/^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):contact\/(?<resourceId>[^:/?]+)$/;
const DeviceArnRegex =
	/^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):device\/(?<resourceId>[^:/?]+)$/;
const GatewayArnRegex =
	/^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<resourceId>[^:/?]+)$/;
const GatewaygroupArnRegex =
	/^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):gateway-group\/(?<resourceId>[^:/?]+)$/;
const NetworkprofileArnRegex =
	/^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):network-profile\/(?<resourceId>[^:/?]+)$/;
const ProfileArnRegex =
	/^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):profile\/(?<resourceId>[^:/?]+)$/;
const RoomArnRegex =
	/^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):room\/(?<resourceId>[^:/?]+)$/;
const ScheduleArnRegex =
	/^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):schedule\/(?<resourceId>[^:/?]+)$/;
const SkillgroupArnRegex =
	/^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):skill-group\/(?<resourceId>[^:/?]+)$/;
const UserArnRegex =
	/^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):user\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for a4b resources.
 */
export class A4bResources {
	/**
	 * Builds an ARN for the addressbook resource.
	 */
	static addressbook(props: A4bAddressbookArnProps): string {
		return `arn:${props.partition ?? "aws"}:a4b:${props.region ?? "*"}:${props.account ?? "*"}:address-book/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the addressbook resource.
	 */
	static isValidAddressbookArn(arn: string): boolean {
		return AddressbookArnRegex.test(arn);
	}

	/**
	 * Parses a addressbook ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAddressbookArn(arn: string): A4bAddressbookArnComponents {
		const match = AddressbookArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid addressbook ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the conferenceprovider resource.
	 */
	static conferenceprovider(props: A4bConferenceproviderArnProps): string {
		return `arn:${props.partition ?? "aws"}:a4b:${props.region ?? "*"}:${props.account ?? "*"}:conference-provider/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the conferenceprovider resource.
	 */
	static isValidConferenceproviderArn(arn: string): boolean {
		return ConferenceproviderArnRegex.test(arn);
	}

	/**
	 * Parses a conferenceprovider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConferenceproviderArn(
		arn: string,
	): A4bConferenceproviderArnComponents {
		const match = ConferenceproviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid conferenceprovider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the contact resource.
	 */
	static contact(props: A4bContactArnProps): string {
		return `arn:${props.partition ?? "aws"}:a4b:${props.region ?? "*"}:${props.account ?? "*"}:contact/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the contact resource.
	 */
	static isValidContactArn(arn: string): boolean {
		return ContactArnRegex.test(arn);
	}

	/**
	 * Parses a contact ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContactArn(arn: string): A4bContactArnComponents {
		const match = ContactArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid contact ARN: ${arn}`);
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
	static device(props: A4bDeviceArnProps): string {
		return `arn:${props.partition ?? "aws"}:a4b:${props.region ?? "*"}:${props.account ?? "*"}:device/${props.resourceId}`;
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
	static parseDeviceArn(arn: string): A4bDeviceArnComponents {
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
	 * Builds an ARN for the gateway resource.
	 */
	static gateway(props: A4bGatewayArnProps): string {
		return `arn:${props.partition ?? "aws"}:a4b:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.resourceId}`;
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
	static parseGatewayArn(arn: string): A4bGatewayArnComponents {
		const match = GatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid gateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the gatewaygroup resource.
	 */
	static gatewaygroup(props: A4bGatewaygroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:a4b:${props.region ?? "*"}:${props.account ?? "*"}:gateway-group/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the gatewaygroup resource.
	 */
	static isValidGatewaygroupArn(arn: string): boolean {
		return GatewaygroupArnRegex.test(arn);
	}

	/**
	 * Parses a gatewaygroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGatewaygroupArn(arn: string): A4bGatewaygroupArnComponents {
		const match = GatewaygroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid gatewaygroup ARN: ${arn}`);
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
	static networkprofile(props: A4bNetworkprofileArnProps): string {
		return `arn:${props.partition ?? "aws"}:a4b:${props.region ?? "*"}:${props.account ?? "*"}:network-profile/${props.resourceId}`;
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
	static parseNetworkprofileArn(arn: string): A4bNetworkprofileArnComponents {
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
	 * Builds an ARN for the profile resource.
	 */
	static profile(props: A4bProfileArnProps): string {
		return `arn:${props.partition ?? "aws"}:a4b:${props.region ?? "*"}:${props.account ?? "*"}:profile/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the profile resource.
	 */
	static isValidProfileArn(arn: string): boolean {
		return ProfileArnRegex.test(arn);
	}

	/**
	 * Parses a profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProfileArn(arn: string): A4bProfileArnComponents {
		const match = ProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the room resource.
	 */
	static room(props: A4bRoomArnProps): string {
		return `arn:${props.partition ?? "aws"}:a4b:${props.region ?? "*"}:${props.account ?? "*"}:room/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the room resource.
	 */
	static isValidRoomArn(arn: string): boolean {
		return RoomArnRegex.test(arn);
	}

	/**
	 * Parses a room ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRoomArn(arn: string): A4bRoomArnComponents {
		const match = RoomArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid room ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the schedule resource.
	 */
	static schedule(props: A4bScheduleArnProps): string {
		return `arn:${props.partition ?? "aws"}:a4b:${props.region ?? "*"}:${props.account ?? "*"}:schedule/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the schedule resource.
	 */
	static isValidScheduleArn(arn: string): boolean {
		return ScheduleArnRegex.test(arn);
	}

	/**
	 * Parses a schedule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScheduleArn(arn: string): A4bScheduleArnComponents {
		const match = ScheduleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid schedule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the skillgroup resource.
	 */
	static skillgroup(props: A4bSkillgroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:a4b:${props.region ?? "*"}:${props.account ?? "*"}:skill-group/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the skillgroup resource.
	 */
	static isValidSkillgroupArn(arn: string): boolean {
		return SkillgroupArnRegex.test(arn);
	}

	/**
	 * Parses a skillgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSkillgroupArn(arn: string): A4bSkillgroupArnComponents {
		const match = SkillgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid skillgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the user resource.
	 */
	static user(props: A4bUserArnProps): string {
		return `arn:${props.partition ?? "aws"}:a4b:${props.region ?? "*"}:${props.account ?? "*"}:user/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the user resource.
	 */
	static isValidUserArn(arn: string): boolean {
		return UserArnRegex.test(arn);
	}

	/**
	 * Parses a user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserArn(arn: string): A4bUserArnComponents {
		const match = UserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid user ARN: ${arn}`);
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
 * Condition key constants and builders for a4b.
 */
export class A4bConditions {
	/** Condition keys applicable to the CreateAddressBook action. */
	static readonly CreateAddressBookConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBusinessReportSchedule action. */
	static readonly CreateBusinessReportScheduleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConferenceProvider action. */
	static readonly CreateConferenceProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContact action. */
	static readonly CreateContactConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGatewayGroup action. */
	static readonly CreateGatewayGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNetworkProfile action. */
	static readonly CreateNetworkProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CreateProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRoom action. */
	static readonly CreateRoomConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSkillGroup action. */
	static readonly CreateSkillGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CreateUserConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterAVSDevice action. */
	static readonly RegisterAVSDeviceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: a4b:amazonId (String) */
	static readonly AMAZON_ID = "a4b:amazonId";
	/** Condition key: a4b:filters_deviceType (ArrayOfString) */
	static readonly FILTERS_DEVICE_TYPE = "a4b:filters_deviceType";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `a4b:amazonId`.
	 */
	static amazonId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "a4b:amazonId": value } };
	}

	/**
	 * Generates a condition block for `a4b:filters_deviceType`.
	 */
	static filtersDeviceType(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "a4b:filters_deviceType": values },
		};
	}

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
