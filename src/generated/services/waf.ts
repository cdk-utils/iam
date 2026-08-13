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
	static readonly CreateByteMatchSet = "waf:CreateByteMatchSet";
	/** [Write] waf:CreateGeoMatchSet */
	static readonly CreateGeoMatchSet = "waf:CreateGeoMatchSet";
	/** [Write] waf:CreateIPSet */
	static readonly CreateIPSet = "waf:CreateIPSet";
	/** [Write] waf:CreateRateBasedRule */
	static readonly CreateRateBasedRule = "waf:CreateRateBasedRule";
	/** [Write] waf:CreateRegexMatchSet */
	static readonly CreateRegexMatchSet = "waf:CreateRegexMatchSet";
	/** [Write] waf:CreateRegexPatternSet */
	static readonly CreateRegexPatternSet = "waf:CreateRegexPatternSet";
	/** [Write] waf:CreateRule */
	static readonly CreateRule = "waf:CreateRule";
	/** [Write] waf:CreateRuleGroup */
	static readonly CreateRuleGroup = "waf:CreateRuleGroup";
	/** [Write] waf:CreateSizeConstraintSet */
	static readonly CreateSizeConstraintSet = "waf:CreateSizeConstraintSet";
	/** [Write] waf:CreateSqlInjectionMatchSet */
	static readonly CreateSqlInjectionMatchSet = "waf:CreateSqlInjectionMatchSet";
	/** [PermissionManagement] waf:CreateWebACL */
	static readonly CreateWebACL = "waf:CreateWebACL";
	/** [Write] waf:CreateWebACLMigrationStack */
	static readonly CreateWebACLMigrationStack = "waf:CreateWebACLMigrationStack";
	/** [Write] waf:CreateXssMatchSet */
	static readonly CreateXssMatchSet = "waf:CreateXssMatchSet";
	/** [Write] waf:DeleteByteMatchSet */
	static readonly DeleteByteMatchSet = "waf:DeleteByteMatchSet";
	/** [Write] waf:DeleteGeoMatchSet */
	static readonly DeleteGeoMatchSet = "waf:DeleteGeoMatchSet";
	/** [Write] waf:DeleteIPSet */
	static readonly DeleteIPSet = "waf:DeleteIPSet";
	/** [Write] waf:DeleteLoggingConfiguration */
	static readonly DeleteLoggingConfiguration = "waf:DeleteLoggingConfiguration";
	/** [PermissionManagement] waf:DeletePermissionPolicy */
	static readonly DeletePermissionPolicy = "waf:DeletePermissionPolicy";
	/** [Write] waf:DeleteRateBasedRule */
	static readonly DeleteRateBasedRule = "waf:DeleteRateBasedRule";
	/** [Write] waf:DeleteRegexMatchSet */
	static readonly DeleteRegexMatchSet = "waf:DeleteRegexMatchSet";
	/** [Write] waf:DeleteRegexPatternSet */
	static readonly DeleteRegexPatternSet = "waf:DeleteRegexPatternSet";
	/** [Write] waf:DeleteRule */
	static readonly DeleteRule = "waf:DeleteRule";
	/** [Write] waf:DeleteRuleGroup */
	static readonly DeleteRuleGroup = "waf:DeleteRuleGroup";
	/** [Write] waf:DeleteSizeConstraintSet */
	static readonly DeleteSizeConstraintSet = "waf:DeleteSizeConstraintSet";
	/** [Write] waf:DeleteSqlInjectionMatchSet */
	static readonly DeleteSqlInjectionMatchSet = "waf:DeleteSqlInjectionMatchSet";
	/** [PermissionManagement] waf:DeleteWebACL */
	static readonly DeleteWebACL = "waf:DeleteWebACL";
	/** [Write] waf:DeleteXssMatchSet */
	static readonly DeleteXssMatchSet = "waf:DeleteXssMatchSet";
	/** [Read] waf:GetByteMatchSet */
	static readonly actionGetByteMatchSet = "waf:GetByteMatchSet";
	/** [Read] waf:GetChangeToken */
	static readonly actionGetChangeToken = "waf:GetChangeToken";
	/** [Read] waf:GetChangeTokenStatus */
	static readonly actionGetChangeTokenStatus = "waf:GetChangeTokenStatus";
	/** [Read] waf:GetGeoMatchSet */
	static readonly actionGetGeoMatchSet = "waf:GetGeoMatchSet";
	/** [Read] waf:GetIPSet */
	static readonly actionGetIPSet = "waf:GetIPSet";
	/** [Read] waf:GetLoggingConfiguration */
	static readonly actionGetLoggingConfiguration = "waf:GetLoggingConfiguration";
	/** [Read] waf:GetPermissionPolicy */
	static readonly actionGetPermissionPolicy = "waf:GetPermissionPolicy";
	/** [Read] waf:GetRateBasedRule */
	static readonly actionGetRateBasedRule = "waf:GetRateBasedRule";
	/** [Read] waf:GetRateBasedRuleManagedKeys */
	static readonly actionGetRateBasedRuleManagedKeys =
		"waf:GetRateBasedRuleManagedKeys";
	/** [Read] waf:GetRegexMatchSet */
	static readonly actionGetRegexMatchSet = "waf:GetRegexMatchSet";
	/** [Read] waf:GetRegexPatternSet */
	static readonly actionGetRegexPatternSet = "waf:GetRegexPatternSet";
	/** [Read] waf:GetRule */
	static readonly actionGetRule = "waf:GetRule";
	/** [Read] waf:GetRuleGroup */
	static readonly actionGetRuleGroup = "waf:GetRuleGroup";
	/** [Read] waf:GetSampledRequests */
	static readonly actionGetSampledRequests = "waf:GetSampledRequests";
	/** [Read] waf:GetSizeConstraintSet */
	static readonly actionGetSizeConstraintSet = "waf:GetSizeConstraintSet";
	/** [Read] waf:GetSqlInjectionMatchSet */
	static readonly actionGetSqlInjectionMatchSet = "waf:GetSqlInjectionMatchSet";
	/** [Read] waf:GetWebACL */
	static readonly actionGetWebACL = "waf:GetWebACL";
	/** [Read] waf:GetXssMatchSet */
	static readonly actionGetXssMatchSet = "waf:GetXssMatchSet";
	/** [List] waf:ListActivatedRulesInRuleGroup */
	static readonly ListActivatedRulesInRuleGroup =
		"waf:ListActivatedRulesInRuleGroup";
	/** [List] waf:ListByteMatchSets */
	static readonly ListByteMatchSets = "waf:ListByteMatchSets";
	/** [List] waf:ListGeoMatchSets */
	static readonly ListGeoMatchSets = "waf:ListGeoMatchSets";
	/** [List] waf:ListIPSets */
	static readonly ListIPSets = "waf:ListIPSets";
	/** [List] waf:ListLoggingConfigurations */
	static readonly ListLoggingConfigurations = "waf:ListLoggingConfigurations";
	/** [List] waf:ListRateBasedRules */
	static readonly ListRateBasedRules = "waf:ListRateBasedRules";
	/** [List] waf:ListRegexMatchSets */
	static readonly ListRegexMatchSets = "waf:ListRegexMatchSets";
	/** [List] waf:ListRegexPatternSets */
	static readonly ListRegexPatternSets = "waf:ListRegexPatternSets";
	/** [List] waf:ListRuleGroups */
	static readonly ListRuleGroups = "waf:ListRuleGroups";
	/** [List] waf:ListRules */
	static readonly ListRules = "waf:ListRules";
	/** [List] waf:ListSizeConstraintSets */
	static readonly ListSizeConstraintSets = "waf:ListSizeConstraintSets";
	/** [List] waf:ListSqlInjectionMatchSets */
	static readonly ListSqlInjectionMatchSets = "waf:ListSqlInjectionMatchSets";
	/** [List] waf:ListSubscribedRuleGroups */
	static readonly ListSubscribedRuleGroups = "waf:ListSubscribedRuleGroups";
	/** [Read] waf:ListTagsForResource */
	static readonly ListTagsForResource = "waf:ListTagsForResource";
	/** [List] waf:ListWebACLs */
	static readonly ListWebACLs = "waf:ListWebACLs";
	/** [List] waf:ListXssMatchSets */
	static readonly ListXssMatchSets = "waf:ListXssMatchSets";
	/** [Write] waf:PutLoggingConfiguration */
	static readonly PutLoggingConfiguration = "waf:PutLoggingConfiguration";
	/** [PermissionManagement] waf:PutPermissionPolicy */
	static readonly PutPermissionPolicy = "waf:PutPermissionPolicy";
	/** [Tagging] waf:TagResource */
	static readonly TagResource = "waf:TagResource";
	/** [Tagging] waf:UntagResource */
	static readonly UntagResource = "waf:UntagResource";
	/** [Write] waf:UpdateByteMatchSet */
	static readonly UpdateByteMatchSet = "waf:UpdateByteMatchSet";
	/** [Write] waf:UpdateGeoMatchSet */
	static readonly UpdateGeoMatchSet = "waf:UpdateGeoMatchSet";
	/** [Write] waf:UpdateIPSet */
	static readonly UpdateIPSet = "waf:UpdateIPSet";
	/** [Write] waf:UpdateRateBasedRule */
	static readonly UpdateRateBasedRule = "waf:UpdateRateBasedRule";
	/** [Write] waf:UpdateRegexMatchSet */
	static readonly UpdateRegexMatchSet = "waf:UpdateRegexMatchSet";
	/** [Write] waf:UpdateRegexPatternSet */
	static readonly UpdateRegexPatternSet = "waf:UpdateRegexPatternSet";
	/** [Write] waf:UpdateRule */
	static readonly UpdateRule = "waf:UpdateRule";
	/** [Write] waf:UpdateRuleGroup */
	static readonly UpdateRuleGroup = "waf:UpdateRuleGroup";
	/** [Write] waf:UpdateSizeConstraintSet */
	static readonly UpdateSizeConstraintSet = "waf:UpdateSizeConstraintSet";
	/** [Write] waf:UpdateSqlInjectionMatchSet */
	static readonly UpdateSqlInjectionMatchSet = "waf:UpdateSqlInjectionMatchSet";
	/** [PermissionManagement] waf:UpdateWebACL */
	static readonly UpdateWebACL = "waf:UpdateWebACL";
	/** [Write] waf:UpdateXssMatchSet */
	static readonly UpdateXssMatchSet = "waf:UpdateXssMatchSet";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		WAFActions.actionGetByteMatchSet,
		WAFActions.actionGetChangeToken,
		WAFActions.actionGetChangeTokenStatus,
		WAFActions.actionGetGeoMatchSet,
		WAFActions.actionGetIPSet,
		WAFActions.actionGetLoggingConfiguration,
		WAFActions.actionGetPermissionPolicy,
		WAFActions.actionGetRateBasedRule,
		WAFActions.actionGetRateBasedRuleManagedKeys,
		WAFActions.actionGetRegexMatchSet,
		WAFActions.actionGetRegexPatternSet,
		WAFActions.actionGetRule,
		WAFActions.actionGetRuleGroup,
		WAFActions.actionGetSampledRequests,
		WAFActions.actionGetSizeConstraintSet,
		WAFActions.actionGetSqlInjectionMatchSet,
		WAFActions.actionGetWebACL,
		WAFActions.actionGetXssMatchSet,
		WAFActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		WAFActions.CreateByteMatchSet,
		WAFActions.CreateGeoMatchSet,
		WAFActions.CreateIPSet,
		WAFActions.CreateRateBasedRule,
		WAFActions.CreateRegexMatchSet,
		WAFActions.CreateRegexPatternSet,
		WAFActions.CreateRule,
		WAFActions.CreateRuleGroup,
		WAFActions.CreateSizeConstraintSet,
		WAFActions.CreateSqlInjectionMatchSet,
		WAFActions.CreateWebACLMigrationStack,
		WAFActions.CreateXssMatchSet,
		WAFActions.DeleteByteMatchSet,
		WAFActions.DeleteGeoMatchSet,
		WAFActions.DeleteIPSet,
		WAFActions.DeleteLoggingConfiguration,
		WAFActions.DeleteRateBasedRule,
		WAFActions.DeleteRegexMatchSet,
		WAFActions.DeleteRegexPatternSet,
		WAFActions.DeleteRule,
		WAFActions.DeleteRuleGroup,
		WAFActions.DeleteSizeConstraintSet,
		WAFActions.DeleteSqlInjectionMatchSet,
		WAFActions.DeleteXssMatchSet,
		WAFActions.PutLoggingConfiguration,
		WAFActions.UpdateByteMatchSet,
		WAFActions.UpdateGeoMatchSet,
		WAFActions.UpdateIPSet,
		WAFActions.UpdateRateBasedRule,
		WAFActions.UpdateRegexMatchSet,
		WAFActions.UpdateRegexPatternSet,
		WAFActions.UpdateRule,
		WAFActions.UpdateRuleGroup,
		WAFActions.UpdateSizeConstraintSet,
		WAFActions.UpdateSqlInjectionMatchSet,
		WAFActions.UpdateXssMatchSet,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		WAFActions.ListActivatedRulesInRuleGroup,
		WAFActions.ListByteMatchSets,
		WAFActions.ListGeoMatchSets,
		WAFActions.ListIPSets,
		WAFActions.ListLoggingConfigurations,
		WAFActions.ListRateBasedRules,
		WAFActions.ListRegexMatchSets,
		WAFActions.ListRegexPatternSets,
		WAFActions.ListRuleGroups,
		WAFActions.ListRules,
		WAFActions.ListSizeConstraintSets,
		WAFActions.ListSqlInjectionMatchSets,
		WAFActions.ListSubscribedRuleGroups,
		WAFActions.ListWebACLs,
		WAFActions.ListXssMatchSets,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		WAFActions.CreateWebACL,
		WAFActions.DeletePermissionPolicy,
		WAFActions.DeleteWebACL,
		WAFActions.PutPermissionPolicy,
		WAFActions.UpdateWebACL,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		WAFActions.TagResource,
		WAFActions.UntagResource,
	];
}

