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
	static readonly BatchUpdateRecommendationResourceExclusion =
		"trustedadvisor:BatchUpdateRecommendationResourceExclusion";
	/** [Write] trustedadvisor:DeleteNotificationConfigurationForDelegatedAdmin */
	static readonly DeleteNotificationConfigurationForDelegatedAdmin =
		"trustedadvisor:DeleteNotificationConfigurationForDelegatedAdmin";
	/** [Read] trustedadvisor:DescribeAccount */
	static readonly DescribeAccount = "trustedadvisor:DescribeAccount";
	/** [Read] trustedadvisor:DescribeAccountAccess */
	static readonly DescribeAccountAccess =
		"trustedadvisor:DescribeAccountAccess";
	/** [Read] trustedadvisor:DescribeCheckItems */
	static readonly DescribeCheckItems = "trustedadvisor:DescribeCheckItems";
	/** [Read] trustedadvisor:DescribeCheckRefreshStatuses */
	static readonly DescribeCheckRefreshStatuses =
		"trustedadvisor:DescribeCheckRefreshStatuses";
	/** [Read] trustedadvisor:DescribeCheckStatusHistoryChanges */
	static readonly DescribeCheckStatusHistoryChanges =
		"trustedadvisor:DescribeCheckStatusHistoryChanges";
	/** [Read] trustedadvisor:DescribeCheckSummaries */
	static readonly DescribeCheckSummaries =
		"trustedadvisor:DescribeCheckSummaries";
	/** [Read] trustedadvisor:DescribeChecks */
	static readonly DescribeChecks = "trustedadvisor:DescribeChecks";
	/** [Read] trustedadvisor:DescribeNotificationConfigurations */
	static readonly DescribeNotificationConfigurations =
		"trustedadvisor:DescribeNotificationConfigurations";
	/** [Read] trustedadvisor:DescribeNotificationPreferences */
	static readonly DescribeNotificationPreferences =
		"trustedadvisor:DescribeNotificationPreferences";
	/** [Read] trustedadvisor:DescribeOrganization */
	static readonly DescribeOrganization = "trustedadvisor:DescribeOrganization";
	/** [Read] trustedadvisor:DescribeOrganizationAccounts */
	static readonly DescribeOrganizationAccounts =
		"trustedadvisor:DescribeOrganizationAccounts";
	/** [Read] trustedadvisor:DescribeReports */
	static readonly DescribeReports = "trustedadvisor:DescribeReports";
	/** [Read] trustedadvisor:DescribeRisk */
	static readonly DescribeRisk = "trustedadvisor:DescribeRisk";
	/** [Read] trustedadvisor:DescribeRiskResources */
	static readonly DescribeRiskResources =
		"trustedadvisor:DescribeRiskResources";
	/** [Read] trustedadvisor:DescribeRisks */
	static readonly DescribeRisks = "trustedadvisor:DescribeRisks";
	/** [Read] trustedadvisor:DescribeServiceMetadata */
	static readonly DescribeServiceMetadata =
		"trustedadvisor:DescribeServiceMetadata";
	/** [Read] trustedadvisor:DownloadRisk */
	static readonly DownloadRisk = "trustedadvisor:DownloadRisk";
	/** [Write] trustedadvisor:ExcludeCheckItems */
	static readonly ExcludeCheckItems = "trustedadvisor:ExcludeCheckItems";
	/** [Write] trustedadvisor:GenerateReport */
	static readonly GenerateReport = "trustedadvisor:GenerateReport";
	/** [Read] trustedadvisor:GetOrganizationRecommendation */
	static readonly actionGetOrganizationRecommendation =
		"trustedadvisor:GetOrganizationRecommendation";
	/** [Read] trustedadvisor:GetRecommendation */
	static readonly actionGetRecommendation = "trustedadvisor:GetRecommendation";
	/** [Write] trustedadvisor:IncludeCheckItems */
	static readonly IncludeCheckItems = "trustedadvisor:IncludeCheckItems";
	/** [Read] trustedadvisor:ListAccountsForParent */
	static readonly ListAccountsForParent =
		"trustedadvisor:ListAccountsForParent";
	/** [List] trustedadvisor:ListChecks */
	static readonly ListChecks = "trustedadvisor:ListChecks";
	/** [List] trustedadvisor:ListOrganizationRecommendationAccounts */
	static readonly ListOrganizationRecommendationAccounts =
		"trustedadvisor:ListOrganizationRecommendationAccounts";
	/** [List] trustedadvisor:ListOrganizationRecommendationResources */
	static readonly ListOrganizationRecommendationResources =
		"trustedadvisor:ListOrganizationRecommendationResources";
	/** [List] trustedadvisor:ListOrganizationRecommendations */
	static readonly ListOrganizationRecommendations =
		"trustedadvisor:ListOrganizationRecommendations";
	/** [Read] trustedadvisor:ListOrganizationalUnitsForParent */
	static readonly ListOrganizationalUnitsForParent =
		"trustedadvisor:ListOrganizationalUnitsForParent";
	/** [List] trustedadvisor:ListRecommendationResources */
	static readonly ListRecommendationResources =
		"trustedadvisor:ListRecommendationResources";
	/** [List] trustedadvisor:ListRecommendations */
	static readonly ListRecommendations = "trustedadvisor:ListRecommendations";
	/** [List] trustedadvisor:ListRecommendationsForResource */
	static readonly ListRecommendationsForResource =
		"trustedadvisor:ListRecommendationsForResource";
	/** [Read] trustedadvisor:ListRoots */
	static readonly ListRoots = "trustedadvisor:ListRoots";
	/** [Write] trustedadvisor:RefreshCheck */
	static readonly RefreshCheck = "trustedadvisor:RefreshCheck";
	/** [Write] trustedadvisor:SetAccountAccess */
	static readonly actionSetAccountAccess = "trustedadvisor:SetAccountAccess";
	/** [Write] trustedadvisor:SetOrganizationAccess */
	static readonly actionSetOrganizationAccess =
		"trustedadvisor:SetOrganizationAccess";
	/** [Write] trustedadvisor:UpdateNotificationConfigurations */
	static readonly UpdateNotificationConfigurations =
		"trustedadvisor:UpdateNotificationConfigurations";
	/** [Write] trustedadvisor:UpdateNotificationPreferences */
	static readonly UpdateNotificationPreferences =
		"trustedadvisor:UpdateNotificationPreferences";
	/** [Write] trustedadvisor:UpdateOrganizationRecommendationLifecycle */
	static readonly UpdateOrganizationRecommendationLifecycle =
		"trustedadvisor:UpdateOrganizationRecommendationLifecycle";
	/** [Write] trustedadvisor:UpdateRecommendationLifecycle */
	static readonly UpdateRecommendationLifecycle =
		"trustedadvisor:UpdateRecommendationLifecycle";
	/** [Write] trustedadvisor:UpdateRiskStatus */
	static readonly UpdateRiskStatus = "trustedadvisor:UpdateRiskStatus";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TrustedadvisorActions.DescribeAccount,
		TrustedadvisorActions.DescribeAccountAccess,
		TrustedadvisorActions.DescribeCheckItems,
		TrustedadvisorActions.DescribeCheckRefreshStatuses,
		TrustedadvisorActions.DescribeCheckStatusHistoryChanges,
		TrustedadvisorActions.DescribeCheckSummaries,
		TrustedadvisorActions.DescribeChecks,
		TrustedadvisorActions.DescribeNotificationConfigurations,
		TrustedadvisorActions.DescribeNotificationPreferences,
		TrustedadvisorActions.DescribeOrganization,
		TrustedadvisorActions.DescribeOrganizationAccounts,
		TrustedadvisorActions.DescribeReports,
		TrustedadvisorActions.DescribeRisk,
		TrustedadvisorActions.DescribeRiskResources,
		TrustedadvisorActions.DescribeRisks,
		TrustedadvisorActions.DescribeServiceMetadata,
		TrustedadvisorActions.DownloadRisk,
		TrustedadvisorActions.actionGetOrganizationRecommendation,
		TrustedadvisorActions.actionGetRecommendation,
		TrustedadvisorActions.ListAccountsForParent,
		TrustedadvisorActions.ListOrganizationalUnitsForParent,
		TrustedadvisorActions.ListRoots,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TrustedadvisorActions.BatchUpdateRecommendationResourceExclusion,
		TrustedadvisorActions.DeleteNotificationConfigurationForDelegatedAdmin,
		TrustedadvisorActions.ExcludeCheckItems,
		TrustedadvisorActions.GenerateReport,
		TrustedadvisorActions.IncludeCheckItems,
		TrustedadvisorActions.RefreshCheck,
		TrustedadvisorActions.actionSetAccountAccess,
		TrustedadvisorActions.actionSetOrganizationAccess,
		TrustedadvisorActions.UpdateNotificationConfigurations,
		TrustedadvisorActions.UpdateNotificationPreferences,
		TrustedadvisorActions.UpdateOrganizationRecommendationLifecycle,
		TrustedadvisorActions.UpdateRecommendationLifecycle,
		TrustedadvisorActions.UpdateRiskStatus,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		TrustedadvisorActions.ListChecks,
		TrustedadvisorActions.ListOrganizationRecommendationAccounts,
		TrustedadvisorActions.ListOrganizationRecommendationResources,
		TrustedadvisorActions.ListOrganizationRecommendations,
		TrustedadvisorActions.ListRecommendationResources,
		TrustedadvisorActions.ListRecommendations,
		TrustedadvisorActions.ListRecommendationsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a checks ARN.
 */
