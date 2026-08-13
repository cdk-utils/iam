// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/notifications-contacts.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the notifications-contacts service.
 */
export class NotificationsContactsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "notifications-contacts";

	/** [Write] notifications-contacts:ActivateEmailContact */
	static readonly ACTIVATE_EMAIL_CONTACT =
		"notifications-contacts:ActivateEmailContact";
	/** [Write] notifications-contacts:CreateEmailContact */
	static readonly CREATE_EMAIL_CONTACT =
		"notifications-contacts:CreateEmailContact";
	/** [Write] notifications-contacts:DeleteEmailContact */
	static readonly DELETE_EMAIL_CONTACT =
		"notifications-contacts:DeleteEmailContact";
	/** [Read] notifications-contacts:GetEmailContact */
	static readonly GET_EMAIL_CONTACT = "notifications-contacts:GetEmailContact";
	/** [List] notifications-contacts:ListEmailContacts */
	static readonly LIST_EMAIL_CONTACTS =
		"notifications-contacts:ListEmailContacts";
	/** [Read] notifications-contacts:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"notifications-contacts:ListTagsForResource";
	/** [Write] notifications-contacts:SendActivationCode */
	static readonly SEND_ACTIVATION_CODE =
		"notifications-contacts:SendActivationCode";
	/** [Tagging] notifications-contacts:TagResource */
	static readonly TAG_RESOURCE = "notifications-contacts:TagResource";
	/** [Tagging] notifications-contacts:UntagResource */
	static readonly UNTAG_RESOURCE = "notifications-contacts:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		NotificationsContactsActions.GET_EMAIL_CONTACT,
		NotificationsContactsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		NotificationsContactsActions.ACTIVATE_EMAIL_CONTACT,
		NotificationsContactsActions.CREATE_EMAIL_CONTACT,
		NotificationsContactsActions.DELETE_EMAIL_CONTACT,
		NotificationsContactsActions.SEND_ACTIVATION_CODE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		NotificationsContactsActions.LIST_EMAIL_CONTACTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		NotificationsContactsActions.TAG_RESOURCE,
		NotificationsContactsActions.UNTAG_RESOURCE,
	];
}

const EmailContactResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):notifications-contacts::(?<account>[^:]*):emailcontact/(?<emailContactId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for notifications-contacts resources.
 */
export class NotificationsContactsResources {
	/**
	 * Builds an ARN for the EmailContactResource resource.
	 */
	static emailContactResource(props: {
		/** The EmailContactId component of the ARN. */
		readonly emailContactId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:notifications-contacts::${props.account ?? "*"}:emailcontact/${props.emailContactId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the EmailContactResource resource.
	 */
	static isValidEmailContactResourceArn(arn: string): boolean {
		return EmailContactResourceArnRegex.test(arn);
	}

	/**
	 * Parses a EmailContactResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEmailContactResourceArn(arn: string): {
		partition: string;
		account: string;
		emailContactId: string;
	} {
		const match = EmailContactResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid EmailContactResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			emailContactId: match.groups!.emailContactId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for notifications-contacts.
 */
export class NotificationsContactsOperations {
	/** IAM actions required for the ActivateEmailContact API call. */
	static readonly ACTIVATE_EMAIL_CONTACT: string[] = [
		"notifications-contacts:ActivateEmailContact",
	];
	/** IAM actions required for the CreateEmailContact API call. */
	static readonly CREATE_EMAIL_CONTACT: string[] = [
		"notifications-contacts:CreateEmailContact",
		"notifications-contacts:TagResource",
	];
	/** IAM actions required for the DeleteEmailContact API call. */
	static readonly DELETE_EMAIL_CONTACT: string[] = [
		"notifications-contacts:DeleteEmailContact",
	];
	/** IAM actions required for the GetEmailContact API call. */
	static readonly GET_EMAIL_CONTACT: string[] = [
		"notifications-contacts:GetEmailContact",
	];
	/** IAM actions required for the ListEmailContacts API call. */
	static readonly LIST_EMAIL_CONTACTS: string[] = [
		"notifications-contacts:ListEmailContacts",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"notifications-contacts:ListTagsForResource",
	];
	/** IAM actions required for the SendActivationCode API call. */
	static readonly SEND_ACTIVATION_CODE: string[] = [
		"notifications-contacts:SendActivationCode",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"notifications-contacts:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"notifications-contacts:UntagResource",
	];
}

/**
 * Condition key constants and builders for notifications-contacts.
 */
export class NotificationsContactsConditions {
	/** Condition keys applicable to the CreateEmailContact action. */
	static readonly CREATE_EMAIL_CONTACT_CONDITION_KEYS: string[] = [
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
