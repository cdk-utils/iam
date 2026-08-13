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
	static readonly CancelContact = "groundstation:CancelContact";
	/** [Write] groundstation:CreateConfig */
	static readonly CreateConfig = "groundstation:CreateConfig";
	/** [Write] groundstation:CreateDataflowEndpointGroup */
	static readonly CreateDataflowEndpointGroup =
		"groundstation:CreateDataflowEndpointGroup";
	/** [Write] groundstation:CreateDataflowEndpointGroupV2 */
	static readonly CreateDataflowEndpointGroupV2 =
		"groundstation:CreateDataflowEndpointGroupV2";
	/** [Write] groundstation:CreateEphemeris */
	static readonly CreateEphemeris = "groundstation:CreateEphemeris";
	/** [Write] groundstation:CreateMissionProfile */
	static readonly CreateMissionProfile = "groundstation:CreateMissionProfile";
	/** [Write] groundstation:DeleteConfig */
	static readonly DeleteConfig = "groundstation:DeleteConfig";
	/** [Write] groundstation:DeleteDataflowEndpointGroup */
	static readonly DeleteDataflowEndpointGroup =
		"groundstation:DeleteDataflowEndpointGroup";
	/** [Write] groundstation:DeleteEphemeris */
	static readonly DeleteEphemeris = "groundstation:DeleteEphemeris";
	/** [Write] groundstation:DeleteMissionProfile */
	static readonly DeleteMissionProfile = "groundstation:DeleteMissionProfile";
	/** [Read] groundstation:DescribeContact */
	static readonly DescribeContact = "groundstation:DescribeContact";
	/** [Read] groundstation:DescribeContactVersion */
	static readonly DescribeContactVersion =
		"groundstation:DescribeContactVersion";
	/** [Read] groundstation:DescribeEphemeris */
	static readonly DescribeEphemeris = "groundstation:DescribeEphemeris";
	/** [Read] groundstation:GetAgentConfiguration */
	static readonly actionGetAgentConfiguration =
		"groundstation:GetAgentConfiguration";
	/** [Read] groundstation:GetAgentTaskResponseUrl */
	static readonly actionGetAgentTaskResponseUrl =
		"groundstation:GetAgentTaskResponseUrl";
	/** [Read] groundstation:GetConfig */
	static readonly actionGetConfig = "groundstation:GetConfig";
	/** [Read] groundstation:GetDataflowEndpointGroup */
	static readonly actionGetDataflowEndpointGroup =
		"groundstation:GetDataflowEndpointGroup";
	/** [Read] groundstation:GetMinuteUsage */
	static readonly actionGetMinuteUsage = "groundstation:GetMinuteUsage";
	/** [Read] groundstation:GetMissionProfile */
	static readonly actionGetMissionProfile = "groundstation:GetMissionProfile";
	/** [Read] groundstation:GetSatellite */
	static readonly actionGetSatellite = "groundstation:GetSatellite";
	/** [List] groundstation:ListAntennas */
	static readonly ListAntennas = "groundstation:ListAntennas";
	/** [List] groundstation:ListConfigs */
	static readonly ListConfigs = "groundstation:ListConfigs";
	/** [List] groundstation:ListContactVersions */
	static readonly ListContactVersions = "groundstation:ListContactVersions";
	/** [List] groundstation:ListContacts */
	static readonly ListContacts = "groundstation:ListContacts";
	/** [List] groundstation:ListDataflowEndpointGroups */
	static readonly ListDataflowEndpointGroups =
		"groundstation:ListDataflowEndpointGroups";
	/** [List] groundstation:ListEphemerides */
	static readonly ListEphemerides = "groundstation:ListEphemerides";
	/** [List] groundstation:ListGroundStationReservations */
	static readonly ListGroundStationReservations =
		"groundstation:ListGroundStationReservations";
	/** [List] groundstation:ListGroundStations */
	static readonly ListGroundStations = "groundstation:ListGroundStations";
	/** [List] groundstation:ListMissionProfiles */
	static readonly ListMissionProfiles = "groundstation:ListMissionProfiles";
	/** [List] groundstation:ListSatellites */
	static readonly ListSatellites = "groundstation:ListSatellites";
	/** [Read] groundstation:ListTagsForResource */
	static readonly ListTagsForResource = "groundstation:ListTagsForResource";
	/** [Write] groundstation:RegisterAgent */
	static readonly RegisterAgent = "groundstation:RegisterAgent";
	/** [Write] groundstation:ReserveContact */
	static readonly ReserveContact = "groundstation:ReserveContact";
	/** [Tagging] groundstation:TagResource */
	static readonly TagResource = "groundstation:TagResource";
	/** [Tagging] groundstation:UntagResource */
	static readonly UntagResource = "groundstation:UntagResource";
	/** [Write] groundstation:UpdateAgentStatus */
	static readonly UpdateAgentStatus = "groundstation:UpdateAgentStatus";
	/** [Write] groundstation:UpdateConfig */
	static readonly UpdateConfig = "groundstation:UpdateConfig";
	/** [Write] groundstation:UpdateContact */
	static readonly UpdateContact = "groundstation:UpdateContact";
	/** [Write] groundstation:UpdateEphemeris */
	static readonly UpdateEphemeris = "groundstation:UpdateEphemeris";
	/** [Write] groundstation:UpdateMissionProfile */
	static readonly UpdateMissionProfile = "groundstation:UpdateMissionProfile";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GroundStationActions.DescribeContact,
		GroundStationActions.DescribeContactVersion,
		GroundStationActions.DescribeEphemeris,
		GroundStationActions.actionGetAgentConfiguration,
		GroundStationActions.actionGetAgentTaskResponseUrl,
		GroundStationActions.actionGetConfig,
		GroundStationActions.actionGetDataflowEndpointGroup,
		GroundStationActions.actionGetMinuteUsage,
		GroundStationActions.actionGetMissionProfile,
		GroundStationActions.actionGetSatellite,
		GroundStationActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		GroundStationActions.CancelContact,
		GroundStationActions.CreateConfig,
		GroundStationActions.CreateDataflowEndpointGroup,
		GroundStationActions.CreateDataflowEndpointGroupV2,
		GroundStationActions.CreateEphemeris,
		GroundStationActions.CreateMissionProfile,
		GroundStationActions.DeleteConfig,
		GroundStationActions.DeleteDataflowEndpointGroup,
		GroundStationActions.DeleteEphemeris,
		GroundStationActions.DeleteMissionProfile,
		GroundStationActions.RegisterAgent,
		GroundStationActions.ReserveContact,
		GroundStationActions.UpdateAgentStatus,
		GroundStationActions.UpdateConfig,
		GroundStationActions.UpdateContact,
		GroundStationActions.UpdateEphemeris,
		GroundStationActions.UpdateMissionProfile,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		GroundStationActions.ListAntennas,
		GroundStationActions.ListConfigs,
		GroundStationActions.ListContactVersions,
		GroundStationActions.ListContacts,
		GroundStationActions.ListDataflowEndpointGroups,
		GroundStationActions.ListEphemerides,
		GroundStationActions.ListGroundStationReservations,
		GroundStationActions.ListGroundStations,
		GroundStationActions.ListMissionProfiles,
		GroundStationActions.ListSatellites,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		GroundStationActions.TagResource,
		GroundStationActions.UntagResource,
	];
}

