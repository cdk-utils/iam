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
	static readonly CreateApplicationInstance =
		"panorama:CreateApplicationInstance";
	/** [Write] panorama:CreateJobForDevices */
	static readonly CreateJobForDevices = "panorama:CreateJobForDevices";
	/** [Write] panorama:CreateNodeFromTemplateJob */
	static readonly CreateNodeFromTemplateJob =
		"panorama:CreateNodeFromTemplateJob";
	/** [Write] panorama:CreatePackage */
	static readonly CreatePackage = "panorama:CreatePackage";
	/** [Write] panorama:CreatePackageImportJob */
	static readonly CreatePackageImportJob = "panorama:CreatePackageImportJob";
	/** [Write] panorama:DeleteDevice */
	static readonly DeleteDevice = "panorama:DeleteDevice";
	/** [Write] panorama:DeletePackage */
	static readonly DeletePackage = "panorama:DeletePackage";
	/** [Write] panorama:DeregisterPackageVersion */
	static readonly DeregisterPackageVersion =
		"panorama:DeregisterPackageVersion";
	/** [Read] panorama:DescribeApplicationInstance */
	static readonly DescribeApplicationInstance =
		"panorama:DescribeApplicationInstance";
	/** [Read] panorama:DescribeApplicationInstanceDetails */
	static readonly DescribeApplicationInstanceDetails =
		"panorama:DescribeApplicationInstanceDetails";
	/** [Read] panorama:DescribeDevice */
	static readonly DescribeDevice = "panorama:DescribeDevice";
	/** [Read] panorama:DescribeDeviceJob */
	static readonly DescribeDeviceJob = "panorama:DescribeDeviceJob";
	/** [Read] panorama:DescribeNode */
	static readonly DescribeNode = "panorama:DescribeNode";
	/** [Read] panorama:DescribeNodeFromTemplateJob */
	static readonly DescribeNodeFromTemplateJob =
		"panorama:DescribeNodeFromTemplateJob";
	/** [Read] panorama:DescribePackage */
	static readonly DescribePackage = "panorama:DescribePackage";
	/** [Read] panorama:DescribePackageImportJob */
	static readonly DescribePackageImportJob =
		"panorama:DescribePackageImportJob";
	/** [Read] panorama:DescribePackageVersion */
	static readonly DescribePackageVersion = "panorama:DescribePackageVersion";
	/** [Read] panorama:DescribeSoftware */
	static readonly DescribeSoftware = "panorama:DescribeSoftware";
	/** [Read] panorama:GetWebSocketURL */
	static readonly actionGetWebSocketURL = "panorama:GetWebSocketURL";
	/** [List] panorama:ListApplicationInstanceDependencies */
	static readonly ListApplicationInstanceDependencies =
		"panorama:ListApplicationInstanceDependencies";
	/** [List] panorama:ListApplicationInstanceNodeInstances */
	static readonly ListApplicationInstanceNodeInstances =
		"panorama:ListApplicationInstanceNodeInstances";
	/** [List] panorama:ListApplicationInstances */
	static readonly ListApplicationInstances =
		"panorama:ListApplicationInstances";
	/** [List] panorama:ListDevices */
	static readonly ListDevices = "panorama:ListDevices";
	/** [List] panorama:ListDevicesJobs */
	static readonly ListDevicesJobs = "panorama:ListDevicesJobs";
	/** [List] panorama:ListNodeFromTemplateJobs */
	static readonly ListNodeFromTemplateJobs =
		"panorama:ListNodeFromTemplateJobs";
	/** [List] panorama:ListNodes */
	static readonly ListNodes = "panorama:ListNodes";
	/** [List] panorama:ListPackageImportJobs */
	static readonly ListPackageImportJobs = "panorama:ListPackageImportJobs";
	/** [List] panorama:ListPackages */
	static readonly ListPackages = "panorama:ListPackages";
	/** [Read] panorama:ListTagsForResource */
	static readonly ListTagsForResource = "panorama:ListTagsForResource";
	/** [Write] panorama:ProvisionDevice */
	static readonly ProvisionDevice = "panorama:ProvisionDevice";
	/** [Write] panorama:RegisterPackageVersion */
	static readonly RegisterPackageVersion = "panorama:RegisterPackageVersion";
	/** [Write] panorama:RemoveApplicationInstance */
	static readonly RemoveApplicationInstance =
		"panorama:RemoveApplicationInstance";
	/** [Write] panorama:SignalApplicationInstanceNodeInstances */
	static readonly SignalApplicationInstanceNodeInstances =
		"panorama:SignalApplicationInstanceNodeInstances";
	/** [Tagging] panorama:TagResource */
	static readonly TagResource = "panorama:TagResource";
	/** [Tagging] panorama:UntagResource */
	static readonly UntagResource = "panorama:UntagResource";
	/** [Write] panorama:UpdateDeviceMetadata */
	static readonly UpdateDeviceMetadata = "panorama:UpdateDeviceMetadata";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PanoramaActions.DescribeApplicationInstance,
		PanoramaActions.DescribeApplicationInstanceDetails,
		PanoramaActions.DescribeDevice,
		PanoramaActions.DescribeDeviceJob,
		PanoramaActions.DescribeNode,
		PanoramaActions.DescribeNodeFromTemplateJob,
		PanoramaActions.DescribePackage,
		PanoramaActions.DescribePackageImportJob,
		PanoramaActions.DescribePackageVersion,
		PanoramaActions.DescribeSoftware,
		PanoramaActions.actionGetWebSocketURL,
		PanoramaActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PanoramaActions.CreateApplicationInstance,
		PanoramaActions.CreateJobForDevices,
		PanoramaActions.CreateNodeFromTemplateJob,
		PanoramaActions.CreatePackage,
		PanoramaActions.CreatePackageImportJob,
		PanoramaActions.DeleteDevice,
		PanoramaActions.DeletePackage,
		PanoramaActions.DeregisterPackageVersion,
		PanoramaActions.ProvisionDevice,
		PanoramaActions.RegisterPackageVersion,
		PanoramaActions.RemoveApplicationInstance,
		PanoramaActions.SignalApplicationInstanceNodeInstances,
		PanoramaActions.UpdateDeviceMetadata,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		PanoramaActions.ListApplicationInstanceDependencies,
		PanoramaActions.ListApplicationInstanceNodeInstances,
		PanoramaActions.ListApplicationInstances,
		PanoramaActions.ListDevices,
		PanoramaActions.ListDevicesJobs,
		PanoramaActions.ListNodeFromTemplateJobs,
		PanoramaActions.ListNodes,
		PanoramaActions.ListPackageImportJobs,
		PanoramaActions.ListPackages,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		PanoramaActions.TagResource,
		PanoramaActions.UntagResource,
	];
}

