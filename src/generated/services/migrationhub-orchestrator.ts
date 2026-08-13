// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/migrationhub-orchestrator.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the migrationhub-orchestrator service.
 */
export class MigrationhubOrchestratorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "migrationhub-orchestrator";

	/** [Write] migrationhub-orchestrator:CreateTemplate */
	static readonly CREATE_TEMPLATE = "migrationhub-orchestrator:CreateTemplate";
	/** [Write] migrationhub-orchestrator:CreateWorkflow */
	static readonly CREATE_WORKFLOW = "migrationhub-orchestrator:CreateWorkflow";
	/** [Write] migrationhub-orchestrator:CreateWorkflowStep */
	static readonly CREATE_WORKFLOW_STEP =
		"migrationhub-orchestrator:CreateWorkflowStep";
	/** [Write] migrationhub-orchestrator:CreateWorkflowStepGroup */
	static readonly CREATE_WORKFLOW_STEP_GROUP =
		"migrationhub-orchestrator:CreateWorkflowStepGroup";
	/** [Write] migrationhub-orchestrator:DeleteTemplate */
	static readonly DELETE_TEMPLATE = "migrationhub-orchestrator:DeleteTemplate";
	/** [Write] migrationhub-orchestrator:DeleteWorkflow */
	static readonly DELETE_WORKFLOW = "migrationhub-orchestrator:DeleteWorkflow";
	/** [Write] migrationhub-orchestrator:DeleteWorkflowStep */
	static readonly DELETE_WORKFLOW_STEP =
		"migrationhub-orchestrator:DeleteWorkflowStep";
	/** [Write] migrationhub-orchestrator:DeleteWorkflowStepGroup */
	static readonly DELETE_WORKFLOW_STEP_GROUP =
		"migrationhub-orchestrator:DeleteWorkflowStepGroup";
	/** [Read] migrationhub-orchestrator:GetMessage */
	static readonly GET_MESSAGE = "migrationhub-orchestrator:GetMessage";
	/** [Read] migrationhub-orchestrator:GetTemplate */
	static readonly GET_TEMPLATE = "migrationhub-orchestrator:GetTemplate";
	/** [Read] migrationhub-orchestrator:GetTemplateStep */
	static readonly GET_TEMPLATE_STEP =
		"migrationhub-orchestrator:GetTemplateStep";
	/** [Read] migrationhub-orchestrator:GetTemplateStepGroup */
	static readonly GET_TEMPLATE_STEP_GROUP =
		"migrationhub-orchestrator:GetTemplateStepGroup";
	/** [Read] migrationhub-orchestrator:GetWorkflow */
	static readonly GET_WORKFLOW = "migrationhub-orchestrator:GetWorkflow";
	/** [Read] migrationhub-orchestrator:GetWorkflowStep */
	static readonly GET_WORKFLOW_STEP =
		"migrationhub-orchestrator:GetWorkflowStep";
	/** [Read] migrationhub-orchestrator:GetWorkflowStepGroup */
	static readonly GET_WORKFLOW_STEP_GROUP =
		"migrationhub-orchestrator:GetWorkflowStepGroup";
	/** [List] migrationhub-orchestrator:ListPlugins */
	static readonly LIST_PLUGINS = "migrationhub-orchestrator:ListPlugins";
	/** [Read] migrationhub-orchestrator:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"migrationhub-orchestrator:ListTagsForResource";
	/** [List] migrationhub-orchestrator:ListTemplateStepGroups */
	static readonly LIST_TEMPLATE_STEP_GROUPS =
		"migrationhub-orchestrator:ListTemplateStepGroups";
	/** [List] migrationhub-orchestrator:ListTemplateSteps */
	static readonly LIST_TEMPLATE_STEPS =
		"migrationhub-orchestrator:ListTemplateSteps";
	/** [List] migrationhub-orchestrator:ListTemplates */
	static readonly LIST_TEMPLATES = "migrationhub-orchestrator:ListTemplates";
	/** [List] migrationhub-orchestrator:ListWorkflowStepGroups */
	static readonly LIST_WORKFLOW_STEP_GROUPS =
		"migrationhub-orchestrator:ListWorkflowStepGroups";
	/** [List] migrationhub-orchestrator:ListWorkflowSteps */
	static readonly LIST_WORKFLOW_STEPS =
		"migrationhub-orchestrator:ListWorkflowSteps";
	/** [List] migrationhub-orchestrator:ListWorkflows */
	static readonly LIST_WORKFLOWS = "migrationhub-orchestrator:ListWorkflows";
	/** [Write] migrationhub-orchestrator:RegisterPlugin */
	static readonly REGISTER_PLUGIN = "migrationhub-orchestrator:RegisterPlugin";
	/** [Write] migrationhub-orchestrator:RetryWorkflowStep */
	static readonly RETRY_WORKFLOW_STEP =
		"migrationhub-orchestrator:RetryWorkflowStep";
	/** [Write] migrationhub-orchestrator:SendMessage */
	static readonly SEND_MESSAGE = "migrationhub-orchestrator:SendMessage";
	/** [Write] migrationhub-orchestrator:StartWorkflow */
	static readonly START_WORKFLOW = "migrationhub-orchestrator:StartWorkflow";
	/** [Write] migrationhub-orchestrator:StopWorkflow */
	static readonly STOP_WORKFLOW = "migrationhub-orchestrator:StopWorkflow";
	/** [Tagging] migrationhub-orchestrator:TagResource */
	static readonly TAG_RESOURCE = "migrationhub-orchestrator:TagResource";
	/** [Tagging] migrationhub-orchestrator:UntagResource */
	static readonly UNTAG_RESOURCE = "migrationhub-orchestrator:UntagResource";
	/** [Write] migrationhub-orchestrator:UpdateTemplate */
	static readonly UPDATE_TEMPLATE = "migrationhub-orchestrator:UpdateTemplate";
	/** [Write] migrationhub-orchestrator:UpdateWorkflow */
	static readonly UPDATE_WORKFLOW = "migrationhub-orchestrator:UpdateWorkflow";
	/** [Write] migrationhub-orchestrator:UpdateWorkflowStep */
	static readonly UPDATE_WORKFLOW_STEP =
		"migrationhub-orchestrator:UpdateWorkflowStep";
	/** [Write] migrationhub-orchestrator:UpdateWorkflowStepGroup */
	static readonly UPDATE_WORKFLOW_STEP_GROUP =
		"migrationhub-orchestrator:UpdateWorkflowStepGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MigrationhubOrchestratorActions.GET_MESSAGE,
		MigrationhubOrchestratorActions.GET_TEMPLATE,
		MigrationhubOrchestratorActions.GET_TEMPLATE_STEP,
		MigrationhubOrchestratorActions.GET_TEMPLATE_STEP_GROUP,
		MigrationhubOrchestratorActions.GET_WORKFLOW,
		MigrationhubOrchestratorActions.GET_WORKFLOW_STEP,
		MigrationhubOrchestratorActions.GET_WORKFLOW_STEP_GROUP,
		MigrationhubOrchestratorActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MigrationhubOrchestratorActions.CREATE_TEMPLATE,
		MigrationhubOrchestratorActions.CREATE_WORKFLOW,
		MigrationhubOrchestratorActions.CREATE_WORKFLOW_STEP,
		MigrationhubOrchestratorActions.CREATE_WORKFLOW_STEP_GROUP,
		MigrationhubOrchestratorActions.DELETE_TEMPLATE,
		MigrationhubOrchestratorActions.DELETE_WORKFLOW,
		MigrationhubOrchestratorActions.DELETE_WORKFLOW_STEP,
		MigrationhubOrchestratorActions.DELETE_WORKFLOW_STEP_GROUP,
		MigrationhubOrchestratorActions.REGISTER_PLUGIN,
		MigrationhubOrchestratorActions.RETRY_WORKFLOW_STEP,
		MigrationhubOrchestratorActions.SEND_MESSAGE,
		MigrationhubOrchestratorActions.START_WORKFLOW,
		MigrationhubOrchestratorActions.STOP_WORKFLOW,
		MigrationhubOrchestratorActions.UPDATE_TEMPLATE,
		MigrationhubOrchestratorActions.UPDATE_WORKFLOW,
		MigrationhubOrchestratorActions.UPDATE_WORKFLOW_STEP,
		MigrationhubOrchestratorActions.UPDATE_WORKFLOW_STEP_GROUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MigrationhubOrchestratorActions.LIST_PLUGINS,
		MigrationhubOrchestratorActions.LIST_TEMPLATE_STEP_GROUPS,
		MigrationhubOrchestratorActions.LIST_TEMPLATE_STEPS,
		MigrationhubOrchestratorActions.LIST_TEMPLATES,
		MigrationhubOrchestratorActions.LIST_WORKFLOW_STEP_GROUPS,
		MigrationhubOrchestratorActions.LIST_WORKFLOW_STEPS,
		MigrationhubOrchestratorActions.LIST_WORKFLOWS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MigrationhubOrchestratorActions.TAG_RESOURCE,
		MigrationhubOrchestratorActions.UNTAG_RESOURCE,
	];
}

const TemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):migrationhub-orchestrator:(?<region>[^:]*):(?<account>[^:]*):template/(?<resourceId>[^:/?]+)$",
);
const WorkflowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):migrationhub-orchestrator:(?<region>[^:]*):(?<account>[^:]*):workflow/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for migrationhub-orchestrator resources.
 */
export class MigrationhubOrchestratorResources {
	/**
	 * Builds an ARN for the template resource.
	 */
	static template(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:migrationhub-orchestrator:${props.region ?? "*"}:${props.account ?? "*"}:template/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the template resource.
	 */
	static isValidTemplateArn(arn: string): boolean {
		return TemplateArnRegex.test(arn);
	}

	/**
	 * Parses a template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = TemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the workflow resource.
	 */
	static workflow(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:migrationhub-orchestrator:${props.region ?? "*"}:${props.account ?? "*"}:workflow/${props.resourceId}`;
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
		resourceId: string;
	} {
		const match = WorkflowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workflow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for migrationhub-orchestrator.
 */
export class MigrationhubOrchestratorOperations {
	/** IAM actions required for the CreateTemplate API call. */
	static readonly CREATE_TEMPLATE: string[] = [
		"migrationhub-orchestrator:CreateTemplate",
		"migrationhub-orchestrator:TagResource",
	];
	/** IAM actions required for the CreateWorkflow API call. */
	static readonly CREATE_WORKFLOW: string[] = [
		"migrationhub-orchestrator:CreateWorkflow",
		"migrationhub-orchestrator:TagResource",
	];
	/** IAM actions required for the CreateWorkflowStep API call. */
	static readonly CREATE_WORKFLOW_STEP: string[] = [
		"migrationhub-orchestrator:CreateWorkflowStep",
	];
	/** IAM actions required for the CreateWorkflowStepGroup API call. */
	static readonly CREATE_WORKFLOW_STEP_GROUP: string[] = [
		"migrationhub-orchestrator:CreateWorkflowStepGroup",
	];
	/** IAM actions required for the DeleteTemplate API call. */
	static readonly DELETE_TEMPLATE: string[] = [
		"migrationhub-orchestrator:DeleteTemplate",
	];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DELETE_WORKFLOW: string[] = [
		"migrationhub-orchestrator:DeleteWorkflow",
	];
	/** IAM actions required for the DeleteWorkflowStep API call. */
	static readonly DELETE_WORKFLOW_STEP: string[] = [
		"migrationhub-orchestrator:DeleteWorkflowStep",
	];
	/** IAM actions required for the DeleteWorkflowStepGroup API call. */
	static readonly DELETE_WORKFLOW_STEP_GROUP: string[] = [
		"migrationhub-orchestrator:DeleteWorkflowStepGroup",
	];
	/** IAM actions required for the GetTemplate API call. */
	static readonly GET_TEMPLATE: string[] = [
		"migrationhub-orchestrator:GetTemplate",
	];
	/** IAM actions required for the GetTemplateStep API call. */
	static readonly GET_TEMPLATE_STEP: string[] = [
		"migrationhub-orchestrator:GetTemplateStep",
	];
	/** IAM actions required for the GetTemplateStepGroup API call. */
	static readonly GET_TEMPLATE_STEP_GROUP: string[] = [
		"migrationhub-orchestrator:GetTemplateStepGroup",
	];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly GET_WORKFLOW: string[] = [
		"migrationhub-orchestrator:GetWorkflow",
	];
	/** IAM actions required for the GetWorkflowStep API call. */
	static readonly GET_WORKFLOW_STEP: string[] = [
		"migrationhub-orchestrator:GetWorkflowStep",
	];
	/** IAM actions required for the GetWorkflowStepGroup API call. */
	static readonly GET_WORKFLOW_STEP_GROUP: string[] = [
		"migrationhub-orchestrator:GetWorkflowStepGroup",
	];
	/** IAM actions required for the ListPlugins API call. */
	static readonly LIST_PLUGINS: string[] = [
		"migrationhub-orchestrator:ListPlugins",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"migrationhub-orchestrator:ListTagsForResource",
	];
	/** IAM actions required for the ListTemplateStepGroups API call. */
	static readonly LIST_TEMPLATE_STEP_GROUPS: string[] = [
		"migrationhub-orchestrator:ListTemplateStepGroups",
	];
	/** IAM actions required for the ListTemplateSteps API call. */
	static readonly LIST_TEMPLATE_STEPS: string[] = [
		"migrationhub-orchestrator:ListTemplateSteps",
	];
	/** IAM actions required for the ListTemplates API call. */
	static readonly LIST_TEMPLATES: string[] = [
		"migrationhub-orchestrator:ListTemplates",
	];
	/** IAM actions required for the ListWorkflowStepGroups API call. */
	static readonly LIST_WORKFLOW_STEP_GROUPS: string[] = [
		"migrationhub-orchestrator:ListWorkflowStepGroups",
	];
	/** IAM actions required for the ListWorkflowSteps API call. */
	static readonly LIST_WORKFLOW_STEPS: string[] = [
		"migrationhub-orchestrator:ListWorkflowSteps",
	];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly LIST_WORKFLOWS: string[] = [
		"migrationhub-orchestrator:ListWorkflows",
	];
	/** IAM actions required for the RetryWorkflowStep API call. */
	static readonly RETRY_WORKFLOW_STEP: string[] = [
		"migrationhub-orchestrator:RetryWorkflowStep",
	];
	/** IAM actions required for the StartWorkflow API call. */
	static readonly START_WORKFLOW: string[] = [
		"migrationhub-orchestrator:StartWorkflow",
	];
	/** IAM actions required for the StopWorkflow API call. */
	static readonly STOP_WORKFLOW: string[] = [
		"migrationhub-orchestrator:StopWorkflow",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"migrationhub-orchestrator:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"migrationhub-orchestrator:UntagResource",
	];
	/** IAM actions required for the UpdateTemplate API call. */
	static readonly UPDATE_TEMPLATE: string[] = [];
	/** IAM actions required for the UpdateWorkflow API call. */
	static readonly UPDATE_WORKFLOW: string[] = [
		"migrationhub-orchestrator:UpdateWorkflow",
	];
	/** IAM actions required for the UpdateWorkflowStep API call. */
	static readonly UPDATE_WORKFLOW_STEP: string[] = [
		"migrationhub-orchestrator:UpdateWorkflowStep",
	];
	/** IAM actions required for the UpdateWorkflowStepGroup API call. */
	static readonly UPDATE_WORKFLOW_STEP_GROUP: string[] = [
		"migrationhub-orchestrator:UpdateWorkflowStepGroup",
	];
}

/**
 * Condition key constants and builders for migrationhub-orchestrator.
 */
export class MigrationhubOrchestratorConditions {
	/** Condition keys applicable to the CreateWorkflow action. */
	static readonly CREATE_WORKFLOW_CONDITION_KEYS: string[] = [
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
}
