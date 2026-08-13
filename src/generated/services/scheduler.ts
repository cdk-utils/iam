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
	static readonly CREATE_SCHEDULE = "scheduler:CreateSchedule";
	/** [Write] scheduler:CreateScheduleGroup */
	static readonly CREATE_SCHEDULE_GROUP = "scheduler:CreateScheduleGroup";
	/** [Write] scheduler:DeleteSchedule */
	static readonly DELETE_SCHEDULE = "scheduler:DeleteSchedule";
	/** [Write] scheduler:DeleteScheduleGroup */
	static readonly DELETE_SCHEDULE_GROUP = "scheduler:DeleteScheduleGroup";
	/** [Read] scheduler:GetSchedule */
	static readonly GET_SCHEDULE = "scheduler:GetSchedule";
	/** [Read] scheduler:GetScheduleGroup */
	static readonly GET_SCHEDULE_GROUP = "scheduler:GetScheduleGroup";
	/** [List] scheduler:ListScheduleGroups */
	static readonly LIST_SCHEDULE_GROUPS = "scheduler:ListScheduleGroups";
	/** [List] scheduler:ListSchedules */
	static readonly LIST_SCHEDULES = "scheduler:ListSchedules";
	/** [List] scheduler:ListSchedulesByTarget */
	static readonly LIST_SCHEDULES_BY_TARGET = "scheduler:ListSchedulesByTarget";
	/** [Read] scheduler:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "scheduler:ListTagsForResource";
	/** [Tagging] scheduler:TagResource */
	static readonly TAG_RESOURCE = "scheduler:TagResource";
	/** [Tagging] scheduler:UntagResource */
	static readonly UNTAG_RESOURCE = "scheduler:UntagResource";
	/** [Write] scheduler:UpdateSchedule */
	static readonly UPDATE_SCHEDULE = "scheduler:UpdateSchedule";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SchedulerActions.GET_SCHEDULE,
		SchedulerActions.GET_SCHEDULE_GROUP,
		SchedulerActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SchedulerActions.CREATE_SCHEDULE,
		SchedulerActions.CREATE_SCHEDULE_GROUP,
		SchedulerActions.DELETE_SCHEDULE,
		SchedulerActions.DELETE_SCHEDULE_GROUP,
		SchedulerActions.UPDATE_SCHEDULE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SchedulerActions.LIST_SCHEDULE_GROUPS,
		SchedulerActions.LIST_SCHEDULES,
		SchedulerActions.LIST_SCHEDULES_BY_TARGET,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SchedulerActions.TAG_RESOURCE,
		SchedulerActions.UNTAG_RESOURCE,
	];
}

const ScheduleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):scheduler:(?<region>[^:]*):(?<account>[^:]*):schedule/(?<groupName>[^:/?]+)/(?<scheduleName>[^:/?]+)$",
);
const ScheduleGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):scheduler:(?<region>[^:]*):(?<account>[^:]*):schedule-group/(?<groupName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for scheduler resources.
 */
export class SchedulerResources {
	/**
	 * Builds an ARN for the schedule resource.
	 */
	static schedule(props: {
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
	}): string {
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
	static parseScheduleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupName: string;
		scheduleName: string;
	} {
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
	static scheduleGroup(props: {
		/** The GroupName component of the ARN. */
		readonly groupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseScheduleGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupName: string;
	} {
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
	static readonly CREATE_SCHEDULE: string[] = [
		"scheduler:CreateSchedule",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateScheduleGroup API call. */
	static readonly CREATE_SCHEDULE_GROUP: string[] = [
		"scheduler:CreateScheduleGroup",
		"scheduler:TagResource",
	];
	/** IAM actions required for the DeleteSchedule API call. */
	static readonly DELETE_SCHEDULE: string[] = ["scheduler:DeleteSchedule"];
	/** IAM actions required for the DeleteScheduleGroup API call. */
	static readonly DELETE_SCHEDULE_GROUP: string[] = [
		"scheduler:DeleteSchedule",
		"scheduler:DeleteScheduleGroup",
	];
	/** IAM actions required for the GetSchedule API call. */
	static readonly GET_SCHEDULE: string[] = ["scheduler:GetSchedule"];
	/** IAM actions required for the GetScheduleGroup API call. */
	static readonly GET_SCHEDULE_GROUP: string[] = ["scheduler:GetScheduleGroup"];
	/** IAM actions required for the ListScheduleGroups API call. */
	static readonly LIST_SCHEDULE_GROUPS: string[] = [
		"scheduler:ListScheduleGroups",
	];
	/** IAM actions required for the ListSchedules API call. */
	static readonly LIST_SCHEDULES: string[] = ["scheduler:ListSchedules"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"scheduler:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["scheduler:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["scheduler:UntagResource"];
	/** IAM actions required for the UpdateSchedule API call. */
	static readonly UPDATE_SCHEDULE: string[] = [
		"iam:PassRole",
		"scheduler:UpdateSchedule",
	];
}

/**
 * Condition key constants and builders for scheduler.
 */
export class SchedulerConditions {
	/** Condition keys applicable to the CreateSchedule action. */
	static readonly CREATE_SCHEDULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateScheduleGroup action. */
	static readonly CREATE_SCHEDULE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteSchedule action. */
	static readonly DELETE_SCHEDULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteScheduleGroup action. */
	static readonly DELETE_SCHEDULE_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSchedule action. */
	static readonly GET_SCHEDULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetScheduleGroup action. */
	static readonly GET_SCHEDULE_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateSchedule action. */
	static readonly UPDATE_SCHEDULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
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
