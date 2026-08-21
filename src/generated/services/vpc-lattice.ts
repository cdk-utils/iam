// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/vpc-lattice.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the vpc-lattice service.
 */
export class VPCLatticeActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "vpc-lattice";

	/** [PermissionManagement] vpc-lattice:AssociateViaAWSService */
	static readonly AssociateViaAWSService = "vpc-lattice:AssociateViaAWSService";
	/** [PermissionManagement] vpc-lattice:AssociateViaAWSService-EventsAndStates */
	static readonly AssociateViaAWSServiceEventsAndStates =
		"vpc-lattice:AssociateViaAWSService-EventsAndStates";
	/** [Write] vpc-lattice:CreateAccessLogSubscription */
	static readonly CreateAccessLogSubscription =
		"vpc-lattice:CreateAccessLogSubscription";
	/** [Write] vpc-lattice:CreateListener */
	static readonly CreateListener = "vpc-lattice:CreateListener";
	/** [Write] vpc-lattice:CreateResourceConfiguration */
	static readonly CreateResourceConfiguration =
		"vpc-lattice:CreateResourceConfiguration";
	/** [Write] vpc-lattice:CreateResourceGateway */
	static readonly CreateResourceGateway = "vpc-lattice:CreateResourceGateway";
	/** [Write] vpc-lattice:CreateRule */
	static readonly CreateRule = "vpc-lattice:CreateRule";
	/** [Write] vpc-lattice:CreateService */
	static readonly CreateService = "vpc-lattice:CreateService";
	/** [Write] vpc-lattice:CreateServiceNetwork */
	static readonly CreateServiceNetwork = "vpc-lattice:CreateServiceNetwork";
	/** [Write] vpc-lattice:CreateServiceNetworkResourceAssociation */
	static readonly CreateServiceNetworkResourceAssociation =
		"vpc-lattice:CreateServiceNetworkResourceAssociation";
	/** [Write] vpc-lattice:CreateServiceNetworkServiceAssociation */
	static readonly CreateServiceNetworkServiceAssociation =
		"vpc-lattice:CreateServiceNetworkServiceAssociation";
	/** [Write] vpc-lattice:CreateServiceNetworkVpcAssociation */
	static readonly CreateServiceNetworkVpcAssociation =
		"vpc-lattice:CreateServiceNetworkVpcAssociation";
	/** [PermissionManagement] vpc-lattice:CreateServiceNetworkVpcEndpointAssociation */
	static readonly CreateServiceNetworkVpcEndpointAssociation =
		"vpc-lattice:CreateServiceNetworkVpcEndpointAssociation";
	/** [Write] vpc-lattice:CreateTargetGroup */
	static readonly CreateTargetGroup = "vpc-lattice:CreateTargetGroup";
	/** [Write] vpc-lattice:DeleteAccessLogSubscription */
	static readonly DeleteAccessLogSubscription =
		"vpc-lattice:DeleteAccessLogSubscription";
	/** [PermissionManagement] vpc-lattice:DeleteAuthPolicy */
	static readonly DeleteAuthPolicy = "vpc-lattice:DeleteAuthPolicy";
	/** [Write] vpc-lattice:DeleteDomainVerification */
	static readonly DeleteDomainVerification =
		"vpc-lattice:DeleteDomainVerification";
	/** [Write] vpc-lattice:DeleteListener */
	static readonly DeleteListener = "vpc-lattice:DeleteListener";
	/** [Write] vpc-lattice:DeleteResourceConfiguration */
	static readonly DeleteResourceConfiguration =
		"vpc-lattice:DeleteResourceConfiguration";
	/** [Write] vpc-lattice:DeleteResourceEndpointAssociation */
	static readonly DeleteResourceEndpointAssociation =
		"vpc-lattice:DeleteResourceEndpointAssociation";
	/** [Write] vpc-lattice:DeleteResourceGateway */
	static readonly DeleteResourceGateway = "vpc-lattice:DeleteResourceGateway";
	/** [Write] vpc-lattice:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "vpc-lattice:DeleteResourcePolicy";
	/** [Write] vpc-lattice:DeleteRule */
	static readonly DeleteRule = "vpc-lattice:DeleteRule";
	/** [Write] vpc-lattice:DeleteService */
	static readonly DeleteService = "vpc-lattice:DeleteService";
	/** [Write] vpc-lattice:DeleteServiceNetwork */
	static readonly DeleteServiceNetwork = "vpc-lattice:DeleteServiceNetwork";
	/** [Write] vpc-lattice:DeleteServiceNetworkResourceAssociation */
	static readonly DeleteServiceNetworkResourceAssociation =
		"vpc-lattice:DeleteServiceNetworkResourceAssociation";
	/** [Write] vpc-lattice:DeleteServiceNetworkServiceAssociation */
	static readonly DeleteServiceNetworkServiceAssociation =
		"vpc-lattice:DeleteServiceNetworkServiceAssociation";
	/** [Write] vpc-lattice:DeleteServiceNetworkVpcAssociation */
	static readonly DeleteServiceNetworkVpcAssociation =
		"vpc-lattice:DeleteServiceNetworkVpcAssociation";
	/** [Write] vpc-lattice:DeleteTargetGroup */
	static readonly DeleteTargetGroup = "vpc-lattice:DeleteTargetGroup";
	/** [Write] vpc-lattice:DeregisterTargets */
	static readonly DeregisterTargets = "vpc-lattice:DeregisterTargets";
	/** [Read] vpc-lattice:GetAccessLogSubscription */
	static readonly actionGetAccessLogSubscription =
		"vpc-lattice:GetAccessLogSubscription";
	/** [Read] vpc-lattice:GetAuthPolicy */
	static readonly actionGetAuthPolicy = "vpc-lattice:GetAuthPolicy";
	/** [Read] vpc-lattice:GetDomainVerification */
	static readonly actionGetDomainVerification =
		"vpc-lattice:GetDomainVerification";
	/** [Read] vpc-lattice:GetListener */
	static readonly actionGetListener = "vpc-lattice:GetListener";
	/** [Read] vpc-lattice:GetResourceConfiguration */
	static readonly actionGetResourceConfiguration =
		"vpc-lattice:GetResourceConfiguration";
	/** [Read] vpc-lattice:GetResourceGateway */
	static readonly actionGetResourceGateway = "vpc-lattice:GetResourceGateway";
	/** [Read] vpc-lattice:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "vpc-lattice:GetResourcePolicy";
	/** [Read] vpc-lattice:GetRule */
	static readonly actionGetRule = "vpc-lattice:GetRule";
	/** [Read] vpc-lattice:GetService */
	static readonly actionGetService = "vpc-lattice:GetService";
	/** [Read] vpc-lattice:GetServiceNetwork */
	static readonly actionGetServiceNetwork = "vpc-lattice:GetServiceNetwork";
	/** [Read] vpc-lattice:GetServiceNetworkResourceAssociation */
	static readonly actionGetServiceNetworkResourceAssociation =
		"vpc-lattice:GetServiceNetworkResourceAssociation";
	/** [Read] vpc-lattice:GetServiceNetworkServiceAssociation */
	static readonly actionGetServiceNetworkServiceAssociation =
		"vpc-lattice:GetServiceNetworkServiceAssociation";
	/** [Read] vpc-lattice:GetServiceNetworkVpcAssociation */
	static readonly actionGetServiceNetworkVpcAssociation =
		"vpc-lattice:GetServiceNetworkVpcAssociation";
	/** [Read] vpc-lattice:GetTargetGroup */
	static readonly actionGetTargetGroup = "vpc-lattice:GetTargetGroup";
	/** [List] vpc-lattice:ListAccessLogSubscriptions */
	static readonly ListAccessLogSubscriptions =
		"vpc-lattice:ListAccessLogSubscriptions";
	/** [List] vpc-lattice:ListDomainVerifications */
	static readonly ListDomainVerifications =
		"vpc-lattice:ListDomainVerifications";
	/** [List] vpc-lattice:ListListeners */
	static readonly ListListeners = "vpc-lattice:ListListeners";
	/** [List] vpc-lattice:ListResourceConfigurations */
	static readonly ListResourceConfigurations =
		"vpc-lattice:ListResourceConfigurations";
	/** [List] vpc-lattice:ListResourceEndpointAssociations */
	static readonly ListResourceEndpointAssociations =
		"vpc-lattice:ListResourceEndpointAssociations";
	/** [List] vpc-lattice:ListResourceGateways */
	static readonly ListResourceGateways = "vpc-lattice:ListResourceGateways";
	/** [List] vpc-lattice:ListRules */
	static readonly ListRules = "vpc-lattice:ListRules";
	/** [List] vpc-lattice:ListServiceNetworkResourceAssociations */
	static readonly ListServiceNetworkResourceAssociations =
		"vpc-lattice:ListServiceNetworkResourceAssociations";
	/** [List] vpc-lattice:ListServiceNetworkServiceAssociations */
	static readonly ListServiceNetworkServiceAssociations =
		"vpc-lattice:ListServiceNetworkServiceAssociations";
	/** [List] vpc-lattice:ListServiceNetworkVpcAssociations */
	static readonly ListServiceNetworkVpcAssociations =
		"vpc-lattice:ListServiceNetworkVpcAssociations";
	/** [List] vpc-lattice:ListServiceNetworkVpcEndpointAssociations */
	static readonly ListServiceNetworkVpcEndpointAssociations =
		"vpc-lattice:ListServiceNetworkVpcEndpointAssociations";
	/** [List] vpc-lattice:ListServiceNetworks */
	static readonly ListServiceNetworks = "vpc-lattice:ListServiceNetworks";
	/** [List] vpc-lattice:ListServices */
	static readonly ListServices = "vpc-lattice:ListServices";
	/** [Read] vpc-lattice:ListTagsForResource */
	static readonly ListTagsForResource = "vpc-lattice:ListTagsForResource";
	/** [List] vpc-lattice:ListTargetGroups */
	static readonly ListTargetGroups = "vpc-lattice:ListTargetGroups";
	/** [List] vpc-lattice:ListTargets */
	static readonly ListTargets = "vpc-lattice:ListTargets";
	/** [PermissionManagement] vpc-lattice:PutAuthPolicy */
	static readonly PutAuthPolicy = "vpc-lattice:PutAuthPolicy";
	/** [Write] vpc-lattice:PutResourcePolicy */
	static readonly PutResourcePolicy = "vpc-lattice:PutResourcePolicy";
	/** [Write] vpc-lattice:RegisterTargets */
	static readonly RegisterTargets = "vpc-lattice:RegisterTargets";
	/** [Write] vpc-lattice:StartDomainVerification */
	static readonly StartDomainVerification =
		"vpc-lattice:StartDomainVerification";
	/** [Tagging] vpc-lattice:TagResource */
	static readonly TagResource = "vpc-lattice:TagResource";
	/** [Tagging] vpc-lattice:UntagResource */
	static readonly UntagResource = "vpc-lattice:UntagResource";
	/** [Write] vpc-lattice:UpdateAccessLogSubscription */
	static readonly UpdateAccessLogSubscription =
		"vpc-lattice:UpdateAccessLogSubscription";
	/** [Write] vpc-lattice:UpdateListener */
	static readonly UpdateListener = "vpc-lattice:UpdateListener";
	/** [Write] vpc-lattice:UpdateResourceConfiguration */
	static readonly UpdateResourceConfiguration =
		"vpc-lattice:UpdateResourceConfiguration";
	/** [Write] vpc-lattice:UpdateResourceGateway */
	static readonly UpdateResourceGateway = "vpc-lattice:UpdateResourceGateway";
	/** [Write] vpc-lattice:UpdateRule */
	static readonly UpdateRule = "vpc-lattice:UpdateRule";
	/** [Write] vpc-lattice:UpdateService */
	static readonly UpdateService = "vpc-lattice:UpdateService";
	/** [Write] vpc-lattice:UpdateServiceNetwork */
	static readonly UpdateServiceNetwork = "vpc-lattice:UpdateServiceNetwork";
	/** [Write] vpc-lattice:UpdateServiceNetworkVpcAssociation */
	static readonly UpdateServiceNetworkVpcAssociation =
		"vpc-lattice:UpdateServiceNetworkVpcAssociation";
	/** [Write] vpc-lattice:UpdateTargetGroup */
	static readonly UpdateTargetGroup = "vpc-lattice:UpdateTargetGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		VPCLatticeActions.actionGetAccessLogSubscription,
		VPCLatticeActions.actionGetAuthPolicy,
		VPCLatticeActions.actionGetDomainVerification,
		VPCLatticeActions.actionGetListener,
		VPCLatticeActions.actionGetResourceConfiguration,
		VPCLatticeActions.actionGetResourceGateway,
		VPCLatticeActions.actionGetResourcePolicy,
		VPCLatticeActions.actionGetRule,
		VPCLatticeActions.actionGetService,
		VPCLatticeActions.actionGetServiceNetwork,
		VPCLatticeActions.actionGetServiceNetworkResourceAssociation,
		VPCLatticeActions.actionGetServiceNetworkServiceAssociation,
		VPCLatticeActions.actionGetServiceNetworkVpcAssociation,
		VPCLatticeActions.actionGetTargetGroup,
		VPCLatticeActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		VPCLatticeActions.CreateAccessLogSubscription,
		VPCLatticeActions.CreateListener,
		VPCLatticeActions.CreateResourceConfiguration,
		VPCLatticeActions.CreateResourceGateway,
		VPCLatticeActions.CreateRule,
		VPCLatticeActions.CreateService,
		VPCLatticeActions.CreateServiceNetwork,
		VPCLatticeActions.CreateServiceNetworkResourceAssociation,
		VPCLatticeActions.CreateServiceNetworkServiceAssociation,
		VPCLatticeActions.CreateServiceNetworkVpcAssociation,
		VPCLatticeActions.CreateTargetGroup,
		VPCLatticeActions.DeleteAccessLogSubscription,
		VPCLatticeActions.DeleteDomainVerification,
		VPCLatticeActions.DeleteListener,
		VPCLatticeActions.DeleteResourceConfiguration,
		VPCLatticeActions.DeleteResourceEndpointAssociation,
		VPCLatticeActions.DeleteResourceGateway,
		VPCLatticeActions.DeleteResourcePolicy,
		VPCLatticeActions.DeleteRule,
		VPCLatticeActions.DeleteService,
		VPCLatticeActions.DeleteServiceNetwork,
		VPCLatticeActions.DeleteServiceNetworkResourceAssociation,
		VPCLatticeActions.DeleteServiceNetworkServiceAssociation,
		VPCLatticeActions.DeleteServiceNetworkVpcAssociation,
		VPCLatticeActions.DeleteTargetGroup,
		VPCLatticeActions.DeregisterTargets,
		VPCLatticeActions.PutResourcePolicy,
		VPCLatticeActions.RegisterTargets,
		VPCLatticeActions.StartDomainVerification,
		VPCLatticeActions.UpdateAccessLogSubscription,
		VPCLatticeActions.UpdateListener,
		VPCLatticeActions.UpdateResourceConfiguration,
		VPCLatticeActions.UpdateResourceGateway,
		VPCLatticeActions.UpdateRule,
		VPCLatticeActions.UpdateService,
		VPCLatticeActions.UpdateServiceNetwork,
		VPCLatticeActions.UpdateServiceNetworkVpcAssociation,
		VPCLatticeActions.UpdateTargetGroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		VPCLatticeActions.ListAccessLogSubscriptions,
		VPCLatticeActions.ListDomainVerifications,
		VPCLatticeActions.ListListeners,
		VPCLatticeActions.ListResourceConfigurations,
		VPCLatticeActions.ListResourceEndpointAssociations,
		VPCLatticeActions.ListResourceGateways,
		VPCLatticeActions.ListRules,
		VPCLatticeActions.ListServiceNetworkResourceAssociations,
		VPCLatticeActions.ListServiceNetworkServiceAssociations,
		VPCLatticeActions.ListServiceNetworkVpcAssociations,
		VPCLatticeActions.ListServiceNetworkVpcEndpointAssociations,
		VPCLatticeActions.ListServiceNetworks,
		VPCLatticeActions.ListServices,
		VPCLatticeActions.ListTargetGroups,
		VPCLatticeActions.ListTargets,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		VPCLatticeActions.AssociateViaAWSService,
		VPCLatticeActions.AssociateViaAWSServiceEventsAndStates,
		VPCLatticeActions.CreateServiceNetworkVpcEndpointAssociation,
		VPCLatticeActions.DeleteAuthPolicy,
		VPCLatticeActions.PutAuthPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		VPCLatticeActions.TagResource,
		VPCLatticeActions.UntagResource,
	];
}

