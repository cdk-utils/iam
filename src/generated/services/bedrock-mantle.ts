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
	static readonly ArchiveProject = "bedrock-mantle:ArchiveProject";
	/** [Write] bedrock-mantle:AssociateCustomizedModel */
	static readonly AssociateCustomizedModel =
		"bedrock-mantle:AssociateCustomizedModel";
	/** [List] bedrock-mantle:CallWithBearerToken */
	static readonly CallWithBearerToken = "bedrock-mantle:CallWithBearerToken";
	/** [Write] bedrock-mantle:CancelFineTuningJob */
	static readonly CancelFineTuningJob = "bedrock-mantle:CancelFineTuningJob";
	/** [Write] bedrock-mantle:CancelInference */
	static readonly CancelInference = "bedrock-mantle:CancelInference";
	/** [Read] bedrock-mantle:CountTokens */
	static readonly CountTokens = "bedrock-mantle:CountTokens";
	/** [Write] bedrock-mantle:CreateCustomizedModel */
	static readonly CreateCustomizedModel =
		"bedrock-mantle:CreateCustomizedModel";
	/** [Write] bedrock-mantle:CreateFile */
	static readonly CreateFile = "bedrock-mantle:CreateFile";
	/** [Write] bedrock-mantle:CreateFineTuningJob */
	static readonly CreateFineTuningJob = "bedrock-mantle:CreateFineTuningJob";
	/** [Write] bedrock-mantle:CreateInference */
	static readonly CreateInference = "bedrock-mantle:CreateInference";
	/** [Write] bedrock-mantle:CreateProject */
	static readonly CreateProject = "bedrock-mantle:CreateProject";
	/** [Write] bedrock-mantle:CreateReservation */
	static readonly CreateReservation = "bedrock-mantle:CreateReservation";
	/** [Write] bedrock-mantle:DeleteCustomizedModel */
	static readonly DeleteCustomizedModel =
		"bedrock-mantle:DeleteCustomizedModel";
	/** [Write] bedrock-mantle:DeleteFile */
	static readonly DeleteFile = "bedrock-mantle:DeleteFile";
	/** [Write] bedrock-mantle:DeleteInference */
	static readonly DeleteInference = "bedrock-mantle:DeleteInference";
	/** [Write] bedrock-mantle:DeleteReservation */
	static readonly DeleteReservation = "bedrock-mantle:DeleteReservation";
	/** [Write] bedrock-mantle:DisassociateCustomizedModel */
	static readonly DisassociateCustomizedModel =
		"bedrock-mantle:DisassociateCustomizedModel";
	/** [Read] bedrock-mantle:GetAccountDataRetention */
	static readonly actionGetAccountDataRetention =
		"bedrock-mantle:GetAccountDataRetention";
	/** [Read] bedrock-mantle:GetCustomizedModel */
	static readonly actionGetCustomizedModel =
		"bedrock-mantle:GetCustomizedModel";
	/** [Read] bedrock-mantle:GetFile */
	static readonly actionGetFile = "bedrock-mantle:GetFile";
	/** [Read] bedrock-mantle:GetFineTuningJob */
	static readonly actionGetFineTuningJob = "bedrock-mantle:GetFineTuningJob";
	/** [Read] bedrock-mantle:GetInference */
	static readonly actionGetInference = "bedrock-mantle:GetInference";
	/** [Read] bedrock-mantle:GetModel */
	static readonly actionGetModel = "bedrock-mantle:GetModel";
	/** [Read] bedrock-mantle:GetProject */
	static readonly actionGetProject = "bedrock-mantle:GetProject";
	/** [Read] bedrock-mantle:GetReservation */
	static readonly actionGetReservation = "bedrock-mantle:GetReservation";
	/** [List] bedrock-mantle:ListCustomizedModelAssociations */
	static readonly ListCustomizedModelAssociations =
		"bedrock-mantle:ListCustomizedModelAssociations";
	/** [List] bedrock-mantle:ListCustomizedModels */
	static readonly ListCustomizedModels = "bedrock-mantle:ListCustomizedModels";
	/** [List] bedrock-mantle:ListFiles */
	static readonly ListFiles = "bedrock-mantle:ListFiles";
	/** [List] bedrock-mantle:ListFineTuningJobs */
	static readonly ListFineTuningJobs = "bedrock-mantle:ListFineTuningJobs";
	/** [List] bedrock-mantle:ListModels */
	static readonly ListModels = "bedrock-mantle:ListModels";
	/** [List] bedrock-mantle:ListProjects */
	static readonly ListProjects = "bedrock-mantle:ListProjects";
	/** [List] bedrock-mantle:ListReservations */
	static readonly ListReservations = "bedrock-mantle:ListReservations";
	/** [Read] bedrock-mantle:ListTagsForResource */
	static readonly ListTagsForResource = "bedrock-mantle:ListTagsForResource";
	/** [Write] bedrock-mantle:PutAccountDataRetention */
	static readonly PutAccountDataRetention =
		"bedrock-mantle:PutAccountDataRetention";
	/** [Tagging] bedrock-mantle:TagResource */
	static readonly TagResource = "bedrock-mantle:TagResource";
	/** [Tagging] bedrock-mantle:UntagResource */
	static readonly UntagResource = "bedrock-mantle:UntagResource";
	/** [Write] bedrock-mantle:UpdateProject */
	static readonly UpdateProject = "bedrock-mantle:UpdateProject";
	/** [Write] bedrock-mantle:UpdateReservation */
	static readonly UpdateReservation = "bedrock-mantle:UpdateReservation";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BedrockMantleActions.CountTokens,
		BedrockMantleActions.actionGetAccountDataRetention,
		BedrockMantleActions.actionGetCustomizedModel,
		BedrockMantleActions.actionGetFile,
		BedrockMantleActions.actionGetFineTuningJob,
		BedrockMantleActions.actionGetInference,
		BedrockMantleActions.actionGetModel,
		BedrockMantleActions.actionGetProject,
		BedrockMantleActions.actionGetReservation,
		BedrockMantleActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BedrockMantleActions.ArchiveProject,
		BedrockMantleActions.AssociateCustomizedModel,
		BedrockMantleActions.CancelFineTuningJob,
		BedrockMantleActions.CancelInference,
		BedrockMantleActions.CreateCustomizedModel,
		BedrockMantleActions.CreateFile,
		BedrockMantleActions.CreateFineTuningJob,
		BedrockMantleActions.CreateInference,
		BedrockMantleActions.CreateProject,
		BedrockMantleActions.CreateReservation,
		BedrockMantleActions.DeleteCustomizedModel,
		BedrockMantleActions.DeleteFile,
		BedrockMantleActions.DeleteInference,
		BedrockMantleActions.DeleteReservation,
		BedrockMantleActions.DisassociateCustomizedModel,
		BedrockMantleActions.PutAccountDataRetention,
		BedrockMantleActions.UpdateProject,
		BedrockMantleActions.UpdateReservation,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BedrockMantleActions.CallWithBearerToken,
		BedrockMantleActions.ListCustomizedModelAssociations,
		BedrockMantleActions.ListCustomizedModels,
		BedrockMantleActions.ListFiles,
		BedrockMantleActions.ListFineTuningJobs,
		BedrockMantleActions.ListModels,
		BedrockMantleActions.ListProjects,
		BedrockMantleActions.ListReservations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BedrockMantleActions.TagResource,
		BedrockMantleActions.UntagResource,
	];
}

