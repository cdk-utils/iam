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
	static readonly AccessModelPackage = "sagemaker:AccessModelPackage";
	/** [Write] sagemaker:AddAssociation */
	static readonly AddAssociation = "sagemaker:AddAssociation";
	/** [Tagging] sagemaker:AddTags */
	static readonly AddTags = "sagemaker:AddTags";
	/** [Write] sagemaker:AssociateTrialComponent */
	static readonly AssociateTrialComponent = "sagemaker:AssociateTrialComponent";
	/** [Write] sagemaker:AttachClusterNodeVolume */
	static readonly AttachClusterNodeVolume = "sagemaker:AttachClusterNodeVolume";
	/** [Write] sagemaker:BatchAddClusterNodes */
	static readonly BatchAddClusterNodes = "sagemaker:BatchAddClusterNodes";
	/** [Write] sagemaker:BatchDeleteClusterNodes */
	static readonly BatchDeleteClusterNodes = "sagemaker:BatchDeleteClusterNodes";
	/** [Read] sagemaker:BatchDescribeModelPackage */
	static readonly BatchDescribeModelPackage =
		"sagemaker:BatchDescribeModelPackage";
	/** [Read] sagemaker:BatchGetMetrics */
	static readonly BatchGetMetrics = "sagemaker:BatchGetMetrics";
	/** [Read] sagemaker:BatchGetRecord */
	static readonly BatchGetRecord = "sagemaker:BatchGetRecord";
	/** [Write] sagemaker:BatchPutMetrics */
	static readonly BatchPutMetrics = "sagemaker:BatchPutMetrics";
	/** [Write] sagemaker:BatchRebootClusterNodes */
	static readonly BatchRebootClusterNodes = "sagemaker:BatchRebootClusterNodes";
	/** [Write] sagemaker:BatchReplaceClusterNodes */
	static readonly BatchReplaceClusterNodes =
		"sagemaker:BatchReplaceClusterNodes";
	/** [Write] sagemaker:BatchWriteRecord */
	static readonly BatchWriteRecord = "sagemaker:BatchWriteRecord";
	/** [Write] sagemaker:CallMlflowAppApi */
	static readonly CallMlflowAppApi = "sagemaker:CallMlflowAppApi";
	/** [Write] sagemaker:CallPartnerAppApi */
	static readonly CallPartnerAppApi = "sagemaker:CallPartnerAppApi";
	/** [Read] sagemaker:CallWithBearerToken */
	static readonly CallWithBearerToken = "sagemaker:CallWithBearerToken";
	/** [Write] sagemaker:CompleteRollout */
	static readonly CompleteRollout = "sagemaker:CompleteRollout";
	/** [Write] sagemaker:CreateAIBenchmarkJob */
	static readonly CreateAIBenchmarkJob = "sagemaker:CreateAIBenchmarkJob";
	/** [Write] sagemaker:CreateAIRecommendationJob */
	static readonly CreateAIRecommendationJob =
		"sagemaker:CreateAIRecommendationJob";
	/** [Write] sagemaker:CreateAIWorkloadConfig */
	static readonly CreateAIWorkloadConfig = "sagemaker:CreateAIWorkloadConfig";
	/** [Write] sagemaker:CreateAction */
	static readonly CreateAction = "sagemaker:CreateAction";
	/** [Write] sagemaker:CreateAlgorithm */
	static readonly CreateAlgorithm = "sagemaker:CreateAlgorithm";
	/** [Write] sagemaker:CreateApp */
	static readonly CreateApp = "sagemaker:CreateApp";
	/** [Write] sagemaker:CreateAppImageConfig */
	static readonly CreateAppImageConfig = "sagemaker:CreateAppImageConfig";
	/** [Write] sagemaker:CreateArtifact */
	static readonly CreateArtifact = "sagemaker:CreateArtifact";
	/** [Write] sagemaker:CreateAutoMLJob */
	static readonly CreateAutoMLJob = "sagemaker:CreateAutoMLJob";
	/** [Write] sagemaker:CreateAutoMLJobV2 */
	static readonly CreateAutoMLJobV2 = "sagemaker:CreateAutoMLJobV2";
	/** [Write] sagemaker:CreateCluster */
	static readonly CreateCluster = "sagemaker:CreateCluster";
	/** [Write] sagemaker:CreateClusterSchedulerConfig */
	static readonly CreateClusterSchedulerConfig =
		"sagemaker:CreateClusterSchedulerConfig";
	/** [Write] sagemaker:CreateCodeRepository */
	static readonly CreateCodeRepository = "sagemaker:CreateCodeRepository";
	/** [Write] sagemaker:CreateCompilationJob */
	static readonly CreateCompilationJob = "sagemaker:CreateCompilationJob";
	/** [Write] sagemaker:CreateComputeQuota */
	static readonly CreateComputeQuota = "sagemaker:CreateComputeQuota";
	/** [Write] sagemaker:CreateContext */
	static readonly CreateContext = "sagemaker:CreateContext";
	/** [Write] sagemaker:CreateDataQualityJobDefinition */
	static readonly CreateDataQualityJobDefinition =
		"sagemaker:CreateDataQualityJobDefinition";
	/** [Write] sagemaker:CreateDeviceFleet */
	static readonly CreateDeviceFleet = "sagemaker:CreateDeviceFleet";
	/** [Write] sagemaker:CreateDomain */
	static readonly CreateDomain = "sagemaker:CreateDomain";
	/** [Write] sagemaker:CreateEdgeDeploymentPlan */
	static readonly CreateEdgeDeploymentPlan =
		"sagemaker:CreateEdgeDeploymentPlan";
	/** [Write] sagemaker:CreateEdgeDeploymentStage */
	static readonly CreateEdgeDeploymentStage =
		"sagemaker:CreateEdgeDeploymentStage";
	/** [Write] sagemaker:CreateEdgePackagingJob */
	static readonly CreateEdgePackagingJob = "sagemaker:CreateEdgePackagingJob";
	/** [Write] sagemaker:CreateEndpoint */
	static readonly CreateEndpoint = "sagemaker:CreateEndpoint";
	/** [Write] sagemaker:CreateEndpointConfig */
	static readonly CreateEndpointConfig = "sagemaker:CreateEndpointConfig";
	/** [Write] sagemaker:CreateExperiment */
	static readonly CreateExperiment = "sagemaker:CreateExperiment";
	/** [Write] sagemaker:CreateFeatureGroup */
	static readonly CreateFeatureGroup = "sagemaker:CreateFeatureGroup";
	/** [Write] sagemaker:CreateFlowDefinition */
	static readonly CreateFlowDefinition = "sagemaker:CreateFlowDefinition";
	/** [Write] sagemaker:CreateHub */
	static readonly CreateHub = "sagemaker:CreateHub";
	/** [Read] sagemaker:CreateHubContentPresignedUrls */
	static readonly CreateHubContentPresignedUrls =
		"sagemaker:CreateHubContentPresignedUrls";
	/** [Write] sagemaker:CreateHubContentReference */
	static readonly CreateHubContentReference =
		"sagemaker:CreateHubContentReference";
	/** [Write] sagemaker:CreateHumanTaskUi */
	static readonly CreateHumanTaskUi = "sagemaker:CreateHumanTaskUi";
	/** [Write] sagemaker:CreateHyperParameterTuningJob */
	static readonly CreateHyperParameterTuningJob =
		"sagemaker:CreateHyperParameterTuningJob";
	/** [Write] sagemaker:CreateImage */
	static readonly CreateImage = "sagemaker:CreateImage";
	/** [Write] sagemaker:CreateImageVersion */
	static readonly CreateImageVersion = "sagemaker:CreateImageVersion";
	/** [Write] sagemaker:CreateInferenceComponent */
	static readonly CreateInferenceComponent =
		"sagemaker:CreateInferenceComponent";
	/** [Write] sagemaker:CreateInferenceExperiment */
	static readonly CreateInferenceExperiment =
		"sagemaker:CreateInferenceExperiment";
	/** [Write] sagemaker:CreateInferenceRecommendationsJob */
	static readonly CreateInferenceRecommendationsJob =
		"sagemaker:CreateInferenceRecommendationsJob";
	/** [Write] sagemaker:CreateJob */
	static readonly CreateJob = "sagemaker:CreateJob";
	/** [Write] sagemaker:CreateLabelingJob */
	static readonly CreateLabelingJob = "sagemaker:CreateLabelingJob";
	/** [Write] sagemaker:CreateLineageGroupPolicy */
	static readonly CreateLineageGroupPolicy =
		"sagemaker:CreateLineageGroupPolicy";
	/** [Write] sagemaker:CreateMlflowApp */
	static readonly CreateMlflowApp = "sagemaker:CreateMlflowApp";
	/** [Write] sagemaker:CreateMlflowTrackingServer */
	static readonly CreateMlflowTrackingServer =
		"sagemaker:CreateMlflowTrackingServer";
	/** [Write] sagemaker:CreateModel */
	static readonly CreateModel = "sagemaker:CreateModel";
	/** [Write] sagemaker:CreateModelBiasJobDefinition */
	static readonly CreateModelBiasJobDefinition =
		"sagemaker:CreateModelBiasJobDefinition";
	/** [Write] sagemaker:CreateModelCard */
	static readonly CreateModelCard = "sagemaker:CreateModelCard";
	/** [Write] sagemaker:CreateModelCardExportJob */
	static readonly CreateModelCardExportJob =
		"sagemaker:CreateModelCardExportJob";
	/** [Write] sagemaker:CreateModelExplainabilityJobDefinition */
	static readonly CreateModelExplainabilityJobDefinition =
		"sagemaker:CreateModelExplainabilityJobDefinition";
	/** [Write] sagemaker:CreateModelPackage */
	static readonly CreateModelPackage = "sagemaker:CreateModelPackage";
	/** [Write] sagemaker:CreateModelPackageGroup */
	static readonly CreateModelPackageGroup = "sagemaker:CreateModelPackageGroup";
	/** [Write] sagemaker:CreateModelQualityJobDefinition */
	static readonly CreateModelQualityJobDefinition =
		"sagemaker:CreateModelQualityJobDefinition";
	/** [Write] sagemaker:CreateMonitoringSchedule */
	static readonly CreateMonitoringSchedule =
		"sagemaker:CreateMonitoringSchedule";
	/** [Write] sagemaker:CreateNotebookInstance */
	static readonly CreateNotebookInstance = "sagemaker:CreateNotebookInstance";
	/** [Write] sagemaker:CreateNotebookInstanceLifecycleConfig */
	static readonly CreateNotebookInstanceLifecycleConfig =
		"sagemaker:CreateNotebookInstanceLifecycleConfig";
	/** [Write] sagemaker:CreateOptimizationJob */
	static readonly CreateOptimizationJob = "sagemaker:CreateOptimizationJob";
	/** [Write] sagemaker:CreatePartnerApp */
	static readonly CreatePartnerApp = "sagemaker:CreatePartnerApp";
	/** [Write] sagemaker:CreatePartnerAppPresignedUrl */
	static readonly CreatePartnerAppPresignedUrl =
		"sagemaker:CreatePartnerAppPresignedUrl";
	/** [Write] sagemaker:CreatePipeline */
	static readonly CreatePipeline = "sagemaker:CreatePipeline";
	/** [Write] sagemaker:CreatePresignedDomainUrl */
	static readonly CreatePresignedDomainUrl =
		"sagemaker:CreatePresignedDomainUrl";
	/** [Write] sagemaker:CreatePresignedMlflowAppUrl */
	static readonly CreatePresignedMlflowAppUrl =
		"sagemaker:CreatePresignedMlflowAppUrl";
	/** [Write] sagemaker:CreatePresignedMlflowTrackingServerUrl */
	static readonly CreatePresignedMlflowTrackingServerUrl =
		"sagemaker:CreatePresignedMlflowTrackingServerUrl";
	/** [Write] sagemaker:CreatePresignedNotebookInstanceUrl */
	static readonly CreatePresignedNotebookInstanceUrl =
		"sagemaker:CreatePresignedNotebookInstanceUrl";
	/** [Write] sagemaker:CreateProcessingJob */
	static readonly CreateProcessingJob = "sagemaker:CreateProcessingJob";
	/** [Write] sagemaker:CreateProject */
	static readonly CreateProject = "sagemaker:CreateProject";
	/** [Write] sagemaker:CreateReservedCapacity */
	static readonly CreateReservedCapacity = "sagemaker:CreateReservedCapacity";
	/** [Write] sagemaker:CreateSharedModel */
	static readonly CreateSharedModel = "sagemaker:CreateSharedModel";
	/** [Write] sagemaker:CreateSpace */
	static readonly CreateSpace = "sagemaker:CreateSpace";
	/** [Write] sagemaker:CreateStudioLifecycleConfig */
	static readonly CreateStudioLifecycleConfig =
		"sagemaker:CreateStudioLifecycleConfig";
	/** [Write] sagemaker:CreateTrainingJob */
	static readonly CreateTrainingJob = "sagemaker:CreateTrainingJob";
	/** [Write] sagemaker:CreateTrainingPlan */
	static readonly CreateTrainingPlan = "sagemaker:CreateTrainingPlan";
	/** [Write] sagemaker:CreateTransformJob */
	static readonly CreateTransformJob = "sagemaker:CreateTransformJob";
	/** [Write] sagemaker:CreateTrial */
	static readonly CreateTrial = "sagemaker:CreateTrial";
	/** [Write] sagemaker:CreateTrialComponent */
	static readonly CreateTrialComponent = "sagemaker:CreateTrialComponent";
	/** [Write] sagemaker:CreateUserProfile */
	static readonly CreateUserProfile = "sagemaker:CreateUserProfile";
	/** [Write] sagemaker:CreateWorkforce */
	static readonly CreateWorkforce = "sagemaker:CreateWorkforce";
	/** [Write] sagemaker:CreateWorkteam */
	static readonly CreateWorkteam = "sagemaker:CreateWorkteam";
	/** [Write] sagemaker:DeleteAIBenchmarkJob */
	static readonly DeleteAIBenchmarkJob = "sagemaker:DeleteAIBenchmarkJob";
	/** [Write] sagemaker:DeleteAIRecommendationJob */
	static readonly DeleteAIRecommendationJob =
		"sagemaker:DeleteAIRecommendationJob";
	/** [Write] sagemaker:DeleteAIWorkloadConfig */
	static readonly DeleteAIWorkloadConfig = "sagemaker:DeleteAIWorkloadConfig";
	/** [Write] sagemaker:DeleteAction */
	static readonly DeleteAction = "sagemaker:DeleteAction";
	/** [Write] sagemaker:DeleteAlgorithm */
	static readonly DeleteAlgorithm = "sagemaker:DeleteAlgorithm";
	/** [Write] sagemaker:DeleteApp */
	static readonly DeleteApp = "sagemaker:DeleteApp";
	/** [Write] sagemaker:DeleteAppImageConfig */
	static readonly DeleteAppImageConfig = "sagemaker:DeleteAppImageConfig";
	/** [Write] sagemaker:DeleteArtifact */
	static readonly DeleteArtifact = "sagemaker:DeleteArtifact";
	/** [Write] sagemaker:DeleteAssociation */
	static readonly DeleteAssociation = "sagemaker:DeleteAssociation";
	/** [Write] sagemaker:DeleteCluster */
	static readonly DeleteCluster = "sagemaker:DeleteCluster";
	/** [Write] sagemaker:DeleteClusterSchedulerConfig */
	static readonly DeleteClusterSchedulerConfig =
		"sagemaker:DeleteClusterSchedulerConfig";
	/** [Write] sagemaker:DeleteCodeRepository */
	static readonly DeleteCodeRepository = "sagemaker:DeleteCodeRepository";
	/** [Write] sagemaker:DeleteCompilationJob */
	static readonly DeleteCompilationJob = "sagemaker:DeleteCompilationJob";
	/** [Write] sagemaker:DeleteComputeQuota */
	static readonly DeleteComputeQuota = "sagemaker:DeleteComputeQuota";
	/** [Write] sagemaker:DeleteContext */
	static readonly DeleteContext = "sagemaker:DeleteContext";
	/** [Write] sagemaker:DeleteDataQualityJobDefinition */
	static readonly DeleteDataQualityJobDefinition =
		"sagemaker:DeleteDataQualityJobDefinition";
	/** [Write] sagemaker:DeleteDeviceFleet */
	static readonly DeleteDeviceFleet = "sagemaker:DeleteDeviceFleet";
	/** [Write] sagemaker:DeleteDomain */
	static readonly DeleteDomain = "sagemaker:DeleteDomain";
	/** [Write] sagemaker:DeleteEdgeDeploymentPlan */
	static readonly DeleteEdgeDeploymentPlan =
		"sagemaker:DeleteEdgeDeploymentPlan";
	/** [Write] sagemaker:DeleteEdgeDeploymentStage */
	static readonly DeleteEdgeDeploymentStage =
		"sagemaker:DeleteEdgeDeploymentStage";
	/** [Write] sagemaker:DeleteEndpoint */
	static readonly DeleteEndpoint = "sagemaker:DeleteEndpoint";
	/** [Write] sagemaker:DeleteEndpointConfig */
	static readonly DeleteEndpointConfig = "sagemaker:DeleteEndpointConfig";
	/** [Write] sagemaker:DeleteExperiment */
	static readonly DeleteExperiment = "sagemaker:DeleteExperiment";
	/** [Write] sagemaker:DeleteFeatureGroup */
	static readonly DeleteFeatureGroup = "sagemaker:DeleteFeatureGroup";
	/** [Write] sagemaker:DeleteFlowDefinition */
	static readonly DeleteFlowDefinition = "sagemaker:DeleteFlowDefinition";
	/** [Write] sagemaker:DeleteHub */
	static readonly DeleteHub = "sagemaker:DeleteHub";
	/** [Write] sagemaker:DeleteHubContent */
	static readonly DeleteHubContent = "sagemaker:DeleteHubContent";
	/** [Write] sagemaker:DeleteHubContentReference */
	static readonly DeleteHubContentReference =
		"sagemaker:DeleteHubContentReference";
	/** [Write] sagemaker:DeleteHumanLoop */
	static readonly DeleteHumanLoop = "sagemaker:DeleteHumanLoop";
	/** [Write] sagemaker:DeleteHumanTaskUi */
	static readonly DeleteHumanTaskUi = "sagemaker:DeleteHumanTaskUi";
	/** [Write] sagemaker:DeleteHyperParameterTuningJob */
	static readonly DeleteHyperParameterTuningJob =
		"sagemaker:DeleteHyperParameterTuningJob";
	/** [Write] sagemaker:DeleteImage */
	static readonly DeleteImage = "sagemaker:DeleteImage";
	/** [Write] sagemaker:DeleteImageVersion */
	static readonly DeleteImageVersion = "sagemaker:DeleteImageVersion";
	/** [Write] sagemaker:DeleteInferenceComponent */
	static readonly DeleteInferenceComponent =
		"sagemaker:DeleteInferenceComponent";
	/** [Write] sagemaker:DeleteInferenceExperiment */
	static readonly DeleteInferenceExperiment =
		"sagemaker:DeleteInferenceExperiment";
	/** [Write] sagemaker:DeleteJob */
	static readonly DeleteJob = "sagemaker:DeleteJob";
	/** [Write] sagemaker:DeleteLineageGroupPolicy */
	static readonly DeleteLineageGroupPolicy =
		"sagemaker:DeleteLineageGroupPolicy";
	/** [Write] sagemaker:DeleteMlflowApp */
	static readonly DeleteMlflowApp = "sagemaker:DeleteMlflowApp";
	/** [Write] sagemaker:DeleteMlflowTrackingServer */
	static readonly DeleteMlflowTrackingServer =
		"sagemaker:DeleteMlflowTrackingServer";
	/** [Write] sagemaker:DeleteModel */
	static readonly DeleteModel = "sagemaker:DeleteModel";
	/** [Write] sagemaker:DeleteModelBiasJobDefinition */
	static readonly DeleteModelBiasJobDefinition =
		"sagemaker:DeleteModelBiasJobDefinition";
	/** [Write] sagemaker:DeleteModelCard */
	static readonly DeleteModelCard = "sagemaker:DeleteModelCard";
	/** [Write] sagemaker:DeleteModelExplainabilityJobDefinition */
	static readonly DeleteModelExplainabilityJobDefinition =
		"sagemaker:DeleteModelExplainabilityJobDefinition";
	/** [Write] sagemaker:DeleteModelPackage */
	static readonly DeleteModelPackage = "sagemaker:DeleteModelPackage";
	/** [Write] sagemaker:DeleteModelPackageGroup */
	static readonly DeleteModelPackageGroup = "sagemaker:DeleteModelPackageGroup";
	/** [Write] sagemaker:DeleteModelPackageGroupPolicy */
	static readonly DeleteModelPackageGroupPolicy =
		"sagemaker:DeleteModelPackageGroupPolicy";
	/** [Write] sagemaker:DeleteModelQualityJobDefinition */
	static readonly DeleteModelQualityJobDefinition =
		"sagemaker:DeleteModelQualityJobDefinition";
	/** [Write] sagemaker:DeleteMonitoringSchedule */
	static readonly DeleteMonitoringSchedule =
		"sagemaker:DeleteMonitoringSchedule";
	/** [Write] sagemaker:DeleteNotebookInstance */
	static readonly DeleteNotebookInstance = "sagemaker:DeleteNotebookInstance";
	/** [Write] sagemaker:DeleteNotebookInstanceLifecycleConfig */
	static readonly DeleteNotebookInstanceLifecycleConfig =
		"sagemaker:DeleteNotebookInstanceLifecycleConfig";
	/** [Write] sagemaker:DeleteOptimizationJob */
	static readonly DeleteOptimizationJob = "sagemaker:DeleteOptimizationJob";
	/** [Write] sagemaker:DeletePartnerApp */
	static readonly DeletePartnerApp = "sagemaker:DeletePartnerApp";
	/** [Write] sagemaker:DeletePipeline */
	static readonly DeletePipeline = "sagemaker:DeletePipeline";
	/** [Write] sagemaker:DeleteProcessingJob */
	static readonly DeleteProcessingJob = "sagemaker:DeleteProcessingJob";
	/** [Write] sagemaker:DeleteProject */
	static readonly DeleteProject = "sagemaker:DeleteProject";
	/** [Write] sagemaker:DeleteRecord */
	static readonly DeleteRecord = "sagemaker:DeleteRecord";
	/** [Write] sagemaker:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "sagemaker:DeleteResourcePolicy";
	/** [Write] sagemaker:DeleteSpace */
	static readonly DeleteSpace = "sagemaker:DeleteSpace";
	/** [Write] sagemaker:DeleteStudioLifecycleConfig */
	static readonly DeleteStudioLifecycleConfig =
		"sagemaker:DeleteStudioLifecycleConfig";
	/** [Tagging] sagemaker:DeleteTags */
	static readonly DeleteTags = "sagemaker:DeleteTags";
	/** [Write] sagemaker:DeleteTrainingJob */
	static readonly DeleteTrainingJob = "sagemaker:DeleteTrainingJob";
	/** [Write] sagemaker:DeleteTrial */
	static readonly DeleteTrial = "sagemaker:DeleteTrial";
	/** [Write] sagemaker:DeleteTrialComponent */
	static readonly DeleteTrialComponent = "sagemaker:DeleteTrialComponent";
	/** [Write] sagemaker:DeleteUserProfile */
	static readonly DeleteUserProfile = "sagemaker:DeleteUserProfile";
	/** [Write] sagemaker:DeleteWorkforce */
	static readonly DeleteWorkforce = "sagemaker:DeleteWorkforce";
	/** [Write] sagemaker:DeleteWorkteam */
	static readonly DeleteWorkteam = "sagemaker:DeleteWorkteam";
	/** [Write] sagemaker:DeployHubModel */
	static readonly DeployHubModel = "sagemaker:DeployHubModel";
	/** [Write] sagemaker:DeregisterDevices */
	static readonly DeregisterDevices = "sagemaker:DeregisterDevices";
	/** [Read] sagemaker:DescribeAIBenchmarkJob */
	static readonly DescribeAIBenchmarkJob = "sagemaker:DescribeAIBenchmarkJob";
	/** [Read] sagemaker:DescribeAIRecommendationJob */
	static readonly DescribeAIRecommendationJob =
		"sagemaker:DescribeAIRecommendationJob";
	/** [Read] sagemaker:DescribeAIWorkloadConfig */
	static readonly DescribeAIWorkloadConfig =
		"sagemaker:DescribeAIWorkloadConfig";
	/** [Read] sagemaker:DescribeAction */
	static readonly DescribeAction = "sagemaker:DescribeAction";
	/** [Read] sagemaker:DescribeAlgorithm */
	static readonly DescribeAlgorithm = "sagemaker:DescribeAlgorithm";
	/** [Read] sagemaker:DescribeApp */
	static readonly DescribeApp = "sagemaker:DescribeApp";
	/** [Read] sagemaker:DescribeAppImageConfig */
	static readonly DescribeAppImageConfig = "sagemaker:DescribeAppImageConfig";
	/** [Read] sagemaker:DescribeArtifact */
	static readonly DescribeArtifact = "sagemaker:DescribeArtifact";
	/** [Read] sagemaker:DescribeAutoMLJob */
	static readonly DescribeAutoMLJob = "sagemaker:DescribeAutoMLJob";
	/** [Read] sagemaker:DescribeAutoMLJobV2 */
	static readonly DescribeAutoMLJobV2 = "sagemaker:DescribeAutoMLJobV2";
	/** [Read] sagemaker:DescribeCluster */
	static readonly DescribeCluster = "sagemaker:DescribeCluster";
	/** [Read] sagemaker:DescribeClusterEvent */
	static readonly DescribeClusterEvent = "sagemaker:DescribeClusterEvent";
	/** [Read] sagemaker:DescribeClusterInference */
	static readonly DescribeClusterInference =
		"sagemaker:DescribeClusterInference";
	/** [Read] sagemaker:DescribeClusterNode */
	static readonly DescribeClusterNode = "sagemaker:DescribeClusterNode";
	/** [Read] sagemaker:DescribeClusterSchedulerConfig */
	static readonly DescribeClusterSchedulerConfig =
		"sagemaker:DescribeClusterSchedulerConfig";
	/** [Read] sagemaker:DescribeCodeRepository */
	static readonly DescribeCodeRepository = "sagemaker:DescribeCodeRepository";
	/** [Read] sagemaker:DescribeCompilationJob */
	static readonly DescribeCompilationJob = "sagemaker:DescribeCompilationJob";
	/** [Read] sagemaker:DescribeComputeQuota */
	static readonly DescribeComputeQuota = "sagemaker:DescribeComputeQuota";
	/** [Read] sagemaker:DescribeContext */
	static readonly DescribeContext = "sagemaker:DescribeContext";
	/** [Read] sagemaker:DescribeDataQualityJobDefinition */
	static readonly DescribeDataQualityJobDefinition =
		"sagemaker:DescribeDataQualityJobDefinition";
	/** [Read] sagemaker:DescribeDevice */
	static readonly DescribeDevice = "sagemaker:DescribeDevice";
	/** [Read] sagemaker:DescribeDeviceFleet */
	static readonly DescribeDeviceFleet = "sagemaker:DescribeDeviceFleet";
	/** [Read] sagemaker:DescribeDomain */
	static readonly DescribeDomain = "sagemaker:DescribeDomain";
	/** [Read] sagemaker:DescribeEdgeDeploymentPlan */
	static readonly DescribeEdgeDeploymentPlan =
		"sagemaker:DescribeEdgeDeploymentPlan";
	/** [Read] sagemaker:DescribeEdgePackagingJob */
	static readonly DescribeEdgePackagingJob =
		"sagemaker:DescribeEdgePackagingJob";
	/** [Read] sagemaker:DescribeEndpoint */
	static readonly DescribeEndpoint = "sagemaker:DescribeEndpoint";
	/** [Read] sagemaker:DescribeEndpointConfig */
	static readonly DescribeEndpointConfig = "sagemaker:DescribeEndpointConfig";
	/** [Read] sagemaker:DescribeExperiment */
	static readonly DescribeExperiment = "sagemaker:DescribeExperiment";
	/** [Read] sagemaker:DescribeFeatureGroup */
	static readonly DescribeFeatureGroup = "sagemaker:DescribeFeatureGroup";
	/** [Read] sagemaker:DescribeFeatureMetadata */
	static readonly DescribeFeatureMetadata = "sagemaker:DescribeFeatureMetadata";
	/** [Read] sagemaker:DescribeFlowDefinition */
	static readonly DescribeFlowDefinition = "sagemaker:DescribeFlowDefinition";
	/** [Read] sagemaker:DescribeHub */
	static readonly DescribeHub = "sagemaker:DescribeHub";
	/** [Read] sagemaker:DescribeHubContent */
	static readonly DescribeHubContent = "sagemaker:DescribeHubContent";
	/** [Read] sagemaker:DescribeHumanLoop */
	static readonly DescribeHumanLoop = "sagemaker:DescribeHumanLoop";
	/** [Read] sagemaker:DescribeHumanTaskUi */
	static readonly DescribeHumanTaskUi = "sagemaker:DescribeHumanTaskUi";
	/** [Read] sagemaker:DescribeHyperParameterTuningJob */
	static readonly DescribeHyperParameterTuningJob =
		"sagemaker:DescribeHyperParameterTuningJob";
	/** [Read] sagemaker:DescribeImage */
	static readonly DescribeImage = "sagemaker:DescribeImage";
	/** [Read] sagemaker:DescribeImageVersion */
	static readonly DescribeImageVersion = "sagemaker:DescribeImageVersion";
	/** [Read] sagemaker:DescribeInferenceComponent */
	static readonly DescribeInferenceComponent =
		"sagemaker:DescribeInferenceComponent";
	/** [Read] sagemaker:DescribeInferenceExperiment */
	static readonly DescribeInferenceExperiment =
		"sagemaker:DescribeInferenceExperiment";
	/** [Read] sagemaker:DescribeInferenceRecommendationsJob */
	static readonly DescribeInferenceRecommendationsJob =
		"sagemaker:DescribeInferenceRecommendationsJob";
	/** [Read] sagemaker:DescribeJob */
	static readonly DescribeJob = "sagemaker:DescribeJob";
	/** [Read] sagemaker:DescribeJobSchemaVersion */
	static readonly DescribeJobSchemaVersion =
		"sagemaker:DescribeJobSchemaVersion";
	/** [Read] sagemaker:DescribeLabelingJob */
	static readonly DescribeLabelingJob = "sagemaker:DescribeLabelingJob";
	/** [Read] sagemaker:DescribeLineageGroup */
	static readonly DescribeLineageGroup = "sagemaker:DescribeLineageGroup";
	/** [Read] sagemaker:DescribeMlflowApp */
	static readonly DescribeMlflowApp = "sagemaker:DescribeMlflowApp";
	/** [Read] sagemaker:DescribeMlflowTrackingServer */
	static readonly DescribeMlflowTrackingServer =
		"sagemaker:DescribeMlflowTrackingServer";
	/** [Read] sagemaker:DescribeModel */
	static readonly DescribeModel = "sagemaker:DescribeModel";
	/** [Read] sagemaker:DescribeModelBiasJobDefinition */
	static readonly DescribeModelBiasJobDefinition =
		"sagemaker:DescribeModelBiasJobDefinition";
	/** [Read] sagemaker:DescribeModelCard */
	static readonly DescribeModelCard = "sagemaker:DescribeModelCard";
	/** [Read] sagemaker:DescribeModelCardExportJob */
	static readonly DescribeModelCardExportJob =
		"sagemaker:DescribeModelCardExportJob";
	/** [Read] sagemaker:DescribeModelExplainabilityJobDefinition */
	static readonly DescribeModelExplainabilityJobDefinition =
		"sagemaker:DescribeModelExplainabilityJobDefinition";
	/** [Read] sagemaker:DescribeModelPackage */
	static readonly DescribeModelPackage = "sagemaker:DescribeModelPackage";
	/** [Read] sagemaker:DescribeModelPackageGroup */
	static readonly DescribeModelPackageGroup =
		"sagemaker:DescribeModelPackageGroup";
	/** [Read] sagemaker:DescribeModelQualityJobDefinition */
	static readonly DescribeModelQualityJobDefinition =
		"sagemaker:DescribeModelQualityJobDefinition";
	/** [Read] sagemaker:DescribeMonitoringSchedule */
	static readonly DescribeMonitoringSchedule =
		"sagemaker:DescribeMonitoringSchedule";
	/** [Read] sagemaker:DescribeNotebookInstance */
	static readonly DescribeNotebookInstance =
		"sagemaker:DescribeNotebookInstance";
	/** [Read] sagemaker:DescribeNotebookInstanceLifecycleConfig */
	static readonly DescribeNotebookInstanceLifecycleConfig =
		"sagemaker:DescribeNotebookInstanceLifecycleConfig";
	/** [Read] sagemaker:DescribeOptimizationJob */
	static readonly DescribeOptimizationJob = "sagemaker:DescribeOptimizationJob";
	/** [Read] sagemaker:DescribePartnerApp */
	static readonly DescribePartnerApp = "sagemaker:DescribePartnerApp";
	/** [Read] sagemaker:DescribePipeline */
	static readonly DescribePipeline = "sagemaker:DescribePipeline";
	/** [Read] sagemaker:DescribePipelineDefinitionForExecution */
	static readonly DescribePipelineDefinitionForExecution =
		"sagemaker:DescribePipelineDefinitionForExecution";
	/** [Read] sagemaker:DescribePipelineExecution */
	static readonly DescribePipelineExecution =
		"sagemaker:DescribePipelineExecution";
	/** [Read] sagemaker:DescribeProcessingJob */
	static readonly DescribeProcessingJob = "sagemaker:DescribeProcessingJob";
	/** [Read] sagemaker:DescribeProject */
	static readonly DescribeProject = "sagemaker:DescribeProject";
	/** [Read] sagemaker:DescribeReservedCapacity */
	static readonly DescribeReservedCapacity =
		"sagemaker:DescribeReservedCapacity";
	/** [Read] sagemaker:DescribeSharedModel */
	static readonly DescribeSharedModel = "sagemaker:DescribeSharedModel";
	/** [Read] sagemaker:DescribeSpace */
	static readonly DescribeSpace = "sagemaker:DescribeSpace";
	/** [Read] sagemaker:DescribeStudioLifecycleConfig */
	static readonly DescribeStudioLifecycleConfig =
		"sagemaker:DescribeStudioLifecycleConfig";
	/** [Read] sagemaker:DescribeSubscribedWorkteam */
	static readonly DescribeSubscribedWorkteam =
		"sagemaker:DescribeSubscribedWorkteam";
	/** [Read] sagemaker:DescribeTrainingJob */
	static readonly DescribeTrainingJob = "sagemaker:DescribeTrainingJob";
	/** [Read] sagemaker:DescribeTrainingPlan */
	static readonly DescribeTrainingPlan = "sagemaker:DescribeTrainingPlan";
	/** [Read] sagemaker:DescribeTrainingPlanExtensionHistory */
	static readonly DescribeTrainingPlanExtensionHistory =
		"sagemaker:DescribeTrainingPlanExtensionHistory";
	/** [Read] sagemaker:DescribeTransformJob */
	static readonly DescribeTransformJob = "sagemaker:DescribeTransformJob";
	/** [Read] sagemaker:DescribeTrial */
	static readonly DescribeTrial = "sagemaker:DescribeTrial";
	/** [Read] sagemaker:DescribeTrialComponent */
	static readonly DescribeTrialComponent = "sagemaker:DescribeTrialComponent";
	/** [Read] sagemaker:DescribeUserProfile */
	static readonly DescribeUserProfile = "sagemaker:DescribeUserProfile";
	/** [Read] sagemaker:DescribeWorkforce */
	static readonly DescribeWorkforce = "sagemaker:DescribeWorkforce";
	/** [Read] sagemaker:DescribeWorkteam */
	static readonly DescribeWorkteam = "sagemaker:DescribeWorkteam";
	/** [Write] sagemaker:DetachClusterNodeVolume */
	static readonly DetachClusterNodeVolume = "sagemaker:DetachClusterNodeVolume";
	/** [Write] sagemaker:DisableSagemakerServicecatalogPortfolio */
	static readonly DisableSagemakerServicecatalogPortfolio =
		"sagemaker:DisableSagemakerServicecatalogPortfolio";
	/** [Write] sagemaker:DisassociateTrialComponent */
	static readonly DisassociateTrialComponent =
		"sagemaker:DisassociateTrialComponent";
	/** [Write] sagemaker:EnableSagemakerServicecatalogPortfolio */
	static readonly EnableSagemakerServicecatalogPortfolio =
		"sagemaker:EnableSagemakerServicecatalogPortfolio";
	/** [Write] sagemaker:ExtendTrainingPlan */
	static readonly ExtendTrainingPlan = "sagemaker:ExtendTrainingPlan";
	/** [Read] sagemaker:GetDeployments */
	static readonly actionGetDeployments = "sagemaker:GetDeployments";
	/** [Read] sagemaker:GetDeviceFleetReport */
	static readonly actionGetDeviceFleetReport = "sagemaker:GetDeviceFleetReport";
	/** [Read] sagemaker:GetDeviceRegistration */
	static readonly actionGetDeviceRegistration =
		"sagemaker:GetDeviceRegistration";
	/** [Read] sagemaker:GetLineageGroupPolicy */
	static readonly actionGetLineageGroupPolicy =
		"sagemaker:GetLineageGroupPolicy";
	/** [Read] sagemaker:GetModelPackageGroupPolicy */
	static readonly actionGetModelPackageGroupPolicy =
		"sagemaker:GetModelPackageGroupPolicy";
	/** [Read] sagemaker:GetRecord */
	static readonly actionGetRecord = "sagemaker:GetRecord";
	/** [Read] sagemaker:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "sagemaker:GetResourcePolicy";
	/** [Read] sagemaker:GetSagemakerServicecatalogPortfolioStatus */
	static readonly actionGetSagemakerServicecatalogPortfolioStatus =
		"sagemaker:GetSagemakerServicecatalogPortfolioStatus";
	/** [Read] sagemaker:GetScalingConfigurationRecommendation */
	static readonly actionGetScalingConfigurationRecommendation =
		"sagemaker:GetScalingConfigurationRecommendation";
	/** [Read] sagemaker:GetSearchSuggestions */
	static readonly actionGetSearchSuggestions = "sagemaker:GetSearchSuggestions";
	/** [Write] sagemaker:ImportHubContent */
	static readonly ImportHubContent = "sagemaker:ImportHubContent";
	/** [Read] sagemaker:InvokeEndpoint */
	static readonly InvokeEndpoint = "sagemaker:InvokeEndpoint";
	/** [Read] sagemaker:InvokeEndpointAsync */
	static readonly InvokeEndpointAsync = "sagemaker:InvokeEndpointAsync";
	/** [Read] sagemaker:InvokeEndpointWithResponseStream */
	static readonly InvokeEndpointWithResponseStream =
		"sagemaker:InvokeEndpointWithResponseStream";
	/** [List] sagemaker:ListAIBenchmarkJobs */
	static readonly ListAIBenchmarkJobs = "sagemaker:ListAIBenchmarkJobs";
	/** [List] sagemaker:ListAIRecommendationJobs */
	static readonly ListAIRecommendationJobs =
		"sagemaker:ListAIRecommendationJobs";
	/** [List] sagemaker:ListAIWorkloadConfigs */
	static readonly ListAIWorkloadConfigs = "sagemaker:ListAIWorkloadConfigs";
	/** [List] sagemaker:ListActions */
	static readonly ListActions = "sagemaker:ListActions";
	/** [List] sagemaker:ListAlgorithms */
	static readonly ListAlgorithms = "sagemaker:ListAlgorithms";
	/** [List] sagemaker:ListAliases */
	static readonly ListAliases = "sagemaker:ListAliases";
	/** [List] sagemaker:ListAppImageConfigs */
	static readonly ListAppImageConfigs = "sagemaker:ListAppImageConfigs";
	/** [List] sagemaker:ListApps */
	static readonly ListApps = "sagemaker:ListApps";
	/** [List] sagemaker:ListArtifacts */
	static readonly ListArtifacts = "sagemaker:ListArtifacts";
	/** [List] sagemaker:ListAssociations */
	static readonly ListAssociations = "sagemaker:ListAssociations";
	/** [List] sagemaker:ListAutoMLJobs */
	static readonly ListAutoMLJobs = "sagemaker:ListAutoMLJobs";
	/** [List] sagemaker:ListCandidatesForAutoMLJob */
	static readonly ListCandidatesForAutoMLJob =
		"sagemaker:ListCandidatesForAutoMLJob";
	/** [List] sagemaker:ListClusterEvents */
	static readonly ListClusterEvents = "sagemaker:ListClusterEvents";
	/** [List] sagemaker:ListClusterNodes */
	static readonly ListClusterNodes = "sagemaker:ListClusterNodes";
	/** [List] sagemaker:ListClusterSchedulerConfigs */
	static readonly ListClusterSchedulerConfigs =
		"sagemaker:ListClusterSchedulerConfigs";
	/** [List] sagemaker:ListClusters */
	static readonly ListClusters = "sagemaker:ListClusters";
	/** [List] sagemaker:ListCodeRepositories */
	static readonly ListCodeRepositories = "sagemaker:ListCodeRepositories";
	/** [List] sagemaker:ListCompilationJobs */
	static readonly ListCompilationJobs = "sagemaker:ListCompilationJobs";
	/** [List] sagemaker:ListComputeQuotas */
	static readonly ListComputeQuotas = "sagemaker:ListComputeQuotas";
	/** [List] sagemaker:ListContexts */
	static readonly ListContexts = "sagemaker:ListContexts";
	/** [List] sagemaker:ListDataQualityJobDefinitions */
	static readonly ListDataQualityJobDefinitions =
		"sagemaker:ListDataQualityJobDefinitions";
	/** [List] sagemaker:ListDeviceFleets */
	static readonly ListDeviceFleets = "sagemaker:ListDeviceFleets";
	/** [List] sagemaker:ListDevices */
	static readonly ListDevices = "sagemaker:ListDevices";
	/** [List] sagemaker:ListDomains */
	static readonly ListDomains = "sagemaker:ListDomains";
	/** [List] sagemaker:ListEdgeDeploymentPlans */
	static readonly ListEdgeDeploymentPlans = "sagemaker:ListEdgeDeploymentPlans";
	/** [List] sagemaker:ListEdgePackagingJobs */
	static readonly ListEdgePackagingJobs = "sagemaker:ListEdgePackagingJobs";
	/** [List] sagemaker:ListEndpointConfigs */
	static readonly ListEndpointConfigs = "sagemaker:ListEndpointConfigs";
	/** [List] sagemaker:ListEndpoints */
	static readonly ListEndpoints = "sagemaker:ListEndpoints";
	/** [List] sagemaker:ListExperiments */
	static readonly ListExperiments = "sagemaker:ListExperiments";
	/** [List] sagemaker:ListFeatureGroups */
	static readonly ListFeatureGroups = "sagemaker:ListFeatureGroups";
	/** [List] sagemaker:ListFlowDefinitions */
	static readonly ListFlowDefinitions = "sagemaker:ListFlowDefinitions";
	/** [List] sagemaker:ListHubContentVersions */
	static readonly ListHubContentVersions = "sagemaker:ListHubContentVersions";
	/** [List] sagemaker:ListHubContents */
	static readonly ListHubContents = "sagemaker:ListHubContents";
	/** [List] sagemaker:ListHubs */
	static readonly ListHubs = "sagemaker:ListHubs";
	/** [List] sagemaker:ListHumanLoops */
	static readonly ListHumanLoops = "sagemaker:ListHumanLoops";
	/** [List] sagemaker:ListHumanTaskUis */
	static readonly ListHumanTaskUis = "sagemaker:ListHumanTaskUis";
	/** [List] sagemaker:ListHyperParameterTuningJobs */
	static readonly ListHyperParameterTuningJobs =
		"sagemaker:ListHyperParameterTuningJobs";
	/** [List] sagemaker:ListImageVersions */
	static readonly ListImageVersions = "sagemaker:ListImageVersions";
	/** [List] sagemaker:ListImages */
	static readonly ListImages = "sagemaker:ListImages";
	/** [List] sagemaker:ListInferenceComponents */
	static readonly ListInferenceComponents = "sagemaker:ListInferenceComponents";
	/** [List] sagemaker:ListInferenceExperiments */
	static readonly ListInferenceExperiments =
		"sagemaker:ListInferenceExperiments";
	/** [List] sagemaker:ListInferenceRecommendationsJobSteps */
	static readonly ListInferenceRecommendationsJobSteps =
		"sagemaker:ListInferenceRecommendationsJobSteps";
	/** [List] sagemaker:ListInferenceRecommendationsJobs */
	static readonly ListInferenceRecommendationsJobs =
		"sagemaker:ListInferenceRecommendationsJobs";
	/** [List] sagemaker:ListJobSchemaVersions */
	static readonly ListJobSchemaVersions = "sagemaker:ListJobSchemaVersions";
	/** [List] sagemaker:ListJobs */
	static readonly ListJobs = "sagemaker:ListJobs";
	/** [List] sagemaker:ListLabelingJobs */
	static readonly ListLabelingJobs = "sagemaker:ListLabelingJobs";
	/** [List] sagemaker:ListLabelingJobsForWorkteam */
	static readonly ListLabelingJobsForWorkteam =
		"sagemaker:ListLabelingJobsForWorkteam";
	/** [List] sagemaker:ListLineageGroups */
	static readonly ListLineageGroups = "sagemaker:ListLineageGroups";
	/** [List] sagemaker:ListMlflowApps */
	static readonly ListMlflowApps = "sagemaker:ListMlflowApps";
	/** [List] sagemaker:ListMlflowTrackingServers */
	static readonly ListMlflowTrackingServers =
		"sagemaker:ListMlflowTrackingServers";
	/** [List] sagemaker:ListModelBiasJobDefinitions */
	static readonly ListModelBiasJobDefinitions =
		"sagemaker:ListModelBiasJobDefinitions";
	/** [List] sagemaker:ListModelCardExportJobs */
	static readonly ListModelCardExportJobs = "sagemaker:ListModelCardExportJobs";
	/** [List] sagemaker:ListModelCardVersions */
	static readonly ListModelCardVersions = "sagemaker:ListModelCardVersions";
	/** [List] sagemaker:ListModelCards */
	static readonly ListModelCards = "sagemaker:ListModelCards";
	/** [List] sagemaker:ListModelExplainabilityJobDefinitions */
	static readonly ListModelExplainabilityJobDefinitions =
		"sagemaker:ListModelExplainabilityJobDefinitions";
	/** [List] sagemaker:ListModelMetadata */
	static readonly ListModelMetadata = "sagemaker:ListModelMetadata";
	/** [List] sagemaker:ListModelPackageGroups */
	static readonly ListModelPackageGroups = "sagemaker:ListModelPackageGroups";
	/** [List] sagemaker:ListModelPackages */
	static readonly ListModelPackages = "sagemaker:ListModelPackages";
	/** [List] sagemaker:ListModelQualityJobDefinitions */
	static readonly ListModelQualityJobDefinitions =
		"sagemaker:ListModelQualityJobDefinitions";
	/** [List] sagemaker:ListModels */
	static readonly ListModels = "sagemaker:ListModels";
	/** [List] sagemaker:ListMonitoringAlertHistory */
	static readonly ListMonitoringAlertHistory =
		"sagemaker:ListMonitoringAlertHistory";
	/** [List] sagemaker:ListMonitoringAlerts */
	static readonly ListMonitoringAlerts = "sagemaker:ListMonitoringAlerts";
	/** [List] sagemaker:ListMonitoringExecutions */
	static readonly ListMonitoringExecutions =
		"sagemaker:ListMonitoringExecutions";
	/** [List] sagemaker:ListMonitoringSchedules */
	static readonly ListMonitoringSchedules = "sagemaker:ListMonitoringSchedules";
	/** [List] sagemaker:ListNotebookInstanceLifecycleConfigs */
	static readonly ListNotebookInstanceLifecycleConfigs =
		"sagemaker:ListNotebookInstanceLifecycleConfigs";
	/** [List] sagemaker:ListNotebookInstances */
	static readonly ListNotebookInstances = "sagemaker:ListNotebookInstances";
	/** [List] sagemaker:ListOptimizationJobs */
	static readonly ListOptimizationJobs = "sagemaker:ListOptimizationJobs";
	/** [List] sagemaker:ListPartnerApps */
	static readonly ListPartnerApps = "sagemaker:ListPartnerApps";
	/** [List] sagemaker:ListPipelineExecutionSteps */
	static readonly ListPipelineExecutionSteps =
		"sagemaker:ListPipelineExecutionSteps";
	/** [List] sagemaker:ListPipelineExecutions */
	static readonly ListPipelineExecutions = "sagemaker:ListPipelineExecutions";
	/** [List] sagemaker:ListPipelineParametersForExecution */
	static readonly ListPipelineParametersForExecution =
		"sagemaker:ListPipelineParametersForExecution";
	/** [List] sagemaker:ListPipelineVersions */
	static readonly ListPipelineVersions = "sagemaker:ListPipelineVersions";
	/** [List] sagemaker:ListPipelines */
	static readonly ListPipelines = "sagemaker:ListPipelines";
	/** [List] sagemaker:ListProcessingJobs */
	static readonly ListProcessingJobs = "sagemaker:ListProcessingJobs";
	/** [List] sagemaker:ListProjects */
	static readonly ListProjects = "sagemaker:ListProjects";
	/** [List] sagemaker:ListRecords */
	static readonly ListRecords = "sagemaker:ListRecords";
	/** [List] sagemaker:ListResourceCatalogs */
	static readonly ListResourceCatalogs = "sagemaker:ListResourceCatalogs";
	/** [List] sagemaker:ListSharedModelEvents */
	static readonly ListSharedModelEvents = "sagemaker:ListSharedModelEvents";
	/** [List] sagemaker:ListSharedModelVersions */
	static readonly ListSharedModelVersions = "sagemaker:ListSharedModelVersions";
	/** [List] sagemaker:ListSharedModels */
	static readonly ListSharedModels = "sagemaker:ListSharedModels";
	/** [List] sagemaker:ListSpaces */
	static readonly ListSpaces = "sagemaker:ListSpaces";
	/** [List] sagemaker:ListStageDevices */
	static readonly ListStageDevices = "sagemaker:ListStageDevices";
	/** [List] sagemaker:ListStudioLifecycleConfigs */
	static readonly ListStudioLifecycleConfigs =
		"sagemaker:ListStudioLifecycleConfigs";
	/** [List] sagemaker:ListSubscribedWorkteams */
	static readonly ListSubscribedWorkteams = "sagemaker:ListSubscribedWorkteams";
	/** [List] sagemaker:ListTags */
	static readonly ListTags = "sagemaker:ListTags";
	/** [List] sagemaker:ListTrainingJobs */
	static readonly ListTrainingJobs = "sagemaker:ListTrainingJobs";
	/** [List] sagemaker:ListTrainingJobsForHyperParameterTuningJob */
	static readonly ListTrainingJobsForHyperParameterTuningJob =
		"sagemaker:ListTrainingJobsForHyperParameterTuningJob";
	/** [List] sagemaker:ListTrainingPlans */
	static readonly ListTrainingPlans = "sagemaker:ListTrainingPlans";
	/** [List] sagemaker:ListTransformJobs */
	static readonly ListTransformJobs = "sagemaker:ListTransformJobs";
	/** [List] sagemaker:ListTrialComponents */
	static readonly ListTrialComponents = "sagemaker:ListTrialComponents";
	/** [List] sagemaker:ListTrials */
	static readonly ListTrials = "sagemaker:ListTrials";
	/** [List] sagemaker:ListUltraServersByReservedCapacity */
	static readonly ListUltraServersByReservedCapacity =
		"sagemaker:ListUltraServersByReservedCapacity";
	/** [List] sagemaker:ListUserProfiles */
	static readonly ListUserProfiles = "sagemaker:ListUserProfiles";
	/** [List] sagemaker:ListWorkforces */
	static readonly ListWorkforces = "sagemaker:ListWorkforces";
	/** [List] sagemaker:ListWorkteams */
	static readonly ListWorkteams = "sagemaker:ListWorkteams";
	/** [Write] sagemaker:PutLineageGroupPolicy */
	static readonly PutLineageGroupPolicy = "sagemaker:PutLineageGroupPolicy";
	/** [Write] sagemaker:PutModelPackageGroupPolicy */
	static readonly PutModelPackageGroupPolicy =
		"sagemaker:PutModelPackageGroupPolicy";
	/** [Write] sagemaker:PutRecord */
	static readonly PutRecord = "sagemaker:PutRecord";
	/** [Write] sagemaker:PutResourcePolicy */
	static readonly PutResourcePolicy = "sagemaker:PutResourcePolicy";
	/** [List] sagemaker:QueryLineage */
	static readonly QueryLineage = "sagemaker:QueryLineage";
	/** [Write] sagemaker:RegisterDevices */
	static readonly RegisterDevices = "sagemaker:RegisterDevices";
	/** [Read] sagemaker:RenderUiTemplate */
	static readonly RenderUiTemplate = "sagemaker:RenderUiTemplate";
	/** [Write] sagemaker:RetryPipelineExecution */
	static readonly RetryPipelineExecution = "sagemaker:RetryPipelineExecution";
	/** [Write] sagemaker:Sample */
	static readonly Sample = "sagemaker:Sample";
	/** [Write] sagemaker:SampleWithResponseStream */
	static readonly SampleWithResponseStream =
		"sagemaker:SampleWithResponseStream";
	/** [Read] sagemaker:Search */
	static readonly Search = "sagemaker:Search";
	/** [Read] sagemaker:SearchTrainingPlanOfferings */
	static readonly SearchTrainingPlanOfferings =
		"sagemaker:SearchTrainingPlanOfferings";
	/** [Write] sagemaker:SendHeartbeat */
	static readonly SendHeartbeat = "sagemaker:SendHeartbeat";
	/** [Write] sagemaker:SendPipelineExecutionStepFailure */
	static readonly SendPipelineExecutionStepFailure =
		"sagemaker:SendPipelineExecutionStepFailure";
	/** [Write] sagemaker:SendPipelineExecutionStepSuccess */
	static readonly SendPipelineExecutionStepSuccess =
		"sagemaker:SendPipelineExecutionStepSuccess";
	/** [Write] sagemaker:SendSharedModelEvent */
	static readonly SendSharedModelEvent = "sagemaker:SendSharedModelEvent";
	/** [Write] sagemaker:StartClusterHealthCheck */
	static readonly StartClusterHealthCheck = "sagemaker:StartClusterHealthCheck";
	/** [Write] sagemaker:StartEdgeDeploymentStage */
	static readonly StartEdgeDeploymentStage =
		"sagemaker:StartEdgeDeploymentStage";
	/** [Write] sagemaker:StartHumanLoop */
	static readonly StartHumanLoop = "sagemaker:StartHumanLoop";
	/** [Write] sagemaker:StartInferenceExperiment */
	static readonly StartInferenceExperiment =
		"sagemaker:StartInferenceExperiment";
	/** [Write] sagemaker:StartMlflowTrackingServer */
	static readonly StartMlflowTrackingServer =
		"sagemaker:StartMlflowTrackingServer";
	/** [Write] sagemaker:StartMonitoringSchedule */
	static readonly StartMonitoringSchedule = "sagemaker:StartMonitoringSchedule";
	/** [Write] sagemaker:StartNotebookInstance */
	static readonly StartNotebookInstance = "sagemaker:StartNotebookInstance";
	/** [Write] sagemaker:StartPipelineExecution */
	static readonly StartPipelineExecution = "sagemaker:StartPipelineExecution";
	/** [Write] sagemaker:StartSession */
	static readonly StartSession = "sagemaker:StartSession";
	/** [Write] sagemaker:StopAIBenchmarkJob */
	static readonly StopAIBenchmarkJob = "sagemaker:StopAIBenchmarkJob";
	/** [Write] sagemaker:StopAIRecommendationJob */
	static readonly StopAIRecommendationJob = "sagemaker:StopAIRecommendationJob";
	/** [Write] sagemaker:StopAutoMLJob */
	static readonly StopAutoMLJob = "sagemaker:StopAutoMLJob";
	/** [Write] sagemaker:StopCompilationJob */
	static readonly StopCompilationJob = "sagemaker:StopCompilationJob";
	/** [Write] sagemaker:StopEdgeDeploymentStage */
	static readonly StopEdgeDeploymentStage = "sagemaker:StopEdgeDeploymentStage";
	/** [Write] sagemaker:StopEdgePackagingJob */
	static readonly StopEdgePackagingJob = "sagemaker:StopEdgePackagingJob";
	/** [Write] sagemaker:StopHumanLoop */
	static readonly StopHumanLoop = "sagemaker:StopHumanLoop";
	/** [Write] sagemaker:StopHyperParameterTuningJob */
	static readonly StopHyperParameterTuningJob =
		"sagemaker:StopHyperParameterTuningJob";
	/** [Write] sagemaker:StopInferenceExperiment */
	static readonly StopInferenceExperiment = "sagemaker:StopInferenceExperiment";
	/** [Write] sagemaker:StopInferenceRecommendationsJob */
	static readonly StopInferenceRecommendationsJob =
		"sagemaker:StopInferenceRecommendationsJob";
	/** [Write] sagemaker:StopJob */
	static readonly StopJob = "sagemaker:StopJob";
	/** [Write] sagemaker:StopLabelingJob */
	static readonly StopLabelingJob = "sagemaker:StopLabelingJob";
	/** [Write] sagemaker:StopMlflowTrackingServer */
	static readonly StopMlflowTrackingServer =
		"sagemaker:StopMlflowTrackingServer";
	/** [Write] sagemaker:StopMonitoringSchedule */
	static readonly StopMonitoringSchedule = "sagemaker:StopMonitoringSchedule";
	/** [Write] sagemaker:StopNotebookInstance */
	static readonly StopNotebookInstance = "sagemaker:StopNotebookInstance";
	/** [Write] sagemaker:StopOptimizationJob */
	static readonly StopOptimizationJob = "sagemaker:StopOptimizationJob";
	/** [Write] sagemaker:StopPipelineExecution */
	static readonly StopPipelineExecution = "sagemaker:StopPipelineExecution";
	/** [Write] sagemaker:StopProcessingJob */
	static readonly StopProcessingJob = "sagemaker:StopProcessingJob";
	/** [Write] sagemaker:StopTrainingJob */
	static readonly StopTrainingJob = "sagemaker:StopTrainingJob";
	/** [Write] sagemaker:StopTransformJob */
	static readonly StopTransformJob = "sagemaker:StopTransformJob";
	/** [Write] sagemaker:TrainHubModel */
	static readonly TrainHubModel = "sagemaker:TrainHubModel";
	/** [Write] sagemaker:UpdateAction */
	static readonly UpdateAction = "sagemaker:UpdateAction";
	/** [Write] sagemaker:UpdateAppImageConfig */
	static readonly UpdateAppImageConfig = "sagemaker:UpdateAppImageConfig";
	/** [Write] sagemaker:UpdateArtifact */
	static readonly UpdateArtifact = "sagemaker:UpdateArtifact";
	/** [Write] sagemaker:UpdateCluster */
	static readonly UpdateCluster = "sagemaker:UpdateCluster";
	/** [Write] sagemaker:UpdateClusterInference */
	static readonly UpdateClusterInference = "sagemaker:UpdateClusterInference";
	/** [Write] sagemaker:UpdateClusterSchedulerConfig */
	static readonly UpdateClusterSchedulerConfig =
		"sagemaker:UpdateClusterSchedulerConfig";
	/** [Write] sagemaker:UpdateClusterSoftware */
	static readonly UpdateClusterSoftware = "sagemaker:UpdateClusterSoftware";
	/** [Write] sagemaker:UpdateCodeRepository */
	static readonly UpdateCodeRepository = "sagemaker:UpdateCodeRepository";
	/** [Write] sagemaker:UpdateComputeQuota */
	static readonly UpdateComputeQuota = "sagemaker:UpdateComputeQuota";
	/** [Write] sagemaker:UpdateContext */
	static readonly UpdateContext = "sagemaker:UpdateContext";
	/** [Write] sagemaker:UpdateDeviceFleet */
	static readonly UpdateDeviceFleet = "sagemaker:UpdateDeviceFleet";
	/** [Write] sagemaker:UpdateDevices */
	static readonly UpdateDevices = "sagemaker:UpdateDevices";
	/** [Write] sagemaker:UpdateDomain */
	static readonly UpdateDomain = "sagemaker:UpdateDomain";
	/** [Write] sagemaker:UpdateEndpoint */
	static readonly UpdateEndpoint = "sagemaker:UpdateEndpoint";
	/** [Write] sagemaker:UpdateEndpointWeightsAndCapacities */
	static readonly UpdateEndpointWeightsAndCapacities =
		"sagemaker:UpdateEndpointWeightsAndCapacities";
	/** [Write] sagemaker:UpdateExperiment */
	static readonly UpdateExperiment = "sagemaker:UpdateExperiment";
	/** [Write] sagemaker:UpdateFeatureGroup */
	static readonly UpdateFeatureGroup = "sagemaker:UpdateFeatureGroup";
	/** [Write] sagemaker:UpdateFeatureMetadata */
	static readonly UpdateFeatureMetadata = "sagemaker:UpdateFeatureMetadata";
	/** [Write] sagemaker:UpdateHub */
	static readonly UpdateHub = "sagemaker:UpdateHub";
	/** [Write] sagemaker:UpdateHubContent */
	static readonly UpdateHubContent = "sagemaker:UpdateHubContent";
	/** [Write] sagemaker:UpdateHubContentReference */
	static readonly UpdateHubContentReference =
		"sagemaker:UpdateHubContentReference";
	/** [Write] sagemaker:UpdateImage */
	static readonly UpdateImage = "sagemaker:UpdateImage";
	/** [Write] sagemaker:UpdateImageVersion */
	static readonly UpdateImageVersion = "sagemaker:UpdateImageVersion";
	/** [Write] sagemaker:UpdateInferenceComponent */
	static readonly UpdateInferenceComponent =
		"sagemaker:UpdateInferenceComponent";
	/** [Write] sagemaker:UpdateInferenceComponentRuntimeConfig */
	static readonly UpdateInferenceComponentRuntimeConfig =
		"sagemaker:UpdateInferenceComponentRuntimeConfig";
	/** [Write] sagemaker:UpdateInferenceExperiment */
	static readonly UpdateInferenceExperiment =
		"sagemaker:UpdateInferenceExperiment";
	/** [Write] sagemaker:UpdateMlflowApp */
	static readonly UpdateMlflowApp = "sagemaker:UpdateMlflowApp";
	/** [Write] sagemaker:UpdateMlflowTrackingServer */
	static readonly UpdateMlflowTrackingServer =
		"sagemaker:UpdateMlflowTrackingServer";
	/** [Write] sagemaker:UpdateModelCard */
	static readonly UpdateModelCard = "sagemaker:UpdateModelCard";
	/** [Write] sagemaker:UpdateModelPackage */
	static readonly UpdateModelPackage = "sagemaker:UpdateModelPackage";
	/** [Write] sagemaker:UpdateMonitoringAlert */
	static readonly UpdateMonitoringAlert = "sagemaker:UpdateMonitoringAlert";
	/** [Write] sagemaker:UpdateMonitoringSchedule */
	static readonly UpdateMonitoringSchedule =
		"sagemaker:UpdateMonitoringSchedule";
	/** [Write] sagemaker:UpdateNotebookInstance */
	static readonly UpdateNotebookInstance = "sagemaker:UpdateNotebookInstance";
	/** [Write] sagemaker:UpdateNotebookInstanceLifecycleConfig */
	static readonly UpdateNotebookInstanceLifecycleConfig =
		"sagemaker:UpdateNotebookInstanceLifecycleConfig";
	/** [Write] sagemaker:UpdatePartnerApp */
	static readonly UpdatePartnerApp = "sagemaker:UpdatePartnerApp";
	/** [Write] sagemaker:UpdatePipeline */
	static readonly UpdatePipeline = "sagemaker:UpdatePipeline";
	/** [Write] sagemaker:UpdatePipelineExecution */
	static readonly UpdatePipelineExecution = "sagemaker:UpdatePipelineExecution";
	/** [Write] sagemaker:UpdatePipelineVersion */
	static readonly UpdatePipelineVersion = "sagemaker:UpdatePipelineVersion";
	/** [Write] sagemaker:UpdateProject */
	static readonly UpdateProject = "sagemaker:UpdateProject";
	/** [Write] sagemaker:UpdateReward */
	static readonly UpdateReward = "sagemaker:UpdateReward";
	/** [Write] sagemaker:UpdateSharedModel */
	static readonly UpdateSharedModel = "sagemaker:UpdateSharedModel";
	/** [Write] sagemaker:UpdateSpace */
	static readonly UpdateSpace = "sagemaker:UpdateSpace";
	/** [Write] sagemaker:UpdateTrainingJob */
	static readonly UpdateTrainingJob = "sagemaker:UpdateTrainingJob";
	/** [Write] sagemaker:UpdateTrial */
	static readonly UpdateTrial = "sagemaker:UpdateTrial";
	/** [Write] sagemaker:UpdateTrialComponent */
	static readonly UpdateTrialComponent = "sagemaker:UpdateTrialComponent";
	/** [Write] sagemaker:UpdateUserProfile */
	static readonly UpdateUserProfile = "sagemaker:UpdateUserProfile";
	/** [Write] sagemaker:UpdateWorkforce */
	static readonly UpdateWorkforce = "sagemaker:UpdateWorkforce";
	/** [Write] sagemaker:UpdateWorkteam */
	static readonly UpdateWorkteam = "sagemaker:UpdateWorkteam";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SageMakerActions.AccessModelPackage,
		SageMakerActions.BatchDescribeModelPackage,
		SageMakerActions.BatchGetMetrics,
		SageMakerActions.BatchGetRecord,
		SageMakerActions.CallWithBearerToken,
		SageMakerActions.CreateHubContentPresignedUrls,
		SageMakerActions.DescribeAIBenchmarkJob,
		SageMakerActions.DescribeAIRecommendationJob,
		SageMakerActions.DescribeAIWorkloadConfig,
		SageMakerActions.DescribeAction,
		SageMakerActions.DescribeAlgorithm,
		SageMakerActions.DescribeApp,
		SageMakerActions.DescribeAppImageConfig,
		SageMakerActions.DescribeArtifact,
		SageMakerActions.DescribeAutoMLJob,
		SageMakerActions.DescribeAutoMLJobV2,
		SageMakerActions.DescribeCluster,
		SageMakerActions.DescribeClusterEvent,
		SageMakerActions.DescribeClusterInference,
		SageMakerActions.DescribeClusterNode,
		SageMakerActions.DescribeClusterSchedulerConfig,
		SageMakerActions.DescribeCodeRepository,
		SageMakerActions.DescribeCompilationJob,
		SageMakerActions.DescribeComputeQuota,
		SageMakerActions.DescribeContext,
		SageMakerActions.DescribeDataQualityJobDefinition,
		SageMakerActions.DescribeDevice,
		SageMakerActions.DescribeDeviceFleet,
		SageMakerActions.DescribeDomain,
		SageMakerActions.DescribeEdgeDeploymentPlan,
		SageMakerActions.DescribeEdgePackagingJob,
		SageMakerActions.DescribeEndpoint,
		SageMakerActions.DescribeEndpointConfig,
		SageMakerActions.DescribeExperiment,
		SageMakerActions.DescribeFeatureGroup,
		SageMakerActions.DescribeFeatureMetadata,
		SageMakerActions.DescribeFlowDefinition,
		SageMakerActions.DescribeHub,
		SageMakerActions.DescribeHubContent,
		SageMakerActions.DescribeHumanLoop,
		SageMakerActions.DescribeHumanTaskUi,
		SageMakerActions.DescribeHyperParameterTuningJob,
		SageMakerActions.DescribeImage,
		SageMakerActions.DescribeImageVersion,
		SageMakerActions.DescribeInferenceComponent,
		SageMakerActions.DescribeInferenceExperiment,
		SageMakerActions.DescribeInferenceRecommendationsJob,
		SageMakerActions.DescribeJob,
		SageMakerActions.DescribeJobSchemaVersion,
		SageMakerActions.DescribeLabelingJob,
		SageMakerActions.DescribeLineageGroup,
		SageMakerActions.DescribeMlflowApp,
		SageMakerActions.DescribeMlflowTrackingServer,
		SageMakerActions.DescribeModel,
		SageMakerActions.DescribeModelBiasJobDefinition,
		SageMakerActions.DescribeModelCard,
		SageMakerActions.DescribeModelCardExportJob,
		SageMakerActions.DescribeModelExplainabilityJobDefinition,
		SageMakerActions.DescribeModelPackage,
		SageMakerActions.DescribeModelPackageGroup,
		SageMakerActions.DescribeModelQualityJobDefinition,
		SageMakerActions.DescribeMonitoringSchedule,
		SageMakerActions.DescribeNotebookInstance,
		SageMakerActions.DescribeNotebookInstanceLifecycleConfig,
		SageMakerActions.DescribeOptimizationJob,
		SageMakerActions.DescribePartnerApp,
		SageMakerActions.DescribePipeline,
		SageMakerActions.DescribePipelineDefinitionForExecution,
		SageMakerActions.DescribePipelineExecution,
		SageMakerActions.DescribeProcessingJob,
		SageMakerActions.DescribeProject,
		SageMakerActions.DescribeReservedCapacity,
		SageMakerActions.DescribeSharedModel,
		SageMakerActions.DescribeSpace,
		SageMakerActions.DescribeStudioLifecycleConfig,
		SageMakerActions.DescribeSubscribedWorkteam,
		SageMakerActions.DescribeTrainingJob,
		SageMakerActions.DescribeTrainingPlan,
		SageMakerActions.DescribeTrainingPlanExtensionHistory,
		SageMakerActions.DescribeTransformJob,
		SageMakerActions.DescribeTrial,
		SageMakerActions.DescribeTrialComponent,
		SageMakerActions.DescribeUserProfile,
		SageMakerActions.DescribeWorkforce,
		SageMakerActions.DescribeWorkteam,
		SageMakerActions.actionGetDeployments,
		SageMakerActions.actionGetDeviceFleetReport,
		SageMakerActions.actionGetDeviceRegistration,
		SageMakerActions.actionGetLineageGroupPolicy,
		SageMakerActions.actionGetModelPackageGroupPolicy,
		SageMakerActions.actionGetRecord,
		SageMakerActions.actionGetResourcePolicy,
		SageMakerActions.actionGetSagemakerServicecatalogPortfolioStatus,
		SageMakerActions.actionGetScalingConfigurationRecommendation,
		SageMakerActions.actionGetSearchSuggestions,
		SageMakerActions.InvokeEndpoint,
		SageMakerActions.InvokeEndpointAsync,
		SageMakerActions.InvokeEndpointWithResponseStream,
		SageMakerActions.RenderUiTemplate,
		SageMakerActions.Search,
		SageMakerActions.SearchTrainingPlanOfferings,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SageMakerActions.AddAssociation,
		SageMakerActions.AssociateTrialComponent,
		SageMakerActions.AttachClusterNodeVolume,
		SageMakerActions.BatchAddClusterNodes,
		SageMakerActions.BatchDeleteClusterNodes,
		SageMakerActions.BatchPutMetrics,
		SageMakerActions.BatchRebootClusterNodes,
		SageMakerActions.BatchReplaceClusterNodes,
		SageMakerActions.BatchWriteRecord,
		SageMakerActions.CallMlflowAppApi,
		SageMakerActions.CallPartnerAppApi,
		SageMakerActions.CompleteRollout,
		SageMakerActions.CreateAIBenchmarkJob,
		SageMakerActions.CreateAIRecommendationJob,
		SageMakerActions.CreateAIWorkloadConfig,
		SageMakerActions.CreateAction,
		SageMakerActions.CreateAlgorithm,
		SageMakerActions.CreateApp,
		SageMakerActions.CreateAppImageConfig,
		SageMakerActions.CreateArtifact,
		SageMakerActions.CreateAutoMLJob,
		SageMakerActions.CreateAutoMLJobV2,
		SageMakerActions.CreateCluster,
		SageMakerActions.CreateClusterSchedulerConfig,
		SageMakerActions.CreateCodeRepository,
		SageMakerActions.CreateCompilationJob,
		SageMakerActions.CreateComputeQuota,
		SageMakerActions.CreateContext,
		SageMakerActions.CreateDataQualityJobDefinition,
		SageMakerActions.CreateDeviceFleet,
		SageMakerActions.CreateDomain,
		SageMakerActions.CreateEdgeDeploymentPlan,
		SageMakerActions.CreateEdgeDeploymentStage,
		SageMakerActions.CreateEdgePackagingJob,
		SageMakerActions.CreateEndpoint,
		SageMakerActions.CreateEndpointConfig,
		SageMakerActions.CreateExperiment,
		SageMakerActions.CreateFeatureGroup,
		SageMakerActions.CreateFlowDefinition,
		SageMakerActions.CreateHub,
		SageMakerActions.CreateHubContentReference,
		SageMakerActions.CreateHumanTaskUi,
		SageMakerActions.CreateHyperParameterTuningJob,
		SageMakerActions.CreateImage,
		SageMakerActions.CreateImageVersion,
		SageMakerActions.CreateInferenceComponent,
		SageMakerActions.CreateInferenceExperiment,
		SageMakerActions.CreateInferenceRecommendationsJob,
		SageMakerActions.CreateJob,
		SageMakerActions.CreateLabelingJob,
		SageMakerActions.CreateLineageGroupPolicy,
		SageMakerActions.CreateMlflowApp,
		SageMakerActions.CreateMlflowTrackingServer,
		SageMakerActions.CreateModel,
		SageMakerActions.CreateModelBiasJobDefinition,
		SageMakerActions.CreateModelCard,
		SageMakerActions.CreateModelCardExportJob,
		SageMakerActions.CreateModelExplainabilityJobDefinition,
		SageMakerActions.CreateModelPackage,
		SageMakerActions.CreateModelPackageGroup,
		SageMakerActions.CreateModelQualityJobDefinition,
		SageMakerActions.CreateMonitoringSchedule,
		SageMakerActions.CreateNotebookInstance,
		SageMakerActions.CreateNotebookInstanceLifecycleConfig,
		SageMakerActions.CreateOptimizationJob,
		SageMakerActions.CreatePartnerApp,
		SageMakerActions.CreatePartnerAppPresignedUrl,
		SageMakerActions.CreatePipeline,
		SageMakerActions.CreatePresignedDomainUrl,
		SageMakerActions.CreatePresignedMlflowAppUrl,
		SageMakerActions.CreatePresignedMlflowTrackingServerUrl,
		SageMakerActions.CreatePresignedNotebookInstanceUrl,
		SageMakerActions.CreateProcessingJob,
		SageMakerActions.CreateProject,
		SageMakerActions.CreateReservedCapacity,
		SageMakerActions.CreateSharedModel,
		SageMakerActions.CreateSpace,
		SageMakerActions.CreateStudioLifecycleConfig,
		SageMakerActions.CreateTrainingJob,
		SageMakerActions.CreateTrainingPlan,
		SageMakerActions.CreateTransformJob,
		SageMakerActions.CreateTrial,
		SageMakerActions.CreateTrialComponent,
		SageMakerActions.CreateUserProfile,
		SageMakerActions.CreateWorkforce,
		SageMakerActions.CreateWorkteam,
		SageMakerActions.DeleteAIBenchmarkJob,
		SageMakerActions.DeleteAIRecommendationJob,
		SageMakerActions.DeleteAIWorkloadConfig,
		SageMakerActions.DeleteAction,
		SageMakerActions.DeleteAlgorithm,
		SageMakerActions.DeleteApp,
		SageMakerActions.DeleteAppImageConfig,
		SageMakerActions.DeleteArtifact,
		SageMakerActions.DeleteAssociation,
		SageMakerActions.DeleteCluster,
		SageMakerActions.DeleteClusterSchedulerConfig,
		SageMakerActions.DeleteCodeRepository,
		SageMakerActions.DeleteCompilationJob,
		SageMakerActions.DeleteComputeQuota,
		SageMakerActions.DeleteContext,
		SageMakerActions.DeleteDataQualityJobDefinition,
		SageMakerActions.DeleteDeviceFleet,
		SageMakerActions.DeleteDomain,
		SageMakerActions.DeleteEdgeDeploymentPlan,
		SageMakerActions.DeleteEdgeDeploymentStage,
		SageMakerActions.DeleteEndpoint,
		SageMakerActions.DeleteEndpointConfig,
		SageMakerActions.DeleteExperiment,
		SageMakerActions.DeleteFeatureGroup,
		SageMakerActions.DeleteFlowDefinition,
		SageMakerActions.DeleteHub,
		SageMakerActions.DeleteHubContent,
		SageMakerActions.DeleteHubContentReference,
		SageMakerActions.DeleteHumanLoop,
		SageMakerActions.DeleteHumanTaskUi,
		SageMakerActions.DeleteHyperParameterTuningJob,
		SageMakerActions.DeleteImage,
		SageMakerActions.DeleteImageVersion,
		SageMakerActions.DeleteInferenceComponent,
		SageMakerActions.DeleteInferenceExperiment,
		SageMakerActions.DeleteJob,
		SageMakerActions.DeleteLineageGroupPolicy,
		SageMakerActions.DeleteMlflowApp,
		SageMakerActions.DeleteMlflowTrackingServer,
		SageMakerActions.DeleteModel,
		SageMakerActions.DeleteModelBiasJobDefinition,
		SageMakerActions.DeleteModelCard,
		SageMakerActions.DeleteModelExplainabilityJobDefinition,
		SageMakerActions.DeleteModelPackage,
		SageMakerActions.DeleteModelPackageGroup,
		SageMakerActions.DeleteModelPackageGroupPolicy,
		SageMakerActions.DeleteModelQualityJobDefinition,
		SageMakerActions.DeleteMonitoringSchedule,
		SageMakerActions.DeleteNotebookInstance,
		SageMakerActions.DeleteNotebookInstanceLifecycleConfig,
		SageMakerActions.DeleteOptimizationJob,
		SageMakerActions.DeletePartnerApp,
		SageMakerActions.DeletePipeline,
		SageMakerActions.DeleteProcessingJob,
		SageMakerActions.DeleteProject,
		SageMakerActions.DeleteRecord,
		SageMakerActions.DeleteResourcePolicy,
		SageMakerActions.DeleteSpace,
		SageMakerActions.DeleteStudioLifecycleConfig,
		SageMakerActions.DeleteTrainingJob,
		SageMakerActions.DeleteTrial,
		SageMakerActions.DeleteTrialComponent,
		SageMakerActions.DeleteUserProfile,
		SageMakerActions.DeleteWorkforce,
		SageMakerActions.DeleteWorkteam,
		SageMakerActions.DeployHubModel,
		SageMakerActions.DeregisterDevices,
		SageMakerActions.DetachClusterNodeVolume,
		SageMakerActions.DisableSagemakerServicecatalogPortfolio,
		SageMakerActions.DisassociateTrialComponent,
		SageMakerActions.EnableSagemakerServicecatalogPortfolio,
		SageMakerActions.ExtendTrainingPlan,
		SageMakerActions.ImportHubContent,
		SageMakerActions.PutLineageGroupPolicy,
		SageMakerActions.PutModelPackageGroupPolicy,
		SageMakerActions.PutRecord,
		SageMakerActions.PutResourcePolicy,
		SageMakerActions.RegisterDevices,
		SageMakerActions.RetryPipelineExecution,
		SageMakerActions.Sample,
		SageMakerActions.SampleWithResponseStream,
		SageMakerActions.SendHeartbeat,
		SageMakerActions.SendPipelineExecutionStepFailure,
		SageMakerActions.SendPipelineExecutionStepSuccess,
		SageMakerActions.SendSharedModelEvent,
		SageMakerActions.StartClusterHealthCheck,
		SageMakerActions.StartEdgeDeploymentStage,
		SageMakerActions.StartHumanLoop,
		SageMakerActions.StartInferenceExperiment,
		SageMakerActions.StartMlflowTrackingServer,
		SageMakerActions.StartMonitoringSchedule,
		SageMakerActions.StartNotebookInstance,
		SageMakerActions.StartPipelineExecution,
		SageMakerActions.StartSession,
		SageMakerActions.StopAIBenchmarkJob,
		SageMakerActions.StopAIRecommendationJob,
		SageMakerActions.StopAutoMLJob,
		SageMakerActions.StopCompilationJob,
		SageMakerActions.StopEdgeDeploymentStage,
		SageMakerActions.StopEdgePackagingJob,
		SageMakerActions.StopHumanLoop,
		SageMakerActions.StopHyperParameterTuningJob,
		SageMakerActions.StopInferenceExperiment,
		SageMakerActions.StopInferenceRecommendationsJob,
		SageMakerActions.StopJob,
		SageMakerActions.StopLabelingJob,
		SageMakerActions.StopMlflowTrackingServer,
		SageMakerActions.StopMonitoringSchedule,
		SageMakerActions.StopNotebookInstance,
		SageMakerActions.StopOptimizationJob,
		SageMakerActions.StopPipelineExecution,
		SageMakerActions.StopProcessingJob,
		SageMakerActions.StopTrainingJob,
		SageMakerActions.StopTransformJob,
		SageMakerActions.TrainHubModel,
		SageMakerActions.UpdateAction,
		SageMakerActions.UpdateAppImageConfig,
		SageMakerActions.UpdateArtifact,
		SageMakerActions.UpdateCluster,
		SageMakerActions.UpdateClusterInference,
		SageMakerActions.UpdateClusterSchedulerConfig,
		SageMakerActions.UpdateClusterSoftware,
		SageMakerActions.UpdateCodeRepository,
		SageMakerActions.UpdateComputeQuota,
		SageMakerActions.UpdateContext,
		SageMakerActions.UpdateDeviceFleet,
		SageMakerActions.UpdateDevices,
		SageMakerActions.UpdateDomain,
		SageMakerActions.UpdateEndpoint,
		SageMakerActions.UpdateEndpointWeightsAndCapacities,
		SageMakerActions.UpdateExperiment,
		SageMakerActions.UpdateFeatureGroup,
		SageMakerActions.UpdateFeatureMetadata,
		SageMakerActions.UpdateHub,
		SageMakerActions.UpdateHubContent,
		SageMakerActions.UpdateHubContentReference,
		SageMakerActions.UpdateImage,
		SageMakerActions.UpdateImageVersion,
		SageMakerActions.UpdateInferenceComponent,
		SageMakerActions.UpdateInferenceComponentRuntimeConfig,
		SageMakerActions.UpdateInferenceExperiment,
		SageMakerActions.UpdateMlflowApp,
		SageMakerActions.UpdateMlflowTrackingServer,
		SageMakerActions.UpdateModelCard,
		SageMakerActions.UpdateModelPackage,
		SageMakerActions.UpdateMonitoringAlert,
		SageMakerActions.UpdateMonitoringSchedule,
		SageMakerActions.UpdateNotebookInstance,
		SageMakerActions.UpdateNotebookInstanceLifecycleConfig,
		SageMakerActions.UpdatePartnerApp,
		SageMakerActions.UpdatePipeline,
		SageMakerActions.UpdatePipelineExecution,
		SageMakerActions.UpdatePipelineVersion,
		SageMakerActions.UpdateProject,
		SageMakerActions.UpdateReward,
		SageMakerActions.UpdateSharedModel,
		SageMakerActions.UpdateSpace,
		SageMakerActions.UpdateTrainingJob,
		SageMakerActions.UpdateTrial,
		SageMakerActions.UpdateTrialComponent,
		SageMakerActions.UpdateUserProfile,
		SageMakerActions.UpdateWorkforce,
		SageMakerActions.UpdateWorkteam,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SageMakerActions.ListAIBenchmarkJobs,
		SageMakerActions.ListAIRecommendationJobs,
		SageMakerActions.ListAIWorkloadConfigs,
		SageMakerActions.ListActions,
		SageMakerActions.ListAlgorithms,
		SageMakerActions.ListAliases,
		SageMakerActions.ListAppImageConfigs,
		SageMakerActions.ListApps,
		SageMakerActions.ListArtifacts,
		SageMakerActions.ListAssociations,
		SageMakerActions.ListAutoMLJobs,
		SageMakerActions.ListCandidatesForAutoMLJob,
		SageMakerActions.ListClusterEvents,
		SageMakerActions.ListClusterNodes,
		SageMakerActions.ListClusterSchedulerConfigs,
		SageMakerActions.ListClusters,
		SageMakerActions.ListCodeRepositories,
		SageMakerActions.ListCompilationJobs,
		SageMakerActions.ListComputeQuotas,
		SageMakerActions.ListContexts,
		SageMakerActions.ListDataQualityJobDefinitions,
		SageMakerActions.ListDeviceFleets,
		SageMakerActions.ListDevices,
		SageMakerActions.ListDomains,
		SageMakerActions.ListEdgeDeploymentPlans,
		SageMakerActions.ListEdgePackagingJobs,
		SageMakerActions.ListEndpointConfigs,
		SageMakerActions.ListEndpoints,
		SageMakerActions.ListExperiments,
		SageMakerActions.ListFeatureGroups,
		SageMakerActions.ListFlowDefinitions,
		SageMakerActions.ListHubContentVersions,
		SageMakerActions.ListHubContents,
		SageMakerActions.ListHubs,
		SageMakerActions.ListHumanLoops,
		SageMakerActions.ListHumanTaskUis,
		SageMakerActions.ListHyperParameterTuningJobs,
		SageMakerActions.ListImageVersions,
		SageMakerActions.ListImages,
		SageMakerActions.ListInferenceComponents,
		SageMakerActions.ListInferenceExperiments,
		SageMakerActions.ListInferenceRecommendationsJobSteps,
		SageMakerActions.ListInferenceRecommendationsJobs,
		SageMakerActions.ListJobSchemaVersions,
		SageMakerActions.ListJobs,
		SageMakerActions.ListLabelingJobs,
		SageMakerActions.ListLabelingJobsForWorkteam,
		SageMakerActions.ListLineageGroups,
		SageMakerActions.ListMlflowApps,
		SageMakerActions.ListMlflowTrackingServers,
		SageMakerActions.ListModelBiasJobDefinitions,
		SageMakerActions.ListModelCardExportJobs,
		SageMakerActions.ListModelCardVersions,
		SageMakerActions.ListModelCards,
		SageMakerActions.ListModelExplainabilityJobDefinitions,
		SageMakerActions.ListModelMetadata,
		SageMakerActions.ListModelPackageGroups,
		SageMakerActions.ListModelPackages,
		SageMakerActions.ListModelQualityJobDefinitions,
		SageMakerActions.ListModels,
		SageMakerActions.ListMonitoringAlertHistory,
		SageMakerActions.ListMonitoringAlerts,
		SageMakerActions.ListMonitoringExecutions,
		SageMakerActions.ListMonitoringSchedules,
		SageMakerActions.ListNotebookInstanceLifecycleConfigs,
		SageMakerActions.ListNotebookInstances,
		SageMakerActions.ListOptimizationJobs,
		SageMakerActions.ListPartnerApps,
		SageMakerActions.ListPipelineExecutionSteps,
		SageMakerActions.ListPipelineExecutions,
		SageMakerActions.ListPipelineParametersForExecution,
		SageMakerActions.ListPipelineVersions,
		SageMakerActions.ListPipelines,
		SageMakerActions.ListProcessingJobs,
		SageMakerActions.ListProjects,
		SageMakerActions.ListRecords,
		SageMakerActions.ListResourceCatalogs,
		SageMakerActions.ListSharedModelEvents,
		SageMakerActions.ListSharedModelVersions,
		SageMakerActions.ListSharedModels,
		SageMakerActions.ListSpaces,
		SageMakerActions.ListStageDevices,
		SageMakerActions.ListStudioLifecycleConfigs,
		SageMakerActions.ListSubscribedWorkteams,
		SageMakerActions.ListTags,
		SageMakerActions.ListTrainingJobs,
		SageMakerActions.ListTrainingJobsForHyperParameterTuningJob,
		SageMakerActions.ListTrainingPlans,
		SageMakerActions.ListTransformJobs,
		SageMakerActions.ListTrialComponents,
		SageMakerActions.ListTrials,
		SageMakerActions.ListUltraServersByReservedCapacity,
		SageMakerActions.ListUserProfiles,
		SageMakerActions.ListWorkforces,
		SageMakerActions.ListWorkteams,
		SageMakerActions.QueryLineage,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SageMakerActions.AddTags,
		SageMakerActions.DeleteTags,
	];
}

