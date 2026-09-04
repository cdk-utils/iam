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
	static readonly AssociateWhatsAppBusinessAccount =
		"social-messaging:AssociateWhatsAppBusinessAccount";
	/** [Write] social-messaging:CreateWhatsAppFlow */
	static readonly CreateWhatsAppFlow = "social-messaging:CreateWhatsAppFlow";
	/** [Write] social-messaging:CreateWhatsAppMessageTemplate */
	static readonly CreateWhatsAppMessageTemplate =
		"social-messaging:CreateWhatsAppMessageTemplate";
	/** [Write] social-messaging:CreateWhatsAppMessageTemplateFromLibrary */
	static readonly CreateWhatsAppMessageTemplateFromLibrary =
		"social-messaging:CreateWhatsAppMessageTemplateFromLibrary";
	/** [Write] social-messaging:CreateWhatsAppMessageTemplateMedia */
	static readonly CreateWhatsAppMessageTemplateMedia =
		"social-messaging:CreateWhatsAppMessageTemplateMedia";
	/** [Write] social-messaging:DeleteWhatsAppFlow */
	static readonly DeleteWhatsAppFlow = "social-messaging:DeleteWhatsAppFlow";
	/** [Write] social-messaging:DeleteWhatsAppMessageMedia */
	static readonly DeleteWhatsAppMessageMedia =
		"social-messaging:DeleteWhatsAppMessageMedia";
	/** [Write] social-messaging:DeleteWhatsAppMessageTemplate */
	static readonly DeleteWhatsAppMessageTemplate =
		"social-messaging:DeleteWhatsAppMessageTemplate";
	/** [Write] social-messaging:DeprecateWhatsAppFlow */
	static readonly DeprecateWhatsAppFlow =
		"social-messaging:DeprecateWhatsAppFlow";
	/** [Write] social-messaging:DisassociateWhatsAppBusinessAccount */
	static readonly DisassociateWhatsAppBusinessAccount =
		"social-messaging:DisassociateWhatsAppBusinessAccount";
	/** [Read] social-messaging:GetLinkedWhatsAppBusinessAccount */
	static readonly actionGetLinkedWhatsAppBusinessAccount =
		"social-messaging:GetLinkedWhatsAppBusinessAccount";
	/** [Read] social-messaging:GetLinkedWhatsAppBusinessAccountPhoneNumber */
	static readonly actionGetLinkedWhatsAppBusinessAccountPhoneNumber =
		"social-messaging:GetLinkedWhatsAppBusinessAccountPhoneNumber";
	/** [Read] social-messaging:GetWhatsAppFlow */
	static readonly actionGetWhatsAppFlow = "social-messaging:GetWhatsAppFlow";
	/** [Read] social-messaging:GetWhatsAppFlowPreview */
	static readonly actionGetWhatsAppFlowPreview =
		"social-messaging:GetWhatsAppFlowPreview";
	/** [Write] social-messaging:GetWhatsAppMessageMedia */
	static readonly actionGetWhatsAppMessageMedia =
		"social-messaging:GetWhatsAppMessageMedia";
	/** [Read] social-messaging:GetWhatsAppMessageTemplate */
	static readonly actionGetWhatsAppMessageTemplate =
		"social-messaging:GetWhatsAppMessageTemplate";
	/** [List] social-messaging:ListLinkedWhatsAppBusinessAccounts */
	static readonly ListLinkedWhatsAppBusinessAccounts =
		"social-messaging:ListLinkedWhatsAppBusinessAccounts";
	/** [Read] social-messaging:ListTagsForResource */
	static readonly ListTagsForResource = "social-messaging:ListTagsForResource";
	/** [List] social-messaging:ListWhatsAppFlowAssets */
	static readonly ListWhatsAppFlowAssets =
		"social-messaging:ListWhatsAppFlowAssets";
	/** [List] social-messaging:ListWhatsAppFlows */
	static readonly ListWhatsAppFlows = "social-messaging:ListWhatsAppFlows";
	/** [List] social-messaging:ListWhatsAppMessageTemplates */
	static readonly ListWhatsAppMessageTemplates =
		"social-messaging:ListWhatsAppMessageTemplates";
	/** [List] social-messaging:ListWhatsAppTemplateLibrary */
	static readonly ListWhatsAppTemplateLibrary =
		"social-messaging:ListWhatsAppTemplateLibrary";
	/** [Write] social-messaging:PostWhatsAppMessageMedia */
	static readonly PostWhatsAppMessageMedia =
		"social-messaging:PostWhatsAppMessageMedia";
	/** [Write] social-messaging:PublishWhatsAppFlow */
	static readonly PublishWhatsAppFlow = "social-messaging:PublishWhatsAppFlow";
	/** [Write] social-messaging:PutWhatsAppBusinessAccountEventDestinations */
	static readonly PutWhatsAppBusinessAccountEventDestinations =
		"social-messaging:PutWhatsAppBusinessAccountEventDestinations";
	/** [Write] social-messaging:SendWhatsAppMessage */
	static readonly SendWhatsAppMessage = "social-messaging:SendWhatsAppMessage";
	/** [Tagging] social-messaging:TagResource */
	static readonly TagResource = "social-messaging:TagResource";
	/** [Tagging] social-messaging:UntagResource */
	static readonly UntagResource = "social-messaging:UntagResource";
	/** [Write] social-messaging:UpdateWhatsAppFlow */
	static readonly UpdateWhatsAppFlow = "social-messaging:UpdateWhatsAppFlow";
	/** [Write] social-messaging:UpdateWhatsAppFlowAssets */
	static readonly UpdateWhatsAppFlowAssets =
		"social-messaging:UpdateWhatsAppFlowAssets";
	/** [Write] social-messaging:UpdateWhatsAppMessageTemplate */
	static readonly UpdateWhatsAppMessageTemplate =
		"social-messaging:UpdateWhatsAppMessageTemplate";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SocialMessagingActions.actionGetLinkedWhatsAppBusinessAccount,
		SocialMessagingActions.actionGetLinkedWhatsAppBusinessAccountPhoneNumber,
		SocialMessagingActions.actionGetWhatsAppFlow,
		SocialMessagingActions.actionGetWhatsAppFlowPreview,
		SocialMessagingActions.actionGetWhatsAppMessageTemplate,
		SocialMessagingActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SocialMessagingActions.AssociateWhatsAppBusinessAccount,
		SocialMessagingActions.CreateWhatsAppFlow,
		SocialMessagingActions.CreateWhatsAppMessageTemplate,
		SocialMessagingActions.CreateWhatsAppMessageTemplateFromLibrary,
		SocialMessagingActions.CreateWhatsAppMessageTemplateMedia,
		SocialMessagingActions.DeleteWhatsAppFlow,
		SocialMessagingActions.DeleteWhatsAppMessageMedia,
		SocialMessagingActions.DeleteWhatsAppMessageTemplate,
		SocialMessagingActions.DeprecateWhatsAppFlow,
		SocialMessagingActions.DisassociateWhatsAppBusinessAccount,
		SocialMessagingActions.actionGetWhatsAppMessageMedia,
		SocialMessagingActions.PostWhatsAppMessageMedia,
		SocialMessagingActions.PublishWhatsAppFlow,
		SocialMessagingActions.PutWhatsAppBusinessAccountEventDestinations,
		SocialMessagingActions.SendWhatsAppMessage,
		SocialMessagingActions.UpdateWhatsAppFlow,
		SocialMessagingActions.UpdateWhatsAppFlowAssets,
		SocialMessagingActions.UpdateWhatsAppMessageTemplate,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SocialMessagingActions.ListLinkedWhatsAppBusinessAccounts,
		SocialMessagingActions.ListWhatsAppFlowAssets,
		SocialMessagingActions.ListWhatsAppFlows,
		SocialMessagingActions.ListWhatsAppMessageTemplates,
		SocialMessagingActions.ListWhatsAppTemplateLibrary,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SocialMessagingActions.TagResource,
		SocialMessagingActions.UntagResource,
	];
}

