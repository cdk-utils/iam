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
	static readonly BATCH_DETECT_DOMINANT_LANGUAGE =
		"comprehend:BatchDetectDominantLanguage";
	/** [Read] comprehend:BatchDetectEntities */
	static readonly BATCH_DETECT_ENTITIES = "comprehend:BatchDetectEntities";
	/** [Read] comprehend:BatchDetectKeyPhrases */
	static readonly BATCH_DETECT_KEY_PHRASES = "comprehend:BatchDetectKeyPhrases";
	/** [Read] comprehend:BatchDetectSentiment */
	static readonly BATCH_DETECT_SENTIMENT = "comprehend:BatchDetectSentiment";
	/** [Read] comprehend:BatchDetectSyntax */
	static readonly BATCH_DETECT_SYNTAX = "comprehend:BatchDetectSyntax";
	/** [Read] comprehend:BatchDetectTargetedSentiment */
	static readonly BATCH_DETECT_TARGETED_SENTIMENT =
		"comprehend:BatchDetectTargetedSentiment";
	/** [Read] comprehend:ClassifyDocument */
	static readonly CLASSIFY_DOCUMENT = "comprehend:ClassifyDocument";
	/** [Read] comprehend:ContainsPiiEntities */
	static readonly CONTAINS_PII_ENTITIES = "comprehend:ContainsPiiEntities";
	/** [Write] comprehend:CreateDataset */
	static readonly CREATE_DATASET = "comprehend:CreateDataset";
	/** [Write] comprehend:CreateDocumentClassifier */
	static readonly CREATE_DOCUMENT_CLASSIFIER =
		"comprehend:CreateDocumentClassifier";
	/** [Write] comprehend:CreateEndpoint */
	static readonly CREATE_ENDPOINT = "comprehend:CreateEndpoint";
	/** [Write] comprehend:CreateEntityRecognizer */
	static readonly CREATE_ENTITY_RECOGNIZER =
		"comprehend:CreateEntityRecognizer";
	/** [Write] comprehend:CreateFlywheel */
	static readonly CREATE_FLYWHEEL = "comprehend:CreateFlywheel";
	/** [Write] comprehend:DeleteDocumentClassifier */
	static readonly DELETE_DOCUMENT_CLASSIFIER =
		"comprehend:DeleteDocumentClassifier";
	/** [Write] comprehend:DeleteEndpoint */
	static readonly DELETE_ENDPOINT = "comprehend:DeleteEndpoint";
	/** [Write] comprehend:DeleteEntityRecognizer */
	static readonly DELETE_ENTITY_RECOGNIZER =
		"comprehend:DeleteEntityRecognizer";
	/** [Write] comprehend:DeleteFlywheel */
	static readonly DELETE_FLYWHEEL = "comprehend:DeleteFlywheel";
	/** [Write] comprehend:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "comprehend:DeleteResourcePolicy";
	/** [Read] comprehend:DescribeDataset */
	static readonly DESCRIBE_DATASET = "comprehend:DescribeDataset";
	/** [Read] comprehend:DescribeDocumentClassificationJob */
	static readonly DESCRIBE_DOCUMENT_CLASSIFICATION_JOB =
		"comprehend:DescribeDocumentClassificationJob";
	/** [Read] comprehend:DescribeDocumentClassifier */
	static readonly DESCRIBE_DOCUMENT_CLASSIFIER =
		"comprehend:DescribeDocumentClassifier";
	/** [Read] comprehend:DescribeDominantLanguageDetectionJob */
	static readonly DESCRIBE_DOMINANT_LANGUAGE_DETECTION_JOB =
		"comprehend:DescribeDominantLanguageDetectionJob";
	/** [Read] comprehend:DescribeEndpoint */
	static readonly DESCRIBE_ENDPOINT = "comprehend:DescribeEndpoint";
	/** [Read] comprehend:DescribeEntitiesDetectionJob */
	static readonly DESCRIBE_ENTITIES_DETECTION_JOB =
		"comprehend:DescribeEntitiesDetectionJob";
	/** [Read] comprehend:DescribeEntityRecognizer */
	static readonly DESCRIBE_ENTITY_RECOGNIZER =
		"comprehend:DescribeEntityRecognizer";
	/** [Read] comprehend:DescribeEventsDetectionJob */
	static readonly DESCRIBE_EVENTS_DETECTION_JOB =
		"comprehend:DescribeEventsDetectionJob";
	/** [Read] comprehend:DescribeFlywheel */
	static readonly DESCRIBE_FLYWHEEL = "comprehend:DescribeFlywheel";
	/** [Read] comprehend:DescribeFlywheelIteration */
	static readonly DESCRIBE_FLYWHEEL_ITERATION =
		"comprehend:DescribeFlywheelIteration";
	/** [Read] comprehend:DescribeKeyPhrasesDetectionJob */
	static readonly DESCRIBE_KEY_PHRASES_DETECTION_JOB =
		"comprehend:DescribeKeyPhrasesDetectionJob";
	/** [Read] comprehend:DescribePiiEntitiesDetectionJob */
	static readonly DESCRIBE_PII_ENTITIES_DETECTION_JOB =
		"comprehend:DescribePiiEntitiesDetectionJob";
	/** [Read] comprehend:DescribeResourcePolicy */
	static readonly DESCRIBE_RESOURCE_POLICY =
		"comprehend:DescribeResourcePolicy";
	/** [Read] comprehend:DescribeSentimentDetectionJob */
	static readonly DESCRIBE_SENTIMENT_DETECTION_JOB =
		"comprehend:DescribeSentimentDetectionJob";
	/** [Read] comprehend:DescribeTargetedSentimentDetectionJob */
	static readonly DESCRIBE_TARGETED_SENTIMENT_DETECTION_JOB =
		"comprehend:DescribeTargetedSentimentDetectionJob";
	/** [Read] comprehend:DescribeTopicsDetectionJob */
	static readonly DESCRIBE_TOPICS_DETECTION_JOB =
		"comprehend:DescribeTopicsDetectionJob";
	/** [Read] comprehend:DetectDominantLanguage */
	static readonly DETECT_DOMINANT_LANGUAGE =
		"comprehend:DetectDominantLanguage";
	/** [Read] comprehend:DetectEntities */
	static readonly DETECT_ENTITIES = "comprehend:DetectEntities";
	/** [Read] comprehend:DetectKeyPhrases */
	static readonly DETECT_KEY_PHRASES = "comprehend:DetectKeyPhrases";
	/** [Read] comprehend:DetectPiiEntities */
	static readonly DETECT_PII_ENTITIES = "comprehend:DetectPiiEntities";
	/** [Read] comprehend:DetectSentiment */
	static readonly DETECT_SENTIMENT = "comprehend:DetectSentiment";
	/** [Read] comprehend:DetectSyntax */
	static readonly DETECT_SYNTAX = "comprehend:DetectSyntax";
	/** [Read] comprehend:DetectTargetedSentiment */
	static readonly DETECT_TARGETED_SENTIMENT =
		"comprehend:DetectTargetedSentiment";
	/** [Read] comprehend:DetectToxicContent */
	static readonly DETECT_TOXIC_CONTENT = "comprehend:DetectToxicContent";
	/** [Write] comprehend:ImportModel */
	static readonly IMPORT_MODEL = "comprehend:ImportModel";
	/** [Read] comprehend:ListDatasets */
	static readonly LIST_DATASETS = "comprehend:ListDatasets";
	/** [Read] comprehend:ListDocumentClassificationJobs */
	static readonly LIST_DOCUMENT_CLASSIFICATION_JOBS =
		"comprehend:ListDocumentClassificationJobs";
	/** [Read] comprehend:ListDocumentClassifierSummaries */
	static readonly LIST_DOCUMENT_CLASSIFIER_SUMMARIES =
		"comprehend:ListDocumentClassifierSummaries";
	/** [Read] comprehend:ListDocumentClassifiers */
	static readonly LIST_DOCUMENT_CLASSIFIERS =
		"comprehend:ListDocumentClassifiers";
	/** [Read] comprehend:ListDominantLanguageDetectionJobs */
	static readonly LIST_DOMINANT_LANGUAGE_DETECTION_JOBS =
		"comprehend:ListDominantLanguageDetectionJobs";
	/** [Read] comprehend:ListEndpoints */
	static readonly LIST_ENDPOINTS = "comprehend:ListEndpoints";
	/** [Read] comprehend:ListEntitiesDetectionJobs */
	static readonly LIST_ENTITIES_DETECTION_JOBS =
		"comprehend:ListEntitiesDetectionJobs";
	/** [Read] comprehend:ListEntityRecognizerSummaries */
	static readonly LIST_ENTITY_RECOGNIZER_SUMMARIES =
		"comprehend:ListEntityRecognizerSummaries";
	/** [Read] comprehend:ListEntityRecognizers */
	static readonly LIST_ENTITY_RECOGNIZERS = "comprehend:ListEntityRecognizers";
	/** [Read] comprehend:ListEventsDetectionJobs */
	static readonly LIST_EVENTS_DETECTION_JOBS =
		"comprehend:ListEventsDetectionJobs";
	/** [Read] comprehend:ListFlywheelIterationHistory */
	static readonly LIST_FLYWHEEL_ITERATION_HISTORY =
		"comprehend:ListFlywheelIterationHistory";
	/** [Read] comprehend:ListFlywheels */
	static readonly LIST_FLYWHEELS = "comprehend:ListFlywheels";
	/** [Read] comprehend:ListKeyPhrasesDetectionJobs */
	static readonly LIST_KEY_PHRASES_DETECTION_JOBS =
		"comprehend:ListKeyPhrasesDetectionJobs";
	/** [Read] comprehend:ListPiiEntitiesDetectionJobs */
	static readonly LIST_PII_ENTITIES_DETECTION_JOBS =
		"comprehend:ListPiiEntitiesDetectionJobs";
	/** [Read] comprehend:ListSentimentDetectionJobs */
	static readonly LIST_SENTIMENT_DETECTION_JOBS =
		"comprehend:ListSentimentDetectionJobs";
	/** [Read] comprehend:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "comprehend:ListTagsForResource";
	/** [Read] comprehend:ListTargetedSentimentDetectionJobs */
	static readonly LIST_TARGETED_SENTIMENT_DETECTION_JOBS =
		"comprehend:ListTargetedSentimentDetectionJobs";
	/** [Read] comprehend:ListTopicsDetectionJobs */
	static readonly LIST_TOPICS_DETECTION_JOBS =
		"comprehend:ListTopicsDetectionJobs";
	/** [Write] comprehend:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "comprehend:PutResourcePolicy";
	/** [Write] comprehend:StartDocumentClassificationJob */
	static readonly START_DOCUMENT_CLASSIFICATION_JOB =
		"comprehend:StartDocumentClassificationJob";
	/** [Write] comprehend:StartDominantLanguageDetectionJob */
	static readonly START_DOMINANT_LANGUAGE_DETECTION_JOB =
		"comprehend:StartDominantLanguageDetectionJob";
	/** [Write] comprehend:StartEntitiesDetectionJob */
	static readonly START_ENTITIES_DETECTION_JOB =
		"comprehend:StartEntitiesDetectionJob";
	/** [Write] comprehend:StartEventsDetectionJob */
	static readonly START_EVENTS_DETECTION_JOB =
		"comprehend:StartEventsDetectionJob";
	/** [Write] comprehend:StartFlywheelIteration */
	static readonly START_FLYWHEEL_ITERATION =
		"comprehend:StartFlywheelIteration";
	/** [Write] comprehend:StartKeyPhrasesDetectionJob */
	static readonly START_KEY_PHRASES_DETECTION_JOB =
		"comprehend:StartKeyPhrasesDetectionJob";
	/** [Write] comprehend:StartPiiEntitiesDetectionJob */
	static readonly START_PII_ENTITIES_DETECTION_JOB =
		"comprehend:StartPiiEntitiesDetectionJob";
	/** [Write] comprehend:StartSentimentDetectionJob */
	static readonly START_SENTIMENT_DETECTION_JOB =
		"comprehend:StartSentimentDetectionJob";
	/** [Write] comprehend:StartTargetedSentimentDetectionJob */
	static readonly START_TARGETED_SENTIMENT_DETECTION_JOB =
		"comprehend:StartTargetedSentimentDetectionJob";
	/** [Write] comprehend:StartTopicsDetectionJob */
	static readonly START_TOPICS_DETECTION_JOB =
		"comprehend:StartTopicsDetectionJob";
	/** [Write] comprehend:StopDominantLanguageDetectionJob */
	static readonly STOP_DOMINANT_LANGUAGE_DETECTION_JOB =
		"comprehend:StopDominantLanguageDetectionJob";
	/** [Write] comprehend:StopEntitiesDetectionJob */
	static readonly STOP_ENTITIES_DETECTION_JOB =
		"comprehend:StopEntitiesDetectionJob";
	/** [Write] comprehend:StopEventsDetectionJob */
	static readonly STOP_EVENTS_DETECTION_JOB =
		"comprehend:StopEventsDetectionJob";
	/** [Write] comprehend:StopKeyPhrasesDetectionJob */
	static readonly STOP_KEY_PHRASES_DETECTION_JOB =
		"comprehend:StopKeyPhrasesDetectionJob";
	/** [Write] comprehend:StopPiiEntitiesDetectionJob */
	static readonly STOP_PII_ENTITIES_DETECTION_JOB =
		"comprehend:StopPiiEntitiesDetectionJob";
	/** [Write] comprehend:StopSentimentDetectionJob */
	static readonly STOP_SENTIMENT_DETECTION_JOB =
		"comprehend:StopSentimentDetectionJob";
	/** [Write] comprehend:StopTargetedSentimentDetectionJob */
	static readonly STOP_TARGETED_SENTIMENT_DETECTION_JOB =
		"comprehend:StopTargetedSentimentDetectionJob";
	/** [Write] comprehend:StopTrainingDocumentClassifier */
	static readonly STOP_TRAINING_DOCUMENT_CLASSIFIER =
		"comprehend:StopTrainingDocumentClassifier";
	/** [Write] comprehend:StopTrainingEntityRecognizer */
	static readonly STOP_TRAINING_ENTITY_RECOGNIZER =
		"comprehend:StopTrainingEntityRecognizer";
	/** [Tagging] comprehend:TagResource */
	static readonly TAG_RESOURCE = "comprehend:TagResource";
	/** [Tagging] comprehend:UntagResource */
	static readonly UNTAG_RESOURCE = "comprehend:UntagResource";
	/** [Write] comprehend:UpdateEndpoint */
	static readonly UPDATE_ENDPOINT = "comprehend:UpdateEndpoint";
	/** [Write] comprehend:UpdateFlywheel */
	static readonly UPDATE_FLYWHEEL = "comprehend:UpdateFlywheel";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ComprehendActions.BATCH_DETECT_DOMINANT_LANGUAGE,
		ComprehendActions.BATCH_DETECT_ENTITIES,
		ComprehendActions.BATCH_DETECT_KEY_PHRASES,
		ComprehendActions.BATCH_DETECT_SENTIMENT,
		ComprehendActions.BATCH_DETECT_SYNTAX,
		ComprehendActions.BATCH_DETECT_TARGETED_SENTIMENT,
		ComprehendActions.CLASSIFY_DOCUMENT,
		ComprehendActions.CONTAINS_PII_ENTITIES,
		ComprehendActions.DESCRIBE_DATASET,
		ComprehendActions.DESCRIBE_DOCUMENT_CLASSIFICATION_JOB,
		ComprehendActions.DESCRIBE_DOCUMENT_CLASSIFIER,
		ComprehendActions.DESCRIBE_DOMINANT_LANGUAGE_DETECTION_JOB,
		ComprehendActions.DESCRIBE_ENDPOINT,
		ComprehendActions.DESCRIBE_ENTITIES_DETECTION_JOB,
		ComprehendActions.DESCRIBE_ENTITY_RECOGNIZER,
		ComprehendActions.DESCRIBE_EVENTS_DETECTION_JOB,
		ComprehendActions.DESCRIBE_FLYWHEEL,
		ComprehendActions.DESCRIBE_FLYWHEEL_ITERATION,
		ComprehendActions.DESCRIBE_KEY_PHRASES_DETECTION_JOB,
		ComprehendActions.DESCRIBE_PII_ENTITIES_DETECTION_JOB,
		ComprehendActions.DESCRIBE_RESOURCE_POLICY,
		ComprehendActions.DESCRIBE_SENTIMENT_DETECTION_JOB,
		ComprehendActions.DESCRIBE_TARGETED_SENTIMENT_DETECTION_JOB,
		ComprehendActions.DESCRIBE_TOPICS_DETECTION_JOB,
		ComprehendActions.DETECT_DOMINANT_LANGUAGE,
		ComprehendActions.DETECT_ENTITIES,
		ComprehendActions.DETECT_KEY_PHRASES,
		ComprehendActions.DETECT_PII_ENTITIES,
		ComprehendActions.DETECT_SENTIMENT,
		ComprehendActions.DETECT_SYNTAX,
		ComprehendActions.DETECT_TARGETED_SENTIMENT,
		ComprehendActions.DETECT_TOXIC_CONTENT,
		ComprehendActions.LIST_DATASETS,
		ComprehendActions.LIST_DOCUMENT_CLASSIFICATION_JOBS,
		ComprehendActions.LIST_DOCUMENT_CLASSIFIER_SUMMARIES,
		ComprehendActions.LIST_DOCUMENT_CLASSIFIERS,
		ComprehendActions.LIST_DOMINANT_LANGUAGE_DETECTION_JOBS,
		ComprehendActions.LIST_ENDPOINTS,
		ComprehendActions.LIST_ENTITIES_DETECTION_JOBS,
		ComprehendActions.LIST_ENTITY_RECOGNIZER_SUMMARIES,
		ComprehendActions.LIST_ENTITY_RECOGNIZERS,
		ComprehendActions.LIST_EVENTS_DETECTION_JOBS,
		ComprehendActions.LIST_FLYWHEEL_ITERATION_HISTORY,
		ComprehendActions.LIST_FLYWHEELS,
		ComprehendActions.LIST_KEY_PHRASES_DETECTION_JOBS,
		ComprehendActions.LIST_PII_ENTITIES_DETECTION_JOBS,
		ComprehendActions.LIST_SENTIMENT_DETECTION_JOBS,
		ComprehendActions.LIST_TAGS_FOR_RESOURCE,
		ComprehendActions.LIST_TARGETED_SENTIMENT_DETECTION_JOBS,
		ComprehendActions.LIST_TOPICS_DETECTION_JOBS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ComprehendActions.CREATE_DATASET,
		ComprehendActions.CREATE_DOCUMENT_CLASSIFIER,
		ComprehendActions.CREATE_ENDPOINT,
		ComprehendActions.CREATE_ENTITY_RECOGNIZER,
		ComprehendActions.CREATE_FLYWHEEL,
		ComprehendActions.DELETE_DOCUMENT_CLASSIFIER,
		ComprehendActions.DELETE_ENDPOINT,
		ComprehendActions.DELETE_ENTITY_RECOGNIZER,
		ComprehendActions.DELETE_FLYWHEEL,
		ComprehendActions.DELETE_RESOURCE_POLICY,
		ComprehendActions.IMPORT_MODEL,
		ComprehendActions.PUT_RESOURCE_POLICY,
		ComprehendActions.START_DOCUMENT_CLASSIFICATION_JOB,
		ComprehendActions.START_DOMINANT_LANGUAGE_DETECTION_JOB,
		ComprehendActions.START_ENTITIES_DETECTION_JOB,
		ComprehendActions.START_EVENTS_DETECTION_JOB,
		ComprehendActions.START_FLYWHEEL_ITERATION,
		ComprehendActions.START_KEY_PHRASES_DETECTION_JOB,
		ComprehendActions.START_PII_ENTITIES_DETECTION_JOB,
		ComprehendActions.START_SENTIMENT_DETECTION_JOB,
		ComprehendActions.START_TARGETED_SENTIMENT_DETECTION_JOB,
		ComprehendActions.START_TOPICS_DETECTION_JOB,
		ComprehendActions.STOP_DOMINANT_LANGUAGE_DETECTION_JOB,
		ComprehendActions.STOP_ENTITIES_DETECTION_JOB,
		ComprehendActions.STOP_EVENTS_DETECTION_JOB,
		ComprehendActions.STOP_KEY_PHRASES_DETECTION_JOB,
		ComprehendActions.STOP_PII_ENTITIES_DETECTION_JOB,
		ComprehendActions.STOP_SENTIMENT_DETECTION_JOB,
		ComprehendActions.STOP_TARGETED_SENTIMENT_DETECTION_JOB,
		ComprehendActions.STOP_TRAINING_DOCUMENT_CLASSIFIER,
		ComprehendActions.STOP_TRAINING_ENTITY_RECOGNIZER,
		ComprehendActions.UPDATE_ENDPOINT,
		ComprehendActions.UPDATE_FLYWHEEL,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ComprehendActions.TAG_RESOURCE,
		ComprehendActions.UNTAG_RESOURCE,
	];
}

const DocumentClassificationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):document-classification-job/(?<jobId>[^:/?]+)$",
);
const DocumentClassifierArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):document-classifier/(?<documentClassifierName>[^:/?]+)$",
);
const DocumentClassifierEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):document-classifier-endpoint/(?<documentClassifierEndpointName>[^:/?]+)$",
);
const DominantLanguageDetectionJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):dominant-language-detection-job/(?<jobId>[^:/?]+)$",
);
const EntitiesDetectionJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):entities-detection-job/(?<jobId>[^:/?]+)$",
);
const EntityRecognizerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):entity-recognizer/(?<entityRecognizerName>[^:/?]+)$",
);
const EntityRecognizerEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):entity-recognizer-endpoint/(?<entityRecognizerEndpointName>[^:/?]+)$",
);
const EventsDetectionJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):events-detection-job/(?<jobId>[^:/?]+)$",
);
const FlywheelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):flywheel/(?<flywheelName>[^:/?]+)$",
);
const FlywheelDatasetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):flywheel/(?<flywheelName>[^:/?]+)/dataset/(?<datasetName>[^:/?]+)$",
);
const KeyPhrasesDetectionJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):key-phrases-detection-job/(?<jobId>[^:/?]+)$",
);
const PiiEntitiesDetectionJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):pii-entities-detection-job/(?<jobId>[^:/?]+)$",
);
const SentimentDetectionJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):sentiment-detection-job/(?<jobId>[^:/?]+)$",
);
const TargetedSentimentDetectionJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):targeted-sentiment-detection-job/(?<jobId>[^:/?]+)$",
);
const TopicsDetectionJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):comprehend:(?<region>[^:]*):(?<account>[^:]*):topics-detection-job/(?<jobId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for comprehend resources.
 */
export class ComprehendResources {
	/**
	 * Builds an ARN for the document-classification-job resource.
	 */
	static documentClassificationJob(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDocumentClassificationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static documentClassifier(props: {
		/** The DocumentClassifierName component of the ARN. */
		readonly documentClassifierName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDocumentClassifierArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		documentClassifierName: string;
	} {
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
	static documentClassifierEndpoint(props: {
		/** The DocumentClassifierEndpointName component of the ARN. */
		readonly documentClassifierEndpointName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDocumentClassifierEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		documentClassifierEndpointName: string;
	} {
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
	static dominantLanguageDetectionJob(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDominantLanguageDetectionJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static entitiesDetectionJob(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEntitiesDetectionJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static entityRecognizer(props: {
		/** The EntityRecognizerName component of the ARN. */
		readonly entityRecognizerName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEntityRecognizerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		entityRecognizerName: string;
	} {
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
	static entityRecognizerEndpoint(props: {
		/** The EntityRecognizerEndpointName component of the ARN. */
		readonly entityRecognizerEndpointName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEntityRecognizerEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		entityRecognizerEndpointName: string;
	} {
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
	static eventsDetectionJob(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEventsDetectionJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static flywheel(props: {
		/** The FlywheelName component of the ARN. */
		readonly flywheelName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFlywheelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		flywheelName: string;
	} {
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
	static flywheelDataset(props: {
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
	}): string {
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
	static parseFlywheelDatasetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		flywheelName: string;
		datasetName: string;
	} {
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
	static keyPhrasesDetectionJob(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseKeyPhrasesDetectionJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static piiEntitiesDetectionJob(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePiiEntitiesDetectionJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static sentimentDetectionJob(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSentimentDetectionJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static targetedSentimentDetectionJob(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTargetedSentimentDetectionJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static topicsDetectionJob(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTopicsDetectionJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static readonly BATCH_DETECT_DOMINANT_LANGUAGE: string[] = [
		"comprehend:BatchDetectDominantLanguage",
	];
	/** IAM actions required for the BatchDetectEntities API call. */
	static readonly BATCH_DETECT_ENTITIES: string[] = [
		"comprehend:BatchDetectEntities",
	];
	/** IAM actions required for the BatchDetectKeyPhrases API call. */
	static readonly BATCH_DETECT_KEY_PHRASES: string[] = [
		"comprehend:BatchDetectKeyPhrases",
	];
	/** IAM actions required for the BatchDetectSentiment API call. */
	static readonly BATCH_DETECT_SENTIMENT: string[] = [
		"comprehend:BatchDetectSentiment",
	];
	/** IAM actions required for the BatchDetectSyntax API call. */
	static readonly BATCH_DETECT_SYNTAX: string[] = [
		"comprehend:BatchDetectSyntax",
	];
	/** IAM actions required for the BatchDetectTargetedSentiment API call. */
	static readonly BATCH_DETECT_TARGETED_SENTIMENT: string[] = [
		"comprehend:BatchDetectTargetedSentiment",
	];
	/** IAM actions required for the ClassifyDocument API call. */
	static readonly CLASSIFY_DOCUMENT: string[] = ["comprehend:ClassifyDocument"];
	/** IAM actions required for the ContainsPiiEntities API call. */
	static readonly CONTAINS_PII_ENTITIES: string[] = [
		"comprehend:ContainsPiiEntities",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CREATE_DATASET: string[] = [
		"comprehend:CreateDataset",
		"comprehend:TagResource",
	];
	/** IAM actions required for the CreateDocumentClassifier API call. */
	static readonly CREATE_DOCUMENT_CLASSIFIER: string[] = [
		"comprehend:CreateDocumentClassifier",
		"iam:PassRole",
		"comprehend:TagResource",
	];
	/** IAM actions required for the CreateEndpoint API call. */
	static readonly CREATE_ENDPOINT: string[] = [
		"comprehend:CreateEndpoint",
		"iam:PassRole",
		"comprehend:TagResource",
	];
	/** IAM actions required for the CreateEntityRecognizer API call. */
	static readonly CREATE_ENTITY_RECOGNIZER: string[] = [
		"comprehend:CreateEntityRecognizer",
		"iam:PassRole",
		"comprehend:TagResource",
	];
	/** IAM actions required for the CreateFlywheel API call. */
	static readonly CREATE_FLYWHEEL: string[] = [
		"comprehend:CreateFlywheel",
		"iam:PassRole",
		"comprehend:TagResource",
	];
	/** IAM actions required for the DeleteDocumentClassifier API call. */
	static readonly DELETE_DOCUMENT_CLASSIFIER: string[] = [
		"comprehend:DeleteDocumentClassifier",
	];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DELETE_ENDPOINT: string[] = ["comprehend:DeleteEndpoint"];
	/** IAM actions required for the DeleteEntityRecognizer API call. */
	static readonly DELETE_ENTITY_RECOGNIZER: string[] = [
		"comprehend:DeleteEntityRecognizer",
	];
	/** IAM actions required for the DeleteFlywheel API call. */
	static readonly DELETE_FLYWHEEL: string[] = ["comprehend:DeleteFlywheel"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"comprehend:DeleteResourcePolicy",
	];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DESCRIBE_DATASET: string[] = ["comprehend:DescribeDataset"];
	/** IAM actions required for the DescribeDocumentClassificationJob API call. */
	static readonly DESCRIBE_DOCUMENT_CLASSIFICATION_JOB: string[] = [
		"comprehend:DescribeDocumentClassificationJob",
	];
	/** IAM actions required for the DescribeDocumentClassifier API call. */
	static readonly DESCRIBE_DOCUMENT_CLASSIFIER: string[] = [
		"comprehend:DescribeDocumentClassifier",
	];
	/** IAM actions required for the DescribeDominantLanguageDetectionJob API call. */
	static readonly DESCRIBE_DOMINANT_LANGUAGE_DETECTION_JOB: string[] = [
		"comprehend:DescribeDominantLanguageDetectionJob",
	];
	/** IAM actions required for the DescribeEndpoint API call. */
	static readonly DESCRIBE_ENDPOINT: string[] = ["comprehend:DescribeEndpoint"];
	/** IAM actions required for the DescribeEntitiesDetectionJob API call. */
	static readonly DESCRIBE_ENTITIES_DETECTION_JOB: string[] = [
		"comprehend:DescribeEntitiesDetectionJob",
	];
	/** IAM actions required for the DescribeEntityRecognizer API call. */
	static readonly DESCRIBE_ENTITY_RECOGNIZER: string[] = [
		"comprehend:DescribeEntityRecognizer",
	];
	/** IAM actions required for the DescribeEventsDetectionJob API call. */
	static readonly DESCRIBE_EVENTS_DETECTION_JOB: string[] = [
		"comprehend:DescribeEventsDetectionJob",
	];
	/** IAM actions required for the DescribeFlywheel API call. */
	static readonly DESCRIBE_FLYWHEEL: string[] = ["comprehend:DescribeFlywheel"];
	/** IAM actions required for the DescribeFlywheelIteration API call. */
	static readonly DESCRIBE_FLYWHEEL_ITERATION: string[] = [
		"comprehend:DescribeFlywheelIteration",
	];
	/** IAM actions required for the DescribeKeyPhrasesDetectionJob API call. */
	static readonly DESCRIBE_KEY_PHRASES_DETECTION_JOB: string[] = [
		"comprehend:DescribeKeyPhrasesDetectionJob",
	];
	/** IAM actions required for the DescribePiiEntitiesDetectionJob API call. */
	static readonly DESCRIBE_PII_ENTITIES_DETECTION_JOB: string[] = [
		"comprehend:DescribePiiEntitiesDetectionJob",
	];
	/** IAM actions required for the DescribeResourcePolicy API call. */
	static readonly DESCRIBE_RESOURCE_POLICY: string[] = [
		"comprehend:DescribeResourcePolicy",
	];
	/** IAM actions required for the DescribeSentimentDetectionJob API call. */
	static readonly DESCRIBE_SENTIMENT_DETECTION_JOB: string[] = [
		"comprehend:DescribeSentimentDetectionJob",
	];
	/** IAM actions required for the DescribeTargetedSentimentDetectionJob API call. */
	static readonly DESCRIBE_TARGETED_SENTIMENT_DETECTION_JOB: string[] = [
		"comprehend:DescribeTargetedSentimentDetectionJob",
	];
	/** IAM actions required for the DescribeTopicsDetectionJob API call. */
	static readonly DESCRIBE_TOPICS_DETECTION_JOB: string[] = [
		"comprehend:DescribeTopicsDetectionJob",
	];
	/** IAM actions required for the DetectDominantLanguage API call. */
	static readonly DETECT_DOMINANT_LANGUAGE: string[] = [
		"comprehend:DetectDominantLanguage",
	];
	/** IAM actions required for the DetectEntities API call. */
	static readonly DETECT_ENTITIES: string[] = ["comprehend:DetectEntities"];
	/** IAM actions required for the DetectKeyPhrases API call. */
	static readonly DETECT_KEY_PHRASES: string[] = [
		"comprehend:DetectKeyPhrases",
	];
	/** IAM actions required for the DetectPiiEntities API call. */
	static readonly DETECT_PII_ENTITIES: string[] = [
		"comprehend:DetectPiiEntities",
	];
	/** IAM actions required for the DetectSentiment API call. */
	static readonly DETECT_SENTIMENT: string[] = ["comprehend:DetectSentiment"];
	/** IAM actions required for the DetectSyntax API call. */
	static readonly DETECT_SYNTAX: string[] = ["comprehend:DetectSyntax"];
	/** IAM actions required for the DetectTargetedSentiment API call. */
	static readonly DETECT_TARGETED_SENTIMENT: string[] = [
		"comprehend:DetectTargetedSentiment",
	];
	/** IAM actions required for the DetectToxicContent API call. */
	static readonly DETECT_TOXIC_CONTENT: string[] = [
		"comprehend:DetectToxicContent",
	];
	/** IAM actions required for the ImportModel API call. */
	static readonly IMPORT_MODEL: string[] = [
		"comprehend:ImportModel",
		"iam:PassRole",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly LIST_DATASETS: string[] = ["comprehend:ListDatasets"];
	/** IAM actions required for the ListDocumentClassificationJobs API call. */
	static readonly LIST_DOCUMENT_CLASSIFICATION_JOBS: string[] = [
		"comprehend:ListDocumentClassificationJobs",
	];
	/** IAM actions required for the ListDocumentClassifierSummaries API call. */
	static readonly LIST_DOCUMENT_CLASSIFIER_SUMMARIES: string[] = [
		"comprehend:ListDocumentClassifierSummaries",
	];
	/** IAM actions required for the ListDocumentClassifiers API call. */
	static readonly LIST_DOCUMENT_CLASSIFIERS: string[] = [
		"comprehend:ListDocumentClassifiers",
	];
	/** IAM actions required for the ListDominantLanguageDetectionJobs API call. */
	static readonly LIST_DOMINANT_LANGUAGE_DETECTION_JOBS: string[] = [
		"comprehend:ListDominantLanguageDetectionJobs",
	];
	/** IAM actions required for the ListEndpoints API call. */
	static readonly LIST_ENDPOINTS: string[] = ["comprehend:ListEndpoints"];
	/** IAM actions required for the ListEntitiesDetectionJobs API call. */
	static readonly LIST_ENTITIES_DETECTION_JOBS: string[] = [
		"comprehend:ListEntitiesDetectionJobs",
	];
	/** IAM actions required for the ListEntityRecognizerSummaries API call. */
	static readonly LIST_ENTITY_RECOGNIZER_SUMMARIES: string[] = [
		"comprehend:ListEntityRecognizerSummaries",
	];
	/** IAM actions required for the ListEntityRecognizers API call. */
	static readonly LIST_ENTITY_RECOGNIZERS: string[] = [
		"comprehend:ListEntityRecognizers",
	];
	/** IAM actions required for the ListEventsDetectionJobs API call. */
	static readonly LIST_EVENTS_DETECTION_JOBS: string[] = [
		"comprehend:ListEventsDetectionJobs",
	];
	/** IAM actions required for the ListFlywheelIterationHistory API call. */
	static readonly LIST_FLYWHEEL_ITERATION_HISTORY: string[] = [
		"comprehend:ListFlywheelIterationHistory",
	];
	/** IAM actions required for the ListFlywheels API call. */
	static readonly LIST_FLYWHEELS: string[] = ["comprehend:ListFlywheels"];
	/** IAM actions required for the ListKeyPhrasesDetectionJobs API call. */
	static readonly LIST_KEY_PHRASES_DETECTION_JOBS: string[] = [
		"comprehend:ListKeyPhrasesDetectionJobs",
	];
	/** IAM actions required for the ListPiiEntitiesDetectionJobs API call. */
	static readonly LIST_PII_ENTITIES_DETECTION_JOBS: string[] = [
		"comprehend:ListPiiEntitiesDetectionJobs",
	];
	/** IAM actions required for the ListSentimentDetectionJobs API call. */
	static readonly LIST_SENTIMENT_DETECTION_JOBS: string[] = [
		"comprehend:ListSentimentDetectionJobs",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"comprehend:ListTagsForResource",
	];
	/** IAM actions required for the ListTargetedSentimentDetectionJobs API call. */
	static readonly LIST_TARGETED_SENTIMENT_DETECTION_JOBS: string[] = [
		"comprehend:ListTargetedSentimentDetectionJobs",
	];
	/** IAM actions required for the ListTopicsDetectionJobs API call. */
	static readonly LIST_TOPICS_DETECTION_JOBS: string[] = [
		"comprehend:ListTopicsDetectionJobs",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"comprehend:PutResourcePolicy",
	];
	/** IAM actions required for the StartDocumentClassificationJob API call. */
	static readonly START_DOCUMENT_CLASSIFICATION_JOB: string[] = [
		"iam:PassRole",
		"comprehend:StartDocumentClassificationJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartDominantLanguageDetectionJob API call. */
	static readonly START_DOMINANT_LANGUAGE_DETECTION_JOB: string[] = [
		"iam:PassRole",
		"comprehend:StartDominantLanguageDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartEntitiesDetectionJob API call. */
	static readonly START_ENTITIES_DETECTION_JOB: string[] = [
		"iam:PassRole",
		"comprehend:StartEntitiesDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartEventsDetectionJob API call. */
	static readonly START_EVENTS_DETECTION_JOB: string[] = [
		"iam:PassRole",
		"comprehend:StartEventsDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartFlywheelIteration API call. */
	static readonly START_FLYWHEEL_ITERATION: string[] = [
		"comprehend:StartFlywheelIteration",
	];
	/** IAM actions required for the StartKeyPhrasesDetectionJob API call. */
	static readonly START_KEY_PHRASES_DETECTION_JOB: string[] = [
		"iam:PassRole",
		"comprehend:StartKeyPhrasesDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartPiiEntitiesDetectionJob API call. */
	static readonly START_PII_ENTITIES_DETECTION_JOB: string[] = [
		"iam:PassRole",
		"comprehend:StartPiiEntitiesDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartSentimentDetectionJob API call. */
	static readonly START_SENTIMENT_DETECTION_JOB: string[] = [
		"iam:PassRole",
		"comprehend:StartSentimentDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartTargetedSentimentDetectionJob API call. */
	static readonly START_TARGETED_SENTIMENT_DETECTION_JOB: string[] = [
		"iam:PassRole",
		"comprehend:StartTargetedSentimentDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StartTopicsDetectionJob API call. */
	static readonly START_TOPICS_DETECTION_JOB: string[] = [
		"iam:PassRole",
		"comprehend:StartTopicsDetectionJob",
		"comprehend:TagResource",
	];
	/** IAM actions required for the StopDominantLanguageDetectionJob API call. */
	static readonly STOP_DOMINANT_LANGUAGE_DETECTION_JOB: string[] = [
		"comprehend:StopDominantLanguageDetectionJob",
	];
	/** IAM actions required for the StopEntitiesDetectionJob API call. */
	static readonly STOP_ENTITIES_DETECTION_JOB: string[] = [
		"comprehend:StopEntitiesDetectionJob",
	];
	/** IAM actions required for the StopEventsDetectionJob API call. */
	static readonly STOP_EVENTS_DETECTION_JOB: string[] = [
		"comprehend:StopEventsDetectionJob",
	];
	/** IAM actions required for the StopKeyPhrasesDetectionJob API call. */
	static readonly STOP_KEY_PHRASES_DETECTION_JOB: string[] = [
		"comprehend:StopKeyPhrasesDetectionJob",
	];
	/** IAM actions required for the StopPiiEntitiesDetectionJob API call. */
	static readonly STOP_PII_ENTITIES_DETECTION_JOB: string[] = [
		"comprehend:StopPiiEntitiesDetectionJob",
	];
	/** IAM actions required for the StopSentimentDetectionJob API call. */
	static readonly STOP_SENTIMENT_DETECTION_JOB: string[] = [
		"comprehend:StopSentimentDetectionJob",
	];
	/** IAM actions required for the StopTargetedSentimentDetectionJob API call. */
	static readonly STOP_TARGETED_SENTIMENT_DETECTION_JOB: string[] = [
		"comprehend:StopTargetedSentimentDetectionJob",
	];
	/** IAM actions required for the StopTrainingDocumentClassifier API call. */
	static readonly STOP_TRAINING_DOCUMENT_CLASSIFIER: string[] = [
		"comprehend:StopTrainingDocumentClassifier",
	];
	/** IAM actions required for the StopTrainingEntityRecognizer API call. */
	static readonly STOP_TRAINING_ENTITY_RECOGNIZER: string[] = [
		"comprehend:StopTrainingEntityRecognizer",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["comprehend:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["comprehend:UntagResource"];
	/** IAM actions required for the UpdateEndpoint API call. */
	static readonly UPDATE_ENDPOINT: string[] = [
		"iam:PassRole",
		"comprehend:UpdateEndpoint",
	];
	/** IAM actions required for the UpdateFlywheel API call. */
	static readonly UPDATE_FLYWHEEL: string[] = [
		"iam:PassRole",
		"comprehend:UpdateFlywheel",
	];
}

/**
 * Condition key constants and builders for comprehend.
 */
export class ComprehendConditions {
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CREATE_DATASET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDocumentClassifier action. */
	static readonly CREATE_DOCUMENT_CLASSIFIER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:ModelKmsKey",
		"comprehend:OutputKmsKey",
		"comprehend:VolumeKmsKey",
		"comprehend:VpcSecurityGroupIds",
		"comprehend:VpcSubnets",
	];
	/** Condition keys applicable to the CreateEntityRecognizer action. */
	static readonly CREATE_ENTITY_RECOGNIZER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:ModelKmsKey",
		"comprehend:VolumeKmsKey",
		"comprehend:VpcSecurityGroupIds",
		"comprehend:VpcSubnets",
	];
	/** Condition keys applicable to the DescribeFlywheelIteration action. */
	static readonly DESCRIBE_FLYWHEEL_ITERATION_CONDITION_KEYS: string[] = [
		"comprehend:FlywheelIterationId",
	];
	/** Condition keys applicable to the ImportModel action. */
	static readonly IMPORT_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:ModelKmsKey",
	];
	/** Condition keys applicable to the StartDominantLanguageDetectionJob action. */
	static readonly START_DOMINANT_LANGUAGE_DETECTION_JOB_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"comprehend:OutputKmsKey",
			"comprehend:VolumeKmsKey",
			"comprehend:VpcSecurityGroupIds",
			"comprehend:VpcSubnets",
		];
	/** Condition keys applicable to the StartEventsDetectionJob action. */
	static readonly START_EVENTS_DETECTION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:OutputKmsKey",
	];
	/** Condition keys applicable to the StartKeyPhrasesDetectionJob action. */
	static readonly START_KEY_PHRASES_DETECTION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:OutputKmsKey",
		"comprehend:VolumeKmsKey",
		"comprehend:VpcSecurityGroupIds",
		"comprehend:VpcSubnets",
	];
	/** Condition keys applicable to the StartPiiEntitiesDetectionJob action. */
	static readonly START_PII_ENTITIES_DETECTION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:OutputKmsKey",
	];
	/** Condition keys applicable to the StartSentimentDetectionJob action. */
	static readonly START_SENTIMENT_DETECTION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:OutputKmsKey",
		"comprehend:VolumeKmsKey",
		"comprehend:VpcSecurityGroupIds",
		"comprehend:VpcSubnets",
	];
	/** Condition keys applicable to the StartTargetedSentimentDetectionJob action. */
	static readonly START_TARGETED_SENTIMENT_DETECTION_JOB_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"comprehend:OutputKmsKey",
			"comprehend:VolumeKmsKey",
			"comprehend:VpcSecurityGroupIds",
			"comprehend:VpcSubnets",
		];
	/** Condition keys applicable to the StartTopicsDetectionJob action. */
	static readonly START_TOPICS_DETECTION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"comprehend:OutputKmsKey",
		"comprehend:VolumeKmsKey",
		"comprehend:VpcSecurityGroupIds",
		"comprehend:VpcSubnets",
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
