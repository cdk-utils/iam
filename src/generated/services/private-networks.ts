// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/private-networks.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the private-networks service.
 */
export class PrivateNetworksActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "private-networks";

	/** [Write] private-networks:AcknowledgeOrderReceipt */
	static readonly AcknowledgeOrderReceipt =
		"private-networks:AcknowledgeOrderReceipt";
	/** [Write] private-networks:ActivateDeviceIdentifier */
	static readonly ActivateDeviceIdentifier =
		"private-networks:ActivateDeviceIdentifier";
	/** [Write] private-networks:ActivateNetworkSite */
	static readonly ActivateNetworkSite = "private-networks:ActivateNetworkSite";
	/** [Write] private-networks:ConfigureAccessPoint */
	static readonly ConfigureAccessPoint =
		"private-networks:ConfigureAccessPoint";
	/** [Write] private-networks:CreateNetwork */
	static readonly CreateNetwork = "private-networks:CreateNetwork";
	/** [Write] private-networks:CreateNetworkSite */
	static readonly CreateNetworkSite = "private-networks:CreateNetworkSite";
	/** [Write] private-networks:DeactivateDeviceIdentifier */
	static readonly DeactivateDeviceIdentifier =
		"private-networks:DeactivateDeviceIdentifier";
	/** [Write] private-networks:DeleteNetwork */
	static readonly DeleteNetwork = "private-networks:DeleteNetwork";
	/** [Write] private-networks:DeleteNetworkSite */
	static readonly DeleteNetworkSite = "private-networks:DeleteNetworkSite";
	/** [Read] private-networks:GetDeviceIdentifier */
	static readonly actionGetDeviceIdentifier =
		"private-networks:GetDeviceIdentifier";
	/** [Read] private-networks:GetNetwork */
	static readonly actionGetNetwork = "private-networks:GetNetwork";
	/** [Read] private-networks:GetNetworkResource */
	static readonly actionGetNetworkResource =
		"private-networks:GetNetworkResource";
	/** [Read] private-networks:GetNetworkSite */
	static readonly actionGetNetworkSite = "private-networks:GetNetworkSite";
	/** [Read] private-networks:GetOrder */
	static readonly actionGetOrder = "private-networks:GetOrder";
	/** [List] private-networks:ListDeviceIdentifiers */
	static readonly ListDeviceIdentifiers =
		"private-networks:ListDeviceIdentifiers";
	/** [List] private-networks:ListNetworkResources */
	static readonly ListNetworkResources =
		"private-networks:ListNetworkResources";
	/** [List] private-networks:ListNetworkSites */
	static readonly ListNetworkSites = "private-networks:ListNetworkSites";
	/** [List] private-networks:ListNetworks */
	static readonly ListNetworks = "private-networks:ListNetworks";
	/** [List] private-networks:ListOrders */
	static readonly ListOrders = "private-networks:ListOrders";
	/** [List] private-networks:ListTagsForResource */
	static readonly ListTagsForResource = "private-networks:ListTagsForResource";
	/** [Read] private-networks:Ping */
	static readonly Ping = "private-networks:Ping";
	/** [Write] private-networks:StartNetworkResourceUpdate */
	static readonly StartNetworkResourceUpdate =
		"private-networks:StartNetworkResourceUpdate";
	/** [Tagging] private-networks:TagResource */
	static readonly TagResource = "private-networks:TagResource";
	/** [Tagging] private-networks:UntagResource */
	static readonly UntagResource = "private-networks:UntagResource";
	/** [Write] private-networks:UpdateNetworkSite */
	static readonly UpdateNetworkSite = "private-networks:UpdateNetworkSite";
	/** [Write] private-networks:UpdateNetworkSitePlan */
	static readonly UpdateNetworkSitePlan =
		"private-networks:UpdateNetworkSitePlan";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PrivateNetworksActions.actionGetDeviceIdentifier,
		PrivateNetworksActions.actionGetNetwork,
		PrivateNetworksActions.actionGetNetworkResource,
		PrivateNetworksActions.actionGetNetworkSite,
		PrivateNetworksActions.actionGetOrder,
		PrivateNetworksActions.Ping,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PrivateNetworksActions.AcknowledgeOrderReceipt,
		PrivateNetworksActions.ActivateDeviceIdentifier,
		PrivateNetworksActions.ActivateNetworkSite,
		PrivateNetworksActions.ConfigureAccessPoint,
		PrivateNetworksActions.CreateNetwork,
		PrivateNetworksActions.CreateNetworkSite,
		PrivateNetworksActions.DeactivateDeviceIdentifier,
		PrivateNetworksActions.DeleteNetwork,
		PrivateNetworksActions.DeleteNetworkSite,
		PrivateNetworksActions.StartNetworkResourceUpdate,
		PrivateNetworksActions.UpdateNetworkSite,
		PrivateNetworksActions.UpdateNetworkSitePlan,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		PrivateNetworksActions.ListDeviceIdentifiers,
		PrivateNetworksActions.ListNetworkResources,
		PrivateNetworksActions.ListNetworkSites,
		PrivateNetworksActions.ListNetworks,
		PrivateNetworksActions.ListOrders,
		PrivateNetworksActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		PrivateNetworksActions.TagResource,
		PrivateNetworksActions.UntagResource,
	];
}

