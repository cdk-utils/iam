// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cloudwatch.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cloudwatch service.
 */
export class CloudWatchActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cloudwatch";

	/** [Read] cloudwatch:BatchGetServiceLevelIndicatorReport */
	static readonly BATCH_GET_SERVICE_LEVEL_INDICATOR_REPORT =
		"cloudwatch:BatchGetServiceLevelIndicatorReport";
	/** [Read] cloudwatch:BatchGetServiceLevelObjectiveBudgetReport */
	static readonly BATCH_GET_SERVICE_LEVEL_OBJECTIVE_BUDGET_REPORT =
		"cloudwatch:BatchGetServiceLevelObjectiveBudgetReport";
	/** [Write] cloudwatch:CallWithBearerToken */
	static readonly CALL_WITH_BEARER_TOKEN = "cloudwatch:CallWithBearerToken";
	/** [Write] cloudwatch:CreateServiceLevelObjective */
	static readonly CREATE_SERVICE_LEVEL_OBJECTIVE =
		"cloudwatch:CreateServiceLevelObjective";
	/** [Write] cloudwatch:DeleteAlarmMuteRule */
	static readonly DELETE_ALARM_MUTE_RULE = "cloudwatch:DeleteAlarmMuteRule";
	/** [Write] cloudwatch:DeleteAlarms */
	static readonly DELETE_ALARMS = "cloudwatch:DeleteAlarms";
	/** [Write] cloudwatch:DeleteAnomalyDetector */
	static readonly DELETE_ANOMALY_DETECTOR = "cloudwatch:DeleteAnomalyDetector";
	/** [Write] cloudwatch:DeleteDashboards */
	static readonly DELETE_DASHBOARDS = "cloudwatch:DeleteDashboards";
	/** [Write] cloudwatch:DeleteInsightRules */
	static readonly DELETE_INSIGHT_RULES = "cloudwatch:DeleteInsightRules";
	/** [Write] cloudwatch:DeleteMetricStream */
	static readonly DELETE_METRIC_STREAM = "cloudwatch:DeleteMetricStream";
	/** [Write] cloudwatch:DeletePipelineRule */
	static readonly DELETE_PIPELINE_RULE = "cloudwatch:DeletePipelineRule";
	/** [Write] cloudwatch:DeleteServiceLevelObjective */
	static readonly DELETE_SERVICE_LEVEL_OBJECTIVE =
		"cloudwatch:DeleteServiceLevelObjective";
	/** [Read] cloudwatch:DescribeAlarmHistory */
	static readonly DESCRIBE_ALARM_HISTORY = "cloudwatch:DescribeAlarmHistory";
	/** [Read] cloudwatch:DescribeAlarms */
	static readonly DESCRIBE_ALARMS = "cloudwatch:DescribeAlarms";
	/** [Read] cloudwatch:DescribeAlarmsForMetric */
	static readonly DESCRIBE_ALARMS_FOR_METRIC =
		"cloudwatch:DescribeAlarmsForMetric";
	/** [Read] cloudwatch:DescribeAnomalyDetectors */
	static readonly DESCRIBE_ANOMALY_DETECTORS =
		"cloudwatch:DescribeAnomalyDetectors";
	/** [Read] cloudwatch:DescribeInsightRules */
	static readonly DESCRIBE_INSIGHT_RULES = "cloudwatch:DescribeInsightRules";
	/** [Write] cloudwatch:DisableAlarmActions */
	static readonly DISABLE_ALARM_ACTIONS = "cloudwatch:DisableAlarmActions";
	/** [Write] cloudwatch:DisableInsightRules */
	static readonly DISABLE_INSIGHT_RULES = "cloudwatch:DisableInsightRules";
	/** [Write] cloudwatch:EnableAlarmActions */
	static readonly ENABLE_ALARM_ACTIONS = "cloudwatch:EnableAlarmActions";
	/** [Write] cloudwatch:EnableInsightRules */
	static readonly ENABLE_INSIGHT_RULES = "cloudwatch:EnableInsightRules";
	/** [Write] cloudwatch:EnableTopologyDiscovery */
	static readonly ENABLE_TOPOLOGY_DISCOVERY =
		"cloudwatch:EnableTopologyDiscovery";
	/** [Read] cloudwatch:GenerateQuery */
	static readonly GENERATE_QUERY = "cloudwatch:GenerateQuery";
	/** [Read] cloudwatch:GenerateQueryResultsSummary */
	static readonly GENERATE_QUERY_RESULTS_SUMMARY =
		"cloudwatch:GenerateQueryResultsSummary";
	/** [Read] cloudwatch:GetAlarmMuteRule */
	static readonly GET_ALARM_MUTE_RULE = "cloudwatch:GetAlarmMuteRule";
	/** [Read] cloudwatch:GetDashboard */
	static readonly GET_DASHBOARD = "cloudwatch:GetDashboard";
	/** [Read] cloudwatch:GetDataset */
	static readonly GET_DATASET = "cloudwatch:GetDataset";
	/** [Read] cloudwatch:GetInsightRuleReport */
	static readonly GET_INSIGHT_RULE_REPORT = "cloudwatch:GetInsightRuleReport";
	/** [Read] cloudwatch:GetMetricData */
	static readonly GET_METRIC_DATA = "cloudwatch:GetMetricData";
	/** [Read] cloudwatch:GetMetricStatistics */
	static readonly GET_METRIC_STATISTICS = "cloudwatch:GetMetricStatistics";
	/** [Read] cloudwatch:GetMetricStream */
	static readonly GET_METRIC_STREAM = "cloudwatch:GetMetricStream";
	/** [Read] cloudwatch:GetMetricWidgetImage */
	static readonly GET_METRIC_WIDGET_IMAGE = "cloudwatch:GetMetricWidgetImage";
	/** [Read] cloudwatch:GetOTelEnrichment */
	static readonly GET_O_TEL_ENRICHMENT = "cloudwatch:GetOTelEnrichment";
	/** [Read] cloudwatch:GetService */
	static readonly GET_SERVICE = "cloudwatch:GetService";
	/** [Read] cloudwatch:GetServiceData */
	static readonly GET_SERVICE_DATA = "cloudwatch:GetServiceData";
	/** [Read] cloudwatch:GetServiceLevelObjective */
	static readonly GET_SERVICE_LEVEL_OBJECTIVE =
		"cloudwatch:GetServiceLevelObjective";
	/** [Read] cloudwatch:GetTopologyDiscoveryStatus */
	static readonly GET_TOPOLOGY_DISCOVERY_STATUS =
		"cloudwatch:GetTopologyDiscoveryStatus";
	/** [Read] cloudwatch:GetTopologyMap */
	static readonly GET_TOPOLOGY_MAP = "cloudwatch:GetTopologyMap";
	/** [Write] cloudwatch:Link */
	static readonly LINK = "cloudwatch:Link";
	/** [List] cloudwatch:ListAlarmMuteRules */
	static readonly LIST_ALARM_MUTE_RULES = "cloudwatch:ListAlarmMuteRules";
	/** [List] cloudwatch:ListDashboards */
	static readonly LIST_DASHBOARDS = "cloudwatch:ListDashboards";
	/** [List] cloudwatch:ListEntitiesForMetric */
	static readonly LIST_ENTITIES_FOR_METRIC = "cloudwatch:ListEntitiesForMetric";
	/** [Read] cloudwatch:ListManagedInsightRules */
	static readonly LIST_MANAGED_INSIGHT_RULES =
		"cloudwatch:ListManagedInsightRules";
	/** [List] cloudwatch:ListMetricStreams */
	static readonly LIST_METRIC_STREAMS = "cloudwatch:ListMetricStreams";
	/** [List] cloudwatch:ListMetrics */
	static readonly LIST_METRICS = "cloudwatch:ListMetrics";
	/** [List] cloudwatch:ListServiceLevelObjectives */
	static readonly LIST_SERVICE_LEVEL_OBJECTIVES =
		"cloudwatch:ListServiceLevelObjectives";
	/** [List] cloudwatch:ListServices */
	static readonly LIST_SERVICES = "cloudwatch:ListServices";
	/** [List] cloudwatch:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "cloudwatch:ListTagsForResource";
	/** [Write] cloudwatch:PutAlarmMuteRule */
	static readonly PUT_ALARM_MUTE_RULE = "cloudwatch:PutAlarmMuteRule";
	/** [Write] cloudwatch:PutAnomalyDetector */
	static readonly PUT_ANOMALY_DETECTOR = "cloudwatch:PutAnomalyDetector";
	/** [Write] cloudwatch:PutCompositeAlarm */
	static readonly PUT_COMPOSITE_ALARM = "cloudwatch:PutCompositeAlarm";
	/** [Write] cloudwatch:PutDashboard */
	static readonly PUT_DASHBOARD = "cloudwatch:PutDashboard";
	/** [Write] cloudwatch:PutInsightRule */
	static readonly PUT_INSIGHT_RULE = "cloudwatch:PutInsightRule";
	/** [Write] cloudwatch:PutLogAlarm */
	static readonly PUT_LOG_ALARM = "cloudwatch:PutLogAlarm";
	/** [Write] cloudwatch:PutManagedInsightRules */
	static readonly PUT_MANAGED_INSIGHT_RULES =
		"cloudwatch:PutManagedInsightRules";
	/** [Write] cloudwatch:PutMetricAlarm */
	static readonly PUT_METRIC_ALARM = "cloudwatch:PutMetricAlarm";
	/** [Write] cloudwatch:PutMetricData */
	static readonly PUT_METRIC_DATA = "cloudwatch:PutMetricData";
	/** [Write] cloudwatch:PutMetricStream */
	static readonly PUT_METRIC_STREAM = "cloudwatch:PutMetricStream";
	/** [Write] cloudwatch:PutPipelineRule */
	static readonly PUT_PIPELINE_RULE = "cloudwatch:PutPipelineRule";
	/** [Write] cloudwatch:SetAlarmState */
	static readonly SET_ALARM_STATE = "cloudwatch:SetAlarmState";
	/** [Write] cloudwatch:StartMetricStreams */
	static readonly START_METRIC_STREAMS = "cloudwatch:StartMetricStreams";
	/** [Write] cloudwatch:StartOTelEnrichment */
	static readonly START_O_TEL_ENRICHMENT = "cloudwatch:StartOTelEnrichment";
	/** [Write] cloudwatch:StopMetricStreams */
	static readonly STOP_METRIC_STREAMS = "cloudwatch:StopMetricStreams";
	/** [Write] cloudwatch:StopOTelEnrichment */
	static readonly STOP_O_TEL_ENRICHMENT = "cloudwatch:StopOTelEnrichment";
	/** [Tagging] cloudwatch:TagResource */
	static readonly TAG_RESOURCE = "cloudwatch:TagResource";
	/** [Tagging] cloudwatch:UntagResource */
	static readonly UNTAG_RESOURCE = "cloudwatch:UntagResource";
	/** [Write] cloudwatch:UpdateServiceLevelObjective */
	static readonly UPDATE_SERVICE_LEVEL_OBJECTIVE =
		"cloudwatch:UpdateServiceLevelObjective";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CloudWatchActions.BATCH_GET_SERVICE_LEVEL_INDICATOR_REPORT,
		CloudWatchActions.BATCH_GET_SERVICE_LEVEL_OBJECTIVE_BUDGET_REPORT,
		CloudWatchActions.DESCRIBE_ALARM_HISTORY,
		CloudWatchActions.DESCRIBE_ALARMS,
		CloudWatchActions.DESCRIBE_ALARMS_FOR_METRIC,
		CloudWatchActions.DESCRIBE_ANOMALY_DETECTORS,
		CloudWatchActions.DESCRIBE_INSIGHT_RULES,
		CloudWatchActions.GENERATE_QUERY,
		CloudWatchActions.GENERATE_QUERY_RESULTS_SUMMARY,
		CloudWatchActions.GET_ALARM_MUTE_RULE,
		CloudWatchActions.GET_DASHBOARD,
		CloudWatchActions.GET_DATASET,
		CloudWatchActions.GET_INSIGHT_RULE_REPORT,
		CloudWatchActions.GET_METRIC_DATA,
		CloudWatchActions.GET_METRIC_STATISTICS,
		CloudWatchActions.GET_METRIC_STREAM,
		CloudWatchActions.GET_METRIC_WIDGET_IMAGE,
		CloudWatchActions.GET_O_TEL_ENRICHMENT,
		CloudWatchActions.GET_SERVICE,
		CloudWatchActions.GET_SERVICE_DATA,
		CloudWatchActions.GET_SERVICE_LEVEL_OBJECTIVE,
		CloudWatchActions.GET_TOPOLOGY_DISCOVERY_STATUS,
		CloudWatchActions.GET_TOPOLOGY_MAP,
		CloudWatchActions.LIST_MANAGED_INSIGHT_RULES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CloudWatchActions.CALL_WITH_BEARER_TOKEN,
		CloudWatchActions.CREATE_SERVICE_LEVEL_OBJECTIVE,
		CloudWatchActions.DELETE_ALARM_MUTE_RULE,
		CloudWatchActions.DELETE_ALARMS,
		CloudWatchActions.DELETE_ANOMALY_DETECTOR,
		CloudWatchActions.DELETE_DASHBOARDS,
		CloudWatchActions.DELETE_INSIGHT_RULES,
		CloudWatchActions.DELETE_METRIC_STREAM,
		CloudWatchActions.DELETE_PIPELINE_RULE,
		CloudWatchActions.DELETE_SERVICE_LEVEL_OBJECTIVE,
		CloudWatchActions.DISABLE_ALARM_ACTIONS,
		CloudWatchActions.DISABLE_INSIGHT_RULES,
		CloudWatchActions.ENABLE_ALARM_ACTIONS,
		CloudWatchActions.ENABLE_INSIGHT_RULES,
		CloudWatchActions.ENABLE_TOPOLOGY_DISCOVERY,
		CloudWatchActions.LINK,
		CloudWatchActions.PUT_ALARM_MUTE_RULE,
		CloudWatchActions.PUT_ANOMALY_DETECTOR,
		CloudWatchActions.PUT_COMPOSITE_ALARM,
		CloudWatchActions.PUT_DASHBOARD,
		CloudWatchActions.PUT_INSIGHT_RULE,
		CloudWatchActions.PUT_LOG_ALARM,
		CloudWatchActions.PUT_MANAGED_INSIGHT_RULES,
		CloudWatchActions.PUT_METRIC_ALARM,
		CloudWatchActions.PUT_METRIC_DATA,
		CloudWatchActions.PUT_METRIC_STREAM,
		CloudWatchActions.PUT_PIPELINE_RULE,
		CloudWatchActions.SET_ALARM_STATE,
		CloudWatchActions.START_METRIC_STREAMS,
		CloudWatchActions.START_O_TEL_ENRICHMENT,
		CloudWatchActions.STOP_METRIC_STREAMS,
		CloudWatchActions.STOP_O_TEL_ENRICHMENT,
		CloudWatchActions.UPDATE_SERVICE_LEVEL_OBJECTIVE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CloudWatchActions.LIST_ALARM_MUTE_RULES,
		CloudWatchActions.LIST_DASHBOARDS,
		CloudWatchActions.LIST_ENTITIES_FOR_METRIC,
		CloudWatchActions.LIST_METRIC_STREAMS,
		CloudWatchActions.LIST_METRICS,
		CloudWatchActions.LIST_SERVICE_LEVEL_OBJECTIVES,
		CloudWatchActions.LIST_SERVICES,
		CloudWatchActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CloudWatchActions.TAG_RESOURCE,
		CloudWatchActions.UNTAG_RESOURCE,
	];
}

const AlarmArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):alarm:(?<alarmName>[^:/?]+)$",
);
const AlarmMuteRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):alarm-mute-rule:(?<alarmMuteRuleName>[^:/?]+)$",
);
const DashboardArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudwatch::(?<account>[^:]*):dashboard/(?<dashboardName>[^:/?]+)$",
);
const DatasetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):dataset/(?<datasetId>[^:/?]+)$",
);
const InsightRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):insight-rule/(?<insightRuleName>[^:/?]+)$",
);
const MetricStreamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):metric-stream/(?<metricStreamName>[^:/?]+)$",
);
const ServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):service/(?<serviceName>[^:/?]+)-(?<uniqueAttributesHex>[^:/?]+)$",
);
const SloArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):slo/(?<sloName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cloudwatch resources.
 */
export class CloudWatchResources {
	/**
	 * Builds an ARN for the alarm resource.
	 */
	static alarm(props: {
		/** The AlarmName component of the ARN. */
		readonly alarmName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:alarm:${props.alarmName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the alarm resource.
	 */
	static isValidAlarmArn(arn: string): boolean {
		return AlarmArnRegex.test(arn);
	}

	/**
	 * Parses a alarm ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAlarmArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		alarmName: string;
	} {
		const match = AlarmArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid alarm ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			alarmName: match.groups!.alarmName,
		};
	}

	/**
	 * Builds an ARN for the alarm-mute-rule resource.
	 */
	static alarmMuteRule(props: {
		/** The AlarmMuteRuleName component of the ARN. */
		readonly alarmMuteRuleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:alarm-mute-rule:${props.alarmMuteRuleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the alarm-mute-rule resource.
	 */
	static isValidAlarmMuteRuleArn(arn: string): boolean {
		return AlarmMuteRuleArnRegex.test(arn);
	}

	/**
	 * Parses a alarm-mute-rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAlarmMuteRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		alarmMuteRuleName: string;
	} {
		const match = AlarmMuteRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid alarm-mute-rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			alarmMuteRuleName: match.groups!.alarmMuteRuleName,
		};
	}

	/**
	 * Builds an ARN for the dashboard resource.
	 */
	static dashboard(props: {
		/** The DashboardName component of the ARN. */
		readonly dashboardName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch::${props.account ?? "*"}:dashboard/${props.dashboardName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dashboard resource.
	 */
	static isValidDashboardArn(arn: string): boolean {
		return DashboardArnRegex.test(arn);
	}

	/**
	 * Parses a dashboard ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDashboardArn(arn: string): {
		partition: string;
		account: string;
		dashboardName: string;
	} {
		const match = DashboardArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dashboard ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			dashboardName: match.groups!.dashboardName,
		};
	}

	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: {
		/** The DatasetId component of the ARN. */
		readonly datasetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.datasetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataset resource.
	 */
	static isValidDatasetArn(arn: string): boolean {
		return DatasetArnRegex.test(arn);
	}

	/**
	 * Parses a dataset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		datasetId: string;
	} {
		const match = DatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			datasetId: match.groups!.datasetId,
		};
	}

	/**
	 * Builds an ARN for the insight-rule resource.
	 */
	static insightRule(props: {
		/** The InsightRuleName component of the ARN. */
		readonly insightRuleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:insight-rule/${props.insightRuleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the insight-rule resource.
	 */
	static isValidInsightRuleArn(arn: string): boolean {
		return InsightRuleArnRegex.test(arn);
	}

	/**
	 * Parses a insight-rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInsightRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		insightRuleName: string;
	} {
		const match = InsightRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid insight-rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			insightRuleName: match.groups!.insightRuleName,
		};
	}

	/**
	 * Builds an ARN for the metric-stream resource.
	 */
	static metricStream(props: {
		/** The MetricStreamName component of the ARN. */
		readonly metricStreamName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:metric-stream/${props.metricStreamName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the metric-stream resource.
	 */
	static isValidMetricStreamArn(arn: string): boolean {
		return MetricStreamArnRegex.test(arn);
	}

	/**
	 * Parses a metric-stream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMetricStreamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		metricStreamName: string;
	} {
		const match = MetricStreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid metric-stream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			metricStreamName: match.groups!.metricStreamName,
		};
	}

	/**
	 * Builds an ARN for the service resource.
	 */
	static service(props: {
		/** The ServiceName component of the ARN. */
		readonly serviceName: string;
		/** The UniqueAttributesHex component of the ARN. */
		readonly uniqueAttributesHex: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceName}-${props.uniqueAttributesHex}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service resource.
	 */
	static isValidServiceArn(arn: string): boolean {
		return ServiceArnRegex.test(arn);
	}

	/**
	 * Parses a service ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceName: string;
		uniqueAttributesHex: string;
	} {
		const match = ServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceName: match.groups!.serviceName,
			uniqueAttributesHex: match.groups!.uniqueAttributesHex,
		};
	}

	/**
	 * Builds an ARN for the slo resource.
	 */
	static slo(props: {
		/** The SloName component of the ARN. */
		readonly sloName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudwatch:${props.region ?? "*"}:${props.account ?? "*"}:slo/${props.sloName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the slo resource.
	 */
	static isValidSloArn(arn: string): boolean {
		return SloArnRegex.test(arn);
	}

	/**
	 * Parses a slo ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSloArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sloName: string;
	} {
		const match = SloArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid slo ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sloName: match.groups!.sloName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cloudwatch.
 */
export class CloudWatchOperations {
	/** IAM actions required for the AssociateDatasetKmsKey API call. */
	static readonly ASSOCIATE_DATASET_KMS_KEY: string[] = [];
	/** IAM actions required for the DeleteAlarmMuteRule API call. */
	static readonly DELETE_ALARM_MUTE_RULE: string[] = [
		"cloudwatch:DeleteAlarmMuteRule",
	];
	/** IAM actions required for the DeleteAlarms API call. */
	static readonly DELETE_ALARMS: string[] = ["cloudwatch:DeleteAlarms"];
	/** IAM actions required for the DeleteAnomalyDetector API call. */
	static readonly DELETE_ANOMALY_DETECTOR: string[] = [
		"cloudwatch:DeleteAnomalyDetector",
	];
	/** IAM actions required for the DeleteDashboards API call. */
	static readonly DELETE_DASHBOARDS: string[] = ["cloudwatch:DeleteDashboards"];
	/** IAM actions required for the DeleteInsightRules API call. */
	static readonly DELETE_INSIGHT_RULES: string[] = [
		"cloudwatch:DeleteInsightRules",
	];
	/** IAM actions required for the DeleteMetricStream API call. */
	static readonly DELETE_METRIC_STREAM: string[] = [
		"cloudwatch:DeleteMetricStream",
	];
	/** IAM actions required for the DescribeAlarmContributors API call. */
	static readonly DESCRIBE_ALARM_CONTRIBUTORS: string[] = [];
	/** IAM actions required for the DescribeAlarmHistory API call. */
	static readonly DESCRIBE_ALARM_HISTORY: string[] = [
		"cloudwatch:DescribeAlarmHistory",
	];
	/** IAM actions required for the DescribeAlarms API call. */
	static readonly DESCRIBE_ALARMS: string[] = ["cloudwatch:DescribeAlarms"];
	/** IAM actions required for the DescribeAlarmsForMetric API call. */
	static readonly DESCRIBE_ALARMS_FOR_METRIC: string[] = [
		"cloudwatch:DescribeAlarmsForMetric",
	];
	/** IAM actions required for the DescribeAnomalyDetectors API call. */
	static readonly DESCRIBE_ANOMALY_DETECTORS: string[] = [
		"cloudwatch:DescribeAnomalyDetectors",
	];
	/** IAM actions required for the DescribeInsightRules API call. */
	static readonly DESCRIBE_INSIGHT_RULES: string[] = [
		"cloudwatch:DescribeInsightRules",
	];
	/** IAM actions required for the DisableAlarmActions API call. */
	static readonly DISABLE_ALARM_ACTIONS: string[] = [
		"cloudwatch:DisableAlarmActions",
	];
	/** IAM actions required for the DisableInsightRules API call. */
	static readonly DISABLE_INSIGHT_RULES: string[] = [
		"cloudwatch:DisableInsightRules",
	];
	/** IAM actions required for the DisassociateDatasetKmsKey API call. */
	static readonly DISASSOCIATE_DATASET_KMS_KEY: string[] = [];
	/** IAM actions required for the EnableAlarmActions API call. */
	static readonly ENABLE_ALARM_ACTIONS: string[] = [
		"cloudwatch:EnableAlarmActions",
	];
	/** IAM actions required for the EnableInsightRules API call. */
	static readonly ENABLE_INSIGHT_RULES: string[] = [
		"cloudwatch:EnableInsightRules",
	];
	/** IAM actions required for the GetAlarmMuteRule API call. */
	static readonly GET_ALARM_MUTE_RULE: string[] = [
		"cloudwatch:GetAlarmMuteRule",
	];
	/** IAM actions required for the GetDashboard API call. */
	static readonly GET_DASHBOARD: string[] = ["cloudwatch:GetDashboard"];
	/** IAM actions required for the GetDataset API call. */
	static readonly GET_DATASET: string[] = ["cloudwatch:GetDataset"];
	/** IAM actions required for the GetInsightRuleReport API call. */
	static readonly GET_INSIGHT_RULE_REPORT: string[] = [
		"cloudwatch:GetInsightRuleReport",
	];
	/** IAM actions required for the GetMetricData API call. */
	static readonly GET_METRIC_DATA: string[] = ["cloudwatch:GetMetricData"];
	/** IAM actions required for the GetMetricStatistics API call. */
	static readonly GET_METRIC_STATISTICS: string[] = [
		"cloudwatch:GetMetricStatistics",
	];
	/** IAM actions required for the GetMetricStream API call. */
	static readonly GET_METRIC_STREAM: string[] = ["cloudwatch:GetMetricStream"];
	/** IAM actions required for the GetMetricWidgetImage API call. */
	static readonly GET_METRIC_WIDGET_IMAGE: string[] = [
		"cloudwatch:GetMetricWidgetImage",
	];
	/** IAM actions required for the GetOTelEnrichment API call. */
	static readonly GET_O_TEL_ENRICHMENT: string[] = [
		"cloudwatch:GetOTelEnrichment",
	];
	/** IAM actions required for the ListAlarmMuteRules API call. */
	static readonly LIST_ALARM_MUTE_RULES: string[] = [
		"cloudwatch:ListAlarmMuteRules",
	];
	/** IAM actions required for the ListDashboards API call. */
	static readonly LIST_DASHBOARDS: string[] = ["cloudwatch:ListDashboards"];
	/** IAM actions required for the ListManagedInsightRules API call. */
	static readonly LIST_MANAGED_INSIGHT_RULES: string[] = [
		"cloudwatch:ListManagedInsightRules",
	];
	/** IAM actions required for the ListMetricStreams API call. */
	static readonly LIST_METRIC_STREAMS: string[] = [
		"cloudwatch:ListMetricStreams",
	];
	/** IAM actions required for the ListMetrics API call. */
	static readonly LIST_METRICS: string[] = ["cloudwatch:ListMetrics"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"cloudwatch:ListTagsForResource",
		"oam:ListTagsForResource",
	];
	/** IAM actions required for the PutAlarmMuteRule API call. */
	static readonly PUT_ALARM_MUTE_RULE: string[] = [
		"cloudwatch:PutAlarmMuteRule",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutAnomalyDetector API call. */
	static readonly PUT_ANOMALY_DETECTOR: string[] = [
		"cloudwatch:PutAnomalyDetector",
	];
	/** IAM actions required for the PutCompositeAlarm API call. */
	static readonly PUT_COMPOSITE_ALARM: string[] = [
		"cloudwatch:PutCompositeAlarm",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutDashboard API call. */
	static readonly PUT_DASHBOARD: string[] = [
		"cloudwatch:PutDashboard",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutInsightRule API call. */
	static readonly PUT_INSIGHT_RULE: string[] = [
		"cloudwatch:PutInsightRule",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutLogAlarm API call. */
	static readonly PUT_LOG_ALARM: string[] = [
		"iam:PassRole",
		"cloudwatch:PutLogAlarm",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutManagedInsightRules API call. */
	static readonly PUT_MANAGED_INSIGHT_RULES: string[] = [
		"cloudwatch:PutManagedInsightRules",
	];
	/** IAM actions required for the PutMetricAlarm API call. */
	static readonly PUT_METRIC_ALARM: string[] = [
		"cloudwatch:PutMetricAlarm",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutMetricData API call. */
	static readonly PUT_METRIC_DATA: string[] = ["cloudwatch:PutMetricData"];
	/** IAM actions required for the PutMetricStream API call. */
	static readonly PUT_METRIC_STREAM: string[] = [
		"iam:PassRole",
		"cloudwatch:PutMetricStream",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the SetAlarmState API call. */
	static readonly SET_ALARM_STATE: string[] = ["cloudwatch:SetAlarmState"];
	/** IAM actions required for the StartMetricStreams API call. */
	static readonly START_METRIC_STREAMS: string[] = [
		"cloudwatch:StartMetricStreams",
	];
	/** IAM actions required for the StartOTelEnrichment API call. */
	static readonly START_O_TEL_ENRICHMENT: string[] = [
		"cloudwatch:StartOTelEnrichment",
	];
	/** IAM actions required for the StopMetricStreams API call. */
	static readonly STOP_METRIC_STREAMS: string[] = [
		"cloudwatch:StopMetricStreams",
	];
	/** IAM actions required for the StopOTelEnrichment API call. */
	static readonly STOP_O_TEL_ENRICHMENT: string[] = [
		"cloudwatch:StopOTelEnrichment",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"cloudwatch:TagResource",
		"oam:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"cloudwatch:UntagResource",
		"oam:UntagResource",
	];
}

/**
 * Condition key constants and builders for cloudwatch.
 */
export class CloudWatchConditions {
	/** Condition keys applicable to the CreateServiceLevelObjective action. */
	static readonly CREATE_SERVICE_LEVEL_OBJECTIVE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetDataset action. */
	static readonly GET_DATASET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListManagedInsightRules action. */
	static readonly LIST_MANAGED_INSIGHT_RULES_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:requestManagedResourceARNs",
	];
	/** Condition keys applicable to the PutAlarmMuteRule action. */
	static readonly PUT_ALARM_MUTE_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutCompositeAlarm action. */
	static readonly PUT_COMPOSITE_ALARM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:AlarmActions",
	];
	/** Condition keys applicable to the PutDashboard action. */
	static readonly PUT_DASHBOARD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutInsightRule action. */
	static readonly PUT_INSIGHT_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:requestInsightRuleLogGroups",
	];
	/** Condition keys applicable to the PutLogAlarm action. */
	static readonly PUT_LOG_ALARM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:AlarmActions",
	];
	/** Condition keys applicable to the PutManagedInsightRules action. */
	static readonly PUT_MANAGED_INSIGHT_RULES_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:requestManagedResourceARNs",
	];
	/** Condition keys applicable to the PutMetricAlarm action. */
	static readonly PUT_METRIC_ALARM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:AlarmActions",
	];
	/** Condition keys applicable to the PutMetricData action. */
	static readonly PUT_METRIC_DATA_CONDITION_KEYS: string[] = [
		"cloudwatch:namespace",
	];
	/** Condition keys applicable to the PutMetricStream action. */
	static readonly PUT_METRIC_STREAM_CONDITION_KEYS: string[] = [
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
	/** Condition key: cloudwatch:AlarmActions (ArrayOfString) */
	static readonly ALARM_ACTIONS = "cloudwatch:AlarmActions";
	/** Condition key: cloudwatch:namespace (String) */
	static readonly NAMESPACE = "cloudwatch:namespace";
	/** Condition key: cloudwatch:requestInsightRuleLogGroups (ArrayOfString) */
	static readonly REQUEST_INSIGHT_RULE_LOG_GROUPS =
		"cloudwatch:requestInsightRuleLogGroups";
	/** Condition key: cloudwatch:requestManagedResourceARNs (ArrayOfARN) */
	static readonly REQUEST_MANAGED_RESOURCE_AR_NS =
		"cloudwatch:requestManagedResourceARNs";

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
	 * Generates a condition block for `cloudwatch:AlarmActions`.
	 */
	static alarmActions(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "cloudwatch:AlarmActions": values },
		};
	}

	/**
	 * Generates a condition block for `cloudwatch:namespace`.
	 */
	static namespace(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "cloudwatch:namespace": value } };
	}

	/**
	 * Generates a condition block for `cloudwatch:requestInsightRuleLogGroups`.
	 */
	static requestInsightRuleLogGroups(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"cloudwatch:requestInsightRuleLogGroups": values,
			},
		};
	}

	/**
	 * Generates a condition block for `cloudwatch:requestManagedResourceARNs`.
	 */
	static requestManagedResourceArNs(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": {
				"cloudwatch:requestManagedResourceARNs": values,
			},
		};
	}
}
