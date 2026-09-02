// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/imagebuilder.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the imagebuilder service.
 */
export class ImageBuilderActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "imagebuilder";

	/** [Write] imagebuilder:CancelImageCreation */
	static readonly CancelImageCreation = "imagebuilder:CancelImageCreation";
	/** [Write] imagebuilder:CancelLifecycleExecution */
	static readonly CancelLifecycleExecution =
		"imagebuilder:CancelLifecycleExecution";
	/** [Write] imagebuilder:CreateComponent */
	static readonly CreateComponent = "imagebuilder:CreateComponent";
	/** [Write] imagebuilder:CreateContainerRecipe */
	static readonly CreateContainerRecipe = "imagebuilder:CreateContainerRecipe";
	/** [Write] imagebuilder:CreateDistributionConfiguration */
	static readonly CreateDistributionConfiguration =
		"imagebuilder:CreateDistributionConfiguration";
	/** [Write] imagebuilder:CreateImage */
	static readonly CreateImage = "imagebuilder:CreateImage";
	/** [Write] imagebuilder:CreateImagePipeline */
	static readonly CreateImagePipeline = "imagebuilder:CreateImagePipeline";
	/** [Write] imagebuilder:CreateImageRecipe */
	static readonly CreateImageRecipe = "imagebuilder:CreateImageRecipe";
	/** [Write] imagebuilder:CreateInfrastructureConfiguration */
	static readonly CreateInfrastructureConfiguration =
		"imagebuilder:CreateInfrastructureConfiguration";
	/** [Write] imagebuilder:CreateLifecyclePolicy */
	static readonly CreateLifecyclePolicy = "imagebuilder:CreateLifecyclePolicy";
	/** [Write] imagebuilder:CreateWorkflow */
	static readonly CreateWorkflow = "imagebuilder:CreateWorkflow";
	/** [Write] imagebuilder:DeleteComponent */
	static readonly DeleteComponent = "imagebuilder:DeleteComponent";
	/** [Write] imagebuilder:DeleteContainerRecipe */
	static readonly DeleteContainerRecipe = "imagebuilder:DeleteContainerRecipe";
	/** [Write] imagebuilder:DeleteDistributionConfiguration */
	static readonly DeleteDistributionConfiguration =
		"imagebuilder:DeleteDistributionConfiguration";
	/** [Write] imagebuilder:DeleteImage */
	static readonly DeleteImage = "imagebuilder:DeleteImage";
	/** [Write] imagebuilder:DeleteImagePipeline */
	static readonly DeleteImagePipeline = "imagebuilder:DeleteImagePipeline";
	/** [Write] imagebuilder:DeleteImageRecipe */
	static readonly DeleteImageRecipe = "imagebuilder:DeleteImageRecipe";
	/** [Write] imagebuilder:DeleteInfrastructureConfiguration */
	static readonly DeleteInfrastructureConfiguration =
		"imagebuilder:DeleteInfrastructureConfiguration";
	/** [Write] imagebuilder:DeleteLifecyclePolicy */
	static readonly DeleteLifecyclePolicy = "imagebuilder:DeleteLifecyclePolicy";
	/** [Write] imagebuilder:DeleteWorkflow */
	static readonly DeleteWorkflow = "imagebuilder:DeleteWorkflow";
	/** [Write] imagebuilder:DistributeImage */
	static readonly DistributeImage = "imagebuilder:DistributeImage";
	/** [Read] imagebuilder:GetComponent */
	static readonly actionGetComponent = "imagebuilder:GetComponent";
	/** [Read] imagebuilder:GetComponentPolicy */
	static readonly actionGetComponentPolicy = "imagebuilder:GetComponentPolicy";
	/** [Read] imagebuilder:GetContainerRecipe */
	static readonly actionGetContainerRecipe = "imagebuilder:GetContainerRecipe";
	/** [Read] imagebuilder:GetContainerRecipePolicy */
	static readonly actionGetContainerRecipePolicy =
		"imagebuilder:GetContainerRecipePolicy";
	/** [Read] imagebuilder:GetDistributionConfiguration */
	static readonly actionGetDistributionConfiguration =
		"imagebuilder:GetDistributionConfiguration";
	/** [Read] imagebuilder:GetImage */
	static readonly actionGetImage = "imagebuilder:GetImage";
	/** [Read] imagebuilder:GetImagePipeline */
	static readonly actionGetImagePipeline = "imagebuilder:GetImagePipeline";
	/** [Read] imagebuilder:GetImagePolicy */
	static readonly actionGetImagePolicy = "imagebuilder:GetImagePolicy";
	/** [Read] imagebuilder:GetImageRecipe */
	static readonly actionGetImageRecipe = "imagebuilder:GetImageRecipe";
	/** [Read] imagebuilder:GetImageRecipePolicy */
	static readonly actionGetImageRecipePolicy =
		"imagebuilder:GetImageRecipePolicy";
	/** [Read] imagebuilder:GetInfrastructureConfiguration */
	static readonly actionGetInfrastructureConfiguration =
		"imagebuilder:GetInfrastructureConfiguration";
	/** [Read] imagebuilder:GetLifecycleExecution */
	static readonly actionGetLifecycleExecution =
		"imagebuilder:GetLifecycleExecution";
	/** [Read] imagebuilder:GetLifecyclePolicy */
	static readonly actionGetLifecyclePolicy = "imagebuilder:GetLifecyclePolicy";
	/** [Read] imagebuilder:GetMarketplaceResource */
	static readonly actionGetMarketplaceResource =
		"imagebuilder:GetMarketplaceResource";
	/** [Read] imagebuilder:GetWorkflow */
	static readonly actionGetWorkflow = "imagebuilder:GetWorkflow";
	/** [Read] imagebuilder:GetWorkflowExecution */
	static readonly actionGetWorkflowExecution =
		"imagebuilder:GetWorkflowExecution";
	/** [Read] imagebuilder:GetWorkflowStepExecution */
	static readonly actionGetWorkflowStepExecution =
		"imagebuilder:GetWorkflowStepExecution";
	/** [Write] imagebuilder:ImportComponent */
	static readonly ImportComponent = "imagebuilder:ImportComponent";
	/** [Write] imagebuilder:ImportDiskImage */
	static readonly ImportDiskImage = "imagebuilder:ImportDiskImage";
	/** [Write] imagebuilder:ImportVmImage */
	static readonly ImportVmImage = "imagebuilder:ImportVmImage";
	/** [List] imagebuilder:ListComponentBuildVersions */
	static readonly ListComponentBuildVersions =
		"imagebuilder:ListComponentBuildVersions";
	/** [List] imagebuilder:ListComponents */
	static readonly ListComponents = "imagebuilder:ListComponents";
	/** [List] imagebuilder:ListContainerRecipes */
	static readonly ListContainerRecipes = "imagebuilder:ListContainerRecipes";
	/** [List] imagebuilder:ListDistributionConfigurations */
	static readonly ListDistributionConfigurations =
		"imagebuilder:ListDistributionConfigurations";
	/** [List] imagebuilder:ListImageBuildVersions */
	static readonly ListImageBuildVersions =
		"imagebuilder:ListImageBuildVersions";
	/** [List] imagebuilder:ListImagePackages */
	static readonly ListImagePackages = "imagebuilder:ListImagePackages";
	/** [List] imagebuilder:ListImagePipelineImages */
	static readonly ListImagePipelineImages =
		"imagebuilder:ListImagePipelineImages";
	/** [List] imagebuilder:ListImagePipelines */
	static readonly ListImagePipelines = "imagebuilder:ListImagePipelines";
	/** [List] imagebuilder:ListImageRecipes */
	static readonly ListImageRecipes = "imagebuilder:ListImageRecipes";
	/** [List] imagebuilder:ListImageScanFindingAggregations */
	static readonly ListImageScanFindingAggregations =
		"imagebuilder:ListImageScanFindingAggregations";
	/** [List] imagebuilder:ListImageScanFindings */
	static readonly ListImageScanFindings = "imagebuilder:ListImageScanFindings";
	/** [List] imagebuilder:ListImages */
	static readonly ListImages = "imagebuilder:ListImages";
	/** [List] imagebuilder:ListInfrastructureConfigurations */
	static readonly ListInfrastructureConfigurations =
		"imagebuilder:ListInfrastructureConfigurations";
	/** [List] imagebuilder:ListLifecycleExecutionResources */
	static readonly ListLifecycleExecutionResources =
		"imagebuilder:ListLifecycleExecutionResources";
	/** [List] imagebuilder:ListLifecycleExecutions */
	static readonly ListLifecycleExecutions =
		"imagebuilder:ListLifecycleExecutions";
	/** [List] imagebuilder:ListLifecyclePolicies */
	static readonly ListLifecyclePolicies = "imagebuilder:ListLifecyclePolicies";
	/** [Read] imagebuilder:ListTagsForResource */
	static readonly ListTagsForResource = "imagebuilder:ListTagsForResource";
	/** [List] imagebuilder:ListWaitingWorkflowSteps */
	static readonly ListWaitingWorkflowSteps =
		"imagebuilder:ListWaitingWorkflowSteps";
	/** [List] imagebuilder:ListWorkflowBuildVersions */
	static readonly ListWorkflowBuildVersions =
		"imagebuilder:ListWorkflowBuildVersions";
	/** [List] imagebuilder:ListWorkflowExecutions */
	static readonly ListWorkflowExecutions =
		"imagebuilder:ListWorkflowExecutions";
	/** [List] imagebuilder:ListWorkflowStepExecutions */
	static readonly ListWorkflowStepExecutions =
		"imagebuilder:ListWorkflowStepExecutions";
	/** [List] imagebuilder:ListWorkflows */
	static readonly ListWorkflows = "imagebuilder:ListWorkflows";
	/** [PermissionManagement] imagebuilder:PutComponentPolicy */
	static readonly PutComponentPolicy = "imagebuilder:PutComponentPolicy";
	/** [PermissionManagement] imagebuilder:PutContainerRecipePolicy */
	static readonly PutContainerRecipePolicy =
		"imagebuilder:PutContainerRecipePolicy";
	/** [PermissionManagement] imagebuilder:PutImagePolicy */
	static readonly PutImagePolicy = "imagebuilder:PutImagePolicy";
	/** [PermissionManagement] imagebuilder:PutImageRecipePolicy */
	static readonly PutImageRecipePolicy = "imagebuilder:PutImageRecipePolicy";
	/** [Write] imagebuilder:RetryImage */
	static readonly RetryImage = "imagebuilder:RetryImage";
	/** [Write] imagebuilder:SendWorkflowStepAction */
	static readonly SendWorkflowStepAction =
		"imagebuilder:SendWorkflowStepAction";
	/** [Write] imagebuilder:StartImagePipelineExecution */
	static readonly StartImagePipelineExecution =
		"imagebuilder:StartImagePipelineExecution";
	/** [Write] imagebuilder:StartResourceStateUpdate */
	static readonly StartResourceStateUpdate =
		"imagebuilder:StartResourceStateUpdate";
	/** [Tagging] imagebuilder:TagResource */
	static readonly TagResource = "imagebuilder:TagResource";
	/** [Tagging] imagebuilder:UntagResource */
	static readonly UntagResource = "imagebuilder:UntagResource";
	/** [Write] imagebuilder:UpdateDistributionConfiguration */
	static readonly UpdateDistributionConfiguration =
		"imagebuilder:UpdateDistributionConfiguration";
	/** [Write] imagebuilder:UpdateImagePipeline */
	static readonly UpdateImagePipeline = "imagebuilder:UpdateImagePipeline";
	/** [Write] imagebuilder:UpdateInfrastructureConfiguration */
	static readonly UpdateInfrastructureConfiguration =
		"imagebuilder:UpdateInfrastructureConfiguration";
	/** [Write] imagebuilder:UpdateLifecyclePolicy */
	static readonly UpdateLifecyclePolicy = "imagebuilder:UpdateLifecyclePolicy";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ImageBuilderActions.actionGetComponent,
		ImageBuilderActions.actionGetComponentPolicy,
		ImageBuilderActions.actionGetContainerRecipe,
		ImageBuilderActions.actionGetContainerRecipePolicy,
		ImageBuilderActions.actionGetDistributionConfiguration,
		ImageBuilderActions.actionGetImage,
		ImageBuilderActions.actionGetImagePipeline,
		ImageBuilderActions.actionGetImagePolicy,
		ImageBuilderActions.actionGetImageRecipe,
		ImageBuilderActions.actionGetImageRecipePolicy,
		ImageBuilderActions.actionGetInfrastructureConfiguration,
		ImageBuilderActions.actionGetLifecycleExecution,
		ImageBuilderActions.actionGetLifecyclePolicy,
		ImageBuilderActions.actionGetMarketplaceResource,
		ImageBuilderActions.actionGetWorkflow,
		ImageBuilderActions.actionGetWorkflowExecution,
		ImageBuilderActions.actionGetWorkflowStepExecution,
		ImageBuilderActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ImageBuilderActions.CancelImageCreation,
		ImageBuilderActions.CancelLifecycleExecution,
		ImageBuilderActions.CreateComponent,
		ImageBuilderActions.CreateContainerRecipe,
		ImageBuilderActions.CreateDistributionConfiguration,
		ImageBuilderActions.CreateImage,
		ImageBuilderActions.CreateImagePipeline,
		ImageBuilderActions.CreateImageRecipe,
		ImageBuilderActions.CreateInfrastructureConfiguration,
		ImageBuilderActions.CreateLifecyclePolicy,
		ImageBuilderActions.CreateWorkflow,
		ImageBuilderActions.DeleteComponent,
		ImageBuilderActions.DeleteContainerRecipe,
		ImageBuilderActions.DeleteDistributionConfiguration,
		ImageBuilderActions.DeleteImage,
		ImageBuilderActions.DeleteImagePipeline,
		ImageBuilderActions.DeleteImageRecipe,
		ImageBuilderActions.DeleteInfrastructureConfiguration,
		ImageBuilderActions.DeleteLifecyclePolicy,
		ImageBuilderActions.DeleteWorkflow,
		ImageBuilderActions.DistributeImage,
		ImageBuilderActions.ImportComponent,
		ImageBuilderActions.ImportDiskImage,
		ImageBuilderActions.ImportVmImage,
		ImageBuilderActions.RetryImage,
		ImageBuilderActions.SendWorkflowStepAction,
		ImageBuilderActions.StartImagePipelineExecution,
		ImageBuilderActions.StartResourceStateUpdate,
		ImageBuilderActions.UpdateDistributionConfiguration,
		ImageBuilderActions.UpdateImagePipeline,
		ImageBuilderActions.UpdateInfrastructureConfiguration,
		ImageBuilderActions.UpdateLifecyclePolicy,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ImageBuilderActions.ListComponentBuildVersions,
		ImageBuilderActions.ListComponents,
		ImageBuilderActions.ListContainerRecipes,
		ImageBuilderActions.ListDistributionConfigurations,
		ImageBuilderActions.ListImageBuildVersions,
		ImageBuilderActions.ListImagePackages,
		ImageBuilderActions.ListImagePipelineImages,
		ImageBuilderActions.ListImagePipelines,
		ImageBuilderActions.ListImageRecipes,
		ImageBuilderActions.ListImageScanFindingAggregations,
		ImageBuilderActions.ListImageScanFindings,
		ImageBuilderActions.ListImages,
		ImageBuilderActions.ListInfrastructureConfigurations,
		ImageBuilderActions.ListLifecycleExecutionResources,
		ImageBuilderActions.ListLifecycleExecutions,
		ImageBuilderActions.ListLifecyclePolicies,
		ImageBuilderActions.ListWaitingWorkflowSteps,
		ImageBuilderActions.ListWorkflowBuildVersions,
		ImageBuilderActions.ListWorkflowExecutions,
		ImageBuilderActions.ListWorkflowStepExecutions,
		ImageBuilderActions.ListWorkflows,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ImageBuilderActions.PutComponentPolicy,
		ImageBuilderActions.PutContainerRecipePolicy,
		ImageBuilderActions.PutImagePolicy,
		ImageBuilderActions.PutImageRecipePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ImageBuilderActions.TagResource,
		ImageBuilderActions.UntagResource,
	];
}

