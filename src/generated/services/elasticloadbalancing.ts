// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/elasticloadbalancing.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================


/**
 * IAM action constants for the elasticloadbalancing service.
 */
export class ElasticloadbalancingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "elasticloadbalancing";

	/** [Write] elasticloadbalancing:AddListenerCertificates */
	static readonly ADD_LISTENER_CERTIFICATES = "elasticloadbalancing:AddListenerCertificates";
	/** [Tagging] elasticloadbalancing:AddTags */
	static readonly ADD_TAGS = "elasticloadbalancing:AddTags";
	/** [Write] elasticloadbalancing:AddTrustStoreRevocations */
	static readonly ADD_TRUST_STORE_REVOCATIONS = "elasticloadbalancing:AddTrustStoreRevocations";
	/** [PermissionManagement] elasticloadbalancing:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE = "elasticloadbalancing:AllowVendedLogDeliveryForResource";
	/** [Write] elasticloadbalancing:ApplySecurityGroupsToLoadBalancer */
	static readonly APPLY_SECURITY_GROUPS_TO_LOAD_BALANCER = "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer";
	/** [Write] elasticloadbalancing:AttachLoadBalancerToSubnets */
	static readonly ATTACH_LOAD_BALANCER_TO_SUBNETS = "elasticloadbalancing:AttachLoadBalancerToSubnets";
	/** [Write] elasticloadbalancing:ConfigureHealthCheck */
	static readonly CONFIGURE_HEALTH_CHECK = "elasticloadbalancing:ConfigureHealthCheck";
	/** [Write] elasticloadbalancing:CreateAppCookieStickinessPolicy */
	static readonly CREATE_APP_COOKIE_STICKINESS_POLICY = "elasticloadbalancing:CreateAppCookieStickinessPolicy";
	/** [Write] elasticloadbalancing:CreateLBCookieStickinessPolicy */
	static readonly CREATE_LB_COOKIE_STICKINESS_POLICY = "elasticloadbalancing:CreateLBCookieStickinessPolicy";
	/** [Write] elasticloadbalancing:CreateListener */
	static readonly CREATE_LISTENER = "elasticloadbalancing:CreateListener";
	/** [Write] elasticloadbalancing:CreateLoadBalancer */
	static readonly CREATE_LOAD_BALANCER = "elasticloadbalancing:CreateLoadBalancer";
	/** [Write] elasticloadbalancing:CreateLoadBalancerListeners */
	static readonly CREATE_LOAD_BALANCER_LISTENERS = "elasticloadbalancing:CreateLoadBalancerListeners";
	/** [Write] elasticloadbalancing:CreateLoadBalancerPolicy */
	static readonly CREATE_LOAD_BALANCER_POLICY = "elasticloadbalancing:CreateLoadBalancerPolicy";
	/** [Write] elasticloadbalancing:CreateRule */
	static readonly CREATE_RULE = "elasticloadbalancing:CreateRule";
	/** [Write] elasticloadbalancing:CreateTargetGroup */
	static readonly CREATE_TARGET_GROUP = "elasticloadbalancing:CreateTargetGroup";
	/** [Write] elasticloadbalancing:CreateTrustStore */
	static readonly CREATE_TRUST_STORE = "elasticloadbalancing:CreateTrustStore";
	/** [Write] elasticloadbalancing:CreateWebACLAssociation */
	static readonly CREATE_WEB_ACL_ASSOCIATION = "elasticloadbalancing:CreateWebACLAssociation";
	/** [Write] elasticloadbalancing:DeleteListener */
	static readonly DELETE_LISTENER = "elasticloadbalancing:DeleteListener";
	/** [Write] elasticloadbalancing:DeleteLoadBalancer */
	static readonly DELETE_LOAD_BALANCER = "elasticloadbalancing:DeleteLoadBalancer";
	/** [Write] elasticloadbalancing:DeleteLoadBalancerListeners */
	static readonly DELETE_LOAD_BALANCER_LISTENERS = "elasticloadbalancing:DeleteLoadBalancerListeners";
	/** [Write] elasticloadbalancing:DeleteLoadBalancerPolicy */
	static readonly DELETE_LOAD_BALANCER_POLICY = "elasticloadbalancing:DeleteLoadBalancerPolicy";
	/** [Write] elasticloadbalancing:DeleteRule */
	static readonly DELETE_RULE = "elasticloadbalancing:DeleteRule";
	/** [Write] elasticloadbalancing:DeleteSharedTrustStoreAssociation */
	static readonly DELETE_SHARED_TRUST_STORE_ASSOCIATION = "elasticloadbalancing:DeleteSharedTrustStoreAssociation";
	/** [Write] elasticloadbalancing:DeleteTargetGroup */
	static readonly DELETE_TARGET_GROUP = "elasticloadbalancing:DeleteTargetGroup";
	/** [Write] elasticloadbalancing:DeleteTrustStore */
	static readonly DELETE_TRUST_STORE = "elasticloadbalancing:DeleteTrustStore";
	/** [Write] elasticloadbalancing:DeleteWebACLAssociation */
	static readonly DELETE_WEB_ACL_ASSOCIATION = "elasticloadbalancing:DeleteWebACLAssociation";
	/** [Write] elasticloadbalancing:DeregisterInstancesFromLoadBalancer */
	static readonly DEREGISTER_INSTANCES_FROM_LOAD_BALANCER = "elasticloadbalancing:DeregisterInstancesFromLoadBalancer";
	/** [Write] elasticloadbalancing:DeregisterTargets */
	static readonly DEREGISTER_TARGETS = "elasticloadbalancing:DeregisterTargets";
	/** [Read] elasticloadbalancing:DescribeAccountLimits */
	static readonly DESCRIBE_ACCOUNT_LIMITS = "elasticloadbalancing:DescribeAccountLimits";
	/** [Read] elasticloadbalancing:DescribeCapacityReservation */
	static readonly DESCRIBE_CAPACITY_RESERVATION = "elasticloadbalancing:DescribeCapacityReservation";
	/** [Read] elasticloadbalancing:DescribeInstanceHealth */
	static readonly DESCRIBE_INSTANCE_HEALTH = "elasticloadbalancing:DescribeInstanceHealth";
	/** [Read] elasticloadbalancing:DescribeListenerAttributes */
	static readonly DESCRIBE_LISTENER_ATTRIBUTES = "elasticloadbalancing:DescribeListenerAttributes";
	/** [Read] elasticloadbalancing:DescribeListenerCertificates */
	static readonly DESCRIBE_LISTENER_CERTIFICATES = "elasticloadbalancing:DescribeListenerCertificates";
	/** [Read] elasticloadbalancing:DescribeListeners */
	static readonly DESCRIBE_LISTENERS = "elasticloadbalancing:DescribeListeners";
	/** [Read] elasticloadbalancing:DescribeLoadBalancerAttributes */
	static readonly DESCRIBE_LOAD_BALANCER_ATTRIBUTES = "elasticloadbalancing:DescribeLoadBalancerAttributes";
	/** [Read] elasticloadbalancing:DescribeLoadBalancerPolicies */
	static readonly DESCRIBE_LOAD_BALANCER_POLICIES = "elasticloadbalancing:DescribeLoadBalancerPolicies";
	/** [Read] elasticloadbalancing:DescribeLoadBalancerPolicyTypes */
	static readonly DESCRIBE_LOAD_BALANCER_POLICY_TYPES = "elasticloadbalancing:DescribeLoadBalancerPolicyTypes";
	/** [List] elasticloadbalancing:DescribeLoadBalancers */
	static readonly DESCRIBE_LOAD_BALANCERS = "elasticloadbalancing:DescribeLoadBalancers";
	/** [Read] elasticloadbalancing:DescribeRules */
	static readonly DESCRIBE_RULES = "elasticloadbalancing:DescribeRules";
	/** [Read] elasticloadbalancing:DescribeSSLPolicies */
	static readonly DESCRIBE_SSL_POLICIES = "elasticloadbalancing:DescribeSSLPolicies";
	/** [Read] elasticloadbalancing:DescribeTags */
	static readonly DESCRIBE_TAGS = "elasticloadbalancing:DescribeTags";
	/** [Read] elasticloadbalancing:DescribeTargetGroupAttributes */
	static readonly DESCRIBE_TARGET_GROUP_ATTRIBUTES = "elasticloadbalancing:DescribeTargetGroupAttributes";
	/** [Read] elasticloadbalancing:DescribeTargetGroups */
	static readonly DESCRIBE_TARGET_GROUPS = "elasticloadbalancing:DescribeTargetGroups";
	/** [Read] elasticloadbalancing:DescribeTargetHealth */
	static readonly DESCRIBE_TARGET_HEALTH = "elasticloadbalancing:DescribeTargetHealth";
	/** [Read] elasticloadbalancing:DescribeTrustStoreAssociations */
	static readonly DESCRIBE_TRUST_STORE_ASSOCIATIONS = "elasticloadbalancing:DescribeTrustStoreAssociations";
	/** [Read] elasticloadbalancing:DescribeTrustStoreRevocations */
	static readonly DESCRIBE_TRUST_STORE_REVOCATIONS = "elasticloadbalancing:DescribeTrustStoreRevocations";
	/** [Read] elasticloadbalancing:DescribeTrustStores */
	static readonly DESCRIBE_TRUST_STORES = "elasticloadbalancing:DescribeTrustStores";
	/** [List] elasticloadbalancing:DescribeWebACLAssociation */
	static readonly DESCRIBE_WEB_ACL_ASSOCIATION = "elasticloadbalancing:DescribeWebACLAssociation";
	/** [Write] elasticloadbalancing:DetachLoadBalancerFromSubnets */
	static readonly DETACH_LOAD_BALANCER_FROM_SUBNETS = "elasticloadbalancing:DetachLoadBalancerFromSubnets";
	/** [Write] elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer */
	static readonly DISABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER = "elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer";
	/** [Write] elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer */
	static readonly ENABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER = "elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer";
	/** [Read] elasticloadbalancing:GetLoadBalancerWebACL */
	static readonly GET_LOAD_BALANCER_WEB_ACL = "elasticloadbalancing:GetLoadBalancerWebACL";
	/** [Read] elasticloadbalancing:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "elasticloadbalancing:GetResourcePolicy";
	/** [Read] elasticloadbalancing:GetTrustStoreCaCertificatesBundle */
	static readonly GET_TRUST_STORE_CA_CERTIFICATES_BUNDLE = "elasticloadbalancing:GetTrustStoreCaCertificatesBundle";
	/** [Read] elasticloadbalancing:GetTrustStoreRevocationContent */
	static readonly GET_TRUST_STORE_REVOCATION_CONTENT = "elasticloadbalancing:GetTrustStoreRevocationContent";
	/** [Write] elasticloadbalancing:ModifyCapacityReservation */
	static readonly MODIFY_CAPACITY_RESERVATION = "elasticloadbalancing:ModifyCapacityReservation";
	/** [Write] elasticloadbalancing:ModifyIpPools */
	static readonly MODIFY_IP_POOLS = "elasticloadbalancing:ModifyIpPools";
	/** [Write] elasticloadbalancing:ModifyListener */
	static readonly MODIFY_LISTENER = "elasticloadbalancing:ModifyListener";
	/** [Write] elasticloadbalancing:ModifyListenerAttributes */
	static readonly MODIFY_LISTENER_ATTRIBUTES = "elasticloadbalancing:ModifyListenerAttributes";
	/** [Write] elasticloadbalancing:ModifyLoadBalancerAttributes */
	static readonly MODIFY_LOAD_BALANCER_ATTRIBUTES = "elasticloadbalancing:ModifyLoadBalancerAttributes";
	/** [Write] elasticloadbalancing:ModifyRule */
	static readonly MODIFY_RULE = "elasticloadbalancing:ModifyRule";
	/** [Write] elasticloadbalancing:ModifyTargetGroup */
	static readonly MODIFY_TARGET_GROUP = "elasticloadbalancing:ModifyTargetGroup";
	/** [Write] elasticloadbalancing:ModifyTargetGroupAttributes */
	static readonly MODIFY_TARGET_GROUP_ATTRIBUTES = "elasticloadbalancing:ModifyTargetGroupAttributes";
	/** [Write] elasticloadbalancing:ModifyTrustStore */
	static readonly MODIFY_TRUST_STORE = "elasticloadbalancing:ModifyTrustStore";
	/** [Write] elasticloadbalancing:RegisterInstancesWithLoadBalancer */
	static readonly REGISTER_INSTANCES_WITH_LOAD_BALANCER = "elasticloadbalancing:RegisterInstancesWithLoadBalancer";
	/** [Write] elasticloadbalancing:RegisterTargets */
	static readonly REGISTER_TARGETS = "elasticloadbalancing:RegisterTargets";
	/** [Write] elasticloadbalancing:RemoveListenerCertificates */
	static readonly REMOVE_LISTENER_CERTIFICATES = "elasticloadbalancing:RemoveListenerCertificates";
	/** [Tagging] elasticloadbalancing:RemoveTags */
	static readonly REMOVE_TAGS = "elasticloadbalancing:RemoveTags";
	/** [Write] elasticloadbalancing:RemoveTrustStoreRevocations */
	static readonly REMOVE_TRUST_STORE_REVOCATIONS = "elasticloadbalancing:RemoveTrustStoreRevocations";
	/** [Write] elasticloadbalancing:SetIpAddressType */
	static readonly SET_IP_ADDRESS_TYPE = "elasticloadbalancing:SetIpAddressType";
	/** [Write] elasticloadbalancing:SetLoadBalancerListenerSSLCertificate */
	static readonly SET_LOAD_BALANCER_LISTENER_SSL_CERTIFICATE = "elasticloadbalancing:SetLoadBalancerListenerSSLCertificate";
	/** [Write] elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer */
	static readonly SET_LOAD_BALANCER_POLICIES_FOR_BACKEND_SERVER = "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer";
	/** [Write] elasticloadbalancing:SetLoadBalancerPoliciesOfListener */
	static readonly SET_LOAD_BALANCER_POLICIES_OF_LISTENER = "elasticloadbalancing:SetLoadBalancerPoliciesOfListener";
	/** [Write] elasticloadbalancing:SetRulePriorities */
	static readonly SET_RULE_PRIORITIES = "elasticloadbalancing:SetRulePriorities";
	/** [Write] elasticloadbalancing:SetSecurityGroups */
	static readonly SET_SECURITY_GROUPS = "elasticloadbalancing:SetSecurityGroups";
	/** [Write] elasticloadbalancing:SetSubnets */
	static readonly SET_SUBNETS = "elasticloadbalancing:SetSubnets";
	/** [Write] elasticloadbalancing:SetWebAcl */
	static readonly SET_WEB_ACL = "elasticloadbalancing:SetWebAcl";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [ElasticloadbalancingActions.DESCRIBE_ACCOUNT_LIMITS, ElasticloadbalancingActions.DESCRIBE_CAPACITY_RESERVATION, ElasticloadbalancingActions.DESCRIBE_INSTANCE_HEALTH, ElasticloadbalancingActions.DESCRIBE_LISTENER_ATTRIBUTES, ElasticloadbalancingActions.DESCRIBE_LISTENER_CERTIFICATES, ElasticloadbalancingActions.DESCRIBE_LISTENERS, ElasticloadbalancingActions.DESCRIBE_LOAD_BALANCER_ATTRIBUTES, ElasticloadbalancingActions.DESCRIBE_LOAD_BALANCER_POLICIES, ElasticloadbalancingActions.DESCRIBE_LOAD_BALANCER_POLICY_TYPES, ElasticloadbalancingActions.DESCRIBE_RULES, ElasticloadbalancingActions.DESCRIBE_SSL_POLICIES, ElasticloadbalancingActions.DESCRIBE_TAGS, ElasticloadbalancingActions.DESCRIBE_TARGET_GROUP_ATTRIBUTES, ElasticloadbalancingActions.DESCRIBE_TARGET_GROUPS, ElasticloadbalancingActions.DESCRIBE_TARGET_HEALTH, ElasticloadbalancingActions.DESCRIBE_TRUST_STORE_ASSOCIATIONS, ElasticloadbalancingActions.DESCRIBE_TRUST_STORE_REVOCATIONS, ElasticloadbalancingActions.DESCRIBE_TRUST_STORES, ElasticloadbalancingActions.GET_LOAD_BALANCER_WEB_ACL, ElasticloadbalancingActions.GET_RESOURCE_POLICY, ElasticloadbalancingActions.GET_TRUST_STORE_CA_CERTIFICATES_BUNDLE, ElasticloadbalancingActions.GET_TRUST_STORE_REVOCATION_CONTENT];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [ElasticloadbalancingActions.ADD_LISTENER_CERTIFICATES, ElasticloadbalancingActions.ADD_TRUST_STORE_REVOCATIONS, ElasticloadbalancingActions.APPLY_SECURITY_GROUPS_TO_LOAD_BALANCER, ElasticloadbalancingActions.ATTACH_LOAD_BALANCER_TO_SUBNETS, ElasticloadbalancingActions.CONFIGURE_HEALTH_CHECK, ElasticloadbalancingActions.CREATE_APP_COOKIE_STICKINESS_POLICY, ElasticloadbalancingActions.CREATE_LB_COOKIE_STICKINESS_POLICY, ElasticloadbalancingActions.CREATE_LISTENER, ElasticloadbalancingActions.CREATE_LOAD_BALANCER, ElasticloadbalancingActions.CREATE_LOAD_BALANCER_LISTENERS, ElasticloadbalancingActions.CREATE_LOAD_BALANCER_POLICY, ElasticloadbalancingActions.CREATE_RULE, ElasticloadbalancingActions.CREATE_TARGET_GROUP, ElasticloadbalancingActions.CREATE_TRUST_STORE, ElasticloadbalancingActions.CREATE_WEB_ACL_ASSOCIATION, ElasticloadbalancingActions.DELETE_LISTENER, ElasticloadbalancingActions.DELETE_LOAD_BALANCER, ElasticloadbalancingActions.DELETE_LOAD_BALANCER_LISTENERS, ElasticloadbalancingActions.DELETE_LOAD_BALANCER_POLICY, ElasticloadbalancingActions.DELETE_RULE, ElasticloadbalancingActions.DELETE_SHARED_TRUST_STORE_ASSOCIATION, ElasticloadbalancingActions.DELETE_TARGET_GROUP, ElasticloadbalancingActions.DELETE_TRUST_STORE, ElasticloadbalancingActions.DELETE_WEB_ACL_ASSOCIATION, ElasticloadbalancingActions.DEREGISTER_INSTANCES_FROM_LOAD_BALANCER, ElasticloadbalancingActions.DEREGISTER_TARGETS, ElasticloadbalancingActions.DETACH_LOAD_BALANCER_FROM_SUBNETS, ElasticloadbalancingActions.DISABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER, ElasticloadbalancingActions.ENABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER, ElasticloadbalancingActions.MODIFY_CAPACITY_RESERVATION, ElasticloadbalancingActions.MODIFY_IP_POOLS, ElasticloadbalancingActions.MODIFY_LISTENER, ElasticloadbalancingActions.MODIFY_LISTENER_ATTRIBUTES, ElasticloadbalancingActions.MODIFY_LOAD_BALANCER_ATTRIBUTES, ElasticloadbalancingActions.MODIFY_RULE, ElasticloadbalancingActions.MODIFY_TARGET_GROUP, ElasticloadbalancingActions.MODIFY_TARGET_GROUP_ATTRIBUTES, ElasticloadbalancingActions.MODIFY_TRUST_STORE, ElasticloadbalancingActions.REGISTER_INSTANCES_WITH_LOAD_BALANCER, ElasticloadbalancingActions.REGISTER_TARGETS, ElasticloadbalancingActions.REMOVE_LISTENER_CERTIFICATES, ElasticloadbalancingActions.REMOVE_TRUST_STORE_REVOCATIONS, ElasticloadbalancingActions.SET_IP_ADDRESS_TYPE, ElasticloadbalancingActions.SET_LOAD_BALANCER_LISTENER_SSL_CERTIFICATE, ElasticloadbalancingActions.SET_LOAD_BALANCER_POLICIES_FOR_BACKEND_SERVER, ElasticloadbalancingActions.SET_LOAD_BALANCER_POLICIES_OF_LISTENER, ElasticloadbalancingActions.SET_RULE_PRIORITIES, ElasticloadbalancingActions.SET_SECURITY_GROUPS, ElasticloadbalancingActions.SET_SUBNETS, ElasticloadbalancingActions.SET_WEB_ACL];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [ElasticloadbalancingActions.DESCRIBE_LOAD_BALANCERS, ElasticloadbalancingActions.DESCRIBE_WEB_ACL_ASSOCIATION];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [ElasticloadbalancingActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [ElasticloadbalancingActions.ADD_TAGS, ElasticloadbalancingActions.REMOVE_TAGS];
}

