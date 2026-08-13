// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/xray.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the xray service.
 */
export class XrayActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "xray";

	/** [Read] xray:BatchGetTraceSummaryById */
	static readonly BatchGetTraceSummaryById = "xray:BatchGetTraceSummaryById";
	/** [List] xray:BatchGetTraces */
	static readonly BatchGetTraces = "xray:BatchGetTraces";
	/** [Read] xray:CancelTraceRetrieval */
	static readonly CancelTraceRetrieval = "xray:CancelTraceRetrieval";
	/** [Write] xray:CreateGroup */
	static readonly CreateGroup = "xray:CreateGroup";
	/** [Write] xray:CreateSamplingRule */
	static readonly CreateSamplingRule = "xray:CreateSamplingRule";
	/** [Write] xray:DeleteGroup */
	static readonly DeleteGroup = "xray:DeleteGroup";
	/** [Write] xray:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "xray:DeleteResourcePolicy";
	/** [Write] xray:DeleteSamplingRule */
	static readonly DeleteSamplingRule = "xray:DeleteSamplingRule";
	/** [Read] xray:GetDistinctTraceGraphs */
	static readonly actionGetDistinctTraceGraphs = "xray:GetDistinctTraceGraphs";
	/** [Read] xray:GetEncryptionConfig */
	static readonly actionGetEncryptionConfig = "xray:GetEncryptionConfig";
	/** [Read] xray:GetGroup */
	static readonly actionGetGroup = "xray:GetGroup";
	/** [Read] xray:GetGroups */
	static readonly actionGetGroups = "xray:GetGroups";
	/** [Read] xray:GetIndexingRules */
	static readonly actionGetIndexingRules = "xray:GetIndexingRules";
	/** [Read] xray:GetInsight */
	static readonly actionGetInsight = "xray:GetInsight";
	/** [Read] xray:GetInsightEvents */
	static readonly actionGetInsightEvents = "xray:GetInsightEvents";
	/** [Read] xray:GetInsightImpactGraph */
	static readonly actionGetInsightImpactGraph = "xray:GetInsightImpactGraph";
	/** [Read] xray:GetInsightSummaries */
	static readonly actionGetInsightSummaries = "xray:GetInsightSummaries";
	/** [Read] xray:GetRetrievedTracesGraph */
	static readonly actionGetRetrievedTracesGraph =
		"xray:GetRetrievedTracesGraph";
	/** [Read] xray:GetSamplingRules */
	static readonly actionGetSamplingRules = "xray:GetSamplingRules";
	/** [Read] xray:GetSamplingStatisticSummaries */
	static readonly actionGetSamplingStatisticSummaries =
		"xray:GetSamplingStatisticSummaries";
	/** [Read] xray:GetSamplingTargets */
	static readonly actionGetSamplingTargets = "xray:GetSamplingTargets";
	/** [Read] xray:GetServiceGraph */
	static readonly actionGetServiceGraph = "xray:GetServiceGraph";
	/** [Read] xray:GetTimeSeriesServiceStatistics */
	static readonly actionGetTimeSeriesServiceStatistics =
		"xray:GetTimeSeriesServiceStatistics";
	/** [Read] xray:GetTraceGraph */
	static readonly actionGetTraceGraph = "xray:GetTraceGraph";
	/** [Read] xray:GetTraceSegmentDestination */
	static readonly actionGetTraceSegmentDestination =
		"xray:GetTraceSegmentDestination";
	/** [Read] xray:GetTraceSummaries */
	static readonly actionGetTraceSummaries = "xray:GetTraceSummaries";
	/** [Write] xray:Link */
	static readonly Link = "xray:Link";
	/** [List] xray:ListResourcePolicies */
	static readonly ListResourcePolicies = "xray:ListResourcePolicies";
	/** [List] xray:ListRetrievedTraces */
	static readonly ListRetrievedTraces = "xray:ListRetrievedTraces";
	/** [List] xray:ListTagsForResource */
	static readonly ListTagsForResource = "xray:ListTagsForResource";
	/** [PermissionManagement] xray:PutEncryptionConfig */
	static readonly PutEncryptionConfig = "xray:PutEncryptionConfig";
	/** [Write] xray:PutResourcePolicy */
	static readonly PutResourcePolicy = "xray:PutResourcePolicy";
	/** [Write] xray:PutSpans */
	static readonly PutSpans = "xray:PutSpans";
	/** [Write] xray:PutSpansForIndexing */
	static readonly PutSpansForIndexing = "xray:PutSpansForIndexing";
	/** [Write] xray:PutTelemetryRecords */
	static readonly PutTelemetryRecords = "xray:PutTelemetryRecords";
	/** [Write] xray:PutTraceSegments */
	static readonly PutTraceSegments = "xray:PutTraceSegments";
	/** [Read] xray:StartTraceRetrieval */
	static readonly StartTraceRetrieval = "xray:StartTraceRetrieval";
	/** [Tagging] xray:TagResource */
	static readonly TagResource = "xray:TagResource";
	/** [Tagging] xray:UntagResource */
	static readonly UntagResource = "xray:UntagResource";
	/** [Write] xray:UpdateGroup */
	static readonly UpdateGroup = "xray:UpdateGroup";
	/** [Write] xray:UpdateIndexingRule */
	static readonly UpdateIndexingRule = "xray:UpdateIndexingRule";
	/** [Write] xray:UpdateSamplingRule */
	static readonly UpdateSamplingRule = "xray:UpdateSamplingRule";
	/** [Write] xray:UpdateTraceSegmentDestination */
	static readonly UpdateTraceSegmentDestination =
		"xray:UpdateTraceSegmentDestination";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		XrayActions.BatchGetTraceSummaryById,
		XrayActions.CancelTraceRetrieval,
		XrayActions.actionGetDistinctTraceGraphs,
		XrayActions.actionGetEncryptionConfig,
		XrayActions.actionGetGroup,
		XrayActions.actionGetGroups,
		XrayActions.actionGetIndexingRules,
		XrayActions.actionGetInsight,
		XrayActions.actionGetInsightEvents,
		XrayActions.actionGetInsightImpactGraph,
		XrayActions.actionGetInsightSummaries,
		XrayActions.actionGetRetrievedTracesGraph,
		XrayActions.actionGetSamplingRules,
		XrayActions.actionGetSamplingStatisticSummaries,
		XrayActions.actionGetSamplingTargets,
		XrayActions.actionGetServiceGraph,
		XrayActions.actionGetTimeSeriesServiceStatistics,
		XrayActions.actionGetTraceGraph,
		XrayActions.actionGetTraceSegmentDestination,
		XrayActions.actionGetTraceSummaries,
		XrayActions.StartTraceRetrieval,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		XrayActions.CreateGroup,
		XrayActions.CreateSamplingRule,
		XrayActions.DeleteGroup,
		XrayActions.DeleteResourcePolicy,
		XrayActions.DeleteSamplingRule,
		XrayActions.Link,
		XrayActions.PutResourcePolicy,
		XrayActions.PutSpans,
		XrayActions.PutSpansForIndexing,
		XrayActions.PutTelemetryRecords,
		XrayActions.PutTraceSegments,
		XrayActions.UpdateGroup,
		XrayActions.UpdateIndexingRule,
		XrayActions.UpdateSamplingRule,
		XrayActions.UpdateTraceSegmentDestination,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		XrayActions.BatchGetTraces,
		XrayActions.ListResourcePolicies,
		XrayActions.ListRetrievedTraces,
		XrayActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		XrayActions.PutEncryptionConfig,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		XrayActions.TagResource,
		XrayActions.UntagResource,
	];
}

