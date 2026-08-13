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
	static readonly CANCEL_JOB = "elastictranscoder:CancelJob";
	/** [Write] elastictranscoder:CreateJob */
	static readonly CREATE_JOB = "elastictranscoder:CreateJob";
	/** [Write] elastictranscoder:CreatePipeline */
	static readonly CREATE_PIPELINE = "elastictranscoder:CreatePipeline";
	/** [Write] elastictranscoder:CreatePreset */
	static readonly CREATE_PRESET = "elastictranscoder:CreatePreset";
	/** [Write] elastictranscoder:DeletePipeline */
	static readonly DELETE_PIPELINE = "elastictranscoder:DeletePipeline";
	/** [Write] elastictranscoder:DeletePreset */
	static readonly DELETE_PRESET = "elastictranscoder:DeletePreset";
	/** [List] elastictranscoder:ListJobsByPipeline */
	static readonly LIST_JOBS_BY_PIPELINE =
		"elastictranscoder:ListJobsByPipeline";
	/** [List] elastictranscoder:ListJobsByStatus */
	static readonly LIST_JOBS_BY_STATUS = "elastictranscoder:ListJobsByStatus";
	/** [List] elastictranscoder:ListPipelines */
	static readonly LIST_PIPELINES = "elastictranscoder:ListPipelines";
	/** [List] elastictranscoder:ListPresets */
	static readonly LIST_PRESETS = "elastictranscoder:ListPresets";
	/** [Read] elastictranscoder:ReadJob */
	static readonly READ_JOB = "elastictranscoder:ReadJob";
	/** [Read] elastictranscoder:ReadPipeline */
	static readonly READ_PIPELINE = "elastictranscoder:ReadPipeline";
	/** [Read] elastictranscoder:ReadPreset */
	static readonly READ_PRESET = "elastictranscoder:ReadPreset";
	/** [Write] elastictranscoder:TestRole */
	static readonly TEST_ROLE = "elastictranscoder:TestRole";
	/** [Write] elastictranscoder:UpdatePipeline */
	static readonly UPDATE_PIPELINE = "elastictranscoder:UpdatePipeline";
	/** [Write] elastictranscoder:UpdatePipelineNotifications */
	static readonly UPDATE_PIPELINE_NOTIFICATIONS =
		"elastictranscoder:UpdatePipelineNotifications";
	/** [Write] elastictranscoder:UpdatePipelineStatus */
	static readonly UPDATE_PIPELINE_STATUS =
		"elastictranscoder:UpdatePipelineStatus";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ElastictranscoderActions.READ_JOB,
		ElastictranscoderActions.READ_PIPELINE,
		ElastictranscoderActions.READ_PRESET,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ElastictranscoderActions.CANCEL_JOB,
		ElastictranscoderActions.CREATE_JOB,
		ElastictranscoderActions.CREATE_PIPELINE,
		ElastictranscoderActions.CREATE_PRESET,
		ElastictranscoderActions.DELETE_PIPELINE,
		ElastictranscoderActions.DELETE_PRESET,
		ElastictranscoderActions.TEST_ROLE,
		ElastictranscoderActions.UPDATE_PIPELINE,
		ElastictranscoderActions.UPDATE_PIPELINE_NOTIFICATIONS,
		ElastictranscoderActions.UPDATE_PIPELINE_STATUS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ElastictranscoderActions.LIST_JOBS_BY_PIPELINE,
		ElastictranscoderActions.LIST_JOBS_BY_STATUS,
		ElastictranscoderActions.LIST_PIPELINES,
		ElastictranscoderActions.LIST_PRESETS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elastictranscoder:(?<region>[^:]*):(?<account>[^:]*):job/(?<jobId>[^:/?]+)$",
);
const PipelineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elastictranscoder:(?<region>[^:]*):(?<account>[^:]*):pipeline/(?<pipelineId>[^:/?]+)$",
);
const PresetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elastictranscoder:(?<region>[^:]*):(?<account>[^:]*):preset/(?<presetId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for elastictranscoder resources.
 */
export class ElastictranscoderResources {
	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static pipeline(props: {
		/** The PipelineId component of the ARN. */
		readonly pipelineId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePipelineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		pipelineId: string;
	} {
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
	static preset(props: {
		/** The PresetId component of the ARN. */
		readonly presetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePresetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		presetId: string;
	} {
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
