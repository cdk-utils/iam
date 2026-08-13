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
	static readonly AcceptPage = "ssm-contacts:AcceptPage";
	/** [Write] ssm-contacts:ActivateContactChannel */
	static readonly ActivateContactChannel =
		"ssm-contacts:ActivateContactChannel";
	/** [PermissionManagement] ssm-contacts:AssociateContact */
	static readonly AssociateContact = "ssm-contacts:AssociateContact";
	/** [Write] ssm-contacts:CreateContact */
	static readonly CreateContact = "ssm-contacts:CreateContact";
	/** [Write] ssm-contacts:CreateContactChannel */
	static readonly CreateContactChannel = "ssm-contacts:CreateContactChannel";
	/** [Write] ssm-contacts:CreateRotation */
	static readonly CreateRotation = "ssm-contacts:CreateRotation";
	/** [Write] ssm-contacts:CreateRotationOverride */
	static readonly CreateRotationOverride =
		"ssm-contacts:CreateRotationOverride";
	/** [Write] ssm-contacts:DeactivateContactChannel */
	static readonly DeactivateContactChannel =
		"ssm-contacts:DeactivateContactChannel";
	/** [Write] ssm-contacts:DeleteContact */
	static readonly DeleteContact = "ssm-contacts:DeleteContact";
	/** [Write] ssm-contacts:DeleteContactChannel */
	static readonly DeleteContactChannel = "ssm-contacts:DeleteContactChannel";
	/** [Write] ssm-contacts:DeleteRotation */
	static readonly DeleteRotation = "ssm-contacts:DeleteRotation";
	/** [Write] ssm-contacts:DeleteRotationOverride */
	static readonly DeleteRotationOverride =
		"ssm-contacts:DeleteRotationOverride";
	/** [Read] ssm-contacts:DescribeEngagement */
	static readonly DescribeEngagement = "ssm-contacts:DescribeEngagement";
	/** [Read] ssm-contacts:DescribePage */
	static readonly DescribePage = "ssm-contacts:DescribePage";
	/** [Read] ssm-contacts:GetContact */
	static readonly actionGetContact = "ssm-contacts:GetContact";
	/** [Read] ssm-contacts:GetContactChannel */
	static readonly actionGetContactChannel = "ssm-contacts:GetContactChannel";
	/** [Read] ssm-contacts:GetContactPolicy */
	static readonly actionGetContactPolicy = "ssm-contacts:GetContactPolicy";
	/** [Read] ssm-contacts:GetRotation */
	static readonly actionGetRotation = "ssm-contacts:GetRotation";
	/** [Read] ssm-contacts:GetRotationOverride */
	static readonly actionGetRotationOverride =
		"ssm-contacts:GetRotationOverride";
	/** [List] ssm-contacts:ListContactChannels */
	static readonly ListContactChannels = "ssm-contacts:ListContactChannels";
	/** [List] ssm-contacts:ListContacts */
	static readonly ListContacts = "ssm-contacts:ListContacts";
	/** [List] ssm-contacts:ListEngagements */
	static readonly ListEngagements = "ssm-contacts:ListEngagements";
	/** [List] ssm-contacts:ListPageReceipts */
	static readonly ListPageReceipts = "ssm-contacts:ListPageReceipts";
	/** [List] ssm-contacts:ListPageResolutions */
	static readonly ListPageResolutions = "ssm-contacts:ListPageResolutions";
	/** [List] ssm-contacts:ListPagesByContact */
	static readonly ListPagesByContact = "ssm-contacts:ListPagesByContact";
	/** [List] ssm-contacts:ListPagesByEngagement */
	static readonly ListPagesByEngagement = "ssm-contacts:ListPagesByEngagement";
	/** [List] ssm-contacts:ListPreviewRotationShifts */
	static readonly ListPreviewRotationShifts =
		"ssm-contacts:ListPreviewRotationShifts";
	/** [List] ssm-contacts:ListRotationOverrides */
	static readonly ListRotationOverrides = "ssm-contacts:ListRotationOverrides";
	/** [List] ssm-contacts:ListRotationShifts */
	static readonly ListRotationShifts = "ssm-contacts:ListRotationShifts";
	/** [List] ssm-contacts:ListRotations */
	static readonly ListRotations = "ssm-contacts:ListRotations";
	/** [Read] ssm-contacts:ListTagsForResource */
	static readonly ListTagsForResource = "ssm-contacts:ListTagsForResource";
	/** [Write] ssm-contacts:PutContactPolicy */
	static readonly PutContactPolicy = "ssm-contacts:PutContactPolicy";
	/** [Write] ssm-contacts:SendActivationCode */
	static readonly SendActivationCode = "ssm-contacts:SendActivationCode";
	/** [Write] ssm-contacts:StartEngagement */
	static readonly StartEngagement = "ssm-contacts:StartEngagement";
	/** [Write] ssm-contacts:StopEngagement */
	static readonly StopEngagement = "ssm-contacts:StopEngagement";
	/** [Tagging] ssm-contacts:TagResource */
	static readonly TagResource = "ssm-contacts:TagResource";
	/** [Tagging] ssm-contacts:UntagResource */
	static readonly UntagResource = "ssm-contacts:UntagResource";
	/** [Write] ssm-contacts:UpdateContact */
	static readonly UpdateContact = "ssm-contacts:UpdateContact";
	/** [Write] ssm-contacts:UpdateContactChannel */
	static readonly UpdateContactChannel = "ssm-contacts:UpdateContactChannel";
	/** [Write] ssm-contacts:UpdateRotation */
	static readonly UpdateRotation = "ssm-contacts:UpdateRotation";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SSMContactsActions.DescribeEngagement,
		SSMContactsActions.DescribePage,
		SSMContactsActions.actionGetContact,
		SSMContactsActions.actionGetContactChannel,
		SSMContactsActions.actionGetContactPolicy,
		SSMContactsActions.actionGetRotation,
		SSMContactsActions.actionGetRotationOverride,
		SSMContactsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SSMContactsActions.AcceptPage,
		SSMContactsActions.ActivateContactChannel,
		SSMContactsActions.CreateContact,
		SSMContactsActions.CreateContactChannel,
		SSMContactsActions.CreateRotation,
		SSMContactsActions.CreateRotationOverride,
		SSMContactsActions.DeactivateContactChannel,
		SSMContactsActions.DeleteContact,
		SSMContactsActions.DeleteContactChannel,
		SSMContactsActions.DeleteRotation,
		SSMContactsActions.DeleteRotationOverride,
		SSMContactsActions.PutContactPolicy,
		SSMContactsActions.SendActivationCode,
		SSMContactsActions.StartEngagement,
		SSMContactsActions.StopEngagement,
		SSMContactsActions.UpdateContact,
		SSMContactsActions.UpdateContactChannel,
		SSMContactsActions.UpdateRotation,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SSMContactsActions.ListContactChannels,
		SSMContactsActions.ListContacts,
		SSMContactsActions.ListEngagements,
		SSMContactsActions.ListPageReceipts,
		SSMContactsActions.ListPageResolutions,
		SSMContactsActions.ListPagesByContact,
		SSMContactsActions.ListPagesByEngagement,
		SSMContactsActions.ListPreviewRotationShifts,
		SSMContactsActions.ListRotationOverrides,
		SSMContactsActions.ListRotationShifts,
		SSMContactsActions.ListRotations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		SSMContactsActions.AssociateContact,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SSMContactsActions.TagResource,
		SSMContactsActions.UntagResource,
	];
}