/**
 * Properties for building a applicationInstance ARN.
 */
export interface PanoramaApplicationInstanceArnProps {
	/** The ApplicationInstanceId component of the ARN. */
	readonly applicationInstanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a applicationInstance ARN.
 */
export interface PanoramaApplicationInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationInstanceId component. */
	readonly applicationInstanceId: string;
}

/**
 * Properties for building a device ARN.
 */
export interface PanoramaDeviceArnProps {
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
export interface PanoramaDeviceArnComponents {
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
 * Properties for building a package ARN.
 */
export interface PanoramaPackageArnProps {
	/** The PackageId component of the ARN. */
	readonly packageId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a package ARN.
 */
export interface PanoramaPackageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PackageId component. */
	readonly packageId: string;
}

const ApplicationInstanceArnRegex =
	/^arn:(?<partition>[^:]+):panorama:(?<region>[^:]*):(?<account>[^:]*):applicationInstance\/(?<applicationInstanceId>[^:/?]+)$/;
const DeviceArnRegex =
	/^arn:(?<partition>[^:]+):panorama:(?<region>[^:]*):(?<account>[^:]*):device\/(?<deviceId>[^:/?]+)$/;
const PackageArnRegex =
	/^arn:(?<partition>[^:]+):panorama:(?<region>[^:]*):(?<account>[^:]*):package\/(?<packageId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for panorama resources.
 */
export class PanoramaResources {
	/**
	 * Builds an ARN for the applicationInstance resource.
	 */
	static applicationInstance(
		props: PanoramaApplicationInstanceArnProps,
	): string {
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
	static parseApplicationInstanceArn(
		arn: string,
	): PanoramaApplicationInstanceArnComponents {
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
	static device(props: PanoramaDeviceArnProps): string {
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
	static parseDeviceArn(arn: string): PanoramaDeviceArnComponents {
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
	static package(props: PanoramaPackageArnProps): string {
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
	static parsePackageArn(arn: string): PanoramaPackageArnComponents {
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
	static readonly CreateApplicationInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePackage action. */
	static readonly CreatePackageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ProvisionDevice action. */
	static readonly ProvisionDeviceConditionKeys: string[] = [
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
