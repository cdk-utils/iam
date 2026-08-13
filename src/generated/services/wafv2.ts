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
	static readonly ASSOCIATE_WEB_ACL = "wafv2:AssociateWebACL";
	/** [Read] wafv2:CheckCapacity */
	static readonly CHECK_CAPACITY = "wafv2:CheckCapacity";
	/** [Write] wafv2:CreateAPIKey */
	static readonly CREATE_API_KEY = "wafv2:CreateAPIKey";
	/** [Write] wafv2:CreateIPSet */
	static readonly CREATE_IP_SET = "wafv2:CreateIPSet";
	/** [Write] wafv2:CreateRegexPatternSet */
	static readonly CREATE_REGEX_PATTERN_SET = "wafv2:CreateRegexPatternSet";
	/** [Write] wafv2:CreateRuleGroup */
	static readonly CREATE_RULE_GROUP = "wafv2:CreateRuleGroup";
	/** [Write] wafv2:CreateWebACL */
	static readonly CREATE_WEB_ACL = "wafv2:CreateWebACL";
	/** [Write] wafv2:DeleteAPIKey */
	static readonly DELETE_API_KEY = "wafv2:DeleteAPIKey";
	/** [Write] wafv2:DeleteFirewallManagerRuleGroups */
	static readonly DELETE_FIREWALL_MANAGER_RULE_GROUPS = "wafv2:DeleteFirewallManagerRuleGroups";
	/** [Write] wafv2:DeleteIPSet */
	static readonly DELETE_IP_SET = "wafv2:DeleteIPSet";
	/** [Write] wafv2:DeleteLoggingConfiguration */
	static readonly DELETE_LOGGING_CONFIGURATION = "wafv2:DeleteLoggingConfiguration";
	/** [PermissionManagement] wafv2:DeletePermissionPolicy */
	static readonly DELETE_PERMISSION_POLICY = "wafv2:DeletePermissionPolicy";
	/** [Write] wafv2:DeleteRegexPatternSet */
	static readonly DELETE_REGEX_PATTERN_SET = "wafv2:DeleteRegexPatternSet";
	/** [Write] wafv2:DeleteRuleGroup */
	static readonly DELETE_RULE_GROUP = "wafv2:DeleteRuleGroup";
	/** [Write] wafv2:DeleteWebACL */
	static readonly DELETE_WEB_ACL = "wafv2:DeleteWebACL";
	/** [Read] wafv2:DescribeAllManagedProducts */
	static readonly DESCRIBE_ALL_MANAGED_PRODUCTS = "wafv2:DescribeAllManagedProducts";
	/** [Read] wafv2:DescribeManagedProductsByVendor */
	static readonly DESCRIBE_MANAGED_PRODUCTS_BY_VENDOR = "wafv2:DescribeManagedProductsByVendor";
	/** [Read] wafv2:DescribeManagedRuleGroup */
	static readonly DESCRIBE_MANAGED_RULE_GROUP = "wafv2:DescribeManagedRuleGroup";
	/** [Write] wafv2:DisassociateFirewallManager */
	static readonly DISASSOCIATE_FIREWALL_MANAGER = "wafv2:DisassociateFirewallManager";
	/** [Write] wafv2:DisassociateWebACL */
	static readonly DISASSOCIATE_WEB_ACL = "wafv2:DisassociateWebACL";
	/** [Read] wafv2:GenerateMobileSdkReleaseUrl */
	static readonly GENERATE_MOBILE_SDK_RELEASE_URL = "wafv2:GenerateMobileSdkReleaseUrl";
	/** [Read] wafv2:GetDecryptedAPIKey */
	static readonly GET_DECRYPTED_API_KEY = "wafv2:GetDecryptedAPIKey";
	/** [Read] wafv2:GetIPSet */
	static readonly GET_IP_SET = "wafv2:GetIPSet";
	/** [Read] wafv2:GetLoggingConfiguration */
	static readonly GET_LOGGING_CONFIGURATION = "wafv2:GetLoggingConfiguration";
	/** [Read] wafv2:GetManagedRuleSet */
	static readonly GET_MANAGED_RULE_SET = "wafv2:GetManagedRuleSet";
	/** [Read] wafv2:GetMobileSdkRelease */
	static readonly GET_MOBILE_SDK_RELEASE = "wafv2:GetMobileSdkRelease";
	/** [Read] wafv2:GetPermissionPolicy */
	static readonly GET_PERMISSION_POLICY = "wafv2:GetPermissionPolicy";
	/** [Read] wafv2:GetRateBasedStatementManagedKeys */
	static readonly GET_RATE_BASED_STATEMENT_MANAGED_KEYS = "wafv2:GetRateBasedStatementManagedKeys";
	/** [Read] wafv2:GetRegexPatternSet */
	static readonly GET_REGEX_PATTERN_SET = "wafv2:GetRegexPatternSet";
	/** [Read] wafv2:GetRevenueStatistics */
	static readonly GET_REVENUE_STATISTICS = "wafv2:GetRevenueStatistics";
	/** [Read] wafv2:GetRevenueStatisticsSummary */
	static readonly GET_REVENUE_STATISTICS_SUMMARY = "wafv2:GetRevenueStatisticsSummary";
	/** [Read] wafv2:GetRevenueStatisticsTimeSeries */
	static readonly GET_REVENUE_STATISTICS_TIME_SERIES = "wafv2:GetRevenueStatisticsTimeSeries";
	/** [Read] wafv2:GetRuleGroup */
	static readonly GET_RULE_GROUP = "wafv2:GetRuleGroup";
	/** [Read] wafv2:GetSampledRequests */
	static readonly GET_SAMPLED_REQUESTS = "wafv2:GetSampledRequests";
	/** [Read] wafv2:GetTopPathStatisticsByTraffic */
	static readonly GET_TOP_PATH_STATISTICS_BY_TRAFFIC = "wafv2:GetTopPathStatisticsByTraffic";
	/** [Read] wafv2:GetWebACL */
	static readonly GET_WEB_ACL = "wafv2:GetWebACL";
	/** [Read] wafv2:GetWebACLForResource */
	static readonly GET_WEB_ACL_FOR_RESOURCE = "wafv2:GetWebACLForResource";
	/** [List] wafv2:ListAPIKeys */
	static readonly LIST_API_KEYS = "wafv2:ListAPIKeys";
	/** [List] wafv2:ListAvailableManagedRuleGroupVersions */
	static readonly LIST_AVAILABLE_MANAGED_RULE_GROUP_VERSIONS = "wafv2:ListAvailableManagedRuleGroupVersions";
	/** [List] wafv2:ListAvailableManagedRuleGroups */
	static readonly LIST_AVAILABLE_MANAGED_RULE_GROUPS = "wafv2:ListAvailableManagedRuleGroups";
	/** [List] wafv2:ListIPSets */
	static readonly LIST_IP_SETS = "wafv2:ListIPSets";
	/** [List] wafv2:ListLoggingConfigurations */
	static readonly LIST_LOGGING_CONFIGURATIONS = "wafv2:ListLoggingConfigurations";
	/** [List] wafv2:ListManagedRuleSets */
	static readonly LIST_MANAGED_RULE_SETS = "wafv2:ListManagedRuleSets";
	/** [List] wafv2:ListMobileSdkReleases */
	static readonly LIST_MOBILE_SDK_RELEASES = "wafv2:ListMobileSdkReleases";
	/** [List] wafv2:ListRegexPatternSets */
	static readonly LIST_REGEX_PATTERN_SETS = "wafv2:ListRegexPatternSets";
	/** [List] wafv2:ListResourcesForWebACL */
	static readonly LIST_RESOURCES_FOR_WEB_ACL = "wafv2:ListResourcesForWebACL";
	/** [List] wafv2:ListRuleGroups */
	static readonly LIST_RULE_GROUPS = "wafv2:ListRuleGroups";
	/** [List] wafv2:ListSettlementRecords */
	static readonly LIST_SETTLEMENT_RECORDS = "wafv2:ListSettlementRecords";
	/** [Read] wafv2:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "wafv2:ListTagsForResource";
	/** [List] wafv2:ListWebACLs */
	static readonly LIST_WEB_AC_LS = "wafv2:ListWebACLs";
	/** [Write] wafv2:PutFirewallManagerRuleGroups */
	static readonly PUT_FIREWALL_MANAGER_RULE_GROUPS = "wafv2:PutFirewallManagerRuleGroups";
	/** [Write] wafv2:PutLoggingConfiguration */
	static readonly PUT_LOGGING_CONFIGURATION = "wafv2:PutLoggingConfiguration";
	/** [Write] wafv2:PutManagedRuleSetVersions */
	static readonly PUT_MANAGED_RULE_SET_VERSIONS = "wafv2:PutManagedRuleSetVersions";
	/** [PermissionManagement] wafv2:PutPermissionPolicy */
	static readonly PUT_PERMISSION_POLICY = "wafv2:PutPermissionPolicy";
	/** [Tagging] wafv2:TagResource */
	static readonly TAG_RESOURCE = "wafv2:TagResource";
	/** [Tagging] wafv2:UntagResource */
	static readonly UNTAG_RESOURCE = "wafv2:UntagResource";
	/** [Write] wafv2:UpdateIPSet */
	static readonly UPDATE_IP_SET = "wafv2:UpdateIPSet";
	/** [Write] wafv2:UpdateManagedRuleSetVersionExpiryDate */
	static readonly UPDATE_MANAGED_RULE_SET_VERSION_EXPIRY_DATE = "wafv2:UpdateManagedRuleSetVersionExpiryDate";
	/** [Write] wafv2:UpdateRegexPatternSet */
	static readonly UPDATE_REGEX_PATTERN_SET = "wafv2:UpdateRegexPatternSet";
	/** [Write] wafv2:UpdateRuleGroup */
	static readonly UPDATE_RULE_GROUP = "wafv2:UpdateRuleGroup";
	/** [Write] wafv2:UpdateWebACL */
	static readonly UPDATE_WEB_ACL = "wafv2:UpdateWebACL";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [Wafv2Actions.CHECK_CAPACITY, Wafv2Actions.DESCRIBE_ALL_MANAGED_PRODUCTS, Wafv2Actions.DESCRIBE_MANAGED_PRODUCTS_BY_VENDOR, Wafv2Actions.DESCRIBE_MANAGED_RULE_GROUP, Wafv2Actions.GENERATE_MOBILE_SDK_RELEASE_URL, Wafv2Actions.GET_DECRYPTED_API_KEY, Wafv2Actions.GET_IP_SET, Wafv2Actions.GET_LOGGING_CONFIGURATION, Wafv2Actions.GET_MANAGED_RULE_SET, Wafv2Actions.GET_MOBILE_SDK_RELEASE, Wafv2Actions.GET_PERMISSION_POLICY, Wafv2Actions.GET_RATE_BASED_STATEMENT_MANAGED_KEYS, Wafv2Actions.GET_REGEX_PATTERN_SET, Wafv2Actions.GET_REVENUE_STATISTICS, Wafv2Actions.GET_REVENUE_STATISTICS_SUMMARY, Wafv2Actions.GET_REVENUE_STATISTICS_TIME_SERIES, Wafv2Actions.GET_RULE_GROUP, Wafv2Actions.GET_SAMPLED_REQUESTS, Wafv2Actions.GET_TOP_PATH_STATISTICS_BY_TRAFFIC, Wafv2Actions.GET_WEB_ACL, Wafv2Actions.GET_WEB_ACL_FOR_RESOURCE, Wafv2Actions.LIST_TAGS_FOR_RESOURCE];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [Wafv2Actions.ASSOCIATE_WEB_ACL, Wafv2Actions.CREATE_API_KEY, Wafv2Actions.CREATE_IP_SET, Wafv2Actions.CREATE_REGEX_PATTERN_SET, Wafv2Actions.CREATE_RULE_GROUP, Wafv2Actions.CREATE_WEB_ACL, Wafv2Actions.DELETE_API_KEY, Wafv2Actions.DELETE_FIREWALL_MANAGER_RULE_GROUPS, Wafv2Actions.DELETE_IP_SET, Wafv2Actions.DELETE_LOGGING_CONFIGURATION, Wafv2Actions.DELETE_REGEX_PATTERN_SET, Wafv2Actions.DELETE_RULE_GROUP, Wafv2Actions.DELETE_WEB_ACL, Wafv2Actions.DISASSOCIATE_FIREWALL_MANAGER, Wafv2Actions.DISASSOCIATE_WEB_ACL, Wafv2Actions.PUT_FIREWALL_MANAGER_RULE_GROUPS, Wafv2Actions.PUT_LOGGING_CONFIGURATION, Wafv2Actions.PUT_MANAGED_RULE_SET_VERSIONS, Wafv2Actions.UPDATE_IP_SET, Wafv2Actions.UPDATE_MANAGED_RULE_SET_VERSION_EXPIRY_DATE, Wafv2Actions.UPDATE_REGEX_PATTERN_SET, Wafv2Actions.UPDATE_RULE_GROUP, Wafv2Actions.UPDATE_WEB_ACL];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [Wafv2Actions.LIST_API_KEYS, Wafv2Actions.LIST_AVAILABLE_MANAGED_RULE_GROUP_VERSIONS, Wafv2Actions.LIST_AVAILABLE_MANAGED_RULE_GROUPS, Wafv2Actions.LIST_IP_SETS, Wafv2Actions.LIST_LOGGING_CONFIGURATIONS, Wafv2Actions.LIST_MANAGED_RULE_SETS, Wafv2Actions.LIST_MOBILE_SDK_RELEASES, Wafv2Actions.LIST_REGEX_PATTERN_SETS, Wafv2Actions.LIST_RESOURCES_FOR_WEB_ACL, Wafv2Actions.LIST_RULE_GROUPS, Wafv2Actions.LIST_SETTLEMENT_RECORDS, Wafv2Actions.LIST_WEB_AC_LS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [Wafv2Actions.DELETE_PERMISSION_POLICY, Wafv2Actions.PUT_PERMISSION_POLICY];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [Wafv2Actions.TAG_RESOURCE, Wafv2Actions.UNTAG_RESOURCE];
}

