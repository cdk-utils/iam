// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iotevents.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iotevents service.
 */
export class IoteventsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iotevents";

	/** [Write] iotevents:BatchAcknowledgeAlarm */
	static readonly BATCH_ACKNOWLEDGE_ALARM = "iotevents:BatchAcknowledgeAlarm";
	/** [Write] iotevents:BatchDeleteDetector */
	static readonly BATCH_DELETE_DETECTOR = "iotevents:BatchDeleteDetector";
	/** [Write] iotevents:BatchDisableAlarm */
	static readonly BATCH_DISABLE_ALARM = "iotevents:BatchDisableAlarm";
	/** [Write] iotevents:BatchEnableAlarm */
	static readonly BATCH_ENABLE_ALARM = "iotevents:BatchEnableAlarm";
	/** [Write] iotevents:BatchPutMessage */
	static readonly BATCH_PUT_MESSAGE = "iotevents:BatchPutMessage";
	/** [Write] iotevents:BatchResetAlarm */
	static readonly BATCH_RESET_ALARM = "iotevents:BatchResetAlarm";
	/** [Write] iotevents:BatchSnoozeAlarm */
	static readonly BATCH_SNOOZE_ALARM = "iotevents:BatchSnoozeAlarm";
	/** [Write] iotevents:BatchUpdateDetector */
	static readonly BATCH_UPDATE_DETECTOR = "iotevents:BatchUpdateDetector";
	/** [Write] iotevents:CreateAlarmModel */
	static readonly CREATE_ALARM_MODEL = "iotevents:CreateAlarmModel";
	/** [Write] iotevents:CreateDetectorModel */
	static readonly CREATE_DETECTOR_MODEL = "iotevents:CreateDetectorModel";
	/** [Write] iotevents:CreateInput */
	static readonly CREATE_INPUT = "iotevents:CreateInput";
	/** [Write] iotevents:DeleteAlarmModel */
	static readonly DELETE_ALARM_MODEL = "iotevents:DeleteAlarmModel";
	/** [Write] iotevents:DeleteDetectorModel */
	static readonly DELETE_DETECTOR_MODEL = "iotevents:DeleteDetectorModel";
	/** [Write] iotevents:DeleteInput */
	static readonly DELETE_INPUT = "iotevents:DeleteInput";
	/** [Read] iotevents:DescribeAlarm */
	static readonly DESCRIBE_ALARM = "iotevents:DescribeAlarm";
	/** [Read] iotevents:DescribeAlarmModel */
	static readonly DESCRIBE_ALARM_MODEL = "iotevents:DescribeAlarmModel";
	/** [Read] iotevents:DescribeDetector */
	static readonly DESCRIBE_DETECTOR = "iotevents:DescribeDetector";
	/** [Read] iotevents:DescribeDetectorModel */
	static readonly DESCRIBE_DETECTOR_MODEL = "iotevents:DescribeDetectorModel";
	/** [Read] iotevents:DescribeDetectorModelAnalysis */
	static readonly DESCRIBE_DETECTOR_MODEL_ANALYSIS =
		"iotevents:DescribeDetectorModelAnalysis";
	/** [Read] iotevents:DescribeInput */
	static readonly DESCRIBE_INPUT = "iotevents:DescribeInput";
	/** [Read] iotevents:DescribeLoggingOptions */
	static readonly DESCRIBE_LOGGING_OPTIONS = "iotevents:DescribeLoggingOptions";
	/** [Read] iotevents:GetDetectorModelAnalysisResults */
	static readonly GET_DETECTOR_MODEL_ANALYSIS_RESULTS =
		"iotevents:GetDetectorModelAnalysisResults";
	/** [List] iotevents:ListAlarmModelVersions */
	static readonly LIST_ALARM_MODEL_VERSIONS =
		"iotevents:ListAlarmModelVersions";
	/** [List] iotevents:ListAlarmModels */
	static readonly LIST_ALARM_MODELS = "iotevents:ListAlarmModels";
	/** [List] iotevents:ListAlarms */
	static readonly LIST_ALARMS = "iotevents:ListAlarms";
	/** [List] iotevents:ListDetectorModelVersions */
	static readonly LIST_DETECTOR_MODEL_VERSIONS =
		"iotevents:ListDetectorModelVersions";
	/** [List] iotevents:ListDetectorModels */
	static readonly LIST_DETECTOR_MODELS = "iotevents:ListDetectorModels";
	/** [List] iotevents:ListDetectors */
	static readonly LIST_DETECTORS = "iotevents:ListDetectors";
	/** [List] iotevents:ListInputRoutings */
	static readonly LIST_INPUT_ROUTINGS = "iotevents:ListInputRoutings";
	/** [List] iotevents:ListInputs */
	static readonly LIST_INPUTS = "iotevents:ListInputs";
	/** [Read] iotevents:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "iotevents:ListTagsForResource";
	/** [Write] iotevents:PutLoggingOptions */
	static readonly PUT_LOGGING_OPTIONS = "iotevents:PutLoggingOptions";
	/** [Write] iotevents:StartDetectorModelAnalysis */
	static readonly START_DETECTOR_MODEL_ANALYSIS =
		"iotevents:StartDetectorModelAnalysis";
	/** [Tagging] iotevents:TagResource */
	static readonly TAG_RESOURCE = "iotevents:TagResource";
	/** [Tagging] iotevents:UntagResource */
	static readonly UNTAG_RESOURCE = "iotevents:UntagResource";
	/** [Write] iotevents:UpdateAlarmModel */
	static readonly UPDATE_ALARM_MODEL = "iotevents:UpdateAlarmModel";
	/** [Write] iotevents:UpdateDetectorModel */
	static readonly UPDATE_DETECTOR_MODEL = "iotevents:UpdateDetectorModel";
	/** [Write] iotevents:UpdateInput */
	static readonly UPDATE_INPUT = "iotevents:UpdateInput";
	/** [Write] iotevents:UpdateInputRouting */
	static readonly UPDATE_INPUT_ROUTING = "iotevents:UpdateInputRouting";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IoteventsActions.DESCRIBE_ALARM,
		IoteventsActions.DESCRIBE_ALARM_MODEL,
		IoteventsActions.DESCRIBE_DETECTOR,
		IoteventsActions.DESCRIBE_DETECTOR_MODEL,
		IoteventsActions.DESCRIBE_DETECTOR_MODEL_ANALYSIS,
		IoteventsActions.DESCRIBE_INPUT,
		IoteventsActions.DESCRIBE_LOGGING_OPTIONS,
		IoteventsActions.GET_DETECTOR_MODEL_ANALYSIS_RESULTS,
		IoteventsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IoteventsActions.BATCH_ACKNOWLEDGE_ALARM,
		IoteventsActions.BATCH_DELETE_DETECTOR,
		IoteventsActions.BATCH_DISABLE_ALARM,
		IoteventsActions.BATCH_ENABLE_ALARM,
		IoteventsActions.BATCH_PUT_MESSAGE,
		IoteventsActions.BATCH_RESET_ALARM,
		IoteventsActions.BATCH_SNOOZE_ALARM,
		IoteventsActions.BATCH_UPDATE_DETECTOR,
		IoteventsActions.CREATE_ALARM_MODEL,
		IoteventsActions.CREATE_DETECTOR_MODEL,
		IoteventsActions.CREATE_INPUT,
		IoteventsActions.DELETE_ALARM_MODEL,
		IoteventsActions.DELETE_DETECTOR_MODEL,
		IoteventsActions.DELETE_INPUT,
		IoteventsActions.PUT_LOGGING_OPTIONS,
		IoteventsActions.START_DETECTOR_MODEL_ANALYSIS,
		IoteventsActions.UPDATE_ALARM_MODEL,
		IoteventsActions.UPDATE_DETECTOR_MODEL,
		IoteventsActions.UPDATE_INPUT,
		IoteventsActions.UPDATE_INPUT_ROUTING,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IoteventsActions.LIST_ALARM_MODEL_VERSIONS,
		IoteventsActions.LIST_ALARM_MODELS,
		IoteventsActions.LIST_ALARMS,
		IoteventsActions.LIST_DETECTOR_MODEL_VERSIONS,
		IoteventsActions.LIST_DETECTOR_MODELS,
		IoteventsActions.LIST_DETECTORS,
		IoteventsActions.LIST_INPUT_ROUTINGS,
		IoteventsActions.LIST_INPUTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		IoteventsActions.TAG_RESOURCE,
		IoteventsActions.UNTAG_RESOURCE,
	];
}

const AlarmModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotevents:(?<region>[^:]*):(?<account>[^:]*):alarmModel/(?<alarmModelName>[^:/?]+)$",
);
const DetectorModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotevents:(?<region>[^:]*):(?<account>[^:]*):detectorModel/(?<detectorModelName>[^:/?]+)$",
);
const InputArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotevents:(?<region>[^:]*):(?<account>[^:]*):input/(?<inputName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for iotevents resources.
 */
export class IoteventsResources {
	/**
	 * Builds an ARN for the alarmModel resource.
	 */
	static alarmModel(props: {
		/** The AlarmModelName component of the ARN. */
		readonly alarmModelName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotevents:${props.region ?? "*"}:${props.account ?? "*"}:alarmModel/${props.alarmModelName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the alarmModel resource.
	 */
	static isValidAlarmModelArn(arn: string): boolean {
		return AlarmModelArnRegex.test(arn);
	}

	/**
	 * Parses a alarmModel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAlarmModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		alarmModelName: string;
	} {
		const match = AlarmModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid alarmModel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			alarmModelName: match.groups!.alarmModelName,
		};
	}

	/**
	 * Builds an ARN for the detectorModel resource.
	 */
	static detectorModel(props: {
		/** The DetectorModelName component of the ARN. */
		readonly detectorModelName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotevents:${props.region ?? "*"}:${props.account ?? "*"}:detectorModel/${props.detectorModelName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the detectorModel resource.
	 */
	static isValidDetectorModelArn(arn: string): boolean {
		return DetectorModelArnRegex.test(arn);
	}

	/**
	 * Parses a detectorModel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDetectorModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		detectorModelName: string;
	} {
		const match = DetectorModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid detectorModel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			detectorModelName: match.groups!.detectorModelName,
		};
	}

	/**
	 * Builds an ARN for the input resource.
	 */
	static input(props: {
		/** The InputName component of the ARN. */
		readonly inputName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotevents:${props.region ?? "*"}:${props.account ?? "*"}:input/${props.inputName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the input resource.
	 */
	static isValidInputArn(arn: string): boolean {
		return InputArnRegex.test(arn);
	}

	/**
	 * Parses a input ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInputArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		inputName: string;
	} {
		const match = InputArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid input ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			inputName: match.groups!.inputName,
		};
	}
}

/**
 * Condition key constants and builders for iotevents.
 */
export class IoteventsConditions {
	/** Condition keys applicable to the CreateAlarmModel action. */
	static readonly CREATE_ALARM_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDetectorModel action. */
	static readonly CREATE_DETECTOR_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInput action. */
	static readonly CREATE_INPUT_CONDITION_KEYS: string[] = [
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
	/** Condition key: iotevents:keyValue (String) */
	static readonly KEY_VALUE = "iotevents:keyValue";

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
	 * Generates a condition block for `iotevents:keyValue`.
	 */
	static keyValue(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iotevents:keyValue": value } };
	}
}
