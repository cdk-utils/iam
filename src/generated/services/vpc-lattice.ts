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
	static readonly ASSOCIATE_VIA_AWS_SERVICE =
		"vpc-lattice:AssociateViaAWSService";
	/** [PermissionManagement] vpc-lattice:AssociateViaAWSService-EventsAndStates */
	static readonly ASSOCIATE_VIA_AWS_SERVICE_EVENTS_AND_STATES =
		"vpc-lattice:AssociateViaAWSService-EventsAndStates";
	/** [Write] vpc-lattice:CreateAccessLogSubscription */
	static readonly CREATE_ACCESS_LOG_SUBSCRIPTION =
		"vpc-lattice:CreateAccessLogSubscription";
	/** [Write] vpc-lattice:CreateListener */
	static readonly CREATE_LISTENER = "vpc-lattice:CreateListener";
	/** [Write] vpc-lattice:CreateResourceConfiguration */
	static readonly CREATE_RESOURCE_CONFIGURATION =
		"vpc-lattice:CreateResourceConfiguration";
	/** [Write] vpc-lattice:CreateResourceGateway */
	static readonly CREATE_RESOURCE_GATEWAY = "vpc-lattice:CreateResourceGateway";
	/** [Write] vpc-lattice:CreateRule */
	static readonly CREATE_RULE = "vpc-lattice:CreateRule";
	/** [Write] vpc-lattice:CreateService */
	static readonly CREATE_SERVICE = "vpc-lattice:CreateService";
	/** [Write] vpc-lattice:CreateServiceNetwork */
	static readonly CREATE_SERVICE_NETWORK = "vpc-lattice:CreateServiceNetwork";
	/** [Write] vpc-lattice:CreateServiceNetworkResourceAssociation */
	static readonly CREATE_SERVICE_NETWORK_RESOURCE_ASSOCIATION =
		"vpc-lattice:CreateServiceNetworkResourceAssociation";
	/** [Write] vpc-lattice:CreateServiceNetworkServiceAssociation */
	static readonly CREATE_SERVICE_NETWORK_SERVICE_ASSOCIATION =
		"vpc-lattice:CreateServiceNetworkServiceAssociation";
	/** [Write] vpc-lattice:CreateServiceNetworkVpcAssociation */
	static readonly CREATE_SERVICE_NETWORK_VPC_ASSOCIATION =
		"vpc-lattice:CreateServiceNetworkVpcAssociation";
	/** [PermissionManagement] vpc-lattice:CreateServiceNetworkVpcEndpointAssociation */
	static readonly CREATE_SERVICE_NETWORK_VPC_ENDPOINT_ASSOCIATION =
		"vpc-lattice:CreateServiceNetworkVpcEndpointAssociation";
	/** [Write] vpc-lattice:CreateTargetGroup */
	static readonly CREATE_TARGET_GROUP = "vpc-lattice:CreateTargetGroup";
	/** [Write] vpc-lattice:DeleteAccessLogSubscription */
	static readonly DELETE_ACCESS_LOG_SUBSCRIPTION =
		"vpc-lattice:DeleteAccessLogSubscription";
	/** [PermissionManagement] vpc-lattice:DeleteAuthPolicy */
	static readonly DELETE_AUTH_POLICY = "vpc-lattice:DeleteAuthPolicy";
	/** [Write] vpc-lattice:DeleteDomainVerification */
	static readonly DELETE_DOMAIN_VERIFICATION =
		"vpc-lattice:DeleteDomainVerification";
	/** [Write] vpc-lattice:DeleteListener */
	static readonly DELETE_LISTENER = "vpc-lattice:DeleteListener";
	/** [Write] vpc-lattice:DeleteResourceConfiguration */
	static readonly DELETE_RESOURCE_CONFIGURATION =
		"vpc-lattice:DeleteResourceConfiguration";
	/** [Write] vpc-lattice:DeleteResourceEndpointAssociation */
	static readonly DELETE_RESOURCE_ENDPOINT_ASSOCIATION =
		"vpc-lattice:DeleteResourceEndpointAssociation";
	/** [Write] vpc-lattice:DeleteResourceGateway */
	static readonly DELETE_RESOURCE_GATEWAY = "vpc-lattice:DeleteResourceGateway";
	/** [Write] vpc-lattice:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "vpc-lattice:DeleteResourcePolicy";
	/** [Write] vpc-lattice:DeleteRule */
	static readonly DELETE_RULE = "vpc-lattice:DeleteRule";
	/** [Write] vpc-lattice:DeleteService */
	static readonly DELETE_SERVICE = "vpc-lattice:DeleteService";
	/** [Write] vpc-lattice:DeleteServiceNetwork */
	static readonly DELETE_SERVICE_NETWORK = "vpc-lattice:DeleteServiceNetwork";
	/** [Write] vpc-lattice:DeleteServiceNetworkResourceAssociation */
	static readonly DELETE_SERVICE_NETWORK_RESOURCE_ASSOCIATION =
		"vpc-lattice:DeleteServiceNetworkResourceAssociation";
	/** [Write] vpc-lattice:DeleteServiceNetworkServiceAssociation */
	static readonly DELETE_SERVICE_NETWORK_SERVICE_ASSOCIATION =
		"vpc-lattice:DeleteServiceNetworkServiceAssociation";
	/** [Write] vpc-lattice:DeleteServiceNetworkVpcAssociation */
	static readonly DELETE_SERVICE_NETWORK_VPC_ASSOCIATION =
		"vpc-lattice:DeleteServiceNetworkVpcAssociation";
	/** [Write] vpc-lattice:DeleteTargetGroup */
	static readonly DELETE_TARGET_GROUP = "vpc-lattice:DeleteTargetGroup";
	/** [Write] vpc-lattice:DeregisterTargets */
	static readonly DEREGISTER_TARGETS = "vpc-lattice:DeregisterTargets";
	/** [Read] vpc-lattice:GetAccessLogSubscription */
	static readonly GET_ACCESS_LOG_SUBSCRIPTION =
		"vpc-lattice:GetAccessLogSubscription";
	/** [Read] vpc-lattice:GetAuthPolicy */
	static readonly GET_AUTH_POLICY = "vpc-lattice:GetAuthPolicy";
	/** [Read] vpc-lattice:GetDomainVerification */
	static readonly GET_DOMAIN_VERIFICATION = "vpc-lattice:GetDomainVerification";
	/** [Read] vpc-lattice:GetListener */
	static readonly GET_LISTENER = "vpc-lattice:GetListener";
	/** [Read] vpc-lattice:GetResourceConfiguration */
	static readonly GET_RESOURCE_CONFIGURATION =
		"vpc-lattice:GetResourceConfiguration";
	/** [Read] vpc-lattice:GetResourceGateway */
	static readonly GET_RESOURCE_GATEWAY = "vpc-lattice:GetResourceGateway";
	/** [Read] vpc-lattice:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "vpc-lattice:GetResourcePolicy";
	/** [Read] vpc-lattice:GetRule */
	static readonly GET_RULE = "vpc-lattice:GetRule";
	/** [Read] vpc-lattice:GetService */
	static readonly GET_SERVICE = "vpc-lattice:GetService";
	/** [Read] vpc-lattice:GetServiceNetwork */
	static readonly GET_SERVICE_NETWORK = "vpc-lattice:GetServiceNetwork";
	/** [Read] vpc-lattice:GetServiceNetworkResourceAssociation */
	static readonly GET_SERVICE_NETWORK_RESOURCE_ASSOCIATION =
		"vpc-lattice:GetServiceNetworkResourceAssociation";
	/** [Read] vpc-lattice:GetServiceNetworkServiceAssociation */
	static readonly GET_SERVICE_NETWORK_SERVICE_ASSOCIATION =
		"vpc-lattice:GetServiceNetworkServiceAssociation";
	/** [Read] vpc-lattice:GetServiceNetworkVpcAssociation */
	static readonly GET_SERVICE_NETWORK_VPC_ASSOCIATION =
		"vpc-lattice:GetServiceNetworkVpcAssociation";
	/** [Read] vpc-lattice:GetTargetGroup */
	static readonly GET_TARGET_GROUP = "vpc-lattice:GetTargetGroup";
	/** [List] vpc-lattice:ListAccessLogSubscriptions */
	static readonly LIST_ACCESS_LOG_SUBSCRIPTIONS =
		"vpc-lattice:ListAccessLogSubscriptions";
	/** [List] vpc-lattice:ListDomainVerifications */
	static readonly LIST_DOMAIN_VERIFICATIONS =
		"vpc-lattice:ListDomainVerifications";
	/** [List] vpc-lattice:ListListeners */
	static readonly LIST_LISTENERS = "vpc-lattice:ListListeners";
	/** [List] vpc-lattice:ListResourceConfigurations */
	static readonly LIST_RESOURCE_CONFIGURATIONS =
		"vpc-lattice:ListResourceConfigurations";
	/** [List] vpc-lattice:ListResourceEndpointAssociations */
	static readonly LIST_RESOURCE_ENDPOINT_ASSOCIATIONS =
		"vpc-lattice:ListResourceEndpointAssociations";
	/** [List] vpc-lattice:ListResourceGateways */
	static readonly LIST_RESOURCE_GATEWAYS = "vpc-lattice:ListResourceGateways";
	/** [List] vpc-lattice:ListRules */
	static readonly LIST_RULES = "vpc-lattice:ListRules";
	/** [List] vpc-lattice:ListServiceNetworkResourceAssociations */
	static readonly LIST_SERVICE_NETWORK_RESOURCE_ASSOCIATIONS =
		"vpc-lattice:ListServiceNetworkResourceAssociations";
	/** [List] vpc-lattice:ListServiceNetworkServiceAssociations */
	static readonly LIST_SERVICE_NETWORK_SERVICE_ASSOCIATIONS =
		"vpc-lattice:ListServiceNetworkServiceAssociations";
	/** [List] vpc-lattice:ListServiceNetworkVpcAssociations */
	static readonly LIST_SERVICE_NETWORK_VPC_ASSOCIATIONS =
		"vpc-lattice:ListServiceNetworkVpcAssociations";
	/** [List] vpc-lattice:ListServiceNetworkVpcEndpointAssociations */
	static readonly LIST_SERVICE_NETWORK_VPC_ENDPOINT_ASSOCIATIONS =
		"vpc-lattice:ListServiceNetworkVpcEndpointAssociations";
	/** [List] vpc-lattice:ListServiceNetworks */
	static readonly LIST_SERVICE_NETWORKS = "vpc-lattice:ListServiceNetworks";
	/** [List] vpc-lattice:ListServices */
	static readonly LIST_SERVICES = "vpc-lattice:ListServices";
	/** [Read] vpc-lattice:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "vpc-lattice:ListTagsForResource";
	/** [List] vpc-lattice:ListTargetGroups */
	static readonly LIST_TARGET_GROUPS = "vpc-lattice:ListTargetGroups";
	/** [List] vpc-lattice:ListTargets */
	static readonly LIST_TARGETS = "vpc-lattice:ListTargets";
	/** [PermissionManagement] vpc-lattice:PutAuthPolicy */
	static readonly PUT_AUTH_POLICY = "vpc-lattice:PutAuthPolicy";
	/** [Write] vpc-lattice:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "vpc-lattice:PutResourcePolicy";
	/** [Write] vpc-lattice:RegisterTargets */
	static readonly REGISTER_TARGETS = "vpc-lattice:RegisterTargets";
	/** [Write] vpc-lattice:StartDomainVerification */
	static readonly START_DOMAIN_VERIFICATION =
		"vpc-lattice:StartDomainVerification";
	/** [Tagging] vpc-lattice:TagResource */
	static readonly TAG_RESOURCE = "vpc-lattice:TagResource";
	/** [Tagging] vpc-lattice:UntagResource */
	static readonly UNTAG_RESOURCE = "vpc-lattice:UntagResource";
	/** [Write] vpc-lattice:UpdateAccessLogSubscription */
	static readonly UPDATE_ACCESS_LOG_SUBSCRIPTION =
		"vpc-lattice:UpdateAccessLogSubscription";
	/** [Write] vpc-lattice:UpdateListener */
	static readonly UPDATE_LISTENER = "vpc-lattice:UpdateListener";
	/** [Write] vpc-lattice:UpdateResourceConfiguration */
	static readonly UPDATE_RESOURCE_CONFIGURATION =
		"vpc-lattice:UpdateResourceConfiguration";
	/** [Write] vpc-lattice:UpdateResourceGateway */
	static readonly UPDATE_RESOURCE_GATEWAY = "vpc-lattice:UpdateResourceGateway";
	/** [Write] vpc-lattice:UpdateRule */
	static readonly UPDATE_RULE = "vpc-lattice:UpdateRule";
	/** [Write] vpc-lattice:UpdateService */
	static readonly UPDATE_SERVICE = "vpc-lattice:UpdateService";
	/** [Write] vpc-lattice:UpdateServiceNetwork */
	static readonly UPDATE_SERVICE_NETWORK = "vpc-lattice:UpdateServiceNetwork";
	/** [Write] vpc-lattice:UpdateServiceNetworkVpcAssociation */
	static readonly UPDATE_SERVICE_NETWORK_VPC_ASSOCIATION =
		"vpc-lattice:UpdateServiceNetworkVpcAssociation";
	/** [Write] vpc-lattice:UpdateTargetGroup */
	static readonly UPDATE_TARGET_GROUP = "vpc-lattice:UpdateTargetGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		VPCLatticeActions.GET_ACCESS_LOG_SUBSCRIPTION,
		VPCLatticeActions.GET_AUTH_POLICY,
		VPCLatticeActions.GET_DOMAIN_VERIFICATION,
		VPCLatticeActions.GET_LISTENER,
		VPCLatticeActions.GET_RESOURCE_CONFIGURATION,
		VPCLatticeActions.GET_RESOURCE_GATEWAY,
		VPCLatticeActions.GET_RESOURCE_POLICY,
		VPCLatticeActions.GET_RULE,
		VPCLatticeActions.GET_SERVICE,
		VPCLatticeActions.GET_SERVICE_NETWORK,
		VPCLatticeActions.GET_SERVICE_NETWORK_RESOURCE_ASSOCIATION,
		VPCLatticeActions.GET_SERVICE_NETWORK_SERVICE_ASSOCIATION,
		VPCLatticeActions.GET_SERVICE_NETWORK_VPC_ASSOCIATION,
		VPCLatticeActions.GET_TARGET_GROUP,
		VPCLatticeActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		VPCLatticeActions.CREATE_ACCESS_LOG_SUBSCRIPTION,
		VPCLatticeActions.CREATE_LISTENER,
		VPCLatticeActions.CREATE_RESOURCE_CONFIGURATION,
		VPCLatticeActions.CREATE_RESOURCE_GATEWAY,
		VPCLatticeActions.CREATE_RULE,
		VPCLatticeActions.CREATE_SERVICE,
		VPCLatticeActions.CREATE_SERVICE_NETWORK,
		VPCLatticeActions.CREATE_SERVICE_NETWORK_RESOURCE_ASSOCIATION,
		VPCLatticeActions.CREATE_SERVICE_NETWORK_SERVICE_ASSOCIATION,
		VPCLatticeActions.CREATE_SERVICE_NETWORK_VPC_ASSOCIATION,
		VPCLatticeActions.CREATE_TARGET_GROUP,
		VPCLatticeActions.DELETE_ACCESS_LOG_SUBSCRIPTION,
		VPCLatticeActions.DELETE_DOMAIN_VERIFICATION,
		VPCLatticeActions.DELETE_LISTENER,
		VPCLatticeActions.DELETE_RESOURCE_CONFIGURATION,
		VPCLatticeActions.DELETE_RESOURCE_ENDPOINT_ASSOCIATION,
		VPCLatticeActions.DELETE_RESOURCE_GATEWAY,
		VPCLatticeActions.DELETE_RESOURCE_POLICY,
		VPCLatticeActions.DELETE_RULE,
		VPCLatticeActions.DELETE_SERVICE,
		VPCLatticeActions.DELETE_SERVICE_NETWORK,
		VPCLatticeActions.DELETE_SERVICE_NETWORK_RESOURCE_ASSOCIATION,
		VPCLatticeActions.DELETE_SERVICE_NETWORK_SERVICE_ASSOCIATION,
		VPCLatticeActions.DELETE_SERVICE_NETWORK_VPC_ASSOCIATION,
		VPCLatticeActions.DELETE_TARGET_GROUP,
		VPCLatticeActions.DEREGISTER_TARGETS,
		VPCLatticeActions.PUT_RESOURCE_POLICY,
		VPCLatticeActions.REGISTER_TARGETS,
		VPCLatticeActions.START_DOMAIN_VERIFICATION,
		VPCLatticeActions.UPDATE_ACCESS_LOG_SUBSCRIPTION,
		VPCLatticeActions.UPDATE_LISTENER,
		VPCLatticeActions.UPDATE_RESOURCE_CONFIGURATION,
		VPCLatticeActions.UPDATE_RESOURCE_GATEWAY,
		VPCLatticeActions.UPDATE_RULE,
		VPCLatticeActions.UPDATE_SERVICE,
		VPCLatticeActions.UPDATE_SERVICE_NETWORK,
		VPCLatticeActions.UPDATE_SERVICE_NETWORK_VPC_ASSOCIATION,
		VPCLatticeActions.UPDATE_TARGET_GROUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		VPCLatticeActions.LIST_ACCESS_LOG_SUBSCRIPTIONS,
		VPCLatticeActions.LIST_DOMAIN_VERIFICATIONS,
		VPCLatticeActions.LIST_LISTENERS,
		VPCLatticeActions.LIST_RESOURCE_CONFIGURATIONS,
		VPCLatticeActions.LIST_RESOURCE_ENDPOINT_ASSOCIATIONS,
		VPCLatticeActions.LIST_RESOURCE_GATEWAYS,
		VPCLatticeActions.LIST_RULES,
		VPCLatticeActions.LIST_SERVICE_NETWORK_RESOURCE_ASSOCIATIONS,
		VPCLatticeActions.LIST_SERVICE_NETWORK_SERVICE_ASSOCIATIONS,
		VPCLatticeActions.LIST_SERVICE_NETWORK_VPC_ASSOCIATIONS,
		VPCLatticeActions.LIST_SERVICE_NETWORK_VPC_ENDPOINT_ASSOCIATIONS,
		VPCLatticeActions.LIST_SERVICE_NETWORKS,
		VPCLatticeActions.LIST_SERVICES,
		VPCLatticeActions.LIST_TARGET_GROUPS,
		VPCLatticeActions.LIST_TARGETS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		VPCLatticeActions.ASSOCIATE_VIA_AWS_SERVICE,
		VPCLatticeActions.ASSOCIATE_VIA_AWS_SERVICE_EVENTS_AND_STATES,
		VPCLatticeActions.CREATE_SERVICE_NETWORK_VPC_ENDPOINT_ASSOCIATION,
		VPCLatticeActions.DELETE_AUTH_POLICY,
		VPCLatticeActions.PUT_AUTH_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		VPCLatticeActions.TAG_RESOURCE,
		VPCLatticeActions.UNTAG_RESOURCE,
	];
}

const AccessLogSubscriptionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):accesslogsubscription/(?<accessLogSubscriptionId>[^:/?]+)$",
);
const DomainVerificationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):domainverification/(?<domainVerificationId>[^:/?]+)$",
);
const ListenerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):service/(?<serviceId>[^:/?]+)/listener/(?<listenerId>[^:/?]+)$",
);
const ResourceConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):resourceconfiguration/(?<resourceConfigurationId>[^:/?]+)$",
);
const ResourceEndpointAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):resourceendpointassociation/(?<resourceEndpointAssociationId>[^:/?]+)$",
);
const ResourceGatewayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):resourcegateway/(?<resourceGatewayId>[^:/?]+)$",
);
const RuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):service/(?<serviceId>[^:/?]+)/listener/(?<listenerId>[^:/?]+)/rule/(?<ruleId>[^:/?]+)$",
);
const ServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):service/(?<serviceId>[^:/?]+)$",
);
const ServiceNetworkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):servicenetwork/(?<serviceNetworkId>[^:/?]+)$",
);
const ServiceNetworkResourceAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):servicenetworkresourceassociation/(?<serviceNetworkResourceAssociationId>[^:/?]+)$",
);
const ServiceNetworkServiceAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):servicenetworkserviceassociation/(?<serviceNetworkServiceAssociationId>[^:/?]+)$",
);
const ServiceNetworkVPCAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):servicenetworkvpcassociation/(?<serviceNetworkVPCAssociationId>[^:/?]+)$",
);
const TargetGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):targetgroup/(?<targetGroupId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for vpc-lattice resources.
 */
export class VPCLatticeResources {
	/**
	 * Builds an ARN for the AccessLogSubscription resource.
	 */
	static accessLogSubscription(props: {
		/** The AccessLogSubscriptionId component of the ARN. */
		readonly accessLogSubscriptionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAccessLogSubscriptionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accessLogSubscriptionId: string;
	} {
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
	static domainVerification(props: {
		/** The DomainVerificationId component of the ARN. */
		readonly domainVerificationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDomainVerificationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainVerificationId: string;
	} {
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
	static listener(props: {
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
	}): string {
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
	static parseListenerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceId: string;
		listenerId: string;
	} {
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
	static resourceConfiguration(props: {
		/** The ResourceConfigurationId component of the ARN. */
		readonly resourceConfigurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseResourceConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceConfigurationId: string;
	} {
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
	static resourceEndpointAssociation(props: {
		/** The ResourceEndpointAssociationId component of the ARN. */
		readonly resourceEndpointAssociationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseResourceEndpointAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceEndpointAssociationId: string;
	} {
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
	static resourceGateway(props: {
		/** The ResourceGatewayId component of the ARN. */
		readonly resourceGatewayId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseResourceGatewayArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceGatewayId: string;
	} {
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
	static rule(props: {
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
	}): string {
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
	static parseRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceId: string;
		listenerId: string;
		ruleId: string;
	} {
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
	static service(props: {
		/** The ServiceId component of the ARN. */
		readonly serviceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceId: string;
	} {
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
	static serviceNetwork(props: {
		/** The ServiceNetworkId component of the ARN. */
		readonly serviceNetworkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseServiceNetworkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceNetworkId: string;
	} {
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
	static serviceNetworkResourceAssociation(props: {
		/** The ServiceNetworkResourceAssociationId component of the ARN. */
		readonly serviceNetworkResourceAssociationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseServiceNetworkResourceAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceNetworkResourceAssociationId: string;
	} {
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
	static serviceNetworkServiceAssociation(props: {
		/** The ServiceNetworkServiceAssociationId component of the ARN. */
		readonly serviceNetworkServiceAssociationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseServiceNetworkServiceAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceNetworkServiceAssociationId: string;
	} {
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
	static serviceNetworkVPCAssociation(props: {
		/** The ServiceNetworkVpcAssociationId component of the ARN. */
		readonly serviceNetworkVPCAssociationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseServiceNetworkVPCAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceNetworkVPCAssociationId: string;
	} {
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
	static targetGroup(props: {
		/** The TargetGroupId component of the ARN. */
		readonly targetGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTargetGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		targetGroupId: string;
	} {
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
	static readonly BATCH_UPDATE_RULE: string[] = ["vpc-lattice:UpdateRule"];
	/** IAM actions required for the CreateAccessLogSubscription API call. */
	static readonly CREATE_ACCESS_LOG_SUBSCRIPTION: string[] = [
		"vpc-lattice:CreateAccessLogSubscription",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateListener API call. */
	static readonly CREATE_LISTENER: string[] = [
		"vpc-lattice:CreateListener",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateResourceConfiguration API call. */
	static readonly CREATE_RESOURCE_CONFIGURATION: string[] = [
		"vpc-lattice:CreateResourceConfiguration",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateResourceGateway API call. */
	static readonly CREATE_RESOURCE_GATEWAY: string[] = [
		"vpc-lattice:CreateResourceGateway",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateRule API call. */
	static readonly CREATE_RULE: string[] = [
		"vpc-lattice:CreateRule",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CREATE_SERVICE: string[] = [
		"vpc-lattice:CreateService",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateServiceNetwork API call. */
	static readonly CREATE_SERVICE_NETWORK: string[] = [
		"vpc-lattice:CreateServiceNetwork",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateServiceNetworkResourceAssociation API call. */
	static readonly CREATE_SERVICE_NETWORK_RESOURCE_ASSOCIATION: string[] = [
		"vpc-lattice:AssociateViaAWSService",
		"vpc-lattice:AssociateViaAWSService-EventsAndStates",
		"vpc-lattice:CreateServiceNetworkResourceAssociation",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateServiceNetworkServiceAssociation API call. */
	static readonly CREATE_SERVICE_NETWORK_SERVICE_ASSOCIATION: string[] = [
		"vpc-lattice:CreateServiceNetworkServiceAssociation",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateServiceNetworkVpcAssociation API call. */
	static readonly CREATE_SERVICE_NETWORK_VPC_ASSOCIATION: string[] = [
		"vpc-lattice:CreateServiceNetworkVpcAssociation",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the CreateTargetGroup API call. */
	static readonly CREATE_TARGET_GROUP: string[] = [
		"vpc-lattice:CreateTargetGroup",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the DeleteAccessLogSubscription API call. */
	static readonly DELETE_ACCESS_LOG_SUBSCRIPTION: string[] = [
		"vpc-lattice:DeleteAccessLogSubscription",
	];
	/** IAM actions required for the DeleteAuthPolicy API call. */
	static readonly DELETE_AUTH_POLICY: string[] = [
		"vpc-lattice:DeleteAuthPolicy",
	];
	/** IAM actions required for the DeleteDomainVerification API call. */
	static readonly DELETE_DOMAIN_VERIFICATION: string[] = [
		"vpc-lattice:DeleteDomainVerification",
	];
	/** IAM actions required for the DeleteListener API call. */
	static readonly DELETE_LISTENER: string[] = ["vpc-lattice:DeleteListener"];
	/** IAM actions required for the DeleteResourceConfiguration API call. */
	static readonly DELETE_RESOURCE_CONFIGURATION: string[] = [
		"vpc-lattice:DeleteResourceConfiguration",
	];
	/** IAM actions required for the DeleteResourceEndpointAssociation API call. */
	static readonly DELETE_RESOURCE_ENDPOINT_ASSOCIATION: string[] = [
		"vpc-lattice:DeleteResourceEndpointAssociation",
	];
	/** IAM actions required for the DeleteResourceGateway API call. */
	static readonly DELETE_RESOURCE_GATEWAY: string[] = [
		"vpc-lattice:DeleteResourceGateway",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"vpc-lattice:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DELETE_RULE: string[] = ["vpc-lattice:DeleteRule"];
	/** IAM actions required for the DeleteService API call. */
	static readonly DELETE_SERVICE: string[] = ["vpc-lattice:DeleteService"];
	/** IAM actions required for the DeleteServiceNetwork API call. */
	static readonly DELETE_SERVICE_NETWORK: string[] = [
		"vpc-lattice:DeleteServiceNetwork",
	];
	/** IAM actions required for the DeleteServiceNetworkResourceAssociation API call. */
	static readonly DELETE_SERVICE_NETWORK_RESOURCE_ASSOCIATION: string[] = [
		"vpc-lattice:DeleteServiceNetworkResourceAssociation",
	];
	/** IAM actions required for the DeleteServiceNetworkServiceAssociation API call. */
	static readonly DELETE_SERVICE_NETWORK_SERVICE_ASSOCIATION: string[] = [
		"vpc-lattice:DeleteServiceNetworkServiceAssociation",
	];
	/** IAM actions required for the DeleteServiceNetworkVpcAssociation API call. */
	static readonly DELETE_SERVICE_NETWORK_VPC_ASSOCIATION: string[] = [
		"vpc-lattice:DeleteServiceNetworkVpcAssociation",
	];
	/** IAM actions required for the DeleteTargetGroup API call. */
	static readonly DELETE_TARGET_GROUP: string[] = [
		"vpc-lattice:DeleteTargetGroup",
	];
	/** IAM actions required for the DeregisterTargets API call. */
	static readonly DEREGISTER_TARGETS: string[] = [
		"vpc-lattice:DeregisterTargets",
	];
	/** IAM actions required for the GetAccessLogSubscription API call. */
	static readonly GET_ACCESS_LOG_SUBSCRIPTION: string[] = [
		"vpc-lattice:GetAccessLogSubscription",
	];
	/** IAM actions required for the GetAuthPolicy API call. */
	static readonly GET_AUTH_POLICY: string[] = ["vpc-lattice:GetAuthPolicy"];
	/** IAM actions required for the GetDomainVerification API call. */
	static readonly GET_DOMAIN_VERIFICATION: string[] = [
		"vpc-lattice:GetDomainVerification",
	];
	/** IAM actions required for the GetListener API call. */
	static readonly GET_LISTENER: string[] = ["vpc-lattice:GetListener"];
	/** IAM actions required for the GetResourceConfiguration API call. */
	static readonly GET_RESOURCE_CONFIGURATION: string[] = [
		"vpc-lattice:GetResourceConfiguration",
	];
	/** IAM actions required for the GetResourceGateway API call. */
	static readonly GET_RESOURCE_GATEWAY: string[] = [
		"vpc-lattice:GetResourceGateway",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [
		"vpc-lattice:GetResourcePolicy",
	];
	/** IAM actions required for the GetRule API call. */
	static readonly GET_RULE: string[] = ["vpc-lattice:GetRule"];
	/** IAM actions required for the GetService API call. */
	static readonly GET_SERVICE: string[] = ["vpc-lattice:GetService"];
	/** IAM actions required for the GetServiceNetwork API call. */
	static readonly GET_SERVICE_NETWORK: string[] = [
		"vpc-lattice:GetServiceNetwork",
	];
	/** IAM actions required for the GetServiceNetworkResourceAssociation API call. */
	static readonly GET_SERVICE_NETWORK_RESOURCE_ASSOCIATION: string[] = [
		"vpc-lattice:GetServiceNetworkResourceAssociation",
	];
	/** IAM actions required for the GetServiceNetworkServiceAssociation API call. */
	static readonly GET_SERVICE_NETWORK_SERVICE_ASSOCIATION: string[] = [
		"vpc-lattice:GetServiceNetworkServiceAssociation",
	];
	/** IAM actions required for the GetServiceNetworkVpcAssociation API call. */
	static readonly GET_SERVICE_NETWORK_VPC_ASSOCIATION: string[] = [
		"vpc-lattice:GetServiceNetworkVpcAssociation",
	];
	/** IAM actions required for the GetTargetGroup API call. */
	static readonly GET_TARGET_GROUP: string[] = ["vpc-lattice:GetTargetGroup"];
	/** IAM actions required for the ListAccessLogSubscriptions API call. */
	static readonly LIST_ACCESS_LOG_SUBSCRIPTIONS: string[] = [
		"vpc-lattice:ListAccessLogSubscriptions",
	];
	/** IAM actions required for the ListDomainVerifications API call. */
	static readonly LIST_DOMAIN_VERIFICATIONS: string[] = [
		"vpc-lattice:ListDomainVerifications",
	];
	/** IAM actions required for the ListListeners API call. */
	static readonly LIST_LISTENERS: string[] = ["vpc-lattice:ListListeners"];
	/** IAM actions required for the ListResourceConfigurations API call. */
	static readonly LIST_RESOURCE_CONFIGURATIONS: string[] = [
		"vpc-lattice:ListResourceConfigurations",
	];
	/** IAM actions required for the ListResourceEndpointAssociations API call. */
	static readonly LIST_RESOURCE_ENDPOINT_ASSOCIATIONS: string[] = [
		"vpc-lattice:ListResourceEndpointAssociations",
	];
	/** IAM actions required for the ListResourceGateways API call. */
	static readonly LIST_RESOURCE_GATEWAYS: string[] = [
		"vpc-lattice:ListResourceGateways",
	];
	/** IAM actions required for the ListRules API call. */
	static readonly LIST_RULES: string[] = ["vpc-lattice:ListRules"];
	/** IAM actions required for the ListServiceNetworkResourceAssociations API call. */
	static readonly LIST_SERVICE_NETWORK_RESOURCE_ASSOCIATIONS: string[] = [
		"vpc-lattice:ListServiceNetworkResourceAssociations",
	];
	/** IAM actions required for the ListServiceNetworkServiceAssociations API call. */
	static readonly LIST_SERVICE_NETWORK_SERVICE_ASSOCIATIONS: string[] = [
		"vpc-lattice:ListServiceNetworkServiceAssociations",
	];
	/** IAM actions required for the ListServiceNetworkVpcAssociations API call. */
	static readonly LIST_SERVICE_NETWORK_VPC_ASSOCIATIONS: string[] = [
		"vpc-lattice:ListServiceNetworkVpcAssociations",
	];
	/** IAM actions required for the ListServiceNetworkVpcEndpointAssociations API call. */
	static readonly LIST_SERVICE_NETWORK_VPC_ENDPOINT_ASSOCIATIONS: string[] = [
		"vpc-lattice:ListServiceNetworkVpcEndpointAssociations",
	];
	/** IAM actions required for the ListServiceNetworks API call. */
	static readonly LIST_SERVICE_NETWORKS: string[] = [
		"vpc-lattice:ListServiceNetworks",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly LIST_SERVICES: string[] = ["vpc-lattice:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"vpc-lattice:ListTagsForResource",
	];
	/** IAM actions required for the ListTargetGroups API call. */
	static readonly LIST_TARGET_GROUPS: string[] = [
		"vpc-lattice:ListTargetGroups",
	];
	/** IAM actions required for the ListTargets API call. */
	static readonly LIST_TARGETS: string[] = ["vpc-lattice:ListTargets"];
	/** IAM actions required for the PutAuthPolicy API call. */
	static readonly PUT_AUTH_POLICY: string[] = ["vpc-lattice:PutAuthPolicy"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"vpc-lattice:PutResourcePolicy",
	];
	/** IAM actions required for the RegisterTargets API call. */
	static readonly REGISTER_TARGETS: string[] = ["vpc-lattice:RegisterTargets"];
	/** IAM actions required for the StartDomainVerification API call. */
	static readonly START_DOMAIN_VERIFICATION: string[] = [
		"vpc-lattice:StartDomainVerification",
		"vpc-lattice:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["vpc-lattice:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["vpc-lattice:UntagResource"];
	/** IAM actions required for the UpdateAccessLogSubscription API call. */
	static readonly UPDATE_ACCESS_LOG_SUBSCRIPTION: string[] = [
		"vpc-lattice:UpdateAccessLogSubscription",
	];
	/** IAM actions required for the UpdateListener API call. */
	static readonly UPDATE_LISTENER: string[] = ["vpc-lattice:UpdateListener"];
	/** IAM actions required for the UpdateResourceConfiguration API call. */
	static readonly UPDATE_RESOURCE_CONFIGURATION: string[] = [
		"vpc-lattice:UpdateResourceConfiguration",
	];
	/** IAM actions required for the UpdateResourceGateway API call. */
	static readonly UPDATE_RESOURCE_GATEWAY: string[] = [
		"vpc-lattice:UpdateResourceGateway",
	];
	/** IAM actions required for the UpdateRule API call. */
	static readonly UPDATE_RULE: string[] = ["vpc-lattice:UpdateRule"];
	/** IAM actions required for the UpdateService API call. */
	static readonly UPDATE_SERVICE: string[] = ["vpc-lattice:UpdateService"];
	/** IAM actions required for the UpdateServiceNetwork API call. */
	static readonly UPDATE_SERVICE_NETWORK: string[] = [
		"vpc-lattice:UpdateServiceNetwork",
	];
	/** IAM actions required for the UpdateServiceNetworkVpcAssociation API call. */
	static readonly UPDATE_SERVICE_NETWORK_VPC_ASSOCIATION: string[] = [
		"vpc-lattice:UpdateServiceNetworkVpcAssociation",
	];
	/** IAM actions required for the UpdateTargetGroup API call. */
	static readonly UPDATE_TARGET_GROUP: string[] = [
		"vpc-lattice:UpdateTargetGroup",
	];
}

/**
 * Condition key constants and builders for vpc-lattice.
 */
export class VPCLatticeConditions {
	/** Condition keys applicable to the CreateAccessLogSubscription action. */
	static readonly CREATE_ACCESS_LOG_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:CreateAction",
	];
	/** Condition keys applicable to the CreateListener action. */
	static readonly CREATE_LISTENER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:CreateAction",
		"vpc-lattice:Protocol",
		"vpc-lattice:TargetGroupArns",
	];
	/** Condition keys applicable to the CreateResourceConfiguration action. */
	static readonly CREATE_RESOURCE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:CreateAction",
	];
	/** Condition keys applicable to the CreateResourceGateway action. */
	static readonly CREATE_RESOURCE_GATEWAY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:CreateAction",
		"vpc-lattice:VpcId",
	];
	/** Condition keys applicable to the CreateRule action. */
	static readonly CREATE_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:CreateAction",
		"vpc-lattice:TargetGroupArns",
	];
	/** Condition keys applicable to the CreateService action. */
	static readonly CREATE_SERVICE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:AuthType",
		"vpc-lattice:CreateAction",
	];
	/** Condition keys applicable to the CreateServiceNetwork action. */
	static readonly CREATE_SERVICE_NETWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:AuthType",
		"vpc-lattice:CreateAction",
	];
	/** Condition keys applicable to the CreateServiceNetworkResourceAssociation action. */
	static readonly CREATE_SERVICE_NETWORK_RESOURCE_ASSOCIATION_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"vpc-lattice:CreateAction",
			"vpc-lattice:ResourceConfigurationArn",
			"vpc-lattice:ServiceNetworkArn",
		];
	/** Condition keys applicable to the CreateServiceNetworkServiceAssociation action. */
	static readonly CREATE_SERVICE_NETWORK_SERVICE_ASSOCIATION_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"vpc-lattice:CreateAction",
			"vpc-lattice:ServiceArn",
			"vpc-lattice:ServiceNetworkArn",
		];
	/** Condition keys applicable to the CreateServiceNetworkVpcAssociation action. */
	static readonly CREATE_SERVICE_NETWORK_VPC_ASSOCIATION_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"vpc-lattice:CreateAction",
			"vpc-lattice:PrivateDnsPreference",
			"vpc-lattice:PrivateDnsSpecifiedDomains",
			"vpc-lattice:SecurityGroupIds",
			"vpc-lattice:ServiceNetworkArn",
			"vpc-lattice:VpcId",
		];
	/** Condition keys applicable to the CreateTargetGroup action. */
	static readonly CREATE_TARGET_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:CreateAction",
		"vpc-lattice:VpcId",
	];
	/** Condition keys applicable to the DeleteAccessLogSubscription action. */
	static readonly DELETE_ACCESS_LOG_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteDomainVerification action. */
	static readonly DELETE_DOMAIN_VERIFICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteListener action. */
	static readonly DELETE_LISTENER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourceConfiguration action. */
	static readonly DELETE_RESOURCE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourceEndpointAssociation action. */
	static readonly DELETE_RESOURCE_ENDPOINT_ASSOCIATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteResourceGateway action. */
	static readonly DELETE_RESOURCE_GATEWAY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteRule action. */
	static readonly DELETE_RULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteService action. */
	static readonly DELETE_SERVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteServiceNetwork action. */
	static readonly DELETE_SERVICE_NETWORK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteServiceNetworkResourceAssociation action. */
	static readonly DELETE_SERVICE_NETWORK_RESOURCE_ASSOCIATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteServiceNetworkServiceAssociation action. */
	static readonly DELETE_SERVICE_NETWORK_SERVICE_ASSOCIATION_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"vpc-lattice:ServiceArn",
			"vpc-lattice:ServiceNetworkArn",
		];
	/** Condition keys applicable to the DeleteServiceNetworkVpcAssociation action. */
	static readonly DELETE_SERVICE_NETWORK_VPC_ASSOCIATION_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"vpc-lattice:ServiceNetworkArn",
			"vpc-lattice:VpcId",
		];
	/** Condition keys applicable to the DeleteTargetGroup action. */
	static readonly DELETE_TARGET_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAccessLogSubscription action. */
	static readonly GET_ACCESS_LOG_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDomainVerification action. */
	static readonly GET_DOMAIN_VERIFICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetListener action. */
	static readonly GET_LISTENER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetResourceConfiguration action. */
	static readonly GET_RESOURCE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetResourceGateway action. */
	static readonly GET_RESOURCE_GATEWAY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetRule action. */
	static readonly GET_RULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetService action. */
	static readonly GET_SERVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetServiceNetwork action. */
	static readonly GET_SERVICE_NETWORK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetServiceNetworkResourceAssociation action. */
	static readonly GET_SERVICE_NETWORK_RESOURCE_ASSOCIATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetServiceNetworkServiceAssociation action. */
	static readonly GET_SERVICE_NETWORK_SERVICE_ASSOCIATION_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"vpc-lattice:ServiceArn",
			"vpc-lattice:ServiceNetworkArn",
		];
	/** Condition keys applicable to the GetServiceNetworkVpcAssociation action. */
	static readonly GET_SERVICE_NETWORK_VPC_ASSOCIATION_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"vpc-lattice:ServiceNetworkArn",
			"vpc-lattice:VpcId",
		];
	/** Condition keys applicable to the GetTargetGroup action. */
	static readonly GET_TARGET_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListResourceEndpointAssociations action. */
	static readonly LIST_RESOURCE_ENDPOINT_ASSOCIATIONS_CONDITION_KEYS: string[] =
		["vpc-lattice:ResourceConfigurationArn", "vpc-lattice:VpcEndpointId"];
	/** Condition keys applicable to the ListServiceNetworkServiceAssociations action. */
	static readonly LIST_SERVICE_NETWORK_SERVICE_ASSOCIATIONS_CONDITION_KEYS: string[] =
		["vpc-lattice:ServiceArn", "vpc-lattice:ServiceNetworkArn"];
	/** Condition keys applicable to the ListServiceNetworkVpcAssociations action. */
	static readonly LIST_SERVICE_NETWORK_VPC_ASSOCIATIONS_CONDITION_KEYS: string[] =
		["vpc-lattice:ServiceNetworkArn", "vpc-lattice:VpcId"];
	/** Condition keys applicable to the StartDomainVerification action. */
	static readonly START_DOMAIN_VERIFICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"vpc-lattice:CreateAction",
		"vpc-lattice:DomainName",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAccessLogSubscription action. */
	static readonly UPDATE_ACCESS_LOG_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateListener action. */
	static readonly UPDATE_LISTENER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"vpc-lattice:TargetGroupArns",
	];
	/** Condition keys applicable to the UpdateResourceConfiguration action. */
	static readonly UPDATE_RESOURCE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateResourceGateway action. */
	static readonly UPDATE_RESOURCE_GATEWAY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"vpc-lattice:SecurityGroupIds",
	];
	/** Condition keys applicable to the UpdateRule action. */
	static readonly UPDATE_RULE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"vpc-lattice:TargetGroupArns",
	];
	/** Condition keys applicable to the UpdateService action. */
	static readonly UPDATE_SERVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"vpc-lattice:AuthType",
	];
	/** Condition keys applicable to the UpdateServiceNetwork action. */
	static readonly UPDATE_SERVICE_NETWORK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"vpc-lattice:AuthType",
	];
	/** Condition keys applicable to the UpdateServiceNetworkVpcAssociation action. */
	static readonly UPDATE_SERVICE_NETWORK_VPC_ASSOCIATION_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"aws:TagKeys",
			"vpc-lattice:SecurityGroupIds",
			"vpc-lattice:ServiceNetworkArn",
			"vpc-lattice:VpcId",
		];
	/** Condition keys applicable to the UpdateTargetGroup action. */
	static readonly UPDATE_TARGET_GROUP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
