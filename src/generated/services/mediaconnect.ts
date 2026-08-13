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
	static readonly AddBridgeOutputs = "mediaconnect:AddBridgeOutputs";
	/** [Write] mediaconnect:AddBridgeSources */
	static readonly AddBridgeSources = "mediaconnect:AddBridgeSources";
	/** [Write] mediaconnect:AddFlowMediaStreams */
	static readonly AddFlowMediaStreams = "mediaconnect:AddFlowMediaStreams";
	/** [Write] mediaconnect:AddFlowOutputs */
	static readonly AddFlowOutputs = "mediaconnect:AddFlowOutputs";
	/** [Write] mediaconnect:AddFlowSources */
	static readonly AddFlowSources = "mediaconnect:AddFlowSources";
	/** [Write] mediaconnect:AddFlowVpcInterfaces */
	static readonly AddFlowVpcInterfaces = "mediaconnect:AddFlowVpcInterfaces";
	/** [Write] mediaconnect:AssociateRouterNetworkInterface */
	static readonly AssociateRouterNetworkInterface =
		"mediaconnect:AssociateRouterNetworkInterface";
	/** [Write] mediaconnect:CreateBridge */
	static readonly CreateBridge = "mediaconnect:CreateBridge";
	/** [Write] mediaconnect:CreateFlow */
	static readonly CreateFlow = "mediaconnect:CreateFlow";
	/** [Write] mediaconnect:CreateGateway */
	static readonly CreateGateway = "mediaconnect:CreateGateway";
	/** [Write] mediaconnect:CreateRouterInput */
	static readonly CreateRouterInput = "mediaconnect:CreateRouterInput";
	/** [Write] mediaconnect:CreateRouterNetworkInterface */
	static readonly CreateRouterNetworkInterface =
		"mediaconnect:CreateRouterNetworkInterface";
	/** [Write] mediaconnect:CreateRouterOutput */
	static readonly CreateRouterOutput = "mediaconnect:CreateRouterOutput";
	/** [Write] mediaconnect:DeleteBridge */
	static readonly DeleteBridge = "mediaconnect:DeleteBridge";
	/** [Write] mediaconnect:DeleteFlow */
	static readonly DeleteFlow = "mediaconnect:DeleteFlow";
	/** [Write] mediaconnect:DeleteGateway */
	static readonly DeleteGateway = "mediaconnect:DeleteGateway";
	/** [Write] mediaconnect:DeleteRouterInput */
	static readonly DeleteRouterInput = "mediaconnect:DeleteRouterInput";
	/** [Write] mediaconnect:DeleteRouterNetworkInterface */
	static readonly DeleteRouterNetworkInterface =
		"mediaconnect:DeleteRouterNetworkInterface";
	/** [Write] mediaconnect:DeleteRouterOutput */
	static readonly DeleteRouterOutput = "mediaconnect:DeleteRouterOutput";
	/** [Write] mediaconnect:DeregisterGatewayInstance */
	static readonly DeregisterGatewayInstance =
		"mediaconnect:DeregisterGatewayInstance";
	/** [Read] mediaconnect:DescribeBridge */
	static readonly DescribeBridge = "mediaconnect:DescribeBridge";
	/** [Read] mediaconnect:DescribeFlow */
	static readonly DescribeFlow = "mediaconnect:DescribeFlow";
	/** [Read] mediaconnect:DescribeFlowSourceMetadata */
	static readonly DescribeFlowSourceMetadata =
		"mediaconnect:DescribeFlowSourceMetadata";
	/** [Read] mediaconnect:DescribeFlowSourceThumbnail */
	static readonly DescribeFlowSourceThumbnail =
		"mediaconnect:DescribeFlowSourceThumbnail";
	/** [Read] mediaconnect:DescribeGateway */
	static readonly DescribeGateway = "mediaconnect:DescribeGateway";
	/** [Read] mediaconnect:DescribeGatewayInstance */
	static readonly DescribeGatewayInstance =
		"mediaconnect:DescribeGatewayInstance";
	/** [Read] mediaconnect:DescribeOffering */
	static readonly DescribeOffering = "mediaconnect:DescribeOffering";
	/** [Read] mediaconnect:DescribeReservation */
	static readonly DescribeReservation = "mediaconnect:DescribeReservation";
	/** [Read] mediaconnect:DiscoverGatewayPollEndpoint */
	static readonly DiscoverGatewayPollEndpoint =
		"mediaconnect:DiscoverGatewayPollEndpoint";
	/** [Read] mediaconnect:GetRouterInput */
	static readonly actionGetRouterInput = "mediaconnect:GetRouterInput";
	/** [Read] mediaconnect:GetRouterInputSourceMetadata */
	static readonly actionGetRouterInputSourceMetadata =
		"mediaconnect:GetRouterInputSourceMetadata";
	/** [Read] mediaconnect:GetRouterInputThumbnail */
	static readonly actionGetRouterInputThumbnail =
		"mediaconnect:GetRouterInputThumbnail";
	/** [Read] mediaconnect:GetRouterNetworkInterface */
	static readonly actionGetRouterNetworkInterface =
		"mediaconnect:GetRouterNetworkInterface";
	/** [Read] mediaconnect:GetRouterOutput */
	static readonly actionGetRouterOutput = "mediaconnect:GetRouterOutput";
	/** [Write] mediaconnect:GrantFlowEntitlements */
	static readonly GrantFlowEntitlements = "mediaconnect:GrantFlowEntitlements";
	/** [List] mediaconnect:ListBridges */
	static readonly ListBridges = "mediaconnect:ListBridges";
	/** [List] mediaconnect:ListEntitlements */
	static readonly ListEntitlements = "mediaconnect:ListEntitlements";
	/** [List] mediaconnect:ListFlows */
	static readonly ListFlows = "mediaconnect:ListFlows";
	/** [List] mediaconnect:ListGatewayInstances */
	static readonly ListGatewayInstances = "mediaconnect:ListGatewayInstances";
	/** [List] mediaconnect:ListGateways */
	static readonly ListGateways = "mediaconnect:ListGateways";
	/** [List] mediaconnect:ListOfferings */
	static readonly ListOfferings = "mediaconnect:ListOfferings";
	/** [List] mediaconnect:ListReservations */
	static readonly ListReservations = "mediaconnect:ListReservations";
	/** [List] mediaconnect:ListRouterInputs */
	static readonly ListRouterInputs = "mediaconnect:ListRouterInputs";
	/** [List] mediaconnect:ListRouterNetworkInterfaces */
	static readonly ListRouterNetworkInterfaces =
		"mediaconnect:ListRouterNetworkInterfaces";
	/** [List] mediaconnect:ListRouterOutputs */
	static readonly ListRouterOutputs = "mediaconnect:ListRouterOutputs";
	/** [Read] mediaconnect:ListTagsForResource */
	static readonly ListTagsForResource = "mediaconnect:ListTagsForResource";
	/** [Write] mediaconnect:PollGateway */
	static readonly PollGateway = "mediaconnect:PollGateway";
	/** [Write] mediaconnect:PurchaseOffering */
	static readonly PurchaseOffering = "mediaconnect:PurchaseOffering";
	/** [Write] mediaconnect:RemoveBridgeOutput */
	static readonly RemoveBridgeOutput = "mediaconnect:RemoveBridgeOutput";
	/** [Write] mediaconnect:RemoveBridgeSource */
	static readonly RemoveBridgeSource = "mediaconnect:RemoveBridgeSource";
	/** [Write] mediaconnect:RemoveFlowMediaStream */
	static readonly RemoveFlowMediaStream = "mediaconnect:RemoveFlowMediaStream";
	/** [Write] mediaconnect:RemoveFlowOutput */
	static readonly RemoveFlowOutput = "mediaconnect:RemoveFlowOutput";
	/** [Write] mediaconnect:RemoveFlowSource */
	static readonly RemoveFlowSource = "mediaconnect:RemoveFlowSource";
	/** [Write] mediaconnect:RemoveFlowVpcInterface */
	static readonly RemoveFlowVpcInterface =
		"mediaconnect:RemoveFlowVpcInterface";
	/** [Write] mediaconnect:RestartRouterInput */
	static readonly RestartRouterInput = "mediaconnect:RestartRouterInput";
	/** [Write] mediaconnect:RestartRouterOutput */
	static readonly RestartRouterOutput = "mediaconnect:RestartRouterOutput";
	/** [Write] mediaconnect:RevokeFlowEntitlement */
	static readonly RevokeFlowEntitlement = "mediaconnect:RevokeFlowEntitlement";
	/** [Write] mediaconnect:StartFlow */
	static readonly StartFlow = "mediaconnect:StartFlow";
	/** [Write] mediaconnect:StartRouterInput */
	static readonly StartRouterInput = "mediaconnect:StartRouterInput";
	/** [Write] mediaconnect:StartRouterOutput */
	static readonly StartRouterOutput = "mediaconnect:StartRouterOutput";
	/** [Write] mediaconnect:StopFlow */
	static readonly StopFlow = "mediaconnect:StopFlow";
	/** [Write] mediaconnect:StopRouterInput */
	static readonly StopRouterInput = "mediaconnect:StopRouterInput";
	/** [Write] mediaconnect:StopRouterOutput */
	static readonly StopRouterOutput = "mediaconnect:StopRouterOutput";
	/** [Write] mediaconnect:SubmitGatewayStateChange */
	static readonly SubmitGatewayStateChange =
		"mediaconnect:SubmitGatewayStateChange";
	/** [Tagging] mediaconnect:TagResource */
	static readonly TagResource = "mediaconnect:TagResource";
	/** [Write] mediaconnect:TakeRouterInput */
	static readonly TakeRouterInput = "mediaconnect:TakeRouterInput";
	/** [Tagging] mediaconnect:UntagResource */
	static readonly UntagResource = "mediaconnect:UntagResource";
	/** [Write] mediaconnect:UpdateBridge */
	static readonly UpdateBridge = "mediaconnect:UpdateBridge";
	/** [Write] mediaconnect:UpdateBridgeOutput */
	static readonly UpdateBridgeOutput = "mediaconnect:UpdateBridgeOutput";
	/** [Write] mediaconnect:UpdateBridgeSource */
	static readonly UpdateBridgeSource = "mediaconnect:UpdateBridgeSource";
	/** [Write] mediaconnect:UpdateBridgeState */
	static readonly UpdateBridgeState = "mediaconnect:UpdateBridgeState";
	/** [Write] mediaconnect:UpdateFlow */
	static readonly UpdateFlow = "mediaconnect:UpdateFlow";
	/** [Write] mediaconnect:UpdateFlowEntitlement */
	static readonly UpdateFlowEntitlement = "mediaconnect:UpdateFlowEntitlement";
	/** [Write] mediaconnect:UpdateFlowMediaStream */
	static readonly UpdateFlowMediaStream = "mediaconnect:UpdateFlowMediaStream";
	/** [Write] mediaconnect:UpdateFlowOutput */
	static readonly UpdateFlowOutput = "mediaconnect:UpdateFlowOutput";
	/** [Write] mediaconnect:UpdateFlowSource */
	static readonly UpdateFlowSource = "mediaconnect:UpdateFlowSource";
	/** [Write] mediaconnect:UpdateGatewayInstance */
	static readonly UpdateGatewayInstance = "mediaconnect:UpdateGatewayInstance";
	/** [Write] mediaconnect:UpdateRouterInput */
	static readonly UpdateRouterInput = "mediaconnect:UpdateRouterInput";
	/** [Write] mediaconnect:UpdateRouterNetworkInterface */
	static readonly UpdateRouterNetworkInterface =
		"mediaconnect:UpdateRouterNetworkInterface";
	/** [Write] mediaconnect:UpdateRouterOutput */
	static readonly UpdateRouterOutput = "mediaconnect:UpdateRouterOutput";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MediaConnectActions.DescribeBridge,
		MediaConnectActions.DescribeFlow,
		MediaConnectActions.DescribeFlowSourceMetadata,
		MediaConnectActions.DescribeFlowSourceThumbnail,
		MediaConnectActions.DescribeGateway,
		MediaConnectActions.DescribeGatewayInstance,
		MediaConnectActions.DescribeOffering,
		MediaConnectActions.DescribeReservation,
		MediaConnectActions.DiscoverGatewayPollEndpoint,
		MediaConnectActions.actionGetRouterInput,
		MediaConnectActions.actionGetRouterInputSourceMetadata,
		MediaConnectActions.actionGetRouterInputThumbnail,
		MediaConnectActions.actionGetRouterNetworkInterface,
		MediaConnectActions.actionGetRouterOutput,
		MediaConnectActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MediaConnectActions.AddBridgeOutputs,
		MediaConnectActions.AddBridgeSources,
		MediaConnectActions.AddFlowMediaStreams,
		MediaConnectActions.AddFlowOutputs,
		MediaConnectActions.AddFlowSources,
		MediaConnectActions.AddFlowVpcInterfaces,
		MediaConnectActions.AssociateRouterNetworkInterface,
		MediaConnectActions.CreateBridge,
		MediaConnectActions.CreateFlow,
		MediaConnectActions.CreateGateway,
		MediaConnectActions.CreateRouterInput,
		MediaConnectActions.CreateRouterNetworkInterface,
		MediaConnectActions.CreateRouterOutput,
		MediaConnectActions.DeleteBridge,
		MediaConnectActions.DeleteFlow,
		MediaConnectActions.DeleteGateway,
		MediaConnectActions.DeleteRouterInput,
		MediaConnectActions.DeleteRouterNetworkInterface,
		MediaConnectActions.DeleteRouterOutput,
		MediaConnectActions.DeregisterGatewayInstance,
		MediaConnectActions.GrantFlowEntitlements,
		MediaConnectActions.PollGateway,
		MediaConnectActions.PurchaseOffering,
		MediaConnectActions.RemoveBridgeOutput,
		MediaConnectActions.RemoveBridgeSource,
		MediaConnectActions.RemoveFlowMediaStream,
		MediaConnectActions.RemoveFlowOutput,
		MediaConnectActions.RemoveFlowSource,
		MediaConnectActions.RemoveFlowVpcInterface,
		MediaConnectActions.RestartRouterInput,
		MediaConnectActions.RestartRouterOutput,
		MediaConnectActions.RevokeFlowEntitlement,
		MediaConnectActions.StartFlow,
		MediaConnectActions.StartRouterInput,
		MediaConnectActions.StartRouterOutput,
		MediaConnectActions.StopFlow,
		MediaConnectActions.StopRouterInput,
		MediaConnectActions.StopRouterOutput,
		MediaConnectActions.SubmitGatewayStateChange,
		MediaConnectActions.TakeRouterInput,
		MediaConnectActions.UpdateBridge,
		MediaConnectActions.UpdateBridgeOutput,
		MediaConnectActions.UpdateBridgeSource,
		MediaConnectActions.UpdateBridgeState,
		MediaConnectActions.UpdateFlow,
		MediaConnectActions.UpdateFlowEntitlement,
		MediaConnectActions.UpdateFlowMediaStream,
		MediaConnectActions.UpdateFlowOutput,
		MediaConnectActions.UpdateFlowSource,
		MediaConnectActions.UpdateGatewayInstance,
		MediaConnectActions.UpdateRouterInput,
		MediaConnectActions.UpdateRouterNetworkInterface,
		MediaConnectActions.UpdateRouterOutput,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MediaConnectActions.ListBridges,
		MediaConnectActions.ListEntitlements,
		MediaConnectActions.ListFlows,
		MediaConnectActions.ListGatewayInstances,
		MediaConnectActions.ListGateways,
		MediaConnectActions.ListOfferings,
		MediaConnectActions.ListReservations,
		MediaConnectActions.ListRouterInputs,
		MediaConnectActions.ListRouterNetworkInterfaces,
		MediaConnectActions.ListRouterOutputs,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MediaConnectActions.TagResource,
		MediaConnectActions.UntagResource,
	];
}

