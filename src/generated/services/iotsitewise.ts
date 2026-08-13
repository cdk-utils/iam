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
	static readonly AssociateAssets = "iotsitewise:AssociateAssets";
	/** [Write] iotsitewise:AssociateTimeSeriesToAssetProperty */
	static readonly AssociateTimeSeriesToAssetProperty =
		"iotsitewise:AssociateTimeSeriesToAssetProperty";
	/** [Write] iotsitewise:BatchAssociateDataSegmentsToDataset */
	static readonly BatchAssociateDataSegmentsToDataset =
		"iotsitewise:BatchAssociateDataSegmentsToDataset";
	/** [Write] iotsitewise:BatchAssociateProjectAssets */
	static readonly BatchAssociateProjectAssets =
		"iotsitewise:BatchAssociateProjectAssets";
	/** [Write] iotsitewise:BatchDeleteDatasetDataSegments */
	static readonly BatchDeleteDatasetDataSegments =
		"iotsitewise:BatchDeleteDatasetDataSegments";
	/** [Write] iotsitewise:BatchDisassociateDataSegmentsFromDataset */
	static readonly BatchDisassociateDataSegmentsFromDataset =
		"iotsitewise:BatchDisassociateDataSegmentsFromDataset";
	/** [Write] iotsitewise:BatchDisassociateProjectAssets */
	static readonly BatchDisassociateProjectAssets =
		"iotsitewise:BatchDisassociateProjectAssets";
	/** [Read] iotsitewise:BatchGetAssetPropertyAggregates */
	static readonly BatchGetAssetPropertyAggregates =
		"iotsitewise:BatchGetAssetPropertyAggregates";
	/** [Read] iotsitewise:BatchGetAssetPropertyValue */
	static readonly BatchGetAssetPropertyValue =
		"iotsitewise:BatchGetAssetPropertyValue";
	/** [Read] iotsitewise:BatchGetAssetPropertyValueHistory */
	static readonly BatchGetAssetPropertyValueHistory =
		"iotsitewise:BatchGetAssetPropertyValueHistory";
	/** [Write] iotsitewise:BatchPutAssetPropertyValue */
	static readonly BatchPutAssetPropertyValue =
		"iotsitewise:BatchPutAssetPropertyValue";
	/** [Write] iotsitewise:CancelEnrichmentJob */
	static readonly CancelEnrichmentJob = "iotsitewise:CancelEnrichmentJob";
	/** [Write] iotsitewise:CancelPipelineExecution */
	static readonly CancelPipelineExecution =
		"iotsitewise:CancelPipelineExecution";
	/** [Write] iotsitewise:CancelQuery */
	static readonly CancelQuery = "iotsitewise:CancelQuery";
	/** [Write] iotsitewise:CreateAccessPolicy */
	static readonly CreateAccessPolicy = "iotsitewise:CreateAccessPolicy";
	/** [Write] iotsitewise:CreateApplication */
	static readonly CreateApplication = "iotsitewise:CreateApplication";
	/** [Write] iotsitewise:CreateAsset */
	static readonly CreateAsset = "iotsitewise:CreateAsset";
	/** [Write] iotsitewise:CreateAssetModel */
	static readonly CreateAssetModel = "iotsitewise:CreateAssetModel";
	/** [Write] iotsitewise:CreateAssetModelCompositeModel */
	static readonly CreateAssetModelCompositeModel =
		"iotsitewise:CreateAssetModelCompositeModel";
	/** [Write] iotsitewise:CreateBulkImportJob */
	static readonly CreateBulkImportJob = "iotsitewise:CreateBulkImportJob";
	/** [Write] iotsitewise:CreateComputationModel */
	static readonly CreateComputationModel = "iotsitewise:CreateComputationModel";
	/** [Write] iotsitewise:CreateDashboard */
	static readonly CreateDashboard = "iotsitewise:CreateDashboard";
	/** [Write] iotsitewise:CreateDataset */
	static readonly CreateDataset = "iotsitewise:CreateDataset";
	/** [Write] iotsitewise:CreateDatasetExportJob */
	static readonly CreateDatasetExportJob = "iotsitewise:CreateDatasetExportJob";
	/** [Write] iotsitewise:CreateEnrichmentJob */
	static readonly CreateEnrichmentJob = "iotsitewise:CreateEnrichmentJob";
	/** [Write] iotsitewise:CreateGateway */
	static readonly CreateGateway = "iotsitewise:CreateGateway";
	/** [Write] iotsitewise:CreatePipeline */
	static readonly CreatePipeline = "iotsitewise:CreatePipeline";
	/** [Write] iotsitewise:CreatePortal */
	static readonly CreatePortal = "iotsitewise:CreatePortal";
	/** [Write] iotsitewise:CreateProject */
	static readonly CreateProject = "iotsitewise:CreateProject";
	/** [Write] iotsitewise:CreateTask */
	static readonly CreateTask = "iotsitewise:CreateTask";
	/** [Write] iotsitewise:CreateWorkspace */
	static readonly CreateWorkspace = "iotsitewise:CreateWorkspace";
	/** [Write] iotsitewise:DeleteAccessPolicy */
	static readonly DeleteAccessPolicy = "iotsitewise:DeleteAccessPolicy";
	/** [Write] iotsitewise:DeleteApplication */
	static readonly DeleteApplication = "iotsitewise:DeleteApplication";
	/** [Write] iotsitewise:DeleteAsset */
	static readonly DeleteAsset = "iotsitewise:DeleteAsset";
	/** [Write] iotsitewise:DeleteAssetModel */
	static readonly DeleteAssetModel = "iotsitewise:DeleteAssetModel";
	/** [Write] iotsitewise:DeleteAssetModelCompositeModel */
	static readonly DeleteAssetModelCompositeModel =
		"iotsitewise:DeleteAssetModelCompositeModel";
	/** [Write] iotsitewise:DeleteAssetModelInterfaceRelationship */
	static readonly DeleteAssetModelInterfaceRelationship =
		"iotsitewise:DeleteAssetModelInterfaceRelationship";
	/** [Write] iotsitewise:DeleteComputationModel */
	static readonly DeleteComputationModel = "iotsitewise:DeleteComputationModel";
	/** [Write] iotsitewise:DeleteDashboard */
	static readonly DeleteDashboard = "iotsitewise:DeleteDashboard";
	/** [Write] iotsitewise:DeleteDataset */
	static readonly DeleteDataset = "iotsitewise:DeleteDataset";
	/** [Write] iotsitewise:DeleteGateway */
	static readonly DeleteGateway = "iotsitewise:DeleteGateway";
	/** [Write] iotsitewise:DeletePipeline */
	static readonly DeletePipeline = "iotsitewise:DeletePipeline";
	/** [Write] iotsitewise:DeletePortal */
	static readonly DeletePortal = "iotsitewise:DeletePortal";
	/** [Write] iotsitewise:DeleteProject */
	static readonly DeleteProject = "iotsitewise:DeleteProject";
	/** [Write] iotsitewise:DeleteTask */
	static readonly DeleteTask = "iotsitewise:DeleteTask";
	/** [Write] iotsitewise:DeleteTimeSeries */
	static readonly DeleteTimeSeries = "iotsitewise:DeleteTimeSeries";
	/** [Write] iotsitewise:DeleteWorkspace */
	static readonly DeleteWorkspace = "iotsitewise:DeleteWorkspace";
	/** [Read] iotsitewise:DescribeAccessPolicy */
	static readonly DescribeAccessPolicy = "iotsitewise:DescribeAccessPolicy";
	/** [Read] iotsitewise:DescribeAction */
	static readonly DescribeAction = "iotsitewise:DescribeAction";
	/** [Read] iotsitewise:DescribeApplication */
	static readonly DescribeApplication = "iotsitewise:DescribeApplication";
	/** [Read] iotsitewise:DescribeAsset */
	static readonly DescribeAsset = "iotsitewise:DescribeAsset";
	/** [Read] iotsitewise:DescribeAssetCompositeModel */
	static readonly DescribeAssetCompositeModel =
		"iotsitewise:DescribeAssetCompositeModel";
	/** [Read] iotsitewise:DescribeAssetModel */
	static readonly DescribeAssetModel = "iotsitewise:DescribeAssetModel";
	/** [Read] iotsitewise:DescribeAssetModelCompositeModel */
	static readonly DescribeAssetModelCompositeModel =
		"iotsitewise:DescribeAssetModelCompositeModel";
	/** [Read] iotsitewise:DescribeAssetModelInterfaceRelationship */
	static readonly DescribeAssetModelInterfaceRelationship =
		"iotsitewise:DescribeAssetModelInterfaceRelationship";
	/** [Read] iotsitewise:DescribeAssetProperty */
	static readonly DescribeAssetProperty = "iotsitewise:DescribeAssetProperty";
	/** [Read] iotsitewise:DescribeBulkImportJob */
	static readonly DescribeBulkImportJob = "iotsitewise:DescribeBulkImportJob";
	/** [Read] iotsitewise:DescribeComputationModel */
	static readonly DescribeComputationModel =
		"iotsitewise:DescribeComputationModel";
	/** [Read] iotsitewise:DescribeComputationModelExecutionSummary */
	static readonly DescribeComputationModelExecutionSummary =
		"iotsitewise:DescribeComputationModelExecutionSummary";
	/** [Read] iotsitewise:DescribeDashboard */
	static readonly DescribeDashboard = "iotsitewise:DescribeDashboard";
	/** [Read] iotsitewise:DescribeDataset */
	static readonly DescribeDataset = "iotsitewise:DescribeDataset";
	/** [Read] iotsitewise:DescribeDatasetExportJob */
	static readonly DescribeDatasetExportJob =
		"iotsitewise:DescribeDatasetExportJob";
	/** [Read] iotsitewise:DescribeDefaultEncryptionConfiguration */
	static readonly DescribeDefaultEncryptionConfiguration =
		"iotsitewise:DescribeDefaultEncryptionConfiguration";
	/** [Read] iotsitewise:DescribeEnrichmentJob */
	static readonly DescribeEnrichmentJob = "iotsitewise:DescribeEnrichmentJob";
	/** [Read] iotsitewise:DescribeExecution */
	static readonly DescribeExecution = "iotsitewise:DescribeExecution";
	/** [Read] iotsitewise:DescribeGateway */
	static readonly DescribeGateway = "iotsitewise:DescribeGateway";
	/** [Read] iotsitewise:DescribeGatewayCapabilityConfiguration */
	static readonly DescribeGatewayCapabilityConfiguration =
		"iotsitewise:DescribeGatewayCapabilityConfiguration";
	/** [Read] iotsitewise:DescribeLoggingOptions */
	static readonly DescribeLoggingOptions = "iotsitewise:DescribeLoggingOptions";
	/** [Read] iotsitewise:DescribePipeline */
	static readonly DescribePipeline = "iotsitewise:DescribePipeline";
	/** [Read] iotsitewise:DescribePipelineExecution */
	static readonly DescribePipelineExecution =
		"iotsitewise:DescribePipelineExecution";
	/** [Read] iotsitewise:DescribePortal */
	static readonly DescribePortal = "iotsitewise:DescribePortal";
	/** [Read] iotsitewise:DescribeProject */
	static readonly DescribeProject = "iotsitewise:DescribeProject";
	/** [Read] iotsitewise:DescribeQuery */
	static readonly DescribeQuery = "iotsitewise:DescribeQuery";
	/** [Read] iotsitewise:DescribeSearch */
	static readonly DescribeSearch = "iotsitewise:DescribeSearch";
	/** [Read] iotsitewise:DescribeStorageConfiguration */
	static readonly DescribeStorageConfiguration =
		"iotsitewise:DescribeStorageConfiguration";
	/** [Read] iotsitewise:DescribeTask */
	static readonly DescribeTask = "iotsitewise:DescribeTask";
	/** [Read] iotsitewise:DescribeTimeSeries */
	static readonly DescribeTimeSeries = "iotsitewise:DescribeTimeSeries";
	/** [Read] iotsitewise:DescribeWorkspace */
	static readonly DescribeWorkspace = "iotsitewise:DescribeWorkspace";
	/** [Write] iotsitewise:DisassociateAssets */
	static readonly DisassociateAssets = "iotsitewise:DisassociateAssets";
	/** [Write] iotsitewise:DisassociateTimeSeriesFromAssetProperty */
	static readonly DisassociateTimeSeriesFromAssetProperty =
		"iotsitewise:DisassociateTimeSeriesFromAssetProperty";
	/** [Write] iotsitewise:EnableSiteWiseIntegration */
	static readonly EnableSiteWiseIntegration =
		"iotsitewise:EnableSiteWiseIntegration";
	/** [Write] iotsitewise:ExecuteAction */
	static readonly ExecuteAction = "iotsitewise:ExecuteAction";
	/** [Read] iotsitewise:ExecuteQuery */
	static readonly ExecuteQuery = "iotsitewise:ExecuteQuery";
	/** [Read] iotsitewise:GetAssetPropertyAggregates */
	static readonly actionGetAssetPropertyAggregates =
		"iotsitewise:GetAssetPropertyAggregates";
	/** [Read] iotsitewise:GetAssetPropertyValue */
	static readonly actionGetAssetPropertyValue =
		"iotsitewise:GetAssetPropertyValue";
	/** [Read] iotsitewise:GetAssetPropertyValueHistory */
	static readonly actionGetAssetPropertyValueHistory =
		"iotsitewise:GetAssetPropertyValueHistory";
	/** [Read] iotsitewise:GetCaptureData */
	static readonly actionGetCaptureData = "iotsitewise:GetCaptureData";
	/** [Read] iotsitewise:GetInterpolatedAssetPropertyValues */
	static readonly actionGetInterpolatedAssetPropertyValues =
		"iotsitewise:GetInterpolatedAssetPropertyValues";
	/** [Read] iotsitewise:GetQueryResults */
	static readonly actionGetQueryResults = "iotsitewise:GetQueryResults";
	/** [Read] iotsitewise:GetSearchResults */
	static readonly actionGetSearchResults = "iotsitewise:GetSearchResults";
	/** [Read] iotsitewise:InvokeAssistant */
	static readonly InvokeAssistant = "iotsitewise:InvokeAssistant";
	/** [List] iotsitewise:ListAccessPolicies */
	static readonly ListAccessPolicies = "iotsitewise:ListAccessPolicies";
	/** [List] iotsitewise:ListActions */
	static readonly ListActions = "iotsitewise:ListActions";
	/** [List] iotsitewise:ListApplications */
	static readonly ListApplications = "iotsitewise:ListApplications";
	/** [List] iotsitewise:ListAssetModelCompositeModels */
	static readonly ListAssetModelCompositeModels =
		"iotsitewise:ListAssetModelCompositeModels";
	/** [List] iotsitewise:ListAssetModelProperties */
	static readonly ListAssetModelProperties =
		"iotsitewise:ListAssetModelProperties";
	/** [List] iotsitewise:ListAssetModels */
	static readonly ListAssetModels = "iotsitewise:ListAssetModels";
	/** [List] iotsitewise:ListAssetProperties */
	static readonly ListAssetProperties = "iotsitewise:ListAssetProperties";
	/** [List] iotsitewise:ListAssetRelationships */
	static readonly ListAssetRelationships = "iotsitewise:ListAssetRelationships";
	/** [List] iotsitewise:ListAssets */
	static readonly ListAssets = "iotsitewise:ListAssets";
	/** [List] iotsitewise:ListAssociatedAssets */
	static readonly ListAssociatedAssets = "iotsitewise:ListAssociatedAssets";
	/** [List] iotsitewise:ListBulkImportJobs */
	static readonly ListBulkImportJobs = "iotsitewise:ListBulkImportJobs";
	/** [List] iotsitewise:ListCompositionRelationships */
	static readonly ListCompositionRelationships =
		"iotsitewise:ListCompositionRelationships";
	/** [List] iotsitewise:ListComputationModelDataBindingUsages */
	static readonly ListComputationModelDataBindingUsages =
		"iotsitewise:ListComputationModelDataBindingUsages";
	/** [List] iotsitewise:ListComputationModelResolveToResources */
	static readonly ListComputationModelResolveToResources =
		"iotsitewise:ListComputationModelResolveToResources";
	/** [List] iotsitewise:ListComputationModels */
	static readonly ListComputationModels = "iotsitewise:ListComputationModels";
	/** [List] iotsitewise:ListDashboards */
	static readonly ListDashboards = "iotsitewise:ListDashboards";
	/** [List] iotsitewise:ListDatasetDataSegmentRelationships */
	static readonly ListDatasetDataSegmentRelationships =
		"iotsitewise:ListDatasetDataSegmentRelationships";
	/** [List] iotsitewise:ListDatasetDataSegments */
	static readonly ListDatasetDataSegments =
		"iotsitewise:ListDatasetDataSegments";
	/** [List] iotsitewise:ListDatasetExportJobs */
	static readonly ListDatasetExportJobs = "iotsitewise:ListDatasetExportJobs";
	/** [List] iotsitewise:ListDatasets */
	static readonly ListDatasets = "iotsitewise:ListDatasets";
	/** [List] iotsitewise:ListEnrichmentJobs */
	static readonly ListEnrichmentJobs = "iotsitewise:ListEnrichmentJobs";
	/** [List] iotsitewise:ListExecutions */
	static readonly ListExecutions = "iotsitewise:ListExecutions";
	/** [List] iotsitewise:ListGateways */
	static readonly ListGateways = "iotsitewise:ListGateways";
	/** [List] iotsitewise:ListInterfaceRelationships */
	static readonly ListInterfaceRelationships =
		"iotsitewise:ListInterfaceRelationships";
	/** [List] iotsitewise:ListPipelineExecutions */
	static readonly ListPipelineExecutions = "iotsitewise:ListPipelineExecutions";
	/** [List] iotsitewise:ListPipelines */
	static readonly ListPipelines = "iotsitewise:ListPipelines";
	/** [List] iotsitewise:ListPortals */
	static readonly ListPortals = "iotsitewise:ListPortals";
	/** [List] iotsitewise:ListProjectAssets */
	static readonly ListProjectAssets = "iotsitewise:ListProjectAssets";
	/** [List] iotsitewise:ListProjects */
	static readonly ListProjects = "iotsitewise:ListProjects";
	/** [List] iotsitewise:ListQueries */
	static readonly ListQueries = "iotsitewise:ListQueries";
	/** [List] iotsitewise:ListSearches */
	static readonly ListSearches = "iotsitewise:ListSearches";
	/** [Read] iotsitewise:ListTagsForResource */
	static readonly ListTagsForResource = "iotsitewise:ListTagsForResource";
	/** [List] iotsitewise:ListTasks */
	static readonly ListTasks = "iotsitewise:ListTasks";
	/** [List] iotsitewise:ListTimeSeries */
	static readonly ListTimeSeries = "iotsitewise:ListTimeSeries";
	/** [List] iotsitewise:ListWorkspaces */
	static readonly ListWorkspaces = "iotsitewise:ListWorkspaces";
	/** [Write] iotsitewise:PutAssetModelInterfaceRelationship */
	static readonly PutAssetModelInterfaceRelationship =
		"iotsitewise:PutAssetModelInterfaceRelationship";
	/** [Write] iotsitewise:PutDefaultEncryptionConfiguration */
	static readonly PutDefaultEncryptionConfiguration =
		"iotsitewise:PutDefaultEncryptionConfiguration";
	/** [Write] iotsitewise:PutLoggingOptions */
	static readonly PutLoggingOptions = "iotsitewise:PutLoggingOptions";
	/** [Write] iotsitewise:PutStorageConfiguration */
	static readonly PutStorageConfiguration =
		"iotsitewise:PutStorageConfiguration";
	/** [Write] iotsitewise:StartPipelineExecution */
	static readonly StartPipelineExecution = "iotsitewise:StartPipelineExecution";
	/** [Write] iotsitewise:StartQuery */
	static readonly StartQuery = "iotsitewise:StartQuery";
	/** [Write] iotsitewise:StartSearch */
	static readonly StartSearch = "iotsitewise:StartSearch";
	/** [Tagging] iotsitewise:TagResource */
	static readonly TagResource = "iotsitewise:TagResource";
	/** [Tagging] iotsitewise:UntagResource */
	static readonly UntagResource = "iotsitewise:UntagResource";
	/** [Write] iotsitewise:UpdateAccessPolicy */
	static readonly UpdateAccessPolicy = "iotsitewise:UpdateAccessPolicy";
	/** [Write] iotsitewise:UpdateAsset */
	static readonly UpdateAsset = "iotsitewise:UpdateAsset";
	/** [Write] iotsitewise:UpdateAssetModel */
	static readonly UpdateAssetModel = "iotsitewise:UpdateAssetModel";
	/** [Write] iotsitewise:UpdateAssetModelCompositeModel */
	static readonly UpdateAssetModelCompositeModel =
		"iotsitewise:UpdateAssetModelCompositeModel";
	/** [Write] iotsitewise:UpdateAssetModelPropertyRouting */
	static readonly UpdateAssetModelPropertyRouting =
		"iotsitewise:UpdateAssetModelPropertyRouting";
	/** [Write] iotsitewise:UpdateAssetProperty */
	static readonly UpdateAssetProperty = "iotsitewise:UpdateAssetProperty";
	/** [Write] iotsitewise:UpdateComputationModel */
	static readonly UpdateComputationModel = "iotsitewise:UpdateComputationModel";
	/** [Write] iotsitewise:UpdateDashboard */
	static readonly UpdateDashboard = "iotsitewise:UpdateDashboard";
	/** [Write] iotsitewise:UpdateDataset */
	static readonly UpdateDataset = "iotsitewise:UpdateDataset";
	/** [Write] iotsitewise:UpdateGateway */
	static readonly UpdateGateway = "iotsitewise:UpdateGateway";
	/** [Write] iotsitewise:UpdateGatewayCapabilityConfiguration */
	static readonly UpdateGatewayCapabilityConfiguration =
		"iotsitewise:UpdateGatewayCapabilityConfiguration";
	/** [Write] iotsitewise:UpdatePipeline */
	static readonly UpdatePipeline = "iotsitewise:UpdatePipeline";
	/** [Write] iotsitewise:UpdatePortal */
	static readonly UpdatePortal = "iotsitewise:UpdatePortal";
	/** [Write] iotsitewise:UpdateProject */
	static readonly UpdateProject = "iotsitewise:UpdateProject";
	/** [Write] iotsitewise:UpdateTask */
	static readonly UpdateTask = "iotsitewise:UpdateTask";
	/** [Write] iotsitewise:UpdateWorkspace */
	static readonly UpdateWorkspace = "iotsitewise:UpdateWorkspace";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IotsitewiseActions.BatchGetAssetPropertyAggregates,
		IotsitewiseActions.BatchGetAssetPropertyValue,
		IotsitewiseActions.BatchGetAssetPropertyValueHistory,
		IotsitewiseActions.DescribeAccessPolicy,
		IotsitewiseActions.DescribeAction,
		IotsitewiseActions.DescribeApplication,
		IotsitewiseActions.DescribeAsset,
		IotsitewiseActions.DescribeAssetCompositeModel,
		IotsitewiseActions.DescribeAssetModel,
		IotsitewiseActions.DescribeAssetModelCompositeModel,
		IotsitewiseActions.DescribeAssetModelInterfaceRelationship,
		IotsitewiseActions.DescribeAssetProperty,
		IotsitewiseActions.DescribeBulkImportJob,
		IotsitewiseActions.DescribeComputationModel,
		IotsitewiseActions.DescribeComputationModelExecutionSummary,
		IotsitewiseActions.DescribeDashboard,
		IotsitewiseActions.DescribeDataset,
		IotsitewiseActions.DescribeDatasetExportJob,
		IotsitewiseActions.DescribeDefaultEncryptionConfiguration,
		IotsitewiseActions.DescribeEnrichmentJob,
		IotsitewiseActions.DescribeExecution,
		IotsitewiseActions.DescribeGateway,
		IotsitewiseActions.DescribeGatewayCapabilityConfiguration,
		IotsitewiseActions.DescribeLoggingOptions,
		IotsitewiseActions.DescribePipeline,
		IotsitewiseActions.DescribePipelineExecution,
		IotsitewiseActions.DescribePortal,
		IotsitewiseActions.DescribeProject,
		IotsitewiseActions.DescribeQuery,
		IotsitewiseActions.DescribeSearch,
		IotsitewiseActions.DescribeStorageConfiguration,
		IotsitewiseActions.DescribeTask,
		IotsitewiseActions.DescribeTimeSeries,
		IotsitewiseActions.DescribeWorkspace,
		IotsitewiseActions.ExecuteQuery,
		IotsitewiseActions.actionGetAssetPropertyAggregates,
		IotsitewiseActions.actionGetAssetPropertyValue,
		IotsitewiseActions.actionGetAssetPropertyValueHistory,
		IotsitewiseActions.actionGetCaptureData,
		IotsitewiseActions.actionGetInterpolatedAssetPropertyValues,
		IotsitewiseActions.actionGetQueryResults,
		IotsitewiseActions.actionGetSearchResults,
		IotsitewiseActions.InvokeAssistant,
		IotsitewiseActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IotsitewiseActions.AssociateAssets,
		IotsitewiseActions.AssociateTimeSeriesToAssetProperty,
		IotsitewiseActions.BatchAssociateDataSegmentsToDataset,
		IotsitewiseActions.BatchAssociateProjectAssets,
		IotsitewiseActions.BatchDeleteDatasetDataSegments,
		IotsitewiseActions.BatchDisassociateDataSegmentsFromDataset,
		IotsitewiseActions.BatchDisassociateProjectAssets,
		IotsitewiseActions.BatchPutAssetPropertyValue,
		IotsitewiseActions.CancelEnrichmentJob,
		IotsitewiseActions.CancelPipelineExecution,
		IotsitewiseActions.CancelQuery,
		IotsitewiseActions.CreateAccessPolicy,
		IotsitewiseActions.CreateApplication,
		IotsitewiseActions.CreateAsset,
		IotsitewiseActions.CreateAssetModel,
		IotsitewiseActions.CreateAssetModelCompositeModel,
		IotsitewiseActions.CreateBulkImportJob,
		IotsitewiseActions.CreateComputationModel,
		IotsitewiseActions.CreateDashboard,
		IotsitewiseActions.CreateDataset,
		IotsitewiseActions.CreateDatasetExportJob,
		IotsitewiseActions.CreateEnrichmentJob,
		IotsitewiseActions.CreateGateway,
		IotsitewiseActions.CreatePipeline,
		IotsitewiseActions.CreatePortal,
		IotsitewiseActions.CreateProject,
		IotsitewiseActions.CreateTask,
		IotsitewiseActions.CreateWorkspace,
		IotsitewiseActions.DeleteAccessPolicy,
		IotsitewiseActions.DeleteApplication,
		IotsitewiseActions.DeleteAsset,
		IotsitewiseActions.DeleteAssetModel,
		IotsitewiseActions.DeleteAssetModelCompositeModel,
		IotsitewiseActions.DeleteAssetModelInterfaceRelationship,
		IotsitewiseActions.DeleteComputationModel,
		IotsitewiseActions.DeleteDashboard,
		IotsitewiseActions.DeleteDataset,
		IotsitewiseActions.DeleteGateway,
		IotsitewiseActions.DeletePipeline,
		IotsitewiseActions.DeletePortal,
		IotsitewiseActions.DeleteProject,
		IotsitewiseActions.DeleteTask,
		IotsitewiseActions.DeleteTimeSeries,
		IotsitewiseActions.DeleteWorkspace,
		IotsitewiseActions.DisassociateAssets,
		IotsitewiseActions.DisassociateTimeSeriesFromAssetProperty,
		IotsitewiseActions.EnableSiteWiseIntegration,
		IotsitewiseActions.ExecuteAction,
		IotsitewiseActions.PutAssetModelInterfaceRelationship,
		IotsitewiseActions.PutDefaultEncryptionConfiguration,
		IotsitewiseActions.PutLoggingOptions,
		IotsitewiseActions.PutStorageConfiguration,
		IotsitewiseActions.StartPipelineExecution,
		IotsitewiseActions.StartQuery,
		IotsitewiseActions.StartSearch,
		IotsitewiseActions.UpdateAccessPolicy,
		IotsitewiseActions.UpdateAsset,
		IotsitewiseActions.UpdateAssetModel,
		IotsitewiseActions.UpdateAssetModelCompositeModel,
		IotsitewiseActions.UpdateAssetModelPropertyRouting,
		IotsitewiseActions.UpdateAssetProperty,
		IotsitewiseActions.UpdateComputationModel,
		IotsitewiseActions.UpdateDashboard,
		IotsitewiseActions.UpdateDataset,
		IotsitewiseActions.UpdateGateway,
		IotsitewiseActions.UpdateGatewayCapabilityConfiguration,
		IotsitewiseActions.UpdatePipeline,
		IotsitewiseActions.UpdatePortal,
		IotsitewiseActions.UpdateProject,
		IotsitewiseActions.UpdateTask,
		IotsitewiseActions.UpdateWorkspace,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IotsitewiseActions.ListAccessPolicies,
		IotsitewiseActions.ListActions,
		IotsitewiseActions.ListApplications,
		IotsitewiseActions.ListAssetModelCompositeModels,
		IotsitewiseActions.ListAssetModelProperties,
		IotsitewiseActions.ListAssetModels,
		IotsitewiseActions.ListAssetProperties,
		IotsitewiseActions.ListAssetRelationships,
		IotsitewiseActions.ListAssets,
		IotsitewiseActions.ListAssociatedAssets,
		IotsitewiseActions.ListBulkImportJobs,
		IotsitewiseActions.ListCompositionRelationships,
		IotsitewiseActions.ListComputationModelDataBindingUsages,
		IotsitewiseActions.ListComputationModelResolveToResources,
		IotsitewiseActions.ListComputationModels,
		IotsitewiseActions.ListDashboards,
		IotsitewiseActions.ListDatasetDataSegmentRelationships,
		IotsitewiseActions.ListDatasetDataSegments,
		IotsitewiseActions.ListDatasetExportJobs,
		IotsitewiseActions.ListDatasets,
		IotsitewiseActions.ListEnrichmentJobs,
		IotsitewiseActions.ListExecutions,
		IotsitewiseActions.ListGateways,
		IotsitewiseActions.ListInterfaceRelationships,
		IotsitewiseActions.ListPipelineExecutions,
		IotsitewiseActions.ListPipelines,
		IotsitewiseActions.ListPortals,
		IotsitewiseActions.ListProjectAssets,
		IotsitewiseActions.ListProjects,
		IotsitewiseActions.ListQueries,
		IotsitewiseActions.ListSearches,
		IotsitewiseActions.ListTasks,
		IotsitewiseActions.ListTimeSeries,
		IotsitewiseActions.ListWorkspaces,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		IotsitewiseActions.TagResource,
		IotsitewiseActions.UntagResource,
	];
}

