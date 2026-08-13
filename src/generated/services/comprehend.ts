// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/comprehend.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the comprehend service.
 */
export class ComprehendActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "comprehend";

	/** [Read] comprehend:BatchDetectDominantLanguage */
	static readonly BatchDetectDominantLanguage =
		"comprehend:BatchDetectDominantLanguage";
	/** [Read] comprehend:BatchDetectEntities */
	static readonly BatchDetectEntities = "comprehend:BatchDetectEntities";
	/** [Read] comprehend:BatchDetectKeyPhrases */
	static readonly BatchDetectKeyPhrases = "comprehend:BatchDetectKeyPhrases";
	/** [Read] comprehend:BatchDetectSentiment */
	static readonly BatchDetectSentiment = "comprehend:BatchDetectSentiment";
	/** [Read] comprehend:BatchDetectSyntax */
	static readonly BatchDetectSyntax = "comprehend:BatchDetectSyntax";
	/** [Read] comprehend:BatchDetectTargetedSentiment */
	static readonly BatchDetectTargetedSentiment =
		"comprehend:BatchDetectTargetedSentiment";
	/** [Read] comprehend:ClassifyDocument */
	static readonly ClassifyDocument = "comprehend:ClassifyDocument";
	/** [Read] comprehend:ContainsPiiEntities */
	static readonly ContainsPiiEntities = "comprehend:ContainsPiiEntities";
	/** [Write] comprehend:CreateDataset */
	static readonly CreateDataset = "comprehend:CreateDataset";
	/** [Write] comprehend:CreateDocumentClassifier */
	static readonly CreateDocumentClassifier =
		"comprehend:CreateDocumentClassifier";
	/** [Write] comprehend:CreateEndpoint */
	static readonly CreateEndpoint = "comprehend:CreateEndpoint";
	/** [Write] comprehend:CreateEntityRecognizer */
	static readonly CreateEntityRecognizer = "comprehend:CreateEntityRecognizer";
	/** [Write] comprehend:CreateFlywheel */
	static readonly CreateFlywheel = "comprehend:CreateFlywheel";
	/** [Write] comprehend:DeleteDocumentClassifier */
	static readonly DeleteDocumentClassifier =
		"comprehend:DeleteDocumentClassifier";
	/** [Write] comprehend:DeleteEndpoint */
	static readonly DeleteEndpoint = "comprehend:DeleteEndpoint";
	/** [Write] comprehend:DeleteEntityRecognizer */
	static readonly DeleteEntityRecognizer = "comprehend:DeleteEntityRecognizer";
	/** [Write] comprehend:DeleteFlywheel */
	static readonly DeleteFlywheel = "comprehend:DeleteFlywheel";
	/** [Write] comprehend:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "comprehend:DeleteResourcePolicy";
	/** [Read] comprehend:DescribeDataset */
	static readonly DescribeDataset = "comprehend:DescribeDataset";
	/** [Read] comprehend:DescribeDocumentClassificationJob */
	static readonly DescribeDocumentClassificationJob =
		"comprehend:DescribeDocumentClassificationJob";
	/** [Read] comprehend:DescribeDocumentClassifier */
	static readonly DescribeDocumentClassifier =
		"comprehend:DescribeDocumentClassifier";
	/** [Read] comprehend:DescribeDominantLanguageDetectionJob */
	static readonly DescribeDominantLanguageDetectionJob =
		"comprehend:DescribeDominantLanguageDetectionJob";
	/** [Read] comprehend:DescribeEndpoint */
	static readonly DescribeEndpoint = "comprehend:DescribeEndpoint";
	/** [Read] comprehend:DescribeEntitiesDetectionJob */
	static readonly DescribeEntitiesDetectionJob =
		"comprehend:DescribeEntitiesDetectionJob";
	/** [Read] comprehend:DescribeEntityRecognizer */
	static readonly DescribeEntityRecognizer =
		"comprehend:DescribeEntityRecognizer";
	/** [Read] comprehend:DescribeEventsDetectionJob */
	static readonly DescribeEventsDetectionJob =
		"comprehend:DescribeEventsDetectionJob";
	/** [Read] comprehend:DescribeFlywheel */
	static readonly DescribeFlywheel = "comprehend:DescribeFlywheel";
	/** [Read] comprehend:DescribeFlywheelIteration */
	static readonly DescribeFlywheelIteration =
		"comprehend:DescribeFlywheelIteration";
	/** [Read] comprehend:DescribeKeyPhrasesDetectionJob */
	static readonly DescribeKeyPhrasesDetectionJob =
		"comprehend:DescribeKeyPhrasesDetectionJob";
	/** [Read] comprehend:DescribePiiEntitiesDetectionJob */
	static readonly DescribePiiEntitiesDetectionJob =
		"comprehend:DescribePiiEntitiesDetectionJob";
	/** [Read] comprehend:DescribeResourcePolicy */
	static readonly DescribeResourcePolicy = "comprehend:DescribeResourcePolicy";
	/** [Read] comprehend:DescribeSentimentDetectionJob */
	static readonly DescribeSentimentDetectionJob =
		"comprehend:DescribeSentimentDetectionJob";
	/** [Read] comprehend:DescribeTargetedSentimentDetectionJob */
	static readonly DescribeTargetedSentimentDetectionJob =
		"comprehend:DescribeTargetedSentimentDetectionJob";
	/** [Read] comprehend:DescribeTopicsDetectionJob */
	static readonly DescribeTopicsDetectionJob =
		"comprehend:DescribeTopicsDetectionJob";
	/** [Read] comprehend:DetectDominantLanguage */
	static readonly DetectDominantLanguage = "comprehend:DetectDominantLanguage";
	/** [Read] comprehend:DetectEntities */
	static readonly DetectEntities = "comprehend:DetectEntities";
	/** [Read] comprehend:DetectKeyPhrases */
	static readonly DetectKeyPhrases = "comprehend:DetectKeyPhrases";
	/** [Read] comprehend:DetectPiiEntities */
	static readonly DetectPiiEntities = "comprehend:DetectPiiEntities";
	/** [Read] comprehend:DetectSentiment */
	static readonly DetectSentiment = "comprehend:DetectSentiment";
	/** [Read] comprehend:DetectSyntax */
	static readonly DetectSyntax = "comprehend:DetectSyntax";
	/** [Read] comprehend:DetectTargetedSentiment */
	static readonly DetectTargetedSentiment =
		"comprehend:DetectTargetedSentiment";
	/** [Read] comprehend:DetectToxicContent */
	static readonly DetectToxicContent = "comprehend:DetectToxicContent";
	/** [Write] comprehend:ImportModel */
	static readonly ImportModel = "comprehend:ImportModel";
	/** [Read] comprehend:ListDatasets */
	static readonly ListDatasets = "comprehend:ListDatasets";
	/** [Read] comprehend:ListDocumentClassificationJobs */
	static readonly ListDocumentClassificationJobs =
		"comprehend:ListDocumentClassificationJobs";
	/** [Read] comprehend:ListDocumentClassifierSummaries */
	static readonly ListDocumentClassifierSummaries =
		"comprehend:ListDocumentClassifierSummaries";
	/** [Read] comprehend:ListDocumentClassifiers */
	static readonly ListDocumentClassifiers =
		"comprehend:ListDocumentClassifiers";
	/** [Read] comprehend:ListDominantLanguageDetectionJobs */
	static readonly ListDominantLanguageDetectionJobs =
		"comprehend:ListDominantLanguageDetectionJobs";
	/** [Read] comprehend:ListEndpoints */
	static readonly ListEndpoints = "comprehend:ListEndpoints";
	/** [Read] comprehend:ListEntitiesDetectionJobs */
	static readonly ListEntitiesDetectionJobs =
		"comprehend:ListEntitiesDetectionJobs";
	/** [Read] comprehend:ListEntityRecognizerSummaries */
	static readonly ListEntityRecognizerSummaries =
		"comprehend:ListEntityRecognizerSummaries";
	/** [Read] comprehend:ListEntityRecognizers */
	static readonly ListEntityRecognizers = "comprehend:ListEntityRecognizers";
	/** [Read] comprehend:ListEventsDetectionJobs */
	static readonly ListEventsDetectionJobs =
		"comprehend:ListEventsDetectionJobs";
	/** [Read] comprehend:ListFlywheelIterationHistory */
	static readonly ListFlywheelIterationHistory =
		"comprehend:ListFlywheelIterationHistory";
	/** [Read] comprehend:ListFlywheels */
	static readonly ListFlywheels = "comprehend:ListFlywheels";
	/** [Read] comprehend:ListKeyPhrasesDetectionJobs */
	static readonly ListKeyPhrasesDetectionJobs =
		"comprehend:ListKeyPhrasesDetectionJobs";
	/** [Read] comprehend:ListPiiEntitiesDetectionJobs */
	static readonly ListPiiEntitiesDetectionJobs =
		"comprehend:ListPiiEntitiesDetectionJobs";
	/** [Read] comprehend:ListSentimentDetectionJobs */
	static readonly ListSentimentDetectionJobs =
		"comprehend:ListSentimentDetectionJobs";
	/** [Read] comprehend:ListTagsForResource */
	static readonly ListTagsForResource = "comprehend:ListTagsForResource";
	/** [Read] comprehend:ListTargetedSentimentDetectionJobs */
	static readonly ListTargetedSentimentDetectionJobs =
		"comprehend:ListTargetedSentimentDetectionJobs";
	/** [Read] comprehend:ListTopicsDetectionJobs */
	static readonly ListTopicsDetectionJobs =
		"comprehend:ListTopicsDetectionJobs";
	/** [Write] comprehend:PutResourcePolicy */
	static readonly PutResourcePolicy = "comprehend:PutResourcePolicy";
	/** [Write] comprehend:StartDocumentClassificationJob */
	static readonly StartDocumentClassificationJob =
		"comprehend:StartDocumentClassificationJob";
	/** [Write] comprehend:StartDominantLanguageDetectionJob */
	static readonly StartDominantLanguageDetectionJob =
		"comprehend:StartDominantLanguageDetectionJob";
	/** [Write] comprehend:StartEntitiesDetectionJob */
	static readonly StartEntitiesDetectionJob =
		"comprehend:StartEntitiesDetectionJob";
	/** [Write] comprehend:StartEventsDetectionJob */
	static readonly StartEventsDetectionJob =
		"comprehend:StartEventsDetectionJob";
	/** [Write] comprehend:StartFlywheelIteration */
	static readonly StartFlywheelIteration = "comprehend:StartFlywheelIteration";
	/** [Write] comprehend:StartKeyPhrasesDetectionJob */
	static readonly StartKeyPhrasesDetectionJob =
		"comprehend:StartKeyPhrasesDetectionJob";
	/** [Write] comprehend:StartPiiEntitiesDetectionJob */
	static readonly StartPiiEntitiesDetectionJob =
		"comprehend:StartPiiEntitiesDetectionJob";
	/** [Write] comprehend:StartSentimentDetectionJob */
	static readonly StartSentimentDetectionJob =
		"comprehend:StartSentimentDetectionJob";
	/** [Write] comprehend:StartTargetedSentimentDetectionJob */
	static readonly StartTargetedSentimentDetectionJob =
		"comprehend:StartTargetedSentimentDetectionJob";
	/** [Write] comprehend:StartTopicsDetectionJob */
	static readonly StartTopicsDetectionJob =
		"comprehend:StartTopicsDetectionJob";
	/** [Write] comprehend:StopDominantLanguageDetectionJob */
	static readonly StopDominantLanguageDetectionJob =
		"comprehend:StopDominantLanguageDetectionJob";
	/** [Write] comprehend:StopEntitiesDetectionJob */
	static readonly StopEntitiesDetectionJob =
		"comprehend:StopEntitiesDetectionJob";
	/** [Write] comprehend:StopEventsDetectionJob */
	static readonly StopEventsDetectionJob = "comprehend:StopEventsDetectionJob";
	/** [Write] comprehend:StopKeyPhrasesDetectionJob */
	static readonly StopKeyPhrasesDetectionJob =
		"comprehend:StopKeyPhrasesDetectionJob";
	/** [Write] comprehend:StopPiiEntitiesDetectionJob */
	static readonly StopPiiEntitiesDetectionJob =
		"comprehend:StopPiiEntitiesDetectionJob";
	/** [Write] comprehend:StopSentimentDetectionJob */
	static readonly StopSentimentDetectionJob =
		"comprehend:StopSentimentDetectionJob";
	/** [Write] comprehend:StopTargetedSentimentDetectionJob */
	static readonly StopTargetedSentimentDetectionJob =
		"comprehend:StopTargetedSentimentDetectionJob";
	/** [Write] comprehend:StopTrainingDocumentClassifier */
	static readonly StopTrainingDocumentClassifier =
		"comprehend:StopTrainingDocumentClassifier";
	/** [Write] comprehend:StopTrainingEntityRecognizer */
	static readonly StopTrainingEntityRecognizer =
		"comprehend:StopTrainingEntityRecognizer";
	/** [Tagging] comprehend:TagResource */
	static readonly TagResource = "comprehend:TagResource";
	/** [Tagging] comprehend:UntagResource */
	static readonly UntagResource = "comprehend:UntagResource";
	/** [Write] comprehend:UpdateEndpoint */
	static readonly UpdateEndpoint = "comprehend:UpdateEndpoint";
	/** [Write] comprehend:UpdateFlywheel */
	static readonly UpdateFlywheel = "comprehend:UpdateFlywheel";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ComprehendActions.BatchDetectDominantLanguage,
		ComprehendActions.BatchDetectEntities,
		ComprehendActions.BatchDetectKeyPhrases,
		ComprehendActions.BatchDetectSentiment,
		ComprehendActions.BatchDetectSyntax,
		ComprehendActions.BatchDetectTargetedSentiment,
		ComprehendActions.ClassifyDocument,
		ComprehendActions.ContainsPiiEntities,
		ComprehendActions.DescribeDataset,
		ComprehendActions.DescribeDocumentClassificationJob,
		ComprehendActions.DescribeDocumentClassifier,
		ComprehendActions.DescribeDominantLanguageDetectionJob,
		ComprehendActions.DescribeEndpoint,
		ComprehendActions.DescribeEntitiesDetectionJob,
		ComprehendActions.DescribeEntityRecognizer,
		ComprehendActions.DescribeEventsDetectionJob,
		ComprehendActions.DescribeFlywheel,
		ComprehendActions.DescribeFlywheelIteration,
		ComprehendActions.DescribeKeyPhrasesDetectionJob,
		ComprehendActions.DescribePiiEntitiesDetectionJob,
		ComprehendActions.DescribeResourcePolicy,
		ComprehendActions.DescribeSentimentDetectionJob,
		ComprehendActions.DescribeTargetedSentimentDetectionJob,
		ComprehendActions.DescribeTopicsDetectionJob,
		ComprehendActions.DetectDominantLanguage,
		ComprehendActions.DetectEntities,
		ComprehendActions.DetectKeyPhrases,
		ComprehendActions.DetectPiiEntities,
		ComprehendActions.DetectSentiment,
		ComprehendActions.DetectSyntax,
		ComprehendActions.DetectTargetedSentiment,
		ComprehendActions.DetectToxicContent,
		ComprehendActions.ListDatasets,
		ComprehendActions.ListDocumentClassificationJobs,
		ComprehendActions.ListDocumentClassifierSummaries,
		ComprehendActions.ListDocumentClassifiers,
		ComprehendActions.ListDominantLanguageDetectionJobs,
		ComprehendActions.ListEndpoints,
		ComprehendActions.ListEntitiesDetectionJobs,
		ComprehendActions.ListEntityRecognizerSummaries,
		ComprehendActions.ListEntityRecognizers,
		ComprehendActions.ListEventsDetectionJobs,
		ComprehendActions.ListFlywheelIterationHistory,
		ComprehendActions.ListFlywheels,
		ComprehendActions.ListKeyPhrasesDetectionJobs,
		ComprehendActions.ListPiiEntitiesDetectionJobs,
		ComprehendActions.ListSentimentDetectionJobs,
		ComprehendActions.ListTagsForResource,
		ComprehendActions.ListTargetedSentimentDetectionJobs,
		ComprehendActions.ListTopicsDetectionJobs,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ComprehendActions.CreateDataset,
		ComprehendActions.CreateDocumentClassifier,
		ComprehendActions.CreateEndpoint,
		ComprehendActions.CreateEntityRecognizer,
		ComprehendActions.CreateFlywheel,
		ComprehendActions.DeleteDocumentClassifier,
		ComprehendActions.DeleteEndpoint,
		ComprehendActions.DeleteEntityRecognizer,
		ComprehendActions.DeleteFlywheel,
		ComprehendActions.DeleteResourcePolicy,
		ComprehendActions.ImportModel,
		ComprehendActions.PutResourcePolicy,
		ComprehendActions.StartDocumentClassificationJob,
		ComprehendActions.StartDominantLanguageDetectionJob,
		ComprehendActions.StartEntitiesDetectionJob,
		ComprehendActions.StartEventsDetectionJob,
		ComprehendActions.StartFlywheelIteration,
		ComprehendActions.StartKeyPhrasesDetectionJob,
		ComprehendActions.StartPiiEntitiesDetectionJob,
		ComprehendActions.StartSentimentDetectionJob,
		ComprehendActions.StartTargetedSentimentDetectionJob,
		ComprehendActions.StartTopicsDetectionJob,
		ComprehendActions.StopDominantLanguageDetectionJob,
		ComprehendActions.StopEntitiesDetectionJob,
		ComprehendActions.StopEventsDetectionJob,
		ComprehendActions.StopKeyPhrasesDetectionJob,
		ComprehendActions.StopPiiEntitiesDetectionJob,
		ComprehendActions.StopSentimentDetectionJob,
		ComprehendActions.StopTargetedSentimentDetectionJob,
		ComprehendActions.StopTrainingDocumentClassifier,
		ComprehendActions.StopTrainingEntityRecognizer,
		ComprehendActions.UpdateEndpoint,
		ComprehendActions.UpdateFlywheel,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ComprehendActions.TagResource,
		ComprehendActions.UntagResource,
	];
}

