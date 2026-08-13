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
	static readonly AssociateKmsKey = "logs:AssociateKmsKey";
	/** [Write] logs:AssociateSourceToS3TableIntegration */
	static readonly AssociateSourceToS3TableIntegration =
		"logs:AssociateSourceToS3TableIntegration";
	/** [Write] logs:CallWithBearerToken */
	static readonly CallWithBearerToken = "logs:CallWithBearerToken";
	/** [Write] logs:CancelExportTask */
	static readonly CancelExportTask = "logs:CancelExportTask";
	/** [Write] logs:CancelImportTask */
	static readonly CancelImportTask = "logs:CancelImportTask";
	/** [Write] logs:CreateDelivery */
	static readonly CreateDelivery = "logs:CreateDelivery";
	/** [Write] logs:CreateExportTask */
	static readonly CreateExportTask = "logs:CreateExportTask";
	/** [Write] logs:CreateImportTask */
	static readonly CreateImportTask = "logs:CreateImportTask";
	/** [Write] logs:CreateLogAnomalyDetector */
	static readonly CreateLogAnomalyDetector = "logs:CreateLogAnomalyDetector";
	/** [Write] logs:CreateLogDelivery */
	static readonly CreateLogDelivery = "logs:CreateLogDelivery";
	/** [Write] logs:CreateLogGroup */
	static readonly CreateLogGroup = "logs:CreateLogGroup";
	/** [Write] logs:CreateLogStream */
	static readonly CreateLogStream = "logs:CreateLogStream";
	/** [Write] logs:CreateLookupTable */
	static readonly CreateLookupTable = "logs:CreateLookupTable";
	/** [Write] logs:CreateScheduledQuery */
	static readonly CreateScheduledQuery = "logs:CreateScheduledQuery";
	/** [Write] logs:DeleteAccountPolicy */
	static readonly DeleteAccountPolicy = "logs:DeleteAccountPolicy";
	/** [Write] logs:DeleteDataProtectionPolicy */
	static readonly DeleteDataProtectionPolicy =
		"logs:DeleteDataProtectionPolicy";
	/** [Write] logs:DeleteDelivery */
	static readonly DeleteDelivery = "logs:DeleteDelivery";
	/** [Write] logs:DeleteDeliveryDestination */
	static readonly DeleteDeliveryDestination = "logs:DeleteDeliveryDestination";
	/** [Write] logs:DeleteDeliveryDestinationPolicy */
	static readonly DeleteDeliveryDestinationPolicy =
		"logs:DeleteDeliveryDestinationPolicy";
	/** [Write] logs:DeleteDeliverySource */
	static readonly DeleteDeliverySource = "logs:DeleteDeliverySource";
	/** [Write] logs:DeleteDestination */
	static readonly DeleteDestination = "logs:DeleteDestination";
	/** [Write] logs:DeleteIndexPolicy */
	static readonly DeleteIndexPolicy = "logs:DeleteIndexPolicy";
	/** [Write] logs:DeleteIntegration */
	static readonly DeleteIntegration = "logs:DeleteIntegration";
	/** [Write] logs:DeleteLogAnomalyDetector */
	static readonly DeleteLogAnomalyDetector = "logs:DeleteLogAnomalyDetector";
	/** [Write] logs:DeleteLogDelivery */
	static readonly DeleteLogDelivery = "logs:DeleteLogDelivery";
	/** [Write] logs:DeleteLogGroup */
	static readonly DeleteLogGroup = "logs:DeleteLogGroup";
	/** [Write] logs:DeleteLogStream */
	static readonly DeleteLogStream = "logs:DeleteLogStream";
	/** [Write] logs:DeleteLookupTable */
	static readonly DeleteLookupTable = "logs:DeleteLookupTable";
	/** [Write] logs:DeleteMetricFilter */
	static readonly DeleteMetricFilter = "logs:DeleteMetricFilter";
	/** [Write] logs:DeletePipelineRule */
	static readonly DeletePipelineRule = "logs:DeletePipelineRule";
	/** [Write] logs:DeleteQueryDefinition */
	static readonly DeleteQueryDefinition = "logs:DeleteQueryDefinition";
	/** [PermissionManagement] logs:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "logs:DeleteResourcePolicy";
	/** [Write] logs:DeleteRetentionPolicy */
	static readonly DeleteRetentionPolicy = "logs:DeleteRetentionPolicy";
	/** [Write] logs:DeleteScheduledQuery */
	static readonly DeleteScheduledQuery = "logs:DeleteScheduledQuery";
	/** [Write] logs:DeleteSubscriptionFilter */
	static readonly DeleteSubscriptionFilter = "logs:DeleteSubscriptionFilter";
	/** [Write] logs:DeleteSyslogConfiguration */
	static readonly DeleteSyslogConfiguration = "logs:DeleteSyslogConfiguration";
	/** [Write] logs:DeleteTransformer */
	static readonly DeleteTransformer = "logs:DeleteTransformer";
	/** [List] logs:DescribeAccountPolicies */
	static readonly DescribeAccountPolicies = "logs:DescribeAccountPolicies";
	/** [List] logs:DescribeConfigurationTemplates */
	static readonly DescribeConfigurationTemplates =
		"logs:DescribeConfigurationTemplates";
	/** [List] logs:DescribeDeliveries */
	static readonly DescribeDeliveries = "logs:DescribeDeliveries";
	/** [List] logs:DescribeDeliveryDestinations */
	static readonly DescribeDeliveryDestinations =
		"logs:DescribeDeliveryDestinations";
	/** [List] logs:DescribeDeliverySources */
	static readonly DescribeDeliverySources = "logs:DescribeDeliverySources";
	/** [List] logs:DescribeDestinations */
	static readonly DescribeDestinations = "logs:DescribeDestinations";
	/** [List] logs:DescribeExportTasks */
	static readonly DescribeExportTasks = "logs:DescribeExportTasks";
	/** [List] logs:DescribeFieldIndexes */
	static readonly DescribeFieldIndexes = "logs:DescribeFieldIndexes";
	/** [List] logs:DescribeImportTaskBatches */
	static readonly DescribeImportTaskBatches = "logs:DescribeImportTaskBatches";
	/** [List] logs:DescribeImportTasks */
	static readonly DescribeImportTasks = "logs:DescribeImportTasks";
	/** [List] logs:DescribeIndexPolicies */
	static readonly DescribeIndexPolicies = "logs:DescribeIndexPolicies";
	/** [List] logs:DescribeLogGroups */
	static readonly DescribeLogGroups = "logs:DescribeLogGroups";
	/** [List] logs:DescribeLogStreams */
	static readonly DescribeLogStreams = "logs:DescribeLogStreams";
	/** [List] logs:DescribeLookupTables */
	static readonly DescribeLookupTables = "logs:DescribeLookupTables";
	/** [List] logs:DescribeMetricFilters */
	static readonly DescribeMetricFilters = "logs:DescribeMetricFilters";
	/** [List] logs:DescribeQueries */
	static readonly DescribeQueries = "logs:DescribeQueries";
	/** [List] logs:DescribeQueryDefinitions */
	static readonly DescribeQueryDefinitions = "logs:DescribeQueryDefinitions";
	/** [List] logs:DescribeResourcePolicies */
	static readonly DescribeResourcePolicies = "logs:DescribeResourcePolicies";
	/** [List] logs:DescribeSubscriptionFilters */
	static readonly DescribeSubscriptionFilters =
		"logs:DescribeSubscriptionFilters";
	/** [Write] logs:DisassociateKmsKey */
	static readonly DisassociateKmsKey = "logs:DisassociateKmsKey";
	/** [Write] logs:DisassociateSourceFromS3TableIntegration */
	static readonly DisassociateSourceFromS3TableIntegration =
		"logs:DisassociateSourceFromS3TableIntegration";
	/** [Read] logs:FilterLogEvents */
	static readonly FilterLogEvents = "logs:FilterLogEvents";
	/** [Read] logs:GetDataProtectionPolicy */
	static readonly actionGetDataProtectionPolicy =
		"logs:GetDataProtectionPolicy";
	/** [Read] logs:GetDelivery */
	static readonly actionGetDelivery = "logs:GetDelivery";
	/** [Read] logs:GetDeliveryDestination */
	static readonly actionGetDeliveryDestination = "logs:GetDeliveryDestination";
	/** [Read] logs:GetDeliveryDestinationPolicy */
	static readonly actionGetDeliveryDestinationPolicy =
		"logs:GetDeliveryDestinationPolicy";
	/** [Read] logs:GetDeliverySource */
	static readonly actionGetDeliverySource = "logs:GetDeliverySource";
	/** [Read] logs:GetIntegration */
	static readonly actionGetIntegration = "logs:GetIntegration";
	/** [Read] logs:GetLogAnomalyDetector */
	static readonly actionGetLogAnomalyDetector = "logs:GetLogAnomalyDetector";
	/** [Read] logs:GetLogDelivery */
	static readonly actionGetLogDelivery = "logs:GetLogDelivery";
	/** [Read] logs:GetLogEvents */
	static readonly actionGetLogEvents = "logs:GetLogEvents";
	/** [Read] logs:GetLogFields */
	static readonly actionGetLogFields = "logs:GetLogFields";
	/** [Read] logs:GetLogGroupFields */
	static readonly actionGetLogGroupFields = "logs:GetLogGroupFields";
	/** [Read] logs:GetLogRecord */
	static readonly actionGetLogRecord = "logs:GetLogRecord";
	/** [Read] logs:GetLookupTable */
	static readonly actionGetLookupTable = "logs:GetLookupTable";
	/** [Read] logs:GetQueryResults */
	static readonly actionGetQueryResults = "logs:GetQueryResults";
	/** [Read] logs:GetScheduledQuery */
	static readonly actionGetScheduledQuery = "logs:GetScheduledQuery";
	/** [Read] logs:GetScheduledQueryHistory */
	static readonly actionGetScheduledQueryHistory =
		"logs:GetScheduledQueryHistory";
	/** [Read] logs:GetStorageTierPolicy */
	static readonly actionGetStorageTierPolicy = "logs:GetStorageTierPolicy";
	/** [Read] logs:GetTransformer */
	static readonly actionGetTransformer = "logs:GetTransformer";
	/** [Write] logs:IntegrateWithS3Table */
	static readonly IntegrateWithS3Table = "logs:IntegrateWithS3Table";
	/** [Write] logs:Link */
	static readonly Link = "logs:Link";
	/** [List] logs:ListAggregateLogGroupSummaries */
	static readonly ListAggregateLogGroupSummaries =
		"logs:ListAggregateLogGroupSummaries";
	/** [List] logs:ListAnomalies */
	static readonly ListAnomalies = "logs:ListAnomalies";
	/** [List] logs:ListEntitiesForLogGroup */
	static readonly ListEntitiesForLogGroup = "logs:ListEntitiesForLogGroup";
	/** [List] logs:ListIntegrations */
	static readonly ListIntegrations = "logs:ListIntegrations";
	/** [List] logs:ListLogAnomalyDetectors */
	static readonly ListLogAnomalyDetectors = "logs:ListLogAnomalyDetectors";
	/** [List] logs:ListLogDeliveries */
	static readonly ListLogDeliveries = "logs:ListLogDeliveries";
	/** [List] logs:ListLogGroups */
	static readonly ListLogGroups = "logs:ListLogGroups";
	/** [List] logs:ListLogGroupsForEntity */
	static readonly ListLogGroupsForEntity = "logs:ListLogGroupsForEntity";
	/** [List] logs:ListLogGroupsForQuery */
	static readonly ListLogGroupsForQuery = "logs:ListLogGroupsForQuery";
	/** [List] logs:ListScheduledQueries */
	static readonly ListScheduledQueries = "logs:ListScheduledQueries";
	/** [List] logs:ListSourcesForS3TableIntegration */
	static readonly ListSourcesForS3TableIntegration =
		"logs:ListSourcesForS3TableIntegration";
	/** [List] logs:ListSyslogConfigurations */
	static readonly ListSyslogConfigurations = "logs:ListSyslogConfigurations";
	/** [List] logs:ListTagsForResource */
	static readonly ListTagsForResource = "logs:ListTagsForResource";
	/** [List] logs:ListTagsLogGroup */
	static readonly ListTagsLogGroup = "logs:ListTagsLogGroup";
	/** [Write] logs:ProcessWithPipeline */
	static readonly ProcessWithPipeline = "logs:ProcessWithPipeline";
	/** [Write] logs:PutAccountPolicy */
	static readonly PutAccountPolicy = "logs:PutAccountPolicy";
	/** [Write] logs:PutBearerTokenAuthentication */
	static readonly PutBearerTokenAuthentication =
		"logs:PutBearerTokenAuthentication";
	/** [Write] logs:PutDataProtectionPolicy */
	static readonly PutDataProtectionPolicy = "logs:PutDataProtectionPolicy";
	/** [Write] logs:PutDeliveryDestination */
	static readonly PutDeliveryDestination = "logs:PutDeliveryDestination";
	/** [Write] logs:PutDeliveryDestinationPolicy */
	static readonly PutDeliveryDestinationPolicy =
		"logs:PutDeliveryDestinationPolicy";
	/** [Write] logs:PutDeliverySource */
	static readonly PutDeliverySource = "logs:PutDeliverySource";
	/** [Write] logs:PutDestination */
	static readonly PutDestination = "logs:PutDestination";
	/** [Write] logs:PutDestinationPolicy */
	static readonly PutDestinationPolicy = "logs:PutDestinationPolicy";
	/** [Write] logs:PutIndexPolicy */
	static readonly PutIndexPolicy = "logs:PutIndexPolicy";
	/** [Write] logs:PutIntegration */
	static readonly PutIntegration = "logs:PutIntegration";
	/** [Write] logs:PutLogEvents */
	static readonly PutLogEvents = "logs:PutLogEvents";
	/** [Write] logs:PutLogGroupDeletionProtection */
	static readonly PutLogGroupDeletionProtection =
		"logs:PutLogGroupDeletionProtection";
	/** [Write] logs:PutMetricFilter */
	static readonly PutMetricFilter = "logs:PutMetricFilter";
	/** [Write] logs:PutPipelineRule */
	static readonly PutPipelineRule = "logs:PutPipelineRule";
	/** [Write] logs:PutQueryDefinition */
	static readonly PutQueryDefinition = "logs:PutQueryDefinition";
	/** [PermissionManagement] logs:PutResourcePolicy */
	static readonly PutResourcePolicy = "logs:PutResourcePolicy";
	/** [Write] logs:PutRetentionPolicy */
	static readonly PutRetentionPolicy = "logs:PutRetentionPolicy";
	/** [Write] logs:PutStorageTierPolicy */
	static readonly PutStorageTierPolicy = "logs:PutStorageTierPolicy";
	/** [Write] logs:PutSubscriptionFilter */
	static readonly PutSubscriptionFilter = "logs:PutSubscriptionFilter";
	/** [Write] logs:PutSyslogConfiguration */
	static readonly PutSyslogConfiguration = "logs:PutSyslogConfiguration";
	/** [Write] logs:PutTransformer */
	static readonly PutTransformer = "logs:PutTransformer";
	/** [Read] logs:StartLiveTail */
	static readonly StartLiveTail = "logs:StartLiveTail";
	/** [Read] logs:StartQuery */
	static readonly StartQuery = "logs:StartQuery";
	/** [Read] logs:StopLiveTail */
	static readonly StopLiveTail = "logs:StopLiveTail";
	/** [Read] logs:StopQuery */
	static readonly StopQuery = "logs:StopQuery";
	/** [Tagging] logs:TagLogGroup */
	static readonly TagLogGroup = "logs:TagLogGroup";
	/** [Tagging] logs:TagResource */
	static readonly TagResource = "logs:TagResource";
	/** [Read] logs:TestMetricFilter */
	static readonly TestMetricFilter = "logs:TestMetricFilter";
	/** [Read] logs:TestTransformer */
	static readonly TestTransformer = "logs:TestTransformer";
	/** [Read] logs:Unmask */
	static readonly Unmask = "logs:Unmask";
	/** [Tagging] logs:UntagLogGroup */
	static readonly UntagLogGroup = "logs:UntagLogGroup";
	/** [Tagging] logs:UntagResource */
	static readonly UntagResource = "logs:UntagResource";
	/** [Write] logs:UpdateAnomaly */
	static readonly UpdateAnomaly = "logs:UpdateAnomaly";
	/** [Write] logs:UpdateDeliveryConfiguration */
	static readonly UpdateDeliveryConfiguration =
		"logs:UpdateDeliveryConfiguration";
	/** [Write] logs:UpdateLogAnomalyDetector */
	static readonly UpdateLogAnomalyDetector = "logs:UpdateLogAnomalyDetector";
	/** [Write] logs:UpdateLogDelivery */
	static readonly UpdateLogDelivery = "logs:UpdateLogDelivery";
	/** [Write] logs:UpdateLookupTable */
	static readonly UpdateLookupTable = "logs:UpdateLookupTable";
	/** [Write] logs:UpdateScheduledQuery */
	static readonly UpdateScheduledQuery = "logs:UpdateScheduledQuery";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		LogsActions.FilterLogEvents,
		LogsActions.actionGetDataProtectionPolicy,
		LogsActions.actionGetDelivery,
		LogsActions.actionGetDeliveryDestination,
		LogsActions.actionGetDeliveryDestinationPolicy,
		LogsActions.actionGetDeliverySource,
		LogsActions.actionGetIntegration,
		LogsActions.actionGetLogAnomalyDetector,
		LogsActions.actionGetLogDelivery,
		LogsActions.actionGetLogEvents,
		LogsActions.actionGetLogFields,
		LogsActions.actionGetLogGroupFields,
		LogsActions.actionGetLogRecord,
		LogsActions.actionGetLookupTable,
		LogsActions.actionGetQueryResults,
		LogsActions.actionGetScheduledQuery,
		LogsActions.actionGetScheduledQueryHistory,
		LogsActions.actionGetStorageTierPolicy,
		LogsActions.actionGetTransformer,
		LogsActions.StartLiveTail,
		LogsActions.StartQuery,
		LogsActions.StopLiveTail,
		LogsActions.StopQuery,
		LogsActions.TestMetricFilter,
		LogsActions.TestTransformer,
		LogsActions.Unmask,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		LogsActions.AssociateKmsKey,
		LogsActions.AssociateSourceToS3TableIntegration,
		LogsActions.CallWithBearerToken,
		LogsActions.CancelExportTask,
		LogsActions.CancelImportTask,
		LogsActions.CreateDelivery,
		LogsActions.CreateExportTask,
		LogsActions.CreateImportTask,
		LogsActions.CreateLogAnomalyDetector,
		LogsActions.CreateLogDelivery,
		LogsActions.CreateLogGroup,
		LogsActions.CreateLogStream,
		LogsActions.CreateLookupTable,
		LogsActions.CreateScheduledQuery,
		LogsActions.DeleteAccountPolicy,
		LogsActions.DeleteDataProtectionPolicy,
		LogsActions.DeleteDelivery,
		LogsActions.DeleteDeliveryDestination,
		LogsActions.DeleteDeliveryDestinationPolicy,
		LogsActions.DeleteDeliverySource,
		LogsActions.DeleteDestination,
		LogsActions.DeleteIndexPolicy,
		LogsActions.DeleteIntegration,
		LogsActions.DeleteLogAnomalyDetector,
		LogsActions.DeleteLogDelivery,
		LogsActions.DeleteLogGroup,
		LogsActions.DeleteLogStream,
		LogsActions.DeleteLookupTable,
		LogsActions.DeleteMetricFilter,
		LogsActions.DeletePipelineRule,
		LogsActions.DeleteQueryDefinition,
		LogsActions.DeleteRetentionPolicy,
		LogsActions.DeleteScheduledQuery,
		LogsActions.DeleteSubscriptionFilter,
		LogsActions.DeleteSyslogConfiguration,
		LogsActions.DeleteTransformer,
		LogsActions.DisassociateKmsKey,
		LogsActions.DisassociateSourceFromS3TableIntegration,
		LogsActions.IntegrateWithS3Table,
		LogsActions.Link,
		LogsActions.ProcessWithPipeline,
		LogsActions.PutAccountPolicy,
		LogsActions.PutBearerTokenAuthentication,
		LogsActions.PutDataProtectionPolicy,
		LogsActions.PutDeliveryDestination,
		LogsActions.PutDeliveryDestinationPolicy,
		LogsActions.PutDeliverySource,
		LogsActions.PutDestination,
		LogsActions.PutDestinationPolicy,
		LogsActions.PutIndexPolicy,
		LogsActions.PutIntegration,
		LogsActions.PutLogEvents,
		LogsActions.PutLogGroupDeletionProtection,
		LogsActions.PutMetricFilter,
		LogsActions.PutPipelineRule,
		LogsActions.PutQueryDefinition,
		LogsActions.PutRetentionPolicy,
		LogsActions.PutStorageTierPolicy,
		LogsActions.PutSubscriptionFilter,
		LogsActions.PutSyslogConfiguration,
		LogsActions.PutTransformer,
		LogsActions.UpdateAnomaly,
		LogsActions.UpdateDeliveryConfiguration,
		LogsActions.UpdateLogAnomalyDetector,
		LogsActions.UpdateLogDelivery,
		LogsActions.UpdateLookupTable,
		LogsActions.UpdateScheduledQuery,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		LogsActions.DescribeAccountPolicies,
		LogsActions.DescribeConfigurationTemplates,
		LogsActions.DescribeDeliveries,
		LogsActions.DescribeDeliveryDestinations,
		LogsActions.DescribeDeliverySources,
		LogsActions.DescribeDestinations,
		LogsActions.DescribeExportTasks,
		LogsActions.DescribeFieldIndexes,
		LogsActions.DescribeImportTaskBatches,
		LogsActions.DescribeImportTasks,
		LogsActions.DescribeIndexPolicies,
		LogsActions.DescribeLogGroups,
		LogsActions.DescribeLogStreams,
		LogsActions.DescribeLookupTables,
		LogsActions.DescribeMetricFilters,
		LogsActions.DescribeQueries,
		LogsActions.DescribeQueryDefinitions,
		LogsActions.DescribeResourcePolicies,
		LogsActions.DescribeSubscriptionFilters,
		LogsActions.ListAggregateLogGroupSummaries,
		LogsActions.ListAnomalies,
		LogsActions.ListEntitiesForLogGroup,
		LogsActions.ListIntegrations,
		LogsActions.ListLogAnomalyDetectors,
		LogsActions.ListLogDeliveries,
		LogsActions.ListLogGroups,
		LogsActions.ListLogGroupsForEntity,
		LogsActions.ListLogGroupsForQuery,
		LogsActions.ListScheduledQueries,
		LogsActions.ListSourcesForS3TableIntegration,
		LogsActions.ListSyslogConfigurations,
		LogsActions.ListTagsForResource,
		LogsActions.ListTagsLogGroup,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		LogsActions.DeleteResourcePolicy,
		LogsActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		LogsActions.TagLogGroup,
		LogsActions.TagResource,
		LogsActions.UntagLogGroup,
		LogsActions.UntagResource,
	];
}

