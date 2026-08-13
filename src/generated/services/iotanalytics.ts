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
	static readonly BatchPutMessage = "iotanalytics:BatchPutMessage";
	/** [Write] iotanalytics:CancelPipelineReprocessing */
	static readonly CancelPipelineReprocessing =
		"iotanalytics:CancelPipelineReprocessing";
	/** [Write] iotanalytics:CreateChannel */
	static readonly CreateChannel = "iotanalytics:CreateChannel";
	/** [Write] iotanalytics:CreateDataset */
	static readonly CreateDataset = "iotanalytics:CreateDataset";
	/** [Write] iotanalytics:CreateDatasetContent */
	static readonly CreateDatasetContent = "iotanalytics:CreateDatasetContent";
	/** [Write] iotanalytics:CreateDatastore */
	static readonly CreateDatastore = "iotanalytics:CreateDatastore";
	/** [Write] iotanalytics:CreatePipeline */
	static readonly CreatePipeline = "iotanalytics:CreatePipeline";
	/** [Write] iotanalytics:DeleteChannel */
	static readonly DeleteChannel = "iotanalytics:DeleteChannel";
	/** [Write] iotanalytics:DeleteDataset */
	static readonly DeleteDataset = "iotanalytics:DeleteDataset";
	/** [Write] iotanalytics:DeleteDatasetContent */
	static readonly DeleteDatasetContent = "iotanalytics:DeleteDatasetContent";
	/** [Write] iotanalytics:DeleteDatastore */
	static readonly DeleteDatastore = "iotanalytics:DeleteDatastore";
	/** [Write] iotanalytics:DeletePipeline */
	static readonly DeletePipeline = "iotanalytics:DeletePipeline";
	/** [Read] iotanalytics:DescribeChannel */
	static readonly DescribeChannel = "iotanalytics:DescribeChannel";
	/** [Read] iotanalytics:DescribeDataset */
	static readonly DescribeDataset = "iotanalytics:DescribeDataset";
	/** [Read] iotanalytics:DescribeDatastore */
	static readonly DescribeDatastore = "iotanalytics:DescribeDatastore";
	/** [Read] iotanalytics:DescribeLoggingOptions */
	static readonly DescribeLoggingOptions =
		"iotanalytics:DescribeLoggingOptions";
	/** [Read] iotanalytics:DescribePipeline */
	static readonly DescribePipeline = "iotanalytics:DescribePipeline";
	/** [Read] iotanalytics:GetDatasetContent */
	static readonly actionGetDatasetContent = "iotanalytics:GetDatasetContent";
	/** [List] iotanalytics:ListChannels */
	static readonly ListChannels = "iotanalytics:ListChannels";
	/** [List] iotanalytics:ListDatasetContents */
	static readonly ListDatasetContents = "iotanalytics:ListDatasetContents";
	/** [List] iotanalytics:ListDatasets */
	static readonly ListDatasets = "iotanalytics:ListDatasets";
	/** [List] iotanalytics:ListDatastores */
	static readonly ListDatastores = "iotanalytics:ListDatastores";
	/** [List] iotanalytics:ListPipelines */
	static readonly ListPipelines = "iotanalytics:ListPipelines";
	/** [Read] iotanalytics:ListTagsForResource */
	static readonly ListTagsForResource = "iotanalytics:ListTagsForResource";
	/** [Write] iotanalytics:PutLoggingOptions */
	static readonly PutLoggingOptions = "iotanalytics:PutLoggingOptions";
	/** [Read] iotanalytics:RunPipelineActivity */
	static readonly RunPipelineActivity = "iotanalytics:RunPipelineActivity";
	/** [Read] iotanalytics:SampleChannelData */
	static readonly SampleChannelData = "iotanalytics:SampleChannelData";
	/** [Write] iotanalytics:StartPipelineReprocessing */
	static readonly StartPipelineReprocessing =
		"iotanalytics:StartPipelineReprocessing";
	/** [Tagging] iotanalytics:TagResource */
	static readonly TagResource = "iotanalytics:TagResource";
	/** [Tagging] iotanalytics:UntagResource */
	static readonly UntagResource = "iotanalytics:UntagResource";
	/** [Write] iotanalytics:UpdateChannel */
	static readonly UpdateChannel = "iotanalytics:UpdateChannel";
	/** [Write] iotanalytics:UpdateDataset */
	static readonly UpdateDataset = "iotanalytics:UpdateDataset";
	/** [Write] iotanalytics:UpdateDatastore */
	static readonly UpdateDatastore = "iotanalytics:UpdateDatastore";
	/** [Write] iotanalytics:UpdatePipeline */
	static readonly UpdatePipeline = "iotanalytics:UpdatePipeline";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IotanalyticsActions.DescribeChannel,
		IotanalyticsActions.DescribeDataset,
		IotanalyticsActions.DescribeDatastore,
		IotanalyticsActions.DescribeLoggingOptions,
		IotanalyticsActions.DescribePipeline,
		IotanalyticsActions.actionGetDatasetContent,
		IotanalyticsActions.ListTagsForResource,
		IotanalyticsActions.RunPipelineActivity,
		IotanalyticsActions.SampleChannelData,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IotanalyticsActions.BatchPutMessage,
		IotanalyticsActions.CancelPipelineReprocessing,
		IotanalyticsActions.CreateChannel,
		IotanalyticsActions.CreateDataset,
		IotanalyticsActions.CreateDatasetContent,
		IotanalyticsActions.CreateDatastore,
		IotanalyticsActions.CreatePipeline,
		IotanalyticsActions.DeleteChannel,
		IotanalyticsActions.DeleteDataset,
		IotanalyticsActions.DeleteDatasetContent,
		IotanalyticsActions.DeleteDatastore,
		IotanalyticsActions.DeletePipeline,
		IotanalyticsActions.PutLoggingOptions,
		IotanalyticsActions.StartPipelineReprocessing,
		IotanalyticsActions.UpdateChannel,
		IotanalyticsActions.UpdateDataset,
		IotanalyticsActions.UpdateDatastore,
		IotanalyticsActions.UpdatePipeline,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IotanalyticsActions.ListChannels,
		IotanalyticsActions.ListDatasetContents,
		IotanalyticsActions.ListDatasets,
		IotanalyticsActions.ListDatastores,
		IotanalyticsActions.ListPipelines,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		IotanalyticsActions.TagResource,
		IotanalyticsActions.UntagResource,
	];
}