/**
 * Properties for building a AccessLogSubscription ARN.
 */
export interface VPCLatticeAccessLogSubscriptionArnProps {
	/** The AccessLogSubscriptionId component of the ARN. */
	readonly accessLogSubscriptionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AccessLogSubscription ARN.
 */
export interface VPCLatticeAccessLogSubscriptionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccessLogSubscriptionId component. */
	readonly accessLogSubscriptionId: string;
}

/**
 * Properties for building a DomainVerification ARN.
 */
export interface VPCLatticeDomainVerificationArnProps {
	/** The DomainVerificationId component of the ARN. */
	readonly domainVerificationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DomainVerification ARN.
 */
export interface VPCLatticeDomainVerificationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainVerificationId component. */
	readonly domainVerificationId: string;
}

/**
 * Properties for building a Listener ARN.
 */
export interface VPCLatticeListenerArnProps {
	/** The ServiceId component of the ARN. */
	readonly serviceId: string;
	/** The ListenerId component of the ARN. */
	readonly listenerId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Listener ARN.
 */
export interface VPCLatticeListenerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceId component. */
	readonly serviceId: string;
	/** The ListenerId component. */
	readonly listenerId: string;
}

/**
 * Properties for building a ResourceConfiguration ARN.
 */
export interface VPCLatticeResourceConfigurationArnProps {
	/** The ResourceConfigurationId component of the ARN. */
	readonly resourceConfigurationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ResourceConfiguration ARN.
 */
export interface VPCLatticeResourceConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceConfigurationId component. */
	readonly resourceConfigurationId: string;
}

