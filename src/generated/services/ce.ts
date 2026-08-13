// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ce.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ce service.
 */
export class CeActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ce";

	/** [Write] ce:CreateAnomalyMonitor */
	static readonly CREATE_ANOMALY_MONITOR = "ce:CreateAnomalyMonitor";
	/** [Write] ce:CreateAnomalySubscription */
	static readonly CREATE_ANOMALY_SUBSCRIPTION = "ce:CreateAnomalySubscription";
	/** [Write] ce:CreateCostCategoryDefinition */
	static readonly CREATE_COST_CATEGORY_DEFINITION =
		"ce:CreateCostCategoryDefinition";
	/** [Write] ce:CreateNotificationSubscription */
	static readonly CREATE_NOTIFICATION_SUBSCRIPTION =
		"ce:CreateNotificationSubscription";
	/** [Write] ce:CreateReport */
	static readonly CREATE_REPORT = "ce:CreateReport";
	/** [Write] ce:DeleteAnomalyMonitor */
	static readonly DELETE_ANOMALY_MONITOR = "ce:DeleteAnomalyMonitor";
	/** [Write] ce:DeleteAnomalySubscription */
	static readonly DELETE_ANOMALY_SUBSCRIPTION = "ce:DeleteAnomalySubscription";
	/** [Write] ce:DeleteCostCategoryDefinition */
	static readonly DELETE_COST_CATEGORY_DEFINITION =
		"ce:DeleteCostCategoryDefinition";
	/** [Write] ce:DeleteNotificationSubscription */
	static readonly DELETE_NOTIFICATION_SUBSCRIPTION =
		"ce:DeleteNotificationSubscription";
	/** [Write] ce:DeleteReport */
	static readonly DELETE_REPORT = "ce:DeleteReport";
	/** [Read] ce:DescribeCostCategoryDefinition */
	static readonly DESCRIBE_COST_CATEGORY_DEFINITION =
		"ce:DescribeCostCategoryDefinition";
	/** [Read] ce:DescribeNotificationSubscription */
	static readonly DESCRIBE_NOTIFICATION_SUBSCRIPTION =
		"ce:DescribeNotificationSubscription";
	/** [Read] ce:DescribeReport */
	static readonly DESCRIBE_REPORT = "ce:DescribeReport";
	/** [Read] ce:GetAnomalies */
	static readonly GET_ANOMALIES = "ce:GetAnomalies";
	/** [Read] ce:GetAnomalyMonitors */
	static readonly GET_ANOMALY_MONITORS = "ce:GetAnomalyMonitors";
	/** [Read] ce:GetAnomalySubscriptions */
	static readonly GET_ANOMALY_SUBSCRIPTIONS = "ce:GetAnomalySubscriptions";
	/** [Read] ce:GetApproximateUsageRecords */
	static readonly GET_APPROXIMATE_USAGE_RECORDS =
		"ce:GetApproximateUsageRecords";
	/** [Read] ce:GetCommitmentPurchaseAnalysis */
	static readonly GET_COMMITMENT_PURCHASE_ANALYSIS =
		"ce:GetCommitmentPurchaseAnalysis";
	/** [Read] ce:GetConsoleActionSetEnforced */
	static readonly GET_CONSOLE_ACTION_SET_ENFORCED =
		"ce:GetConsoleActionSetEnforced";
	/** [Read] ce:GetCostAndUsage */
	static readonly GET_COST_AND_USAGE = "ce:GetCostAndUsage";
	/** [Read] ce:GetCostAndUsageComparisons */
	static readonly GET_COST_AND_USAGE_COMPARISONS =
		"ce:GetCostAndUsageComparisons";
	/** [Read] ce:GetCostAndUsageWithResources */
	static readonly GET_COST_AND_USAGE_WITH_RESOURCES =
		"ce:GetCostAndUsageWithResources";
	/** [Read] ce:GetCostCategories */
	static readonly GET_COST_CATEGORIES = "ce:GetCostCategories";
	/** [Read] ce:GetCostComparisonDrivers */
	static readonly GET_COST_COMPARISON_DRIVERS = "ce:GetCostComparisonDrivers";
	/** [Read] ce:GetCostForecast */
	static readonly GET_COST_FORECAST = "ce:GetCostForecast";
	/** [Read] ce:GetDimensionValues */
	static readonly GET_DIMENSION_VALUES = "ce:GetDimensionValues";
	/** [Read] ce:GetPreferences */
	static readonly GET_PREFERENCES = "ce:GetPreferences";
	/** [Read] ce:GetReservationCoverage */
	static readonly GET_RESERVATION_COVERAGE = "ce:GetReservationCoverage";
	/** [Read] ce:GetReservationPurchaseRecommendation */
	static readonly GET_RESERVATION_PURCHASE_RECOMMENDATION =
		"ce:GetReservationPurchaseRecommendation";
	/** [Read] ce:GetReservationUtilization */
	static readonly GET_RESERVATION_UTILIZATION = "ce:GetReservationUtilization";
	/** [Read] ce:GetRightsizingRecommendation */
	static readonly GET_RIGHTSIZING_RECOMMENDATION =
		"ce:GetRightsizingRecommendation";
	/** [Read] ce:GetSavingsPlanPurchaseRecommendationDetails */
	static readonly GET_SAVINGS_PLAN_PURCHASE_RECOMMENDATION_DETAILS =
		"ce:GetSavingsPlanPurchaseRecommendationDetails";
	/** [Read] ce:GetSavingsPlansCoverage */
	static readonly GET_SAVINGS_PLANS_COVERAGE = "ce:GetSavingsPlansCoverage";
	/** [Read] ce:GetSavingsPlansPurchaseRecommendation */
	static readonly GET_SAVINGS_PLANS_PURCHASE_RECOMMENDATION =
		"ce:GetSavingsPlansPurchaseRecommendation";
	/** [Read] ce:GetSavingsPlansUtilization */
	static readonly GET_SAVINGS_PLANS_UTILIZATION =
		"ce:GetSavingsPlansUtilization";
	/** [Read] ce:GetSavingsPlansUtilizationDetails */
	static readonly GET_SAVINGS_PLANS_UTILIZATION_DETAILS =
		"ce:GetSavingsPlansUtilizationDetails";
	/** [Read] ce:GetTags */
	static readonly GET_TAGS = "ce:GetTags";
	/** [Read] ce:GetUsageForecast */
	static readonly GET_USAGE_FORECAST = "ce:GetUsageForecast";
	/** [List] ce:ListCommitmentPurchaseAnalyses */
	static readonly LIST_COMMITMENT_PURCHASE_ANALYSES =
		"ce:ListCommitmentPurchaseAnalyses";
	/** [List] ce:ListCostAllocationTagBackfillHistory */
	static readonly LIST_COST_ALLOCATION_TAG_BACKFILL_HISTORY =
		"ce:ListCostAllocationTagBackfillHistory";
	/** [List] ce:ListCostAllocationTags */
	static readonly LIST_COST_ALLOCATION_TAGS = "ce:ListCostAllocationTags";
	/** [List] ce:ListCostCategoryDefinitions */
	static readonly LIST_COST_CATEGORY_DEFINITIONS =
		"ce:ListCostCategoryDefinitions";
	/** [List] ce:ListCostCategoryResourceAssociations */
	static readonly LIST_COST_CATEGORY_RESOURCE_ASSOCIATIONS =
		"ce:ListCostCategoryResourceAssociations";
	/** [List] ce:ListSavingsPlansPurchaseRecommendationGeneration */
	static readonly LIST_SAVINGS_PLANS_PURCHASE_RECOMMENDATION_GENERATION =
		"ce:ListSavingsPlansPurchaseRecommendationGeneration";
	/** [Read] ce:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ce:ListTagsForResource";
	/** [Write] ce:ProvideAnomalyFeedback */
	static readonly PROVIDE_ANOMALY_FEEDBACK = "ce:ProvideAnomalyFeedback";
	/** [Write] ce:StartCommitmentPurchaseAnalysis */
	static readonly START_COMMITMENT_PURCHASE_ANALYSIS =
		"ce:StartCommitmentPurchaseAnalysis";
	/** [Write] ce:StartCostAllocationTagBackfill */
	static readonly START_COST_ALLOCATION_TAG_BACKFILL =
		"ce:StartCostAllocationTagBackfill";
	/** [Write] ce:StartSavingsPlansPurchaseRecommendationGeneration */
	static readonly START_SAVINGS_PLANS_PURCHASE_RECOMMENDATION_GENERATION =
		"ce:StartSavingsPlansPurchaseRecommendationGeneration";
	/** [Tagging] ce:TagResource */
	static readonly TAG_RESOURCE = "ce:TagResource";
	/** [Tagging] ce:UntagResource */
	static readonly UNTAG_RESOURCE = "ce:UntagResource";
	/** [Write] ce:UpdateAnomalyMonitor */
	static readonly UPDATE_ANOMALY_MONITOR = "ce:UpdateAnomalyMonitor";
	/** [Write] ce:UpdateAnomalySubscription */
	static readonly UPDATE_ANOMALY_SUBSCRIPTION = "ce:UpdateAnomalySubscription";
	/** [Write] ce:UpdateConsoleActionSetEnforced */
	static readonly UPDATE_CONSOLE_ACTION_SET_ENFORCED =
		"ce:UpdateConsoleActionSetEnforced";
	/** [Write] ce:UpdateCostAllocationTagsStatus */
	static readonly UPDATE_COST_ALLOCATION_TAGS_STATUS =
		"ce:UpdateCostAllocationTagsStatus";
	/** [Write] ce:UpdateCostCategoryDefinition */
	static readonly UPDATE_COST_CATEGORY_DEFINITION =
		"ce:UpdateCostCategoryDefinition";
	/** [Write] ce:UpdateNotificationSubscription */
	static readonly UPDATE_NOTIFICATION_SUBSCRIPTION =
		"ce:UpdateNotificationSubscription";
	/** [Write] ce:UpdatePreferences */
	static readonly UPDATE_PREFERENCES = "ce:UpdatePreferences";
	/** [Write] ce:UpdateReport */
	static readonly UPDATE_REPORT = "ce:UpdateReport";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CeActions.DESCRIBE_COST_CATEGORY_DEFINITION,
		CeActions.DESCRIBE_NOTIFICATION_SUBSCRIPTION,
		CeActions.DESCRIBE_REPORT,
		CeActions.GET_ANOMALIES,
		CeActions.GET_ANOMALY_MONITORS,
		CeActions.GET_ANOMALY_SUBSCRIPTIONS,
		CeActions.GET_APPROXIMATE_USAGE_RECORDS,
		CeActions.GET_COMMITMENT_PURCHASE_ANALYSIS,
		CeActions.GET_CONSOLE_ACTION_SET_ENFORCED,
		CeActions.GET_COST_AND_USAGE,
		CeActions.GET_COST_AND_USAGE_COMPARISONS,
		CeActions.GET_COST_AND_USAGE_WITH_RESOURCES,
		CeActions.GET_COST_CATEGORIES,
		CeActions.GET_COST_COMPARISON_DRIVERS,
		CeActions.GET_COST_FORECAST,
		CeActions.GET_DIMENSION_VALUES,
		CeActions.GET_PREFERENCES,
		CeActions.GET_RESERVATION_COVERAGE,
		CeActions.GET_RESERVATION_PURCHASE_RECOMMENDATION,
		CeActions.GET_RESERVATION_UTILIZATION,
		CeActions.GET_RIGHTSIZING_RECOMMENDATION,
		CeActions.GET_SAVINGS_PLAN_PURCHASE_RECOMMENDATION_DETAILS,
		CeActions.GET_SAVINGS_PLANS_COVERAGE,
		CeActions.GET_SAVINGS_PLANS_PURCHASE_RECOMMENDATION,
		CeActions.GET_SAVINGS_PLANS_UTILIZATION,
		CeActions.GET_SAVINGS_PLANS_UTILIZATION_DETAILS,
		CeActions.GET_TAGS,
		CeActions.GET_USAGE_FORECAST,
		CeActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CeActions.CREATE_ANOMALY_MONITOR,
		CeActions.CREATE_ANOMALY_SUBSCRIPTION,
		CeActions.CREATE_COST_CATEGORY_DEFINITION,
		CeActions.CREATE_NOTIFICATION_SUBSCRIPTION,
		CeActions.CREATE_REPORT,
		CeActions.DELETE_ANOMALY_MONITOR,
		CeActions.DELETE_ANOMALY_SUBSCRIPTION,
		CeActions.DELETE_COST_CATEGORY_DEFINITION,
		CeActions.DELETE_NOTIFICATION_SUBSCRIPTION,
		CeActions.DELETE_REPORT,
		CeActions.PROVIDE_ANOMALY_FEEDBACK,
		CeActions.START_COMMITMENT_PURCHASE_ANALYSIS,
		CeActions.START_COST_ALLOCATION_TAG_BACKFILL,
		CeActions.START_SAVINGS_PLANS_PURCHASE_RECOMMENDATION_GENERATION,
		CeActions.UPDATE_ANOMALY_MONITOR,
		CeActions.UPDATE_ANOMALY_SUBSCRIPTION,
		CeActions.UPDATE_CONSOLE_ACTION_SET_ENFORCED,
		CeActions.UPDATE_COST_ALLOCATION_TAGS_STATUS,
		CeActions.UPDATE_COST_CATEGORY_DEFINITION,
		CeActions.UPDATE_NOTIFICATION_SUBSCRIPTION,
		CeActions.UPDATE_PREFERENCES,
		CeActions.UPDATE_REPORT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CeActions.LIST_COMMITMENT_PURCHASE_ANALYSES,
		CeActions.LIST_COST_ALLOCATION_TAG_BACKFILL_HISTORY,
		CeActions.LIST_COST_ALLOCATION_TAGS,
		CeActions.LIST_COST_CATEGORY_DEFINITIONS,
		CeActions.LIST_COST_CATEGORY_RESOURCE_ASSOCIATIONS,
		CeActions.LIST_SAVINGS_PLANS_PURCHASE_RECOMMENDATION_GENERATION,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CeActions.TAG_RESOURCE,
		CeActions.UNTAG_RESOURCE,
	];
}

const AnomalymonitorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ce::(?<account>[^:]*):anomalymonitor/(?<identifier>[^:/?]+)$",
);
const AnomalysubscriptionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ce::(?<account>[^:]*):anomalysubscription/(?<identifier>[^:/?]+)$",
);
const BillingviewArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):billing::(?<account>[^:]*):billingview/(?<resourceId>[^:/?]+)$",
);
const CostcategoryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ce::(?<account>[^:]*):costcategory/(?<identifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ce resources.
 */
export class CeResources {
	/**
	 * Builds an ARN for the anomalymonitor resource.
	 */
	static anomalymonitor(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ce::${props.account ?? "*"}:anomalymonitor/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the anomalymonitor resource.
	 */
	static isValidAnomalymonitorArn(arn: string): boolean {
		return AnomalymonitorArnRegex.test(arn);
	}

	/**
	 * Parses a anomalymonitor ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAnomalymonitorArn(arn: string): {
		partition: string;
		account: string;
		identifier: string;
	} {
		const match = AnomalymonitorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid anomalymonitor ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the anomalysubscription resource.
	 */
	static anomalysubscription(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ce::${props.account ?? "*"}:anomalysubscription/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the anomalysubscription resource.
	 */
	static isValidAnomalysubscriptionArn(arn: string): boolean {
		return AnomalysubscriptionArnRegex.test(arn);
	}

	/**
	 * Parses a anomalysubscription ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAnomalysubscriptionArn(arn: string): {
		partition: string;
		account: string;
		identifier: string;
	} {
		const match = AnomalysubscriptionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid anomalysubscription ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the billingview resource.
	 */
	static billingview(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:billing::${props.account ?? "*"}:billingview/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the billingview resource.
	 */
	static isValidBillingviewArn(arn: string): boolean {
		return BillingviewArnRegex.test(arn);
	}

	/**
	 * Parses a billingview ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBillingviewArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = BillingviewArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid billingview ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the costcategory resource.
	 */
	static costcategory(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ce::${props.account ?? "*"}:costcategory/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the costcategory resource.
	 */
	static isValidCostcategoryArn(arn: string): boolean {
		return CostcategoryArnRegex.test(arn);
	}

	/**
	 * Parses a costcategory ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCostcategoryArn(arn: string): {
		partition: string;
		account: string;
		identifier: string;
	} {
		const match = CostcategoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid costcategory ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ce.
 */
export class CeOperations {
	/** IAM actions required for the CreateAnomalyMonitor API call. */
	static readonly CREATE_ANOMALY_MONITOR: string[] = [
		"ce:CreateAnomalyMonitor",
		"ce:TagResource",
	];
	/** IAM actions required for the CreateAnomalySubscription API call. */
	static readonly CREATE_ANOMALY_SUBSCRIPTION: string[] = [
		"ce:CreateAnomalySubscription",
		"ce:TagResource",
	];
	/** IAM actions required for the CreateCostCategoryDefinition API call. */
	static readonly CREATE_COST_CATEGORY_DEFINITION: string[] = [
		"ce:CreateCostCategoryDefinition",
		"ce:TagResource",
	];
	/** IAM actions required for the DeleteAnomalyMonitor API call. */
	static readonly DELETE_ANOMALY_MONITOR: string[] = [
		"ce:DeleteAnomalyMonitor",
	];
	/** IAM actions required for the DeleteAnomalySubscription API call. */
	static readonly DELETE_ANOMALY_SUBSCRIPTION: string[] = [
		"ce:DeleteAnomalySubscription",
	];
	/** IAM actions required for the DeleteCostCategoryDefinition API call. */
	static readonly DELETE_COST_CATEGORY_DEFINITION: string[] = [
		"ce:DeleteCostCategoryDefinition",
	];
	/** IAM actions required for the DescribeCostCategoryDefinition API call. */
	static readonly DESCRIBE_COST_CATEGORY_DEFINITION: string[] = [
		"ce:DescribeCostCategoryDefinition",
	];
	/** IAM actions required for the GetAnomalies API call. */
	static readonly GET_ANOMALIES: string[] = ["ce:GetAnomalies"];
	/** IAM actions required for the GetAnomalyMonitors API call. */
	static readonly GET_ANOMALY_MONITORS: string[] = ["ce:GetAnomalyMonitors"];
	/** IAM actions required for the GetAnomalySubscriptions API call. */
	static readonly GET_ANOMALY_SUBSCRIPTIONS: string[] = [
		"ce:GetAnomalySubscriptions",
	];
	/** IAM actions required for the GetApproximateUsageRecords API call. */
	static readonly GET_APPROXIMATE_USAGE_RECORDS: string[] = [
		"ce:GetApproximateUsageRecords",
	];
	/** IAM actions required for the GetCommitmentPurchaseAnalysis API call. */
	static readonly GET_COMMITMENT_PURCHASE_ANALYSIS: string[] = [
		"ce:GetCommitmentPurchaseAnalysis",
	];
	/** IAM actions required for the GetCostAndUsage API call. */
	static readonly GET_COST_AND_USAGE: string[] = [
		"ce:GetCostAndUsage",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetCostAndUsageComparisons API call. */
	static readonly GET_COST_AND_USAGE_COMPARISONS: string[] = [
		"ce:GetCostAndUsageComparisons",
	];
	/** IAM actions required for the GetCostAndUsageWithResources API call. */
	static readonly GET_COST_AND_USAGE_WITH_RESOURCES: string[] = [
		"ce:GetCostAndUsageWithResources",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetCostCategories API call. */
	static readonly GET_COST_CATEGORIES: string[] = [
		"ce:GetCostCategories",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetCostComparisonDrivers API call. */
	static readonly GET_COST_COMPARISON_DRIVERS: string[] = [
		"ce:GetCostComparisonDrivers",
	];
	/** IAM actions required for the GetCostForecast API call. */
	static readonly GET_COST_FORECAST: string[] = [
		"ce:GetCostForecast",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetDimensionValues API call. */
	static readonly GET_DIMENSION_VALUES: string[] = [
		"ce:GetDimensionValues",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetReservationCoverage API call. */
	static readonly GET_RESERVATION_COVERAGE: string[] = [
		"ce:GetReservationCoverage",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetReservationPurchaseRecommendation API call. */
	static readonly GET_RESERVATION_PURCHASE_RECOMMENDATION: string[] = [
		"ce:GetReservationPurchaseRecommendation",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetReservationUtilization API call. */
	static readonly GET_RESERVATION_UTILIZATION: string[] = [
		"ce:GetReservationUtilization",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetRightsizingRecommendation API call. */
	static readonly GET_RIGHTSIZING_RECOMMENDATION: string[] = [
		"ce:GetRightsizingRecommendation",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetSavingsPlanPurchaseRecommendationDetails API call. */
	static readonly GET_SAVINGS_PLAN_PURCHASE_RECOMMENDATION_DETAILS: string[] = [
		"ce:GetSavingsPlanPurchaseRecommendationDetails",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetSavingsPlansCoverage API call. */
	static readonly GET_SAVINGS_PLANS_COVERAGE: string[] = [
		"ce:GetSavingsPlansCoverage",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetSavingsPlansPurchaseRecommendation API call. */
	static readonly GET_SAVINGS_PLANS_PURCHASE_RECOMMENDATION: string[] = [
		"ce:GetSavingsPlansPurchaseRecommendation",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetSavingsPlansUtilization API call. */
	static readonly GET_SAVINGS_PLANS_UTILIZATION: string[] = [
		"ce:GetSavingsPlansUtilization",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetSavingsPlansUtilizationDetails API call. */
	static readonly GET_SAVINGS_PLANS_UTILIZATION_DETAILS: string[] = [
		"ce:GetSavingsPlansUtilizationDetails",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetTags API call. */
	static readonly GET_TAGS: string[] = ["ce:GetTags", "aws-portal:ViewBilling"];
	/** IAM actions required for the GetUsageForecast API call. */
	static readonly GET_USAGE_FORECAST: string[] = [
		"ce:GetUsageForecast",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListCommitmentPurchaseAnalyses API call. */
	static readonly LIST_COMMITMENT_PURCHASE_ANALYSES: string[] = [
		"ce:ListCommitmentPurchaseAnalyses",
	];
	/** IAM actions required for the ListCostAllocationTagBackfillHistory API call. */
	static readonly LIST_COST_ALLOCATION_TAG_BACKFILL_HISTORY: string[] = [
		"ce:ListCostAllocationTagBackfillHistory",
	];
	/** IAM actions required for the ListCostAllocationTags API call. */
	static readonly LIST_COST_ALLOCATION_TAGS: string[] = [
		"ce:ListCostAllocationTags",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListCostCategoryDefinitions API call. */
	static readonly LIST_COST_CATEGORY_DEFINITIONS: string[] = [
		"ce:ListCostCategoryDefinitions",
	];
	/** IAM actions required for the ListCostCategoryResourceAssociations API call. */
	static readonly LIST_COST_CATEGORY_RESOURCE_ASSOCIATIONS: string[] = [
		"ce:ListCostCategoryResourceAssociations",
	];
	/** IAM actions required for the ListSavingsPlansPurchaseRecommendationGeneration API call. */
	static readonly LIST_SAVINGS_PLANS_PURCHASE_RECOMMENDATION_GENERATION: string[] =
		["ce:ListSavingsPlansPurchaseRecommendationGeneration"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = ["ce:ListTagsForResource"];
	/** IAM actions required for the ProvideAnomalyFeedback API call. */
	static readonly PROVIDE_ANOMALY_FEEDBACK: string[] = [
		"ce:ProvideAnomalyFeedback",
	];
	/** IAM actions required for the StartCommitmentPurchaseAnalysis API call. */
	static readonly START_COMMITMENT_PURCHASE_ANALYSIS: string[] = [
		"ce:StartCommitmentPurchaseAnalysis",
	];
	/** IAM actions required for the StartCostAllocationTagBackfill API call. */
	static readonly START_COST_ALLOCATION_TAG_BACKFILL: string[] = [
		"ce:StartCostAllocationTagBackfill",
	];
	/** IAM actions required for the StartSavingsPlansPurchaseRecommendationGeneration API call. */
	static readonly START_SAVINGS_PLANS_PURCHASE_RECOMMENDATION_GENERATION: string[] =
		["ce:StartSavingsPlansPurchaseRecommendationGeneration"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["ce:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["ce:UntagResource"];
	/** IAM actions required for the UpdateAnomalyMonitor API call. */
	static readonly UPDATE_ANOMALY_MONITOR: string[] = [
		"ce:UpdateAnomalyMonitor",
	];
	/** IAM actions required for the UpdateAnomalySubscription API call. */
	static readonly UPDATE_ANOMALY_SUBSCRIPTION: string[] = [
		"ce:UpdateAnomalySubscription",
	];
	/** IAM actions required for the UpdateCostAllocationTagsStatus API call. */
	static readonly UPDATE_COST_ALLOCATION_TAGS_STATUS: string[] = [
		"aws-portal:ModifyBilling",
		"ce:UpdateCostAllocationTagsStatus",
	];
	/** IAM actions required for the UpdateCostCategoryDefinition API call. */
	static readonly UPDATE_COST_CATEGORY_DEFINITION: string[] = [
		"ce:UpdateCostCategoryDefinition",
	];
}

/**
 * Condition key constants and builders for ce.
 */
export class CeConditions {
	/** Condition keys applicable to the CreateAnomalyMonitor action. */
	static readonly CREATE_ANOMALY_MONITOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAnomalySubscription action. */
	static readonly CREATE_ANOMALY_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCostCategoryDefinition action. */
	static readonly CREATE_COST_CATEGORY_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAnomalyMonitor action. */
	static readonly DELETE_ANOMALY_MONITOR_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAnomalySubscription action. */
	static readonly DELETE_ANOMALY_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteCostCategoryDefinition action. */
	static readonly DELETE_COST_CATEGORY_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCostCategoryDefinition action. */
	static readonly DESCRIBE_COST_CATEGORY_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAnomalies action. */
	static readonly GET_ANOMALIES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAnomalyMonitors action. */
	static readonly GET_ANOMALY_MONITORS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAnomalySubscriptions action. */
	static readonly GET_ANOMALY_SUBSCRIPTIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCostAndUsage action. */
	static readonly GET_COST_AND_USAGE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCostAndUsageComparisons action. */
	static readonly GET_COST_AND_USAGE_COMPARISONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCostAndUsageWithResources action. */
	static readonly GET_COST_AND_USAGE_WITH_RESOURCES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCostCategories action. */
	static readonly GET_COST_CATEGORIES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCostComparisonDrivers action. */
	static readonly GET_COST_COMPARISON_DRIVERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCostForecast action. */
	static readonly GET_COST_FORECAST_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDimensionValues action. */
	static readonly GET_DIMENSION_VALUES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetTags action. */
	static readonly GET_TAGS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetUsageForecast action. */
	static readonly GET_USAGE_FORECAST_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateAnomalyMonitor action. */
	static readonly UPDATE_ANOMALY_MONITOR_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateAnomalySubscription action. */
	static readonly UPDATE_ANOMALY_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateCostCategoryDefinition action. */
	static readonly UPDATE_COST_CATEGORY_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
