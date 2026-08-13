// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/wafv2.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the wafv2 service.
 */
export class Wafv2Actions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "wafv2";

	/** [Write] wafv2:AssociateWebACL */
	static readonly AssociateWebACL = "wafv2:AssociateWebACL";
	/** [Read] wafv2:CheckCapacity */
	static readonly CheckCapacity = "wafv2:CheckCapacity";
	/** [Write] wafv2:CreateAPIKey */
	static readonly CreateAPIKey = "wafv2:CreateAPIKey";
	/** [Write] wafv2:CreateIPSet */
	static readonly CreateIPSet = "wafv2:CreateIPSet";
	/** [Write] wafv2:CreateRegexPatternSet */
	static readonly CreateRegexPatternSet = "wafv2:CreateRegexPatternSet";
	/** [Write] wafv2:CreateRuleGroup */
	static readonly CreateRuleGroup = "wafv2:CreateRuleGroup";
	/** [Write] wafv2:CreateWebACL */
	static readonly CreateWebACL = "wafv2:CreateWebACL";
	/** [Write] wafv2:DeleteAPIKey */
	static readonly DeleteAPIKey = "wafv2:DeleteAPIKey";
	/** [Write] wafv2:DeleteFirewallManagerRuleGroups */
	static readonly DeleteFirewallManagerRuleGroups =
		"wafv2:DeleteFirewallManagerRuleGroups";
	/** [Write] wafv2:DeleteIPSet */
	static readonly DeleteIPSet = "wafv2:DeleteIPSet";
	/** [Write] wafv2:DeleteLoggingConfiguration */
	static readonly DeleteLoggingConfiguration =
		"wafv2:DeleteLoggingConfiguration";
	/** [PermissionManagement] wafv2:DeletePermissionPolicy */
	static readonly DeletePermissionPolicy = "wafv2:DeletePermissionPolicy";
	/** [Write] wafv2:DeleteRegexPatternSet */
	static readonly DeleteRegexPatternSet = "wafv2:DeleteRegexPatternSet";
	/** [Write] wafv2:DeleteRuleGroup */
	static readonly DeleteRuleGroup = "wafv2:DeleteRuleGroup";
	/** [Write] wafv2:DeleteWebACL */
	static readonly DeleteWebACL = "wafv2:DeleteWebACL";
	/** [Read] wafv2:DescribeAllManagedProducts */
	static readonly DescribeAllManagedProducts =
		"wafv2:DescribeAllManagedProducts";
	/** [Read] wafv2:DescribeManagedProductsByVendor */
	static readonly DescribeManagedProductsByVendor =
		"wafv2:DescribeManagedProductsByVendor";
	/** [Read] wafv2:DescribeManagedRuleGroup */
	static readonly DescribeManagedRuleGroup = "wafv2:DescribeManagedRuleGroup";
	/** [Write] wafv2:DisassociateFirewallManager */
	static readonly DisassociateFirewallManager =
		"wafv2:DisassociateFirewallManager";
	/** [Write] wafv2:DisassociateWebACL */
	static readonly DisassociateWebACL = "wafv2:DisassociateWebACL";
	/** [Read] wafv2:GenerateMobileSdkReleaseUrl */
	static readonly GenerateMobileSdkReleaseUrl =
		"wafv2:GenerateMobileSdkReleaseUrl";
	/** [Read] wafv2:GetDecryptedAPIKey */
	static readonly actionGetDecryptedAPIKey = "wafv2:GetDecryptedAPIKey";
	/** [Read] wafv2:GetIPSet */
	static readonly actionGetIPSet = "wafv2:GetIPSet";
	/** [Read] wafv2:GetLoggingConfiguration */
	static readonly actionGetLoggingConfiguration =
		"wafv2:GetLoggingConfiguration";
	/** [Read] wafv2:GetManagedRuleSet */
	static readonly actionGetManagedRuleSet = "wafv2:GetManagedRuleSet";
	/** [Read] wafv2:GetMobileSdkRelease */
	static readonly actionGetMobileSdkRelease = "wafv2:GetMobileSdkRelease";
	/** [Read] wafv2:GetPermissionPolicy */
	static readonly actionGetPermissionPolicy = "wafv2:GetPermissionPolicy";
	/** [Read] wafv2:GetRateBasedStatementManagedKeys */
	static readonly actionGetRateBasedStatementManagedKeys =
		"wafv2:GetRateBasedStatementManagedKeys";
	/** [Read] wafv2:GetRegexPatternSet */
	static readonly actionGetRegexPatternSet = "wafv2:GetRegexPatternSet";
	/** [Read] wafv2:GetRevenueStatistics */
	static readonly actionGetRevenueStatistics = "wafv2:GetRevenueStatistics";
	/** [Read] wafv2:GetRevenueStatisticsSummary */
	static readonly actionGetRevenueStatisticsSummary =
		"wafv2:GetRevenueStatisticsSummary";
	/** [Read] wafv2:GetRevenueStatisticsTimeSeries */
	static readonly actionGetRevenueStatisticsTimeSeries =
		"wafv2:GetRevenueStatisticsTimeSeries";
	/** [Read] wafv2:GetRuleGroup */
	static readonly actionGetRuleGroup = "wafv2:GetRuleGroup";
	/** [Read] wafv2:GetSampledRequests */
	static readonly actionGetSampledRequests = "wafv2:GetSampledRequests";
	/** [Read] wafv2:GetTopPathStatisticsByTraffic */
	static readonly actionGetTopPathStatisticsByTraffic =
		"wafv2:GetTopPathStatisticsByTraffic";
	/** [Read] wafv2:GetWebACL */
	static readonly actionGetWebACL = "wafv2:GetWebACL";
	/** [Read] wafv2:GetWebACLForResource */
	static readonly actionGetWebACLForResource = "wafv2:GetWebACLForResource";
	/** [List] wafv2:ListAPIKeys */
	static readonly ListAPIKeys = "wafv2:ListAPIKeys";
	/** [List] wafv2:ListAvailableManagedRuleGroupVersions */
	static readonly ListAvailableManagedRuleGroupVersions =
		"wafv2:ListAvailableManagedRuleGroupVersions";
	/** [List] wafv2:ListAvailableManagedRuleGroups */
	static readonly ListAvailableManagedRuleGroups =
		"wafv2:ListAvailableManagedRuleGroups";
	/** [List] wafv2:ListIPSets */
	static readonly ListIPSets = "wafv2:ListIPSets";
	/** [List] wafv2:ListLoggingConfigurations */
	static readonly ListLoggingConfigurations = "wafv2:ListLoggingConfigurations";
	/** [List] wafv2:ListManagedRuleSets */
	static readonly ListManagedRuleSets = "wafv2:ListManagedRuleSets";
	/** [List] wafv2:ListMobileSdkReleases */
	static readonly ListMobileSdkReleases = "wafv2:ListMobileSdkReleases";
	/** [List] wafv2:ListRegexPatternSets */
	static readonly ListRegexPatternSets = "wafv2:ListRegexPatternSets";
	/** [List] wafv2:ListResourcesForWebACL */
	static readonly ListResourcesForWebACL = "wafv2:ListResourcesForWebACL";
	/** [List] wafv2:ListRuleGroups */
	static readonly ListRuleGroups = "wafv2:ListRuleGroups";
	/** [List] wafv2:ListSettlementRecords */
	static readonly ListSettlementRecords = "wafv2:ListSettlementRecords";
	/** [Read] wafv2:ListTagsForResource */
	static readonly ListTagsForResource = "wafv2:ListTagsForResource";
	/** [List] wafv2:ListWebACLs */
	static readonly ListWebACLs = "wafv2:ListWebACLs";
	/** [Write] wafv2:PutFirewallManagerRuleGroups */
	static readonly PutFirewallManagerRuleGroups =
		"wafv2:PutFirewallManagerRuleGroups";
	/** [Write] wafv2:PutLoggingConfiguration */
	static readonly PutLoggingConfiguration = "wafv2:PutLoggingConfiguration";
	/** [Write] wafv2:PutManagedRuleSetVersions */
	static readonly PutManagedRuleSetVersions = "wafv2:PutManagedRuleSetVersions";
	/** [PermissionManagement] wafv2:PutPermissionPolicy */
	static readonly PutPermissionPolicy = "wafv2:PutPermissionPolicy";
	/** [Tagging] wafv2:TagResource */
	static readonly TagResource = "wafv2:TagResource";
	/** [Tagging] wafv2:UntagResource */
	static readonly UntagResource = "wafv2:UntagResource";
	/** [Write] wafv2:UpdateIPSet */
	static readonly UpdateIPSet = "wafv2:UpdateIPSet";
	/** [Write] wafv2:UpdateManagedRuleSetVersionExpiryDate */
	static readonly UpdateManagedRuleSetVersionExpiryDate =
		"wafv2:UpdateManagedRuleSetVersionExpiryDate";
	/** [Write] wafv2:UpdateRegexPatternSet */
	static readonly UpdateRegexPatternSet = "wafv2:UpdateRegexPatternSet";
	/** [Write] wafv2:UpdateRuleGroup */
	static readonly UpdateRuleGroup = "wafv2:UpdateRuleGroup";
	/** [Write] wafv2:UpdateWebACL */
	static readonly UpdateWebACL = "wafv2:UpdateWebACL";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		Wafv2Actions.CheckCapacity,
		Wafv2Actions.DescribeAllManagedProducts,
		Wafv2Actions.DescribeManagedProductsByVendor,
		Wafv2Actions.DescribeManagedRuleGroup,
		Wafv2Actions.GenerateMobileSdkReleaseUrl,
		Wafv2Actions.actionGetDecryptedAPIKey,
		Wafv2Actions.actionGetIPSet,
		Wafv2Actions.actionGetLoggingConfiguration,
		Wafv2Actions.actionGetManagedRuleSet,
		Wafv2Actions.actionGetMobileSdkRelease,
		Wafv2Actions.actionGetPermissionPolicy,
		Wafv2Actions.actionGetRateBasedStatementManagedKeys,
		Wafv2Actions.actionGetRegexPatternSet,
		Wafv2Actions.actionGetRevenueStatistics,
		Wafv2Actions.actionGetRevenueStatisticsSummary,
		Wafv2Actions.actionGetRevenueStatisticsTimeSeries,
		Wafv2Actions.actionGetRuleGroup,
		Wafv2Actions.actionGetSampledRequests,
		Wafv2Actions.actionGetTopPathStatisticsByTraffic,
		Wafv2Actions.actionGetWebACL,
		Wafv2Actions.actionGetWebACLForResource,
		Wafv2Actions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Wafv2Actions.AssociateWebACL,
		Wafv2Actions.CreateAPIKey,
		Wafv2Actions.CreateIPSet,
		Wafv2Actions.CreateRegexPatternSet,
		Wafv2Actions.CreateRuleGroup,
		Wafv2Actions.CreateWebACL,
		Wafv2Actions.DeleteAPIKey,
		Wafv2Actions.DeleteFirewallManagerRuleGroups,
		Wafv2Actions.DeleteIPSet,
		Wafv2Actions.DeleteLoggingConfiguration,
		Wafv2Actions.DeleteRegexPatternSet,
		Wafv2Actions.DeleteRuleGroup,
		Wafv2Actions.DeleteWebACL,
		Wafv2Actions.DisassociateFirewallManager,
		Wafv2Actions.DisassociateWebACL,
		Wafv2Actions.PutFirewallManagerRuleGroups,
		Wafv2Actions.PutLoggingConfiguration,
		Wafv2Actions.PutManagedRuleSetVersions,
		Wafv2Actions.UpdateIPSet,
		Wafv2Actions.UpdateManagedRuleSetVersionExpiryDate,
		Wafv2Actions.UpdateRegexPatternSet,
		Wafv2Actions.UpdateRuleGroup,
		Wafv2Actions.UpdateWebACL,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		Wafv2Actions.ListAPIKeys,
		Wafv2Actions.ListAvailableManagedRuleGroupVersions,
		Wafv2Actions.ListAvailableManagedRuleGroups,
		Wafv2Actions.ListIPSets,
		Wafv2Actions.ListLoggingConfigurations,
		Wafv2Actions.ListManagedRuleSets,
		Wafv2Actions.ListMobileSdkReleases,
		Wafv2Actions.ListRegexPatternSets,
		Wafv2Actions.ListResourcesForWebACL,
		Wafv2Actions.ListRuleGroups,
		Wafv2Actions.ListSettlementRecords,
		Wafv2Actions.ListWebACLs,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		Wafv2Actions.DeletePermissionPolicy,
		Wafv2Actions.PutPermissionPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		Wafv2Actions.TagResource,
		Wafv2Actions.UntagResource,
	];
}

