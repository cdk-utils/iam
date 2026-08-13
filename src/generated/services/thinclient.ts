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
	static readonly CreateEnvironment = "thinclient:CreateEnvironment";
	/** [Write] thinclient:DeleteDevice */
	static readonly DeleteDevice = "thinclient:DeleteDevice";
	/** [Write] thinclient:DeleteEnvironment */
	static readonly DeleteEnvironment = "thinclient:DeleteEnvironment";
	/** [Write] thinclient:DeregisterDevice */
	static readonly DeregisterDevice = "thinclient:DeregisterDevice";
	/** [Read] thinclient:GetDevice */
	static readonly actionGetDevice = "thinclient:GetDevice";
	/** [Read] thinclient:GetDeviceDetails */
	static readonly actionGetDeviceDetails = "thinclient:GetDeviceDetails";
	/** [Read] thinclient:GetEnvironment */
	static readonly actionGetEnvironment = "thinclient:GetEnvironment";
	/** [Read] thinclient:GetSoftwareSet */
	static readonly actionGetSoftwareSet = "thinclient:GetSoftwareSet";
	/** [List] thinclient:ListDeviceSessions */
	static readonly ListDeviceSessions = "thinclient:ListDeviceSessions";
	/** [List] thinclient:ListDevices */
	static readonly ListDevices = "thinclient:ListDevices";
	/** [List] thinclient:ListEnvironments */
	static readonly ListEnvironments = "thinclient:ListEnvironments";
	/** [List] thinclient:ListSoftwareSets */
	static readonly ListSoftwareSets = "thinclient:ListSoftwareSets";
	/** [List] thinclient:ListTagsForResource */
	static readonly ListTagsForResource = "thinclient:ListTagsForResource";
	/** [Tagging] thinclient:TagResource */
	static readonly TagResource = "thinclient:TagResource";
	/** [Tagging] thinclient:UntagResource */
	static readonly UntagResource = "thinclient:UntagResource";
	/** [Write] thinclient:UpdateDevice */
	static readonly UpdateDevice = "thinclient:UpdateDevice";
	/** [Write] thinclient:UpdateEnvironment */
	static readonly UpdateEnvironment = "thinclient:UpdateEnvironment";
	/** [Write] thinclient:UpdateSoftwareSet */
	static readonly UpdateSoftwareSet = "thinclient:UpdateSoftwareSet";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ThinclientActions.actionGetDevice,
		ThinclientActions.actionGetDeviceDetails,
		ThinclientActions.actionGetEnvironment,
		ThinclientActions.actionGetSoftwareSet,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ThinclientActions.CreateEnvironment,
		ThinclientActions.DeleteDevice,
		ThinclientActions.DeleteEnvironment,
		ThinclientActions.DeregisterDevice,
		ThinclientActions.UpdateDevice,
		ThinclientActions.UpdateEnvironment,
		ThinclientActions.UpdateSoftwareSet,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ThinclientActions.ListDeviceSessions,
		ThinclientActions.ListDevices,
		ThinclientActions.ListEnvironments,
		ThinclientActions.ListSoftwareSets,
		ThinclientActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ThinclientActions.TagResource,
		ThinclientActions.UntagResource,
	];
}

/**
 * Properties for building a device ARN.
 */
export interface ThinclientDeviceArnProps {
	/** The DeviceId component of the ARN. */
	readonly deviceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a device ARN.
 */
export interface ThinclientDeviceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeviceId component. */
	readonly deviceId: string;
}

/**
 * Properties for building a environment ARN.
 */
export interface ThinclientEnvironmentArnProps {
	/** The EnvironmentId component of the ARN. */
	readonly environmentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment ARN.
 */
export interface ThinclientEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
}

/**
 * Properties for building a softwareset ARN.
 */
