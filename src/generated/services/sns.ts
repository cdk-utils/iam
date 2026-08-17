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
	static readonly AddPermission = "sns:AddPermission";
	/** [Read] sns:CheckIfPhoneNumberIsOptedOut */
	static readonly CheckIfPhoneNumberIsOptedOut =
		"sns:CheckIfPhoneNumberIsOptedOut";
	/** [Write] sns:ConfirmSubscription */
	static readonly ConfirmSubscription = "sns:ConfirmSubscription";
	/** [Write] sns:CreatePlatformApplication */
	static readonly CreatePlatformApplication = "sns:CreatePlatformApplication";
	/** [Write] sns:CreatePlatformEndpoint */
	static readonly CreatePlatformEndpoint = "sns:CreatePlatformEndpoint";
	/** [Write] sns:CreateSMSSandboxPhoneNumber */
	static readonly CreateSMSSandboxPhoneNumber =
		"sns:CreateSMSSandboxPhoneNumber";
	/** [Write] sns:CreateTopic */
	static readonly CreateTopic = "sns:CreateTopic";
	/** [Write] sns:DeleteEndpoint */
	static readonly DeleteEndpoint = "sns:DeleteEndpoint";
	/** [Write] sns:DeletePlatformApplication */
	static readonly DeletePlatformApplication = "sns:DeletePlatformApplication";
	/** [Write] sns:DeleteSMSSandboxPhoneNumber */
	static readonly DeleteSMSSandboxPhoneNumber =
		"sns:DeleteSMSSandboxPhoneNumber";
	/** [Write] sns:DeleteTopic */
	static readonly DeleteTopic = "sns:DeleteTopic";
	/** [Read] sns:GetDataProtectionPolicy */
	static readonly actionGetDataProtectionPolicy = "sns:GetDataProtectionPolicy";
	/** [Read] sns:GetEndpointAttributes */
	static readonly actionGetEndpointAttributes = "sns:GetEndpointAttributes";
	/** [Read] sns:GetPlatformApplicationAttributes */
	static readonly actionGetPlatformApplicationAttributes =
		"sns:GetPlatformApplicationAttributes";
	/** [Read] sns:GetSMSAttributes */
	static readonly actionGetSMSAttributes = "sns:GetSMSAttributes";
	/** [Read] sns:GetSMSSandboxAccountStatus */
	static readonly actionGetSMSSandboxAccountStatus =
		"sns:GetSMSSandboxAccountStatus";
	/** [Read] sns:GetSubscriptionAttributes */
	static readonly actionGetSubscriptionAttributes =
		"sns:GetSubscriptionAttributes";
	/** [Read] sns:GetTopicAttributes */
	static readonly actionGetTopicAttributes = "sns:GetTopicAttributes";
	/** [List] sns:ListEndpointsByPlatformApplication */
	static readonly ListEndpointsByPlatformApplication =
		"sns:ListEndpointsByPlatformApplication";
	/** [List] sns:ListOriginationNumbers */
	static readonly ListOriginationNumbers = "sns:ListOriginationNumbers";
	/** [Read] sns:ListPhoneNumbersOptedOut */
	static readonly ListPhoneNumbersOptedOut = "sns:ListPhoneNumbersOptedOut";
	/** [List] sns:ListPlatformApplications */
	static readonly ListPlatformApplications = "sns:ListPlatformApplications";
	/** [List] sns:ListSMSSandboxPhoneNumbers */
	static readonly ListSMSSandboxPhoneNumbers = "sns:ListSMSSandboxPhoneNumbers";
	/** [List] sns:ListSubscriptions */
	static readonly ListSubscriptions = "sns:ListSubscriptions";
	/** [List] sns:ListSubscriptionsByTopic */
	static readonly ListSubscriptionsByTopic = "sns:ListSubscriptionsByTopic";
	/** [Read] sns:ListTagsForResource */
	static readonly ListTagsForResource = "sns:ListTagsForResource";
	/** [List] sns:ListTopics */
	static readonly ListTopics = "sns:ListTopics";
	/** [Write] sns:OptInPhoneNumber */
	static readonly OptInPhoneNumber = "sns:OptInPhoneNumber";
	/** [Write] sns:Publish */
	static readonly Publish = "sns:Publish";
	/** [Write] sns:PutDataProtectionPolicy */
	static readonly PutDataProtectionPolicy = "sns:PutDataProtectionPolicy";
	/** [PermissionManagement] sns:RemovePermission */
	static readonly RemovePermission = "sns:RemovePermission";
	/** [Write] sns:SetEndpointAttributes */
	static readonly actionSetEndpointAttributes = "sns:SetEndpointAttributes";
	/** [Write] sns:SetPlatformApplicationAttributes */
	static readonly actionSetPlatformApplicationAttributes =
		"sns:SetPlatformApplicationAttributes";
	/** [Write] sns:SetSMSAttributes */
	static readonly actionSetSMSAttributes = "sns:SetSMSAttributes";
	/** [Write] sns:SetSubscriptionAttributes */
	static readonly actionSetSubscriptionAttributes =
		"sns:SetSubscriptionAttributes";
	/** [PermissionManagement] sns:SetTopicAttributes */
	static readonly actionSetTopicAttributes = "sns:SetTopicAttributes";
	/** [Write] sns:Subscribe */
	static readonly Subscribe = "sns:Subscribe";
	/** [Tagging] sns:TagResource */
	static readonly TagResource = "sns:TagResource";
	/** [Write] sns:Unsubscribe */
	static readonly Unsubscribe = "sns:Unsubscribe";
	/** [Tagging] sns:UntagResource */
	static readonly UntagResource = "sns:UntagResource";
	/** [Write] sns:VerifySMSSandboxPhoneNumber */
	static readonly VerifySMSSandboxPhoneNumber =
		"sns:VerifySMSSandboxPhoneNumber";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SNSActions.CheckIfPhoneNumberIsOptedOut,
		SNSActions.actionGetDataProtectionPolicy,
		SNSActions.actionGetEndpointAttributes,
		SNSActions.actionGetPlatformApplicationAttributes,
		SNSActions.actionGetSMSAttributes,
		SNSActions.actionGetSMSSandboxAccountStatus,
		SNSActions.actionGetSubscriptionAttributes,
		SNSActions.actionGetTopicAttributes,
		SNSActions.ListPhoneNumbersOptedOut,
		SNSActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SNSActions.ConfirmSubscription,
		SNSActions.CreatePlatformApplication,
		SNSActions.CreatePlatformEndpoint,
		SNSActions.CreateSMSSandboxPhoneNumber,
		SNSActions.CreateTopic,
		SNSActions.DeleteEndpoint,
		SNSActions.DeletePlatformApplication,
		SNSActions.DeleteSMSSandboxPhoneNumber,
		SNSActions.DeleteTopic,
		SNSActions.OptInPhoneNumber,
		SNSActions.Publish,
		SNSActions.PutDataProtectionPolicy,
		SNSActions.actionSetEndpointAttributes,
		SNSActions.actionSetPlatformApplicationAttributes,
		SNSActions.actionSetSMSAttributes,
		SNSActions.actionSetSubscriptionAttributes,
		SNSActions.Subscribe,
		SNSActions.Unsubscribe,
		SNSActions.VerifySMSSandboxPhoneNumber,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SNSActions.ListEndpointsByPlatformApplication,
		SNSActions.ListOriginationNumbers,
		SNSActions.ListPlatformApplications,
		SNSActions.ListSMSSandboxPhoneNumbers,
		SNSActions.ListSubscriptions,
		SNSActions.ListSubscriptionsByTopic,
		SNSActions.ListTopics,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		SNSActions.AddPermission,
		SNSActions.RemovePermission,
		SNSActions.actionSetTopicAttributes,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SNSActions.TagResource,
		SNSActions.UntagResource,
	];
}