/**
 * Properties for building a access-policy ARN.
 */
export interface IotsitewiseAccessPolicyArnProps {
	/** The AccessPolicyId component of the ARN. */
	readonly accessPolicyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a access-policy ARN.
 */
export interface IotsitewiseAccessPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccessPolicyId component. */
	readonly accessPolicyId: string;
}

/**
 * Properties for building a application ARN.
 */
export interface IotsitewiseApplicationArnProps {
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
}

/**
 * Parsed components of a application ARN.
 */
export interface IotsitewiseApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceName component. */
	readonly workspaceName: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a asset ARN.
 */
export interface IotsitewiseAssetArnProps {
	/** The AssetId component of the ARN. */
	readonly assetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a asset ARN.
 */
export interface IotsitewiseAssetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssetId component. */
	readonly assetId: string;
}

/**
 * Properties for building a asset-model ARN.
 */
export interface IotsitewiseAssetModelArnProps {
	/** The AssetModelId component of the ARN. */
	readonly assetModelId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a asset-model ARN.
 */
export interface IotsitewiseAssetModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssetModelId component. */
	readonly assetModelId: string;
}

/**
 * Properties for building a computation-model ARN.
 */
export interface IotsitewiseComputationModelArnProps {
	/** The ComputationModelId component of the ARN. */
	readonly computationModelId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a computation-model ARN.
 */
export interface IotsitewiseComputationModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ComputationModelId component. */
	readonly computationModelId: string;
}

