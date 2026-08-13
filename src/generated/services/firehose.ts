// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/firehose.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the firehose service.
 */
export class FirehoseActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "firehose";

	/** [Write] firehose:CreateDeliveryStream */
	static readonly CreateDeliveryStream = "firehose:CreateDeliveryStream";
	/** [Write] firehose:DeleteDeliveryStream */
	static readonly DeleteDeliveryStream = "firehose:DeleteDeliveryStream";
	/** [Read] firehose:DescribeDeliveryStream */
	static readonly DescribeDeliveryStream = "firehose:DescribeDeliveryStream";
	/** [List] firehose:ListDeliveryStreams */
	static readonly ListDeliveryStreams = "firehose:ListDeliveryStreams";
	/** [List] firehose:ListTagsForDeliveryStream */
	static readonly ListTagsForDeliveryStream =
		"firehose:ListTagsForDeliveryStream";
	/** [Write] firehose:PutRecord */
	static readonly PutRecord = "firehose:PutRecord";
	/** [Write] firehose:PutRecordBatch */
	static readonly PutRecordBatch = "firehose:PutRecordBatch";
	/** [Write] firehose:StartDeliveryStreamEncryption */
	static readonly StartDeliveryStreamEncryption =
		"firehose:StartDeliveryStreamEncryption";
	/** [Write] firehose:StopDeliveryStreamEncryption */
	static readonly StopDeliveryStreamEncryption =
		"firehose:StopDeliveryStreamEncryption";
	/** [Tagging] firehose:TagDeliveryStream */
	static readonly TagDeliveryStream = "firehose:TagDeliveryStream";
	/** [Tagging] firehose:UntagDeliveryStream */
	static readonly UntagDeliveryStream = "firehose:UntagDeliveryStream";
	/** [Write] firehose:UpdateDestination */
	static readonly UpdateDestination = "firehose:UpdateDestination";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		FirehoseActions.DescribeDeliveryStream,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		FirehoseActions.CreateDeliveryStream,
		FirehoseActions.DeleteDeliveryStream,
		FirehoseActions.PutRecord,
		FirehoseActions.PutRecordBatch,
		FirehoseActions.StartDeliveryStreamEncryption,
		FirehoseActions.StopDeliveryStreamEncryption,
		FirehoseActions.UpdateDestination,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		FirehoseActions.ListDeliveryStreams,
		FirehoseActions.ListTagsForDeliveryStream,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		FirehoseActions.TagDeliveryStream,
		FirehoseActions.UntagDeliveryStream,
	];
}

/**
 * Properties for building a deliverystream ARN.
 */
export interface FirehoseDeliverystreamArnProps {
	/** The DeliveryStreamName component of the ARN. */
	readonly deliveryStreamName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a deliverystream ARN.
 */
export interface FirehoseDeliverystreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeliveryStreamName component. */
	readonly deliveryStreamName: string;
}

const DeliverystreamArnRegex =
	/^arn:(?<partition>[^:]+):firehose:(?<region>[^:]*):(?<account>[^:]*):deliverystream\/(?<deliveryStreamName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for firehose resources.
 */
export class FirehoseResources {
	/**
	 * Builds an ARN for the deliverystream resource.
	 */
	static deliverystream(props: FirehoseDeliverystreamArnProps): string {
		return `arn:${props.partition ?? "aws"}:firehose:${props.region ?? "*"}:${props.account ?? "*"}:deliverystream/${props.deliveryStreamName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deliverystream resource.
	 */
	static isValidDeliverystreamArn(arn: string): boolean {
		return DeliverystreamArnRegex.test(arn);
	}

	/**
	 * Parses a deliverystream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeliverystreamArn(
		arn: string,
	): FirehoseDeliverystreamArnComponents {
		const match = DeliverystreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deliverystream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deliveryStreamName: match.groups!.deliveryStreamName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for firehose.
 */
export class FirehoseOperations {
	/** IAM actions required for the CreateDeliveryStream API call. */
	static readonly CreateDeliveryStream: string[] = [
		"firehose:CreateDeliveryStream",
		"iam:PassRole",
		"firehose:TagDeliveryStream",
	];
	/** IAM actions required for the DeleteDeliveryStream API call. */
	static readonly DeleteDeliveryStream: string[] = [
		"firehose:DeleteDeliveryStream",
	];
	/** IAM actions required for the DescribeDeliveryStream API call. */
	static readonly DescribeDeliveryStream: string[] = [
		"firehose:DescribeDeliveryStream",
	];
	/** IAM actions required for the ListDeliveryStreams API call. */
	static readonly ListDeliveryStreams: string[] = [
		"firehose:ListDeliveryStreams",
	];
	/** IAM actions required for the ListTagsForDeliveryStream API call. */
	static readonly ListTagsForDeliveryStream: string[] = [
		"firehose:ListTagsForDeliveryStream",
	];
	/** IAM actions required for the PutRecord API call. */
	static readonly PutRecord: string[] = ["firehose:PutRecord"];
	/** IAM actions required for the PutRecordBatch API call. */
	static readonly PutRecordBatch: string[] = ["firehose:PutRecordBatch"];
	/** IAM actions required for the StartDeliveryStreamEncryption API call. */
	static readonly StartDeliveryStreamEncryption: string[] = [
		"firehose:StartDeliveryStreamEncryption",
	];
	/** IAM actions required for the StopDeliveryStreamEncryption API call. */
	static readonly StopDeliveryStreamEncryption: string[] = [
		"firehose:StopDeliveryStreamEncryption",
	];
	/** IAM actions required for the TagDeliveryStream API call. */
	static readonly TagDeliveryStream: string[] = ["firehose:TagDeliveryStream"];
	/** IAM actions required for the UntagDeliveryStream API call. */
	static readonly UntagDeliveryStream: string[] = [
		"firehose:UntagDeliveryStream",
	];
	/** IAM actions required for the UpdateDestination API call. */
	static readonly UpdateDestination: string[] = [
		"iam:PassRole",
		"firehose:UpdateDestination",
	];
}

/**
 * Condition key constants and builders for firehose.
 */
export class FirehoseConditions {
	/** Condition keys applicable to the CreateDeliveryStream action. */
	static readonly CreateDeliveryStreamConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagDeliveryStream action. */
	static readonly TagDeliveryStreamConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagDeliveryStream action. */
	static readonly UntagDeliveryStreamConditionKeys: string[] = ["aws:TagKeys"];

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
