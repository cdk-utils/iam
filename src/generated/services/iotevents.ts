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
	static readonly BatchAcknowledgeAlarm = "iotevents:BatchAcknowledgeAlarm";
	/** [Write] iotevents:BatchDeleteDetector */
	static readonly BatchDeleteDetector = "iotevents:BatchDeleteDetector";
	/** [Write] iotevents:BatchDisableAlarm */
	static readonly BatchDisableAlarm = "iotevents:BatchDisableAlarm";
	/** [Write] iotevents:BatchEnableAlarm */
	static readonly BatchEnableAlarm = "iotevents:BatchEnableAlarm";
	/** [Write] iotevents:BatchPutMessage */
	static readonly BatchPutMessage = "iotevents:BatchPutMessage";
	/** [Write] iotevents:BatchResetAlarm */
	static readonly BatchResetAlarm = "iotevents:BatchResetAlarm";
	/** [Write] iotevents:BatchSnoozeAlarm */
	static readonly BatchSnoozeAlarm = "iotevents:BatchSnoozeAlarm";
	/** [Write] iotevents:BatchUpdateDetector */
	static readonly BatchUpdateDetector = "iotevents:BatchUpdateDetector";
	/** [Write] iotevents:CreateAlarmModel */
	static readonly CreateAlarmModel = "iotevents:CreateAlarmModel";
	/** [Write] iotevents:CreateDetectorModel */
	static readonly CreateDetectorModel = "iotevents:CreateDetectorModel";
	/** [Write] iotevents:CreateInput */
	static readonly CreateInput = "iotevents:CreateInput";
	/** [Write] iotevents:DeleteAlarmModel */
	static readonly DeleteAlarmModel = "iotevents:DeleteAlarmModel";
	/** [Write] iotevents:DeleteDetectorModel */
	static readonly DeleteDetectorModel = "iotevents:DeleteDetectorModel";
	/** [Write] iotevents:DeleteInput */
	static readonly DeleteInput = "iotevents:DeleteInput";
	/** [Read] iotevents:DescribeAlarm */
	static readonly DescribeAlarm = "iotevents:DescribeAlarm";
	/** [Read] iotevents:DescribeAlarmModel */
	static readonly DescribeAlarmModel = "iotevents:DescribeAlarmModel";
	/** [Read] iotevents:DescribeDetector */
	static readonly DescribeDetector = "iotevents:DescribeDetector";
	/** [Read] iotevents:DescribeDetectorModel */
	static readonly DescribeDetectorModel = "iotevents:DescribeDetectorModel";
	/** [Read] iotevents:DescribeDetectorModelAnalysis */
	static readonly DescribeDetectorModelAnalysis =
		"iotevents:DescribeDetectorModelAnalysis";
	/** [Read] iotevents:DescribeInput */
	static readonly DescribeInput = "iotevents:DescribeInput";
	/** [Read] iotevents:DescribeLoggingOptions */
	static readonly DescribeLoggingOptions = "iotevents:DescribeLoggingOptions";
	/** [Read] iotevents:GetDetectorModelAnalysisResults */
	static readonly actionGetDetectorModelAnalysisResults =
		"iotevents:GetDetectorModelAnalysisResults";
	/** [List] iotevents:ListAlarmModelVersions */
	static readonly ListAlarmModelVersions = "iotevents:ListAlarmModelVersions";
	/** [List] iotevents:ListAlarmModels */
	static readonly ListAlarmModels = "iotevents:ListAlarmModels";
	/** [List] iotevents:ListAlarms */
	static readonly ListAlarms = "iotevents:ListAlarms";
	/** [List] iotevents:ListDetectorModelVersions */
	static readonly ListDetectorModelVersions =
		"iotevents:ListDetectorModelVersions";
	/** [List] iotevents:ListDetectorModels */
	static readonly ListDetectorModels = "iotevents:ListDetectorModels";
	/** [List] iotevents:ListDetectors */
	static readonly ListDetectors = "iotevents:ListDetectors";
	/** [List] iotevents:ListInputRoutings */
	static readonly ListInputRoutings = "iotevents:ListInputRoutings";
	/** [List] iotevents:ListInputs */
	static readonly ListInputs = "iotevents:ListInputs";
	/** [Read] iotevents:ListTagsForResource */
	static readonly ListTagsForResource = "iotevents:ListTagsForResource";
	/** [Write] iotevents:PutLoggingOptions */
	static readonly PutLoggingOptions = "iotevents:PutLoggingOptions";
	/** [Write] iotevents:StartDetectorModelAnalysis */
	static readonly StartDetectorModelAnalysis =
		"iotevents:StartDetectorModelAnalysis";
	/** [Tagging] iotevents:TagResource */
	static readonly TagResource = "iotevents:TagResource";
	/** [Tagging] iotevents:UntagResource */
	static readonly UntagResource = "iotevents:UntagResource";
	/** [Write] iotevents:UpdateAlarmModel */
	static readonly UpdateAlarmModel = "iotevents:UpdateAlarmModel";
	/** [Write] iotevents:UpdateDetectorModel */
	static readonly UpdateDetectorModel = "iotevents:UpdateDetectorModel";
	/** [Write] iotevents:UpdateInput */
	static readonly UpdateInput = "iotevents:UpdateInput";
	/** [Write] iotevents:UpdateInputRouting */
	static readonly UpdateInputRouting = "iotevents:UpdateInputRouting";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IoteventsActions.DescribeAlarm,
		IoteventsActions.DescribeAlarmModel,
		IoteventsActions.DescribeDetector,
		IoteventsActions.DescribeDetectorModel,
		IoteventsActions.DescribeDetectorModelAnalysis,
		IoteventsActions.DescribeInput,
		IoteventsActions.DescribeLoggingOptions,
		IoteventsActions.actionGetDetectorModelAnalysisResults,
		IoteventsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IoteventsActions.BatchAcknowledgeAlarm,
		IoteventsActions.BatchDeleteDetector,
		IoteventsActions.BatchDisableAlarm,
		IoteventsActions.BatchEnableAlarm,
		IoteventsActions.BatchPutMessage,
		IoteventsActions.BatchResetAlarm,
		IoteventsActions.BatchSnoozeAlarm,
		IoteventsActions.BatchUpdateDetector,
		IoteventsActions.CreateAlarmModel,
		IoteventsActions.CreateDetectorModel,
		IoteventsActions.CreateInput,
		IoteventsActions.DeleteAlarmModel,
		IoteventsActions.DeleteDetectorModel,
		IoteventsActions.DeleteInput,
		IoteventsActions.PutLoggingOptions,
		IoteventsActions.StartDetectorModelAnalysis,
		IoteventsActions.UpdateAlarmModel,
		IoteventsActions.UpdateDetectorModel,
		IoteventsActions.UpdateInput,
		IoteventsActions.UpdateInputRouting,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IoteventsActions.ListAlarmModelVersions,
		IoteventsActions.ListAlarmModels,
		IoteventsActions.ListAlarms,
		IoteventsActions.ListDetectorModelVersions,
		IoteventsActions.ListDetectorModels,
		IoteventsActions.ListDetectors,
		IoteventsActions.ListInputRoutings,
		IoteventsActions.ListInputs,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		IoteventsActions.TagResource,
		IoteventsActions.UntagResource,
	];
}

