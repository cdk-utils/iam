// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cloudtrail-data.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cloudtrail-data service.
 */
export class CloudtrailDataActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cloudtrail-data";

	/** [Write] cloudtrail-data:PutAuditEvents */
	static readonly PutAuditEvents = "cloudtrail-data:PutAuditEvents";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CloudtrailDataActions.PutAuditEvents,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a channel ARN.
 */
export interface CloudtrailDataChannelArnProps {
	/** The ChannelId component of the ARN. */
	readonly channelId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a channel ARN.
 */
export interface CloudtrailDataChannelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelId component. */
	readonly channelId: string;
}

const ChannelArnRegex =
	/^arn:(?<partition>[^:]+):cloudtrail:(?<region>[^:]*):(?<account>[^:]*):channel\/(?<channelId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cloudtrail-data resources.
 */
export class CloudtrailDataResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: CloudtrailDataChannelArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudtrail:${props.region ?? "*"}:${props.account ?? "*"}:channel/${props.channelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the channel resource.
	 */
	static isValidChannelArn(arn: string): boolean {
		return ChannelArnRegex.test(arn);
	}

	/**
	 * Parses a channel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelArn(arn: string): CloudtrailDataChannelArnComponents {
		const match = ChannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelId: match.groups!.channelId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cloudtrail-data.
 */
export class CloudtrailDataOperations {
	/** IAM actions required for the PutAuditEvents API call. */
	static readonly PutAuditEvents: string[] = ["cloudtrail-data:PutAuditEvents"];
}

/**
 * Condition key constants and builders for cloudtrail-data.
 */
export class CloudtrailDataConditions {
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