/**
 * Properties for building a action ARN.
 */
export interface SageMakerActionArnProps {
	/** The ActionName component of the ARN. */
	readonly actionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a action ARN.
 */
export interface SageMakerActionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ActionName component. */
	readonly actionName: string;
}

/**
 * Properties for building a ai-benchmark-job ARN.
 */
export interface SageMakerAiBenchmarkJobArnProps {
	/** The AIBenchmarkJobName component of the ARN. */
	readonly aiBenchmarkJobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ai-benchmark-job ARN.
 */
export interface SageMakerAiBenchmarkJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AIBenchmarkJobName component. */
	readonly aiBenchmarkJobName: string;
}

/**
 * Properties for building a ai-recommendation-job ARN.
 */
export interface SageMakerAiRecommendationJobArnProps {
	/** The AIRecommendationJobName component of the ARN. */
	readonly aiRecommendationJobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ai-recommendation-job ARN.
 */
export interface SageMakerAiRecommendationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AIRecommendationJobName component. */
	readonly aiRecommendationJobName: string;
}

/**
 * Properties for building a ai-workload-config ARN.
 */
export interface SageMakerAiWorkloadConfigArnProps {
	/** The AIWorkloadConfigName component of the ARN. */
	readonly aiWorkloadConfigName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ai-workload-config ARN.
 */
export interface SageMakerAiWorkloadConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AIWorkloadConfigName component. */
	readonly aiWorkloadConfigName: string;
}

