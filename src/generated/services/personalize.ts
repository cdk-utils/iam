// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/personalize.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the personalize service.
 */
export class PersonalizeActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "personalize";

	/** [Write] personalize:CreateBatchInferenceJob */
	static readonly CREATE_BATCH_INFERENCE_JOB =
		"personalize:CreateBatchInferenceJob";
	/** [Write] personalize:CreateBatchSegmentJob */
	static readonly CREATE_BATCH_SEGMENT_JOB =
		"personalize:CreateBatchSegmentJob";
	/** [Write] personalize:CreateCampaign */
	static readonly CREATE_CAMPAIGN = "personalize:CreateCampaign";
	/** [Write] personalize:CreateDataDeletionJob */
	static readonly CREATE_DATA_DELETION_JOB =
		"personalize:CreateDataDeletionJob";
	/** [Write] personalize:CreateDataInsightsJob */
	static readonly CREATE_DATA_INSIGHTS_JOB =
		"personalize:CreateDataInsightsJob";
	/** [Write] personalize:CreateDataset */
	static readonly CREATE_DATASET = "personalize:CreateDataset";
	/** [Write] personalize:CreateDatasetExportJob */
	static readonly CREATE_DATASET_EXPORT_JOB =
		"personalize:CreateDatasetExportJob";
	/** [Write] personalize:CreateDatasetGroup */
	static readonly CREATE_DATASET_GROUP = "personalize:CreateDatasetGroup";
	/** [Write] personalize:CreateDatasetImportJob */
	static readonly CREATE_DATASET_IMPORT_JOB =
		"personalize:CreateDatasetImportJob";
	/** [Write] personalize:CreateEventTracker */
	static readonly CREATE_EVENT_TRACKER = "personalize:CreateEventTracker";
	/** [Write] personalize:CreateFilter */
	static readonly CREATE_FILTER = "personalize:CreateFilter";
	/** [Write] personalize:CreateMetricAttribution */
	static readonly CREATE_METRIC_ATTRIBUTION =
		"personalize:CreateMetricAttribution";
	/** [Write] personalize:CreateRecommender */
	static readonly CREATE_RECOMMENDER = "personalize:CreateRecommender";
	/** [Write] personalize:CreateSchema */
	static readonly CREATE_SCHEMA = "personalize:CreateSchema";
	/** [Write] personalize:CreateSolution */
	static readonly CREATE_SOLUTION = "personalize:CreateSolution";
	/** [Write] personalize:CreateSolutionVersion */
	static readonly CREATE_SOLUTION_VERSION = "personalize:CreateSolutionVersion";
	/** [Write] personalize:DeleteCampaign */
	static readonly DELETE_CAMPAIGN = "personalize:DeleteCampaign";
	/** [Write] personalize:DeleteDataset */
	static readonly DELETE_DATASET = "personalize:DeleteDataset";
	/** [Write] personalize:DeleteDatasetGroup */
	static readonly DELETE_DATASET_GROUP = "personalize:DeleteDatasetGroup";
	/** [Write] personalize:DeleteEventTracker */
	static readonly DELETE_EVENT_TRACKER = "personalize:DeleteEventTracker";
	/** [Write] personalize:DeleteFilter */
	static readonly DELETE_FILTER = "personalize:DeleteFilter";
	/** [Write] personalize:DeleteMetricAttribution */
	static readonly DELETE_METRIC_ATTRIBUTION =
		"personalize:DeleteMetricAttribution";
	/** [Write] personalize:DeleteRecommender */
	static readonly DELETE_RECOMMENDER = "personalize:DeleteRecommender";
	/** [Write] personalize:DeleteSchema */
	static readonly DELETE_SCHEMA = "personalize:DeleteSchema";
	/** [Write] personalize:DeleteSolution */
	static readonly DELETE_SOLUTION = "personalize:DeleteSolution";
	/** [Read] personalize:DescribeAlgorithm */
	static readonly DESCRIBE_ALGORITHM = "personalize:DescribeAlgorithm";
	/** [Read] personalize:DescribeBatchInferenceJob */
	static readonly DESCRIBE_BATCH_INFERENCE_JOB =
		"personalize:DescribeBatchInferenceJob";
	/** [Read] personalize:DescribeBatchSegmentJob */
	static readonly DESCRIBE_BATCH_SEGMENT_JOB =
		"personalize:DescribeBatchSegmentJob";
	/** [Read] personalize:DescribeCampaign */
	static readonly DESCRIBE_CAMPAIGN = "personalize:DescribeCampaign";
	/** [Read] personalize:DescribeDataDeletionJob */
	static readonly DESCRIBE_DATA_DELETION_JOB =
		"personalize:DescribeDataDeletionJob";
	/** [Read] personalize:DescribeDataInsightsJob */
	static readonly DESCRIBE_DATA_INSIGHTS_JOB =
		"personalize:DescribeDataInsightsJob";
	/** [Read] personalize:DescribeDataset */
	static readonly DESCRIBE_DATASET = "personalize:DescribeDataset";
	/** [Read] personalize:DescribeDatasetExportJob */
	static readonly DESCRIBE_DATASET_EXPORT_JOB =
		"personalize:DescribeDatasetExportJob";
	/** [Read] personalize:DescribeDatasetGroup */
	static readonly DESCRIBE_DATASET_GROUP = "personalize:DescribeDatasetGroup";
	/** [Read] personalize:DescribeDatasetImportJob */
	static readonly DESCRIBE_DATASET_IMPORT_JOB =
		"personalize:DescribeDatasetImportJob";
	/** [Read] personalize:DescribeEventTracker */
	static readonly DESCRIBE_EVENT_TRACKER = "personalize:DescribeEventTracker";
	/** [Read] personalize:DescribeFeatureTransformation */
	static readonly DESCRIBE_FEATURE_TRANSFORMATION =
		"personalize:DescribeFeatureTransformation";
	/** [Read] personalize:DescribeFilter */
	static readonly DESCRIBE_FILTER = "personalize:DescribeFilter";
	/** [Read] personalize:DescribeMetricAttribution */
	static readonly DESCRIBE_METRIC_ATTRIBUTION =
		"personalize:DescribeMetricAttribution";
	/** [Read] personalize:DescribeRecipe */
	static readonly DESCRIBE_RECIPE = "personalize:DescribeRecipe";
	/** [Read] personalize:DescribeRecommender */
	static readonly DESCRIBE_RECOMMENDER = "personalize:DescribeRecommender";
	/** [Read] personalize:DescribeSchema */
	static readonly DESCRIBE_SCHEMA = "personalize:DescribeSchema";
	/** [Read] personalize:DescribeSolution */
	static readonly DESCRIBE_SOLUTION = "personalize:DescribeSolution";
	/** [Read] personalize:DescribeSolutionVersion */
	static readonly DESCRIBE_SOLUTION_VERSION =
		"personalize:DescribeSolutionVersion";
	/** [Read] personalize:GetActionRecommendations */
	static readonly GET_ACTION_RECOMMENDATIONS =
		"personalize:GetActionRecommendations";
	/** [Read] personalize:GetDataInsights */
	static readonly GET_DATA_INSIGHTS = "personalize:GetDataInsights";
	/** [Read] personalize:GetPersonalizedRanking */
	static readonly GET_PERSONALIZED_RANKING =
		"personalize:GetPersonalizedRanking";
	/** [Read] personalize:GetRecommendations */
	static readonly GET_RECOMMENDATIONS = "personalize:GetRecommendations";
	/** [Read] personalize:GetSolutionMetrics */
	static readonly GET_SOLUTION_METRICS = "personalize:GetSolutionMetrics";
	/** [List] personalize:ListBatchInferenceJobs */
	static readonly LIST_BATCH_INFERENCE_JOBS =
		"personalize:ListBatchInferenceJobs";
	/** [List] personalize:ListBatchSegmentJobs */
	static readonly LIST_BATCH_SEGMENT_JOBS = "personalize:ListBatchSegmentJobs";
	/** [List] personalize:ListCampaigns */
	static readonly LIST_CAMPAIGNS = "personalize:ListCampaigns";
	/** [List] personalize:ListDataDeletionJobs */
	static readonly LIST_DATA_DELETION_JOBS = "personalize:ListDataDeletionJobs";
	/** [List] personalize:ListDataInsightsJobs */
	static readonly LIST_DATA_INSIGHTS_JOBS = "personalize:ListDataInsightsJobs";
	/** [List] personalize:ListDatasetExportJobs */
	static readonly LIST_DATASET_EXPORT_JOBS =
		"personalize:ListDatasetExportJobs";
	/** [List] personalize:ListDatasetGroups */
	static readonly LIST_DATASET_GROUPS = "personalize:ListDatasetGroups";
	/** [List] personalize:ListDatasetImportJobs */
	static readonly LIST_DATASET_IMPORT_JOBS =
		"personalize:ListDatasetImportJobs";
	/** [List] personalize:ListDatasets */
	static readonly LIST_DATASETS = "personalize:ListDatasets";
	/** [List] personalize:ListEventTrackers */
	static readonly LIST_EVENT_TRACKERS = "personalize:ListEventTrackers";
	/** [List] personalize:ListFilters */
	static readonly LIST_FILTERS = "personalize:ListFilters";
	/** [List] personalize:ListMetricAttributionMetrics */
	static readonly LIST_METRIC_ATTRIBUTION_METRICS =
		"personalize:ListMetricAttributionMetrics";
	/** [List] personalize:ListMetricAttributions */
	static readonly LIST_METRIC_ATTRIBUTIONS =
		"personalize:ListMetricAttributions";
	/** [List] personalize:ListRecipes */
	static readonly LIST_RECIPES = "personalize:ListRecipes";
	/** [List] personalize:ListRecommenders */
	static readonly LIST_RECOMMENDERS = "personalize:ListRecommenders";
	/** [List] personalize:ListSchemas */
	static readonly LIST_SCHEMAS = "personalize:ListSchemas";
	/** [List] personalize:ListSolutionVersions */
	static readonly LIST_SOLUTION_VERSIONS = "personalize:ListSolutionVersions";
	/** [List] personalize:ListSolutions */
	static readonly LIST_SOLUTIONS = "personalize:ListSolutions";
	/** [List] personalize:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "personalize:ListTagsForResource";
	/** [Write] personalize:PutActionInteractions */
	static readonly PUT_ACTION_INTERACTIONS = "personalize:PutActionInteractions";
	/** [Write] personalize:PutActions */
	static readonly PUT_ACTIONS = "personalize:PutActions";
	/** [Write] personalize:PutEvents */
	static readonly PUT_EVENTS = "personalize:PutEvents";
	/** [Write] personalize:PutItems */
	static readonly PUT_ITEMS = "personalize:PutItems";
	/** [Write] personalize:PutUsers */
	static readonly PUT_USERS = "personalize:PutUsers";
	/** [Write] personalize:StartRecommender */
	static readonly START_RECOMMENDER = "personalize:StartRecommender";
	/** [Write] personalize:StopRecommender */
	static readonly STOP_RECOMMENDER = "personalize:StopRecommender";
	/** [Write] personalize:StopSolutionVersionCreation */
	static readonly STOP_SOLUTION_VERSION_CREATION =
		"personalize:StopSolutionVersionCreation";
	/** [Tagging] personalize:TagResource */
	static readonly TAG_RESOURCE = "personalize:TagResource";
	/** [Tagging] personalize:UntagResource */
	static readonly UNTAG_RESOURCE = "personalize:UntagResource";
	/** [Write] personalize:UpdateCampaign */
	static readonly UPDATE_CAMPAIGN = "personalize:UpdateCampaign";
	/** [Write] personalize:UpdateDataset */
	static readonly UPDATE_DATASET = "personalize:UpdateDataset";
	/** [Write] personalize:UpdateMetricAttribution */
	static readonly UPDATE_METRIC_ATTRIBUTION =
		"personalize:UpdateMetricAttribution";
	/** [Write] personalize:UpdateRecommender */
	static readonly UPDATE_RECOMMENDER = "personalize:UpdateRecommender";
	/** [Write] personalize:UpdateSolution */
	static readonly UPDATE_SOLUTION = "personalize:UpdateSolution";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PersonalizeActions.DESCRIBE_ALGORITHM,
		PersonalizeActions.DESCRIBE_BATCH_INFERENCE_JOB,
		PersonalizeActions.DESCRIBE_BATCH_SEGMENT_JOB,
		PersonalizeActions.DESCRIBE_CAMPAIGN,
		PersonalizeActions.DESCRIBE_DATA_DELETION_JOB,
		PersonalizeActions.DESCRIBE_DATA_INSIGHTS_JOB,
		PersonalizeActions.DESCRIBE_DATASET,
		PersonalizeActions.DESCRIBE_DATASET_EXPORT_JOB,
		PersonalizeActions.DESCRIBE_DATASET_GROUP,
		PersonalizeActions.DESCRIBE_DATASET_IMPORT_JOB,
		PersonalizeActions.DESCRIBE_EVENT_TRACKER,
		PersonalizeActions.DESCRIBE_FEATURE_TRANSFORMATION,
		PersonalizeActions.DESCRIBE_FILTER,
		PersonalizeActions.DESCRIBE_METRIC_ATTRIBUTION,
		PersonalizeActions.DESCRIBE_RECIPE,
		PersonalizeActions.DESCRIBE_RECOMMENDER,
		PersonalizeActions.DESCRIBE_SCHEMA,
		PersonalizeActions.DESCRIBE_SOLUTION,
		PersonalizeActions.DESCRIBE_SOLUTION_VERSION,
		PersonalizeActions.GET_ACTION_RECOMMENDATIONS,
		PersonalizeActions.GET_DATA_INSIGHTS,
		PersonalizeActions.GET_PERSONALIZED_RANKING,
		PersonalizeActions.GET_RECOMMENDATIONS,
		PersonalizeActions.GET_SOLUTION_METRICS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PersonalizeActions.CREATE_BATCH_INFERENCE_JOB,
		PersonalizeActions.CREATE_BATCH_SEGMENT_JOB,
		PersonalizeActions.CREATE_CAMPAIGN,
		PersonalizeActions.CREATE_DATA_DELETION_JOB,
		PersonalizeActions.CREATE_DATA_INSIGHTS_JOB,
		PersonalizeActions.CREATE_DATASET,
		PersonalizeActions.CREATE_DATASET_EXPORT_JOB,
		PersonalizeActions.CREATE_DATASET_GROUP,
		PersonalizeActions.CREATE_DATASET_IMPORT_JOB,
		PersonalizeActions.CREATE_EVENT_TRACKER,
		PersonalizeActions.CREATE_FILTER,
		PersonalizeActions.CREATE_METRIC_ATTRIBUTION,
		PersonalizeActions.CREATE_RECOMMENDER,
		PersonalizeActions.CREATE_SCHEMA,
		PersonalizeActions.CREATE_SOLUTION,
		PersonalizeActions.CREATE_SOLUTION_VERSION,
		PersonalizeActions.DELETE_CAMPAIGN,
		PersonalizeActions.DELETE_DATASET,
		PersonalizeActions.DELETE_DATASET_GROUP,
		PersonalizeActions.DELETE_EVENT_TRACKER,
		PersonalizeActions.DELETE_FILTER,
		PersonalizeActions.DELETE_METRIC_ATTRIBUTION,
		PersonalizeActions.DELETE_RECOMMENDER,
		PersonalizeActions.DELETE_SCHEMA,
		PersonalizeActions.DELETE_SOLUTION,
		PersonalizeActions.PUT_ACTION_INTERACTIONS,
		PersonalizeActions.PUT_ACTIONS,
		PersonalizeActions.PUT_EVENTS,
		PersonalizeActions.PUT_ITEMS,
		PersonalizeActions.PUT_USERS,
		PersonalizeActions.START_RECOMMENDER,
		PersonalizeActions.STOP_RECOMMENDER,
		PersonalizeActions.STOP_SOLUTION_VERSION_CREATION,
		PersonalizeActions.UPDATE_CAMPAIGN,
		PersonalizeActions.UPDATE_DATASET,
		PersonalizeActions.UPDATE_METRIC_ATTRIBUTION,
		PersonalizeActions.UPDATE_RECOMMENDER,
		PersonalizeActions.UPDATE_SOLUTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		PersonalizeActions.LIST_BATCH_INFERENCE_JOBS,
		PersonalizeActions.LIST_BATCH_SEGMENT_JOBS,
		PersonalizeActions.LIST_CAMPAIGNS,
		PersonalizeActions.LIST_DATA_DELETION_JOBS,
		PersonalizeActions.LIST_DATA_INSIGHTS_JOBS,
		PersonalizeActions.LIST_DATASET_EXPORT_JOBS,
		PersonalizeActions.LIST_DATASET_GROUPS,
		PersonalizeActions.LIST_DATASET_IMPORT_JOBS,
		PersonalizeActions.LIST_DATASETS,
		PersonalizeActions.LIST_EVENT_TRACKERS,
		PersonalizeActions.LIST_FILTERS,
		PersonalizeActions.LIST_METRIC_ATTRIBUTION_METRICS,
		PersonalizeActions.LIST_METRIC_ATTRIBUTIONS,
		PersonalizeActions.LIST_RECIPES,
		PersonalizeActions.LIST_RECOMMENDERS,
		PersonalizeActions.LIST_SCHEMAS,
		PersonalizeActions.LIST_SOLUTION_VERSIONS,
		PersonalizeActions.LIST_SOLUTIONS,
		PersonalizeActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		PersonalizeActions.TAG_RESOURCE,
		PersonalizeActions.UNTAG_RESOURCE,
	];
}

const AlgorithmArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:::algorithm/(?<resourceId>[^:/?]+)$",
);
const BatchInferenceJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):batch-inference-job/(?<resourceId>[^:/?]+)$",
);
const BatchSegmentJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):batch-segment-job/(?<resourceId>[^:/?]+)$",
);
const CampaignArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):campaign/(?<resourceId>[^:/?]+)$",
);
const DataDeletionJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):data-deletion-job/(?<resourceId>[^:/?]+)$",
);
const DataInsightsJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):data-insights-job/(?<resourceId>[^:/?]+)$",
);
const DatasetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):dataset/(?<resourceId>[^:/?]+)$",
);
const DatasetExportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):dataset-export-job/(?<resourceId>[^:/?]+)$",
);
const DatasetGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):dataset-group/(?<resourceId>[^:/?]+)$",
);
const DatasetImportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):dataset-import-job/(?<resourceId>[^:/?]+)$",
);
const EventTrackerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):event-tracker/(?<resourceId>[^:/?]+)$",
);
const FeatureTransformationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:::feature-transformation/(?<resourceId>[^:/?]+)$",
);
const FilterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):filter/(?<resourceId>[^:/?]+)$",
);
const MetricAttributionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):metric-attribution/(?<resourceId>[^:/?]+)$",
);
const RecipeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:::recipe/(?<resourceId>[^:/?]+)$",
);
const RecommenderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):recommender/(?<resourceId>[^:/?]+)$",
);
const SchemaArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):schema/(?<resourceId>[^:/?]+)$",
);
const SolutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):solution/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for personalize resources.
 */
