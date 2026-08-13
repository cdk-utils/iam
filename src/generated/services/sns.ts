// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sns.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sns service.
 */
export class SNSActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sns";

	/** [PermissionManagement] sns:AddPermission */
	static readonly ADD_PERMISSION = "sns:AddPermission";
	/** [Read] sns:CheckIfPhoneNumberIsOptedOut */
	static readonly CHECK_IF_PHONE_NUMBER_IS_OPTED_OUT =
		"sns:CheckIfPhoneNumberIsOptedOut";
	/** [Write] sns:ConfirmSubscription */
	static readonly CONFIRM_SUBSCRIPTION = "sns:ConfirmSubscription";
	/** [Write] sns:CreatePlatformApplication */
	static readonly CREATE_PLATFORM_APPLICATION = "sns:CreatePlatformApplication";
	/** [Write] sns:CreatePlatformEndpoint */
	static readonly CREATE_PLATFORM_ENDPOINT = "sns:CreatePlatformEndpoint";
	/** [Write] sns:CreateSMSSandboxPhoneNumber */
	static readonly CREATE_SMS_SANDBOX_PHONE_NUMBER =
		"sns:CreateSMSSandboxPhoneNumber";
	/** [Write] sns:CreateTopic */
	static readonly CREATE_TOPIC = "sns:CreateTopic";
	/** [Write] sns:DeleteEndpoint */
	static readonly DELETE_ENDPOINT = "sns:DeleteEndpoint";
	/** [Write] sns:DeletePlatformApplication */
	static readonly DELETE_PLATFORM_APPLICATION = "sns:DeletePlatformApplication";
	/** [Write] sns:DeleteSMSSandboxPhoneNumber */
	static readonly DELETE_SMS_SANDBOX_PHONE_NUMBER =
		"sns:DeleteSMSSandboxPhoneNumber";
	/** [Write] sns:DeleteTopic */
	static readonly DELETE_TOPIC = "sns:DeleteTopic";
	/** [Read] sns:GetDataProtectionPolicy */
	static readonly GET_DATA_PROTECTION_POLICY = "sns:GetDataProtectionPolicy";
	/** [Read] sns:GetEndpointAttributes */
	static readonly GET_ENDPOINT_ATTRIBUTES = "sns:GetEndpointAttributes";
	/** [Read] sns:GetPlatformApplicationAttributes */
	static readonly GET_PLATFORM_APPLICATION_ATTRIBUTES =
		"sns:GetPlatformApplicationAttributes";
	/** [Read] sns:GetSMSAttributes */
	static readonly GET_SMS_ATTRIBUTES = "sns:GetSMSAttributes";
	/** [Read] sns:GetSMSSandboxAccountStatus */
	static readonly GET_SMS_SANDBOX_ACCOUNT_STATUS =
		"sns:GetSMSSandboxAccountStatus";
	/** [Read] sns:GetSubscriptionAttributes */
	static readonly GET_SUBSCRIPTION_ATTRIBUTES = "sns:GetSubscriptionAttributes";
	/** [Read] sns:GetTopicAttributes */
	static readonly GET_TOPIC_ATTRIBUTES = "sns:GetTopicAttributes";
	/** [List] sns:ListEndpointsByPlatformApplication */
	static readonly LIST_ENDPOINTS_BY_PLATFORM_APPLICATION =
		"sns:ListEndpointsByPlatformApplication";
	/** [List] sns:ListOriginationNumbers */
	static readonly LIST_ORIGINATION_NUMBERS = "sns:ListOriginationNumbers";
	/** [Read] sns:ListPhoneNumbersOptedOut */
	static readonly LIST_PHONE_NUMBERS_OPTED_OUT = "sns:ListPhoneNumbersOptedOut";
	/** [List] sns:ListPlatformApplications */
	static readonly LIST_PLATFORM_APPLICATIONS = "sns:ListPlatformApplications";
	/** [List] sns:ListSMSSandboxPhoneNumbers */
	static readonly LIST_SMS_SANDBOX_PHONE_NUMBERS =
		"sns:ListSMSSandboxPhoneNumbers";
	/** [List] sns:ListSubscriptions */
	static readonly LIST_SUBSCRIPTIONS = "sns:ListSubscriptions";
	/** [List] sns:ListSubscriptionsByTopic */
	static readonly LIST_SUBSCRIPTIONS_BY_TOPIC = "sns:ListSubscriptionsByTopic";
	/** [Read] sns:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "sns:ListTagsForResource";
	/** [List] sns:ListTopics */
	static readonly LIST_TOPICS = "sns:ListTopics";
	/** [Write] sns:OptInPhoneNumber */
	static readonly OPT_IN_PHONE_NUMBER = "sns:OptInPhoneNumber";
	/** [Write] sns:Publish */
	static readonly PUBLISH = "sns:Publish";
	/** [Write] sns:PutDataProtectionPolicy */
	static readonly PUT_DATA_PROTECTION_POLICY = "sns:PutDataProtectionPolicy";
	/** [PermissionManagement] sns:RemovePermission */
	static readonly REMOVE_PERMISSION = "sns:RemovePermission";
	/** [Write] sns:SetEndpointAttributes */
	static readonly SET_ENDPOINT_ATTRIBUTES = "sns:SetEndpointAttributes";
	/** [Write] sns:SetPlatformApplicationAttributes */
	static readonly SET_PLATFORM_APPLICATION_ATTRIBUTES =
		"sns:SetPlatformApplicationAttributes";
	/** [Write] sns:SetSMSAttributes */
	static readonly SET_SMS_ATTRIBUTES = "sns:SetSMSAttributes";
	/** [Write] sns:SetSubscriptionAttributes */
	static readonly SET_SUBSCRIPTION_ATTRIBUTES = "sns:SetSubscriptionAttributes";
	/** [PermissionManagement] sns:SetTopicAttributes */
	static readonly SET_TOPIC_ATTRIBUTES = "sns:SetTopicAttributes";
	/** [Write] sns:Subscribe */
	static readonly SUBSCRIBE = "sns:Subscribe";
	/** [Tagging] sns:TagResource */
	static readonly TAG_RESOURCE = "sns:TagResource";
	/** [Write] sns:Unsubscribe */
	static readonly UNSUBSCRIBE = "sns:Unsubscribe";
	/** [Tagging] sns:UntagResource */
	static readonly UNTAG_RESOURCE = "sns:UntagResource";
	/** [Write] sns:VerifySMSSandboxPhoneNumber */
	static readonly VERIFY_SMS_SANDBOX_PHONE_NUMBER =
		"sns:VerifySMSSandboxPhoneNumber";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SNSActions.CHECK_IF_PHONE_NUMBER_IS_OPTED_OUT,
		SNSActions.GET_DATA_PROTECTION_POLICY,
		SNSActions.GET_ENDPOINT_ATTRIBUTES,
		SNSActions.GET_PLATFORM_APPLICATION_ATTRIBUTES,
		SNSActions.GET_SMS_ATTRIBUTES,
		SNSActions.GET_SMS_SANDBOX_ACCOUNT_STATUS,
		SNSActions.GET_SUBSCRIPTION_ATTRIBUTES,
		SNSActions.GET_TOPIC_ATTRIBUTES,
		SNSActions.LIST_PHONE_NUMBERS_OPTED_OUT,
		SNSActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SNSActions.CONFIRM_SUBSCRIPTION,
		SNSActions.CREATE_PLATFORM_APPLICATION,
		SNSActions.CREATE_PLATFORM_ENDPOINT,
		SNSActions.CREATE_SMS_SANDBOX_PHONE_NUMBER,
		SNSActions.CREATE_TOPIC,
		SNSActions.DELETE_ENDPOINT,
		SNSActions.DELETE_PLATFORM_APPLICATION,
		SNSActions.DELETE_SMS_SANDBOX_PHONE_NUMBER,
		SNSActions.DELETE_TOPIC,
		SNSActions.OPT_IN_PHONE_NUMBER,
		SNSActions.PUBLISH,
		SNSActions.PUT_DATA_PROTECTION_POLICY,
		SNSActions.SET_ENDPOINT_ATTRIBUTES,
		SNSActions.SET_PLATFORM_APPLICATION_ATTRIBUTES,
		SNSActions.SET_SMS_ATTRIBUTES,
		SNSActions.SET_SUBSCRIPTION_ATTRIBUTES,
		SNSActions.SUBSCRIBE,
		SNSActions.UNSUBSCRIBE,
		SNSActions.VERIFY_SMS_SANDBOX_PHONE_NUMBER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SNSActions.LIST_ENDPOINTS_BY_PLATFORM_APPLICATION,
		SNSActions.LIST_ORIGINATION_NUMBERS,
		SNSActions.LIST_PLATFORM_APPLICATIONS,
		SNSActions.LIST_SMS_SANDBOX_PHONE_NUMBERS,
		SNSActions.LIST_SUBSCRIPTIONS,
		SNSActions.LIST_SUBSCRIPTIONS_BY_TOPIC,
		SNSActions.LIST_TOPICS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		SNSActions.ADD_PERMISSION,
		SNSActions.REMOVE_PERMISSION,
		SNSActions.SET_TOPIC_ATTRIBUTES,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SNSActions.TAG_RESOURCE,
		SNSActions.UNTAG_RESOURCE,
	];
}

const TopicArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sns:(?<region>[^:]*):(?<account>[^:]*):(?<topicName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for sns resources.
 */
export class SNSResources {
	/**
	 * Builds an ARN for the topic resource.
	 */
	static topic(props: {
		/** The TopicName component of the ARN. */
		readonly topicName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sns:${props.region ?? "*"}:${props.account ?? "*"}:${props.topicName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the topic resource.
	 */
	static isValidTopicArn(arn: string): boolean {
		return TopicArnRegex.test(arn);
	}

	/**
	 * Parses a topic ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTopicArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		topicName: string;
	} {
		const match = TopicArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid topic ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			topicName: match.groups!.topicName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for sns.
 */
export class SNSOperations {
	/** IAM actions required for the AddPermission API call. */
	static readonly ADD_PERMISSION: string[] = ["sns:AddPermission"];
	/** IAM actions required for the CheckIfPhoneNumberIsOptedOut API call. */
	static readonly CHECK_IF_PHONE_NUMBER_IS_OPTED_OUT: string[] = [
		"sns:CheckIfPhoneNumberIsOptedOut",
	];
	/** IAM actions required for the ConfirmSubscription API call. */
	static readonly CONFIRM_SUBSCRIPTION: string[] = ["sns:ConfirmSubscription"];
	/** IAM actions required for the CreatePlatformApplication API call. */
	static readonly CREATE_PLATFORM_APPLICATION: string[] = [
		"sns:CreatePlatformApplication",
		"iam:PassRole",
	];
	/** IAM actions required for the CreatePlatformEndpoint API call. */
	static readonly CREATE_PLATFORM_ENDPOINT: string[] = [
		"sns:CreatePlatformEndpoint",
	];
	/** IAM actions required for the CreateSMSSandboxPhoneNumber API call. */
	static readonly CREATE_SMS_SANDBOX_PHONE_NUMBER: string[] = [
		"sns:CreateSMSSandboxPhoneNumber",
	];
	/** IAM actions required for the CreateTopic API call. */
	static readonly CREATE_TOPIC: string[] = [
		"sns:CreateTopic",
		"iam:PassRole",
		"sns:TagResource",
	];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DELETE_ENDPOINT: string[] = ["sns:DeleteEndpoint"];
	/** IAM actions required for the DeletePlatformApplication API call. */
	static readonly DELETE_PLATFORM_APPLICATION: string[] = [
		"sns:DeletePlatformApplication",
	];
	/** IAM actions required for the DeleteSMSSandboxPhoneNumber API call. */
	static readonly DELETE_SMS_SANDBOX_PHONE_NUMBER: string[] = [
		"sns:DeleteSMSSandboxPhoneNumber",
	];
	/** IAM actions required for the DeleteTopic API call. */
	static readonly DELETE_TOPIC: string[] = ["sns:DeleteTopic"];
	/** IAM actions required for the GetDataProtectionPolicy API call. */
	static readonly GET_DATA_PROTECTION_POLICY: string[] = [
		"sns:GetDataProtectionPolicy",
	];
	/** IAM actions required for the GetEndpointAttributes API call. */
	static readonly GET_ENDPOINT_ATTRIBUTES: string[] = [
		"sns:GetEndpointAttributes",
	];
	/** IAM actions required for the GetPlatformApplicationAttributes API call. */
	static readonly GET_PLATFORM_APPLICATION_ATTRIBUTES: string[] = [
		"sns:GetPlatformApplicationAttributes",
	];
	/** IAM actions required for the GetSMSAttributes API call. */
	static readonly GET_SMS_ATTRIBUTES: string[] = ["sns:GetSMSAttributes"];
	/** IAM actions required for the GetSMSSandboxAccountStatus API call. */
	static readonly GET_SMS_SANDBOX_ACCOUNT_STATUS: string[] = [
		"sns:GetSMSSandboxAccountStatus",
	];
	/** IAM actions required for the GetSubscriptionAttributes API call. */
	static readonly GET_SUBSCRIPTION_ATTRIBUTES: string[] = [
		"sns:GetSubscriptionAttributes",
	];
	/** IAM actions required for the GetTopicAttributes API call. */
	static readonly GET_TOPIC_ATTRIBUTES: string[] = ["sns:GetTopicAttributes"];
	/** IAM actions required for the ListEndpointsByPlatformApplication API call. */
	static readonly LIST_ENDPOINTS_BY_PLATFORM_APPLICATION: string[] = [
		"sns:ListEndpointsByPlatformApplication",
	];
	/** IAM actions required for the ListOriginationNumbers API call. */
	static readonly LIST_ORIGINATION_NUMBERS: string[] = [
		"sns:ListOriginationNumbers",
	];
	/** IAM actions required for the ListPhoneNumbersOptedOut API call. */
	static readonly LIST_PHONE_NUMBERS_OPTED_OUT: string[] = [
		"sns:ListPhoneNumbersOptedOut",
	];
	/** IAM actions required for the ListPlatformApplications API call. */
	static readonly LIST_PLATFORM_APPLICATIONS: string[] = [
		"sns:ListPlatformApplications",
	];
	/** IAM actions required for the ListSMSSandboxPhoneNumbers API call. */
	static readonly LIST_SMS_SANDBOX_PHONE_NUMBERS: string[] = [
		"sns:ListSMSSandboxPhoneNumbers",
	];
	/** IAM actions required for the ListSubscriptions API call. */
	static readonly LIST_SUBSCRIPTIONS: string[] = ["sns:ListSubscriptions"];
	/** IAM actions required for the ListSubscriptionsByTopic API call. */
	static readonly LIST_SUBSCRIPTIONS_BY_TOPIC: string[] = [
		"sns:ListSubscriptionsByTopic",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"sns:ListTagsForResource",
	];
	/** IAM actions required for the ListTopics API call. */
	static readonly LIST_TOPICS: string[] = ["sns:ListTopics"];
	/** IAM actions required for the OptInPhoneNumber API call. */
	static readonly OPT_IN_PHONE_NUMBER: string[] = ["sns:OptInPhoneNumber"];
	/** IAM actions required for the Publish API call. */
	static readonly PUBLISH: string[] = ["sns:Publish"];
	/** IAM actions required for the PublishBatch API call. */
	static readonly PUBLISH_BATCH: string[] = ["sns:Publish"];
	/** IAM actions required for the PutDataProtectionPolicy API call. */
	static readonly PUT_DATA_PROTECTION_POLICY: string[] = [
		"sns:PutDataProtectionPolicy",
	];
	/** IAM actions required for the RemovePermission API call. */
	static readonly REMOVE_PERMISSION: string[] = ["sns:RemovePermission"];
	/** IAM actions required for the SetEndpointAttributes API call. */
	static readonly SET_ENDPOINT_ATTRIBUTES: string[] = [
		"sns:SetEndpointAttributes",
	];
	/** IAM actions required for the SetPlatformApplicationAttributes API call. */
	static readonly SET_PLATFORM_APPLICATION_ATTRIBUTES: string[] = [
		"iam:PassRole",
		"sns:SetPlatformApplicationAttributes",
	];
	/** IAM actions required for the SetSMSAttributes API call. */
	static readonly SET_SMS_ATTRIBUTES: string[] = [
		"iam:PassRole",
		"sns:SetSMSAttributes",
	];
	/** IAM actions required for the SetSubscriptionAttributes API call. */
	static readonly SET_SUBSCRIPTION_ATTRIBUTES: string[] = [
		"iam:PassRole",
		"sns:SetSubscriptionAttributes",
	];
	/** IAM actions required for the SetTopicAttributes API call. */
	static readonly SET_TOPIC_ATTRIBUTES: string[] = [
		"iam:PassRole",
		"sns:SetTopicAttributes",
	];
	/** IAM actions required for the Subscribe API call. */
	static readonly SUBSCRIBE: string[] = ["iam:PassRole", "sns:Subscribe"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["sns:TagResource"];
	/** IAM actions required for the Unsubscribe API call. */
	static readonly UNSUBSCRIBE: string[] = ["sns:Unsubscribe"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["sns:UntagResource"];
	/** IAM actions required for the VerifySMSSandboxPhoneNumber API call. */
	static readonly VERIFY_SMS_SANDBOX_PHONE_NUMBER: string[] = [
		"sns:VerifySMSSandboxPhoneNumber",
	];
}

/**
 * Condition key constants and builders for sns.
 */
export class SNSConditions {
	/** Condition keys applicable to the CreateTopic action. */
	static readonly CREATE_TOPIC_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Subscribe action. */
	static readonly SUBSCRIBE_CONDITION_KEYS: string[] = [
		"sns:Endpoint",
		"sns:Protocol",
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
	/** Condition key: sns:Endpoint (String) */
	static readonly ENDPOINT = "sns:Endpoint";
	/** Condition key: sns:Protocol (String) */
	static readonly PROTOCOL = "sns:Protocol";

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
	 * Generates a condition block for `sns:Endpoint`.
	 */
	static endpoint(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sns:Endpoint": value } };
	}

	/**
	 * Generates a condition block for `sns:Protocol`.
	 */
	static protocol(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sns:Protocol": value } };
	}
}
