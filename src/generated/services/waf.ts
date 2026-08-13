// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/waf.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the waf service.
 */
export class WAFActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "waf";

	/** [Write] waf:CreateByteMatchSet */
	static readonly CREATE_BYTE_MATCH_SET = "waf:CreateByteMatchSet";
	/** [Write] waf:CreateGeoMatchSet */
	static readonly CREATE_GEO_MATCH_SET = "waf:CreateGeoMatchSet";
	/** [Write] waf:CreateIPSet */
	static readonly CREATE_IP_SET = "waf:CreateIPSet";
	/** [Write] waf:CreateRateBasedRule */
	static readonly CREATE_RATE_BASED_RULE = "waf:CreateRateBasedRule";
	/** [Write] waf:CreateRegexMatchSet */
	static readonly CREATE_REGEX_MATCH_SET = "waf:CreateRegexMatchSet";
	/** [Write] waf:CreateRegexPatternSet */
	static readonly CREATE_REGEX_PATTERN_SET = "waf:CreateRegexPatternSet";
	/** [Write] waf:CreateRule */
	static readonly CREATE_RULE = "waf:CreateRule";
	/** [Write] waf:CreateRuleGroup */
	static readonly CREATE_RULE_GROUP = "waf:CreateRuleGroup";
	/** [Write] waf:CreateSizeConstraintSet */
	static readonly CREATE_SIZE_CONSTRAINT_SET = "waf:CreateSizeConstraintSet";
	/** [Write] waf:CreateSqlInjectionMatchSet */
	static readonly CREATE_SQL_INJECTION_MATCH_SET =
		"waf:CreateSqlInjectionMatchSet";
	/** [PermissionManagement] waf:CreateWebACL */
	static readonly CREATE_WEB_ACL = "waf:CreateWebACL";
	/** [Write] waf:CreateWebACLMigrationStack */
	static readonly CREATE_WEB_ACL_MIGRATION_STACK =
		"waf:CreateWebACLMigrationStack";
	/** [Write] waf:CreateXssMatchSet */
	static readonly CREATE_XSS_MATCH_SET = "waf:CreateXssMatchSet";
	/** [Write] waf:DeleteByteMatchSet */
	static readonly DELETE_BYTE_MATCH_SET = "waf:DeleteByteMatchSet";
	/** [Write] waf:DeleteGeoMatchSet */
	static readonly DELETE_GEO_MATCH_SET = "waf:DeleteGeoMatchSet";
	/** [Write] waf:DeleteIPSet */
	static readonly DELETE_IP_SET = "waf:DeleteIPSet";
	/** [Write] waf:DeleteLoggingConfiguration */
	static readonly DELETE_LOGGING_CONFIGURATION =
		"waf:DeleteLoggingConfiguration";
	/** [PermissionManagement] waf:DeletePermissionPolicy */
	static readonly DELETE_PERMISSION_POLICY = "waf:DeletePermissionPolicy";
	/** [Write] waf:DeleteRateBasedRule */
	static readonly DELETE_RATE_BASED_RULE = "waf:DeleteRateBasedRule";
	/** [Write] waf:DeleteRegexMatchSet */
	static readonly DELETE_REGEX_MATCH_SET = "waf:DeleteRegexMatchSet";
	/** [Write] waf:DeleteRegexPatternSet */
	static readonly DELETE_REGEX_PATTERN_SET = "waf:DeleteRegexPatternSet";
	/** [Write] waf:DeleteRule */
	static readonly DELETE_RULE = "waf:DeleteRule";
	/** [Write] waf:DeleteRuleGroup */
	static readonly DELETE_RULE_GROUP = "waf:DeleteRuleGroup";
	/** [Write] waf:DeleteSizeConstraintSet */
	static readonly DELETE_SIZE_CONSTRAINT_SET = "waf:DeleteSizeConstraintSet";
	/** [Write] waf:DeleteSqlInjectionMatchSet */
	static readonly DELETE_SQL_INJECTION_MATCH_SET =
		"waf:DeleteSqlInjectionMatchSet";
	/** [PermissionManagement] waf:DeleteWebACL */
	static readonly DELETE_WEB_ACL = "waf:DeleteWebACL";
	/** [Write] waf:DeleteXssMatchSet */
	static readonly DELETE_XSS_MATCH_SET = "waf:DeleteXssMatchSet";
	/** [Read] waf:GetByteMatchSet */
	static readonly GET_BYTE_MATCH_SET = "waf:GetByteMatchSet";
	/** [Read] waf:GetChangeToken */
	static readonly GET_CHANGE_TOKEN = "waf:GetChangeToken";
	/** [Read] waf:GetChangeTokenStatus */
	static readonly GET_CHANGE_TOKEN_STATUS = "waf:GetChangeTokenStatus";
	/** [Read] waf:GetGeoMatchSet */
	static readonly GET_GEO_MATCH_SET = "waf:GetGeoMatchSet";
	/** [Read] waf:GetIPSet */
	static readonly GET_IP_SET = "waf:GetIPSet";
	/** [Read] waf:GetLoggingConfiguration */
	static readonly GET_LOGGING_CONFIGURATION = "waf:GetLoggingConfiguration";
	/** [Read] waf:GetPermissionPolicy */
	static readonly GET_PERMISSION_POLICY = "waf:GetPermissionPolicy";
	/** [Read] waf:GetRateBasedRule */
	static readonly GET_RATE_BASED_RULE = "waf:GetRateBasedRule";
	/** [Read] waf:GetRateBasedRuleManagedKeys */
	static readonly GET_RATE_BASED_RULE_MANAGED_KEYS =
		"waf:GetRateBasedRuleManagedKeys";
	/** [Read] waf:GetRegexMatchSet */
	static readonly GET_REGEX_MATCH_SET = "waf:GetRegexMatchSet";
	/** [Read] waf:GetRegexPatternSet */
	static readonly GET_REGEX_PATTERN_SET = "waf:GetRegexPatternSet";
	/** [Read] waf:GetRule */
	static readonly GET_RULE = "waf:GetRule";
	/** [Read] waf:GetRuleGroup */
	static readonly GET_RULE_GROUP = "waf:GetRuleGroup";
	/** [Read] waf:GetSampledRequests */
	static readonly GET_SAMPLED_REQUESTS = "waf:GetSampledRequests";
	/** [Read] waf:GetSizeConstraintSet */
	static readonly GET_SIZE_CONSTRAINT_SET = "waf:GetSizeConstraintSet";
	/** [Read] waf:GetSqlInjectionMatchSet */
	static readonly GET_SQL_INJECTION_MATCH_SET = "waf:GetSqlInjectionMatchSet";
	/** [Read] waf:GetWebACL */
	static readonly GET_WEB_ACL = "waf:GetWebACL";
	/** [Read] waf:GetXssMatchSet */
	static readonly GET_XSS_MATCH_SET = "waf:GetXssMatchSet";
	/** [List] waf:ListActivatedRulesInRuleGroup */
	static readonly LIST_ACTIVATED_RULES_IN_RULE_GROUP =
		"waf:ListActivatedRulesInRuleGroup";
	/** [List] waf:ListByteMatchSets */
	static readonly LIST_BYTE_MATCH_SETS = "waf:ListByteMatchSets";
	/** [List] waf:ListGeoMatchSets */
	static readonly LIST_GEO_MATCH_SETS = "waf:ListGeoMatchSets";
	/** [List] waf:ListIPSets */
	static readonly LIST_IP_SETS = "waf:ListIPSets";
	/** [List] waf:ListLoggingConfigurations */
	static readonly LIST_LOGGING_CONFIGURATIONS = "waf:ListLoggingConfigurations";
	/** [List] waf:ListRateBasedRules */
	static readonly LIST_RATE_BASED_RULES = "waf:ListRateBasedRules";
	/** [List] waf:ListRegexMatchSets */
	static readonly LIST_REGEX_MATCH_SETS = "waf:ListRegexMatchSets";
	/** [List] waf:ListRegexPatternSets */
	static readonly LIST_REGEX_PATTERN_SETS = "waf:ListRegexPatternSets";
	/** [List] waf:ListRuleGroups */
	static readonly LIST_RULE_GROUPS = "waf:ListRuleGroups";
	/** [List] waf:ListRules */
	static readonly LIST_RULES = "waf:ListRules";
	/** [List] waf:ListSizeConstraintSets */
	static readonly LIST_SIZE_CONSTRAINT_SETS = "waf:ListSizeConstraintSets";
	/** [List] waf:ListSqlInjectionMatchSets */
	static readonly LIST_SQL_INJECTION_MATCH_SETS =
		"waf:ListSqlInjectionMatchSets";
	/** [List] waf:ListSubscribedRuleGroups */
	static readonly LIST_SUBSCRIBED_RULE_GROUPS = "waf:ListSubscribedRuleGroups";
	/** [Read] waf:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "waf:ListTagsForResource";
	/** [List] waf:ListWebACLs */
	static readonly LIST_WEB_AC_LS = "waf:ListWebACLs";
	/** [List] waf:ListXssMatchSets */
	static readonly LIST_XSS_MATCH_SETS = "waf:ListXssMatchSets";
	/** [Write] waf:PutLoggingConfiguration */
	static readonly PUT_LOGGING_CONFIGURATION = "waf:PutLoggingConfiguration";
	/** [PermissionManagement] waf:PutPermissionPolicy */
	static readonly PUT_PERMISSION_POLICY = "waf:PutPermissionPolicy";
	/** [Tagging] waf:TagResource */
	static readonly TAG_RESOURCE = "waf:TagResource";
	/** [Tagging] waf:UntagResource */
	static readonly UNTAG_RESOURCE = "waf:UntagResource";
	/** [Write] waf:UpdateByteMatchSet */
	static readonly UPDATE_BYTE_MATCH_SET = "waf:UpdateByteMatchSet";
	/** [Write] waf:UpdateGeoMatchSet */
	static readonly UPDATE_GEO_MATCH_SET = "waf:UpdateGeoMatchSet";
	/** [Write] waf:UpdateIPSet */
	static readonly UPDATE_IP_SET = "waf:UpdateIPSet";
	/** [Write] waf:UpdateRateBasedRule */
	static readonly UPDATE_RATE_BASED_RULE = "waf:UpdateRateBasedRule";
	/** [Write] waf:UpdateRegexMatchSet */
	static readonly UPDATE_REGEX_MATCH_SET = "waf:UpdateRegexMatchSet";
	/** [Write] waf:UpdateRegexPatternSet */
	static readonly UPDATE_REGEX_PATTERN_SET = "waf:UpdateRegexPatternSet";
	/** [Write] waf:UpdateRule */
	static readonly UPDATE_RULE = "waf:UpdateRule";
	/** [Write] waf:UpdateRuleGroup */
	static readonly UPDATE_RULE_GROUP = "waf:UpdateRuleGroup";
	/** [Write] waf:UpdateSizeConstraintSet */
	static readonly UPDATE_SIZE_CONSTRAINT_SET = "waf:UpdateSizeConstraintSet";
	/** [Write] waf:UpdateSqlInjectionMatchSet */
	static readonly UPDATE_SQL_INJECTION_MATCH_SET =
		"waf:UpdateSqlInjectionMatchSet";
	/** [PermissionManagement] waf:UpdateWebACL */
	static readonly UPDATE_WEB_ACL = "waf:UpdateWebACL";
	/** [Write] waf:UpdateXssMatchSet */
	static readonly UPDATE_XSS_MATCH_SET = "waf:UpdateXssMatchSet";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		WAFActions.GET_BYTE_MATCH_SET,
		WAFActions.GET_CHANGE_TOKEN,
		WAFActions.GET_CHANGE_TOKEN_STATUS,
		WAFActions.GET_GEO_MATCH_SET,
		WAFActions.GET_IP_SET,
		WAFActions.GET_LOGGING_CONFIGURATION,
		WAFActions.GET_PERMISSION_POLICY,
		WAFActions.GET_RATE_BASED_RULE,
		WAFActions.GET_RATE_BASED_RULE_MANAGED_KEYS,
		WAFActions.GET_REGEX_MATCH_SET,
		WAFActions.GET_REGEX_PATTERN_SET,
		WAFActions.GET_RULE,
		WAFActions.GET_RULE_GROUP,
		WAFActions.GET_SAMPLED_REQUESTS,
		WAFActions.GET_SIZE_CONSTRAINT_SET,
		WAFActions.GET_SQL_INJECTION_MATCH_SET,
		WAFActions.GET_WEB_ACL,
		WAFActions.GET_XSS_MATCH_SET,
		WAFActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		WAFActions.CREATE_BYTE_MATCH_SET,
		WAFActions.CREATE_GEO_MATCH_SET,
		WAFActions.CREATE_IP_SET,
		WAFActions.CREATE_RATE_BASED_RULE,
		WAFActions.CREATE_REGEX_MATCH_SET,
		WAFActions.CREATE_REGEX_PATTERN_SET,
		WAFActions.CREATE_RULE,
		WAFActions.CREATE_RULE_GROUP,
		WAFActions.CREATE_SIZE_CONSTRAINT_SET,
		WAFActions.CREATE_SQL_INJECTION_MATCH_SET,
		WAFActions.CREATE_WEB_ACL_MIGRATION_STACK,
		WAFActions.CREATE_XSS_MATCH_SET,
		WAFActions.DELETE_BYTE_MATCH_SET,
		WAFActions.DELETE_GEO_MATCH_SET,
		WAFActions.DELETE_IP_SET,
		WAFActions.DELETE_LOGGING_CONFIGURATION,
		WAFActions.DELETE_RATE_BASED_RULE,
		WAFActions.DELETE_REGEX_MATCH_SET,
		WAFActions.DELETE_REGEX_PATTERN_SET,
		WAFActions.DELETE_RULE,
		WAFActions.DELETE_RULE_GROUP,
		WAFActions.DELETE_SIZE_CONSTRAINT_SET,
		WAFActions.DELETE_SQL_INJECTION_MATCH_SET,
		WAFActions.DELETE_XSS_MATCH_SET,
		WAFActions.PUT_LOGGING_CONFIGURATION,
		WAFActions.UPDATE_BYTE_MATCH_SET,
		WAFActions.UPDATE_GEO_MATCH_SET,
		WAFActions.UPDATE_IP_SET,
		WAFActions.UPDATE_RATE_BASED_RULE,
		WAFActions.UPDATE_REGEX_MATCH_SET,
		WAFActions.UPDATE_REGEX_PATTERN_SET,
		WAFActions.UPDATE_RULE,
		WAFActions.UPDATE_RULE_GROUP,
		WAFActions.UPDATE_SIZE_CONSTRAINT_SET,
		WAFActions.UPDATE_SQL_INJECTION_MATCH_SET,
		WAFActions.UPDATE_XSS_MATCH_SET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		WAFActions.LIST_ACTIVATED_RULES_IN_RULE_GROUP,
		WAFActions.LIST_BYTE_MATCH_SETS,
		WAFActions.LIST_GEO_MATCH_SETS,
		WAFActions.LIST_IP_SETS,
		WAFActions.LIST_LOGGING_CONFIGURATIONS,
		WAFActions.LIST_RATE_BASED_RULES,
		WAFActions.LIST_REGEX_MATCH_SETS,
		WAFActions.LIST_REGEX_PATTERN_SETS,
		WAFActions.LIST_RULE_GROUPS,
		WAFActions.LIST_RULES,
		WAFActions.LIST_SIZE_CONSTRAINT_SETS,
		WAFActions.LIST_SQL_INJECTION_MATCH_SETS,
		WAFActions.LIST_SUBSCRIBED_RULE_GROUPS,
		WAFActions.LIST_WEB_AC_LS,
		WAFActions.LIST_XSS_MATCH_SETS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		WAFActions.CREATE_WEB_ACL,
		WAFActions.DELETE_PERMISSION_POLICY,
		WAFActions.DELETE_WEB_ACL,
		WAFActions.PUT_PERMISSION_POLICY,
		WAFActions.UPDATE_WEB_ACL,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		WAFActions.TAG_RESOURCE,
		WAFActions.UNTAG_RESOURCE,
	];
}

const BytematchsetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):bytematchset/(?<id>[^:/?]+)$",
);
const GeomatchsetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):geomatchset/(?<id>[^:/?]+)$",
);
const IpsetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):ipset/(?<id>[^:/?]+)$",
);
const RatebasedruleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):ratebasedrule/(?<id>[^:/?]+)$",
);
const RegexmatchsetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):regexmatch/(?<id>[^:/?]+)$",
);
const RegexpatternsetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):regexpatternset/(?<id>[^:/?]+)$",
);
const RuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):rule/(?<id>[^:/?]+)$",
);
const RulegroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):rulegroup/(?<id>[^:/?]+)$",
);
const SizeconstraintsetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):sizeconstraintset/(?<id>[^:/?]+)$",
);
const SqlinjectionmatchsetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):sqlinjectionset/(?<id>[^:/?]+)$",
);
const WebaclArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):webacl/(?<id>[^:/?]+)$",
);
const XssmatchsetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):xssmatchset/(?<id>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for waf resources.
 */
export class WAFResources {
	/**
	 * Builds an ARN for the bytematchset resource.
	 */
	static bytematchset(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf::${props.account ?? "*"}:bytematchset/${props.id}`;
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
	static parseBytematchsetArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = BytematchsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bytematchset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
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
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf::${props.account ?? "*"}:geomatchset/${props.id}`;
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
	static parseGeomatchsetArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = GeomatchsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid geomatchset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
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
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf::${props.account ?? "*"}:ipset/${props.id}`;
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
	static parseIpsetArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = IpsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ipset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the ratebasedrule resource.
	 */
	static ratebasedrule(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf::${props.account ?? "*"}:ratebasedrule/${props.id}`;
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
	static parseRatebasedruleArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = RatebasedruleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ratebasedrule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
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
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf::${props.account ?? "*"}:regexmatch/${props.id}`;
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
	static parseRegexmatchsetArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = RegexmatchsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid regexmatchset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
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
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf::${props.account ?? "*"}:regexpatternset/${props.id}`;
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
	static parseRegexpatternsetArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = RegexpatternsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid regexpatternset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
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
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf::${props.account ?? "*"}:rule/${props.id}`;
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
	static parseRuleArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = RuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
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
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf::${props.account ?? "*"}:rulegroup/${props.id}`;
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
	static parseRulegroupArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = RulegroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rulegroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
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
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf::${props.account ?? "*"}:sizeconstraintset/${props.id}`;
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
	static parseSizeconstraintsetArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = SizeconstraintsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sizeconstraintset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
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
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf::${props.account ?? "*"}:sqlinjectionset/${props.id}`;
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
	static parseSqlinjectionmatchsetArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = SqlinjectionmatchsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sqlinjectionmatchset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
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
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf::${props.account ?? "*"}:webacl/${props.id}`;
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
	static parseWebaclArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = WebaclArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid webacl ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
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
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:waf::${props.account ?? "*"}:xssmatchset/${props.id}`;
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
	static parseXssmatchsetArn(arn: string): {
		partition: string;
		account: string;
		id: string;
	} {
		const match = XssmatchsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid xssmatchset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}
}

/**
 * API operation to required IAM actions mapping for waf.
 */
export class WAFOperations {
	/** IAM actions required for the CreateByteMatchSet API call. */
	static readonly CREATE_BYTE_MATCH_SET: string[] = ["waf:CreateByteMatchSet"];
	/** IAM actions required for the CreateGeoMatchSet API call. */
	static readonly CREATE_GEO_MATCH_SET: string[] = ["waf:CreateGeoMatchSet"];
	/** IAM actions required for the CreateIPSet API call. */
	static readonly CREATE_IP_SET: string[] = ["waf:CreateIPSet"];
	/** IAM actions required for the CreateRateBasedRule API call. */
	static readonly CREATE_RATE_BASED_RULE: string[] = [
		"waf:CreateRateBasedRule",
		"waf:TagResource",
	];
	/** IAM actions required for the CreateRegexMatchSet API call. */
	static readonly CREATE_REGEX_MATCH_SET: string[] = [
		"waf:CreateRegexMatchSet",
	];
	/** IAM actions required for the CreateRegexPatternSet API call. */
	static readonly CREATE_REGEX_PATTERN_SET: string[] = [
		"waf:CreateRegexPatternSet",
	];
	/** IAM actions required for the CreateRule API call. */
	static readonly CREATE_RULE: string[] = ["waf:CreateRule", "waf:TagResource"];
	/** IAM actions required for the CreateRuleGroup API call. */
	static readonly CREATE_RULE_GROUP: string[] = [
		"waf:CreateRuleGroup",
		"waf:TagResource",
	];
	/** IAM actions required for the CreateSizeConstraintSet API call. */
	static readonly CREATE_SIZE_CONSTRAINT_SET: string[] = [
		"waf:CreateSizeConstraintSet",
	];
	/** IAM actions required for the CreateSqlInjectionMatchSet API call. */
	static readonly CREATE_SQL_INJECTION_MATCH_SET: string[] = [
		"waf:CreateSqlInjectionMatchSet",
	];
	/** IAM actions required for the CreateWebACL API call. */
	static readonly CREATE_WEB_ACL: string[] = [
		"waf:CreateWebACL",
		"waf:TagResource",
	];
	/** IAM actions required for the CreateWebACLMigrationStack API call. */
	static readonly CREATE_WEB_ACL_MIGRATION_STACK: string[] = [
		"waf:CreateWebACLMigrationStack",
	];
	/** IAM actions required for the CreateXssMatchSet API call. */
	static readonly CREATE_XSS_MATCH_SET: string[] = ["waf:CreateXssMatchSet"];
	/** IAM actions required for the DeleteByteMatchSet API call. */
	static readonly DELETE_BYTE_MATCH_SET: string[] = ["waf:DeleteByteMatchSet"];
	/** IAM actions required for the DeleteGeoMatchSet API call. */
	static readonly DELETE_GEO_MATCH_SET: string[] = ["waf:DeleteGeoMatchSet"];
	/** IAM actions required for the DeleteIPSet API call. */
	static readonly DELETE_IP_SET: string[] = ["waf:DeleteIPSet"];
	/** IAM actions required for the DeleteLoggingConfiguration API call. */
	static readonly DELETE_LOGGING_CONFIGURATION: string[] = [
		"waf:DeleteLoggingConfiguration",
	];
	/** IAM actions required for the DeletePermissionPolicy API call. */
	static readonly DELETE_PERMISSION_POLICY: string[] = [
		"waf:DeletePermissionPolicy",
	];
	/** IAM actions required for the DeleteRateBasedRule API call. */
	static readonly DELETE_RATE_BASED_RULE: string[] = [
		"waf:DeleteRateBasedRule",
	];
	/** IAM actions required for the DeleteRegexMatchSet API call. */
	static readonly DELETE_REGEX_MATCH_SET: string[] = [
		"waf:DeleteRegexMatchSet",
	];
	/** IAM actions required for the DeleteRegexPatternSet API call. */
	static readonly DELETE_REGEX_PATTERN_SET: string[] = [
		"waf:DeleteRegexPatternSet",
	];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DELETE_RULE: string[] = ["waf:DeleteRule"];
	/** IAM actions required for the DeleteRuleGroup API call. */
	static readonly DELETE_RULE_GROUP: string[] = ["waf:DeleteRuleGroup"];
	/** IAM actions required for the DeleteSizeConstraintSet API call. */
	static readonly DELETE_SIZE_CONSTRAINT_SET: string[] = [
		"waf:DeleteSizeConstraintSet",
	];
	/** IAM actions required for the DeleteSqlInjectionMatchSet API call. */
	static readonly DELETE_SQL_INJECTION_MATCH_SET: string[] = [
		"waf:DeleteSqlInjectionMatchSet",
	];
	/** IAM actions required for the DeleteWebACL API call. */
	static readonly DELETE_WEB_ACL: string[] = ["waf:DeleteWebACL"];
	/** IAM actions required for the DeleteXssMatchSet API call. */
	static readonly DELETE_XSS_MATCH_SET: string[] = ["waf:DeleteXssMatchSet"];
	/** IAM actions required for the GetByteMatchSet API call. */
	static readonly GET_BYTE_MATCH_SET: string[] = ["waf:GetByteMatchSet"];
	/** IAM actions required for the GetChangeToken API call. */
	static readonly GET_CHANGE_TOKEN: string[] = ["waf:GetChangeToken"];
	/** IAM actions required for the GetChangeTokenStatus API call. */
	static readonly GET_CHANGE_TOKEN_STATUS: string[] = [
		"waf:GetChangeTokenStatus",
	];
	/** IAM actions required for the GetGeoMatchSet API call. */
	static readonly GET_GEO_MATCH_SET: string[] = ["waf:GetGeoMatchSet"];
	/** IAM actions required for the GetIPSet API call. */
	static readonly GET_IP_SET: string[] = ["waf:GetIPSet"];
	/** IAM actions required for the GetLoggingConfiguration API call. */
	static readonly GET_LOGGING_CONFIGURATION: string[] = [
		"waf:GetLoggingConfiguration",
	];
	/** IAM actions required for the GetPermissionPolicy API call. */
	static readonly GET_PERMISSION_POLICY: string[] = ["waf:GetPermissionPolicy"];
	/** IAM actions required for the GetRateBasedRule API call. */
	static readonly GET_RATE_BASED_RULE: string[] = ["waf:GetRateBasedRule"];
	/** IAM actions required for the GetRateBasedRuleManagedKeys API call. */
	static readonly GET_RATE_BASED_RULE_MANAGED_KEYS: string[] = [
		"waf:GetRateBasedRuleManagedKeys",
	];
	/** IAM actions required for the GetRegexMatchSet API call. */
	static readonly GET_REGEX_MATCH_SET: string[] = ["waf:GetRegexMatchSet"];
	/** IAM actions required for the GetRegexPatternSet API call. */
	static readonly GET_REGEX_PATTERN_SET: string[] = ["waf:GetRegexPatternSet"];
	/** IAM actions required for the GetRule API call. */
	static readonly GET_RULE: string[] = ["waf:GetRule"];
	/** IAM actions required for the GetRuleGroup API call. */
	static readonly GET_RULE_GROUP: string[] = ["waf:GetRuleGroup"];
	/** IAM actions required for the GetSampledRequests API call. */
	static readonly GET_SAMPLED_REQUESTS: string[] = ["waf:GetSampledRequests"];
	/** IAM actions required for the GetSizeConstraintSet API call. */
	static readonly GET_SIZE_CONSTRAINT_SET: string[] = [
		"waf:GetSizeConstraintSet",
	];
	/** IAM actions required for the GetSqlInjectionMatchSet API call. */
	static readonly GET_SQL_INJECTION_MATCH_SET: string[] = [
		"waf:GetSqlInjectionMatchSet",
	];
	/** IAM actions required for the GetWebACL API call. */
	static readonly GET_WEB_ACL: string[] = ["waf:GetWebACL"];
	/** IAM actions required for the GetXssMatchSet API call. */
	static readonly GET_XSS_MATCH_SET: string[] = ["waf:GetXssMatchSet"];
	/** IAM actions required for the ListActivatedRulesInRuleGroup API call. */
	static readonly LIST_ACTIVATED_RULES_IN_RULE_GROUP: string[] = [
		"waf:ListActivatedRulesInRuleGroup",
	];
	/** IAM actions required for the ListByteMatchSets API call. */
	static readonly LIST_BYTE_MATCH_SETS: string[] = ["waf:ListByteMatchSets"];
	/** IAM actions required for the ListGeoMatchSets API call. */
	static readonly LIST_GEO_MATCH_SETS: string[] = ["waf:ListGeoMatchSets"];
	/** IAM actions required for the ListIPSets API call. */
	static readonly LIST_IP_SETS: string[] = ["waf:ListIPSets"];
	/** IAM actions required for the ListLoggingConfigurations API call. */
	static readonly LIST_LOGGING_CONFIGURATIONS: string[] = [
		"waf:ListLoggingConfigurations",
	];
	/** IAM actions required for the ListRateBasedRules API call. */
	static readonly LIST_RATE_BASED_RULES: string[] = ["waf:ListRateBasedRules"];
	/** IAM actions required for the ListRegexMatchSets API call. */
	static readonly LIST_REGEX_MATCH_SETS: string[] = ["waf:ListRegexMatchSets"];
	/** IAM actions required for the ListRegexPatternSets API call. */
	static readonly LIST_REGEX_PATTERN_SETS: string[] = [
		"waf:ListRegexPatternSets",
	];
	/** IAM actions required for the ListRuleGroups API call. */
	static readonly LIST_RULE_GROUPS: string[] = ["waf:ListRuleGroups"];
	/** IAM actions required for the ListRules API call. */
	static readonly LIST_RULES: string[] = ["waf:ListRules"];
	/** IAM actions required for the ListSizeConstraintSets API call. */
	static readonly LIST_SIZE_CONSTRAINT_SETS: string[] = [
		"waf:ListSizeConstraintSets",
	];
	/** IAM actions required for the ListSqlInjectionMatchSets API call. */
	static readonly LIST_SQL_INJECTION_MATCH_SETS: string[] = [
		"waf:ListSqlInjectionMatchSets",
	];
	/** IAM actions required for the ListSubscribedRuleGroups API call. */
	static readonly LIST_SUBSCRIBED_RULE_GROUPS: string[] = [
		"waf:ListSubscribedRuleGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"waf:ListTagsForResource",
	];
	/** IAM actions required for the ListWebACLs API call. */
	static readonly LIST_WEB_AC_LS: string[] = ["waf:ListWebACLs"];
	/** IAM actions required for the ListXssMatchSets API call. */
	static readonly LIST_XSS_MATCH_SETS: string[] = ["waf:ListXssMatchSets"];
	/** IAM actions required for the PutLoggingConfiguration API call. */
	static readonly PUT_LOGGING_CONFIGURATION: string[] = [
		"waf:PutLoggingConfiguration",
	];
	/** IAM actions required for the PutPermissionPolicy API call. */
	static readonly PUT_PERMISSION_POLICY: string[] = ["waf:PutPermissionPolicy"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["waf:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["waf:UntagResource"];
	/** IAM actions required for the UpdateByteMatchSet API call. */
	static readonly UPDATE_BYTE_MATCH_SET: string[] = ["waf:UpdateByteMatchSet"];
	/** IAM actions required for the UpdateGeoMatchSet API call. */
	static readonly UPDATE_GEO_MATCH_SET: string[] = ["waf:UpdateGeoMatchSet"];
	/** IAM actions required for the UpdateIPSet API call. */
	static readonly UPDATE_IP_SET: string[] = ["waf:UpdateIPSet"];
	/** IAM actions required for the UpdateRateBasedRule API call. */
	static readonly UPDATE_RATE_BASED_RULE: string[] = [
		"waf:UpdateRateBasedRule",
	];
	/** IAM actions required for the UpdateRegexMatchSet API call. */
	static readonly UPDATE_REGEX_MATCH_SET: string[] = [
		"waf:UpdateRegexMatchSet",
	];
	/** IAM actions required for the UpdateRegexPatternSet API call. */
	static readonly UPDATE_REGEX_PATTERN_SET: string[] = [
		"waf:UpdateRegexPatternSet",
	];
	/** IAM actions required for the UpdateRule API call. */
	static readonly UPDATE_RULE: string[] = ["waf:UpdateRule"];
	/** IAM actions required for the UpdateRuleGroup API call. */
	static readonly UPDATE_RULE_GROUP: string[] = ["waf:UpdateRuleGroup"];
	/** IAM actions required for the UpdateSizeConstraintSet API call. */
	static readonly UPDATE_SIZE_CONSTRAINT_SET: string[] = [
		"waf:UpdateSizeConstraintSet",
	];
	/** IAM actions required for the UpdateSqlInjectionMatchSet API call. */
	static readonly UPDATE_SQL_INJECTION_MATCH_SET: string[] = [
		"waf:UpdateSqlInjectionMatchSet",
	];
	/** IAM actions required for the UpdateWebACL API call. */
	static readonly UPDATE_WEB_ACL: string[] = ["waf:UpdateWebACL"];
	/** IAM actions required for the UpdateXssMatchSet API call. */
	static readonly UPDATE_XSS_MATCH_SET: string[] = ["waf:UpdateXssMatchSet"];
}

/**
 * Condition key constants and builders for waf.
 */
export class WAFConditions {
	/** Condition keys applicable to the CreateRateBasedRule action. */
	static readonly CREATE_RATE_BASED_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRule action. */
	static readonly CREATE_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRuleGroup action. */
	static readonly CREATE_RULE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWebACL action. */
	static readonly CREATE_WEB_ACL_CONDITION_KEYS: string[] = [
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
