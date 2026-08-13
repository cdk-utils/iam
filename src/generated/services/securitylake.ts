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
	static readonly CREATE_AWS_LOG_SOURCE = "securitylake:CreateAwsLogSource";
	/** [Write] securitylake:CreateCustomLogSource */
	static readonly CREATE_CUSTOM_LOG_SOURCE =
		"securitylake:CreateCustomLogSource";
	/** [Write] securitylake:CreateDataLake */
	static readonly CREATE_DATA_LAKE = "securitylake:CreateDataLake";
	/** [Write] securitylake:CreateDataLakeExceptionSubscription */
	static readonly CREATE_DATA_LAKE_EXCEPTION_SUBSCRIPTION =
		"securitylake:CreateDataLakeExceptionSubscription";
	/** [Write] securitylake:CreateDataLakeOrganizationConfiguration */
	static readonly CREATE_DATA_LAKE_ORGANIZATION_CONFIGURATION =
		"securitylake:CreateDataLakeOrganizationConfiguration";
	/** [Write] securitylake:CreateSubscriber */
	static readonly CREATE_SUBSCRIBER = "securitylake:CreateSubscriber";
	/** [Write] securitylake:CreateSubscriberNotification */
	static readonly CREATE_SUBSCRIBER_NOTIFICATION =
		"securitylake:CreateSubscriberNotification";
	/** [Write] securitylake:DeleteAwsLogSource */
	static readonly DELETE_AWS_LOG_SOURCE = "securitylake:DeleteAwsLogSource";
	/** [Write] securitylake:DeleteCustomLogSource */
	static readonly DELETE_CUSTOM_LOG_SOURCE =
		"securitylake:DeleteCustomLogSource";
	/** [Write] securitylake:DeleteDataLake */
	static readonly DELETE_DATA_LAKE = "securitylake:DeleteDataLake";
	/** [Write] securitylake:DeleteDataLakeExceptionSubscription */
	static readonly DELETE_DATA_LAKE_EXCEPTION_SUBSCRIPTION =
		"securitylake:DeleteDataLakeExceptionSubscription";
	/** [Write] securitylake:DeleteDataLakeOrganizationConfiguration */
	static readonly DELETE_DATA_LAKE_ORGANIZATION_CONFIGURATION =
		"securitylake:DeleteDataLakeOrganizationConfiguration";
	/** [Write] securitylake:DeleteSubscriber */
	static readonly DELETE_SUBSCRIBER = "securitylake:DeleteSubscriber";
	/** [Write] securitylake:DeleteSubscriberNotification */
	static readonly DELETE_SUBSCRIBER_NOTIFICATION =
		"securitylake:DeleteSubscriberNotification";
	/** [Write] securitylake:DeregisterDataLakeDelegatedAdministrator */
	static readonly DEREGISTER_DATA_LAKE_DELEGATED_ADMINISTRATOR =
		"securitylake:DeregisterDataLakeDelegatedAdministrator";
	/** [Read] securitylake:GetDataLakeExceptionSubscription */
	static readonly GET_DATA_LAKE_EXCEPTION_SUBSCRIPTION =
		"securitylake:GetDataLakeExceptionSubscription";
	/** [Read] securitylake:GetDataLakeOrganizationConfiguration */
	static readonly GET_DATA_LAKE_ORGANIZATION_CONFIGURATION =
		"securitylake:GetDataLakeOrganizationConfiguration";
	/** [Read] securitylake:GetDataLakeSources */
	static readonly GET_DATA_LAKE_SOURCES = "securitylake:GetDataLakeSources";
	/** [Read] securitylake:GetSubscriber */
	static readonly GET_SUBSCRIBER = "securitylake:GetSubscriber";
	/** [List] securitylake:ListDataLakeExceptions */
	static readonly LIST_DATA_LAKE_EXCEPTIONS =
		"securitylake:ListDataLakeExceptions";
	/** [List] securitylake:ListDataLakes */
	static readonly LIST_DATA_LAKES = "securitylake:ListDataLakes";
	/** [List] securitylake:ListLogSources */
	static readonly LIST_LOG_SOURCES = "securitylake:ListLogSources";
	/** [List] securitylake:ListSubscribers */
	static readonly LIST_SUBSCRIBERS = "securitylake:ListSubscribers";
	/** [List] securitylake:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "securitylake:ListTagsForResource";
	/** [Write] securitylake:RegisterDataLakeDelegatedAdministrator */
	static readonly REGISTER_DATA_LAKE_DELEGATED_ADMINISTRATOR =
		"securitylake:RegisterDataLakeDelegatedAdministrator";
	/** [Tagging] securitylake:TagResource */
	static readonly TAG_RESOURCE = "securitylake:TagResource";
	/** [Tagging] securitylake:UntagResource */
	static readonly UNTAG_RESOURCE = "securitylake:UntagResource";
	/** [Write] securitylake:UpdateDataLake */
	static readonly UPDATE_DATA_LAKE = "securitylake:UpdateDataLake";
	/** [Write] securitylake:UpdateDataLakeExceptionSubscription */
	static readonly UPDATE_DATA_LAKE_EXCEPTION_SUBSCRIPTION =
		"securitylake:UpdateDataLakeExceptionSubscription";
	/** [Write] securitylake:UpdateSubscriber */
	static readonly UPDATE_SUBSCRIBER = "securitylake:UpdateSubscriber";
	/** [Write] securitylake:UpdateSubscriberNotification */
	static readonly UPDATE_SUBSCRIBER_NOTIFICATION =
		"securitylake:UpdateSubscriberNotification";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SecurityLakeActions.GET_DATA_LAKE_EXCEPTION_SUBSCRIPTION,
		SecurityLakeActions.GET_DATA_LAKE_ORGANIZATION_CONFIGURATION,
		SecurityLakeActions.GET_DATA_LAKE_SOURCES,
		SecurityLakeActions.GET_SUBSCRIBER,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SecurityLakeActions.CREATE_AWS_LOG_SOURCE,
		SecurityLakeActions.CREATE_CUSTOM_LOG_SOURCE,
		SecurityLakeActions.CREATE_DATA_LAKE,
		SecurityLakeActions.CREATE_DATA_LAKE_EXCEPTION_SUBSCRIPTION,
		SecurityLakeActions.CREATE_DATA_LAKE_ORGANIZATION_CONFIGURATION,
		SecurityLakeActions.CREATE_SUBSCRIBER,
		SecurityLakeActions.CREATE_SUBSCRIBER_NOTIFICATION,
		SecurityLakeActions.DELETE_AWS_LOG_SOURCE,
		SecurityLakeActions.DELETE_CUSTOM_LOG_SOURCE,
		SecurityLakeActions.DELETE_DATA_LAKE,
		SecurityLakeActions.DELETE_DATA_LAKE_EXCEPTION_SUBSCRIPTION,
		SecurityLakeActions.DELETE_DATA_LAKE_ORGANIZATION_CONFIGURATION,
		SecurityLakeActions.DELETE_SUBSCRIBER,
		SecurityLakeActions.DELETE_SUBSCRIBER_NOTIFICATION,
		SecurityLakeActions.DEREGISTER_DATA_LAKE_DELEGATED_ADMINISTRATOR,
		SecurityLakeActions.REGISTER_DATA_LAKE_DELEGATED_ADMINISTRATOR,
		SecurityLakeActions.UPDATE_DATA_LAKE,
		SecurityLakeActions.UPDATE_DATA_LAKE_EXCEPTION_SUBSCRIPTION,
		SecurityLakeActions.UPDATE_SUBSCRIBER,
		SecurityLakeActions.UPDATE_SUBSCRIBER_NOTIFICATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SecurityLakeActions.LIST_DATA_LAKE_EXCEPTIONS,
		SecurityLakeActions.LIST_DATA_LAKES,
		SecurityLakeActions.LIST_LOG_SOURCES,
		SecurityLakeActions.LIST_SUBSCRIBERS,
		SecurityLakeActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SecurityLakeActions.TAG_RESOURCE,
		SecurityLakeActions.UNTAG_RESOURCE,
	];
}

const DataLakeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securitylake:(?<region>[^:]*):(?<account>[^:]*):data-lake/default$",
);
const SubscriberArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securitylake:(?<region>[^:]*):(?<account>[^:]*):subscriber/(?<subscriberId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for securitylake resources.
 */
export class SecurityLakeResources {
	/**
	 * Builds an ARN for the data-lake resource.
	 */
	static dataLake(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDataLakeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static subscriber(props: {
		/** The SubscriberId component of the ARN. */
		readonly subscriberId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSubscriberArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		subscriberId: string;
	} {
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
	static readonly CREATE_AWS_LOG_SOURCE: string[] = [
		"securitylake:CreateAwsLogSource",
	];
	/** IAM actions required for the CreateCustomLogSource API call. */
	static readonly CREATE_CUSTOM_LOG_SOURCE: string[] = [
		"securitylake:CreateCustomLogSource",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDataLake API call. */
	static readonly CREATE_DATA_LAKE: string[] = [
		"securitylake:CreateDataLake",
		"iam:PassRole",
		"securitylake:TagResource",
	];
	/** IAM actions required for the CreateDataLakeExceptionSubscription API call. */
	static readonly CREATE_DATA_LAKE_EXCEPTION_SUBSCRIPTION: string[] = [
		"securitylake:CreateDataLakeExceptionSubscription",
	];
	/** IAM actions required for the CreateDataLakeOrganizationConfiguration API call. */
	static readonly CREATE_DATA_LAKE_ORGANIZATION_CONFIGURATION: string[] = [
		"securitylake:CreateDataLakeOrganizationConfiguration",
	];
	/** IAM actions required for the CreateSubscriber API call. */
	static readonly CREATE_SUBSCRIBER: string[] = [
		"securitylake:CreateSubscriber",
		"securitylake:TagResource",
	];
	/** IAM actions required for the CreateSubscriberNotification API call. */
	static readonly CREATE_SUBSCRIBER_NOTIFICATION: string[] = [
		"securitylake:CreateSubscriberNotification",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteAwsLogSource API call. */
	static readonly DELETE_AWS_LOG_SOURCE: string[] = [
		"securitylake:DeleteAwsLogSource",
	];
	/** IAM actions required for the DeleteCustomLogSource API call. */
	static readonly DELETE_CUSTOM_LOG_SOURCE: string[] = [
		"securitylake:DeleteCustomLogSource",
	];
	/** IAM actions required for the DeleteDataLake API call. */
	static readonly DELETE_DATA_LAKE: string[] = ["securitylake:DeleteDataLake"];
	/** IAM actions required for the DeleteDataLakeExceptionSubscription API call. */
	static readonly DELETE_DATA_LAKE_EXCEPTION_SUBSCRIPTION: string[] = [
		"securitylake:DeleteDataLakeExceptionSubscription",
	];
	/** IAM actions required for the DeleteDataLakeOrganizationConfiguration API call. */
	static readonly DELETE_DATA_LAKE_ORGANIZATION_CONFIGURATION: string[] = [
		"securitylake:DeleteDataLakeOrganizationConfiguration",
	];
	/** IAM actions required for the DeleteSubscriber API call. */
	static readonly DELETE_SUBSCRIBER: string[] = [
		"securitylake:DeleteSubscriber",
	];
	/** IAM actions required for the DeleteSubscriberNotification API call. */
	static readonly DELETE_SUBSCRIBER_NOTIFICATION: string[] = [
		"securitylake:DeleteSubscriberNotification",
	];
	/** IAM actions required for the DeregisterDataLakeDelegatedAdministrator API call. */
	static readonly DEREGISTER_DATA_LAKE_DELEGATED_ADMINISTRATOR: string[] = [
		"securitylake:DeregisterDataLakeDelegatedAdministrator",
	];
	/** IAM actions required for the GetDataLakeExceptionSubscription API call. */
	static readonly GET_DATA_LAKE_EXCEPTION_SUBSCRIPTION: string[] = [
		"securitylake:GetDataLakeExceptionSubscription",
	];
	/** IAM actions required for the GetDataLakeOrganizationConfiguration API call. */
	static readonly GET_DATA_LAKE_ORGANIZATION_CONFIGURATION: string[] = [
		"securitylake:GetDataLakeOrganizationConfiguration",
	];
	/** IAM actions required for the GetDataLakeSources API call. */
	static readonly GET_DATA_LAKE_SOURCES: string[] = [
		"securitylake:GetDataLakeSources",
	];
	/** IAM actions required for the GetSubscriber API call. */
	static readonly GET_SUBSCRIBER: string[] = ["securitylake:GetSubscriber"];
	/** IAM actions required for the ListDataLakeExceptions API call. */
	static readonly LIST_DATA_LAKE_EXCEPTIONS: string[] = [
		"securitylake:ListDataLakeExceptions",
	];
	/** IAM actions required for the ListDataLakes API call. */
	static readonly LIST_DATA_LAKES: string[] = ["securitylake:ListDataLakes"];
	/** IAM actions required for the ListLogSources API call. */
	static readonly LIST_LOG_SOURCES: string[] = ["securitylake:ListLogSources"];
	/** IAM actions required for the ListSubscribers API call. */
	static readonly LIST_SUBSCRIBERS: string[] = ["securitylake:ListSubscribers"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"securitylake:ListTagsForResource",
	];
	/** IAM actions required for the RegisterDataLakeDelegatedAdministrator API call. */
	static readonly REGISTER_DATA_LAKE_DELEGATED_ADMINISTRATOR: string[] = [
		"securitylake:RegisterDataLakeDelegatedAdministrator",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["securitylake:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["securitylake:UntagResource"];
	/** IAM actions required for the UpdateDataLake API call. */
	static readonly UPDATE_DATA_LAKE: string[] = [
		"iam:PassRole",
		"securitylake:UpdateDataLake",
	];
	/** IAM actions required for the UpdateDataLakeExceptionSubscription API call. */
	static readonly UPDATE_DATA_LAKE_EXCEPTION_SUBSCRIPTION: string[] = [
		"securitylake:UpdateDataLakeExceptionSubscription",
	];
	/** IAM actions required for the UpdateSubscriber API call. */
	static readonly UPDATE_SUBSCRIBER: string[] = [
		"securitylake:UpdateSubscriber",
	];
	/** IAM actions required for the UpdateSubscriberNotification API call. */
	static readonly UPDATE_SUBSCRIBER_NOTIFICATION: string[] = [
		"iam:PassRole",
		"securitylake:UpdateSubscriberNotification",
	];
}

/**
 * Condition key constants and builders for securitylake.
 */
export class SecurityLakeConditions {
	/** Condition keys applicable to the CreateDataLake action. */
	static readonly CREATE_DATA_LAKE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSubscriber action. */
	static readonly CREATE_SUBSCRIBER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