/**
 * Properties for building a allComponentBuildVersions ARN.
 */
export interface ImageBuilderAllComponentBuildVersionsArnProps {
	/** The ComponentName component of the ARN. */
	readonly componentName: string;
	/** The ComponentVersion component of the ARN. */
	readonly componentVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a allComponentBuildVersions ARN.
 */
export interface ImageBuilderAllComponentBuildVersionsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ComponentName component. */
	readonly componentName: string;
	/** The ComponentVersion component. */
	readonly componentVersion: string;
}

/**
 * Properties for building a allImageBuildVersions ARN.
 */
export interface ImageBuilderAllImageBuildVersionsArnProps {
	/** The ImageName component of the ARN. */
	readonly imageName: string;
	/** The ImageVersion component of the ARN. */
	readonly imageVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a allImageBuildVersions ARN.
 */
export interface ImageBuilderAllImageBuildVersionsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ImageName component. */
	readonly imageName: string;
	/** The ImageVersion component. */
	readonly imageVersion: string;
}

/**
 * Properties for building a allWorkflowBuildVersions ARN.
 */
export interface ImageBuilderAllWorkflowBuildVersionsArnProps {
	/** The WorkflowType component of the ARN. */
	readonly workflowType: string;
	/** The WorkflowName component of the ARN. */
	readonly workflowName: string;
	/** The WorkflowVersion component of the ARN. */
	readonly workflowVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a allWorkflowBuildVersions ARN.
 */
export interface ImageBuilderAllWorkflowBuildVersionsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkflowType component. */
	readonly workflowType: string;
	/** The WorkflowName component. */
	readonly workflowName: string;
	/** The WorkflowVersion component. */
	readonly workflowVersion: string;
}

