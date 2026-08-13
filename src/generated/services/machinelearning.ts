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
	static readonly ADD_TAGS = "machinelearning:AddTags";
	/** [Write] machinelearning:CreateBatchPrediction */
	static readonly CREATE_BATCH_PREDICTION =
		"machinelearning:CreateBatchPrediction";
	/** [Write] machinelearning:CreateDataSourceFromRDS */
	static readonly CREATE_DATA_SOURCE_FROM_RDS =
		"machinelearning:CreateDataSourceFromRDS";
	/** [Write] machinelearning:CreateDataSourceFromRedshift */
	static readonly CREATE_DATA_SOURCE_FROM_REDSHIFT =
		"machinelearning:CreateDataSourceFromRedshift";
	/** [Write] machinelearning:CreateDataSourceFromS3 */
	static readonly CREATE_DATA_SOURCE_FROM_S3 =
		"machinelearning:CreateDataSourceFromS3";
	/** [Write] machinelearning:CreateEvaluation */
	static readonly CREATE_EVALUATION = "machinelearning:CreateEvaluation";
	/** [Write] machinelearning:CreateMLModel */
	static readonly CREATE_ML_MODEL = "machinelearning:CreateMLModel";
	/** [Write] machinelearning:CreateRealtimeEndpoint */
	static readonly CREATE_REALTIME_ENDPOINT =
		"machinelearning:CreateRealtimeEndpoint";
	/** [Write] machinelearning:DeleteBatchPrediction */
	static readonly DELETE_BATCH_PREDICTION =
		"machinelearning:DeleteBatchPrediction";
	/** [Write] machinelearning:DeleteDataSource */
	static readonly DELETE_DATA_SOURCE = "machinelearning:DeleteDataSource";
	/** [Write] machinelearning:DeleteEvaluation */
	static readonly DELETE_EVALUATION = "machinelearning:DeleteEvaluation";
	/** [Write] machinelearning:DeleteMLModel */
	static readonly DELETE_ML_MODEL = "machinelearning:DeleteMLModel";
	/** [Write] machinelearning:DeleteRealtimeEndpoint */
	static readonly DELETE_REALTIME_ENDPOINT =
		"machinelearning:DeleteRealtimeEndpoint";
	/** [Tagging] machinelearning:DeleteTags */
	static readonly DELETE_TAGS = "machinelearning:DeleteTags";
	/** [List] machinelearning:DescribeBatchPredictions */
	static readonly DESCRIBE_BATCH_PREDICTIONS =
		"machinelearning:DescribeBatchPredictions";
	/** [List] machinelearning:DescribeDataSources */
	static readonly DESCRIBE_DATA_SOURCES = "machinelearning:DescribeDataSources";
	/** [List] machinelearning:DescribeEvaluations */
	static readonly DESCRIBE_EVALUATIONS = "machinelearning:DescribeEvaluations";
	/** [List] machinelearning:DescribeMLModels */
	static readonly DESCRIBE_ML_MODELS = "machinelearning:DescribeMLModels";
	/** [List] machinelearning:DescribeTags */
	static readonly DESCRIBE_TAGS = "machinelearning:DescribeTags";
	/** [Read] machinelearning:GetBatchPrediction */
	static readonly GET_BATCH_PREDICTION = "machinelearning:GetBatchPrediction";
	/** [Read] machinelearning:GetDataSource */
	static readonly GET_DATA_SOURCE = "machinelearning:GetDataSource";
	/** [Read] machinelearning:GetEvaluation */
	static readonly GET_EVALUATION = "machinelearning:GetEvaluation";
	/** [Read] machinelearning:GetMLModel */
	static readonly GET_ML_MODEL = "machinelearning:GetMLModel";
	/** [Write] machinelearning:Predict */
	static readonly PREDICT = "machinelearning:Predict";
	/** [Write] machinelearning:UpdateBatchPrediction */
	static readonly UPDATE_BATCH_PREDICTION =
		"machinelearning:UpdateBatchPrediction";
	/** [Write] machinelearning:UpdateDataSource */
	static readonly UPDATE_DATA_SOURCE = "machinelearning:UpdateDataSource";
	/** [Write] machinelearning:UpdateEvaluation */
	static readonly UPDATE_EVALUATION = "machinelearning:UpdateEvaluation";
	/** [Write] machinelearning:UpdateMLModel */
	static readonly UPDATE_ML_MODEL = "machinelearning:UpdateMLModel";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MachineLearningActions.GET_BATCH_PREDICTION,
		MachineLearningActions.GET_DATA_SOURCE,
		MachineLearningActions.GET_EVALUATION,
		MachineLearningActions.GET_ML_MODEL,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MachineLearningActions.CREATE_BATCH_PREDICTION,
		MachineLearningActions.CREATE_DATA_SOURCE_FROM_RDS,
		MachineLearningActions.CREATE_DATA_SOURCE_FROM_REDSHIFT,
		MachineLearningActions.CREATE_DATA_SOURCE_FROM_S3,
		MachineLearningActions.CREATE_EVALUATION,
		MachineLearningActions.CREATE_ML_MODEL,
		MachineLearningActions.CREATE_REALTIME_ENDPOINT,
		MachineLearningActions.DELETE_BATCH_PREDICTION,
		MachineLearningActions.DELETE_DATA_SOURCE,
		MachineLearningActions.DELETE_EVALUATION,
		MachineLearningActions.DELETE_ML_MODEL,
		MachineLearningActions.DELETE_REALTIME_ENDPOINT,
		MachineLearningActions.PREDICT,
		MachineLearningActions.UPDATE_BATCH_PREDICTION,
		MachineLearningActions.UPDATE_DATA_SOURCE,
		MachineLearningActions.UPDATE_EVALUATION,
		MachineLearningActions.UPDATE_ML_MODEL,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MachineLearningActions.DESCRIBE_BATCH_PREDICTIONS,
		MachineLearningActions.DESCRIBE_DATA_SOURCES,
		MachineLearningActions.DESCRIBE_EVALUATIONS,
		MachineLearningActions.DESCRIBE_ML_MODELS,
		MachineLearningActions.DESCRIBE_TAGS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MachineLearningActions.ADD_TAGS,
		MachineLearningActions.DELETE_TAGS,
	];
}

const BatchpredictionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):machinelearning:(?<region>[^:]*):(?<account>[^:]*):batchprediction/(?<batchPredictionId>[^:/?]+)$",
);
const DatasourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):machinelearning:(?<region>[^:]*):(?<account>[^:]*):datasource/(?<datasourceId>[^:/?]+)$",
);
const EvaluationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):machinelearning:(?<region>[^:]*):(?<account>[^:]*):evaluation/(?<evaluationId>[^:/?]+)$",
);
const MlmodelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):machinelearning:(?<region>[^:]*):(?<account>[^:]*):mlmodel/(?<mlModelId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for machinelearning resources.
 */
export class MachineLearningResources {
	/**
	 * Builds an ARN for the batchprediction resource.
	 */
	static batchprediction(props: {
		/** The BatchPredictionId component of the ARN. */
		readonly batchPredictionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseBatchpredictionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		batchPredictionId: string;
	} {
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
	static datasource(props: {
		/** The DatasourceId component of the ARN. */
		readonly datasourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDatasourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		datasourceId: string;
	} {
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
	static evaluation(props: {
		/** The EvaluationId component of the ARN. */
		readonly evaluationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEvaluationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		evaluationId: string;
	} {
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
	static mlmodel(props: {
		/** The MlModelId component of the ARN. */
		readonly mlModelId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseMlmodelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		mlModelId: string;
	} {
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
	static readonly ADD_TAGS: string[] = ["machinelearning:AddTags"];
	/** IAM actions required for the CreateBatchPrediction API call. */
	static readonly CREATE_BATCH_PREDICTION: string[] = [
		"machinelearning:CreateBatchPrediction",
	];
	/** IAM actions required for the CreateDataSourceFromRDS API call. */
	static readonly CREATE_DATA_SOURCE_FROM_RDS: string[] = [];
	/** IAM actions required for the CreateDataSourceFromRedshift API call. */
	static readonly CREATE_DATA_SOURCE_FROM_REDSHIFT: string[] = [
		"machinelearning:CreateDataSourceFromRedshift",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDataSourceFromS3 API call. */
	static readonly CREATE_DATA_SOURCE_FROM_S3: string[] = [
		"machinelearning:CreateDataSourceFromS3",
	];
	/** IAM actions required for the CreateEvaluation API call. */
	static readonly CREATE_EVALUATION: string[] = [
		"machinelearning:CreateEvaluation",
	];
	/** IAM actions required for the CreateMLModel API call. */
	static readonly CREATE_ML_MODEL: string[] = ["machinelearning:CreateMLModel"];
	/** IAM actions required for the CreateRealtimeEndpoint API call. */
	static readonly CREATE_REALTIME_ENDPOINT: string[] = [
		"machinelearning:CreateRealtimeEndpoint",
	];
	/** IAM actions required for the DeleteBatchPrediction API call. */
	static readonly DELETE_BATCH_PREDICTION: string[] = [
		"machinelearning:DeleteBatchPrediction",
	];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DELETE_DATA_SOURCE: string[] = [
		"machinelearning:DeleteDataSource",
	];
	/** IAM actions required for the DeleteEvaluation API call. */
	static readonly DELETE_EVALUATION: string[] = [
		"machinelearning:DeleteEvaluation",
	];
	/** IAM actions required for the DeleteMLModel API call. */
	static readonly DELETE_ML_MODEL: string[] = ["machinelearning:DeleteMLModel"];
	/** IAM actions required for the DeleteRealtimeEndpoint API call. */
	static readonly DELETE_REALTIME_ENDPOINT: string[] = [
		"machinelearning:DeleteRealtimeEndpoint",
	];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DELETE_TAGS: string[] = [];
	/** IAM actions required for the DescribeBatchPredictions API call. */
	static readonly DESCRIBE_BATCH_PREDICTIONS: string[] = [
		"machinelearning:DescribeBatchPredictions",
	];
	/** IAM actions required for the DescribeDataSources API call. */
	static readonly DESCRIBE_DATA_SOURCES: string[] = [
		"machinelearning:DescribeDataSources",
	];
	/** IAM actions required for the DescribeEvaluations API call. */
	static readonly DESCRIBE_EVALUATIONS: string[] = [
		"machinelearning:DescribeEvaluations",
	];
	/** IAM actions required for the DescribeMLModels API call. */
	static readonly DESCRIBE_ML_MODELS: string[] = [
		"machinelearning:DescribeMLModels",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DESCRIBE_TAGS: string[] = ["machinelearning:DescribeTags"];
	/** IAM actions required for the GetBatchPrediction API call. */
	static readonly GET_BATCH_PREDICTION: string[] = [
		"machinelearning:GetBatchPrediction",
	];
	/** IAM actions required for the GetDataSource API call. */
	static readonly GET_DATA_SOURCE: string[] = ["machinelearning:GetDataSource"];
	/** IAM actions required for the GetEvaluation API call. */
	static readonly GET_EVALUATION: string[] = ["machinelearning:GetEvaluation"];
	/** IAM actions required for the GetMLModel API call. */
	static readonly GET_ML_MODEL: string[] = ["machinelearning:GetMLModel"];
	/** IAM actions required for the Predict API call. */
	static readonly PREDICT: string[] = ["machinelearning:Predict"];
	/** IAM actions required for the UpdateBatchPrediction API call. */
	static readonly UPDATE_BATCH_PREDICTION: string[] = [];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UPDATE_DATA_SOURCE: string[] = [];
	/** IAM actions required for the UpdateEvaluation API call. */
	static readonly UPDATE_EVALUATION: string[] = [];
	/** IAM actions required for the UpdateMLModel API call. */
	static readonly UPDATE_ML_MODEL: string[] = [];
}
