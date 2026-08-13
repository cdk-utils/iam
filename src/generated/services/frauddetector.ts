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
	static readonly BatchCreateVariable = "frauddetector:BatchCreateVariable";
	/** [List] frauddetector:BatchGetVariable */
	static readonly BatchGetVariable = "frauddetector:BatchGetVariable";
	/** [Write] frauddetector:CancelBatchImportJob */
	static readonly CancelBatchImportJob = "frauddetector:CancelBatchImportJob";
	/** [Write] frauddetector:CancelBatchPredictionJob */
	static readonly CancelBatchPredictionJob =
		"frauddetector:CancelBatchPredictionJob";
	/** [Write] frauddetector:CreateBatchImportJob */
	static readonly CreateBatchImportJob = "frauddetector:CreateBatchImportJob";
	/** [Write] frauddetector:CreateBatchPredictionJob */
	static readonly CreateBatchPredictionJob =
		"frauddetector:CreateBatchPredictionJob";
	/** [Write] frauddetector:CreateDetectorVersion */
	static readonly CreateDetectorVersion = "frauddetector:CreateDetectorVersion";
	/** [Write] frauddetector:CreateList */
	static readonly CreateList = "frauddetector:CreateList";
	/** [Write] frauddetector:CreateModel */
	static readonly CreateModel = "frauddetector:CreateModel";
	/** [Write] frauddetector:CreateModelVersion */
	static readonly CreateModelVersion = "frauddetector:CreateModelVersion";
	/** [Write] frauddetector:CreateRule */
	static readonly CreateRule = "frauddetector:CreateRule";
	/** [Write] frauddetector:CreateVariable */
	static readonly CreateVariable = "frauddetector:CreateVariable";
	/** [Write] frauddetector:DeleteBatchImportJob */
	static readonly DeleteBatchImportJob = "frauddetector:DeleteBatchImportJob";
	/** [Write] frauddetector:DeleteBatchPredictionJob */
	static readonly DeleteBatchPredictionJob =
		"frauddetector:DeleteBatchPredictionJob";
	/** [Write] frauddetector:DeleteDetector */
	static readonly DeleteDetector = "frauddetector:DeleteDetector";
	/** [Write] frauddetector:DeleteDetectorVersion */
	static readonly DeleteDetectorVersion = "frauddetector:DeleteDetectorVersion";
	/** [Write] frauddetector:DeleteEntityType */
	static readonly DeleteEntityType = "frauddetector:DeleteEntityType";
	/** [Write] frauddetector:DeleteEvent */
	static readonly DeleteEvent = "frauddetector:DeleteEvent";
	/** [Write] frauddetector:DeleteEventType */
	static readonly DeleteEventType = "frauddetector:DeleteEventType";
	/** [Write] frauddetector:DeleteEventsByEventType */
	static readonly DeleteEventsByEventType =
		"frauddetector:DeleteEventsByEventType";
	/** [Write] frauddetector:DeleteExternalModel */
	static readonly DeleteExternalModel = "frauddetector:DeleteExternalModel";
	/** [Write] frauddetector:DeleteLabel */
	static readonly DeleteLabel = "frauddetector:DeleteLabel";
	/** [Write] frauddetector:DeleteList */
	static readonly DeleteList = "frauddetector:DeleteList";
	/** [Write] frauddetector:DeleteModel */
	static readonly DeleteModel = "frauddetector:DeleteModel";
	/** [Write] frauddetector:DeleteModelVersion */
	static readonly DeleteModelVersion = "frauddetector:DeleteModelVersion";
	/** [Write] frauddetector:DeleteOutcome */
	static readonly DeleteOutcome = "frauddetector:DeleteOutcome";
	/** [Write] frauddetector:DeleteRule */
	static readonly DeleteRule = "frauddetector:DeleteRule";
	/** [Write] frauddetector:DeleteVariable */
	static readonly DeleteVariable = "frauddetector:DeleteVariable";
	/** [Read] frauddetector:DescribeDetector */
	static readonly DescribeDetector = "frauddetector:DescribeDetector";
	/** [Read] frauddetector:DescribeModelVersions */
	static readonly DescribeModelVersions = "frauddetector:DescribeModelVersions";
	/** [Read] frauddetector:GetBatchImportJobValidationReport */
	static readonly actionGetBatchImportJobValidationReport =
		"frauddetector:GetBatchImportJobValidationReport";
	/** [List] frauddetector:GetBatchImportJobs */
	static readonly actionGetBatchImportJobs = "frauddetector:GetBatchImportJobs";
	/** [List] frauddetector:GetBatchPredictionJobs */
	static readonly actionGetBatchPredictionJobs =
		"frauddetector:GetBatchPredictionJobs";
	/** [Read] frauddetector:GetDeleteEventsByEventTypeStatus */
	static readonly actionGetDeleteEventsByEventTypeStatus =
		"frauddetector:GetDeleteEventsByEventTypeStatus";
	/** [Read] frauddetector:GetDetectorVersion */
	static readonly actionGetDetectorVersion = "frauddetector:GetDetectorVersion";
	/** [List] frauddetector:GetDetectors */
	static readonly actionGetDetectors = "frauddetector:GetDetectors";
	/** [List] frauddetector:GetEntityTypes */
	static readonly actionGetEntityTypes = "frauddetector:GetEntityTypes";
	/** [Read] frauddetector:GetEvent */
	static readonly actionGetEvent = "frauddetector:GetEvent";
	/** [Read] frauddetector:GetEventPrediction */
	static readonly actionGetEventPrediction = "frauddetector:GetEventPrediction";
	/** [Read] frauddetector:GetEventPredictionMetadata */
	static readonly actionGetEventPredictionMetadata =
		"frauddetector:GetEventPredictionMetadata";
	/** [List] frauddetector:GetEventTypes */
	static readonly actionGetEventTypes = "frauddetector:GetEventTypes";
	/** [List] frauddetector:GetExternalModels */
	static readonly actionGetExternalModels = "frauddetector:GetExternalModels";
	/** [Read] frauddetector:GetKMSEncryptionKey */
	static readonly actionGetKMSEncryptionKey =
		"frauddetector:GetKMSEncryptionKey";
	/** [List] frauddetector:GetLabels */
	static readonly actionGetLabels = "frauddetector:GetLabels";
	/** [Read] frauddetector:GetListElements */
	static readonly actionGetListElements = "frauddetector:GetListElements";
	/** [List] frauddetector:GetListsMetadata */
	static readonly actionGetListsMetadata = "frauddetector:GetListsMetadata";
	/** [Read] frauddetector:GetModelVersion */
	static readonly actionGetModelVersion = "frauddetector:GetModelVersion";
	/** [List] frauddetector:GetModels */
	static readonly actionGetModels = "frauddetector:GetModels";
	/** [List] frauddetector:GetOutcomes */
	static readonly actionGetOutcomes = "frauddetector:GetOutcomes";
	/** [List] frauddetector:GetRules */
	static readonly actionGetRules = "frauddetector:GetRules";
	/** [List] frauddetector:GetVariables */
	static readonly actionGetVariables = "frauddetector:GetVariables";
	/** [List] frauddetector:ListEventPredictions */
	static readonly ListEventPredictions = "frauddetector:ListEventPredictions";
	/** [Read] frauddetector:ListTagsForResource */
	static readonly ListTagsForResource = "frauddetector:ListTagsForResource";
	/** [Write] frauddetector:PutDetector */
	static readonly PutDetector = "frauddetector:PutDetector";
	/** [Write] frauddetector:PutEntityType */
	static readonly PutEntityType = "frauddetector:PutEntityType";
	/** [Write] frauddetector:PutEventType */
	static readonly PutEventType = "frauddetector:PutEventType";
	/** [Write] frauddetector:PutExternalModel */
	static readonly PutExternalModel = "frauddetector:PutExternalModel";
	/** [Write] frauddetector:PutKMSEncryptionKey */
	static readonly PutKMSEncryptionKey = "frauddetector:PutKMSEncryptionKey";
	/** [Write] frauddetector:PutLabel */
	static readonly PutLabel = "frauddetector:PutLabel";
	/** [Write] frauddetector:PutOutcome */
	static readonly PutOutcome = "frauddetector:PutOutcome";
	/** [Write] frauddetector:SendEvent */
	static readonly SendEvent = "frauddetector:SendEvent";
	/** [Tagging] frauddetector:TagResource */
	static readonly TagResource = "frauddetector:TagResource";
	/** [Tagging] frauddetector:UntagResource */
	static readonly UntagResource = "frauddetector:UntagResource";
	/** [Write] frauddetector:UpdateDetectorVersion */
	static readonly UpdateDetectorVersion = "frauddetector:UpdateDetectorVersion";
	/** [Write] frauddetector:UpdateDetectorVersionMetadata */
	static readonly UpdateDetectorVersionMetadata =
		"frauddetector:UpdateDetectorVersionMetadata";
	/** [Write] frauddetector:UpdateDetectorVersionStatus */
	static readonly UpdateDetectorVersionStatus =
		"frauddetector:UpdateDetectorVersionStatus";
	/** [Write] frauddetector:UpdateEventLabel */
	static readonly UpdateEventLabel = "frauddetector:UpdateEventLabel";
	/** [Write] frauddetector:UpdateList */
	static readonly UpdateList = "frauddetector:UpdateList";
	/** [Write] frauddetector:UpdateModel */
	static readonly UpdateModel = "frauddetector:UpdateModel";
	/** [Write] frauddetector:UpdateModelVersion */
	static readonly UpdateModelVersion = "frauddetector:UpdateModelVersion";
	/** [Write] frauddetector:UpdateModelVersionStatus */
	static readonly UpdateModelVersionStatus =
		"frauddetector:UpdateModelVersionStatus";
	/** [Write] frauddetector:UpdateRuleMetadata */
	static readonly UpdateRuleMetadata = "frauddetector:UpdateRuleMetadata";
	/** [Write] frauddetector:UpdateRuleVersion */
	static readonly UpdateRuleVersion = "frauddetector:UpdateRuleVersion";
	/** [Write] frauddetector:UpdateVariable */
	static readonly UpdateVariable = "frauddetector:UpdateVariable";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		FrauddetectorActions.DescribeDetector,
		FrauddetectorActions.DescribeModelVersions,
		FrauddetectorActions.actionGetBatchImportJobValidationReport,
		FrauddetectorActions.actionGetDeleteEventsByEventTypeStatus,
		FrauddetectorActions.actionGetDetectorVersion,
		FrauddetectorActions.actionGetEvent,
		FrauddetectorActions.actionGetEventPrediction,
		FrauddetectorActions.actionGetEventPredictionMetadata,
		FrauddetectorActions.actionGetKMSEncryptionKey,
		FrauddetectorActions.actionGetListElements,
		FrauddetectorActions.actionGetModelVersion,
		FrauddetectorActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		FrauddetectorActions.BatchCreateVariable,
		FrauddetectorActions.CancelBatchImportJob,
		FrauddetectorActions.CancelBatchPredictionJob,
		FrauddetectorActions.CreateBatchImportJob,
		FrauddetectorActions.CreateBatchPredictionJob,
		FrauddetectorActions.CreateDetectorVersion,
		FrauddetectorActions.CreateList,
		FrauddetectorActions.CreateModel,
		FrauddetectorActions.CreateModelVersion,
		FrauddetectorActions.CreateRule,
		FrauddetectorActions.CreateVariable,
		FrauddetectorActions.DeleteBatchImportJob,
		FrauddetectorActions.DeleteBatchPredictionJob,
		FrauddetectorActions.DeleteDetector,
		FrauddetectorActions.DeleteDetectorVersion,
		FrauddetectorActions.DeleteEntityType,
		FrauddetectorActions.DeleteEvent,
		FrauddetectorActions.DeleteEventType,
		FrauddetectorActions.DeleteEventsByEventType,
		FrauddetectorActions.DeleteExternalModel,
		FrauddetectorActions.DeleteLabel,
		FrauddetectorActions.DeleteList,
		FrauddetectorActions.DeleteModel,
		FrauddetectorActions.DeleteModelVersion,
		FrauddetectorActions.DeleteOutcome,
		FrauddetectorActions.DeleteRule,
		FrauddetectorActions.DeleteVariable,
		FrauddetectorActions.PutDetector,
		FrauddetectorActions.PutEntityType,
		FrauddetectorActions.PutEventType,
		FrauddetectorActions.PutExternalModel,
		FrauddetectorActions.PutKMSEncryptionKey,
		FrauddetectorActions.PutLabel,
		FrauddetectorActions.PutOutcome,
		FrauddetectorActions.SendEvent,
		FrauddetectorActions.UpdateDetectorVersion,
		FrauddetectorActions.UpdateDetectorVersionMetadata,
		FrauddetectorActions.UpdateDetectorVersionStatus,
		FrauddetectorActions.UpdateEventLabel,
		FrauddetectorActions.UpdateList,
		FrauddetectorActions.UpdateModel,
		FrauddetectorActions.UpdateModelVersion,
		FrauddetectorActions.UpdateModelVersionStatus,
		FrauddetectorActions.UpdateRuleMetadata,
		FrauddetectorActions.UpdateRuleVersion,
		FrauddetectorActions.UpdateVariable,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		FrauddetectorActions.BatchGetVariable,
		FrauddetectorActions.actionGetBatchImportJobs,
		FrauddetectorActions.actionGetBatchPredictionJobs,
		FrauddetectorActions.actionGetDetectors,
		FrauddetectorActions.actionGetEntityTypes,
		FrauddetectorActions.actionGetEventTypes,
		FrauddetectorActions.actionGetExternalModels,
		FrauddetectorActions.actionGetLabels,
		FrauddetectorActions.actionGetListsMetadata,
		FrauddetectorActions.actionGetModels,
		FrauddetectorActions.actionGetOutcomes,
		FrauddetectorActions.actionGetRules,
		FrauddetectorActions.actionGetVariables,
		FrauddetectorActions.ListEventPredictions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		FrauddetectorActions.TagResource,
		FrauddetectorActions.UntagResource,
	];
}