/**
 * Properties for building a Agent ARN.
 */
export interface GroundStationAgentArnProps {
	/** The AgentId component of the ARN. */
	readonly agentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Agent ARN.
 */
export interface GroundStationAgentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AgentId component. */
	readonly agentId: string;
}

/**
 * Properties for building a Config ARN.
 */
export interface GroundStationConfigArnProps {
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
}

/**
 * Parsed components of a Config ARN.
 */
export interface GroundStationConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConfigType component. */
	readonly configType: string;
	/** The ConfigId component. */
	readonly configId: string;
}

/**
 * Properties for building a Contact ARN.
 */
export interface GroundStationContactArnProps {
	/** The ContactId component of the ARN. */
	readonly contactId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Contact ARN.
 */
export interface GroundStationContactArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ContactId component. */
	readonly contactId: string;
}

/**
 * Properties for building a DataflowEndpointGroup ARN.
 */
export interface GroundStationDataflowEndpointGroupArnProps {
	/** The DataflowEndpointGroupId component of the ARN. */
	readonly dataflowEndpointGroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DataflowEndpointGroup ARN.
 */
export interface GroundStationDataflowEndpointGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataflowEndpointGroupId component. */
	readonly dataflowEndpointGroupId: string;
}

/**
 * Properties for building a EphemerisItem ARN.
 */