/**
 * Properties for building a document-classification-job ARN.
 */
export interface ComprehendDocumentClassificationJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a document-classification-job ARN.
 */
export interface ComprehendDocumentClassificationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a document-classifier ARN.
 */
export interface ComprehendDocumentClassifierArnProps {
	/** The DocumentClassifierName component of the ARN. */
	readonly documentClassifierName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a document-classifier ARN.
 */
export interface ComprehendDocumentClassifierArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DocumentClassifierName component. */
	readonly documentClassifierName: string;
}

/**
 * Properties for building a document-classifier-endpoint ARN.
 */
export interface ComprehendDocumentClassifierEndpointArnProps {
	/** The DocumentClassifierEndpointName component of the ARN. */
	readonly documentClassifierEndpointName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a document-classifier-endpoint ARN.
 */
export interface ComprehendDocumentClassifierEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DocumentClassifierEndpointName component. */
	readonly documentClassifierEndpointName: string;
}

/**
 * Properties for building a dominant-language-detection-job ARN.
 */
export interface ComprehendDominantLanguageDetectionJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dominant-language-detection-job ARN.
 */
export interface ComprehendDominantLanguageDetectionJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a entities-detection-job ARN.
 */
export interface ComprehendEntitiesDetectionJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a entities-detection-job ARN.
 */
export interface ComprehendEntitiesDetectionJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a entity-recognizer ARN.
 */
export interface ComprehendEntityRecognizerArnProps {
	/** The EntityRecognizerName component of the ARN. */
	readonly entityRecognizerName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a entity-recognizer ARN.
 */
export interface ComprehendEntityRecognizerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EntityRecognizerName component. */
	readonly entityRecognizerName: string;
}

/**
 * Properties for building a entity-recognizer-endpoint ARN.
 */
export interface ComprehendEntityRecognizerEndpointArnProps {
	/** The EntityRecognizerEndpointName component of the ARN. */
	readonly entityRecognizerEndpointName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a entity-recognizer-endpoint ARN.
 */
export interface ComprehendEntityRecognizerEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EntityRecognizerEndpointName component. */
	readonly entityRecognizerEndpointName: string;
}

/**
 * Properties for building a events-detection-job ARN.
 */
export interface ComprehendEventsDetectionJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a events-detection-job ARN.
 */
export interface ComprehendEventsDetectionJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a flywheel ARN.
 */
export interface ComprehendFlywheelArnProps {
	/** The FlywheelName component of the ARN. */
	readonly flywheelName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a flywheel ARN.
 */
export interface ComprehendFlywheelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FlywheelName component. */
	readonly flywheelName: string;
}

