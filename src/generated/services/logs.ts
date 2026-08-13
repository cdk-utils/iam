// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/logs.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the logs service.
 */
export class LogsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "logs";

	/** [Write] logs:AssociateKmsKey */
	static readonly ASSOCIATE_KMS_KEY = "logs:AssociateKmsKey";
	/** [Write] logs:AssociateSourceToS3TableIntegration */
	static readonly ASSOCIATE_SOURCE_TO_S3_TABLE_INTEGRATION =
		"logs:AssociateSourceToS3TableIntegration";
	/** [Write] logs:CallWithBearerToken */
	static readonly CALL_WITH_BEARER_TOKEN = "logs:CallWithBearerToken";
	/** [Write] logs:CancelExportTask */
	static readonly CANCEL_EXPORT_TASK = "logs:CancelExportTask";
	/** [Write] logs:CancelImportTask */
	static readonly CANCEL_IMPORT_TASK = "logs:CancelImportTask";
	/** [Write] logs:CreateDelivery */
	static readonly CREATE_DELIVERY = "logs:CreateDelivery";
	/** [Write] logs:CreateExportTask */
	static readonly CREATE_EXPORT_TASK = "logs:CreateExportTask";
	/** [Write] logs:CreateImportTask */
	static readonly CREATE_IMPORT_TASK = "logs:CreateImportTask";
	/** [Write] logs:CreateLogAnomalyDetector */
	static readonly CREATE_LOG_ANOMALY_DETECTOR = "logs:CreateLogAnomalyDetector";
	/** [Write] logs:CreateLogDelivery */
	static readonly CREATE_LOG_DELIVERY = "logs:CreateLogDelivery";
	/** [Write] logs:CreateLogGroup */
	static readonly CREATE_LOG_GROUP = "logs:CreateLogGroup";
	/** [Write] logs:CreateLogStream */
	static readonly CREATE_LOG_STREAM = "logs:CreateLogStream";
	/** [Write] logs:CreateLookupTable */
	static readonly CREATE_LOOKUP_TABLE = "logs:CreateLookupTable";
	/** [Write] logs:CreateScheduledQuery */
	static readonly CREATE_SCHEDULED_QUERY = "logs:CreateScheduledQuery";
	/** [Write] logs:DeleteAccountPolicy */
	static readonly DELETE_ACCOUNT_POLICY = "logs:DeleteAccountPolicy";
	/** [Write] logs:DeleteDataProtectionPolicy */
	static readonly DELETE_DATA_PROTECTION_POLICY =
		"logs:DeleteDataProtectionPolicy";
	/** [Write] logs:DeleteDelivery */
	static readonly DELETE_DELIVERY = "logs:DeleteDelivery";
	/** [Write] logs:DeleteDeliveryDestination */
	static readonly DELETE_DELIVERY_DESTINATION =
		"logs:DeleteDeliveryDestination";
	/** [Write] logs:DeleteDeliveryDestinationPolicy */
	static readonly DELETE_DELIVERY_DESTINATION_POLICY =
		"logs:DeleteDeliveryDestinationPolicy";
	/** [Write] logs:DeleteDeliverySource */
	static readonly DELETE_DELIVERY_SOURCE = "logs:DeleteDeliverySource";
	/** [Write] logs:DeleteDestination */
	static readonly DELETE_DESTINATION = "logs:DeleteDestination";
	/** [Write] logs:DeleteIndexPolicy */
	static readonly DELETE_INDEX_POLICY = "logs:DeleteIndexPolicy";
	/** [Write] logs:DeleteIntegration */
	static readonly DELETE_INTEGRATION = "logs:DeleteIntegration";
	/** [Write] logs:DeleteLogAnomalyDetector */
	static readonly DELETE_LOG_ANOMALY_DETECTOR = "logs:DeleteLogAnomalyDetector";
	/** [Write] logs:DeleteLogDelivery */
	static readonly DELETE_LOG_DELIVERY = "logs:DeleteLogDelivery";
	/** [Write] logs:DeleteLogGroup */
	static readonly DELETE_LOG_GROUP = "logs:DeleteLogGroup";
	/** [Write] logs:DeleteLogStream */
	static readonly DELETE_LOG_STREAM = "logs:DeleteLogStream";
	/** [Write] logs:DeleteLookupTable */
	static readonly DELETE_LOOKUP_TABLE = "logs:DeleteLookupTable";
	/** [Write] logs:DeleteMetricFilter */
	static readonly DELETE_METRIC_FILTER = "logs:DeleteMetricFilter";
	/** [Write] logs:DeletePipelineRule */
	static readonly DELETE_PIPELINE_RULE = "logs:DeletePipelineRule";
	/** [Write] logs:DeleteQueryDefinition */
	static readonly DELETE_QUERY_DEFINITION = "logs:DeleteQueryDefinition";
	/** [PermissionManagement] logs:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "logs:DeleteResourcePolicy";
	/** [Write] logs:DeleteRetentionPolicy */
	static readonly DELETE_RETENTION_POLICY = "logs:DeleteRetentionPolicy";
	/** [Write] logs:DeleteScheduledQuery */
	static readonly DELETE_SCHEDULED_QUERY = "logs:DeleteScheduledQuery";
	/** [Write] logs:DeleteSubscriptionFilter */
	static readonly DELETE_SUBSCRIPTION_FILTER = "logs:DeleteSubscriptionFilter";
	/** [Write] logs:DeleteSyslogConfiguration */
	static readonly DELETE_SYSLOG_CONFIGURATION =
		"logs:DeleteSyslogConfiguration";
	/** [Write] logs:DeleteTransformer */
	static readonly DELETE_TRANSFORMER = "logs:DeleteTransformer";
	/** [List] logs:DescribeAccountPolicies */
	static readonly DESCRIBE_ACCOUNT_POLICIES = "logs:DescribeAccountPolicies";
	/** [List] logs:DescribeConfigurationTemplates */
	static readonly DESCRIBE_CONFIGURATION_TEMPLATES =
		"logs:DescribeConfigurationTemplates";
	/** [List] logs:DescribeDeliveries */
	static readonly DESCRIBE_DELIVERIES = "logs:DescribeDeliveries";
	/** [List] logs:DescribeDeliveryDestinations */
	static readonly DESCRIBE_DELIVERY_DESTINATIONS =
		"logs:DescribeDeliveryDestinations";
	/** [List] logs:DescribeDeliverySources */
	static readonly DESCRIBE_DELIVERY_SOURCES = "logs:DescribeDeliverySources";
	/** [List] logs:DescribeDestinations */
	static readonly DESCRIBE_DESTINATIONS = "logs:DescribeDestinations";
	/** [List] logs:DescribeExportTasks */
	static readonly DESCRIBE_EXPORT_TASKS = "logs:DescribeExportTasks";
	/** [List] logs:DescribeFieldIndexes */
	static readonly DESCRIBE_FIELD_INDEXES = "logs:DescribeFieldIndexes";
	/** [List] logs:DescribeImportTaskBatches */
	static readonly DESCRIBE_IMPORT_TASK_BATCHES =
		"logs:DescribeImportTaskBatches";
	/** [List] logs:DescribeImportTasks */
	static readonly DESCRIBE_IMPORT_TASKS = "logs:DescribeImportTasks";
	/** [List] logs:DescribeIndexPolicies */
	static readonly DESCRIBE_INDEX_POLICIES = "logs:DescribeIndexPolicies";
	/** [List] logs:DescribeLogGroups */
	static readonly DESCRIBE_LOG_GROUPS = "logs:DescribeLogGroups";
	/** [List] logs:DescribeLogStreams */
	static readonly DESCRIBE_LOG_STREAMS = "logs:DescribeLogStreams";
	/** [List] logs:DescribeLookupTables */
	static readonly DESCRIBE_LOOKUP_TABLES = "logs:DescribeLookupTables";
	/** [List] logs:DescribeMetricFilters */
	static readonly DESCRIBE_METRIC_FILTERS = "logs:DescribeMetricFilters";
	/** [List] logs:DescribeQueries */
	static readonly DESCRIBE_QUERIES = "logs:DescribeQueries";
	/** [List] logs:DescribeQueryDefinitions */
	static readonly DESCRIBE_QUERY_DEFINITIONS = "logs:DescribeQueryDefinitions";
	/** [List] logs:DescribeResourcePolicies */
	static readonly DESCRIBE_RESOURCE_POLICIES = "logs:DescribeResourcePolicies";
	/** [List] logs:DescribeSubscriptionFilters */
	static readonly DESCRIBE_SUBSCRIPTION_FILTERS =
		"logs:DescribeSubscriptionFilters";
	/** [Write] logs:DisassociateKmsKey */
	static readonly DISASSOCIATE_KMS_KEY = "logs:DisassociateKmsKey";
	/** [Write] logs:DisassociateSourceFromS3TableIntegration */
	static readonly DISASSOCIATE_SOURCE_FROM_S3_TABLE_INTEGRATION =
		"logs:DisassociateSourceFromS3TableIntegration";
	/** [Read] logs:FilterLogEvents */
	static readonly FILTER_LOG_EVENTS = "logs:FilterLogEvents";
	/** [Read] logs:GetDataProtectionPolicy */
	static readonly GET_DATA_PROTECTION_POLICY = "logs:GetDataProtectionPolicy";
	/** [Read] logs:GetDelivery */
	static readonly GET_DELIVERY = "logs:GetDelivery";
	/** [Read] logs:GetDeliveryDestination */
	static readonly GET_DELIVERY_DESTINATION = "logs:GetDeliveryDestination";
	/** [Read] logs:GetDeliveryDestinationPolicy */
	static readonly GET_DELIVERY_DESTINATION_POLICY =
		"logs:GetDeliveryDestinationPolicy";
	/** [Read] logs:GetDeliverySource */
	static readonly GET_DELIVERY_SOURCE = "logs:GetDeliverySource";
	/** [Read] logs:GetIntegration */
	static readonly GET_INTEGRATION = "logs:GetIntegration";
	/** [Read] logs:GetLogAnomalyDetector */
	static readonly GET_LOG_ANOMALY_DETECTOR = "logs:GetLogAnomalyDetector";
	/** [Read] logs:GetLogDelivery */
	static readonly GET_LOG_DELIVERY = "logs:GetLogDelivery";
	/** [Read] logs:GetLogEvents */
	static readonly GET_LOG_EVENTS = "logs:GetLogEvents";
	/** [Read] logs:GetLogFields */
	static readonly GET_LOG_FIELDS = "logs:GetLogFields";
	/** [Read] logs:GetLogGroupFields */
	static readonly GET_LOG_GROUP_FIELDS = "logs:GetLogGroupFields";
	/** [Read] logs:GetLogRecord */
	static readonly GET_LOG_RECORD = "logs:GetLogRecord";
	/** [Read] logs:GetLookupTable */
	static readonly GET_LOOKUP_TABLE = "logs:GetLookupTable";
	/** [Read] logs:GetQueryResults */
	static readonly GET_QUERY_RESULTS = "logs:GetQueryResults";
	/** [Read] logs:GetScheduledQuery */
	static readonly GET_SCHEDULED_QUERY = "logs:GetScheduledQuery";
	/** [Read] logs:GetScheduledQueryHistory */
	static readonly GET_SCHEDULED_QUERY_HISTORY = "logs:GetScheduledQueryHistory";
	/** [Read] logs:GetStorageTierPolicy */
	static readonly GET_STORAGE_TIER_POLICY = "logs:GetStorageTierPolicy";
	/** [Read] logs:GetTransformer */
	static readonly GET_TRANSFORMER = "logs:GetTransformer";
	/** [Write] logs:IntegrateWithS3Table */
	static readonly INTEGRATE_WITH_S3_TABLE = "logs:IntegrateWithS3Table";
	/** [Write] logs:Link */
	static readonly LINK = "logs:Link";
	/** [List] logs:ListAggregateLogGroupSummaries */
	static readonly LIST_AGGREGATE_LOG_GROUP_SUMMARIES =
		"logs:ListAggregateLogGroupSummaries";
	/** [List] logs:ListAnomalies */
	static readonly LIST_ANOMALIES = "logs:ListAnomalies";
	/** [List] logs:ListEntitiesForLogGroup */
	static readonly LIST_ENTITIES_FOR_LOG_GROUP = "logs:ListEntitiesForLogGroup";
	/** [List] logs:ListIntegrations */
	static readonly LIST_INTEGRATIONS = "logs:ListIntegrations";
	/** [List] logs:ListLogAnomalyDetectors */
	static readonly LIST_LOG_ANOMALY_DETECTORS = "logs:ListLogAnomalyDetectors";
	/** [List] logs:ListLogDeliveries */
	static readonly LIST_LOG_DELIVERIES = "logs:ListLogDeliveries";
	/** [List] logs:ListLogGroups */
	static readonly LIST_LOG_GROUPS = "logs:ListLogGroups";
	/** [List] logs:ListLogGroupsForEntity */
	static readonly LIST_LOG_GROUPS_FOR_ENTITY = "logs:ListLogGroupsForEntity";
	/** [List] logs:ListLogGroupsForQuery */
	static readonly LIST_LOG_GROUPS_FOR_QUERY = "logs:ListLogGroupsForQuery";
	/** [List] logs:ListScheduledQueries */
	static readonly LIST_SCHEDULED_QUERIES = "logs:ListScheduledQueries";
	/** [List] logs:ListSourcesForS3TableIntegration */
	static readonly LIST_SOURCES_FOR_S3_TABLE_INTEGRATION =
		"logs:ListSourcesForS3TableIntegration";
	/** [List] logs:ListSyslogConfigurations */
	static readonly LIST_SYSLOG_CONFIGURATIONS = "logs:ListSyslogConfigurations";
	/** [List] logs:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "logs:ListTagsForResource";
	/** [List] logs:ListTagsLogGroup */
	static readonly LIST_TAGS_LOG_GROUP = "logs:ListTagsLogGroup";
	/** [Write] logs:ProcessWithPipeline */
	static readonly PROCESS_WITH_PIPELINE = "logs:ProcessWithPipeline";
	/** [Write] logs:PutAccountPolicy */
	static readonly PUT_ACCOUNT_POLICY = "logs:PutAccountPolicy";
	/** [Write] logs:PutBearerTokenAuthentication */
	static readonly PUT_BEARER_TOKEN_AUTHENTICATION =
		"logs:PutBearerTokenAuthentication";
	/** [Write] logs:PutDataProtectionPolicy */
	static readonly PUT_DATA_PROTECTION_POLICY = "logs:PutDataProtectionPolicy";
	/** [Write] logs:PutDeliveryDestination */
	static readonly PUT_DELIVERY_DESTINATION = "logs:PutDeliveryDestination";
	/** [Write] logs:PutDeliveryDestinationPolicy */
	static readonly PUT_DELIVERY_DESTINATION_POLICY =
		"logs:PutDeliveryDestinationPolicy";
	/** [Write] logs:PutDeliverySource */
	static readonly PUT_DELIVERY_SOURCE = "logs:PutDeliverySource";
	/** [Write] logs:PutDestination */
	static readonly PUT_DESTINATION = "logs:PutDestination";
	/** [Write] logs:PutDestinationPolicy */
	static readonly PUT_DESTINATION_POLICY = "logs:PutDestinationPolicy";
	/** [Write] logs:PutIndexPolicy */
	static readonly PUT_INDEX_POLICY = "logs:PutIndexPolicy";
	/** [Write] logs:PutIntegration */
	static readonly PUT_INTEGRATION = "logs:PutIntegration";
	/** [Write] logs:PutLogEvents */
	static readonly PUT_LOG_EVENTS = "logs:PutLogEvents";
	/** [Write] logs:PutLogGroupDeletionProtection */
	static readonly PUT_LOG_GROUP_DELETION_PROTECTION =
		"logs:PutLogGroupDeletionProtection";
	/** [Write] logs:PutMetricFilter */
	static readonly PUT_METRIC_FILTER = "logs:PutMetricFilter";
	/** [Write] logs:PutPipelineRule */
	static readonly PUT_PIPELINE_RULE = "logs:PutPipelineRule";
	/** [Write] logs:PutQueryDefinition */
	static readonly PUT_QUERY_DEFINITION = "logs:PutQueryDefinition";
	/** [PermissionManagement] logs:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "logs:PutResourcePolicy";
	/** [Write] logs:PutRetentionPolicy */
	static readonly PUT_RETENTION_POLICY = "logs:PutRetentionPolicy";
	/** [Write] logs:PutStorageTierPolicy */
	static readonly PUT_STORAGE_TIER_POLICY = "logs:PutStorageTierPolicy";
	/** [Write] logs:PutSubscriptionFilter */
	static readonly PUT_SUBSCRIPTION_FILTER = "logs:PutSubscriptionFilter";
	/** [Write] logs:PutSyslogConfiguration */
	static readonly PUT_SYSLOG_CONFIGURATION = "logs:PutSyslogConfiguration";
	/** [Write] logs:PutTransformer */
	static readonly PUT_TRANSFORMER = "logs:PutTransformer";
	/** [Read] logs:StartLiveTail */
	static readonly START_LIVE_TAIL = "logs:StartLiveTail";
	/** [Read] logs:StartQuery */
	static readonly START_QUERY = "logs:StartQuery";
	/** [Read] logs:StopLiveTail */
	static readonly STOP_LIVE_TAIL = "logs:StopLiveTail";
	/** [Read] logs:StopQuery */
	static readonly STOP_QUERY = "logs:StopQuery";
	/** [Tagging] logs:TagLogGroup */
	static readonly TAG_LOG_GROUP = "logs:TagLogGroup";
	/** [Tagging] logs:TagResource */
	static readonly TAG_RESOURCE = "logs:TagResource";
	/** [Read] logs:TestMetricFilter */
	static readonly TEST_METRIC_FILTER = "logs:TestMetricFilter";
	/** [Read] logs:TestTransformer */
	static readonly TEST_TRANSFORMER = "logs:TestTransformer";
	/** [Read] logs:Unmask */
	static readonly UNMASK = "logs:Unmask";
	/** [Tagging] logs:UntagLogGroup */
	static readonly UNTAG_LOG_GROUP = "logs:UntagLogGroup";
	/** [Tagging] logs:UntagResource */
	static readonly UNTAG_RESOURCE = "logs:UntagResource";
	/** [Write] logs:UpdateAnomaly */
	static readonly UPDATE_ANOMALY = "logs:UpdateAnomaly";
	/** [Write] logs:UpdateDeliveryConfiguration */
	static readonly UPDATE_DELIVERY_CONFIGURATION =
		"logs:UpdateDeliveryConfiguration";
	/** [Write] logs:UpdateLogAnomalyDetector */
	static readonly UPDATE_LOG_ANOMALY_DETECTOR = "logs:UpdateLogAnomalyDetector";
	/** [Write] logs:UpdateLogDelivery */
	static readonly UPDATE_LOG_DELIVERY = "logs:UpdateLogDelivery";
	/** [Write] logs:UpdateLookupTable */
	static readonly UPDATE_LOOKUP_TABLE = "logs:UpdateLookupTable";
	/** [Write] logs:UpdateScheduledQuery */
	static readonly UPDATE_SCHEDULED_QUERY = "logs:UpdateScheduledQuery";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		LogsActions.FILTER_LOG_EVENTS,
		LogsActions.GET_DATA_PROTECTION_POLICY,
		LogsActions.GET_DELIVERY,
		LogsActions.GET_DELIVERY_DESTINATION,
		LogsActions.GET_DELIVERY_DESTINATION_POLICY,
		LogsActions.GET_DELIVERY_SOURCE,
		LogsActions.GET_INTEGRATION,
		LogsActions.GET_LOG_ANOMALY_DETECTOR,
		LogsActions.GET_LOG_DELIVERY,
		LogsActions.GET_LOG_EVENTS,
		LogsActions.GET_LOG_FIELDS,
		LogsActions.GET_LOG_GROUP_FIELDS,
		LogsActions.GET_LOG_RECORD,
		LogsActions.GET_LOOKUP_TABLE,
		LogsActions.GET_QUERY_RESULTS,
		LogsActions.GET_SCHEDULED_QUERY,
		LogsActions.GET_SCHEDULED_QUERY_HISTORY,
		LogsActions.GET_STORAGE_TIER_POLICY,
		LogsActions.GET_TRANSFORMER,
		LogsActions.START_LIVE_TAIL,
		LogsActions.START_QUERY,
		LogsActions.STOP_LIVE_TAIL,
		LogsActions.STOP_QUERY,
		LogsActions.TEST_METRIC_FILTER,
		LogsActions.TEST_TRANSFORMER,
		LogsActions.UNMASK,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		LogsActions.ASSOCIATE_KMS_KEY,
		LogsActions.ASSOCIATE_SOURCE_TO_S3_TABLE_INTEGRATION,
		LogsActions.CALL_WITH_BEARER_TOKEN,
		LogsActions.CANCEL_EXPORT_TASK,
		LogsActions.CANCEL_IMPORT_TASK,
		LogsActions.CREATE_DELIVERY,
		LogsActions.CREATE_EXPORT_TASK,
		LogsActions.CREATE_IMPORT_TASK,
		LogsActions.CREATE_LOG_ANOMALY_DETECTOR,
		LogsActions.CREATE_LOG_DELIVERY,
		LogsActions.CREATE_LOG_GROUP,
		LogsActions.CREATE_LOG_STREAM,
		LogsActions.CREATE_LOOKUP_TABLE,
		LogsActions.CREATE_SCHEDULED_QUERY,
		LogsActions.DELETE_ACCOUNT_POLICY,
		LogsActions.DELETE_DATA_PROTECTION_POLICY,
		LogsActions.DELETE_DELIVERY,
		LogsActions.DELETE_DELIVERY_DESTINATION,
		LogsActions.DELETE_DELIVERY_DESTINATION_POLICY,
		LogsActions.DELETE_DELIVERY_SOURCE,
		LogsActions.DELETE_DESTINATION,
		LogsActions.DELETE_INDEX_POLICY,
		LogsActions.DELETE_INTEGRATION,
		LogsActions.DELETE_LOG_ANOMALY_DETECTOR,
		LogsActions.DELETE_LOG_DELIVERY,
		LogsActions.DELETE_LOG_GROUP,
		LogsActions.DELETE_LOG_STREAM,
		LogsActions.DELETE_LOOKUP_TABLE,
		LogsActions.DELETE_METRIC_FILTER,
		LogsActions.DELETE_PIPELINE_RULE,
		LogsActions.DELETE_QUERY_DEFINITION,
		LogsActions.DELETE_RETENTION_POLICY,
		LogsActions.DELETE_SCHEDULED_QUERY,
		LogsActions.DELETE_SUBSCRIPTION_FILTER,
		LogsActions.DELETE_SYSLOG_CONFIGURATION,
		LogsActions.DELETE_TRANSFORMER,
		LogsActions.DISASSOCIATE_KMS_KEY,
		LogsActions.DISASSOCIATE_SOURCE_FROM_S3_TABLE_INTEGRATION,
		LogsActions.INTEGRATE_WITH_S3_TABLE,
		LogsActions.LINK,
		LogsActions.PROCESS_WITH_PIPELINE,
		LogsActions.PUT_ACCOUNT_POLICY,
		LogsActions.PUT_BEARER_TOKEN_AUTHENTICATION,
		LogsActions.PUT_DATA_PROTECTION_POLICY,
		LogsActions.PUT_DELIVERY_DESTINATION,
		LogsActions.PUT_DELIVERY_DESTINATION_POLICY,
		LogsActions.PUT_DELIVERY_SOURCE,
		LogsActions.PUT_DESTINATION,
		LogsActions.PUT_DESTINATION_POLICY,
		LogsActions.PUT_INDEX_POLICY,
		LogsActions.PUT_INTEGRATION,
		LogsActions.PUT_LOG_EVENTS,
		LogsActions.PUT_LOG_GROUP_DELETION_PROTECTION,
		LogsActions.PUT_METRIC_FILTER,
		LogsActions.PUT_PIPELINE_RULE,
		LogsActions.PUT_QUERY_DEFINITION,
		LogsActions.PUT_RETENTION_POLICY,
		LogsActions.PUT_STORAGE_TIER_POLICY,
		LogsActions.PUT_SUBSCRIPTION_FILTER,
		LogsActions.PUT_SYSLOG_CONFIGURATION,
		LogsActions.PUT_TRANSFORMER,
		LogsActions.UPDATE_ANOMALY,
		LogsActions.UPDATE_DELIVERY_CONFIGURATION,
		LogsActions.UPDATE_LOG_ANOMALY_DETECTOR,
		LogsActions.UPDATE_LOG_DELIVERY,
		LogsActions.UPDATE_LOOKUP_TABLE,
		LogsActions.UPDATE_SCHEDULED_QUERY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		LogsActions.DESCRIBE_ACCOUNT_POLICIES,
		LogsActions.DESCRIBE_CONFIGURATION_TEMPLATES,
		LogsActions.DESCRIBE_DELIVERIES,
		LogsActions.DESCRIBE_DELIVERY_DESTINATIONS,
		LogsActions.DESCRIBE_DELIVERY_SOURCES,
		LogsActions.DESCRIBE_DESTINATIONS,
		LogsActions.DESCRIBE_EXPORT_TASKS,
		LogsActions.DESCRIBE_FIELD_INDEXES,
		LogsActions.DESCRIBE_IMPORT_TASK_BATCHES,
		LogsActions.DESCRIBE_IMPORT_TASKS,
		LogsActions.DESCRIBE_INDEX_POLICIES,
		LogsActions.DESCRIBE_LOG_GROUPS,
		LogsActions.DESCRIBE_LOG_STREAMS,
		LogsActions.DESCRIBE_LOOKUP_TABLES,
		LogsActions.DESCRIBE_METRIC_FILTERS,
		LogsActions.DESCRIBE_QUERIES,
		LogsActions.DESCRIBE_QUERY_DEFINITIONS,
		LogsActions.DESCRIBE_RESOURCE_POLICIES,
		LogsActions.DESCRIBE_SUBSCRIPTION_FILTERS,
		LogsActions.LIST_AGGREGATE_LOG_GROUP_SUMMARIES,
		LogsActions.LIST_ANOMALIES,
		LogsActions.LIST_ENTITIES_FOR_LOG_GROUP,
		LogsActions.LIST_INTEGRATIONS,
		LogsActions.LIST_LOG_ANOMALY_DETECTORS,
		LogsActions.LIST_LOG_DELIVERIES,
		LogsActions.LIST_LOG_GROUPS,
		LogsActions.LIST_LOG_GROUPS_FOR_ENTITY,
		LogsActions.LIST_LOG_GROUPS_FOR_QUERY,
		LogsActions.LIST_SCHEDULED_QUERIES,
		LogsActions.LIST_SOURCES_FOR_S3_TABLE_INTEGRATION,
		LogsActions.LIST_SYSLOG_CONFIGURATIONS,
		LogsActions.LIST_TAGS_FOR_RESOURCE,
		LogsActions.LIST_TAGS_LOG_GROUP,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		LogsActions.DELETE_RESOURCE_POLICY,
		LogsActions.PUT_RESOURCE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		LogsActions.TAG_LOG_GROUP,
		LogsActions.TAG_RESOURCE,
		LogsActions.UNTAG_LOG_GROUP,
		LogsActions.UNTAG_RESOURCE,
	];
}

const AnomalyDetectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):anomaly-detector:(?<detectorId>[^:/?]+)$",
);
const DeliveryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):delivery:(?<deliveryName>[^:/?]+)$",
);
const DeliveryDestinationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):delivery-destination:(?<deliveryDestinationName>[^:/?]+)$",
);
const DeliverySourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):delivery-source:(?<deliverySourceName>[^:/?]+)$",
);
const DestinationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):destination:(?<destinationName>[^:/?]+)$",
);
const LogGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):log-group:(?<logGroupName>[^:/?]+)$",
);
const LogStreamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):log-group:(?<logGroupName>[^:/?]+):log-stream:(?<logStreamName>[^:/?]+)$",
);
const LookupTableArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):lookup-table:(?<lookupTableName>[^:/?]+)$",
);
const ScheduledQueryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):scheduled-query:(?<scheduledQueryId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for logs resources.
 */
export class LogsResources {
	/**
	 * Builds an ARN for the anomaly-detector resource.
	 */
	static anomalyDetector(props: {
		/** The DetectorId component of the ARN. */
		readonly detectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:logs:${props.region ?? "*"}:${props.account ?? "*"}:anomaly-detector:${props.detectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the anomaly-detector resource.
	 */
	static isValidAnomalyDetectorArn(arn: string): boolean {
		return AnomalyDetectorArnRegex.test(arn);
	}

	/**
	 * Parses a anomaly-detector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAnomalyDetectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		detectorId: string;
	} {
		const match = AnomalyDetectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid anomaly-detector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			detectorId: match.groups!.detectorId,
		};
	}

	/**
	 * Builds an ARN for the delivery resource.
	 */
	static delivery(props: {
		/** The DeliveryName component of the ARN. */
		readonly deliveryName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:logs:${props.region ?? "*"}:${props.account ?? "*"}:delivery:${props.deliveryName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the delivery resource.
	 */
	static isValidDeliveryArn(arn: string): boolean {
		return DeliveryArnRegex.test(arn);
	}

	/**
	 * Parses a delivery ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeliveryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deliveryName: string;
	} {
		const match = DeliveryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid delivery ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deliveryName: match.groups!.deliveryName,
		};
	}

	/**
	 * Builds an ARN for the delivery-destination resource.
	 */
	static deliveryDestination(props: {
		/** The DeliveryDestinationName component of the ARN. */
		readonly deliveryDestinationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:logs:${props.region ?? "*"}:${props.account ?? "*"}:delivery-destination:${props.deliveryDestinationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the delivery-destination resource.
	 */
	static isValidDeliveryDestinationArn(arn: string): boolean {
		return DeliveryDestinationArnRegex.test(arn);
	}

	/**
	 * Parses a delivery-destination ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeliveryDestinationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deliveryDestinationName: string;
	} {
		const match = DeliveryDestinationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid delivery-destination ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deliveryDestinationName: match.groups!.deliveryDestinationName,
		};
	}

	/**
	 * Builds an ARN for the delivery-source resource.
	 */
	static deliverySource(props: {
		/** The DeliverySourceName component of the ARN. */
		readonly deliverySourceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:logs:${props.region ?? "*"}:${props.account ?? "*"}:delivery-source:${props.deliverySourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the delivery-source resource.
	 */
	static isValidDeliverySourceArn(arn: string): boolean {
		return DeliverySourceArnRegex.test(arn);
	}

	/**
	 * Parses a delivery-source ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeliverySourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deliverySourceName: string;
	} {
		const match = DeliverySourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid delivery-source ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deliverySourceName: match.groups!.deliverySourceName,
		};
	}

	/**
	 * Builds an ARN for the destination resource.
	 */
	static destination(props: {
		/** The DestinationName component of the ARN. */
		readonly destinationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:logs:${props.region ?? "*"}:${props.account ?? "*"}:destination:${props.destinationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the destination resource.
	 */
	static isValidDestinationArn(arn: string): boolean {
		return DestinationArnRegex.test(arn);
	}

	/**
	 * Parses a destination ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDestinationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		destinationName: string;
	} {
		const match = DestinationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid destination ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			destinationName: match.groups!.destinationName,
		};
	}

	/**
	 * Builds an ARN for the log-group resource.
	 */
	static logGroup(props: {
		/** The LogGroupName component of the ARN. */
		readonly logGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:logs:${props.region ?? "*"}:${props.account ?? "*"}:log-group:${props.logGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the log-group resource.
	 */
	static isValidLogGroupArn(arn: string): boolean {
		return LogGroupArnRegex.test(arn);
	}

	/**
	 * Parses a log-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLogGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		logGroupName: string;
	} {
		const match = LogGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid log-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			logGroupName: match.groups!.logGroupName,
		};
	}

	/**
	 * Builds an ARN for the log-stream resource.
	 */
	static logStream(props: {
		/** The LogGroupName component of the ARN. */
		readonly logGroupName: string;
		/** The LogStreamName component of the ARN. */
		readonly logStreamName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:logs:${props.region ?? "*"}:${props.account ?? "*"}:log-group:${props.logGroupName}:log-stream:${props.logStreamName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the log-stream resource.
	 */
	static isValidLogStreamArn(arn: string): boolean {
		return LogStreamArnRegex.test(arn);
	}

	/**
	 * Parses a log-stream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLogStreamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		logGroupName: string;
		logStreamName: string;
	} {
		const match = LogStreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid log-stream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			logGroupName: match.groups!.logGroupName,
			logStreamName: match.groups!.logStreamName,
		};
	}

	/**
	 * Builds an ARN for the lookup-table resource.
	 */
	static lookupTable(props: {
		/** The LookupTableName component of the ARN. */
		readonly lookupTableName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:logs:${props.region ?? "*"}:${props.account ?? "*"}:lookup-table:${props.lookupTableName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the lookup-table resource.
	 */
	static isValidLookupTableArn(arn: string): boolean {
		return LookupTableArnRegex.test(arn);
	}

	/**
	 * Parses a lookup-table ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLookupTableArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		lookupTableName: string;
	} {
		const match = LookupTableArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid lookup-table ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			lookupTableName: match.groups!.lookupTableName,
		};
	}

	/**
	 * Builds an ARN for the scheduled-query resource.
	 */
	static scheduledQuery(props: {
		/** The ScheduledQueryId component of the ARN. */
		readonly scheduledQueryId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:logs:${props.region ?? "*"}:${props.account ?? "*"}:scheduled-query:${props.scheduledQueryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the scheduled-query resource.
	 */
	static isValidScheduledQueryArn(arn: string): boolean {
		return ScheduledQueryArnRegex.test(arn);
	}

	/**
	 * Parses a scheduled-query ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScheduledQueryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		scheduledQueryId: string;
	} {
		const match = ScheduledQueryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid scheduled-query ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scheduledQueryId: match.groups!.scheduledQueryId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for logs.
 */
export class LogsOperations {
	/** IAM actions required for the AssociateKmsKey API call. */
	static readonly ASSOCIATE_KMS_KEY: string[] = ["logs:AssociateKmsKey"];
	/** IAM actions required for the AssociateSourceToS3TableIntegration API call. */
	static readonly ASSOCIATE_SOURCE_TO_S3_TABLE_INTEGRATION: string[] = [
		"logs:AssociateSourceToS3TableIntegration",
	];
	/** IAM actions required for the CancelExportTask API call. */
	static readonly CANCEL_EXPORT_TASK: string[] = ["logs:CancelExportTask"];
	/** IAM actions required for the CancelImportTask API call. */
	static readonly CANCEL_IMPORT_TASK: string[] = ["logs:CancelImportTask"];
	/** IAM actions required for the CreateDelivery API call. */
	static readonly CREATE_DELIVERY: string[] = [
		"logs:CreateDelivery",
		"logs:TagResource",
	];
	/** IAM actions required for the CreateExportTask API call. */
	static readonly CREATE_EXPORT_TASK: string[] = ["logs:CreateExportTask"];
	/** IAM actions required for the CreateImportTask API call. */
	static readonly CREATE_IMPORT_TASK: string[] = [
		"logs:CreateImportTask",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateLogAnomalyDetector API call. */
	static readonly CREATE_LOG_ANOMALY_DETECTOR: string[] = [
		"logs:CreateLogAnomalyDetector",
		"logs:TagResource",
	];
	/** IAM actions required for the CreateLogGroup API call. */
	static readonly CREATE_LOG_GROUP: string[] = [
		"logs:CreateLogGroup",
		"logs:TagLogGroup",
		"logs:TagResource",
	];
	/** IAM actions required for the CreateLogStream API call. */
	static readonly CREATE_LOG_STREAM: string[] = ["logs:CreateLogStream"];
	/** IAM actions required for the CreateLookupTable API call. */
	static readonly CREATE_LOOKUP_TABLE: string[] = [
		"logs:CreateLookupTable",
		"logs:GetQueryResults",
		"logs:TagResource",
	];
	/** IAM actions required for the CreateScheduledQuery API call. */
	static readonly CREATE_SCHEDULED_QUERY: string[] = [
		"logs:CreateScheduledQuery",
		"iam:PassRole",
		"logs:TagResource",
	];
	/** IAM actions required for the DeleteAccountPolicy API call. */
	static readonly DELETE_ACCOUNT_POLICY: string[] = [
		"logs:DeleteAccountPolicy",
		"logs:DeleteDataProtectionPolicy",
		"logs:DeleteIndexPolicy",
		"logs:DeleteRetentionPolicy",
		"logs:DeleteSubscriptionFilter",
		"logs:DeleteTransformer",
	];
	/** IAM actions required for the DeleteDataProtectionPolicy API call. */
	static readonly DELETE_DATA_PROTECTION_POLICY: string[] = [
		"logs:DeleteDataProtectionPolicy",
	];
	/** IAM actions required for the DeleteDelivery API call. */
	static readonly DELETE_DELIVERY: string[] = ["logs:DeleteDelivery"];
	/** IAM actions required for the DeleteDeliveryDestination API call. */
	static readonly DELETE_DELIVERY_DESTINATION: string[] = [
		"logs:DeleteDeliveryDestination",
	];
	/** IAM actions required for the DeleteDeliveryDestinationPolicy API call. */
	static readonly DELETE_DELIVERY_DESTINATION_POLICY: string[] = [
		"logs:DeleteDeliveryDestinationPolicy",
	];
	/** IAM actions required for the DeleteDeliverySource API call. */
	static readonly DELETE_DELIVERY_SOURCE: string[] = [
		"logs:DeleteDeliverySource",
	];
	/** IAM actions required for the DeleteDestination API call. */
	static readonly DELETE_DESTINATION: string[] = ["logs:DeleteDestination"];
	/** IAM actions required for the DeleteIndexPolicy API call. */
	static readonly DELETE_INDEX_POLICY: string[] = ["logs:DeleteIndexPolicy"];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DELETE_INTEGRATION: string[] = ["logs:DeleteIntegration"];
	/** IAM actions required for the DeleteLogAnomalyDetector API call. */
	static readonly DELETE_LOG_ANOMALY_DETECTOR: string[] = [
		"logs:DeleteLogAnomalyDetector",
	];
	/** IAM actions required for the DeleteLogGroup API call. */
	static readonly DELETE_LOG_GROUP: string[] = ["logs:DeleteLogGroup"];
	/** IAM actions required for the DeleteLogStream API call. */
	static readonly DELETE_LOG_STREAM: string[] = ["logs:DeleteLogStream"];
	/** IAM actions required for the DeleteLookupTable API call. */
	static readonly DELETE_LOOKUP_TABLE: string[] = ["logs:DeleteLookupTable"];
	/** IAM actions required for the DeleteMetricFilter API call. */
	static readonly DELETE_METRIC_FILTER: string[] = ["logs:DeleteMetricFilter"];
	/** IAM actions required for the DeleteQueryDefinition API call. */
	static readonly DELETE_QUERY_DEFINITION: string[] = [
		"logs:DeleteQueryDefinition",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"logs:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteRetentionPolicy API call. */
	static readonly DELETE_RETENTION_POLICY: string[] = [
		"logs:DeleteRetentionPolicy",
	];
	/** IAM actions required for the DeleteScheduledQuery API call. */
	static readonly DELETE_SCHEDULED_QUERY: string[] = [
		"logs:DeleteScheduledQuery",
	];
	/** IAM actions required for the DeleteSubscriptionFilter API call. */
	static readonly DELETE_SUBSCRIPTION_FILTER: string[] = [
		"logs:DeleteSubscriptionFilter",
	];
	/** IAM actions required for the DeleteSyslogConfiguration API call. */
	static readonly DELETE_SYSLOG_CONFIGURATION: string[] = [
		"logs:DeleteSyslogConfiguration",
	];
	/** IAM actions required for the DeleteTransformer API call. */
	static readonly DELETE_TRANSFORMER: string[] = ["logs:DeleteTransformer"];
	/** IAM actions required for the DescribeAccountPolicies API call. */
	static readonly DESCRIBE_ACCOUNT_POLICIES: string[] = [
		"logs:DescribeAccountPolicies",
	];
	/** IAM actions required for the DescribeConfigurationTemplates API call. */
	static readonly DESCRIBE_CONFIGURATION_TEMPLATES: string[] = [
		"logs:DescribeConfigurationTemplates",
	];
	/** IAM actions required for the DescribeDeliveries API call. */
	static readonly DESCRIBE_DELIVERIES: string[] = ["logs:DescribeDeliveries"];
	/** IAM actions required for the DescribeDeliveryDestinations API call. */
	static readonly DESCRIBE_DELIVERY_DESTINATIONS: string[] = [
		"logs:DescribeDeliveryDestinations",
	];
	/** IAM actions required for the DescribeDeliverySources API call. */
	static readonly DESCRIBE_DELIVERY_SOURCES: string[] = [
		"logs:DescribeDeliverySources",
	];
	/** IAM actions required for the DescribeDestinations API call. */
	static readonly DESCRIBE_DESTINATIONS: string[] = [
		"logs:DescribeDestinations",
	];
	/** IAM actions required for the DescribeExportTasks API call. */
	static readonly DESCRIBE_EXPORT_TASKS: string[] = [
		"logs:DescribeExportTasks",
	];
	/** IAM actions required for the DescribeFieldIndexes API call. */
	static readonly DESCRIBE_FIELD_INDEXES: string[] = [
		"logs:DescribeFieldIndexes",
	];
	/** IAM actions required for the DescribeImportTaskBatches API call. */
	static readonly DESCRIBE_IMPORT_TASK_BATCHES: string[] = [
		"logs:DescribeImportTaskBatches",
	];
	/** IAM actions required for the DescribeImportTasks API call. */
	static readonly DESCRIBE_IMPORT_TASKS: string[] = [
		"logs:DescribeImportTasks",
	];
	/** IAM actions required for the DescribeIndexPolicies API call. */
	static readonly DESCRIBE_INDEX_POLICIES: string[] = [
		"logs:DescribeIndexPolicies",
	];
	/** IAM actions required for the DescribeLogGroups API call. */
	static readonly DESCRIBE_LOG_GROUPS: string[] = ["logs:DescribeLogGroups"];
	/** IAM actions required for the DescribeLogStreams API call. */
	static readonly DESCRIBE_LOG_STREAMS: string[] = ["logs:DescribeLogStreams"];
	/** IAM actions required for the DescribeLookupTables API call. */
	static readonly DESCRIBE_LOOKUP_TABLES: string[] = [
		"logs:DescribeLookupTables",
	];
	/** IAM actions required for the DescribeMetricFilters API call. */
	static readonly DESCRIBE_METRIC_FILTERS: string[] = [
		"logs:DescribeMetricFilters",
	];
	/** IAM actions required for the DescribeQueries API call. */
	static readonly DESCRIBE_QUERIES: string[] = [
		"logs:DescribeQueries",
		"logs:FilterLogEvents",
	];
	/** IAM actions required for the DescribeQueryDefinitions API call. */
	static readonly DESCRIBE_QUERY_DEFINITIONS: string[] = [
		"logs:DescribeQueryDefinitions",
	];
	/** IAM actions required for the DescribeResourcePolicies API call. */
	static readonly DESCRIBE_RESOURCE_POLICIES: string[] = [
		"logs:DescribeResourcePolicies",
	];
	/** IAM actions required for the DescribeSubscriptionFilters API call. */
	static readonly DESCRIBE_SUBSCRIPTION_FILTERS: string[] = [
		"logs:DescribeSubscriptionFilters",
	];
	/** IAM actions required for the DisassociateKmsKey API call. */
	static readonly DISASSOCIATE_KMS_KEY: string[] = ["logs:DisassociateKmsKey"];
	/** IAM actions required for the DisassociateSourceFromS3TableIntegration API call. */
	static readonly DISASSOCIATE_SOURCE_FROM_S3_TABLE_INTEGRATION: string[] = [
		"logs:DisassociateSourceFromS3TableIntegration",
	];
	/** IAM actions required for the FilterLogEvents API call. */
	static readonly FILTER_LOG_EVENTS: string[] = [
		"logs:FilterLogEvents",
		"logs:Unmask",
	];
	/** IAM actions required for the GetDataProtectionPolicy API call. */
	static readonly GET_DATA_PROTECTION_POLICY: string[] = [
		"logs:GetDataProtectionPolicy",
	];
	/** IAM actions required for the GetDelivery API call. */
	static readonly GET_DELIVERY: string[] = ["logs:GetDelivery"];
	/** IAM actions required for the GetDeliveryDestination API call. */
	static readonly GET_DELIVERY_DESTINATION: string[] = [
		"logs:GetDeliveryDestination",
	];
	/** IAM actions required for the GetDeliveryDestinationPolicy API call. */
	static readonly GET_DELIVERY_DESTINATION_POLICY: string[] = [
		"logs:GetDeliveryDestinationPolicy",
	];
	/** IAM actions required for the GetDeliverySource API call. */
	static readonly GET_DELIVERY_SOURCE: string[] = ["logs:GetDeliverySource"];
	/** IAM actions required for the GetIntegration API call. */
	static readonly GET_INTEGRATION: string[] = ["logs:GetIntegration"];
	/** IAM actions required for the GetLogAnomalyDetector API call. */
	static readonly GET_LOG_ANOMALY_DETECTOR: string[] = [
		"logs:GetLogAnomalyDetector",
	];
	/** IAM actions required for the GetLogEvents API call. */
	static readonly GET_LOG_EVENTS: string[] = [
		"logs:GetLogEvents",
		"logs:Unmask",
	];
	/** IAM actions required for the GetLogFields API call. */
	static readonly GET_LOG_FIELDS: string[] = ["logs:GetLogFields"];
	/** IAM actions required for the GetLogGroupFields API call. */
	static readonly GET_LOG_GROUP_FIELDS: string[] = [
		"logs:FilterLogEvents",
		"logs:GetLogGroupFields",
	];
	/** IAM actions required for the GetLogObject API call. */
	static readonly GET_LOG_OBJECT: string[] = [];
	/** IAM actions required for the GetLogRecord API call. */
	static readonly GET_LOG_RECORD: string[] = [
		"logs:FilterLogEvents",
		"logs:GetLogRecord",
		"logs:Unmask",
	];
	/** IAM actions required for the GetLookupTable API call. */
	static readonly GET_LOOKUP_TABLE: string[] = ["logs:GetLookupTable"];
	/** IAM actions required for the GetQueryResults API call. */
	static readonly GET_QUERY_RESULTS: string[] = [
		"logs:FilterLogEvents",
		"logs:GetQueryResults",
		"logs:Unmask",
	];
	/** IAM actions required for the GetScheduledQuery API call. */
	static readonly GET_SCHEDULED_QUERY: string[] = ["logs:GetScheduledQuery"];
	/** IAM actions required for the GetScheduledQueryHistory API call. */
	static readonly GET_SCHEDULED_QUERY_HISTORY: string[] = [
		"logs:GetScheduledQueryHistory",
	];
	/** IAM actions required for the GetStorageTierPolicy API call. */
	static readonly GET_STORAGE_TIER_POLICY: string[] = [
		"logs:GetStorageTierPolicy",
	];
	/** IAM actions required for the GetTransformer API call. */
	static readonly GET_TRANSFORMER: string[] = ["logs:GetTransformer"];
	/** IAM actions required for the ListAggregateLogGroupSummaries API call. */
	static readonly LIST_AGGREGATE_LOG_GROUP_SUMMARIES: string[] = [
		"logs:ListAggregateLogGroupSummaries",
	];
	/** IAM actions required for the ListAnomalies API call. */
	static readonly LIST_ANOMALIES: string[] = ["logs:ListAnomalies"];
	/** IAM actions required for the ListIntegrations API call. */
	static readonly LIST_INTEGRATIONS: string[] = ["logs:ListIntegrations"];
	/** IAM actions required for the ListLogAnomalyDetectors API call. */
	static readonly LIST_LOG_ANOMALY_DETECTORS: string[] = [
		"logs:ListLogAnomalyDetectors",
	];
	/** IAM actions required for the ListLogGroups API call. */
	static readonly LIST_LOG_GROUPS: string[] = [
		"logs:DescribeLogGroups",
		"logs:ListLogGroups",
	];
	/** IAM actions required for the ListLogGroupsForQuery API call. */
	static readonly LIST_LOG_GROUPS_FOR_QUERY: string[] = [
		"logs:ListLogGroupsForQuery",
	];
	/** IAM actions required for the ListScheduledQueries API call. */
	static readonly LIST_SCHEDULED_QUERIES: string[] = [
		"logs:ListScheduledQueries",
	];
	/** IAM actions required for the ListSourcesForS3TableIntegration API call. */
	static readonly LIST_SOURCES_FOR_S3_TABLE_INTEGRATION: string[] = [
		"logs:ListSourcesForS3TableIntegration",
	];
	/** IAM actions required for the ListSyslogConfigurations API call. */
	static readonly LIST_SYSLOG_CONFIGURATIONS: string[] = [
		"logs:ListSyslogConfigurations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"logs:ListTagsForResource",
	];
	/** IAM actions required for the ListTagsLogGroup API call. */
	static readonly LIST_TAGS_LOG_GROUP: string[] = ["logs:ListTagsLogGroup"];
	/** IAM actions required for the PutAccountPolicy API call. */
	static readonly PUT_ACCOUNT_POLICY: string[] = [
		"iam:PassRole",
		"logs:PutAccountPolicy",
		"logs:PutDataProtectionPolicy",
		"logs:PutIndexPolicy",
		"logs:PutRetentionPolicy",
		"logs:PutSubscriptionFilter",
		"logs:PutTransformer",
	];
	/** IAM actions required for the PutBearerTokenAuthentication API call. */
	static readonly PUT_BEARER_TOKEN_AUTHENTICATION: string[] = [
		"logs:PutBearerTokenAuthentication",
	];
	/** IAM actions required for the PutDataProtectionPolicy API call. */
	static readonly PUT_DATA_PROTECTION_POLICY: string[] = [
		"logs:PutDataProtectionPolicy",
	];
	/** IAM actions required for the PutDeliveryDestination API call. */
	static readonly PUT_DELIVERY_DESTINATION: string[] = [
		"logs:PutDeliveryDestination",
		"logs:TagResource",
	];
	/** IAM actions required for the PutDeliveryDestinationPolicy API call. */
	static readonly PUT_DELIVERY_DESTINATION_POLICY: string[] = [
		"logs:PutDeliveryDestinationPolicy",
	];
	/** IAM actions required for the PutDeliverySource API call. */
	static readonly PUT_DELIVERY_SOURCE: string[] = [
		"logs:PutDeliverySource",
		"logs:TagResource",
	];
	/** IAM actions required for the PutDestination API call. */
	static readonly PUT_DESTINATION: string[] = [
		"iam:PassRole",
		"logs:PutDestination",
		"logs:TagResource",
	];
	/** IAM actions required for the PutDestinationPolicy API call. */
	static readonly PUT_DESTINATION_POLICY: string[] = [
		"logs:PutDestinationPolicy",
	];
	/** IAM actions required for the PutIndexPolicy API call. */
	static readonly PUT_INDEX_POLICY: string[] = ["logs:PutIndexPolicy"];
	/** IAM actions required for the PutIntegration API call. */
	static readonly PUT_INTEGRATION: string[] = ["logs:PutIntegration"];
	/** IAM actions required for the PutLogEvents API call. */
	static readonly PUT_LOG_EVENTS: string[] = ["logs:PutLogEvents"];
	/** IAM actions required for the PutLogGroupDeletionProtection API call. */
	static readonly PUT_LOG_GROUP_DELETION_PROTECTION: string[] = [
		"logs:PutLogGroupDeletionProtection",
	];
	/** IAM actions required for the PutMetricFilter API call. */
	static readonly PUT_METRIC_FILTER: string[] = ["logs:PutMetricFilter"];
	/** IAM actions required for the PutQueryDefinition API call. */
	static readonly PUT_QUERY_DEFINITION: string[] = ["logs:PutQueryDefinition"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = ["logs:PutResourcePolicy"];
	/** IAM actions required for the PutRetentionPolicy API call. */
	static readonly PUT_RETENTION_POLICY: string[] = ["logs:PutRetentionPolicy"];
	/** IAM actions required for the PutStorageTierPolicy API call. */
	static readonly PUT_STORAGE_TIER_POLICY: string[] = [
		"logs:PutStorageTierPolicy",
	];
	/** IAM actions required for the PutSubscriptionFilter API call. */
	static readonly PUT_SUBSCRIPTION_FILTER: string[] = [
		"iam:PassRole",
		"logs:PutSubscriptionFilter",
	];
	/** IAM actions required for the PutSyslogConfiguration API call. */
	static readonly PUT_SYSLOG_CONFIGURATION: string[] = [
		"logs:PutSyslogConfiguration",
	];
	/** IAM actions required for the PutTransformer API call. */
	static readonly PUT_TRANSFORMER: string[] = ["logs:PutTransformer"];
	/** IAM actions required for the StartLiveTail API call. */
	static readonly START_LIVE_TAIL: string[] = [];
	/** IAM actions required for the StartQuery API call. */
	static readonly START_QUERY: string[] = [
		"logs:DescribeLogGroups",
		"logs:DescribeQueryDefinitions",
		"logs:FilterLogEvents",
		"logs:StartQuery",
		"logs:Unmask",
	];
	/** IAM actions required for the StopQuery API call. */
	static readonly STOP_QUERY: string[] = [
		"logs:FilterLogEvents",
		"logs:StopQuery",
	];
	/** IAM actions required for the TagLogGroup API call. */
	static readonly TAG_LOG_GROUP: string[] = ["logs:TagLogGroup"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["logs:TagResource"];
	/** IAM actions required for the TestMetricFilter API call. */
	static readonly TEST_METRIC_FILTER: string[] = ["logs:TestMetricFilter"];
	/** IAM actions required for the TestTransformer API call. */
	static readonly TEST_TRANSFORMER: string[] = ["logs:TestTransformer"];
	/** IAM actions required for the UntagLogGroup API call. */
	static readonly UNTAG_LOG_GROUP: string[] = ["logs:UntagLogGroup"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["logs:UntagResource"];
	/** IAM actions required for the UpdateAnomaly API call. */
	static readonly UPDATE_ANOMALY: string[] = ["logs:UpdateAnomaly"];
	/** IAM actions required for the UpdateDeliveryConfiguration API call. */
	static readonly UPDATE_DELIVERY_CONFIGURATION: string[] = [
		"logs:UpdateDeliveryConfiguration",
	];
	/** IAM actions required for the UpdateLogAnomalyDetector API call. */
	static readonly UPDATE_LOG_ANOMALY_DETECTOR: string[] = [
		"logs:UpdateLogAnomalyDetector",
	];
	/** IAM actions required for the UpdateLookupTable API call. */
	static readonly UPDATE_LOOKUP_TABLE: string[] = [
		"logs:GetQueryResults",
		"logs:UpdateLookupTable",
	];
	/** IAM actions required for the UpdateScheduledQuery API call. */
	static readonly UPDATE_SCHEDULED_QUERY: string[] = [
		"iam:PassRole",
		"logs:UpdateScheduledQuery",
	];
}

/**
 * Condition key constants and builders for logs.
 */
export class LogsConditions {
	/** Condition keys applicable to the CreateDelivery action. */
	static readonly CREATE_DELIVERY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLogAnomalyDetector action. */
	static readonly CREATE_LOG_ANOMALY_DETECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLogGroup action. */
	static readonly CREATE_LOG_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLookupTable action. */
	static readonly CREATE_LOOKUP_TABLE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScheduledQuery action. */
	static readonly CREATE_SCHEDULED_QUERY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the IntegrateWithS3Table action. */
	static readonly INTEGRATE_WITH_S3_TABLE_CONDITION_KEYS: string[] = [
		"logs:data_source_name",
		"logs:data_source_type",
	];
	/** Condition keys applicable to the ProcessWithPipeline action. */
	static readonly PROCESS_WITH_PIPELINE_CONDITION_KEYS: string[] = [
		"logs:data_source_name",
		"logs:data_source_type",
	];
	/** Condition keys applicable to the PutDeliveryDestination action. */
	static readonly PUT_DELIVERY_DESTINATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"logs:DeliveryDestinationResourceArn",
	];
	/** Condition keys applicable to the PutDeliverySource action. */
	static readonly PUT_DELIVERY_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"logs:LogGeneratingResourceArns",
	];
	/** Condition keys applicable to the PutDestination action. */
	static readonly PUT_DESTINATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagLogGroup action. */
	static readonly TAG_LOG_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagLogGroup action. */
	static readonly UNTAG_LOG_GROUP_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateDeliveryConfiguration action. */
	static readonly UPDATE_DELIVERY_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: logs:DeliveryDestinationResourceArn (ARN) */
	static readonly DELIVERY_DESTINATION_RESOURCE_ARN =
		"logs:DeliveryDestinationResourceArn";
	/** Condition key: logs:LogGeneratingResourceArns (ArrayOfARN) */
	static readonly LOG_GENERATING_RESOURCE_ARNS =
		"logs:LogGeneratingResourceArns";
	/** Condition key: logs:data_source_name (String) */
	static readonly DATA_SOURCE_NAME = "logs:data_source_name";
	/** Condition key: logs:data_source_type (String) */
	static readonly DATA_SOURCE_TYPE = "logs:data_source_type";

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
	 * Generates a condition block for `logs:DeliveryDestinationResourceArn`.
	 */
	static deliveryDestinationResourceARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "logs:DeliveryDestinationResourceArn": value } };
	}

	/**
	 * Generates a condition block for `logs:LogGeneratingResourceArns`.
	 */
	static logGeneratingResourceArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": { "logs:LogGeneratingResourceArns": values },
		};
	}

	/**
	 * Generates a condition block for `logs:data_source_name`.
	 */
	static dataSourceName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "logs:data_source_name": value } };
	}

	/**
	 * Generates a condition block for `logs:data_source_type`.
	 */
	static dataSourceType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "logs:data_source_type": value } };
	}
}