/**
 * Properties for building a ResourceEndpointAssociation ARN.
 */
export interface VPCLatticeResourceEndpointAssociationArnProps {
	/** The ResourceEndpointAssociationId component of the ARN. */
	readonly resourceEndpointAssociationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ResourceEndpointAssociation ARN.
 */
export interface VPCLatticeResourceEndpointAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceEndpointAssociationId component. */
	readonly resourceEndpointAssociationId: string;
}

/**
 * Properties for building a ResourceGateway ARN.
 */
export interface VPCLatticeResourceGatewayArnProps {
	/** The ResourceGatewayId component of the ARN. */
	readonly resourceGatewayId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ResourceGateway ARN.
 */
export interface VPCLatticeResourceGatewayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceGatewayId component. */
	readonly resourceGatewayId: string;
}

/**
 * Properties for building a Rule ARN.
 */
export interface VPCLatticeRuleArnProps {
	/** The ServiceId component of the ARN. */
	readonly serviceId: string;
	/** The ListenerId component of the ARN. */
	readonly listenerId: string;
	/** The RuleId component of the ARN. */
	readonly ruleId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Rule ARN.
 */
export interface VPCLatticeRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceId component. */
	readonly serviceId: string;
	/** The ListenerId component. */
	readonly listenerId: string;
	/** The RuleId component. */
	readonly ruleId: string;
}

/**
 * Properties for building a Service ARN.
 */
export interface VPCLatticeServiceArnProps {
	/** The ServiceId component of the ARN. */
	readonly serviceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Service ARN.
 */
export interface VPCLatticeServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceId component. */
	readonly serviceId: string;
}

/**
 * Properties for building a ServiceNetwork ARN.
 */
export interface VPCLatticeServiceNetworkArnProps {
	/** The ServiceNetworkId component of the ARN. */
	readonly serviceNetworkId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ServiceNetwork ARN.
 */
export interface VPCLatticeServiceNetworkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceNetworkId component. */
	readonly serviceNetworkId: string;
}

/**
 * Properties for building a ServiceNetworkResourceAssociation ARN.
 */