/**
 * Properties for building a Bridge ARN.
 */
export interface MediaConnectBridgeArnProps {
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
}

/**
 * Parsed components of a Bridge ARN.
 */
export interface MediaConnectBridgeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BridgeId component. */
	readonly bridgeId: string;
	/** The BridgeName component. */
	readonly bridgeName: string;
}

/**
 * Properties for building a Entitlement ARN.
 */
export interface MediaConnectEntitlementArnProps {
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
}

/**
 * Parsed components of a Entitlement ARN.
 */
export interface MediaConnectEntitlementArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FlowId component. */
	readonly flowId: string;
	/** The EntitlementName component. */
	readonly entitlementName: string;
}

/**
 * Properties for building a Flow ARN.
 */
export interface MediaConnectFlowArnProps {
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
}

/**
 * Parsed components of a Flow ARN.
 */
export interface MediaConnectFlowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FlowId component. */
	readonly flowId: string;
	/** The FlowName component. */
	readonly flowName: string;
}

/**
 * Properties for building a Gateway ARN.
 */
export interface MediaConnectGatewayArnProps {
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
}

/**
 * Parsed components of a Gateway ARN.
 */
export interface MediaConnectGatewayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
	/** The GatewayName component. */
	readonly gatewayName: string;
}

/**
 * Properties for building a GatewayInstance ARN.
 */