/**
 * Properties for building a channel ARN.
 */
export interface IotanalyticsChannelArnProps {
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
 * Parsed components of a channel ARN.
 */
export interface IotanalyticsChannelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelName component. */
	readonly channelName: string;
}

/**
 * Properties for building a dataset ARN.
 */
export interface IotanalyticsDatasetArnProps {
	/** The DatasetName component of the ARN. */
	readonly datasetName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dataset ARN.
 */
export interface IotanalyticsDatasetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatasetName component. */
	readonly datasetName: string;
}

/**
 * Properties for building a datastore ARN.
 */
export interface IotanalyticsDatastoreArnProps {
	/** The DatastoreName component of the ARN. */
	readonly datastoreName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a datastore ARN.
 */
export interface IotanalyticsDatastoreArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatastoreName component. */
	readonly datastoreName: string;
}

/**
 * Properties for building a pipeline ARN.
 */
export interface IotanalyticsPipelineArnProps {
	/** The PipelineName component of the ARN. */
	readonly pipelineName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a pipeline ARN.
 */
export interface IotanalyticsPipelineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PipelineName component. */
	readonly pipelineName: string;
}

const ChannelArnRegex =
	/^arn:(?<partition>[^:]+):iotanalytics:(?<region>[^:]*):(?<account>[^:]*):channel\/(?<channelName>[^:/?]+)$/;
const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):iotanalytics:(?<region>[^:]*):(?<account>[^:]*):dataset\/(?<datasetName>[^:/?]+)$/;
const DatastoreArnRegex =
	/^arn:(?<partition>[^:]+):iotanalytics:(?<region>[^:]*):(?<account>[^:]*):datastore\/(?<datastoreName>[^:/?]+)$/;
const PipelineArnRegex =
	/^arn:(?<partition>[^:]+):iotanalytics:(?<region>[^:]*):(?<account>[^:]*):pipeline\/(?<pipelineName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for iotanalytics resources.
 */
export class IotanalyticsResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: IotanalyticsChannelArnProps): string {
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
	static parseChannelArn(arn: string): IotanalyticsChannelArnComponents {
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
	static dataset(props: IotanalyticsDatasetArnProps): string {
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
	static parseDatasetArn(arn: string): IotanalyticsDatasetArnComponents {
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
	static datastore(props: IotanalyticsDatastoreArnProps): string {
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
	static parseDatastoreArn(arn: string): IotanalyticsDatastoreArnComponents {
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
	static pipeline(props: IotanalyticsPipelineArnProps): string {
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
	static parsePipelineArn(arn: string): IotanalyticsPipelineArnComponents {
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
	static readonly CreateChannelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CreateDatasetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatastore action. */
	static readonly CreateDatastoreConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePipeline action. */
	static readonly CreatePipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
