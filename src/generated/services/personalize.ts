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
	static readonly CreateBatchInferenceJob =
		"personalize:CreateBatchInferenceJob";
	/** [Write] personalize:CreateBatchSegmentJob */
	static readonly CreateBatchSegmentJob = "personalize:CreateBatchSegmentJob";
	/** [Write] personalize:CreateCampaign */
	static readonly CreateCampaign = "personalize:CreateCampaign";
	/** [Write] personalize:CreateDataDeletionJob */
	static readonly CreateDataDeletionJob = "personalize:CreateDataDeletionJob";
	/** [Write] personalize:CreateDataInsightsJob */
	static readonly CreateDataInsightsJob = "personalize:CreateDataInsightsJob";
	/** [Write] personalize:CreateDataset */
	static readonly CreateDataset = "personalize:CreateDataset";
	/** [Write] personalize:CreateDatasetExportJob */
	static readonly CreateDatasetExportJob = "personalize:CreateDatasetExportJob";
	/** [Write] personalize:CreateDatasetGroup */
	static readonly CreateDatasetGroup = "personalize:CreateDatasetGroup";
	/** [Write] personalize:CreateDatasetImportJob */
	static readonly CreateDatasetImportJob = "personalize:CreateDatasetImportJob";
	/** [Write] personalize:CreateEventTracker */
	static readonly CreateEventTracker = "personalize:CreateEventTracker";
	/** [Write] personalize:CreateFilter */
	static readonly CreateFilter = "personalize:CreateFilter";
	/** [Write] personalize:CreateMetricAttribution */
	static readonly CreateMetricAttribution =
		"personalize:CreateMetricAttribution";
	/** [Write] personalize:CreateRecommender */
	static readonly CreateRecommender = "personalize:CreateRecommender";
	/** [Write] personalize:CreateSchema */
	static readonly CreateSchema = "personalize:CreateSchema";
	/** [Write] personalize:CreateSolution */
	static readonly CreateSolution = "personalize:CreateSolution";
	/** [Write] personalize:CreateSolutionVersion */
	static readonly CreateSolutionVersion = "personalize:CreateSolutionVersion";
	/** [Write] personalize:DeleteCampaign */
	static readonly DeleteCampaign = "personalize:DeleteCampaign";
	/** [Write] personalize:DeleteDataset */
	static readonly DeleteDataset = "personalize:DeleteDataset";
	/** [Write] personalize:DeleteDatasetGroup */
	static readonly DeleteDatasetGroup = "personalize:DeleteDatasetGroup";
	/** [Write] personalize:DeleteEventTracker */
	static readonly DeleteEventTracker = "personalize:DeleteEventTracker";
	/** [Write] personalize:DeleteFilter */
	static readonly DeleteFilter = "personalize:DeleteFilter";
	/** [Write] personalize:DeleteMetricAttribution */
	static readonly DeleteMetricAttribution =
		"personalize:DeleteMetricAttribution";
	/** [Write] personalize:DeleteRecommender */
	static readonly DeleteRecommender = "personalize:DeleteRecommender";
	/** [Write] personalize:DeleteSchema */
	static readonly DeleteSchema = "personalize:DeleteSchema";
	/** [Write] personalize:DeleteSolution */
	static readonly DeleteSolution = "personalize:DeleteSolution";
	/** [Read] personalize:DescribeAlgorithm */
	static readonly DescribeAlgorithm = "personalize:DescribeAlgorithm";
	/** [Read] personalize:DescribeBatchInferenceJob */
	static readonly DescribeBatchInferenceJob =
		"personalize:DescribeBatchInferenceJob";
	/** [Read] personalize:DescribeBatchSegmentJob */
	static readonly DescribeBatchSegmentJob =
		"personalize:DescribeBatchSegmentJob";
	/** [Read] personalize:DescribeCampaign */
	static readonly DescribeCampaign = "personalize:DescribeCampaign";
	/** [Read] personalize:DescribeDataDeletionJob */
	static readonly DescribeDataDeletionJob =
		"personalize:DescribeDataDeletionJob";
	/** [Read] personalize:DescribeDataInsightsJob */
	static readonly DescribeDataInsightsJob =
		"personalize:DescribeDataInsightsJob";
	/** [Read] personalize:DescribeDataset */
	static readonly DescribeDataset = "personalize:DescribeDataset";
	/** [Read] personalize:DescribeDatasetExportJob */
	static readonly DescribeDatasetExportJob =
		"personalize:DescribeDatasetExportJob";
	/** [Read] personalize:DescribeDatasetGroup */
	static readonly DescribeDatasetGroup = "personalize:DescribeDatasetGroup";
	/** [Read] personalize:DescribeDatasetImportJob */
	static readonly DescribeDatasetImportJob =
		"personalize:DescribeDatasetImportJob";
	/** [Read] personalize:DescribeEventTracker */
	static readonly DescribeEventTracker = "personalize:DescribeEventTracker";
	/** [Read] personalize:DescribeFeatureTransformation */
	static readonly DescribeFeatureTransformation =
		"personalize:DescribeFeatureTransformation";
	/** [Read] personalize:DescribeFilter */
	static readonly DescribeFilter = "personalize:DescribeFilter";
	/** [Read] personalize:DescribeMetricAttribution */
	static readonly DescribeMetricAttribution =
		"personalize:DescribeMetricAttribution";
	/** [Read] personalize:DescribeRecipe */
	static readonly DescribeRecipe = "personalize:DescribeRecipe";
	/** [Read] personalize:DescribeRecommender */
	static readonly DescribeRecommender = "personalize:DescribeRecommender";
	/** [Read] personalize:DescribeSchema */
	static readonly DescribeSchema = "personalize:DescribeSchema";
	/** [Read] personalize:DescribeSolution */
	static readonly DescribeSolution = "personalize:DescribeSolution";
	/** [Read] personalize:DescribeSolutionVersion */
	static readonly DescribeSolutionVersion =
		"personalize:DescribeSolutionVersion";
	/** [Read] personalize:GetActionRecommendations */
	static readonly actionGetActionRecommendations =
		"personalize:GetActionRecommendations";
	/** [Read] personalize:GetDataInsights */
	static readonly actionGetDataInsights = "personalize:GetDataInsights";
	/** [Read] personalize:GetPersonalizedRanking */
	static readonly actionGetPersonalizedRanking =
		"personalize:GetPersonalizedRanking";
	/** [Read] personalize:GetRecommendations */
	static readonly actionGetRecommendations = "personalize:GetRecommendations";
	/** [Read] personalize:GetSolutionMetrics */
	static readonly actionGetSolutionMetrics = "personalize:GetSolutionMetrics";
	/** [List] personalize:ListBatchInferenceJobs */
	static readonly ListBatchInferenceJobs = "personalize:ListBatchInferenceJobs";
	/** [List] personalize:ListBatchSegmentJobs */
	static readonly ListBatchSegmentJobs = "personalize:ListBatchSegmentJobs";
	/** [List] personalize:ListCampaigns */
	static readonly ListCampaigns = "personalize:ListCampaigns";
	/** [List] personalize:ListDataDeletionJobs */
	static readonly ListDataDeletionJobs = "personalize:ListDataDeletionJobs";
	/** [List] personalize:ListDataInsightsJobs */
	static readonly ListDataInsightsJobs = "personalize:ListDataInsightsJobs";
	/** [List] personalize:ListDatasetExportJobs */
	static readonly ListDatasetExportJobs = "personalize:ListDatasetExportJobs";
	/** [List] personalize:ListDatasetGroups */
	static readonly ListDatasetGroups = "personalize:ListDatasetGroups";
	/** [List] personalize:ListDatasetImportJobs */
	static readonly ListDatasetImportJobs = "personalize:ListDatasetImportJobs";
	/** [List] personalize:ListDatasets */
	static readonly ListDatasets = "personalize:ListDatasets";
	/** [List] personalize:ListEventTrackers */
	static readonly ListEventTrackers = "personalize:ListEventTrackers";
	/** [List] personalize:ListFilters */
	static readonly ListFilters = "personalize:ListFilters";
	/** [List] personalize:ListMetricAttributionMetrics */
	static readonly ListMetricAttributionMetrics =
		"personalize:ListMetricAttributionMetrics";
	/** [List] personalize:ListMetricAttributions */
	static readonly ListMetricAttributions = "personalize:ListMetricAttributions";
	/** [List] personalize:ListRecipes */
	static readonly ListRecipes = "personalize:ListRecipes";
	/** [List] personalize:ListRecommenders */
	static readonly ListRecommenders = "personalize:ListRecommenders";
	/** [List] personalize:ListSchemas */
	static readonly ListSchemas = "personalize:ListSchemas";
	/** [List] personalize:ListSolutionVersions */
	static readonly ListSolutionVersions = "personalize:ListSolutionVersions";
	/** [List] personalize:ListSolutions */
	static readonly ListSolutions = "personalize:ListSolutions";
	/** [List] personalize:ListTagsForResource */
	static readonly ListTagsForResource = "personalize:ListTagsForResource";
	/** [Write] personalize:PutActionInteractions */
	static readonly PutActionInteractions = "personalize:PutActionInteractions";
	/** [Write] personalize:PutActions */
	static readonly PutActions = "personalize:PutActions";
	/** [Write] personalize:PutEvents */
	static readonly PutEvents = "personalize:PutEvents";
	/** [Write] personalize:PutItems */
	static readonly PutItems = "personalize:PutItems";
	/** [Write] personalize:PutUsers */
	static readonly PutUsers = "personalize:PutUsers";
	/** [Write] personalize:StartRecommender */
	static readonly StartRecommender = "personalize:StartRecommender";
	/** [Write] personalize:StopRecommender */
	static readonly StopRecommender = "personalize:StopRecommender";
	/** [Write] personalize:StopSolutionVersionCreation */
	static readonly StopSolutionVersionCreation =
		"personalize:StopSolutionVersionCreation";
	/** [Tagging] personalize:TagResource */
	static readonly TagResource = "personalize:TagResource";
	/** [Tagging] personalize:UntagResource */
	static readonly UntagResource = "personalize:UntagResource";
	/** [Write] personalize:UpdateCampaign */
	static readonly UpdateCampaign = "personalize:UpdateCampaign";
	/** [Write] personalize:UpdateDataset */
	static readonly UpdateDataset = "personalize:UpdateDataset";
	/** [Write] personalize:UpdateMetricAttribution */
	static readonly UpdateMetricAttribution =
		"personalize:UpdateMetricAttribution";
	/** [Write] personalize:UpdateRecommender */
	static readonly UpdateRecommender = "personalize:UpdateRecommender";
	/** [Write] personalize:UpdateSolution */
	static readonly UpdateSolution = "personalize:UpdateSolution";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PersonalizeActions.DescribeAlgorithm,
		PersonalizeActions.DescribeBatchInferenceJob,
		PersonalizeActions.DescribeBatchSegmentJob,
		PersonalizeActions.DescribeCampaign,
		PersonalizeActions.DescribeDataDeletionJob,
		PersonalizeActions.DescribeDataInsightsJob,
		PersonalizeActions.DescribeDataset,
		PersonalizeActions.DescribeDatasetExportJob,
		PersonalizeActions.DescribeDatasetGroup,
		PersonalizeActions.DescribeDatasetImportJob,
		PersonalizeActions.DescribeEventTracker,
		PersonalizeActions.DescribeFeatureTransformation,
		PersonalizeActions.DescribeFilter,
		PersonalizeActions.DescribeMetricAttribution,
		PersonalizeActions.DescribeRecipe,
		PersonalizeActions.DescribeRecommender,
		PersonalizeActions.DescribeSchema,
		PersonalizeActions.DescribeSolution,
		PersonalizeActions.DescribeSolutionVersion,
		PersonalizeActions.actionGetActionRecommendations,
		PersonalizeActions.actionGetDataInsights,
		PersonalizeActions.actionGetPersonalizedRanking,
		PersonalizeActions.actionGetRecommendations,
		PersonalizeActions.actionGetSolutionMetrics,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PersonalizeActions.CreateBatchInferenceJob,
		PersonalizeActions.CreateBatchSegmentJob,
		PersonalizeActions.CreateCampaign,
		PersonalizeActions.CreateDataDeletionJob,
		PersonalizeActions.CreateDataInsightsJob,
		PersonalizeActions.CreateDataset,
		PersonalizeActions.CreateDatasetExportJob,
		PersonalizeActions.CreateDatasetGroup,
		PersonalizeActions.CreateDatasetImportJob,
		PersonalizeActions.CreateEventTracker,
		PersonalizeActions.CreateFilter,
		PersonalizeActions.CreateMetricAttribution,
		PersonalizeActions.CreateRecommender,
		PersonalizeActions.CreateSchema,
		PersonalizeActions.CreateSolution,
		PersonalizeActions.CreateSolutionVersion,
		PersonalizeActions.DeleteCampaign,
		PersonalizeActions.DeleteDataset,
		PersonalizeActions.DeleteDatasetGroup,
		PersonalizeActions.DeleteEventTracker,
		PersonalizeActions.DeleteFilter,
		PersonalizeActions.DeleteMetricAttribution,
		PersonalizeActions.DeleteRecommender,
		PersonalizeActions.DeleteSchema,
		PersonalizeActions.DeleteSolution,
		PersonalizeActions.PutActionInteractions,
		PersonalizeActions.PutActions,
		PersonalizeActions.PutEvents,
		PersonalizeActions.PutItems,
		PersonalizeActions.PutUsers,
		PersonalizeActions.StartRecommender,
		PersonalizeActions.StopRecommender,
		PersonalizeActions.StopSolutionVersionCreation,
		PersonalizeActions.UpdateCampaign,
		PersonalizeActions.UpdateDataset,
		PersonalizeActions.UpdateMetricAttribution,
		PersonalizeActions.UpdateRecommender,
		PersonalizeActions.UpdateSolution,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		PersonalizeActions.ListBatchInferenceJobs,
		PersonalizeActions.ListBatchSegmentJobs,
		PersonalizeActions.ListCampaigns,
		PersonalizeActions.ListDataDeletionJobs,
		PersonalizeActions.ListDataInsightsJobs,
		PersonalizeActions.ListDatasetExportJobs,
		PersonalizeActions.ListDatasetGroups,
		PersonalizeActions.ListDatasetImportJobs,
		PersonalizeActions.ListDatasets,
		PersonalizeActions.ListEventTrackers,
		PersonalizeActions.ListFilters,
		PersonalizeActions.ListMetricAttributionMetrics,
		PersonalizeActions.ListMetricAttributions,
		PersonalizeActions.ListRecipes,
		PersonalizeActions.ListRecommenders,
		PersonalizeActions.ListSchemas,
		PersonalizeActions.ListSolutionVersions,
		PersonalizeActions.ListSolutions,
		PersonalizeActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		PersonalizeActions.TagResource,
		PersonalizeActions.UntagResource,
	];
}

