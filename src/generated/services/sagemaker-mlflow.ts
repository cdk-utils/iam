// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sagemaker-mlflow.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sagemaker-mlflow service.
 */
export class SagemakerMlflowActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sagemaker-mlflow";

	/** [Read] sagemaker-mlflow:AccessUI */
	static readonly ACCESS_UI = "sagemaker-mlflow:AccessUI";
	/** [Write] sagemaker-mlflow:CreateExperiment */
	static readonly CREATE_EXPERIMENT = "sagemaker-mlflow:CreateExperiment";
	/** [Write] sagemaker-mlflow:CreateModelVersion */
	static readonly CREATE_MODEL_VERSION = "sagemaker-mlflow:CreateModelVersion";
	/** [Write] sagemaker-mlflow:CreateRegisteredModel */
	static readonly CREATE_REGISTERED_MODEL =
		"sagemaker-mlflow:CreateRegisteredModel";
	/** [Write] sagemaker-mlflow:CreateRun */
	static readonly CREATE_RUN = "sagemaker-mlflow:CreateRun";
	/** [Write] sagemaker-mlflow:DeleteExperiment */
	static readonly DELETE_EXPERIMENT = "sagemaker-mlflow:DeleteExperiment";
	/** [Write] sagemaker-mlflow:DeleteLoggedModel */
	static readonly DELETE_LOGGED_MODEL = "sagemaker-mlflow:DeleteLoggedModel";
	/** [Write] sagemaker-mlflow:DeleteLoggedModelTag */
	static readonly DELETE_LOGGED_MODEL_TAG =
		"sagemaker-mlflow:DeleteLoggedModelTag";
	/** [Write] sagemaker-mlflow:DeleteModelVersion */
	static readonly DELETE_MODEL_VERSION = "sagemaker-mlflow:DeleteModelVersion";
	/** [Write] sagemaker-mlflow:DeleteModelVersionTag */
	static readonly DELETE_MODEL_VERSION_TAG =
		"sagemaker-mlflow:DeleteModelVersionTag";
	/** [Write] sagemaker-mlflow:DeleteRegisteredModel */
	static readonly DELETE_REGISTERED_MODEL =
		"sagemaker-mlflow:DeleteRegisteredModel";
	/** [Write] sagemaker-mlflow:DeleteRegisteredModelAlias */
	static readonly DELETE_REGISTERED_MODEL_ALIAS =
		"sagemaker-mlflow:DeleteRegisteredModelAlias";
	/** [Write] sagemaker-mlflow:DeleteRegisteredModelTag */
	static readonly DELETE_REGISTERED_MODEL_TAG =
		"sagemaker-mlflow:DeleteRegisteredModelTag";
	/** [Write] sagemaker-mlflow:DeleteRun */
	static readonly DELETE_RUN = "sagemaker-mlflow:DeleteRun";
	/** [Write] sagemaker-mlflow:DeleteTag */
	static readonly DELETE_TAG = "sagemaker-mlflow:DeleteTag";
	/** [Write] sagemaker-mlflow:DeleteTraceTag */
	static readonly DELETE_TRACE_TAG = "sagemaker-mlflow:DeleteTraceTag";
	/** [Write] sagemaker-mlflow:DeleteTraces */
	static readonly DELETE_TRACES = "sagemaker-mlflow:DeleteTraces";
	/** [Write] sagemaker-mlflow:EndTrace */
	static readonly END_TRACE = "sagemaker-mlflow:EndTrace";
	/** [Write] sagemaker-mlflow:FinalizeLoggedModel */
	static readonly FINALIZE_LOGGED_MODEL =
		"sagemaker-mlflow:FinalizeLoggedModel";
	/** [Read] sagemaker-mlflow:GetDownloadURIForModelVersionArtifacts */
	static readonly GET_DOWNLOAD_URI_FOR_MODEL_VERSION_ARTIFACTS =
		"sagemaker-mlflow:GetDownloadURIForModelVersionArtifacts";
	/** [Read] sagemaker-mlflow:GetExperiment */
	static readonly GET_EXPERIMENT = "sagemaker-mlflow:GetExperiment";
	/** [Read] sagemaker-mlflow:GetExperimentByName */
	static readonly GET_EXPERIMENT_BY_NAME =
		"sagemaker-mlflow:GetExperimentByName";
	/** [List] sagemaker-mlflow:GetLatestModelVersions */
	static readonly GET_LATEST_MODEL_VERSIONS =
		"sagemaker-mlflow:GetLatestModelVersions";
	/** [Read] sagemaker-mlflow:GetLoggedModel */
	static readonly GET_LOGGED_MODEL = "sagemaker-mlflow:GetLoggedModel";
	/** [Read] sagemaker-mlflow:GetMetricHistory */
	static readonly GET_METRIC_HISTORY = "sagemaker-mlflow:GetMetricHistory";
	/** [Read] sagemaker-mlflow:GetModelVersion */
	static readonly GET_MODEL_VERSION = "sagemaker-mlflow:GetModelVersion";
	/** [Read] sagemaker-mlflow:GetModelVersionByAlias */
	static readonly GET_MODEL_VERSION_BY_ALIAS =
		"sagemaker-mlflow:GetModelVersionByAlias";
	/** [Read] sagemaker-mlflow:GetRegisteredModel */
	static readonly GET_REGISTERED_MODEL = "sagemaker-mlflow:GetRegisteredModel";
	/** [Read] sagemaker-mlflow:GetRun */
	static readonly GET_RUN = "sagemaker-mlflow:GetRun";
	/** [Read] sagemaker-mlflow:GetTraceInfo */
	static readonly GET_TRACE_INFO = "sagemaker-mlflow:GetTraceInfo";
	/** [List] sagemaker-mlflow:ListArtifacts */
	static readonly LIST_ARTIFACTS = "sagemaker-mlflow:ListArtifacts";
	/** [List] sagemaker-mlflow:ListLoggedModelArtifacts */
	static readonly LIST_LOGGED_MODEL_ARTIFACTS =
		"sagemaker-mlflow:ListLoggedModelArtifacts";
	/** [Write] sagemaker-mlflow:LogBatch */
	static readonly LOG_BATCH = "sagemaker-mlflow:LogBatch";
	/** [Write] sagemaker-mlflow:LogInputs */
	static readonly LOG_INPUTS = "sagemaker-mlflow:LogInputs";
	/** [Write] sagemaker-mlflow:LogLoggedModelParams */
	static readonly LOG_LOGGED_MODEL_PARAMS =
		"sagemaker-mlflow:LogLoggedModelParams";
	/** [Write] sagemaker-mlflow:LogMetric */
	static readonly LOG_METRIC = "sagemaker-mlflow:LogMetric";
	/** [Write] sagemaker-mlflow:LogModel */
	static readonly LOG_MODEL = "sagemaker-mlflow:LogModel";
	/** [Write] sagemaker-mlflow:LogOutputs */
	static readonly LOG_OUTPUTS = "sagemaker-mlflow:LogOutputs";
	/** [Write] sagemaker-mlflow:LogParam */
	static readonly LOG_PARAM = "sagemaker-mlflow:LogParam";
	/** [Write] sagemaker-mlflow:RenameRegisteredModel */
	static readonly RENAME_REGISTERED_MODEL =
		"sagemaker-mlflow:RenameRegisteredModel";
	/** [Write] sagemaker-mlflow:RestoreExperiment */
	static readonly RESTORE_EXPERIMENT = "sagemaker-mlflow:RestoreExperiment";
	/** [Write] sagemaker-mlflow:RestoreRun */
	static readonly RESTORE_RUN = "sagemaker-mlflow:RestoreRun";
	/** [Read] sagemaker-mlflow:SearchExperiments */
	static readonly SEARCH_EXPERIMENTS = "sagemaker-mlflow:SearchExperiments";
	/** [Read] sagemaker-mlflow:SearchLoggedModels */
	static readonly SEARCH_LOGGED_MODELS = "sagemaker-mlflow:SearchLoggedModels";
	/** [Read] sagemaker-mlflow:SearchModelVersions */
	static readonly SEARCH_MODEL_VERSIONS =
		"sagemaker-mlflow:SearchModelVersions";
	/** [Read] sagemaker-mlflow:SearchRegisteredModels */
	static readonly SEARCH_REGISTERED_MODELS =
		"sagemaker-mlflow:SearchRegisteredModels";
	/** [Read] sagemaker-mlflow:SearchRuns */
	static readonly SEARCH_RUNS = "sagemaker-mlflow:SearchRuns";
	/** [Read] sagemaker-mlflow:SearchTraces */
	static readonly SEARCH_TRACES = "sagemaker-mlflow:SearchTraces";
	/** [Write] sagemaker-mlflow:SetExperimentTag */
	static readonly SET_EXPERIMENT_TAG = "sagemaker-mlflow:SetExperimentTag";
	/** [Write] sagemaker-mlflow:SetLoggedModelTags */
	static readonly SET_LOGGED_MODEL_TAGS = "sagemaker-mlflow:SetLoggedModelTags";
	/** [Write] sagemaker-mlflow:SetModelVersionTag */
	static readonly SET_MODEL_VERSION_TAG = "sagemaker-mlflow:SetModelVersionTag";
	/** [Write] sagemaker-mlflow:SetRegisteredModelAlias */
	static readonly SET_REGISTERED_MODEL_ALIAS =
		"sagemaker-mlflow:SetRegisteredModelAlias";
	/** [Write] sagemaker-mlflow:SetRegisteredModelTag */
	static readonly SET_REGISTERED_MODEL_TAG =
		"sagemaker-mlflow:SetRegisteredModelTag";
	/** [Write] sagemaker-mlflow:SetTag */
	static readonly SET_TAG = "sagemaker-mlflow:SetTag";
	/** [Write] sagemaker-mlflow:SetTraceTag */
	static readonly SET_TRACE_TAG = "sagemaker-mlflow:SetTraceTag";
	/** [Write] sagemaker-mlflow:StartTrace */
	static readonly START_TRACE = "sagemaker-mlflow:StartTrace";
	/** [Write] sagemaker-mlflow:TransitionModelVersionStage */
	static readonly TRANSITION_MODEL_VERSION_STAGE =
		"sagemaker-mlflow:TransitionModelVersionStage";
	/** [Write] sagemaker-mlflow:UpdateExperiment */
	static readonly UPDATE_EXPERIMENT = "sagemaker-mlflow:UpdateExperiment";
	/** [Write] sagemaker-mlflow:UpdateModelVersion */
	static readonly UPDATE_MODEL_VERSION = "sagemaker-mlflow:UpdateModelVersion";
	/** [Write] sagemaker-mlflow:UpdateRegisteredModel */
	static readonly UPDATE_REGISTERED_MODEL =
		"sagemaker-mlflow:UpdateRegisteredModel";
	/** [Write] sagemaker-mlflow:UpdateRun */
	static readonly UPDATE_RUN = "sagemaker-mlflow:UpdateRun";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SagemakerMlflowActions.ACCESS_UI,
		SagemakerMlflowActions.GET_DOWNLOAD_URI_FOR_MODEL_VERSION_ARTIFACTS,
		SagemakerMlflowActions.GET_EXPERIMENT,
		SagemakerMlflowActions.GET_EXPERIMENT_BY_NAME,
		SagemakerMlflowActions.GET_LOGGED_MODEL,
		SagemakerMlflowActions.GET_METRIC_HISTORY,
		SagemakerMlflowActions.GET_MODEL_VERSION,
		SagemakerMlflowActions.GET_MODEL_VERSION_BY_ALIAS,
		SagemakerMlflowActions.GET_REGISTERED_MODEL,
		SagemakerMlflowActions.GET_RUN,
		SagemakerMlflowActions.GET_TRACE_INFO,
		SagemakerMlflowActions.SEARCH_EXPERIMENTS,
		SagemakerMlflowActions.SEARCH_LOGGED_MODELS,
		SagemakerMlflowActions.SEARCH_MODEL_VERSIONS,
		SagemakerMlflowActions.SEARCH_REGISTERED_MODELS,
		SagemakerMlflowActions.SEARCH_RUNS,
		SagemakerMlflowActions.SEARCH_TRACES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SagemakerMlflowActions.CREATE_EXPERIMENT,
		SagemakerMlflowActions.CREATE_MODEL_VERSION,
		SagemakerMlflowActions.CREATE_REGISTERED_MODEL,
		SagemakerMlflowActions.CREATE_RUN,
		SagemakerMlflowActions.DELETE_EXPERIMENT,
		SagemakerMlflowActions.DELETE_LOGGED_MODEL,
		SagemakerMlflowActions.DELETE_LOGGED_MODEL_TAG,
		SagemakerMlflowActions.DELETE_MODEL_VERSION,
		SagemakerMlflowActions.DELETE_MODEL_VERSION_TAG,
		SagemakerMlflowActions.DELETE_REGISTERED_MODEL,
		SagemakerMlflowActions.DELETE_REGISTERED_MODEL_ALIAS,
		SagemakerMlflowActions.DELETE_REGISTERED_MODEL_TAG,
		SagemakerMlflowActions.DELETE_RUN,
		SagemakerMlflowActions.DELETE_TAG,
		SagemakerMlflowActions.DELETE_TRACE_TAG,
		SagemakerMlflowActions.DELETE_TRACES,
		SagemakerMlflowActions.END_TRACE,
		SagemakerMlflowActions.FINALIZE_LOGGED_MODEL,
		SagemakerMlflowActions.LOG_BATCH,
		SagemakerMlflowActions.LOG_INPUTS,
		SagemakerMlflowActions.LOG_LOGGED_MODEL_PARAMS,
		SagemakerMlflowActions.LOG_METRIC,
		SagemakerMlflowActions.LOG_MODEL,
		SagemakerMlflowActions.LOG_OUTPUTS,
		SagemakerMlflowActions.LOG_PARAM,
		SagemakerMlflowActions.RENAME_REGISTERED_MODEL,
		SagemakerMlflowActions.RESTORE_EXPERIMENT,
		SagemakerMlflowActions.RESTORE_RUN,
		SagemakerMlflowActions.SET_EXPERIMENT_TAG,
		SagemakerMlflowActions.SET_LOGGED_MODEL_TAGS,
		SagemakerMlflowActions.SET_MODEL_VERSION_TAG,
		SagemakerMlflowActions.SET_REGISTERED_MODEL_ALIAS,
		SagemakerMlflowActions.SET_REGISTERED_MODEL_TAG,
		SagemakerMlflowActions.SET_TAG,
		SagemakerMlflowActions.SET_TRACE_TAG,
		SagemakerMlflowActions.START_TRACE,
		SagemakerMlflowActions.TRANSITION_MODEL_VERSION_STAGE,
		SagemakerMlflowActions.UPDATE_EXPERIMENT,
		SagemakerMlflowActions.UPDATE_MODEL_VERSION,
		SagemakerMlflowActions.UPDATE_REGISTERED_MODEL,
		SagemakerMlflowActions.UPDATE_RUN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SagemakerMlflowActions.GET_LATEST_MODEL_VERSIONS,
		SagemakerMlflowActions.LIST_ARTIFACTS,
		SagemakerMlflowActions.LIST_LOGGED_MODEL_ARTIFACTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const MlflowTrackingServerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):mlflow-tracking-server/(?<mlflowTrackingServerName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for sagemaker-mlflow resources.
 */
export class SagemakerMlflowResources {
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
}

/**
 * Condition key constants and builders for sagemaker-mlflow.
 */
export class SagemakerMlflowConditions {
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}
}
