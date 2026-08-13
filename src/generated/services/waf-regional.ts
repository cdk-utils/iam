// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/waf-regional.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================


/**
 * IAM action constants for the waf-regional service.
 */
export class WAFRegionalActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "waf-regional";

	/** [Write] waf-regional:AssociateWebACL */
	static readonly ASSOCIATE_WEB_ACL = "waf-regional:AssociateWebACL";
	/** [Write] waf-regional:CreateByteMatchSet */
	static readonly CREATE_BYTE_MATCH_SET = "waf-regional:CreateByteMatchSet";
	/** [Write] waf-regional:CreateGeoMatchSet */
	static readonly CREATE_GEO_MATCH_SET = "waf-regional:CreateGeoMatchSet";
	/** [Write] waf-regional:CreateIPSet */
	static readonly CREATE_IP_SET = "waf-regional:CreateIPSet";
	/** [Write] waf-regional:CreateRateBasedRule */
	static readonly CREATE_RATE_BASED_RULE = "waf-regional:CreateRateBasedRule";
	/** [Write] waf-regional:CreateRegexMatchSet */
	static readonly CREATE_REGEX_MATCH_SET = "waf-regional:CreateRegexMatchSet";
	/** [Write] waf-regional:CreateRegexPatternSet */
	static readonly CREATE_REGEX_PATTERN_SET = "waf-regional:CreateRegexPatternSet";
	/** [Write] waf-regional:CreateRule */
	static readonly CREATE_RULE = "waf-regional:CreateRule";
	/** [Write] waf-regional:CreateRuleGroup */
	static readonly CREATE_RULE_GROUP = "waf-regional:CreateRuleGroup";
	/** [Write] waf-regional:CreateSizeConstraintSet */
	static readonly CREATE_SIZE_CONSTRAINT_SET = "waf-regional:CreateSizeConstraintSet";
	/** [Write] waf-regional:CreateSqlInjectionMatchSet */
	static readonly CREATE_SQL_INJECTION_MATCH_SET = "waf-regional:CreateSqlInjectionMatchSet";
	/** [PermissionManagement] waf-regional:CreateWebACL */
	static readonly CREATE_WEB_ACL = "waf-regional:CreateWebACL";
	/** [Write] waf-regional:CreateWebACLMigrationStack */
	static readonly CREATE_WEB_ACL_MIGRATION_STACK = "waf-regional:CreateWebACLMigrationStack";
	/** [Write] waf-regional:CreateXssMatchSet */
	static readonly CREATE_XSS_MATCH_SET = "waf-regional:CreateXssMatchSet";
	/** [Write] waf-regional:DeleteByteMatchSet */
	static readonly DELETE_BYTE_MATCH_SET = "waf-regional:DeleteByteMatchSet";
	/** [Write] waf-regional:DeleteGeoMatchSet */
	static readonly DELETE_GEO_MATCH_SET = "waf-regional:DeleteGeoMatchSet";
	/** [Write] waf-regional:DeleteIPSet */
	static readonly DELETE_IP_SET = "waf-regional:DeleteIPSet";
	/** [Write] waf-regional:DeleteLoggingConfiguration */
	static readonly DELETE_LOGGING_CONFIGURATION = "waf-regional:DeleteLoggingConfiguration";
	/** [PermissionManagement] waf-regional:DeletePermissionPolicy */
	static readonly DELETE_PERMISSION_POLICY = "waf-regional:DeletePermissionPolicy";
	/** [Write] waf-regional:DeleteRateBasedRule */
	static readonly DELETE_RATE_BASED_RULE = "waf-regional:DeleteRateBasedRule";
	/** [Write] waf-regional:DeleteRegexMatchSet */
	static readonly DELETE_REGEX_MATCH_SET = "waf-regional:DeleteRegexMatchSet";
	/** [Write] waf-regional:DeleteRegexPatternSet */
	static readonly DELETE_REGEX_PATTERN_SET = "waf-regional:DeleteRegexPatternSet";
	/** [Write] waf-regional:DeleteRule */
	static readonly DELETE_RULE = "waf-regional:DeleteRule";
	/** [Write] waf-regional:DeleteRuleGroup */
	static readonly DELETE_RULE_GROUP = "waf-regional:DeleteRuleGroup";
	/** [Write] waf-regional:DeleteSizeConstraintSet */
	static readonly DELETE_SIZE_CONSTRAINT_SET = "waf-regional:DeleteSizeConstraintSet";
	/** [Write] waf-regional:DeleteSqlInjectionMatchSet */
	static readonly DELETE_SQL_INJECTION_MATCH_SET = "waf-regional:DeleteSqlInjectionMatchSet";
	/** [PermissionManagement] waf-regional:DeleteWebACL */
	static readonly DELETE_WEB_ACL = "waf-regional:DeleteWebACL";
	/** [Write] waf-regional:DeleteXssMatchSet */
	static readonly DELETE_XSS_MATCH_SET = "waf-regional:DeleteXssMatchSet";
	/** [Write] waf-regional:DisassociateWebACL */
	static readonly DISASSOCIATE_WEB_ACL = "waf-regional:DisassociateWebACL";
	/** [Read] waf-regional:GetByteMatchSet */
	static readonly GET_BYTE_MATCH_SET = "waf-regional:GetByteMatchSet";
	/** [Read] waf-regional:GetChangeToken */
	static readonly GET_CHANGE_TOKEN = "waf-regional:GetChangeToken";
	/** [Read] waf-regional:GetChangeTokenStatus */
	static readonly GET_CHANGE_TOKEN_STATUS = "waf-regional:GetChangeTokenStatus";
	/** [Read] waf-regional:GetGeoMatchSet */
	static readonly GET_GEO_MATCH_SET = "waf-regional:GetGeoMatchSet";
	/** [Read] waf-regional:GetIPSet */
	static readonly GET_IP_SET = "waf-regional:GetIPSet";
	/** [Read] waf-regional:GetLoggingConfiguration */
	static readonly GET_LOGGING_CONFIGURATION = "waf-regional:GetLoggingConfiguration";
	/** [Read] waf-regional:GetPermissionPolicy */
	static readonly GET_PERMISSION_POLICY = "waf-regional:GetPermissionPolicy";
	/** [Read] waf-regional:GetRateBasedRule */
	static readonly GET_RATE_BASED_RULE = "waf-regional:GetRateBasedRule";
	/** [Read] waf-regional:GetRateBasedRuleManagedKeys */
	static readonly GET_RATE_BASED_RULE_MANAGED_KEYS = "waf-regional:GetRateBasedRuleManagedKeys";
	/** [Read] waf-regional:GetRegexMatchSet */
	static readonly GET_REGEX_MATCH_SET = "waf-regional:GetRegexMatchSet";
	/** [Read] waf-regional:GetRegexPatternSet */
	static readonly GET_REGEX_PATTERN_SET = "waf-regional:GetRegexPatternSet";
	/** [Read] waf-regional:GetRule */
	static readonly GET_RULE = "waf-regional:GetRule";
	/** [Read] waf-regional:GetRuleGroup */
	static readonly GET_RULE_GROUP = "waf-regional:GetRuleGroup";
	/** [Read] waf-regional:GetSampledRequests */
	static readonly GET_SAMPLED_REQUESTS = "waf-regional:GetSampledRequests";
	/** [Read] waf-regional:GetSizeConstraintSet */
	static readonly GET_SIZE_CONSTRAINT_SET = "waf-regional:GetSizeConstraintSet";
	/** [Read] waf-regional:GetSqlInjectionMatchSet */
	static readonly GET_SQL_INJECTION_MATCH_SET = "waf-regional:GetSqlInjectionMatchSet";
	/** [Read] waf-regional:GetWebACL */
	static readonly GET_WEB_ACL = "waf-regional:GetWebACL";
	/** [Read] waf-regional:GetWebACLForResource */
	static readonly GET_WEB_ACL_FOR_RESOURCE = "waf-regional:GetWebACLForResource";
	/** [Read] waf-regional:GetXssMatchSet */
	static readonly GET_XSS_MATCH_SET = "waf-regional:GetXssMatchSet";
	/** [List] waf-regional:ListActivatedRulesInRuleGroup */
	static readonly LIST_ACTIVATED_RULES_IN_RULE_GROUP = "waf-regional:ListActivatedRulesInRuleGroup";
	/** [List] waf-regional:ListByteMatchSets */
	static readonly LIST_BYTE_MATCH_SETS = "waf-regional:ListByteMatchSets";
	/** [List] waf-regional:ListGeoMatchSets */
	static readonly LIST_GEO_MATCH_SETS = "waf-regional:ListGeoMatchSets";
	/** [List] waf-regional:ListIPSets */
	static readonly LIST_IP_SETS = "waf-regional:ListIPSets";
	/** [List] waf-regional:ListLoggingConfigurations */
	static readonly LIST_LOGGING_CONFIGURATIONS = "waf-regional:ListLoggingConfigurations";
	/** [List] waf-regional:ListRateBasedRules */
	static readonly LIST_RATE_BASED_RULES = "waf-regional:ListRateBasedRules";
	/** [List] waf-regional:ListRegexMatchSets */
	static readonly LIST_REGEX_MATCH_SETS = "waf-regional:ListRegexMatchSets";
	/** [List] waf-regional:ListRegexPatternSets */
	static readonly LIST_REGEX_PATTERN_SETS = "waf-regional:ListRegexPatternSets";
	/** [List] waf-regional:ListResourcesForWebACL */
	static readonly LIST_RESOURCES_FOR_WEB_ACL = "waf-regional:ListResourcesForWebACL";
	/** [List] waf-regional:ListRuleGroups */
	static readonly LIST_RULE_GROUPS = "waf-regional:ListRuleGroups";
	/** [List] waf-regional:ListRules */
	static readonly LIST_RULES = "waf-regional:ListRules";
	/** [List] waf-regional:ListSizeConstraintSets */
	static readonly LIST_SIZE_CONSTRAINT_SETS = "waf-regional:ListSizeConstraintSets";
	/** [List] waf-regional:ListSqlInjectionMatchSets */
	static readonly LIST_SQL_INJECTION_MATCH_SETS = "waf-regional:ListSqlInjectionMatchSets";
	/** [List] waf-regional:ListSubscribedRuleGroups */
	static readonly LIST_SUBSCRIBED_RULE_GROUPS = "waf-regional:ListSubscribedRuleGroups";
	/** [Read] waf-regional:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "waf-regional:ListTagsForResource";
	/** [List] waf-regional:ListWebACLs */
	static readonly LIST_WEB_AC_LS = "waf-regional:ListWebACLs";
	/** [List] waf-regional:ListXssMatchSets */
	static readonly LIST_XSS_MATCH_SETS = "waf-regional:ListXssMatchSets";
	/** [Write] waf-regional:PutLoggingConfiguration */
	static readonly PUT_LOGGING_CONFIGURATION = "waf-regional:PutLoggingConfiguration";
	/** [PermissionManagement] waf-regional:PutPermissionPolicy */
	static readonly PUT_PERMISSION_POLICY = "waf-regional:PutPermissionPolicy";
	/** [Tagging] waf-regional:TagResource */
	static readonly TAG_RESOURCE = "waf-regional:TagResource";
	/** [Tagging] waf-regional:UntagResource */
	static readonly UNTAG_RESOURCE = "waf-regional:UntagResource";
	/** [Write] waf-regional:UpdateByteMatchSet */
	static readonly UPDATE_BYTE_MATCH_SET = "waf-regional:UpdateByteMatchSet";
	/** [Write] waf-regional:UpdateGeoMatchSet */
	static readonly UPDATE_GEO_MATCH_SET = "waf-regional:UpdateGeoMatchSet";
	/** [Write] waf-regional:UpdateIPSet */
	static readonly UPDATE_IP_SET = "waf-regional:UpdateIPSet";
	/** [Write] waf-regional:UpdateRateBasedRule */
	static readonly UPDATE_RATE_BASED_RULE = "waf-regional:UpdateRateBasedRule";
	/** [Write] waf-regional:UpdateRegexMatchSet */
	static readonly UPDATE_REGEX_MATCH_SET = "waf-regional:UpdateRegexMatchSet";
	/** [Write] waf-regional:UpdateRegexPatternSet */
	static readonly UPDATE_REGEX_PATTERN_SET = "waf-regional:UpdateRegexPatternSet";
	/** [Write] waf-regional:UpdateRule */
	static readonly UPDATE_RULE = "waf-regional:UpdateRule";
	/** [Write] waf-regional:UpdateRuleGroup */
	static readonly UPDATE_RULE_GROUP = "waf-regional:UpdateRuleGroup";
	/** [Write] waf-regional:UpdateSizeConstraintSet */
	static readonly UPDATE_SIZE_CONSTRAINT_SET = "waf-regional:UpdateSizeConstraintSet";
	/** [Write] waf-regional:UpdateSqlInjectionMatchSet */
	static readonly UPDATE_SQL_INJECTION_MATCH_SET = "waf-regional:UpdateSqlInjectionMatchSet";
	/** [PermissionManagement] waf-regional:UpdateWebACL */
	static readonly UPDATE_WEB_ACL = "waf-regional:UpdateWebACL";
	/** [Write] waf-regional:UpdateXssMatchSet */
	static readonly UPDATE_XSS_MATCH_SET = "waf-regional:UpdateXssMatchSet";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [WAFRegionalActions.GET_BYTE_MATCH_SET, WAFRegionalActions.GET_CHANGE_TOKEN, WAFRegionalActions.GET_CHANGE_TOKEN_STATUS, WAFRegionalActions.GET_GEO_MATCH_SET, WAFRegionalActions.GET_IP_SET, WAFRegionalActions.GET_LOGGING_CONFIGURATION, WAFRegionalActions.GET_PERMISSION_POLICY, WAFRegionalActions.GET_RATE_BASED_RULE, WAFRegionalActions.GET_RATE_BASED_RULE_MANAGED_KEYS, WAFRegionalActions.GET_REGEX_MATCH_SET, WAFRegionalActions.GET_REGEX_PATTERN_SET, WAFRegionalActions.GET_RULE, WAFRegionalActions.GET_RULE_GROUP, WAFRegionalActions.GET_SAMPLED_REQUESTS, WAFRegionalActions.GET_SIZE_CONSTRAINT_SET, WAFRegionalActions.GET_SQL_INJECTION_MATCH_SET, WAFRegionalActions.GET_WEB_ACL, WAFRegionalActions.GET_WEB_ACL_FOR_RESOURCE, WAFRegionalActions.GET_XSS_MATCH_SET, WAFRegionalActions.LIST_TAGS_FOR_RESOURCE];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [WAFRegionalActions.ASSOCIATE_WEB_ACL, WAFRegionalActions.CREATE_BYTE_MATCH_SET, WAFRegionalActions.CREATE_GEO_MATCH_SET, WAFRegionalActions.CREATE_IP_SET, WAFRegionalActions.CREATE_RATE_BASED_RULE, WAFRegionalActions.CREATE_REGEX_MATCH_SET, WAFRegionalActions.CREATE_REGEX_PATTERN_SET, WAFRegionalActions.CREATE_RULE, WAFRegionalActions.CREATE_RULE_GROUP, WAFRegionalActions.CREATE_SIZE_CONSTRAINT_SET, WAFRegionalActions.CREATE_SQL_INJECTION_MATCH_SET, WAFRegionalActions.CREATE_WEB_ACL_MIGRATION_STACK, WAFRegionalActions.CREATE_XSS_MATCH_SET, WAFRegionalActions.DELETE_BYTE_MATCH_SET, WAFRegionalActions.DELETE_GEO_MATCH_SET, WAFRegionalActions.DELETE_IP_SET, WAFRegionalActions.DELETE_LOGGING_CONFIGURATION, WAFRegionalActions.DELETE_RATE_BASED_RULE, WAFRegionalActions.DELETE_REGEX_MATCH_SET, WAFRegionalActions.DELETE_REGEX_PATTERN_SET, WAFRegionalActions.DELETE_RULE, WAFRegionalActions.DELETE_RULE_GROUP, WAFRegionalActions.DELETE_SIZE_CONSTRAINT_SET, WAFRegionalActions.DELETE_SQL_INJECTION_MATCH_SET, WAFRegionalActions.DELETE_XSS_MATCH_SET, WAFRegionalActions.DISASSOCIATE_WEB_ACL, WAFRegionalActions.PUT_LOGGING_CONFIGURATION, WAFRegionalActions.UPDATE_BYTE_MATCH_SET, WAFRegionalActions.UPDATE_GEO_MATCH_SET, WAFRegionalActions.UPDATE_IP_SET, WAFRegionalActions.UPDATE_RATE_BASED_RULE, WAFRegionalActions.UPDATE_REGEX_MATCH_SET, WAFRegionalActions.UPDATE_REGEX_PATTERN_SET, WAFRegionalActions.UPDATE_RULE, WAFRegionalActions.UPDATE_RULE_GROUP, WAFRegionalActions.UPDATE_SIZE_CONSTRAINT_SET, WAFRegionalActions.UPDATE_SQL_INJECTION_MATCH_SET, WAFRegionalActions.UPDATE_XSS_MATCH_SET];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [WAFRegionalActions.LIST_ACTIVATED_RULES_IN_RULE_GROUP, WAFRegionalActions.LIST_BYTE_MATCH_SETS, WAFRegionalActions.LIST_GEO_MATCH_SETS, WAFRegionalActions.LIST_IP_SETS, WAFRegionalActions.LIST_LOGGING_CONFIGURATIONS, WAFRegionalActions.LIST_RATE_BASED_RULES, WAFRegionalActions.LIST_REGEX_MATCH_SETS, WAFRegionalActions.LIST_REGEX_PATTERN_SETS, WAFRegionalActions.LIST_RESOURCES_FOR_WEB_ACL, WAFRegionalActions.LIST_RULE_GROUPS, WAFRegionalActions.LIST_RULES, WAFRegionalActions.LIST_SIZE_CONSTRAINT_SETS, WAFRegionalActions.LIST_SQL_INJECTION_MATCH_SETS, WAFRegionalActions.LIST_SUBSCRIBED_RULE_GROUPS, WAFRegionalActions.LIST_WEB_AC_LS, WAFRegionalActions.LIST_XSS_MATCH_SETS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [WAFRegionalActions.CREATE_WEB_ACL, WAFRegionalActions.DELETE_PERMISSION_POLICY, WAFRegionalActions.DELETE_WEB_ACL, WAFRegionalActions.PUT_PERMISSION_POLICY, WAFRegionalActions.UPDATE_WEB_ACL];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [WAFRegionalActions.TAG_RESOURCE, WAFRegionalActions.UNTAG_RESOURCE];
}

