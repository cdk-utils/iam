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
	static readonly BATCH_GET_TRACE_SUMMARY_BY_ID =
		"xray:BatchGetTraceSummaryById";
	/** [List] xray:BatchGetTraces */
	static readonly BATCH_GET_TRACES = "xray:BatchGetTraces";
	/** [Read] xray:CancelTraceRetrieval */
	static readonly CANCEL_TRACE_RETRIEVAL = "xray:CancelTraceRetrieval";
	/** [Write] xray:CreateGroup */
	static readonly CREATE_GROUP = "xray:CreateGroup";
	/** [Write] xray:CreateSamplingRule */
	static readonly CREATE_SAMPLING_RULE = "xray:CreateSamplingRule";
	/** [Write] xray:DeleteGroup */
	static readonly DELETE_GROUP = "xray:DeleteGroup";
	/** [Write] xray:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "xray:DeleteResourcePolicy";
	/** [Write] xray:DeleteSamplingRule */
	static readonly DELETE_SAMPLING_RULE = "xray:DeleteSamplingRule";
	/** [Read] xray:GetDistinctTraceGraphs */
	static readonly GET_DISTINCT_TRACE_GRAPHS = "xray:GetDistinctTraceGraphs";
	/** [Read] xray:GetEncryptionConfig */
	static readonly GET_ENCRYPTION_CONFIG = "xray:GetEncryptionConfig";
	/** [Read] xray:GetGroup */
	static readonly GET_GROUP = "xray:GetGroup";
	/** [Read] xray:GetGroups */
	static readonly GET_GROUPS = "xray:GetGroups";
	/** [Read] xray:GetIndexingRules */
	static readonly GET_INDEXING_RULES = "xray:GetIndexingRules";
	/** [Read] xray:GetInsight */
	static readonly GET_INSIGHT = "xray:GetInsight";
	/** [Read] xray:GetInsightEvents */
	static readonly GET_INSIGHT_EVENTS = "xray:GetInsightEvents";
	/** [Read] xray:GetInsightImpactGraph */
	static readonly GET_INSIGHT_IMPACT_GRAPH = "xray:GetInsightImpactGraph";
	/** [Read] xray:GetInsightSummaries */
	static readonly GET_INSIGHT_SUMMARIES = "xray:GetInsightSummaries";
	/** [Read] xray:GetRetrievedTracesGraph */
	static readonly GET_RETRIEVED_TRACES_GRAPH = "xray:GetRetrievedTracesGraph";
	/** [Read] xray:GetSamplingRules */
	static readonly GET_SAMPLING_RULES = "xray:GetSamplingRules";
	/** [Read] xray:GetSamplingStatisticSummaries */
	static readonly GET_SAMPLING_STATISTIC_SUMMARIES =
		"xray:GetSamplingStatisticSummaries";
	/** [Read] xray:GetSamplingTargets */
	static readonly GET_SAMPLING_TARGETS = "xray:GetSamplingTargets";
	/** [Read] xray:GetServiceGraph */
	static readonly GET_SERVICE_GRAPH = "xray:GetServiceGraph";
	/** [Read] xray:GetTimeSeriesServiceStatistics */
	static readonly GET_TIME_SERIES_SERVICE_STATISTICS =
		"xray:GetTimeSeriesServiceStatistics";
	/** [Read] xray:GetTraceGraph */
	static readonly GET_TRACE_GRAPH = "xray:GetTraceGraph";
	/** [Read] xray:GetTraceSegmentDestination */
	static readonly GET_TRACE_SEGMENT_DESTINATION =
		"xray:GetTraceSegmentDestination";
	/** [Read] xray:GetTraceSummaries */
	static readonly GET_TRACE_SUMMARIES = "xray:GetTraceSummaries";
	/** [Write] xray:Link */
	static readonly LINK = "xray:Link";
	/** [List] xray:ListResourcePolicies */
	static readonly LIST_RESOURCE_POLICIES = "xray:ListResourcePolicies";
	/** [List] xray:ListRetrievedTraces */
	static readonly LIST_RETRIEVED_TRACES = "xray:ListRetrievedTraces";
	/** [List] xray:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "xray:ListTagsForResource";
	/** [PermissionManagement] xray:PutEncryptionConfig */
	static readonly PUT_ENCRYPTION_CONFIG = "xray:PutEncryptionConfig";
	/** [Write] xray:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "xray:PutResourcePolicy";
	/** [Write] xray:PutSpans */
	static readonly PUT_SPANS = "xray:PutSpans";
	/** [Write] xray:PutSpansForIndexing */
	static readonly PUT_SPANS_FOR_INDEXING = "xray:PutSpansForIndexing";
	/** [Write] xray:PutTelemetryRecords */
	static readonly PUT_TELEMETRY_RECORDS = "xray:PutTelemetryRecords";
	/** [Write] xray:PutTraceSegments */
	static readonly PUT_TRACE_SEGMENTS = "xray:PutTraceSegments";
	/** [Read] xray:StartTraceRetrieval */
	static readonly START_TRACE_RETRIEVAL = "xray:StartTraceRetrieval";
	/** [Tagging] xray:TagResource */
	static readonly TAG_RESOURCE = "xray:TagResource";
	/** [Tagging] xray:UntagResource */
	static readonly UNTAG_RESOURCE = "xray:UntagResource";
	/** [Write] xray:UpdateGroup */
	static readonly UPDATE_GROUP = "xray:UpdateGroup";
	/** [Write] xray:UpdateIndexingRule */
	static readonly UPDATE_INDEXING_RULE = "xray:UpdateIndexingRule";
	/** [Write] xray:UpdateSamplingRule */
	static readonly UPDATE_SAMPLING_RULE = "xray:UpdateSamplingRule";
	/** [Write] xray:UpdateTraceSegmentDestination */
	static readonly UPDATE_TRACE_SEGMENT_DESTINATION =
		"xray:UpdateTraceSegmentDestination";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		XrayActions.BATCH_GET_TRACE_SUMMARY_BY_ID,
		XrayActions.CANCEL_TRACE_RETRIEVAL,
		XrayActions.GET_DISTINCT_TRACE_GRAPHS,
		XrayActions.GET_ENCRYPTION_CONFIG,
		XrayActions.GET_GROUP,
		XrayActions.GET_GROUPS,
		XrayActions.GET_INDEXING_RULES,
		XrayActions.GET_INSIGHT,
		XrayActions.GET_INSIGHT_EVENTS,
		XrayActions.GET_INSIGHT_IMPACT_GRAPH,
		XrayActions.GET_INSIGHT_SUMMARIES,
		XrayActions.GET_RETRIEVED_TRACES_GRAPH,
		XrayActions.GET_SAMPLING_RULES,
		XrayActions.GET_SAMPLING_STATISTIC_SUMMARIES,
		XrayActions.GET_SAMPLING_TARGETS,
		XrayActions.GET_SERVICE_GRAPH,
		XrayActions.GET_TIME_SERIES_SERVICE_STATISTICS,
		XrayActions.GET_TRACE_GRAPH,
		XrayActions.GET_TRACE_SEGMENT_DESTINATION,
		XrayActions.GET_TRACE_SUMMARIES,
		XrayActions.START_TRACE_RETRIEVAL,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		XrayActions.CREATE_GROUP,
		XrayActions.CREATE_SAMPLING_RULE,
		XrayActions.DELETE_GROUP,
		XrayActions.DELETE_RESOURCE_POLICY,
		XrayActions.DELETE_SAMPLING_RULE,
		XrayActions.LINK,
		XrayActions.PUT_RESOURCE_POLICY,
		XrayActions.PUT_SPANS,
		XrayActions.PUT_SPANS_FOR_INDEXING,
		XrayActions.PUT_TELEMETRY_RECORDS,
		XrayActions.PUT_TRACE_SEGMENTS,
		XrayActions.UPDATE_GROUP,
		XrayActions.UPDATE_INDEXING_RULE,
		XrayActions.UPDATE_SAMPLING_RULE,
		XrayActions.UPDATE_TRACE_SEGMENT_DESTINATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		XrayActions.BATCH_GET_TRACES,
		XrayActions.LIST_RESOURCE_POLICIES,
		XrayActions.LIST_RETRIEVED_TRACES,
		XrayActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		XrayActions.PUT_ENCRYPTION_CONFIG,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		XrayActions.TAG_RESOURCE,
		XrayActions.UNTAG_RESOURCE,
	];
}

const GroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):xray:(?<region>[^:]*):(?<account>[^:]*):group/(?<groupName>[^:/?]+)/(?<id>[^:/?]+)$",
);
const SamplingRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):xray:(?<region>[^:]*):(?<account>[^:]*):sampling-rule/(?<samplingRuleName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for xray resources.
 */
export class XrayResources {
	/**
	 * Builds an ARN for the group resource.
	 */
	static group(props: {
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
	}): string {
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
	static parseGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupName: string;
		id: string;
	} {
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
	static samplingRule(props: {
		/** The SamplingRuleName component of the ARN. */
		readonly samplingRuleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSamplingRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		samplingRuleName: string;
	} {
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
	static readonly BATCH_GET_TRACES: string[] = ["xray:BatchGetTraces"];
	/** IAM actions required for the CancelTraceRetrieval API call. */
	static readonly CANCEL_TRACE_RETRIEVAL: string[] = [
		"xray:CancelTraceRetrieval",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CREATE_GROUP: string[] = [
		"xray:CreateGroup",
		"xray:TagResource",
	];
	/** IAM actions required for the CreateSamplingRule API call. */
	static readonly CREATE_SAMPLING_RULE: string[] = [
		"xray:CreateSamplingRule",
		"xray:TagResource",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DELETE_GROUP: string[] = ["xray:DeleteGroup"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"xray:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteSamplingRule API call. */
	static readonly DELETE_SAMPLING_RULE: string[] = ["xray:DeleteSamplingRule"];
	/** IAM actions required for the GetEncryptionConfig API call. */
	static readonly GET_ENCRYPTION_CONFIG: string[] = [
		"xray:GetEncryptionConfig",
	];
	/** IAM actions required for the GetGroup API call. */
	static readonly GET_GROUP: string[] = ["xray:GetGroup"];
	/** IAM actions required for the GetGroups API call. */
	static readonly GET_GROUPS: string[] = ["xray:GetGroups"];
	/** IAM actions required for the GetIndexingRules API call. */
	static readonly GET_INDEXING_RULES: string[] = ["xray:GetIndexingRules"];
	/** IAM actions required for the GetInsight API call. */
	static readonly GET_INSIGHT: string[] = ["xray:GetInsight"];
	/** IAM actions required for the GetInsightEvents API call. */
	static readonly GET_INSIGHT_EVENTS: string[] = ["xray:GetInsightEvents"];
	/** IAM actions required for the GetInsightImpactGraph API call. */
	static readonly GET_INSIGHT_IMPACT_GRAPH: string[] = [
		"xray:GetInsightImpactGraph",
	];
	/** IAM actions required for the GetInsightSummaries API call. */
	static readonly GET_INSIGHT_SUMMARIES: string[] = [
		"xray:GetInsightSummaries",
	];
	/** IAM actions required for the GetRetrievedTracesGraph API call. */
	static readonly GET_RETRIEVED_TRACES_GRAPH: string[] = [
		"xray:GetRetrievedTracesGraph",
	];
	/** IAM actions required for the GetSamplingRules API call. */
	static readonly GET_SAMPLING_RULES: string[] = ["xray:GetSamplingRules"];
	/** IAM actions required for the GetSamplingStatisticSummaries API call. */
	static readonly GET_SAMPLING_STATISTIC_SUMMARIES: string[] = [
		"xray:GetSamplingStatisticSummaries",
	];
	/** IAM actions required for the GetSamplingTargets API call. */
	static readonly GET_SAMPLING_TARGETS: string[] = ["xray:GetSamplingTargets"];
	/** IAM actions required for the GetServiceGraph API call. */
	static readonly GET_SERVICE_GRAPH: string[] = ["xray:GetServiceGraph"];
	/** IAM actions required for the GetTimeSeriesServiceStatistics API call. */
	static readonly GET_TIME_SERIES_SERVICE_STATISTICS: string[] = [
		"xray:GetTimeSeriesServiceStatistics",
	];
	/** IAM actions required for the GetTraceGraph API call. */
	static readonly GET_TRACE_GRAPH: string[] = ["xray:GetTraceGraph"];
	/** IAM actions required for the GetTraceSegmentDestination API call. */
	static readonly GET_TRACE_SEGMENT_DESTINATION: string[] = [
		"xray:GetTraceSegmentDestination",
	];
	/** IAM actions required for the GetTraceSummaries API call. */
	static readonly GET_TRACE_SUMMARIES: string[] = ["xray:GetTraceSummaries"];
	/** IAM actions required for the ListResourcePolicies API call. */
	static readonly LIST_RESOURCE_POLICIES: string[] = [
		"xray:ListResourcePolicies",
	];
	/** IAM actions required for the ListRetrievedTraces API call. */
	static readonly LIST_RETRIEVED_TRACES: string[] = [
		"xray:ListRetrievedTraces",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"xray:ListTagsForResource",
	];
	/** IAM actions required for the PutEncryptionConfig API call. */
	static readonly PUT_ENCRYPTION_CONFIG: string[] = [
		"xray:PutEncryptionConfig",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = ["xray:PutResourcePolicy"];
	/** IAM actions required for the PutTelemetryRecords API call. */
	static readonly PUT_TELEMETRY_RECORDS: string[] = [
		"xray:PutTelemetryRecords",
	];
	/** IAM actions required for the PutTraceSegments API call. */
	static readonly PUT_TRACE_SEGMENTS: string[] = ["xray:PutTraceSegments"];
	/** IAM actions required for the StartTraceRetrieval API call. */
	static readonly START_TRACE_RETRIEVAL: string[] = [
		"xray:StartTraceRetrieval",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["xray:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["xray:UntagResource"];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UPDATE_GROUP: string[] = ["xray:UpdateGroup"];
	/** IAM actions required for the UpdateIndexingRule API call. */
	static readonly UPDATE_INDEXING_RULE: string[] = ["xray:UpdateIndexingRule"];
	/** IAM actions required for the UpdateSamplingRule API call. */
	static readonly UPDATE_SAMPLING_RULE: string[] = ["xray:UpdateSamplingRule"];
	/** IAM actions required for the UpdateTraceSegmentDestination API call. */
	static readonly UPDATE_TRACE_SEGMENT_DESTINATION: string[] = [
		"xray:UpdateTraceSegmentDestination",
	];
}

/**
 * Condition key constants and builders for xray.
 */
export class XrayConditions {
	/** Condition keys applicable to the CreateGroup action. */
	static readonly CREATE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSamplingRule action. */
	static readonly CREATE_SAMPLING_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteGroup action. */
	static readonly DELETE_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourcePolicy action. */
	static readonly DELETE_RESOURCE_POLICY_CONDITION_KEYS: string[] = [
		"xray:ResourcePolicyName",
	];
	/** Condition keys applicable to the DeleteSamplingRule action. */
	static readonly DELETE_SAMPLING_RULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetGroup action. */
	static readonly GET_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PUT_RESOURCE_POLICY_CONDITION_KEYS: string[] = [
		"xray:ResourcePolicyName",
	];
	/** Condition keys applicable to the PutSpans action. */
	static readonly PUT_SPANS_CONDITION_KEYS: string[] = [
		"logs:LogGeneratingResourceArns",
	];
	/** Condition keys applicable to the PutTraceSegments action. */
	static readonly PUT_TRACE_SEGMENTS_CONDITION_KEYS: string[] = [
		"logs:LogGeneratingResourceArns",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateGroup action. */
	static readonly UPDATE_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSamplingRule action. */
	static readonly UPDATE_SAMPLING_RULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateTraceSegmentDestination action. */
	static readonly UPDATE_TRACE_SEGMENT_DESTINATION_CONDITION_KEYS: string[] = [
		"xray:TraceSegmentDestination",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
