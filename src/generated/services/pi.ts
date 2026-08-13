// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/pi.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the pi service.
 */
export class PiActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "pi";

	/** [Write] pi:CreatePerformanceAnalysisReport */
	static readonly CREATE_PERFORMANCE_ANALYSIS_REPORT =
		"pi:CreatePerformanceAnalysisReport";
	/** [Write] pi:DeletePerformanceAnalysisReport */
	static readonly DELETE_PERFORMANCE_ANALYSIS_REPORT =
		"pi:DeletePerformanceAnalysisReport";
	/** [Read] pi:DescribeDimensionKeys */
	static readonly DESCRIBE_DIMENSION_KEYS = "pi:DescribeDimensionKeys";
	/** [Read] pi:GetDimensionKeyDetails */
	static readonly GET_DIMENSION_KEY_DETAILS = "pi:GetDimensionKeyDetails";
	/** [Read] pi:GetPerformanceAnalysisReport */
	static readonly GET_PERFORMANCE_ANALYSIS_REPORT =
		"pi:GetPerformanceAnalysisReport";
	/** [Read] pi:GetResourceMetadata */
	static readonly GET_RESOURCE_METADATA = "pi:GetResourceMetadata";
	/** [Read] pi:GetResourceMetrics */
	static readonly GET_RESOURCE_METRICS = "pi:GetResourceMetrics";
	/** [Read] pi:ListAvailableResourceDimensions */
	static readonly LIST_AVAILABLE_RESOURCE_DIMENSIONS =
		"pi:ListAvailableResourceDimensions";
	/** [Read] pi:ListAvailableResourceMetrics */
	static readonly LIST_AVAILABLE_RESOURCE_METRICS =
		"pi:ListAvailableResourceMetrics";
	/** [List] pi:ListPerformanceAnalysisReportRecommendations */
	static readonly LIST_PERFORMANCE_ANALYSIS_REPORT_RECOMMENDATIONS =
		"pi:ListPerformanceAnalysisReportRecommendations";
	/** [List] pi:ListPerformanceAnalysisReports */
	static readonly LIST_PERFORMANCE_ANALYSIS_REPORTS =
		"pi:ListPerformanceAnalysisReports";
	/** [List] pi:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "pi:ListTagsForResource";
	/** [Tagging] pi:TagResource */
	static readonly TAG_RESOURCE = "pi:TagResource";
	/** [Tagging] pi:UntagResource */
	static readonly UNTAG_RESOURCE = "pi:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PiActions.DESCRIBE_DIMENSION_KEYS,
		PiActions.GET_DIMENSION_KEY_DETAILS,
		PiActions.GET_PERFORMANCE_ANALYSIS_REPORT,
		PiActions.GET_RESOURCE_METADATA,
		PiActions.GET_RESOURCE_METRICS,
		PiActions.LIST_AVAILABLE_RESOURCE_DIMENSIONS,
		PiActions.LIST_AVAILABLE_RESOURCE_METRICS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PiActions.CREATE_PERFORMANCE_ANALYSIS_REPORT,
		PiActions.DELETE_PERFORMANCE_ANALYSIS_REPORT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		PiActions.LIST_PERFORMANCE_ANALYSIS_REPORT_RECOMMENDATIONS,
		PiActions.LIST_PERFORMANCE_ANALYSIS_REPORTS,
		PiActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		PiActions.TAG_RESOURCE,
		PiActions.UNTAG_RESOURCE,
	];
}

const MetricResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):pi:(?<region>[^:]*):(?<account>[^:]*):metrics/(?<serviceType>[^:/?]+)/(?<identifier>[^:/?]+)$",
);
const PerfReportsResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):pi:(?<region>[^:]*):(?<account>[^:]*):perf-reports/(?<serviceType>[^:/?]+)/(?<identifier>[^:/?]+)/(?<reportId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for pi resources.
 */
export class PiResources {
	/**
	 * Builds an ARN for the metric-resource resource.
	 */
	static metricResource(props: {
		/** The ServiceType component of the ARN. */
		readonly serviceType: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:pi:${props.region ?? "*"}:${props.account ?? "*"}:metrics/${props.serviceType}/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the metric-resource resource.
	 */
	static isValidMetricResourceArn(arn: string): boolean {
		return MetricResourceArnRegex.test(arn);
	}

	/**
	 * Parses a metric-resource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMetricResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceType: string;
		identifier: string;
	} {
		const match = MetricResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid metric-resource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceType: match.groups!.serviceType,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the perf-reports-resource resource.
	 */
	static perfReportsResource(props: {
		/** The ServiceType component of the ARN. */
		readonly serviceType: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** The ReportId component of the ARN. */
		readonly reportId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:pi:${props.region ?? "*"}:${props.account ?? "*"}:perf-reports/${props.serviceType}/${props.identifier}/${props.reportId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the perf-reports-resource resource.
	 */
	static isValidPerfReportsResourceArn(arn: string): boolean {
		return PerfReportsResourceArnRegex.test(arn);
	}

	/**
	 * Parses a perf-reports-resource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePerfReportsResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceType: string;
		identifier: string;
		reportId: string;
	} {
		const match = PerfReportsResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid perf-reports-resource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceType: match.groups!.serviceType,
			identifier: match.groups!.identifier,
			reportId: match.groups!.reportId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for pi.
 */
export class PiOperations {
	/** IAM actions required for the CreatePerformanceAnalysisReport API call. */
	static readonly CREATE_PERFORMANCE_ANALYSIS_REPORT: string[] = [
		"pi:CreatePerformanceAnalysisReport",
		"pi:TagResource",
	];
	/** IAM actions required for the DeletePerformanceAnalysisReport API call. */
	static readonly DELETE_PERFORMANCE_ANALYSIS_REPORT: string[] = [
		"pi:DeletePerformanceAnalysisReport",
	];
	/** IAM actions required for the DescribeDimensionKeys API call. */
	static readonly DESCRIBE_DIMENSION_KEYS: string[] = [
		"pi:DescribeDimensionKeys",
	];
	/** IAM actions required for the GetDimensionKeyDetails API call. */
	static readonly GET_DIMENSION_KEY_DETAILS: string[] = [
		"pi:GetDimensionKeyDetails",
	];
	/** IAM actions required for the GetPerformanceAnalysisReport API call. */
	static readonly GET_PERFORMANCE_ANALYSIS_REPORT: string[] = [
		"pi:GetPerformanceAnalysisReport",
	];
	/** IAM actions required for the GetResourceMetadata API call. */
	static readonly GET_RESOURCE_METADATA: string[] = ["pi:GetResourceMetadata"];
	/** IAM actions required for the GetResourceMetrics API call. */
	static readonly GET_RESOURCE_METRICS: string[] = ["pi:GetResourceMetrics"];
	/** IAM actions required for the ListAvailableResourceDimensions API call. */
	static readonly LIST_AVAILABLE_RESOURCE_DIMENSIONS: string[] = [
		"pi:DescribeDimensionKeys",
		"pi:GetDimensionKeyDetails",
		"pi:GetResourceMetrics",
		"pi:ListAvailableResourceDimensions",
	];
	/** IAM actions required for the ListAvailableResourceMetrics API call. */
	static readonly LIST_AVAILABLE_RESOURCE_METRICS: string[] = [
		"pi:ListAvailableResourceMetrics",
	];
	/** IAM actions required for the ListPerformanceAnalysisReportRecommendations API call. */
	static readonly LIST_PERFORMANCE_ANALYSIS_REPORT_RECOMMENDATIONS: string[] = [
		"pi:ListPerformanceAnalysisReportRecommendations",
	];
	/** IAM actions required for the ListPerformanceAnalysisReports API call. */
	static readonly LIST_PERFORMANCE_ANALYSIS_REPORTS: string[] = [
		"pi:ListPerformanceAnalysisReports",
		"pi:ListTagsForResource",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = ["pi:ListTagsForResource"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["pi:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["pi:UntagResource"];
}

/**
 * Condition key constants and builders for pi.
 */
export class PiConditions {
	/** Condition keys applicable to the CreatePerformanceAnalysisReport action. */
	static readonly CREATE_PERFORMANCE_ANALYSIS_REPORT_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the DescribeDimensionKeys action. */
	static readonly DESCRIBE_DIMENSION_KEYS_CONDITION_KEYS: string[] = [
		"pi:Dimensions",
	];
	/** Condition keys applicable to the GetDimensionKeyDetails action. */
	static readonly GET_DIMENSION_KEY_DETAILS_CONDITION_KEYS: string[] = [
		"pi:Dimensions",
	];
	/** Condition keys applicable to the GetResourceMetrics action. */
	static readonly GET_RESOURCE_METRICS_CONDITION_KEYS: string[] = [
		"pi:Dimensions",
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
	/** Condition key: pi:Dimensions (ArrayOfString) */
	static readonly DIMENSIONS = "pi:Dimensions";

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
	 * Generates a condition block for `pi:Dimensions`.
	 */
	static dimensions(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "pi:Dimensions": values } };
	}
}