export interface ThinclientSoftwaresetArnProps {
	/** The SoftwareSetId component of the ARN. */
	readonly softwareSetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a softwareset ARN.
 */
export interface ThinclientSoftwaresetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SoftwareSetId component. */
	readonly softwareSetId: string;
}

const DeviceArnRegex =
	/^arn:(?<partition>[^:]+):thinclient:(?<region>[^:]*):(?<account>[^:]*):device\/(?<deviceId>[^:/?]+)$/;
const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):thinclient:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<environmentId>[^:/?]+)$/;
const SoftwaresetArnRegex =
	/^arn:(?<partition>[^:]+):thinclient:(?<region>[^:]*):(?<account>[^:]*):softwareset\/(?<softwareSetId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for thinclient resources.
 */
export class ThinclientResources {
	/**
	 * Builds an ARN for the device resource.
	 */
	static device(props: ThinclientDeviceArnProps): string {
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
	static parseDeviceArn(arn: string): ThinclientDeviceArnComponents {
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
	static environment(props: ThinclientEnvironmentArnProps): string {
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
	static parseEnvironmentArn(arn: string): ThinclientEnvironmentArnComponents {
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
	static softwareset(props: ThinclientSoftwaresetArnProps): string {
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
	static parseSoftwaresetArn(arn: string): ThinclientSoftwaresetArnComponents {
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
	static readonly CreateEnvironment: string[] = [
		"thinclient:CreateEnvironment",
		"thinclient:TagResource",
	];
	/** IAM actions required for the DeleteDevice API call. */
	static readonly DeleteDevice: string[] = ["thinclient:DeleteDevice"];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DeleteEnvironment: string[] = [
		"thinclient:DeleteEnvironment",
	];
	/** IAM actions required for the DeregisterDevice API call. */
	static readonly DeregisterDevice: string[] = ["thinclient:DeregisterDevice"];
	/** IAM actions required for the GetDevice API call. */
	static readonly opGetDevice: string[] = ["thinclient:GetDevice"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly opGetEnvironment: string[] = ["thinclient:GetEnvironment"];
	/** IAM actions required for the GetSoftwareSet API call. */
	static readonly opGetSoftwareSet: string[] = ["thinclient:GetSoftwareSet"];
	/** IAM actions required for the ListDevices API call. */
	static readonly ListDevices: string[] = ["thinclient:ListDevices"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly ListEnvironments: string[] = ["thinclient:ListEnvironments"];
	/** IAM actions required for the ListSoftwareSets API call. */
	static readonly ListSoftwareSets: string[] = ["thinclient:ListSoftwareSets"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"thinclient:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["thinclient:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["thinclient:UntagResource"];
	/** IAM actions required for the UpdateDevice API call. */
	static readonly UpdateDevice: string[] = ["thinclient:UpdateDevice"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UpdateEnvironment: string[] = [
		"thinclient:TagResource",
		"thinclient:UpdateEnvironment",
	];
	/** IAM actions required for the UpdateSoftwareSet API call. */
	static readonly UpdateSoftwareSet: string[] = [
		"thinclient:UpdateSoftwareSet",
	];
}

/**
 * Condition key constants and builders for thinclient.
 */
export class ThinclientConditions {
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CreateEnvironmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteDevice action. */
	static readonly DeleteDeviceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteEnvironment action. */
	static readonly DeleteEnvironmentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeregisterDevice action. */
	static readonly DeregisterDeviceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDevice action. */
	static readonly actionGetDeviceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDeviceDetails action. */
	static readonly actionGetDeviceDetailsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEnvironment action. */
	static readonly actionGetEnvironmentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSoftwareSet action. */
	static readonly actionGetSoftwareSetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListDeviceSessions action. */
	static readonly ListDeviceSessionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
	/** Condition keys applicable to the UpdateDevice action. */
	static readonly UpdateDeviceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateEnvironment action. */
	static readonly UpdateEnvironmentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSoftwareSet action. */
	static readonly UpdateSoftwareSetConditionKeys: string[] = [
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
