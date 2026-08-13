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
	static readonly CREATE_DEVICE_ACTIVATION_QR_CODE =
		"one:CreateDeviceActivationQrCode";
	/** [Write] one:CreateDeviceConfigurationTemplate */
	static readonly CREATE_DEVICE_CONFIGURATION_TEMPLATE =
		"one:CreateDeviceConfigurationTemplate";
	/** [Write] one:CreateDeviceInstance */
	static readonly CREATE_DEVICE_INSTANCE = "one:CreateDeviceInstance";
	/** [Write] one:CreateDeviceInstanceConfiguration */
	static readonly CREATE_DEVICE_INSTANCE_CONFIGURATION =
		"one:CreateDeviceInstanceConfiguration";
	/** [Write] one:CreateSite */
	static readonly CREATE_SITE = "one:CreateSite";
	/** [Write] one:DeleteAssociatedDevice */
	static readonly DELETE_ASSOCIATED_DEVICE = "one:DeleteAssociatedDevice";
	/** [Write] one:DeleteDeviceConfigurationTemplate */
	static readonly DELETE_DEVICE_CONFIGURATION_TEMPLATE =
		"one:DeleteDeviceConfigurationTemplate";
	/** [Write] one:DeleteDeviceInstance */
	static readonly DELETE_DEVICE_INSTANCE = "one:DeleteDeviceInstance";
	/** [Write] one:DeleteSite */
	static readonly DELETE_SITE = "one:DeleteSite";
	/** [Write] one:DeleteUserV1 */
	static readonly DELETE_USER_V1 = "one:DeleteUserV1";
	/** [Read] one:GetDeviceConfigurationTemplate */
	static readonly GET_DEVICE_CONFIGURATION_TEMPLATE =
		"one:GetDeviceConfigurationTemplate";
	/** [Read] one:GetDeviceInstance */
	static readonly GET_DEVICE_INSTANCE = "one:GetDeviceInstance";
	/** [Read] one:GetDeviceInstanceConfiguration */
	static readonly GET_DEVICE_INSTANCE_CONFIGURATION =
		"one:GetDeviceInstanceConfiguration";
	/** [Read] one:GetSite */
	static readonly GET_SITE = "one:GetSite";
	/** [Read] one:GetSiteAddress */
	static readonly GET_SITE_ADDRESS = "one:GetSiteAddress";
	/** [List] one:ListDeviceConfigurationTemplates */
	static readonly LIST_DEVICE_CONFIGURATION_TEMPLATES =
		"one:ListDeviceConfigurationTemplates";
	/** [List] one:ListDeviceInstances */
	static readonly LIST_DEVICE_INSTANCES = "one:ListDeviceInstances";
	/** [List] one:ListSites */
	static readonly LIST_SITES = "one:ListSites";
	/** [Read] one:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "one:ListTagsForResource";
	/** [List] one:ListUsers */
	static readonly LIST_USERS = "one:ListUsers";
	/** [List] one:ListUsersV1 */
	static readonly LIST_USERS_V1 = "one:ListUsersV1";
	/** [Write] one:RebootDevice */
	static readonly REBOOT_DEVICE = "one:RebootDevice";
	/** [Tagging] one:TagResource */
	static readonly TAG_RESOURCE = "one:TagResource";
	/** [Tagging] one:UntagResource */
	static readonly UNTAG_RESOURCE = "one:UntagResource";
	/** [Write] one:UpdateDeviceConfigurationTemplate */
	static readonly UPDATE_DEVICE_CONFIGURATION_TEMPLATE =
		"one:UpdateDeviceConfigurationTemplate";
	/** [Write] one:UpdateDeviceInstance */
	static readonly UPDATE_DEVICE_INSTANCE = "one:UpdateDeviceInstance";
	/** [Write] one:UpdateSite */
	static readonly UPDATE_SITE = "one:UpdateSite";
	/** [Write] one:UpdateSiteAddress */
	static readonly UPDATE_SITE_ADDRESS = "one:UpdateSiteAddress";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		OneActions.GET_DEVICE_CONFIGURATION_TEMPLATE,
		OneActions.GET_DEVICE_INSTANCE,
		OneActions.GET_DEVICE_INSTANCE_CONFIGURATION,
		OneActions.GET_SITE,
		OneActions.GET_SITE_ADDRESS,
		OneActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		OneActions.CREATE_DEVICE_ACTIVATION_QR_CODE,
		OneActions.CREATE_DEVICE_CONFIGURATION_TEMPLATE,
		OneActions.CREATE_DEVICE_INSTANCE,
		OneActions.CREATE_DEVICE_INSTANCE_CONFIGURATION,
		OneActions.CREATE_SITE,
		OneActions.DELETE_ASSOCIATED_DEVICE,
		OneActions.DELETE_DEVICE_CONFIGURATION_TEMPLATE,
		OneActions.DELETE_DEVICE_INSTANCE,
		OneActions.DELETE_SITE,
		OneActions.DELETE_USER_V1,
		OneActions.REBOOT_DEVICE,
		OneActions.UPDATE_DEVICE_CONFIGURATION_TEMPLATE,
		OneActions.UPDATE_DEVICE_INSTANCE,
		OneActions.UPDATE_SITE,
		OneActions.UPDATE_SITE_ADDRESS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		OneActions.LIST_DEVICE_CONFIGURATION_TEMPLATES,
		OneActions.LIST_DEVICE_INSTANCES,
		OneActions.LIST_SITES,
		OneActions.LIST_USERS,
		OneActions.LIST_USERS_V1,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		OneActions.TAG_RESOURCE,
		OneActions.UNTAG_RESOURCE,
	];
}

const ConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):one:(?<region>[^:]*):(?<account>[^:]*):device-instance/(?<deviceInstanceId>[^:/?]+)/configuration/(?<version>[^:/?]+)$",
);
const DeviceConfigurationTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):one:(?<region>[^:]*):(?<account>[^:]*):device-configuration-template/(?<templateId>[^:/?]+)$",
);
const DeviceInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):one:(?<region>[^:]*):(?<account>[^:]*):device-instance/(?<deviceInstanceId>[^:/?]+)$",
);
const SiteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):one:(?<region>[^:]*):(?<account>[^:]*):site/(?<siteId>[^:/?]+)$",
);
const UserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):one:(?<region>[^:]*):(?<account>[^:]*):user/(?<userId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for one resources.
 */
export class OneResources {
	/**
	 * Builds an ARN for the configuration resource.
	 */
	static configuration(props: {
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
	}): string {
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
	static parseConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deviceInstanceId: string;
		version: string;
	} {
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
	static deviceConfigurationTemplate(props: {
		/** The TemplateId component of the ARN. */
		readonly templateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDeviceConfigurationTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		templateId: string;
	} {
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
	static deviceInstance(props: {
		/** The DeviceInstanceId component of the ARN. */
		readonly deviceInstanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDeviceInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deviceInstanceId: string;
	} {
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
	static site(props: {
		/** The SiteId component of the ARN. */
		readonly siteId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSiteArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		siteId: string;
	} {
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
	static user(props: {
		/** The UserId component of the ARN. */
		readonly userId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseUserArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		userId: string;
	} {
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
	static readonly CREATE_DEVICE_ACTIVATION_QR_CODE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDeviceConfigurationTemplate action. */
	static readonly CREATE_DEVICE_CONFIGURATION_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateDeviceInstance action. */
	static readonly CREATE_DEVICE_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDeviceInstanceConfiguration action. */
	static readonly CREATE_DEVICE_INSTANCE_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateSite action. */
	static readonly CREATE_SITE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAssociatedDevice action. */
	static readonly DELETE_ASSOCIATED_DEVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteDeviceConfigurationTemplate action. */
	static readonly DELETE_DEVICE_CONFIGURATION_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteDeviceInstance action. */
	static readonly DELETE_DEVICE_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSite action. */
	static readonly DELETE_SITE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDeviceConfigurationTemplate action. */
	static readonly GET_DEVICE_CONFIGURATION_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDeviceInstance action. */
	static readonly GET_DEVICE_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDeviceInstanceConfiguration action. */
	static readonly GET_DEVICE_INSTANCE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSite action. */
	static readonly GET_SITE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSiteAddress action. */
	static readonly GET_SITE_ADDRESS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RebootDevice action. */
	static readonly REBOOT_DEVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateDeviceConfigurationTemplate action. */
	static readonly UPDATE_DEVICE_CONFIGURATION_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateDeviceInstance action. */
	static readonly UPDATE_DEVICE_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSite action. */
	static readonly UPDATE_SITE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSiteAddress action. */
	static readonly UPDATE_SITE_ADDRESS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
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
