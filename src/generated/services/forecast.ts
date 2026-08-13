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
	static readonly CreateAutoPredictor = "forecast:CreateAutoPredictor";
	/** [Write] forecast:CreateDataset */
	static readonly CreateDataset = "forecast:CreateDataset";
	/** [Write] forecast:CreateDatasetGroup */
	static readonly CreateDatasetGroup = "forecast:CreateDatasetGroup";
	/** [Write] forecast:CreateDatasetImportJob */
	static readonly CreateDatasetImportJob = "forecast:CreateDatasetImportJob";
	/** [Write] forecast:CreateExplainability */
	static readonly CreateExplainability = "forecast:CreateExplainability";
	/** [Write] forecast:CreateExplainabilityExport */
	static readonly CreateExplainabilityExport =
		"forecast:CreateExplainabilityExport";
	/** [Write] forecast:CreateForecast */
	static readonly CreateForecast = "forecast:CreateForecast";
	/** [Write] forecast:CreateForecastEndpoint */
	static readonly CreateForecastEndpoint = "forecast:CreateForecastEndpoint";
	/** [Write] forecast:CreateForecastExportJob */
	static readonly CreateForecastExportJob = "forecast:CreateForecastExportJob";
	/** [Write] forecast:CreateMonitor */
	static readonly CreateMonitor = "forecast:CreateMonitor";
	/** [Write] forecast:CreatePredictor */
	static readonly CreatePredictor = "forecast:CreatePredictor";
	/** [Write] forecast:CreatePredictorBacktestExportJob */
	static readonly CreatePredictorBacktestExportJob =
		"forecast:CreatePredictorBacktestExportJob";
	/** [Write] forecast:CreateWhatIfAnalysis */
	static readonly CreateWhatIfAnalysis = "forecast:CreateWhatIfAnalysis";
	/** [Write] forecast:CreateWhatIfForecast */
	static readonly CreateWhatIfForecast = "forecast:CreateWhatIfForecast";
	/** [Write] forecast:CreateWhatIfForecastExport */
	static readonly CreateWhatIfForecastExport =
		"forecast:CreateWhatIfForecastExport";
	/** [Write] forecast:DeleteDataset */
	static readonly DeleteDataset = "forecast:DeleteDataset";
	/** [Write] forecast:DeleteDatasetGroup */
	static readonly DeleteDatasetGroup = "forecast:DeleteDatasetGroup";
	/** [Write] forecast:DeleteDatasetImportJob */
	static readonly DeleteDatasetImportJob = "forecast:DeleteDatasetImportJob";
	/** [Write] forecast:DeleteExplainability */
	static readonly DeleteExplainability = "forecast:DeleteExplainability";
	/** [Write] forecast:DeleteExplainabilityExport */
	static readonly DeleteExplainabilityExport =
		"forecast:DeleteExplainabilityExport";
	/** [Write] forecast:DeleteForecast */
	static readonly DeleteForecast = "forecast:DeleteForecast";
	/** [Write] forecast:DeleteForecastEndpoint */
	static readonly DeleteForecastEndpoint = "forecast:DeleteForecastEndpoint";
	/** [Write] forecast:DeleteForecastExportJob */
	static readonly DeleteForecastExportJob = "forecast:DeleteForecastExportJob";
	/** [Write] forecast:DeleteMonitor */
	static readonly DeleteMonitor = "forecast:DeleteMonitor";
	/** [Write] forecast:DeletePredictor */
	static readonly DeletePredictor = "forecast:DeletePredictor";
	/** [Write] forecast:DeletePredictorBacktestExportJob */
	static readonly DeletePredictorBacktestExportJob =
		"forecast:DeletePredictorBacktestExportJob";
	/** [Write] forecast:DeleteResourceTree */
	static readonly DeleteResourceTree = "forecast:DeleteResourceTree";
	/** [Write] forecast:DeleteWhatIfAnalysis */
	static readonly DeleteWhatIfAnalysis = "forecast:DeleteWhatIfAnalysis";
	/** [Write] forecast:DeleteWhatIfForecast */
	static readonly DeleteWhatIfForecast = "forecast:DeleteWhatIfForecast";
	/** [Write] forecast:DeleteWhatIfForecastExport */
	static readonly DeleteWhatIfForecastExport =
		"forecast:DeleteWhatIfForecastExport";
	/** [Read] forecast:DescribeAutoPredictor */
	static readonly DescribeAutoPredictor = "forecast:DescribeAutoPredictor";
	/** [Read] forecast:DescribeDataset */
	static readonly DescribeDataset = "forecast:DescribeDataset";
	/** [Read] forecast:DescribeDatasetGroup */
	static readonly DescribeDatasetGroup = "forecast:DescribeDatasetGroup";
	/** [Read] forecast:DescribeDatasetImportJob */
	static readonly DescribeDatasetImportJob =
		"forecast:DescribeDatasetImportJob";
	/** [Read] forecast:DescribeExplainability */
	static readonly DescribeExplainability = "forecast:DescribeExplainability";
	/** [Read] forecast:DescribeExplainabilityExport */
	static readonly DescribeExplainabilityExport =
		"forecast:DescribeExplainabilityExport";
	/** [Read] forecast:DescribeForecast */
	static readonly DescribeForecast = "forecast:DescribeForecast";
	/** [Read] forecast:DescribeForecastEndpoint */
	static readonly DescribeForecastEndpoint =
		"forecast:DescribeForecastEndpoint";
	/** [Read] forecast:DescribeForecastExportJob */
	static readonly DescribeForecastExportJob =
		"forecast:DescribeForecastExportJob";
	/** [Read] forecast:DescribeMonitor */
	static readonly DescribeMonitor = "forecast:DescribeMonitor";
	/** [Read] forecast:DescribePredictor */
	static readonly DescribePredictor = "forecast:DescribePredictor";
	/** [Read] forecast:DescribePredictorBacktestExportJob */
	static readonly DescribePredictorBacktestExportJob =
		"forecast:DescribePredictorBacktestExportJob";
	/** [Read] forecast:DescribeWhatIfAnalysis */
	static readonly DescribeWhatIfAnalysis = "forecast:DescribeWhatIfAnalysis";
	/** [Read] forecast:DescribeWhatIfForecast */
	static readonly DescribeWhatIfForecast = "forecast:DescribeWhatIfForecast";
	/** [Read] forecast:DescribeWhatIfForecastExport */
	static readonly DescribeWhatIfForecastExport =
		"forecast:DescribeWhatIfForecastExport";
	/** [Read] forecast:GetAccuracyMetrics */
	static readonly actionGetAccuracyMetrics = "forecast:GetAccuracyMetrics";
	/** [Read] forecast:GetRecentForecastContext */
	static readonly actionGetRecentForecastContext =
		"forecast:GetRecentForecastContext";
	/** [Read] forecast:InvokeForecastEndpoint */
	static readonly InvokeForecastEndpoint = "forecast:InvokeForecastEndpoint";
	/** [Read] forecast:ListDatasetGroups */
	static readonly ListDatasetGroups = "forecast:ListDatasetGroups";
	/** [Read] forecast:ListDatasetImportJobs */
	static readonly ListDatasetImportJobs = "forecast:ListDatasetImportJobs";
	/** [Read] forecast:ListDatasets */
	static readonly ListDatasets = "forecast:ListDatasets";
	/** [Read] forecast:ListExplainabilities */
	static readonly ListExplainabilities = "forecast:ListExplainabilities";
	/** [Read] forecast:ListExplainabilityExports */
	static readonly ListExplainabilityExports =
		"forecast:ListExplainabilityExports";
	/** [Read] forecast:ListForecastExportJobs */
	static readonly ListForecastExportJobs = "forecast:ListForecastExportJobs";
	/** [Read] forecast:ListForecasts */
	static readonly ListForecasts = "forecast:ListForecasts";
	/** [Read] forecast:ListMonitorEvaluations */
	static readonly ListMonitorEvaluations = "forecast:ListMonitorEvaluations";
	/** [Read] forecast:ListMonitors */
	static readonly ListMonitors = "forecast:ListMonitors";
	/** [Read] forecast:ListPredictorBacktestExportJobs */
	static readonly ListPredictorBacktestExportJobs =
		"forecast:ListPredictorBacktestExportJobs";
	/** [Read] forecast:ListPredictors */
	static readonly ListPredictors = "forecast:ListPredictors";
	/** [Read] forecast:ListTagsForResource */
	static readonly ListTagsForResource = "forecast:ListTagsForResource";
	/** [Read] forecast:ListWhatIfAnalyses */
	static readonly ListWhatIfAnalyses = "forecast:ListWhatIfAnalyses";
	/** [Read] forecast:ListWhatIfForecastExports */
	static readonly ListWhatIfForecastExports =
		"forecast:ListWhatIfForecastExports";
	/** [Read] forecast:ListWhatIfForecasts */
	static readonly ListWhatIfForecasts = "forecast:ListWhatIfForecasts";
	/** [Read] forecast:QueryForecast */
	static readonly QueryForecast = "forecast:QueryForecast";
	/** [Read] forecast:QueryWhatIfForecast */
	static readonly QueryWhatIfForecast = "forecast:QueryWhatIfForecast";
	/** [Write] forecast:ResumeResource */
	static readonly ResumeResource = "forecast:ResumeResource";
	/** [Write] forecast:StopResource */
	static readonly StopResource = "forecast:StopResource";
	/** [Tagging] forecast:TagResource */
	static readonly TagResource = "forecast:TagResource";
	/** [Tagging] forecast:UntagResource */
	static readonly UntagResource = "forecast:UntagResource";
	/** [Write] forecast:UpdateDatasetGroup */
	static readonly UpdateDatasetGroup = "forecast:UpdateDatasetGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ForecastActions.DescribeAutoPredictor,
		ForecastActions.DescribeDataset,
		ForecastActions.DescribeDatasetGroup,
		ForecastActions.DescribeDatasetImportJob,
		ForecastActions.DescribeExplainability,
		ForecastActions.DescribeExplainabilityExport,
		ForecastActions.DescribeForecast,
		ForecastActions.DescribeForecastEndpoint,
		ForecastActions.DescribeForecastExportJob,
		ForecastActions.DescribeMonitor,
		ForecastActions.DescribePredictor,
		ForecastActions.DescribePredictorBacktestExportJob,
		ForecastActions.DescribeWhatIfAnalysis,
		ForecastActions.DescribeWhatIfForecast,
		ForecastActions.DescribeWhatIfForecastExport,
		ForecastActions.actionGetAccuracyMetrics,
		ForecastActions.actionGetRecentForecastContext,
		ForecastActions.InvokeForecastEndpoint,
		ForecastActions.ListDatasetGroups,
		ForecastActions.ListDatasetImportJobs,
		ForecastActions.ListDatasets,
		ForecastActions.ListExplainabilities,
		ForecastActions.ListExplainabilityExports,
		ForecastActions.ListForecastExportJobs,
		ForecastActions.ListForecasts,
		ForecastActions.ListMonitorEvaluations,
		ForecastActions.ListMonitors,
		ForecastActions.ListPredictorBacktestExportJobs,
		ForecastActions.ListPredictors,
		ForecastActions.ListTagsForResource,
		ForecastActions.ListWhatIfAnalyses,
		ForecastActions.ListWhatIfForecastExports,
		ForecastActions.ListWhatIfForecasts,
		ForecastActions.QueryForecast,
		ForecastActions.QueryWhatIfForecast,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ForecastActions.CreateAutoPredictor,
		ForecastActions.CreateDataset,
		ForecastActions.CreateDatasetGroup,
		ForecastActions.CreateDatasetImportJob,
		ForecastActions.CreateExplainability,
		ForecastActions.CreateExplainabilityExport,
		ForecastActions.CreateForecast,
		ForecastActions.CreateForecastEndpoint,
		ForecastActions.CreateForecastExportJob,
		ForecastActions.CreateMonitor,
		ForecastActions.CreatePredictor,
		ForecastActions.CreatePredictorBacktestExportJob,
		ForecastActions.CreateWhatIfAnalysis,
		ForecastActions.CreateWhatIfForecast,
		ForecastActions.CreateWhatIfForecastExport,
		ForecastActions.DeleteDataset,
		ForecastActions.DeleteDatasetGroup,
		ForecastActions.DeleteDatasetImportJob,
		ForecastActions.DeleteExplainability,
		ForecastActions.DeleteExplainabilityExport,
		ForecastActions.DeleteForecast,
		ForecastActions.DeleteForecastEndpoint,
		ForecastActions.DeleteForecastExportJob,
		ForecastActions.DeleteMonitor,
		ForecastActions.DeletePredictor,
		ForecastActions.DeletePredictorBacktestExportJob,
		ForecastActions.DeleteResourceTree,
		ForecastActions.DeleteWhatIfAnalysis,
		ForecastActions.DeleteWhatIfForecast,
		ForecastActions.DeleteWhatIfForecastExport,
		ForecastActions.ResumeResource,
		ForecastActions.StopResource,
		ForecastActions.UpdateDatasetGroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ForecastActions.TagResource,
		ForecastActions.UntagResource,
	];
}

