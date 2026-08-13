// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/thinclient.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the thinclient service.
 */
export class ThinclientActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "thinclient";

	/** [Write] thinclient:CreateEnvironment */
	static readonly CREATE_ENVIRONMENT = "thinclient:CreateEnvironment";
	/** [Write] thinclient:DeleteDevice */
	static readonly DELETE_DEVICE = "thinclient:DeleteDevice";
	/** [Write] thinclient:DeleteEnvironment */
	static readonly DELETE_ENVIRONMENT = "thinclient:DeleteEnvironment";
	/** [Write] thinclient:DeregisterDevice */
	static readonly DEREGISTER_DEVICE = "thinclient:DeregisterDevice";
	/** [Read] thinclient:GetDevice */
	static readonly GET_DEVICE = "thinclient:GetDevice";
	/** [Read] thinclient:GetDeviceDetails */
	static readonly GET_DEVICE_DETAILS = "thinclient:GetDeviceDetails";
	/** [Read] thinclient:GetEnvironment */
	static readonly GET_ENVIRONMENT = "thinclient:GetEnvironment";
	/** [Read] thinclient:GetSoftwareSet */
	static readonly GET_SOFTWARE_SET = "thinclient:GetSoftwareSet";
	/** [List] thinclient:ListDeviceSessions */
	static readonly LIST_DEVICE_SESSIONS = "thinclient:ListDeviceSessions";
	/** [List] thinclient:ListDevices */
	static readonly LIST_DEVICES = "thinclient:ListDevices";
	/** [List] thinclient:ListEnvironments */
	static readonly LIST_ENVIRONMENTS = "thinclient:ListEnvironments";
	/** [List] thinclient:ListSoftwareSets */
	static readonly LIST_SOFTWARE_SETS = "thinclient:ListSoftwareSets";
	/** [List] thinclient:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "thinclient:ListTagsForResource";
	/** [Tagging] thinclient:TagResource */
	static readonly TAG_RESOURCE = "thinclient:TagResource";
	/** [Tagging] thinclient:UntagResource */
	static readonly UNTAG_RESOURCE = "thinclient:UntagResource";
	/** [Write] thinclient:UpdateDevice */
	static readonly UPDATE_DEVICE = "thinclient:UpdateDevice";
	/** [Write] thinclient:UpdateEnvironment */
	static readonly UPDATE_ENVIRONMENT = "thinclient:UpdateEnvironment";
	/** [Write] thinclient:UpdateSoftwareSet */
	static readonly UPDATE_SOFTWARE_SET = "thinclient:UpdateSoftwareSet";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ThinclientActions.GET_DEVICE,
		ThinclientActions.GET_DEVICE_DETAILS,
		ThinclientActions.GET_ENVIRONMENT,
		ThinclientActions.GET_SOFTWARE_SET,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ThinclientActions.CREATE_ENVIRONMENT,
		ThinclientActions.DELETE_DEVICE,
		ThinclientActions.DELETE_ENVIRONMENT,
		ThinclientActions.DEREGISTER_DEVICE,
		ThinclientActions.UPDATE_DEVICE,
		ThinclientActions.UPDATE_ENVIRONMENT,
		ThinclientActions.UPDATE_SOFTWARE_SET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ThinclientActions.LIST_DEVICE_SESSIONS,
		ThinclientActions.LIST_DEVICES,
		ThinclientActions.LIST_ENVIRONMENTS,
		ThinclientActions.LIST_SOFTWARE_SETS,
		ThinclientActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ThinclientActions.TAG_RESOURCE,
		ThinclientActions.UNTAG_RESOURCE,
	];
}

const DeviceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):thinclient:(?<region>[^:]*):(?<account>[^:]*):device/(?<deviceId>[^:/?]+)$",
);
const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):thinclient:(?<region>[^:]*):(?<account>[^:]*):environment/(?<environmentId>[^:/?]+)$",
);
const SoftwaresetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):thinclient:(?<region>[^:]*):(?<account>[^:]*):softwareset/(?<softwareSetId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for thinclient resources.
 */
export class ThinclientResources {
	/**
	 * Builds an ARN for the device resource.
	 */
	static device(props: {
		/** The DeviceId component of the ARN. */
		readonly deviceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:thinclient:${props.region ?? "*"}:${props.account ?? "*"}:device/${props.deviceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the device resource.
	 */
	static isValidDeviceArn(arn: string): boolean {
		return DeviceArnRegex.test(arn);
	}

	/**
	 * Parses a device ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeviceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deviceId: string;
	} {
		const match = DeviceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid device ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deviceId: match.groups!.deviceId,
		};
	}

	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:thinclient:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.environmentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment resource.
	 */
	static isValidEnvironmentArn(arn: string): boolean {
		return EnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
	} {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
		};
	}

	/**
	 * Builds an ARN for the softwareset resource.
	 */
	static softwareset(props: {
		/** The SoftwareSetId component of the ARN. */
		readonly softwareSetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:thinclient:${props.region ?? "*"}:${props.account ?? "*"}:softwareset/${props.softwareSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the softwareset resource.
	 */
	static isValidSoftwaresetArn(arn: string): boolean {
		return SoftwaresetArnRegex.test(arn);
	}

	/**
	 * Parses a softwareset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSoftwaresetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		softwareSetId: string;
	} {
		const match = SoftwaresetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid softwareset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			softwareSetId: match.groups!.softwareSetId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for thinclient.
 */
export class ThinclientOperations {
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CREATE_ENVIRONMENT: string[] = [
		"thinclient:CreateEnvironment",
		"thinclient:TagResource",
	];
	/** IAM actions required for the DeleteDevice API call. */
	static readonly DELETE_DEVICE: string[] = ["thinclient:DeleteDevice"];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DELETE_ENVIRONMENT: string[] = [
		"thinclient:DeleteEnvironment",
	];
	/** IAM actions required for the DeregisterDevice API call. */
	static readonly DEREGISTER_DEVICE: string[] = ["thinclient:DeregisterDevice"];
	/** IAM actions required for the GetDevice API call. */
	static readonly GET_DEVICE: string[] = ["thinclient:GetDevice"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly GET_ENVIRONMENT: string[] = ["thinclient:GetEnvironment"];
	/** IAM actions required for the GetSoftwareSet API call. */
	static readonly GET_SOFTWARE_SET: string[] = ["thinclient:GetSoftwareSet"];
	/** IAM actions required for the ListDevices API call. */
	static readonly LIST_DEVICES: string[] = ["thinclient:ListDevices"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly LIST_ENVIRONMENTS: string[] = ["thinclient:ListEnvironments"];
	/** IAM actions required for the ListSoftwareSets API call. */
	static readonly LIST_SOFTWARE_SETS: string[] = [
		"thinclient:ListSoftwareSets",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"thinclient:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["thinclient:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["thinclient:UntagResource"];
	/** IAM actions required for the UpdateDevice API call. */
	static readonly UPDATE_DEVICE: string[] = ["thinclient:UpdateDevice"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UPDATE_ENVIRONMENT: string[] = [
		"thinclient:TagResource",
		"thinclient:UpdateEnvironment",
	];
	/** IAM actions required for the UpdateSoftwareSet API call. */
	static readonly UPDATE_SOFTWARE_SET: string[] = [
		"thinclient:UpdateSoftwareSet",
	];
}

/**
 * Condition key constants and builders for thinclient.
 */
export class ThinclientConditions {
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CREATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteDevice action. */
	static readonly DELETE_DEVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteEnvironment action. */
	static readonly DELETE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeregisterDevice action. */
	static readonly DEREGISTER_DEVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDevice action. */
	static readonly GET_DEVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDeviceDetails action. */
	static readonly GET_DEVICE_DETAILS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEnvironment action. */
	static readonly GET_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSoftwareSet action. */
	static readonly GET_SOFTWARE_SET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListDeviceSessions action. */
	static readonly LIST_DEVICE_SESSIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
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
	/** Condition keys applicable to the UpdateDevice action. */
	static readonly UPDATE_DEVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateEnvironment action. */
	static readonly UPDATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSoftwareSet action. */
	static readonly UPDATE_SOFTWARE_SET_CONDITION_KEYS: string[] = [
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
