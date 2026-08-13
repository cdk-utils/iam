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
	static readonly AddNotificationChannels =
		"codeguru-profiler:AddNotificationChannels";
	/** [List] codeguru-profiler:BatchGetFrameMetricData */
	static readonly BatchGetFrameMetricData =
		"codeguru-profiler:BatchGetFrameMetricData";
	/** [Write] codeguru-profiler:ConfigureAgent */
	static readonly ConfigureAgent = "codeguru-profiler:ConfigureAgent";
	/** [Write] codeguru-profiler:CreateProfilingGroup */
	static readonly CreateProfilingGroup =
		"codeguru-profiler:CreateProfilingGroup";
	/** [Write] codeguru-profiler:DeleteProfilingGroup */
	static readonly DeleteProfilingGroup =
		"codeguru-profiler:DeleteProfilingGroup";
	/** [Read] codeguru-profiler:DescribeProfilingGroup */
	static readonly DescribeProfilingGroup =
		"codeguru-profiler:DescribeProfilingGroup";
	/** [Read] codeguru-profiler:GetFindingsReportAccountSummary */
	static readonly actionGetFindingsReportAccountSummary =
		"codeguru-profiler:GetFindingsReportAccountSummary";
	/** [Read] codeguru-profiler:GetNotificationConfiguration */
	static readonly actionGetNotificationConfiguration =
		"codeguru-profiler:GetNotificationConfiguration";
	/** [Read] codeguru-profiler:GetPolicy */
	static readonly actionGetPolicy = "codeguru-profiler:GetPolicy";
	/** [Read] codeguru-profiler:GetProfile */
	static readonly actionGetProfile = "codeguru-profiler:GetProfile";
	/** [Read] codeguru-profiler:GetRecommendations */
	static readonly actionGetRecommendations =
		"codeguru-profiler:GetRecommendations";
	/** [List] codeguru-profiler:ListFindingsReports */
	static readonly ListFindingsReports = "codeguru-profiler:ListFindingsReports";
	/** [List] codeguru-profiler:ListProfileTimes */
	static readonly ListProfileTimes = "codeguru-profiler:ListProfileTimes";
	/** [List] codeguru-profiler:ListProfilingGroups */
	static readonly ListProfilingGroups = "codeguru-profiler:ListProfilingGroups";
	/** [List] codeguru-profiler:ListTagsForResource */
	static readonly ListTagsForResource = "codeguru-profiler:ListTagsForResource";
	/** [Write] codeguru-profiler:PostAgentProfile */
	static readonly PostAgentProfile = "codeguru-profiler:PostAgentProfile";
	/** [PermissionManagement] codeguru-profiler:PutPermission */
	static readonly PutPermission = "codeguru-profiler:PutPermission";
	/** [Write] codeguru-profiler:RemoveNotificationChannel */
	static readonly RemoveNotificationChannel =
		"codeguru-profiler:RemoveNotificationChannel";
	/** [PermissionManagement] codeguru-profiler:RemovePermission */
	static readonly RemovePermission = "codeguru-profiler:RemovePermission";
	/** [Write] codeguru-profiler:SubmitFeedback */
	static readonly SubmitFeedback = "codeguru-profiler:SubmitFeedback";
	/** [Tagging] codeguru-profiler:TagResource */
	static readonly TagResource = "codeguru-profiler:TagResource";
	/** [Tagging] codeguru-profiler:UntagResource */
	static readonly UntagResource = "codeguru-profiler:UntagResource";
	/** [Write] codeguru-profiler:UpdateProfilingGroup */
	static readonly UpdateProfilingGroup =
		"codeguru-profiler:UpdateProfilingGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodeguruProfilerActions.DescribeProfilingGroup,
		CodeguruProfilerActions.actionGetFindingsReportAccountSummary,
		CodeguruProfilerActions.actionGetNotificationConfiguration,
		CodeguruProfilerActions.actionGetPolicy,
		CodeguruProfilerActions.actionGetProfile,
		CodeguruProfilerActions.actionGetRecommendations,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodeguruProfilerActions.AddNotificationChannels,
		CodeguruProfilerActions.ConfigureAgent,
		CodeguruProfilerActions.CreateProfilingGroup,
		CodeguruProfilerActions.DeleteProfilingGroup,
		CodeguruProfilerActions.PostAgentProfile,
		CodeguruProfilerActions.RemoveNotificationChannel,
		CodeguruProfilerActions.SubmitFeedback,
		CodeguruProfilerActions.UpdateProfilingGroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodeguruProfilerActions.BatchGetFrameMetricData,
		CodeguruProfilerActions.ListFindingsReports,
		CodeguruProfilerActions.ListProfileTimes,
		CodeguruProfilerActions.ListProfilingGroups,
		CodeguruProfilerActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		CodeguruProfilerActions.PutPermission,
		CodeguruProfilerActions.RemovePermission,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodeguruProfilerActions.TagResource,
		CodeguruProfilerActions.UntagResource,
	];
}

