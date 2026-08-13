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
	static readonly ADD_NOTIFICATION_CHANNEL =
		"devops-guru:AddNotificationChannel";
	/** [Write] devops-guru:DeleteInsight */
	static readonly DELETE_INSIGHT = "devops-guru:DeleteInsight";
	/** [Read] devops-guru:DescribeAccountHealth */
	static readonly DESCRIBE_ACCOUNT_HEALTH = "devops-guru:DescribeAccountHealth";
	/** [Read] devops-guru:DescribeAccountOverview */
	static readonly DESCRIBE_ACCOUNT_OVERVIEW =
		"devops-guru:DescribeAccountOverview";
	/** [Read] devops-guru:DescribeAnomaly */
	static readonly DESCRIBE_ANOMALY = "devops-guru:DescribeAnomaly";
	/** [Read] devops-guru:DescribeEventSourcesConfig */
	static readonly DESCRIBE_EVENT_SOURCES_CONFIG =
		"devops-guru:DescribeEventSourcesConfig";
	/** [Read] devops-guru:DescribeFeedback */
	static readonly DESCRIBE_FEEDBACK = "devops-guru:DescribeFeedback";
	/** [Read] devops-guru:DescribeInsight */
	static readonly DESCRIBE_INSIGHT = "devops-guru:DescribeInsight";
	/** [Read] devops-guru:DescribeOrganizationHealth */
	static readonly DESCRIBE_ORGANIZATION_HEALTH =
		"devops-guru:DescribeOrganizationHealth";
	/** [Read] devops-guru:DescribeOrganizationOverview */
	static readonly DESCRIBE_ORGANIZATION_OVERVIEW =
		"devops-guru:DescribeOrganizationOverview";
	/** [Read] devops-guru:DescribeOrganizationResourceCollectionHealth */
	static readonly DESCRIBE_ORGANIZATION_RESOURCE_COLLECTION_HEALTH =
		"devops-guru:DescribeOrganizationResourceCollectionHealth";
	/** [Read] devops-guru:DescribeResourceCollectionHealth */
	static readonly DESCRIBE_RESOURCE_COLLECTION_HEALTH =
		"devops-guru:DescribeResourceCollectionHealth";
	/** [Read] devops-guru:DescribeServiceIntegration */
	static readonly DESCRIBE_SERVICE_INTEGRATION =
		"devops-guru:DescribeServiceIntegration";
	/** [Read] devops-guru:GetCostEstimation */
	static readonly GET_COST_ESTIMATION = "devops-guru:GetCostEstimation";
	/** [Read] devops-guru:GetResourceCollection */
	static readonly GET_RESOURCE_COLLECTION = "devops-guru:GetResourceCollection";
	/** [List] devops-guru:ListAnomaliesForInsight */
	static readonly LIST_ANOMALIES_FOR_INSIGHT =
		"devops-guru:ListAnomaliesForInsight";
	/** [List] devops-guru:ListAnomalousLogGroups */
	static readonly LIST_ANOMALOUS_LOG_GROUPS =
		"devops-guru:ListAnomalousLogGroups";
	/** [List] devops-guru:ListEvents */
	static readonly LIST_EVENTS = "devops-guru:ListEvents";
	/** [List] devops-guru:ListInsights */
	static readonly LIST_INSIGHTS = "devops-guru:ListInsights";
	/** [List] devops-guru:ListMonitoredResources */
	static readonly LIST_MONITORED_RESOURCES =
		"devops-guru:ListMonitoredResources";
	/** [List] devops-guru:ListNotificationChannels */
	static readonly LIST_NOTIFICATION_CHANNELS =
		"devops-guru:ListNotificationChannels";
	/** [List] devops-guru:ListOrganizationInsights */
	static readonly LIST_ORGANIZATION_INSIGHTS =
		"devops-guru:ListOrganizationInsights";
	/** [List] devops-guru:ListRecommendations */
	static readonly LIST_RECOMMENDATIONS = "devops-guru:ListRecommendations";
	/** [Write] devops-guru:PutFeedback */
	static readonly PUT_FEEDBACK = "devops-guru:PutFeedback";
	/** [Write] devops-guru:RemoveNotificationChannel */
	static readonly REMOVE_NOTIFICATION_CHANNEL =
		"devops-guru:RemoveNotificationChannel";
	/** [List] devops-guru:SearchInsights */
	static readonly SEARCH_INSIGHTS = "devops-guru:SearchInsights";
	/** [List] devops-guru:SearchOrganizationInsights */
	static readonly SEARCH_ORGANIZATION_INSIGHTS =
		"devops-guru:SearchOrganizationInsights";
	/** [Read] devops-guru:StartCostEstimation */
	static readonly START_COST_ESTIMATION = "devops-guru:StartCostEstimation";
	/** [Write] devops-guru:UpdateEventSourcesConfig */
	static readonly UPDATE_EVENT_SOURCES_CONFIG =
		"devops-guru:UpdateEventSourcesConfig";
	/** [Write] devops-guru:UpdateResourceCollection */
	static readonly UPDATE_RESOURCE_COLLECTION =
		"devops-guru:UpdateResourceCollection";
	/** [Write] devops-guru:UpdateServiceIntegration */
	static readonly UPDATE_SERVICE_INTEGRATION =
		"devops-guru:UpdateServiceIntegration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DevopsGuruActions.DESCRIBE_ACCOUNT_HEALTH,
		DevopsGuruActions.DESCRIBE_ACCOUNT_OVERVIEW,
		DevopsGuruActions.DESCRIBE_ANOMALY,
		DevopsGuruActions.DESCRIBE_EVENT_SOURCES_CONFIG,
		DevopsGuruActions.DESCRIBE_FEEDBACK,
		DevopsGuruActions.DESCRIBE_INSIGHT,
		DevopsGuruActions.DESCRIBE_ORGANIZATION_HEALTH,
		DevopsGuruActions.DESCRIBE_ORGANIZATION_OVERVIEW,
		DevopsGuruActions.DESCRIBE_ORGANIZATION_RESOURCE_COLLECTION_HEALTH,
		DevopsGuruActions.DESCRIBE_RESOURCE_COLLECTION_HEALTH,
		DevopsGuruActions.DESCRIBE_SERVICE_INTEGRATION,
		DevopsGuruActions.GET_COST_ESTIMATION,
		DevopsGuruActions.GET_RESOURCE_COLLECTION,
		DevopsGuruActions.START_COST_ESTIMATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DevopsGuruActions.ADD_NOTIFICATION_CHANNEL,
		DevopsGuruActions.DELETE_INSIGHT,
		DevopsGuruActions.PUT_FEEDBACK,
		DevopsGuruActions.REMOVE_NOTIFICATION_CHANNEL,
		DevopsGuruActions.UPDATE_EVENT_SOURCES_CONFIG,
		DevopsGuruActions.UPDATE_RESOURCE_COLLECTION,
		DevopsGuruActions.UPDATE_SERVICE_INTEGRATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DevopsGuruActions.LIST_ANOMALIES_FOR_INSIGHT,
		DevopsGuruActions.LIST_ANOMALOUS_LOG_GROUPS,
		DevopsGuruActions.LIST_EVENTS,
		DevopsGuruActions.LIST_INSIGHTS,
		DevopsGuruActions.LIST_MONITORED_RESOURCES,
		DevopsGuruActions.LIST_NOTIFICATION_CHANNELS,
		DevopsGuruActions.LIST_ORGANIZATION_INSIGHTS,
		DevopsGuruActions.LIST_RECOMMENDATIONS,
		DevopsGuruActions.SEARCH_INSIGHTS,
		DevopsGuruActions.SEARCH_ORGANIZATION_INSIGHTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const TopicArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sns:(?<region>[^:]*):(?<account>[^:]*):(?<topicName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for devops-guru resources.
 */
export class DevopsGuruResources {
	/**
	 * Builds an ARN for the topic resource.
	 */
	static topic(props: {
		/** The TopicName component of the ARN. */
		readonly topicName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTopicArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		topicName: string;
	} {
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
	static readonly ADD_NOTIFICATION_CHANNEL: string[] = [
		"devops-guru:AddNotificationChannel",
	];
	/** IAM actions required for the DeleteInsight API call. */
	static readonly DELETE_INSIGHT: string[] = ["devops-guru:DeleteInsight"];
	/** IAM actions required for the DescribeAccountHealth API call. */
	static readonly DESCRIBE_ACCOUNT_HEALTH: string[] = [
		"devops-guru:DescribeAccountHealth",
	];
	/** IAM actions required for the DescribeAccountOverview API call. */
	static readonly DESCRIBE_ACCOUNT_OVERVIEW: string[] = [
		"devops-guru:DescribeAccountOverview",
	];
	/** IAM actions required for the DescribeAnomaly API call. */
	static readonly DESCRIBE_ANOMALY: string[] = ["devops-guru:DescribeAnomaly"];
	/** IAM actions required for the DescribeEventSourcesConfig API call. */
	static readonly DESCRIBE_EVENT_SOURCES_CONFIG: string[] = [
		"devops-guru:DescribeEventSourcesConfig",
	];
	/** IAM actions required for the DescribeFeedback API call. */
	static readonly DESCRIBE_FEEDBACK: string[] = [
		"devops-guru:DescribeFeedback",
	];
	/** IAM actions required for the DescribeInsight API call. */
	static readonly DESCRIBE_INSIGHT: string[] = ["devops-guru:DescribeInsight"];
	/** IAM actions required for the DescribeOrganizationHealth API call. */
	static readonly DESCRIBE_ORGANIZATION_HEALTH: string[] = [
		"devops-guru:DescribeOrganizationHealth",
	];
	/** IAM actions required for the DescribeOrganizationOverview API call. */
	static readonly DESCRIBE_ORGANIZATION_OVERVIEW: string[] = [
		"devops-guru:DescribeOrganizationOverview",
	];
	/** IAM actions required for the DescribeOrganizationResourceCollectionHealth API call. */
	static readonly DESCRIBE_ORGANIZATION_RESOURCE_COLLECTION_HEALTH: string[] = [
		"devops-guru:DescribeOrganizationResourceCollectionHealth",
	];
	/** IAM actions required for the DescribeResourceCollectionHealth API call. */
	static readonly DESCRIBE_RESOURCE_COLLECTION_HEALTH: string[] = [
		"devops-guru:DescribeResourceCollectionHealth",
	];
	/** IAM actions required for the DescribeServiceIntegration API call. */
	static readonly DESCRIBE_SERVICE_INTEGRATION: string[] = [
		"devops-guru:DescribeServiceIntegration",
	];
	/** IAM actions required for the GetCostEstimation API call. */
	static readonly GET_COST_ESTIMATION: string[] = [
		"devops-guru:GetCostEstimation",
	];
	/** IAM actions required for the GetResourceCollection API call. */
	static readonly GET_RESOURCE_COLLECTION: string[] = [
		"devops-guru:GetResourceCollection",
	];
	/** IAM actions required for the ListAnomaliesForInsight API call. */
	static readonly LIST_ANOMALIES_FOR_INSIGHT: string[] = [
		"devops-guru:ListAnomaliesForInsight",
	];
	/** IAM actions required for the ListAnomalousLogGroups API call. */
	static readonly LIST_ANOMALOUS_LOG_GROUPS: string[] = [
		"devops-guru:ListAnomalousLogGroups",
	];
	/** IAM actions required for the ListEvents API call. */
	static readonly LIST_EVENTS: string[] = ["devops-guru:ListEvents"];
	/** IAM actions required for the ListInsights API call. */
	static readonly LIST_INSIGHTS: string[] = ["devops-guru:ListInsights"];
	/** IAM actions required for the ListMonitoredResources API call. */
	static readonly LIST_MONITORED_RESOURCES: string[] = [
		"devops-guru:ListMonitoredResources",
	];
	/** IAM actions required for the ListNotificationChannels API call. */
	static readonly LIST_NOTIFICATION_CHANNELS: string[] = [
		"devops-guru:ListNotificationChannels",
	];
	/** IAM actions required for the ListOrganizationInsights API call. */
	static readonly LIST_ORGANIZATION_INSIGHTS: string[] = [
		"devops-guru:ListOrganizationInsights",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly LIST_RECOMMENDATIONS: string[] = [
		"devops-guru:ListRecommendations",
	];
	/** IAM actions required for the PutFeedback API call. */
	static readonly PUT_FEEDBACK: string[] = ["devops-guru:PutFeedback"];
	/** IAM actions required for the RemoveNotificationChannel API call. */
	static readonly REMOVE_NOTIFICATION_CHANNEL: string[] = [
		"devops-guru:RemoveNotificationChannel",
	];
	/** IAM actions required for the SearchInsights API call. */
	static readonly SEARCH_INSIGHTS: string[] = ["devops-guru:SearchInsights"];
	/** IAM actions required for the SearchOrganizationInsights API call. */
	static readonly SEARCH_ORGANIZATION_INSIGHTS: string[] = [
		"devops-guru:SearchOrganizationInsights",
	];
	/** IAM actions required for the StartCostEstimation API call. */
	static readonly START_COST_ESTIMATION: string[] = [
		"devops-guru:StartCostEstimation",
	];
	/** IAM actions required for the UpdateEventSourcesConfig API call. */
	static readonly UPDATE_EVENT_SOURCES_CONFIG: string[] = [
		"devops-guru:UpdateEventSourcesConfig",
	];
	/** IAM actions required for the UpdateResourceCollection API call. */
	static readonly UPDATE_RESOURCE_COLLECTION: string[] = [
		"devops-guru:UpdateResourceCollection",
	];
	/** IAM actions required for the UpdateServiceIntegration API call. */
	static readonly UPDATE_SERVICE_INTEGRATION: string[] = [
		"devops-guru:UpdateServiceIntegration",
	];
}

/**
 * Condition key constants and builders for devops-guru.
 */
export class DevopsGuruConditions {
	/** Condition keys applicable to the ListAnomaliesForInsight action. */
	static readonly LIST_ANOMALIES_FOR_INSIGHT_CONDITION_KEYS: string[] = [
		"devops-guru:ServiceNames",
	];
	/** Condition keys applicable to the SearchInsights action. */
	static readonly SEARCH_INSIGHTS_CONDITION_KEYS: string[] = [
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
