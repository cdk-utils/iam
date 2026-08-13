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
	static readonly CreateWorkflow = "airflow-serverless:CreateWorkflow";
	/** [Write] airflow-serverless:DeleteWorkflow */
	static readonly DeleteWorkflow = "airflow-serverless:DeleteWorkflow";
	/** [Read] airflow-serverless:GetTaskInstance */
	static readonly actionGetTaskInstance = "airflow-serverless:GetTaskInstance";
	/** [Read] airflow-serverless:GetWorkflow */
	static readonly actionGetWorkflow = "airflow-serverless:GetWorkflow";
	/** [Read] airflow-serverless:GetWorkflowRun */
	static readonly actionGetWorkflowRun = "airflow-serverless:GetWorkflowRun";
	/** [Read] airflow-serverless:ListTagsForResource */
	static readonly ListTagsForResource =
		"airflow-serverless:ListTagsForResource";
	/** [List] airflow-serverless:ListTaskInstances */
	static readonly ListTaskInstances = "airflow-serverless:ListTaskInstances";
	/** [List] airflow-serverless:ListWorkflowRuns */
	static readonly ListWorkflowRuns = "airflow-serverless:ListWorkflowRuns";
	/** [List] airflow-serverless:ListWorkflowVersions */
	static readonly ListWorkflowVersions =
		"airflow-serverless:ListWorkflowVersions";
	/** [List] airflow-serverless:ListWorkflows */
	static readonly ListWorkflows = "airflow-serverless:ListWorkflows";
	/** [Write] airflow-serverless:StartWorkflowRun */
	static readonly StartWorkflowRun = "airflow-serverless:StartWorkflowRun";
	/** [Write] airflow-serverless:StopWorkflowRun */
	static readonly StopWorkflowRun = "airflow-serverless:StopWorkflowRun";
	/** [Tagging] airflow-serverless:TagResource */
	static readonly TagResource = "airflow-serverless:TagResource";
	/** [Tagging] airflow-serverless:UntagResource */
	static readonly UntagResource = "airflow-serverless:UntagResource";
	/** [Write] airflow-serverless:UpdateWorkflow */
	static readonly UpdateWorkflow = "airflow-serverless:UpdateWorkflow";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AirflowServerlessActions.actionGetTaskInstance,
		AirflowServerlessActions.actionGetWorkflow,
		AirflowServerlessActions.actionGetWorkflowRun,
		AirflowServerlessActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AirflowServerlessActions.CreateWorkflow,
		AirflowServerlessActions.DeleteWorkflow,
		AirflowServerlessActions.StartWorkflowRun,
		AirflowServerlessActions.StopWorkflowRun,
		AirflowServerlessActions.UpdateWorkflow,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AirflowServerlessActions.ListTaskInstances,
		AirflowServerlessActions.ListWorkflowRuns,
		AirflowServerlessActions.ListWorkflowVersions,
		AirflowServerlessActions.ListWorkflows,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AirflowServerlessActions.TagResource,
		AirflowServerlessActions.UntagResource,
	];
}

/**
 * Properties for building a Workflow ARN.
 */
export interface AirflowServerlessWorkflowArnProps {
	/** The WorkflowId component of the ARN. */
	readonly workflowId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Workflow ARN.
 */
export interface AirflowServerlessWorkflowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkflowId component. */
	readonly workflowId: string;
}

const WorkflowArnRegex =
	/^arn:(?<partition>[^:]+):airflow-serverless:(?<region>[^:]*):(?<account>[^:]*):workflow\/(?<workflowId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for airflow-serverless resources.
 */
export class AirflowServerlessResources {
	/**
	 * Builds an ARN for the Workflow resource.
	 */
	static workflow(props: AirflowServerlessWorkflowArnProps): string {
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
	static parseWorkflowArn(arn: string): AirflowServerlessWorkflowArnComponents {
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
	static readonly CreateWorkflow: string[] = [
		"airflow-serverless:CreateWorkflow",
		"iam:PassRole",
		"airflow-serverless:TagResource",
	];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DeleteWorkflow: string[] = [
		"airflow-serverless:DeleteWorkflow",
	];
	/** IAM actions required for the GetTaskInstance API call. */
	static readonly opGetTaskInstance: string[] = [
		"airflow-serverless:GetTaskInstance",
	];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly opGetWorkflow: string[] = ["airflow-serverless:GetWorkflow"];
	/** IAM actions required for the GetWorkflowRun API call. */
	static readonly opGetWorkflowRun: string[] = [
		"airflow-serverless:GetWorkflowRun",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"airflow-serverless:ListTagsForResource",
	];
	/** IAM actions required for the ListTaskInstances API call. */
	static readonly ListTaskInstances: string[] = [
		"airflow-serverless:ListTaskInstances",
	];
	/** IAM actions required for the ListWorkflowRuns API call. */
	static readonly ListWorkflowRuns: string[] = [
		"airflow-serverless:ListWorkflowRuns",
	];
	/** IAM actions required for the ListWorkflowVersions API call. */
	static readonly ListWorkflowVersions: string[] = [
		"airflow-serverless:ListWorkflowVersions",
	];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly ListWorkflows: string[] = [
		"airflow-serverless:ListWorkflows",
	];
	/** IAM actions required for the StartWorkflowRun API call. */
	static readonly StartWorkflowRun: string[] = [
		"airflow-serverless:StartWorkflowRun",
	];
	/** IAM actions required for the StopWorkflowRun API call. */
	static readonly StopWorkflowRun: string[] = [
		"airflow-serverless:StopWorkflowRun",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["airflow-serverless:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"airflow-serverless:UntagResource",
	];
	/** IAM actions required for the UpdateWorkflow API call. */
	static readonly UpdateWorkflow: string[] = [
		"iam:PassRole",
		"airflow-serverless:UpdateWorkflow",
	];
}

/**
 * Condition key constants and builders for airflow-serverless.
 */
export class AirflowServerlessConditions {
	/** Condition keys applicable to the CreateWorkflow action. */
	static readonly CreateWorkflowConditionKeys: string[] = [
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
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

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
