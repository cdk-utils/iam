// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/lookoutmetrics.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the lookoutmetrics service.
 */
export class LookoutMetricsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "lookoutmetrics";

	/** [Write] lookoutmetrics:ActivateAnomalyDetector */
	static readonly ActivateAnomalyDetector =
		"lookoutmetrics:ActivateAnomalyDetector";
	/** [Write] lookoutmetrics:BackTestAnomalyDetector */
	static readonly BackTestAnomalyDetector =
		"lookoutmetrics:BackTestAnomalyDetector";
	/** [Write] lookoutmetrics:CreateAlert */
	static readonly CreateAlert = "lookoutmetrics:CreateAlert";
	/** [Write] lookoutmetrics:CreateAnomalyDetector */
	static readonly CreateAnomalyDetector =
		"lookoutmetrics:CreateAnomalyDetector";
	/** [Write] lookoutmetrics:CreateMetricSet */
	static readonly CreateMetricSet = "lookoutmetrics:CreateMetricSet";
	/** [Write] lookoutmetrics:DeactivateAnomalyDetector */
	static readonly DeactivateAnomalyDetector =
		"lookoutmetrics:DeactivateAnomalyDetector";
	/** [Write] lookoutmetrics:DeleteAlert */
	static readonly DeleteAlert = "lookoutmetrics:DeleteAlert";
	/** [Write] lookoutmetrics:DeleteAnomalyDetector */
	static readonly DeleteAnomalyDetector =
		"lookoutmetrics:DeleteAnomalyDetector";
	/** [Read] lookoutmetrics:DescribeAlert */
	static readonly DescribeAlert = "lookoutmetrics:DescribeAlert";
	/** [Read] lookoutmetrics:DescribeAnomalyDetectionExecutions */
	static readonly DescribeAnomalyDetectionExecutions =
		"lookoutmetrics:DescribeAnomalyDetectionExecutions";
	/** [Read] lookoutmetrics:DescribeAnomalyDetector */
	static readonly DescribeAnomalyDetector =
		"lookoutmetrics:DescribeAnomalyDetector";
	/** [Read] lookoutmetrics:DescribeMetricSet */
	static readonly DescribeMetricSet = "lookoutmetrics:DescribeMetricSet";
	/** [Write] lookoutmetrics:DetectMetricSetConfig */
	static readonly DetectMetricSetConfig =
		"lookoutmetrics:DetectMetricSetConfig";
	/** [Read] lookoutmetrics:GetAnomalyGroup */
	static readonly actionGetAnomalyGroup = "lookoutmetrics:GetAnomalyGroup";
	/** [Read] lookoutmetrics:GetDataQualityMetrics */
	static readonly actionGetDataQualityMetrics =
		"lookoutmetrics:GetDataQualityMetrics";
	/** [Read] lookoutmetrics:GetFeedback */
	static readonly actionGetFeedback = "lookoutmetrics:GetFeedback";
	/** [Read] lookoutmetrics:GetSampleData */
	static readonly actionGetSampleData = "lookoutmetrics:GetSampleData";
	/** [List] lookoutmetrics:ListAlerts */
	static readonly ListAlerts = "lookoutmetrics:ListAlerts";
	/** [List] lookoutmetrics:ListAnomalyDetectors */
	static readonly ListAnomalyDetectors = "lookoutmetrics:ListAnomalyDetectors";
	/** [List] lookoutmetrics:ListAnomalyGroupRelatedMetrics */
	static readonly ListAnomalyGroupRelatedMetrics =
		"lookoutmetrics:ListAnomalyGroupRelatedMetrics";
	/** [List] lookoutmetrics:ListAnomalyGroupSummaries */
	static readonly ListAnomalyGroupSummaries =
		"lookoutmetrics:ListAnomalyGroupSummaries";
	/** [List] lookoutmetrics:ListAnomalyGroupTimeSeries */
	static readonly ListAnomalyGroupTimeSeries =
		"lookoutmetrics:ListAnomalyGroupTimeSeries";
	/** [List] lookoutmetrics:ListMetricSets */
	static readonly ListMetricSets = "lookoutmetrics:ListMetricSets";
	/** [Read] lookoutmetrics:ListTagsForResource */
	static readonly ListTagsForResource = "lookoutmetrics:ListTagsForResource";
	/** [Write] lookoutmetrics:PutFeedback */
	static readonly PutFeedback = "lookoutmetrics:PutFeedback";
	/** [Tagging] lookoutmetrics:TagResource */
	static readonly TagResource = "lookoutmetrics:TagResource";
	/** [Tagging] lookoutmetrics:UntagResource */
	static readonly UntagResource = "lookoutmetrics:UntagResource";
	/** [Write] lookoutmetrics:UpdateAlert */
	static readonly UpdateAlert = "lookoutmetrics:UpdateAlert";
	/** [Write] lookoutmetrics:UpdateAnomalyDetector */
	static readonly UpdateAnomalyDetector =
		"lookoutmetrics:UpdateAnomalyDetector";
	/** [Write] lookoutmetrics:UpdateMetricSet */
	static readonly UpdateMetricSet = "lookoutmetrics:UpdateMetricSet";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		LookoutMetricsActions.DescribeAlert,
		LookoutMetricsActions.DescribeAnomalyDetectionExecutions,
		LookoutMetricsActions.DescribeAnomalyDetector,
		LookoutMetricsActions.DescribeMetricSet,
		LookoutMetricsActions.actionGetAnomalyGroup,
		LookoutMetricsActions.actionGetDataQualityMetrics,
		LookoutMetricsActions.actionGetFeedback,
		LookoutMetricsActions.actionGetSampleData,
		LookoutMetricsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		LookoutMetricsActions.ActivateAnomalyDetector,
		LookoutMetricsActions.BackTestAnomalyDetector,
		LookoutMetricsActions.CreateAlert,
		LookoutMetricsActions.CreateAnomalyDetector,
		LookoutMetricsActions.CreateMetricSet,
		LookoutMetricsActions.DeactivateAnomalyDetector,
		LookoutMetricsActions.DeleteAlert,
		LookoutMetricsActions.DeleteAnomalyDetector,
		LookoutMetricsActions.DetectMetricSetConfig,
		LookoutMetricsActions.PutFeedback,
		LookoutMetricsActions.UpdateAlert,
		LookoutMetricsActions.UpdateAnomalyDetector,
		LookoutMetricsActions.UpdateMetricSet,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		LookoutMetricsActions.ListAlerts,
		LookoutMetricsActions.ListAnomalyDetectors,
		LookoutMetricsActions.ListAnomalyGroupRelatedMetrics,
		LookoutMetricsActions.ListAnomalyGroupSummaries,
		LookoutMetricsActions.ListAnomalyGroupTimeSeries,
		LookoutMetricsActions.ListMetricSets,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		LookoutMetricsActions.TagResource,
		LookoutMetricsActions.UntagResource,
	];
}

