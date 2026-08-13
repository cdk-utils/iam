// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iotdeviceadvisor.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iotdeviceadvisor service.
 */
export class IotdeviceadvisorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iotdeviceadvisor";

	/** [Write] iotdeviceadvisor:CreateSuiteDefinition */
	static readonly CREATE_SUITE_DEFINITION =
		"iotdeviceadvisor:CreateSuiteDefinition";
	/** [Write] iotdeviceadvisor:DeleteSuiteDefinition */
	static readonly DELETE_SUITE_DEFINITION =
		"iotdeviceadvisor:DeleteSuiteDefinition";
	/** [Read] iotdeviceadvisor:GetEndpoint */
	static readonly GET_ENDPOINT = "iotdeviceadvisor:GetEndpoint";
	/** [Read] iotdeviceadvisor:GetSuiteDefinition */
	static readonly GET_SUITE_DEFINITION = "iotdeviceadvisor:GetSuiteDefinition";
	/** [Read] iotdeviceadvisor:GetSuiteRun */
	static readonly GET_SUITE_RUN = "iotdeviceadvisor:GetSuiteRun";
	/** [Read] iotdeviceadvisor:GetSuiteRunReport */
	static readonly GET_SUITE_RUN_REPORT = "iotdeviceadvisor:GetSuiteRunReport";
	/** [List] iotdeviceadvisor:ListSuiteDefinitions */
	static readonly LIST_SUITE_DEFINITIONS =
		"iotdeviceadvisor:ListSuiteDefinitions";
	/** [List] iotdeviceadvisor:ListSuiteRuns */
	static readonly LIST_SUITE_RUNS = "iotdeviceadvisor:ListSuiteRuns";
	/** [Read] iotdeviceadvisor:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"iotdeviceadvisor:ListTagsForResource";
	/** [Write] iotdeviceadvisor:StartSuiteRun */
	static readonly START_SUITE_RUN = "iotdeviceadvisor:StartSuiteRun";
	/** [Write] iotdeviceadvisor:StopSuiteRun */
	static readonly STOP_SUITE_RUN = "iotdeviceadvisor:StopSuiteRun";
	/** [Tagging] iotdeviceadvisor:TagResource */
	static readonly TAG_RESOURCE = "iotdeviceadvisor:TagResource";
	/** [Tagging] iotdeviceadvisor:UntagResource */
	static readonly UNTAG_RESOURCE = "iotdeviceadvisor:UntagResource";
	/** [Write] iotdeviceadvisor:UpdateSuiteDefinition */
	static readonly UPDATE_SUITE_DEFINITION =
		"iotdeviceadvisor:UpdateSuiteDefinition";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IotdeviceadvisorActions.GET_ENDPOINT,
		IotdeviceadvisorActions.GET_SUITE_DEFINITION,
		IotdeviceadvisorActions.GET_SUITE_RUN,
		IotdeviceadvisorActions.GET_SUITE_RUN_REPORT,
		IotdeviceadvisorActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IotdeviceadvisorActions.CREATE_SUITE_DEFINITION,
		IotdeviceadvisorActions.DELETE_SUITE_DEFINITION,
		IotdeviceadvisorActions.START_SUITE_RUN,
		IotdeviceadvisorActions.STOP_SUITE_RUN,
		IotdeviceadvisorActions.UPDATE_SUITE_DEFINITION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IotdeviceadvisorActions.LIST_SUITE_DEFINITIONS,
		IotdeviceadvisorActions.LIST_SUITE_RUNS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		IotdeviceadvisorActions.TAG_RESOURCE,
		IotdeviceadvisorActions.UNTAG_RESOURCE,
	];
}

const SuitedefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotdeviceadvisor:(?<region>[^:]*):(?<account>[^:]*):suitedefinition/(?<suiteDefinitionId>[^:/?]+)$",
);
const SuiterunArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotdeviceadvisor:(?<region>[^:]*):(?<account>[^:]*):suiterun/(?<suiteDefinitionId>[^:/?]+)/(?<suiteRunId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for iotdeviceadvisor resources.
 */
export class IotdeviceadvisorResources {
	/**
	 * Builds an ARN for the Suitedefinition resource.
	 */
	static suitedefinition(props: {
		/** The SuiteDefinitionId component of the ARN. */
		readonly suiteDefinitionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotdeviceadvisor:${props.region ?? "*"}:${props.account ?? "*"}:suitedefinition/${props.suiteDefinitionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Suitedefinition resource.
	 */
	static isValidSuitedefinitionArn(arn: string): boolean {
		return SuitedefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a Suitedefinition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSuitedefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		suiteDefinitionId: string;
	} {
		const match = SuitedefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Suitedefinition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			suiteDefinitionId: match.groups!.suiteDefinitionId,
		};
	}

	/**
	 * Builds an ARN for the Suiterun resource.
	 */
	static suiterun(props: {
		/** The SuiteDefinitionId component of the ARN. */
		readonly suiteDefinitionId: string;
		/** The SuiteRunId component of the ARN. */
		readonly suiteRunId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iotdeviceadvisor:${props.region ?? "*"}:${props.account ?? "*"}:suiterun/${props.suiteDefinitionId}/${props.suiteRunId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Suiterun resource.
	 */
	static isValidSuiterunArn(arn: string): boolean {
		return SuiterunArnRegex.test(arn);
	}

	/**
	 * Parses a Suiterun ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSuiterunArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		suiteDefinitionId: string;
		suiteRunId: string;
	} {
		const match = SuiterunArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Suiterun ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			suiteDefinitionId: match.groups!.suiteDefinitionId,
			suiteRunId: match.groups!.suiteRunId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for iotdeviceadvisor.
 */
export class IotdeviceadvisorOperations {
	/** IAM actions required for the CreateSuiteDefinition API call. */
	static readonly CREATE_SUITE_DEFINITION: string[] = [
		"iotdeviceadvisor:CreateSuiteDefinition",
		"iam:PassRole",
		"iotdeviceadvisor:TagResource",
	];
	/** IAM actions required for the DeleteSuiteDefinition API call. */
	static readonly DELETE_SUITE_DEFINITION: string[] = [
		"iotdeviceadvisor:DeleteSuiteDefinition",
	];
	/** IAM actions required for the GetEndpoint API call. */
	static readonly GET_ENDPOINT: string[] = [
		"iotdeviceadvisor:GetEndpoint",
		"iam:PassRole",
	];
	/** IAM actions required for the GetSuiteDefinition API call. */
	static readonly GET_SUITE_DEFINITION: string[] = [
		"iotdeviceadvisor:GetSuiteDefinition",
	];
	/** IAM actions required for the GetSuiteRun API call. */
	static readonly GET_SUITE_RUN: string[] = ["iotdeviceadvisor:GetSuiteRun"];
	/** IAM actions required for the GetSuiteRunReport API call. */
	static readonly GET_SUITE_RUN_REPORT: string[] = [
		"iotdeviceadvisor:GetSuiteRunReport",
	];
	/** IAM actions required for the ListSuiteDefinitions API call. */
	static readonly LIST_SUITE_DEFINITIONS: string[] = [
		"iotdeviceadvisor:ListSuiteDefinitions",
	];
	/** IAM actions required for the ListSuiteRuns API call. */
	static readonly LIST_SUITE_RUNS: string[] = [
		"iotdeviceadvisor:ListSuiteRuns",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"iotdeviceadvisor:ListTagsForResource",
	];
	/** IAM actions required for the StartSuiteRun API call. */
	static readonly START_SUITE_RUN: string[] = [
		"iam:PassRole",
		"iotdeviceadvisor:StartSuiteRun",
		"iotdeviceadvisor:TagResource",
	];
	/** IAM actions required for the StopSuiteRun API call. */
	static readonly STOP_SUITE_RUN: string[] = ["iotdeviceadvisor:StopSuiteRun"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["iotdeviceadvisor:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["iotdeviceadvisor:UntagResource"];
	/** IAM actions required for the UpdateSuiteDefinition API call. */
	static readonly UPDATE_SUITE_DEFINITION: string[] = [
		"iam:PassRole",
		"iotdeviceadvisor:UpdateSuiteDefinition",
	];
}

/**
 * Condition key constants and builders for iotdeviceadvisor.
 */
export class IotdeviceadvisorConditions {
	/** Condition keys applicable to the CreateSuiteDefinition action. */
	static readonly CREATE_SUITE_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartSuiteRun action. */
	static readonly START_SUITE_RUN_CONDITION_KEYS: string[] = [
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

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
}
