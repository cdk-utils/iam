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
	static readonly AcceptAttachment = "networkmanager:AcceptAttachment";
	/** [Write] networkmanager:AssociateConnectPeer */
	static readonly AssociateConnectPeer = "networkmanager:AssociateConnectPeer";
	/** [Write] networkmanager:AssociateCustomerGateway */
	static readonly AssociateCustomerGateway =
		"networkmanager:AssociateCustomerGateway";
	/** [Write] networkmanager:AssociateLink */
	static readonly AssociateLink = "networkmanager:AssociateLink";
	/** [Write] networkmanager:AssociateTransitGatewayConnectPeer */
	static readonly AssociateTransitGatewayConnectPeer =
		"networkmanager:AssociateTransitGatewayConnectPeer";
	/** [Write] networkmanager:CreateConnectAttachment */
	static readonly CreateConnectAttachment =
		"networkmanager:CreateConnectAttachment";
	/** [Write] networkmanager:CreateConnectPeer */
	static readonly CreateConnectPeer = "networkmanager:CreateConnectPeer";
	/** [Write] networkmanager:CreateConnection */
	static readonly CreateConnection = "networkmanager:CreateConnection";
	/** [Write] networkmanager:CreateCoreNetwork */
	static readonly CreateCoreNetwork = "networkmanager:CreateCoreNetwork";
	/** [Write] networkmanager:CreateCoreNetworkPrefixListAssociation */
	static readonly CreateCoreNetworkPrefixListAssociation =
		"networkmanager:CreateCoreNetworkPrefixListAssociation";
	/** [Write] networkmanager:CreateDevice */
	static readonly CreateDevice = "networkmanager:CreateDevice";
	/** [Write] networkmanager:CreateDirectConnectGatewayAttachment */
	static readonly CreateDirectConnectGatewayAttachment =
		"networkmanager:CreateDirectConnectGatewayAttachment";
	/** [Write] networkmanager:CreateGlobalNetwork */
	static readonly CreateGlobalNetwork = "networkmanager:CreateGlobalNetwork";
	/** [Write] networkmanager:CreateLink */
	static readonly CreateLink = "networkmanager:CreateLink";
	/** [Write] networkmanager:CreateSite */
	static readonly CreateSite = "networkmanager:CreateSite";
	/** [Write] networkmanager:CreateSiteToSiteVpnAttachment */
	static readonly CreateSiteToSiteVpnAttachment =
		"networkmanager:CreateSiteToSiteVpnAttachment";
	/** [Write] networkmanager:CreateTransitGatewayPeering */
	static readonly CreateTransitGatewayPeering =
		"networkmanager:CreateTransitGatewayPeering";
	/** [Write] networkmanager:CreateTransitGatewayRouteTableAttachment */
	static readonly CreateTransitGatewayRouteTableAttachment =
		"networkmanager:CreateTransitGatewayRouteTableAttachment";
	/** [Write] networkmanager:CreateVpcAttachment */
	static readonly CreateVpcAttachment = "networkmanager:CreateVpcAttachment";
	/** [Write] networkmanager:DeleteAttachment */
	static readonly DeleteAttachment = "networkmanager:DeleteAttachment";
	/** [Write] networkmanager:DeleteConnectPeer */
	static readonly DeleteConnectPeer = "networkmanager:DeleteConnectPeer";
	/** [Write] networkmanager:DeleteConnection */
	static readonly DeleteConnection = "networkmanager:DeleteConnection";
	/** [Write] networkmanager:DeleteCoreNetwork */
	static readonly DeleteCoreNetwork = "networkmanager:DeleteCoreNetwork";
	/** [Write] networkmanager:DeleteCoreNetworkPolicyVersion */
	static readonly DeleteCoreNetworkPolicyVersion =
		"networkmanager:DeleteCoreNetworkPolicyVersion";
	/** [Write] networkmanager:DeleteCoreNetworkPrefixListAssociation */
	static readonly DeleteCoreNetworkPrefixListAssociation =
		"networkmanager:DeleteCoreNetworkPrefixListAssociation";
	/** [Write] networkmanager:DeleteDevice */
	static readonly DeleteDevice = "networkmanager:DeleteDevice";
	/** [Write] networkmanager:DeleteGlobalNetwork */
	static readonly DeleteGlobalNetwork = "networkmanager:DeleteGlobalNetwork";
	/** [Write] networkmanager:DeleteLink */
	static readonly DeleteLink = "networkmanager:DeleteLink";
	/** [Write] networkmanager:DeletePeering */
	static readonly DeletePeering = "networkmanager:DeletePeering";
	/** [PermissionManagement] networkmanager:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "networkmanager:DeleteResourcePolicy";
	/** [Write] networkmanager:DeleteSite */
	static readonly DeleteSite = "networkmanager:DeleteSite";
	/** [Write] networkmanager:DeregisterTransitGateway */
	static readonly DeregisterTransitGateway =
		"networkmanager:DeregisterTransitGateway";
	/** [List] networkmanager:DescribeGlobalNetworks */
	static readonly DescribeGlobalNetworks =
		"networkmanager:DescribeGlobalNetworks";
	/** [Write] networkmanager:DisassociateConnectPeer */
	static readonly DisassociateConnectPeer =
		"networkmanager:DisassociateConnectPeer";
	/** [Write] networkmanager:DisassociateCustomerGateway */
	static readonly DisassociateCustomerGateway =
		"networkmanager:DisassociateCustomerGateway";
	/** [Write] networkmanager:DisassociateLink */
	static readonly DisassociateLink = "networkmanager:DisassociateLink";
	/** [Write] networkmanager:DisassociateTransitGatewayConnectPeer */
	static readonly DisassociateTransitGatewayConnectPeer =
		"networkmanager:DisassociateTransitGatewayConnectPeer";
	/** [Write] networkmanager:ExecuteCoreNetworkChangeSet */
	static readonly ExecuteCoreNetworkChangeSet =
		"networkmanager:ExecuteCoreNetworkChangeSet";
	/** [Read] networkmanager:GetConnectAttachment */
	static readonly actionGetConnectAttachment =
		"networkmanager:GetConnectAttachment";
	/** [Read] networkmanager:GetConnectPeer */
	static readonly actionGetConnectPeer = "networkmanager:GetConnectPeer";
	/** [Read] networkmanager:GetConnectPeerAssociations */
	static readonly actionGetConnectPeerAssociations =
		"networkmanager:GetConnectPeerAssociations";
	/** [List] networkmanager:GetConnections */
	static readonly actionGetConnections = "networkmanager:GetConnections";
	/** [Read] networkmanager:GetCoreNetwork */
	static readonly actionGetCoreNetwork = "networkmanager:GetCoreNetwork";
	/** [Read] networkmanager:GetCoreNetworkChangeEvents */
	static readonly actionGetCoreNetworkChangeEvents =
		"networkmanager:GetCoreNetworkChangeEvents";
	/** [Read] networkmanager:GetCoreNetworkChangeSet */
	static readonly actionGetCoreNetworkChangeSet =
		"networkmanager:GetCoreNetworkChangeSet";
	/** [Read] networkmanager:GetCoreNetworkPolicy */
	static readonly actionGetCoreNetworkPolicy =
		"networkmanager:GetCoreNetworkPolicy";
	/** [List] networkmanager:GetCustomerGatewayAssociations */
	static readonly actionGetCustomerGatewayAssociations =
		"networkmanager:GetCustomerGatewayAssociations";
	/** [List] networkmanager:GetDevices */
	static readonly actionGetDevices = "networkmanager:GetDevices";
	/** [Read] networkmanager:GetDirectConnectGatewayAttachment */
	static readonly actionGetDirectConnectGatewayAttachment =
		"networkmanager:GetDirectConnectGatewayAttachment";
	/** [List] networkmanager:GetLinkAssociations */
	static readonly actionGetLinkAssociations =
		"networkmanager:GetLinkAssociations";
	/** [List] networkmanager:GetLinks */
	static readonly actionGetLinks = "networkmanager:GetLinks";
	/** [Read] networkmanager:GetNetworkResourceCounts */
	static readonly actionGetNetworkResourceCounts =
		"networkmanager:GetNetworkResourceCounts";
	/** [Read] networkmanager:GetNetworkResourceRelationships */
	static readonly actionGetNetworkResourceRelationships =
		"networkmanager:GetNetworkResourceRelationships";
	/** [Read] networkmanager:GetNetworkResources */
	static readonly actionGetNetworkResources =
		"networkmanager:GetNetworkResources";
	/** [Read] networkmanager:GetNetworkRoutes */
	static readonly actionGetNetworkRoutes = "networkmanager:GetNetworkRoutes";
	/** [Read] networkmanager:GetNetworkTelemetry */
	static readonly actionGetNetworkTelemetry =
		"networkmanager:GetNetworkTelemetry";
	/** [Read] networkmanager:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "networkmanager:GetResourcePolicy";
	/** [Read] networkmanager:GetRouteAnalysis */
	static readonly actionGetRouteAnalysis = "networkmanager:GetRouteAnalysis";
	/** [Read] networkmanager:GetSiteToSiteVpnAttachment */
	static readonly actionGetSiteToSiteVpnAttachment =
		"networkmanager:GetSiteToSiteVpnAttachment";
	/** [List] networkmanager:GetSites */
	static readonly actionGetSites = "networkmanager:GetSites";
	/** [List] networkmanager:GetTransitGatewayConnectPeerAssociations */
	static readonly actionGetTransitGatewayConnectPeerAssociations =
		"networkmanager:GetTransitGatewayConnectPeerAssociations";
	/** [Read] networkmanager:GetTransitGatewayPeering */
	static readonly actionGetTransitGatewayPeering =
		"networkmanager:GetTransitGatewayPeering";
	/** [List] networkmanager:GetTransitGatewayRegistrations */
	static readonly actionGetTransitGatewayRegistrations =
		"networkmanager:GetTransitGatewayRegistrations";
	/** [Read] networkmanager:GetTransitGatewayRouteTableAttachment */
	static readonly actionGetTransitGatewayRouteTableAttachment =
		"networkmanager:GetTransitGatewayRouteTableAttachment";
	/** [Read] networkmanager:GetVpcAttachment */
	static readonly actionGetVpcAttachment = "networkmanager:GetVpcAttachment";
	/** [List] networkmanager:ListAttachmentRoutingPolicyAssociations */
	static readonly ListAttachmentRoutingPolicyAssociations =
		"networkmanager:ListAttachmentRoutingPolicyAssociations";
	/** [List] networkmanager:ListAttachments */
	static readonly ListAttachments = "networkmanager:ListAttachments";
	/** [List] networkmanager:ListConnectPeers */
	static readonly ListConnectPeers = "networkmanager:ListConnectPeers";
	/** [List] networkmanager:ListCoreNetworkPolicyVersions */
	static readonly ListCoreNetworkPolicyVersions =
		"networkmanager:ListCoreNetworkPolicyVersions";
	/** [List] networkmanager:ListCoreNetworkPrefixListAssociations */
	static readonly ListCoreNetworkPrefixListAssociations =
		"networkmanager:ListCoreNetworkPrefixListAssociations";
	/** [List] networkmanager:ListCoreNetworkRoutingInformation */
	static readonly ListCoreNetworkRoutingInformation =
		"networkmanager:ListCoreNetworkRoutingInformation";
	/** [List] networkmanager:ListCoreNetworks */
	static readonly ListCoreNetworks = "networkmanager:ListCoreNetworks";
	/** [List] networkmanager:ListOrganizationServiceAccessStatus */
	static readonly ListOrganizationServiceAccessStatus =
		"networkmanager:ListOrganizationServiceAccessStatus";
	/** [List] networkmanager:ListPeerings */
	static readonly ListPeerings = "networkmanager:ListPeerings";
	/** [Read] networkmanager:ListTagsForResource */
	static readonly ListTagsForResource = "networkmanager:ListTagsForResource";
	/** [Write] networkmanager:PutAttachmentRoutingPolicyLabel */
	static readonly PutAttachmentRoutingPolicyLabel =
		"networkmanager:PutAttachmentRoutingPolicyLabel";
	/** [Write] networkmanager:PutCoreNetworkPolicy */
	static readonly PutCoreNetworkPolicy = "networkmanager:PutCoreNetworkPolicy";
	/** [PermissionManagement] networkmanager:PutResourcePolicy */
	static readonly PutResourcePolicy = "networkmanager:PutResourcePolicy";
	/** [Write] networkmanager:RegisterTransitGateway */
	static readonly RegisterTransitGateway =
		"networkmanager:RegisterTransitGateway";
	/** [Write] networkmanager:RejectAttachment */
	static readonly RejectAttachment = "networkmanager:RejectAttachment";
	/** [Write] networkmanager:RemoveAttachmentRoutingPolicyLabel */
	static readonly RemoveAttachmentRoutingPolicyLabel =
		"networkmanager:RemoveAttachmentRoutingPolicyLabel";
	/** [Write] networkmanager:RestoreCoreNetworkPolicyVersion */
	static readonly RestoreCoreNetworkPolicyVersion =
		"networkmanager:RestoreCoreNetworkPolicyVersion";
	/** [PermissionManagement] networkmanager:StartOrganizationServiceAccessUpdate */
	static readonly StartOrganizationServiceAccessUpdate =
		"networkmanager:StartOrganizationServiceAccessUpdate";
	/** [Write] networkmanager:StartRouteAnalysis */
	static readonly StartRouteAnalysis = "networkmanager:StartRouteAnalysis";
	/** [Tagging] networkmanager:TagResource */
	static readonly TagResource = "networkmanager:TagResource";
	/** [Tagging] networkmanager:UntagResource */
	static readonly UntagResource = "networkmanager:UntagResource";
	/** [Write] networkmanager:UpdateConnection */
	static readonly UpdateConnection = "networkmanager:UpdateConnection";
	/** [Write] networkmanager:UpdateCoreNetwork */
	static readonly UpdateCoreNetwork = "networkmanager:UpdateCoreNetwork";
	/** [Write] networkmanager:UpdateDevice */
	static readonly UpdateDevice = "networkmanager:UpdateDevice";
	/** [Write] networkmanager:UpdateDirectConnectGatewayAttachment */
	static readonly UpdateDirectConnectGatewayAttachment =
		"networkmanager:UpdateDirectConnectGatewayAttachment";
	/** [Write] networkmanager:UpdateGlobalNetwork */
	static readonly UpdateGlobalNetwork = "networkmanager:UpdateGlobalNetwork";
	/** [Write] networkmanager:UpdateLink */
	static readonly UpdateLink = "networkmanager:UpdateLink";
	/** [Write] networkmanager:UpdateNetworkResourceMetadata */
	static readonly UpdateNetworkResourceMetadata =
		"networkmanager:UpdateNetworkResourceMetadata";
	/** [Write] networkmanager:UpdateSite */
	static readonly UpdateSite = "networkmanager:UpdateSite";
	/** [Write] networkmanager:UpdateVpcAttachment */
	static readonly UpdateVpcAttachment = "networkmanager:UpdateVpcAttachment";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		NetworkManagerActions.actionGetConnectAttachment,
		NetworkManagerActions.actionGetConnectPeer,
		NetworkManagerActions.actionGetConnectPeerAssociations,
		NetworkManagerActions.actionGetCoreNetwork,
		NetworkManagerActions.actionGetCoreNetworkChangeEvents,
		NetworkManagerActions.actionGetCoreNetworkChangeSet,
		NetworkManagerActions.actionGetCoreNetworkPolicy,
		NetworkManagerActions.actionGetDirectConnectGatewayAttachment,
		NetworkManagerActions.actionGetNetworkResourceCounts,
		NetworkManagerActions.actionGetNetworkResourceRelationships,
		NetworkManagerActions.actionGetNetworkResources,
		NetworkManagerActions.actionGetNetworkRoutes,
		NetworkManagerActions.actionGetNetworkTelemetry,
		NetworkManagerActions.actionGetResourcePolicy,
		NetworkManagerActions.actionGetRouteAnalysis,
		NetworkManagerActions.actionGetSiteToSiteVpnAttachment,
		NetworkManagerActions.actionGetTransitGatewayPeering,
		NetworkManagerActions.actionGetTransitGatewayRouteTableAttachment,
		NetworkManagerActions.actionGetVpcAttachment,
		NetworkManagerActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		NetworkManagerActions.AcceptAttachment,
		NetworkManagerActions.AssociateConnectPeer,
		NetworkManagerActions.AssociateCustomerGateway,
		NetworkManagerActions.AssociateLink,
		NetworkManagerActions.AssociateTransitGatewayConnectPeer,
		NetworkManagerActions.CreateConnectAttachment,
		NetworkManagerActions.CreateConnectPeer,
		NetworkManagerActions.CreateConnection,
		NetworkManagerActions.CreateCoreNetwork,
		NetworkManagerActions.CreateCoreNetworkPrefixListAssociation,
		NetworkManagerActions.CreateDevice,
		NetworkManagerActions.CreateDirectConnectGatewayAttachment,
		NetworkManagerActions.CreateGlobalNetwork,
		NetworkManagerActions.CreateLink,
		NetworkManagerActions.CreateSite,
		NetworkManagerActions.CreateSiteToSiteVpnAttachment,
		NetworkManagerActions.CreateTransitGatewayPeering,
		NetworkManagerActions.CreateTransitGatewayRouteTableAttachment,
		NetworkManagerActions.CreateVpcAttachment,
		NetworkManagerActions.DeleteAttachment,
		NetworkManagerActions.DeleteConnectPeer,
		NetworkManagerActions.DeleteConnection,
		NetworkManagerActions.DeleteCoreNetwork,
		NetworkManagerActions.DeleteCoreNetworkPolicyVersion,
		NetworkManagerActions.DeleteCoreNetworkPrefixListAssociation,
		NetworkManagerActions.DeleteDevice,
		NetworkManagerActions.DeleteGlobalNetwork,
		NetworkManagerActions.DeleteLink,
		NetworkManagerActions.DeletePeering,
		NetworkManagerActions.DeleteSite,
		NetworkManagerActions.DeregisterTransitGateway,
		NetworkManagerActions.DisassociateConnectPeer,
		NetworkManagerActions.DisassociateCustomerGateway,
		NetworkManagerActions.DisassociateLink,
		NetworkManagerActions.DisassociateTransitGatewayConnectPeer,
		NetworkManagerActions.ExecuteCoreNetworkChangeSet,
		NetworkManagerActions.PutAttachmentRoutingPolicyLabel,
		NetworkManagerActions.PutCoreNetworkPolicy,
		NetworkManagerActions.RegisterTransitGateway,
		NetworkManagerActions.RejectAttachment,
		NetworkManagerActions.RemoveAttachmentRoutingPolicyLabel,
		NetworkManagerActions.RestoreCoreNetworkPolicyVersion,
		NetworkManagerActions.StartRouteAnalysis,
		NetworkManagerActions.UpdateConnection,
		NetworkManagerActions.UpdateCoreNetwork,
		NetworkManagerActions.UpdateDevice,
		NetworkManagerActions.UpdateDirectConnectGatewayAttachment,
		NetworkManagerActions.UpdateGlobalNetwork,
		NetworkManagerActions.UpdateLink,
		NetworkManagerActions.UpdateNetworkResourceMetadata,
		NetworkManagerActions.UpdateSite,
		NetworkManagerActions.UpdateVpcAttachment,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		NetworkManagerActions.DescribeGlobalNetworks,
		NetworkManagerActions.actionGetConnections,
		NetworkManagerActions.actionGetCustomerGatewayAssociations,
		NetworkManagerActions.actionGetDevices,
		NetworkManagerActions.actionGetLinkAssociations,
		NetworkManagerActions.actionGetLinks,
		NetworkManagerActions.actionGetSites,
		NetworkManagerActions.actionGetTransitGatewayConnectPeerAssociations,
		NetworkManagerActions.actionGetTransitGatewayRegistrations,
		NetworkManagerActions.ListAttachmentRoutingPolicyAssociations,
		NetworkManagerActions.ListAttachments,
		NetworkManagerActions.ListConnectPeers,
		NetworkManagerActions.ListCoreNetworkPolicyVersions,
		NetworkManagerActions.ListCoreNetworkPrefixListAssociations,
		NetworkManagerActions.ListCoreNetworkRoutingInformation,
		NetworkManagerActions.ListCoreNetworks,
		NetworkManagerActions.ListOrganizationServiceAccessStatus,
		NetworkManagerActions.ListPeerings,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		NetworkManagerActions.DeleteResourcePolicy,
		NetworkManagerActions.PutResourcePolicy,
		NetworkManagerActions.StartOrganizationServiceAccessUpdate,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		NetworkManagerActions.TagResource,
		NetworkManagerActions.UntagResource,
	];
}