const ListenerRule/appArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):listener-rule/app/(?<loadBalancerName>[^:/?]+)/(?<loadBalancerId>[^:/?]+)/(?<listenerId>[^:/?]+)/(?<listenerRuleId>[^:/?]+)$");
const ListenerRule/netArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):listener-rule/net/(?<loadBalancerName>[^:/?]+)/(?<loadBalancerId>[^:/?]+)/(?<listenerId>[^:/?]+)/(?<listenerRuleId>[^:/?]+)$");
const Listener/appArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):listener/app/(?<loadBalancerName>[^:/?]+)/(?<loadBalancerId>[^:/?]+)/(?<listenerId>[^:/?]+)$");
const Listener/gwyArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):listener/gwy/(?<loadBalancerName>[^:/?]+)/(?<loadBalancerId>[^:/?]+)/(?<listenerId>[^:/?]+)$");
const Listener/netArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):listener/net/(?<loadBalancerName>[^:/?]+)/(?<loadBalancerId>[^:/?]+)/(?<listenerId>[^:/?]+)$");
const LoadbalancerArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):loadbalancer/(?<loadBalancerName>[^:/?]+)$");
const Loadbalancer/app/ArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):loadbalancer/app/(?<loadBalancerName>[^:/?]+)/(?<loadBalancerId>[^:/?]+)$");
const Loadbalancer/gwy/ArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):loadbalancer/gwy/(?<loadBalancerName>[^:/?]+)/(?<loadBalancerId>[^:/?]+)$");
const Loadbalancer/net/ArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):loadbalancer/net/(?<loadBalancerName>[^:/?]+)/(?<loadBalancerId>[^:/?]+)$");
const TargetgroupArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):targetgroup/(?<targetGroupName>[^:/?]+)/(?<targetGroupId>[^:/?]+)$");
const TruststoreArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):truststore/(?<trustStoreName>[^:/?]+)/(?<trustStoreId>[^:/?]+)$");

