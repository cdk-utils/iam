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
	static readonly BatchGetServiceLevelIndicatorReport =
		"cloudwatch:BatchGetServiceLevelIndicatorReport";
	/** [Read] cloudwatch:BatchGetServiceLevelObjectiveBudgetReport */
	static readonly BatchGetServiceLevelObjectiveBudgetReport =
		"cloudwatch:BatchGetServiceLevelObjectiveBudgetReport";
	/** [Write] cloudwatch:CallWithBearerToken */
	static readonly CallWithBearerToken = "cloudwatch:CallWithBearerToken";
	/** [Write] cloudwatch:CreateServiceLevelObjective */
	static readonly CreateServiceLevelObjective =
		"cloudwatch:CreateServiceLevelObjective";
	/** [Write] cloudwatch:DeleteAlarmMuteRule */
	static readonly DeleteAlarmMuteRule = "cloudwatch:DeleteAlarmMuteRule";
	/** [Write] cloudwatch:DeleteAlarms */
	static readonly DeleteAlarms = "cloudwatch:DeleteAlarms";
	/** [Write] cloudwatch:DeleteAnomalyDetector */
	static readonly DeleteAnomalyDetector = "cloudwatch:DeleteAnomalyDetector";
	/** [Write] cloudwatch:DeleteDashboards */
	static readonly DeleteDashboards = "cloudwatch:DeleteDashboards";
	/** [Write] cloudwatch:DeleteInsightRules */
	static readonly DeleteInsightRules = "cloudwatch:DeleteInsightRules";
	/** [Write] cloudwatch:DeleteMetricStream */
	static readonly DeleteMetricStream = "cloudwatch:DeleteMetricStream";
	/** [Write] cloudwatch:DeletePipelineRule */
	static readonly DeletePipelineRule = "cloudwatch:DeletePipelineRule";
	/** [Write] cloudwatch:DeleteServiceLevelObjective */
	static readonly DeleteServiceLevelObjective =
		"cloudwatch:DeleteServiceLevelObjective";
	/** [Read] cloudwatch:DescribeAlarmHistory */
	static readonly DescribeAlarmHistory = "cloudwatch:DescribeAlarmHistory";
	/** [Read] cloudwatch:DescribeAlarms */
	static readonly DescribeAlarms = "cloudwatch:DescribeAlarms";
	/** [Read] cloudwatch:DescribeAlarmsForMetric */
	static readonly DescribeAlarmsForMetric =
		"cloudwatch:DescribeAlarmsForMetric";
	/** [Read] cloudwatch:DescribeAnomalyDetectors */
	static readonly DescribeAnomalyDetectors =
		"cloudwatch:DescribeAnomalyDetectors";
	/** [Read] cloudwatch:DescribeInsightRules */
	static readonly DescribeInsightRules = "cloudwatch:DescribeInsightRules";
	/** [Write] cloudwatch:DisableAlarmActions */
	static readonly DisableAlarmActions = "cloudwatch:DisableAlarmActions";
	/** [Write] cloudwatch:DisableInsightRules */
	static readonly DisableInsightRules = "cloudwatch:DisableInsightRules";
	/** [Write] cloudwatch:EnableAlarmActions */
	static readonly EnableAlarmActions = "cloudwatch:EnableAlarmActions";
	/** [Write] cloudwatch:EnableInsightRules */
	static readonly EnableInsightRules = "cloudwatch:EnableInsightRules";
	/** [Write] cloudwatch:EnableTopologyDiscovery */
	static readonly EnableTopologyDiscovery =
		"cloudwatch:EnableTopologyDiscovery";
	/** [Read] cloudwatch:GenerateQuery */
	static readonly GenerateQuery = "cloudwatch:GenerateQuery";
	/** [Read] cloudwatch:GenerateQueryResultsSummary */
	static readonly GenerateQueryResultsSummary =
		"cloudwatch:GenerateQueryResultsSummary";
	/** [Read] cloudwatch:GetAlarmMuteRule */
	static readonly actionGetAlarmMuteRule = "cloudwatch:GetAlarmMuteRule";
	/** [Read] cloudwatch:GetDashboard */
	static readonly actionGetDashboard = "cloudwatch:GetDashboard";
	/** [Read] cloudwatch:GetDataset */
	static readonly actionGetDataset = "cloudwatch:GetDataset";
	/** [Read] cloudwatch:GetInsightRuleReport */
	static readonly actionGetInsightRuleReport =
		"cloudwatch:GetInsightRuleReport";
	/** [Read] cloudwatch:GetMetricData */
	static readonly actionGetMetricData = "cloudwatch:GetMetricData";
	/** [Read] cloudwatch:GetMetricStatistics */
	static readonly actionGetMetricStatistics = "cloudwatch:GetMetricStatistics";
	/** [Read] cloudwatch:GetMetricStream */
	static readonly actionGetMetricStream = "cloudwatch:GetMetricStream";
	/** [Read] cloudwatch:GetMetricWidgetImage */
	static readonly actionGetMetricWidgetImage =
		"cloudwatch:GetMetricWidgetImage";
	/** [Read] cloudwatch:GetOTelEnrichment */
	static readonly actionGetOTelEnrichment = "cloudwatch:GetOTelEnrichment";
	/** [Read] cloudwatch:GetService */
	static readonly actionGetService = "cloudwatch:GetService";
	/** [Read] cloudwatch:GetServiceData */
	static readonly actionGetServiceData = "cloudwatch:GetServiceData";
	/** [Read] cloudwatch:GetServiceLevelObjective */
	static readonly actionGetServiceLevelObjective =
		"cloudwatch:GetServiceLevelObjective";
	/** [Read] cloudwatch:GetTopologyDiscoveryStatus */
	static readonly actionGetTopologyDiscoveryStatus =
		"cloudwatch:GetTopologyDiscoveryStatus";
	/** [Read] cloudwatch:GetTopologyMap */
	static readonly actionGetTopologyMap = "cloudwatch:GetTopologyMap";
	/** [Write] cloudwatch:Link */
	static readonly Link = "cloudwatch:Link";
	/** [List] cloudwatch:ListAlarmMuteRules */
	static readonly ListAlarmMuteRules = "cloudwatch:ListAlarmMuteRules";
	/** [List] cloudwatch:ListDashboards */
	static readonly ListDashboards = "cloudwatch:ListDashboards";
	/** [List] cloudwatch:ListEntitiesForMetric */
	static readonly ListEntitiesForMetric = "cloudwatch:ListEntitiesForMetric";
	/** [Read] cloudwatch:ListManagedInsightRules */
	static readonly ListManagedInsightRules =
		"cloudwatch:ListManagedInsightRules";
	/** [List] cloudwatch:ListMetricStreams */
	static readonly ListMetricStreams = "cloudwatch:ListMetricStreams";
	/** [List] cloudwatch:ListMetrics */
	static readonly ListMetrics = "cloudwatch:ListMetrics";
	/** [List] cloudwatch:ListServiceLevelObjectives */
	static readonly ListServiceLevelObjectives =
		"cloudwatch:ListServiceLevelObjectives";
	/** [List] cloudwatch:ListServices */
	static readonly ListServices = "cloudwatch:ListServices";
	/** [List] cloudwatch:ListTagsForResource */
	static readonly ListTagsForResource = "cloudwatch:ListTagsForResource";
	/** [Write] cloudwatch:PutAlarmMuteRule */
	static readonly PutAlarmMuteRule = "cloudwatch:PutAlarmMuteRule";
	/** [Write] cloudwatch:PutAnomalyDetector */
	static readonly PutAnomalyDetector = "cloudwatch:PutAnomalyDetector";
	/** [Write] cloudwatch:PutCompositeAlarm */
	static readonly PutCompositeAlarm = "cloudwatch:PutCompositeAlarm";
	/** [Write] cloudwatch:PutDashboard */
	static readonly PutDashboard = "cloudwatch:PutDashboard";
	/** [Write] cloudwatch:PutInsightRule */
	static readonly PutInsightRule = "cloudwatch:PutInsightRule";
	/** [Write] cloudwatch:PutLogAlarm */
	static readonly PutLogAlarm = "cloudwatch:PutLogAlarm";
	/** [Write] cloudwatch:PutManagedInsightRules */
	static readonly PutManagedInsightRules = "cloudwatch:PutManagedInsightRules";
	/** [Write] cloudwatch:PutMetricAlarm */
	static readonly PutMetricAlarm = "cloudwatch:PutMetricAlarm";
	/** [Write] cloudwatch:PutMetricData */
	static readonly PutMetricData = "cloudwatch:PutMetricData";
	/** [Write] cloudwatch:PutMetricStream */
	static readonly PutMetricStream = "cloudwatch:PutMetricStream";
	/** [Write] cloudwatch:PutPipelineRule */
	static readonly PutPipelineRule = "cloudwatch:PutPipelineRule";
	/** [Write] cloudwatch:SetAlarmState */
	static readonly actionSetAlarmState = "cloudwatch:SetAlarmState";
	/** [Write] cloudwatch:StartMetricStreams */
	static readonly StartMetricStreams = "cloudwatch:StartMetricStreams";
	/** [Write] cloudwatch:StartOTelEnrichment */
	static readonly StartOTelEnrichment = "cloudwatch:StartOTelEnrichment";
	/** [Write] cloudwatch:StopMetricStreams */
	static readonly StopMetricStreams = "cloudwatch:StopMetricStreams";
	/** [Write] cloudwatch:StopOTelEnrichment */
	static readonly StopOTelEnrichment = "cloudwatch:StopOTelEnrichment";
	/** [Tagging] cloudwatch:TagResource */
	static readonly TagResource = "cloudwatch:TagResource";
	/** [Tagging] cloudwatch:UntagResource */
	static readonly UntagResource = "cloudwatch:UntagResource";
	/** [Write] cloudwatch:UpdateServiceLevelObjective */
	static readonly UpdateServiceLevelObjective =
		"cloudwatch:UpdateServiceLevelObjective";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CloudWatchActions.BatchGetServiceLevelIndicatorReport,
		CloudWatchActions.BatchGetServiceLevelObjectiveBudgetReport,
		CloudWatchActions.DescribeAlarmHistory,
		CloudWatchActions.DescribeAlarms,
		CloudWatchActions.DescribeAlarmsForMetric,
		CloudWatchActions.DescribeAnomalyDetectors,
		CloudWatchActions.DescribeInsightRules,
		CloudWatchActions.GenerateQuery,
		CloudWatchActions.GenerateQueryResultsSummary,
		CloudWatchActions.actionGetAlarmMuteRule,
		CloudWatchActions.actionGetDashboard,
		CloudWatchActions.actionGetDataset,
		CloudWatchActions.actionGetInsightRuleReport,
		CloudWatchActions.actionGetMetricData,
		CloudWatchActions.actionGetMetricStatistics,
		CloudWatchActions.actionGetMetricStream,
		CloudWatchActions.actionGetMetricWidgetImage,
		CloudWatchActions.actionGetOTelEnrichment,
		CloudWatchActions.actionGetService,
		CloudWatchActions.actionGetServiceData,
		CloudWatchActions.actionGetServiceLevelObjective,
		CloudWatchActions.actionGetTopologyDiscoveryStatus,
		CloudWatchActions.actionGetTopologyMap,
		CloudWatchActions.ListManagedInsightRules,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CloudWatchActions.CallWithBearerToken,
		CloudWatchActions.CreateServiceLevelObjective,
		CloudWatchActions.DeleteAlarmMuteRule,
		CloudWatchActions.DeleteAlarms,
		CloudWatchActions.DeleteAnomalyDetector,
		CloudWatchActions.DeleteDashboards,
		CloudWatchActions.DeleteInsightRules,
		CloudWatchActions.DeleteMetricStream,
		CloudWatchActions.DeletePipelineRule,
		CloudWatchActions.DeleteServiceLevelObjective,
		CloudWatchActions.DisableAlarmActions,
		CloudWatchActions.DisableInsightRules,
		CloudWatchActions.EnableAlarmActions,
		CloudWatchActions.EnableInsightRules,
		CloudWatchActions.EnableTopologyDiscovery,
		CloudWatchActions.Link,
		CloudWatchActions.PutAlarmMuteRule,
		CloudWatchActions.PutAnomalyDetector,
		CloudWatchActions.PutCompositeAlarm,
		CloudWatchActions.PutDashboard,
		CloudWatchActions.PutInsightRule,
		CloudWatchActions.PutLogAlarm,
		CloudWatchActions.PutManagedInsightRules,
		CloudWatchActions.PutMetricAlarm,
		CloudWatchActions.PutMetricData,
		CloudWatchActions.PutMetricStream,
		CloudWatchActions.PutPipelineRule,
		CloudWatchActions.actionSetAlarmState,
		CloudWatchActions.StartMetricStreams,
		CloudWatchActions.StartOTelEnrichment,
		CloudWatchActions.StopMetricStreams,
		CloudWatchActions.StopOTelEnrichment,
		CloudWatchActions.UpdateServiceLevelObjective,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CloudWatchActions.ListAlarmMuteRules,
		CloudWatchActions.ListDashboards,
		CloudWatchActions.ListEntitiesForMetric,
		CloudWatchActions.ListMetricStreams,
		CloudWatchActions.ListMetrics,
		CloudWatchActions.ListServiceLevelObjectives,
		CloudWatchActions.ListServices,
		CloudWatchActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CloudWatchActions.TagResource,
		CloudWatchActions.UntagResource,
	];
}