/**
 * Properties for building a attachment ARN.
 */
export interface NetworkManagerAttachmentArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a attachment ARN.
 */
export interface NetworkManagerAttachmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a connect-peer ARN.
 */
export interface NetworkManagerConnectPeerArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connect-peer ARN.
 */
export interface NetworkManagerConnectPeerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a connection ARN.
 */
export interface NetworkManagerConnectionArnProps {
	/** The GlobalNetworkId component of the ARN. */
	readonly globalNetworkId: string;
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connection ARN.
 */
export interface NetworkManagerConnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GlobalNetworkId component. */
	readonly globalNetworkId: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a core-network ARN.
 */
export interface NetworkManagerCoreNetworkArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a core-network ARN.
 */
export interface NetworkManagerCoreNetworkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a device ARN.
 */
export interface NetworkManagerDeviceArnProps {
	/** The GlobalNetworkId component of the ARN. */
	readonly globalNetworkId: string;
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a device ARN.
 */
export interface NetworkManagerDeviceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GlobalNetworkId component. */
	readonly globalNetworkId: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a global-network ARN.
 */
export interface NetworkManagerGlobalNetworkArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a global-network ARN.
 */
export interface NetworkManagerGlobalNetworkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a link ARN.
 */
export interface NetworkManagerLinkArnProps {
	/** The GlobalNetworkId component of the ARN. */
	readonly globalNetworkId: string;
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a link ARN.
 */
export interface NetworkManagerLinkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GlobalNetworkId component. */
	readonly globalNetworkId: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a peering ARN.
 */
export interface NetworkManagerPeeringArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a peering ARN.
 */
export interface NetworkManagerPeeringArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a site ARN.
 */
export interface NetworkManagerSiteArnProps {
	/** The GlobalNetworkId component of the ARN. */
	readonly globalNetworkId: string;
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a site ARN.
 */
export interface NetworkManagerSiteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GlobalNetworkId component. */
	readonly globalNetworkId: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const AttachmentArnRegex =
	/^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):attachment\/(?<resourceId>[^:/?]+)$/;
const ConnectPeerArnRegex =
	/^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):connect-peer\/(?<resourceId>[^:/?]+)$/;
const ConnectionArnRegex =
	/^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):connection\/(?<globalNetworkId>[^:/?]+)\/(?<resourceId>[^:/?]+)$/;
const CoreNetworkArnRegex =
	/^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):core-network\/(?<resourceId>[^:/?]+)$/;