export interface MediaConnectGatewayInstanceArnProps {
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
}

/**
 * Parsed components of a GatewayInstance ARN.
 */
export interface MediaConnectGatewayInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
	/** The GatewayName component. */
	readonly gatewayName: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a MediaStream ARN.
 */
export interface MediaConnectMediaStreamArnProps {
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
}

/**
 * Parsed components of a MediaStream ARN.
 */
export interface MediaConnectMediaStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FlowId component. */
	readonly flowId: string;
	/** The FlowName component. */
	readonly flowName: string;
	/** The MediaStreamName component. */
	readonly mediaStreamName: string;
}

/**
 * Properties for building a Offering ARN.
 */
export interface MediaConnectOfferingArnProps {
	/** The OfferingId component of the ARN. */
	readonly offeringId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Offering ARN.
 */
export interface MediaConnectOfferingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OfferingId component. */
	readonly offeringId: string;
}

/**
 * Properties for building a Output ARN.
 */
export interface MediaConnectOutputArnProps {
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
}

/**
 * Parsed components of a Output ARN.
 */
export interface MediaConnectOutputArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OutputId component. */
	readonly outputId: string;
	/** The OutputName component. */
	readonly outputName: string;
}

/**
 * Properties for building a Reservation ARN.
 */
export interface MediaConnectReservationArnProps {
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
}

