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
	static readonly CreateGatewayRoute = "appmesh-preview:CreateGatewayRoute";
	/** [Write] appmesh-preview:CreateMesh */
	static readonly CreateMesh = "appmesh-preview:CreateMesh";
	/** [Write] appmesh-preview:CreateRoute */
	static readonly CreateRoute = "appmesh-preview:CreateRoute";
	/** [Write] appmesh-preview:CreateVirtualGateway */
	static readonly CreateVirtualGateway = "appmesh-preview:CreateVirtualGateway";
	/** [Write] appmesh-preview:CreateVirtualNode */
	static readonly CreateVirtualNode = "appmesh-preview:CreateVirtualNode";
	/** [Write] appmesh-preview:CreateVirtualRouter */
	static readonly CreateVirtualRouter = "appmesh-preview:CreateVirtualRouter";
	/** [Write] appmesh-preview:CreateVirtualService */
	static readonly CreateVirtualService = "appmesh-preview:CreateVirtualService";
	/** [Write] appmesh-preview:DeleteGatewayRoute */
	static readonly DeleteGatewayRoute = "appmesh-preview:DeleteGatewayRoute";
	/** [Write] appmesh-preview:DeleteMesh */
	static readonly DeleteMesh = "appmesh-preview:DeleteMesh";
	/** [Write] appmesh-preview:DeleteMeshPolicy */
	static readonly DeleteMeshPolicy = "appmesh-preview:DeleteMeshPolicy";
	/** [Write] appmesh-preview:DeleteRoute */
	static readonly DeleteRoute = "appmesh-preview:DeleteRoute";
	/** [Write] appmesh-preview:DeleteVirtualGateway */
	static readonly DeleteVirtualGateway = "appmesh-preview:DeleteVirtualGateway";
	/** [Write] appmesh-preview:DeleteVirtualNode */
	static readonly DeleteVirtualNode = "appmesh-preview:DeleteVirtualNode";
	/** [Write] appmesh-preview:DeleteVirtualRouter */
	static readonly DeleteVirtualRouter = "appmesh-preview:DeleteVirtualRouter";
	/** [Write] appmesh-preview:DeleteVirtualService */
	static readonly DeleteVirtualService = "appmesh-preview:DeleteVirtualService";
	/** [Read] appmesh-preview:DescribeGatewayRoute */
	static readonly DescribeGatewayRoute = "appmesh-preview:DescribeGatewayRoute";
	/** [Read] appmesh-preview:DescribeMesh */
	static readonly DescribeMesh = "appmesh-preview:DescribeMesh";
	/** [Read] appmesh-preview:DescribeRoute */
	static readonly DescribeRoute = "appmesh-preview:DescribeRoute";
	/** [Read] appmesh-preview:DescribeVirtualGateway */
	static readonly DescribeVirtualGateway =
		"appmesh-preview:DescribeVirtualGateway";
	/** [Read] appmesh-preview:DescribeVirtualNode */
	static readonly DescribeVirtualNode = "appmesh-preview:DescribeVirtualNode";
	/** [Read] appmesh-preview:DescribeVirtualRouter */
	static readonly DescribeVirtualRouter =
		"appmesh-preview:DescribeVirtualRouter";
	/** [Read] appmesh-preview:DescribeVirtualService */
	static readonly DescribeVirtualService =
		"appmesh-preview:DescribeVirtualService";
	/** [Read] appmesh-preview:GetMeshPolicy */
	static readonly actionGetMeshPolicy = "appmesh-preview:GetMeshPolicy";
	/** [List] appmesh-preview:ListGatewayRoutes */
	static readonly ListGatewayRoutes = "appmesh-preview:ListGatewayRoutes";
	/** [List] appmesh-preview:ListMeshes */
	static readonly ListMeshes = "appmesh-preview:ListMeshes";
	/** [List] appmesh-preview:ListRoutes */
	static readonly ListRoutes = "appmesh-preview:ListRoutes";
	/** [List] appmesh-preview:ListVirtualGateways */
	static readonly ListVirtualGateways = "appmesh-preview:ListVirtualGateways";
	/** [List] appmesh-preview:ListVirtualNodes */
	static readonly ListVirtualNodes = "appmesh-preview:ListVirtualNodes";
	/** [List] appmesh-preview:ListVirtualRouters */
	static readonly ListVirtualRouters = "appmesh-preview:ListVirtualRouters";
	/** [List] appmesh-preview:ListVirtualServices */
	static readonly ListVirtualServices = "appmesh-preview:ListVirtualServices";
	/** [Write] appmesh-preview:PutMeshPolicy */
	static readonly PutMeshPolicy = "appmesh-preview:PutMeshPolicy";
	/** [Read] appmesh-preview:StreamAggregatedResources */
	static readonly StreamAggregatedResources =
		"appmesh-preview:StreamAggregatedResources";
	/** [Write] appmesh-preview:UpdateGatewayRoute */
	static readonly UpdateGatewayRoute = "appmesh-preview:UpdateGatewayRoute";
	/** [Write] appmesh-preview:UpdateMesh */
	static readonly UpdateMesh = "appmesh-preview:UpdateMesh";
	/** [Write] appmesh-preview:UpdateRoute */
	static readonly UpdateRoute = "appmesh-preview:UpdateRoute";
	/** [Write] appmesh-preview:UpdateVirtualGateway */
	static readonly UpdateVirtualGateway = "appmesh-preview:UpdateVirtualGateway";
	/** [Write] appmesh-preview:UpdateVirtualNode */
	static readonly UpdateVirtualNode = "appmesh-preview:UpdateVirtualNode";
	/** [Write] appmesh-preview:UpdateVirtualRouter */
	static readonly UpdateVirtualRouter = "appmesh-preview:UpdateVirtualRouter";
	/** [Write] appmesh-preview:UpdateVirtualService */
	static readonly UpdateVirtualService = "appmesh-preview:UpdateVirtualService";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AppmeshPreviewActions.DescribeGatewayRoute,
		AppmeshPreviewActions.DescribeMesh,
		AppmeshPreviewActions.DescribeRoute,
		AppmeshPreviewActions.DescribeVirtualGateway,
		AppmeshPreviewActions.DescribeVirtualNode,
		AppmeshPreviewActions.DescribeVirtualRouter,
		AppmeshPreviewActions.DescribeVirtualService,
		AppmeshPreviewActions.actionGetMeshPolicy,
		AppmeshPreviewActions.StreamAggregatedResources,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AppmeshPreviewActions.CreateGatewayRoute,
		AppmeshPreviewActions.CreateMesh,
		AppmeshPreviewActions.CreateRoute,
		AppmeshPreviewActions.CreateVirtualGateway,
		AppmeshPreviewActions.CreateVirtualNode,
		AppmeshPreviewActions.CreateVirtualRouter,
		AppmeshPreviewActions.CreateVirtualService,
		AppmeshPreviewActions.DeleteGatewayRoute,
		AppmeshPreviewActions.DeleteMesh,
		AppmeshPreviewActions.DeleteMeshPolicy,
		AppmeshPreviewActions.DeleteRoute,
		AppmeshPreviewActions.DeleteVirtualGateway,
		AppmeshPreviewActions.DeleteVirtualNode,
		AppmeshPreviewActions.DeleteVirtualRouter,
		AppmeshPreviewActions.DeleteVirtualService,
		AppmeshPreviewActions.PutMeshPolicy,
		AppmeshPreviewActions.UpdateGatewayRoute,
		AppmeshPreviewActions.UpdateMesh,
		AppmeshPreviewActions.UpdateRoute,
		AppmeshPreviewActions.UpdateVirtualGateway,
		AppmeshPreviewActions.UpdateVirtualNode,
		AppmeshPreviewActions.UpdateVirtualRouter,
		AppmeshPreviewActions.UpdateVirtualService,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AppmeshPreviewActions.ListGatewayRoutes,
		AppmeshPreviewActions.ListMeshes,
		AppmeshPreviewActions.ListRoutes,
		AppmeshPreviewActions.ListVirtualGateways,
		AppmeshPreviewActions.ListVirtualNodes,
		AppmeshPreviewActions.ListVirtualRouters,
		AppmeshPreviewActions.ListVirtualServices,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a gatewayRoute ARN.
 */
