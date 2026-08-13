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
	static readonly CreateAnomalyMonitor = "ce:CreateAnomalyMonitor";
	/** [Write] ce:CreateAnomalySubscription */
	static readonly CreateAnomalySubscription = "ce:CreateAnomalySubscription";
	/** [Write] ce:CreateCostCategoryDefinition */
	static readonly CreateCostCategoryDefinition =
		"ce:CreateCostCategoryDefinition";
	/** [Write] ce:CreateNotificationSubscription */
	static readonly CreateNotificationSubscription =
		"ce:CreateNotificationSubscription";
	/** [Write] ce:CreateReport */
	static readonly CreateReport = "ce:CreateReport";
	/** [Write] ce:DeleteAnomalyMonitor */
	static readonly DeleteAnomalyMonitor = "ce:DeleteAnomalyMonitor";
	/** [Write] ce:DeleteAnomalySubscription */
	static readonly DeleteAnomalySubscription = "ce:DeleteAnomalySubscription";
	/** [Write] ce:DeleteCostCategoryDefinition */
	static readonly DeleteCostCategoryDefinition =
		"ce:DeleteCostCategoryDefinition";
	/** [Write] ce:DeleteNotificationSubscription */
	static readonly DeleteNotificationSubscription =
		"ce:DeleteNotificationSubscription";
	/** [Write] ce:DeleteReport */
	static readonly DeleteReport = "ce:DeleteReport";
	/** [Read] ce:DescribeCostCategoryDefinition */
	static readonly DescribeCostCategoryDefinition =
		"ce:DescribeCostCategoryDefinition";
	/** [Read] ce:DescribeNotificationSubscription */
	static readonly DescribeNotificationSubscription =
		"ce:DescribeNotificationSubscription";
	/** [Read] ce:DescribeReport */
	static readonly DescribeReport = "ce:DescribeReport";
	/** [Read] ce:GetAnomalies */
	static readonly actionGetAnomalies = "ce:GetAnomalies";
	/** [Read] ce:GetAnomalyMonitors */
	static readonly actionGetAnomalyMonitors = "ce:GetAnomalyMonitors";
	/** [Read] ce:GetAnomalySubscriptions */
	static readonly actionGetAnomalySubscriptions = "ce:GetAnomalySubscriptions";
	/** [Read] ce:GetApproximateUsageRecords */
	static readonly actionGetApproximateUsageRecords =
		"ce:GetApproximateUsageRecords";
	/** [Read] ce:GetCommitmentPurchaseAnalysis */
	static readonly actionGetCommitmentPurchaseAnalysis =
		"ce:GetCommitmentPurchaseAnalysis";
	/** [Read] ce:GetConsoleActionSetEnforced */
	static readonly actionGetConsoleActionSetEnforced =
		"ce:GetConsoleActionSetEnforced";
	/** [Read] ce:GetCostAndUsage */
	static readonly actionGetCostAndUsage = "ce:GetCostAndUsage";
	/** [Read] ce:GetCostAndUsageComparisons */
	static readonly actionGetCostAndUsageComparisons =
		"ce:GetCostAndUsageComparisons";
	/** [Read] ce:GetCostAndUsageWithResources */
	static readonly actionGetCostAndUsageWithResources =
		"ce:GetCostAndUsageWithResources";
	/** [Read] ce:GetCostCategories */
	static readonly actionGetCostCategories = "ce:GetCostCategories";
	/** [Read] ce:GetCostComparisonDrivers */
	static readonly actionGetCostComparisonDrivers =
		"ce:GetCostComparisonDrivers";
	/** [Read] ce:GetCostForecast */
	static readonly actionGetCostForecast = "ce:GetCostForecast";
	/** [Read] ce:GetDimensionValues */
	static readonly actionGetDimensionValues = "ce:GetDimensionValues";
	/** [Read] ce:GetPreferences */
	static readonly actionGetPreferences = "ce:GetPreferences";
	/** [Read] ce:GetReservationCoverage */
	static readonly actionGetReservationCoverage = "ce:GetReservationCoverage";
	/** [Read] ce:GetReservationPurchaseRecommendation */
	static readonly actionGetReservationPurchaseRecommendation =
		"ce:GetReservationPurchaseRecommendation";
	/** [Read] ce:GetReservationUtilization */
	static readonly actionGetReservationUtilization =
		"ce:GetReservationUtilization";
	/** [Read] ce:GetRightsizingRecommendation */
	static readonly actionGetRightsizingRecommendation =
		"ce:GetRightsizingRecommendation";
	/** [Read] ce:GetSavingsPlanPurchaseRecommendationDetails */
	static readonly actionGetSavingsPlanPurchaseRecommendationDetails =
		"ce:GetSavingsPlanPurchaseRecommendationDetails";
	/** [Read] ce:GetSavingsPlansCoverage */
	static readonly actionGetSavingsPlansCoverage = "ce:GetSavingsPlansCoverage";
	/** [Read] ce:GetSavingsPlansPurchaseRecommendation */
	static readonly actionGetSavingsPlansPurchaseRecommendation =
		"ce:GetSavingsPlansPurchaseRecommendation";
	/** [Read] ce:GetSavingsPlansUtilization */
	static readonly actionGetSavingsPlansUtilization =
		"ce:GetSavingsPlansUtilization";
	/** [Read] ce:GetSavingsPlansUtilizationDetails */
	static readonly actionGetSavingsPlansUtilizationDetails =
		"ce:GetSavingsPlansUtilizationDetails";
	/** [Read] ce:GetTags */
	static readonly actionGetTags = "ce:GetTags";
	/** [Read] ce:GetUsageForecast */
	static readonly actionGetUsageForecast = "ce:GetUsageForecast";
	/** [List] ce:ListCommitmentPurchaseAnalyses */
	static readonly ListCommitmentPurchaseAnalyses =
		"ce:ListCommitmentPurchaseAnalyses";
	/** [List] ce:ListCostAllocationTagBackfillHistory */
	static readonly ListCostAllocationTagBackfillHistory =
		"ce:ListCostAllocationTagBackfillHistory";
	/** [List] ce:ListCostAllocationTags */
	static readonly ListCostAllocationTags = "ce:ListCostAllocationTags";
	/** [List] ce:ListCostCategoryDefinitions */
	static readonly ListCostCategoryDefinitions =
		"ce:ListCostCategoryDefinitions";
	/** [List] ce:ListCostCategoryResourceAssociations */
	static readonly ListCostCategoryResourceAssociations =
		"ce:ListCostCategoryResourceAssociations";
	/** [List] ce:ListSavingsPlansPurchaseRecommendationGeneration */
	static readonly ListSavingsPlansPurchaseRecommendationGeneration =
		"ce:ListSavingsPlansPurchaseRecommendationGeneration";
	/** [Read] ce:ListTagsForResource */
	static readonly ListTagsForResource = "ce:ListTagsForResource";
	/** [Write] ce:ProvideAnomalyFeedback */
	static readonly ProvideAnomalyFeedback = "ce:ProvideAnomalyFeedback";
	/** [Write] ce:StartCommitmentPurchaseAnalysis */
	static readonly StartCommitmentPurchaseAnalysis =
		"ce:StartCommitmentPurchaseAnalysis";
	/** [Write] ce:StartCostAllocationTagBackfill */
	static readonly StartCostAllocationTagBackfill =
		"ce:StartCostAllocationTagBackfill";
	/** [Write] ce:StartSavingsPlansPurchaseRecommendationGeneration */
	static readonly StartSavingsPlansPurchaseRecommendationGeneration =
		"ce:StartSavingsPlansPurchaseRecommendationGeneration";
	/** [Tagging] ce:TagResource */
	static readonly TagResource = "ce:TagResource";
	/** [Tagging] ce:UntagResource */
	static readonly UntagResource = "ce:UntagResource";
	/** [Write] ce:UpdateAnomalyMonitor */
	static readonly UpdateAnomalyMonitor = "ce:UpdateAnomalyMonitor";
	/** [Write] ce:UpdateAnomalySubscription */
	static readonly UpdateAnomalySubscription = "ce:UpdateAnomalySubscription";
	/** [Write] ce:UpdateConsoleActionSetEnforced */
	static readonly UpdateConsoleActionSetEnforced =
		"ce:UpdateConsoleActionSetEnforced";
	/** [Write] ce:UpdateCostAllocationTagsStatus */
	static readonly UpdateCostAllocationTagsStatus =
		"ce:UpdateCostAllocationTagsStatus";
	/** [Write] ce:UpdateCostCategoryDefinition */
	static readonly UpdateCostCategoryDefinition =
		"ce:UpdateCostCategoryDefinition";
	/** [Write] ce:UpdateNotificationSubscription */
	static readonly UpdateNotificationSubscription =
		"ce:UpdateNotificationSubscription";
	/** [Write] ce:UpdatePreferences */
	static readonly UpdatePreferences = "ce:UpdatePreferences";
	/** [Write] ce:UpdateReport */
	static readonly UpdateReport = "ce:UpdateReport";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CeActions.DescribeCostCategoryDefinition,
		CeActions.DescribeNotificationSubscription,
		CeActions.DescribeReport,
		CeActions.actionGetAnomalies,
		CeActions.actionGetAnomalyMonitors,
		CeActions.actionGetAnomalySubscriptions,
		CeActions.actionGetApproximateUsageRecords,
		CeActions.actionGetCommitmentPurchaseAnalysis,
		CeActions.actionGetConsoleActionSetEnforced,
		CeActions.actionGetCostAndUsage,
		CeActions.actionGetCostAndUsageComparisons,
		CeActions.actionGetCostAndUsageWithResources,
		CeActions.actionGetCostCategories,
		CeActions.actionGetCostComparisonDrivers,
		CeActions.actionGetCostForecast,
		CeActions.actionGetDimensionValues,
		CeActions.actionGetPreferences,
		CeActions.actionGetReservationCoverage,
		CeActions.actionGetReservationPurchaseRecommendation,
		CeActions.actionGetReservationUtilization,
		CeActions.actionGetRightsizingRecommendation,
		CeActions.actionGetSavingsPlanPurchaseRecommendationDetails,
		CeActions.actionGetSavingsPlansCoverage,
		CeActions.actionGetSavingsPlansPurchaseRecommendation,
		CeActions.actionGetSavingsPlansUtilization,
		CeActions.actionGetSavingsPlansUtilizationDetails,
		CeActions.actionGetTags,
		CeActions.actionGetUsageForecast,
		CeActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CeActions.CreateAnomalyMonitor,
		CeActions.CreateAnomalySubscription,
		CeActions.CreateCostCategoryDefinition,
		CeActions.CreateNotificationSubscription,
		CeActions.CreateReport,
		CeActions.DeleteAnomalyMonitor,
		CeActions.DeleteAnomalySubscription,
		CeActions.DeleteCostCategoryDefinition,
		CeActions.DeleteNotificationSubscription,
		CeActions.DeleteReport,
		CeActions.ProvideAnomalyFeedback,
		CeActions.StartCommitmentPurchaseAnalysis,
		CeActions.StartCostAllocationTagBackfill,
		CeActions.StartSavingsPlansPurchaseRecommendationGeneration,
		CeActions.UpdateAnomalyMonitor,
		CeActions.UpdateAnomalySubscription,
		CeActions.UpdateConsoleActionSetEnforced,
		CeActions.UpdateCostAllocationTagsStatus,
		CeActions.UpdateCostCategoryDefinition,
		CeActions.UpdateNotificationSubscription,
		CeActions.UpdatePreferences,
		CeActions.UpdateReport,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CeActions.ListCommitmentPurchaseAnalyses,
		CeActions.ListCostAllocationTagBackfillHistory,
		CeActions.ListCostAllocationTags,
		CeActions.ListCostCategoryDefinitions,
		CeActions.ListCostCategoryResourceAssociations,
		CeActions.ListSavingsPlansPurchaseRecommendationGeneration,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CeActions.TagResource,
		CeActions.UntagResource,
	];
}

