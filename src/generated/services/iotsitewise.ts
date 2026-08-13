// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iotsitewise.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iotsitewise service.
 */
export class IotsitewiseActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iotsitewise";

	/** [Write] iotsitewise:AssociateAssets */
	static readonly ASSOCIATE_ASSETS = "iotsitewise:AssociateAssets";
	/** [Write] iotsitewise:AssociateTimeSeriesToAssetProperty */
	static readonly ASSOCIATE_TIME_SERIES_TO_ASSET_PROPERTY =
		"iotsitewise:AssociateTimeSeriesToAssetProperty";
	/** [Write] iotsitewise:BatchAssociateDataSegmentsToDataset */
	static readonly BATCH_ASSOCIATE_DATA_SEGMENTS_TO_DATASET =
		"iotsitewise:BatchAssociateDataSegmentsToDataset";
	/** [Write] iotsitewise:BatchAssociateProjectAssets */
	static readonly BATCH_ASSOCIATE_PROJECT_ASSETS =
		"iotsitewise:BatchAssociateProjectAssets";
	/** [Write] iotsitewise:BatchDeleteDatasetDataSegments */
	static readonly BATCH_DELETE_DATASET_DATA_SEGMENTS =
		"iotsitewise:BatchDeleteDatasetDataSegments";
	/** [Write] iotsitewise:BatchDisassociateDataSegmentsFromDataset */
	static readonly BATCH_DISASSOCIATE_DATA_SEGMENTS_FROM_DATASET =
		"iotsitewise:BatchDisassociateDataSegmentsFromDataset";
	/** [Write] iotsitewise:BatchDisassociateProjectAssets */
	static readonly BATCH_DISASSOCIATE_PROJECT_ASSETS =
		"iotsitewise:BatchDisassociateProjectAssets";
	/** [Read] iotsitewise:BatchGetAssetPropertyAggregates */
	static readonly BATCH_GET_ASSET_PROPERTY_AGGREGATES =
		"iotsitewise:BatchGetAssetPropertyAggregates";
	/** [Read] iotsitewise:BatchGetAssetPropertyValue */
	static readonly BATCH_GET_ASSET_PROPERTY_VALUE =
		"iotsitewise:BatchGetAssetPropertyValue";
	/** [Read] iotsitewise:BatchGetAssetPropertyValueHistory */
	static readonly BATCH_GET_ASSET_PROPERTY_VALUE_HISTORY =
		"iotsitewise:BatchGetAssetPropertyValueHistory";
	/** [Write] iotsitewise:BatchPutAssetPropertyValue */
	static readonly BATCH_PUT_ASSET_PROPERTY_VALUE =
		"iotsitewise:BatchPutAssetPropertyValue";
	/** [Write] iotsitewise:CancelEnrichmentJob */
	static readonly CANCEL_ENRICHMENT_JOB = "iotsitewise:CancelEnrichmentJob";
	/** [Write] iotsitewise:CancelPipelineExecution */
	static readonly CANCEL_PIPELINE_EXECUTION =
		"iotsitewise:CancelPipelineExecution";
	/** [Write] iotsitewise:CancelQuery */
	static readonly CANCEL_QUERY = "iotsitewise:CancelQuery";
	/** [Write] iotsitewise:CreateAccessPolicy */
	static readonly CREATE_ACCESS_POLICY = "iotsitewise:CreateAccessPolicy";
	/** [Write] iotsitewise:CreateApplication */
	static readonly CREATE_APPLICATION = "iotsitewise:CreateApplication";
	/** [Write] iotsitewise:CreateAsset */
	static readonly CREATE_ASSET = "iotsitewise:CreateAsset";
	/** [Write] iotsitewise:CreateAssetModel */
	static readonly CREATE_ASSET_MODEL = "iotsitewise:CreateAssetModel";
	/** [Write] iotsitewise:CreateAssetModelCompositeModel */
	static readonly CREATE_ASSET_MODEL_COMPOSITE_MODEL =
		"iotsitewise:CreateAssetModelCompositeModel";
	/** [Write] iotsitewise:CreateBulkImportJob */
	static readonly CREATE_BULK_IMPORT_JOB = "iotsitewise:CreateBulkImportJob";
	/** [Write] iotsitewise:CreateComputationModel */
	static readonly CREATE_COMPUTATION_MODEL =
		"iotsitewise:CreateComputationModel";
	/** [Write] iotsitewise:CreateDashboard */
	static readonly CREATE_DASHBOARD = "iotsitewise:CreateDashboard";
	/** [Write] iotsitewise:CreateDataset */
	static readonly CREATE_DATASET = "iotsitewise:CreateDataset";
	/** [Write] iotsitewise:CreateDatasetExportJob */
	static readonly CREATE_DATASET_EXPORT_JOB =
		"iotsitewise:CreateDatasetExportJob";
	/** [Write] iotsitewise:CreateEnrichmentJob */
	static readonly CREATE_ENRICHMENT_JOB = "iotsitewise:CreateEnrichmentJob";
	/** [Write] iotsitewise:CreateGateway */
	static readonly CREATE_GATEWAY = "iotsitewise:CreateGateway";
	/** [Write] iotsitewise:CreatePipeline */
	static readonly CREATE_PIPELINE = "iotsitewise:CreatePipeline";
	/** [Write] iotsitewise:CreatePortal */
	static readonly CREATE_PORTAL = "iotsitewise:CreatePortal";
	/** [Write] iotsitewise:CreateProject */
	static readonly CREATE_PROJECT = "iotsitewise:CreateProject";
	/** [Write] iotsitewise:CreateTask */
	static readonly CREATE_TASK = "iotsitewise:CreateTask";
	/** [Write] iotsitewise:CreateWorkspace */
	static readonly CREATE_WORKSPACE = "iotsitewise:CreateWorkspace";
	/** [Write] iotsitewise:DeleteAccessPolicy */
	static readonly DELETE_ACCESS_POLICY = "iotsitewise:DeleteAccessPolicy";
	/** [Write] iotsitewise:DeleteApplication */
	static readonly DELETE_APPLICATION = "iotsitewise:DeleteApplication";
	/** [Write] iotsitewise:DeleteAsset */
	static readonly DELETE_ASSET = "iotsitewise:DeleteAsset";
	/** [Write] iotsitewise:DeleteAssetModel */
	static readonly DELETE_ASSET_MODEL = "iotsitewise:DeleteAssetModel";
	/** [Write] iotsitewise:DeleteAssetModelCompositeModel */
	static readonly DELETE_ASSET_MODEL_COMPOSITE_MODEL =
		"iotsitewise:DeleteAssetModelCompositeModel";
	/** [Write] iotsitewise:DeleteAssetModelInterfaceRelationship */
	static readonly DELETE_ASSET_MODEL_INTERFACE_RELATIONSHIP =
		"iotsitewise:DeleteAssetModelInterfaceRelationship";
	/** [Write] iotsitewise:DeleteComputationModel */
	static readonly DELETE_COMPUTATION_MODEL =
		"iotsitewise:DeleteComputationModel";
	/** [Write] iotsitewise:DeleteDashboard */
	static readonly DELETE_DASHBOARD = "iotsitewise:DeleteDashboard";
	/** [Write] iotsitewise:DeleteDataset */
	static readonly DELETE_DATASET = "iotsitewise:DeleteDataset";
	/** [Write] iotsitewise:DeleteGateway */
	static readonly DELETE_GATEWAY = "iotsitewise:DeleteGateway";
	/** [Write] iotsitewise:DeletePipeline */
	static readonly DELETE_PIPELINE = "iotsitewise:DeletePipeline";
	/** [Write] iotsitewise:DeletePortal */
	static readonly DELETE_PORTAL = "iotsitewise:DeletePortal";
	/** [Write] iotsitewise:DeleteProject */
	static readonly DELETE_PROJECT = "iotsitewise:DeleteProject";
	/** [Write] iotsitewise:DeleteTask */
	static readonly DELETE_TASK = "iotsitewise:DeleteTask";
	/** [Write] iotsitewise:DeleteTimeSeries */
	static readonly DELETE_TIME_SERIES = "iotsitewise:DeleteTimeSeries";
	/** [Write] iotsitewise:DeleteWorkspace */
	static readonly DELETE_WORKSPACE = "iotsitewise:DeleteWorkspace";
	/** [Read] iotsitewise:DescribeAccessPolicy */
	static readonly DESCRIBE_ACCESS_POLICY = "iotsitewise:DescribeAccessPolicy";
	/** [Read] iotsitewise:DescribeAction */
	static readonly DESCRIBE_ACTION = "iotsitewise:DescribeAction";
	/** [Read] iotsitewise:DescribeApplication */
	static readonly DESCRIBE_APPLICATION = "iotsitewise:DescribeApplication";
	/** [Read] iotsitewise:DescribeAsset */
	static readonly DESCRIBE_ASSET = "iotsitewise:DescribeAsset";
	/** [Read] iotsitewise:DescribeAssetCompositeModel */
	static readonly DESCRIBE_ASSET_COMPOSITE_MODEL =
		"iotsitewise:DescribeAssetCompositeModel";
	/** [Read] iotsitewise:DescribeAssetModel */
	static readonly DESCRIBE_ASSET_MODEL = "iotsitewise:DescribeAssetModel";
	/** [Read] iotsitewise:DescribeAssetModelCompositeModel */
	static readonly DESCRIBE_ASSET_MODEL_COMPOSITE_MODEL =
		"iotsitewise:DescribeAssetModelCompositeModel";
	/** [Read] iotsitewise:DescribeAssetModelInterfaceRelationship */
	static readonly DESCRIBE_ASSET_MODEL_INTERFACE_RELATIONSHIP =
		"iotsitewise:DescribeAssetModelInterfaceRelationship";
	/** [Read] iotsitewise:DescribeAssetProperty */
	static readonly DESCRIBE_ASSET_PROPERTY = "iotsitewise:DescribeAssetProperty";
	/** [Read] iotsitewise:DescribeBulkImportJob */
	static readonly DESCRIBE_BULK_IMPORT_JOB =
		"iotsitewise:DescribeBulkImportJob";
	/** [Read] iotsitewise:DescribeComputationModel */
	static readonly DESCRIBE_COMPUTATION_MODEL =
		"iotsitewise:DescribeComputationModel";
	/** [Read] iotsitewise:DescribeComputationModelExecutionSummary */
	static readonly DESCRIBE_COMPUTATION_MODEL_EXECUTION_SUMMARY =
		"iotsitewise:DescribeComputationModelExecutionSummary";
	/** [Read] iotsitewise:DescribeDashboard */
	static readonly DESCRIBE_DASHBOARD = "iotsitewise:DescribeDashboard";
	/** [Read] iotsitewise:DescribeDataset */
	static readonly DESCRIBE_DATASET = "iotsitewise:DescribeDataset";
	/** [Read] iotsitewise:DescribeDatasetExportJob */
	static readonly DESCRIBE_DATASET_EXPORT_JOB =
		"iotsitewise:DescribeDatasetExportJob";
	/** [Read] iotsitewise:DescribeDefaultEncryptionConfiguration */
	static readonly DESCRIBE_DEFAULT_ENCRYPTION_CONFIGURATION =
		"iotsitewise:DescribeDefaultEncryptionConfiguration";
	/** [Read] iotsitewise:DescribeEnrichmentJob */
	static readonly DESCRIBE_ENRICHMENT_JOB = "iotsitewise:DescribeEnrichmentJob";
	/** [Read] iotsitewise:DescribeExecution */
	static readonly DESCRIBE_EXECUTION = "iotsitewise:DescribeExecution";
	/** [Read] iotsitewise:DescribeGateway */
	static readonly DESCRIBE_GATEWAY = "iotsitewise:DescribeGateway";
	/** [Read] iotsitewise:DescribeGatewayCapabilityConfiguration */
	static readonly DESCRIBE_GATEWAY_CAPABILITY_CONFIGURATION =
		"iotsitewise:DescribeGatewayCapabilityConfiguration";
	/** [Read] iotsitewise:DescribeLoggingOptions */
	static readonly DESCRIBE_LOGGING_OPTIONS =
		"iotsitewise:DescribeLoggingOptions";
	/** [Read] iotsitewise:DescribePipeline */
	static readonly DESCRIBE_PIPELINE = "iotsitewise:DescribePipeline";
	/** [Read] iotsitewise:DescribePipelineExecution */
	static readonly DESCRIBE_PIPELINE_EXECUTION =
		"iotsitewise:DescribePipelineExecution";
	/** [Read] iotsitewise:DescribePortal */
	static readonly DESCRIBE_PORTAL = "iotsitewise:DescribePortal";
	/** [Read] iotsitewise:DescribeProject */
	static readonly DESCRIBE_PROJECT = "iotsitewise:DescribeProject";
	/** [Read] iotsitewise:DescribeQuery */
	static readonly DESCRIBE_QUERY = "iotsitewise:DescribeQuery";
	/** [Read] iotsitewise:DescribeSearch */
	static readonly DESCRIBE_SEARCH = "iotsitewise:DescribeSearch";
	/** [Read] iotsitewise:DescribeStorageConfiguration */
	static readonly DESCRIBE_STORAGE_CONFIGURATION =
		"iotsitewise:DescribeStorageConfiguration";
	/** [Read] iotsitewise:DescribeTask */
	static readonly DESCRIBE_TASK = "iotsitewise:DescribeTask";
	/** [Read] iotsitewise:DescribeTimeSeries */
	static readonly DESCRIBE_TIME_SERIES = "iotsitewise:DescribeTimeSeries";
	/** [Read] iotsitewise:DescribeWorkspace */
	static readonly DESCRIBE_WORKSPACE = "iotsitewise:DescribeWorkspace";
	/** [Write] iotsitewise:DisassociateAssets */
	static readonly DISASSOCIATE_ASSETS = "iotsitewise:DisassociateAssets";
	/** [Write] iotsitewise:DisassociateTimeSeriesFromAssetProperty */
	static readonly DISASSOCIATE_TIME_SERIES_FROM_ASSET_PROPERTY =
		"iotsitewise:DisassociateTimeSeriesFromAssetProperty";
	/** [Write] iotsitewise:EnableSiteWiseIntegration */
	static readonly ENABLE_SITE_WISE_INTEGRATION =
		"iotsitewise:EnableSiteWiseIntegration";
	/** [Write] iotsitewise:ExecuteAction */
	static readonly EXECUTE_ACTION = "iotsitewise:ExecuteAction";
	/** [Read] iotsitewise:ExecuteQuery */
	static readonly EXECUTE_QUERY = "iotsitewise:ExecuteQuery";
	/** [Read] iotsitewise:GetAssetPropertyAggregates */
	static readonly GET_ASSET_PROPERTY_AGGREGATES =
		"iotsitewise:GetAssetPropertyAggregates";
	/** [Read] iotsitewise:GetAssetPropertyValue */
	static readonly GET_ASSET_PROPERTY_VALUE =
		"iotsitewise:GetAssetPropertyValue";
	/** [Read] iotsitewise:GetAssetPropertyValueHistory */
	static readonly GET_ASSET_PROPERTY_VALUE_HISTORY =
		"iotsitewise:GetAssetPropertyValueHistory";
	/** [Read] iotsitewise:GetCaptureData */
	static readonly GET_CAPTURE_DATA = "iotsitewise:GetCaptureData";
	/** [Read] iotsitewise:GetInterpolatedAssetPropertyValues */
	static readonly GET_INTERPOLATED_ASSET_PROPERTY_VALUES =
		"iotsitewise:GetInterpolatedAssetPropertyValues";
	/** [Read] iotsitewise:GetQueryResults */
	static readonly GET_QUERY_RESULTS = "iotsitewise:GetQueryResults";
	/** [Read] iotsitewise:GetSearchResults */
	static readonly GET_SEARCH_RESULTS = "iotsitewise:GetSearchResults";
	/** [Read] iotsitewise:InvokeAssistant */
	static readonly INVOKE_ASSISTANT = "iotsitewise:InvokeAssistant";
	/** [List] iotsitewise:ListAccessPolicies */
	static readonly LIST_ACCESS_POLICIES = "iotsitewise:ListAccessPolicies";
	/** [List] iotsitewise:ListActions */
	static readonly LIST_ACTIONS = "iotsitewise:ListActions";
	/** [List] iotsitewise:ListApplications */
	static readonly LIST_APPLICATIONS = "iotsitewise:ListApplications";
	/** [List] iotsitewise:ListAssetModelCompositeModels */
	static readonly LIST_ASSET_MODEL_COMPOSITE_MODELS =
		"iotsitewise:ListAssetModelCompositeModels";
	/** [List] iotsitewise:ListAssetModelProperties */
	static readonly LIST_ASSET_MODEL_PROPERTIES =
		"iotsitewise:ListAssetModelProperties";
	/** [List] iotsitewise:ListAssetModels */
	static readonly LIST_ASSET_MODELS = "iotsitewise:ListAssetModels";
	/** [List] iotsitewise:ListAssetProperties */
	static readonly LIST_ASSET_PROPERTIES = "iotsitewise:ListAssetProperties";
	/** [List] iotsitewise:ListAssetRelationships */
	static readonly LIST_ASSET_RELATIONSHIPS =
		"iotsitewise:ListAssetRelationships";
	/** [List] iotsitewise:ListAssets */
	static readonly LIST_ASSETS = "iotsitewise:ListAssets";
	/** [List] iotsitewise:ListAssociatedAssets */
	static readonly LIST_ASSOCIATED_ASSETS = "iotsitewise:ListAssociatedAssets";
	/** [List] iotsitewise:ListBulkImportJobs */
	static readonly LIST_BULK_IMPORT_JOBS = "iotsitewise:ListBulkImportJobs";
	/** [List] iotsitewise:ListCompositionRelationships */
	static readonly LIST_COMPOSITION_RELATIONSHIPS =
		"iotsitewise:ListCompositionRelationships";
	/** [List] iotsitewise:ListComputationModelDataBindingUsages */
	static readonly LIST_COMPUTATION_MODEL_DATA_BINDING_USAGES =
		"iotsitewise:ListComputationModelDataBindingUsages";
	/** [List] iotsitewise:ListComputationModelResolveToResources */
	static readonly LIST_COMPUTATION_MODEL_RESOLVE_TO_RESOURCES =
		"iotsitewise:ListComputationModelResolveToResources";
	/** [List] iotsitewise:ListComputationModels */
	static readonly LIST_COMPUTATION_MODELS = "iotsitewise:ListComputationModels";
	/** [List] iotsitewise:ListDashboards */
	static readonly LIST_DASHBOARDS = "iotsitewise:ListDashboards";
	/** [List] iotsitewise:ListDatasetDataSegmentRelationships */
	static readonly LIST_DATASET_DATA_SEGMENT_RELATIONSHIPS =
		"iotsitewise:ListDatasetDataSegmentRelationships";
	/** [List] iotsitewise:ListDatasetDataSegments */
	static readonly LIST_DATASET_DATA_SEGMENTS =
		"iotsitewise:ListDatasetDataSegments";
	/** [List] iotsitewise:ListDatasetExportJobs */
	static readonly LIST_DATASET_EXPORT_JOBS =
		"iotsitewise:ListDatasetExportJobs";
	/** [List] iotsitewise:ListDatasets */
	static readonly LIST_DATASETS = "iotsitewise:ListDatasets";
	/** [List] iotsitewise:ListEnrichmentJobs */
	static readonly LIST_ENRICHMENT_JOBS = "iotsitewise:ListEnrichmentJobs";
	/** [List] iotsitewise:ListExecutions */
	static readonly LIST_EXECUTIONS = "iotsitewise:ListExecutions";
	/** [List] iotsitewise:ListGateways */
	static readonly LIST_GATEWAYS = "iotsitewise:ListGateways";
	/** [List] iotsitewise:ListInterfaceRelationships */
	static readonly LIST_INTERFACE_RELATIONSHIPS =
		"iotsitewise:ListInterfaceRelationships";
	/** [List] iotsitewise:ListPipelineExecutions */
	static readonly LIST_PIPELINE_EXECUTIONS =
		"iotsitewise:ListPipelineExecutions";
	/** [List] iotsitewise:ListPipelines */
	static readonly LIST_PIPELINES = "iotsitewise:ListPipelines";
	/** [List] iotsitewise:ListPortals */
	static readonly LIST_PORTALS = "iotsitewise:ListPortals";
	/** [List] iotsitewise:ListProjectAssets */
	static readonly LIST_PROJECT_ASSETS = "iotsitewise:ListProjectAssets";
	/** [List] iotsitewise:ListProjects */
	static readonly LIST_PROJECTS = "iotsitewise:ListProjects";
	/** [List] iotsitewise:ListQueries */
	static readonly LIST_QUERIES = "iotsitewise:ListQueries";
	/** [List] iotsitewise:ListSearches */
	static readonly LIST_SEARCHES = "iotsitewise:ListSearches";
	/** [Read] iotsitewise:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "iotsitewise:ListTagsForResource";
	/** [List] iotsitewise:ListTasks */
	static readonly LIST_TASKS = "iotsitewise:ListTasks";
	/** [List] iotsitewise:ListTimeSeries */
	static readonly LIST_TIME_SERIES = "iotsitewise:ListTimeSeries";
	/** [List] iotsitewise:ListWorkspaces */
	static readonly LIST_WORKSPACES = "iotsitewise:ListWorkspaces";
	/** [Write] iotsitewise:PutAssetModelInterfaceRelationship */
	static readonly PUT_ASSET_MODEL_INTERFACE_RELATIONSHIP =
		"iotsitewise:PutAssetModelInterfaceRelationship";
	/** [Write] iotsitewise:PutDefaultEncryptionConfiguration */
	static readonly PUT_DEFAULT_ENCRYPTION_CONFIGURATION =
		"iotsitewise:PutDefaultEncryptionConfiguration";
	/** [Write] iotsitewise:PutLoggingOptions */
	static readonly PUT_LOGGING_OPTIONS = "iotsitewise:PutLoggingOptions";
	/** [Write] iotsitewise:PutStorageConfiguration */
	static readonly PUT_STORAGE_CONFIGURATION =
		"iotsitewise:PutStorageConfiguration";
	/** [Write] iotsitewise:StartPipelineExecution */
	static readonly START_PIPELINE_EXECUTION =
		"iotsitewise:StartPipelineExecution";
	/** [Write] iotsitewise:StartQuery */
	static readonly START_QUERY = "iotsitewise:StartQuery";
	/** [Write] iotsitewise:StartSearch */
	static readonly START_SEARCH = "iotsitewise:StartSearch";
	/** [Tagging] iotsitewise:TagResource */
	static readonly TAG_RESOURCE = "iotsitewise:TagResource";
	/** [Tagging] iotsitewise:UntagResource */
	static readonly UNTAG_RESOURCE = "iotsitewise:UntagResource";
	/** [Write] iotsitewise:UpdateAccessPolicy */
	static readonly UPDATE_ACCESS_POLICY = "iotsitewise:UpdateAccessPolicy";
	/** [Write] iotsitewise:UpdateAsset */
	static readonly UPDATE_ASSET = "iotsitewise:UpdateAsset";
	/** [Write] iotsitewise:UpdateAssetModel */
	static readonly UPDATE_ASSET_MODEL = "iotsitewise:UpdateAssetModel";
	/** [Write] iotsitewise:UpdateAssetModelCompositeModel */
	static readonly UPDATE_ASSET_MODEL_COMPOSITE_MODEL =
		"iotsitewise:UpdateAssetModelCompositeModel";
	/** [Write] iotsitewise:UpdateAssetModelPropertyRouting */
	static readonly UPDATE_ASSET_MODEL_PROPERTY_ROUTING =
		"iotsitewise:UpdateAssetModelPropertyRouting";
	/** [Write] iotsitewise:UpdateAssetProperty */
	static readonly UPDATE_ASSET_PROPERTY = "iotsitewise:UpdateAssetProperty";
	/** [Write] iotsitewise:UpdateComputationModel */
	static readonly UPDATE_COMPUTATION_MODEL =
		"iotsitewise:UpdateComputationModel";
	/** [Write] iotsitewise:UpdateDashboard */
	static readonly UPDATE_DASHBOARD = "iotsitewise:UpdateDashboard";
	/** [Write] iotsitewise:UpdateDataset */
	static readonly UPDATE_DATASET = "iotsitewise:UpdateDataset";
	/** [Write] iotsitewise:UpdateGateway */
	static readonly UPDATE_GATEWAY = "iotsitewise:UpdateGateway";
	/** [Write] iotsitewise:UpdateGatewayCapabilityConfiguration */
	static readonly UPDATE_GATEWAY_CAPABILITY_CONFIGURATION =
		"iotsitewise:UpdateGatewayCapabilityConfiguration";
	/** [Write] iotsitewise:UpdatePipeline */
	static readonly UPDATE_PIPELINE = "iotsitewise:UpdatePipeline";
	/** [Write] iotsitewise:UpdatePortal */
	static readonly UPDATE_PORTAL = "iotsitewise:UpdatePortal";
	/** [Write] iotsitewise:UpdateProject */
	static readonly UPDATE_PROJECT = "iotsitewise:UpdateProject";
	/** [Write] iotsitewise:UpdateTask */
	static readonly UPDATE_TASK = "iotsitewise:UpdateTask";
	/** [Write] iotsitewise:UpdateWorkspace */
	static readonly UPDATE_WORKSPACE = "iotsitewise:UpdateWorkspace";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IotsitewiseActions.BATCH_GET_ASSET_PROPERTY_AGGREGATES,
		IotsitewiseActions.BATCH_GET_ASSET_PROPERTY_VALUE,
		IotsitewiseActions.BATCH_GET_ASSET_PROPERTY_VALUE_HISTORY,
		IotsitewiseActions.DESCRIBE_ACCESS_POLICY,
		IotsitewiseActions.DESCRIBE_ACTION,
		IotsitewiseActions.DESCRIBE_APPLICATION,
		IotsitewiseActions.DESCRIBE_ASSET,
		IotsitewiseActions.DESCRIBE_ASSET_COMPOSITE_MODEL,
		IotsitewiseActions.DESCRIBE_ASSET_MODEL,
		IotsitewiseActions.DESCRIBE_ASSET_MODEL_COMPOSITE_MODEL,
		IotsitewiseActions.DESCRIBE_ASSET_MODEL_INTERFACE_RELATIONSHIP,
		IotsitewiseActions.DESCRIBE_ASSET_PROPERTY,
		IotsitewiseActions.DESCRIBE_BULK_IMPORT_JOB,
		IotsitewiseActions.DESCRIBE_COMPUTATION_MODEL,
		IotsitewiseActions.DESCRIBE_COMPUTATION_MODEL_EXECUTION_SUMMARY,
		IotsitewiseActions.DESCRIBE_DASHBOARD,
		IotsitewiseActions.DESCRIBE_DATASET,
		IotsitewiseActions.DESCRIBE_DATASET_EXPORT_JOB,
		IotsitewiseActions.DESCRIBE_DEFAULT_ENCRYPTION_CONFIGURATION,
		IotsitewiseActions.DESCRIBE_ENRICHMENT_JOB,
		IotsitewiseActions.DESCRIBE_EXECUTION,
		IotsitewiseActions.DESCRIBE_GATEWAY,
		IotsitewiseActions.DESCRIBE_GATEWAY_CAPABILITY_CONFIGURATION,
		IotsitewiseActions.DESCRIBE_LOGGING_OPTIONS,
		IotsitewiseActions.DESCRIBE_PIPELINE,
		IotsitewiseActions.DESCRIBE_PIPELINE_EXECUTION,
		IotsitewiseActions.DESCRIBE_PORTAL,
		IotsitewiseActions.DESCRIBE_PROJECT,
		IotsitewiseActions.DESCRIBE_QUERY,
		IotsitewiseActions.DESCRIBE_SEARCH,
		IotsitewiseActions.DESCRIBE_STORAGE_CONFIGURATION,
		IotsitewiseActions.DESCRIBE_TASK,
		IotsitewiseActions.DESCRIBE_TIME_SERIES,
		IotsitewiseActions.DESCRIBE_WORKSPACE,
		IotsitewiseActions.EXECUTE_QUERY,
		IotsitewiseActions.GET_ASSET_PROPERTY_AGGREGATES,
		IotsitewiseActions.GET_ASSET_PROPERTY_VALUE,
		IotsitewiseActions.GET_ASSET_PROPERTY_VALUE_HISTORY,
		IotsitewiseActions.GET_CAPTURE_DATA,
		IotsitewiseActions.GET_INTERPOLATED_ASSET_PROPERTY_VALUES,
		IotsitewiseActions.GET_QUERY_RESULTS,
		IotsitewiseActions.GET_SEARCH_RESULTS,
		IotsitewiseActions.INVOKE_ASSISTANT,
		IotsitewiseActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IotsitewiseActions.ASSOCIATE_ASSETS,
		IotsitewiseActions.ASSOCIATE_TIME_SERIES_TO_ASSET_PROPERTY,
		IotsitewiseActions.BATCH_ASSOCIATE_DATA_SEGMENTS_TO_DATASET,
		IotsitewiseActions.BATCH_ASSOCIATE_PROJECT_ASSETS,
		IotsitewiseActions.BATCH_DELETE_DATASET_DATA_SEGMENTS,
		IotsitewiseActions.BATCH_DISASSOCIATE_DATA_SEGMENTS_FROM_DATASET,
		IotsitewiseActions.BATCH_DISASSOCIATE_PROJECT_ASSETS,
		IotsitewiseActions.BATCH_PUT_ASSET_PROPERTY_VALUE,
		IotsitewiseActions.CANCEL_ENRICHMENT_JOB,
		IotsitewiseActions.CANCEL_PIPELINE_EXECUTION,
		IotsitewiseActions.CANCEL_QUERY,
		IotsitewiseActions.CREATE_ACCESS_POLICY,
		IotsitewiseActions.CREATE_APPLICATION,
		IotsitewiseActions.CREATE_ASSET,
		IotsitewiseActions.CREATE_ASSET_MODEL,
		IotsitewiseActions.CREATE_ASSET_MODEL_COMPOSITE_MODEL,
		IotsitewiseActions.CREATE_BULK_IMPORT_JOB,
		IotsitewiseActions.CREATE_COMPUTATION_MODEL,
		IotsitewiseActions.CREATE_DASHBOARD,
		IotsitewiseActions.CREATE_DATASET,
		IotsitewiseActions.CREATE_DATASET_EXPORT_JOB,
		IotsitewiseActions.CREATE_ENRICHMENT_JOB,
		IotsitewiseActions.CREATE_GATEWAY,
		IotsitewiseActions.CREATE_PIPELINE,
		IotsitewiseActions.CREATE_PORTAL,
		IotsitewiseActions.CREATE_PROJECT,
		IotsitewiseActions.CREATE_TASK,
		IotsitewiseActions.CREATE_WORKSPACE,
		IotsitewiseActions.DELETE_ACCESS_POLICY,
		IotsitewiseActions.DELETE_APPLICATION,
		IotsitewiseActions.DELETE_ASSET,
		IotsitewiseActions.DELETE_ASSET_MODEL,
		IotsitewiseActions.DELETE_ASSET_MODEL_COMPOSITE_MODEL,
		IotsitewiseActions.DELETE_ASSET_MODEL_INTERFACE_RELATIONSHIP,
		IotsitewiseActions.DELETE_COMPUTATION_MODEL,
		IotsitewiseActions.DELETE_DASHBOARD,
		IotsitewiseActions.DELETE_DATASET,
		IotsitewiseActions.DELETE_GATEWAY,
		IotsitewiseActions.DELETE_PIPELINE,
		IotsitewiseActions.DELETE_PORTAL,
		IotsitewiseActions.DELETE_PROJECT,
		IotsitewiseActions.DELETE_TASK,
		IotsitewiseActions.DELETE_TIME_SERIES,
		IotsitewiseActions.DELETE_WORKSPACE,
		IotsitewiseActions.DISASSOCIATE_ASSETS,
		IotsitewiseActions.DISASSOCIATE_TIME_SERIES_FROM_ASSET_PROPERTY,
		IotsitewiseActions.ENABLE_SITE_WISE_INTEGRATION,
		IotsitewiseActions.EXECUTE_ACTION,
		IotsitewiseActions.PUT_ASSET_MODEL_INTERFACE_RELATIONSHIP,
		IotsitewiseActions.PUT_DEFAULT_ENCRYPTION_CONFIGURATION,
		IotsitewiseActions.PUT_LOGGING_OPTIONS,
		IotsitewiseActions.PUT_STORAGE_CONFIGURATION,
		IotsitewiseActions.START_PIPELINE_EXECUTION,
		IotsitewiseActions.START_QUERY,
		IotsitewiseActions.START_SEARCH,
		IotsitewiseActions.UPDATE_ACCESS_POLICY,
		IotsitewiseActions.UPDATE_ASSET,
		IotsitewiseActions.UPDATE_ASSET_MODEL,
		IotsitewiseActions.UPDATE_ASSET_MODEL_COMPOSITE_MODEL,
		IotsitewiseActions.UPDATE_ASSET_MODEL_PROPERTY_ROUTING,
		IotsitewiseActions.UPDATE_ASSET_PROPERTY,
		IotsitewiseActions.UPDATE_COMPUTATION_MODEL,
		IotsitewiseActions.UPDATE_DASHBOARD,
		IotsitewiseActions.UPDATE_DATASET,
		IotsitewiseActions.UPDATE_GATEWAY,
		IotsitewiseActions.UPDATE_GATEWAY_CAPABILITY_CONFIGURATION,
		IotsitewiseActions.UPDATE_PIPELINE,
		IotsitewiseActions.UPDATE_PORTAL,
		IotsitewiseActions.UPDATE_PROJECT,
		IotsitewiseActions.UPDATE_TASK,
		IotsitewiseActions.UPDATE_WORKSPACE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IotsitewiseActions.LIST_ACCESS_POLICIES,
		IotsitewiseActions.LIST_ACTIONS,
		IotsitewiseActions.LIST_APPLICATIONS,
		IotsitewiseActions.LIST_ASSET_MODEL_COMPOSITE_MODELS,
		IotsitewiseActions.LIST_ASSET_MODEL_PROPERTIES,
		IotsitewiseActions.LIST_ASSET_MODELS,
		IotsitewiseActions.LIST_ASSET_PROPERTIES,
		IotsitewiseActions.LIST_ASSET_RELATIONSHIPS,
		IotsitewiseActions.LIST_ASSETS,
		IotsitewiseActions.LIST_ASSOCIATED_ASSETS,
		IotsitewiseActions.LIST_BULK_IMPORT_JOBS,
		IotsitewiseActions.LIST_COMPOSITION_RELATIONSHIPS,
		IotsitewiseActions.LIST_COMPUTATION_MODEL_DATA_BINDING_USAGES,
		IotsitewiseActions.LIST_COMPUTATION_MODEL_RESOLVE_TO_RESOURCES,
		IotsitewiseActions.LIST_COMPUTATION_MODELS,
		IotsitewiseActions.LIST_DASHBOARDS,
		IotsitewiseActions.LIST_DATASET_DATA_SEGMENT_RELATIONSHIPS,
		IotsitewiseActions.LIST_DATASET_DATA_SEGMENTS,
		IotsitewiseActions.LIST_DATASET_EXPORT_JOBS,
		IotsitewiseActions.LIST_DATASETS,
		IotsitewiseActions.LIST_ENRICHMENT_JOBS,
		IotsitewiseActions.LIST_EXECUTIONS,
		IotsitewiseActions.LIST_GATEWAYS,
		IotsitewiseActions.LIST_INTERFACE_RELATIONSHIPS,
		IotsitewiseActions.LIST_PIPELINE_EXECUTIONS,
		IotsitewiseActions.LIST_PIPELINES,
		IotsitewiseActions.LIST_PORTALS,
		IotsitewiseActions.LIST_PROJECT_ASSETS,
		IotsitewiseActions.LIST_PROJECTS,
		IotsitewiseActions.LIST_QUERIES,
		IotsitewiseActions.LIST_SEARCHES,
		IotsitewiseActions.LIST_TASKS,
		IotsitewiseActions.LIST_TIME_SERIES,
		IotsitewiseActions.LIST_WORKSPACES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		IotsitewiseActions.TAG_RESOURCE,
		IotsitewiseActions.UNTAG_RESOURCE,
	];
}

const AccessPolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):access-policy/(?<accessPolicyId>[^:/?]+)$",
);
const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):workspace/(?<workspaceName>[^:/?]+)/application/(?<applicationId>[^:/?]+)$",
);
const AssetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):asset/(?<assetId>[^:/?]+)$",
);
const AssetModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):asset-model/(?<assetModelId>[^:/?]+)$",
);
const ComputationModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):computation-model/(?<computationModelId>[^:/?]+)$",
);
const DashboardArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):dashboard/(?<dashboardId>[^:/?]+)$",
);
const DatasetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):dataset/(?<datasetId>[^:/?]+)$",
);
const GatewayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)$",
);
const PipelineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):workspace/(?<workspaceName>[^:/?]+)/pipeline/(?<pipelineName>[^:/?]+)$",
);
const PortalArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):portal/(?<portalId>[^:/?]+)$",
);
const ProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):project/(?<projectId>[^:/?]+)$",
);
const TaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):workspace/(?<workspaceName>[^:/?]+)/task/(?<taskName>[^:/?]+)$",
);
const TimeSeriesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):time-series/(?<timeSeriesId>[^:/?]+)$",
);
const WorkspaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):workspace/(?<workspaceName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for iotsitewise resources.
 */
export class IotsitewiseResources {
	/**
	 * Builds an ARN for the access-policy resource.
	 */
	static accessPolicy(props: {
		/** The AccessPolicyId component of the ARN. */
		readonly accessPolicyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:access-policy/${props.accessPolicyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the access-policy resource.
	 */
	static isValidAccessPolicyArn(arn: string): boolean {
		return AccessPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a access-policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessPolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accessPolicyId: string;
	} {
		const match = AccessPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid access-policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accessPolicyId: match.groups!.accessPolicyId,
		};
	}

	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The WorkspaceName component of the ARN. */
		readonly workspaceName: string;
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:workspace/${props.workspaceName}/application/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceName: string;
		applicationId: string;
	} {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceName: match.groups!.workspaceName,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the asset resource.
	 */
	static asset(props: {
		/** The AssetId component of the ARN. */
		readonly assetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:asset/${props.assetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the asset resource.
	 */
	static isValidAssetArn(arn: string): boolean {
		return AssetArnRegex.test(arn);
	}

	/**
	 * Parses a asset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		assetId: string;
	} {
		const match = AssetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid asset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assetId: match.groups!.assetId,
		};
	}

	/**
	 * Builds an ARN for the asset-model resource.
	 */
	static assetModel(props: {
		/** The AssetModelId component of the ARN. */
		readonly assetModelId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:asset-model/${props.assetModelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the asset-model resource.
	 */
	static isValidAssetModelArn(arn: string): boolean {
		return AssetModelArnRegex.test(arn);
	}

	/**
	 * Parses a asset-model ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssetModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		assetModelId: string;
	} {
		const match = AssetModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid asset-model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assetModelId: match.groups!.assetModelId,
		};
	}

	/**
	 * Builds an ARN for the computation-model resource.
	 */
	static computationModel(props: {
		/** The ComputationModelId component of the ARN. */
		readonly computationModelId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:computation-model/${props.computationModelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the computation-model resource.
	 */
	static isValidComputationModelArn(arn: string): boolean {
		return ComputationModelArnRegex.test(arn);
	}

	/**
	 * Parses a computation-model ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseComputationModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		computationModelId: string;
	} {
		const match = ComputationModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid computation-model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			computationModelId: match.groups!.computationModelId,
		};
	}

	/**
	 * Builds an ARN for the dashboard resource.
	 */
	static dashboard(props: {
		/** The DashboardId component of the ARN. */
		readonly dashboardId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:dashboard/${props.dashboardId}`;
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
		region: string;
		account: string;
		dashboardId: string;
	} {
		const match = DashboardArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dashboard ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dashboardId: match.groups!.dashboardId,
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
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.datasetId}`;
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
	 * Builds an ARN for the gateway resource.
	 */
	static gateway(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the gateway resource.
	 */
	static isValidGatewayArn(arn: string): boolean {
		return GatewayArnRegex.test(arn);
	}

	/**
	 * Parses a gateway ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGatewayArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
	} {
		const match = GatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid gateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
		};
	}

	/**
	 * Builds an ARN for the pipeline resource.
	 */
	static pipeline(props: {
		/** The WorkspaceName component of the ARN. */
		readonly workspaceName: string;
		/** The PipelineName component of the ARN. */
		readonly pipelineName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:workspace/${props.workspaceName}/pipeline/${props.pipelineName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the pipeline resource.
	 */
	static isValidPipelineArn(arn: string): boolean {
		return PipelineArnRegex.test(arn);
	}

	/**
	 * Parses a pipeline ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePipelineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceName: string;
		pipelineName: string;
	} {
		const match = PipelineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pipeline ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceName: match.groups!.workspaceName,
			pipelineName: match.groups!.pipelineName,
		};
	}

	/**
	 * Builds an ARN for the portal resource.
	 */
	static portal(props: {
		/** The PortalId component of the ARN. */
		readonly portalId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:portal/${props.portalId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the portal resource.
	 */
	static isValidPortalArn(arn: string): boolean {
		return PortalArnRegex.test(arn);
	}

	/**
	 * Parses a portal ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePortalArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		portalId: string;
	} {
		const match = PortalArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid portal ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			portalId: match.groups!.portalId,
		};
	}

	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: {
		/** The ProjectId component of the ARN. */
		readonly projectId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the project resource.
	 */
	static isValidProjectArn(arn: string): boolean {
		return ProjectArnRegex.test(arn);
	}

	/**
	 * Parses a project ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		projectId: string;
	} {
		const match = ProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectId: match.groups!.projectId,
		};
	}

	/**
	 * Builds an ARN for the task resource.
	 */
	static task(props: {
		/** The WorkspaceName component of the ARN. */
		readonly workspaceName: string;
		/** The TaskName component of the ARN. */
		readonly taskName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:workspace/${props.workspaceName}/task/${props.taskName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the task resource.
	 */
	static isValidTaskArn(arn: string): boolean {
		return TaskArnRegex.test(arn);
	}

	/**
	 * Parses a task ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceName: string;
		taskName: string;
	} {
		const match = TaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid task ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceName: match.groups!.workspaceName,
			taskName: match.groups!.taskName,
		};
	}

	/**
	 * Builds an ARN for the time-series resource.
	 */
	static timeSeries(props: {
		/** The TimeSeriesId component of the ARN. */
		readonly timeSeriesId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:time-series/${props.timeSeriesId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the time-series resource.
	 */
	static isValidTimeSeriesArn(arn: string): boolean {
		return TimeSeriesArnRegex.test(arn);
	}

	/**
	 * Parses a time-series ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTimeSeriesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		timeSeriesId: string;
	} {
		const match = TimeSeriesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid time-series ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			timeSeriesId: match.groups!.timeSeriesId,
		};
	}

	/**
	 * Builds an ARN for the workspace resource.
	 */
	static workspace(props: {
		/** The WorkspaceName component of the ARN. */
		readonly workspaceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotsitewise:${props.region ?? "*"}:${props.account ?? "*"}:workspace/${props.workspaceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workspace resource.
	 */
	static isValidWorkspaceArn(arn: string): boolean {
		return WorkspaceArnRegex.test(arn);
	}

	/**
	 * Parses a workspace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkspaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceName: string;
	} {
		const match = WorkspaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workspace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceName: match.groups!.workspaceName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for iotsitewise.
 */
export class IotsitewiseOperations {
	/** IAM actions required for the AssociateAssets API call. */
	static readonly ASSOCIATE_ASSETS: string[] = ["iotsitewise:AssociateAssets"];
	/** IAM actions required for the AssociateTimeSeriesToAssetProperty API call. */
	static readonly ASSOCIATE_TIME_SERIES_TO_ASSET_PROPERTY: string[] = [
		"iotsitewise:AssociateTimeSeriesToAssetProperty",
	];
	/** IAM actions required for the BatchAssociateDataSegmentsToDataset API call. */
	static readonly BATCH_ASSOCIATE_DATA_SEGMENTS_TO_DATASET: string[] = [
		"iotsitewise:BatchAssociateDataSegmentsToDataset",
	];
	/** IAM actions required for the BatchAssociateProjectAssets API call. */
	static readonly BATCH_ASSOCIATE_PROJECT_ASSETS: string[] = [
		"iotsitewise:BatchAssociateProjectAssets",
	];
	/** IAM actions required for the BatchDeleteDatasetDataSegments API call. */
	static readonly BATCH_DELETE_DATASET_DATA_SEGMENTS: string[] = [
		"iotsitewise:BatchDeleteDatasetDataSegments",
	];
	/** IAM actions required for the BatchDisassociateDataSegmentsFromDataset API call. */
	static readonly BATCH_DISASSOCIATE_DATA_SEGMENTS_FROM_DATASET: string[] = [
		"iotsitewise:BatchDisassociateDataSegmentsFromDataset",
	];
	/** IAM actions required for the BatchDisassociateProjectAssets API call. */
	static readonly BATCH_DISASSOCIATE_PROJECT_ASSETS: string[] = [
		"iotsitewise:BatchDisassociateProjectAssets",
	];
	/** IAM actions required for the BatchGetAssetPropertyAggregates API call. */
	static readonly BATCH_GET_ASSET_PROPERTY_AGGREGATES: string[] = [
		"iotsitewise:BatchGetAssetPropertyAggregates",
	];
	/** IAM actions required for the BatchGetAssetPropertyValue API call. */
	static readonly BATCH_GET_ASSET_PROPERTY_VALUE: string[] = [
		"iotsitewise:BatchGetAssetPropertyValue",
	];
	/** IAM actions required for the BatchGetAssetPropertyValueHistory API call. */
	static readonly BATCH_GET_ASSET_PROPERTY_VALUE_HISTORY: string[] = [
		"iotsitewise:BatchGetAssetPropertyValueHistory",
	];
	/** IAM actions required for the BatchPutAssetPropertyValue API call. */
	static readonly BATCH_PUT_ASSET_PROPERTY_VALUE: string[] = [
		"iotsitewise:BatchPutAssetPropertyValue",
	];
	/** IAM actions required for the CancelEnrichmentJob API call. */
	static readonly CANCEL_ENRICHMENT_JOB: string[] = [
		"iotsitewise:CancelEnrichmentJob",
	];
	/** IAM actions required for the CancelPipelineExecution API call. */
	static readonly CANCEL_PIPELINE_EXECUTION: string[] = [
		"iotsitewise:CancelPipelineExecution",
	];
	/** IAM actions required for the CancelQuery API call. */
	static readonly CANCEL_QUERY: string[] = ["iotsitewise:CancelQuery"];
	/** IAM actions required for the CreateAccessPolicy API call. */
	static readonly CREATE_ACCESS_POLICY: string[] = [
		"iotsitewise:CreateAccessPolicy",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"iotsitewise:CreateApplication",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateAsset API call. */
	static readonly CREATE_ASSET: string[] = [
		"iotsitewise:CreateAsset",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateAssetModel API call. */
	static readonly CREATE_ASSET_MODEL: string[] = [
		"iotsitewise:CreateAssetModel",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateAssetModelCompositeModel API call. */
	static readonly CREATE_ASSET_MODEL_COMPOSITE_MODEL: string[] = [
		"iotsitewise:CreateAssetModelCompositeModel",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateBulkImportJob API call. */
	static readonly CREATE_BULK_IMPORT_JOB: string[] = [
		"iotsitewise:CreateBulkImportJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateComputationModel API call. */
	static readonly CREATE_COMPUTATION_MODEL: string[] = [
		"iotsitewise:CreateComputationModel",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateDashboard API call. */
	static readonly CREATE_DASHBOARD: string[] = [
		"iotsitewise:CreateDashboard",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CREATE_DATASET: string[] = [
		"iotsitewise:CreateDataset",
		"iam:PassRole",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateDatasetExportJob API call. */
	static readonly CREATE_DATASET_EXPORT_JOB: string[] = [
		"iotsitewise:CreateDatasetExportJob",
	];
	/** IAM actions required for the CreateEnrichmentJob API call. */
	static readonly CREATE_ENRICHMENT_JOB: string[] = [
		"iotsitewise:CreateEnrichmentJob",
	];
	/** IAM actions required for the CreateGateway API call. */
	static readonly CREATE_GATEWAY: string[] = [
		"iotsitewise:CreateGateway",
		"iam:PassRole",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreatePipeline API call. */
	static readonly CREATE_PIPELINE: string[] = [
		"iotsitewise:CreatePipeline",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreatePortal API call. */
	static readonly CREATE_PORTAL: string[] = [
		"iotsitewise:CreatePortal",
		"iam:PassRole",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateProject API call. */
	static readonly CREATE_PROJECT: string[] = [
		"iotsitewise:CreateProject",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateTask API call. */
	static readonly CREATE_TASK: string[] = [
		"iotsitewise:CreateTask",
		"iam:PassRole",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateWorkspace API call. */
	static readonly CREATE_WORKSPACE: string[] = [
		"iotsitewise:CreateWorkspace",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the DeleteAccessPolicy API call. */
	static readonly DELETE_ACCESS_POLICY: string[] = [
		"iotsitewise:DeleteAccessPolicy",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"iotsitewise:DeleteApplication",
	];
	/** IAM actions required for the DeleteAsset API call. */
	static readonly DELETE_ASSET: string[] = ["iotsitewise:DeleteAsset"];
	/** IAM actions required for the DeleteAssetModel API call. */
	static readonly DELETE_ASSET_MODEL: string[] = [
		"iotsitewise:DeleteAssetModel",
	];
	/** IAM actions required for the DeleteAssetModelCompositeModel API call. */
	static readonly DELETE_ASSET_MODEL_COMPOSITE_MODEL: string[] = [
		"iotsitewise:DeleteAssetModelCompositeModel",
	];
	/** IAM actions required for the DeleteAssetModelInterfaceRelationship API call. */
	static readonly DELETE_ASSET_MODEL_INTERFACE_RELATIONSHIP: string[] = [
		"iotsitewise:DeleteAssetModelInterfaceRelationship",
	];
	/** IAM actions required for the DeleteComputationModel API call. */
	static readonly DELETE_COMPUTATION_MODEL: string[] = [
		"iotsitewise:DeleteComputationModel",
	];
	/** IAM actions required for the DeleteDashboard API call. */
	static readonly DELETE_DASHBOARD: string[] = ["iotsitewise:DeleteDashboard"];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DELETE_DATASET: string[] = ["iotsitewise:DeleteDataset"];
	/** IAM actions required for the DeleteGateway API call. */
	static readonly DELETE_GATEWAY: string[] = ["iotsitewise:DeleteGateway"];
	/** IAM actions required for the DeletePipeline API call. */
	static readonly DELETE_PIPELINE: string[] = ["iotsitewise:DeletePipeline"];
	/** IAM actions required for the DeletePortal API call. */
	static readonly DELETE_PORTAL: string[] = ["iotsitewise:DeletePortal"];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DELETE_PROJECT: string[] = ["iotsitewise:DeleteProject"];
	/** IAM actions required for the DeleteTask API call. */
	static readonly DELETE_TASK: string[] = ["iotsitewise:DeleteTask"];
	/** IAM actions required for the DeleteTimeSeries API call. */
	static readonly DELETE_TIME_SERIES: string[] = [
		"iotsitewise:DeleteTimeSeries",
	];
	/** IAM actions required for the DeleteWorkspace API call. */
	static readonly DELETE_WORKSPACE: string[] = ["iotsitewise:DeleteWorkspace"];
	/** IAM actions required for the DescribeAccessPolicy API call. */
	static readonly DESCRIBE_ACCESS_POLICY: string[] = [
		"iotsitewise:DescribeAccessPolicy",
	];
	/** IAM actions required for the DescribeAction API call. */
	static readonly DESCRIBE_ACTION: string[] = ["iotsitewise:DescribeAction"];
	/** IAM actions required for the DescribeApplication API call. */
	static readonly DESCRIBE_APPLICATION: string[] = [
		"iotsitewise:DescribeApplication",
	];
	/** IAM actions required for the DescribeAsset API call. */
	static readonly DESCRIBE_ASSET: string[] = ["iotsitewise:DescribeAsset"];
	/** IAM actions required for the DescribeAssetCompositeModel API call. */
	static readonly DESCRIBE_ASSET_COMPOSITE_MODEL: string[] = [
		"iotsitewise:DescribeAssetCompositeModel",
	];
	/** IAM actions required for the DescribeAssetModel API call. */
	static readonly DESCRIBE_ASSET_MODEL: string[] = [
		"iotsitewise:DescribeAssetModel",
	];
	/** IAM actions required for the DescribeAssetModelCompositeModel API call. */
	static readonly DESCRIBE_ASSET_MODEL_COMPOSITE_MODEL: string[] = [
		"iotsitewise:DescribeAssetModelCompositeModel",
	];
	/** IAM actions required for the DescribeAssetModelInterfaceRelationship API call. */
	static readonly DESCRIBE_ASSET_MODEL_INTERFACE_RELATIONSHIP: string[] = [
		"iotsitewise:DescribeAssetModelInterfaceRelationship",
	];
	/** IAM actions required for the DescribeAssetProperty API call. */
	static readonly DESCRIBE_ASSET_PROPERTY: string[] = [
		"iotsitewise:DescribeAssetProperty",
	];
	/** IAM actions required for the DescribeBulkImportJob API call. */
	static readonly DESCRIBE_BULK_IMPORT_JOB: string[] = [
		"iotsitewise:DescribeBulkImportJob",
	];
	/** IAM actions required for the DescribeComputationModel API call. */
	static readonly DESCRIBE_COMPUTATION_MODEL: string[] = [
		"iotsitewise:DescribeComputationModel",
	];
	/** IAM actions required for the DescribeComputationModelExecutionSummary API call. */
	static readonly DESCRIBE_COMPUTATION_MODEL_EXECUTION_SUMMARY: string[] = [
		"iotsitewise:DescribeComputationModelExecutionSummary",
	];
	/** IAM actions required for the DescribeDashboard API call. */
	static readonly DESCRIBE_DASHBOARD: string[] = [
		"iotsitewise:DescribeDashboard",
	];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DESCRIBE_DATASET: string[] = ["iotsitewise:DescribeDataset"];
	/** IAM actions required for the DescribeDatasetExportJob API call. */
	static readonly DESCRIBE_DATASET_EXPORT_JOB: string[] = [
		"iotsitewise:DescribeDatasetExportJob",
	];
	/** IAM actions required for the DescribeDefaultEncryptionConfiguration API call. */
	static readonly DESCRIBE_DEFAULT_ENCRYPTION_CONFIGURATION: string[] = [
		"iotsitewise:DescribeDefaultEncryptionConfiguration",
	];
	/** IAM actions required for the DescribeEnrichmentJob API call. */
	static readonly DESCRIBE_ENRICHMENT_JOB: string[] = [
		"iotsitewise:DescribeEnrichmentJob",
	];
	/** IAM actions required for the DescribeExecution API call. */
	static readonly DESCRIBE_EXECUTION: string[] = [
		"iotsitewise:DescribeExecution",
	];
	/** IAM actions required for the DescribeGateway API call. */
	static readonly DESCRIBE_GATEWAY: string[] = ["iotsitewise:DescribeGateway"];
	/** IAM actions required for the DescribeGatewayCapabilityConfiguration API call. */
	static readonly DESCRIBE_GATEWAY_CAPABILITY_CONFIGURATION: string[] = [
		"iotsitewise:DescribeGatewayCapabilityConfiguration",
	];
	/** IAM actions required for the DescribeLoggingOptions API call. */
	static readonly DESCRIBE_LOGGING_OPTIONS: string[] = [
		"iotsitewise:DescribeLoggingOptions",
	];
	/** IAM actions required for the DescribePipeline API call. */
	static readonly DESCRIBE_PIPELINE: string[] = [
		"iotsitewise:DescribePipeline",
	];
	/** IAM actions required for the DescribePipelineExecution API call. */
	static readonly DESCRIBE_PIPELINE_EXECUTION: string[] = [
		"iotsitewise:DescribePipelineExecution",
	];
	/** IAM actions required for the DescribePortal API call. */
	static readonly DESCRIBE_PORTAL: string[] = ["iotsitewise:DescribePortal"];
	/** IAM actions required for the DescribeProject API call. */
	static readonly DESCRIBE_PROJECT: string[] = ["iotsitewise:DescribeProject"];
	/** IAM actions required for the DescribeQuery API call. */
	static readonly DESCRIBE_QUERY: string[] = ["iotsitewise:DescribeQuery"];
	/** IAM actions required for the DescribeSearch API call. */
	static readonly DESCRIBE_SEARCH: string[] = ["iotsitewise:DescribeSearch"];
	/** IAM actions required for the DescribeStorageConfiguration API call. */
	static readonly DESCRIBE_STORAGE_CONFIGURATION: string[] = [
		"iotsitewise:DescribeStorageConfiguration",
	];
	/** IAM actions required for the DescribeTask API call. */
	static readonly DESCRIBE_TASK: string[] = ["iotsitewise:DescribeTask"];
	/** IAM actions required for the DescribeTimeSeries API call. */
	static readonly DESCRIBE_TIME_SERIES: string[] = [
		"iotsitewise:DescribeTimeSeries",
	];
	/** IAM actions required for the DescribeWorkspace API call. */
	static readonly DESCRIBE_WORKSPACE: string[] = [
		"iotsitewise:DescribeWorkspace",
	];
	/** IAM actions required for the DisassociateAssets API call. */
	static readonly DISASSOCIATE_ASSETS: string[] = [
		"iotsitewise:DisassociateAssets",
	];
	/** IAM actions required for the DisassociateTimeSeriesFromAssetProperty API call. */
	static readonly DISASSOCIATE_TIME_SERIES_FROM_ASSET_PROPERTY: string[] = [
		"iotsitewise:DisassociateTimeSeriesFromAssetProperty",
	];
	/** IAM actions required for the ExecuteAction API call. */
	static readonly EXECUTE_ACTION: string[] = ["iotsitewise:ExecuteAction"];
	/** IAM actions required for the ExecuteQuery API call. */
	static readonly EXECUTE_QUERY: string[] = ["iotsitewise:ExecuteQuery"];
	/** IAM actions required for the GetAssetPropertyAggregates API call. */
	static readonly GET_ASSET_PROPERTY_AGGREGATES: string[] = [
		"iotsitewise:GetAssetPropertyAggregates",
	];
	/** IAM actions required for the GetAssetPropertyValue API call. */
	static readonly GET_ASSET_PROPERTY_VALUE: string[] = [
		"iotsitewise:GetAssetPropertyValue",
	];
	/** IAM actions required for the GetAssetPropertyValueHistory API call. */
	static readonly GET_ASSET_PROPERTY_VALUE_HISTORY: string[] = [
		"iotsitewise:GetAssetPropertyValueHistory",
	];
	/** IAM actions required for the GetCaptureData API call. */
	static readonly GET_CAPTURE_DATA: string[] = ["iotsitewise:GetCaptureData"];
	/** IAM actions required for the GetInterpolatedAssetPropertyValues API call. */
	static readonly GET_INTERPOLATED_ASSET_PROPERTY_VALUES: string[] = [
		"iotsitewise:GetInterpolatedAssetPropertyValues",
	];
	/** IAM actions required for the GetQueryResults API call. */
	static readonly GET_QUERY_RESULTS: string[] = ["iotsitewise:GetQueryResults"];
	/** IAM actions required for the GetSearchResults API call. */
	static readonly GET_SEARCH_RESULTS: string[] = [
		"iotsitewise:GetSearchResults",
	];
	/** IAM actions required for the InvokeAssistant API call. */
	static readonly INVOKE_ASSISTANT: string[] = ["iotsitewise:InvokeAssistant"];
	/** IAM actions required for the ListAccessPolicies API call. */
	static readonly LIST_ACCESS_POLICIES: string[] = [
		"iotsitewise:ListAccessPolicies",
	];
	/** IAM actions required for the ListActions API call. */
	static readonly LIST_ACTIONS: string[] = ["iotsitewise:ListActions"];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [
		"iotsitewise:ListApplications",
	];
	/** IAM actions required for the ListAssetModelCompositeModels API call. */
	static readonly LIST_ASSET_MODEL_COMPOSITE_MODELS: string[] = [
		"iotsitewise:ListAssetModelCompositeModels",
	];
	/** IAM actions required for the ListAssetModelProperties API call. */
	static readonly LIST_ASSET_MODEL_PROPERTIES: string[] = [
		"iotsitewise:ListAssetModelProperties",
	];
	/** IAM actions required for the ListAssetModels API call. */
	static readonly LIST_ASSET_MODELS: string[] = ["iotsitewise:ListAssetModels"];
	/** IAM actions required for the ListAssetProperties API call. */
	static readonly LIST_ASSET_PROPERTIES: string[] = [
		"iotsitewise:ListAssetProperties",
	];
	/** IAM actions required for the ListAssetRelationships API call. */
	static readonly LIST_ASSET_RELATIONSHIPS: string[] = [
		"iotsitewise:ListAssetRelationships",
	];
	/** IAM actions required for the ListAssets API call. */
	static readonly LIST_ASSETS: string[] = ["iotsitewise:ListAssets"];
	/** IAM actions required for the ListAssociatedAssets API call. */
	static readonly LIST_ASSOCIATED_ASSETS: string[] = [
		"iotsitewise:ListAssociatedAssets",
	];
	/** IAM actions required for the ListBulkImportJobs API call. */
	static readonly LIST_BULK_IMPORT_JOBS: string[] = [
		"iotsitewise:ListBulkImportJobs",
	];
	/** IAM actions required for the ListCompositionRelationships API call. */
	static readonly LIST_COMPOSITION_RELATIONSHIPS: string[] = [
		"iotsitewise:ListCompositionRelationships",
	];
	/** IAM actions required for the ListComputationModelDataBindingUsages API call. */
	static readonly LIST_COMPUTATION_MODEL_DATA_BINDING_USAGES: string[] = [
		"iotsitewise:ListComputationModelDataBindingUsages",
	];
	/** IAM actions required for the ListComputationModelResolveToResources API call. */
	static readonly LIST_COMPUTATION_MODEL_RESOLVE_TO_RESOURCES: string[] = [
		"iotsitewise:ListComputationModelResolveToResources",
	];
	/** IAM actions required for the ListComputationModels API call. */
	static readonly LIST_COMPUTATION_MODELS: string[] = [
		"iotsitewise:ListComputationModels",
	];
	/** IAM actions required for the ListDashboards API call. */
	static readonly LIST_DASHBOARDS: string[] = ["iotsitewise:ListDashboards"];
	/** IAM actions required for the ListDatasetDataSegmentRelationships API call. */
	static readonly LIST_DATASET_DATA_SEGMENT_RELATIONSHIPS: string[] = [
		"iotsitewise:ListDatasetDataSegmentRelationships",
	];
	/** IAM actions required for the ListDatasetDataSegments API call. */
	static readonly LIST_DATASET_DATA_SEGMENTS: string[] = [
		"iotsitewise:ListDatasetDataSegments",
	];
	/** IAM actions required for the ListDatasetExportJobs API call. */
	static readonly LIST_DATASET_EXPORT_JOBS: string[] = [
		"iotsitewise:ListDatasetExportJobs",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly LIST_DATASETS: string[] = ["iotsitewise:ListDatasets"];
	/** IAM actions required for the ListEnrichmentJobs API call. */
	static readonly LIST_ENRICHMENT_JOBS: string[] = [
		"iotsitewise:ListEnrichmentJobs",
	];
	/** IAM actions required for the ListExecutions API call. */
	static readonly LIST_EXECUTIONS: string[] = ["iotsitewise:ListExecutions"];
	/** IAM actions required for the ListGateways API call. */
	static readonly LIST_GATEWAYS: string[] = ["iotsitewise:ListGateways"];
	/** IAM actions required for the ListInterfaceRelationships API call. */
	static readonly LIST_INTERFACE_RELATIONSHIPS: string[] = [
		"iotsitewise:ListInterfaceRelationships",
	];
	/** IAM actions required for the ListPipelineExecutions API call. */
	static readonly LIST_PIPELINE_EXECUTIONS: string[] = [
		"iotsitewise:ListPipelineExecutions",
	];
	/** IAM actions required for the ListPipelines API call. */
	static readonly LIST_PIPELINES: string[] = ["iotsitewise:ListPipelines"];
	/** IAM actions required for the ListPortals API call. */
	static readonly LIST_PORTALS: string[] = ["iotsitewise:ListPortals"];
	/** IAM actions required for the ListProjectAssets API call. */
	static readonly LIST_PROJECT_ASSETS: string[] = [
		"iotsitewise:ListProjectAssets",
	];
	/** IAM actions required for the ListProjects API call. */
	static readonly LIST_PROJECTS: string[] = ["iotsitewise:ListProjects"];
	/** IAM actions required for the ListQueries API call. */
	static readonly LIST_QUERIES: string[] = ["iotsitewise:ListQueries"];
	/** IAM actions required for the ListSearches API call. */
	static readonly LIST_SEARCHES: string[] = ["iotsitewise:ListSearches"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"iotsitewise:ListTagsForResource",
	];
	/** IAM actions required for the ListTasks API call. */
	static readonly LIST_TASKS: string[] = ["iotsitewise:ListTasks"];
	/** IAM actions required for the ListTimeSeries API call. */
	static readonly LIST_TIME_SERIES: string[] = ["iotsitewise:ListTimeSeries"];
	/** IAM actions required for the ListWorkspaces API call. */
	static readonly LIST_WORKSPACES: string[] = ["iotsitewise:ListWorkspaces"];
	/** IAM actions required for the PutAssetModelInterfaceRelationship API call. */
	static readonly PUT_ASSET_MODEL_INTERFACE_RELATIONSHIP: string[] = [
		"iotsitewise:PutAssetModelInterfaceRelationship",
	];
	/** IAM actions required for the PutDefaultEncryptionConfiguration API call. */
	static readonly PUT_DEFAULT_ENCRYPTION_CONFIGURATION: string[] = [
		"iotsitewise:PutDefaultEncryptionConfiguration",
	];
	/** IAM actions required for the PutLoggingOptions API call. */
	static readonly PUT_LOGGING_OPTIONS: string[] = [
		"iotsitewise:PutLoggingOptions",
	];
	/** IAM actions required for the PutStorageConfiguration API call. */
	static readonly PUT_STORAGE_CONFIGURATION: string[] = [
		"iam:PassRole",
		"iotsitewise:PutStorageConfiguration",
	];
	/** IAM actions required for the StartPipelineExecution API call. */
	static readonly START_PIPELINE_EXECUTION: string[] = [
		"iotsitewise:StartPipelineExecution",
	];
	/** IAM actions required for the StartQuery API call. */
	static readonly START_QUERY: string[] = ["iotsitewise:StartQuery"];
	/** IAM actions required for the StartSearch API call. */
	static readonly START_SEARCH: string[] = ["iotsitewise:StartSearch"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["iotsitewise:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["iotsitewise:UntagResource"];
	/** IAM actions required for the UpdateAccessPolicy API call. */
	static readonly UPDATE_ACCESS_POLICY: string[] = [
		"iotsitewise:UpdateAccessPolicy",
	];
	/** IAM actions required for the UpdateAsset API call. */
	static readonly UPDATE_ASSET: string[] = ["iotsitewise:UpdateAsset"];
	/** IAM actions required for the UpdateAssetModel API call. */
	static readonly UPDATE_ASSET_MODEL: string[] = [
		"iotsitewise:UpdateAssetModel",
	];
	/** IAM actions required for the UpdateAssetModelCompositeModel API call. */
	static readonly UPDATE_ASSET_MODEL_COMPOSITE_MODEL: string[] = [
		"iam:PassRole",
		"iotsitewise:UpdateAssetModelCompositeModel",
	];
	/** IAM actions required for the UpdateAssetProperty API call. */
	static readonly UPDATE_ASSET_PROPERTY: string[] = [
		"iotsitewise:UpdateAssetProperty",
	];
	/** IAM actions required for the UpdateComputationModel API call. */
	static readonly UPDATE_COMPUTATION_MODEL: string[] = [
		"iotsitewise:UpdateComputationModel",
	];
	/** IAM actions required for the UpdateDashboard API call. */
	static readonly UPDATE_DASHBOARD: string[] = ["iotsitewise:UpdateDashboard"];
	/** IAM actions required for the UpdateDataset API call. */
	static readonly UPDATE_DATASET: string[] = [
		"iam:PassRole",
		"iotsitewise:UpdateDataset",
	];
	/** IAM actions required for the UpdateGateway API call. */
	static readonly UPDATE_GATEWAY: string[] = ["iotsitewise:UpdateGateway"];
	/** IAM actions required for the UpdateGatewayCapabilityConfiguration API call. */
	static readonly UPDATE_GATEWAY_CAPABILITY_CONFIGURATION: string[] = [
		"iotsitewise:UpdateGatewayCapabilityConfiguration",
	];
	/** IAM actions required for the UpdatePipeline API call. */
	static readonly UPDATE_PIPELINE: string[] = ["iotsitewise:UpdatePipeline"];
	/** IAM actions required for the UpdatePortal API call. */
	static readonly UPDATE_PORTAL: string[] = [
		"iam:PassRole",
		"iotsitewise:UpdatePortal",
	];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UPDATE_PROJECT: string[] = ["iotsitewise:UpdateProject"];
	/** IAM actions required for the UpdateTask API call. */
	static readonly UPDATE_TASK: string[] = [
		"iam:PassRole",
		"iotsitewise:UpdateTask",
	];
	/** IAM actions required for the UpdateWorkspace API call. */
	static readonly UPDATE_WORKSPACE: string[] = ["iotsitewise:UpdateWorkspace"];
}

/**
 * Condition key constants and builders for iotsitewise.
 */
export class IotsitewiseConditions {
	/** Condition keys applicable to the CreateAccessPolicy action. */
	static readonly CREATE_ACCESS_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAsset action. */
	static readonly CREATE_ASSET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAssetModel action. */
	static readonly CREATE_ASSET_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateComputationModel action. */
	static readonly CREATE_COMPUTATION_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDashboard action. */
	static readonly CREATE_DASHBOARD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CREATE_DATASET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGateway action. */
	static readonly CREATE_GATEWAY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePipeline action. */
	static readonly CREATE_PIPELINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iotsitewise:taskArns",
	];
	/** Condition keys applicable to the CreatePortal action. */
	static readonly CREATE_PORTAL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CREATE_PROJECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTask action. */
	static readonly CREATE_TASK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkspace action. */
	static readonly CREATE_WORKSPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeTimeSeries action. */
	static readonly DESCRIBE_TIME_SERIES_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdatePipeline action. */
	static readonly UPDATE_PIPELINE_CONDITION_KEYS: string[] = [
		"iotsitewise:taskArns",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: iotsitewise:assetHierarchyPath (String) */
	static readonly ASSET_HIERARCHY_PATH = "iotsitewise:assetHierarchyPath";
	/** Condition key: iotsitewise:childAssetId (String) */
	static readonly CHILD_ASSET_ID = "iotsitewise:childAssetId";
	/** Condition key: iotsitewise:group (String) */
	static readonly GROUP = "iotsitewise:group";
	/** Condition key: iotsitewise:iam (String) */
	static readonly IAM = "iotsitewise:iam";
	/** Condition key: iotsitewise:isAssociatedWithAssetProperty (String) */
	static readonly IS_ASSOCIATED_WITH_ASSET_PROPERTY =
		"iotsitewise:isAssociatedWithAssetProperty";
	/** Condition key: iotsitewise:portal (String) */
	static readonly PORTAL = "iotsitewise:portal";
	/** Condition key: iotsitewise:project (String) */
	static readonly PROJECT = "iotsitewise:project";
	/** Condition key: iotsitewise:propertyAlias (String) */
	static readonly PROPERTY_ALIAS = "iotsitewise:propertyAlias";
	/** Condition key: iotsitewise:propertyId (String) */
	static readonly PROPERTY_ID = "iotsitewise:propertyId";
	/** Condition key: iotsitewise:taskArns (ArrayOfARN) */
	static readonly TASK_ARNS = "iotsitewise:taskArns";
	/** Condition key: iotsitewise:user (String) */
	static readonly USER = "iotsitewise:user";

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
	 * Generates a condition block for `iotsitewise:assetHierarchyPath`.
	 */
	static assetHierarchyPath(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "iotsitewise:assetHierarchyPath": value } };
	}

	/**
	 * Generates a condition block for `iotsitewise:childAssetId`.
	 */
	static childAssetId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iotsitewise:childAssetId": value } };
	}

	/**
	 * Generates a condition block for `iotsitewise:group`.
	 */
	static group(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iotsitewise:group": value } };
	}

	/**
	 * Generates a condition block for `iotsitewise:iam`.
	 */
	static iam(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iotsitewise:iam": value } };
	}

	/**
	 * Generates a condition block for `iotsitewise:isAssociatedWithAssetProperty`.
	 */
	static isAssociatedWithAssetProperty(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "iotsitewise:isAssociatedWithAssetProperty": value },
		};
	}

	/**
	 * Generates a condition block for `iotsitewise:portal`.
	 */
	static portal(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iotsitewise:portal": value } };
	}

	/**
	 * Generates a condition block for `iotsitewise:project`.
	 */
	static project(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iotsitewise:project": value } };
	}

	/**
	 * Generates a condition block for `iotsitewise:propertyAlias`.
	 */
	static propertyAlias(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iotsitewise:propertyAlias": value } };
	}

	/**
	 * Generates a condition block for `iotsitewise:propertyId`.
	 */
	static propertyId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iotsitewise:propertyId": value } };
	}

	/**
	 * Generates a condition block for `iotsitewise:taskArns`.
	 */
	static taskArns(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "iotsitewise:taskArns": values } };
	}

	/**
	 * Generates a condition block for `iotsitewise:user`.
	 */
	static user(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iotsitewise:user": value } };
	}
}