/**
 * Properties for building a agentcore-gateway ARN.
 */
export interface Wafv2AgentcoreGatewayArnProps {
	/** The GatewayId component of the ARN. */
	readonly gatewayId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a agentcore-gateway ARN.
 */
export interface Wafv2AgentcoreGatewayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
}

/**
 * Properties for building a amplify-app ARN.
 */
export interface Wafv2AmplifyAppArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a amplify-app ARN.
 */
export interface Wafv2AmplifyAppArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a apigateway ARN.
 */
export interface Wafv2ApigatewayArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The StageName component of the ARN. */
	readonly stageName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a apigateway ARN.
 */
export interface Wafv2ApigatewayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The StageName component. */
	readonly stageName: string;
}

/**
 * Properties for building a apprunner ARN.
 */
export interface Wafv2ApprunnerArnProps {
	/** The ServiceName component of the ARN. */
	readonly serviceName: string;
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
 * Parsed components of a apprunner ARN.
 */
export interface Wafv2ApprunnerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceName component. */
	readonly serviceName: string;
	/** The ServiceId component. */
	readonly serviceId: string;
}

/**
 * Properties for building a appsync ARN.
 */
export interface Wafv2AppsyncArnProps {
	/** The GraphQLAPIId component of the ARN. */
	readonly graphQlapiId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a appsync ARN.
 */
export interface Wafv2AppsyncArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GraphQLAPIId component. */
	readonly graphQlapiId: string;
}

