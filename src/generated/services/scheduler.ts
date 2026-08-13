// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/scheduler.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the scheduler service.
 */
export class SchedulerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "scheduler";

	/** [Write] scheduler:CreateSchedule */
	static readonly CreateSchedule = "scheduler:CreateSchedule";
	/** [Write] scheduler:CreateScheduleGroup */
	static readonly CreateScheduleGroup = "scheduler:CreateScheduleGroup";
	/** [Write] scheduler:DeleteSchedule */
	static readonly DeleteSchedule = "scheduler:DeleteSchedule";
	/** [Write] scheduler:DeleteScheduleGroup */
	static readonly DeleteScheduleGroup = "scheduler:DeleteScheduleGroup";
	/** [Read] scheduler:GetSchedule */
	static readonly actionGetSchedule = "scheduler:GetSchedule";
	/** [Read] scheduler:GetScheduleGroup */
	static readonly actionGetScheduleGroup = "scheduler:GetScheduleGroup";
	/** [List] scheduler:ListScheduleGroups */
	static readonly ListScheduleGroups = "scheduler:ListScheduleGroups";
	/** [List] scheduler:ListSchedules */
	static readonly ListSchedules = "scheduler:ListSchedules";
	/** [List] scheduler:ListSchedulesByTarget */
	static readonly ListSchedulesByTarget = "scheduler:ListSchedulesByTarget";
	/** [Read] scheduler:ListTagsForResource */
	static readonly ListTagsForResource = "scheduler:ListTagsForResource";
	/** [Tagging] scheduler:TagResource */
	static readonly TagResource = "scheduler:TagResource";
	/** [Tagging] scheduler:UntagResource */
	static readonly UntagResource = "scheduler:UntagResource";
	/** [Write] scheduler:UpdateSchedule */
	static readonly UpdateSchedule = "scheduler:UpdateSchedule";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SchedulerActions.actionGetSchedule,
		SchedulerActions.actionGetScheduleGroup,
		SchedulerActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SchedulerActions.CreateSchedule,
		SchedulerActions.CreateScheduleGroup,
		SchedulerActions.DeleteSchedule,
		SchedulerActions.DeleteScheduleGroup,
		SchedulerActions.UpdateSchedule,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SchedulerActions.ListScheduleGroups,
		SchedulerActions.ListSchedules,
		SchedulerActions.ListSchedulesByTarget,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SchedulerActions.TagResource,
		SchedulerActions.UntagResource,
	];
}

/**
 * Properties for building a schedule ARN.
 */
export interface SchedulerScheduleArnProps {
	/** The GroupName component of the ARN. */
	readonly groupName: string;
	/** The ScheduleName component of the ARN. */
	readonly scheduleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a schedule ARN.
 */
export interface SchedulerScheduleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupName component. */
	readonly groupName: string;
	/** The ScheduleName component. */
	readonly scheduleName: string;
}

/**
 * Properties for building a schedule-group ARN.
 */
export interface SchedulerScheduleGroupArnProps {
	/** The GroupName component of the ARN. */
	readonly groupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a schedule-group ARN.
 */
export interface SchedulerScheduleGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupName component. */
	readonly groupName: string;
}

const ScheduleArnRegex =
	/^arn:(?<partition>[^:]+):scheduler:(?<region>[^:]*):(?<account>[^:]*):schedule\/(?<groupName>[^:/?]+)\/(?<scheduleName>[^:/?]+)$/;
const ScheduleGroupArnRegex =
	/^arn:(?<partition>[^:]+):scheduler:(?<region>[^:]*):(?<account>[^:]*):schedule-group\/(?<groupName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for scheduler resources.
 */
export class SchedulerResources {
	/**
	 * Builds an ARN for the schedule resource.
	 */
	static schedule(props: SchedulerScheduleArnProps): string {
		return `arn:${props.partition ?? "aws"}:scheduler:${props.region ?? "*"}:${props.account ?? "*"}:schedule/${props.groupName}/${props.scheduleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the schedule resource.
	 */
	static isValidScheduleArn(arn: string): boolean {
		return ScheduleArnRegex.test(arn);
	}

	/**
	 * Parses a schedule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScheduleArn(arn: string): SchedulerScheduleArnComponents {
		const match = ScheduleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid schedule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupName: match.groups!.groupName,
			scheduleName: match.groups!.scheduleName,
		};
	}

	/**
	 * Builds an ARN for the schedule-group resource.
	 */
	static scheduleGroup(props: SchedulerScheduleGroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:scheduler:${props.region ?? "*"}:${props.account ?? "*"}:schedule-group/${props.groupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the schedule-group resource.
	 */
	static isValidScheduleGroupArn(arn: string): boolean {
		return ScheduleGroupArnRegex.test(arn);
	}

	/**
	 * Parses a schedule-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScheduleGroupArn(
		arn: string,
	): SchedulerScheduleGroupArnComponents {
		const match = ScheduleGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid schedule-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupName: match.groups!.groupName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for scheduler.
 */
export class SchedulerOperations {
	/** IAM actions required for the CreateSchedule API call. */
	static readonly CreateSchedule: string[] = [
		"scheduler:CreateSchedule",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateScheduleGroup API call. */
	static readonly CreateScheduleGroup: string[] = [
		"scheduler:CreateScheduleGroup",
		"scheduler:TagResource",
	];
	/** IAM actions required for the DeleteSchedule API call. */
	static readonly DeleteSchedule: string[] = ["scheduler:DeleteSchedule"];
	/** IAM actions required for the DeleteScheduleGroup API call. */
	static readonly DeleteScheduleGroup: string[] = [
		"scheduler:DeleteSchedule",
		"scheduler:DeleteScheduleGroup",
	];
	/** IAM actions required for the GetSchedule API call. */
	static readonly opGetSchedule: string[] = ["scheduler:GetSchedule"];
	/** IAM actions required for the GetScheduleGroup API call. */
	static readonly opGetScheduleGroup: string[] = ["scheduler:GetScheduleGroup"];
	/** IAM actions required for the ListScheduleGroups API call. */
	static readonly ListScheduleGroups: string[] = [
		"scheduler:ListScheduleGroups",
	];
	/** IAM actions required for the ListSchedules API call. */
	static readonly ListSchedules: string[] = ["scheduler:ListSchedules"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"scheduler:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["scheduler:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["scheduler:UntagResource"];
	/** IAM actions required for the UpdateSchedule API call. */
	static readonly UpdateSchedule: string[] = [
		"iam:PassRole",
		"scheduler:UpdateSchedule",
	];
}

/**
 * Condition key constants and builders for scheduler.
 */
export class SchedulerConditions {
	/** Condition keys applicable to the CreateSchedule action. */
	static readonly CreateScheduleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateScheduleGroup action. */
	static readonly CreateScheduleGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteSchedule action. */
	static readonly DeleteScheduleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteScheduleGroup action. */
	static readonly DeleteScheduleGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSchedule action. */
	static readonly actionGetScheduleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetScheduleGroup action. */
	static readonly actionGetScheduleGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateSchedule action. */
	static readonly UpdateScheduleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