/**
 * Properties for building a anomalymonitor ARN.
 */
export interface CeAnomalymonitorArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a anomalymonitor ARN.
 */
export interface CeAnomalymonitorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

/**
 * Properties for building a anomalysubscription ARN.
 */
export interface CeAnomalysubscriptionArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a anomalysubscription ARN.
 */
export interface CeAnomalysubscriptionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

/**
 * Properties for building a billingview ARN.
 */
export interface CeBillingviewArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a billingview ARN.
 */
export interface CeBillingviewArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a costcategory ARN.
 */
export interface CeCostcategoryArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a costcategory ARN.
 */
export interface CeCostcategoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

const AnomalymonitorArnRegex =
	/^arn:(?<partition>[^:]+):ce::(?<account>[^:]*):anomalymonitor\/(?<identifier>[^:/?]+)$/;
const AnomalysubscriptionArnRegex =
	/^arn:(?<partition>[^:]+):ce::(?<account>[^:]*):anomalysubscription\/(?<identifier>[^:/?]+)$/;
const BillingviewArnRegex =
	/^arn:(?<partition>[^:]+):billing::(?<account>[^:]*):billingview\/(?<resourceId>[^:/?]+)$/;
const CostcategoryArnRegex =
	/^arn:(?<partition>[^:]+):ce::(?<account>[^:]*):costcategory\/(?<identifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ce resources.
 */
export class CeResources {
	/**
	 * Builds an ARN for the anomalymonitor resource.
	 */
	static anomalymonitor(props: CeAnomalymonitorArnProps): string {
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
	static parseAnomalymonitorArn(arn: string): CeAnomalymonitorArnComponents {
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
	static anomalysubscription(props: CeAnomalysubscriptionArnProps): string {
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
	static parseAnomalysubscriptionArn(
		arn: string,
	): CeAnomalysubscriptionArnComponents {
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
	static billingview(props: CeBillingviewArnProps): string {
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
	static parseBillingviewArn(arn: string): CeBillingviewArnComponents {
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
	static costcategory(props: CeCostcategoryArnProps): string {
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
	static parseCostcategoryArn(arn: string): CeCostcategoryArnComponents {
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
	static readonly CreateAnomalyMonitor: string[] = [
		"ce:CreateAnomalyMonitor",
		"ce:TagResource",
	];
	/** IAM actions required for the CreateAnomalySubscription API call. */
	static readonly CreateAnomalySubscription: string[] = [
		"ce:CreateAnomalySubscription",
		"ce:TagResource",
	];
	/** IAM actions required for the CreateCostCategoryDefinition API call. */
	static readonly CreateCostCategoryDefinition: string[] = [
		"ce:CreateCostCategoryDefinition",
		"ce:TagResource",
	];
	/** IAM actions required for the DeleteAnomalyMonitor API call. */
	static readonly DeleteAnomalyMonitor: string[] = ["ce:DeleteAnomalyMonitor"];
	/** IAM actions required for the DeleteAnomalySubscription API call. */
	static readonly DeleteAnomalySubscription: string[] = [
		"ce:DeleteAnomalySubscription",
	];
	/** IAM actions required for the DeleteCostCategoryDefinition API call. */
	static readonly DeleteCostCategoryDefinition: string[] = [
		"ce:DeleteCostCategoryDefinition",
	];
	/** IAM actions required for the DescribeCostCategoryDefinition API call. */
	static readonly DescribeCostCategoryDefinition: string[] = [
		"ce:DescribeCostCategoryDefinition",
	];
	/** IAM actions required for the GetAnomalies API call. */
	static readonly opGetAnomalies: string[] = ["ce:GetAnomalies"];
	/** IAM actions required for the GetAnomalyMonitors API call. */
	static readonly opGetAnomalyMonitors: string[] = ["ce:GetAnomalyMonitors"];
	/** IAM actions required for the GetAnomalySubscriptions API call. */
	static readonly opGetAnomalySubscriptions: string[] = [
		"ce:GetAnomalySubscriptions",
	];
	/** IAM actions required for the GetApproximateUsageRecords API call. */
	static readonly opGetApproximateUsageRecords: string[] = [
		"ce:GetApproximateUsageRecords",
	];
	/** IAM actions required for the GetCommitmentPurchaseAnalysis API call. */
	static readonly opGetCommitmentPurchaseAnalysis: string[] = [
		"ce:GetCommitmentPurchaseAnalysis",
	];
	/** IAM actions required for the GetCostAndUsage API call. */
	static readonly opGetCostAndUsage: string[] = [
		"ce:GetCostAndUsage",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetCostAndUsageComparisons API call. */
	static readonly opGetCostAndUsageComparisons: string[] = [
		"ce:GetCostAndUsageComparisons",
	];
	/** IAM actions required for the GetCostAndUsageWithResources API call. */
	static readonly opGetCostAndUsageWithResources: string[] = [
		"ce:GetCostAndUsageWithResources",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetCostCategories API call. */
	static readonly opGetCostCategories: string[] = [
		"ce:GetCostCategories",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetCostComparisonDrivers API call. */
	static readonly opGetCostComparisonDrivers: string[] = [
		"ce:GetCostComparisonDrivers",
	];
	/** IAM actions required for the GetCostForecast API call. */
	static readonly opGetCostForecast: string[] = [
		"ce:GetCostForecast",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetDimensionValues API call. */
	static readonly opGetDimensionValues: string[] = [
		"ce:GetDimensionValues",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetReservationCoverage API call. */
	static readonly opGetReservationCoverage: string[] = [
		"ce:GetReservationCoverage",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetReservationPurchaseRecommendation API call. */
	static readonly opGetReservationPurchaseRecommendation: string[] = [
		"ce:GetReservationPurchaseRecommendation",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetReservationUtilization API call. */
	static readonly opGetReservationUtilization: string[] = [
		"ce:GetReservationUtilization",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetRightsizingRecommendation API call. */
	static readonly opGetRightsizingRecommendation: string[] = [
		"ce:GetRightsizingRecommendation",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetSavingsPlanPurchaseRecommendationDetails API call. */
	static readonly opGetSavingsPlanPurchaseRecommendationDetails: string[] = [
		"ce:GetSavingsPlanPurchaseRecommendationDetails",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetSavingsPlansCoverage API call. */
	static readonly opGetSavingsPlansCoverage: string[] = [
		"ce:GetSavingsPlansCoverage",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetSavingsPlansPurchaseRecommendation API call. */
	static readonly opGetSavingsPlansPurchaseRecommendation: string[] = [
		"ce:GetSavingsPlansPurchaseRecommendation",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetSavingsPlansUtilization API call. */
	static readonly opGetSavingsPlansUtilization: string[] = [
		"ce:GetSavingsPlansUtilization",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetSavingsPlansUtilizationDetails API call. */
	static readonly opGetSavingsPlansUtilizationDetails: string[] = [
		"ce:GetSavingsPlansUtilizationDetails",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetTags API call. */
	static readonly opGetTags: string[] = [
		"ce:GetTags",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetUsageForecast API call. */
	static readonly opGetUsageForecast: string[] = [
		"ce:GetUsageForecast",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListCommitmentPurchaseAnalyses API call. */
	static readonly ListCommitmentPurchaseAnalyses: string[] = [
		"ce:ListCommitmentPurchaseAnalyses",
	];
	/** IAM actions required for the ListCostAllocationTagBackfillHistory API call. */
	static readonly ListCostAllocationTagBackfillHistory: string[] = [
		"ce:ListCostAllocationTagBackfillHistory",
	];
	/** IAM actions required for the ListCostAllocationTags API call. */
	static readonly ListCostAllocationTags: string[] = [
		"ce:ListCostAllocationTags",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListCostCategoryDefinitions API call. */
	static readonly ListCostCategoryDefinitions: string[] = [
		"ce:ListCostCategoryDefinitions",
	];
	/** IAM actions required for the ListCostCategoryResourceAssociations API call. */
	static readonly ListCostCategoryResourceAssociations: string[] = [
		"ce:ListCostCategoryResourceAssociations",
	];
	/** IAM actions required for the ListSavingsPlansPurchaseRecommendationGeneration API call. */
	static readonly ListSavingsPlansPurchaseRecommendationGeneration: string[] = [
		"ce:ListSavingsPlansPurchaseRecommendationGeneration",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["ce:ListTagsForResource"];
	/** IAM actions required for the ProvideAnomalyFeedback API call. */
	static readonly ProvideAnomalyFeedback: string[] = [
		"ce:ProvideAnomalyFeedback",
	];
	/** IAM actions required for the StartCommitmentPurchaseAnalysis API call. */
	static readonly StartCommitmentPurchaseAnalysis: string[] = [
		"ce:StartCommitmentPurchaseAnalysis",
	];
	/** IAM actions required for the StartCostAllocationTagBackfill API call. */
	static readonly StartCostAllocationTagBackfill: string[] = [
		"ce:StartCostAllocationTagBackfill",
	];
	/** IAM actions required for the StartSavingsPlansPurchaseRecommendationGeneration API call. */
	static readonly StartSavingsPlansPurchaseRecommendationGeneration: string[] =
		["ce:StartSavingsPlansPurchaseRecommendationGeneration"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["ce:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["ce:UntagResource"];
	/** IAM actions required for the UpdateAnomalyMonitor API call. */
	static readonly UpdateAnomalyMonitor: string[] = ["ce:UpdateAnomalyMonitor"];
	/** IAM actions required for the UpdateAnomalySubscription API call. */
	static readonly UpdateAnomalySubscription: string[] = [
		"ce:UpdateAnomalySubscription",
	];
	/** IAM actions required for the UpdateCostAllocationTagsStatus API call. */
	static readonly UpdateCostAllocationTagsStatus: string[] = [
		"aws-portal:ModifyBilling",
		"ce:UpdateCostAllocationTagsStatus",
	];
	/** IAM actions required for the UpdateCostCategoryDefinition API call. */
	static readonly UpdateCostCategoryDefinition: string[] = [
		"ce:UpdateCostCategoryDefinition",
	];
}

/**
 * Condition key constants and builders for ce.
 */
export class CeConditions {
	/** Condition keys applicable to the CreateAnomalyMonitor action. */
	static readonly CreateAnomalyMonitorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAnomalySubscription action. */
	static readonly CreateAnomalySubscriptionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCostCategoryDefinition action. */
	static readonly CreateCostCategoryDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAnomalyMonitor action. */
	static readonly DeleteAnomalyMonitorConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAnomalySubscription action. */
	static readonly DeleteAnomalySubscriptionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteCostCategoryDefinition action. */
	static readonly DeleteCostCategoryDefinitionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCostCategoryDefinition action. */
	static readonly DescribeCostCategoryDefinitionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAnomalies action. */
	static readonly actionGetAnomaliesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAnomalyMonitors action. */
	static readonly actionGetAnomalyMonitorsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAnomalySubscriptions action. */
	static readonly actionGetAnomalySubscriptionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCostAndUsage action. */
	static readonly actionGetCostAndUsageConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCostAndUsageComparisons action. */
	static readonly actionGetCostAndUsageComparisonsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCostAndUsageWithResources action. */
	static readonly actionGetCostAndUsageWithResourcesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCostCategories action. */
	static readonly actionGetCostCategoriesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCostComparisonDrivers action. */
	static readonly actionGetCostComparisonDriversConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCostForecast action. */
	static readonly actionGetCostForecastConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDimensionValues action. */
	static readonly actionGetDimensionValuesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetTags action. */
	static readonly actionGetTagsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetUsageForecast action. */
	static readonly actionGetUsageForecastConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateAnomalyMonitor action. */
	static readonly UpdateAnomalyMonitorConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateAnomalySubscription action. */
	static readonly UpdateAnomalySubscriptionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateCostCategoryDefinition action. */
	static readonly UpdateCostCategoryDefinitionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
