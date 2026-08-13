// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/securitylake.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the securitylake service.
 */
export class SecurityLakeActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "securitylake";

	/** [Write] securitylake:CreateAwsLogSource */
	static readonly CreateAwsLogSource = "securitylake:CreateAwsLogSource";
	/** [Write] securitylake:CreateCustomLogSource */
	static readonly CreateCustomLogSource = "securitylake:CreateCustomLogSource";
	/** [Write] securitylake:CreateDataLake */
	static readonly CreateDataLake = "securitylake:CreateDataLake";
	/** [Write] securitylake:CreateDataLakeExceptionSubscription */
	static readonly CreateDataLakeExceptionSubscription =
		"securitylake:CreateDataLakeExceptionSubscription";
	/** [Write] securitylake:CreateDataLakeOrganizationConfiguration */
	static readonly CreateDataLakeOrganizationConfiguration =
		"securitylake:CreateDataLakeOrganizationConfiguration";
	/** [Write] securitylake:CreateSubscriber */
	static readonly CreateSubscriber = "securitylake:CreateSubscriber";
	/** [Write] securitylake:CreateSubscriberNotification */
	static readonly CreateSubscriberNotification =
		"securitylake:CreateSubscriberNotification";
	/** [Write] securitylake:DeleteAwsLogSource */
	static readonly DeleteAwsLogSource = "securitylake:DeleteAwsLogSource";
	/** [Write] securitylake:DeleteCustomLogSource */
	static readonly DeleteCustomLogSource = "securitylake:DeleteCustomLogSource";
	/** [Write] securitylake:DeleteDataLake */
	static readonly DeleteDataLake = "securitylake:DeleteDataLake";
	/** [Write] securitylake:DeleteDataLakeExceptionSubscription */
	static readonly DeleteDataLakeExceptionSubscription =
		"securitylake:DeleteDataLakeExceptionSubscription";
	/** [Write] securitylake:DeleteDataLakeOrganizationConfiguration */
	static readonly DeleteDataLakeOrganizationConfiguration =
		"securitylake:DeleteDataLakeOrganizationConfiguration";
	/** [Write] securitylake:DeleteSubscriber */
	static readonly DeleteSubscriber = "securitylake:DeleteSubscriber";
	/** [Write] securitylake:DeleteSubscriberNotification */
	static readonly DeleteSubscriberNotification =
		"securitylake:DeleteSubscriberNotification";
	/** [Write] securitylake:DeregisterDataLakeDelegatedAdministrator */
	static readonly DeregisterDataLakeDelegatedAdministrator =
		"securitylake:DeregisterDataLakeDelegatedAdministrator";
	/** [Read] securitylake:GetDataLakeExceptionSubscription */
	static readonly actionGetDataLakeExceptionSubscription =
		"securitylake:GetDataLakeExceptionSubscription";
	/** [Read] securitylake:GetDataLakeOrganizationConfiguration */
	static readonly actionGetDataLakeOrganizationConfiguration =
		"securitylake:GetDataLakeOrganizationConfiguration";
	/** [Read] securitylake:GetDataLakeSources */
	static readonly actionGetDataLakeSources = "securitylake:GetDataLakeSources";
	/** [Read] securitylake:GetSubscriber */
	static readonly actionGetSubscriber = "securitylake:GetSubscriber";
	/** [List] securitylake:ListDataLakeExceptions */
	static readonly ListDataLakeExceptions =
		"securitylake:ListDataLakeExceptions";
	/** [List] securitylake:ListDataLakes */
	static readonly ListDataLakes = "securitylake:ListDataLakes";
	/** [List] securitylake:ListLogSources */
	static readonly ListLogSources = "securitylake:ListLogSources";
	/** [List] securitylake:ListSubscribers */
	static readonly ListSubscribers = "securitylake:ListSubscribers";
	/** [List] securitylake:ListTagsForResource */
	static readonly ListTagsForResource = "securitylake:ListTagsForResource";
	/** [Write] securitylake:RegisterDataLakeDelegatedAdministrator */
	static readonly RegisterDataLakeDelegatedAdministrator =
		"securitylake:RegisterDataLakeDelegatedAdministrator";
	/** [Tagging] securitylake:TagResource */
	static readonly TagResource = "securitylake:TagResource";
	/** [Tagging] securitylake:UntagResource */
	static readonly UntagResource = "securitylake:UntagResource";
	/** [Write] securitylake:UpdateDataLake */
	static readonly UpdateDataLake = "securitylake:UpdateDataLake";
	/** [Write] securitylake:UpdateDataLakeExceptionSubscription */
	static readonly UpdateDataLakeExceptionSubscription =
		"securitylake:UpdateDataLakeExceptionSubscription";
	/** [Write] securitylake:UpdateSubscriber */
	static readonly UpdateSubscriber = "securitylake:UpdateSubscriber";
	/** [Write] securitylake:UpdateSubscriberNotification */
	static readonly UpdateSubscriberNotification =
		"securitylake:UpdateSubscriberNotification";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SecurityLakeActions.actionGetDataLakeExceptionSubscription,
		SecurityLakeActions.actionGetDataLakeOrganizationConfiguration,
		SecurityLakeActions.actionGetDataLakeSources,
		SecurityLakeActions.actionGetSubscriber,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SecurityLakeActions.CreateAwsLogSource,
		SecurityLakeActions.CreateCustomLogSource,
		SecurityLakeActions.CreateDataLake,
		SecurityLakeActions.CreateDataLakeExceptionSubscription,
		SecurityLakeActions.CreateDataLakeOrganizationConfiguration,
		SecurityLakeActions.CreateSubscriber,
		SecurityLakeActions.CreateSubscriberNotification,
		SecurityLakeActions.DeleteAwsLogSource,
		SecurityLakeActions.DeleteCustomLogSource,
		SecurityLakeActions.DeleteDataLake,
		SecurityLakeActions.DeleteDataLakeExceptionSubscription,
		SecurityLakeActions.DeleteDataLakeOrganizationConfiguration,
		SecurityLakeActions.DeleteSubscriber,
		SecurityLakeActions.DeleteSubscriberNotification,
		SecurityLakeActions.DeregisterDataLakeDelegatedAdministrator,
		SecurityLakeActions.RegisterDataLakeDelegatedAdministrator,
		SecurityLakeActions.UpdateDataLake,
		SecurityLakeActions.UpdateDataLakeExceptionSubscription,
		SecurityLakeActions.UpdateSubscriber,
		SecurityLakeActions.UpdateSubscriberNotification,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SecurityLakeActions.ListDataLakeExceptions,
		SecurityLakeActions.ListDataLakes,
		SecurityLakeActions.ListLogSources,
		SecurityLakeActions.ListSubscribers,
		SecurityLakeActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SecurityLakeActions.TagResource,
		SecurityLakeActions.UntagResource,
	];
}

