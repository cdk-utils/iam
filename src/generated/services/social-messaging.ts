// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/social-messaging.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the social-messaging service.
 */
export class SocialMessagingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "social-messaging";

	/** [Write] social-messaging:AssociateWhatsAppBusinessAccount */
	static readonly ASSOCIATE_WHATS_APP_BUSINESS_ACCOUNT =
		"social-messaging:AssociateWhatsAppBusinessAccount";
	/** [Write] social-messaging:CreateWhatsAppFlow */
	static readonly CREATE_WHATS_APP_FLOW = "social-messaging:CreateWhatsAppFlow";
	/** [Write] social-messaging:CreateWhatsAppMessageTemplate */
	static readonly CREATE_WHATS_APP_MESSAGE_TEMPLATE =
		"social-messaging:CreateWhatsAppMessageTemplate";
	/** [Write] social-messaging:CreateWhatsAppMessageTemplateFromLibrary */
	static readonly CREATE_WHATS_APP_MESSAGE_TEMPLATE_FROM_LIBRARY =
		"social-messaging:CreateWhatsAppMessageTemplateFromLibrary";
	/** [Write] social-messaging:CreateWhatsAppMessageTemplateMedia */
	static readonly CREATE_WHATS_APP_MESSAGE_TEMPLATE_MEDIA =
		"social-messaging:CreateWhatsAppMessageTemplateMedia";
	/** [Write] social-messaging:DeleteWhatsAppFlow */
	static readonly DELETE_WHATS_APP_FLOW = "social-messaging:DeleteWhatsAppFlow";
	/** [Write] social-messaging:DeleteWhatsAppMessageMedia */
	static readonly DELETE_WHATS_APP_MESSAGE_MEDIA =
		"social-messaging:DeleteWhatsAppMessageMedia";
	/** [Write] social-messaging:DeleteWhatsAppMessageTemplate */
	static readonly DELETE_WHATS_APP_MESSAGE_TEMPLATE =
		"social-messaging:DeleteWhatsAppMessageTemplate";
	/** [Write] social-messaging:DeprecateWhatsAppFlow */
	static readonly DEPRECATE_WHATS_APP_FLOW =
		"social-messaging:DeprecateWhatsAppFlow";
	/** [Write] social-messaging:DisassociateWhatsAppBusinessAccount */
	static readonly DISASSOCIATE_WHATS_APP_BUSINESS_ACCOUNT =
		"social-messaging:DisassociateWhatsAppBusinessAccount";
	/** [Read] social-messaging:GetLinkedWhatsAppBusinessAccount */
	static readonly GET_LINKED_WHATS_APP_BUSINESS_ACCOUNT =
		"social-messaging:GetLinkedWhatsAppBusinessAccount";
	/** [Read] social-messaging:GetLinkedWhatsAppBusinessAccountPhoneNumber */
	static readonly GET_LINKED_WHATS_APP_BUSINESS_ACCOUNT_PHONE_NUMBER =
		"social-messaging:GetLinkedWhatsAppBusinessAccountPhoneNumber";
	/** [Read] social-messaging:GetWhatsAppFlow */
	static readonly GET_WHATS_APP_FLOW = "social-messaging:GetWhatsAppFlow";
	/** [Read] social-messaging:GetWhatsAppFlowPreview */
	static readonly GET_WHATS_APP_FLOW_PREVIEW =
		"social-messaging:GetWhatsAppFlowPreview";
	/** [Write] social-messaging:GetWhatsAppMessageMedia */
	static readonly GET_WHATS_APP_MESSAGE_MEDIA =
		"social-messaging:GetWhatsAppMessageMedia";
	/** [Read] social-messaging:GetWhatsAppMessageTemplate */
	static readonly GET_WHATS_APP_MESSAGE_TEMPLATE =
		"social-messaging:GetWhatsAppMessageTemplate";
	/** [List] social-messaging:ListLinkedWhatsAppBusinessAccounts */
	static readonly LIST_LINKED_WHATS_APP_BUSINESS_ACCOUNTS =
		"social-messaging:ListLinkedWhatsAppBusinessAccounts";
	/** [Read] social-messaging:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"social-messaging:ListTagsForResource";
	/** [List] social-messaging:ListWhatsAppFlowAssets */
	static readonly LIST_WHATS_APP_FLOW_ASSETS =
		"social-messaging:ListWhatsAppFlowAssets";
	/** [List] social-messaging:ListWhatsAppFlows */
	static readonly LIST_WHATS_APP_FLOWS = "social-messaging:ListWhatsAppFlows";
	/** [List] social-messaging:ListWhatsAppMessageTemplates */
	static readonly LIST_WHATS_APP_MESSAGE_TEMPLATES =
		"social-messaging:ListWhatsAppMessageTemplates";
	/** [List] social-messaging:ListWhatsAppTemplateLibrary */
	static readonly LIST_WHATS_APP_TEMPLATE_LIBRARY =
		"social-messaging:ListWhatsAppTemplateLibrary";
	/** [Write] social-messaging:PostWhatsAppMessageMedia */
	static readonly POST_WHATS_APP_MESSAGE_MEDIA =
		"social-messaging:PostWhatsAppMessageMedia";
	/** [Write] social-messaging:PublishWhatsAppFlow */
	static readonly PUBLISH_WHATS_APP_FLOW =
		"social-messaging:PublishWhatsAppFlow";
	/** [Write] social-messaging:PutWhatsAppBusinessAccountEventDestinations */
	static readonly PUT_WHATS_APP_BUSINESS_ACCOUNT_EVENT_DESTINATIONS =
		"social-messaging:PutWhatsAppBusinessAccountEventDestinations";
	/** [Write] social-messaging:SendWhatsAppMessage */
	static readonly SEND_WHATS_APP_MESSAGE =
		"social-messaging:SendWhatsAppMessage";
	/** [Tagging] social-messaging:TagResource */
	static readonly TAG_RESOURCE = "social-messaging:TagResource";
	/** [Tagging] social-messaging:UntagResource */
	static readonly UNTAG_RESOURCE = "social-messaging:UntagResource";
	/** [Write] social-messaging:UpdateWhatsAppFlow */
	static readonly UPDATE_WHATS_APP_FLOW = "social-messaging:UpdateWhatsAppFlow";
	/** [Write] social-messaging:UpdateWhatsAppFlowAssets */
	static readonly UPDATE_WHATS_APP_FLOW_ASSETS =
		"social-messaging:UpdateWhatsAppFlowAssets";
	/** [Write] social-messaging:UpdateWhatsAppMessageTemplate */
	static readonly UPDATE_WHATS_APP_MESSAGE_TEMPLATE =
		"social-messaging:UpdateWhatsAppMessageTemplate";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SocialMessagingActions.GET_LINKED_WHATS_APP_BUSINESS_ACCOUNT,
		SocialMessagingActions.GET_LINKED_WHATS_APP_BUSINESS_ACCOUNT_PHONE_NUMBER,
		SocialMessagingActions.GET_WHATS_APP_FLOW,
		SocialMessagingActions.GET_WHATS_APP_FLOW_PREVIEW,
		SocialMessagingActions.GET_WHATS_APP_MESSAGE_TEMPLATE,
		SocialMessagingActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SocialMessagingActions.ASSOCIATE_WHATS_APP_BUSINESS_ACCOUNT,
		SocialMessagingActions.CREATE_WHATS_APP_FLOW,
		SocialMessagingActions.CREATE_WHATS_APP_MESSAGE_TEMPLATE,
		SocialMessagingActions.CREATE_WHATS_APP_MESSAGE_TEMPLATE_FROM_LIBRARY,
		SocialMessagingActions.CREATE_WHATS_APP_MESSAGE_TEMPLATE_MEDIA,
		SocialMessagingActions.DELETE_WHATS_APP_FLOW,
		SocialMessagingActions.DELETE_WHATS_APP_MESSAGE_MEDIA,
		SocialMessagingActions.DELETE_WHATS_APP_MESSAGE_TEMPLATE,
		SocialMessagingActions.DEPRECATE_WHATS_APP_FLOW,
		SocialMessagingActions.DISASSOCIATE_WHATS_APP_BUSINESS_ACCOUNT,
		SocialMessagingActions.GET_WHATS_APP_MESSAGE_MEDIA,
		SocialMessagingActions.POST_WHATS_APP_MESSAGE_MEDIA,
		SocialMessagingActions.PUBLISH_WHATS_APP_FLOW,
		SocialMessagingActions.PUT_WHATS_APP_BUSINESS_ACCOUNT_EVENT_DESTINATIONS,
		SocialMessagingActions.SEND_WHATS_APP_MESSAGE,
		SocialMessagingActions.UPDATE_WHATS_APP_FLOW,
		SocialMessagingActions.UPDATE_WHATS_APP_FLOW_ASSETS,
		SocialMessagingActions.UPDATE_WHATS_APP_MESSAGE_TEMPLATE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SocialMessagingActions.LIST_LINKED_WHATS_APP_BUSINESS_ACCOUNTS,
		SocialMessagingActions.LIST_WHATS_APP_FLOW_ASSETS,
		SocialMessagingActions.LIST_WHATS_APP_FLOWS,
		SocialMessagingActions.LIST_WHATS_APP_MESSAGE_TEMPLATES,
		SocialMessagingActions.LIST_WHATS_APP_TEMPLATE_LIBRARY,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SocialMessagingActions.TAG_RESOURCE,
		SocialMessagingActions.UNTAG_RESOURCE,
	];
}

const PhoneNumberIdArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):social-messaging:(?<region>[^:]*):(?<account>[^:]*):phone-number-id/(?<originationPhoneNumberId>[^:/?]+)$",
);
const WabaArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):social-messaging:(?<region>[^:]*):(?<account>[^:]*):waba/(?<wabaId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for social-messaging resources.
 */
export class SocialMessagingResources {
	/**
	 * Builds an ARN for the phone-number-id resource.
	 */
	static phoneNumberId(props: {
		/** The OriginationPhoneNumberId component of the ARN. */
		readonly originationPhoneNumberId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:social-messaging:${props.region ?? "*"}:${props.account ?? "*"}:phone-number-id/${props.originationPhoneNumberId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the phone-number-id resource.
	 */
	static isValidPhoneNumberIdArn(arn: string): boolean {
		return PhoneNumberIdArnRegex.test(arn);
	}

	/**
	 * Parses a phone-number-id ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePhoneNumberIdArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		originationPhoneNumberId: string;
	} {
		const match = PhoneNumberIdArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid phone-number-id ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			originationPhoneNumberId: match.groups!.originationPhoneNumberId,
		};
	}

	/**
	 * Builds an ARN for the waba resource.
	 */
	static waba(props: {
		/** The WabaId component of the ARN. */
		readonly wabaId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:social-messaging:${props.region ?? "*"}:${props.account ?? "*"}:waba/${props.wabaId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the waba resource.
	 */
	static isValidWabaArn(arn: string): boolean {
		return WabaArnRegex.test(arn);
	}

	/**
	 * Parses a waba ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWabaArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		wabaId: string;
	} {
		const match = WabaArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid waba ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			wabaId: match.groups!.wabaId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for social-messaging.
 */
export class SocialMessagingOperations {
	/** IAM actions required for the AssociateWhatsAppBusinessAccount API call. */
	static readonly ASSOCIATE_WHATS_APP_BUSINESS_ACCOUNT: string[] = [
		"social-messaging:AssociateWhatsAppBusinessAccount",
		"iam:PassRole",
		"social-messaging:TagResource",
	];
	/** IAM actions required for the CreateWhatsAppDataset API call. */
	static readonly CREATE_WHATS_APP_DATASET: string[] = [];
	/** IAM actions required for the CreateWhatsAppFlow API call. */
	static readonly CREATE_WHATS_APP_FLOW: string[] = [
		"social-messaging:CreateWhatsAppFlow",
	];
	/** IAM actions required for the CreateWhatsAppMessageTemplate API call. */
	static readonly CREATE_WHATS_APP_MESSAGE_TEMPLATE: string[] = [
		"social-messaging:CreateWhatsAppMessageTemplate",
	];
	/** IAM actions required for the CreateWhatsAppMessageTemplateFromLibrary API call. */
	static readonly CREATE_WHATS_APP_MESSAGE_TEMPLATE_FROM_LIBRARY: string[] = [
		"social-messaging:CreateWhatsAppMessageTemplateFromLibrary",
	];
	/** IAM actions required for the CreateWhatsAppMessageTemplateMedia API call. */
	static readonly CREATE_WHATS_APP_MESSAGE_TEMPLATE_MEDIA: string[] = [
		"social-messaging:CreateWhatsAppMessageTemplateMedia",
	];
	/** IAM actions required for the DeleteWhatsAppFlow API call. */
	static readonly DELETE_WHATS_APP_FLOW: string[] = [
		"social-messaging:DeleteWhatsAppFlow",
	];
	/** IAM actions required for the DeleteWhatsAppMessageMedia API call. */
	static readonly DELETE_WHATS_APP_MESSAGE_MEDIA: string[] = [
		"social-messaging:DeleteWhatsAppMessageMedia",
	];
	/** IAM actions required for the DeleteWhatsAppMessageTemplate API call. */
	static readonly DELETE_WHATS_APP_MESSAGE_TEMPLATE: string[] = [
		"social-messaging:DeleteWhatsAppMessageTemplate",
	];
	/** IAM actions required for the DeprecateWhatsAppFlow API call. */
	static readonly DEPRECATE_WHATS_APP_FLOW: string[] = [
		"social-messaging:DeprecateWhatsAppFlow",
	];
	/** IAM actions required for the DisassociateWhatsAppBusinessAccount API call. */
	static readonly DISASSOCIATE_WHATS_APP_BUSINESS_ACCOUNT: string[] = [
		"social-messaging:DisassociateWhatsAppBusinessAccount",
	];
	/** IAM actions required for the GetLinkedWhatsAppBusinessAccount API call. */
	static readonly GET_LINKED_WHATS_APP_BUSINESS_ACCOUNT: string[] = [
		"social-messaging:GetLinkedWhatsAppBusinessAccount",
	];
	/** IAM actions required for the GetLinkedWhatsAppBusinessAccountPhoneNumber API call. */
	static readonly GET_LINKED_WHATS_APP_BUSINESS_ACCOUNT_PHONE_NUMBER: string[] =
		["social-messaging:GetLinkedWhatsAppBusinessAccountPhoneNumber"];
	/** IAM actions required for the GetWhatsAppFlow API call. */
	static readonly GET_WHATS_APP_FLOW: string[] = [
		"social-messaging:GetWhatsAppFlow",
	];
	/** IAM actions required for the GetWhatsAppFlowPreview API call. */
	static readonly GET_WHATS_APP_FLOW_PREVIEW: string[] = [
		"social-messaging:GetWhatsAppFlowPreview",
	];
	/** IAM actions required for the GetWhatsAppMessageMedia API call. */
	static readonly GET_WHATS_APP_MESSAGE_MEDIA: string[] = [
		"social-messaging:GetWhatsAppMessageMedia",
	];
	/** IAM actions required for the GetWhatsAppMessageTemplate API call. */
	static readonly GET_WHATS_APP_MESSAGE_TEMPLATE: string[] = [
		"social-messaging:GetWhatsAppMessageTemplate",
	];
	/** IAM actions required for the ListLinkedWhatsAppBusinessAccounts API call. */
	static readonly LIST_LINKED_WHATS_APP_BUSINESS_ACCOUNTS: string[] = [
		"social-messaging:ListLinkedWhatsAppBusinessAccounts",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"social-messaging:ListTagsForResource",
	];
	/** IAM actions required for the ListWhatsAppFlowAssets API call. */
	static readonly LIST_WHATS_APP_FLOW_ASSETS: string[] = [
		"social-messaging:ListWhatsAppFlowAssets",
	];
	/** IAM actions required for the ListWhatsAppFlows API call. */
	static readonly LIST_WHATS_APP_FLOWS: string[] = [
		"social-messaging:ListWhatsAppFlows",
	];
	/** IAM actions required for the ListWhatsAppMessageTemplates API call. */
	static readonly LIST_WHATS_APP_MESSAGE_TEMPLATES: string[] = [
		"social-messaging:ListWhatsAppMessageTemplates",
	];
	/** IAM actions required for the ListWhatsAppTemplateLibrary API call. */
	static readonly LIST_WHATS_APP_TEMPLATE_LIBRARY: string[] = [
		"social-messaging:ListWhatsAppTemplateLibrary",
	];
	/** IAM actions required for the PostWhatsAppMessageMedia API call. */
	static readonly POST_WHATS_APP_MESSAGE_MEDIA: string[] = [
		"social-messaging:PostWhatsAppMessageMedia",
	];
	/** IAM actions required for the PublishWhatsAppFlow API call. */
	static readonly PUBLISH_WHATS_APP_FLOW: string[] = [
		"social-messaging:PublishWhatsAppFlow",
	];
	/** IAM actions required for the PutWhatsAppBusinessAccountEventDestinations API call. */
	static readonly PUT_WHATS_APP_BUSINESS_ACCOUNT_EVENT_DESTINATIONS: string[] =
		[
			"iam:PassRole",
			"social-messaging:PutWhatsAppBusinessAccountEventDestinations",
		];
	/** IAM actions required for the SendWhatsAppConversionEvent API call. */
	static readonly SEND_WHATS_APP_CONVERSION_EVENT: string[] = [];
	/** IAM actions required for the SendWhatsAppMessage API call. */
	static readonly SEND_WHATS_APP_MESSAGE: string[] = [
		"social-messaging:SendWhatsAppMessage",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["social-messaging:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["social-messaging:UntagResource"];
	/** IAM actions required for the UpdateWhatsAppFlow API call. */
	static readonly UPDATE_WHATS_APP_FLOW: string[] = [
		"social-messaging:UpdateWhatsAppFlow",
	];
	/** IAM actions required for the UpdateWhatsAppFlowAssets API call. */
	static readonly UPDATE_WHATS_APP_FLOW_ASSETS: string[] = [
		"social-messaging:UpdateWhatsAppFlowAssets",
	];
	/** IAM actions required for the UpdateWhatsAppMessageTemplate API call. */
	static readonly UPDATE_WHATS_APP_MESSAGE_TEMPLATE: string[] = [
		"social-messaging:UpdateWhatsAppMessageTemplate",
	];
}

/**
 * Condition key constants and builders for social-messaging.
 */
export class SocialMessagingConditions {
	/** Condition keys applicable to the AssociateWhatsAppBusinessAccount action. */
	static readonly ASSOCIATE_WHATS_APP_BUSINESS_ACCOUNT_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

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