/**
 * Properties for building a algorithm ARN.
 */
export interface PersonalizeAlgorithmArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a algorithm ARN.
 */
export interface PersonalizeAlgorithmArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a batchInferenceJob ARN.
 */
export interface PersonalizeBatchInferenceJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a batchInferenceJob ARN.
 */
export interface PersonalizeBatchInferenceJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a batchSegmentJob ARN.
 */
export interface PersonalizeBatchSegmentJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a batchSegmentJob ARN.
 */
export interface PersonalizeBatchSegmentJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a campaign ARN.
 */
export interface PersonalizeCampaignArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a campaign ARN.
 */
export interface PersonalizeCampaignArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a dataDeletionJob ARN.
 */
export interface PersonalizeDataDeletionJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dataDeletionJob ARN.
 */
export interface PersonalizeDataDeletionJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a dataInsightsJob ARN.
 */
export interface PersonalizeDataInsightsJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dataInsightsJob ARN.
 */
export interface PersonalizeDataInsightsJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a dataset ARN.
 */
export interface PersonalizeDatasetArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
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
export interface PersonalizeDatasetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a datasetExportJob ARN.
 */
export interface PersonalizeDatasetExportJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a datasetExportJob ARN.
 */
export interface PersonalizeDatasetExportJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a datasetGroup ARN.
 */
export interface PersonalizeDatasetGroupArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a datasetGroup ARN.
 */
export interface PersonalizeDatasetGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a datasetImportJob ARN.
 */
export interface PersonalizeDatasetImportJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a datasetImportJob ARN.
 */
export interface PersonalizeDatasetImportJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a eventTracker ARN.
 */
export interface PersonalizeEventTrackerArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a eventTracker ARN.
 */
export interface PersonalizeEventTrackerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a featureTransformation ARN.
 */
export interface PersonalizeFeatureTransformationArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a featureTransformation ARN.
 */
export interface PersonalizeFeatureTransformationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a filter ARN.
 */
export interface PersonalizeFilterArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a filter ARN.
 */
export interface PersonalizeFilterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a metricAttribution ARN.
 */
export interface PersonalizeMetricAttributionArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a metricAttribution ARN.
 */
export interface PersonalizeMetricAttributionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a recipe ARN.
 */
export interface PersonalizeRecipeArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a recipe ARN.
 */
export interface PersonalizeRecipeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a recommender ARN.
 */
export interface PersonalizeRecommenderArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a recommender ARN.
 */
export interface PersonalizeRecommenderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a schema ARN.
 */
export interface PersonalizeSchemaArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a schema ARN.
 */
export interface PersonalizeSchemaArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a solution ARN.
 */
