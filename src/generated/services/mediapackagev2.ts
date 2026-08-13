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
	static readonly CancelHarvestJob = "mediapackagev2:CancelHarvestJob";
	/** [Write] mediapackagev2:CreateChannel */
	static readonly CreateChannel = "mediapackagev2:CreateChannel";
	/** [Write] mediapackagev2:CreateChannelGroup */
	static readonly CreateChannelGroup = "mediapackagev2:CreateChannelGroup";
	/** [Write] mediapackagev2:CreateHarvestJob */
	static readonly CreateHarvestJob = "mediapackagev2:CreateHarvestJob";
	/** [Write] mediapackagev2:CreateOriginEndpoint */
	static readonly CreateOriginEndpoint = "mediapackagev2:CreateOriginEndpoint";
	/** [Write] mediapackagev2:DeleteChannel */
	static readonly DeleteChannel = "mediapackagev2:DeleteChannel";
	/** [Write] mediapackagev2:DeleteChannelGroup */
	static readonly DeleteChannelGroup = "mediapackagev2:DeleteChannelGroup";
	/** [Write] mediapackagev2:DeleteChannelPolicy */
	static readonly DeleteChannelPolicy = "mediapackagev2:DeleteChannelPolicy";
	/** [Write] mediapackagev2:DeleteOriginEndpoint */
	static readonly DeleteOriginEndpoint = "mediapackagev2:DeleteOriginEndpoint";
	/** [Write] mediapackagev2:DeleteOriginEndpointPolicy */
	static readonly DeleteOriginEndpointPolicy =
		"mediapackagev2:DeleteOriginEndpointPolicy";
	/** [Read] mediapackagev2:GetChannel */
	static readonly actionGetChannel = "mediapackagev2:GetChannel";
	/** [Read] mediapackagev2:GetChannelGroup */
	static readonly actionGetChannelGroup = "mediapackagev2:GetChannelGroup";
	/** [Read] mediapackagev2:GetChannelPolicy */
	static readonly actionGetChannelPolicy = "mediapackagev2:GetChannelPolicy";
	/** [Read] mediapackagev2:GetHarvestJob */
	static readonly actionGetHarvestJob = "mediapackagev2:GetHarvestJob";
	/** [Read] mediapackagev2:GetHeadObject */
	static readonly actionGetHeadObject = "mediapackagev2:GetHeadObject";
	/** [Read] mediapackagev2:GetObject */
	static readonly actionGetObject = "mediapackagev2:GetObject";
	/** [Read] mediapackagev2:GetOriginEndpoint */
	static readonly actionGetOriginEndpoint = "mediapackagev2:GetOriginEndpoint";
	/** [Read] mediapackagev2:GetOriginEndpointPolicy */
	static readonly actionGetOriginEndpointPolicy =
		"mediapackagev2:GetOriginEndpointPolicy";
	/** [Read] mediapackagev2:HarvestObject */
	static readonly HarvestObject = "mediapackagev2:HarvestObject";
	/** [List] mediapackagev2:ListChannelGroups */
	static readonly ListChannelGroups = "mediapackagev2:ListChannelGroups";
	/** [List] mediapackagev2:ListChannels */
	static readonly ListChannels = "mediapackagev2:ListChannels";
	/** [List] mediapackagev2:ListHarvestJobs */
	static readonly ListHarvestJobs = "mediapackagev2:ListHarvestJobs";
	/** [List] mediapackagev2:ListOriginEndpoints */
	static readonly ListOriginEndpoints = "mediapackagev2:ListOriginEndpoints";
	/** [Read] mediapackagev2:ListTagsForResource */
	static readonly ListTagsForResource = "mediapackagev2:ListTagsForResource";
	/** [Write] mediapackagev2:PutChannelPolicy */
	static readonly PutChannelPolicy = "mediapackagev2:PutChannelPolicy";
	/** [Write] mediapackagev2:PutObject */
	static readonly PutObject = "mediapackagev2:PutObject";
	/** [Write] mediapackagev2:PutOriginEndpointPolicy */
	static readonly PutOriginEndpointPolicy =
		"mediapackagev2:PutOriginEndpointPolicy";
	/** [Write] mediapackagev2:ResetChannelState */
	static readonly ResetChannelState = "mediapackagev2:ResetChannelState";
	/** [Write] mediapackagev2:ResetOriginEndpointState */
	static readonly ResetOriginEndpointState =
		"mediapackagev2:ResetOriginEndpointState";
	/** [Tagging] mediapackagev2:TagResource */
	static readonly TagResource = "mediapackagev2:TagResource";
	/** [Tagging] mediapackagev2:UntagResource */
	static readonly UntagResource = "mediapackagev2:UntagResource";
	/** [Write] mediapackagev2:UpdateChannel */
	static readonly UpdateChannel = "mediapackagev2:UpdateChannel";
	/** [Write] mediapackagev2:UpdateChannelGroup */
	static readonly UpdateChannelGroup = "mediapackagev2:UpdateChannelGroup";
	/** [Write] mediapackagev2:UpdateOriginEndpoint */
	static readonly UpdateOriginEndpoint = "mediapackagev2:UpdateOriginEndpoint";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		Mediapackagev2Actions.actionGetChannel,
		Mediapackagev2Actions.actionGetChannelGroup,
		Mediapackagev2Actions.actionGetChannelPolicy,
		Mediapackagev2Actions.actionGetHarvestJob,
		Mediapackagev2Actions.actionGetHeadObject,
		Mediapackagev2Actions.actionGetObject,
		Mediapackagev2Actions.actionGetOriginEndpoint,
		Mediapackagev2Actions.actionGetOriginEndpointPolicy,
		Mediapackagev2Actions.HarvestObject,
		Mediapackagev2Actions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Mediapackagev2Actions.CancelHarvestJob,
		Mediapackagev2Actions.CreateChannel,
		Mediapackagev2Actions.CreateChannelGroup,
		Mediapackagev2Actions.CreateHarvestJob,
		Mediapackagev2Actions.CreateOriginEndpoint,
		Mediapackagev2Actions.DeleteChannel,
		Mediapackagev2Actions.DeleteChannelGroup,
		Mediapackagev2Actions.DeleteChannelPolicy,
		Mediapackagev2Actions.DeleteOriginEndpoint,
		Mediapackagev2Actions.DeleteOriginEndpointPolicy,
		Mediapackagev2Actions.PutChannelPolicy,
		Mediapackagev2Actions.PutObject,
		Mediapackagev2Actions.PutOriginEndpointPolicy,
		Mediapackagev2Actions.ResetChannelState,
		Mediapackagev2Actions.ResetOriginEndpointState,
		Mediapackagev2Actions.UpdateChannel,
		Mediapackagev2Actions.UpdateChannelGroup,
		Mediapackagev2Actions.UpdateOriginEndpoint,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		Mediapackagev2Actions.ListChannelGroups,
		Mediapackagev2Actions.ListChannels,
		Mediapackagev2Actions.ListHarvestJobs,
		Mediapackagev2Actions.ListOriginEndpoints,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		Mediapackagev2Actions.TagResource,
		Mediapackagev2Actions.UntagResource,
	];
}

