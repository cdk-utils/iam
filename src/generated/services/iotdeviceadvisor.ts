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
	static readonly CreateSuiteDefinition =
		"iotdeviceadvisor:CreateSuiteDefinition";
	/** [Write] iotdeviceadvisor:DeleteSuiteDefinition */
	static readonly DeleteSuiteDefinition =
		"iotdeviceadvisor:DeleteSuiteDefinition";
	/** [Read] iotdeviceadvisor:GetEndpoint */
	static readonly actionGetEndpoint = "iotdeviceadvisor:GetEndpoint";
	/** [Read] iotdeviceadvisor:GetSuiteDefinition */
	static readonly actionGetSuiteDefinition =
		"iotdeviceadvisor:GetSuiteDefinition";
	/** [Read] iotdeviceadvisor:GetSuiteRun */
	static readonly actionGetSuiteRun = "iotdeviceadvisor:GetSuiteRun";
	/** [Read] iotdeviceadvisor:GetSuiteRunReport */
	static readonly actionGetSuiteRunReport =
		"iotdeviceadvisor:GetSuiteRunReport";
	/** [List] iotdeviceadvisor:ListSuiteDefinitions */
	static readonly ListSuiteDefinitions =
		"iotdeviceadvisor:ListSuiteDefinitions";
	/** [List] iotdeviceadvisor:ListSuiteRuns */
	static readonly ListSuiteRuns = "iotdeviceadvisor:ListSuiteRuns";
	/** [Read] iotdeviceadvisor:ListTagsForResource */
	static readonly ListTagsForResource = "iotdeviceadvisor:ListTagsForResource";
	/** [Write] iotdeviceadvisor:StartSuiteRun */
	static readonly StartSuiteRun = "iotdeviceadvisor:StartSuiteRun";
	/** [Write] iotdeviceadvisor:StopSuiteRun */
	static readonly StopSuiteRun = "iotdeviceadvisor:StopSuiteRun";
	/** [Tagging] iotdeviceadvisor:TagResource */
	static readonly TagResource = "iotdeviceadvisor:TagResource";
	/** [Tagging] iotdeviceadvisor:UntagResource */
	static readonly UntagResource = "iotdeviceadvisor:UntagResource";
	/** [Write] iotdeviceadvisor:UpdateSuiteDefinition */
	static readonly UpdateSuiteDefinition =
		"iotdeviceadvisor:UpdateSuiteDefinition";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IotdeviceadvisorActions.actionGetEndpoint,
		IotdeviceadvisorActions.actionGetSuiteDefinition,
		IotdeviceadvisorActions.actionGetSuiteRun,
		IotdeviceadvisorActions.actionGetSuiteRunReport,
		IotdeviceadvisorActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IotdeviceadvisorActions.CreateSuiteDefinition,
		IotdeviceadvisorActions.DeleteSuiteDefinition,
		IotdeviceadvisorActions.StartSuiteRun,
		IotdeviceadvisorActions.StopSuiteRun,
		IotdeviceadvisorActions.UpdateSuiteDefinition,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IotdeviceadvisorActions.ListSuiteDefinitions,
		IotdeviceadvisorActions.ListSuiteRuns,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		IotdeviceadvisorActions.TagResource,
		IotdeviceadvisorActions.UntagResource,
	];
}

/**
 * Properties for building a Suitedefinition ARN.
 */
export interface IotdeviceadvisorSuitedefinitionArnProps {
	/** The SuiteDefinitionId component of the ARN. */
	readonly suiteDefinitionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Suitedefinition ARN.
 */
export interface IotdeviceadvisorSuitedefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SuiteDefinitionId component. */
	readonly suiteDefinitionId: string;
}

/**
 * Properties for building a Suiterun ARN.
 */
export interface IotdeviceadvisorSuiterunArnProps {
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
}

/**
 * Parsed components of a Suiterun ARN.
 */
export interface IotdeviceadvisorSuiterunArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SuiteDefinitionId component. */
	readonly suiteDefinitionId: string;
	/** The SuiteRunId component. */
	readonly suiteRunId: string;
}

const SuitedefinitionArnRegex =
	/^arn:(?<partition>[^:]+):iotdeviceadvisor:(?<region>[^:]*):(?<account>[^:]*):suitedefinition\/(?<suiteDefinitionId>[^:/?]+)$/;
const SuiterunArnRegex =
	/^arn:(?<partition>[^:]+):iotdeviceadvisor:(?<region>[^:]*):(?<account>[^:]*):suiterun\/(?<suiteDefinitionId>[^:/?]+)\/(?<suiteRunId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for iotdeviceadvisor resources.
 */
export class IotdeviceadvisorResources {
	/**
	 * Builds an ARN for the Suitedefinition resource.
	 */
	static suitedefinition(
		props: IotdeviceadvisorSuitedefinitionArnProps,
	): string {
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
	static parseSuitedefinitionArn(
		arn: string,
	): IotdeviceadvisorSuitedefinitionArnComponents {
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
	static suiterun(props: IotdeviceadvisorSuiterunArnProps): string {
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
	static parseSuiterunArn(arn: string): IotdeviceadvisorSuiterunArnComponents {
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
	static readonly CreateSuiteDefinition: string[] = [
		"iotdeviceadvisor:CreateSuiteDefinition",
		"iam:PassRole",
		"iotdeviceadvisor:TagResource",
	];
	/** IAM actions required for the DeleteSuiteDefinition API call. */
	static readonly DeleteSuiteDefinition: string[] = [
		"iotdeviceadvisor:DeleteSuiteDefinition",
	];
	/** IAM actions required for the GetEndpoint API call. */
	static readonly opGetEndpoint: string[] = [
		"iotdeviceadvisor:GetEndpoint",
		"iam:PassRole",
	];
	/** IAM actions required for the GetSuiteDefinition API call. */
	static readonly opGetSuiteDefinition: string[] = [
		"iotdeviceadvisor:GetSuiteDefinition",
	];
	/** IAM actions required for the GetSuiteRun API call. */
	static readonly opGetSuiteRun: string[] = ["iotdeviceadvisor:GetSuiteRun"];
	/** IAM actions required for the GetSuiteRunReport API call. */
	static readonly opGetSuiteRunReport: string[] = [
		"iotdeviceadvisor:GetSuiteRunReport",
	];
	/** IAM actions required for the ListSuiteDefinitions API call. */
	static readonly ListSuiteDefinitions: string[] = [
		"iotdeviceadvisor:ListSuiteDefinitions",
	];
	/** IAM actions required for the ListSuiteRuns API call. */
	static readonly ListSuiteRuns: string[] = ["iotdeviceadvisor:ListSuiteRuns"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"iotdeviceadvisor:ListTagsForResource",
	];
	/** IAM actions required for the StartSuiteRun API call. */
	static readonly StartSuiteRun: string[] = [
		"iam:PassRole",
		"iotdeviceadvisor:StartSuiteRun",
		"iotdeviceadvisor:TagResource",
	];
	/** IAM actions required for the StopSuiteRun API call. */
	static readonly StopSuiteRun: string[] = ["iotdeviceadvisor:StopSuiteRun"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["iotdeviceadvisor:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["iotdeviceadvisor:UntagResource"];
	/** IAM actions required for the UpdateSuiteDefinition API call. */
	static readonly UpdateSuiteDefinition: string[] = [
		"iam:PassRole",
		"iotdeviceadvisor:UpdateSuiteDefinition",
	];
}

/**
 * Condition key constants and builders for iotdeviceadvisor.
 */
export class IotdeviceadvisorConditions {
	/** Condition keys applicable to the CreateSuiteDefinition action. */
	static readonly CreateSuiteDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartSuiteRun action. */
	static readonly StartSuiteRunConditionKeys: string[] = [
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

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