const BytematchsetArnRegex = new RegExp("^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):bytematchset/(?<id>[^:/?]+)$");
const GeomatchsetArnRegex = new RegExp("^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):geomatchset/(?<id>[^:/?]+)$");
const IpsetArnRegex = new RegExp("^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):ipset/(?<id>[^:/?]+)$");
const Loadbalancer/app/ArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):loadbalancer/app/(?<loadBalancerName>[^:/?]+)/(?<loadBalancerId>[^:/?]+)$");
const RatebasedruleArnRegex = new RegExp("^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):ratebasedrule/(?<id>[^:/?]+)$");
const RegexmatchsetArnRegex = new RegExp("^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):regexmatch/(?<id>[^:/?]+)$");
const RegexpatternsetArnRegex = new RegExp("^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):regexpatternset/(?<id>[^:/?]+)$");
const RuleArnRegex = new RegExp("^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):rule/(?<id>[^:/?]+)$");
const RulegroupArnRegex = new RegExp("^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):rulegroup/(?<id>[^:/?]+)$");
const SizeconstraintsetArnRegex = new RegExp("^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):sizeconstraintset/(?<id>[^:/?]+)$");
const SqlinjectionmatchsetArnRegex = new RegExp("^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):sqlinjectionset/(?<id>[^:/?]+)$");
const WebaclArnRegex = new RegExp("^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):webacl/(?<id>[^:/?]+)$");
const XssmatchsetArnRegex = new RegExp("^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):xssmatchset/(?<id>[^:/?]+)$");

