// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iotanalytics.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iotanalytics service.
 */
export class IotanalyticsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iotanalytics";

	/** [Write] iotanalytics:BatchPutMessage */
	static readonly BATCH_PUT_MESSAGE = "iotanalytics:BatchPutMessage";
	/** [Write] iotanalytics:CancelPipelineReprocessing */
	static readonly CANCEL_PIPELINE_REPROCESSING =
		"iotanalytics:CancelPipelineReprocessing";
	/** [Write] iotanalytics:CreateChannel */
	static readonly CREATE_CHANNEL = "iotanalytics:CreateChannel";
	/** [Write] iotanalytics:CreateDataset */
	static readonly CREATE_DATASET = "iotanalytics:CreateDataset";
	/** [Write] iotanalytics:CreateDatasetContent */
	static readonly CREATE_DATASET_CONTENT = "iotanalytics:CreateDatasetContent";
	/** [Write] iotanalytics:CreateDatastore */
	static readonly CREATE_DATASTORE = "iotanalytics:CreateDatastore";
	/** [Write] iotanalytics:CreatePipeline */
	static readonly CREATE_PIPELINE = "iotanalytics:CreatePipeline";
	/** [Write] iotanalytics:DeleteChannel */
	static readonly DELETE_CHANNEL = "iotanalytics:DeleteChannel";
	/** [Write] iotanalytics:DeleteDataset */
	static readonly DELETE_DATASET = "iotanalytics:DeleteDataset";
	/** [Write] iotanalytics:DeleteDatasetContent */
	static readonly DELETE_DATASET_CONTENT = "iotanalytics:DeleteDatasetContent";
	/** [Write] iotanalytics:DeleteDatastore */
	static readonly DELETE_DATASTORE = "iotanalytics:DeleteDatastore";
	/** [Write] iotanalytics:DeletePipeline */
	static readonly DELETE_PIPELINE = "iotanalytics:DeletePipeline";
	/** [Read] iotanalytics:DescribeChannel */
	static readonly DESCRIBE_CHANNEL = "iotanalytics:DescribeChannel";
	/** [Read] iotanalytics:DescribeDataset */
	static readonly DESCRIBE_DATASET = "iotanalytics:DescribeDataset";
	/** [Read] iotanalytics:DescribeDatastore */
	static readonly DESCRIBE_DATASTORE = "iotanalytics:DescribeDatastore";
	/** [Read] iotanalytics:DescribeLoggingOptions */
	static readonly DESCRIBE_LOGGING_OPTIONS =
		"iotanalytics:DescribeLoggingOptions";
	/** [Read] iotanalytics:DescribePipeline */
	static readonly DESCRIBE_PIPELINE = "iotanalytics:DescribePipeline";
	/** [Read] iotanalytics:GetDatasetContent */
	static readonly GET_DATASET_CONTENT = "iotanalytics:GetDatasetContent";
	/** [List] iotanalytics:ListChannels */
	static readonly LIST_CHANNELS = "iotanalytics:ListChannels";
	/** [List] iotanalytics:ListDatasetContents */
	static readonly LIST_DATASET_CONTENTS = "iotanalytics:ListDatasetContents";
	/** [List] iotanalytics:ListDatasets */
	static readonly LIST_DATASETS = "iotanalytics:ListDatasets";
	/** [List] iotanalytics:ListDatastores */
	static readonly LIST_DATASTORES = "iotanalytics:ListDatastores";
	/** [List] iotanalytics:ListPipelines */
	static readonly LIST_PIPELINES = "iotanalytics:ListPipelines";
	/** [Read] iotanalytics:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "iotanalytics:ListTagsForResource";
	/** [Write] iotanalytics:PutLoggingOptions */
	static readonly PUT_LOGGING_OPTIONS = "iotanalytics:PutLoggingOptions";
	/** [Read] iotanalytics:RunPipelineActivity */
	static readonly RUN_PIPELINE_ACTIVITY = "iotanalytics:RunPipelineActivity";
	/** [Read] iotanalytics:SampleChannelData */
	static readonly SAMPLE_CHANNEL_DATA = "iotanalytics:SampleChannelData";
	/** [Write] iotanalytics:StartPipelineReprocessing */
	static readonly START_PIPELINE_REPROCESSING =
		"iotanalytics:StartPipelineReprocessing";
	/** [Tagging] iotanalytics:TagResource */
	static readonly TAG_RESOURCE = "iotanalytics:TagResource";
	/** [Tagging] iotanalytics:UntagResource */
	static readonly UNTAG_RESOURCE = "iotanalytics:UntagResource";
	/** [Write] iotanalytics:UpdateChannel */
	static readonly UPDATE_CHANNEL = "iotanalytics:UpdateChannel";
	/** [Write] iotanalytics:UpdateDataset */
	static readonly UPDATE_DATASET = "iotanalytics:UpdateDataset";
	/** [Write] iotanalytics:UpdateDatastore */
	static readonly UPDATE_DATASTORE = "iotanalytics:UpdateDatastore";
	/** [Write] iotanalytics:UpdatePipeline */
	static readonly UPDATE_PIPELINE = "iotanalytics:UpdatePipeline";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IotanalyticsActions.DESCRIBE_CHANNEL,
		IotanalyticsActions.DESCRIBE_DATASET,
		IotanalyticsActions.DESCRIBE_DATASTORE,
		IotanalyticsActions.DESCRIBE_LOGGING_OPTIONS,
		IotanalyticsActions.DESCRIBE_PIPELINE,
		IotanalyticsActions.GET_DATASET_CONTENT,
		IotanalyticsActions.LIST_TAGS_FOR_RESOURCE,
		IotanalyticsActions.RUN_PIPELINE_ACTIVITY,
		IotanalyticsActions.SAMPLE_CHANNEL_DATA,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IotanalyticsActions.BATCH_PUT_MESSAGE,
		IotanalyticsActions.CANCEL_PIPELINE_REPROCESSING,
		IotanalyticsActions.CREATE_CHANNEL,
		IotanalyticsActions.CREATE_DATASET,
		IotanalyticsActions.CREATE_DATASET_CONTENT,
		IotanalyticsActions.CREATE_DATASTORE,
		IotanalyticsActions.CREATE_PIPELINE,
		IotanalyticsActions.DELETE_CHANNEL,
		IotanalyticsActions.DELETE_DATASET,
		IotanalyticsActions.DELETE_DATASET_CONTENT,
		IotanalyticsActions.DELETE_DATASTORE,
		IotanalyticsActions.DELETE_PIPELINE,
		IotanalyticsActions.PUT_LOGGING_OPTIONS,
		IotanalyticsActions.START_PIPELINE_REPROCESSING,
		IotanalyticsActions.UPDATE_CHANNEL,
		IotanalyticsActions.UPDATE_DATASET,
		IotanalyticsActions.UPDATE_DATASTORE,
		IotanalyticsActions.UPDATE_PIPELINE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IotanalyticsActions.LIST_CHANNELS,
		IotanalyticsActions.LIST_DATASET_CONTENTS,
		IotanalyticsActions.LIST_DATASETS,
		IotanalyticsActions.LIST_DATASTORES,
		IotanalyticsActions.LIST_PIPELINES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		IotanalyticsActions.TAG_RESOURCE,
		IotanalyticsActions.UNTAG_RESOURCE,
	];
}

const ChannelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotanalytics:(?<region>[^:]*):(?<account>[^:]*):channel/(?<channelName>[^:/?]+)$",
);
const DatasetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotanalytics:(?<region>[^:]*):(?<account>[^:]*):dataset/(?<datasetName>[^:/?]+)$",
);
const DatastoreArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotanalytics:(?<region>[^:]*):(?<account>[^:]*):datastore/(?<datastoreName>[^:/?]+)$",
);
const PipelineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotanalytics:(?<region>[^:]*):(?<account>[^:]*):pipeline/(?<pipelineName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for iotanalytics resources.
 */
export class IotanalyticsResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: {
		/** The ChannelName component of the ARN. */
		readonly channelName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotanalytics:${props.region ?? "*"}:${props.account ?? "*"}:channel/${props.channelName}`;
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
	static parseChannelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		channelName: string;
	} {
		const match = ChannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelName: match.groups!.channelName,
		};
	}

	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: {
		/** The DatasetName component of the ARN. */
		readonly datasetName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotanalytics:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.datasetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataset resource.
	 */
	static isValidDatasetArn(arn: string): boolean {
		return DatasetArnRegex.test(arn);
	}

	/**
	 * Parses a dataset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		datasetName: string;
	} {
		const match = DatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			datasetName: match.groups!.datasetName,
		};
	}

	/**
	 * Builds an ARN for the datastore resource.
	 */
	static datastore(props: {
		/** The DatastoreName component of the ARN. */
		readonly datastoreName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotanalytics:${props.region ?? "*"}:${props.account ?? "*"}:datastore/${props.datastoreName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the datastore resource.
	 */
	static isValidDatastoreArn(arn: string): boolean {
		return DatastoreArnRegex.test(arn);
	}

	/**
	 * Parses a datastore ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatastoreArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		datastoreName: string;
	} {
		const match = DatastoreArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datastore ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			datastoreName: match.groups!.datastoreName,
		};
	}

	/**
	 * Builds an ARN for the pipeline resource.
	 */
	static pipeline(props: {
		/** The PipelineName component of the ARN. */
		readonly pipelineName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotanalytics:${props.region ?? "*"}:${props.account ?? "*"}:pipeline/${props.pipelineName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the pipeline resource.
	 */
	static isValidPipelineArn(arn: string): boolean {
		return PipelineArnRegex.test(arn);
	}

	/**
	 * Parses a pipeline ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePipelineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		pipelineName: string;
	} {
		const match = PipelineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pipeline ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			pipelineName: match.groups!.pipelineName,
		};
	}
}

/**
 * Condition key constants and builders for iotanalytics.
 */
export class IotanalyticsConditions {
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CREATE_CHANNEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CREATE_DATASET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatastore action. */
	static readonly CREATE_DATASTORE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePipeline action. */
	static readonly CREATE_PIPELINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: iotanalytics:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "iotanalytics:ResourceTag/${TagKey}";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}

	/**
	 * Generates a condition block for `iotanalytics:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iotanalytics:ResourceTag/${TagKey}": value } };
	}
}