/**
 * Properties for building a dashboard ARN.
 */
export interface IotsitewiseDashboardArnProps {
	/** The DashboardId component of the ARN. */
	readonly dashboardId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dashboard ARN.
 */
export interface IotsitewiseDashboardArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DashboardId component. */
	readonly dashboardId: string;
}

/**
 * Properties for building a dataset ARN.
 */
export interface IotsitewiseDatasetArnProps {
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
export interface IotsitewiseDatasetArnComponents {
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
 * Properties for building a gateway ARN.
 */
export interface IotsitewiseGatewayArnProps {
	/** The GatewayId component of the ARN. */
	readonly gatewayId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a gateway ARN.
 */
export interface IotsitewiseGatewayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
}

/**
 * Properties for building a pipeline ARN.
 */
export interface IotsitewisePipelineArnProps {
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
}

/**
 * Parsed components of a pipeline ARN.
 */
export interface IotsitewisePipelineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceName component. */
	readonly workspaceName: string;
	/** The PipelineName component. */
	readonly pipelineName: string;
}

/**
 * Properties for building a portal ARN.
 */
export interface IotsitewisePortalArnProps {
	/** The PortalId component of the ARN. */
	readonly portalId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a portal ARN.
 */
export interface IotsitewisePortalArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PortalId component. */
	readonly portalId: string;
}

/**
 * Properties for building a project ARN.
 */
export interface IotsitewiseProjectArnProps {
	/** The ProjectId component of the ARN. */
	readonly projectId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a project ARN.
 */
export interface IotsitewiseProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectId component. */
	readonly projectId: string;
}

/**
 * Properties for building a task ARN.
 */
export interface IotsitewiseTaskArnProps {
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
}

/**
 * Parsed components of a task ARN.
 */
export interface IotsitewiseTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceName component. */
	readonly workspaceName: string;
	/** The TaskName component. */
	readonly taskName: string;
}

