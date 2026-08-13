// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/transcribe.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the transcribe service.
 */
export class TranscribeActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "transcribe";

	/** [Write] transcribe:CreateCallAnalyticsCategory */
	static readonly CreateCallAnalyticsCategory =
		"transcribe:CreateCallAnalyticsCategory";
	/** [Write] transcribe:CreateLanguageModel */
	static readonly CreateLanguageModel = "transcribe:CreateLanguageModel";
	/** [Write] transcribe:CreateMedicalVocabulary */
	static readonly CreateMedicalVocabulary =
		"transcribe:CreateMedicalVocabulary";
	/** [Write] transcribe:CreateVocabulary */
	static readonly CreateVocabulary = "transcribe:CreateVocabulary";
	/** [Write] transcribe:CreateVocabularyFilter */
	static readonly CreateVocabularyFilter = "transcribe:CreateVocabularyFilter";
	/** [Write] transcribe:DeleteCallAnalyticsCategory */
	static readonly DeleteCallAnalyticsCategory =
		"transcribe:DeleteCallAnalyticsCategory";
	/** [Write] transcribe:DeleteCallAnalyticsJob */
	static readonly DeleteCallAnalyticsJob = "transcribe:DeleteCallAnalyticsJob";
	/** [Write] transcribe:DeleteLanguageModel */
	static readonly DeleteLanguageModel = "transcribe:DeleteLanguageModel";
	/** [Write] transcribe:DeleteMedicalScribeJob */
	static readonly DeleteMedicalScribeJob = "transcribe:DeleteMedicalScribeJob";
	/** [Write] transcribe:DeleteMedicalTranscriptionJob */
	static readonly DeleteMedicalTranscriptionJob =
		"transcribe:DeleteMedicalTranscriptionJob";
	/** [Write] transcribe:DeleteMedicalVocabulary */
	static readonly DeleteMedicalVocabulary =
		"transcribe:DeleteMedicalVocabulary";
	/** [Write] transcribe:DeleteTranscriptionJob */
	static readonly DeleteTranscriptionJob = "transcribe:DeleteTranscriptionJob";
	/** [Write] transcribe:DeleteVocabulary */
	static readonly DeleteVocabulary = "transcribe:DeleteVocabulary";
	/** [Write] transcribe:DeleteVocabularyFilter */
	static readonly DeleteVocabularyFilter = "transcribe:DeleteVocabularyFilter";
	/** [Read] transcribe:DescribeLanguageModel */
	static readonly DescribeLanguageModel = "transcribe:DescribeLanguageModel";
	/** [Read] transcribe:GetCallAnalyticsCategory */
	static readonly actionGetCallAnalyticsCategory =
		"transcribe:GetCallAnalyticsCategory";
	/** [Read] transcribe:GetCallAnalyticsJob */
	static readonly actionGetCallAnalyticsJob = "transcribe:GetCallAnalyticsJob";
	/** [Read] transcribe:GetMedicalScribeJob */
	static readonly actionGetMedicalScribeJob = "transcribe:GetMedicalScribeJob";
	/** [Read] transcribe:GetMedicalScribeStream */
	static readonly actionGetMedicalScribeStream =
		"transcribe:GetMedicalScribeStream";
	/** [Read] transcribe:GetMedicalTranscriptionJob */
	static readonly actionGetMedicalTranscriptionJob =
		"transcribe:GetMedicalTranscriptionJob";
	/** [Read] transcribe:GetMedicalVocabulary */
	static readonly actionGetMedicalVocabulary =
		"transcribe:GetMedicalVocabulary";
	/** [Read] transcribe:GetTranscriptionJob */
	static readonly actionGetTranscriptionJob = "transcribe:GetTranscriptionJob";
	/** [Read] transcribe:GetVocabulary */
	static readonly actionGetVocabulary = "transcribe:GetVocabulary";
	/** [Read] transcribe:GetVocabularyFilter */
	static readonly actionGetVocabularyFilter = "transcribe:GetVocabularyFilter";
	/** [List] transcribe:ListCallAnalyticsCategories */
	static readonly ListCallAnalyticsCategories =
		"transcribe:ListCallAnalyticsCategories";
	/** [List] transcribe:ListCallAnalyticsJobs */
	static readonly ListCallAnalyticsJobs = "transcribe:ListCallAnalyticsJobs";
	/** [List] transcribe:ListLanguageModels */
	static readonly ListLanguageModels = "transcribe:ListLanguageModels";
	/** [List] transcribe:ListMedicalScribeJobs */
	static readonly ListMedicalScribeJobs = "transcribe:ListMedicalScribeJobs";
	/** [List] transcribe:ListMedicalTranscriptionJobs */
	static readonly ListMedicalTranscriptionJobs =
		"transcribe:ListMedicalTranscriptionJobs";
	/** [List] transcribe:ListMedicalVocabularies */
	static readonly ListMedicalVocabularies =
		"transcribe:ListMedicalVocabularies";
	/** [Read] transcribe:ListTagsForResource */
	static readonly ListTagsForResource = "transcribe:ListTagsForResource";
	/** [List] transcribe:ListTranscriptionJobs */
	static readonly ListTranscriptionJobs = "transcribe:ListTranscriptionJobs";
	/** [List] transcribe:ListVocabularies */
	static readonly ListVocabularies = "transcribe:ListVocabularies";
	/** [List] transcribe:ListVocabularyFilters */
	static readonly ListVocabularyFilters = "transcribe:ListVocabularyFilters";
	/** [Write] transcribe:StartCallAnalyticsJob */
	static readonly StartCallAnalyticsJob = "transcribe:StartCallAnalyticsJob";
	/** [Write] transcribe:StartCallAnalyticsStreamTranscription */
	static readonly StartCallAnalyticsStreamTranscription =
		"transcribe:StartCallAnalyticsStreamTranscription";
	/** [Write] transcribe:StartCallAnalyticsStreamTranscriptionWebSocket */
	static readonly StartCallAnalyticsStreamTranscriptionWebSocket =
		"transcribe:StartCallAnalyticsStreamTranscriptionWebSocket";
	/** [Write] transcribe:StartMedicalScribeJob */
	static readonly StartMedicalScribeJob = "transcribe:StartMedicalScribeJob";
	/** [Write] transcribe:StartMedicalScribeStream */
	static readonly StartMedicalScribeStream =
		"transcribe:StartMedicalScribeStream";
	/** [Write] transcribe:StartMedicalStreamTranscription */
	static readonly StartMedicalStreamTranscription =
		"transcribe:StartMedicalStreamTranscription";
	/** [Write] transcribe:StartMedicalStreamTranscriptionWebSocket */
	static readonly StartMedicalStreamTranscriptionWebSocket =
		"transcribe:StartMedicalStreamTranscriptionWebSocket";
	/** [Write] transcribe:StartMedicalTranscriptionJob */
	static readonly StartMedicalTranscriptionJob =
		"transcribe:StartMedicalTranscriptionJob";
	/** [Write] transcribe:StartStreamTranscription */
	static readonly StartStreamTranscription =
		"transcribe:StartStreamTranscription";
	/** [Write] transcribe:StartStreamTranscriptionWebSocket */
	static readonly StartStreamTranscriptionWebSocket =
		"transcribe:StartStreamTranscriptionWebSocket";
	/** [Write] transcribe:StartTranscriptionJob */
	static readonly StartTranscriptionJob = "transcribe:StartTranscriptionJob";
	/** [Tagging] transcribe:TagResource */
	static readonly TagResource = "transcribe:TagResource";
	/** [Tagging] transcribe:UntagResource */
	static readonly UntagResource = "transcribe:UntagResource";
	/** [Write] transcribe:UpdateCallAnalyticsCategory */
	static readonly UpdateCallAnalyticsCategory =
		"transcribe:UpdateCallAnalyticsCategory";
	/** [Write] transcribe:UpdateMedicalVocabulary */
	static readonly UpdateMedicalVocabulary =
		"transcribe:UpdateMedicalVocabulary";
	/** [Write] transcribe:UpdateVocabulary */
	static readonly UpdateVocabulary = "transcribe:UpdateVocabulary";
	/** [Write] transcribe:UpdateVocabularyFilter */
	static readonly UpdateVocabularyFilter = "transcribe:UpdateVocabularyFilter";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TranscribeActions.DescribeLanguageModel,
		TranscribeActions.actionGetCallAnalyticsCategory,
		TranscribeActions.actionGetCallAnalyticsJob,
		TranscribeActions.actionGetMedicalScribeJob,
		TranscribeActions.actionGetMedicalScribeStream,
		TranscribeActions.actionGetMedicalTranscriptionJob,
		TranscribeActions.actionGetMedicalVocabulary,
		TranscribeActions.actionGetTranscriptionJob,
		TranscribeActions.actionGetVocabulary,
		TranscribeActions.actionGetVocabularyFilter,
		TranscribeActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TranscribeActions.CreateCallAnalyticsCategory,
		TranscribeActions.CreateLanguageModel,
		TranscribeActions.CreateMedicalVocabulary,
		TranscribeActions.CreateVocabulary,
		TranscribeActions.CreateVocabularyFilter,
		TranscribeActions.DeleteCallAnalyticsCategory,
		TranscribeActions.DeleteCallAnalyticsJob,
		TranscribeActions.DeleteLanguageModel,
		TranscribeActions.DeleteMedicalScribeJob,
		TranscribeActions.DeleteMedicalTranscriptionJob,
		TranscribeActions.DeleteMedicalVocabulary,
		TranscribeActions.DeleteTranscriptionJob,
		TranscribeActions.DeleteVocabulary,
		TranscribeActions.DeleteVocabularyFilter,
		TranscribeActions.StartCallAnalyticsJob,
		TranscribeActions.StartCallAnalyticsStreamTranscription,
		TranscribeActions.StartCallAnalyticsStreamTranscriptionWebSocket,
		TranscribeActions.StartMedicalScribeJob,
		TranscribeActions.StartMedicalScribeStream,
		TranscribeActions.StartMedicalStreamTranscription,
		TranscribeActions.StartMedicalStreamTranscriptionWebSocket,
		TranscribeActions.StartMedicalTranscriptionJob,
		TranscribeActions.StartStreamTranscription,
		TranscribeActions.StartStreamTranscriptionWebSocket,
		TranscribeActions.StartTranscriptionJob,
		TranscribeActions.UpdateCallAnalyticsCategory,
		TranscribeActions.UpdateMedicalVocabulary,
		TranscribeActions.UpdateVocabulary,
		TranscribeActions.UpdateVocabularyFilter,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		TranscribeActions.ListCallAnalyticsCategories,
		TranscribeActions.ListCallAnalyticsJobs,
		TranscribeActions.ListLanguageModels,
		TranscribeActions.ListMedicalScribeJobs,
		TranscribeActions.ListMedicalTranscriptionJobs,
		TranscribeActions.ListMedicalVocabularies,
		TranscribeActions.ListTranscriptionJobs,
		TranscribeActions.ListVocabularies,
		TranscribeActions.ListVocabularyFilters,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		TranscribeActions.TagResource,
		TranscribeActions.UntagResource,
	];
}