/**
 * Properties for building a alarm ARN.
 */
export interface CloudWatchAlarmArnProps {
	/** The AlarmName component of the ARN. */
	readonly alarmName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a alarm ARN.
 */
export interface CloudWatchAlarmArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AlarmName component. */
	readonly alarmName: string;
}

/**
 * Properties for building a alarm-mute-rule ARN.
 */
export interface CloudWatchAlarmMuteRuleArnProps {
	/** The AlarmMuteRuleName component of the ARN. */
	readonly alarmMuteRuleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a alarm-mute-rule ARN.
 */
export interface CloudWatchAlarmMuteRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AlarmMuteRuleName component. */
	readonly alarmMuteRuleName: string;
}

/**
 * Properties for building a dashboard ARN.
 */
export interface CloudWatchDashboardArnProps {
	/** The DashboardName component of the ARN. */
	readonly dashboardName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dashboard ARN.
 */
export interface CloudWatchDashboardArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DashboardName component. */
	readonly dashboardName: string;
}

/**
 * Properties for building a dataset ARN.
 */
export interface CloudWatchDatasetArnProps {
	/** The DatasetId component of the ARN. */
	readonly datasetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dataset ARN.
 */
export interface CloudWatchDatasetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatasetId component. */
	readonly datasetId: string;
}