/**
 * Properties for building a contact ARN.
 */
export interface SSMContactsContactArnProps {
	/** The ContactAlias component of the ARN. */
	readonly contactAlias: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a contact ARN.
 */
export interface SSMContactsContactArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ContactAlias component. */
	readonly contactAlias: string;
}

/**
 * Properties for building a contactchannel ARN.
 */
export interface SSMContactsContactchannelArnProps {
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
}

/**
 * Parsed components of a contactchannel ARN.
 */
export interface SSMContactsContactchannelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ContactAlias component. */
	readonly contactAlias: string;
	/** The ContactChannelId component. */
	readonly contactChannelId: string;
}

/**
 * Properties for building a engagement ARN.
 */
export interface SSMContactsEngagementArnProps {
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
}

/**
 * Parsed components of a engagement ARN.
 */
export interface SSMContactsEngagementArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ContactAlias component. */
	readonly contactAlias: string;
	/** The EngagementId component. */
	readonly engagementId: string;
}

/**
 * Properties for building a page ARN.
 */
export interface SSMContactsPageArnProps {
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
}

/**
 * Parsed components of a page ARN.
 */
export interface SSMContactsPageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ContactAlias component. */
	readonly contactAlias: string;
	/** The PageId component. */
	readonly pageId: string;
}