/**
 * Properties for building a algorithm ARN.
 */
export interface SageMakerAlgorithmArnProps {
	/** The AlgorithmName component of the ARN. */
	readonly algorithmName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a algorithm ARN.
 */
export interface SageMakerAlgorithmArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AlgorithmName component. */
	readonly algorithmName: string;
}

/**
 * Properties for building a app ARN.
 */
export interface SageMakerAppArnProps {
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
}

/**
 * Parsed components of a app ARN.
 */
export interface SageMakerAppArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The UserProfileName component. */
	readonly userProfileName: string;
	/** The AppType component. */
	readonly appType: string;
	/** The AppName component. */
	readonly appName: string;
}

/**
 * Properties for building a app-image-config ARN.
 */
export interface SageMakerAppImageConfigArnProps {
	/** The AppImageConfigName component of the ARN. */
	readonly appImageConfigName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a app-image-config ARN.
 */
export interface SageMakerAppImageConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppImageConfigName component. */
	readonly appImageConfigName: string;
}

/**
 * Properties for building a artifact ARN.
 */
export interface SageMakerArtifactArnProps {
	/** The HashOfArtifactSource component of the ARN. */
	readonly hashOfArtifactSource: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a artifact ARN.
 */
export interface SageMakerArtifactArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HashOfArtifactSource component. */
	readonly hashOfArtifactSource: string;
}

