// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codeguru-profiler.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codeguru-profiler service.
 */
export class CodeguruProfilerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codeguru-profiler";

	/** [Write] codeguru-profiler:AddNotificationChannels */
	static readonly ADD_NOTIFICATION_CHANNELS =
		"codeguru-profiler:AddNotificationChannels";
	/** [List] codeguru-profiler:BatchGetFrameMetricData */
	static readonly BATCH_GET_FRAME_METRIC_DATA =
		"codeguru-profiler:BatchGetFrameMetricData";
	/** [Write] codeguru-profiler:ConfigureAgent */
	static readonly CONFIGURE_AGENT = "codeguru-profiler:ConfigureAgent";
	/** [Write] codeguru-profiler:CreateProfilingGroup */
	static readonly CREATE_PROFILING_GROUP =
		"codeguru-profiler:CreateProfilingGroup";
	/** [Write] codeguru-profiler:DeleteProfilingGroup */
	static readonly DELETE_PROFILING_GROUP =
		"codeguru-profiler:DeleteProfilingGroup";
	/** [Read] codeguru-profiler:DescribeProfilingGroup */
	static readonly DESCRIBE_PROFILING_GROUP =
		"codeguru-profiler:DescribeProfilingGroup";
	/** [Read] codeguru-profiler:GetFindingsReportAccountSummary */
	static readonly GET_FINDINGS_REPORT_ACCOUNT_SUMMARY =
		"codeguru-profiler:GetFindingsReportAccountSummary";
	/** [Read] codeguru-profiler:GetNotificationConfiguration */
	static readonly GET_NOTIFICATION_CONFIGURATION =
		"codeguru-profiler:GetNotificationConfiguration";
	/** [Read] codeguru-profiler:GetPolicy */
	static readonly GET_POLICY = "codeguru-profiler:GetPolicy";
	/** [Read] codeguru-profiler:GetProfile */
	static readonly GET_PROFILE = "codeguru-profiler:GetProfile";
	/** [Read] codeguru-profiler:GetRecommendations */
	static readonly GET_RECOMMENDATIONS = "codeguru-profiler:GetRecommendations";
	/** [List] codeguru-profiler:ListFindingsReports */
	static readonly LIST_FINDINGS_REPORTS =
		"codeguru-profiler:ListFindingsReports";
	/** [List] codeguru-profiler:ListProfileTimes */
	static readonly LIST_PROFILE_TIMES = "codeguru-profiler:ListProfileTimes";
	/** [List] codeguru-profiler:ListProfilingGroups */
	static readonly LIST_PROFILING_GROUPS =
		"codeguru-profiler:ListProfilingGroups";
	/** [List] codeguru-profiler:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"codeguru-profiler:ListTagsForResource";
	/** [Write] codeguru-profiler:PostAgentProfile */
	static readonly POST_AGENT_PROFILE = "codeguru-profiler:PostAgentProfile";
	/** [PermissionManagement] codeguru-profiler:PutPermission */
	static readonly PUT_PERMISSION = "codeguru-profiler:PutPermission";
	/** [Write] codeguru-profiler:RemoveNotificationChannel */
	static readonly REMOVE_NOTIFICATION_CHANNEL =
		"codeguru-profiler:RemoveNotificationChannel";
	/** [PermissionManagement] codeguru-profiler:RemovePermission */
	static readonly REMOVE_PERMISSION = "codeguru-profiler:RemovePermission";
	/** [Write] codeguru-profiler:SubmitFeedback */
	static readonly SUBMIT_FEEDBACK = "codeguru-profiler:SubmitFeedback";
	/** [Tagging] codeguru-profiler:TagResource */
	static readonly TAG_RESOURCE = "codeguru-profiler:TagResource";
	/** [Tagging] codeguru-profiler:UntagResource */
	static readonly UNTAG_RESOURCE = "codeguru-profiler:UntagResource";
	/** [Write] codeguru-profiler:UpdateProfilingGroup */
	static readonly UPDATE_PROFILING_GROUP =
		"codeguru-profiler:UpdateProfilingGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodeguruProfilerActions.DESCRIBE_PROFILING_GROUP,
		CodeguruProfilerActions.GET_FINDINGS_REPORT_ACCOUNT_SUMMARY,
		CodeguruProfilerActions.GET_NOTIFICATION_CONFIGURATION,
		CodeguruProfilerActions.GET_POLICY,
		CodeguruProfilerActions.GET_PROFILE,
		CodeguruProfilerActions.GET_RECOMMENDATIONS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodeguruProfilerActions.ADD_NOTIFICATION_CHANNELS,
		CodeguruProfilerActions.CONFIGURE_AGENT,
		CodeguruProfilerActions.CREATE_PROFILING_GROUP,
		CodeguruProfilerActions.DELETE_PROFILING_GROUP,
		CodeguruProfilerActions.POST_AGENT_PROFILE,
		CodeguruProfilerActions.REMOVE_NOTIFICATION_CHANNEL,
		CodeguruProfilerActions.SUBMIT_FEEDBACK,
		CodeguruProfilerActions.UPDATE_PROFILING_GROUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodeguruProfilerActions.BATCH_GET_FRAME_METRIC_DATA,
		CodeguruProfilerActions.LIST_FINDINGS_REPORTS,
		CodeguruProfilerActions.LIST_PROFILE_TIMES,
		CodeguruProfilerActions.LIST_PROFILING_GROUPS,
		CodeguruProfilerActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		CodeguruProfilerActions.PUT_PERMISSION,
		CodeguruProfilerActions.REMOVE_PERMISSION,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodeguruProfilerActions.TAG_RESOURCE,
		CodeguruProfilerActions.UNTAG_RESOURCE,
	];
}

const ProfilingGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codeguru-profiler:(?<region>[^:]*):(?<account>[^:]*):profilingGroup/(?<profilingGroupName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codeguru-profiler resources.
 */
export class CodeguruProfilerResources {
	/**
	 * Builds an ARN for the ProfilingGroup resource.
	 */
	static profilingGroup(props: {
		/** The ProfilingGroupName component of the ARN. */
		readonly profilingGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codeguru-profiler:${props.region ?? "*"}:${props.account ?? "*"}:profilingGroup/${props.profilingGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ProfilingGroup resource.
	 */
	static isValidProfilingGroupArn(arn: string): boolean {
		return ProfilingGroupArnRegex.test(arn);
	}

	/**
	 * Parses a ProfilingGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProfilingGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		profilingGroupName: string;
	} {
		const match = ProfilingGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ProfilingGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			profilingGroupName: match.groups!.profilingGroupName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for codeguru-profiler.
 */
export class CodeguruProfilerOperations {
	/** IAM actions required for the AddNotificationChannels API call. */
	static readonly ADD_NOTIFICATION_CHANNELS: string[] = [
		"codeguru-profiler:AddNotificationChannels",
	];
	/** IAM actions required for the BatchGetFrameMetricData API call. */
	static readonly BATCH_GET_FRAME_METRIC_DATA: string[] = [
		"codeguru-profiler:BatchGetFrameMetricData",
	];
	/** IAM actions required for the ConfigureAgent API call. */
	static readonly CONFIGURE_AGENT: string[] = [
		"codeguru-profiler:ConfigureAgent",
	];
	/** IAM actions required for the CreateProfilingGroup API call. */
	static readonly CREATE_PROFILING_GROUP: string[] = [
		"codeguru-profiler:CreateProfilingGroup",
		"codeguru-profiler:TagResource",
	];
	/** IAM actions required for the DeleteProfilingGroup API call. */
	static readonly DELETE_PROFILING_GROUP: string[] = [
		"codeguru-profiler:DeleteProfilingGroup",
	];
	/** IAM actions required for the DescribeProfilingGroup API call. */
	static readonly DESCRIBE_PROFILING_GROUP: string[] = [
		"codeguru-profiler:DescribeProfilingGroup",
	];
	/** IAM actions required for the GetFindingsReportAccountSummary API call. */
	static readonly GET_FINDINGS_REPORT_ACCOUNT_SUMMARY: string[] = [
		"codeguru-profiler:GetFindingsReportAccountSummary",
	];
	/** IAM actions required for the GetNotificationConfiguration API call. */
	static readonly GET_NOTIFICATION_CONFIGURATION: string[] = [
		"codeguru-profiler:GetNotificationConfiguration",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly GET_POLICY: string[] = ["codeguru-profiler:GetPolicy"];
	/** IAM actions required for the GetProfile API call. */
	static readonly GET_PROFILE: string[] = ["codeguru-profiler:GetProfile"];
	/** IAM actions required for the GetRecommendations API call. */
	static readonly GET_RECOMMENDATIONS: string[] = [
		"codeguru-profiler:GetRecommendations",
	];
	/** IAM actions required for the ListFindingsReports API call. */
	static readonly LIST_FINDINGS_REPORTS: string[] = [
		"codeguru-profiler:ListFindingsReports",
	];
	/** IAM actions required for the ListProfileTimes API call. */
	static readonly LIST_PROFILE_TIMES: string[] = [
		"codeguru-profiler:ListProfileTimes",
	];
	/** IAM actions required for the ListProfilingGroups API call. */
	static readonly LIST_PROFILING_GROUPS: string[] = [
		"codeguru-profiler:ListProfilingGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"codeguru-profiler:ListTagsForResource",
	];
	/** IAM actions required for the PostAgentProfile API call. */
	static readonly POST_AGENT_PROFILE: string[] = [
		"codeguru-profiler:PostAgentProfile",
	];
	/** IAM actions required for the PutPermission API call. */
	static readonly PUT_PERMISSION: string[] = [
		"codeguru-profiler:PutPermission",
	];
	/** IAM actions required for the RemoveNotificationChannel API call. */
	static readonly REMOVE_NOTIFICATION_CHANNEL: string[] = [
		"codeguru-profiler:RemoveNotificationChannel",
	];
	/** IAM actions required for the RemovePermission API call. */
	static readonly REMOVE_PERMISSION: string[] = [
		"codeguru-profiler:RemovePermission",
	];
	/** IAM actions required for the SubmitFeedback API call. */
	static readonly SUBMIT_FEEDBACK: string[] = [
		"codeguru-profiler:SubmitFeedback",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["codeguru-profiler:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"codeguru-profiler:UntagResource",
	];
	/** IAM actions required for the UpdateProfilingGroup API call. */
	static readonly UPDATE_PROFILING_GROUP: string[] = [
		"codeguru-profiler:UpdateProfilingGroup",
	];
}

/**
 * Condition key constants and builders for codeguru-profiler.
 */
export class CodeguruProfilerConditions {
	/** Condition keys applicable to the CreateProfilingGroup action. */
	static readonly CREATE_PROFILING_GROUP_CONDITION_KEYS: string[] = [
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