/**
 * Properties for building a time-series ARN.
 */
export interface IotsitewiseTimeSeriesArnProps {
	/** The TimeSeriesId component of the ARN. */
	readonly timeSeriesId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a time-series ARN.
 */
export interface IotsitewiseTimeSeriesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TimeSeriesId component. */
	readonly timeSeriesId: string;
}

/**
 * Properties for building a workspace ARN.
 */
export interface IotsitewiseWorkspaceArnProps {
	/** The WorkspaceName component of the ARN. */
	readonly workspaceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workspace ARN.
 */
export interface IotsitewiseWorkspaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceName component. */
	readonly workspaceName: string;
}

const AccessPolicyArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):access-policy\/(?<accessPolicyId>[^:/?]+)$/;
const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):workspace\/(?<workspaceName>[^:/?]+)\/application\/(?<applicationId>[^:/?]+)$/;
const AssetArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):asset\/(?<assetId>[^:/?]+)$/;
const AssetModelArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):asset-model\/(?<assetModelId>[^:/?]+)$/;
const ComputationModelArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):computation-model\/(?<computationModelId>[^:/?]+)$/;
const DashboardArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):dashboard\/(?<dashboardId>[^:/?]+)$/;
const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):dataset\/(?<datasetId>[^:/?]+)$/;
const GatewayArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)$/;
const PipelineArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):workspace\/(?<workspaceName>[^:/?]+)\/pipeline\/(?<pipelineName>[^:/?]+)$/;
const PortalArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):portal\/(?<portalId>[^:/?]+)$/;
const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectId>[^:/?]+)$/;
const TaskArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):workspace\/(?<workspaceName>[^:/?]+)\/task\/(?<taskName>[^:/?]+)$/;
const TimeSeriesArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):time-series\/(?<timeSeriesId>[^:/?]+)$/;
const WorkspaceArnRegex =
	/^arn:(?<partition>[^:]+):iotsitewise:(?<region>[^:]*):(?<account>[^:]*):workspace\/(?<workspaceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for iotsitewise resources.
 */
export class IotsitewiseResources {
	/**
	 * Builds an ARN for the access-policy resource.
	 */
	static accessPolicy(props: IotsitewiseAccessPolicyArnProps): string {
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
	static parseAccessPolicyArn(
		arn: string,
	): IotsitewiseAccessPolicyArnComponents {
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
	static application(props: IotsitewiseApplicationArnProps): string {
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
	static parseApplicationArn(arn: string): IotsitewiseApplicationArnComponents {
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
	static asset(props: IotsitewiseAssetArnProps): string {
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
	static parseAssetArn(arn: string): IotsitewiseAssetArnComponents {
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
	static assetModel(props: IotsitewiseAssetModelArnProps): string {
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
	static parseAssetModelArn(arn: string): IotsitewiseAssetModelArnComponents {
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
	static computationModel(props: IotsitewiseComputationModelArnProps): string {
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
	static parseComputationModelArn(
		arn: string,
	): IotsitewiseComputationModelArnComponents {
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
	static dashboard(props: IotsitewiseDashboardArnProps): string {
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
	static parseDashboardArn(arn: string): IotsitewiseDashboardArnComponents {
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
	static dataset(props: IotsitewiseDatasetArnProps): string {
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
	static parseDatasetArn(arn: string): IotsitewiseDatasetArnComponents {
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
	static gateway(props: IotsitewiseGatewayArnProps): string {
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
	static parseGatewayArn(arn: string): IotsitewiseGatewayArnComponents {
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
	static pipeline(props: IotsitewisePipelineArnProps): string {
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
	static parsePipelineArn(arn: string): IotsitewisePipelineArnComponents {
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
	static portal(props: IotsitewisePortalArnProps): string {
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
	static parsePortalArn(arn: string): IotsitewisePortalArnComponents {
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
	static project(props: IotsitewiseProjectArnProps): string {
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
	static parseProjectArn(arn: string): IotsitewiseProjectArnComponents {
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
	static task(props: IotsitewiseTaskArnProps): string {
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
	static parseTaskArn(arn: string): IotsitewiseTaskArnComponents {
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
	static timeSeries(props: IotsitewiseTimeSeriesArnProps): string {
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
	static parseTimeSeriesArn(arn: string): IotsitewiseTimeSeriesArnComponents {
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
	static workspace(props: IotsitewiseWorkspaceArnProps): string {
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
	static parseWorkspaceArn(arn: string): IotsitewiseWorkspaceArnComponents {
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
	static readonly AssociateAssets: string[] = ["iotsitewise:AssociateAssets"];
	/** IAM actions required for the AssociateTimeSeriesToAssetProperty API call. */
	static readonly AssociateTimeSeriesToAssetProperty: string[] = [
		"iotsitewise:AssociateTimeSeriesToAssetProperty",
	];
	/** IAM actions required for the BatchAssociateDataSegmentsToDataset API call. */
	static readonly BatchAssociateDataSegmentsToDataset: string[] = [
		"iotsitewise:BatchAssociateDataSegmentsToDataset",
	];
	/** IAM actions required for the BatchAssociateProjectAssets API call. */
	static readonly BatchAssociateProjectAssets: string[] = [
		"iotsitewise:BatchAssociateProjectAssets",
	];
	/** IAM actions required for the BatchDeleteDatasetDataSegments API call. */
	static readonly BatchDeleteDatasetDataSegments: string[] = [
		"iotsitewise:BatchDeleteDatasetDataSegments",
	];
	/** IAM actions required for the BatchDisassociateDataSegmentsFromDataset API call. */
	static readonly BatchDisassociateDataSegmentsFromDataset: string[] = [
		"iotsitewise:BatchDisassociateDataSegmentsFromDataset",
	];
	/** IAM actions required for the BatchDisassociateProjectAssets API call. */
	static readonly BatchDisassociateProjectAssets: string[] = [
		"iotsitewise:BatchDisassociateProjectAssets",
	];
	/** IAM actions required for the BatchGetAssetPropertyAggregates API call. */
	static readonly BatchGetAssetPropertyAggregates: string[] = [
		"iotsitewise:BatchGetAssetPropertyAggregates",
	];
	/** IAM actions required for the BatchGetAssetPropertyValue API call. */
	static readonly BatchGetAssetPropertyValue: string[] = [
		"iotsitewise:BatchGetAssetPropertyValue",
	];
	/** IAM actions required for the BatchGetAssetPropertyValueHistory API call. */
	static readonly BatchGetAssetPropertyValueHistory: string[] = [
		"iotsitewise:BatchGetAssetPropertyValueHistory",
	];
	/** IAM actions required for the BatchPutAssetPropertyValue API call. */
	static readonly BatchPutAssetPropertyValue: string[] = [
		"iotsitewise:BatchPutAssetPropertyValue",
	];
	/** IAM actions required for the CancelEnrichmentJob API call. */
	static readonly CancelEnrichmentJob: string[] = [
		"iotsitewise:CancelEnrichmentJob",
	];
	/** IAM actions required for the CancelPipelineExecution API call. */
	static readonly CancelPipelineExecution: string[] = [
		"iotsitewise:CancelPipelineExecution",
	];
	/** IAM actions required for the CancelQuery API call. */
	static readonly CancelQuery: string[] = ["iotsitewise:CancelQuery"];
	/** IAM actions required for the CreateAccessPolicy API call. */
	static readonly CreateAccessPolicy: string[] = [
		"iotsitewise:CreateAccessPolicy",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [
		"iotsitewise:CreateApplication",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateAsset API call. */
	static readonly CreateAsset: string[] = [
		"iotsitewise:CreateAsset",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateAssetModel API call. */
	static readonly CreateAssetModel: string[] = [
		"iotsitewise:CreateAssetModel",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateAssetModelCompositeModel API call. */
	static readonly CreateAssetModelCompositeModel: string[] = [
		"iotsitewise:CreateAssetModelCompositeModel",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateBulkImportJob API call. */
	static readonly CreateBulkImportJob: string[] = [
		"iotsitewise:CreateBulkImportJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateComputationModel API call. */
	static readonly CreateComputationModel: string[] = [
		"iotsitewise:CreateComputationModel",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateDashboard API call. */
	static readonly CreateDashboard: string[] = [
		"iotsitewise:CreateDashboard",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CreateDataset: string[] = [
		"iotsitewise:CreateDataset",
		"iam:PassRole",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateDatasetExportJob API call. */
	static readonly CreateDatasetExportJob: string[] = [
		"iotsitewise:CreateDatasetExportJob",
	];
	/** IAM actions required for the CreateEnrichmentJob API call. */
	static readonly CreateEnrichmentJob: string[] = [
		"iotsitewise:CreateEnrichmentJob",
	];
	/** IAM actions required for the CreateGateway API call. */
	static readonly CreateGateway: string[] = [
		"iotsitewise:CreateGateway",
		"iam:PassRole",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreatePipeline API call. */
	static readonly CreatePipeline: string[] = [
		"iotsitewise:CreatePipeline",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreatePortal API call. */
	static readonly CreatePortal: string[] = [
		"iotsitewise:CreatePortal",
		"iam:PassRole",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateProject API call. */
	static readonly CreateProject: string[] = [
		"iotsitewise:CreateProject",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateTask API call. */
	static readonly CreateTask: string[] = [
		"iotsitewise:CreateTask",
		"iam:PassRole",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the CreateWorkspace API call. */
	static readonly CreateWorkspace: string[] = [
		"iotsitewise:CreateWorkspace",
		"iotsitewise:TagResource",
	];
	/** IAM actions required for the DeleteAccessPolicy API call. */
	static readonly DeleteAccessPolicy: string[] = [
		"iotsitewise:DeleteAccessPolicy",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [
		"iotsitewise:DeleteApplication",
	];
	/** IAM actions required for the DeleteAsset API call. */
	static readonly DeleteAsset: string[] = ["iotsitewise:DeleteAsset"];
	/** IAM actions required for the DeleteAssetModel API call. */
	static readonly DeleteAssetModel: string[] = ["iotsitewise:DeleteAssetModel"];
	/** IAM actions required for the DeleteAssetModelCompositeModel API call. */
	static readonly DeleteAssetModelCompositeModel: string[] = [
		"iotsitewise:DeleteAssetModelCompositeModel",
	];
	/** IAM actions required for the DeleteAssetModelInterfaceRelationship API call. */
	static readonly DeleteAssetModelInterfaceRelationship: string[] = [
		"iotsitewise:DeleteAssetModelInterfaceRelationship",
	];
	/** IAM actions required for the DeleteComputationModel API call. */
	static readonly DeleteComputationModel: string[] = [
		"iotsitewise:DeleteComputationModel",
	];
	/** IAM actions required for the DeleteDashboard API call. */
	static readonly DeleteDashboard: string[] = ["iotsitewise:DeleteDashboard"];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DeleteDataset: string[] = ["iotsitewise:DeleteDataset"];
	/** IAM actions required for the DeleteGateway API call. */
	static readonly DeleteGateway: string[] = ["iotsitewise:DeleteGateway"];
	/** IAM actions required for the DeletePipeline API call. */
	static readonly DeletePipeline: string[] = ["iotsitewise:DeletePipeline"];
	/** IAM actions required for the DeletePortal API call. */
	static readonly DeletePortal: string[] = ["iotsitewise:DeletePortal"];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DeleteProject: string[] = ["iotsitewise:DeleteProject"];
	/** IAM actions required for the DeleteTask API call. */
	static readonly DeleteTask: string[] = ["iotsitewise:DeleteTask"];
	/** IAM actions required for the DeleteTimeSeries API call. */
	static readonly DeleteTimeSeries: string[] = ["iotsitewise:DeleteTimeSeries"];
	/** IAM actions required for the DeleteWorkspace API call. */
	static readonly DeleteWorkspace: string[] = ["iotsitewise:DeleteWorkspace"];
	/** IAM actions required for the DescribeAccessPolicy API call. */
	static readonly DescribeAccessPolicy: string[] = [
		"iotsitewise:DescribeAccessPolicy",
	];
	/** IAM actions required for the DescribeAction API call. */
	static readonly DescribeAction: string[] = ["iotsitewise:DescribeAction"];
	/** IAM actions required for the DescribeApplication API call. */
	static readonly DescribeApplication: string[] = [
		"iotsitewise:DescribeApplication",
	];
	/** IAM actions required for the DescribeAsset API call. */
	static readonly DescribeAsset: string[] = ["iotsitewise:DescribeAsset"];
	/** IAM actions required for the DescribeAssetCompositeModel API call. */
	static readonly DescribeAssetCompositeModel: string[] = [
		"iotsitewise:DescribeAssetCompositeModel",
	];
	/** IAM actions required for the DescribeAssetModel API call. */
	static readonly DescribeAssetModel: string[] = [
		"iotsitewise:DescribeAssetModel",
	];
	/** IAM actions required for the DescribeAssetModelCompositeModel API call. */
	static readonly DescribeAssetModelCompositeModel: string[] = [
		"iotsitewise:DescribeAssetModelCompositeModel",
	];
	/** IAM actions required for the DescribeAssetModelInterfaceRelationship API call. */
	static readonly DescribeAssetModelInterfaceRelationship: string[] = [
		"iotsitewise:DescribeAssetModelInterfaceRelationship",
	];
	/** IAM actions required for the DescribeAssetProperty API call. */
	static readonly DescribeAssetProperty: string[] = [
		"iotsitewise:DescribeAssetProperty",
	];
	/** IAM actions required for the DescribeBulkImportJob API call. */
	static readonly DescribeBulkImportJob: string[] = [
		"iotsitewise:DescribeBulkImportJob",
	];
	/** IAM actions required for the DescribeComputationModel API call. */
	static readonly DescribeComputationModel: string[] = [
		"iotsitewise:DescribeComputationModel",
	];
	/** IAM actions required for the DescribeComputationModelExecutionSummary API call. */
	static readonly DescribeComputationModelExecutionSummary: string[] = [
		"iotsitewise:DescribeComputationModelExecutionSummary",
	];
	/** IAM actions required for the DescribeDashboard API call. */
	static readonly DescribeDashboard: string[] = [
		"iotsitewise:DescribeDashboard",
	];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DescribeDataset: string[] = ["iotsitewise:DescribeDataset"];
	/** IAM actions required for the DescribeDatasetExportJob API call. */
	static readonly DescribeDatasetExportJob: string[] = [
		"iotsitewise:DescribeDatasetExportJob",
	];
	/** IAM actions required for the DescribeDefaultEncryptionConfiguration API call. */
	static readonly DescribeDefaultEncryptionConfiguration: string[] = [
		"iotsitewise:DescribeDefaultEncryptionConfiguration",
	];
	/** IAM actions required for the DescribeEnrichmentJob API call. */
	static readonly DescribeEnrichmentJob: string[] = [
		"iotsitewise:DescribeEnrichmentJob",
	];
	/** IAM actions required for the DescribeExecution API call. */
	static readonly DescribeExecution: string[] = [
		"iotsitewise:DescribeExecution",
	];
	/** IAM actions required for the DescribeGateway API call. */
	static readonly DescribeGateway: string[] = ["iotsitewise:DescribeGateway"];
	/** IAM actions required for the DescribeGatewayCapabilityConfiguration API call. */
	static readonly DescribeGatewayCapabilityConfiguration: string[] = [
		"iotsitewise:DescribeGatewayCapabilityConfiguration",
	];
	/** IAM actions required for the DescribeLoggingOptions API call. */
	static readonly DescribeLoggingOptions: string[] = [
		"iotsitewise:DescribeLoggingOptions",
	];
	/** IAM actions required for the DescribePipeline API call. */
	static readonly DescribePipeline: string[] = ["iotsitewise:DescribePipeline"];
	/** IAM actions required for the DescribePipelineExecution API call. */
	static readonly DescribePipelineExecution: string[] = [
		"iotsitewise:DescribePipelineExecution",
	];
	/** IAM actions required for the DescribePortal API call. */
	static readonly DescribePortal: string[] = ["iotsitewise:DescribePortal"];
	/** IAM actions required for the DescribeProject API call. */
	static readonly DescribeProject: string[] = ["iotsitewise:DescribeProject"];
	/** IAM actions required for the DescribeQuery API call. */
	static readonly DescribeQuery: string[] = ["iotsitewise:DescribeQuery"];
	/** IAM actions required for the DescribeSearch API call. */
	static readonly DescribeSearch: string[] = ["iotsitewise:DescribeSearch"];
	/** IAM actions required for the DescribeStorageConfiguration API call. */
	static readonly DescribeStorageConfiguration: string[] = [
		"iotsitewise:DescribeStorageConfiguration",
	];
	/** IAM actions required for the DescribeTask API call. */
	static readonly DescribeTask: string[] = ["iotsitewise:DescribeTask"];
	/** IAM actions required for the DescribeTimeSeries API call. */
	static readonly DescribeTimeSeries: string[] = [
		"iotsitewise:DescribeTimeSeries",
	];
	/** IAM actions required for the DescribeWorkspace API call. */
	static readonly DescribeWorkspace: string[] = [
		"iotsitewise:DescribeWorkspace",
	];
	/** IAM actions required for the DisassociateAssets API call. */
	static readonly DisassociateAssets: string[] = [
		"iotsitewise:DisassociateAssets",
	];
	/** IAM actions required for the DisassociateTimeSeriesFromAssetProperty API call. */
	static readonly DisassociateTimeSeriesFromAssetProperty: string[] = [
		"iotsitewise:DisassociateTimeSeriesFromAssetProperty",
	];
	/** IAM actions required for the ExecuteAction API call. */
	static readonly ExecuteAction: string[] = ["iotsitewise:ExecuteAction"];
	/** IAM actions required for the ExecuteQuery API call. */
	static readonly ExecuteQuery: string[] = ["iotsitewise:ExecuteQuery"];
	/** IAM actions required for the GetAssetPropertyAggregates API call. */
	static readonly opGetAssetPropertyAggregates: string[] = [
		"iotsitewise:GetAssetPropertyAggregates",
	];
	/** IAM actions required for the GetAssetPropertyValue API call. */
	static readonly opGetAssetPropertyValue: string[] = [
		"iotsitewise:GetAssetPropertyValue",
	];
	/** IAM actions required for the GetAssetPropertyValueHistory API call. */
	static readonly opGetAssetPropertyValueHistory: string[] = [
		"iotsitewise:GetAssetPropertyValueHistory",
	];
	/** IAM actions required for the GetCaptureData API call. */
	static readonly opGetCaptureData: string[] = ["iotsitewise:GetCaptureData"];
	/** IAM actions required for the GetInterpolatedAssetPropertyValues API call. */
	static readonly opGetInterpolatedAssetPropertyValues: string[] = [
		"iotsitewise:GetInterpolatedAssetPropertyValues",
	];
	/** IAM actions required for the GetQueryResults API call. */
	static readonly opGetQueryResults: string[] = ["iotsitewise:GetQueryResults"];
	/** IAM actions required for the GetSearchResults API call. */
	static readonly opGetSearchResults: string[] = [
		"iotsitewise:GetSearchResults",
	];
	/** IAM actions required for the InvokeAssistant API call. */
	static readonly InvokeAssistant: string[] = ["iotsitewise:InvokeAssistant"];
	/** IAM actions required for the ListAccessPolicies API call. */
	static readonly ListAccessPolicies: string[] = [
		"iotsitewise:ListAccessPolicies",
	];
	/** IAM actions required for the ListActions API call. */
	static readonly ListActions: string[] = ["iotsitewise:ListActions"];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = ["iotsitewise:ListApplications"];
	/** IAM actions required for the ListAssetModelCompositeModels API call. */
	static readonly ListAssetModelCompositeModels: string[] = [
		"iotsitewise:ListAssetModelCompositeModels",
	];
	/** IAM actions required for the ListAssetModelProperties API call. */
	static readonly ListAssetModelProperties: string[] = [
		"iotsitewise:ListAssetModelProperties",
	];
	/** IAM actions required for the ListAssetModels API call. */
	static readonly ListAssetModels: string[] = ["iotsitewise:ListAssetModels"];
	/** IAM actions required for the ListAssetProperties API call. */
	static readonly ListAssetProperties: string[] = [
		"iotsitewise:ListAssetProperties",
	];
	/** IAM actions required for the ListAssetRelationships API call. */
	static readonly ListAssetRelationships: string[] = [
		"iotsitewise:ListAssetRelationships",
	];
	/** IAM actions required for the ListAssets API call. */
	static readonly ListAssets: string[] = ["iotsitewise:ListAssets"];
	/** IAM actions required for the ListAssociatedAssets API call. */
	static readonly ListAssociatedAssets: string[] = [
		"iotsitewise:ListAssociatedAssets",
	];
	/** IAM actions required for the ListBulkImportJobs API call. */
	static readonly ListBulkImportJobs: string[] = [
		"iotsitewise:ListBulkImportJobs",
	];
	/** IAM actions required for the ListCompositionRelationships API call. */
	static readonly ListCompositionRelationships: string[] = [
		"iotsitewise:ListCompositionRelationships",
	];
	/** IAM actions required for the ListComputationModelDataBindingUsages API call. */
	static readonly ListComputationModelDataBindingUsages: string[] = [
		"iotsitewise:ListComputationModelDataBindingUsages",
	];
	/** IAM actions required for the ListComputationModelResolveToResources API call. */
	static readonly ListComputationModelResolveToResources: string[] = [
		"iotsitewise:ListComputationModelResolveToResources",
	];
	/** IAM actions required for the ListComputationModels API call. */
	static readonly ListComputationModels: string[] = [
		"iotsitewise:ListComputationModels",
	];
	/** IAM actions required for the ListDashboards API call. */
	static readonly ListDashboards: string[] = ["iotsitewise:ListDashboards"];
	/** IAM actions required for the ListDatasetDataSegmentRelationships API call. */
	static readonly ListDatasetDataSegmentRelationships: string[] = [
		"iotsitewise:ListDatasetDataSegmentRelationships",
	];
	/** IAM actions required for the ListDatasetDataSegments API call. */
	static readonly ListDatasetDataSegments: string[] = [
		"iotsitewise:ListDatasetDataSegments",
	];
	/** IAM actions required for the ListDatasetExportJobs API call. */
	static readonly ListDatasetExportJobs: string[] = [
		"iotsitewise:ListDatasetExportJobs",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly ListDatasets: string[] = ["iotsitewise:ListDatasets"];
	/** IAM actions required for the ListEnrichmentJobs API call. */
	static readonly ListEnrichmentJobs: string[] = [
		"iotsitewise:ListEnrichmentJobs",
	];
	/** IAM actions required for the ListExecutions API call. */
	static readonly ListExecutions: string[] = ["iotsitewise:ListExecutions"];
	/** IAM actions required for the ListGateways API call. */
	static readonly ListGateways: string[] = ["iotsitewise:ListGateways"];
	/** IAM actions required for the ListInterfaceRelationships API call. */
	static readonly ListInterfaceRelationships: string[] = [
		"iotsitewise:ListInterfaceRelationships",
	];
	/** IAM actions required for the ListPipelineExecutions API call. */
	static readonly ListPipelineExecutions: string[] = [
		"iotsitewise:ListPipelineExecutions",
	];
	/** IAM actions required for the ListPipelines API call. */
	static readonly ListPipelines: string[] = ["iotsitewise:ListPipelines"];
	/** IAM actions required for the ListPortals API call. */
	static readonly ListPortals: string[] = ["iotsitewise:ListPortals"];
	/** IAM actions required for the ListProjectAssets API call. */
	static readonly ListProjectAssets: string[] = [
		"iotsitewise:ListProjectAssets",
	];
	/** IAM actions required for the ListProjects API call. */
	static readonly ListProjects: string[] = ["iotsitewise:ListProjects"];
	/** IAM actions required for the ListQueries API call. */
	static readonly ListQueries: string[] = ["iotsitewise:ListQueries"];
	/** IAM actions required for the ListSearches API call. */
	static readonly ListSearches: string[] = ["iotsitewise:ListSearches"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"iotsitewise:ListTagsForResource",
	];
	/** IAM actions required for the ListTasks API call. */
	static readonly ListTasks: string[] = ["iotsitewise:ListTasks"];
	/** IAM actions required for the ListTimeSeries API call. */
	static readonly ListTimeSeries: string[] = ["iotsitewise:ListTimeSeries"];
	/** IAM actions required for the ListWorkspaces API call. */
	static readonly ListWorkspaces: string[] = ["iotsitewise:ListWorkspaces"];
	/** IAM actions required for the PutAssetModelInterfaceRelationship API call. */
	static readonly PutAssetModelInterfaceRelationship: string[] = [
		"iotsitewise:PutAssetModelInterfaceRelationship",
	];
	/** IAM actions required for the PutDefaultEncryptionConfiguration API call. */
	static readonly PutDefaultEncryptionConfiguration: string[] = [
		"iotsitewise:PutDefaultEncryptionConfiguration",
	];
	/** IAM actions required for the PutLoggingOptions API call. */
	static readonly PutLoggingOptions: string[] = [
		"iotsitewise:PutLoggingOptions",
	];
	/** IAM actions required for the PutStorageConfiguration API call. */
	static readonly PutStorageConfiguration: string[] = [
		"iam:PassRole",
		"iotsitewise:PutStorageConfiguration",
	];
	/** IAM actions required for the StartPipelineExecution API call. */
	static readonly StartPipelineExecution: string[] = [
		"iotsitewise:StartPipelineExecution",
	];
	/** IAM actions required for the StartQuery API call. */
	static readonly StartQuery: string[] = ["iotsitewise:StartQuery"];
	/** IAM actions required for the StartSearch API call. */
	static readonly StartSearch: string[] = ["iotsitewise:StartSearch"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["iotsitewise:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["iotsitewise:UntagResource"];
	/** IAM actions required for the UpdateAccessPolicy API call. */
	static readonly UpdateAccessPolicy: string[] = [
		"iotsitewise:UpdateAccessPolicy",
	];
	/** IAM actions required for the UpdateAsset API call. */
	static readonly UpdateAsset: string[] = ["iotsitewise:UpdateAsset"];
	/** IAM actions required for the UpdateAssetModel API call. */
	static readonly UpdateAssetModel: string[] = ["iotsitewise:UpdateAssetModel"];
	/** IAM actions required for the UpdateAssetModelCompositeModel API call. */
	static readonly UpdateAssetModelCompositeModel: string[] = [
		"iam:PassRole",
		"iotsitewise:UpdateAssetModelCompositeModel",
	];
	/** IAM actions required for the UpdateAssetProperty API call. */
	static readonly UpdateAssetProperty: string[] = [
		"iotsitewise:UpdateAssetProperty",
	];
	/** IAM actions required for the UpdateComputationModel API call. */
	static readonly UpdateComputationModel: string[] = [
		"iotsitewise:UpdateComputationModel",
	];
	/** IAM actions required for the UpdateDashboard API call. */
	static readonly UpdateDashboard: string[] = ["iotsitewise:UpdateDashboard"];
	/** IAM actions required for the UpdateDataset API call. */
	static readonly UpdateDataset: string[] = [
		"iam:PassRole",
		"iotsitewise:UpdateDataset",
	];
	/** IAM actions required for the UpdateGateway API call. */
	static readonly UpdateGateway: string[] = ["iotsitewise:UpdateGateway"];
	/** IAM actions required for the UpdateGatewayCapabilityConfiguration API call. */
	static readonly UpdateGatewayCapabilityConfiguration: string[] = [
		"iotsitewise:UpdateGatewayCapabilityConfiguration",
	];
	/** IAM actions required for the UpdatePipeline API call. */
	static readonly UpdatePipeline: string[] = ["iotsitewise:UpdatePipeline"];
	/** IAM actions required for the UpdatePortal API call. */
	static readonly UpdatePortal: string[] = [
		"iam:PassRole",
		"iotsitewise:UpdatePortal",
	];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UpdateProject: string[] = ["iotsitewise:UpdateProject"];
	/** IAM actions required for the UpdateTask API call. */
	static readonly UpdateTask: string[] = [
		"iam:PassRole",
		"iotsitewise:UpdateTask",
	];
	/** IAM actions required for the UpdateWorkspace API call. */
	static readonly UpdateWorkspace: string[] = ["iotsitewise:UpdateWorkspace"];
}

/**
 * Condition key constants and builders for iotsitewise.
 */
export class IotsitewiseConditions {
	/** Condition keys applicable to the CreateAccessPolicy action. */
	static readonly CreateAccessPolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAsset action. */
	static readonly CreateAssetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAssetModel action. */
	static readonly CreateAssetModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateComputationModel action. */
	static readonly CreateComputationModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDashboard action. */
	static readonly CreateDashboardConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CreateDatasetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGateway action. */
	static readonly CreateGatewayConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePipeline action. */
	static readonly CreatePipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iotsitewise:taskArns",
	];
	/** Condition keys applicable to the CreatePortal action. */
	static readonly CreatePortalConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CreateProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTask action. */
	static readonly CreateTaskConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkspace action. */
	static readonly CreateWorkspaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeTimeSeries action. */
	static readonly DescribeTimeSeriesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdatePipeline action. */
	static readonly UpdatePipelineConditionKeys: string[] = [
		"iotsitewise:taskArns",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
