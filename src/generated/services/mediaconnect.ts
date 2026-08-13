// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mediaconnect.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mediaconnect service.
 */
export class MediaConnectActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mediaconnect";

	/** [Write] mediaconnect:AddBridgeOutputs */
	static readonly ADD_BRIDGE_OUTPUTS = "mediaconnect:AddBridgeOutputs";
	/** [Write] mediaconnect:AddBridgeSources */
	static readonly ADD_BRIDGE_SOURCES = "mediaconnect:AddBridgeSources";
	/** [Write] mediaconnect:AddFlowMediaStreams */
	static readonly ADD_FLOW_MEDIA_STREAMS = "mediaconnect:AddFlowMediaStreams";
	/** [Write] mediaconnect:AddFlowOutputs */
	static readonly ADD_FLOW_OUTPUTS = "mediaconnect:AddFlowOutputs";
	/** [Write] mediaconnect:AddFlowSources */
	static readonly ADD_FLOW_SOURCES = "mediaconnect:AddFlowSources";
	/** [Write] mediaconnect:AddFlowVpcInterfaces */
	static readonly ADD_FLOW_VPC_INTERFACES = "mediaconnect:AddFlowVpcInterfaces";
	/** [Write] mediaconnect:AssociateRouterNetworkInterface */
	static readonly ASSOCIATE_ROUTER_NETWORK_INTERFACE =
		"mediaconnect:AssociateRouterNetworkInterface";
	/** [Write] mediaconnect:CreateBridge */
	static readonly CREATE_BRIDGE = "mediaconnect:CreateBridge";
	/** [Write] mediaconnect:CreateFlow */
	static readonly CREATE_FLOW = "mediaconnect:CreateFlow";
	/** [Write] mediaconnect:CreateGateway */
	static readonly CREATE_GATEWAY = "mediaconnect:CreateGateway";
	/** [Write] mediaconnect:CreateRouterInput */
	static readonly CREATE_ROUTER_INPUT = "mediaconnect:CreateRouterInput";
	/** [Write] mediaconnect:CreateRouterNetworkInterface */
	static readonly CREATE_ROUTER_NETWORK_INTERFACE =
		"mediaconnect:CreateRouterNetworkInterface";
	/** [Write] mediaconnect:CreateRouterOutput */
	static readonly CREATE_ROUTER_OUTPUT = "mediaconnect:CreateRouterOutput";
	/** [Write] mediaconnect:DeleteBridge */
	static readonly DELETE_BRIDGE = "mediaconnect:DeleteBridge";
	/** [Write] mediaconnect:DeleteFlow */
	static readonly DELETE_FLOW = "mediaconnect:DeleteFlow";
	/** [Write] mediaconnect:DeleteGateway */
	static readonly DELETE_GATEWAY = "mediaconnect:DeleteGateway";
	/** [Write] mediaconnect:DeleteRouterInput */
	static readonly DELETE_ROUTER_INPUT = "mediaconnect:DeleteRouterInput";
	/** [Write] mediaconnect:DeleteRouterNetworkInterface */
	static readonly DELETE_ROUTER_NETWORK_INTERFACE =
		"mediaconnect:DeleteRouterNetworkInterface";
	/** [Write] mediaconnect:DeleteRouterOutput */
	static readonly DELETE_ROUTER_OUTPUT = "mediaconnect:DeleteRouterOutput";
	/** [Write] mediaconnect:DeregisterGatewayInstance */
	static readonly DEREGISTER_GATEWAY_INSTANCE =
		"mediaconnect:DeregisterGatewayInstance";
	/** [Read] mediaconnect:DescribeBridge */
	static readonly DESCRIBE_BRIDGE = "mediaconnect:DescribeBridge";
	/** [Read] mediaconnect:DescribeFlow */
	static readonly DESCRIBE_FLOW = "mediaconnect:DescribeFlow";
	/** [Read] mediaconnect:DescribeFlowSourceMetadata */
	static readonly DESCRIBE_FLOW_SOURCE_METADATA =
		"mediaconnect:DescribeFlowSourceMetadata";
	/** [Read] mediaconnect:DescribeFlowSourceThumbnail */
	static readonly DESCRIBE_FLOW_SOURCE_THUMBNAIL =
		"mediaconnect:DescribeFlowSourceThumbnail";
	/** [Read] mediaconnect:DescribeGateway */
	static readonly DESCRIBE_GATEWAY = "mediaconnect:DescribeGateway";
	/** [Read] mediaconnect:DescribeGatewayInstance */
	static readonly DESCRIBE_GATEWAY_INSTANCE =
		"mediaconnect:DescribeGatewayInstance";
	/** [Read] mediaconnect:DescribeOffering */
	static readonly DESCRIBE_OFFERING = "mediaconnect:DescribeOffering";
	/** [Read] mediaconnect:DescribeReservation */
	static readonly DESCRIBE_RESERVATION = "mediaconnect:DescribeReservation";
	/** [Read] mediaconnect:DiscoverGatewayPollEndpoint */
	static readonly DISCOVER_GATEWAY_POLL_ENDPOINT =
		"mediaconnect:DiscoverGatewayPollEndpoint";
	/** [Read] mediaconnect:GetRouterInput */
	static readonly GET_ROUTER_INPUT = "mediaconnect:GetRouterInput";
	/** [Read] mediaconnect:GetRouterInputSourceMetadata */
	static readonly GET_ROUTER_INPUT_SOURCE_METADATA =
		"mediaconnect:GetRouterInputSourceMetadata";
	/** [Read] mediaconnect:GetRouterInputThumbnail */
	static readonly GET_ROUTER_INPUT_THUMBNAIL =
		"mediaconnect:GetRouterInputThumbnail";
	/** [Read] mediaconnect:GetRouterNetworkInterface */
	static readonly GET_ROUTER_NETWORK_INTERFACE =
		"mediaconnect:GetRouterNetworkInterface";
	/** [Read] mediaconnect:GetRouterOutput */
	static readonly GET_ROUTER_OUTPUT = "mediaconnect:GetRouterOutput";
	/** [Write] mediaconnect:GrantFlowEntitlements */
	static readonly GRANT_FLOW_ENTITLEMENTS =
		"mediaconnect:GrantFlowEntitlements";
	/** [List] mediaconnect:ListBridges */
	static readonly LIST_BRIDGES = "mediaconnect:ListBridges";
	/** [List] mediaconnect:ListEntitlements */
	static readonly LIST_ENTITLEMENTS = "mediaconnect:ListEntitlements";
	/** [List] mediaconnect:ListFlows */
	static readonly LIST_FLOWS = "mediaconnect:ListFlows";
	/** [List] mediaconnect:ListGatewayInstances */
	static readonly LIST_GATEWAY_INSTANCES = "mediaconnect:ListGatewayInstances";
	/** [List] mediaconnect:ListGateways */
	static readonly LIST_GATEWAYS = "mediaconnect:ListGateways";
	/** [List] mediaconnect:ListOfferings */
	static readonly LIST_OFFERINGS = "mediaconnect:ListOfferings";
	/** [List] mediaconnect:ListReservations */
	static readonly LIST_RESERVATIONS = "mediaconnect:ListReservations";
	/** [List] mediaconnect:ListRouterInputs */
	static readonly LIST_ROUTER_INPUTS = "mediaconnect:ListRouterInputs";
	/** [List] mediaconnect:ListRouterNetworkInterfaces */
	static readonly LIST_ROUTER_NETWORK_INTERFACES =
		"mediaconnect:ListRouterNetworkInterfaces";
	/** [List] mediaconnect:ListRouterOutputs */
	static readonly LIST_ROUTER_OUTPUTS = "mediaconnect:ListRouterOutputs";
	/** [Read] mediaconnect:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "mediaconnect:ListTagsForResource";
	/** [Write] mediaconnect:PollGateway */
	static readonly POLL_GATEWAY = "mediaconnect:PollGateway";
	/** [Write] mediaconnect:PurchaseOffering */
	static readonly PURCHASE_OFFERING = "mediaconnect:PurchaseOffering";
	/** [Write] mediaconnect:RemoveBridgeOutput */
	static readonly REMOVE_BRIDGE_OUTPUT = "mediaconnect:RemoveBridgeOutput";
	/** [Write] mediaconnect:RemoveBridgeSource */
	static readonly REMOVE_BRIDGE_SOURCE = "mediaconnect:RemoveBridgeSource";
	/** [Write] mediaconnect:RemoveFlowMediaStream */
	static readonly REMOVE_FLOW_MEDIA_STREAM =
		"mediaconnect:RemoveFlowMediaStream";
	/** [Write] mediaconnect:RemoveFlowOutput */
	static readonly REMOVE_FLOW_OUTPUT = "mediaconnect:RemoveFlowOutput";
	/** [Write] mediaconnect:RemoveFlowSource */
	static readonly REMOVE_FLOW_SOURCE = "mediaconnect:RemoveFlowSource";
	/** [Write] mediaconnect:RemoveFlowVpcInterface */
	static readonly REMOVE_FLOW_VPC_INTERFACE =
		"mediaconnect:RemoveFlowVpcInterface";
	/** [Write] mediaconnect:RestartRouterInput */
	static readonly RESTART_ROUTER_INPUT = "mediaconnect:RestartRouterInput";
	/** [Write] mediaconnect:RestartRouterOutput */
	static readonly RESTART_ROUTER_OUTPUT = "mediaconnect:RestartRouterOutput";
	/** [Write] mediaconnect:RevokeFlowEntitlement */
	static readonly REVOKE_FLOW_ENTITLEMENT =
		"mediaconnect:RevokeFlowEntitlement";
	/** [Write] mediaconnect:StartFlow */
	static readonly START_FLOW = "mediaconnect:StartFlow";
	/** [Write] mediaconnect:StartRouterInput */
	static readonly START_ROUTER_INPUT = "mediaconnect:StartRouterInput";
	/** [Write] mediaconnect:StartRouterOutput */
	static readonly START_ROUTER_OUTPUT = "mediaconnect:StartRouterOutput";
	/** [Write] mediaconnect:StopFlow */
	static readonly STOP_FLOW = "mediaconnect:StopFlow";
	/** [Write] mediaconnect:StopRouterInput */
	static readonly STOP_ROUTER_INPUT = "mediaconnect:StopRouterInput";
	/** [Write] mediaconnect:StopRouterOutput */
	static readonly STOP_ROUTER_OUTPUT = "mediaconnect:StopRouterOutput";
	/** [Write] mediaconnect:SubmitGatewayStateChange */
	static readonly SUBMIT_GATEWAY_STATE_CHANGE =
		"mediaconnect:SubmitGatewayStateChange";
	/** [Tagging] mediaconnect:TagResource */
	static readonly TAG_RESOURCE = "mediaconnect:TagResource";
	/** [Write] mediaconnect:TakeRouterInput */
	static readonly TAKE_ROUTER_INPUT = "mediaconnect:TakeRouterInput";
	/** [Tagging] mediaconnect:UntagResource */
	static readonly UNTAG_RESOURCE = "mediaconnect:UntagResource";
	/** [Write] mediaconnect:UpdateBridge */
	static readonly UPDATE_BRIDGE = "mediaconnect:UpdateBridge";
	/** [Write] mediaconnect:UpdateBridgeOutput */
	static readonly UPDATE_BRIDGE_OUTPUT = "mediaconnect:UpdateBridgeOutput";
	/** [Write] mediaconnect:UpdateBridgeSource */
	static readonly UPDATE_BRIDGE_SOURCE = "mediaconnect:UpdateBridgeSource";
	/** [Write] mediaconnect:UpdateBridgeState */
	static readonly UPDATE_BRIDGE_STATE = "mediaconnect:UpdateBridgeState";
	/** [Write] mediaconnect:UpdateFlow */
	static readonly UPDATE_FLOW = "mediaconnect:UpdateFlow";
	/** [Write] mediaconnect:UpdateFlowEntitlement */
	static readonly UPDATE_FLOW_ENTITLEMENT =
		"mediaconnect:UpdateFlowEntitlement";
	/** [Write] mediaconnect:UpdateFlowMediaStream */
	static readonly UPDATE_FLOW_MEDIA_STREAM =
		"mediaconnect:UpdateFlowMediaStream";
	/** [Write] mediaconnect:UpdateFlowOutput */
	static readonly UPDATE_FLOW_OUTPUT = "mediaconnect:UpdateFlowOutput";
	/** [Write] mediaconnect:UpdateFlowSource */
	static readonly UPDATE_FLOW_SOURCE = "mediaconnect:UpdateFlowSource";
	/** [Write] mediaconnect:UpdateGatewayInstance */
	static readonly UPDATE_GATEWAY_INSTANCE =
		"mediaconnect:UpdateGatewayInstance";
	/** [Write] mediaconnect:UpdateRouterInput */
	static readonly UPDATE_ROUTER_INPUT = "mediaconnect:UpdateRouterInput";
	/** [Write] mediaconnect:UpdateRouterNetworkInterface */
	static readonly UPDATE_ROUTER_NETWORK_INTERFACE =
		"mediaconnect:UpdateRouterNetworkInterface";
	/** [Write] mediaconnect:UpdateRouterOutput */
	static readonly UPDATE_ROUTER_OUTPUT = "mediaconnect:UpdateRouterOutput";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MediaConnectActions.DESCRIBE_BRIDGE,
		MediaConnectActions.DESCRIBE_FLOW,
		MediaConnectActions.DESCRIBE_FLOW_SOURCE_METADATA,
		MediaConnectActions.DESCRIBE_FLOW_SOURCE_THUMBNAIL,
		MediaConnectActions.DESCRIBE_GATEWAY,
		MediaConnectActions.DESCRIBE_GATEWAY_INSTANCE,
		MediaConnectActions.DESCRIBE_OFFERING,
		MediaConnectActions.DESCRIBE_RESERVATION,
		MediaConnectActions.DISCOVER_GATEWAY_POLL_ENDPOINT,
		MediaConnectActions.GET_ROUTER_INPUT,
		MediaConnectActions.GET_ROUTER_INPUT_SOURCE_METADATA,
		MediaConnectActions.GET_ROUTER_INPUT_THUMBNAIL,
		MediaConnectActions.GET_ROUTER_NETWORK_INTERFACE,
		MediaConnectActions.GET_ROUTER_OUTPUT,
		MediaConnectActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MediaConnectActions.ADD_BRIDGE_OUTPUTS,
		MediaConnectActions.ADD_BRIDGE_SOURCES,
		MediaConnectActions.ADD_FLOW_MEDIA_STREAMS,
		MediaConnectActions.ADD_FLOW_OUTPUTS,
		MediaConnectActions.ADD_FLOW_SOURCES,
		MediaConnectActions.ADD_FLOW_VPC_INTERFACES,
		MediaConnectActions.ASSOCIATE_ROUTER_NETWORK_INTERFACE,
		MediaConnectActions.CREATE_BRIDGE,
		MediaConnectActions.CREATE_FLOW,
		MediaConnectActions.CREATE_GATEWAY,
		MediaConnectActions.CREATE_ROUTER_INPUT,
		MediaConnectActions.CREATE_ROUTER_NETWORK_INTERFACE,
		MediaConnectActions.CREATE_ROUTER_OUTPUT,
		MediaConnectActions.DELETE_BRIDGE,
		MediaConnectActions.DELETE_FLOW,
		MediaConnectActions.DELETE_GATEWAY,
		MediaConnectActions.DELETE_ROUTER_INPUT,
		MediaConnectActions.DELETE_ROUTER_NETWORK_INTERFACE,
		MediaConnectActions.DELETE_ROUTER_OUTPUT,
		MediaConnectActions.DEREGISTER_GATEWAY_INSTANCE,
		MediaConnectActions.GRANT_FLOW_ENTITLEMENTS,
		MediaConnectActions.POLL_GATEWAY,
		MediaConnectActions.PURCHASE_OFFERING,
		MediaConnectActions.REMOVE_BRIDGE_OUTPUT,
		MediaConnectActions.REMOVE_BRIDGE_SOURCE,
		MediaConnectActions.REMOVE_FLOW_MEDIA_STREAM,
		MediaConnectActions.REMOVE_FLOW_OUTPUT,
		MediaConnectActions.REMOVE_FLOW_SOURCE,
		MediaConnectActions.REMOVE_FLOW_VPC_INTERFACE,
		MediaConnectActions.RESTART_ROUTER_INPUT,
		MediaConnectActions.RESTART_ROUTER_OUTPUT,
		MediaConnectActions.REVOKE_FLOW_ENTITLEMENT,
		MediaConnectActions.START_FLOW,
		MediaConnectActions.START_ROUTER_INPUT,
		MediaConnectActions.START_ROUTER_OUTPUT,
		MediaConnectActions.STOP_FLOW,
		MediaConnectActions.STOP_ROUTER_INPUT,
		MediaConnectActions.STOP_ROUTER_OUTPUT,
		MediaConnectActions.SUBMIT_GATEWAY_STATE_CHANGE,
		MediaConnectActions.TAKE_ROUTER_INPUT,
		MediaConnectActions.UPDATE_BRIDGE,
		MediaConnectActions.UPDATE_BRIDGE_OUTPUT,
		MediaConnectActions.UPDATE_BRIDGE_SOURCE,
		MediaConnectActions.UPDATE_BRIDGE_STATE,
		MediaConnectActions.UPDATE_FLOW,
		MediaConnectActions.UPDATE_FLOW_ENTITLEMENT,
		MediaConnectActions.UPDATE_FLOW_MEDIA_STREAM,
		MediaConnectActions.UPDATE_FLOW_OUTPUT,
		MediaConnectActions.UPDATE_FLOW_SOURCE,
		MediaConnectActions.UPDATE_GATEWAY_INSTANCE,
		MediaConnectActions.UPDATE_ROUTER_INPUT,
		MediaConnectActions.UPDATE_ROUTER_NETWORK_INTERFACE,
		MediaConnectActions.UPDATE_ROUTER_OUTPUT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MediaConnectActions.LIST_BRIDGES,
		MediaConnectActions.LIST_ENTITLEMENTS,
		MediaConnectActions.LIST_FLOWS,
		MediaConnectActions.LIST_GATEWAY_INSTANCES,
		MediaConnectActions.LIST_GATEWAYS,
		MediaConnectActions.LIST_OFFERINGS,
		MediaConnectActions.LIST_RESERVATIONS,
		MediaConnectActions.LIST_ROUTER_INPUTS,
		MediaConnectActions.LIST_ROUTER_NETWORK_INTERFACES,
		MediaConnectActions.LIST_ROUTER_OUTPUTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MediaConnectActions.TAG_RESOURCE,
		MediaConnectActions.UNTAG_RESOURCE,
	];
}

const BridgeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):bridge:(?<bridgeId>[^:/?]+):(?<bridgeName>[^:/?]+)$",
);
const EntitlementArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):entitlement:(?<flowId>[^:/?]+):(?<entitlementName>[^:/?]+)$",
);
const FlowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):flow:(?<flowId>[^:/?]+):(?<flowName>[^:/?]+)$",
);
const GatewayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):gateway:(?<gatewayId>[^:/?]+):(?<gatewayName>[^:/?]+)$",
);
const GatewayInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):gateway:(?<gatewayId>[^:/?]+):(?<gatewayName>[^:/?]+):instance:(?<instanceId>[^:/?]+)$",
);
const MediaStreamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):flow:(?<flowId>[^:/?]+):(?<flowName>[^:/?]+)/mediaStream/(?<mediaStreamName>[^:/?]+)$",
);
const OfferingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):offering:(?<offeringId>[^:/?]+)$",
);
const OutputArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):output:(?<outputId>[^:/?]+):(?<outputName>[^:/?]+)$",
);
const ReservationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):reservation:(?<reservationId>[^:/?]+):(?<reservationName>[^:/?]+)$",
);
const RouterInputArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):routerInput:(?<routerInputId>[^:/?]+)$",
);
const RouterNetworkInterfaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):routerNetworkInterface:(?<routerNetworkInterfaceId>[^:/?]+)$",
);
const RouterOutputArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):routerOutput:(?<routerOutputId>[^:/?]+)$",
);
const SourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):source:(?<sourceId>[^:/?]+):(?<sourceName>[^:/?]+)$",
);
const VPCInterfaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):flow:(?<flowId>[^:/?]+):(?<flowName>[^:/?]+)/vpcInterface/(?<vpcInterfaceName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for mediaconnect resources.
 */
export class MediaConnectResources {
	/**
	 * Builds an ARN for the Bridge resource.
	 */
	static bridge(props: {
		/** The BridgeId component of the ARN. */
		readonly bridgeId: string;
		/** The BridgeName component of the ARN. */
		readonly bridgeName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:bridge:${props.bridgeId}:${props.bridgeName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Bridge resource.
	 */
	static isValidBridgeArn(arn: string): boolean {
		return BridgeArnRegex.test(arn);
	}

	/**
	 * Parses a Bridge ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBridgeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		bridgeId: string;
		bridgeName: string;
	} {
		const match = BridgeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Bridge ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			bridgeId: match.groups!.bridgeId,
			bridgeName: match.groups!.bridgeName,
		};
	}

	/**
	 * Builds an ARN for the Entitlement resource.
	 */
	static entitlement(props: {
		/** The FlowId component of the ARN. */
		readonly flowId: string;
		/** The EntitlementName component of the ARN. */
		readonly entitlementName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:entitlement:${props.flowId}:${props.entitlementName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Entitlement resource.
	 */
	static isValidEntitlementArn(arn: string): boolean {
		return EntitlementArnRegex.test(arn);
	}

	/**
	 * Parses a Entitlement ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEntitlementArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		flowId: string;
		entitlementName: string;
	} {
		const match = EntitlementArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Entitlement ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			flowId: match.groups!.flowId,
			entitlementName: match.groups!.entitlementName,
		};
	}

	/**
	 * Builds an ARN for the Flow resource.
	 */
	static flow(props: {
		/** The FlowId component of the ARN. */
		readonly flowId: string;
		/** The FlowName component of the ARN. */
		readonly flowName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:flow:${props.flowId}:${props.flowName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Flow resource.
	 */
	static isValidFlowArn(arn: string): boolean {
		return FlowArnRegex.test(arn);
	}

	/**
	 * Parses a Flow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFlowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		flowId: string;
		flowName: string;
	} {
		const match = FlowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Flow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			flowId: match.groups!.flowId,
			flowName: match.groups!.flowName,
		};
	}

	/**
	 * Builds an ARN for the Gateway resource.
	 */
	static gateway(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** The GatewayName component of the ARN. */
		readonly gatewayName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:gateway:${props.gatewayId}:${props.gatewayName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Gateway resource.
	 */
	static isValidGatewayArn(arn: string): boolean {
		return GatewayArnRegex.test(arn);
	}

	/**
	 * Parses a Gateway ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGatewayArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
		gatewayName: string;
	} {
		const match = GatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Gateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
			gatewayName: match.groups!.gatewayName,
		};
	}

	/**
	 * Builds an ARN for the GatewayInstance resource.
	 */
	static gatewayInstance(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** The GatewayName component of the ARN. */
		readonly gatewayName: string;
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:gateway:${props.gatewayId}:${props.gatewayName}:instance:${props.instanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the GatewayInstance resource.
	 */
	static isValidGatewayInstanceArn(arn: string): boolean {
		return GatewayInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a GatewayInstance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGatewayInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
		gatewayName: string;
		instanceId: string;
	} {
		const match = GatewayInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid GatewayInstance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
			gatewayName: match.groups!.gatewayName,
			instanceId: match.groups!.instanceId,
		};
	}

	/**
	 * Builds an ARN for the MediaStream resource.
	 */
	static mediaStream(props: {
		/** The FlowId component of the ARN. */
		readonly flowId: string;
		/** The FlowName component of the ARN. */
		readonly flowName: string;
		/** The MediaStreamName component of the ARN. */
		readonly mediaStreamName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:flow:${props.flowId}:${props.flowName}/mediaStream/${props.mediaStreamName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the MediaStream resource.
	 */
	static isValidMediaStreamArn(arn: string): boolean {
		return MediaStreamArnRegex.test(arn);
	}

	/**
	 * Parses a MediaStream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMediaStreamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		flowId: string;
		flowName: string;
		mediaStreamName: string;
	} {
		const match = MediaStreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid MediaStream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			flowId: match.groups!.flowId,
			flowName: match.groups!.flowName,
			mediaStreamName: match.groups!.mediaStreamName,
		};
	}

	/**
	 * Builds an ARN for the Offering resource.
	 */
	static offering(props: {
		/** The OfferingId component of the ARN. */
		readonly offeringId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:offering:${props.offeringId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Offering resource.
	 */
	static isValidOfferingArn(arn: string): boolean {
		return OfferingArnRegex.test(arn);
	}

	/**
	 * Parses a Offering ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOfferingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		offeringId: string;
	} {
		const match = OfferingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Offering ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			offeringId: match.groups!.offeringId,
		};
	}

	/**
	 * Builds an ARN for the Output resource.
	 */
	static output(props: {
		/** The OutputId component of the ARN. */
		readonly outputId: string;
		/** The OutputName component of the ARN. */
		readonly outputName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:output:${props.outputId}:${props.outputName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Output resource.
	 */
	static isValidOutputArn(arn: string): boolean {
		return OutputArnRegex.test(arn);
	}

	/**
	 * Parses a Output ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOutputArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		outputId: string;
		outputName: string;
	} {
		const match = OutputArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Output ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			outputId: match.groups!.outputId,
			outputName: match.groups!.outputName,
		};
	}

	/**
	 * Builds an ARN for the Reservation resource.
	 */
	static reservation(props: {
		/** The ReservationId component of the ARN. */
		readonly reservationId: string;
		/** The ReservationName component of the ARN. */
		readonly reservationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:reservation:${props.reservationId}:${props.reservationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Reservation resource.
	 */
	static isValidReservationArn(arn: string): boolean {
		return ReservationArnRegex.test(arn);
	}

	/**
	 * Parses a Reservation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReservationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		reservationId: string;
		reservationName: string;
	} {
		const match = ReservationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Reservation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reservationId: match.groups!.reservationId,
			reservationName: match.groups!.reservationName,
		};
	}

	/**
	 * Builds an ARN for the RouterInput resource.
	 */
	static routerInput(props: {
		/** The RouterInputId component of the ARN. */
		readonly routerInputId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:routerInput:${props.routerInputId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RouterInput resource.
	 */
	static isValidRouterInputArn(arn: string): boolean {
		return RouterInputArnRegex.test(arn);
	}

	/**
	 * Parses a RouterInput ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRouterInputArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		routerInputId: string;
	} {
		const match = RouterInputArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RouterInput ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			routerInputId: match.groups!.routerInputId,
		};
	}

	/**
	 * Builds an ARN for the RouterNetworkInterface resource.
	 */
	static routerNetworkInterface(props: {
		/** The RouterNetworkInterfaceId component of the ARN. */
		readonly routerNetworkInterfaceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:routerNetworkInterface:${props.routerNetworkInterfaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RouterNetworkInterface resource.
	 */
	static isValidRouterNetworkInterfaceArn(arn: string): boolean {
		return RouterNetworkInterfaceArnRegex.test(arn);
	}

	/**
	 * Parses a RouterNetworkInterface ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRouterNetworkInterfaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		routerNetworkInterfaceId: string;
	} {
		const match = RouterNetworkInterfaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RouterNetworkInterface ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			routerNetworkInterfaceId: match.groups!.routerNetworkInterfaceId,
		};
	}

	/**
	 * Builds an ARN for the RouterOutput resource.
	 */
	static routerOutput(props: {
		/** The RouterOutputId component of the ARN. */
		readonly routerOutputId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:routerOutput:${props.routerOutputId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RouterOutput resource.
	 */
	static isValidRouterOutputArn(arn: string): boolean {
		return RouterOutputArnRegex.test(arn);
	}

	/**
	 * Parses a RouterOutput ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRouterOutputArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		routerOutputId: string;
	} {
		const match = RouterOutputArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RouterOutput ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			routerOutputId: match.groups!.routerOutputId,
		};
	}

	/**
	 * Builds an ARN for the Source resource.
	 */
	static source(props: {
		/** The SourceId component of the ARN. */
		readonly sourceId: string;
		/** The SourceName component of the ARN. */
		readonly sourceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:source:${props.sourceId}:${props.sourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Source resource.
	 */
	static isValidSourceArn(arn: string): boolean {
		return SourceArnRegex.test(arn);
	}

	/**
	 * Parses a Source ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sourceId: string;
		sourceName: string;
	} {
		const match = SourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Source ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sourceId: match.groups!.sourceId,
			sourceName: match.groups!.sourceName,
		};
	}

	/**
	 * Builds an ARN for the VpcInterface resource.
	 */
	static vpcInterface(props: {
		/** The FlowId component of the ARN. */
		readonly flowId: string;
		/** The FlowName component of the ARN. */
		readonly flowName: string;
		/** The VpcInterfaceName component of the ARN. */
		readonly vpcInterfaceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediaconnect:${props.region ?? "*"}:${props.account ?? "*"}:flow:${props.flowId}:${props.flowName}/vpcInterface/${props.vpcInterfaceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the VpcInterface resource.
	 */
	static isValidVPCInterfaceArn(arn: string): boolean {
		return VPCInterfaceArnRegex.test(arn);
	}

	/**
	 * Parses a VpcInterface ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVPCInterfaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		flowId: string;
		flowName: string;
		vpcInterfaceName: string;
	} {
		const match = VPCInterfaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid VpcInterface ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			flowId: match.groups!.flowId,
			flowName: match.groups!.flowName,
			vpcInterfaceName: match.groups!.vpcInterfaceName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for mediaconnect.
 */
export class MediaConnectOperations {
	/** IAM actions required for the AddBridgeOutputs API call. */
	static readonly ADD_BRIDGE_OUTPUTS: string[] = [
		"mediaconnect:AddBridgeOutputs",
	];
	/** IAM actions required for the AddBridgeSources API call. */
	static readonly ADD_BRIDGE_SOURCES: string[] = [
		"mediaconnect:AddBridgeSources",
	];
	/** IAM actions required for the AddFlowMediaStreams API call. */
	static readonly ADD_FLOW_MEDIA_STREAMS: string[] = [
		"mediaconnect:AddFlowMediaStreams",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the AddFlowOutputs API call. */
	static readonly ADD_FLOW_OUTPUTS: string[] = [
		"mediaconnect:AddFlowOutputs",
		"iam:PassRole",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the AddFlowSources API call. */
	static readonly ADD_FLOW_SOURCES: string[] = [
		"mediaconnect:AddFlowSources",
		"iam:PassRole",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the AddFlowVpcInterfaces API call. */
	static readonly ADD_FLOW_VPC_INTERFACES: string[] = [
		"mediaconnect:AddFlowVpcInterfaces",
		"iam:PassRole",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the BatchGetRouterInput API call. */
	static readonly BATCH_GET_ROUTER_INPUT: string[] = [
		"mediaconnect:GetRouterInput",
	];
	/** IAM actions required for the BatchGetRouterNetworkInterface API call. */
	static readonly BATCH_GET_ROUTER_NETWORK_INTERFACE: string[] = [
		"mediaconnect:GetRouterNetworkInterface",
	];
	/** IAM actions required for the BatchGetRouterOutput API call. */
	static readonly BATCH_GET_ROUTER_OUTPUT: string[] = [
		"mediaconnect:GetRouterOutput",
	];
	/** IAM actions required for the CreateBridge API call. */
	static readonly CREATE_BRIDGE: string[] = [
		"mediaconnect:AddBridgeOutputs",
		"mediaconnect:AddBridgeSources",
		"mediaconnect:CreateBridge",
	];
	/** IAM actions required for the CreateFlow API call. */
	static readonly CREATE_FLOW: string[] = [
		"mediaconnect:AddFlowMediaStreams",
		"mediaconnect:AddFlowOutputs",
		"mediaconnect:AddFlowSources",
		"mediaconnect:AddFlowVpcInterfaces",
		"mediaconnect:CreateFlow",
		"mediaconnect:GrantFlowEntitlements",
		"iam:PassRole",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the CreateGateway API call. */
	static readonly CREATE_GATEWAY: string[] = ["mediaconnect:CreateGateway"];
	/** IAM actions required for the CreateRouterInput API call. */
	static readonly CREATE_ROUTER_INPUT: string[] = [
		"mediaconnect:AssociateRouterNetworkInterface",
		"mediaconnect:CreateRouterInput",
		"iam:PassRole",
		"mediaconnect:TagResource",
		"mediaconnect:UpdateFlowOutput",
	];
	/** IAM actions required for the CreateRouterNetworkInterface API call. */
	static readonly CREATE_ROUTER_NETWORK_INTERFACE: string[] = [
		"mediaconnect:CreateRouterNetworkInterface",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the CreateRouterOutput API call. */
	static readonly CREATE_ROUTER_OUTPUT: string[] = [
		"mediaconnect:AssociateRouterNetworkInterface",
		"mediaconnect:CreateRouterOutput",
		"iam:PassRole",
		"mediaconnect:TagResource",
		"mediaconnect:UpdateFlowSource",
	];
	/** IAM actions required for the DeleteBridge API call. */
	static readonly DELETE_BRIDGE: string[] = [
		"mediaconnect:DeleteBridge",
		"mediaconnect:RemoveBridgeOutput",
		"mediaconnect:RemoveBridgeSource",
	];
	/** IAM actions required for the DeleteFlow API call. */
	static readonly DELETE_FLOW: string[] = [
		"mediaconnect:DeleteFlow",
		"mediaconnect:RemoveFlowMediaStream",
		"mediaconnect:RemoveFlowOutput",
		"mediaconnect:RemoveFlowSource",
		"mediaconnect:RemoveFlowVpcInterface",
		"mediaconnect:RevokeFlowEntitlement",
	];
	/** IAM actions required for the DeleteGateway API call. */
	static readonly DELETE_GATEWAY: string[] = ["mediaconnect:DeleteGateway"];
	/** IAM actions required for the DeleteRouterInput API call. */
	static readonly DELETE_ROUTER_INPUT: string[] = [
		"mediaconnect:DeleteRouterInput",
		"mediaconnect:UpdateFlowOutput",
	];
	/** IAM actions required for the DeleteRouterNetworkInterface API call. */
	static readonly DELETE_ROUTER_NETWORK_INTERFACE: string[] = [
		"mediaconnect:DeleteRouterNetworkInterface",
	];
	/** IAM actions required for the DeleteRouterOutput API call. */
	static readonly DELETE_ROUTER_OUTPUT: string[] = [
		"mediaconnect:DeleteRouterOutput",
		"mediaconnect:UpdateFlowSource",
	];
	/** IAM actions required for the DeregisterGatewayInstance API call. */
	static readonly DEREGISTER_GATEWAY_INSTANCE: string[] = [
		"mediaconnect:DeregisterGatewayInstance",
	];
	/** IAM actions required for the DescribeBridge API call. */
	static readonly DESCRIBE_BRIDGE: string[] = ["mediaconnect:DescribeBridge"];
	/** IAM actions required for the DescribeFlow API call. */
	static readonly DESCRIBE_FLOW: string[] = ["mediaconnect:DescribeFlow"];
	/** IAM actions required for the DescribeFlowSourceMetadata API call. */
	static readonly DESCRIBE_FLOW_SOURCE_METADATA: string[] = [
		"mediaconnect:DescribeFlowSourceMetadata",
	];
	/** IAM actions required for the DescribeFlowSourceThumbnail API call. */
	static readonly DESCRIBE_FLOW_SOURCE_THUMBNAIL: string[] = [
		"mediaconnect:DescribeFlowSourceThumbnail",
	];
	/** IAM actions required for the DescribeGateway API call. */
	static readonly DESCRIBE_GATEWAY: string[] = ["mediaconnect:DescribeGateway"];
	/** IAM actions required for the DescribeGatewayInstance API call. */
	static readonly DESCRIBE_GATEWAY_INSTANCE: string[] = [
		"mediaconnect:DescribeGatewayInstance",
	];
	/** IAM actions required for the DescribeOffering API call. */
	static readonly DESCRIBE_OFFERING: string[] = [
		"mediaconnect:DescribeOffering",
	];
	/** IAM actions required for the DescribeReservation API call. */
	static readonly DESCRIBE_RESERVATION: string[] = [
		"mediaconnect:DescribeReservation",
	];
	/** IAM actions required for the GetRouterInput API call. */
	static readonly GET_ROUTER_INPUT: string[] = ["mediaconnect:GetRouterInput"];
	/** IAM actions required for the GetRouterInputSourceMetadata API call. */
	static readonly GET_ROUTER_INPUT_SOURCE_METADATA: string[] = [
		"mediaconnect:GetRouterInputSourceMetadata",
	];
	/** IAM actions required for the GetRouterInputThumbnail API call. */
	static readonly GET_ROUTER_INPUT_THUMBNAIL: string[] = [
		"mediaconnect:GetRouterInputThumbnail",
	];
	/** IAM actions required for the GetRouterNetworkInterface API call. */
	static readonly GET_ROUTER_NETWORK_INTERFACE: string[] = [
		"mediaconnect:GetRouterNetworkInterface",
	];
	/** IAM actions required for the GetRouterOutput API call. */
	static readonly GET_ROUTER_OUTPUT: string[] = [
		"mediaconnect:GetRouterOutput",
	];
	/** IAM actions required for the GrantFlowEntitlements API call. */
	static readonly GRANT_FLOW_ENTITLEMENTS: string[] = [
		"mediaconnect:GrantFlowEntitlements",
		"iam:PassRole",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the ListBridges API call. */
	static readonly LIST_BRIDGES: string[] = ["mediaconnect:ListBridges"];
	/** IAM actions required for the ListEntitlements API call. */
	static readonly LIST_ENTITLEMENTS: string[] = [
		"mediaconnect:ListEntitlements",
	];
	/** IAM actions required for the ListFlows API call. */
	static readonly LIST_FLOWS: string[] = ["mediaconnect:ListFlows"];
	/** IAM actions required for the ListGatewayInstances API call. */
	static readonly LIST_GATEWAY_INSTANCES: string[] = [
		"mediaconnect:ListGatewayInstances",
	];
	/** IAM actions required for the ListGateways API call. */
	static readonly LIST_GATEWAYS: string[] = ["mediaconnect:ListGateways"];
	/** IAM actions required for the ListOfferings API call. */
	static readonly LIST_OFFERINGS: string[] = ["mediaconnect:ListOfferings"];
	/** IAM actions required for the ListReservations API call. */
	static readonly LIST_RESERVATIONS: string[] = [
		"mediaconnect:ListReservations",
	];
	/** IAM actions required for the ListRouterInputs API call. */
	static readonly LIST_ROUTER_INPUTS: string[] = [
		"mediaconnect:ListRouterInputs",
	];
	/** IAM actions required for the ListRouterNetworkInterfaces API call. */
	static readonly LIST_ROUTER_NETWORK_INTERFACES: string[] = [
		"mediaconnect:ListRouterNetworkInterfaces",
	];
	/** IAM actions required for the ListRouterOutputs API call. */
	static readonly LIST_ROUTER_OUTPUTS: string[] = [
		"mediaconnect:ListRouterOutputs",
	];
	/** IAM actions required for the ListTagsForGlobalResource API call. */
	static readonly LIST_TAGS_FOR_GLOBAL_RESOURCE: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"mediaconnect:ListTagsForResource",
	];
	/** IAM actions required for the PurchaseOffering API call. */
	static readonly PURCHASE_OFFERING: string[] = [
		"mediaconnect:PurchaseOffering",
	];
	/** IAM actions required for the RemoveBridgeOutput API call. */
	static readonly REMOVE_BRIDGE_OUTPUT: string[] = [
		"mediaconnect:RemoveBridgeOutput",
	];
	/** IAM actions required for the RemoveBridgeSource API call. */
	static readonly REMOVE_BRIDGE_SOURCE: string[] = [
		"mediaconnect:RemoveBridgeSource",
	];
	/** IAM actions required for the RemoveFlowMediaStream API call. */
	static readonly REMOVE_FLOW_MEDIA_STREAM: string[] = [
		"mediaconnect:RemoveFlowMediaStream",
	];
	/** IAM actions required for the RemoveFlowOutput API call. */
	static readonly REMOVE_FLOW_OUTPUT: string[] = [
		"mediaconnect:RemoveFlowOutput",
	];
	/** IAM actions required for the RemoveFlowSource API call. */
	static readonly REMOVE_FLOW_SOURCE: string[] = [
		"mediaconnect:RemoveFlowSource",
	];
	/** IAM actions required for the RemoveFlowVpcInterface API call. */
	static readonly REMOVE_FLOW_VPC_INTERFACE: string[] = [
		"mediaconnect:RemoveFlowVpcInterface",
	];
	/** IAM actions required for the RestartRouterInput API call. */
	static readonly RESTART_ROUTER_INPUT: string[] = [
		"mediaconnect:RestartRouterInput",
	];
	/** IAM actions required for the RestartRouterOutput API call. */
	static readonly RESTART_ROUTER_OUTPUT: string[] = [
		"mediaconnect:RestartRouterOutput",
	];
	/** IAM actions required for the RevokeFlowEntitlement API call. */
	static readonly REVOKE_FLOW_ENTITLEMENT: string[] = [
		"mediaconnect:RevokeFlowEntitlement",
	];
	/** IAM actions required for the StartFlow API call. */
	static readonly START_FLOW: string[] = ["mediaconnect:StartFlow"];
	/** IAM actions required for the StartRouterInput API call. */
	static readonly START_ROUTER_INPUT: string[] = [
		"mediaconnect:StartRouterInput",
	];
	/** IAM actions required for the StartRouterOutput API call. */
	static readonly START_ROUTER_OUTPUT: string[] = [
		"mediaconnect:StartRouterOutput",
	];
	/** IAM actions required for the StopFlow API call. */
	static readonly STOP_FLOW: string[] = ["mediaconnect:StopFlow"];
	/** IAM actions required for the StopRouterInput API call. */
	static readonly STOP_ROUTER_INPUT: string[] = [
		"mediaconnect:StopRouterInput",
	];
	/** IAM actions required for the StopRouterOutput API call. */
	static readonly STOP_ROUTER_OUTPUT: string[] = [
		"mediaconnect:StopRouterOutput",
	];
	/** IAM actions required for the TagGlobalResource API call. */
	static readonly TAG_GLOBAL_RESOURCE: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["mediaconnect:TagResource"];
	/** IAM actions required for the TakeRouterInput API call. */
	static readonly TAKE_ROUTER_INPUT: string[] = [
		"mediaconnect:TakeRouterInput",
	];
	/** IAM actions required for the UntagGlobalResource API call. */
	static readonly UNTAG_GLOBAL_RESOURCE: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["mediaconnect:UntagResource"];
	/** IAM actions required for the UpdateBridge API call. */
	static readonly UPDATE_BRIDGE: string[] = ["mediaconnect:UpdateBridge"];
	/** IAM actions required for the UpdateBridgeOutput API call. */
	static readonly UPDATE_BRIDGE_OUTPUT: string[] = [
		"mediaconnect:UpdateBridgeOutput",
	];
	/** IAM actions required for the UpdateBridgeSource API call. */
	static readonly UPDATE_BRIDGE_SOURCE: string[] = [
		"mediaconnect:UpdateBridgeSource",
	];
	/** IAM actions required for the UpdateBridgeState API call. */
	static readonly UPDATE_BRIDGE_STATE: string[] = [
		"mediaconnect:UpdateBridgeState",
	];
	/** IAM actions required for the UpdateFlow API call. */
	static readonly UPDATE_FLOW: string[] = ["mediaconnect:UpdateFlow"];
	/** IAM actions required for the UpdateFlowEntitlement API call. */
	static readonly UPDATE_FLOW_ENTITLEMENT: string[] = [
		"iam:PassRole",
		"mediaconnect:UpdateFlowEntitlement",
	];
	/** IAM actions required for the UpdateFlowMediaStream API call. */
	static readonly UPDATE_FLOW_MEDIA_STREAM: string[] = [
		"mediaconnect:UpdateFlowMediaStream",
	];
	/** IAM actions required for the UpdateFlowOutput API call. */
	static readonly UPDATE_FLOW_OUTPUT: string[] = [
		"iam:PassRole",
		"mediaconnect:UpdateFlowOutput",
	];
	/** IAM actions required for the UpdateFlowSource API call. */
	static readonly UPDATE_FLOW_SOURCE: string[] = [
		"iam:PassRole",
		"mediaconnect:UpdateFlowSource",
	];
	/** IAM actions required for the UpdateGatewayInstance API call. */
	static readonly UPDATE_GATEWAY_INSTANCE: string[] = [
		"mediaconnect:UpdateGatewayInstance",
	];
	/** IAM actions required for the UpdateRouterInput API call. */
	static readonly UPDATE_ROUTER_INPUT: string[] = [
		"mediaconnect:AssociateRouterNetworkInterface",
		"iam:PassRole",
		"mediaconnect:UpdateFlowOutput",
		"mediaconnect:UpdateRouterInput",
	];
	/** IAM actions required for the UpdateRouterNetworkInterface API call. */
	static readonly UPDATE_ROUTER_NETWORK_INTERFACE: string[] = [
		"mediaconnect:UpdateRouterNetworkInterface",
	];
	/** IAM actions required for the UpdateRouterOutput API call. */
	static readonly UPDATE_ROUTER_OUTPUT: string[] = [
		"mediaconnect:AssociateRouterNetworkInterface",
		"iam:PassRole",
		"mediaconnect:UpdateFlowSource",
		"mediaconnect:UpdateRouterOutput",
	];
}

/**
 * Condition key constants and builders for mediaconnect.
 */
export class MediaConnectConditions {
	/** Condition keys applicable to the AddFlowMediaStreams action. */
	static readonly ADD_FLOW_MEDIA_STREAMS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AddFlowOutputs action. */
	static readonly ADD_FLOW_OUTPUTS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AddFlowSources action. */
	static readonly ADD_FLOW_SOURCES_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AddFlowVpcInterfaces action. */
	static readonly ADD_FLOW_VPC_INTERFACES_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFlow action. */
	static readonly CREATE_FLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRouterInput action. */
	static readonly CREATE_ROUTER_INPUT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRouterNetworkInterface action. */
	static readonly CREATE_ROUTER_NETWORK_INTERFACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRouterOutput action. */
	static readonly CREATE_ROUTER_OUTPUT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GrantFlowEntitlements action. */
	static readonly GRANT_FLOW_ENTITLEMENTS_CONDITION_KEYS: string[] = [
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