/**
 * Properties for building a Channel ARN.
 */
export interface Mediapackagev2ChannelArnProps {
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
}

/**
 * Parsed components of a Channel ARN.
 */
export interface Mediapackagev2ChannelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelGroupName component. */
	readonly channelGroupName: string;
	/** The ChannelName component. */
	readonly channelName: string;
}

/**
 * Properties for building a ChannelGroup ARN.
 */
export interface Mediapackagev2ChannelGroupArnProps {
	/** The ChannelGroupName component of the ARN. */
	readonly channelGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ChannelGroup ARN.
 */
export interface Mediapackagev2ChannelGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelGroupName component. */
	readonly channelGroupName: string;
}

/**
 * Properties for building a ChannelPolicy ARN.
 */
export interface Mediapackagev2ChannelPolicyArnProps {
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
}

/**
 * Parsed components of a ChannelPolicy ARN.
 */
export interface Mediapackagev2ChannelPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelGroupName component. */
	readonly channelGroupName: string;
	/** The ChannelName component. */
	readonly channelName: string;
}

/**
 * Properties for building a HarvestJob ARN.
 */
export interface Mediapackagev2HarvestJobArnProps {
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
}

/**
 * Parsed components of a HarvestJob ARN.
 */
export interface Mediapackagev2HarvestJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelGroupName component. */
	readonly channelGroupName: string;
	/** The ChannelName component. */
	readonly channelName: string;
	/** The OriginEndpointName component. */
	readonly originEndpointName: string;
	/** The HarvestJobName component. */
	readonly harvestJobName: string;
}

/**
 * Properties for building a OriginEndpoint ARN.
 */
export interface Mediapackagev2OriginEndpointArnProps {
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
}

/**
 * Parsed components of a OriginEndpoint ARN.
 */
