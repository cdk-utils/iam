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
	static readonly CREATE_EXPERIMENT_TEMPLATE = "fis:CreateExperimentTemplate";
	/** [Write] fis:CreateTargetAccountConfiguration */
	static readonly CREATE_TARGET_ACCOUNT_CONFIGURATION =
		"fis:CreateTargetAccountConfiguration";
	/** [Write] fis:DeleteExperimentTemplate */
	static readonly DELETE_EXPERIMENT_TEMPLATE = "fis:DeleteExperimentTemplate";
	/** [Write] fis:DeleteTargetAccountConfiguration */
	static readonly DELETE_TARGET_ACCOUNT_CONFIGURATION =
		"fis:DeleteTargetAccountConfiguration";
	/** [Read] fis:GetAction */
	static readonly GET_ACTION = "fis:GetAction";
	/** [Read] fis:GetExperiment */
	static readonly GET_EXPERIMENT = "fis:GetExperiment";
	/** [Read] fis:GetExperimentTargetAccountConfiguration */
	static readonly GET_EXPERIMENT_TARGET_ACCOUNT_CONFIGURATION =
		"fis:GetExperimentTargetAccountConfiguration";
	/** [Read] fis:GetExperimentTemplate */
	static readonly GET_EXPERIMENT_TEMPLATE = "fis:GetExperimentTemplate";
	/** [Read] fis:GetSafetyLever */
	static readonly GET_SAFETY_LEVER = "fis:GetSafetyLever";
	/** [Read] fis:GetTargetAccountConfiguration */
	static readonly GET_TARGET_ACCOUNT_CONFIGURATION =
		"fis:GetTargetAccountConfiguration";
	/** [Read] fis:GetTargetResourceType */
	static readonly GET_TARGET_RESOURCE_TYPE = "fis:GetTargetResourceType";
	/** [Write] fis:InjectApiInternalError */
	static readonly INJECT_API_INTERNAL_ERROR = "fis:InjectApiInternalError";
	/** [Write] fis:InjectApiThrottleError */
	static readonly INJECT_API_THROTTLE_ERROR = "fis:InjectApiThrottleError";
	/** [Write] fis:InjectApiUnavailableError */
	static readonly INJECT_API_UNAVAILABLE_ERROR =
		"fis:InjectApiUnavailableError";
	/** [List] fis:ListActions */
	static readonly LIST_ACTIONS = "fis:ListActions";
	/** [List] fis:ListExperimentResolvedTargets */
	static readonly LIST_EXPERIMENT_RESOLVED_TARGETS =
		"fis:ListExperimentResolvedTargets";
	/** [List] fis:ListExperimentTargetAccountConfigurations */
	static readonly LIST_EXPERIMENT_TARGET_ACCOUNT_CONFIGURATIONS =
		"fis:ListExperimentTargetAccountConfigurations";
	/** [List] fis:ListExperimentTemplates */
	static readonly LIST_EXPERIMENT_TEMPLATES = "fis:ListExperimentTemplates";
	/** [List] fis:ListExperiments */
	static readonly LIST_EXPERIMENTS = "fis:ListExperiments";
	/** [Read] fis:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "fis:ListTagsForResource";
	/** [List] fis:ListTargetAccountConfigurations */
	static readonly LIST_TARGET_ACCOUNT_CONFIGURATIONS =
		"fis:ListTargetAccountConfigurations";
	/** [List] fis:ListTargetResourceTypes */
	static readonly LIST_TARGET_RESOURCE_TYPES = "fis:ListTargetResourceTypes";
	/** [Write] fis:StartExperiment */
	static readonly START_EXPERIMENT = "fis:StartExperiment";
	/** [Write] fis:StopExperiment */
	static readonly STOP_EXPERIMENT = "fis:StopExperiment";
	/** [Tagging] fis:TagResource */
	static readonly TAG_RESOURCE = "fis:TagResource";
	/** [Tagging] fis:UntagResource */
	static readonly UNTAG_RESOURCE = "fis:UntagResource";
	/** [Write] fis:UpdateExperimentTemplate */
	static readonly UPDATE_EXPERIMENT_TEMPLATE = "fis:UpdateExperimentTemplate";
	/** [Write] fis:UpdateSafetyLeverState */
	static readonly UPDATE_SAFETY_LEVER_STATE = "fis:UpdateSafetyLeverState";
	/** [Write] fis:UpdateTargetAccountConfiguration */
	static readonly UPDATE_TARGET_ACCOUNT_CONFIGURATION =
		"fis:UpdateTargetAccountConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		FisActions.GET_ACTION,
		FisActions.GET_EXPERIMENT,
		FisActions.GET_EXPERIMENT_TARGET_ACCOUNT_CONFIGURATION,
		FisActions.GET_EXPERIMENT_TEMPLATE,
		FisActions.GET_SAFETY_LEVER,
		FisActions.GET_TARGET_ACCOUNT_CONFIGURATION,
		FisActions.GET_TARGET_RESOURCE_TYPE,
		FisActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		FisActions.CREATE_EXPERIMENT_TEMPLATE,
		FisActions.CREATE_TARGET_ACCOUNT_CONFIGURATION,
		FisActions.DELETE_EXPERIMENT_TEMPLATE,
		FisActions.DELETE_TARGET_ACCOUNT_CONFIGURATION,
		FisActions.INJECT_API_INTERNAL_ERROR,
		FisActions.INJECT_API_THROTTLE_ERROR,
		FisActions.INJECT_API_UNAVAILABLE_ERROR,
		FisActions.START_EXPERIMENT,
		FisActions.STOP_EXPERIMENT,
		FisActions.UPDATE_EXPERIMENT_TEMPLATE,
		FisActions.UPDATE_SAFETY_LEVER_STATE,
		FisActions.UPDATE_TARGET_ACCOUNT_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		FisActions.LIST_ACTIONS,
		FisActions.LIST_EXPERIMENT_RESOLVED_TARGETS,
		FisActions.LIST_EXPERIMENT_TARGET_ACCOUNT_CONFIGURATIONS,
		FisActions.LIST_EXPERIMENT_TEMPLATES,
		FisActions.LIST_EXPERIMENTS,
		FisActions.LIST_TARGET_ACCOUNT_CONFIGURATIONS,
		FisActions.LIST_TARGET_RESOURCE_TYPES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		FisActions.TAG_RESOURCE,
		FisActions.UNTAG_RESOURCE,
	];
}

const ActionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fis:(?<region>[^:]*):(?<account>[^:]*):action/(?<id>[^:/?]+)$",
);
const ExperimentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fis:(?<region>[^:]*):(?<account>[^:]*):experiment/(?<id>[^:/?]+)$",
);
const ExperimentTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fis:(?<region>[^:]*):(?<account>[^:]*):experiment-template/(?<id>[^:/?]+)$",
);
const SafetyLeverArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fis:(?<region>[^:]*):(?<account>[^:]*):safety-lever/(?<id>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for fis resources.
 */
export class FisResources {
	/**
	 * Builds an ARN for the action resource.
	 */
	static action(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseActionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static experiment(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseExperimentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static experimentTemplate(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseExperimentTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static safetyLever(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSafetyLeverArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static readonly CREATE_EXPERIMENT_TEMPLATE: string[] = [
		"fis:CreateExperimentTemplate",
		"iam:PassRole",
		"fis:TagResource",
	];
	/** IAM actions required for the CreateTargetAccountConfiguration API call. */
	static readonly CREATE_TARGET_ACCOUNT_CONFIGURATION: string[] = [
		"fis:CreateTargetAccountConfiguration",
	];
	/** IAM actions required for the DeleteExperimentTemplate API call. */
	static readonly DELETE_EXPERIMENT_TEMPLATE: string[] = [
		"fis:DeleteExperimentTemplate",
	];
	/** IAM actions required for the DeleteTargetAccountConfiguration API call. */
	static readonly DELETE_TARGET_ACCOUNT_CONFIGURATION: string[] = [
		"fis:DeleteTargetAccountConfiguration",
	];
	/** IAM actions required for the GetAction API call. */
	static readonly GET_ACTION: string[] = ["fis:GetAction"];
	/** IAM actions required for the GetExperiment API call. */
	static readonly GET_EXPERIMENT: string[] = ["fis:GetExperiment"];
	/** IAM actions required for the GetExperimentTargetAccountConfiguration API call. */
	static readonly GET_EXPERIMENT_TARGET_ACCOUNT_CONFIGURATION: string[] = [
		"fis:GetExperimentTargetAccountConfiguration",
	];
	/** IAM actions required for the GetExperimentTemplate API call. */
	static readonly GET_EXPERIMENT_TEMPLATE: string[] = [
		"fis:GetExperimentTemplate",
	];
	/** IAM actions required for the GetSafetyLever API call. */
	static readonly GET_SAFETY_LEVER: string[] = ["fis:GetSafetyLever"];
	/** IAM actions required for the GetTargetAccountConfiguration API call. */
	static readonly GET_TARGET_ACCOUNT_CONFIGURATION: string[] = [
		"fis:GetTargetAccountConfiguration",
	];
	/** IAM actions required for the GetTargetResourceType API call. */
	static readonly GET_TARGET_RESOURCE_TYPE: string[] = [
		"fis:GetTargetResourceType",
	];
	/** IAM actions required for the ListActions API call. */
	static readonly LIST_ACTIONS: string[] = ["fis:ListActions"];
	/** IAM actions required for the ListExperimentResolvedTargets API call. */
	static readonly LIST_EXPERIMENT_RESOLVED_TARGETS: string[] = [
		"fis:ListExperimentResolvedTargets",
	];
	/** IAM actions required for the ListExperimentTargetAccountConfigurations API call. */
	static readonly LIST_EXPERIMENT_TARGET_ACCOUNT_CONFIGURATIONS: string[] = [
		"fis:ListExperimentTargetAccountConfigurations",
	];
	/** IAM actions required for the ListExperimentTemplates API call. */
	static readonly LIST_EXPERIMENT_TEMPLATES: string[] = [
		"fis:ListExperimentTemplates",
	];
	/** IAM actions required for the ListExperiments API call. */
	static readonly LIST_EXPERIMENTS: string[] = ["fis:ListExperiments"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"fis:ListTagsForResource",
	];
	/** IAM actions required for the ListTargetAccountConfigurations API call. */
	static readonly LIST_TARGET_ACCOUNT_CONFIGURATIONS: string[] = [
		"fis:ListTargetAccountConfigurations",
	];
	/** IAM actions required for the ListTargetResourceTypes API call. */
	static readonly LIST_TARGET_RESOURCE_TYPES: string[] = [
		"fis:ListTargetResourceTypes",
	];
	/** IAM actions required for the StartExperiment API call. */
	static readonly START_EXPERIMENT: string[] = [
		"fis:StartExperiment",
		"fis:TagResource",
	];
	/** IAM actions required for the StopExperiment API call. */
	static readonly STOP_EXPERIMENT: string[] = ["fis:StopExperiment"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["fis:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["fis:UntagResource"];
	/** IAM actions required for the UpdateExperimentTemplate API call. */
	static readonly UPDATE_EXPERIMENT_TEMPLATE: string[] = [
		"iam:PassRole",
		"fis:UpdateExperimentTemplate",
	];
	/** IAM actions required for the UpdateSafetyLeverState API call. */
	static readonly UPDATE_SAFETY_LEVER_STATE: string[] = [
		"fis:UpdateSafetyLeverState",
	];
	/** IAM actions required for the UpdateTargetAccountConfiguration API call. */
	static readonly UPDATE_TARGET_ACCOUNT_CONFIGURATION: string[] = [
		"fis:UpdateTargetAccountConfiguration",
	];
}

/**
 * Condition key constants and builders for fis.
 */
export class FisConditions {
	/** Condition keys applicable to the CreateExperimentTemplate action. */
	static readonly CREATE_EXPERIMENT_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetAction action. */
	static readonly GET_ACTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExperiment action. */
	static readonly GET_EXPERIMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetExperimentTemplate action. */
	static readonly GET_EXPERIMENT_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the InjectApiInternalError action. */
	static readonly INJECT_API_INTERNAL_ERROR_CONDITION_KEYS: string[] = [
		"fis:Operations",
		"fis:Percentage",
		"fis:Service",
		"fis:Targets",
	];
	/** Condition keys applicable to the InjectApiThrottleError action. */
	static readonly INJECT_API_THROTTLE_ERROR_CONDITION_KEYS: string[] = [
		"fis:Operations",
		"fis:Percentage",
		"fis:Service",
		"fis:Targets",
	];
	/** Condition keys applicable to the InjectApiUnavailableError action. */
	static readonly INJECT_API_UNAVAILABLE_ERROR_CONDITION_KEYS: string[] = [
		"fis:Operations",
		"fis:Percentage",
		"fis:Service",
		"fis:Targets",
	];
	/** Condition keys applicable to the StartExperiment action. */
	static readonly START_EXPERIMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateExperimentTemplate action. */
	static readonly UPDATE_EXPERIMENT_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