/**
 * Properties for building a anomaly-detector ARN.
 */
export interface LogsAnomalyDetectorArnProps {
	/** The DetectorId component of the ARN. */
	readonly detectorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a anomaly-detector ARN.
 */
export interface LogsAnomalyDetectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DetectorId component. */
	readonly detectorId: string;
}

/**
 * Properties for building a delivery ARN.
 */
export interface LogsDeliveryArnProps {
	/** The DeliveryName component of the ARN. */
	readonly deliveryName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a delivery ARN.
 */
export interface LogsDeliveryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeliveryName component. */
	readonly deliveryName: string;
}

/**
 * Properties for building a delivery-destination ARN.
 */
export interface LogsDeliveryDestinationArnProps {
	/** The DeliveryDestinationName component of the ARN. */
	readonly deliveryDestinationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a delivery-destination ARN.
 */
export interface LogsDeliveryDestinationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeliveryDestinationName component. */
	readonly deliveryDestinationName: string;
}

/**
 * Properties for building a delivery-source ARN.
 */
export interface LogsDeliverySourceArnProps {
	/** The DeliverySourceName component of the ARN. */
	readonly deliverySourceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a delivery-source ARN.
 */
export interface LogsDeliverySourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeliverySourceName component. */
	readonly deliverySourceName: string;
}