export interface GroundStationEphemerisItemArnProps {
	/** The EphemerisId component of the ARN. */
	readonly ephemerisId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a EphemerisItem ARN.
 */
export interface GroundStationEphemerisItemArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EphemerisId component. */
	readonly ephemerisId: string;
}

/**
 * Properties for building a GroundStationResource ARN.
 */
export interface GroundStationGroundStationResourceArnProps {
	/** The GroundStationId component of the ARN. */
	readonly groundStationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a GroundStationResource ARN.
 */
export interface GroundStationGroundStationResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroundStationId component. */
	readonly groundStationId: string;
}

/**
 * Properties for building a MissionProfile ARN.
 */
export interface GroundStationMissionProfileArnProps {
	/** The MissionProfileId component of the ARN. */
	readonly missionProfileId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a MissionProfile ARN.
 */
export interface GroundStationMissionProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MissionProfileId component. */
	readonly missionProfileId: string;
}

/**
 * Properties for building a Satellite ARN.
 */
export interface GroundStationSatelliteArnProps {
	/** The SatelliteId component of the ARN. */
	readonly satelliteId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Satellite ARN.
 */
export interface GroundStationSatelliteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SatelliteId component. */
	readonly satelliteId: string;
}

const AgentArnRegex =
	/^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):agent\/(?<agentId>[^:/?]+)$/;
const ConfigArnRegex =
	/^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):config\/(?<configType>[^:/?]+)\/(?<configId>[^:/?]+)$/;
const ContactArnRegex =
	/^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):contact\/(?<contactId>[^:/?]+)$/;
const DataflowEndpointGroupArnRegex =
	/^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):dataflow-endpoint-group\/(?<dataflowEndpointGroupId>[^:/?]+)$/;
const EphemerisItemArnRegex =
	/^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):ephemeris\/(?<ephemerisId>[^:/?]+)$/;
const GroundStationResourceArnRegex =
	/^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):groundstation:(?<groundStationId>[^:/?]+)$/;
const MissionProfileArnRegex =
	/^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):mission-profile\/(?<missionProfileId>[^:/?]+)$/;
