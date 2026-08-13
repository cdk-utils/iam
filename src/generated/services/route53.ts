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
	static readonly ActivateKeySigningKey = "route53:ActivateKeySigningKey";
	/** [Write] route53:AssociateVPCWithHostedZone */
	static readonly AssociateVPCWithHostedZone =
		"route53:AssociateVPCWithHostedZone";
	/** [Write] route53:ChangeCidrCollection */
	static readonly ChangeCidrCollection = "route53:ChangeCidrCollection";
	/** [Write] route53:ChangeResourceRecordSets */
	static readonly ChangeResourceRecordSets = "route53:ChangeResourceRecordSets";
	/** [Tagging] route53:ChangeTagsForResource */
	static readonly ChangeTagsForResource = "route53:ChangeTagsForResource";
	/** [Write] route53:CreateCidrCollection */
	static readonly CreateCidrCollection = "route53:CreateCidrCollection";
	/** [Write] route53:CreateHealthCheck */
	static readonly CreateHealthCheck = "route53:CreateHealthCheck";
	/** [Write] route53:CreateHostedZone */
	static readonly CreateHostedZone = "route53:CreateHostedZone";
	/** [Write] route53:CreateKeySigningKey */
	static readonly CreateKeySigningKey = "route53:CreateKeySigningKey";
	/** [Write] route53:CreateQueryLoggingConfig */
	static readonly CreateQueryLoggingConfig = "route53:CreateQueryLoggingConfig";
	/** [Write] route53:CreateReusableDelegationSet */
	static readonly CreateReusableDelegationSet =
		"route53:CreateReusableDelegationSet";
	/** [Write] route53:CreateTrafficPolicy */
	static readonly CreateTrafficPolicy = "route53:CreateTrafficPolicy";
	/** [Write] route53:CreateTrafficPolicyInstance */
	static readonly CreateTrafficPolicyInstance =
		"route53:CreateTrafficPolicyInstance";
	/** [Write] route53:CreateTrafficPolicyVersion */
	static readonly CreateTrafficPolicyVersion =
		"route53:CreateTrafficPolicyVersion";
	/** [Write] route53:CreateVPCAssociationAuthorization */
	static readonly CreateVPCAssociationAuthorization =
		"route53:CreateVPCAssociationAuthorization";
	/** [Write] route53:DeactivateKeySigningKey */
	static readonly DeactivateKeySigningKey = "route53:DeactivateKeySigningKey";
	/** [Write] route53:DeleteCidrCollection */
	static readonly DeleteCidrCollection = "route53:DeleteCidrCollection";
	/** [Write] route53:DeleteHealthCheck */
	static readonly DeleteHealthCheck = "route53:DeleteHealthCheck";
	/** [Write] route53:DeleteHostedZone */
	static readonly DeleteHostedZone = "route53:DeleteHostedZone";
	/** [Write] route53:DeleteKeySigningKey */
	static readonly DeleteKeySigningKey = "route53:DeleteKeySigningKey";
	/** [Write] route53:DeleteQueryLoggingConfig */
	static readonly DeleteQueryLoggingConfig = "route53:DeleteQueryLoggingConfig";
	/** [Write] route53:DeleteReusableDelegationSet */
	static readonly DeleteReusableDelegationSet =
		"route53:DeleteReusableDelegationSet";
	/** [Write] route53:DeleteTrafficPolicy */
	static readonly DeleteTrafficPolicy = "route53:DeleteTrafficPolicy";
	/** [Write] route53:DeleteTrafficPolicyInstance */
	static readonly DeleteTrafficPolicyInstance =
		"route53:DeleteTrafficPolicyInstance";
	/** [Write] route53:DeleteVPCAssociationAuthorization */
	static readonly DeleteVPCAssociationAuthorization =
		"route53:DeleteVPCAssociationAuthorization";
	/** [Write] route53:DisableHostedZoneDNSSEC */
	static readonly DisableHostedZoneDNSSEC = "route53:DisableHostedZoneDNSSEC";
	/** [Write] route53:DisassociateVPCFromHostedZone */
	static readonly DisassociateVPCFromHostedZone =
		"route53:DisassociateVPCFromHostedZone";
	/** [Write] route53:EnableHostedZoneDNSSEC */
	static readonly EnableHostedZoneDNSSEC = "route53:EnableHostedZoneDNSSEC";
	/** [Read] route53:GetAccountLimit */
	static readonly actionGetAccountLimit = "route53:GetAccountLimit";
	/** [List] route53:GetChange */
	static readonly actionGetChange = "route53:GetChange";
	/** [List] route53:GetCheckerIpRanges */
	static readonly actionGetCheckerIpRanges = "route53:GetCheckerIpRanges";
	/** [Read] route53:GetDNSSEC */
	static readonly actionGetDNSSEC = "route53:GetDNSSEC";
	/** [List] route53:GetGeoLocation */
	static readonly actionGetGeoLocation = "route53:GetGeoLocation";
	/** [Read] route53:GetHealthCheck */
	static readonly actionGetHealthCheck = "route53:GetHealthCheck";
	/** [List] route53:GetHealthCheckCount */
	static readonly actionGetHealthCheckCount = "route53:GetHealthCheckCount";
	/** [List] route53:GetHealthCheckLastFailureReason */
	static readonly actionGetHealthCheckLastFailureReason =
		"route53:GetHealthCheckLastFailureReason";
	/** [List] route53:GetHealthCheckStatus */
	static readonly actionGetHealthCheckStatus = "route53:GetHealthCheckStatus";
	/** [List] route53:GetHostedZone */
	static readonly actionGetHostedZone = "route53:GetHostedZone";
	/** [List] route53:GetHostedZoneCount */
	static readonly actionGetHostedZoneCount = "route53:GetHostedZoneCount";
	/** [Read] route53:GetHostedZoneLimit */
	static readonly actionGetHostedZoneLimit = "route53:GetHostedZoneLimit";
	/** [Read] route53:GetQueryLoggingConfig */
	static readonly actionGetQueryLoggingConfig = "route53:GetQueryLoggingConfig";
	/** [List] route53:GetReusableDelegationSet */
	static readonly actionGetReusableDelegationSet =
		"route53:GetReusableDelegationSet";
	/** [Read] route53:GetReusableDelegationSetLimit */
	static readonly actionGetReusableDelegationSetLimit =
		"route53:GetReusableDelegationSetLimit";
	/** [Read] route53:GetTrafficPolicy */
	static readonly actionGetTrafficPolicy = "route53:GetTrafficPolicy";
	/** [Read] route53:GetTrafficPolicyInstance */
	static readonly actionGetTrafficPolicyInstance =
		"route53:GetTrafficPolicyInstance";
	/** [Read] route53:GetTrafficPolicyInstanceCount */
	static readonly actionGetTrafficPolicyInstanceCount =
		"route53:GetTrafficPolicyInstanceCount";
	/** [List] route53:ListCidrBlocks */
	static readonly ListCidrBlocks = "route53:ListCidrBlocks";
	/** [List] route53:ListCidrCollections */
	static readonly ListCidrCollections = "route53:ListCidrCollections";
	/** [List] route53:ListCidrLocations */
	static readonly ListCidrLocations = "route53:ListCidrLocations";
	/** [Read] route53:ListGeoLocations */
	static readonly ListGeoLocations = "route53:ListGeoLocations";
	/** [Read] route53:ListHealthChecks */
	static readonly ListHealthChecks = "route53:ListHealthChecks";
	/** [List] route53:ListHostedZones */
	static readonly ListHostedZones = "route53:ListHostedZones";
	/** [List] route53:ListHostedZonesByName */
	static readonly ListHostedZonesByName = "route53:ListHostedZonesByName";
	/** [List] route53:ListHostedZonesByVPC */
	static readonly ListHostedZonesByVPC = "route53:ListHostedZonesByVPC";
	/** [List] route53:ListQueryLoggingConfigs */
	static readonly ListQueryLoggingConfigs = "route53:ListQueryLoggingConfigs";
	/** [List] route53:ListResourceRecordSets */
	static readonly ListResourceRecordSets = "route53:ListResourceRecordSets";
	/** [Read] route53:ListReusableDelegationSets */
	static readonly ListReusableDelegationSets =
		"route53:ListReusableDelegationSets";
	/** [Read] route53:ListTagsForResource */
	static readonly ListTagsForResource = "route53:ListTagsForResource";
	/** [Read] route53:ListTagsForResources */
	static readonly ListTagsForResources = "route53:ListTagsForResources";
	/** [List] route53:ListTrafficPolicies */
	static readonly ListTrafficPolicies = "route53:ListTrafficPolicies";
	/** [Read] route53:ListTrafficPolicyInstances */
	static readonly ListTrafficPolicyInstances =
		"route53:ListTrafficPolicyInstances";
	/** [List] route53:ListTrafficPolicyInstancesByHostedZone */
	static readonly ListTrafficPolicyInstancesByHostedZone =
		"route53:ListTrafficPolicyInstancesByHostedZone";
	/** [List] route53:ListTrafficPolicyInstancesByPolicy */
	static readonly ListTrafficPolicyInstancesByPolicy =
		"route53:ListTrafficPolicyInstancesByPolicy";
	/** [List] route53:ListTrafficPolicyVersions */
	static readonly ListTrafficPolicyVersions =
		"route53:ListTrafficPolicyVersions";
	/** [List] route53:ListVPCAssociationAuthorizations */
	static readonly ListVPCAssociationAuthorizations =
		"route53:ListVPCAssociationAuthorizations";
	/** [Read] route53:TestDNSAnswer */
	static readonly TestDNSAnswer = "route53:TestDNSAnswer";
	/** [Write] route53:UpdateHealthCheck */
	static readonly UpdateHealthCheck = "route53:UpdateHealthCheck";
	/** [Write] route53:UpdateHostedZoneComment */
	static readonly UpdateHostedZoneComment = "route53:UpdateHostedZoneComment";
	/** [Write] route53:UpdateHostedZoneFeatures */
	static readonly UpdateHostedZoneFeatures = "route53:UpdateHostedZoneFeatures";
	/** [Write] route53:UpdateTrafficPolicyComment */
	static readonly UpdateTrafficPolicyComment =
		"route53:UpdateTrafficPolicyComment";
	/** [Write] route53:UpdateTrafficPolicyInstance */
	static readonly UpdateTrafficPolicyInstance =
		"route53:UpdateTrafficPolicyInstance";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		Route53Actions.actionGetAccountLimit,
		Route53Actions.actionGetDNSSEC,
		Route53Actions.actionGetHealthCheck,
		Route53Actions.actionGetHostedZoneLimit,
		Route53Actions.actionGetQueryLoggingConfig,
		Route53Actions.actionGetReusableDelegationSetLimit,
		Route53Actions.actionGetTrafficPolicy,
		Route53Actions.actionGetTrafficPolicyInstance,
		Route53Actions.actionGetTrafficPolicyInstanceCount,
		Route53Actions.ListGeoLocations,
		Route53Actions.ListHealthChecks,
		Route53Actions.ListReusableDelegationSets,
		Route53Actions.ListTagsForResource,
		Route53Actions.ListTagsForResources,
		Route53Actions.ListTrafficPolicyInstances,
		Route53Actions.TestDNSAnswer,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Route53Actions.ActivateKeySigningKey,
		Route53Actions.AssociateVPCWithHostedZone,
		Route53Actions.ChangeCidrCollection,
		Route53Actions.ChangeResourceRecordSets,
		Route53Actions.CreateCidrCollection,
		Route53Actions.CreateHealthCheck,
		Route53Actions.CreateHostedZone,
		Route53Actions.CreateKeySigningKey,
		Route53Actions.CreateQueryLoggingConfig,
		Route53Actions.CreateReusableDelegationSet,
		Route53Actions.CreateTrafficPolicy,
		Route53Actions.CreateTrafficPolicyInstance,
		Route53Actions.CreateTrafficPolicyVersion,
		Route53Actions.CreateVPCAssociationAuthorization,
		Route53Actions.DeactivateKeySigningKey,
		Route53Actions.DeleteCidrCollection,
		Route53Actions.DeleteHealthCheck,
		Route53Actions.DeleteHostedZone,
		Route53Actions.DeleteKeySigningKey,
		Route53Actions.DeleteQueryLoggingConfig,
		Route53Actions.DeleteReusableDelegationSet,
		Route53Actions.DeleteTrafficPolicy,
		Route53Actions.DeleteTrafficPolicyInstance,
		Route53Actions.DeleteVPCAssociationAuthorization,
		Route53Actions.DisableHostedZoneDNSSEC,
		Route53Actions.DisassociateVPCFromHostedZone,
		Route53Actions.EnableHostedZoneDNSSEC,
		Route53Actions.UpdateHealthCheck,
		Route53Actions.UpdateHostedZoneComment,
		Route53Actions.UpdateHostedZoneFeatures,
		Route53Actions.UpdateTrafficPolicyComment,
		Route53Actions.UpdateTrafficPolicyInstance,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		Route53Actions.actionGetChange,
		Route53Actions.actionGetCheckerIpRanges,
		Route53Actions.actionGetGeoLocation,
		Route53Actions.actionGetHealthCheckCount,
		Route53Actions.actionGetHealthCheckLastFailureReason,
		Route53Actions.actionGetHealthCheckStatus,
		Route53Actions.actionGetHostedZone,
		Route53Actions.actionGetHostedZoneCount,
		Route53Actions.actionGetReusableDelegationSet,
		Route53Actions.ListCidrBlocks,
		Route53Actions.ListCidrCollections,
		Route53Actions.ListCidrLocations,
		Route53Actions.ListHostedZones,
		Route53Actions.ListHostedZonesByName,
		Route53Actions.ListHostedZonesByVPC,
		Route53Actions.ListQueryLoggingConfigs,
		Route53Actions.ListResourceRecordSets,
		Route53Actions.ListTrafficPolicies,
		Route53Actions.ListTrafficPolicyInstancesByHostedZone,
		Route53Actions.ListTrafficPolicyInstancesByPolicy,
		Route53Actions.ListTrafficPolicyVersions,
		Route53Actions.ListVPCAssociationAuthorizations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		Route53Actions.ChangeTagsForResource,
	];
}

