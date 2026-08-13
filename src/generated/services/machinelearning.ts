// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/machinelearning.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the machinelearning service.
 */
export class MachineLearningActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "machinelearning";

	/** [Tagging] machinelearning:AddTags */
	static readonly AddTags = "machinelearning:AddTags";
	/** [Write] machinelearning:CreateBatchPrediction */
	static readonly CreateBatchPrediction =
		"machinelearning:CreateBatchPrediction";
	/** [Write] machinelearning:CreateDataSourceFromRDS */
	static readonly CreateDataSourceFromRDS =
		"machinelearning:CreateDataSourceFromRDS";
	/** [Write] machinelearning:CreateDataSourceFromRedshift */
	static readonly CreateDataSourceFromRedshift =
		"machinelearning:CreateDataSourceFromRedshift";
	/** [Write] machinelearning:CreateDataSourceFromS3 */
	static readonly CreateDataSourceFromS3 =
		"machinelearning:CreateDataSourceFromS3";
	/** [Write] machinelearning:CreateEvaluation */
	static readonly CreateEvaluation = "machinelearning:CreateEvaluation";
	/** [Write] machinelearning:CreateMLModel */
	static readonly CreateMLModel = "machinelearning:CreateMLModel";
	/** [Write] machinelearning:CreateRealtimeEndpoint */
	static readonly CreateRealtimeEndpoint =
		"machinelearning:CreateRealtimeEndpoint";
	/** [Write] machinelearning:DeleteBatchPrediction */
	static readonly DeleteBatchPrediction =
		"machinelearning:DeleteBatchPrediction";
	/** [Write] machinelearning:DeleteDataSource */
	static readonly DeleteDataSource = "machinelearning:DeleteDataSource";
	/** [Write] machinelearning:DeleteEvaluation */
	static readonly DeleteEvaluation = "machinelearning:DeleteEvaluation";
	/** [Write] machinelearning:DeleteMLModel */
	static readonly DeleteMLModel = "machinelearning:DeleteMLModel";
	/** [Write] machinelearning:DeleteRealtimeEndpoint */
	static readonly DeleteRealtimeEndpoint =
		"machinelearning:DeleteRealtimeEndpoint";
	/** [Tagging] machinelearning:DeleteTags */
	static readonly DeleteTags = "machinelearning:DeleteTags";
	/** [List] machinelearning:DescribeBatchPredictions */
	static readonly DescribeBatchPredictions =
		"machinelearning:DescribeBatchPredictions";
	/** [List] machinelearning:DescribeDataSources */
	static readonly DescribeDataSources = "machinelearning:DescribeDataSources";
	/** [List] machinelearning:DescribeEvaluations */
	static readonly DescribeEvaluations = "machinelearning:DescribeEvaluations";
	/** [List] machinelearning:DescribeMLModels */
	static readonly DescribeMLModels = "machinelearning:DescribeMLModels";
	/** [List] machinelearning:DescribeTags */
	static readonly DescribeTags = "machinelearning:DescribeTags";
	/** [Read] machinelearning:GetBatchPrediction */
	static readonly actionGetBatchPrediction =
		"machinelearning:GetBatchPrediction";
	/** [Read] machinelearning:GetDataSource */
	static readonly actionGetDataSource = "machinelearning:GetDataSource";
	/** [Read] machinelearning:GetEvaluation */
	static readonly actionGetEvaluation = "machinelearning:GetEvaluation";
	/** [Read] machinelearning:GetMLModel */
	static readonly actionGetMLModel = "machinelearning:GetMLModel";
	/** [Write] machinelearning:Predict */
	static readonly Predict = "machinelearning:Predict";
	/** [Write] machinelearning:UpdateBatchPrediction */
	static readonly UpdateBatchPrediction =
		"machinelearning:UpdateBatchPrediction";
	/** [Write] machinelearning:UpdateDataSource */
	static readonly UpdateDataSource = "machinelearning:UpdateDataSource";
	/** [Write] machinelearning:UpdateEvaluation */
	static readonly UpdateEvaluation = "machinelearning:UpdateEvaluation";
	/** [Write] machinelearning:UpdateMLModel */
	static readonly UpdateMLModel = "machinelearning:UpdateMLModel";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MachineLearningActions.actionGetBatchPrediction,
		MachineLearningActions.actionGetDataSource,
		MachineLearningActions.actionGetEvaluation,
		MachineLearningActions.actionGetMLModel,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MachineLearningActions.CreateBatchPrediction,
		MachineLearningActions.CreateDataSourceFromRDS,
		MachineLearningActions.CreateDataSourceFromRedshift,
		MachineLearningActions.CreateDataSourceFromS3,
		MachineLearningActions.CreateEvaluation,
		MachineLearningActions.CreateMLModel,
		MachineLearningActions.CreateRealtimeEndpoint,
		MachineLearningActions.DeleteBatchPrediction,
		MachineLearningActions.DeleteDataSource,
		MachineLearningActions.DeleteEvaluation,
		MachineLearningActions.DeleteMLModel,
		MachineLearningActions.DeleteRealtimeEndpoint,
		MachineLearningActions.Predict,
		MachineLearningActions.UpdateBatchPrediction,
		MachineLearningActions.UpdateDataSource,
		MachineLearningActions.UpdateEvaluation,
		MachineLearningActions.UpdateMLModel,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MachineLearningActions.DescribeBatchPredictions,
		MachineLearningActions.DescribeDataSources,
		MachineLearningActions.DescribeEvaluations,
		MachineLearningActions.DescribeMLModels,
		MachineLearningActions.DescribeTags,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MachineLearningActions.AddTags,
		MachineLearningActions.DeleteTags,
	];
}

