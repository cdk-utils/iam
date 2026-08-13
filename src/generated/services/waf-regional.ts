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
	static readonly AssociateWebACL = "waf-regional:AssociateWebACL";
	/** [Write] waf-regional:CreateByteMatchSet */
	static readonly CreateByteMatchSet = "waf-regional:CreateByteMatchSet";
	/** [Write] waf-regional:CreateGeoMatchSet */
	static readonly CreateGeoMatchSet = "waf-regional:CreateGeoMatchSet";
	/** [Write] waf-regional:CreateIPSet */
	static readonly CreateIPSet = "waf-regional:CreateIPSet";
	/** [Write] waf-regional:CreateRateBasedRule */
	static readonly CreateRateBasedRule = "waf-regional:CreateRateBasedRule";
	/** [Write] waf-regional:CreateRegexMatchSet */
	static readonly CreateRegexMatchSet = "waf-regional:CreateRegexMatchSet";
	/** [Write] waf-regional:CreateRegexPatternSet */
	static readonly CreateRegexPatternSet = "waf-regional:CreateRegexPatternSet";
	/** [Write] waf-regional:CreateRule */
	static readonly CreateRule = "waf-regional:CreateRule";
	/** [Write] waf-regional:CreateRuleGroup */
	static readonly CreateRuleGroup = "waf-regional:CreateRuleGroup";
	/** [Write] waf-regional:CreateSizeConstraintSet */
	static readonly CreateSizeConstraintSet =
		"waf-regional:CreateSizeConstraintSet";
	/** [Write] waf-regional:CreateSqlInjectionMatchSet */
	static readonly CreateSqlInjectionMatchSet =
		"waf-regional:CreateSqlInjectionMatchSet";
	/** [PermissionManagement] waf-regional:CreateWebACL */
	static readonly CreateWebACL = "waf-regional:CreateWebACL";
	/** [Write] waf-regional:CreateWebACLMigrationStack */
	static readonly CreateWebACLMigrationStack =
		"waf-regional:CreateWebACLMigrationStack";
	/** [Write] waf-regional:CreateXssMatchSet */
	static readonly CreateXssMatchSet = "waf-regional:CreateXssMatchSet";
	/** [Write] waf-regional:DeleteByteMatchSet */
	static readonly DeleteByteMatchSet = "waf-regional:DeleteByteMatchSet";
	/** [Write] waf-regional:DeleteGeoMatchSet */
	static readonly DeleteGeoMatchSet = "waf-regional:DeleteGeoMatchSet";
	/** [Write] waf-regional:DeleteIPSet */
	static readonly DeleteIPSet = "waf-regional:DeleteIPSet";
	/** [Write] waf-regional:DeleteLoggingConfiguration */
	static readonly DeleteLoggingConfiguration =
		"waf-regional:DeleteLoggingConfiguration";
	/** [PermissionManagement] waf-regional:DeletePermissionPolicy */
	static readonly DeletePermissionPolicy =
		"waf-regional:DeletePermissionPolicy";
	/** [Write] waf-regional:DeleteRateBasedRule */
	static readonly DeleteRateBasedRule = "waf-regional:DeleteRateBasedRule";
	/** [Write] waf-regional:DeleteRegexMatchSet */
	static readonly DeleteRegexMatchSet = "waf-regional:DeleteRegexMatchSet";
	/** [Write] waf-regional:DeleteRegexPatternSet */
	static readonly DeleteRegexPatternSet = "waf-regional:DeleteRegexPatternSet";
	/** [Write] waf-regional:DeleteRule */
	static readonly DeleteRule = "waf-regional:DeleteRule";
	/** [Write] waf-regional:DeleteRuleGroup */
	static readonly DeleteRuleGroup = "waf-regional:DeleteRuleGroup";
	/** [Write] waf-regional:DeleteSizeConstraintSet */
	static readonly DeleteSizeConstraintSet =
		"waf-regional:DeleteSizeConstraintSet";
	/** [Write] waf-regional:DeleteSqlInjectionMatchSet */
	static readonly DeleteSqlInjectionMatchSet =
		"waf-regional:DeleteSqlInjectionMatchSet";
	/** [PermissionManagement] waf-regional:DeleteWebACL */
	static readonly DeleteWebACL = "waf-regional:DeleteWebACL";
	/** [Write] waf-regional:DeleteXssMatchSet */
	static readonly DeleteXssMatchSet = "waf-regional:DeleteXssMatchSet";
	/** [Write] waf-regional:DisassociateWebACL */
	static readonly DisassociateWebACL = "waf-regional:DisassociateWebACL";
	/** [Read] waf-regional:GetByteMatchSet */
	static readonly actionGetByteMatchSet = "waf-regional:GetByteMatchSet";
	/** [Read] waf-regional:GetChangeToken */
	static readonly actionGetChangeToken = "waf-regional:GetChangeToken";
	/** [Read] waf-regional:GetChangeTokenStatus */
	static readonly actionGetChangeTokenStatus =
		"waf-regional:GetChangeTokenStatus";
	/** [Read] waf-regional:GetGeoMatchSet */
	static readonly actionGetGeoMatchSet = "waf-regional:GetGeoMatchSet";
	/** [Read] waf-regional:GetIPSet */
	static readonly actionGetIPSet = "waf-regional:GetIPSet";
	/** [Read] waf-regional:GetLoggingConfiguration */
	static readonly actionGetLoggingConfiguration =
		"waf-regional:GetLoggingConfiguration";
	/** [Read] waf-regional:GetPermissionPolicy */
	static readonly actionGetPermissionPolicy =
		"waf-regional:GetPermissionPolicy";
	/** [Read] waf-regional:GetRateBasedRule */
	static readonly actionGetRateBasedRule = "waf-regional:GetRateBasedRule";
	/** [Read] waf-regional:GetRateBasedRuleManagedKeys */
	static readonly actionGetRateBasedRuleManagedKeys =
		"waf-regional:GetRateBasedRuleManagedKeys";
	/** [Read] waf-regional:GetRegexMatchSet */
	static readonly actionGetRegexMatchSet = "waf-regional:GetRegexMatchSet";
	/** [Read] waf-regional:GetRegexPatternSet */
	static readonly actionGetRegexPatternSet = "waf-regional:GetRegexPatternSet";
	/** [Read] waf-regional:GetRule */
	static readonly actionGetRule = "waf-regional:GetRule";
	/** [Read] waf-regional:GetRuleGroup */
	static readonly actionGetRuleGroup = "waf-regional:GetRuleGroup";
	/** [Read] waf-regional:GetSampledRequests */
	static readonly actionGetSampledRequests = "waf-regional:GetSampledRequests";
	/** [Read] waf-regional:GetSizeConstraintSet */
	static readonly actionGetSizeConstraintSet =
		"waf-regional:GetSizeConstraintSet";
	/** [Read] waf-regional:GetSqlInjectionMatchSet */
	static readonly actionGetSqlInjectionMatchSet =
		"waf-regional:GetSqlInjectionMatchSet";
	/** [Read] waf-regional:GetWebACL */
	static readonly actionGetWebACL = "waf-regional:GetWebACL";
	/** [Read] waf-regional:GetWebACLForResource */
	static readonly actionGetWebACLForResource =
		"waf-regional:GetWebACLForResource";
	/** [Read] waf-regional:GetXssMatchSet */
	static readonly actionGetXssMatchSet = "waf-regional:GetXssMatchSet";
	/** [List] waf-regional:ListActivatedRulesInRuleGroup */
	static readonly ListActivatedRulesInRuleGroup =
		"waf-regional:ListActivatedRulesInRuleGroup";
	/** [List] waf-regional:ListByteMatchSets */
	static readonly ListByteMatchSets = "waf-regional:ListByteMatchSets";
	/** [List] waf-regional:ListGeoMatchSets */
	static readonly ListGeoMatchSets = "waf-regional:ListGeoMatchSets";
	/** [List] waf-regional:ListIPSets */
	static readonly ListIPSets = "waf-regional:ListIPSets";
	/** [List] waf-regional:ListLoggingConfigurations */
	static readonly ListLoggingConfigurations =
		"waf-regional:ListLoggingConfigurations";
	/** [List] waf-regional:ListRateBasedRules */
	static readonly ListRateBasedRules = "waf-regional:ListRateBasedRules";
	/** [List] waf-regional:ListRegexMatchSets */
	static readonly ListRegexMatchSets = "waf-regional:ListRegexMatchSets";
	/** [List] waf-regional:ListRegexPatternSets */
	static readonly ListRegexPatternSets = "waf-regional:ListRegexPatternSets";
	/** [List] waf-regional:ListResourcesForWebACL */
	static readonly ListResourcesForWebACL =
		"waf-regional:ListResourcesForWebACL";
	/** [List] waf-regional:ListRuleGroups */
	static readonly ListRuleGroups = "waf-regional:ListRuleGroups";
	/** [List] waf-regional:ListRules */
	static readonly ListRules = "waf-regional:ListRules";
	/** [List] waf-regional:ListSizeConstraintSets */
	static readonly ListSizeConstraintSets =
		"waf-regional:ListSizeConstraintSets";
	/** [List] waf-regional:ListSqlInjectionMatchSets */
	static readonly ListSqlInjectionMatchSets =
		"waf-regional:ListSqlInjectionMatchSets";
	/** [List] waf-regional:ListSubscribedRuleGroups */
	static readonly ListSubscribedRuleGroups =
		"waf-regional:ListSubscribedRuleGroups";
	/** [Read] waf-regional:ListTagsForResource */
	static readonly ListTagsForResource = "waf-regional:ListTagsForResource";
	/** [List] waf-regional:ListWebACLs */
	static readonly ListWebACLs = "waf-regional:ListWebACLs";
	/** [List] waf-regional:ListXssMatchSets */
	static readonly ListXssMatchSets = "waf-regional:ListXssMatchSets";
	/** [Write] waf-regional:PutLoggingConfiguration */
	static readonly PutLoggingConfiguration =
		"waf-regional:PutLoggingConfiguration";
	/** [PermissionManagement] waf-regional:PutPermissionPolicy */
	static readonly PutPermissionPolicy = "waf-regional:PutPermissionPolicy";
	/** [Tagging] waf-regional:TagResource */
	static readonly TagResource = "waf-regional:TagResource";
	/** [Tagging] waf-regional:UntagResource */
	static readonly UntagResource = "waf-regional:UntagResource";
	/** [Write] waf-regional:UpdateByteMatchSet */
	static readonly UpdateByteMatchSet = "waf-regional:UpdateByteMatchSet";
	/** [Write] waf-regional:UpdateGeoMatchSet */
	static readonly UpdateGeoMatchSet = "waf-regional:UpdateGeoMatchSet";
	/** [Write] waf-regional:UpdateIPSet */
	static readonly UpdateIPSet = "waf-regional:UpdateIPSet";
	/** [Write] waf-regional:UpdateRateBasedRule */
	static readonly UpdateRateBasedRule = "waf-regional:UpdateRateBasedRule";
	/** [Write] waf-regional:UpdateRegexMatchSet */
	static readonly UpdateRegexMatchSet = "waf-regional:UpdateRegexMatchSet";
	/** [Write] waf-regional:UpdateRegexPatternSet */
	static readonly UpdateRegexPatternSet = "waf-regional:UpdateRegexPatternSet";
	/** [Write] waf-regional:UpdateRule */
	static readonly UpdateRule = "waf-regional:UpdateRule";
	/** [Write] waf-regional:UpdateRuleGroup */
	static readonly UpdateRuleGroup = "waf-regional:UpdateRuleGroup";
	/** [Write] waf-regional:UpdateSizeConstraintSet */
	static readonly UpdateSizeConstraintSet =
		"waf-regional:UpdateSizeConstraintSet";
	/** [Write] waf-regional:UpdateSqlInjectionMatchSet */
	static readonly UpdateSqlInjectionMatchSet =
		"waf-regional:UpdateSqlInjectionMatchSet";
	/** [PermissionManagement] waf-regional:UpdateWebACL */
	static readonly UpdateWebACL = "waf-regional:UpdateWebACL";
	/** [Write] waf-regional:UpdateXssMatchSet */
	static readonly UpdateXssMatchSet = "waf-regional:UpdateXssMatchSet";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		WAFRegionalActions.actionGetByteMatchSet,
		WAFRegionalActions.actionGetChangeToken,
		WAFRegionalActions.actionGetChangeTokenStatus,
		WAFRegionalActions.actionGetGeoMatchSet,
		WAFRegionalActions.actionGetIPSet,
		WAFRegionalActions.actionGetLoggingConfiguration,
		WAFRegionalActions.actionGetPermissionPolicy,
		WAFRegionalActions.actionGetRateBasedRule,
		WAFRegionalActions.actionGetRateBasedRuleManagedKeys,
		WAFRegionalActions.actionGetRegexMatchSet,
		WAFRegionalActions.actionGetRegexPatternSet,
		WAFRegionalActions.actionGetRule,
		WAFRegionalActions.actionGetRuleGroup,
		WAFRegionalActions.actionGetSampledRequests,
		WAFRegionalActions.actionGetSizeConstraintSet,
		WAFRegionalActions.actionGetSqlInjectionMatchSet,
		WAFRegionalActions.actionGetWebACL,
		WAFRegionalActions.actionGetWebACLForResource,
		WAFRegionalActions.actionGetXssMatchSet,
		WAFRegionalActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		WAFRegionalActions.AssociateWebACL,
		WAFRegionalActions.CreateByteMatchSet,
		WAFRegionalActions.CreateGeoMatchSet,
		WAFRegionalActions.CreateIPSet,
		WAFRegionalActions.CreateRateBasedRule,
		WAFRegionalActions.CreateRegexMatchSet,
		WAFRegionalActions.CreateRegexPatternSet,
		WAFRegionalActions.CreateRule,
		WAFRegionalActions.CreateRuleGroup,
		WAFRegionalActions.CreateSizeConstraintSet,
		WAFRegionalActions.CreateSqlInjectionMatchSet,
		WAFRegionalActions.CreateWebACLMigrationStack,
		WAFRegionalActions.CreateXssMatchSet,
		WAFRegionalActions.DeleteByteMatchSet,
		WAFRegionalActions.DeleteGeoMatchSet,
		WAFRegionalActions.DeleteIPSet,
		WAFRegionalActions.DeleteLoggingConfiguration,
		WAFRegionalActions.DeleteRateBasedRule,
		WAFRegionalActions.DeleteRegexMatchSet,
		WAFRegionalActions.DeleteRegexPatternSet,
		WAFRegionalActions.DeleteRule,
		WAFRegionalActions.DeleteRuleGroup,
		WAFRegionalActions.DeleteSizeConstraintSet,
		WAFRegionalActions.DeleteSqlInjectionMatchSet,
		WAFRegionalActions.DeleteXssMatchSet,
		WAFRegionalActions.DisassociateWebACL,
		WAFRegionalActions.PutLoggingConfiguration,
		WAFRegionalActions.UpdateByteMatchSet,
		WAFRegionalActions.UpdateGeoMatchSet,
		WAFRegionalActions.UpdateIPSet,
		WAFRegionalActions.UpdateRateBasedRule,
		WAFRegionalActions.UpdateRegexMatchSet,
		WAFRegionalActions.UpdateRegexPatternSet,
		WAFRegionalActions.UpdateRule,
		WAFRegionalActions.UpdateRuleGroup,
		WAFRegionalActions.UpdateSizeConstraintSet,
		WAFRegionalActions.UpdateSqlInjectionMatchSet,
		WAFRegionalActions.UpdateXssMatchSet,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		WAFRegionalActions.ListActivatedRulesInRuleGroup,
		WAFRegionalActions.ListByteMatchSets,
		WAFRegionalActions.ListGeoMatchSets,
		WAFRegionalActions.ListIPSets,
		WAFRegionalActions.ListLoggingConfigurations,
		WAFRegionalActions.ListRateBasedRules,
		WAFRegionalActions.ListRegexMatchSets,
		WAFRegionalActions.ListRegexPatternSets,
		WAFRegionalActions.ListResourcesForWebACL,
		WAFRegionalActions.ListRuleGroups,
		WAFRegionalActions.ListRules,
		WAFRegionalActions.ListSizeConstraintSets,
		WAFRegionalActions.ListSqlInjectionMatchSets,
		WAFRegionalActions.ListSubscribedRuleGroups,
		WAFRegionalActions.ListWebACLs,
		WAFRegionalActions.ListXssMatchSets,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		WAFRegionalActions.CreateWebACL,
		WAFRegionalActions.DeletePermissionPolicy,
		WAFRegionalActions.DeleteWebACL,
		WAFRegionalActions.PutPermissionPolicy,
		WAFRegionalActions.UpdateWebACL,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		WAFRegionalActions.TagResource,
		WAFRegionalActions.UntagResource,
	];
}