/**
 * Properties for building a bytematchset ARN.
 */
export interface WAFBytematchsetArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a bytematchset ARN.
 */
export interface WAFBytematchsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a geomatchset ARN.
 */
export interface WAFGeomatchsetArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a geomatchset ARN.
 */
export interface WAFGeomatchsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a ipset ARN.
 */
export interface WAFIpsetArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ipset ARN.
 */
export interface WAFIpsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a ratebasedrule ARN.
 */
export interface WAFRatebasedruleArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ratebasedrule ARN.
 */
export interface WAFRatebasedruleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a regexmatchset ARN.
 */
export interface WAFRegexmatchsetArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a regexmatchset ARN.
 */
export interface WAFRegexmatchsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a regexpatternset ARN.
 */
export interface WAFRegexpatternsetArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a regexpatternset ARN.
 */
export interface WAFRegexpatternsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a rule ARN.
 */
export interface WAFRuleArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a rule ARN.
 */
export interface WAFRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a rulegroup ARN.
 */
export interface WAFRulegroupArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a rulegroup ARN.
 */
export interface WAFRulegroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a sizeconstraintset ARN.
 */
export interface WAFSizeconstraintsetArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a sizeconstraintset ARN.
 */
export interface WAFSizeconstraintsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a sqlinjectionmatchset ARN.
 */
export interface WAFSqlinjectionmatchsetArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a sqlinjectionmatchset ARN.
 */
export interface WAFSqlinjectionmatchsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a webacl ARN.
 */
export interface WAFWebaclArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a webacl ARN.
 */
export interface WAFWebaclArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a xssmatchset ARN.
 */
export interface WAFXssmatchsetArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a xssmatchset ARN.
 */
export interface WAFXssmatchsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

const BytematchsetArnRegex =
	/^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):bytematchset\/(?<id>[^:/?]+)$/;
const GeomatchsetArnRegex =
	/^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):geomatchset\/(?<id>[^:/?]+)$/;
const IpsetArnRegex =
	/^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):ipset\/(?<id>[^:/?]+)$/;
const RatebasedruleArnRegex =
	/^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):ratebasedrule\/(?<id>[^:/?]+)$/;
const RegexmatchsetArnRegex =
	/^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):regexmatch\/(?<id>[^:/?]+)$/;
const RegexpatternsetArnRegex =
	/^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):regexpatternset\/(?<id>[^:/?]+)$/;
const RuleArnRegex =
	/^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):rule\/(?<id>[^:/?]+)$/;
const RulegroupArnRegex =
	/^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):rulegroup\/(?<id>[^:/?]+)$/;
const SizeconstraintsetArnRegex =
	/^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):sizeconstraintset\/(?<id>[^:/?]+)$/;