export class PersonalizeResources {
	/**
	 * Builds an ARN for the algorithm resource.
	 */
	static algorithm(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:::algorithm/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the algorithm resource.
	 */
	static isValidAlgorithmArn(arn: string): boolean {
		return AlgorithmArnRegex.test(arn);
	}

	/**
	 * Parses a algorithm ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAlgorithmArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AlgorithmArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid algorithm ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the batchInferenceJob resource.
	 */
	static batchInferenceJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:batch-inference-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the batchInferenceJob resource.
	 */
	static isValidBatchInferenceJobArn(arn: string): boolean {
		return BatchInferenceJobArnRegex.test(arn);
	}

	/**
	 * Parses a batchInferenceJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBatchInferenceJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = BatchInferenceJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid batchInferenceJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the batchSegmentJob resource.
	 */
	static batchSegmentJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:batch-segment-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the batchSegmentJob resource.
	 */
	static isValidBatchSegmentJobArn(arn: string): boolean {
		return BatchSegmentJobArnRegex.test(arn);
	}

	/**
	 * Parses a batchSegmentJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBatchSegmentJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = BatchSegmentJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid batchSegmentJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the campaign resource.
	 */
	static campaign(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:campaign/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the campaign resource.
	 */
	static isValidCampaignArn(arn: string): boolean {
		return CampaignArnRegex.test(arn);
	}

	/**
	 * Parses a campaign ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCampaignArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = CampaignArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid campaign ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the dataDeletionJob resource.
	 */
	static dataDeletionJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:data-deletion-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataDeletionJob resource.
	 */
	static isValidDataDeletionJobArn(arn: string): boolean {
		return DataDeletionJobArnRegex.test(arn);
	}

	/**
	 * Parses a dataDeletionJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataDeletionJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DataDeletionJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataDeletionJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the dataInsightsJob resource.
	 */
	static dataInsightsJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:data-insights-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataInsightsJob resource.
	 */
	static isValidDataInsightsJobArn(arn: string): boolean {
		return DataInsightsJobArnRegex.test(arn);
	}

	/**
	 * Parses a dataInsightsJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataInsightsJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DataInsightsJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataInsightsJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.resourceId}`;
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
		resourceId: string;
	} {
		const match = DatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the datasetExportJob resource.
	 */
	static datasetExportJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:dataset-export-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the datasetExportJob resource.
	 */
	static isValidDatasetExportJobArn(arn: string): boolean {
		return DatasetExportJobArnRegex.test(arn);
	}

	/**
	 * Parses a datasetExportJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetExportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DatasetExportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datasetExportJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the datasetGroup resource.
	 */
	static datasetGroup(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:dataset-group/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the datasetGroup resource.
	 */
	static isValidDatasetGroupArn(arn: string): boolean {
		return DatasetGroupArnRegex.test(arn);
	}

	/**
	 * Parses a datasetGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DatasetGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datasetGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the datasetImportJob resource.
	 */
	static datasetImportJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:dataset-import-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the datasetImportJob resource.
	 */
	static isValidDatasetImportJobArn(arn: string): boolean {
		return DatasetImportJobArnRegex.test(arn);
	}

	/**
	 * Parses a datasetImportJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetImportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DatasetImportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datasetImportJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the eventTracker resource.
	 */
	static eventTracker(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:event-tracker/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the eventTracker resource.
	 */
	static isValidEventTrackerArn(arn: string): boolean {
		return EventTrackerArnRegex.test(arn);
	}

	/**
	 * Parses a eventTracker ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventTrackerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = EventTrackerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid eventTracker ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the featureTransformation resource.
	 */
	static featureTransformation(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:::feature-transformation/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the featureTransformation resource.
	 */
	static isValidFeatureTransformationArn(arn: string): boolean {
		return FeatureTransformationArnRegex.test(arn);
	}

	/**
	 * Parses a featureTransformation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFeatureTransformationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = FeatureTransformationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid featureTransformation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the filter resource.
	 */
	static filter(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:filter/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the filter resource.
	 */
	static isValidFilterArn(arn: string): boolean {
		return FilterArnRegex.test(arn);
	}

	/**
	 * Parses a filter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFilterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = FilterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid filter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the metricAttribution resource.
	 */
	static metricAttribution(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:metric-attribution/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the metricAttribution resource.
	 */
	static isValidMetricAttributionArn(arn: string): boolean {
		return MetricAttributionArnRegex.test(arn);
	}

	/**
	 * Parses a metricAttribution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMetricAttributionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = MetricAttributionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid metricAttribution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the recipe resource.
	 */
	static recipe(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:::recipe/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the recipe resource.
	 */
	static isValidRecipeArn(arn: string): boolean {
		return RecipeArnRegex.test(arn);
	}

	/**
	 * Parses a recipe ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecipeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = RecipeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid recipe ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the recommender resource.
	 */
	static recommender(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:recommender/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the recommender resource.
	 */
	static isValidRecommenderArn(arn: string): boolean {
		return RecommenderArnRegex.test(arn);
	}

	/**
	 * Parses a recommender ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecommenderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = RecommenderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid recommender ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the schema resource.
	 */
	static schema(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:schema/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the schema resource.
	 */
	static isValidSchemaArn(arn: string): boolean {
		return SchemaArnRegex.test(arn);
	}

	/**
	 * Parses a schema ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSchemaArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = SchemaArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid schema ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the solution resource.
	 */
	static solution(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:personalize:${props.region ?? "*"}:${props.account ?? "*"}:solution/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the solution resource.
	 */
	static isValidSolutionArn(arn: string): boolean {
		return SolutionArnRegex.test(arn);
	}

	/**
	 * Parses a solution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSolutionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = SolutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid solution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for personalize.
 */
export class PersonalizeOperations {
	/** IAM actions required for the CreateBatchInferenceJob API call. */
	static readonly CREATE_BATCH_INFERENCE_JOB: string[] = [
		"personalize:CreateBatchInferenceJob",
		"iam:PassRole",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateBatchSegmentJob API call. */
	static readonly CREATE_BATCH_SEGMENT_JOB: string[] = [
		"personalize:CreateBatchSegmentJob",
		"iam:PassRole",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateCampaign API call. */
	static readonly CREATE_CAMPAIGN: string[] = [
		"personalize:CreateCampaign",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateDataDeletionJob API call. */
	static readonly CREATE_DATA_DELETION_JOB: string[] = [
		"personalize:CreateDataDeletionJob",
		"iam:PassRole",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CREATE_DATASET: string[] = [
		"personalize:CreateDataset",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateDatasetExportJob API call. */
	static readonly CREATE_DATASET_EXPORT_JOB: string[] = [
		"personalize:CreateDatasetExportJob",
		"iam:PassRole",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateDatasetGroup API call. */
	static readonly CREATE_DATASET_GROUP: string[] = [
		"personalize:CreateDatasetGroup",
		"iam:PassRole",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateDatasetImportJob API call. */
	static readonly CREATE_DATASET_IMPORT_JOB: string[] = [
		"personalize:CreateDatasetImportJob",
		"iam:PassRole",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateEventTracker API call. */
	static readonly CREATE_EVENT_TRACKER: string[] = [
		"personalize:CreateEventTracker",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateFilter API call. */
	static readonly CREATE_FILTER: string[] = [
		"personalize:CreateFilter",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateMetricAttribution API call. */
	static readonly CREATE_METRIC_ATTRIBUTION: string[] = [
		"personalize:CreateMetricAttribution",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateRecommender API call. */
	static readonly CREATE_RECOMMENDER: string[] = [
		"personalize:CreateRecommender",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateSchema API call. */
	static readonly CREATE_SCHEMA: string[] = ["personalize:CreateSchema"];
	/** IAM actions required for the CreateSolution API call. */
	static readonly CREATE_SOLUTION: string[] = [
		"personalize:CreateSolution",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateSolutionVersion API call. */
	static readonly CREATE_SOLUTION_VERSION: string[] = [
		"personalize:CreateSolutionVersion",
		"personalize:TagResource",
	];
	/** IAM actions required for the DeleteCampaign API call. */
	static readonly DELETE_CAMPAIGN: string[] = ["personalize:DeleteCampaign"];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DELETE_DATASET: string[] = ["personalize:DeleteDataset"];
	/** IAM actions required for the DeleteDatasetGroup API call. */
	static readonly DELETE_DATASET_GROUP: string[] = [
		"personalize:DeleteDatasetGroup",
	];
	/** IAM actions required for the DeleteEventTracker API call. */
	static readonly DELETE_EVENT_TRACKER: string[] = [
		"personalize:DeleteEventTracker",
	];
	/** IAM actions required for the DeleteFilter API call. */
	static readonly DELETE_FILTER: string[] = ["personalize:DeleteFilter"];
	/** IAM actions required for the DeleteMetricAttribution API call. */
	static readonly DELETE_METRIC_ATTRIBUTION: string[] = [
		"personalize:DeleteMetricAttribution",
	];
	/** IAM actions required for the DeleteRecommender API call. */
	static readonly DELETE_RECOMMENDER: string[] = [
		"personalize:DeleteRecommender",
	];
	/** IAM actions required for the DeleteSchema API call. */
	static readonly DELETE_SCHEMA: string[] = ["personalize:DeleteSchema"];
	/** IAM actions required for the DeleteSolution API call. */
	static readonly DELETE_SOLUTION: string[] = ["personalize:DeleteSolution"];
	/** IAM actions required for the DescribeAlgorithm API call. */
	static readonly DESCRIBE_ALGORITHM: string[] = [
		"personalize:DescribeAlgorithm",
	];
	/** IAM actions required for the DescribeBatchInferenceJob API call. */
	static readonly DESCRIBE_BATCH_INFERENCE_JOB: string[] = [
		"personalize:DescribeBatchInferenceJob",
	];
	/** IAM actions required for the DescribeBatchSegmentJob API call. */
	static readonly DESCRIBE_BATCH_SEGMENT_JOB: string[] = [
		"personalize:DescribeBatchSegmentJob",
	];
	/** IAM actions required for the DescribeCampaign API call. */
	static readonly DESCRIBE_CAMPAIGN: string[] = [
		"personalize:DescribeCampaign",
	];
	/** IAM actions required for the DescribeDataDeletionJob API call. */
	static readonly DESCRIBE_DATA_DELETION_JOB: string[] = [
		"personalize:DescribeDataDeletionJob",
	];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DESCRIBE_DATASET: string[] = ["personalize:DescribeDataset"];
	/** IAM actions required for the DescribeDatasetExportJob API call. */
	static readonly DESCRIBE_DATASET_EXPORT_JOB: string[] = [
		"personalize:DescribeDatasetExportJob",
	];
	/** IAM actions required for the DescribeDatasetGroup API call. */
	static readonly DESCRIBE_DATASET_GROUP: string[] = [
		"personalize:DescribeDatasetGroup",
	];
	/** IAM actions required for the DescribeDatasetImportJob API call. */
	static readonly DESCRIBE_DATASET_IMPORT_JOB: string[] = [
		"personalize:DescribeDatasetImportJob",
	];
	/** IAM actions required for the DescribeEventTracker API call. */
	static readonly DESCRIBE_EVENT_TRACKER: string[] = [
		"personalize:DescribeEventTracker",
	];
	/** IAM actions required for the DescribeFeatureTransformation API call. */
	static readonly DESCRIBE_FEATURE_TRANSFORMATION: string[] = [
		"personalize:DescribeFeatureTransformation",
	];
	/** IAM actions required for the DescribeFilter API call. */
	static readonly DESCRIBE_FILTER: string[] = ["personalize:DescribeFilter"];
	/** IAM actions required for the DescribeMetricAttribution API call. */
	static readonly DESCRIBE_METRIC_ATTRIBUTION: string[] = [
		"personalize:DescribeMetricAttribution",
	];
	/** IAM actions required for the DescribeRecipe API call. */
	static readonly DESCRIBE_RECIPE: string[] = ["personalize:DescribeRecipe"];
	/** IAM actions required for the DescribeRecommender API call. */
	static readonly DESCRIBE_RECOMMENDER: string[] = [
		"personalize:DescribeRecommender",
	];
	/** IAM actions required for the DescribeSchema API call. */
	static readonly DESCRIBE_SCHEMA: string[] = ["personalize:DescribeSchema"];
	/** IAM actions required for the DescribeSolution API call. */
	static readonly DESCRIBE_SOLUTION: string[] = [
		"personalize:DescribeSolution",
	];
	/** IAM actions required for the DescribeSolutionVersion API call. */
	static readonly DESCRIBE_SOLUTION_VERSION: string[] = [
		"personalize:DescribeSolutionVersion",
	];
	/** IAM actions required for the GetActionRecommendations API call. */
	static readonly GET_ACTION_RECOMMENDATIONS: string[] = [
		"personalize:GetActionRecommendations",
	];
	/** IAM actions required for the GetPersonalizedRanking API call. */
	static readonly GET_PERSONALIZED_RANKING: string[] = [
		"personalize:GetPersonalizedRanking",
	];
	/** IAM actions required for the GetRecommendations API call. */
	static readonly GET_RECOMMENDATIONS: string[] = [
		"personalize:GetRecommendations",
	];
	/** IAM actions required for the GetSolutionMetrics API call. */
	static readonly GET_SOLUTION_METRICS: string[] = [
		"personalize:GetSolutionMetrics",
	];
	/** IAM actions required for the ListBatchInferenceJobs API call. */
	static readonly LIST_BATCH_INFERENCE_JOBS: string[] = [
		"personalize:ListBatchInferenceJobs",
	];
	/** IAM actions required for the ListBatchSegmentJobs API call. */
	static readonly LIST_BATCH_SEGMENT_JOBS: string[] = [
		"personalize:ListBatchSegmentJobs",
	];
	/** IAM actions required for the ListCampaigns API call. */
	static readonly LIST_CAMPAIGNS: string[] = ["personalize:ListCampaigns"];
	/** IAM actions required for the ListDataDeletionJobs API call. */
	static readonly LIST_DATA_DELETION_JOBS: string[] = [
		"personalize:ListDataDeletionJobs",
	];
	/** IAM actions required for the ListDatasetExportJobs API call. */
	static readonly LIST_DATASET_EXPORT_JOBS: string[] = [
		"personalize:ListDatasetExportJobs",
	];
	/** IAM actions required for the ListDatasetGroups API call. */
	static readonly LIST_DATASET_GROUPS: string[] = [
		"personalize:ListDatasetGroups",
	];
	/** IAM actions required for the ListDatasetImportJobs API call. */
	static readonly LIST_DATASET_IMPORT_JOBS: string[] = [
		"personalize:ListDatasetImportJobs",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly LIST_DATASETS: string[] = ["personalize:ListDatasets"];
	/** IAM actions required for the ListEventTrackers API call. */
	static readonly LIST_EVENT_TRACKERS: string[] = [
		"personalize:ListEventTrackers",
	];
	/** IAM actions required for the ListFilters API call. */
	static readonly LIST_FILTERS: string[] = ["personalize:ListFilters"];
	/** IAM actions required for the ListMetricAttributionMetrics API call. */
	static readonly LIST_METRIC_ATTRIBUTION_METRICS: string[] = [
		"personalize:ListMetricAttributionMetrics",
	];
	/** IAM actions required for the ListMetricAttributions API call. */
	static readonly LIST_METRIC_ATTRIBUTIONS: string[] = [
		"personalize:ListMetricAttributions",
	];
	/** IAM actions required for the ListRecipes API call. */
	static readonly LIST_RECIPES: string[] = ["personalize:ListRecipes"];
	/** IAM actions required for the ListRecommenders API call. */
	static readonly LIST_RECOMMENDERS: string[] = [
		"personalize:ListRecommenders",
	];
	/** IAM actions required for the ListSchemas API call. */
	static readonly LIST_SCHEMAS: string[] = ["personalize:ListSchemas"];
	/** IAM actions required for the ListSolutionVersions API call. */
	static readonly LIST_SOLUTION_VERSIONS: string[] = [
		"personalize:ListSolutionVersions",
	];
	/** IAM actions required for the ListSolutions API call. */
	static readonly LIST_SOLUTIONS: string[] = ["personalize:ListSolutions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"personalize:ListTagsForResource",
	];
	/** IAM actions required for the PutActionInteractions API call. */
	static readonly PUT_ACTION_INTERACTIONS: string[] = [
		"personalize:PutActionInteractions",
	];
	/** IAM actions required for the PutActions API call. */
	static readonly PUT_ACTIONS: string[] = ["personalize:PutActions"];
	/** IAM actions required for the PutEvents API call. */
	static readonly PUT_EVENTS: string[] = ["personalize:PutEvents"];
	/** IAM actions required for the PutItems API call. */
	static readonly PUT_ITEMS: string[] = ["personalize:PutItems"];
	/** IAM actions required for the PutUsers API call. */
	static readonly PUT_USERS: string[] = ["personalize:PutUsers"];
	/** IAM actions required for the StartRecommender API call. */
	static readonly START_RECOMMENDER: string[] = [
		"personalize:StartRecommender",
	];
	/** IAM actions required for the StopRecommender API call. */
	static readonly STOP_RECOMMENDER: string[] = ["personalize:StopRecommender"];
	/** IAM actions required for the StopSolutionVersionCreation API call. */
	static readonly STOP_SOLUTION_VERSION_CREATION: string[] = [
		"personalize:StopSolutionVersionCreation",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["personalize:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["personalize:UntagResource"];
	/** IAM actions required for the UpdateCampaign API call. */
	static readonly UPDATE_CAMPAIGN: string[] = ["personalize:UpdateCampaign"];
	/** IAM actions required for the UpdateDataset API call. */
	static readonly UPDATE_DATASET: string[] = ["personalize:UpdateDataset"];
	/** IAM actions required for the UpdateMetricAttribution API call. */
	static readonly UPDATE_METRIC_ATTRIBUTION: string[] = [
		"iam:PassRole",
		"personalize:UpdateMetricAttribution",
	];
	/** IAM actions required for the UpdateRecommender API call. */
	static readonly UPDATE_RECOMMENDER: string[] = [
		"personalize:UpdateRecommender",
	];
	/** IAM actions required for the UpdateSolution API call. */
	static readonly UPDATE_SOLUTION: string[] = ["personalize:UpdateSolution"];
}

/**
 * Condition key constants and builders for personalize.
 */
export class PersonalizeConditions {
	/** Condition keys applicable to the CreateBatchInferenceJob action. */
	static readonly CREATE_BATCH_INFERENCE_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBatchSegmentJob action. */
	static readonly CREATE_BATCH_SEGMENT_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCampaign action. */
	static readonly CREATE_CAMPAIGN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataDeletionJob action. */
	static readonly CREATE_DATA_DELETION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CREATE_DATASET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatasetExportJob action. */
	static readonly CREATE_DATASET_EXPORT_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatasetGroup action. */
	static readonly CREATE_DATASET_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatasetImportJob action. */
	static readonly CREATE_DATASET_IMPORT_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventTracker action. */
	static readonly CREATE_EVENT_TRACKER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFilter action. */
	static readonly CREATE_FILTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecommender action. */
	static readonly CREATE_RECOMMENDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSolution action. */
	static readonly CREATE_SOLUTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSolutionVersion action. */
	static readonly CREATE_SOLUTION_VERSION_CONDITION_KEYS: string[] = [
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
