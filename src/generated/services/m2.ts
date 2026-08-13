// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/m2.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the m2 service.
 */
export class M2Actions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "m2";

	/** [Write] m2:CancelBatchJobExecution */
	static readonly CancelBatchJobExecution = "m2:CancelBatchJobExecution";
	/** [Write] m2:CreateApplication */
	static readonly CreateApplication = "m2:CreateApplication";
	/** [Write] m2:CreateDataSetExportTask */
	static readonly CreateDataSetExportTask = "m2:CreateDataSetExportTask";
	/** [Write] m2:CreateDataSetImportTask */
	static readonly CreateDataSetImportTask = "m2:CreateDataSetImportTask";
	/** [Write] m2:CreateDeployment */
	static readonly CreateDeployment = "m2:CreateDeployment";
	/** [Write] m2:CreateEnvironment */
	static readonly CreateEnvironment = "m2:CreateEnvironment";
	/** [Write] m2:DeleteApplication */
	static readonly DeleteApplication = "m2:DeleteApplication";
	/** [Write] m2:DeleteApplicationFromEnvironment */
	static readonly DeleteApplicationFromEnvironment =
		"m2:DeleteApplicationFromEnvironment";
	/** [Write] m2:DeleteEnvironment */
	static readonly DeleteEnvironment = "m2:DeleteEnvironment";
	/** [Read] m2:GetApplication */
	static readonly actionGetApplication = "m2:GetApplication";
	/** [Read] m2:GetApplicationVersion */
	static readonly actionGetApplicationVersion = "m2:GetApplicationVersion";
	/** [Read] m2:GetBatchJobExecution */
	static readonly actionGetBatchJobExecution = "m2:GetBatchJobExecution";
	/** [Read] m2:GetDataSetDetails */
	static readonly actionGetDataSetDetails = "m2:GetDataSetDetails";
	/** [Read] m2:GetDataSetExportTask */
	static readonly actionGetDataSetExportTask = "m2:GetDataSetExportTask";
	/** [Read] m2:GetDataSetImportTask */
	static readonly actionGetDataSetImportTask = "m2:GetDataSetImportTask";
	/** [Read] m2:GetDeployment */
	static readonly actionGetDeployment = "m2:GetDeployment";
	/** [Read] m2:GetEnvironment */
	static readonly actionGetEnvironment = "m2:GetEnvironment";
	/** [Read] m2:GetSignedBluinsightsUrl */
	static readonly actionGetSignedBluinsightsUrl = "m2:GetSignedBluinsightsUrl";
	/** [Read] m2:ListApplicationVersions */
	static readonly ListApplicationVersions = "m2:ListApplicationVersions";
	/** [List] m2:ListApplications */
	static readonly ListApplications = "m2:ListApplications";
	/** [Read] m2:ListBatchJobDefinitions */
	static readonly ListBatchJobDefinitions = "m2:ListBatchJobDefinitions";
	/** [Read] m2:ListBatchJobExecutions */
	static readonly ListBatchJobExecutions = "m2:ListBatchJobExecutions";
	/** [Read] m2:ListBatchJobRestartPoints */
	static readonly ListBatchJobRestartPoints = "m2:ListBatchJobRestartPoints";
	/** [Read] m2:ListDataSetExportHistory */
	static readonly ListDataSetExportHistory = "m2:ListDataSetExportHistory";
	/** [Read] m2:ListDataSetImportHistory */
	static readonly ListDataSetImportHistory = "m2:ListDataSetImportHistory";
	/** [Read] m2:ListDataSets */
	static readonly ListDataSets = "m2:ListDataSets";
	/** [Read] m2:ListDeployments */
	static readonly ListDeployments = "m2:ListDeployments";
	/** [Read] m2:ListEngineVersions */
	static readonly ListEngineVersions = "m2:ListEngineVersions";
	/** [List] m2:ListEnvironments */
	static readonly ListEnvironments = "m2:ListEnvironments";
	/** [Read] m2:ListTagsForResource */
	static readonly ListTagsForResource = "m2:ListTagsForResource";
	/** [Write] m2:StartApplication */
	static readonly StartApplication = "m2:StartApplication";
	/** [Write] m2:StartBatchJob */
	static readonly StartBatchJob = "m2:StartBatchJob";
	/** [Write] m2:StopApplication */
	static readonly StopApplication = "m2:StopApplication";
	/** [Tagging] m2:TagResource */
	static readonly TagResource = "m2:TagResource";
	/** [Tagging] m2:UntagResource */
	static readonly UntagResource = "m2:UntagResource";
	/** [Write] m2:UpdateApplication */
	static readonly UpdateApplication = "m2:UpdateApplication";
	/** [Write] m2:UpdateEnvironment */
	static readonly UpdateEnvironment = "m2:UpdateEnvironment";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		M2Actions.actionGetApplication,
		M2Actions.actionGetApplicationVersion,
		M2Actions.actionGetBatchJobExecution,
		M2Actions.actionGetDataSetDetails,
		M2Actions.actionGetDataSetExportTask,
		M2Actions.actionGetDataSetImportTask,
		M2Actions.actionGetDeployment,
		M2Actions.actionGetEnvironment,
		M2Actions.actionGetSignedBluinsightsUrl,
		M2Actions.ListApplicationVersions,
		M2Actions.ListBatchJobDefinitions,
		M2Actions.ListBatchJobExecutions,
		M2Actions.ListBatchJobRestartPoints,
		M2Actions.ListDataSetExportHistory,
		M2Actions.ListDataSetImportHistory,
		M2Actions.ListDataSets,
		M2Actions.ListDeployments,
		M2Actions.ListEngineVersions,
		M2Actions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		M2Actions.CancelBatchJobExecution,
		M2Actions.CreateApplication,
		M2Actions.CreateDataSetExportTask,
		M2Actions.CreateDataSetImportTask,
		M2Actions.CreateDeployment,
		M2Actions.CreateEnvironment,
		M2Actions.DeleteApplication,
		M2Actions.DeleteApplicationFromEnvironment,
		M2Actions.DeleteEnvironment,
		M2Actions.StartApplication,
		M2Actions.StartBatchJob,
		M2Actions.StopApplication,
		M2Actions.UpdateApplication,
		M2Actions.UpdateEnvironment,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		M2Actions.ListApplications,
		M2Actions.ListEnvironments,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		M2Actions.TagResource,
		M2Actions.UntagResource,
	];
}

