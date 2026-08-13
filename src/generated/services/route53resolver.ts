// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/route53resolver.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the route53resolver service.
 */
export class Route53resolverActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "route53resolver";

	/** [Write] route53resolver:AssociateFirewallRuleGroup */
	static readonly ASSOCIATE_FIREWALL_RULE_GROUP =
		"route53resolver:AssociateFirewallRuleGroup";
	/** [Write] route53resolver:AssociateResolverEndpointIpAddress */
	static readonly ASSOCIATE_RESOLVER_ENDPOINT_IP_ADDRESS =
		"route53resolver:AssociateResolverEndpointIpAddress";
	/** [Write] route53resolver:AssociateResolverQueryLogConfig */
	static readonly ASSOCIATE_RESOLVER_QUERY_LOG_CONFIG =
		"route53resolver:AssociateResolverQueryLogConfig";
	/** [Write] route53resolver:AssociateResolverRule */
	static readonly ASSOCIATE_RESOLVER_RULE =
		"route53resolver:AssociateResolverRule";
	/** [Write] route53resolver:CreateFirewallDomainList */
	static readonly CREATE_FIREWALL_DOMAIN_LIST =
		"route53resolver:CreateFirewallDomainList";
	/** [Write] route53resolver:CreateFirewallRule */
	static readonly CREATE_FIREWALL_RULE = "route53resolver:CreateFirewallRule";
	/** [Write] route53resolver:CreateFirewallRuleGroup */
	static readonly CREATE_FIREWALL_RULE_GROUP =
		"route53resolver:CreateFirewallRuleGroup";
	/** [Write] route53resolver:CreateOutpostResolver */
	static readonly CREATE_OUTPOST_RESOLVER =
		"route53resolver:CreateOutpostResolver";
	/** [Write] route53resolver:CreateResolverEndpoint */
	static readonly CREATE_RESOLVER_ENDPOINT =
		"route53resolver:CreateResolverEndpoint";
	/** [Write] route53resolver:CreateResolverQueryLogConfig */
	static readonly CREATE_RESOLVER_QUERY_LOG_CONFIG =
		"route53resolver:CreateResolverQueryLogConfig";
	/** [Write] route53resolver:CreateResolverRule */
	static readonly CREATE_RESOLVER_RULE = "route53resolver:CreateResolverRule";
	/** [Write] route53resolver:DeleteFirewallDomainList */
	static readonly DELETE_FIREWALL_DOMAIN_LIST =
		"route53resolver:DeleteFirewallDomainList";
	/** [Write] route53resolver:DeleteFirewallRule */
	static readonly DELETE_FIREWALL_RULE = "route53resolver:DeleteFirewallRule";
	/** [Write] route53resolver:DeleteFirewallRuleGroup */
	static readonly DELETE_FIREWALL_RULE_GROUP =
		"route53resolver:DeleteFirewallRuleGroup";
	/** [Write] route53resolver:DeleteOutpostResolver */
	static readonly DELETE_OUTPOST_RESOLVER =
		"route53resolver:DeleteOutpostResolver";
	/** [Write] route53resolver:DeleteResolverEndpoint */
	static readonly DELETE_RESOLVER_ENDPOINT =
		"route53resolver:DeleteResolverEndpoint";
	/** [Write] route53resolver:DeleteResolverQueryLogConfig */
	static readonly DELETE_RESOLVER_QUERY_LOG_CONFIG =
		"route53resolver:DeleteResolverQueryLogConfig";
	/** [Write] route53resolver:DeleteResolverRule */
	static readonly DELETE_RESOLVER_RULE = "route53resolver:DeleteResolverRule";
	/** [Write] route53resolver:DisassociateFirewallRuleGroup */
	static readonly DISASSOCIATE_FIREWALL_RULE_GROUP =
		"route53resolver:DisassociateFirewallRuleGroup";
	/** [Write] route53resolver:DisassociateResolverEndpointIpAddress */
	static readonly DISASSOCIATE_RESOLVER_ENDPOINT_IP_ADDRESS =
		"route53resolver:DisassociateResolverEndpointIpAddress";
	/** [Write] route53resolver:DisassociateResolverQueryLogConfig */
	static readonly DISASSOCIATE_RESOLVER_QUERY_LOG_CONFIG =
		"route53resolver:DisassociateResolverQueryLogConfig";
	/** [Write] route53resolver:DisassociateResolverRule */
	static readonly DISASSOCIATE_RESOLVER_RULE =
		"route53resolver:DisassociateResolverRule";
	/** [Read] route53resolver:GetFirewallConfig */
	static readonly GET_FIREWALL_CONFIG = "route53resolver:GetFirewallConfig";
	/** [Read] route53resolver:GetFirewallDomainList */
	static readonly GET_FIREWALL_DOMAIN_LIST =
		"route53resolver:GetFirewallDomainList";
	/** [Read] route53resolver:GetFirewallRuleGroup */
	static readonly GET_FIREWALL_RULE_GROUP =
		"route53resolver:GetFirewallRuleGroup";
	/** [Read] route53resolver:GetFirewallRuleGroupAssociation */
	static readonly GET_FIREWALL_RULE_GROUP_ASSOCIATION =
		"route53resolver:GetFirewallRuleGroupAssociation";
	/** [Read] route53resolver:GetFirewallRuleGroupPolicy */
	static readonly GET_FIREWALL_RULE_GROUP_POLICY =
		"route53resolver:GetFirewallRuleGroupPolicy";
	/** [Read] route53resolver:GetOutpostResolver */
	static readonly GET_OUTPOST_RESOLVER = "route53resolver:GetOutpostResolver";
	/** [Read] route53resolver:GetResolverConfig */
	static readonly GET_RESOLVER_CONFIG = "route53resolver:GetResolverConfig";
	/** [Read] route53resolver:GetResolverDnssecConfig */
	static readonly GET_RESOLVER_DNSSEC_CONFIG =
		"route53resolver:GetResolverDnssecConfig";
	/** [Read] route53resolver:GetResolverEndpoint */
	static readonly GET_RESOLVER_ENDPOINT = "route53resolver:GetResolverEndpoint";
	/** [Read] route53resolver:GetResolverQueryLogConfig */
	static readonly GET_RESOLVER_QUERY_LOG_CONFIG =
		"route53resolver:GetResolverQueryLogConfig";
	/** [Read] route53resolver:GetResolverQueryLogConfigAssociation */
	static readonly GET_RESOLVER_QUERY_LOG_CONFIG_ASSOCIATION =
		"route53resolver:GetResolverQueryLogConfigAssociation";
	/** [Read] route53resolver:GetResolverQueryLogConfigPolicy */
	static readonly GET_RESOLVER_QUERY_LOG_CONFIG_POLICY =
		"route53resolver:GetResolverQueryLogConfigPolicy";
	/** [Read] route53resolver:GetResolverRule */
	static readonly GET_RESOLVER_RULE = "route53resolver:GetResolverRule";
	/** [Read] route53resolver:GetResolverRuleAssociation */
	static readonly GET_RESOLVER_RULE_ASSOCIATION =
		"route53resolver:GetResolverRuleAssociation";
	/** [Read] route53resolver:GetResolverRulePolicy */
	static readonly GET_RESOLVER_RULE_POLICY =
		"route53resolver:GetResolverRulePolicy";
	/** [Write] route53resolver:ImportFirewallDomains */
	static readonly IMPORT_FIREWALL_DOMAINS =
		"route53resolver:ImportFirewallDomains";
	/** [List] route53resolver:ListFirewallConfigs */
	static readonly LIST_FIREWALL_CONFIGS = "route53resolver:ListFirewallConfigs";
	/** [List] route53resolver:ListFirewallDomainLists */
	static readonly LIST_FIREWALL_DOMAIN_LISTS =
		"route53resolver:ListFirewallDomainLists";
	/** [List] route53resolver:ListFirewallDomains */
	static readonly LIST_FIREWALL_DOMAINS = "route53resolver:ListFirewallDomains";
	/** [List] route53resolver:ListFirewallRuleGroupAssociations */
	static readonly LIST_FIREWALL_RULE_GROUP_ASSOCIATIONS =
		"route53resolver:ListFirewallRuleGroupAssociations";
	/** [List] route53resolver:ListFirewallRuleGroups */
	static readonly LIST_FIREWALL_RULE_GROUPS =
		"route53resolver:ListFirewallRuleGroups";
	/** [List] route53resolver:ListFirewallRuleTypes */
	static readonly LIST_FIREWALL_RULE_TYPES =
		"route53resolver:ListFirewallRuleTypes";
	/** [List] route53resolver:ListFirewallRules */
	static readonly LIST_FIREWALL_RULES = "route53resolver:ListFirewallRules";
	/** [List] route53resolver:ListOutpostResolvers */
	static readonly LIST_OUTPOST_RESOLVERS =
		"route53resolver:ListOutpostResolvers";
	/** [List] route53resolver:ListResolverConfigs */
	static readonly LIST_RESOLVER_CONFIGS = "route53resolver:ListResolverConfigs";
	/** [List] route53resolver:ListResolverDnssecConfigs */
	static readonly LIST_RESOLVER_DNSSEC_CONFIGS =
		"route53resolver:ListResolverDnssecConfigs";
	/** [List] route53resolver:ListResolverEndpointIpAddresses */
	static readonly LIST_RESOLVER_ENDPOINT_IP_ADDRESSES =
		"route53resolver:ListResolverEndpointIpAddresses";
	/** [List] route53resolver:ListResolverEndpoints */
	static readonly LIST_RESOLVER_ENDPOINTS =
		"route53resolver:ListResolverEndpoints";
	/** [List] route53resolver:ListResolverQueryLogConfigAssociations */
	static readonly LIST_RESOLVER_QUERY_LOG_CONFIG_ASSOCIATIONS =
		"route53resolver:ListResolverQueryLogConfigAssociations";
	/** [List] route53resolver:ListResolverQueryLogConfigs */
	static readonly LIST_RESOLVER_QUERY_LOG_CONFIGS =
		"route53resolver:ListResolverQueryLogConfigs";
	/** [List] route53resolver:ListResolverRuleAssociations */
	static readonly LIST_RESOLVER_RULE_ASSOCIATIONS =
		"route53resolver:ListResolverRuleAssociations";
	/** [List] route53resolver:ListResolverRules */
	static readonly LIST_RESOLVER_RULES = "route53resolver:ListResolverRules";
	/** [Read] route53resolver:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"route53resolver:ListTagsForResource";
	/** [PermissionManagement] route53resolver:PutFirewallRuleGroupPolicy */
	static readonly PUT_FIREWALL_RULE_GROUP_POLICY =
		"route53resolver:PutFirewallRuleGroupPolicy";
	/** [PermissionManagement] route53resolver:PutResolverQueryLogConfigPolicy */
	static readonly PUT_RESOLVER_QUERY_LOG_CONFIG_POLICY =
		"route53resolver:PutResolverQueryLogConfigPolicy";
	/** [PermissionManagement] route53resolver:PutResolverRulePolicy */
	static readonly PUT_RESOLVER_RULE_POLICY =
		"route53resolver:PutResolverRulePolicy";
	/** [Tagging] route53resolver:TagResource */
	static readonly TAG_RESOURCE = "route53resolver:TagResource";
	/** [Tagging] route53resolver:UntagResource */
	static readonly UNTAG_RESOURCE = "route53resolver:UntagResource";
	/** [Write] route53resolver:UpdateFirewallConfig */
	static readonly UPDATE_FIREWALL_CONFIG =
		"route53resolver:UpdateFirewallConfig";
	/** [Write] route53resolver:UpdateFirewallDomains */
	static readonly UPDATE_FIREWALL_DOMAINS =
		"route53resolver:UpdateFirewallDomains";
	/** [Write] route53resolver:UpdateFirewallRule */
	static readonly UPDATE_FIREWALL_RULE = "route53resolver:UpdateFirewallRule";
	/** [Write] route53resolver:UpdateFirewallRuleGroupAssociation */
	static readonly UPDATE_FIREWALL_RULE_GROUP_ASSOCIATION =
		"route53resolver:UpdateFirewallRuleGroupAssociation";
	/** [Write] route53resolver:UpdateOutpostResolver */
	static readonly UPDATE_OUTPOST_RESOLVER =
		"route53resolver:UpdateOutpostResolver";
	/** [Write] route53resolver:UpdateResolverConfig */
	static readonly UPDATE_RESOLVER_CONFIG =
		"route53resolver:UpdateResolverConfig";
	/** [Write] route53resolver:UpdateResolverDnssecConfig */
	static readonly UPDATE_RESOLVER_DNSSEC_CONFIG =
		"route53resolver:UpdateResolverDnssecConfig";
	/** [Write] route53resolver:UpdateResolverEndpoint */
	static readonly UPDATE_RESOLVER_ENDPOINT =
		"route53resolver:UpdateResolverEndpoint";
	/** [Write] route53resolver:UpdateResolverRule */
	static readonly UPDATE_RESOLVER_RULE = "route53resolver:UpdateResolverRule";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		Route53resolverActions.GET_FIREWALL_CONFIG,
		Route53resolverActions.GET_FIREWALL_DOMAIN_LIST,
		Route53resolverActions.GET_FIREWALL_RULE_GROUP,
		Route53resolverActions.GET_FIREWALL_RULE_GROUP_ASSOCIATION,
		Route53resolverActions.GET_FIREWALL_RULE_GROUP_POLICY,
		Route53resolverActions.GET_OUTPOST_RESOLVER,
		Route53resolverActions.GET_RESOLVER_CONFIG,
		Route53resolverActions.GET_RESOLVER_DNSSEC_CONFIG,
		Route53resolverActions.GET_RESOLVER_ENDPOINT,
		Route53resolverActions.GET_RESOLVER_QUERY_LOG_CONFIG,
		Route53resolverActions.GET_RESOLVER_QUERY_LOG_CONFIG_ASSOCIATION,
		Route53resolverActions.GET_RESOLVER_QUERY_LOG_CONFIG_POLICY,
		Route53resolverActions.GET_RESOLVER_RULE,
		Route53resolverActions.GET_RESOLVER_RULE_ASSOCIATION,
		Route53resolverActions.GET_RESOLVER_RULE_POLICY,
		Route53resolverActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Route53resolverActions.ASSOCIATE_FIREWALL_RULE_GROUP,
		Route53resolverActions.ASSOCIATE_RESOLVER_ENDPOINT_IP_ADDRESS,
		Route53resolverActions.ASSOCIATE_RESOLVER_QUERY_LOG_CONFIG,
		Route53resolverActions.ASSOCIATE_RESOLVER_RULE,
		Route53resolverActions.CREATE_FIREWALL_DOMAIN_LIST,
		Route53resolverActions.CREATE_FIREWALL_RULE,
		Route53resolverActions.CREATE_FIREWALL_RULE_GROUP,
		Route53resolverActions.CREATE_OUTPOST_RESOLVER,
		Route53resolverActions.CREATE_RESOLVER_ENDPOINT,
		Route53resolverActions.CREATE_RESOLVER_QUERY_LOG_CONFIG,
		Route53resolverActions.CREATE_RESOLVER_RULE,
		Route53resolverActions.DELETE_FIREWALL_DOMAIN_LIST,
		Route53resolverActions.DELETE_FIREWALL_RULE,
		Route53resolverActions.DELETE_FIREWALL_RULE_GROUP,
		Route53resolverActions.DELETE_OUTPOST_RESOLVER,
		Route53resolverActions.DELETE_RESOLVER_ENDPOINT,
		Route53resolverActions.DELETE_RESOLVER_QUERY_LOG_CONFIG,
		Route53resolverActions.DELETE_RESOLVER_RULE,
		Route53resolverActions.DISASSOCIATE_FIREWALL_RULE_GROUP,
		Route53resolverActions.DISASSOCIATE_RESOLVER_ENDPOINT_IP_ADDRESS,
		Route53resolverActions.DISASSOCIATE_RESOLVER_QUERY_LOG_CONFIG,
		Route53resolverActions.DISASSOCIATE_RESOLVER_RULE,
		Route53resolverActions.IMPORT_FIREWALL_DOMAINS,
		Route53resolverActions.UPDATE_FIREWALL_CONFIG,
		Route53resolverActions.UPDATE_FIREWALL_DOMAINS,
		Route53resolverActions.UPDATE_FIREWALL_RULE,
		Route53resolverActions.UPDATE_FIREWALL_RULE_GROUP_ASSOCIATION,
		Route53resolverActions.UPDATE_OUTPOST_RESOLVER,
		Route53resolverActions.UPDATE_RESOLVER_CONFIG,
		Route53resolverActions.UPDATE_RESOLVER_DNSSEC_CONFIG,
		Route53resolverActions.UPDATE_RESOLVER_ENDPOINT,
		Route53resolverActions.UPDATE_RESOLVER_RULE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		Route53resolverActions.LIST_FIREWALL_CONFIGS,
		Route53resolverActions.LIST_FIREWALL_DOMAIN_LISTS,
		Route53resolverActions.LIST_FIREWALL_DOMAINS,
		Route53resolverActions.LIST_FIREWALL_RULE_GROUP_ASSOCIATIONS,
		Route53resolverActions.LIST_FIREWALL_RULE_GROUPS,
		Route53resolverActions.LIST_FIREWALL_RULE_TYPES,
		Route53resolverActions.LIST_FIREWALL_RULES,
		Route53resolverActions.LIST_OUTPOST_RESOLVERS,
		Route53resolverActions.LIST_RESOLVER_CONFIGS,
		Route53resolverActions.LIST_RESOLVER_DNSSEC_CONFIGS,
		Route53resolverActions.LIST_RESOLVER_ENDPOINT_IP_ADDRESSES,
		Route53resolverActions.LIST_RESOLVER_ENDPOINTS,
		Route53resolverActions.LIST_RESOLVER_QUERY_LOG_CONFIG_ASSOCIATIONS,
		Route53resolverActions.LIST_RESOLVER_QUERY_LOG_CONFIGS,
		Route53resolverActions.LIST_RESOLVER_RULE_ASSOCIATIONS,
		Route53resolverActions.LIST_RESOLVER_RULES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		Route53resolverActions.PUT_FIREWALL_RULE_GROUP_POLICY,
		Route53resolverActions.PUT_RESOLVER_QUERY_LOG_CONFIG_POLICY,
		Route53resolverActions.PUT_RESOLVER_RULE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		Route53resolverActions.TAG_RESOURCE,
		Route53resolverActions.UNTAG_RESOURCE,
	];
}

const AutodefinedRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53resolver:(?<region>[^:]*):(?<account>[^:]*):autodefined-rule/(?<resourceId>[^:/?]+)$",
);
const FirewallConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53resolver:(?<region>[^:]*):(?<account>[^:]*):firewall-config/(?<resourceId>[^:/?]+)$",
);
const FirewallDomainListArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53resolver:(?<region>[^:]*):(?<account>[^:]*):firewall-domain-list/(?<resourceId>[^:/?]+)$",
);
const FirewallRuleGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53resolver:(?<region>[^:]*):(?<account>[^:]*):firewall-rule-group/(?<resourceId>[^:/?]+)$",
);
const FirewallRuleGroupAssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53resolver:(?<region>[^:]*):(?<account>[^:]*):firewall-rule-group-association/(?<resourceId>[^:/?]+)$",
);
const OutpostResolverArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53resolver:(?<region>[^:]*):(?<account>[^:]*):outpost-resolver/(?<resourceId>[^:/?]+)$",
);
const ResolverConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53resolver:(?<region>[^:]*):(?<account>[^:]*):resolver-config/(?<resourceId>[^:/?]+)$",
);
const ResolverDnssecConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53resolver:(?<region>[^:]*):(?<account>[^:]*):resolver-dnssec-config/(?<resourceId>[^:/?]+)$",
);
const ResolverEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53resolver:(?<region>[^:]*):(?<account>[^:]*):resolver-endpoint/(?<resourceId>[^:/?]+)$",
);
const ResolverQueryLogConfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53resolver:(?<region>[^:]*):(?<account>[^:]*):resolver-query-log-config/(?<resourceId>[^:/?]+)$",
);
const ResolverRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53resolver:(?<region>[^:]*):(?<account>[^:]*):resolver-rule/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for route53resolver resources.
 */
