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
	static readonly CreateTemplate = "migrationhub-orchestrator:CreateTemplate";
	/** [Write] migrationhub-orchestrator:CreateWorkflow */
	static readonly CreateWorkflow = "migrationhub-orchestrator:CreateWorkflow";
	/** [Write] migrationhub-orchestrator:CreateWorkflowStep */
	static readonly CreateWorkflowStep =
		"migrationhub-orchestrator:CreateWorkflowStep";
	/** [Write] migrationhub-orchestrator:CreateWorkflowStepGroup */
	static readonly CreateWorkflowStepGroup =
		"migrationhub-orchestrator:CreateWorkflowStepGroup";
	/** [Write] migrationhub-orchestrator:DeleteTemplate */
	static readonly DeleteTemplate = "migrationhub-orchestrator:DeleteTemplate";
	/** [Write] migrationhub-orchestrator:DeleteWorkflow */
	static readonly DeleteWorkflow = "migrationhub-orchestrator:DeleteWorkflow";
	/** [Write] migrationhub-orchestrator:DeleteWorkflowStep */
	static readonly DeleteWorkflowStep =
		"migrationhub-orchestrator:DeleteWorkflowStep";
	/** [Write] migrationhub-orchestrator:DeleteWorkflowStepGroup */
	static readonly DeleteWorkflowStepGroup =
		"migrationhub-orchestrator:DeleteWorkflowStepGroup";
	/** [Read] migrationhub-orchestrator:GetMessage */
	static readonly actionGetMessage = "migrationhub-orchestrator:GetMessage";
	/** [Read] migrationhub-orchestrator:GetTemplate */
	static readonly actionGetTemplate = "migrationhub-orchestrator:GetTemplate";
	/** [Read] migrationhub-orchestrator:GetTemplateStep */
	static readonly actionGetTemplateStep =
		"migrationhub-orchestrator:GetTemplateStep";
	/** [Read] migrationhub-orchestrator:GetTemplateStepGroup */
	static readonly actionGetTemplateStepGroup =
		"migrationhub-orchestrator:GetTemplateStepGroup";
	/** [Read] migrationhub-orchestrator:GetWorkflow */
	static readonly actionGetWorkflow = "migrationhub-orchestrator:GetWorkflow";
	/** [Read] migrationhub-orchestrator:GetWorkflowStep */
	static readonly actionGetWorkflowStep =
		"migrationhub-orchestrator:GetWorkflowStep";
	/** [Read] migrationhub-orchestrator:GetWorkflowStepGroup */
	static readonly actionGetWorkflowStepGroup =
		"migrationhub-orchestrator:GetWorkflowStepGroup";
	/** [List] migrationhub-orchestrator:ListPlugins */
	static readonly ListPlugins = "migrationhub-orchestrator:ListPlugins";
	/** [Read] migrationhub-orchestrator:ListTagsForResource */
	static readonly ListTagsForResource =
		"migrationhub-orchestrator:ListTagsForResource";
	/** [List] migrationhub-orchestrator:ListTemplateStepGroups */
	static readonly ListTemplateStepGroups =
		"migrationhub-orchestrator:ListTemplateStepGroups";
	/** [List] migrationhub-orchestrator:ListTemplateSteps */
	static readonly ListTemplateSteps =
		"migrationhub-orchestrator:ListTemplateSteps";
	/** [List] migrationhub-orchestrator:ListTemplates */
	static readonly ListTemplates = "migrationhub-orchestrator:ListTemplates";
	/** [List] migrationhub-orchestrator:ListWorkflowStepGroups */
	static readonly ListWorkflowStepGroups =
		"migrationhub-orchestrator:ListWorkflowStepGroups";
	/** [List] migrationhub-orchestrator:ListWorkflowSteps */
	static readonly ListWorkflowSteps =
		"migrationhub-orchestrator:ListWorkflowSteps";
	/** [List] migrationhub-orchestrator:ListWorkflows */
	static readonly ListWorkflows = "migrationhub-orchestrator:ListWorkflows";
	/** [Write] migrationhub-orchestrator:RegisterPlugin */
	static readonly RegisterPlugin = "migrationhub-orchestrator:RegisterPlugin";
	/** [Write] migrationhub-orchestrator:RetryWorkflowStep */
	static readonly RetryWorkflowStep =
		"migrationhub-orchestrator:RetryWorkflowStep";
	/** [Write] migrationhub-orchestrator:SendMessage */
	static readonly SendMessage = "migrationhub-orchestrator:SendMessage";
	/** [Write] migrationhub-orchestrator:StartWorkflow */
	static readonly StartWorkflow = "migrationhub-orchestrator:StartWorkflow";
	/** [Write] migrationhub-orchestrator:StopWorkflow */
	static readonly StopWorkflow = "migrationhub-orchestrator:StopWorkflow";
	/** [Tagging] migrationhub-orchestrator:TagResource */
	static readonly TagResource = "migrationhub-orchestrator:TagResource";
	/** [Tagging] migrationhub-orchestrator:UntagResource */
	static readonly UntagResource = "migrationhub-orchestrator:UntagResource";
	/** [Write] migrationhub-orchestrator:UpdateTemplate */
	static readonly UpdateTemplate = "migrationhub-orchestrator:UpdateTemplate";
	/** [Write] migrationhub-orchestrator:UpdateWorkflow */
	static readonly UpdateWorkflow = "migrationhub-orchestrator:UpdateWorkflow";
	/** [Write] migrationhub-orchestrator:UpdateWorkflowStep */
	static readonly UpdateWorkflowStep =
		"migrationhub-orchestrator:UpdateWorkflowStep";
	/** [Write] migrationhub-orchestrator:UpdateWorkflowStepGroup */
	static readonly UpdateWorkflowStepGroup =
		"migrationhub-orchestrator:UpdateWorkflowStepGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MigrationhubOrchestratorActions.actionGetMessage,
		MigrationhubOrchestratorActions.actionGetTemplate,
		MigrationhubOrchestratorActions.actionGetTemplateStep,
		MigrationhubOrchestratorActions.actionGetTemplateStepGroup,
		MigrationhubOrchestratorActions.actionGetWorkflow,
		MigrationhubOrchestratorActions.actionGetWorkflowStep,
		MigrationhubOrchestratorActions.actionGetWorkflowStepGroup,
		MigrationhubOrchestratorActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MigrationhubOrchestratorActions.CreateTemplate,
		MigrationhubOrchestratorActions.CreateWorkflow,
		MigrationhubOrchestratorActions.CreateWorkflowStep,
		MigrationhubOrchestratorActions.CreateWorkflowStepGroup,
		MigrationhubOrchestratorActions.DeleteTemplate,
		MigrationhubOrchestratorActions.DeleteWorkflow,
		MigrationhubOrchestratorActions.DeleteWorkflowStep,
		MigrationhubOrchestratorActions.DeleteWorkflowStepGroup,
		MigrationhubOrchestratorActions.RegisterPlugin,
		MigrationhubOrchestratorActions.RetryWorkflowStep,
		MigrationhubOrchestratorActions.SendMessage,
		MigrationhubOrchestratorActions.StartWorkflow,
		MigrationhubOrchestratorActions.StopWorkflow,
		MigrationhubOrchestratorActions.UpdateTemplate,
		MigrationhubOrchestratorActions.UpdateWorkflow,
		MigrationhubOrchestratorActions.UpdateWorkflowStep,
		MigrationhubOrchestratorActions.UpdateWorkflowStepGroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MigrationhubOrchestratorActions.ListPlugins,
		MigrationhubOrchestratorActions.ListTemplateStepGroups,
		MigrationhubOrchestratorActions.ListTemplateSteps,
		MigrationhubOrchestratorActions.ListTemplates,
		MigrationhubOrchestratorActions.ListWorkflowStepGroups,
		MigrationhubOrchestratorActions.ListWorkflowSteps,
		MigrationhubOrchestratorActions.ListWorkflows,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MigrationhubOrchestratorActions.TagResource,
		MigrationhubOrchestratorActions.UntagResource,
	];
}

