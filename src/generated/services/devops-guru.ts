// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/devops-guru.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the devops-guru service.
 */
export class DevopsGuruActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "devops-guru";

	/** [Write] devops-guru:AddNotificationChannel */
	static readonly AddNotificationChannel = "devops-guru:AddNotificationChannel";
	/** [Write] devops-guru:DeleteInsight */
	static readonly DeleteInsight = "devops-guru:DeleteInsight";
	/** [Read] devops-guru:DescribeAccountHealth */
	static readonly DescribeAccountHealth = "devops-guru:DescribeAccountHealth";
	/** [Read] devops-guru:DescribeAccountOverview */
	static readonly DescribeAccountOverview =
		"devops-guru:DescribeAccountOverview";
	/** [Read] devops-guru:DescribeAnomaly */
	static readonly DescribeAnomaly = "devops-guru:DescribeAnomaly";
	/** [Read] devops-guru:DescribeEventSourcesConfig */
	static readonly DescribeEventSourcesConfig =
		"devops-guru:DescribeEventSourcesConfig";
	/** [Read] devops-guru:DescribeFeedback */
	static readonly DescribeFeedback = "devops-guru:DescribeFeedback";
	/** [Read] devops-guru:DescribeInsight */
	static readonly DescribeInsight = "devops-guru:DescribeInsight";
	/** [Read] devops-guru:DescribeOrganizationHealth */
	static readonly DescribeOrganizationHealth =
		"devops-guru:DescribeOrganizationHealth";
	/** [Read] devops-guru:DescribeOrganizationOverview */
	static readonly DescribeOrganizationOverview =
		"devops-guru:DescribeOrganizationOverview";
	/** [Read] devops-guru:DescribeOrganizationResourceCollectionHealth */
	static readonly DescribeOrganizationResourceCollectionHealth =
		"devops-guru:DescribeOrganizationResourceCollectionHealth";
	/** [Read] devops-guru:DescribeResourceCollectionHealth */
	static readonly DescribeResourceCollectionHealth =
		"devops-guru:DescribeResourceCollectionHealth";
	/** [Read] devops-guru:DescribeServiceIntegration */
	static readonly DescribeServiceIntegration =
		"devops-guru:DescribeServiceIntegration";
	/** [Read] devops-guru:GetCostEstimation */
	static readonly actionGetCostEstimation = "devops-guru:GetCostEstimation";
	/** [Read] devops-guru:GetResourceCollection */
	static readonly actionGetResourceCollection =
		"devops-guru:GetResourceCollection";
	/** [List] devops-guru:ListAnomaliesForInsight */
	static readonly ListAnomaliesForInsight =
		"devops-guru:ListAnomaliesForInsight";
	/** [List] devops-guru:ListAnomalousLogGroups */
	static readonly ListAnomalousLogGroups = "devops-guru:ListAnomalousLogGroups";
	/** [List] devops-guru:ListEvents */
	static readonly ListEvents = "devops-guru:ListEvents";
	/** [List] devops-guru:ListInsights */
	static readonly ListInsights = "devops-guru:ListInsights";
	/** [List] devops-guru:ListMonitoredResources */
	static readonly ListMonitoredResources = "devops-guru:ListMonitoredResources";
	/** [List] devops-guru:ListNotificationChannels */
	static readonly ListNotificationChannels =
		"devops-guru:ListNotificationChannels";
	/** [List] devops-guru:ListOrganizationInsights */
	static readonly ListOrganizationInsights =
		"devops-guru:ListOrganizationInsights";
	/** [List] devops-guru:ListRecommendations */
	static readonly ListRecommendations = "devops-guru:ListRecommendations";
	/** [Write] devops-guru:PutFeedback */
	static readonly PutFeedback = "devops-guru:PutFeedback";
	/** [Write] devops-guru:RemoveNotificationChannel */
	static readonly RemoveNotificationChannel =
		"devops-guru:RemoveNotificationChannel";
	/** [List] devops-guru:SearchInsights */
	static readonly SearchInsights = "devops-guru:SearchInsights";
	/** [List] devops-guru:SearchOrganizationInsights */
	static readonly SearchOrganizationInsights =
		"devops-guru:SearchOrganizationInsights";
	/** [Read] devops-guru:StartCostEstimation */
	static readonly StartCostEstimation = "devops-guru:StartCostEstimation";
	/** [Write] devops-guru:UpdateEventSourcesConfig */
	static readonly UpdateEventSourcesConfig =
		"devops-guru:UpdateEventSourcesConfig";
	/** [Write] devops-guru:UpdateResourceCollection */
	static readonly UpdateResourceCollection =
		"devops-guru:UpdateResourceCollection";
	/** [Write] devops-guru:UpdateServiceIntegration */
	static readonly UpdateServiceIntegration =
		"devops-guru:UpdateServiceIntegration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DevopsGuruActions.DescribeAccountHealth,
		DevopsGuruActions.DescribeAccountOverview,
		DevopsGuruActions.DescribeAnomaly,
		DevopsGuruActions.DescribeEventSourcesConfig,
		DevopsGuruActions.DescribeFeedback,
		DevopsGuruActions.DescribeInsight,
		DevopsGuruActions.DescribeOrganizationHealth,
		DevopsGuruActions.DescribeOrganizationOverview,
		DevopsGuruActions.DescribeOrganizationResourceCollectionHealth,
		DevopsGuruActions.DescribeResourceCollectionHealth,
		DevopsGuruActions.DescribeServiceIntegration,
		DevopsGuruActions.actionGetCostEstimation,
		DevopsGuruActions.actionGetResourceCollection,
		DevopsGuruActions.StartCostEstimation,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DevopsGuruActions.AddNotificationChannel,
		DevopsGuruActions.DeleteInsight,
		DevopsGuruActions.PutFeedback,
		DevopsGuruActions.RemoveNotificationChannel,
		DevopsGuruActions.UpdateEventSourcesConfig,
		DevopsGuruActions.UpdateResourceCollection,
		DevopsGuruActions.UpdateServiceIntegration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DevopsGuruActions.ListAnomaliesForInsight,
		DevopsGuruActions.ListAnomalousLogGroups,
		DevopsGuruActions.ListEvents,
		DevopsGuruActions.ListInsights,
		DevopsGuruActions.ListMonitoredResources,
		DevopsGuruActions.ListNotificationChannels,
		DevopsGuruActions.ListOrganizationInsights,
		DevopsGuruActions.ListRecommendations,
		DevopsGuruActions.SearchInsights,
		DevopsGuruActions.SearchOrganizationInsights,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a topic ARN.
 */