/**
 * Properties for building a alarmModel ARN.
 */
export interface IoteventsAlarmModelArnProps {
	/** The AlarmModelName component of the ARN. */
	readonly alarmModelName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a alarmModel ARN.
 */
export interface IoteventsAlarmModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AlarmModelName component. */
	readonly alarmModelName: string;
}

/**
 * Properties for building a detectorModel ARN.
 */
export interface IoteventsDetectorModelArnProps {
	/** The DetectorModelName component of the ARN. */
	readonly detectorModelName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a detectorModel ARN.
 */
export interface IoteventsDetectorModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DetectorModelName component. */
	readonly detectorModelName: string;
}

/**
 * Properties for building a input ARN.
 */
export interface IoteventsInputArnProps {
	/** The InputName component of the ARN. */
	readonly inputName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a input ARN.
 */
export interface IoteventsInputArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InputName component. */
	readonly inputName: string;
}

const AlarmModelArnRegex =
	/^arn:(?<partition>[^:]+):iotevents:(?<region>[^:]*):(?<account>[^:]*):alarmModel\/(?<alarmModelName>[^:/?]+)$/;
const DetectorModelArnRegex =
	/^arn:(?<partition>[^:]+):iotevents:(?<region>[^:]*):(?<account>[^:]*):detectorModel\/(?<detectorModelName>[^:/?]+)$/;
const InputArnRegex =
	/^arn:(?<partition>[^:]+):iotevents:(?<region>[^:]*):(?<account>[^:]*):input\/(?<inputName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for iotevents resources.
 */
export class IoteventsResources {
	/**
	 * Builds an ARN for the alarmModel resource.
	 */
	static alarmModel(props: IoteventsAlarmModelArnProps): string {
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
	static parseAlarmModelArn(arn: string): IoteventsAlarmModelArnComponents {
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
	static detectorModel(props: IoteventsDetectorModelArnProps): string {
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
	static parseDetectorModelArn(
		arn: string,
	): IoteventsDetectorModelArnComponents {
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
	static input(props: IoteventsInputArnProps): string {
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
	static parseInputArn(arn: string): IoteventsInputArnComponents {
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
	static readonly CreateAlarmModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDetectorModel action. */
	static readonly CreateDetectorModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInput action. */
	static readonly CreateInputConditionKeys: string[] = [
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
