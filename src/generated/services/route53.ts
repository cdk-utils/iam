// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/route53.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the route53 service.
 */
export class Route53Actions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "route53";

	/** [Write] route53:ActivateKeySigningKey */
	static readonly ACTIVATE_KEY_SIGNING_KEY = "route53:ActivateKeySigningKey";
	/** [Write] route53:AssociateVPCWithHostedZone */
	static readonly ASSOCIATE_VPC_WITH_HOSTED_ZONE =
		"route53:AssociateVPCWithHostedZone";
	/** [Write] route53:ChangeCidrCollection */
	static readonly CHANGE_CIDR_COLLECTION = "route53:ChangeCidrCollection";
	/** [Write] route53:ChangeResourceRecordSets */
	static readonly CHANGE_RESOURCE_RECORD_SETS =
		"route53:ChangeResourceRecordSets";
	/** [Tagging] route53:ChangeTagsForResource */
	static readonly CHANGE_TAGS_FOR_RESOURCE = "route53:ChangeTagsForResource";
	/** [Write] route53:CreateCidrCollection */
	static readonly CREATE_CIDR_COLLECTION = "route53:CreateCidrCollection";
	/** [Write] route53:CreateHealthCheck */
	static readonly CREATE_HEALTH_CHECK = "route53:CreateHealthCheck";
	/** [Write] route53:CreateHostedZone */
	static readonly CREATE_HOSTED_ZONE = "route53:CreateHostedZone";
	/** [Write] route53:CreateKeySigningKey */
	static readonly CREATE_KEY_SIGNING_KEY = "route53:CreateKeySigningKey";
	/** [Write] route53:CreateQueryLoggingConfig */
	static readonly CREATE_QUERY_LOGGING_CONFIG =
		"route53:CreateQueryLoggingConfig";
	/** [Write] route53:CreateReusableDelegationSet */
	static readonly CREATE_REUSABLE_DELEGATION_SET =
		"route53:CreateReusableDelegationSet";
	/** [Write] route53:CreateTrafficPolicy */
	static readonly CREATE_TRAFFIC_POLICY = "route53:CreateTrafficPolicy";
	/** [Write] route53:CreateTrafficPolicyInstance */
	static readonly CREATE_TRAFFIC_POLICY_INSTANCE =
		"route53:CreateTrafficPolicyInstance";
	/** [Write] route53:CreateTrafficPolicyVersion */
	static readonly CREATE_TRAFFIC_POLICY_VERSION =
		"route53:CreateTrafficPolicyVersion";
	/** [Write] route53:CreateVPCAssociationAuthorization */
	static readonly CREATE_VPC_ASSOCIATION_AUTHORIZATION =
		"route53:CreateVPCAssociationAuthorization";
	/** [Write] route53:DeactivateKeySigningKey */
	static readonly DEACTIVATE_KEY_SIGNING_KEY =
		"route53:DeactivateKeySigningKey";
	/** [Write] route53:DeleteCidrCollection */
	static readonly DELETE_CIDR_COLLECTION = "route53:DeleteCidrCollection";
	/** [Write] route53:DeleteHealthCheck */
	static readonly DELETE_HEALTH_CHECK = "route53:DeleteHealthCheck";
	/** [Write] route53:DeleteHostedZone */
	static readonly DELETE_HOSTED_ZONE = "route53:DeleteHostedZone";
	/** [Write] route53:DeleteKeySigningKey */
	static readonly DELETE_KEY_SIGNING_KEY = "route53:DeleteKeySigningKey";
	/** [Write] route53:DeleteQueryLoggingConfig */
	static readonly DELETE_QUERY_LOGGING_CONFIG =
		"route53:DeleteQueryLoggingConfig";
	/** [Write] route53:DeleteReusableDelegationSet */
	static readonly DELETE_REUSABLE_DELEGATION_SET =
		"route53:DeleteReusableDelegationSet";
	/** [Write] route53:DeleteTrafficPolicy */
	static readonly DELETE_TRAFFIC_POLICY = "route53:DeleteTrafficPolicy";
	/** [Write] route53:DeleteTrafficPolicyInstance */
	static readonly DELETE_TRAFFIC_POLICY_INSTANCE =
		"route53:DeleteTrafficPolicyInstance";
	/** [Write] route53:DeleteVPCAssociationAuthorization */
	static readonly DELETE_VPC_ASSOCIATION_AUTHORIZATION =
		"route53:DeleteVPCAssociationAuthorization";
	/** [Write] route53:DisableHostedZoneDNSSEC */
	static readonly DISABLE_HOSTED_ZONE_DNSSEC =
		"route53:DisableHostedZoneDNSSEC";
	/** [Write] route53:DisassociateVPCFromHostedZone */
	static readonly DISASSOCIATE_VPC_FROM_HOSTED_ZONE =
		"route53:DisassociateVPCFromHostedZone";
	/** [Write] route53:EnableHostedZoneDNSSEC */
	static readonly ENABLE_HOSTED_ZONE_DNSSEC = "route53:EnableHostedZoneDNSSEC";
	/** [Read] route53:GetAccountLimit */
	static readonly GET_ACCOUNT_LIMIT = "route53:GetAccountLimit";
	/** [List] route53:GetChange */
	static readonly GET_CHANGE = "route53:GetChange";
	/** [List] route53:GetCheckerIpRanges */
	static readonly GET_CHECKER_IP_RANGES = "route53:GetCheckerIpRanges";
	/** [Read] route53:GetDNSSEC */
	static readonly GET_DNSSEC = "route53:GetDNSSEC";
	/** [List] route53:GetGeoLocation */
	static readonly GET_GEO_LOCATION = "route53:GetGeoLocation";
	/** [Read] route53:GetHealthCheck */
	static readonly GET_HEALTH_CHECK = "route53:GetHealthCheck";
	/** [List] route53:GetHealthCheckCount */
	static readonly GET_HEALTH_CHECK_COUNT = "route53:GetHealthCheckCount";
	/** [List] route53:GetHealthCheckLastFailureReason */
	static readonly GET_HEALTH_CHECK_LAST_FAILURE_REASON =
		"route53:GetHealthCheckLastFailureReason";
	/** [List] route53:GetHealthCheckStatus */
	static readonly GET_HEALTH_CHECK_STATUS = "route53:GetHealthCheckStatus";
	/** [List] route53:GetHostedZone */
	static readonly GET_HOSTED_ZONE = "route53:GetHostedZone";
	/** [List] route53:GetHostedZoneCount */
	static readonly GET_HOSTED_ZONE_COUNT = "route53:GetHostedZoneCount";
	/** [Read] route53:GetHostedZoneLimit */
	static readonly GET_HOSTED_ZONE_LIMIT = "route53:GetHostedZoneLimit";
	/** [Read] route53:GetQueryLoggingConfig */
	static readonly GET_QUERY_LOGGING_CONFIG = "route53:GetQueryLoggingConfig";
	/** [List] route53:GetReusableDelegationSet */
	static readonly GET_REUSABLE_DELEGATION_SET =
		"route53:GetReusableDelegationSet";
	/** [Read] route53:GetReusableDelegationSetLimit */
	static readonly GET_REUSABLE_DELEGATION_SET_LIMIT =
		"route53:GetReusableDelegationSetLimit";
	/** [Read] route53:GetTrafficPolicy */
	static readonly GET_TRAFFIC_POLICY = "route53:GetTrafficPolicy";
	/** [Read] route53:GetTrafficPolicyInstance */
	static readonly GET_TRAFFIC_POLICY_INSTANCE =
		"route53:GetTrafficPolicyInstance";
	/** [Read] route53:GetTrafficPolicyInstanceCount */
	static readonly GET_TRAFFIC_POLICY_INSTANCE_COUNT =
		"route53:GetTrafficPolicyInstanceCount";
	/** [List] route53:ListCidrBlocks */
	static readonly LIST_CIDR_BLOCKS = "route53:ListCidrBlocks";
	/** [List] route53:ListCidrCollections */
	static readonly LIST_CIDR_COLLECTIONS = "route53:ListCidrCollections";
	/** [List] route53:ListCidrLocations */
	static readonly LIST_CIDR_LOCATIONS = "route53:ListCidrLocations";
	/** [Read] route53:ListGeoLocations */
	static readonly LIST_GEO_LOCATIONS = "route53:ListGeoLocations";
	/** [Read] route53:ListHealthChecks */
	static readonly LIST_HEALTH_CHECKS = "route53:ListHealthChecks";
	/** [List] route53:ListHostedZones */
	static readonly LIST_HOSTED_ZONES = "route53:ListHostedZones";
	/** [List] route53:ListHostedZonesByName */
	static readonly LIST_HOSTED_ZONES_BY_NAME = "route53:ListHostedZonesByName";
	/** [List] route53:ListHostedZonesByVPC */
	static readonly LIST_HOSTED_ZONES_BY_VPC = "route53:ListHostedZonesByVPC";
	/** [List] route53:ListQueryLoggingConfigs */
	static readonly LIST_QUERY_LOGGING_CONFIGS =
		"route53:ListQueryLoggingConfigs";
	/** [List] route53:ListResourceRecordSets */
	static readonly LIST_RESOURCE_RECORD_SETS = "route53:ListResourceRecordSets";
	/** [Read] route53:ListReusableDelegationSets */
	static readonly LIST_REUSABLE_DELEGATION_SETS =
		"route53:ListReusableDelegationSets";
	/** [Read] route53:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "route53:ListTagsForResource";
	/** [Read] route53:ListTagsForResources */
	static readonly LIST_TAGS_FOR_RESOURCES = "route53:ListTagsForResources";
	/** [List] route53:ListTrafficPolicies */
	static readonly LIST_TRAFFIC_POLICIES = "route53:ListTrafficPolicies";
	/** [Read] route53:ListTrafficPolicyInstances */
	static readonly LIST_TRAFFIC_POLICY_INSTANCES =
		"route53:ListTrafficPolicyInstances";
	/** [List] route53:ListTrafficPolicyInstancesByHostedZone */
	static readonly LIST_TRAFFIC_POLICY_INSTANCES_BY_HOSTED_ZONE =
		"route53:ListTrafficPolicyInstancesByHostedZone";
	/** [List] route53:ListTrafficPolicyInstancesByPolicy */
	static readonly LIST_TRAFFIC_POLICY_INSTANCES_BY_POLICY =
		"route53:ListTrafficPolicyInstancesByPolicy";
	/** [List] route53:ListTrafficPolicyVersions */
	static readonly LIST_TRAFFIC_POLICY_VERSIONS =
		"route53:ListTrafficPolicyVersions";
	/** [List] route53:ListVPCAssociationAuthorizations */
	static readonly LIST_VPC_ASSOCIATION_AUTHORIZATIONS =
		"route53:ListVPCAssociationAuthorizations";
	/** [Read] route53:TestDNSAnswer */
	static readonly TEST_DNS_ANSWER = "route53:TestDNSAnswer";
	/** [Write] route53:UpdateHealthCheck */
	static readonly UPDATE_HEALTH_CHECK = "route53:UpdateHealthCheck";
	/** [Write] route53:UpdateHostedZoneComment */
	static readonly UPDATE_HOSTED_ZONE_COMMENT =
		"route53:UpdateHostedZoneComment";
	/** [Write] route53:UpdateHostedZoneFeatures */
	static readonly UPDATE_HOSTED_ZONE_FEATURES =
		"route53:UpdateHostedZoneFeatures";
	/** [Write] route53:UpdateTrafficPolicyComment */
	static readonly UPDATE_TRAFFIC_POLICY_COMMENT =
		"route53:UpdateTrafficPolicyComment";
	/** [Write] route53:UpdateTrafficPolicyInstance */
	static readonly UPDATE_TRAFFIC_POLICY_INSTANCE =
		"route53:UpdateTrafficPolicyInstance";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		Route53Actions.GET_ACCOUNT_LIMIT,
		Route53Actions.GET_DNSSEC,
		Route53Actions.GET_HEALTH_CHECK,
		Route53Actions.GET_HOSTED_ZONE_LIMIT,
		Route53Actions.GET_QUERY_LOGGING_CONFIG,
		Route53Actions.GET_REUSABLE_DELEGATION_SET_LIMIT,
		Route53Actions.GET_TRAFFIC_POLICY,
		Route53Actions.GET_TRAFFIC_POLICY_INSTANCE,
		Route53Actions.GET_TRAFFIC_POLICY_INSTANCE_COUNT,
		Route53Actions.LIST_GEO_LOCATIONS,
		Route53Actions.LIST_HEALTH_CHECKS,
		Route53Actions.LIST_REUSABLE_DELEGATION_SETS,
		Route53Actions.LIST_TAGS_FOR_RESOURCE,
		Route53Actions.LIST_TAGS_FOR_RESOURCES,
		Route53Actions.LIST_TRAFFIC_POLICY_INSTANCES,
		Route53Actions.TEST_DNS_ANSWER,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Route53Actions.ACTIVATE_KEY_SIGNING_KEY,
		Route53Actions.ASSOCIATE_VPC_WITH_HOSTED_ZONE,
		Route53Actions.CHANGE_CIDR_COLLECTION,
		Route53Actions.CHANGE_RESOURCE_RECORD_SETS,
		Route53Actions.CREATE_CIDR_COLLECTION,
		Route53Actions.CREATE_HEALTH_CHECK,
		Route53Actions.CREATE_HOSTED_ZONE,
		Route53Actions.CREATE_KEY_SIGNING_KEY,
		Route53Actions.CREATE_QUERY_LOGGING_CONFIG,
		Route53Actions.CREATE_REUSABLE_DELEGATION_SET,
		Route53Actions.CREATE_TRAFFIC_POLICY,
		Route53Actions.CREATE_TRAFFIC_POLICY_INSTANCE,
		Route53Actions.CREATE_TRAFFIC_POLICY_VERSION,
		Route53Actions.CREATE_VPC_ASSOCIATION_AUTHORIZATION,
		Route53Actions.DEACTIVATE_KEY_SIGNING_KEY,
		Route53Actions.DELETE_CIDR_COLLECTION,
		Route53Actions.DELETE_HEALTH_CHECK,
		Route53Actions.DELETE_HOSTED_ZONE,
		Route53Actions.DELETE_KEY_SIGNING_KEY,
		Route53Actions.DELETE_QUERY_LOGGING_CONFIG,
		Route53Actions.DELETE_REUSABLE_DELEGATION_SET,
		Route53Actions.DELETE_TRAFFIC_POLICY,
		Route53Actions.DELETE_TRAFFIC_POLICY_INSTANCE,
		Route53Actions.DELETE_VPC_ASSOCIATION_AUTHORIZATION,
		Route53Actions.DISABLE_HOSTED_ZONE_DNSSEC,
		Route53Actions.DISASSOCIATE_VPC_FROM_HOSTED_ZONE,
		Route53Actions.ENABLE_HOSTED_ZONE_DNSSEC,
		Route53Actions.UPDATE_HEALTH_CHECK,
		Route53Actions.UPDATE_HOSTED_ZONE_COMMENT,
		Route53Actions.UPDATE_HOSTED_ZONE_FEATURES,
		Route53Actions.UPDATE_TRAFFIC_POLICY_COMMENT,
		Route53Actions.UPDATE_TRAFFIC_POLICY_INSTANCE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		Route53Actions.GET_CHANGE,
		Route53Actions.GET_CHECKER_IP_RANGES,
		Route53Actions.GET_GEO_LOCATION,
		Route53Actions.GET_HEALTH_CHECK_COUNT,
		Route53Actions.GET_HEALTH_CHECK_LAST_FAILURE_REASON,
		Route53Actions.GET_HEALTH_CHECK_STATUS,
		Route53Actions.GET_HOSTED_ZONE,
		Route53Actions.GET_HOSTED_ZONE_COUNT,
		Route53Actions.GET_REUSABLE_DELEGATION_SET,
		Route53Actions.LIST_CIDR_BLOCKS,
		Route53Actions.LIST_CIDR_COLLECTIONS,
		Route53Actions.LIST_CIDR_LOCATIONS,
		Route53Actions.LIST_HOSTED_ZONES,
		Route53Actions.LIST_HOSTED_ZONES_BY_NAME,
		Route53Actions.LIST_HOSTED_ZONES_BY_VPC,
		Route53Actions.LIST_QUERY_LOGGING_CONFIGS,
		Route53Actions.LIST_RESOURCE_RECORD_SETS,
		Route53Actions.LIST_TRAFFIC_POLICIES,
		Route53Actions.LIST_TRAFFIC_POLICY_INSTANCES_BY_HOSTED_ZONE,
		Route53Actions.LIST_TRAFFIC_POLICY_INSTANCES_BY_POLICY,
		Route53Actions.LIST_TRAFFIC_POLICY_VERSIONS,
		Route53Actions.LIST_VPC_ASSOCIATION_AUTHORIZATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		Route53Actions.CHANGE_TAGS_FOR_RESOURCE,
	];
}

const ChangeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53:::change/(?<id>[^:/?]+)$",
);
const CidrcollectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53:::cidrcollection/(?<id>[^:/?]+)$",
);
const DelegationsetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53:::delegationset/(?<id>[^:/?]+)$",
);
const HealthcheckArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53:::healthcheck/(?<id>[^:/?]+)$",
);
const HostedzoneArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53:::hostedzone/(?<id>[^:/?]+)$",
);
const QueryloggingconfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53:::queryloggingconfig/(?<id>[^:/?]+)$",
);
const TrafficpolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53:::trafficpolicy/(?<id>[^:/?]+)$",
);
const TrafficpolicyinstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53:::trafficpolicyinstance/(?<id>[^:/?]+)$",
);
const VPCArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):vpc/(?<vpcId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for route53 resources.
 */
export class Route53Resources {
	/**
	 * Builds an ARN for the change resource.
	 */
	static change(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53:::change/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the change resource.
	 */
	static isValidChangeArn(arn: string): boolean {
		return ChangeArnRegex.test(arn);
	}

	/**
	 * Parses a change ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChangeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
		const match = ChangeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid change ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the cidrcollection resource.
	 */
	static cidrcollection(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53:::cidrcollection/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cidrcollection resource.
	 */
	static isValidCidrcollectionArn(arn: string): boolean {
		return CidrcollectionArnRegex.test(arn);
	}

	/**
	 * Parses a cidrcollection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCidrcollectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
		const match = CidrcollectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cidrcollection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the delegationset resource.
	 */
	static delegationset(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53:::delegationset/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the delegationset resource.
	 */
	static isValidDelegationsetArn(arn: string): boolean {
		return DelegationsetArnRegex.test(arn);
	}

	/**
	 * Parses a delegationset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDelegationsetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
		const match = DelegationsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid delegationset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the healthcheck resource.
	 */
	static healthcheck(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53:::healthcheck/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the healthcheck resource.
	 */
	static isValidHealthcheckArn(arn: string): boolean {
		return HealthcheckArnRegex.test(arn);
	}

	/**
	 * Parses a healthcheck ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHealthcheckArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
		const match = HealthcheckArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid healthcheck ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the hostedzone resource.
	 */
	static hostedzone(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53:::hostedzone/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the hostedzone resource.
	 */
	static isValidHostedzoneArn(arn: string): boolean {
		return HostedzoneArnRegex.test(arn);
	}

	/**
	 * Parses a hostedzone ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHostedzoneArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
		const match = HostedzoneArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid hostedzone ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the queryloggingconfig resource.
	 */
	static queryloggingconfig(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53:::queryloggingconfig/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the queryloggingconfig resource.
	 */
	static isValidQueryloggingconfigArn(arn: string): boolean {
		return QueryloggingconfigArnRegex.test(arn);
	}

	/**
	 * Parses a queryloggingconfig ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQueryloggingconfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
		const match = QueryloggingconfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid queryloggingconfig ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the trafficpolicy resource.
	 */
	static trafficpolicy(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53:::trafficpolicy/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the trafficpolicy resource.
	 */
	static isValidTrafficpolicyArn(arn: string): boolean {
		return TrafficpolicyArnRegex.test(arn);
	}

	/**
	 * Parses a trafficpolicy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTrafficpolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
		const match = TrafficpolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid trafficpolicy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the trafficpolicyinstance resource.
	 */
	static trafficpolicyinstance(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53:::trafficpolicyinstance/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the trafficpolicyinstance resource.
	 */
	static isValidTrafficpolicyinstanceArn(arn: string): boolean {
		return TrafficpolicyinstanceArnRegex.test(arn);
	}

	/**
	 * Parses a trafficpolicyinstance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTrafficpolicyinstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
		const match = TrafficpolicyinstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid trafficpolicyinstance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the vpc resource.
	 */
	static vpc(props: {
		/** The VpcId component of the ARN. */
		readonly vpcId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ec2:${props.region ?? "*"}:${props.account ?? "*"}:vpc/${props.vpcId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vpc resource.
	 */
	static isValidVPCArn(arn: string): boolean {
		return VPCArnRegex.test(arn);
	}

	/**
	 * Parses a vpc ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVPCArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vpcId: string;
	} {
		const match = VPCArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vpc ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vpcId: match.groups!.vpcId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for route53.
 */
export class Route53Operations {
	/** IAM actions required for the ActivateKeySigningKey API call. */
	static readonly ACTIVATE_KEY_SIGNING_KEY: string[] = [
		"route53:ActivateKeySigningKey",
	];
	/** IAM actions required for the AssociateVPCWithHostedZone API call. */
	static readonly ASSOCIATE_VPC_WITH_HOSTED_ZONE: string[] = [
		"route53:AssociateVPCWithHostedZone",
	];
	/** IAM actions required for the ChangeCidrCollection API call. */
	static readonly CHANGE_CIDR_COLLECTION: string[] = [
		"route53:ChangeCidrCollection",
	];
	/** IAM actions required for the ChangeResourceRecordSets API call. */
	static readonly CHANGE_RESOURCE_RECORD_SETS: string[] = [
		"route53:ChangeResourceRecordSets",
	];
	/** IAM actions required for the ChangeTagsForResource API call. */
	static readonly CHANGE_TAGS_FOR_RESOURCE: string[] = [
		"route53:ChangeTagsForResource",
	];
	/** IAM actions required for the CreateCidrCollection API call. */
	static readonly CREATE_CIDR_COLLECTION: string[] = [
		"route53:CreateCidrCollection",
	];
	/** IAM actions required for the CreateHealthCheck API call. */
	static readonly CREATE_HEALTH_CHECK: string[] = ["route53:CreateHealthCheck"];
	/** IAM actions required for the CreateHostedZone API call. */
	static readonly CREATE_HOSTED_ZONE: string[] = ["route53:CreateHostedZone"];
	/** IAM actions required for the CreateKeySigningKey API call. */
	static readonly CREATE_KEY_SIGNING_KEY: string[] = [
		"route53:CreateKeySigningKey",
	];
	/** IAM actions required for the CreateQueryLoggingConfig API call. */
	static readonly CREATE_QUERY_LOGGING_CONFIG: string[] = [
		"route53:CreateQueryLoggingConfig",
	];
	/** IAM actions required for the CreateReusableDelegationSet API call. */
	static readonly CREATE_REUSABLE_DELEGATION_SET: string[] = [
		"route53:CreateReusableDelegationSet",
	];
	/** IAM actions required for the CreateTrafficPolicy API call. */
	static readonly CREATE_TRAFFIC_POLICY: string[] = [
		"route53:CreateTrafficPolicy",
	];
	/** IAM actions required for the CreateTrafficPolicyInstance API call. */
	static readonly CREATE_TRAFFIC_POLICY_INSTANCE: string[] = [
		"route53:CreateTrafficPolicyInstance",
	];
	/** IAM actions required for the CreateTrafficPolicyVersion API call. */
	static readonly CREATE_TRAFFIC_POLICY_VERSION: string[] = [
		"route53:CreateTrafficPolicyVersion",
	];
	/** IAM actions required for the CreateVPCAssociationAuthorization API call. */
	static readonly CREATE_VPC_ASSOCIATION_AUTHORIZATION: string[] = [
		"route53:CreateVPCAssociationAuthorization",
	];
	/** IAM actions required for the DeactivateKeySigningKey API call. */
	static readonly DEACTIVATE_KEY_SIGNING_KEY: string[] = [
		"route53:DeactivateKeySigningKey",
	];
	/** IAM actions required for the DeleteCidrCollection API call. */
	static readonly DELETE_CIDR_COLLECTION: string[] = [
		"route53:DeleteCidrCollection",
	];
	/** IAM actions required for the DeleteHealthCheck API call. */
	static readonly DELETE_HEALTH_CHECK: string[] = ["route53:DeleteHealthCheck"];
	/** IAM actions required for the DeleteHostedZone API call. */
	static readonly DELETE_HOSTED_ZONE: string[] = ["route53:DeleteHostedZone"];
	/** IAM actions required for the DeleteKeySigningKey API call. */
	static readonly DELETE_KEY_SIGNING_KEY: string[] = [
		"route53:DeleteKeySigningKey",
	];
	/** IAM actions required for the DeleteQueryLoggingConfig API call. */
	static readonly DELETE_QUERY_LOGGING_CONFIG: string[] = [
		"route53:DeleteQueryLoggingConfig",
	];
	/** IAM actions required for the DeleteReusableDelegationSet API call. */
	static readonly DELETE_REUSABLE_DELEGATION_SET: string[] = [
		"route53:DeleteReusableDelegationSet",
	];
	/** IAM actions required for the DeleteTrafficPolicy API call. */
	static readonly DELETE_TRAFFIC_POLICY: string[] = [
		"route53:DeleteTrafficPolicy",
	];
	/** IAM actions required for the DeleteTrafficPolicyInstance API call. */
	static readonly DELETE_TRAFFIC_POLICY_INSTANCE: string[] = [
		"route53:DeleteTrafficPolicyInstance",
	];
	/** IAM actions required for the DeleteVPCAssociationAuthorization API call. */
	static readonly DELETE_VPC_ASSOCIATION_AUTHORIZATION: string[] = [
		"route53:DeleteVPCAssociationAuthorization",
	];
	/** IAM actions required for the DisableHostedZoneDNSSEC API call. */
	static readonly DISABLE_HOSTED_ZONE_DNSSEC: string[] = [
		"route53:DisableHostedZoneDNSSEC",
	];
	/** IAM actions required for the DisassociateVPCFromHostedZone API call. */
	static readonly DISASSOCIATE_VPC_FROM_HOSTED_ZONE: string[] = [
		"route53:DisassociateVPCFromHostedZone",
	];
	/** IAM actions required for the EnableHostedZoneDNSSEC API call. */
	static readonly ENABLE_HOSTED_ZONE_DNSSEC: string[] = [
		"route53:EnableHostedZoneDNSSEC",
	];
	/** IAM actions required for the GetAccountLimit API call. */
	static readonly GET_ACCOUNT_LIMIT: string[] = ["route53:GetAccountLimit"];
	/** IAM actions required for the GetChange API call. */
	static readonly GET_CHANGE: string[] = ["route53:GetChange"];
	/** IAM actions required for the GetCheckerIpRanges API call. */
	static readonly GET_CHECKER_IP_RANGES: string[] = [
		"route53:GetCheckerIpRanges",
	];
	/** IAM actions required for the GetDNSSEC API call. */
	static readonly GET_DNSSEC: string[] = ["route53:GetDNSSEC"];
	/** IAM actions required for the GetGeoLocation API call. */
	static readonly GET_GEO_LOCATION: string[] = ["route53:GetGeoLocation"];
	/** IAM actions required for the GetHealthCheck API call. */
	static readonly GET_HEALTH_CHECK: string[] = ["route53:GetHealthCheck"];
	/** IAM actions required for the GetHealthCheckCount API call. */
	static readonly GET_HEALTH_CHECK_COUNT: string[] = [
		"route53:GetHealthCheckCount",
	];
	/** IAM actions required for the GetHealthCheckLastFailureReason API call. */
	static readonly GET_HEALTH_CHECK_LAST_FAILURE_REASON: string[] = [
		"route53:GetHealthCheckLastFailureReason",
	];
	/** IAM actions required for the GetHealthCheckStatus API call. */
	static readonly GET_HEALTH_CHECK_STATUS: string[] = [
		"route53:GetHealthCheckStatus",
	];
	/** IAM actions required for the GetHostedZone API call. */
	static readonly GET_HOSTED_ZONE: string[] = ["route53:GetHostedZone"];
	/** IAM actions required for the GetHostedZoneCount API call. */
	static readonly GET_HOSTED_ZONE_COUNT: string[] = [
		"route53:GetHostedZoneCount",
	];
	/** IAM actions required for the GetHostedZoneLimit API call. */
	static readonly GET_HOSTED_ZONE_LIMIT: string[] = [
		"route53:GetHostedZoneLimit",
	];
	/** IAM actions required for the GetQueryLoggingConfig API call. */
	static readonly GET_QUERY_LOGGING_CONFIG: string[] = [
		"route53:GetQueryLoggingConfig",
	];
	/** IAM actions required for the GetReusableDelegationSet API call. */
	static readonly GET_REUSABLE_DELEGATION_SET: string[] = [
		"route53:GetReusableDelegationSet",
	];
	/** IAM actions required for the GetReusableDelegationSetLimit API call. */
	static readonly GET_REUSABLE_DELEGATION_SET_LIMIT: string[] = [
		"route53:GetReusableDelegationSetLimit",
	];
	/** IAM actions required for the GetTrafficPolicy API call. */
	static readonly GET_TRAFFIC_POLICY: string[] = ["route53:GetTrafficPolicy"];
	/** IAM actions required for the GetTrafficPolicyInstance API call. */
	static readonly GET_TRAFFIC_POLICY_INSTANCE: string[] = [
		"route53:GetTrafficPolicyInstance",
	];
	/** IAM actions required for the GetTrafficPolicyInstanceCount API call. */
	static readonly GET_TRAFFIC_POLICY_INSTANCE_COUNT: string[] = [
		"route53:GetTrafficPolicyInstanceCount",
	];
	/** IAM actions required for the ListCidrBlocks API call. */
	static readonly LIST_CIDR_BLOCKS: string[] = ["route53:ListCidrBlocks"];
	/** IAM actions required for the ListCidrCollections API call. */
	static readonly LIST_CIDR_COLLECTIONS: string[] = [
		"route53:ListCidrCollections",
	];
	/** IAM actions required for the ListCidrLocations API call. */
	static readonly LIST_CIDR_LOCATIONS: string[] = ["route53:ListCidrLocations"];
	/** IAM actions required for the ListGeoLocations API call. */
	static readonly LIST_GEO_LOCATIONS: string[] = ["route53:ListGeoLocations"];
	/** IAM actions required for the ListHealthChecks API call. */
	static readonly LIST_HEALTH_CHECKS: string[] = ["route53:ListHealthChecks"];
	/** IAM actions required for the ListHostedZones API call. */
	static readonly LIST_HOSTED_ZONES: string[] = ["route53:ListHostedZones"];
	/** IAM actions required for the ListHostedZonesByName API call. */
	static readonly LIST_HOSTED_ZONES_BY_NAME: string[] = [
		"route53:ListHostedZonesByName",
	];
	/** IAM actions required for the ListHostedZonesByVPC API call. */
	static readonly LIST_HOSTED_ZONES_BY_VPC: string[] = [
		"route53:ListHostedZonesByVPC",
	];
	/** IAM actions required for the ListQueryLoggingConfigs API call. */
	static readonly LIST_QUERY_LOGGING_CONFIGS: string[] = [
		"route53:ListQueryLoggingConfigs",
	];
	/** IAM actions required for the ListResourceRecordSets API call. */
	static readonly LIST_RESOURCE_RECORD_SETS: string[] = [
		"route53:ListResourceRecordSets",
	];
	/** IAM actions required for the ListReusableDelegationSets API call. */
	static readonly LIST_REUSABLE_DELEGATION_SETS: string[] = [
		"route53:ListReusableDelegationSets",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"route53:ListTagsForResource",
	];
	/** IAM actions required for the ListTagsForResources API call. */
	static readonly LIST_TAGS_FOR_RESOURCES: string[] = [
		"route53:ListTagsForResources",
	];
	/** IAM actions required for the ListTrafficPolicies API call. */
	static readonly LIST_TRAFFIC_POLICIES: string[] = [
		"route53:ListTrafficPolicies",
	];
	/** IAM actions required for the ListTrafficPolicyInstances API call. */
	static readonly LIST_TRAFFIC_POLICY_INSTANCES: string[] = [
		"route53:ListTrafficPolicyInstances",
	];
	/** IAM actions required for the ListTrafficPolicyInstancesByHostedZone API call. */
	static readonly LIST_TRAFFIC_POLICY_INSTANCES_BY_HOSTED_ZONE: string[] = [
		"route53:ListTrafficPolicyInstancesByHostedZone",
	];
	/** IAM actions required for the ListTrafficPolicyInstancesByPolicy API call. */
	static readonly LIST_TRAFFIC_POLICY_INSTANCES_BY_POLICY: string[] = [
		"route53:ListTrafficPolicyInstancesByPolicy",
	];
	/** IAM actions required for the ListTrafficPolicyVersions API call. */
	static readonly LIST_TRAFFIC_POLICY_VERSIONS: string[] = [
		"route53:ListTrafficPolicyVersions",
	];
	/** IAM actions required for the ListVPCAssociationAuthorizations API call. */
	static readonly LIST_VPC_ASSOCIATION_AUTHORIZATIONS: string[] = [
		"route53:ListVPCAssociationAuthorizations",
	];
	/** IAM actions required for the TestDNSAnswer API call. */
	static readonly TEST_DNS_ANSWER: string[] = ["route53:TestDNSAnswer"];
	/** IAM actions required for the UpdateHealthCheck API call. */
	static readonly UPDATE_HEALTH_CHECK: string[] = ["route53:UpdateHealthCheck"];
	/** IAM actions required for the UpdateHostedZoneComment API call. */
	static readonly UPDATE_HOSTED_ZONE_COMMENT: string[] = [
		"route53:UpdateHostedZoneComment",
	];
	/** IAM actions required for the UpdateHostedZoneFeatures API call. */
	static readonly UPDATE_HOSTED_ZONE_FEATURES: string[] = [
		"route53:UpdateHostedZoneFeatures",
	];
	/** IAM actions required for the UpdateTrafficPolicyComment API call. */
	static readonly UPDATE_TRAFFIC_POLICY_COMMENT: string[] = [
		"route53:UpdateTrafficPolicyComment",
	];
	/** IAM actions required for the UpdateTrafficPolicyInstance API call. */
	static readonly UPDATE_TRAFFIC_POLICY_INSTANCE: string[] = [
		"route53:UpdateTrafficPolicyInstance",
	];
}

/**
 * Condition key constants and builders for route53.
 */
export class Route53Conditions {
	/** Condition keys applicable to the AssociateVPCWithHostedZone action. */
	static readonly ASSOCIATE_VPC_WITH_HOSTED_ZONE_CONDITION_KEYS: string[] = [
		"route53:VPCs",
	];
	/** Condition keys applicable to the ChangeResourceRecordSets action. */
	static readonly CHANGE_RESOURCE_RECORD_SETS_CONDITION_KEYS: string[] = [
		"route53:ChangeResourceRecordSetsActions",
		"route53:ChangeResourceRecordSetsNormalizedRecordNames",
		"route53:ChangeResourceRecordSetsRecordTypes",
	];
	/** Condition keys applicable to the CreateHostedZone action. */
	static readonly CREATE_HOSTED_ZONE_CONDITION_KEYS: string[] = [
		"route53:VPCs",
	];
	/** Condition keys applicable to the CreateVPCAssociationAuthorization action. */
	static readonly CREATE_VPC_ASSOCIATION_AUTHORIZATION_CONDITION_KEYS: string[] =
		["route53:VPCs"];
	/** Condition keys applicable to the DeleteVPCAssociationAuthorization action. */
	static readonly DELETE_VPC_ASSOCIATION_AUTHORIZATION_CONDITION_KEYS: string[] =
		["route53:VPCs"];
	/** Condition keys applicable to the DisassociateVPCFromHostedZone action. */
	static readonly DISASSOCIATE_VPC_FROM_HOSTED_ZONE_CONDITION_KEYS: string[] = [
		"route53:VPCs",
	];
	/** Condition keys applicable to the ListHostedZonesByVPC action. */
	static readonly LIST_HOSTED_ZONES_BY_VPC_CONDITION_KEYS: string[] = [
		"route53:VPCs",
	];

	/** Condition key: route53:ChangeResourceRecordSetsActions (ArrayOfString) */
	static readonly CHANGE_RESOURCE_RECORD_SETS_ACTIONS =
		"route53:ChangeResourceRecordSetsActions";
	/** Condition key: route53:ChangeResourceRecordSetsNormalizedRecordNames (ArrayOfString) */
	static readonly CHANGE_RESOURCE_RECORD_SETS_NORMALIZED_RECORD_NAMES =
		"route53:ChangeResourceRecordSetsNormalizedRecordNames";
	/** Condition key: route53:ChangeResourceRecordSetsRecordTypes (ArrayOfString) */
	static readonly CHANGE_RESOURCE_RECORD_SETS_RECORD_TYPES =
		"route53:ChangeResourceRecordSetsRecordTypes";
	/** Condition key: route53:VPCs (String) */
	static readonly VP_CS = "route53:VPCs";

	/**
	 * Generates a condition block for `route53:ChangeResourceRecordSetsActions`.
	 */
	static changeResourceRecordSetsActions(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"route53:ChangeResourceRecordSetsActions": values,
			},
		};
	}

	/**
	 * Generates a condition block for `route53:ChangeResourceRecordSetsNormalizedRecordNames`.
	 */
	static changeResourceRecordSetsNormalizedRecordNames(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"route53:ChangeResourceRecordSetsNormalizedRecordNames": values,
			},
		};
	}

	/**
	 * Generates a condition block for `route53:ChangeResourceRecordSetsRecordTypes`.
	 */
	static changeResourceRecordSetsRecordTypes(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"route53:ChangeResourceRecordSetsRecordTypes": values,
			},
		};
	}

	/**
	 * Generates a condition block for `route53:VPCs`.
	 */
	static vpCs(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "route53:VPCs": value } };
	}
}
