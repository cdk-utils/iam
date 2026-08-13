// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/applicationinsights.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the applicationinsights service.
 */
export class ApplicationinsightsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "applicationinsights";

	/** [Write] applicationinsights:AddWorkload */
	static readonly AddWorkload = "applicationinsights:AddWorkload";
	/** [Write] applicationinsights:CreateApplication */
	static readonly CreateApplication = "applicationinsights:CreateApplication";
	/** [Write] applicationinsights:CreateComponent */
	static readonly CreateComponent = "applicationinsights:CreateComponent";
	/** [Write] applicationinsights:CreateLogPattern */
	static readonly CreateLogPattern = "applicationinsights:CreateLogPattern";
	/** [Write] applicationinsights:DeleteApplication */
	static readonly DeleteApplication = "applicationinsights:DeleteApplication";
	/** [Write] applicationinsights:DeleteComponent */
	static readonly DeleteComponent = "applicationinsights:DeleteComponent";
	/** [Write] applicationinsights:DeleteLogPattern */
	static readonly DeleteLogPattern = "applicationinsights:DeleteLogPattern";
	/** [Read] applicationinsights:DescribeApplication */
	static readonly DescribeApplication =
		"applicationinsights:DescribeApplication";
	/** [Read] applicationinsights:DescribeComponent */
	static readonly DescribeComponent = "applicationinsights:DescribeComponent";
	/** [Read] applicationinsights:DescribeComponentConfiguration */
	static readonly DescribeComponentConfiguration =
		"applicationinsights:DescribeComponentConfiguration";
	/** [Read] applicationinsights:DescribeComponentConfigurationRecommendation */
	static readonly DescribeComponentConfigurationRecommendation =
		"applicationinsights:DescribeComponentConfigurationRecommendation";
	/** [Read] applicationinsights:DescribeLogPattern */
	static readonly DescribeLogPattern = "applicationinsights:DescribeLogPattern";
	/** [Read] applicationinsights:DescribeObservation */
	static readonly DescribeObservation =
		"applicationinsights:DescribeObservation";
	/** [Read] applicationinsights:DescribeProblem */
	static readonly DescribeProblem = "applicationinsights:DescribeProblem";
	/** [Read] applicationinsights:DescribeProblemObservations */
	static readonly DescribeProblemObservations =
		"applicationinsights:DescribeProblemObservations";
	/** [Read] applicationinsights:DescribeWorkload */
	static readonly DescribeWorkload = "applicationinsights:DescribeWorkload";
	/** [Write] applicationinsights:Link */
	static readonly Link = "applicationinsights:Link";
	/** [List] applicationinsights:ListApplications */
	static readonly ListApplications = "applicationinsights:ListApplications";
	/** [List] applicationinsights:ListComponents */
	static readonly ListComponents = "applicationinsights:ListComponents";
	/** [List] applicationinsights:ListConfigurationHistory */
	static readonly ListConfigurationHistory =
		"applicationinsights:ListConfigurationHistory";
	/** [List] applicationinsights:ListLogPatternSets */
	static readonly ListLogPatternSets = "applicationinsights:ListLogPatternSets";
	/** [List] applicationinsights:ListLogPatterns */
	static readonly ListLogPatterns = "applicationinsights:ListLogPatterns";
	/** [List] applicationinsights:ListProblems */
	static readonly ListProblems = "applicationinsights:ListProblems";
	/** [Read] applicationinsights:ListTagsForResource */
	static readonly ListTagsForResource =
		"applicationinsights:ListTagsForResource";
	/** [List] applicationinsights:ListWorkloads */
	static readonly ListWorkloads = "applicationinsights:ListWorkloads";
	/** [Write] applicationinsights:RemoveWorkload */
	static readonly RemoveWorkload = "applicationinsights:RemoveWorkload";
	/** [Tagging] applicationinsights:TagResource */
	static readonly TagResource = "applicationinsights:TagResource";
	/** [Tagging] applicationinsights:UntagResource */
	static readonly UntagResource = "applicationinsights:UntagResource";
	/** [Write] applicationinsights:UpdateApplication */
	static readonly UpdateApplication = "applicationinsights:UpdateApplication";
	/** [Write] applicationinsights:UpdateComponent */
	static readonly UpdateComponent = "applicationinsights:UpdateComponent";
	/** [Write] applicationinsights:UpdateComponentConfiguration */
	static readonly UpdateComponentConfiguration =
		"applicationinsights:UpdateComponentConfiguration";
	/** [Write] applicationinsights:UpdateLogPattern */
	static readonly UpdateLogPattern = "applicationinsights:UpdateLogPattern";
	/** [Write] applicationinsights:UpdateProblem */
	static readonly UpdateProblem = "applicationinsights:UpdateProblem";
	/** [Write] applicationinsights:UpdateWorkload */
	static readonly UpdateWorkload = "applicationinsights:UpdateWorkload";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ApplicationinsightsActions.DescribeApplication,
		ApplicationinsightsActions.DescribeComponent,
		ApplicationinsightsActions.DescribeComponentConfiguration,
		ApplicationinsightsActions.DescribeComponentConfigurationRecommendation,
		ApplicationinsightsActions.DescribeLogPattern,
		ApplicationinsightsActions.DescribeObservation,
		ApplicationinsightsActions.DescribeProblem,
		ApplicationinsightsActions.DescribeProblemObservations,
		ApplicationinsightsActions.DescribeWorkload,
		ApplicationinsightsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ApplicationinsightsActions.AddWorkload,
		ApplicationinsightsActions.CreateApplication,
		ApplicationinsightsActions.CreateComponent,
		ApplicationinsightsActions.CreateLogPattern,
		ApplicationinsightsActions.DeleteApplication,
		ApplicationinsightsActions.DeleteComponent,
		ApplicationinsightsActions.DeleteLogPattern,
		ApplicationinsightsActions.Link,
		ApplicationinsightsActions.RemoveWorkload,
		ApplicationinsightsActions.UpdateApplication,
		ApplicationinsightsActions.UpdateComponent,
		ApplicationinsightsActions.UpdateComponentConfiguration,
		ApplicationinsightsActions.UpdateLogPattern,
		ApplicationinsightsActions.UpdateProblem,
		ApplicationinsightsActions.UpdateWorkload,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ApplicationinsightsActions.ListApplications,
		ApplicationinsightsActions.ListComponents,
		ApplicationinsightsActions.ListConfigurationHistory,
		ApplicationinsightsActions.ListLogPatternSets,
		ApplicationinsightsActions.ListLogPatterns,
		ApplicationinsightsActions.ListProblems,
		ApplicationinsightsActions.ListWorkloads,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ApplicationinsightsActions.TagResource,
		ApplicationinsightsActions.UntagResource,
	];
}