/**
 * Properties for building a change ARN.
 */
export interface Route53ChangeArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a change ARN.
 */
export interface Route53ChangeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a cidrcollection ARN.
 */
export interface Route53CidrcollectionArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cidrcollection ARN.
 */
export interface Route53CidrcollectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a delegationset ARN.
 */
export interface Route53DelegationsetArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a delegationset ARN.
 */
export interface Route53DelegationsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a healthcheck ARN.
 */
export interface Route53HealthcheckArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a healthcheck ARN.
 */
export interface Route53HealthcheckArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a hostedzone ARN.
 */
export interface Route53HostedzoneArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a hostedzone ARN.
 */
export interface Route53HostedzoneArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a queryloggingconfig ARN.
 */
export interface Route53QueryloggingconfigArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a queryloggingconfig ARN.
 */
export interface Route53QueryloggingconfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a trafficpolicy ARN.
 */
export interface Route53TrafficpolicyArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a trafficpolicy ARN.
 */
export interface Route53TrafficpolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a trafficpolicyinstance ARN.
 */
export interface Route53TrafficpolicyinstanceArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a trafficpolicyinstance ARN.
 */
export interface Route53TrafficpolicyinstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a vpc ARN.
 */
export interface Route53VPCArnProps {
	/** The VpcId component of the ARN. */
	readonly vpcId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a vpc ARN.
 */
export interface Route53VPCArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VpcId component. */
	readonly vpcId: string;
}