const SatelliteArnRegex =
	/^arn:(?<partition>[^:]+):groundstation:(?<region>[^:]*):(?<account>[^:]*):satellite\/(?<satelliteId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for groundstation resources.
 */
export class GroundStationResources {
	/**
	 * Builds an ARN for the Agent resource.
	 */
	static agent(props: GroundStationAgentArnProps): string {
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
	static parseAgentArn(arn: string): GroundStationAgentArnComponents {
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
	static config(props: GroundStationConfigArnProps): string {
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
	static parseConfigArn(arn: string): GroundStationConfigArnComponents {
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
	static contact(props: GroundStationContactArnProps): string {
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
	static parseContactArn(arn: string): GroundStationContactArnComponents {
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
	static dataflowEndpointGroup(
		props: GroundStationDataflowEndpointGroupArnProps,
	): string {
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
	static parseDataflowEndpointGroupArn(
		arn: string,
	): GroundStationDataflowEndpointGroupArnComponents {
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
	static ephemerisItem(props: GroundStationEphemerisItemArnProps): string {
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
	static parseEphemerisItemArn(
		arn: string,
	): GroundStationEphemerisItemArnComponents {
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
	static groundStationResource(
		props: GroundStationGroundStationResourceArnProps,
	): string {
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
	static parseGroundStationResourceArn(
		arn: string,
	): GroundStationGroundStationResourceArnComponents {
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
	static missionProfile(props: GroundStationMissionProfileArnProps): string {
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
	static parseMissionProfileArn(
		arn: string,
	): GroundStationMissionProfileArnComponents {
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
	static satellite(props: GroundStationSatelliteArnProps): string {
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
	static parseSatelliteArn(arn: string): GroundStationSatelliteArnComponents {
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
	static readonly CancelContact: string[] = ["groundstation:CancelContact"];
	/** IAM actions required for the CreateConfig API call. */
	static readonly CreateConfig: string[] = [
		"groundstation:CreateConfig",
		"iam:PassRole",
		"groundstation:TagResource",
	];
	/** IAM actions required for the CreateDataflowEndpointGroup API call. */
	static readonly CreateDataflowEndpointGroup: string[] = [
		"groundstation:CreateDataflowEndpointGroup",
		"iam:PassRole",
		"groundstation:TagResource",
	];
	/** IAM actions required for the CreateDataflowEndpointGroupV2 API call. */
	static readonly CreateDataflowEndpointGroupV2: string[] = [
		"groundstation:CreateDataflowEndpointGroupV2",
		"groundstation:TagResource",
	];
	/** IAM actions required for the CreateEphemeris API call. */
	static readonly CreateEphemeris: string[] = [
		"groundstation:CreateEphemeris",
		"groundstation:TagResource",
	];
	/** IAM actions required for the CreateMissionProfile API call. */
	static readonly CreateMissionProfile: string[] = [
		"groundstation:CreateMissionProfile",
		"iam:PassRole",
		"groundstation:TagResource",
	];
	/** IAM actions required for the DeleteConfig API call. */
	static readonly DeleteConfig: string[] = ["groundstation:DeleteConfig"];
	/** IAM actions required for the DeleteDataflowEndpointGroup API call. */
	static readonly DeleteDataflowEndpointGroup: string[] = [
		"groundstation:DeleteDataflowEndpointGroup",
	];
	/** IAM actions required for the DeleteEphemeris API call. */
	static readonly DeleteEphemeris: string[] = ["groundstation:DeleteEphemeris"];
	/** IAM actions required for the DeleteMissionProfile API call. */
	static readonly DeleteMissionProfile: string[] = [
		"groundstation:DeleteMissionProfile",
	];
	/** IAM actions required for the DescribeContact API call. */
	static readonly DescribeContact: string[] = ["groundstation:DescribeContact"];
	/** IAM actions required for the DescribeContactVersion API call. */
	static readonly DescribeContactVersion: string[] = [
		"groundstation:DescribeContactVersion",
	];
	/** IAM actions required for the DescribeEphemeris API call. */
	static readonly DescribeEphemeris: string[] = [
		"groundstation:DescribeEphemeris",
	];
	/** IAM actions required for the GetAgentConfiguration API call. */
	static readonly opGetAgentConfiguration: string[] = [
		"groundstation:GetAgentConfiguration",
	];
	/** IAM actions required for the GetAgentTaskResponseUrl API call. */
	static readonly opGetAgentTaskResponseUrl: string[] = [
		"groundstation:GetAgentTaskResponseUrl",
	];
	/** IAM actions required for the GetConfig API call. */
	static readonly opGetConfig: string[] = ["groundstation:GetConfig"];
	/** IAM actions required for the GetDataflowEndpointGroup API call. */
	static readonly opGetDataflowEndpointGroup: string[] = [
		"groundstation:GetDataflowEndpointGroup",
	];
	/** IAM actions required for the GetMinuteUsage API call. */
	static readonly opGetMinuteUsage: string[] = ["groundstation:GetMinuteUsage"];
	/** IAM actions required for the GetMissionProfile API call. */
	static readonly opGetMissionProfile: string[] = [
		"groundstation:GetMissionProfile",
	];
	/** IAM actions required for the GetSatellite API call. */
	static readonly opGetSatellite: string[] = ["groundstation:GetSatellite"];
	/** IAM actions required for the ListAntennas API call. */
	static readonly ListAntennas: string[] = ["groundstation:ListAntennas"];
	/** IAM actions required for the ListConfigs API call. */
	static readonly ListConfigs: string[] = ["groundstation:ListConfigs"];
	/** IAM actions required for the ListContactVersions API call. */
	static readonly ListContactVersions: string[] = [
		"groundstation:ListContactVersions",
	];
	/** IAM actions required for the ListContacts API call. */
	static readonly ListContacts: string[] = ["groundstation:ListContacts"];
	/** IAM actions required for the ListDataflowEndpointGroups API call. */
	static readonly ListDataflowEndpointGroups: string[] = [
		"groundstation:ListDataflowEndpointGroups",
	];
	/** IAM actions required for the ListEphemerides API call. */
	static readonly ListEphemerides: string[] = ["groundstation:ListEphemerides"];
	/** IAM actions required for the ListGroundStationReservations API call. */
	static readonly ListGroundStationReservations: string[] = [
		"groundstation:ListGroundStationReservations",
	];
	/** IAM actions required for the ListGroundStations API call. */
	static readonly ListGroundStations: string[] = [
		"groundstation:ListGroundStations",
	];
	/** IAM actions required for the ListMissionProfiles API call. */
	static readonly ListMissionProfiles: string[] = [
		"groundstation:ListMissionProfiles",
	];
	/** IAM actions required for the ListSatellites API call. */
	static readonly ListSatellites: string[] = ["groundstation:ListSatellites"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"groundstation:ListTagsForResource",
	];
	/** IAM actions required for the RegisterAgent API call. */
	static readonly RegisterAgent: string[] = ["groundstation:RegisterAgent"];
	/** IAM actions required for the ReserveContact API call. */
	static readonly ReserveContact: string[] = [
		"groundstation:ReserveContact",
		"groundstation:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["groundstation:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["groundstation:UntagResource"];
	/** IAM actions required for the UpdateAgentStatus API call. */
	static readonly UpdateAgentStatus: string[] = [
		"groundstation:UpdateAgentStatus",
	];
	/** IAM actions required for the UpdateConfig API call. */
	static readonly UpdateConfig: string[] = [
		"iam:PassRole",
		"groundstation:UpdateConfig",
	];
	/** IAM actions required for the UpdateContact API call. */
	static readonly UpdateContact: string[] = ["groundstation:UpdateContact"];
	/** IAM actions required for the UpdateEphemeris API call. */
	static readonly UpdateEphemeris: string[] = ["groundstation:UpdateEphemeris"];
	/** IAM actions required for the UpdateMissionProfile API call. */
	static readonly UpdateMissionProfile: string[] = [
		"iam:PassRole",
		"groundstation:UpdateMissionProfile",
	];
}

/**
 * Condition key constants and builders for groundstation.
 */
export class GroundStationConditions {
	/** Condition keys applicable to the CreateConfig action. */
	static readonly CreateConfigConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataflowEndpointGroup action. */
	static readonly CreateDataflowEndpointGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataflowEndpointGroupV2 action. */
	static readonly CreateDataflowEndpointGroupV2ConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEphemeris action. */
	static readonly CreateEphemerisConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMissionProfile action. */
	static readonly CreateMissionProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ReserveContact action. */
	static readonly ReserveContactConditionKeys: string[] = [
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