/**
 * Properties for building a component ARN.
 */
export interface ImageBuilderComponentArnProps {
	/** The ComponentName component of the ARN. */
	readonly componentName: string;
	/** The ComponentVersion component of the ARN. */
	readonly componentVersion: string;
	/** The ComponentBuildVersion component of the ARN. */
	readonly componentBuildVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a component ARN.
 */
export interface ImageBuilderComponentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ComponentName component. */
	readonly componentName: string;
	/** The ComponentVersion component. */
	readonly componentVersion: string;
	/** The ComponentBuildVersion component. */
	readonly componentBuildVersion: string;
}

/**
 * Properties for building a containerRecipe ARN.
 */
export interface ImageBuilderContainerRecipeArnProps {
	/** The ContainerRecipeName component of the ARN. */
	readonly containerRecipeName: string;
	/** The ContainerRecipeVersion component of the ARN. */
	readonly containerRecipeVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a containerRecipe ARN.
 */
export interface ImageBuilderContainerRecipeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ContainerRecipeName component. */
	readonly containerRecipeName: string;
	/** The ContainerRecipeVersion component. */
	readonly containerRecipeVersion: string;
}

/**
 * Properties for building a distributionConfiguration ARN.
 */
export interface ImageBuilderDistributionConfigurationArnProps {
	/** The DistributionConfigurationName component of the ARN. */
	readonly distributionConfigurationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a distributionConfiguration ARN.
 */
export interface ImageBuilderDistributionConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DistributionConfigurationName component. */
	readonly distributionConfigurationName: string;
}

/**
 * Properties for building a image ARN.
 */
export interface ImageBuilderImageArnProps {
	/** The ImageName component of the ARN. */
	readonly imageName: string;
	/** The ImageVersion component of the ARN. */
	readonly imageVersion: string;
	/** The ImageBuildVersion component of the ARN. */
	readonly imageBuildVersion: string;
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
export interface ImageBuilderImageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ImageName component. */
	readonly imageName: string;
	/** The ImageVersion component. */
	readonly imageVersion: string;
	/** The ImageBuildVersion component. */
	readonly imageBuildVersion: string;
}

/**
 * Properties for building a imagePipeline ARN.
 */
export interface ImageBuilderImagePipelineArnProps {
	/** The ImagePipelineName component of the ARN. */
	readonly imagePipelineName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a imagePipeline ARN.
 */
export interface ImageBuilderImagePipelineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ImagePipelineName component. */
	readonly imagePipelineName: string;
}

/**
 * Properties for building a imageRecipe ARN.
 */
export interface ImageBuilderImageRecipeArnProps {
	/** The ImageRecipeName component of the ARN. */
	readonly imageRecipeName: string;
	/** The ImageRecipeVersion component of the ARN. */
	readonly imageRecipeVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a imageRecipe ARN.
 */
export interface ImageBuilderImageRecipeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ImageRecipeName component. */
	readonly imageRecipeName: string;
	/** The ImageRecipeVersion component. */
	readonly imageRecipeVersion: string;
}