/**
 * Properties for building a automl-job ARN.
 */
export interface SageMakerAutomlJobArnProps {
	/** The AutoMLJobJobName component of the ARN. */
	readonly autoMlJobJobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a automl-job ARN.
 */
export interface SageMakerAutomlJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AutoMLJobJobName component. */
	readonly autoMlJobJobName: string;
}

/**
 * Properties for building a cluster ARN.
 */
export interface SageMakerClusterArnProps {
	/** The ClusterId component of the ARN. */
	readonly clusterId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster ARN.
 */
export interface SageMakerClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterId component. */
	readonly clusterId: string;
}

/**
 * Properties for building a cluster-scheduler-config ARN.
 */
export interface SageMakerClusterSchedulerConfigArnProps {
	/** The ClusterSchedulerConfigId component of the ARN. */
	readonly clusterSchedulerConfigId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster-scheduler-config ARN.
 */
export interface SageMakerClusterSchedulerConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterSchedulerConfigId component. */
	readonly clusterSchedulerConfigId: string;
}

/**
 * Properties for building a code-repository ARN.
 */
export interface SageMakerCodeRepositoryArnProps {
	/** The CodeRepositoryName component of the ARN. */
	readonly codeRepositoryName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a code-repository ARN.
 */
export interface SageMakerCodeRepositoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CodeRepositoryName component. */
	readonly codeRepositoryName: string;
}

/**
 * Properties for building a compilation-job ARN.
 */
export interface SageMakerCompilationJobArnProps {
	/** The CompilationJobName component of the ARN. */
	readonly compilationJobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a compilation-job ARN.
 */
export interface SageMakerCompilationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CompilationJobName component. */
	readonly compilationJobName: string;
}

/**
 * Properties for building a compute-quota ARN.
 */
export interface SageMakerComputeQuotaArnProps {
	/** The ComputeQuotaId component of the ARN. */
	readonly computeQuotaId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a compute-quota ARN.
 */
export interface SageMakerComputeQuotaArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ComputeQuotaId component. */
	readonly computeQuotaId: string;
}

/**
 * Properties for building a context ARN.
 */
export interface SageMakerContextArnProps {
	/** The ContextName component of the ARN. */
	readonly contextName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a context ARN.
 */
export interface SageMakerContextArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ContextName component. */
	readonly contextName: string;
}

/**
 * Properties for building a data-quality-job-definition ARN.
 */
export interface SageMakerDataQualityJobDefinitionArnProps {
	/** The DataQualityJobDefinitionName component of the ARN. */
	readonly dataQualityJobDefinitionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a data-quality-job-definition ARN.
 */
export interface SageMakerDataQualityJobDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataQualityJobDefinitionName component. */
	readonly dataQualityJobDefinitionName: string;
}

/**
 * Properties for building a device ARN.
 */
export interface SageMakerDeviceArnProps {
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
}

/**
 * Parsed components of a device ARN.
 */
export interface SageMakerDeviceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeviceFleetName component. */
	readonly deviceFleetName: string;
	/** The DeviceName component. */
	readonly deviceName: string;
}

/**
 * Properties for building a device-fleet ARN.
 */
export interface SageMakerDeviceFleetArnProps {
	/** The DeviceFleetName component of the ARN. */
	readonly deviceFleetName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a device-fleet ARN.
 */
export interface SageMakerDeviceFleetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeviceFleetName component. */
	readonly deviceFleetName: string;
}

/**
 * Properties for building a domain ARN.
 */
export interface SageMakerDomainArnProps {
	/** The DomainId component of the ARN. */
	readonly domainId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a domain ARN.
 */
export interface SageMakerDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
}

/**
 * Properties for building a edge-deployment-plan ARN.
 */
export interface SageMakerEdgeDeploymentPlanArnProps {
	/** The EdgeDeploymentPlanName component of the ARN. */
	readonly edgeDeploymentPlanName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a edge-deployment-plan ARN.
 */
export interface SageMakerEdgeDeploymentPlanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EdgeDeploymentPlanName component. */
	readonly edgeDeploymentPlanName: string;
}

/**
 * Properties for building a edge-packaging-job ARN.
 */
export interface SageMakerEdgePackagingJobArnProps {
	/** The EdgePackagingJobName component of the ARN. */
	readonly edgePackagingJobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a edge-packaging-job ARN.
 */
export interface SageMakerEdgePackagingJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EdgePackagingJobName component. */
	readonly edgePackagingJobName: string;
}

/**
 * Properties for building a endpoint ARN.
 */
export interface SageMakerEndpointArnProps {
	/** The EndpointName component of the ARN. */
	readonly endpointName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a endpoint ARN.
 */
export interface SageMakerEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EndpointName component. */
	readonly endpointName: string;
}

/**
 * Properties for building a endpoint-config ARN.
 */
export interface SageMakerEndpointConfigArnProps {
	/** The EndpointConfigName component of the ARN. */
	readonly endpointConfigName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a endpoint-config ARN.
 */
export interface SageMakerEndpointConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EndpointConfigName component. */
	readonly endpointConfigName: string;
}

/**
 * Properties for building a experiment ARN.
 */
export interface SageMakerExperimentArnProps {
	/** The ExperimentName component of the ARN. */
	readonly experimentName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a experiment ARN.
 */
export interface SageMakerExperimentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ExperimentName component. */
	readonly experimentName: string;
}

/**
 * Properties for building a experiment-trial ARN.
 */
export interface SageMakerExperimentTrialArnProps {
	/** The TrialName component of the ARN. */
	readonly trialName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a experiment-trial ARN.
 */
export interface SageMakerExperimentTrialArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TrialName component. */
	readonly trialName: string;
}

/**
 * Properties for building a experiment-trial-component ARN.
 */
export interface SageMakerExperimentTrialComponentArnProps {
	/** The TrialComponentName component of the ARN. */
	readonly trialComponentName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a experiment-trial-component ARN.
 */
export interface SageMakerExperimentTrialComponentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TrialComponentName component. */
	readonly trialComponentName: string;
}

/**
 * Properties for building a feature-group ARN.
 */
export interface SageMakerFeatureGroupArnProps {
	/** The FeatureGroupName component of the ARN. */
	readonly featureGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a feature-group ARN.
 */
export interface SageMakerFeatureGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FeatureGroupName component. */
	readonly featureGroupName: string;
}

/**
 * Properties for building a flow-definition ARN.
 */
export interface SageMakerFlowDefinitionArnProps {
	/** The FlowDefinitionName component of the ARN. */
	readonly flowDefinitionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a flow-definition ARN.
 */
export interface SageMakerFlowDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FlowDefinitionName component. */
	readonly flowDefinitionName: string;
}

/**
 * Properties for building a hub ARN.
 */
export interface SageMakerHubArnProps {
	/** The HubName component of the ARN. */
	readonly hubName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a hub ARN.
 */
export interface SageMakerHubArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HubName component. */
	readonly hubName: string;
}

/**
 * Properties for building a hub-content ARN.
 */
export interface SageMakerHubContentArnProps {
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
}

/**
 * Parsed components of a hub-content ARN.
 */
export interface SageMakerHubContentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HubName component. */
	readonly hubName: string;
	/** The HubContentType component. */
	readonly hubContentType: string;
	/** The HubContentName component. */
	readonly hubContentName: string;
}

/**
 * Properties for building a human-loop ARN.
 */
export interface SageMakerHumanLoopArnProps {
	/** The HumanLoopName component of the ARN. */
	readonly humanLoopName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a human-loop ARN.
 */
export interface SageMakerHumanLoopArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HumanLoopName component. */
	readonly humanLoopName: string;
}

/**
 * Properties for building a human-task-ui ARN.
 */
export interface SageMakerHumanTaskUiArnProps {
	/** The HumanTaskUiName component of the ARN. */
	readonly humanTaskUiName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a human-task-ui ARN.
 */
export interface SageMakerHumanTaskUiArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HumanTaskUiName component. */
	readonly humanTaskUiName: string;
}

/**
 * Properties for building a hyper-parameter-tuning-job ARN.
 */
export interface SageMakerHyperParameterTuningJobArnProps {
	/** The HyperParameterTuningJobName component of the ARN. */
	readonly hyperParameterTuningJobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a hyper-parameter-tuning-job ARN.
 */
export interface SageMakerHyperParameterTuningJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HyperParameterTuningJobName component. */
	readonly hyperParameterTuningJobName: string;
}

/**
 * Properties for building a image ARN.
 */
export interface SageMakerImageArnProps {
	/** The ImageName component of the ARN. */
	readonly imageName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a image ARN.
 */
export interface SageMakerImageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ImageName component. */
	readonly imageName: string;
}

/**
 * Properties for building a image-version ARN.
 */
export interface SageMakerImageVersionArnProps {
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
}

/**
 * Parsed components of a image-version ARN.
 */
export interface SageMakerImageVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ImageName component. */
	readonly imageName: string;
	/** The Version component. */
	readonly version: string;
}

/**
 * Properties for building a inference-component ARN.
 */
export interface SageMakerInferenceComponentArnProps {
	/** The InferenceComponentName component of the ARN. */
	readonly inferenceComponentName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a inference-component ARN.
 */
export interface SageMakerInferenceComponentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InferenceComponentName component. */
	readonly inferenceComponentName: string;
}

/**
 * Properties for building a inference-experiment ARN.
 */
export interface SageMakerInferenceExperimentArnProps {
	/** The InferenceExperimentName component of the ARN. */
	readonly inferenceExperimentName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a inference-experiment ARN.
 */
export interface SageMakerInferenceExperimentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InferenceExperimentName component. */
	readonly inferenceExperimentName: string;
}

/**
 * Properties for building a inference-recommendations-job ARN.
 */
export interface SageMakerInferenceRecommendationsJobArnProps {
	/** The InferenceRecommendationsJobName component of the ARN. */
	readonly inferenceRecommendationsJobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a inference-recommendations-job ARN.
 */
export interface SageMakerInferenceRecommendationsJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InferenceRecommendationsJobName component. */
	readonly inferenceRecommendationsJobName: string;
}

/**
 * Properties for building a job ARN.
 */
export interface SageMakerJobArnProps {
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
}

/**
 * Parsed components of a job ARN.
 */
export interface SageMakerJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobCategory component. */
	readonly jobCategory: string;
	/** The JobName component. */
	readonly jobName: string;
}

/**
 * Properties for building a labeling-job ARN.
 */
export interface SageMakerLabelingJobArnProps {
	/** The LabelingJobName component of the ARN. */
	readonly labelingJobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a labeling-job ARN.
 */
export interface SageMakerLabelingJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LabelingJobName component. */
	readonly labelingJobName: string;
}

/**
 * Properties for building a lineage-group ARN.
 */
export interface SageMakerLineageGroupArnProps {
	/** The LineageGroupName component of the ARN. */
	readonly lineageGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a lineage-group ARN.
 */
export interface SageMakerLineageGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LineageGroupName component. */
	readonly lineageGroupName: string;
}

/**
 * Properties for building a mlflow-app ARN.
 */
export interface SageMakerMlflowAppArnProps {
	/** The MLflowAppId component of the ARN. */
	readonly mLflowAppId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mlflow-app ARN.
 */
export interface SageMakerMlflowAppArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MLflowAppId component. */
	readonly mLflowAppId: string;
}

/**
 * Properties for building a mlflow-tracking-server ARN.
 */
export interface SageMakerMlflowTrackingServerArnProps {
	/** The MlflowTrackingServerName component of the ARN. */
	readonly mlflowTrackingServerName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mlflow-tracking-server ARN.
 */
export interface SageMakerMlflowTrackingServerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MlflowTrackingServerName component. */
	readonly mlflowTrackingServerName: string;
}

/**
 * Properties for building a model ARN.
 */
export interface SageMakerModelArnProps {
	/** The ModelName component of the ARN. */
	readonly modelName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model ARN.
 */
export interface SageMakerModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ModelName component. */
	readonly modelName: string;
}

/**
 * Properties for building a model-bias-job-definition ARN.
 */
export interface SageMakerModelBiasJobDefinitionArnProps {
	/** The ModelBiasJobDefinitionName component of the ARN. */
	readonly modelBiasJobDefinitionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model-bias-job-definition ARN.
 */
export interface SageMakerModelBiasJobDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ModelBiasJobDefinitionName component. */
	readonly modelBiasJobDefinitionName: string;
}

/**
 * Properties for building a model-card ARN.
 */
export interface SageMakerModelCardArnProps {
	/** The ModelCardName component of the ARN. */
	readonly modelCardName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model-card ARN.
 */
export interface SageMakerModelCardArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ModelCardName component. */
	readonly modelCardName: string;
}

/**
 * Properties for building a model-card-export-job ARN.
 */
export interface SageMakerModelCardExportJobArnProps {
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
}

/**
 * Parsed components of a model-card-export-job ARN.
 */
export interface SageMakerModelCardExportJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ModelCardName component. */
	readonly modelCardName: string;
	/** The ExportJobName component. */
	readonly exportJobName: string;
}

/**
 * Properties for building a model-explainability-job-definition ARN.
 */
export interface SageMakerModelExplainabilityJobDefinitionArnProps {
	/** The ModelExplainabilityJobDefinitionName component of the ARN. */
	readonly modelExplainabilityJobDefinitionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model-explainability-job-definition ARN.
 */
export interface SageMakerModelExplainabilityJobDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ModelExplainabilityJobDefinitionName component. */
	readonly modelExplainabilityJobDefinitionName: string;
}

/**
 * Properties for building a model-package ARN.
 */
export interface SageMakerModelPackageArnProps {
	/** The ModelPackageName component of the ARN. */
	readonly modelPackageName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model-package ARN.
 */
export interface SageMakerModelPackageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ModelPackageName component. */
	readonly modelPackageName: string;
}

/**
 * Properties for building a model-package-group ARN.
 */
export interface SageMakerModelPackageGroupArnProps {
	/** The ModelPackageGroupName component of the ARN. */
	readonly modelPackageGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model-package-group ARN.
 */
export interface SageMakerModelPackageGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ModelPackageGroupName component. */
	readonly modelPackageGroupName: string;
}

/**
 * Properties for building a model-quality-job-definition ARN.
 */
export interface SageMakerModelQualityJobDefinitionArnProps {
	/** The ModelQualityJobDefinitionName component of the ARN. */
	readonly modelQualityJobDefinitionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a model-quality-job-definition ARN.
 */
export interface SageMakerModelQualityJobDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ModelQualityJobDefinitionName component. */
	readonly modelQualityJobDefinitionName: string;
}

/**
 * Properties for building a monitoring-schedule ARN.
 */
export interface SageMakerMonitoringScheduleArnProps {
	/** The MonitoringScheduleName component of the ARN. */
	readonly monitoringScheduleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a monitoring-schedule ARN.
 */
export interface SageMakerMonitoringScheduleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MonitoringScheduleName component. */
	readonly monitoringScheduleName: string;
}

/**
 * Properties for building a monitoring-schedule-alert ARN.
 */
export interface SageMakerMonitoringScheduleAlertArnProps {
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
}

/**
 * Parsed components of a monitoring-schedule-alert ARN.
 */
export interface SageMakerMonitoringScheduleAlertArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MonitoringScheduleName component. */
	readonly monitoringScheduleName: string;
	/** The MonitoringScheduleAlertName component. */
	readonly monitoringScheduleAlertName: string;
}

/**
 * Properties for building a notebook-instance ARN.
 */
