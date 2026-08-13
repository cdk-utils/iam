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
	static readonly ACKNOWLEDGE_ORDER_RECEIPT =
		"private-networks:AcknowledgeOrderReceipt";
	/** [Write] private-networks:ActivateDeviceIdentifier */
	static readonly ACTIVATE_DEVICE_IDENTIFIER =
		"private-networks:ActivateDeviceIdentifier";
	/** [Write] private-networks:ActivateNetworkSite */
	static readonly ACTIVATE_NETWORK_SITE =
		"private-networks:ActivateNetworkSite";
	/** [Write] private-networks:ConfigureAccessPoint */
	static readonly CONFIGURE_ACCESS_POINT =
		"private-networks:ConfigureAccessPoint";
	/** [Write] private-networks:CreateNetwork */
	static readonly CREATE_NETWORK = "private-networks:CreateNetwork";
	/** [Write] private-networks:CreateNetworkSite */
	static readonly CREATE_NETWORK_SITE = "private-networks:CreateNetworkSite";
	/** [Write] private-networks:DeactivateDeviceIdentifier */
	static readonly DEACTIVATE_DEVICE_IDENTIFIER =
		"private-networks:DeactivateDeviceIdentifier";
	/** [Write] private-networks:DeleteNetwork */
	static readonly DELETE_NETWORK = "private-networks:DeleteNetwork";
	/** [Write] private-networks:DeleteNetworkSite */
	static readonly DELETE_NETWORK_SITE = "private-networks:DeleteNetworkSite";
	/** [Read] private-networks:GetDeviceIdentifier */
	static readonly GET_DEVICE_IDENTIFIER =
		"private-networks:GetDeviceIdentifier";
	/** [Read] private-networks:GetNetwork */
	static readonly GET_NETWORK = "private-networks:GetNetwork";
	/** [Read] private-networks:GetNetworkResource */
	static readonly GET_NETWORK_RESOURCE = "private-networks:GetNetworkResource";
	/** [Read] private-networks:GetNetworkSite */
	static readonly GET_NETWORK_SITE = "private-networks:GetNetworkSite";
	/** [Read] private-networks:GetOrder */
	static readonly GET_ORDER = "private-networks:GetOrder";
	/** [List] private-networks:ListDeviceIdentifiers */
	static readonly LIST_DEVICE_IDENTIFIERS =
		"private-networks:ListDeviceIdentifiers";
	/** [List] private-networks:ListNetworkResources */
	static readonly LIST_NETWORK_RESOURCES =
		"private-networks:ListNetworkResources";
	/** [List] private-networks:ListNetworkSites */
	static readonly LIST_NETWORK_SITES = "private-networks:ListNetworkSites";
	/** [List] private-networks:ListNetworks */
	static readonly LIST_NETWORKS = "private-networks:ListNetworks";
	/** [List] private-networks:ListOrders */
	static readonly LIST_ORDERS = "private-networks:ListOrders";
	/** [List] private-networks:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"private-networks:ListTagsForResource";
	/** [Read] private-networks:Ping */
	static readonly PING = "private-networks:Ping";
	/** [Write] private-networks:StartNetworkResourceUpdate */
	static readonly START_NETWORK_RESOURCE_UPDATE =
		"private-networks:StartNetworkResourceUpdate";
	/** [Tagging] private-networks:TagResource */
	static readonly TAG_RESOURCE = "private-networks:TagResource";
	/** [Tagging] private-networks:UntagResource */
	static readonly UNTAG_RESOURCE = "private-networks:UntagResource";
	/** [Write] private-networks:UpdateNetworkSite */
	static readonly UPDATE_NETWORK_SITE = "private-networks:UpdateNetworkSite";
	/** [Write] private-networks:UpdateNetworkSitePlan */
	static readonly UPDATE_NETWORK_SITE_PLAN =
		"private-networks:UpdateNetworkSitePlan";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PrivateNetworksActions.GET_DEVICE_IDENTIFIER,
		PrivateNetworksActions.GET_NETWORK,
		PrivateNetworksActions.GET_NETWORK_RESOURCE,
		PrivateNetworksActions.GET_NETWORK_SITE,
		PrivateNetworksActions.GET_ORDER,
		PrivateNetworksActions.PING,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PrivateNetworksActions.ACKNOWLEDGE_ORDER_RECEIPT,
		PrivateNetworksActions.ACTIVATE_DEVICE_IDENTIFIER,
		PrivateNetworksActions.ACTIVATE_NETWORK_SITE,
		PrivateNetworksActions.CONFIGURE_ACCESS_POINT,
		PrivateNetworksActions.CREATE_NETWORK,
		PrivateNetworksActions.CREATE_NETWORK_SITE,
		PrivateNetworksActions.DEACTIVATE_DEVICE_IDENTIFIER,
		PrivateNetworksActions.DELETE_NETWORK,
		PrivateNetworksActions.DELETE_NETWORK_SITE,
		PrivateNetworksActions.START_NETWORK_RESOURCE_UPDATE,
		PrivateNetworksActions.UPDATE_NETWORK_SITE,
		PrivateNetworksActions.UPDATE_NETWORK_SITE_PLAN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		PrivateNetworksActions.LIST_DEVICE_IDENTIFIERS,
		PrivateNetworksActions.LIST_NETWORK_RESOURCES,
		PrivateNetworksActions.LIST_NETWORK_SITES,
		PrivateNetworksActions.LIST_NETWORKS,
		PrivateNetworksActions.LIST_ORDERS,
		PrivateNetworksActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		PrivateNetworksActions.TAG_RESOURCE,
		PrivateNetworksActions.UNTAG_RESOURCE,
	];
}

const DeviceIdentifierArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):private-networks:(?<region>[^:]*):(?<account>[^:]*):device-identifier/(?<networkName>[^:/?]+)/(?<deviceId>[^:/?]+)$",
);
const NetworkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):private-networks:(?<region>[^:]*):(?<account>[^:]*):network/(?<networkName>[^:/?]+)$",
);
const NetworkResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):private-networks:(?<region>[^:]*):(?<account>[^:]*):network-resource/(?<networkName>[^:/?]+)/(?<resourceId>[^:/?]+)$",
);
const NetworkSiteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):private-networks:(?<region>[^:]*):(?<account>[^:]*):network-site/(?<networkName>[^:/?]+)/(?<networkSiteName>[^:/?]+)$",
);
const OrderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):private-networks:(?<region>[^:]*):(?<account>[^:]*):order/(?<networkName>[^:/?]+)/(?<orderId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for private-networks resources.
 */
export class PrivateNetworksResources {
	/**
	 * Builds an ARN for the device-identifier resource.
	 */
	static deviceIdentifier(props: {
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
	}): string {
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
	static parseDeviceIdentifierArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkName: string;
		deviceId: string;
	} {
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
	static network(props: {
		/** The NetworkName component of the ARN. */
		readonly networkName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseNetworkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkName: string;
	} {
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
	static networkResource(props: {
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
	}): string {
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
	static parseNetworkResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkName: string;
		resourceId: string;
	} {
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
	static networkSite(props: {
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
	}): string {
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
	static parseNetworkSiteArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkName: string;
		networkSiteName: string;
	} {
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
	static order(props: {
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
	}): string {
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
	static parseOrderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkName: string;
		orderId: string;
	} {
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
	static readonly ACTIVATE_DEVICE_IDENTIFIER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ActivateNetworkSite action. */
	static readonly ACTIVATE_NETWORK_SITE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNetwork action. */
	static readonly CREATE_NETWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNetworkSite action. */
	static readonly CREATE_NETWORK_SITE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetDeviceIdentifier action. */
	static readonly GET_DEVICE_IDENTIFIER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetNetwork action. */
	static readonly GET_NETWORK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetNetworkResource action. */
	static readonly GET_NETWORK_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetNetworkSite action. */
	static readonly GET_NETWORK_SITE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetOrder action. */
	static readonly GET_ORDER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartNetworkResourceUpdate action. */
	static readonly START_NETWORK_RESOURCE_UPDATE_CONDITION_KEYS: string[] = [
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