/**
 * Properties for building a callanalyticscategory ARN.
 */
export interface TranscribeCallanalyticscategoryArnProps {
	/** The CategoryName component of the ARN. */
	readonly categoryName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a callanalyticscategory ARN.
 */
export interface TranscribeCallanalyticscategoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CategoryName component. */
	readonly categoryName: string;
}

/**
 * Properties for building a callanalyticsjob ARN.
 */
export interface TranscribeCallanalyticsjobArnProps {
	/** The JobName component of the ARN. */
	readonly jobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a callanalyticsjob ARN.
 */
export interface TranscribeCallanalyticsjobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobName component. */
	readonly jobName: string;
}

/**
 * Properties for building a languagemodel ARN.
 */
export interface TranscribeLanguagemodelArnProps {
	/** The ModelName component of the ARN. */
	readonly modelName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a languagemodel ARN.
 */
export interface TranscribeLanguagemodelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ModelName component. */
	readonly modelName: string;
}

/**
 * Properties for building a medicalscribejob ARN.
 */
export interface TranscribeMedicalscribejobArnProps {
	/** The JobName component of the ARN. */
	readonly jobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a medicalscribejob ARN.
 */
export interface TranscribeMedicalscribejobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobName component. */
	readonly jobName: string;
}

/**
 * Properties for building a medicaltranscriptionjob ARN.
 */