/**
 * Properties for building a Application ARN.
 */
export interface M2ApplicationArnProps {
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
 * Parsed components of a Application ARN.
 */
export interface M2ApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a Environment ARN.
 */
export interface M2EnvironmentArnProps {
	/** The EnvironmentId component of the ARN. */
	readonly environmentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Environment ARN.
 */
export interface M2EnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):m2:(?<region>[^:]*):(?<account>[^:]*):app\/(?<applicationId>[^:/?]+)$/;
const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):m2:(?<region>[^:]*):(?<account>[^:]*):env\/(?<environmentId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for m2 resources.
 */
export class M2Resources {
	/**
	 * Builds an ARN for the Application resource.
	 */
	static application(props: M2ApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:m2:${props.region ?? "*"}:${props.account ?? "*"}:app/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a Application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): M2ApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the Environment resource.
	 */
	static environment(props: M2EnvironmentArnProps): string {
		return `arn:${props.partition ?? "aws"}:m2:${props.region ?? "*"}:${props.account ?? "*"}:env/${props.environmentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Environment resource.
	 */
	static isValidEnvironmentArn(arn: string): boolean {
		return EnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a Environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentArn(arn: string): M2EnvironmentArnComponents {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for m2.
 */
export class M2Operations {
	/** IAM actions required for the CancelBatchJobExecution API call. */
	static readonly CancelBatchJobExecution: string[] = [
		"m2:CancelBatchJobExecution",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [
		"m2:CreateApplication",
		"iam:PassRole",
		"m2:TagResource",
	];
	/** IAM actions required for the CreateDataSetExportTask API call. */
	static readonly CreateDataSetExportTask: string[] = [
		"m2:CreateDataSetExportTask",
	];
	/** IAM actions required for the CreateDataSetImportTask API call. */
	static readonly CreateDataSetImportTask: string[] = [
		"m2:CreateDataSetImportTask",
	];
	/** IAM actions required for the CreateDeployment API call. */
	static readonly CreateDeployment: string[] = ["m2:CreateDeployment"];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CreateEnvironment: string[] = [
		"m2:CreateEnvironment",
		"m2:TagResource",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = ["m2:DeleteApplication"];
	/** IAM actions required for the DeleteApplicationFromEnvironment API call. */
	static readonly DeleteApplicationFromEnvironment: string[] = [
		"m2:DeleteApplicationFromEnvironment",
	];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DeleteEnvironment: string[] = ["m2:DeleteEnvironment"];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = ["m2:GetApplication"];
	/** IAM actions required for the GetApplicationVersion API call. */
	static readonly opGetApplicationVersion: string[] = [
		"m2:GetApplicationVersion",
	];
	/** IAM actions required for the GetBatchJobExecution API call. */
	static readonly opGetBatchJobExecution: string[] = [
		"m2:GetBatchJobExecution",
	];
	/** IAM actions required for the GetDataSetDetails API call. */
	static readonly opGetDataSetDetails: string[] = ["m2:GetDataSetDetails"];
	/** IAM actions required for the GetDataSetExportTask API call. */
	static readonly opGetDataSetExportTask: string[] = [
		"m2:GetDataSetExportTask",
	];
	/** IAM actions required for the GetDataSetImportTask API call. */
	static readonly opGetDataSetImportTask: string[] = [
		"m2:GetDataSetImportTask",
	];
	/** IAM actions required for the GetDeployment API call. */
	static readonly opGetDeployment: string[] = ["m2:GetDeployment"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly opGetEnvironment: string[] = ["m2:GetEnvironment"];
	/** IAM actions required for the GetSignedBluinsightsUrl API call. */
	static readonly opGetSignedBluinsightsUrl: string[] = [
		"m2:GetSignedBluinsightsUrl",
	];
	/** IAM actions required for the ListApplicationVersions API call. */
	static readonly ListApplicationVersions: string[] = [
		"m2:ListApplicationVersions",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = ["m2:ListApplications"];
	/** IAM actions required for the ListBatchJobDefinitions API call. */
	static readonly ListBatchJobDefinitions: string[] = [
		"m2:ListBatchJobDefinitions",
	];
	/** IAM actions required for the ListBatchJobExecutions API call. */
	static readonly ListBatchJobExecutions: string[] = [
		"m2:ListBatchJobExecutions",
	];
	/** IAM actions required for the ListBatchJobRestartPoints API call. */
	static readonly ListBatchJobRestartPoints: string[] = [
		"m2:ListBatchJobRestartPoints",
	];
	/** IAM actions required for the ListDataSetExportHistory API call. */
	static readonly ListDataSetExportHistory: string[] = [
		"m2:ListDataSetExportHistory",
	];
	/** IAM actions required for the ListDataSetImportHistory API call. */
	static readonly ListDataSetImportHistory: string[] = [
		"m2:ListDataSetImportHistory",
	];
	/** IAM actions required for the ListDataSets API call. */
	static readonly ListDataSets: string[] = ["m2:ListDataSets"];
	/** IAM actions required for the ListDeployments API call. */
	static readonly ListDeployments: string[] = ["m2:ListDeployments"];
	/** IAM actions required for the ListEngineVersions API call. */
	static readonly ListEngineVersions: string[] = ["m2:ListEngineVersions"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly ListEnvironments: string[] = ["m2:ListEnvironments"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["m2:ListTagsForResource"];
	/** IAM actions required for the StartApplication API call. */
	static readonly StartApplication: string[] = ["m2:StartApplication"];
	/** IAM actions required for the StartBatchJob API call. */
	static readonly StartBatchJob: string[] = ["m2:StartBatchJob"];
	/** IAM actions required for the StopApplication API call. */
	static readonly StopApplication: string[] = ["m2:StopApplication"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["m2:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["m2:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = ["m2:UpdateApplication"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UpdateEnvironment: string[] = ["m2:UpdateEnvironment"];
}

/**
 * Condition key constants and builders for m2.
 */
export class M2Conditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CreateEnvironmentConditionKeys: string[] = [
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