/**
 * Properties for building a phone-number-id ARN.
 */
export interface SocialMessagingPhoneNumberIdArnProps {
	/** The OriginationPhoneNumberId component of the ARN. */
	readonly originationPhoneNumberId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a phone-number-id ARN.
 */
export interface SocialMessagingPhoneNumberIdArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OriginationPhoneNumberId component. */
	readonly originationPhoneNumberId: string;
}

/**
 * Properties for building a waba ARN.
 */
export interface SocialMessagingWabaArnProps {
	/** The WabaId component of the ARN. */
	readonly wabaId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a waba ARN.
 */
export interface SocialMessagingWabaArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WabaId component. */
	readonly wabaId: string;
}

const PhoneNumberIdArnRegex =
	/^arn:(?<partition>[^:]+):social-messaging:(?<region>[^:]*):(?<account>[^:]*):phone-number-id\/(?<originationPhoneNumberId>[^:/?]+)$/;
const WabaArnRegex =
	/^arn:(?<partition>[^:]+):social-messaging:(?<region>[^:]*):(?<account>[^:]*):waba\/(?<wabaId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for social-messaging resources.
 */
export class SocialMessagingResources {
	/**
	 * Builds an ARN for the phone-number-id resource.
	 */
	static phoneNumberId(props: SocialMessagingPhoneNumberIdArnProps): string {
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
	static parsePhoneNumberIdArn(
		arn: string,
	): SocialMessagingPhoneNumberIdArnComponents {
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
	static waba(props: SocialMessagingWabaArnProps): string {
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
	static parseWabaArn(arn: string): SocialMessagingWabaArnComponents {
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
	static readonly AssociateWhatsAppBusinessAccount: string[] = [
		"social-messaging:AssociateWhatsAppBusinessAccount",
		"iam:PassRole",
		"social-messaging:TagResource",
	];
	/** IAM actions required for the CreateWhatsAppDataset API call. */
	static readonly CreateWhatsAppDataset: string[] = [];
	/** IAM actions required for the CreateWhatsAppFlow API call. */
	static readonly CreateWhatsAppFlow: string[] = [
		"social-messaging:CreateWhatsAppFlow",
	];
	/** IAM actions required for the CreateWhatsAppMessageTemplate API call. */
	static readonly CreateWhatsAppMessageTemplate: string[] = [
		"social-messaging:CreateWhatsAppMessageTemplate",
	];
	/** IAM actions required for the CreateWhatsAppMessageTemplateFromLibrary API call. */
	static readonly CreateWhatsAppMessageTemplateFromLibrary: string[] = [
		"social-messaging:CreateWhatsAppMessageTemplateFromLibrary",
	];
	/** IAM actions required for the CreateWhatsAppMessageTemplateMedia API call. */
	static readonly CreateWhatsAppMessageTemplateMedia: string[] = [
		"social-messaging:CreateWhatsAppMessageTemplateMedia",
	];
	/** IAM actions required for the DeleteWhatsAppFlow API call. */
	static readonly DeleteWhatsAppFlow: string[] = [
		"social-messaging:DeleteWhatsAppFlow",
	];
	/** IAM actions required for the DeleteWhatsAppMessageMedia API call. */
	static readonly DeleteWhatsAppMessageMedia: string[] = [
		"social-messaging:DeleteWhatsAppMessageMedia",
	];
	/** IAM actions required for the DeleteWhatsAppMessageTemplate API call. */
	static readonly DeleteWhatsAppMessageTemplate: string[] = [
		"social-messaging:DeleteWhatsAppMessageTemplate",
	];
	/** IAM actions required for the DeprecateWhatsAppFlow API call. */
	static readonly DeprecateWhatsAppFlow: string[] = [
		"social-messaging:DeprecateWhatsAppFlow",
	];
	/** IAM actions required for the DisassociateWhatsAppBusinessAccount API call. */
	static readonly DisassociateWhatsAppBusinessAccount: string[] = [
		"social-messaging:DisassociateWhatsAppBusinessAccount",
	];
	/** IAM actions required for the GetLinkedWhatsAppBusinessAccount API call. */
	static readonly opGetLinkedWhatsAppBusinessAccount: string[] = [
		"social-messaging:GetLinkedWhatsAppBusinessAccount",
	];
	/** IAM actions required for the GetLinkedWhatsAppBusinessAccountPhoneNumber API call. */
	static readonly opGetLinkedWhatsAppBusinessAccountPhoneNumber: string[] = [
		"social-messaging:GetLinkedWhatsAppBusinessAccountPhoneNumber",
	];
	/** IAM actions required for the GetWhatsAppBusinessPublicKey API call. */
	static readonly opGetWhatsAppBusinessPublicKey: string[] = [];
	/** IAM actions required for the GetWhatsAppFlow API call. */
	static readonly opGetWhatsAppFlow: string[] = [
		"social-messaging:GetWhatsAppFlow",
	];
	/** IAM actions required for the GetWhatsAppFlowPreview API call. */
	static readonly opGetWhatsAppFlowPreview: string[] = [
		"social-messaging:GetWhatsAppFlowPreview",
	];
	/** IAM actions required for the GetWhatsAppMessageMedia API call. */
	static readonly opGetWhatsAppMessageMedia: string[] = [
		"social-messaging:GetWhatsAppMessageMedia",
	];
	/** IAM actions required for the GetWhatsAppMessageTemplate API call. */
	static readonly opGetWhatsAppMessageTemplate: string[] = [
		"social-messaging:GetWhatsAppMessageTemplate",
	];
	/** IAM actions required for the ListLinkedWhatsAppBusinessAccounts API call. */
	static readonly ListLinkedWhatsAppBusinessAccounts: string[] = [
		"social-messaging:ListLinkedWhatsAppBusinessAccounts",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"social-messaging:ListTagsForResource",
	];
	/** IAM actions required for the ListWhatsAppFlowAssets API call. */
	static readonly ListWhatsAppFlowAssets: string[] = [
		"social-messaging:ListWhatsAppFlowAssets",
	];
	/** IAM actions required for the ListWhatsAppFlows API call. */
	static readonly ListWhatsAppFlows: string[] = [
		"social-messaging:ListWhatsAppFlows",
	];
	/** IAM actions required for the ListWhatsAppMessageTemplates API call. */
	static readonly ListWhatsAppMessageTemplates: string[] = [
		"social-messaging:ListWhatsAppMessageTemplates",
	];
	/** IAM actions required for the ListWhatsAppTemplateLibrary API call. */
	static readonly ListWhatsAppTemplateLibrary: string[] = [
		"social-messaging:ListWhatsAppTemplateLibrary",
	];
	/** IAM actions required for the PostWhatsAppMessageMedia API call. */
	static readonly PostWhatsAppMessageMedia: string[] = [
		"social-messaging:PostWhatsAppMessageMedia",
	];
	/** IAM actions required for the PublishWhatsAppFlow API call. */
	static readonly PublishWhatsAppFlow: string[] = [
		"social-messaging:PublishWhatsAppFlow",
	];
	/** IAM actions required for the PutWhatsAppBusinessAccountEventDestinations API call. */
	static readonly PutWhatsAppBusinessAccountEventDestinations: string[] = [
		"iam:PassRole",
		"social-messaging:PutWhatsAppBusinessAccountEventDestinations",
	];
	/** IAM actions required for the PutWhatsAppBusinessPublicKey API call. */
	static readonly PutWhatsAppBusinessPublicKey: string[] = [];
	/** IAM actions required for the SendWhatsAppConversionEvent API call. */
	static readonly SendWhatsAppConversionEvent: string[] = [];
	/** IAM actions required for the SendWhatsAppMessage API call. */
	static readonly SendWhatsAppMessage: string[] = [
		"social-messaging:SendWhatsAppMessage",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["social-messaging:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["social-messaging:UntagResource"];
	/** IAM actions required for the UpdateWhatsAppFlow API call. */
	static readonly UpdateWhatsAppFlow: string[] = [
		"social-messaging:UpdateWhatsAppFlow",
	];
	/** IAM actions required for the UpdateWhatsAppFlowAssets API call. */
	static readonly UpdateWhatsAppFlowAssets: string[] = [
		"social-messaging:UpdateWhatsAppFlowAssets",
	];
	/** IAM actions required for the UpdateWhatsAppMessageTemplate API call. */
	static readonly UpdateWhatsAppMessageTemplate: string[] = [
		"social-messaging:UpdateWhatsAppMessageTemplate",
	];
}

/**
 * Condition key constants and builders for social-messaging.
 */
export class SocialMessagingConditions {
	/** Condition keys applicable to the AssociateWhatsAppBusinessAccount action. */
	static readonly AssociateWhatsAppBusinessAccountConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

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
