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
	static readonly CANCEL_BATCH_JOB_EXECUTION = "m2:CancelBatchJobExecution";
	/** [Write] m2:CreateApplication */
	static readonly CREATE_APPLICATION = "m2:CreateApplication";
	/** [Write] m2:CreateDataSetExportTask */
	static readonly CREATE_DATA_SET_EXPORT_TASK = "m2:CreateDataSetExportTask";
	/** [Write] m2:CreateDataSetImportTask */
	static readonly CREATE_DATA_SET_IMPORT_TASK = "m2:CreateDataSetImportTask";
	/** [Write] m2:CreateDeployment */
	static readonly CREATE_DEPLOYMENT = "m2:CreateDeployment";
	/** [Write] m2:CreateEnvironment */
	static readonly CREATE_ENVIRONMENT = "m2:CreateEnvironment";
	/** [Write] m2:DeleteApplication */
	static readonly DELETE_APPLICATION = "m2:DeleteApplication";
	/** [Write] m2:DeleteApplicationFromEnvironment */
	static readonly DELETE_APPLICATION_FROM_ENVIRONMENT =
		"m2:DeleteApplicationFromEnvironment";
	/** [Write] m2:DeleteEnvironment */
	static readonly DELETE_ENVIRONMENT = "m2:DeleteEnvironment";
	/** [Read] m2:GetApplication */
	static readonly GET_APPLICATION = "m2:GetApplication";
	/** [Read] m2:GetApplicationVersion */
	static readonly GET_APPLICATION_VERSION = "m2:GetApplicationVersion";
	/** [Read] m2:GetBatchJobExecution */
	static readonly GET_BATCH_JOB_EXECUTION = "m2:GetBatchJobExecution";
	/** [Read] m2:GetDataSetDetails */
	static readonly GET_DATA_SET_DETAILS = "m2:GetDataSetDetails";
	/** [Read] m2:GetDataSetExportTask */
	static readonly GET_DATA_SET_EXPORT_TASK = "m2:GetDataSetExportTask";
	/** [Read] m2:GetDataSetImportTask */
	static readonly GET_DATA_SET_IMPORT_TASK = "m2:GetDataSetImportTask";
	/** [Read] m2:GetDeployment */
	static readonly GET_DEPLOYMENT = "m2:GetDeployment";
	/** [Read] m2:GetEnvironment */
	static readonly GET_ENVIRONMENT = "m2:GetEnvironment";
	/** [Read] m2:GetSignedBluinsightsUrl */
	static readonly GET_SIGNED_BLUINSIGHTS_URL = "m2:GetSignedBluinsightsUrl";
	/** [Read] m2:ListApplicationVersions */
	static readonly LIST_APPLICATION_VERSIONS = "m2:ListApplicationVersions";
	/** [List] m2:ListApplications */
	static readonly LIST_APPLICATIONS = "m2:ListApplications";
	/** [Read] m2:ListBatchJobDefinitions */
	static readonly LIST_BATCH_JOB_DEFINITIONS = "m2:ListBatchJobDefinitions";
	/** [Read] m2:ListBatchJobExecutions */
	static readonly LIST_BATCH_JOB_EXECUTIONS = "m2:ListBatchJobExecutions";
	/** [Read] m2:ListBatchJobRestartPoints */
	static readonly LIST_BATCH_JOB_RESTART_POINTS =
		"m2:ListBatchJobRestartPoints";
	/** [Read] m2:ListDataSetExportHistory */
	static readonly LIST_DATA_SET_EXPORT_HISTORY = "m2:ListDataSetExportHistory";
	/** [Read] m2:ListDataSetImportHistory */
	static readonly LIST_DATA_SET_IMPORT_HISTORY = "m2:ListDataSetImportHistory";
	/** [Read] m2:ListDataSets */
	static readonly LIST_DATA_SETS = "m2:ListDataSets";
	/** [Read] m2:ListDeployments */
	static readonly LIST_DEPLOYMENTS = "m2:ListDeployments";
	/** [Read] m2:ListEngineVersions */
	static readonly LIST_ENGINE_VERSIONS = "m2:ListEngineVersions";
	/** [List] m2:ListEnvironments */
	static readonly LIST_ENVIRONMENTS = "m2:ListEnvironments";
	/** [Read] m2:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "m2:ListTagsForResource";
	/** [Write] m2:StartApplication */
	static readonly START_APPLICATION = "m2:StartApplication";
	/** [Write] m2:StartBatchJob */
	static readonly START_BATCH_JOB = "m2:StartBatchJob";
	/** [Write] m2:StopApplication */
	static readonly STOP_APPLICATION = "m2:StopApplication";
	/** [Tagging] m2:TagResource */
	static readonly TAG_RESOURCE = "m2:TagResource";
	/** [Tagging] m2:UntagResource */
	static readonly UNTAG_RESOURCE = "m2:UntagResource";
	/** [Write] m2:UpdateApplication */
	static readonly UPDATE_APPLICATION = "m2:UpdateApplication";
	/** [Write] m2:UpdateEnvironment */
	static readonly UPDATE_ENVIRONMENT = "m2:UpdateEnvironment";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		M2Actions.GET_APPLICATION,
		M2Actions.GET_APPLICATION_VERSION,
		M2Actions.GET_BATCH_JOB_EXECUTION,
		M2Actions.GET_DATA_SET_DETAILS,
		M2Actions.GET_DATA_SET_EXPORT_TASK,
		M2Actions.GET_DATA_SET_IMPORT_TASK,
		M2Actions.GET_DEPLOYMENT,
		M2Actions.GET_ENVIRONMENT,
		M2Actions.GET_SIGNED_BLUINSIGHTS_URL,
		M2Actions.LIST_APPLICATION_VERSIONS,
		M2Actions.LIST_BATCH_JOB_DEFINITIONS,
		M2Actions.LIST_BATCH_JOB_EXECUTIONS,
		M2Actions.LIST_BATCH_JOB_RESTART_POINTS,
		M2Actions.LIST_DATA_SET_EXPORT_HISTORY,
		M2Actions.LIST_DATA_SET_IMPORT_HISTORY,
		M2Actions.LIST_DATA_SETS,
		M2Actions.LIST_DEPLOYMENTS,
		M2Actions.LIST_ENGINE_VERSIONS,
		M2Actions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		M2Actions.CANCEL_BATCH_JOB_EXECUTION,
		M2Actions.CREATE_APPLICATION,
		M2Actions.CREATE_DATA_SET_EXPORT_TASK,
		M2Actions.CREATE_DATA_SET_IMPORT_TASK,
		M2Actions.CREATE_DEPLOYMENT,
		M2Actions.CREATE_ENVIRONMENT,
		M2Actions.DELETE_APPLICATION,
		M2Actions.DELETE_APPLICATION_FROM_ENVIRONMENT,
		M2Actions.DELETE_ENVIRONMENT,
		M2Actions.START_APPLICATION,
		M2Actions.START_BATCH_JOB,
		M2Actions.STOP_APPLICATION,
		M2Actions.UPDATE_APPLICATION,
		M2Actions.UPDATE_ENVIRONMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		M2Actions.LIST_APPLICATIONS,
		M2Actions.LIST_ENVIRONMENTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		M2Actions.TAG_RESOURCE,
		M2Actions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):m2:(?<region>[^:]*):(?<account>[^:]*):app/(?<applicationId>[^:/?]+)$",
);
const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):m2:(?<region>[^:]*):(?<account>[^:]*):env/(?<environmentId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for m2 resources.
 */
export class M2Resources {
	/**
	 * Builds an ARN for the Application resource.
	 */
	static application(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
	} {
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
	static environment(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
	} {
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
	static readonly CANCEL_BATCH_JOB_EXECUTION: string[] = [
		"m2:CancelBatchJobExecution",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"m2:CreateApplication",
		"iam:PassRole",
		"m2:TagResource",
	];
	/** IAM actions required for the CreateDataSetExportTask API call. */
	static readonly CREATE_DATA_SET_EXPORT_TASK: string[] = [
		"m2:CreateDataSetExportTask",
	];
	/** IAM actions required for the CreateDataSetImportTask API call. */
	static readonly CREATE_DATA_SET_IMPORT_TASK: string[] = [
		"m2:CreateDataSetImportTask",
	];
	/** IAM actions required for the CreateDeployment API call. */
	static readonly CREATE_DEPLOYMENT: string[] = ["m2:CreateDeployment"];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CREATE_ENVIRONMENT: string[] = [
		"m2:CreateEnvironment",
		"m2:TagResource",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = ["m2:DeleteApplication"];
	/** IAM actions required for the DeleteApplicationFromEnvironment API call. */
	static readonly DELETE_APPLICATION_FROM_ENVIRONMENT: string[] = [
		"m2:DeleteApplicationFromEnvironment",
	];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DELETE_ENVIRONMENT: string[] = ["m2:DeleteEnvironment"];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = ["m2:GetApplication"];
	/** IAM actions required for the GetApplicationVersion API call. */
	static readonly GET_APPLICATION_VERSION: string[] = [
		"m2:GetApplicationVersion",
	];
	/** IAM actions required for the GetBatchJobExecution API call. */
	static readonly GET_BATCH_JOB_EXECUTION: string[] = [
		"m2:GetBatchJobExecution",
	];
	/** IAM actions required for the GetDataSetDetails API call. */
	static readonly GET_DATA_SET_DETAILS: string[] = ["m2:GetDataSetDetails"];
	/** IAM actions required for the GetDataSetExportTask API call. */
	static readonly GET_DATA_SET_EXPORT_TASK: string[] = [
		"m2:GetDataSetExportTask",
	];
	/** IAM actions required for the GetDataSetImportTask API call. */
	static readonly GET_DATA_SET_IMPORT_TASK: string[] = [
		"m2:GetDataSetImportTask",
	];
	/** IAM actions required for the GetDeployment API call. */
	static readonly GET_DEPLOYMENT: string[] = ["m2:GetDeployment"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly GET_ENVIRONMENT: string[] = ["m2:GetEnvironment"];
	/** IAM actions required for the GetSignedBluinsightsUrl API call. */
	static readonly GET_SIGNED_BLUINSIGHTS_URL: string[] = [
		"m2:GetSignedBluinsightsUrl",
	];
	/** IAM actions required for the ListApplicationVersions API call. */
	static readonly LIST_APPLICATION_VERSIONS: string[] = [
		"m2:ListApplicationVersions",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = ["m2:ListApplications"];
	/** IAM actions required for the ListBatchJobDefinitions API call. */
	static readonly LIST_BATCH_JOB_DEFINITIONS: string[] = [
		"m2:ListBatchJobDefinitions",
	];
	/** IAM actions required for the ListBatchJobExecutions API call. */
	static readonly LIST_BATCH_JOB_EXECUTIONS: string[] = [
		"m2:ListBatchJobExecutions",
	];
	/** IAM actions required for the ListBatchJobRestartPoints API call. */
	static readonly LIST_BATCH_JOB_RESTART_POINTS: string[] = [
		"m2:ListBatchJobRestartPoints",
	];
	/** IAM actions required for the ListDataSetExportHistory API call. */
	static readonly LIST_DATA_SET_EXPORT_HISTORY: string[] = [
		"m2:ListDataSetExportHistory",
	];
	/** IAM actions required for the ListDataSetImportHistory API call. */
	static readonly LIST_DATA_SET_IMPORT_HISTORY: string[] = [
		"m2:ListDataSetImportHistory",
	];
	/** IAM actions required for the ListDataSets API call. */
	static readonly LIST_DATA_SETS: string[] = ["m2:ListDataSets"];
	/** IAM actions required for the ListDeployments API call. */
	static readonly LIST_DEPLOYMENTS: string[] = ["m2:ListDeployments"];
	/** IAM actions required for the ListEngineVersions API call. */
	static readonly LIST_ENGINE_VERSIONS: string[] = ["m2:ListEngineVersions"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly LIST_ENVIRONMENTS: string[] = ["m2:ListEnvironments"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = ["m2:ListTagsForResource"];
	/** IAM actions required for the StartApplication API call. */
	static readonly START_APPLICATION: string[] = ["m2:StartApplication"];
	/** IAM actions required for the StartBatchJob API call. */
	static readonly START_BATCH_JOB: string[] = ["m2:StartBatchJob"];
	/** IAM actions required for the StopApplication API call. */
	static readonly STOP_APPLICATION: string[] = ["m2:StopApplication"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["m2:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["m2:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = ["m2:UpdateApplication"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UPDATE_ENVIRONMENT: string[] = ["m2:UpdateEnvironment"];
}

/**
 * Condition key constants and builders for m2.
 */
export class M2Conditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CREATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
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