/**
 * ARN builders, validators, and parsers for waf-regional resources.
 */
export class WAFRegionalResources {
	/**
	 * Builds an ARN for the bytematchset resource.
	 */
	static bytematchset(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf-regional:${props.region ?? "*"}:${props.account ?? "*"}:bytematchset/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the bytematchset resource.
	 */
	static isValidBytematchsetArn(arn: string): boolean {
		return BytematchsetArnRegex.test(arn);
	}

	/**
	 * Parses a bytematchset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBytematchsetArn(arn: string): { partition: string; region: string; account: string; id: string } {
		const match = BytematchsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bytematchset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the geomatchset resource.
	 */
	static geomatchset(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf-regional:${props.region ?? "*"}:${props.account ?? "*"}:geomatchset/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the geomatchset resource.
	 */
	static isValidGeomatchsetArn(arn: string): boolean {
		return GeomatchsetArnRegex.test(arn);
	}

	/**
	 * Parses a geomatchset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGeomatchsetArn(arn: string): { partition: string; region: string; account: string; id: string } {
		const match = GeomatchsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid geomatchset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the ipset resource.
	 */
	static ipset(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf-regional:${props.region ?? "*"}:${props.account ?? "*"}:ipset/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ipset resource.
	 */
	static isValidIpsetArn(arn: string): boolean {
		return IpsetArnRegex.test(arn);
	}

	/**
	 * Parses a ipset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIpsetArn(arn: string): { partition: string; region: string; account: string; id: string } {
		const match = IpsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ipset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
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
	 * Builds an ARN for the ratebasedrule resource.
	 */
	static ratebasedrule(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf-regional:${props.region ?? "*"}:${props.account ?? "*"}:ratebasedrule/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ratebasedrule resource.
	 */
	static isValidRatebasedruleArn(arn: string): boolean {
		return RatebasedruleArnRegex.test(arn);
	}

	/**
	 * Parses a ratebasedrule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRatebasedruleArn(arn: string): { partition: string; region: string; account: string; id: string } {
		const match = RatebasedruleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ratebasedrule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the regexmatchset resource.
	 */
	static regexmatchset(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf-regional:${props.region ?? "*"}:${props.account ?? "*"}:regexmatch/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the regexmatchset resource.
	 */
	static isValidRegexmatchsetArn(arn: string): boolean {
		return RegexmatchsetArnRegex.test(arn);
	}

	/**
	 * Parses a regexmatchset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRegexmatchsetArn(arn: string): { partition: string; region: string; account: string; id: string } {
		const match = RegexmatchsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid regexmatchset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the regexpatternset resource.
	 */
	static regexpatternset(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf-regional:${props.region ?? "*"}:${props.account ?? "*"}:regexpatternset/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the regexpatternset resource.
	 */
	static isValidRegexpatternsetArn(arn: string): boolean {
		return RegexpatternsetArnRegex.test(arn);
	}

	/**
	 * Parses a regexpatternset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRegexpatternsetArn(arn: string): { partition: string; region: string; account: string; id: string } {
		const match = RegexpatternsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid regexpatternset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the rule resource.
	 */
	static rule(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf-regional:${props.region ?? "*"}:${props.account ?? "*"}:rule/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rule resource.
	 */
	static isValidRuleArn(arn: string): boolean {
		return RuleArnRegex.test(arn);
	}

	/**
	 * Parses a rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRuleArn(arn: string): { partition: string; region: string; account: string; id: string } {
		const match = RuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the rulegroup resource.
	 */
	static rulegroup(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf-regional:${props.region ?? "*"}:${props.account ?? "*"}:rulegroup/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rulegroup resource.
	 */
	static isValidRulegroupArn(arn: string): boolean {
		return RulegroupArnRegex.test(arn);
	}

	/**
	 * Parses a rulegroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRulegroupArn(arn: string): { partition: string; region: string; account: string; id: string } {
		const match = RulegroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rulegroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the sizeconstraintset resource.
	 */
	static sizeconstraintset(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf-regional:${props.region ?? "*"}:${props.account ?? "*"}:sizeconstraintset/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sizeconstraintset resource.
	 */
	static isValidSizeconstraintsetArn(arn: string): boolean {
		return SizeconstraintsetArnRegex.test(arn);
	}

	/**
	 * Parses a sizeconstraintset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSizeconstraintsetArn(arn: string): { partition: string; region: string; account: string; id: string } {
		const match = SizeconstraintsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sizeconstraintset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the sqlinjectionmatchset resource.
	 */
	static sqlinjectionmatchset(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf-regional:${props.region ?? "*"}:${props.account ?? "*"}:sqlinjectionset/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sqlinjectionmatchset resource.
	 */
	static isValidSqlinjectionmatchsetArn(arn: string): boolean {
		return SqlinjectionmatchsetArnRegex.test(arn);
	}

	/**
	 * Parses a sqlinjectionmatchset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSqlinjectionmatchsetArn(arn: string): { partition: string; region: string; account: string; id: string } {
		const match = SqlinjectionmatchsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sqlinjectionmatchset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the webacl resource.
	 */
	static webacl(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf-regional:${props.region ?? "*"}:${props.account ?? "*"}:webacl/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the webacl resource.
	 */
	static isValidWebaclArn(arn: string): boolean {
		return WebaclArnRegex.test(arn);
	}

	/**
	 * Parses a webacl ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWebaclArn(arn: string): { partition: string; region: string; account: string; id: string } {
		const match = WebaclArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid webacl ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the xssmatchset resource.
	 */
	static xssmatchset(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf-regional:${props.region ?? "*"}:${props.account ?? "*"}:xssmatchset/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the xssmatchset resource.
	 */
	static isValidXssmatchsetArn(arn: string): boolean {
		return XssmatchsetArnRegex.test(arn);
	}

	/**
	 * Parses a xssmatchset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseXssmatchsetArn(arn: string): { partition: string; region: string; account: string; id: string } {
		const match = XssmatchsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid xssmatchset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

}

/**
 * API operation to required IAM actions mapping for waf-regional.
 */
export class WAFRegionalOperations {
	/** IAM actions required for the AssociateWebACL API call. */
	static readonly ASSOCIATE_WEB_ACL: string[] = ["waf-regional:AssociateWebACL", "apigateway:SetWebACL", "elasticloadbalancing:SetWebAcl"];
	/** IAM actions required for the CreateByteMatchSet API call. */
	static readonly CREATE_BYTE_MATCH_SET: string[] = ["waf-regional:CreateByteMatchSet"];
	/** IAM actions required for the CreateGeoMatchSet API call. */
	static readonly CREATE_GEO_MATCH_SET: string[] = ["waf-regional:CreateGeoMatchSet"];
	/** IAM actions required for the CreateIPSet API call. */
	static readonly CREATE_IP_SET: string[] = ["waf-regional:CreateIPSet"];
	/** IAM actions required for the CreateRateBasedRule API call. */
	static readonly CREATE_RATE_BASED_RULE: string[] = ["waf-regional:CreateRateBasedRule", "waf-regional:TagResource"];
	/** IAM actions required for the CreateRegexMatchSet API call. */
	static readonly CREATE_REGEX_MATCH_SET: string[] = ["waf-regional:CreateRegexMatchSet"];
	/** IAM actions required for the CreateRegexPatternSet API call. */
	static readonly CREATE_REGEX_PATTERN_SET: string[] = ["waf-regional:CreateRegexPatternSet"];
	/** IAM actions required for the CreateRule API call. */
	static readonly CREATE_RULE: string[] = ["waf-regional:CreateRule", "waf-regional:TagResource"];
	/** IAM actions required for the CreateRuleGroup API call. */
	static readonly CREATE_RULE_GROUP: string[] = ["waf-regional:CreateRuleGroup", "waf-regional:TagResource"];
	/** IAM actions required for the CreateSizeConstraintSet API call. */
	static readonly CREATE_SIZE_CONSTRAINT_SET: string[] = ["waf-regional:CreateSizeConstraintSet"];
	/** IAM actions required for the CreateSqlInjectionMatchSet API call. */
	static readonly CREATE_SQL_INJECTION_MATCH_SET: string[] = ["waf-regional:CreateSqlInjectionMatchSet"];
	/** IAM actions required for the CreateWebACL API call. */
	static readonly CREATE_WEB_ACL: string[] = ["waf-regional:CreateWebACL", "waf-regional:TagResource"];
	/** IAM actions required for the CreateWebACLMigrationStack API call. */
	static readonly CREATE_WEB_ACL_MIGRATION_STACK: string[] = ["waf-regional:CreateWebACLMigrationStack"];
	/** IAM actions required for the CreateXssMatchSet API call. */
	static readonly CREATE_XSS_MATCH_SET: string[] = ["waf-regional:CreateXssMatchSet"];
	/** IAM actions required for the DeleteByteMatchSet API call. */
	static readonly DELETE_BYTE_MATCH_SET: string[] = ["waf-regional:DeleteByteMatchSet"];
	/** IAM actions required for the DeleteGeoMatchSet API call. */
	static readonly DELETE_GEO_MATCH_SET: string[] = ["waf-regional:DeleteGeoMatchSet"];
	/** IAM actions required for the DeleteIPSet API call. */
	static readonly DELETE_IP_SET: string[] = ["waf-regional:DeleteIPSet"];
	/** IAM actions required for the DeleteLoggingConfiguration API call. */
	static readonly DELETE_LOGGING_CONFIGURATION: string[] = ["waf-regional:DeleteLoggingConfiguration"];
	/** IAM actions required for the DeletePermissionPolicy API call. */
	static readonly DELETE_PERMISSION_POLICY: string[] = ["waf-regional:DeletePermissionPolicy"];
	/** IAM actions required for the DeleteRateBasedRule API call. */
	static readonly DELETE_RATE_BASED_RULE: string[] = ["waf-regional:DeleteRateBasedRule"];
	/** IAM actions required for the DeleteRegexMatchSet API call. */
	static readonly DELETE_REGEX_MATCH_SET: string[] = ["waf-regional:DeleteRegexMatchSet"];
	/** IAM actions required for the DeleteRegexPatternSet API call. */
	static readonly DELETE_REGEX_PATTERN_SET: string[] = ["waf-regional:DeleteRegexPatternSet"];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DELETE_RULE: string[] = ["waf-regional:DeleteRule"];
	/** IAM actions required for the DeleteRuleGroup API call. */
	static readonly DELETE_RULE_GROUP: string[] = ["waf-regional:DeleteRuleGroup"];
	/** IAM actions required for the DeleteSizeConstraintSet API call. */
	static readonly DELETE_SIZE_CONSTRAINT_SET: string[] = ["waf-regional:DeleteSizeConstraintSet"];
	/** IAM actions required for the DeleteSqlInjectionMatchSet API call. */
	static readonly DELETE_SQL_INJECTION_MATCH_SET: string[] = ["waf-regional:DeleteSqlInjectionMatchSet"];
	/** IAM actions required for the DeleteWebACL API call. */
	static readonly DELETE_WEB_ACL: string[] = ["waf-regional:DeleteWebACL"];
	/** IAM actions required for the DeleteXssMatchSet API call. */
	static readonly DELETE_XSS_MATCH_SET: string[] = ["waf-regional:DeleteXssMatchSet"];
	/** IAM actions required for the DisassociateWebACL API call. */
	static readonly DISASSOCIATE_WEB_ACL: string[] = ["apigateway:SetWebACL", "elasticloadbalancing:SetWebAcl"];
	/** IAM actions required for the GetByteMatchSet API call. */
	static readonly GET_BYTE_MATCH_SET: string[] = ["waf-regional:GetByteMatchSet"];
	/** IAM actions required for the GetChangeToken API call. */
	static readonly GET_CHANGE_TOKEN: string[] = ["waf-regional:GetChangeToken"];
	/** IAM actions required for the GetChangeTokenStatus API call. */
	static readonly GET_CHANGE_TOKEN_STATUS: string[] = ["waf-regional:GetChangeTokenStatus"];
	/** IAM actions required for the GetGeoMatchSet API call. */
	static readonly GET_GEO_MATCH_SET: string[] = ["waf-regional:GetGeoMatchSet"];
	/** IAM actions required for the GetIPSet API call. */
	static readonly GET_IP_SET: string[] = ["waf-regional:GetIPSet"];
	/** IAM actions required for the GetLoggingConfiguration API call. */
	static readonly GET_LOGGING_CONFIGURATION: string[] = ["waf-regional:GetLoggingConfiguration"];
	/** IAM actions required for the GetPermissionPolicy API call. */
	static readonly GET_PERMISSION_POLICY: string[] = ["waf-regional:GetPermissionPolicy"];
	/** IAM actions required for the GetRateBasedRule API call. */
	static readonly GET_RATE_BASED_RULE: string[] = ["waf-regional:GetRateBasedRule"];
	/** IAM actions required for the GetRateBasedRuleManagedKeys API call. */
	static readonly GET_RATE_BASED_RULE_MANAGED_KEYS: string[] = ["waf-regional:GetRateBasedRuleManagedKeys"];
	/** IAM actions required for the GetRegexMatchSet API call. */
	static readonly GET_REGEX_MATCH_SET: string[] = ["waf-regional:GetRegexMatchSet"];
	/** IAM actions required for the GetRegexPatternSet API call. */
	static readonly GET_REGEX_PATTERN_SET: string[] = ["waf-regional:GetRegexPatternSet"];
	/** IAM actions required for the GetRule API call. */
	static readonly GET_RULE: string[] = ["waf-regional:GetRule"];
	/** IAM actions required for the GetRuleGroup API call. */
	static readonly GET_RULE_GROUP: string[] = ["waf-regional:GetRuleGroup"];
	/** IAM actions required for the GetSampledRequests API call. */
	static readonly GET_SAMPLED_REQUESTS: string[] = ["waf-regional:GetSampledRequests"];
	/** IAM actions required for the GetSizeConstraintSet API call. */
	static readonly GET_SIZE_CONSTRAINT_SET: string[] = ["waf-regional:GetSizeConstraintSet"];
	/** IAM actions required for the GetSqlInjectionMatchSet API call. */
	static readonly GET_SQL_INJECTION_MATCH_SET: string[] = ["waf-regional:GetSqlInjectionMatchSet"];
	/** IAM actions required for the GetWebACL API call. */
	static readonly GET_WEB_ACL: string[] = ["waf-regional:GetWebACL"];
	/** IAM actions required for the GetWebACLForResource API call. */
	static readonly GET_WEB_ACL_FOR_RESOURCE: string[] = ["waf-regional:GetWebACLForResource"];
	/** IAM actions required for the GetXssMatchSet API call. */
	static readonly GET_XSS_MATCH_SET: string[] = ["waf-regional:GetXssMatchSet"];
	/** IAM actions required for the ListActivatedRulesInRuleGroup API call. */
	static readonly LIST_ACTIVATED_RULES_IN_RULE_GROUP: string[] = ["waf-regional:ListActivatedRulesInRuleGroup"];
	/** IAM actions required for the ListByteMatchSets API call. */
	static readonly LIST_BYTE_MATCH_SETS: string[] = ["waf-regional:ListByteMatchSets"];
	/** IAM actions required for the ListGeoMatchSets API call. */
	static readonly LIST_GEO_MATCH_SETS: string[] = ["waf-regional:ListGeoMatchSets"];
	/** IAM actions required for the ListIPSets API call. */
	static readonly LIST_IP_SETS: string[] = ["waf-regional:ListIPSets"];
	/** IAM actions required for the ListLoggingConfigurations API call. */
	static readonly LIST_LOGGING_CONFIGURATIONS: string[] = ["waf-regional:ListLoggingConfigurations"];
	/** IAM actions required for the ListRateBasedRules API call. */
	static readonly LIST_RATE_BASED_RULES: string[] = ["waf-regional:ListRateBasedRules"];
	/** IAM actions required for the ListRegexMatchSets API call. */
	static readonly LIST_REGEX_MATCH_SETS: string[] = ["waf-regional:ListRegexMatchSets"];
	/** IAM actions required for the ListRegexPatternSets API call. */
	static readonly LIST_REGEX_PATTERN_SETS: string[] = ["waf-regional:ListRegexPatternSets"];
	/** IAM actions required for the ListResourcesForWebACL API call. */
	static readonly LIST_RESOURCES_FOR_WEB_ACL: string[] = ["waf-regional:ListResourcesForWebACL"];
	/** IAM actions required for the ListRuleGroups API call. */
	static readonly LIST_RULE_GROUPS: string[] = ["waf-regional:ListRuleGroups"];
	/** IAM actions required for the ListRules API call. */
	static readonly LIST_RULES: string[] = ["waf-regional:ListRules"];
	/** IAM actions required for the ListSizeConstraintSets API call. */
	static readonly LIST_SIZE_CONSTRAINT_SETS: string[] = ["waf-regional:ListSizeConstraintSets"];
	/** IAM actions required for the ListSqlInjectionMatchSets API call. */
	static readonly LIST_SQL_INJECTION_MATCH_SETS: string[] = ["waf-regional:ListSqlInjectionMatchSets"];
	/** IAM actions required for the ListSubscribedRuleGroups API call. */
	static readonly LIST_SUBSCRIBED_RULE_GROUPS: string[] = ["waf-regional:ListSubscribedRuleGroups"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = ["waf-regional:ListTagsForResource"];
	/** IAM actions required for the ListWebACLs API call. */
	static readonly LIST_WEB_AC_LS: string[] = ["waf-regional:ListWebACLs"];
	/** IAM actions required for the ListXssMatchSets API call. */
	static readonly LIST_XSS_MATCH_SETS: string[] = ["waf-regional:ListXssMatchSets"];
	/** IAM actions required for the PutLoggingConfiguration API call. */
	static readonly PUT_LOGGING_CONFIGURATION: string[] = ["waf-regional:PutLoggingConfiguration"];
	/** IAM actions required for the PutPermissionPolicy API call. */
	static readonly PUT_PERMISSION_POLICY: string[] = ["waf-regional:PutPermissionPolicy"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["waf-regional:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["waf-regional:UntagResource"];
	/** IAM actions required for the UpdateByteMatchSet API call. */
	static readonly UPDATE_BYTE_MATCH_SET: string[] = ["waf-regional:UpdateByteMatchSet"];
	/** IAM actions required for the UpdateGeoMatchSet API call. */
	static readonly UPDATE_GEO_MATCH_SET: string[] = ["waf-regional:UpdateGeoMatchSet"];
	/** IAM actions required for the UpdateIPSet API call. */
	static readonly UPDATE_IP_SET: string[] = ["waf-regional:UpdateIPSet"];
	/** IAM actions required for the UpdateRateBasedRule API call. */
	static readonly UPDATE_RATE_BASED_RULE: string[] = ["waf-regional:UpdateRateBasedRule"];
	/** IAM actions required for the UpdateRegexMatchSet API call. */
	static readonly UPDATE_REGEX_MATCH_SET: string[] = ["waf-regional:UpdateRegexMatchSet"];
	/** IAM actions required for the UpdateRegexPatternSet API call. */
	static readonly UPDATE_REGEX_PATTERN_SET: string[] = ["waf-regional:UpdateRegexPatternSet"];
	/** IAM actions required for the UpdateRule API call. */
	static readonly UPDATE_RULE: string[] = ["waf-regional:UpdateRule"];
	/** IAM actions required for the UpdateRuleGroup API call. */
	static readonly UPDATE_RULE_GROUP: string[] = ["waf-regional:UpdateRuleGroup"];
	/** IAM actions required for the UpdateSizeConstraintSet API call. */
	static readonly UPDATE_SIZE_CONSTRAINT_SET: string[] = ["waf-regional:UpdateSizeConstraintSet"];
	/** IAM actions required for the UpdateSqlInjectionMatchSet API call. */
	static readonly UPDATE_SQL_INJECTION_MATCH_SET: string[] = ["waf-regional:UpdateSqlInjectionMatchSet"];
	/** IAM actions required for the UpdateWebACL API call. */
	static readonly UPDATE_WEB_ACL: string[] = ["waf-regional:UpdateWebACL"];
	/** IAM actions required for the UpdateXssMatchSet API call. */
	static readonly UPDATE_XSS_MATCH_SET: string[] = ["waf-regional:UpdateXssMatchSet"];
}

/**
 * Condition key constants and builders for waf-regional.
 */
export class WAFRegionalConditions {
	/** Condition keys applicable to the CreateRateBasedRule action. */
	static readonly CREATE_RATE_BASED_RULE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateRule action. */
	static readonly CREATE_RULE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateRuleGroup action. */
	static readonly CREATE_RULE_GROUP_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateWebACL action. */
	static readonly CREATE_WEB_ACL_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
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

}