/**
 * Properties for building a data-lake ARN.
 */
export interface SecurityLakeDataLakeArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a data-lake ARN.
 */
export interface SecurityLakeDataLakeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a subscriber ARN.
 */
export interface SecurityLakeSubscriberArnProps {
	/** The SubscriberId component of the ARN. */
	readonly subscriberId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a subscriber ARN.
 */
export interface SecurityLakeSubscriberArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SubscriberId component. */
	readonly subscriberId: string;
}

const DataLakeArnRegex =
	/^arn:(?<partition>[^:]+):securitylake:(?<region>[^:]*):(?<account>[^:]*):data-lake\/default$/;
const SubscriberArnRegex =
	/^arn:(?<partition>[^:]+):securitylake:(?<region>[^:]*):(?<account>[^:]*):subscriber\/(?<subscriberId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for securitylake resources.
 */
export class SecurityLakeResources {
	/**
	 * Builds an ARN for the data-lake resource.
	 */
	static dataLake(props: SecurityLakeDataLakeArnProps): string {
		return `arn:${props.partition ?? "aws"}:securitylake:${props.region ?? "*"}:${props.account ?? "*"}:data-lake/default`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-lake resource.
	 */
	static isValidDataLakeArn(arn: string): boolean {
		return DataLakeArnRegex.test(arn);
	}

	/**
	 * Parses a data-lake ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataLakeArn(arn: string): SecurityLakeDataLakeArnComponents {
		const match = DataLakeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-lake ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the subscriber resource.
	 */
	static subscriber(props: SecurityLakeSubscriberArnProps): string {
		return `arn:${props.partition ?? "aws"}:securitylake:${props.region ?? "*"}:${props.account ?? "*"}:subscriber/${props.subscriberId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the subscriber resource.
	 */
	static isValidSubscriberArn(arn: string): boolean {
		return SubscriberArnRegex.test(arn);
	}

	/**
	 * Parses a subscriber ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSubscriberArn(arn: string): SecurityLakeSubscriberArnComponents {
		const match = SubscriberArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid subscriber ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			subscriberId: match.groups!.subscriberId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for securitylake.
 */
export class SecurityLakeOperations {
	/** IAM actions required for the CreateAwsLogSource API call. */
	static readonly CreateAwsLogSource: string[] = [
		"securitylake:CreateAwsLogSource",
	];
	/** IAM actions required for the CreateCustomLogSource API call. */
	static readonly CreateCustomLogSource: string[] = [
		"securitylake:CreateCustomLogSource",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDataLake API call. */
	static readonly CreateDataLake: string[] = [
		"securitylake:CreateDataLake",
		"iam:PassRole",
		"securitylake:TagResource",
	];
	/** IAM actions required for the CreateDataLakeExceptionSubscription API call. */
	static readonly CreateDataLakeExceptionSubscription: string[] = [
		"securitylake:CreateDataLakeExceptionSubscription",
	];
	/** IAM actions required for the CreateDataLakeOrganizationConfiguration API call. */
	static readonly CreateDataLakeOrganizationConfiguration: string[] = [
		"securitylake:CreateDataLakeOrganizationConfiguration",
	];
	/** IAM actions required for the CreateSubscriber API call. */
	static readonly CreateSubscriber: string[] = [
		"securitylake:CreateSubscriber",
		"securitylake:TagResource",
	];
	/** IAM actions required for the CreateSubscriberNotification API call. */
	static readonly CreateSubscriberNotification: string[] = [
		"securitylake:CreateSubscriberNotification",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteAwsLogSource API call. */
	static readonly DeleteAwsLogSource: string[] = [
		"securitylake:DeleteAwsLogSource",
	];
	/** IAM actions required for the DeleteCustomLogSource API call. */
	static readonly DeleteCustomLogSource: string[] = [
		"securitylake:DeleteCustomLogSource",
	];
	/** IAM actions required for the DeleteDataLake API call. */
	static readonly DeleteDataLake: string[] = ["securitylake:DeleteDataLake"];
	/** IAM actions required for the DeleteDataLakeExceptionSubscription API call. */
	static readonly DeleteDataLakeExceptionSubscription: string[] = [
		"securitylake:DeleteDataLakeExceptionSubscription",
	];
	/** IAM actions required for the DeleteDataLakeOrganizationConfiguration API call. */
	static readonly DeleteDataLakeOrganizationConfiguration: string[] = [
		"securitylake:DeleteDataLakeOrganizationConfiguration",
	];
	/** IAM actions required for the DeleteSubscriber API call. */
	static readonly DeleteSubscriber: string[] = [
		"securitylake:DeleteSubscriber",
	];
	/** IAM actions required for the DeleteSubscriberNotification API call. */
	static readonly DeleteSubscriberNotification: string[] = [
		"securitylake:DeleteSubscriberNotification",
	];
	/** IAM actions required for the DeregisterDataLakeDelegatedAdministrator API call. */
	static readonly DeregisterDataLakeDelegatedAdministrator: string[] = [
		"securitylake:DeregisterDataLakeDelegatedAdministrator",
	];
	/** IAM actions required for the GetDataLakeExceptionSubscription API call. */
	static readonly opGetDataLakeExceptionSubscription: string[] = [
		"securitylake:GetDataLakeExceptionSubscription",
	];
	/** IAM actions required for the GetDataLakeOrganizationConfiguration API call. */
	static readonly opGetDataLakeOrganizationConfiguration: string[] = [
		"securitylake:GetDataLakeOrganizationConfiguration",
	];
	/** IAM actions required for the GetDataLakeSources API call. */
	static readonly opGetDataLakeSources: string[] = [
		"securitylake:GetDataLakeSources",
	];
	/** IAM actions required for the GetSubscriber API call. */
	static readonly opGetSubscriber: string[] = ["securitylake:GetSubscriber"];
	/** IAM actions required for the ListDataLakeExceptions API call. */
	static readonly ListDataLakeExceptions: string[] = [
		"securitylake:ListDataLakeExceptions",
	];
	/** IAM actions required for the ListDataLakes API call. */
	static readonly ListDataLakes: string[] = ["securitylake:ListDataLakes"];
	/** IAM actions required for the ListLogSources API call. */
	static readonly ListLogSources: string[] = ["securitylake:ListLogSources"];
	/** IAM actions required for the ListSubscribers API call. */
	static readonly ListSubscribers: string[] = ["securitylake:ListSubscribers"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"securitylake:ListTagsForResource",
	];
	/** IAM actions required for the RegisterDataLakeDelegatedAdministrator API call. */
	static readonly RegisterDataLakeDelegatedAdministrator: string[] = [
		"securitylake:RegisterDataLakeDelegatedAdministrator",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["securitylake:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["securitylake:UntagResource"];
	/** IAM actions required for the UpdateDataLake API call. */
	static readonly UpdateDataLake: string[] = [
		"iam:PassRole",
		"securitylake:UpdateDataLake",
	];
	/** IAM actions required for the UpdateDataLakeExceptionSubscription API call. */
	static readonly UpdateDataLakeExceptionSubscription: string[] = [
		"securitylake:UpdateDataLakeExceptionSubscription",
	];
	/** IAM actions required for the UpdateSubscriber API call. */
	static readonly UpdateSubscriber: string[] = [
		"securitylake:UpdateSubscriber",
	];
	/** IAM actions required for the UpdateSubscriberNotification API call. */
	static readonly UpdateSubscriberNotification: string[] = [
		"iam:PassRole",
		"securitylake:UpdateSubscriberNotification",
	];
}

/**
 * Condition key constants and builders for securitylake.
 */
export class SecurityLakeConditions {
	/** Condition keys applicable to the CreateDataLake action. */
	static readonly CreateDataLakeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSubscriber action. */
	static readonly CreateSubscriberConditionKeys: string[] = [
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