/**
 * Properties for building a template ARN.
 */
export interface MigrationhubOrchestratorTemplateArnProps {
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
 * Parsed components of a template ARN.
 */
export interface MigrationhubOrchestratorTemplateArnComponents {
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
 * Properties for building a workflow ARN.
 */
export interface MigrationhubOrchestratorWorkflowArnProps {
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
 * Parsed components of a workflow ARN.
 */
export interface MigrationhubOrchestratorWorkflowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const TemplateArnRegex =
	/^arn:(?<partition>[^:]+):migrationhub-orchestrator:(?<region>[^:]*):(?<account>[^:]*):template\/(?<resourceId>[^:/?]+)$/;
const WorkflowArnRegex =
	/^arn:(?<partition>[^:]+):migrationhub-orchestrator:(?<region>[^:]*):(?<account>[^:]*):workflow\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for migrationhub-orchestrator resources.
 */
export class MigrationhubOrchestratorResources {
	/**
	 * Builds an ARN for the template resource.
	 */
	static template(props: MigrationhubOrchestratorTemplateArnProps): string {
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
	static parseTemplateArn(
		arn: string,
	): MigrationhubOrchestratorTemplateArnComponents {
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
	static workflow(props: MigrationhubOrchestratorWorkflowArnProps): string {
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
	static parseWorkflowArn(
		arn: string,
	): MigrationhubOrchestratorWorkflowArnComponents {
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
	static readonly CreateTemplate: string[] = [
		"migrationhub-orchestrator:CreateTemplate",
		"migrationhub-orchestrator:TagResource",
	];
	/** IAM actions required for the CreateWorkflow API call. */
	static readonly CreateWorkflow: string[] = [
		"migrationhub-orchestrator:CreateWorkflow",
		"migrationhub-orchestrator:TagResource",
	];
	/** IAM actions required for the CreateWorkflowStep API call. */
	static readonly CreateWorkflowStep: string[] = [
		"migrationhub-orchestrator:CreateWorkflowStep",
	];
	/** IAM actions required for the CreateWorkflowStepGroup API call. */
	static readonly CreateWorkflowStepGroup: string[] = [
		"migrationhub-orchestrator:CreateWorkflowStepGroup",
	];
	/** IAM actions required for the DeleteTemplate API call. */
	static readonly DeleteTemplate: string[] = [
		"migrationhub-orchestrator:DeleteTemplate",
	];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DeleteWorkflow: string[] = [
		"migrationhub-orchestrator:DeleteWorkflow",
	];
	/** IAM actions required for the DeleteWorkflowStep API call. */
	static readonly DeleteWorkflowStep: string[] = [
		"migrationhub-orchestrator:DeleteWorkflowStep",
	];
	/** IAM actions required for the DeleteWorkflowStepGroup API call. */
	static readonly DeleteWorkflowStepGroup: string[] = [
		"migrationhub-orchestrator:DeleteWorkflowStepGroup",
	];
	/** IAM actions required for the GetTemplate API call. */
	static readonly opGetTemplate: string[] = [
		"migrationhub-orchestrator:GetTemplate",
	];
	/** IAM actions required for the GetTemplateStep API call. */
	static readonly opGetTemplateStep: string[] = [
		"migrationhub-orchestrator:GetTemplateStep",
	];
	/** IAM actions required for the GetTemplateStepGroup API call. */
	static readonly opGetTemplateStepGroup: string[] = [
		"migrationhub-orchestrator:GetTemplateStepGroup",
	];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly opGetWorkflow: string[] = [
		"migrationhub-orchestrator:GetWorkflow",
	];
	/** IAM actions required for the GetWorkflowStep API call. */
	static readonly opGetWorkflowStep: string[] = [
		"migrationhub-orchestrator:GetWorkflowStep",
	];
	/** IAM actions required for the GetWorkflowStepGroup API call. */
	static readonly opGetWorkflowStepGroup: string[] = [
		"migrationhub-orchestrator:GetWorkflowStepGroup",
	];
	/** IAM actions required for the ListPlugins API call. */
	static readonly ListPlugins: string[] = [
		"migrationhub-orchestrator:ListPlugins",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"migrationhub-orchestrator:ListTagsForResource",
	];
	/** IAM actions required for the ListTemplateStepGroups API call. */
	static readonly ListTemplateStepGroups: string[] = [
		"migrationhub-orchestrator:ListTemplateStepGroups",
	];
	/** IAM actions required for the ListTemplateSteps API call. */
	static readonly ListTemplateSteps: string[] = [
		"migrationhub-orchestrator:ListTemplateSteps",
	];
	/** IAM actions required for the ListTemplates API call. */
	static readonly ListTemplates: string[] = [
		"migrationhub-orchestrator:ListTemplates",
	];
	/** IAM actions required for the ListWorkflowStepGroups API call. */
	static readonly ListWorkflowStepGroups: string[] = [
		"migrationhub-orchestrator:ListWorkflowStepGroups",
	];
	/** IAM actions required for the ListWorkflowSteps API call. */
	static readonly ListWorkflowSteps: string[] = [
		"migrationhub-orchestrator:ListWorkflowSteps",
	];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly ListWorkflows: string[] = [
		"migrationhub-orchestrator:ListWorkflows",
	];
	/** IAM actions required for the RetryWorkflowStep API call. */
	static readonly RetryWorkflowStep: string[] = [
		"migrationhub-orchestrator:RetryWorkflowStep",
	];
	/** IAM actions required for the StartWorkflow API call. */
	static readonly StartWorkflow: string[] = [
		"migrationhub-orchestrator:StartWorkflow",
	];
	/** IAM actions required for the StopWorkflow API call. */
	static readonly StopWorkflow: string[] = [
		"migrationhub-orchestrator:StopWorkflow",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"migrationhub-orchestrator:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"migrationhub-orchestrator:UntagResource",
	];
	/** IAM actions required for the UpdateTemplate API call. */
	static readonly UpdateTemplate: string[] = [];
	/** IAM actions required for the UpdateWorkflow API call. */
	static readonly UpdateWorkflow: string[] = [
		"migrationhub-orchestrator:UpdateWorkflow",
	];
	/** IAM actions required for the UpdateWorkflowStep API call. */
	static readonly UpdateWorkflowStep: string[] = [
		"migrationhub-orchestrator:UpdateWorkflowStep",
	];
	/** IAM actions required for the UpdateWorkflowStepGroup API call. */
	static readonly UpdateWorkflowStepGroup: string[] = [
		"migrationhub-orchestrator:UpdateWorkflowStepGroup",
	];
}

/**
 * Condition key constants and builders for migrationhub-orchestrator.
 */
export class MigrationhubOrchestratorConditions {
	/** Condition keys applicable to the CreateWorkflow action. */
	static readonly CreateWorkflowConditionKeys: string[] = [
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