/**
 * Properties for building a insight-rule ARN.
 */
export interface CloudWatchInsightRuleArnProps {
	/** The InsightRuleName component of the ARN. */
	readonly insightRuleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a insight-rule ARN.
 */
export interface CloudWatchInsightRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InsightRuleName component. */
	readonly insightRuleName: string;
}

/**
 * Properties for building a metric-stream ARN.
 */
export interface CloudWatchMetricStreamArnProps {
	/** The MetricStreamName component of the ARN. */
	readonly metricStreamName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a metric-stream ARN.
 */
export interface CloudWatchMetricStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MetricStreamName component. */
	readonly metricStreamName: string;
}

/**
 * Properties for building a service ARN.
 */
export interface CloudWatchServiceArnProps {
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
}

/**
 * Parsed components of a service ARN.
 */
export interface CloudWatchServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceName component. */
	readonly serviceName: string;
	/** The UniqueAttributesHex component. */
	readonly uniqueAttributesHex: string;
}

/**
 * Properties for building a slo ARN.
 */
export interface CloudWatchSloArnProps {
	/** The SloName component of the ARN. */
	readonly sloName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a slo ARN.
 */
export interface CloudWatchSloArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SloName component. */
	readonly sloName: string;
}

const AlarmArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):alarm:(?<alarmName>[^:/?]+)$/;
const AlarmMuteRuleArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):alarm-mute-rule:(?<alarmMuteRuleName>[^:/?]+)$/;
const DashboardArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch::(?<account>[^:]*):dashboard\/(?<dashboardName>[^:/?]+)$/;
const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):dataset\/(?<datasetId>[^:/?]+)$/;
const InsightRuleArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):insight-rule\/(?<insightRuleName>[^:/?]+)$/;
const MetricStreamArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):metric-stream\/(?<metricStreamName>[^:/?]+)$/;
const ServiceArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):service\/(?<serviceName>[^:/?]+)-(?<uniqueAttributesHex>[^:/?]+)$/;
const SloArnRegex =
	/^arn:(?<partition>[^:]+):cloudwatch:(?<region>[^:]*):(?<account>[^:]*):slo\/(?<sloName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cloudwatch resources.
 */
export class CloudWatchResources {
	/**
	 * Builds an ARN for the alarm resource.
	 */
	static alarm(props: CloudWatchAlarmArnProps): string {
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
	static parseAlarmArn(arn: string): CloudWatchAlarmArnComponents {
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
	static alarmMuteRule(props: CloudWatchAlarmMuteRuleArnProps): string {
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
	static parseAlarmMuteRuleArn(
		arn: string,
	): CloudWatchAlarmMuteRuleArnComponents {
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
	static dashboard(props: CloudWatchDashboardArnProps): string {
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
	static parseDashboardArn(arn: string): CloudWatchDashboardArnComponents {
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
	static dataset(props: CloudWatchDatasetArnProps): string {
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
	static parseDatasetArn(arn: string): CloudWatchDatasetArnComponents {
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
	static insightRule(props: CloudWatchInsightRuleArnProps): string {
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
	static parseInsightRuleArn(arn: string): CloudWatchInsightRuleArnComponents {
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
	static metricStream(props: CloudWatchMetricStreamArnProps): string {
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
	static parseMetricStreamArn(
		arn: string,
	): CloudWatchMetricStreamArnComponents {
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
	static service(props: CloudWatchServiceArnProps): string {
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
	static parseServiceArn(arn: string): CloudWatchServiceArnComponents {
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
	static slo(props: CloudWatchSloArnProps): string {
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
	static parseSloArn(arn: string): CloudWatchSloArnComponents {
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
	static readonly AssociateDatasetKmsKey: string[] = [];
	/** IAM actions required for the DeleteAlarmMuteRule API call. */
	static readonly DeleteAlarmMuteRule: string[] = [
		"cloudwatch:DeleteAlarmMuteRule",
	];
	/** IAM actions required for the DeleteAlarms API call. */
	static readonly DeleteAlarms: string[] = ["cloudwatch:DeleteAlarms"];
	/** IAM actions required for the DeleteAnomalyDetector API call. */
	static readonly DeleteAnomalyDetector: string[] = [
		"cloudwatch:DeleteAnomalyDetector",
	];
	/** IAM actions required for the DeleteDashboards API call. */
	static readonly DeleteDashboards: string[] = ["cloudwatch:DeleteDashboards"];
	/** IAM actions required for the DeleteInsightRules API call. */
	static readonly DeleteInsightRules: string[] = [
		"cloudwatch:DeleteInsightRules",
	];
	/** IAM actions required for the DeleteMetricStream API call. */
	static readonly DeleteMetricStream: string[] = [
		"cloudwatch:DeleteMetricStream",
	];
	/** IAM actions required for the DescribeAlarmContributors API call. */
	static readonly DescribeAlarmContributors: string[] = [];
	/** IAM actions required for the DescribeAlarmHistory API call. */
	static readonly DescribeAlarmHistory: string[] = [
		"cloudwatch:DescribeAlarmHistory",
	];
	/** IAM actions required for the DescribeAlarms API call. */
	static readonly DescribeAlarms: string[] = ["cloudwatch:DescribeAlarms"];
	/** IAM actions required for the DescribeAlarmsForMetric API call. */
	static readonly DescribeAlarmsForMetric: string[] = [
		"cloudwatch:DescribeAlarmsForMetric",
	];
	/** IAM actions required for the DescribeAnomalyDetectors API call. */
	static readonly DescribeAnomalyDetectors: string[] = [
		"cloudwatch:DescribeAnomalyDetectors",
	];
	/** IAM actions required for the DescribeInsightRules API call. */
	static readonly DescribeInsightRules: string[] = [
		"cloudwatch:DescribeInsightRules",
	];
	/** IAM actions required for the DisableAlarmActions API call. */
	static readonly DisableAlarmActions: string[] = [
		"cloudwatch:DisableAlarmActions",
	];
	/** IAM actions required for the DisableInsightRules API call. */
	static readonly DisableInsightRules: string[] = [
		"cloudwatch:DisableInsightRules",
	];
	/** IAM actions required for the DisassociateDatasetKmsKey API call. */
	static readonly DisassociateDatasetKmsKey: string[] = [];
	/** IAM actions required for the EnableAlarmActions API call. */
	static readonly EnableAlarmActions: string[] = [
		"cloudwatch:EnableAlarmActions",
	];
	/** IAM actions required for the EnableInsightRules API call. */
	static readonly EnableInsightRules: string[] = [
		"cloudwatch:EnableInsightRules",
	];
	/** IAM actions required for the GetAlarmMuteRule API call. */
	static readonly opGetAlarmMuteRule: string[] = [
		"cloudwatch:GetAlarmMuteRule",
	];
	/** IAM actions required for the GetDashboard API call. */
	static readonly opGetDashboard: string[] = ["cloudwatch:GetDashboard"];
	/** IAM actions required for the GetDataset API call. */
	static readonly opGetDataset: string[] = ["cloudwatch:GetDataset"];
	/** IAM actions required for the GetInsightRuleReport API call. */
	static readonly opGetInsightRuleReport: string[] = [
		"cloudwatch:GetInsightRuleReport",
	];
	/** IAM actions required for the GetMetricData API call. */
	static readonly opGetMetricData: string[] = ["cloudwatch:GetMetricData"];
	/** IAM actions required for the GetMetricStatistics API call. */
	static readonly opGetMetricStatistics: string[] = [
		"cloudwatch:GetMetricStatistics",
	];
	/** IAM actions required for the GetMetricStream API call. */
	static readonly opGetMetricStream: string[] = ["cloudwatch:GetMetricStream"];
	/** IAM actions required for the GetMetricWidgetImage API call. */
	static readonly opGetMetricWidgetImage: string[] = [
		"cloudwatch:GetMetricWidgetImage",
	];
	/** IAM actions required for the GetOTelEnrichment API call. */
	static readonly opGetOTelEnrichment: string[] = [
		"cloudwatch:GetOTelEnrichment",
	];
	/** IAM actions required for the ListAlarmMuteRules API call. */
	static readonly ListAlarmMuteRules: string[] = [
		"cloudwatch:ListAlarmMuteRules",
	];
	/** IAM actions required for the ListDashboards API call. */
	static readonly ListDashboards: string[] = ["cloudwatch:ListDashboards"];
	/** IAM actions required for the ListManagedInsightRules API call. */
	static readonly ListManagedInsightRules: string[] = [
		"cloudwatch:ListManagedInsightRules",
	];
	/** IAM actions required for the ListMetricStreams API call. */
	static readonly ListMetricStreams: string[] = [
		"cloudwatch:ListMetricStreams",
	];
	/** IAM actions required for the ListMetrics API call. */
	static readonly ListMetrics: string[] = ["cloudwatch:ListMetrics"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"cloudwatch:ListTagsForResource",
		"oam:ListTagsForResource",
	];
	/** IAM actions required for the PutAlarmMuteRule API call. */
	static readonly PutAlarmMuteRule: string[] = [
		"cloudwatch:PutAlarmMuteRule",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutAnomalyDetector API call. */
	static readonly PutAnomalyDetector: string[] = [
		"cloudwatch:PutAnomalyDetector",
	];
	/** IAM actions required for the PutCompositeAlarm API call. */
	static readonly PutCompositeAlarm: string[] = [
		"cloudwatch:PutCompositeAlarm",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutDashboard API call. */
	static readonly PutDashboard: string[] = [
		"cloudwatch:PutDashboard",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutInsightRule API call. */
	static readonly PutInsightRule: string[] = [
		"cloudwatch:PutInsightRule",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutLogAlarm API call. */
	static readonly PutLogAlarm: string[] = [
		"iam:PassRole",
		"cloudwatch:PutLogAlarm",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutManagedInsightRules API call. */
	static readonly PutManagedInsightRules: string[] = [
		"cloudwatch:PutManagedInsightRules",
	];
	/** IAM actions required for the PutMetricAlarm API call. */
	static readonly PutMetricAlarm: string[] = [
		"cloudwatch:PutMetricAlarm",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the PutMetricData API call. */
	static readonly PutMetricData: string[] = ["cloudwatch:PutMetricData"];
	/** IAM actions required for the PutMetricStream API call. */
	static readonly PutMetricStream: string[] = [
		"iam:PassRole",
		"cloudwatch:PutMetricStream",
		"cloudwatch:TagResource",
	];
	/** IAM actions required for the SetAlarmState API call. */
	static readonly opSetAlarmState: string[] = ["cloudwatch:SetAlarmState"];
	/** IAM actions required for the StartMetricStreams API call. */
	static readonly StartMetricStreams: string[] = [
		"cloudwatch:StartMetricStreams",
	];
	/** IAM actions required for the StartOTelEnrichment API call. */
	static readonly StartOTelEnrichment: string[] = [
		"cloudwatch:StartOTelEnrichment",
	];
	/** IAM actions required for the StopMetricStreams API call. */
	static readonly StopMetricStreams: string[] = [
		"cloudwatch:StopMetricStreams",
	];
	/** IAM actions required for the StopOTelEnrichment API call. */
	static readonly StopOTelEnrichment: string[] = [
		"cloudwatch:StopOTelEnrichment",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"cloudwatch:TagResource",
		"oam:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"cloudwatch:UntagResource",
		"oam:UntagResource",
	];
}

/**
 * Condition key constants and builders for cloudwatch.
 */
export class CloudWatchConditions {
	/** Condition keys applicable to the CreateServiceLevelObjective action. */
	static readonly CreateServiceLevelObjectiveConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetDataset action. */
	static readonly actionGetDatasetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListManagedInsightRules action. */
	static readonly ListManagedInsightRulesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:requestManagedResourceARNs",
	];
	/** Condition keys applicable to the PutAlarmMuteRule action. */
	static readonly PutAlarmMuteRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutCompositeAlarm action. */
	static readonly PutCompositeAlarmConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:AlarmActions",
	];
	/** Condition keys applicable to the PutDashboard action. */
	static readonly PutDashboardConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutInsightRule action. */
	static readonly PutInsightRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:requestInsightRuleLogGroups",
	];
	/** Condition keys applicable to the PutLogAlarm action. */
	static readonly PutLogAlarmConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:AlarmActions",
	];
	/** Condition keys applicable to the PutManagedInsightRules action. */
	static readonly PutManagedInsightRulesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:requestManagedResourceARNs",
	];
	/** Condition keys applicable to the PutMetricAlarm action. */
	static readonly PutMetricAlarmConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudwatch:AlarmActions",
	];
	/** Condition keys applicable to the PutMetricData action. */
	static readonly PutMetricDataConditionKeys: string[] = [
		"cloudwatch:namespace",
	];
	/** Condition keys applicable to the PutMetricStream action. */
	static readonly PutMetricStreamConditionKeys: string[] = [
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
