// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/one.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the one service.
 */
export class OneActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "one";

	/** [Write] one:CreateDeviceActivationQrCode */
	static readonly CreateDeviceActivationQrCode =
		"one:CreateDeviceActivationQrCode";
	/** [Write] one:CreateDeviceConfigurationTemplate */
	static readonly CreateDeviceConfigurationTemplate =
		"one:CreateDeviceConfigurationTemplate";
	/** [Write] one:CreateDeviceInstance */
	static readonly CreateDeviceInstance = "one:CreateDeviceInstance";
	/** [Write] one:CreateDeviceInstanceConfiguration */
	static readonly CreateDeviceInstanceConfiguration =
		"one:CreateDeviceInstanceConfiguration";
	/** [Write] one:CreateSite */
	static readonly CreateSite = "one:CreateSite";
	/** [Write] one:DeleteAssociatedDevice */
	static readonly DeleteAssociatedDevice = "one:DeleteAssociatedDevice";
	/** [Write] one:DeleteDeviceConfigurationTemplate */
	static readonly DeleteDeviceConfigurationTemplate =
		"one:DeleteDeviceConfigurationTemplate";
	/** [Write] one:DeleteDeviceInstance */
	static readonly DeleteDeviceInstance = "one:DeleteDeviceInstance";
	/** [Write] one:DeleteSite */
	static readonly DeleteSite = "one:DeleteSite";
	/** [Write] one:DeleteUserV1 */
	static readonly DeleteUserV1 = "one:DeleteUserV1";
	/** [Read] one:GetDeviceConfigurationTemplate */
	static readonly actionGetDeviceConfigurationTemplate =
		"one:GetDeviceConfigurationTemplate";
	/** [Read] one:GetDeviceInstance */
	static readonly actionGetDeviceInstance = "one:GetDeviceInstance";
	/** [Read] one:GetDeviceInstanceConfiguration */
	static readonly actionGetDeviceInstanceConfiguration =
		"one:GetDeviceInstanceConfiguration";
	/** [Read] one:GetSite */
	static readonly actionGetSite = "one:GetSite";
	/** [Read] one:GetSiteAddress */
	static readonly actionGetSiteAddress = "one:GetSiteAddress";
	/** [List] one:ListDeviceConfigurationTemplates */
	static readonly ListDeviceConfigurationTemplates =
		"one:ListDeviceConfigurationTemplates";
	/** [List] one:ListDeviceInstances */
	static readonly ListDeviceInstances = "one:ListDeviceInstances";
	/** [List] one:ListSites */
	static readonly ListSites = "one:ListSites";
	/** [Read] one:ListTagsForResource */
	static readonly ListTagsForResource = "one:ListTagsForResource";
	/** [List] one:ListUsers */
	static readonly ListUsers = "one:ListUsers";
	/** [List] one:ListUsersV1 */
	static readonly ListUsersV1 = "one:ListUsersV1";
	/** [Write] one:RebootDevice */
	static readonly RebootDevice = "one:RebootDevice";
	/** [Tagging] one:TagResource */
	static readonly TagResource = "one:TagResource";
	/** [Tagging] one:UntagResource */
	static readonly UntagResource = "one:UntagResource";
	/** [Write] one:UpdateDeviceConfigurationTemplate */
	static readonly UpdateDeviceConfigurationTemplate =
		"one:UpdateDeviceConfigurationTemplate";
	/** [Write] one:UpdateDeviceInstance */
	static readonly UpdateDeviceInstance = "one:UpdateDeviceInstance";
	/** [Write] one:UpdateSite */
	static readonly UpdateSite = "one:UpdateSite";
	/** [Write] one:UpdateSiteAddress */
	static readonly UpdateSiteAddress = "one:UpdateSiteAddress";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		OneActions.actionGetDeviceConfigurationTemplate,
		OneActions.actionGetDeviceInstance,
		OneActions.actionGetDeviceInstanceConfiguration,
		OneActions.actionGetSite,
		OneActions.actionGetSiteAddress,
		OneActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		OneActions.CreateDeviceActivationQrCode,
		OneActions.CreateDeviceConfigurationTemplate,
		OneActions.CreateDeviceInstance,
		OneActions.CreateDeviceInstanceConfiguration,
		OneActions.CreateSite,
		OneActions.DeleteAssociatedDevice,
		OneActions.DeleteDeviceConfigurationTemplate,
		OneActions.DeleteDeviceInstance,
		OneActions.DeleteSite,
		OneActions.DeleteUserV1,
		OneActions.RebootDevice,
		OneActions.UpdateDeviceConfigurationTemplate,
		OneActions.UpdateDeviceInstance,
		OneActions.UpdateSite,
		OneActions.UpdateSiteAddress,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		OneActions.ListDeviceConfigurationTemplates,
		OneActions.ListDeviceInstances,
		OneActions.ListSites,
		OneActions.ListUsers,
		OneActions.ListUsersV1,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		OneActions.TagResource,
		OneActions.UntagResource,
	];
}

