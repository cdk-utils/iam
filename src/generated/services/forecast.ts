// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/forecast.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the forecast service.
 */
export class ForecastActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "forecast";

	/** [Write] forecast:CreateAutoPredictor */
	static readonly CREATE_AUTO_PREDICTOR = "forecast:CreateAutoPredictor";
	/** [Write] forecast:CreateDataset */
	static readonly CREATE_DATASET = "forecast:CreateDataset";
	/** [Write] forecast:CreateDatasetGroup */
	static readonly CREATE_DATASET_GROUP = "forecast:CreateDatasetGroup";
	/** [Write] forecast:CreateDatasetImportJob */
	static readonly CREATE_DATASET_IMPORT_JOB = "forecast:CreateDatasetImportJob";
	/** [Write] forecast:CreateExplainability */
	static readonly CREATE_EXPLAINABILITY = "forecast:CreateExplainability";
	/** [Write] forecast:CreateExplainabilityExport */
	static readonly CREATE_EXPLAINABILITY_EXPORT =
		"forecast:CreateExplainabilityExport";
	/** [Write] forecast:CreateForecast */
	static readonly CREATE_FORECAST = "forecast:CreateForecast";
	/** [Write] forecast:CreateForecastEndpoint */
	static readonly CREATE_FORECAST_ENDPOINT = "forecast:CreateForecastEndpoint";
	/** [Write] forecast:CreateForecastExportJob */
	static readonly CREATE_FORECAST_EXPORT_JOB =
		"forecast:CreateForecastExportJob";
	/** [Write] forecast:CreateMonitor */
	static readonly CREATE_MONITOR = "forecast:CreateMonitor";
	/** [Write] forecast:CreatePredictor */
	static readonly CREATE_PREDICTOR = "forecast:CreatePredictor";
	/** [Write] forecast:CreatePredictorBacktestExportJob */
	static readonly CREATE_PREDICTOR_BACKTEST_EXPORT_JOB =
		"forecast:CreatePredictorBacktestExportJob";
	/** [Write] forecast:CreateWhatIfAnalysis */
	static readonly CREATE_WHAT_IF_ANALYSIS = "forecast:CreateWhatIfAnalysis";
	/** [Write] forecast:CreateWhatIfForecast */
	static readonly CREATE_WHAT_IF_FORECAST = "forecast:CreateWhatIfForecast";
	/** [Write] forecast:CreateWhatIfForecastExport */
	static readonly CREATE_WHAT_IF_FORECAST_EXPORT =
		"forecast:CreateWhatIfForecastExport";
	/** [Write] forecast:DeleteDataset */
	static readonly DELETE_DATASET = "forecast:DeleteDataset";
	/** [Write] forecast:DeleteDatasetGroup */
	static readonly DELETE_DATASET_GROUP = "forecast:DeleteDatasetGroup";
	/** [Write] forecast:DeleteDatasetImportJob */
	static readonly DELETE_DATASET_IMPORT_JOB = "forecast:DeleteDatasetImportJob";
	/** [Write] forecast:DeleteExplainability */
	static readonly DELETE_EXPLAINABILITY = "forecast:DeleteExplainability";
	/** [Write] forecast:DeleteExplainabilityExport */
	static readonly DELETE_EXPLAINABILITY_EXPORT =
		"forecast:DeleteExplainabilityExport";
	/** [Write] forecast:DeleteForecast */
	static readonly DELETE_FORECAST = "forecast:DeleteForecast";
	/** [Write] forecast:DeleteForecastEndpoint */
	static readonly DELETE_FORECAST_ENDPOINT = "forecast:DeleteForecastEndpoint";
	/** [Write] forecast:DeleteForecastExportJob */
	static readonly DELETE_FORECAST_EXPORT_JOB =
		"forecast:DeleteForecastExportJob";
	/** [Write] forecast:DeleteMonitor */
	static readonly DELETE_MONITOR = "forecast:DeleteMonitor";
	/** [Write] forecast:DeletePredictor */
	static readonly DELETE_PREDICTOR = "forecast:DeletePredictor";
	/** [Write] forecast:DeletePredictorBacktestExportJob */
	static readonly DELETE_PREDICTOR_BACKTEST_EXPORT_JOB =
		"forecast:DeletePredictorBacktestExportJob";
	/** [Write] forecast:DeleteResourceTree */
	static readonly DELETE_RESOURCE_TREE = "forecast:DeleteResourceTree";
	/** [Write] forecast:DeleteWhatIfAnalysis */
	static readonly DELETE_WHAT_IF_ANALYSIS = "forecast:DeleteWhatIfAnalysis";
	/** [Write] forecast:DeleteWhatIfForecast */
	static readonly DELETE_WHAT_IF_FORECAST = "forecast:DeleteWhatIfForecast";
	/** [Write] forecast:DeleteWhatIfForecastExport */
	static readonly DELETE_WHAT_IF_FORECAST_EXPORT =
		"forecast:DeleteWhatIfForecastExport";
	/** [Read] forecast:DescribeAutoPredictor */
	static readonly DESCRIBE_AUTO_PREDICTOR = "forecast:DescribeAutoPredictor";
	/** [Read] forecast:DescribeDataset */
	static readonly DESCRIBE_DATASET = "forecast:DescribeDataset";
	/** [Read] forecast:DescribeDatasetGroup */
	static readonly DESCRIBE_DATASET_GROUP = "forecast:DescribeDatasetGroup";
	/** [Read] forecast:DescribeDatasetImportJob */
	static readonly DESCRIBE_DATASET_IMPORT_JOB =
		"forecast:DescribeDatasetImportJob";
	/** [Read] forecast:DescribeExplainability */
	static readonly DESCRIBE_EXPLAINABILITY = "forecast:DescribeExplainability";
	/** [Read] forecast:DescribeExplainabilityExport */
	static readonly DESCRIBE_EXPLAINABILITY_EXPORT =
		"forecast:DescribeExplainabilityExport";
	/** [Read] forecast:DescribeForecast */
	static readonly DESCRIBE_FORECAST = "forecast:DescribeForecast";
	/** [Read] forecast:DescribeForecastEndpoint */
	static readonly DESCRIBE_FORECAST_ENDPOINT =
		"forecast:DescribeForecastEndpoint";
	/** [Read] forecast:DescribeForecastExportJob */
	static readonly DESCRIBE_FORECAST_EXPORT_JOB =
		"forecast:DescribeForecastExportJob";
	/** [Read] forecast:DescribeMonitor */
	static readonly DESCRIBE_MONITOR = "forecast:DescribeMonitor";
	/** [Read] forecast:DescribePredictor */
	static readonly DESCRIBE_PREDICTOR = "forecast:DescribePredictor";
	/** [Read] forecast:DescribePredictorBacktestExportJob */
	static readonly DESCRIBE_PREDICTOR_BACKTEST_EXPORT_JOB =
		"forecast:DescribePredictorBacktestExportJob";
	/** [Read] forecast:DescribeWhatIfAnalysis */
	static readonly DESCRIBE_WHAT_IF_ANALYSIS = "forecast:DescribeWhatIfAnalysis";
	/** [Read] forecast:DescribeWhatIfForecast */
	static readonly DESCRIBE_WHAT_IF_FORECAST = "forecast:DescribeWhatIfForecast";
	/** [Read] forecast:DescribeWhatIfForecastExport */
	static readonly DESCRIBE_WHAT_IF_FORECAST_EXPORT =
		"forecast:DescribeWhatIfForecastExport";
	/** [Read] forecast:GetAccuracyMetrics */
	static readonly GET_ACCURACY_METRICS = "forecast:GetAccuracyMetrics";
	/** [Read] forecast:GetRecentForecastContext */
	static readonly GET_RECENT_FORECAST_CONTEXT =
		"forecast:GetRecentForecastContext";
	/** [Read] forecast:InvokeForecastEndpoint */
	static readonly INVOKE_FORECAST_ENDPOINT = "forecast:InvokeForecastEndpoint";
	/** [Read] forecast:ListDatasetGroups */
	static readonly LIST_DATASET_GROUPS = "forecast:ListDatasetGroups";
	/** [Read] forecast:ListDatasetImportJobs */
	static readonly LIST_DATASET_IMPORT_JOBS = "forecast:ListDatasetImportJobs";
	/** [Read] forecast:ListDatasets */
	static readonly LIST_DATASETS = "forecast:ListDatasets";
	/** [Read] forecast:ListExplainabilities */
	static readonly LIST_EXPLAINABILITIES = "forecast:ListExplainabilities";
	/** [Read] forecast:ListExplainabilityExports */
	static readonly LIST_EXPLAINABILITY_EXPORTS =
		"forecast:ListExplainabilityExports";
	/** [Read] forecast:ListForecastExportJobs */
	static readonly LIST_FORECAST_EXPORT_JOBS = "forecast:ListForecastExportJobs";
	/** [Read] forecast:ListForecasts */
	static readonly LIST_FORECASTS = "forecast:ListForecasts";
	/** [Read] forecast:ListMonitorEvaluations */
	static readonly LIST_MONITOR_EVALUATIONS = "forecast:ListMonitorEvaluations";
	/** [Read] forecast:ListMonitors */
	static readonly LIST_MONITORS = "forecast:ListMonitors";
	/** [Read] forecast:ListPredictorBacktestExportJobs */
	static readonly LIST_PREDICTOR_BACKTEST_EXPORT_JOBS =
		"forecast:ListPredictorBacktestExportJobs";
	/** [Read] forecast:ListPredictors */
	static readonly LIST_PREDICTORS = "forecast:ListPredictors";
	/** [Read] forecast:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "forecast:ListTagsForResource";
	/** [Read] forecast:ListWhatIfAnalyses */
	static readonly LIST_WHAT_IF_ANALYSES = "forecast:ListWhatIfAnalyses";
	/** [Read] forecast:ListWhatIfForecastExports */
	static readonly LIST_WHAT_IF_FORECAST_EXPORTS =
		"forecast:ListWhatIfForecastExports";
	/** [Read] forecast:ListWhatIfForecasts */
	static readonly LIST_WHAT_IF_FORECASTS = "forecast:ListWhatIfForecasts";
	/** [Read] forecast:QueryForecast */
	static readonly QUERY_FORECAST = "forecast:QueryForecast";
	/** [Read] forecast:QueryWhatIfForecast */
	static readonly QUERY_WHAT_IF_FORECAST = "forecast:QueryWhatIfForecast";
	/** [Write] forecast:ResumeResource */
	static readonly RESUME_RESOURCE = "forecast:ResumeResource";
	/** [Write] forecast:StopResource */
	static readonly STOP_RESOURCE = "forecast:StopResource";
	/** [Tagging] forecast:TagResource */
	static readonly TAG_RESOURCE = "forecast:TagResource";
	/** [Tagging] forecast:UntagResource */
	static readonly UNTAG_RESOURCE = "forecast:UntagResource";
	/** [Write] forecast:UpdateDatasetGroup */
	static readonly UPDATE_DATASET_GROUP = "forecast:UpdateDatasetGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ForecastActions.DESCRIBE_AUTO_PREDICTOR,
		ForecastActions.DESCRIBE_DATASET,
		ForecastActions.DESCRIBE_DATASET_GROUP,
		ForecastActions.DESCRIBE_DATASET_IMPORT_JOB,
		ForecastActions.DESCRIBE_EXPLAINABILITY,
		ForecastActions.DESCRIBE_EXPLAINABILITY_EXPORT,
		ForecastActions.DESCRIBE_FORECAST,
		ForecastActions.DESCRIBE_FORECAST_ENDPOINT,
		ForecastActions.DESCRIBE_FORECAST_EXPORT_JOB,
		ForecastActions.DESCRIBE_MONITOR,
		ForecastActions.DESCRIBE_PREDICTOR,
		ForecastActions.DESCRIBE_PREDICTOR_BACKTEST_EXPORT_JOB,
		ForecastActions.DESCRIBE_WHAT_IF_ANALYSIS,
		ForecastActions.DESCRIBE_WHAT_IF_FORECAST,
		ForecastActions.DESCRIBE_WHAT_IF_FORECAST_EXPORT,
		ForecastActions.GET_ACCURACY_METRICS,
		ForecastActions.GET_RECENT_FORECAST_CONTEXT,
		ForecastActions.INVOKE_FORECAST_ENDPOINT,
		ForecastActions.LIST_DATASET_GROUPS,
		ForecastActions.LIST_DATASET_IMPORT_JOBS,
		ForecastActions.LIST_DATASETS,
		ForecastActions.LIST_EXPLAINABILITIES,
		ForecastActions.LIST_EXPLAINABILITY_EXPORTS,
		ForecastActions.LIST_FORECAST_EXPORT_JOBS,
		ForecastActions.LIST_FORECASTS,
		ForecastActions.LIST_MONITOR_EVALUATIONS,
		ForecastActions.LIST_MONITORS,
		ForecastActions.LIST_PREDICTOR_BACKTEST_EXPORT_JOBS,
		ForecastActions.LIST_PREDICTORS,
		ForecastActions.LIST_TAGS_FOR_RESOURCE,
		ForecastActions.LIST_WHAT_IF_ANALYSES,
		ForecastActions.LIST_WHAT_IF_FORECAST_EXPORTS,
		ForecastActions.LIST_WHAT_IF_FORECASTS,
		ForecastActions.QUERY_FORECAST,
		ForecastActions.QUERY_WHAT_IF_FORECAST,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ForecastActions.CREATE_AUTO_PREDICTOR,
		ForecastActions.CREATE_DATASET,
		ForecastActions.CREATE_DATASET_GROUP,
		ForecastActions.CREATE_DATASET_IMPORT_JOB,
		ForecastActions.CREATE_EXPLAINABILITY,
		ForecastActions.CREATE_EXPLAINABILITY_EXPORT,
		ForecastActions.CREATE_FORECAST,
		ForecastActions.CREATE_FORECAST_ENDPOINT,
		ForecastActions.CREATE_FORECAST_EXPORT_JOB,
		ForecastActions.CREATE_MONITOR,
		ForecastActions.CREATE_PREDICTOR,
		ForecastActions.CREATE_PREDICTOR_BACKTEST_EXPORT_JOB,
		ForecastActions.CREATE_WHAT_IF_ANALYSIS,
		ForecastActions.CREATE_WHAT_IF_FORECAST,
		ForecastActions.CREATE_WHAT_IF_FORECAST_EXPORT,
		ForecastActions.DELETE_DATASET,
		ForecastActions.DELETE_DATASET_GROUP,
		ForecastActions.DELETE_DATASET_IMPORT_JOB,
		ForecastActions.DELETE_EXPLAINABILITY,
		ForecastActions.DELETE_EXPLAINABILITY_EXPORT,
		ForecastActions.DELETE_FORECAST,
		ForecastActions.DELETE_FORECAST_ENDPOINT,
		ForecastActions.DELETE_FORECAST_EXPORT_JOB,
		ForecastActions.DELETE_MONITOR,
		ForecastActions.DELETE_PREDICTOR,
		ForecastActions.DELETE_PREDICTOR_BACKTEST_EXPORT_JOB,
		ForecastActions.DELETE_RESOURCE_TREE,
		ForecastActions.DELETE_WHAT_IF_ANALYSIS,
		ForecastActions.DELETE_WHAT_IF_FORECAST,
		ForecastActions.DELETE_WHAT_IF_FORECAST_EXPORT,
		ForecastActions.RESUME_RESOURCE,
		ForecastActions.STOP_RESOURCE,
		ForecastActions.UPDATE_DATASET_GROUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ForecastActions.TAG_RESOURCE,
		ForecastActions.UNTAG_RESOURCE,
	];
}

const AlgorithmArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:::algorithm/(?<resourceId>[^:/?]+)$",
);
const DatasetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):dataset/(?<resourceId>[^:/?]+)$",
);
const DatasetGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):dataset-group/(?<resourceId>[^:/?]+)$",
);
const DatasetImportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):dataset-import-job/(?<resourceId>[^:/?]+)$",
);
const EndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):forecast-endpoint/(?<resourceId>[^:/?]+)$",
);
const ExplainabilityArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):explainability/(?<resourceId>[^:/?]+)$",
);
const ExplainabilityExportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):explainability-export/(?<resourceId>[^:/?]+)$",
);
const ForecastArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):forecast/(?<resourceId>[^:/?]+)$",
);
const ForecastExportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):forecast-export-job/(?<resourceId>[^:/?]+)$",
);
const MonitorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):monitor/(?<resourceId>[^:/?]+)$",
);
const PredictorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):predictor/(?<resourceId>[^:/?]+)$",
);
const PredictorBacktestExportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):predictor-backtest-export-job/(?<resourceId>[^:/?]+)$",
);
const WhatIfAnalysisArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):what-if-analysis/(?<resourceId>[^:/?]+)$",
);
const WhatIfForecastArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):what-if-forecast/(?<resourceId>[^:/?]+)$",
);
const WhatIfForecastExportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):what-if-forecast-export/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for forecast resources.
 */
