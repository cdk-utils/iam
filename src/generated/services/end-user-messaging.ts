// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/end-user-messaging.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the end-user-messaging service.
 */
export class EndUserMessagingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "end-user-messaging";

	/** [Write] end-user-messaging:CreateBrandProfile */
	static readonly CreateBrandProfile = "end-user-messaging:CreateBrandProfile";
	/** [Write] end-user-messaging:CreateBrandProfileAttributes */
	static readonly CreateBrandProfileAttributes =
		"end-user-messaging:CreateBrandProfileAttributes";
	/** [Write] end-user-messaging:CreateBrandProfileFromRegistration */
	static readonly CreateBrandProfileFromRegistration =
		"end-user-messaging:CreateBrandProfileFromRegistration";
	/** [Write] end-user-messaging:CreateNotifyCodeConfiguration */
	static readonly CreateNotifyCodeConfiguration =
		"end-user-messaging:CreateNotifyCodeConfiguration";
	/** [Write] end-user-messaging:CreateRegistrationsFromBrandProfile */
	static readonly CreateRegistrationsFromBrandProfile =
		"end-user-messaging:CreateRegistrationsFromBrandProfile";
	/** [Write] end-user-messaging:DeleteBrandProfile */
	static readonly DeleteBrandProfile = "end-user-messaging:DeleteBrandProfile";
	/** [Write] end-user-messaging:DeleteBrandProfileAttribute */
	static readonly DeleteBrandProfileAttribute =
		"end-user-messaging:DeleteBrandProfileAttribute";
	/** [Write] end-user-messaging:DeleteNotifyCodeConfiguration */
	static readonly DeleteNotifyCodeConfiguration =
		"end-user-messaging:DeleteNotifyCodeConfiguration";
	/** [Read] end-user-messaging:GetBrandProfile */
	static readonly actionGetBrandProfile = "end-user-messaging:GetBrandProfile";
	/** [Read] end-user-messaging:GetBrandProfileAttribute */
	static readonly actionGetBrandProfileAttribute =
		"end-user-messaging:GetBrandProfileAttribute";
	/** [Read] end-user-messaging:GetJob */
	static readonly actionGetJob = "end-user-messaging:GetJob";
	/** [Read] end-user-messaging:GetNotifyCodeConfiguration */
	static readonly actionGetNotifyCodeConfiguration =
		"end-user-messaging:GetNotifyCodeConfiguration";
	/** [List] end-user-messaging:ListBrandProfileAttributes */
	static readonly ListBrandProfileAttributes =
		"end-user-messaging:ListBrandProfileAttributes";
	/** [List] end-user-messaging:ListBrandProfiles */
	static readonly ListBrandProfiles = "end-user-messaging:ListBrandProfiles";
	/** [List] end-user-messaging:ListJobs */
	static readonly ListJobs = "end-user-messaging:ListJobs";
	/** [List] end-user-messaging:ListNotifyCodeConfigurations */
	static readonly ListNotifyCodeConfigurations =
		"end-user-messaging:ListNotifyCodeConfigurations";
	/** [List] end-user-messaging:ListRegistrationsFromBrandProfile */
	static readonly ListRegistrationsFromBrandProfile =
		"end-user-messaging:ListRegistrationsFromBrandProfile";
	/** [Read] end-user-messaging:ListTagsForResource */
	static readonly ListTagsForResource =
		"end-user-messaging:ListTagsForResource";
	/** [Write] end-user-messaging:SendNotifyCodeVerification */
	static readonly SendNotifyCodeVerification =
		"end-user-messaging:SendNotifyCodeVerification";
	/** [Tagging] end-user-messaging:TagResource */
	static readonly TagResource = "end-user-messaging:TagResource";
	/** [Tagging] end-user-messaging:UntagResource */
	static readonly UntagResource = "end-user-messaging:UntagResource";
	/** [Write] end-user-messaging:UpdateBrandProfile */
	static readonly UpdateBrandProfile = "end-user-messaging:UpdateBrandProfile";
	/** [Write] end-user-messaging:UpdateBrandProfileAttribute */
	static readonly UpdateBrandProfileAttribute =
		"end-user-messaging:UpdateBrandProfileAttribute";
	/** [Write] end-user-messaging:UpdateBrandProfileFromRegistration */
	static readonly UpdateBrandProfileFromRegistration =
		"end-user-messaging:UpdateBrandProfileFromRegistration";
	/** [Write] end-user-messaging:UpdateNotifyCodeConfiguration */
	static readonly UpdateNotifyCodeConfiguration =
		"end-user-messaging:UpdateNotifyCodeConfiguration";
	/** [Write] end-user-messaging:UpdateRegistrationsFromBrandProfile */
	static readonly UpdateRegistrationsFromBrandProfile =
		"end-user-messaging:UpdateRegistrationsFromBrandProfile";
	/** [Write] end-user-messaging:ValidateNotifyCodeVerification */
	static readonly ValidateNotifyCodeVerification =
		"end-user-messaging:ValidateNotifyCodeVerification";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		EndUserMessagingActions.actionGetBrandProfile,
		EndUserMessagingActions.actionGetBrandProfileAttribute,
		EndUserMessagingActions.actionGetJob,
		EndUserMessagingActions.actionGetNotifyCodeConfiguration,
		EndUserMessagingActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		EndUserMessagingActions.CreateBrandProfile,
		EndUserMessagingActions.CreateBrandProfileAttributes,
		EndUserMessagingActions.CreateBrandProfileFromRegistration,
		EndUserMessagingActions.CreateNotifyCodeConfiguration,
		EndUserMessagingActions.CreateRegistrationsFromBrandProfile,
		EndUserMessagingActions.DeleteBrandProfile,
		EndUserMessagingActions.DeleteBrandProfileAttribute,
		EndUserMessagingActions.DeleteNotifyCodeConfiguration,
		EndUserMessagingActions.SendNotifyCodeVerification,
		EndUserMessagingActions.UpdateBrandProfile,
		EndUserMessagingActions.UpdateBrandProfileAttribute,
		EndUserMessagingActions.UpdateBrandProfileFromRegistration,
		EndUserMessagingActions.UpdateNotifyCodeConfiguration,
		EndUserMessagingActions.UpdateRegistrationsFromBrandProfile,
		EndUserMessagingActions.ValidateNotifyCodeVerification,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		EndUserMessagingActions.ListBrandProfileAttributes,
		EndUserMessagingActions.ListBrandProfiles,
		EndUserMessagingActions.ListJobs,
		EndUserMessagingActions.ListNotifyCodeConfigurations,
		EndUserMessagingActions.ListRegistrationsFromBrandProfile,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		EndUserMessagingActions.TagResource,
		EndUserMessagingActions.UntagResource,
	];
}

