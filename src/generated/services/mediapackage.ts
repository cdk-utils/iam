// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mediapackage.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mediapackage service.
 */
export class MediaPackageActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mediapackage";

	/** [Write] mediapackage:ConfigureLogs */
	static readonly ConfigureLogs = "mediapackage:ConfigureLogs";
	/** [Write] mediapackage:CreateChannel */
	static readonly CreateChannel = "mediapackage:CreateChannel";
	/** [Write] mediapackage:CreateHarvestJob */
	static readonly CreateHarvestJob = "mediapackage:CreateHarvestJob";
	/** [Write] mediapackage:CreateOriginEndpoint */
	static readonly CreateOriginEndpoint = "mediapackage:CreateOriginEndpoint";
	/** [Write] mediapackage:DeleteChannel */
	static readonly DeleteChannel = "mediapackage:DeleteChannel";
	/** [Write] mediapackage:DeleteOriginEndpoint */
	static readonly DeleteOriginEndpoint = "mediapackage:DeleteOriginEndpoint";
	/** [Read] mediapackage:DescribeChannel */
	static readonly DescribeChannel = "mediapackage:DescribeChannel";
	/** [Read] mediapackage:DescribeHarvestJob */
	static readonly DescribeHarvestJob = "mediapackage:DescribeHarvestJob";
	/** [Read] mediapackage:DescribeOriginEndpoint */
	static readonly DescribeOriginEndpoint =
		"mediapackage:DescribeOriginEndpoint";
	/** [Read] mediapackage:ListChannels */
	static readonly ListChannels = "mediapackage:ListChannels";
	/** [Read] mediapackage:ListHarvestJobs */
	static readonly ListHarvestJobs = "mediapackage:ListHarvestJobs";
	/** [Read] mediapackage:ListOriginEndpoints */
	static readonly ListOriginEndpoints = "mediapackage:ListOriginEndpoints";
	/** [Read] mediapackage:ListTagsForResource */
	static readonly ListTagsForResource = "mediapackage:ListTagsForResource";
	/** [Write] mediapackage:RotateChannelCredentials */
	static readonly RotateChannelCredentials =
		"mediapackage:RotateChannelCredentials";
	/** [Write] mediapackage:RotateIngestEndpointCredentials */
	static readonly RotateIngestEndpointCredentials =
		"mediapackage:RotateIngestEndpointCredentials";
	/** [Tagging] mediapackage:TagResource */
	static readonly TagResource = "mediapackage:TagResource";
	/** [Tagging] mediapackage:UntagResource */
	static readonly UntagResource = "mediapackage:UntagResource";
	/** [Write] mediapackage:UpdateChannel */
	static readonly UpdateChannel = "mediapackage:UpdateChannel";
	/** [Write] mediapackage:UpdateOriginEndpoint */
	static readonly UpdateOriginEndpoint = "mediapackage:UpdateOriginEndpoint";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MediaPackageActions.DescribeChannel,
		MediaPackageActions.DescribeHarvestJob,
		MediaPackageActions.DescribeOriginEndpoint,
		MediaPackageActions.ListChannels,
		MediaPackageActions.ListHarvestJobs,
		MediaPackageActions.ListOriginEndpoints,
		MediaPackageActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MediaPackageActions.ConfigureLogs,
		MediaPackageActions.CreateChannel,
		MediaPackageActions.CreateHarvestJob,
		MediaPackageActions.CreateOriginEndpoint,
		MediaPackageActions.DeleteChannel,
		MediaPackageActions.DeleteOriginEndpoint,
		MediaPackageActions.RotateChannelCredentials,
		MediaPackageActions.RotateIngestEndpointCredentials,
		MediaPackageActions.UpdateChannel,
		MediaPackageActions.UpdateOriginEndpoint,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MediaPackageActions.TagResource,
		MediaPackageActions.UntagResource,
	];
}

/**
 * Properties for building a channels ARN.
 */
export interface MediaPackageChannelsArnProps {
	/** The ChannelIdentifier component of the ARN. */
	readonly channelIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a channels ARN.
 */
export interface MediaPackageChannelsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelIdentifier component. */
	readonly channelIdentifier: string;
}

/**
 * Properties for building a harvest_jobs ARN.
 */
export interface MediaPackageHarvestJobsArnProps {
	/** The HarvestJobIdentifier component of the ARN. */
	readonly harvestJobIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a harvest_jobs ARN.
 */
export interface MediaPackageHarvestJobsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HarvestJobIdentifier component. */
	readonly harvestJobIdentifier: string;
}

/**
 * Properties for building a origin_endpoints ARN.
 */
export interface MediaPackageOriginEndpointsArnProps {
	/** The OriginEndpointIdentifier component of the ARN. */
	readonly originEndpointIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a origin_endpoints ARN.
 */
export interface MediaPackageOriginEndpointsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OriginEndpointIdentifier component. */
	readonly originEndpointIdentifier: string;
}

const ChannelsArnRegex =
	/^arn:(?<partition>[^:]+):mediapackage:(?<region>[^:]*):(?<account>[^:]*):channels\/(?<channelIdentifier>[^:/?]+)$/;
const HarvestJobsArnRegex =
	/^arn:(?<partition>[^:]+):mediapackage:(?<region>[^:]*):(?<account>[^:]*):harvest_jobs\/(?<harvestJobIdentifier>[^:/?]+)$/;