/**
 * Properties for building a ipset ARN.
 */
export interface Wafv2IpsetArnProps {
	/** The Scope component of the ARN. */
	readonly scope: string;
	/** The Name component of the ARN. */
	readonly name: string;
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
export interface Wafv2IpsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Scope component. */
	readonly scope: string;
	/** The Name component. */
	readonly name: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a loadbalancer/app/ ARN.
 */
export interface Wafv2LoadbalancerAppArnProps {
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
export interface Wafv2LoadbalancerAppArnComponents {
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
 * Properties for building a managedruleset ARN.
 */
export interface Wafv2ManagedrulesetArnProps {
	/** The Scope component of the ARN. */
	readonly scope: string;
	/** The Name component of the ARN. */
	readonly name: string;
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
 * Parsed components of a managedruleset ARN.
 */
export interface Wafv2ManagedrulesetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Scope component. */
	readonly scope: string;
	/** The Name component. */
	readonly name: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a regexpatternset ARN.
 */
export interface Wafv2RegexpatternsetArnProps {
	/** The Scope component of the ARN. */
	readonly scope: string;
	/** The Name component of the ARN. */
	readonly name: string;
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
export interface Wafv2RegexpatternsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Scope component. */
	readonly scope: string;
	/** The Name component. */
	readonly name: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a rulegroup ARN.
 */
export interface Wafv2RulegroupArnProps {
	/** The Scope component of the ARN. */
	readonly scope: string;
	/** The Name component of the ARN. */
	readonly name: string;
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
export interface Wafv2RulegroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Scope component. */
	readonly scope: string;
	/** The Name component. */
	readonly name: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a userpool ARN.
 */
export interface Wafv2UserpoolArnProps {
	/** The UserPoolId component of the ARN. */
	readonly userPoolId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a userpool ARN.
 */
export interface Wafv2UserpoolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UserPoolId component. */
	readonly userPoolId: string;
}

/**
 * Properties for building a verified-access-instance ARN.
 */
export interface Wafv2VerifiedAccessInstanceArnProps {
	/** The VerifiedAccessInstanceId component of the ARN. */
	readonly verifiedAccessInstanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a verified-access-instance ARN.
 */
export interface Wafv2VerifiedAccessInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VerifiedAccessInstanceId component. */
	readonly verifiedAccessInstanceId: string;
}

/**
 * Properties for building a webacl ARN.
 */
export interface Wafv2WebaclArnProps {
	/** The Scope component of the ARN. */
	readonly scope: string;
	/** The Name component of the ARN. */
	readonly name: string;
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
export interface Wafv2WebaclArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Scope component. */
	readonly scope: string;
	/** The Name component. */
	readonly name: string;
	/** The Id component. */
	readonly id: string;
}

const AgentcoreGatewayArnRegex =
	/^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)$/;
const AmplifyAppArnRegex =
	/^arn:(?<partition>[^:]+):amplify:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)$/;
const ApigatewayArnRegex =
	/^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::\/restapis\/(?<apiId>[^:/?]+)\/stages\/(?<stageName>[^:/?]+)$/;
const ApprunnerArnRegex =
	/^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):service\/(?<serviceName>[^:/?]+)\/(?<serviceId>[^:/?]+)$/;
const AppsyncArnRegex =
	/^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis\/(?<graphQlapiId>[^:/?]+)$/;
const IpsetArnRegex =
	/^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)\/ipset\/(?<name>[^:/?]+)\/(?<id>[^:/?]+)$/;
const LoadbalancerAppArnRegex =
	/^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):loadbalancer\/app\/(?<loadBalancerName>[^:/?]+)\/(?<loadBalancerId>[^:/?]+)$/;
const ManagedrulesetArnRegex =
	/^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)\/managedruleset\/(?<name>[^:/?]+)\/(?<id>[^:/?]+)$/;
