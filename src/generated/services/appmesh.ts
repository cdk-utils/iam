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
	static readonly CreateGatewayRoute = "appmesh:CreateGatewayRoute";
	/** [Write] appmesh:CreateMesh */
	static readonly CreateMesh = "appmesh:CreateMesh";
	/** [Write] appmesh:CreateRoute */
	static readonly CreateRoute = "appmesh:CreateRoute";
	/** [Write] appmesh:CreateVirtualGateway */
	static readonly CreateVirtualGateway = "appmesh:CreateVirtualGateway";
	/** [Write] appmesh:CreateVirtualNode */
	static readonly CreateVirtualNode = "appmesh:CreateVirtualNode";
	/** [Write] appmesh:CreateVirtualRouter */
	static readonly CreateVirtualRouter = "appmesh:CreateVirtualRouter";
	/** [Write] appmesh:CreateVirtualService */
	static readonly CreateVirtualService = "appmesh:CreateVirtualService";
	/** [Write] appmesh:DeleteGatewayRoute */
	static readonly DeleteGatewayRoute = "appmesh:DeleteGatewayRoute";
	/** [Write] appmesh:DeleteMesh */
	static readonly DeleteMesh = "appmesh:DeleteMesh";
	/** [Write] appmesh:DeleteMeshPolicy */
	static readonly DeleteMeshPolicy = "appmesh:DeleteMeshPolicy";
	/** [Write] appmesh:DeleteRoute */
	static readonly DeleteRoute = "appmesh:DeleteRoute";
	/** [Write] appmesh:DeleteVirtualGateway */
	static readonly DeleteVirtualGateway = "appmesh:DeleteVirtualGateway";
	/** [Write] appmesh:DeleteVirtualNode */
	static readonly DeleteVirtualNode = "appmesh:DeleteVirtualNode";
	/** [Write] appmesh:DeleteVirtualRouter */
	static readonly DeleteVirtualRouter = "appmesh:DeleteVirtualRouter";
	/** [Write] appmesh:DeleteVirtualService */
	static readonly DeleteVirtualService = "appmesh:DeleteVirtualService";
	/** [Read] appmesh:DescribeGatewayRoute */
	static readonly DescribeGatewayRoute = "appmesh:DescribeGatewayRoute";
	/** [Read] appmesh:DescribeMesh */
	static readonly DescribeMesh = "appmesh:DescribeMesh";
	/** [Read] appmesh:DescribeRoute */
	static readonly DescribeRoute = "appmesh:DescribeRoute";
	/** [Read] appmesh:DescribeVirtualGateway */
	static readonly DescribeVirtualGateway = "appmesh:DescribeVirtualGateway";
	/** [Read] appmesh:DescribeVirtualNode */
	static readonly DescribeVirtualNode = "appmesh:DescribeVirtualNode";
	/** [Read] appmesh:DescribeVirtualRouter */
	static readonly DescribeVirtualRouter = "appmesh:DescribeVirtualRouter";
	/** [Read] appmesh:DescribeVirtualService */
	static readonly DescribeVirtualService = "appmesh:DescribeVirtualService";
	/** [Read] appmesh:GetMeshPolicy */
	static readonly actionGetMeshPolicy = "appmesh:GetMeshPolicy";
	/** [List] appmesh:ListGatewayRoutes */
	static readonly ListGatewayRoutes = "appmesh:ListGatewayRoutes";
	/** [List] appmesh:ListMeshes */
	static readonly ListMeshes = "appmesh:ListMeshes";
	/** [List] appmesh:ListRoutes */
	static readonly ListRoutes = "appmesh:ListRoutes";
	/** [List] appmesh:ListTagsForResource */
	static readonly ListTagsForResource = "appmesh:ListTagsForResource";
	/** [List] appmesh:ListVirtualGateways */
	static readonly ListVirtualGateways = "appmesh:ListVirtualGateways";
	/** [List] appmesh:ListVirtualNodes */
	static readonly ListVirtualNodes = "appmesh:ListVirtualNodes";
	/** [List] appmesh:ListVirtualRouters */
	static readonly ListVirtualRouters = "appmesh:ListVirtualRouters";
	/** [List] appmesh:ListVirtualServices */
	static readonly ListVirtualServices = "appmesh:ListVirtualServices";
	/** [Write] appmesh:PutMeshPolicy */
	static readonly PutMeshPolicy = "appmesh:PutMeshPolicy";
	/** [Read] appmesh:StreamAggregatedResources */
	static readonly StreamAggregatedResources =
		"appmesh:StreamAggregatedResources";
	/** [Tagging] appmesh:TagResource */
	static readonly TagResource = "appmesh:TagResource";
	/** [Tagging] appmesh:UntagResource */
	static readonly UntagResource = "appmesh:UntagResource";
	/** [Write] appmesh:UpdateGatewayRoute */
	static readonly UpdateGatewayRoute = "appmesh:UpdateGatewayRoute";
	/** [Write] appmesh:UpdateMesh */
	static readonly UpdateMesh = "appmesh:UpdateMesh";
	/** [Write] appmesh:UpdateRoute */
	static readonly UpdateRoute = "appmesh:UpdateRoute";
	/** [Write] appmesh:UpdateVirtualGateway */
	static readonly UpdateVirtualGateway = "appmesh:UpdateVirtualGateway";
	/** [Write] appmesh:UpdateVirtualNode */
	static readonly UpdateVirtualNode = "appmesh:UpdateVirtualNode";
	/** [Write] appmesh:UpdateVirtualRouter */
	static readonly UpdateVirtualRouter = "appmesh:UpdateVirtualRouter";
	/** [Write] appmesh:UpdateVirtualService */
	static readonly UpdateVirtualService = "appmesh:UpdateVirtualService";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AppmeshActions.DescribeGatewayRoute,
		AppmeshActions.DescribeMesh,
		AppmeshActions.DescribeRoute,
		AppmeshActions.DescribeVirtualGateway,
		AppmeshActions.DescribeVirtualNode,
		AppmeshActions.DescribeVirtualRouter,
		AppmeshActions.DescribeVirtualService,
		AppmeshActions.actionGetMeshPolicy,
		AppmeshActions.StreamAggregatedResources,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AppmeshActions.CreateGatewayRoute,
		AppmeshActions.CreateMesh,
		AppmeshActions.CreateRoute,
		AppmeshActions.CreateVirtualGateway,
		AppmeshActions.CreateVirtualNode,
		AppmeshActions.CreateVirtualRouter,
		AppmeshActions.CreateVirtualService,
		AppmeshActions.DeleteGatewayRoute,
		AppmeshActions.DeleteMesh,
		AppmeshActions.DeleteMeshPolicy,
		AppmeshActions.DeleteRoute,
		AppmeshActions.DeleteVirtualGateway,
		AppmeshActions.DeleteVirtualNode,
		AppmeshActions.DeleteVirtualRouter,
		AppmeshActions.DeleteVirtualService,
		AppmeshActions.PutMeshPolicy,
		AppmeshActions.UpdateGatewayRoute,
		AppmeshActions.UpdateMesh,
		AppmeshActions.UpdateRoute,
		AppmeshActions.UpdateVirtualGateway,
		AppmeshActions.UpdateVirtualNode,
		AppmeshActions.UpdateVirtualRouter,
		AppmeshActions.UpdateVirtualService,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AppmeshActions.ListGatewayRoutes,
		AppmeshActions.ListMeshes,
		AppmeshActions.ListRoutes,
		AppmeshActions.ListTagsForResource,
		AppmeshActions.ListVirtualGateways,
		AppmeshActions.ListVirtualNodes,
		AppmeshActions.ListVirtualRouters,
		AppmeshActions.ListVirtualServices,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AppmeshActions.TagResource,
		AppmeshActions.UntagResource,
	];
}