/**
 * Properties for building a brand-profile ARN.
 */
export interface EndUserMessagingBrandProfileArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a brand-profile ARN.
 */
export interface EndUserMessagingBrandProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a notify-code-configuration ARN.
 */
export interface EndUserMessagingNotifyCodeConfigurationArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a notify-code-configuration ARN.
 */
export interface EndUserMessagingNotifyCodeConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const BrandProfileArnRegex =
	/^arn:(?<partition>[^:]+):end-user-messaging:(?<region>[^:]*):(?<account>[^:]*):brand-profile\/(?<resourceId>[^:/?]+)$/;
const NotifyCodeConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):end-user-messaging:(?<region>[^:]*):(?<account>[^:]*):notify-code-configuration\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for end-user-messaging resources.
 */
export class EndUserMessagingResources {
	/**
	 * Builds an ARN for the brand-profile resource.
	 */
	static brandProfile(props: EndUserMessagingBrandProfileArnProps): string {
		return `arn:${props.partition ?? "aws"}:end-user-messaging:${props.region ?? "*"}:${props.account ?? "*"}:brand-profile/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the brand-profile resource.
	 */
	static isValidBrandProfileArn(arn: string): boolean {
		return BrandProfileArnRegex.test(arn);
	}

	/**
	 * Parses a brand-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBrandProfileArn(
		arn: string,
	): EndUserMessagingBrandProfileArnComponents {
		const match = BrandProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid brand-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the notify-code-configuration resource.
	 */
	static notifyCodeConfiguration(
		props: EndUserMessagingNotifyCodeConfigurationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:end-user-messaging:${props.region ?? "*"}:${props.account ?? "*"}:notify-code-configuration/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the notify-code-configuration resource.
	 */
	static isValidNotifyCodeConfigurationArn(arn: string): boolean {
		return NotifyCodeConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a notify-code-configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNotifyCodeConfigurationArn(
		arn: string,
	): EndUserMessagingNotifyCodeConfigurationArnComponents {
		const match = NotifyCodeConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid notify-code-configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for end-user-messaging.
 */
export class EndUserMessagingOperations {
	/** IAM actions required for the CreateBrandProfile API call. */
	static readonly CreateBrandProfile: string[] = [];
	/** IAM actions required for the CreateBrandProfileAttributes API call. */
	static readonly CreateBrandProfileAttributes: string[] = [];
	/** IAM actions required for the CreateBrandProfileFromRegistration API call. */
	static readonly CreateBrandProfileFromRegistration: string[] = [];
	/** IAM actions required for the CreateNotifyCodeConfiguration API call. */
	static readonly CreateNotifyCodeConfiguration: string[] = [];
	/** IAM actions required for the CreateRegistrationsFromBrandProfile API call. */
	static readonly CreateRegistrationsFromBrandProfile: string[] = [];
	/** IAM actions required for the DeleteBrandProfile API call. */
	static readonly DeleteBrandProfile: string[] = [];
	/** IAM actions required for the DeleteBrandProfileAttribute API call. */
	static readonly DeleteBrandProfileAttribute: string[] = [];
	/** IAM actions required for the DeleteNotifyCodeConfiguration API call. */
	static readonly DeleteNotifyCodeConfiguration: string[] = [];
	/** IAM actions required for the GetBrandProfile API call. */
	static readonly opGetBrandProfile: string[] = [];
	/** IAM actions required for the GetBrandProfileAttribute API call. */
	static readonly opGetBrandProfileAttribute: string[] = [];
	/** IAM actions required for the GetJob API call. */
	static readonly opGetJob: string[] = [];
	/** IAM actions required for the GetNotifyCodeConfiguration API call. */
	static readonly opGetNotifyCodeConfiguration: string[] = [];
	/** IAM actions required for the ListBrandProfileAttributes API call. */
	static readonly ListBrandProfileAttributes: string[] = [];
	/** IAM actions required for the ListBrandProfiles API call. */
	static readonly ListBrandProfiles: string[] = [];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = [];
	/** IAM actions required for the ListNotifyCodeConfigurations API call. */
	static readonly ListNotifyCodeConfigurations: string[] = [];
	/** IAM actions required for the ListRegistrationsFromBrandProfile API call. */
	static readonly ListRegistrationsFromBrandProfile: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [];
	/** IAM actions required for the SendNotifyCodeVerification API call. */
	static readonly SendNotifyCodeVerification: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [];
	/** IAM actions required for the UpdateBrandProfile API call. */
	static readonly UpdateBrandProfile: string[] = [];
	/** IAM actions required for the UpdateBrandProfileAttribute API call. */
	static readonly UpdateBrandProfileAttribute: string[] = [];
	/** IAM actions required for the UpdateBrandProfileFromRegistration API call. */
	static readonly UpdateBrandProfileFromRegistration: string[] = [];
	/** IAM actions required for the UpdateNotifyCodeConfiguration API call. */
	static readonly UpdateNotifyCodeConfiguration: string[] = [];
	/** IAM actions required for the UpdateRegistrationsFromBrandProfile API call. */
	static readonly UpdateRegistrationsFromBrandProfile: string[] = [];
	/** IAM actions required for the ValidateNotifyCodeVerification API call. */
	static readonly ValidateNotifyCodeVerification: string[] = [];
}

/**
 * Condition key constants and builders for end-user-messaging.
 */
export class EndUserMessagingConditions {
	/** Condition keys applicable to the CreateBrandProfile action. */
	static readonly CreateBrandProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBrandProfileFromRegistration action. */
	static readonly CreateBrandProfileFromRegistrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNotifyCodeConfiguration action. */
	static readonly CreateNotifyCodeConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
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