/**
 * Properties for building a configuration ARN.
 */
export interface OneConfigurationArnProps {
	/** The DeviceInstanceId component of the ARN. */
	readonly deviceInstanceId: string;
	/** The Version component of the ARN. */
	readonly version: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a configuration ARN.
 */
export interface OneConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeviceInstanceId component. */
	readonly deviceInstanceId: string;
	/** The Version component. */
	readonly version: string;
}

/**
 * Properties for building a device-configuration-template ARN.
 */
export interface OneDeviceConfigurationTemplateArnProps {
	/** The TemplateId component of the ARN. */
	readonly templateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a device-configuration-template ARN.
 */
export interface OneDeviceConfigurationTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TemplateId component. */
	readonly templateId: string;
}

/**
 * Properties for building a device-instance ARN.
 */
export interface OneDeviceInstanceArnProps {
	/** The DeviceInstanceId component of the ARN. */
	readonly deviceInstanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a device-instance ARN.
 */
export interface OneDeviceInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeviceInstanceId component. */
	readonly deviceInstanceId: string;
}

/**
 * Properties for building a site ARN.
 */
export interface OneSiteArnProps {
	/** The SiteId component of the ARN. */
	readonly siteId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a site ARN.
 */
export interface OneSiteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SiteId component. */
	readonly siteId: string;
}

/**
 * Properties for building a user ARN.
 */
export interface OneUserArnProps {
	/** The UserId component of the ARN. */
	readonly userId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a user ARN.
 */
export interface OneUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UserId component. */
	readonly userId: string;
}

const ConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):one:(?<region>[^:]*):(?<account>[^:]*):device-instance\/(?<deviceInstanceId>[^:/?]+)\/configuration\/(?<version>[^:/?]+)$/;
const DeviceConfigurationTemplateArnRegex =
	/^arn:(?<partition>[^:]+):one:(?<region>[^:]*):(?<account>[^:]*):device-configuration-template\/(?<templateId>[^:/?]+)$/;
const DeviceInstanceArnRegex =
	/^arn:(?<partition>[^:]+):one:(?<region>[^:]*):(?<account>[^:]*):device-instance\/(?<deviceInstanceId>[^:/?]+)$/;
const SiteArnRegex =
	/^arn:(?<partition>[^:]+):one:(?<region>[^:]*):(?<account>[^:]*):site\/(?<siteId>[^:/?]+)$/;