/**
 * Properties for building a gatewayRoute ARN.
 */
export interface AppmeshGatewayRouteArnProps {
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
export interface AppmeshGatewayRouteArnComponents {
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
export interface AppmeshMeshArnProps {
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
export interface AppmeshMeshArnComponents {
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
export interface AppmeshRouteArnProps {
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
export interface AppmeshRouteArnComponents {
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
export interface AppmeshVirtualGatewayArnProps {
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
export interface AppmeshVirtualGatewayArnComponents {
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
export interface AppmeshVirtualNodeArnProps {
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
export interface AppmeshVirtualNodeArnComponents {
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
export interface AppmeshVirtualRouterArnProps {
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
export interface AppmeshVirtualRouterArnComponents {
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
export interface AppmeshVirtualServiceArnProps {
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
export interface AppmeshVirtualServiceArnComponents {
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
	/^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)\/virtualGateway\/(?<virtualGatewayName>[^:/?]+)\/gatewayRoute\/(?<gatewayRouteName>[^:/?]+)$/;
const MeshArnRegex =
	/^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)$/;
const RouteArnRegex =
	/^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)\/virtualRouter\/(?<virtualRouterName>[^:/?]+)\/route\/(?<routeName>[^:/?]+)$/;
const VirtualGatewayArnRegex =
	/^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)\/virtualGateway\/(?<virtualGatewayName>[^:/?]+)$/;
const VirtualNodeArnRegex =
	/^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)\/virtualNode\/(?<virtualNodeName>[^:/?]+)$/;
const VirtualRouterArnRegex =
	/^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)\/virtualRouter\/(?<virtualRouterName>[^:/?]+)$/;
const VirtualServiceArnRegex =
	/^arn:(?<partition>[^:]+):appmesh:(?<region>[^:]*):(?<account>[^:]*):mesh\/(?<meshName>[^:/?]+)\/virtualService\/(?<virtualServiceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for appmesh resources.
 */
export class AppmeshResources {
	/**
	 * Builds an ARN for the gatewayRoute resource.
	 */
	static gatewayRoute(props: AppmeshGatewayRouteArnProps): string {
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
	static parseGatewayRouteArn(arn: string): AppmeshGatewayRouteArnComponents {
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
	static mesh(props: AppmeshMeshArnProps): string {
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
	static parseMeshArn(arn: string): AppmeshMeshArnComponents {
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
	static route(props: AppmeshRouteArnProps): string {
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
	static parseRouteArn(arn: string): AppmeshRouteArnComponents {
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
	static virtualGateway(props: AppmeshVirtualGatewayArnProps): string {
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
	static parseVirtualGatewayArn(
		arn: string,
	): AppmeshVirtualGatewayArnComponents {
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
	static virtualNode(props: AppmeshVirtualNodeArnProps): string {
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
	static parseVirtualNodeArn(arn: string): AppmeshVirtualNodeArnComponents {
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
	static virtualRouter(props: AppmeshVirtualRouterArnProps): string {
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
	static parseVirtualRouterArn(arn: string): AppmeshVirtualRouterArnComponents {
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
	static virtualService(props: AppmeshVirtualServiceArnProps): string {
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
	static parseVirtualServiceArn(
		arn: string,
	): AppmeshVirtualServiceArnComponents {
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
	static readonly CreateGatewayRoute: string[] = [
		"appmesh:CreateGatewayRoute",
		"appmesh:TagResource",
	];
	/** IAM actions required for the CreateMesh API call. */
	static readonly CreateMesh: string[] = [
		"appmesh:CreateMesh",
		"appmesh:TagResource",
	];
	/** IAM actions required for the CreateRoute API call. */
	static readonly CreateRoute: string[] = [
		"appmesh:CreateRoute",
		"appmesh:TagResource",
	];
	/** IAM actions required for the CreateVirtualGateway API call. */
	static readonly CreateVirtualGateway: string[] = [
		"appmesh:CreateVirtualGateway",
		"appmesh:TagResource",
	];
	/** IAM actions required for the CreateVirtualNode API call. */
	static readonly CreateVirtualNode: string[] = [
		"appmesh:CreateVirtualNode",
		"iam:PassRole",
		"appmesh:TagResource",
	];
	/** IAM actions required for the CreateVirtualRouter API call. */
	static readonly CreateVirtualRouter: string[] = [
		"appmesh:CreateVirtualRouter",
		"appmesh:TagResource",
	];
	/** IAM actions required for the CreateVirtualService API call. */
	static readonly CreateVirtualService: string[] = [
		"appmesh:CreateVirtualService",
		"appmesh:TagResource",
	];
	/** IAM actions required for the DeleteGatewayRoute API call. */
	static readonly DeleteGatewayRoute: string[] = ["appmesh:DeleteGatewayRoute"];
	/** IAM actions required for the DeleteMesh API call. */
	static readonly DeleteMesh: string[] = ["appmesh:DeleteMesh"];
	/** IAM actions required for the DeleteRoute API call. */
	static readonly DeleteRoute: string[] = ["appmesh:DeleteRoute"];
	/** IAM actions required for the DeleteVirtualGateway API call. */
	static readonly DeleteVirtualGateway: string[] = [
		"appmesh:DeleteVirtualGateway",
	];
	/** IAM actions required for the DeleteVirtualNode API call. */
	static readonly DeleteVirtualNode: string[] = ["appmesh:DeleteVirtualNode"];
	/** IAM actions required for the DeleteVirtualRouter API call. */
	static readonly DeleteVirtualRouter: string[] = [
		"appmesh:DeleteVirtualRouter",
	];
	/** IAM actions required for the DeleteVirtualService API call. */
	static readonly DeleteVirtualService: string[] = [
		"appmesh:DeleteVirtualService",
	];
	/** IAM actions required for the DescribeGatewayRoute API call. */
	static readonly DescribeGatewayRoute: string[] = [
		"appmesh:DescribeGatewayRoute",
	];
	/** IAM actions required for the DescribeMesh API call. */
	static readonly DescribeMesh: string[] = ["appmesh:DescribeMesh"];
	/** IAM actions required for the DescribeRoute API call. */
	static readonly DescribeRoute: string[] = ["appmesh:DescribeRoute"];
	/** IAM actions required for the DescribeVirtualGateway API call. */
	static readonly DescribeVirtualGateway: string[] = [
		"appmesh:DescribeVirtualGateway",
	];
	/** IAM actions required for the DescribeVirtualNode API call. */
	static readonly DescribeVirtualNode: string[] = [
		"appmesh:DescribeVirtualNode",
	];
	/** IAM actions required for the DescribeVirtualRouter API call. */
	static readonly DescribeVirtualRouter: string[] = [
		"appmesh:DescribeVirtualRouter",
	];
	/** IAM actions required for the DescribeVirtualService API call. */
	static readonly DescribeVirtualService: string[] = [
		"appmesh:DescribeVirtualService",
	];
	/** IAM actions required for the ListGatewayRoutes API call. */
	static readonly ListGatewayRoutes: string[] = ["appmesh:ListGatewayRoutes"];
	/** IAM actions required for the ListMeshes API call. */
	static readonly ListMeshes: string[] = ["appmesh:ListMeshes"];
	/** IAM actions required for the ListRoutes API call. */
	static readonly ListRoutes: string[] = ["appmesh:ListRoutes"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"appmesh:ListTagsForResource",
	];
	/** IAM actions required for the ListVirtualGateways API call. */
	static readonly ListVirtualGateways: string[] = [
		"appmesh:ListVirtualGateways",
	];
	/** IAM actions required for the ListVirtualNodes API call. */
	static readonly ListVirtualNodes: string[] = ["appmesh:ListVirtualNodes"];
	/** IAM actions required for the ListVirtualRouters API call. */
	static readonly ListVirtualRouters: string[] = ["appmesh:ListVirtualRouters"];
	/** IAM actions required for the ListVirtualServices API call. */
	static readonly ListVirtualServices: string[] = [
		"appmesh:ListVirtualServices",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["appmesh:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["appmesh:UntagResource"];
	/** IAM actions required for the UpdateGatewayRoute API call. */
	static readonly UpdateGatewayRoute: string[] = ["appmesh:UpdateGatewayRoute"];
	/** IAM actions required for the UpdateMesh API call. */
	static readonly UpdateMesh: string[] = ["appmesh:UpdateMesh"];
	/** IAM actions required for the UpdateRoute API call. */
	static readonly UpdateRoute: string[] = ["appmesh:UpdateRoute"];
	/** IAM actions required for the UpdateVirtualGateway API call. */
	static readonly UpdateVirtualGateway: string[] = [
		"appmesh:UpdateVirtualGateway",
	];
	/** IAM actions required for the UpdateVirtualNode API call. */
	static readonly UpdateVirtualNode: string[] = ["appmesh:UpdateVirtualNode"];
	/** IAM actions required for the UpdateVirtualRouter API call. */
	static readonly UpdateVirtualRouter: string[] = [
		"appmesh:UpdateVirtualRouter",
	];
	/** IAM actions required for the UpdateVirtualService API call. */
	static readonly UpdateVirtualService: string[] = [
		"appmesh:UpdateVirtualService",
	];
}

/**
 * Condition key constants and builders for appmesh.
 */
export class AppmeshConditions {
	/** Condition keys applicable to the CreateMesh action. */
	static readonly CreateMeshConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVirtualGateway action. */
	static readonly CreateVirtualGatewayConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVirtualRouter action. */
	static readonly CreateVirtualRouterConditionKeys: string[] = [
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
