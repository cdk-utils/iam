// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sagemaker.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sagemaker service.
 */
export class SageMakerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sagemaker";

	/** [Read] sagemaker:AccessModelPackage */
	static readonly ACCESS_MODEL_PACKAGE = "sagemaker:AccessModelPackage";
	/** [Write] sagemaker:AddAssociation */
	static readonly ADD_ASSOCIATION = "sagemaker:AddAssociation";
	/** [Tagging] sagemaker:AddTags */
	static readonly ADD_TAGS = "sagemaker:AddTags";
	/** [Write] sagemaker:AssociateTrialComponent */
	static readonly ASSOCIATE_TRIAL_COMPONENT =
		"sagemaker:AssociateTrialComponent";
	/** [Write] sagemaker:AttachClusterNodeVolume */
	static readonly ATTACH_CLUSTER_NODE_VOLUME =
		"sagemaker:AttachClusterNodeVolume";
	/** [Write] sagemaker:BatchAddClusterNodes */
	static readonly BATCH_ADD_CLUSTER_NODES = "sagemaker:BatchAddClusterNodes";
	/** [Write] sagemaker:BatchDeleteClusterNodes */
	static readonly BATCH_DELETE_CLUSTER_NODES =
		"sagemaker:BatchDeleteClusterNodes";
	/** [Read] sagemaker:BatchDescribeModelPackage */
	static readonly BATCH_DESCRIBE_MODEL_PACKAGE =
		"sagemaker:BatchDescribeModelPackage";
	/** [Read] sagemaker:BatchGetMetrics */
	static readonly BATCH_GET_METRICS = "sagemaker:BatchGetMetrics";
	/** [Read] sagemaker:BatchGetRecord */
	static readonly BATCH_GET_RECORD = "sagemaker:BatchGetRecord";
	/** [Write] sagemaker:BatchPutMetrics */
	static readonly BATCH_PUT_METRICS = "sagemaker:BatchPutMetrics";
	/** [Write] sagemaker:BatchWriteRecord */
	static readonly BATCH_WRITE_RECORD = "sagemaker:BatchWriteRecord";
	/** [Write] sagemaker:CallMlflowAppApi */
	static readonly CALL_MLFLOW_APP_API = "sagemaker:CallMlflowAppApi";
	/** [Write] sagemaker:CallPartnerAppApi */
	static readonly CALL_PARTNER_APP_API = "sagemaker:CallPartnerAppApi";
	/** [Read] sagemaker:CallWithBearerToken */
	static readonly CALL_WITH_BEARER_TOKEN = "sagemaker:CallWithBearerToken";
	/** [Write] sagemaker:CompleteRollout */
	static readonly COMPLETE_ROLLOUT = "sagemaker:CompleteRollout";
	/** [Write] sagemaker:CreateAIBenchmarkJob */
	static readonly CREATE_AI_BENCHMARK_JOB = "sagemaker:CreateAIBenchmarkJob";
	/** [Write] sagemaker:CreateAIRecommendationJob */
	static readonly CREATE_AI_RECOMMENDATION_JOB =
		"sagemaker:CreateAIRecommendationJob";
	/** [Write] sagemaker:CreateAIWorkloadConfig */
	static readonly CREATE_AI_WORKLOAD_CONFIG =
		"sagemaker:CreateAIWorkloadConfig";
	/** [Write] sagemaker:CreateAction */
	static readonly CREATE_ACTION = "sagemaker:CreateAction";
	/** [Write] sagemaker:CreateAlgorithm */
	static readonly CREATE_ALGORITHM = "sagemaker:CreateAlgorithm";
	/** [Write] sagemaker:CreateApp */
	static readonly CREATE_APP = "sagemaker:CreateApp";
	/** [Write] sagemaker:CreateAppImageConfig */
	static readonly CREATE_APP_IMAGE_CONFIG = "sagemaker:CreateAppImageConfig";
	/** [Write] sagemaker:CreateArtifact */
	static readonly CREATE_ARTIFACT = "sagemaker:CreateArtifact";
	/** [Write] sagemaker:CreateAutoMLJob */
	static readonly CREATE_AUTO_ML_JOB = "sagemaker:CreateAutoMLJob";
	/** [Write] sagemaker:CreateAutoMLJobV2 */
	static readonly CREATE_AUTO_ML_JOB_V2 = "sagemaker:CreateAutoMLJobV2";
	/** [Write] sagemaker:CreateCluster */
	static readonly CREATE_CLUSTER = "sagemaker:CreateCluster";
	/** [Write] sagemaker:CreateClusterSchedulerConfig */
	static readonly CREATE_CLUSTER_SCHEDULER_CONFIG =
		"sagemaker:CreateClusterSchedulerConfig";
	/** [Write] sagemaker:CreateCodeRepository */
	static readonly CREATE_CODE_REPOSITORY = "sagemaker:CreateCodeRepository";
	/** [Write] sagemaker:CreateCompilationJob */
	static readonly CREATE_COMPILATION_JOB = "sagemaker:CreateCompilationJob";
	/** [Write] sagemaker:CreateComputeQuota */
	static readonly CREATE_COMPUTE_QUOTA = "sagemaker:CreateComputeQuota";
	/** [Write] sagemaker:CreateContext */
	static readonly CREATE_CONTEXT = "sagemaker:CreateContext";
	/** [Write] sagemaker:CreateDataQualityJobDefinition */
	static readonly CREATE_DATA_QUALITY_JOB_DEFINITION =
		"sagemaker:CreateDataQualityJobDefinition";
	/** [Write] sagemaker:CreateDeviceFleet */
	static readonly CREATE_DEVICE_FLEET = "sagemaker:CreateDeviceFleet";
	/** [Write] sagemaker:CreateDomain */
	static readonly CREATE_DOMAIN = "sagemaker:CreateDomain";
	/** [Write] sagemaker:CreateEdgeDeploymentPlan */
	static readonly CREATE_EDGE_DEPLOYMENT_PLAN =
		"sagemaker:CreateEdgeDeploymentPlan";
	/** [Write] sagemaker:CreateEdgeDeploymentStage */
	static readonly CREATE_EDGE_DEPLOYMENT_STAGE =
		"sagemaker:CreateEdgeDeploymentStage";
	/** [Write] sagemaker:CreateEdgePackagingJob */
	static readonly CREATE_EDGE_PACKAGING_JOB =
		"sagemaker:CreateEdgePackagingJob";
	/** [Write] sagemaker:CreateEndpoint */
	static readonly CREATE_ENDPOINT = "sagemaker:CreateEndpoint";
	/** [Write] sagemaker:CreateEndpointConfig */
	static readonly CREATE_ENDPOINT_CONFIG = "sagemaker:CreateEndpointConfig";
	/** [Write] sagemaker:CreateExperiment */
	static readonly CREATE_EXPERIMENT = "sagemaker:CreateExperiment";
	/** [Write] sagemaker:CreateFeatureGroup */
	static readonly CREATE_FEATURE_GROUP = "sagemaker:CreateFeatureGroup";
	/** [Write] sagemaker:CreateFlowDefinition */
	static readonly CREATE_FLOW_DEFINITION = "sagemaker:CreateFlowDefinition";
	/** [Write] sagemaker:CreateHub */
	static readonly CREATE_HUB = "sagemaker:CreateHub";
	/** [Read] sagemaker:CreateHubContentPresignedUrls */
	static readonly CREATE_HUB_CONTENT_PRESIGNED_URLS =
		"sagemaker:CreateHubContentPresignedUrls";
	/** [Write] sagemaker:CreateHubContentReference */
	static readonly CREATE_HUB_CONTENT_REFERENCE =
		"sagemaker:CreateHubContentReference";
	/** [Write] sagemaker:CreateHumanTaskUi */
	static readonly CREATE_HUMAN_TASK_UI = "sagemaker:CreateHumanTaskUi";
	/** [Write] sagemaker:CreateHyperParameterTuningJob */
	static readonly CREATE_HYPER_PARAMETER_TUNING_JOB =
		"sagemaker:CreateHyperParameterTuningJob";
	/** [Write] sagemaker:CreateImage */
	static readonly CREATE_IMAGE = "sagemaker:CreateImage";
	/** [Write] sagemaker:CreateImageVersion */
	static readonly CREATE_IMAGE_VERSION = "sagemaker:CreateImageVersion";
	/** [Write] sagemaker:CreateInferenceComponent */
	static readonly CREATE_INFERENCE_COMPONENT =
		"sagemaker:CreateInferenceComponent";
	/** [Write] sagemaker:CreateInferenceExperiment */
	static readonly CREATE_INFERENCE_EXPERIMENT =
		"sagemaker:CreateInferenceExperiment";
	/** [Write] sagemaker:CreateInferenceRecommendationsJob */
	static readonly CREATE_INFERENCE_RECOMMENDATIONS_JOB =
		"sagemaker:CreateInferenceRecommendationsJob";
	/** [Write] sagemaker:CreateJob */
	static readonly CREATE_JOB = "sagemaker:CreateJob";
	/** [Write] sagemaker:CreateLabelingJob */
	static readonly CREATE_LABELING_JOB = "sagemaker:CreateLabelingJob";
	/** [Write] sagemaker:CreateLineageGroupPolicy */
	static readonly CREATE_LINEAGE_GROUP_POLICY =
		"sagemaker:CreateLineageGroupPolicy";
	/** [Write] sagemaker:CreateMlflowApp */
	static readonly CREATE_MLFLOW_APP = "sagemaker:CreateMlflowApp";
	/** [Write] sagemaker:CreateMlflowTrackingServer */
	static readonly CREATE_MLFLOW_TRACKING_SERVER =
		"sagemaker:CreateMlflowTrackingServer";
	/** [Write] sagemaker:CreateModel */
	static readonly CREATE_MODEL = "sagemaker:CreateModel";
	/** [Write] sagemaker:CreateModelBiasJobDefinition */
	static readonly CREATE_MODEL_BIAS_JOB_DEFINITION =
		"sagemaker:CreateModelBiasJobDefinition";
	/** [Write] sagemaker:CreateModelCard */
	static readonly CREATE_MODEL_CARD = "sagemaker:CreateModelCard";
	/** [Write] sagemaker:CreateModelCardExportJob */
	static readonly CREATE_MODEL_CARD_EXPORT_JOB =
		"sagemaker:CreateModelCardExportJob";
	/** [Write] sagemaker:CreateModelExplainabilityJobDefinition */
	static readonly CREATE_MODEL_EXPLAINABILITY_JOB_DEFINITION =
		"sagemaker:CreateModelExplainabilityJobDefinition";
	/** [Write] sagemaker:CreateModelPackage */
	static readonly CREATE_MODEL_PACKAGE = "sagemaker:CreateModelPackage";
	/** [Write] sagemaker:CreateModelPackageGroup */
	static readonly CREATE_MODEL_PACKAGE_GROUP =
		"sagemaker:CreateModelPackageGroup";
	/** [Write] sagemaker:CreateModelQualityJobDefinition */
	static readonly CREATE_MODEL_QUALITY_JOB_DEFINITION =
		"sagemaker:CreateModelQualityJobDefinition";
	/** [Write] sagemaker:CreateMonitoringSchedule */
	static readonly CREATE_MONITORING_SCHEDULE =
		"sagemaker:CreateMonitoringSchedule";
	/** [Write] sagemaker:CreateNotebookInstance */
	static readonly CREATE_NOTEBOOK_INSTANCE = "sagemaker:CreateNotebookInstance";
	/** [Write] sagemaker:CreateNotebookInstanceLifecycleConfig */
	static readonly CREATE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG =
		"sagemaker:CreateNotebookInstanceLifecycleConfig";
	/** [Write] sagemaker:CreateOptimizationJob */
	static readonly CREATE_OPTIMIZATION_JOB = "sagemaker:CreateOptimizationJob";
	/** [Write] sagemaker:CreatePartnerApp */
	static readonly CREATE_PARTNER_APP = "sagemaker:CreatePartnerApp";
	/** [Write] sagemaker:CreatePartnerAppPresignedUrl */
	static readonly CREATE_PARTNER_APP_PRESIGNED_URL =
		"sagemaker:CreatePartnerAppPresignedUrl";
	/** [Write] sagemaker:CreatePipeline */
	static readonly CREATE_PIPELINE = "sagemaker:CreatePipeline";
	/** [Write] sagemaker:CreatePresignedDomainUrl */
	static readonly CREATE_PRESIGNED_DOMAIN_URL =
		"sagemaker:CreatePresignedDomainUrl";
	/** [Write] sagemaker:CreatePresignedMlflowAppUrl */
	static readonly CREATE_PRESIGNED_MLFLOW_APP_URL =
		"sagemaker:CreatePresignedMlflowAppUrl";
	/** [Write] sagemaker:CreatePresignedMlflowTrackingServerUrl */
	static readonly CREATE_PRESIGNED_MLFLOW_TRACKING_SERVER_URL =
		"sagemaker:CreatePresignedMlflowTrackingServerUrl";
	/** [Write] sagemaker:CreatePresignedNotebookInstanceUrl */
	static readonly CREATE_PRESIGNED_NOTEBOOK_INSTANCE_URL =
		"sagemaker:CreatePresignedNotebookInstanceUrl";
	/** [Write] sagemaker:CreateProcessingJob */
	static readonly CREATE_PROCESSING_JOB = "sagemaker:CreateProcessingJob";
	/** [Write] sagemaker:CreateProject */
	static readonly CREATE_PROJECT = "sagemaker:CreateProject";
	/** [Write] sagemaker:CreateReservedCapacity */
	static readonly CREATE_RESERVED_CAPACITY = "sagemaker:CreateReservedCapacity";
	/** [Write] sagemaker:CreateSharedModel */
	static readonly CREATE_SHARED_MODEL = "sagemaker:CreateSharedModel";
	/** [Write] sagemaker:CreateSpace */
	static readonly CREATE_SPACE = "sagemaker:CreateSpace";
	/** [Write] sagemaker:CreateStudioLifecycleConfig */
	static readonly CREATE_STUDIO_LIFECYCLE_CONFIG =
		"sagemaker:CreateStudioLifecycleConfig";
	/** [Write] sagemaker:CreateTrainingJob */
	static readonly CREATE_TRAINING_JOB = "sagemaker:CreateTrainingJob";
	/** [Write] sagemaker:CreateTrainingPlan */
	static readonly CREATE_TRAINING_PLAN = "sagemaker:CreateTrainingPlan";
	/** [Write] sagemaker:CreateTransformJob */
	static readonly CREATE_TRANSFORM_JOB = "sagemaker:CreateTransformJob";
	/** [Write] sagemaker:CreateTrial */
	static readonly CREATE_TRIAL = "sagemaker:CreateTrial";
	/** [Write] sagemaker:CreateTrialComponent */
	static readonly CREATE_TRIAL_COMPONENT = "sagemaker:CreateTrialComponent";
	/** [Write] sagemaker:CreateUserProfile */
	static readonly CREATE_USER_PROFILE = "sagemaker:CreateUserProfile";
	/** [Write] sagemaker:CreateWorkforce */
	static readonly CREATE_WORKFORCE = "sagemaker:CreateWorkforce";
	/** [Write] sagemaker:CreateWorkteam */
	static readonly CREATE_WORKTEAM = "sagemaker:CreateWorkteam";
	/** [Write] sagemaker:DeleteAIBenchmarkJob */
	static readonly DELETE_AI_BENCHMARK_JOB = "sagemaker:DeleteAIBenchmarkJob";
	/** [Write] sagemaker:DeleteAIRecommendationJob */
	static readonly DELETE_AI_RECOMMENDATION_JOB =
		"sagemaker:DeleteAIRecommendationJob";
	/** [Write] sagemaker:DeleteAIWorkloadConfig */
	static readonly DELETE_AI_WORKLOAD_CONFIG =
		"sagemaker:DeleteAIWorkloadConfig";
	/** [Write] sagemaker:DeleteAction */
	static readonly DELETE_ACTION = "sagemaker:DeleteAction";
	/** [Write] sagemaker:DeleteAlgorithm */
	static readonly DELETE_ALGORITHM = "sagemaker:DeleteAlgorithm";
	/** [Write] sagemaker:DeleteApp */
	static readonly DELETE_APP = "sagemaker:DeleteApp";
	/** [Write] sagemaker:DeleteAppImageConfig */
	static readonly DELETE_APP_IMAGE_CONFIG = "sagemaker:DeleteAppImageConfig";
	/** [Write] sagemaker:DeleteArtifact */
	static readonly DELETE_ARTIFACT = "sagemaker:DeleteArtifact";
	/** [Write] sagemaker:DeleteAssociation */
	static readonly DELETE_ASSOCIATION = "sagemaker:DeleteAssociation";
	/** [Write] sagemaker:DeleteCluster */
	static readonly DELETE_CLUSTER = "sagemaker:DeleteCluster";
	/** [Write] sagemaker:DeleteClusterSchedulerConfig */
	static readonly DELETE_CLUSTER_SCHEDULER_CONFIG =
		"sagemaker:DeleteClusterSchedulerConfig";
	/** [Write] sagemaker:DeleteCodeRepository */
	static readonly DELETE_CODE_REPOSITORY = "sagemaker:DeleteCodeRepository";
	/** [Write] sagemaker:DeleteCompilationJob */
	static readonly DELETE_COMPILATION_JOB = "sagemaker:DeleteCompilationJob";
	/** [Write] sagemaker:DeleteComputeQuota */
	static readonly DELETE_COMPUTE_QUOTA = "sagemaker:DeleteComputeQuota";
	/** [Write] sagemaker:DeleteContext */
	static readonly DELETE_CONTEXT = "sagemaker:DeleteContext";
	/** [Write] sagemaker:DeleteDataQualityJobDefinition */
	static readonly DELETE_DATA_QUALITY_JOB_DEFINITION =
		"sagemaker:DeleteDataQualityJobDefinition";
	/** [Write] sagemaker:DeleteDeviceFleet */
	static readonly DELETE_DEVICE_FLEET = "sagemaker:DeleteDeviceFleet";
	/** [Write] sagemaker:DeleteDomain */
	static readonly DELETE_DOMAIN = "sagemaker:DeleteDomain";
	/** [Write] sagemaker:DeleteEdgeDeploymentPlan */
	static readonly DELETE_EDGE_DEPLOYMENT_PLAN =
		"sagemaker:DeleteEdgeDeploymentPlan";
	/** [Write] sagemaker:DeleteEdgeDeploymentStage */
	static readonly DELETE_EDGE_DEPLOYMENT_STAGE =
		"sagemaker:DeleteEdgeDeploymentStage";
	/** [Write] sagemaker:DeleteEndpoint */
	static readonly DELETE_ENDPOINT = "sagemaker:DeleteEndpoint";
	/** [Write] sagemaker:DeleteEndpointConfig */
	static readonly DELETE_ENDPOINT_CONFIG = "sagemaker:DeleteEndpointConfig";
	/** [Write] sagemaker:DeleteExperiment */
	static readonly DELETE_EXPERIMENT = "sagemaker:DeleteExperiment";
	/** [Write] sagemaker:DeleteFeatureGroup */
	static readonly DELETE_FEATURE_GROUP = "sagemaker:DeleteFeatureGroup";
	/** [Write] sagemaker:DeleteFlowDefinition */
	static readonly DELETE_FLOW_DEFINITION = "sagemaker:DeleteFlowDefinition";
	/** [Write] sagemaker:DeleteHub */
	static readonly DELETE_HUB = "sagemaker:DeleteHub";
	/** [Write] sagemaker:DeleteHubContent */
	static readonly DELETE_HUB_CONTENT = "sagemaker:DeleteHubContent";
	/** [Write] sagemaker:DeleteHubContentReference */
	static readonly DELETE_HUB_CONTENT_REFERENCE =
		"sagemaker:DeleteHubContentReference";
	/** [Write] sagemaker:DeleteHumanLoop */
	static readonly DELETE_HUMAN_LOOP = "sagemaker:DeleteHumanLoop";
	/** [Write] sagemaker:DeleteHumanTaskUi */
	static readonly DELETE_HUMAN_TASK_UI = "sagemaker:DeleteHumanTaskUi";
	/** [Write] sagemaker:DeleteHyperParameterTuningJob */
	static readonly DELETE_HYPER_PARAMETER_TUNING_JOB =
		"sagemaker:DeleteHyperParameterTuningJob";
	/** [Write] sagemaker:DeleteImage */
	static readonly DELETE_IMAGE = "sagemaker:DeleteImage";
	/** [Write] sagemaker:DeleteImageVersion */
	static readonly DELETE_IMAGE_VERSION = "sagemaker:DeleteImageVersion";
	/** [Write] sagemaker:DeleteInferenceComponent */
	static readonly DELETE_INFERENCE_COMPONENT =
		"sagemaker:DeleteInferenceComponent";
	/** [Write] sagemaker:DeleteInferenceExperiment */
	static readonly DELETE_INFERENCE_EXPERIMENT =
		"sagemaker:DeleteInferenceExperiment";
	/** [Write] sagemaker:DeleteJob */
	static readonly DELETE_JOB = "sagemaker:DeleteJob";
	/** [Write] sagemaker:DeleteLineageGroupPolicy */
	static readonly DELETE_LINEAGE_GROUP_POLICY =
		"sagemaker:DeleteLineageGroupPolicy";
	/** [Write] sagemaker:DeleteMlflowApp */
	static readonly DELETE_MLFLOW_APP = "sagemaker:DeleteMlflowApp";
	/** [Write] sagemaker:DeleteMlflowTrackingServer */
	static readonly DELETE_MLFLOW_TRACKING_SERVER =
		"sagemaker:DeleteMlflowTrackingServer";
	/** [Write] sagemaker:DeleteModel */
	static readonly DELETE_MODEL = "sagemaker:DeleteModel";
	/** [Write] sagemaker:DeleteModelBiasJobDefinition */
	static readonly DELETE_MODEL_BIAS_JOB_DEFINITION =
		"sagemaker:DeleteModelBiasJobDefinition";
	/** [Write] sagemaker:DeleteModelCard */
	static readonly DELETE_MODEL_CARD = "sagemaker:DeleteModelCard";
	/** [Write] sagemaker:DeleteModelExplainabilityJobDefinition */
	static readonly DELETE_MODEL_EXPLAINABILITY_JOB_DEFINITION =
		"sagemaker:DeleteModelExplainabilityJobDefinition";
	/** [Write] sagemaker:DeleteModelPackage */
	static readonly DELETE_MODEL_PACKAGE = "sagemaker:DeleteModelPackage";
	/** [Write] sagemaker:DeleteModelPackageGroup */
	static readonly DELETE_MODEL_PACKAGE_GROUP =
		"sagemaker:DeleteModelPackageGroup";
	/** [Write] sagemaker:DeleteModelPackageGroupPolicy */
	static readonly DELETE_MODEL_PACKAGE_GROUP_POLICY =
		"sagemaker:DeleteModelPackageGroupPolicy";
	/** [Write] sagemaker:DeleteModelQualityJobDefinition */
	static readonly DELETE_MODEL_QUALITY_JOB_DEFINITION =
		"sagemaker:DeleteModelQualityJobDefinition";
	/** [Write] sagemaker:DeleteMonitoringSchedule */
	static readonly DELETE_MONITORING_SCHEDULE =
		"sagemaker:DeleteMonitoringSchedule";
	/** [Write] sagemaker:DeleteNotebookInstance */
	static readonly DELETE_NOTEBOOK_INSTANCE = "sagemaker:DeleteNotebookInstance";
	/** [Write] sagemaker:DeleteNotebookInstanceLifecycleConfig */
	static readonly DELETE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG =
		"sagemaker:DeleteNotebookInstanceLifecycleConfig";
	/** [Write] sagemaker:DeleteOptimizationJob */
	static readonly DELETE_OPTIMIZATION_JOB = "sagemaker:DeleteOptimizationJob";
	/** [Write] sagemaker:DeletePartnerApp */
	static readonly DELETE_PARTNER_APP = "sagemaker:DeletePartnerApp";
	/** [Write] sagemaker:DeletePipeline */
	static readonly DELETE_PIPELINE = "sagemaker:DeletePipeline";
	/** [Write] sagemaker:DeleteProcessingJob */
	static readonly DELETE_PROCESSING_JOB = "sagemaker:DeleteProcessingJob";
	/** [Write] sagemaker:DeleteProject */
	static readonly DELETE_PROJECT = "sagemaker:DeleteProject";
	/** [Write] sagemaker:DeleteRecord */
	static readonly DELETE_RECORD = "sagemaker:DeleteRecord";
	/** [Write] sagemaker:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "sagemaker:DeleteResourcePolicy";
	/** [Write] sagemaker:DeleteSpace */
	static readonly DELETE_SPACE = "sagemaker:DeleteSpace";
	/** [Write] sagemaker:DeleteStudioLifecycleConfig */
	static readonly DELETE_STUDIO_LIFECYCLE_CONFIG =
		"sagemaker:DeleteStudioLifecycleConfig";
	/** [Tagging] sagemaker:DeleteTags */
	static readonly DELETE_TAGS = "sagemaker:DeleteTags";
	/** [Write] sagemaker:DeleteTrainingJob */
	static readonly DELETE_TRAINING_JOB = "sagemaker:DeleteTrainingJob";
	/** [Write] sagemaker:DeleteTrial */
	static readonly DELETE_TRIAL = "sagemaker:DeleteTrial";
	/** [Write] sagemaker:DeleteTrialComponent */
	static readonly DELETE_TRIAL_COMPONENT = "sagemaker:DeleteTrialComponent";
	/** [Write] sagemaker:DeleteUserProfile */
	static readonly DELETE_USER_PROFILE = "sagemaker:DeleteUserProfile";
	/** [Write] sagemaker:DeleteWorkforce */
	static readonly DELETE_WORKFORCE = "sagemaker:DeleteWorkforce";
	/** [Write] sagemaker:DeleteWorkteam */
	static readonly DELETE_WORKTEAM = "sagemaker:DeleteWorkteam";
	/** [Write] sagemaker:DeployHubModel */
	static readonly DEPLOY_HUB_MODEL = "sagemaker:DeployHubModel";
	/** [Write] sagemaker:DeregisterDevices */
	static readonly DEREGISTER_DEVICES = "sagemaker:DeregisterDevices";
	/** [Read] sagemaker:DescribeAIBenchmarkJob */
	static readonly DESCRIBE_AI_BENCHMARK_JOB =
		"sagemaker:DescribeAIBenchmarkJob";
	/** [Read] sagemaker:DescribeAIRecommendationJob */
	static readonly DESCRIBE_AI_RECOMMENDATION_JOB =
		"sagemaker:DescribeAIRecommendationJob";
	/** [Read] sagemaker:DescribeAIWorkloadConfig */
	static readonly DESCRIBE_AI_WORKLOAD_CONFIG =
		"sagemaker:DescribeAIWorkloadConfig";
	/** [Read] sagemaker:DescribeAction */
	static readonly DESCRIBE_ACTION = "sagemaker:DescribeAction";
	/** [Read] sagemaker:DescribeAlgorithm */
	static readonly DESCRIBE_ALGORITHM = "sagemaker:DescribeAlgorithm";
	/** [Read] sagemaker:DescribeApp */
	static readonly DESCRIBE_APP = "sagemaker:DescribeApp";
	/** [Read] sagemaker:DescribeAppImageConfig */
	static readonly DESCRIBE_APP_IMAGE_CONFIG =
		"sagemaker:DescribeAppImageConfig";
	/** [Read] sagemaker:DescribeArtifact */
	static readonly DESCRIBE_ARTIFACT = "sagemaker:DescribeArtifact";
	/** [Read] sagemaker:DescribeAutoMLJob */
	static readonly DESCRIBE_AUTO_ML_JOB = "sagemaker:DescribeAutoMLJob";
	/** [Read] sagemaker:DescribeAutoMLJobV2 */
	static readonly DESCRIBE_AUTO_ML_JOB_V2 = "sagemaker:DescribeAutoMLJobV2";
	/** [Read] sagemaker:DescribeCluster */
	static readonly DESCRIBE_CLUSTER = "sagemaker:DescribeCluster";
	/** [Read] sagemaker:DescribeClusterEvent */
	static readonly DESCRIBE_CLUSTER_EVENT = "sagemaker:DescribeClusterEvent";
	/** [Read] sagemaker:DescribeClusterInference */
	static readonly DESCRIBE_CLUSTER_INFERENCE =
		"sagemaker:DescribeClusterInference";
	/** [Read] sagemaker:DescribeClusterNode */
	static readonly DESCRIBE_CLUSTER_NODE = "sagemaker:DescribeClusterNode";
	/** [Read] sagemaker:DescribeClusterSchedulerConfig */
	static readonly DESCRIBE_CLUSTER_SCHEDULER_CONFIG =
		"sagemaker:DescribeClusterSchedulerConfig";
	/** [Read] sagemaker:DescribeCodeRepository */
	static readonly DESCRIBE_CODE_REPOSITORY = "sagemaker:DescribeCodeRepository";
	/** [Read] sagemaker:DescribeCompilationJob */
	static readonly DESCRIBE_COMPILATION_JOB = "sagemaker:DescribeCompilationJob";
	/** [Read] sagemaker:DescribeComputeQuota */
	static readonly DESCRIBE_COMPUTE_QUOTA = "sagemaker:DescribeComputeQuota";
	/** [Read] sagemaker:DescribeContext */
	static readonly DESCRIBE_CONTEXT = "sagemaker:DescribeContext";
	/** [Read] sagemaker:DescribeDataQualityJobDefinition */
	static readonly DESCRIBE_DATA_QUALITY_JOB_DEFINITION =
		"sagemaker:DescribeDataQualityJobDefinition";
	/** [Read] sagemaker:DescribeDevice */
	static readonly DESCRIBE_DEVICE = "sagemaker:DescribeDevice";
	/** [Read] sagemaker:DescribeDeviceFleet */
	static readonly DESCRIBE_DEVICE_FLEET = "sagemaker:DescribeDeviceFleet";
	/** [Read] sagemaker:DescribeDomain */
	static readonly DESCRIBE_DOMAIN = "sagemaker:DescribeDomain";
	/** [Read] sagemaker:DescribeEdgeDeploymentPlan */
	static readonly DESCRIBE_EDGE_DEPLOYMENT_PLAN =
		"sagemaker:DescribeEdgeDeploymentPlan";
	/** [Read] sagemaker:DescribeEdgePackagingJob */
	static readonly DESCRIBE_EDGE_PACKAGING_JOB =
		"sagemaker:DescribeEdgePackagingJob";
	/** [Read] sagemaker:DescribeEndpoint */
	static readonly DESCRIBE_ENDPOINT = "sagemaker:DescribeEndpoint";
	/** [Read] sagemaker:DescribeEndpointConfig */
	static readonly DESCRIBE_ENDPOINT_CONFIG = "sagemaker:DescribeEndpointConfig";
	/** [Read] sagemaker:DescribeExperiment */
	static readonly DESCRIBE_EXPERIMENT = "sagemaker:DescribeExperiment";
	/** [Read] sagemaker:DescribeFeatureGroup */
	static readonly DESCRIBE_FEATURE_GROUP = "sagemaker:DescribeFeatureGroup";
	/** [Read] sagemaker:DescribeFeatureMetadata */
	static readonly DESCRIBE_FEATURE_METADATA =
		"sagemaker:DescribeFeatureMetadata";
	/** [Read] sagemaker:DescribeFlowDefinition */
	static readonly DESCRIBE_FLOW_DEFINITION = "sagemaker:DescribeFlowDefinition";
	/** [Read] sagemaker:DescribeHub */
	static readonly DESCRIBE_HUB = "sagemaker:DescribeHub";
	/** [Read] sagemaker:DescribeHubContent */
	static readonly DESCRIBE_HUB_CONTENT = "sagemaker:DescribeHubContent";
	/** [Read] sagemaker:DescribeHumanLoop */
	static readonly DESCRIBE_HUMAN_LOOP = "sagemaker:DescribeHumanLoop";
	/** [Read] sagemaker:DescribeHumanTaskUi */
	static readonly DESCRIBE_HUMAN_TASK_UI = "sagemaker:DescribeHumanTaskUi";
	/** [Read] sagemaker:DescribeHyperParameterTuningJob */
	static readonly DESCRIBE_HYPER_PARAMETER_TUNING_JOB =
		"sagemaker:DescribeHyperParameterTuningJob";
	/** [Read] sagemaker:DescribeImage */
	static readonly DESCRIBE_IMAGE = "sagemaker:DescribeImage";
	/** [Read] sagemaker:DescribeImageVersion */
	static readonly DESCRIBE_IMAGE_VERSION = "sagemaker:DescribeImageVersion";
	/** [Read] sagemaker:DescribeInferenceComponent */
	static readonly DESCRIBE_INFERENCE_COMPONENT =
		"sagemaker:DescribeInferenceComponent";
	/** [Read] sagemaker:DescribeInferenceExperiment */
	static readonly DESCRIBE_INFERENCE_EXPERIMENT =
		"sagemaker:DescribeInferenceExperiment";
	/** [Read] sagemaker:DescribeInferenceRecommendationsJob */
	static readonly DESCRIBE_INFERENCE_RECOMMENDATIONS_JOB =
		"sagemaker:DescribeInferenceRecommendationsJob";
	/** [Read] sagemaker:DescribeJob */
	static readonly DESCRIBE_JOB = "sagemaker:DescribeJob";
	/** [Read] sagemaker:DescribeJobSchemaVersion */
	static readonly DESCRIBE_JOB_SCHEMA_VERSION =
		"sagemaker:DescribeJobSchemaVersion";
	/** [Read] sagemaker:DescribeLabelingJob */
	static readonly DESCRIBE_LABELING_JOB = "sagemaker:DescribeLabelingJob";
	/** [Read] sagemaker:DescribeLineageGroup */
	static readonly DESCRIBE_LINEAGE_GROUP = "sagemaker:DescribeLineageGroup";
	/** [Read] sagemaker:DescribeMlflowApp */
	static readonly DESCRIBE_MLFLOW_APP = "sagemaker:DescribeMlflowApp";
	/** [Read] sagemaker:DescribeMlflowTrackingServer */
	static readonly DESCRIBE_MLFLOW_TRACKING_SERVER =
		"sagemaker:DescribeMlflowTrackingServer";
	/** [Read] sagemaker:DescribeModel */
	static readonly DESCRIBE_MODEL = "sagemaker:DescribeModel";
	/** [Read] sagemaker:DescribeModelBiasJobDefinition */
	static readonly DESCRIBE_MODEL_BIAS_JOB_DEFINITION =
		"sagemaker:DescribeModelBiasJobDefinition";
	/** [Read] sagemaker:DescribeModelCard */
	static readonly DESCRIBE_MODEL_CARD = "sagemaker:DescribeModelCard";
	/** [Read] sagemaker:DescribeModelCardExportJob */
	static readonly DESCRIBE_MODEL_CARD_EXPORT_JOB =
		"sagemaker:DescribeModelCardExportJob";
	/** [Read] sagemaker:DescribeModelExplainabilityJobDefinition */
	static readonly DESCRIBE_MODEL_EXPLAINABILITY_JOB_DEFINITION =
		"sagemaker:DescribeModelExplainabilityJobDefinition";
	/** [Read] sagemaker:DescribeModelPackage */
	static readonly DESCRIBE_MODEL_PACKAGE = "sagemaker:DescribeModelPackage";
	/** [Read] sagemaker:DescribeModelPackageGroup */
	static readonly DESCRIBE_MODEL_PACKAGE_GROUP =
		"sagemaker:DescribeModelPackageGroup";
	/** [Read] sagemaker:DescribeModelQualityJobDefinition */
	static readonly DESCRIBE_MODEL_QUALITY_JOB_DEFINITION =
		"sagemaker:DescribeModelQualityJobDefinition";
	/** [Read] sagemaker:DescribeMonitoringSchedule */
	static readonly DESCRIBE_MONITORING_SCHEDULE =
		"sagemaker:DescribeMonitoringSchedule";
	/** [Read] sagemaker:DescribeNotebookInstance */
	static readonly DESCRIBE_NOTEBOOK_INSTANCE =
		"sagemaker:DescribeNotebookInstance";
	/** [Read] sagemaker:DescribeNotebookInstanceLifecycleConfig */
	static readonly DESCRIBE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG =
		"sagemaker:DescribeNotebookInstanceLifecycleConfig";
	/** [Read] sagemaker:DescribeOptimizationJob */
	static readonly DESCRIBE_OPTIMIZATION_JOB =
		"sagemaker:DescribeOptimizationJob";
	/** [Read] sagemaker:DescribePartnerApp */
	static readonly DESCRIBE_PARTNER_APP = "sagemaker:DescribePartnerApp";
	/** [Read] sagemaker:DescribePipeline */
	static readonly DESCRIBE_PIPELINE = "sagemaker:DescribePipeline";
	/** [Read] sagemaker:DescribePipelineDefinitionForExecution */
	static readonly DESCRIBE_PIPELINE_DEFINITION_FOR_EXECUTION =
		"sagemaker:DescribePipelineDefinitionForExecution";
	/** [Read] sagemaker:DescribePipelineExecution */
	static readonly DESCRIBE_PIPELINE_EXECUTION =
		"sagemaker:DescribePipelineExecution";
	/** [Read] sagemaker:DescribeProcessingJob */
	static readonly DESCRIBE_PROCESSING_JOB = "sagemaker:DescribeProcessingJob";
	/** [Read] sagemaker:DescribeProject */
	static readonly DESCRIBE_PROJECT = "sagemaker:DescribeProject";
	/** [Read] sagemaker:DescribeReservedCapacity */
	static readonly DESCRIBE_RESERVED_CAPACITY =
		"sagemaker:DescribeReservedCapacity";
	/** [Read] sagemaker:DescribeSharedModel */
	static readonly DESCRIBE_SHARED_MODEL = "sagemaker:DescribeSharedModel";
	/** [Read] sagemaker:DescribeSpace */
	static readonly DESCRIBE_SPACE = "sagemaker:DescribeSpace";
	/** [Read] sagemaker:DescribeStudioLifecycleConfig */
	static readonly DESCRIBE_STUDIO_LIFECYCLE_CONFIG =
		"sagemaker:DescribeStudioLifecycleConfig";
	/** [Read] sagemaker:DescribeSubscribedWorkteam */
	static readonly DESCRIBE_SUBSCRIBED_WORKTEAM =
		"sagemaker:DescribeSubscribedWorkteam";
	/** [Read] sagemaker:DescribeTrainingJob */
	static readonly DESCRIBE_TRAINING_JOB = "sagemaker:DescribeTrainingJob";
	/** [Read] sagemaker:DescribeTrainingPlan */
	static readonly DESCRIBE_TRAINING_PLAN = "sagemaker:DescribeTrainingPlan";
	/** [Read] sagemaker:DescribeTransformJob */
	static readonly DESCRIBE_TRANSFORM_JOB = "sagemaker:DescribeTransformJob";
	/** [Read] sagemaker:DescribeTrial */
	static readonly DESCRIBE_TRIAL = "sagemaker:DescribeTrial";
	/** [Read] sagemaker:DescribeTrialComponent */
	static readonly DESCRIBE_TRIAL_COMPONENT = "sagemaker:DescribeTrialComponent";
	/** [Read] sagemaker:DescribeUserProfile */
	static readonly DESCRIBE_USER_PROFILE = "sagemaker:DescribeUserProfile";
	/** [Read] sagemaker:DescribeWorkforce */
	static readonly DESCRIBE_WORKFORCE = "sagemaker:DescribeWorkforce";
	/** [Read] sagemaker:DescribeWorkteam */
	static readonly DESCRIBE_WORKTEAM = "sagemaker:DescribeWorkteam";
	/** [Write] sagemaker:DetachClusterNodeVolume */
	static readonly DETACH_CLUSTER_NODE_VOLUME =
		"sagemaker:DetachClusterNodeVolume";
	/** [Write] sagemaker:DisableSagemakerServicecatalogPortfolio */
	static readonly DISABLE_SAGEMAKER_SERVICECATALOG_PORTFOLIO =
		"sagemaker:DisableSagemakerServicecatalogPortfolio";
	/** [Write] sagemaker:DisassociateTrialComponent */
	static readonly DISASSOCIATE_TRIAL_COMPONENT =
		"sagemaker:DisassociateTrialComponent";
	/** [Write] sagemaker:EnableSagemakerServicecatalogPortfolio */
	static readonly ENABLE_SAGEMAKER_SERVICECATALOG_PORTFOLIO =
		"sagemaker:EnableSagemakerServicecatalogPortfolio";
	/** [Read] sagemaker:GetDeployments */
	static readonly GET_DEPLOYMENTS = "sagemaker:GetDeployments";
	/** [Read] sagemaker:GetDeviceFleetReport */
	static readonly GET_DEVICE_FLEET_REPORT = "sagemaker:GetDeviceFleetReport";
	/** [Read] sagemaker:GetDeviceRegistration */
	static readonly GET_DEVICE_REGISTRATION = "sagemaker:GetDeviceRegistration";
	/** [Read] sagemaker:GetLineageGroupPolicy */
	static readonly GET_LINEAGE_GROUP_POLICY = "sagemaker:GetLineageGroupPolicy";
	/** [Read] sagemaker:GetModelPackageGroupPolicy */
	static readonly GET_MODEL_PACKAGE_GROUP_POLICY =
		"sagemaker:GetModelPackageGroupPolicy";
	/** [Read] sagemaker:GetRecord */
	static readonly GET_RECORD = "sagemaker:GetRecord";
	/** [Read] sagemaker:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "sagemaker:GetResourcePolicy";
	/** [Read] sagemaker:GetSagemakerServicecatalogPortfolioStatus */
	static readonly GET_SAGEMAKER_SERVICECATALOG_PORTFOLIO_STATUS =
		"sagemaker:GetSagemakerServicecatalogPortfolioStatus";
	/** [Read] sagemaker:GetScalingConfigurationRecommendation */
	static readonly GET_SCALING_CONFIGURATION_RECOMMENDATION =
		"sagemaker:GetScalingConfigurationRecommendation";
	/** [Read] sagemaker:GetSearchSuggestions */
	static readonly GET_SEARCH_SUGGESTIONS = "sagemaker:GetSearchSuggestions";
	/** [Write] sagemaker:ImportHubContent */
	static readonly IMPORT_HUB_CONTENT = "sagemaker:ImportHubContent";
	/** [Read] sagemaker:InvokeEndpoint */
	static readonly INVOKE_ENDPOINT = "sagemaker:InvokeEndpoint";
	/** [Read] sagemaker:InvokeEndpointAsync */
	static readonly INVOKE_ENDPOINT_ASYNC = "sagemaker:InvokeEndpointAsync";
	/** [Read] sagemaker:InvokeEndpointWithResponseStream */
	static readonly INVOKE_ENDPOINT_WITH_RESPONSE_STREAM =
		"sagemaker:InvokeEndpointWithResponseStream";
	/** [List] sagemaker:ListAIBenchmarkJobs */
	static readonly LIST_AI_BENCHMARK_JOBS = "sagemaker:ListAIBenchmarkJobs";
	/** [List] sagemaker:ListAIRecommendationJobs */
	static readonly LIST_AI_RECOMMENDATION_JOBS =
		"sagemaker:ListAIRecommendationJobs";
	/** [List] sagemaker:ListAIWorkloadConfigs */
	static readonly LIST_AI_WORKLOAD_CONFIGS = "sagemaker:ListAIWorkloadConfigs";
	/** [List] sagemaker:ListActions */
	static readonly LIST_ACTIONS = "sagemaker:ListActions";
	/** [List] sagemaker:ListAlgorithms */
	static readonly LIST_ALGORITHMS = "sagemaker:ListAlgorithms";
	/** [List] sagemaker:ListAliases */
	static readonly LIST_ALIASES = "sagemaker:ListAliases";
	/** [List] sagemaker:ListAppImageConfigs */
	static readonly LIST_APP_IMAGE_CONFIGS = "sagemaker:ListAppImageConfigs";
	/** [List] sagemaker:ListApps */
	static readonly LIST_APPS = "sagemaker:ListApps";
	/** [List] sagemaker:ListArtifacts */
	static readonly LIST_ARTIFACTS = "sagemaker:ListArtifacts";
	/** [List] sagemaker:ListAssociations */
	static readonly LIST_ASSOCIATIONS = "sagemaker:ListAssociations";
	/** [List] sagemaker:ListAutoMLJobs */
	static readonly LIST_AUTO_ML_JOBS = "sagemaker:ListAutoMLJobs";
	/** [List] sagemaker:ListCandidatesForAutoMLJob */
	static readonly LIST_CANDIDATES_FOR_AUTO_ML_JOB =
		"sagemaker:ListCandidatesForAutoMLJob";
	/** [List] sagemaker:ListClusterEvents */
	static readonly LIST_CLUSTER_EVENTS = "sagemaker:ListClusterEvents";
	/** [List] sagemaker:ListClusterNodes */
	static readonly LIST_CLUSTER_NODES = "sagemaker:ListClusterNodes";
	/** [List] sagemaker:ListClusterSchedulerConfigs */
	static readonly LIST_CLUSTER_SCHEDULER_CONFIGS =
		"sagemaker:ListClusterSchedulerConfigs";
	/** [List] sagemaker:ListClusters */
	static readonly LIST_CLUSTERS = "sagemaker:ListClusters";
	/** [List] sagemaker:ListCodeRepositories */
	static readonly LIST_CODE_REPOSITORIES = "sagemaker:ListCodeRepositories";
	/** [List] sagemaker:ListCompilationJobs */
	static readonly LIST_COMPILATION_JOBS = "sagemaker:ListCompilationJobs";
	/** [List] sagemaker:ListComputeQuotas */
	static readonly LIST_COMPUTE_QUOTAS = "sagemaker:ListComputeQuotas";
	/** [List] sagemaker:ListContexts */
	static readonly LIST_CONTEXTS = "sagemaker:ListContexts";
	/** [List] sagemaker:ListDataQualityJobDefinitions */
	static readonly LIST_DATA_QUALITY_JOB_DEFINITIONS =
		"sagemaker:ListDataQualityJobDefinitions";
	/** [List] sagemaker:ListDeviceFleets */
	static readonly LIST_DEVICE_FLEETS = "sagemaker:ListDeviceFleets";
	/** [List] sagemaker:ListDevices */
	static readonly LIST_DEVICES = "sagemaker:ListDevices";
	/** [List] sagemaker:ListDomains */
	static readonly LIST_DOMAINS = "sagemaker:ListDomains";
	/** [List] sagemaker:ListEdgeDeploymentPlans */
	static readonly LIST_EDGE_DEPLOYMENT_PLANS =
		"sagemaker:ListEdgeDeploymentPlans";
	/** [List] sagemaker:ListEdgePackagingJobs */
	static readonly LIST_EDGE_PACKAGING_JOBS = "sagemaker:ListEdgePackagingJobs";
	/** [List] sagemaker:ListEndpointConfigs */
	static readonly LIST_ENDPOINT_CONFIGS = "sagemaker:ListEndpointConfigs";
	/** [List] sagemaker:ListEndpoints */
	static readonly LIST_ENDPOINTS = "sagemaker:ListEndpoints";
	/** [List] sagemaker:ListExperiments */
	static readonly LIST_EXPERIMENTS = "sagemaker:ListExperiments";
	/** [List] sagemaker:ListFeatureGroups */
	static readonly LIST_FEATURE_GROUPS = "sagemaker:ListFeatureGroups";
	/** [List] sagemaker:ListFlowDefinitions */
	static readonly LIST_FLOW_DEFINITIONS = "sagemaker:ListFlowDefinitions";
	/** [List] sagemaker:ListHubContentVersions */
	static readonly LIST_HUB_CONTENT_VERSIONS =
		"sagemaker:ListHubContentVersions";
	/** [List] sagemaker:ListHubContents */
	static readonly LIST_HUB_CONTENTS = "sagemaker:ListHubContents";
	/** [List] sagemaker:ListHubs */
	static readonly LIST_HUBS = "sagemaker:ListHubs";
	/** [List] sagemaker:ListHumanLoops */
	static readonly LIST_HUMAN_LOOPS = "sagemaker:ListHumanLoops";
	/** [List] sagemaker:ListHumanTaskUis */
	static readonly LIST_HUMAN_TASK_UIS = "sagemaker:ListHumanTaskUis";
	/** [List] sagemaker:ListHyperParameterTuningJobs */
	static readonly LIST_HYPER_PARAMETER_TUNING_JOBS =
		"sagemaker:ListHyperParameterTuningJobs";
	/** [List] sagemaker:ListImageVersions */
	static readonly LIST_IMAGE_VERSIONS = "sagemaker:ListImageVersions";
	/** [List] sagemaker:ListImages */
	static readonly LIST_IMAGES = "sagemaker:ListImages";
	/** [List] sagemaker:ListInferenceComponents */
	static readonly LIST_INFERENCE_COMPONENTS =
		"sagemaker:ListInferenceComponents";
	/** [List] sagemaker:ListInferenceExperiments */
	static readonly LIST_INFERENCE_EXPERIMENTS =
		"sagemaker:ListInferenceExperiments";
	/** [List] sagemaker:ListInferenceRecommendationsJobSteps */
	static readonly LIST_INFERENCE_RECOMMENDATIONS_JOB_STEPS =
		"sagemaker:ListInferenceRecommendationsJobSteps";
	/** [List] sagemaker:ListInferenceRecommendationsJobs */
	static readonly LIST_INFERENCE_RECOMMENDATIONS_JOBS =
		"sagemaker:ListInferenceRecommendationsJobs";
	/** [List] sagemaker:ListJobSchemaVersions */
	static readonly LIST_JOB_SCHEMA_VERSIONS = "sagemaker:ListJobSchemaVersions";
	/** [List] sagemaker:ListJobs */
	static readonly LIST_JOBS = "sagemaker:ListJobs";
	/** [List] sagemaker:ListLabelingJobs */
	static readonly LIST_LABELING_JOBS = "sagemaker:ListLabelingJobs";
	/** [List] sagemaker:ListLabelingJobsForWorkteam */
	static readonly LIST_LABELING_JOBS_FOR_WORKTEAM =
		"sagemaker:ListLabelingJobsForWorkteam";
	/** [List] sagemaker:ListLineageGroups */
	static readonly LIST_LINEAGE_GROUPS = "sagemaker:ListLineageGroups";
	/** [List] sagemaker:ListMlflowApps */
	static readonly LIST_MLFLOW_APPS = "sagemaker:ListMlflowApps";
	/** [List] sagemaker:ListMlflowTrackingServers */
	static readonly LIST_MLFLOW_TRACKING_SERVERS =
		"sagemaker:ListMlflowTrackingServers";
	/** [List] sagemaker:ListModelBiasJobDefinitions */
	static readonly LIST_MODEL_BIAS_JOB_DEFINITIONS =
		"sagemaker:ListModelBiasJobDefinitions";
	/** [List] sagemaker:ListModelCardExportJobs */
	static readonly LIST_MODEL_CARD_EXPORT_JOBS =
		"sagemaker:ListModelCardExportJobs";
	/** [List] sagemaker:ListModelCardVersions */
	static readonly LIST_MODEL_CARD_VERSIONS = "sagemaker:ListModelCardVersions";
	/** [List] sagemaker:ListModelCards */
	static readonly LIST_MODEL_CARDS = "sagemaker:ListModelCards";
	/** [List] sagemaker:ListModelExplainabilityJobDefinitions */
	static readonly LIST_MODEL_EXPLAINABILITY_JOB_DEFINITIONS =
		"sagemaker:ListModelExplainabilityJobDefinitions";
	/** [List] sagemaker:ListModelMetadata */
	static readonly LIST_MODEL_METADATA = "sagemaker:ListModelMetadata";
	/** [List] sagemaker:ListModelPackageGroups */
	static readonly LIST_MODEL_PACKAGE_GROUPS =
		"sagemaker:ListModelPackageGroups";
	/** [List] sagemaker:ListModelPackages */
	static readonly LIST_MODEL_PACKAGES = "sagemaker:ListModelPackages";
	/** [List] sagemaker:ListModelQualityJobDefinitions */
	static readonly LIST_MODEL_QUALITY_JOB_DEFINITIONS =
		"sagemaker:ListModelQualityJobDefinitions";
	/** [List] sagemaker:ListModels */
	static readonly LIST_MODELS = "sagemaker:ListModels";
	/** [List] sagemaker:ListMonitoringAlertHistory */
	static readonly LIST_MONITORING_ALERT_HISTORY =
		"sagemaker:ListMonitoringAlertHistory";
	/** [List] sagemaker:ListMonitoringAlerts */
	static readonly LIST_MONITORING_ALERTS = "sagemaker:ListMonitoringAlerts";
	/** [List] sagemaker:ListMonitoringExecutions */
	static readonly LIST_MONITORING_EXECUTIONS =
		"sagemaker:ListMonitoringExecutions";
	/** [List] sagemaker:ListMonitoringSchedules */
	static readonly LIST_MONITORING_SCHEDULES =
		"sagemaker:ListMonitoringSchedules";
	/** [List] sagemaker:ListNotebookInstanceLifecycleConfigs */
	static readonly LIST_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIGS =
		"sagemaker:ListNotebookInstanceLifecycleConfigs";
	/** [List] sagemaker:ListNotebookInstances */
	static readonly LIST_NOTEBOOK_INSTANCES = "sagemaker:ListNotebookInstances";
	/** [List] sagemaker:ListOptimizationJobs */
	static readonly LIST_OPTIMIZATION_JOBS = "sagemaker:ListOptimizationJobs";
	/** [List] sagemaker:ListPartnerApps */
	static readonly LIST_PARTNER_APPS = "sagemaker:ListPartnerApps";
	/** [List] sagemaker:ListPipelineExecutionSteps */
	static readonly LIST_PIPELINE_EXECUTION_STEPS =
		"sagemaker:ListPipelineExecutionSteps";
	/** [List] sagemaker:ListPipelineExecutions */
	static readonly LIST_PIPELINE_EXECUTIONS = "sagemaker:ListPipelineExecutions";
	/** [List] sagemaker:ListPipelineParametersForExecution */
	static readonly LIST_PIPELINE_PARAMETERS_FOR_EXECUTION =
		"sagemaker:ListPipelineParametersForExecution";
	/** [List] sagemaker:ListPipelineVersions */
	static readonly LIST_PIPELINE_VERSIONS = "sagemaker:ListPipelineVersions";
	/** [List] sagemaker:ListPipelines */
	static readonly LIST_PIPELINES = "sagemaker:ListPipelines";
	/** [List] sagemaker:ListProcessingJobs */
	static readonly LIST_PROCESSING_JOBS = "sagemaker:ListProcessingJobs";
	/** [List] sagemaker:ListProjects */
	static readonly LIST_PROJECTS = "sagemaker:ListProjects";
	/** [List] sagemaker:ListRecords */
	static readonly LIST_RECORDS = "sagemaker:ListRecords";
	/** [List] sagemaker:ListResourceCatalogs */
	static readonly LIST_RESOURCE_CATALOGS = "sagemaker:ListResourceCatalogs";
	/** [List] sagemaker:ListSharedModelEvents */
	static readonly LIST_SHARED_MODEL_EVENTS = "sagemaker:ListSharedModelEvents";
	/** [List] sagemaker:ListSharedModelVersions */
	static readonly LIST_SHARED_MODEL_VERSIONS =
		"sagemaker:ListSharedModelVersions";
	/** [List] sagemaker:ListSharedModels */
	static readonly LIST_SHARED_MODELS = "sagemaker:ListSharedModels";
	/** [List] sagemaker:ListSpaces */
	static readonly LIST_SPACES = "sagemaker:ListSpaces";
	/** [List] sagemaker:ListStageDevices */
	static readonly LIST_STAGE_DEVICES = "sagemaker:ListStageDevices";
	/** [List] sagemaker:ListStudioLifecycleConfigs */
	static readonly LIST_STUDIO_LIFECYCLE_CONFIGS =
		"sagemaker:ListStudioLifecycleConfigs";
	/** [List] sagemaker:ListSubscribedWorkteams */
	static readonly LIST_SUBSCRIBED_WORKTEAMS =
		"sagemaker:ListSubscribedWorkteams";
	/** [List] sagemaker:ListTags */
	static readonly LIST_TAGS = "sagemaker:ListTags";
	/** [List] sagemaker:ListTrainingJobs */
	static readonly LIST_TRAINING_JOBS = "sagemaker:ListTrainingJobs";
	/** [List] sagemaker:ListTrainingJobsForHyperParameterTuningJob */
	static readonly LIST_TRAINING_JOBS_FOR_HYPER_PARAMETER_TUNING_JOB =
		"sagemaker:ListTrainingJobsForHyperParameterTuningJob";
	/** [List] sagemaker:ListTrainingPlans */
	static readonly LIST_TRAINING_PLANS = "sagemaker:ListTrainingPlans";
	/** [List] sagemaker:ListTransformJobs */
	static readonly LIST_TRANSFORM_JOBS = "sagemaker:ListTransformJobs";
	/** [List] sagemaker:ListTrialComponents */
	static readonly LIST_TRIAL_COMPONENTS = "sagemaker:ListTrialComponents";
	/** [List] sagemaker:ListTrials */
	static readonly LIST_TRIALS = "sagemaker:ListTrials";
	/** [List] sagemaker:ListUltraServersByReservedCapacity */
	static readonly LIST_ULTRA_SERVERS_BY_RESERVED_CAPACITY =
		"sagemaker:ListUltraServersByReservedCapacity";
	/** [List] sagemaker:ListUserProfiles */
	static readonly LIST_USER_PROFILES = "sagemaker:ListUserProfiles";
	/** [List] sagemaker:ListWorkforces */
	static readonly LIST_WORKFORCES = "sagemaker:ListWorkforces";
	/** [List] sagemaker:ListWorkteams */
	static readonly LIST_WORKTEAMS = "sagemaker:ListWorkteams";
	/** [Write] sagemaker:PutLineageGroupPolicy */
	static readonly PUT_LINEAGE_GROUP_POLICY = "sagemaker:PutLineageGroupPolicy";
	/** [Write] sagemaker:PutModelPackageGroupPolicy */
	static readonly PUT_MODEL_PACKAGE_GROUP_POLICY =
		"sagemaker:PutModelPackageGroupPolicy";
	/** [Write] sagemaker:PutRecord */
	static readonly PUT_RECORD = "sagemaker:PutRecord";
	/** [Write] sagemaker:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "sagemaker:PutResourcePolicy";
	/** [List] sagemaker:QueryLineage */
	static readonly QUERY_LINEAGE = "sagemaker:QueryLineage";
	/** [Write] sagemaker:RegisterDevices */
	static readonly REGISTER_DEVICES = "sagemaker:RegisterDevices";
	/** [Read] sagemaker:RenderUiTemplate */
	static readonly RENDER_UI_TEMPLATE = "sagemaker:RenderUiTemplate";
	/** [Write] sagemaker:RetryPipelineExecution */
	static readonly RETRY_PIPELINE_EXECUTION = "sagemaker:RetryPipelineExecution";
	/** [Write] sagemaker:Sample */
	static readonly SAMPLE = "sagemaker:Sample";
	/** [Write] sagemaker:SampleWithResponseStream */
	static readonly SAMPLE_WITH_RESPONSE_STREAM =
		"sagemaker:SampleWithResponseStream";
	/** [Read] sagemaker:Search */
	static readonly SEARCH = "sagemaker:Search";
	/** [Read] sagemaker:SearchTrainingPlanOfferings */
	static readonly SEARCH_TRAINING_PLAN_OFFERINGS =
		"sagemaker:SearchTrainingPlanOfferings";
	/** [Write] sagemaker:SendHeartbeat */
	static readonly SEND_HEARTBEAT = "sagemaker:SendHeartbeat";
	/** [Write] sagemaker:SendPipelineExecutionStepFailure */
	static readonly SEND_PIPELINE_EXECUTION_STEP_FAILURE =
		"sagemaker:SendPipelineExecutionStepFailure";
	/** [Write] sagemaker:SendPipelineExecutionStepSuccess */
	static readonly SEND_PIPELINE_EXECUTION_STEP_SUCCESS =
		"sagemaker:SendPipelineExecutionStepSuccess";
	/** [Write] sagemaker:SendSharedModelEvent */
	static readonly SEND_SHARED_MODEL_EVENT = "sagemaker:SendSharedModelEvent";
	/** [Write] sagemaker:StartClusterHealthCheck */
	static readonly START_CLUSTER_HEALTH_CHECK =
		"sagemaker:StartClusterHealthCheck";
	/** [Write] sagemaker:StartEdgeDeploymentStage */
	static readonly START_EDGE_DEPLOYMENT_STAGE =
		"sagemaker:StartEdgeDeploymentStage";
	/** [Write] sagemaker:StartHumanLoop */
	static readonly START_HUMAN_LOOP = "sagemaker:StartHumanLoop";
	/** [Write] sagemaker:StartInferenceExperiment */
	static readonly START_INFERENCE_EXPERIMENT =
		"sagemaker:StartInferenceExperiment";
	/** [Write] sagemaker:StartMlflowTrackingServer */
	static readonly START_MLFLOW_TRACKING_SERVER =
		"sagemaker:StartMlflowTrackingServer";
	/** [Write] sagemaker:StartMonitoringSchedule */
	static readonly START_MONITORING_SCHEDULE =
		"sagemaker:StartMonitoringSchedule";
	/** [Write] sagemaker:StartNotebookInstance */
	static readonly START_NOTEBOOK_INSTANCE = "sagemaker:StartNotebookInstance";
	/** [Write] sagemaker:StartPipelineExecution */
	static readonly START_PIPELINE_EXECUTION = "sagemaker:StartPipelineExecution";
	/** [Write] sagemaker:StartSession */
	static readonly START_SESSION = "sagemaker:StartSession";
	/** [Write] sagemaker:StopAIBenchmarkJob */
	static readonly STOP_AI_BENCHMARK_JOB = "sagemaker:StopAIBenchmarkJob";
	/** [Write] sagemaker:StopAIRecommendationJob */
	static readonly STOP_AI_RECOMMENDATION_JOB =
		"sagemaker:StopAIRecommendationJob";
	/** [Write] sagemaker:StopAutoMLJob */
	static readonly STOP_AUTO_ML_JOB = "sagemaker:StopAutoMLJob";
	/** [Write] sagemaker:StopCompilationJob */
	static readonly STOP_COMPILATION_JOB = "sagemaker:StopCompilationJob";
	/** [Write] sagemaker:StopEdgeDeploymentStage */
	static readonly STOP_EDGE_DEPLOYMENT_STAGE =
		"sagemaker:StopEdgeDeploymentStage";
	/** [Write] sagemaker:StopEdgePackagingJob */
	static readonly STOP_EDGE_PACKAGING_JOB = "sagemaker:StopEdgePackagingJob";
	/** [Write] sagemaker:StopHumanLoop */
	static readonly STOP_HUMAN_LOOP = "sagemaker:StopHumanLoop";
	/** [Write] sagemaker:StopHyperParameterTuningJob */
	static readonly STOP_HYPER_PARAMETER_TUNING_JOB =
		"sagemaker:StopHyperParameterTuningJob";
	/** [Write] sagemaker:StopInferenceExperiment */
	static readonly STOP_INFERENCE_EXPERIMENT =
		"sagemaker:StopInferenceExperiment";
	/** [Write] sagemaker:StopInferenceRecommendationsJob */
	static readonly STOP_INFERENCE_RECOMMENDATIONS_JOB =
		"sagemaker:StopInferenceRecommendationsJob";
	/** [Write] sagemaker:StopJob */
	static readonly STOP_JOB = "sagemaker:StopJob";
	/** [Write] sagemaker:StopLabelingJob */
	static readonly STOP_LABELING_JOB = "sagemaker:StopLabelingJob";
	/** [Write] sagemaker:StopMlflowTrackingServer */
	static readonly STOP_MLFLOW_TRACKING_SERVER =
		"sagemaker:StopMlflowTrackingServer";
	/** [Write] sagemaker:StopMonitoringSchedule */
	static readonly STOP_MONITORING_SCHEDULE = "sagemaker:StopMonitoringSchedule";
	/** [Write] sagemaker:StopNotebookInstance */
	static readonly STOP_NOTEBOOK_INSTANCE = "sagemaker:StopNotebookInstance";
	/** [Write] sagemaker:StopOptimizationJob */
	static readonly STOP_OPTIMIZATION_JOB = "sagemaker:StopOptimizationJob";
	/** [Write] sagemaker:StopPipelineExecution */
	static readonly STOP_PIPELINE_EXECUTION = "sagemaker:StopPipelineExecution";
	/** [Write] sagemaker:StopProcessingJob */
	static readonly STOP_PROCESSING_JOB = "sagemaker:StopProcessingJob";
	/** [Write] sagemaker:StopTrainingJob */
	static readonly STOP_TRAINING_JOB = "sagemaker:StopTrainingJob";
	/** [Write] sagemaker:StopTransformJob */
	static readonly STOP_TRANSFORM_JOB = "sagemaker:StopTransformJob";
	/** [Write] sagemaker:TrainHubModel */
	static readonly TRAIN_HUB_MODEL = "sagemaker:TrainHubModel";
	/** [Write] sagemaker:UpdateAction */
	static readonly UPDATE_ACTION = "sagemaker:UpdateAction";
	/** [Write] sagemaker:UpdateAppImageConfig */
	static readonly UPDATE_APP_IMAGE_CONFIG = "sagemaker:UpdateAppImageConfig";
	/** [Write] sagemaker:UpdateArtifact */
	static readonly UPDATE_ARTIFACT = "sagemaker:UpdateArtifact";
	/** [Write] sagemaker:UpdateCluster */
	static readonly UPDATE_CLUSTER = "sagemaker:UpdateCluster";
	/** [Write] sagemaker:UpdateClusterInference */
	static readonly UPDATE_CLUSTER_INFERENCE = "sagemaker:UpdateClusterInference";
	/** [Write] sagemaker:UpdateClusterSchedulerConfig */
	static readonly UPDATE_CLUSTER_SCHEDULER_CONFIG =
		"sagemaker:UpdateClusterSchedulerConfig";
	/** [Write] sagemaker:UpdateClusterSoftware */
	static readonly UPDATE_CLUSTER_SOFTWARE = "sagemaker:UpdateClusterSoftware";
	/** [Write] sagemaker:UpdateCodeRepository */
	static readonly UPDATE_CODE_REPOSITORY = "sagemaker:UpdateCodeRepository";
	/** [Write] sagemaker:UpdateComputeQuota */
	static readonly UPDATE_COMPUTE_QUOTA = "sagemaker:UpdateComputeQuota";
	/** [Write] sagemaker:UpdateContext */
	static readonly UPDATE_CONTEXT = "sagemaker:UpdateContext";
	/** [Write] sagemaker:UpdateDeviceFleet */
	static readonly UPDATE_DEVICE_FLEET = "sagemaker:UpdateDeviceFleet";
	/** [Write] sagemaker:UpdateDevices */
	static readonly UPDATE_DEVICES = "sagemaker:UpdateDevices";
	/** [Write] sagemaker:UpdateDomain */
	static readonly UPDATE_DOMAIN = "sagemaker:UpdateDomain";
	/** [Write] sagemaker:UpdateEndpoint */
	static readonly UPDATE_ENDPOINT = "sagemaker:UpdateEndpoint";
	/** [Write] sagemaker:UpdateEndpointWeightsAndCapacities */
	static readonly UPDATE_ENDPOINT_WEIGHTS_AND_CAPACITIES =
		"sagemaker:UpdateEndpointWeightsAndCapacities";
	/** [Write] sagemaker:UpdateExperiment */
	static readonly UPDATE_EXPERIMENT = "sagemaker:UpdateExperiment";
	/** [Write] sagemaker:UpdateFeatureGroup */
	static readonly UPDATE_FEATURE_GROUP = "sagemaker:UpdateFeatureGroup";
	/** [Write] sagemaker:UpdateFeatureMetadata */
	static readonly UPDATE_FEATURE_METADATA = "sagemaker:UpdateFeatureMetadata";
	/** [Write] sagemaker:UpdateHub */
	static readonly UPDATE_HUB = "sagemaker:UpdateHub";
	/** [Write] sagemaker:UpdateHubContent */
	static readonly UPDATE_HUB_CONTENT = "sagemaker:UpdateHubContent";
	/** [Write] sagemaker:UpdateHubContentReference */
	static readonly UPDATE_HUB_CONTENT_REFERENCE =
		"sagemaker:UpdateHubContentReference";
	/** [Write] sagemaker:UpdateImage */
	static readonly UPDATE_IMAGE = "sagemaker:UpdateImage";
	/** [Write] sagemaker:UpdateImageVersion */
	static readonly UPDATE_IMAGE_VERSION = "sagemaker:UpdateImageVersion";
	/** [Write] sagemaker:UpdateInferenceComponent */
	static readonly UPDATE_INFERENCE_COMPONENT =
		"sagemaker:UpdateInferenceComponent";
	/** [Write] sagemaker:UpdateInferenceComponentRuntimeConfig */
	static readonly UPDATE_INFERENCE_COMPONENT_RUNTIME_CONFIG =
		"sagemaker:UpdateInferenceComponentRuntimeConfig";
	/** [Write] sagemaker:UpdateInferenceExperiment */
	static readonly UPDATE_INFERENCE_EXPERIMENT =
		"sagemaker:UpdateInferenceExperiment";
	/** [Write] sagemaker:UpdateMlflowApp */
	static readonly UPDATE_MLFLOW_APP = "sagemaker:UpdateMlflowApp";
	/** [Write] sagemaker:UpdateMlflowTrackingServer */
	static readonly UPDATE_MLFLOW_TRACKING_SERVER =
		"sagemaker:UpdateMlflowTrackingServer";
	/** [Write] sagemaker:UpdateModelCard */
	static readonly UPDATE_MODEL_CARD = "sagemaker:UpdateModelCard";
	/** [Write] sagemaker:UpdateModelPackage */
	static readonly UPDATE_MODEL_PACKAGE = "sagemaker:UpdateModelPackage";
	/** [Write] sagemaker:UpdateMonitoringAlert */
	static readonly UPDATE_MONITORING_ALERT = "sagemaker:UpdateMonitoringAlert";
	/** [Write] sagemaker:UpdateMonitoringSchedule */
	static readonly UPDATE_MONITORING_SCHEDULE =
		"sagemaker:UpdateMonitoringSchedule";
	/** [Write] sagemaker:UpdateNotebookInstance */
	static readonly UPDATE_NOTEBOOK_INSTANCE = "sagemaker:UpdateNotebookInstance";
	/** [Write] sagemaker:UpdateNotebookInstanceLifecycleConfig */
	static readonly UPDATE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG =
		"sagemaker:UpdateNotebookInstanceLifecycleConfig";
	/** [Write] sagemaker:UpdatePartnerApp */
	static readonly UPDATE_PARTNER_APP = "sagemaker:UpdatePartnerApp";
	/** [Write] sagemaker:UpdatePipeline */
	static readonly UPDATE_PIPELINE = "sagemaker:UpdatePipeline";
	/** [Write] sagemaker:UpdatePipelineExecution */
	static readonly UPDATE_PIPELINE_EXECUTION =
		"sagemaker:UpdatePipelineExecution";
	/** [Write] sagemaker:UpdatePipelineVersion */
	static readonly UPDATE_PIPELINE_VERSION = "sagemaker:UpdatePipelineVersion";
	/** [Write] sagemaker:UpdateProject */
	static readonly UPDATE_PROJECT = "sagemaker:UpdateProject";
	/** [Write] sagemaker:UpdateReward */
	static readonly UPDATE_REWARD = "sagemaker:UpdateReward";
	/** [Write] sagemaker:UpdateSharedModel */
	static readonly UPDATE_SHARED_MODEL = "sagemaker:UpdateSharedModel";
	/** [Write] sagemaker:UpdateSpace */
	static readonly UPDATE_SPACE = "sagemaker:UpdateSpace";
	/** [Write] sagemaker:UpdateTrainingJob */
	static readonly UPDATE_TRAINING_JOB = "sagemaker:UpdateTrainingJob";
	/** [Write] sagemaker:UpdateTrial */
	static readonly UPDATE_TRIAL = "sagemaker:UpdateTrial";
	/** [Write] sagemaker:UpdateTrialComponent */
	static readonly UPDATE_TRIAL_COMPONENT = "sagemaker:UpdateTrialComponent";
	/** [Write] sagemaker:UpdateUserProfile */
	static readonly UPDATE_USER_PROFILE = "sagemaker:UpdateUserProfile";
	/** [Write] sagemaker:UpdateWorkforce */
	static readonly UPDATE_WORKFORCE = "sagemaker:UpdateWorkforce";
	/** [Write] sagemaker:UpdateWorkteam */
	static readonly UPDATE_WORKTEAM = "sagemaker:UpdateWorkteam";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SageMakerActions.ACCESS_MODEL_PACKAGE,
		SageMakerActions.BATCH_DESCRIBE_MODEL_PACKAGE,
		SageMakerActions.BATCH_GET_METRICS,
		SageMakerActions.BATCH_GET_RECORD,
		SageMakerActions.CALL_WITH_BEARER_TOKEN,
		SageMakerActions.CREATE_HUB_CONTENT_PRESIGNED_URLS,
		SageMakerActions.DESCRIBE_AI_BENCHMARK_JOB,
		SageMakerActions.DESCRIBE_AI_RECOMMENDATION_JOB,
		SageMakerActions.DESCRIBE_AI_WORKLOAD_CONFIG,
		SageMakerActions.DESCRIBE_ACTION,
		SageMakerActions.DESCRIBE_ALGORITHM,
		SageMakerActions.DESCRIBE_APP,
		SageMakerActions.DESCRIBE_APP_IMAGE_CONFIG,
		SageMakerActions.DESCRIBE_ARTIFACT,
		SageMakerActions.DESCRIBE_AUTO_ML_JOB,
		SageMakerActions.DESCRIBE_AUTO_ML_JOB_V2,
		SageMakerActions.DESCRIBE_CLUSTER,
		SageMakerActions.DESCRIBE_CLUSTER_EVENT,
		SageMakerActions.DESCRIBE_CLUSTER_INFERENCE,
		SageMakerActions.DESCRIBE_CLUSTER_NODE,
		SageMakerActions.DESCRIBE_CLUSTER_SCHEDULER_CONFIG,
		SageMakerActions.DESCRIBE_CODE_REPOSITORY,
		SageMakerActions.DESCRIBE_COMPILATION_JOB,
		SageMakerActions.DESCRIBE_COMPUTE_QUOTA,
		SageMakerActions.DESCRIBE_CONTEXT,
		SageMakerActions.DESCRIBE_DATA_QUALITY_JOB_DEFINITION,
		SageMakerActions.DESCRIBE_DEVICE,
		SageMakerActions.DESCRIBE_DEVICE_FLEET,
		SageMakerActions.DESCRIBE_DOMAIN,
		SageMakerActions.DESCRIBE_EDGE_DEPLOYMENT_PLAN,
		SageMakerActions.DESCRIBE_EDGE_PACKAGING_JOB,
		SageMakerActions.DESCRIBE_ENDPOINT,
		SageMakerActions.DESCRIBE_ENDPOINT_CONFIG,
		SageMakerActions.DESCRIBE_EXPERIMENT,
		SageMakerActions.DESCRIBE_FEATURE_GROUP,
		SageMakerActions.DESCRIBE_FEATURE_METADATA,
		SageMakerActions.DESCRIBE_FLOW_DEFINITION,
		SageMakerActions.DESCRIBE_HUB,
		SageMakerActions.DESCRIBE_HUB_CONTENT,
		SageMakerActions.DESCRIBE_HUMAN_LOOP,
		SageMakerActions.DESCRIBE_HUMAN_TASK_UI,
		SageMakerActions.DESCRIBE_HYPER_PARAMETER_TUNING_JOB,
		SageMakerActions.DESCRIBE_IMAGE,
		SageMakerActions.DESCRIBE_IMAGE_VERSION,
		SageMakerActions.DESCRIBE_INFERENCE_COMPONENT,
		SageMakerActions.DESCRIBE_INFERENCE_EXPERIMENT,
		SageMakerActions.DESCRIBE_INFERENCE_RECOMMENDATIONS_JOB,
		SageMakerActions.DESCRIBE_JOB,
		SageMakerActions.DESCRIBE_JOB_SCHEMA_VERSION,
		SageMakerActions.DESCRIBE_LABELING_JOB,
		SageMakerActions.DESCRIBE_LINEAGE_GROUP,
		SageMakerActions.DESCRIBE_MLFLOW_APP,
		SageMakerActions.DESCRIBE_MLFLOW_TRACKING_SERVER,
		SageMakerActions.DESCRIBE_MODEL,
		SageMakerActions.DESCRIBE_MODEL_BIAS_JOB_DEFINITION,
		SageMakerActions.DESCRIBE_MODEL_CARD,
		SageMakerActions.DESCRIBE_MODEL_CARD_EXPORT_JOB,
		SageMakerActions.DESCRIBE_MODEL_EXPLAINABILITY_JOB_DEFINITION,
		SageMakerActions.DESCRIBE_MODEL_PACKAGE,
		SageMakerActions.DESCRIBE_MODEL_PACKAGE_GROUP,
		SageMakerActions.DESCRIBE_MODEL_QUALITY_JOB_DEFINITION,
		SageMakerActions.DESCRIBE_MONITORING_SCHEDULE,
		SageMakerActions.DESCRIBE_NOTEBOOK_INSTANCE,
		SageMakerActions.DESCRIBE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG,
		SageMakerActions.DESCRIBE_OPTIMIZATION_JOB,
		SageMakerActions.DESCRIBE_PARTNER_APP,
		SageMakerActions.DESCRIBE_PIPELINE,
		SageMakerActions.DESCRIBE_PIPELINE_DEFINITION_FOR_EXECUTION,
		SageMakerActions.DESCRIBE_PIPELINE_EXECUTION,
		SageMakerActions.DESCRIBE_PROCESSING_JOB,
		SageMakerActions.DESCRIBE_PROJECT,
		SageMakerActions.DESCRIBE_RESERVED_CAPACITY,
		SageMakerActions.DESCRIBE_SHARED_MODEL,
		SageMakerActions.DESCRIBE_SPACE,
		SageMakerActions.DESCRIBE_STUDIO_LIFECYCLE_CONFIG,
		SageMakerActions.DESCRIBE_SUBSCRIBED_WORKTEAM,
		SageMakerActions.DESCRIBE_TRAINING_JOB,
		SageMakerActions.DESCRIBE_TRAINING_PLAN,
		SageMakerActions.DESCRIBE_TRANSFORM_JOB,
		SageMakerActions.DESCRIBE_TRIAL,
		SageMakerActions.DESCRIBE_TRIAL_COMPONENT,
		SageMakerActions.DESCRIBE_USER_PROFILE,
		SageMakerActions.DESCRIBE_WORKFORCE,
		SageMakerActions.DESCRIBE_WORKTEAM,
		SageMakerActions.GET_DEPLOYMENTS,
		SageMakerActions.GET_DEVICE_FLEET_REPORT,
		SageMakerActions.GET_DEVICE_REGISTRATION,
		SageMakerActions.GET_LINEAGE_GROUP_POLICY,
		SageMakerActions.GET_MODEL_PACKAGE_GROUP_POLICY,
		SageMakerActions.GET_RECORD,
		SageMakerActions.GET_RESOURCE_POLICY,
		SageMakerActions.GET_SAGEMAKER_SERVICECATALOG_PORTFOLIO_STATUS,
		SageMakerActions.GET_SCALING_CONFIGURATION_RECOMMENDATION,
		SageMakerActions.GET_SEARCH_SUGGESTIONS,
		SageMakerActions.INVOKE_ENDPOINT,
		SageMakerActions.INVOKE_ENDPOINT_ASYNC,
		SageMakerActions.INVOKE_ENDPOINT_WITH_RESPONSE_STREAM,
		SageMakerActions.RENDER_UI_TEMPLATE,
		SageMakerActions.SEARCH,
		SageMakerActions.SEARCH_TRAINING_PLAN_OFFERINGS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SageMakerActions.ADD_ASSOCIATION,
		SageMakerActions.ASSOCIATE_TRIAL_COMPONENT,
		SageMakerActions.ATTACH_CLUSTER_NODE_VOLUME,
		SageMakerActions.BATCH_ADD_CLUSTER_NODES,
		SageMakerActions.BATCH_DELETE_CLUSTER_NODES,
		SageMakerActions.BATCH_PUT_METRICS,
		SageMakerActions.BATCH_WRITE_RECORD,
		SageMakerActions.CALL_MLFLOW_APP_API,
		SageMakerActions.CALL_PARTNER_APP_API,
		SageMakerActions.COMPLETE_ROLLOUT,
		SageMakerActions.CREATE_AI_BENCHMARK_JOB,
		SageMakerActions.CREATE_AI_RECOMMENDATION_JOB,
		SageMakerActions.CREATE_AI_WORKLOAD_CONFIG,
		SageMakerActions.CREATE_ACTION,
		SageMakerActions.CREATE_ALGORITHM,
		SageMakerActions.CREATE_APP,
		SageMakerActions.CREATE_APP_IMAGE_CONFIG,
		SageMakerActions.CREATE_ARTIFACT,
		SageMakerActions.CREATE_AUTO_ML_JOB,
		SageMakerActions.CREATE_AUTO_ML_JOB_V2,
		SageMakerActions.CREATE_CLUSTER,
		SageMakerActions.CREATE_CLUSTER_SCHEDULER_CONFIG,
		SageMakerActions.CREATE_CODE_REPOSITORY,
		SageMakerActions.CREATE_COMPILATION_JOB,
		SageMakerActions.CREATE_COMPUTE_QUOTA,
		SageMakerActions.CREATE_CONTEXT,
		SageMakerActions.CREATE_DATA_QUALITY_JOB_DEFINITION,
		SageMakerActions.CREATE_DEVICE_FLEET,
		SageMakerActions.CREATE_DOMAIN,
		SageMakerActions.CREATE_EDGE_DEPLOYMENT_PLAN,
		SageMakerActions.CREATE_EDGE_DEPLOYMENT_STAGE,
		SageMakerActions.CREATE_EDGE_PACKAGING_JOB,
		SageMakerActions.CREATE_ENDPOINT,
		SageMakerActions.CREATE_ENDPOINT_CONFIG,
		SageMakerActions.CREATE_EXPERIMENT,
		SageMakerActions.CREATE_FEATURE_GROUP,
		SageMakerActions.CREATE_FLOW_DEFINITION,
		SageMakerActions.CREATE_HUB,
		SageMakerActions.CREATE_HUB_CONTENT_REFERENCE,
		SageMakerActions.CREATE_HUMAN_TASK_UI,
		SageMakerActions.CREATE_HYPER_PARAMETER_TUNING_JOB,
		SageMakerActions.CREATE_IMAGE,
		SageMakerActions.CREATE_IMAGE_VERSION,
		SageMakerActions.CREATE_INFERENCE_COMPONENT,
		SageMakerActions.CREATE_INFERENCE_EXPERIMENT,
		SageMakerActions.CREATE_INFERENCE_RECOMMENDATIONS_JOB,
		SageMakerActions.CREATE_JOB,
		SageMakerActions.CREATE_LABELING_JOB,
		SageMakerActions.CREATE_LINEAGE_GROUP_POLICY,
		SageMakerActions.CREATE_MLFLOW_APP,
		SageMakerActions.CREATE_MLFLOW_TRACKING_SERVER,
		SageMakerActions.CREATE_MODEL,
		SageMakerActions.CREATE_MODEL_BIAS_JOB_DEFINITION,
		SageMakerActions.CREATE_MODEL_CARD,
		SageMakerActions.CREATE_MODEL_CARD_EXPORT_JOB,
		SageMakerActions.CREATE_MODEL_EXPLAINABILITY_JOB_DEFINITION,
		SageMakerActions.CREATE_MODEL_PACKAGE,
		SageMakerActions.CREATE_MODEL_PACKAGE_GROUP,
		SageMakerActions.CREATE_MODEL_QUALITY_JOB_DEFINITION,
		SageMakerActions.CREATE_MONITORING_SCHEDULE,
		SageMakerActions.CREATE_NOTEBOOK_INSTANCE,
		SageMakerActions.CREATE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG,
		SageMakerActions.CREATE_OPTIMIZATION_JOB,
		SageMakerActions.CREATE_PARTNER_APP,
		SageMakerActions.CREATE_PARTNER_APP_PRESIGNED_URL,
		SageMakerActions.CREATE_PIPELINE,
		SageMakerActions.CREATE_PRESIGNED_DOMAIN_URL,
		SageMakerActions.CREATE_PRESIGNED_MLFLOW_APP_URL,
		SageMakerActions.CREATE_PRESIGNED_MLFLOW_TRACKING_SERVER_URL,
		SageMakerActions.CREATE_PRESIGNED_NOTEBOOK_INSTANCE_URL,
		SageMakerActions.CREATE_PROCESSING_JOB,
		SageMakerActions.CREATE_PROJECT,
		SageMakerActions.CREATE_RESERVED_CAPACITY,
		SageMakerActions.CREATE_SHARED_MODEL,
		SageMakerActions.CREATE_SPACE,
		SageMakerActions.CREATE_STUDIO_LIFECYCLE_CONFIG,
		SageMakerActions.CREATE_TRAINING_JOB,
		SageMakerActions.CREATE_TRAINING_PLAN,
		SageMakerActions.CREATE_TRANSFORM_JOB,
		SageMakerActions.CREATE_TRIAL,
		SageMakerActions.CREATE_TRIAL_COMPONENT,
		SageMakerActions.CREATE_USER_PROFILE,
		SageMakerActions.CREATE_WORKFORCE,
		SageMakerActions.CREATE_WORKTEAM,
		SageMakerActions.DELETE_AI_BENCHMARK_JOB,
		SageMakerActions.DELETE_AI_RECOMMENDATION_JOB,
		SageMakerActions.DELETE_AI_WORKLOAD_CONFIG,
		SageMakerActions.DELETE_ACTION,
		SageMakerActions.DELETE_ALGORITHM,
		SageMakerActions.DELETE_APP,
		SageMakerActions.DELETE_APP_IMAGE_CONFIG,
		SageMakerActions.DELETE_ARTIFACT,
		SageMakerActions.DELETE_ASSOCIATION,
		SageMakerActions.DELETE_CLUSTER,
		SageMakerActions.DELETE_CLUSTER_SCHEDULER_CONFIG,
		SageMakerActions.DELETE_CODE_REPOSITORY,
		SageMakerActions.DELETE_COMPILATION_JOB,
		SageMakerActions.DELETE_COMPUTE_QUOTA,
		SageMakerActions.DELETE_CONTEXT,
		SageMakerActions.DELETE_DATA_QUALITY_JOB_DEFINITION,
		SageMakerActions.DELETE_DEVICE_FLEET,
		SageMakerActions.DELETE_DOMAIN,
		SageMakerActions.DELETE_EDGE_DEPLOYMENT_PLAN,
		SageMakerActions.DELETE_EDGE_DEPLOYMENT_STAGE,
		SageMakerActions.DELETE_ENDPOINT,
		SageMakerActions.DELETE_ENDPOINT_CONFIG,
		SageMakerActions.DELETE_EXPERIMENT,
		SageMakerActions.DELETE_FEATURE_GROUP,
		SageMakerActions.DELETE_FLOW_DEFINITION,
		SageMakerActions.DELETE_HUB,
		SageMakerActions.DELETE_HUB_CONTENT,
		SageMakerActions.DELETE_HUB_CONTENT_REFERENCE,
		SageMakerActions.DELETE_HUMAN_LOOP,
		SageMakerActions.DELETE_HUMAN_TASK_UI,
		SageMakerActions.DELETE_HYPER_PARAMETER_TUNING_JOB,
		SageMakerActions.DELETE_IMAGE,
		SageMakerActions.DELETE_IMAGE_VERSION,
		SageMakerActions.DELETE_INFERENCE_COMPONENT,
		SageMakerActions.DELETE_INFERENCE_EXPERIMENT,
		SageMakerActions.DELETE_JOB,
		SageMakerActions.DELETE_LINEAGE_GROUP_POLICY,
		SageMakerActions.DELETE_MLFLOW_APP,
		SageMakerActions.DELETE_MLFLOW_TRACKING_SERVER,
		SageMakerActions.DELETE_MODEL,
		SageMakerActions.DELETE_MODEL_BIAS_JOB_DEFINITION,
		SageMakerActions.DELETE_MODEL_CARD,
		SageMakerActions.DELETE_MODEL_EXPLAINABILITY_JOB_DEFINITION,
		SageMakerActions.DELETE_MODEL_PACKAGE,
		SageMakerActions.DELETE_MODEL_PACKAGE_GROUP,
		SageMakerActions.DELETE_MODEL_PACKAGE_GROUP_POLICY,
		SageMakerActions.DELETE_MODEL_QUALITY_JOB_DEFINITION,
		SageMakerActions.DELETE_MONITORING_SCHEDULE,
		SageMakerActions.DELETE_NOTEBOOK_INSTANCE,
		SageMakerActions.DELETE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG,
		SageMakerActions.DELETE_OPTIMIZATION_JOB,
		SageMakerActions.DELETE_PARTNER_APP,
		SageMakerActions.DELETE_PIPELINE,
		SageMakerActions.DELETE_PROCESSING_JOB,
		SageMakerActions.DELETE_PROJECT,
		SageMakerActions.DELETE_RECORD,
		SageMakerActions.DELETE_RESOURCE_POLICY,
		SageMakerActions.DELETE_SPACE,
		SageMakerActions.DELETE_STUDIO_LIFECYCLE_CONFIG,
		SageMakerActions.DELETE_TRAINING_JOB,
		SageMakerActions.DELETE_TRIAL,
		SageMakerActions.DELETE_TRIAL_COMPONENT,
		SageMakerActions.DELETE_USER_PROFILE,
		SageMakerActions.DELETE_WORKFORCE,
		SageMakerActions.DELETE_WORKTEAM,
		SageMakerActions.DEPLOY_HUB_MODEL,
		SageMakerActions.DEREGISTER_DEVICES,
		SageMakerActions.DETACH_CLUSTER_NODE_VOLUME,
		SageMakerActions.DISABLE_SAGEMAKER_SERVICECATALOG_PORTFOLIO,
		SageMakerActions.DISASSOCIATE_TRIAL_COMPONENT,
		SageMakerActions.ENABLE_SAGEMAKER_SERVICECATALOG_PORTFOLIO,
		SageMakerActions.IMPORT_HUB_CONTENT,
		SageMakerActions.PUT_LINEAGE_GROUP_POLICY,
		SageMakerActions.PUT_MODEL_PACKAGE_GROUP_POLICY,
		SageMakerActions.PUT_RECORD,
		SageMakerActions.PUT_RESOURCE_POLICY,
		SageMakerActions.REGISTER_DEVICES,
		SageMakerActions.RETRY_PIPELINE_EXECUTION,
		SageMakerActions.SAMPLE,
		SageMakerActions.SAMPLE_WITH_RESPONSE_STREAM,
		SageMakerActions.SEND_HEARTBEAT,
		SageMakerActions.SEND_PIPELINE_EXECUTION_STEP_FAILURE,
		SageMakerActions.SEND_PIPELINE_EXECUTION_STEP_SUCCESS,
		SageMakerActions.SEND_SHARED_MODEL_EVENT,
		SageMakerActions.START_CLUSTER_HEALTH_CHECK,
		SageMakerActions.START_EDGE_DEPLOYMENT_STAGE,
		SageMakerActions.START_HUMAN_LOOP,
		SageMakerActions.START_INFERENCE_EXPERIMENT,
		SageMakerActions.START_MLFLOW_TRACKING_SERVER,
		SageMakerActions.START_MONITORING_SCHEDULE,
		SageMakerActions.START_NOTEBOOK_INSTANCE,
		SageMakerActions.START_PIPELINE_EXECUTION,
		SageMakerActions.START_SESSION,
		SageMakerActions.STOP_AI_BENCHMARK_JOB,
		SageMakerActions.STOP_AI_RECOMMENDATION_JOB,
		SageMakerActions.STOP_AUTO_ML_JOB,
		SageMakerActions.STOP_COMPILATION_JOB,
		SageMakerActions.STOP_EDGE_DEPLOYMENT_STAGE,
		SageMakerActions.STOP_EDGE_PACKAGING_JOB,
		SageMakerActions.STOP_HUMAN_LOOP,
		SageMakerActions.STOP_HYPER_PARAMETER_TUNING_JOB,
		SageMakerActions.STOP_INFERENCE_EXPERIMENT,
		SageMakerActions.STOP_INFERENCE_RECOMMENDATIONS_JOB,
		SageMakerActions.STOP_JOB,
		SageMakerActions.STOP_LABELING_JOB,
		SageMakerActions.STOP_MLFLOW_TRACKING_SERVER,
		SageMakerActions.STOP_MONITORING_SCHEDULE,
		SageMakerActions.STOP_NOTEBOOK_INSTANCE,
		SageMakerActions.STOP_OPTIMIZATION_JOB,
		SageMakerActions.STOP_PIPELINE_EXECUTION,
		SageMakerActions.STOP_PROCESSING_JOB,
		SageMakerActions.STOP_TRAINING_JOB,
		SageMakerActions.STOP_TRANSFORM_JOB,
		SageMakerActions.TRAIN_HUB_MODEL,
		SageMakerActions.UPDATE_ACTION,
		SageMakerActions.UPDATE_APP_IMAGE_CONFIG,
		SageMakerActions.UPDATE_ARTIFACT,
		SageMakerActions.UPDATE_CLUSTER,
		SageMakerActions.UPDATE_CLUSTER_INFERENCE,
		SageMakerActions.UPDATE_CLUSTER_SCHEDULER_CONFIG,
		SageMakerActions.UPDATE_CLUSTER_SOFTWARE,
		SageMakerActions.UPDATE_CODE_REPOSITORY,
		SageMakerActions.UPDATE_COMPUTE_QUOTA,
		SageMakerActions.UPDATE_CONTEXT,
		SageMakerActions.UPDATE_DEVICE_FLEET,
		SageMakerActions.UPDATE_DEVICES,
		SageMakerActions.UPDATE_DOMAIN,
		SageMakerActions.UPDATE_ENDPOINT,
		SageMakerActions.UPDATE_ENDPOINT_WEIGHTS_AND_CAPACITIES,
		SageMakerActions.UPDATE_EXPERIMENT,
		SageMakerActions.UPDATE_FEATURE_GROUP,
		SageMakerActions.UPDATE_FEATURE_METADATA,
		SageMakerActions.UPDATE_HUB,
		SageMakerActions.UPDATE_HUB_CONTENT,
		SageMakerActions.UPDATE_HUB_CONTENT_REFERENCE,
		SageMakerActions.UPDATE_IMAGE,
		SageMakerActions.UPDATE_IMAGE_VERSION,
		SageMakerActions.UPDATE_INFERENCE_COMPONENT,
		SageMakerActions.UPDATE_INFERENCE_COMPONENT_RUNTIME_CONFIG,
		SageMakerActions.UPDATE_INFERENCE_EXPERIMENT,
		SageMakerActions.UPDATE_MLFLOW_APP,
		SageMakerActions.UPDATE_MLFLOW_TRACKING_SERVER,
		SageMakerActions.UPDATE_MODEL_CARD,
		SageMakerActions.UPDATE_MODEL_PACKAGE,
		SageMakerActions.UPDATE_MONITORING_ALERT,
		SageMakerActions.UPDATE_MONITORING_SCHEDULE,
		SageMakerActions.UPDATE_NOTEBOOK_INSTANCE,
		SageMakerActions.UPDATE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG,
		SageMakerActions.UPDATE_PARTNER_APP,
		SageMakerActions.UPDATE_PIPELINE,
		SageMakerActions.UPDATE_PIPELINE_EXECUTION,
		SageMakerActions.UPDATE_PIPELINE_VERSION,
		SageMakerActions.UPDATE_PROJECT,
		SageMakerActions.UPDATE_REWARD,
		SageMakerActions.UPDATE_SHARED_MODEL,
		SageMakerActions.UPDATE_SPACE,
		SageMakerActions.UPDATE_TRAINING_JOB,
		SageMakerActions.UPDATE_TRIAL,
		SageMakerActions.UPDATE_TRIAL_COMPONENT,
		SageMakerActions.UPDATE_USER_PROFILE,
		SageMakerActions.UPDATE_WORKFORCE,
		SageMakerActions.UPDATE_WORKTEAM,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SageMakerActions.LIST_AI_BENCHMARK_JOBS,
		SageMakerActions.LIST_AI_RECOMMENDATION_JOBS,
		SageMakerActions.LIST_AI_WORKLOAD_CONFIGS,
		SageMakerActions.LIST_ACTIONS,
		SageMakerActions.LIST_ALGORITHMS,
		SageMakerActions.LIST_ALIASES,
		SageMakerActions.LIST_APP_IMAGE_CONFIGS,
		SageMakerActions.LIST_APPS,
		SageMakerActions.LIST_ARTIFACTS,
		SageMakerActions.LIST_ASSOCIATIONS,
		SageMakerActions.LIST_AUTO_ML_JOBS,
		SageMakerActions.LIST_CANDIDATES_FOR_AUTO_ML_JOB,
		SageMakerActions.LIST_CLUSTER_EVENTS,
		SageMakerActions.LIST_CLUSTER_NODES,
		SageMakerActions.LIST_CLUSTER_SCHEDULER_CONFIGS,
		SageMakerActions.LIST_CLUSTERS,
		SageMakerActions.LIST_CODE_REPOSITORIES,
		SageMakerActions.LIST_COMPILATION_JOBS,
		SageMakerActions.LIST_COMPUTE_QUOTAS,
		SageMakerActions.LIST_CONTEXTS,
		SageMakerActions.LIST_DATA_QUALITY_JOB_DEFINITIONS,
		SageMakerActions.LIST_DEVICE_FLEETS,
		SageMakerActions.LIST_DEVICES,
		SageMakerActions.LIST_DOMAINS,
		SageMakerActions.LIST_EDGE_DEPLOYMENT_PLANS,
		SageMakerActions.LIST_EDGE_PACKAGING_JOBS,
		SageMakerActions.LIST_ENDPOINT_CONFIGS,
		SageMakerActions.LIST_ENDPOINTS,
		SageMakerActions.LIST_EXPERIMENTS,
		SageMakerActions.LIST_FEATURE_GROUPS,
		SageMakerActions.LIST_FLOW_DEFINITIONS,
		SageMakerActions.LIST_HUB_CONTENT_VERSIONS,
		SageMakerActions.LIST_HUB_CONTENTS,
		SageMakerActions.LIST_HUBS,
		SageMakerActions.LIST_HUMAN_LOOPS,
		SageMakerActions.LIST_HUMAN_TASK_UIS,
		SageMakerActions.LIST_HYPER_PARAMETER_TUNING_JOBS,
		SageMakerActions.LIST_IMAGE_VERSIONS,
		SageMakerActions.LIST_IMAGES,
		SageMakerActions.LIST_INFERENCE_COMPONENTS,
		SageMakerActions.LIST_INFERENCE_EXPERIMENTS,
		SageMakerActions.LIST_INFERENCE_RECOMMENDATIONS_JOB_STEPS,
		SageMakerActions.LIST_INFERENCE_RECOMMENDATIONS_JOBS,
		SageMakerActions.LIST_JOB_SCHEMA_VERSIONS,
		SageMakerActions.LIST_JOBS,
		SageMakerActions.LIST_LABELING_JOBS,
		SageMakerActions.LIST_LABELING_JOBS_FOR_WORKTEAM,
		SageMakerActions.LIST_LINEAGE_GROUPS,
		SageMakerActions.LIST_MLFLOW_APPS,
		SageMakerActions.LIST_MLFLOW_TRACKING_SERVERS,
		SageMakerActions.LIST_MODEL_BIAS_JOB_DEFINITIONS,
		SageMakerActions.LIST_MODEL_CARD_EXPORT_JOBS,
		SageMakerActions.LIST_MODEL_CARD_VERSIONS,
		SageMakerActions.LIST_MODEL_CARDS,
		SageMakerActions.LIST_MODEL_EXPLAINABILITY_JOB_DEFINITIONS,
		SageMakerActions.LIST_MODEL_METADATA,
		SageMakerActions.LIST_MODEL_PACKAGE_GROUPS,
		SageMakerActions.LIST_MODEL_PACKAGES,
		SageMakerActions.LIST_MODEL_QUALITY_JOB_DEFINITIONS,
		SageMakerActions.LIST_MODELS,
		SageMakerActions.LIST_MONITORING_ALERT_HISTORY,
		SageMakerActions.LIST_MONITORING_ALERTS,
		SageMakerActions.LIST_MONITORING_EXECUTIONS,
		SageMakerActions.LIST_MONITORING_SCHEDULES,
		SageMakerActions.LIST_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIGS,
		SageMakerActions.LIST_NOTEBOOK_INSTANCES,
		SageMakerActions.LIST_OPTIMIZATION_JOBS,
		SageMakerActions.LIST_PARTNER_APPS,
		SageMakerActions.LIST_PIPELINE_EXECUTION_STEPS,
		SageMakerActions.LIST_PIPELINE_EXECUTIONS,
		SageMakerActions.LIST_PIPELINE_PARAMETERS_FOR_EXECUTION,
		SageMakerActions.LIST_PIPELINE_VERSIONS,
		SageMakerActions.LIST_PIPELINES,
		SageMakerActions.LIST_PROCESSING_JOBS,
		SageMakerActions.LIST_PROJECTS,
		SageMakerActions.LIST_RECORDS,
		SageMakerActions.LIST_RESOURCE_CATALOGS,
		SageMakerActions.LIST_SHARED_MODEL_EVENTS,
		SageMakerActions.LIST_SHARED_MODEL_VERSIONS,
		SageMakerActions.LIST_SHARED_MODELS,
		SageMakerActions.LIST_SPACES,
		SageMakerActions.LIST_STAGE_DEVICES,
		SageMakerActions.LIST_STUDIO_LIFECYCLE_CONFIGS,
		SageMakerActions.LIST_SUBSCRIBED_WORKTEAMS,
		SageMakerActions.LIST_TAGS,
		SageMakerActions.LIST_TRAINING_JOBS,
		SageMakerActions.LIST_TRAINING_JOBS_FOR_HYPER_PARAMETER_TUNING_JOB,
		SageMakerActions.LIST_TRAINING_PLANS,
		SageMakerActions.LIST_TRANSFORM_JOBS,
		SageMakerActions.LIST_TRIAL_COMPONENTS,
		SageMakerActions.LIST_TRIALS,
		SageMakerActions.LIST_ULTRA_SERVERS_BY_RESERVED_CAPACITY,
		SageMakerActions.LIST_USER_PROFILES,
		SageMakerActions.LIST_WORKFORCES,
		SageMakerActions.LIST_WORKTEAMS,
		SageMakerActions.QUERY_LINEAGE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SageMakerActions.ADD_TAGS,
		SageMakerActions.DELETE_TAGS,
	];
}

const ActionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):action/(?<actionName>[^:/?]+)$",
);
const AiBenchmarkJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):ai-benchmark-job/(?<aiBenchmarkJobName>[^:/?]+)$",
);
const AiRecommendationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):ai-recommendation-job/(?<aiRecommendationJobName>[^:/?]+)$",
);
const AiWorkloadConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):ai-workload-config/(?<aiWorkloadConfigName>[^:/?]+)$",
);
const AlgorithmArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):algorithm/(?<algorithmName>[^:/?]+)$",
);
const AppArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):app/(?<domainId>[^:/?]+)/(?<userProfileName>[^:/?]+)/(?<appType>[^:/?]+)/(?<appName>[^:/?]+)$",
);
const AppImageConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):app-image-config/(?<appImageConfigName>[^:/?]+)$",
);
const ArtifactArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):artifact/(?<hashOfArtifactSource>[^:/?]+)$",
);
const AutomlJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):automl-job/(?<autoMlJobJobName>[^:/?]+)$",
);
const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterId>[^:/?]+)$",
);
const ClusterSchedulerConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):cluster-scheduler-config/(?<clusterSchedulerConfigId>[^:/?]+)$",
);
const CodeRepositoryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):code-repository/(?<codeRepositoryName>[^:/?]+)$",
);
const CompilationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):compilation-job/(?<compilationJobName>[^:/?]+)$",
);
const ComputeQuotaArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):compute-quota/(?<computeQuotaId>[^:/?]+)$",
);
const ContextArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):context/(?<contextName>[^:/?]+)$",
);
const DataQualityJobDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):data-quality-job-definition/(?<dataQualityJobDefinitionName>[^:/?]+)$",
);
const DeviceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):device-fleet/(?<deviceFleetName>[^:/?]+)/device/(?<deviceName>[^:/?]+)$",
);
const DeviceFleetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):device-fleet/(?<deviceFleetName>[^:/?]+)$",
);
const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)$",
);
const EdgeDeploymentPlanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):edge-deployment/(?<edgeDeploymentPlanName>[^:/?]+)$",
);
const EdgePackagingJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):edge-packaging-job/(?<edgePackagingJobName>[^:/?]+)$",
);
const EndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):endpoint/(?<endpointName>[^:/?]+)$",
);
const EndpointConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):endpoint-config/(?<endpointConfigName>[^:/?]+)$",
);
const ExperimentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):experiment/(?<experimentName>[^:/?]+)$",
);
const ExperimentTrialArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):experiment-trial/(?<trialName>[^:/?]+)$",
);
const ExperimentTrialComponentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):experiment-trial-component/(?<trialComponentName>[^:/?]+)$",
);
const FeatureGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):feature-group/(?<featureGroupName>[^:/?]+)$",
);
const FlowDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):flow-definition/(?<flowDefinitionName>[^:/?]+)$",
);
const HubArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):hub/(?<hubName>[^:/?]+)$",
);
const HubContentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):hub-content/(?<hubName>[^:/?]+)/(?<hubContentType>[^:/?]+)/(?<hubContentName>[^:/?]+)$",
);
const HumanLoopArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):human-loop/(?<humanLoopName>[^:/?]+)$",
);
const HumanTaskUiArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):human-task-ui/(?<humanTaskUiName>[^:/?]+)$",
);
const HyperParameterTuningJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):hyper-parameter-tuning-job/(?<hyperParameterTuningJobName>[^:/?]+)$",
);
const ImageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):image/(?<imageName>[^:/?]+)$",
);
const ImageVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):image-version/(?<imageName>[^:/?]+)/(?<version>[^:/?]+)$",
);
const InferenceComponentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):inference-component/(?<inferenceComponentName>[^:/?]+)$",
);
const InferenceExperimentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):inference-experiment/(?<inferenceExperimentName>[^:/?]+)$",
);
const InferenceRecommendationsJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):inference-recommendations-job/(?<inferenceRecommendationsJobName>[^:/?]+)$",
);
const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):job/(?<jobCategory>[^:/?]+)/(?<jobName>[^:/?]+)$",
);
const LabelingJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):labeling-job/(?<labelingJobName>[^:/?]+)$",
);
const LineageGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):lineage-group/(?<lineageGroupName>[^:/?]+)$",
);
const MlflowAppArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):mlflow-app/(?<mLflowAppId>[^:/?]+)$",
);
const MlflowTrackingServerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):mlflow-tracking-server/(?<mlflowTrackingServerName>[^:/?]+)$",
);
const ModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model/(?<modelName>[^:/?]+)$",
);
const ModelBiasJobDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-bias-job-definition/(?<modelBiasJobDefinitionName>[^:/?]+)$",
);
const ModelCardArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-card/(?<modelCardName>[^:/?]+)$",
);
const ModelCardExportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-card/(?<modelCardName>[^:/?]+)/export-job/(?<exportJobName>[^:/?]+)$",
);
const ModelExplainabilityJobDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-explainability-job-definition/(?<modelExplainabilityJobDefinitionName>[^:/?]+)$",
);
const ModelPackageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-package/(?<modelPackageName>[^:/?]+)$",
);
const ModelPackageGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-package-group/(?<modelPackageGroupName>[^:/?]+)$",
);
const ModelQualityJobDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-quality-job-definition/(?<modelQualityJobDefinitionName>[^:/?]+)$",
);
const MonitoringScheduleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):monitoring-schedule/(?<monitoringScheduleName>[^:/?]+)$",
);
const MonitoringScheduleAlertArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):monitoring-schedule/(?<monitoringScheduleName>[^:/?]+)/alert/(?<monitoringScheduleAlertName>[^:/?]+)$",
);
const NotebookInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):notebook-instance/(?<notebookInstanceName>[^:/?]+)$",
);
const NotebookInstanceLifecycleConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):notebook-instance-lifecycle-config/(?<notebookInstanceLifecycleConfigName>[^:/?]+)$",
);
const OptimizationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):optimization-job/(?<optimizationJobName>[^:/?]+)$",
);
const PartnerAppArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):partner-app/(?<appId>[^:/?]+)$",
);
const PipelineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):pipeline/(?<pipelineName>[^:/?]+)$",
);
const PipelineExecutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):pipeline/(?<pipelineName>[^:/?]+)/execution/(?<randomString>[^:/?]+)$",
);
const ProcessingJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):processing-job/(?<processingJobName>[^:/?]+)$",
);
const ProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):project/(?<projectName>[^:/?]+)$",
);
const ReservedCapacityArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):reserved-capacity/(?<randomString>[^:/?]+)$",
);
const SagemakerCatalogArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):sagemaker-catalog/(?<resourceCatalogName>[^:/?]+)$",
);
const SharedModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):shared-model/(?<sharedModelId>[^:/?]+)$",
);
const SharedModelEventArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):shared-model-event/(?<eventId>[^:/?]+)$",
);
const SpaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):space/(?<domainId>[^:/?]+)/(?<spaceName>[^:/?]+)$",
);
const StudioLifecycleConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):studio-lifecycle-config/(?<studioLifecycleConfigName>[^:/?]+)$",
);
const TrainingJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):training-job/(?<trainingJobName>[^:/?]+)$",
);
const TrainingPlanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):training-plan/(?<trainingPlanName>[^:/?]+)$",
);
const TransformJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):transform-job/(?<transformJobName>[^:/?]+)$",
);
const UserProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):user-profile/(?<domainId>[^:/?]+)/(?<userProfileName>[^:/?]+)$",
);
const WorkforceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):workforce/(?<workforceName>[^:/?]+)$",
);
const WorkteamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):workteam/(?<workteamName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for sagemaker resources.
 */
export class SageMakerResources {
	/**
	 * Builds an ARN for the action resource.
	 */
	static action(props: {
		/** The ActionName component of the ARN. */
		readonly actionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:action/${props.actionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the action resource.
	 */
	static isValidActionArn(arn: string): boolean {
		return ActionArnRegex.test(arn);
	}

	/**
	 * Parses a action ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseActionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		actionName: string;
	} {
		const match = ActionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid action ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			actionName: match.groups!.actionName,
		};
	}

	/**
	 * Builds an ARN for the ai-benchmark-job resource.
	 */
	static aiBenchmarkJob(props: {
		/** The AIBenchmarkJobName component of the ARN. */
		readonly aiBenchmarkJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:ai-benchmark-job/${props.aiBenchmarkJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ai-benchmark-job resource.
	 */
	static isValidAiBenchmarkJobArn(arn: string): boolean {
		return AiBenchmarkJobArnRegex.test(arn);
	}

	/**
	 * Parses a ai-benchmark-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAiBenchmarkJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		aiBenchmarkJobName: string;
	} {
		const match = AiBenchmarkJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ai-benchmark-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			aiBenchmarkJobName: match.groups!.aiBenchmarkJobName,
		};
	}

	/**
	 * Builds an ARN for the ai-recommendation-job resource.
	 */
	static aiRecommendationJob(props: {
		/** The AIRecommendationJobName component of the ARN. */
		readonly aiRecommendationJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:ai-recommendation-job/${props.aiRecommendationJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ai-recommendation-job resource.
	 */
	static isValidAiRecommendationJobArn(arn: string): boolean {
		return AiRecommendationJobArnRegex.test(arn);
	}

	/**
	 * Parses a ai-recommendation-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAiRecommendationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		aiRecommendationJobName: string;
	} {
		const match = AiRecommendationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ai-recommendation-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			aiRecommendationJobName: match.groups!.aiRecommendationJobName,
		};
	}

	/**
	 * Builds an ARN for the ai-workload-config resource.
	 */
	static aiWorkloadConfig(props: {
		/** The AIWorkloadConfigName component of the ARN. */
		readonly aiWorkloadConfigName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:ai-workload-config/${props.aiWorkloadConfigName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ai-workload-config resource.
	 */
	static isValidAiWorkloadConfigArn(arn: string): boolean {
		return AiWorkloadConfigArnRegex.test(arn);
	}

	/**
	 * Parses a ai-workload-config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAiWorkloadConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		aiWorkloadConfigName: string;
	} {
		const match = AiWorkloadConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ai-workload-config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			aiWorkloadConfigName: match.groups!.aiWorkloadConfigName,
		};
	}

	/**
	 * Builds an ARN for the algorithm resource.
	 */
	static algorithm(props: {
		/** The AlgorithmName component of the ARN. */
		readonly algorithmName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:algorithm/${props.algorithmName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the algorithm resource.
	 */
	static isValidAlgorithmArn(arn: string): boolean {
		return AlgorithmArnRegex.test(arn);
	}

	/**
	 * Parses a algorithm ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAlgorithmArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		algorithmName: string;
	} {
		const match = AlgorithmArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid algorithm ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			algorithmName: match.groups!.algorithmName,
		};
	}

	/**
	 * Builds an ARN for the app resource.
	 */
	static app(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** The UserProfileName component of the ARN. */
		readonly userProfileName: string;
		/** The AppType component of the ARN. */
		readonly appType: string;
		/** The AppName component of the ARN. */
		readonly appName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:app/${props.domainId}/${props.userProfileName}/${props.appType}/${props.appName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the app resource.
	 */
	static isValidAppArn(arn: string): boolean {
		return AppArnRegex.test(arn);
	}

	/**
	 * Parses a app ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		userProfileName: string;
		appType: string;
		appName: string;
	} {
		const match = AppArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid app ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			userProfileName: match.groups!.userProfileName,
			appType: match.groups!.appType,
			appName: match.groups!.appName,
		};
	}

	/**
	 * Builds an ARN for the app-image-config resource.
	 */
	static appImageConfig(props: {
		/** The AppImageConfigName component of the ARN. */
		readonly appImageConfigName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:app-image-config/${props.appImageConfigName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the app-image-config resource.
	 */
	static isValidAppImageConfigArn(arn: string): boolean {
		return AppImageConfigArnRegex.test(arn);
	}

	/**
	 * Parses a app-image-config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppImageConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appImageConfigName: string;
	} {
		const match = AppImageConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid app-image-config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appImageConfigName: match.groups!.appImageConfigName,
		};
	}

	/**
	 * Builds an ARN for the artifact resource.
	 */
	static artifact(props: {
		/** The HashOfArtifactSource component of the ARN. */
		readonly hashOfArtifactSource: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:artifact/${props.hashOfArtifactSource}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the artifact resource.
	 */
	static isValidArtifactArn(arn: string): boolean {
		return ArtifactArnRegex.test(arn);
	}

	/**
	 * Parses a artifact ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseArtifactArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		hashOfArtifactSource: string;
	} {
		const match = ArtifactArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid artifact ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			hashOfArtifactSource: match.groups!.hashOfArtifactSource,
		};
	}

	/**
	 * Builds an ARN for the automl-job resource.
	 */
	static automlJob(props: {
		/** The AutoMLJobJobName component of the ARN. */
		readonly autoMlJobJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:automl-job/${props.autoMlJobJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the automl-job resource.
	 */
	static isValidAutomlJobArn(arn: string): boolean {
		return AutomlJobArnRegex.test(arn);
	}

	/**
	 * Parses a automl-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomlJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		autoMlJobJobName: string;
	} {
		const match = AutomlJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid automl-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			autoMlJobJobName: match.groups!.autoMlJobJobName,
		};
	}

	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterId component of the ARN. */
		readonly clusterId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster resource.
	 */
	static isValidClusterArn(arn: string): boolean {
		return ClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterId: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterId: match.groups!.clusterId,
		};
	}

	/**
	 * Builds an ARN for the cluster-scheduler-config resource.
	 */
	static clusterSchedulerConfig(props: {
		/** The ClusterSchedulerConfigId component of the ARN. */
		readonly clusterSchedulerConfigId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:cluster-scheduler-config/${props.clusterSchedulerConfigId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster-scheduler-config resource.
	 */
	static isValidClusterSchedulerConfigArn(arn: string): boolean {
		return ClusterSchedulerConfigArnRegex.test(arn);
	}

	/**
	 * Parses a cluster-scheduler-config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterSchedulerConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterSchedulerConfigId: string;
	} {
		const match = ClusterSchedulerConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster-scheduler-config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterSchedulerConfigId: match.groups!.clusterSchedulerConfigId,
		};
	}

	/**
	 * Builds an ARN for the code-repository resource.
	 */
	static codeRepository(props: {
		/** The CodeRepositoryName component of the ARN. */
		readonly codeRepositoryName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:code-repository/${props.codeRepositoryName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the code-repository resource.
	 */
	static isValidCodeRepositoryArn(arn: string): boolean {
		return CodeRepositoryArnRegex.test(arn);
	}

	/**
	 * Parses a code-repository ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCodeRepositoryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		codeRepositoryName: string;
	} {
		const match = CodeRepositoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid code-repository ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			codeRepositoryName: match.groups!.codeRepositoryName,
		};
	}

	/**
	 * Builds an ARN for the compilation-job resource.
	 */
	static compilationJob(props: {
		/** The CompilationJobName component of the ARN. */
		readonly compilationJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:compilation-job/${props.compilationJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the compilation-job resource.
	 */
	static isValidCompilationJobArn(arn: string): boolean {
		return CompilationJobArnRegex.test(arn);
	}

	/**
	 * Parses a compilation-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCompilationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		compilationJobName: string;
	} {
		const match = CompilationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid compilation-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			compilationJobName: match.groups!.compilationJobName,
		};
	}

	/**
	 * Builds an ARN for the compute-quota resource.
	 */
	static computeQuota(props: {
		/** The ComputeQuotaId component of the ARN. */
		readonly computeQuotaId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:compute-quota/${props.computeQuotaId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the compute-quota resource.
	 */
	static isValidComputeQuotaArn(arn: string): boolean {
		return ComputeQuotaArnRegex.test(arn);
	}

	/**
	 * Parses a compute-quota ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseComputeQuotaArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		computeQuotaId: string;
	} {
		const match = ComputeQuotaArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid compute-quota ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			computeQuotaId: match.groups!.computeQuotaId,
		};
	}

	/**
	 * Builds an ARN for the context resource.
	 */
	static context(props: {
		/** The ContextName component of the ARN. */
		readonly contextName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:context/${props.contextName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the context resource.
	 */
	static isValidContextArn(arn: string): boolean {
		return ContextArnRegex.test(arn);
	}

	/**
	 * Parses a context ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContextArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		contextName: string;
	} {
		const match = ContextArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid context ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			contextName: match.groups!.contextName,
		};
	}

	/**
	 * Builds an ARN for the data-quality-job-definition resource.
	 */
	static dataQualityJobDefinition(props: {
		/** The DataQualityJobDefinitionName component of the ARN. */
		readonly dataQualityJobDefinitionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:data-quality-job-definition/${props.dataQualityJobDefinitionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-quality-job-definition resource.
	 */
	static isValidDataQualityJobDefinitionArn(arn: string): boolean {
		return DataQualityJobDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a data-quality-job-definition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataQualityJobDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataQualityJobDefinitionName: string;
	} {
		const match = DataQualityJobDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-quality-job-definition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataQualityJobDefinitionName: match.groups!.dataQualityJobDefinitionName,
		};
	}

	/**
	 * Builds an ARN for the device resource.
	 */
	static device(props: {
		/** The DeviceFleetName component of the ARN. */
		readonly deviceFleetName: string;
		/** The DeviceName component of the ARN. */
		readonly deviceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:device-fleet/${props.deviceFleetName}/device/${props.deviceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the device resource.
	 */
	static isValidDeviceArn(arn: string): boolean {
		return DeviceArnRegex.test(arn);
	}

	/**
	 * Parses a device ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeviceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deviceFleetName: string;
		deviceName: string;
	} {
		const match = DeviceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid device ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deviceFleetName: match.groups!.deviceFleetName,
			deviceName: match.groups!.deviceName,
		};
	}

	/**
	 * Builds an ARN for the device-fleet resource.
	 */
	static deviceFleet(props: {
		/** The DeviceFleetName component of the ARN. */
		readonly deviceFleetName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:device-fleet/${props.deviceFleetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the device-fleet resource.
	 */
	static isValidDeviceFleetArn(arn: string): boolean {
		return DeviceFleetArnRegex.test(arn);
	}

	/**
	 * Parses a device-fleet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeviceFleetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deviceFleetName: string;
	} {
		const match = DeviceFleetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid device-fleet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deviceFleetName: match.groups!.deviceFleetName,
		};
	}

	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domain resource.
	 */
	static isValidDomainArn(arn: string): boolean {
		return DomainArnRegex.test(arn);
	}

	/**
	 * Parses a domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
	} {
		const match = DomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
		};
	}

	/**
	 * Builds an ARN for the edge-deployment-plan resource.
	 */
	static edgeDeploymentPlan(props: {
		/** The EdgeDeploymentPlanName component of the ARN. */
		readonly edgeDeploymentPlanName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:edge-deployment/${props.edgeDeploymentPlanName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the edge-deployment-plan resource.
	 */
	static isValidEdgeDeploymentPlanArn(arn: string): boolean {
		return EdgeDeploymentPlanArnRegex.test(arn);
	}

	/**
	 * Parses a edge-deployment-plan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEdgeDeploymentPlanArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		edgeDeploymentPlanName: string;
	} {
		const match = EdgeDeploymentPlanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid edge-deployment-plan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			edgeDeploymentPlanName: match.groups!.edgeDeploymentPlanName,
		};
	}

	/**
	 * Builds an ARN for the edge-packaging-job resource.
	 */
	static edgePackagingJob(props: {
		/** The EdgePackagingJobName component of the ARN. */
		readonly edgePackagingJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:edge-packaging-job/${props.edgePackagingJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the edge-packaging-job resource.
	 */
	static isValidEdgePackagingJobArn(arn: string): boolean {
		return EdgePackagingJobArnRegex.test(arn);
	}

	/**
	 * Parses a edge-packaging-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEdgePackagingJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		edgePackagingJobName: string;
	} {
		const match = EdgePackagingJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid edge-packaging-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			edgePackagingJobName: match.groups!.edgePackagingJobName,
		};
	}

	/**
	 * Builds an ARN for the endpoint resource.
	 */
	static endpoint(props: {
		/** The EndpointName component of the ARN. */
		readonly endpointName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:endpoint/${props.endpointName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the endpoint resource.
	 */
	static isValidEndpointArn(arn: string): boolean {
		return EndpointArnRegex.test(arn);
	}

	/**
	 * Parses a endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		endpointName: string;
	} {
		const match = EndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			endpointName: match.groups!.endpointName,
		};
	}

	/**
	 * Builds an ARN for the endpoint-config resource.
	 */
	static endpointConfig(props: {
		/** The EndpointConfigName component of the ARN. */
		readonly endpointConfigName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:endpoint-config/${props.endpointConfigName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the endpoint-config resource.
	 */
	static isValidEndpointConfigArn(arn: string): boolean {
		return EndpointConfigArnRegex.test(arn);
	}

	/**
	 * Parses a endpoint-config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEndpointConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		endpointConfigName: string;
	} {
		const match = EndpointConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid endpoint-config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			endpointConfigName: match.groups!.endpointConfigName,
		};
	}

	/**
	 * Builds an ARN for the experiment resource.
	 */
	static experiment(props: {
		/** The ExperimentName component of the ARN. */
		readonly experimentName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:experiment/${props.experimentName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the experiment resource.
	 */
	static isValidExperimentArn(arn: string): boolean {
		return ExperimentArnRegex.test(arn);
	}

	/**
	 * Parses a experiment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExperimentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		experimentName: string;
	} {
		const match = ExperimentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid experiment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			experimentName: match.groups!.experimentName,
		};
	}

	/**
	 * Builds an ARN for the experiment-trial resource.
	 */
	static experimentTrial(props: {
		/** The TrialName component of the ARN. */
		readonly trialName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:experiment-trial/${props.trialName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the experiment-trial resource.
	 */
	static isValidExperimentTrialArn(arn: string): boolean {
		return ExperimentTrialArnRegex.test(arn);
	}

	/**
	 * Parses a experiment-trial ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExperimentTrialArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		trialName: string;
	} {
		const match = ExperimentTrialArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid experiment-trial ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			trialName: match.groups!.trialName,
		};
	}

	/**
	 * Builds an ARN for the experiment-trial-component resource.
	 */
	static experimentTrialComponent(props: {
		/** The TrialComponentName component of the ARN. */
		readonly trialComponentName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:experiment-trial-component/${props.trialComponentName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the experiment-trial-component resource.
	 */
	static isValidExperimentTrialComponentArn(arn: string): boolean {
		return ExperimentTrialComponentArnRegex.test(arn);
	}

	/**
	 * Parses a experiment-trial-component ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExperimentTrialComponentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		trialComponentName: string;
	} {
		const match = ExperimentTrialComponentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid experiment-trial-component ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			trialComponentName: match.groups!.trialComponentName,
		};
	}

	/**
	 * Builds an ARN for the feature-group resource.
	 */
	static featureGroup(props: {
		/** The FeatureGroupName component of the ARN. */
		readonly featureGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:feature-group/${props.featureGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the feature-group resource.
	 */
	static isValidFeatureGroupArn(arn: string): boolean {
		return FeatureGroupArnRegex.test(arn);
	}

	/**
	 * Parses a feature-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFeatureGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		featureGroupName: string;
	} {
		const match = FeatureGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid feature-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			featureGroupName: match.groups!.featureGroupName,
		};
	}

	/**
	 * Builds an ARN for the flow-definition resource.
	 */
	static flowDefinition(props: {
		/** The FlowDefinitionName component of the ARN. */
		readonly flowDefinitionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:flow-definition/${props.flowDefinitionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the flow-definition resource.
	 */
	static isValidFlowDefinitionArn(arn: string): boolean {
		return FlowDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a flow-definition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFlowDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		flowDefinitionName: string;
	} {
		const match = FlowDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid flow-definition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			flowDefinitionName: match.groups!.flowDefinitionName,
		};
	}

	/**
	 * Builds an ARN for the hub resource.
	 */
	static hub(props: {
		/** The HubName component of the ARN. */
		readonly hubName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:hub/${props.hubName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the hub resource.
	 */
	static isValidHubArn(arn: string): boolean {
		return HubArnRegex.test(arn);
	}

	/**
	 * Parses a hub ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHubArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		hubName: string;
	} {
		const match = HubArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid hub ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			hubName: match.groups!.hubName,
		};
	}

	/**
	 * Builds an ARN for the hub-content resource.
	 */
	static hubContent(props: {
		/** The HubName component of the ARN. */
		readonly hubName: string;
		/** The HubContentType component of the ARN. */
		readonly hubContentType: string;
		/** The HubContentName component of the ARN. */
		readonly hubContentName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:hub-content/${props.hubName}/${props.hubContentType}/${props.hubContentName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the hub-content resource.
	 */
	static isValidHubContentArn(arn: string): boolean {
		return HubContentArnRegex.test(arn);
	}

	/**
	 * Parses a hub-content ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHubContentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		hubName: string;
		hubContentType: string;
		hubContentName: string;
	} {
		const match = HubContentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid hub-content ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			hubName: match.groups!.hubName,
			hubContentType: match.groups!.hubContentType,
			hubContentName: match.groups!.hubContentName,
		};
	}

	/**
	 * Builds an ARN for the human-loop resource.
	 */
	static humanLoop(props: {
		/** The HumanLoopName component of the ARN. */
		readonly humanLoopName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:human-loop/${props.humanLoopName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the human-loop resource.
	 */
	static isValidHumanLoopArn(arn: string): boolean {
		return HumanLoopArnRegex.test(arn);
	}

	/**
	 * Parses a human-loop ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHumanLoopArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		humanLoopName: string;
	} {
		const match = HumanLoopArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid human-loop ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			humanLoopName: match.groups!.humanLoopName,
		};
	}

	/**
	 * Builds an ARN for the human-task-ui resource.
	 */
	static humanTaskUi(props: {
		/** The HumanTaskUiName component of the ARN. */
		readonly humanTaskUiName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:human-task-ui/${props.humanTaskUiName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the human-task-ui resource.
	 */
	static isValidHumanTaskUiArn(arn: string): boolean {
		return HumanTaskUiArnRegex.test(arn);
	}

	/**
	 * Parses a human-task-ui ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHumanTaskUiArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		humanTaskUiName: string;
	} {
		const match = HumanTaskUiArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid human-task-ui ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			humanTaskUiName: match.groups!.humanTaskUiName,
		};
	}

	/**
	 * Builds an ARN for the hyper-parameter-tuning-job resource.
	 */
	static hyperParameterTuningJob(props: {
		/** The HyperParameterTuningJobName component of the ARN. */
		readonly hyperParameterTuningJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:hyper-parameter-tuning-job/${props.hyperParameterTuningJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the hyper-parameter-tuning-job resource.
	 */
	static isValidHyperParameterTuningJobArn(arn: string): boolean {
		return HyperParameterTuningJobArnRegex.test(arn);
	}

	/**
	 * Parses a hyper-parameter-tuning-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHyperParameterTuningJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		hyperParameterTuningJobName: string;
	} {
		const match = HyperParameterTuningJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid hyper-parameter-tuning-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			hyperParameterTuningJobName: match.groups!.hyperParameterTuningJobName,
		};
	}

	/**
	 * Builds an ARN for the image resource.
	 */
	static image(props: {
		/** The ImageName component of the ARN. */
		readonly imageName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:image/${props.imageName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the image resource.
	 */
	static isValidImageArn(arn: string): boolean {
		return ImageArnRegex.test(arn);
	}

	/**
	 * Parses a image ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		imageName: string;
	} {
		const match = ImageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid image ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			imageName: match.groups!.imageName,
		};
	}

	/**
	 * Builds an ARN for the image-version resource.
	 */
	static imageVersion(props: {
		/** The ImageName component of the ARN. */
		readonly imageName: string;
		/** The Version component of the ARN. */
		readonly version: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:image-version/${props.imageName}/${props.version}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the image-version resource.
	 */
	static isValidImageVersionArn(arn: string): boolean {
		return ImageVersionArnRegex.test(arn);
	}

	/**
	 * Parses a image-version ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImageVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		imageName: string;
		version: string;
	} {
		const match = ImageVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid image-version ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			imageName: match.groups!.imageName,
			version: match.groups!.version,
		};
	}

	/**
	 * Builds an ARN for the inference-component resource.
	 */
	static inferenceComponent(props: {
		/** The InferenceComponentName component of the ARN. */
		readonly inferenceComponentName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:inference-component/${props.inferenceComponentName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the inference-component resource.
	 */
	static isValidInferenceComponentArn(arn: string): boolean {
		return InferenceComponentArnRegex.test(arn);
	}

	/**
	 * Parses a inference-component ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInferenceComponentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		inferenceComponentName: string;
	} {
		const match = InferenceComponentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid inference-component ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			inferenceComponentName: match.groups!.inferenceComponentName,
		};
	}

	/**
	 * Builds an ARN for the inference-experiment resource.
	 */
	static inferenceExperiment(props: {
		/** The InferenceExperimentName component of the ARN. */
		readonly inferenceExperimentName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:inference-experiment/${props.inferenceExperimentName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the inference-experiment resource.
	 */
	static isValidInferenceExperimentArn(arn: string): boolean {
		return InferenceExperimentArnRegex.test(arn);
	}

	/**
	 * Parses a inference-experiment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInferenceExperimentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		inferenceExperimentName: string;
	} {
		const match = InferenceExperimentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid inference-experiment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			inferenceExperimentName: match.groups!.inferenceExperimentName,
		};
	}

	/**
	 * Builds an ARN for the inference-recommendations-job resource.
	 */
	static inferenceRecommendationsJob(props: {
		/** The InferenceRecommendationsJobName component of the ARN. */
		readonly inferenceRecommendationsJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:inference-recommendations-job/${props.inferenceRecommendationsJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the inference-recommendations-job resource.
	 */
	static isValidInferenceRecommendationsJobArn(arn: string): boolean {
		return InferenceRecommendationsJobArnRegex.test(arn);
	}

	/**
	 * Parses a inference-recommendations-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInferenceRecommendationsJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		inferenceRecommendationsJobName: string;
	} {
		const match = InferenceRecommendationsJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid inference-recommendations-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			inferenceRecommendationsJobName:
				match.groups!.inferenceRecommendationsJobName,
		};
	}

	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: {
		/** The JobCategory component of the ARN. */
		readonly jobCategory: string;
		/** The JobName component of the ARN. */
		readonly jobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:job/${props.jobCategory}/${props.jobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobCategory: string;
		jobName: string;
	} {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobCategory: match.groups!.jobCategory,
			jobName: match.groups!.jobName,
		};
	}

	/**
	 * Builds an ARN for the labeling-job resource.
	 */
	static labelingJob(props: {
		/** The LabelingJobName component of the ARN. */
		readonly labelingJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:labeling-job/${props.labelingJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the labeling-job resource.
	 */
	static isValidLabelingJobArn(arn: string): boolean {
		return LabelingJobArnRegex.test(arn);
	}

	/**
	 * Parses a labeling-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLabelingJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		labelingJobName: string;
	} {
		const match = LabelingJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid labeling-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			labelingJobName: match.groups!.labelingJobName,
		};
	}

	/**
	 * Builds an ARN for the lineage-group resource.
	 */
	static lineageGroup(props: {
		/** The LineageGroupName component of the ARN. */
		readonly lineageGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:lineage-group/${props.lineageGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the lineage-group resource.
	 */
	static isValidLineageGroupArn(arn: string): boolean {
		return LineageGroupArnRegex.test(arn);
	}

	/**
	 * Parses a lineage-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLineageGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		lineageGroupName: string;
	} {
		const match = LineageGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid lineage-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			lineageGroupName: match.groups!.lineageGroupName,
		};
	}

	/**
	 * Builds an ARN for the mlflow-app resource.
	 */
	static mlflowApp(props: {
		/** The MLflowAppId component of the ARN. */
		readonly mLflowAppId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:mlflow-app/${props.mLflowAppId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mlflow-app resource.
	 */
	static isValidMlflowAppArn(arn: string): boolean {
		return MlflowAppArnRegex.test(arn);
	}

	/**
	 * Parses a mlflow-app ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMlflowAppArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		mLflowAppId: string;
	} {
		const match = MlflowAppArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mlflow-app ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			mLflowAppId: match.groups!.mLflowAppId,
		};
	}

	/**
	 * Builds an ARN for the mlflow-tracking-server resource.
	 */
	static mlflowTrackingServer(props: {
		/** The MlflowTrackingServerName component of the ARN. */
		readonly mlflowTrackingServerName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:mlflow-tracking-server/${props.mlflowTrackingServerName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mlflow-tracking-server resource.
	 */
	static isValidMlflowTrackingServerArn(arn: string): boolean {
		return MlflowTrackingServerArnRegex.test(arn);
	}

	/**
	 * Parses a mlflow-tracking-server ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMlflowTrackingServerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		mlflowTrackingServerName: string;
	} {
		const match = MlflowTrackingServerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mlflow-tracking-server ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			mlflowTrackingServerName: match.groups!.mlflowTrackingServerName,
		};
	}

	/**
	 * Builds an ARN for the model resource.
	 */
	static model(props: {
		/** The ModelName component of the ARN. */
		readonly modelName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:model/${props.modelName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model resource.
	 */
	static isValidModelArn(arn: string): boolean {
		return ModelArnRegex.test(arn);
	}

	/**
	 * Parses a model ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		modelName: string;
	} {
		const match = ModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			modelName: match.groups!.modelName,
		};
	}

	/**
	 * Builds an ARN for the model-bias-job-definition resource.
	 */
	static modelBiasJobDefinition(props: {
		/** The ModelBiasJobDefinitionName component of the ARN. */
		readonly modelBiasJobDefinitionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:model-bias-job-definition/${props.modelBiasJobDefinitionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-bias-job-definition resource.
	 */
	static isValidModelBiasJobDefinitionArn(arn: string): boolean {
		return ModelBiasJobDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a model-bias-job-definition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelBiasJobDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		modelBiasJobDefinitionName: string;
	} {
		const match = ModelBiasJobDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-bias-job-definition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			modelBiasJobDefinitionName: match.groups!.modelBiasJobDefinitionName,
		};
	}

	/**
	 * Builds an ARN for the model-card resource.
	 */
	static modelCard(props: {
		/** The ModelCardName component of the ARN. */
		readonly modelCardName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:model-card/${props.modelCardName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-card resource.
	 */
	static isValidModelCardArn(arn: string): boolean {
		return ModelCardArnRegex.test(arn);
	}

	/**
	 * Parses a model-card ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelCardArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		modelCardName: string;
	} {
		const match = ModelCardArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-card ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			modelCardName: match.groups!.modelCardName,
		};
	}

	/**
	 * Builds an ARN for the model-card-export-job resource.
	 */
	static modelCardExportJob(props: {
		/** The ModelCardName component of the ARN. */
		readonly modelCardName: string;
		/** The ExportJobName component of the ARN. */
		readonly exportJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:model-card/${props.modelCardName}/export-job/${props.exportJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-card-export-job resource.
	 */
	static isValidModelCardExportJobArn(arn: string): boolean {
		return ModelCardExportJobArnRegex.test(arn);
	}

	/**
	 * Parses a model-card-export-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelCardExportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		modelCardName: string;
		exportJobName: string;
	} {
		const match = ModelCardExportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-card-export-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			modelCardName: match.groups!.modelCardName,
			exportJobName: match.groups!.exportJobName,
		};
	}

	/**
	 * Builds an ARN for the model-explainability-job-definition resource.
	 */
	static modelExplainabilityJobDefinition(props: {
		/** The ModelExplainabilityJobDefinitionName component of the ARN. */
		readonly modelExplainabilityJobDefinitionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:model-explainability-job-definition/${props.modelExplainabilityJobDefinitionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-explainability-job-definition resource.
	 */
	static isValidModelExplainabilityJobDefinitionArn(arn: string): boolean {
		return ModelExplainabilityJobDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a model-explainability-job-definition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelExplainabilityJobDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		modelExplainabilityJobDefinitionName: string;
	} {
		const match = ModelExplainabilityJobDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(
				`Invalid model-explainability-job-definition ARN: ${arn}`,
			);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			modelExplainabilityJobDefinitionName:
				match.groups!.modelExplainabilityJobDefinitionName,
		};
	}

	/**
	 * Builds an ARN for the model-package resource.
	 */
	static modelPackage(props: {
		/** The ModelPackageName component of the ARN. */
		readonly modelPackageName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:model-package/${props.modelPackageName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-package resource.
	 */
	static isValidModelPackageArn(arn: string): boolean {
		return ModelPackageArnRegex.test(arn);
	}

	/**
	 * Parses a model-package ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelPackageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		modelPackageName: string;
	} {
		const match = ModelPackageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-package ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			modelPackageName: match.groups!.modelPackageName,
		};
	}

	/**
	 * Builds an ARN for the model-package-group resource.
	 */
	static modelPackageGroup(props: {
		/** The ModelPackageGroupName component of the ARN. */
		readonly modelPackageGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:model-package-group/${props.modelPackageGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-package-group resource.
	 */
	static isValidModelPackageGroupArn(arn: string): boolean {
		return ModelPackageGroupArnRegex.test(arn);
	}

	/**
	 * Parses a model-package-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelPackageGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		modelPackageGroupName: string;
	} {
		const match = ModelPackageGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-package-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			modelPackageGroupName: match.groups!.modelPackageGroupName,
		};
	}

	/**
	 * Builds an ARN for the model-quality-job-definition resource.
	 */
	static modelQualityJobDefinition(props: {
		/** The ModelQualityJobDefinitionName component of the ARN. */
		readonly modelQualityJobDefinitionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:model-quality-job-definition/${props.modelQualityJobDefinitionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the model-quality-job-definition resource.
	 */
	static isValidModelQualityJobDefinitionArn(arn: string): boolean {
		return ModelQualityJobDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a model-quality-job-definition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelQualityJobDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		modelQualityJobDefinitionName: string;
	} {
		const match = ModelQualityJobDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid model-quality-job-definition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			modelQualityJobDefinitionName:
				match.groups!.modelQualityJobDefinitionName,
		};
	}

	/**
	 * Builds an ARN for the monitoring-schedule resource.
	 */
	static monitoringSchedule(props: {
		/** The MonitoringScheduleName component of the ARN. */
		readonly monitoringScheduleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:monitoring-schedule/${props.monitoringScheduleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the monitoring-schedule resource.
	 */
	static isValidMonitoringScheduleArn(arn: string): boolean {
		return MonitoringScheduleArnRegex.test(arn);
	}

	/**
	 * Parses a monitoring-schedule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMonitoringScheduleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		monitoringScheduleName: string;
	} {
		const match = MonitoringScheduleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid monitoring-schedule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			monitoringScheduleName: match.groups!.monitoringScheduleName,
		};
	}

	/**
	 * Builds an ARN for the monitoring-schedule-alert resource.
	 */
	static monitoringScheduleAlert(props: {
		/** The MonitoringScheduleName component of the ARN. */
		readonly monitoringScheduleName: string;
		/** The MonitoringScheduleAlertName component of the ARN. */
		readonly monitoringScheduleAlertName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:monitoring-schedule/${props.monitoringScheduleName}/alert/${props.monitoringScheduleAlertName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the monitoring-schedule-alert resource.
	 */
	static isValidMonitoringScheduleAlertArn(arn: string): boolean {
		return MonitoringScheduleAlertArnRegex.test(arn);
	}

	/**
	 * Parses a monitoring-schedule-alert ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMonitoringScheduleAlertArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		monitoringScheduleName: string;
		monitoringScheduleAlertName: string;
	} {
		const match = MonitoringScheduleAlertArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid monitoring-schedule-alert ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			monitoringScheduleName: match.groups!.monitoringScheduleName,
			monitoringScheduleAlertName: match.groups!.monitoringScheduleAlertName,
		};
	}

	/**
	 * Builds an ARN for the notebook-instance resource.
	 */
	static notebookInstance(props: {
		/** The NotebookInstanceName component of the ARN. */
		readonly notebookInstanceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:notebook-instance/${props.notebookInstanceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the notebook-instance resource.
	 */
	static isValidNotebookInstanceArn(arn: string): boolean {
		return NotebookInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a notebook-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNotebookInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		notebookInstanceName: string;
	} {
		const match = NotebookInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid notebook-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			notebookInstanceName: match.groups!.notebookInstanceName,
		};
	}

	/**
	 * Builds an ARN for the notebook-instance-lifecycle-config resource.
	 */
	static notebookInstanceLifecycleConfig(props: {
		/** The NotebookInstanceLifecycleConfigName component of the ARN. */
		readonly notebookInstanceLifecycleConfigName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:notebook-instance-lifecycle-config/${props.notebookInstanceLifecycleConfigName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the notebook-instance-lifecycle-config resource.
	 */
	static isValidNotebookInstanceLifecycleConfigArn(arn: string): boolean {
		return NotebookInstanceLifecycleConfigArnRegex.test(arn);
	}

	/**
	 * Parses a notebook-instance-lifecycle-config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNotebookInstanceLifecycleConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		notebookInstanceLifecycleConfigName: string;
	} {
		const match = NotebookInstanceLifecycleConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid notebook-instance-lifecycle-config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			notebookInstanceLifecycleConfigName:
				match.groups!.notebookInstanceLifecycleConfigName,
		};
	}

	/**
	 * Builds an ARN for the optimization-job resource.
	 */
	static optimizationJob(props: {
		/** The OptimizationJobName component of the ARN. */
		readonly optimizationJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:optimization-job/${props.optimizationJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the optimization-job resource.
	 */
	static isValidOptimizationJobArn(arn: string): boolean {
		return OptimizationJobArnRegex.test(arn);
	}

	/**
	 * Parses a optimization-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOptimizationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		optimizationJobName: string;
	} {
		const match = OptimizationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid optimization-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			optimizationJobName: match.groups!.optimizationJobName,
		};
	}

	/**
	 * Builds an ARN for the partner-app resource.
	 */
	static partnerApp(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:partner-app/${props.appId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the partner-app resource.
	 */
	static isValidPartnerAppArn(arn: string): boolean {
		return PartnerAppArnRegex.test(arn);
	}

	/**
	 * Parses a partner-app ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePartnerAppArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
	} {
		const match = PartnerAppArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid partner-app ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the pipeline resource.
	 */
	static pipeline(props: {
		/** The PipelineName component of the ARN. */
		readonly pipelineName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:pipeline/${props.pipelineName}`;
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
			pipelineName: match.groups!.pipelineName,
		};
	}

	/**
	 * Builds an ARN for the pipeline-execution resource.
	 */
	static pipelineExecution(props: {
		/** The PipelineName component of the ARN. */
		readonly pipelineName: string;
		/** The RandomString component of the ARN. */
		readonly randomString: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:pipeline/${props.pipelineName}/execution/${props.randomString}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the pipeline-execution resource.
	 */
	static isValidPipelineExecutionArn(arn: string): boolean {
		return PipelineExecutionArnRegex.test(arn);
	}

	/**
	 * Parses a pipeline-execution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePipelineExecutionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		pipelineName: string;
		randomString: string;
	} {
		const match = PipelineExecutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pipeline-execution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			pipelineName: match.groups!.pipelineName,
			randomString: match.groups!.randomString,
		};
	}

	/**
	 * Builds an ARN for the processing-job resource.
	 */
	static processingJob(props: {
		/** The ProcessingJobName component of the ARN. */
		readonly processingJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:processing-job/${props.processingJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the processing-job resource.
	 */
	static isValidProcessingJobArn(arn: string): boolean {
		return ProcessingJobArnRegex.test(arn);
	}

	/**
	 * Parses a processing-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProcessingJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		processingJobName: string;
	} {
		const match = ProcessingJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid processing-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			processingJobName: match.groups!.processingJobName,
		};
	}

	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: {
		/** The ProjectName component of the ARN. */
		readonly projectName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectName}`;
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
		projectName: string;
	} {
		const match = ProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectName: match.groups!.projectName,
		};
	}

	/**
	 * Builds an ARN for the reserved-capacity resource.
	 */
	static reservedCapacity(props: {
		/** The RandomString component of the ARN. */
		readonly randomString: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:reserved-capacity/${props.randomString}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the reserved-capacity resource.
	 */
	static isValidReservedCapacityArn(arn: string): boolean {
		return ReservedCapacityArnRegex.test(arn);
	}

	/**
	 * Parses a reserved-capacity ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReservedCapacityArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		randomString: string;
	} {
		const match = ReservedCapacityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid reserved-capacity ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			randomString: match.groups!.randomString,
		};
	}

	/**
	 * Builds an ARN for the sagemaker-catalog resource.
	 */
	static sagemakerCatalog(props: {
		/** The ResourceCatalogName component of the ARN. */
		readonly resourceCatalogName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:sagemaker-catalog/${props.resourceCatalogName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sagemaker-catalog resource.
	 */
	static isValidSagemakerCatalogArn(arn: string): boolean {
		return SagemakerCatalogArnRegex.test(arn);
	}

	/**
	 * Parses a sagemaker-catalog ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSagemakerCatalogArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceCatalogName: string;
	} {
		const match = SagemakerCatalogArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sagemaker-catalog ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceCatalogName: match.groups!.resourceCatalogName,
		};
	}

	/**
	 * Builds an ARN for the shared-model resource.
	 */
	static sharedModel(props: {
		/** The SharedModelId component of the ARN. */
		readonly sharedModelId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:shared-model/${props.sharedModelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the shared-model resource.
	 */
	static isValidSharedModelArn(arn: string): boolean {
		return SharedModelArnRegex.test(arn);
	}

	/**
	 * Parses a shared-model ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSharedModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sharedModelId: string;
	} {
		const match = SharedModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid shared-model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sharedModelId: match.groups!.sharedModelId,
		};
	}

	/**
	 * Builds an ARN for the shared-model-event resource.
	 */
	static sharedModelEvent(props: {
		/** The EventId component of the ARN. */
		readonly eventId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:shared-model-event/${props.eventId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the shared-model-event resource.
	 */
	static isValidSharedModelEventArn(arn: string): boolean {
		return SharedModelEventArnRegex.test(arn);
	}

	/**
	 * Parses a shared-model-event ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSharedModelEventArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eventId: string;
	} {
		const match = SharedModelEventArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid shared-model-event ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eventId: match.groups!.eventId,
		};
	}

	/**
	 * Builds an ARN for the space resource.
	 */
	static space(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** The SpaceName component of the ARN. */
		readonly spaceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:space/${props.domainId}/${props.spaceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the space resource.
	 */
	static isValidSpaceArn(arn: string): boolean {
		return SpaceArnRegex.test(arn);
	}

	/**
	 * Parses a space ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSpaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		spaceName: string;
	} {
		const match = SpaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid space ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			spaceName: match.groups!.spaceName,
		};
	}

	/**
	 * Builds an ARN for the studio-lifecycle-config resource.
	 */
	static studioLifecycleConfig(props: {
		/** The StudioLifecycleConfigName component of the ARN. */
		readonly studioLifecycleConfigName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:studio-lifecycle-config/${props.studioLifecycleConfigName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the studio-lifecycle-config resource.
	 */
	static isValidStudioLifecycleConfigArn(arn: string): boolean {
		return StudioLifecycleConfigArnRegex.test(arn);
	}

	/**
	 * Parses a studio-lifecycle-config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStudioLifecycleConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		studioLifecycleConfigName: string;
	} {
		const match = StudioLifecycleConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid studio-lifecycle-config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			studioLifecycleConfigName: match.groups!.studioLifecycleConfigName,
		};
	}

	/**
	 * Builds an ARN for the training-job resource.
	 */
	static trainingJob(props: {
		/** The TrainingJobName component of the ARN. */
		readonly trainingJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:training-job/${props.trainingJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the training-job resource.
	 */
	static isValidTrainingJobArn(arn: string): boolean {
		return TrainingJobArnRegex.test(arn);
	}

	/**
	 * Parses a training-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTrainingJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		trainingJobName: string;
	} {
		const match = TrainingJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid training-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			trainingJobName: match.groups!.trainingJobName,
		};
	}

	/**
	 * Builds an ARN for the training-plan resource.
	 */
	static trainingPlan(props: {
		/** The TrainingPlanName component of the ARN. */
		readonly trainingPlanName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:training-plan/${props.trainingPlanName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the training-plan resource.
	 */
	static isValidTrainingPlanArn(arn: string): boolean {
		return TrainingPlanArnRegex.test(arn);
	}

	/**
	 * Parses a training-plan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTrainingPlanArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		trainingPlanName: string;
	} {
		const match = TrainingPlanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid training-plan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			trainingPlanName: match.groups!.trainingPlanName,
		};
	}

	/**
	 * Builds an ARN for the transform-job resource.
	 */
	static transformJob(props: {
		/** The TransformJobName component of the ARN. */
		readonly transformJobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:transform-job/${props.transformJobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the transform-job resource.
	 */
	static isValidTransformJobArn(arn: string): boolean {
		return TransformJobArnRegex.test(arn);
	}

	/**
	 * Parses a transform-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTransformJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		transformJobName: string;
	} {
		const match = TransformJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid transform-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			transformJobName: match.groups!.transformJobName,
		};
	}

	/**
	 * Builds an ARN for the user-profile resource.
	 */
	static userProfile(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** The UserProfileName component of the ARN. */
		readonly userProfileName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:user-profile/${props.domainId}/${props.userProfileName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the user-profile resource.
	 */
	static isValidUserProfileArn(arn: string): boolean {
		return UserProfileArnRegex.test(arn);
	}

	/**
	 * Parses a user-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		userProfileName: string;
	} {
		const match = UserProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid user-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			userProfileName: match.groups!.userProfileName,
		};
	}

	/**
	 * Builds an ARN for the workforce resource.
	 */
	static workforce(props: {
		/** The WorkforceName component of the ARN. */
		readonly workforceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:workforce/${props.workforceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workforce resource.
	 */
	static isValidWorkforceArn(arn: string): boolean {
		return WorkforceArnRegex.test(arn);
	}

	/**
	 * Parses a workforce ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkforceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workforceName: string;
	} {
		const match = WorkforceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workforce ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workforceName: match.groups!.workforceName,
		};
	}

	/**
	 * Builds an ARN for the workteam resource.
	 */
	static workteam(props: {
		/** The WorkteamName component of the ARN. */
		readonly workteamName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker:${props.region ?? "*"}:${props.account ?? "*"}:workteam/${props.workteamName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workteam resource.
	 */
	static isValidWorkteamArn(arn: string): boolean {
		return WorkteamArnRegex.test(arn);
	}

	/**
	 * Parses a workteam ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkteamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workteamName: string;
	} {
		const match = WorkteamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workteam ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workteamName: match.groups!.workteamName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for sagemaker.
 */
export class SageMakerOperations {
	/** IAM actions required for the AddAssociation API call. */
	static readonly ADD_ASSOCIATION: string[] = ["sagemaker:AddAssociation"];
	/** IAM actions required for the AddTags API call. */
	static readonly ADD_TAGS: string[] = ["sagemaker:AddTags"];
	/** IAM actions required for the AssociateTrialComponent API call. */
	static readonly ASSOCIATE_TRIAL_COMPONENT: string[] = [
		"sagemaker:AssociateTrialComponent",
	];
	/** IAM actions required for the AttachClusterNodeVolume API call. */
	static readonly ATTACH_CLUSTER_NODE_VOLUME: string[] = [
		"sagemaker:AttachClusterNodeVolume",
	];
	/** IAM actions required for the BatchAddClusterNodes API call. */
	static readonly BATCH_ADD_CLUSTER_NODES: string[] = [
		"sagemaker:BatchAddClusterNodes",
	];
	/** IAM actions required for the BatchDeleteClusterNodes API call. */
	static readonly BATCH_DELETE_CLUSTER_NODES: string[] = [
		"sagemaker:BatchDeleteClusterNodes",
	];
	/** IAM actions required for the BatchDescribeModelPackage API call. */
	static readonly BATCH_DESCRIBE_MODEL_PACKAGE: string[] = [
		"sagemaker:BatchDescribeModelPackage",
	];
	/** IAM actions required for the BatchGetMetrics API call. */
	static readonly BATCH_GET_METRICS: string[] = ["sagemaker:BatchGetMetrics"];
	/** IAM actions required for the BatchGetRecord API call. */
	static readonly BATCH_GET_RECORD: string[] = ["sagemaker:BatchGetRecord"];
	/** IAM actions required for the BatchPutMetrics API call. */
	static readonly BATCH_PUT_METRICS: string[] = ["sagemaker:BatchPutMetrics"];
	/** IAM actions required for the BatchRebootClusterNodes API call. */
	static readonly BATCH_REBOOT_CLUSTER_NODES: string[] = [];
	/** IAM actions required for the BatchReplaceClusterNodes API call. */
	static readonly BATCH_REPLACE_CLUSTER_NODES: string[] = [];
	/** IAM actions required for the BatchWriteRecord API call. */
	static readonly BATCH_WRITE_RECORD: string[] = [
		"sagemaker:BatchWriteRecord",
		"sagemaker:PutRecord",
	];
	/** IAM actions required for the CompleteRollout API call. */
	static readonly COMPLETE_ROLLOUT: string[] = [
		"sagemaker:CallWithBearerToken",
		"sagemaker:CompleteRollout",
	];
	/** IAM actions required for the CreateAIBenchmarkJob API call. */
	static readonly CREATE_AI_BENCHMARK_JOB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAIBenchmarkJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAIRecommendationJob API call. */
	static readonly CREATE_AI_RECOMMENDATION_JOB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAIRecommendationJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAIWorkloadConfig API call. */
	static readonly CREATE_AI_WORKLOAD_CONFIG: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAIWorkloadConfig",
	];
	/** IAM actions required for the CreateAction API call. */
	static readonly CREATE_ACTION: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAction",
	];
	/** IAM actions required for the CreateAlgorithm API call. */
	static readonly CREATE_ALGORITHM: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAlgorithm",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateApp API call. */
	static readonly CREATE_APP: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateApp",
	];
	/** IAM actions required for the CreateAppImageConfig API call. */
	static readonly CREATE_APP_IMAGE_CONFIG: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAppImageConfig",
	];
	/** IAM actions required for the CreateArtifact API call. */
	static readonly CREATE_ARTIFACT: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateArtifact",
	];
	/** IAM actions required for the CreateAutoMLJob API call. */
	static readonly CREATE_AUTO_ML_JOB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAutoMLJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAutoMLJobV2 API call. */
	static readonly CREATE_AUTO_ML_JOB_V2: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAutoMLJobV2",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateCluster",
		"iam:PassRole",
		"sagemaker:UpdateClusterSoftware",
	];
	/** IAM actions required for the CreateClusterSchedulerConfig API call. */
	static readonly CREATE_CLUSTER_SCHEDULER_CONFIG: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateClusterSchedulerConfig",
	];
	/** IAM actions required for the CreateCodeRepository API call. */
	static readonly CREATE_CODE_REPOSITORY: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateCodeRepository",
	];
	/** IAM actions required for the CreateCompilationJob API call. */
	static readonly CREATE_COMPILATION_JOB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateCompilationJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateComputeQuota API call. */
	static readonly CREATE_COMPUTE_QUOTA: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateComputeQuota",
	];
	/** IAM actions required for the CreateContext API call. */
	static readonly CREATE_CONTEXT: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateContext",
	];
	/** IAM actions required for the CreateDataQualityJobDefinition API call. */
	static readonly CREATE_DATA_QUALITY_JOB_DEFINITION: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateDataQualityJobDefinition",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDeviceFleet API call. */
	static readonly CREATE_DEVICE_FLEET: string[] = [];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CREATE_DOMAIN: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateDomain",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateEdgeDeploymentPlan API call. */
	static readonly CREATE_EDGE_DEPLOYMENT_PLAN: string[] = [];
	/** IAM actions required for the CreateEdgeDeploymentStage API call. */
	static readonly CREATE_EDGE_DEPLOYMENT_STAGE: string[] = [];
	/** IAM actions required for the CreateEdgePackagingJob API call. */
	static readonly CREATE_EDGE_PACKAGING_JOB: string[] = [];
	/** IAM actions required for the CreateEndpoint API call. */
	static readonly CREATE_ENDPOINT: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateEndpoint",
	];
	/** IAM actions required for the CreateEndpointConfig API call. */
	static readonly CREATE_ENDPOINT_CONFIG: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateEndpointConfig",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateExperiment API call. */
	static readonly CREATE_EXPERIMENT: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateExperiment",
	];
	/** IAM actions required for the CreateFeatureGroup API call. */
	static readonly CREATE_FEATURE_GROUP: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateFeatureGroup",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateFlowDefinition API call. */
	static readonly CREATE_FLOW_DEFINITION: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateFlowDefinition",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateHub API call. */
	static readonly CREATE_HUB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateHub",
	];
	/** IAM actions required for the CreateHubContentPresignedUrls API call. */
	static readonly CREATE_HUB_CONTENT_PRESIGNED_URLS: string[] = [
		"sagemaker:CreateHubContentPresignedUrls",
	];
	/** IAM actions required for the CreateHubContentReference API call. */
	static readonly CREATE_HUB_CONTENT_REFERENCE: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateHubContentReference",
	];
	/** IAM actions required for the CreateHumanTaskUi API call. */
	static readonly CREATE_HUMAN_TASK_UI: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateHumanTaskUi",
	];
	/** IAM actions required for the CreateHyperParameterTuningJob API call. */
	static readonly CREATE_HYPER_PARAMETER_TUNING_JOB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateHyperParameterTuningJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateImage API call. */
	static readonly CREATE_IMAGE: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateImage",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateImageVersion API call. */
	static readonly CREATE_IMAGE_VERSION: string[] = [
		"sagemaker:CreateImageVersion",
	];
	/** IAM actions required for the CreateInferenceComponent API call. */
	static readonly CREATE_INFERENCE_COMPONENT: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateInferenceComponent",
	];
	/** IAM actions required for the CreateInferenceExperiment API call. */
	static readonly CREATE_INFERENCE_EXPERIMENT: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateInferenceExperiment",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateInferenceRecommendationsJob API call. */
	static readonly CREATE_INFERENCE_RECOMMENDATIONS_JOB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateInferenceRecommendationsJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CREATE_JOB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateJob",
		"sagemaker:ImportHubContent",
		"iam:PassRole",
		"sagemaker:UpdateHubContent",
	];
	/** IAM actions required for the CreateLabelingJob API call. */
	static readonly CREATE_LABELING_JOB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateLabelingJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateMlflowApp API call. */
	static readonly CREATE_MLFLOW_APP: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateMlflowApp",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateMlflowTrackingServer API call. */
	static readonly CREATE_MLFLOW_TRACKING_SERVER: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateMlflowTrackingServer",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateModel API call. */
	static readonly CREATE_MODEL: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModel",
		"sagemaker:DeployHubModel",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateModelBiasJobDefinition API call. */
	static readonly CREATE_MODEL_BIAS_JOB_DEFINITION: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModelBiasJobDefinition",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateModelCard API call. */
	static readonly CREATE_MODEL_CARD: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModelCard",
	];
	/** IAM actions required for the CreateModelCardExportJob API call. */
	static readonly CREATE_MODEL_CARD_EXPORT_JOB: string[] = [
		"sagemaker:CreateModelCardExportJob",
	];
	/** IAM actions required for the CreateModelExplainabilityJobDefinition API call. */
	static readonly CREATE_MODEL_EXPLAINABILITY_JOB_DEFINITION: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModelExplainabilityJobDefinition",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateModelPackage API call. */
	static readonly CREATE_MODEL_PACKAGE: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModelPackage",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateModelPackageGroup API call. */
	static readonly CREATE_MODEL_PACKAGE_GROUP: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModelPackageGroup",
	];
	/** IAM actions required for the CreateModelQualityJobDefinition API call. */
	static readonly CREATE_MODEL_QUALITY_JOB_DEFINITION: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModelQualityJobDefinition",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateMonitoringSchedule API call. */
	static readonly CREATE_MONITORING_SCHEDULE: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateMonitoringSchedule",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateNotebookInstance API call. */
	static readonly CREATE_NOTEBOOK_INSTANCE: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateNotebookInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateNotebookInstanceLifecycleConfig API call. */
	static readonly CREATE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateNotebookInstanceLifecycleConfig",
	];
	/** IAM actions required for the CreateOptimizationJob API call. */
	static readonly CREATE_OPTIMIZATION_JOB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateOptimizationJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreatePartnerApp API call. */
	static readonly CREATE_PARTNER_APP: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreatePartnerApp",
		"iam:PassRole",
	];
	/** IAM actions required for the CreatePartnerAppPresignedUrl API call. */
	static readonly CREATE_PARTNER_APP_PRESIGNED_URL: string[] = [
		"sagemaker:CreatePartnerAppPresignedUrl",
	];
	/** IAM actions required for the CreatePipeline API call. */
	static readonly CREATE_PIPELINE: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreatePipeline",
		"iam:PassRole",
	];
	/** IAM actions required for the CreatePresignedDomainUrl API call. */
	static readonly CREATE_PRESIGNED_DOMAIN_URL: string[] = [
		"sagemaker:CreatePresignedDomainUrl",
	];
	/** IAM actions required for the CreatePresignedMlflowAppUrl API call. */
	static readonly CREATE_PRESIGNED_MLFLOW_APP_URL: string[] = [
		"sagemaker:CreatePresignedMlflowAppUrl",
	];
	/** IAM actions required for the CreatePresignedMlflowTrackingServerUrl API call. */
	static readonly CREATE_PRESIGNED_MLFLOW_TRACKING_SERVER_URL: string[] = [
		"sagemaker:CreatePresignedMlflowTrackingServerUrl",
	];
	/** IAM actions required for the CreatePresignedNotebookInstanceUrl API call. */
	static readonly CREATE_PRESIGNED_NOTEBOOK_INSTANCE_URL: string[] = [
		"sagemaker:CreatePresignedNotebookInstanceUrl",
	];
	/** IAM actions required for the CreateProcessingJob API call. */
	static readonly CREATE_PROCESSING_JOB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateProcessingJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateProject API call. */
	static readonly CREATE_PROJECT: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateProject",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateSpace API call. */
	static readonly CREATE_SPACE: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateSpace",
	];
	/** IAM actions required for the CreateStudioLifecycleConfig API call. */
	static readonly CREATE_STUDIO_LIFECYCLE_CONFIG: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateStudioLifecycleConfig",
	];
	/** IAM actions required for the CreateTrainingJob API call. */
	static readonly CREATE_TRAINING_JOB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateTrainingJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateTrainingPlan API call. */
	static readonly CREATE_TRAINING_PLAN: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateReservedCapacity",
		"sagemaker:CreateTrainingPlan",
	];
	/** IAM actions required for the CreateTransformJob API call. */
	static readonly CREATE_TRANSFORM_JOB: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateTransformJob",
	];
	/** IAM actions required for the CreateTrial API call. */
	static readonly CREATE_TRIAL: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateTrial",
	];
	/** IAM actions required for the CreateTrialComponent API call. */
	static readonly CREATE_TRIAL_COMPONENT: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateTrialComponent",
	];
	/** IAM actions required for the CreateUserProfile API call. */
	static readonly CREATE_USER_PROFILE: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateUserProfile",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateWorkforce API call. */
	static readonly CREATE_WORKFORCE: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateWorkforce",
	];
	/** IAM actions required for the CreateWorkteam API call. */
	static readonly CREATE_WORKTEAM: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateWorkteam",
	];
	/** IAM actions required for the DeleteAIBenchmarkJob API call. */
	static readonly DELETE_AI_BENCHMARK_JOB: string[] = [
		"sagemaker:DeleteAIBenchmarkJob",
	];
	/** IAM actions required for the DeleteAIRecommendationJob API call. */
	static readonly DELETE_AI_RECOMMENDATION_JOB: string[] = [
		"sagemaker:DeleteAIRecommendationJob",
	];
	/** IAM actions required for the DeleteAIWorkloadConfig API call. */
	static readonly DELETE_AI_WORKLOAD_CONFIG: string[] = [
		"sagemaker:DeleteAIWorkloadConfig",
	];
	/** IAM actions required for the DeleteAction API call. */
	static readonly DELETE_ACTION: string[] = ["sagemaker:DeleteAction"];
	/** IAM actions required for the DeleteAlgorithm API call. */
	static readonly DELETE_ALGORITHM: string[] = ["sagemaker:DeleteAlgorithm"];
	/** IAM actions required for the DeleteApp API call. */
	static readonly DELETE_APP: string[] = ["sagemaker:DeleteApp"];
	/** IAM actions required for the DeleteAppImageConfig API call. */
	static readonly DELETE_APP_IMAGE_CONFIG: string[] = [
		"sagemaker:DeleteAppImageConfig",
	];
	/** IAM actions required for the DeleteArtifact API call. */
	static readonly DELETE_ARTIFACT: string[] = ["sagemaker:DeleteArtifact"];
	/** IAM actions required for the DeleteAssociation API call. */
	static readonly DELETE_ASSOCIATION: string[] = [
		"sagemaker:DeleteAssociation",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = ["sagemaker:DeleteCluster"];
	/** IAM actions required for the DeleteClusterSchedulerConfig API call. */
	static readonly DELETE_CLUSTER_SCHEDULER_CONFIG: string[] = [
		"sagemaker:DeleteClusterSchedulerConfig",
	];
	/** IAM actions required for the DeleteCodeRepository API call. */
	static readonly DELETE_CODE_REPOSITORY: string[] = [
		"sagemaker:DeleteCodeRepository",
	];
	/** IAM actions required for the DeleteCompilationJob API call. */
	static readonly DELETE_COMPILATION_JOB: string[] = [
		"sagemaker:DeleteCompilationJob",
	];
	/** IAM actions required for the DeleteComputeQuota API call. */
	static readonly DELETE_COMPUTE_QUOTA: string[] = [
		"sagemaker:DeleteComputeQuota",
	];
	/** IAM actions required for the DeleteContext API call. */
	static readonly DELETE_CONTEXT: string[] = ["sagemaker:DeleteContext"];
	/** IAM actions required for the DeleteDataQualityJobDefinition API call. */
	static readonly DELETE_DATA_QUALITY_JOB_DEFINITION: string[] = [
		"sagemaker:DeleteDataQualityJobDefinition",
	];
	/** IAM actions required for the DeleteDeviceFleet API call. */
	static readonly DELETE_DEVICE_FLEET: string[] = [];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DELETE_DOMAIN: string[] = ["sagemaker:DeleteDomain"];
	/** IAM actions required for the DeleteEdgeDeploymentPlan API call. */
	static readonly DELETE_EDGE_DEPLOYMENT_PLAN: string[] = [];
	/** IAM actions required for the DeleteEdgeDeploymentStage API call. */
	static readonly DELETE_EDGE_DEPLOYMENT_STAGE: string[] = [];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DELETE_ENDPOINT: string[] = ["sagemaker:DeleteEndpoint"];
	/** IAM actions required for the DeleteEndpointConfig API call. */
	static readonly DELETE_ENDPOINT_CONFIG: string[] = [
		"sagemaker:DeleteEndpointConfig",
	];
	/** IAM actions required for the DeleteExperiment API call. */
	static readonly DELETE_EXPERIMENT: string[] = ["sagemaker:DeleteExperiment"];
	/** IAM actions required for the DeleteFeatureGroup API call. */
	static readonly DELETE_FEATURE_GROUP: string[] = [
		"sagemaker:DeleteFeatureGroup",
	];
	/** IAM actions required for the DeleteFlowDefinition API call. */
	static readonly DELETE_FLOW_DEFINITION: string[] = [
		"sagemaker:DeleteFlowDefinition",
	];
	/** IAM actions required for the DeleteHub API call. */
	static readonly DELETE_HUB: string[] = ["sagemaker:DeleteHub"];
	/** IAM actions required for the DeleteHubContent API call. */
	static readonly DELETE_HUB_CONTENT: string[] = ["sagemaker:DeleteHubContent"];
	/** IAM actions required for the DeleteHubContentReference API call. */
	static readonly DELETE_HUB_CONTENT_REFERENCE: string[] = [
		"sagemaker:DeleteHubContentReference",
	];
	/** IAM actions required for the DeleteHumanLoop API call. */
	static readonly DELETE_HUMAN_LOOP: string[] = ["sagemaker:DeleteHumanLoop"];
	/** IAM actions required for the DeleteHumanTaskUi API call. */
	static readonly DELETE_HUMAN_TASK_UI: string[] = [
		"sagemaker:DeleteHumanTaskUi",
	];
	/** IAM actions required for the DeleteHyperParameterTuningJob API call. */
	static readonly DELETE_HYPER_PARAMETER_TUNING_JOB: string[] = [
		"sagemaker:DeleteHyperParameterTuningJob",
	];
	/** IAM actions required for the DeleteImage API call. */
	static readonly DELETE_IMAGE: string[] = ["sagemaker:DeleteImage"];
	/** IAM actions required for the DeleteImageVersion API call. */
	static readonly DELETE_IMAGE_VERSION: string[] = [
		"sagemaker:DeleteImageVersion",
	];
	/** IAM actions required for the DeleteInferenceComponent API call. */
	static readonly DELETE_INFERENCE_COMPONENT: string[] = [
		"sagemaker:DeleteInferenceComponent",
	];
	/** IAM actions required for the DeleteInferenceExperiment API call. */
	static readonly DELETE_INFERENCE_EXPERIMENT: string[] = [
		"sagemaker:DeleteInferenceExperiment",
	];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DELETE_JOB: string[] = ["sagemaker:DeleteJob"];
	/** IAM actions required for the DeleteMlflowApp API call. */
	static readonly DELETE_MLFLOW_APP: string[] = ["sagemaker:DeleteMlflowApp"];
	/** IAM actions required for the DeleteMlflowTrackingServer API call. */
	static readonly DELETE_MLFLOW_TRACKING_SERVER: string[] = [
		"sagemaker:DeleteMlflowTrackingServer",
	];
	/** IAM actions required for the DeleteModel API call. */
	static readonly DELETE_MODEL: string[] = ["sagemaker:DeleteModel"];
	/** IAM actions required for the DeleteModelBiasJobDefinition API call. */
	static readonly DELETE_MODEL_BIAS_JOB_DEFINITION: string[] = [
		"sagemaker:DeleteModelBiasJobDefinition",
	];
	/** IAM actions required for the DeleteModelCard API call. */
	static readonly DELETE_MODEL_CARD: string[] = ["sagemaker:DeleteModelCard"];
	/** IAM actions required for the DeleteModelExplainabilityJobDefinition API call. */
	static readonly DELETE_MODEL_EXPLAINABILITY_JOB_DEFINITION: string[] = [
		"sagemaker:DeleteModelExplainabilityJobDefinition",
	];
	/** IAM actions required for the DeleteModelPackage API call. */
	static readonly DELETE_MODEL_PACKAGE: string[] = [
		"sagemaker:DeleteModelPackage",
	];
	/** IAM actions required for the DeleteModelPackageGroup API call. */
	static readonly DELETE_MODEL_PACKAGE_GROUP: string[] = [
		"sagemaker:DeleteModelPackageGroup",
	];
	/** IAM actions required for the DeleteModelPackageGroupPolicy API call. */
	static readonly DELETE_MODEL_PACKAGE_GROUP_POLICY: string[] = [
		"sagemaker:DeleteModelPackageGroupPolicy",
	];
	/** IAM actions required for the DeleteModelQualityJobDefinition API call. */
	static readonly DELETE_MODEL_QUALITY_JOB_DEFINITION: string[] = [
		"sagemaker:DeleteModelQualityJobDefinition",
	];
	/** IAM actions required for the DeleteMonitoringSchedule API call. */
	static readonly DELETE_MONITORING_SCHEDULE: string[] = [
		"sagemaker:DeleteMonitoringSchedule",
	];
	/** IAM actions required for the DeleteNotebookInstance API call. */
	static readonly DELETE_NOTEBOOK_INSTANCE: string[] = [
		"sagemaker:DeleteNotebookInstance",
	];
	/** IAM actions required for the DeleteNotebookInstanceLifecycleConfig API call. */
	static readonly DELETE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG: string[] = [
		"sagemaker:DeleteNotebookInstanceLifecycleConfig",
	];
	/** IAM actions required for the DeleteOptimizationJob API call. */
	static readonly DELETE_OPTIMIZATION_JOB: string[] = [
		"sagemaker:DeleteOptimizationJob",
	];
	/** IAM actions required for the DeletePartnerApp API call. */
	static readonly DELETE_PARTNER_APP: string[] = ["sagemaker:DeletePartnerApp"];
	/** IAM actions required for the DeletePipeline API call. */
	static readonly DELETE_PIPELINE: string[] = ["sagemaker:DeletePipeline"];
	/** IAM actions required for the DeleteProcessingJob API call. */
	static readonly DELETE_PROCESSING_JOB: string[] = [
		"sagemaker:DeleteProcessingJob",
	];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DELETE_PROJECT: string[] = ["sagemaker:DeleteProject"];
	/** IAM actions required for the DeleteRecord API call. */
	static readonly DELETE_RECORD: string[] = ["sagemaker:DeleteRecord"];
	/** IAM actions required for the DeleteSpace API call. */
	static readonly DELETE_SPACE: string[] = ["sagemaker:DeleteSpace"];
	/** IAM actions required for the DeleteStudioLifecycleConfig API call. */
	static readonly DELETE_STUDIO_LIFECYCLE_CONFIG: string[] = [
		"sagemaker:DeleteStudioLifecycleConfig",
	];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DELETE_TAGS: string[] = ["sagemaker:DeleteTags"];
	/** IAM actions required for the DeleteTrainingJob API call. */
	static readonly DELETE_TRAINING_JOB: string[] = [
		"sagemaker:DeleteTrainingJob",
	];
	/** IAM actions required for the DeleteTrial API call. */
	static readonly DELETE_TRIAL: string[] = ["sagemaker:DeleteTrial"];
	/** IAM actions required for the DeleteTrialComponent API call. */
	static readonly DELETE_TRIAL_COMPONENT: string[] = [
		"sagemaker:DeleteTrialComponent",
	];
	/** IAM actions required for the DeleteUserProfile API call. */
	static readonly DELETE_USER_PROFILE: string[] = [
		"sagemaker:DeleteUserProfile",
	];
	/** IAM actions required for the DeleteWorkforce API call. */
	static readonly DELETE_WORKFORCE: string[] = ["sagemaker:DeleteWorkforce"];
	/** IAM actions required for the DeleteWorkteam API call. */
	static readonly DELETE_WORKTEAM: string[] = ["sagemaker:DeleteWorkteam"];
	/** IAM actions required for the DeregisterDevices API call. */
	static readonly DEREGISTER_DEVICES: string[] = [];
	/** IAM actions required for the DescribeAIBenchmarkJob API call. */
	static readonly DESCRIBE_AI_BENCHMARK_JOB: string[] = [
		"sagemaker:DescribeAIBenchmarkJob",
	];
	/** IAM actions required for the DescribeAIRecommendationJob API call. */
	static readonly DESCRIBE_AI_RECOMMENDATION_JOB: string[] = [
		"sagemaker:DescribeAIRecommendationJob",
	];
	/** IAM actions required for the DescribeAIWorkloadConfig API call. */
	static readonly DESCRIBE_AI_WORKLOAD_CONFIG: string[] = [
		"sagemaker:DescribeAIWorkloadConfig",
	];
	/** IAM actions required for the DescribeAction API call. */
	static readonly DESCRIBE_ACTION: string[] = ["sagemaker:DescribeAction"];
	/** IAM actions required for the DescribeAlgorithm API call. */
	static readonly DESCRIBE_ALGORITHM: string[] = [
		"sagemaker:DescribeAlgorithm",
	];
	/** IAM actions required for the DescribeApp API call. */
	static readonly DESCRIBE_APP: string[] = ["sagemaker:DescribeApp"];
	/** IAM actions required for the DescribeAppImageConfig API call. */
	static readonly DESCRIBE_APP_IMAGE_CONFIG: string[] = [
		"sagemaker:DescribeAppImageConfig",
	];
	/** IAM actions required for the DescribeArtifact API call. */
	static readonly DESCRIBE_ARTIFACT: string[] = ["sagemaker:DescribeArtifact"];
	/** IAM actions required for the DescribeAutoMLJob API call. */
	static readonly DESCRIBE_AUTO_ML_JOB: string[] = [
		"sagemaker:DescribeAutoMLJob",
	];
	/** IAM actions required for the DescribeAutoMLJobV2 API call. */
	static readonly DESCRIBE_AUTO_ML_JOB_V2: string[] = [
		"sagemaker:DescribeAutoMLJobV2",
	];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DESCRIBE_CLUSTER: string[] = ["sagemaker:DescribeCluster"];
	/** IAM actions required for the DescribeClusterEvent API call. */
	static readonly DESCRIBE_CLUSTER_EVENT: string[] = [
		"sagemaker:DescribeClusterEvent",
	];
	/** IAM actions required for the DescribeClusterNode API call. */
	static readonly DESCRIBE_CLUSTER_NODE: string[] = [
		"sagemaker:DescribeClusterNode",
	];
	/** IAM actions required for the DescribeClusterSchedulerConfig API call. */
	static readonly DESCRIBE_CLUSTER_SCHEDULER_CONFIG: string[] = [
		"sagemaker:DescribeClusterSchedulerConfig",
	];
	/** IAM actions required for the DescribeCodeRepository API call. */
	static readonly DESCRIBE_CODE_REPOSITORY: string[] = [
		"sagemaker:DescribeCodeRepository",
	];
	/** IAM actions required for the DescribeCompilationJob API call. */
	static readonly DESCRIBE_COMPILATION_JOB: string[] = [
		"sagemaker:DescribeCompilationJob",
	];
	/** IAM actions required for the DescribeComputeQuota API call. */
	static readonly DESCRIBE_COMPUTE_QUOTA: string[] = [
		"sagemaker:DescribeComputeQuota",
	];
	/** IAM actions required for the DescribeContext API call. */
	static readonly DESCRIBE_CONTEXT: string[] = ["sagemaker:DescribeContext"];
	/** IAM actions required for the DescribeDataQualityJobDefinition API call. */
	static readonly DESCRIBE_DATA_QUALITY_JOB_DEFINITION: string[] = [
		"sagemaker:DescribeDataQualityJobDefinition",
	];
	/** IAM actions required for the DescribeDevice API call. */
	static readonly DESCRIBE_DEVICE: string[] = [];
	/** IAM actions required for the DescribeDeviceFleet API call. */
	static readonly DESCRIBE_DEVICE_FLEET: string[] = [];
	/** IAM actions required for the DescribeDomain API call. */
	static readonly DESCRIBE_DOMAIN: string[] = ["sagemaker:DescribeDomain"];
	/** IAM actions required for the DescribeEdgeDeploymentPlan API call. */
	static readonly DESCRIBE_EDGE_DEPLOYMENT_PLAN: string[] = [];
	/** IAM actions required for the DescribeEdgePackagingJob API call. */
	static readonly DESCRIBE_EDGE_PACKAGING_JOB: string[] = [];
	/** IAM actions required for the DescribeEndpoint API call. */
	static readonly DESCRIBE_ENDPOINT: string[] = ["sagemaker:DescribeEndpoint"];
	/** IAM actions required for the DescribeEndpointConfig API call. */
	static readonly DESCRIBE_ENDPOINT_CONFIG: string[] = [
		"sagemaker:DescribeEndpointConfig",
	];
	/** IAM actions required for the DescribeExperiment API call. */
	static readonly DESCRIBE_EXPERIMENT: string[] = [
		"sagemaker:DescribeExperiment",
	];
	/** IAM actions required for the DescribeFeatureGroup API call. */
	static readonly DESCRIBE_FEATURE_GROUP: string[] = [
		"sagemaker:DescribeFeatureGroup",
	];
	/** IAM actions required for the DescribeFeatureMetadata API call. */
	static readonly DESCRIBE_FEATURE_METADATA: string[] = [
		"sagemaker:DescribeFeatureMetadata",
	];
	/** IAM actions required for the DescribeFlowDefinition API call. */
	static readonly DESCRIBE_FLOW_DEFINITION: string[] = [
		"sagemaker:DescribeFlowDefinition",
	];
	/** IAM actions required for the DescribeHub API call. */
	static readonly DESCRIBE_HUB: string[] = ["sagemaker:DescribeHub"];
	/** IAM actions required for the DescribeHubContent API call. */
	static readonly DESCRIBE_HUB_CONTENT: string[] = [
		"sagemaker:DescribeHubContent",
	];
	/** IAM actions required for the DescribeHumanLoop API call. */
	static readonly DESCRIBE_HUMAN_LOOP: string[] = [
		"sagemaker:DescribeHumanLoop",
	];
	/** IAM actions required for the DescribeHumanTaskUi API call. */
	static readonly DESCRIBE_HUMAN_TASK_UI: string[] = [
		"sagemaker:DescribeHumanTaskUi",
	];
	/** IAM actions required for the DescribeHyperParameterTuningJob API call. */
	static readonly DESCRIBE_HYPER_PARAMETER_TUNING_JOB: string[] = [
		"sagemaker:DescribeHyperParameterTuningJob",
	];
	/** IAM actions required for the DescribeImage API call. */
	static readonly DESCRIBE_IMAGE: string[] = ["sagemaker:DescribeImage"];
	/** IAM actions required for the DescribeImageVersion API call. */
	static readonly DESCRIBE_IMAGE_VERSION: string[] = [
		"sagemaker:DescribeImageVersion",
	];
	/** IAM actions required for the DescribeInferenceComponent API call. */
	static readonly DESCRIBE_INFERENCE_COMPONENT: string[] = [
		"sagemaker:DescribeInferenceComponent",
	];
	/** IAM actions required for the DescribeInferenceExperiment API call. */
	static readonly DESCRIBE_INFERENCE_EXPERIMENT: string[] = [
		"sagemaker:DescribeInferenceExperiment",
	];
	/** IAM actions required for the DescribeInferenceRecommendationsJob API call. */
	static readonly DESCRIBE_INFERENCE_RECOMMENDATIONS_JOB: string[] = [
		"sagemaker:DescribeInferenceRecommendationsJob",
	];
	/** IAM actions required for the DescribeJob API call. */
	static readonly DESCRIBE_JOB: string[] = ["sagemaker:DescribeJob"];
	/** IAM actions required for the DescribeJobSchemaVersion API call. */
	static readonly DESCRIBE_JOB_SCHEMA_VERSION: string[] = [
		"sagemaker:DescribeJobSchemaVersion",
	];
	/** IAM actions required for the DescribeLabelingJob API call. */
	static readonly DESCRIBE_LABELING_JOB: string[] = [
		"sagemaker:DescribeLabelingJob",
	];
	/** IAM actions required for the DescribeLineageGroup API call. */
	static readonly DESCRIBE_LINEAGE_GROUP: string[] = [
		"sagemaker:DescribeLineageGroup",
	];
	/** IAM actions required for the DescribeMlflowApp API call. */
	static readonly DESCRIBE_MLFLOW_APP: string[] = [
		"sagemaker:DescribeMlflowApp",
	];
	/** IAM actions required for the DescribeMlflowTrackingServer API call. */
	static readonly DESCRIBE_MLFLOW_TRACKING_SERVER: string[] = [
		"sagemaker:DescribeMlflowTrackingServer",
	];
	/** IAM actions required for the DescribeModel API call. */
	static readonly DESCRIBE_MODEL: string[] = ["sagemaker:DescribeModel"];
	/** IAM actions required for the DescribeModelBiasJobDefinition API call. */
	static readonly DESCRIBE_MODEL_BIAS_JOB_DEFINITION: string[] = [
		"sagemaker:DescribeModelBiasJobDefinition",
	];
	/** IAM actions required for the DescribeModelCard API call. */
	static readonly DESCRIBE_MODEL_CARD: string[] = [
		"sagemaker:DescribeModelCard",
	];
	/** IAM actions required for the DescribeModelCardExportJob API call. */
	static readonly DESCRIBE_MODEL_CARD_EXPORT_JOB: string[] = [
		"sagemaker:DescribeModelCardExportJob",
	];
	/** IAM actions required for the DescribeModelExplainabilityJobDefinition API call. */
	static readonly DESCRIBE_MODEL_EXPLAINABILITY_JOB_DEFINITION: string[] = [
		"sagemaker:DescribeModelExplainabilityJobDefinition",
	];
	/** IAM actions required for the DescribeModelPackage API call. */
	static readonly DESCRIBE_MODEL_PACKAGE: string[] = [
		"sagemaker:DescribeModelPackage",
	];
	/** IAM actions required for the DescribeModelPackageGroup API call. */
	static readonly DESCRIBE_MODEL_PACKAGE_GROUP: string[] = [
		"sagemaker:DescribeModelPackageGroup",
	];
	/** IAM actions required for the DescribeModelQualityJobDefinition API call. */
	static readonly DESCRIBE_MODEL_QUALITY_JOB_DEFINITION: string[] = [
		"sagemaker:DescribeModelQualityJobDefinition",
	];
	/** IAM actions required for the DescribeMonitoringSchedule API call. */
	static readonly DESCRIBE_MONITORING_SCHEDULE: string[] = [
		"sagemaker:DescribeMonitoringSchedule",
	];
	/** IAM actions required for the DescribeNotebookInstance API call. */
	static readonly DESCRIBE_NOTEBOOK_INSTANCE: string[] = [
		"sagemaker:DescribeNotebookInstance",
	];
	/** IAM actions required for the DescribeNotebookInstanceLifecycleConfig API call. */
	static readonly DESCRIBE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG: string[] = [
		"sagemaker:DescribeNotebookInstanceLifecycleConfig",
	];
	/** IAM actions required for the DescribeOptimizationJob API call. */
	static readonly DESCRIBE_OPTIMIZATION_JOB: string[] = [
		"sagemaker:DescribeOptimizationJob",
	];
	/** IAM actions required for the DescribePartnerApp API call. */
	static readonly DESCRIBE_PARTNER_APP: string[] = [
		"sagemaker:DescribePartnerApp",
	];
	/** IAM actions required for the DescribePipeline API call. */
	static readonly DESCRIBE_PIPELINE: string[] = ["sagemaker:DescribePipeline"];
	/** IAM actions required for the DescribePipelineDefinitionForExecution API call. */
	static readonly DESCRIBE_PIPELINE_DEFINITION_FOR_EXECUTION: string[] = [
		"sagemaker:DescribePipelineDefinitionForExecution",
	];
	/** IAM actions required for the DescribePipelineExecution API call. */
	static readonly DESCRIBE_PIPELINE_EXECUTION: string[] = [
		"sagemaker:DescribePipelineExecution",
	];
	/** IAM actions required for the DescribeProcessingJob API call. */
	static readonly DESCRIBE_PROCESSING_JOB: string[] = [
		"sagemaker:DescribeProcessingJob",
	];
	/** IAM actions required for the DescribeProject API call. */
	static readonly DESCRIBE_PROJECT: string[] = ["sagemaker:DescribeProject"];
	/** IAM actions required for the DescribeReservedCapacity API call. */
	static readonly DESCRIBE_RESERVED_CAPACITY: string[] = [
		"sagemaker:DescribeReservedCapacity",
	];
	/** IAM actions required for the DescribeSpace API call. */
	static readonly DESCRIBE_SPACE: string[] = ["sagemaker:DescribeSpace"];
	/** IAM actions required for the DescribeStudioLifecycleConfig API call. */
	static readonly DESCRIBE_STUDIO_LIFECYCLE_CONFIG: string[] = [
		"sagemaker:DescribeStudioLifecycleConfig",
	];
	/** IAM actions required for the DescribeSubscribedWorkteam API call. */
	static readonly DESCRIBE_SUBSCRIBED_WORKTEAM: string[] = [
		"sagemaker:DescribeSubscribedWorkteam",
	];
	/** IAM actions required for the DescribeTrainingJob API call. */
	static readonly DESCRIBE_TRAINING_JOB: string[] = [
		"sagemaker:DescribeTrainingJob",
	];
	/** IAM actions required for the DescribeTrainingPlan API call. */
	static readonly DESCRIBE_TRAINING_PLAN: string[] = [
		"sagemaker:DescribeTrainingPlan",
	];
	/** IAM actions required for the DescribeTrainingPlanExtensionHistory API call. */
	static readonly DESCRIBE_TRAINING_PLAN_EXTENSION_HISTORY: string[] = [];
	/** IAM actions required for the DescribeTransformJob API call. */
	static readonly DESCRIBE_TRANSFORM_JOB: string[] = [
		"sagemaker:DescribeTransformJob",
	];
	/** IAM actions required for the DescribeTrial API call. */
	static readonly DESCRIBE_TRIAL: string[] = ["sagemaker:DescribeTrial"];
	/** IAM actions required for the DescribeTrialComponent API call. */
	static readonly DESCRIBE_TRIAL_COMPONENT: string[] = [
		"sagemaker:DescribeTrialComponent",
	];
	/** IAM actions required for the DescribeUserProfile API call. */
	static readonly DESCRIBE_USER_PROFILE: string[] = [
		"sagemaker:DescribeUserProfile",
	];
	/** IAM actions required for the DescribeWorkforce API call. */
	static readonly DESCRIBE_WORKFORCE: string[] = [
		"sagemaker:DescribeWorkforce",
	];
	/** IAM actions required for the DescribeWorkteam API call. */
	static readonly DESCRIBE_WORKTEAM: string[] = ["sagemaker:DescribeWorkteam"];
	/** IAM actions required for the DetachClusterNodeVolume API call. */
	static readonly DETACH_CLUSTER_NODE_VOLUME: string[] = [
		"sagemaker:DetachClusterNodeVolume",
	];
	/** IAM actions required for the DisableSagemakerServicecatalogPortfolio API call. */
	static readonly DISABLE_SAGEMAKER_SERVICECATALOG_PORTFOLIO: string[] = [
		"sagemaker:DisableSagemakerServicecatalogPortfolio",
	];
	/** IAM actions required for the DisassociateTrialComponent API call. */
	static readonly DISASSOCIATE_TRIAL_COMPONENT: string[] = [
		"sagemaker:DisassociateTrialComponent",
	];
	/** IAM actions required for the EnableSagemakerServicecatalogPortfolio API call. */
	static readonly ENABLE_SAGEMAKER_SERVICECATALOG_PORTFOLIO: string[] = [
		"sagemaker:EnableSagemakerServicecatalogPortfolio",
	];
	/** IAM actions required for the ExtendTrainingPlan API call. */
	static readonly EXTEND_TRAINING_PLAN: string[] = [];
	/** IAM actions required for the GetDeployments API call. */
	static readonly GET_DEPLOYMENTS: string[] = [];
	/** IAM actions required for the GetDeviceFleetReport API call. */
	static readonly GET_DEVICE_FLEET_REPORT: string[] = [];
	/** IAM actions required for the GetDeviceRegistration API call. */
	static readonly GET_DEVICE_REGISTRATION: string[] = [];
	/** IAM actions required for the GetLineageGroupPolicy API call. */
	static readonly GET_LINEAGE_GROUP_POLICY: string[] = [
		"sagemaker:GetLineageGroupPolicy",
	];
	/** IAM actions required for the GetModelPackageGroupPolicy API call. */
	static readonly GET_MODEL_PACKAGE_GROUP_POLICY: string[] = [
		"sagemaker:GetModelPackageGroupPolicy",
	];
	/** IAM actions required for the GetRecord API call. */
	static readonly GET_RECORD: string[] = ["sagemaker:GetRecord"];
	/** IAM actions required for the GetSagemakerServicecatalogPortfolioStatus API call. */
	static readonly GET_SAGEMAKER_SERVICECATALOG_PORTFOLIO_STATUS: string[] = [
		"sagemaker:GetSagemakerServicecatalogPortfolioStatus",
	];
	/** IAM actions required for the GetScalingConfigurationRecommendation API call. */
	static readonly GET_SCALING_CONFIGURATION_RECOMMENDATION: string[] = [
		"sagemaker:GetScalingConfigurationRecommendation",
	];
	/** IAM actions required for the GetSearchSuggestions API call. */
	static readonly GET_SEARCH_SUGGESTIONS: string[] = [
		"sagemaker:GetSearchSuggestions",
	];
	/** IAM actions required for the ImportHubContent API call. */
	static readonly IMPORT_HUB_CONTENT: string[] = [
		"sagemaker:AddTags",
		"sagemaker:ImportHubContent",
		"iam:PassRole",
	];
	/** IAM actions required for the InvokeEndpoint API call. */
	static readonly INVOKE_ENDPOINT: string[] = ["sagemaker:InvokeEndpoint"];
	/** IAM actions required for the InvokeEndpointAsync API call. */
	static readonly INVOKE_ENDPOINT_ASYNC: string[] = [
		"sagemaker:InvokeEndpointAsync",
	];
	/** IAM actions required for the InvokeEndpointWithResponseStream API call. */
	static readonly INVOKE_ENDPOINT_WITH_RESPONSE_STREAM: string[] = [
		"sagemaker:CallWithBearerToken",
		"sagemaker:InvokeEndpoint",
	];
	/** IAM actions required for the ListAIBenchmarkJobs API call. */
	static readonly LIST_AI_BENCHMARK_JOBS: string[] = [
		"sagemaker:ListAIBenchmarkJobs",
	];
	/** IAM actions required for the ListAIRecommendationJobs API call. */
	static readonly LIST_AI_RECOMMENDATION_JOBS: string[] = [
		"sagemaker:ListAIRecommendationJobs",
	];
	/** IAM actions required for the ListAIWorkloadConfigs API call. */
	static readonly LIST_AI_WORKLOAD_CONFIGS: string[] = [
		"sagemaker:ListAIWorkloadConfigs",
	];
	/** IAM actions required for the ListActions API call. */
	static readonly LIST_ACTIONS: string[] = ["sagemaker:ListActions"];
	/** IAM actions required for the ListAlgorithms API call. */
	static readonly LIST_ALGORITHMS: string[] = ["sagemaker:ListAlgorithms"];
	/** IAM actions required for the ListAliases API call. */
	static readonly LIST_ALIASES: string[] = ["sagemaker:ListAliases"];
	/** IAM actions required for the ListAppImageConfigs API call. */
	static readonly LIST_APP_IMAGE_CONFIGS: string[] = [
		"sagemaker:ListAppImageConfigs",
	];
	/** IAM actions required for the ListApps API call. */
	static readonly LIST_APPS: string[] = ["sagemaker:ListApps"];
	/** IAM actions required for the ListArtifacts API call. */
	static readonly LIST_ARTIFACTS: string[] = ["sagemaker:ListArtifacts"];
	/** IAM actions required for the ListAssociations API call. */
	static readonly LIST_ASSOCIATIONS: string[] = ["sagemaker:ListAssociations"];
	/** IAM actions required for the ListAutoMLJobs API call. */
	static readonly LIST_AUTO_ML_JOBS: string[] = ["sagemaker:ListAutoMLJobs"];
	/** IAM actions required for the ListCandidatesForAutoMLJob API call. */
	static readonly LIST_CANDIDATES_FOR_AUTO_ML_JOB: string[] = [
		"sagemaker:ListCandidatesForAutoMLJob",
	];
	/** IAM actions required for the ListClusterEvents API call. */
	static readonly LIST_CLUSTER_EVENTS: string[] = [
		"sagemaker:ListClusterEvents",
	];
	/** IAM actions required for the ListClusterNodes API call. */
	static readonly LIST_CLUSTER_NODES: string[] = ["sagemaker:ListClusterNodes"];
	/** IAM actions required for the ListClusterSchedulerConfigs API call. */
	static readonly LIST_CLUSTER_SCHEDULER_CONFIGS: string[] = [
		"sagemaker:ListClusterSchedulerConfigs",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly LIST_CLUSTERS: string[] = ["sagemaker:ListClusters"];
	/** IAM actions required for the ListCodeRepositories API call. */
	static readonly LIST_CODE_REPOSITORIES: string[] = [
		"sagemaker:ListCodeRepositories",
	];
	/** IAM actions required for the ListCompilationJobs API call. */
	static readonly LIST_COMPILATION_JOBS: string[] = [
		"sagemaker:ListCompilationJobs",
	];
	/** IAM actions required for the ListComputeQuotas API call. */
	static readonly LIST_COMPUTE_QUOTAS: string[] = [
		"sagemaker:ListComputeQuotas",
	];
	/** IAM actions required for the ListContexts API call. */
	static readonly LIST_CONTEXTS: string[] = ["sagemaker:ListContexts"];
	/** IAM actions required for the ListDataQualityJobDefinitions API call. */
	static readonly LIST_DATA_QUALITY_JOB_DEFINITIONS: string[] = [
		"sagemaker:ListDataQualityJobDefinitions",
	];
	/** IAM actions required for the ListDeviceFleets API call. */
	static readonly LIST_DEVICE_FLEETS: string[] = [];
	/** IAM actions required for the ListDevices API call. */
	static readonly LIST_DEVICES: string[] = [];
	/** IAM actions required for the ListDomains API call. */
	static readonly LIST_DOMAINS: string[] = ["sagemaker:ListDomains"];
	/** IAM actions required for the ListEdgeDeploymentPlans API call. */
	static readonly LIST_EDGE_DEPLOYMENT_PLANS: string[] = [];
	/** IAM actions required for the ListEdgePackagingJobs API call. */
	static readonly LIST_EDGE_PACKAGING_JOBS: string[] = [];
	/** IAM actions required for the ListEndpointConfigs API call. */
	static readonly LIST_ENDPOINT_CONFIGS: string[] = [
		"sagemaker:ListEndpointConfigs",
	];
	/** IAM actions required for the ListEndpoints API call. */
	static readonly LIST_ENDPOINTS: string[] = ["sagemaker:ListEndpoints"];
	/** IAM actions required for the ListExperiments API call. */
	static readonly LIST_EXPERIMENTS: string[] = ["sagemaker:ListExperiments"];
	/** IAM actions required for the ListFeatureGroups API call. */
	static readonly LIST_FEATURE_GROUPS: string[] = [
		"sagemaker:ListFeatureGroups",
	];
	/** IAM actions required for the ListFlowDefinitions API call. */
	static readonly LIST_FLOW_DEFINITIONS: string[] = [
		"sagemaker:ListFlowDefinitions",
	];
	/** IAM actions required for the ListHubContentVersions API call. */
	static readonly LIST_HUB_CONTENT_VERSIONS: string[] = [
		"sagemaker:ListHubContentVersions",
	];
	/** IAM actions required for the ListHubContents API call. */
	static readonly LIST_HUB_CONTENTS: string[] = ["sagemaker:ListHubContents"];
	/** IAM actions required for the ListHubs API call. */
	static readonly LIST_HUBS: string[] = ["sagemaker:ListHubs"];
	/** IAM actions required for the ListHumanLoops API call. */
	static readonly LIST_HUMAN_LOOPS: string[] = ["sagemaker:ListHumanLoops"];
	/** IAM actions required for the ListHumanTaskUis API call. */
	static readonly LIST_HUMAN_TASK_UIS: string[] = [
		"sagemaker:ListHumanTaskUis",
	];
	/** IAM actions required for the ListHyperParameterTuningJobs API call. */
	static readonly LIST_HYPER_PARAMETER_TUNING_JOBS: string[] = [
		"sagemaker:ListHyperParameterTuningJobs",
	];
	/** IAM actions required for the ListImageVersions API call. */
	static readonly LIST_IMAGE_VERSIONS: string[] = [
		"sagemaker:ListImageVersions",
	];
	/** IAM actions required for the ListImages API call. */
	static readonly LIST_IMAGES: string[] = ["sagemaker:ListImages"];
	/** IAM actions required for the ListInferenceComponents API call. */
	static readonly LIST_INFERENCE_COMPONENTS: string[] = [
		"sagemaker:ListInferenceComponents",
	];
	/** IAM actions required for the ListInferenceExperiments API call. */
	static readonly LIST_INFERENCE_EXPERIMENTS: string[] = [
		"sagemaker:ListInferenceExperiments",
	];
	/** IAM actions required for the ListInferenceRecommendationsJobSteps API call. */
	static readonly LIST_INFERENCE_RECOMMENDATIONS_JOB_STEPS: string[] = [
		"sagemaker:ListInferenceRecommendationsJobSteps",
	];
	/** IAM actions required for the ListInferenceRecommendationsJobs API call. */
	static readonly LIST_INFERENCE_RECOMMENDATIONS_JOBS: string[] = [
		"sagemaker:ListInferenceRecommendationsJobs",
	];
	/** IAM actions required for the ListJobSchemaVersions API call. */
	static readonly LIST_JOB_SCHEMA_VERSIONS: string[] = [
		"sagemaker:ListJobSchemaVersions",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["sagemaker:ListJobs"];
	/** IAM actions required for the ListLabelingJobs API call. */
	static readonly LIST_LABELING_JOBS: string[] = ["sagemaker:ListLabelingJobs"];
	/** IAM actions required for the ListLabelingJobsForWorkteam API call. */
	static readonly LIST_LABELING_JOBS_FOR_WORKTEAM: string[] = [
		"sagemaker:ListLabelingJobsForWorkteam",
	];
	/** IAM actions required for the ListLineageGroups API call. */
	static readonly LIST_LINEAGE_GROUPS: string[] = [
		"sagemaker:ListLineageGroups",
	];
	/** IAM actions required for the ListMlflowApps API call. */
	static readonly LIST_MLFLOW_APPS: string[] = ["sagemaker:ListMlflowApps"];
	/** IAM actions required for the ListMlflowTrackingServers API call. */
	static readonly LIST_MLFLOW_TRACKING_SERVERS: string[] = [
		"sagemaker:ListMlflowTrackingServers",
	];
	/** IAM actions required for the ListModelBiasJobDefinitions API call. */
	static readonly LIST_MODEL_BIAS_JOB_DEFINITIONS: string[] = [
		"sagemaker:ListModelBiasJobDefinitions",
	];
	/** IAM actions required for the ListModelCardExportJobs API call. */
	static readonly LIST_MODEL_CARD_EXPORT_JOBS: string[] = [
		"sagemaker:ListModelCardExportJobs",
	];
	/** IAM actions required for the ListModelCardVersions API call. */
	static readonly LIST_MODEL_CARD_VERSIONS: string[] = [
		"sagemaker:ListModelCardVersions",
	];
	/** IAM actions required for the ListModelCards API call. */
	static readonly LIST_MODEL_CARDS: string[] = ["sagemaker:ListModelCards"];
	/** IAM actions required for the ListModelExplainabilityJobDefinitions API call. */
	static readonly LIST_MODEL_EXPLAINABILITY_JOB_DEFINITIONS: string[] = [
		"sagemaker:ListModelExplainabilityJobDefinitions",
	];
	/** IAM actions required for the ListModelMetadata API call. */
	static readonly LIST_MODEL_METADATA: string[] = [
		"sagemaker:ListModelMetadata",
	];
	/** IAM actions required for the ListModelPackageGroups API call. */
	static readonly LIST_MODEL_PACKAGE_GROUPS: string[] = [
		"sagemaker:ListModelPackageGroups",
	];
	/** IAM actions required for the ListModelPackages API call. */
	static readonly LIST_MODEL_PACKAGES: string[] = [
		"sagemaker:ListModelPackages",
	];
	/** IAM actions required for the ListModelQualityJobDefinitions API call. */
	static readonly LIST_MODEL_QUALITY_JOB_DEFINITIONS: string[] = [
		"sagemaker:ListModelQualityJobDefinitions",
	];
	/** IAM actions required for the ListModels API call. */
	static readonly LIST_MODELS: string[] = ["sagemaker:ListModels"];
	/** IAM actions required for the ListMonitoringAlertHistory API call. */
	static readonly LIST_MONITORING_ALERT_HISTORY: string[] = [
		"sagemaker:ListMonitoringAlertHistory",
	];
	/** IAM actions required for the ListMonitoringAlerts API call. */
	static readonly LIST_MONITORING_ALERTS: string[] = [
		"sagemaker:ListMonitoringAlerts",
	];
	/** IAM actions required for the ListMonitoringExecutions API call. */
	static readonly LIST_MONITORING_EXECUTIONS: string[] = [
		"sagemaker:ListMonitoringExecutions",
	];
	/** IAM actions required for the ListMonitoringSchedules API call. */
	static readonly LIST_MONITORING_SCHEDULES: string[] = [
		"sagemaker:ListMonitoringSchedules",
	];
	/** IAM actions required for the ListNotebookInstanceLifecycleConfigs API call. */
	static readonly LIST_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIGS: string[] = [
		"sagemaker:ListNotebookInstanceLifecycleConfigs",
	];
	/** IAM actions required for the ListNotebookInstances API call. */
	static readonly LIST_NOTEBOOK_INSTANCES: string[] = [
		"sagemaker:ListNotebookInstances",
	];
	/** IAM actions required for the ListOptimizationJobs API call. */
	static readonly LIST_OPTIMIZATION_JOBS: string[] = [
		"sagemaker:ListOptimizationJobs",
	];
	/** IAM actions required for the ListPartnerApps API call. */
	static readonly LIST_PARTNER_APPS: string[] = ["sagemaker:ListPartnerApps"];
	/** IAM actions required for the ListPipelineExecutionSteps API call. */
	static readonly LIST_PIPELINE_EXECUTION_STEPS: string[] = [
		"sagemaker:ListPipelineExecutionSteps",
	];
	/** IAM actions required for the ListPipelineExecutions API call. */
	static readonly LIST_PIPELINE_EXECUTIONS: string[] = [
		"sagemaker:ListPipelineExecutions",
	];
	/** IAM actions required for the ListPipelineParametersForExecution API call. */
	static readonly LIST_PIPELINE_PARAMETERS_FOR_EXECUTION: string[] = [
		"sagemaker:ListPipelineParametersForExecution",
	];
	/** IAM actions required for the ListPipelineVersions API call. */
	static readonly LIST_PIPELINE_VERSIONS: string[] = [
		"sagemaker:ListPipelineVersions",
	];
	/** IAM actions required for the ListPipelines API call. */
	static readonly LIST_PIPELINES: string[] = ["sagemaker:ListPipelines"];
	/** IAM actions required for the ListProcessingJobs API call. */
	static readonly LIST_PROCESSING_JOBS: string[] = [
		"sagemaker:ListProcessingJobs",
	];
	/** IAM actions required for the ListProjects API call. */
	static readonly LIST_PROJECTS: string[] = ["sagemaker:ListProjects"];
	/** IAM actions required for the ListRecords API call. */
	static readonly LIST_RECORDS: string[] = ["sagemaker:ListRecords"];
	/** IAM actions required for the ListResourceCatalogs API call. */
	static readonly LIST_RESOURCE_CATALOGS: string[] = [
		"sagemaker:ListResourceCatalogs",
	];
	/** IAM actions required for the ListSpaces API call. */
	static readonly LIST_SPACES: string[] = ["sagemaker:ListSpaces"];
	/** IAM actions required for the ListStageDevices API call. */
	static readonly LIST_STAGE_DEVICES: string[] = [];
	/** IAM actions required for the ListStudioLifecycleConfigs API call. */
	static readonly LIST_STUDIO_LIFECYCLE_CONFIGS: string[] = [
		"sagemaker:ListStudioLifecycleConfigs",
	];
	/** IAM actions required for the ListSubscribedWorkteams API call. */
	static readonly LIST_SUBSCRIBED_WORKTEAMS: string[] = [
		"sagemaker:ListSubscribedWorkteams",
	];
	/** IAM actions required for the ListTags API call. */
	static readonly LIST_TAGS: string[] = ["sagemaker:ListTags"];
	/** IAM actions required for the ListTrainingJobs API call. */
	static readonly LIST_TRAINING_JOBS: string[] = ["sagemaker:ListTrainingJobs"];
	/** IAM actions required for the ListTrainingJobsForHyperParameterTuningJob API call. */
	static readonly LIST_TRAINING_JOBS_FOR_HYPER_PARAMETER_TUNING_JOB: string[] =
		["sagemaker:ListTrainingJobsForHyperParameterTuningJob"];
	/** IAM actions required for the ListTrainingPlans API call. */
	static readonly LIST_TRAINING_PLANS: string[] = [
		"sagemaker:ListTrainingPlans",
	];
	/** IAM actions required for the ListTransformJobs API call. */
	static readonly LIST_TRANSFORM_JOBS: string[] = [
		"sagemaker:ListTransformJobs",
	];
	/** IAM actions required for the ListTrialComponents API call. */
	static readonly LIST_TRIAL_COMPONENTS: string[] = [
		"sagemaker:ListTrialComponents",
	];
	/** IAM actions required for the ListTrials API call. */
	static readonly LIST_TRIALS: string[] = ["sagemaker:ListTrials"];
	/** IAM actions required for the ListUltraServersByReservedCapacity API call. */
	static readonly LIST_ULTRA_SERVERS_BY_RESERVED_CAPACITY: string[] = [
		"sagemaker:ListUltraServersByReservedCapacity",
	];
	/** IAM actions required for the ListUserProfiles API call. */
	static readonly LIST_USER_PROFILES: string[] = ["sagemaker:ListUserProfiles"];
	/** IAM actions required for the ListWorkforces API call. */
	static readonly LIST_WORKFORCES: string[] = ["sagemaker:ListWorkforces"];
	/** IAM actions required for the ListWorkteams API call. */
	static readonly LIST_WORKTEAMS: string[] = ["sagemaker:ListWorkteams"];
	/** IAM actions required for the PutModelPackageGroupPolicy API call. */
	static readonly PUT_MODEL_PACKAGE_GROUP_POLICY: string[] = [
		"sagemaker:PutModelPackageGroupPolicy",
	];
	/** IAM actions required for the PutRecord API call. */
	static readonly PUT_RECORD: string[] = ["sagemaker:PutRecord"];
	/** IAM actions required for the QueryLineage API call. */
	static readonly QUERY_LINEAGE: string[] = ["sagemaker:QueryLineage"];
	/** IAM actions required for the RegisterDevices API call. */
	static readonly REGISTER_DEVICES: string[] = [];
	/** IAM actions required for the RenderUiTemplate API call. */
	static readonly RENDER_UI_TEMPLATE: string[] = [
		"iam:PassRole",
		"sagemaker:RenderUiTemplate",
	];
	/** IAM actions required for the RetryPipelineExecution API call. */
	static readonly RETRY_PIPELINE_EXECUTION: string[] = [
		"sagemaker:RetryPipelineExecution",
	];
	/** IAM actions required for the Sample API call. */
	static readonly SAMPLE: string[] = [
		"sagemaker:CallWithBearerToken",
		"sagemaker:Sample",
	];
	/** IAM actions required for the SampleWithResponseStream API call. */
	static readonly SAMPLE_WITH_RESPONSE_STREAM: string[] = [
		"sagemaker:CallWithBearerToken",
		"sagemaker:SampleWithResponseStream",
	];
	/** IAM actions required for the Search API call. */
	static readonly SEARCH: string[] = ["sagemaker:Search"];
	/** IAM actions required for the SearchTrainingPlanOfferings API call. */
	static readonly SEARCH_TRAINING_PLAN_OFFERINGS: string[] = [
		"sagemaker:SearchTrainingPlanOfferings",
	];
	/** IAM actions required for the SendHeartbeat API call. */
	static readonly SEND_HEARTBEAT: string[] = [];
	/** IAM actions required for the SendPipelineExecutionStepFailure API call. */
	static readonly SEND_PIPELINE_EXECUTION_STEP_FAILURE: string[] = [
		"sagemaker:SendPipelineExecutionStepFailure",
	];
	/** IAM actions required for the SendPipelineExecutionStepSuccess API call. */
	static readonly SEND_PIPELINE_EXECUTION_STEP_SUCCESS: string[] = [
		"sagemaker:SendPipelineExecutionStepSuccess",
	];
	/** IAM actions required for the StartClusterHealthCheck API call. */
	static readonly START_CLUSTER_HEALTH_CHECK: string[] = [
		"sagemaker:StartClusterHealthCheck",
	];
	/** IAM actions required for the StartEdgeDeploymentStage API call. */
	static readonly START_EDGE_DEPLOYMENT_STAGE: string[] = [];
	/** IAM actions required for the StartHumanLoop API call. */
	static readonly START_HUMAN_LOOP: string[] = ["sagemaker:StartHumanLoop"];
	/** IAM actions required for the StartInferenceExperiment API call. */
	static readonly START_INFERENCE_EXPERIMENT: string[] = [
		"sagemaker:StartInferenceExperiment",
	];
	/** IAM actions required for the StartMlflowTrackingServer API call. */
	static readonly START_MLFLOW_TRACKING_SERVER: string[] = [
		"sagemaker:StartMlflowTrackingServer",
	];
	/** IAM actions required for the StartMonitoringSchedule API call. */
	static readonly START_MONITORING_SCHEDULE: string[] = [
		"sagemaker:StartMonitoringSchedule",
	];
	/** IAM actions required for the StartNotebookInstance API call. */
	static readonly START_NOTEBOOK_INSTANCE: string[] = [
		"sagemaker:StartNotebookInstance",
	];
	/** IAM actions required for the StartPipelineExecution API call. */
	static readonly START_PIPELINE_EXECUTION: string[] = [
		"sagemaker:StartPipelineExecution",
	];
	/** IAM actions required for the StartSession API call. */
	static readonly START_SESSION: string[] = ["sagemaker:StartSession"];
	/** IAM actions required for the StopAIBenchmarkJob API call. */
	static readonly STOP_AI_BENCHMARK_JOB: string[] = [
		"sagemaker:StopAIBenchmarkJob",
	];
	/** IAM actions required for the StopAIRecommendationJob API call. */
	static readonly STOP_AI_RECOMMENDATION_JOB: string[] = [
		"sagemaker:StopAIRecommendationJob",
	];
	/** IAM actions required for the StopAutoMLJob API call. */
	static readonly STOP_AUTO_ML_JOB: string[] = ["sagemaker:StopAutoMLJob"];
	/** IAM actions required for the StopCompilationJob API call. */
	static readonly STOP_COMPILATION_JOB: string[] = [
		"sagemaker:StopCompilationJob",
	];
	/** IAM actions required for the StopEdgeDeploymentStage API call. */
	static readonly STOP_EDGE_DEPLOYMENT_STAGE: string[] = [];
	/** IAM actions required for the StopEdgePackagingJob API call. */
	static readonly STOP_EDGE_PACKAGING_JOB: string[] = [];
	/** IAM actions required for the StopHumanLoop API call. */
	static readonly STOP_HUMAN_LOOP: string[] = ["sagemaker:StopHumanLoop"];
	/** IAM actions required for the StopHyperParameterTuningJob API call. */
	static readonly STOP_HYPER_PARAMETER_TUNING_JOB: string[] = [
		"sagemaker:StopHyperParameterTuningJob",
	];
	/** IAM actions required for the StopInferenceExperiment API call. */
	static readonly STOP_INFERENCE_EXPERIMENT: string[] = [
		"sagemaker:StopInferenceExperiment",
	];
	/** IAM actions required for the StopInferenceRecommendationsJob API call. */
	static readonly STOP_INFERENCE_RECOMMENDATIONS_JOB: string[] = [
		"sagemaker:StopInferenceRecommendationsJob",
	];
	/** IAM actions required for the StopJob API call. */
	static readonly STOP_JOB: string[] = ["sagemaker:StopJob"];
	/** IAM actions required for the StopLabelingJob API call. */
	static readonly STOP_LABELING_JOB: string[] = ["sagemaker:StopLabelingJob"];
	/** IAM actions required for the StopMlflowTrackingServer API call. */
	static readonly STOP_MLFLOW_TRACKING_SERVER: string[] = [
		"sagemaker:StopMlflowTrackingServer",
	];
	/** IAM actions required for the StopMonitoringSchedule API call. */
	static readonly STOP_MONITORING_SCHEDULE: string[] = [
		"sagemaker:StopMonitoringSchedule",
	];
	/** IAM actions required for the StopNotebookInstance API call. */
	static readonly STOP_NOTEBOOK_INSTANCE: string[] = [
		"sagemaker:StopNotebookInstance",
	];
	/** IAM actions required for the StopOptimizationJob API call. */
	static readonly STOP_OPTIMIZATION_JOB: string[] = [
		"sagemaker:StopOptimizationJob",
	];
	/** IAM actions required for the StopPipelineExecution API call. */
	static readonly STOP_PIPELINE_EXECUTION: string[] = [
		"sagemaker:StopPipelineExecution",
	];
	/** IAM actions required for the StopProcessingJob API call. */
	static readonly STOP_PROCESSING_JOB: string[] = [
		"sagemaker:StopProcessingJob",
	];
	/** IAM actions required for the StopTrainingJob API call. */
	static readonly STOP_TRAINING_JOB: string[] = ["sagemaker:StopTrainingJob"];
	/** IAM actions required for the StopTransformJob API call. */
	static readonly STOP_TRANSFORM_JOB: string[] = ["sagemaker:StopTransformJob"];
	/** IAM actions required for the UpdateAction API call. */
	static readonly UPDATE_ACTION: string[] = ["sagemaker:UpdateAction"];
	/** IAM actions required for the UpdateAppImageConfig API call. */
	static readonly UPDATE_APP_IMAGE_CONFIG: string[] = [
		"sagemaker:UpdateAppImageConfig",
	];
	/** IAM actions required for the UpdateArtifact API call. */
	static readonly UPDATE_ARTIFACT: string[] = ["sagemaker:UpdateArtifact"];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UPDATE_CLUSTER: string[] = [
		"sagemaker:BatchAddClusterNodes",
		"sagemaker:BatchDeleteClusterNodes",
		"iam:PassRole",
		"sagemaker:UpdateCluster",
		"sagemaker:UpdateClusterSoftware",
	];
	/** IAM actions required for the UpdateClusterSchedulerConfig API call. */
	static readonly UPDATE_CLUSTER_SCHEDULER_CONFIG: string[] = [
		"sagemaker:UpdateClusterSchedulerConfig",
	];
	/** IAM actions required for the UpdateClusterSoftware API call. */
	static readonly UPDATE_CLUSTER_SOFTWARE: string[] = [
		"sagemaker:UpdateClusterSoftware",
	];
	/** IAM actions required for the UpdateCodeRepository API call. */
	static readonly UPDATE_CODE_REPOSITORY: string[] = [
		"sagemaker:UpdateCodeRepository",
	];
	/** IAM actions required for the UpdateComputeQuota API call. */
	static readonly UPDATE_COMPUTE_QUOTA: string[] = [
		"sagemaker:UpdateComputeQuota",
	];
	/** IAM actions required for the UpdateContext API call. */
	static readonly UPDATE_CONTEXT: string[] = ["sagemaker:UpdateContext"];
	/** IAM actions required for the UpdateDeviceFleet API call. */
	static readonly UPDATE_DEVICE_FLEET: string[] = [];
	/** IAM actions required for the UpdateDevices API call. */
	static readonly UPDATE_DEVICES: string[] = [];
	/** IAM actions required for the UpdateDomain API call. */
	static readonly UPDATE_DOMAIN: string[] = [
		"iam:PassRole",
		"sagemaker:UpdateDomain",
	];
	/** IAM actions required for the UpdateEndpoint API call. */
	static readonly UPDATE_ENDPOINT: string[] = ["sagemaker:UpdateEndpoint"];
	/** IAM actions required for the UpdateEndpointWeightsAndCapacities API call. */
	static readonly UPDATE_ENDPOINT_WEIGHTS_AND_CAPACITIES: string[] = [
		"sagemaker:UpdateEndpointWeightsAndCapacities",
	];
	/** IAM actions required for the UpdateExperiment API call. */
	static readonly UPDATE_EXPERIMENT: string[] = ["sagemaker:UpdateExperiment"];
	/** IAM actions required for the UpdateFeatureGroup API call. */
	static readonly UPDATE_FEATURE_GROUP: string[] = [
		"sagemaker:UpdateFeatureGroup",
	];
	/** IAM actions required for the UpdateFeatureMetadata API call. */
	static readonly UPDATE_FEATURE_METADATA: string[] = [
		"sagemaker:UpdateFeatureMetadata",
	];
	/** IAM actions required for the UpdateHub API call. */
	static readonly UPDATE_HUB: string[] = ["sagemaker:UpdateHub"];
	/** IAM actions required for the UpdateHubContent API call. */
	static readonly UPDATE_HUB_CONTENT: string[] = ["sagemaker:UpdateHubContent"];
	/** IAM actions required for the UpdateHubContentReference API call. */
	static readonly UPDATE_HUB_CONTENT_REFERENCE: string[] = [
		"sagemaker:UpdateHubContentReference",
	];
	/** IAM actions required for the UpdateImage API call. */
	static readonly UPDATE_IMAGE: string[] = [
		"iam:PassRole",
		"sagemaker:UpdateImage",
	];
	/** IAM actions required for the UpdateImageVersion API call. */
	static readonly UPDATE_IMAGE_VERSION: string[] = [
		"sagemaker:UpdateImageVersion",
	];
	/** IAM actions required for the UpdateInferenceComponent API call. */
	static readonly UPDATE_INFERENCE_COMPONENT: string[] = [
		"sagemaker:UpdateInferenceComponent",
	];
	/** IAM actions required for the UpdateInferenceComponentRuntimeConfig API call. */
	static readonly UPDATE_INFERENCE_COMPONENT_RUNTIME_CONFIG: string[] = [
		"sagemaker:UpdateInferenceComponentRuntimeConfig",
	];
	/** IAM actions required for the UpdateInferenceExperiment API call. */
	static readonly UPDATE_INFERENCE_EXPERIMENT: string[] = [
		"sagemaker:UpdateInferenceExperiment",
	];
	/** IAM actions required for the UpdateMlflowApp API call. */
	static readonly UPDATE_MLFLOW_APP: string[] = ["sagemaker:UpdateMlflowApp"];
	/** IAM actions required for the UpdateMlflowTrackingServer API call. */
	static readonly UPDATE_MLFLOW_TRACKING_SERVER: string[] = [
		"sagemaker:UpdateMlflowTrackingServer",
	];
	/** IAM actions required for the UpdateModelCard API call. */
	static readonly UPDATE_MODEL_CARD: string[] = ["sagemaker:UpdateModelCard"];
	/** IAM actions required for the UpdateModelPackage API call. */
	static readonly UPDATE_MODEL_PACKAGE: string[] = [
		"sagemaker:UpdateModelPackage",
	];
	/** IAM actions required for the UpdateMonitoringAlert API call. */
	static readonly UPDATE_MONITORING_ALERT: string[] = [
		"sagemaker:UpdateMonitoringAlert",
	];
	/** IAM actions required for the UpdateMonitoringSchedule API call. */
	static readonly UPDATE_MONITORING_SCHEDULE: string[] = [
		"iam:PassRole",
		"sagemaker:UpdateMonitoringSchedule",
	];
	/** IAM actions required for the UpdateNotebookInstance API call. */
	static readonly UPDATE_NOTEBOOK_INSTANCE: string[] = [
		"iam:PassRole",
		"sagemaker:UpdateNotebookInstance",
	];
	/** IAM actions required for the UpdateNotebookInstanceLifecycleConfig API call. */
	static readonly UPDATE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG: string[] = [
		"sagemaker:UpdateNotebookInstanceLifecycleConfig",
	];
	/** IAM actions required for the UpdatePartnerApp API call. */
	static readonly UPDATE_PARTNER_APP: string[] = [
		"sagemaker:AddTags",
		"sagemaker:UpdatePartnerApp",
	];
	/** IAM actions required for the UpdatePipeline API call. */
	static readonly UPDATE_PIPELINE: string[] = [
		"iam:PassRole",
		"sagemaker:UpdatePipeline",
	];
	/** IAM actions required for the UpdatePipelineExecution API call. */
	static readonly UPDATE_PIPELINE_EXECUTION: string[] = [
		"sagemaker:UpdatePipelineExecution",
	];
	/** IAM actions required for the UpdatePipelineVersion API call. */
	static readonly UPDATE_PIPELINE_VERSION: string[] = [
		"sagemaker:UpdatePipelineVersion",
	];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UPDATE_PROJECT: string[] = [
		"sagemaker:AddTags",
		"sagemaker:UpdateProject",
	];
	/** IAM actions required for the UpdateReward API call. */
	static readonly UPDATE_REWARD: string[] = [
		"sagemaker:CallWithBearerToken",
		"sagemaker:UpdateReward",
	];
	/** IAM actions required for the UpdateSpace API call. */
	static readonly UPDATE_SPACE: string[] = ["sagemaker:UpdateSpace"];
	/** IAM actions required for the UpdateTrainingJob API call. */
	static readonly UPDATE_TRAINING_JOB: string[] = [
		"sagemaker:UpdateTrainingJob",
	];
	/** IAM actions required for the UpdateTrial API call. */
	static readonly UPDATE_TRIAL: string[] = ["sagemaker:UpdateTrial"];
	/** IAM actions required for the UpdateTrialComponent API call. */
	static readonly UPDATE_TRIAL_COMPONENT: string[] = [
		"sagemaker:UpdateTrialComponent",
	];
	/** IAM actions required for the UpdateUserProfile API call. */
	static readonly UPDATE_USER_PROFILE: string[] = [
		"iam:PassRole",
		"sagemaker:UpdateUserProfile",
	];
	/** IAM actions required for the UpdateWorkforce API call. */
	static readonly UPDATE_WORKFORCE: string[] = ["sagemaker:UpdateWorkforce"];
	/** IAM actions required for the UpdateWorkteam API call. */
	static readonly UPDATE_WORKTEAM: string[] = ["sagemaker:UpdateWorkteam"];
}

/**
 * Condition key constants and builders for sagemaker.
 */
export class SageMakerConditions {
	/** Condition keys applicable to the AddTags action. */
	static readonly ADD_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:TaggingAction",
	];
	/** Condition keys applicable to the CallWithBearerToken action. */
	static readonly CALL_WITH_BEARER_TOKEN_CONDITION_KEYS: string[] = [
		"sagemaker:BearerTokenType",
	];
	/** Condition keys applicable to the CreateAIBenchmarkJob action. */
	static readonly CREATE_AI_BENCHMARK_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAIRecommendationJob action. */
	static readonly CREATE_AI_RECOMMENDATION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAIWorkloadConfig action. */
	static readonly CREATE_AI_WORKLOAD_CONFIG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAction action. */
	static readonly CREATE_ACTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAlgorithm action. */
	static readonly CREATE_ALGORITHM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApp action. */
	static readonly CREATE_APP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:ImageArns",
		"sagemaker:ImageVersionArns",
		"sagemaker:InstanceTypes",
		"sagemaker:OwnerUserProfileArn",
		"sagemaker:SpaceSharingType",
		"sagemaker:StudioLifecycleConfigArns",
	];
	/** Condition keys applicable to the CreateAppImageConfig action. */
	static readonly CREATE_APP_IMAGE_CONFIG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateArtifact action. */
	static readonly CREATE_ARTIFACT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAutoMLJob action. */
	static readonly CREATE_AUTO_ML_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:InterContainerTrafficEncryption",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateAutoMLJobV2 action. */
	static readonly CREATE_AUTO_ML_JOB_V2_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:InterContainerTrafficEncryption",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CREATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:InstanceTypes",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateClusterSchedulerConfig action. */
	static readonly CREATE_CLUSTER_SCHEDULER_CONFIG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCodeRepository action. */
	static readonly CREATE_CODE_REPOSITORY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCompilationJob action. */
	static readonly CREATE_COMPILATION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateComputeQuota action. */
	static readonly CREATE_COMPUTE_QUOTA_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContext action. */
	static readonly CREATE_CONTEXT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataQualityJobDefinition action. */
	static readonly CREATE_DATA_QUALITY_JOB_DEFINITION_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"sagemaker:InstanceTypes",
			"sagemaker:InterContainerTrafficEncryption",
			"sagemaker:MaxRuntimeInSeconds",
			"sagemaker:NetworkIsolation",
			"sagemaker:OutputKmsKeyArn",
			"sagemaker:VolumeKmsKeyArn",
			"sagemaker:VpcSecurityGroupIds",
			"sagemaker:VpcSubnets",
		];
	/** Condition keys applicable to the CreateDeviceFleet action. */
	static readonly CREATE_DEVICE_FLEET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CREATE_DOMAIN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:AppNetworkAccessType",
		"sagemaker:DomainSharingOutputKmsKeyArn",
		"sagemaker:ImageArns",
		"sagemaker:ImageVersionArns",
		"sagemaker:InstanceTypes",
		"sagemaker:StudioLifecycleConfigArns",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateEdgeDeploymentPlan action. */
	static readonly CREATE_EDGE_DEPLOYMENT_PLAN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEdgeDeploymentStage action. */
	static readonly CREATE_EDGE_DEPLOYMENT_STAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEdgePackagingJob action. */
	static readonly CREATE_EDGE_PACKAGING_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEndpoint action. */
	static readonly CREATE_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEndpointConfig action. */
	static readonly CREATE_ENDPOINT_CONFIG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:AcceleratorTypes",
		"sagemaker:InstanceTypes",
		"sagemaker:ModelArn",
		"sagemaker:NetworkIsolation",
		"sagemaker:ServerlessMaxConcurrency",
		"sagemaker:ServerlessMemorySize",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateExperiment action. */
	static readonly CREATE_EXPERIMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFeatureGroup action. */
	static readonly CREATE_FEATURE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:FeatureGroupDisableGlueTableCreation",
		"sagemaker:FeatureGroupEnableOnlineStore",
		"sagemaker:FeatureGroupOfflineStoreConfig",
		"sagemaker:FeatureGroupOfflineStoreKmsKeyArn",
		"sagemaker:FeatureGroupOfflineStoreS3Uri",
		"sagemaker:FeatureGroupOnlineStoreKmsKeyArn",
	];
	/** Condition keys applicable to the CreateFlowDefinition action. */
	static readonly CREATE_FLOW_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:WorkteamArn",
		"sagemaker:WorkteamType",
	];
	/** Condition keys applicable to the CreateHub action. */
	static readonly CREATE_HUB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHubContentReference action. */
	static readonly CREATE_HUB_CONTENT_REFERENCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHumanTaskUi action. */
	static readonly CREATE_HUMAN_TASK_UI_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHyperParameterTuningJob action. */
	static readonly CREATE_HYPER_PARAMETER_TUNING_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:FileSystemAccessMode",
		"sagemaker:FileSystemDirectoryPath",
		"sagemaker:FileSystemId",
		"sagemaker:FileSystemType",
		"sagemaker:InstanceTypes",
		"sagemaker:InterContainerTrafficEncryption",
		"sagemaker:MaxRuntimeInSeconds",
		"sagemaker:NetworkIsolation",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateImage action. */
	static readonly CREATE_IMAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInferenceComponent action. */
	static readonly CREATE_INFERENCE_COMPONENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:ModelArn",
	];
	/** Condition keys applicable to the CreateInferenceExperiment action. */
	static readonly CREATE_INFERENCE_EXPERIMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInferenceRecommendationsJob action. */
	static readonly CREATE_INFERENCE_RECOMMENDATIONS_JOB_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateJob action. */
	static readonly CREATE_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateLabelingJob action. */
	static readonly CREATE_LABELING_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:WorkteamArn",
		"sagemaker:WorkteamType",
	];
	/** Condition keys applicable to the CreateMlflowApp action. */
	static readonly CREATE_MLFLOW_APP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMlflowTrackingServer action. */
	static readonly CREATE_MLFLOW_TRACKING_SERVER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModel action. */
	static readonly CREATE_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:DirectGatedModelAccess",
		"sagemaker:NetworkIsolation",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateModelBiasJobDefinition action. */
	static readonly CREATE_MODEL_BIAS_JOB_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:InstanceTypes",
		"sagemaker:InterContainerTrafficEncryption",
		"sagemaker:MaxRuntimeInSeconds",
		"sagemaker:NetworkIsolation",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateModelCard action. */
	static readonly CREATE_MODEL_CARD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelExplainabilityJobDefinition action. */
	static readonly CREATE_MODEL_EXPLAINABILITY_JOB_DEFINITION_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"sagemaker:InstanceTypes",
			"sagemaker:InterContainerTrafficEncryption",
			"sagemaker:MaxRuntimeInSeconds",
			"sagemaker:NetworkIsolation",
			"sagemaker:OutputKmsKeyArn",
			"sagemaker:VolumeKmsKeyArn",
			"sagemaker:VpcSecurityGroupIds",
			"sagemaker:VpcSubnets",
		];
	/** Condition keys applicable to the CreateModelPackage action. */
	static readonly CREATE_MODEL_PACKAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:CustomerMetadataProperties/${MetadataKey}",
		"sagemaker:ModelApprovalStatus",
		"sagemaker:ModelLifeCycle:Stage",
		"sagemaker:ModelLifeCycle:StageStatus",
	];
	/** Condition keys applicable to the CreateModelPackageGroup action. */
	static readonly CREATE_MODEL_PACKAGE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelQualityJobDefinition action. */
	static readonly CREATE_MODEL_QUALITY_JOB_DEFINITION_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"sagemaker:InstanceTypes",
			"sagemaker:InterContainerTrafficEncryption",
			"sagemaker:MaxRuntimeInSeconds",
			"sagemaker:NetworkIsolation",
			"sagemaker:OutputKmsKeyArn",
			"sagemaker:VolumeKmsKeyArn",
			"sagemaker:VpcSecurityGroupIds",
			"sagemaker:VpcSubnets",
		];
	/** Condition keys applicable to the CreateMonitoringSchedule action. */
	static readonly CREATE_MONITORING_SCHEDULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:InstanceTypes",
		"sagemaker:InterContainerTrafficEncryption",
		"sagemaker:MaxRuntimeInSeconds",
		"sagemaker:NetworkIsolation",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateNotebookInstance action. */
	static readonly CREATE_NOTEBOOK_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:AcceleratorTypes",
		"sagemaker:DirectInternetAccess",
		"sagemaker:InstanceTypes",
		"sagemaker:MinimumInstanceMetadataServiceVersion",
		"sagemaker:NotebookInstanceLifecycleConfigArns",
		"sagemaker:RootAccess",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateNotebookInstanceLifecycleConfig action. */
	static readonly CREATE_NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateOptimizationJob action. */
	static readonly CREATE_OPTIMIZATION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePartnerApp action. */
	static readonly CREATE_PARTNER_APP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePipeline action. */
	static readonly CREATE_PIPELINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProcessingJob action. */
	static readonly CREATE_PROCESSING_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:InstanceTypes",
		"sagemaker:InterContainerTrafficEncryption",
		"sagemaker:MaxRuntimeInSeconds",
		"sagemaker:NetworkIsolation",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CREATE_PROJECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateReservedCapacity action. */
	static readonly CREATE_RESERVED_CAPACITY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSpace action. */
	static readonly CREATE_SPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:ImageArns",
		"sagemaker:ImageVersionArns",
		"sagemaker:InstanceTypes",
		"sagemaker:OwnerUserProfileArn",
		"sagemaker:RemoteAccess",
		"sagemaker:SpaceSharingType",
		"sagemaker:StudioLifecycleConfigArns",
	];
	/** Condition keys applicable to the CreateStudioLifecycleConfig action. */
	static readonly CREATE_STUDIO_LIFECYCLE_CONFIG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTrainingJob action. */
	static readonly CREATE_TRAINING_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:DirectGatedModelAccess",
		"sagemaker:EnableRemoteDebug",
		"sagemaker:FileSystemAccessMode",
		"sagemaker:FileSystemDirectoryPath",
		"sagemaker:FileSystemId",
		"sagemaker:FileSystemType",
		"sagemaker:InstanceTypes",
		"sagemaker:InterContainerTrafficEncryption",
		"sagemaker:KeepAlivePeriod",
		"sagemaker:MaxRuntimeInSeconds",
		"sagemaker:NetworkIsolation",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateTrainingPlan action. */
	static readonly CREATE_TRAINING_PLAN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTransformJob action. */
	static readonly CREATE_TRANSFORM_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:InstanceTypes",
		"sagemaker:ModelArn",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
	];
	/** Condition keys applicable to the CreateTrial action. */
	static readonly CREATE_TRIAL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTrialComponent action. */
	static readonly CREATE_TRIAL_COMPONENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUserProfile action. */
	static readonly CREATE_USER_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:DomainSharingOutputKmsKeyArn",
		"sagemaker:ImageArns",
		"sagemaker:ImageVersionArns",
		"sagemaker:InstanceTypes",
		"sagemaker:StudioLifecycleConfigArns",
		"sagemaker:VpcSecurityGroupIds",
	];
	/** Condition keys applicable to the CreateWorkforce action. */
	static readonly CREATE_WORKFORCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkteam action. */
	static readonly CREATE_WORKTEAM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteApp action. */
	static readonly DELETE_APP_CONDITION_KEYS: string[] = [
		"sagemaker:OwnerUserProfileArn",
		"sagemaker:SpaceSharingType",
	];
	/** Condition keys applicable to the DeleteFeatureGroup action. */
	static readonly DELETE_FEATURE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSpace action. */
	static readonly DELETE_SPACE_CONDITION_KEYS: string[] = [
		"sagemaker:OwnerUserProfileArn",
		"sagemaker:SpaceSharingType",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DELETE_TAGS_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the DescribePipeline action. */
	static readonly DESCRIBE_PIPELINE_CONDITION_KEYS: string[] = [
		"sagemaker:PipelineVersionId",
	];
	/** Condition keys applicable to the ImportHubContent action. */
	static readonly IMPORT_HUB_CONTENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the InvokeEndpoint action. */
	static readonly INVOKE_ENDPOINT_CONDITION_KEYS: string[] = [
		"sagemaker:TargetModel",
	];
	/** Condition keys applicable to the RegisterDevices action. */
	static readonly REGISTER_DEVICES_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Search action. */
	static readonly SEARCH_CONDITION_KEYS: string[] = [
		"sagemaker:SearchVisibilityCondition/${FilterKey}",
	];
	/** Condition keys applicable to the StartPipelineExecution action. */
	static readonly START_PIPELINE_EXECUTION_CONDITION_KEYS: string[] = [
		"sagemaker:PipelineVersionId",
	];
	/** Condition keys applicable to the UpdateCluster action. */
	static readonly UPDATE_CLUSTER_CONDITION_KEYS: string[] = [
		"sagemaker:InstanceTypes",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the UpdateDomain action. */
	static readonly UPDATE_DOMAIN_CONDITION_KEYS: string[] = [
		"sagemaker:AppNetworkAccessType",
		"sagemaker:DomainSharingOutputKmsKeyArn",
		"sagemaker:ImageArns",
		"sagemaker:ImageVersionArns",
		"sagemaker:InstanceTypes",
		"sagemaker:StudioLifecycleConfigArns",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the UpdateModelPackage action. */
	static readonly UPDATE_MODEL_PACKAGE_CONDITION_KEYS: string[] = [
		"sagemaker:CustomerMetadataProperties/${MetadataKey}",
		"sagemaker:CustomerMetadataPropertiesToRemove",
		"sagemaker:ModelApprovalStatus",
		"sagemaker:ModelLifeCycle:Stage",
		"sagemaker:ModelLifeCycle:StageStatus",
	];
	/** Condition keys applicable to the UpdateMonitoringSchedule action. */
	static readonly UPDATE_MONITORING_SCHEDULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:InstanceTypes",
		"sagemaker:InterContainerTrafficEncryption",
		"sagemaker:MaxRuntimeInSeconds",
		"sagemaker:NetworkIsolation",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the UpdateNotebookInstance action. */
	static readonly UPDATE_NOTEBOOK_INSTANCE_CONDITION_KEYS: string[] = [
		"sagemaker:AcceleratorTypes",
		"sagemaker:InstanceTypes",
		"sagemaker:MinimumInstanceMetadataServiceVersion",
		"sagemaker:NotebookInstanceLifecycleConfigArns",
		"sagemaker:RootAccess",
	];
	/** Condition keys applicable to the UpdatePipelineVersion action. */
	static readonly UPDATE_PIPELINE_VERSION_CONDITION_KEYS: string[] = [
		"sagemaker:PipelineVersionId",
	];
	/** Condition keys applicable to the UpdateProject action. */
	static readonly UPDATE_PROJECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateSpace action. */
	static readonly UPDATE_SPACE_CONDITION_KEYS: string[] = [
		"sagemaker:ImageArns",
		"sagemaker:ImageVersionArns",
		"sagemaker:InstanceTypes",
		"sagemaker:OwnerUserProfileArn",
		"sagemaker:RemoteAccess",
		"sagemaker:SpaceSharingType",
		"sagemaker:StudioLifecycleConfigArns",
	];
	/** Condition keys applicable to the UpdateTrainingJob action. */
	static readonly UPDATE_TRAINING_JOB_CONDITION_KEYS: string[] = [
		"sagemaker:EnableRemoteDebug",
		"sagemaker:InstanceTypes",
		"sagemaker:KeepAlivePeriod",
	];
	/** Condition keys applicable to the UpdateUserProfile action. */
	static readonly UPDATE_USER_PROFILE_CONDITION_KEYS: string[] = [
		"sagemaker:DomainSharingOutputKmsKeyArn",
		"sagemaker:ImageArns",
		"sagemaker:ImageVersionArns",
		"sagemaker:InstanceTypes",
		"sagemaker:InstanceTypes",
		"sagemaker:StudioLifecycleConfigArns",
		"sagemaker:VpcSecurityGroupIds",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: sagemaker:AcceleratorTypes (ArrayOfString) */
	static readonly ACCELERATOR_TYPES = "sagemaker:AcceleratorTypes";
	/** Condition key: sagemaker:AppNetworkAccessType (String) */
	static readonly APP_NETWORK_ACCESS_TYPE = "sagemaker:AppNetworkAccessType";
	/** Condition key: sagemaker:BearerTokenType (String) */
	static readonly BEARER_TOKEN_TYPE = "sagemaker:BearerTokenType";
	/** Condition key: sagemaker:CurrentCustomerMetadataProperties/${MetadataKey} (String) */
	static readonly CURRENT_CUSTOMER_METADATA_PROPERTIES =
		"sagemaker:CurrentCustomerMetadataProperties/${MetadataKey}";
	/** Condition key: sagemaker:CurrentModelLifeCycleStage (String) */
	static readonly CURRENT_MODEL_LIFE_CYCLE_STAGE =
		"sagemaker:CurrentModelLifeCycleStage";
	/** Condition key: sagemaker:CurrentModelLifeCycleStageStatus (String) */
	static readonly CURRENT_MODEL_LIFE_CYCLE_STAGE_STATUS =
		"sagemaker:CurrentModelLifeCycleStageStatus";
	/** Condition key: sagemaker:CustomerMetadataProperties/${MetadataKey} (String) */
	static readonly CUSTOMER_METADATA_PROPERTIES =
		"sagemaker:CustomerMetadataProperties/${MetadataKey}";
	/** Condition key: sagemaker:CustomerMetadataPropertiesToRemove (ArrayOfString) */
	static readonly CUSTOMER_METADATA_PROPERTIES_TO_REMOVE =
		"sagemaker:CustomerMetadataPropertiesToRemove";
	/** Condition key: sagemaker:DirectGatedModelAccess (String) */
	static readonly DIRECT_GATED_MODEL_ACCESS =
		"sagemaker:DirectGatedModelAccess";
	/** Condition key: sagemaker:DirectInternetAccess (String) */
	static readonly DIRECT_INTERNET_ACCESS = "sagemaker:DirectInternetAccess";
	/** Condition key: sagemaker:DomainId (String) */
	static readonly DOMAIN_ID = "sagemaker:DomainId";
	/** Condition key: sagemaker:DomainSharingOutputKmsKey (ARN) */
	static readonly DOMAIN_SHARING_OUTPUT_KMS_KEY =
		"sagemaker:DomainSharingOutputKmsKey";
	/** Condition key: sagemaker:DomainSharingOutputKmsKeyArn (ARN) */
	static readonly DOMAIN_SHARING_OUTPUT_KMS_KEY_ARN =
		"sagemaker:DomainSharingOutputKmsKeyArn";
	/** Condition key: sagemaker:EnableRemoteDebug (Bool) */
	static readonly ENABLE_REMOTE_DEBUG = "sagemaker:EnableRemoteDebug";
	/** Condition key: sagemaker:FeatureGroupDisableGlueTableCreation (Bool) */
	static readonly FEATURE_GROUP_DISABLE_GLUE_TABLE_CREATION =
		"sagemaker:FeatureGroupDisableGlueTableCreation";
	/** Condition key: sagemaker:FeatureGroupEnableOnlineStore (Bool) */
	static readonly FEATURE_GROUP_ENABLE_ONLINE_STORE =
		"sagemaker:FeatureGroupEnableOnlineStore";
	/** Condition key: sagemaker:FeatureGroupOfflineStoreConfig (Bool) */
	static readonly FEATURE_GROUP_OFFLINE_STORE_CONFIG =
		"sagemaker:FeatureGroupOfflineStoreConfig";
	/** Condition key: sagemaker:FeatureGroupOfflineStoreKmsKey (ARN) */
	static readonly FEATURE_GROUP_OFFLINE_STORE_KMS_KEY =
		"sagemaker:FeatureGroupOfflineStoreKmsKey";
	/** Condition key: sagemaker:FeatureGroupOfflineStoreKmsKeyArn (ARN) */
	static readonly FEATURE_GROUP_OFFLINE_STORE_KMS_KEY_ARN =
		"sagemaker:FeatureGroupOfflineStoreKmsKeyArn";
	/** Condition key: sagemaker:FeatureGroupOfflineStoreS3Uri (String) */
	static readonly FEATURE_GROUP_OFFLINE_STORE_S3_URI =
		"sagemaker:FeatureGroupOfflineStoreS3Uri";
	/** Condition key: sagemaker:FeatureGroupOnlineStoreKmsKey (ARN) */
	static readonly FEATURE_GROUP_ONLINE_STORE_KMS_KEY =
		"sagemaker:FeatureGroupOnlineStoreKmsKey";
	/** Condition key: sagemaker:FeatureGroupOnlineStoreKmsKeyArn (ARN) */
	static readonly FEATURE_GROUP_ONLINE_STORE_KMS_KEY_ARN =
		"sagemaker:FeatureGroupOnlineStoreKmsKeyArn";
	/** Condition key: sagemaker:FileSystemAccessMode (String) */
	static readonly FILE_SYSTEM_ACCESS_MODE = "sagemaker:FileSystemAccessMode";
	/** Condition key: sagemaker:FileSystemDirectoryPath (String) */
	static readonly FILE_SYSTEM_DIRECTORY_PATH =
		"sagemaker:FileSystemDirectoryPath";
	/** Condition key: sagemaker:FileSystemId (String) */
	static readonly FILE_SYSTEM_ID = "sagemaker:FileSystemId";
	/** Condition key: sagemaker:FileSystemType (String) */
	static readonly FILE_SYSTEM_TYPE = "sagemaker:FileSystemType";
	/** Condition key: sagemaker:HomeEfsFileSystemKmsKey (ARN) */
	static readonly HOME_EFS_FILE_SYSTEM_KMS_KEY =
		"sagemaker:HomeEfsFileSystemKmsKey";
	/** Condition key: sagemaker:ImageArns (ArrayOfARN) */
	static readonly IMAGE_ARNS = "sagemaker:ImageArns";
	/** Condition key: sagemaker:ImageVersionArns (ArrayOfARN) */
	static readonly IMAGE_VERSION_ARNS = "sagemaker:ImageVersionArns";
	/** Condition key: sagemaker:InstanceTypes (ArrayOfString) */
	static readonly INSTANCE_TYPES = "sagemaker:InstanceTypes";
	/** Condition key: sagemaker:InterContainerTrafficEncryption (Bool) */
	static readonly INTER_CONTAINER_TRAFFIC_ENCRYPTION =
		"sagemaker:InterContainerTrafficEncryption";
	/** Condition key: sagemaker:KeepAlivePeriod (Numeric) */
	static readonly KEEP_ALIVE_PERIOD = "sagemaker:KeepAlivePeriod";
	/** Condition key: sagemaker:MaxRuntimeInSeconds (Numeric) */
	static readonly MAX_RUNTIME_IN_SECONDS = "sagemaker:MaxRuntimeInSeconds";
	/** Condition key: sagemaker:MinimumInstanceMetadataServiceVersion (String) */
	static readonly MINIMUM_INSTANCE_METADATA_SERVICE_VERSION =
		"sagemaker:MinimumInstanceMetadataServiceVersion";
	/** Condition key: sagemaker:ModelApprovalStatus (String) */
	static readonly MODEL_APPROVAL_STATUS = "sagemaker:ModelApprovalStatus";
	/** Condition key: sagemaker:ModelArn (ARN) */
	static readonly MODEL_ARN = "sagemaker:ModelArn";
	/** Condition key: sagemaker:ModelLifeCycle:Stage (String) */
	static readonly MODEL_LIFE_CYCLE_STAGE = "sagemaker:ModelLifeCycle:Stage";
	/** Condition key: sagemaker:ModelLifeCycle:StageStatus (String) */
	static readonly MODEL_LIFE_CYCLE_STAGE_STATUS =
		"sagemaker:ModelLifeCycle:StageStatus";
	/** Condition key: sagemaker:NetworkIsolation (Bool) */
	static readonly NETWORK_ISOLATION = "sagemaker:NetworkIsolation";
	/** Condition key: sagemaker:NotebookInstanceLifecycleConfigArns (ArrayOfARN) */
	static readonly NOTEBOOK_INSTANCE_LIFECYCLE_CONFIG_ARNS =
		"sagemaker:NotebookInstanceLifecycleConfigArns";
	/** Condition key: sagemaker:OutputKmsKey (ARN) */
	static readonly OUTPUT_KMS_KEY = "sagemaker:OutputKmsKey";
	/** Condition key: sagemaker:OutputKmsKeyArn (ARN) */
	static readonly OUTPUT_KMS_KEY_ARN = "sagemaker:OutputKmsKeyArn";
	/** Condition key: sagemaker:OwnerUserProfileArn (ARN) */
	static readonly OWNER_USER_PROFILE_ARN = "sagemaker:OwnerUserProfileArn";
	/** Condition key: sagemaker:PipelineVersionId (String) */
	static readonly PIPELINE_VERSION_ID = "sagemaker:PipelineVersionId";
	/** Condition key: sagemaker:RemoteAccess (String) */
	static readonly REMOTE_ACCESS = "sagemaker:RemoteAccess";
	/** Condition key: sagemaker:ResourceTag/ (String) */
	static readonly RESOURCE_TAG = "sagemaker:ResourceTag/";
	/** Condition key: sagemaker:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "sagemaker:ResourceTag/${TagKey}";
	/** Condition key: sagemaker:RootAccess (String) */
	static readonly ROOT_ACCESS = "sagemaker:RootAccess";
	/** Condition key: sagemaker:SearchVisibilityCondition/${FilterKey} (String) */
	static readonly SEARCH_VISIBILITY_CONDITION =
		"sagemaker:SearchVisibilityCondition/${FilterKey}";
	/** Condition key: sagemaker:ServerlessMaxConcurrency (Numeric) */
	static readonly SERVERLESS_MAX_CONCURRENCY =
		"sagemaker:ServerlessMaxConcurrency";
	/** Condition key: sagemaker:ServerlessMemorySize (Numeric) */
	static readonly SERVERLESS_MEMORY_SIZE = "sagemaker:ServerlessMemorySize";
	/** Condition key: sagemaker:SpaceSharingType (String) */
	static readonly SPACE_SHARING_TYPE = "sagemaker:SpaceSharingType";
	/** Condition key: sagemaker:StudioLifecycleConfigArns (ArrayOfARN) */
	static readonly STUDIO_LIFECYCLE_CONFIG_ARNS =
		"sagemaker:StudioLifecycleConfigArns";
	/** Condition key: sagemaker:TaggingAction (String) */
	static readonly TAGGING_ACTION = "sagemaker:TaggingAction";
	/** Condition key: sagemaker:TargetModel (String) */
	static readonly TARGET_MODEL = "sagemaker:TargetModel";
	/** Condition key: sagemaker:UserProfileName (String) */
	static readonly USER_PROFILE_NAME = "sagemaker:UserProfileName";
	/** Condition key: sagemaker:VolumeKmsKey (ARN) */
	static readonly VOLUME_KMS_KEY = "sagemaker:VolumeKmsKey";
	/** Condition key: sagemaker:VolumeKmsKeyArn (ARN) */
	static readonly VOLUME_KMS_KEY_ARN = "sagemaker:VolumeKmsKeyArn";
	/** Condition key: sagemaker:VpcSecurityGroupIds (ArrayOfString) */
	static readonly VPC_SECURITY_GROUP_IDS = "sagemaker:VpcSecurityGroupIds";
	/** Condition key: sagemaker:VpcSubnets (ArrayOfString) */
	static readonly VPC_SUBNETS = "sagemaker:VpcSubnets";
	/** Condition key: sagemaker:WorkteamArn (ARN) */
	static readonly WORKTEAM_ARN = "sagemaker:WorkteamArn";
	/** Condition key: sagemaker:WorkteamType (String) */
	static readonly WORKTEAM_TYPE = "sagemaker:WorkteamType";

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
	 * Generates a condition block for `sagemaker:AcceleratorTypes`.
	 */
	static acceleratorTypes(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "sagemaker:AcceleratorTypes": values },
		};
	}

	/**
	 * Generates a condition block for `sagemaker:AppNetworkAccessType`.
	 */
	static appNetworkAccessType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:AppNetworkAccessType": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:BearerTokenType`.
	 */
	static bearerTokenType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:BearerTokenType": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:CurrentCustomerMetadataProperties/${MetadataKey}`.
	 */
	static currentCustomerMetadataProperties(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"sagemaker:CurrentCustomerMetadataProperties/${MetadataKey}": value,
			},
		};
	}

	/**
	 * Generates a condition block for `sagemaker:CurrentModelLifeCycleStage`.
	 */
	static currentModelLifeCycleStage(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:CurrentModelLifeCycleStage": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:CurrentModelLifeCycleStageStatus`.
	 */
	static currentModelLifeCycleStageStatus(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "sagemaker:CurrentModelLifeCycleStageStatus": value },
		};
	}

	/**
	 * Generates a condition block for `sagemaker:CustomerMetadataProperties/${MetadataKey}`.
	 */
	static customerMetadataProperties(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"sagemaker:CustomerMetadataProperties/${MetadataKey}": value,
			},
		};
	}

	/**
	 * Generates a condition block for `sagemaker:CustomerMetadataPropertiesToRemove`.
	 */
	static customerMetadataPropertiesToRemove(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"sagemaker:CustomerMetadataPropertiesToRemove": values,
			},
		};
	}

	/**
	 * Generates a condition block for `sagemaker:DirectGatedModelAccess`.
	 */
	static directGatedModelAccess(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:DirectGatedModelAccess": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:DirectInternetAccess`.
	 */
	static directInternetAccess(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:DirectInternetAccess": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:DomainId`.
	 */
	static domainId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:DomainId": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:DomainSharingOutputKmsKey`.
	 */
	static domainSharingOutputKMSKey(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "sagemaker:DomainSharingOutputKmsKey": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:DomainSharingOutputKmsKeyArn`.
	 */
	static domainSharingOutputKMSKeyARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "sagemaker:DomainSharingOutputKmsKeyArn": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:EnableRemoteDebug`.
	 */
	static enableRemoteDebug(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "sagemaker:EnableRemoteDebug": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:FeatureGroupDisableGlueTableCreation`.
	 */
	static featureGroupDisableGlueTableCreation(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return {
			Bool: { "sagemaker:FeatureGroupDisableGlueTableCreation": value },
		};
	}

	/**
	 * Generates a condition block for `sagemaker:FeatureGroupEnableOnlineStore`.
	 */
	static featureGroupEnableOnlineStore(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "sagemaker:FeatureGroupEnableOnlineStore": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:FeatureGroupOfflineStoreConfig`.
	 */
	static featureGroupOfflineStoreConfig(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "sagemaker:FeatureGroupOfflineStoreConfig": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:FeatureGroupOfflineStoreKmsKey`.
	 */
	static featureGroupOfflineStoreKMSKey(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "sagemaker:FeatureGroupOfflineStoreKmsKey": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:FeatureGroupOfflineStoreKmsKeyArn`.
	 */
	static featureGroupOfflineStoreKMSKeyARN(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			ArnEquals: { "sagemaker:FeatureGroupOfflineStoreKmsKeyArn": value },
		};
	}

	/**
	 * Generates a condition block for `sagemaker:FeatureGroupOfflineStoreS3Uri`.
	 */
	static featureGroupOfflineStoreS3URI(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "sagemaker:FeatureGroupOfflineStoreS3Uri": value },
		};
	}

	/**
	 * Generates a condition block for `sagemaker:FeatureGroupOnlineStoreKmsKey`.
	 */
	static featureGroupOnlineStoreKMSKey(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "sagemaker:FeatureGroupOnlineStoreKmsKey": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:FeatureGroupOnlineStoreKmsKeyArn`.
	 */
	static featureGroupOnlineStoreKMSKeyARN(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			ArnEquals: { "sagemaker:FeatureGroupOnlineStoreKmsKeyArn": value },
		};
	}

	/**
	 * Generates a condition block for `sagemaker:FileSystemAccessMode`.
	 */
	static fileSystemAccessMode(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:FileSystemAccessMode": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:FileSystemDirectoryPath`.
	 */
	static fileSystemDirectoryPath(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:FileSystemDirectoryPath": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:FileSystemId`.
	 */
	static fileSystemId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:FileSystemId": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:FileSystemType`.
	 */
	static fileSystemType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:FileSystemType": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:HomeEfsFileSystemKmsKey`.
	 */
	static homeEFSFileSystemKMSKey(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "sagemaker:HomeEfsFileSystemKmsKey": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:ImageArns`.
	 */
	static imageArns(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "sagemaker:ImageArns": values } };
	}

	/**
	 * Generates a condition block for `sagemaker:ImageVersionArns`.
	 */
	static imageVersionArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": { "sagemaker:ImageVersionArns": values },
		};
	}

	/**
	 * Generates a condition block for `sagemaker:InstanceTypes`.
	 */
	static instanceTypes(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "sagemaker:InstanceTypes": values },
		};
	}

	/**
	 * Generates a condition block for `sagemaker:InterContainerTrafficEncryption`.
	 */
	static interContainerTrafficEncryption(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "sagemaker:InterContainerTrafficEncryption": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:KeepAlivePeriod`.
	 */
	static keepAlivePeriod(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "sagemaker:KeepAlivePeriod": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:MaxRuntimeInSeconds`.
	 */
	static maxRuntimeInSeconds(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "sagemaker:MaxRuntimeInSeconds": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:MinimumInstanceMetadataServiceVersion`.
	 */
	static minimumInstanceMetadataServiceVersion(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"sagemaker:MinimumInstanceMetadataServiceVersion": value,
			},
		};
	}

	/**
	 * Generates a condition block for `sagemaker:ModelApprovalStatus`.
	 */
	static modelApprovalStatus(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:ModelApprovalStatus": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:ModelArn`.
	 */
	static modelARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "sagemaker:ModelArn": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:ModelLifeCycle:Stage`.
	 */
	static modelLifeCycleStage(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:ModelLifeCycle:Stage": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:ModelLifeCycle:StageStatus`.
	 */
	static modelLifeCycleStageStatus(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:ModelLifeCycle:StageStatus": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:NetworkIsolation`.
	 */
	static networkIsolation(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "sagemaker:NetworkIsolation": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:NotebookInstanceLifecycleConfigArns`.
	 */
	static notebookInstanceLifecycleConfigArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": {
				"sagemaker:NotebookInstanceLifecycleConfigArns": values,
			},
		};
	}

	/**
	 * Generates a condition block for `sagemaker:OutputKmsKey`.
	 */
	static outputKMSKey(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "sagemaker:OutputKmsKey": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:OutputKmsKeyArn`.
	 */
	static outputKMSKeyARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "sagemaker:OutputKmsKeyArn": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:OwnerUserProfileArn`.
	 */
	static ownerUserProfileARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "sagemaker:OwnerUserProfileArn": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:PipelineVersionId`.
	 */
	static pipelineVersionId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:PipelineVersionId": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:RemoteAccess`.
	 */
	static remoteAccess(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:RemoteAccess": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:ResourceTag/`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:ResourceTag/": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:RootAccess`.
	 */
	static rootAccess(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:RootAccess": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:SearchVisibilityCondition/${FilterKey}`.
	 */
	static searchVisibilityCondition(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"sagemaker:SearchVisibilityCondition/${FilterKey}": value,
			},
		};
	}

	/**
	 * Generates a condition block for `sagemaker:ServerlessMaxConcurrency`.
	 */
	static serverlessMaxConcurrency(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "sagemaker:ServerlessMaxConcurrency": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:ServerlessMemorySize`.
	 */
	static serverlessMemorySize(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "sagemaker:ServerlessMemorySize": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:SpaceSharingType`.
	 */
	static spaceSharingType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:SpaceSharingType": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:StudioLifecycleConfigArns`.
	 */
	static studioLifecycleConfigArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": {
				"sagemaker:StudioLifecycleConfigArns": values,
			},
		};
	}

	/**
	 * Generates a condition block for `sagemaker:TaggingAction`.
	 */
	static taggingAction(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:TaggingAction": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:TargetModel`.
	 */
	static targetModel(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:TargetModel": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:UserProfileName`.
	 */
	static userProfileName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:UserProfileName": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:VolumeKmsKey`.
	 */
	static volumeKMSKey(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "sagemaker:VolumeKmsKey": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:VolumeKmsKeyArn`.
	 */
	static volumeKMSKeyARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "sagemaker:VolumeKmsKeyArn": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:VpcSecurityGroupIds`.
	 */
	static vpcSecurityGroupIds(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "sagemaker:VpcSecurityGroupIds": values },
		};
	}

	/**
	 * Generates a condition block for `sagemaker:VpcSubnets`.
	 */
	static vpcSubnets(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "sagemaker:VpcSubnets": values } };
	}

	/**
	 * Generates a condition block for `sagemaker:WorkteamArn`.
	 */
	static workteamARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "sagemaker:WorkteamArn": value } };
	}

	/**
	 * Generates a condition block for `sagemaker:WorkteamType`.
	 */
	static workteamType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:WorkteamType": value } };
	}
}