const RegexpatternsetArnRegex =
	/^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)\/regexpatternset\/(?<name>[^:/?]+)\/(?<id>[^:/?]+)$/;
const RulegroupArnRegex =
	/^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)\/rulegroup\/(?<name>[^:/?]+)\/(?<id>[^:/?]+)$/;
const UserpoolArnRegex =
	/^arn:(?<partition>[^:]+):cognito-idp:(?<region>[^:]*):(?<account>[^:]*):userpool\/(?<userPoolId>[^:/?]+)$/;
const VerifiedAccessInstanceArnRegex =
	/^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):verified-access-instance\/(?<verifiedAccessInstanceId>[^:/?]+)$/;
const WebaclArnRegex =
	/^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)\/webacl\/(?<name>[^:/?]+)\/(?<id>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for wafv2 resources.
 */
export class Wafv2Resources {
	/**
	 * Builds an ARN for the agentcore-gateway resource.
	 */
	static agentcoreGateway(props: Wafv2AgentcoreGatewayArnProps): string {
		return `arn:${props.partition ?? "aws"}:bedrock-agentcore:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agentcore-gateway resource.
	 */
	static isValidAgentcoreGatewayArn(arn: string): boolean {
		return AgentcoreGatewayArnRegex.test(arn);
	}

	/**
	 * Parses a agentcore-gateway ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentcoreGatewayArn(
		arn: string,
	): Wafv2AgentcoreGatewayArnComponents {
		const match = AgentcoreGatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agentcore-gateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
		};
	}

	/**
	 * Builds an ARN for the amplify-app resource.
	 */
	static amplifyApp(props: Wafv2AmplifyAppArnProps): string {
		return `arn:${props.partition ?? "aws"}:amplify:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the amplify-app resource.
	 */
	static isValidAmplifyAppArn(arn: string): boolean {
		return AmplifyAppArnRegex.test(arn);
	}

	/**
	 * Parses a amplify-app ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAmplifyAppArn(arn: string): Wafv2AmplifyAppArnComponents {
		const match = AmplifyAppArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid amplify-app ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the apigateway resource.
	 */
	static apigateway(props: Wafv2ApigatewayArnProps): string {
		return `arn:${props.partition ?? "aws"}:apigateway:${props.region ?? "*"}::/restapis/${props.apiId}/stages/${props.stageName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the apigateway resource.
	 */
	static isValidApigatewayArn(arn: string): boolean {
		return ApigatewayArnRegex.test(arn);
	}

	/**
	 * Parses a apigateway ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApigatewayArn(arn: string): Wafv2ApigatewayArnComponents {
		const match = ApigatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid apigateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			stageName: match.groups!.stageName,
		};
	}

	/**
	 * Builds an ARN for the apprunner resource.
	 */
	static apprunner(props: Wafv2ApprunnerArnProps): string {
		return `arn:${props.partition ?? "aws"}:apprunner:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceName}/${props.serviceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the apprunner resource.
	 */
	static isValidApprunnerArn(arn: string): boolean {
		return ApprunnerArnRegex.test(arn);
	}

	/**
	 * Parses a apprunner ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApprunnerArn(arn: string): Wafv2ApprunnerArnComponents {
		const match = ApprunnerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid apprunner ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceName: match.groups!.serviceName,
			serviceId: match.groups!.serviceId,
		};
	}

	/**
	 * Builds an ARN for the appsync resource.
	 */
	static appsync(props: Wafv2AppsyncArnProps): string {
		return `arn:${props.partition ?? "aws"}:appsync:${props.region ?? "*"}:${props.account ?? "*"}:apis/${props.graphQlapiId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the appsync resource.
	 */
	static isValidAppsyncArn(arn: string): boolean {
		return AppsyncArnRegex.test(arn);
	}

	/**
	 * Parses a appsync ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppsyncArn(arn: string): Wafv2AppsyncArnComponents {
		const match = AppsyncArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid appsync ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			graphQlapiId: match.groups!.graphQlapiId,
		};
	}

	/**
	 * Builds an ARN for the ipset resource.
	 */
	static ipset(props: Wafv2IpsetArnProps): string {
		return `arn:${props.partition ?? "aws"}:wafv2:${props.region ?? "*"}:${props.account ?? "*"}:${props.scope}/ipset/${props.name}/${props.id}`;
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
	static parseIpsetArn(arn: string): Wafv2IpsetArnComponents {
		const match = IpsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ipset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scope: match.groups!.scope,
			name: match.groups!.name,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the loadbalancer/app/ resource.
	 */
	static loadbalancerApp(props: Wafv2LoadbalancerAppArnProps): string {
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
	): Wafv2LoadbalancerAppArnComponents {
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
	 * Builds an ARN for the managedruleset resource.
	 */
	static managedruleset(props: Wafv2ManagedrulesetArnProps): string {
		return `arn:${props.partition ?? "aws"}:wafv2:${props.region ?? "*"}:${props.account ?? "*"}:${props.scope}/managedruleset/${props.name}/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the managedruleset resource.
	 */
	static isValidManagedrulesetArn(arn: string): boolean {
		return ManagedrulesetArnRegex.test(arn);
	}

	/**
	 * Parses a managedruleset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseManagedrulesetArn(arn: string): Wafv2ManagedrulesetArnComponents {
		const match = ManagedrulesetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid managedruleset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scope: match.groups!.scope,
			name: match.groups!.name,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the regexpatternset resource.
	 */
	static regexpatternset(props: Wafv2RegexpatternsetArnProps): string {
		return `arn:${props.partition ?? "aws"}:wafv2:${props.region ?? "*"}:${props.account ?? "*"}:${props.scope}/regexpatternset/${props.name}/${props.id}`;
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
	): Wafv2RegexpatternsetArnComponents {
		const match = RegexpatternsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid regexpatternset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scope: match.groups!.scope,
			name: match.groups!.name,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the rulegroup resource.
	 */
	static rulegroup(props: Wafv2RulegroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:wafv2:${props.region ?? "*"}:${props.account ?? "*"}:${props.scope}/rulegroup/${props.name}/${props.id}`;
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
	static parseRulegroupArn(arn: string): Wafv2RulegroupArnComponents {
		const match = RulegroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rulegroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scope: match.groups!.scope,
			name: match.groups!.name,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the userpool resource.
	 */
	static userpool(props: Wafv2UserpoolArnProps): string {
		return `arn:${props.partition ?? "aws"}:cognito-idp:${props.region ?? "*"}:${props.account ?? "*"}:userpool/${props.userPoolId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the userpool resource.
	 */
	static isValidUserpoolArn(arn: string): boolean {
		return UserpoolArnRegex.test(arn);
	}

	/**
	 * Parses a userpool ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserpoolArn(arn: string): Wafv2UserpoolArnComponents {
		const match = UserpoolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid userpool ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			userPoolId: match.groups!.userPoolId,
		};
	}

	/**
	 * Builds an ARN for the verified-access-instance resource.
	 */
	static verifiedAccessInstance(
		props: Wafv2VerifiedAccessInstanceArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:ec2:${props.region ?? "*"}:${props.account ?? "*"}:verified-access-instance/${props.verifiedAccessInstanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the verified-access-instance resource.
	 */
	static isValidVerifiedAccessInstanceArn(arn: string): boolean {
		return VerifiedAccessInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a verified-access-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVerifiedAccessInstanceArn(
		arn: string,
	): Wafv2VerifiedAccessInstanceArnComponents {
		const match = VerifiedAccessInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid verified-access-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			verifiedAccessInstanceId: match.groups!.verifiedAccessInstanceId,
		};
	}

	/**
	 * Builds an ARN for the webacl resource.
	 */
	static webacl(props: Wafv2WebaclArnProps): string {
		return `arn:${props.partition ?? "aws"}:wafv2:${props.region ?? "*"}:${props.account ?? "*"}:${props.scope}/webacl/${props.name}/${props.id}`;
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
	static parseWebaclArn(arn: string): Wafv2WebaclArnComponents {
		const match = WebaclArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid webacl ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scope: match.groups!.scope,
			name: match.groups!.name,
			id: match.groups!.id,
		};
	}
}

/**
 * API operation to required IAM actions mapping for wafv2.
 */
export class Wafv2Operations {
	/** IAM actions required for the AssociateWebACL API call. */
	static readonly AssociateWebACL: string[] = [
		"appsync:AssociateWebACL",
		"wafv2:AssociateWebACL",
		"elasticloadbalancing:CreateWebACLAssociation",
		"apigateway:SetWebACL",
		"appsync:SetWebACL",
		"elasticloadbalancing:SetWebAcl",
	];
	/** IAM actions required for the CheckCapacity API call. */
	static readonly CheckCapacity: string[] = ["wafv2:CheckCapacity"];
	/** IAM actions required for the CreateAPIKey API call. */
	static readonly CreateAPIKey: string[] = ["wafv2:CreateAPIKey"];
	/** IAM actions required for the CreateIPSet API call. */
	static readonly CreateIPSet: string[] = [
		"wafv2:CreateIPSet",
		"wafv2:TagResource",
	];
	/** IAM actions required for the CreateRegexPatternSet API call. */
	static readonly CreateRegexPatternSet: string[] = [
		"wafv2:CreateRegexPatternSet",
		"wafv2:TagResource",
	];
	/** IAM actions required for the CreateRuleGroup API call. */
	static readonly CreateRuleGroup: string[] = [
		"wafv2:CreateRuleGroup",
		"wafv2:TagResource",
	];
	/** IAM actions required for the CreateWebACL API call. */
	static readonly CreateWebACL: string[] = [
		"wafv2:CreateWebACL",
		"wafv2:TagResource",
	];
	/** IAM actions required for the DeleteAPIKey API call. */
	static readonly DeleteAPIKey: string[] = ["wafv2:DeleteAPIKey"];
	/** IAM actions required for the DeleteFirewallManagerRuleGroups API call. */
	static readonly DeleteFirewallManagerRuleGroups: string[] = [
		"wafv2:DeleteFirewallManagerRuleGroups",
	];
	/** IAM actions required for the DeleteIPSet API call. */
	static readonly DeleteIPSet: string[] = ["wafv2:DeleteIPSet"];
	/** IAM actions required for the DeleteLoggingConfiguration API call. */
	static readonly DeleteLoggingConfiguration: string[] = [
		"wafv2:DeleteLoggingConfiguration",
	];
	/** IAM actions required for the DeletePermissionPolicy API call. */
	static readonly DeletePermissionPolicy: string[] = [
		"wafv2:DeletePermissionPolicy",
	];
	/** IAM actions required for the DeleteRegexPatternSet API call. */
	static readonly DeleteRegexPatternSet: string[] = [
		"wafv2:DeleteRegexPatternSet",
	];
	/** IAM actions required for the DeleteRuleGroup API call. */
	static readonly DeleteRuleGroup: string[] = ["wafv2:DeleteRuleGroup"];
	/** IAM actions required for the DeleteWebACL API call. */
	static readonly DeleteWebACL: string[] = ["wafv2:DeleteWebACL"];
	/** IAM actions required for the DescribeAllManagedProducts API call. */
	static readonly DescribeAllManagedProducts: string[] = [
		"wafv2:DescribeAllManagedProducts",
	];
	/** IAM actions required for the DescribeManagedProductsByVendor API call. */
	static readonly DescribeManagedProductsByVendor: string[] = [
		"wafv2:DescribeManagedProductsByVendor",
	];
	/** IAM actions required for the DescribeManagedRuleGroup API call. */
	static readonly DescribeManagedRuleGroup: string[] = [
		"wafv2:DescribeManagedRuleGroup",
	];
	/** IAM actions required for the DisassociateWebACL API call. */
	static readonly DisassociateWebACL: string[] = [
		"elasticloadbalancing:DeleteWebACLAssociation",
		"appsync:DisassociateWebACL",
		"wafv2:DisassociateWebACL",
		"apigateway:SetWebACL",
		"appsync:SetWebACL",
		"elasticloadbalancing:SetWebAcl",
	];
	/** IAM actions required for the GenerateMobileSdkReleaseUrl API call. */
	static readonly GenerateMobileSdkReleaseUrl: string[] = [
		"wafv2:GenerateMobileSdkReleaseUrl",
	];
	/** IAM actions required for the GetDecryptedAPIKey API call. */
	static readonly opGetDecryptedAPIKey: string[] = ["wafv2:GetDecryptedAPIKey"];
	/** IAM actions required for the GetIPSet API call. */
	static readonly opGetIPSet: string[] = ["wafv2:GetIPSet"];
	/** IAM actions required for the GetLoggingConfiguration API call. */
	static readonly opGetLoggingConfiguration: string[] = [
		"wafv2:GetLoggingConfiguration",
	];
	/** IAM actions required for the GetManagedRuleSet API call. */
	static readonly opGetManagedRuleSet: string[] = ["wafv2:GetManagedRuleSet"];
	/** IAM actions required for the GetMobileSdkRelease API call. */
	static readonly opGetMobileSdkRelease: string[] = [
		"wafv2:GetMobileSdkRelease",
	];
	/** IAM actions required for the GetPermissionPolicy API call. */
	static readonly opGetPermissionPolicy: string[] = [
		"wafv2:GetPermissionPolicy",
	];
	/** IAM actions required for the GetRateBasedStatementManagedKeys API call. */
	static readonly opGetRateBasedStatementManagedKeys: string[] = [
		"wafv2:GetRateBasedStatementManagedKeys",
	];
	/** IAM actions required for the GetRegexPatternSet API call. */
	static readonly opGetRegexPatternSet: string[] = ["wafv2:GetRegexPatternSet"];
	/** IAM actions required for the GetRevenueStatistics API call. */
	static readonly opGetRevenueStatistics: string[] = [
		"wafv2:GetRevenueStatistics",
	];
	/** IAM actions required for the GetRevenueStatisticsSummary API call. */
	static readonly opGetRevenueStatisticsSummary: string[] = [
		"wafv2:GetRevenueStatisticsSummary",
	];
	/** IAM actions required for the GetRevenueStatisticsTimeSeries API call. */
	static readonly opGetRevenueStatisticsTimeSeries: string[] = [
		"wafv2:GetRevenueStatisticsTimeSeries",
	];
	/** IAM actions required for the GetRuleGroup API call. */
	static readonly opGetRuleGroup: string[] = ["wafv2:GetRuleGroup"];
	/** IAM actions required for the GetSampledRequests API call. */
	static readonly opGetSampledRequests: string[] = ["wafv2:GetSampledRequests"];
	/** IAM actions required for the GetTopPathStatisticsByTraffic API call. */
	static readonly opGetTopPathStatisticsByTraffic: string[] = [
		"wafv2:GetTopPathStatisticsByTraffic",
	];
	/** IAM actions required for the GetWebACL API call. */
	static readonly opGetWebACL: string[] = ["wafv2:GetWebACL"];
	/** IAM actions required for the GetWebACLForResource API call. */
	static readonly opGetWebACLForResource: string[] = [
		"elasticloadbalancing:GetLoadBalancerWebACL",
		"appsync:GetWebACLForResource",
		"wafv2:GetWebACLForResource",
	];
	/** IAM actions required for the ListAPIKeys API call. */
	static readonly ListAPIKeys: string[] = ["wafv2:ListAPIKeys"];
	/** IAM actions required for the ListAvailableManagedRuleGroupVersions API call. */
	static readonly ListAvailableManagedRuleGroupVersions: string[] = [
		"wafv2:ListAvailableManagedRuleGroupVersions",
	];
	/** IAM actions required for the ListAvailableManagedRuleGroups API call. */
	static readonly ListAvailableManagedRuleGroups: string[] = [
		"wafv2:ListAvailableManagedRuleGroups",
	];
	/** IAM actions required for the ListIPSets API call. */
	static readonly ListIPSets: string[] = ["wafv2:ListIPSets"];
	/** IAM actions required for the ListLoggingConfigurations API call. */
	static readonly ListLoggingConfigurations: string[] = [
		"wafv2:ListLoggingConfigurations",
	];
	/** IAM actions required for the ListManagedRuleSets API call. */
	static readonly ListManagedRuleSets: string[] = ["wafv2:ListManagedRuleSets"];
	/** IAM actions required for the ListMobileSdkReleases API call. */
	static readonly ListMobileSdkReleases: string[] = [
		"wafv2:ListMobileSdkReleases",
	];
	/** IAM actions required for the ListRegexPatternSets API call. */
	static readonly ListRegexPatternSets: string[] = [
		"wafv2:ListRegexPatternSets",
	];
	/** IAM actions required for the ListResourcesForWebACL API call. */
	static readonly ListResourcesForWebACL: string[] = [
		"elasticloadbalancing:DescribeWebACLAssociation",
		"appsync:ListResourcesForWebACL",
		"wafv2:ListResourcesForWebACL",
	];
	/** IAM actions required for the ListRuleGroups API call. */
	static readonly ListRuleGroups: string[] = ["wafv2:ListRuleGroups"];
	/** IAM actions required for the ListSettlementRecords API call. */
	static readonly ListSettlementRecords: string[] = [
		"wafv2:ListSettlementRecords",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["wafv2:ListTagsForResource"];
	/** IAM actions required for the ListWebACLs API call. */
	static readonly ListWebACLs: string[] = ["wafv2:ListWebACLs"];
	/** IAM actions required for the PutLoggingConfiguration API call. */
	static readonly PutLoggingConfiguration: string[] = [
		"wafv2:PutLoggingConfiguration",
	];
	/** IAM actions required for the PutManagedRuleSetVersions API call. */
	static readonly PutManagedRuleSetVersions: string[] = [
		"wafv2:PutManagedRuleSetVersions",
	];
	/** IAM actions required for the PutPermissionPolicy API call. */
	static readonly PutPermissionPolicy: string[] = ["wafv2:PutPermissionPolicy"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["wafv2:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["wafv2:UntagResource"];
	/** IAM actions required for the UpdateIPSet API call. */
	static readonly UpdateIPSet: string[] = ["wafv2:UpdateIPSet"];
	/** IAM actions required for the UpdateManagedRuleSetVersionExpiryDate API call. */
	static readonly UpdateManagedRuleSetVersionExpiryDate: string[] = [
		"wafv2:UpdateManagedRuleSetVersionExpiryDate",
	];
	/** IAM actions required for the UpdateRegexPatternSet API call. */
	static readonly UpdateRegexPatternSet: string[] = [
		"wafv2:UpdateRegexPatternSet",
	];
	/** IAM actions required for the UpdateRuleGroup API call. */
	static readonly UpdateRuleGroup: string[] = ["wafv2:UpdateRuleGroup"];
	/** IAM actions required for the UpdateWebACL API call. */
	static readonly UpdateWebACL: string[] = ["wafv2:UpdateWebACL"];
}

/**
 * Condition key constants and builders for wafv2.
 */
export class Wafv2Conditions {
	/** Condition keys applicable to the CreateIPSet action. */
	static readonly CreateIPSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRegexPatternSet action. */
	static readonly CreateRegexPatternSetConditionKeys: string[] = [
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
	/** Condition keys applicable to the DeleteLoggingConfiguration action. */
	static readonly DeleteLoggingConfigurationConditionKeys: string[] = [
		"wafv2:LogScope",
	];
	/** Condition keys applicable to the GetIPSet action. */
	static readonly actionGetIPSetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLoggingConfiguration action. */
	static readonly actionGetLoggingConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"wafv2:LogScope",
	];
	/** Condition keys applicable to the GetRateBasedStatementManagedKeys action. */
	static readonly actionGetRateBasedStatementManagedKeysConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetRegexPatternSet action. */
	static readonly actionGetRegexPatternSetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetRuleGroup action. */
	static readonly actionGetRuleGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetWebACL action. */
	static readonly actionGetWebACLConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListLoggingConfigurations action. */
	static readonly ListLoggingConfigurationsConditionKeys: string[] = [
		"wafv2:LogScope",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutLoggingConfiguration action. */
	static readonly PutLoggingConfigurationConditionKeys: string[] = [
		"wafv2:LogDestinationResource",
		"wafv2:LogScope",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateIPSet action. */
	static readonly UpdateIPSetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateRegexPatternSet action. */
	static readonly UpdateRegexPatternSetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateRuleGroup action. */
	static readonly UpdateRuleGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateWebACL action. */
	static readonly UpdateWebACLConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: wafv2:LogDestinationResource (ARN) */
	static readonly LOG_DESTINATION_RESOURCE = "wafv2:LogDestinationResource";
	/** Condition key: wafv2:LogScope (String) */
	static readonly LOG_SCOPE = "wafv2:LogScope";

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
	 * Generates a condition block for `wafv2:LogDestinationResource`.
	 */
	static logDestinationResource(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "wafv2:LogDestinationResource": value } };
	}

	/**
	 * Generates a condition block for `wafv2:LogScope`.
	 */
	static logScope(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "wafv2:LogScope": value } };
	}
}
