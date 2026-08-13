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
	static readonly CreatePipeline = "osis:CreatePipeline";
	/** [Write] osis:CreatePipelineEndpoint */
	static readonly CreatePipelineEndpoint = "osis:CreatePipelineEndpoint";
	/** [Write] osis:DeletePipeline */
	static readonly DeletePipeline = "osis:DeletePipeline";
	/** [Write] osis:DeletePipelineEndpoint */
	static readonly DeletePipelineEndpoint = "osis:DeletePipelineEndpoint";
	/** [Write] osis:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "osis:DeleteResourcePolicy";
	/** [Read] osis:GetPipeline */
	static readonly actionGetPipeline = "osis:GetPipeline";
	/** [Read] osis:GetPipelineBlueprint */
	static readonly actionGetPipelineBlueprint = "osis:GetPipelineBlueprint";
	/** [Read] osis:GetPipelineChangeProgress */
	static readonly actionGetPipelineChangeProgress =
		"osis:GetPipelineChangeProgress";
	/** [Read] osis:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "osis:GetResourcePolicy";
	/** [Write] osis:Ingest */
	static readonly Ingest = "osis:Ingest";
	/** [List] osis:ListPipelineBlueprints */
	static readonly ListPipelineBlueprints = "osis:ListPipelineBlueprints";
	/** [List] osis:ListPipelineEndpointConnections */
	static readonly ListPipelineEndpointConnections =
		"osis:ListPipelineEndpointConnections";
	/** [List] osis:ListPipelineEndpoints */
	static readonly ListPipelineEndpoints = "osis:ListPipelineEndpoints";
	/** [List] osis:ListPipelines */
	static readonly ListPipelines = "osis:ListPipelines";
	/** [Read] osis:ListTagsForResource */
	static readonly ListTagsForResource = "osis:ListTagsForResource";
	/** [Write] osis:PutResourcePolicy */
	static readonly PutResourcePolicy = "osis:PutResourcePolicy";
	/** [Write] osis:RevokePipelineEndpointConnections */
	static readonly RevokePipelineEndpointConnections =
		"osis:RevokePipelineEndpointConnections";
	/** [Write] osis:StartPipeline */
	static readonly StartPipeline = "osis:StartPipeline";
	/** [Write] osis:StopPipeline */
	static readonly StopPipeline = "osis:StopPipeline";
	/** [Tagging] osis:TagResource */
	static readonly TagResource = "osis:TagResource";
	/** [Tagging] osis:UntagResource */
	static readonly UntagResource = "osis:UntagResource";
	/** [Write] osis:UpdatePipeline */
	static readonly UpdatePipeline = "osis:UpdatePipeline";
	/** [Read] osis:ValidatePipeline */
	static readonly ValidatePipeline = "osis:ValidatePipeline";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		OsisActions.actionGetPipeline,
		OsisActions.actionGetPipelineBlueprint,
		OsisActions.actionGetPipelineChangeProgress,
		OsisActions.actionGetResourcePolicy,
		OsisActions.ListTagsForResource,
		OsisActions.ValidatePipeline,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		OsisActions.CreatePipeline,
		OsisActions.CreatePipelineEndpoint,
		OsisActions.DeletePipeline,
		OsisActions.DeletePipelineEndpoint,
		OsisActions.DeleteResourcePolicy,
		OsisActions.Ingest,
		OsisActions.PutResourcePolicy,
		OsisActions.RevokePipelineEndpointConnections,
		OsisActions.StartPipeline,
		OsisActions.StopPipeline,
		OsisActions.UpdatePipeline,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		OsisActions.ListPipelineBlueprints,
		OsisActions.ListPipelineEndpointConnections,
		OsisActions.ListPipelineEndpoints,
		OsisActions.ListPipelines,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		OsisActions.TagResource,
		OsisActions.UntagResource,
	];
}

/**
 * Properties for building a pipeline ARN.
 */
export interface OsisPipelineArnProps {
	/** The PipelineName component of the ARN. */
	readonly pipelineName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a pipeline ARN.
 */
export interface OsisPipelineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PipelineName component. */
	readonly pipelineName: string;
}

/**
 * Properties for building a pipeline-blueprint ARN.
 */
export interface OsisPipelineBlueprintArnProps {
	/** The BlueprintName component of the ARN. */
	readonly blueprintName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a pipeline-blueprint ARN.
 */
export interface OsisPipelineBlueprintArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BlueprintName component. */
	readonly blueprintName: string;
}

/**
 * Properties for building a pipeline-endpoint ARN.
 */