export interface DevopsGuruTopicArnProps {
	/** The TopicName component of the ARN. */
	readonly topicName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a topic ARN.
 */
export interface DevopsGuruTopicArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TopicName component. */
	readonly topicName: string;
}

const TopicArnRegex =
	/^arn:(?<partition>[^:]+):sns:(?<region>[^:]*):(?<account>[^:]*):(?<topicName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for devops-guru resources.
 */
export class DevopsGuruResources {
	/**
	 * Builds an ARN for the topic resource.
	 */
	static topic(props: DevopsGuruTopicArnProps): string {
		return `arn:${props.partition ?? "aws"}:sns:${props.region ?? "*"}:${props.account ?? "*"}:${props.topicName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the topic resource.
	 */
	static isValidTopicArn(arn: string): boolean {
		return TopicArnRegex.test(arn);
	}

	/**
	 * Parses a topic ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTopicArn(arn: string): DevopsGuruTopicArnComponents {
		const match = TopicArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid topic ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			topicName: match.groups!.topicName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for devops-guru.
 */
export class DevopsGuruOperations {
	/** IAM actions required for the AddNotificationChannel API call. */
	static readonly AddNotificationChannel: string[] = [
		"devops-guru:AddNotificationChannel",
	];
	/** IAM actions required for the DeleteInsight API call. */
	static readonly DeleteInsight: string[] = ["devops-guru:DeleteInsight"];
	/** IAM actions required for the DescribeAccountHealth API call. */
	static readonly DescribeAccountHealth: string[] = [
		"devops-guru:DescribeAccountHealth",
	];
	/** IAM actions required for the DescribeAccountOverview API call. */
	static readonly DescribeAccountOverview: string[] = [
		"devops-guru:DescribeAccountOverview",
	];
	/** IAM actions required for the DescribeAnomaly API call. */
	static readonly DescribeAnomaly: string[] = ["devops-guru:DescribeAnomaly"];
	/** IAM actions required for the DescribeEventSourcesConfig API call. */
	static readonly DescribeEventSourcesConfig: string[] = [
		"devops-guru:DescribeEventSourcesConfig",
	];
	/** IAM actions required for the DescribeFeedback API call. */
	static readonly DescribeFeedback: string[] = ["devops-guru:DescribeFeedback"];
	/** IAM actions required for the DescribeInsight API call. */
	static readonly DescribeInsight: string[] = ["devops-guru:DescribeInsight"];
	/** IAM actions required for the DescribeOrganizationHealth API call. */
	static readonly DescribeOrganizationHealth: string[] = [
		"devops-guru:DescribeOrganizationHealth",
	];
	/** IAM actions required for the DescribeOrganizationOverview API call. */
	static readonly DescribeOrganizationOverview: string[] = [
		"devops-guru:DescribeOrganizationOverview",
	];
	/** IAM actions required for the DescribeOrganizationResourceCollectionHealth API call. */
	static readonly DescribeOrganizationResourceCollectionHealth: string[] = [
		"devops-guru:DescribeOrganizationResourceCollectionHealth",
	];
	/** IAM actions required for the DescribeResourceCollectionHealth API call. */
	static readonly DescribeResourceCollectionHealth: string[] = [
		"devops-guru:DescribeResourceCollectionHealth",
	];
	/** IAM actions required for the DescribeServiceIntegration API call. */
	static readonly DescribeServiceIntegration: string[] = [
		"devops-guru:DescribeServiceIntegration",
	];
	/** IAM actions required for the GetCostEstimation API call. */
	static readonly opGetCostEstimation: string[] = [
		"devops-guru:GetCostEstimation",
	];
	/** IAM actions required for the GetResourceCollection API call. */
	static readonly opGetResourceCollection: string[] = [
		"devops-guru:GetResourceCollection",
	];
	/** IAM actions required for the ListAnomaliesForInsight API call. */
	static readonly ListAnomaliesForInsight: string[] = [
		"devops-guru:ListAnomaliesForInsight",
	];
	/** IAM actions required for the ListAnomalousLogGroups API call. */
	static readonly ListAnomalousLogGroups: string[] = [
		"devops-guru:ListAnomalousLogGroups",
	];
	/** IAM actions required for the ListEvents API call. */
	static readonly ListEvents: string[] = ["devops-guru:ListEvents"];
	/** IAM actions required for the ListInsights API call. */
	static readonly ListInsights: string[] = ["devops-guru:ListInsights"];
	/** IAM actions required for the ListMonitoredResources API call. */
	static readonly ListMonitoredResources: string[] = [
		"devops-guru:ListMonitoredResources",
	];
	/** IAM actions required for the ListNotificationChannels API call. */
	static readonly ListNotificationChannels: string[] = [
		"devops-guru:ListNotificationChannels",
	];
	/** IAM actions required for the ListOrganizationInsights API call. */
	static readonly ListOrganizationInsights: string[] = [
		"devops-guru:ListOrganizationInsights",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly ListRecommendations: string[] = [
		"devops-guru:ListRecommendations",
	];
	/** IAM actions required for the PutFeedback API call. */
	static readonly PutFeedback: string[] = ["devops-guru:PutFeedback"];
	/** IAM actions required for the RemoveNotificationChannel API call. */
	static readonly RemoveNotificationChannel: string[] = [
		"devops-guru:RemoveNotificationChannel",
	];
	/** IAM actions required for the SearchInsights API call. */
	static readonly SearchInsights: string[] = ["devops-guru:SearchInsights"];
	/** IAM actions required for the SearchOrganizationInsights API call. */
	static readonly SearchOrganizationInsights: string[] = [
		"devops-guru:SearchOrganizationInsights",
	];
	/** IAM actions required for the StartCostEstimation API call. */
	static readonly StartCostEstimation: string[] = [
		"devops-guru:StartCostEstimation",
	];
	/** IAM actions required for the UpdateEventSourcesConfig API call. */
	static readonly UpdateEventSourcesConfig: string[] = [
		"devops-guru:UpdateEventSourcesConfig",
	];
	/** IAM actions required for the UpdateResourceCollection API call. */
	static readonly UpdateResourceCollection: string[] = [
		"devops-guru:UpdateResourceCollection",
	];
	/** IAM actions required for the UpdateServiceIntegration API call. */
	static readonly UpdateServiceIntegration: string[] = [
		"devops-guru:UpdateServiceIntegration",
	];
}

/**
 * Condition key constants and builders for devops-guru.
 */
export class DevopsGuruConditions {
	/** Condition keys applicable to the ListAnomaliesForInsight action. */
	static readonly ListAnomaliesForInsightConditionKeys: string[] = [
		"devops-guru:ServiceNames",
	];
	/** Condition keys applicable to the SearchInsights action. */
	static readonly SearchInsightsConditionKeys: string[] = [
		"devops-guru:ServiceNames",
	];

	/** Condition key: devops-guru:ServiceNames (ArrayOfString) */
	static readonly SERVICE_NAMES = "devops-guru:ServiceNames";

	/**
	 * Generates a condition block for `devops-guru:ServiceNames`.
	 */
	static serviceNames(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "devops-guru:ServiceNames": values },
		};
	}
}
