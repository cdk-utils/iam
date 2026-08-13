// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/elastictranscoder.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the elastictranscoder service.
 */
export class ElastictranscoderActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "elastictranscoder";

	/** [Write] elastictranscoder:CancelJob */
	static readonly CancelJob = "elastictranscoder:CancelJob";
	/** [Write] elastictranscoder:CreateJob */
	static readonly CreateJob = "elastictranscoder:CreateJob";
	/** [Write] elastictranscoder:CreatePipeline */
	static readonly CreatePipeline = "elastictranscoder:CreatePipeline";
	/** [Write] elastictranscoder:CreatePreset */
	static readonly CreatePreset = "elastictranscoder:CreatePreset";
	/** [Write] elastictranscoder:DeletePipeline */
	static readonly DeletePipeline = "elastictranscoder:DeletePipeline";
	/** [Write] elastictranscoder:DeletePreset */
	static readonly DeletePreset = "elastictranscoder:DeletePreset";
	/** [List] elastictranscoder:ListJobsByPipeline */
	static readonly ListJobsByPipeline = "elastictranscoder:ListJobsByPipeline";
	/** [List] elastictranscoder:ListJobsByStatus */
	static readonly ListJobsByStatus = "elastictranscoder:ListJobsByStatus";
	/** [List] elastictranscoder:ListPipelines */
	static readonly ListPipelines = "elastictranscoder:ListPipelines";
	/** [List] elastictranscoder:ListPresets */
	static readonly ListPresets = "elastictranscoder:ListPresets";
	/** [Read] elastictranscoder:ReadJob */
	static readonly ReadJob = "elastictranscoder:ReadJob";
	/** [Read] elastictranscoder:ReadPipeline */
	static readonly ReadPipeline = "elastictranscoder:ReadPipeline";
	/** [Read] elastictranscoder:ReadPreset */
	static readonly ReadPreset = "elastictranscoder:ReadPreset";
	/** [Write] elastictranscoder:TestRole */
	static readonly TestRole = "elastictranscoder:TestRole";
	/** [Write] elastictranscoder:UpdatePipeline */
	static readonly UpdatePipeline = "elastictranscoder:UpdatePipeline";
	/** [Write] elastictranscoder:UpdatePipelineNotifications */
	static readonly UpdatePipelineNotifications =
		"elastictranscoder:UpdatePipelineNotifications";
	/** [Write] elastictranscoder:UpdatePipelineStatus */
	static readonly UpdatePipelineStatus =
		"elastictranscoder:UpdatePipelineStatus";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ElastictranscoderActions.ReadJob,
		ElastictranscoderActions.ReadPipeline,
		ElastictranscoderActions.ReadPreset,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ElastictranscoderActions.CancelJob,
		ElastictranscoderActions.CreateJob,
		ElastictranscoderActions.CreatePipeline,
		ElastictranscoderActions.CreatePreset,
		ElastictranscoderActions.DeletePipeline,
		ElastictranscoderActions.DeletePreset,
		ElastictranscoderActions.TestRole,
		ElastictranscoderActions.UpdatePipeline,
		ElastictranscoderActions.UpdatePipelineNotifications,
		ElastictranscoderActions.UpdatePipelineStatus,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ElastictranscoderActions.ListJobsByPipeline,
		ElastictranscoderActions.ListJobsByStatus,
		ElastictranscoderActions.ListPipelines,
		ElastictranscoderActions.ListPresets,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a job ARN.
 */
export interface ElastictranscoderJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a job ARN.
 */
export interface ElastictranscoderJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a pipeline ARN.
 */
export interface ElastictranscoderPipelineArnProps {
	/** The PipelineId component of the ARN. */
	readonly pipelineId: string;
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
export interface ElastictranscoderPipelineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PipelineId component. */
	readonly pipelineId: string;
}

/**
 * Properties for building a preset ARN.
 */
export interface ElastictranscoderPresetArnProps {
	/** The PresetId component of the ARN. */
	readonly presetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a preset ARN.
 */
export interface ElastictranscoderPresetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PresetId component. */
	readonly presetId: string;
}

const JobArnRegex =
	/^arn:(?<partition>[^:]+):elastictranscoder:(?<region>[^:]*):(?<account>[^:]*):job\/(?<jobId>[^:/?]+)$/;
const PipelineArnRegex =
	/^arn:(?<partition>[^:]+):elastictranscoder:(?<region>[^:]*):(?<account>[^:]*):pipeline\/(?<pipelineId>[^:/?]+)$/;
const PresetArnRegex =
	/^arn:(?<partition>[^:]+):elastictranscoder:(?<region>[^:]*):(?<account>[^:]*):preset\/(?<presetId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for elastictranscoder resources.
 */
export class ElastictranscoderResources {
	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: ElastictranscoderJobArnProps): string {
		return `arn:${props.partition ?? "aws"}:elastictranscoder:${props.region ?? "*"}:${props.account ?? "*"}:job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobArn(arn: string): ElastictranscoderJobArnComponents {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the pipeline resource.
	 */
	static pipeline(props: ElastictranscoderPipelineArnProps): string {
		return `arn:${props.partition ?? "aws"}:elastictranscoder:${props.region ?? "*"}:${props.account ?? "*"}:pipeline/${props.pipelineId}`;
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
	static parsePipelineArn(arn: string): ElastictranscoderPipelineArnComponents {
		const match = PipelineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pipeline ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			pipelineId: match.groups!.pipelineId,
		};
	}

	/**
	 * Builds an ARN for the preset resource.
	 */
	static preset(props: ElastictranscoderPresetArnProps): string {
		return `arn:${props.partition ?? "aws"}:elastictranscoder:${props.region ?? "*"}:${props.account ?? "*"}:preset/${props.presetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the preset resource.
	 */
	static isValidPresetArn(arn: string): boolean {
		return PresetArnRegex.test(arn);
	}

	/**
	 * Parses a preset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePresetArn(arn: string): ElastictranscoderPresetArnComponents {
		const match = PresetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid preset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			presetId: match.groups!.presetId,
		};
	}
}
