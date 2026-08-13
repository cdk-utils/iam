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
	static readonly CONFIGURE_LOGS = "mediapackage:ConfigureLogs";
	/** [Write] mediapackage:CreateChannel */
	static readonly CREATE_CHANNEL = "mediapackage:CreateChannel";
	/** [Write] mediapackage:CreateHarvestJob */
	static readonly CREATE_HARVEST_JOB = "mediapackage:CreateHarvestJob";
	/** [Write] mediapackage:CreateOriginEndpoint */
	static readonly CREATE_ORIGIN_ENDPOINT = "mediapackage:CreateOriginEndpoint";
	/** [Write] mediapackage:DeleteChannel */
	static readonly DELETE_CHANNEL = "mediapackage:DeleteChannel";
	/** [Write] mediapackage:DeleteOriginEndpoint */
	static readonly DELETE_ORIGIN_ENDPOINT = "mediapackage:DeleteOriginEndpoint";
	/** [Read] mediapackage:DescribeChannel */
	static readonly DESCRIBE_CHANNEL = "mediapackage:DescribeChannel";
	/** [Read] mediapackage:DescribeHarvestJob */
	static readonly DESCRIBE_HARVEST_JOB = "mediapackage:DescribeHarvestJob";
	/** [Read] mediapackage:DescribeOriginEndpoint */
	static readonly DESCRIBE_ORIGIN_ENDPOINT =
		"mediapackage:DescribeOriginEndpoint";
	/** [Read] mediapackage:ListChannels */
	static readonly LIST_CHANNELS = "mediapackage:ListChannels";
	/** [Read] mediapackage:ListHarvestJobs */
	static readonly LIST_HARVEST_JOBS = "mediapackage:ListHarvestJobs";
	/** [Read] mediapackage:ListOriginEndpoints */
	static readonly LIST_ORIGIN_ENDPOINTS = "mediapackage:ListOriginEndpoints";
	/** [Read] mediapackage:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "mediapackage:ListTagsForResource";
	/** [Write] mediapackage:RotateChannelCredentials */
	static readonly ROTATE_CHANNEL_CREDENTIALS =
		"mediapackage:RotateChannelCredentials";
	/** [Write] mediapackage:RotateIngestEndpointCredentials */
	static readonly ROTATE_INGEST_ENDPOINT_CREDENTIALS =
		"mediapackage:RotateIngestEndpointCredentials";
	/** [Tagging] mediapackage:TagResource */
	static readonly TAG_RESOURCE = "mediapackage:TagResource";
	/** [Tagging] mediapackage:UntagResource */
	static readonly UNTAG_RESOURCE = "mediapackage:UntagResource";
	/** [Write] mediapackage:UpdateChannel */
	static readonly UPDATE_CHANNEL = "mediapackage:UpdateChannel";
	/** [Write] mediapackage:UpdateOriginEndpoint */
	static readonly UPDATE_ORIGIN_ENDPOINT = "mediapackage:UpdateOriginEndpoint";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MediaPackageActions.DESCRIBE_CHANNEL,
		MediaPackageActions.DESCRIBE_HARVEST_JOB,
		MediaPackageActions.DESCRIBE_ORIGIN_ENDPOINT,
		MediaPackageActions.LIST_CHANNELS,
		MediaPackageActions.LIST_HARVEST_JOBS,
		MediaPackageActions.LIST_ORIGIN_ENDPOINTS,
		MediaPackageActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MediaPackageActions.CONFIGURE_LOGS,
		MediaPackageActions.CREATE_CHANNEL,
		MediaPackageActions.CREATE_HARVEST_JOB,
		MediaPackageActions.CREATE_ORIGIN_ENDPOINT,
		MediaPackageActions.DELETE_CHANNEL,
		MediaPackageActions.DELETE_ORIGIN_ENDPOINT,
		MediaPackageActions.ROTATE_CHANNEL_CREDENTIALS,
		MediaPackageActions.ROTATE_INGEST_ENDPOINT_CREDENTIALS,
		MediaPackageActions.UPDATE_CHANNEL,
		MediaPackageActions.UPDATE_ORIGIN_ENDPOINT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MediaPackageActions.TAG_RESOURCE,
		MediaPackageActions.UNTAG_RESOURCE,
	];
}

const ChannelsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediapackage:(?<region>[^:]*):(?<account>[^:]*):channels/(?<channelIdentifier>[^:/?]+)$",
);
const HarvestJobsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediapackage:(?<region>[^:]*):(?<account>[^:]*):harvest_jobs/(?<harvestJobIdentifier>[^:/?]+)$",
);
const OriginEndpointsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediapackage:(?<region>[^:]*):(?<account>[^:]*):origin_endpoints/(?<originEndpointIdentifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for mediapackage resources.
 */
export class MediaPackageResources {
	/**
	 * Builds an ARN for the channels resource.
	 */
	static channels(props: {
		/** The ChannelIdentifier component of the ARN. */
		readonly channelIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseChannelsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		channelIdentifier: string;
	} {
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
	static harvestJobs(props: {
		/** The HarvestJobIdentifier component of the ARN. */
		readonly harvestJobIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseHarvestJobsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		harvestJobIdentifier: string;
	} {
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
	static originEndpoints(props: {
		/** The OriginEndpointIdentifier component of the ARN. */
		readonly originEndpointIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseOriginEndpointsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		originEndpointIdentifier: string;
	} {
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
	static readonly CONFIGURE_LOGS: string[] = ["mediapackage:UpdateChannel"];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CREATE_CHANNEL: string[] = [
		"mediapackage:CreateChannel",
		"mediapackage:TagResource",
	];
	/** IAM actions required for the CreateHarvestJob API call. */
	static readonly CREATE_HARVEST_JOB: string[] = [
		"mediapackage:CreateHarvestJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateOriginEndpoint API call. */
	static readonly CREATE_ORIGIN_ENDPOINT: string[] = [
		"mediapackage:CreateOriginEndpoint",
		"iam:PassRole",
		"mediapackage:TagResource",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DELETE_CHANNEL: string[] = ["mediapackage:DeleteChannel"];
	/** IAM actions required for the DeleteOriginEndpoint API call. */
	static readonly DELETE_ORIGIN_ENDPOINT: string[] = [
		"mediapackage:DeleteOriginEndpoint",
	];
	/** IAM actions required for the DescribeChannel API call. */
	static readonly DESCRIBE_CHANNEL: string[] = ["mediapackage:DescribeChannel"];
	/** IAM actions required for the DescribeHarvestJob API call. */
	static readonly DESCRIBE_HARVEST_JOB: string[] = [
		"mediapackage:DescribeHarvestJob",
	];
	/** IAM actions required for the DescribeOriginEndpoint API call. */
	static readonly DESCRIBE_ORIGIN_ENDPOINT: string[] = [
		"mediapackage:DescribeOriginEndpoint",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly LIST_CHANNELS: string[] = ["mediapackage:ListChannels"];
	/** IAM actions required for the ListHarvestJobs API call. */
	static readonly LIST_HARVEST_JOBS: string[] = [
		"mediapackage:ListHarvestJobs",
	];
	/** IAM actions required for the ListOriginEndpoints API call. */
	static readonly LIST_ORIGIN_ENDPOINTS: string[] = [
		"mediapackage:ListOriginEndpoints",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"mediapackage:ListTagsForResource",
	];
	/** IAM actions required for the RotateChannelCredentials API call. */
	static readonly ROTATE_CHANNEL_CREDENTIALS: string[] = [
		"mediapackage:RotateChannelCredentials",
	];
	/** IAM actions required for the RotateIngestEndpointCredentials API call. */
	static readonly ROTATE_INGEST_ENDPOINT_CREDENTIALS: string[] = [
		"mediapackage:RotateIngestEndpointCredentials",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["mediapackage:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["mediapackage:UntagResource"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UPDATE_CHANNEL: string[] = ["mediapackage:UpdateChannel"];
	/** IAM actions required for the UpdateOriginEndpoint API call. */
	static readonly UPDATE_ORIGIN_ENDPOINT: string[] = [
		"iam:PassRole",
		"mediapackage:UpdateOriginEndpoint",
	];
}

/**
 * Condition key constants and builders for mediapackage.
 */
export class MediaPackageConditions {
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CREATE_CHANNEL_CONDITION_KEYS: string[] = [
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
