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
	static readonly AssociateCertificate = "mediaconvert:AssociateCertificate";
	/** [Write] mediaconvert:CancelJob */
	static readonly CancelJob = "mediaconvert:CancelJob";
	/** [Write] mediaconvert:CreateJob */
	static readonly CreateJob = "mediaconvert:CreateJob";
	/** [Write] mediaconvert:CreateJobTemplate */
	static readonly CreateJobTemplate = "mediaconvert:CreateJobTemplate";
	/** [Write] mediaconvert:CreatePreset */
	static readonly CreatePreset = "mediaconvert:CreatePreset";
	/** [Write] mediaconvert:CreateQueue */
	static readonly CreateQueue = "mediaconvert:CreateQueue";
	/** [Write] mediaconvert:CreateResourceShare */
	static readonly CreateResourceShare = "mediaconvert:CreateResourceShare";
	/** [Write] mediaconvert:DeleteJobTemplate */
	static readonly DeleteJobTemplate = "mediaconvert:DeleteJobTemplate";
	/** [Write] mediaconvert:DeletePolicy */
	static readonly DeletePolicy = "mediaconvert:DeletePolicy";
	/** [Write] mediaconvert:DeletePreset */
	static readonly DeletePreset = "mediaconvert:DeletePreset";
	/** [Write] mediaconvert:DeleteQueue */
	static readonly DeleteQueue = "mediaconvert:DeleteQueue";
	/** [List] mediaconvert:DescribeEndpoints */
	static readonly DescribeEndpoints = "mediaconvert:DescribeEndpoints";
	/** [Write] mediaconvert:DisassociateCertificate */
	static readonly DisassociateCertificate =
		"mediaconvert:DisassociateCertificate";
	/** [Read] mediaconvert:GetJob */
	static readonly actionGetJob = "mediaconvert:GetJob";
	/** [Read] mediaconvert:GetJobTemplate */
	static readonly actionGetJobTemplate = "mediaconvert:GetJobTemplate";
	/** [Read] mediaconvert:GetPolicy */
	static readonly actionGetPolicy = "mediaconvert:GetPolicy";
	/** [Read] mediaconvert:GetPreset */
	static readonly actionGetPreset = "mediaconvert:GetPreset";
	/** [Read] mediaconvert:GetQueue */
	static readonly actionGetQueue = "mediaconvert:GetQueue";
	/** [List] mediaconvert:ListJobTemplates */
	static readonly ListJobTemplates = "mediaconvert:ListJobTemplates";
	/** [List] mediaconvert:ListJobs */
	static readonly ListJobs = "mediaconvert:ListJobs";
	/** [List] mediaconvert:ListPresets */
	static readonly ListPresets = "mediaconvert:ListPresets";
	/** [List] mediaconvert:ListQueues */
	static readonly ListQueues = "mediaconvert:ListQueues";
	/** [Read] mediaconvert:ListTagsForResource */
	static readonly ListTagsForResource = "mediaconvert:ListTagsForResource";
	/** [List] mediaconvert:ListVersions */
	static readonly ListVersions = "mediaconvert:ListVersions";
	/** [Read] mediaconvert:Probe */
	static readonly Probe = "mediaconvert:Probe";
	/** [Write] mediaconvert:PutPolicy */
	static readonly PutPolicy = "mediaconvert:PutPolicy";
	/** [List] mediaconvert:SearchJobs */
	static readonly SearchJobs = "mediaconvert:SearchJobs";
	/** [Tagging] mediaconvert:TagResource */
	static readonly TagResource = "mediaconvert:TagResource";
	/** [Tagging] mediaconvert:UntagResource */
	static readonly UntagResource = "mediaconvert:UntagResource";
	/** [Write] mediaconvert:UpdateJobTemplate */
	static readonly UpdateJobTemplate = "mediaconvert:UpdateJobTemplate";
	/** [Write] mediaconvert:UpdatePreset */
	static readonly UpdatePreset = "mediaconvert:UpdatePreset";
	/** [Write] mediaconvert:UpdateQueue */
	static readonly UpdateQueue = "mediaconvert:UpdateQueue";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MediaConvertActions.actionGetJob,
		MediaConvertActions.actionGetJobTemplate,
		MediaConvertActions.actionGetPolicy,
		MediaConvertActions.actionGetPreset,
		MediaConvertActions.actionGetQueue,
		MediaConvertActions.ListTagsForResource,
		MediaConvertActions.Probe,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MediaConvertActions.AssociateCertificate,
		MediaConvertActions.CancelJob,
		MediaConvertActions.CreateJob,
		MediaConvertActions.CreateJobTemplate,
		MediaConvertActions.CreatePreset,
		MediaConvertActions.CreateQueue,
		MediaConvertActions.CreateResourceShare,
		MediaConvertActions.DeleteJobTemplate,
		MediaConvertActions.DeletePolicy,
		MediaConvertActions.DeletePreset,
		MediaConvertActions.DeleteQueue,
		MediaConvertActions.DisassociateCertificate,
		MediaConvertActions.PutPolicy,
		MediaConvertActions.UpdateJobTemplate,
		MediaConvertActions.UpdatePreset,
		MediaConvertActions.UpdateQueue,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MediaConvertActions.DescribeEndpoints,
		MediaConvertActions.ListJobTemplates,
		MediaConvertActions.ListJobs,
		MediaConvertActions.ListPresets,
		MediaConvertActions.ListQueues,
		MediaConvertActions.ListVersions,
		MediaConvertActions.SearchJobs,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MediaConvertActions.TagResource,
		MediaConvertActions.UntagResource,
	];
}