/**
 * Properties for building a topic ARN.
 */
export interface SNSTopicArnProps {
	/** The TopicName component of the ARN. */
	readonly topicName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a topic ARN.
 */
export interface SNSTopicArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TopicName component. */
	readonly topicName: string;
}

const TopicArnRegex =
	/^arn:(?<partition>[^:]+):sns:(?<region>[^:]*):(?<account>[^:]*):(?<topicName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for sns resources.
 */
export class SNSResources {
	/**
	 * Builds an ARN for the topic resource.
	 */
	static topic(props: SNSTopicArnProps): string {
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
	static parseTopicArn(arn: string): SNSTopicArnComponents {
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
	static readonly AddPermission: string[] = ["sns:AddPermission"];
	/** IAM actions required for the CheckIfPhoneNumberIsOptedOut API call. */
	static readonly CheckIfPhoneNumberIsOptedOut: string[] = [
		"sns:CheckIfPhoneNumberIsOptedOut",
	];
	/** IAM actions required for the ConfirmSubscription API call. */
	static readonly ConfirmSubscription: string[] = ["sns:ConfirmSubscription"];
	/** IAM actions required for the CreatePlatformApplication API call. */
	static readonly CreatePlatformApplication: string[] = [
		"sns:CreatePlatformApplication",
		"iam:PassRole",
	];
	/** IAM actions required for the CreatePlatformEndpoint API call. */
	static readonly CreatePlatformEndpoint: string[] = [
		"sns:CreatePlatformEndpoint",
	];
	/** IAM actions required for the CreateSMSSandboxPhoneNumber API call. */
	static readonly CreateSMSSandboxPhoneNumber: string[] = [
		"sns:CreateSMSSandboxPhoneNumber",
	];
	/** IAM actions required for the CreateTopic API call. */
	static readonly CreateTopic: string[] = [
		"sns:CreateTopic",
		"iam:PassRole",
		"sns:PutDataProtectionPolicy",
		"sns:TagResource",
	];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DeleteEndpoint: string[] = ["sns:DeleteEndpoint"];
	/** IAM actions required for the DeletePlatformApplication API call. */
	static readonly DeletePlatformApplication: string[] = [
		"sns:DeletePlatformApplication",
	];
	/** IAM actions required for the DeleteSMSSandboxPhoneNumber API call. */
	static readonly DeleteSMSSandboxPhoneNumber: string[] = [
		"sns:DeleteSMSSandboxPhoneNumber",
	];
	/** IAM actions required for the DeleteTopic API call. */
	static readonly DeleteTopic: string[] = ["sns:DeleteTopic"];
	/** IAM actions required for the GetDataProtectionPolicy API call. */
	static readonly opGetDataProtectionPolicy: string[] = [
		"sns:GetDataProtectionPolicy",
	];
	/** IAM actions required for the GetEndpointAttributes API call. */
	static readonly opGetEndpointAttributes: string[] = [
		"sns:GetEndpointAttributes",
	];
	/** IAM actions required for the GetPlatformApplicationAttributes API call. */
	static readonly opGetPlatformApplicationAttributes: string[] = [
		"sns:GetPlatformApplicationAttributes",
	];
	/** IAM actions required for the GetSMSAttributes API call. */
	static readonly opGetSMSAttributes: string[] = ["sns:GetSMSAttributes"];
	/** IAM actions required for the GetSMSSandboxAccountStatus API call. */
	static readonly opGetSMSSandboxAccountStatus: string[] = [
		"sns:GetSMSSandboxAccountStatus",
	];
	/** IAM actions required for the GetSubscriptionAttributes API call. */
	static readonly opGetSubscriptionAttributes: string[] = [
		"sns:GetSubscriptionAttributes",
	];
	/** IAM actions required for the GetTopicAttributes API call. */
	static readonly opGetTopicAttributes: string[] = ["sns:GetTopicAttributes"];
	/** IAM actions required for the ListEndpointsByPlatformApplication API call. */
	static readonly ListEndpointsByPlatformApplication: string[] = [
		"sns:ListEndpointsByPlatformApplication",
	];
	/** IAM actions required for the ListOriginationNumbers API call. */
	static readonly ListOriginationNumbers: string[] = [
		"sns:ListOriginationNumbers",
	];
	/** IAM actions required for the ListPhoneNumbersOptedOut API call. */
	static readonly ListPhoneNumbersOptedOut: string[] = [
		"sns:ListPhoneNumbersOptedOut",
	];
	/** IAM actions required for the ListPlatformApplications API call. */
	static readonly ListPlatformApplications: string[] = [
		"sns:ListPlatformApplications",
	];
	/** IAM actions required for the ListSMSSandboxPhoneNumbers API call. */
	static readonly ListSMSSandboxPhoneNumbers: string[] = [
		"sns:ListSMSSandboxPhoneNumbers",
	];
	/** IAM actions required for the ListSubscriptions API call. */
	static readonly ListSubscriptions: string[] = ["sns:ListSubscriptions"];
	/** IAM actions required for the ListSubscriptionsByTopic API call. */
	static readonly ListSubscriptionsByTopic: string[] = [
		"sns:ListSubscriptionsByTopic",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["sns:ListTagsForResource"];
	/** IAM actions required for the ListTopics API call. */
	static readonly ListTopics: string[] = ["sns:ListTopics"];
	/** IAM actions required for the OptInPhoneNumber API call. */
	static readonly OptInPhoneNumber: string[] = ["sns:OptInPhoneNumber"];
	/** IAM actions required for the Publish API call. */
	static readonly Publish: string[] = ["sns:Publish"];
	/** IAM actions required for the PublishBatch API call. */
	static readonly PublishBatch: string[] = ["sns:Publish"];
	/** IAM actions required for the PutDataProtectionPolicy API call. */
	static readonly PutDataProtectionPolicy: string[] = [
		"sns:PutDataProtectionPolicy",
	];
	/** IAM actions required for the RemovePermission API call. */
	static readonly RemovePermission: string[] = ["sns:RemovePermission"];
	/** IAM actions required for the SetEndpointAttributes API call. */
	static readonly opSetEndpointAttributes: string[] = [
		"sns:SetEndpointAttributes",
	];
	/** IAM actions required for the SetPlatformApplicationAttributes API call. */
	static readonly opSetPlatformApplicationAttributes: string[] = [
		"iam:PassRole",
		"sns:SetPlatformApplicationAttributes",
	];
	/** IAM actions required for the SetSMSAttributes API call. */
	static readonly opSetSMSAttributes: string[] = [
		"iam:PassRole",
		"sns:SetSMSAttributes",
	];
	/** IAM actions required for the SetSubscriptionAttributes API call. */
	static readonly opSetSubscriptionAttributes: string[] = [
		"iam:PassRole",
		"sns:SetSubscriptionAttributes",
	];
	/** IAM actions required for the SetTopicAttributes API call. */
	static readonly opSetTopicAttributes: string[] = [
		"iam:PassRole",
		"sns:SetTopicAttributes",
	];
	/** IAM actions required for the Subscribe API call. */
	static readonly Subscribe: string[] = ["iam:PassRole", "sns:Subscribe"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["sns:TagResource"];
	/** IAM actions required for the Unsubscribe API call. */
	static readonly Unsubscribe: string[] = ["sns:Unsubscribe"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["sns:UntagResource"];
	/** IAM actions required for the VerifySMSSandboxPhoneNumber API call. */
	static readonly VerifySMSSandboxPhoneNumber: string[] = [
		"sns:VerifySMSSandboxPhoneNumber",
	];
}

/**
 * Condition key constants and builders for sns.
 */
export class SNSConditions {
	/** Condition keys applicable to the CreateTopic action. */
	static readonly CreateTopicConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Subscribe action. */
	static readonly SubscribeConditionKeys: string[] = [
		"sns:Endpoint",
		"sns:Protocol",
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