const AgentcoreGatewayArnRegex = new RegExp("^arn:(?<partition>[^:]+):bedrock-agentcore:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)$");
const AmplifyAppArnRegex = new RegExp("^arn:(?<partition>[^:]+):amplify:(?<region>[^:]*):(?<account>[^:]*):apps/(?<appId>[^:/?]+)$");
const ApigatewayArnRegex = new RegExp("^arn:(?<partition>[^:]+):apigateway:(?<region>[^:]*)::/restapis/(?<apiId>[^:/?]+)/stages/(?<stageName>[^:/?]+)$");
const ApprunnerArnRegex = new RegExp("^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):service/(?<serviceName>[^:/?]+)/(?<serviceId>[^:/?]+)$");
const AppsyncArnRegex = new RegExp("^arn:(?<partition>[^:]+):appsync:(?<region>[^:]*):(?<account>[^:]*):apis/(?<graphQlapiId>[^:/?]+)$");
const IpsetArnRegex = new RegExp("^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)/ipset/(?<name>[^:/?]+)/(?<id>[^:/?]+)$");
const Loadbalancer/app/ArnRegex = new RegExp("^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):loadbalancer/app/(?<loadBalancerName>[^:/?]+)/(?<loadBalancerId>[^:/?]+)$");
const ManagedrulesetArnRegex = new RegExp("^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)/managedruleset/(?<name>[^:/?]+)/(?<id>[^:/?]+)$");
const RegexpatternsetArnRegex = new RegExp("^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)/regexpatternset/(?<name>[^:/?]+)/(?<id>[^:/?]+)$");
const RulegroupArnRegex = new RegExp("^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)/rulegroup/(?<name>[^:/?]+)/(?<id>[^:/?]+)$");
const UserpoolArnRegex = new RegExp("^arn:(?<partition>[^:]+):cognito-idp:(?<region>[^:]*):(?<account>[^:]*):userpool/(?<userPoolId>[^:/?]+)$");
const VerifiedAccessInstanceArnRegex = new RegExp("^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):verified-access-instance/(?<verifiedAccessInstanceId>[^:/?]+)$");
const WebaclArnRegex = new RegExp("^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)/webacl/(?<name>[^:/?]+)/(?<id>[^:/?]+)$");

