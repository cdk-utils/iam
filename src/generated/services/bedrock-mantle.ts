// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/bedrock-mantle.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the bedrock-mantle service.
 */
export class BedrockMantleActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "bedrock-mantle";

	/** [Write] bedrock-mantle:ArchiveProject */
	static readonly ARCHIVE_PROJECT = "bedrock-mantle:ArchiveProject";
	/** [Write] bedrock-mantle:AssociateCustomizedModel */
	static readonly ASSOCIATE_CUSTOMIZED_MODEL =
		"bedrock-mantle:AssociateCustomizedModel";
	/** [List] bedrock-mantle:CallWithBearerToken */
	static readonly CALL_WITH_BEARER_TOKEN = "bedrock-mantle:CallWithBearerToken";
	/** [Write] bedrock-mantle:CancelFineTuningJob */
	static readonly CANCEL_FINE_TUNING_JOB = "bedrock-mantle:CancelFineTuningJob";
	/** [Write] bedrock-mantle:CancelInference */
	static readonly CANCEL_INFERENCE = "bedrock-mantle:CancelInference";
	/** [Write] bedrock-mantle:CreateCustomizedModel */
	static readonly CREATE_CUSTOMIZED_MODEL =
		"bedrock-mantle:CreateCustomizedModel";
	/** [Write] bedrock-mantle:CreateFile */
	static readonly CREATE_FILE = "bedrock-mantle:CreateFile";
	/** [Write] bedrock-mantle:CreateFineTuningJob */
	static readonly CREATE_FINE_TUNING_JOB = "bedrock-mantle:CreateFineTuningJob";
	/** [Write] bedrock-mantle:CreateInference */
	static readonly CREATE_INFERENCE = "bedrock-mantle:CreateInference";
	/** [Write] bedrock-mantle:CreateProject */
	static readonly CREATE_PROJECT = "bedrock-mantle:CreateProject";
	/** [Write] bedrock-mantle:CreateReservation */
	static readonly CREATE_RESERVATION = "bedrock-mantle:CreateReservation";
	/** [Write] bedrock-mantle:DeleteCustomizedModel */
	static readonly DELETE_CUSTOMIZED_MODEL =
		"bedrock-mantle:DeleteCustomizedModel";
	/** [Write] bedrock-mantle:DeleteFile */
	static readonly DELETE_FILE = "bedrock-mantle:DeleteFile";
	/** [Write] bedrock-mantle:DeleteInference */
	static readonly DELETE_INFERENCE = "bedrock-mantle:DeleteInference";
	/** [Write] bedrock-mantle:DeleteReservation */
	static readonly DELETE_RESERVATION = "bedrock-mantle:DeleteReservation";
	/** [Write] bedrock-mantle:DisassociateCustomizedModel */
	static readonly DISASSOCIATE_CUSTOMIZED_MODEL =
		"bedrock-mantle:DisassociateCustomizedModel";
	/** [Read] bedrock-mantle:GetAccountDataRetention */
	static readonly GET_ACCOUNT_DATA_RETENTION =
		"bedrock-mantle:GetAccountDataRetention";
	/** [Read] bedrock-mantle:GetCustomizedModel */
	static readonly GET_CUSTOMIZED_MODEL = "bedrock-mantle:GetCustomizedModel";
	/** [Read] bedrock-mantle:GetFile */
	static readonly GET_FILE = "bedrock-mantle:GetFile";
	/** [Read] bedrock-mantle:GetFineTuningJob */
	static readonly GET_FINE_TUNING_JOB = "bedrock-mantle:GetFineTuningJob";
	/** [Read] bedrock-mantle:GetInference */
	static readonly GET_INFERENCE = "bedrock-mantle:GetInference";
	/** [Read] bedrock-mantle:GetModel */
	static readonly GET_MODEL = "bedrock-mantle:GetModel";
	/** [Read] bedrock-mantle:GetProject */
	static readonly GET_PROJECT = "bedrock-mantle:GetProject";
	/** [Read] bedrock-mantle:GetReservation */
	static readonly GET_RESERVATION = "bedrock-mantle:GetReservation";
	/** [List] bedrock-mantle:ListCustomizedModelAssociations */
	static readonly LIST_CUSTOMIZED_MODEL_ASSOCIATIONS =
		"bedrock-mantle:ListCustomizedModelAssociations";
	/** [List] bedrock-mantle:ListCustomizedModels */
	static readonly LIST_CUSTOMIZED_MODELS =
		"bedrock-mantle:ListCustomizedModels";
	/** [List] bedrock-mantle:ListFiles */
	static readonly LIST_FILES = "bedrock-mantle:ListFiles";
	/** [List] bedrock-mantle:ListFineTuningJobs */
	static readonly LIST_FINE_TUNING_JOBS = "bedrock-mantle:ListFineTuningJobs";
	/** [List] bedrock-mantle:ListModels */
	static readonly LIST_MODELS = "bedrock-mantle:ListModels";
	/** [List] bedrock-mantle:ListProjects */
	static readonly LIST_PROJECTS = "bedrock-mantle:ListProjects";
	/** [List] bedrock-mantle:ListReservations */
	static readonly LIST_RESERVATIONS = "bedrock-mantle:ListReservations";
	/** [Read] bedrock-mantle:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "bedrock-mantle:ListTagsForResource";
	/** [Write] bedrock-mantle:PutAccountDataRetention */
	static readonly PUT_ACCOUNT_DATA_RETENTION =
		"bedrock-mantle:PutAccountDataRetention";
	/** [Tagging] bedrock-mantle:TagResource */
	static readonly TAG_RESOURCE = "bedrock-mantle:TagResource";
	/** [Tagging] bedrock-mantle:UntagResource */
	static readonly UNTAG_RESOURCE = "bedrock-mantle:UntagResource";
	/** [Write] bedrock-mantle:UpdateProject */
	static readonly UPDATE_PROJECT = "bedrock-mantle:UpdateProject";
	/** [Write] bedrock-mantle:UpdateReservation */
	static readonly UPDATE_RESERVATION = "bedrock-mantle:UpdateReservation";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BedrockMantleActions.GET_ACCOUNT_DATA_RETENTION,
		BedrockMantleActions.GET_CUSTOMIZED_MODEL,
		BedrockMantleActions.GET_FILE,
		BedrockMantleActions.GET_FINE_TUNING_JOB,
		BedrockMantleActions.GET_INFERENCE,
		BedrockMantleActions.GET_MODEL,
		BedrockMantleActions.GET_PROJECT,
		BedrockMantleActions.GET_RESERVATION,
		BedrockMantleActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BedrockMantleActions.ARCHIVE_PROJECT,
		BedrockMantleActions.ASSOCIATE_CUSTOMIZED_MODEL,
		BedrockMantleActions.CANCEL_FINE_TUNING_JOB,
		BedrockMantleActions.CANCEL_INFERENCE,
		BedrockMantleActions.CREATE_CUSTOMIZED_MODEL,
		BedrockMantleActions.CREATE_FILE,
		BedrockMantleActions.CREATE_FINE_TUNING_JOB,
		BedrockMantleActions.CREATE_INFERENCE,
		BedrockMantleActions.CREATE_PROJECT,
		BedrockMantleActions.CREATE_RESERVATION,
		BedrockMantleActions.DELETE_CUSTOMIZED_MODEL,
		BedrockMantleActions.DELETE_FILE,
		BedrockMantleActions.DELETE_INFERENCE,
		BedrockMantleActions.DELETE_RESERVATION,
		BedrockMantleActions.DISASSOCIATE_CUSTOMIZED_MODEL,
		BedrockMantleActions.PUT_ACCOUNT_DATA_RETENTION,
		BedrockMantleActions.UPDATE_PROJECT,
		BedrockMantleActions.UPDATE_RESERVATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		BedrockMantleActions.CALL_WITH_BEARER_TOKEN,
		BedrockMantleActions.LIST_CUSTOMIZED_MODEL_ASSOCIATIONS,
		BedrockMantleActions.LIST_CUSTOMIZED_MODELS,
		BedrockMantleActions.LIST_FILES,
		BedrockMantleActions.LIST_FINE_TUNING_JOBS,
		BedrockMantleActions.LIST_MODELS,
		BedrockMantleActions.LIST_PROJECTS,
		BedrockMantleActions.LIST_RESERVATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BedrockMantleActions.TAG_RESOURCE,
		BedrockMantleActions.UNTAG_RESOURCE,
	];
}

const CustomizedModelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock-mantle:(?<region>[^:]*):(?<account>[^:]*):customized-model/(?<resourceId>[^:/?]+)$",
);
const ProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock-mantle:(?<region>[^:]*):(?<account>[^:]*):project/(?<resourceId>[^:/?]+)$",
);
const ReservationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bedrock-mantle:(?<region>[^:]*):(?<account>[^:]*):reservation/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for bedrock-mantle resources.
 */
export class BedrockMantleResources {
	/**
	 * Builds an ARN for the customized-model resource.
	 */
	static customizedModel(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-mantle:${props.region ?? "*"}:${props.account ?? "*"}:customized-model/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the customized-model resource.
	 */
	static isValidCustomizedModelArn(arn: string): boolean {
		return CustomizedModelArnRegex.test(arn);
	}

	/**
	 * Parses a customized-model ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomizedModelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = CustomizedModelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid customized-model ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-mantle:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the project resource.
	 */
	static isValidProjectArn(arn: string): boolean {
		return ProjectArnRegex.test(arn);
	}

	/**
	 * Parses a project ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the reservation resource.
	 */
	static reservation(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bedrock-mantle:${props.region ?? "*"}:${props.account ?? "*"}:reservation/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the reservation resource.
	 */
	static isValidReservationArn(arn: string): boolean {
		return ReservationArnRegex.test(arn);
	}

	/**
	 * Parses a reservation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReservationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ReservationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid reservation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * Condition key constants and builders for bedrock-mantle.
 */
export class BedrockMantleConditions {
	/** Condition keys applicable to the AssociateCustomizedModel action. */
	static readonly ASSOCIATE_CUSTOMIZED_MODEL_CONDITION_KEYS: string[] = [
		"bedrock-mantle:CustomizedModelArn",
		"bedrock-mantle:ProjectArn",
	];
	/** Condition keys applicable to the CallWithBearerToken action. */
	static readonly CALL_WITH_BEARER_TOKEN_CONDITION_KEYS: string[] = [
		"bedrock-mantle:BearerTokenType",
	];
	/** Condition keys applicable to the CancelFineTuningJob action. */
	static readonly CANCEL_FINE_TUNING_JOB_CONDITION_KEYS: string[] = [
		"bedrock-mantle:FineTuningJob",
	];
	/** Condition keys applicable to the CreateCustomizedModel action. */
	static readonly CREATE_CUSTOMIZED_MODEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFineTuningJob action. */
	static readonly CREATE_FINE_TUNING_JOB_CONDITION_KEYS: string[] = [
		"bedrock-mantle:Files",
		"bedrock-mantle:Model",
	];
	/** Condition keys applicable to the CreateInference action. */
	static readonly CREATE_INFERENCE_CONDITION_KEYS: string[] = [
		"bedrock-mantle:Model",
		"bedrock-mantle:ServiceTier",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CREATE_PROJECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"bedrock-mantle:DataRetentionMode",
	];
	/** Condition keys applicable to the CreateReservation action. */
	static readonly CREATE_RESERVATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"bedrock-mantle:ProjectArn",
		"bedrock-mantle:ReservationArn",
	];
	/** Condition keys applicable to the DeleteFile action. */
	static readonly DELETE_FILE_CONDITION_KEYS: string[] = [
		"bedrock-mantle:Files",
	];
	/** Condition keys applicable to the DeleteReservation action. */
	static readonly DELETE_RESERVATION_CONDITION_KEYS: string[] = [
		"bedrock-mantle:ProjectArn",
		"bedrock-mantle:ReservationArn",
	];
	/** Condition keys applicable to the DisassociateCustomizedModel action. */
	static readonly DISASSOCIATE_CUSTOMIZED_MODEL_CONDITION_KEYS: string[] = [
		"bedrock-mantle:CustomizedModelArn",
		"bedrock-mantle:ProjectArn",
	];
	/** Condition keys applicable to the GetFile action. */
	static readonly GET_FILE_CONDITION_KEYS: string[] = ["bedrock-mantle:Files"];
	/** Condition keys applicable to the GetFineTuningJob action. */
	static readonly GET_FINE_TUNING_JOB_CONDITION_KEYS: string[] = [
		"bedrock-mantle:FineTuningJob",
	];
	/** Condition keys applicable to the PutAccountDataRetention action. */
	static readonly PUT_ACCOUNT_DATA_RETENTION_CONDITION_KEYS: string[] = [
		"bedrock-mantle:DataRetentionMode",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateProject action. */
	static readonly UPDATE_PROJECT_CONDITION_KEYS: string[] = [
		"bedrock-mantle:DataRetentionMode",
	];
	/** Condition keys applicable to the UpdateReservation action. */
	static readonly UPDATE_RESERVATION_CONDITION_KEYS: string[] = [
		"bedrock-mantle:ProjectArn",
		"bedrock-mantle:ReservationArn",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: bedrock-mantle:BearerTokenType (String) */
	static readonly BEARER_TOKEN_TYPE = "bedrock-mantle:BearerTokenType";
	/** Condition key: bedrock-mantle:CustomizedModelArn (String) */
	static readonly CUSTOMIZED_MODEL_ARN = "bedrock-mantle:CustomizedModelArn";
	/** Condition key: bedrock-mantle:DataRetentionMode (String) */
	static readonly DATA_RETENTION_MODE = "bedrock-mantle:DataRetentionMode";
	/** Condition key: bedrock-mantle:Files (ArrayOfString) */
	static readonly FILES = "bedrock-mantle:Files";
	/** Condition key: bedrock-mantle:FineTuningJob (String) */
	static readonly FINE_TUNING_JOB = "bedrock-mantle:FineTuningJob";
	/** Condition key: bedrock-mantle:Model (String) */
	static readonly MODEL = "bedrock-mantle:Model";
	/** Condition key: bedrock-mantle:ProjectArn (String) */
	static readonly PROJECT_ARN = "bedrock-mantle:ProjectArn";
	/** Condition key: bedrock-mantle:ReservationArn (String) */
	static readonly RESERVATION_ARN = "bedrock-mantle:ReservationArn";
	/** Condition key: bedrock-mantle:ServiceTier (String) */
	static readonly SERVICE_TIER = "bedrock-mantle:ServiceTier";

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
	 * Generates a condition block for `bedrock-mantle:BearerTokenType`.
	 */
	static bearerTokenType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-mantle:BearerTokenType": value } };
	}

	/**
	 * Generates a condition block for `bedrock-mantle:CustomizedModelArn`.
	 */
	static customizedModelARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-mantle:CustomizedModelArn": value } };
	}

	/**
	 * Generates a condition block for `bedrock-mantle:DataRetentionMode`.
	 */
	static dataRetentionMode(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-mantle:DataRetentionMode": value } };
	}

	/**
	 * Generates a condition block for `bedrock-mantle:Files`.
	 */
	static files(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "bedrock-mantle:Files": values } };
	}

	/**
	 * Generates a condition block for `bedrock-mantle:FineTuningJob`.
	 */
	static fineTuningJob(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-mantle:FineTuningJob": value } };
	}

	/**
	 * Generates a condition block for `bedrock-mantle:Model`.
	 */
	static model(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-mantle:Model": value } };
	}

	/**
	 * Generates a condition block for `bedrock-mantle:ProjectArn`.
	 */
	static projectARN(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-mantle:ProjectArn": value } };
	}

	/**
	 * Generates a condition block for `bedrock-mantle:ReservationArn`.
	 */
	static reservationARN(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-mantle:ReservationArn": value } };
	}

	/**
	 * Generates a condition block for `bedrock-mantle:ServiceTier`.
	 */
	static serviceTier(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "bedrock-mantle:ServiceTier": value } };
	}
}
