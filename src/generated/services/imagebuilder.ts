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
	static readonly CANCEL_IMAGE_CREATION = "imagebuilder:CancelImageCreation";
	/** [Write] imagebuilder:CancelLifecycleExecution */
	static readonly CANCEL_LIFECYCLE_EXECUTION =
		"imagebuilder:CancelLifecycleExecution";
	/** [Write] imagebuilder:CreateComponent */
	static readonly CREATE_COMPONENT = "imagebuilder:CreateComponent";
	/** [Write] imagebuilder:CreateContainerRecipe */
	static readonly CREATE_CONTAINER_RECIPE =
		"imagebuilder:CreateContainerRecipe";
	/** [Write] imagebuilder:CreateDistributionConfiguration */
	static readonly CREATE_DISTRIBUTION_CONFIGURATION =
		"imagebuilder:CreateDistributionConfiguration";
	/** [Write] imagebuilder:CreateImage */
	static readonly CREATE_IMAGE = "imagebuilder:CreateImage";
	/** [Write] imagebuilder:CreateImagePipeline */
	static readonly CREATE_IMAGE_PIPELINE = "imagebuilder:CreateImagePipeline";
	/** [Write] imagebuilder:CreateImageRecipe */
	static readonly CREATE_IMAGE_RECIPE = "imagebuilder:CreateImageRecipe";
	/** [Write] imagebuilder:CreateInfrastructureConfiguration */
	static readonly CREATE_INFRASTRUCTURE_CONFIGURATION =
		"imagebuilder:CreateInfrastructureConfiguration";
	/** [Write] imagebuilder:CreateLifecyclePolicy */
	static readonly CREATE_LIFECYCLE_POLICY =
		"imagebuilder:CreateLifecyclePolicy";
	/** [Write] imagebuilder:CreateWorkflow */
	static readonly CREATE_WORKFLOW = "imagebuilder:CreateWorkflow";
	/** [Write] imagebuilder:DeleteComponent */
	static readonly DELETE_COMPONENT = "imagebuilder:DeleteComponent";
	/** [Write] imagebuilder:DeleteContainerRecipe */
	static readonly DELETE_CONTAINER_RECIPE =
		"imagebuilder:DeleteContainerRecipe";
	/** [Write] imagebuilder:DeleteDistributionConfiguration */
	static readonly DELETE_DISTRIBUTION_CONFIGURATION =
		"imagebuilder:DeleteDistributionConfiguration";
	/** [Write] imagebuilder:DeleteImage */
	static readonly DELETE_IMAGE = "imagebuilder:DeleteImage";
	/** [Write] imagebuilder:DeleteImagePipeline */
	static readonly DELETE_IMAGE_PIPELINE = "imagebuilder:DeleteImagePipeline";
	/** [Write] imagebuilder:DeleteImageRecipe */
	static readonly DELETE_IMAGE_RECIPE = "imagebuilder:DeleteImageRecipe";
	/** [Write] imagebuilder:DeleteInfrastructureConfiguration */
	static readonly DELETE_INFRASTRUCTURE_CONFIGURATION =
		"imagebuilder:DeleteInfrastructureConfiguration";
	/** [Write] imagebuilder:DeleteLifecyclePolicy */
	static readonly DELETE_LIFECYCLE_POLICY =
		"imagebuilder:DeleteLifecyclePolicy";
	/** [Write] imagebuilder:DeleteWorkflow */
	static readonly DELETE_WORKFLOW = "imagebuilder:DeleteWorkflow";
	/** [Write] imagebuilder:DistributeImage */
	static readonly DISTRIBUTE_IMAGE = "imagebuilder:DistributeImage";
	/** [Read] imagebuilder:GetComponent */
	static readonly GET_COMPONENT = "imagebuilder:GetComponent";
	/** [Read] imagebuilder:GetComponentPolicy */
	static readonly GET_COMPONENT_POLICY = "imagebuilder:GetComponentPolicy";
	/** [Read] imagebuilder:GetContainerRecipe */
	static readonly GET_CONTAINER_RECIPE = "imagebuilder:GetContainerRecipe";
	/** [Read] imagebuilder:GetContainerRecipePolicy */
	static readonly GET_CONTAINER_RECIPE_POLICY =
		"imagebuilder:GetContainerRecipePolicy";
	/** [Read] imagebuilder:GetDistributionConfiguration */
	static readonly GET_DISTRIBUTION_CONFIGURATION =
		"imagebuilder:GetDistributionConfiguration";
	/** [Read] imagebuilder:GetImage */
	static readonly GET_IMAGE = "imagebuilder:GetImage";
	/** [Read] imagebuilder:GetImagePipeline */
	static readonly GET_IMAGE_PIPELINE = "imagebuilder:GetImagePipeline";
	/** [Read] imagebuilder:GetImagePolicy */
	static readonly GET_IMAGE_POLICY = "imagebuilder:GetImagePolicy";
	/** [Read] imagebuilder:GetImageRecipe */
	static readonly GET_IMAGE_RECIPE = "imagebuilder:GetImageRecipe";
	/** [Read] imagebuilder:GetImageRecipePolicy */
	static readonly GET_IMAGE_RECIPE_POLICY = "imagebuilder:GetImageRecipePolicy";
	/** [Read] imagebuilder:GetInfrastructureConfiguration */
	static readonly GET_INFRASTRUCTURE_CONFIGURATION =
		"imagebuilder:GetInfrastructureConfiguration";
	/** [Read] imagebuilder:GetLifecycleExecution */
	static readonly GET_LIFECYCLE_EXECUTION =
		"imagebuilder:GetLifecycleExecution";
	/** [Read] imagebuilder:GetLifecyclePolicy */
	static readonly GET_LIFECYCLE_POLICY = "imagebuilder:GetLifecyclePolicy";
	/** [Read] imagebuilder:GetMarketplaceResource */
	static readonly GET_MARKETPLACE_RESOURCE =
		"imagebuilder:GetMarketplaceResource";
	/** [Read] imagebuilder:GetWorkflow */
	static readonly GET_WORKFLOW = "imagebuilder:GetWorkflow";
	/** [Read] imagebuilder:GetWorkflowExecution */
	static readonly GET_WORKFLOW_EXECUTION = "imagebuilder:GetWorkflowExecution";
	/** [Read] imagebuilder:GetWorkflowStepExecution */
	static readonly GET_WORKFLOW_STEP_EXECUTION =
		"imagebuilder:GetWorkflowStepExecution";
	/** [Write] imagebuilder:ImportComponent */
	static readonly IMPORT_COMPONENT = "imagebuilder:ImportComponent";
	/** [Write] imagebuilder:ImportDiskImage */
	static readonly IMPORT_DISK_IMAGE = "imagebuilder:ImportDiskImage";
	/** [Write] imagebuilder:ImportVmImage */
	static readonly IMPORT_VM_IMAGE = "imagebuilder:ImportVmImage";
	/** [List] imagebuilder:ListComponentBuildVersions */
	static readonly LIST_COMPONENT_BUILD_VERSIONS =
		"imagebuilder:ListComponentBuildVersions";
	/** [List] imagebuilder:ListComponents */
	static readonly LIST_COMPONENTS = "imagebuilder:ListComponents";
	/** [List] imagebuilder:ListContainerRecipes */
	static readonly LIST_CONTAINER_RECIPES = "imagebuilder:ListContainerRecipes";
	/** [List] imagebuilder:ListDistributionConfigurations */
	static readonly LIST_DISTRIBUTION_CONFIGURATIONS =
		"imagebuilder:ListDistributionConfigurations";
	/** [List] imagebuilder:ListImageBuildVersions */
	static readonly LIST_IMAGE_BUILD_VERSIONS =
		"imagebuilder:ListImageBuildVersions";
	/** [List] imagebuilder:ListImagePackages */
	static readonly LIST_IMAGE_PACKAGES = "imagebuilder:ListImagePackages";
	/** [List] imagebuilder:ListImagePipelineImages */
	static readonly LIST_IMAGE_PIPELINE_IMAGES =
		"imagebuilder:ListImagePipelineImages";
	/** [List] imagebuilder:ListImagePipelines */
	static readonly LIST_IMAGE_PIPELINES = "imagebuilder:ListImagePipelines";
	/** [List] imagebuilder:ListImageRecipes */
	static readonly LIST_IMAGE_RECIPES = "imagebuilder:ListImageRecipes";
	/** [List] imagebuilder:ListImageScanFindingAggregations */
	static readonly LIST_IMAGE_SCAN_FINDING_AGGREGATIONS =
		"imagebuilder:ListImageScanFindingAggregations";
	/** [List] imagebuilder:ListImageScanFindings */
	static readonly LIST_IMAGE_SCAN_FINDINGS =
		"imagebuilder:ListImageScanFindings";
	/** [List] imagebuilder:ListImages */
	static readonly LIST_IMAGES = "imagebuilder:ListImages";
	/** [List] imagebuilder:ListInfrastructureConfigurations */
	static readonly LIST_INFRASTRUCTURE_CONFIGURATIONS =
		"imagebuilder:ListInfrastructureConfigurations";
	/** [List] imagebuilder:ListLifecycleExecutionResources */
	static readonly LIST_LIFECYCLE_EXECUTION_RESOURCES =
		"imagebuilder:ListLifecycleExecutionResources";
	/** [List] imagebuilder:ListLifecycleExecutions */
	static readonly LIST_LIFECYCLE_EXECUTIONS =
		"imagebuilder:ListLifecycleExecutions";
	/** [List] imagebuilder:ListLifecyclePolicies */
	static readonly LIST_LIFECYCLE_POLICIES =
		"imagebuilder:ListLifecyclePolicies";
	/** [Read] imagebuilder:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "imagebuilder:ListTagsForResource";
	/** [List] imagebuilder:ListWaitingWorkflowSteps */
	static readonly LIST_WAITING_WORKFLOW_STEPS =
		"imagebuilder:ListWaitingWorkflowSteps";
	/** [List] imagebuilder:ListWorkflowBuildVersions */
	static readonly LIST_WORKFLOW_BUILD_VERSIONS =
		"imagebuilder:ListWorkflowBuildVersions";
	/** [List] imagebuilder:ListWorkflowExecutions */
	static readonly LIST_WORKFLOW_EXECUTIONS =
		"imagebuilder:ListWorkflowExecutions";
	/** [List] imagebuilder:ListWorkflowStepExecutions */
	static readonly LIST_WORKFLOW_STEP_EXECUTIONS =
		"imagebuilder:ListWorkflowStepExecutions";
	/** [List] imagebuilder:ListWorkflows */
	static readonly LIST_WORKFLOWS = "imagebuilder:ListWorkflows";
	/** [PermissionManagement] imagebuilder:PutComponentPolicy */
	static readonly PUT_COMPONENT_POLICY = "imagebuilder:PutComponentPolicy";
	/** [PermissionManagement] imagebuilder:PutContainerRecipePolicy */
	static readonly PUT_CONTAINER_RECIPE_POLICY =
		"imagebuilder:PutContainerRecipePolicy";
	/** [PermissionManagement] imagebuilder:PutImagePolicy */
	static readonly PUT_IMAGE_POLICY = "imagebuilder:PutImagePolicy";
	/** [PermissionManagement] imagebuilder:PutImageRecipePolicy */
	static readonly PUT_IMAGE_RECIPE_POLICY = "imagebuilder:PutImageRecipePolicy";
	/** [Write] imagebuilder:RetryImage */
	static readonly RETRY_IMAGE = "imagebuilder:RetryImage";
	/** [Write] imagebuilder:SendWorkflowStepAction */
	static readonly SEND_WORKFLOW_STEP_ACTION =
		"imagebuilder:SendWorkflowStepAction";
	/** [Write] imagebuilder:StartImagePipelineExecution */
	static readonly START_IMAGE_PIPELINE_EXECUTION =
		"imagebuilder:StartImagePipelineExecution";
	/** [Write] imagebuilder:StartResourceStateUpdate */
	static readonly START_RESOURCE_STATE_UPDATE =
		"imagebuilder:StartResourceStateUpdate";
	/** [Tagging] imagebuilder:TagResource */
	static readonly TAG_RESOURCE = "imagebuilder:TagResource";
	/** [Tagging] imagebuilder:UntagResource */
	static readonly UNTAG_RESOURCE = "imagebuilder:UntagResource";
	/** [Write] imagebuilder:UpdateDistributionConfiguration */
	static readonly UPDATE_DISTRIBUTION_CONFIGURATION =
		"imagebuilder:UpdateDistributionConfiguration";
	/** [Write] imagebuilder:UpdateImagePipeline */
	static readonly UPDATE_IMAGE_PIPELINE = "imagebuilder:UpdateImagePipeline";
	/** [Write] imagebuilder:UpdateInfrastructureConfiguration */
	static readonly UPDATE_INFRASTRUCTURE_CONFIGURATION =
		"imagebuilder:UpdateInfrastructureConfiguration";
	/** [Write] imagebuilder:UpdateLifecyclePolicy */
	static readonly UPDATE_LIFECYCLE_POLICY =
		"imagebuilder:UpdateLifecyclePolicy";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ImageBuilderActions.GET_COMPONENT,
		ImageBuilderActions.GET_COMPONENT_POLICY,
		ImageBuilderActions.GET_CONTAINER_RECIPE,
		ImageBuilderActions.GET_CONTAINER_RECIPE_POLICY,
		ImageBuilderActions.GET_DISTRIBUTION_CONFIGURATION,
		ImageBuilderActions.GET_IMAGE,
		ImageBuilderActions.GET_IMAGE_PIPELINE,
		ImageBuilderActions.GET_IMAGE_POLICY,
		ImageBuilderActions.GET_IMAGE_RECIPE,
		ImageBuilderActions.GET_IMAGE_RECIPE_POLICY,
		ImageBuilderActions.GET_INFRASTRUCTURE_CONFIGURATION,
		ImageBuilderActions.GET_LIFECYCLE_EXECUTION,
		ImageBuilderActions.GET_LIFECYCLE_POLICY,
		ImageBuilderActions.GET_MARKETPLACE_RESOURCE,
		ImageBuilderActions.GET_WORKFLOW,
		ImageBuilderActions.GET_WORKFLOW_EXECUTION,
		ImageBuilderActions.GET_WORKFLOW_STEP_EXECUTION,
		ImageBuilderActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ImageBuilderActions.CANCEL_IMAGE_CREATION,
		ImageBuilderActions.CANCEL_LIFECYCLE_EXECUTION,
		ImageBuilderActions.CREATE_COMPONENT,
		ImageBuilderActions.CREATE_CONTAINER_RECIPE,
		ImageBuilderActions.CREATE_DISTRIBUTION_CONFIGURATION,
		ImageBuilderActions.CREATE_IMAGE,
		ImageBuilderActions.CREATE_IMAGE_PIPELINE,
		ImageBuilderActions.CREATE_IMAGE_RECIPE,
		ImageBuilderActions.CREATE_INFRASTRUCTURE_CONFIGURATION,
		ImageBuilderActions.CREATE_LIFECYCLE_POLICY,
		ImageBuilderActions.CREATE_WORKFLOW,
		ImageBuilderActions.DELETE_COMPONENT,
		ImageBuilderActions.DELETE_CONTAINER_RECIPE,
		ImageBuilderActions.DELETE_DISTRIBUTION_CONFIGURATION,
		ImageBuilderActions.DELETE_IMAGE,
		ImageBuilderActions.DELETE_IMAGE_PIPELINE,
		ImageBuilderActions.DELETE_IMAGE_RECIPE,
		ImageBuilderActions.DELETE_INFRASTRUCTURE_CONFIGURATION,
		ImageBuilderActions.DELETE_LIFECYCLE_POLICY,
		ImageBuilderActions.DELETE_WORKFLOW,
		ImageBuilderActions.DISTRIBUTE_IMAGE,
		ImageBuilderActions.IMPORT_COMPONENT,
		ImageBuilderActions.IMPORT_DISK_IMAGE,
		ImageBuilderActions.IMPORT_VM_IMAGE,
		ImageBuilderActions.RETRY_IMAGE,
		ImageBuilderActions.SEND_WORKFLOW_STEP_ACTION,
		ImageBuilderActions.START_IMAGE_PIPELINE_EXECUTION,
		ImageBuilderActions.START_RESOURCE_STATE_UPDATE,
		ImageBuilderActions.UPDATE_DISTRIBUTION_CONFIGURATION,
		ImageBuilderActions.UPDATE_IMAGE_PIPELINE,
		ImageBuilderActions.UPDATE_INFRASTRUCTURE_CONFIGURATION,
		ImageBuilderActions.UPDATE_LIFECYCLE_POLICY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ImageBuilderActions.LIST_COMPONENT_BUILD_VERSIONS,
		ImageBuilderActions.LIST_COMPONENTS,
		ImageBuilderActions.LIST_CONTAINER_RECIPES,
		ImageBuilderActions.LIST_DISTRIBUTION_CONFIGURATIONS,
		ImageBuilderActions.LIST_IMAGE_BUILD_VERSIONS,
		ImageBuilderActions.LIST_IMAGE_PACKAGES,
		ImageBuilderActions.LIST_IMAGE_PIPELINE_IMAGES,
		ImageBuilderActions.LIST_IMAGE_PIPELINES,
		ImageBuilderActions.LIST_IMAGE_RECIPES,
		ImageBuilderActions.LIST_IMAGE_SCAN_FINDING_AGGREGATIONS,
		ImageBuilderActions.LIST_IMAGE_SCAN_FINDINGS,
		ImageBuilderActions.LIST_IMAGES,
		ImageBuilderActions.LIST_INFRASTRUCTURE_CONFIGURATIONS,
		ImageBuilderActions.LIST_LIFECYCLE_EXECUTION_RESOURCES,
		ImageBuilderActions.LIST_LIFECYCLE_EXECUTIONS,
		ImageBuilderActions.LIST_LIFECYCLE_POLICIES,
		ImageBuilderActions.LIST_WAITING_WORKFLOW_STEPS,
		ImageBuilderActions.LIST_WORKFLOW_BUILD_VERSIONS,
		ImageBuilderActions.LIST_WORKFLOW_EXECUTIONS,
		ImageBuilderActions.LIST_WORKFLOW_STEP_EXECUTIONS,
		ImageBuilderActions.LIST_WORKFLOWS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		ImageBuilderActions.PUT_COMPONENT_POLICY,
		ImageBuilderActions.PUT_CONTAINER_RECIPE_POLICY,
		ImageBuilderActions.PUT_IMAGE_POLICY,
		ImageBuilderActions.PUT_IMAGE_RECIPE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ImageBuilderActions.TAG_RESOURCE,
		ImageBuilderActions.UNTAG_RESOURCE,
	];
}

const AllComponentBuildVersionsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):component/(?<componentName>[^:/?]+)/(?<componentVersion>[^:/?]+)/.*$",
);
const AllImageBuildVersionsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):image/(?<imageName>[^:/?]+)/(?<imageVersion>[^:/?]+)/.*$",
);
const AllWorkflowBuildVersionsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):workflow/(?<workflowType>[^:/?]+)/(?<workflowName>[^:/?]+)/(?<workflowVersion>[^:/?]+)/.*$",
);
const ComponentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):component/(?<componentName>[^:/?]+)/(?<componentVersion>[^:/?]+)/(?<componentBuildVersion>[^:/?]+)$",
);
const ContainerRecipeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):container-recipe/(?<containerRecipeName>[^:/?]+)/(?<containerRecipeVersion>[^:/?]+)$",
);
const DistributionConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):distribution-configuration/(?<distributionConfigurationName>[^:/?]+)$",
);
const ImageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):image/(?<imageName>[^:/?]+)/(?<imageVersion>[^:/?]+)/(?<imageBuildVersion>[^:/?]+)$",
);
const ImagePipelineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):image-pipeline/(?<imagePipelineName>[^:/?]+)$",
);
const ImageRecipeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):image-recipe/(?<imageRecipeName>[^:/?]+)/(?<imageRecipeVersion>[^:/?]+)$",
);
const ImageVersionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):image/(?<imageName>[^:/?]+)/(?<imageVersion>[^:/?]+)$",
);
const InfrastructureConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):infrastructure-configuration/(?<resourceId>[^:/?]+)$",
);
const LifecycleExecutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):lifecycle-execution/(?<lifecycleExecutionId>[^:/?]+)$",
);
const LifecyclePolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):lifecycle-policy/(?<lifecyclePolicyName>[^:/?]+)$",
);
const WorkflowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):workflow/(?<workflowType>[^:/?]+)/(?<workflowName>[^:/?]+)/(?<workflowVersion>[^:/?]+)/(?<workflowBuildVersion>[^:/?]+)$",
);
const WorkflowExecutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):workflow-execution/(?<workflowExecutionId>[^:/?]+)$",
);
const WorkflowStepExecutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):imagebuilder:(?<region>[^:]*):(?<account>[^:]*):workflow-step-execution/(?<workflowStepExecutionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for imagebuilder resources.
 */
export class ImageBuilderResources {
	/**
	 * Builds an ARN for the allComponentBuildVersions resource.
	 */
	static allComponentBuildVersions(props: {
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
	}): string {
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
	static parseAllComponentBuildVersionsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		componentName: string;
		componentVersion: string;
	} {
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
	static allImageBuildVersions(props: {
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
	}): string {
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
	static parseAllImageBuildVersionsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		imageName: string;
		imageVersion: string;
	} {
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
	static allWorkflowBuildVersions(props: {
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
	}): string {
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
	static parseAllWorkflowBuildVersionsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workflowType: string;
		workflowName: string;
		workflowVersion: string;
	} {
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
	static component(props: {
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
	}): string {
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
	static parseComponentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		componentName: string;
		componentVersion: string;
		componentBuildVersion: string;
	} {
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
	static containerRecipe(props: {
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
	}): string {
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
	static parseContainerRecipeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		containerRecipeName: string;
		containerRecipeVersion: string;
	} {
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
	static distributionConfiguration(props: {
		/** The DistributionConfigurationName component of the ARN. */
		readonly distributionConfigurationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDistributionConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		distributionConfigurationName: string;
	} {
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
	static image(props: {
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
	}): string {
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
	static parseImageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		imageName: string;
		imageVersion: string;
		imageBuildVersion: string;
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
			imageVersion: match.groups!.imageVersion,
			imageBuildVersion: match.groups!.imageBuildVersion,
		};
	}

	/**
	 * Builds an ARN for the imagePipeline resource.
	 */
	static imagePipeline(props: {
		/** The ImagePipelineName component of the ARN. */
		readonly imagePipelineName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseImagePipelineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		imagePipelineName: string;
	} {
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
	static imageRecipe(props: {
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
	}): string {
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
	static parseImageRecipeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		imageRecipeName: string;
		imageRecipeVersion: string;
	} {
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
	static imageVersion(props: {
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
	}): string {
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
	static parseImageVersionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		imageName: string;
		imageVersion: string;
	} {
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
	static infrastructureConfiguration(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseInfrastructureConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static lifecycleExecution(props: {
		/** The LifecycleExecutionId component of the ARN. */
		readonly lifecycleExecutionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseLifecycleExecutionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		lifecycleExecutionId: string;
	} {
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
	static lifecyclePolicy(props: {
		/** The LifecyclePolicyName component of the ARN. */
		readonly lifecyclePolicyName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseLifecyclePolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		lifecyclePolicyName: string;
	} {
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
	static workflow(props: {
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
	}): string {
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
	static parseWorkflowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workflowType: string;
		workflowName: string;
		workflowVersion: string;
		workflowBuildVersion: string;
	} {
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
	static workflowExecution(props: {
		/** The WorkflowExecutionId component of the ARN. */
		readonly workflowExecutionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkflowExecutionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workflowExecutionId: string;
	} {
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
	static workflowStepExecution(props: {
		/** The WorkflowStepExecutionId component of the ARN. */
		readonly workflowStepExecutionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkflowStepExecutionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workflowStepExecutionId: string;
	} {
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
	static readonly CANCEL_IMAGE_CREATION: string[] = [
		"imagebuilder:CancelImageCreation",
	];
	/** IAM actions required for the CancelLifecycleExecution API call. */
	static readonly CANCEL_LIFECYCLE_EXECUTION: string[] = [
		"imagebuilder:CancelLifecycleExecution",
	];
	/** IAM actions required for the CreateComponent API call. */
	static readonly CREATE_COMPONENT: string[] = [
		"imagebuilder:CreateComponent",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateContainerRecipe API call. */
	static readonly CREATE_CONTAINER_RECIPE: string[] = [
		"imagebuilder:CreateContainerRecipe",
		"imagebuilder:GetComponent",
		"imagebuilder:GetImage",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateDistributionConfiguration API call. */
	static readonly CREATE_DISTRIBUTION_CONFIGURATION: string[] = [
		"imagebuilder:CreateDistributionConfiguration",
		"iam:PassRole",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateImage API call. */
	static readonly CREATE_IMAGE: string[] = [
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
	static readonly CREATE_IMAGE_PIPELINE: string[] = [
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
	static readonly CREATE_IMAGE_RECIPE: string[] = [
		"imagebuilder:CreateImageRecipe",
		"imagebuilder:GetComponent",
		"imagebuilder:GetImage",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateInfrastructureConfiguration API call. */
	static readonly CREATE_INFRASTRUCTURE_CONFIGURATION: string[] = [
		"imagebuilder:CreateInfrastructureConfiguration",
		"iam:GetInstanceProfile",
		"iam:PassRole",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateLifecyclePolicy API call. */
	static readonly CREATE_LIFECYCLE_POLICY: string[] = [
		"imagebuilder:CreateLifecyclePolicy",
		"iam:PassRole",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the CreateWorkflow API call. */
	static readonly CREATE_WORKFLOW: string[] = [
		"imagebuilder:CreateWorkflow",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the DeleteComponent API call. */
	static readonly DELETE_COMPONENT: string[] = ["imagebuilder:DeleteComponent"];
	/** IAM actions required for the DeleteContainerRecipe API call. */
	static readonly DELETE_CONTAINER_RECIPE: string[] = [
		"imagebuilder:DeleteContainerRecipe",
	];
	/** IAM actions required for the DeleteDistributionConfiguration API call. */
	static readonly DELETE_DISTRIBUTION_CONFIGURATION: string[] = [
		"imagebuilder:DeleteDistributionConfiguration",
	];
	/** IAM actions required for the DeleteImage API call. */
	static readonly DELETE_IMAGE: string[] = ["imagebuilder:DeleteImage"];
	/** IAM actions required for the DeleteImagePipeline API call. */
	static readonly DELETE_IMAGE_PIPELINE: string[] = [
		"imagebuilder:DeleteImagePipeline",
	];
	/** IAM actions required for the DeleteImageRecipe API call. */
	static readonly DELETE_IMAGE_RECIPE: string[] = [
		"imagebuilder:DeleteImageRecipe",
	];
	/** IAM actions required for the DeleteInfrastructureConfiguration API call. */
	static readonly DELETE_INFRASTRUCTURE_CONFIGURATION: string[] = [
		"imagebuilder:DeleteInfrastructureConfiguration",
	];
	/** IAM actions required for the DeleteLifecyclePolicy API call. */
	static readonly DELETE_LIFECYCLE_POLICY: string[] = [
		"imagebuilder:DeleteLifecyclePolicy",
	];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DELETE_WORKFLOW: string[] = ["imagebuilder:DeleteWorkflow"];
	/** IAM actions required for the DistributeImage API call. */
	static readonly DISTRIBUTE_IMAGE: string[] = [
		"imagebuilder:DistributeImage",
		"imagebuilder:GetDistributionConfiguration",
		"imagebuilder:GetImage",
		"iam:PassRole",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the GetComponent API call. */
	static readonly GET_COMPONENT: string[] = ["imagebuilder:GetComponent"];
	/** IAM actions required for the GetComponentPolicy API call. */
	static readonly GET_COMPONENT_POLICY: string[] = [
		"imagebuilder:GetComponentPolicy",
	];
	/** IAM actions required for the GetContainerRecipe API call. */
	static readonly GET_CONTAINER_RECIPE: string[] = [
		"imagebuilder:GetContainerRecipe",
	];
	/** IAM actions required for the GetContainerRecipePolicy API call. */
	static readonly GET_CONTAINER_RECIPE_POLICY: string[] = [
		"imagebuilder:GetContainerRecipePolicy",
	];
	/** IAM actions required for the GetDistributionConfiguration API call. */
	static readonly GET_DISTRIBUTION_CONFIGURATION: string[] = [
		"imagebuilder:GetDistributionConfiguration",
	];
	/** IAM actions required for the GetImage API call. */
	static readonly GET_IMAGE: string[] = ["imagebuilder:GetImage"];
	/** IAM actions required for the GetImagePipeline API call. */
	static readonly GET_IMAGE_PIPELINE: string[] = [
		"imagebuilder:GetImagePipeline",
	];
	/** IAM actions required for the GetImagePolicy API call. */
	static readonly GET_IMAGE_POLICY: string[] = ["imagebuilder:GetImagePolicy"];
	/** IAM actions required for the GetImageRecipe API call. */
	static readonly GET_IMAGE_RECIPE: string[] = ["imagebuilder:GetImageRecipe"];
	/** IAM actions required for the GetImageRecipePolicy API call. */
	static readonly GET_IMAGE_RECIPE_POLICY: string[] = [
		"imagebuilder:GetImageRecipePolicy",
	];
	/** IAM actions required for the GetInfrastructureConfiguration API call. */
	static readonly GET_INFRASTRUCTURE_CONFIGURATION: string[] = [
		"imagebuilder:GetInfrastructureConfiguration",
	];
	/** IAM actions required for the GetLifecycleExecution API call. */
	static readonly GET_LIFECYCLE_EXECUTION: string[] = [
		"imagebuilder:GetLifecycleExecution",
	];
	/** IAM actions required for the GetLifecyclePolicy API call. */
	static readonly GET_LIFECYCLE_POLICY: string[] = [
		"imagebuilder:GetLifecyclePolicy",
	];
	/** IAM actions required for the GetMarketplaceResource API call. */
	static readonly GET_MARKETPLACE_RESOURCE: string[] = [
		"imagebuilder:GetMarketplaceResource",
	];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly GET_WORKFLOW: string[] = ["imagebuilder:GetWorkflow"];
	/** IAM actions required for the GetWorkflowExecution API call. */
	static readonly GET_WORKFLOW_EXECUTION: string[] = [
		"imagebuilder:GetWorkflowExecution",
	];
	/** IAM actions required for the GetWorkflowStepExecution API call. */
	static readonly GET_WORKFLOW_STEP_EXECUTION: string[] = [
		"imagebuilder:GetWorkflowStepExecution",
	];
	/** IAM actions required for the ImportComponent API call. */
	static readonly IMPORT_COMPONENT: string[] = [];
	/** IAM actions required for the ImportDiskImage API call. */
	static readonly IMPORT_DISK_IMAGE: string[] = [
		"imagebuilder:GetInfrastructureConfiguration",
		"imagebuilder:ImportDiskImage",
		"iam:PassRole",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the ImportVmImage API call. */
	static readonly IMPORT_VM_IMAGE: string[] = [
		"imagebuilder:ImportVmImage",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the ListComponentBuildVersions API call. */
	static readonly LIST_COMPONENT_BUILD_VERSIONS: string[] = [
		"imagebuilder:ListComponentBuildVersions",
	];
	/** IAM actions required for the ListComponents API call. */
	static readonly LIST_COMPONENTS: string[] = ["imagebuilder:ListComponents"];
	/** IAM actions required for the ListContainerRecipes API call. */
	static readonly LIST_CONTAINER_RECIPES: string[] = [
		"imagebuilder:ListContainerRecipes",
	];
	/** IAM actions required for the ListDistributionConfigurations API call. */
	static readonly LIST_DISTRIBUTION_CONFIGURATIONS: string[] = [
		"imagebuilder:ListDistributionConfigurations",
	];
	/** IAM actions required for the ListImageBuildVersions API call. */
	static readonly LIST_IMAGE_BUILD_VERSIONS: string[] = [
		"imagebuilder:ListImageBuildVersions",
	];
	/** IAM actions required for the ListImagePackages API call. */
	static readonly LIST_IMAGE_PACKAGES: string[] = [
		"imagebuilder:ListImagePackages",
	];
	/** IAM actions required for the ListImagePipelineImages API call. */
	static readonly LIST_IMAGE_PIPELINE_IMAGES: string[] = [
		"imagebuilder:ListImagePipelineImages",
	];
	/** IAM actions required for the ListImagePipelines API call. */
	static readonly LIST_IMAGE_PIPELINES: string[] = [
		"imagebuilder:ListImagePipelines",
	];
	/** IAM actions required for the ListImageRecipes API call. */
	static readonly LIST_IMAGE_RECIPES: string[] = [
		"imagebuilder:ListImageRecipes",
	];
	/** IAM actions required for the ListImageScanFindingAggregations API call. */
	static readonly LIST_IMAGE_SCAN_FINDING_AGGREGATIONS: string[] = [
		"imagebuilder:ListImageScanFindingAggregations",
	];
	/** IAM actions required for the ListImageScanFindings API call. */
	static readonly LIST_IMAGE_SCAN_FINDINGS: string[] = [
		"imagebuilder:ListImageScanFindings",
	];
	/** IAM actions required for the ListImages API call. */
	static readonly LIST_IMAGES: string[] = ["imagebuilder:ListImages"];
	/** IAM actions required for the ListInfrastructureConfigurations API call. */
	static readonly LIST_INFRASTRUCTURE_CONFIGURATIONS: string[] = [
		"imagebuilder:ListInfrastructureConfigurations",
	];
	/** IAM actions required for the ListLifecycleExecutionResources API call. */
	static readonly LIST_LIFECYCLE_EXECUTION_RESOURCES: string[] = [
		"imagebuilder:ListLifecycleExecutionResources",
	];
	/** IAM actions required for the ListLifecycleExecutions API call. */
	static readonly LIST_LIFECYCLE_EXECUTIONS: string[] = [
		"imagebuilder:ListLifecycleExecutions",
	];
	/** IAM actions required for the ListLifecyclePolicies API call. */
	static readonly LIST_LIFECYCLE_POLICIES: string[] = [
		"imagebuilder:ListLifecyclePolicies",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"imagebuilder:ListTagsForResource",
	];
	/** IAM actions required for the ListWaitingWorkflowSteps API call. */
	static readonly LIST_WAITING_WORKFLOW_STEPS: string[] = [
		"imagebuilder:ListWaitingWorkflowSteps",
	];
	/** IAM actions required for the ListWorkflowBuildVersions API call. */
	static readonly LIST_WORKFLOW_BUILD_VERSIONS: string[] = [
		"imagebuilder:ListWorkflowBuildVersions",
	];
	/** IAM actions required for the ListWorkflowExecutions API call. */
	static readonly LIST_WORKFLOW_EXECUTIONS: string[] = [
		"imagebuilder:ListWorkflowExecutions",
	];
	/** IAM actions required for the ListWorkflowStepExecutions API call. */
	static readonly LIST_WORKFLOW_STEP_EXECUTIONS: string[] = [
		"imagebuilder:ListWorkflowStepExecutions",
	];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly LIST_WORKFLOWS: string[] = ["imagebuilder:ListWorkflows"];
	/** IAM actions required for the PutComponentPolicy API call. */
	static readonly PUT_COMPONENT_POLICY: string[] = [
		"imagebuilder:PutComponentPolicy",
	];
	/** IAM actions required for the PutContainerRecipePolicy API call. */
	static readonly PUT_CONTAINER_RECIPE_POLICY: string[] = [
		"imagebuilder:PutContainerRecipePolicy",
	];
	/** IAM actions required for the PutImagePolicy API call. */
	static readonly PUT_IMAGE_POLICY: string[] = ["imagebuilder:PutImagePolicy"];
	/** IAM actions required for the PutImageRecipePolicy API call. */
	static readonly PUT_IMAGE_RECIPE_POLICY: string[] = [
		"imagebuilder:PutImageRecipePolicy",
	];
	/** IAM actions required for the RetryImage API call. */
	static readonly RETRY_IMAGE: string[] = ["imagebuilder:RetryImage"];
	/** IAM actions required for the SendWorkflowStepAction API call. */
	static readonly SEND_WORKFLOW_STEP_ACTION: string[] = [
		"imagebuilder:SendWorkflowStepAction",
	];
	/** IAM actions required for the StartImagePipelineExecution API call. */
	static readonly START_IMAGE_PIPELINE_EXECUTION: string[] = [
		"imagebuilder:StartImagePipelineExecution",
		"imagebuilder:TagResource",
	];
	/** IAM actions required for the StartResourceStateUpdate API call. */
	static readonly START_RESOURCE_STATE_UPDATE: string[] = [
		"iam:PassRole",
		"imagebuilder:StartResourceStateUpdate",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["imagebuilder:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["imagebuilder:UntagResource"];
	/** IAM actions required for the UpdateDistributionConfiguration API call. */
	static readonly UPDATE_DISTRIBUTION_CONFIGURATION: string[] = [
		"iam:PassRole",
		"imagebuilder:UpdateDistributionConfiguration",
	];
	/** IAM actions required for the UpdateImagePipeline API call. */
	static readonly UPDATE_IMAGE_PIPELINE: string[] = [
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
	static readonly UPDATE_INFRASTRUCTURE_CONFIGURATION: string[] = [
		"iam:GetInstanceProfile",
		"iam:PassRole",
		"imagebuilder:UpdateInfrastructureConfiguration",
	];
	/** IAM actions required for the UpdateLifecyclePolicy API call. */
	static readonly UPDATE_LIFECYCLE_POLICY: string[] = [
		"iam:PassRole",
		"imagebuilder:UpdateLifecyclePolicy",
	];
}

/**
 * Condition key constants and builders for imagebuilder.
 */
export class ImageBuilderConditions {
	/** Condition keys applicable to the CreateComponent action. */
	static readonly CREATE_COMPONENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateContainerRecipe action. */
	static readonly CREATE_CONTAINER_RECIPE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDistributionConfiguration action. */
	static readonly CREATE_DISTRIBUTION_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateImage action. */
	static readonly CREATE_IMAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateImagePipeline action. */
	static readonly CREATE_IMAGE_PIPELINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateImageRecipe action. */
	static readonly CREATE_IMAGE_RECIPE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInfrastructureConfiguration action. */
	static readonly CREATE_INFRASTRUCTURE_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"imagebuilder:CreatedResourceTag/${TagKey}",
			"imagebuilder:CreatedResourceTagKeys",
			"imagebuilder:Ec2MetadataHttpTokens",
			"imagebuilder:StatusTopicArn",
		];
	/** Condition keys applicable to the CreateLifecyclePolicy action. */
	static readonly CREATE_LIFECYCLE_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"imagebuilder:LifecyclePolicyResourceType",
	];
	/** Condition keys applicable to the CreateWorkflow action. */
	static readonly CREATE_WORKFLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DistributeImage action. */
	static readonly DISTRIBUTE_IMAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportComponent action. */
	static readonly IMPORT_COMPONENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportDiskImage action. */
	static readonly IMPORT_DISK_IMAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportVmImage action. */
	static readonly IMPORT_VM_IMAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartImagePipelineExecution action. */
	static readonly START_IMAGE_PIPELINE_EXECUTION_CONDITION_KEYS: string[] = [
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
	/** Condition keys applicable to the UpdateInfrastructureConfiguration action. */
	static readonly UPDATE_INFRASTRUCTURE_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"imagebuilder:CreatedResourceTag/${TagKey}",
			"imagebuilder:CreatedResourceTagKeys",
			"imagebuilder:Ec2MetadataHttpTokens",
			"imagebuilder:StatusTopicArn",
		];
	/** Condition keys applicable to the UpdateLifecyclePolicy action. */
	static readonly UPDATE_LIFECYCLE_POLICY_CONDITION_KEYS: string[] = [
		"imagebuilder:LifecyclePolicyResourceType",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