/**
 * ARN builders, validators, and parsers for wafv2 resources.
 */
export class Wafv2Resources {
	/**
	 * Builds an ARN for the agentcore-gateway resource.
	 */
	static agentcoreGateway(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAgentcoreGatewayArn(arn: string): { partition: string; region: string; account: string; gatewayId: string } {
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
	static amplifyApp(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAmplifyAppArn(arn: string): { partition: string; region: string; account: string; appId: string } {
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
	static apigateway(props: {
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
	}): string {
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
	static parseApigatewayArn(arn: string): { partition: string; region: string; account: string; apiId: string; stageName: string } {
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
	static apprunner(props: {
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
	}): string {
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
	static parseApprunnerArn(arn: string): { partition: string; region: string; account: string; serviceName: string; serviceId: string } {
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
	static appsync(props: {
		/** The GraphQLAPIId component of the ARN. */
		readonly graphQlapiId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAppsyncArn(arn: string): { partition: string; region: string; account: string; graphQlapiId: string } {
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
	static ipset(props: {
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
	}): string {
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
	static parseIpsetArn(arn: string): { partition: string; region: string; account: string; scope: string; name: string; id: string } {
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
	 * Builds an ARN for the managedruleset resource.
	 */
	static managedruleset(props: {
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
	}): string {
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
	static parseManagedrulesetArn(arn: string): { partition: string; region: string; account: string; scope: string; name: string; id: string } {
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
	static regexpatternset(props: {
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
	}): string {
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
	static parseRegexpatternsetArn(arn: string): { partition: string; region: string; account: string; scope: string; name: string; id: string } {
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
	static rulegroup(props: {
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
	}): string {
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
	static parseRulegroupArn(arn: string): { partition: string; region: string; account: string; scope: string; name: string; id: string } {
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
	static userpool(props: {
		/** The UserPoolId component of the ARN. */
		readonly userPoolId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseUserpoolArn(arn: string): { partition: string; region: string; account: string; userPoolId: string } {
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
	static verifiedAccessInstance(props: {
		/** The VerifiedAccessInstanceId component of the ARN. */
		readonly verifiedAccessInstanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseVerifiedAccessInstanceArn(arn: string): { partition: string; region: string; account: string; verifiedAccessInstanceId: string } {
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
	static webacl(props: {
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
	}): string {
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
	static parseWebaclArn(arn: string): { partition: string; region: string; account: string; scope: string; name: string; id: string } {
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
	static readonly ASSOCIATE_WEB_ACL: string[] = ["appsync:AssociateWebACL", "wafv2:AssociateWebACL", "elasticloadbalancing:CreateWebACLAssociation", "apigateway:SetWebACL", "appsync:SetWebACL", "elasticloadbalancing:SetWebAcl"];
	/** IAM actions required for the CheckCapacity API call. */
	static readonly CHECK_CAPACITY: string[] = ["wafv2:CheckCapacity"];
	/** IAM actions required for the CreateAPIKey API call. */
	static readonly CREATE_API_KEY: string[] = ["wafv2:CreateAPIKey"];
	/** IAM actions required for the CreateIPSet API call. */
	static readonly CREATE_IP_SET: string[] = ["wafv2:CreateIPSet", "wafv2:TagResource"];
	/** IAM actions required for the CreateRegexPatternSet API call. */
	static readonly CREATE_REGEX_PATTERN_SET: string[] = ["wafv2:CreateRegexPatternSet", "wafv2:TagResource"];
	/** IAM actions required for the CreateRuleGroup API call. */
	static readonly CREATE_RULE_GROUP: string[] = ["wafv2:CreateRuleGroup", "wafv2:TagResource"];
	/** IAM actions required for the CreateWebACL API call. */
	static readonly CREATE_WEB_ACL: string[] = ["wafv2:CreateWebACL", "wafv2:TagResource"];
	/** IAM actions required for the DeleteAPIKey API call. */
	static readonly DELETE_API_KEY: string[] = ["wafv2:DeleteAPIKey"];
	/** IAM actions required for the DeleteFirewallManagerRuleGroups API call. */
	static readonly DELETE_FIREWALL_MANAGER_RULE_GROUPS: string[] = ["wafv2:DeleteFirewallManagerRuleGroups"];
	/** IAM actions required for the DeleteIPSet API call. */
	static readonly DELETE_IP_SET: string[] = ["wafv2:DeleteIPSet"];
	/** IAM actions required for the DeleteLoggingConfiguration API call. */
	static readonly DELETE_LOGGING_CONFIGURATION: string[] = ["wafv2:DeleteLoggingConfiguration"];
	/** IAM actions required for the DeletePermissionPolicy API call. */
	static readonly DELETE_PERMISSION_POLICY: string[] = ["wafv2:DeletePermissionPolicy"];
	/** IAM actions required for the DeleteRegexPatternSet API call. */
	static readonly DELETE_REGEX_PATTERN_SET: string[] = ["wafv2:DeleteRegexPatternSet"];
	/** IAM actions required for the DeleteRuleGroup API call. */
	static readonly DELETE_RULE_GROUP: string[] = ["wafv2:DeleteRuleGroup"];
	/** IAM actions required for the DeleteWebACL API call. */
	static readonly DELETE_WEB_ACL: string[] = ["wafv2:DeleteWebACL"];
	/** IAM actions required for the DescribeAllManagedProducts API call. */
	static readonly DESCRIBE_ALL_MANAGED_PRODUCTS: string[] = ["wafv2:DescribeAllManagedProducts"];
	/** IAM actions required for the DescribeManagedProductsByVendor API call. */
	static readonly DESCRIBE_MANAGED_PRODUCTS_BY_VENDOR: string[] = ["wafv2:DescribeManagedProductsByVendor"];
	/** IAM actions required for the DescribeManagedRuleGroup API call. */
	static readonly DESCRIBE_MANAGED_RULE_GROUP: string[] = ["wafv2:DescribeManagedRuleGroup"];
	/** IAM actions required for the DisassociateWebACL API call. */
	static readonly DISASSOCIATE_WEB_ACL: string[] = ["elasticloadbalancing:DeleteWebACLAssociation", "appsync:DisassociateWebACL", "wafv2:DisassociateWebACL", "apigateway:SetWebACL", "appsync:SetWebACL", "elasticloadbalancing:SetWebAcl"];
	/** IAM actions required for the GenerateMobileSdkReleaseUrl API call. */
	static readonly GENERATE_MOBILE_SDK_RELEASE_URL: string[] = ["wafv2:GenerateMobileSdkReleaseUrl"];
	/** IAM actions required for the GetDecryptedAPIKey API call. */
	static readonly GET_DECRYPTED_API_KEY: string[] = ["wafv2:GetDecryptedAPIKey"];
	/** IAM actions required for the GetIPSet API call. */
	static readonly GET_IP_SET: string[] = ["wafv2:GetIPSet"];
	/** IAM actions required for the GetLoggingConfiguration API call. */
	static readonly GET_LOGGING_CONFIGURATION: string[] = ["wafv2:GetLoggingConfiguration"];
	/** IAM actions required for the GetManagedRuleSet API call. */
	static readonly GET_MANAGED_RULE_SET: string[] = ["wafv2:GetManagedRuleSet"];
	/** IAM actions required for the GetMobileSdkRelease API call. */
	static readonly GET_MOBILE_SDK_RELEASE: string[] = ["wafv2:GetMobileSdkRelease"];
	/** IAM actions required for the GetPermissionPolicy API call. */
	static readonly GET_PERMISSION_POLICY: string[] = ["wafv2:GetPermissionPolicy"];
	/** IAM actions required for the GetRateBasedStatementManagedKeys API call. */
	static readonly GET_RATE_BASED_STATEMENT_MANAGED_KEYS: string[] = ["wafv2:GetRateBasedStatementManagedKeys"];
	/** IAM actions required for the GetRegexPatternSet API call. */
	static readonly GET_REGEX_PATTERN_SET: string[] = ["wafv2:GetRegexPatternSet"];
	/** IAM actions required for the GetRevenueStatistics API call. */
	static readonly GET_REVENUE_STATISTICS: string[] = ["wafv2:GetRevenueStatistics"];
	/** IAM actions required for the GetRevenueStatisticsSummary API call. */
	static readonly GET_REVENUE_STATISTICS_SUMMARY: string[] = ["wafv2:GetRevenueStatisticsSummary"];
	/** IAM actions required for the GetRevenueStatisticsTimeSeries API call. */
	static readonly GET_REVENUE_STATISTICS_TIME_SERIES: string[] = ["wafv2:GetRevenueStatisticsTimeSeries"];
	/** IAM actions required for the GetRuleGroup API call. */
	static readonly GET_RULE_GROUP: string[] = ["wafv2:GetRuleGroup"];
	/** IAM actions required for the GetSampledRequests API call. */
	static readonly GET_SAMPLED_REQUESTS: string[] = ["wafv2:GetSampledRequests"];
	/** IAM actions required for the GetTopPathStatisticsByTraffic API call. */
	static readonly GET_TOP_PATH_STATISTICS_BY_TRAFFIC: string[] = ["wafv2:GetTopPathStatisticsByTraffic"];
	/** IAM actions required for the GetWebACL API call. */
	static readonly GET_WEB_ACL: string[] = ["wafv2:GetWebACL"];
	/** IAM actions required for the GetWebACLForResource API call. */
	static readonly GET_WEB_ACL_FOR_RESOURCE: string[] = ["elasticloadbalancing:GetLoadBalancerWebACL", "appsync:GetWebACLForResource", "wafv2:GetWebACLForResource"];
	/** IAM actions required for the ListAPIKeys API call. */
	static readonly LIST_API_KEYS: string[] = ["wafv2:ListAPIKeys"];
	/** IAM actions required for the ListAvailableManagedRuleGroupVersions API call. */
	static readonly LIST_AVAILABLE_MANAGED_RULE_GROUP_VERSIONS: string[] = ["wafv2:ListAvailableManagedRuleGroupVersions"];
	/** IAM actions required for the ListAvailableManagedRuleGroups API call. */
	static readonly LIST_AVAILABLE_MANAGED_RULE_GROUPS: string[] = ["wafv2:ListAvailableManagedRuleGroups"];
	/** IAM actions required for the ListIPSets API call. */
	static readonly LIST_IP_SETS: string[] = ["wafv2:ListIPSets"];
	/** IAM actions required for the ListLoggingConfigurations API call. */
	static readonly LIST_LOGGING_CONFIGURATIONS: string[] = ["wafv2:ListLoggingConfigurations"];
	/** IAM actions required for the ListManagedRuleSets API call. */
	static readonly LIST_MANAGED_RULE_SETS: string[] = ["wafv2:ListManagedRuleSets"];
	/** IAM actions required for the ListMobileSdkReleases API call. */
	static readonly LIST_MOBILE_SDK_RELEASES: string[] = ["wafv2:ListMobileSdkReleases"];
	/** IAM actions required for the ListRegexPatternSets API call. */
	static readonly LIST_REGEX_PATTERN_SETS: string[] = ["wafv2:ListRegexPatternSets"];
	/** IAM actions required for the ListResourcesForWebACL API call. */
	static readonly LIST_RESOURCES_FOR_WEB_ACL: string[] = ["elasticloadbalancing:DescribeWebACLAssociation", "appsync:ListResourcesForWebACL", "wafv2:ListResourcesForWebACL"];
	/** IAM actions required for the ListRuleGroups API call. */
	static readonly LIST_RULE_GROUPS: string[] = ["wafv2:ListRuleGroups"];
	/** IAM actions required for the ListSettlementRecords API call. */
	static readonly LIST_SETTLEMENT_RECORDS: string[] = ["wafv2:ListSettlementRecords"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = ["wafv2:ListTagsForResource"];
	/** IAM actions required for the ListWebACLs API call. */
	static readonly LIST_WEB_AC_LS: string[] = ["wafv2:ListWebACLs"];
	/** IAM actions required for the PutLoggingConfiguration API call. */
	static readonly PUT_LOGGING_CONFIGURATION: string[] = ["wafv2:PutLoggingConfiguration"];
	/** IAM actions required for the PutManagedRuleSetVersions API call. */
	static readonly PUT_MANAGED_RULE_SET_VERSIONS: string[] = ["wafv2:PutManagedRuleSetVersions"];
	/** IAM actions required for the PutPermissionPolicy API call. */
	static readonly PUT_PERMISSION_POLICY: string[] = ["wafv2:PutPermissionPolicy"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["wafv2:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["wafv2:UntagResource"];
	/** IAM actions required for the UpdateIPSet API call. */
	static readonly UPDATE_IP_SET: string[] = ["wafv2:UpdateIPSet"];
	/** IAM actions required for the UpdateManagedRuleSetVersionExpiryDate API call. */
	static readonly UPDATE_MANAGED_RULE_SET_VERSION_EXPIRY_DATE: string[] = ["wafv2:UpdateManagedRuleSetVersionExpiryDate"];
	/** IAM actions required for the UpdateRegexPatternSet API call. */
	static readonly UPDATE_REGEX_PATTERN_SET: string[] = ["wafv2:UpdateRegexPatternSet"];
	/** IAM actions required for the UpdateRuleGroup API call. */
	static readonly UPDATE_RULE_GROUP: string[] = ["wafv2:UpdateRuleGroup"];
	/** IAM actions required for the UpdateWebACL API call. */
	static readonly UPDATE_WEB_ACL: string[] = ["wafv2:UpdateWebACL"];
}

/**
 * Condition key constants and builders for wafv2.
 */
export class Wafv2Conditions {
	/** Condition keys applicable to the CreateIPSet action. */
	static readonly CREATE_IP_SET_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateRegexPatternSet action. */
	static readonly CREATE_REGEX_PATTERN_SET_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateRuleGroup action. */
	static readonly CREATE_RULE_GROUP_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateWebACL action. */
	static readonly CREATE_WEB_ACL_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the DeleteLoggingConfiguration action. */
	static readonly DELETE_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] = ["wafv2:LogScope"];
	/** Condition keys applicable to the GetIPSet action. */
	static readonly GET_IP_SET_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetLoggingConfiguration action. */
	static readonly GET_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "wafv2:LogScope"];
	/** Condition keys applicable to the GetRateBasedStatementManagedKeys action. */
	static readonly GET_RATE_BASED_STATEMENT_MANAGED_KEYS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetRegexPatternSet action. */
	static readonly GET_REGEX_PATTERN_SET_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetRuleGroup action. */
	static readonly GET_RULE_GROUP_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetWebACL action. */
	static readonly GET_WEB_ACL_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListLoggingConfigurations action. */
	static readonly LIST_LOGGING_CONFIGURATIONS_CONDITION_KEYS: string[] = ["wafv2:LogScope"];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the PutLoggingConfiguration action. */
	static readonly PUT_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] = ["wafv2:LogDestinationResource", "wafv2:LogScope"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateIPSet action. */
	static readonly UPDATE_IP_SET_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateRegexPatternSet action. */
	static readonly UPDATE_REGEX_PATTERN_SET_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateRuleGroup action. */
	static readonly UPDATE_RULE_GROUP_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateWebACL action. */
	static readonly UPDATE_WEB_ACL_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: wafv2:LogDestinationResource (ARN) */
	static readonly LOG_DESTINATION_RESOURCE = "wafv2:LogDestinationResource";
	/** Condition key: wafv2:LogScope (String) */
	static readonly LOG_SCOPE = "wafv2:LogScope";

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
	 * Generates a condition block for `wafv2:LogDestinationResource`.
	 */
	static logDestinationResource(value: string): Record<string, Record<string, string>> {
		return { "ArnEquals": { "wafv2:LogDestinationResource": value } };
	}

	/**
	 * Generates a condition block for `wafv2:LogScope`.
	 */
	static logScope(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "wafv2:LogScope": value } };
	}

}
