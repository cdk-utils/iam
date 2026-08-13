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
	static readonly CREATE_DELIVERY_STREAM = "firehose:CreateDeliveryStream";
	/** [Write] firehose:DeleteDeliveryStream */
	static readonly DELETE_DELIVERY_STREAM = "firehose:DeleteDeliveryStream";
	/** [Read] firehose:DescribeDeliveryStream */
	static readonly DESCRIBE_DELIVERY_STREAM = "firehose:DescribeDeliveryStream";
	/** [List] firehose:ListDeliveryStreams */
	static readonly LIST_DELIVERY_STREAMS = "firehose:ListDeliveryStreams";
	/** [List] firehose:ListTagsForDeliveryStream */
	static readonly LIST_TAGS_FOR_DELIVERY_STREAM =
		"firehose:ListTagsForDeliveryStream";
	/** [Write] firehose:PutRecord */
	static readonly PUT_RECORD = "firehose:PutRecord";
	/** [Write] firehose:PutRecordBatch */
	static readonly PUT_RECORD_BATCH = "firehose:PutRecordBatch";
	/** [Write] firehose:StartDeliveryStreamEncryption */
	static readonly START_DELIVERY_STREAM_ENCRYPTION =
		"firehose:StartDeliveryStreamEncryption";
	/** [Write] firehose:StopDeliveryStreamEncryption */
	static readonly STOP_DELIVERY_STREAM_ENCRYPTION =
		"firehose:StopDeliveryStreamEncryption";
	/** [Tagging] firehose:TagDeliveryStream */
	static readonly TAG_DELIVERY_STREAM = "firehose:TagDeliveryStream";
	/** [Tagging] firehose:UntagDeliveryStream */
	static readonly UNTAG_DELIVERY_STREAM = "firehose:UntagDeliveryStream";
	/** [Write] firehose:UpdateDestination */
	static readonly UPDATE_DESTINATION = "firehose:UpdateDestination";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		FirehoseActions.DESCRIBE_DELIVERY_STREAM,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		FirehoseActions.CREATE_DELIVERY_STREAM,
		FirehoseActions.DELETE_DELIVERY_STREAM,
		FirehoseActions.PUT_RECORD,
		FirehoseActions.PUT_RECORD_BATCH,
		FirehoseActions.START_DELIVERY_STREAM_ENCRYPTION,
		FirehoseActions.STOP_DELIVERY_STREAM_ENCRYPTION,
		FirehoseActions.UPDATE_DESTINATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		FirehoseActions.LIST_DELIVERY_STREAMS,
		FirehoseActions.LIST_TAGS_FOR_DELIVERY_STREAM,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		FirehoseActions.TAG_DELIVERY_STREAM,
		FirehoseActions.UNTAG_DELIVERY_STREAM,
	];
}

const DeliverystreamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):firehose:(?<region>[^:]*):(?<account>[^:]*):deliverystream/(?<deliveryStreamName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for firehose resources.
 */
export class FirehoseResources {
	/**
	 * Builds an ARN for the deliverystream resource.
	 */
	static deliverystream(props: {
		/** The DeliveryStreamName component of the ARN. */
		readonly deliveryStreamName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDeliverystreamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deliveryStreamName: string;
	} {
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
	static readonly CREATE_DELIVERY_STREAM: string[] = [
		"firehose:CreateDeliveryStream",
		"iam:PassRole",
		"firehose:TagDeliveryStream",
	];
	/** IAM actions required for the DeleteDeliveryStream API call. */
	static readonly DELETE_DELIVERY_STREAM: string[] = [
		"firehose:DeleteDeliveryStream",
	];
	/** IAM actions required for the DescribeDeliveryStream API call. */
	static readonly DESCRIBE_DELIVERY_STREAM: string[] = [
		"firehose:DescribeDeliveryStream",
	];
	/** IAM actions required for the ListDeliveryStreams API call. */
	static readonly LIST_DELIVERY_STREAMS: string[] = [
		"firehose:ListDeliveryStreams",
	];
	/** IAM actions required for the ListTagsForDeliveryStream API call. */
	static readonly LIST_TAGS_FOR_DELIVERY_STREAM: string[] = [
		"firehose:ListTagsForDeliveryStream",
	];
	/** IAM actions required for the PutRecord API call. */
	static readonly PUT_RECORD: string[] = ["firehose:PutRecord"];
	/** IAM actions required for the PutRecordBatch API call. */
	static readonly PUT_RECORD_BATCH: string[] = ["firehose:PutRecordBatch"];
	/** IAM actions required for the StartDeliveryStreamEncryption API call. */
	static readonly START_DELIVERY_STREAM_ENCRYPTION: string[] = [
		"firehose:StartDeliveryStreamEncryption",
	];
	/** IAM actions required for the StopDeliveryStreamEncryption API call. */
	static readonly STOP_DELIVERY_STREAM_ENCRYPTION: string[] = [
		"firehose:StopDeliveryStreamEncryption",
	];
	/** IAM actions required for the TagDeliveryStream API call. */
	static readonly TAG_DELIVERY_STREAM: string[] = [
		"firehose:TagDeliveryStream",
	];
	/** IAM actions required for the UntagDeliveryStream API call. */
	static readonly UNTAG_DELIVERY_STREAM: string[] = [
		"firehose:UntagDeliveryStream",
	];
	/** IAM actions required for the UpdateDestination API call. */
	static readonly UPDATE_DESTINATION: string[] = [
		"iam:PassRole",
		"firehose:UpdateDestination",
	];
}

/**
 * Condition key constants and builders for firehose.
 */
export class FirehoseConditions {
	/** Condition keys applicable to the CreateDeliveryStream action. */
	static readonly CREATE_DELIVERY_STREAM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagDeliveryStream action. */
	static readonly TAG_DELIVERY_STREAM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagDeliveryStream action. */
	static readonly UNTAG_DELIVERY_STREAM_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
	];

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
