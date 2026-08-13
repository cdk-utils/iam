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
	static readonly APPROVE_SKILL = "a4b:ApproveSkill";
	/** [Write] a4b:AssociateContactWithAddressBook */
	static readonly ASSOCIATE_CONTACT_WITH_ADDRESS_BOOK =
		"a4b:AssociateContactWithAddressBook";
	/** [Write] a4b:AssociateDeviceWithNetworkProfile */
	static readonly ASSOCIATE_DEVICE_WITH_NETWORK_PROFILE =
		"a4b:AssociateDeviceWithNetworkProfile";
	/** [Write] a4b:AssociateDeviceWithRoom */
	static readonly ASSOCIATE_DEVICE_WITH_ROOM = "a4b:AssociateDeviceWithRoom";
	/** [Write] a4b:AssociateSkillGroupWithRoom */
	static readonly ASSOCIATE_SKILL_GROUP_WITH_ROOM =
		"a4b:AssociateSkillGroupWithRoom";
	/** [Write] a4b:AssociateSkillWithSkillGroup */
	static readonly ASSOCIATE_SKILL_WITH_SKILL_GROUP =
		"a4b:AssociateSkillWithSkillGroup";
	/** [Write] a4b:AssociateSkillWithUsers */
	static readonly ASSOCIATE_SKILL_WITH_USERS = "a4b:AssociateSkillWithUsers";
	/** [Write] a4b:CompleteRegistration */
	static readonly COMPLETE_REGISTRATION = "a4b:CompleteRegistration";
	/** [Write] a4b:CreateAddressBook */
	static readonly CREATE_ADDRESS_BOOK = "a4b:CreateAddressBook";
	/** [Write] a4b:CreateBusinessReportSchedule */
	static readonly CREATE_BUSINESS_REPORT_SCHEDULE =
		"a4b:CreateBusinessReportSchedule";
	/** [Write] a4b:CreateConferenceProvider */
	static readonly CREATE_CONFERENCE_PROVIDER = "a4b:CreateConferenceProvider";
	/** [Write] a4b:CreateContact */
	static readonly CREATE_CONTACT = "a4b:CreateContact";
	/** [Write] a4b:CreateGatewayGroup */
	static readonly CREATE_GATEWAY_GROUP = "a4b:CreateGatewayGroup";
	/** [Write] a4b:CreateNetworkProfile */
	static readonly CREATE_NETWORK_PROFILE = "a4b:CreateNetworkProfile";
	/** [Write] a4b:CreateProfile */
	static readonly CREATE_PROFILE = "a4b:CreateProfile";
	/** [Write] a4b:CreateRoom */
	static readonly CREATE_ROOM = "a4b:CreateRoom";
	/** [Write] a4b:CreateSkillGroup */
	static readonly CREATE_SKILL_GROUP = "a4b:CreateSkillGroup";
	/** [Write] a4b:CreateUser */
	static readonly CREATE_USER = "a4b:CreateUser";
	/** [Write] a4b:DeleteAddressBook */
	static readonly DELETE_ADDRESS_BOOK = "a4b:DeleteAddressBook";
	/** [Write] a4b:DeleteBusinessReportSchedule */
	static readonly DELETE_BUSINESS_REPORT_SCHEDULE =
		"a4b:DeleteBusinessReportSchedule";
	/** [Write] a4b:DeleteConferenceProvider */
	static readonly DELETE_CONFERENCE_PROVIDER = "a4b:DeleteConferenceProvider";
	/** [Write] a4b:DeleteContact */
	static readonly DELETE_CONTACT = "a4b:DeleteContact";
	/** [Write] a4b:DeleteDevice */
	static readonly DELETE_DEVICE = "a4b:DeleteDevice";
	/** [Write] a4b:DeleteDeviceUsageData */
	static readonly DELETE_DEVICE_USAGE_DATA = "a4b:DeleteDeviceUsageData";
	/** [Write] a4b:DeleteGatewayGroup */
	static readonly DELETE_GATEWAY_GROUP = "a4b:DeleteGatewayGroup";
	/** [Write] a4b:DeleteNetworkProfile */
	static readonly DELETE_NETWORK_PROFILE = "a4b:DeleteNetworkProfile";
	/** [Write] a4b:DeleteProfile */
	static readonly DELETE_PROFILE = "a4b:DeleteProfile";
	/** [Write] a4b:DeleteRoom */
	static readonly DELETE_ROOM = "a4b:DeleteRoom";
	/** [Write] a4b:DeleteRoomSkillParameter */
	static readonly DELETE_ROOM_SKILL_PARAMETER = "a4b:DeleteRoomSkillParameter";
	/** [Write] a4b:DeleteSkillAuthorization */
	static readonly DELETE_SKILL_AUTHORIZATION = "a4b:DeleteSkillAuthorization";
	/** [Write] a4b:DeleteSkillGroup */
	static readonly DELETE_SKILL_GROUP = "a4b:DeleteSkillGroup";
	/** [Write] a4b:DeleteUser */
	static readonly DELETE_USER = "a4b:DeleteUser";
	/** [Write] a4b:DisassociateContactFromAddressBook */
	static readonly DISASSOCIATE_CONTACT_FROM_ADDRESS_BOOK =
		"a4b:DisassociateContactFromAddressBook";
	/** [Write] a4b:DisassociateDeviceFromRoom */
	static readonly DISASSOCIATE_DEVICE_FROM_ROOM =
		"a4b:DisassociateDeviceFromRoom";
	/** [Write] a4b:DisassociateSkillFromSkillGroup */
	static readonly DISASSOCIATE_SKILL_FROM_SKILL_GROUP =
		"a4b:DisassociateSkillFromSkillGroup";
	/** [Write] a4b:DisassociateSkillFromUsers */
	static readonly DISASSOCIATE_SKILL_FROM_USERS =
		"a4b:DisassociateSkillFromUsers";
	/** [Write] a4b:DisassociateSkillGroupFromRoom */
	static readonly DISASSOCIATE_SKILL_GROUP_FROM_ROOM =
		"a4b:DisassociateSkillGroupFromRoom";
	/** [Write] a4b:ForgetSmartHomeAppliances */
	static readonly FORGET_SMART_HOME_APPLIANCES =
		"a4b:ForgetSmartHomeAppliances";
	/** [Read] a4b:GetAddressBook */
	static readonly GET_ADDRESS_BOOK = "a4b:GetAddressBook";
	/** [Read] a4b:GetConferencePreference */
	static readonly GET_CONFERENCE_PREFERENCE = "a4b:GetConferencePreference";
	/** [Read] a4b:GetConferenceProvider */
	static readonly GET_CONFERENCE_PROVIDER = "a4b:GetConferenceProvider";
	/** [Read] a4b:GetContact */
	static readonly GET_CONTACT = "a4b:GetContact";
	/** [Read] a4b:GetDevice */
	static readonly GET_DEVICE = "a4b:GetDevice";
	/** [Read] a4b:GetGateway */
	static readonly GET_GATEWAY = "a4b:GetGateway";
	/** [Read] a4b:GetGatewayGroup */
	static readonly GET_GATEWAY_GROUP = "a4b:GetGatewayGroup";
	/** [Read] a4b:GetInvitationConfiguration */
	static readonly GET_INVITATION_CONFIGURATION =
		"a4b:GetInvitationConfiguration";
	/** [Read] a4b:GetNetworkProfile */
	static readonly GET_NETWORK_PROFILE = "a4b:GetNetworkProfile";
	/** [Read] a4b:GetProfile */
	static readonly GET_PROFILE = "a4b:GetProfile";
	/** [Read] a4b:GetRoom */
	static readonly GET_ROOM = "a4b:GetRoom";
	/** [Read] a4b:GetRoomSkillParameter */
	static readonly GET_ROOM_SKILL_PARAMETER = "a4b:GetRoomSkillParameter";
	/** [Read] a4b:GetSkillGroup */
	static readonly GET_SKILL_GROUP = "a4b:GetSkillGroup";
	/** [List] a4b:ListBusinessReportSchedules */
	static readonly LIST_BUSINESS_REPORT_SCHEDULES =
		"a4b:ListBusinessReportSchedules";
	/** [List] a4b:ListConferenceProviders */
	static readonly LIST_CONFERENCE_PROVIDERS = "a4b:ListConferenceProviders";
	/** [List] a4b:ListDeviceEvents */
	static readonly LIST_DEVICE_EVENTS = "a4b:ListDeviceEvents";
	/** [List] a4b:ListGatewayGroups */
	static readonly LIST_GATEWAY_GROUPS = "a4b:ListGatewayGroups";
	/** [List] a4b:ListGateways */
	static readonly LIST_GATEWAYS = "a4b:ListGateways";
	/** [List] a4b:ListSkills */
	static readonly LIST_SKILLS = "a4b:ListSkills";
	/** [List] a4b:ListSkillsStoreCategories */
	static readonly LIST_SKILLS_STORE_CATEGORIES =
		"a4b:ListSkillsStoreCategories";
	/** [List] a4b:ListSkillsStoreSkillsByCategory */
	static readonly LIST_SKILLS_STORE_SKILLS_BY_CATEGORY =
		"a4b:ListSkillsStoreSkillsByCategory";
	/** [List] a4b:ListSmartHomeAppliances */
	static readonly LIST_SMART_HOME_APPLIANCES = "a4b:ListSmartHomeAppliances";
	/** [Read] a4b:ListTags */
	static readonly LIST_TAGS = "a4b:ListTags";
	/** [Write] a4b:PutConferencePreference */
	static readonly PUT_CONFERENCE_PREFERENCE = "a4b:PutConferencePreference";
	/** [Write] a4b:PutDeviceSetupEvents */
	static readonly PUT_DEVICE_SETUP_EVENTS = "a4b:PutDeviceSetupEvents";
	/** [Write] a4b:PutInvitationConfiguration */
	static readonly PUT_INVITATION_CONFIGURATION =
		"a4b:PutInvitationConfiguration";
	/** [Write] a4b:PutRoomSkillParameter */
	static readonly PUT_ROOM_SKILL_PARAMETER = "a4b:PutRoomSkillParameter";
	/** [Write] a4b:PutSkillAuthorization */
	static readonly PUT_SKILL_AUTHORIZATION = "a4b:PutSkillAuthorization";
	/** [Write] a4b:RegisterAVSDevice */
	static readonly REGISTER_AVS_DEVICE = "a4b:RegisterAVSDevice";
	/** [Write] a4b:RegisterDevice */
	static readonly REGISTER_DEVICE = "a4b:RegisterDevice";
	/** [Write] a4b:RejectSkill */
	static readonly REJECT_SKILL = "a4b:RejectSkill";
	/** [Read] a4b:ResolveRoom */
	static readonly RESOLVE_ROOM = "a4b:ResolveRoom";
	/** [Write] a4b:RevokeInvitation */
	static readonly REVOKE_INVITATION = "a4b:RevokeInvitation";
	/** [List] a4b:SearchAddressBooks */
	static readonly SEARCH_ADDRESS_BOOKS = "a4b:SearchAddressBooks";
	/** [List] a4b:SearchContacts */
	static readonly SEARCH_CONTACTS = "a4b:SearchContacts";
	/** [List] a4b:SearchDevices */
	static readonly SEARCH_DEVICES = "a4b:SearchDevices";
	/** [List] a4b:SearchNetworkProfiles */
	static readonly SEARCH_NETWORK_PROFILES = "a4b:SearchNetworkProfiles";
	/** [List] a4b:SearchProfiles */
	static readonly SEARCH_PROFILES = "a4b:SearchProfiles";
	/** [List] a4b:SearchRooms */
	static readonly SEARCH_ROOMS = "a4b:SearchRooms";
	/** [List] a4b:SearchSkillGroups */
	static readonly SEARCH_SKILL_GROUPS = "a4b:SearchSkillGroups";
	/** [List] a4b:SearchUsers */
	static readonly SEARCH_USERS = "a4b:SearchUsers";
	/** [Write] a4b:SendAnnouncement */
	static readonly SEND_ANNOUNCEMENT = "a4b:SendAnnouncement";
	/** [Write] a4b:SendInvitation */
	static readonly SEND_INVITATION = "a4b:SendInvitation";
	/** [Write] a4b:StartDeviceSync */
	static readonly START_DEVICE_SYNC = "a4b:StartDeviceSync";
	/** [Read] a4b:StartSmartHomeApplianceDiscovery */
	static readonly START_SMART_HOME_APPLIANCE_DISCOVERY =
		"a4b:StartSmartHomeApplianceDiscovery";
	/** [Tagging] a4b:TagResource */
	static readonly TAG_RESOURCE = "a4b:TagResource";
	/** [Tagging] a4b:UntagResource */
	static readonly UNTAG_RESOURCE = "a4b:UntagResource";
	/** [Write] a4b:UpdateAddressBook */
	static readonly UPDATE_ADDRESS_BOOK = "a4b:UpdateAddressBook";
	/** [Write] a4b:UpdateBusinessReportSchedule */
	static readonly UPDATE_BUSINESS_REPORT_SCHEDULE =
		"a4b:UpdateBusinessReportSchedule";
	/** [Write] a4b:UpdateConferenceProvider */
	static readonly UPDATE_CONFERENCE_PROVIDER = "a4b:UpdateConferenceProvider";
	/** [Write] a4b:UpdateContact */
	static readonly UPDATE_CONTACT = "a4b:UpdateContact";
	/** [Write] a4b:UpdateDevice */
	static readonly UPDATE_DEVICE = "a4b:UpdateDevice";
	/** [Write] a4b:UpdateGateway */
	static readonly UPDATE_GATEWAY = "a4b:UpdateGateway";
	/** [Write] a4b:UpdateGatewayGroup */
	static readonly UPDATE_GATEWAY_GROUP = "a4b:UpdateGatewayGroup";
	/** [Write] a4b:UpdateNetworkProfile */
	static readonly UPDATE_NETWORK_PROFILE = "a4b:UpdateNetworkProfile";
	/** [Write] a4b:UpdateProfile */
	static readonly UPDATE_PROFILE = "a4b:UpdateProfile";
	/** [Write] a4b:UpdateRoom */
	static readonly UPDATE_ROOM = "a4b:UpdateRoom";
	/** [Write] a4b:UpdateSkillGroup */
	static readonly UPDATE_SKILL_GROUP = "a4b:UpdateSkillGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		A4bActions.GET_ADDRESS_BOOK,
		A4bActions.GET_CONFERENCE_PREFERENCE,
		A4bActions.GET_CONFERENCE_PROVIDER,
		A4bActions.GET_CONTACT,
		A4bActions.GET_DEVICE,
		A4bActions.GET_GATEWAY,
		A4bActions.GET_GATEWAY_GROUP,
		A4bActions.GET_INVITATION_CONFIGURATION,
		A4bActions.GET_NETWORK_PROFILE,
		A4bActions.GET_PROFILE,
		A4bActions.GET_ROOM,
		A4bActions.GET_ROOM_SKILL_PARAMETER,
		A4bActions.GET_SKILL_GROUP,
		A4bActions.LIST_TAGS,
		A4bActions.RESOLVE_ROOM,
		A4bActions.START_SMART_HOME_APPLIANCE_DISCOVERY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		A4bActions.APPROVE_SKILL,
		A4bActions.ASSOCIATE_CONTACT_WITH_ADDRESS_BOOK,
		A4bActions.ASSOCIATE_DEVICE_WITH_NETWORK_PROFILE,
		A4bActions.ASSOCIATE_DEVICE_WITH_ROOM,
		A4bActions.ASSOCIATE_SKILL_GROUP_WITH_ROOM,
		A4bActions.ASSOCIATE_SKILL_WITH_SKILL_GROUP,
		A4bActions.ASSOCIATE_SKILL_WITH_USERS,
		A4bActions.COMPLETE_REGISTRATION,
		A4bActions.CREATE_ADDRESS_BOOK,
		A4bActions.CREATE_BUSINESS_REPORT_SCHEDULE,
		A4bActions.CREATE_CONFERENCE_PROVIDER,
		A4bActions.CREATE_CONTACT,
		A4bActions.CREATE_GATEWAY_GROUP,
		A4bActions.CREATE_NETWORK_PROFILE,
		A4bActions.CREATE_PROFILE,
		A4bActions.CREATE_ROOM,
		A4bActions.CREATE_SKILL_GROUP,
		A4bActions.CREATE_USER,
		A4bActions.DELETE_ADDRESS_BOOK,
		A4bActions.DELETE_BUSINESS_REPORT_SCHEDULE,
		A4bActions.DELETE_CONFERENCE_PROVIDER,
		A4bActions.DELETE_CONTACT,
		A4bActions.DELETE_DEVICE,
		A4bActions.DELETE_DEVICE_USAGE_DATA,
		A4bActions.DELETE_GATEWAY_GROUP,
		A4bActions.DELETE_NETWORK_PROFILE,
		A4bActions.DELETE_PROFILE,
		A4bActions.DELETE_ROOM,
		A4bActions.DELETE_ROOM_SKILL_PARAMETER,
		A4bActions.DELETE_SKILL_AUTHORIZATION,
		A4bActions.DELETE_SKILL_GROUP,
		A4bActions.DELETE_USER,
		A4bActions.DISASSOCIATE_CONTACT_FROM_ADDRESS_BOOK,
		A4bActions.DISASSOCIATE_DEVICE_FROM_ROOM,
		A4bActions.DISASSOCIATE_SKILL_FROM_SKILL_GROUP,
		A4bActions.DISASSOCIATE_SKILL_FROM_USERS,
		A4bActions.DISASSOCIATE_SKILL_GROUP_FROM_ROOM,
		A4bActions.FORGET_SMART_HOME_APPLIANCES,
		A4bActions.PUT_CONFERENCE_PREFERENCE,
		A4bActions.PUT_DEVICE_SETUP_EVENTS,
		A4bActions.PUT_INVITATION_CONFIGURATION,
		A4bActions.PUT_ROOM_SKILL_PARAMETER,
		A4bActions.PUT_SKILL_AUTHORIZATION,
		A4bActions.REGISTER_AVS_DEVICE,
		A4bActions.REGISTER_DEVICE,
		A4bActions.REJECT_SKILL,
		A4bActions.REVOKE_INVITATION,
		A4bActions.SEND_ANNOUNCEMENT,
		A4bActions.SEND_INVITATION,
		A4bActions.START_DEVICE_SYNC,
		A4bActions.UPDATE_ADDRESS_BOOK,
		A4bActions.UPDATE_BUSINESS_REPORT_SCHEDULE,
		A4bActions.UPDATE_CONFERENCE_PROVIDER,
		A4bActions.UPDATE_CONTACT,
		A4bActions.UPDATE_DEVICE,
		A4bActions.UPDATE_GATEWAY,
		A4bActions.UPDATE_GATEWAY_GROUP,
		A4bActions.UPDATE_NETWORK_PROFILE,
		A4bActions.UPDATE_PROFILE,
		A4bActions.UPDATE_ROOM,
		A4bActions.UPDATE_SKILL_GROUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		A4bActions.LIST_BUSINESS_REPORT_SCHEDULES,
		A4bActions.LIST_CONFERENCE_PROVIDERS,
		A4bActions.LIST_DEVICE_EVENTS,
		A4bActions.LIST_GATEWAY_GROUPS,
		A4bActions.LIST_GATEWAYS,
		A4bActions.LIST_SKILLS,
		A4bActions.LIST_SKILLS_STORE_CATEGORIES,
		A4bActions.LIST_SKILLS_STORE_SKILLS_BY_CATEGORY,
		A4bActions.LIST_SMART_HOME_APPLIANCES,
		A4bActions.SEARCH_ADDRESS_BOOKS,
		A4bActions.SEARCH_CONTACTS,
		A4bActions.SEARCH_DEVICES,
		A4bActions.SEARCH_NETWORK_PROFILES,
		A4bActions.SEARCH_PROFILES,
		A4bActions.SEARCH_ROOMS,
		A4bActions.SEARCH_SKILL_GROUPS,
		A4bActions.SEARCH_USERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		A4bActions.TAG_RESOURCE,
		A4bActions.UNTAG_RESOURCE,
	];
}

const AddressbookArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):address-book/(?<resourceId>[^:/?]+)$",
);
const ConferenceproviderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):conference-provider/(?<resourceId>[^:/?]+)$",
);
const ContactArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):contact/(?<resourceId>[^:/?]+)$",
);
const DeviceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):device/(?<resourceId>[^:/?]+)$",
);
const GatewayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<resourceId>[^:/?]+)$",
);
const GatewaygroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):gateway-group/(?<resourceId>[^:/?]+)$",
);
const NetworkprofileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):network-profile/(?<resourceId>[^:/?]+)$",
);
const ProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):profile/(?<resourceId>[^:/?]+)$",
);
const RoomArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):room/(?<resourceId>[^:/?]+)$",
);
const ScheduleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):schedule/(?<resourceId>[^:/?]+)$",
);
const SkillgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):skill-group/(?<resourceId>[^:/?]+)$",
);
const UserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):a4b:(?<region>[^:]*):(?<account>[^:]*):user/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for a4b resources.
 */
export class A4bResources {
	/**
	 * Builds an ARN for the addressbook resource.
	 */
	static addressbook(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAddressbookArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static conferenceprovider(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConferenceproviderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static contact(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseContactArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	 * Builds an ARN for the gateway resource.
	 */
	static gateway(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseGatewayArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static gatewaygroup(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseGatewaygroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	 * Builds an ARN for the profile resource.
	 */
	static profile(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static room(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRoomArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static schedule(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseScheduleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static skillgroup(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSkillgroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static user(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseUserArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly CREATE_ADDRESS_BOOK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBusinessReportSchedule action. */
	static readonly CREATE_BUSINESS_REPORT_SCHEDULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConferenceProvider action. */
	static readonly CREATE_CONFERENCE_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContact action. */
	static readonly CREATE_CONTACT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGatewayGroup action. */
	static readonly CREATE_GATEWAY_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNetworkProfile action. */
	static readonly CREATE_NETWORK_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CREATE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRoom action. */
	static readonly CREATE_ROOM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSkillGroup action. */
	static readonly CREATE_SKILL_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CREATE_USER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterAVSDevice action. */
	static readonly REGISTER_AVS_DEVICE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: a4b:amazonId (String) */
	static readonly AMAZON_ID = "a4b:amazonId";
	/** Condition key: a4b:filters_deviceType (ArrayOfString) */
	static readonly FILTERS_DEVICE_TYPE = "a4b:filters_deviceType";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