/**
 * Properties for building a batch-import ARN.
 */
export interface FrauddetectorBatchImportArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a batch-import ARN.
 */
export interface FrauddetectorBatchImportArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a batch-prediction ARN.
 */
export interface FrauddetectorBatchPredictionArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a batch-prediction ARN.
 */
export interface FrauddetectorBatchPredictionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a detector ARN.
 */
export interface FrauddetectorDetectorArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a detector ARN.
 */
export interface FrauddetectorDetectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a detector-version ARN.
 */
export interface FrauddetectorDetectorVersionArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a detector-version ARN.
 */
export interface FrauddetectorDetectorVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a entity-type ARN.
 */
export interface FrauddetectorEntityTypeArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a entity-type ARN.
 */
export interface FrauddetectorEntityTypeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a event-type ARN.
 */
export interface FrauddetectorEventTypeArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a event-type ARN.
 */
export interface FrauddetectorEventTypeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a external-model ARN.
 */
export interface FrauddetectorExternalModelArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a external-model ARN.
 */
export interface FrauddetectorExternalModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a label ARN.
 */
export interface FrauddetectorLabelArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a label ARN.
 */
export interface FrauddetectorLabelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a list ARN.
 */
export interface FrauddetectorListArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a list ARN.
 */
