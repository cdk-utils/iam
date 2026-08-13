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
	static readonly ActivateEmailContact =
		"notifications-contacts:ActivateEmailContact";
	/** [Write] notifications-contacts:CreateEmailContact */
	static readonly CreateEmailContact =
		"notifications-contacts:CreateEmailContact";
	/** [Write] notifications-contacts:DeleteEmailContact */
	static readonly DeleteEmailContact =
		"notifications-contacts:DeleteEmailContact";
	/** [Read] notifications-contacts:GetEmailContact */
	static readonly actionGetEmailContact =
		"notifications-contacts:GetEmailContact";
	/** [List] notifications-contacts:ListEmailContacts */
	static readonly ListEmailContacts =
		"notifications-contacts:ListEmailContacts";
	/** [Read] notifications-contacts:ListTagsForResource */
	static readonly ListTagsForResource =
		"notifications-contacts:ListTagsForResource";
	/** [Write] notifications-contacts:SendActivationCode */
	static readonly SendActivationCode =
		"notifications-contacts:SendActivationCode";
	/** [Tagging] notifications-contacts:TagResource */
	static readonly TagResource = "notifications-contacts:TagResource";
	/** [Tagging] notifications-contacts:UntagResource */
	static readonly UntagResource = "notifications-contacts:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		NotificationsContactsActions.actionGetEmailContact,
		NotificationsContactsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		NotificationsContactsActions.ActivateEmailContact,
		NotificationsContactsActions.CreateEmailContact,
		NotificationsContactsActions.DeleteEmailContact,
		NotificationsContactsActions.SendActivationCode,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		NotificationsContactsActions.ListEmailContacts,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		NotificationsContactsActions.TagResource,
		NotificationsContactsActions.UntagResource,
	];
}

/**
 * Properties for building a EmailContactResource ARN.
 */
export interface NotificationsContactsEmailContactResourceArnProps {
	/** The EmailContactId component of the ARN. */
	readonly emailContactId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a EmailContactResource ARN.
 */
export interface NotificationsContactsEmailContactResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EmailContactId component. */
	readonly emailContactId: string;
}

const EmailContactResourceArnRegex =
	/^arn:(?<partition>[^:]+):notifications-contacts::(?<account>[^:]*):emailcontact\/(?<emailContactId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for notifications-contacts resources.
 */
export class NotificationsContactsResources {
	/**
	 * Builds an ARN for the EmailContactResource resource.
	 */
	static emailContactResource(
		props: NotificationsContactsEmailContactResourceArnProps,
	): string {
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
	static parseEmailContactResourceArn(
		arn: string,
	): NotificationsContactsEmailContactResourceArnComponents {
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
	static readonly ActivateEmailContact: string[] = [
		"notifications-contacts:ActivateEmailContact",
	];
	/** IAM actions required for the CreateEmailContact API call. */
	static readonly CreateEmailContact: string[] = [
		"notifications-contacts:CreateEmailContact",
		"notifications-contacts:TagResource",
	];
	/** IAM actions required for the DeleteEmailContact API call. */
	static readonly DeleteEmailContact: string[] = [
		"notifications-contacts:DeleteEmailContact",
	];
	/** IAM actions required for the GetEmailContact API call. */
	static readonly opGetEmailContact: string[] = [
		"notifications-contacts:GetEmailContact",
	];
	/** IAM actions required for the ListEmailContacts API call. */
	static readonly ListEmailContacts: string[] = [
		"notifications-contacts:ListEmailContacts",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"notifications-contacts:ListTagsForResource",
	];
	/** IAM actions required for the SendActivationCode API call. */
	static readonly SendActivationCode: string[] = [
		"notifications-contacts:SendActivationCode",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"notifications-contacts:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"notifications-contacts:UntagResource",
	];
}

/**
 * Condition key constants and builders for notifications-contacts.
 */
export class NotificationsContactsConditions {
	/** Condition keys applicable to the CreateEmailContact action. */
	static readonly CreateEmailContactConditionKeys: string[] = [
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