export interface Mediapackagev2OriginEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelGroupName component. */
	readonly channelGroupName: string;
	/** The ChannelName component. */
	readonly channelName: string;
	/** The OriginEndpointName component. */
	readonly originEndpointName: string;
}

/**
 * Properties for building a OriginEndpointPolicy ARN.
 */
export interface Mediapackagev2OriginEndpointPolicyArnProps {
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
}

/**
 * Parsed components of a OriginEndpointPolicy ARN.
 */
export interface Mediapackagev2OriginEndpointPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelGroupName component. */
	readonly channelGroupName: string;
	/** The ChannelName component. */
	readonly channelName: string;
	/** The OriginEndpointName component. */
	readonly originEndpointName: string;
}

const ChannelArnRegex =
	/^arn:(?<partition>[^:]+):mediapackagev2:(?<region>[^:]*):(?<account>[^:]*):channelGroup\/(?<channelGroupName>[^:/?]+)\/channel\/(?<channelName>[^:/?]+)$/;
const ChannelGroupArnRegex =
	/^arn:(?<partition>[^:]+):mediapackagev2:(?<region>[^:]*):(?<account>[^:]*):channelGroup\/(?<channelGroupName>[^:/?]+)$/;
const ChannelPolicyArnRegex =
	/^arn:(?<partition>[^:]+):mediapackagev2:(?<region>[^:]*):(?<account>[^:]*):channelGroup\/(?<channelGroupName>[^:/?]+)\/channel\/(?<channelName>[^:/?]+)$/;
const HarvestJobArnRegex =
	/^arn:(?<partition>[^:]+):mediapackagev2:(?<region>[^:]*):(?<account>[^:]*):channelGroup\/(?<channelGroupName>[^:/?]+)\/channel\/(?<channelName>[^:/?]+)\/originEndpoint\/(?<originEndpointName>[^:/?]+)\/harvestJob\/(?<harvestJobName>[^:/?]+)$/;
const OriginEndpointArnRegex =
	/^arn:(?<partition>[^:]+):mediapackagev2:(?<region>[^:]*):(?<account>[^:]*):channelGroup\/(?<channelGroupName>[^:/?]+)\/channel\/(?<channelName>[^:/?]+)\/originEndpoint\/(?<originEndpointName>[^:/?]+)$/;