/**
 * API operation to required IAM actions mapping for applicationinsights.
 */
export class ApplicationinsightsOperations {
	/** IAM actions required for the AddWorkload API call. */
	static readonly AddWorkload: string[] = [];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [];
	/** IAM actions required for the CreateComponent API call. */
	static readonly CreateComponent: string[] = [];
	/** IAM actions required for the CreateLogPattern API call. */
	static readonly CreateLogPattern: string[] = [];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [];
	/** IAM actions required for the DeleteComponent API call. */
	static readonly DeleteComponent: string[] = [];
	/** IAM actions required for the DeleteLogPattern API call. */
	static readonly DeleteLogPattern: string[] = [];
	/** IAM actions required for the DescribeApplication API call. */
	static readonly DescribeApplication: string[] = [];
	/** IAM actions required for the DescribeComponent API call. */
	static readonly DescribeComponent: string[] = [];
	/** IAM actions required for the DescribeComponentConfiguration API call. */
	static readonly DescribeComponentConfiguration: string[] = [];
	/** IAM actions required for the DescribeComponentConfigurationRecommendation API call. */
	static readonly DescribeComponentConfigurationRecommendation: string[] = [];
	/** IAM actions required for the DescribeLogPattern API call. */
	static readonly DescribeLogPattern: string[] = [];
	/** IAM actions required for the DescribeObservation API call. */
	static readonly DescribeObservation: string[] = [];
	/** IAM actions required for the DescribeProblem API call. */
	static readonly DescribeProblem: string[] = [];
	/** IAM actions required for the DescribeProblemObservations API call. */
	static readonly DescribeProblemObservations: string[] = [];
	/** IAM actions required for the DescribeWorkload API call. */
	static readonly DescribeWorkload: string[] = [];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = [];
	/** IAM actions required for the ListComponents API call. */
	static readonly ListComponents: string[] = [];
	/** IAM actions required for the ListConfigurationHistory API call. */
	static readonly ListConfigurationHistory: string[] = [];
	/** IAM actions required for the ListLogPatternSets API call. */
	static readonly ListLogPatternSets: string[] = [];
	/** IAM actions required for the ListLogPatterns API call. */
	static readonly ListLogPatterns: string[] = [];
	/** IAM actions required for the ListProblems API call. */
	static readonly ListProblems: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [];
	/** IAM actions required for the ListWorkloads API call. */
	static readonly ListWorkloads: string[] = [];
	/** IAM actions required for the RemoveWorkload API call. */
	static readonly RemoveWorkload: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [];
	/** IAM actions required for the UpdateComponent API call. */
	static readonly UpdateComponent: string[] = [];
	/** IAM actions required for the UpdateComponentConfiguration API call. */
	static readonly UpdateComponentConfiguration: string[] = [];
	/** IAM actions required for the UpdateLogPattern API call. */
	static readonly UpdateLogPattern: string[] = [];
	/** IAM actions required for the UpdateProblem API call. */
	static readonly UpdateProblem: string[] = [];
	/** IAM actions required for the UpdateWorkload API call. */
	static readonly UpdateWorkload: string[] = [];
}

/**
 * Condition key constants and builders for applicationinsights.
 */
export class ApplicationinsightsConditions {
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
