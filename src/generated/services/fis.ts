// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/fis.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the fis service.
 */
export class FisActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "fis";

	/** [Write] fis:CreateExperimentTemplate */
	static readonly CreateExperimentTemplate = "fis:CreateExperimentTemplate";
	/** [Write] fis:CreateTargetAccountConfiguration */
	static readonly CreateTargetAccountConfiguration =
		"fis:CreateTargetAccountConfiguration";
	/** [Write] fis:DeleteExperimentTemplate */
	static readonly DeleteExperimentTemplate = "fis:DeleteExperimentTemplate";
	/** [Write] fis:DeleteTargetAccountConfiguration */
	static readonly DeleteTargetAccountConfiguration =
		"fis:DeleteTargetAccountConfiguration";
	/** [Read] fis:GetAction */
	static readonly actionGetAction = "fis:GetAction";
	/** [Read] fis:GetExperiment */
	static readonly actionGetExperiment = "fis:GetExperiment";
	/** [Read] fis:GetExperimentTargetAccountConfiguration */
	static readonly actionGetExperimentTargetAccountConfiguration =
		"fis:GetExperimentTargetAccountConfiguration";
	/** [Read] fis:GetExperimentTemplate */
	static readonly actionGetExperimentTemplate = "fis:GetExperimentTemplate";
	/** [Read] fis:GetSafetyLever */
	static readonly actionGetSafetyLever = "fis:GetSafetyLever";
	/** [Read] fis:GetTargetAccountConfiguration */
	static readonly actionGetTargetAccountConfiguration =
		"fis:GetTargetAccountConfiguration";
	/** [Read] fis:GetTargetResourceType */
	static readonly actionGetTargetResourceType = "fis:GetTargetResourceType";
	/** [Write] fis:InjectApiInternalError */
	static readonly InjectApiInternalError = "fis:InjectApiInternalError";
	/** [Write] fis:InjectApiThrottleError */
	static readonly InjectApiThrottleError = "fis:InjectApiThrottleError";
	/** [Write] fis:InjectApiUnavailableError */
	static readonly InjectApiUnavailableError = "fis:InjectApiUnavailableError";
	/** [List] fis:ListActions */
	static readonly ListActions = "fis:ListActions";
	/** [List] fis:ListExperimentResolvedTargets */
	static readonly ListExperimentResolvedTargets =
		"fis:ListExperimentResolvedTargets";
	/** [List] fis:ListExperimentTargetAccountConfigurations */
	static readonly ListExperimentTargetAccountConfigurations =
		"fis:ListExperimentTargetAccountConfigurations";
	/** [List] fis:ListExperimentTemplates */
	static readonly ListExperimentTemplates = "fis:ListExperimentTemplates";
	/** [List] fis:ListExperiments */
	static readonly ListExperiments = "fis:ListExperiments";
	/** [Read] fis:ListTagsForResource */
	static readonly ListTagsForResource = "fis:ListTagsForResource";
	/** [List] fis:ListTargetAccountConfigurations */
	static readonly ListTargetAccountConfigurations =
		"fis:ListTargetAccountConfigurations";
	/** [List] fis:ListTargetResourceTypes */
	static readonly ListTargetResourceTypes = "fis:ListTargetResourceTypes";
	/** [Write] fis:StartExperiment */
	static readonly StartExperiment = "fis:StartExperiment";
	/** [Write] fis:StopExperiment */
	static readonly StopExperiment = "fis:StopExperiment";
	/** [Tagging] fis:TagResource */
	static readonly TagResource = "fis:TagResource";
	/** [Tagging] fis:UntagResource */
	static readonly UntagResource = "fis:UntagResource";
	/** [Write] fis:UpdateExperimentTemplate */
	static readonly UpdateExperimentTemplate = "fis:UpdateExperimentTemplate";
	/** [Write] fis:UpdateSafetyLeverState */
	static readonly UpdateSafetyLeverState = "fis:UpdateSafetyLeverState";
	/** [Write] fis:UpdateTargetAccountConfiguration */
	static readonly UpdateTargetAccountConfiguration =
		"fis:UpdateTargetAccountConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		FisActions.actionGetAction,
		FisActions.actionGetExperiment,
		FisActions.actionGetExperimentTargetAccountConfiguration,
		FisActions.actionGetExperimentTemplate,
		FisActions.actionGetSafetyLever,
		FisActions.actionGetTargetAccountConfiguration,
		FisActions.actionGetTargetResourceType,
		FisActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		FisActions.CreateExperimentTemplate,
		FisActions.CreateTargetAccountConfiguration,
		FisActions.DeleteExperimentTemplate,
		FisActions.DeleteTargetAccountConfiguration,
		FisActions.InjectApiInternalError,
		FisActions.InjectApiThrottleError,
		FisActions.InjectApiUnavailableError,
		FisActions.StartExperiment,
		FisActions.StopExperiment,
		FisActions.UpdateExperimentTemplate,
		FisActions.UpdateSafetyLeverState,
		FisActions.UpdateTargetAccountConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		FisActions.ListActions,
		FisActions.ListExperimentResolvedTargets,
		FisActions.ListExperimentTargetAccountConfigurations,
		FisActions.ListExperimentTemplates,
		FisActions.ListExperiments,
		FisActions.ListTargetAccountConfigurations,
		FisActions.ListTargetResourceTypes,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		FisActions.TagResource,
		FisActions.UntagResource,
	];
}

