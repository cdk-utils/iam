// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/airflow-serverless.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the airflow-serverless service.
 */
export class AirflowServerlessActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "airflow-serverless";

	/** [Write] airflow-serverless:CreateWorkflow */
	static readonly CREATE_WORKFLOW = "airflow-serverless:CreateWorkflow";
	/** [Write] airflow-serverless:DeleteWorkflow */
	static readonly DELETE_WORKFLOW = "airflow-serverless:DeleteWorkflow";
	/** [Read] airflow-serverless:GetTaskInstance */
	static readonly GET_TASK_INSTANCE = "airflow-serverless:GetTaskInstance";
	/** [Read] airflow-serverless:GetWorkflow */
	static readonly GET_WORKFLOW = "airflow-serverless:GetWorkflow";
	/** [Read] airflow-serverless:GetWorkflowRun */
	static readonly GET_WORKFLOW_RUN = "airflow-serverless:GetWorkflowRun";
	/** [Read] airflow-serverless:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"airflow-serverless:ListTagsForResource";
	/** [List] airflow-serverless:ListTaskInstances */
	static readonly LIST_TASK_INSTANCES = "airflow-serverless:ListTaskInstances";
	/** [List] airflow-serverless:ListWorkflowRuns */
	static readonly LIST_WORKFLOW_RUNS = "airflow-serverless:ListWorkflowRuns";
	/** [List] airflow-serverless:ListWorkflowVersions */
	static readonly LIST_WORKFLOW_VERSIONS =
		"airflow-serverless:ListWorkflowVersions";
	/** [List] airflow-serverless:ListWorkflows */
	static readonly LIST_WORKFLOWS = "airflow-serverless:ListWorkflows";
	/** [Write] airflow-serverless:StartWorkflowRun */
	static readonly START_WORKFLOW_RUN = "airflow-serverless:StartWorkflowRun";
	/** [Write] airflow-serverless:StopWorkflowRun */
	static readonly STOP_WORKFLOW_RUN = "airflow-serverless:StopWorkflowRun";
	/** [Tagging] airflow-serverless:TagResource */
	static readonly TAG_RESOURCE = "airflow-serverless:TagResource";
	/** [Tagging] airflow-serverless:UntagResource */
	static readonly UNTAG_RESOURCE = "airflow-serverless:UntagResource";
	/** [Write] airflow-serverless:UpdateWorkflow */
	static readonly UPDATE_WORKFLOW = "airflow-serverless:UpdateWorkflow";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AirflowServerlessActions.GET_TASK_INSTANCE,
		AirflowServerlessActions.GET_WORKFLOW,
		AirflowServerlessActions.GET_WORKFLOW_RUN,
		AirflowServerlessActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AirflowServerlessActions.CREATE_WORKFLOW,
		AirflowServerlessActions.DELETE_WORKFLOW,
		AirflowServerlessActions.START_WORKFLOW_RUN,
		AirflowServerlessActions.STOP_WORKFLOW_RUN,
		AirflowServerlessActions.UPDATE_WORKFLOW,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AirflowServerlessActions.LIST_TASK_INSTANCES,
		AirflowServerlessActions.LIST_WORKFLOW_RUNS,
		AirflowServerlessActions.LIST_WORKFLOW_VERSIONS,
		AirflowServerlessActions.LIST_WORKFLOWS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AirflowServerlessActions.TAG_RESOURCE,
		AirflowServerlessActions.UNTAG_RESOURCE,
	];
}

const WorkflowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):airflow-serverless:(?<region>[^:]*):(?<account>[^:]*):workflow/(?<workflowId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for airflow-serverless resources.
 */
export class AirflowServerlessResources {
	/**
	 * Builds an ARN for the Workflow resource.
	 */
	static workflow(props: {
		/** The WorkflowId component of the ARN. */
		readonly workflowId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:airflow-serverless:${props.region ?? "*"}:${props.account ?? "*"}:workflow/${props.workflowId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Workflow resource.
	 */
	static isValidWorkflowArn(arn: string): boolean {
		return WorkflowArnRegex.test(arn);
	}

	/**
	 * Parses a Workflow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkflowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workflowId: string;
	} {
		const match = WorkflowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Workflow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workflowId: match.groups!.workflowId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for airflow-serverless.
 */
export class AirflowServerlessOperations {
	/** IAM actions required for the CreateWorkflow API call. */
	static readonly CREATE_WORKFLOW: string[] = [
		"airflow-serverless:CreateWorkflow",
		"iam:PassRole",
		"airflow-serverless:TagResource",
	];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DELETE_WORKFLOW: string[] = [
		"airflow-serverless:DeleteWorkflow",
	];
	/** IAM actions required for the GetTaskInstance API call. */
	static readonly GET_TASK_INSTANCE: string[] = [
		"airflow-serverless:GetTaskInstance",
	];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly GET_WORKFLOW: string[] = ["airflow-serverless:GetWorkflow"];
	/** IAM actions required for the GetWorkflowRun API call. */
	static readonly GET_WORKFLOW_RUN: string[] = [
		"airflow-serverless:GetWorkflowRun",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"airflow-serverless:ListTagsForResource",
	];
	/** IAM actions required for the ListTaskInstances API call. */
	static readonly LIST_TASK_INSTANCES: string[] = [
		"airflow-serverless:ListTaskInstances",
	];
	/** IAM actions required for the ListWorkflowRuns API call. */
	static readonly LIST_WORKFLOW_RUNS: string[] = [
		"airflow-serverless:ListWorkflowRuns",
	];
	/** IAM actions required for the ListWorkflowVersions API call. */
	static readonly LIST_WORKFLOW_VERSIONS: string[] = [
		"airflow-serverless:ListWorkflowVersions",
	];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly LIST_WORKFLOWS: string[] = [
		"airflow-serverless:ListWorkflows",
	];
	/** IAM actions required for the StartWorkflowRun API call. */
	static readonly START_WORKFLOW_RUN: string[] = [
		"airflow-serverless:StartWorkflowRun",
	];
	/** IAM actions required for the StopWorkflowRun API call. */
	static readonly STOP_WORKFLOW_RUN: string[] = [
		"airflow-serverless:StopWorkflowRun",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["airflow-serverless:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"airflow-serverless:UntagResource",
	];
	/** IAM actions required for the UpdateWorkflow API call. */
	static readonly UPDATE_WORKFLOW: string[] = [
		"iam:PassRole",
		"airflow-serverless:UpdateWorkflow",
	];
}

/**
 * Condition key constants and builders for airflow-serverless.
 */
export class AirflowServerlessConditions {
	/** Condition keys applicable to the CreateWorkflow action. */
	static readonly CREATE_WORKFLOW_CONDITION_KEYS: string[] = [
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
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

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