const OriginEndpointPolicyArnRegex =
	/^arn:(?<partition>[^:]+):mediapackagev2:(?<region>[^:]*):(?<account>[^:]*):channelGroup\/(?<channelGroupName>[^:/?]+)\/channel\/(?<channelName>[^:/?]+)\/originEndpoint\/(?<originEndpointName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for mediapackagev2 resources.
 */
export class Mediapackagev2Resources {
	/**
	 * Builds an ARN for the Channel resource.
	 */
	static channel(props: Mediapackagev2ChannelArnProps): string {
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
	static parseChannelArn(arn: string): Mediapackagev2ChannelArnComponents {
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
	static channelGroup(props: Mediapackagev2ChannelGroupArnProps): string {
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
	static parseChannelGroupArn(
		arn: string,
	): Mediapackagev2ChannelGroupArnComponents {
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
	static channelPolicy(props: Mediapackagev2ChannelPolicyArnProps): string {
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
	static parseChannelPolicyArn(
		arn: string,
	): Mediapackagev2ChannelPolicyArnComponents {
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
	static harvestJob(props: Mediapackagev2HarvestJobArnProps): string {
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
	static parseHarvestJobArn(
		arn: string,
	): Mediapackagev2HarvestJobArnComponents {
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
	static originEndpoint(props: Mediapackagev2OriginEndpointArnProps): string {
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
	static parseOriginEndpointArn(
		arn: string,
	): Mediapackagev2OriginEndpointArnComponents {
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
	static originEndpointPolicy(
		props: Mediapackagev2OriginEndpointPolicyArnProps,
	): string {
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
	static parseOriginEndpointPolicyArn(
		arn: string,
	): Mediapackagev2OriginEndpointPolicyArnComponents {
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
	static readonly CancelHarvestJob: string[] = [
		"mediapackagev2:CancelHarvestJob",
	];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CreateChannel: string[] = [
		"mediapackagev2:CreateChannel",
		"mediapackagev2:TagResource",
	];
	/** IAM actions required for the CreateChannelGroup API call. */
	static readonly CreateChannelGroup: string[] = [
		"mediapackagev2:CreateChannelGroup",
		"mediapackagev2:TagResource",
	];
	/** IAM actions required for the CreateHarvestJob API call. */
	static readonly CreateHarvestJob: string[] = [
		"mediapackagev2:CreateHarvestJob",
		"mediapackagev2:TagResource",
	];
	/** IAM actions required for the CreateOriginEndpoint API call. */
	static readonly CreateOriginEndpoint: string[] = [
		"mediapackagev2:CreateOriginEndpoint",
		"iam:PassRole",
		"mediapackagev2:TagResource",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DeleteChannel: string[] = ["mediapackagev2:DeleteChannel"];
	/** IAM actions required for the DeleteChannelGroup API call. */
	static readonly DeleteChannelGroup: string[] = [
		"mediapackagev2:DeleteChannelGroup",
	];
	/** IAM actions required for the DeleteChannelPolicy API call. */
	static readonly DeleteChannelPolicy: string[] = [
		"mediapackagev2:DeleteChannelPolicy",
	];
	/** IAM actions required for the DeleteOriginEndpoint API call. */
	static readonly DeleteOriginEndpoint: string[] = [
		"mediapackagev2:DeleteOriginEndpoint",
	];
	/** IAM actions required for the DeleteOriginEndpointPolicy API call. */
	static readonly DeleteOriginEndpointPolicy: string[] = [
		"mediapackagev2:DeleteOriginEndpointPolicy",
	];
	/** IAM actions required for the GetChannel API call. */
	static readonly opGetChannel: string[] = ["mediapackagev2:GetChannel"];
	/** IAM actions required for the GetChannelGroup API call. */
	static readonly opGetChannelGroup: string[] = [
		"mediapackagev2:GetChannelGroup",
	];
	/** IAM actions required for the GetChannelPolicy API call. */
	static readonly opGetChannelPolicy: string[] = [
		"mediapackagev2:GetChannelPolicy",
	];
	/** IAM actions required for the GetHarvestJob API call. */
	static readonly opGetHarvestJob: string[] = ["mediapackagev2:GetHarvestJob"];
	/** IAM actions required for the GetOriginEndpoint API call. */
	static readonly opGetOriginEndpoint: string[] = [
		"mediapackagev2:GetOriginEndpoint",
	];
	/** IAM actions required for the GetOriginEndpointPolicy API call. */
	static readonly opGetOriginEndpointPolicy: string[] = [
		"mediapackagev2:GetOriginEndpointPolicy",
	];
	/** IAM actions required for the ListChannelGroups API call. */
	static readonly ListChannelGroups: string[] = [
		"mediapackagev2:ListChannelGroups",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly ListChannels: string[] = ["mediapackagev2:ListChannels"];
	/** IAM actions required for the ListHarvestJobs API call. */
	static readonly ListHarvestJobs: string[] = [
		"mediapackagev2:ListHarvestJobs",
	];
	/** IAM actions required for the ListOriginEndpoints API call. */
	static readonly ListOriginEndpoints: string[] = [
		"mediapackagev2:ListOriginEndpoints",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"mediapackagev2:ListTagsForResource",
	];
	/** IAM actions required for the PutChannelPolicy API call. */
	static readonly PutChannelPolicy: string[] = [
		"mediapackagev2:PutChannelPolicy",
	];
	/** IAM actions required for the PutOriginEndpointPolicy API call. */
	static readonly PutOriginEndpointPolicy: string[] = [
		"iam:PassRole",
		"mediapackagev2:PutOriginEndpointPolicy",
	];
	/** IAM actions required for the ResetChannelState API call. */
	static readonly ResetChannelState: string[] = [
		"mediapackagev2:ResetChannelState",
	];
	/** IAM actions required for the ResetOriginEndpointState API call. */
	static readonly ResetOriginEndpointState: string[] = [
		"mediapackagev2:ResetOriginEndpointState",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["mediapackagev2:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["mediapackagev2:UntagResource"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UpdateChannel: string[] = ["mediapackagev2:UpdateChannel"];
	/** IAM actions required for the UpdateChannelGroup API call. */
	static readonly UpdateChannelGroup: string[] = [
		"mediapackagev2:UpdateChannelGroup",
	];
	/** IAM actions required for the UpdateOriginEndpoint API call. */
	static readonly UpdateOriginEndpoint: string[] = [
		"iam:PassRole",
		"mediapackagev2:UpdateOriginEndpoint",
	];
}

/**
 * Condition key constants and builders for mediapackagev2.
 */
export class Mediapackagev2Conditions {
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CreateChannelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannelGroup action. */
	static readonly CreateChannelGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHarvestJob action. */
	static readonly CreateHarvestJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOriginEndpoint action. */
	static readonly CreateOriginEndpointConditionKeys: string[] = [
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