/**
 * Parsed components of a Reservation ARN.
 */
export interface MediaConnectReservationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReservationId component. */
	readonly reservationId: string;
	/** The ReservationName component. */
	readonly reservationName: string;
}

/**
 * Properties for building a RouterInput ARN.
 */
export interface MediaConnectRouterInputArnProps {
	/** The RouterInputId component of the ARN. */
	readonly routerInputId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RouterInput ARN.
 */
export interface MediaConnectRouterInputArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RouterInputId component. */
	readonly routerInputId: string;
}

/**
 * Properties for building a RouterNetworkInterface ARN.
 */
export interface MediaConnectRouterNetworkInterfaceArnProps {
	/** The RouterNetworkInterfaceId component of the ARN. */
	readonly routerNetworkInterfaceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RouterNetworkInterface ARN.
 */
export interface MediaConnectRouterNetworkInterfaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RouterNetworkInterfaceId component. */
	readonly routerNetworkInterfaceId: string;
}

/**
 * Properties for building a RouterOutput ARN.
 */
export interface MediaConnectRouterOutputArnProps {
	/** The RouterOutputId component of the ARN. */
	readonly routerOutputId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RouterOutput ARN.
 */
export interface MediaConnectRouterOutputArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RouterOutputId component. */
	readonly routerOutputId: string;
}

/**
 * Properties for building a Source ARN.
 */
export interface MediaConnectSourceArnProps {
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
}