export interface SageMakerNotebookInstanceArnProps {
	/** The NotebookInstanceName component of the ARN. */
	readonly notebookInstanceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a notebook-instance ARN.
 */
export interface SageMakerNotebookInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NotebookInstanceName component. */
	readonly notebookInstanceName: string;
}

/**
 * Properties for building a notebook-instance-lifecycle-config ARN.
 */
export interface SageMakerNotebookInstanceLifecycleConfigArnProps {
	/** The NotebookInstanceLifecycleConfigName component of the ARN. */
	readonly notebookInstanceLifecycleConfigName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a notebook-instance-lifecycle-config ARN.
 */
export interface SageMakerNotebookInstanceLifecycleConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NotebookInstanceLifecycleConfigName component. */
	readonly notebookInstanceLifecycleConfigName: string;
}

/**
 * Properties for building a optimization-job ARN.
 */
export interface SageMakerOptimizationJobArnProps {
	/** The OptimizationJobName component of the ARN. */
	readonly optimizationJobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a optimization-job ARN.
 */
export interface SageMakerOptimizationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OptimizationJobName component. */
	readonly optimizationJobName: string;
}

/**
 * Properties for building a partner-app ARN.
 */
export interface SageMakerPartnerAppArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a partner-app ARN.
 */
export interface SageMakerPartnerAppArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a pipeline ARN.
 */
export interface SageMakerPipelineArnProps {
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
export interface SageMakerPipelineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PipelineName component. */
	readonly pipelineName: string;
}

/**
 * Properties for building a pipeline-execution ARN.
 */
export interface SageMakerPipelineExecutionArnProps {
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
}

/**
 * Parsed components of a pipeline-execution ARN.
 */
export interface SageMakerPipelineExecutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PipelineName component. */
	readonly pipelineName: string;
	/** The RandomString component. */
	readonly randomString: string;
}

/**
 * Properties for building a processing-job ARN.
 */
export interface SageMakerProcessingJobArnProps {
	/** The ProcessingJobName component of the ARN. */
	readonly processingJobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a processing-job ARN.
 */
export interface SageMakerProcessingJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProcessingJobName component. */
	readonly processingJobName: string;
}

/**
 * Properties for building a project ARN.
 */
export interface SageMakerProjectArnProps {
	/** The ProjectName component of the ARN. */
	readonly projectName: string;
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
export interface SageMakerProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectName component. */
	readonly projectName: string;
}

/**
 * Properties for building a reserved-capacity ARN.
 */
export interface SageMakerReservedCapacityArnProps {
	/** The RandomString component of the ARN. */
	readonly randomString: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a reserved-capacity ARN.
 */
export interface SageMakerReservedCapacityArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RandomString component. */
	readonly randomString: string;
}

/**
 * Properties for building a sagemaker-catalog ARN.
 */
export interface SageMakerSagemakerCatalogArnProps {
	/** The ResourceCatalogName component of the ARN. */
	readonly resourceCatalogName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a sagemaker-catalog ARN.
 */
export interface SageMakerSagemakerCatalogArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceCatalogName component. */
	readonly resourceCatalogName: string;
}

/**
 * Properties for building a shared-model ARN.
 */
export interface SageMakerSharedModelArnProps {
	/** The SharedModelId component of the ARN. */
	readonly sharedModelId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a shared-model ARN.
 */
export interface SageMakerSharedModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SharedModelId component. */
	readonly sharedModelId: string;
}

/**
 * Properties for building a shared-model-event ARN.
 */
export interface SageMakerSharedModelEventArnProps {
	/** The EventId component of the ARN. */
	readonly eventId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a shared-model-event ARN.
 */
export interface SageMakerSharedModelEventArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EventId component. */
	readonly eventId: string;
}

/**
 * Properties for building a space ARN.
 */
export interface SageMakerSpaceArnProps {
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
}

/**
 * Parsed components of a space ARN.
 */
export interface SageMakerSpaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The SpaceName component. */
	readonly spaceName: string;
}

/**
 * Properties for building a studio-lifecycle-config ARN.
 */
export interface SageMakerStudioLifecycleConfigArnProps {
	/** The StudioLifecycleConfigName component of the ARN. */
	readonly studioLifecycleConfigName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a studio-lifecycle-config ARN.
 */
export interface SageMakerStudioLifecycleConfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StudioLifecycleConfigName component. */
	readonly studioLifecycleConfigName: string;
}

/**
 * Properties for building a training-job ARN.
 */
export interface SageMakerTrainingJobArnProps {
	/** The TrainingJobName component of the ARN. */
	readonly trainingJobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a training-job ARN.
 */
export interface SageMakerTrainingJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TrainingJobName component. */
	readonly trainingJobName: string;
}

/**
 * Properties for building a training-plan ARN.
 */
export interface SageMakerTrainingPlanArnProps {
	/** The TrainingPlanName component of the ARN. */
	readonly trainingPlanName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a training-plan ARN.
 */
export interface SageMakerTrainingPlanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TrainingPlanName component. */
	readonly trainingPlanName: string;
}

/**
 * Properties for building a transform-job ARN.
 */
export interface SageMakerTransformJobArnProps {
	/** The TransformJobName component of the ARN. */
	readonly transformJobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a transform-job ARN.
 */
export interface SageMakerTransformJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TransformJobName component. */
	readonly transformJobName: string;
}

/**
 * Properties for building a user-profile ARN.
 */
export interface SageMakerUserProfileArnProps {
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
}

/**
 * Parsed components of a user-profile ARN.
 */
export interface SageMakerUserProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The UserProfileName component. */
	readonly userProfileName: string;
}

/**
 * Properties for building a workforce ARN.
 */
export interface SageMakerWorkforceArnProps {
	/** The WorkforceName component of the ARN. */
	readonly workforceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workforce ARN.
 */
export interface SageMakerWorkforceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkforceName component. */
	readonly workforceName: string;
}

/**
 * Properties for building a workteam ARN.
 */
export interface SageMakerWorkteamArnProps {
	/** The WorkteamName component of the ARN. */
	readonly workteamName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workteam ARN.
 */
export interface SageMakerWorkteamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkteamName component. */
	readonly workteamName: string;
}

const ActionArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):action\/(?<actionName>[^:/?]+)$/;
const AiBenchmarkJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):ai-benchmark-job\/(?<aiBenchmarkJobName>[^:/?]+)$/;
const AiRecommendationJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):ai-recommendation-job\/(?<aiRecommendationJobName>[^:/?]+)$/;
const AiWorkloadConfigArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):ai-workload-config\/(?<aiWorkloadConfigName>[^:/?]+)$/;
const AlgorithmArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):algorithm\/(?<algorithmName>[^:/?]+)$/;
const AppArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):app\/(?<domainId>[^:/?]+)\/(?<userProfileName>[^:/?]+)\/(?<appType>[^:/?]+)\/(?<appName>[^:/?]+)$/;
const AppImageConfigArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):app-image-config\/(?<appImageConfigName>[^:/?]+)$/;
const ArtifactArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):artifact\/(?<hashOfArtifactSource>[^:/?]+)$/;
const AutomlJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):automl-job\/(?<autoMlJobJobName>[^:/?]+)$/;
const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterId>[^:/?]+)$/;
const ClusterSchedulerConfigArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):cluster-scheduler-config\/(?<clusterSchedulerConfigId>[^:/?]+)$/;
const CodeRepositoryArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):code-repository\/(?<codeRepositoryName>[^:/?]+)$/;
const CompilationJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):compilation-job\/(?<compilationJobName>[^:/?]+)$/;
const ComputeQuotaArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):compute-quota\/(?<computeQuotaId>[^:/?]+)$/;
const ContextArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):context\/(?<contextName>[^:/?]+)$/;
const DataQualityJobDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):data-quality-job-definition\/(?<dataQualityJobDefinitionName>[^:/?]+)$/;
const DeviceArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):device-fleet\/(?<deviceFleetName>[^:/?]+)\/device\/(?<deviceName>[^:/?]+)$/;
const DeviceFleetArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):device-fleet\/(?<deviceFleetName>[^:/?]+)$/;
const DomainArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)$/;
const EdgeDeploymentPlanArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):edge-deployment\/(?<edgeDeploymentPlanName>[^:/?]+)$/;
const EdgePackagingJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):edge-packaging-job\/(?<edgePackagingJobName>[^:/?]+)$/;
const EndpointArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):endpoint\/(?<endpointName>[^:/?]+)$/;
const EndpointConfigArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):endpoint-config\/(?<endpointConfigName>[^:/?]+)$/;
const ExperimentArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):experiment\/(?<experimentName>[^:/?]+)$/;
const ExperimentTrialArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):experiment-trial\/(?<trialName>[^:/?]+)$/;
const ExperimentTrialComponentArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):experiment-trial-component\/(?<trialComponentName>[^:/?]+)$/;
const FeatureGroupArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):feature-group\/(?<featureGroupName>[^:/?]+)$/;
const FlowDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):flow-definition\/(?<flowDefinitionName>[^:/?]+)$/;
const HubArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):hub\/(?<hubName>[^:/?]+)$/;
const HubContentArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):hub-content\/(?<hubName>[^:/?]+)\/(?<hubContentType>[^:/?]+)\/(?<hubContentName>[^:/?]+)$/;
const HumanLoopArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):human-loop\/(?<humanLoopName>[^:/?]+)$/;
const HumanTaskUiArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):human-task-ui\/(?<humanTaskUiName>[^:/?]+)$/;
const HyperParameterTuningJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):hyper-parameter-tuning-job\/(?<hyperParameterTuningJobName>[^:/?]+)$/;
const ImageArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):image\/(?<imageName>[^:/?]+)$/;
const ImageVersionArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):image-version\/(?<imageName>[^:/?]+)\/(?<version>[^:/?]+)$/;
const InferenceComponentArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):inference-component\/(?<inferenceComponentName>[^:/?]+)$/;
const InferenceExperimentArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):inference-experiment\/(?<inferenceExperimentName>[^:/?]+)$/;
const InferenceRecommendationsJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):inference-recommendations-job\/(?<inferenceRecommendationsJobName>[^:/?]+)$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):job\/(?<jobCategory>[^:/?]+)\/(?<jobName>[^:/?]+)$/;
const LabelingJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):labeling-job\/(?<labelingJobName>[^:/?]+)$/;
const LineageGroupArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):lineage-group\/(?<lineageGroupName>[^:/?]+)$/;
const MlflowAppArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):mlflow-app\/(?<mLflowAppId>[^:/?]+)$/;
const MlflowTrackingServerArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):mlflow-tracking-server\/(?<mlflowTrackingServerName>[^:/?]+)$/;
const ModelArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model\/(?<modelName>[^:/?]+)$/;
const ModelBiasJobDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-bias-job-definition\/(?<modelBiasJobDefinitionName>[^:/?]+)$/;
const ModelCardArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-card\/(?<modelCardName>[^:/?]+)$/;
const ModelCardExportJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-card\/(?<modelCardName>[^:/?]+)\/export-job\/(?<exportJobName>[^:/?]+)$/;
const ModelExplainabilityJobDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-explainability-job-definition\/(?<modelExplainabilityJobDefinitionName>[^:/?]+)$/;
const ModelPackageArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-package\/(?<modelPackageName>[^:/?]+)$/;
const ModelPackageGroupArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-package-group\/(?<modelPackageGroupName>[^:/?]+)$/;
const ModelQualityJobDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):model-quality-job-definition\/(?<modelQualityJobDefinitionName>[^:/?]+)$/;
const MonitoringScheduleArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):monitoring-schedule\/(?<monitoringScheduleName>[^:/?]+)$/;
const MonitoringScheduleAlertArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):monitoring-schedule\/(?<monitoringScheduleName>[^:/?]+)\/alert\/(?<monitoringScheduleAlertName>[^:/?]+)$/;
const NotebookInstanceArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):notebook-instance\/(?<notebookInstanceName>[^:/?]+)$/;
const NotebookInstanceLifecycleConfigArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):notebook-instance-lifecycle-config\/(?<notebookInstanceLifecycleConfigName>[^:/?]+)$/;
const OptimizationJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):optimization-job\/(?<optimizationJobName>[^:/?]+)$/;
const PartnerAppArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):partner-app\/(?<appId>[^:/?]+)$/;
const PipelineArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):pipeline\/(?<pipelineName>[^:/?]+)$/;
const PipelineExecutionArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):pipeline\/(?<pipelineName>[^:/?]+)\/execution\/(?<randomString>[^:/?]+)$/;
const ProcessingJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):processing-job\/(?<processingJobName>[^:/?]+)$/;
const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectName>[^:/?]+)$/;
const ReservedCapacityArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):reserved-capacity\/(?<randomString>[^:/?]+)$/;
const SagemakerCatalogArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):sagemaker-catalog\/(?<resourceCatalogName>[^:/?]+)$/;
const SharedModelArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):shared-model\/(?<sharedModelId>[^:/?]+)$/;
const SharedModelEventArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):shared-model-event\/(?<eventId>[^:/?]+)$/;
const SpaceArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):space\/(?<domainId>[^:/?]+)\/(?<spaceName>[^:/?]+)$/;
const StudioLifecycleConfigArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):studio-lifecycle-config\/(?<studioLifecycleConfigName>[^:/?]+)$/;
const TrainingJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):training-job\/(?<trainingJobName>[^:/?]+)$/;
const TrainingPlanArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):training-plan\/(?<trainingPlanName>[^:/?]+)$/;
const TransformJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):transform-job\/(?<transformJobName>[^:/?]+)$/;
const UserProfileArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):user-profile\/(?<domainId>[^:/?]+)\/(?<userProfileName>[^:/?]+)$/;
const WorkforceArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):workforce\/(?<workforceName>[^:/?]+)$/;
const WorkteamArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):workteam\/(?<workteamName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for sagemaker resources.
 */
export class SageMakerResources {
	/**
	 * Builds an ARN for the action resource.
	 */
	static action(props: SageMakerActionArnProps): string {
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
	static parseActionArn(arn: string): SageMakerActionArnComponents {
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
	static aiBenchmarkJob(props: SageMakerAiBenchmarkJobArnProps): string {
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
	static parseAiBenchmarkJobArn(
		arn: string,
	): SageMakerAiBenchmarkJobArnComponents {
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
	static aiRecommendationJob(
		props: SageMakerAiRecommendationJobArnProps,
	): string {
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
	static parseAiRecommendationJobArn(
		arn: string,
	): SageMakerAiRecommendationJobArnComponents {
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
	static aiWorkloadConfig(props: SageMakerAiWorkloadConfigArnProps): string {
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
	static parseAiWorkloadConfigArn(
		arn: string,
	): SageMakerAiWorkloadConfigArnComponents {
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
	static algorithm(props: SageMakerAlgorithmArnProps): string {
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
	static parseAlgorithmArn(arn: string): SageMakerAlgorithmArnComponents {
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
	static app(props: SageMakerAppArnProps): string {
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
	static parseAppArn(arn: string): SageMakerAppArnComponents {
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
	static appImageConfig(props: SageMakerAppImageConfigArnProps): string {
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
	static parseAppImageConfigArn(
		arn: string,
	): SageMakerAppImageConfigArnComponents {
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
	static artifact(props: SageMakerArtifactArnProps): string {
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
	static parseArtifactArn(arn: string): SageMakerArtifactArnComponents {
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
	static automlJob(props: SageMakerAutomlJobArnProps): string {
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
	static parseAutomlJobArn(arn: string): SageMakerAutomlJobArnComponents {
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
	static cluster(props: SageMakerClusterArnProps): string {
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
	static parseClusterArn(arn: string): SageMakerClusterArnComponents {
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
	static clusterSchedulerConfig(
		props: SageMakerClusterSchedulerConfigArnProps,
	): string {
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
	static parseClusterSchedulerConfigArn(
		arn: string,
	): SageMakerClusterSchedulerConfigArnComponents {
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
	static codeRepository(props: SageMakerCodeRepositoryArnProps): string {
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
	static parseCodeRepositoryArn(
		arn: string,
	): SageMakerCodeRepositoryArnComponents {
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
	static compilationJob(props: SageMakerCompilationJobArnProps): string {
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
	static parseCompilationJobArn(
		arn: string,
	): SageMakerCompilationJobArnComponents {
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
	static computeQuota(props: SageMakerComputeQuotaArnProps): string {
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
	static parseComputeQuotaArn(arn: string): SageMakerComputeQuotaArnComponents {
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
	static context(props: SageMakerContextArnProps): string {
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
	static parseContextArn(arn: string): SageMakerContextArnComponents {
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
	static dataQualityJobDefinition(
		props: SageMakerDataQualityJobDefinitionArnProps,
	): string {
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
	static parseDataQualityJobDefinitionArn(
		arn: string,
	): SageMakerDataQualityJobDefinitionArnComponents {
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
	static device(props: SageMakerDeviceArnProps): string {
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
	static parseDeviceArn(arn: string): SageMakerDeviceArnComponents {
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
	static deviceFleet(props: SageMakerDeviceFleetArnProps): string {
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
	static parseDeviceFleetArn(arn: string): SageMakerDeviceFleetArnComponents {
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
	static domain(props: SageMakerDomainArnProps): string {
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
	static parseDomainArn(arn: string): SageMakerDomainArnComponents {
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
	static edgeDeploymentPlan(
		props: SageMakerEdgeDeploymentPlanArnProps,
	): string {
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
	static parseEdgeDeploymentPlanArn(
		arn: string,
	): SageMakerEdgeDeploymentPlanArnComponents {
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
	static edgePackagingJob(props: SageMakerEdgePackagingJobArnProps): string {
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
	static parseEdgePackagingJobArn(
		arn: string,
	): SageMakerEdgePackagingJobArnComponents {
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
	static endpoint(props: SageMakerEndpointArnProps): string {
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
	static parseEndpointArn(arn: string): SageMakerEndpointArnComponents {
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
	static endpointConfig(props: SageMakerEndpointConfigArnProps): string {
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
	static parseEndpointConfigArn(
		arn: string,
	): SageMakerEndpointConfigArnComponents {
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
	static experiment(props: SageMakerExperimentArnProps): string {
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
	static parseExperimentArn(arn: string): SageMakerExperimentArnComponents {
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
	static experimentTrial(props: SageMakerExperimentTrialArnProps): string {
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
	static parseExperimentTrialArn(
		arn: string,
	): SageMakerExperimentTrialArnComponents {
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
	static experimentTrialComponent(
		props: SageMakerExperimentTrialComponentArnProps,
	): string {
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
	static parseExperimentTrialComponentArn(
		arn: string,
	): SageMakerExperimentTrialComponentArnComponents {
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
	static featureGroup(props: SageMakerFeatureGroupArnProps): string {
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
	static parseFeatureGroupArn(arn: string): SageMakerFeatureGroupArnComponents {
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
	static flowDefinition(props: SageMakerFlowDefinitionArnProps): string {
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
	static parseFlowDefinitionArn(
		arn: string,
	): SageMakerFlowDefinitionArnComponents {
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
	static hub(props: SageMakerHubArnProps): string {
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
	static parseHubArn(arn: string): SageMakerHubArnComponents {
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
	static hubContent(props: SageMakerHubContentArnProps): string {
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
	static parseHubContentArn(arn: string): SageMakerHubContentArnComponents {
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
	static humanLoop(props: SageMakerHumanLoopArnProps): string {
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
	static parseHumanLoopArn(arn: string): SageMakerHumanLoopArnComponents {
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
	static humanTaskUi(props: SageMakerHumanTaskUiArnProps): string {
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
	static parseHumanTaskUiArn(arn: string): SageMakerHumanTaskUiArnComponents {
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
	static hyperParameterTuningJob(
		props: SageMakerHyperParameterTuningJobArnProps,
	): string {
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
	static parseHyperParameterTuningJobArn(
		arn: string,
	): SageMakerHyperParameterTuningJobArnComponents {
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
	static image(props: SageMakerImageArnProps): string {
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
	static parseImageArn(arn: string): SageMakerImageArnComponents {
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
	static imageVersion(props: SageMakerImageVersionArnProps): string {
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
	static parseImageVersionArn(arn: string): SageMakerImageVersionArnComponents {
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
	static inferenceComponent(
		props: SageMakerInferenceComponentArnProps,
	): string {
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
	static parseInferenceComponentArn(
		arn: string,
	): SageMakerInferenceComponentArnComponents {
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
	static inferenceExperiment(
		props: SageMakerInferenceExperimentArnProps,
	): string {
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
	static parseInferenceExperimentArn(
		arn: string,
	): SageMakerInferenceExperimentArnComponents {
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
	static inferenceRecommendationsJob(
		props: SageMakerInferenceRecommendationsJobArnProps,
	): string {
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
	static parseInferenceRecommendationsJobArn(
		arn: string,
	): SageMakerInferenceRecommendationsJobArnComponents {
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
	static job(props: SageMakerJobArnProps): string {
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
	static parseJobArn(arn: string): SageMakerJobArnComponents {
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
	static labelingJob(props: SageMakerLabelingJobArnProps): string {
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
	static parseLabelingJobArn(arn: string): SageMakerLabelingJobArnComponents {
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
	static lineageGroup(props: SageMakerLineageGroupArnProps): string {
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
	static parseLineageGroupArn(arn: string): SageMakerLineageGroupArnComponents {
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
	static mlflowApp(props: SageMakerMlflowAppArnProps): string {
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
	static parseMlflowAppArn(arn: string): SageMakerMlflowAppArnComponents {
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
	static mlflowTrackingServer(
		props: SageMakerMlflowTrackingServerArnProps,
	): string {
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
	static parseMlflowTrackingServerArn(
		arn: string,
	): SageMakerMlflowTrackingServerArnComponents {
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
	static model(props: SageMakerModelArnProps): string {
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
	static parseModelArn(arn: string): SageMakerModelArnComponents {
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
	static modelBiasJobDefinition(
		props: SageMakerModelBiasJobDefinitionArnProps,
	): string {
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
	static parseModelBiasJobDefinitionArn(
		arn: string,
	): SageMakerModelBiasJobDefinitionArnComponents {
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
	static modelCard(props: SageMakerModelCardArnProps): string {
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
	static parseModelCardArn(arn: string): SageMakerModelCardArnComponents {
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
	static modelCardExportJob(
		props: SageMakerModelCardExportJobArnProps,
	): string {
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
	static parseModelCardExportJobArn(
		arn: string,
	): SageMakerModelCardExportJobArnComponents {
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
	static modelExplainabilityJobDefinition(
		props: SageMakerModelExplainabilityJobDefinitionArnProps,
	): string {
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
	static parseModelExplainabilityJobDefinitionArn(
		arn: string,
	): SageMakerModelExplainabilityJobDefinitionArnComponents {
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
	static modelPackage(props: SageMakerModelPackageArnProps): string {
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
	static parseModelPackageArn(arn: string): SageMakerModelPackageArnComponents {
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
	static modelPackageGroup(props: SageMakerModelPackageGroupArnProps): string {
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
	static parseModelPackageGroupArn(
		arn: string,
	): SageMakerModelPackageGroupArnComponents {
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
	static modelQualityJobDefinition(
		props: SageMakerModelQualityJobDefinitionArnProps,
	): string {
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
	static parseModelQualityJobDefinitionArn(
		arn: string,
	): SageMakerModelQualityJobDefinitionArnComponents {
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
	static monitoringSchedule(
		props: SageMakerMonitoringScheduleArnProps,
	): string {
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
	static parseMonitoringScheduleArn(
		arn: string,
	): SageMakerMonitoringScheduleArnComponents {
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
	static monitoringScheduleAlert(
		props: SageMakerMonitoringScheduleAlertArnProps,
	): string {
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
	static parseMonitoringScheduleAlertArn(
		arn: string,
	): SageMakerMonitoringScheduleAlertArnComponents {
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
	static notebookInstance(props: SageMakerNotebookInstanceArnProps): string {
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
	static parseNotebookInstanceArn(
		arn: string,
	): SageMakerNotebookInstanceArnComponents {
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
	static notebookInstanceLifecycleConfig(
		props: SageMakerNotebookInstanceLifecycleConfigArnProps,
	): string {
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
	static parseNotebookInstanceLifecycleConfigArn(
		arn: string,
	): SageMakerNotebookInstanceLifecycleConfigArnComponents {
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
	static optimizationJob(props: SageMakerOptimizationJobArnProps): string {
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
	static parseOptimizationJobArn(
		arn: string,
	): SageMakerOptimizationJobArnComponents {
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
	static partnerApp(props: SageMakerPartnerAppArnProps): string {
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
	static parsePartnerAppArn(arn: string): SageMakerPartnerAppArnComponents {
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
	static pipeline(props: SageMakerPipelineArnProps): string {
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
	static parsePipelineArn(arn: string): SageMakerPipelineArnComponents {
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
	static pipelineExecution(props: SageMakerPipelineExecutionArnProps): string {
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
	static parsePipelineExecutionArn(
		arn: string,
	): SageMakerPipelineExecutionArnComponents {
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
	static processingJob(props: SageMakerProcessingJobArnProps): string {
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
	static parseProcessingJobArn(
		arn: string,
	): SageMakerProcessingJobArnComponents {
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
	static project(props: SageMakerProjectArnProps): string {
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
	static parseProjectArn(arn: string): SageMakerProjectArnComponents {
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
	static reservedCapacity(props: SageMakerReservedCapacityArnProps): string {
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
	static parseReservedCapacityArn(
		arn: string,
	): SageMakerReservedCapacityArnComponents {
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
	static sagemakerCatalog(props: SageMakerSagemakerCatalogArnProps): string {
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
	static parseSagemakerCatalogArn(
		arn: string,
	): SageMakerSagemakerCatalogArnComponents {
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
	static sharedModel(props: SageMakerSharedModelArnProps): string {
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
	static parseSharedModelArn(arn: string): SageMakerSharedModelArnComponents {
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
	static sharedModelEvent(props: SageMakerSharedModelEventArnProps): string {
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
	static parseSharedModelEventArn(
		arn: string,
	): SageMakerSharedModelEventArnComponents {
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
	static space(props: SageMakerSpaceArnProps): string {
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
	static parseSpaceArn(arn: string): SageMakerSpaceArnComponents {
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
	static studioLifecycleConfig(
		props: SageMakerStudioLifecycleConfigArnProps,
	): string {
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
	static parseStudioLifecycleConfigArn(
		arn: string,
	): SageMakerStudioLifecycleConfigArnComponents {
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
	static trainingJob(props: SageMakerTrainingJobArnProps): string {
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
	static parseTrainingJobArn(arn: string): SageMakerTrainingJobArnComponents {
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
	static trainingPlan(props: SageMakerTrainingPlanArnProps): string {
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
	static parseTrainingPlanArn(arn: string): SageMakerTrainingPlanArnComponents {
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
	static transformJob(props: SageMakerTransformJobArnProps): string {
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
	static parseTransformJobArn(arn: string): SageMakerTransformJobArnComponents {
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
	static userProfile(props: SageMakerUserProfileArnProps): string {
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
	static parseUserProfileArn(arn: string): SageMakerUserProfileArnComponents {
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
	static workforce(props: SageMakerWorkforceArnProps): string {
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
	static parseWorkforceArn(arn: string): SageMakerWorkforceArnComponents {
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
	static workteam(props: SageMakerWorkteamArnProps): string {
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
	static parseWorkteamArn(arn: string): SageMakerWorkteamArnComponents {
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
	static readonly AddAssociation: string[] = ["sagemaker:AddAssociation"];
	/** IAM actions required for the AddTags API call. */
	static readonly AddTags: string[] = ["sagemaker:AddTags"];
	/** IAM actions required for the AssociateTrialComponent API call. */
	static readonly AssociateTrialComponent: string[] = [
		"sagemaker:AssociateTrialComponent",
	];
	/** IAM actions required for the AttachClusterNodeVolume API call. */
	static readonly AttachClusterNodeVolume: string[] = [
		"sagemaker:AttachClusterNodeVolume",
	];
	/** IAM actions required for the BatchAddClusterNodes API call. */
	static readonly BatchAddClusterNodes: string[] = [
		"sagemaker:BatchAddClusterNodes",
	];
	/** IAM actions required for the BatchDeleteClusterNodes API call. */
	static readonly BatchDeleteClusterNodes: string[] = [
		"sagemaker:BatchDeleteClusterNodes",
	];
	/** IAM actions required for the BatchDescribeModelPackage API call. */
	static readonly BatchDescribeModelPackage: string[] = [
		"sagemaker:BatchDescribeModelPackage",
	];
	/** IAM actions required for the BatchGetMetrics API call. */
	static readonly BatchGetMetrics: string[] = ["sagemaker:BatchGetMetrics"];
	/** IAM actions required for the BatchGetRecord API call. */
	static readonly BatchGetRecord: string[] = ["sagemaker:BatchGetRecord"];
	/** IAM actions required for the BatchPutMetrics API call. */
	static readonly BatchPutMetrics: string[] = ["sagemaker:BatchPutMetrics"];
	/** IAM actions required for the BatchRebootClusterNodes API call. */
	static readonly BatchRebootClusterNodes: string[] = [
		"sagemaker:BatchRebootClusterNodes",
	];
	/** IAM actions required for the BatchReplaceClusterNodes API call. */
	static readonly BatchReplaceClusterNodes: string[] = [
		"sagemaker:BatchReplaceClusterNodes",
	];
	/** IAM actions required for the BatchWriteRecord API call. */
	static readonly BatchWriteRecord: string[] = [
		"sagemaker:BatchWriteRecord",
		"sagemaker:PutRecord",
	];
	/** IAM actions required for the CompleteRollout API call. */
	static readonly CompleteRollout: string[] = [
		"sagemaker:CallWithBearerToken",
		"sagemaker:CompleteRollout",
	];
	/** IAM actions required for the CreateAIBenchmarkJob API call. */
	static readonly CreateAIBenchmarkJob: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAIBenchmarkJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAIRecommendationJob API call. */
	static readonly CreateAIRecommendationJob: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAIRecommendationJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAIWorkloadConfig API call. */
	static readonly CreateAIWorkloadConfig: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAIWorkloadConfig",
	];
	/** IAM actions required for the CreateAction API call. */
	static readonly CreateAction: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAction",
	];
	/** IAM actions required for the CreateAlgorithm API call. */
	static readonly CreateAlgorithm: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAlgorithm",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateApp API call. */
	static readonly CreateApp: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateApp",
	];
	/** IAM actions required for the CreateAppImageConfig API call. */
	static readonly CreateAppImageConfig: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAppImageConfig",
	];
	/** IAM actions required for the CreateArtifact API call. */
	static readonly CreateArtifact: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateArtifact",
	];
	/** IAM actions required for the CreateAutoMLJob API call. */
	static readonly CreateAutoMLJob: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAutoMLJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAutoMLJobV2 API call. */
	static readonly CreateAutoMLJobV2: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateAutoMLJobV2",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CreateCluster: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateCluster",
		"iam:PassRole",
		"sagemaker:UpdateClusterSoftware",
	];
	/** IAM actions required for the CreateClusterSchedulerConfig API call. */
	static readonly CreateClusterSchedulerConfig: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateClusterSchedulerConfig",
	];
	/** IAM actions required for the CreateCodeRepository API call. */
	static readonly CreateCodeRepository: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateCodeRepository",
	];
	/** IAM actions required for the CreateCompilationJob API call. */
	static readonly CreateCompilationJob: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateCompilationJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateComputeQuota API call. */
	static readonly CreateComputeQuota: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateComputeQuota",
	];
	/** IAM actions required for the CreateContext API call. */
	static readonly CreateContext: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateContext",
	];
	/** IAM actions required for the CreateDataQualityJobDefinition API call. */
	static readonly CreateDataQualityJobDefinition: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateDataQualityJobDefinition",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDeviceFleet API call. */
	static readonly CreateDeviceFleet: string[] = [];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CreateDomain: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateDomain",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateEdgeDeploymentPlan API call. */
	static readonly CreateEdgeDeploymentPlan: string[] = [];
	/** IAM actions required for the CreateEdgeDeploymentStage API call. */
	static readonly CreateEdgeDeploymentStage: string[] = [];
	/** IAM actions required for the CreateEdgePackagingJob API call. */
	static readonly CreateEdgePackagingJob: string[] = [];
	/** IAM actions required for the CreateEndpoint API call. */
	static readonly CreateEndpoint: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateEndpoint",
	];
	/** IAM actions required for the CreateEndpointConfig API call. */
	static readonly CreateEndpointConfig: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateEndpointConfig",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateExperiment API call. */
	static readonly CreateExperiment: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateExperiment",
	];
	/** IAM actions required for the CreateFeatureGroup API call. */
	static readonly CreateFeatureGroup: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateFeatureGroup",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateFlowDefinition API call. */
	static readonly CreateFlowDefinition: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateFlowDefinition",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateHub API call. */
	static readonly CreateHub: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateHub",
	];
	/** IAM actions required for the CreateHubContentPresignedUrls API call. */
	static readonly CreateHubContentPresignedUrls: string[] = [
		"sagemaker:CreateHubContentPresignedUrls",
	];
	/** IAM actions required for the CreateHubContentReference API call. */
	static readonly CreateHubContentReference: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateHubContentReference",
	];
	/** IAM actions required for the CreateHumanTaskUi API call. */
	static readonly CreateHumanTaskUi: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateHumanTaskUi",
	];
	/** IAM actions required for the CreateHyperParameterTuningJob API call. */
	static readonly CreateHyperParameterTuningJob: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateHyperParameterTuningJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateImage API call. */
	static readonly CreateImage: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateImage",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateImageVersion API call. */
	static readonly CreateImageVersion: string[] = [
		"sagemaker:CreateImageVersion",
	];
	/** IAM actions required for the CreateInferenceComponent API call. */
	static readonly CreateInferenceComponent: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateInferenceComponent",
	];
	/** IAM actions required for the CreateInferenceExperiment API call. */
	static readonly CreateInferenceExperiment: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateInferenceExperiment",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateInferenceRecommendationsJob API call. */
	static readonly CreateInferenceRecommendationsJob: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateInferenceRecommendationsJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CreateJob: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateJob",
		"sagemaker:ImportHubContent",
		"iam:PassRole",
		"sagemaker:UpdateHubContent",
	];
	/** IAM actions required for the CreateLabelingJob API call. */
	static readonly CreateLabelingJob: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateLabelingJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateMlflowApp API call. */
	static readonly CreateMlflowApp: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateMlflowApp",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateMlflowTrackingServer API call. */
	static readonly CreateMlflowTrackingServer: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateMlflowTrackingServer",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateModel API call. */
	static readonly CreateModel: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModel",
		"sagemaker:DeployHubModel",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateModelBiasJobDefinition API call. */
	static readonly CreateModelBiasJobDefinition: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModelBiasJobDefinition",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateModelCard API call. */
	static readonly CreateModelCard: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModelCard",
	];
	/** IAM actions required for the CreateModelCardExportJob API call. */
	static readonly CreateModelCardExportJob: string[] = [
		"sagemaker:CreateModelCardExportJob",
	];
	/** IAM actions required for the CreateModelExplainabilityJobDefinition API call. */
	static readonly CreateModelExplainabilityJobDefinition: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModelExplainabilityJobDefinition",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateModelPackage API call. */
	static readonly CreateModelPackage: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModelPackage",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateModelPackageGroup API call. */
	static readonly CreateModelPackageGroup: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModelPackageGroup",
	];
	/** IAM actions required for the CreateModelQualityJobDefinition API call. */
	static readonly CreateModelQualityJobDefinition: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateModelQualityJobDefinition",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateMonitoringSchedule API call. */
	static readonly CreateMonitoringSchedule: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateMonitoringSchedule",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateNotebookInstance API call. */
	static readonly CreateNotebookInstance: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateNotebookInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateNotebookInstanceLifecycleConfig API call. */
	static readonly CreateNotebookInstanceLifecycleConfig: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateNotebookInstanceLifecycleConfig",
	];
	/** IAM actions required for the CreateOptimizationJob API call. */
	static readonly CreateOptimizationJob: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateOptimizationJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreatePartnerApp API call. */
	static readonly CreatePartnerApp: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreatePartnerApp",
		"iam:PassRole",
	];
	/** IAM actions required for the CreatePartnerAppPresignedUrl API call. */
	static readonly CreatePartnerAppPresignedUrl: string[] = [
		"sagemaker:CreatePartnerAppPresignedUrl",
	];
	/** IAM actions required for the CreatePipeline API call. */
	static readonly CreatePipeline: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreatePipeline",
		"iam:PassRole",
	];
	/** IAM actions required for the CreatePresignedDomainUrl API call. */
	static readonly CreatePresignedDomainUrl: string[] = [
		"sagemaker:CreatePresignedDomainUrl",
	];
	/** IAM actions required for the CreatePresignedMlflowAppUrl API call. */
	static readonly CreatePresignedMlflowAppUrl: string[] = [
		"sagemaker:CreatePresignedMlflowAppUrl",
	];
	/** IAM actions required for the CreatePresignedMlflowTrackingServerUrl API call. */
	static readonly CreatePresignedMlflowTrackingServerUrl: string[] = [
		"sagemaker:CreatePresignedMlflowTrackingServerUrl",
	];
	/** IAM actions required for the CreatePresignedNotebookInstanceUrl API call. */
	static readonly CreatePresignedNotebookInstanceUrl: string[] = [
		"sagemaker:CreatePresignedNotebookInstanceUrl",
	];
	/** IAM actions required for the CreateProcessingJob API call. */
	static readonly CreateProcessingJob: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateProcessingJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateProject API call. */
	static readonly CreateProject: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateProject",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateSpace API call. */
	static readonly CreateSpace: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateSpace",
	];
	/** IAM actions required for the CreateStudioLifecycleConfig API call. */
	static readonly CreateStudioLifecycleConfig: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateStudioLifecycleConfig",
	];
	/** IAM actions required for the CreateTrainingJob API call. */
	static readonly CreateTrainingJob: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateTrainingJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateTrainingPlan API call. */
	static readonly CreateTrainingPlan: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateReservedCapacity",
		"sagemaker:CreateTrainingPlan",
	];
	/** IAM actions required for the CreateTransformJob API call. */
	static readonly CreateTransformJob: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateTransformJob",
	];
	/** IAM actions required for the CreateTrial API call. */
	static readonly CreateTrial: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateTrial",
	];
	/** IAM actions required for the CreateTrialComponent API call. */
	static readonly CreateTrialComponent: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateTrialComponent",
	];
	/** IAM actions required for the CreateUserProfile API call. */
	static readonly CreateUserProfile: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateUserProfile",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateWorkforce API call. */
	static readonly CreateWorkforce: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateWorkforce",
	];
	/** IAM actions required for the CreateWorkteam API call. */
	static readonly CreateWorkteam: string[] = [
		"sagemaker:AddTags",
		"sagemaker:CreateWorkteam",
	];
	/** IAM actions required for the DeleteAIBenchmarkJob API call. */
	static readonly DeleteAIBenchmarkJob: string[] = [
		"sagemaker:DeleteAIBenchmarkJob",
	];
	/** IAM actions required for the DeleteAIRecommendationJob API call. */
	static readonly DeleteAIRecommendationJob: string[] = [
		"sagemaker:DeleteAIRecommendationJob",
	];
	/** IAM actions required for the DeleteAIWorkloadConfig API call. */
	static readonly DeleteAIWorkloadConfig: string[] = [
		"sagemaker:DeleteAIWorkloadConfig",
	];
	/** IAM actions required for the DeleteAction API call. */
	static readonly DeleteAction: string[] = ["sagemaker:DeleteAction"];
	/** IAM actions required for the DeleteAlgorithm API call. */
	static readonly DeleteAlgorithm: string[] = ["sagemaker:DeleteAlgorithm"];
	/** IAM actions required for the DeleteApp API call. */
	static readonly DeleteApp: string[] = ["sagemaker:DeleteApp"];
	/** IAM actions required for the DeleteAppImageConfig API call. */
	static readonly DeleteAppImageConfig: string[] = [
		"sagemaker:DeleteAppImageConfig",
	];
	/** IAM actions required for the DeleteArtifact API call. */
	static readonly DeleteArtifact: string[] = ["sagemaker:DeleteArtifact"];
	/** IAM actions required for the DeleteAssociation API call. */
	static readonly DeleteAssociation: string[] = ["sagemaker:DeleteAssociation"];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DeleteCluster: string[] = ["sagemaker:DeleteCluster"];
	/** IAM actions required for the DeleteClusterSchedulerConfig API call. */
	static readonly DeleteClusterSchedulerConfig: string[] = [
		"sagemaker:DeleteClusterSchedulerConfig",
	];
	/** IAM actions required for the DeleteCodeRepository API call. */
	static readonly DeleteCodeRepository: string[] = [
		"sagemaker:DeleteCodeRepository",
	];
	/** IAM actions required for the DeleteCompilationJob API call. */
	static readonly DeleteCompilationJob: string[] = [
		"sagemaker:DeleteCompilationJob",
	];
	/** IAM actions required for the DeleteComputeQuota API call. */
	static readonly DeleteComputeQuota: string[] = [
		"sagemaker:DeleteComputeQuota",
	];
	/** IAM actions required for the DeleteContext API call. */
	static readonly DeleteContext: string[] = ["sagemaker:DeleteContext"];
	/** IAM actions required for the DeleteDataQualityJobDefinition API call. */
	static readonly DeleteDataQualityJobDefinition: string[] = [
		"sagemaker:DeleteDataQualityJobDefinition",
	];
	/** IAM actions required for the DeleteDeviceFleet API call. */
	static readonly DeleteDeviceFleet: string[] = [];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DeleteDomain: string[] = ["sagemaker:DeleteDomain"];
	/** IAM actions required for the DeleteEdgeDeploymentPlan API call. */
	static readonly DeleteEdgeDeploymentPlan: string[] = [];
	/** IAM actions required for the DeleteEdgeDeploymentStage API call. */
	static readonly DeleteEdgeDeploymentStage: string[] = [];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DeleteEndpoint: string[] = ["sagemaker:DeleteEndpoint"];
	/** IAM actions required for the DeleteEndpointConfig API call. */
	static readonly DeleteEndpointConfig: string[] = [
		"sagemaker:DeleteEndpointConfig",
	];
	/** IAM actions required for the DeleteExperiment API call. */
	static readonly DeleteExperiment: string[] = ["sagemaker:DeleteExperiment"];
	/** IAM actions required for the DeleteFeatureGroup API call. */
	static readonly DeleteFeatureGroup: string[] = [
		"sagemaker:DeleteFeatureGroup",
	];
	/** IAM actions required for the DeleteFlowDefinition API call. */
	static readonly DeleteFlowDefinition: string[] = [
		"sagemaker:DeleteFlowDefinition",
	];
	/** IAM actions required for the DeleteHub API call. */
	static readonly DeleteHub: string[] = ["sagemaker:DeleteHub"];
	/** IAM actions required for the DeleteHubContent API call. */
	static readonly DeleteHubContent: string[] = ["sagemaker:DeleteHubContent"];
	/** IAM actions required for the DeleteHubContentReference API call. */
	static readonly DeleteHubContentReference: string[] = [
		"sagemaker:DeleteHubContentReference",
	];
	/** IAM actions required for the DeleteHumanLoop API call. */
	static readonly DeleteHumanLoop: string[] = ["sagemaker:DeleteHumanLoop"];
	/** IAM actions required for the DeleteHumanTaskUi API call. */
	static readonly DeleteHumanTaskUi: string[] = ["sagemaker:DeleteHumanTaskUi"];
	/** IAM actions required for the DeleteHyperParameterTuningJob API call. */
	static readonly DeleteHyperParameterTuningJob: string[] = [
		"sagemaker:DeleteHyperParameterTuningJob",
	];
	/** IAM actions required for the DeleteImage API call. */
	static readonly DeleteImage: string[] = ["sagemaker:DeleteImage"];
	/** IAM actions required for the DeleteImageVersion API call. */
	static readonly DeleteImageVersion: string[] = [
		"sagemaker:DeleteImageVersion",
	];
	/** IAM actions required for the DeleteInferenceComponent API call. */
	static readonly DeleteInferenceComponent: string[] = [
		"sagemaker:DeleteInferenceComponent",
	];
	/** IAM actions required for the DeleteInferenceExperiment API call. */
	static readonly DeleteInferenceExperiment: string[] = [
		"sagemaker:DeleteInferenceExperiment",
	];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DeleteJob: string[] = ["sagemaker:DeleteJob"];
	/** IAM actions required for the DeleteMlflowApp API call. */
	static readonly DeleteMlflowApp: string[] = ["sagemaker:DeleteMlflowApp"];
	/** IAM actions required for the DeleteMlflowTrackingServer API call. */
	static readonly DeleteMlflowTrackingServer: string[] = [
		"sagemaker:DeleteMlflowTrackingServer",
	];
	/** IAM actions required for the DeleteModel API call. */
	static readonly DeleteModel: string[] = ["sagemaker:DeleteModel"];
	/** IAM actions required for the DeleteModelBiasJobDefinition API call. */
	static readonly DeleteModelBiasJobDefinition: string[] = [
		"sagemaker:DeleteModelBiasJobDefinition",
	];
	/** IAM actions required for the DeleteModelCard API call. */
	static readonly DeleteModelCard: string[] = ["sagemaker:DeleteModelCard"];
	/** IAM actions required for the DeleteModelExplainabilityJobDefinition API call. */
	static readonly DeleteModelExplainabilityJobDefinition: string[] = [
		"sagemaker:DeleteModelExplainabilityJobDefinition",
	];
	/** IAM actions required for the DeleteModelPackage API call. */
	static readonly DeleteModelPackage: string[] = [
		"sagemaker:DeleteModelPackage",
	];
	/** IAM actions required for the DeleteModelPackageGroup API call. */
	static readonly DeleteModelPackageGroup: string[] = [
		"sagemaker:DeleteModelPackageGroup",
	];
	/** IAM actions required for the DeleteModelPackageGroupPolicy API call. */
	static readonly DeleteModelPackageGroupPolicy: string[] = [
		"sagemaker:DeleteModelPackageGroupPolicy",
	];
	/** IAM actions required for the DeleteModelQualityJobDefinition API call. */
	static readonly DeleteModelQualityJobDefinition: string[] = [
		"sagemaker:DeleteModelQualityJobDefinition",
	];
	/** IAM actions required for the DeleteMonitoringSchedule API call. */
	static readonly DeleteMonitoringSchedule: string[] = [
		"sagemaker:DeleteMonitoringSchedule",
	];
	/** IAM actions required for the DeleteNotebookInstance API call. */
	static readonly DeleteNotebookInstance: string[] = [
		"sagemaker:DeleteNotebookInstance",
	];
	/** IAM actions required for the DeleteNotebookInstanceLifecycleConfig API call. */
	static readonly DeleteNotebookInstanceLifecycleConfig: string[] = [
		"sagemaker:DeleteNotebookInstanceLifecycleConfig",
	];
	/** IAM actions required for the DeleteOptimizationJob API call. */
	static readonly DeleteOptimizationJob: string[] = [
		"sagemaker:DeleteOptimizationJob",
	];
	/** IAM actions required for the DeletePartnerApp API call. */
	static readonly DeletePartnerApp: string[] = ["sagemaker:DeletePartnerApp"];
	/** IAM actions required for the DeletePipeline API call. */
	static readonly DeletePipeline: string[] = ["sagemaker:DeletePipeline"];
	/** IAM actions required for the DeleteProcessingJob API call. */
	static readonly DeleteProcessingJob: string[] = [
		"sagemaker:DeleteProcessingJob",
	];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DeleteProject: string[] = ["sagemaker:DeleteProject"];
	/** IAM actions required for the DeleteRecord API call. */
	static readonly DeleteRecord: string[] = ["sagemaker:DeleteRecord"];
	/** IAM actions required for the DeleteSpace API call. */
	static readonly DeleteSpace: string[] = ["sagemaker:DeleteSpace"];
	/** IAM actions required for the DeleteStudioLifecycleConfig API call. */
	static readonly DeleteStudioLifecycleConfig: string[] = [
		"sagemaker:DeleteStudioLifecycleConfig",
	];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DeleteTags: string[] = ["sagemaker:DeleteTags"];
	/** IAM actions required for the DeleteTrainingJob API call. */
	static readonly DeleteTrainingJob: string[] = ["sagemaker:DeleteTrainingJob"];
	/** IAM actions required for the DeleteTrial API call. */
	static readonly DeleteTrial: string[] = ["sagemaker:DeleteTrial"];
	/** IAM actions required for the DeleteTrialComponent API call. */
	static readonly DeleteTrialComponent: string[] = [
		"sagemaker:DeleteTrialComponent",
	];
	/** IAM actions required for the DeleteUserProfile API call. */
	static readonly DeleteUserProfile: string[] = ["sagemaker:DeleteUserProfile"];
	/** IAM actions required for the DeleteWorkforce API call. */
	static readonly DeleteWorkforce: string[] = ["sagemaker:DeleteWorkforce"];
	/** IAM actions required for the DeleteWorkteam API call. */
	static readonly DeleteWorkteam: string[] = ["sagemaker:DeleteWorkteam"];
	/** IAM actions required for the DeregisterDevices API call. */
	static readonly DeregisterDevices: string[] = [];
	/** IAM actions required for the DescribeAIBenchmarkJob API call. */
	static readonly DescribeAIBenchmarkJob: string[] = [
		"sagemaker:DescribeAIBenchmarkJob",
	];
	/** IAM actions required for the DescribeAIRecommendationJob API call. */
	static readonly DescribeAIRecommendationJob: string[] = [
		"sagemaker:DescribeAIRecommendationJob",
	];
	/** IAM actions required for the DescribeAIWorkloadConfig API call. */
	static readonly DescribeAIWorkloadConfig: string[] = [
		"sagemaker:DescribeAIWorkloadConfig",
	];
	/** IAM actions required for the DescribeAction API call. */
	static readonly DescribeAction: string[] = ["sagemaker:DescribeAction"];
	/** IAM actions required for the DescribeAlgorithm API call. */
	static readonly DescribeAlgorithm: string[] = ["sagemaker:DescribeAlgorithm"];
	/** IAM actions required for the DescribeApp API call. */
	static readonly DescribeApp: string[] = ["sagemaker:DescribeApp"];
	/** IAM actions required for the DescribeAppImageConfig API call. */
	static readonly DescribeAppImageConfig: string[] = [
		"sagemaker:DescribeAppImageConfig",
	];
	/** IAM actions required for the DescribeArtifact API call. */
	static readonly DescribeArtifact: string[] = ["sagemaker:DescribeArtifact"];
	/** IAM actions required for the DescribeAutoMLJob API call. */
	static readonly DescribeAutoMLJob: string[] = ["sagemaker:DescribeAutoMLJob"];
	/** IAM actions required for the DescribeAutoMLJobV2 API call. */
	static readonly DescribeAutoMLJobV2: string[] = [
		"sagemaker:DescribeAutoMLJobV2",
	];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DescribeCluster: string[] = ["sagemaker:DescribeCluster"];
	/** IAM actions required for the DescribeClusterEvent API call. */
	static readonly DescribeClusterEvent: string[] = [
		"sagemaker:DescribeClusterEvent",
	];
	/** IAM actions required for the DescribeClusterNode API call. */
	static readonly DescribeClusterNode: string[] = [
		"sagemaker:DescribeClusterNode",
	];
	/** IAM actions required for the DescribeClusterSchedulerConfig API call. */
	static readonly DescribeClusterSchedulerConfig: string[] = [
		"sagemaker:DescribeClusterSchedulerConfig",
	];
	/** IAM actions required for the DescribeCodeRepository API call. */
	static readonly DescribeCodeRepository: string[] = [
		"sagemaker:DescribeCodeRepository",
	];
	/** IAM actions required for the DescribeCompilationJob API call. */
	static readonly DescribeCompilationJob: string[] = [
		"sagemaker:DescribeCompilationJob",
	];
	/** IAM actions required for the DescribeComputeQuota API call. */
	static readonly DescribeComputeQuota: string[] = [
		"sagemaker:DescribeComputeQuota",
	];
	/** IAM actions required for the DescribeContext API call. */
	static readonly DescribeContext: string[] = ["sagemaker:DescribeContext"];
	/** IAM actions required for the DescribeDataQualityJobDefinition API call. */
	static readonly DescribeDataQualityJobDefinition: string[] = [
		"sagemaker:DescribeDataQualityJobDefinition",
	];
	/** IAM actions required for the DescribeDevice API call. */
	static readonly DescribeDevice: string[] = [];
	/** IAM actions required for the DescribeDeviceFleet API call. */
	static readonly DescribeDeviceFleet: string[] = [];
	/** IAM actions required for the DescribeDomain API call. */
	static readonly DescribeDomain: string[] = ["sagemaker:DescribeDomain"];
	/** IAM actions required for the DescribeEdgeDeploymentPlan API call. */
	static readonly DescribeEdgeDeploymentPlan: string[] = [];
	/** IAM actions required for the DescribeEdgePackagingJob API call. */
	static readonly DescribeEdgePackagingJob: string[] = [];
	/** IAM actions required for the DescribeEndpoint API call. */
	static readonly DescribeEndpoint: string[] = ["sagemaker:DescribeEndpoint"];
	/** IAM actions required for the DescribeEndpointConfig API call. */
	static readonly DescribeEndpointConfig: string[] = [
		"sagemaker:DescribeEndpointConfig",
	];
	/** IAM actions required for the DescribeExperiment API call. */
	static readonly DescribeExperiment: string[] = [
		"sagemaker:DescribeExperiment",
	];
	/** IAM actions required for the DescribeFeatureGroup API call. */
	static readonly DescribeFeatureGroup: string[] = [
		"sagemaker:DescribeFeatureGroup",
	];
	/** IAM actions required for the DescribeFeatureMetadata API call. */
	static readonly DescribeFeatureMetadata: string[] = [
		"sagemaker:DescribeFeatureMetadata",
	];
	/** IAM actions required for the DescribeFlowDefinition API call. */
	static readonly DescribeFlowDefinition: string[] = [
		"sagemaker:DescribeFlowDefinition",
	];
	/** IAM actions required for the DescribeHub API call. */
	static readonly DescribeHub: string[] = ["sagemaker:DescribeHub"];
	/** IAM actions required for the DescribeHubContent API call. */
	static readonly DescribeHubContent: string[] = [
		"sagemaker:DescribeHubContent",
	];
	/** IAM actions required for the DescribeHumanLoop API call. */
	static readonly DescribeHumanLoop: string[] = ["sagemaker:DescribeHumanLoop"];
	/** IAM actions required for the DescribeHumanTaskUi API call. */
	static readonly DescribeHumanTaskUi: string[] = [
		"sagemaker:DescribeHumanTaskUi",
	];
	/** IAM actions required for the DescribeHyperParameterTuningJob API call. */
	static readonly DescribeHyperParameterTuningJob: string[] = [
		"sagemaker:DescribeHyperParameterTuningJob",
	];
	/** IAM actions required for the DescribeImage API call. */
	static readonly DescribeImage: string[] = ["sagemaker:DescribeImage"];
	/** IAM actions required for the DescribeImageVersion API call. */
	static readonly DescribeImageVersion: string[] = [
		"sagemaker:DescribeImageVersion",
	];
	/** IAM actions required for the DescribeInferenceComponent API call. */
	static readonly DescribeInferenceComponent: string[] = [
		"sagemaker:DescribeInferenceComponent",
	];
	/** IAM actions required for the DescribeInferenceExperiment API call. */
	static readonly DescribeInferenceExperiment: string[] = [
		"sagemaker:DescribeInferenceExperiment",
	];
	/** IAM actions required for the DescribeInferenceRecommendationsJob API call. */
	static readonly DescribeInferenceRecommendationsJob: string[] = [
		"sagemaker:DescribeInferenceRecommendationsJob",
	];
	/** IAM actions required for the DescribeJob API call. */
	static readonly DescribeJob: string[] = ["sagemaker:DescribeJob"];
	/** IAM actions required for the DescribeJobSchemaVersion API call. */
	static readonly DescribeJobSchemaVersion: string[] = [
		"sagemaker:DescribeJobSchemaVersion",
	];
	/** IAM actions required for the DescribeLabelingJob API call. */
	static readonly DescribeLabelingJob: string[] = [
		"sagemaker:DescribeLabelingJob",
	];
	/** IAM actions required for the DescribeLineageGroup API call. */
	static readonly DescribeLineageGroup: string[] = [
		"sagemaker:DescribeLineageGroup",
	];
	/** IAM actions required for the DescribeMlflowApp API call. */
	static readonly DescribeMlflowApp: string[] = ["sagemaker:DescribeMlflowApp"];
	/** IAM actions required for the DescribeMlflowTrackingServer API call. */
	static readonly DescribeMlflowTrackingServer: string[] = [
		"sagemaker:DescribeMlflowTrackingServer",
	];
	/** IAM actions required for the DescribeModel API call. */
	static readonly DescribeModel: string[] = ["sagemaker:DescribeModel"];
	/** IAM actions required for the DescribeModelBiasJobDefinition API call. */
	static readonly DescribeModelBiasJobDefinition: string[] = [
		"sagemaker:DescribeModelBiasJobDefinition",
	];
	/** IAM actions required for the DescribeModelCard API call. */
	static readonly DescribeModelCard: string[] = ["sagemaker:DescribeModelCard"];
	/** IAM actions required for the DescribeModelCardExportJob API call. */
	static readonly DescribeModelCardExportJob: string[] = [
		"sagemaker:DescribeModelCardExportJob",
	];
	/** IAM actions required for the DescribeModelExplainabilityJobDefinition API call. */
	static readonly DescribeModelExplainabilityJobDefinition: string[] = [
		"sagemaker:DescribeModelExplainabilityJobDefinition",
	];
	/** IAM actions required for the DescribeModelPackage API call. */
	static readonly DescribeModelPackage: string[] = [
		"sagemaker:DescribeModelPackage",
	];
	/** IAM actions required for the DescribeModelPackageGroup API call. */
	static readonly DescribeModelPackageGroup: string[] = [
		"sagemaker:DescribeModelPackageGroup",
	];
	/** IAM actions required for the DescribeModelQualityJobDefinition API call. */
	static readonly DescribeModelQualityJobDefinition: string[] = [
		"sagemaker:DescribeModelQualityJobDefinition",
	];
	/** IAM actions required for the DescribeMonitoringSchedule API call. */
	static readonly DescribeMonitoringSchedule: string[] = [
		"sagemaker:DescribeMonitoringSchedule",
	];
	/** IAM actions required for the DescribeNotebookInstance API call. */
	static readonly DescribeNotebookInstance: string[] = [
		"sagemaker:DescribeNotebookInstance",
	];
	/** IAM actions required for the DescribeNotebookInstanceLifecycleConfig API call. */
	static readonly DescribeNotebookInstanceLifecycleConfig: string[] = [
		"sagemaker:DescribeNotebookInstanceLifecycleConfig",
	];
	/** IAM actions required for the DescribeOptimizationJob API call. */
	static readonly DescribeOptimizationJob: string[] = [
		"sagemaker:DescribeOptimizationJob",
	];
	/** IAM actions required for the DescribePartnerApp API call. */
	static readonly DescribePartnerApp: string[] = [
		"sagemaker:DescribePartnerApp",
	];
	/** IAM actions required for the DescribePipeline API call. */
	static readonly DescribePipeline: string[] = ["sagemaker:DescribePipeline"];
	/** IAM actions required for the DescribePipelineDefinitionForExecution API call. */
	static readonly DescribePipelineDefinitionForExecution: string[] = [
		"sagemaker:DescribePipelineDefinitionForExecution",
	];
	/** IAM actions required for the DescribePipelineExecution API call. */
	static readonly DescribePipelineExecution: string[] = [
		"sagemaker:DescribePipelineExecution",
	];
	/** IAM actions required for the DescribeProcessingJob API call. */
	static readonly DescribeProcessingJob: string[] = [
		"sagemaker:DescribeProcessingJob",
	];
	/** IAM actions required for the DescribeProject API call. */
	static readonly DescribeProject: string[] = ["sagemaker:DescribeProject"];
	/** IAM actions required for the DescribeReservedCapacity API call. */
	static readonly DescribeReservedCapacity: string[] = [
		"sagemaker:DescribeReservedCapacity",
	];
	/** IAM actions required for the DescribeSpace API call. */
	static readonly DescribeSpace: string[] = ["sagemaker:DescribeSpace"];
	/** IAM actions required for the DescribeStudioLifecycleConfig API call. */
	static readonly DescribeStudioLifecycleConfig: string[] = [
		"sagemaker:DescribeStudioLifecycleConfig",
	];
	/** IAM actions required for the DescribeSubscribedWorkteam API call. */
	static readonly DescribeSubscribedWorkteam: string[] = [
		"sagemaker:DescribeSubscribedWorkteam",
	];
	/** IAM actions required for the DescribeTrainingJob API call. */
	static readonly DescribeTrainingJob: string[] = [
		"sagemaker:DescribeTrainingJob",
	];
	/** IAM actions required for the DescribeTrainingPlan API call. */
	static readonly DescribeTrainingPlan: string[] = [
		"sagemaker:DescribeTrainingPlan",
	];
	/** IAM actions required for the DescribeTrainingPlanExtensionHistory API call. */
	static readonly DescribeTrainingPlanExtensionHistory: string[] = [
		"sagemaker:DescribeTrainingPlanExtensionHistory",
	];
	/** IAM actions required for the DescribeTransformJob API call. */
	static readonly DescribeTransformJob: string[] = [
		"sagemaker:DescribeTransformJob",
	];
	/** IAM actions required for the DescribeTrial API call. */
	static readonly DescribeTrial: string[] = ["sagemaker:DescribeTrial"];
	/** IAM actions required for the DescribeTrialComponent API call. */
	static readonly DescribeTrialComponent: string[] = [
		"sagemaker:DescribeTrialComponent",
	];
	/** IAM actions required for the DescribeUserProfile API call. */
	static readonly DescribeUserProfile: string[] = [
		"sagemaker:DescribeUserProfile",
	];
	/** IAM actions required for the DescribeWorkforce API call. */
	static readonly DescribeWorkforce: string[] = ["sagemaker:DescribeWorkforce"];
	/** IAM actions required for the DescribeWorkteam API call. */
	static readonly DescribeWorkteam: string[] = ["sagemaker:DescribeWorkteam"];
	/** IAM actions required for the DetachClusterNodeVolume API call. */
	static readonly DetachClusterNodeVolume: string[] = [
		"sagemaker:DetachClusterNodeVolume",
	];
	/** IAM actions required for the DisableSagemakerServicecatalogPortfolio API call. */
	static readonly DisableSagemakerServicecatalogPortfolio: string[] = [
		"sagemaker:DisableSagemakerServicecatalogPortfolio",
	];
	/** IAM actions required for the DisassociateTrialComponent API call. */
	static readonly DisassociateTrialComponent: string[] = [
		"sagemaker:DisassociateTrialComponent",
	];
	/** IAM actions required for the EnableSagemakerServicecatalogPortfolio API call. */
	static readonly EnableSagemakerServicecatalogPortfolio: string[] = [
		"sagemaker:EnableSagemakerServicecatalogPortfolio",
	];
	/** IAM actions required for the ExtendTrainingPlan API call. */
	static readonly ExtendTrainingPlan: string[] = [
		"sagemaker:ExtendTrainingPlan",
	];
	/** IAM actions required for the GetDeployments API call. */
	static readonly opGetDeployments: string[] = [];
	/** IAM actions required for the GetDeviceFleetReport API call. */
	static readonly opGetDeviceFleetReport: string[] = [];
	/** IAM actions required for the GetDeviceRegistration API call. */
	static readonly opGetDeviceRegistration: string[] = [];
	/** IAM actions required for the GetLineageGroupPolicy API call. */
	static readonly opGetLineageGroupPolicy: string[] = [
		"sagemaker:GetLineageGroupPolicy",
	];
	/** IAM actions required for the GetModelPackageGroupPolicy API call. */
	static readonly opGetModelPackageGroupPolicy: string[] = [
		"sagemaker:GetModelPackageGroupPolicy",
	];
	/** IAM actions required for the GetRecord API call. */
	static readonly opGetRecord: string[] = ["sagemaker:GetRecord"];
	/** IAM actions required for the GetSagemakerServicecatalogPortfolioStatus API call. */
	static readonly opGetSagemakerServicecatalogPortfolioStatus: string[] = [
		"sagemaker:GetSagemakerServicecatalogPortfolioStatus",
	];
	/** IAM actions required for the GetScalingConfigurationRecommendation API call. */
	static readonly opGetScalingConfigurationRecommendation: string[] = [
		"sagemaker:GetScalingConfigurationRecommendation",
	];
	/** IAM actions required for the GetSearchSuggestions API call. */
	static readonly opGetSearchSuggestions: string[] = [
		"sagemaker:GetSearchSuggestions",
	];
	/** IAM actions required for the ImportHubContent API call. */
	static readonly ImportHubContent: string[] = [
		"sagemaker:AddTags",
		"sagemaker:ImportHubContent",
		"iam:PassRole",
	];
	/** IAM actions required for the InvokeEndpoint API call. */
	static readonly InvokeEndpoint: string[] = ["sagemaker:InvokeEndpoint"];
	/** IAM actions required for the InvokeEndpointAsync API call. */
	static readonly InvokeEndpointAsync: string[] = [
		"sagemaker:InvokeEndpointAsync",
	];
	/** IAM actions required for the InvokeEndpointWithResponseStream API call. */
	static readonly InvokeEndpointWithResponseStream: string[] = [
		"sagemaker:CallWithBearerToken",
		"sagemaker:InvokeEndpoint",
	];
	/** IAM actions required for the ListAIBenchmarkJobs API call. */
	static readonly ListAIBenchmarkJobs: string[] = [
		"sagemaker:ListAIBenchmarkJobs",
	];
	/** IAM actions required for the ListAIRecommendationJobs API call. */
	static readonly ListAIRecommendationJobs: string[] = [
		"sagemaker:ListAIRecommendationJobs",
	];
	/** IAM actions required for the ListAIWorkloadConfigs API call. */
	static readonly ListAIWorkloadConfigs: string[] = [
		"sagemaker:ListAIWorkloadConfigs",
	];
	/** IAM actions required for the ListActions API call. */
	static readonly ListActions: string[] = ["sagemaker:ListActions"];
	/** IAM actions required for the ListAlgorithms API call. */
	static readonly ListAlgorithms: string[] = ["sagemaker:ListAlgorithms"];
	/** IAM actions required for the ListAliases API call. */
	static readonly ListAliases: string[] = ["sagemaker:ListAliases"];
	/** IAM actions required for the ListAppImageConfigs API call. */
	static readonly ListAppImageConfigs: string[] = [
		"sagemaker:ListAppImageConfigs",
	];
	/** IAM actions required for the ListApps API call. */
	static readonly ListApps: string[] = ["sagemaker:ListApps"];
	/** IAM actions required for the ListArtifacts API call. */
	static readonly ListArtifacts: string[] = ["sagemaker:ListArtifacts"];
	/** IAM actions required for the ListAssociations API call. */
	static readonly ListAssociations: string[] = ["sagemaker:ListAssociations"];
	/** IAM actions required for the ListAutoMLJobs API call. */
	static readonly ListAutoMLJobs: string[] = ["sagemaker:ListAutoMLJobs"];
	/** IAM actions required for the ListCandidatesForAutoMLJob API call. */
	static readonly ListCandidatesForAutoMLJob: string[] = [
		"sagemaker:ListCandidatesForAutoMLJob",
	];
	/** IAM actions required for the ListClusterEvents API call. */
	static readonly ListClusterEvents: string[] = ["sagemaker:ListClusterEvents"];
	/** IAM actions required for the ListClusterNodes API call. */
	static readonly ListClusterNodes: string[] = ["sagemaker:ListClusterNodes"];
	/** IAM actions required for the ListClusterSchedulerConfigs API call. */
	static readonly ListClusterSchedulerConfigs: string[] = [
		"sagemaker:ListClusterSchedulerConfigs",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly ListClusters: string[] = ["sagemaker:ListClusters"];
	/** IAM actions required for the ListCodeRepositories API call. */
	static readonly ListCodeRepositories: string[] = [
		"sagemaker:ListCodeRepositories",
	];
	/** IAM actions required for the ListCompilationJobs API call. */
	static readonly ListCompilationJobs: string[] = [
		"sagemaker:ListCompilationJobs",
	];
	/** IAM actions required for the ListComputeQuotas API call. */
	static readonly ListComputeQuotas: string[] = ["sagemaker:ListComputeQuotas"];
	/** IAM actions required for the ListContexts API call. */
	static readonly ListContexts: string[] = ["sagemaker:ListContexts"];
	/** IAM actions required for the ListDataQualityJobDefinitions API call. */
	static readonly ListDataQualityJobDefinitions: string[] = [
		"sagemaker:ListDataQualityJobDefinitions",
	];
	/** IAM actions required for the ListDeviceFleets API call. */
	static readonly ListDeviceFleets: string[] = [];
	/** IAM actions required for the ListDevices API call. */
	static readonly ListDevices: string[] = [];
	/** IAM actions required for the ListDomains API call. */
	static readonly ListDomains: string[] = ["sagemaker:ListDomains"];
	/** IAM actions required for the ListEdgeDeploymentPlans API call. */
	static readonly ListEdgeDeploymentPlans: string[] = [];
	/** IAM actions required for the ListEdgePackagingJobs API call. */
	static readonly ListEdgePackagingJobs: string[] = [];
	/** IAM actions required for the ListEndpointConfigs API call. */
	static readonly ListEndpointConfigs: string[] = [
		"sagemaker:ListEndpointConfigs",
	];
	/** IAM actions required for the ListEndpoints API call. */
	static readonly ListEndpoints: string[] = ["sagemaker:ListEndpoints"];
	/** IAM actions required for the ListExperiments API call. */
	static readonly ListExperiments: string[] = ["sagemaker:ListExperiments"];
	/** IAM actions required for the ListFeatureGroups API call. */
	static readonly ListFeatureGroups: string[] = ["sagemaker:ListFeatureGroups"];
	/** IAM actions required for the ListFlowDefinitions API call. */
	static readonly ListFlowDefinitions: string[] = [
		"sagemaker:ListFlowDefinitions",
	];
	/** IAM actions required for the ListHubContentVersions API call. */
	static readonly ListHubContentVersions: string[] = [
		"sagemaker:ListHubContentVersions",
	];
	/** IAM actions required for the ListHubContents API call. */
	static readonly ListHubContents: string[] = ["sagemaker:ListHubContents"];
	/** IAM actions required for the ListHubs API call. */
	static readonly ListHubs: string[] = ["sagemaker:ListHubs"];
	/** IAM actions required for the ListHumanLoops API call. */
	static readonly ListHumanLoops: string[] = ["sagemaker:ListHumanLoops"];
	/** IAM actions required for the ListHumanTaskUis API call. */
	static readonly ListHumanTaskUis: string[] = ["sagemaker:ListHumanTaskUis"];
	/** IAM actions required for the ListHyperParameterTuningJobs API call. */
	static readonly ListHyperParameterTuningJobs: string[] = [
		"sagemaker:ListHyperParameterTuningJobs",
	];
	/** IAM actions required for the ListImageVersions API call. */
	static readonly ListImageVersions: string[] = ["sagemaker:ListImageVersions"];
	/** IAM actions required for the ListImages API call. */
	static readonly ListImages: string[] = ["sagemaker:ListImages"];
	/** IAM actions required for the ListInferenceComponents API call. */
	static readonly ListInferenceComponents: string[] = [
		"sagemaker:ListInferenceComponents",
	];
	/** IAM actions required for the ListInferenceExperiments API call. */
	static readonly ListInferenceExperiments: string[] = [
		"sagemaker:ListInferenceExperiments",
	];
	/** IAM actions required for the ListInferenceRecommendationsJobSteps API call. */
	static readonly ListInferenceRecommendationsJobSteps: string[] = [
		"sagemaker:ListInferenceRecommendationsJobSteps",
	];
	/** IAM actions required for the ListInferenceRecommendationsJobs API call. */
	static readonly ListInferenceRecommendationsJobs: string[] = [
		"sagemaker:ListInferenceRecommendationsJobs",
	];
	/** IAM actions required for the ListJobSchemaVersions API call. */
	static readonly ListJobSchemaVersions: string[] = [
		"sagemaker:ListJobSchemaVersions",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["sagemaker:ListJobs"];
	/** IAM actions required for the ListLabelingJobs API call. */
	static readonly ListLabelingJobs: string[] = ["sagemaker:ListLabelingJobs"];
	/** IAM actions required for the ListLabelingJobsForWorkteam API call. */
	static readonly ListLabelingJobsForWorkteam: string[] = [
		"sagemaker:ListLabelingJobsForWorkteam",
	];
	/** IAM actions required for the ListLineageGroups API call. */
	static readonly ListLineageGroups: string[] = ["sagemaker:ListLineageGroups"];
	/** IAM actions required for the ListMlflowApps API call. */
	static readonly ListMlflowApps: string[] = ["sagemaker:ListMlflowApps"];
	/** IAM actions required for the ListMlflowTrackingServers API call. */
	static readonly ListMlflowTrackingServers: string[] = [
		"sagemaker:ListMlflowTrackingServers",
	];
	/** IAM actions required for the ListModelBiasJobDefinitions API call. */
	static readonly ListModelBiasJobDefinitions: string[] = [
		"sagemaker:ListModelBiasJobDefinitions",
	];
	/** IAM actions required for the ListModelCardExportJobs API call. */
	static readonly ListModelCardExportJobs: string[] = [
		"sagemaker:ListModelCardExportJobs",
	];
	/** IAM actions required for the ListModelCardVersions API call. */
	static readonly ListModelCardVersions: string[] = [
		"sagemaker:ListModelCardVersions",
	];
	/** IAM actions required for the ListModelCards API call. */
	static readonly ListModelCards: string[] = ["sagemaker:ListModelCards"];
	/** IAM actions required for the ListModelExplainabilityJobDefinitions API call. */
	static readonly ListModelExplainabilityJobDefinitions: string[] = [
		"sagemaker:ListModelExplainabilityJobDefinitions",
	];
	/** IAM actions required for the ListModelMetadata API call. */
	static readonly ListModelMetadata: string[] = ["sagemaker:ListModelMetadata"];
	/** IAM actions required for the ListModelPackageGroups API call. */
	static readonly ListModelPackageGroups: string[] = [
		"sagemaker:ListModelPackageGroups",
	];
	/** IAM actions required for the ListModelPackages API call. */
	static readonly ListModelPackages: string[] = ["sagemaker:ListModelPackages"];
	/** IAM actions required for the ListModelQualityJobDefinitions API call. */
	static readonly ListModelQualityJobDefinitions: string[] = [
		"sagemaker:ListModelQualityJobDefinitions",
	];
	/** IAM actions required for the ListModels API call. */
	static readonly ListModels: string[] = ["sagemaker:ListModels"];
	/** IAM actions required for the ListMonitoringAlertHistory API call. */
	static readonly ListMonitoringAlertHistory: string[] = [
		"sagemaker:ListMonitoringAlertHistory",
	];
	/** IAM actions required for the ListMonitoringAlerts API call. */
	static readonly ListMonitoringAlerts: string[] = [
		"sagemaker:ListMonitoringAlerts",
	];
	/** IAM actions required for the ListMonitoringExecutions API call. */
	static readonly ListMonitoringExecutions: string[] = [
		"sagemaker:ListMonitoringExecutions",
	];
	/** IAM actions required for the ListMonitoringSchedules API call. */
	static readonly ListMonitoringSchedules: string[] = [
		"sagemaker:ListMonitoringSchedules",
	];
	/** IAM actions required for the ListNotebookInstanceLifecycleConfigs API call. */
	static readonly ListNotebookInstanceLifecycleConfigs: string[] = [
		"sagemaker:ListNotebookInstanceLifecycleConfigs",
	];
	/** IAM actions required for the ListNotebookInstances API call. */
	static readonly ListNotebookInstances: string[] = [
		"sagemaker:ListNotebookInstances",
	];
	/** IAM actions required for the ListOptimizationJobs API call. */
	static readonly ListOptimizationJobs: string[] = [
		"sagemaker:ListOptimizationJobs",
	];
	/** IAM actions required for the ListPartnerApps API call. */
	static readonly ListPartnerApps: string[] = ["sagemaker:ListPartnerApps"];
	/** IAM actions required for the ListPipelineExecutionSteps API call. */
	static readonly ListPipelineExecutionSteps: string[] = [
		"sagemaker:ListPipelineExecutionSteps",
	];
	/** IAM actions required for the ListPipelineExecutions API call. */
	static readonly ListPipelineExecutions: string[] = [
		"sagemaker:ListPipelineExecutions",
	];
	/** IAM actions required for the ListPipelineParametersForExecution API call. */
	static readonly ListPipelineParametersForExecution: string[] = [
		"sagemaker:ListPipelineParametersForExecution",
	];
	/** IAM actions required for the ListPipelineVersions API call. */
	static readonly ListPipelineVersions: string[] = [
		"sagemaker:ListPipelineVersions",
	];
	/** IAM actions required for the ListPipelines API call. */
	static readonly ListPipelines: string[] = ["sagemaker:ListPipelines"];
	/** IAM actions required for the ListProcessingJobs API call. */
	static readonly ListProcessingJobs: string[] = [
		"sagemaker:ListProcessingJobs",
	];
	/** IAM actions required for the ListProjects API call. */
	static readonly ListProjects: string[] = ["sagemaker:ListProjects"];
	/** IAM actions required for the ListRecords API call. */
	static readonly ListRecords: string[] = ["sagemaker:ListRecords"];
	/** IAM actions required for the ListResourceCatalogs API call. */
	static readonly ListResourceCatalogs: string[] = [
		"sagemaker:ListResourceCatalogs",
	];
	/** IAM actions required for the ListSpaces API call. */
	static readonly ListSpaces: string[] = ["sagemaker:ListSpaces"];
	/** IAM actions required for the ListStageDevices API call. */
	static readonly ListStageDevices: string[] = [];
	/** IAM actions required for the ListStudioLifecycleConfigs API call. */
	static readonly ListStudioLifecycleConfigs: string[] = [
		"sagemaker:ListStudioLifecycleConfigs",
	];
	/** IAM actions required for the ListSubscribedWorkteams API call. */
	static readonly ListSubscribedWorkteams: string[] = [
		"sagemaker:ListSubscribedWorkteams",
	];
	/** IAM actions required for the ListTags API call. */
	static readonly ListTags: string[] = ["sagemaker:ListTags"];
	/** IAM actions required for the ListTrainingJobs API call. */
	static readonly ListTrainingJobs: string[] = ["sagemaker:ListTrainingJobs"];
	/** IAM actions required for the ListTrainingJobsForHyperParameterTuningJob API call. */
	static readonly ListTrainingJobsForHyperParameterTuningJob: string[] = [
		"sagemaker:ListTrainingJobsForHyperParameterTuningJob",
	];
	/** IAM actions required for the ListTrainingPlans API call. */
	static readonly ListTrainingPlans: string[] = ["sagemaker:ListTrainingPlans"];
	/** IAM actions required for the ListTransformJobs API call. */
	static readonly ListTransformJobs: string[] = ["sagemaker:ListTransformJobs"];
	/** IAM actions required for the ListTrialComponents API call. */
	static readonly ListTrialComponents: string[] = [
		"sagemaker:ListTrialComponents",
	];
	/** IAM actions required for the ListTrials API call. */
	static readonly ListTrials: string[] = ["sagemaker:ListTrials"];
	/** IAM actions required for the ListUltraServersByReservedCapacity API call. */
	static readonly ListUltraServersByReservedCapacity: string[] = [
		"sagemaker:ListUltraServersByReservedCapacity",
	];
	/** IAM actions required for the ListUserProfiles API call. */
	static readonly ListUserProfiles: string[] = ["sagemaker:ListUserProfiles"];
	/** IAM actions required for the ListWorkforces API call. */
	static readonly ListWorkforces: string[] = ["sagemaker:ListWorkforces"];
	/** IAM actions required for the ListWorkteams API call. */
	static readonly ListWorkteams: string[] = ["sagemaker:ListWorkteams"];
	/** IAM actions required for the PutModelPackageGroupPolicy API call. */
	static readonly PutModelPackageGroupPolicy: string[] = [
		"sagemaker:PutModelPackageGroupPolicy",
	];
	/** IAM actions required for the PutRecord API call. */
	static readonly PutRecord: string[] = ["sagemaker:PutRecord"];
	/** IAM actions required for the QueryLineage API call. */
	static readonly QueryLineage: string[] = ["sagemaker:QueryLineage"];
	/** IAM actions required for the RegisterDevices API call. */
	static readonly RegisterDevices: string[] = [];
	/** IAM actions required for the RenderUiTemplate API call. */
	static readonly RenderUiTemplate: string[] = [
		"iam:PassRole",
		"sagemaker:RenderUiTemplate",
	];
	/** IAM actions required for the RetryPipelineExecution API call. */
	static readonly RetryPipelineExecution: string[] = [
		"sagemaker:RetryPipelineExecution",
	];
	/** IAM actions required for the Sample API call. */
	static readonly Sample: string[] = [
		"sagemaker:CallWithBearerToken",
		"sagemaker:Sample",
	];
	/** IAM actions required for the SampleWithResponseStream API call. */
	static readonly SampleWithResponseStream: string[] = [
		"sagemaker:CallWithBearerToken",
		"sagemaker:SampleWithResponseStream",
	];
	/** IAM actions required for the Search API call. */
	static readonly Search: string[] = ["sagemaker:Search"];
	/** IAM actions required for the SearchTrainingPlanOfferings API call. */
	static readonly SearchTrainingPlanOfferings: string[] = [
		"sagemaker:SearchTrainingPlanOfferings",
	];
	/** IAM actions required for the SendHeartbeat API call. */
	static readonly SendHeartbeat: string[] = [];
	/** IAM actions required for the SendPipelineExecutionStepFailure API call. */
	static readonly SendPipelineExecutionStepFailure: string[] = [
		"sagemaker:SendPipelineExecutionStepFailure",
	];
	/** IAM actions required for the SendPipelineExecutionStepSuccess API call. */
	static readonly SendPipelineExecutionStepSuccess: string[] = [
		"sagemaker:SendPipelineExecutionStepSuccess",
	];
	/** IAM actions required for the StartClusterHealthCheck API call. */
	static readonly StartClusterHealthCheck: string[] = [
		"sagemaker:StartClusterHealthCheck",
	];
	/** IAM actions required for the StartEdgeDeploymentStage API call. */
	static readonly StartEdgeDeploymentStage: string[] = [];
	/** IAM actions required for the StartHumanLoop API call. */
	static readonly StartHumanLoop: string[] = ["sagemaker:StartHumanLoop"];
	/** IAM actions required for the StartInferenceExperiment API call. */
	static readonly StartInferenceExperiment: string[] = [
		"sagemaker:StartInferenceExperiment",
	];
	/** IAM actions required for the StartMlflowTrackingServer API call. */
	static readonly StartMlflowTrackingServer: string[] = [
		"sagemaker:StartMlflowTrackingServer",
	];
	/** IAM actions required for the StartMonitoringSchedule API call. */
	static readonly StartMonitoringSchedule: string[] = [
		"sagemaker:StartMonitoringSchedule",
	];
	/** IAM actions required for the StartNotebookInstance API call. */
	static readonly StartNotebookInstance: string[] = [
		"sagemaker:StartNotebookInstance",
	];
	/** IAM actions required for the StartPipelineExecution API call. */
	static readonly StartPipelineExecution: string[] = [
		"sagemaker:StartPipelineExecution",
	];
	/** IAM actions required for the StartSession API call. */
	static readonly StartSession: string[] = ["sagemaker:StartSession"];
	/** IAM actions required for the StopAIBenchmarkJob API call. */
	static readonly StopAIBenchmarkJob: string[] = [
		"sagemaker:StopAIBenchmarkJob",
	];
	/** IAM actions required for the StopAIRecommendationJob API call. */
	static readonly StopAIRecommendationJob: string[] = [
		"sagemaker:StopAIRecommendationJob",
	];
	/** IAM actions required for the StopAutoMLJob API call. */
	static readonly StopAutoMLJob: string[] = ["sagemaker:StopAutoMLJob"];
	/** IAM actions required for the StopCompilationJob API call. */
	static readonly StopCompilationJob: string[] = [
		"sagemaker:StopCompilationJob",
	];
	/** IAM actions required for the StopEdgeDeploymentStage API call. */
	static readonly StopEdgeDeploymentStage: string[] = [];
	/** IAM actions required for the StopEdgePackagingJob API call. */
	static readonly StopEdgePackagingJob: string[] = [];
	/** IAM actions required for the StopHumanLoop API call. */
	static readonly StopHumanLoop: string[] = ["sagemaker:StopHumanLoop"];
	/** IAM actions required for the StopHyperParameterTuningJob API call. */
	static readonly StopHyperParameterTuningJob: string[] = [
		"sagemaker:StopHyperParameterTuningJob",
	];
	/** IAM actions required for the StopInferenceExperiment API call. */
	static readonly StopInferenceExperiment: string[] = [
		"sagemaker:StopInferenceExperiment",
	];
	/** IAM actions required for the StopInferenceRecommendationsJob API call. */
	static readonly StopInferenceRecommendationsJob: string[] = [
		"sagemaker:StopInferenceRecommendationsJob",
	];
	/** IAM actions required for the StopJob API call. */
	static readonly StopJob: string[] = ["sagemaker:StopJob"];
	/** IAM actions required for the StopLabelingJob API call. */
	static readonly StopLabelingJob: string[] = ["sagemaker:StopLabelingJob"];
	/** IAM actions required for the StopMlflowTrackingServer API call. */
	static readonly StopMlflowTrackingServer: string[] = [
		"sagemaker:StopMlflowTrackingServer",
	];
	/** IAM actions required for the StopMonitoringSchedule API call. */
	static readonly StopMonitoringSchedule: string[] = [
		"sagemaker:StopMonitoringSchedule",
	];
	/** IAM actions required for the StopNotebookInstance API call. */
	static readonly StopNotebookInstance: string[] = [
		"sagemaker:StopNotebookInstance",
	];
	/** IAM actions required for the StopOptimizationJob API call. */
	static readonly StopOptimizationJob: string[] = [
		"sagemaker:StopOptimizationJob",
	];
	/** IAM actions required for the StopPipelineExecution API call. */
	static readonly StopPipelineExecution: string[] = [
		"sagemaker:StopPipelineExecution",
	];
	/** IAM actions required for the StopProcessingJob API call. */
	static readonly StopProcessingJob: string[] = ["sagemaker:StopProcessingJob"];
	/** IAM actions required for the StopTrainingJob API call. */
	static readonly StopTrainingJob: string[] = ["sagemaker:StopTrainingJob"];
	/** IAM actions required for the StopTransformJob API call. */
	static readonly StopTransformJob: string[] = ["sagemaker:StopTransformJob"];
	/** IAM actions required for the UpdateAction API call. */
	static readonly UpdateAction: string[] = ["sagemaker:UpdateAction"];
	/** IAM actions required for the UpdateAppImageConfig API call. */
	static readonly UpdateAppImageConfig: string[] = [
		"sagemaker:UpdateAppImageConfig",
	];
	/** IAM actions required for the UpdateArtifact API call. */
	static readonly UpdateArtifact: string[] = ["sagemaker:UpdateArtifact"];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UpdateCluster: string[] = [
		"sagemaker:BatchAddClusterNodes",
		"sagemaker:BatchDeleteClusterNodes",
		"iam:PassRole",
		"sagemaker:UpdateCluster",
		"sagemaker:UpdateClusterSoftware",
	];
	/** IAM actions required for the UpdateClusterSchedulerConfig API call. */
	static readonly UpdateClusterSchedulerConfig: string[] = [
		"sagemaker:UpdateClusterSchedulerConfig",
	];
	/** IAM actions required for the UpdateClusterSoftware API call. */
	static readonly UpdateClusterSoftware: string[] = [
		"sagemaker:UpdateClusterSoftware",
	];
	/** IAM actions required for the UpdateCodeRepository API call. */
	static readonly UpdateCodeRepository: string[] = [
		"sagemaker:UpdateCodeRepository",
	];
	/** IAM actions required for the UpdateComputeQuota API call. */
	static readonly UpdateComputeQuota: string[] = [
		"sagemaker:UpdateComputeQuota",
	];
	/** IAM actions required for the UpdateContext API call. */
	static readonly UpdateContext: string[] = ["sagemaker:UpdateContext"];
	/** IAM actions required for the UpdateDeviceFleet API call. */
	static readonly UpdateDeviceFleet: string[] = [];
	/** IAM actions required for the UpdateDevices API call. */
	static readonly UpdateDevices: string[] = [];
	/** IAM actions required for the UpdateDomain API call. */
	static readonly UpdateDomain: string[] = [
		"iam:PassRole",
		"sagemaker:UpdateDomain",
	];
	/** IAM actions required for the UpdateEndpoint API call. */
	static readonly UpdateEndpoint: string[] = ["sagemaker:UpdateEndpoint"];
	/** IAM actions required for the UpdateEndpointWeightsAndCapacities API call. */
	static readonly UpdateEndpointWeightsAndCapacities: string[] = [
		"sagemaker:UpdateEndpointWeightsAndCapacities",
	];
	/** IAM actions required for the UpdateExperiment API call. */
	static readonly UpdateExperiment: string[] = ["sagemaker:UpdateExperiment"];
	/** IAM actions required for the UpdateFeatureGroup API call. */
	static readonly UpdateFeatureGroup: string[] = [
		"sagemaker:UpdateFeatureGroup",
	];
	/** IAM actions required for the UpdateFeatureMetadata API call. */
	static readonly UpdateFeatureMetadata: string[] = [
		"sagemaker:UpdateFeatureMetadata",
	];
	/** IAM actions required for the UpdateHub API call. */
	static readonly UpdateHub: string[] = ["sagemaker:UpdateHub"];
	/** IAM actions required for the UpdateHubContent API call. */
	static readonly UpdateHubContent: string[] = ["sagemaker:UpdateHubContent"];
	/** IAM actions required for the UpdateHubContentReference API call. */
	static readonly UpdateHubContentReference: string[] = [
		"sagemaker:UpdateHubContentReference",
	];
	/** IAM actions required for the UpdateImage API call. */
	static readonly UpdateImage: string[] = [
		"iam:PassRole",
		"sagemaker:UpdateImage",
	];
	/** IAM actions required for the UpdateImageVersion API call. */
	static readonly UpdateImageVersion: string[] = [
		"sagemaker:UpdateImageVersion",
	];
	/** IAM actions required for the UpdateInferenceComponent API call. */
	static readonly UpdateInferenceComponent: string[] = [
		"sagemaker:UpdateInferenceComponent",
	];
	/** IAM actions required for the UpdateInferenceComponentRuntimeConfig API call. */
	static readonly UpdateInferenceComponentRuntimeConfig: string[] = [
		"sagemaker:UpdateInferenceComponentRuntimeConfig",
	];
	/** IAM actions required for the UpdateInferenceExperiment API call. */
	static readonly UpdateInferenceExperiment: string[] = [
		"sagemaker:UpdateInferenceExperiment",
	];
	/** IAM actions required for the UpdateMlflowApp API call. */
	static readonly UpdateMlflowApp: string[] = ["sagemaker:UpdateMlflowApp"];
	/** IAM actions required for the UpdateMlflowTrackingServer API call. */
	static readonly UpdateMlflowTrackingServer: string[] = [
		"sagemaker:UpdateMlflowTrackingServer",
	];
	/** IAM actions required for the UpdateModelCard API call. */
	static readonly UpdateModelCard: string[] = ["sagemaker:UpdateModelCard"];
	/** IAM actions required for the UpdateModelPackage API call. */
	static readonly UpdateModelPackage: string[] = [
		"sagemaker:UpdateModelPackage",
	];
	/** IAM actions required for the UpdateMonitoringAlert API call. */
	static readonly UpdateMonitoringAlert: string[] = [
		"sagemaker:UpdateMonitoringAlert",
	];
	/** IAM actions required for the UpdateMonitoringSchedule API call. */
	static readonly UpdateMonitoringSchedule: string[] = [
		"iam:PassRole",
		"sagemaker:UpdateMonitoringSchedule",
	];
	/** IAM actions required for the UpdateNotebookInstance API call. */
	static readonly UpdateNotebookInstance: string[] = [
		"iam:PassRole",
		"sagemaker:UpdateNotebookInstance",
	];
	/** IAM actions required for the UpdateNotebookInstanceLifecycleConfig API call. */
	static readonly UpdateNotebookInstanceLifecycleConfig: string[] = [
		"sagemaker:UpdateNotebookInstanceLifecycleConfig",
	];
	/** IAM actions required for the UpdatePartnerApp API call. */
	static readonly UpdatePartnerApp: string[] = [
		"sagemaker:AddTags",
		"sagemaker:UpdatePartnerApp",
	];
	/** IAM actions required for the UpdatePipeline API call. */
	static readonly UpdatePipeline: string[] = [
		"iam:PassRole",
		"sagemaker:UpdatePipeline",
	];
	/** IAM actions required for the UpdatePipelineExecution API call. */
	static readonly UpdatePipelineExecution: string[] = [
		"sagemaker:UpdatePipelineExecution",
	];
	/** IAM actions required for the UpdatePipelineVersion API call. */
	static readonly UpdatePipelineVersion: string[] = [
		"sagemaker:UpdatePipelineVersion",
	];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UpdateProject: string[] = [
		"sagemaker:AddTags",
		"sagemaker:UpdateProject",
	];
	/** IAM actions required for the UpdateRecord API call. */
	static readonly UpdateRecord: string[] = [];
	/** IAM actions required for the UpdateReward API call. */
	static readonly UpdateReward: string[] = [
		"sagemaker:CallWithBearerToken",
		"sagemaker:UpdateReward",
	];
	/** IAM actions required for the UpdateSpace API call. */
	static readonly UpdateSpace: string[] = ["sagemaker:UpdateSpace"];
	/** IAM actions required for the UpdateTrainingJob API call. */
	static readonly UpdateTrainingJob: string[] = ["sagemaker:UpdateTrainingJob"];
	/** IAM actions required for the UpdateTrial API call. */
	static readonly UpdateTrial: string[] = ["sagemaker:UpdateTrial"];
	/** IAM actions required for the UpdateTrialComponent API call. */
	static readonly UpdateTrialComponent: string[] = [
		"sagemaker:UpdateTrialComponent",
	];
	/** IAM actions required for the UpdateUserProfile API call. */
	static readonly UpdateUserProfile: string[] = [
		"iam:PassRole",
		"sagemaker:UpdateUserProfile",
	];
	/** IAM actions required for the UpdateWorkforce API call. */
	static readonly UpdateWorkforce: string[] = ["sagemaker:UpdateWorkforce"];
	/** IAM actions required for the UpdateWorkteam API call. */
	static readonly UpdateWorkteam: string[] = ["sagemaker:UpdateWorkteam"];
}

/**
 * Condition key constants and builders for sagemaker.
 */
export class SageMakerConditions {
	/** Condition keys applicable to the AddTags action. */
	static readonly AddTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:TaggingAction",
	];
	/** Condition keys applicable to the CallWithBearerToken action. */
	static readonly CallWithBearerTokenConditionKeys: string[] = [
		"sagemaker:BearerTokenType",
	];
	/** Condition keys applicable to the CreateAIBenchmarkJob action. */
	static readonly CreateAIBenchmarkJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAIRecommendationJob action. */
	static readonly CreateAIRecommendationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAIWorkloadConfig action. */
	static readonly CreateAIWorkloadConfigConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAction action. */
	static readonly CreateActionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAlgorithm action. */
	static readonly CreateAlgorithmConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApp action. */
	static readonly CreateAppConditionKeys: string[] = [
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
	static readonly CreateAppImageConfigConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateArtifact action. */
	static readonly CreateArtifactConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAutoMLJob action. */
	static readonly CreateAutoMLJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:InterContainerTrafficEncryption",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateAutoMLJobV2 action. */
	static readonly CreateAutoMLJobV2ConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:InterContainerTrafficEncryption",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CreateClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:InstanceTypes",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateClusterSchedulerConfig action. */
	static readonly CreateClusterSchedulerConfigConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCodeRepository action. */
	static readonly CreateCodeRepositoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCompilationJob action. */
	static readonly CreateCompilationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateComputeQuota action. */
	static readonly CreateComputeQuotaConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContext action. */
	static readonly CreateContextConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataQualityJobDefinition action. */
	static readonly CreateDataQualityJobDefinitionConditionKeys: string[] = [
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
	static readonly CreateDeviceFleetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CreateDomainConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:AppNetworkAccessType",
		"sagemaker:AuthMode",
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
	static readonly CreateEdgeDeploymentPlanConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEdgeDeploymentStage action. */
	static readonly CreateEdgeDeploymentStageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEdgePackagingJob action. */
	static readonly CreateEdgePackagingJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEndpoint action. */
	static readonly CreateEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEndpointConfig action. */
	static readonly CreateEndpointConfigConditionKeys: string[] = [
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
	static readonly CreateExperimentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFeatureGroup action. */
	static readonly CreateFeatureGroupConditionKeys: string[] = [
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
	static readonly CreateFlowDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:WorkteamArn",
		"sagemaker:WorkteamType",
	];
	/** Condition keys applicable to the CreateHub action. */
	static readonly CreateHubConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHubContentReference action. */
	static readonly CreateHubContentReferenceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHumanTaskUi action. */
	static readonly CreateHumanTaskUiConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHyperParameterTuningJob action. */
	static readonly CreateHyperParameterTuningJobConditionKeys: string[] = [
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
	static readonly CreateImageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInferenceComponent action. */
	static readonly CreateInferenceComponentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:ModelArn",
	];
	/** Condition keys applicable to the CreateInferenceExperiment action. */
	static readonly CreateInferenceExperimentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInferenceRecommendationsJob action. */
	static readonly CreateInferenceRecommendationsJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJob action. */
	static readonly CreateJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateLabelingJob action. */
	static readonly CreateLabelingJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
		"sagemaker:WorkteamArn",
		"sagemaker:WorkteamType",
	];
	/** Condition keys applicable to the CreateMlflowApp action. */
	static readonly CreateMlflowAppConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMlflowTrackingServer action. */
	static readonly CreateMlflowTrackingServerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModel action. */
	static readonly CreateModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:DirectGatedModelAccess",
		"sagemaker:NetworkIsolation",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the CreateModelBiasJobDefinition action. */
	static readonly CreateModelBiasJobDefinitionConditionKeys: string[] = [
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
	static readonly CreateModelCardConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelExplainabilityJobDefinition action. */
	static readonly CreateModelExplainabilityJobDefinitionConditionKeys: string[] =
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
	static readonly CreateModelPackageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:CustomerMetadataProperties/${MetadataKey}",
		"sagemaker:ModelApprovalStatus",
		"sagemaker:ModelLifeCycle:Stage",
		"sagemaker:ModelLifeCycle:StageStatus",
	];
	/** Condition keys applicable to the CreateModelPackageGroup action. */
	static readonly CreateModelPackageGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelQualityJobDefinition action. */
	static readonly CreateModelQualityJobDefinitionConditionKeys: string[] = [
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
	static readonly CreateMonitoringScheduleConditionKeys: string[] = [
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
	static readonly CreateNotebookInstanceConditionKeys: string[] = [
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
	static readonly CreateNotebookInstanceLifecycleConfigConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateOptimizationJob action. */
	static readonly CreateOptimizationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePartnerApp action. */
	static readonly CreatePartnerAppConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePipeline action. */
	static readonly CreatePipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProcessingJob action. */
	static readonly CreateProcessingJobConditionKeys: string[] = [
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
	static readonly CreateProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateReservedCapacity action. */
	static readonly CreateReservedCapacityConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSpace action. */
	static readonly CreateSpaceConditionKeys: string[] = [
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
	static readonly CreateStudioLifecycleConfigConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTrainingJob action. */
	static readonly CreateTrainingJobConditionKeys: string[] = [
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
	static readonly CreateTrainingPlanConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTransformJob action. */
	static readonly CreateTransformJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sagemaker:InstanceTypes",
		"sagemaker:ModelArn",
		"sagemaker:OutputKmsKeyArn",
		"sagemaker:VolumeKmsKeyArn",
	];
	/** Condition keys applicable to the CreateTrial action. */
	static readonly CreateTrialConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTrialComponent action. */
	static readonly CreateTrialComponentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUserProfile action. */
	static readonly CreateUserProfileConditionKeys: string[] = [
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
	static readonly CreateWorkforceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkteam action. */
	static readonly CreateWorkteamConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteApp action. */
	static readonly DeleteAppConditionKeys: string[] = [
		"sagemaker:OwnerUserProfileArn",
		"sagemaker:SpaceSharingType",
	];
	/** Condition keys applicable to the DeleteFeatureGroup action. */
	static readonly DeleteFeatureGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSpace action. */
	static readonly DeleteSpaceConditionKeys: string[] = [
		"sagemaker:OwnerUserProfileArn",
		"sagemaker:SpaceSharingType",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DeleteTagsConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the DescribePipeline action. */
	static readonly DescribePipelineConditionKeys: string[] = [
		"sagemaker:PipelineVersionId",
	];
	/** Condition keys applicable to the ImportHubContent action. */
	static readonly ImportHubContentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the InvokeEndpoint action. */
	static readonly InvokeEndpointConditionKeys: string[] = [
		"sagemaker:TargetModel",
	];
	/** Condition keys applicable to the PutRecord action. */
	static readonly PutRecordConditionKeys: string[] = [
		"sagemaker:IsUpdateRecord",
		"sagemaker:UpdatableFeatures",
	];
	/** Condition keys applicable to the RegisterDevices action. */
	static readonly RegisterDevicesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Search action. */
	static readonly SearchConditionKeys: string[] = [
		"sagemaker:SearchVisibilityCondition/${FilterKey}",
	];
	/** Condition keys applicable to the StartPipelineExecution action. */
	static readonly StartPipelineExecutionConditionKeys: string[] = [
		"sagemaker:PipelineVersionId",
	];
	/** Condition keys applicable to the UpdateCluster action. */
	static readonly UpdateClusterConditionKeys: string[] = [
		"sagemaker:InstanceTypes",
		"sagemaker:VpcSecurityGroupIds",
		"sagemaker:VpcSubnets",
	];
	/** Condition keys applicable to the UpdateDomain action. */
	static readonly UpdateDomainConditionKeys: string[] = [
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
	static readonly UpdateModelPackageConditionKeys: string[] = [
		"sagemaker:CustomerMetadataProperties/${MetadataKey}",
		"sagemaker:CustomerMetadataPropertiesToRemove",
		"sagemaker:ModelApprovalStatus",
		"sagemaker:ModelLifeCycle:Stage",
		"sagemaker:ModelLifeCycle:StageStatus",
	];
	/** Condition keys applicable to the UpdateMonitoringSchedule action. */
	static readonly UpdateMonitoringScheduleConditionKeys: string[] = [
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
	static readonly UpdateNotebookInstanceConditionKeys: string[] = [
		"sagemaker:AcceleratorTypes",
		"sagemaker:InstanceTypes",
		"sagemaker:MinimumInstanceMetadataServiceVersion",
		"sagemaker:NotebookInstanceLifecycleConfigArns",
		"sagemaker:RootAccess",
	];
	/** Condition keys applicable to the UpdatePipelineVersion action. */
	static readonly UpdatePipelineVersionConditionKeys: string[] = [
		"sagemaker:PipelineVersionId",
	];
	/** Condition keys applicable to the UpdateProject action. */
	static readonly UpdateProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateSpace action. */
	static readonly UpdateSpaceConditionKeys: string[] = [
		"sagemaker:ImageArns",
		"sagemaker:ImageVersionArns",
		"sagemaker:InstanceTypes",
		"sagemaker:OwnerUserProfileArn",
		"sagemaker:RemoteAccess",
		"sagemaker:SpaceSharingType",
		"sagemaker:StudioLifecycleConfigArns",
	];
	/** Condition keys applicable to the UpdateTrainingJob action. */
	static readonly UpdateTrainingJobConditionKeys: string[] = [
		"sagemaker:EnableRemoteDebug",
		"sagemaker:InstanceTypes",
		"sagemaker:KeepAlivePeriod",
	];
	/** Condition keys applicable to the UpdateUserProfile action. */
	static readonly UpdateUserProfileConditionKeys: string[] = [
		"sagemaker:DomainSharingOutputKmsKeyArn",
		"sagemaker:ImageArns",
		"sagemaker:ImageVersionArns",
		"sagemaker:InstanceTypes",
		"sagemaker:InstanceTypes",
		"sagemaker:StudioLifecycleConfigArns",
		"sagemaker:VpcSecurityGroupIds",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: sagemaker:AcceleratorTypes (ArrayOfString) */
	static readonly ACCELERATOR_TYPES = "sagemaker:AcceleratorTypes";
	/** Condition key: sagemaker:AppNetworkAccessType (String) */
	static readonly APP_NETWORK_ACCESS_TYPE = "sagemaker:AppNetworkAccessType";
	/** Condition key: sagemaker:AuthMode (String) */
	static readonly AUTH_MODE = "sagemaker:AuthMode";
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
	/** Condition key: sagemaker:IsUpdateRecord (Bool) */
	static readonly IS_UPDATE_RECORD = "sagemaker:IsUpdateRecord";
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
	/** Condition key: sagemaker:UpdatableFeatures (ArrayOfString) */
	static readonly UPDATABLE_FEATURES = "sagemaker:UpdatableFeatures";
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
	 * Generates a condition block for `sagemaker:AuthMode`.
	 */
	static authMode(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sagemaker:AuthMode": value } };
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
	 * Generates a condition block for `sagemaker:IsUpdateRecord`.
	 */
	static isUpdateRecord(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "sagemaker:IsUpdateRecord": value } };
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
	 * Generates a condition block for `sagemaker:UpdatableFeatures`.
	 */
	static updatableFeatures(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "sagemaker:UpdatableFeatures": values },
		};
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