export interface TranscribeMedicaltranscriptionjobArnProps {
	/** The JobName component of the ARN. */
	readonly jobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a medicaltranscriptionjob ARN.
 */
export interface TranscribeMedicaltranscriptionjobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobName component. */
	readonly jobName: string;
}

/**
 * Properties for building a medicalvocabulary ARN.
 */
export interface TranscribeMedicalvocabularyArnProps {
	/** The VocabularyName component of the ARN. */
	readonly vocabularyName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a medicalvocabulary ARN.
 */
export interface TranscribeMedicalvocabularyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VocabularyName component. */
	readonly vocabularyName: string;
}

/**
 * Properties for building a transcriptionjob ARN.
 */
export interface TranscribeTranscriptionjobArnProps {
	/** The JobName component of the ARN. */
	readonly jobName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a transcriptionjob ARN.
 */
export interface TranscribeTranscriptionjobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobName component. */
	readonly jobName: string;
}

/**
 * Properties for building a vocabulary ARN.
 */
export interface TranscribeVocabularyArnProps {
	/** The VocabularyName component of the ARN. */
	readonly vocabularyName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a vocabulary ARN.
 */
export interface TranscribeVocabularyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VocabularyName component. */
	readonly vocabularyName: string;
}

/**
 * Properties for building a vocabularyfilter ARN.
 */