export interface FrauddetectorListArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a model ARN.
 */
export interface FrauddetectorModelArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model ARN.
 */
export interface FrauddetectorModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a model-version ARN.
 */
export interface FrauddetectorModelVersionArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model-version ARN.
 */
export interface FrauddetectorModelVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a outcome ARN.
 */
export interface FrauddetectorOutcomeArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a outcome ARN.
 */
export interface FrauddetectorOutcomeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a rule ARN.
 */
export interface FrauddetectorRuleArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a rule ARN.
 */
export interface FrauddetectorRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a variable ARN.
 */
export interface FrauddetectorVariableArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a variable ARN.
 */
export interface FrauddetectorVariableArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

const BatchImportArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):batch-import\/(?<resourcePath>[^:/?]+)$/;
const BatchPredictionArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):batch-prediction\/(?<resourcePath>[^:/?]+)$/;
const DetectorArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):detector\/(?<resourcePath>[^:/?]+)$/;
const DetectorVersionArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):detector-version\/(?<resourcePath>[^:/?]+)$/;
const EntityTypeArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):entity-type\/(?<resourcePath>[^:/?]+)$/;
const EventTypeArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):event-type\/(?<resourcePath>[^:/?]+)$/;
const ExternalModelArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):external-model\/(?<resourcePath>[^:/?]+)$/;
const LabelArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):label\/(?<resourcePath>[^:/?]+)$/;
const ListArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):list\/(?<resourcePath>[^:/?]+)$/;
const ModelArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):model\/(?<resourcePath>[^:/?]+)$/;
const ModelVersionArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):model-version\/(?<resourcePath>[^:/?]+)$/;
const OutcomeArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):outcome\/(?<resourcePath>[^:/?]+)$/;
const RuleArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):rule\/(?<resourcePath>[^:/?]+)$/;
const VariableArnRegex =
	/^arn:(?<partition>[^:]+):frauddetector:(?<region>[^:]*):(?<account>[^:]*):variable\/(?<resourcePath>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for frauddetector resources.
 */
export class FrauddetectorResources {
	/**
	 * Builds an ARN for the batch-import resource.
	 */
	static batchImport(props: FrauddetectorBatchImportArnProps): string {
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
	static parseBatchImportArn(
		arn: string,
	): FrauddetectorBatchImportArnComponents {
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
	static batchPrediction(props: FrauddetectorBatchPredictionArnProps): string {
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
	static parseBatchPredictionArn(
		arn: string,
	): FrauddetectorBatchPredictionArnComponents {
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
	static detector(props: FrauddetectorDetectorArnProps): string {
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
	static parseDetectorArn(arn: string): FrauddetectorDetectorArnComponents {
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
	static detectorVersion(props: FrauddetectorDetectorVersionArnProps): string {
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
	static parseDetectorVersionArn(
		arn: string,
	): FrauddetectorDetectorVersionArnComponents {
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
	static entityType(props: FrauddetectorEntityTypeArnProps): string {
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
	static parseEntityTypeArn(arn: string): FrauddetectorEntityTypeArnComponents {
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
	static eventType(props: FrauddetectorEventTypeArnProps): string {
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
	static parseEventTypeArn(arn: string): FrauddetectorEventTypeArnComponents {
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
	static externalModel(props: FrauddetectorExternalModelArnProps): string {
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
	static parseExternalModelArn(
		arn: string,
	): FrauddetectorExternalModelArnComponents {
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
	static label(props: FrauddetectorLabelArnProps): string {
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
	static parseLabelArn(arn: string): FrauddetectorLabelArnComponents {
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
	static list(props: FrauddetectorListArnProps): string {
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
	static parseListArn(arn: string): FrauddetectorListArnComponents {
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
	static model(props: FrauddetectorModelArnProps): string {
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
	static parseModelArn(arn: string): FrauddetectorModelArnComponents {
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
	static modelVersion(props: FrauddetectorModelVersionArnProps): string {
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
	static parseModelVersionArn(
		arn: string,
	): FrauddetectorModelVersionArnComponents {
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
	static outcome(props: FrauddetectorOutcomeArnProps): string {
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
	static parseOutcomeArn(arn: string): FrauddetectorOutcomeArnComponents {
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
	static rule(props: FrauddetectorRuleArnProps): string {
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
	static parseRuleArn(arn: string): FrauddetectorRuleArnComponents {
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
	static variable(props: FrauddetectorVariableArnProps): string {
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
	static parseVariableArn(arn: string): FrauddetectorVariableArnComponents {
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
	static readonly BatchCreateVariable: string[] = [
		"frauddetector:BatchCreateVariable",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the BatchGetVariable API call. */
	static readonly BatchGetVariable: string[] = [
		"frauddetector:BatchGetVariable",
	];
	/** IAM actions required for the CancelBatchImportJob API call. */
	static readonly CancelBatchImportJob: string[] = [
		"frauddetector:CancelBatchImportJob",
	];
	/** IAM actions required for the CancelBatchPredictionJob API call. */
	static readonly CancelBatchPredictionJob: string[] = [
		"frauddetector:CancelBatchPredictionJob",
	];
	/** IAM actions required for the CreateBatchImportJob API call. */
	static readonly CreateBatchImportJob: string[] = [
		"frauddetector:CreateBatchImportJob",
		"iam:PassRole",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateBatchPredictionJob API call. */
	static readonly CreateBatchPredictionJob: string[] = [
		"frauddetector:CreateBatchPredictionJob",
		"iam:PassRole",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateDetectorVersion API call. */
	static readonly CreateDetectorVersion: string[] = [
		"frauddetector:CreateDetectorVersion",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateList API call. */
	static readonly CreateList: string[] = [
		"frauddetector:CreateList",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateModel API call. */
	static readonly CreateModel: string[] = [
		"frauddetector:CreateModel",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateModelVersion API call. */
	static readonly CreateModelVersion: string[] = [
		"frauddetector:CreateModelVersion",
		"iam:PassRole",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateRule API call. */
	static readonly CreateRule: string[] = [
		"frauddetector:CreateRule",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the CreateVariable API call. */
	static readonly CreateVariable: string[] = [
		"frauddetector:CreateVariable",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the DeleteBatchImportJob API call. */
	static readonly DeleteBatchImportJob: string[] = [
		"frauddetector:DeleteBatchImportJob",
	];
	/** IAM actions required for the DeleteBatchPredictionJob API call. */
	static readonly DeleteBatchPredictionJob: string[] = [
		"frauddetector:DeleteBatchPredictionJob",
	];
	/** IAM actions required for the DeleteDetector API call. */
	static readonly DeleteDetector: string[] = ["frauddetector:DeleteDetector"];
	/** IAM actions required for the DeleteDetectorVersion API call. */
	static readonly DeleteDetectorVersion: string[] = [
		"frauddetector:DeleteDetectorVersion",
	];
	/** IAM actions required for the DeleteEntityType API call. */
	static readonly DeleteEntityType: string[] = [
		"frauddetector:DeleteEntityType",
	];
	/** IAM actions required for the DeleteEvent API call. */
	static readonly DeleteEvent: string[] = ["frauddetector:DeleteEvent"];
	/** IAM actions required for the DeleteEventType API call. */
	static readonly DeleteEventType: string[] = ["frauddetector:DeleteEventType"];
	/** IAM actions required for the DeleteEventsByEventType API call. */
	static readonly DeleteEventsByEventType: string[] = [
		"frauddetector:DeleteEventsByEventType",
	];
	/** IAM actions required for the DeleteExternalModel API call. */
	static readonly DeleteExternalModel: string[] = [
		"frauddetector:DeleteExternalModel",
	];
	/** IAM actions required for the DeleteLabel API call. */
	static readonly DeleteLabel: string[] = ["frauddetector:DeleteLabel"];
	/** IAM actions required for the DeleteList API call. */
	static readonly DeleteList: string[] = ["frauddetector:DeleteList"];
	/** IAM actions required for the DeleteModel API call. */
	static readonly DeleteModel: string[] = ["frauddetector:DeleteModel"];
	/** IAM actions required for the DeleteModelVersion API call. */
	static readonly DeleteModelVersion: string[] = [
		"frauddetector:DeleteModelVersion",
	];
	/** IAM actions required for the DeleteOutcome API call. */
	static readonly DeleteOutcome: string[] = ["frauddetector:DeleteOutcome"];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DeleteRule: string[] = ["frauddetector:DeleteRule"];
	/** IAM actions required for the DeleteVariable API call. */
	static readonly DeleteVariable: string[] = ["frauddetector:DeleteVariable"];
	/** IAM actions required for the DescribeDetector API call. */
	static readonly DescribeDetector: string[] = [
		"frauddetector:DescribeDetector",
	];
	/** IAM actions required for the DescribeModelVersions API call. */
	static readonly DescribeModelVersions: string[] = [
		"frauddetector:DescribeModelVersions",
	];
	/** IAM actions required for the GetBatchImportJobs API call. */
	static readonly opGetBatchImportJobs: string[] = [
		"frauddetector:GetBatchImportJobs",
	];
	/** IAM actions required for the GetBatchPredictionJobs API call. */
	static readonly opGetBatchPredictionJobs: string[] = [
		"frauddetector:GetBatchPredictionJobs",
	];
	/** IAM actions required for the GetDeleteEventsByEventTypeStatus API call. */
	static readonly opGetDeleteEventsByEventTypeStatus: string[] = [
		"frauddetector:GetDeleteEventsByEventTypeStatus",
	];
	/** IAM actions required for the GetDetectorVersion API call. */
	static readonly opGetDetectorVersion: string[] = [
		"frauddetector:GetDetectorVersion",
	];
	/** IAM actions required for the GetDetectors API call. */
	static readonly opGetDetectors: string[] = ["frauddetector:GetDetectors"];
	/** IAM actions required for the GetEntityTypes API call. */
	static readonly opGetEntityTypes: string[] = ["frauddetector:GetEntityTypes"];
	/** IAM actions required for the GetEvent API call. */
	static readonly opGetEvent: string[] = ["frauddetector:GetEvent"];
	/** IAM actions required for the GetEventPrediction API call. */
	static readonly opGetEventPrediction: string[] = [
		"frauddetector:GetEventPrediction",
	];
	/** IAM actions required for the GetEventPredictionMetadata API call. */
	static readonly opGetEventPredictionMetadata: string[] = [
		"frauddetector:GetEventPredictionMetadata",
	];
	/** IAM actions required for the GetEventTypes API call. */
	static readonly opGetEventTypes: string[] = ["frauddetector:GetEventTypes"];
	/** IAM actions required for the GetExternalModels API call. */
	static readonly opGetExternalModels: string[] = [
		"frauddetector:GetExternalModels",
	];
	/** IAM actions required for the GetKMSEncryptionKey API call. */
	static readonly opGetKMSEncryptionKey: string[] = [
		"frauddetector:GetKMSEncryptionKey",
	];
	/** IAM actions required for the GetLabels API call. */
	static readonly opGetLabels: string[] = ["frauddetector:GetLabels"];
	/** IAM actions required for the GetListElements API call. */
	static readonly opGetListElements: string[] = [
		"frauddetector:GetListElements",
	];
	/** IAM actions required for the GetListsMetadata API call. */
	static readonly opGetListsMetadata: string[] = [
		"frauddetector:GetListsMetadata",
	];
	/** IAM actions required for the GetModelVersion API call. */
	static readonly opGetModelVersion: string[] = [
		"frauddetector:GetModelVersion",
	];
	/** IAM actions required for the GetModels API call. */
	static readonly opGetModels: string[] = ["frauddetector:GetModels"];
	/** IAM actions required for the GetOutcomes API call. */
	static readonly opGetOutcomes: string[] = ["frauddetector:GetOutcomes"];
	/** IAM actions required for the GetRules API call. */
	static readonly opGetRules: string[] = ["frauddetector:GetRules"];
	/** IAM actions required for the GetVariables API call. */
	static readonly opGetVariables: string[] = ["frauddetector:GetVariables"];
	/** IAM actions required for the ListEventPredictions API call. */
	static readonly ListEventPredictions: string[] = [
		"frauddetector:ListEventPredictions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"frauddetector:ListTagsForResource",
	];
	/** IAM actions required for the PutDetector API call. */
	static readonly PutDetector: string[] = [
		"frauddetector:PutDetector",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the PutEntityType API call. */
	static readonly PutEntityType: string[] = [
		"frauddetector:PutEntityType",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the PutEventType API call. */
	static readonly PutEventType: string[] = [
		"frauddetector:PutEventType",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the PutExternalModel API call. */
	static readonly PutExternalModel: string[] = [
		"iam:PassRole",
		"frauddetector:PutExternalModel",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the PutKMSEncryptionKey API call. */
	static readonly PutKMSEncryptionKey: string[] = [];
	/** IAM actions required for the PutLabel API call. */
	static readonly PutLabel: string[] = [
		"frauddetector:PutLabel",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the PutOutcome API call. */
	static readonly PutOutcome: string[] = [
		"frauddetector:PutOutcome",
		"frauddetector:TagResource",
	];
	/** IAM actions required for the SendEvent API call. */
	static readonly SendEvent: string[] = ["frauddetector:SendEvent"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["frauddetector:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["frauddetector:UntagResource"];
	/** IAM actions required for the UpdateDetectorVersion API call. */
	static readonly UpdateDetectorVersion: string[] = [
		"frauddetector:UpdateDetectorVersion",
	];
	/** IAM actions required for the UpdateDetectorVersionMetadata API call. */
	static readonly UpdateDetectorVersionMetadata: string[] = [
		"frauddetector:UpdateDetectorVersionMetadata",
	];
	/** IAM actions required for the UpdateDetectorVersionStatus API call. */
	static readonly UpdateDetectorVersionStatus: string[] = [
		"frauddetector:UpdateDetectorVersionStatus",
	];
	/** IAM actions required for the UpdateEventLabel API call. */
	static readonly UpdateEventLabel: string[] = [
		"frauddetector:UpdateEventLabel",
	];
	/** IAM actions required for the UpdateList API call. */
	static readonly UpdateList: string[] = ["frauddetector:UpdateList"];
	/** IAM actions required for the UpdateModel API call. */
	static readonly UpdateModel: string[] = ["frauddetector:UpdateModel"];
	/** IAM actions required for the UpdateModelVersion API call. */
	static readonly UpdateModelVersion: string[] = [];
	/** IAM actions required for the UpdateModelVersionStatus API call. */
	static readonly UpdateModelVersionStatus: string[] = [
		"frauddetector:UpdateModelVersionStatus",
	];
	/** IAM actions required for the UpdateRuleMetadata API call. */
	static readonly UpdateRuleMetadata: string[] = [
		"frauddetector:UpdateRuleMetadata",
	];
	/** IAM actions required for the UpdateRuleVersion API call. */
	static readonly UpdateRuleVersion: string[] = [
		"frauddetector:TagResource",
		"frauddetector:UpdateRuleVersion",
	];
	/** IAM actions required for the UpdateVariable API call. */
	static readonly UpdateVariable: string[] = ["frauddetector:UpdateVariable"];
}

/**
 * Condition key constants and builders for frauddetector.
 */
export class FrauddetectorConditions {
	/** Condition keys applicable to the BatchCreateVariable action. */
	static readonly BatchCreateVariableConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBatchImportJob action. */
	static readonly CreateBatchImportJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBatchPredictionJob action. */
	static readonly CreateBatchPredictionJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDetectorVersion action. */
	static readonly CreateDetectorVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateList action. */
	static readonly CreateListConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModel action. */
	static readonly CreateModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelVersion action. */
	static readonly CreateModelVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRule action. */
	static readonly CreateRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVariable action. */
	static readonly CreateVariableConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteList action. */
	static readonly DeleteListConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetListElements action. */
	static readonly actionGetListElementsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetListsMetadata action. */
	static readonly actionGetListsMetadataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutDetector action. */
	static readonly PutDetectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutEntityType action. */
	static readonly PutEntityTypeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutEventType action. */
	static readonly PutEventTypeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutExternalModel action. */
	static readonly PutExternalModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutLabel action. */
	static readonly PutLabelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutOutcome action. */
	static readonly PutOutcomeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the SendEvent action. */
	static readonly SendEventConditionKeys: string[] = [
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
	/** Condition keys applicable to the UpdateEventLabel action. */
	static readonly UpdateEventLabelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateList action. */
	static readonly UpdateListConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateModelVersion action. */
	static readonly UpdateModelVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateRuleVersion action. */
	static readonly UpdateRuleVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

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
