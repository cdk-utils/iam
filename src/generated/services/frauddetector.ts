// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/frauddetector.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the frauddetector service.
 */
export class FrauddetectorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "frauddetector";

	/** [Write] frauddetector:BatchCreateVariable */
	static readonly BATCH_CREATE_VARIABLE = "frauddetector:BatchCreateVariable";
	/** [List] frauddetector:BatchGetVariable */
	static readonly BATCH_GET_VARIABLE = "frauddetector:BatchGetVariable";
	/** [Write] frauddetector:CancelBatchImportJob */
	static readonly CANCEL_BATCH_IMPORT_JOB =
		"frauddetector:CancelBatchImportJob";
	/** [Write] frauddetector:CancelBatchPredictionJob */
	static readonly CANCEL_BATCH_PREDICTION_JOB =
		"frauddetector:CancelBatchPredictionJob";
	/** [Write] frauddetector:CreateBatchImportJob */
	static readonly CREATE_BATCH_IMPORT_JOB =
		"frauddetector:CreateBatchImportJob";
	/** [Write] frauddetector:CreateBatchPredictionJob */
	static readonly CREATE_BATCH_PREDICTION_JOB =
		"frauddetector:CreateBatchPredictionJob";
	/** [Write] frauddetector:CreateDetectorVersion */
	static readonly CREATE_DETECTOR_VERSION =
		"frauddetector:CreateDetectorVersion";
	/** [Write] frauddetector:CreateList */
	static readonly CREATE_LIST = "frauddetector:CreateList";
	/** [Write] frauddetector:CreateModel */
	static readonly CREATE_MODEL = "frauddetector:CreateModel";
	/** [Write] frauddetector:CreateModelVersion */
	static readonly CREATE_MODEL_VERSION = "frauddetector:CreateModelVersion";
	/** [Write] frauddetector:CreateRule */
	static readonly CREATE_RULE = "frauddetector:CreateRule";
	/** [Write] frauddetector:CreateVariable */
	static readonly CREATE_VARIABLE = "frauddetector:CreateVariable";
	/** [Write] frauddetector:DeleteBatchImportJob */
	static readonly DELETE_BATCH_IMPORT_JOB =
		"frauddetector:DeleteBatchImportJob";
	/** [Write] frauddetector:DeleteBatchPredictionJob */
	static readonly DELETE_BATCH_PREDICTION_JOB =
		"frauddetector:DeleteBatchPredictionJob";
	/** [Write] frauddetector:DeleteDetector */
	static readonly DELETE_DETECTOR = "frauddetector:DeleteDetector";
	/** [Write] frauddetector:DeleteDetectorVersion */
	static readonly DELETE_DETECTOR_VERSION =
		"frauddetector:DeleteDetectorVersion";
	/** [Write] frauddetector:DeleteEntityType */
	static readonly DELETE_ENTITY_TYPE = "frauddetector:DeleteEntityType";
	/** [Write] frauddetector:DeleteEvent */
	static readonly DELETE_EVENT = "frauddetector:DeleteEvent";
	/** [Write] frauddetector:DeleteEventType */
	static readonly DELETE_EVENT_TYPE = "frauddetector:DeleteEventType";
	/** [Write] frauddetector:DeleteEventsByEventType */
	static readonly DELETE_EVENTS_BY_EVENT_TYPE =
		"frauddetector:DeleteEventsByEventType";
	/** [Write] frauddetector:DeleteExternalModel */
	static readonly DELETE_EXTERNAL_MODEL = "frauddetector:DeleteExternalModel";
	/** [Write] frauddetector:DeleteLabel */
	static readonly DELETE_LABEL = "frauddetector:DeleteLabel";
	/** [Write] frauddetector:DeleteList */
	static readonly DELETE_LIST = "frauddetector:DeleteList";
	/** [Write] frauddetector:DeleteModel */
	static readonly DELETE_MODEL = "frauddetector:DeleteModel";
	/** [Write] frauddetector:DeleteModelVersion */
	static readonly DELETE_MODEL_VERSION = "frauddetector:DeleteModelVersion";
	/** [Write] frauddetector:DeleteOutcome */
	static readonly DELETE_OUTCOME = "frauddetector:DeleteOutcome";
	/** [Write] frauddetector:DeleteRule */
	static readonly DELETE_RULE = "frauddetector:DeleteRule";
	/** [Write] frauddetector:DeleteVariable */
	static readonly DELETE_VARIABLE = "frauddetector:DeleteVariable";
	/** [Read] frauddetector:DescribeDetector */
	static readonly DESCRIBE_DETECTOR = "frauddetector:DescribeDetector";
	/** [Read] frauddetector:DescribeModelVersions */
	static readonly DESCRIBE_MODEL_VERSIONS =
		"frauddetector:DescribeModelVersions";
	/** [Read] frauddetector:GetBatchImportJobValidationReport */
	static readonly GET_BATCH_IMPORT_JOB_VALIDATION_REPORT =
		"frauddetector:GetBatchImportJobValidationReport";
	/** [List] frauddetector:GetBatchImportJobs */
	static readonly GET_BATCH_IMPORT_JOBS = "frauddetector:GetBatchImportJobs";
	/** [List] frauddetector:GetBatchPredictionJobs */
	static readonly GET_BATCH_PREDICTION_JOBS =
		"frauddetector:GetBatchPredictionJobs";
	/** [Read] frauddetector:GetDeleteEventsByEventTypeStatus */
	static readonly GET_DELETE_EVENTS_BY_EVENT_TYPE_STATUS =
		"frauddetector:GetDeleteEventsByEventTypeStatus";
	/** [Read] frauddetector:GetDetectorVersion */
	static readonly GET_DETECTOR_VERSION = "frauddetector:GetDetectorVersion";
	/** [List] frauddetector:GetDetectors */
	static readonly GET_DETECTORS = "frauddetector:GetDetectors";
	/** [List] frauddetector:GetEntityTypes */
	static readonly GET_ENTITY_TYPES = "frauddetector:GetEntityTypes";
	/** [Read] frauddetector:GetEvent */
	static readonly GET_EVENT = "frauddetector:GetEvent";
	/** [Read] frauddetector:GetEventPrediction */
	static readonly GET_EVENT_PREDICTION = "frauddetector:GetEventPrediction";
	/** [Read] frauddetector:GetEventPredictionMetadata */
	static readonly GET_EVENT_PREDICTION_METADATA =
		"frauddetector:GetEventPredictionMetadata";
	/** [List] frauddetector:GetEventTypes */
	static readonly GET_EVENT_TYPES = "frauddetector:GetEventTypes";
	/** [List] frauddetector:GetExternalModels */
	static readonly GET_EXTERNAL_MODELS = "frauddetector:GetExternalModels";
	/** [Read] frauddetector:GetKMSEncryptionKey */
	static readonly GET_KMS_ENCRYPTION_KEY = "frauddetector:GetKMSEncryptionKey";
	/** [List] frauddetector:GetLabels */
	static readonly GET_LABELS = "frauddetector:GetLabels";
	/** [Read] frauddetector:GetListElements */
	static readonly GET_LIST_ELEMENTS = "frauddetector:GetListElements";
	/** [List] frauddetector:GetListsMetadata */
	static readonly GET_LISTS_METADATA = "frauddetector:GetListsMetadata";
	/** [Read] frauddetector:GetModelVersion */
	static readonly GET_MODEL_VERSION = "frauddetector:GetModelVersion";
	/** [List] frauddetector:GetModels */
	static readonly GET_MODELS = "frauddetector:GetModels";
	/** [List] frauddetector:GetOutcomes */
	static readonly GET_OUTCOMES = "frauddetector:GetOutcomes";
	/** [List] frauddetector:GetRules */
	static readonly GET_RULES = "frauddetector:GetRules";
	/** [List] frauddetector:GetVariables */
	static readonly GET_VARIABLES = "frauddetector:GetVariables";
	/** [List] frauddetector:ListEventPredictions */
	static readonly LIST_EVENT_PREDICTIONS = "frauddetector:ListEventPredictions";
	/** [Read] frauddetector:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "frauddetector:ListTagsForResource";
	/** [Write] frauddetector:PutDetector */
	static readonly PUT_DETECTOR = "frauddetector:PutDetector";
	/** [Write] frauddetector:PutEntityType */
	static readonly PUT_ENTITY_TYPE = "frauddetector:PutEntityType";
	/** [Write] frauddetector:PutEventType */
	static readonly PUT_EVENT_TYPE = "frauddetector:PutEventType";
	/** [Write] frauddetector:PutExternalModel */
	static readonly PUT_EXTERNAL_MODEL = "frauddetector:PutExternalModel";
	/** [Write] frauddetector:PutKMSEncryptionKey */
	static readonly PUT_KMS_ENCRYPTION_KEY = "frauddetector:PutKMSEncryptionKey";
	/** [Write] frauddetector:PutLabel */
	static readonly PUT_LABEL = "frauddetector:PutLabel";
	/** [Write] frauddetector:PutOutcome */
	static readonly PUT_OUTCOME = "frauddetector:PutOutcome";
	/** [Write] frauddetector:SendEvent */
	static readonly SEND_EVENT = "frauddetector:SendEvent";
	/** [Tagging] frauddetector:TagResource */
	static readonly TAG_RESOURCE = "frauddetector:TagResource";
	/** [Tagging] frauddetector:UntagResource */
	static readonly UNTAG_RESOURCE = "frauddetector:UntagResource";
	/** [Write] frauddetector:UpdateDetectorVersion */
	static readonly UPDATE_DETECTOR_VERSION =
		"frauddetector:UpdateDetectorVersion";
	/** [Write] frauddetector:UpdateDetectorVersionMetadata */
	static readonly UPDATE_DETECTOR_VERSION_METADATA =
		"frauddetector:UpdateDetectorVersionMetadata";
	/** [Write] frauddetector:UpdateDetectorVersionStatus */
	static readonly UPDATE_DETECTOR_VERSION_STATUS =
		"frauddetector:UpdateDetectorVersionStatus";
	/** [Write] frauddetector:UpdateEventLabel */
	static readonly UPDATE_EVENT_LABEL = "frauddetector:UpdateEventLabel";
	/** [Write] frauddetector:UpdateList */
	static readonly UPDATE_LIST = "frauddetector:UpdateList";
	/** [Write] frauddetector:UpdateModel */
	static readonly UPDATE_MODEL = "frauddetector:UpdateModel";
	/** [Write] frauddetector:UpdateModelVersion */
	static readonly UPDATE_MODEL_VERSION = "frauddetector:UpdateModelVersion";
	/** [Write] frauddetector:UpdateModelVersionStatus */
	static readonly UPDATE_MODEL_VERSION_STATUS =
		"frauddetector:UpdateModelVersionStatus";
	/** [Write] frauddetector:UpdateRuleMetadata */
	static readonly UPDATE_RULE_METADATA = "frauddetector:UpdateRuleMetadata";
	/** [Write] frauddetector:UpdateRuleVersion */
	static readonly UPDATE_RULE_VERSION = "frauddetector:UpdateRuleVersion";
	/** [Write] frauddetector:UpdateVariable */
	static readonly UPDATE_VARIABLE = "frauddetector:UpdateVariable";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		FrauddetectorActions.DESCRIBE_DETECTOR,
		FrauddetectorActions.DESCRIBE_MODEL_VERSIONS,
		FrauddetectorActions.GET_BATCH_IMPORT_JOB_VALIDATION_REPORT,
		FrauddetectorActions.GET_DELETE_EVENTS_BY_EVENT_TYPE_STATUS,
		FrauddetectorActions.GET_DETECTOR_VERSION,
		FrauddetectorActions.GET_EVENT,
		FrauddetectorActions.GET_EVENT_PREDICTION,
		FrauddetectorActions.GET_EVENT_PREDICTION_METADATA,
		FrauddetectorActions.GET_KMS_ENCRYPTION_KEY,
		FrauddetectorActions.GET_LIST_ELEMENTS,
		FrauddetectorActions.GET_MODEL_VERSION,
		FrauddetectorActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		FrauddetectorActions.BATCH_CREATE_VARIABLE,
		FrauddetectorActions.CANCEL_BATCH_IMPORT_JOB,
		FrauddetectorActions.CANCEL_BATCH_PREDICTION_JOB,
		FrauddetectorActions.CREATE_BATCH_IMPORT_JOB,
		FrauddetectorActions.CREATE_BATCH_PREDICTION_JOB,
		FrauddetectorActions.CREATE_DETECTOR_VERSION,
		FrauddetectorActions.CREATE_LIST,
		FrauddetectorActions.CREATE_MODEL,
		FrauddetectorActions.CREATE_MODEL_VERSION,
		FrauddetectorActions.CREATE_RULE,
		FrauddetectorActions.CREATE_VARIABLE,
		FrauddetectorActions.DELETE_BATCH_IMPORT_JOB,
		FrauddetectorActions.DELETE_BATCH_PREDICTION_JOB,
		FrauddetectorActions.DELETE_DETECTOR,
		FrauddetectorActions.DELETE_DETECTOR_VERSION,
		FrauddetectorActions.DELETE_ENTITY_TYPE,
		FrauddetectorActions.DELETE_EVENT,
		FrauddetectorActions.DELETE_EVENT_TYPE,
		FrauddetectorActions.DELETE_EVENTS_BY_EVENT_TYPE,
		FrauddetectorActions.DELETE_EXTERNAL_MODEL,
		FrauddetectorActions.DELETE_LABEL,
		FrauddetectorActions.DELETE_LIST,
		FrauddetectorActions.DELETE_MODEL,
		FrauddetectorActions.DELETE_MODEL_VERSION,
		FrauddetectorActions.DELETE_OUTCOME,
		FrauddetectorActions.DELETE_RULE,
		FrauddetectorActions.DELETE_VARIABLE,
		FrauddetectorActions.PUT_DETECTOR,
		FrauddetectorActions.PUT_ENTITY_TYPE,
		FrauddetectorActions.PUT_EVENT_TYPE,
		FrauddetectorActions.PUT_EXTERNAL_MODEL,
		FrauddetectorActions.PUT_KMS_ENCRYPTION_KEY,
		FrauddetectorActions.PUT_LABEL,
		FrauddetectorActions.PUT_OUTCOME,
		FrauddetectorActions.SEND_EVENT,
		FrauddetectorActions.UPDATE_DETECTOR_VERSION,
		FrauddetectorActions.UPDATE_DETECTOR_VERSION_METADATA,
		FrauddetectorActions.UPDATE_DETECTOR_VERSION_STATUS,
		FrauddetectorActions.UPDATE_EVENT_LABEL,
		FrauddetectorActions.UPDATE_LIST,
		FrauddetectorActions.UPDATE_MODEL,
		FrauddetectorActions.UPDATE_MODEL_VERSION,
		FrauddetectorActions.UPDATE_MODEL_VERSION_STATUS,
		FrauddetectorActions.UPDATE_RULE_METADATA,
		FrauddetectorActions.UPDATE_RULE_VERSION,
		FrauddetectorActions.UPDATE_VARIABLE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		FrauddetectorActions.BATCH_GET_VARIABLE,
		FrauddetectorActions.GET_BATCH_IMPORT_JOBS,
		FrauddetectorActions.GET_BATCH_PREDICTION_JOBS,
		FrauddetectorActions.GET_DETECTORS,
		FrauddetectorActions.GET_ENTITY_TYPES,
		FrauddetectorActions.GET_EVENT_TYPES,
		FrauddetectorActions.GET_EXTERNAL_MODELS,
		FrauddetectorActions.GET_LABELS,
		FrauddetectorActions.GET_LISTS_METADATA,
		FrauddetectorActions.GET_MODELS,
		FrauddetectorActions.GET_OUTCOMES,
		FrauddetectorActions.GET_RULES,
		FrauddetectorActions.GET_VARIABLES,
		FrauddetectorActions.LIST_EVENT_PREDICTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		FrauddetectorActions.TAG_RESOURCE,
		FrauddetectorActions.UNTAG_RESOURCE,
	];
}

const BatchImportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):batch-import/(?<resourcePath>[^:/?]+)$",
);
const BatchPredictionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):batch-prediction/(?<resourcePath>[^:/?]+)$",
);
const DetectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):detector/(?<resourcePath>[^:/?]+)$",
);
const DetectorVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):detector-version/(?<resourcePath>[^:/?]+)$",
);
const EntityTypeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):entity-type/(?<resourcePath>[^:/?]+)$",
);
const EventTypeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):event-type/(?<resourcePath>[^:/?]+)$",
);
const ExternalModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):external-model/(?<resourcePath>[^:/?]+)$",
);
const LabelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):label/(?<resourcePath>[^:/?]+)$",
);
const ListArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):list/(?<resourcePath>[^:/?]+)$",
);
const ModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):model/(?<resourcePath>[^:/?]+)$",
);
const ModelVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):model-version/(?<resourcePath>[^:/?]+)$",
);
const OutcomeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):outcome/(?<resourcePath>[^:/?]+)$",
);
const RuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):rule/(?<resourcePath>[^:/?]+)$",
);
const VariableArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):variable/(?<resourcePath>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for frauddetector resources.
 */
export class FrauddetectorResources {
	/**
	 * Builds an ARN for the batch-import resource.
	 */
	static batchImport(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:batch-import/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the batch-import resource.
	 */
	static isValidBatchImportArn(arn: string): boolean {
		return BatchImportArnRegex.test(arn);
	}

	/**
	 * Parses a batch-import ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBatchImportArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = BatchImportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid batch-import ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the batch-prediction resource.
	 */
	static batchPrediction(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:batch-prediction/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the batch-prediction resource.
	 */
	static isValidBatchPredictionArn(arn: string): boolean {
		return BatchPredictionArnRegex.test(arn);
	}

	/**
	 * Parses a batch-prediction ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBatchPredictionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = BatchPredictionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid batch-prediction ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the detector resource.
	 */
	static detector(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:detector/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the detector resource.
	 */
	static isValidDetectorArn(arn: string): boolean {
		return DetectorArnRegex.test(arn);
	}

	/**
	 * Parses a detector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDetectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = DetectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid detector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the detector-version resource.
	 */
	static detectorVersion(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:detector-version/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the detector-version resource.
	 */
	static isValidDetectorVersionArn(arn: string): boolean {
		return DetectorVersionArnRegex.test(arn);
	}

	/**
	 * Parses a detector-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDetectorVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = DetectorVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid detector-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the entity-type resource.
	 */
	static entityType(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:entity-type/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the entity-type resource.
	 */
	static isValidEntityTypeArn(arn: string): boolean {
		return EntityTypeArnRegex.test(arn);
	}

	/**
	 * Parses a entity-type ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEntityTypeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = EntityTypeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid entity-type ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the event-type resource.
	 */
	static eventType(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:event-type/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the event-type resource.
	 */
	static isValidEventTypeArn(arn: string): boolean {
		return EventTypeArnRegex.test(arn);
	}

	/**
	 * Parses a event-type ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventTypeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = EventTypeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid event-type ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the external-model resource.
	 */
	static externalModel(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:external-model/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the external-model resource.
	 */
	static isValidExternalModelArn(arn: string): boolean {
		return ExternalModelArnRegex.test(arn);
	}

	/**
	 * Parses a external-model ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExternalModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = ExternalModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid external-model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the label resource.
	 */
	static label(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:label/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the label resource.
	 */
	static isValidLabelArn(arn: string): boolean {
		return LabelArnRegex.test(arn);
	}

	/**
	 * Parses a label ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLabelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = LabelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid label ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the list resource.
	 */
	static list(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:list/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the list resource.
	 */
	static isValidListArn(arn: string): boolean {
		return ListArnRegex.test(arn);
	}

	/**
	 * Parses a list ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseListArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = ListArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid list ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the model resource.
	 */
	static model(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:model/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model resource.
	 */
	static isValidModelArn(arn: string): boolean {
		return ModelArnRegex.test(arn);
	}

	/**
	 * Parses a model ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = ModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the model-version resource.
	 */
	static modelVersion(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:model-version/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-version resource.
	 */
	static isValidModelVersionArn(arn: string): boolean {
		return ModelVersionArnRegex.test(arn);
	}

	/**
	 * Parses a model-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = ModelVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the outcome resource.
	 */
	static outcome(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:outcome/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the outcome resource.
	 */
	static isValidOutcomeArn(arn: string): boolean {
		return OutcomeArnRegex.test(arn);
	}

	/**
	 * Parses a outcome ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOutcomeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = OutcomeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid outcome ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the rule resource.
	 */
	static rule(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:rule/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rule resource.
	 */
	static isValidRuleArn(arn: string): boolean {
		return RuleArnRegex.test(arn);
	}

	/**
	 * Parses a rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = RuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the variable resource.
	 */
	static variable(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:frauddetector:${props.region ?? "*"}:${props.account ?? "*"}:variable/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the variable resource.
	 */
	static isValidVariableArn(arn: string): boolean {
		return VariableArnRegex.test(arn);
	}

	/**
	 * Parses a variable ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVariableArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = VariableArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid variable ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}
}

/**
 * API operation to required IAM actions mapping for frauddetector.
 */
export class FrauddetectorOperations {
	/** IAM actions required for the BatchCreateVariable API call. */
	static readonly BATCH_CREATE_VARIABLE: string[] = [
		"frauddetector:BatchCreateVariable",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the BatchGetVariable API call. */
	static readonly BATCH_GET_VARIABLE: string[] = [
		"frauddetector:BatchGetVariable",
	];
	/** IAM actions required for the CancelBatchImportJob API call. */
	static readonly CANCEL_BATCH_IMPORT_JOB: string[] = [
		"frauddetector:CancelBatchImportJob",
	];
	/** IAM actions required for the CancelBatchPredictionJob API call. */
	static readonly CANCEL_BATCH_PREDICTION_JOB: string[] = [
		"frauddetector:CancelBatchPredictionJob",
	];
	/** IAM actions required for the CreateBatchImportJob API call. */
	static readonly CREATE_BATCH_IMPORT_JOB: string[] = [
		"frauddetector:CreateBatchImportJob",
		"iam:PassRole",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateBatchPredictionJob API call. */
	static readonly CREATE_BATCH_PREDICTION_JOB: string[] = [
		"frauddetector:CreateBatchPredictionJob",
		"iam:PassRole",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateDetectorVersion API call. */
	static readonly CREATE_DETECTOR_VERSION: string[] = [
		"frauddetector:CreateDetectorVersion",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateList API call. */
	static readonly CREATE_LIST: string[] = [
		"frauddetector:CreateList",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateModel API call. */
	static readonly CREATE_MODEL: string[] = [
		"frauddetector:CreateModel",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateModelVersion API call. */
	static readonly CREATE_MODEL_VERSION: string[] = [
		"frauddetector:CreateModelVersion",
		"iam:PassRole",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateRule API call. */
	static readonly CREATE_RULE: string[] = [
		"frauddetector:CreateRule",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateVariable API call. */
	static readonly CREATE_VARIABLE: string[] = [
		"frauddetector:CreateVariable",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the DeleteBatchImportJob API call. */
	static readonly DELETE_BATCH_IMPORT_JOB: string[] = [
		"frauddetector:DeleteBatchImportJob",
	];
	/** IAM actions required for the DeleteBatchPredictionJob API call. */
	static readonly DELETE_BATCH_PREDICTION_JOB: string[] = [
		"frauddetector:DeleteBatchPredictionJob",
	];
	/** IAM actions required for the DeleteDetector API call. */
	static readonly DELETE_DETECTOR: string[] = ["frauddetector:DeleteDetector"];
	/** IAM actions required for the DeleteDetectorVersion API call. */
	static readonly DELETE_DETECTOR_VERSION: string[] = [
		"frauddetector:DeleteDetectorVersion",
	];
	/** IAM actions required for the DeleteEntityType API call. */
	static readonly DELETE_ENTITY_TYPE: string[] = [
		"frauddetector:DeleteEntityType",
	];
	/** IAM actions required for the DeleteEvent API call. */
	static readonly DELETE_EVENT: string[] = ["frauddetector:DeleteEvent"];
	/** IAM actions required for the DeleteEventType API call. */
	static readonly DELETE_EVENT_TYPE: string[] = [
		"frauddetector:DeleteEventType",
	];
	/** IAM actions required for the DeleteEventsByEventType API call. */
	static readonly DELETE_EVENTS_BY_EVENT_TYPE: string[] = [
		"frauddetector:DeleteEventsByEventType",
	];
	/** IAM actions required for the DeleteExternalModel API call. */
	static readonly DELETE_EXTERNAL_MODEL: string[] = [
		"frauddetector:DeleteExternalModel",
	];
	/** IAM actions required for the DeleteLabel API call. */
	static readonly DELETE_LABEL: string[] = ["frauddetector:DeleteLabel"];
	/** IAM actions required for the DeleteList API call. */
	static readonly DELETE_LIST: string[] = ["frauddetector:DeleteList"];
	/** IAM actions required for the DeleteModel API call. */
	static readonly DELETE_MODEL: string[] = ["frauddetector:DeleteModel"];
	/** IAM actions required for the DeleteModelVersion API call. */
	static readonly DELETE_MODEL_VERSION: string[] = [
		"frauddetector:DeleteModelVersion",
	];
	/** IAM actions required for the DeleteOutcome API call. */
	static readonly DELETE_OUTCOME: string[] = ["frauddetector:DeleteOutcome"];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DELETE_RULE: string[] = ["frauddetector:DeleteRule"];
	/** IAM actions required for the DeleteVariable API call. */
	static readonly DELETE_VARIABLE: string[] = ["frauddetector:DeleteVariable"];
	/** IAM actions required for the DescribeDetector API call. */
	static readonly DESCRIBE_DETECTOR: string[] = [
		"frauddetector:DescribeDetector",
	];
	/** IAM actions required for the DescribeModelVersions API call. */
	static readonly DESCRIBE_MODEL_VERSIONS: string[] = [
		"frauddetector:DescribeModelVersions",
	];
	/** IAM actions required for the GetBatchImportJobs API call. */
	static readonly GET_BATCH_IMPORT_JOBS: string[] = [
		"frauddetector:GetBatchImportJobs",
	];
	/** IAM actions required for the GetBatchPredictionJobs API call. */
	static readonly GET_BATCH_PREDICTION_JOBS: string[] = [
		"frauddetector:GetBatchPredictionJobs",
	];
	/** IAM actions required for the GetDeleteEventsByEventTypeStatus API call. */
	static readonly GET_DELETE_EVENTS_BY_EVENT_TYPE_STATUS: string[] = [
		"frauddetector:GetDeleteEventsByEventTypeStatus",
	];
	/** IAM actions required for the GetDetectorVersion API call. */
	static readonly GET_DETECTOR_VERSION: string[] = [
		"frauddetector:GetDetectorVersion",
	];
	/** IAM actions required for the GetDetectors API call. */
	static readonly GET_DETECTORS: string[] = ["frauddetector:GetDetectors"];
	/** IAM actions required for the GetEntityTypes API call. */
	static readonly GET_ENTITY_TYPES: string[] = ["frauddetector:GetEntityTypes"];
	/** IAM actions required for the GetEvent API call. */
	static readonly GET_EVENT: string[] = ["frauddetector:GetEvent"];
	/** IAM actions required for the GetEventPrediction API call. */
	static readonly GET_EVENT_PREDICTION: string[] = [
		"frauddetector:GetEventPrediction",
	];
	/** IAM actions required for the GetEventPredictionMetadata API call. */
	static readonly GET_EVENT_PREDICTION_METADATA: string[] = [
		"frauddetector:GetEventPredictionMetadata",
	];
	/** IAM actions required for the GetEventTypes API call. */
	static readonly GET_EVENT_TYPES: string[] = ["frauddetector:GetEventTypes"];
	/** IAM actions required for the GetExternalModels API call. */
	static readonly GET_EXTERNAL_MODELS: string[] = [
		"frauddetector:GetExternalModels",
	];
	/** IAM actions required for the GetKMSEncryptionKey API call. */
	static readonly GET_KMS_ENCRYPTION_KEY: string[] = [
		"frauddetector:GetKMSEncryptionKey",
	];
	/** IAM actions required for the GetLabels API call. */
	static readonly GET_LABELS: string[] = ["frauddetector:GetLabels"];
	/** IAM actions required for the GetListElements API call. */
	static readonly GET_LIST_ELEMENTS: string[] = [
		"frauddetector:GetListElements",
	];
	/** IAM actions required for the GetListsMetadata API call. */
	static readonly GET_LISTS_METADATA: string[] = [
		"frauddetector:GetListsMetadata",
	];
	/** IAM actions required for the GetModelVersion API call. */
	static readonly GET_MODEL_VERSION: string[] = [
		"frauddetector:GetModelVersion",
	];
	/** IAM actions required for the GetModels API call. */
	static readonly GET_MODELS: string[] = ["frauddetector:GetModels"];
	/** IAM actions required for the GetOutcomes API call. */
	static readonly GET_OUTCOMES: string[] = ["frauddetector:GetOutcomes"];
	/** IAM actions required for the GetRules API call. */
	static readonly GET_RULES: string[] = ["frauddetector:GetRules"];
	/** IAM actions required for the GetVariables API call. */
	static readonly GET_VARIABLES: string[] = ["frauddetector:GetVariables"];
	/** IAM actions required for the ListEventPredictions API call. */
	static readonly LIST_EVENT_PREDICTIONS: string[] = [
		"frauddetector:ListEventPredictions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"frauddetector:ListTagsForResource",
	];
	/** IAM actions required for the PutDetector API call. */
	static readonly PUT_DETECTOR: string[] = [
		"frauddetector:PutDetector",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the PutEntityType API call. */
	static readonly PUT_ENTITY_TYPE: string[] = [
		"frauddetector:PutEntityType",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the PutEventType API call. */
	static readonly PUT_EVENT_TYPE: string[] = [
		"frauddetector:PutEventType",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the PutExternalModel API call. */
	static readonly PUT_EXTERNAL_MODEL: string[] = [
		"iam:PassRole",
		"frauddetector:PutExternalModel",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the PutKMSEncryptionKey API call. */
	static readonly PUT_KMS_ENCRYPTION_KEY: string[] = [];
	/** IAM actions required for the PutLabel API call. */
	static readonly PUT_LABEL: string[] = [
		"frauddetector:PutLabel",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the PutOutcome API call. */
	static readonly PUT_OUTCOME: string[] = [
		"frauddetector:PutOutcome",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the SendEvent API call. */
	static readonly SEND_EVENT: string[] = ["frauddetector:SendEvent"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["frauddetector:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["frauddetector:UntagResource"];
	/** IAM actions required for the UpdateDetectorVersion API call. */
	static readonly UPDATE_DETECTOR_VERSION: string[] = [
		"frauddetector:UpdateDetectorVersion",
	];
	/** IAM actions required for the UpdateDetectorVersionMetadata API call. */
	static readonly UPDATE_DETECTOR_VERSION_METADATA: string[] = [
		"frauddetector:UpdateDetectorVersionMetadata",
	];
	/** IAM actions required for the UpdateDetectorVersionStatus API call. */
	static readonly UPDATE_DETECTOR_VERSION_STATUS: string[] = [
		"frauddetector:UpdateDetectorVersionStatus",
	];
	/** IAM actions required for the UpdateEventLabel API call. */
	static readonly UPDATE_EVENT_LABEL: string[] = [
		"frauddetector:UpdateEventLabel",
	];
	/** IAM actions required for the UpdateList API call. */
	static readonly UPDATE_LIST: string[] = ["frauddetector:UpdateList"];
	/** IAM actions required for the UpdateModel API call. */
	static readonly UPDATE_MODEL: string[] = ["frauddetector:UpdateModel"];
	/** IAM actions required for the UpdateModelVersion API call. */
	static readonly UPDATE_MODEL_VERSION: string[] = [];
	/** IAM actions required for the UpdateModelVersionStatus API call. */
	static readonly UPDATE_MODEL_VERSION_STATUS: string[] = [
		"frauddetector:UpdateModelVersionStatus",
	];
	/** IAM actions required for the UpdateRuleMetadata API call. */
	static readonly UPDATE_RULE_METADATA: string[] = [
		"frauddetector:UpdateRuleMetadata",
	];
	/** IAM actions required for the UpdateRuleVersion API call. */
	static readonly UPDATE_RULE_VERSION: string[] = [
		"frauddetector:TagResource",
		"frauddetector:UpdateRuleVersion",
	];
	/** IAM actions required for the UpdateVariable API call. */
	static readonly UPDATE_VARIABLE: string[] = ["frauddetector:UpdateVariable"];
}

/**
 * Condition key constants and builders for frauddetector.
 */
export class FrauddetectorConditions {
	/** Condition keys applicable to the BatchCreateVariable action. */
	static readonly BATCH_CREATE_VARIABLE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBatchImportJob action. */
	static readonly CREATE_BATCH_IMPORT_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBatchPredictionJob action. */
	static readonly CREATE_BATCH_PREDICTION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDetectorVersion action. */
	static readonly CREATE_DETECTOR_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateList action. */
	static readonly CREATE_LIST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModel action. */
	static readonly CREATE_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelVersion action. */
	static readonly CREATE_MODEL_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRule action. */
	static readonly CREATE_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVariable action. */
	static readonly CREATE_VARIABLE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteList action. */
	static readonly DELETE_LIST_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetListElements action. */
	static readonly GET_LIST_ELEMENTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetListsMetadata action. */
	static readonly GET_LISTS_METADATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutDetector action. */
	static readonly PUT_DETECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutEntityType action. */
	static readonly PUT_ENTITY_TYPE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutEventType action. */
	static readonly PUT_EVENT_TYPE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutExternalModel action. */
	static readonly PUT_EXTERNAL_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutLabel action. */
	static readonly PUT_LABEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutOutcome action. */
	static readonly PUT_OUTCOME_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the SendEvent action. */
	static readonly SEND_EVENT_CONDITION_KEYS: string[] = [
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
	/** Condition keys applicable to the UpdateEventLabel action. */
	static readonly UPDATE_EVENT_LABEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateList action. */
	static readonly UPDATE_LIST_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateModelVersion action. */
	static readonly UPDATE_MODEL_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateRuleVersion action. */
	static readonly UPDATE_RULE_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
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