export interface TranscribeVocabularyfilterArnProps {
	/** The VocabularyFilterName component of the ARN. */
	readonly vocabularyFilterName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a vocabularyfilter ARN.
 */
export interface TranscribeVocabularyfilterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VocabularyFilterName component. */
	readonly vocabularyFilterName: string;
}

const CallanalyticscategoryArnRegex =
	/^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):analytics-category\/(?<categoryName>[^:/?]+)$/;
const CallanalyticsjobArnRegex =
	/^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):analytics\/(?<jobName>[^:/?]+)$/;
const LanguagemodelArnRegex =
	/^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):language-model\/(?<modelName>[^:/?]+)$/;
const MedicalscribejobArnRegex =
	/^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):medical-scribe-job\/(?<jobName>[^:/?]+)$/;
const MedicaltranscriptionjobArnRegex =
	/^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):medical-transcription-job\/(?<jobName>[^:/?]+)$/;
const MedicalvocabularyArnRegex =
	/^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):medical-vocabulary\/(?<vocabularyName>[^:/?]+)$/;
const TranscriptionjobArnRegex =
	/^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):transcription-job\/(?<jobName>[^:/?]+)$/;
const VocabularyArnRegex =
	/^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):vocabulary\/(?<vocabularyName>[^:/?]+)$/;