/**
 * Parsed components of a Source ARN.
 */
export interface MediaConnectSourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SourceId component. */
	readonly sourceId: string;
	/** The SourceName component. */
	readonly sourceName: string;
}

/**
 * Properties for building a VpcInterface ARN.
 */
export interface MediaConnectVPCInterfaceArnProps {
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
}

/**
 * Parsed components of a VpcInterface ARN.
 */
export interface MediaConnectVPCInterfaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FlowId component. */
	readonly flowId: string;
	/** The FlowName component. */
	readonly flowName: string;
	/** The VpcInterfaceName component. */
	readonly vpcInterfaceName: string;
}

const BridgeArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):bridge:(?<bridgeId>[^:/?]+):(?<bridgeName>[^:/?]+)$/;
const EntitlementArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):entitlement:(?<flowId>[^:/?]+):(?<entitlementName>[^:/?]+)$/;
const FlowArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):flow:(?<flowId>[^:/?]+):(?<flowName>[^:/?]+)$/;
const GatewayArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):gateway:(?<gatewayId>[^:/?]+):(?<gatewayName>[^:/?]+)$/;
const GatewayInstanceArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):gateway:(?<gatewayId>[^:/?]+):(?<gatewayName>[^:/?]+):instance:(?<instanceId>[^:/?]+)$/;
const MediaStreamArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):flow:(?<flowId>[^:/?]+):(?<flowName>[^:/?]+)\/mediaStream\/(?<mediaStreamName>[^:/?]+)$/;
const OfferingArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):offering:(?<offeringId>[^:/?]+)$/;
const OutputArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):output:(?<outputId>[^:/?]+):(?<outputName>[^:/?]+)$/;
const ReservationArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):reservation:(?<reservationId>[^:/?]+):(?<reservationName>[^:/?]+)$/;
const RouterInputArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):routerInput:(?<routerInputId>[^:/?]+)$/;
const RouterNetworkInterfaceArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):routerNetworkInterface:(?<routerNetworkInterfaceId>[^:/?]+)$/;
const RouterOutputArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):routerOutput:(?<routerOutputId>[^:/?]+)$/;
const SourceArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):source:(?<sourceId>[^:/?]+):(?<sourceName>[^:/?]+)$/;
const VPCInterfaceArnRegex =
	/^arn:(?<partition>[^:]+):mediaconnect:(?<region>[^:]*):(?<account>[^:]*):flow:(?<flowId>[^:/?]+):(?<flowName>[^:/?]+)\/vpcInterface\/(?<vpcInterfaceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for mediaconnect resources.
 */
export class MediaConnectResources {
	/**
	 * Builds an ARN for the Bridge resource.
	 */
	static bridge(props: MediaConnectBridgeArnProps): string {
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
	static parseBridgeArn(arn: string): MediaConnectBridgeArnComponents {
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
	static entitlement(props: MediaConnectEntitlementArnProps): string {
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
	static parseEntitlementArn(
		arn: string,
	): MediaConnectEntitlementArnComponents {
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
	static flow(props: MediaConnectFlowArnProps): string {
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
	static parseFlowArn(arn: string): MediaConnectFlowArnComponents {
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
	static gateway(props: MediaConnectGatewayArnProps): string {
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
	static parseGatewayArn(arn: string): MediaConnectGatewayArnComponents {
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
	static gatewayInstance(props: MediaConnectGatewayInstanceArnProps): string {
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
	static parseGatewayInstanceArn(
		arn: string,
	): MediaConnectGatewayInstanceArnComponents {
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
	static mediaStream(props: MediaConnectMediaStreamArnProps): string {
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
	static parseMediaStreamArn(
		arn: string,
	): MediaConnectMediaStreamArnComponents {
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
	static offering(props: MediaConnectOfferingArnProps): string {
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
	static parseOfferingArn(arn: string): MediaConnectOfferingArnComponents {
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
	static output(props: MediaConnectOutputArnProps): string {
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
	static parseOutputArn(arn: string): MediaConnectOutputArnComponents {
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
	static reservation(props: MediaConnectReservationArnProps): string {
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
	static parseReservationArn(
		arn: string,
	): MediaConnectReservationArnComponents {
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
	static routerInput(props: MediaConnectRouterInputArnProps): string {
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
	static parseRouterInputArn(
		arn: string,
	): MediaConnectRouterInputArnComponents {
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
	static routerNetworkInterface(
		props: MediaConnectRouterNetworkInterfaceArnProps,
	): string {
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
	static parseRouterNetworkInterfaceArn(
		arn: string,
	): MediaConnectRouterNetworkInterfaceArnComponents {
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
	static routerOutput(props: MediaConnectRouterOutputArnProps): string {
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
	static parseRouterOutputArn(
		arn: string,
	): MediaConnectRouterOutputArnComponents {
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
	static source(props: MediaConnectSourceArnProps): string {
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
	static parseSourceArn(arn: string): MediaConnectSourceArnComponents {
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
	static vpcInterface(props: MediaConnectVPCInterfaceArnProps): string {
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
	static parseVPCInterfaceArn(
		arn: string,
	): MediaConnectVPCInterfaceArnComponents {
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
	static readonly AddBridgeOutputs: string[] = [
		"mediaconnect:AddBridgeOutputs",
	];
	/** IAM actions required for the AddBridgeSources API call. */
	static readonly AddBridgeSources: string[] = [
		"mediaconnect:AddBridgeSources",
	];
	/** IAM actions required for the AddFlowMediaStreams API call. */
	static readonly AddFlowMediaStreams: string[] = [
		"mediaconnect:AddFlowMediaStreams",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the AddFlowOutputs API call. */
	static readonly AddFlowOutputs: string[] = [
		"mediaconnect:AddFlowOutputs",
		"iam:PassRole",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the AddFlowSources API call. */
	static readonly AddFlowSources: string[] = [
		"mediaconnect:AddFlowSources",
		"iam:PassRole",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the AddFlowVpcInterfaces API call. */
	static readonly AddFlowVpcInterfaces: string[] = [
		"mediaconnect:AddFlowVpcInterfaces",
		"iam:PassRole",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the BatchGetRouterInput API call. */
	static readonly BatchGetRouterInput: string[] = [
		"mediaconnect:GetRouterInput",
	];
	/** IAM actions required for the BatchGetRouterNetworkInterface API call. */
	static readonly BatchGetRouterNetworkInterface: string[] = [
		"mediaconnect:GetRouterNetworkInterface",
	];
	/** IAM actions required for the BatchGetRouterOutput API call. */
	static readonly BatchGetRouterOutput: string[] = [
		"mediaconnect:GetRouterOutput",
	];
	/** IAM actions required for the CreateBridge API call. */
	static readonly CreateBridge: string[] = [
		"mediaconnect:AddBridgeOutputs",
		"mediaconnect:AddBridgeSources",
		"mediaconnect:CreateBridge",
	];
	/** IAM actions required for the CreateFlow API call. */
	static readonly CreateFlow: string[] = [
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
	static readonly CreateGateway: string[] = ["mediaconnect:CreateGateway"];
	/** IAM actions required for the CreateRouterInput API call. */
	static readonly CreateRouterInput: string[] = [
		"mediaconnect:AssociateRouterNetworkInterface",
		"mediaconnect:CreateRouterInput",
		"iam:PassRole",
		"mediaconnect:TagResource",
		"mediaconnect:UpdateFlowOutput",
	];
	/** IAM actions required for the CreateRouterNetworkInterface API call. */
	static readonly CreateRouterNetworkInterface: string[] = [
		"mediaconnect:CreateRouterNetworkInterface",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the CreateRouterOutput API call. */
	static readonly CreateRouterOutput: string[] = [
		"mediaconnect:AssociateRouterNetworkInterface",
		"mediaconnect:CreateRouterOutput",
		"iam:PassRole",
		"mediaconnect:TagResource",
		"mediaconnect:UpdateFlowSource",
	];
	/** IAM actions required for the DeleteBridge API call. */
	static readonly DeleteBridge: string[] = [
		"mediaconnect:DeleteBridge",
		"mediaconnect:RemoveBridgeOutput",
		"mediaconnect:RemoveBridgeSource",
	];
	/** IAM actions required for the DeleteFlow API call. */
	static readonly DeleteFlow: string[] = [
		"mediaconnect:DeleteFlow",
		"mediaconnect:RemoveFlowMediaStream",
		"mediaconnect:RemoveFlowOutput",
		"mediaconnect:RemoveFlowSource",
		"mediaconnect:RemoveFlowVpcInterface",
		"mediaconnect:RevokeFlowEntitlement",
	];
	/** IAM actions required for the DeleteGateway API call. */
	static readonly DeleteGateway: string[] = ["mediaconnect:DeleteGateway"];
	/** IAM actions required for the DeleteRouterInput API call. */
	static readonly DeleteRouterInput: string[] = [
		"mediaconnect:DeleteRouterInput",
		"mediaconnect:UpdateFlowOutput",
	];
	/** IAM actions required for the DeleteRouterNetworkInterface API call. */
	static readonly DeleteRouterNetworkInterface: string[] = [
		"mediaconnect:DeleteRouterNetworkInterface",
	];
	/** IAM actions required for the DeleteRouterOutput API call. */
	static readonly DeleteRouterOutput: string[] = [
		"mediaconnect:DeleteRouterOutput",
		"mediaconnect:UpdateFlowSource",
	];
	/** IAM actions required for the DeregisterGatewayInstance API call. */
	static readonly DeregisterGatewayInstance: string[] = [
		"mediaconnect:DeregisterGatewayInstance",
	];
	/** IAM actions required for the DescribeBridge API call. */
	static readonly DescribeBridge: string[] = ["mediaconnect:DescribeBridge"];
	/** IAM actions required for the DescribeFlow API call. */
	static readonly DescribeFlow: string[] = ["mediaconnect:DescribeFlow"];
	/** IAM actions required for the DescribeFlowSourceMetadata API call. */
	static readonly DescribeFlowSourceMetadata: string[] = [
		"mediaconnect:DescribeFlowSourceMetadata",
	];
	/** IAM actions required for the DescribeFlowSourceThumbnail API call. */
	static readonly DescribeFlowSourceThumbnail: string[] = [
		"mediaconnect:DescribeFlowSourceThumbnail",
	];
	/** IAM actions required for the DescribeGateway API call. */
	static readonly DescribeGateway: string[] = ["mediaconnect:DescribeGateway"];
	/** IAM actions required for the DescribeGatewayInstance API call. */
	static readonly DescribeGatewayInstance: string[] = [
		"mediaconnect:DescribeGatewayInstance",
	];
	/** IAM actions required for the DescribeOffering API call. */
	static readonly DescribeOffering: string[] = [
		"mediaconnect:DescribeOffering",
	];
	/** IAM actions required for the DescribeReservation API call. */
	static readonly DescribeReservation: string[] = [
		"mediaconnect:DescribeReservation",
	];
	/** IAM actions required for the GetRouterInput API call. */
	static readonly opGetRouterInput: string[] = ["mediaconnect:GetRouterInput"];
	/** IAM actions required for the GetRouterInputSourceMetadata API call. */
	static readonly opGetRouterInputSourceMetadata: string[] = [
		"mediaconnect:GetRouterInputSourceMetadata",
	];
	/** IAM actions required for the GetRouterInputThumbnail API call. */
	static readonly opGetRouterInputThumbnail: string[] = [
		"mediaconnect:GetRouterInputThumbnail",
	];
	/** IAM actions required for the GetRouterNetworkInterface API call. */
	static readonly opGetRouterNetworkInterface: string[] = [
		"mediaconnect:GetRouterNetworkInterface",
	];
	/** IAM actions required for the GetRouterOutput API call. */
	static readonly opGetRouterOutput: string[] = [
		"mediaconnect:GetRouterOutput",
	];
	/** IAM actions required for the GrantFlowEntitlements API call. */
	static readonly GrantFlowEntitlements: string[] = [
		"mediaconnect:GrantFlowEntitlements",
		"iam:PassRole",
		"mediaconnect:TagResource",
	];
	/** IAM actions required for the ListBridges API call. */
	static readonly ListBridges: string[] = ["mediaconnect:ListBridges"];
	/** IAM actions required for the ListEntitlements API call. */
	static readonly ListEntitlements: string[] = [
		"mediaconnect:ListEntitlements",
	];
	/** IAM actions required for the ListFlows API call. */
	static readonly ListFlows: string[] = ["mediaconnect:ListFlows"];
	/** IAM actions required for the ListGatewayInstances API call. */
	static readonly ListGatewayInstances: string[] = [
		"mediaconnect:ListGatewayInstances",
	];
	/** IAM actions required for the ListGateways API call. */
	static readonly ListGateways: string[] = ["mediaconnect:ListGateways"];
	/** IAM actions required for the ListOfferings API call. */
	static readonly ListOfferings: string[] = ["mediaconnect:ListOfferings"];
	/** IAM actions required for the ListReservations API call. */
	static readonly ListReservations: string[] = [
		"mediaconnect:ListReservations",
	];
	/** IAM actions required for the ListRouterInputs API call. */
	static readonly ListRouterInputs: string[] = [
		"mediaconnect:ListRouterInputs",
	];
	/** IAM actions required for the ListRouterNetworkInterfaces API call. */
	static readonly ListRouterNetworkInterfaces: string[] = [
		"mediaconnect:ListRouterNetworkInterfaces",
	];
	/** IAM actions required for the ListRouterOutputs API call. */
	static readonly ListRouterOutputs: string[] = [
		"mediaconnect:ListRouterOutputs",
	];
	/** IAM actions required for the ListTagsForGlobalResource API call. */
	static readonly ListTagsForGlobalResource: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"mediaconnect:ListTagsForResource",
	];
	/** IAM actions required for the PurchaseOffering API call. */
	static readonly PurchaseOffering: string[] = [
		"mediaconnect:PurchaseOffering",
	];
	/** IAM actions required for the RemoveBridgeOutput API call. */
	static readonly RemoveBridgeOutput: string[] = [
		"mediaconnect:RemoveBridgeOutput",
	];
	/** IAM actions required for the RemoveBridgeSource API call. */
	static readonly RemoveBridgeSource: string[] = [
		"mediaconnect:RemoveBridgeSource",
	];
	/** IAM actions required for the RemoveFlowMediaStream API call. */
	static readonly RemoveFlowMediaStream: string[] = [
		"mediaconnect:RemoveFlowMediaStream",
	];
	/** IAM actions required for the RemoveFlowOutput API call. */
	static readonly RemoveFlowOutput: string[] = [
		"mediaconnect:RemoveFlowOutput",
	];
	/** IAM actions required for the RemoveFlowSource API call. */
	static readonly RemoveFlowSource: string[] = [
		"mediaconnect:RemoveFlowSource",
	];
	/** IAM actions required for the RemoveFlowVpcInterface API call. */
	static readonly RemoveFlowVpcInterface: string[] = [
		"mediaconnect:RemoveFlowVpcInterface",
	];
	/** IAM actions required for the RestartRouterInput API call. */
	static readonly RestartRouterInput: string[] = [
		"mediaconnect:RestartRouterInput",
	];
	/** IAM actions required for the RestartRouterOutput API call. */
	static readonly RestartRouterOutput: string[] = [
		"mediaconnect:RestartRouterOutput",
	];
	/** IAM actions required for the RevokeFlowEntitlement API call. */
	static readonly RevokeFlowEntitlement: string[] = [
		"mediaconnect:RevokeFlowEntitlement",
	];
	/** IAM actions required for the StartFlow API call. */
	static readonly StartFlow: string[] = ["mediaconnect:StartFlow"];
	/** IAM actions required for the StartRouterInput API call. */
	static readonly StartRouterInput: string[] = [
		"mediaconnect:StartRouterInput",
	];
	/** IAM actions required for the StartRouterOutput API call. */
	static readonly StartRouterOutput: string[] = [
		"mediaconnect:StartRouterOutput",
	];
	/** IAM actions required for the StopFlow API call. */
	static readonly StopFlow: string[] = ["mediaconnect:StopFlow"];
	/** IAM actions required for the StopRouterInput API call. */
	static readonly StopRouterInput: string[] = ["mediaconnect:StopRouterInput"];
	/** IAM actions required for the StopRouterOutput API call. */
	static readonly StopRouterOutput: string[] = [
		"mediaconnect:StopRouterOutput",
	];
	/** IAM actions required for the TagGlobalResource API call. */
	static readonly TagGlobalResource: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["mediaconnect:TagResource"];
	/** IAM actions required for the TakeRouterInput API call. */
	static readonly TakeRouterInput: string[] = ["mediaconnect:TakeRouterInput"];
	/** IAM actions required for the UntagGlobalResource API call. */
	static readonly UntagGlobalResource: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["mediaconnect:UntagResource"];
	/** IAM actions required for the UpdateBridge API call. */
	static readonly UpdateBridge: string[] = ["mediaconnect:UpdateBridge"];
	/** IAM actions required for the UpdateBridgeOutput API call. */
	static readonly UpdateBridgeOutput: string[] = [
		"mediaconnect:UpdateBridgeOutput",
	];
	/** IAM actions required for the UpdateBridgeSource API call. */
	static readonly UpdateBridgeSource: string[] = [
		"mediaconnect:UpdateBridgeSource",
	];
	/** IAM actions required for the UpdateBridgeState API call. */
	static readonly UpdateBridgeState: string[] = [
		"mediaconnect:UpdateBridgeState",
	];
	/** IAM actions required for the UpdateFlow API call. */
	static readonly UpdateFlow: string[] = ["mediaconnect:UpdateFlow"];
	/** IAM actions required for the UpdateFlowEntitlement API call. */
	static readonly UpdateFlowEntitlement: string[] = [
		"iam:PassRole",
		"mediaconnect:UpdateFlowEntitlement",
	];
	/** IAM actions required for the UpdateFlowMediaStream API call. */
	static readonly UpdateFlowMediaStream: string[] = [
		"mediaconnect:UpdateFlowMediaStream",
	];
	/** IAM actions required for the UpdateFlowOutput API call. */
	static readonly UpdateFlowOutput: string[] = [
		"iam:PassRole",
		"mediaconnect:UpdateFlowOutput",
	];
	/** IAM actions required for the UpdateFlowSource API call. */
	static readonly UpdateFlowSource: string[] = [
		"iam:PassRole",
		"mediaconnect:UpdateFlowSource",
	];
	/** IAM actions required for the UpdateGatewayInstance API call. */
	static readonly UpdateGatewayInstance: string[] = [
		"mediaconnect:UpdateGatewayInstance",
	];
	/** IAM actions required for the UpdateRouterInput API call. */
	static readonly UpdateRouterInput: string[] = [
		"mediaconnect:AssociateRouterNetworkInterface",
		"iam:PassRole",
		"mediaconnect:UpdateFlowOutput",
		"mediaconnect:UpdateRouterInput",
	];
	/** IAM actions required for the UpdateRouterNetworkInterface API call. */
	static readonly UpdateRouterNetworkInterface: string[] = [
		"mediaconnect:UpdateRouterNetworkInterface",
	];
	/** IAM actions required for the UpdateRouterOutput API call. */
	static readonly UpdateRouterOutput: string[] = [
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
	static readonly AddFlowMediaStreamsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AddFlowOutputs action. */
	static readonly AddFlowOutputsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AddFlowSources action. */
	static readonly AddFlowSourcesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AddFlowVpcInterfaces action. */
	static readonly AddFlowVpcInterfacesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFlow action. */
	static readonly CreateFlowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRouterInput action. */
	static readonly CreateRouterInputConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRouterNetworkInterface action. */
	static readonly CreateRouterNetworkInterfaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRouterOutput action. */
	static readonly CreateRouterOutputConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GrantFlowEntitlements action. */
	static readonly GrantFlowEntitlementsConditionKeys: string[] = [
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