/**
 * Properties for building a imageVersion ARN.
 */
export interface ImageBuilderImageVersionArnProps {
	/** The ImageName component of the ARN. */
	readonly imageName: string;
	/** The ImageVersion component of the ARN. */
	readonly imageVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a imageVersion ARN.
 */
export interface ImageBuilderImageVersionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ImageName component. */
	readonly imageName: string;
	/** The ImageVersion component. */
	readonly imageVersion: string;
}

/**
 * Properties for building a infrastructureConfiguration ARN.
 */
export interface ImageBuilderInfrastructureConfigurationArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a infrastructureConfiguration ARN.
 */
export interface ImageBuilderInfrastructureConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a lifecycleExecution ARN.
 */
export interface ImageBuilderLifecycleExecutionArnProps {
	/** The LifecycleExecutionId component of the ARN. */
	readonly lifecycleExecutionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a lifecycleExecution ARN.
 */
export interface ImageBuilderLifecycleExecutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LifecycleExecutionId component. */
	readonly lifecycleExecutionId: string;
}

/**
 * Properties for building a lifecyclePolicy ARN.
 */
export interface ImageBuilderLifecyclePolicyArnProps {
	/** The LifecyclePolicyName component of the ARN. */
	readonly lifecyclePolicyName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a lifecyclePolicy ARN.
 */
export interface ImageBuilderLifecyclePolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LifecyclePolicyName component. */
	readonly lifecyclePolicyName: string;
}

/**
 * Properties for building a workflow ARN.
 */
export interface ImageBuilderWorkflowArnProps {
	/** The WorkflowType component of the ARN. */
	readonly workflowType: string;
	/** The WorkflowName component of the ARN. */
	readonly workflowName: string;
	/** The WorkflowVersion component of the ARN. */
	readonly workflowVersion: string;
	/** The WorkflowBuildVersion component of the ARN. */
	readonly workflowBuildVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workflow ARN.
 */
export interface ImageBuilderWorkflowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkflowType component. */
	readonly workflowType: string;
	/** The WorkflowName component. */
	readonly workflowName: string;
	/** The WorkflowVersion component. */
	readonly workflowVersion: string;
	/** The WorkflowBuildVersion component. */
	readonly workflowBuildVersion: string;
}

/**
 * Properties for building a workflowExecution ARN.
 */
export interface ImageBuilderWorkflowExecutionArnProps {
	/** The WorkflowExecutionId component of the ARN. */
	readonly workflowExecutionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workflowExecution ARN.
 */
export interface ImageBuilderWorkflowExecutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkflowExecutionId component. */
	readonly workflowExecutionId: string;
}

/**
 * Properties for building a workflowStepExecution ARN.
 */
export interface ImageBuilderWorkflowStepExecutionArnProps {
	/** The WorkflowStepExecutionId component of the ARN. */
	readonly workflowStepExecutionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workflowStepExecution ARN.
 */
export interface ImageBuilderWorkflowStepExecutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkflowStepExecutionId component. */
	readonly workflowStepExecutionId: string;
}

const AllComponentBuildVersionsArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):component\/(?<componentName>[^:/?]+)\/(?<componentVersion>[^:/?]+)\/.*$/;
const AllImageBuildVersionsArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):image\/(?<imageName>[^:/?]+)\/(?<imageVersion>[^:/?]+)\/.*$/;
const AllWorkflowBuildVersionsArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):workflow\/(?<workflowType>[^:/?]+)\/(?<workflowName>[^:/?]+)\/(?<workflowVersion>[^:/?]+)\/.*$/;
const ComponentArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):component\/(?<componentName>[^:/?]+)\/(?<componentVersion>[^:/?]+)\/(?<componentBuildVersion>[^:/?]+)$/;
const ContainerRecipeArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):container-recipe\/(?<containerRecipeName>[^:/?]+)\/(?<containerRecipeVersion>[^:/?]+)$/;
const DistributionConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):distribution-configuration\/(?<distributionConfigurationName>[^:/?]+)$/;
const ImageArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):image\/(?<imageName>[^:/?]+)\/(?<imageVersion>[^:/?]+)\/(?<imageBuildVersion>[^:/?]+)$/;
const ImagePipelineArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):image-pipeline\/(?<imagePipelineName>[^:/?]+)$/;
const ImageRecipeArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):image-recipe\/(?<imageRecipeName>[^:/?]+)\/(?<imageRecipeVersion>[^:/?]+)$/;
const ImageVersionArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):image\/(?<imageName>[^:/?]+)\/(?<imageVersion>[^:/?]+)$/;
const InfrastructureConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):infrastructure-configuration\/(?<resourceId>[^:/?]+)$/;
const LifecycleExecutionArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):lifecycle-execution\/(?<lifecycleExecutionId>[^:/?]+)$/;
const LifecyclePolicyArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):lifecycle-policy\/(?<lifecyclePolicyName>[^:/?]+)$/;
const WorkflowArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):workflow\/(?<workflowType>[^:/?]+)\/(?<workflowName>[^:/?]+)\/(?<workflowVersion>[^:/?]+)\/(?<workflowBuildVersion>[^:/?]+)$/;
const WorkflowExecutionArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):workflow-execution\/(?<workflowExecutionId>[^:/?]+)$/;
const WorkflowStepExecutionArnRegex =
	/^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):workflow-step-execution\/(?<workflowStepExecutionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for imagebuilder resources.
 */
export class ImageBuilderResources {
	/**
	 * Builds an ARN for the allComponentBuildVersions resource.
	 */
	static allComponentBuildVersions(
		props: ImageBuilderAllComponentBuildVersionsArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:component/${props.componentName}/${props.componentVersion}/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the allComponentBuildVersions resource.
	 */
	static isValidAllComponentBuildVersionsArn(arn: string): boolean {
		return AllComponentBuildVersionsArnRegex.test(arn);
	}

	/**
	 * Parses a allComponentBuildVersions ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAllComponentBuildVersionsArn(
		arn: string,
	): ImageBuilderAllComponentBuildVersionsArnComponents {
		const match = AllComponentBuildVersionsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid allComponentBuildVersions ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			componentName: match.groups!.componentName,
			componentVersion: match.groups!.componentVersion,
		};
	}

	/**
	 * Builds an ARN for the allImageBuildVersions resource.
	 */
	static allImageBuildVersions(
		props: ImageBuilderAllImageBuildVersionsArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:image/${props.imageName}/${props.imageVersion}/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the allImageBuildVersions resource.
	 */
	static isValidAllImageBuildVersionsArn(arn: string): boolean {
		return AllImageBuildVersionsArnRegex.test(arn);
	}

	/**
	 * Parses a allImageBuildVersions ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAllImageBuildVersionsArn(
		arn: string,
	): ImageBuilderAllImageBuildVersionsArnComponents {
		const match = AllImageBuildVersionsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid allImageBuildVersions ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			imageName: match.groups!.imageName,
			imageVersion: match.groups!.imageVersion,
		};
	}

	/**
	 * Builds an ARN for the allWorkflowBuildVersions resource.
	 */
	static allWorkflowBuildVersions(
		props: ImageBuilderAllWorkflowBuildVersionsArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:workflow/${props.workflowType}/${props.workflowName}/${props.workflowVersion}/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the allWorkflowBuildVersions resource.
	 */
	static isValidAllWorkflowBuildVersionsArn(arn: string): boolean {
		return AllWorkflowBuildVersionsArnRegex.test(arn);
	}

	/**
	 * Parses a allWorkflowBuildVersions ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAllWorkflowBuildVersionsArn(
		arn: string,
	): ImageBuilderAllWorkflowBuildVersionsArnComponents {
		const match = AllWorkflowBuildVersionsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid allWorkflowBuildVersions ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workflowType: match.groups!.workflowType,
			workflowName: match.groups!.workflowName,
			workflowVersion: match.groups!.workflowVersion,
		};
	}

	/**
	 * Builds an ARN for the component resource.
	 */
	static component(props: ImageBuilderComponentArnProps): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:component/${props.componentName}/${props.componentVersion}/${props.componentBuildVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the component resource.
	 */
	static isValidComponentArn(arn: string): boolean {
		return ComponentArnRegex.test(arn);
	}

	/**
	 * Parses a component ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseComponentArn(arn: string): ImageBuilderComponentArnComponents {
		const match = ComponentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid component ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			componentName: match.groups!.componentName,
			componentVersion: match.groups!.componentVersion,
			componentBuildVersion: match.groups!.componentBuildVersion,
		};
	}

	/**
	 * Builds an ARN for the containerRecipe resource.
	 */
	static containerRecipe(props: ImageBuilderContainerRecipeArnProps): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:container-recipe/${props.containerRecipeName}/${props.containerRecipeVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the containerRecipe resource.
	 */
	static isValidContainerRecipeArn(arn: string): boolean {
		return ContainerRecipeArnRegex.test(arn);
	}

	/**
	 * Parses a containerRecipe ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContainerRecipeArn(
		arn: string,
	): ImageBuilderContainerRecipeArnComponents {
		const match = ContainerRecipeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid containerRecipe ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			containerRecipeName: match.groups!.containerRecipeName,
			containerRecipeVersion: match.groups!.containerRecipeVersion,
		};
	}

	/**
	 * Builds an ARN for the distributionConfiguration resource.
	 */
	static distributionConfiguration(
		props: ImageBuilderDistributionConfigurationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:distribution-configuration/${props.distributionConfigurationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the distributionConfiguration resource.
	 */
	static isValidDistributionConfigurationArn(arn: string): boolean {
		return DistributionConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a distributionConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDistributionConfigurationArn(
		arn: string,
	): ImageBuilderDistributionConfigurationArnComponents {
		const match = DistributionConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid distributionConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			distributionConfigurationName:
				match.groups!.distributionConfigurationName,
		};
	}

	/**
	 * Builds an ARN for the image resource.
	 */
	static image(props: ImageBuilderImageArnProps): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:image/${props.imageName}/${props.imageVersion}/${props.imageBuildVersion}`;
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
	static parseImageArn(arn: string): ImageBuilderImageArnComponents {
		const match = ImageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid image ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			imageName: match.groups!.imageName,
			imageVersion: match.groups!.imageVersion,
			imageBuildVersion: match.groups!.imageBuildVersion,
		};
	}

	/**
	 * Builds an ARN for the imagePipeline resource.
	 */
	static imagePipeline(props: ImageBuilderImagePipelineArnProps): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:image-pipeline/${props.imagePipelineName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the imagePipeline resource.
	 */
	static isValidImagePipelineArn(arn: string): boolean {
		return ImagePipelineArnRegex.test(arn);
	}

	/**
	 * Parses a imagePipeline ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImagePipelineArn(
		arn: string,
	): ImageBuilderImagePipelineArnComponents {
		const match = ImagePipelineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid imagePipeline ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			imagePipelineName: match.groups!.imagePipelineName,
		};
	}

	/**
	 * Builds an ARN for the imageRecipe resource.
	 */
	static imageRecipe(props: ImageBuilderImageRecipeArnProps): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:image-recipe/${props.imageRecipeName}/${props.imageRecipeVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the imageRecipe resource.
	 */
	static isValidImageRecipeArn(arn: string): boolean {
		return ImageRecipeArnRegex.test(arn);
	}

	/**
	 * Parses a imageRecipe ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImageRecipeArn(
		arn: string,
	): ImageBuilderImageRecipeArnComponents {
		const match = ImageRecipeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid imageRecipe ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			imageRecipeName: match.groups!.imageRecipeName,
			imageRecipeVersion: match.groups!.imageRecipeVersion,
		};
	}

	/**
	 * Builds an ARN for the imageVersion resource.
	 */
	static imageVersion(props: ImageBuilderImageVersionArnProps): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:image/${props.imageName}/${props.imageVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the imageVersion resource.
	 */
	static isValidImageVersionArn(arn: string): boolean {
		return ImageVersionArnRegex.test(arn);
	}

	/**
	 * Parses a imageVersion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImageVersionArn(
		arn: string,
	): ImageBuilderImageVersionArnComponents {
		const match = ImageVersionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid imageVersion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			imageName: match.groups!.imageName,
			imageVersion: match.groups!.imageVersion,
		};
	}

	/**
	 * Builds an ARN for the infrastructureConfiguration resource.
	 */
	static infrastructureConfiguration(
		props: ImageBuilderInfrastructureConfigurationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:infrastructure-configuration/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the infrastructureConfiguration resource.
	 */
	static isValidInfrastructureConfigurationArn(arn: string): boolean {
		return InfrastructureConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a infrastructureConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInfrastructureConfigurationArn(
		arn: string,
	): ImageBuilderInfrastructureConfigurationArnComponents {
		const match = InfrastructureConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid infrastructureConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the lifecycleExecution resource.
	 */
	static lifecycleExecution(
		props: ImageBuilderLifecycleExecutionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:lifecycle-execution/${props.lifecycleExecutionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the lifecycleExecution resource.
	 */
	static isValidLifecycleExecutionArn(arn: string): boolean {
		return LifecycleExecutionArnRegex.test(arn);
	}

	/**
	 * Parses a lifecycleExecution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLifecycleExecutionArn(
		arn: string,
	): ImageBuilderLifecycleExecutionArnComponents {
		const match = LifecycleExecutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid lifecycleExecution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			lifecycleExecutionId: match.groups!.lifecycleExecutionId,
		};
	}

	/**
	 * Builds an ARN for the lifecyclePolicy resource.
	 */
	static lifecyclePolicy(props: ImageBuilderLifecyclePolicyArnProps): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:lifecycle-policy/${props.lifecyclePolicyName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the lifecyclePolicy resource.
	 */
	static isValidLifecyclePolicyArn(arn: string): boolean {
		return LifecyclePolicyArnRegex.test(arn);
	}

	/**
	 * Parses a lifecyclePolicy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLifecyclePolicyArn(
		arn: string,
	): ImageBuilderLifecyclePolicyArnComponents {
		const match = LifecyclePolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid lifecyclePolicy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			lifecyclePolicyName: match.groups!.lifecyclePolicyName,
		};
	}

	/**
	 * Builds an ARN for the workflow resource.
	 */
	static workflow(props: ImageBuilderWorkflowArnProps): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:workflow/${props.workflowType}/${props.workflowName}/${props.workflowVersion}/${props.workflowBuildVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workflow resource.
	 */
	static isValidWorkflowArn(arn: string): boolean {
		return WorkflowArnRegex.test(arn);
	}

	/**
	 * Parses a workflow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkflowArn(arn: string): ImageBuilderWorkflowArnComponents {
		const match = WorkflowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workflow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workflowType: match.groups!.workflowType,
			workflowName: match.groups!.workflowName,
			workflowVersion: match.groups!.workflowVersion,
			workflowBuildVersion: match.groups!.workflowBuildVersion,
		};
	}

	/**
	 * Builds an ARN for the workflowExecution resource.
	 */
	static workflowExecution(
		props: ImageBuilderWorkflowExecutionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:workflow-execution/${props.workflowExecutionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workflowExecution resource.
	 */
	static isValidWorkflowExecutionArn(arn: string): boolean {
		return WorkflowExecutionArnRegex.test(arn);
	}

	/**
	 * Parses a workflowExecution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkflowExecutionArn(
		arn: string,
	): ImageBuilderWorkflowExecutionArnComponents {
		const match = WorkflowExecutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workflowExecution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workflowExecutionId: match.groups!.workflowExecutionId,
		};
	}

	/**
	 * Builds an ARN for the workflowStepExecution resource.
	 */
	static workflowStepExecution(
		props: ImageBuilderWorkflowStepExecutionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:imagebuilder:${props.region ?? "*"}:${props.account ?? "*"}:workflow-step-execution/${props.workflowStepExecutionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workflowStepExecution resource.
	 */
	static isValidWorkflowStepExecutionArn(arn: string): boolean {
		return WorkflowStepExecutionArnRegex.test(arn);
	}

	/**
	 * Parses a workflowStepExecution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkflowStepExecutionArn(
		arn: string,
	): ImageBuilderWorkflowStepExecutionArnComponents {
		const match = WorkflowStepExecutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workflowStepExecution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workflowStepExecutionId: match.groups!.workflowStepExecutionId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for imagebuilder.
 */
export class ImageBuilderOperations {
	/** IAM actions required for the CancelImageCreation API call. */
	static readonly CancelImageCreation: string[] = [
		"imagebuilder:CancelImageCreation",
	];
	/** IAM actions required for the CancelLifecycleExecution API call. */
	static readonly CancelLifecycleExecution: string[] = [
		"imagebuilder:CancelLifecycleExecution",
	];
	/** IAM actions required for the CreateComponent API call. */
	static readonly CreateComponent: string[] = [
		"imagebuilder:CreateComponent",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateContainerRecipe API call. */
	static readonly CreateContainerRecipe: string[] = [
		"imagebuilder:CreateContainerRecipe",
		"imagebuilder:GetComponent",
		"imagebuilder:GetImage",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateDistributionConfiguration API call. */
	static readonly CreateDistributionConfiguration: string[] = [
		"imagebuilder:CreateDistributionConfiguration",
		"iam:PassRole",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateImage API call. */
	static readonly CreateImage: string[] = [
		"imagebuilder:CreateImage",
		"imagebuilder:GetContainerRecipe",
		"imagebuilder:GetDistributionConfiguration",
		"imagebuilder:GetImageRecipe",
		"imagebuilder:GetInfrastructureConfiguration",
		"imagebuilder:GetWorkflow",
		"iam:PassRole",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateImagePipeline API call. */
	static readonly CreateImagePipeline: string[] = [
		"imagebuilder:CreateImagePipeline",
		"imagebuilder:GetContainerRecipe",
		"imagebuilder:GetDistributionConfiguration",
		"imagebuilder:GetImageRecipe",
		"imagebuilder:GetInfrastructureConfiguration",
		"imagebuilder:GetWorkflow",
		"iam:PassRole",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateImageRecipe API call. */
	static readonly CreateImageRecipe: string[] = [
		"imagebuilder:CreateImageRecipe",
		"imagebuilder:GetComponent",
		"imagebuilder:GetImage",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateInfrastructureConfiguration API call. */
	static readonly CreateInfrastructureConfiguration: string[] = [
		"imagebuilder:CreateInfrastructureConfiguration",
		"iam:GetInstanceProfile",
		"iam:PassRole",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateLifecyclePolicy API call. */
	static readonly CreateLifecyclePolicy: string[] = [
		"imagebuilder:CreateLifecyclePolicy",
		"iam:PassRole",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateWorkflow API call. */
	static readonly CreateWorkflow: string[] = [
		"imagebuilder:CreateWorkflow",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the DeleteComponent API call. */
	static readonly DeleteComponent: string[] = ["imagebuilder:DeleteComponent"];
	/** IAM actions required for the DeleteContainerRecipe API call. */
	static readonly DeleteContainerRecipe: string[] = [
		"imagebuilder:DeleteContainerRecipe",
	];
	/** IAM actions required for the DeleteDistributionConfiguration API call. */
	static readonly DeleteDistributionConfiguration: string[] = [
		"imagebuilder:DeleteDistributionConfiguration",
	];
	/** IAM actions required for the DeleteImage API call. */
	static readonly DeleteImage: string[] = ["imagebuilder:DeleteImage"];
	/** IAM actions required for the DeleteImagePipeline API call. */
	static readonly DeleteImagePipeline: string[] = [
		"imagebuilder:DeleteImagePipeline",
	];
	/** IAM actions required for the DeleteImageRecipe API call. */
	static readonly DeleteImageRecipe: string[] = [
		"imagebuilder:DeleteImageRecipe",
	];
	/** IAM actions required for the DeleteInfrastructureConfiguration API call. */
	static readonly DeleteInfrastructureConfiguration: string[] = [
		"imagebuilder:DeleteInfrastructureConfiguration",
	];
	/** IAM actions required for the DeleteLifecyclePolicy API call. */
	static readonly DeleteLifecyclePolicy: string[] = [
		"imagebuilder:DeleteLifecyclePolicy",
	];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DeleteWorkflow: string[] = ["imagebuilder:DeleteWorkflow"];
	/** IAM actions required for the DistributeImage API call. */
	static readonly DistributeImage: string[] = [
		"imagebuilder:DistributeImage",
		"imagebuilder:GetDistributionConfiguration",
		"imagebuilder:GetImage",
		"iam:PassRole",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the GetComponent API call. */
	static readonly opGetComponent: string[] = ["imagebuilder:GetComponent"];
	/** IAM actions required for the GetComponentPolicy API call. */
	static readonly opGetComponentPolicy: string[] = [
		"imagebuilder:GetComponentPolicy",
	];
	/** IAM actions required for the GetContainerRecipe API call. */
	static readonly opGetContainerRecipe: string[] = [
		"imagebuilder:GetContainerRecipe",
	];
	/** IAM actions required for the GetContainerRecipePolicy API call. */
	static readonly opGetContainerRecipePolicy: string[] = [
		"imagebuilder:GetContainerRecipePolicy",
	];
	/** IAM actions required for the GetDistributionConfiguration API call. */
	static readonly opGetDistributionConfiguration: string[] = [
		"imagebuilder:GetDistributionConfiguration",
	];
	/** IAM actions required for the GetImage API call. */
	static readonly opGetImage: string[] = ["imagebuilder:GetImage"];
	/** IAM actions required for the GetImagePipeline API call. */
	static readonly opGetImagePipeline: string[] = [
		"imagebuilder:GetImagePipeline",
	];
	/** IAM actions required for the GetImagePolicy API call. */
	static readonly opGetImagePolicy: string[] = ["imagebuilder:GetImagePolicy"];
	/** IAM actions required for the GetImageRecipe API call. */
	static readonly opGetImageRecipe: string[] = ["imagebuilder:GetImageRecipe"];
	/** IAM actions required for the GetImageRecipePolicy API call. */
	static readonly opGetImageRecipePolicy: string[] = [
		"imagebuilder:GetImageRecipePolicy",
	];
	/** IAM actions required for the GetInfrastructureConfiguration API call. */
	static readonly opGetInfrastructureConfiguration: string[] = [
		"imagebuilder:GetInfrastructureConfiguration",
	];
	/** IAM actions required for the GetLifecycleExecution API call. */
	static readonly opGetLifecycleExecution: string[] = [
		"imagebuilder:GetLifecycleExecution",
	];
	/** IAM actions required for the GetLifecyclePolicy API call. */
	static readonly opGetLifecyclePolicy: string[] = [
		"imagebuilder:GetLifecyclePolicy",
	];
	/** IAM actions required for the GetMarketplaceResource API call. */
	static readonly opGetMarketplaceResource: string[] = [
		"imagebuilder:GetMarketplaceResource",
	];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly opGetWorkflow: string[] = ["imagebuilder:GetWorkflow"];
	/** IAM actions required for the GetWorkflowExecution API call. */
	static readonly opGetWorkflowExecution: string[] = [
		"imagebuilder:GetWorkflowExecution",
	];
	/** IAM actions required for the GetWorkflowStepExecution API call. */
	static readonly opGetWorkflowStepExecution: string[] = [
		"imagebuilder:GetWorkflowStepExecution",
	];
	/** IAM actions required for the ImportComponent API call. */
	static readonly ImportComponent: string[] = [
		"imagebuilder:ImportComponent",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the ImportDiskImage API call. */
	static readonly ImportDiskImage: string[] = [
		"imagebuilder:GetInfrastructureConfiguration",
		"imagebuilder:ImportDiskImage",
		"iam:PassRole",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the ImportVmImage API call. */
	static readonly ImportVmImage: string[] = [
		"imagebuilder:ImportVmImage",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the ListComponentBuildVersions API call. */
	static readonly ListComponentBuildVersions: string[] = [
		"imagebuilder:ListComponentBuildVersions",
	];
	/** IAM actions required for the ListComponents API call. */
	static readonly ListComponents: string[] = ["imagebuilder:ListComponents"];
	/** IAM actions required for the ListContainerRecipes API call. */
	static readonly ListContainerRecipes: string[] = [
		"imagebuilder:ListContainerRecipes",
	];
	/** IAM actions required for the ListDistributionConfigurations API call. */
	static readonly ListDistributionConfigurations: string[] = [
		"imagebuilder:ListDistributionConfigurations",
	];
	/** IAM actions required for the ListImageBuildVersions API call. */
	static readonly ListImageBuildVersions: string[] = [
		"imagebuilder:ListImageBuildVersions",
	];
	/** IAM actions required for the ListImagePackages API call. */
	static readonly ListImagePackages: string[] = [
		"imagebuilder:ListImagePackages",
	];
	/** IAM actions required for the ListImagePipelineImages API call. */
	static readonly ListImagePipelineImages: string[] = [
		"imagebuilder:ListImagePipelineImages",
	];
	/** IAM actions required for the ListImagePipelines API call. */
	static readonly ListImagePipelines: string[] = [
		"imagebuilder:ListImagePipelines",
	];
	/** IAM actions required for the ListImageRecipes API call. */
	static readonly ListImageRecipes: string[] = [
		"imagebuilder:ListImageRecipes",
	];
	/** IAM actions required for the ListImageScanFindingAggregations API call. */
	static readonly ListImageScanFindingAggregations: string[] = [
		"imagebuilder:ListImageScanFindingAggregations",
	];
	/** IAM actions required for the ListImageScanFindings API call. */
	static readonly ListImageScanFindings: string[] = [
		"imagebuilder:ListImageScanFindings",
	];
	/** IAM actions required for the ListImages API call. */
	static readonly ListImages: string[] = ["imagebuilder:ListImages"];
	/** IAM actions required for the ListInfrastructureConfigurations API call. */
	static readonly ListInfrastructureConfigurations: string[] = [
		"imagebuilder:ListInfrastructureConfigurations",
	];
	/** IAM actions required for the ListLifecycleExecutionResources API call. */
	static readonly ListLifecycleExecutionResources: string[] = [
		"imagebuilder:ListLifecycleExecutionResources",
	];
	/** IAM actions required for the ListLifecycleExecutions API call. */
	static readonly ListLifecycleExecutions: string[] = [
		"imagebuilder:ListLifecycleExecutions",
	];
	/** IAM actions required for the ListLifecyclePolicies API call. */
	static readonly ListLifecyclePolicies: string[] = [
		"imagebuilder:ListLifecyclePolicies",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"imagebuilder:ListTagsForResource",
	];
	/** IAM actions required for the ListWaitingWorkflowSteps API call. */
	static readonly ListWaitingWorkflowSteps: string[] = [
		"imagebuilder:ListWaitingWorkflowSteps",
	];
	/** IAM actions required for the ListWorkflowBuildVersions API call. */
	static readonly ListWorkflowBuildVersions: string[] = [
		"imagebuilder:ListWorkflowBuildVersions",
	];
	/** IAM actions required for the ListWorkflowExecutions API call. */
	static readonly ListWorkflowExecutions: string[] = [
		"imagebuilder:ListWorkflowExecutions",
	];
	/** IAM actions required for the ListWorkflowStepExecutions API call. */
	static readonly ListWorkflowStepExecutions: string[] = [
		"imagebuilder:ListWorkflowStepExecutions",
	];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly ListWorkflows: string[] = ["imagebuilder:ListWorkflows"];
	/** IAM actions required for the PutComponentPolicy API call. */
	static readonly PutComponentPolicy: string[] = [
		"imagebuilder:PutComponentPolicy",
	];
	/** IAM actions required for the PutContainerRecipePolicy API call. */
	static readonly PutContainerRecipePolicy: string[] = [
		"imagebuilder:PutContainerRecipePolicy",
	];
	/** IAM actions required for the PutImagePolicy API call. */
	static readonly PutImagePolicy: string[] = ["imagebuilder:PutImagePolicy"];
	/** IAM actions required for the PutImageRecipePolicy API call. */
	static readonly PutImageRecipePolicy: string[] = [
		"imagebuilder:PutImageRecipePolicy",
	];
	/** IAM actions required for the RetryImage API call. */
	static readonly RetryImage: string[] = ["imagebuilder:RetryImage"];
	/** IAM actions required for the SendWorkflowStepAction API call. */
	static readonly SendWorkflowStepAction: string[] = [
		"imagebuilder:SendWorkflowStepAction",
	];
	/** IAM actions required for the StartImagePipelineExecution API call. */
	static readonly StartImagePipelineExecution: string[] = [
		"imagebuilder:StartImagePipelineExecution",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the StartResourceStateUpdate API call. */
	static readonly StartResourceStateUpdate: string[] = [
		"iam:PassRole",
		"imagebuilder:StartResourceStateUpdate",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["imagebuilder:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["imagebuilder:UntagResource"];
	/** IAM actions required for the UpdateDistributionConfiguration API call. */
	static readonly UpdateDistributionConfiguration: string[] = [
		"iam:PassRole",
		"imagebuilder:UpdateDistributionConfiguration",
	];
	/** IAM actions required for the UpdateImagePipeline API call. */
	static readonly UpdateImagePipeline: string[] = [
		"imagebuilder:GetContainerRecipe",
		"imagebuilder:GetDistributionConfiguration",
		"imagebuilder:GetImageRecipe",
		"imagebuilder:GetInfrastructureConfiguration",
		"imagebuilder:GetWorkflow",
		"iam:PassRole",
		"imagebuilder:TagResource",
		"imagebuilder:UpdateImagePipeline",
	];
	/** IAM actions required for the UpdateInfrastructureConfiguration API call. */
	static readonly UpdateInfrastructureConfiguration: string[] = [
		"iam:GetInstanceProfile",
		"iam:PassRole",
		"imagebuilder:UpdateInfrastructureConfiguration",
	];
	/** IAM actions required for the UpdateLifecyclePolicy API call. */
	static readonly UpdateLifecyclePolicy: string[] = [
		"iam:PassRole",
		"imagebuilder:UpdateLifecyclePolicy",
	];
}

/**
 * Condition key constants and builders for imagebuilder.
 */
export class ImageBuilderConditions {
	/** Condition keys applicable to the CreateComponent action. */
	static readonly CreateComponentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContainerRecipe action. */
	static readonly CreateContainerRecipeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDistributionConfiguration action. */
	static readonly CreateDistributionConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateImage action. */
	static readonly CreateImageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateImagePipeline action. */
	static readonly CreateImagePipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateImageRecipe action. */
	static readonly CreateImageRecipeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInfrastructureConfiguration action. */
	static readonly CreateInfrastructureConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"imagebuilder:CreatedResourceTag/${TagKey}",
		"imagebuilder:CreatedResourceTagKeys",
		"imagebuilder:Ec2MetadataHttpTokens",
		"imagebuilder:StatusTopicArn",
	];
	/** Condition keys applicable to the CreateLifecyclePolicy action. */
	static readonly CreateLifecyclePolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"imagebuilder:LifecyclePolicyResourceType",
	];
	/** Condition keys applicable to the CreateWorkflow action. */
	static readonly CreateWorkflowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DistributeImage action. */
	static readonly DistributeImageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportComponent action. */
	static readonly ImportComponentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportDiskImage action. */
	static readonly ImportDiskImageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportVmImage action. */
	static readonly ImportVmImageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartImagePipelineExecution action. */
	static readonly StartImagePipelineExecutionConditionKeys: string[] = [
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
	/** Condition keys applicable to the UpdateInfrastructureConfiguration action. */
	static readonly UpdateInfrastructureConfigurationConditionKeys: string[] = [
		"imagebuilder:CreatedResourceTag/${TagKey}",
		"imagebuilder:CreatedResourceTagKeys",
		"imagebuilder:Ec2MetadataHttpTokens",
		"imagebuilder:StatusTopicArn",
	];
	/** Condition keys applicable to the UpdateLifecyclePolicy action. */
	static readonly UpdateLifecyclePolicyConditionKeys: string[] = [
		"imagebuilder:LifecyclePolicyResourceType",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: imagebuilder:CreatedResourceTag/${TagKey} (String) */
	static readonly CREATED_RESOURCE_TAG =
		"imagebuilder:CreatedResourceTag/${TagKey}";
	/** Condition key: imagebuilder:CreatedResourceTagKeys (ArrayOfString) */
	static readonly CREATED_RESOURCE_TAG_KEYS =
		"imagebuilder:CreatedResourceTagKeys";
	/** Condition key: imagebuilder:Ec2MetadataHttpTokens (String) */
	static readonly EC2_METADATA_HTTP_TOKENS =
		"imagebuilder:Ec2MetadataHttpTokens";
	/** Condition key: imagebuilder:LifecyclePolicyResourceType (String) */
	static readonly LIFECYCLE_POLICY_RESOURCE_TYPE =
		"imagebuilder:LifecyclePolicyResourceType";
	/** Condition key: imagebuilder:StatusTopicArn (ARN) */
	static readonly STATUS_TOPIC_ARN = "imagebuilder:StatusTopicArn";

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
	 * Generates a condition block for `imagebuilder:CreatedResourceTag/${TagKey}`.
	 */
	static createdResourceTag(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "imagebuilder:CreatedResourceTag/${TagKey}": value },
		};
	}

	/**
	 * Generates a condition block for `imagebuilder:CreatedResourceTagKeys`.
	 */
	static createdResourceTagKeys(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"imagebuilder:CreatedResourceTagKeys": values,
			},
		};
	}

	/**
	 * Generates a condition block for `imagebuilder:Ec2MetadataHttpTokens`.
	 */
	static ec2MetadataHttpTokens(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "imagebuilder:Ec2MetadataHttpTokens": value } };
	}

	/**
	 * Generates a condition block for `imagebuilder:LifecyclePolicyResourceType`.
	 */
	static lifecyclePolicyResourceType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "imagebuilder:LifecyclePolicyResourceType": value },
		};
	}

	/**
	 * Generates a condition block for `imagebuilder:StatusTopicArn`.
	 */
	static statusTopicARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "imagebuilder:StatusTopicArn": value } };
	}
}