/**
 * Properties for building a destination ARN.
 */
export interface LogsDestinationArnProps {
	/** The DestinationName component of the ARN. */
	readonly destinationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a destination ARN.
 */
export interface LogsDestinationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DestinationName component. */
	readonly destinationName: string;
}

/**
 * Properties for building a log-group ARN.
 */
export interface LogsLogGroupArnProps {
	/** The LogGroupName component of the ARN. */
	readonly logGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a log-group ARN.
 */
export interface LogsLogGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LogGroupName component. */
	readonly logGroupName: string;
}

/**
 * Properties for building a log-stream ARN.
 */
export interface LogsLogStreamArnProps {
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
}

/**
 * Parsed components of a log-stream ARN.
 */
export interface LogsLogStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LogGroupName component. */
	readonly logGroupName: string;
	/** The LogStreamName component. */
	readonly logStreamName: string;
}

/**
 * Properties for building a lookup-table ARN.
 */
export interface LogsLookupTableArnProps {
	/** The LookupTableName component of the ARN. */
	readonly lookupTableName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a lookup-table ARN.
 */
export interface LogsLookupTableArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LookupTableName component. */
	readonly lookupTableName: string;
}

/**
 * Properties for building a scheduled-query ARN.
 */
export interface LogsScheduledQueryArnProps {
	/** The ScheduledQueryId component of the ARN. */
	readonly scheduledQueryId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a scheduled-query ARN.
 */
export interface LogsScheduledQueryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ScheduledQueryId component. */
	readonly scheduledQueryId: string;
}