const SqlinjectionmatchsetArnRegex =
	/^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):sqlinjectionset\/(?<id>[^:/?]+)$/;
const WebaclArnRegex =
	/^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):webacl\/(?<id>[^:/?]+)$/;
const XssmatchsetArnRegex =
	/^arn:(?<partition>[^:]+):waf::(?<account>[^:]*):xssmatchset\/(?<id>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for waf resources.
 */
export class WAFResources {
	/**
	 * Builds an ARN for the bytematchset resource.
	 */
	static bytematchset(props: WAFBytematchsetArnProps): string {
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
	static parseBytematchsetArn(arn: string): WAFBytematchsetArnComponents {
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
	static geomatchset(props: WAFGeomatchsetArnProps): string {
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
	static parseGeomatchsetArn(arn: string): WAFGeomatchsetArnComponents {
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
	static ipset(props: WAFIpsetArnProps): string {
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
	static parseIpsetArn(arn: string): WAFIpsetArnComponents {
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
	static ratebasedrule(props: WAFRatebasedruleArnProps): string {
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
	static parseRatebasedruleArn(arn: string): WAFRatebasedruleArnComponents {
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
	static regexmatchset(props: WAFRegexmatchsetArnProps): string {
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
	static parseRegexmatchsetArn(arn: string): WAFRegexmatchsetArnComponents {
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
	static regexpatternset(props: WAFRegexpatternsetArnProps): string {
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
	static parseRegexpatternsetArn(arn: string): WAFRegexpatternsetArnComponents {
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
	static rule(props: WAFRuleArnProps): string {
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
	static parseRuleArn(arn: string): WAFRuleArnComponents {
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
	static rulegroup(props: WAFRulegroupArnProps): string {
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
	static parseRulegroupArn(arn: string): WAFRulegroupArnComponents {
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
	static sizeconstraintset(props: WAFSizeconstraintsetArnProps): string {
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
	static parseSizeconstraintsetArn(
		arn: string,
	): WAFSizeconstraintsetArnComponents {
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
	static sqlinjectionmatchset(props: WAFSqlinjectionmatchsetArnProps): string {
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
	static parseSqlinjectionmatchsetArn(
		arn: string,
	): WAFSqlinjectionmatchsetArnComponents {
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
	static webacl(props: WAFWebaclArnProps): string {
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
	static parseWebaclArn(arn: string): WAFWebaclArnComponents {
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
	static xssmatchset(props: WAFXssmatchsetArnProps): string {
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
	static parseXssmatchsetArn(arn: string): WAFXssmatchsetArnComponents {
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
	static readonly CreateByteMatchSet: string[] = ["waf:CreateByteMatchSet"];
	/** IAM actions required for the CreateGeoMatchSet API call. */
	static readonly CreateGeoMatchSet: string[] = ["waf:CreateGeoMatchSet"];
	/** IAM actions required for the CreateIPSet API call. */
	static readonly CreateIPSet: string[] = ["waf:CreateIPSet"];
	/** IAM actions required for the CreateRateBasedRule API call. */
	static readonly CreateRateBasedRule: string[] = [
		"waf:CreateRateBasedRule",
		"waf:TagResource",
	];
	/** IAM actions required for the CreateRegexMatchSet API call. */
	static readonly CreateRegexMatchSet: string[] = ["waf:CreateRegexMatchSet"];
	/** IAM actions required for the CreateRegexPatternSet API call. */
	static readonly CreateRegexPatternSet: string[] = [
		"waf:CreateRegexPatternSet",
	];
	/** IAM actions required for the CreateRule API call. */
	static readonly CreateRule: string[] = ["waf:CreateRule", "waf:TagResource"];
	/** IAM actions required for the CreateRuleGroup API call. */
	static readonly CreateRuleGroup: string[] = [
		"waf:CreateRuleGroup",
		"waf:TagResource",
	];
	/** IAM actions required for the CreateSizeConstraintSet API call. */
	static readonly CreateSizeConstraintSet: string[] = [
		"waf:CreateSizeConstraintSet",
	];
	/** IAM actions required for the CreateSqlInjectionMatchSet API call. */
	static readonly CreateSqlInjectionMatchSet: string[] = [
		"waf:CreateSqlInjectionMatchSet",
	];
	/** IAM actions required for the CreateWebACL API call. */
	static readonly CreateWebACL: string[] = [
		"waf:CreateWebACL",
		"waf:TagResource",
	];
	/** IAM actions required for the CreateWebACLMigrationStack API call. */
	static readonly CreateWebACLMigrationStack: string[] = [
		"waf:CreateWebACLMigrationStack",
	];
	/** IAM actions required for the CreateXssMatchSet API call. */
	static readonly CreateXssMatchSet: string[] = ["waf:CreateXssMatchSet"];
	/** IAM actions required for the DeleteByteMatchSet API call. */
	static readonly DeleteByteMatchSet: string[] = ["waf:DeleteByteMatchSet"];
	/** IAM actions required for the DeleteGeoMatchSet API call. */
	static readonly DeleteGeoMatchSet: string[] = ["waf:DeleteGeoMatchSet"];
	/** IAM actions required for the DeleteIPSet API call. */
	static readonly DeleteIPSet: string[] = ["waf:DeleteIPSet"];
	/** IAM actions required for the DeleteLoggingConfiguration API call. */
	static readonly DeleteLoggingConfiguration: string[] = [
		"waf:DeleteLoggingConfiguration",
	];
	/** IAM actions required for the DeletePermissionPolicy API call. */
	static readonly DeletePermissionPolicy: string[] = [
		"waf:DeletePermissionPolicy",
	];
	/** IAM actions required for the DeleteRateBasedRule API call. */
	static readonly DeleteRateBasedRule: string[] = ["waf:DeleteRateBasedRule"];
	/** IAM actions required for the DeleteRegexMatchSet API call. */
	static readonly DeleteRegexMatchSet: string[] = ["waf:DeleteRegexMatchSet"];
	/** IAM actions required for the DeleteRegexPatternSet API call. */
	static readonly DeleteRegexPatternSet: string[] = [
		"waf:DeleteRegexPatternSet",
	];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DeleteRule: string[] = ["waf:DeleteRule"];
	/** IAM actions required for the DeleteRuleGroup API call. */
	static readonly DeleteRuleGroup: string[] = ["waf:DeleteRuleGroup"];
	/** IAM actions required for the DeleteSizeConstraintSet API call. */
	static readonly DeleteSizeConstraintSet: string[] = [
		"waf:DeleteSizeConstraintSet",
	];
	/** IAM actions required for the DeleteSqlInjectionMatchSet API call. */
	static readonly DeleteSqlInjectionMatchSet: string[] = [
		"waf:DeleteSqlInjectionMatchSet",
	];
	/** IAM actions required for the DeleteWebACL API call. */
	static readonly DeleteWebACL: string[] = ["waf:DeleteWebACL"];
	/** IAM actions required for the DeleteXssMatchSet API call. */
	static readonly DeleteXssMatchSet: string[] = ["waf:DeleteXssMatchSet"];
	/** IAM actions required for the GetByteMatchSet API call. */
	static readonly opGetByteMatchSet: string[] = ["waf:GetByteMatchSet"];
	/** IAM actions required for the GetChangeToken API call. */
	static readonly opGetChangeToken: string[] = ["waf:GetChangeToken"];
	/** IAM actions required for the GetChangeTokenStatus API call. */
	static readonly opGetChangeTokenStatus: string[] = [
		"waf:GetChangeTokenStatus",
	];
	/** IAM actions required for the GetGeoMatchSet API call. */
	static readonly opGetGeoMatchSet: string[] = ["waf:GetGeoMatchSet"];
	/** IAM actions required for the GetIPSet API call. */
	static readonly opGetIPSet: string[] = ["waf:GetIPSet"];
	/** IAM actions required for the GetLoggingConfiguration API call. */
	static readonly opGetLoggingConfiguration: string[] = [
		"waf:GetLoggingConfiguration",
	];
	/** IAM actions required for the GetPermissionPolicy API call. */
	static readonly opGetPermissionPolicy: string[] = ["waf:GetPermissionPolicy"];
	/** IAM actions required for the GetRateBasedRule API call. */
	static readonly opGetRateBasedRule: string[] = ["waf:GetRateBasedRule"];
	/** IAM actions required for the GetRateBasedRuleManagedKeys API call. */
	static readonly opGetRateBasedRuleManagedKeys: string[] = [
		"waf:GetRateBasedRuleManagedKeys",
	];
	/** IAM actions required for the GetRegexMatchSet API call. */
	static readonly opGetRegexMatchSet: string[] = ["waf:GetRegexMatchSet"];
	/** IAM actions required for the GetRegexPatternSet API call. */
	static readonly opGetRegexPatternSet: string[] = ["waf:GetRegexPatternSet"];
	/** IAM actions required for the GetRule API call. */
	static readonly opGetRule: string[] = ["waf:GetRule"];
	/** IAM actions required for the GetRuleGroup API call. */
	static readonly opGetRuleGroup: string[] = ["waf:GetRuleGroup"];
	/** IAM actions required for the GetSampledRequests API call. */
	static readonly opGetSampledRequests: string[] = ["waf:GetSampledRequests"];
	/** IAM actions required for the GetSizeConstraintSet API call. */
	static readonly opGetSizeConstraintSet: string[] = [
		"waf:GetSizeConstraintSet",
	];
	/** IAM actions required for the GetSqlInjectionMatchSet API call. */
	static readonly opGetSqlInjectionMatchSet: string[] = [
		"waf:GetSqlInjectionMatchSet",
	];
	/** IAM actions required for the GetWebACL API call. */
	static readonly opGetWebACL: string[] = ["waf:GetWebACL"];
	/** IAM actions required for the GetXssMatchSet API call. */
	static readonly opGetXssMatchSet: string[] = ["waf:GetXssMatchSet"];
	/** IAM actions required for the ListActivatedRulesInRuleGroup API call. */
	static readonly ListActivatedRulesInRuleGroup: string[] = [
		"waf:ListActivatedRulesInRuleGroup",
	];
	/** IAM actions required for the ListByteMatchSets API call. */
	static readonly ListByteMatchSets: string[] = ["waf:ListByteMatchSets"];
	/** IAM actions required for the ListGeoMatchSets API call. */
	static readonly ListGeoMatchSets: string[] = ["waf:ListGeoMatchSets"];
	/** IAM actions required for the ListIPSets API call. */
	static readonly ListIPSets: string[] = ["waf:ListIPSets"];
	/** IAM actions required for the ListLoggingConfigurations API call. */
	static readonly ListLoggingConfigurations: string[] = [
		"waf:ListLoggingConfigurations",
	];
	/** IAM actions required for the ListRateBasedRules API call. */
	static readonly ListRateBasedRules: string[] = ["waf:ListRateBasedRules"];
	/** IAM actions required for the ListRegexMatchSets API call. */
	static readonly ListRegexMatchSets: string[] = ["waf:ListRegexMatchSets"];
	/** IAM actions required for the ListRegexPatternSets API call. */
	static readonly ListRegexPatternSets: string[] = ["waf:ListRegexPatternSets"];
	/** IAM actions required for the ListRuleGroups API call. */
	static readonly ListRuleGroups: string[] = ["waf:ListRuleGroups"];
	/** IAM actions required for the ListRules API call. */
	static readonly ListRules: string[] = ["waf:ListRules"];
	/** IAM actions required for the ListSizeConstraintSets API call. */
	static readonly ListSizeConstraintSets: string[] = [
		"waf:ListSizeConstraintSets",
	];
	/** IAM actions required for the ListSqlInjectionMatchSets API call. */
	static readonly ListSqlInjectionMatchSets: string[] = [
		"waf:ListSqlInjectionMatchSets",
	];
	/** IAM actions required for the ListSubscribedRuleGroups API call. */
	static readonly ListSubscribedRuleGroups: string[] = [
		"waf:ListSubscribedRuleGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["waf:ListTagsForResource"];
	/** IAM actions required for the ListWebACLs API call. */
	static readonly ListWebACLs: string[] = ["waf:ListWebACLs"];
	/** IAM actions required for the ListXssMatchSets API call. */
	static readonly ListXssMatchSets: string[] = ["waf:ListXssMatchSets"];
	/** IAM actions required for the PutLoggingConfiguration API call. */
	static readonly PutLoggingConfiguration: string[] = [
		"waf:PutLoggingConfiguration",
	];
	/** IAM actions required for the PutPermissionPolicy API call. */
	static readonly PutPermissionPolicy: string[] = ["waf:PutPermissionPolicy"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["waf:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["waf:UntagResource"];
	/** IAM actions required for the UpdateByteMatchSet API call. */
	static readonly UpdateByteMatchSet: string[] = ["waf:UpdateByteMatchSet"];
	/** IAM actions required for the UpdateGeoMatchSet API call. */
	static readonly UpdateGeoMatchSet: string[] = ["waf:UpdateGeoMatchSet"];
	/** IAM actions required for the UpdateIPSet API call. */
	static readonly UpdateIPSet: string[] = ["waf:UpdateIPSet"];
	/** IAM actions required for the UpdateRateBasedRule API call. */
	static readonly UpdateRateBasedRule: string[] = ["waf:UpdateRateBasedRule"];
	/** IAM actions required for the UpdateRegexMatchSet API call. */
	static readonly UpdateRegexMatchSet: string[] = ["waf:UpdateRegexMatchSet"];
	/** IAM actions required for the UpdateRegexPatternSet API call. */
	static readonly UpdateRegexPatternSet: string[] = [
		"waf:UpdateRegexPatternSet",
	];
	/** IAM actions required for the UpdateRule API call. */
	static readonly UpdateRule: string[] = ["waf:UpdateRule"];
	/** IAM actions required for the UpdateRuleGroup API call. */
	static readonly UpdateRuleGroup: string[] = ["waf:UpdateRuleGroup"];
	/** IAM actions required for the UpdateSizeConstraintSet API call. */
	static readonly UpdateSizeConstraintSet: string[] = [
		"waf:UpdateSizeConstraintSet",
	];
	/** IAM actions required for the UpdateSqlInjectionMatchSet API call. */
	static readonly UpdateSqlInjectionMatchSet: string[] = [
		"waf:UpdateSqlInjectionMatchSet",
	];
	/** IAM actions required for the UpdateWebACL API call. */
	static readonly UpdateWebACL: string[] = ["waf:UpdateWebACL"];
	/** IAM actions required for the UpdateXssMatchSet API call. */
	static readonly UpdateXssMatchSet: string[] = ["waf:UpdateXssMatchSet"];
}

/**
 * Condition key constants and builders for waf.
 */
export class WAFConditions {
	/** Condition keys applicable to the CreateRateBasedRule action. */
	static readonly CreateRateBasedRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRule action. */
	static readonly CreateRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRuleGroup action. */
	static readonly CreateRuleGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWebACL action. */
	static readonly CreateWebACLConditionKeys: string[] = [
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