export interface OsisPipelineEndpointArnProps {
	/** The EndpointId component of the ARN. */
	readonly endpointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a pipeline-endpoint ARN.
 */
export interface OsisPipelineEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EndpointId component. */
	readonly endpointId: string;
}

const PipelineArnRegex =
	/^arn:(?<partition>[^:]+):osis:(?<region>[^:]*):(?<account>[^:]*):pipeline\/(?<pipelineName>[^:/?]+)$/;
const PipelineBlueprintArnRegex =
	/^arn:(?<partition>[^:]+):osis:(?<region>[^:]*):(?<account>[^:]*):blueprint\/(?<blueprintName>[^:/?]+)$/;
const PipelineEndpointArnRegex =
	/^arn:(?<partition>[^:]+):osis:(?<region>[^:]*):(?<account>[^:]*):endpoint\/(?<endpointId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for osis resources.
 */
export class OsisResources {
	/**
	 * Builds an ARN for the pipeline resource.
	 */
	static pipeline(props: OsisPipelineArnProps): string {
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
	static parsePipelineArn(arn: string): OsisPipelineArnComponents {
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
	static pipelineBlueprint(props: OsisPipelineBlueprintArnProps): string {
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
	static parsePipelineBlueprintArn(
		arn: string,
	): OsisPipelineBlueprintArnComponents {
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
	static pipelineEndpoint(props: OsisPipelineEndpointArnProps): string {
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
	static parsePipelineEndpointArn(
		arn: string,
	): OsisPipelineEndpointArnComponents {
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
	static readonly CreatePipeline: string[] = [
		"osis:CreatePipeline",
		"iam:PassRole",
		"osis:TagResource",
	];
	/** IAM actions required for the CreatePipelineEndpoint API call. */
	static readonly CreatePipelineEndpoint: string[] = [
		"osis:CreatePipelineEndpoint",
	];
	/** IAM actions required for the DeletePipeline API call. */
	static readonly DeletePipeline: string[] = ["osis:DeletePipeline"];
	/** IAM actions required for the DeletePipelineEndpoint API call. */
	static readonly DeletePipelineEndpoint: string[] = [
		"osis:DeletePipelineEndpoint",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"osis:DeleteResourcePolicy",
	];
	/** IAM actions required for the GetPipeline API call. */
	static readonly opGetPipeline: string[] = ["osis:GetPipeline"];
	/** IAM actions required for the GetPipelineBlueprint API call. */
	static readonly opGetPipelineBlueprint: string[] = [
		"osis:GetPipelineBlueprint",
	];
	/** IAM actions required for the GetPipelineChangeProgress API call. */
	static readonly opGetPipelineChangeProgress: string[] = [
		"osis:GetPipelineChangeProgress",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = ["osis:GetResourcePolicy"];
	/** IAM actions required for the ListPipelineBlueprints API call. */
	static readonly ListPipelineBlueprints: string[] = [
		"osis:ListPipelineBlueprints",
	];
	/** IAM actions required for the ListPipelineEndpointConnections API call. */
	static readonly ListPipelineEndpointConnections: string[] = [
		"osis:ListPipelineEndpointConnections",
	];
	/** IAM actions required for the ListPipelineEndpoints API call. */
	static readonly ListPipelineEndpoints: string[] = [
		"osis:ListPipelineEndpoints",
	];
	/** IAM actions required for the ListPipelines API call. */
	static readonly ListPipelines: string[] = ["osis:ListPipelines"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["osis:ListTagsForResource"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["osis:PutResourcePolicy"];
	/** IAM actions required for the RevokePipelineEndpointConnections API call. */
	static readonly RevokePipelineEndpointConnections: string[] = [
		"osis:RevokePipelineEndpointConnections",
	];
	/** IAM actions required for the StartPipeline API call. */
	static readonly StartPipeline: string[] = ["osis:StartPipeline"];
	/** IAM actions required for the StopPipeline API call. */
	static readonly StopPipeline: string[] = ["osis:StopPipeline"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["osis:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["osis:UntagResource"];
	/** IAM actions required for the UpdatePipeline API call. */
	static readonly UpdatePipeline: string[] = [
		"iam:PassRole",
		"osis:UpdatePipeline",
	];
	/** IAM actions required for the ValidatePipeline API call. */
	static readonly ValidatePipeline: string[] = [
		"iam:PassRole",
		"osis:ValidatePipeline",
	];
}

/**
 * Condition key constants and builders for osis.
 */
export class OsisConditions {
	/** Condition keys applicable to the CreatePipeline action. */
	static readonly CreatePipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePipelineEndpoint action. */
	static readonly CreatePipelineEndpointConditionKeys: string[] = [
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