const AnomalyDetectorArnRegex =
	/^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):anomaly-detector:(?<detectorId>[^:/?]+)$/;
const DeliveryArnRegex =
	/^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):delivery:(?<deliveryName>[^:/?]+)$/;
const DeliveryDestinationArnRegex =
	/^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):delivery-destination:(?<deliveryDestinationName>[^:/?]+)$/;
const DeliverySourceArnRegex =
	/^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):delivery-source:(?<deliverySourceName>[^:/?]+)$/;
const DestinationArnRegex =
	/^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):destination:(?<destinationName>[^:/?]+)$/;
const LogGroupArnRegex =
	/^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):log-group:(?<logGroupName>[^:/?]+)$/;
const LogStreamArnRegex =
	/^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):log-group:(?<logGroupName>[^:/?]+):log-stream:(?<logStreamName>[^:/?]+)$/;
const LookupTableArnRegex =
	/^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):lookup-table:(?<lookupTableName>[^:/?]+)$/;
const ScheduledQueryArnRegex =
	/^arn:(?<partition>[^:]+):logs:(?<region>[^:]*):(?<account>[^:]*):scheduled-query:(?<scheduledQueryId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for logs resources.
 */
export class LogsResources {
	/**
	 * Builds an ARN for the anomaly-detector resource.
	 */
	static anomalyDetector(props: LogsAnomalyDetectorArnProps): string {
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
	static parseAnomalyDetectorArn(
		arn: string,
	): LogsAnomalyDetectorArnComponents {
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
	static delivery(props: LogsDeliveryArnProps): string {
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
	static parseDeliveryArn(arn: string): LogsDeliveryArnComponents {
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
	static deliveryDestination(props: LogsDeliveryDestinationArnProps): string {
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
	static parseDeliveryDestinationArn(
		arn: string,
	): LogsDeliveryDestinationArnComponents {
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
	static deliverySource(props: LogsDeliverySourceArnProps): string {
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
	static parseDeliverySourceArn(arn: string): LogsDeliverySourceArnComponents {
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
	static destination(props: LogsDestinationArnProps): string {
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
	static parseDestinationArn(arn: string): LogsDestinationArnComponents {
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
	static logGroup(props: LogsLogGroupArnProps): string {
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
	static parseLogGroupArn(arn: string): LogsLogGroupArnComponents {
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
	static logStream(props: LogsLogStreamArnProps): string {
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
	static parseLogStreamArn(arn: string): LogsLogStreamArnComponents {
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
	static lookupTable(props: LogsLookupTableArnProps): string {
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
	static parseLookupTableArn(arn: string): LogsLookupTableArnComponents {
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
	static scheduledQuery(props: LogsScheduledQueryArnProps): string {
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
	static parseScheduledQueryArn(arn: string): LogsScheduledQueryArnComponents {
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
	static readonly AssociateKmsKey: string[] = ["logs:AssociateKmsKey"];
	/** IAM actions required for the AssociateSourceToS3TableIntegration API call. */
	static readonly AssociateSourceToS3TableIntegration: string[] = [
		"logs:AssociateSourceToS3TableIntegration",
	];
	/** IAM actions required for the CancelExportTask API call. */
	static readonly CancelExportTask: string[] = ["logs:CancelExportTask"];
	/** IAM actions required for the CancelImportTask API call. */
	static readonly CancelImportTask: string[] = ["logs:CancelImportTask"];
	/** IAM actions required for the CreateDelivery API call. */
	static readonly CreateDelivery: string[] = [
		"logs:CreateDelivery",
		"logs:TagResource",
	];
	/** IAM actions required for the CreateExportTask API call. */
	static readonly CreateExportTask: string[] = ["logs:CreateExportTask"];
	/** IAM actions required for the CreateImportTask API call. */
	static readonly CreateImportTask: string[] = [
		"logs:CreateImportTask",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateLogAnomalyDetector API call. */
	static readonly CreateLogAnomalyDetector: string[] = [
		"logs:CreateLogAnomalyDetector",
		"logs:TagResource",
	];
	/** IAM actions required for the CreateLogGroup API call. */
	static readonly CreateLogGroup: string[] = [
		"logs:CreateLogGroup",
		"logs:TagLogGroup",
		"logs:TagResource",
	];
	/** IAM actions required for the CreateLogStream API call. */
	static readonly CreateLogStream: string[] = ["logs:CreateLogStream"];
	/** IAM actions required for the CreateLookupTable API call. */
	static readonly CreateLookupTable: string[] = [
		"logs:CreateLookupTable",
		"logs:GetQueryResults",
		"logs:TagResource",
	];
	/** IAM actions required for the CreateScheduledQuery API call. */
	static readonly CreateScheduledQuery: string[] = [
		"logs:CreateScheduledQuery",
		"iam:PassRole",
		"logs:TagResource",
	];
	/** IAM actions required for the DeleteAccountPolicy API call. */
	static readonly DeleteAccountPolicy: string[] = [
		"logs:DeleteAccountPolicy",
		"logs:DeleteDataProtectionPolicy",
		"logs:DeleteIndexPolicy",
		"logs:DeleteRetentionPolicy",
		"logs:DeleteSubscriptionFilter",
		"logs:DeleteTransformer",
	];
	/** IAM actions required for the DeleteDataProtectionPolicy API call. */
	static readonly DeleteDataProtectionPolicy: string[] = [
		"logs:DeleteDataProtectionPolicy",
	];
	/** IAM actions required for the DeleteDelivery API call. */
	static readonly DeleteDelivery: string[] = ["logs:DeleteDelivery"];
	/** IAM actions required for the DeleteDeliveryDestination API call. */
	static readonly DeleteDeliveryDestination: string[] = [
		"logs:DeleteDeliveryDestination",
	];
	/** IAM actions required for the DeleteDeliveryDestinationPolicy API call. */
	static readonly DeleteDeliveryDestinationPolicy: string[] = [
		"logs:DeleteDeliveryDestinationPolicy",
	];
	/** IAM actions required for the DeleteDeliverySource API call. */
	static readonly DeleteDeliverySource: string[] = [
		"logs:DeleteDeliverySource",
	];
	/** IAM actions required for the DeleteDestination API call. */
	static readonly DeleteDestination: string[] = ["logs:DeleteDestination"];
	/** IAM actions required for the DeleteIndexPolicy API call. */
	static readonly DeleteIndexPolicy: string[] = ["logs:DeleteIndexPolicy"];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DeleteIntegration: string[] = ["logs:DeleteIntegration"];
	/** IAM actions required for the DeleteLogAnomalyDetector API call. */
	static readonly DeleteLogAnomalyDetector: string[] = [
		"logs:DeleteLogAnomalyDetector",
	];
	/** IAM actions required for the DeleteLogGroup API call. */
	static readonly DeleteLogGroup: string[] = ["logs:DeleteLogGroup"];
	/** IAM actions required for the DeleteLogStream API call. */
	static readonly DeleteLogStream: string[] = ["logs:DeleteLogStream"];
	/** IAM actions required for the DeleteLookupTable API call. */
	static readonly DeleteLookupTable: string[] = ["logs:DeleteLookupTable"];
	/** IAM actions required for the DeleteMetricFilter API call. */
	static readonly DeleteMetricFilter: string[] = ["logs:DeleteMetricFilter"];
	/** IAM actions required for the DeleteQueryDefinition API call. */
	static readonly DeleteQueryDefinition: string[] = [
		"logs:DeleteQueryDefinition",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"logs:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteRetentionPolicy API call. */
	static readonly DeleteRetentionPolicy: string[] = [
		"logs:DeleteRetentionPolicy",
	];
	/** IAM actions required for the DeleteScheduledQuery API call. */
	static readonly DeleteScheduledQuery: string[] = [
		"logs:DeleteScheduledQuery",
	];
	/** IAM actions required for the DeleteSubscriptionFilter API call. */
	static readonly DeleteSubscriptionFilter: string[] = [
		"logs:DeleteSubscriptionFilter",
	];
	/** IAM actions required for the DeleteSyslogConfiguration API call. */
	static readonly DeleteSyslogConfiguration: string[] = [
		"logs:DeleteSyslogConfiguration",
	];
	/** IAM actions required for the DeleteTransformer API call. */
	static readonly DeleteTransformer: string[] = ["logs:DeleteTransformer"];
	/** IAM actions required for the DescribeAccountPolicies API call. */
	static readonly DescribeAccountPolicies: string[] = [
		"logs:DescribeAccountPolicies",
	];
	/** IAM actions required for the DescribeConfigurationTemplates API call. */
	static readonly DescribeConfigurationTemplates: string[] = [
		"logs:DescribeConfigurationTemplates",
	];
	/** IAM actions required for the DescribeDeliveries API call. */
	static readonly DescribeDeliveries: string[] = ["logs:DescribeDeliveries"];
	/** IAM actions required for the DescribeDeliveryDestinations API call. */
	static readonly DescribeDeliveryDestinations: string[] = [
		"logs:DescribeDeliveryDestinations",
	];
	/** IAM actions required for the DescribeDeliverySources API call. */
	static readonly DescribeDeliverySources: string[] = [
		"logs:DescribeDeliverySources",
	];
	/** IAM actions required for the DescribeDestinations API call. */
	static readonly DescribeDestinations: string[] = [
		"logs:DescribeDestinations",
	];
	/** IAM actions required for the DescribeExportTasks API call. */
	static readonly DescribeExportTasks: string[] = ["logs:DescribeExportTasks"];
	/** IAM actions required for the DescribeFieldIndexes API call. */
	static readonly DescribeFieldIndexes: string[] = [
		"logs:DescribeFieldIndexes",
	];
	/** IAM actions required for the DescribeImportTaskBatches API call. */
	static readonly DescribeImportTaskBatches: string[] = [
		"logs:DescribeImportTaskBatches",
	];
	/** IAM actions required for the DescribeImportTasks API call. */
	static readonly DescribeImportTasks: string[] = ["logs:DescribeImportTasks"];
	/** IAM actions required for the DescribeIndexPolicies API call. */
	static readonly DescribeIndexPolicies: string[] = [
		"logs:DescribeIndexPolicies",
	];
	/** IAM actions required for the DescribeLogGroups API call. */
	static readonly DescribeLogGroups: string[] = ["logs:DescribeLogGroups"];
	/** IAM actions required for the DescribeLogStreams API call. */
	static readonly DescribeLogStreams: string[] = ["logs:DescribeLogStreams"];
	/** IAM actions required for the DescribeLookupTables API call. */
	static readonly DescribeLookupTables: string[] = [
		"logs:DescribeLookupTables",
	];
	/** IAM actions required for the DescribeMetricFilters API call. */
	static readonly DescribeMetricFilters: string[] = [
		"logs:DescribeMetricFilters",
	];
	/** IAM actions required for the DescribeQueries API call. */
	static readonly DescribeQueries: string[] = [
		"logs:DescribeQueries",
		"logs:FilterLogEvents",
	];
	/** IAM actions required for the DescribeQueryDefinitions API call. */
	static readonly DescribeQueryDefinitions: string[] = [
		"logs:DescribeQueryDefinitions",
	];
	/** IAM actions required for the DescribeResourcePolicies API call. */
	static readonly DescribeResourcePolicies: string[] = [
		"logs:DescribeResourcePolicies",
	];
	/** IAM actions required for the DescribeSubscriptionFilters API call. */
	static readonly DescribeSubscriptionFilters: string[] = [
		"logs:DescribeSubscriptionFilters",
	];
	/** IAM actions required for the DisassociateKmsKey API call. */
	static readonly DisassociateKmsKey: string[] = ["logs:DisassociateKmsKey"];
	/** IAM actions required for the DisassociateSourceFromS3TableIntegration API call. */
	static readonly DisassociateSourceFromS3TableIntegration: string[] = [
		"logs:DisassociateSourceFromS3TableIntegration",
	];
	/** IAM actions required for the FilterLogEvents API call. */
	static readonly FilterLogEvents: string[] = [
		"logs:FilterLogEvents",
		"logs:Unmask",
	];
	/** IAM actions required for the GetDataProtectionPolicy API call. */
	static readonly opGetDataProtectionPolicy: string[] = [
		"logs:GetDataProtectionPolicy",
	];
	/** IAM actions required for the GetDelivery API call. */
	static readonly opGetDelivery: string[] = ["logs:GetDelivery"];
	/** IAM actions required for the GetDeliveryDestination API call. */
	static readonly opGetDeliveryDestination: string[] = [
		"logs:GetDeliveryDestination",
	];
	/** IAM actions required for the GetDeliveryDestinationPolicy API call. */
	static readonly opGetDeliveryDestinationPolicy: string[] = [
		"logs:GetDeliveryDestinationPolicy",
	];
	/** IAM actions required for the GetDeliverySource API call. */
	static readonly opGetDeliverySource: string[] = ["logs:GetDeliverySource"];
	/** IAM actions required for the GetIntegration API call. */
	static readonly opGetIntegration: string[] = ["logs:GetIntegration"];
	/** IAM actions required for the GetLogAnomalyDetector API call. */
	static readonly opGetLogAnomalyDetector: string[] = [
		"logs:GetLogAnomalyDetector",
	];
	/** IAM actions required for the GetLogEvents API call. */
	static readonly opGetLogEvents: string[] = [
		"logs:GetLogEvents",
		"logs:Unmask",
	];
	/** IAM actions required for the GetLogFields API call. */
	static readonly opGetLogFields: string[] = ["logs:GetLogFields"];
	/** IAM actions required for the GetLogGroupFields API call. */
	static readonly opGetLogGroupFields: string[] = [
		"logs:FilterLogEvents",
		"logs:GetLogGroupFields",
	];
	/** IAM actions required for the GetLogObject API call. */
	static readonly opGetLogObject: string[] = [];
	/** IAM actions required for the GetLogRecord API call. */
	static readonly opGetLogRecord: string[] = [
		"logs:FilterLogEvents",
		"logs:GetLogRecord",
		"logs:Unmask",
	];
	/** IAM actions required for the GetLookupTable API call. */
	static readonly opGetLookupTable: string[] = ["logs:GetLookupTable"];
	/** IAM actions required for the GetQueryResults API call. */
	static readonly opGetQueryResults: string[] = [
		"logs:FilterLogEvents",
		"logs:GetQueryResults",
		"logs:Unmask",
	];
	/** IAM actions required for the GetScheduledQuery API call. */
	static readonly opGetScheduledQuery: string[] = ["logs:GetScheduledQuery"];
	/** IAM actions required for the GetScheduledQueryHistory API call. */
	static readonly opGetScheduledQueryHistory: string[] = [
		"logs:GetScheduledQueryHistory",
	];
	/** IAM actions required for the GetStorageTierPolicy API call. */
	static readonly opGetStorageTierPolicy: string[] = [
		"logs:GetStorageTierPolicy",
	];
	/** IAM actions required for the GetTransformer API call. */
	static readonly opGetTransformer: string[] = ["logs:GetTransformer"];
	/** IAM actions required for the ListAggregateLogGroupSummaries API call. */
	static readonly ListAggregateLogGroupSummaries: string[] = [
		"logs:ListAggregateLogGroupSummaries",
	];
	/** IAM actions required for the ListAnomalies API call. */
	static readonly ListAnomalies: string[] = ["logs:ListAnomalies"];
	/** IAM actions required for the ListIntegrations API call. */
	static readonly ListIntegrations: string[] = ["logs:ListIntegrations"];
	/** IAM actions required for the ListLogAnomalyDetectors API call. */
	static readonly ListLogAnomalyDetectors: string[] = [
		"logs:ListLogAnomalyDetectors",
	];
	/** IAM actions required for the ListLogGroups API call. */
	static readonly ListLogGroups: string[] = [
		"logs:DescribeLogGroups",
		"logs:ListLogGroups",
	];
	/** IAM actions required for the ListLogGroupsForQuery API call. */
	static readonly ListLogGroupsForQuery: string[] = [
		"logs:ListLogGroupsForQuery",
	];
	/** IAM actions required for the ListScheduledQueries API call. */
	static readonly ListScheduledQueries: string[] = [
		"logs:ListScheduledQueries",
	];
	/** IAM actions required for the ListSourcesForS3TableIntegration API call. */
	static readonly ListSourcesForS3TableIntegration: string[] = [
		"logs:ListSourcesForS3TableIntegration",
	];
	/** IAM actions required for the ListSyslogConfigurations API call. */
	static readonly ListSyslogConfigurations: string[] = [
		"logs:ListSyslogConfigurations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["logs:ListTagsForResource"];
	/** IAM actions required for the ListTagsLogGroup API call. */
	static readonly ListTagsLogGroup: string[] = ["logs:ListTagsLogGroup"];
	/** IAM actions required for the PutAccountPolicy API call. */
	static readonly PutAccountPolicy: string[] = [
		"iam:PassRole",
		"logs:PutAccountPolicy",
		"logs:PutDataProtectionPolicy",
		"logs:PutIndexPolicy",
		"logs:PutRetentionPolicy",
		"logs:PutSubscriptionFilter",
		"logs:PutTransformer",
	];
	/** IAM actions required for the PutBearerTokenAuthentication API call. */
	static readonly PutBearerTokenAuthentication: string[] = [
		"logs:PutBearerTokenAuthentication",
	];
	/** IAM actions required for the PutDataProtectionPolicy API call. */
	static readonly PutDataProtectionPolicy: string[] = [
		"logs:PutDataProtectionPolicy",
	];
	/** IAM actions required for the PutDeliveryDestination API call. */
	static readonly PutDeliveryDestination: string[] = [
		"logs:PutDeliveryDestination",
		"logs:TagResource",
	];
	/** IAM actions required for the PutDeliveryDestinationPolicy API call. */
	static readonly PutDeliveryDestinationPolicy: string[] = [
		"logs:PutDeliveryDestinationPolicy",
	];
	/** IAM actions required for the PutDeliverySource API call. */
	static readonly PutDeliverySource: string[] = [
		"logs:PutDeliverySource",
		"logs:TagResource",
	];
	/** IAM actions required for the PutDestination API call. */
	static readonly PutDestination: string[] = [
		"iam:PassRole",
		"logs:PutDestination",
		"logs:TagResource",
	];
	/** IAM actions required for the PutDestinationPolicy API call. */
	static readonly PutDestinationPolicy: string[] = [
		"logs:PutDestinationPolicy",
	];
	/** IAM actions required for the PutIndexPolicy API call. */
	static readonly PutIndexPolicy: string[] = ["logs:PutIndexPolicy"];
	/** IAM actions required for the PutIntegration API call. */
	static readonly PutIntegration: string[] = ["logs:PutIntegration"];
	/** IAM actions required for the PutLogEvents API call. */
	static readonly PutLogEvents: string[] = ["logs:PutLogEvents"];
	/** IAM actions required for the PutLogGroupDeletionProtection API call. */
	static readonly PutLogGroupDeletionProtection: string[] = [
		"logs:PutLogGroupDeletionProtection",
	];
	/** IAM actions required for the PutMetricFilter API call. */
	static readonly PutMetricFilter: string[] = ["logs:PutMetricFilter"];
	/** IAM actions required for the PutQueryDefinition API call. */
	static readonly PutQueryDefinition: string[] = ["logs:PutQueryDefinition"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["logs:PutResourcePolicy"];
	/** IAM actions required for the PutRetentionPolicy API call. */
	static readonly PutRetentionPolicy: string[] = ["logs:PutRetentionPolicy"];
	/** IAM actions required for the PutStorageTierPolicy API call. */
	static readonly PutStorageTierPolicy: string[] = [
		"logs:PutStorageTierPolicy",
	];
	/** IAM actions required for the PutSubscriptionFilter API call. */
	static readonly PutSubscriptionFilter: string[] = [
		"iam:PassRole",
		"logs:PutSubscriptionFilter",
	];
	/** IAM actions required for the PutSyslogConfiguration API call. */
	static readonly PutSyslogConfiguration: string[] = [
		"logs:PutSyslogConfiguration",
	];
	/** IAM actions required for the PutTransformer API call. */
	static readonly PutTransformer: string[] = ["logs:PutTransformer"];
	/** IAM actions required for the StartLiveTail API call. */
	static readonly StartLiveTail: string[] = [];
	/** IAM actions required for the StartQuery API call. */
	static readonly StartQuery: string[] = [
		"logs:DescribeLogGroups",
		"logs:DescribeQueryDefinitions",
		"logs:FilterLogEvents",
		"logs:StartQuery",
		"logs:Unmask",
	];
	/** IAM actions required for the StopQuery API call. */
	static readonly StopQuery: string[] = [
		"logs:FilterLogEvents",
		"logs:StopQuery",
	];
	/** IAM actions required for the TagLogGroup API call. */
	static readonly TagLogGroup: string[] = ["logs:TagLogGroup"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["logs:TagResource"];
	/** IAM actions required for the TestMetricFilter API call. */
	static readonly TestMetricFilter: string[] = ["logs:TestMetricFilter"];
	/** IAM actions required for the TestTransformer API call. */
	static readonly TestTransformer: string[] = ["logs:TestTransformer"];
	/** IAM actions required for the UntagLogGroup API call. */
	static readonly UntagLogGroup: string[] = ["logs:UntagLogGroup"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["logs:UntagResource"];
	/** IAM actions required for the UpdateAnomaly API call. */
	static readonly UpdateAnomaly: string[] = ["logs:UpdateAnomaly"];
	/** IAM actions required for the UpdateDeliveryConfiguration API call. */
	static readonly UpdateDeliveryConfiguration: string[] = [
		"logs:UpdateDeliveryConfiguration",
	];
	/** IAM actions required for the UpdateLogAnomalyDetector API call. */
	static readonly UpdateLogAnomalyDetector: string[] = [
		"logs:UpdateLogAnomalyDetector",
	];
	/** IAM actions required for the UpdateLookupTable API call. */
	static readonly UpdateLookupTable: string[] = [
		"logs:GetQueryResults",
		"logs:UpdateLookupTable",
	];
	/** IAM actions required for the UpdateScheduledQuery API call. */
	static readonly UpdateScheduledQuery: string[] = [
		"iam:PassRole",
		"logs:UpdateScheduledQuery",
	];
}

/**
 * Condition key constants and builders for logs.
 */
export class LogsConditions {
	/** Condition keys applicable to the CreateDelivery action. */
	static readonly CreateDeliveryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLogAnomalyDetector action. */
	static readonly CreateLogAnomalyDetectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLogGroup action. */
	static readonly CreateLogGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLookupTable action. */
	static readonly CreateLookupTableConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScheduledQuery action. */
	static readonly CreateScheduledQueryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the IntegrateWithS3Table action. */
	static readonly IntegrateWithS3TableConditionKeys: string[] = [
		"logs:data_source_name",
		"logs:data_source_type",
	];
	/** Condition keys applicable to the ProcessWithPipeline action. */
	static readonly ProcessWithPipelineConditionKeys: string[] = [
		"logs:data_source_name",
		"logs:data_source_type",
	];
	/** Condition keys applicable to the PutDeliveryDestination action. */
	static readonly PutDeliveryDestinationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"logs:DeliveryDestinationResourceArn",
	];
	/** Condition keys applicable to the PutDeliverySource action. */
	static readonly PutDeliverySourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"logs:LogGeneratingResourceArns",
	];
	/** Condition keys applicable to the PutDestination action. */
	static readonly PutDestinationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagLogGroup action. */
	static readonly TagLogGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagLogGroup action. */
	static readonly UntagLogGroupConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateDeliveryConfiguration action. */
	static readonly UpdateDeliveryConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