const VocabularyfilterArnRegex =
	/^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):vocabulary-filter\/(?<vocabularyFilterName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for transcribe resources.
 */
export class TranscribeResources {
	/**
	 * Builds an ARN for the callanalyticscategory resource.
	 */
	static callanalyticscategory(
		props: TranscribeCallanalyticscategoryArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:transcribe:${props.region ?? "*"}:${props.account ?? "*"}:analytics-category/${props.categoryName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the callanalyticscategory resource.
	 */
	static isValidCallanalyticscategoryArn(arn: string): boolean {
		return CallanalyticscategoryArnRegex.test(arn);
	}

	/**
	 * Parses a callanalyticscategory ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCallanalyticscategoryArn(
		arn: string,
	): TranscribeCallanalyticscategoryArnComponents {
		const match = CallanalyticscategoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid callanalyticscategory ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			categoryName: match.groups!.categoryName,
		};
	}

	/**
	 * Builds an ARN for the callanalyticsjob resource.
	 */
	static callanalyticsjob(props: TranscribeCallanalyticsjobArnProps): string {
		return `arn:${props.partition ?? "aws"}:transcribe:${props.region ?? "*"}:${props.account ?? "*"}:analytics/${props.jobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the callanalyticsjob resource.
	 */
	static isValidCallanalyticsjobArn(arn: string): boolean {
		return CallanalyticsjobArnRegex.test(arn);
	}

	/**
	 * Parses a callanalyticsjob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCallanalyticsjobArn(
		arn: string,
	): TranscribeCallanalyticsjobArnComponents {
		const match = CallanalyticsjobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid callanalyticsjob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobName: match.groups!.jobName,
		};
	}

	/**
	 * Builds an ARN for the languagemodel resource.
	 */
	static languagemodel(props: TranscribeLanguagemodelArnProps): string {
		return `arn:${props.partition ?? "aws"}:transcribe:${props.region ?? "*"}:${props.account ?? "*"}:language-model/${props.modelName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the languagemodel resource.
	 */
	static isValidLanguagemodelArn(arn: string): boolean {
		return LanguagemodelArnRegex.test(arn);
	}

	/**
	 * Parses a languagemodel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLanguagemodelArn(
		arn: string,
	): TranscribeLanguagemodelArnComponents {
		const match = LanguagemodelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid languagemodel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			modelName: match.groups!.modelName,
		};
	}

	/**
	 * Builds an ARN for the medicalscribejob resource.
	 */
	static medicalscribejob(props: TranscribeMedicalscribejobArnProps): string {
		return `arn:${props.partition ?? "aws"}:transcribe:${props.region ?? "*"}:${props.account ?? "*"}:medical-scribe-job/${props.jobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the medicalscribejob resource.
	 */
	static isValidMedicalscribejobArn(arn: string): boolean {
		return MedicalscribejobArnRegex.test(arn);
	}

	/**
	 * Parses a medicalscribejob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMedicalscribejobArn(
		arn: string,
	): TranscribeMedicalscribejobArnComponents {
		const match = MedicalscribejobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid medicalscribejob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobName: match.groups!.jobName,
		};
	}

	/**
	 * Builds an ARN for the medicaltranscriptionjob resource.
	 */
	static medicaltranscriptionjob(
		props: TranscribeMedicaltranscriptionjobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:transcribe:${props.region ?? "*"}:${props.account ?? "*"}:medical-transcription-job/${props.jobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the medicaltranscriptionjob resource.
	 */
	static isValidMedicaltranscriptionjobArn(arn: string): boolean {
		return MedicaltranscriptionjobArnRegex.test(arn);
	}

	/**
	 * Parses a medicaltranscriptionjob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMedicaltranscriptionjobArn(
		arn: string,
	): TranscribeMedicaltranscriptionjobArnComponents {
		const match = MedicaltranscriptionjobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid medicaltranscriptionjob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobName: match.groups!.jobName,
		};
	}

	/**
	 * Builds an ARN for the medicalvocabulary resource.
	 */
	static medicalvocabulary(props: TranscribeMedicalvocabularyArnProps): string {
		return `arn:${props.partition ?? "aws"}:transcribe:${props.region ?? "*"}:${props.account ?? "*"}:medical-vocabulary/${props.vocabularyName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the medicalvocabulary resource.
	 */
	static isValidMedicalvocabularyArn(arn: string): boolean {
		return MedicalvocabularyArnRegex.test(arn);
	}

	/**
	 * Parses a medicalvocabulary ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMedicalvocabularyArn(
		arn: string,
	): TranscribeMedicalvocabularyArnComponents {
		const match = MedicalvocabularyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid medicalvocabulary ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vocabularyName: match.groups!.vocabularyName,
		};
	}

	/**
	 * Builds an ARN for the transcriptionjob resource.
	 */
	static transcriptionjob(props: TranscribeTranscriptionjobArnProps): string {
		return `arn:${props.partition ?? "aws"}:transcribe:${props.region ?? "*"}:${props.account ?? "*"}:transcription-job/${props.jobName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the transcriptionjob resource.
	 */
	static isValidTranscriptionjobArn(arn: string): boolean {
		return TranscriptionjobArnRegex.test(arn);
	}

	/**
	 * Parses a transcriptionjob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTranscriptionjobArn(
		arn: string,
	): TranscribeTranscriptionjobArnComponents {
		const match = TranscriptionjobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid transcriptionjob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobName: match.groups!.jobName,
		};
	}

	/**
	 * Builds an ARN for the vocabulary resource.
	 */
	static vocabulary(props: TranscribeVocabularyArnProps): string {
		return `arn:${props.partition ?? "aws"}:transcribe:${props.region ?? "*"}:${props.account ?? "*"}:vocabulary/${props.vocabularyName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vocabulary resource.
	 */
	static isValidVocabularyArn(arn: string): boolean {
		return VocabularyArnRegex.test(arn);
	}

	/**
	 * Parses a vocabulary ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVocabularyArn(arn: string): TranscribeVocabularyArnComponents {
		const match = VocabularyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vocabulary ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vocabularyName: match.groups!.vocabularyName,
		};
	}

	/**
	 * Builds an ARN for the vocabularyfilter resource.
	 */
	static vocabularyfilter(props: TranscribeVocabularyfilterArnProps): string {
		return `arn:${props.partition ?? "aws"}:transcribe:${props.region ?? "*"}:${props.account ?? "*"}:vocabulary-filter/${props.vocabularyFilterName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vocabularyfilter resource.
	 */
	static isValidVocabularyfilterArn(arn: string): boolean {
		return VocabularyfilterArnRegex.test(arn);
	}

	/**
	 * Parses a vocabularyfilter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVocabularyfilterArn(
		arn: string,
	): TranscribeVocabularyfilterArnComponents {
		const match = VocabularyfilterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vocabularyfilter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vocabularyFilterName: match.groups!.vocabularyFilterName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for transcribe.
 */
export class TranscribeOperations {
	/** IAM actions required for the CreateCallAnalyticsCategory API call. */
	static readonly CreateCallAnalyticsCategory: string[] = [
		"transcribe:CreateCallAnalyticsCategory",
		"transcribe:TagResource",
	];
	/** IAM actions required for the CreateLanguageModel API call. */
	static readonly CreateLanguageModel: string[] = [
		"transcribe:CreateLanguageModel",
		"iam:PassRole",
		"transcribe:TagResource",
	];
	/** IAM actions required for the CreateMedicalVocabulary API call. */
	static readonly CreateMedicalVocabulary: string[] = [
		"transcribe:CreateMedicalVocabulary",
		"transcribe:TagResource",
	];
	/** IAM actions required for the CreateVocabulary API call. */
	static readonly CreateVocabulary: string[] = [
		"transcribe:CreateVocabulary",
		"iam:PassRole",
		"transcribe:TagResource",
	];
	/** IAM actions required for the CreateVocabularyFilter API call. */
	static readonly CreateVocabularyFilter: string[] = [
		"transcribe:CreateVocabularyFilter",
		"iam:PassRole",
		"transcribe:TagResource",
	];
	/** IAM actions required for the DeleteCallAnalyticsCategory API call. */
	static readonly DeleteCallAnalyticsCategory: string[] = [
		"transcribe:DeleteCallAnalyticsCategory",
	];
	/** IAM actions required for the DeleteCallAnalyticsJob API call. */
	static readonly DeleteCallAnalyticsJob: string[] = [
		"transcribe:DeleteCallAnalyticsJob",
	];
	/** IAM actions required for the DeleteLanguageModel API call. */
	static readonly DeleteLanguageModel: string[] = [
		"transcribe:DeleteLanguageModel",
	];
	/** IAM actions required for the DeleteMedicalScribeJob API call. */
	static readonly DeleteMedicalScribeJob: string[] = [
		"transcribe:DeleteMedicalScribeJob",
	];
	/** IAM actions required for the DeleteMedicalTranscriptionJob API call. */
	static readonly DeleteMedicalTranscriptionJob: string[] = [
		"transcribe:DeleteMedicalTranscriptionJob",
	];
	/** IAM actions required for the DeleteMedicalVocabulary API call. */
	static readonly DeleteMedicalVocabulary: string[] = [
		"transcribe:DeleteMedicalVocabulary",
	];
	/** IAM actions required for the DeleteTranscriptionJob API call. */
	static readonly DeleteTranscriptionJob: string[] = [
		"transcribe:DeleteTranscriptionJob",
	];
	/** IAM actions required for the DeleteVocabulary API call. */
	static readonly DeleteVocabulary: string[] = ["transcribe:DeleteVocabulary"];
	/** IAM actions required for the DeleteVocabularyFilter API call. */
	static readonly DeleteVocabularyFilter: string[] = [
		"transcribe:DeleteVocabularyFilter",
	];
	/** IAM actions required for the DescribeLanguageModel API call. */
	static readonly DescribeLanguageModel: string[] = [
		"transcribe:DescribeLanguageModel",
	];
	/** IAM actions required for the GetCallAnalyticsCategory API call. */
	static readonly opGetCallAnalyticsCategory: string[] = [
		"transcribe:GetCallAnalyticsCategory",
	];
	/** IAM actions required for the GetCallAnalyticsJob API call. */
	static readonly opGetCallAnalyticsJob: string[] = [
		"transcribe:GetCallAnalyticsJob",
	];
	/** IAM actions required for the GetMedicalScribeJob API call. */
	static readonly opGetMedicalScribeJob: string[] = [
		"transcribe:GetMedicalScribeJob",
	];
	/** IAM actions required for the GetMedicalTranscriptionJob API call. */
	static readonly opGetMedicalTranscriptionJob: string[] = [
		"transcribe:GetMedicalTranscriptionJob",
	];
	/** IAM actions required for the GetMedicalVocabulary API call. */
	static readonly opGetMedicalVocabulary: string[] = [
		"transcribe:GetMedicalVocabulary",
	];
	/** IAM actions required for the GetTranscriptionJob API call. */
	static readonly opGetTranscriptionJob: string[] = [
		"transcribe:GetTranscriptionJob",
	];
	/** IAM actions required for the GetVocabulary API call. */
	static readonly opGetVocabulary: string[] = ["transcribe:GetVocabulary"];
	/** IAM actions required for the GetVocabularyFilter API call. */
	static readonly opGetVocabularyFilter: string[] = [
		"transcribe:GetVocabularyFilter",
	];
	/** IAM actions required for the ListCallAnalyticsCategories API call. */
	static readonly ListCallAnalyticsCategories: string[] = [
		"transcribe:ListCallAnalyticsCategories",
	];
	/** IAM actions required for the ListCallAnalyticsJobs API call. */
	static readonly ListCallAnalyticsJobs: string[] = [
		"transcribe:ListCallAnalyticsJobs",
	];
	/** IAM actions required for the ListLanguageModels API call. */
	static readonly ListLanguageModels: string[] = [
		"transcribe:ListLanguageModels",
	];
	/** IAM actions required for the ListMedicalScribeJobs API call. */
	static readonly ListMedicalScribeJobs: string[] = [
		"transcribe:ListMedicalScribeJobs",
	];
	/** IAM actions required for the ListMedicalTranscriptionJobs API call. */
	static readonly ListMedicalTranscriptionJobs: string[] = [
		"transcribe:ListMedicalTranscriptionJobs",
	];
	/** IAM actions required for the ListMedicalVocabularies API call. */
	static readonly ListMedicalVocabularies: string[] = [
		"transcribe:ListMedicalVocabularies",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"transcribe:ListTagsForResource",
	];
	/** IAM actions required for the ListTranscriptionJobs API call. */
	static readonly ListTranscriptionJobs: string[] = [
		"transcribe:ListTranscriptionJobs",
	];
	/** IAM actions required for the ListVocabularies API call. */
	static readonly ListVocabularies: string[] = ["transcribe:ListVocabularies"];
	/** IAM actions required for the ListVocabularyFilters API call. */
	static readonly ListVocabularyFilters: string[] = [
		"transcribe:ListVocabularyFilters",
	];
	/** IAM actions required for the StartCallAnalyticsJob API call. */
	static readonly StartCallAnalyticsJob: string[] = [
		"iam:PassRole",
		"transcribe:StartCallAnalyticsJob",
		"transcribe:TagResource",
	];
	/** IAM actions required for the StartMedicalScribeJob API call. */
	static readonly StartMedicalScribeJob: string[] = [
		"iam:PassRole",
		"transcribe:StartMedicalScribeJob",
		"transcribe:TagResource",
	];
	/** IAM actions required for the StartMedicalTranscriptionJob API call. */
	static readonly StartMedicalTranscriptionJob: string[] = [
		"transcribe:StartMedicalTranscriptionJob",
		"transcribe:TagResource",
	];
	/** IAM actions required for the StartTranscriptionJob API call. */
	static readonly StartTranscriptionJob: string[] = [
		"iam:PassRole",
		"transcribe:StartTranscriptionJob",
		"transcribe:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["transcribe:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["transcribe:UntagResource"];
	/** IAM actions required for the UpdateCallAnalyticsCategory API call. */
	static readonly UpdateCallAnalyticsCategory: string[] = [
		"transcribe:UpdateCallAnalyticsCategory",
	];
	/** IAM actions required for the UpdateMedicalVocabulary API call. */
	static readonly UpdateMedicalVocabulary: string[] = [
		"transcribe:UpdateMedicalVocabulary",
	];
	/** IAM actions required for the UpdateVocabulary API call. */
	static readonly UpdateVocabulary: string[] = [
		"iam:PassRole",
		"transcribe:UpdateVocabulary",
	];
	/** IAM actions required for the UpdateVocabularyFilter API call. */
	static readonly UpdateVocabularyFilter: string[] = [
		"iam:PassRole",
		"transcribe:UpdateVocabularyFilter",
	];
}

/**
 * Condition key constants and builders for transcribe.
 */
export class TranscribeConditions {
	/** Condition keys applicable to the CreateCallAnalyticsCategory action. */
	static readonly CreateCallAnalyticsCategoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLanguageModel action. */
	static readonly CreateLanguageModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMedicalVocabulary action. */
	static readonly CreateMedicalVocabularyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVocabulary action. */
	static readonly CreateVocabularyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVocabularyFilter action. */
	static readonly CreateVocabularyFilterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCallAnalyticsJob action. */
	static readonly StartCallAnalyticsJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"transcribe:OutputEncryptionKMSKeyId",
		"transcribe:OutputLocation",
	];
	/** Condition keys applicable to the StartMedicalScribeJob action. */
	static readonly StartMedicalScribeJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"transcribe:OutputBucketName",
		"transcribe:OutputEncryptionKMSKeyId",
	];
	/** Condition keys applicable to the StartMedicalTranscriptionJob action. */
	static readonly StartMedicalTranscriptionJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"transcribe:OutputBucketName",
		"transcribe:OutputEncryptionKMSKeyId",
		"transcribe:OutputKey",
	];
	/** Condition keys applicable to the StartTranscriptionJob action. */
	static readonly StartTranscriptionJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"transcribe:OutputBucketName",
		"transcribe:OutputEncryptionKMSKeyId",
		"transcribe:OutputKey",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"transcribe:OutputBucketName",
		"transcribe:OutputEncryptionKMSKeyId",
		"transcribe:OutputKey",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: transcribe:OutputBucketName (String) */
	static readonly OUTPUT_BUCKET_NAME = "transcribe:OutputBucketName";
	/** Condition key: transcribe:OutputEncryptionKMSKeyId (String) */
	static readonly OUTPUT_ENCRYPTION_KMS_KEY_ID =
		"transcribe:OutputEncryptionKMSKeyId";
	/** Condition key: transcribe:OutputKey (String) */
	static readonly OUTPUT_KEY = "transcribe:OutputKey";
	/** Condition key: transcribe:OutputLocation (String) */
	static readonly OUTPUT_LOCATION = "transcribe:OutputLocation";

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
	 * Generates a condition block for `transcribe:OutputBucketName`.
	 */
	static outputBucketName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "transcribe:OutputBucketName": value } };
	}

	/**
	 * Generates a condition block for `transcribe:OutputEncryptionKMSKeyId`.
	 */
	static outputEncryptionKMSKeyId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "transcribe:OutputEncryptionKMSKeyId": value } };
	}

	/**
	 * Generates a condition block for `transcribe:OutputKey`.
	 */
	static outputKey(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "transcribe:OutputKey": value } };
	}

	/**
	 * Generates a condition block for `transcribe:OutputLocation`.
	 */
	static outputLocation(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "transcribe:OutputLocation": value } };
	}
}
