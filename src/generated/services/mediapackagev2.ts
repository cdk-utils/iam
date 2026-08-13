// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mediapackagev2.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mediapackagev2 service.
 */
export class Mediapackagev2Actions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mediapackagev2";

	/** [Write] mediapackagev2:CancelHarvestJob */
	static readonly CANCEL_HARVEST_JOB = "mediapackagev2:CancelHarvestJob";
	/** [Write] mediapackagev2:CreateChannel */
	static readonly CREATE_CHANNEL = "mediapackagev2:CreateChannel";
	/** [Write] mediapackagev2:CreateChannelGroup */
	static readonly CREATE_CHANNEL_GROUP = "mediapackagev2:CreateChannelGroup";
	/** [Write] mediapackagev2:CreateHarvestJob */
	static readonly CREATE_HARVEST_JOB = "mediapackagev2:CreateHarvestJob";
	/** [Write] mediapackagev2:CreateOriginEndpoint */
	static readonly CREATE_ORIGIN_ENDPOINT =
		"mediapackagev2:CreateOriginEndpoint";
	/** [Write] mediapackagev2:DeleteChannel */
	static readonly DELETE_CHANNEL = "mediapackagev2:DeleteChannel";
	/** [Write] mediapackagev2:DeleteChannelGroup */
	static readonly DELETE_CHANNEL_GROUP = "mediapackagev2:DeleteChannelGroup";
	/** [Write] mediapackagev2:DeleteChannelPolicy */
	static readonly DELETE_CHANNEL_POLICY = "mediapackagev2:DeleteChannelPolicy";
	/** [Write] mediapackagev2:DeleteOriginEndpoint */
	static readonly DELETE_ORIGIN_ENDPOINT =
		"mediapackagev2:DeleteOriginEndpoint";
	/** [Write] mediapackagev2:DeleteOriginEndpointPolicy */
	static readonly DELETE_ORIGIN_ENDPOINT_POLICY =
		"mediapackagev2:DeleteOriginEndpointPolicy";
	/** [Read] mediapackagev2:GetChannel */
	static readonly GET_CHANNEL = "mediapackagev2:GetChannel";
	/** [Read] mediapackagev2:GetChannelGroup */
	static readonly GET_CHANNEL_GROUP = "mediapackagev2:GetChannelGroup";
	/** [Read] mediapackagev2:GetChannelPolicy */
	static readonly GET_CHANNEL_POLICY = "mediapackagev2:GetChannelPolicy";
	/** [Read] mediapackagev2:GetHarvestJob */
	static readonly GET_HARVEST_JOB = "mediapackagev2:GetHarvestJob";
	/** [Read] mediapackagev2:GetHeadObject */
	static readonly GET_HEAD_OBJECT = "mediapackagev2:GetHeadObject";
	/** [Read] mediapackagev2:GetObject */
	static readonly GET_OBJECT = "mediapackagev2:GetObject";
	/** [Read] mediapackagev2:GetOriginEndpoint */
	static readonly GET_ORIGIN_ENDPOINT = "mediapackagev2:GetOriginEndpoint";
	/** [Read] mediapackagev2:GetOriginEndpointPolicy */
	static readonly GET_ORIGIN_ENDPOINT_POLICY =
		"mediapackagev2:GetOriginEndpointPolicy";
	/** [Read] mediapackagev2:HarvestObject */
	static readonly HARVEST_OBJECT = "mediapackagev2:HarvestObject";
	/** [List] mediapackagev2:ListChannelGroups */
	static readonly LIST_CHANNEL_GROUPS = "mediapackagev2:ListChannelGroups";
	/** [List] mediapackagev2:ListChannels */
	static readonly LIST_CHANNELS = "mediapackagev2:ListChannels";
	/** [List] mediapackagev2:ListHarvestJobs */
	static readonly LIST_HARVEST_JOBS = "mediapackagev2:ListHarvestJobs";
	/** [List] mediapackagev2:ListOriginEndpoints */
	static readonly LIST_ORIGIN_ENDPOINTS = "mediapackagev2:ListOriginEndpoints";
	/** [Read] mediapackagev2:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "mediapackagev2:ListTagsForResource";
	/** [Write] mediapackagev2:PutChannelPolicy */
	static readonly PUT_CHANNEL_POLICY = "mediapackagev2:PutChannelPolicy";
	/** [Write] mediapackagev2:PutObject */
	static readonly PUT_OBJECT = "mediapackagev2:PutObject";
	/** [Write] mediapackagev2:PutOriginEndpointPolicy */
	static readonly PUT_ORIGIN_ENDPOINT_POLICY =
		"mediapackagev2:PutOriginEndpointPolicy";
	/** [Write] mediapackagev2:ResetChannelState */
	static readonly RESET_CHANNEL_STATE = "mediapackagev2:ResetChannelState";
	/** [Write] mediapackagev2:ResetOriginEndpointState */
	static readonly RESET_ORIGIN_ENDPOINT_STATE =
		"mediapackagev2:ResetOriginEndpointState";
	/** [Tagging] mediapackagev2:TagResource */
	static readonly TAG_RESOURCE = "mediapackagev2:TagResource";
	/** [Tagging] mediapackagev2:UntagResource */
	static readonly UNTAG_RESOURCE = "mediapackagev2:UntagResource";
	/** [Write] mediapackagev2:UpdateChannel */
	static readonly UPDATE_CHANNEL = "mediapackagev2:UpdateChannel";
	/** [Write] mediapackagev2:UpdateChannelGroup */
	static readonly UPDATE_CHANNEL_GROUP = "mediapackagev2:UpdateChannelGroup";
	/** [Write] mediapackagev2:UpdateOriginEndpoint */
	static readonly UPDATE_ORIGIN_ENDPOINT =
		"mediapackagev2:UpdateOriginEndpoint";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		Mediapackagev2Actions.GET_CHANNEL,
		Mediapackagev2Actions.GET_CHANNEL_GROUP,
		Mediapackagev2Actions.GET_CHANNEL_POLICY,
		Mediapackagev2Actions.GET_HARVEST_JOB,
		Mediapackagev2Actions.GET_HEAD_OBJECT,
		Mediapackagev2Actions.GET_OBJECT,
		Mediapackagev2Actions.GET_ORIGIN_ENDPOINT,
		Mediapackagev2Actions.GET_ORIGIN_ENDPOINT_POLICY,
		Mediapackagev2Actions.HARVEST_OBJECT,
		Mediapackagev2Actions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Mediapackagev2Actions.CANCEL_HARVEST_JOB,
		Mediapackagev2Actions.CREATE_CHANNEL,
		Mediapackagev2Actions.CREATE_CHANNEL_GROUP,
		Mediapackagev2Actions.CREATE_HARVEST_JOB,
		Mediapackagev2Actions.CREATE_ORIGIN_ENDPOINT,
		Mediapackagev2Actions.DELETE_CHANNEL,
		Mediapackagev2Actions.DELETE_CHANNEL_GROUP,
		Mediapackagev2Actions.DELETE_CHANNEL_POLICY,
		Mediapackagev2Actions.DELETE_ORIGIN_ENDPOINT,
		Mediapackagev2Actions.DELETE_ORIGIN_ENDPOINT_POLICY,
		Mediapackagev2Actions.PUT_CHANNEL_POLICY,
		Mediapackagev2Actions.PUT_OBJECT,
		Mediapackagev2Actions.PUT_ORIGIN_ENDPOINT_POLICY,
		Mediapackagev2Actions.RESET_CHANNEL_STATE,
		Mediapackagev2Actions.RESET_ORIGIN_ENDPOINT_STATE,
		Mediapackagev2Actions.UPDATE_CHANNEL,
		Mediapackagev2Actions.UPDATE_CHANNEL_GROUP,
		Mediapackagev2Actions.UPDATE_ORIGIN_ENDPOINT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		Mediapackagev2Actions.LIST_CHANNEL_GROUPS,
		Mediapackagev2Actions.LIST_CHANNELS,
		Mediapackagev2Actions.LIST_HARVEST_JOBS,
		Mediapackagev2Actions.LIST_ORIGIN_ENDPOINTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		Mediapackagev2Actions.TAG_RESOURCE,
		Mediapackagev2Actions.UNTAG_RESOURCE,
	];
}

const ChannelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediapackagev2:(?<region>[^:]*):(?<account>[^:]*):channelGroup/(?<channelGroupName>[^:/?]+)/channel/(?<channelName>[^:/?]+)$",
);
const ChannelGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediapackagev2:(?<region>[^:]*):(?<account>[^:]*):channelGroup/(?<channelGroupName>[^:/?]+)$",
);
const ChannelPolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediapackagev2:(?<region>[^:]*):(?<account>[^:]*):channelGroup/(?<channelGroupName>[^:/?]+)/channel/(?<channelName>[^:/?]+)$",
);
const HarvestJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediapackagev2:(?<region>[^:]*):(?<account>[^:]*):channelGroup/(?<channelGroupName>[^:/?]+)/channel/(?<channelName>[^:/?]+)/originEndpoint/(?<originEndpointName>[^:/?]+)/harvestJob/(?<harvestJobName>[^:/?]+)$",
);
const OriginEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediapackagev2:(?<region>[^:]*):(?<account>[^:]*):channelGroup/(?<channelGroupName>[^:/?]+)/channel/(?<channelName>[^:/?]+)/originEndpoint/(?<originEndpointName>[^:/?]+)$",
);
const OriginEndpointPolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediapackagev2:(?<region>[^:]*):(?<account>[^:]*):channelGroup/(?<channelGroupName>[^:/?]+)/channel/(?<channelName>[^:/?]+)/originEndpoint/(?<originEndpointName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for mediapackagev2 resources.
 */
export class Mediapackagev2Resources {
	/**
	 * Builds an ARN for the Channel resource.
	 */
	static channel(props: {
		/** The ChannelGroupName component of the ARN. */
		readonly channelGroupName: string;
		/** The ChannelName component of the ARN. */
		readonly channelName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediapackagev2:${props.region ?? "*"}:${props.account ?? "*"}:channelGroup/${props.channelGroupName}/channel/${props.channelName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Channel resource.
	 */
	static isValidChannelArn(arn: string): boolean {
		return ChannelArnRegex.test(arn);
	}

	/**
	 * Parses a Channel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		channelGroupName: string;
		channelName: string;
	} {
		const match = ChannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Channel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelGroupName: match.groups!.channelGroupName,
			channelName: match.groups!.channelName,
		};
	}

	/**
	 * Builds an ARN for the ChannelGroup resource.
	 */
	static channelGroup(props: {
		/** The ChannelGroupName component of the ARN. */
		readonly channelGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediapackagev2:${props.region ?? "*"}:${props.account ?? "*"}:channelGroup/${props.channelGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ChannelGroup resource.
	 */
	static isValidChannelGroupArn(arn: string): boolean {
		return ChannelGroupArnRegex.test(arn);
	}

	/**
	 * Parses a ChannelGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		channelGroupName: string;
	} {
		const match = ChannelGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ChannelGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelGroupName: match.groups!.channelGroupName,
		};
	}

	/**
	 * Builds an ARN for the ChannelPolicy resource.
	 */
	static channelPolicy(props: {
		/** The ChannelGroupName component of the ARN. */
		readonly channelGroupName: string;
		/** The ChannelName component of the ARN. */
		readonly channelName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediapackagev2:${props.region ?? "*"}:${props.account ?? "*"}:channelGroup/${props.channelGroupName}/channel/${props.channelName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ChannelPolicy resource.
	 */
	static isValidChannelPolicyArn(arn: string): boolean {
		return ChannelPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a ChannelPolicy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelPolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		channelGroupName: string;
		channelName: string;
	} {
		const match = ChannelPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ChannelPolicy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelGroupName: match.groups!.channelGroupName,
			channelName: match.groups!.channelName,
		};
	}

	/**
	 * Builds an ARN for the HarvestJob resource.
	 */
	static harvestJob(props: {
		/** The ChannelGroupName component of the ARN. */
		readonly channelGroupName: string;
		/** The ChannelName component of the ARN. */
		readonly channelName: string;
		/** The OriginEndpointName component of the ARN. */
		readonly originEndpointName: string;
		/** The HarvestJobName component of the ARN. */
		readonly harvestJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediapackagev2:${props.region ?? "*"}:${props.account ?? "*"}:channelGroup/${props.channelGroupName}/channel/${props.channelName}/originEndpoint/${props.originEndpointName}/harvestJob/${props.harvestJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the HarvestJob resource.
	 */
	static isValidHarvestJobArn(arn: string): boolean {
		return HarvestJobArnRegex.test(arn);
	}

	/**
	 * Parses a HarvestJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHarvestJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		channelGroupName: string;
		channelName: string;
		originEndpointName: string;
		harvestJobName: string;
	} {
		const match = HarvestJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid HarvestJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelGroupName: match.groups!.channelGroupName,
			channelName: match.groups!.channelName,
			originEndpointName: match.groups!.originEndpointName,
			harvestJobName: match.groups!.harvestJobName,
		};
	}

	/**
	 * Builds an ARN for the OriginEndpoint resource.
	 */
	static originEndpoint(props: {
		/** The ChannelGroupName component of the ARN. */
		readonly channelGroupName: string;
		/** The ChannelName component of the ARN. */
		readonly channelName: string;
		/** The OriginEndpointName component of the ARN. */
		readonly originEndpointName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediapackagev2:${props.region ?? "*"}:${props.account ?? "*"}:channelGroup/${props.channelGroupName}/channel/${props.channelName}/originEndpoint/${props.originEndpointName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the OriginEndpoint resource.
	 */
	static isValidOriginEndpointArn(arn: string): boolean {
		return OriginEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a OriginEndpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOriginEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		channelGroupName: string;
		channelName: string;
		originEndpointName: string;
	} {
		const match = OriginEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid OriginEndpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelGroupName: match.groups!.channelGroupName,
			channelName: match.groups!.channelName,
			originEndpointName: match.groups!.originEndpointName,
		};
	}

	/**
	 * Builds an ARN for the OriginEndpointPolicy resource.
	 */
	static originEndpointPolicy(props: {
		/** The ChannelGroupName component of the ARN. */
		readonly channelGroupName: string;
		/** The ChannelName component of the ARN. */
		readonly channelName: string;
		/** The OriginEndpointName component of the ARN. */
		readonly originEndpointName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediapackagev2:${props.region ?? "*"}:${props.account ?? "*"}:channelGroup/${props.channelGroupName}/channel/${props.channelName}/originEndpoint/${props.originEndpointName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the OriginEndpointPolicy resource.
	 */
	static isValidOriginEndpointPolicyArn(arn: string): boolean {
		return OriginEndpointPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a OriginEndpointPolicy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOriginEndpointPolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		channelGroupName: string;
		channelName: string;
		originEndpointName: string;
	} {
		const match = OriginEndpointPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid OriginEndpointPolicy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelGroupName: match.groups!.channelGroupName,
			channelName: match.groups!.channelName,
			originEndpointName: match.groups!.originEndpointName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for mediapackagev2.
 */
export class Mediapackagev2Operations {
	/** IAM actions required for the CancelHarvestJob API call. */
	static readonly CANCEL_HARVEST_JOB: string[] = [
		"mediapackagev2:CancelHarvestJob",
	];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CREATE_CHANNEL: string[] = [
		"mediapackagev2:CreateChannel",
		"mediapackagev2:TagResource",
	];
	/** IAM actions required for the CreateChannelGroup API call. */
	static readonly CREATE_CHANNEL_GROUP: string[] = [
		"mediapackagev2:CreateChannelGroup",
		"mediapackagev2:TagResource",
	];
	/** IAM actions required for the CreateHarvestJob API call. */
	static readonly CREATE_HARVEST_JOB: string[] = [
		"mediapackagev2:CreateHarvestJob",
		"mediapackagev2:TagResource",
	];
	/** IAM actions required for the CreateOriginEndpoint API call. */
	static readonly CREATE_ORIGIN_ENDPOINT: string[] = [
		"mediapackagev2:CreateOriginEndpoint",
		"iam:PassRole",
		"mediapackagev2:TagResource",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DELETE_CHANNEL: string[] = ["mediapackagev2:DeleteChannel"];
	/** IAM actions required for the DeleteChannelGroup API call. */
	static readonly DELETE_CHANNEL_GROUP: string[] = [
		"mediapackagev2:DeleteChannelGroup",
	];
	/** IAM actions required for the DeleteChannelPolicy API call. */
	static readonly DELETE_CHANNEL_POLICY: string[] = [
		"mediapackagev2:DeleteChannelPolicy",
	];
	/** IAM actions required for the DeleteOriginEndpoint API call. */
	static readonly DELETE_ORIGIN_ENDPOINT: string[] = [
		"mediapackagev2:DeleteOriginEndpoint",
	];
	/** IAM actions required for the DeleteOriginEndpointPolicy API call. */
	static readonly DELETE_ORIGIN_ENDPOINT_POLICY: string[] = [
		"mediapackagev2:DeleteOriginEndpointPolicy",
	];
	/** IAM actions required for the GetChannel API call. */
	static readonly GET_CHANNEL: string[] = ["mediapackagev2:GetChannel"];
	/** IAM actions required for the GetChannelGroup API call. */
	static readonly GET_CHANNEL_GROUP: string[] = [
		"mediapackagev2:GetChannelGroup",
	];
	/** IAM actions required for the GetChannelPolicy API call. */
	static readonly GET_CHANNEL_POLICY: string[] = [
		"mediapackagev2:GetChannelPolicy",
	];
	/** IAM actions required for the GetHarvestJob API call. */
	static readonly GET_HARVEST_JOB: string[] = ["mediapackagev2:GetHarvestJob"];
	/** IAM actions required for the GetOriginEndpoint API call. */
	static readonly GET_ORIGIN_ENDPOINT: string[] = [
		"mediapackagev2:GetOriginEndpoint",
	];
	/** IAM actions required for the GetOriginEndpointPolicy API call. */
	static readonly GET_ORIGIN_ENDPOINT_POLICY: string[] = [
		"mediapackagev2:GetOriginEndpointPolicy",
	];
	/** IAM actions required for the ListChannelGroups API call. */
	static readonly LIST_CHANNEL_GROUPS: string[] = [
		"mediapackagev2:ListChannelGroups",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly LIST_CHANNELS: string[] = ["mediapackagev2:ListChannels"];
	/** IAM actions required for the ListHarvestJobs API call. */
	static readonly LIST_HARVEST_JOBS: string[] = [
		"mediapackagev2:ListHarvestJobs",
	];
	/** IAM actions required for the ListOriginEndpoints API call. */
	static readonly LIST_ORIGIN_ENDPOINTS: string[] = [
		"mediapackagev2:ListOriginEndpoints",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"mediapackagev2:ListTagsForResource",
	];
	/** IAM actions required for the PutChannelPolicy API call. */
	static readonly PUT_CHANNEL_POLICY: string[] = [
		"mediapackagev2:PutChannelPolicy",
	];
	/** IAM actions required for the PutOriginEndpointPolicy API call. */
	static readonly PUT_ORIGIN_ENDPOINT_POLICY: string[] = [
		"iam:PassRole",
		"mediapackagev2:PutOriginEndpointPolicy",
	];
	/** IAM actions required for the ResetChannelState API call. */
	static readonly RESET_CHANNEL_STATE: string[] = [
		"mediapackagev2:ResetChannelState",
	];
	/** IAM actions required for the ResetOriginEndpointState API call. */
	static readonly RESET_ORIGIN_ENDPOINT_STATE: string[] = [
		"mediapackagev2:ResetOriginEndpointState",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["mediapackagev2:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["mediapackagev2:UntagResource"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UPDATE_CHANNEL: string[] = ["mediapackagev2:UpdateChannel"];
	/** IAM actions required for the UpdateChannelGroup API call. */
	static readonly UPDATE_CHANNEL_GROUP: string[] = [
		"mediapackagev2:UpdateChannelGroup",
	];
	/** IAM actions required for the UpdateOriginEndpoint API call. */
	static readonly UPDATE_ORIGIN_ENDPOINT: string[] = [
		"iam:PassRole",
		"mediapackagev2:UpdateOriginEndpoint",
	];
}

/**
 * Condition key constants and builders for mediapackagev2.
 */
export class Mediapackagev2Conditions {
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CREATE_CHANNEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannelGroup action. */
	static readonly CREATE_CHANNEL_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHarvestJob action. */
	static readonly CREATE_HARVEST_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOriginEndpoint action. */
	static readonly CREATE_ORIGIN_ENDPOINT_CONDITION_KEYS: string[] = [
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