/**
 * Properties for building a rotation ARN.
 */
export interface SSMContactsRotationArnProps {
	/** The RotationId component of the ARN. */
	readonly rotationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a rotation ARN.
 */
export interface SSMContactsRotationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RotationId component. */
	readonly rotationId: string;
}

const ContactArnRegex =
	/^arn:(?<partition>[^:]+):ssm-contacts:(?<region>[^:]*):(?<account>[^:]*):contact\/(?<contactAlias>[^:/?]+)$/;
const ContactchannelArnRegex =
	/^arn:(?<partition>[^:]+):ssm-contacts:(?<region>[^:]*):(?<account>[^:]*):contactchannel\/(?<contactAlias>[^:/?]+)\/(?<contactChannelId>[^:/?]+)$/;
const EngagementArnRegex =
	/^arn:(?<partition>[^:]+):ssm-contacts:(?<region>[^:]*):(?<account>[^:]*):engagement\/(?<contactAlias>[^:/?]+)\/(?<engagementId>[^:/?]+)$/;
const PageArnRegex =
	/^arn:(?<partition>[^:]+):ssm-contacts:(?<region>[^:]*):(?<account>[^:]*):page\/(?<contactAlias>[^:/?]+)\/(?<pageId>[^:/?]+)$/;
const RotationArnRegex =
	/^arn:(?<partition>[^:]+):ssm-contacts:(?<region>[^:]*):(?<account>[^:]*):rotation\/(?<rotationId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ssm-contacts resources.
 */
export class SSMContactsResources {
	/**
	 * Builds an ARN for the contact resource.
	 */
	static contact(props: SSMContactsContactArnProps): string {
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
	static parseContactArn(arn: string): SSMContactsContactArnComponents {
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
	static contactchannel(props: SSMContactsContactchannelArnProps): string {
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
	static parseContactchannelArn(
		arn: string,
	): SSMContactsContactchannelArnComponents {
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
	static engagement(props: SSMContactsEngagementArnProps): string {
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
	static parseEngagementArn(arn: string): SSMContactsEngagementArnComponents {
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
	static page(props: SSMContactsPageArnProps): string {
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
	static parsePageArn(arn: string): SSMContactsPageArnComponents {
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
	static rotation(props: SSMContactsRotationArnProps): string {
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
	static parseRotationArn(arn: string): SSMContactsRotationArnComponents {
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
	static readonly AcceptPage: string[] = ["ssm-contacts:AcceptPage"];
	/** IAM actions required for the ActivateContactChannel API call. */
	static readonly ActivateContactChannel: string[] = [
		"ssm-contacts:ActivateContactChannel",
	];
	/** IAM actions required for the CreateContact API call. */
	static readonly CreateContact: string[] = [
		"ssm-contacts:AssociateContact",
		"ssm-contacts:CreateContact",
		"ssm-contacts:TagResource",
	];
	/** IAM actions required for the CreateContactChannel API call. */
	static readonly CreateContactChannel: string[] = [
		"ssm-contacts:CreateContactChannel",
	];
	/** IAM actions required for the CreateRotation API call. */
	static readonly CreateRotation: string[] = [
		"ssm-contacts:CreateRotation",
		"ssm-contacts:TagResource",
	];
	/** IAM actions required for the CreateRotationOverride API call. */
	static readonly CreateRotationOverride: string[] = [
		"ssm-contacts:CreateRotationOverride",
	];
	/** IAM actions required for the DeactivateContactChannel API call. */
	static readonly DeactivateContactChannel: string[] = [
		"ssm-contacts:DeactivateContactChannel",
	];
	/** IAM actions required for the DeleteContact API call. */
	static readonly DeleteContact: string[] = ["ssm-contacts:DeleteContact"];
	/** IAM actions required for the DeleteContactChannel API call. */
	static readonly DeleteContactChannel: string[] = [
		"ssm-contacts:DeleteContactChannel",
	];
	/** IAM actions required for the DeleteRotation API call. */
	static readonly DeleteRotation: string[] = ["ssm-contacts:DeleteRotation"];
	/** IAM actions required for the DeleteRotationOverride API call. */
	static readonly DeleteRotationOverride: string[] = [
		"ssm-contacts:DeleteRotationOverride",
	];
	/** IAM actions required for the DescribeEngagement API call. */
	static readonly DescribeEngagement: string[] = [
		"ssm-contacts:DescribeEngagement",
	];
	/** IAM actions required for the DescribePage API call. */
	static readonly DescribePage: string[] = ["ssm-contacts:DescribePage"];
	/** IAM actions required for the GetContact API call. */
	static readonly opGetContact: string[] = ["ssm-contacts:GetContact"];
	/** IAM actions required for the GetContactChannel API call. */
	static readonly opGetContactChannel: string[] = [
		"ssm-contacts:GetContactChannel",
	];
	/** IAM actions required for the GetContactPolicy API call. */
	static readonly opGetContactPolicy: string[] = [
		"ssm-contacts:GetContactPolicy",
	];
	/** IAM actions required for the GetRotation API call. */
	static readonly opGetRotation: string[] = ["ssm-contacts:GetRotation"];
	/** IAM actions required for the GetRotationOverride API call. */
	static readonly opGetRotationOverride: string[] = [
		"ssm-contacts:GetRotationOverride",
	];
	/** IAM actions required for the ListContactChannels API call. */
	static readonly ListContactChannels: string[] = [
		"ssm-contacts:ListContactChannels",
	];
	/** IAM actions required for the ListContacts API call. */
	static readonly ListContacts: string[] = ["ssm-contacts:ListContacts"];
	/** IAM actions required for the ListEngagements API call. */
	static readonly ListEngagements: string[] = ["ssm-contacts:ListEngagements"];
	/** IAM actions required for the ListPageReceipts API call. */
	static readonly ListPageReceipts: string[] = [
		"ssm-contacts:ListPageReceipts",
	];
	/** IAM actions required for the ListPageResolutions API call. */
	static readonly ListPageResolutions: string[] = [
		"ssm-contacts:ListPageResolutions",
	];
	/** IAM actions required for the ListPagesByContact API call. */
	static readonly ListPagesByContact: string[] = [
		"ssm-contacts:ListPagesByContact",
	];
	/** IAM actions required for the ListPagesByEngagement API call. */
	static readonly ListPagesByEngagement: string[] = [
		"ssm-contacts:ListPagesByEngagement",
	];
	/** IAM actions required for the ListPreviewRotationShifts API call. */
	static readonly ListPreviewRotationShifts: string[] = [
		"ssm-contacts:ListPreviewRotationShifts",
	];
	/** IAM actions required for the ListRotationOverrides API call. */
	static readonly ListRotationOverrides: string[] = [
		"ssm-contacts:ListRotationOverrides",
	];
	/** IAM actions required for the ListRotationShifts API call. */
	static readonly ListRotationShifts: string[] = [
		"ssm-contacts:ListRotationShifts",
	];
	/** IAM actions required for the ListRotations API call. */
	static readonly ListRotations: string[] = ["ssm-contacts:ListRotations"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"ssm-contacts:ListTagsForResource",
	];
	/** IAM actions required for the PutContactPolicy API call. */
	static readonly PutContactPolicy: string[] = [
		"ssm-contacts:PutContactPolicy",
	];
	/** IAM actions required for the SendActivationCode API call. */
	static readonly SendActivationCode: string[] = [
		"ssm-contacts:SendActivationCode",
	];
	/** IAM actions required for the StartEngagement API call. */
	static readonly StartEngagement: string[] = ["ssm-contacts:StartEngagement"];
	/** IAM actions required for the StopEngagement API call. */
	static readonly StopEngagement: string[] = ["ssm-contacts:StopEngagement"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["ssm-contacts:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["ssm-contacts:UntagResource"];
	/** IAM actions required for the UpdateContact API call. */
	static readonly UpdateContact: string[] = [
		"ssm-contacts:AssociateContact",
		"ssm-contacts:UpdateContact",
	];
	/** IAM actions required for the UpdateContactChannel API call. */
	static readonly UpdateContactChannel: string[] = [
		"ssm-contacts:UpdateContactChannel",
	];
	/** IAM actions required for the UpdateRotation API call. */
	static readonly UpdateRotation: string[] = ["ssm-contacts:UpdateRotation"];
}

/**
 * Condition key constants and builders for ssm-contacts.
 */
export class SSMContactsConditions {
	/** Condition keys applicable to the CreateContact action. */
	static readonly CreateContactConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRotation action. */
	static readonly CreateRotationConditionKeys: string[] = [
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