export interface AppmeshPreviewGatewayRouteArnProps {
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
}

/**
 * Parsed components of a gatewayRoute ARN.
 */
export interface AppmeshPreviewGatewayRouteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MeshName component. */
	readonly meshName: string;
	/** The VirtualGatewayName component. */
	readonly virtualGatewayName: string;
	/** The GatewayRouteName component. */
	readonly gatewayRouteName: string;
}

/**
 * Properties for building a mesh ARN.
 */
export interface AppmeshPreviewMeshArnProps {
	/** The MeshName component of the ARN. */
	readonly meshName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mesh ARN.
 */
export interface AppmeshPreviewMeshArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MeshName component. */
	readonly meshName: string;
}

/**
 * Properties for building a route ARN.
 */
export interface AppmeshPreviewRouteArnProps {
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
}

/**
 * Parsed components of a route ARN.
 */
export interface AppmeshPreviewRouteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MeshName component. */
	readonly meshName: string;
	/** The VirtualRouterName component. */
	readonly virtualRouterName: string;
	/** The RouteName component. */
	readonly routeName: string;
}

/**
 * Properties for building a virtualGateway ARN.
 */
export interface AppmeshPreviewVirtualGatewayArnProps {
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
}

/**
 * Parsed components of a virtualGateway ARN.
 */
export interface AppmeshPreviewVirtualGatewayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MeshName component. */
	readonly meshName: string;
	/** The VirtualGatewayName component. */
	readonly virtualGatewayName: string;
}

/**
 * Properties for building a virtualNode ARN.
 */
export interface AppmeshPreviewVirtualNodeArnProps {
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
}

/**
 * Parsed components of a virtualNode ARN.
 */
export interface AppmeshPreviewVirtualNodeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MeshName component. */
	readonly meshName: string;
	/** The VirtualNodeName component. */
	readonly virtualNodeName: string;
}

/**
 * Properties for building a virtualRouter ARN.
 */
export interface AppmeshPreviewVirtualRouterArnProps {
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
}

/**
 * Parsed components of a virtualRouter ARN.
 */
export interface AppmeshPreviewVirtualRouterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MeshName component. */
	readonly meshName: string;
	/** The VirtualRouterName component. */
	readonly virtualRouterName: string;
}

/**
 * Properties for building a virtualService ARN.
 */
export interface AppmeshPreviewVirtualServiceArnProps {
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
}

/**
 * Parsed components of a virtualService ARN.
 */
export interface AppmeshPreviewVirtualServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MeshName component. */
	readonly meshName: string;
	/** The VirtualServiceName component. */
	readonly virtualServiceName: string;
}

const GatewayRouteArnRegex =
	/^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)\/virtualGateway\/(?<virtualGatewayName>[^:/?]+)\/gatewayRoute\/(?<gatewayRouteName>[^:/?]+)$/;
const MeshArnRegex =
	/^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)$/;
const RouteArnRegex =
	/^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)\/virtualRouter\/(?<virtualRouterName>[^:/?]+)\/route\/(?<routeName>[^:/?]+)$/;
const VirtualGatewayArnRegex =
	/^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)\/virtualGateway\/(?<virtualGatewayName>[^:/?]+)$/;
const VirtualNodeArnRegex =
	/^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)\/virtualNode\/(?<virtualNodeName>[^:/?]+)$/;
const VirtualRouterArnRegex =
	/^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)\/virtualRouter\/(?<virtualRouterName>[^:/?]+)$/;
const VirtualServiceArnRegex =
	/^arn:(?<partition>[^:]+):appmesh-preview:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)\/virtualService\/(?<virtualServiceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for appmesh-preview resources.
 */
export class AppmeshPreviewResources {
	/**
	 * Builds an ARN for the gatewayRoute resource.
	 */
	static gatewayRoute(props: AppmeshPreviewGatewayRouteArnProps): string {
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
	static parseGatewayRouteArn(
		arn: string,
	): AppmeshPreviewGatewayRouteArnComponents {
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
	static mesh(props: AppmeshPreviewMeshArnProps): string {
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
	static parseMeshArn(arn: string): AppmeshPreviewMeshArnComponents {
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
	static route(props: AppmeshPreviewRouteArnProps): string {
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
	static parseRouteArn(arn: string): AppmeshPreviewRouteArnComponents {
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
	static virtualGateway(props: AppmeshPreviewVirtualGatewayArnProps): string {
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
	static parseVirtualGatewayArn(
		arn: string,
	): AppmeshPreviewVirtualGatewayArnComponents {
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
	static virtualNode(props: AppmeshPreviewVirtualNodeArnProps): string {
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
	static parseVirtualNodeArn(
		arn: string,
	): AppmeshPreviewVirtualNodeArnComponents {
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
	static virtualRouter(props: AppmeshPreviewVirtualRouterArnProps): string {
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
	static parseVirtualRouterArn(
		arn: string,
	): AppmeshPreviewVirtualRouterArnComponents {
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
	static virtualService(props: AppmeshPreviewVirtualServiceArnProps): string {
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
	static parseVirtualServiceArn(
		arn: string,
	): AppmeshPreviewVirtualServiceArnComponents {
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