/**
 * ARN builders, validators, and parsers for elasticloadbalancing resources.
 */
export class ElasticloadbalancingResources {
	/**
	 * Builds an ARN for the listener-rule/app resource.
	 */
	static listenerRule/app(props: {
		/** The LoadBalancerName component of the ARN. */
		readonly loadBalancerName: string;
		/** The LoadBalancerId component of the ARN. */
		readonly loadBalancerId: string;
		/** The ListenerId component of the ARN. */
		readonly listenerId: string;
		/** The ListenerRuleId component of the ARN. */
		readonly listenerRuleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:listener-rule/app/${props.loadBalancerName}/${props.loadBalancerId}/${props.listenerId}/${props.listenerRuleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the listener-rule/app resource.
	 */
	static isValidListenerRule/appArn(arn: string): boolean {
		return ListenerRule/appArnRegex.test(arn);
	}

	/**
	 * Parses a listener-rule/app ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseListenerRule/appArn(arn: string): { partition: string; region: string; account: string; loadBalancerName: string; loadBalancerId: string; listenerId: string; listenerRuleId: string } {
		const match = ListenerRule/appArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid listener-rule/app ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loadBalancerName: match.groups!.loadBalancerName,
			loadBalancerId: match.groups!.loadBalancerId,
			listenerId: match.groups!.listenerId,
			listenerRuleId: match.groups!.listenerRuleId,
		};
	}

	/**
	 * Builds an ARN for the listener-rule/net resource.
	 */
	static listenerRule/net(props: {
		/** The LoadBalancerName component of the ARN. */
		readonly loadBalancerName: string;
		/** The LoadBalancerId component of the ARN. */
		readonly loadBalancerId: string;
		/** The ListenerId component of the ARN. */
		readonly listenerId: string;
		/** The ListenerRuleId component of the ARN. */
		readonly listenerRuleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:listener-rule/net/${props.loadBalancerName}/${props.loadBalancerId}/${props.listenerId}/${props.listenerRuleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the listener-rule/net resource.
	 */
	static isValidListenerRule/netArn(arn: string): boolean {
		return ListenerRule/netArnRegex.test(arn);
	}

	/**
	 * Parses a listener-rule/net ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseListenerRule/netArn(arn: string): { partition: string; region: string; account: string; loadBalancerName: string; loadBalancerId: string; listenerId: string; listenerRuleId: string } {
		const match = ListenerRule/netArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid listener-rule/net ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loadBalancerName: match.groups!.loadBalancerName,
			loadBalancerId: match.groups!.loadBalancerId,
			listenerId: match.groups!.listenerId,
			listenerRuleId: match.groups!.listenerRuleId,
		};
	}

	/**
	 * Builds an ARN for the listener/app resource.
	 */
	static listener/app(props: {
		/** The LoadBalancerName component of the ARN. */
		readonly loadBalancerName: string;
		/** The LoadBalancerId component of the ARN. */
		readonly loadBalancerId: string;
		/** The ListenerId component of the ARN. */
		readonly listenerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:listener/app/${props.loadBalancerName}/${props.loadBalancerId}/${props.listenerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the listener/app resource.
	 */
	static isValidListener/appArn(arn: string): boolean {
		return Listener/appArnRegex.test(arn);
	}

	/**
	 * Parses a listener/app ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseListener/appArn(arn: string): { partition: string; region: string; account: string; loadBalancerName: string; loadBalancerId: string; listenerId: string } {
		const match = Listener/appArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid listener/app ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loadBalancerName: match.groups!.loadBalancerName,
			loadBalancerId: match.groups!.loadBalancerId,
			listenerId: match.groups!.listenerId,
		};
	}

	/**
	 * Builds an ARN for the listener/gwy resource.
	 */
	static listener/gwy(props: {
		/** The LoadBalancerName component of the ARN. */
		readonly loadBalancerName: string;
		/** The LoadBalancerId component of the ARN. */
		readonly loadBalancerId: string;
		/** The ListenerId component of the ARN. */
		readonly listenerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:listener/gwy/${props.loadBalancerName}/${props.loadBalancerId}/${props.listenerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the listener/gwy resource.
	 */
	static isValidListener/gwyArn(arn: string): boolean {
		return Listener/gwyArnRegex.test(arn);
	}

	/**
	 * Parses a listener/gwy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseListener/gwyArn(arn: string): { partition: string; region: string; account: string; loadBalancerName: string; loadBalancerId: string; listenerId: string } {
		const match = Listener/gwyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid listener/gwy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loadBalancerName: match.groups!.loadBalancerName,
			loadBalancerId: match.groups!.loadBalancerId,
			listenerId: match.groups!.listenerId,
		};
	}

	/**
	 * Builds an ARN for the listener/net resource.
	 */
	static listener/net(props: {
		/** The LoadBalancerName component of the ARN. */
		readonly loadBalancerName: string;
		/** The LoadBalancerId component of the ARN. */
		readonly loadBalancerId: string;
		/** The ListenerId component of the ARN. */
		readonly listenerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:listener/net/${props.loadBalancerName}/${props.loadBalancerId}/${props.listenerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the listener/net resource.
	 */
	static isValidListener/netArn(arn: string): boolean {
		return Listener/netArnRegex.test(arn);
	}

	/**
	 * Parses a listener/net ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseListener/netArn(arn: string): { partition: string; region: string; account: string; loadBalancerName: string; loadBalancerId: string; listenerId: string } {
		const match = Listener/netArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid listener/net ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loadBalancerName: match.groups!.loadBalancerName,
			loadBalancerId: match.groups!.loadBalancerId,
			listenerId: match.groups!.listenerId,
		};
	}

	/**
	 * Builds an ARN for the loadbalancer resource.
	 */
	static loadbalancer(props: {
		/** The LoadBalancerName component of the ARN. */
		readonly loadBalancerName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:loadbalancer/${props.loadBalancerName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the loadbalancer resource.
	 */
	static isValidLoadbalancerArn(arn: string): boolean {
		return LoadbalancerArnRegex.test(arn);
	}

	/**
	 * Parses a loadbalancer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLoadbalancerArn(arn: string): { partition: string; region: string; account: string; loadBalancerName: string } {
		const match = LoadbalancerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid loadbalancer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loadBalancerName: match.groups!.loadBalancerName,
		};
	}

	/**
	 * Builds an ARN for the loadbalancer/app/ resource.
	 */
	static loadbalancer/app/(props: {
		/** The LoadBalancerName component of the ARN. */
		readonly loadBalancerName: string;
		/** The LoadBalancerId component of the ARN. */
		readonly loadBalancerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:loadbalancer/app/${props.loadBalancerName}/${props.loadBalancerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the loadbalancer/app/ resource.
	 */
	static isValidLoadbalancer/app/Arn(arn: string): boolean {
		return Loadbalancer/app/ArnRegex.test(arn);
	}

	/**
	 * Parses a loadbalancer/app/ ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLoadbalancer/app/Arn(arn: string): { partition: string; region: string; account: string; loadBalancerName: string; loadBalancerId: string } {
		const match = Loadbalancer/app/ArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid loadbalancer/app/ ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loadBalancerName: match.groups!.loadBalancerName,
			loadBalancerId: match.groups!.loadBalancerId,
		};
	}

	/**
	 * Builds an ARN for the loadbalancer/gwy/ resource.
	 */
	static loadbalancer/gwy/(props: {
		/** The LoadBalancerName component of the ARN. */
		readonly loadBalancerName: string;
		/** The LoadBalancerId component of the ARN. */
		readonly loadBalancerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:loadbalancer/gwy/${props.loadBalancerName}/${props.loadBalancerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the loadbalancer/gwy/ resource.
	 */
	static isValidLoadbalancer/gwy/Arn(arn: string): boolean {
		return Loadbalancer/gwy/ArnRegex.test(arn);
	}

	/**
	 * Parses a loadbalancer/gwy/ ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLoadbalancer/gwy/Arn(arn: string): { partition: string; region: string; account: string; loadBalancerName: string; loadBalancerId: string } {
		const match = Loadbalancer/gwy/ArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid loadbalancer/gwy/ ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loadBalancerName: match.groups!.loadBalancerName,
			loadBalancerId: match.groups!.loadBalancerId,
		};
	}

	/**
	 * Builds an ARN for the loadbalancer/net/ resource.
	 */
	static loadbalancer/net/(props: {
		/** The LoadBalancerName component of the ARN. */
		readonly loadBalancerName: string;
		/** The LoadBalancerId component of the ARN. */
		readonly loadBalancerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:loadbalancer/net/${props.loadBalancerName}/${props.loadBalancerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the loadbalancer/net/ resource.
	 */
	static isValidLoadbalancer/net/Arn(arn: string): boolean {
		return Loadbalancer/net/ArnRegex.test(arn);
	}

	/**
	 * Parses a loadbalancer/net/ ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLoadbalancer/net/Arn(arn: string): { partition: string; region: string; account: string; loadBalancerName: string; loadBalancerId: string } {
		const match = Loadbalancer/net/ArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid loadbalancer/net/ ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loadBalancerName: match.groups!.loadBalancerName,
			loadBalancerId: match.groups!.loadBalancerId,
		};
	}

	/**
	 * Builds an ARN for the targetgroup resource.
	 */
	static targetgroup(props: {
		/** The TargetGroupName component of the ARN. */
		readonly targetGroupName: string;
		/** The TargetGroupId component of the ARN. */
		readonly targetGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:targetgroup/${props.targetGroupName}/${props.targetGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the targetgroup resource.
	 */
	static isValidTargetgroupArn(arn: string): boolean {
		return TargetgroupArnRegex.test(arn);
	}

	/**
	 * Parses a targetgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTargetgroupArn(arn: string): { partition: string; region: string; account: string; targetGroupName: string; targetGroupId: string } {
		const match = TargetgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid targetgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			targetGroupName: match.groups!.targetGroupName,
			targetGroupId: match.groups!.targetGroupId,
		};
	}

	/**
	 * Builds an ARN for the truststore resource.
	 */
	static truststore(props: {
		/** The TrustStoreName component of the ARN. */
		readonly trustStoreName: string;
		/** The TrustStoreId component of the ARN. */
		readonly trustStoreId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:truststore/${props.trustStoreName}/${props.trustStoreId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the truststore resource.
	 */
	static isValidTruststoreArn(arn: string): boolean {
		return TruststoreArnRegex.test(arn);
	}

	/**
	 * Parses a truststore ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTruststoreArn(arn: string): { partition: string; region: string; account: string; trustStoreName: string; trustStoreId: string } {
		const match = TruststoreArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid truststore ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			trustStoreName: match.groups!.trustStoreName,
			trustStoreId: match.groups!.trustStoreId,
		};
	}

}

/**
 * API operation to required IAM actions mapping for elasticloadbalancing.
 */
export class ElasticloadbalancingOperations {
	/** IAM actions required for the AddListenerCertificates API call. */
	static readonly ADD_LISTENER_CERTIFICATES: string[] = ["elasticloadbalancing:AddListenerCertificates"];
	/** IAM actions required for the AddTags API call. */
	static readonly ADD_TAGS: string[] = ["elasticloadbalancing:AddTags"];
	/** IAM actions required for the AddTrustStoreRevocations API call. */
	static readonly ADD_TRUST_STORE_REVOCATIONS: string[] = ["elasticloadbalancing:AddTrustStoreRevocations"];
	/** IAM actions required for the ApplySecurityGroupsToLoadBalancer API call. */
	static readonly APPLY_SECURITY_GROUPS_TO_LOAD_BALANCER: string[] = ["elasticloadbalancing:ApplySecurityGroupsToLoadBalancer"];
	/** IAM actions required for the AttachLoadBalancerToSubnets API call. */
	static readonly ATTACH_LOAD_BALANCER_TO_SUBNETS: string[] = ["elasticloadbalancing:AttachLoadBalancerToSubnets"];
	/** IAM actions required for the ConfigureHealthCheck API call. */
	static readonly CONFIGURE_HEALTH_CHECK: string[] = ["elasticloadbalancing:ConfigureHealthCheck"];
	/** IAM actions required for the CreateAppCookieStickinessPolicy API call. */
	static readonly CREATE_APP_COOKIE_STICKINESS_POLICY: string[] = ["elasticloadbalancing:CreateAppCookieStickinessPolicy"];
	/** IAM actions required for the CreateLBCookieStickinessPolicy API call. */
	static readonly CREATE_LB_COOKIE_STICKINESS_POLICY: string[] = ["elasticloadbalancing:CreateLBCookieStickinessPolicy"];
	/** IAM actions required for the CreateListener API call. */
	static readonly CREATE_LISTENER: string[] = ["elasticloadbalancing:AddTags", "elasticloadbalancing:CreateListener"];
	/** IAM actions required for the CreateLoadBalancer API call. */
	static readonly CREATE_LOAD_BALANCER: string[] = ["elasticloadbalancing:AddTags", "elasticloadbalancing:CreateLoadBalancer"];
	/** IAM actions required for the CreateLoadBalancerListeners API call. */
	static readonly CREATE_LOAD_BALANCER_LISTENERS: string[] = ["elasticloadbalancing:CreateLoadBalancerListeners"];
	/** IAM actions required for the CreateLoadBalancerPolicy API call. */
	static readonly CREATE_LOAD_BALANCER_POLICY: string[] = ["elasticloadbalancing:CreateLoadBalancerPolicy"];
	/** IAM actions required for the CreateRule API call. */
	static readonly CREATE_RULE: string[] = ["elasticloadbalancing:AddTags", "elasticloadbalancing:CreateRule"];
	/** IAM actions required for the CreateTargetGroup API call. */
	static readonly CREATE_TARGET_GROUP: string[] = ["elasticloadbalancing:AddTags", "elasticloadbalancing:CreateTargetGroup"];
	/** IAM actions required for the CreateTrustStore API call. */
	static readonly CREATE_TRUST_STORE: string[] = ["elasticloadbalancing:AddTags", "elasticloadbalancing:CreateTrustStore"];
	/** IAM actions required for the DeleteListener API call. */
	static readonly DELETE_LISTENER: string[] = ["elasticloadbalancing:DeleteListener"];
	/** IAM actions required for the DeleteLoadBalancer API call. */
	static readonly DELETE_LOAD_BALANCER: string[] = ["elasticloadbalancing:DeleteLoadBalancer"];
	/** IAM actions required for the DeleteLoadBalancerListeners API call. */
	static readonly DELETE_LOAD_BALANCER_LISTENERS: string[] = ["elasticloadbalancing:DeleteLoadBalancerListeners"];
	/** IAM actions required for the DeleteLoadBalancerPolicy API call. */
	static readonly DELETE_LOAD_BALANCER_POLICY: string[] = ["elasticloadbalancing:DeleteLoadBalancerPolicy"];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DELETE_RULE: string[] = ["elasticloadbalancing:DeleteRule"];
	/** IAM actions required for the DeleteSharedTrustStoreAssociation API call. */
	static readonly DELETE_SHARED_TRUST_STORE_ASSOCIATION: string[] = ["elasticloadbalancing:DeleteSharedTrustStoreAssociation"];
	/** IAM actions required for the DeleteTargetGroup API call. */
	static readonly DELETE_TARGET_GROUP: string[] = ["elasticloadbalancing:DeleteTargetGroup"];
	/** IAM actions required for the DeleteTrustStore API call. */
	static readonly DELETE_TRUST_STORE: string[] = ["elasticloadbalancing:DeleteTrustStore"];
	/** IAM actions required for the DeregisterInstancesFromLoadBalancer API call. */
	static readonly DEREGISTER_INSTANCES_FROM_LOAD_BALANCER: string[] = ["elasticloadbalancing:DeregisterInstancesFromLoadBalancer"];
	/** IAM actions required for the DeregisterTargets API call. */
	static readonly DEREGISTER_TARGETS: string[] = ["elasticloadbalancing:DeregisterTargets"];
	/** IAM actions required for the DescribeAccountLimits API call. */
	static readonly DESCRIBE_ACCOUNT_LIMITS: string[] = ["elasticloadbalancing:DescribeAccountLimits"];
	/** IAM actions required for the DescribeCapacityReservation API call. */
	static readonly DESCRIBE_CAPACITY_RESERVATION: string[] = ["elasticloadbalancing:DescribeCapacityReservation"];
	/** IAM actions required for the DescribeInstanceHealth API call. */
	static readonly DESCRIBE_INSTANCE_HEALTH: string[] = ["elasticloadbalancing:DescribeInstanceHealth"];
	/** IAM actions required for the DescribeListenerAttributes API call. */
	static readonly DESCRIBE_LISTENER_ATTRIBUTES: string[] = ["elasticloadbalancing:DescribeListenerAttributes"];
	/** IAM actions required for the DescribeListenerCertificates API call. */
	static readonly DESCRIBE_LISTENER_CERTIFICATES: string[] = ["elasticloadbalancing:DescribeListenerCertificates"];
	/** IAM actions required for the DescribeListeners API call. */
	static readonly DESCRIBE_LISTENERS: string[] = ["elasticloadbalancing:DescribeListeners"];
	/** IAM actions required for the DescribeLoadBalancerAttributes API call. */
	static readonly DESCRIBE_LOAD_BALANCER_ATTRIBUTES: string[] = ["elasticloadbalancing:DescribeLoadBalancerAttributes"];
	/** IAM actions required for the DescribeLoadBalancerPolicies API call. */
	static readonly DESCRIBE_LOAD_BALANCER_POLICIES: string[] = ["elasticloadbalancing:DescribeLoadBalancerPolicies"];
	/** IAM actions required for the DescribeLoadBalancerPolicyTypes API call. */
	static readonly DESCRIBE_LOAD_BALANCER_POLICY_TYPES: string[] = ["elasticloadbalancing:DescribeLoadBalancerPolicyTypes"];
	/** IAM actions required for the DescribeLoadBalancers API call. */
	static readonly DESCRIBE_LOAD_BALANCERS: string[] = ["elasticloadbalancing:DescribeLoadBalancers"];
	/** IAM actions required for the DescribeRules API call. */
	static readonly DESCRIBE_RULES: string[] = ["elasticloadbalancing:DescribeRules"];
	/** IAM actions required for the DescribeSSLPolicies API call. */
	static readonly DESCRIBE_SSL_POLICIES: string[] = ["elasticloadbalancing:DescribeSSLPolicies"];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DESCRIBE_TAGS: string[] = ["elasticloadbalancing:DescribeTags"];
	/** IAM actions required for the DescribeTargetGroupAttributes API call. */
	static readonly DESCRIBE_TARGET_GROUP_ATTRIBUTES: string[] = ["elasticloadbalancing:DescribeTargetGroupAttributes"];
	/** IAM actions required for the DescribeTargetGroups API call. */
	static readonly DESCRIBE_TARGET_GROUPS: string[] = ["elasticloadbalancing:DescribeTargetGroups"];
	/** IAM actions required for the DescribeTargetHealth API call. */
	static readonly DESCRIBE_TARGET_HEALTH: string[] = ["elasticloadbalancing:DescribeTargetHealth"];
	/** IAM actions required for the DescribeTrustStoreAssociations API call. */
	static readonly DESCRIBE_TRUST_STORE_ASSOCIATIONS: string[] = ["elasticloadbalancing:DescribeTrustStoreAssociations"];
	/** IAM actions required for the DescribeTrustStoreRevocations API call. */
	static readonly DESCRIBE_TRUST_STORE_REVOCATIONS: string[] = ["elasticloadbalancing:DescribeTrustStoreRevocations"];
	/** IAM actions required for the DescribeTrustStores API call. */
	static readonly DESCRIBE_TRUST_STORES: string[] = ["elasticloadbalancing:DescribeTrustStores"];
	/** IAM actions required for the DetachLoadBalancerFromSubnets API call. */
	static readonly DETACH_LOAD_BALANCER_FROM_SUBNETS: string[] = ["elasticloadbalancing:DetachLoadBalancerFromSubnets"];
	/** IAM actions required for the DisableAvailabilityZonesForLoadBalancer API call. */
	static readonly DISABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER: string[] = ["elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer"];
	/** IAM actions required for the EnableAvailabilityZonesForLoadBalancer API call. */
	static readonly ENABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER: string[] = ["elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = ["elasticloadbalancing:GetResourcePolicy"];
	/** IAM actions required for the GetTrustStoreCaCertificatesBundle API call. */
	static readonly GET_TRUST_STORE_CA_CERTIFICATES_BUNDLE: string[] = ["elasticloadbalancing:GetTrustStoreCaCertificatesBundle"];
	/** IAM actions required for the GetTrustStoreRevocationContent API call. */
	static readonly GET_TRUST_STORE_REVOCATION_CONTENT: string[] = ["elasticloadbalancing:GetTrustStoreRevocationContent"];
	/** IAM actions required for the ModifyCapacityReservation API call. */
	static readonly MODIFY_CAPACITY_RESERVATION: string[] = ["elasticloadbalancing:ModifyCapacityReservation"];
	/** IAM actions required for the ModifyIpPools API call. */
	static readonly MODIFY_IP_POOLS: string[] = ["elasticloadbalancing:ModifyIpPools"];
	/** IAM actions required for the ModifyListener API call. */
	static readonly MODIFY_LISTENER: string[] = ["elasticloadbalancing:ModifyListener"];
	/** IAM actions required for the ModifyListenerAttributes API call. */
	static readonly MODIFY_LISTENER_ATTRIBUTES: string[] = ["elasticloadbalancing:ModifyListenerAttributes"];
	/** IAM actions required for the ModifyLoadBalancerAttributes API call. */
	static readonly MODIFY_LOAD_BALANCER_ATTRIBUTES: string[] = ["elasticloadbalancing:ModifyLoadBalancerAttributes"];
	/** IAM actions required for the ModifyRule API call. */
	static readonly MODIFY_RULE: string[] = ["elasticloadbalancing:ModifyRule"];
	/** IAM actions required for the ModifyTargetGroup API call. */
	static readonly MODIFY_TARGET_GROUP: string[] = ["elasticloadbalancing:ModifyTargetGroup"];
	/** IAM actions required for the ModifyTargetGroupAttributes API call. */
	static readonly MODIFY_TARGET_GROUP_ATTRIBUTES: string[] = ["elasticloadbalancing:ModifyTargetGroupAttributes"];
	/** IAM actions required for the ModifyTrustStore API call. */
	static readonly MODIFY_TRUST_STORE: string[] = ["elasticloadbalancing:ModifyTrustStore"];
	/** IAM actions required for the RegisterInstancesWithLoadBalancer API call. */
	static readonly REGISTER_INSTANCES_WITH_LOAD_BALANCER: string[] = ["elasticloadbalancing:RegisterInstancesWithLoadBalancer"];
	/** IAM actions required for the RegisterTargets API call. */
	static readonly REGISTER_TARGETS: string[] = ["elasticloadbalancing:RegisterTargets"];
	/** IAM actions required for the RemoveListenerCertificates API call. */
	static readonly REMOVE_LISTENER_CERTIFICATES: string[] = ["elasticloadbalancing:RemoveListenerCertificates"];
	/** IAM actions required for the RemoveTags API call. */
	static readonly REMOVE_TAGS: string[] = ["elasticloadbalancing:RemoveTags"];
	/** IAM actions required for the RemoveTrustStoreRevocations API call. */
	static readonly REMOVE_TRUST_STORE_REVOCATIONS: string[] = ["elasticloadbalancing:RemoveTrustStoreRevocations"];
	/** IAM actions required for the SetIpAddressType API call. */
	static readonly SET_IP_ADDRESS_TYPE: string[] = ["elasticloadbalancing:SetIpAddressType"];
	/** IAM actions required for the SetLoadBalancerListenerSSLCertificate API call. */
	static readonly SET_LOAD_BALANCER_LISTENER_SSL_CERTIFICATE: string[] = ["elasticloadbalancing:SetLoadBalancerListenerSSLCertificate"];
	/** IAM actions required for the SetLoadBalancerPoliciesForBackendServer API call. */
	static readonly SET_LOAD_BALANCER_POLICIES_FOR_BACKEND_SERVER: string[] = ["elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer"];
	/** IAM actions required for the SetLoadBalancerPoliciesOfListener API call. */
	static readonly SET_LOAD_BALANCER_POLICIES_OF_LISTENER: string[] = ["elasticloadbalancing:SetLoadBalancerPoliciesOfListener"];
	/** IAM actions required for the SetRulePriorities API call. */
	static readonly SET_RULE_PRIORITIES: string[] = ["elasticloadbalancing:SetRulePriorities"];
	/** IAM actions required for the SetSecurityGroups API call. */
	static readonly SET_SECURITY_GROUPS: string[] = ["elasticloadbalancing:SetSecurityGroups"];
	/** IAM actions required for the SetSubnets API call. */
	static readonly SET_SUBNETS: string[] = ["elasticloadbalancing:SetSubnets"];
}

/**
 * Condition key constants and builders for elasticloadbalancing.
 */
export class ElasticloadbalancingConditions {
	/** Condition keys applicable to the AddListenerCertificates action. */
	static readonly ADD_LISTENER_CERTIFICATES_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the AddTags action. */
	static readonly ADD_TAGS_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys", "elasticloadbalancing:CreateAction", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the AddTrustStoreRevocations action. */
	static readonly ADD_TRUST_STORE_REVOCATIONS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ApplySecurityGroupsToLoadBalancer action. */
	static readonly APPLY_SECURITY_GROUPS_TO_LOAD_BALANCER_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}", "elasticloadbalancing:SecurityGroup"];
	/** Condition keys applicable to the AttachLoadBalancerToSubnets action. */
	static readonly ATTACH_LOAD_BALANCER_TO_SUBNETS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}", "elasticloadbalancing:Subnet"];
	/** Condition keys applicable to the ConfigureHealthCheck action. */
	static readonly CONFIGURE_HEALTH_CHECK_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateAppCookieStickinessPolicy action. */
	static readonly CREATE_APP_COOKIE_STICKINESS_POLICY_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateLBCookieStickinessPolicy action. */
	static readonly CREATE_LB_COOKIE_STICKINESS_POLICY_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateListener action. */
	static readonly CREATE_LISTENER_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys", "elasticloadbalancing:ListenerProtocol", "elasticloadbalancing:ResourceTag/${TagKey}", "elasticloadbalancing:SecurityPolicy"];
	/** Condition keys applicable to the CreateLoadBalancer action. */
	static readonly CREATE_LOAD_BALANCER_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys", "elasticloadbalancing:ListenerProtocol", "elasticloadbalancing:ResourceTag/${TagKey}", "elasticloadbalancing:Scheme", "elasticloadbalancing:SecurityGroup", "elasticloadbalancing:Subnet"];
	/** Condition keys applicable to the CreateLoadBalancerListeners action. */
	static readonly CREATE_LOAD_BALANCER_LISTENERS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ListenerProtocol", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateLoadBalancerPolicy action. */
	static readonly CREATE_LOAD_BALANCER_POLICY_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}", "elasticloadbalancing:SecurityPolicy"];
	/** Condition keys applicable to the CreateRule action. */
	static readonly CREATE_RULE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateTargetGroup action. */
	static readonly CREATE_TARGET_GROUP_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateTrustStore action. */
	static readonly CREATE_TRUST_STORE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateWebACLAssociation action. */
	static readonly CREATE_WEB_ACL_ASSOCIATION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteListener action. */
	static readonly DELETE_LISTENER_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteLoadBalancer action. */
	static readonly DELETE_LOAD_BALANCER_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteLoadBalancerListeners action. */
	static readonly DELETE_LOAD_BALANCER_LISTENERS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteLoadBalancerPolicy action. */
	static readonly DELETE_LOAD_BALANCER_POLICY_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteRule action. */
	static readonly DELETE_RULE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteSharedTrustStoreAssociation action. */
	static readonly DELETE_SHARED_TRUST_STORE_ASSOCIATION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteTargetGroup action. */
	static readonly DELETE_TARGET_GROUP_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteTrustStore action. */
	static readonly DELETE_TRUST_STORE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteWebACLAssociation action. */
	static readonly DELETE_WEB_ACL_ASSOCIATION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeregisterInstancesFromLoadBalancer action. */
	static readonly DEREGISTER_INSTANCES_FROM_LOAD_BALANCER_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeregisterTargets action. */
	static readonly DEREGISTER_TARGETS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DetachLoadBalancerFromSubnets action. */
	static readonly DETACH_LOAD_BALANCER_FROM_SUBNETS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DisableAvailabilityZonesForLoadBalancer action. */
	static readonly DISABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the EnableAvailabilityZonesForLoadBalancer action. */
	static readonly ENABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetLoadBalancerWebACL action. */
	static readonly GET_LOAD_BALANCER_WEB_ACL_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetResourcePolicy action. */
	static readonly GET_RESOURCE_POLICY_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetTrustStoreCaCertificatesBundle action. */
	static readonly GET_TRUST_STORE_CA_CERTIFICATES_BUNDLE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetTrustStoreRevocationContent action. */
	static readonly GET_TRUST_STORE_REVOCATION_CONTENT_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ModifyCapacityReservation action. */
	static readonly MODIFY_CAPACITY_RESERVATION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ModifyIpPools action. */
	static readonly MODIFY_IP_POOLS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ModifyListener action. */
	static readonly MODIFY_LISTENER_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ListenerProtocol", "elasticloadbalancing:ResourceTag/${TagKey}", "elasticloadbalancing:SecurityPolicy"];
	/** Condition keys applicable to the ModifyListenerAttributes action. */
	static readonly MODIFY_LISTENER_ATTRIBUTES_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ModifyLoadBalancerAttributes action. */
	static readonly MODIFY_LOAD_BALANCER_ATTRIBUTES_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ModifyRule action. */
	static readonly MODIFY_RULE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ModifyTargetGroup action. */
	static readonly MODIFY_TARGET_GROUP_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ModifyTargetGroupAttributes action. */
	static readonly MODIFY_TARGET_GROUP_ATTRIBUTES_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ModifyTrustStore action. */
	static readonly MODIFY_TRUST_STORE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the RegisterInstancesWithLoadBalancer action. */
	static readonly REGISTER_INSTANCES_WITH_LOAD_BALANCER_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the RegisterTargets action. */
	static readonly REGISTER_TARGETS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the RemoveListenerCertificates action. */
	static readonly REMOVE_LISTENER_CERTIFICATES_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the RemoveTags action. */
	static readonly REMOVE_TAGS_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the RemoveTrustStoreRevocations action. */
	static readonly REMOVE_TRUST_STORE_REVOCATIONS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the SetIpAddressType action. */
	static readonly SET_IP_ADDRESS_TYPE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the SetLoadBalancerListenerSSLCertificate action. */
	static readonly SET_LOAD_BALANCER_LISTENER_SSL_CERTIFICATE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the SetLoadBalancerPoliciesForBackendServer action. */
	static readonly SET_LOAD_BALANCER_POLICIES_FOR_BACKEND_SERVER_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the SetLoadBalancerPoliciesOfListener action. */
	static readonly SET_LOAD_BALANCER_POLICIES_OF_LISTENER_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}", "elasticloadbalancing:SecurityPolicy"];
	/** Condition keys applicable to the SetSecurityGroups action. */
	static readonly SET_SECURITY_GROUPS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}", "elasticloadbalancing:SecurityGroup"];
	/** Condition keys applicable to the SetSubnets action. */
	static readonly SET_SUBNETS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "elasticloadbalancing:ResourceTag/${TagKey}", "elasticloadbalancing:Subnet"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: elasticloadbalancing:CreateAction (String) */
	static readonly CREATE_ACTION = "elasticloadbalancing:CreateAction";
	/** Condition key: elasticloadbalancing:ListenerProtocol (ArrayOfString, String) */
	static readonly LISTENER_PROTOCOL = "elasticloadbalancing:ListenerProtocol";
	/** Condition key: elasticloadbalancing:ResourceTag/ (String) */
	static readonly RESOURCE_TAG = "elasticloadbalancing:ResourceTag/";
	/** Condition key: elasticloadbalancing:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "elasticloadbalancing:ResourceTag/${TagKey}";
	/** Condition key: elasticloadbalancing:Scheme (String) */
	static readonly SCHEME = "elasticloadbalancing:Scheme";
	/** Condition key: elasticloadbalancing:SecurityGroup (ArrayOfString) */
	static readonly SECURITY_GROUP = "elasticloadbalancing:SecurityGroup";
	/** Condition key: elasticloadbalancing:SecurityPolicy (ArrayOfString) */
	static readonly SECURITY_POLICY = "elasticloadbalancing:SecurityPolicy";
	/** Condition key: elasticloadbalancing:Subnet (ArrayOfString) */
	static readonly SUBNET = "elasticloadbalancing:Subnet";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}

	/**
	 * Generates a condition block for `elasticloadbalancing:CreateAction`.
	 */
	static createAction(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "elasticloadbalancing:CreateAction": value } };
	}

	/**
	 * Generates a condition block for `elasticloadbalancing:ListenerProtocol`.
	 */
	static listenerProtocol(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "elasticloadbalancing:ListenerProtocol": values } };
	}

	/**
	 * Generates a condition block for `elasticloadbalancing:ResourceTag/`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "elasticloadbalancing:ResourceTag/": value } };
	}

	/**
	 * Generates a condition block for `elasticloadbalancing:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "elasticloadbalancing:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `elasticloadbalancing:Scheme`.
	 */
	static scheme(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "elasticloadbalancing:Scheme": value } };
	}

	/**
	 * Generates a condition block for `elasticloadbalancing:SecurityGroup`.
	 */
	static securityGroup(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "elasticloadbalancing:SecurityGroup": values } };
	}

	/**
	 * Generates a condition block for `elasticloadbalancing:SecurityPolicy`.
	 */
	static securityPolicy(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "elasticloadbalancing:SecurityPolicy": values } };
	}

	/**
	 * Generates a condition block for `elasticloadbalancing:Subnet`.
	 */
	static subnet(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "elasticloadbalancing:Subnet": values } };
	}

}
