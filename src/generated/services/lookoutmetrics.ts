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
	static readonly ACTIVATE_ANOMALY_DETECTOR =
		"lookoutmetrics:ActivateAnomalyDetector";
	/** [Write] lookoutmetrics:BackTestAnomalyDetector */
	static readonly BACK_TEST_ANOMALY_DETECTOR =
		"lookoutmetrics:BackTestAnomalyDetector";
	/** [Write] lookoutmetrics:CreateAlert */
	static readonly CREATE_ALERT = "lookoutmetrics:CreateAlert";
	/** [Write] lookoutmetrics:CreateAnomalyDetector */
	static readonly CREATE_ANOMALY_DETECTOR =
		"lookoutmetrics:CreateAnomalyDetector";
	/** [Write] lookoutmetrics:CreateMetricSet */
	static readonly CREATE_METRIC_SET = "lookoutmetrics:CreateMetricSet";
	/** [Write] lookoutmetrics:DeactivateAnomalyDetector */
	static readonly DEACTIVATE_ANOMALY_DETECTOR =
		"lookoutmetrics:DeactivateAnomalyDetector";
	/** [Write] lookoutmetrics:DeleteAlert */
	static readonly DELETE_ALERT = "lookoutmetrics:DeleteAlert";
	/** [Write] lookoutmetrics:DeleteAnomalyDetector */
	static readonly DELETE_ANOMALY_DETECTOR =
		"lookoutmetrics:DeleteAnomalyDetector";
	/** [Read] lookoutmetrics:DescribeAlert */
	static readonly DESCRIBE_ALERT = "lookoutmetrics:DescribeAlert";
	/** [Read] lookoutmetrics:DescribeAnomalyDetectionExecutions */
	static readonly DESCRIBE_ANOMALY_DETECTION_EXECUTIONS =
		"lookoutmetrics:DescribeAnomalyDetectionExecutions";
	/** [Read] lookoutmetrics:DescribeAnomalyDetector */
	static readonly DESCRIBE_ANOMALY_DETECTOR =
		"lookoutmetrics:DescribeAnomalyDetector";
	/** [Read] lookoutmetrics:DescribeMetricSet */
	static readonly DESCRIBE_METRIC_SET = "lookoutmetrics:DescribeMetricSet";
	/** [Write] lookoutmetrics:DetectMetricSetConfig */
	static readonly DETECT_METRIC_SET_CONFIG =
		"lookoutmetrics:DetectMetricSetConfig";
	/** [Read] lookoutmetrics:GetAnomalyGroup */
	static readonly GET_ANOMALY_GROUP = "lookoutmetrics:GetAnomalyGroup";
	/** [Read] lookoutmetrics:GetDataQualityMetrics */
	static readonly GET_DATA_QUALITY_METRICS =
		"lookoutmetrics:GetDataQualityMetrics";
	/** [Read] lookoutmetrics:GetFeedback */
	static readonly GET_FEEDBACK = "lookoutmetrics:GetFeedback";
	/** [Read] lookoutmetrics:GetSampleData */
	static readonly GET_SAMPLE_DATA = "lookoutmetrics:GetSampleData";
	/** [List] lookoutmetrics:ListAlerts */
	static readonly LIST_ALERTS = "lookoutmetrics:ListAlerts";
	/** [List] lookoutmetrics:ListAnomalyDetectors */
	static readonly LIST_ANOMALY_DETECTORS =
		"lookoutmetrics:ListAnomalyDetectors";
	/** [List] lookoutmetrics:ListAnomalyGroupRelatedMetrics */
	static readonly LIST_ANOMALY_GROUP_RELATED_METRICS =
		"lookoutmetrics:ListAnomalyGroupRelatedMetrics";
	/** [List] lookoutmetrics:ListAnomalyGroupSummaries */
	static readonly LIST_ANOMALY_GROUP_SUMMARIES =
		"lookoutmetrics:ListAnomalyGroupSummaries";
	/** [List] lookoutmetrics:ListAnomalyGroupTimeSeries */
	static readonly LIST_ANOMALY_GROUP_TIME_SERIES =
		"lookoutmetrics:ListAnomalyGroupTimeSeries";
	/** [List] lookoutmetrics:ListMetricSets */
	static readonly LIST_METRIC_SETS = "lookoutmetrics:ListMetricSets";
	/** [Read] lookoutmetrics:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "lookoutmetrics:ListTagsForResource";
	/** [Write] lookoutmetrics:PutFeedback */
	static readonly PUT_FEEDBACK = "lookoutmetrics:PutFeedback";
	/** [Tagging] lookoutmetrics:TagResource */
	static readonly TAG_RESOURCE = "lookoutmetrics:TagResource";
	/** [Tagging] lookoutmetrics:UntagResource */
	static readonly UNTAG_RESOURCE = "lookoutmetrics:UntagResource";
	/** [Write] lookoutmetrics:UpdateAlert */
	static readonly UPDATE_ALERT = "lookoutmetrics:UpdateAlert";
	/** [Write] lookoutmetrics:UpdateAnomalyDetector */
	static readonly UPDATE_ANOMALY_DETECTOR =
		"lookoutmetrics:UpdateAnomalyDetector";
	/** [Write] lookoutmetrics:UpdateMetricSet */
	static readonly UPDATE_METRIC_SET = "lookoutmetrics:UpdateMetricSet";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		LookoutMetricsActions.DESCRIBE_ALERT,
		LookoutMetricsActions.DESCRIBE_ANOMALY_DETECTION_EXECUTIONS,
		LookoutMetricsActions.DESCRIBE_ANOMALY_DETECTOR,
		LookoutMetricsActions.DESCRIBE_METRIC_SET,
		LookoutMetricsActions.GET_ANOMALY_GROUP,
		LookoutMetricsActions.GET_DATA_QUALITY_METRICS,
		LookoutMetricsActions.GET_FEEDBACK,
		LookoutMetricsActions.GET_SAMPLE_DATA,
		LookoutMetricsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		LookoutMetricsActions.ACTIVATE_ANOMALY_DETECTOR,
		LookoutMetricsActions.BACK_TEST_ANOMALY_DETECTOR,
		LookoutMetricsActions.CREATE_ALERT,
		LookoutMetricsActions.CREATE_ANOMALY_DETECTOR,
		LookoutMetricsActions.CREATE_METRIC_SET,
		LookoutMetricsActions.DEACTIVATE_ANOMALY_DETECTOR,
		LookoutMetricsActions.DELETE_ALERT,
		LookoutMetricsActions.DELETE_ANOMALY_DETECTOR,
		LookoutMetricsActions.DETECT_METRIC_SET_CONFIG,
		LookoutMetricsActions.PUT_FEEDBACK,
		LookoutMetricsActions.UPDATE_ALERT,
		LookoutMetricsActions.UPDATE_ANOMALY_DETECTOR,
		LookoutMetricsActions.UPDATE_METRIC_SET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		LookoutMetricsActions.LIST_ALERTS,
		LookoutMetricsActions.LIST_ANOMALY_DETECTORS,
		LookoutMetricsActions.LIST_ANOMALY_GROUP_RELATED_METRICS,
		LookoutMetricsActions.LIST_ANOMALY_GROUP_SUMMARIES,
		LookoutMetricsActions.LIST_ANOMALY_GROUP_TIME_SERIES,
		LookoutMetricsActions.LIST_METRIC_SETS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		LookoutMetricsActions.TAG_RESOURCE,
		LookoutMetricsActions.UNTAG_RESOURCE,
	];
}

const AlertArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lookoutmetrics:(?<region>[^:]*):(?<account>[^:]*):Alert:(?<alertName>[^:/?]+)$",
);
const AnomalyDetectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lookoutmetrics:(?<region>[^:]*):(?<account>[^:]*):AnomalyDetector:(?<anomalyDetectorName>[^:/?]+)$",
);
const MetricSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):lookoutmetrics:(?<region>[^:]*):(?<account>[^:]*):MetricSet/(?<anomalyDetectorName>[^:/?]+)/(?<metricSetName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for lookoutmetrics resources.
 */
export class LookoutMetricsResources {
	/**
	 * Builds an ARN for the Alert resource.
	 */
	static alert(props: {
		/** The AlertName component of the ARN. */
		readonly alertName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAlertArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		alertName: string;
	} {
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
	static anomalyDetector(props: {
		/** The AnomalyDetectorName component of the ARN. */
		readonly anomalyDetectorName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAnomalyDetectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		anomalyDetectorName: string;
	} {
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
	static metricSet(props: {
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
	}): string {
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
	static parseMetricSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		anomalyDetectorName: string;
		metricSetName: string;
	} {
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
	static readonly CREATE_ALERT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAnomalyDetector action. */
	static readonly CREATE_ANOMALY_DETECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMetricSet action. */
	static readonly CREATE_METRIC_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
