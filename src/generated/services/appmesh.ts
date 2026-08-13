// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/appmesh.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the appmesh service.
 */
export class AppmeshActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "appmesh";

	/** [Write] appmesh:CreateGatewayRoute */
	static readonly CREATE_GATEWAY_ROUTE = "appmesh:CreateGatewayRoute";
	/** [Write] appmesh:CreateMesh */
	static readonly CREATE_MESH = "appmesh:CreateMesh";
	/** [Write] appmesh:CreateRoute */
	static readonly CREATE_ROUTE = "appmesh:CreateRoute";
	/** [Write] appmesh:CreateVirtualGateway */
	static readonly CREATE_VIRTUAL_GATEWAY = "appmesh:CreateVirtualGateway";
	/** [Write] appmesh:CreateVirtualNode */
	static readonly CREATE_VIRTUAL_NODE = "appmesh:CreateVirtualNode";
	/** [Write] appmesh:CreateVirtualRouter */
	static readonly CREATE_VIRTUAL_ROUTER = "appmesh:CreateVirtualRouter";
	/** [Write] appmesh:CreateVirtualService */
	static readonly CREATE_VIRTUAL_SERVICE = "appmesh:CreateVirtualService";
	/** [Write] appmesh:DeleteGatewayRoute */
	static readonly DELETE_GATEWAY_ROUTE = "appmesh:DeleteGatewayRoute";
	/** [Write] appmesh:DeleteMesh */
	static readonly DELETE_MESH = "appmesh:DeleteMesh";
	/** [Write] appmesh:DeleteMeshPolicy */
	static readonly DELETE_MESH_POLICY = "appmesh:DeleteMeshPolicy";
	/** [Write] appmesh:DeleteRoute */
	static readonly DELETE_ROUTE = "appmesh:DeleteRoute";
	/** [Write] appmesh:DeleteVirtualGateway */
	static readonly DELETE_VIRTUAL_GATEWAY = "appmesh:DeleteVirtualGateway";
	/** [Write] appmesh:DeleteVirtualNode */
	static readonly DELETE_VIRTUAL_NODE = "appmesh:DeleteVirtualNode";
	/** [Write] appmesh:DeleteVirtualRouter */
	static readonly DELETE_VIRTUAL_ROUTER = "appmesh:DeleteVirtualRouter";
	/** [Write] appmesh:DeleteVirtualService */
	static readonly DELETE_VIRTUAL_SERVICE = "appmesh:DeleteVirtualService";
	/** [Read] appmesh:DescribeGatewayRoute */
	static readonly DESCRIBE_GATEWAY_ROUTE = "appmesh:DescribeGatewayRoute";
	/** [Read] appmesh:DescribeMesh */
	static readonly DESCRIBE_MESH = "appmesh:DescribeMesh";
	/** [Read] appmesh:DescribeRoute */
	static readonly DESCRIBE_ROUTE = "appmesh:DescribeRoute";
	/** [Read] appmesh:DescribeVirtualGateway */
	static readonly DESCRIBE_VIRTUAL_GATEWAY = "appmesh:DescribeVirtualGateway";
	/** [Read] appmesh:DescribeVirtualNode */
	static readonly DESCRIBE_VIRTUAL_NODE = "appmesh:DescribeVirtualNode";
	/** [Read] appmesh:DescribeVirtualRouter */
	static readonly DESCRIBE_VIRTUAL_ROUTER = "appmesh:DescribeVirtualRouter";
	/** [Read] appmesh:DescribeVirtualService */
	static readonly DESCRIBE_VIRTUAL_SERVICE = "appmesh:DescribeVirtualService";
	/** [Read] appmesh:GetMeshPolicy */
	static readonly GET_MESH_POLICY = "appmesh:GetMeshPolicy";
	/** [List] appmesh:ListGatewayRoutes */
	static readonly LIST_GATEWAY_ROUTES = "appmesh:ListGatewayRoutes";
	/** [List] appmesh:ListMeshes */
	static readonly LIST_MESHES = "appmesh:ListMeshes";
	/** [List] appmesh:ListRoutes */
	static readonly LIST_ROUTES = "appmesh:ListRoutes";
	/** [List] appmesh:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "appmesh:ListTagsForResource";
	/** [List] appmesh:ListVirtualGateways */
	static readonly LIST_VIRTUAL_GATEWAYS = "appmesh:ListVirtualGateways";
	/** [List] appmesh:ListVirtualNodes */
	static readonly LIST_VIRTUAL_NODES = "appmesh:ListVirtualNodes";
	/** [List] appmesh:ListVirtualRouters */
	static readonly LIST_VIRTUAL_ROUTERS = "appmesh:ListVirtualRouters";
	/** [List] appmesh:ListVirtualServices */
	static readonly LIST_VIRTUAL_SERVICES = "appmesh:ListVirtualServices";
	/** [Write] appmesh:PutMeshPolicy */
	static readonly PUT_MESH_POLICY = "appmesh:PutMeshPolicy";
	/** [Read] appmesh:StreamAggregatedResources */
	static readonly STREAM_AGGREGATED_RESOURCES =
		"appmesh:StreamAggregatedResources";
	/** [Tagging] appmesh:TagResource */
	static readonly TAG_RESOURCE = "appmesh:TagResource";
	/** [Tagging] appmesh:UntagResource */
	static readonly UNTAG_RESOURCE = "appmesh:UntagResource";
	/** [Write] appmesh:UpdateGatewayRoute */
	static readonly UPDATE_GATEWAY_ROUTE = "appmesh:UpdateGatewayRoute";
	/** [Write] appmesh:UpdateMesh */
	static readonly UPDATE_MESH = "appmesh:UpdateMesh";
	/** [Write] appmesh:UpdateRoute */
	static readonly UPDATE_ROUTE = "appmesh:UpdateRoute";
	/** [Write] appmesh:UpdateVirtualGateway */
	static readonly UPDATE_VIRTUAL_GATEWAY = "appmesh:UpdateVirtualGateway";
	/** [Write] appmesh:UpdateVirtualNode */
	static readonly UPDATE_VIRTUAL_NODE = "appmesh:UpdateVirtualNode";
	/** [Write] appmesh:UpdateVirtualRouter */
	static readonly UPDATE_VIRTUAL_ROUTER = "appmesh:UpdateVirtualRouter";
	/** [Write] appmesh:UpdateVirtualService */
	static readonly UPDATE_VIRTUAL_SERVICE = "appmesh:UpdateVirtualService";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AppmeshActions.DESCRIBE_GATEWAY_ROUTE,
		AppmeshActions.DESCRIBE_MESH,
		AppmeshActions.DESCRIBE_ROUTE,
		AppmeshActions.DESCRIBE_VIRTUAL_GATEWAY,
		AppmeshActions.DESCRIBE_VIRTUAL_NODE,
		AppmeshActions.DESCRIBE_VIRTUAL_ROUTER,
		AppmeshActions.DESCRIBE_VIRTUAL_SERVICE,
		AppmeshActions.GET_MESH_POLICY,
		AppmeshActions.STREAM_AGGREGATED_RESOURCES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AppmeshActions.CREATE_GATEWAY_ROUTE,
		AppmeshActions.CREATE_MESH,
		AppmeshActions.CREATE_ROUTE,
		AppmeshActions.CREATE_VIRTUAL_GATEWAY,
		AppmeshActions.CREATE_VIRTUAL_NODE,
		AppmeshActions.CREATE_VIRTUAL_ROUTER,
		AppmeshActions.CREATE_VIRTUAL_SERVICE,
		AppmeshActions.DELETE_GATEWAY_ROUTE,
		AppmeshActions.DELETE_MESH,
		AppmeshActions.DELETE_MESH_POLICY,
		AppmeshActions.DELETE_ROUTE,
		AppmeshActions.DELETE_VIRTUAL_GATEWAY,
		AppmeshActions.DELETE_VIRTUAL_NODE,
		AppmeshActions.DELETE_VIRTUAL_ROUTER,
		AppmeshActions.DELETE_VIRTUAL_SERVICE,
		AppmeshActions.PUT_MESH_POLICY,
		AppmeshActions.UPDATE_GATEWAY_ROUTE,
		AppmeshActions.UPDATE_MESH,
		AppmeshActions.UPDATE_ROUTE,
		AppmeshActions.UPDATE_VIRTUAL_GATEWAY,
		AppmeshActions.UPDATE_VIRTUAL_NODE,
		AppmeshActions.UPDATE_VIRTUAL_ROUTER,
		AppmeshActions.UPDATE_VIRTUAL_SERVICE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AppmeshActions.LIST_GATEWAY_ROUTES,
		AppmeshActions.LIST_MESHES,
		AppmeshActions.LIST_ROUTES,
		AppmeshActions.LIST_TAGS_FOR_RESOURCE,
		AppmeshActions.LIST_VIRTUAL_GATEWAYS,
		AppmeshActions.LIST_VIRTUAL_NODES,
		AppmeshActions.LIST_VIRTUAL_ROUTERS,
		AppmeshActions.LIST_VIRTUAL_SERVICES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AppmeshActions.TAG_RESOURCE,
		AppmeshActions.UNTAG_RESOURCE,
	];
}

const GatewayRouteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)/virtualGateway/(?<virtualGatewayName>[^:/?]+)/gatewayRoute/(?<gatewayRouteName>[^:/?]+)$",
);
const MeshArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)$",
);
const RouteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)/virtualRouter/(?<virtualRouterName>[^:/?]+)/route/(?<routeName>[^:/?]+)$",
);
const VirtualGatewayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)/virtualGateway/(?<virtualGatewayName>[^:/?]+)$",
);
const VirtualNodeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)/virtualNode/(?<virtualNodeName>[^:/?]+)$",
);
const VirtualRouterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)/virtualRouter/(?<virtualRouterName>[^:/?]+)$",
);
const VirtualServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh/(?<meshName>[^:/?]+)/virtualService/(?<virtualServiceName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for appmesh resources.
 */
export class AppmeshResources {
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
		return `arn:${props.partition ?? "aws"}:appmesh:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}/virtualGateway/${props.virtualGatewayName}/gatewayRoute/${props.gatewayRouteName}`;
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
		return `arn:${props.partition ?? "aws"}:appmesh:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}`;
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
		return `arn:${props.partition ?? "aws"}:appmesh:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}/virtualRouter/${props.virtualRouterName}/route/${props.routeName}`;
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
		return `arn:${props.partition ?? "aws"}:appmesh:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}/virtualGateway/${props.virtualGatewayName}`;
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
		return `arn:${props.partition ?? "aws"}:appmesh:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}/virtualNode/${props.virtualNodeName}`;
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
		return `arn:${props.partition ?? "aws"}:appmesh:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}/virtualRouter/${props.virtualRouterName}`;
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
		return `arn:${props.partition ?? "aws"}:appmesh:${props.region ?? "*"}:${props.account ?? "*"}:mesh/${props.meshName}/virtualService/${props.virtualServiceName}`;
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

/**
 * API operation to required IAM actions mapping for appmesh.
 */
export class AppmeshOperations {
	/** IAM actions required for the CreateGatewayRoute API call. */
	static readonly CREATE_GATEWAY_ROUTE: string[] = [
		"appmesh:CreateGatewayRoute",
		"appmesh:TagResource",
	];
	/** IAM actions required for the CreateMesh API call. */
	static readonly CREATE_MESH: string[] = [
		"appmesh:CreateMesh",
		"appmesh:TagResource",
	];
	/** IAM actions required for the CreateRoute API call. */
	static readonly CREATE_ROUTE: string[] = [
		"appmesh:CreateRoute",
		"appmesh:TagResource",
	];
	/** IAM actions required for the CreateVirtualGateway API call. */
	static readonly CREATE_VIRTUAL_GATEWAY: string[] = [
		"appmesh:CreateVirtualGateway",
		"appmesh:TagResource",
	];
	/** IAM actions required for the CreateVirtualNode API call. */
	static readonly CREATE_VIRTUAL_NODE: string[] = [
		"appmesh:CreateVirtualNode",
		"iam:PassRole",
		"appmesh:TagResource",
	];
	/** IAM actions required for the CreateVirtualRouter API call. */
	static readonly CREATE_VIRTUAL_ROUTER: string[] = [
		"appmesh:CreateVirtualRouter",
		"appmesh:TagResource",
	];
	/** IAM actions required for the CreateVirtualService API call. */
	static readonly CREATE_VIRTUAL_SERVICE: string[] = [
		"appmesh:CreateVirtualService",
		"appmesh:TagResource",
	];
	/** IAM actions required for the DeleteGatewayRoute API call. */
	static readonly DELETE_GATEWAY_ROUTE: string[] = [
		"appmesh:DeleteGatewayRoute",
	];
	/** IAM actions required for the DeleteMesh API call. */
	static readonly DELETE_MESH: string[] = ["appmesh:DeleteMesh"];
	/** IAM actions required for the DeleteRoute API call. */
	static readonly DELETE_ROUTE: string[] = ["appmesh:DeleteRoute"];
	/** IAM actions required for the DeleteVirtualGateway API call. */
	static readonly DELETE_VIRTUAL_GATEWAY: string[] = [
		"appmesh:DeleteVirtualGateway",
	];
	/** IAM actions required for the DeleteVirtualNode API call. */
	static readonly DELETE_VIRTUAL_NODE: string[] = ["appmesh:DeleteVirtualNode"];
	/** IAM actions required for the DeleteVirtualRouter API call. */
	static readonly DELETE_VIRTUAL_ROUTER: string[] = [
		"appmesh:DeleteVirtualRouter",
	];
	/** IAM actions required for the DeleteVirtualService API call. */
	static readonly DELETE_VIRTUAL_SERVICE: string[] = [
		"appmesh:DeleteVirtualService",
	];
	/** IAM actions required for the DescribeGatewayRoute API call. */
	static readonly DESCRIBE_GATEWAY_ROUTE: string[] = [
		"appmesh:DescribeGatewayRoute",
	];
	/** IAM actions required for the DescribeMesh API call. */
	static readonly DESCRIBE_MESH: string[] = ["appmesh:DescribeMesh"];
	/** IAM actions required for the DescribeRoute API call. */
	static readonly DESCRIBE_ROUTE: string[] = ["appmesh:DescribeRoute"];
	/** IAM actions required for the DescribeVirtualGateway API call. */
	static readonly DESCRIBE_VIRTUAL_GATEWAY: string[] = [
		"appmesh:DescribeVirtualGateway",
	];
	/** IAM actions required for the DescribeVirtualNode API call. */
	static readonly DESCRIBE_VIRTUAL_NODE: string[] = [
		"appmesh:DescribeVirtualNode",
	];
	/** IAM actions required for the DescribeVirtualRouter API call. */
	static readonly DESCRIBE_VIRTUAL_ROUTER: string[] = [
		"appmesh:DescribeVirtualRouter",
	];
	/** IAM actions required for the DescribeVirtualService API call. */
	static readonly DESCRIBE_VIRTUAL_SERVICE: string[] = [
		"appmesh:DescribeVirtualService",
	];
	/** IAM actions required for the ListGatewayRoutes API call. */
	static readonly LIST_GATEWAY_ROUTES: string[] = ["appmesh:ListGatewayRoutes"];
	/** IAM actions required for the ListMeshes API call. */
	static readonly LIST_MESHES: string[] = ["appmesh:ListMeshes"];
	/** IAM actions required for the ListRoutes API call. */
	static readonly LIST_ROUTES: string[] = ["appmesh:ListRoutes"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"appmesh:ListTagsForResource",
	];
	/** IAM actions required for the ListVirtualGateways API call. */
	static readonly LIST_VIRTUAL_GATEWAYS: string[] = [
		"appmesh:ListVirtualGateways",
	];
	/** IAM actions required for the ListVirtualNodes API call. */
	static readonly LIST_VIRTUAL_NODES: string[] = ["appmesh:ListVirtualNodes"];
	/** IAM actions required for the ListVirtualRouters API call. */
	static readonly LIST_VIRTUAL_ROUTERS: string[] = [
		"appmesh:ListVirtualRouters",
	];
	/** IAM actions required for the ListVirtualServices API call. */
	static readonly LIST_VIRTUAL_SERVICES: string[] = [
		"appmesh:ListVirtualServices",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["appmesh:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["appmesh:UntagResource"];
	/** IAM actions required for the UpdateGatewayRoute API call. */
	static readonly UPDATE_GATEWAY_ROUTE: string[] = [
		"appmesh:UpdateGatewayRoute",
	];
	/** IAM actions required for the UpdateMesh API call. */
	static readonly UPDATE_MESH: string[] = ["appmesh:UpdateMesh"];
	/** IAM actions required for the UpdateRoute API call. */
	static readonly UPDATE_ROUTE: string[] = ["appmesh:UpdateRoute"];
	/** IAM actions required for the UpdateVirtualGateway API call. */
	static readonly UPDATE_VIRTUAL_GATEWAY: string[] = [
		"appmesh:UpdateVirtualGateway",
	];
	/** IAM actions required for the UpdateVirtualNode API call. */
	static readonly UPDATE_VIRTUAL_NODE: string[] = ["appmesh:UpdateVirtualNode"];
	/** IAM actions required for the UpdateVirtualRouter API call. */
	static readonly UPDATE_VIRTUAL_ROUTER: string[] = [
		"appmesh:UpdateVirtualRouter",
	];
	/** IAM actions required for the UpdateVirtualService API call. */
	static readonly UPDATE_VIRTUAL_SERVICE: string[] = [
		"appmesh:UpdateVirtualService",
	];
}

/**
 * Condition key constants and builders for appmesh.
 */
export class AppmeshConditions {
	/** Condition keys applicable to the CreateMesh action. */
	static readonly CREATE_MESH_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVirtualGateway action. */
	static readonly CREATE_VIRTUAL_GATEWAY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVirtualRouter action. */
	static readonly CREATE_VIRTUAL_ROUTER_CONDITION_KEYS: string[] = [
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