/**
 * Properties for building a customized-model ARN.
 */
export interface BedrockMantleCustomizedModelArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a customized-model ARN.
 */
export interface BedrockMantleCustomizedModelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a project ARN.
 */
export interface BedrockMantleProjectArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a project ARN.
 */
export interface BedrockMantleProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a reservation ARN.
 */
export interface BedrockMantleReservationArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a reservation ARN.
 */
export interface BedrockMantleReservationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const CustomizedModelArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-mantle:(?<region>[^:]*):(?<account>[^:]*):customized-model\/(?<resourceId>[^:/?]+)$/;
const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-mantle:(?<region>[^:]*):(?<account>[^:]*):project\/(?<resourceId>[^:/?]+)$/;
const ReservationArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-mantle:(?<region>[^:]*):(?<account>[^:]*):reservation\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for bedrock-mantle resources.
 */
export class BedrockMantleResources {
	/**
	 * Builds an ARN for the customized-model resource.
	 */
	static customizedModel(props: BedrockMantleCustomizedModelArnProps): string {
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
	static parseCustomizedModelArn(
		arn: string,
	): BedrockMantleCustomizedModelArnComponents {
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
	static project(props: BedrockMantleProjectArnProps): string {
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
	static parseProjectArn(arn: string): BedrockMantleProjectArnComponents {
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
	static reservation(props: BedrockMantleReservationArnProps): string {
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
	static parseReservationArn(
		arn: string,
	): BedrockMantleReservationArnComponents {
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
	static readonly AssociateCustomizedModelConditionKeys: string[] = [
		"bedrock-mantle:CustomizedModelArn",
		"bedrock-mantle:ProjectArn",
	];
	/** Condition keys applicable to the CallWithBearerToken action. */
	static readonly CallWithBearerTokenConditionKeys: string[] = [
		"bedrock-mantle:BearerTokenType",
	];
	/** Condition keys applicable to the CancelFineTuningJob action. */
	static readonly CancelFineTuningJobConditionKeys: string[] = [
		"bedrock-mantle:FineTuningJob",
	];
	/** Condition keys applicable to the CountTokens action. */
	static readonly CountTokensConditionKeys: string[] = ["bedrock-mantle:Model"];
	/** Condition keys applicable to the CreateCustomizedModel action. */
	static readonly CreateCustomizedModelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFineTuningJob action. */
	static readonly CreateFineTuningJobConditionKeys: string[] = [
		"bedrock-mantle:Files",
		"bedrock-mantle:Model",
	];
	/** Condition keys applicable to the CreateInference action. */
	static readonly CreateInferenceConditionKeys: string[] = [
		"bedrock-mantle:Model",
		"bedrock-mantle:ServiceTier",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CreateProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"bedrock-mantle:DataRetentionMode",
	];
	/** Condition keys applicable to the CreateReservation action. */
	static readonly CreateReservationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"bedrock-mantle:ProjectArn",
		"bedrock-mantle:ReservationArn",
	];
	/** Condition keys applicable to the DeleteFile action. */
	static readonly DeleteFileConditionKeys: string[] = ["bedrock-mantle:Files"];
	/** Condition keys applicable to the DeleteReservation action. */
	static readonly DeleteReservationConditionKeys: string[] = [
		"bedrock-mantle:ProjectArn",
		"bedrock-mantle:ReservationArn",
	];
	/** Condition keys applicable to the DisassociateCustomizedModel action. */
	static readonly DisassociateCustomizedModelConditionKeys: string[] = [
		"bedrock-mantle:CustomizedModelArn",
		"bedrock-mantle:ProjectArn",
	];
	/** Condition keys applicable to the GetFile action. */
	static readonly actionGetFileConditionKeys: string[] = [
		"bedrock-mantle:Files",
	];
	/** Condition keys applicable to the GetFineTuningJob action. */
	static readonly actionGetFineTuningJobConditionKeys: string[] = [
		"bedrock-mantle:FineTuningJob",
	];
	/** Condition keys applicable to the PutAccountDataRetention action. */
	static readonly PutAccountDataRetentionConditionKeys: string[] = [
		"bedrock-mantle:DataRetentionMode",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateProject action. */
	static readonly UpdateProjectConditionKeys: string[] = [
		"bedrock-mantle:DataRetentionMode",
	];
	/** Condition keys applicable to the UpdateReservation action. */
	static readonly UpdateReservationConditionKeys: string[] = [
		"bedrock-mantle:ProjectArn",
		"bedrock-mantle:ReservationArn",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