export interface TrustedadvisorChecksArnProps {
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
}

/**
 * Parsed components of a checks ARN.
 */
export interface TrustedadvisorChecksArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CategoryCode component. */
	readonly categoryCode: string;
	/** The CheckId component. */
	readonly checkId: string;
}

const ChecksArnRegex =
	/^arn:(?<partition>[^:]+):trustedadvisor:(?<region>[^:]*):(?<account>[^:]*):checks\/(?<categoryCode>[^:/?]+)\/(?<checkId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for trustedadvisor resources.
 */
export class TrustedadvisorResources {
	/**
	 * Builds an ARN for the checks resource.
	 */
	static checks(props: TrustedadvisorChecksArnProps): string {
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
	static parseChecksArn(arn: string): TrustedadvisorChecksArnComponents {
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
	static readonly BatchUpdateRecommendationResourceExclusion: string[] = [
		"trustedadvisor:BatchUpdateRecommendationResourceExclusion",
	];
	/** IAM actions required for the GetOrganizationRecommendation API call. */
	static readonly opGetOrganizationRecommendation: string[] = [
		"trustedadvisor:GetOrganizationRecommendation",
	];
	/** IAM actions required for the GetRecommendation API call. */
	static readonly opGetRecommendation: string[] = [
		"trustedadvisor:DescribeCheckSummaries",
		"support:DescribeTrustedAdvisorCheckSummaries",
		"trustedadvisor:GetRecommendation",
	];
	/** IAM actions required for the ListChecks API call. */
	static readonly ListChecks: string[] = [
		"trustedadvisor:DescribeChecks",
		"support:DescribeTrustedAdvisorChecks",
		"trustedadvisor:ListChecks",
	];
	/** IAM actions required for the ListOrganizationRecommendationAccounts API call. */
	static readonly ListOrganizationRecommendationAccounts: string[] = [
		"trustedadvisor:ListOrganizationRecommendationAccounts",
	];
	/** IAM actions required for the ListOrganizationRecommendationResources API call. */
	static readonly ListOrganizationRecommendationResources: string[] = [
		"trustedadvisor:ListOrganizationRecommendationResources",
	];
	/** IAM actions required for the ListOrganizationRecommendations API call. */
	static readonly ListOrganizationRecommendations: string[] = [
		"trustedadvisor:ListOrganizationRecommendations",
	];
	/** IAM actions required for the ListRecommendationResources API call. */
	static readonly ListRecommendationResources: string[] = [
		"trustedadvisor:DescribeCheckItems",
		"support:DescribeTrustedAdvisorCheckResult",
		"trustedadvisor:ListRecommendationResources",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly ListRecommendations: string[] = [
		"trustedadvisor:DescribeCheckSummaries",
		"support:DescribeTrustedAdvisorCheckSummaries",
		"trustedadvisor:ListRecommendations",
	];
	/** IAM actions required for the ListRecommendationsForResource API call. */
	static readonly ListRecommendationsForResource: string[] = [
		"trustedadvisor:DescribeCheckItems",
		"support:DescribeTrustedAdvisorCheckResult",
		"trustedadvisor:ListRecommendationsForResource",
	];
	/** IAM actions required for the UpdateOrganizationRecommendationLifecycle API call. */
	static readonly UpdateOrganizationRecommendationLifecycle: string[] = [
		"trustedadvisor:UpdateOrganizationRecommendationLifecycle",
	];
	/** IAM actions required for the UpdateRecommendationLifecycle API call. */
	static readonly UpdateRecommendationLifecycle: string[] = [
		"trustedadvisor:UpdateRecommendationLifecycle",
	];
}