/**
 * Properties for building a ProfilingGroup ARN.
 */
export interface CodeguruProfilerProfilingGroupArnProps {
	/** The ProfilingGroupName component of the ARN. */
	readonly profilingGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ProfilingGroup ARN.
 */
export interface CodeguruProfilerProfilingGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProfilingGroupName component. */
	readonly profilingGroupName: string;
}

const ProfilingGroupArnRegex =
	/^arn:(?<partition>[^:]+):codeguru-profiler:(?<region>[^:]*):(?<account>[^:]*):profilingGroup\/(?<profilingGroupName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codeguru-profiler resources.
 */
export class CodeguruProfilerResources {
	/**
	 * Builds an ARN for the ProfilingGroup resource.
	 */
	static profilingGroup(props: CodeguruProfilerProfilingGroupArnProps): string {
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
	static parseProfilingGroupArn(
		arn: string,
	): CodeguruProfilerProfilingGroupArnComponents {
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
	static readonly AddNotificationChannels: string[] = [
		"codeguru-profiler:AddNotificationChannels",
	];
	/** IAM actions required for the BatchGetFrameMetricData API call. */
	static readonly BatchGetFrameMetricData: string[] = [
		"codeguru-profiler:BatchGetFrameMetricData",
	];
	/** IAM actions required for the ConfigureAgent API call. */
	static readonly ConfigureAgent: string[] = [
		"codeguru-profiler:ConfigureAgent",
	];
	/** IAM actions required for the CreateProfilingGroup API call. */
	static readonly CreateProfilingGroup: string[] = [
		"codeguru-profiler:CreateProfilingGroup",
		"codeguru-profiler:TagResource",
	];
	/** IAM actions required for the DeleteProfilingGroup API call. */
	static readonly DeleteProfilingGroup: string[] = [
		"codeguru-profiler:DeleteProfilingGroup",
	];
	/** IAM actions required for the DescribeProfilingGroup API call. */
	static readonly DescribeProfilingGroup: string[] = [
		"codeguru-profiler:DescribeProfilingGroup",
	];
	/** IAM actions required for the GetFindingsReportAccountSummary API call. */
	static readonly opGetFindingsReportAccountSummary: string[] = [
		"codeguru-profiler:GetFindingsReportAccountSummary",
	];
	/** IAM actions required for the GetNotificationConfiguration API call. */
	static readonly opGetNotificationConfiguration: string[] = [
		"codeguru-profiler:GetNotificationConfiguration",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly opGetPolicy: string[] = ["codeguru-profiler:GetPolicy"];
	/** IAM actions required for the GetProfile API call. */
	static readonly opGetProfile: string[] = ["codeguru-profiler:GetProfile"];
	/** IAM actions required for the GetRecommendations API call. */
	static readonly opGetRecommendations: string[] = [
		"codeguru-profiler:GetRecommendations",
	];
	/** IAM actions required for the ListFindingsReports API call. */
	static readonly ListFindingsReports: string[] = [
		"codeguru-profiler:ListFindingsReports",
	];
	/** IAM actions required for the ListProfileTimes API call. */
	static readonly ListProfileTimes: string[] = [
		"codeguru-profiler:ListProfileTimes",
	];
	/** IAM actions required for the ListProfilingGroups API call. */
	static readonly ListProfilingGroups: string[] = [
		"codeguru-profiler:ListProfilingGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"codeguru-profiler:ListTagsForResource",
	];
	/** IAM actions required for the PostAgentProfile API call. */
	static readonly PostAgentProfile: string[] = [
		"codeguru-profiler:PostAgentProfile",
	];
	/** IAM actions required for the PutPermission API call. */
	static readonly PutPermission: string[] = ["codeguru-profiler:PutPermission"];
	/** IAM actions required for the RemoveNotificationChannel API call. */
	static readonly RemoveNotificationChannel: string[] = [
		"codeguru-profiler:RemoveNotificationChannel",
	];
	/** IAM actions required for the RemovePermission API call. */
	static readonly RemovePermission: string[] = [
		"codeguru-profiler:RemovePermission",
	];
	/** IAM actions required for the SubmitFeedback API call. */
	static readonly SubmitFeedback: string[] = [
		"codeguru-profiler:SubmitFeedback",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["codeguru-profiler:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["codeguru-profiler:UntagResource"];
	/** IAM actions required for the UpdateProfilingGroup API call. */
	static readonly UpdateProfilingGroup: string[] = [
		"codeguru-profiler:UpdateProfilingGroup",
	];
}

/**
 * Condition key constants and builders for codeguru-profiler.
 */
export class CodeguruProfilerConditions {
	/** Condition keys applicable to the CreateProfilingGroup action. */
	static readonly CreateProfilingGroupConditionKeys: string[] = [
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