const ChangeArnRegex =
	/^arn:(?<partition>[^:]+):route53:::change\/(?<id>[^:/?]+)$/;
const CidrcollectionArnRegex =
	/^arn:(?<partition>[^:]+):route53:::cidrcollection\/(?<id>[^:/?]+)$/;
const DelegationsetArnRegex =
	/^arn:(?<partition>[^:]+):route53:::delegationset\/(?<id>[^:/?]+)$/;
const HealthcheckArnRegex =
	/^arn:(?<partition>[^:]+):route53:::healthcheck\/(?<id>[^:/?]+)$/;
const HostedzoneArnRegex =
	/^arn:(?<partition>[^:]+):route53:::hostedzone\/(?<id>[^:/?]+)$/;
const QueryloggingconfigArnRegex =
	/^arn:(?<partition>[^:]+):route53:::queryloggingconfig\/(?<id>[^:/?]+)$/;
const TrafficpolicyArnRegex =
	/^arn:(?<partition>[^:]+):route53:::trafficpolicy\/(?<id>[^:/?]+)$/;
const TrafficpolicyinstanceArnRegex =
	/^arn:(?<partition>[^:]+):route53:::trafficpolicyinstance\/(?<id>[^:/?]+)$/;
const VPCArnRegex =
	/^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):vpc\/(?<vpcId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for route53 resources.
 */
export class Route53Resources {
	/**
	 * Builds an ARN for the change resource.
	 */
	static change(props: Route53ChangeArnProps): string {
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
	static parseChangeArn(arn: string): Route53ChangeArnComponents {
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
	static cidrcollection(props: Route53CidrcollectionArnProps): string {
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
	static parseCidrcollectionArn(
		arn: string,
	): Route53CidrcollectionArnComponents {
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
	static delegationset(props: Route53DelegationsetArnProps): string {
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
	static parseDelegationsetArn(arn: string): Route53DelegationsetArnComponents {
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
	static healthcheck(props: Route53HealthcheckArnProps): string {
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
	static parseHealthcheckArn(arn: string): Route53HealthcheckArnComponents {
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
	static hostedzone(props: Route53HostedzoneArnProps): string {
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
	static parseHostedzoneArn(arn: string): Route53HostedzoneArnComponents {
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
	static queryloggingconfig(props: Route53QueryloggingconfigArnProps): string {
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
	static parseQueryloggingconfigArn(
		arn: string,
	): Route53QueryloggingconfigArnComponents {
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
	static trafficpolicy(props: Route53TrafficpolicyArnProps): string {
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
	static parseTrafficpolicyArn(arn: string): Route53TrafficpolicyArnComponents {
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
	static trafficpolicyinstance(
		props: Route53TrafficpolicyinstanceArnProps,
	): string {
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
	static parseTrafficpolicyinstanceArn(
		arn: string,
	): Route53TrafficpolicyinstanceArnComponents {
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
	static vpc(props: Route53VPCArnProps): string {
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
	static parseVPCArn(arn: string): Route53VPCArnComponents {
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
	static readonly ActivateKeySigningKey: string[] = [
		"route53:ActivateKeySigningKey",
	];
	/** IAM actions required for the AssociateVPCWithHostedZone API call. */
	static readonly AssociateVPCWithHostedZone: string[] = [
		"route53:AssociateVPCWithHostedZone",
	];
	/** IAM actions required for the ChangeCidrCollection API call. */
	static readonly ChangeCidrCollection: string[] = [
		"route53:ChangeCidrCollection",
	];
	/** IAM actions required for the ChangeResourceRecordSets API call. */
	static readonly ChangeResourceRecordSets: string[] = [
		"route53:ChangeResourceRecordSets",
	];
	/** IAM actions required for the ChangeTagsForResource API call. */
	static readonly ChangeTagsForResource: string[] = [
		"route53:ChangeTagsForResource",
	];
	/** IAM actions required for the CreateCidrCollection API call. */
	static readonly CreateCidrCollection: string[] = [
		"route53:CreateCidrCollection",
	];
	/** IAM actions required for the CreateHealthCheck API call. */
	static readonly CreateHealthCheck: string[] = ["route53:CreateHealthCheck"];
	/** IAM actions required for the CreateHostedZone API call. */
	static readonly CreateHostedZone: string[] = ["route53:CreateHostedZone"];
	/** IAM actions required for the CreateKeySigningKey API call. */
	static readonly CreateKeySigningKey: string[] = [
		"route53:CreateKeySigningKey",
	];
	/** IAM actions required for the CreateQueryLoggingConfig API call. */
	static readonly CreateQueryLoggingConfig: string[] = [
		"route53:CreateQueryLoggingConfig",
	];
	/** IAM actions required for the CreateReusableDelegationSet API call. */
	static readonly CreateReusableDelegationSet: string[] = [
		"route53:CreateReusableDelegationSet",
	];
	/** IAM actions required for the CreateTrafficPolicy API call. */
	static readonly CreateTrafficPolicy: string[] = [
		"route53:CreateTrafficPolicy",
	];
	/** IAM actions required for the CreateTrafficPolicyInstance API call. */
	static readonly CreateTrafficPolicyInstance: string[] = [
		"route53:CreateTrafficPolicyInstance",
	];
	/** IAM actions required for the CreateTrafficPolicyVersion API call. */
	static readonly CreateTrafficPolicyVersion: string[] = [
		"route53:CreateTrafficPolicyVersion",
	];
	/** IAM actions required for the CreateVPCAssociationAuthorization API call. */
	static readonly CreateVPCAssociationAuthorization: string[] = [
		"route53:CreateVPCAssociationAuthorization",
	];
	/** IAM actions required for the DeactivateKeySigningKey API call. */
	static readonly DeactivateKeySigningKey: string[] = [
		"route53:DeactivateKeySigningKey",
	];
	/** IAM actions required for the DeleteCidrCollection API call. */
	static readonly DeleteCidrCollection: string[] = [
		"route53:DeleteCidrCollection",
	];
	/** IAM actions required for the DeleteHealthCheck API call. */
	static readonly DeleteHealthCheck: string[] = ["route53:DeleteHealthCheck"];
	/** IAM actions required for the DeleteHostedZone API call. */
	static readonly DeleteHostedZone: string[] = ["route53:DeleteHostedZone"];
	/** IAM actions required for the DeleteKeySigningKey API call. */
	static readonly DeleteKeySigningKey: string[] = [
		"route53:DeleteKeySigningKey",
	];
	/** IAM actions required for the DeleteQueryLoggingConfig API call. */
	static readonly DeleteQueryLoggingConfig: string[] = [
		"route53:DeleteQueryLoggingConfig",
	];
	/** IAM actions required for the DeleteReusableDelegationSet API call. */
	static readonly DeleteReusableDelegationSet: string[] = [
		"route53:DeleteReusableDelegationSet",
	];
	/** IAM actions required for the DeleteTrafficPolicy API call. */
	static readonly DeleteTrafficPolicy: string[] = [
		"route53:DeleteTrafficPolicy",
	];
	/** IAM actions required for the DeleteTrafficPolicyInstance API call. */
	static readonly DeleteTrafficPolicyInstance: string[] = [
		"route53:DeleteTrafficPolicyInstance",
	];
	/** IAM actions required for the DeleteVPCAssociationAuthorization API call. */
	static readonly DeleteVPCAssociationAuthorization: string[] = [
		"route53:DeleteVPCAssociationAuthorization",
	];
	/** IAM actions required for the DisableHostedZoneDNSSEC API call. */
	static readonly DisableHostedZoneDNSSEC: string[] = [
		"route53:DisableHostedZoneDNSSEC",
	];
	/** IAM actions required for the DisassociateVPCFromHostedZone API call. */
	static readonly DisassociateVPCFromHostedZone: string[] = [
		"route53:DisassociateVPCFromHostedZone",
	];
	/** IAM actions required for the EnableHostedZoneDNSSEC API call. */
	static readonly EnableHostedZoneDNSSEC: string[] = [
		"route53:EnableHostedZoneDNSSEC",
	];
	/** IAM actions required for the GetAccountLimit API call. */
	static readonly opGetAccountLimit: string[] = ["route53:GetAccountLimit"];
	/** IAM actions required for the GetChange API call. */
	static readonly opGetChange: string[] = ["route53:GetChange"];
	/** IAM actions required for the GetCheckerIpRanges API call. */
	static readonly opGetCheckerIpRanges: string[] = [
		"route53:GetCheckerIpRanges",
	];
	/** IAM actions required for the GetDNSSEC API call. */
	static readonly opGetDNSSEC: string[] = ["route53:GetDNSSEC"];
	/** IAM actions required for the GetGeoLocation API call. */
	static readonly opGetGeoLocation: string[] = ["route53:GetGeoLocation"];
	/** IAM actions required for the GetHealthCheck API call. */
	static readonly opGetHealthCheck: string[] = ["route53:GetHealthCheck"];
	/** IAM actions required for the GetHealthCheckCount API call. */
	static readonly opGetHealthCheckCount: string[] = [
		"route53:GetHealthCheckCount",
	];
	/** IAM actions required for the GetHealthCheckLastFailureReason API call. */
	static readonly opGetHealthCheckLastFailureReason: string[] = [
		"route53:GetHealthCheckLastFailureReason",
	];
	/** IAM actions required for the GetHealthCheckStatus API call. */
	static readonly opGetHealthCheckStatus: string[] = [
		"route53:GetHealthCheckStatus",
	];
	/** IAM actions required for the GetHostedZone API call. */
	static readonly opGetHostedZone: string[] = ["route53:GetHostedZone"];
	/** IAM actions required for the GetHostedZoneCount API call. */
	static readonly opGetHostedZoneCount: string[] = [
		"route53:GetHostedZoneCount",
	];
	/** IAM actions required for the GetHostedZoneLimit API call. */
	static readonly opGetHostedZoneLimit: string[] = [
		"route53:GetHostedZoneLimit",
	];
	/** IAM actions required for the GetQueryLoggingConfig API call. */
	static readonly opGetQueryLoggingConfig: string[] = [
		"route53:GetQueryLoggingConfig",
	];
	/** IAM actions required for the GetReusableDelegationSet API call. */
	static readonly opGetReusableDelegationSet: string[] = [
		"route53:GetReusableDelegationSet",
	];
	/** IAM actions required for the GetReusableDelegationSetLimit API call. */
	static readonly opGetReusableDelegationSetLimit: string[] = [
		"route53:GetReusableDelegationSetLimit",
	];
	/** IAM actions required for the GetTrafficPolicy API call. */
	static readonly opGetTrafficPolicy: string[] = ["route53:GetTrafficPolicy"];
	/** IAM actions required for the GetTrafficPolicyInstance API call. */
	static readonly opGetTrafficPolicyInstance: string[] = [
		"route53:GetTrafficPolicyInstance",
	];
	/** IAM actions required for the GetTrafficPolicyInstanceCount API call. */
	static readonly opGetTrafficPolicyInstanceCount: string[] = [
		"route53:GetTrafficPolicyInstanceCount",
	];
	/** IAM actions required for the ListCidrBlocks API call. */
	static readonly ListCidrBlocks: string[] = ["route53:ListCidrBlocks"];
	/** IAM actions required for the ListCidrCollections API call. */
	static readonly ListCidrCollections: string[] = [
		"route53:ListCidrCollections",
	];
	/** IAM actions required for the ListCidrLocations API call. */
	static readonly ListCidrLocations: string[] = ["route53:ListCidrLocations"];
	/** IAM actions required for the ListGeoLocations API call. */
	static readonly ListGeoLocations: string[] = ["route53:ListGeoLocations"];
	/** IAM actions required for the ListHealthChecks API call. */
	static readonly ListHealthChecks: string[] = ["route53:ListHealthChecks"];
	/** IAM actions required for the ListHostedZones API call. */
	static readonly ListHostedZones: string[] = ["route53:ListHostedZones"];
	/** IAM actions required for the ListHostedZonesByName API call. */
	static readonly ListHostedZonesByName: string[] = [
		"route53:ListHostedZonesByName",
	];
	/** IAM actions required for the ListHostedZonesByVPC API call. */
	static readonly ListHostedZonesByVPC: string[] = [
		"route53:ListHostedZonesByVPC",
	];
	/** IAM actions required for the ListQueryLoggingConfigs API call. */
	static readonly ListQueryLoggingConfigs: string[] = [
		"route53:ListQueryLoggingConfigs",
	];
	/** IAM actions required for the ListResourceRecordSets API call. */
	static readonly ListResourceRecordSets: string[] = [
		"route53:ListResourceRecordSets",
	];
	/** IAM actions required for the ListReusableDelegationSets API call. */
	static readonly ListReusableDelegationSets: string[] = [
		"route53:ListReusableDelegationSets",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"route53:ListTagsForResource",
	];
	/** IAM actions required for the ListTagsForResources API call. */
	static readonly ListTagsForResources: string[] = [
		"route53:ListTagsForResources",
	];
	/** IAM actions required for the ListTrafficPolicies API call. */
	static readonly ListTrafficPolicies: string[] = [
		"route53:ListTrafficPolicies",
	];
	/** IAM actions required for the ListTrafficPolicyInstances API call. */
	static readonly ListTrafficPolicyInstances: string[] = [
		"route53:ListTrafficPolicyInstances",
	];
	/** IAM actions required for the ListTrafficPolicyInstancesByHostedZone API call. */
	static readonly ListTrafficPolicyInstancesByHostedZone: string[] = [
		"route53:ListTrafficPolicyInstancesByHostedZone",
	];
	/** IAM actions required for the ListTrafficPolicyInstancesByPolicy API call. */
	static readonly ListTrafficPolicyInstancesByPolicy: string[] = [
		"route53:ListTrafficPolicyInstancesByPolicy",
	];
	/** IAM actions required for the ListTrafficPolicyVersions API call. */
	static readonly ListTrafficPolicyVersions: string[] = [
		"route53:ListTrafficPolicyVersions",
	];
	/** IAM actions required for the ListVPCAssociationAuthorizations API call. */
	static readonly ListVPCAssociationAuthorizations: string[] = [
		"route53:ListVPCAssociationAuthorizations",
	];
	/** IAM actions required for the TestDNSAnswer API call. */
	static readonly TestDNSAnswer: string[] = ["route53:TestDNSAnswer"];
	/** IAM actions required for the UpdateHealthCheck API call. */
	static readonly UpdateHealthCheck: string[] = ["route53:UpdateHealthCheck"];
	/** IAM actions required for the UpdateHostedZoneComment API call. */
	static readonly UpdateHostedZoneComment: string[] = [
		"route53:UpdateHostedZoneComment",
	];
	/** IAM actions required for the UpdateHostedZoneFeatures API call. */
	static readonly UpdateHostedZoneFeatures: string[] = [
		"route53:UpdateHostedZoneFeatures",
	];
	/** IAM actions required for the UpdateTrafficPolicyComment API call. */
	static readonly UpdateTrafficPolicyComment: string[] = [
		"route53:UpdateTrafficPolicyComment",
	];
	/** IAM actions required for the UpdateTrafficPolicyInstance API call. */
	static readonly UpdateTrafficPolicyInstance: string[] = [
		"route53:UpdateTrafficPolicyInstance",
	];
}

/**
 * Condition key constants and builders for route53.
 */
export class Route53Conditions {
	/** Condition keys applicable to the AssociateVPCWithHostedZone action. */
	static readonly AssociateVPCWithHostedZoneConditionKeys: string[] = [
		"route53:VPCs",
	];
	/** Condition keys applicable to the ChangeResourceRecordSets action. */
	static readonly ChangeResourceRecordSetsConditionKeys: string[] = [
		"route53:ChangeResourceRecordSetsActions",
		"route53:ChangeResourceRecordSetsNormalizedRecordNames",
		"route53:ChangeResourceRecordSetsRecordTypes",
	];
	/** Condition keys applicable to the CreateHostedZone action. */
	static readonly CreateHostedZoneConditionKeys: string[] = ["route53:VPCs"];
	/** Condition keys applicable to the CreateVPCAssociationAuthorization action. */
	static readonly CreateVPCAssociationAuthorizationConditionKeys: string[] = [
		"route53:VPCs",
	];
	/** Condition keys applicable to the DeleteVPCAssociationAuthorization action. */
	static readonly DeleteVPCAssociationAuthorizationConditionKeys: string[] = [
		"route53:VPCs",
	];
	/** Condition keys applicable to the DisassociateVPCFromHostedZone action. */
	static readonly DisassociateVPCFromHostedZoneConditionKeys: string[] = [
		"route53:VPCs",
	];
	/** Condition keys applicable to the ListHostedZonesByVPC action. */
	static readonly ListHostedZonesByVPCConditionKeys: string[] = [
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
