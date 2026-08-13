// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/directconnect.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the directconnect service.
 */
export class DirectConnectActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "directconnect";

	/** [Write] directconnect:AcceptDirectConnectGatewayAssociationProposal */
	static readonly ACCEPT_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL =
		"directconnect:AcceptDirectConnectGatewayAssociationProposal";
	/** [Write] directconnect:AllocateConnectionOnInterconnect */
	static readonly ALLOCATE_CONNECTION_ON_INTERCONNECT =
		"directconnect:AllocateConnectionOnInterconnect";
	/** [Write] directconnect:AllocateHostedConnection */
	static readonly ALLOCATE_HOSTED_CONNECTION =
		"directconnect:AllocateHostedConnection";
	/** [Write] directconnect:AllocatePrivateVirtualInterface */
	static readonly ALLOCATE_PRIVATE_VIRTUAL_INTERFACE =
		"directconnect:AllocatePrivateVirtualInterface";
	/** [Write] directconnect:AllocatePublicVirtualInterface */
	static readonly ALLOCATE_PUBLIC_VIRTUAL_INTERFACE =
		"directconnect:AllocatePublicVirtualInterface";
	/** [Write] directconnect:AllocateTransitVirtualInterface */
	static readonly ALLOCATE_TRANSIT_VIRTUAL_INTERFACE =
		"directconnect:AllocateTransitVirtualInterface";
	/** [Write] directconnect:AssociateConnectionWithLag */
	static readonly ASSOCIATE_CONNECTION_WITH_LAG =
		"directconnect:AssociateConnectionWithLag";
	/** [Write] directconnect:AssociateHostedConnection */
	static readonly ASSOCIATE_HOSTED_CONNECTION =
		"directconnect:AssociateHostedConnection";
	/** [Write] directconnect:AssociateMacSecKey */
	static readonly ASSOCIATE_MAC_SEC_KEY = "directconnect:AssociateMacSecKey";
	/** [Write] directconnect:AssociateVirtualInterface */
	static readonly ASSOCIATE_VIRTUAL_INTERFACE =
		"directconnect:AssociateVirtualInterface";
	/** [Write] directconnect:ConfirmConnection */
	static readonly CONFIRM_CONNECTION = "directconnect:ConfirmConnection";
	/** [Write] directconnect:ConfirmCustomerAgreement */
	static readonly CONFIRM_CUSTOMER_AGREEMENT =
		"directconnect:ConfirmCustomerAgreement";
	/** [Write] directconnect:ConfirmPrivateVirtualInterface */
	static readonly CONFIRM_PRIVATE_VIRTUAL_INTERFACE =
		"directconnect:ConfirmPrivateVirtualInterface";
	/** [Write] directconnect:ConfirmPublicVirtualInterface */
	static readonly CONFIRM_PUBLIC_VIRTUAL_INTERFACE =
		"directconnect:ConfirmPublicVirtualInterface";
	/** [Write] directconnect:ConfirmTransitVirtualInterface */
	static readonly CONFIRM_TRANSIT_VIRTUAL_INTERFACE =
		"directconnect:ConfirmTransitVirtualInterface";
	/** [Write] directconnect:CreateBGPPeer */
	static readonly CREATE_BGP_PEER = "directconnect:CreateBGPPeer";
	/** [Write] directconnect:CreateConnection */
	static readonly CREATE_CONNECTION = "directconnect:CreateConnection";
	/** [Write] directconnect:CreateDirectConnectGateway */
	static readonly CREATE_DIRECT_CONNECT_GATEWAY =
		"directconnect:CreateDirectConnectGateway";
	/** [Write] directconnect:CreateDirectConnectGatewayAssociation */
	static readonly CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION =
		"directconnect:CreateDirectConnectGatewayAssociation";
	/** [Write] directconnect:CreateDirectConnectGatewayAssociationProposal */
	static readonly CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL =
		"directconnect:CreateDirectConnectGatewayAssociationProposal";
	/** [Write] directconnect:CreateInterconnect */
	static readonly CREATE_INTERCONNECT = "directconnect:CreateInterconnect";
	/** [Write] directconnect:CreateLag */
	static readonly CREATE_LAG = "directconnect:CreateLag";
	/** [Write] directconnect:CreatePrivateVirtualInterface */
	static readonly CREATE_PRIVATE_VIRTUAL_INTERFACE =
		"directconnect:CreatePrivateVirtualInterface";
	/** [Write] directconnect:CreatePublicVirtualInterface */
	static readonly CREATE_PUBLIC_VIRTUAL_INTERFACE =
		"directconnect:CreatePublicVirtualInterface";
	/** [Write] directconnect:CreateTransitVirtualInterface */
	static readonly CREATE_TRANSIT_VIRTUAL_INTERFACE =
		"directconnect:CreateTransitVirtualInterface";
	/** [Write] directconnect:DeleteBGPPeer */
	static readonly DELETE_BGP_PEER = "directconnect:DeleteBGPPeer";
	/** [Write] directconnect:DeleteConnection */
	static readonly DELETE_CONNECTION = "directconnect:DeleteConnection";
	/** [Write] directconnect:DeleteDirectConnectGateway */
	static readonly DELETE_DIRECT_CONNECT_GATEWAY =
		"directconnect:DeleteDirectConnectGateway";
	/** [Write] directconnect:DeleteDirectConnectGatewayAssociation */
	static readonly DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION =
		"directconnect:DeleteDirectConnectGatewayAssociation";
	/** [Write] directconnect:DeleteDirectConnectGatewayAssociationProposal */
	static readonly DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL =
		"directconnect:DeleteDirectConnectGatewayAssociationProposal";
	/** [Write] directconnect:DeleteInterconnect */
	static readonly DELETE_INTERCONNECT = "directconnect:DeleteInterconnect";
	/** [Write] directconnect:DeleteLag */
	static readonly DELETE_LAG = "directconnect:DeleteLag";
	/** [Write] directconnect:DeleteVirtualInterface */
	static readonly DELETE_VIRTUAL_INTERFACE =
		"directconnect:DeleteVirtualInterface";
	/** [Read] directconnect:DescribeConnectionLoa */
	static readonly DESCRIBE_CONNECTION_LOA =
		"directconnect:DescribeConnectionLoa";
	/** [Read] directconnect:DescribeConnections */
	static readonly DESCRIBE_CONNECTIONS = "directconnect:DescribeConnections";
	/** [Read] directconnect:DescribeConnectionsOnInterconnect */
	static readonly DESCRIBE_CONNECTIONS_ON_INTERCONNECT =
		"directconnect:DescribeConnectionsOnInterconnect";
	/** [Read] directconnect:DescribeCustomerMetadata */
	static readonly DESCRIBE_CUSTOMER_METADATA =
		"directconnect:DescribeCustomerMetadata";
	/** [Read] directconnect:DescribeDirectConnectGatewayAssociationProposals */
	static readonly DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSALS =
		"directconnect:DescribeDirectConnectGatewayAssociationProposals";
	/** [Read] directconnect:DescribeDirectConnectGatewayAssociations */
	static readonly DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATIONS =
		"directconnect:DescribeDirectConnectGatewayAssociations";
	/** [Read] directconnect:DescribeDirectConnectGatewayAttachments */
	static readonly DESCRIBE_DIRECT_CONNECT_GATEWAY_ATTACHMENTS =
		"directconnect:DescribeDirectConnectGatewayAttachments";
	/** [Read] directconnect:DescribeDirectConnectGateways */
	static readonly DESCRIBE_DIRECT_CONNECT_GATEWAYS =
		"directconnect:DescribeDirectConnectGateways";
	/** [Read] directconnect:DescribeHostedConnections */
	static readonly DESCRIBE_HOSTED_CONNECTIONS =
		"directconnect:DescribeHostedConnections";
	/** [Read] directconnect:DescribeInterconnectLoa */
	static readonly DESCRIBE_INTERCONNECT_LOA =
		"directconnect:DescribeInterconnectLoa";
	/** [Read] directconnect:DescribeInterconnects */
	static readonly DESCRIBE_INTERCONNECTS =
		"directconnect:DescribeInterconnects";
	/** [Read] directconnect:DescribeLags */
	static readonly DESCRIBE_LAGS = "directconnect:DescribeLags";
	/** [Read] directconnect:DescribeLoa */
	static readonly DESCRIBE_LOA = "directconnect:DescribeLoa";
	/** [Read] directconnect:DescribeLocations */
	static readonly DESCRIBE_LOCATIONS = "directconnect:DescribeLocations";
	/** [Read] directconnect:DescribeRouterConfiguration */
	static readonly DESCRIBE_ROUTER_CONFIGURATION =
		"directconnect:DescribeRouterConfiguration";
	/** [Read] directconnect:DescribeTags */
	static readonly DESCRIBE_TAGS = "directconnect:DescribeTags";
	/** [Read] directconnect:DescribeVirtualGateways */
	static readonly DESCRIBE_VIRTUAL_GATEWAYS =
		"directconnect:DescribeVirtualGateways";
	/** [Read] directconnect:DescribeVirtualInterfaces */
	static readonly DESCRIBE_VIRTUAL_INTERFACES =
		"directconnect:DescribeVirtualInterfaces";
	/** [Write] directconnect:DisassociateConnectionFromLag */
	static readonly DISASSOCIATE_CONNECTION_FROM_LAG =
		"directconnect:DisassociateConnectionFromLag";
	/** [Write] directconnect:DisassociateMacSecKey */
	static readonly DISASSOCIATE_MAC_SEC_KEY =
		"directconnect:DisassociateMacSecKey";
	/** [List] directconnect:ListVirtualInterfaceRoutes */
	static readonly LIST_VIRTUAL_INTERFACE_ROUTES =
		"directconnect:ListVirtualInterfaceRoutes";
	/** [List] directconnect:ListVirtualInterfaceTestHistory */
	static readonly LIST_VIRTUAL_INTERFACE_TEST_HISTORY =
		"directconnect:ListVirtualInterfaceTestHistory";
	/** [Write] directconnect:StartBgpFailoverTest */
	static readonly START_BGP_FAILOVER_TEST =
		"directconnect:StartBgpFailoverTest";
	/** [Write] directconnect:StopBgpFailoverTest */
	static readonly STOP_BGP_FAILOVER_TEST = "directconnect:StopBgpFailoverTest";
	/** [Tagging] directconnect:TagResource */
	static readonly TAG_RESOURCE = "directconnect:TagResource";
	/** [Tagging] directconnect:UntagResource */
	static readonly UNTAG_RESOURCE = "directconnect:UntagResource";
	/** [Write] directconnect:UpdateConnection */
	static readonly UPDATE_CONNECTION = "directconnect:UpdateConnection";
	/** [Write] directconnect:UpdateDirectConnectGateway */
	static readonly UPDATE_DIRECT_CONNECT_GATEWAY =
		"directconnect:UpdateDirectConnectGateway";
	/** [Write] directconnect:UpdateDirectConnectGatewayAssociation */
	static readonly UPDATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION =
		"directconnect:UpdateDirectConnectGatewayAssociation";
	/** [Write] directconnect:UpdateLag */
	static readonly UPDATE_LAG = "directconnect:UpdateLag";
	/** [Write] directconnect:UpdateVirtualInterfaceAttributes */
	static readonly UPDATE_VIRTUAL_INTERFACE_ATTRIBUTES =
		"directconnect:UpdateVirtualInterfaceAttributes";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DirectConnectActions.DESCRIBE_CONNECTION_LOA,
		DirectConnectActions.DESCRIBE_CONNECTIONS,
		DirectConnectActions.DESCRIBE_CONNECTIONS_ON_INTERCONNECT,
		DirectConnectActions.DESCRIBE_CUSTOMER_METADATA,
		DirectConnectActions.DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSALS,
		DirectConnectActions.DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATIONS,
		DirectConnectActions.DESCRIBE_DIRECT_CONNECT_GATEWAY_ATTACHMENTS,
		DirectConnectActions.DESCRIBE_DIRECT_CONNECT_GATEWAYS,
		DirectConnectActions.DESCRIBE_HOSTED_CONNECTIONS,
		DirectConnectActions.DESCRIBE_INTERCONNECT_LOA,
		DirectConnectActions.DESCRIBE_INTERCONNECTS,
		DirectConnectActions.DESCRIBE_LAGS,
		DirectConnectActions.DESCRIBE_LOA,
		DirectConnectActions.DESCRIBE_LOCATIONS,
		DirectConnectActions.DESCRIBE_ROUTER_CONFIGURATION,
		DirectConnectActions.DESCRIBE_TAGS,
		DirectConnectActions.DESCRIBE_VIRTUAL_GATEWAYS,
		DirectConnectActions.DESCRIBE_VIRTUAL_INTERFACES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DirectConnectActions.ACCEPT_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL,
		DirectConnectActions.ALLOCATE_CONNECTION_ON_INTERCONNECT,
		DirectConnectActions.ALLOCATE_HOSTED_CONNECTION,
		DirectConnectActions.ALLOCATE_PRIVATE_VIRTUAL_INTERFACE,
		DirectConnectActions.ALLOCATE_PUBLIC_VIRTUAL_INTERFACE,
		DirectConnectActions.ALLOCATE_TRANSIT_VIRTUAL_INTERFACE,
		DirectConnectActions.ASSOCIATE_CONNECTION_WITH_LAG,
		DirectConnectActions.ASSOCIATE_HOSTED_CONNECTION,
		DirectConnectActions.ASSOCIATE_MAC_SEC_KEY,
		DirectConnectActions.ASSOCIATE_VIRTUAL_INTERFACE,
		DirectConnectActions.CONFIRM_CONNECTION,
		DirectConnectActions.CONFIRM_CUSTOMER_AGREEMENT,
		DirectConnectActions.CONFIRM_PRIVATE_VIRTUAL_INTERFACE,
		DirectConnectActions.CONFIRM_PUBLIC_VIRTUAL_INTERFACE,
		DirectConnectActions.CONFIRM_TRANSIT_VIRTUAL_INTERFACE,
		DirectConnectActions.CREATE_BGP_PEER,
		DirectConnectActions.CREATE_CONNECTION,
		DirectConnectActions.CREATE_DIRECT_CONNECT_GATEWAY,
		DirectConnectActions.CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION,
		DirectConnectActions.CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL,
		DirectConnectActions.CREATE_INTERCONNECT,
		DirectConnectActions.CREATE_LAG,
		DirectConnectActions.CREATE_PRIVATE_VIRTUAL_INTERFACE,
		DirectConnectActions.CREATE_PUBLIC_VIRTUAL_INTERFACE,
		DirectConnectActions.CREATE_TRANSIT_VIRTUAL_INTERFACE,
		DirectConnectActions.DELETE_BGP_PEER,
		DirectConnectActions.DELETE_CONNECTION,
		DirectConnectActions.DELETE_DIRECT_CONNECT_GATEWAY,
		DirectConnectActions.DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION,
		DirectConnectActions.DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL,
		DirectConnectActions.DELETE_INTERCONNECT,
		DirectConnectActions.DELETE_LAG,
		DirectConnectActions.DELETE_VIRTUAL_INTERFACE,
		DirectConnectActions.DISASSOCIATE_CONNECTION_FROM_LAG,
		DirectConnectActions.DISASSOCIATE_MAC_SEC_KEY,
		DirectConnectActions.START_BGP_FAILOVER_TEST,
		DirectConnectActions.STOP_BGP_FAILOVER_TEST,
		DirectConnectActions.UPDATE_CONNECTION,
		DirectConnectActions.UPDATE_DIRECT_CONNECT_GATEWAY,
		DirectConnectActions.UPDATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION,
		DirectConnectActions.UPDATE_LAG,
		DirectConnectActions.UPDATE_VIRTUAL_INTERFACE_ATTRIBUTES,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DirectConnectActions.LIST_VIRTUAL_INTERFACE_ROUTES,
		DirectConnectActions.LIST_VIRTUAL_INTERFACE_TEST_HISTORY,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DirectConnectActions.TAG_RESOURCE,
		DirectConnectActions.UNTAG_RESOURCE,
	];
}

const DxGatewayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):directconnect::(?<account>[^:]*):dx-gateway/(?<directConnectGatewayId>[^:/?]+)$",
);
const DxconArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):directconnect:(?<region>[^:]*):(?<account>[^:]*):dxcon/(?<connectionId>[^:/?]+)$",
);
const DxlagArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):directconnect:(?<region>[^:]*):(?<account>[^:]*):dxlag/(?<lagId>[^:/?]+)$",
);
const DxvifArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):directconnect:(?<region>[^:]*):(?<account>[^:]*):dxvif/(?<virtualInterfaceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for directconnect resources.
 */
export class DirectConnectResources {
	/**
	 * Builds an ARN for the dx-gateway resource.
	 */
	static dxGateway(props: {
		/** The DirectConnectGatewayId component of the ARN. */
		readonly directConnectGatewayId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:directconnect::${props.account ?? "*"}:dx-gateway/${props.directConnectGatewayId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dx-gateway resource.
	 */
	static isValidDxGatewayArn(arn: string): boolean {
		return DxGatewayArnRegex.test(arn);
	}

	/**
	 * Parses a dx-gateway ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDxGatewayArn(arn: string): {
		partition: string;
		account: string;
		directConnectGatewayId: string;
	} {
		const match = DxGatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dx-gateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			directConnectGatewayId: match.groups!.directConnectGatewayId,
		};
	}

	/**
	 * Builds an ARN for the dxcon resource.
	 */
	static dxcon(props: {
		/** The ConnectionId component of the ARN. */
		readonly connectionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:directconnect:${props.region ?? "*"}:${props.account ?? "*"}:dxcon/${props.connectionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dxcon resource.
	 */
	static isValidDxconArn(arn: string): boolean {
		return DxconArnRegex.test(arn);
	}

	/**
	 * Parses a dxcon ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDxconArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectionId: string;
	} {
		const match = DxconArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dxcon ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectionId: match.groups!.connectionId,
		};
	}

	/**
	 * Builds an ARN for the dxlag resource.
	 */
	static dxlag(props: {
		/** The LagId component of the ARN. */
		readonly lagId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:directconnect:${props.region ?? "*"}:${props.account ?? "*"}:dxlag/${props.lagId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dxlag resource.
	 */
	static isValidDxlagArn(arn: string): boolean {
		return DxlagArnRegex.test(arn);
	}

	/**
	 * Parses a dxlag ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDxlagArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		lagId: string;
	} {
		const match = DxlagArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dxlag ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			lagId: match.groups!.lagId,
		};
	}

	/**
	 * Builds an ARN for the dxvif resource.
	 */
	static dxvif(props: {
		/** The VirtualInterfaceId component of the ARN. */
		readonly virtualInterfaceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:directconnect:${props.region ?? "*"}:${props.account ?? "*"}:dxvif/${props.virtualInterfaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dxvif resource.
	 */
	static isValidDxvifArn(arn: string): boolean {
		return DxvifArnRegex.test(arn);
	}

	/**
	 * Parses a dxvif ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDxvifArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		virtualInterfaceId: string;
	} {
		const match = DxvifArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dxvif ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			virtualInterfaceId: match.groups!.virtualInterfaceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for directconnect.
 */
export class DirectConnectOperations {
	/** IAM actions required for the AcceptDirectConnectGatewayAssociationProposal API call. */
	static readonly ACCEPT_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL: string[] =
		["directconnect:AcceptDirectConnectGatewayAssociationProposal"];
	/** IAM actions required for the AllocateConnectionOnInterconnect API call. */
	static readonly ALLOCATE_CONNECTION_ON_INTERCONNECT: string[] = [
		"directconnect:AllocateConnectionOnInterconnect",
	];
	/** IAM actions required for the AllocateHostedConnection API call. */
	static readonly ALLOCATE_HOSTED_CONNECTION: string[] = [
		"directconnect:AllocateHostedConnection",
		"directconnect:TagResource",
	];
	/** IAM actions required for the AllocatePrivateVirtualInterface API call. */
	static readonly ALLOCATE_PRIVATE_VIRTUAL_INTERFACE: string[] = [
		"directconnect:AllocatePrivateVirtualInterface",
		"directconnect:TagResource",
	];
	/** IAM actions required for the AllocatePublicVirtualInterface API call. */
	static readonly ALLOCATE_PUBLIC_VIRTUAL_INTERFACE: string[] = [
		"directconnect:AllocatePublicVirtualInterface",
		"directconnect:TagResource",
	];
	/** IAM actions required for the AllocateTransitVirtualInterface API call. */
	static readonly ALLOCATE_TRANSIT_VIRTUAL_INTERFACE: string[] = [
		"directconnect:AllocateTransitVirtualInterface",
		"directconnect:TagResource",
	];
	/** IAM actions required for the AssociateConnectionWithLag API call. */
	static readonly ASSOCIATE_CONNECTION_WITH_LAG: string[] = [
		"directconnect:AssociateConnectionWithLag",
	];
	/** IAM actions required for the AssociateHostedConnection API call. */
	static readonly ASSOCIATE_HOSTED_CONNECTION: string[] = [
		"directconnect:AssociateHostedConnection",
	];
	/** IAM actions required for the AssociateMacSecKey API call. */
	static readonly ASSOCIATE_MAC_SEC_KEY: string[] = [
		"directconnect:AssociateMacSecKey",
	];
	/** IAM actions required for the AssociateVirtualInterface API call. */
	static readonly ASSOCIATE_VIRTUAL_INTERFACE: string[] = [
		"directconnect:AssociateVirtualInterface",
	];
	/** IAM actions required for the ConfirmConnection API call. */
	static readonly CONFIRM_CONNECTION: string[] = [
		"directconnect:ConfirmConnection",
	];
	/** IAM actions required for the ConfirmCustomerAgreement API call. */
	static readonly CONFIRM_CUSTOMER_AGREEMENT: string[] = [
		"directconnect:ConfirmCustomerAgreement",
	];
	/** IAM actions required for the ConfirmPrivateVirtualInterface API call. */
	static readonly CONFIRM_PRIVATE_VIRTUAL_INTERFACE: string[] = [
		"directconnect:ConfirmPrivateVirtualInterface",
	];
	/** IAM actions required for the ConfirmPublicVirtualInterface API call. */
	static readonly CONFIRM_PUBLIC_VIRTUAL_INTERFACE: string[] = [
		"directconnect:ConfirmPublicVirtualInterface",
	];
	/** IAM actions required for the ConfirmTransitVirtualInterface API call. */
	static readonly CONFIRM_TRANSIT_VIRTUAL_INTERFACE: string[] = [
		"directconnect:ConfirmTransitVirtualInterface",
	];
	/** IAM actions required for the CreateBGPPeer API call. */
	static readonly CREATE_BGP_PEER: string[] = ["directconnect:CreateBGPPeer"];
	/** IAM actions required for the CreateConnection API call. */
	static readonly CREATE_CONNECTION: string[] = [
		"directconnect:CreateConnection",
		"directconnect:TagResource",
	];
	/** IAM actions required for the CreateDirectConnectGateway API call. */
	static readonly CREATE_DIRECT_CONNECT_GATEWAY: string[] = [
		"directconnect:CreateDirectConnectGateway",
		"directconnect:TagResource",
	];
	/** IAM actions required for the CreateDirectConnectGatewayAssociation API call. */
	static readonly CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION: string[] = [
		"directconnect:CreateDirectConnectGatewayAssociation",
	];
	/** IAM actions required for the CreateDirectConnectGatewayAssociationProposal API call. */
	static readonly CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL: string[] =
		["directconnect:CreateDirectConnectGatewayAssociationProposal"];
	/** IAM actions required for the CreateInterconnect API call. */
	static readonly CREATE_INTERCONNECT: string[] = [
		"directconnect:CreateInterconnect",
		"directconnect:TagResource",
	];
	/** IAM actions required for the CreateLag API call. */
	static readonly CREATE_LAG: string[] = [
		"directconnect:CreateLag",
		"directconnect:TagResource",
	];
	/** IAM actions required for the CreatePrivateVirtualInterface API call. */
	static readonly CREATE_PRIVATE_VIRTUAL_INTERFACE: string[] = [
		"directconnect:CreatePrivateVirtualInterface",
		"directconnect:TagResource",
	];
	/** IAM actions required for the CreatePublicVirtualInterface API call. */
	static readonly CREATE_PUBLIC_VIRTUAL_INTERFACE: string[] = [
		"directconnect:CreatePublicVirtualInterface",
		"directconnect:TagResource",
	];
	/** IAM actions required for the CreateTransitVirtualInterface API call. */
	static readonly CREATE_TRANSIT_VIRTUAL_INTERFACE: string[] = [
		"directconnect:CreateTransitVirtualInterface",
		"directconnect:TagResource",
	];
	/** IAM actions required for the DeleteBGPPeer API call. */
	static readonly DELETE_BGP_PEER: string[] = ["directconnect:DeleteBGPPeer"];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DELETE_CONNECTION: string[] = [
		"directconnect:DeleteConnection",
	];
	/** IAM actions required for the DeleteDirectConnectGateway API call. */
	static readonly DELETE_DIRECT_CONNECT_GATEWAY: string[] = [
		"directconnect:DeleteDirectConnectGateway",
	];
	/** IAM actions required for the DeleteDirectConnectGatewayAssociation API call. */
	static readonly DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION: string[] = [
		"directconnect:DeleteDirectConnectGatewayAssociation",
	];
	/** IAM actions required for the DeleteDirectConnectGatewayAssociationProposal API call. */
	static readonly DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL: string[] =
		["directconnect:DeleteDirectConnectGatewayAssociationProposal"];
	/** IAM actions required for the DeleteInterconnect API call. */
	static readonly DELETE_INTERCONNECT: string[] = [
		"directconnect:DeleteInterconnect",
	];
	/** IAM actions required for the DeleteLag API call. */
	static readonly DELETE_LAG: string[] = ["directconnect:DeleteLag"];
	/** IAM actions required for the DeleteVirtualInterface API call. */
	static readonly DELETE_VIRTUAL_INTERFACE: string[] = [
		"directconnect:DeleteVirtualInterface",
	];
	/** IAM actions required for the DescribeConnectionLoa API call. */
	static readonly DESCRIBE_CONNECTION_LOA: string[] = [
		"directconnect:DescribeConnectionLoa",
	];
	/** IAM actions required for the DescribeConnections API call. */
	static readonly DESCRIBE_CONNECTIONS: string[] = [
		"directconnect:DescribeConnections",
	];
	/** IAM actions required for the DescribeConnectionsOnInterconnect API call. */
	static readonly DESCRIBE_CONNECTIONS_ON_INTERCONNECT: string[] = [
		"directconnect:DescribeConnectionsOnInterconnect",
	];
	/** IAM actions required for the DescribeCustomerMetadata API call. */
	static readonly DESCRIBE_CUSTOMER_METADATA: string[] = [
		"directconnect:DescribeCustomerMetadata",
	];
	/** IAM actions required for the DescribeDirectConnectGatewayAssociationProposals API call. */
	static readonly DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSALS: string[] =
		["directconnect:DescribeDirectConnectGatewayAssociationProposals"];
	/** IAM actions required for the DescribeDirectConnectGatewayAssociations API call. */
	static readonly DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATIONS: string[] = [
		"directconnect:DescribeDirectConnectGatewayAssociations",
	];
	/** IAM actions required for the DescribeDirectConnectGatewayAttachments API call. */
	static readonly DESCRIBE_DIRECT_CONNECT_GATEWAY_ATTACHMENTS: string[] = [
		"directconnect:DescribeDirectConnectGatewayAttachments",
	];
	/** IAM actions required for the DescribeDirectConnectGateways API call. */
	static readonly DESCRIBE_DIRECT_CONNECT_GATEWAYS: string[] = [
		"directconnect:DescribeDirectConnectGateways",
	];
	/** IAM actions required for the DescribeHostedConnections API call. */
	static readonly DESCRIBE_HOSTED_CONNECTIONS: string[] = [
		"directconnect:DescribeHostedConnections",
	];
	/** IAM actions required for the DescribeInterconnectLoa API call. */
	static readonly DESCRIBE_INTERCONNECT_LOA: string[] = [
		"directconnect:DescribeInterconnectLoa",
	];
	/** IAM actions required for the DescribeInterconnects API call. */
	static readonly DESCRIBE_INTERCONNECTS: string[] = [
		"directconnect:DescribeInterconnects",
	];
	/** IAM actions required for the DescribeLags API call. */
	static readonly DESCRIBE_LAGS: string[] = ["directconnect:DescribeLags"];
	/** IAM actions required for the DescribeLoa API call. */
	static readonly DESCRIBE_LOA: string[] = ["directconnect:DescribeLoa"];
	/** IAM actions required for the DescribeLocations API call. */
	static readonly DESCRIBE_LOCATIONS: string[] = [
		"directconnect:DescribeLocations",
	];
	/** IAM actions required for the DescribeRouterConfiguration API call. */
	static readonly DESCRIBE_ROUTER_CONFIGURATION: string[] = [
		"directconnect:DescribeRouterConfiguration",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DESCRIBE_TAGS: string[] = ["directconnect:DescribeTags"];
	/** IAM actions required for the DescribeVirtualGateways API call. */
	static readonly DESCRIBE_VIRTUAL_GATEWAYS: string[] = [
		"directconnect:DescribeVirtualGateways",
	];
	/** IAM actions required for the DescribeVirtualInterfaces API call. */
	static readonly DESCRIBE_VIRTUAL_INTERFACES: string[] = [
		"directconnect:DescribeVirtualInterfaces",
	];
	/** IAM actions required for the DisassociateConnectionFromLag API call. */
	static readonly DISASSOCIATE_CONNECTION_FROM_LAG: string[] = [
		"directconnect:DisassociateConnectionFromLag",
	];
	/** IAM actions required for the DisassociateMacSecKey API call. */
	static readonly DISASSOCIATE_MAC_SEC_KEY: string[] = [
		"directconnect:DisassociateMacSecKey",
	];
	/** IAM actions required for the ListVirtualInterfaceRoutes API call. */
	static readonly LIST_VIRTUAL_INTERFACE_ROUTES: string[] = [
		"directconnect:ListVirtualInterfaceRoutes",
	];
	/** IAM actions required for the ListVirtualInterfaceTestHistory API call. */
	static readonly LIST_VIRTUAL_INTERFACE_TEST_HISTORY: string[] = [
		"directconnect:ListVirtualInterfaceTestHistory",
	];
	/** IAM actions required for the StartBgpFailoverTest API call. */
	static readonly START_BGP_FAILOVER_TEST: string[] = [
		"directconnect:StartBgpFailoverTest",
	];
	/** IAM actions required for the StopBgpFailoverTest API call. */
	static readonly STOP_BGP_FAILOVER_TEST: string[] = [
		"directconnect:StopBgpFailoverTest",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["directconnect:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["directconnect:UntagResource"];
	/** IAM actions required for the UpdateConnection API call. */
	static readonly UPDATE_CONNECTION: string[] = [
		"directconnect:UpdateConnection",
	];
	/** IAM actions required for the UpdateDirectConnectGateway API call. */
	static readonly UPDATE_DIRECT_CONNECT_GATEWAY: string[] = [
		"directconnect:UpdateDirectConnectGateway",
	];
	/** IAM actions required for the UpdateDirectConnectGatewayAssociation API call. */
	static readonly UPDATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION: string[] = [
		"directconnect:UpdateDirectConnectGatewayAssociation",
	];
	/** IAM actions required for the UpdateLag API call. */
	static readonly UPDATE_LAG: string[] = ["directconnect:UpdateLag"];
	/** IAM actions required for the UpdateVirtualInterfaceAttributes API call. */
	static readonly UPDATE_VIRTUAL_INTERFACE_ATTRIBUTES: string[] = [
		"directconnect:UpdateVirtualInterfaceAttributes",
	];
}

/**
 * Condition key constants and builders for directconnect.
 */
export class DirectConnectConditions {
	/** Condition keys applicable to the AllocateHostedConnection action. */
	static readonly ALLOCATE_HOSTED_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AllocatePrivateVirtualInterface action. */
	static readonly ALLOCATE_PRIVATE_VIRTUAL_INTERFACE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the AllocatePublicVirtualInterface action. */
	static readonly ALLOCATE_PUBLIC_VIRTUAL_INTERFACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AllocateTransitVirtualInterface action. */
	static readonly ALLOCATE_TRANSIT_VIRTUAL_INTERFACE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CREATE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDirectConnectGateway action. */
	static readonly CREATE_DIRECT_CONNECT_GATEWAY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInterconnect action. */
	static readonly CREATE_INTERCONNECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLag action. */
	static readonly CREATE_LAG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePrivateVirtualInterface action. */
	static readonly CREATE_PRIVATE_VIRTUAL_INTERFACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePublicVirtualInterface action. */
	static readonly CREATE_PUBLIC_VIRTUAL_INTERFACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTransitVirtualInterface action. */
	static readonly CREATE_TRANSIT_VIRTUAL_INTERFACE_CONDITION_KEYS: string[] = [
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
