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
	static readonly CREATE_CALL_ANALYTICS_CATEGORY =
		"transcribe:CreateCallAnalyticsCategory";
	/** [Write] transcribe:CreateLanguageModel */
	static readonly CREATE_LANGUAGE_MODEL = "transcribe:CreateLanguageModel";
	/** [Write] transcribe:CreateMedicalVocabulary */
	static readonly CREATE_MEDICAL_VOCABULARY =
		"transcribe:CreateMedicalVocabulary";
	/** [Write] transcribe:CreateVocabulary */
	static readonly CREATE_VOCABULARY = "transcribe:CreateVocabulary";
	/** [Write] transcribe:CreateVocabularyFilter */
	static readonly CREATE_VOCABULARY_FILTER =
		"transcribe:CreateVocabularyFilter";
	/** [Write] transcribe:DeleteCallAnalyticsCategory */
	static readonly DELETE_CALL_ANALYTICS_CATEGORY =
		"transcribe:DeleteCallAnalyticsCategory";
	/** [Write] transcribe:DeleteCallAnalyticsJob */
	static readonly DELETE_CALL_ANALYTICS_JOB =
		"transcribe:DeleteCallAnalyticsJob";
	/** [Write] transcribe:DeleteLanguageModel */
	static readonly DELETE_LANGUAGE_MODEL = "transcribe:DeleteLanguageModel";
	/** [Write] transcribe:DeleteMedicalScribeJob */
	static readonly DELETE_MEDICAL_SCRIBE_JOB =
		"transcribe:DeleteMedicalScribeJob";
	/** [Write] transcribe:DeleteMedicalTranscriptionJob */
	static readonly DELETE_MEDICAL_TRANSCRIPTION_JOB =
		"transcribe:DeleteMedicalTranscriptionJob";
	/** [Write] transcribe:DeleteMedicalVocabulary */
	static readonly DELETE_MEDICAL_VOCABULARY =
		"transcribe:DeleteMedicalVocabulary";
	/** [Write] transcribe:DeleteTranscriptionJob */
	static readonly DELETE_TRANSCRIPTION_JOB =
		"transcribe:DeleteTranscriptionJob";
	/** [Write] transcribe:DeleteVocabulary */
	static readonly DELETE_VOCABULARY = "transcribe:DeleteVocabulary";
	/** [Write] transcribe:DeleteVocabularyFilter */
	static readonly DELETE_VOCABULARY_FILTER =
		"transcribe:DeleteVocabularyFilter";
	/** [Read] transcribe:DescribeLanguageModel */
	static readonly DESCRIBE_LANGUAGE_MODEL = "transcribe:DescribeLanguageModel";
	/** [Read] transcribe:GetCallAnalyticsCategory */
	static readonly GET_CALL_ANALYTICS_CATEGORY =
		"transcribe:GetCallAnalyticsCategory";
	/** [Read] transcribe:GetCallAnalyticsJob */
	static readonly GET_CALL_ANALYTICS_JOB = "transcribe:GetCallAnalyticsJob";
	/** [Read] transcribe:GetMedicalScribeJob */
	static readonly GET_MEDICAL_SCRIBE_JOB = "transcribe:GetMedicalScribeJob";
	/** [Read] transcribe:GetMedicalScribeStream */
	static readonly GET_MEDICAL_SCRIBE_STREAM =
		"transcribe:GetMedicalScribeStream";
	/** [Read] transcribe:GetMedicalTranscriptionJob */
	static readonly GET_MEDICAL_TRANSCRIPTION_JOB =
		"transcribe:GetMedicalTranscriptionJob";
	/** [Read] transcribe:GetMedicalVocabulary */
	static readonly GET_MEDICAL_VOCABULARY = "transcribe:GetMedicalVocabulary";
	/** [Read] transcribe:GetTranscriptionJob */
	static readonly GET_TRANSCRIPTION_JOB = "transcribe:GetTranscriptionJob";
	/** [Read] transcribe:GetVocabulary */
	static readonly GET_VOCABULARY = "transcribe:GetVocabulary";
	/** [Read] transcribe:GetVocabularyFilter */
	static readonly GET_VOCABULARY_FILTER = "transcribe:GetVocabularyFilter";
	/** [List] transcribe:ListCallAnalyticsCategories */
	static readonly LIST_CALL_ANALYTICS_CATEGORIES =
		"transcribe:ListCallAnalyticsCategories";
	/** [List] transcribe:ListCallAnalyticsJobs */
	static readonly LIST_CALL_ANALYTICS_JOBS = "transcribe:ListCallAnalyticsJobs";
	/** [List] transcribe:ListLanguageModels */
	static readonly LIST_LANGUAGE_MODELS = "transcribe:ListLanguageModels";
	/** [List] transcribe:ListMedicalScribeJobs */
	static readonly LIST_MEDICAL_SCRIBE_JOBS = "transcribe:ListMedicalScribeJobs";
	/** [List] transcribe:ListMedicalTranscriptionJobs */
	static readonly LIST_MEDICAL_TRANSCRIPTION_JOBS =
		"transcribe:ListMedicalTranscriptionJobs";
	/** [List] transcribe:ListMedicalVocabularies */
	static readonly LIST_MEDICAL_VOCABULARIES =
		"transcribe:ListMedicalVocabularies";
	/** [Read] transcribe:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "transcribe:ListTagsForResource";
	/** [List] transcribe:ListTranscriptionJobs */
	static readonly LIST_TRANSCRIPTION_JOBS = "transcribe:ListTranscriptionJobs";
	/** [List] transcribe:ListVocabularies */
	static readonly LIST_VOCABULARIES = "transcribe:ListVocabularies";
	/** [List] transcribe:ListVocabularyFilters */
	static readonly LIST_VOCABULARY_FILTERS = "transcribe:ListVocabularyFilters";
	/** [Write] transcribe:StartCallAnalyticsJob */
	static readonly START_CALL_ANALYTICS_JOB = "transcribe:StartCallAnalyticsJob";
	/** [Write] transcribe:StartCallAnalyticsStreamTranscription */
	static readonly START_CALL_ANALYTICS_STREAM_TRANSCRIPTION =
		"transcribe:StartCallAnalyticsStreamTranscription";
	/** [Write] transcribe:StartCallAnalyticsStreamTranscriptionWebSocket */
	static readonly START_CALL_ANALYTICS_STREAM_TRANSCRIPTION_WEB_SOCKET =
		"transcribe:StartCallAnalyticsStreamTranscriptionWebSocket";
	/** [Write] transcribe:StartMedicalScribeJob */
	static readonly START_MEDICAL_SCRIBE_JOB = "transcribe:StartMedicalScribeJob";
	/** [Write] transcribe:StartMedicalScribeStream */
	static readonly START_MEDICAL_SCRIBE_STREAM =
		"transcribe:StartMedicalScribeStream";
	/** [Write] transcribe:StartMedicalStreamTranscription */
	static readonly START_MEDICAL_STREAM_TRANSCRIPTION =
		"transcribe:StartMedicalStreamTranscription";
	/** [Write] transcribe:StartMedicalStreamTranscriptionWebSocket */
	static readonly START_MEDICAL_STREAM_TRANSCRIPTION_WEB_SOCKET =
		"transcribe:StartMedicalStreamTranscriptionWebSocket";
	/** [Write] transcribe:StartMedicalTranscriptionJob */
	static readonly START_MEDICAL_TRANSCRIPTION_JOB =
		"transcribe:StartMedicalTranscriptionJob";
	/** [Write] transcribe:StartStreamTranscription */
	static readonly START_STREAM_TRANSCRIPTION =
		"transcribe:StartStreamTranscription";
	/** [Write] transcribe:StartStreamTranscriptionWebSocket */
	static readonly START_STREAM_TRANSCRIPTION_WEB_SOCKET =
		"transcribe:StartStreamTranscriptionWebSocket";
	/** [Write] transcribe:StartTranscriptionJob */
	static readonly START_TRANSCRIPTION_JOB = "transcribe:StartTranscriptionJob";
	/** [Tagging] transcribe:TagResource */
	static readonly TAG_RESOURCE = "transcribe:TagResource";
	/** [Tagging] transcribe:UntagResource */
	static readonly UNTAG_RESOURCE = "transcribe:UntagResource";
	/** [Write] transcribe:UpdateCallAnalyticsCategory */
	static readonly UPDATE_CALL_ANALYTICS_CATEGORY =
		"transcribe:UpdateCallAnalyticsCategory";
	/** [Write] transcribe:UpdateMedicalVocabulary */
	static readonly UPDATE_MEDICAL_VOCABULARY =
		"transcribe:UpdateMedicalVocabulary";
	/** [Write] transcribe:UpdateVocabulary */
	static readonly UPDATE_VOCABULARY = "transcribe:UpdateVocabulary";
	/** [Write] transcribe:UpdateVocabularyFilter */
	static readonly UPDATE_VOCABULARY_FILTER =
		"transcribe:UpdateVocabularyFilter";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TranscribeActions.DESCRIBE_LANGUAGE_MODEL,
		TranscribeActions.GET_CALL_ANALYTICS_CATEGORY,
		TranscribeActions.GET_CALL_ANALYTICS_JOB,
		TranscribeActions.GET_MEDICAL_SCRIBE_JOB,
		TranscribeActions.GET_MEDICAL_SCRIBE_STREAM,
		TranscribeActions.GET_MEDICAL_TRANSCRIPTION_JOB,
		TranscribeActions.GET_MEDICAL_VOCABULARY,
		TranscribeActions.GET_TRANSCRIPTION_JOB,
		TranscribeActions.GET_VOCABULARY,
		TranscribeActions.GET_VOCABULARY_FILTER,
		TranscribeActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		TranscribeActions.CREATE_CALL_ANALYTICS_CATEGORY,
		TranscribeActions.CREATE_LANGUAGE_MODEL,
		TranscribeActions.CREATE_MEDICAL_VOCABULARY,
		TranscribeActions.CREATE_VOCABULARY,
		TranscribeActions.CREATE_VOCABULARY_FILTER,
		TranscribeActions.DELETE_CALL_ANALYTICS_CATEGORY,
		TranscribeActions.DELETE_CALL_ANALYTICS_JOB,
		TranscribeActions.DELETE_LANGUAGE_MODEL,
		TranscribeActions.DELETE_MEDICAL_SCRIBE_JOB,
		TranscribeActions.DELETE_MEDICAL_TRANSCRIPTION_JOB,
		TranscribeActions.DELETE_MEDICAL_VOCABULARY,
		TranscribeActions.DELETE_TRANSCRIPTION_JOB,
		TranscribeActions.DELETE_VOCABULARY,
		TranscribeActions.DELETE_VOCABULARY_FILTER,
		TranscribeActions.START_CALL_ANALYTICS_JOB,
		TranscribeActions.START_CALL_ANALYTICS_STREAM_TRANSCRIPTION,
		TranscribeActions.START_CALL_ANALYTICS_STREAM_TRANSCRIPTION_WEB_SOCKET,
		TranscribeActions.START_MEDICAL_SCRIBE_JOB,
		TranscribeActions.START_MEDICAL_SCRIBE_STREAM,
		TranscribeActions.START_MEDICAL_STREAM_TRANSCRIPTION,
		TranscribeActions.START_MEDICAL_STREAM_TRANSCRIPTION_WEB_SOCKET,
		TranscribeActions.START_MEDICAL_TRANSCRIPTION_JOB,
		TranscribeActions.START_STREAM_TRANSCRIPTION,
		TranscribeActions.START_STREAM_TRANSCRIPTION_WEB_SOCKET,
		TranscribeActions.START_TRANSCRIPTION_JOB,
		TranscribeActions.UPDATE_CALL_ANALYTICS_CATEGORY,
		TranscribeActions.UPDATE_MEDICAL_VOCABULARY,
		TranscribeActions.UPDATE_VOCABULARY,
		TranscribeActions.UPDATE_VOCABULARY_FILTER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		TranscribeActions.LIST_CALL_ANALYTICS_CATEGORIES,
		TranscribeActions.LIST_CALL_ANALYTICS_JOBS,
		TranscribeActions.LIST_LANGUAGE_MODELS,
		TranscribeActions.LIST_MEDICAL_SCRIBE_JOBS,
		TranscribeActions.LIST_MEDICAL_TRANSCRIPTION_JOBS,
		TranscribeActions.LIST_MEDICAL_VOCABULARIES,
		TranscribeActions.LIST_TRANSCRIPTION_JOBS,
		TranscribeActions.LIST_VOCABULARIES,
		TranscribeActions.LIST_VOCABULARY_FILTERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		TranscribeActions.TAG_RESOURCE,
		TranscribeActions.UNTAG_RESOURCE,
	];
}

const CallanalyticscategoryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):analytics-category/(?<categoryName>[^:/?]+)$",
);
const CallanalyticsjobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):analytics/(?<jobName>[^:/?]+)$",
);
const LanguagemodelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):language-model/(?<modelName>[^:/?]+)$",
);
const MedicalscribejobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):medical-scribe-job/(?<jobName>[^:/?]+)$",
);
const MedicaltranscriptionjobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):medical-transcription-job/(?<jobName>[^:/?]+)$",
);
const MedicalvocabularyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):medical-vocabulary/(?<vocabularyName>[^:/?]+)$",
);
const TranscriptionjobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):transcription-job/(?<jobName>[^:/?]+)$",
);
const VocabularyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):vocabulary/(?<vocabularyName>[^:/?]+)$",
);
const VocabularyfilterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transcribe:(?<region>[^:]*):(?<account>[^:]*):vocabulary-filter/(?<vocabularyFilterName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for transcribe resources.
 */
export class TranscribeResources {
	/**
	 * Builds an ARN for the callanalyticscategory resource.
	 */
	static callanalyticscategory(props: {
		/** The CategoryName component of the ARN. */
		readonly categoryName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCallanalyticscategoryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		categoryName: string;
	} {
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
	static callanalyticsjob(props: {
		/** The JobName component of the ARN. */
		readonly jobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCallanalyticsjobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobName: string;
	} {
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
	static languagemodel(props: {
		/** The ModelName component of the ARN. */
		readonly modelName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseLanguagemodelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		modelName: string;
	} {
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
	static medicalscribejob(props: {
		/** The JobName component of the ARN. */
		readonly jobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseMedicalscribejobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobName: string;
	} {
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
	static medicaltranscriptionjob(props: {
		/** The JobName component of the ARN. */
		readonly jobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseMedicaltranscriptionjobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobName: string;
	} {
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
	static medicalvocabulary(props: {
		/** The VocabularyName component of the ARN. */
		readonly vocabularyName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseMedicalvocabularyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vocabularyName: string;
	} {
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
	static transcriptionjob(props: {
		/** The JobName component of the ARN. */
		readonly jobName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTranscriptionjobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobName: string;
	} {
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
	static vocabulary(props: {
		/** The VocabularyName component of the ARN. */
		readonly vocabularyName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseVocabularyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vocabularyName: string;
	} {
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
	static vocabularyfilter(props: {
		/** The VocabularyFilterName component of the ARN. */
		readonly vocabularyFilterName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseVocabularyfilterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vocabularyFilterName: string;
	} {
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
	static readonly CREATE_CALL_ANALYTICS_CATEGORY: string[] = [
		"transcribe:CreateCallAnalyticsCategory",
		"transcribe:TagResource",
	];
	/** IAM actions required for the CreateLanguageModel API call. */
	static readonly CREATE_LANGUAGE_MODEL: string[] = [
		"transcribe:CreateLanguageModel",
		"iam:PassRole",
		"transcribe:TagResource",
	];
	/** IAM actions required for the CreateMedicalVocabulary API call. */
	static readonly CREATE_MEDICAL_VOCABULARY: string[] = [
		"transcribe:CreateMedicalVocabulary",
		"transcribe:TagResource",
	];
	/** IAM actions required for the CreateVocabulary API call. */
	static readonly CREATE_VOCABULARY: string[] = [
		"transcribe:CreateVocabulary",
		"iam:PassRole",
		"transcribe:TagResource",
	];
	/** IAM actions required for the CreateVocabularyFilter API call. */
	static readonly CREATE_VOCABULARY_FILTER: string[] = [
		"transcribe:CreateVocabularyFilter",
		"iam:PassRole",
		"transcribe:TagResource",
	];
	/** IAM actions required for the DeleteCallAnalyticsCategory API call. */
	static readonly DELETE_CALL_ANALYTICS_CATEGORY: string[] = [
		"transcribe:DeleteCallAnalyticsCategory",
	];
	/** IAM actions required for the DeleteCallAnalyticsJob API call. */
	static readonly DELETE_CALL_ANALYTICS_JOB: string[] = [
		"transcribe:DeleteCallAnalyticsJob",
	];
	/** IAM actions required for the DeleteLanguageModel API call. */
	static readonly DELETE_LANGUAGE_MODEL: string[] = [
		"transcribe:DeleteLanguageModel",
	];
	/** IAM actions required for the DeleteMedicalScribeJob API call. */
	static readonly DELETE_MEDICAL_SCRIBE_JOB: string[] = [
		"transcribe:DeleteMedicalScribeJob",
	];
	/** IAM actions required for the DeleteMedicalTranscriptionJob API call. */
	static readonly DELETE_MEDICAL_TRANSCRIPTION_JOB: string[] = [
		"transcribe:DeleteMedicalTranscriptionJob",
	];
	/** IAM actions required for the DeleteMedicalVocabulary API call. */
	static readonly DELETE_MEDICAL_VOCABULARY: string[] = [
		"transcribe:DeleteMedicalVocabulary",
	];
	/** IAM actions required for the DeleteTranscriptionJob API call. */
	static readonly DELETE_TRANSCRIPTION_JOB: string[] = [
		"transcribe:DeleteTranscriptionJob",
	];
	/** IAM actions required for the DeleteVocabulary API call. */
	static readonly DELETE_VOCABULARY: string[] = ["transcribe:DeleteVocabulary"];
	/** IAM actions required for the DeleteVocabularyFilter API call. */
	static readonly DELETE_VOCABULARY_FILTER: string[] = [
		"transcribe:DeleteVocabularyFilter",
	];
	/** IAM actions required for the DescribeLanguageModel API call. */
	static readonly DESCRIBE_LANGUAGE_MODEL: string[] = [
		"transcribe:DescribeLanguageModel",
	];
	/** IAM actions required for the GetCallAnalyticsCategory API call. */
	static readonly GET_CALL_ANALYTICS_CATEGORY: string[] = [
		"transcribe:GetCallAnalyticsCategory",
	];
	/** IAM actions required for the GetCallAnalyticsJob API call. */
	static readonly GET_CALL_ANALYTICS_JOB: string[] = [
		"transcribe:GetCallAnalyticsJob",
	];
	/** IAM actions required for the GetMedicalScribeJob API call. */
	static readonly GET_MEDICAL_SCRIBE_JOB: string[] = [
		"transcribe:GetMedicalScribeJob",
	];
	/** IAM actions required for the GetMedicalTranscriptionJob API call. */
	static readonly GET_MEDICAL_TRANSCRIPTION_JOB: string[] = [
		"transcribe:GetMedicalTranscriptionJob",
	];
	/** IAM actions required for the GetMedicalVocabulary API call. */
	static readonly GET_MEDICAL_VOCABULARY: string[] = [
		"transcribe:GetMedicalVocabulary",
	];
	/** IAM actions required for the GetTranscriptionJob API call. */
	static readonly GET_TRANSCRIPTION_JOB: string[] = [
		"transcribe:GetTranscriptionJob",
	];
	/** IAM actions required for the GetVocabulary API call. */
	static readonly GET_VOCABULARY: string[] = ["transcribe:GetVocabulary"];
	/** IAM actions required for the GetVocabularyFilter API call. */
	static readonly GET_VOCABULARY_FILTER: string[] = [
		"transcribe:GetVocabularyFilter",
	];
	/** IAM actions required for the ListCallAnalyticsCategories API call. */
	static readonly LIST_CALL_ANALYTICS_CATEGORIES: string[] = [
		"transcribe:ListCallAnalyticsCategories",
	];
	/** IAM actions required for the ListCallAnalyticsJobs API call. */
	static readonly LIST_CALL_ANALYTICS_JOBS: string[] = [
		"transcribe:ListCallAnalyticsJobs",
	];
	/** IAM actions required for the ListLanguageModels API call. */
	static readonly LIST_LANGUAGE_MODELS: string[] = [
		"transcribe:ListLanguageModels",
	];
	/** IAM actions required for the ListMedicalScribeJobs API call. */
	static readonly LIST_MEDICAL_SCRIBE_JOBS: string[] = [
		"transcribe:ListMedicalScribeJobs",
	];
	/** IAM actions required for the ListMedicalTranscriptionJobs API call. */
	static readonly LIST_MEDICAL_TRANSCRIPTION_JOBS: string[] = [
		"transcribe:ListMedicalTranscriptionJobs",
	];
	/** IAM actions required for the ListMedicalVocabularies API call. */
	static readonly LIST_MEDICAL_VOCABULARIES: string[] = [
		"transcribe:ListMedicalVocabularies",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"transcribe:ListTagsForResource",
	];
	/** IAM actions required for the ListTranscriptionJobs API call. */
	static readonly LIST_TRANSCRIPTION_JOBS: string[] = [
		"transcribe:ListTranscriptionJobs",
	];
	/** IAM actions required for the ListVocabularies API call. */
	static readonly LIST_VOCABULARIES: string[] = ["transcribe:ListVocabularies"];
	/** IAM actions required for the ListVocabularyFilters API call. */
	static readonly LIST_VOCABULARY_FILTERS: string[] = [
		"transcribe:ListVocabularyFilters",
	];
	/** IAM actions required for the StartCallAnalyticsJob API call. */
	static readonly START_CALL_ANALYTICS_JOB: string[] = [
		"iam:PassRole",
		"transcribe:StartCallAnalyticsJob",
		"transcribe:TagResource",
	];
	/** IAM actions required for the StartMedicalScribeJob API call. */
	static readonly START_MEDICAL_SCRIBE_JOB: string[] = [
		"iam:PassRole",
		"transcribe:StartMedicalScribeJob",
		"transcribe:TagResource",
	];
	/** IAM actions required for the StartMedicalTranscriptionJob API call. */
	static readonly START_MEDICAL_TRANSCRIPTION_JOB: string[] = [
		"transcribe:StartMedicalTranscriptionJob",
		"transcribe:TagResource",
	];
	/** IAM actions required for the StartTranscriptionJob API call. */
	static readonly START_TRANSCRIPTION_JOB: string[] = [
		"iam:PassRole",
		"transcribe:StartTranscriptionJob",
		"transcribe:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["transcribe:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["transcribe:UntagResource"];
	/** IAM actions required for the UpdateCallAnalyticsCategory API call. */
	static readonly UPDATE_CALL_ANALYTICS_CATEGORY: string[] = [
		"transcribe:UpdateCallAnalyticsCategory",
	];
	/** IAM actions required for the UpdateMedicalVocabulary API call. */
	static readonly UPDATE_MEDICAL_VOCABULARY: string[] = [
		"transcribe:UpdateMedicalVocabulary",
	];
	/** IAM actions required for the UpdateVocabulary API call. */
	static readonly UPDATE_VOCABULARY: string[] = [
		"iam:PassRole",
		"transcribe:UpdateVocabulary",
	];
	/** IAM actions required for the UpdateVocabularyFilter API call. */
	static readonly UPDATE_VOCABULARY_FILTER: string[] = [
		"iam:PassRole",
		"transcribe:UpdateVocabularyFilter",
	];
}

/**
 * Condition key constants and builders for transcribe.
 */
export class TranscribeConditions {
	/** Condition keys applicable to the CreateCallAnalyticsCategory action. */
	static readonly CREATE_CALL_ANALYTICS_CATEGORY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLanguageModel action. */
	static readonly CREATE_LANGUAGE_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMedicalVocabulary action. */
	static readonly CREATE_MEDICAL_VOCABULARY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVocabulary action. */
	static readonly CREATE_VOCABULARY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVocabularyFilter action. */
	static readonly CREATE_VOCABULARY_FILTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCallAnalyticsJob action. */
	static readonly START_CALL_ANALYTICS_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"transcribe:OutputEncryptionKMSKeyId",
		"transcribe:OutputLocation",
	];
	/** Condition keys applicable to the StartMedicalScribeJob action. */
	static readonly START_MEDICAL_SCRIBE_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"transcribe:OutputBucketName",
		"transcribe:OutputEncryptionKMSKeyId",
	];
	/** Condition keys applicable to the StartMedicalTranscriptionJob action. */
	static readonly START_MEDICAL_TRANSCRIPTION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"transcribe:OutputBucketName",
		"transcribe:OutputEncryptionKMSKeyId",
		"transcribe:OutputKey",
	];
	/** Condition keys applicable to the StartTranscriptionJob action. */
	static readonly START_TRANSCRIPTION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"transcribe:OutputBucketName",
		"transcribe:OutputEncryptionKMSKeyId",
		"transcribe:OutputKey",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"transcribe:OutputBucketName",
		"transcribe:OutputEncryptionKMSKeyId",
		"transcribe:OutputKey",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