/**
 * Properties for building a CertificateAssociation ARN.
 */
export interface MediaConvertCertificateAssociationArnProps {
	/** The CertificateArn component of the ARN. */
	readonly certificateARN: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a CertificateAssociation ARN.
 */
export interface MediaConvertCertificateAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CertificateArn component. */
	readonly certificateARN: string;
}

/**
 * Properties for building a Job ARN.
 */
export interface MediaConvertJobArnProps {
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
 * Parsed components of a Job ARN.
 */
export interface MediaConvertJobArnComponents {
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
 * Properties for building a JobTemplate ARN.
 */
export interface MediaConvertJobTemplateArnProps {
	/** The JobTemplateName component of the ARN. */
	readonly jobTemplateName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a JobTemplate ARN.
 */
export interface MediaConvertJobTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobTemplateName component. */
	readonly jobTemplateName: string;
}

/**
 * Properties for building a Preset ARN.
 */
export interface MediaConvertPresetArnProps {
	/** The PresetName component of the ARN. */
	readonly presetName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Preset ARN.
 */
export interface MediaConvertPresetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PresetName component. */
	readonly presetName: string;
}

/**
 * Properties for building a Queue ARN.
 */
export interface MediaConvertQueueArnProps {
	/** The QueueName component of the ARN. */
	readonly queueName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Queue ARN.
 */
export interface MediaConvertQueueArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The QueueName component. */
	readonly queueName: string;
}

const CertificateAssociationArnRegex =
	/^arn:(?<partition>[^:]+):mediaconvert:(?<region>[^:]*):(?<account>[^:]*):certificates\/(?<certificateARN>[^:/?]+)$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):mediaconvert:(?<region>[^:]*):(?<account>[^:]*):jobs\/(?<jobId>[^:/?]+)$/;
const JobTemplateArnRegex =
	/^arn:(?<partition>[^:]+):mediaconvert:(?<region>[^:]*):(?<account>[^:]*):jobTemplates\/(?<jobTemplateName>[^:/?]+)$/;
const PresetArnRegex =
	/^arn:(?<partition>[^:]+):mediaconvert:(?<region>[^:]*):(?<account>[^:]*):presets\/(?<presetName>[^:/?]+)$/;
const QueueArnRegex =
	/^arn:(?<partition>[^:]+):mediaconvert:(?<region>[^:]*):(?<account>[^:]*):queues\/(?<queueName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for mediaconvert resources.
 */
export class MediaConvertResources {
	/**
	 * Builds an ARN for the CertificateAssociation resource.
	 */
	static certificateAssociation(
		props: MediaConvertCertificateAssociationArnProps,
	): string {
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
	static parseCertificateAssociationArn(
		arn: string,
	): MediaConvertCertificateAssociationArnComponents {
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
	static job(props: MediaConvertJobArnProps): string {
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
	static parseJobArn(arn: string): MediaConvertJobArnComponents {
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
	static jobTemplate(props: MediaConvertJobTemplateArnProps): string {
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
	static parseJobTemplateArn(
		arn: string,
	): MediaConvertJobTemplateArnComponents {
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
	static preset(props: MediaConvertPresetArnProps): string {
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
	static parsePresetArn(arn: string): MediaConvertPresetArnComponents {
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
	static queue(props: MediaConvertQueueArnProps): string {
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
	static parseQueueArn(arn: string): MediaConvertQueueArnComponents {
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
	static readonly AssociateCertificate: string[] = [
		"mediaconvert:AssociateCertificate",
	];
	/** IAM actions required for the CancelJob API call. */
	static readonly CancelJob: string[] = ["mediaconvert:CancelJob"];
	/** IAM actions required for the CreateJob API call. */
	static readonly CreateJob: string[] = [
		"mediaconvert:CreateJob",
		"iam:PassRole",
		"mediaconvert:TagResource",
	];
	/** IAM actions required for the CreateJobTemplate API call. */
	static readonly CreateJobTemplate: string[] = [
		"mediaconvert:CreateJobTemplate",
		"mediaconvert:TagResource",
	];
	/** IAM actions required for the CreatePreset API call. */
	static readonly CreatePreset: string[] = [
		"mediaconvert:CreatePreset",
		"mediaconvert:TagResource",
	];
	/** IAM actions required for the CreateQueue API call. */
	static readonly CreateQueue: string[] = [
		"mediaconvert:CreateQueue",
		"mediaconvert:TagResource",
	];
	/** IAM actions required for the CreateResourceShare API call. */
	static readonly CreateResourceShare: string[] = [
		"mediaconvert:CreateResourceShare",
	];
	/** IAM actions required for the DeleteJobTemplate API call. */
	static readonly DeleteJobTemplate: string[] = [
		"mediaconvert:DeleteJobTemplate",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DeletePolicy: string[] = ["mediaconvert:DeletePolicy"];
	/** IAM actions required for the DeletePreset API call. */
	static readonly DeletePreset: string[] = ["mediaconvert:DeletePreset"];
	/** IAM actions required for the DeleteQueue API call. */
	static readonly DeleteQueue: string[] = ["mediaconvert:DeleteQueue"];
	/** IAM actions required for the DescribeEndpoints API call. */
	static readonly DescribeEndpoints: string[] = [
		"mediaconvert:DescribeEndpoints",
	];
	/** IAM actions required for the DisassociateCertificate API call. */
	static readonly DisassociateCertificate: string[] = [
		"mediaconvert:DisassociateCertificate",
	];
	/** IAM actions required for the GetJob API call. */
	static readonly opGetJob: string[] = ["mediaconvert:GetJob"];
	/** IAM actions required for the GetJobTemplate API call. */
	static readonly opGetJobTemplate: string[] = [
		"mediaconvert:GetJobTemplate",
		"mediaconvert:ListJobTemplates",
	];
	/** IAM actions required for the GetJobsQueryResults API call. */
	static readonly opGetJobsQueryResults: string[] = [];
	/** IAM actions required for the GetPolicy API call. */
	static readonly opGetPolicy: string[] = ["mediaconvert:GetPolicy"];
	/** IAM actions required for the GetPreset API call. */
	static readonly opGetPreset: string[] = [
		"mediaconvert:GetPreset",
		"mediaconvert:ListPresets",
	];
	/** IAM actions required for the GetQueue API call. */
	static readonly opGetQueue: string[] = ["mediaconvert:GetQueue"];
	/** IAM actions required for the ListJobTemplates API call. */
	static readonly ListJobTemplates: string[] = [
		"mediaconvert:ListJobTemplates",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["mediaconvert:ListJobs"];
	/** IAM actions required for the ListPresets API call. */
	static readonly ListPresets: string[] = ["mediaconvert:ListPresets"];
	/** IAM actions required for the ListQueues API call. */
	static readonly ListQueues: string[] = ["mediaconvert:ListQueues"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"mediaconvert:ListTagsForResource",
	];
	/** IAM actions required for the ListVersions API call. */
	static readonly ListVersions: string[] = ["mediaconvert:ListVersions"];
	/** IAM actions required for the Probe API call. */
	static readonly Probe: string[] = ["mediaconvert:Probe"];
	/** IAM actions required for the PutPolicy API call. */
	static readonly PutPolicy: string[] = ["mediaconvert:PutPolicy"];
	/** IAM actions required for the SearchJobs API call. */
	static readonly SearchJobs: string[] = ["mediaconvert:SearchJobs"];
	/** IAM actions required for the StartJobsQuery API call. */
	static readonly StartJobsQuery: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["mediaconvert:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["mediaconvert:UntagResource"];
	/** IAM actions required for the UpdateJobTemplate API call. */
	static readonly UpdateJobTemplate: string[] = [
		"mediaconvert:UpdateJobTemplate",
	];
	/** IAM actions required for the UpdatePreset API call. */
	static readonly UpdatePreset: string[] = ["mediaconvert:UpdatePreset"];
	/** IAM actions required for the UpdateQueue API call. */
	static readonly UpdateQueue: string[] = ["mediaconvert:UpdateQueue"];
}

/**
 * Condition key constants and builders for mediaconvert.
 */
export class MediaConvertConditions {
	/** Condition keys applicable to the CreateJob action. */
	static readonly CreateJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"mediaconvert:HttpInputsAllowed",
		"mediaconvert:HttpsInputsAllowed",
		"mediaconvert:S3InputsAllowed",
	];
	/** Condition keys applicable to the CreateJobTemplate action. */
	static readonly CreateJobTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePreset action. */
	static readonly CreatePresetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQueue action. */
	static readonly CreateQueueConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
