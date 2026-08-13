// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/trustedadvisor.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the trustedadvisor service.
 */
export class TrustedadvisorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "trustedadvisor";

	/** [Write] trustedadvisor:BatchUpdateRecommendationResourceExclusion */
	static readonly BATCH_UPDATE_RECOMMENDATION_RESOURCE_EXCLUSION =
		"trustedadvisor:BatchUpdateRecommendationResourceExclusion";
	/** [Write] trustedadvisor:DeleteNotificationConfigurationForDelegatedAdmin */
	static readonly DELETE_NOTIFICATION_CONFIGURATION_FOR_DELEGATED_ADMIN =
		"trustedadvisor:DeleteNotificationConfigurationForDelegatedAdmin";
	/** [Read] trustedadvisor:DescribeAccount */
	static readonly DESCRIBE_ACCOUNT = "trustedadvisor:DescribeAccount";
	/** [Read] trustedadvisor:DescribeAccountAccess */
	static readonly DESCRIBE_ACCOUNT_ACCESS =
		"trustedadvisor:DescribeAccountAccess";
	/** [Read] trustedadvisor:DescribeCheckItems */
	static readonly DESCRIBE_CHECK_ITEMS = "trustedadvisor:DescribeCheckItems";
	/** [Read] trustedadvisor:DescribeCheckRefreshStatuses */
	static readonly DESCRIBE_CHECK_REFRESH_STATUSES =
		"trustedadvisor:DescribeCheckRefreshStatuses";
	/** [Read] trustedadvisor:DescribeCheckStatusHistoryChanges */
	static readonly DESCRIBE_CHECK_STATUS_HISTORY_CHANGES =
		"trustedadvisor:DescribeCheckStatusHistoryChanges";
	/** [Read] trustedadvisor:DescribeCheckSummaries */
	static readonly DESCRIBE_CHECK_SUMMARIES =
		"trustedadvisor:DescribeCheckSummaries";
	/** [Read] trustedadvisor:DescribeChecks */
	static readonly DESCRIBE_CHECKS = "trustedadvisor:DescribeChecks";
	/** [Read] trustedadvisor:DescribeNotificationConfigurations */
	static readonly DESCRIBE_NOTIFICATION_CONFIGURATIONS =
		"trustedadvisor:DescribeNotificationConfigurations";
	/** [Read] trustedadvisor:DescribeNotificationPreferences */
	static readonly DESCRIBE_NOTIFICATION_PREFERENCES =
		"trustedadvisor:DescribeNotificationPreferences";
	/** [Read] trustedadvisor:DescribeOrganization */
	static readonly DESCRIBE_ORGANIZATION = "trustedadvisor:DescribeOrganization";
	/** [Read] trustedadvisor:DescribeOrganizationAccounts */
	static readonly DESCRIBE_ORGANIZATION_ACCOUNTS =
		"trustedadvisor:DescribeOrganizationAccounts";
	/** [Read] trustedadvisor:DescribeReports */
	static readonly DESCRIBE_REPORTS = "trustedadvisor:DescribeReports";
	/** [Read] trustedadvisor:DescribeRisk */
	static readonly DESCRIBE_RISK = "trustedadvisor:DescribeRisk";
	/** [Read] trustedadvisor:DescribeRiskResources */
	static readonly DESCRIBE_RISK_RESOURCES =
		"trustedadvisor:DescribeRiskResources";
	/** [Read] trustedadvisor:DescribeRisks */
	static readonly DESCRIBE_RISKS = "trustedadvisor:DescribeRisks";
	/** [Read] trustedadvisor:DescribeServiceMetadata */
	static readonly DESCRIBE_SERVICE_METADATA =
		"trustedadvisor:DescribeServiceMetadata";
	/** [Read] trustedadvisor:DownloadRisk */
	static readonly DOWNLOAD_RISK = "trustedadvisor:DownloadRisk";
	/** [Write] trustedadvisor:ExcludeCheckItems */
	static readonly EXCLUDE_CHECK_ITEMS = "trustedadvisor:ExcludeCheckItems";
	/** [Write] trustedadvisor:GenerateReport */
	static readonly GENERATE_REPORT = "trustedadvisor:GenerateReport";
	/** [Read] trustedadvisor:GetOrganizationRecommendation */
	static readonly GET_ORGANIZATION_RECOMMENDATION =
		"trustedadvisor:GetOrganizationRecommendation";
	/** [Read] trustedadvisor:GetRecommendation */
	static readonly GET_RECOMMENDATION = "trustedadvisor:GetRecommendation";
	/** [Write] trustedadvisor:IncludeCheckItems */
	static readonly INCLUDE_CHECK_ITEMS = "trustedadvisor:IncludeCheckItems";
	/** [Read] trustedadvisor:ListAccountsForParent */
	static readonly LIST_ACCOUNTS_FOR_PARENT =
		"trustedadvisor:ListAccountsForParent";
	/** [List] trustedadvisor:ListChecks */
	static readonly LIST_CHECKS = "trustedadvisor:ListChecks";
	/** [List] trustedadvisor:ListOrganizationRecommendationAccounts */
	static readonly LIST_ORGANIZATION_RECOMMENDATION_ACCOUNTS =
		"trustedadvisor:ListOrganizationRecommendationAccounts";
	/** [List] trustedadvisor:ListOrganizationRecommendationResources */
	static readonly LIST_ORGANIZATION_RECOMMENDATION_RESOURCES =
		"trustedadvisor:ListOrganizationRecommendationResources";
	/** [List] trustedadvisor:ListOrganizationRecommendations */
	static readonly LIST_ORGANIZATION_RECOMMENDATIONS =
		"trustedadvisor:ListOrganizationRecommendations";
	/** [Read] trustedadvisor:ListOrganizationalUnitsForParent */
	static readonly LIST_ORGANIZATIONAL_UNITS_FOR_PARENT =
		"trustedadvisor:ListOrganizationalUnitsForParent";
	/** [List] trustedadvisor:ListRecommendationResources */
	static readonly LIST_RECOMMENDATION_RESOURCES =
		"trustedadvisor:ListRecommendationResources";
	/** [List] trustedadvisor:ListRecommendations */
	static readonly LIST_RECOMMENDATIONS = "trustedadvisor:ListRecommendations";
	/** [List] trustedadvisor:ListRecommendationsForResource */
	static readonly LIST_RECOMMENDATIONS_FOR_RESOURCE =
		"trustedadvisor:ListRecommendationsForResource";
	/** [Read] trustedadvisor:ListRoots */
	static readonly LIST_ROOTS = "trustedadvisor:ListRoots";
	/** [Write] trustedadvisor:RefreshCheck */
	static readonly REFRESH_CHECK = "trustedadvisor:RefreshCheck";
	/** [Write] trustedadvisor:SetAccountAccess */
	static readonly SET_ACCOUNT_ACCESS = "trustedadvisor:SetAccountAccess";
	/** [Write] trustedadvisor:SetOrganizationAccess */
	static readonly SET_ORGANIZATION_ACCESS =
		"trustedadvisor:SetOrganizationAccess";
	/** [Write] trustedadvisor:UpdateNotificationConfigurations */
	static readonly UPDATE_NOTIFICATION_CONFIGURATIONS =
		"trustedadvisor:UpdateNotificationConfigurations";
	/** [Write] trustedadvisor:UpdateNotificationPreferences */
	static readonly UPDATE_NOTIFICATION_PREFERENCES =
		"trustedadvisor:UpdateNotificationPreferences";
	/** [Write] trustedadvisor:UpdateOrganizationRecommendationLifecycle */
	static readonly UPDATE_ORGANIZATION_RECOMMENDATION_LIFECYCLE =
		"trustedadvisor:UpdateOrganizationRecommendationLifecycle";
	/** [Write] trustedadvisor:UpdateRecommendationLifecycle */
	static readonly UPDATE_RECOMMENDATION_LIFECYCLE =
		"trustedadvisor:UpdateRecommendationLifecycle";
	/** [Write] trustedadvisor:UpdateRiskStatus */
	static readonly UPDATE_RISK_STATUS = "trustedadvisor:UpdateRiskStatus";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TrustedadvisorActions.DESCRIBE_ACCOUNT,
		TrustedadvisorActions.DESCRIBE_ACCOUNT_ACCESS,
		TrustedadvisorActions.DESCRIBE_CHECK_ITEMS,
		TrustedadvisorActions.DESCRIBE_CHECK_REFRESH_STATUSES,
		TrustedadvisorActions.DESCRIBE_CHECK_STATUS_HISTORY_CHANGES,
		TrustedadvisorActions.DESCRIBE_CHECK_SUMMARIES,
		TrustedadvisorActions.DESCRIBE_CHECKS,
		TrustedadvisorActions.DESCRIBE_NOTIFICATION_CONFIGURATIONS,
		TrustedadvisorActions.DESCRIBE_NOTIFICATION_PREFERENCES,
		TrustedadvisorActions.DESCRIBE_ORGANIZATION,
		TrustedadvisorActions.DESCRIBE_ORGANIZATION_ACCOUNTS,
		TrustedadvisorActions.DESCRIBE_REPORTS,
		TrustedadvisorActions.DESCRIBE_RISK,
		TrustedadvisorActions.DESCRIBE_RISK_RESOURCES,
		TrustedadvisorActions.DESCRIBE_RISKS,
		TrustedadvisorActions.DESCRIBE_SERVICE_METADATA,
		TrustedadvisorActions.DOWNLOAD_RISK,
		TrustedadvisorActions.GET_ORGANIZATION_RECOMMENDATION,
		TrustedadvisorActions.GET_RECOMMENDATION,
		TrustedadvisorActions.LIST_ACCOUNTS_FOR_PARENT,
		TrustedadvisorActions.LIST_ORGANIZATIONAL_UNITS_FOR_PARENT,
		TrustedadvisorActions.LIST_ROOTS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		TrustedadvisorActions.BATCH_UPDATE_RECOMMENDATION_RESOURCE_EXCLUSION,
		TrustedadvisorActions.DELETE_NOTIFICATION_CONFIGURATION_FOR_DELEGATED_ADMIN,
		TrustedadvisorActions.EXCLUDE_CHECK_ITEMS,
		TrustedadvisorActions.GENERATE_REPORT,
		TrustedadvisorActions.INCLUDE_CHECK_ITEMS,
		TrustedadvisorActions.REFRESH_CHECK,
		TrustedadvisorActions.SET_ACCOUNT_ACCESS,
		TrustedadvisorActions.SET_ORGANIZATION_ACCESS,
		TrustedadvisorActions.UPDATE_NOTIFICATION_CONFIGURATIONS,
		TrustedadvisorActions.UPDATE_NOTIFICATION_PREFERENCES,
		TrustedadvisorActions.UPDATE_ORGANIZATION_RECOMMENDATION_LIFECYCLE,
		TrustedadvisorActions.UPDATE_RECOMMENDATION_LIFECYCLE,
		TrustedadvisorActions.UPDATE_RISK_STATUS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		TrustedadvisorActions.LIST_CHECKS,
		TrustedadvisorActions.LIST_ORGANIZATION_RECOMMENDATION_ACCOUNTS,
		TrustedadvisorActions.LIST_ORGANIZATION_RECOMMENDATION_RESOURCES,
		TrustedadvisorActions.LIST_ORGANIZATION_RECOMMENDATIONS,
		TrustedadvisorActions.LIST_RECOMMENDATION_RESOURCES,
		TrustedadvisorActions.LIST_RECOMMENDATIONS,
		TrustedadvisorActions.LIST_RECOMMENDATIONS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ChecksArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):trustedadvisor:(?<region>[^:]*):(?<account>[^:]*):checks/(?<categoryCode>[^:/?]+)/(?<checkId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for trustedadvisor resources.
 */
export class TrustedadvisorResources {
	/**
	 * Builds an ARN for the checks resource.
	 */
	static checks(props: {
		/** The CategoryCode component of the ARN. */
		readonly categoryCode: string;
		/** The CheckId component of the ARN. */
		readonly checkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:trustedadvisor:${props.region ?? "*"}:${props.account ?? "*"}:checks/${props.categoryCode}/${props.checkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the checks resource.
	 */
	static isValidChecksArn(arn: string): boolean {
		return ChecksArnRegex.test(arn);
	}

	/**
	 * Parses a checks ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChecksArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		categoryCode: string;
		checkId: string;
	} {
		const match = ChecksArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid checks ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			categoryCode: match.groups!.categoryCode,
			checkId: match.groups!.checkId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for trustedadvisor.
 */
export class TrustedadvisorOperations {
	/** IAM actions required for the BatchUpdateRecommendationResourceExclusion API call. */
	static readonly BATCH_UPDATE_RECOMMENDATION_RESOURCE_EXCLUSION: string[] = [
		"trustedadvisor:BatchUpdateRecommendationResourceExclusion",
	];
	/** IAM actions required for the GetOrganizationRecommendation API call. */
	static readonly GET_ORGANIZATION_RECOMMENDATION: string[] = [
		"trustedadvisor:GetOrganizationRecommendation",
	];
	/** IAM actions required for the GetRecommendation API call. */
	static readonly GET_RECOMMENDATION: string[] = [
		"trustedadvisor:DescribeCheckSummaries",
		"support:DescribeTrustedAdvisorCheckSummaries",
		"trustedadvisor:GetRecommendation",
	];
	/** IAM actions required for the ListChecks API call. */
	static readonly LIST_CHECKS: string[] = [
		"trustedadvisor:DescribeChecks",
		"support:DescribeTrustedAdvisorChecks",
		"trustedadvisor:ListChecks",
	];
	/** IAM actions required for the ListOrganizationRecommendationAccounts API call. */
	static readonly LIST_ORGANIZATION_RECOMMENDATION_ACCOUNTS: string[] = [
		"trustedadvisor:ListOrganizationRecommendationAccounts",
	];
	/** IAM actions required for the ListOrganizationRecommendationResources API call. */
	static readonly LIST_ORGANIZATION_RECOMMENDATION_RESOURCES: string[] = [
		"trustedadvisor:ListOrganizationRecommendationResources",
	];
	/** IAM actions required for the ListOrganizationRecommendations API call. */
	static readonly LIST_ORGANIZATION_RECOMMENDATIONS: string[] = [
		"trustedadvisor:ListOrganizationRecommendations",
	];
	/** IAM actions required for the ListRecommendationResources API call. */
	static readonly LIST_RECOMMENDATION_RESOURCES: string[] = [
		"trustedadvisor:DescribeCheckItems",
		"support:DescribeTrustedAdvisorCheckResult",
		"trustedadvisor:ListRecommendationResources",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly LIST_RECOMMENDATIONS: string[] = [
		"trustedadvisor:DescribeCheckSummaries",
		"support:DescribeTrustedAdvisorCheckSummaries",
		"trustedadvisor:ListRecommendations",
	];
	/** IAM actions required for the ListRecommendationsForResource API call. */
	static readonly LIST_RECOMMENDATIONS_FOR_RESOURCE: string[] = [
		"trustedadvisor:DescribeCheckItems",
		"support:DescribeTrustedAdvisorCheckResult",
		"trustedadvisor:ListRecommendationsForResource",
	];
	/** IAM actions required for the UpdateOrganizationRecommendationLifecycle API call. */
	static readonly UPDATE_ORGANIZATION_RECOMMENDATION_LIFECYCLE: string[] = [
		"trustedadvisor:UpdateOrganizationRecommendationLifecycle",
	];
	/** IAM actions required for the UpdateRecommendationLifecycle API call. */
	static readonly UPDATE_RECOMMENDATION_LIFECYCLE: string[] = [
		"trustedadvisor:UpdateRecommendationLifecycle",
	];
}