/**
 * Properties for building a action ARN.
 */
export interface FisActionArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a action ARN.
 */
export interface FisActionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a experiment ARN.
 */
export interface FisExperimentArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a experiment ARN.
 */
export interface FisExperimentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a experiment-template ARN.
 */
export interface FisExperimentTemplateArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a experiment-template ARN.
 */
export interface FisExperimentTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a safety-lever ARN.
 */
export interface FisSafetyLeverArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a safety-lever ARN.
 */
export interface FisSafetyLeverArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

const ActionArnRegex =
	/^arn:(?<partition>[^:]+):fis:(?<region>[^:]*):(?<account>[^:]*):action\/(?<id>[^:/?]+)$/;
const ExperimentArnRegex =
	/^arn:(?<partition>[^:]+):fis:(?<region>[^:]*):(?<account>[^:]*):experiment\/(?<id>[^:/?]+)$/;
const ExperimentTemplateArnRegex =
	/^arn:(?<partition>[^:]+):fis:(?<region>[^:]*):(?<account>[^:]*):experiment-template\/(?<id>[^:/?]+)$/;
const SafetyLeverArnRegex =
	/^arn:(?<partition>[^:]+):fis:(?<region>[^:]*):(?<account>[^:]*):safety-lever\/(?<id>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for fis resources.
 */
export class FisResources {
	/**
	 * Builds an ARN for the action resource.
	 */
	static action(props: FisActionArnProps): string {
		return `arn:${props.partition ?? "aws"}:fis:${props.region ?? "*"}:${props.account ?? "*"}:action/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the action resource.
	 */
	static isValidActionArn(arn: string): boolean {
		return ActionArnRegex.test(arn);
	}

	/**
	 * Parses a action ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseActionArn(arn: string): FisActionArnComponents {
		const match = ActionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid action ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the experiment resource.
	 */
	static experiment(props: FisExperimentArnProps): string {
		return `arn:${props.partition ?? "aws"}:fis:${props.region ?? "*"}:${props.account ?? "*"}:experiment/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the experiment resource.
	 */
	static isValidExperimentArn(arn: string): boolean {
		return ExperimentArnRegex.test(arn);
	}

	/**
	 * Parses a experiment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExperimentArn(arn: string): FisExperimentArnComponents {
		const match = ExperimentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid experiment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the experiment-template resource.
	 */
	static experimentTemplate(props: FisExperimentTemplateArnProps): string {
		return `arn:${props.partition ?? "aws"}:fis:${props.region ?? "*"}:${props.account ?? "*"}:experiment-template/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the experiment-template resource.
	 */
	static isValidExperimentTemplateArn(arn: string): boolean {
		return ExperimentTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a experiment-template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExperimentTemplateArn(
		arn: string,
	): FisExperimentTemplateArnComponents {
		const match = ExperimentTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid experiment-template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the safety-lever resource.
	 */
	static safetyLever(props: FisSafetyLeverArnProps): string {
		return `arn:${props.partition ?? "aws"}:fis:${props.region ?? "*"}:${props.account ?? "*"}:safety-lever/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the safety-lever resource.
	 */
	static isValidSafetyLeverArn(arn: string): boolean {
		return SafetyLeverArnRegex.test(arn);
	}

	/**
	 * Parses a safety-lever ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSafetyLeverArn(arn: string): FisSafetyLeverArnComponents {
		const match = SafetyLeverArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid safety-lever ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}
}

/**
 * API operation to required IAM actions mapping for fis.
 */
export class FisOperations {
	/** IAM actions required for the CreateExperimentTemplate API call. */
	static readonly CreateExperimentTemplate: string[] = [
		"fis:CreateExperimentTemplate",
		"iam:PassRole",
		"fis:TagResource",
	];
	/** IAM actions required for the CreateTargetAccountConfiguration API call. */
	static readonly CreateTargetAccountConfiguration: string[] = [
		"fis:CreateTargetAccountConfiguration",
	];
	/** IAM actions required for the DeleteExperimentTemplate API call. */
	static readonly DeleteExperimentTemplate: string[] = [
		"fis:DeleteExperimentTemplate",
	];
	/** IAM actions required for the DeleteTargetAccountConfiguration API call. */
	static readonly DeleteTargetAccountConfiguration: string[] = [
		"fis:DeleteTargetAccountConfiguration",
	];
	/** IAM actions required for the GetAction API call. */
	static readonly opGetAction: string[] = ["fis:GetAction"];
	/** IAM actions required for the GetExperiment API call. */
	static readonly opGetExperiment: string[] = ["fis:GetExperiment"];
	/** IAM actions required for the GetExperimentTargetAccountConfiguration API call. */
	static readonly opGetExperimentTargetAccountConfiguration: string[] = [
		"fis:GetExperimentTargetAccountConfiguration",
	];
	/** IAM actions required for the GetExperimentTemplate API call. */
	static readonly opGetExperimentTemplate: string[] = [
		"fis:GetExperimentTemplate",
	];
	/** IAM actions required for the GetSafetyLever API call. */
	static readonly opGetSafetyLever: string[] = ["fis:GetSafetyLever"];
	/** IAM actions required for the GetTargetAccountConfiguration API call. */
	static readonly opGetTargetAccountConfiguration: string[] = [
		"fis:GetTargetAccountConfiguration",
	];
	/** IAM actions required for the GetTargetResourceType API call. */
	static readonly opGetTargetResourceType: string[] = [
		"fis:GetTargetResourceType",
	];
	/** IAM actions required for the ListActions API call. */
	static readonly ListActions: string[] = ["fis:ListActions"];
	/** IAM actions required for the ListExperimentResolvedTargets API call. */
	static readonly ListExperimentResolvedTargets: string[] = [
		"fis:ListExperimentResolvedTargets",
	];
	/** IAM actions required for the ListExperimentTargetAccountConfigurations API call. */
	static readonly ListExperimentTargetAccountConfigurations: string[] = [
		"fis:ListExperimentTargetAccountConfigurations",
	];
	/** IAM actions required for the ListExperimentTemplates API call. */
	static readonly ListExperimentTemplates: string[] = [
		"fis:ListExperimentTemplates",
	];
	/** IAM actions required for the ListExperiments API call. */
	static readonly ListExperiments: string[] = ["fis:ListExperiments"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["fis:ListTagsForResource"];
	/** IAM actions required for the ListTargetAccountConfigurations API call. */
	static readonly ListTargetAccountConfigurations: string[] = [
		"fis:ListTargetAccountConfigurations",
	];
	/** IAM actions required for the ListTargetResourceTypes API call. */
	static readonly ListTargetResourceTypes: string[] = [
		"fis:ListTargetResourceTypes",
	];
	/** IAM actions required for the StartExperiment API call. */
	static readonly StartExperiment: string[] = [
		"fis:StartExperiment",
		"fis:TagResource",
	];
	/** IAM actions required for the StopExperiment API call. */
	static readonly StopExperiment: string[] = ["fis:StopExperiment"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["fis:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["fis:UntagResource"];
	/** IAM actions required for the UpdateExperimentTemplate API call. */
	static readonly UpdateExperimentTemplate: string[] = [
		"iam:PassRole",
		"fis:UpdateExperimentTemplate",
	];
	/** IAM actions required for the UpdateSafetyLeverState API call. */
	static readonly UpdateSafetyLeverState: string[] = [
		"fis:UpdateSafetyLeverState",
	];
	/** IAM actions required for the UpdateTargetAccountConfiguration API call. */
	static readonly UpdateTargetAccountConfiguration: string[] = [
		"fis:UpdateTargetAccountConfiguration",
	];
}

/**
 * Condition key constants and builders for fis.
 */
export class FisConditions {
	/** Condition keys applicable to the CreateExperimentTemplate action. */
	static readonly CreateExperimentTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetAction action. */
	static readonly actionGetActionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExperiment action. */
	static readonly actionGetExperimentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExperimentTemplate action. */
	static readonly actionGetExperimentTemplateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the InjectApiInternalError action. */
	static readonly InjectApiInternalErrorConditionKeys: string[] = [
		"fis:Operations",
		"fis:Percentage",
		"fis:Service",
		"fis:Targets",
	];
	/** Condition keys applicable to the InjectApiThrottleError action. */
	static readonly InjectApiThrottleErrorConditionKeys: string[] = [
		"fis:Operations",
		"fis:Percentage",
		"fis:Service",
		"fis:Targets",
	];
	/** Condition keys applicable to the InjectApiUnavailableError action. */
	static readonly InjectApiUnavailableErrorConditionKeys: string[] = [
		"fis:Operations",
		"fis:Percentage",
		"fis:Service",
		"fis:Targets",
	];
	/** Condition keys applicable to the StartExperiment action. */
	static readonly StartExperimentConditionKeys: string[] = [
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
	/** Condition keys applicable to the UpdateExperimentTemplate action. */
	static readonly UpdateExperimentTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: fis:Operations (ArrayOfString) */
	static readonly OPERATIONS = "fis:Operations";
	/** Condition key: fis:Percentage (Numeric) */
	static readonly PERCENTAGE = "fis:Percentage";
	/** Condition key: fis:Service (String) */
	static readonly SERVICE = "fis:Service";
	/** Condition key: fis:Targets (ArrayOfString) */
	static readonly TARGETS = "fis:Targets";

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
	 * Generates a condition block for `fis:Operations`.
	 */
	static operations(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "fis:Operations": values } };
	}

	/**
	 * Generates a condition block for `fis:Percentage`.
	 */
	static percentage(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "fis:Percentage": value } };
	}

	/**
	 * Generates a condition block for `fis:Service`.
	 */
	static service(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "fis:Service": value } };
	}

	/**
	 * Generates a condition block for `fis:Targets`.
	 */
	static targets(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "fis:Targets": values } };
	}
}
