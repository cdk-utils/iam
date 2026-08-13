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
	static readonly CreatePerformanceAnalysisReport =
		"pi:CreatePerformanceAnalysisReport";
	/** [Write] pi:DeletePerformanceAnalysisReport */
	static readonly DeletePerformanceAnalysisReport =
		"pi:DeletePerformanceAnalysisReport";
	/** [Read] pi:DescribeDimensionKeys */
	static readonly DescribeDimensionKeys = "pi:DescribeDimensionKeys";
	/** [Read] pi:GetDimensionKeyDetails */
	static readonly actionGetDimensionKeyDetails = "pi:GetDimensionKeyDetails";
	/** [Read] pi:GetPerformanceAnalysisReport */
	static readonly actionGetPerformanceAnalysisReport =
		"pi:GetPerformanceAnalysisReport";
	/** [Read] pi:GetResourceMetadata */
	static readonly actionGetResourceMetadata = "pi:GetResourceMetadata";
	/** [Read] pi:GetResourceMetrics */
	static readonly actionGetResourceMetrics = "pi:GetResourceMetrics";
	/** [Read] pi:ListAvailableResourceDimensions */
	static readonly ListAvailableResourceDimensions =
		"pi:ListAvailableResourceDimensions";
	/** [Read] pi:ListAvailableResourceMetrics */
	static readonly ListAvailableResourceMetrics =
		"pi:ListAvailableResourceMetrics";
	/** [List] pi:ListPerformanceAnalysisReportRecommendations */
	static readonly ListPerformanceAnalysisReportRecommendations =
		"pi:ListPerformanceAnalysisReportRecommendations";
	/** [List] pi:ListPerformanceAnalysisReports */
	static readonly ListPerformanceAnalysisReports =
		"pi:ListPerformanceAnalysisReports";
	/** [List] pi:ListTagsForResource */
	static readonly ListTagsForResource = "pi:ListTagsForResource";
	/** [Tagging] pi:TagResource */
	static readonly TagResource = "pi:TagResource";
	/** [Tagging] pi:UntagResource */
	static readonly UntagResource = "pi:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PiActions.DescribeDimensionKeys,
		PiActions.actionGetDimensionKeyDetails,
		PiActions.actionGetPerformanceAnalysisReport,
		PiActions.actionGetResourceMetadata,
		PiActions.actionGetResourceMetrics,
		PiActions.ListAvailableResourceDimensions,
		PiActions.ListAvailableResourceMetrics,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PiActions.CreatePerformanceAnalysisReport,
		PiActions.DeletePerformanceAnalysisReport,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		PiActions.ListPerformanceAnalysisReportRecommendations,
		PiActions.ListPerformanceAnalysisReports,
		PiActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		PiActions.TagResource,
		PiActions.UntagResource,
	];
}

/**
 * Properties for building a metric-resource ARN.
 */
export interface PiMetricResourceArnProps {
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
}

/**
 * Parsed components of a metric-resource ARN.
 */
export interface PiMetricResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceType component. */
	readonly serviceType: string;
	/** The Identifier component. */
	readonly identifier: string;
}

/**
 * Properties for building a perf-reports-resource ARN.
 */
export interface PiPerfReportsResourceArnProps {
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
}

/**
 * Parsed components of a perf-reports-resource ARN.
 */
export interface PiPerfReportsResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceType component. */
	readonly serviceType: string;
	/** The Identifier component. */
	readonly identifier: string;
	/** The ReportId component. */
	readonly reportId: string;
}

const MetricResourceArnRegex =
	/^arn:(?<partition>[^:]+):pi:(?<region>[^:]*):(?<account>[^:]*):metrics\/(?<serviceType>[^:/?]+)\/(?<identifier>[^:/?]+)$/;
const PerfReportsResourceArnRegex =
	/^arn:(?<partition>[^:]+):pi:(?<region>[^:]*):(?<account>[^:]*):perf-reports\/(?<serviceType>[^:/?]+)\/(?<identifier>[^:/?]+)\/(?<reportId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for pi resources.
 */
export class PiResources {
	/**
	 * Builds an ARN for the metric-resource resource.
	 */
	static metricResource(props: PiMetricResourceArnProps): string {
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
	static parseMetricResourceArn(arn: string): PiMetricResourceArnComponents {
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
	static perfReportsResource(props: PiPerfReportsResourceArnProps): string {
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
	static parsePerfReportsResourceArn(
		arn: string,
	): PiPerfReportsResourceArnComponents {
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
	static readonly CreatePerformanceAnalysisReport: string[] = [
		"pi:CreatePerformanceAnalysisReport",
		"pi:TagResource",
	];
	/** IAM actions required for the DeletePerformanceAnalysisReport API call. */
	static readonly DeletePerformanceAnalysisReport: string[] = [
		"pi:DeletePerformanceAnalysisReport",
	];
	/** IAM actions required for the DescribeDimensionKeys API call. */
	static readonly DescribeDimensionKeys: string[] = [
		"pi:DescribeDimensionKeys",
	];
	/** IAM actions required for the GetDimensionKeyDetails API call. */
	static readonly opGetDimensionKeyDetails: string[] = [
		"pi:GetDimensionKeyDetails",
	];
	/** IAM actions required for the GetPerformanceAnalysisReport API call. */
	static readonly opGetPerformanceAnalysisReport: string[] = [
		"pi:GetPerformanceAnalysisReport",
	];
	/** IAM actions required for the GetResourceMetadata API call. */
	static readonly opGetResourceMetadata: string[] = ["pi:GetResourceMetadata"];
	/** IAM actions required for the GetResourceMetrics API call. */
	static readonly opGetResourceMetrics: string[] = ["pi:GetResourceMetrics"];
	/** IAM actions required for the ListAvailableResourceDimensions API call. */
	static readonly ListAvailableResourceDimensions: string[] = [
		"pi:DescribeDimensionKeys",
		"pi:GetDimensionKeyDetails",
		"pi:GetResourceMetrics",
		"pi:ListAvailableResourceDimensions",
	];
	/** IAM actions required for the ListAvailableResourceMetrics API call. */
	static readonly ListAvailableResourceMetrics: string[] = [
		"pi:ListAvailableResourceMetrics",
	];
	/** IAM actions required for the ListPerformanceAnalysisReportRecommendations API call. */
	static readonly ListPerformanceAnalysisReportRecommendations: string[] = [
		"pi:ListPerformanceAnalysisReportRecommendations",
	];
	/** IAM actions required for the ListPerformanceAnalysisReports API call. */
	static readonly ListPerformanceAnalysisReports: string[] = [
		"pi:ListPerformanceAnalysisReports",
		"pi:ListTagsForResource",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["pi:ListTagsForResource"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["pi:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["pi:UntagResource"];
}

/**
 * Condition key constants and builders for pi.
 */
export class PiConditions {
	/** Condition keys applicable to the CreatePerformanceAnalysisReport action. */
	static readonly CreatePerformanceAnalysisReportConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeDimensionKeys action. */
	static readonly DescribeDimensionKeysConditionKeys: string[] = [
		"pi:Dimensions",
	];
	/** Condition keys applicable to the GetDimensionKeyDetails action. */
	static readonly actionGetDimensionKeyDetailsConditionKeys: string[] = [
		"pi:Dimensions",
	];
	/** Condition keys applicable to the GetResourceMetrics action. */
	static readonly actionGetResourceMetricsConditionKeys: string[] = [
		"pi:Dimensions",
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