export interface VPCLatticeServiceNetworkResourceAssociationArnProps {
	/** The ServiceNetworkResourceAssociationId component of the ARN. */
	readonly serviceNetworkResourceAssociationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ServiceNetworkResourceAssociation ARN.
 */
export interface VPCLatticeServiceNetworkResourceAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceNetworkResourceAssociationId component. */
	readonly serviceNetworkResourceAssociationId: string;
}

/**
 * Properties for building a ServiceNetworkServiceAssociation ARN.
 */
export interface VPCLatticeServiceNetworkServiceAssociationArnProps {
	/** The ServiceNetworkServiceAssociationId component of the ARN. */
	readonly serviceNetworkServiceAssociationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ServiceNetworkServiceAssociation ARN.
 */
export interface VPCLatticeServiceNetworkServiceAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceNetworkServiceAssociationId component. */
	readonly serviceNetworkServiceAssociationId: string;
}

/**
 * Properties for building a ServiceNetworkVpcAssociation ARN.
 */
export interface VPCLatticeServiceNetworkVPCAssociationArnProps {
	/** The ServiceNetworkVpcAssociationId component of the ARN. */
	readonly serviceNetworkVPCAssociationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ServiceNetworkVpcAssociation ARN.
 */
export interface VPCLatticeServiceNetworkVPCAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceNetworkVpcAssociationId component. */
	readonly serviceNetworkVPCAssociationId: string;
}

/**
 * Properties for building a TargetGroup ARN.
 */
export interface VPCLatticeTargetGroupArnProps {
	/** The TargetGroupId component of the ARN. */
	readonly targetGroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a TargetGroup ARN.
 */
export interface VPCLatticeTargetGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TargetGroupId component. */
	readonly targetGroupId: string;
}

const AccessLogSubscriptionArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):accesslogsubscription\/(?<accessLogSubscriptionId>[^:/?]+)$/;
const DomainVerificationArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):domainverification\/(?<domainVerificationId>[^:/?]+)$/;
const ListenerArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):service\/(?<serviceId>[^:/?]+)\/listener\/(?<listenerId>[^:/?]+)$/;
const ResourceConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):resourceconfiguration\/(?<resourceConfigurationId>[^:/?]+)$/;
const ResourceEndpointAssociationArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):resourceendpointassociation\/(?<resourceEndpointAssociationId>[^:/?]+)$/;
const ResourceGatewayArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):resourcegateway\/(?<resourceGatewayId>[^:/?]+)$/;
const RuleArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):service\/(?<serviceId>[^:/?]+)\/listener\/(?<listenerId>[^:/?]+)\/rule\/(?<ruleId>[^:/?]+)$/;
const ServiceArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):service\/(?<serviceId>[^:/?]+)$/;
const ServiceNetworkArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):servicenetwork\/(?<serviceNetworkId>[^:/?]+)$/;
const ServiceNetworkResourceAssociationArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):servicenetworkresourceassociation\/(?<serviceNetworkResourceAssociationId>[^:/?]+)$/;
const ServiceNetworkServiceAssociationArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):servicenetworkserviceassociation\/(?<serviceNetworkServiceAssociationId>[^:/?]+)$/;
const ServiceNetworkVPCAssociationArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):servicenetworkvpcassociation\/(?<serviceNetworkVPCAssociationId>[^:/?]+)$/;
const TargetGroupArnRegex =
	/^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):targetgroup\/(?<targetGroupId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for vpc-lattice resources.
 */
export class VPCLatticeResources {
	/**
	 * Builds an ARN for the AccessLogSubscription resource.
	 */
	static accessLogSubscription(
		props: VPCLatticeAccessLogSubscriptionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:accesslogsubscription/${props.accessLogSubscriptionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AccessLogSubscription resource.
	 */
	static isValidAccessLogSubscriptionArn(arn: string): boolean {
		return AccessLogSubscriptionArnRegex.test(arn);
	}

	/**
	 * Parses a AccessLogSubscription ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessLogSubscriptionArn(
		arn: string,
	): VPCLatticeAccessLogSubscriptionArnComponents {
		const match = AccessLogSubscriptionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AccessLogSubscription ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accessLogSubscriptionId: match.groups!.accessLogSubscriptionId,
		};
	}

	/**
	 * Builds an ARN for the DomainVerification resource.
	 */
	static domainVerification(
		props: VPCLatticeDomainVerificationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:domainverification/${props.domainVerificationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DomainVerification resource.
	 */
	static isValidDomainVerificationArn(arn: string): boolean {
		return DomainVerificationArnRegex.test(arn);
	}

	/**
	 * Parses a DomainVerification ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainVerificationArn(
		arn: string,
	): VPCLatticeDomainVerificationArnComponents {
		const match = DomainVerificationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DomainVerification ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainVerificationId: match.groups!.domainVerificationId,
		};
	}

	/**
	 * Builds an ARN for the Listener resource.
	 */
	static listener(props: VPCLatticeListenerArnProps): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceId}/listener/${props.listenerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Listener resource.
	 */
	static isValidListenerArn(arn: string): boolean {
		return ListenerArnRegex.test(arn);
	}

	/**
	 * Parses a Listener ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseListenerArn(arn: string): VPCLatticeListenerArnComponents {
		const match = ListenerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Listener ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceId: match.groups!.serviceId,
			listenerId: match.groups!.listenerId,
		};
	}

	/**
	 * Builds an ARN for the ResourceConfiguration resource.
	 */
	static resourceConfiguration(
		props: VPCLatticeResourceConfigurationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:resourceconfiguration/${props.resourceConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ResourceConfiguration resource.
	 */
	static isValidResourceConfigurationArn(arn: string): boolean {
		return ResourceConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a ResourceConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourceConfigurationArn(
		arn: string,
	): VPCLatticeResourceConfigurationArnComponents {
		const match = ResourceConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ResourceConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceConfigurationId: match.groups!.resourceConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the ResourceEndpointAssociation resource.
	 */
	static resourceEndpointAssociation(
		props: VPCLatticeResourceEndpointAssociationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:resourceendpointassociation/${props.resourceEndpointAssociationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ResourceEndpointAssociation resource.
	 */
	static isValidResourceEndpointAssociationArn(arn: string): boolean {
		return ResourceEndpointAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a ResourceEndpointAssociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourceEndpointAssociationArn(
		arn: string,
	): VPCLatticeResourceEndpointAssociationArnComponents {
		const match = ResourceEndpointAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ResourceEndpointAssociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceEndpointAssociationId:
				match.groups!.resourceEndpointAssociationId,
		};
	}

	/**
	 * Builds an ARN for the ResourceGateway resource.
	 */
	static resourceGateway(props: VPCLatticeResourceGatewayArnProps): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:resourcegateway/${props.resourceGatewayId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ResourceGateway resource.
	 */
	static isValidResourceGatewayArn(arn: string): boolean {
		return ResourceGatewayArnRegex.test(arn);
	}

	/**
	 * Parses a ResourceGateway ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourceGatewayArn(
		arn: string,
	): VPCLatticeResourceGatewayArnComponents {
		const match = ResourceGatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ResourceGateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceGatewayId: match.groups!.resourceGatewayId,
		};
	}

	/**
	 * Builds an ARN for the Rule resource.
	 */
	static rule(props: VPCLatticeRuleArnProps): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceId}/listener/${props.listenerId}/rule/${props.ruleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Rule resource.
	 */
	static isValidRuleArn(arn: string): boolean {
		return RuleArnRegex.test(arn);
	}

	/**
	 * Parses a Rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRuleArn(arn: string): VPCLatticeRuleArnComponents {
		const match = RuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceId: match.groups!.serviceId,
			listenerId: match.groups!.listenerId,
			ruleId: match.groups!.ruleId,
		};
	}

	/**
	 * Builds an ARN for the Service resource.
	 */
	static service(props: VPCLatticeServiceArnProps): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Service resource.
	 */
	static isValidServiceArn(arn: string): boolean {
		return ServiceArnRegex.test(arn);
	}

	/**
	 * Parses a Service ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceArn(arn: string): VPCLatticeServiceArnComponents {
		const match = ServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceId: match.groups!.serviceId,
		};
	}

	/**
	 * Builds an ARN for the ServiceNetwork resource.
	 */
	static serviceNetwork(props: VPCLatticeServiceNetworkArnProps): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:servicenetwork/${props.serviceNetworkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ServiceNetwork resource.
	 */
	static isValidServiceNetworkArn(arn: string): boolean {
		return ServiceNetworkArnRegex.test(arn);
	}

	/**
	 * Parses a ServiceNetwork ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceNetworkArn(
		arn: string,
	): VPCLatticeServiceNetworkArnComponents {
		const match = ServiceNetworkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ServiceNetwork ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceNetworkId: match.groups!.serviceNetworkId,
		};
	}

	/**
	 * Builds an ARN for the ServiceNetworkResourceAssociation resource.
	 */
	static serviceNetworkResourceAssociation(
		props: VPCLatticeServiceNetworkResourceAssociationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:servicenetworkresourceassociation/${props.serviceNetworkResourceAssociationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ServiceNetworkResourceAssociation resource.
	 */
	static isValidServiceNetworkResourceAssociationArn(arn: string): boolean {
		return ServiceNetworkResourceAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a ServiceNetworkResourceAssociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceNetworkResourceAssociationArn(
		arn: string,
	): VPCLatticeServiceNetworkResourceAssociationArnComponents {
		const match = ServiceNetworkResourceAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ServiceNetworkResourceAssociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceNetworkResourceAssociationId:
				match.groups!.serviceNetworkResourceAssociationId,
		};
	}

	/**
	 * Builds an ARN for the ServiceNetworkServiceAssociation resource.
	 */
	static serviceNetworkServiceAssociation(
		props: VPCLatticeServiceNetworkServiceAssociationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:servicenetworkserviceassociation/${props.serviceNetworkServiceAssociationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ServiceNetworkServiceAssociation resource.
	 */
	static isValidServiceNetworkServiceAssociationArn(arn: string): boolean {
		return ServiceNetworkServiceAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a ServiceNetworkServiceAssociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceNetworkServiceAssociationArn(
		arn: string,
	): VPCLatticeServiceNetworkServiceAssociationArnComponents {
		const match = ServiceNetworkServiceAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ServiceNetworkServiceAssociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceNetworkServiceAssociationId:
				match.groups!.serviceNetworkServiceAssociationId,
		};
	}

	/**
	 * Builds an ARN for the ServiceNetworkVpcAssociation resource.
	 */
	static serviceNetworkVPCAssociation(
		props: VPCLatticeServiceNetworkVPCAssociationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:servicenetworkvpcassociation/${props.serviceNetworkVPCAssociationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ServiceNetworkVpcAssociation resource.
	 */
	static isValidServiceNetworkVPCAssociationArn(arn: string): boolean {
		return ServiceNetworkVPCAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a ServiceNetworkVpcAssociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceNetworkVPCAssociationArn(
		arn: string,
	): VPCLatticeServiceNetworkVPCAssociationArnComponents {
		const match = ServiceNetworkVPCAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ServiceNetworkVpcAssociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceNetworkVPCAssociationId:
				match.groups!.serviceNetworkVPCAssociationId,
		};
	}

	/**
	 * Builds an ARN for the TargetGroup resource.
	 */
	static targetGroup(props: VPCLatticeTargetGroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:targetgroup/${props.targetGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the TargetGroup resource.
	 */
	static isValidTargetGroupArn(arn: string): boolean {
		return TargetGroupArnRegex.test(arn);
	}

	/**
	 * Parses a TargetGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTargetGroupArn(arn: string): VPCLatticeTargetGroupArnComponents {
		const match = TargetGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid TargetGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			targetGroupId: match.groups!.targetGroupId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for vpc-lattice.
 */
export class VPCLatticeOperations {
	/** IAM actions required for the BatchUpdateRule API call. */
	static readonly BatchUpdateRule: string[] = ["vpc-lattice:UpdateRule"];
	/** IAM actions required for the CreateAccessLogSubscription API call. */
	static readonly CreateAccessLogSubscription: string[] = [
		"vpc-lattice:CreateAccessLogSubscription",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateListener API call. */
	static readonly CreateListener: string[] = [
		"vpc-lattice:CreateListener",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateResourceConfiguration API call. */
	static readonly CreateResourceConfiguration: string[] = [
		"vpc-lattice:CreateResourceConfiguration",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateResourceGateway API call. */
	static readonly CreateResourceGateway: string[] = [
		"vpc-lattice:CreateResourceGateway",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateRule API call. */
	static readonly CreateRule: string[] = [
		"vpc-lattice:CreateRule",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CreateService: string[] = [
		"vpc-lattice:CreateService",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateServiceNetwork API call. */
	static readonly CreateServiceNetwork: string[] = [
		"vpc-lattice:CreateServiceNetwork",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateServiceNetworkResourceAssociation API call. */
	static readonly CreateServiceNetworkResourceAssociation: string[] = [
		"vpc-lattice:AssociateViaAWSService",
		"vpc-lattice:AssociateViaAWSService-EventsAndStates",
		"vpc-lattice:CreateServiceNetworkResourceAssociation",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateServiceNetworkServiceAssociation API call. */
	static readonly CreateServiceNetworkServiceAssociation: string[] = [
		"vpc-lattice:CreateServiceNetworkServiceAssociation",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateServiceNetworkVpcAssociation API call. */
	static readonly CreateServiceNetworkVpcAssociation: string[] = [
		"vpc-lattice:CreateServiceNetworkVpcAssociation",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateTargetGroup API call. */
	static readonly CreateTargetGroup: string[] = [
		"vpc-lattice:CreateTargetGroup",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the DeleteAccessLogSubscription API call. */
	static readonly DeleteAccessLogSubscription: string[] = [
		"vpc-lattice:DeleteAccessLogSubscription",
	];
	/** IAM actions required for the DeleteAuthPolicy API call. */
	static readonly DeleteAuthPolicy: string[] = ["vpc-lattice:DeleteAuthPolicy"];
	/** IAM actions required for the DeleteDomainVerification API call. */
	static readonly DeleteDomainVerification: string[] = [
		"vpc-lattice:DeleteDomainVerification",
	];
	/** IAM actions required for the DeleteListener API call. */
	static readonly DeleteListener: string[] = ["vpc-lattice:DeleteListener"];
	/** IAM actions required for the DeleteResourceConfiguration API call. */
	static readonly DeleteResourceConfiguration: string[] = [
		"vpc-lattice:DeleteResourceConfiguration",
	];
	/** IAM actions required for the DeleteResourceEndpointAssociation API call. */
	static readonly DeleteResourceEndpointAssociation: string[] = [
		"vpc-lattice:DeleteResourceEndpointAssociation",
	];
	/** IAM actions required for the DeleteResourceGateway API call. */
	static readonly DeleteResourceGateway: string[] = [
		"vpc-lattice:DeleteResourceGateway",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"vpc-lattice:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DeleteRule: string[] = ["vpc-lattice:DeleteRule"];
	/** IAM actions required for the DeleteService API call. */
	static readonly DeleteService: string[] = ["vpc-lattice:DeleteService"];
	/** IAM actions required for the DeleteServiceNetwork API call. */
	static readonly DeleteServiceNetwork: string[] = [
		"vpc-lattice:DeleteServiceNetwork",
	];
	/** IAM actions required for the DeleteServiceNetworkResourceAssociation API call. */
	static readonly DeleteServiceNetworkResourceAssociation: string[] = [
		"vpc-lattice:DeleteServiceNetworkResourceAssociation",
	];
	/** IAM actions required for the DeleteServiceNetworkServiceAssociation API call. */
	static readonly DeleteServiceNetworkServiceAssociation: string[] = [
		"vpc-lattice:DeleteServiceNetworkServiceAssociation",
	];
	/** IAM actions required for the DeleteServiceNetworkVpcAssociation API call. */
	static readonly DeleteServiceNetworkVpcAssociation: string[] = [
		"vpc-lattice:DeleteServiceNetworkVpcAssociation",
	];
	/** IAM actions required for the DeleteTargetGroup API call. */
	static readonly DeleteTargetGroup: string[] = [
		"vpc-lattice:DeleteTargetGroup",
	];
	/** IAM actions required for the DeregisterTargets API call. */
	static readonly DeregisterTargets: string[] = [
		"vpc-lattice:DeregisterTargets",
	];
	/** IAM actions required for the GetAccessLogSubscription API call. */
	static readonly opGetAccessLogSubscription: string[] = [
		"vpc-lattice:GetAccessLogSubscription",
	];
	/** IAM actions required for the GetAuthPolicy API call. */
	static readonly opGetAuthPolicy: string[] = ["vpc-lattice:GetAuthPolicy"];
	/** IAM actions required for the GetDomainVerification API call. */
	static readonly opGetDomainVerification: string[] = [
		"vpc-lattice:GetDomainVerification",
	];
	/** IAM actions required for the GetListener API call. */
	static readonly opGetListener: string[] = ["vpc-lattice:GetListener"];
	/** IAM actions required for the GetResourceConfiguration API call. */
	static readonly opGetResourceConfiguration: string[] = [
		"vpc-lattice:GetResourceConfiguration",
	];
	/** IAM actions required for the GetResourceGateway API call. */
	static readonly opGetResourceGateway: string[] = [
		"vpc-lattice:GetResourceGateway",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"vpc-lattice:GetResourcePolicy",
	];
	/** IAM actions required for the GetRule API call. */
	static readonly opGetRule: string[] = ["vpc-lattice:GetRule"];
	/** IAM actions required for the GetService API call. */
	static readonly opGetService: string[] = ["vpc-lattice:GetService"];
	/** IAM actions required for the GetServiceNetwork API call. */
	static readonly opGetServiceNetwork: string[] = [
		"vpc-lattice:GetServiceNetwork",
	];
	/** IAM actions required for the GetServiceNetworkResourceAssociation API call. */
	static readonly opGetServiceNetworkResourceAssociation: string[] = [
		"vpc-lattice:GetServiceNetworkResourceAssociation",
	];
	/** IAM actions required for the GetServiceNetworkServiceAssociation API call. */
	static readonly opGetServiceNetworkServiceAssociation: string[] = [
		"vpc-lattice:GetServiceNetworkServiceAssociation",
	];
	/** IAM actions required for the GetServiceNetworkVpcAssociation API call. */
	static readonly opGetServiceNetworkVpcAssociation: string[] = [
		"vpc-lattice:GetServiceNetworkVpcAssociation",
	];
	/** IAM actions required for the GetTargetGroup API call. */
	static readonly opGetTargetGroup: string[] = ["vpc-lattice:GetTargetGroup"];
	/** IAM actions required for the ListAccessLogSubscriptions API call. */
	static readonly ListAccessLogSubscriptions: string[] = [
		"vpc-lattice:ListAccessLogSubscriptions",
	];
	/** IAM actions required for the ListDomainVerifications API call. */
	static readonly ListDomainVerifications: string[] = [
		"vpc-lattice:ListDomainVerifications",
	];
	/** IAM actions required for the ListListeners API call. */
	static readonly ListListeners: string[] = ["vpc-lattice:ListListeners"];
	/** IAM actions required for the ListResourceConfigurations API call. */
	static readonly ListResourceConfigurations: string[] = [
		"vpc-lattice:ListResourceConfigurations",
	];
	/** IAM actions required for the ListResourceEndpointAssociations API call. */
	static readonly ListResourceEndpointAssociations: string[] = [
		"vpc-lattice:ListResourceEndpointAssociations",
	];
	/** IAM actions required for the ListResourceGateways API call. */
	static readonly ListResourceGateways: string[] = [
		"vpc-lattice:ListResourceGateways",
	];
	/** IAM actions required for the ListRules API call. */
	static readonly ListRules: string[] = ["vpc-lattice:ListRules"];
	/** IAM actions required for the ListServiceNetworkResourceAssociations API call. */
	static readonly ListServiceNetworkResourceAssociations: string[] = [
		"vpc-lattice:ListServiceNetworkResourceAssociations",
	];
	/** IAM actions required for the ListServiceNetworkServiceAssociations API call. */
	static readonly ListServiceNetworkServiceAssociations: string[] = [
		"vpc-lattice:ListServiceNetworkServiceAssociations",
	];
	/** IAM actions required for the ListServiceNetworkVpcAssociations API call. */
	static readonly ListServiceNetworkVpcAssociations: string[] = [
		"vpc-lattice:ListServiceNetworkVpcAssociations",
	];
	/** IAM actions required for the ListServiceNetworkVpcEndpointAssociations API call. */
	static readonly ListServiceNetworkVpcEndpointAssociations: string[] = [
		"vpc-lattice:ListServiceNetworkVpcEndpointAssociations",
	];
	/** IAM actions required for the ListServiceNetworks API call. */
	static readonly ListServiceNetworks: string[] = [
		"vpc-lattice:ListServiceNetworks",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly ListServices: string[] = ["vpc-lattice:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"vpc-lattice:ListTagsForResource",
	];
	/** IAM actions required for the ListTargetGroups API call. */
	static readonly ListTargetGroups: string[] = ["vpc-lattice:ListTargetGroups"];
	/** IAM actions required for the ListTargets API call. */
	static readonly ListTargets: string[] = ["vpc-lattice:ListTargets"];
	/** IAM actions required for the PutAuthPolicy API call. */
	static readonly PutAuthPolicy: string[] = ["vpc-lattice:PutAuthPolicy"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"vpc-lattice:PutResourcePolicy",
	];
	/** IAM actions required for the RegisterTargets API call. */
	static readonly RegisterTargets: string[] = ["vpc-lattice:RegisterTargets"];
	/** IAM actions required for the StartDomainVerification API call. */
	static readonly StartDomainVerification: string[] = [
		"vpc-lattice:StartDomainVerification",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["vpc-lattice:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["vpc-lattice:UntagResource"];
	/** IAM actions required for the UpdateAccessLogSubscription API call. */
	static readonly UpdateAccessLogSubscription: string[] = [
		"vpc-lattice:UpdateAccessLogSubscription",
	];
	/** IAM actions required for the UpdateListener API call. */
	static readonly UpdateListener: string[] = ["vpc-lattice:UpdateListener"];
	/** IAM actions required for the UpdateResourceConfiguration API call. */
	static readonly UpdateResourceConfiguration: string[] = [
		"vpc-lattice:UpdateResourceConfiguration",
	];
	/** IAM actions required for the UpdateResourceGateway API call. */
	static readonly UpdateResourceGateway: string[] = [
		"vpc-lattice:UpdateResourceGateway",
	];
	/** IAM actions required for the UpdateRule API call. */
	static readonly UpdateRule: string[] = ["vpc-lattice:UpdateRule"];
	/** IAM actions required for the UpdateService API call. */
	static readonly UpdateService: string[] = ["vpc-lattice:UpdateService"];
	/** IAM actions required for the UpdateServiceNetwork API call. */
	static readonly UpdateServiceNetwork: string[] = [
		"vpc-lattice:UpdateServiceNetwork",
	];
	/** IAM actions required for the UpdateServiceNetworkVpcAssociation API call. */
	static readonly UpdateServiceNetworkVpcAssociation: string[] = [
		"vpc-lattice:UpdateServiceNetworkVpcAssociation",
	];
	/** IAM actions required for the UpdateTargetGroup API call. */
	static readonly UpdateTargetGroup: string[] = [
		"vpc-lattice:UpdateTargetGroup",
	];
}

/**
 * Condition key constants and builders for vpc-lattice.
 */
export class VPCLatticeConditions {
	/** Condition keys applicable to the CreateAccessLogSubscription action. */
	static readonly CreateAccessLogSubscriptionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateListener action. */
	static readonly CreateListenerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:Protocol",
		"vpc-lattice:TargetGroupArns",
	];
	/** Condition keys applicable to the CreateResourceConfiguration action. */
	static readonly CreateResourceConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResourceGateway action. */
	static readonly CreateResourceGatewayConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:VpcId",
	];
	/** Condition keys applicable to the CreateRule action. */
	static readonly CreateRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:TargetGroupArns",
	];
	/** Condition keys applicable to the CreateService action. */
	static readonly CreateServiceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:AuthType",
	];
	/** Condition keys applicable to the CreateServiceNetwork action. */
	static readonly CreateServiceNetworkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:AuthType",
	];
	/** Condition keys applicable to the CreateServiceNetworkResourceAssociation action. */
	static readonly CreateServiceNetworkResourceAssociationConditionKeys: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"vpc-lattice:ResourceConfigurationArn",
			"vpc-lattice:ServiceNetworkArn",
		];
	/** Condition keys applicable to the CreateServiceNetworkServiceAssociation action. */
	static readonly CreateServiceNetworkServiceAssociationConditionKeys: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"vpc-lattice:ServiceArn",
			"vpc-lattice:ServiceNetworkArn",
		];
	/** Condition keys applicable to the CreateServiceNetworkVpcAssociation action. */
	static readonly CreateServiceNetworkVpcAssociationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:PrivateDnsPreference",
		"vpc-lattice:PrivateDnsSpecifiedDomains",
		"vpc-lattice:SecurityGroupIds",
		"vpc-lattice:ServiceNetworkArn",
		"vpc-lattice:VpcId",
	];
	/** Condition keys applicable to the CreateTargetGroup action. */
	static readonly CreateTargetGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:VpcId",
	];
	/** Condition keys applicable to the DeleteAccessLogSubscription action. */
	static readonly DeleteAccessLogSubscriptionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteDomainVerification action. */
	static readonly DeleteDomainVerificationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteListener action. */
	static readonly DeleteListenerConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourceConfiguration action. */
	static readonly DeleteResourceConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourceEndpointAssociation action. */
	static readonly DeleteResourceEndpointAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourceGateway action. */
	static readonly DeleteResourceGatewayConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteRule action. */
	static readonly DeleteRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteService action. */
	static readonly DeleteServiceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteServiceNetwork action. */
	static readonly DeleteServiceNetworkConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteServiceNetworkResourceAssociation action. */
	static readonly DeleteServiceNetworkResourceAssociationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteServiceNetworkServiceAssociation action. */
	static readonly DeleteServiceNetworkServiceAssociationConditionKeys: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"vpc-lattice:ServiceArn",
			"vpc-lattice:ServiceNetworkArn",
		];
	/** Condition keys applicable to the DeleteServiceNetworkVpcAssociation action. */
	static readonly DeleteServiceNetworkVpcAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"vpc-lattice:ServiceNetworkArn",
		"vpc-lattice:VpcId",
	];
	/** Condition keys applicable to the DeleteTargetGroup action. */
	static readonly DeleteTargetGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAccessLogSubscription action. */
	static readonly actionGetAccessLogSubscriptionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDomainVerification action. */
	static readonly actionGetDomainVerificationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetListener action. */
	static readonly actionGetListenerConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetResourceConfiguration action. */
	static readonly actionGetResourceConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetResourceGateway action. */
	static readonly actionGetResourceGatewayConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetRule action. */
	static readonly actionGetRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetService action. */
	static readonly actionGetServiceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetServiceNetwork action. */
	static readonly actionGetServiceNetworkConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetServiceNetworkResourceAssociation action. */
	static readonly actionGetServiceNetworkResourceAssociationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetServiceNetworkServiceAssociation action. */
	static readonly actionGetServiceNetworkServiceAssociationConditionKeys: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"vpc-lattice:ServiceArn",
			"vpc-lattice:ServiceNetworkArn",
		];
	/** Condition keys applicable to the GetServiceNetworkVpcAssociation action. */
	static readonly actionGetServiceNetworkVpcAssociationConditionKeys: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"vpc-lattice:ServiceNetworkArn",
			"vpc-lattice:VpcId",
		];
	/** Condition keys applicable to the GetTargetGroup action. */
	static readonly actionGetTargetGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListResourceEndpointAssociations action. */
	static readonly ListResourceEndpointAssociationsConditionKeys: string[] = [
		"vpc-lattice:ResourceConfigurationArn",
		"vpc-lattice:VpcEndpointId",
	];
	/** Condition keys applicable to the ListServiceNetworkServiceAssociations action. */
	static readonly ListServiceNetworkServiceAssociationsConditionKeys: string[] =
		["vpc-lattice:ServiceArn", "vpc-lattice:ServiceNetworkArn"];
	/** Condition keys applicable to the ListServiceNetworkVpcAssociations action. */
	static readonly ListServiceNetworkVpcAssociationsConditionKeys: string[] = [
		"vpc-lattice:ServiceNetworkArn",
		"vpc-lattice:VpcId",
	];
	/** Condition keys applicable to the StartDomainVerification action. */
	static readonly StartDomainVerificationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:DomainName",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:CreateAction",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAccessLogSubscription action. */
	static readonly UpdateAccessLogSubscriptionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateListener action. */
	static readonly UpdateListenerConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"vpc-lattice:TargetGroupArns",
	];
	/** Condition keys applicable to the UpdateResourceConfiguration action. */
	static readonly UpdateResourceConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateResourceGateway action. */
	static readonly UpdateResourceGatewayConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"vpc-lattice:SecurityGroupIds",
	];
	/** Condition keys applicable to the UpdateRule action. */
	static readonly UpdateRuleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"vpc-lattice:TargetGroupArns",
	];
	/** Condition keys applicable to the UpdateService action. */
	static readonly UpdateServiceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"vpc-lattice:AuthType",
	];
	/** Condition keys applicable to the UpdateServiceNetwork action. */
	static readonly UpdateServiceNetworkConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"vpc-lattice:AuthType",
	];
	/** Condition keys applicable to the UpdateServiceNetworkVpcAssociation action. */
	static readonly UpdateServiceNetworkVpcAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:SecurityGroupIds",
		"vpc-lattice:ServiceNetworkArn",
		"vpc-lattice:VpcId",
	];
	/** Condition keys applicable to the UpdateTargetGroup action. */
	static readonly UpdateTargetGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: vpc-lattice:AuthType (String) */
	static readonly AUTH_TYPE = "vpc-lattice:AuthType";
	/** Condition key: vpc-lattice:CreateAction (String) */
	static readonly CREATE_ACTION = "vpc-lattice:CreateAction";
	/** Condition key: vpc-lattice:DomainName (String) */
	static readonly DOMAIN_NAME = "vpc-lattice:DomainName";
	/** Condition key: vpc-lattice:PrivateDnsPreference (String) */
	static readonly PRIVATE_DNS_PREFERENCE = "vpc-lattice:PrivateDnsPreference";
	/** Condition key: vpc-lattice:PrivateDnsSpecifiedDomains (ArrayOfString) */
	static readonly PRIVATE_DNS_SPECIFIED_DOMAINS =
		"vpc-lattice:PrivateDnsSpecifiedDomains";
	/** Condition key: vpc-lattice:Protocol (String) */
	static readonly PROTOCOL = "vpc-lattice:Protocol";
	/** Condition key: vpc-lattice:ResourceConfigurationArn (ARN) */
	static readonly RESOURCE_CONFIGURATION_ARN =
		"vpc-lattice:ResourceConfigurationArn";
	/** Condition key: vpc-lattice:SecurityGroupIds (ArrayOfString) */
	static readonly SECURITY_GROUP_IDS = "vpc-lattice:SecurityGroupIds";
	/** Condition key: vpc-lattice:ServiceArn (ARN) */
	static readonly SERVICE_ARN = "vpc-lattice:ServiceArn";
	/** Condition key: vpc-lattice:ServiceNetworkArn (ARN) */
	static readonly SERVICE_NETWORK_ARN = "vpc-lattice:ServiceNetworkArn";
	/** Condition key: vpc-lattice:TargetGroupArns (ArrayOfARN) */
	static readonly TARGET_GROUP_ARNS = "vpc-lattice:TargetGroupArns";
	/** Condition key: vpc-lattice:VpcEndpointId (String) */
	static readonly VPC_ENDPOINT_ID = "vpc-lattice:VpcEndpointId";
	/** Condition key: vpc-lattice:VpcId (String) */
	static readonly VPC_ID = "vpc-lattice:VpcId";

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
	 * Generates a condition block for `vpc-lattice:AuthType`.
	 */
	static authType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "vpc-lattice:AuthType": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice:CreateAction`.
	 */
	static createAction(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "vpc-lattice:CreateAction": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice:DomainName`.
	 */
	static domainName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "vpc-lattice:DomainName": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice:PrivateDnsPreference`.
	 */
	static privateDNSPreference(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "vpc-lattice:PrivateDnsPreference": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice:PrivateDnsSpecifiedDomains`.
	 */
	static privateDNSSpecifiedDomains(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"vpc-lattice:PrivateDnsSpecifiedDomains": values,
			},
		};
	}

	/**
	 * Generates a condition block for `vpc-lattice:Protocol`.
	 */
	static protocol(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "vpc-lattice:Protocol": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice:ResourceConfigurationArn`.
	 */
	static resourceConfigurationARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "vpc-lattice:ResourceConfigurationArn": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice:SecurityGroupIds`.
	 */
	static securityGroupIds(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "vpc-lattice:SecurityGroupIds": values },
		};
	}

	/**
	 * Generates a condition block for `vpc-lattice:ServiceArn`.
	 */
	static serviceARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "vpc-lattice:ServiceArn": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice:ServiceNetworkArn`.
	 */
	static serviceNetworkARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "vpc-lattice:ServiceNetworkArn": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice:TargetGroupArns`.
	 */
	static targetGroupArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": { "vpc-lattice:TargetGroupArns": values },
		};
	}

	/**
	 * Generates a condition block for `vpc-lattice:VpcEndpointId`.
	 */
	static vpcEndpointId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "vpc-lattice:VpcEndpointId": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice:VpcId`.
	 */
	static vpcId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "vpc-lattice:VpcId": value } };
	}
}
