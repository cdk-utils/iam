// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ssm-contacts.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ssm-contacts service.
 */
export class SSMContactsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ssm-contacts";

	/** [Write] ssm-contacts:AcceptPage */
	static readonly ACCEPT_PAGE = "ssm-contacts:AcceptPage";
	/** [Write] ssm-contacts:ActivateContactChannel */
	static readonly ACTIVATE_CONTACT_CHANNEL =
		"ssm-contacts:ActivateContactChannel";
	/** [PermissionManagement] ssm-contacts:AssociateContact */
	static readonly ASSOCIATE_CONTACT = "ssm-contacts:AssociateContact";
	/** [Write] ssm-contacts:CreateContact */
	static readonly CREATE_CONTACT = "ssm-contacts:CreateContact";
	/** [Write] ssm-contacts:CreateContactChannel */
	static readonly CREATE_CONTACT_CHANNEL = "ssm-contacts:CreateContactChannel";
	/** [Write] ssm-contacts:CreateRotation */
	static readonly CREATE_ROTATION = "ssm-contacts:CreateRotation";
	/** [Write] ssm-contacts:CreateRotationOverride */
	static readonly CREATE_ROTATION_OVERRIDE =
		"ssm-contacts:CreateRotationOverride";
	/** [Write] ssm-contacts:DeactivateContactChannel */
	static readonly DEACTIVATE_CONTACT_CHANNEL =
		"ssm-contacts:DeactivateContactChannel";
	/** [Write] ssm-contacts:DeleteContact */
	static readonly DELETE_CONTACT = "ssm-contacts:DeleteContact";
	/** [Write] ssm-contacts:DeleteContactChannel */
	static readonly DELETE_CONTACT_CHANNEL = "ssm-contacts:DeleteContactChannel";
	/** [Write] ssm-contacts:DeleteRotation */
	static readonly DELETE_ROTATION = "ssm-contacts:DeleteRotation";
	/** [Write] ssm-contacts:DeleteRotationOverride */
	static readonly DELETE_ROTATION_OVERRIDE =
		"ssm-contacts:DeleteRotationOverride";
	/** [Read] ssm-contacts:DescribeEngagement */
	static readonly DESCRIBE_ENGAGEMENT = "ssm-contacts:DescribeEngagement";
	/** [Read] ssm-contacts:DescribePage */
	static readonly DESCRIBE_PAGE = "ssm-contacts:DescribePage";
	/** [Read] ssm-contacts:GetContact */
	static readonly GET_CONTACT = "ssm-contacts:GetContact";
	/** [Read] ssm-contacts:GetContactChannel */
	static readonly GET_CONTACT_CHANNEL = "ssm-contacts:GetContactChannel";
	/** [Read] ssm-contacts:GetContactPolicy */
	static readonly GET_CONTACT_POLICY = "ssm-contacts:GetContactPolicy";
	/** [Read] ssm-contacts:GetRotation */
	static readonly GET_ROTATION = "ssm-contacts:GetRotation";
	/** [Read] ssm-contacts:GetRotationOverride */
	static readonly GET_ROTATION_OVERRIDE = "ssm-contacts:GetRotationOverride";
	/** [List] ssm-contacts:ListContactChannels */
	static readonly LIST_CONTACT_CHANNELS = "ssm-contacts:ListContactChannels";
	/** [List] ssm-contacts:ListContacts */
	static readonly LIST_CONTACTS = "ssm-contacts:ListContacts";
	/** [List] ssm-contacts:ListEngagements */
	static readonly LIST_ENGAGEMENTS = "ssm-contacts:ListEngagements";
	/** [List] ssm-contacts:ListPageReceipts */
	static readonly LIST_PAGE_RECEIPTS = "ssm-contacts:ListPageReceipts";
	/** [List] ssm-contacts:ListPageResolutions */
	static readonly LIST_PAGE_RESOLUTIONS = "ssm-contacts:ListPageResolutions";
	/** [List] ssm-contacts:ListPagesByContact */
	static readonly LIST_PAGES_BY_CONTACT = "ssm-contacts:ListPagesByContact";
	/** [List] ssm-contacts:ListPagesByEngagement */
	static readonly LIST_PAGES_BY_ENGAGEMENT =
		"ssm-contacts:ListPagesByEngagement";
	/** [List] ssm-contacts:ListPreviewRotationShifts */
	static readonly LIST_PREVIEW_ROTATION_SHIFTS =
		"ssm-contacts:ListPreviewRotationShifts";
	/** [List] ssm-contacts:ListRotationOverrides */
	static readonly LIST_ROTATION_OVERRIDES =
		"ssm-contacts:ListRotationOverrides";
	/** [List] ssm-contacts:ListRotationShifts */
	static readonly LIST_ROTATION_SHIFTS = "ssm-contacts:ListRotationShifts";
	/** [List] ssm-contacts:ListRotations */
	static readonly LIST_ROTATIONS = "ssm-contacts:ListRotations";
	/** [Read] ssm-contacts:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ssm-contacts:ListTagsForResource";
	/** [Write] ssm-contacts:PutContactPolicy */
	static readonly PUT_CONTACT_POLICY = "ssm-contacts:PutContactPolicy";
	/** [Write] ssm-contacts:SendActivationCode */
	static readonly SEND_ACTIVATION_CODE = "ssm-contacts:SendActivationCode";
	/** [Write] ssm-contacts:StartEngagement */
	static readonly START_ENGAGEMENT = "ssm-contacts:StartEngagement";
	/** [Write] ssm-contacts:StopEngagement */
	static readonly STOP_ENGAGEMENT = "ssm-contacts:StopEngagement";
	/** [Tagging] ssm-contacts:TagResource */
	static readonly TAG_RESOURCE = "ssm-contacts:TagResource";
	/** [Tagging] ssm-contacts:UntagResource */
	static readonly UNTAG_RESOURCE = "ssm-contacts:UntagResource";
	/** [Write] ssm-contacts:UpdateContact */
	static readonly UPDATE_CONTACT = "ssm-contacts:UpdateContact";
	/** [Write] ssm-contacts:UpdateContactChannel */
	static readonly UPDATE_CONTACT_CHANNEL = "ssm-contacts:UpdateContactChannel";
	/** [Write] ssm-contacts:UpdateRotation */
	static readonly UPDATE_ROTATION = "ssm-contacts:UpdateRotation";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SSMContactsActions.DESCRIBE_ENGAGEMENT,
		SSMContactsActions.DESCRIBE_PAGE,
		SSMContactsActions.GET_CONTACT,
		SSMContactsActions.GET_CONTACT_CHANNEL,
		SSMContactsActions.GET_CONTACT_POLICY,
		SSMContactsActions.GET_ROTATION,
		SSMContactsActions.GET_ROTATION_OVERRIDE,
		SSMContactsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SSMContactsActions.ACCEPT_PAGE,
		SSMContactsActions.ACTIVATE_CONTACT_CHANNEL,
		SSMContactsActions.CREATE_CONTACT,
		SSMContactsActions.CREATE_CONTACT_CHANNEL,
		SSMContactsActions.CREATE_ROTATION,
		SSMContactsActions.CREATE_ROTATION_OVERRIDE,
		SSMContactsActions.DEACTIVATE_CONTACT_CHANNEL,
		SSMContactsActions.DELETE_CONTACT,
		SSMContactsActions.DELETE_CONTACT_CHANNEL,
		SSMContactsActions.DELETE_ROTATION,
		SSMContactsActions.DELETE_ROTATION_OVERRIDE,
		SSMContactsActions.PUT_CONTACT_POLICY,
		SSMContactsActions.SEND_ACTIVATION_CODE,
		SSMContactsActions.START_ENGAGEMENT,
		SSMContactsActions.STOP_ENGAGEMENT,
		SSMContactsActions.UPDATE_CONTACT,
		SSMContactsActions.UPDATE_CONTACT_CHANNEL,
		SSMContactsActions.UPDATE_ROTATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SSMContactsActions.LIST_CONTACT_CHANNELS,
		SSMContactsActions.LIST_CONTACTS,
		SSMContactsActions.LIST_ENGAGEMENTS,
		SSMContactsActions.LIST_PAGE_RECEIPTS,
		SSMContactsActions.LIST_PAGE_RESOLUTIONS,
		SSMContactsActions.LIST_PAGES_BY_CONTACT,
		SSMContactsActions.LIST_PAGES_BY_ENGAGEMENT,
		SSMContactsActions.LIST_PREVIEW_ROTATION_SHIFTS,
		SSMContactsActions.LIST_ROTATION_OVERRIDES,
		SSMContactsActions.LIST_ROTATION_SHIFTS,
		SSMContactsActions.LIST_ROTATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		SSMContactsActions.ASSOCIATE_CONTACT,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SSMContactsActions.TAG_RESOURCE,
		SSMContactsActions.UNTAG_RESOURCE,
	];
}

const ContactArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ssm-contacts:(?<region>[^:]*):(?<account>[^:]*):contact/(?<contactAlias>[^:/?]+)$",
);
const ContactchannelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ssm-contacts:(?<region>[^:]*):(?<account>[^:]*):contactchannel/(?<contactAlias>[^:/?]+)/(?<contactChannelId>[^:/?]+)$",
);
const EngagementArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ssm-contacts:(?<region>[^:]*):(?<account>[^:]*):engagement/(?<contactAlias>[^:/?]+)/(?<engagementId>[^:/?]+)$",
);
const PageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ssm-contacts:(?<region>[^:]*):(?<account>[^:]*):page/(?<contactAlias>[^:/?]+)/(?<pageId>[^:/?]+)$",
);
const RotationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ssm-contacts:(?<region>[^:]*):(?<account>[^:]*):rotation/(?<rotationId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ssm-contacts resources.
 */
export class SSMContactsResources {
	/**
	 * Builds an ARN for the contact resource.
	 */
	static contact(props: {
		/** The ContactAlias component of the ARN. */
		readonly contactAlias: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm-contacts:${props.region ?? "*"}:${props.account ?? "*"}:contact/${props.contactAlias}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the contact resource.
	 */
	static isValidContactArn(arn: string): boolean {
		return ContactArnRegex.test(arn);
	}

	/**
	 * Parses a contact ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContactArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		contactAlias: string;
	} {
		const match = ContactArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid contact ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			contactAlias: match.groups!.contactAlias,
		};
	}

	/**
	 * Builds an ARN for the contactchannel resource.
	 */
	static contactchannel(props: {
		/** The ContactAlias component of the ARN. */
		readonly contactAlias: string;
		/** The ContactChannelId component of the ARN. */
		readonly contactChannelId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm-contacts:${props.region ?? "*"}:${props.account ?? "*"}:contactchannel/${props.contactAlias}/${props.contactChannelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the contactchannel resource.
	 */
	static isValidContactchannelArn(arn: string): boolean {
		return ContactchannelArnRegex.test(arn);
	}

	/**
	 * Parses a contactchannel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContactchannelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		contactAlias: string;
		contactChannelId: string;
	} {
		const match = ContactchannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid contactchannel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			contactAlias: match.groups!.contactAlias,
			contactChannelId: match.groups!.contactChannelId,
		};
	}

	/**
	 * Builds an ARN for the engagement resource.
	 */
	static engagement(props: {
		/** The ContactAlias component of the ARN. */
		readonly contactAlias: string;
		/** The EngagementId component of the ARN. */
		readonly engagementId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm-contacts:${props.region ?? "*"}:${props.account ?? "*"}:engagement/${props.contactAlias}/${props.engagementId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the engagement resource.
	 */
	static isValidEngagementArn(arn: string): boolean {
		return EngagementArnRegex.test(arn);
	}

	/**
	 * Parses a engagement ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEngagementArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		contactAlias: string;
		engagementId: string;
	} {
		const match = EngagementArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid engagement ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			contactAlias: match.groups!.contactAlias,
			engagementId: match.groups!.engagementId,
		};
	}

	/**
	 * Builds an ARN for the page resource.
	 */
	static page(props: {
		/** The ContactAlias component of the ARN. */
		readonly contactAlias: string;
		/** The PageId component of the ARN. */
		readonly pageId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm-contacts:${props.region ?? "*"}:${props.account ?? "*"}:page/${props.contactAlias}/${props.pageId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the page resource.
	 */
	static isValidPageArn(arn: string): boolean {
		return PageArnRegex.test(arn);
	}

	/**
	 * Parses a page ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		contactAlias: string;
		pageId: string;
	} {
		const match = PageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid page ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			contactAlias: match.groups!.contactAlias,
			pageId: match.groups!.pageId,
		};
	}

	/**
	 * Builds an ARN for the rotation resource.
	 */
	static rotation(props: {
		/** The RotationId component of the ARN. */
		readonly rotationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm-contacts:${props.region ?? "*"}:${props.account ?? "*"}:rotation/${props.rotationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rotation resource.
	 */
	static isValidRotationArn(arn: string): boolean {
		return RotationArnRegex.test(arn);
	}

	/**
	 * Parses a rotation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRotationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		rotationId: string;
	} {
		const match = RotationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rotation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			rotationId: match.groups!.rotationId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ssm-contacts.
 */
export class SSMContactsOperations {
	/** IAM actions required for the AcceptPage API call. */
	static readonly ACCEPT_PAGE: string[] = ["ssm-contacts:AcceptPage"];
	/** IAM actions required for the ActivateContactChannel API call. */
	static readonly ACTIVATE_CONTACT_CHANNEL: string[] = [
		"ssm-contacts:ActivateContactChannel",
	];
	/** IAM actions required for the CreateContact API call. */
	static readonly CREATE_CONTACT: string[] = [
		"ssm-contacts:AssociateContact",
		"ssm-contacts:CreateContact",
		"ssm-contacts:TagResource",
	];
	/** IAM actions required for the CreateContactChannel API call. */
	static readonly CREATE_CONTACT_CHANNEL: string[] = [
		"ssm-contacts:CreateContactChannel",
	];
	/** IAM actions required for the CreateRotation API call. */
	static readonly CREATE_ROTATION: string[] = [
		"ssm-contacts:CreateRotation",
		"ssm-contacts:TagResource",
	];
	/** IAM actions required for the CreateRotationOverride API call. */
	static readonly CREATE_ROTATION_OVERRIDE: string[] = [
		"ssm-contacts:CreateRotationOverride",
	];
	/** IAM actions required for the DeactivateContactChannel API call. */
	static readonly DEACTIVATE_CONTACT_CHANNEL: string[] = [
		"ssm-contacts:DeactivateContactChannel",
	];
	/** IAM actions required for the DeleteContact API call. */
	static readonly DELETE_CONTACT: string[] = ["ssm-contacts:DeleteContact"];
	/** IAM actions required for the DeleteContactChannel API call. */
	static readonly DELETE_CONTACT_CHANNEL: string[] = [
		"ssm-contacts:DeleteContactChannel",
	];
	/** IAM actions required for the DeleteRotation API call. */
	static readonly DELETE_ROTATION: string[] = ["ssm-contacts:DeleteRotation"];
	/** IAM actions required for the DeleteRotationOverride API call. */
	static readonly DELETE_ROTATION_OVERRIDE: string[] = [
		"ssm-contacts:DeleteRotationOverride",
	];
	/** IAM actions required for the DescribeEngagement API call. */
	static readonly DESCRIBE_ENGAGEMENT: string[] = [
		"ssm-contacts:DescribeEngagement",
	];
	/** IAM actions required for the DescribePage API call. */
	static readonly DESCRIBE_PAGE: string[] = ["ssm-contacts:DescribePage"];
	/** IAM actions required for the GetContact API call. */
	static readonly GET_CONTACT: string[] = ["ssm-contacts:GetContact"];
	/** IAM actions required for the GetContactChannel API call. */
	static readonly GET_CONTACT_CHANNEL: string[] = [
		"ssm-contacts:GetContactChannel",
	];
	/** IAM actions required for the GetContactPolicy API call. */
	static readonly GET_CONTACT_POLICY: string[] = [
		"ssm-contacts:GetContactPolicy",
	];
	/** IAM actions required for the GetRotation API call. */
	static readonly GET_ROTATION: string[] = ["ssm-contacts:GetRotation"];
	/** IAM actions required for the GetRotationOverride API call. */
	static readonly GET_ROTATION_OVERRIDE: string[] = [
		"ssm-contacts:GetRotationOverride",
	];
	/** IAM actions required for the ListContactChannels API call. */
	static readonly LIST_CONTACT_CHANNELS: string[] = [
		"ssm-contacts:ListContactChannels",
	];
	/** IAM actions required for the ListContacts API call. */
	static readonly LIST_CONTACTS: string[] = ["ssm-contacts:ListContacts"];
	/** IAM actions required for the ListEngagements API call. */
	static readonly LIST_ENGAGEMENTS: string[] = ["ssm-contacts:ListEngagements"];
	/** IAM actions required for the ListPageReceipts API call. */
	static readonly LIST_PAGE_RECEIPTS: string[] = [
		"ssm-contacts:ListPageReceipts",
	];
	/** IAM actions required for the ListPageResolutions API call. */
	static readonly LIST_PAGE_RESOLUTIONS: string[] = [
		"ssm-contacts:ListPageResolutions",
	];
	/** IAM actions required for the ListPagesByContact API call. */
	static readonly LIST_PAGES_BY_CONTACT: string[] = [
		"ssm-contacts:ListPagesByContact",
	];
	/** IAM actions required for the ListPagesByEngagement API call. */
	static readonly LIST_PAGES_BY_ENGAGEMENT: string[] = [
		"ssm-contacts:ListPagesByEngagement",
	];
	/** IAM actions required for the ListPreviewRotationShifts API call. */
	static readonly LIST_PREVIEW_ROTATION_SHIFTS: string[] = [
		"ssm-contacts:ListPreviewRotationShifts",
	];
	/** IAM actions required for the ListRotationOverrides API call. */
	static readonly LIST_ROTATION_OVERRIDES: string[] = [
		"ssm-contacts:ListRotationOverrides",
	];
	/** IAM actions required for the ListRotationShifts API call. */
	static readonly LIST_ROTATION_SHIFTS: string[] = [
		"ssm-contacts:ListRotationShifts",
	];
	/** IAM actions required for the ListRotations API call. */
	static readonly LIST_ROTATIONS: string[] = ["ssm-contacts:ListRotations"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"ssm-contacts:ListTagsForResource",
	];
	/** IAM actions required for the PutContactPolicy API call. */
	static readonly PUT_CONTACT_POLICY: string[] = [
		"ssm-contacts:PutContactPolicy",
	];
	/** IAM actions required for the SendActivationCode API call. */
	static readonly SEND_ACTIVATION_CODE: string[] = [
		"ssm-contacts:SendActivationCode",
	];
	/** IAM actions required for the StartEngagement API call. */
	static readonly START_ENGAGEMENT: string[] = ["ssm-contacts:StartEngagement"];
	/** IAM actions required for the StopEngagement API call. */
	static readonly STOP_ENGAGEMENT: string[] = ["ssm-contacts:StopEngagement"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["ssm-contacts:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["ssm-contacts:UntagResource"];
	/** IAM actions required for the UpdateContact API call. */
	static readonly UPDATE_CONTACT: string[] = [
		"ssm-contacts:AssociateContact",
		"ssm-contacts:UpdateContact",
	];
	/** IAM actions required for the UpdateContactChannel API call. */
	static readonly UPDATE_CONTACT_CHANNEL: string[] = [
		"ssm-contacts:UpdateContactChannel",
	];
	/** IAM actions required for the UpdateRotation API call. */
	static readonly UPDATE_ROTATION: string[] = ["ssm-contacts:UpdateRotation"];
}

/**
 * Condition key constants and builders for ssm-contacts.
 */
export class SSMContactsConditions {
	/** Condition keys applicable to the CreateContact action. */
	static readonly CREATE_CONTACT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRotation action. */
	static readonly CREATE_ROTATION_CONDITION_KEYS: string[] = [
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