/**
 * Properties for building a bytematchset ARN.
 */
export interface WAFRegionalBytematchsetArnProps {
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
 * Parsed components of a bytematchset ARN.
 */
export interface WAFRegionalBytematchsetArnComponents {
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
 * Properties for building a geomatchset ARN.
 */
export interface WAFRegionalGeomatchsetArnProps {
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
 * Parsed components of a geomatchset ARN.
 */
export interface WAFRegionalGeomatchsetArnComponents {
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
 * Properties for building a ipset ARN.
 */
export interface WAFRegionalIpsetArnProps {
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
 * Parsed components of a ipset ARN.
 */
export interface WAFRegionalIpsetArnComponents {
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
 * Properties for building a loadbalancer/app/ ARN.
 */
export interface WAFRegionalLoadbalancerAppArnProps {
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
}

/**
 * Parsed components of a loadbalancer/app/ ARN.
 */
export interface WAFRegionalLoadbalancerAppArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LoadBalancerName component. */
	readonly loadBalancerName: string;
	/** The LoadBalancerId component. */
	readonly loadBalancerId: string;
}

/**
 * Properties for building a ratebasedrule ARN.
 */
export interface WAFRegionalRatebasedruleArnProps {
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
 * Parsed components of a ratebasedrule ARN.
 */
export interface WAFRegionalRatebasedruleArnComponents {
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
 * Properties for building a regexmatchset ARN.
 */
export interface WAFRegionalRegexmatchsetArnProps {
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
 * Parsed components of a regexmatchset ARN.
 */
export interface WAFRegionalRegexmatchsetArnComponents {
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
 * Properties for building a regexpatternset ARN.
 */
export interface WAFRegionalRegexpatternsetArnProps {
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
 * Parsed components of a regexpatternset ARN.
 */
export interface WAFRegionalRegexpatternsetArnComponents {
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
 * Properties for building a rule ARN.
 */
export interface WAFRegionalRuleArnProps {
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
 * Parsed components of a rule ARN.
 */
export interface WAFRegionalRuleArnComponents {
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
 * Properties for building a rulegroup ARN.
 */
export interface WAFRegionalRulegroupArnProps {
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
 * Parsed components of a rulegroup ARN.
 */
export interface WAFRegionalRulegroupArnComponents {
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
 * Properties for building a sizeconstraintset ARN.
 */
export interface WAFRegionalSizeconstraintsetArnProps {
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
 * Parsed components of a sizeconstraintset ARN.
 */
export interface WAFRegionalSizeconstraintsetArnComponents {
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
 * Properties for building a sqlinjectionmatchset ARN.
 */
export interface WAFRegionalSqlinjectionmatchsetArnProps {
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
 * Parsed components of a sqlinjectionmatchset ARN.
 */
export interface WAFRegionalSqlinjectionmatchsetArnComponents {
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
 * Properties for building a webacl ARN.
 */
export interface WAFRegionalWebaclArnProps {
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
 * Parsed components of a webacl ARN.
 */
export interface WAFRegionalWebaclArnComponents {
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
 * Properties for building a xssmatchset ARN.
 */
export interface WAFRegionalXssmatchsetArnProps {
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
 * Parsed components of a xssmatchset ARN.
 */
export interface WAFRegionalXssmatchsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

const BytematchsetArnRegex =
	/^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):bytematchset\/(?<id>[^:/?]+)$/;
const GeomatchsetArnRegex =
	/^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):geomatchset\/(?<id>[^:/?]+)$/;
const IpsetArnRegex =
	/^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):ipset\/(?<id>[^:/?]+)$/;
const LoadbalancerAppArnRegex =
	/^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):loadbalancer\/app\/(?<loadBalancerName>[^:/?]+)\/(?<loadBalancerId>[^:/?]+)$/;
const RatebasedruleArnRegex =
	/^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):ratebasedrule\/(?<id>[^:/?]+)$/;
const RegexmatchsetArnRegex =
	/^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):regexmatch\/(?<id>[^:/?]+)$/;
const RegexpatternsetArnRegex =
	/^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):regexpatternset\/(?<id>[^:/?]+)$/;
const RuleArnRegex =
	/^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):rule\/(?<id>[^:/?]+)$/;
const RulegroupArnRegex =
	/^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):rulegroup\/(?<id>[^:/?]+)$/;
const SizeconstraintsetArnRegex =
	/^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):sizeconstraintset\/(?<id>[^:/?]+)$/;
const SqlinjectionmatchsetArnRegex =
	/^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):sqlinjectionset\/(?<id>[^:/?]+)$/;
const WebaclArnRegex =
	/^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):webacl\/(?<id>[^:/?]+)$/;
const XssmatchsetArnRegex =
	/^arn:(?<partition>[^:]+):waf-regional:(?<region>[^:]*):(?<account>[^:]*):xssmatchset\/(?<id>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for waf-regional resources.
 */
export class WAFRegionalResources {
	/**
	 * Builds an ARN for the bytematchset resource.
	 */
	static bytematchset(props: WAFRegionalBytematchsetArnProps): string {
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
	static parseBytematchsetArn(
		arn: string,
	): WAFRegionalBytematchsetArnComponents {
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
	static geomatchset(props: WAFRegionalGeomatchsetArnProps): string {
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
	static parseGeomatchsetArn(arn: string): WAFRegionalGeomatchsetArnComponents {
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
	static ipset(props: WAFRegionalIpsetArnProps): string {
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
	static parseIpsetArn(arn: string): WAFRegionalIpsetArnComponents {
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
	static loadbalancerApp(props: WAFRegionalLoadbalancerAppArnProps): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:loadbalancer/app/${props.loadBalancerName}/${props.loadBalancerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the loadbalancer/app/ resource.
	 */
	static isValidLoadbalancerAppArn(arn: string): boolean {
		return LoadbalancerAppArnRegex.test(arn);
	}

	/**
	 * Parses a loadbalancer/app/ ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLoadbalancerAppArn(
		arn: string,
	): WAFRegionalLoadbalancerAppArnComponents {
		const match = LoadbalancerAppArnRegex.exec(arn);
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
	static ratebasedrule(props: WAFRegionalRatebasedruleArnProps): string {
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
	static parseRatebasedruleArn(
		arn: string,
	): WAFRegionalRatebasedruleArnComponents {
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
	static regexmatchset(props: WAFRegionalRegexmatchsetArnProps): string {
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
	static parseRegexmatchsetArn(
		arn: string,
	): WAFRegionalRegexmatchsetArnComponents {
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
	static regexpatternset(props: WAFRegionalRegexpatternsetArnProps): string {
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
	static parseRegexpatternsetArn(
		arn: string,
	): WAFRegionalRegexpatternsetArnComponents {
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
	static rule(props: WAFRegionalRuleArnProps): string {
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
	static parseRuleArn(arn: string): WAFRegionalRuleArnComponents {
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
	static rulegroup(props: WAFRegionalRulegroupArnProps): string {
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
	static parseRulegroupArn(arn: string): WAFRegionalRulegroupArnComponents {
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
	static sizeconstraintset(
		props: WAFRegionalSizeconstraintsetArnProps,
	): string {
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
	static parseSizeconstraintsetArn(
		arn: string,
	): WAFRegionalSizeconstraintsetArnComponents {
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
	static sqlinjectionmatchset(
		props: WAFRegionalSqlinjectionmatchsetArnProps,
	): string {
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
	static parseSqlinjectionmatchsetArn(
		arn: string,
	): WAFRegionalSqlinjectionmatchsetArnComponents {
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
	static webacl(props: WAFRegionalWebaclArnProps): string {
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
	static parseWebaclArn(arn: string): WAFRegionalWebaclArnComponents {
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
	static xssmatchset(props: WAFRegionalXssmatchsetArnProps): string {
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
	static parseXssmatchsetArn(arn: string): WAFRegionalXssmatchsetArnComponents {
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
	static readonly AssociateWebACL: string[] = [
		"waf-regional:AssociateWebACL",
		"apigateway:SetWebACL",
		"elasticloadbalancing:SetWebAcl",
	];
	/** IAM actions required for the CreateByteMatchSet API call. */
	static readonly CreateByteMatchSet: string[] = [
		"waf-regional:CreateByteMatchSet",
	];
	/** IAM actions required for the CreateGeoMatchSet API call. */
	static readonly CreateGeoMatchSet: string[] = [
		"waf-regional:CreateGeoMatchSet",
	];
	/** IAM actions required for the CreateIPSet API call. */
	static readonly CreateIPSet: string[] = ["waf-regional:CreateIPSet"];
	/** IAM actions required for the CreateRateBasedRule API call. */
	static readonly CreateRateBasedRule: string[] = [
		"waf-regional:CreateRateBasedRule",
		"waf-regional:TagResource",
	];
	/** IAM actions required for the CreateRegexMatchSet API call. */
	static readonly CreateRegexMatchSet: string[] = [
		"waf-regional:CreateRegexMatchSet",
	];
	/** IAM actions required for the CreateRegexPatternSet API call. */
	static readonly CreateRegexPatternSet: string[] = [
		"waf-regional:CreateRegexPatternSet",
	];
	/** IAM actions required for the CreateRule API call. */
	static readonly CreateRule: string[] = [
		"waf-regional:CreateRule",
		"waf-regional:TagResource",
	];
	/** IAM actions required for the CreateRuleGroup API call. */
	static readonly CreateRuleGroup: string[] = [
		"waf-regional:CreateRuleGroup",
		"waf-regional:TagResource",
	];
	/** IAM actions required for the CreateSizeConstraintSet API call. */
	static readonly CreateSizeConstraintSet: string[] = [
		"waf-regional:CreateSizeConstraintSet",
	];
	/** IAM actions required for the CreateSqlInjectionMatchSet API call. */
	static readonly CreateSqlInjectionMatchSet: string[] = [
		"waf-regional:CreateSqlInjectionMatchSet",
	];
	/** IAM actions required for the CreateWebACL API call. */
	static readonly CreateWebACL: string[] = [
		"waf-regional:CreateWebACL",
		"waf-regional:TagResource",
	];
	/** IAM actions required for the CreateWebACLMigrationStack API call. */
	static readonly CreateWebACLMigrationStack: string[] = [
		"waf-regional:CreateWebACLMigrationStack",
	];
	/** IAM actions required for the CreateXssMatchSet API call. */
	static readonly CreateXssMatchSet: string[] = [
		"waf-regional:CreateXssMatchSet",
	];
	/** IAM actions required for the DeleteByteMatchSet API call. */
	static readonly DeleteByteMatchSet: string[] = [
		"waf-regional:DeleteByteMatchSet",
	];
	/** IAM actions required for the DeleteGeoMatchSet API call. */
	static readonly DeleteGeoMatchSet: string[] = [
		"waf-regional:DeleteGeoMatchSet",
	];
	/** IAM actions required for the DeleteIPSet API call. */
	static readonly DeleteIPSet: string[] = ["waf-regional:DeleteIPSet"];
	/** IAM actions required for the DeleteLoggingConfiguration API call. */
	static readonly DeleteLoggingConfiguration: string[] = [
		"waf-regional:DeleteLoggingConfiguration",
	];
	/** IAM actions required for the DeletePermissionPolicy API call. */
	static readonly DeletePermissionPolicy: string[] = [
		"waf-regional:DeletePermissionPolicy",
	];
	/** IAM actions required for the DeleteRateBasedRule API call. */
	static readonly DeleteRateBasedRule: string[] = [
		"waf-regional:DeleteRateBasedRule",
	];
	/** IAM actions required for the DeleteRegexMatchSet API call. */
	static readonly DeleteRegexMatchSet: string[] = [
		"waf-regional:DeleteRegexMatchSet",
	];
	/** IAM actions required for the DeleteRegexPatternSet API call. */
	static readonly DeleteRegexPatternSet: string[] = [
		"waf-regional:DeleteRegexPatternSet",
	];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DeleteRule: string[] = ["waf-regional:DeleteRule"];
	/** IAM actions required for the DeleteRuleGroup API call. */
	static readonly DeleteRuleGroup: string[] = ["waf-regional:DeleteRuleGroup"];
	/** IAM actions required for the DeleteSizeConstraintSet API call. */
	static readonly DeleteSizeConstraintSet: string[] = [
		"waf-regional:DeleteSizeConstraintSet",
	];
	/** IAM actions required for the DeleteSqlInjectionMatchSet API call. */
	static readonly DeleteSqlInjectionMatchSet: string[] = [
		"waf-regional:DeleteSqlInjectionMatchSet",
	];
	/** IAM actions required for the DeleteWebACL API call. */
	static readonly DeleteWebACL: string[] = ["waf-regional:DeleteWebACL"];
	/** IAM actions required for the DeleteXssMatchSet API call. */
	static readonly DeleteXssMatchSet: string[] = [
		"waf-regional:DeleteXssMatchSet",
	];
	/** IAM actions required for the DisassociateWebACL API call. */
	static readonly DisassociateWebACL: string[] = [
		"apigateway:SetWebACL",
		"elasticloadbalancing:SetWebAcl",
	];
	/** IAM actions required for the GetByteMatchSet API call. */
	static readonly opGetByteMatchSet: string[] = [
		"waf-regional:GetByteMatchSet",
	];
	/** IAM actions required for the GetChangeToken API call. */
	static readonly opGetChangeToken: string[] = ["waf-regional:GetChangeToken"];
	/** IAM actions required for the GetChangeTokenStatus API call. */
	static readonly opGetChangeTokenStatus: string[] = [
		"waf-regional:GetChangeTokenStatus",
	];
	/** IAM actions required for the GetGeoMatchSet API call. */
	static readonly opGetGeoMatchSet: string[] = ["waf-regional:GetGeoMatchSet"];
	/** IAM actions required for the GetIPSet API call. */
	static readonly opGetIPSet: string[] = ["waf-regional:GetIPSet"];
	/** IAM actions required for the GetLoggingConfiguration API call. */
	static readonly opGetLoggingConfiguration: string[] = [
		"waf-regional:GetLoggingConfiguration",
	];
	/** IAM actions required for the GetPermissionPolicy API call. */
	static readonly opGetPermissionPolicy: string[] = [
		"waf-regional:GetPermissionPolicy",
	];
	/** IAM actions required for the GetRateBasedRule API call. */
	static readonly opGetRateBasedRule: string[] = [
		"waf-regional:GetRateBasedRule",
	];
	/** IAM actions required for the GetRateBasedRuleManagedKeys API call. */
	static readonly opGetRateBasedRuleManagedKeys: string[] = [
		"waf-regional:GetRateBasedRuleManagedKeys",
	];
	/** IAM actions required for the GetRegexMatchSet API call. */
	static readonly opGetRegexMatchSet: string[] = [
		"waf-regional:GetRegexMatchSet",
	];
	/** IAM actions required for the GetRegexPatternSet API call. */
	static readonly opGetRegexPatternSet: string[] = [
		"waf-regional:GetRegexPatternSet",
	];
	/** IAM actions required for the GetRule API call. */
	static readonly opGetRule: string[] = ["waf-regional:GetRule"];
	/** IAM actions required for the GetRuleGroup API call. */
	static readonly opGetRuleGroup: string[] = ["waf-regional:GetRuleGroup"];
	/** IAM actions required for the GetSampledRequests API call. */
	static readonly opGetSampledRequests: string[] = [
		"waf-regional:GetSampledRequests",
	];
	/** IAM actions required for the GetSizeConstraintSet API call. */
	static readonly opGetSizeConstraintSet: string[] = [
		"waf-regional:GetSizeConstraintSet",
	];
	/** IAM actions required for the GetSqlInjectionMatchSet API call. */
	static readonly opGetSqlInjectionMatchSet: string[] = [
		"waf-regional:GetSqlInjectionMatchSet",
	];
	/** IAM actions required for the GetWebACL API call. */
	static readonly opGetWebACL: string[] = ["waf-regional:GetWebACL"];
	/** IAM actions required for the GetWebACLForResource API call. */
	static readonly opGetWebACLForResource: string[] = [
		"waf-regional:GetWebACLForResource",
	];
	/** IAM actions required for the GetXssMatchSet API call. */
	static readonly opGetXssMatchSet: string[] = ["waf-regional:GetXssMatchSet"];
	/** IAM actions required for the ListActivatedRulesInRuleGroup API call. */
	static readonly ListActivatedRulesInRuleGroup: string[] = [
		"waf-regional:ListActivatedRulesInRuleGroup",
	];
	/** IAM actions required for the ListByteMatchSets API call. */
	static readonly ListByteMatchSets: string[] = [
		"waf-regional:ListByteMatchSets",
	];
	/** IAM actions required for the ListGeoMatchSets API call. */
	static readonly ListGeoMatchSets: string[] = [
		"waf-regional:ListGeoMatchSets",
	];
	/** IAM actions required for the ListIPSets API call. */
	static readonly ListIPSets: string[] = ["waf-regional:ListIPSets"];
	/** IAM actions required for the ListLoggingConfigurations API call. */
	static readonly ListLoggingConfigurations: string[] = [
		"waf-regional:ListLoggingConfigurations",
	];
	/** IAM actions required for the ListRateBasedRules API call. */
	static readonly ListRateBasedRules: string[] = [
		"waf-regional:ListRateBasedRules",
	];
	/** IAM actions required for the ListRegexMatchSets API call. */
	static readonly ListRegexMatchSets: string[] = [
		"waf-regional:ListRegexMatchSets",
	];
	/** IAM actions required for the ListRegexPatternSets API call. */
	static readonly ListRegexPatternSets: string[] = [
		"waf-regional:ListRegexPatternSets",
	];
	/** IAM actions required for the ListResourcesForWebACL API call. */
	static readonly ListResourcesForWebACL: string[] = [
		"waf-regional:ListResourcesForWebACL",
	];
	/** IAM actions required for the ListRuleGroups API call. */
	static readonly ListRuleGroups: string[] = ["waf-regional:ListRuleGroups"];
	/** IAM actions required for the ListRules API call. */
	static readonly ListRules: string[] = ["waf-regional:ListRules"];
	/** IAM actions required for the ListSizeConstraintSets API call. */
	static readonly ListSizeConstraintSets: string[] = [
		"waf-regional:ListSizeConstraintSets",
	];
	/** IAM actions required for the ListSqlInjectionMatchSets API call. */
	static readonly ListSqlInjectionMatchSets: string[] = [
		"waf-regional:ListSqlInjectionMatchSets",
	];
	/** IAM actions required for the ListSubscribedRuleGroups API call. */
	static readonly ListSubscribedRuleGroups: string[] = [
		"waf-regional:ListSubscribedRuleGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"waf-regional:ListTagsForResource",
	];
	/** IAM actions required for the ListWebACLs API call. */
	static readonly ListWebACLs: string[] = ["waf-regional:ListWebACLs"];
	/** IAM actions required for the ListXssMatchSets API call. */
	static readonly ListXssMatchSets: string[] = [
		"waf-regional:ListXssMatchSets",
	];
	/** IAM actions required for the PutLoggingConfiguration API call. */
	static readonly PutLoggingConfiguration: string[] = [
		"waf-regional:PutLoggingConfiguration",
	];
	/** IAM actions required for the PutPermissionPolicy API call. */
	static readonly PutPermissionPolicy: string[] = [
		"waf-regional:PutPermissionPolicy",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["waf-regional:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["waf-regional:UntagResource"];
	/** IAM actions required for the UpdateByteMatchSet API call. */
	static readonly UpdateByteMatchSet: string[] = [
		"waf-regional:UpdateByteMatchSet",
	];
	/** IAM actions required for the UpdateGeoMatchSet API call. */
	static readonly UpdateGeoMatchSet: string[] = [
		"waf-regional:UpdateGeoMatchSet",
	];
	/** IAM actions required for the UpdateIPSet API call. */
	static readonly UpdateIPSet: string[] = ["waf-regional:UpdateIPSet"];
	/** IAM actions required for the UpdateRateBasedRule API call. */
	static readonly UpdateRateBasedRule: string[] = [
		"waf-regional:UpdateRateBasedRule",
	];
	/** IAM actions required for the UpdateRegexMatchSet API call. */
	static readonly UpdateRegexMatchSet: string[] = [
		"waf-regional:UpdateRegexMatchSet",
	];
	/** IAM actions required for the UpdateRegexPatternSet API call. */
	static readonly UpdateRegexPatternSet: string[] = [
		"waf-regional:UpdateRegexPatternSet",
	];
	/** IAM actions required for the UpdateRule API call. */
	static readonly UpdateRule: string[] = ["waf-regional:UpdateRule"];
	/** IAM actions required for the UpdateRuleGroup API call. */
	static readonly UpdateRuleGroup: string[] = ["waf-regional:UpdateRuleGroup"];
	/** IAM actions required for the UpdateSizeConstraintSet API call. */
	static readonly UpdateSizeConstraintSet: string[] = [
		"waf-regional:UpdateSizeConstraintSet",
	];
	/** IAM actions required for the UpdateSqlInjectionMatchSet API call. */
	static readonly UpdateSqlInjectionMatchSet: string[] = [
		"waf-regional:UpdateSqlInjectionMatchSet",
	];
	/** IAM actions required for the UpdateWebACL API call. */
	static readonly UpdateWebACL: string[] = ["waf-regional:UpdateWebACL"];
	/** IAM actions required for the UpdateXssMatchSet API call. */
	static readonly UpdateXssMatchSet: string[] = [
		"waf-regional:UpdateXssMatchSet",
	];
}

/**
 * Condition key constants and builders for waf-regional.
 */
export class WAFRegionalConditions {
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