const DeviceArnRegex =
	/^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):device\/(?<globalNetworkId>[^:/?]+)\/(?<resourceId>[^:/?]+)$/;
const GlobalNetworkArnRegex =
	/^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):global-network\/(?<resourceId>[^:/?]+)$/;
const LinkArnRegex =
	/^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):link\/(?<globalNetworkId>[^:/?]+)\/(?<resourceId>[^:/?]+)$/;
const PeeringArnRegex =
	/^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):peering\/(?<resourceId>[^:/?]+)$/;
const SiteArnRegex =
	/^arn:(?<partition>[^:]+):networkmanager::(?<account>[^:]*):site\/(?<globalNetworkId>[^:/?]+)\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for networkmanager resources.
 */
export class NetworkManagerResources {
	/**
	 * Builds an ARN for the attachment resource.
	 */
	static attachment(props: NetworkManagerAttachmentArnProps): string {
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
	static parseAttachmentArn(
		arn: string,
	): NetworkManagerAttachmentArnComponents {
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
	static connectPeer(props: NetworkManagerConnectPeerArnProps): string {
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
	static parseConnectPeerArn(
		arn: string,
	): NetworkManagerConnectPeerArnComponents {
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
	static connection(props: NetworkManagerConnectionArnProps): string {
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
	static parseConnectionArn(
		arn: string,
	): NetworkManagerConnectionArnComponents {
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
	static coreNetwork(props: NetworkManagerCoreNetworkArnProps): string {
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
	static parseCoreNetworkArn(
		arn: string,
	): NetworkManagerCoreNetworkArnComponents {
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
	static device(props: NetworkManagerDeviceArnProps): string {
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
	static parseDeviceArn(arn: string): NetworkManagerDeviceArnComponents {
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
	static globalNetwork(props: NetworkManagerGlobalNetworkArnProps): string {
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
	static parseGlobalNetworkArn(
		arn: string,
	): NetworkManagerGlobalNetworkArnComponents {
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
	static link(props: NetworkManagerLinkArnProps): string {
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
	static parseLinkArn(arn: string): NetworkManagerLinkArnComponents {
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
	static peering(props: NetworkManagerPeeringArnProps): string {
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
	static parsePeeringArn(arn: string): NetworkManagerPeeringArnComponents {
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
	static site(props: NetworkManagerSiteArnProps): string {
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
	static parseSiteArn(arn: string): NetworkManagerSiteArnComponents {
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
	static readonly AcceptAttachment: string[] = [
		"networkmanager:AcceptAttachment",
	];
	/** IAM actions required for the AssociateConnectPeer API call. */
	static readonly AssociateConnectPeer: string[] = [
		"networkmanager:AssociateConnectPeer",
	];
	/** IAM actions required for the AssociateCustomerGateway API call. */
	static readonly AssociateCustomerGateway: string[] = [
		"networkmanager:AssociateCustomerGateway",
	];
	/** IAM actions required for the AssociateLink API call. */
	static readonly AssociateLink: string[] = ["networkmanager:AssociateLink"];
	/** IAM actions required for the AssociateTransitGatewayConnectPeer API call. */
	static readonly AssociateTransitGatewayConnectPeer: string[] = [
		"networkmanager:AssociateTransitGatewayConnectPeer",
	];
	/** IAM actions required for the CreateConnectAttachment API call. */
	static readonly CreateConnectAttachment: string[] = [
		"networkmanager:CreateConnectAttachment",
		"networkmanager:PutAttachmentRoutingPolicyLabel",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateConnectPeer API call. */
	static readonly CreateConnectPeer: string[] = [
		"networkmanager:CreateConnectPeer",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateConnection API call. */
	static readonly CreateConnection: string[] = [
		"networkmanager:CreateConnection",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateCoreNetwork API call. */
	static readonly CreateCoreNetwork: string[] = [
		"networkmanager:CreateCoreNetwork",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateCoreNetworkPrefixListAssociation API call. */
	static readonly CreateCoreNetworkPrefixListAssociation: string[] = [
		"networkmanager:CreateCoreNetworkPrefixListAssociation",
	];
	/** IAM actions required for the CreateDevice API call. */
	static readonly CreateDevice: string[] = [
		"networkmanager:CreateDevice",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateDirectConnectGatewayAttachment API call. */
	static readonly CreateDirectConnectGatewayAttachment: string[] = [
		"networkmanager:CreateDirectConnectGatewayAttachment",
		"networkmanager:PutAttachmentRoutingPolicyLabel",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateGlobalNetwork API call. */
	static readonly CreateGlobalNetwork: string[] = [
		"networkmanager:CreateGlobalNetwork",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateLink API call. */
	static readonly CreateLink: string[] = [
		"networkmanager:CreateLink",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateSite API call. */
	static readonly CreateSite: string[] = [
		"networkmanager:CreateSite",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateSiteToSiteVpnAttachment API call. */
	static readonly CreateSiteToSiteVpnAttachment: string[] = [
		"networkmanager:CreateSiteToSiteVpnAttachment",
		"networkmanager:PutAttachmentRoutingPolicyLabel",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateTransitGatewayPeering API call. */
	static readonly CreateTransitGatewayPeering: string[] = [
		"networkmanager:CreateTransitGatewayPeering",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateTransitGatewayRouteTableAttachment API call. */
	static readonly CreateTransitGatewayRouteTableAttachment: string[] = [
		"networkmanager:CreateTransitGatewayRouteTableAttachment",
		"networkmanager:PutAttachmentRoutingPolicyLabel",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the CreateVpcAttachment API call. */
	static readonly CreateVpcAttachment: string[] = [
		"networkmanager:CreateVpcAttachment",
		"networkmanager:PutAttachmentRoutingPolicyLabel",
		"networkmanager:TagResource",
	];
	/** IAM actions required for the DeleteAttachment API call. */
	static readonly DeleteAttachment: string[] = [
		"networkmanager:DeleteAttachment",
	];
	/** IAM actions required for the DeleteConnectPeer API call. */
	static readonly DeleteConnectPeer: string[] = [
		"networkmanager:DeleteConnectPeer",
	];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DeleteConnection: string[] = [
		"networkmanager:DeleteConnection",
	];
	/** IAM actions required for the DeleteCoreNetwork API call. */
	static readonly DeleteCoreNetwork: string[] = [
		"networkmanager:DeleteCoreNetwork",
	];
	/** IAM actions required for the DeleteCoreNetworkPolicyVersion API call. */
	static readonly DeleteCoreNetworkPolicyVersion: string[] = [
		"networkmanager:DeleteCoreNetworkPolicyVersion",
	];
	/** IAM actions required for the DeleteCoreNetworkPrefixListAssociation API call. */
	static readonly DeleteCoreNetworkPrefixListAssociation: string[] = [
		"networkmanager:DeleteCoreNetworkPrefixListAssociation",
	];
	/** IAM actions required for the DeleteDevice API call. */
	static readonly DeleteDevice: string[] = ["networkmanager:DeleteDevice"];
	/** IAM actions required for the DeleteGlobalNetwork API call. */
	static readonly DeleteGlobalNetwork: string[] = [
		"networkmanager:DeleteGlobalNetwork",
	];
	/** IAM actions required for the DeleteLink API call. */
	static readonly DeleteLink: string[] = ["networkmanager:DeleteLink"];
	/** IAM actions required for the DeletePeering API call. */
	static readonly DeletePeering: string[] = ["networkmanager:DeletePeering"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"networkmanager:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteSite API call. */
	static readonly DeleteSite: string[] = ["networkmanager:DeleteSite"];
	/** IAM actions required for the DeregisterTransitGateway API call. */
	static readonly DeregisterTransitGateway: string[] = [
		"networkmanager:DeregisterTransitGateway",
	];
	/** IAM actions required for the DescribeGlobalNetworks API call. */
	static readonly DescribeGlobalNetworks: string[] = [
		"networkmanager:DescribeGlobalNetworks",
	];
	/** IAM actions required for the DisassociateConnectPeer API call. */
	static readonly DisassociateConnectPeer: string[] = [
		"networkmanager:DisassociateConnectPeer",
	];
	/** IAM actions required for the DisassociateCustomerGateway API call. */
	static readonly DisassociateCustomerGateway: string[] = [
		"networkmanager:DisassociateCustomerGateway",
	];
	/** IAM actions required for the DisassociateLink API call. */
	static readonly DisassociateLink: string[] = [
		"networkmanager:DisassociateLink",
	];
	/** IAM actions required for the DisassociateTransitGatewayConnectPeer API call. */
	static readonly DisassociateTransitGatewayConnectPeer: string[] = [
		"networkmanager:DisassociateTransitGatewayConnectPeer",
	];
	/** IAM actions required for the ExecuteCoreNetworkChangeSet API call. */
	static readonly ExecuteCoreNetworkChangeSet: string[] = [
		"networkmanager:ExecuteCoreNetworkChangeSet",
	];
	/** IAM actions required for the GetConnectAttachment API call. */
	static readonly opGetConnectAttachment: string[] = [
		"networkmanager:GetConnectAttachment",
	];
	/** IAM actions required for the GetConnectPeer API call. */
	static readonly opGetConnectPeer: string[] = [
		"networkmanager:GetConnectPeer",
	];
	/** IAM actions required for the GetConnectPeerAssociations API call. */
	static readonly opGetConnectPeerAssociations: string[] = [
		"networkmanager:GetConnectPeerAssociations",
	];
	/** IAM actions required for the GetConnections API call. */
	static readonly opGetConnections: string[] = [
		"networkmanager:GetConnections",
	];
	/** IAM actions required for the GetCoreNetwork API call. */
	static readonly opGetCoreNetwork: string[] = [
		"networkmanager:GetCoreNetwork",
	];
	/** IAM actions required for the GetCoreNetworkChangeEvents API call. */
	static readonly opGetCoreNetworkChangeEvents: string[] = [
		"networkmanager:GetCoreNetworkChangeEvents",
	];
	/** IAM actions required for the GetCoreNetworkChangeSet API call. */
	static readonly opGetCoreNetworkChangeSet: string[] = [
		"networkmanager:GetCoreNetworkChangeSet",
	];
	/** IAM actions required for the GetCoreNetworkPolicy API call. */
	static readonly opGetCoreNetworkPolicy: string[] = [
		"networkmanager:GetCoreNetworkPolicy",
	];
	/** IAM actions required for the GetCustomerGatewayAssociations API call. */
	static readonly opGetCustomerGatewayAssociations: string[] = [
		"networkmanager:GetCustomerGatewayAssociations",
	];
	/** IAM actions required for the GetDevices API call. */
	static readonly opGetDevices: string[] = ["networkmanager:GetDevices"];
	/** IAM actions required for the GetDirectConnectGatewayAttachment API call. */
	static readonly opGetDirectConnectGatewayAttachment: string[] = [
		"networkmanager:GetDirectConnectGatewayAttachment",
	];
	/** IAM actions required for the GetLinkAssociations API call. */
	static readonly opGetLinkAssociations: string[] = [
		"networkmanager:GetLinkAssociations",
	];
	/** IAM actions required for the GetLinks API call. */
	static readonly opGetLinks: string[] = ["networkmanager:GetLinks"];
	/** IAM actions required for the GetNetworkResourceCounts API call. */
	static readonly opGetNetworkResourceCounts: string[] = [
		"networkmanager:GetNetworkResourceCounts",
	];
	/** IAM actions required for the GetNetworkResourceRelationships API call. */
	static readonly opGetNetworkResourceRelationships: string[] = [
		"networkmanager:GetNetworkResourceRelationships",
	];
	/** IAM actions required for the GetNetworkResources API call. */
	static readonly opGetNetworkResources: string[] = [
		"networkmanager:GetNetworkResources",
	];
	/** IAM actions required for the GetNetworkRoutes API call. */
	static readonly opGetNetworkRoutes: string[] = [
		"networkmanager:GetNetworkRoutes",
	];
	/** IAM actions required for the GetNetworkTelemetry API call. */
	static readonly opGetNetworkTelemetry: string[] = [
		"networkmanager:GetNetworkTelemetry",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"networkmanager:GetResourcePolicy",
	];
	/** IAM actions required for the GetRouteAnalysis API call. */
	static readonly opGetRouteAnalysis: string[] = [
		"networkmanager:GetRouteAnalysis",
	];
	/** IAM actions required for the GetSiteToSiteVpnAttachment API call. */
	static readonly opGetSiteToSiteVpnAttachment: string[] = [
		"networkmanager:GetSiteToSiteVpnAttachment",
	];
	/** IAM actions required for the GetSites API call. */
	static readonly opGetSites: string[] = ["networkmanager:GetSites"];
	/** IAM actions required for the GetTransitGatewayConnectPeerAssociations API call. */
	static readonly opGetTransitGatewayConnectPeerAssociations: string[] = [
		"networkmanager:GetTransitGatewayConnectPeerAssociations",
	];
	/** IAM actions required for the GetTransitGatewayPeering API call. */
	static readonly opGetTransitGatewayPeering: string[] = [
		"networkmanager:GetTransitGatewayPeering",
	];
	/** IAM actions required for the GetTransitGatewayRegistrations API call. */
	static readonly opGetTransitGatewayRegistrations: string[] = [
		"networkmanager:GetTransitGatewayRegistrations",
	];
	/** IAM actions required for the GetTransitGatewayRouteTableAttachment API call. */
	static readonly opGetTransitGatewayRouteTableAttachment: string[] = [
		"networkmanager:GetTransitGatewayRouteTableAttachment",
	];
	/** IAM actions required for the GetVpcAttachment API call. */
	static readonly opGetVpcAttachment: string[] = [
		"networkmanager:GetVpcAttachment",
	];
	/** IAM actions required for the ListAttachmentRoutingPolicyAssociations API call. */
	static readonly ListAttachmentRoutingPolicyAssociations: string[] = [
		"networkmanager:ListAttachmentRoutingPolicyAssociations",
	];
	/** IAM actions required for the ListAttachments API call. */
	static readonly ListAttachments: string[] = [
		"networkmanager:ListAttachments",
	];
	/** IAM actions required for the ListConnectPeers API call. */
	static readonly ListConnectPeers: string[] = [
		"networkmanager:ListConnectPeers",
	];
	/** IAM actions required for the ListCoreNetworkPolicyVersions API call. */
	static readonly ListCoreNetworkPolicyVersions: string[] = [
		"networkmanager:ListCoreNetworkPolicyVersions",
	];
	/** IAM actions required for the ListCoreNetworkPrefixListAssociations API call. */
	static readonly ListCoreNetworkPrefixListAssociations: string[] = [
		"networkmanager:ListCoreNetworkPrefixListAssociations",
	];
	/** IAM actions required for the ListCoreNetworkRoutingInformation API call. */
	static readonly ListCoreNetworkRoutingInformation: string[] = [
		"networkmanager:ListCoreNetworkRoutingInformation",
	];
	/** IAM actions required for the ListCoreNetworks API call. */
	static readonly ListCoreNetworks: string[] = [
		"networkmanager:ListCoreNetworks",
	];
	/** IAM actions required for the ListOrganizationServiceAccessStatus API call. */
	static readonly ListOrganizationServiceAccessStatus: string[] = [
		"networkmanager:ListOrganizationServiceAccessStatus",
	];
	/** IAM actions required for the ListPeerings API call. */
	static readonly ListPeerings: string[] = ["networkmanager:ListPeerings"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"networkmanager:ListTagsForResource",
	];
	/** IAM actions required for the PutAttachmentRoutingPolicyLabel API call. */
	static readonly PutAttachmentRoutingPolicyLabel: string[] = [
		"networkmanager:PutAttachmentRoutingPolicyLabel",
	];
	/** IAM actions required for the PutCoreNetworkPolicy API call. */
	static readonly PutCoreNetworkPolicy: string[] = [
		"networkmanager:PutCoreNetworkPolicy",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"networkmanager:PutResourcePolicy",
	];
	/** IAM actions required for the RegisterTransitGateway API call. */
	static readonly RegisterTransitGateway: string[] = [
		"networkmanager:RegisterTransitGateway",
	];
	/** IAM actions required for the RejectAttachment API call. */
	static readonly RejectAttachment: string[] = [
		"networkmanager:RejectAttachment",
	];
	/** IAM actions required for the RemoveAttachmentRoutingPolicyLabel API call. */
	static readonly RemoveAttachmentRoutingPolicyLabel: string[] = [
		"networkmanager:RemoveAttachmentRoutingPolicyLabel",
	];
	/** IAM actions required for the RestoreCoreNetworkPolicyVersion API call. */
	static readonly RestoreCoreNetworkPolicyVersion: string[] = [
		"networkmanager:RestoreCoreNetworkPolicyVersion",
	];
	/** IAM actions required for the StartOrganizationServiceAccessUpdate API call. */
	static readonly StartOrganizationServiceAccessUpdate: string[] = [
		"networkmanager:StartOrganizationServiceAccessUpdate",
	];
	/** IAM actions required for the StartRouteAnalysis API call. */
	static readonly StartRouteAnalysis: string[] = [
		"networkmanager:StartRouteAnalysis",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["networkmanager:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["networkmanager:UntagResource"];
	/** IAM actions required for the UpdateConnection API call. */
	static readonly UpdateConnection: string[] = [
		"networkmanager:UpdateConnection",
	];
	/** IAM actions required for the UpdateCoreNetwork API call. */
	static readonly UpdateCoreNetwork: string[] = [
		"networkmanager:UpdateCoreNetwork",
	];
	/** IAM actions required for the UpdateDevice API call. */
	static readonly UpdateDevice: string[] = ["networkmanager:UpdateDevice"];
	/** IAM actions required for the UpdateDirectConnectGatewayAttachment API call. */
	static readonly UpdateDirectConnectGatewayAttachment: string[] = [
		"networkmanager:UpdateDirectConnectGatewayAttachment",
	];
	/** IAM actions required for the UpdateGlobalNetwork API call. */
	static readonly UpdateGlobalNetwork: string[] = [
		"networkmanager:UpdateGlobalNetwork",
	];
	/** IAM actions required for the UpdateLink API call. */
	static readonly UpdateLink: string[] = ["networkmanager:UpdateLink"];
	/** IAM actions required for the UpdateNetworkResourceMetadata API call. */
	static readonly UpdateNetworkResourceMetadata: string[] = [
		"networkmanager:UpdateNetworkResourceMetadata",
	];
	/** IAM actions required for the UpdateSite API call. */
	static readonly UpdateSite: string[] = ["networkmanager:UpdateSite"];
	/** IAM actions required for the UpdateVpcAttachment API call. */
	static readonly UpdateVpcAttachment: string[] = [
		"networkmanager:UpdateVpcAttachment",
	];
}

/**
 * Condition key constants and builders for networkmanager.
 */
export class NetworkManagerConditions {
	/** Condition keys applicable to the AssociateCustomerGateway action. */
	static readonly AssociateCustomerGatewayConditionKeys: string[] = [
		"networkmanager:cgwArn",
	];
	/** Condition keys applicable to the AssociateTransitGatewayConnectPeer action. */
	static readonly AssociateTransitGatewayConnectPeerConditionKeys: string[] = [
		"networkmanager:tgwConnectPeerArn",
	];
	/** Condition keys applicable to the CreateConnectAttachment action. */
	static readonly CreateConnectAttachmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnectPeer action. */
	static readonly CreateConnectPeerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CreateConnectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCoreNetwork action. */
	static readonly CreateCoreNetworkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDevice action. */
	static readonly CreateDeviceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDirectConnectGatewayAttachment action. */
	static readonly CreateDirectConnectGatewayAttachmentConditionKeys: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"networkmanager:directConnectGatewayArn",
			"networkmanager:edgeLocations",
		];
	/** Condition keys applicable to the CreateGlobalNetwork action. */
	static readonly CreateGlobalNetworkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLink action. */
	static readonly CreateLinkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSite action. */
	static readonly CreateSiteConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSiteToSiteVpnAttachment action. */
	static readonly CreateSiteToSiteVpnAttachmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"networkmanager:vpnConnectionArn",
	];
	/** Condition keys applicable to the CreateTransitGatewayPeering action. */
	static readonly CreateTransitGatewayPeeringConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"networkmanager:tgwArn",
	];
	/** Condition keys applicable to the CreateTransitGatewayRouteTableAttachment action. */
	static readonly CreateTransitGatewayRouteTableAttachmentConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys", "networkmanager:tgwRtbArn"];
	/** Condition keys applicable to the CreateVpcAttachment action. */
	static readonly CreateVpcAttachmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"networkmanager:subnetArns",
		"networkmanager:vpcArn",
	];
	/** Condition keys applicable to the DeregisterTransitGateway action. */
	static readonly DeregisterTransitGatewayConditionKeys: string[] = [
		"networkmanager:tgwArn",
	];
	/** Condition keys applicable to the DisassociateCustomerGateway action. */
	static readonly DisassociateCustomerGatewayConditionKeys: string[] = [
		"networkmanager:cgwArn",
	];
	/** Condition keys applicable to the DisassociateTransitGatewayConnectPeer action. */
	static readonly DisassociateTransitGatewayConnectPeerConditionKeys: string[] =
		["networkmanager:tgwConnectPeerArn"];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RegisterTransitGateway action. */
	static readonly RegisterTransitGatewayConditionKeys: string[] = [
		"networkmanager:tgwArn",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateDirectConnectGatewayAttachment action. */
	static readonly UpdateDirectConnectGatewayAttachmentConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys", "networkmanager:edgeLocations"];
	/** Condition keys applicable to the UpdateVpcAttachment action. */
	static readonly UpdateVpcAttachmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"networkmanager:subnetArns",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