export class ForecastResources {
	/**
	 * Builds an ARN for the algorithm resource.
	 */
	static algorithm(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:::algorithm/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the algorithm resource.
	 */
	static isValidAlgorithmArn(arn: string): boolean {
		return AlgorithmArnRegex.test(arn);
	}

	/**
	 * Parses a algorithm ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAlgorithmArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AlgorithmArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid algorithm ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataset resource.
	 */
	static isValidDatasetArn(arn: string): boolean {
		return DatasetArnRegex.test(arn);
	}

	/**
	 * Parses a dataset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the datasetGroup resource.
	 */
	static datasetGroup(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:dataset-group/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the datasetGroup resource.
	 */
	static isValidDatasetGroupArn(arn: string): boolean {
		return DatasetGroupArnRegex.test(arn);
	}

	/**
	 * Parses a datasetGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DatasetGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datasetGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the datasetImportJob resource.
	 */
	static datasetImportJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:dataset-import-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the datasetImportJob resource.
	 */
	static isValidDatasetImportJobArn(arn: string): boolean {
		return DatasetImportJobArnRegex.test(arn);
	}

	/**
	 * Parses a datasetImportJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetImportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DatasetImportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datasetImportJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the endpoint resource.
	 */
	static endpoint(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:forecast-endpoint/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the endpoint resource.
	 */
	static isValidEndpointArn(arn: string): boolean {
		return EndpointArnRegex.test(arn);
	}

	/**
	 * Parses a endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = EndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the explainability resource.
	 */
	static explainability(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:explainability/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the explainability resource.
	 */
	static isValidExplainabilityArn(arn: string): boolean {
		return ExplainabilityArnRegex.test(arn);
	}

	/**
	 * Parses a explainability ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExplainabilityArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ExplainabilityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid explainability ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the explainabilityExport resource.
	 */
	static explainabilityExport(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:explainability-export/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the explainabilityExport resource.
	 */
	static isValidExplainabilityExportArn(arn: string): boolean {
		return ExplainabilityExportArnRegex.test(arn);
	}

	/**
	 * Parses a explainabilityExport ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExplainabilityExportArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ExplainabilityExportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid explainabilityExport ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the forecast resource.
	 */
	static forecast(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:forecast/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the forecast resource.
	 */
	static isValidForecastArn(arn: string): boolean {
		return ForecastArnRegex.test(arn);
	}

	/**
	 * Parses a forecast ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseForecastArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ForecastArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid forecast ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the forecastExport resource.
	 */
	static forecastExport(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:forecast-export-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the forecastExport resource.
	 */
	static isValidForecastExportArn(arn: string): boolean {
		return ForecastExportArnRegex.test(arn);
	}

	/**
	 * Parses a forecastExport ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseForecastExportArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ForecastExportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid forecastExport ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the monitor resource.
	 */
	static monitor(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:monitor/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the monitor resource.
	 */
	static isValidMonitorArn(arn: string): boolean {
		return MonitorArnRegex.test(arn);
	}

	/**
	 * Parses a monitor ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMonitorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = MonitorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid monitor ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the predictor resource.
	 */
	static predictor(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:predictor/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the predictor resource.
	 */
	static isValidPredictorArn(arn: string): boolean {
		return PredictorArnRegex.test(arn);
	}

	/**
	 * Parses a predictor ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePredictorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = PredictorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid predictor ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the predictorBacktestExportJob resource.
	 */
	static predictorBacktestExportJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:predictor-backtest-export-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the predictorBacktestExportJob resource.
	 */
	static isValidPredictorBacktestExportJobArn(arn: string): boolean {
		return PredictorBacktestExportJobArnRegex.test(arn);
	}

	/**
	 * Parses a predictorBacktestExportJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePredictorBacktestExportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = PredictorBacktestExportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid predictorBacktestExportJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the whatIfAnalysis resource.
	 */
	static whatIfAnalysis(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:what-if-analysis/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the whatIfAnalysis resource.
	 */
	static isValidWhatIfAnalysisArn(arn: string): boolean {
		return WhatIfAnalysisArnRegex.test(arn);
	}

	/**
	 * Parses a whatIfAnalysis ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWhatIfAnalysisArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = WhatIfAnalysisArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid whatIfAnalysis ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the whatIfForecast resource.
	 */
	static whatIfForecast(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:what-if-forecast/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the whatIfForecast resource.
	 */
	static isValidWhatIfForecastArn(arn: string): boolean {
		return WhatIfForecastArnRegex.test(arn);
	}

	/**
	 * Parses a whatIfForecast ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWhatIfForecastArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = WhatIfForecastArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid whatIfForecast ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the whatIfForecastExport resource.
	 */
	static whatIfForecastExport(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:forecast:${props.region ?? "*"}:${props.account ?? "*"}:what-if-forecast-export/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the whatIfForecastExport resource.
	 */
	static isValidWhatIfForecastExportArn(arn: string): boolean {
		return WhatIfForecastExportArnRegex.test(arn);
	}

	/**
	 * Parses a whatIfForecastExport ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWhatIfForecastExportArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = WhatIfForecastExportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid whatIfForecastExport ARN: ${arn}`);
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
 * API operation to required IAM actions mapping for forecast.
 */
export class ForecastOperations {
	/** IAM actions required for the CreateAutoPredictor API call. */
	static readonly CREATE_AUTO_PREDICTOR: string[] = [
		"forecast:CreateAutoPredictor",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CREATE_DATASET: string[] = [
		"forecast:CreateDataset",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateDatasetGroup API call. */
	static readonly CREATE_DATASET_GROUP: string[] = [
		"forecast:CreateDatasetGroup",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateDatasetImportJob API call. */
	static readonly CREATE_DATASET_IMPORT_JOB: string[] = [
		"forecast:CreateDatasetImportJob",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateExplainability API call. */
	static readonly CREATE_EXPLAINABILITY: string[] = [
		"forecast:CreateExplainability",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateExplainabilityExport API call. */
	static readonly CREATE_EXPLAINABILITY_EXPORT: string[] = [
		"forecast:CreateExplainabilityExport",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateForecast API call. */
	static readonly CREATE_FORECAST: string[] = [
		"forecast:CreateForecast",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateForecastExportJob API call. */
	static readonly CREATE_FORECAST_EXPORT_JOB: string[] = [
		"forecast:CreateForecastExportJob",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateMonitor API call. */
	static readonly CREATE_MONITOR: string[] = [
		"forecast:CreateMonitor",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreatePredictor API call. */
	static readonly CREATE_PREDICTOR: string[] = [
		"forecast:CreatePredictor",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreatePredictorBacktestExportJob API call. */
	static readonly CREATE_PREDICTOR_BACKTEST_EXPORT_JOB: string[] = [
		"forecast:CreatePredictorBacktestExportJob",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateWhatIfAnalysis API call. */
	static readonly CREATE_WHAT_IF_ANALYSIS: string[] = [
		"forecast:CreateWhatIfAnalysis",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateWhatIfForecast API call. */
	static readonly CREATE_WHAT_IF_FORECAST: string[] = [];
	/** IAM actions required for the CreateWhatIfForecastExport API call. */
	static readonly CREATE_WHAT_IF_FORECAST_EXPORT: string[] = [];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DELETE_DATASET: string[] = ["forecast:DeleteDataset"];
	/** IAM actions required for the DeleteDatasetGroup API call. */
	static readonly DELETE_DATASET_GROUP: string[] = [
		"forecast:DeleteDatasetGroup",
	];
	/** IAM actions required for the DeleteDatasetImportJob API call. */
	static readonly DELETE_DATASET_IMPORT_JOB: string[] = [
		"forecast:DeleteDatasetImportJob",
	];
	/** IAM actions required for the DeleteExplainability API call. */
	static readonly DELETE_EXPLAINABILITY: string[] = [
		"forecast:DeleteExplainability",
	];
	/** IAM actions required for the DeleteExplainabilityExport API call. */
	static readonly DELETE_EXPLAINABILITY_EXPORT: string[] = [
		"forecast:DeleteExplainabilityExport",
	];
	/** IAM actions required for the DeleteForecast API call. */
	static readonly DELETE_FORECAST: string[] = ["forecast:DeleteForecast"];
	/** IAM actions required for the DeleteForecastExportJob API call. */
	static readonly DELETE_FORECAST_EXPORT_JOB: string[] = [
		"forecast:DeleteForecastExportJob",
	];
	/** IAM actions required for the DeleteMonitor API call. */
	static readonly DELETE_MONITOR: string[] = ["forecast:DeleteMonitor"];
	/** IAM actions required for the DeletePredictor API call. */
	static readonly DELETE_PREDICTOR: string[] = ["forecast:DeletePredictor"];
	/** IAM actions required for the DeletePredictorBacktestExportJob API call. */
	static readonly DELETE_PREDICTOR_BACKTEST_EXPORT_JOB: string[] = [
		"forecast:DeletePredictorBacktestExportJob",
	];
	/** IAM actions required for the DeleteResourceTree API call. */
	static readonly DELETE_RESOURCE_TREE: string[] = [
		"forecast:DeleteResourceTree",
	];
	/** IAM actions required for the DeleteWhatIfAnalysis API call. */
	static readonly DELETE_WHAT_IF_ANALYSIS: string[] = [
		"forecast:DeleteWhatIfAnalysis",
	];
	/** IAM actions required for the DeleteWhatIfForecast API call. */
	static readonly DELETE_WHAT_IF_FORECAST: string[] = [];
	/** IAM actions required for the DeleteWhatIfForecastExport API call. */
	static readonly DELETE_WHAT_IF_FORECAST_EXPORT: string[] = [];
	/** IAM actions required for the DescribeAutoPredictor API call. */
	static readonly DESCRIBE_AUTO_PREDICTOR: string[] = [
		"forecast:DescribeAutoPredictor",
	];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DESCRIBE_DATASET: string[] = ["forecast:DescribeDataset"];
	/** IAM actions required for the DescribeDatasetGroup API call. */
	static readonly DESCRIBE_DATASET_GROUP: string[] = [
		"forecast:DescribeDatasetGroup",
	];
	/** IAM actions required for the DescribeDatasetImportJob API call. */
	static readonly DESCRIBE_DATASET_IMPORT_JOB: string[] = [
		"forecast:DescribeDatasetImportJob",
	];
	/** IAM actions required for the DescribeExplainability API call. */
	static readonly DESCRIBE_EXPLAINABILITY: string[] = [
		"forecast:DescribeExplainability",
	];
	/** IAM actions required for the DescribeExplainabilityExport API call. */
	static readonly DESCRIBE_EXPLAINABILITY_EXPORT: string[] = [
		"forecast:DescribeExplainabilityExport",
	];
	/** IAM actions required for the DescribeForecast API call. */
	static readonly DESCRIBE_FORECAST: string[] = ["forecast:DescribeForecast"];
	/** IAM actions required for the DescribeForecastExportJob API call. */
	static readonly DESCRIBE_FORECAST_EXPORT_JOB: string[] = [
		"forecast:DescribeForecastExportJob",
	];
	/** IAM actions required for the DescribeMonitor API call. */
	static readonly DESCRIBE_MONITOR: string[] = ["forecast:DescribeMonitor"];
	/** IAM actions required for the DescribePredictor API call. */
	static readonly DESCRIBE_PREDICTOR: string[] = ["forecast:DescribePredictor"];
	/** IAM actions required for the DescribePredictorBacktestExportJob API call. */
	static readonly DESCRIBE_PREDICTOR_BACKTEST_EXPORT_JOB: string[] = [
		"forecast:DescribePredictorBacktestExportJob",
	];
	/** IAM actions required for the DescribeWhatIfAnalysis API call. */
	static readonly DESCRIBE_WHAT_IF_ANALYSIS: string[] = [
		"forecast:DescribeWhatIfAnalysis",
	];
	/** IAM actions required for the DescribeWhatIfForecast API call. */
	static readonly DESCRIBE_WHAT_IF_FORECAST: string[] = [
		"forecast:DescribeWhatIfForecast",
	];
	/** IAM actions required for the DescribeWhatIfForecastExport API call. */
	static readonly DESCRIBE_WHAT_IF_FORECAST_EXPORT: string[] = [];
	/** IAM actions required for the GetAccuracyMetrics API call. */
	static readonly GET_ACCURACY_METRICS: string[] = [
		"forecast:GetAccuracyMetrics",
	];
	/** IAM actions required for the ListDatasetGroups API call. */
	static readonly LIST_DATASET_GROUPS: string[] = [
		"forecast:ListDatasetGroups",
	];
	/** IAM actions required for the ListDatasetImportJobs API call. */
	static readonly LIST_DATASET_IMPORT_JOBS: string[] = [
		"forecast:ListDatasetImportJobs",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly LIST_DATASETS: string[] = ["forecast:ListDatasets"];
	/** IAM actions required for the ListExplainabilities API call. */
	static readonly LIST_EXPLAINABILITIES: string[] = [
		"forecast:ListExplainabilities",
	];
	/** IAM actions required for the ListExplainabilityExports API call. */
	static readonly LIST_EXPLAINABILITY_EXPORTS: string[] = [
		"forecast:ListExplainabilityExports",
	];
	/** IAM actions required for the ListForecastExportJobs API call. */
	static readonly LIST_FORECAST_EXPORT_JOBS: string[] = [
		"forecast:ListForecastExportJobs",
	];
	/** IAM actions required for the ListForecasts API call. */
	static readonly LIST_FORECASTS: string[] = ["forecast:ListForecasts"];
	/** IAM actions required for the ListMonitorEvaluations API call. */
	static readonly LIST_MONITOR_EVALUATIONS: string[] = [
		"forecast:ListMonitorEvaluations",
	];
	/** IAM actions required for the ListMonitors API call. */
	static readonly LIST_MONITORS: string[] = ["forecast:ListMonitors"];
	/** IAM actions required for the ListPredictorBacktestExportJobs API call. */
	static readonly LIST_PREDICTOR_BACKTEST_EXPORT_JOBS: string[] = [
		"forecast:ListPredictorBacktestExportJobs",
	];
	/** IAM actions required for the ListPredictors API call. */
	static readonly LIST_PREDICTORS: string[] = ["forecast:ListPredictors"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"forecast:ListTagsForResource",
	];
	/** IAM actions required for the ListWhatIfAnalyses API call. */
	static readonly LIST_WHAT_IF_ANALYSES: string[] = [
		"forecast:ListWhatIfAnalyses",
	];
	/** IAM actions required for the ListWhatIfForecastExports API call. */
	static readonly LIST_WHAT_IF_FORECAST_EXPORTS: string[] = [
		"forecast:ListWhatIfForecastExports",
	];
	/** IAM actions required for the ListWhatIfForecasts API call. */
	static readonly LIST_WHAT_IF_FORECASTS: string[] = [
		"forecast:ListWhatIfForecasts",
	];
	/** IAM actions required for the QueryForecast API call. */
	static readonly QUERY_FORECAST: string[] = ["forecast:QueryForecast"];
	/** IAM actions required for the QueryWhatIfForecast API call. */
	static readonly QUERY_WHAT_IF_FORECAST: string[] = [
		"forecast:QueryWhatIfForecast",
	];
	/** IAM actions required for the ResumeResource API call. */
	static readonly RESUME_RESOURCE: string[] = ["forecast:ResumeResource"];
	/** IAM actions required for the StopResource API call. */
	static readonly STOP_RESOURCE: string[] = ["forecast:StopResource"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["forecast:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["forecast:UntagResource"];
	/** IAM actions required for the UpdateDatasetGroup API call. */
	static readonly UPDATE_DATASET_GROUP: string[] = [
		"forecast:UpdateDatasetGroup",
	];
}

/**
 * Condition key constants and builders for forecast.
 */
export class ForecastConditions {
	/** Condition keys applicable to the CreateAutoPredictor action. */
	static readonly CREATE_AUTO_PREDICTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CREATE_DATASET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatasetGroup action. */
	static readonly CREATE_DATASET_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatasetImportJob action. */
	static readonly CREATE_DATASET_IMPORT_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExplainability action. */
	static readonly CREATE_EXPLAINABILITY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExplainabilityExport action. */
	static readonly CREATE_EXPLAINABILITY_EXPORT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateForecast action. */
	static readonly CREATE_FORECAST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateForecastEndpoint action. */
	static readonly CREATE_FORECAST_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateForecastExportJob action. */
	static readonly CREATE_FORECAST_EXPORT_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMonitor action. */
	static readonly CREATE_MONITOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePredictor action. */
	static readonly CREATE_PREDICTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePredictorBacktestExportJob action. */
	static readonly CREATE_PREDICTOR_BACKTEST_EXPORT_JOB_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateWhatIfAnalysis action. */
	static readonly CREATE_WHAT_IF_ANALYSIS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWhatIfForecast action. */
	static readonly CREATE_WHAT_IF_FORECAST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWhatIfForecastExport action. */
	static readonly CREATE_WHAT_IF_FORECAST_EXPORT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ResumeResource action. */
	static readonly RESUME_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StopResource action. */
	static readonly STOP_RESOURCE_CONDITION_KEYS: string[] = [
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