const UserArnRegex =
	/^arn:(?<partition>[^:]+):one:(?<region>[^:]*):(?<account>[^:]*):user\/(?<userId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for one resources.
 */
export class OneResources {
	/**
	 * Builds an ARN for the configuration resource.
	 */
	static configuration(props: OneConfigurationArnProps): string {
		return `arn:${props.partition ?? "aws"}:one:${props.region ?? "*"}:${props.account ?? "*"}:device-instance/${props.deviceInstanceId}/configuration/${props.version}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the configuration resource.
	 */
	static isValidConfigurationArn(arn: string): boolean {
		return ConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationArn(arn: string): OneConfigurationArnComponents {
		const match = ConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deviceInstanceId: match.groups!.deviceInstanceId,
			version: match.groups!.version,
		};
	}

	/**
	 * Builds an ARN for the device-configuration-template resource.
	 */
	static deviceConfigurationTemplate(
		props: OneDeviceConfigurationTemplateArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:one:${props.region ?? "*"}:${props.account ?? "*"}:device-configuration-template/${props.templateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the device-configuration-template resource.
	 */
	static isValidDeviceConfigurationTemplateArn(arn: string): boolean {
		return DeviceConfigurationTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a device-configuration-template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeviceConfigurationTemplateArn(
		arn: string,
	): OneDeviceConfigurationTemplateArnComponents {
		const match = DeviceConfigurationTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid device-configuration-template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			templateId: match.groups!.templateId,
		};
	}

	/**
	 * Builds an ARN for the device-instance resource.
	 */
	static deviceInstance(props: OneDeviceInstanceArnProps): string {
		return `arn:${props.partition ?? "aws"}:one:${props.region ?? "*"}:${props.account ?? "*"}:device-instance/${props.deviceInstanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the device-instance resource.
	 */
	static isValidDeviceInstanceArn(arn: string): boolean {
		return DeviceInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a device-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeviceInstanceArn(arn: string): OneDeviceInstanceArnComponents {
		const match = DeviceInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid device-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deviceInstanceId: match.groups!.deviceInstanceId,
		};
	}

	/**
	 * Builds an ARN for the site resource.
	 */
	static site(props: OneSiteArnProps): string {
		return `arn:${props.partition ?? "aws"}:one:${props.region ?? "*"}:${props.account ?? "*"}:site/${props.siteId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the site resource.
	 */
	static isValidSiteArn(arn: string): boolean {
		return SiteArnRegex.test(arn);
	}

	/**
	 * Parses a site ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSiteArn(arn: string): OneSiteArnComponents {
		const match = SiteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid site ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			siteId: match.groups!.siteId,
		};
	}

	/**
	 * Builds an ARN for the user resource.
	 */
	static user(props: OneUserArnProps): string {
		return `arn:${props.partition ?? "aws"}:one:${props.region ?? "*"}:${props.account ?? "*"}:user/${props.userId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the user resource.
	 */
	static isValidUserArn(arn: string): boolean {
		return UserArnRegex.test(arn);
	}

	/**
	 * Parses a user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserArn(arn: string): OneUserArnComponents {
		const match = UserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			userId: match.groups!.userId,
		};
	}
}

/**
 * Condition key constants and builders for one.
 */
export class OneConditions {
	/** Condition keys applicable to the CreateDeviceActivationQrCode action. */
	static readonly CreateDeviceActivationQrCodeConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDeviceConfigurationTemplate action. */
	static readonly CreateDeviceConfigurationTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDeviceInstance action. */
	static readonly CreateDeviceInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDeviceInstanceConfiguration action. */
	static readonly CreateDeviceInstanceConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateSite action. */
	static readonly CreateSiteConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAssociatedDevice action. */
	static readonly DeleteAssociatedDeviceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteDeviceConfigurationTemplate action. */
	static readonly DeleteDeviceConfigurationTemplateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteDeviceInstance action. */
	static readonly DeleteDeviceInstanceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSite action. */
	static readonly DeleteSiteConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDeviceConfigurationTemplate action. */
	static readonly actionGetDeviceConfigurationTemplateConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetDeviceInstance action. */
	static readonly actionGetDeviceInstanceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDeviceInstanceConfiguration action. */
	static readonly actionGetDeviceInstanceConfigurationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetSite action. */
	static readonly actionGetSiteConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSiteAddress action. */
	static readonly actionGetSiteAddressConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RebootDevice action. */
	static readonly RebootDeviceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateDeviceConfigurationTemplate action. */
	static readonly UpdateDeviceConfigurationTemplateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateDeviceInstance action. */
	static readonly UpdateDeviceInstanceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSite action. */
	static readonly UpdateSiteConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSiteAddress action. */
	static readonly UpdateSiteAddressConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
