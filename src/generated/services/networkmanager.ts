// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/networkmanager.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the networkmanager service.
 */
export class NetworkManagerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "networkmanager";

	/** [Write] networkmanager:AcceptAttachment */
	static readonly ACCEPT_ATTACHMENT = "networkmanager:AcceptAttachment";
	/** [Write] networkmanager:AssociateConnectPeer */
	static readonly ASSOCIATE_CONNECT_PEER =
		"networkmanager:AssociateConnectPeer";
	/** [Write] networkmanager:AssociateCustomerGateway */
	static readonly ASSOCIATE_CUSTOMER_GATEWAY =
		"networkmanager:AssociateCustomerGateway";
	/** [Write] networkmanager:AssociateLink */
	static readonly ASSOCIATE_LINK = "networkmanager:AssociateLink";
	/** [Write] networkmanager:AssociateTransitGatewayConnectPeer */
	static readonly ASSOCIATE_TRANSIT_GATEWAY_CONNECT_PEER =
		"networkmanager:AssociateTransitGatewayConnectPeer";
	/** [Write] networkmanager:CreateConnectAttachment */
	static readonly CREATE_CONNECT_ATTACHMENT =
		"networkmanager:CreateConnectAttachment";
	/** [Write] networkmanager:CreateConnectPeer */
	static readonly CREATE_CONNECT_PEER = "networkmanager:CreateConnectPeer";
	/** [Write] networkmanager:CreateConnection */
	static readonly CREATE_CONNECTION = "networkmanager:CreateConnection";
	/** [Write] networkmanager:CreateCoreNetwork */
	static readonly CREATE_CORE_NETWORK = "networkmanager:CreateCoreNetwork";
	/** [Write] networkmanager:CreateCoreNetworkPrefixListAssociation */
	static readonly CREATE_CORE_NETWORK_PREFIX_LIST_ASSOCIATION =
		"networkmanager:CreateCoreNetworkPrefixListAssociation";
	/** [Write] networkmanager:CreateDevice */
	static readonly CREATE_DEVICE = "networkmanager:CreateDevice";
	/** [Write] networkmanager:CreateDirectConnectGatewayAttachment */
	static readonly CREATE_DIRECT_CONNECT_GATEWAY_ATTACHMENT =
		"networkmanager:CreateDirectConnectGatewayAttachment";
	/** [Write] networkmanager:CreateGlobalNetwork */
	static readonly CREATE_GLOBAL_NETWORK = "networkmanager:CreateGlobalNetwork";
	/** [Write] networkmanager:CreateLink */
	static readonly CREATE_LINK = "networkmanager:CreateLink";
	/** [Write] networkmanager:CreateSite */
	static readonly CREATE_SITE = "networkmanager:CreateSite";
	/** [Write] networkmanager:CreateSiteToSiteVpnAttachment */
	static readonly CREATE_SITE_TO_SITE_VPN_ATTACHMENT =
		"networkmanager:CreateSiteToSiteVpnAttachment";
	/** [Write] networkmanager:CreateTransitGatewayPeering */
	static readonly CREATE_TRANSIT_GATEWAY_PEERING =
		"networkmanager:CreateTransitGatewayPeering";
	/** [Write] networkmanager:CreateTransitGatewayRouteTableAttachment */
	static readonly CREATE_TRANSIT_GATEWAY_ROUTE_TABLE_ATTACHMENT =
		"networkmanager:CreateTransitGatewayRouteTableAttachment";
	/** [Write] networkmanager:CreateVpcAttachment */
	static readonly CREATE_VPC_ATTACHMENT = "networkmanager:CreateVpcAttachment";
	/** [Write] networkmanager:DeleteAttachment */
	static readonly DELETE_ATTACHMENT = "networkmanager:DeleteAttachment";
	/** [Write] networkmanager:DeleteConnectPeer */
	static readonly DELETE_CONNECT_PEER = "networkmanager:DeleteConnectPeer";
	/** [Write] networkmanager:DeleteConnection */
	static readonly DELETE_CONNECTION = "networkmanager:DeleteConnection";
	/** [Write] networkmanager:DeleteCoreNetwork */
	static readonly DELETE_CORE_NETWORK = "networkmanager:DeleteCoreNetwork";
	/** [Write] networkmanager:DeleteCoreNetworkPolicyVersion */
	static readonly DELETE_CORE_NETWORK_POLICY_VERSION =
		"networkmanager:DeleteCoreNetworkPolicyVersion";
	/** [Write] networkmanager:DeleteCoreNetworkPrefixListAssociation */
	static readonly DELETE_CORE_NETWORK_PREFIX_LIST_ASSOCIATION =
		"networkmanager:DeleteCoreNetworkPrefixListAssociation";
	/** [Write] networkmanager:DeleteDevice */
	static readonly DELETE_DEVICE = "networkmanager:DeleteDevice";
	/** [Write] networkmanager:DeleteGlobalNetwork */
	static readonly DELETE_GLOBAL_NETWORK = "networkmanager:DeleteGlobalNetwork";
	/** [Write] networkmanager:DeleteLink */
	static readonly DELETE_LINK = "networkmanager:DeleteLink";
	/** [Write] networkmanager:DeletePeering */
	static readonly DELETE_PEERING = "networkmanager:DeletePeering";
	/** [PermissionManagement] networkmanager:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY =
		"networkmanager:DeleteResourcePolicy";
	/** [Write] networkmanager:DeleteSite */
	static readonly DELETE_SITE = "networkmanager:DeleteSite";
	/** [Write] networkmanager:DeregisterTransitGateway */
	static readonly DEREGISTER_TRANSIT_GATEWAY =
		"networkmanager:DeregisterTransitGateway";
	/** [List] networkmanager:DescribeGlobalNetworks */
	static readonly DESCRIBE_GLOBAL_NETWORKS =
		"networkmanager:DescribeGlobalNetworks";
	/** [Write] networkmanager:DisassociateConnectPeer */
	static readonly DISASSOCIATE_CONNECT_PEER =
		"networkmanager:DisassociateConnectPeer";
	/** [Write] networkmanager:DisassociateCustomerGateway */
	static readonly DISASSOCIATE_CUSTOMER_GATEWAY =
		"networkmanager:DisassociateCustomerGateway";
	/** [Write] networkmanager:DisassociateLink */
	static readonly DISASSOCIATE_LINK = "networkmanager:DisassociateLink";
	/** [Write] networkmanager:DisassociateTransitGatewayConnectPeer */
	static readonly DISASSOCIATE_TRANSIT_GATEWAY_CONNECT_PEER =
		"networkmanager:DisassociateTransitGatewayConnectPeer";
	/** [Write] networkmanager:ExecuteCoreNetworkChangeSet */
	static readonly EXECUTE_CORE_NETWORK_CHANGE_SET =
		"networkmanager:ExecuteCoreNetworkChangeSet";
	/** [Read] networkmanager:GetConnectAttachment */
	static readonly GET_CONNECT_ATTACHMENT =
		"networkmanager:GetConnectAttachment";
	/** [Read] networkmanager:GetConnectPeer */
	static readonly GET_CONNECT_PEER = "networkmanager:GetConnectPeer";
	/** [Read] networkmanager:GetConnectPeerAssociations */
	static readonly GET_CONNECT_PEER_ASSOCIATIONS =
		"networkmanager:GetConnectPeerAssociations";
	/** [List] networkmanager:GetConnections */
	static readonly GET_CONNECTIONS = "networkmanager:GetConnections";
	/** [Read] networkmanager:GetCoreNetwork */
	static readonly GET_CORE_NETWORK = "networkmanager:GetCoreNetwork";
	/** [Read] networkmanager:GetCoreNetworkChangeEvents */
	static readonly GET_CORE_NETWORK_CHANGE_EVENTS =
		"networkmanager:GetCoreNetworkChangeEvents";
	/** [Read] networkmanager:GetCoreNetworkChangeSet */
	static readonly GET_CORE_NETWORK_CHANGE_SET =
		"networkmanager:GetCoreNetworkChangeSet";
	/** [Read] networkmanager:GetCoreNetworkPolicy */
	static readonly GET_CORE_NETWORK_POLICY =
		"networkmanager:GetCoreNetworkPolicy";
	/** [List] networkmanager:GetCustomerGatewayAssociations */
	static readonly GET_CUSTOMER_GATEWAY_ASSOCIATIONS =
		"networkmanager:GetCustomerGatewayAssociations";
	/** [List] networkmanager:GetDevices */
	static readonly GET_DEVICES = "networkmanager:GetDevices";
	/** [Read] networkmanager:GetDirectConnectGatewayAttachment */
	static readonly GET_DIRECT_CONNECT_GATEWAY_ATTACHMENT =
		"networkmanager:GetDirectConnectGatewayAttachment";
	/** [List] networkmanager:GetLinkAssociations */
	static readonly GET_LINK_ASSOCIATIONS = "networkmanager:GetLinkAssociations";
	/** [List] networkmanager:GetLinks */
	static readonly GET_LINKS = "networkmanager:GetLinks";
	/** [Read] networkmanager:GetNetworkResourceCounts */
	static readonly GET_NETWORK_RESOURCE_COUNTS =
		"networkmanager:GetNetworkResourceCounts";
	/** [Read] networkmanager:GetNetworkResourceRelationships */
	static readonly GET_NETWORK_RESOURCE_RELATIONSHIPS =
		"networkmanager:GetNetworkResourceRelationships";
	/** [Read] networkmanager:GetNetworkResources */
	static readonly GET_NETWORK_RESOURCES = "networkmanager:GetNetworkResources";
	/** [Read] networkmanager:GetNetworkRoutes */
	static readonly GET_NETWORK_ROUTES = "networkmanager:GetNetworkRoutes";
	/** [Read] networkmanager:GetNetworkTelemetry */
	static readonly GET_NETWORK_TELEMETRY = "networkmanager:GetNetworkTelemetry";
	/** [Read] networkmanager:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "networkmanager:GetResourcePolicy";
	/** [Read] networkmanager:GetRouteAnalysis */
	static readonly GET_ROUTE_ANALYSIS = "networkmanager:GetRouteAnalysis";
	/** [Read] networkmanager:GetSiteToSiteVpnAttachment */
	static readonly GET_SITE_TO_SITE_VPN_ATTACHMENT =
		"networkmanager:GetSiteToSiteVpnAttachment";
	/** [List] networkmanager:GetSites */
	static readonly GET_SITES = "networkmanager:GetSites";
	/** [List] networkmanager:GetTransitGatewayConnectPeerAssociations */
	static readonly GET_TRANSIT_GATEWAY_CONNECT_PEER_ASSOCIATIONS =
		"networkmanager:GetTransitGatewayConnectPeerAssociations";
	/** [Read] networkmanager:GetTransitGatewayPeering */
	static readonly GET_TRANSIT_GATEWAY_PEERING =
		"networkmanager:GetTransitGatewayPeering";
	/** [List] networkmanager:GetTransitGatewayRegistrations */
	static readonly GET_TRANSIT_GATEWAY_REGISTRATIONS =
		"networkmanager:GetTransitGatewayRegistrations";
	/** [Read] networkmanager:GetTransitGatewayRouteTableAttachment */
	static readonly GET_TRANSIT_GATEWAY_ROUTE_TABLE_ATTACHMENT =
		"networkmanager:GetTransitGatewayRouteTableAttachment";
	/** [Read] networkmanager:GetVpcAttachment */
	static readonly GET_VPC_ATTACHMENT = "networkmanager:GetVpcAttachment";
	/** [List] networkmanager:ListAttachmentRoutingPolicyAssociations */
	static readonly LIST_ATTACHMENT_ROUTING_POLICY_ASSOCIATIONS =
		"networkmanager:ListAttachmentRoutingPolicyAssociations";
	/** [List] networkmanager:ListAttachments */
	static readonly LIST_ATTACHMENTS = "networkmanager:ListAttachments";
	/** [List] networkmanager:ListConnectPeers */
	static readonly LIST_CONNECT_PEERS = "networkmanager:ListConnectPeers";
	/** [List] networkmanager:ListCoreNetworkPolicyVersions */
	static readonly LIST_CORE_NETWORK_POLICY_VERSIONS =
		"networkmanager:ListCoreNetworkPolicyVersions";
	/** [List] networkmanager:ListCoreNetworkPrefixListAssociations */
	static readonly LIST_CORE_NETWORK_PREFIX_LIST_ASSOCIATIONS =
		"networkmanager:ListCoreNetworkPrefixListAssociations";
	/** [List] networkmanager:ListCoreNetworkRoutingInformation */
	static readonly LIST_CORE_NETWORK_ROUTING_INFORMATION =
		"networkmanager:ListCoreNetworkRoutingInformation";
	/** [List] networkmanager:ListCoreNetworks */
	static readonly LIST_CORE_NETWORKS = "networkmanager:ListCoreNetworks";
	/** [List] networkmanager:ListOrganizationServiceAccessStatus */
	static readonly LIST_ORGANIZATION_SERVICE_ACCESS_STATUS =
		"networkmanager:ListOrganizationServiceAccessStatus";
	/** [List] networkmanager:ListPeerings */
	static readonly LIST_PEERINGS = "networkmanager:ListPeerings";
	/** [Read] networkmanager:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "networkmanager:ListTagsForResource";
	/** [Write] networkmanager:PutAttachmentRoutingPolicyLabel */
	static readonly PUT_ATTACHMENT_ROUTING_POLICY_LABEL =
		"networkmanager:PutAttachmentRoutingPolicyLabel";
	/** [Write] networkmanager:PutCoreNetworkPolicy */
	static readonly PUT_CORE_NETWORK_POLICY =
		"networkmanager:PutCoreNetworkPolicy";
	/** [PermissionManagement] networkmanager:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "networkmanager:PutResourcePolicy";
	/** [Write] networkmanager:RegisterTransitGateway */
	static readonly REGISTER_TRANSIT_GATEWAY =
		"networkmanager:RegisterTransitGateway";
	/** [Write] networkmanager:RejectAttachment */
	static readonly REJECT_ATTACHMENT = "networkmanager:RejectAttachment";
	/** [Write] networkmanager:RemoveAttachmentRoutingPolicyLabel */
	static readonly REMOVE_ATTACHMENT_ROUTING_POLICY_LABEL =
		"networkmanager:RemoveAttachmentRoutingPolicyLabel";
	/** [Write] networkmanager:RestoreCoreNetworkPolicyVersion */
	static readonly RESTORE_CORE_NETWORK_POLICY_VERSION =
		"networkmanager:RestoreCoreNetworkPolicyVersion";
	/** [PermissionManagement] networkmanager:StartOrganizationServiceAccessUpdate */
	static readonly START_ORGANIZATION_SERVICE_ACCESS_UPDATE =
		"networkmanager:StartOrganizationServiceAccessUpdate";
	/** [Write] networkmanager:StartRouteAnalysis */
	static readonly START_ROUTE_ANALYSIS = "networkmanager:StartRouteAnalysis";
	/** [Tagging] networkmanager:TagResource */
	static readonly TAG_RESOURCE = "networkmanager:TagResource";
	/** [Tagging] networkmanager:UntagResource */
	static readonly UNTAG_RESOURCE = "networkmanager:UntagResource";
	/** [Write] networkmanager:UpdateConnection */
	static readonly UPDATE_CONNECTION = "networkmanager:UpdateConnection";
	/** [Write] networkmanager:UpdateCoreNetwork */
	static readonly UPDATE_CORE_NETWORK = "networkmanager:UpdateCoreNetwork";
	/** [Write] networkmanager:UpdateDevice */
	static readonly UPDATE_DEVICE = "networkmanager:UpdateDevice";
	/** [Write] networkmanager:UpdateDirectConnectGatewayAttachment */
	static readonly UPDATE_DIRECT_CONNECT_GATEWAY_ATTACHMENT =
		"networkmanager:UpdateDirectConnectGatewayAttachment";
	/** [Write] networkmanager:UpdateGlobalNetwork */
	static readonly UPDATE_GLOBAL_NETWORK = "networkmanager:UpdateGlobalNetwork";
	/** [Write] networkmanager:UpdateLink */
	static readonly UPDATE_LINK = "networkmanager:UpdateLink";
	/** [Write] networkmanager:UpdateNetworkResourceMetadata */
	static readonly UPDATE_NETWORK_RESOURCE_METADATA =
		"networkmanager:UpdateNetworkResourceMetadata";
	/** [Write] networkmanager:UpdateSite */
	static readonly UPDATE_SITE = "networkmanager:UpdateSite";
	/** [Write] networkmanager:UpdateVpcAttachment */
	static readonly UPDATE_VPC_ATTACHMENT = "networkmanager:UpdateVpcAttachment";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		NetworkManagerActions.GET_CONNECT_ATTACHMENT,
		NetworkManagerActions.GET_CONNECT_PEER,
		NetworkManagerActions.GET_CONNECT_PEER_ASSOCIATIONS,
		NetworkManagerActions.GET_CORE_NETWORK,
		NetworkManagerActions.GET_CORE_NETWORK_CHANGE_EVENTS,
		NetworkManagerActions.GET_CORE_NETWORK_CHANGE_SET,
		NetworkManagerActions.GET_CORE_NETWORK_POLICY,
		NetworkManagerActions.GET_DIRECT_CONNECT_GATEWAY_ATTACHMENT,
		NetworkManagerActions.GET_NETWORK_RESOURCE_COUNTS,
		NetworkManagerActions.GET_NETWORK_RESOURCE_RELATIONSHIPS,
		NetworkManagerActions.GET_NETWORK_RESOURCES,
		NetworkManagerActions.GET_NETWORK_ROUTES,
		NetworkManagerActions.GET_NETWORK_TELEMETRY,
		NetworkManagerActions.GET_RESOURCE_POLICY,
		NetworkManagerActions.GET_ROUTE_ANALYSIS,
		NetworkManagerActions.GET_SITE_TO_SITE_VPN_ATTACHMENT,
		NetworkManagerActions.GET_TRANSIT_GATEWAY_PEERING,
		NetworkManagerActions.GET_TRANSIT_GATEWAY_ROUTE_TABLE_ATTACHMENT,
		NetworkManagerActions.GET_VPC_ATTACHMENT,
		NetworkManagerActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		NetworkManagerActions.ACCEPT_ATTACHMENT,
		NetworkManagerActions.ASSOCIATE_CONNECT_PEER,
		NetworkManagerActions.ASSOCIATE_CUSTOMER_GATEWAY,
		NetworkManagerActions.ASSOCIATE_LINK,
		NetworkManagerActions.ASSOCIATE_TRANSIT_GATEWAY_CONNECT_PEER,
		NetworkManagerActions.CREATE_CONNECT_ATTACHMENT,
		NetworkManagerActions.CREATE_CONNECT_PEER,
		NetworkManagerActions.CREATE_CONNECTION,
		NetworkManagerActions.CREATE_CORE_NETWORK,
		NetworkManagerActions.CREATE_CORE_NETWORK_PREFIX_LIST_ASSOCIATION,
		NetworkManagerActions.CREATE_DEVICE,
		NetworkManagerActions.CREATE_DIRECT_CONNECT_GATEWAY_ATTACHMENT,
		NetworkManagerActions.CREATE_GLOBAL_NETWORK,
		NetworkManagerActions.CREATE_LINK,
		NetworkManagerActions.CREATE_SITE,
		NetworkManagerActions.CREATE_SITE_TO_SITE_VPN_ATTACHMENT,
		NetworkManagerActions.CREATE_TRANSIT_GATEWAY_PEERING,
		NetworkManagerActions.CREATE_TRANSIT_GATEWAY_ROUTE_TABLE_ATTACHMENT,
		NetworkManagerActions.CREATE_VPC_ATTACHMENT,
		NetworkManagerActions.DELETE_ATTACHMENT,
		NetworkManagerActions.DELETE_CONNECT_PEER,
		NetworkManagerActions.DELETE_CONNECTION,
		NetworkManagerActions.DELETE_CORE_NETWORK,
		NetworkManagerActions.DELETE_CORE_NETWORK_POLICY_VERSION,
		NetworkManagerActions.DELETE_CORE_NETWORK_PREFIX_LIST_ASSOCIATION,
		NetworkManagerActions.DELETE_DEVICE,
		NetworkManagerActions.DELETE_GLOBAL_NETWORK,
		NetworkManagerActions.DELETE_LINK,
		NetworkManagerActions.DELETE_PEERING,
		NetworkManagerActions.DELETE_SITE,
		NetworkManagerActions.DEREGISTER_TRANSIT_GATEWAY,
		NetworkManagerActions.DISASSOCIATE_CONNECT_PEER,
		NetworkManagerActions.DISASSOCIATE_CUSTOMER_GATEWAY,
		NetworkManagerActions.DISASSOCIATE_LINK,
		NetworkManagerActions.DISASSOCIATE_TRANSIT_GATEWAY_CONNECT_PEER,
		NetworkManagerActions.EXECUTE_CORE_NETWORK_CHANGE_SET,
		NetworkManagerActions.PUT_ATTACHMENT_ROUTING_POLICY_LABEL,
		NetworkManagerActions.PUT_CORE_NETWORK_POLICY,
		NetworkManagerActions.REGISTER_TRANSIT_GATEWAY,
		NetworkManagerActions.REJECT_ATTACHMENT,
		NetworkManagerActions.REMOVE_ATTACHMENT_ROUTING_POLICY_LABEL,
		NetworkManagerActions.RESTORE_CORE_NETWORK_POLICY_VERSION,
		NetworkManagerActions.START_ROUTE_ANALYSIS,
		NetworkManagerActions.UPDATE_CONNECTION,
		NetworkManagerActions.UPDATE_CORE_NETWORK,
		NetworkManagerActions.UPDATE_DEVICE,
		NetworkManagerActions.UPDATE_DIRECT_CONNECT_GATEWAY_ATTACHMENT,
		NetworkManagerActions.UPDATE_GLOBAL_NETWORK,
		NetworkManagerActions.UPDATE_LINK,
		NetworkManagerActions.UPDATE_NETWORK_RESOURCE_METADATA,
		NetworkManagerActions.UPDATE_SITE,
		NetworkManagerActions.UPDATE_VPC_ATTACHMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		NetworkManagerActions.DESCRIBE_GLOBAL_NETWORKS,
		NetworkManagerActions.GET_CONNECTIONS,
		NetworkManagerActions.GET_CUSTOMER_GATEWAY_ASSOCIATIONS,
		NetworkManagerActions.GET_DEVICES,
		NetworkManagerActions.GET_LINK_ASSOCIATIONS,
		NetworkManagerActions.GET_LINKS,
		NetworkManagerActions.GET_SITES,
		NetworkManagerActions.GET_TRANSIT_GATEWAY_CONNECT_PEER_ASSOCIATIONS,
		NetworkManagerActions.GET_TRANSIT_GATEWAY_REGISTRATIONS,
		NetworkManagerActions.LIST_ATTACHMENT_ROUTING_POLICY_ASSOCIATIONS,
		NetworkManagerActions.LIST_ATTACHMENTS,
		NetworkManagerActions.LIST_CONNECT_PEERS,
		NetworkManagerActions.LIST_CORE_NETWORK_POLICY_VERSIONS,
		NetworkManagerActions.LIST_CORE_NETWORK_PREFIX_LIST_ASSOCIATIONS,
		NetworkManagerActions.LIST_CORE_NETWORK_ROUTING_INFORMATION,
		NetworkManagerActions.LIST_CORE_NETWORKS,
		NetworkManagerActions.LIST_ORGANIZATION_SERVICE_ACCESS_STATUS,
		NetworkManagerActions.LIST_PEERINGS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		NetworkManagerActions.DELETE_RESOURCE_POLICY,
		NetworkManagerActions.PUT_RESOURCE_POLICY,
		NetworkManagerActions.START_ORGANIZATION_SERVICE_ACCESS_UPDATE,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		NetworkManagerActions.TAG_RESOURCE,
		NetworkManagerActions.UNTAG_RESOURCE,
	];
}

const AttachmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):attachment/(?<resourceId>[^:/?]+)$",
);
const ConnectPeerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):connect-peer/(?<resourceId>[^:/?]+)$",
);
const ConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):connection/(?<globalNetworkId>[^:/?]+)/(?<resourceId>[^:/?]+)$",
);
const CoreNetworkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):core-network/(?<resourceId>[^:/?]+)$",
);
const DeviceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):device/(?<globalNetworkId>[^:/?]+)/(?<resourceId>[^:/?]+)$",
);
const GlobalNetworkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):global-network/(?<resourceId>[^:/?]+)$",
);
const LinkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):link/(?<globalNetworkId>[^:/?]+)/(?<resourceId>[^:/?]+)$",
);
const PeeringArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):peering/(?<resourceId>[^:/?]+)$",
);
const SiteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):site/(?<globalNetworkId>[^:/?]+)/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for networkmanager resources.
 */
export class NetworkManagerResources {
	/**
	 * Builds an ARN for the attachment resource.
	 */
	static attachment(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:networkmanager::${props.account ?? "*"}:attachment/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the attachment resource.
	 */
	static isValidAttachmentArn(arn: string): boolean {
		return AttachmentArnRegex.test(arn);
	}

	/**
	 * Parses a attachment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAttachmentArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = AttachmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid attachment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the connect-peer resource.
	 */
	static connectPeer(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:networkmanager::${props.account ?? "*"}:connect-peer/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connect-peer resource.
	 */
	static isValidConnectPeerArn(arn: string): boolean {
		return ConnectPeerArnRegex.test(arn);
	}

	/**
	 * Parses a connect-peer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectPeerArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = ConnectPeerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connect-peer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the connection resource.
	 */
	static connection(props: {
		/** The GlobalNetworkId component of the ARN. */
		readonly globalNetworkId: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:networkmanager::${props.account ?? "*"}:connection/${props.globalNetworkId}/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connection resource.
	 */
	static isValidConnectionArn(arn: string): boolean {
		return ConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a connection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionArn(arn: string): {
		partition: string;
		account: string;
		globalNetworkId: string;
		resourceId: string;
	} {
		const match = ConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			globalNetworkId: match.groups!.globalNetworkId,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the core-network resource.
	 */
	static coreNetwork(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:networkmanager::${props.account ?? "*"}:core-network/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the core-network resource.
	 */
	static isValidCoreNetworkArn(arn: string): boolean {
		return CoreNetworkArnRegex.test(arn);
	}

	/**
	 * Parses a core-network ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCoreNetworkArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = CoreNetworkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid core-network ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the device resource.
	 */
	static device(props: {
		/** The GlobalNetworkId component of the ARN. */
		readonly globalNetworkId: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:networkmanager::${props.account ?? "*"}:device/${props.globalNetworkId}/${props.resourceId}`;
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
		account: string;
		globalNetworkId: string;
		resourceId: string;
	} {
		const match = DeviceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid device ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			globalNetworkId: match.groups!.globalNetworkId,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the global-network resource.
	 */
	static globalNetwork(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:networkmanager::${props.account ?? "*"}:global-network/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the global-network resource.
	 */
	static isValidGlobalNetworkArn(arn: string): boolean {
		return GlobalNetworkArnRegex.test(arn);
	}

	/**
	 * Parses a global-network ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGlobalNetworkArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = GlobalNetworkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid global-network ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the link resource.
	 */
	static link(props: {
		/** The GlobalNetworkId component of the ARN. */
		readonly globalNetworkId: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:networkmanager::${props.account ?? "*"}:link/${props.globalNetworkId}/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the link resource.
	 */
	static isValidLinkArn(arn: string): boolean {
		return LinkArnRegex.test(arn);
	}

	/**
	 * Parses a link ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLinkArn(arn: string): {
		partition: string;
		account: string;
		globalNetworkId: string;
		resourceId: string;
	} {
		const match = LinkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid link ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			globalNetworkId: match.groups!.globalNetworkId,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the peering resource.
	 */
	static peering(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:networkmanager::${props.account ?? "*"}:peering/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the peering resource.
	 */
	static isValidPeeringArn(arn: string): boolean {
		return PeeringArnRegex.test(arn);
	}

	/**
	 * Parses a peering ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePeeringArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = PeeringArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid peering ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the site resource.
	 */
	static site(props: {
		/** The GlobalNetworkId component of the ARN. */
		readonly globalNetworkId: string;
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:networkmanager::${props.account ?? "*"}:site/${props.globalNetworkId}/${props.resourceId}`;
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
		account: string;
		globalNetworkId: string;
		resourceId: string;
	} {
		const match = SiteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid site ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			globalNetworkId: match.groups!.globalNetworkId,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for networkmanager.
 */
export class NetworkManagerOperations {
	/** IAM actions required for the AcceptAttachment API call. */
	static readonly ACCEPT_ATTACHMENT: string[] = [
		"networkmanager:AcceptAttachment",
	];
	/** IAM actions required for the AssociateConnectPeer API call. */
	static readonly ASSOCIATE_CONNECT_PEER: string[] = [
		"networkmanager:AssociateConnectPeer",
	];
	/** IAM actions required for the AssociateCustomerGateway API call. */
	static readonly ASSOCIATE_CUSTOMER_GATEWAY: string[] = [
		"networkmanager:AssociateCustomerGateway",
	];
	/** IAM actions required for the AssociateLink API call. */
	static readonly ASSOCIATE_LINK: string[] = ["networkmanager:AssociateLink"];
	/** IAM actions required for the AssociateTransitGatewayConnectPeer API call. */
	static readonly ASSOCIATE_TRANSIT_GATEWAY_CONNECT_PEER: string[] = [
		"networkmanager:AssociateTransitGatewayConnectPeer",
	];
	/** IAM actions required for the CreateConnectAttachment API call. */
	static readonly CREATE_CONNECT_ATTACHMENT: string[] = [
		"networkmanager:CreateConnectAttachment",
		"networkmanager:PutAttachmentRoutingPolicyLabel",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateConnectPeer API call. */
	static readonly CREATE_CONNECT_PEER: string[] = [
		"networkmanager:CreateConnectPeer",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateConnection API call. */
	static readonly CREATE_CONNECTION: string[] = [
		"networkmanager:CreateConnection",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateCoreNetwork API call. */
	static readonly CREATE_CORE_NETWORK: string[] = [
		"networkmanager:CreateCoreNetwork",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateCoreNetworkPrefixListAssociation API call. */
	static readonly CREATE_CORE_NETWORK_PREFIX_LIST_ASSOCIATION: string[] = [
		"networkmanager:CreateCoreNetworkPrefixListAssociation",
	];
	/** IAM actions required for the CreateDevice API call. */
	static readonly CREATE_DEVICE: string[] = [
		"networkmanager:CreateDevice",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateDirectConnectGatewayAttachment API call. */
	static readonly CREATE_DIRECT_CONNECT_GATEWAY_ATTACHMENT: string[] = [
		"networkmanager:CreateDirectConnectGatewayAttachment",
		"networkmanager:PutAttachmentRoutingPolicyLabel",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateGlobalNetwork API call. */
	static readonly CREATE_GLOBAL_NETWORK: string[] = [
		"networkmanager:CreateGlobalNetwork",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateLink API call. */
	static readonly CREATE_LINK: string[] = [
		"networkmanager:CreateLink",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateSite API call. */
	static readonly CREATE_SITE: string[] = [
		"networkmanager:CreateSite",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateSiteToSiteVpnAttachment API call. */
	static readonly CREATE_SITE_TO_SITE_VPN_ATTACHMENT: string[] = [
		"networkmanager:CreateSiteToSiteVpnAttachment",
		"networkmanager:PutAttachmentRoutingPolicyLabel",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateTransitGatewayPeering API call. */
	static readonly CREATE_TRANSIT_GATEWAY_PEERING: string[] = [
		"networkmanager:CreateTransitGatewayPeering",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateTransitGatewayRouteTableAttachment API call. */
	static readonly CREATE_TRANSIT_GATEWAY_ROUTE_TABLE_ATTACHMENT: string[] = [
		"networkmanager:CreateTransitGatewayRouteTableAttachment",
		"networkmanager:PutAttachmentRoutingPolicyLabel",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateVpcAttachment API call. */
	static readonly CREATE_VPC_ATTACHMENT: string[] = [
		"networkmanager:CreateVpcAttachment",
		"networkmanager:PutAttachmentRoutingPolicyLabel",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the DeleteAttachment API call. */
	static readonly DELETE_ATTACHMENT: string[] = [
		"networkmanager:DeleteAttachment",
	];
	/** IAM actions required for the DeleteConnectPeer API call. */
	static readonly DELETE_CONNECT_PEER: string[] = [
		"networkmanager:DeleteConnectPeer",
	];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DELETE_CONNECTION: string[] = [
		"networkmanager:DeleteConnection",
	];
	/** IAM actions required for the DeleteCoreNetwork API call. */
	static readonly DELETE_CORE_NETWORK: string[] = [
		"networkmanager:DeleteCoreNetwork",
	];
	/** IAM actions required for the DeleteCoreNetworkPolicyVersion API call. */
	static readonly DELETE_CORE_NETWORK_POLICY_VERSION: string[] = [
		"networkmanager:DeleteCoreNetworkPolicyVersion",
	];
	/** IAM actions required for the DeleteCoreNetworkPrefixListAssociation API call. */
	static readonly DELETE_CORE_NETWORK_PREFIX_LIST_ASSOCIATION: string[] = [
		"networkmanager:DeleteCoreNetworkPrefixListAssociation",
	];
	/** IAM actions required for the DeleteDevice API call. */
	static readonly DELETE_DEVICE: string[] = ["networkmanager:DeleteDevice"];
	/** IAM actions required for the DeleteGlobalNetwork API call. */
	static readonly DELETE_GLOBAL_NETWORK: string[] = [
		"networkmanager:DeleteGlobalNetwork",
	];
	/** IAM actions required for the DeleteLink API call. */
	static readonly DELETE_LINK: string[] = ["networkmanager:DeleteLink"];
	/** IAM actions required for the DeletePeering API call. */
	static readonly DELETE_PEERING: string[] = ["networkmanager:DeletePeering"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"networkmanager:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteSite API call. */
	static readonly DELETE_SITE: string[] = ["networkmanager:DeleteSite"];
	/** IAM actions required for the DeregisterTransitGateway API call. */
	static readonly DEREGISTER_TRANSIT_GATEWAY: string[] = [
		"networkmanager:DeregisterTransitGateway",
	];
	/** IAM actions required for the DescribeGlobalNetworks API call. */
	static readonly DESCRIBE_GLOBAL_NETWORKS: string[] = [
		"networkmanager:DescribeGlobalNetworks",
	];
	/** IAM actions required for the DisassociateConnectPeer API call. */
	static readonly DISASSOCIATE_CONNECT_PEER: string[] = [
		"networkmanager:DisassociateConnectPeer",
	];
	/** IAM actions required for the DisassociateCustomerGateway API call. */
	static readonly DISASSOCIATE_CUSTOMER_GATEWAY: string[] = [
		"networkmanager:DisassociateCustomerGateway",
	];
	/** IAM actions required for the DisassociateLink API call. */
	static readonly DISASSOCIATE_LINK: string[] = [
		"networkmanager:DisassociateLink",
	];
	/** IAM actions required for the DisassociateTransitGatewayConnectPeer API call. */
	static readonly DISASSOCIATE_TRANSIT_GATEWAY_CONNECT_PEER: string[] = [
		"networkmanager:DisassociateTransitGatewayConnectPeer",
	];
	/** IAM actions required for the ExecuteCoreNetworkChangeSet API call. */
	static readonly EXECUTE_CORE_NETWORK_CHANGE_SET: string[] = [
		"networkmanager:ExecuteCoreNetworkChangeSet",
	];
	/** IAM actions required for the GetConnectAttachment API call. */
	static readonly GET_CONNECT_ATTACHMENT: string[] = [
		"networkmanager:GetConnectAttachment",
	];
	/** IAM actions required for the GetConnectPeer API call. */
	static readonly GET_CONNECT_PEER: string[] = [
		"networkmanager:GetConnectPeer",
	];
	/** IAM actions required for the GetConnectPeerAssociations API call. */
	static readonly GET_CONNECT_PEER_ASSOCIATIONS: string[] = [
		"networkmanager:GetConnectPeerAssociations",
	];
	/** IAM actions required for the GetConnections API call. */
	static readonly GET_CONNECTIONS: string[] = ["networkmanager:GetConnections"];
	/** IAM actions required for the GetCoreNetwork API call. */
	static readonly GET_CORE_NETWORK: string[] = [
		"networkmanager:GetCoreNetwork",
	];
	/** IAM actions required for the GetCoreNetworkChangeEvents API call. */
	static readonly GET_CORE_NETWORK_CHANGE_EVENTS: string[] = [
		"networkmanager:GetCoreNetworkChangeEvents",
	];
	/** IAM actions required for the GetCoreNetworkChangeSet API call. */
	static readonly GET_CORE_NETWORK_CHANGE_SET: string[] = [
		"networkmanager:GetCoreNetworkChangeSet",
	];
	/** IAM actions required for the GetCoreNetworkPolicy API call. */
	static readonly GET_CORE_NETWORK_POLICY: string[] = [
		"networkmanager:GetCoreNetworkPolicy",
	];
	/** IAM actions required for the GetCustomerGatewayAssociations API call. */
	static readonly GET_CUSTOMER_GATEWAY_ASSOCIATIONS: string[] = [
		"networkmanager:GetCustomerGatewayAssociations",
	];
	/** IAM actions required for the GetDevices API call. */
	static readonly GET_DEVICES: string[] = ["networkmanager:GetDevices"];
	/** IAM actions required for the GetDirectConnectGatewayAttachment API call. */
	static readonly GET_DIRECT_CONNECT_GATEWAY_ATTACHMENT: string[] = [
		"networkmanager:GetDirectConnectGatewayAttachment",
	];
	/** IAM actions required for the GetLinkAssociations API call. */
	static readonly GET_LINK_ASSOCIATIONS: string[] = [
		"networkmanager:GetLinkAssociations",
	];
	/** IAM actions required for the GetLinks API call. */
	static readonly GET_LINKS: string[] = ["networkmanager:GetLinks"];
	/** IAM actions required for the GetNetworkResourceCounts API call. */
	static readonly GET_NETWORK_RESOURCE_COUNTS: string[] = [
		"networkmanager:GetNetworkResourceCounts",
	];
	/** IAM actions required for the GetNetworkResourceRelationships API call. */
	static readonly GET_NETWORK_RESOURCE_RELATIONSHIPS: string[] = [
		"networkmanager:GetNetworkResourceRelationships",
	];
	/** IAM actions required for the GetNetworkResources API call. */
	static readonly GET_NETWORK_RESOURCES: string[] = [
		"networkmanager:GetNetworkResources",
	];
	/** IAM actions required for the GetNetworkRoutes API call. */
	static readonly GET_NETWORK_ROUTES: string[] = [
		"networkmanager:GetNetworkRoutes",
	];
	/** IAM actions required for the GetNetworkTelemetry API call. */
	static readonly GET_NETWORK_TELEMETRY: string[] = [
		"networkmanager:GetNetworkTelemetry",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [
		"networkmanager:GetResourcePolicy",
	];
	/** IAM actions required for the GetRouteAnalysis API call. */
	static readonly GET_ROUTE_ANALYSIS: string[] = [
		"networkmanager:GetRouteAnalysis",
	];
	/** IAM actions required for the GetSiteToSiteVpnAttachment API call. */
	static readonly GET_SITE_TO_SITE_VPN_ATTACHMENT: string[] = [
		"networkmanager:GetSiteToSiteVpnAttachment",
	];
	/** IAM actions required for the GetSites API call. */
	static readonly GET_SITES: string[] = ["networkmanager:GetSites"];
	/** IAM actions required for the GetTransitGatewayConnectPeerAssociations API call. */
	static readonly GET_TRANSIT_GATEWAY_CONNECT_PEER_ASSOCIATIONS: string[] = [
		"networkmanager:GetTransitGatewayConnectPeerAssociations",
	];
	/** IAM actions required for the GetTransitGatewayPeering API call. */
	static readonly GET_TRANSIT_GATEWAY_PEERING: string[] = [
		"networkmanager:GetTransitGatewayPeering",
	];
	/** IAM actions required for the GetTransitGatewayRegistrations API call. */
	static readonly GET_TRANSIT_GATEWAY_REGISTRATIONS: string[] = [
		"networkmanager:GetTransitGatewayRegistrations",
	];
	/** IAM actions required for the GetTransitGatewayRouteTableAttachment API call. */
	static readonly GET_TRANSIT_GATEWAY_ROUTE_TABLE_ATTACHMENT: string[] = [
		"networkmanager:GetTransitGatewayRouteTableAttachment",
	];
	/** IAM actions required for the GetVpcAttachment API call. */
	static readonly GET_VPC_ATTACHMENT: string[] = [
		"networkmanager:GetVpcAttachment",
	];
	/** IAM actions required for the ListAttachmentRoutingPolicyAssociations API call. */
	static readonly LIST_ATTACHMENT_ROUTING_POLICY_ASSOCIATIONS: string[] = [
		"networkmanager:ListAttachmentRoutingPolicyAssociations",
	];
	/** IAM actions required for the ListAttachments API call. */
	static readonly LIST_ATTACHMENTS: string[] = [
		"networkmanager:ListAttachments",
	];
	/** IAM actions required for the ListConnectPeers API call. */
	static readonly LIST_CONNECT_PEERS: string[] = [
		"networkmanager:ListConnectPeers",
	];
	/** IAM actions required for the ListCoreNetworkPolicyVersions API call. */
	static readonly LIST_CORE_NETWORK_POLICY_VERSIONS: string[] = [
		"networkmanager:ListCoreNetworkPolicyVersions",
	];
	/** IAM actions required for the ListCoreNetworkPrefixListAssociations API call. */
	static readonly LIST_CORE_NETWORK_PREFIX_LIST_ASSOCIATIONS: string[] = [
		"networkmanager:ListCoreNetworkPrefixListAssociations",
	];
	/** IAM actions required for the ListCoreNetworkRoutingInformation API call. */
	static readonly LIST_CORE_NETWORK_ROUTING_INFORMATION: string[] = [
		"networkmanager:ListCoreNetworkRoutingInformation",
	];
	/** IAM actions required for the ListCoreNetworks API call. */
	static readonly LIST_CORE_NETWORKS: string[] = [
		"networkmanager:ListCoreNetworks",
	];
	/** IAM actions required for the ListOrganizationServiceAccessStatus API call. */
	static readonly LIST_ORGANIZATION_SERVICE_ACCESS_STATUS: string[] = [
		"networkmanager:ListOrganizationServiceAccessStatus",
	];
	/** IAM actions required for the ListPeerings API call. */
	static readonly LIST_PEERINGS: string[] = ["networkmanager:ListPeerings"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"networkmanager:ListTagsForResource",
	];
	/** IAM actions required for the PutAttachmentRoutingPolicyLabel API call. */
	static readonly PUT_ATTACHMENT_ROUTING_POLICY_LABEL: string[] = [
		"networkmanager:PutAttachmentRoutingPolicyLabel",
	];
	/** IAM actions required for the PutCoreNetworkPolicy API call. */
	static readonly PUT_CORE_NETWORK_POLICY: string[] = [
		"networkmanager:PutCoreNetworkPolicy",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"networkmanager:PutResourcePolicy",
	];
	/** IAM actions required for the RegisterTransitGateway API call. */
	static readonly REGISTER_TRANSIT_GATEWAY: string[] = [
		"networkmanager:RegisterTransitGateway",
	];
	/** IAM actions required for the RejectAttachment API call. */
	static readonly REJECT_ATTACHMENT: string[] = [
		"networkmanager:RejectAttachment",
	];
	/** IAM actions required for the RemoveAttachmentRoutingPolicyLabel API call. */
	static readonly REMOVE_ATTACHMENT_ROUTING_POLICY_LABEL: string[] = [
		"networkmanager:RemoveAttachmentRoutingPolicyLabel",
	];
	/** IAM actions required for the RestoreCoreNetworkPolicyVersion API call. */
	static readonly RESTORE_CORE_NETWORK_POLICY_VERSION: string[] = [
		"networkmanager:RestoreCoreNetworkPolicyVersion",
	];
	/** IAM actions required for the StartOrganizationServiceAccessUpdate API call. */
	static readonly START_ORGANIZATION_SERVICE_ACCESS_UPDATE: string[] = [
		"networkmanager:StartOrganizationServiceAccessUpdate",
	];
	/** IAM actions required for the StartRouteAnalysis API call. */
	static readonly START_ROUTE_ANALYSIS: string[] = [
		"networkmanager:StartRouteAnalysis",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["networkmanager:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["networkmanager:UntagResource"];
	/** IAM actions required for the UpdateConnection API call. */
	static readonly UPDATE_CONNECTION: string[] = [
		"networkmanager:UpdateConnection",
	];
	/** IAM actions required for the UpdateCoreNetwork API call. */
	static readonly UPDATE_CORE_NETWORK: string[] = [
		"networkmanager:UpdateCoreNetwork",
	];
	/** IAM actions required for the UpdateDevice API call. */
	static readonly UPDATE_DEVICE: string[] = ["networkmanager:UpdateDevice"];
	/** IAM actions required for the UpdateDirectConnectGatewayAttachment API call. */
	static readonly UPDATE_DIRECT_CONNECT_GATEWAY_ATTACHMENT: string[] = [
		"networkmanager:UpdateDirectConnectGatewayAttachment",
	];
	/** IAM actions required for the UpdateGlobalNetwork API call. */
	static readonly UPDATE_GLOBAL_NETWORK: string[] = [
		"networkmanager:UpdateGlobalNetwork",
	];
	/** IAM actions required for the UpdateLink API call. */
	static readonly UPDATE_LINK: string[] = ["networkmanager:UpdateLink"];
	/** IAM actions required for the UpdateNetworkResourceMetadata API call. */
	static readonly UPDATE_NETWORK_RESOURCE_METADATA: string[] = [
		"networkmanager:UpdateNetworkResourceMetadata",
	];
	/** IAM actions required for the UpdateSite API call. */
	static readonly UPDATE_SITE: string[] = ["networkmanager:UpdateSite"];
	/** IAM actions required for the UpdateVpcAttachment API call. */
	static readonly UPDATE_VPC_ATTACHMENT: string[] = [
		"networkmanager:UpdateVpcAttachment",
	];
}

/**
 * Condition key constants and builders for networkmanager.
 */
export class NetworkManagerConditions {
	/** Condition keys applicable to the AssociateCustomerGateway action. */
	static readonly ASSOCIATE_CUSTOMER_GATEWAY_CONDITION_KEYS: string[] = [
		"networkmanager:cgwArn",
	];
	/** Condition keys applicable to the AssociateTransitGatewayConnectPeer action. */
	static readonly ASSOCIATE_TRANSIT_GATEWAY_CONNECT_PEER_CONDITION_KEYS: string[] =
		["networkmanager:tgwConnectPeerArn"];
	/** Condition keys applicable to the CreateConnectAttachment action. */
	static readonly CREATE_CONNECT_ATTACHMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnectPeer action. */
	static readonly CREATE_CONNECT_PEER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CREATE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCoreNetwork action. */
	static readonly CREATE_CORE_NETWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDevice action. */
	static readonly CREATE_DEVICE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDirectConnectGatewayAttachment action. */
	static readonly CREATE_DIRECT_CONNECT_GATEWAY_ATTACHMENT_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"networkmanager:directConnectGatewayArn",
			"networkmanager:edgeLocations",
		];
	/** Condition keys applicable to the CreateGlobalNetwork action. */
	static readonly CREATE_GLOBAL_NETWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLink action. */
	static readonly CREATE_LINK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSite action. */
	static readonly CREATE_SITE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSiteToSiteVpnAttachment action. */
	static readonly CREATE_SITE_TO_SITE_VPN_ATTACHMENT_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"networkmanager:vpnConnectionArn",
		];
	/** Condition keys applicable to the CreateTransitGatewayPeering action. */
	static readonly CREATE_TRANSIT_GATEWAY_PEERING_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"networkmanager:tgwArn",
	];
	/** Condition keys applicable to the CreateTransitGatewayRouteTableAttachment action. */
	static readonly CREATE_TRANSIT_GATEWAY_ROUTE_TABLE_ATTACHMENT_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys", "networkmanager:tgwRtbArn"];
	/** Condition keys applicable to the CreateVpcAttachment action. */
	static readonly CREATE_VPC_ATTACHMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"networkmanager:subnetArns",
		"networkmanager:vpcArn",
	];
	/** Condition keys applicable to the DeregisterTransitGateway action. */
	static readonly DEREGISTER_TRANSIT_GATEWAY_CONDITION_KEYS: string[] = [
		"networkmanager:tgwArn",
	];
	/** Condition keys applicable to the DisassociateCustomerGateway action. */
	static readonly DISASSOCIATE_CUSTOMER_GATEWAY_CONDITION_KEYS: string[] = [
		"networkmanager:cgwArn",
	];
	/** Condition keys applicable to the DisassociateTransitGatewayConnectPeer action. */
	static readonly DISASSOCIATE_TRANSIT_GATEWAY_CONNECT_PEER_CONDITION_KEYS: string[] =
		["networkmanager:tgwConnectPeerArn"];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RegisterTransitGateway action. */
	static readonly REGISTER_TRANSIT_GATEWAY_CONDITION_KEYS: string[] = [
		"networkmanager:tgwArn",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateDirectConnectGatewayAttachment action. */
	static readonly UPDATE_DIRECT_CONNECT_GATEWAY_ATTACHMENT_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys", "networkmanager:edgeLocations"];
	/** Condition keys applicable to the UpdateVpcAttachment action. */
	static readonly UPDATE_VPC_ATTACHMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"networkmanager:subnetArns",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: networkmanager:cgwArn (ARN) */
	static readonly CGW_ARN = "networkmanager:cgwArn";
	/** Condition key: networkmanager:directConnectGatewayArn (ARN) */
	static readonly DIRECT_CONNECT_GATEWAY_ARN =
		"networkmanager:directConnectGatewayArn";
	/** Condition key: networkmanager:edgeLocations (ArrayOfString) */
	static readonly EDGE_LOCATIONS = "networkmanager:edgeLocations";
	/** Condition key: networkmanager:subnetArns (ArrayOfARN) */
	static readonly SUBNET_ARNS = "networkmanager:subnetArns";
	/** Condition key: networkmanager:tgwArn (ARN) */
	static readonly TGW_ARN = "networkmanager:tgwArn";
	/** Condition key: networkmanager:tgwConnectPeerArn (ARN) */
	static readonly TGW_CONNECT_PEER_ARN = "networkmanager:tgwConnectPeerArn";
	/** Condition key: networkmanager:tgwRtbArn (ARN) */
	static readonly TGW_RTB_ARN = "networkmanager:tgwRtbArn";
	/** Condition key: networkmanager:vpcArn (ARN) */
	static readonly VPC_ARN = "networkmanager:vpcArn";
	/** Condition key: networkmanager:vpnConnectionArn (ARN) */
	static readonly VPN_CONNECTION_ARN = "networkmanager:vpnConnectionArn";

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

	/**
	 * Generates a condition block for `networkmanager:cgwArn`.
	 */
	static cgwARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "networkmanager:cgwArn": value } };
	}

	/**
	 * Generates a condition block for `networkmanager:directConnectGatewayArn`.
	 */
	static directConnectGatewayARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "networkmanager:directConnectGatewayArn": value } };
	}

	/**
	 * Generates a condition block for `networkmanager:edgeLocations`.
	 */
	static edgeLocations(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "networkmanager:edgeLocations": values },
		};
	}

	/**
	 * Generates a condition block for `networkmanager:subnetArns`.
	 */
	static subnetArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": { "networkmanager:subnetArns": values },
		};
	}

	/**
	 * Generates a condition block for `networkmanager:tgwArn`.
	 */
	static tgwARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "networkmanager:tgwArn": value } };
	}

	/**
	 * Generates a condition block for `networkmanager:tgwConnectPeerArn`.
	 */
	static tgwConnectPeerARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "networkmanager:tgwConnectPeerArn": value } };
	}

	/**
	 * Generates a condition block for `networkmanager:tgwRtbArn`.
	 */
	static tgwRtbARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "networkmanager:tgwRtbArn": value } };
	}

	/**
	 * Generates a condition block for `networkmanager:vpcArn`.
	 */
	static vpcARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "networkmanager:vpcArn": value } };
	}

	/**
	 * Generates a condition block for `networkmanager:vpnConnectionArn`.
	 */
	static vpnConnectionARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "networkmanager:vpnConnectionArn": value } };
	}
}