/**
 * Properties for building a batchprediction ARN.
 */
export interface MachineLearningBatchpredictionArnProps {
	/** The BatchPredictionId component of the ARN. */
	readonly batchPredictionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a batchprediction ARN.
 */
export interface MachineLearningBatchpredictionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BatchPredictionId component. */
	readonly batchPredictionId: string;
}

/**
 * Properties for building a datasource ARN.
 */
export interface MachineLearningDatasourceArnProps {
	/** The DatasourceId component of the ARN. */
	readonly datasourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a datasource ARN.
 */
export interface MachineLearningDatasourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatasourceId component. */
	readonly datasourceId: string;
}

/**
 * Properties for building a evaluation ARN.
 */
export interface MachineLearningEvaluationArnProps {
	/** The EvaluationId component of the ARN. */
	readonly evaluationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a evaluation ARN.
 */
export interface MachineLearningEvaluationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EvaluationId component. */
	readonly evaluationId: string;
}

/**
 * Properties for building a mlmodel ARN.
 */
export interface MachineLearningMlmodelArnProps {
	/** The MlModelId component of the ARN. */
	readonly mlModelId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mlmodel ARN.
 */
export interface MachineLearningMlmodelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MlModelId component. */
	readonly mlModelId: string;
}

const BatchpredictionArnRegex =
	/^arn:(?<partition>[^:]+):machinelearning:(?<region>[^:]*):(?<account>[^:]*):batchprediction\/(?<batchPredictionId>[^:/?]+)$/;
const DatasourceArnRegex =
	/^arn:(?<partition>[^:]+):machinelearning:(?<region>[^:]*):(?<account>[^:]*):datasource\/(?<datasourceId>[^:/?]+)$/;
const EvaluationArnRegex =
	/^arn:(?<partition>[^:]+):machinelearning:(?<region>[^:]*):(?<account>[^:]*):evaluation\/(?<evaluationId>[^:/?]+)$/;