/**
 * Properties for building a group ARN.
 */
export interface XrayGroupArnProps {
	/** The GroupName component of the ARN. */
	readonly groupName: string;
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a group ARN.
 */
export interface XrayGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupName component. */
	readonly groupName: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a sampling-rule ARN.
 */
export interface XraySamplingRuleArnProps {
	/** The SamplingRuleName component of the ARN. */
	readonly samplingRuleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a sampling-rule ARN.
 */
export interface XraySamplingRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SamplingRuleName component. */
	readonly samplingRuleName: string;
}

const GroupArnRegex =
	/^arn:(?<partition>[^:]+):xray:(?<region>[^:]*):(?<account>[^:]*):group\/(?<groupName>[^:/?]+)\/(?<id>[^:/?]+)$/;
const SamplingRuleArnRegex =
	/^arn:(?<partition>[^:]+):xray:(?<region>[^:]*):(?<account>[^:]*):sampling-rule\/(?<samplingRuleName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for xray resources.
 */
export class XrayResources {
	/**
	 * Builds an ARN for the group resource.
	 */
	static group(props: XrayGroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:xray:${props.region ?? "*"}:${props.account ?? "*"}:group/${props.groupName}/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the group resource.
	 */
	static isValidGroupArn(arn: string): boolean {
		return GroupArnRegex.test(arn);
	}

	/**
	 * Parses a group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGroupArn(arn: string): XrayGroupArnComponents {
		const match = GroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupName: match.groups!.groupName,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the sampling-rule resource.
	 */
	static samplingRule(props: XraySamplingRuleArnProps): string {
		return `arn:${props.partition ?? "aws"}:xray:${props.region ?? "*"}:${props.account ?? "*"}:sampling-rule/${props.samplingRuleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sampling-rule resource.
	 */
	static isValidSamplingRuleArn(arn: string): boolean {
		return SamplingRuleArnRegex.test(arn);
	}

	/**
	 * Parses a sampling-rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSamplingRuleArn(arn: string): XraySamplingRuleArnComponents {
		const match = SamplingRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sampling-rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			samplingRuleName: match.groups!.samplingRuleName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for xray.
 */
export class XrayOperations {
	/** IAM actions required for the BatchGetTraces API call. */
	static readonly BatchGetTraces: string[] = ["xray:BatchGetTraces"];
	/** IAM actions required for the CancelTraceRetrieval API call. */
	static readonly CancelTraceRetrieval: string[] = [
		"xray:CancelTraceRetrieval",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CreateGroup: string[] = [
		"xray:CreateGroup",
		"xray:TagResource",
	];
	/** IAM actions required for the CreateSamplingRule API call. */
	static readonly CreateSamplingRule: string[] = [
		"xray:CreateSamplingRule",
		"xray:TagResource",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DeleteGroup: string[] = ["xray:DeleteGroup"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"xray:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteSamplingRule API call. */
	static readonly DeleteSamplingRule: string[] = ["xray:DeleteSamplingRule"];
	/** IAM actions required for the GetEncryptionConfig API call. */
	static readonly opGetEncryptionConfig: string[] = [
		"xray:GetEncryptionConfig",
	];
	/** IAM actions required for the GetGroup API call. */
	static readonly opGetGroup: string[] = ["xray:GetGroup"];
	/** IAM actions required for the GetGroups API call. */
	static readonly opGetGroups: string[] = ["xray:GetGroups"];
	/** IAM actions required for the GetIndexingRules API call. */
	static readonly opGetIndexingRules: string[] = ["xray:GetIndexingRules"];
	/** IAM actions required for the GetInsight API call. */
	static readonly opGetInsight: string[] = ["xray:GetInsight"];
	/** IAM actions required for the GetInsightEvents API call. */
	static readonly opGetInsightEvents: string[] = ["xray:GetInsightEvents"];
	/** IAM actions required for the GetInsightImpactGraph API call. */
	static readonly opGetInsightImpactGraph: string[] = [
		"xray:GetInsightImpactGraph",
	];
	/** IAM actions required for the GetInsightSummaries API call. */
	static readonly opGetInsightSummaries: string[] = [
		"xray:GetInsightSummaries",
	];
	/** IAM actions required for the GetRetrievedTracesGraph API call. */
	static readonly opGetRetrievedTracesGraph: string[] = [
		"xray:GetRetrievedTracesGraph",
	];
	/** IAM actions required for the GetSamplingRules API call. */
	static readonly opGetSamplingRules: string[] = ["xray:GetSamplingRules"];
	/** IAM actions required for the GetSamplingStatisticSummaries API call. */
	static readonly opGetSamplingStatisticSummaries: string[] = [
		"xray:GetSamplingStatisticSummaries",
	];
	/** IAM actions required for the GetSamplingTargets API call. */
	static readonly opGetSamplingTargets: string[] = ["xray:GetSamplingTargets"];
	/** IAM actions required for the GetServiceGraph API call. */
	static readonly opGetServiceGraph: string[] = ["xray:GetServiceGraph"];
	/** IAM actions required for the GetTimeSeriesServiceStatistics API call. */
	static readonly opGetTimeSeriesServiceStatistics: string[] = [
		"xray:GetTimeSeriesServiceStatistics",
	];
	/** IAM actions required for the GetTraceGraph API call. */
	static readonly opGetTraceGraph: string[] = ["xray:GetTraceGraph"];
	/** IAM actions required for the GetTraceSegmentDestination API call. */
	static readonly opGetTraceSegmentDestination: string[] = [
		"xray:GetTraceSegmentDestination",
	];
	/** IAM actions required for the GetTraceSummaries API call. */
	static readonly opGetTraceSummaries: string[] = ["xray:GetTraceSummaries"];
	/** IAM actions required for the ListResourcePolicies API call. */
	static readonly ListResourcePolicies: string[] = [
		"xray:ListResourcePolicies",
	];
	/** IAM actions required for the ListRetrievedTraces API call. */
	static readonly ListRetrievedTraces: string[] = ["xray:ListRetrievedTraces"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["xray:ListTagsForResource"];
	/** IAM actions required for the PutEncryptionConfig API call. */
	static readonly PutEncryptionConfig: string[] = ["xray:PutEncryptionConfig"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["xray:PutResourcePolicy"];
	/** IAM actions required for the PutTelemetryRecords API call. */
	static readonly PutTelemetryRecords: string[] = ["xray:PutTelemetryRecords"];
	/** IAM actions required for the PutTraceSegments API call. */
	static readonly PutTraceSegments: string[] = ["xray:PutTraceSegments"];
	/** IAM actions required for the StartTraceRetrieval API call. */
	static readonly StartTraceRetrieval: string[] = ["xray:StartTraceRetrieval"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["xray:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["xray:UntagResource"];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UpdateGroup: string[] = ["xray:UpdateGroup"];
	/** IAM actions required for the UpdateIndexingRule API call. */
	static readonly UpdateIndexingRule: string[] = ["xray:UpdateIndexingRule"];
	/** IAM actions required for the UpdateSamplingRule API call. */
	static readonly UpdateSamplingRule: string[] = ["xray:UpdateSamplingRule"];
	/** IAM actions required for the UpdateTraceSegmentDestination API call. */
	static readonly UpdateTraceSegmentDestination: string[] = [
		"xray:UpdateTraceSegmentDestination",
	];
}

/**
 * Condition key constants and builders for xray.
 */
export class XrayConditions {
	/** Condition keys applicable to the CreateGroup action. */
	static readonly CreateGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSamplingRule action. */
	static readonly CreateSamplingRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteGroup action. */
	static readonly DeleteGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourcePolicy action. */
	static readonly DeleteResourcePolicyConditionKeys: string[] = [
		"xray:ResourcePolicyName",
	];
	/** Condition keys applicable to the DeleteSamplingRule action. */
	static readonly DeleteSamplingRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetGroup action. */
	static readonly actionGetGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PutResourcePolicyConditionKeys: string[] = [
		"xray:ResourcePolicyName",
	];
	/** Condition keys applicable to the PutSpans action. */
	static readonly PutSpansConditionKeys: string[] = [
		"logs:LogGeneratingResourceArns",
	];
	/** Condition keys applicable to the PutTraceSegments action. */
	static readonly PutTraceSegmentsConditionKeys: string[] = [
		"logs:LogGeneratingResourceArns",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateGroup action. */
	static readonly UpdateGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSamplingRule action. */
	static readonly UpdateSamplingRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateTraceSegmentDestination action. */
	static readonly UpdateTraceSegmentDestinationConditionKeys: string[] = [
		"xray:TraceSegmentDestination",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: logs:LogGeneratingResourceArns (ArrayOfARN) */
	static readonly LOG_GENERATING_RESOURCE_ARNS =
		"logs:LogGeneratingResourceArns";
	/** Condition key: xray:ResourcePolicyName (String) */
	static readonly RESOURCE_POLICY_NAME = "xray:ResourcePolicyName";
	/** Condition key: xray:TraceSegmentDestination (String) */
	static readonly TRACE_SEGMENT_DESTINATION = "xray:TraceSegmentDestination";

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
	 * Generates a condition block for `xray:ResourcePolicyName`.
	 */
	static resourcePolicyName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "xray:ResourcePolicyName": value } };
	}

	/**
	 * Generates a condition block for `xray:TraceSegmentDestination`.
	 */
	static traceSegmentDestination(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "xray:TraceSegmentDestination": value } };
	}
}
