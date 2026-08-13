// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mediaconvert.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mediaconvert service.
 */
export class MediaConvertActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mediaconvert";

	/** [Write] mediaconvert:AssociateCertificate */
	static readonly ASSOCIATE_CERTIFICATE = "mediaconvert:AssociateCertificate";
	/** [Write] mediaconvert:CancelJob */
	static readonly CANCEL_JOB = "mediaconvert:CancelJob";
	/** [Write] mediaconvert:CreateJob */
	static readonly CREATE_JOB = "mediaconvert:CreateJob";
	/** [Write] mediaconvert:CreateJobTemplate */
	static readonly CREATE_JOB_TEMPLATE = "mediaconvert:CreateJobTemplate";
	/** [Write] mediaconvert:CreatePreset */
	static readonly CREATE_PRESET = "mediaconvert:CreatePreset";
	/** [Write] mediaconvert:CreateQueue */
	static readonly CREATE_QUEUE = "mediaconvert:CreateQueue";
	/** [Write] mediaconvert:CreateResourceShare */
	static readonly CREATE_RESOURCE_SHARE = "mediaconvert:CreateResourceShare";
	/** [Write] mediaconvert:DeleteJobTemplate */
	static readonly DELETE_JOB_TEMPLATE = "mediaconvert:DeleteJobTemplate";
	/** [Write] mediaconvert:DeletePolicy */
	static readonly DELETE_POLICY = "mediaconvert:DeletePolicy";
	/** [Write] mediaconvert:DeletePreset */
	static readonly DELETE_PRESET = "mediaconvert:DeletePreset";
	/** [Write] mediaconvert:DeleteQueue */
	static readonly DELETE_QUEUE = "mediaconvert:DeleteQueue";
	/** [List] mediaconvert:DescribeEndpoints */
	static readonly DESCRIBE_ENDPOINTS = "mediaconvert:DescribeEndpoints";
	/** [Write] mediaconvert:DisassociateCertificate */
	static readonly DISASSOCIATE_CERTIFICATE =
		"mediaconvert:DisassociateCertificate";
	/** [Read] mediaconvert:GetJob */
	static readonly GET_JOB = "mediaconvert:GetJob";
	/** [Read] mediaconvert:GetJobTemplate */
	static readonly GET_JOB_TEMPLATE = "mediaconvert:GetJobTemplate";
	/** [Read] mediaconvert:GetPolicy */
	static readonly GET_POLICY = "mediaconvert:GetPolicy";
	/** [Read] mediaconvert:GetPreset */
	static readonly GET_PRESET = "mediaconvert:GetPreset";
	/** [Read] mediaconvert:GetQueue */
	static readonly GET_QUEUE = "mediaconvert:GetQueue";
	/** [List] mediaconvert:ListJobTemplates */
	static readonly LIST_JOB_TEMPLATES = "mediaconvert:ListJobTemplates";
	/** [List] mediaconvert:ListJobs */
	static readonly LIST_JOBS = "mediaconvert:ListJobs";
	/** [List] mediaconvert:ListPresets */
	static readonly LIST_PRESETS = "mediaconvert:ListPresets";
	/** [List] mediaconvert:ListQueues */
	static readonly LIST_QUEUES = "mediaconvert:ListQueues";
	/** [Read] mediaconvert:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "mediaconvert:ListTagsForResource";
	/** [List] mediaconvert:ListVersions */
	static readonly LIST_VERSIONS = "mediaconvert:ListVersions";
	/** [Read] mediaconvert:Probe */
	static readonly PROBE = "mediaconvert:Probe";
	/** [Write] mediaconvert:PutPolicy */
	static readonly PUT_POLICY = "mediaconvert:PutPolicy";
	/** [List] mediaconvert:SearchJobs */
	static readonly SEARCH_JOBS = "mediaconvert:SearchJobs";
	/** [Tagging] mediaconvert:TagResource */
	static readonly TAG_RESOURCE = "mediaconvert:TagResource";
	/** [Tagging] mediaconvert:UntagResource */
	static readonly UNTAG_RESOURCE = "mediaconvert:UntagResource";
	/** [Write] mediaconvert:UpdateJobTemplate */
	static readonly UPDATE_JOB_TEMPLATE = "mediaconvert:UpdateJobTemplate";
	/** [Write] mediaconvert:UpdatePreset */
	static readonly UPDATE_PRESET = "mediaconvert:UpdatePreset";
	/** [Write] mediaconvert:UpdateQueue */
	static readonly UPDATE_QUEUE = "mediaconvert:UpdateQueue";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MediaConvertActions.GET_JOB,
		MediaConvertActions.GET_JOB_TEMPLATE,
		MediaConvertActions.GET_POLICY,
		MediaConvertActions.GET_PRESET,
		MediaConvertActions.GET_QUEUE,
		MediaConvertActions.LIST_TAGS_FOR_RESOURCE,
		MediaConvertActions.PROBE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MediaConvertActions.ASSOCIATE_CERTIFICATE,
		MediaConvertActions.CANCEL_JOB,
		MediaConvertActions.CREATE_JOB,
		MediaConvertActions.CREATE_JOB_TEMPLATE,
		MediaConvertActions.CREATE_PRESET,
		MediaConvertActions.CREATE_QUEUE,
		MediaConvertActions.CREATE_RESOURCE_SHARE,
		MediaConvertActions.DELETE_JOB_TEMPLATE,
		MediaConvertActions.DELETE_POLICY,
		MediaConvertActions.DELETE_PRESET,
		MediaConvertActions.DELETE_QUEUE,
		MediaConvertActions.DISASSOCIATE_CERTIFICATE,
		MediaConvertActions.PUT_POLICY,
		MediaConvertActions.UPDATE_JOB_TEMPLATE,
		MediaConvertActions.UPDATE_PRESET,
		MediaConvertActions.UPDATE_QUEUE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MediaConvertActions.DESCRIBE_ENDPOINTS,
		MediaConvertActions.LIST_JOB_TEMPLATES,
		MediaConvertActions.LIST_JOBS,
		MediaConvertActions.LIST_PRESETS,
		MediaConvertActions.LIST_QUEUES,
		MediaConvertActions.LIST_VERSIONS,
		MediaConvertActions.SEARCH_JOBS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MediaConvertActions.TAG_RESOURCE,
		MediaConvertActions.UNTAG_RESOURCE,
	];
}

const CertificateAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconvert:(?<region>[^:]*):(?<account>[^:]*):certificates/(?<certificateARN>[^:/?]+)$",
);
const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconvert:(?<region>[^:]*):(?<account>[^:]*):jobs/(?<jobId>[^:/?]+)$",
);
const JobTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconvert:(?<region>[^:]*):(?<account>[^:]*):jobTemplates/(?<jobTemplateName>[^:/?]+)$",
);
const PresetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconvert:(?<region>[^:]*):(?<account>[^:]*):presets/(?<presetName>[^:/?]+)$",
);
const QueueArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconvert:(?<region>[^:]*):(?<account>[^:]*):queues/(?<queueName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for mediaconvert resources.
 */
export class MediaConvertResources {
	/**
	 * Builds an ARN for the CertificateAssociation resource.
	 */
	static certificateAssociation(props: {
		/** The CertificateArn component of the ARN. */
		readonly certificateARN: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconvert:${props.region ?? "*"}:${props.account ?? "*"}:certificates/${props.certificateARN}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the CertificateAssociation resource.
	 */
	static isValidCertificateAssociationArn(arn: string): boolean {
		return CertificateAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a CertificateAssociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCertificateAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		certificateARN: string;
	} {
		const match = CertificateAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid CertificateAssociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			certificateARN: match.groups!.certificateARN,
		};
	}

	/**
	 * Builds an ARN for the Job resource.
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
		return `arn:${props.partition ?? "aws"}:mediaconvert:${props.region ?? "*"}:${props.account ?? "*"}:jobs/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a Job ARN into its components.
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
			throw new Error(`Invalid Job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the JobTemplate resource.
	 */
	static jobTemplate(props: {
		/** The JobTemplateName component of the ARN. */
		readonly jobTemplateName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconvert:${props.region ?? "*"}:${props.account ?? "*"}:jobTemplates/${props.jobTemplateName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the JobTemplate resource.
	 */
	static isValidJobTemplateArn(arn: string): boolean {
		return JobTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a JobTemplate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobTemplateName: string;
	} {
		const match = JobTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid JobTemplate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobTemplateName: match.groups!.jobTemplateName,
		};
	}

	/**
	 * Builds an ARN for the Preset resource.
	 */
	static preset(props: {
		/** The PresetName component of the ARN. */
		readonly presetName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconvert:${props.region ?? "*"}:${props.account ?? "*"}:presets/${props.presetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Preset resource.
	 */
	static isValidPresetArn(arn: string): boolean {
		return PresetArnRegex.test(arn);
	}

	/**
	 * Parses a Preset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePresetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		presetName: string;
	} {
		const match = PresetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Preset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			presetName: match.groups!.presetName,
		};
	}

	/**
	 * Builds an ARN for the Queue resource.
	 */
	static queue(props: {
		/** The QueueName component of the ARN. */
		readonly queueName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconvert:${props.region ?? "*"}:${props.account ?? "*"}:queues/${props.queueName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Queue resource.
	 */
	static isValidQueueArn(arn: string): boolean {
		return QueueArnRegex.test(arn);
	}

	/**
	 * Parses a Queue ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQueueArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		queueName: string;
	} {
		const match = QueueArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Queue ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			queueName: match.groups!.queueName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for mediaconvert.
 */
export class MediaConvertOperations {
	/** IAM actions required for the AssociateCertificate API call. */
	static readonly ASSOCIATE_CERTIFICATE: string[] = [
		"mediaconvert:AssociateCertificate",
	];
	/** IAM actions required for the CancelJob API call. */
	static readonly CANCEL_JOB: string[] = ["mediaconvert:CancelJob"];
	/** IAM actions required for the CreateJob API call. */
	static readonly CREATE_JOB: string[] = [
		"mediaconvert:CreateJob",
		"iam:PassRole",
		"mediaconvert:TagResource",
	];
	/** IAM actions required for the CreateJobTemplate API call. */
	static readonly CREATE_JOB_TEMPLATE: string[] = [
		"mediaconvert:CreateJobTemplate",
		"mediaconvert:TagResource",
	];
	/** IAM actions required for the CreatePreset API call. */
	static readonly CREATE_PRESET: string[] = [
		"mediaconvert:CreatePreset",
		"mediaconvert:TagResource",
	];
	/** IAM actions required for the CreateQueue API call. */
	static readonly CREATE_QUEUE: string[] = [
		"mediaconvert:CreateQueue",
		"mediaconvert:TagResource",
	];
	/** IAM actions required for the CreateResourceShare API call. */
	static readonly CREATE_RESOURCE_SHARE: string[] = [
		"mediaconvert:CreateResourceShare",
	];
	/** IAM actions required for the DeleteJobTemplate API call. */
	static readonly DELETE_JOB_TEMPLATE: string[] = [
		"mediaconvert:DeleteJobTemplate",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DELETE_POLICY: string[] = ["mediaconvert:DeletePolicy"];
	/** IAM actions required for the DeletePreset API call. */
	static readonly DELETE_PRESET: string[] = ["mediaconvert:DeletePreset"];
	/** IAM actions required for the DeleteQueue API call. */
	static readonly DELETE_QUEUE: string[] = ["mediaconvert:DeleteQueue"];
	/** IAM actions required for the DescribeEndpoints API call. */
	static readonly DESCRIBE_ENDPOINTS: string[] = [
		"mediaconvert:DescribeEndpoints",
	];
	/** IAM actions required for the DisassociateCertificate API call. */
	static readonly DISASSOCIATE_CERTIFICATE: string[] = [
		"mediaconvert:DisassociateCertificate",
	];
	/** IAM actions required for the GetJob API call. */
	static readonly GET_JOB: string[] = ["mediaconvert:GetJob"];
	/** IAM actions required for the GetJobTemplate API call. */
	static readonly GET_JOB_TEMPLATE: string[] = [
		"mediaconvert:GetJobTemplate",
		"mediaconvert:ListJobTemplates",
	];
	/** IAM actions required for the GetJobsQueryResults API call. */
	static readonly GET_JOBS_QUERY_RESULTS: string[] = [];
	/** IAM actions required for the GetPolicy API call. */
	static readonly GET_POLICY: string[] = ["mediaconvert:GetPolicy"];
	/** IAM actions required for the GetPreset API call. */
	static readonly GET_PRESET: string[] = [
		"mediaconvert:GetPreset",
		"mediaconvert:ListPresets",
	];
	/** IAM actions required for the GetQueue API call. */
	static readonly GET_QUEUE: string[] = ["mediaconvert:GetQueue"];
	/** IAM actions required for the ListJobTemplates API call. */
	static readonly LIST_JOB_TEMPLATES: string[] = [
		"mediaconvert:ListJobTemplates",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["mediaconvert:ListJobs"];
	/** IAM actions required for the ListPresets API call. */
	static readonly LIST_PRESETS: string[] = ["mediaconvert:ListPresets"];
	/** IAM actions required for the ListQueues API call. */
	static readonly LIST_QUEUES: string[] = ["mediaconvert:ListQueues"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"mediaconvert:ListTagsForResource",
	];
	/** IAM actions required for the ListVersions API call. */
	static readonly LIST_VERSIONS: string[] = ["mediaconvert:ListVersions"];
	/** IAM actions required for the Probe API call. */
	static readonly PROBE: string[] = ["mediaconvert:Probe"];
	/** IAM actions required for the PutPolicy API call. */
	static readonly PUT_POLICY: string[] = ["mediaconvert:PutPolicy"];
	/** IAM actions required for the SearchJobs API call. */
	static readonly SEARCH_JOBS: string[] = ["mediaconvert:SearchJobs"];
	/** IAM actions required for the StartJobsQuery API call. */
	static readonly START_JOBS_QUERY: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["mediaconvert:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["mediaconvert:UntagResource"];
	/** IAM actions required for the UpdateJobTemplate API call. */
	static readonly UPDATE_JOB_TEMPLATE: string[] = [
		"mediaconvert:UpdateJobTemplate",
	];
	/** IAM actions required for the UpdatePreset API call. */
	static readonly UPDATE_PRESET: string[] = ["mediaconvert:UpdatePreset"];
	/** IAM actions required for the UpdateQueue API call. */
	static readonly UPDATE_QUEUE: string[] = ["mediaconvert:UpdateQueue"];
}

/**
 * Condition key constants and builders for mediaconvert.
 */
export class MediaConvertConditions {
	/** Condition keys applicable to the CreateJob action. */
	static readonly CREATE_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"mediaconvert:HttpInputsAllowed",
		"mediaconvert:HttpsInputsAllowed",
		"mediaconvert:S3InputsAllowed",
	];
	/** Condition keys applicable to the CreateJobTemplate action. */
	static readonly CREATE_JOB_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePreset action. */
	static readonly CREATE_PRESET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQueue action. */
	static readonly CREATE_QUEUE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
	/** Condition key: mediaconvert:HttpInputsAllowed (Bool) */
	static readonly HTTP_INPUTS_ALLOWED = "mediaconvert:HttpInputsAllowed";
	/** Condition key: mediaconvert:HttpsInputsAllowed (Bool) */
	static readonly HTTPS_INPUTS_ALLOWED = "mediaconvert:HttpsInputsAllowed";
	/** Condition key: mediaconvert:S3InputsAllowed (Bool) */
	static readonly S3_INPUTS_ALLOWED = "mediaconvert:S3InputsAllowed";

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

	/**
	 * Generates a condition block for `mediaconvert:HttpInputsAllowed`.
	 */
	static httpInputsAllowed(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "mediaconvert:HttpInputsAllowed": value } };
	}

	/**
	 * Generates a condition block for `mediaconvert:HttpsInputsAllowed`.
	 */
	static httpsInputsAllowed(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "mediaconvert:HttpsInputsAllowed": value } };
	}

	/**
	 * Generates a condition block for `mediaconvert:S3InputsAllowed`.
	 */
	static s3InputsAllowed(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "mediaconvert:S3InputsAllowed": value } };
	}
}