/**
 * Properties for building a algorithm ARN.
 */
export interface ForecastAlgorithmArnProps {
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
 * Parsed components of a algorithm ARN.
 */
export interface ForecastAlgorithmArnComponents {
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
 * Properties for building a dataset ARN.
 */
export interface ForecastDatasetArnProps {
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
 * Parsed components of a dataset ARN.
 */
export interface ForecastDatasetArnComponents {
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
 * Properties for building a datasetGroup ARN.
 */
export interface ForecastDatasetGroupArnProps {
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
 * Parsed components of a datasetGroup ARN.
 */
export interface ForecastDatasetGroupArnComponents {
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
 * Properties for building a datasetImportJob ARN.
 */
export interface ForecastDatasetImportJobArnProps {
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
 * Parsed components of a datasetImportJob ARN.
 */
export interface ForecastDatasetImportJobArnComponents {
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
 * Properties for building a endpoint ARN.
 */
export interface ForecastEndpointArnProps {
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
 * Parsed components of a endpoint ARN.
 */
export interface ForecastEndpointArnComponents {
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
 * Properties for building a explainability ARN.
 */
export interface ForecastExplainabilityArnProps {
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
 * Parsed components of a explainability ARN.
 */
export interface ForecastExplainabilityArnComponents {
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
 * Properties for building a explainabilityExport ARN.
 */
export interface ForecastExplainabilityExportArnProps {
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
 * Parsed components of a explainabilityExport ARN.
 */
export interface ForecastExplainabilityExportArnComponents {
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
 * Properties for building a forecast ARN.
 */
export interface ForecastForecastArnProps {
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
 * Parsed components of a forecast ARN.
 */
export interface ForecastForecastArnComponents {
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
 * Properties for building a forecastExport ARN.
 */
export interface ForecastForecastExportArnProps {
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
 * Parsed components of a forecastExport ARN.
 */
export interface ForecastForecastExportArnComponents {
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
 * Properties for building a monitor ARN.
 */
export interface ForecastMonitorArnProps {
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
 * Parsed components of a monitor ARN.
 */
export interface ForecastMonitorArnComponents {
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
 * Properties for building a predictor ARN.
 */
export interface ForecastPredictorArnProps {
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
 * Parsed components of a predictor ARN.
 */
export interface ForecastPredictorArnComponents {
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
 * Properties for building a predictorBacktestExportJob ARN.
 */
export interface ForecastPredictorBacktestExportJobArnProps {
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
 * Parsed components of a predictorBacktestExportJob ARN.
 */
export interface ForecastPredictorBacktestExportJobArnComponents {
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
 * Properties for building a whatIfAnalysis ARN.
 */
export interface ForecastWhatIfAnalysisArnProps {
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
 * Parsed components of a whatIfAnalysis ARN.
 */
export interface ForecastWhatIfAnalysisArnComponents {
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
 * Properties for building a whatIfForecast ARN.
 */
export interface ForecastWhatIfForecastArnProps {
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
 * Parsed components of a whatIfForecast ARN.
 */
export interface ForecastWhatIfForecastArnComponents {
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
 * Properties for building a whatIfForecastExport ARN.
 */
export interface ForecastWhatIfForecastExportArnProps {
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
 * Parsed components of a whatIfForecastExport ARN.
 */
export interface ForecastWhatIfForecastExportArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const AlgorithmArnRegex =
	/^arn:(?<partition>[^:]+):forecast:::algorithm\/(?<resourceId>[^:/?]+)$/;
const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):dataset\/(?<resourceId>[^:/?]+)$/;
const DatasetGroupArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):dataset-group\/(?<resourceId>[^:/?]+)$/;
const DatasetImportJobArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):dataset-import-job\/(?<resourceId>[^:/?]+)$/;
const EndpointArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):forecast-endpoint\/(?<resourceId>[^:/?]+)$/;
const ExplainabilityArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):explainability\/(?<resourceId>[^:/?]+)$/;
const ExplainabilityExportArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):explainability-export\/(?<resourceId>[^:/?]+)$/;
const ForecastArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):forecast\/(?<resourceId>[^:/?]+)$/;
const ForecastExportArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):forecast-export-job\/(?<resourceId>[^:/?]+)$/;
const MonitorArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):monitor\/(?<resourceId>[^:/?]+)$/;
const PredictorArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):predictor\/(?<resourceId>[^:/?]+)$/;
const PredictorBacktestExportJobArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):predictor-backtest-export-job\/(?<resourceId>[^:/?]+)$/;
const WhatIfAnalysisArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):what-if-analysis\/(?<resourceId>[^:/?]+)$/;
const WhatIfForecastArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):what-if-forecast\/(?<resourceId>[^:/?]+)$/;
const WhatIfForecastExportArnRegex =
	/^arn:(?<partition>[^:]+):forecast:(?<region>[^:]*):(?<account>[^:]*):what-if-forecast-export\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for forecast resources.
 */
export class ForecastResources {
	/**
	 * Builds an ARN for the algorithm resource.
	 */
	static algorithm(props: ForecastAlgorithmArnProps): string {
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
	static parseAlgorithmArn(arn: string): ForecastAlgorithmArnComponents {
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
	static dataset(props: ForecastDatasetArnProps): string {
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
	static parseDatasetArn(arn: string): ForecastDatasetArnComponents {
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
	static datasetGroup(props: ForecastDatasetGroupArnProps): string {
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
	static parseDatasetGroupArn(arn: string): ForecastDatasetGroupArnComponents {
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
	static datasetImportJob(props: ForecastDatasetImportJobArnProps): string {
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
	static parseDatasetImportJobArn(
		arn: string,
	): ForecastDatasetImportJobArnComponents {
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
	static endpoint(props: ForecastEndpointArnProps): string {
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
	static parseEndpointArn(arn: string): ForecastEndpointArnComponents {
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
	static explainability(props: ForecastExplainabilityArnProps): string {
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
	static parseExplainabilityArn(
		arn: string,
	): ForecastExplainabilityArnComponents {
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
	static explainabilityExport(
		props: ForecastExplainabilityExportArnProps,
	): string {
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
	static parseExplainabilityExportArn(
		arn: string,
	): ForecastExplainabilityExportArnComponents {
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
	static forecast(props: ForecastForecastArnProps): string {
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
	static parseForecastArn(arn: string): ForecastForecastArnComponents {
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
	static forecastExport(props: ForecastForecastExportArnProps): string {
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
	static parseForecastExportArn(
		arn: string,
	): ForecastForecastExportArnComponents {
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
	static monitor(props: ForecastMonitorArnProps): string {
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
	static parseMonitorArn(arn: string): ForecastMonitorArnComponents {
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
	static predictor(props: ForecastPredictorArnProps): string {
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
	static parsePredictorArn(arn: string): ForecastPredictorArnComponents {
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
	static predictorBacktestExportJob(
		props: ForecastPredictorBacktestExportJobArnProps,
	): string {
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
	static parsePredictorBacktestExportJobArn(
		arn: string,
	): ForecastPredictorBacktestExportJobArnComponents {
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
	static whatIfAnalysis(props: ForecastWhatIfAnalysisArnProps): string {
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
	static parseWhatIfAnalysisArn(
		arn: string,
	): ForecastWhatIfAnalysisArnComponents {
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
	static whatIfForecast(props: ForecastWhatIfForecastArnProps): string {
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
	static parseWhatIfForecastArn(
		arn: string,
	): ForecastWhatIfForecastArnComponents {
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
	static whatIfForecastExport(
		props: ForecastWhatIfForecastExportArnProps,
	): string {
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
	static parseWhatIfForecastExportArn(
		arn: string,
	): ForecastWhatIfForecastExportArnComponents {
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
	static readonly CreateAutoPredictor: string[] = [
		"forecast:CreateAutoPredictor",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CreateDataset: string[] = [
		"forecast:CreateDataset",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateDatasetGroup API call. */
	static readonly CreateDatasetGroup: string[] = [
		"forecast:CreateDatasetGroup",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateDatasetImportJob API call. */
	static readonly CreateDatasetImportJob: string[] = [
		"forecast:CreateDatasetImportJob",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateExplainability API call. */
	static readonly CreateExplainability: string[] = [
		"forecast:CreateExplainability",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateExplainabilityExport API call. */
	static readonly CreateExplainabilityExport: string[] = [
		"forecast:CreateExplainabilityExport",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateForecast API call. */
	static readonly CreateForecast: string[] = [
		"forecast:CreateForecast",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateForecastExportJob API call. */
	static readonly CreateForecastExportJob: string[] = [
		"forecast:CreateForecastExportJob",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateMonitor API call. */
	static readonly CreateMonitor: string[] = [
		"forecast:CreateMonitor",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreatePredictor API call. */
	static readonly CreatePredictor: string[] = [
		"forecast:CreatePredictor",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreatePredictorBacktestExportJob API call. */
	static readonly CreatePredictorBacktestExportJob: string[] = [
		"forecast:CreatePredictorBacktestExportJob",
		"iam:PassRole",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateWhatIfAnalysis API call. */
	static readonly CreateWhatIfAnalysis: string[] = [
		"forecast:CreateWhatIfAnalysis",
		"forecast:TagResource",
	];
	/** IAM actions required for the CreateWhatIfForecast API call. */
	static readonly CreateWhatIfForecast: string[] = [];
	/** IAM actions required for the CreateWhatIfForecastExport API call. */
	static readonly CreateWhatIfForecastExport: string[] = [];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DeleteDataset: string[] = ["forecast:DeleteDataset"];
	/** IAM actions required for the DeleteDatasetGroup API call. */
	static readonly DeleteDatasetGroup: string[] = [
		"forecast:DeleteDatasetGroup",
	];
	/** IAM actions required for the DeleteDatasetImportJob API call. */
	static readonly DeleteDatasetImportJob: string[] = [
		"forecast:DeleteDatasetImportJob",
	];
	/** IAM actions required for the DeleteExplainability API call. */
	static readonly DeleteExplainability: string[] = [
		"forecast:DeleteExplainability",
	];
	/** IAM actions required for the DeleteExplainabilityExport API call. */
	static readonly DeleteExplainabilityExport: string[] = [
		"forecast:DeleteExplainabilityExport",
	];
	/** IAM actions required for the DeleteForecast API call. */
	static readonly DeleteForecast: string[] = ["forecast:DeleteForecast"];
	/** IAM actions required for the DeleteForecastExportJob API call. */
	static readonly DeleteForecastExportJob: string[] = [
		"forecast:DeleteForecastExportJob",
	];
	/** IAM actions required for the DeleteMonitor API call. */
	static readonly DeleteMonitor: string[] = ["forecast:DeleteMonitor"];
	/** IAM actions required for the DeletePredictor API call. */
	static readonly DeletePredictor: string[] = ["forecast:DeletePredictor"];
	/** IAM actions required for the DeletePredictorBacktestExportJob API call. */
	static readonly DeletePredictorBacktestExportJob: string[] = [
		"forecast:DeletePredictorBacktestExportJob",
	];
	/** IAM actions required for the DeleteResourceTree API call. */
	static readonly DeleteResourceTree: string[] = [
		"forecast:DeleteResourceTree",
	];
	/** IAM actions required for the DeleteWhatIfAnalysis API call. */
	static readonly DeleteWhatIfAnalysis: string[] = [
		"forecast:DeleteWhatIfAnalysis",
	];
	/** IAM actions required for the DeleteWhatIfForecast API call. */
	static readonly DeleteWhatIfForecast: string[] = [];
	/** IAM actions required for the DeleteWhatIfForecastExport API call. */
	static readonly DeleteWhatIfForecastExport: string[] = [];
	/** IAM actions required for the DescribeAutoPredictor API call. */
	static readonly DescribeAutoPredictor: string[] = [
		"forecast:DescribeAutoPredictor",
	];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DescribeDataset: string[] = ["forecast:DescribeDataset"];
	/** IAM actions required for the DescribeDatasetGroup API call. */
	static readonly DescribeDatasetGroup: string[] = [
		"forecast:DescribeDatasetGroup",
	];
	/** IAM actions required for the DescribeDatasetImportJob API call. */
	static readonly DescribeDatasetImportJob: string[] = [
		"forecast:DescribeDatasetImportJob",
	];
	/** IAM actions required for the DescribeExplainability API call. */
	static readonly DescribeExplainability: string[] = [
		"forecast:DescribeExplainability",
	];
	/** IAM actions required for the DescribeExplainabilityExport API call. */
	static readonly DescribeExplainabilityExport: string[] = [
		"forecast:DescribeExplainabilityExport",
	];
	/** IAM actions required for the DescribeForecast API call. */
	static readonly DescribeForecast: string[] = ["forecast:DescribeForecast"];
	/** IAM actions required for the DescribeForecastExportJob API call. */
	static readonly DescribeForecastExportJob: string[] = [
		"forecast:DescribeForecastExportJob",
	];
	/** IAM actions required for the DescribeMonitor API call. */
	static readonly DescribeMonitor: string[] = ["forecast:DescribeMonitor"];
	/** IAM actions required for the DescribePredictor API call. */
	static readonly DescribePredictor: string[] = ["forecast:DescribePredictor"];
	/** IAM actions required for the DescribePredictorBacktestExportJob API call. */
	static readonly DescribePredictorBacktestExportJob: string[] = [
		"forecast:DescribePredictorBacktestExportJob",
	];
	/** IAM actions required for the DescribeWhatIfAnalysis API call. */
	static readonly DescribeWhatIfAnalysis: string[] = [
		"forecast:DescribeWhatIfAnalysis",
	];
	/** IAM actions required for the DescribeWhatIfForecast API call. */
	static readonly DescribeWhatIfForecast: string[] = [
		"forecast:DescribeWhatIfForecast",
	];
	/** IAM actions required for the DescribeWhatIfForecastExport API call. */
	static readonly DescribeWhatIfForecastExport: string[] = [];
	/** IAM actions required for the GetAccuracyMetrics API call. */
	static readonly opGetAccuracyMetrics: string[] = [
		"forecast:GetAccuracyMetrics",
	];
	/** IAM actions required for the ListDatasetGroups API call. */
	static readonly ListDatasetGroups: string[] = ["forecast:ListDatasetGroups"];
	/** IAM actions required for the ListDatasetImportJobs API call. */
	static readonly ListDatasetImportJobs: string[] = [
		"forecast:ListDatasetImportJobs",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly ListDatasets: string[] = ["forecast:ListDatasets"];
	/** IAM actions required for the ListExplainabilities API call. */
	static readonly ListExplainabilities: string[] = [
		"forecast:ListExplainabilities",
	];
	/** IAM actions required for the ListExplainabilityExports API call. */
	static readonly ListExplainabilityExports: string[] = [
		"forecast:ListExplainabilityExports",
	];
	/** IAM actions required for the ListForecastExportJobs API call. */
	static readonly ListForecastExportJobs: string[] = [
		"forecast:ListForecastExportJobs",
	];
	/** IAM actions required for the ListForecasts API call. */
	static readonly ListForecasts: string[] = ["forecast:ListForecasts"];
	/** IAM actions required for the ListMonitorEvaluations API call. */
	static readonly ListMonitorEvaluations: string[] = [
		"forecast:ListMonitorEvaluations",
	];
	/** IAM actions required for the ListMonitors API call. */
	static readonly ListMonitors: string[] = ["forecast:ListMonitors"];
	/** IAM actions required for the ListPredictorBacktestExportJobs API call. */
	static readonly ListPredictorBacktestExportJobs: string[] = [
		"forecast:ListPredictorBacktestExportJobs",
	];
	/** IAM actions required for the ListPredictors API call. */
	static readonly ListPredictors: string[] = ["forecast:ListPredictors"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"forecast:ListTagsForResource",
	];
	/** IAM actions required for the ListWhatIfAnalyses API call. */
	static readonly ListWhatIfAnalyses: string[] = [
		"forecast:ListWhatIfAnalyses",
	];
	/** IAM actions required for the ListWhatIfForecastExports API call. */
	static readonly ListWhatIfForecastExports: string[] = [
		"forecast:ListWhatIfForecastExports",
	];
	/** IAM actions required for the ListWhatIfForecasts API call. */
	static readonly ListWhatIfForecasts: string[] = [
		"forecast:ListWhatIfForecasts",
	];
	/** IAM actions required for the QueryForecast API call. */
	static readonly QueryForecast: string[] = ["forecast:QueryForecast"];
	/** IAM actions required for the QueryWhatIfForecast API call. */
	static readonly QueryWhatIfForecast: string[] = [
		"forecast:QueryWhatIfForecast",
	];
	/** IAM actions required for the ResumeResource API call. */
	static readonly ResumeResource: string[] = ["forecast:ResumeResource"];
	/** IAM actions required for the StopResource API call. */
	static readonly StopResource: string[] = ["forecast:StopResource"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["forecast:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["forecast:UntagResource"];
	/** IAM actions required for the UpdateDatasetGroup API call. */
	static readonly UpdateDatasetGroup: string[] = [
		"forecast:UpdateDatasetGroup",
	];
}

/**
 * Condition key constants and builders for forecast.
 */
export class ForecastConditions {
	/** Condition keys applicable to the CreateAutoPredictor action. */
	static readonly CreateAutoPredictorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CreateDatasetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatasetGroup action. */
	static readonly CreateDatasetGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDatasetImportJob action. */
	static readonly CreateDatasetImportJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExplainability action. */
	static readonly CreateExplainabilityConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExplainabilityExport action. */
	static readonly CreateExplainabilityExportConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateForecast action. */
	static readonly CreateForecastConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateForecastEndpoint action. */
	static readonly CreateForecastEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateForecastExportJob action. */
	static readonly CreateForecastExportJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMonitor action. */
	static readonly CreateMonitorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePredictor action. */
	static readonly CreatePredictorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePredictorBacktestExportJob action. */
	static readonly CreatePredictorBacktestExportJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWhatIfAnalysis action. */
	static readonly CreateWhatIfAnalysisConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWhatIfForecast action. */
	static readonly CreateWhatIfForecastConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWhatIfForecastExport action. */
	static readonly CreateWhatIfForecastExportConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ResumeResource action. */
	static readonly ResumeResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StopResource action. */
	static readonly StopResourceConditionKeys: string[] = [
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
