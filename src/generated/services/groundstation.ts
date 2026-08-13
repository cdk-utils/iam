// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/groundstation.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the groundstation service.
 */
export class GroundStationActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "groundstation";

	/** [Write] groundstation:CancelContact */
	static readonly CANCEL_CONTACT = "groundstation:CancelContact";
	/** [Write] groundstation:CreateConfig */
	static readonly CREATE_CONFIG = "groundstation:CreateConfig";
	/** [Write] groundstation:CreateDataflowEndpointGroup */
	static readonly CREATE_DATAFLOW_ENDPOINT_GROUP =
		"groundstation:CreateDataflowEndpointGroup";
	/** [Write] groundstation:CreateDataflowEndpointGroupV2 */
	static readonly CREATE_DATAFLOW_ENDPOINT_GROUP_V2 =
		"groundstation:CreateDataflowEndpointGroupV2";
	/** [Write] groundstation:CreateEphemeris */
	static readonly CREATE_EPHEMERIS = "groundstation:CreateEphemeris";
	/** [Write] groundstation:CreateMissionProfile */
	static readonly CREATE_MISSION_PROFILE = "groundstation:CreateMissionProfile";
	/** [Write] groundstation:DeleteConfig */
	static readonly DELETE_CONFIG = "groundstation:DeleteConfig";
	/** [Write] groundstation:DeleteDataflowEndpointGroup */
	static readonly DELETE_DATAFLOW_ENDPOINT_GROUP =
		"groundstation:DeleteDataflowEndpointGroup";
	/** [Write] groundstation:DeleteEphemeris */
	static readonly DELETE_EPHEMERIS = "groundstation:DeleteEphemeris";
	/** [Write] groundstation:DeleteMissionProfile */
	static readonly DELETE_MISSION_PROFILE = "groundstation:DeleteMissionProfile";
	/** [Read] groundstation:DescribeContact */
	static readonly DESCRIBE_CONTACT = "groundstation:DescribeContact";
	/** [Read] groundstation:DescribeContactVersion */
	static readonly DESCRIBE_CONTACT_VERSION =
		"groundstation:DescribeContactVersion";
	/** [Read] groundstation:DescribeEphemeris */
	static readonly DESCRIBE_EPHEMERIS = "groundstation:DescribeEphemeris";
	/** [Read] groundstation:GetAgentConfiguration */
	static readonly GET_AGENT_CONFIGURATION =
		"groundstation:GetAgentConfiguration";
	/** [Read] groundstation:GetAgentTaskResponseUrl */
	static readonly GET_AGENT_TASK_RESPONSE_URL =
		"groundstation:GetAgentTaskResponseUrl";
	/** [Read] groundstation:GetConfig */
	static readonly GET_CONFIG = "groundstation:GetConfig";
	/** [Read] groundstation:GetDataflowEndpointGroup */
	static readonly GET_DATAFLOW_ENDPOINT_GROUP =
		"groundstation:GetDataflowEndpointGroup";
	/** [Read] groundstation:GetMinuteUsage */
	static readonly GET_MINUTE_USAGE = "groundstation:GetMinuteUsage";
	/** [Read] groundstation:GetMissionProfile */
	static readonly GET_MISSION_PROFILE = "groundstation:GetMissionProfile";
	/** [Read] groundstation:GetSatellite */
	static readonly GET_SATELLITE = "groundstation:GetSatellite";
	/** [List] groundstation:ListAntennas */
	static readonly LIST_ANTENNAS = "groundstation:ListAntennas";
	/** [List] groundstation:ListConfigs */
	static readonly LIST_CONFIGS = "groundstation:ListConfigs";
	/** [List] groundstation:ListContactVersions */
	static readonly LIST_CONTACT_VERSIONS = "groundstation:ListContactVersions";
	/** [List] groundstation:ListContacts */
	static readonly LIST_CONTACTS = "groundstation:ListContacts";
	/** [List] groundstation:ListDataflowEndpointGroups */
	static readonly LIST_DATAFLOW_ENDPOINT_GROUPS =
		"groundstation:ListDataflowEndpointGroups";
	/** [List] groundstation:ListEphemerides */
	static readonly LIST_EPHEMERIDES = "groundstation:ListEphemerides";
	/** [List] groundstation:ListGroundStationReservations */
	static readonly LIST_GROUND_STATION_RESERVATIONS =
		"groundstation:ListGroundStationReservations";
	/** [List] groundstation:ListGroundStations */
	static readonly LIST_GROUND_STATIONS = "groundstation:ListGroundStations";
	/** [List] groundstation:ListMissionProfiles */
	static readonly LIST_MISSION_PROFILES = "groundstation:ListMissionProfiles";
	/** [List] groundstation:ListSatellites */
	static readonly LIST_SATELLITES = "groundstation:ListSatellites";
	/** [Read] groundstation:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "groundstation:ListTagsForResource";
	/** [Write] groundstation:RegisterAgent */
	static readonly REGISTER_AGENT = "groundstation:RegisterAgent";
	/** [Write] groundstation:ReserveContact */
	static readonly RESERVE_CONTACT = "groundstation:ReserveContact";
	/** [Tagging] groundstation:TagResource */
	static readonly TAG_RESOURCE = "groundstation:TagResource";
	/** [Tagging] groundstation:UntagResource */
	static readonly UNTAG_RESOURCE = "groundstation:UntagResource";
	/** [Write] groundstation:UpdateAgentStatus */
	static readonly UPDATE_AGENT_STATUS = "groundstation:UpdateAgentStatus";
	/** [Write] groundstation:UpdateConfig */
	static readonly UPDATE_CONFIG = "groundstation:UpdateConfig";
	/** [Write] groundstation:UpdateContact */
	static readonly UPDATE_CONTACT = "groundstation:UpdateContact";
	/** [Write] groundstation:UpdateEphemeris */
	static readonly UPDATE_EPHEMERIS = "groundstation:UpdateEphemeris";
	/** [Write] groundstation:UpdateMissionProfile */
	static readonly UPDATE_MISSION_PROFILE = "groundstation:UpdateMissionProfile";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		GroundStationActions.DESCRIBE_CONTACT,
		GroundStationActions.DESCRIBE_CONTACT_VERSION,
		GroundStationActions.DESCRIBE_EPHEMERIS,
		GroundStationActions.GET_AGENT_CONFIGURATION,
		GroundStationActions.GET_AGENT_TASK_RESPONSE_URL,
		GroundStationActions.GET_CONFIG,
		GroundStationActions.GET_DATAFLOW_ENDPOINT_GROUP,
		GroundStationActions.GET_MINUTE_USAGE,
		GroundStationActions.GET_MISSION_PROFILE,
		GroundStationActions.GET_SATELLITE,
		GroundStationActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		GroundStationActions.CANCEL_CONTACT,
		GroundStationActions.CREATE_CONFIG,
		GroundStationActions.CREATE_DATAFLOW_ENDPOINT_GROUP,
		GroundStationActions.CREATE_DATAFLOW_ENDPOINT_GROUP_V2,
		GroundStationActions.CREATE_EPHEMERIS,
		GroundStationActions.CREATE_MISSION_PROFILE,
		GroundStationActions.DELETE_CONFIG,
		GroundStationActions.DELETE_DATAFLOW_ENDPOINT_GROUP,
		GroundStationActions.DELETE_EPHEMERIS,
		GroundStationActions.DELETE_MISSION_PROFILE,
		GroundStationActions.REGISTER_AGENT,
		GroundStationActions.RESERVE_CONTACT,
		GroundStationActions.UPDATE_AGENT_STATUS,
		GroundStationActions.UPDATE_CONFIG,
		GroundStationActions.UPDATE_CONTACT,
		GroundStationActions.UPDATE_EPHEMERIS,
		GroundStationActions.UPDATE_MISSION_PROFILE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		GroundStationActions.LIST_ANTENNAS,
		GroundStationActions.LIST_CONFIGS,
		GroundStationActions.LIST_CONTACT_VERSIONS,
		GroundStationActions.LIST_CONTACTS,
		GroundStationActions.LIST_DATAFLOW_ENDPOINT_GROUPS,
		GroundStationActions.LIST_EPHEMERIDES,
		GroundStationActions.LIST_GROUND_STATION_RESERVATIONS,
		GroundStationActions.LIST_GROUND_STATIONS,
		GroundStationActions.LIST_MISSION_PROFILES,
		GroundStationActions.LIST_SATELLITES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		GroundStationActions.TAG_RESOURCE,
		GroundStationActions.UNTAG_RESOURCE,
	];
}

const AgentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):agent/(?<agentId>[^:/?]+)$",
);
const ConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):config/(?<configType>[^:/?]+)/(?<configId>[^:/?]+)$",
);
const ContactArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):contact/(?<contactId>[^:/?]+)$",
);
const DataflowEndpointGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):dataflow-endpoint-group/(?<dataflowEndpointGroupId>[^:/?]+)$",
);
const EphemerisItemArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):ephemeris/(?<ephemerisId>[^:/?]+)$",
);
const GroundStationResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):groundstation:(?<groundStationId>[^:/?]+)$",
);
const MissionProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):mission-profile/(?<missionProfileId>[^:/?]+)$",
);
const SatelliteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):satellite/(?<satelliteId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for groundstation resources.
 */
export class GroundStationResources {
	/**
	 * Builds an ARN for the Agent resource.
	 */
	static agent(props: {
		/** The AgentId component of the ARN. */
		readonly agentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:groundstation:${props.region ?? "*"}:${props.account ?? "*"}:agent/${props.agentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Agent resource.
	 */
	static isValidAgentArn(arn: string): boolean {
		return AgentArnRegex.test(arn);
	}

	/**
	 * Parses a Agent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		agentId: string;
	} {
		const match = AgentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Agent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agentId: match.groups!.agentId,
		};
	}

	/**
	 * Builds an ARN for the Config resource.
	 */
	static config(props: {
		/** The ConfigType component of the ARN. */
		readonly configType: string;
		/** The ConfigId component of the ARN. */
		readonly configId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:groundstation:${props.region ?? "*"}:${props.account ?? "*"}:config/${props.configType}/${props.configId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Config resource.
	 */
	static isValidConfigArn(arn: string): boolean {
		return ConfigArnRegex.test(arn);
	}

	/**
	 * Parses a Config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		configType: string;
		configId: string;
	} {
		const match = ConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			configType: match.groups!.configType,
			configId: match.groups!.configId,
		};
	}

	/**
	 * Builds an ARN for the Contact resource.
	 */
	static contact(props: {
		/** The ContactId component of the ARN. */
		readonly contactId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:groundstation:${props.region ?? "*"}:${props.account ?? "*"}:contact/${props.contactId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Contact resource.
	 */
	static isValidContactArn(arn: string): boolean {
		return ContactArnRegex.test(arn);
	}

	/**
	 * Parses a Contact ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContactArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		contactId: string;
	} {
		const match = ContactArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Contact ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			contactId: match.groups!.contactId,
		};
	}

	/**
	 * Builds an ARN for the DataflowEndpointGroup resource.
	 */
	static dataflowEndpointGroup(props: {
		/** The DataflowEndpointGroupId component of the ARN. */
		readonly dataflowEndpointGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:groundstation:${props.region ?? "*"}:${props.account ?? "*"}:dataflow-endpoint-group/${props.dataflowEndpointGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DataflowEndpointGroup resource.
	 */
	static isValidDataflowEndpointGroupArn(arn: string): boolean {
		return DataflowEndpointGroupArnRegex.test(arn);
	}

	/**
	 * Parses a DataflowEndpointGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataflowEndpointGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataflowEndpointGroupId: string;
	} {
		const match = DataflowEndpointGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DataflowEndpointGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataflowEndpointGroupId: match.groups!.dataflowEndpointGroupId,
		};
	}

	/**
	 * Builds an ARN for the EphemerisItem resource.
	 */
	static ephemerisItem(props: {
		/** The EphemerisId component of the ARN. */
		readonly ephemerisId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:groundstation:${props.region ?? "*"}:${props.account ?? "*"}:ephemeris/${props.ephemerisId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the EphemerisItem resource.
	 */
	static isValidEphemerisItemArn(arn: string): boolean {
		return EphemerisItemArnRegex.test(arn);
	}

	/**
	 * Parses a EphemerisItem ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEphemerisItemArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ephemerisId: string;
	} {
		const match = EphemerisItemArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid EphemerisItem ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ephemerisId: match.groups!.ephemerisId,
		};
	}

	/**
	 * Builds an ARN for the GroundStationResource resource.
	 */
	static groundStationResource(props: {
		/** The GroundStationId component of the ARN. */
		readonly groundStationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:groundstation:${props.region ?? "*"}:${props.account ?? "*"}:groundstation:${props.groundStationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the GroundStationResource resource.
	 */
	static isValidGroundStationResourceArn(arn: string): boolean {
		return GroundStationResourceArnRegex.test(arn);
	}

	/**
	 * Parses a GroundStationResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGroundStationResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groundStationId: string;
	} {
		const match = GroundStationResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid GroundStationResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groundStationId: match.groups!.groundStationId,
		};
	}

	/**
	 * Builds an ARN for the MissionProfile resource.
	 */
	static missionProfile(props: {
		/** The MissionProfileId component of the ARN. */
		readonly missionProfileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:groundstation:${props.region ?? "*"}:${props.account ?? "*"}:mission-profile/${props.missionProfileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the MissionProfile resource.
	 */
	static isValidMissionProfileArn(arn: string): boolean {
		return MissionProfileArnRegex.test(arn);
	}

	/**
	 * Parses a MissionProfile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMissionProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		missionProfileId: string;
	} {
		const match = MissionProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid MissionProfile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			missionProfileId: match.groups!.missionProfileId,
		};
	}

	/**
	 * Builds an ARN for the Satellite resource.
	 */
	static satellite(props: {
		/** The SatelliteId component of the ARN. */
		readonly satelliteId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:groundstation:${props.region ?? "*"}:${props.account ?? "*"}:satellite/${props.satelliteId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Satellite resource.
	 */
	static isValidSatelliteArn(arn: string): boolean {
		return SatelliteArnRegex.test(arn);
	}

	/**
	 * Parses a Satellite ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSatelliteArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		satelliteId: string;
	} {
		const match = SatelliteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Satellite ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			satelliteId: match.groups!.satelliteId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for groundstation.
 */
export class GroundStationOperations {
	/** IAM actions required for the CancelContact API call. */
	static readonly CANCEL_CONTACT: string[] = ["groundstation:CancelContact"];
	/** IAM actions required for the CreateConfig API call. */
	static readonly CREATE_CONFIG: string[] = [
		"groundstation:CreateConfig",
		"iam:PassRole",
		"groundstation:TagResource",
	];
	/** IAM actions required for the CreateDataflowEndpointGroup API call. */
	static readonly CREATE_DATAFLOW_ENDPOINT_GROUP: string[] = [
		"groundstation:CreateDataflowEndpointGroup",
		"iam:PassRole",
		"groundstation:TagResource",
	];
	/** IAM actions required for the CreateDataflowEndpointGroupV2 API call. */
	static readonly CREATE_DATAFLOW_ENDPOINT_GROUP_V2: string[] = [
		"groundstation:CreateDataflowEndpointGroupV2",
		"groundstation:TagResource",
	];
	/** IAM actions required for the CreateEphemeris API call. */
	static readonly CREATE_EPHEMERIS: string[] = [
		"groundstation:CreateEphemeris",
		"groundstation:TagResource",
	];
	/** IAM actions required for the CreateMissionProfile API call. */
	static readonly CREATE_MISSION_PROFILE: string[] = [
		"groundstation:CreateMissionProfile",
		"iam:PassRole",
		"groundstation:TagResource",
	];
	/** IAM actions required for the DeleteConfig API call. */
	static readonly DELETE_CONFIG: string[] = ["groundstation:DeleteConfig"];
	/** IAM actions required for the DeleteDataflowEndpointGroup API call. */
	static readonly DELETE_DATAFLOW_ENDPOINT_GROUP: string[] = [
		"groundstation:DeleteDataflowEndpointGroup",
	];
	/** IAM actions required for the DeleteEphemeris API call. */
	static readonly DELETE_EPHEMERIS: string[] = [
		"groundstation:DeleteEphemeris",
	];
	/** IAM actions required for the DeleteMissionProfile API call. */
	static readonly DELETE_MISSION_PROFILE: string[] = [
		"groundstation:DeleteMissionProfile",
	];
	/** IAM actions required for the DescribeContact API call. */
	static readonly DESCRIBE_CONTACT: string[] = [
		"groundstation:DescribeContact",
	];
	/** IAM actions required for the DescribeContactVersion API call. */
	static readonly DESCRIBE_CONTACT_VERSION: string[] = [
		"groundstation:DescribeContactVersion",
	];
	/** IAM actions required for the DescribeEphemeris API call. */
	static readonly DESCRIBE_EPHEMERIS: string[] = [
		"groundstation:DescribeEphemeris",
	];
	/** IAM actions required for the GetAgentConfiguration API call. */
	static readonly GET_AGENT_CONFIGURATION: string[] = [
		"groundstation:GetAgentConfiguration",
	];
	/** IAM actions required for the GetAgentTaskResponseUrl API call. */
	static readonly GET_AGENT_TASK_RESPONSE_URL: string[] = [
		"groundstation:GetAgentTaskResponseUrl",
	];
	/** IAM actions required for the GetConfig API call. */
	static readonly GET_CONFIG: string[] = ["groundstation:GetConfig"];
	/** IAM actions required for the GetDataflowEndpointGroup API call. */
	static readonly GET_DATAFLOW_ENDPOINT_GROUP: string[] = [
		"groundstation:GetDataflowEndpointGroup",
	];
	/** IAM actions required for the GetMinuteUsage API call. */
	static readonly GET_MINUTE_USAGE: string[] = ["groundstation:GetMinuteUsage"];
	/** IAM actions required for the GetMissionProfile API call. */
	static readonly GET_MISSION_PROFILE: string[] = [
		"groundstation:GetMissionProfile",
	];
	/** IAM actions required for the GetSatellite API call. */
	static readonly GET_SATELLITE: string[] = ["groundstation:GetSatellite"];
	/** IAM actions required for the ListAntennas API call. */
	static readonly LIST_ANTENNAS: string[] = ["groundstation:ListAntennas"];
	/** IAM actions required for the ListConfigs API call. */
	static readonly LIST_CONFIGS: string[] = ["groundstation:ListConfigs"];
	/** IAM actions required for the ListContactVersions API call. */
	static readonly LIST_CONTACT_VERSIONS: string[] = [
		"groundstation:ListContactVersions",
	];
	/** IAM actions required for the ListContacts API call. */
	static readonly LIST_CONTACTS: string[] = ["groundstation:ListContacts"];
	/** IAM actions required for the ListDataflowEndpointGroups API call. */
	static readonly LIST_DATAFLOW_ENDPOINT_GROUPS: string[] = [
		"groundstation:ListDataflowEndpointGroups",
	];
	/** IAM actions required for the ListEphemerides API call. */
	static readonly LIST_EPHEMERIDES: string[] = [
		"groundstation:ListEphemerides",
	];
	/** IAM actions required for the ListGroundStationReservations API call. */
	static readonly LIST_GROUND_STATION_RESERVATIONS: string[] = [
		"groundstation:ListGroundStationReservations",
	];
	/** IAM actions required for the ListGroundStations API call. */
	static readonly LIST_GROUND_STATIONS: string[] = [
		"groundstation:ListGroundStations",
	];
	/** IAM actions required for the ListMissionProfiles API call. */
	static readonly LIST_MISSION_PROFILES: string[] = [
		"groundstation:ListMissionProfiles",
	];
	/** IAM actions required for the ListSatellites API call. */
	static readonly LIST_SATELLITES: string[] = ["groundstation:ListSatellites"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"groundstation:ListTagsForResource",
	];
	/** IAM actions required for the RegisterAgent API call. */
	static readonly REGISTER_AGENT: string[] = ["groundstation:RegisterAgent"];
	/** IAM actions required for the ReserveContact API call. */
	static readonly RESERVE_CONTACT: string[] = [
		"groundstation:ReserveContact",
		"groundstation:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["groundstation:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["groundstation:UntagResource"];
	/** IAM actions required for the UpdateAgentStatus API call. */
	static readonly UPDATE_AGENT_STATUS: string[] = [
		"groundstation:UpdateAgentStatus",
	];
	/** IAM actions required for the UpdateConfig API call. */
	static readonly UPDATE_CONFIG: string[] = [
		"iam:PassRole",
		"groundstation:UpdateConfig",
	];
	/** IAM actions required for the UpdateContact API call. */
	static readonly UPDATE_CONTACT: string[] = ["groundstation:UpdateContact"];
	/** IAM actions required for the UpdateEphemeris API call. */
	static readonly UPDATE_EPHEMERIS: string[] = [
		"groundstation:UpdateEphemeris",
	];
	/** IAM actions required for the UpdateMissionProfile API call. */
	static readonly UPDATE_MISSION_PROFILE: string[] = [
		"iam:PassRole",
		"groundstation:UpdateMissionProfile",
	];
}

/**
 * Condition key constants and builders for groundstation.
 */
export class GroundStationConditions {
	/** Condition keys applicable to the CreateConfig action. */
	static readonly CREATE_CONFIG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataflowEndpointGroup action. */
	static readonly CREATE_DATAFLOW_ENDPOINT_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataflowEndpointGroupV2 action. */
	static readonly CREATE_DATAFLOW_ENDPOINT_GROUP_V2_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEphemeris action. */
	static readonly CREATE_EPHEMERIS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMissionProfile action. */
	static readonly CREATE_MISSION_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ReserveContact action. */
	static readonly RESERVE_CONTACT_CONDITION_KEYS: string[] = [
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
	/** Condition key: groundstation:AgentId (String) */
	static readonly AGENT_ID = "groundstation:AgentId";
	/** Condition key: groundstation:ConfigId (String) */
	static readonly CONFIG_ID = "groundstation:ConfigId";
	/** Condition key: groundstation:ConfigType (String) */
	static readonly CONFIG_TYPE = "groundstation:ConfigType";
	/** Condition key: groundstation:ContactId (String) */
	static readonly CONTACT_ID = "groundstation:ContactId";
	/** Condition key: groundstation:DataflowEndpointGroupId (String) */
	static readonly DATAFLOW_ENDPOINT_GROUP_ID =
		"groundstation:DataflowEndpointGroupId";
	/** Condition key: groundstation:EphemerisId (String) */
	static readonly EPHEMERIS_ID = "groundstation:EphemerisId";
	/** Condition key: groundstation:GroundStationId (String) */
	static readonly GROUND_STATION_ID = "groundstation:GroundStationId";
	/** Condition key: groundstation:MissionProfileId (String) */
	static readonly MISSION_PROFILE_ID = "groundstation:MissionProfileId";
	/** Condition key: groundstation:SatelliteId (String) */
	static readonly SATELLITE_ID = "groundstation:SatelliteId";

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
	 * Generates a condition block for `groundstation:AgentId`.
	 */
	static agentId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "groundstation:AgentId": value } };
	}

	/**
	 * Generates a condition block for `groundstation:ConfigId`.
	 */
	static configId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "groundstation:ConfigId": value } };
	}

	/**
	 * Generates a condition block for `groundstation:ConfigType`.
	 */
	static configType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "groundstation:ConfigType": value } };
	}

	/**
	 * Generates a condition block for `groundstation:ContactId`.
	 */
	static contactId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "groundstation:ContactId": value } };
	}

	/**
	 * Generates a condition block for `groundstation:DataflowEndpointGroupId`.
	 */
	static dataflowEndpointGroupId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "groundstation:DataflowEndpointGroupId": value } };
	}

	/**
	 * Generates a condition block for `groundstation:EphemerisId`.
	 */
	static ephemerisId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "groundstation:EphemerisId": value } };
	}

	/**
	 * Generates a condition block for `groundstation:GroundStationId`.
	 */
	static groundStationId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "groundstation:GroundStationId": value } };
	}

	/**
	 * Generates a condition block for `groundstation:MissionProfileId`.
	 */
	static missionProfileId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "groundstation:MissionProfileId": value } };
	}

	/**
	 * Generates a condition block for `groundstation:SatelliteId`.
	 */
	static satelliteId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "groundstation:SatelliteId": value } };
	}
}