/**
 * Properties for building a device-identifier ARN.
 */
export interface PrivateNetworksDeviceIdentifierArnProps {
	/** The NetworkName component of the ARN. */
	readonly networkName: string;
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
 * Parsed components of a device-identifier ARN.
 */
export interface PrivateNetworksDeviceIdentifierArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NetworkName component. */
	readonly networkName: string;
	/** The DeviceId component. */
	readonly deviceId: string;
}

/**
 * Properties for building a network ARN.
 */
export interface PrivateNetworksNetworkArnProps {
	/** The NetworkName component of the ARN. */
	readonly networkName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a network ARN.
 */
export interface PrivateNetworksNetworkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NetworkName component. */
	readonly networkName: string;
}

/**
 * Properties for building a network-resource ARN.
 */
export interface PrivateNetworksNetworkResourceArnProps {
	/** The NetworkName component of the ARN. */
	readonly networkName: string;
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
 * Parsed components of a network-resource ARN.
 */
export interface PrivateNetworksNetworkResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NetworkName component. */
	readonly networkName: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a network-site ARN.
 */
export interface PrivateNetworksNetworkSiteArnProps {
	/** The NetworkName component of the ARN. */
	readonly networkName: string;
	/** The NetworkSiteName component of the ARN. */
	readonly networkSiteName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a network-site ARN.
 */
export interface PrivateNetworksNetworkSiteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NetworkName component. */
	readonly networkName: string;
	/** The NetworkSiteName component. */
	readonly networkSiteName: string;
}

/**
 * Properties for building a order ARN.
 */
export interface PrivateNetworksOrderArnProps {
	/** The NetworkName component of the ARN. */
	readonly networkName: string;
	/** The OrderId component of the ARN. */
	readonly orderId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a order ARN.
 */
export interface PrivateNetworksOrderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NetworkName component. */
	readonly networkName: string;
	/** The OrderId component. */
	readonly orderId: string;
}

const DeviceIdentifierArnRegex =
	/^arn:(?<partition>[^:]+):private-networks:(?<region>[^:]*):(?<account>[^:]*):device-identifier\/(?<networkName>[^:/?]+)\/(?<deviceId>[^:/?]+)$/;
const NetworkArnRegex =
	/^arn:(?<partition>[^:]+):private-networks:(?<region>[^:]*):(?<account>[^:]*):network\/(?<networkName>[^:/?]+)$/;
const NetworkResourceArnRegex =
	/^arn:(?<partition>[^:]+):private-networks:(?<region>[^:]*):(?<account>[^:]*):network-resource\/(?<networkName>[^:/?]+)\/(?<resourceId>[^:/?]+)$/;
const NetworkSiteArnRegex =
	/^arn:(?<partition>[^:]+):private-networks:(?<region>[^:]*):(?<account>[^:]*):network-site\/(?<networkName>[^:/?]+)\/(?<networkSiteName>[^:/?]+)$/;
const OrderArnRegex =
	/^arn:(?<partition>[^:]+):private-networks:(?<region>[^:]*):(?<account>[^:]*):order\/(?<networkName>[^:/?]+)\/(?<orderId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for private-networks resources.
 */
export class PrivateNetworksResources {
	/**
	 * Builds an ARN for the device-identifier resource.
	 */
	static deviceIdentifier(
		props: PrivateNetworksDeviceIdentifierArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:private-networks:${props.region ?? "*"}:${props.account ?? "*"}:device-identifier/${props.networkName}/${props.deviceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the device-identifier resource.
	 */
	static isValidDeviceIdentifierArn(arn: string): boolean {
		return DeviceIdentifierArnRegex.test(arn);
	}

	/**
	 * Parses a device-identifier ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeviceIdentifierArn(
		arn: string,
	): PrivateNetworksDeviceIdentifierArnComponents {
		const match = DeviceIdentifierArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid device-identifier ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkName: match.groups!.networkName,
			deviceId: match.groups!.deviceId,
		};
	}

	/**
	 * Builds an ARN for the network resource.
	 */
	static network(props: PrivateNetworksNetworkArnProps): string {
		return `arn:${props.partition ?? "aws"}:private-networks:${props.region ?? "*"}:${props.account ?? "*"}:network/${props.networkName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the network resource.
	 */
	static isValidNetworkArn(arn: string): boolean {
		return NetworkArnRegex.test(arn);
	}

	/**
	 * Parses a network ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNetworkArn(arn: string): PrivateNetworksNetworkArnComponents {
		const match = NetworkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid network ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkName: match.groups!.networkName,
		};
	}

	/**
	 * Builds an ARN for the network-resource resource.
	 */
	static networkResource(
		props: PrivateNetworksNetworkResourceArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:private-networks:${props.region ?? "*"}:${props.account ?? "*"}:network-resource/${props.networkName}/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the network-resource resource.
	 */
	static isValidNetworkResourceArn(arn: string): boolean {
		return NetworkResourceArnRegex.test(arn);
	}

	/**
	 * Parses a network-resource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNetworkResourceArn(
		arn: string,
	): PrivateNetworksNetworkResourceArnComponents {
		const match = NetworkResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid network-resource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkName: match.groups!.networkName,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the network-site resource.
	 */
	static networkSite(props: PrivateNetworksNetworkSiteArnProps): string {
		return `arn:${props.partition ?? "aws"}:private-networks:${props.region ?? "*"}:${props.account ?? "*"}:network-site/${props.networkName}/${props.networkSiteName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the network-site resource.
	 */
	static isValidNetworkSiteArn(arn: string): boolean {
		return NetworkSiteArnRegex.test(arn);
	}

	/**
	 * Parses a network-site ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNetworkSiteArn(
		arn: string,
	): PrivateNetworksNetworkSiteArnComponents {
		const match = NetworkSiteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid network-site ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkName: match.groups!.networkName,
			networkSiteName: match.groups!.networkSiteName,
		};
	}

	/**
	 * Builds an ARN for the order resource.
	 */
	static order(props: PrivateNetworksOrderArnProps): string {
		return `arn:${props.partition ?? "aws"}:private-networks:${props.region ?? "*"}:${props.account ?? "*"}:order/${props.networkName}/${props.orderId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the order resource.
	 */
	static isValidOrderArn(arn: string): boolean {
		return OrderArnRegex.test(arn);
	}

	/**
	 * Parses a order ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOrderArn(arn: string): PrivateNetworksOrderArnComponents {
		const match = OrderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid order ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkName: match.groups!.networkName,
			orderId: match.groups!.orderId,
		};
	}
}

/**
 * Condition key constants and builders for private-networks.
 */
export class PrivateNetworksConditions {
	/** Condition keys applicable to the ActivateDeviceIdentifier action. */
	static readonly ActivateDeviceIdentifierConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ActivateNetworkSite action. */
	static readonly ActivateNetworkSiteConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNetwork action. */
	static readonly CreateNetworkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNetworkSite action. */
	static readonly CreateNetworkSiteConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetDeviceIdentifier action. */
	static readonly actionGetDeviceIdentifierConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetNetwork action. */
	static readonly actionGetNetworkConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetNetworkResource action. */
	static readonly actionGetNetworkResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetNetworkSite action. */
	static readonly actionGetNetworkSiteConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetOrder action. */
	static readonly actionGetOrderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartNetworkResourceUpdate action. */
	static readonly StartNetworkResourceUpdateConditionKeys: string[] = [
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
