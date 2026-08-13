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
	static readonly AccessUI = "sagemaker-mlflow:AccessUI";
	/** [Write] sagemaker-mlflow:CreateExperiment */
	static readonly CreateExperiment = "sagemaker-mlflow:CreateExperiment";
	/** [Write] sagemaker-mlflow:CreateModelVersion */
	static readonly CreateModelVersion = "sagemaker-mlflow:CreateModelVersion";
	/** [Write] sagemaker-mlflow:CreateRegisteredModel */
	static readonly CreateRegisteredModel =
		"sagemaker-mlflow:CreateRegisteredModel";
	/** [Write] sagemaker-mlflow:CreateRun */
	static readonly CreateRun = "sagemaker-mlflow:CreateRun";
	/** [Write] sagemaker-mlflow:DeleteExperiment */
	static readonly DeleteExperiment = "sagemaker-mlflow:DeleteExperiment";
	/** [Write] sagemaker-mlflow:DeleteLoggedModel */
	static readonly DeleteLoggedModel = "sagemaker-mlflow:DeleteLoggedModel";
	/** [Write] sagemaker-mlflow:DeleteLoggedModelTag */
	static readonly DeleteLoggedModelTag =
		"sagemaker-mlflow:DeleteLoggedModelTag";
	/** [Write] sagemaker-mlflow:DeleteModelVersion */
	static readonly DeleteModelVersion = "sagemaker-mlflow:DeleteModelVersion";
	/** [Write] sagemaker-mlflow:DeleteModelVersionTag */
	static readonly DeleteModelVersionTag =
		"sagemaker-mlflow:DeleteModelVersionTag";
	/** [Write] sagemaker-mlflow:DeleteRegisteredModel */
	static readonly DeleteRegisteredModel =
		"sagemaker-mlflow:DeleteRegisteredModel";
	/** [Write] sagemaker-mlflow:DeleteRegisteredModelAlias */
	static readonly DeleteRegisteredModelAlias =
		"sagemaker-mlflow:DeleteRegisteredModelAlias";
	/** [Write] sagemaker-mlflow:DeleteRegisteredModelTag */
	static readonly DeleteRegisteredModelTag =
		"sagemaker-mlflow:DeleteRegisteredModelTag";
	/** [Write] sagemaker-mlflow:DeleteRun */
	static readonly DeleteRun = "sagemaker-mlflow:DeleteRun";
	/** [Write] sagemaker-mlflow:DeleteTag */
	static readonly DeleteTag = "sagemaker-mlflow:DeleteTag";
	/** [Write] sagemaker-mlflow:DeleteTraceTag */
	static readonly DeleteTraceTag = "sagemaker-mlflow:DeleteTraceTag";
	/** [Write] sagemaker-mlflow:DeleteTraces */
	static readonly DeleteTraces = "sagemaker-mlflow:DeleteTraces";
	/** [Write] sagemaker-mlflow:EndTrace */
	static readonly EndTrace = "sagemaker-mlflow:EndTrace";
	/** [Write] sagemaker-mlflow:FinalizeLoggedModel */
	static readonly FinalizeLoggedModel = "sagemaker-mlflow:FinalizeLoggedModel";
	/** [Read] sagemaker-mlflow:GetDownloadURIForModelVersionArtifacts */
	static readonly actionGetDownloadURIForModelVersionArtifacts =
		"sagemaker-mlflow:GetDownloadURIForModelVersionArtifacts";
	/** [Read] sagemaker-mlflow:GetExperiment */
	static readonly actionGetExperiment = "sagemaker-mlflow:GetExperiment";
	/** [Read] sagemaker-mlflow:GetExperimentByName */
	static readonly actionGetExperimentByName =
		"sagemaker-mlflow:GetExperimentByName";
	/** [List] sagemaker-mlflow:GetLatestModelVersions */
	static readonly actionGetLatestModelVersions =
		"sagemaker-mlflow:GetLatestModelVersions";
	/** [Read] sagemaker-mlflow:GetLoggedModel */
	static readonly actionGetLoggedModel = "sagemaker-mlflow:GetLoggedModel";
	/** [Read] sagemaker-mlflow:GetMetricHistory */
	static readonly actionGetMetricHistory = "sagemaker-mlflow:GetMetricHistory";
	/** [Read] sagemaker-mlflow:GetModelVersion */
	static readonly actionGetModelVersion = "sagemaker-mlflow:GetModelVersion";
	/** [Read] sagemaker-mlflow:GetModelVersionByAlias */
	static readonly actionGetModelVersionByAlias =
		"sagemaker-mlflow:GetModelVersionByAlias";
	/** [Read] sagemaker-mlflow:GetRegisteredModel */
	static readonly actionGetRegisteredModel =
		"sagemaker-mlflow:GetRegisteredModel";
	/** [Read] sagemaker-mlflow:GetRun */
	static readonly actionGetRun = "sagemaker-mlflow:GetRun";
	/** [Read] sagemaker-mlflow:GetTraceInfo */
	static readonly actionGetTraceInfo = "sagemaker-mlflow:GetTraceInfo";
	/** [List] sagemaker-mlflow:ListArtifacts */
	static readonly ListArtifacts = "sagemaker-mlflow:ListArtifacts";
	/** [List] sagemaker-mlflow:ListLoggedModelArtifacts */
	static readonly ListLoggedModelArtifacts =
		"sagemaker-mlflow:ListLoggedModelArtifacts";
	/** [Write] sagemaker-mlflow:LogBatch */
	static readonly LogBatch = "sagemaker-mlflow:LogBatch";
	/** [Write] sagemaker-mlflow:LogInputs */
	static readonly LogInputs = "sagemaker-mlflow:LogInputs";
	/** [Write] sagemaker-mlflow:LogLoggedModelParams */
	static readonly LogLoggedModelParams =
		"sagemaker-mlflow:LogLoggedModelParams";
	/** [Write] sagemaker-mlflow:LogMetric */
	static readonly LogMetric = "sagemaker-mlflow:LogMetric";
	/** [Write] sagemaker-mlflow:LogModel */
	static readonly LogModel = "sagemaker-mlflow:LogModel";
	/** [Write] sagemaker-mlflow:LogOutputs */
	static readonly LogOutputs = "sagemaker-mlflow:LogOutputs";
	/** [Write] sagemaker-mlflow:LogParam */
	static readonly LogParam = "sagemaker-mlflow:LogParam";
	/** [Write] sagemaker-mlflow:RenameRegisteredModel */
	static readonly RenameRegisteredModel =
		"sagemaker-mlflow:RenameRegisteredModel";
	/** [Write] sagemaker-mlflow:RestoreExperiment */
	static readonly RestoreExperiment = "sagemaker-mlflow:RestoreExperiment";
	/** [Write] sagemaker-mlflow:RestoreRun */
	static readonly RestoreRun = "sagemaker-mlflow:RestoreRun";
	/** [Read] sagemaker-mlflow:SearchExperiments */
	static readonly SearchExperiments = "sagemaker-mlflow:SearchExperiments";
	/** [Read] sagemaker-mlflow:SearchLoggedModels */
	static readonly SearchLoggedModels = "sagemaker-mlflow:SearchLoggedModels";
	/** [Read] sagemaker-mlflow:SearchModelVersions */
	static readonly SearchModelVersions = "sagemaker-mlflow:SearchModelVersions";
	/** [Read] sagemaker-mlflow:SearchRegisteredModels */
	static readonly SearchRegisteredModels =
		"sagemaker-mlflow:SearchRegisteredModels";
	/** [Read] sagemaker-mlflow:SearchRuns */
	static readonly SearchRuns = "sagemaker-mlflow:SearchRuns";
	/** [Read] sagemaker-mlflow:SearchTraces */
	static readonly SearchTraces = "sagemaker-mlflow:SearchTraces";
	/** [Write] sagemaker-mlflow:SetExperimentTag */
	static readonly actionSetExperimentTag = "sagemaker-mlflow:SetExperimentTag";
	/** [Write] sagemaker-mlflow:SetLoggedModelTags */
	static readonly actionSetLoggedModelTags =
		"sagemaker-mlflow:SetLoggedModelTags";
	/** [Write] sagemaker-mlflow:SetModelVersionTag */
	static readonly actionSetModelVersionTag =
		"sagemaker-mlflow:SetModelVersionTag";
	/** [Write] sagemaker-mlflow:SetRegisteredModelAlias */
	static readonly actionSetRegisteredModelAlias =
		"sagemaker-mlflow:SetRegisteredModelAlias";
	/** [Write] sagemaker-mlflow:SetRegisteredModelTag */
	static readonly actionSetRegisteredModelTag =
		"sagemaker-mlflow:SetRegisteredModelTag";
	/** [Write] sagemaker-mlflow:SetTag */
	static readonly actionSetTag = "sagemaker-mlflow:SetTag";
	/** [Write] sagemaker-mlflow:SetTraceTag */
	static readonly actionSetTraceTag = "sagemaker-mlflow:SetTraceTag";
	/** [Write] sagemaker-mlflow:StartTrace */
	static readonly StartTrace = "sagemaker-mlflow:StartTrace";
	/** [Write] sagemaker-mlflow:TransitionModelVersionStage */
	static readonly TransitionModelVersionStage =
		"sagemaker-mlflow:TransitionModelVersionStage";
	/** [Write] sagemaker-mlflow:UpdateExperiment */
	static readonly UpdateExperiment = "sagemaker-mlflow:UpdateExperiment";
	/** [Write] sagemaker-mlflow:UpdateModelVersion */
	static readonly UpdateModelVersion = "sagemaker-mlflow:UpdateModelVersion";
	/** [Write] sagemaker-mlflow:UpdateRegisteredModel */
	static readonly UpdateRegisteredModel =
		"sagemaker-mlflow:UpdateRegisteredModel";
	/** [Write] sagemaker-mlflow:UpdateRun */
	static readonly UpdateRun = "sagemaker-mlflow:UpdateRun";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SagemakerMlflowActions.AccessUI,
		SagemakerMlflowActions.actionGetDownloadURIForModelVersionArtifacts,
		SagemakerMlflowActions.actionGetExperiment,
		SagemakerMlflowActions.actionGetExperimentByName,
		SagemakerMlflowActions.actionGetLoggedModel,
		SagemakerMlflowActions.actionGetMetricHistory,
		SagemakerMlflowActions.actionGetModelVersion,
		SagemakerMlflowActions.actionGetModelVersionByAlias,
		SagemakerMlflowActions.actionGetRegisteredModel,
		SagemakerMlflowActions.actionGetRun,
		SagemakerMlflowActions.actionGetTraceInfo,
		SagemakerMlflowActions.SearchExperiments,
		SagemakerMlflowActions.SearchLoggedModels,
		SagemakerMlflowActions.SearchModelVersions,
		SagemakerMlflowActions.SearchRegisteredModels,
		SagemakerMlflowActions.SearchRuns,
		SagemakerMlflowActions.SearchTraces,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SagemakerMlflowActions.CreateExperiment,
		SagemakerMlflowActions.CreateModelVersion,
		SagemakerMlflowActions.CreateRegisteredModel,
		SagemakerMlflowActions.CreateRun,
		SagemakerMlflowActions.DeleteExperiment,
		SagemakerMlflowActions.DeleteLoggedModel,
		SagemakerMlflowActions.DeleteLoggedModelTag,
		SagemakerMlflowActions.DeleteModelVersion,
		SagemakerMlflowActions.DeleteModelVersionTag,
		SagemakerMlflowActions.DeleteRegisteredModel,
		SagemakerMlflowActions.DeleteRegisteredModelAlias,
		SagemakerMlflowActions.DeleteRegisteredModelTag,
		SagemakerMlflowActions.DeleteRun,
		SagemakerMlflowActions.DeleteTag,
		SagemakerMlflowActions.DeleteTraceTag,
		SagemakerMlflowActions.DeleteTraces,
		SagemakerMlflowActions.EndTrace,
		SagemakerMlflowActions.FinalizeLoggedModel,
		SagemakerMlflowActions.LogBatch,
		SagemakerMlflowActions.LogInputs,
		SagemakerMlflowActions.LogLoggedModelParams,
		SagemakerMlflowActions.LogMetric,
		SagemakerMlflowActions.LogModel,
		SagemakerMlflowActions.LogOutputs,
		SagemakerMlflowActions.LogParam,
		SagemakerMlflowActions.RenameRegisteredModel,
		SagemakerMlflowActions.RestoreExperiment,
		SagemakerMlflowActions.RestoreRun,
		SagemakerMlflowActions.actionSetExperimentTag,
		SagemakerMlflowActions.actionSetLoggedModelTags,
		SagemakerMlflowActions.actionSetModelVersionTag,
		SagemakerMlflowActions.actionSetRegisteredModelAlias,
		SagemakerMlflowActions.actionSetRegisteredModelTag,
		SagemakerMlflowActions.actionSetTag,
		SagemakerMlflowActions.actionSetTraceTag,
		SagemakerMlflowActions.StartTrace,
		SagemakerMlflowActions.TransitionModelVersionStage,
		SagemakerMlflowActions.UpdateExperiment,
		SagemakerMlflowActions.UpdateModelVersion,
		SagemakerMlflowActions.UpdateRegisteredModel,
		SagemakerMlflowActions.UpdateRun,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SagemakerMlflowActions.actionGetLatestModelVersions,
		SagemakerMlflowActions.ListArtifacts,
		SagemakerMlflowActions.ListLoggedModelArtifacts,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a mlflow-tracking-server ARN.
 */
export interface SagemakerMlflowMlflowTrackingServerArnProps {
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
export interface SagemakerMlflowMlflowTrackingServerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MlflowTrackingServerName component. */
	readonly mlflowTrackingServerName: string;
}

const MlflowTrackingServerArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker:(?<region>[^:]*):(?<account>[^:]*):mlflow-tracking-server\/(?<mlflowTrackingServerName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for sagemaker-mlflow resources.
 */
export class SagemakerMlflowResources {
	/**
	 * Builds an ARN for the mlflow-tracking-server resource.
	 */
	static mlflowTrackingServer(
		props: SagemakerMlflowMlflowTrackingServerArnProps,
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
	): SagemakerMlflowMlflowTrackingServerArnComponents {
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
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}
}
