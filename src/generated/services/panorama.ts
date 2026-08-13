// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/panorama.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the panorama service.
 */
export class PanoramaActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "panorama";

	/** [Write] panorama:CreateApplicationInstance */
	static readonly CREATE_APPLICATION_INSTANCE =
		"panorama:CreateApplicationInstance";
	/** [Write] panorama:CreateJobForDevices */
	static readonly CREATE_JOB_FOR_DEVICES = "panorama:CreateJobForDevices";
	/** [Write] panorama:CreateNodeFromTemplateJob */
	static readonly CREATE_NODE_FROM_TEMPLATE_JOB =
		"panorama:CreateNodeFromTemplateJob";
	/** [Write] panorama:CreatePackage */
	static readonly CREATE_PACKAGE = "panorama:CreatePackage";
	/** [Write] panorama:CreatePackageImportJob */
	static readonly CREATE_PACKAGE_IMPORT_JOB = "panorama:CreatePackageImportJob";
	/** [Write] panorama:DeleteDevice */
	static readonly DELETE_DEVICE = "panorama:DeleteDevice";
	/** [Write] panorama:DeletePackage */
	static readonly DELETE_PACKAGE = "panorama:DeletePackage";
	/** [Write] panorama:DeregisterPackageVersion */
	static readonly DEREGISTER_PACKAGE_VERSION =
		"panorama:DeregisterPackageVersion";
	/** [Read] panorama:DescribeApplicationInstance */
	static readonly DESCRIBE_APPLICATION_INSTANCE =
		"panorama:DescribeApplicationInstance";
	/** [Read] panorama:DescribeApplicationInstanceDetails */
	static readonly DESCRIBE_APPLICATION_INSTANCE_DETAILS =
		"panorama:DescribeApplicationInstanceDetails";
	/** [Read] panorama:DescribeDevice */
	static readonly DESCRIBE_DEVICE = "panorama:DescribeDevice";
	/** [Read] panorama:DescribeDeviceJob */
	static readonly DESCRIBE_DEVICE_JOB = "panorama:DescribeDeviceJob";
	/** [Read] panorama:DescribeNode */
	static readonly DESCRIBE_NODE = "panorama:DescribeNode";
	/** [Read] panorama:DescribeNodeFromTemplateJob */
	static readonly DESCRIBE_NODE_FROM_TEMPLATE_JOB =
		"panorama:DescribeNodeFromTemplateJob";
	/** [Read] panorama:DescribePackage */
	static readonly DESCRIBE_PACKAGE = "panorama:DescribePackage";
	/** [Read] panorama:DescribePackageImportJob */
	static readonly DESCRIBE_PACKAGE_IMPORT_JOB =
		"panorama:DescribePackageImportJob";
	/** [Read] panorama:DescribePackageVersion */
	static readonly DESCRIBE_PACKAGE_VERSION = "panorama:DescribePackageVersion";
	/** [Read] panorama:DescribeSoftware */
	static readonly DESCRIBE_SOFTWARE = "panorama:DescribeSoftware";
	/** [Read] panorama:GetWebSocketURL */
	static readonly GET_WEB_SOCKET_URL = "panorama:GetWebSocketURL";
	/** [List] panorama:ListApplicationInstanceDependencies */
	static readonly LIST_APPLICATION_INSTANCE_DEPENDENCIES =
		"panorama:ListApplicationInstanceDependencies";
	/** [List] panorama:ListApplicationInstanceNodeInstances */
	static readonly LIST_APPLICATION_INSTANCE_NODE_INSTANCES =
		"panorama:ListApplicationInstanceNodeInstances";
	/** [List] panorama:ListApplicationInstances */
	static readonly LIST_APPLICATION_INSTANCES =
		"panorama:ListApplicationInstances";
	/** [List] panorama:ListDevices */
	static readonly LIST_DEVICES = "panorama:ListDevices";
	/** [List] panorama:ListDevicesJobs */
	static readonly LIST_DEVICES_JOBS = "panorama:ListDevicesJobs";
	/** [List] panorama:ListNodeFromTemplateJobs */
	static readonly LIST_NODE_FROM_TEMPLATE_JOBS =
		"panorama:ListNodeFromTemplateJobs";
	/** [List] panorama:ListNodes */
	static readonly LIST_NODES = "panorama:ListNodes";
	/** [List] panorama:ListPackageImportJobs */
	static readonly LIST_PACKAGE_IMPORT_JOBS = "panorama:ListPackageImportJobs";
	/** [List] panorama:ListPackages */
	static readonly LIST_PACKAGES = "panorama:ListPackages";
	/** [Read] panorama:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "panorama:ListTagsForResource";
	/** [Write] panorama:ProvisionDevice */
	static readonly PROVISION_DEVICE = "panorama:ProvisionDevice";
	/** [Write] panorama:RegisterPackageVersion */
	static readonly REGISTER_PACKAGE_VERSION = "panorama:RegisterPackageVersion";
	/** [Write] panorama:RemoveApplicationInstance */
	static readonly REMOVE_APPLICATION_INSTANCE =
		"panorama:RemoveApplicationInstance";
	/** [Write] panorama:SignalApplicationInstanceNodeInstances */
	static readonly SIGNAL_APPLICATION_INSTANCE_NODE_INSTANCES =
		"panorama:SignalApplicationInstanceNodeInstances";
	/** [Tagging] panorama:TagResource */
	static readonly TAG_RESOURCE = "panorama:TagResource";
	/** [Tagging] panorama:UntagResource */
	static readonly UNTAG_RESOURCE = "panorama:UntagResource";
	/** [Write] panorama:UpdateDeviceMetadata */
	static readonly UPDATE_DEVICE_METADATA = "panorama:UpdateDeviceMetadata";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PanoramaActions.DESCRIBE_APPLICATION_INSTANCE,
		PanoramaActions.DESCRIBE_APPLICATION_INSTANCE_DETAILS,
		PanoramaActions.DESCRIBE_DEVICE,
		PanoramaActions.DESCRIBE_DEVICE_JOB,
		PanoramaActions.DESCRIBE_NODE,
		PanoramaActions.DESCRIBE_NODE_FROM_TEMPLATE_JOB,
		PanoramaActions.DESCRIBE_PACKAGE,
		PanoramaActions.DESCRIBE_PACKAGE_IMPORT_JOB,
		PanoramaActions.DESCRIBE_PACKAGE_VERSION,
		PanoramaActions.DESCRIBE_SOFTWARE,
		PanoramaActions.GET_WEB_SOCKET_URL,
		PanoramaActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PanoramaActions.CREATE_APPLICATION_INSTANCE,
		PanoramaActions.CREATE_JOB_FOR_DEVICES,
		PanoramaActions.CREATE_NODE_FROM_TEMPLATE_JOB,
		PanoramaActions.CREATE_PACKAGE,
		PanoramaActions.CREATE_PACKAGE_IMPORT_JOB,
		PanoramaActions.DELETE_DEVICE,
		PanoramaActions.DELETE_PACKAGE,
		PanoramaActions.DEREGISTER_PACKAGE_VERSION,
		PanoramaActions.PROVISION_DEVICE,
		PanoramaActions.REGISTER_PACKAGE_VERSION,
		PanoramaActions.REMOVE_APPLICATION_INSTANCE,
		PanoramaActions.SIGNAL_APPLICATION_INSTANCE_NODE_INSTANCES,
		PanoramaActions.UPDATE_DEVICE_METADATA,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		PanoramaActions.LIST_APPLICATION_INSTANCE_DEPENDENCIES,
		PanoramaActions.LIST_APPLICATION_INSTANCE_NODE_INSTANCES,
		PanoramaActions.LIST_APPLICATION_INSTANCES,
		PanoramaActions.LIST_DEVICES,
		PanoramaActions.LIST_DEVICES_JOBS,
		PanoramaActions.LIST_NODE_FROM_TEMPLATE_JOBS,
		PanoramaActions.LIST_NODES,
		PanoramaActions.LIST_PACKAGE_IMPORT_JOBS,
		PanoramaActions.LIST_PACKAGES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		PanoramaActions.TAG_RESOURCE,
		PanoramaActions.UNTAG_RESOURCE,
	];
}

const ApplicationInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):panorama:(?<region>[^:]*):(?<account>[^:]*):applicationInstance/(?<applicationInstanceId>[^:/?]+)$",
);
const DeviceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):panorama:(?<region>[^:]*):(?<account>[^:]*):device/(?<deviceId>[^:/?]+)$",
);
const PackageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):panorama:(?<region>[^:]*):(?<account>[^:]*):package/(?<packageId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for panorama resources.
 */
export class PanoramaResources {
	/**
	 * Builds an ARN for the applicationInstance resource.
	 */
	static applicationInstance(props: {
		/** The ApplicationInstanceId component of the ARN. */
		readonly applicationInstanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:panorama:${props.region ?? "*"}:${props.account ?? "*"}:applicationInstance/${props.applicationInstanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the applicationInstance resource.
	 */
	static isValidApplicationInstanceArn(arn: string): boolean {
		return ApplicationInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a applicationInstance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationInstanceId: string;
	} {
		const match = ApplicationInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid applicationInstance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationInstanceId: match.groups!.applicationInstanceId,
		};
	}

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
		return `arn:${props.partition ?? "aws"}:panorama:${props.region ?? "*"}:${props.account ?? "*"}:device/${props.deviceId}`;
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
	 * Builds an ARN for the package resource.
	 */
	static package(props: {
		/** The PackageId component of the ARN. */
		readonly packageId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:panorama:${props.region ?? "*"}:${props.account ?? "*"}:package/${props.packageId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the package resource.
	 */
	static isValidPackageArn(arn: string): boolean {
		return PackageArnRegex.test(arn);
	}

	/**
	 * Parses a package ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePackageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		packageId: string;
	} {
		const match = PackageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid package ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			packageId: match.groups!.packageId,
		};
	}
}

/**
 * Condition key constants and builders for panorama.
 */
export class PanoramaConditions {
	/** Condition keys applicable to the CreateApplicationInstance action. */
	static readonly CREATE_APPLICATION_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePackage action. */
	static readonly CREATE_PACKAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ProvisionDevice action. */
	static readonly PROVISION_DEVICE_CONDITION_KEYS: string[] = [
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
