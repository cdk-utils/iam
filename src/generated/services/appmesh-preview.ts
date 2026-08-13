// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/appmesh-preview.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the appmesh-preview service.
 */
export class AppmeshPreviewActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "appmesh-preview";

	/** [Write] appmesh-preview:CreateGatewayRoute */
	static readonly CREATE_GATEWAY_ROUTE = "appmesh-preview:CreateGatewayRoute";
	/** [Write] appmesh-preview:CreateMesh */
	static readonly CREATE_MESH = "appmesh-preview:CreateMesh";
	/** [Write] appmesh-preview:CreateRoute */
	static readonly CREATE_ROUTE = "appmesh-preview:CreateRoute";
	/** [Write] appmesh-preview:CreateVirtualGateway */
	static readonly CREATE_VIRTUAL_GATEWAY =
		"appmesh-preview:CreateVirtualGateway";
	/** [Write] appmesh-preview:CreateVirtualNode */
	static readonly CREATE_VIRTUAL_NODE = "appmesh-preview:CreateVirtualNode";
	/** [Write] appmesh-preview:CreateVirtualRouter */
	static readonly CREATE_VIRTUAL_ROUTER = "appmesh-preview:CreateVirtualRouter";
	/** [Write] appmesh-preview:CreateVirtualService */
	static readonly CREATE_VIRTUAL_SERVICE =
		"appmesh-preview:CreateVirtualService";
	/** [Write] appmesh-preview:DeleteGatewayRoute */
	static readonly DELETE_GATEWAY_ROUTE = "appmesh-preview:DeleteGatewayRoute";
	/** [Write] appmesh-preview:DeleteMesh */
	static readonly DELETE_MESH = "appmesh-preview:DeleteMesh";
	/** [Write] appmesh-preview:DeleteMeshPolicy */
	static readonly DELETE_MESH_POLICY = "appmesh-preview:DeleteMeshPolicy";
	/** [Write] appmesh-preview:DeleteRoute */
	static readonly DELETE_ROUTE = "appmesh-preview:DeleteRoute";
	/** [Write] appmesh-preview:DeleteVirtualGateway */
	static readonly DELETE_VIRTUAL_GATEWAY =
		"appmesh-preview:DeleteVirtualGateway";
	/** [Write] appmesh-preview:DeleteVirtualNode */
	static readonly DELETE_VIRTUAL_NODE = "appmesh-preview:DeleteVirtualNode";
	/** [Write] appmesh-preview:DeleteVirtualRouter */
	static readonly DELETE_VIRTUAL_ROUTER = "appmesh-preview:DeleteVirtualRouter";
	/** [Write] appmesh-preview:DeleteVirtualService */
	static readonly DELETE_VIRTUAL_SERVICE =
		"appmesh-preview:DeleteVirtualService";
	/** [Read] appmesh-preview:DescribeGatewayRoute */
	static readonly DESCRIBE_GATEWAY_ROUTE =
		"appmesh-preview:DescribeGatewayRoute";
	/** [Read] appmesh-preview:DescribeMesh */
	static readonly DESCRIBE_MESH = "appmesh-preview:DescribeMesh";
	/** [Read] appmesh-preview:DescribeRoute */
	static readonly DESCRIBE_ROUTE = "appmesh-preview:DescribeRoute";
	/** [Read] appmesh-preview:DescribeVirtualGateway */
	static readonly DESCRIBE_VIRTUAL_GATEWAY =
		"appmesh-preview:DescribeVirtualGateway";
	/** [Read] appmesh-preview:DescribeVirtualNode */
	static readonly DESCRIBE_VIRTUAL_NODE = "appmesh-preview:DescribeVirtualNode";
	/** [Read] appmesh-preview:DescribeVirtualRouter */
	static readonly DESCRIBE_VIRTUAL_ROUTER =
		"appmesh-preview:DescribeVirtualRouter";
	/** [Read] appmesh-preview:DescribeVirtualService */
	static readonly DESCRIBE_VIRTUAL_SERVICE =
		"appmesh-preview:DescribeVirtualService";
	/** [Read] appmesh-preview:GetMeshPolicy */
	static readonly GET_MESH_POLICY = "appmesh-preview:GetMeshPolicy";
	/** [List] appmesh-preview:ListGatewayRoutes */
	static readonly LIST_GATEWAY_ROUTES = "appmesh-preview:ListGatewayRoutes";
	/** [List] appmesh-preview:ListMeshes */
	static readonly LIST_MESHES = "appmesh-preview:ListMeshes";
	/** [List] appmesh-preview:ListRoutes */
	static readonly LIST_ROUTES = "appmesh-preview:ListRoutes";
	/** [List] appmesh-preview:ListVirtualGateways */
	static readonly LIST_VIRTUAL_GATEWAYS = "appmesh-preview:ListVirtualGateways";
	/** [List] appmesh-preview:ListVirtualNodes */
	static readonly LIST_VIRTUAL_NODES = "appmesh-preview:ListVirtualNodes";
	/** [List] appmesh-preview:ListVirtualRouters */
	static readonly LIST_VIRTUAL_ROUTERS = "appmesh-preview:ListVirtualRouters";
	/** [List] appmesh-preview:ListVirtualServices */
	static readonly LIST_VIRTUAL_SERVICES = "appmesh-preview:ListVirtualServices";
	/** [Write] appmesh-preview:PutMeshPolicy */
	static readonly PUT_MESH_POLICY = "appmesh-preview:PutMeshPolicy";
	/** [Read] appmesh-preview:StreamAggregatedResources */
	static readonly STREAM_AGGREGATED_RESOURCES =
		"appmesh-preview:StreamAggregatedResources";
	/** [Write] appmesh-preview:UpdateGatewayRoute */
	static readonly UPDATE_GATEWAY_ROUTE = "appmesh-preview:UpdateGatewayRoute";
	/** [Write] appmesh-preview:UpdateMesh */
	static readonly UPDATE_MESH = "appmesh-preview:UpdateMesh";
	/** [Write] appmesh-preview:UpdateRoute */
	static readonly UPDATE_ROUTE = "appmesh-preview:UpdateRoute";
	/** [Write] appmesh-preview:UpdateVirtualGateway */
	static readonly UPDATE_VIRTUAL_GATEWAY =
		"appmesh-preview:UpdateVirtualGateway";
	/** [Write] appmesh-preview:UpdateVirtualNode */
	static readonly UPDATE_VIRTUAL_NODE = "appmesh-preview:UpdateVirtualNode";
	/** [Write] appmesh-preview:UpdateVirtualRouter */
	static readonly UPDATE_VIRTUAL_ROUTER = "appmesh-preview:UpdateVirtualRouter";
	/** [Write] appmesh-preview:UpdateVirtualService */
	static readonly UPDATE_VIRTUAL_SERVICE =
		"appmesh-preview:UpdateVirtualService";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AppmeshPreviewActions.DESCRIBE_GATEWAY_ROUTE,
		AppmeshPreviewActions.DESCRIBE_MESH,
		AppmeshPreviewActions.DESCRIBE_ROUTE,
		AppmeshPreviewActions.DESCRIBE_VIRTUAL_GATEWAY,
		AppmeshPreviewActions.DESCRIBE_VIRTUAL_NODE,
		AppmeshPreviewActions.DESCRIBE_VIRTUAL_ROUTER,
		AppmeshPreviewActions.DESCRIBE_VIRTUAL_SERVICE,
		AppmeshPreviewActions.GET_MESH_POLICY,
		AppmeshPreviewActions.STREAM_AGGREGATED_RESOURCES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AppmeshPreviewActions.CREATE_GATEWAY_ROUTE,
		AppmeshPreviewActions.CREATE_MESH,
		AppmeshPreviewActions.CREATE_ROUTE,
		AppmeshPreviewActions.CREATE_VIRTUAL_GATEWAY,
		AppmeshPreviewActions.CREATE_VIRTUAL_NODE,
		AppmeshPreviewActions.CREATE_VIRTUAL_ROUTER,
		AppmeshPreviewActions.CREATE_VIRTUAL_SERVICE,
		AppmeshPreviewActions.DELETE_GATEWAY_ROUTE,
		AppmeshPreviewActions.DELETE_MESH,
		AppmeshPreviewActions.DELETE_MESH_POLICY,
		AppmeshPreviewActions.DELETE_ROUTE,
		AppmeshPreviewActions.DELETE_VIRTUAL_GATEWAY,
		AppmeshPreviewActions.DELETE_VIRTUAL_NODE,
		AppmeshPreviewActions.DELETE_VIRTUAL_ROUTER,
		AppmeshPreviewActions.DELETE_VIRTUAL_SERVICE,
		AppmeshPreviewActions.PUT_MESH_POLICY,
		AppmeshPreviewActions.UPDATE_GATEWAY_ROUTE,
		AppmeshPreviewActions.UPDATE_MESH,
		AppmeshPreviewActions.UPDATE_ROUTE,
		AppmeshPreviewActions.UPDATE_VIRTUAL_GATEWAY,
		AppmeshPreviewActions.UPDATE_VIRTUAL_NODE,
		AppmeshPreviewActions.UPDATE_VIRTUAL_ROUTER,
		AppmeshPreviewActions.UPDATE_VIRTUAL_SERVICE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AppmeshPreviewActions.LIST_GATEWAY_ROUTES,
		AppmeshPreviewActions.LIST_MESHES,
		AppmeshPreviewActions.LIST_ROUTES,
		AppmeshPreviewActions.LIST_VIRTUAL_GATEWAYS,
		AppmeshPreviewActions.LIST_VIRTUAL_NODES,
		AppmeshPreviewActions.LIST_VIRTUAL_ROUTERS,
		AppmeshPreviewActions.LIST_VIRTUAL_SERVICES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const GatewayRouteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)/virtualGateway/(?<virtualGatewayName>[^:/?]+)/gatewayRoute/(?<gatewayRouteName>[^:/?]+)$",
);
const MeshArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)$",
);
const RouteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)/virtualRouter/(?<virtualRouterName>[^:/?]+)/route/(?<routeName>[^:/?]+)$",
);
const VirtualGatewayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)/virtualGateway/(?<virtualGatewayName>[^:/?]+)$",
);
const VirtualNodeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)/virtualNode/(?<virtualNodeName>[^:/?]+)$",
);
const VirtualRouterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)/virtualRouter/(?<virtualRouterName>[^:/?]+)$",
);
const VirtualServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)/virtualService/(?<virtualServiceName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for appmesh-preview resources.
 */
export class AppmeshPreviewResources {
	/**
	 * Builds an ARN for the gatewayRoute resource.
	 */
	static gatewayRoute(props: {
		/** The MeshName component of the ARN. */
		readonly meshName: string;
		/** The VirtualGatewayName component of the ARN. */
		readonly virtualGatewayName: string;
		/** The GatewayRouteName component of the ARN. */
		readonly gatewayRouteName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appmesh-preview:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}/virtualGateway/${props.virtualGatewayName}/gatewayRoute/${props.gatewayRouteName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the gatewayRoute resource.
	 */
	static isValidGatewayRouteArn(arn: string): boolean {
		return GatewayRouteArnRegex.test(arn);
	}

	/**
	 * Parses a gatewayRoute ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGatewayRouteArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		meshName: string;
		virtualGatewayName: string;
		gatewayRouteName: string;
	} {
		const match = GatewayRouteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid gatewayRoute ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			meshName: match.groups!.meshName,
			virtualGatewayName: match.groups!.virtualGatewayName,
			gatewayRouteName: match.groups!.gatewayRouteName,
		};
	}

	/**
	 * Builds an ARN for the mesh resource.
	 */
	static mesh(props: {
		/** The MeshName component of the ARN. */
		readonly meshName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appmesh-preview:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mesh resource.
	 */
	static isValidMeshArn(arn: string): boolean {
		return MeshArnRegex.test(arn);
	}

	/**
	 * Parses a mesh ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMeshArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		meshName: string;
	} {
		const match = MeshArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mesh ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			meshName: match.groups!.meshName,
		};
	}

	/**
	 * Builds an ARN for the route resource.
	 */
	static route(props: {
		/** The MeshName component of the ARN. */
		readonly meshName: string;
		/** The VirtualRouterName component of the ARN. */
		readonly virtualRouterName: string;
		/** The RouteName component of the ARN. */
		readonly routeName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appmesh-preview:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}/virtualRouter/${props.virtualRouterName}/route/${props.routeName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the route resource.
	 */
	static isValidRouteArn(arn: string): boolean {
		return RouteArnRegex.test(arn);
	}

	/**
	 * Parses a route ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRouteArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		meshName: string;
		virtualRouterName: string;
		routeName: string;
	} {
		const match = RouteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid route ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			meshName: match.groups!.meshName,
			virtualRouterName: match.groups!.virtualRouterName,
			routeName: match.groups!.routeName,
		};
	}

	/**
	 * Builds an ARN for the virtualGateway resource.
	 */
	static virtualGateway(props: {
		/** The MeshName component of the ARN. */
		readonly meshName: string;
		/** The VirtualGatewayName component of the ARN. */
		readonly virtualGatewayName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appmesh-preview:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}/virtualGateway/${props.virtualGatewayName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the virtualGateway resource.
	 */
	static isValidVirtualGatewayArn(arn: string): boolean {
		return VirtualGatewayArnRegex.test(arn);
	}

	/**
	 * Parses a virtualGateway ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVirtualGatewayArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		meshName: string;
		virtualGatewayName: string;
	} {
		const match = VirtualGatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid virtualGateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			meshName: match.groups!.meshName,
			virtualGatewayName: match.groups!.virtualGatewayName,
		};
	}

	/**
	 * Builds an ARN for the virtualNode resource.
	 */
	static virtualNode(props: {
		/** The MeshName component of the ARN. */
		readonly meshName: string;
		/** The VirtualNodeName component of the ARN. */
		readonly virtualNodeName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appmesh-preview:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}/virtualNode/${props.virtualNodeName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the virtualNode resource.
	 */
	static isValidVirtualNodeArn(arn: string): boolean {
		return VirtualNodeArnRegex.test(arn);
	}

	/**
	 * Parses a virtualNode ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVirtualNodeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		meshName: string;
		virtualNodeName: string;
	} {
		const match = VirtualNodeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid virtualNode ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			meshName: match.groups!.meshName,
			virtualNodeName: match.groups!.virtualNodeName,
		};
	}

	/**
	 * Builds an ARN for the virtualRouter resource.
	 */
	static virtualRouter(props: {
		/** The MeshName component of the ARN. */
		readonly meshName: string;
		/** The VirtualRouterName component of the ARN. */
		readonly virtualRouterName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appmesh-preview:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}/virtualRouter/${props.virtualRouterName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the virtualRouter resource.
	 */
	static isValidVirtualRouterArn(arn: string): boolean {
		return VirtualRouterArnRegex.test(arn);
	}

	/**
	 * Parses a virtualRouter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVirtualRouterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		meshName: string;
		virtualRouterName: string;
	} {
		const match = VirtualRouterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid virtualRouter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			meshName: match.groups!.meshName,
			virtualRouterName: match.groups!.virtualRouterName,
		};
	}

	/**
	 * Builds an ARN for the virtualService resource.
	 */
	static virtualService(props: {
		/** The MeshName component of the ARN. */
		readonly meshName: string;
		/** The VirtualServiceName component of the ARN. */
		readonly virtualServiceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appmesh-preview:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}/virtualService/${props.virtualServiceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the virtualService resource.
	 */
	static isValidVirtualServiceArn(arn: string): boolean {
		return VirtualServiceArnRegex.test(arn);
	}

	/**
	 * Parses a virtualService ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVirtualServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		meshName: string;
		virtualServiceName: string;
	} {
		const match = VirtualServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid virtualService ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			meshName: match.groups!.meshName,
			virtualServiceName: match.groups!.virtualServiceName,
		};
	}
}