/**
 * Properties for building a flywheel-dataset ARN.
 */
export interface ComprehendFlywheelDatasetArnProps {
	/** The FlywheelName component of the ARN. */
	readonly flywheelName: string;
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
 * Parsed components of a flywheel-dataset ARN.
 */
export interface ComprehendFlywheelDatasetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FlywheelName component. */
	readonly flywheelName: string;
	/** The DatasetName component. */
	readonly datasetName: string;
}

/**
 * Properties for building a key-phrases-detection-job ARN.
 */
export interface ComprehendKeyPhrasesDetectionJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a key-phrases-detection-job ARN.
 */
export interface ComprehendKeyPhrasesDetectionJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a pii-entities-detection-job ARN.
 */
export interface ComprehendPiiEntitiesDetectionJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a pii-entities-detection-job ARN.
 */
export interface ComprehendPiiEntitiesDetectionJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a sentiment-detection-job ARN.
 */
export interface ComprehendSentimentDetectionJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a sentiment-detection-job ARN.
 */
export interface ComprehendSentimentDetectionJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a targeted-sentiment-detection-job ARN.
 */
export interface ComprehendTargetedSentimentDetectionJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a targeted-sentiment-detection-job ARN.
 */
export interface ComprehendTargetedSentimentDetectionJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a topics-detection-job ARN.
 */
export interface ComprehendTopicsDetectionJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a topics-detection-job ARN.
 */
export interface ComprehendTopicsDetectionJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

const DocumentClassificationJobArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):document-classification-job\/(?<jobId>[^:/?]+)$/;
const DocumentClassifierArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):document-classifier\/(?<documentClassifierName>[^:/?]+)$/;
const DocumentClassifierEndpointArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):document-classifier-endpoint\/(?<documentClassifierEndpointName>[^:/?]+)$/;
const DominantLanguageDetectionJobArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):dominant-language-detection-job\/(?<jobId>[^:/?]+)$/;
const EntitiesDetectionJobArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):entities-detection-job\/(?<jobId>[^:/?]+)$/;
const EntityRecognizerArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):entity-recognizer\/(?<entityRecognizerName>[^:/?]+)$/;
const EntityRecognizerEndpointArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):entity-recognizer-endpoint\/(?<entityRecognizerEndpointName>[^:/?]+)$/;
const EventsDetectionJobArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):events-detection-job\/(?<jobId>[^:/?]+)$/;
const FlywheelArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):flywheel\/(?<flywheelName>[^:/?]+)$/;
const FlywheelDatasetArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):flywheel\/(?<flywheelName>[^:/?]+)\/dataset\/(?<datasetName>[^:/?]+)$/;
const KeyPhrasesDetectionJobArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):key-phrases-detection-job\/(?<jobId>[^:/?]+)$/;
const PiiEntitiesDetectionJobArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):pii-entities-detection-job\/(?<jobId>[^:/?]+)$/;
const SentimentDetectionJobArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):sentiment-detection-job\/(?<jobId>[^:/?]+)$/;
const TargetedSentimentDetectionJobArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):targeted-sentiment-detection-job\/(?<jobId>[^:/?]+)$/;
const TopicsDetectionJobArnRegex =
	/^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):topics-detection-job\/(?<jobId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for comprehend resources.
 */
export class ComprehendResources {
	/**
	 * Builds an ARN for the document-classification-job resource.
	 */
	static documentClassificationJob(
		props: ComprehendDocumentClassificationJobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:document-classification-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the document-classification-job resource.
	 */
	static isValidDocumentClassificationJobArn(arn: string): boolean {
		return DocumentClassificationJobArnRegex.test(arn);
	}

	/**
	 * Parses a document-classification-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDocumentClassificationJobArn(
		arn: string,
	): ComprehendDocumentClassificationJobArnComponents {
		const match = DocumentClassificationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid document-classification-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the document-classifier resource.
	 */
	static documentClassifier(
		props: ComprehendDocumentClassifierArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:document-classifier/${props.documentClassifierName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the document-classifier resource.
	 */
	static isValidDocumentClassifierArn(arn: string): boolean {
		return DocumentClassifierArnRegex.test(arn);
	}

	/**
	 * Parses a document-classifier ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDocumentClassifierArn(
		arn: string,
	): ComprehendDocumentClassifierArnComponents {
		const match = DocumentClassifierArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid document-classifier ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			documentClassifierName: match.groups!.documentClassifierName,
		};
	}

	/**
	 * Builds an ARN for the document-classifier-endpoint resource.
	 */
	static documentClassifierEndpoint(
		props: ComprehendDocumentClassifierEndpointArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:document-classifier-endpoint/${props.documentClassifierEndpointName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the document-classifier-endpoint resource.
	 */
	static isValidDocumentClassifierEndpointArn(arn: string): boolean {
		return DocumentClassifierEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a document-classifier-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDocumentClassifierEndpointArn(
		arn: string,
	): ComprehendDocumentClassifierEndpointArnComponents {
		const match = DocumentClassifierEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid document-classifier-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			documentClassifierEndpointName:
				match.groups!.documentClassifierEndpointName,
		};
	}

	/**
	 * Builds an ARN for the dominant-language-detection-job resource.
	 */
	static dominantLanguageDetectionJob(
		props: ComprehendDominantLanguageDetectionJobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:dominant-language-detection-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dominant-language-detection-job resource.
	 */
	static isValidDominantLanguageDetectionJobArn(arn: string): boolean {
		return DominantLanguageDetectionJobArnRegex.test(arn);
	}

	/**
	 * Parses a dominant-language-detection-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDominantLanguageDetectionJobArn(
		arn: string,
	): ComprehendDominantLanguageDetectionJobArnComponents {
		const match = DominantLanguageDetectionJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dominant-language-detection-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the entities-detection-job resource.
	 */
	static entitiesDetectionJob(
		props: ComprehendEntitiesDetectionJobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:entities-detection-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the entities-detection-job resource.
	 */
	static isValidEntitiesDetectionJobArn(arn: string): boolean {
		return EntitiesDetectionJobArnRegex.test(arn);
	}

	/**
	 * Parses a entities-detection-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEntitiesDetectionJobArn(
		arn: string,
	): ComprehendEntitiesDetectionJobArnComponents {
		const match = EntitiesDetectionJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid entities-detection-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the entity-recognizer resource.
	 */
	static entityRecognizer(props: ComprehendEntityRecognizerArnProps): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:entity-recognizer/${props.entityRecognizerName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the entity-recognizer resource.
	 */
	static isValidEntityRecognizerArn(arn: string): boolean {
		return EntityRecognizerArnRegex.test(arn);
	}

	/**
	 * Parses a entity-recognizer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEntityRecognizerArn(
		arn: string,
	): ComprehendEntityRecognizerArnComponents {
		const match = EntityRecognizerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid entity-recognizer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			entityRecognizerName: match.groups!.entityRecognizerName,
		};
	}

	/**
	 * Builds an ARN for the entity-recognizer-endpoint resource.
	 */
	static entityRecognizerEndpoint(
		props: ComprehendEntityRecognizerEndpointArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:entity-recognizer-endpoint/${props.entityRecognizerEndpointName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the entity-recognizer-endpoint resource.
	 */
	static isValidEntityRecognizerEndpointArn(arn: string): boolean {
		return EntityRecognizerEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a entity-recognizer-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEntityRecognizerEndpointArn(
		arn: string,
	): ComprehendEntityRecognizerEndpointArnComponents {
		const match = EntityRecognizerEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid entity-recognizer-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			entityRecognizerEndpointName: match.groups!.entityRecognizerEndpointName,
		};
	}

	/**
	 * Builds an ARN for the events-detection-job resource.
	 */
	static eventsDetectionJob(
		props: ComprehendEventsDetectionJobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:events-detection-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the events-detection-job resource.
	 */
	static isValidEventsDetectionJobArn(arn: string): boolean {
		return EventsDetectionJobArnRegex.test(arn);
	}

	/**
	 * Parses a events-detection-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventsDetectionJobArn(
		arn: string,
	): ComprehendEventsDetectionJobArnComponents {
		const match = EventsDetectionJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid events-detection-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the flywheel resource.
	 */
	static flywheel(props: ComprehendFlywheelArnProps): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:flywheel/${props.flywheelName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the flywheel resource.
	 */
	static isValidFlywheelArn(arn: string): boolean {
		return FlywheelArnRegex.test(arn);
	}

	/**
	 * Parses a flywheel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFlywheelArn(arn: string): ComprehendFlywheelArnComponents {
		const match = FlywheelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid flywheel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			flywheelName: match.groups!.flywheelName,
		};
	}

	/**
	 * Builds an ARN for the flywheel-dataset resource.
	 */
	static flywheelDataset(props: ComprehendFlywheelDatasetArnProps): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:flywheel/${props.flywheelName}/dataset/${props.datasetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the flywheel-dataset resource.
	 */
	static isValidFlywheelDatasetArn(arn: string): boolean {
		return FlywheelDatasetArnRegex.test(arn);
	}

	/**
	 * Parses a flywheel-dataset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFlywheelDatasetArn(
		arn: string,
	): ComprehendFlywheelDatasetArnComponents {
		const match = FlywheelDatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid flywheel-dataset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			flywheelName: match.groups!.flywheelName,
			datasetName: match.groups!.datasetName,
		};
	}

	/**
	 * Builds an ARN for the key-phrases-detection-job resource.
	 */
	static keyPhrasesDetectionJob(
		props: ComprehendKeyPhrasesDetectionJobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:key-phrases-detection-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the key-phrases-detection-job resource.
	 */
	static isValidKeyPhrasesDetectionJobArn(arn: string): boolean {
		return KeyPhrasesDetectionJobArnRegex.test(arn);
	}

	/**
	 * Parses a key-phrases-detection-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKeyPhrasesDetectionJobArn(
		arn: string,
	): ComprehendKeyPhrasesDetectionJobArnComponents {
		const match = KeyPhrasesDetectionJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid key-phrases-detection-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the pii-entities-detection-job resource.
	 */
	static piiEntitiesDetectionJob(
		props: ComprehendPiiEntitiesDetectionJobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:pii-entities-detection-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the pii-entities-detection-job resource.
	 */
	static isValidPiiEntitiesDetectionJobArn(arn: string): boolean {
		return PiiEntitiesDetectionJobArnRegex.test(arn);
	}

	/**
	 * Parses a pii-entities-detection-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePiiEntitiesDetectionJobArn(
		arn: string,
	): ComprehendPiiEntitiesDetectionJobArnComponents {
		const match = PiiEntitiesDetectionJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pii-entities-detection-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the sentiment-detection-job resource.
	 */
	static sentimentDetectionJob(
		props: ComprehendSentimentDetectionJobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:sentiment-detection-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sentiment-detection-job resource.
	 */
	static isValidSentimentDetectionJobArn(arn: string): boolean {
		return SentimentDetectionJobArnRegex.test(arn);
	}

	/**
	 * Parses a sentiment-detection-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSentimentDetectionJobArn(
		arn: string,
	): ComprehendSentimentDetectionJobArnComponents {
		const match = SentimentDetectionJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sentiment-detection-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the targeted-sentiment-detection-job resource.
	 */
	static targetedSentimentDetectionJob(
		props: ComprehendTargetedSentimentDetectionJobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:targeted-sentiment-detection-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the targeted-sentiment-detection-job resource.
	 */
	static isValidTargetedSentimentDetectionJobArn(arn: string): boolean {
		return TargetedSentimentDetectionJobArnRegex.test(arn);
	}

	/**
	 * Parses a targeted-sentiment-detection-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTargetedSentimentDetectionJobArn(
		arn: string,
	): ComprehendTargetedSentimentDetectionJobArnComponents {
		const match = TargetedSentimentDetectionJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid targeted-sentiment-detection-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the topics-detection-job resource.
	 */
	static topicsDetectionJob(
		props: ComprehendTopicsDetectionJobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:comprehend:${props.region ?? "*"}:${props.account ?? "*"}:topics-detection-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the topics-detection-job resource.
	 */
	static isValidTopicsDetectionJobArn(arn: string): boolean {
		return TopicsDetectionJobArnRegex.test(arn);
	}

	/**
	 * Parses a topics-detection-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTopicsDetectionJobArn(
		arn: string,
	): ComprehendTopicsDetectionJobArnComponents {
		const match = TopicsDetectionJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid topics-detection-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for comprehend.
 */
export class ComprehendOperations {
	/** IAM actions required for the BatchDetectDominantLanguage API call. */
	static readonly BatchDetectDominantLanguage: string[] = [
		"comprehend:BatchDetectDominantLanguage",
	];
	/** IAM actions required for the BatchDetectEntities API call. */
	static readonly BatchDetectEntities: string[] = [
		"comprehend:BatchDetectEntities",
	];
	/** IAM actions required for the BatchDetectKeyPhrases API call. */
	static readonly BatchDetectKeyPhrases: string[] = [
		"comprehend:BatchDetectKeyPhrases",
	];
	/** IAM actions required for the BatchDetectSentiment API call. */
	static readonly BatchDetectSentiment: string[] = [
		"comprehend:BatchDetectSentiment",
	];
	/** IAM actions required for the BatchDetectSyntax API call. */
	static readonly BatchDetectSyntax: string[] = [
		"comprehend:BatchDetectSyntax",
	];
	/** IAM actions required for the BatchDetectTargetedSentiment API call. */
	static readonly BatchDetectTargetedSentiment: string[] = [
		"comprehend:BatchDetectTargetedSentiment",
	];
	/** IAM actions required for the ClassifyDocument API call. */
	static readonly ClassifyDocument: string[] = ["comprehend:ClassifyDocument"];
	/** IAM actions required for the ContainsPiiEntities API call. */
	static readonly ContainsPiiEntities: string[] = [
		"comprehend:ContainsPiiEntities",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CreateDataset: string[] = [
		"comprehend:CreateDataset",
		"comprehend:TagResource",
	];
	/** IAM actions required for the CreateDocumentClassifier API call. */
	static readonly CreateDocumentClassifier: string[] = [
		"comprehend:CreateDocumentClassifier",
		"iam:PassRole",
		"comprehend:TagResource",
	];
	/** IAM actions required for the CreateEndpoint API call. */
	static readonly CreateEndpoint: string[] = [
		"comprehend:CreateEndpoint",
		"iam:PassRole",
		"comprehend:TagResource",
	];
	/** IAM actions required for the CreateEntityRecognizer API call. */
	static readonly CreateEntityRecognizer: string[] = [
		"comprehend:CreateEntityRecognizer",
		"iam:PassRole",
		"comprehend:TagResource",
	];
	/** IAM actions required for the CreateFlywheel API call. */
	static readonly CreateFlywheel: string[] = [
		"comprehend:CreateFlywheel",
		"iam:PassRole",
		"comprehend:TagResource",
	];
	/** IAM actions required for the DeleteDocumentClassifier API call. */
	static readonly DeleteDocumentClassifier: string[] = [
		"comprehend:DeleteDocumentClassifier",
	];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DeleteEndpoint: string[] = ["comprehend:DeleteEndpoint"];
	/** IAM actions required for the DeleteEntityRecognizer API call. */
	static readonly DeleteEntityRecognizer: string[] = [
		"comprehend:DeleteEntityRecognizer",
	];
	/** IAM actions required for the DeleteFlywheel API call. */
	static readonly DeleteFlywheel: string[] = ["comprehend:DeleteFlywheel"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"comprehend:DeleteResourcePolicy",
	];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DescribeDataset: string[] = ["comprehend:DescribeDataset"];
	/** IAM actions required for the DescribeDocumentClassificationJob API call. */
	static readonly DescribeDocumentClassificationJob: string[] = [
		"comprehend:DescribeDocumentClassificationJob",
	];
	/** IAM actions required for the DescribeDocumentClassifier API call. */
	static readonly DescribeDocumentClassifier: string[] = [
		"comprehend:DescribeDocumentClassifier",
	];
	/** IAM actions required for the DescribeDominantLanguageDetectionJob API call. */
	static readonly DescribeDominantLanguageDetectionJob: string[] = [
		"comprehend:DescribeDominantLanguageDetectionJob",
	];
	/** IAM actions required for the DescribeEndpoint API call. */
	static readonly DescribeEndpoint: string[] = ["comprehend:DescribeEndpoint"];
	/** IAM actions required for the DescribeEntitiesDetectionJob API call. */
	static readonly DescribeEntitiesDetectionJob: string[] = [
		"comprehend:DescribeEntitiesDetectionJob",
	];
	/** IAM actions required for the DescribeEntityRecognizer API call. */
	static readonly DescribeEntityRecognizer: string[] = [
		"comprehend:DescribeEntityRecognizer",
	];
	/** IAM actions required for the DescribeEventsDetectionJob API call. */
	static readonly DescribeEventsDetectionJob: string[] = [
		"comprehend:DescribeEventsDetectionJob",
	];
	/** IAM actions required for the DescribeFlywheel API call. */
	static readonly DescribeFlywheel: string[] = ["comprehend:DescribeFlywheel"];
	/** IAM actions required for the DescribeFlywheelIteration API call. */
	static readonly DescribeFlywheelIteration: string[] = [
		"comprehend:DescribeFlywheelIteration",
	];
	/** IAM actions required for the DescribeKeyPhrasesDetectionJob API call. */
	static readonly DescribeKeyPhrasesDetectionJob: string[] = [
		"comprehend:DescribeKeyPhrasesDetectionJob",
	];
	/** IAM actions required for the DescribePiiEntitiesDetectionJob API call. */
	static readonly DescribePiiEntitiesDetectionJob: string[] = [
		"comprehend:DescribePiiEntitiesDetectionJob",
	];
	/** IAM actions required for the DescribeResourcePolicy API call. */
	static readonly DescribeResourcePolicy: string[] = [
		"comprehend:DescribeResourcePolicy",
	];
	/** IAM actions required for the DescribeSentimentDetectionJob API call. */
	static readonly DescribeSentimentDetectionJob: string[] = [
		"comprehend:DescribeSentimentDetectionJob",
	];
	/** IAM actions required for the DescribeTargetedSentimentDetectionJob API call. */
	static readonly DescribeTargetedSentimentDetectionJob: string[] = [
		"comprehend:DescribeTargetedSentimentDetectionJob",
	];
	/** IAM actions required for the DescribeTopicsDetectionJob API call. */
	static readonly DescribeTopicsDetectionJob: string[] = [
		"comprehend:DescribeTopicsDetectionJob",
	];
	/** IAM actions required for the DetectDominantLanguage API call. */
	static readonly DetectDominantLanguage: string[] = [
		"comprehend:DetectDominantLanguage",
	];
	/** IAM actions required for the DetectEntities API call. */
	static readonly DetectEntities: string[] = ["comprehend:DetectEntities"];
	/** IAM actions required for the DetectKeyPhrases API call. */
	static readonly DetectKeyPhrases: string[] = ["comprehend:DetectKeyPhrases"];
	/** IAM actions required for the DetectPiiEntities API call. */
	static readonly DetectPiiEntities: string[] = [
		"comprehend:DetectPiiEntities",
	];
	/** IAM actions required for the DetectSentiment API call. */
	static readonly DetectSentiment: string[] = ["comprehend:DetectSentiment"];
	/** IAM actions required for the DetectSyntax API call. */
	static readonly DetectSyntax: string[] = ["comprehend:DetectSyntax"];
	/** IAM actions required for the DetectTargetedSentiment API call. */
	static readonly DetectTargetedSentiment: string[] = [
		"comprehend:DetectTargetedSentiment",
	];
	/** IAM actions required for the DetectToxicContent API call. */
	static readonly DetectToxicContent: string[] = [
		"comprehend:DetectToxicContent",
	];
	/** IAM actions required for the ImportModel API call. */
	static readonly ImportModel: string[] = [
		"comprehend:ImportModel",
		"iam:PassRole",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly ListDatasets: string[] = ["comprehend:ListDatasets"];
	/** IAM actions required for the ListDocumentClassificationJobs API call. */
	static readonly ListDocumentClassificationJobs: string[] = [
		"comprehend:ListDocumentClassificationJobs",
	];
	/** IAM actions required for the ListDocumentClassifierSummaries API call. */
	static readonly ListDocumentClassifierSummaries: string[] = [
		"comprehend:ListDocumentClassifierSummaries",
	];
	/** IAM actions required for the ListDocumentClassifiers API call. */
	static readonly ListDocumentClassifiers: string[] = [
		"comprehend:ListDocumentClassifiers",
	];
	/** IAM actions required for the ListDominantLanguageDetectionJobs API call. */
	static readonly ListDominantLanguageDetectionJobs: string[] = [
		"comprehend:ListDominantLanguageDetectionJobs",
	];
	/** IAM actions required for the ListEndpoints API call. */
	static readonly ListEndpoints: string[] = ["comprehend:ListEndpoints"];
	/** IAM actions required for the ListEntitiesDetectionJobs API call. */
	static readonly ListEntitiesDetectionJobs: string[] = [
		"comprehend:ListEntitiesDetectionJobs",
	];
	/** IAM actions required for the ListEntityRecognizerSummaries API call. */
	static readonly ListEntityRecognizerSummaries: string[] = [
		"comprehend:ListEntityRecognizerSummaries",
	];
	/** IAM actions required for the ListEntityRecognizers API call. */
	static readonly ListEntityRecognizers: string[] = [
		"comprehend:ListEntityRecognizers",
	];
	/** IAM actions required for the ListEventsDetectionJobs API call. */
	static readonly ListEventsDetectionJobs: string[] = [
		"comprehend:ListEventsDetectionJobs",
	];
	/** IAM actions required for the ListFlywheelIterationHistory API call. */
	static readonly ListFlywheelIterationHistory: string[] = [
		"comprehend:ListFlywheelIterationHistory",
	];
	/** IAM actions required for the ListFlywheels API call. */
	static readonly ListFlywheels: string[] = ["comprehend:ListFlywheels"];
	/** IAM actions required for the ListKeyPhrasesDetectionJobs API call. */
	static readonly ListKeyPhrasesDetectionJobs: string[] = [
		"comprehend:ListKeyPhrasesDetectionJobs",
	];
	/** IAM actions required for the ListPiiEntitiesDetectionJobs API call. */
	static readonly ListPiiEntitiesDetectionJobs: string[] = [
		"comprehend:ListPiiEntitiesDetectionJobs",
	];
	/** IAM actions required for the ListSentimentDetectionJobs API call. */
	static readonly ListSentimentDetectionJobs: string[] = [
		"comprehend:ListSentimentDetectionJobs",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"comprehend:ListTagsForResource",
	];
	/** IAM actions required for the ListTargetedSentimentDetectionJobs API call. */
	static readonly ListTargetedSentimentDetectionJobs: string[] = [
		"comprehend:ListTargetedSentimentDetectionJobs",
	];
	/** IAM actions required for the ListTopicsDetectionJobs API call. */
	static readonly ListTopicsDetectionJobs: string[] = [
		"comprehend:ListTopicsDetectionJobs",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"comprehend:PutResourcePolicy",
	];
	/** IAM actions required for the StartDocumentClassificationJob API call. */
	static readonly StartDocumentClassificationJob: string[] = [
		"iam:PassRole",
		"comprehend:StartDocumentClassificationJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartDominantLanguageDetectionJob API call. */
	static readonly StartDominantLanguageDetectionJob: string[] = [
		"iam:PassRole",
		"comprehend:StartDominantLanguageDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartEntitiesDetectionJob API call. */
	static readonly StartEntitiesDetectionJob: string[] = [
		"iam:PassRole",
		"comprehend:StartEntitiesDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartEventsDetectionJob API call. */
	static readonly StartEventsDetectionJob: string[] = [
		"iam:PassRole",
		"comprehend:StartEventsDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartFlywheelIteration API call. */
	static readonly StartFlywheelIteration: string[] = [
		"comprehend:StartFlywheelIteration",
	];
	/** IAM actions required for the StartKeyPhrasesDetectionJob API call. */
	static readonly StartKeyPhrasesDetectionJob: string[] = [
		"iam:PassRole",
		"comprehend:StartKeyPhrasesDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartPiiEntitiesDetectionJob API call. */
	static readonly StartPiiEntitiesDetectionJob: string[] = [
		"iam:PassRole",
		"comprehend:StartPiiEntitiesDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartSentimentDetectionJob API call. */
	static readonly StartSentimentDetectionJob: string[] = [
		"iam:PassRole",
		"comprehend:StartSentimentDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartTargetedSentimentDetectionJob API call. */
	static readonly StartTargetedSentimentDetectionJob: string[] = [
		"iam:PassRole",
		"comprehend:StartTargetedSentimentDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartTopicsDetectionJob API call. */
	static readonly StartTopicsDetectionJob: string[] = [
		"iam:PassRole",
		"comprehend:StartTopicsDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StopDominantLanguageDetectionJob API call. */
	static readonly StopDominantLanguageDetectionJob: string[] = [
		"comprehend:StopDominantLanguageDetectionJob",
	];
	/** IAM actions required for the StopEntitiesDetectionJob API call. */
	static readonly StopEntitiesDetectionJob: string[] = [
		"comprehend:StopEntitiesDetectionJob",
	];
	/** IAM actions required for the StopEventsDetectionJob API call. */
	static readonly StopEventsDetectionJob: string[] = [
		"comprehend:StopEventsDetectionJob",
	];
	/** IAM actions required for the StopKeyPhrasesDetectionJob API call. */
	static readonly StopKeyPhrasesDetectionJob: string[] = [
		"comprehend:StopKeyPhrasesDetectionJob",
	];
	/** IAM actions required for the StopPiiEntitiesDetectionJob API call. */
	static readonly StopPiiEntitiesDetectionJob: string[] = [
		"comprehend:StopPiiEntitiesDetectionJob",
	];
	/** IAM actions required for the StopSentimentDetectionJob API call. */
	static readonly StopSentimentDetectionJob: string[] = [
		"comprehend:StopSentimentDetectionJob",
	];
	/** IAM actions required for the StopTargetedSentimentDetectionJob API call. */
	static readonly StopTargetedSentimentDetectionJob: string[] = [
		"comprehend:StopTargetedSentimentDetectionJob",
	];
	/** IAM actions required for the StopTrainingDocumentClassifier API call. */
	static readonly StopTrainingDocumentClassifier: string[] = [
		"comprehend:StopTrainingDocumentClassifier",
	];
	/** IAM actions required for the StopTrainingEntityRecognizer API call. */
	static readonly StopTrainingEntityRecognizer: string[] = [
		"comprehend:StopTrainingEntityRecognizer",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["comprehend:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["comprehend:UntagResource"];
	/** IAM actions required for the UpdateEndpoint API call. */
	static readonly UpdateEndpoint: string[] = [
		"iam:PassRole",
		"comprehend:UpdateEndpoint",
	];
	/** IAM actions required for the UpdateFlywheel API call. */
	static readonly UpdateFlywheel: string[] = [
		"iam:PassRole",
		"comprehend:UpdateFlywheel",
	];
}

/**
 * Condition key constants and builders for comprehend.
 */
export class ComprehendConditions {
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CreateDatasetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDocumentClassifier action. */
	static readonly CreateDocumentClassifierConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:ModelKmsKey",
		"comprehend:OutputKmsKey",
		"comprehend:VolumeKmsKey",
		"comprehend:VpcSecurityGroupIds",
		"comprehend:VpcSubnets",
	];
	/** Condition keys applicable to the CreateEntityRecognizer action. */
	static readonly CreateEntityRecognizerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:ModelKmsKey",
		"comprehend:VolumeKmsKey",
		"comprehend:VpcSecurityGroupIds",
		"comprehend:VpcSubnets",
	];
	/** Condition keys applicable to the DescribeFlywheelIteration action. */
	static readonly DescribeFlywheelIterationConditionKeys: string[] = [
		"comprehend:FlywheelIterationId",
	];
	/** Condition keys applicable to the ImportModel action. */
	static readonly ImportModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:ModelKmsKey",
	];
	/** Condition keys applicable to the StartDominantLanguageDetectionJob action. */
	static readonly StartDominantLanguageDetectionJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:OutputKmsKey",
		"comprehend:VolumeKmsKey",
		"comprehend:VpcSecurityGroupIds",
		"comprehend:VpcSubnets",
	];
	/** Condition keys applicable to the StartEventsDetectionJob action. */
	static readonly StartEventsDetectionJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:OutputKmsKey",
	];
	/** Condition keys applicable to the StartKeyPhrasesDetectionJob action. */
	static readonly StartKeyPhrasesDetectionJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:OutputKmsKey",
		"comprehend:VolumeKmsKey",
		"comprehend:VpcSecurityGroupIds",
		"comprehend:VpcSubnets",
	];
	/** Condition keys applicable to the StartPiiEntitiesDetectionJob action. */
	static readonly StartPiiEntitiesDetectionJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:OutputKmsKey",
	];
	/** Condition keys applicable to the StartSentimentDetectionJob action. */
	static readonly StartSentimentDetectionJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:OutputKmsKey",
		"comprehend:VolumeKmsKey",
		"comprehend:VpcSecurityGroupIds",
		"comprehend:VpcSubnets",
	];
	/** Condition keys applicable to the StartTargetedSentimentDetectionJob action. */
	static readonly StartTargetedSentimentDetectionJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:OutputKmsKey",
		"comprehend:VolumeKmsKey",
		"comprehend:VpcSecurityGroupIds",
		"comprehend:VpcSubnets",
	];
	/** Condition keys applicable to the StartTopicsDetectionJob action. */
	static readonly StartTopicsDetectionJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:OutputKmsKey",
		"comprehend:VolumeKmsKey",
		"comprehend:VpcSecurityGroupIds",
		"comprehend:VpcSubnets",
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
	/** Condition key: comprehend:DataLakeKmsKey (ARN) */
	static readonly DATA_LAKE_KMS_KEY = "comprehend:DataLakeKmsKey";
	/** Condition key: comprehend:FlywheelIterationId (String) */
	static readonly FLYWHEEL_ITERATION_ID = "comprehend:FlywheelIterationId";
	/** Condition key: comprehend:ModelKmsKey (ARN) */
	static readonly MODEL_KMS_KEY = "comprehend:ModelKmsKey";
	/** Condition key: comprehend:OutputKmsKey (ARN) */
	static readonly OUTPUT_KMS_KEY = "comprehend:OutputKmsKey";
	/** Condition key: comprehend:VolumeKmsKey (ARN) */
	static readonly VOLUME_KMS_KEY = "comprehend:VolumeKmsKey";
	/** Condition key: comprehend:VpcSecurityGroupIds (ArrayOfString) */
	static readonly VPC_SECURITY_GROUP_IDS = "comprehend:VpcSecurityGroupIds";
	/** Condition key: comprehend:VpcSubnets (ArrayOfString) */
	static readonly VPC_SUBNETS = "comprehend:VpcSubnets";

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

	/**
	 * Generates a condition block for `comprehend:DataLakeKmsKey`.
	 */
	static dataLakeKMSKey(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "comprehend:DataLakeKmsKey": value } };
	}

	/**
	 * Generates a condition block for `comprehend:FlywheelIterationId`.
	 */
	static flywheelIterationId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "comprehend:FlywheelIterationId": value } };
	}

	/**
	 * Generates a condition block for `comprehend:ModelKmsKey`.
	 */
	static modelKMSKey(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "comprehend:ModelKmsKey": value } };
	}

	/**
	 * Generates a condition block for `comprehend:OutputKmsKey`.
	 */
	static outputKMSKey(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "comprehend:OutputKmsKey": value } };
	}

	/**
	 * Generates a condition block for `comprehend:VolumeKmsKey`.
	 */
	static volumeKMSKey(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "comprehend:VolumeKmsKey": value } };
	}

	/**
	 * Generates a condition block for `comprehend:VpcSecurityGroupIds`.
	 */
	static vpcSecurityGroupIds(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "comprehend:VpcSecurityGroupIds": values },
		};
	}

	/**
	 * Generates a condition block for `comprehend:VpcSubnets`.
	 */
	static vpcSubnets(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "comprehend:VpcSubnets": values } };
	}
}