/**
 * Properties for building a Alert ARN.
 */
export interface LookoutMetricsAlertArnProps {
	/** The AlertName component of the ARN. */
	readonly alertName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Alert ARN.
 */
export interface LookoutMetricsAlertArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AlertName component. */
	readonly alertName: string;
}

/**
 * Properties for building a AnomalyDetector ARN.
 */
export interface LookoutMetricsAnomalyDetectorArnProps {
	/** The AnomalyDetectorName component of the ARN. */
	readonly anomalyDetectorName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AnomalyDetector ARN.
 */
export interface LookoutMetricsAnomalyDetectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AnomalyDetectorName component. */
	readonly anomalyDetectorName: string;
}

/**
 * Properties for building a MetricSet ARN.
 */
export interface LookoutMetricsMetricSetArnProps {
	/** The AnomalyDetectorName component of the ARN. */
	readonly anomalyDetectorName: string;
	/** The MetricSetName component of the ARN. */
	readonly metricSetName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a MetricSet ARN.
 */
export interface LookoutMetricsMetricSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AnomalyDetectorName component. */
	readonly anomalyDetectorName: string;
	/** The MetricSetName component. */
	readonly metricSetName: string;
}

const AlertArnRegex =
	/^arn:(?<partition>[^:]+):lookoutmetrics:(?<region>[^:]*):(?<account>[^:]*):Alert:(?<alertName>[^:/?]+)$/;
const AnomalyDetectorArnRegex =
	/^arn:(?<partition>[^:]+):lookoutmetrics:(?<region>[^:]*):(?<account>[^:]*):AnomalyDetector:(?<anomalyDetectorName>[^:/?]+)$/;
const MetricSetArnRegex =
	/^arn:(?<partition>[^:]+):lookoutmetrics:(?<region>[^:]*):(?<account>[^:]*):MetricSet\/(?<anomalyDetectorName>[^:/?]+)\/(?<metricSetName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for lookoutmetrics resources.
 */
export class LookoutMetricsResources {
	/**
	 * Builds an ARN for the Alert resource.
	 */
	static alert(props: LookoutMetricsAlertArnProps): string {
		return `arn:${props.partition ?? "aws"}:lookoutmetrics:${props.region ?? "*"}:${props.account ?? "*"}:Alert:${props.alertName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Alert resource.
	 */
	static isValidAlertArn(arn: string): boolean {
		return AlertArnRegex.test(arn);
	}

	/**
	 * Parses a Alert ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAlertArn(arn: string): LookoutMetricsAlertArnComponents {
		const match = AlertArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Alert ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			alertName: match.groups!.alertName,
		};
	}

	/**
	 * Builds an ARN for the AnomalyDetector resource.
	 */
	static anomalyDetector(props: LookoutMetricsAnomalyDetectorArnProps): string {
		return `arn:${props.partition ?? "aws"}:lookoutmetrics:${props.region ?? "*"}:${props.account ?? "*"}:AnomalyDetector:${props.anomalyDetectorName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AnomalyDetector resource.
	 */
	static isValidAnomalyDetectorArn(arn: string): boolean {
		return AnomalyDetectorArnRegex.test(arn);
	}

	/**
	 * Parses a AnomalyDetector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAnomalyDetectorArn(
		arn: string,
	): LookoutMetricsAnomalyDetectorArnComponents {
		const match = AnomalyDetectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AnomalyDetector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			anomalyDetectorName: match.groups!.anomalyDetectorName,
		};
	}

	/**
	 * Builds an ARN for the MetricSet resource.
	 */
	static metricSet(props: LookoutMetricsMetricSetArnProps): string {
		return `arn:${props.partition ?? "aws"}:lookoutmetrics:${props.region ?? "*"}:${props.account ?? "*"}:MetricSet/${props.anomalyDetectorName}/${props.metricSetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the MetricSet resource.
	 */
	static isValidMetricSetArn(arn: string): boolean {
		return MetricSetArnRegex.test(arn);
	}

	/**
	 * Parses a MetricSet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMetricSetArn(arn: string): LookoutMetricsMetricSetArnComponents {
		const match = MetricSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid MetricSet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			anomalyDetectorName: match.groups!.anomalyDetectorName,
			metricSetName: match.groups!.metricSetName,
		};
	}
}

/**
 * Condition key constants and builders for lookoutmetrics.
 */
export class LookoutMetricsConditions {
	/** Condition keys applicable to the CreateAlert action. */
	static readonly CreateAlertConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAnomalyDetector action. */
	static readonly CreateAnomalyDetectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMetricSet action. */
	static readonly CreateMetricSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
