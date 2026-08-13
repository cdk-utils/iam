// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/osis.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the osis service.
 */
export class OsisActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "osis";

	/** [Write] osis:CreatePipeline */
	static readonly CREATE_PIPELINE = "osis:CreatePipeline";
	/** [Write] osis:CreatePipelineEndpoint */
	static readonly CREATE_PIPELINE_ENDPOINT = "osis:CreatePipelineEndpoint";
	/** [Write] osis:DeletePipeline */
	static readonly DELETE_PIPELINE = "osis:DeletePipeline";
	/** [Write] osis:DeletePipelineEndpoint */
	static readonly DELETE_PIPELINE_ENDPOINT = "osis:DeletePipelineEndpoint";
	/** [Write] osis:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "osis:DeleteResourcePolicy";
	/** [Read] osis:GetPipeline */
	static readonly GET_PIPELINE = "osis:GetPipeline";
	/** [Read] osis:GetPipelineBlueprint */
	static readonly GET_PIPELINE_BLUEPRINT = "osis:GetPipelineBlueprint";
	/** [Read] osis:GetPipelineChangeProgress */
	static readonly GET_PIPELINE_CHANGE_PROGRESS =
		"osis:GetPipelineChangeProgress";
	/** [Read] osis:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "osis:GetResourcePolicy";
	/** [Write] osis:Ingest */
	static readonly INGEST = "osis:Ingest";
	/** [List] osis:ListPipelineBlueprints */
	static readonly LIST_PIPELINE_BLUEPRINTS = "osis:ListPipelineBlueprints";
	/** [List] osis:ListPipelineEndpointConnections */
	static readonly LIST_PIPELINE_ENDPOINT_CONNECTIONS =
		"osis:ListPipelineEndpointConnections";
	/** [List] osis:ListPipelineEndpoints */
	static readonly LIST_PIPELINE_ENDPOINTS = "osis:ListPipelineEndpoints";
	/** [List] osis:ListPipelines */
	static readonly LIST_PIPELINES = "osis:ListPipelines";
	/** [Read] osis:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "osis:ListTagsForResource";
	/** [Write] osis:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "osis:PutResourcePolicy";
	/** [Write] osis:RevokePipelineEndpointConnections */
	static readonly REVOKE_PIPELINE_ENDPOINT_CONNECTIONS =
		"osis:RevokePipelineEndpointConnections";
	/** [Write] osis:StartPipeline */
	static readonly START_PIPELINE = "osis:StartPipeline";
	/** [Write] osis:StopPipeline */
	static readonly STOP_PIPELINE = "osis:StopPipeline";
	/** [Tagging] osis:TagResource */
	static readonly TAG_RESOURCE = "osis:TagResource";
	/** [Tagging] osis:UntagResource */
	static readonly UNTAG_RESOURCE = "osis:UntagResource";
	/** [Write] osis:UpdatePipeline */
	static readonly UPDATE_PIPELINE = "osis:UpdatePipeline";
	/** [Read] osis:ValidatePipeline */
	static readonly VALIDATE_PIPELINE = "osis:ValidatePipeline";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		OsisActions.GET_PIPELINE,
		OsisActions.GET_PIPELINE_BLUEPRINT,
		OsisActions.GET_PIPELINE_CHANGE_PROGRESS,
		OsisActions.GET_RESOURCE_POLICY,
		OsisActions.LIST_TAGS_FOR_RESOURCE,
		OsisActions.VALIDATE_PIPELINE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		OsisActions.CREATE_PIPELINE,
		OsisActions.CREATE_PIPELINE_ENDPOINT,
		OsisActions.DELETE_PIPELINE,
		OsisActions.DELETE_PIPELINE_ENDPOINT,
		OsisActions.DELETE_RESOURCE_POLICY,
		OsisActions.INGEST,
		OsisActions.PUT_RESOURCE_POLICY,
		OsisActions.REVOKE_PIPELINE_ENDPOINT_CONNECTIONS,
		OsisActions.START_PIPELINE,
		OsisActions.STOP_PIPELINE,
		OsisActions.UPDATE_PIPELINE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		OsisActions.LIST_PIPELINE_BLUEPRINTS,
		OsisActions.LIST_PIPELINE_ENDPOINT_CONNECTIONS,
		OsisActions.LIST_PIPELINE_ENDPOINTS,
		OsisActions.LIST_PIPELINES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		OsisActions.TAG_RESOURCE,
		OsisActions.UNTAG_RESOURCE,
	];
}

const PipelineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):osis:(?<region>[^:]*):(?<account>[^:]*):pipeline/(?<pipelineName>[^:/?]+)$",
);
const PipelineBlueprintArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):osis:(?<region>[^:]*):(?<account>[^:]*):blueprint/(?<blueprintName>[^:/?]+)$",
);
const PipelineEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):osis:(?<region>[^:]*):(?<account>[^:]*):endpoint/(?<endpointId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for osis resources.
 */
export class OsisResources {
	/**
	 * Builds an ARN for the pipeline resource.
	 */
	static pipeline(props: {
		/** The PipelineName component of the ARN. */
		readonly pipelineName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:osis:${props.region ?? "*"}:${props.account ?? "*"}:pipeline/${props.pipelineName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the pipeline resource.
	 */
	static isValidPipelineArn(arn: string): boolean {
		return PipelineArnRegex.test(arn);
	}

	/**
	 * Parses a pipeline ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePipelineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		pipelineName: string;
	} {
		const match = PipelineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pipeline ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			pipelineName: match.groups!.pipelineName,
		};
	}

	/**
	 * Builds an ARN for the pipeline-blueprint resource.
	 */
	static pipelineBlueprint(props: {
		/** The BlueprintName component of the ARN. */
		readonly blueprintName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:osis:${props.region ?? "*"}:${props.account ?? "*"}:blueprint/${props.blueprintName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the pipeline-blueprint resource.
	 */
	static isValidPipelineBlueprintArn(arn: string): boolean {
		return PipelineBlueprintArnRegex.test(arn);
	}

	/**
	 * Parses a pipeline-blueprint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePipelineBlueprintArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		blueprintName: string;
	} {
		const match = PipelineBlueprintArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pipeline-blueprint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			blueprintName: match.groups!.blueprintName,
		};
	}

	/**
	 * Builds an ARN for the pipeline-endpoint resource.
	 */
	static pipelineEndpoint(props: {
		/** The EndpointId component of the ARN. */
		readonly endpointId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:osis:${props.region ?? "*"}:${props.account ?? "*"}:endpoint/${props.endpointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the pipeline-endpoint resource.
	 */
	static isValidPipelineEndpointArn(arn: string): boolean {
		return PipelineEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a pipeline-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePipelineEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		endpointId: string;
	} {
		const match = PipelineEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pipeline-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			endpointId: match.groups!.endpointId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for osis.
 */
export class OsisOperations {
	/** IAM actions required for the CreatePipeline API call. */
	static readonly CREATE_PIPELINE: string[] = [
		"osis:CreatePipeline",
		"iam:PassRole",
		"osis:TagResource",
	];
	/** IAM actions required for the CreatePipelineEndpoint API call. */
	static readonly CREATE_PIPELINE_ENDPOINT: string[] = [
		"osis:CreatePipelineEndpoint",
	];
	/** IAM actions required for the DeletePipeline API call. */
	static readonly DELETE_PIPELINE: string[] = ["osis:DeletePipeline"];
	/** IAM actions required for the DeletePipelineEndpoint API call. */
	static readonly DELETE_PIPELINE_ENDPOINT: string[] = [
		"osis:DeletePipelineEndpoint",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"osis:DeleteResourcePolicy",
	];
	/** IAM actions required for the GetPipeline API call. */
	static readonly GET_PIPELINE: string[] = ["osis:GetPipeline"];
	/** IAM actions required for the GetPipelineBlueprint API call. */
	static readonly GET_PIPELINE_BLUEPRINT: string[] = [
		"osis:GetPipelineBlueprint",
	];
	/** IAM actions required for the GetPipelineChangeProgress API call. */
	static readonly GET_PIPELINE_CHANGE_PROGRESS: string[] = [
		"osis:GetPipelineChangeProgress",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = ["osis:GetResourcePolicy"];
	/** IAM actions required for the ListPipelineBlueprints API call. */
	static readonly LIST_PIPELINE_BLUEPRINTS: string[] = [
		"osis:ListPipelineBlueprints",
	];
	/** IAM actions required for the ListPipelineEndpointConnections API call. */
	static readonly LIST_PIPELINE_ENDPOINT_CONNECTIONS: string[] = [
		"osis:ListPipelineEndpointConnections",
	];
	/** IAM actions required for the ListPipelineEndpoints API call. */
	static readonly LIST_PIPELINE_ENDPOINTS: string[] = [
		"osis:ListPipelineEndpoints",
	];
	/** IAM actions required for the ListPipelines API call. */
	static readonly LIST_PIPELINES: string[] = ["osis:ListPipelines"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"osis:ListTagsForResource",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = ["osis:PutResourcePolicy"];
	/** IAM actions required for the RevokePipelineEndpointConnections API call. */
	static readonly REVOKE_PIPELINE_ENDPOINT_CONNECTIONS: string[] = [
		"osis:RevokePipelineEndpointConnections",
	];
	/** IAM actions required for the StartPipeline API call. */
	static readonly START_PIPELINE: string[] = ["osis:StartPipeline"];
	/** IAM actions required for the StopPipeline API call. */
	static readonly STOP_PIPELINE: string[] = ["osis:StopPipeline"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["osis:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["osis:UntagResource"];
	/** IAM actions required for the UpdatePipeline API call. */
	static readonly UPDATE_PIPELINE: string[] = [
		"iam:PassRole",
		"osis:UpdatePipeline",
	];
	/** IAM actions required for the ValidatePipeline API call. */
	static readonly VALIDATE_PIPELINE: string[] = [
		"iam:PassRole",
		"osis:ValidatePipeline",
	];
}

/**
 * Condition key constants and builders for osis.
 */
export class OsisConditions {
	/** Condition keys applicable to the CreatePipeline action. */
	static readonly CREATE_PIPELINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePipelineEndpoint action. */
	static readonly CREATE_PIPELINE_ENDPOINT_CONDITION_KEYS: string[] = [
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