const OriginEndpointsArnRegex =
	/^arn:(?<partition>[^:]+):mediapackage:(?<region>[^:]*):(?<account>[^:]*):origin_endpoints\/(?<originEndpointIdentifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for mediapackage resources.
 */
export class MediaPackageResources {
	/**
	 * Builds an ARN for the channels resource.
	 */
	static channels(props: MediaPackageChannelsArnProps): string {
		return `arn:${props.partition ?? "aws"}:mediapackage:${props.region ?? "*"}:${props.account ?? "*"}:channels/${props.channelIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the channels resource.
	 */
	static isValidChannelsArn(arn: string): boolean {
		return ChannelsArnRegex.test(arn);
	}

	/**
	 * Parses a channels ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelsArn(arn: string): MediaPackageChannelsArnComponents {
		const match = ChannelsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channels ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelIdentifier: match.groups!.channelIdentifier,
		};
	}

	/**
	 * Builds an ARN for the harvest_jobs resource.
	 */
	static harvestJobs(props: MediaPackageHarvestJobsArnProps): string {
		return `arn:${props.partition ?? "aws"}:mediapackage:${props.region ?? "*"}:${props.account ?? "*"}:harvest_jobs/${props.harvestJobIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the harvest_jobs resource.
	 */
	static isValidHarvestJobsArn(arn: string): boolean {
		return HarvestJobsArnRegex.test(arn);
	}

	/**
	 * Parses a harvest_jobs ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHarvestJobsArn(
		arn: string,
	): MediaPackageHarvestJobsArnComponents {
		const match = HarvestJobsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid harvest_jobs ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			harvestJobIdentifier: match.groups!.harvestJobIdentifier,
		};
	}

	/**
	 * Builds an ARN for the origin_endpoints resource.
	 */
	static originEndpoints(props: MediaPackageOriginEndpointsArnProps): string {
		return `arn:${props.partition ?? "aws"}:mediapackage:${props.region ?? "*"}:${props.account ?? "*"}:origin_endpoints/${props.originEndpointIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the origin_endpoints resource.
	 */
	static isValidOriginEndpointsArn(arn: string): boolean {
		return OriginEndpointsArnRegex.test(arn);
	}

	/**
	 * Parses a origin_endpoints ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOriginEndpointsArn(
		arn: string,
	): MediaPackageOriginEndpointsArnComponents {
		const match = OriginEndpointsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid origin_endpoints ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			originEndpointIdentifier: match.groups!.originEndpointIdentifier,
		};
	}
}

/**
 * API operation to required IAM actions mapping for mediapackage.
 */
export class MediaPackageOperations {
	/** IAM actions required for the ConfigureLogs API call. */
	static readonly ConfigureLogs: string[] = ["mediapackage:UpdateChannel"];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CreateChannel: string[] = [
		"mediapackage:CreateChannel",
		"mediapackage:TagResource",
	];
	/** IAM actions required for the CreateHarvestJob API call. */
	static readonly CreateHarvestJob: string[] = [
		"mediapackage:CreateHarvestJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateOriginEndpoint API call. */
	static readonly CreateOriginEndpoint: string[] = [
		"mediapackage:CreateOriginEndpoint",
		"iam:PassRole",
		"mediapackage:TagResource",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DeleteChannel: string[] = ["mediapackage:DeleteChannel"];
	/** IAM actions required for the DeleteOriginEndpoint API call. */
	static readonly DeleteOriginEndpoint: string[] = [
		"mediapackage:DeleteOriginEndpoint",
	];
	/** IAM actions required for the DescribeChannel API call. */
	static readonly DescribeChannel: string[] = ["mediapackage:DescribeChannel"];
	/** IAM actions required for the DescribeHarvestJob API call. */
	static readonly DescribeHarvestJob: string[] = [
		"mediapackage:DescribeHarvestJob",
	];
	/** IAM actions required for the DescribeOriginEndpoint API call. */
	static readonly DescribeOriginEndpoint: string[] = [
		"mediapackage:DescribeOriginEndpoint",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly ListChannels: string[] = ["mediapackage:ListChannels"];
	/** IAM actions required for the ListHarvestJobs API call. */
	static readonly ListHarvestJobs: string[] = ["mediapackage:ListHarvestJobs"];
	/** IAM actions required for the ListOriginEndpoints API call. */
	static readonly ListOriginEndpoints: string[] = [
		"mediapackage:ListOriginEndpoints",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"mediapackage:ListTagsForResource",
	];
	/** IAM actions required for the RotateChannelCredentials API call. */
	static readonly RotateChannelCredentials: string[] = [
		"mediapackage:RotateChannelCredentials",
	];
	/** IAM actions required for the RotateIngestEndpointCredentials API call. */
	static readonly RotateIngestEndpointCredentials: string[] = [
		"mediapackage:RotateIngestEndpointCredentials",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["mediapackage:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["mediapackage:UntagResource"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UpdateChannel: string[] = ["mediapackage:UpdateChannel"];
	/** IAM actions required for the UpdateOriginEndpoint API call. */
	static readonly UpdateOriginEndpoint: string[] = [
		"iam:PassRole",
		"mediapackage:UpdateOriginEndpoint",
	];
}

/**
 * Condition key constants and builders for mediapackage.
 */
export class MediaPackageConditions {
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CreateChannelConditionKeys: string[] = [
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