const MlmodelArnRegex =
	/^arn:(?<partition>[^:]+):machinelearning:(?<region>[^:]*):(?<account>[^:]*):mlmodel\/(?<mlModelId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for machinelearning resources.
 */
export class MachineLearningResources {
	/**
	 * Builds an ARN for the batchprediction resource.
	 */
	static batchprediction(
		props: MachineLearningBatchpredictionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:machinelearning:${props.region ?? "*"}:${props.account ?? "*"}:batchprediction/${props.batchPredictionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the batchprediction resource.
	 */
	static isValidBatchpredictionArn(arn: string): boolean {
		return BatchpredictionArnRegex.test(arn);
	}

	/**
	 * Parses a batchprediction ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBatchpredictionArn(
		arn: string,
	): MachineLearningBatchpredictionArnComponents {
		const match = BatchpredictionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid batchprediction ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			batchPredictionId: match.groups!.batchPredictionId,
		};
	}

	/**
	 * Builds an ARN for the datasource resource.
	 */
	static datasource(props: MachineLearningDatasourceArnProps): string {
		return `arn:${props.partition ?? "aws"}:machinelearning:${props.region ?? "*"}:${props.account ?? "*"}:datasource/${props.datasourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the datasource resource.
	 */
	static isValidDatasourceArn(arn: string): boolean {
		return DatasourceArnRegex.test(arn);
	}

	/**
	 * Parses a datasource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasourceArn(
		arn: string,
	): MachineLearningDatasourceArnComponents {
		const match = DatasourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datasource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			datasourceId: match.groups!.datasourceId,
		};
	}

	/**
	 * Builds an ARN for the evaluation resource.
	 */
	static evaluation(props: MachineLearningEvaluationArnProps): string {
		return `arn:${props.partition ?? "aws"}:machinelearning:${props.region ?? "*"}:${props.account ?? "*"}:evaluation/${props.evaluationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the evaluation resource.
	 */
	static isValidEvaluationArn(arn: string): boolean {
		return EvaluationArnRegex.test(arn);
	}

	/**
	 * Parses a evaluation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEvaluationArn(
		arn: string,
	): MachineLearningEvaluationArnComponents {
		const match = EvaluationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid evaluation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			evaluationId: match.groups!.evaluationId,
		};
	}

	/**
	 * Builds an ARN for the mlmodel resource.
	 */
	static mlmodel(props: MachineLearningMlmodelArnProps): string {
		return `arn:${props.partition ?? "aws"}:machinelearning:${props.region ?? "*"}:${props.account ?? "*"}:mlmodel/${props.mlModelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mlmodel resource.
	 */
	static isValidMlmodelArn(arn: string): boolean {
		return MlmodelArnRegex.test(arn);
	}

	/**
	 * Parses a mlmodel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMlmodelArn(arn: string): MachineLearningMlmodelArnComponents {
		const match = MlmodelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mlmodel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			mlModelId: match.groups!.mlModelId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for machinelearning.
 */
export class MachineLearningOperations {
	/** IAM actions required for the AddTags API call. */
	static readonly AddTags: string[] = ["machinelearning:AddTags"];
	/** IAM actions required for the CreateBatchPrediction API call. */
	static readonly CreateBatchPrediction: string[] = [
		"machinelearning:CreateBatchPrediction",
	];
	/** IAM actions required for the CreateDataSourceFromRDS API call. */
	static readonly CreateDataSourceFromRDS: string[] = [];
	/** IAM actions required for the CreateDataSourceFromRedshift API call. */
	static readonly CreateDataSourceFromRedshift: string[] = [
		"machinelearning:CreateDataSourceFromRedshift",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDataSourceFromS3 API call. */
	static readonly CreateDataSourceFromS3: string[] = [
		"machinelearning:CreateDataSourceFromS3",
	];
	/** IAM actions required for the CreateEvaluation API call. */
	static readonly CreateEvaluation: string[] = [
		"machinelearning:CreateEvaluation",
	];
	/** IAM actions required for the CreateMLModel API call. */
	static readonly CreateMLModel: string[] = ["machinelearning:CreateMLModel"];
	/** IAM actions required for the CreateRealtimeEndpoint API call. */
	static readonly CreateRealtimeEndpoint: string[] = [
		"machinelearning:CreateRealtimeEndpoint",
	];
	/** IAM actions required for the DeleteBatchPrediction API call. */
	static readonly DeleteBatchPrediction: string[] = [
		"machinelearning:DeleteBatchPrediction",
	];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DeleteDataSource: string[] = [
		"machinelearning:DeleteDataSource",
	];
	/** IAM actions required for the DeleteEvaluation API call. */
	static readonly DeleteEvaluation: string[] = [
		"machinelearning:DeleteEvaluation",
	];
	/** IAM actions required for the DeleteMLModel API call. */
	static readonly DeleteMLModel: string[] = ["machinelearning:DeleteMLModel"];
	/** IAM actions required for the DeleteRealtimeEndpoint API call. */
	static readonly DeleteRealtimeEndpoint: string[] = [
		"machinelearning:DeleteRealtimeEndpoint",
	];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DeleteTags: string[] = [];
	/** IAM actions required for the DescribeBatchPredictions API call. */
	static readonly DescribeBatchPredictions: string[] = [
		"machinelearning:DescribeBatchPredictions",
	];
	/** IAM actions required for the DescribeDataSources API call. */
	static readonly DescribeDataSources: string[] = [
		"machinelearning:DescribeDataSources",
	];
	/** IAM actions required for the DescribeEvaluations API call. */
	static readonly DescribeEvaluations: string[] = [
		"machinelearning:DescribeEvaluations",
	];
	/** IAM actions required for the DescribeMLModels API call. */
	static readonly DescribeMLModels: string[] = [
		"machinelearning:DescribeMLModels",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DescribeTags: string[] = ["machinelearning:DescribeTags"];
	/** IAM actions required for the GetBatchPrediction API call. */
	static readonly opGetBatchPrediction: string[] = [
		"machinelearning:GetBatchPrediction",
	];
	/** IAM actions required for the GetDataSource API call. */
	static readonly opGetDataSource: string[] = ["machinelearning:GetDataSource"];
	/** IAM actions required for the GetEvaluation API call. */
	static readonly opGetEvaluation: string[] = ["machinelearning:GetEvaluation"];
	/** IAM actions required for the GetMLModel API call. */
	static readonly opGetMLModel: string[] = ["machinelearning:GetMLModel"];
	/** IAM actions required for the Predict API call. */
	static readonly Predict: string[] = ["machinelearning:Predict"];
	/** IAM actions required for the UpdateBatchPrediction API call. */
	static readonly UpdateBatchPrediction: string[] = [];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UpdateDataSource: string[] = [];
	/** IAM actions required for the UpdateEvaluation API call. */
	static readonly UpdateEvaluation: string[] = [];
	/** IAM actions required for the UpdateMLModel API call. */
	static readonly UpdateMLModel: string[] = [];
}