export interface PersonalizeSolutionArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a solution ARN.
 */
export interface PersonalizeSolutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const AlgorithmArnRegex =
	/^arn:(?<partition>[^:]+):personalize:::algorithm\/(?<resourceId>[^:/?]+)$/;
const BatchInferenceJobArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):batch-inference-job\/(?<resourceId>[^:/?]+)$/;
const BatchSegmentJobArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):batch-segment-job\/(?<resourceId>[^:/?]+)$/;
const CampaignArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):campaign\/(?<resourceId>[^:/?]+)$/;
const DataDeletionJobArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):data-deletion-job\/(?<resourceId>[^:/?]+)$/;
const DataInsightsJobArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):data-insights-job\/(?<resourceId>[^:/?]+)$/;
const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):dataset\/(?<resourceId>[^:/?]+)$/;
const DatasetExportJobArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):dataset-export-job\/(?<resourceId>[^:/?]+)$/;
const DatasetGroupArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):dataset-group\/(?<resourceId>[^:/?]+)$/;
const DatasetImportJobArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):dataset-import-job\/(?<resourceId>[^:/?]+)$/;
const EventTrackerArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):event-tracker\/(?<resourceId>[^:/?]+)$/;
const FeatureTransformationArnRegex =
	/^arn:(?<partition>[^:]+):personalize:::feature-transformation\/(?<resourceId>[^:/?]+)$/;
const FilterArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):filter\/(?<resourceId>[^:/?]+)$/;
const MetricAttributionArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):metric-attribution\/(?<resourceId>[^:/?]+)$/;
const RecipeArnRegex =
	/^arn:(?<partition>[^:]+):personalize:::recipe\/(?<resourceId>[^:/?]+)$/;
const RecommenderArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):recommender\/(?<resourceId>[^:/?]+)$/;
const SchemaArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):schema\/(?<resourceId>[^:/?]+)$/;
const SolutionArnRegex =
	/^arn:(?<partition>[^:]+):personalize:(?<region>[^:]*):(?<account>[^:]*):solution\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for personalize resources.
 */
export class PersonalizeResources {
	/**
	 * Builds an ARN for the algorithm resource.
	 */
	static algorithm(props: PersonalizeAlgorithmArnProps): string {
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
	static parseAlgorithmArn(arn: string): PersonalizeAlgorithmArnComponents {
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
	static batchInferenceJob(
		props: PersonalizeBatchInferenceJobArnProps,
	): string {
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
	static parseBatchInferenceJobArn(
		arn: string,
	): PersonalizeBatchInferenceJobArnComponents {
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
	static batchSegmentJob(props: PersonalizeBatchSegmentJobArnProps): string {
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
	static parseBatchSegmentJobArn(
		arn: string,
	): PersonalizeBatchSegmentJobArnComponents {
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
	static campaign(props: PersonalizeCampaignArnProps): string {
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
	static parseCampaignArn(arn: string): PersonalizeCampaignArnComponents {
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
	static dataDeletionJob(props: PersonalizeDataDeletionJobArnProps): string {
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
	static parseDataDeletionJobArn(
		arn: string,
	): PersonalizeDataDeletionJobArnComponents {
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
	static dataInsightsJob(props: PersonalizeDataInsightsJobArnProps): string {
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
	static parseDataInsightsJobArn(
		arn: string,
	): PersonalizeDataInsightsJobArnComponents {
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
	static dataset(props: PersonalizeDatasetArnProps): string {
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
	static parseDatasetArn(arn: string): PersonalizeDatasetArnComponents {
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
	static datasetExportJob(props: PersonalizeDatasetExportJobArnProps): string {
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
	static parseDatasetExportJobArn(
		arn: string,
	): PersonalizeDatasetExportJobArnComponents {
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
	static datasetGroup(props: PersonalizeDatasetGroupArnProps): string {
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
	static parseDatasetGroupArn(
		arn: string,
	): PersonalizeDatasetGroupArnComponents {
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
	static datasetImportJob(props: PersonalizeDatasetImportJobArnProps): string {
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
	static parseDatasetImportJobArn(
		arn: string,
	): PersonalizeDatasetImportJobArnComponents {
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
	static eventTracker(props: PersonalizeEventTrackerArnProps): string {
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
	static parseEventTrackerArn(
		arn: string,
	): PersonalizeEventTrackerArnComponents {
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
	static featureTransformation(
		props: PersonalizeFeatureTransformationArnProps,
	): string {
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
	static parseFeatureTransformationArn(
		arn: string,
	): PersonalizeFeatureTransformationArnComponents {
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
	static filter(props: PersonalizeFilterArnProps): string {
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
	static parseFilterArn(arn: string): PersonalizeFilterArnComponents {
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
	static metricAttribution(
		props: PersonalizeMetricAttributionArnProps,
	): string {
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
	static parseMetricAttributionArn(
		arn: string,
	): PersonalizeMetricAttributionArnComponents {
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
	static recipe(props: PersonalizeRecipeArnProps): string {
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
	static parseRecipeArn(arn: string): PersonalizeRecipeArnComponents {
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
	static recommender(props: PersonalizeRecommenderArnProps): string {
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
	static parseRecommenderArn(arn: string): PersonalizeRecommenderArnComponents {
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
	static schema(props: PersonalizeSchemaArnProps): string {
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
	static parseSchemaArn(arn: string): PersonalizeSchemaArnComponents {
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
	static solution(props: PersonalizeSolutionArnProps): string {
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
	static parseSolutionArn(arn: string): PersonalizeSolutionArnComponents {
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
	static readonly CreateBatchInferenceJob: string[] = [
		"personalize:CreateBatchInferenceJob",
		"iam:PassRole",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateBatchSegmentJob API call. */
	static readonly CreateBatchSegmentJob: string[] = [
		"personalize:CreateBatchSegmentJob",
		"iam:PassRole",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateCampaign API call. */
	static readonly CreateCampaign: string[] = [
		"personalize:CreateCampaign",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateDataDeletionJob API call. */
	static readonly CreateDataDeletionJob: string[] = [
		"personalize:CreateDataDeletionJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CreateDataset: string[] = [
		"personalize:CreateDataset",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateDatasetExportJob API call. */
	static readonly CreateDatasetExportJob: string[] = [
		"personalize:CreateDatasetExportJob",
		"iam:PassRole",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateDatasetGroup API call. */
	static readonly CreateDatasetGroup: string[] = [
		"personalize:CreateDatasetGroup",
		"iam:PassRole",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateDatasetImportJob API call. */
	static readonly CreateDatasetImportJob: string[] = [
		"personalize:CreateDatasetImportJob",
		"iam:PassRole",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateEventTracker API call. */
	static readonly CreateEventTracker: string[] = [
		"personalize:CreateEventTracker",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateFilter API call. */
	static readonly CreateFilter: string[] = [
		"personalize:CreateFilter",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateMetricAttribution API call. */
	static readonly CreateMetricAttribution: string[] = [
		"personalize:CreateMetricAttribution",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateRecommender API call. */
	static readonly CreateRecommender: string[] = [
		"personalize:CreateRecommender",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateSchema API call. */
	static readonly CreateSchema: string[] = ["personalize:CreateSchema"];
	/** IAM actions required for the CreateSolution API call. */
	static readonly CreateSolution: string[] = [
		"personalize:CreateSolution",
		"personalize:TagResource",
	];
	/** IAM actions required for the CreateSolutionVersion API call. */
	static readonly CreateSolutionVersion: string[] = [
		"personalize:CreateSolutionVersion",
		"personalize:TagResource",
	];
	/** IAM actions required for the DeleteCampaign API call. */
	static readonly DeleteCampaign: string[] = ["personalize:DeleteCampaign"];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DeleteDataset: string[] = ["personalize:DeleteDataset"];
	/** IAM actions required for the DeleteDatasetGroup API call. */
	static readonly DeleteDatasetGroup: string[] = [
		"personalize:DeleteDatasetGroup",
	];
	/** IAM actions required for the DeleteEventTracker API call. */
	static readonly DeleteEventTracker: string[] = [
		"personalize:DeleteEventTracker",
	];
	/** IAM actions required for the DeleteFilter API call. */
	static readonly DeleteFilter: string[] = ["personalize:DeleteFilter"];
	/** IAM actions required for the DeleteMetricAttribution API call. */
	static readonly DeleteMetricAttribution: string[] = [
		"personalize:DeleteMetricAttribution",
	];
	/** IAM actions required for the DeleteRecommender API call. */
	static readonly DeleteRecommender: string[] = [
		"personalize:DeleteRecommender",
	];
	/** IAM actions required for the DeleteSchema API call. */
	static readonly DeleteSchema: string[] = ["personalize:DeleteSchema"];
	/** IAM actions required for the DeleteSolution API call. */
	static readonly DeleteSolution: string[] = ["personalize:DeleteSolution"];
	/** IAM actions required for the DescribeAlgorithm API call. */
	static readonly DescribeAlgorithm: string[] = [
		"personalize:DescribeAlgorithm",
	];
	/** IAM actions required for the DescribeBatchInferenceJob API call. */
	static readonly DescribeBatchInferenceJob: string[] = [
		"personalize:DescribeBatchInferenceJob",
	];
	/** IAM actions required for the DescribeBatchSegmentJob API call. */
	static readonly DescribeBatchSegmentJob: string[] = [
		"personalize:DescribeBatchSegmentJob",
	];
	/** IAM actions required for the DescribeCampaign API call. */
	static readonly DescribeCampaign: string[] = ["personalize:DescribeCampaign"];
	/** IAM actions required for the DescribeDataDeletionJob API call. */
	static readonly DescribeDataDeletionJob: string[] = [
		"personalize:DescribeDataDeletionJob",
	];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DescribeDataset: string[] = ["personalize:DescribeDataset"];
	/** IAM actions required for the DescribeDatasetExportJob API call. */
	static readonly DescribeDatasetExportJob: string[] = [
		"personalize:DescribeDatasetExportJob",
	];
	/** IAM actions required for the DescribeDatasetGroup API call. */
	static readonly DescribeDatasetGroup: string[] = [
		"personalize:DescribeDatasetGroup",
	];
	/** IAM actions required for the DescribeDatasetImportJob API call. */
	static readonly DescribeDatasetImportJob: string[] = [
		"personalize:DescribeDatasetImportJob",
	];
	/** IAM actions required for the DescribeEventTracker API call. */
	static readonly DescribeEventTracker: string[] = [
		"personalize:DescribeEventTracker",
	];
	/** IAM actions required for the DescribeFeatureTransformation API call. */
	static readonly DescribeFeatureTransformation: string[] = [
		"personalize:DescribeFeatureTransformation",
	];
	/** IAM actions required for the DescribeFilter API call. */
	static readonly DescribeFilter: string[] = ["personalize:DescribeFilter"];
	/** IAM actions required for the DescribeMetricAttribution API call. */
	static readonly DescribeMetricAttribution: string[] = [
		"personalize:DescribeMetricAttribution",
	];
	/** IAM actions required for the DescribeRecipe API call. */
	static readonly DescribeRecipe: string[] = ["personalize:DescribeRecipe"];
	/** IAM actions required for the DescribeRecommender API call. */
	static readonly DescribeRecommender: string[] = [
		"personalize:DescribeRecommender",
	];
	/** IAM actions required for the DescribeSchema API call. */
	static readonly DescribeSchema: string[] = ["personalize:DescribeSchema"];
	/** IAM actions required for the DescribeSolution API call. */
	static readonly DescribeSolution: string[] = ["personalize:DescribeSolution"];
	/** IAM actions required for the DescribeSolutionVersion API call. */
	static readonly DescribeSolutionVersion: string[] = [
		"personalize:DescribeSolutionVersion",
	];
	/** IAM actions required for the GetActionRecommendations API call. */
	static readonly opGetActionRecommendations: string[] = [
		"personalize:GetActionRecommendations",
	];
	/** IAM actions required for the GetPersonalizedRanking API call. */
	static readonly opGetPersonalizedRanking: string[] = [
		"personalize:GetPersonalizedRanking",
	];
	/** IAM actions required for the GetRecommendations API call. */
	static readonly opGetRecommendations: string[] = [
		"personalize:GetRecommendations",
	];
	/** IAM actions required for the GetSolutionMetrics API call. */
	static readonly opGetSolutionMetrics: string[] = [
		"personalize:GetSolutionMetrics",
	];
	/** IAM actions required for the ListBatchInferenceJobs API call. */
	static readonly ListBatchInferenceJobs: string[] = [
		"personalize:ListBatchInferenceJobs",
	];
	/** IAM actions required for the ListBatchSegmentJobs API call. */
	static readonly ListBatchSegmentJobs: string[] = [
		"personalize:ListBatchSegmentJobs",
	];
	/** IAM actions required for the ListCampaigns API call. */
	static readonly ListCampaigns: string[] = ["personalize:ListCampaigns"];
	/** IAM actions required for the ListDataDeletionJobs API call. */
	static readonly ListDataDeletionJobs: string[] = [
		"personalize:ListDataDeletionJobs",
	];
	/** IAM actions required for the ListDatasetExportJobs API call. */
	static readonly ListDatasetExportJobs: string[] = [
		"personalize:ListDatasetExportJobs",
	];
	/** IAM actions required for the ListDatasetGroups API call. */
	static readonly ListDatasetGroups: string[] = [
		"personalize:ListDatasetGroups",
	];
	/** IAM actions required for the ListDatasetImportJobs API call. */
	static readonly ListDatasetImportJobs: string[] = [
		"personalize:ListDatasetImportJobs",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly ListDatasets: string[] = ["personalize:ListDatasets"];
	/** IAM actions required for the ListEventTrackers API call. */
	static readonly ListEventTrackers: string[] = [
		"personalize:ListEventTrackers",
	];
	/** IAM actions required for the ListFilters API call. */
	static readonly ListFilters: string[] = ["personalize:ListFilters"];
	/** IAM actions required for the ListMetricAttributionMetrics API call. */
	static readonly ListMetricAttributionMetrics: string[] = [
		"personalize:ListMetricAttributionMetrics",
	];
	/** IAM actions required for the ListMetricAttributions API call. */
	static readonly ListMetricAttributions: string[] = [
		"personalize:ListMetricAttributions",
	];
	/** IAM actions required for the ListRecipes API call. */
	static readonly ListRecipes: string[] = ["personalize:ListRecipes"];
	/** IAM actions required for the ListRecommenders API call. */
	static readonly ListRecommenders: string[] = ["personalize:ListRecommenders"];
	/** IAM actions required for the ListSchemas API call. */
	static readonly ListSchemas: string[] = ["personalize:ListSchemas"];
	/** IAM actions required for the ListSolutionVersions API call. */
	static readonly ListSolutionVersions: string[] = [
		"personalize:ListSolutionVersions",
	];
	/** IAM actions required for the ListSolutions API call. */
	static readonly ListSolutions: string[] = ["personalize:ListSolutions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"personalize:ListTagsForResource",
	];
	/** IAM actions required for the PutActionInteractions API call. */
	static readonly PutActionInteractions: string[] = [
		"personalize:PutActionInteractions",
	];
	/** IAM actions required for the PutActions API call. */
	static readonly PutActions: string[] = ["personalize:PutActions"];
	/** IAM actions required for the PutEvents API call. */
	static readonly PutEvents: string[] = ["personalize:PutEvents"];
	/** IAM actions required for the PutItems API call. */
	static readonly PutItems: string[] = ["personalize:PutItems"];
	/** IAM actions required for the PutUsers API call. */
	static readonly PutUsers: string[] = ["personalize:PutUsers"];
	/** IAM actions required for the StartRecommender API call. */
	static readonly StartRecommender: string[] = ["personalize:StartRecommender"];
	/** IAM actions required for the StopRecommender API call. */
	static readonly StopRecommender: string[] = ["personalize:StopRecommender"];
	/** IAM actions required for the StopSolutionVersionCreation API call. */
	static readonly StopSolutionVersionCreation: string[] = [
		"personalize:StopSolutionVersionCreation",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["personalize:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["personalize:UntagResource"];
	/** IAM actions required for the UpdateCampaign API call. */
	static readonly UpdateCampaign: string[] = ["personalize:UpdateCampaign"];
	/** IAM actions required for the UpdateDataset API call. */
	static readonly UpdateDataset: string[] = ["personalize:UpdateDataset"];
	/** IAM actions required for the UpdateMetricAttribution API call. */
	static readonly UpdateMetricAttribution: string[] = [
		"iam:PassRole",
		"personalize:UpdateMetricAttribution",
	];
	/** IAM actions required for the UpdateRecommender API call. */
	static readonly UpdateRecommender: string[] = [
		"personalize:UpdateRecommender",
	];
	/** IAM actions required for the UpdateSolution API call. */
	static readonly UpdateSolution: string[] = ["personalize:UpdateSolution"];
}

/**
 * Condition key constants and builders for personalize.
 */
export class PersonalizeConditions {
	/** Condition keys applicable to the CreateBatchInferenceJob action. */
	static readonly CreateBatchInferenceJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBatchSegmentJob action. */
	static readonly CreateBatchSegmentJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCampaign action. */
	static readonly CreateCampaignConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataDeletionJob action. */
	static readonly CreateDataDeletionJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CreateDatasetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatasetExportJob action. */
	static readonly CreateDatasetExportJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatasetGroup action. */
	static readonly CreateDatasetGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatasetImportJob action. */
	static readonly CreateDatasetImportJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventTracker action. */
	static readonly CreateEventTrackerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFilter action. */
	static readonly CreateFilterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecommender action. */
	static readonly CreateRecommenderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSolution action. */
	static readonly CreateSolutionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSolutionVersion action. */
	static readonly CreateSolutionVersionConditionKeys: string[] = [
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