export class Route53resolverResources {
	/**
	 * Builds an ARN for the autodefined-rule resource.
	 */
	static autodefinedRule(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53resolver:${props.region ?? "*"}:${props.account ?? "*"}:autodefined-rule/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the autodefined-rule resource.
	 */
	static isValidAutodefinedRuleArn(arn: string): boolean {
		return AutodefinedRuleArnRegex.test(arn);
	}

	/**
	 * Parses a autodefined-rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutodefinedRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AutodefinedRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid autodefined-rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the firewall-config resource.
	 */
	static firewallConfig(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53resolver:${props.region ?? "*"}:${props.account ?? "*"}:firewall-config/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the firewall-config resource.
	 */
	static isValidFirewallConfigArn(arn: string): boolean {
		return FirewallConfigArnRegex.test(arn);
	}

	/**
	 * Parses a firewall-config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFirewallConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = FirewallConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid firewall-config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the firewall-domain-list resource.
	 */
	static firewallDomainList(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53resolver:${props.region ?? "*"}:${props.account ?? "*"}:firewall-domain-list/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the firewall-domain-list resource.
	 */
	static isValidFirewallDomainListArn(arn: string): boolean {
		return FirewallDomainListArnRegex.test(arn);
	}

	/**
	 * Parses a firewall-domain-list ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFirewallDomainListArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = FirewallDomainListArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid firewall-domain-list ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the firewall-rule-group resource.
	 */
	static firewallRuleGroup(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53resolver:${props.region ?? "*"}:${props.account ?? "*"}:firewall-rule-group/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the firewall-rule-group resource.
	 */
	static isValidFirewallRuleGroupArn(arn: string): boolean {
		return FirewallRuleGroupArnRegex.test(arn);
	}

	/**
	 * Parses a firewall-rule-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFirewallRuleGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = FirewallRuleGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid firewall-rule-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the firewall-rule-group-association resource.
	 */
	static firewallRuleGroupAssociation(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53resolver:${props.region ?? "*"}:${props.account ?? "*"}:firewall-rule-group-association/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the firewall-rule-group-association resource.
	 */
	static isValidFirewallRuleGroupAssociationArn(arn: string): boolean {
		return FirewallRuleGroupAssociationArnRegex.test(arn);
	}

	/**
	 * Parses a firewall-rule-group-association ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFirewallRuleGroupAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = FirewallRuleGroupAssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid firewall-rule-group-association ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the outpost-resolver resource.
	 */
	static outpostResolver(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53resolver:${props.region ?? "*"}:${props.account ?? "*"}:outpost-resolver/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the outpost-resolver resource.
	 */
	static isValidOutpostResolverArn(arn: string): boolean {
		return OutpostResolverArnRegex.test(arn);
	}

	/**
	 * Parses a outpost-resolver ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOutpostResolverArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = OutpostResolverArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid outpost-resolver ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the resolver-config resource.
	 */
	static resolverConfig(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53resolver:${props.region ?? "*"}:${props.account ?? "*"}:resolver-config/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resolver-config resource.
	 */
	static isValidResolverConfigArn(arn: string): boolean {
		return ResolverConfigArnRegex.test(arn);
	}

	/**
	 * Parses a resolver-config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResolverConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ResolverConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resolver-config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the resolver-dnssec-config resource.
	 */
	static resolverDnssecConfig(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53resolver:${props.region ?? "*"}:${props.account ?? "*"}:resolver-dnssec-config/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resolver-dnssec-config resource.
	 */
	static isValidResolverDnssecConfigArn(arn: string): boolean {
		return ResolverDnssecConfigArnRegex.test(arn);
	}

	/**
	 * Parses a resolver-dnssec-config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResolverDnssecConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ResolverDnssecConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resolver-dnssec-config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the resolver-endpoint resource.
	 */
	static resolverEndpoint(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53resolver:${props.region ?? "*"}:${props.account ?? "*"}:resolver-endpoint/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resolver-endpoint resource.
	 */
	static isValidResolverEndpointArn(arn: string): boolean {
		return ResolverEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a resolver-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResolverEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ResolverEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resolver-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the resolver-query-log-config resource.
	 */
	static resolverQueryLogConfig(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53resolver:${props.region ?? "*"}:${props.account ?? "*"}:resolver-query-log-config/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resolver-query-log-config resource.
	 */
	static isValidResolverQueryLogConfigArn(arn: string): boolean {
		return ResolverQueryLogConfigArnRegex.test(arn);
	}

	/**
	 * Parses a resolver-query-log-config ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResolverQueryLogConfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ResolverQueryLogConfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resolver-query-log-config ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the resolver-rule resource.
	 */
	static resolverRule(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53resolver:${props.region ?? "*"}:${props.account ?? "*"}:resolver-rule/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resolver-rule resource.
	 */
	static isValidResolverRuleArn(arn: string): boolean {
		return ResolverRuleArnRegex.test(arn);
	}

	/**
	 * Parses a resolver-rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResolverRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ResolverRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resolver-rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for route53resolver.
 */
export class Route53resolverOperations {
	/** IAM actions required for the AssociateFirewallRuleGroup API call. */
	static readonly ASSOCIATE_FIREWALL_RULE_GROUP: string[] = [
		"route53resolver:AssociateFirewallRuleGroup",
		"route53resolver:TagResource",
	];
	/** IAM actions required for the AssociateResolverEndpointIpAddress API call. */
	static readonly ASSOCIATE_RESOLVER_ENDPOINT_IP_ADDRESS: string[] = [
		"route53resolver:AssociateResolverEndpointIpAddress",
	];
	/** IAM actions required for the AssociateResolverQueryLogConfig API call. */
	static readonly ASSOCIATE_RESOLVER_QUERY_LOG_CONFIG: string[] = [
		"route53resolver:AssociateResolverQueryLogConfig",
	];
	/** IAM actions required for the AssociateResolverRule API call. */
	static readonly ASSOCIATE_RESOLVER_RULE: string[] = [
		"route53resolver:AssociateResolverRule",
	];
	/** IAM actions required for the BatchCreateFirewallRule API call. */
	static readonly BATCH_CREATE_FIREWALL_RULE: string[] = [
		"route53resolver:CreateFirewallRule",
	];
	/** IAM actions required for the BatchDeleteFirewallRule API call. */
	static readonly BATCH_DELETE_FIREWALL_RULE: string[] = [
		"route53resolver:DeleteFirewallRule",
	];
	/** IAM actions required for the BatchUpdateFirewallRule API call. */
	static readonly BATCH_UPDATE_FIREWALL_RULE: string[] = [
		"route53resolver:UpdateFirewallRule",
	];
	/** IAM actions required for the CreateFirewallDomainList API call. */
	static readonly CREATE_FIREWALL_DOMAIN_LIST: string[] = [
		"route53resolver:CreateFirewallDomainList",
		"route53resolver:TagResource",
	];
	/** IAM actions required for the CreateFirewallRule API call. */
	static readonly CREATE_FIREWALL_RULE: string[] = [
		"route53resolver:CreateFirewallRule",
	];
	/** IAM actions required for the CreateFirewallRuleGroup API call. */
	static readonly CREATE_FIREWALL_RULE_GROUP: string[] = [
		"route53resolver:CreateFirewallRuleGroup",
		"route53resolver:TagResource",
	];
	/** IAM actions required for the CreateOutpostResolver API call. */
	static readonly CREATE_OUTPOST_RESOLVER: string[] = [
		"route53resolver:CreateOutpostResolver",
		"route53resolver:TagResource",
	];
	/** IAM actions required for the CreateResolverEndpoint API call. */
	static readonly CREATE_RESOLVER_ENDPOINT: string[] = [
		"route53resolver:CreateResolverEndpoint",
		"route53resolver:TagResource",
	];
	/** IAM actions required for the CreateResolverQueryLogConfig API call. */
	static readonly CREATE_RESOLVER_QUERY_LOG_CONFIG: string[] = [
		"route53resolver:CreateResolverQueryLogConfig",
		"route53resolver:TagResource",
	];
	/** IAM actions required for the CreateResolverRule API call. */
	static readonly CREATE_RESOLVER_RULE: string[] = [
		"route53resolver:CreateResolverRule",
		"route53resolver:TagResource",
	];
	/** IAM actions required for the DeleteFirewallDomainList API call. */
	static readonly DELETE_FIREWALL_DOMAIN_LIST: string[] = [
		"route53resolver:DeleteFirewallDomainList",
	];
	/** IAM actions required for the DeleteFirewallRule API call. */
	static readonly DELETE_FIREWALL_RULE: string[] = [
		"route53resolver:DeleteFirewallRule",
	];
	/** IAM actions required for the DeleteFirewallRuleGroup API call. */
	static readonly DELETE_FIREWALL_RULE_GROUP: string[] = [
		"route53resolver:DeleteFirewallRuleGroup",
	];
	/** IAM actions required for the DeleteOutpostResolver API call. */
	static readonly DELETE_OUTPOST_RESOLVER: string[] = [
		"route53resolver:DeleteOutpostResolver",
	];
	/** IAM actions required for the DeleteResolverEndpoint API call. */
	static readonly DELETE_RESOLVER_ENDPOINT: string[] = [
		"route53resolver:DeleteResolverEndpoint",
	];
	/** IAM actions required for the DeleteResolverQueryLogConfig API call. */
	static readonly DELETE_RESOLVER_QUERY_LOG_CONFIG: string[] = [
		"route53resolver:DeleteResolverQueryLogConfig",
	];
	/** IAM actions required for the DeleteResolverRule API call. */
	static readonly DELETE_RESOLVER_RULE: string[] = [
		"route53resolver:DeleteResolverRule",
	];
	/** IAM actions required for the DisassociateFirewallRuleGroup API call. */
	static readonly DISASSOCIATE_FIREWALL_RULE_GROUP: string[] = [
		"route53resolver:DisassociateFirewallRuleGroup",
	];
	/** IAM actions required for the DisassociateResolverEndpointIpAddress API call. */
	static readonly DISASSOCIATE_RESOLVER_ENDPOINT_IP_ADDRESS: string[] = [
		"route53resolver:DisassociateResolverEndpointIpAddress",
	];
	/** IAM actions required for the DisassociateResolverQueryLogConfig API call. */
	static readonly DISASSOCIATE_RESOLVER_QUERY_LOG_CONFIG: string[] = [
		"route53resolver:DisassociateResolverQueryLogConfig",
	];
	/** IAM actions required for the DisassociateResolverRule API call. */
	static readonly DISASSOCIATE_RESOLVER_RULE: string[] = [
		"route53resolver:DisassociateResolverRule",
	];
	/** IAM actions required for the GetFirewallConfig API call. */
	static readonly GET_FIREWALL_CONFIG: string[] = [
		"route53resolver:GetFirewallConfig",
	];
	/** IAM actions required for the GetFirewallDomainList API call. */
	static readonly GET_FIREWALL_DOMAIN_LIST: string[] = [
		"route53resolver:GetFirewallDomainList",
	];
	/** IAM actions required for the GetFirewallRuleGroup API call. */
	static readonly GET_FIREWALL_RULE_GROUP: string[] = [
		"route53resolver:GetFirewallRuleGroup",
	];
	/** IAM actions required for the GetFirewallRuleGroupAssociation API call. */
	static readonly GET_FIREWALL_RULE_GROUP_ASSOCIATION: string[] = [
		"route53resolver:GetFirewallRuleGroupAssociation",
	];
	/** IAM actions required for the GetFirewallRuleGroupPolicy API call. */
	static readonly GET_FIREWALL_RULE_GROUP_POLICY: string[] = [
		"route53resolver:GetFirewallRuleGroupPolicy",
	];
	/** IAM actions required for the GetOutpostResolver API call. */
	static readonly GET_OUTPOST_RESOLVER: string[] = [
		"route53resolver:GetOutpostResolver",
	];
	/** IAM actions required for the GetResolverConfig API call. */
	static readonly GET_RESOLVER_CONFIG: string[] = [
		"route53resolver:GetResolverConfig",
	];
	/** IAM actions required for the GetResolverDnssecConfig API call. */
	static readonly GET_RESOLVER_DNSSEC_CONFIG: string[] = [
		"route53resolver:GetResolverDnssecConfig",
	];
	/** IAM actions required for the GetResolverEndpoint API call. */
	static readonly GET_RESOLVER_ENDPOINT: string[] = [
		"route53resolver:GetResolverEndpoint",
	];
	/** IAM actions required for the GetResolverQueryLogConfig API call. */
	static readonly GET_RESOLVER_QUERY_LOG_CONFIG: string[] = [
		"route53resolver:GetResolverQueryLogConfig",
	];
	/** IAM actions required for the GetResolverQueryLogConfigAssociation API call. */
	static readonly GET_RESOLVER_QUERY_LOG_CONFIG_ASSOCIATION: string[] = [
		"route53resolver:GetResolverQueryLogConfigAssociation",
	];
	/** IAM actions required for the GetResolverQueryLogConfigPolicy API call. */
	static readonly GET_RESOLVER_QUERY_LOG_CONFIG_POLICY: string[] = [
		"route53resolver:GetResolverQueryLogConfigPolicy",
	];
	/** IAM actions required for the GetResolverRule API call. */
	static readonly GET_RESOLVER_RULE: string[] = [
		"route53resolver:GetResolverRule",
	];
	/** IAM actions required for the GetResolverRuleAssociation API call. */
	static readonly GET_RESOLVER_RULE_ASSOCIATION: string[] = [
		"route53resolver:GetResolverRuleAssociation",
	];
	/** IAM actions required for the GetResolverRulePolicy API call. */
	static readonly GET_RESOLVER_RULE_POLICY: string[] = [
		"route53resolver:GetResolverRulePolicy",
	];
	/** IAM actions required for the ImportFirewallDomains API call. */
	static readonly IMPORT_FIREWALL_DOMAINS: string[] = [
		"route53resolver:ImportFirewallDomains",
	];
	/** IAM actions required for the ListFirewallConfigs API call. */
	static readonly LIST_FIREWALL_CONFIGS: string[] = [
		"route53resolver:ListFirewallConfigs",
	];
	/** IAM actions required for the ListFirewallDomainLists API call. */
	static readonly LIST_FIREWALL_DOMAIN_LISTS: string[] = [
		"route53resolver:ListFirewallDomainLists",
	];
	/** IAM actions required for the ListFirewallDomains API call. */
	static readonly LIST_FIREWALL_DOMAINS: string[] = [
		"route53resolver:ListFirewallDomains",
	];
	/** IAM actions required for the ListFirewallRuleGroupAssociations API call. */
	static readonly LIST_FIREWALL_RULE_GROUP_ASSOCIATIONS: string[] = [
		"route53resolver:ListFirewallRuleGroupAssociations",
	];
	/** IAM actions required for the ListFirewallRuleGroups API call. */
	static readonly LIST_FIREWALL_RULE_GROUPS: string[] = [
		"route53resolver:ListFirewallRuleGroups",
	];
	/** IAM actions required for the ListFirewallRuleTypes API call. */
	static readonly LIST_FIREWALL_RULE_TYPES: string[] = [
		"route53resolver:ListFirewallRuleTypes",
	];
	/** IAM actions required for the ListFirewallRules API call. */
	static readonly LIST_FIREWALL_RULES: string[] = [
		"route53resolver:ListFirewallRules",
	];
	/** IAM actions required for the ListOutpostResolvers API call. */
	static readonly LIST_OUTPOST_RESOLVERS: string[] = [
		"route53resolver:ListOutpostResolvers",
	];
	/** IAM actions required for the ListResolverConfigs API call. */
	static readonly LIST_RESOLVER_CONFIGS: string[] = [
		"route53resolver:ListResolverConfigs",
	];
	/** IAM actions required for the ListResolverDnssecConfigs API call. */
	static readonly LIST_RESOLVER_DNSSEC_CONFIGS: string[] = [
		"route53resolver:ListResolverDnssecConfigs",
	];
	/** IAM actions required for the ListResolverEndpointIpAddresses API call. */
	static readonly LIST_RESOLVER_ENDPOINT_IP_ADDRESSES: string[] = [
		"route53resolver:ListResolverEndpointIpAddresses",
	];
	/** IAM actions required for the ListResolverEndpoints API call. */
	static readonly LIST_RESOLVER_ENDPOINTS: string[] = [
		"route53resolver:ListResolverEndpoints",
	];
	/** IAM actions required for the ListResolverQueryLogConfigAssociations API call. */
	static readonly LIST_RESOLVER_QUERY_LOG_CONFIG_ASSOCIATIONS: string[] = [
		"route53resolver:ListResolverQueryLogConfigAssociations",
	];
	/** IAM actions required for the ListResolverQueryLogConfigs API call. */
	static readonly LIST_RESOLVER_QUERY_LOG_CONFIGS: string[] = [
		"route53resolver:ListResolverQueryLogConfigs",
	];
	/** IAM actions required for the ListResolverRuleAssociations API call. */
	static readonly LIST_RESOLVER_RULE_ASSOCIATIONS: string[] = [
		"route53resolver:ListResolverRuleAssociations",
	];
	/** IAM actions required for the ListResolverRules API call. */
	static readonly LIST_RESOLVER_RULES: string[] = [
		"route53resolver:ListResolverRules",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"route53resolver:ListTagsForResource",
	];
	/** IAM actions required for the PutFirewallRuleGroupPolicy API call. */
	static readonly PUT_FIREWALL_RULE_GROUP_POLICY: string[] = [
		"route53resolver:PutFirewallRuleGroupPolicy",
	];
	/** IAM actions required for the PutResolverQueryLogConfigPolicy API call. */
	static readonly PUT_RESOLVER_QUERY_LOG_CONFIG_POLICY: string[] = [
		"route53resolver:PutResolverQueryLogConfigPolicy",
	];
	/** IAM actions required for the PutResolverRulePolicy API call. */
	static readonly PUT_RESOLVER_RULE_POLICY: string[] = [
		"route53resolver:PutResolverRulePolicy",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["route53resolver:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["route53resolver:UntagResource"];
	/** IAM actions required for the UpdateFirewallConfig API call. */
	static readonly UPDATE_FIREWALL_CONFIG: string[] = [
		"route53resolver:UpdateFirewallConfig",
	];
	/** IAM actions required for the UpdateFirewallDomains API call. */
	static readonly UPDATE_FIREWALL_DOMAINS: string[] = [
		"route53resolver:UpdateFirewallDomains",
	];
	/** IAM actions required for the UpdateFirewallRule API call. */
	static readonly UPDATE_FIREWALL_RULE: string[] = [
		"route53resolver:UpdateFirewallRule",
	];
	/** IAM actions required for the UpdateFirewallRuleGroupAssociation API call. */
	static readonly UPDATE_FIREWALL_RULE_GROUP_ASSOCIATION: string[] = [
		"route53resolver:UpdateFirewallRuleGroupAssociation",
	];
	/** IAM actions required for the UpdateOutpostResolver API call. */
	static readonly UPDATE_OUTPOST_RESOLVER: string[] = [
		"route53resolver:UpdateOutpostResolver",
	];
	/** IAM actions required for the UpdateResolverConfig API call. */
	static readonly UPDATE_RESOLVER_CONFIG: string[] = [
		"route53resolver:UpdateResolverConfig",
	];
	/** IAM actions required for the UpdateResolverDnssecConfig API call. */
	static readonly UPDATE_RESOLVER_DNSSEC_CONFIG: string[] = [
		"route53resolver:UpdateResolverDnssecConfig",
	];
	/** IAM actions required for the UpdateResolverEndpoint API call. */
	static readonly UPDATE_RESOLVER_ENDPOINT: string[] = [
		"route53resolver:UpdateResolverEndpoint",
	];
	/** IAM actions required for the UpdateResolverRule API call. */
	static readonly UPDATE_RESOLVER_RULE: string[] = [
		"route53resolver:UpdateResolverRule",
	];
}

/**
 * Condition key constants and builders for route53resolver.
 */
export class Route53resolverConditions {
	/** Condition keys applicable to the AssociateFirewallRuleGroup action. */
	static readonly ASSOCIATE_FIREWALL_RULE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFirewallDomainList action. */
	static readonly CREATE_FIREWALL_DOMAIN_LIST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFirewallRuleGroup action. */
	static readonly CREATE_FIREWALL_RULE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOutpostResolver action. */
	static readonly CREATE_OUTPOST_RESOLVER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResolverEndpoint action. */
	static readonly CREATE_RESOLVER_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResolverQueryLogConfig action. */
	static readonly CREATE_RESOLVER_QUERY_LOG_CONFIG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResolverRule action. */
	static readonly CREATE_RESOLVER_RULE_CONDITION_KEYS: string[] = [
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
