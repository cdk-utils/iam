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
	static readonly ADD_WORKLOAD = "applicationinsights:AddWorkload";
	/** [Write] applicationinsights:CreateApplication */
	static readonly CREATE_APPLICATION = "applicationinsights:CreateApplication";
	/** [Write] applicationinsights:CreateComponent */
	static readonly CREATE_COMPONENT = "applicationinsights:CreateComponent";
	/** [Write] applicationinsights:CreateLogPattern */
	static readonly CREATE_LOG_PATTERN = "applicationinsights:CreateLogPattern";
	/** [Write] applicationinsights:DeleteApplication */
	static readonly DELETE_APPLICATION = "applicationinsights:DeleteApplication";
	/** [Write] applicationinsights:DeleteComponent */
	static readonly DELETE_COMPONENT = "applicationinsights:DeleteComponent";
	/** [Write] applicationinsights:DeleteLogPattern */
	static readonly DELETE_LOG_PATTERN = "applicationinsights:DeleteLogPattern";
	/** [Read] applicationinsights:DescribeApplication */
	static readonly DESCRIBE_APPLICATION =
		"applicationinsights:DescribeApplication";
	/** [Read] applicationinsights:DescribeComponent */
	static readonly DESCRIBE_COMPONENT = "applicationinsights:DescribeComponent";
	/** [Read] applicationinsights:DescribeComponentConfiguration */
	static readonly DESCRIBE_COMPONENT_CONFIGURATION =
		"applicationinsights:DescribeComponentConfiguration";
	/** [Read] applicationinsights:DescribeComponentConfigurationRecommendation */
	static readonly DESCRIBE_COMPONENT_CONFIGURATION_RECOMMENDATION =
		"applicationinsights:DescribeComponentConfigurationRecommendation";
	/** [Read] applicationinsights:DescribeLogPattern */
	static readonly DESCRIBE_LOG_PATTERN =
		"applicationinsights:DescribeLogPattern";
	/** [Read] applicationinsights:DescribeObservation */
	static readonly DESCRIBE_OBSERVATION =
		"applicationinsights:DescribeObservation";
	/** [Read] applicationinsights:DescribeProblem */
	static readonly DESCRIBE_PROBLEM = "applicationinsights:DescribeProblem";
	/** [Read] applicationinsights:DescribeProblemObservations */
	static readonly DESCRIBE_PROBLEM_OBSERVATIONS =
		"applicationinsights:DescribeProblemObservations";
	/** [Read] applicationinsights:DescribeWorkload */
	static readonly DESCRIBE_WORKLOAD = "applicationinsights:DescribeWorkload";
	/** [Write] applicationinsights:Link */
	static readonly LINK = "applicationinsights:Link";
	/** [List] applicationinsights:ListApplications */
	static readonly LIST_APPLICATIONS = "applicationinsights:ListApplications";
	/** [List] applicationinsights:ListComponents */
	static readonly LIST_COMPONENTS = "applicationinsights:ListComponents";
	/** [List] applicationinsights:ListConfigurationHistory */
	static readonly LIST_CONFIGURATION_HISTORY =
		"applicationinsights:ListConfigurationHistory";
	/** [List] applicationinsights:ListLogPatternSets */
	static readonly LIST_LOG_PATTERN_SETS =
		"applicationinsights:ListLogPatternSets";
	/** [List] applicationinsights:ListLogPatterns */
	static readonly LIST_LOG_PATTERNS = "applicationinsights:ListLogPatterns";
	/** [List] applicationinsights:ListProblems */
	static readonly LIST_PROBLEMS = "applicationinsights:ListProblems";
	/** [Read] applicationinsights:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"applicationinsights:ListTagsForResource";
	/** [List] applicationinsights:ListWorkloads */
	static readonly LIST_WORKLOADS = "applicationinsights:ListWorkloads";
	/** [Write] applicationinsights:RemoveWorkload */
	static readonly REMOVE_WORKLOAD = "applicationinsights:RemoveWorkload";
	/** [Tagging] applicationinsights:TagResource */
	static readonly TAG_RESOURCE = "applicationinsights:TagResource";
	/** [Tagging] applicationinsights:UntagResource */
	static readonly UNTAG_RESOURCE = "applicationinsights:UntagResource";
	/** [Write] applicationinsights:UpdateApplication */
	static readonly UPDATE_APPLICATION = "applicationinsights:UpdateApplication";
	/** [Write] applicationinsights:UpdateComponent */
	static readonly UPDATE_COMPONENT = "applicationinsights:UpdateComponent";
	/** [Write] applicationinsights:UpdateComponentConfiguration */
	static readonly UPDATE_COMPONENT_CONFIGURATION =
		"applicationinsights:UpdateComponentConfiguration";
	/** [Write] applicationinsights:UpdateLogPattern */
	static readonly UPDATE_LOG_PATTERN = "applicationinsights:UpdateLogPattern";
	/** [Write] applicationinsights:UpdateProblem */
	static readonly UPDATE_PROBLEM = "applicationinsights:UpdateProblem";
	/** [Write] applicationinsights:UpdateWorkload */
	static readonly UPDATE_WORKLOAD = "applicationinsights:UpdateWorkload";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ApplicationinsightsActions.DESCRIBE_APPLICATION,
		ApplicationinsightsActions.DESCRIBE_COMPONENT,
		ApplicationinsightsActions.DESCRIBE_COMPONENT_CONFIGURATION,
		ApplicationinsightsActions.DESCRIBE_COMPONENT_CONFIGURATION_RECOMMENDATION,
		ApplicationinsightsActions.DESCRIBE_LOG_PATTERN,
		ApplicationinsightsActions.DESCRIBE_OBSERVATION,
		ApplicationinsightsActions.DESCRIBE_PROBLEM,
		ApplicationinsightsActions.DESCRIBE_PROBLEM_OBSERVATIONS,
		ApplicationinsightsActions.DESCRIBE_WORKLOAD,
		ApplicationinsightsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ApplicationinsightsActions.ADD_WORKLOAD,
		ApplicationinsightsActions.CREATE_APPLICATION,
		ApplicationinsightsActions.CREATE_COMPONENT,
		ApplicationinsightsActions.CREATE_LOG_PATTERN,
		ApplicationinsightsActions.DELETE_APPLICATION,
		ApplicationinsightsActions.DELETE_COMPONENT,
		ApplicationinsightsActions.DELETE_LOG_PATTERN,
		ApplicationinsightsActions.LINK,
		ApplicationinsightsActions.REMOVE_WORKLOAD,
		ApplicationinsightsActions.UPDATE_APPLICATION,
		ApplicationinsightsActions.UPDATE_COMPONENT,
		ApplicationinsightsActions.UPDATE_COMPONENT_CONFIGURATION,
		ApplicationinsightsActions.UPDATE_LOG_PATTERN,
		ApplicationinsightsActions.UPDATE_PROBLEM,
		ApplicationinsightsActions.UPDATE_WORKLOAD,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ApplicationinsightsActions.LIST_APPLICATIONS,
		ApplicationinsightsActions.LIST_COMPONENTS,
		ApplicationinsightsActions.LIST_CONFIGURATION_HISTORY,
		ApplicationinsightsActions.LIST_LOG_PATTERN_SETS,
		ApplicationinsightsActions.LIST_LOG_PATTERNS,
		ApplicationinsightsActions.LIST_PROBLEMS,
		ApplicationinsightsActions.LIST_WORKLOADS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ApplicationinsightsActions.TAG_RESOURCE,
		ApplicationinsightsActions.UNTAG_RESOURCE,
	];
}

/**
 * API operation to required IAM actions mapping for applicationinsights.
 */
export class ApplicationinsightsOperations {
	/** IAM actions required for the AddWorkload API call. */
	static readonly ADD_WORKLOAD: string[] = [];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [];
	/** IAM actions required for the CreateComponent API call. */
	static readonly CREATE_COMPONENT: string[] = [];
	/** IAM actions required for the CreateLogPattern API call. */
	static readonly CREATE_LOG_PATTERN: string[] = [];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [];
	/** IAM actions required for the DeleteComponent API call. */
	static readonly DELETE_COMPONENT: string[] = [];
	/** IAM actions required for the DeleteLogPattern API call. */
	static readonly DELETE_LOG_PATTERN: string[] = [];
	/** IAM actions required for the DescribeApplication API call. */
	static readonly DESCRIBE_APPLICATION: string[] = [];
	/** IAM actions required for the DescribeComponent API call. */
	static readonly DESCRIBE_COMPONENT: string[] = [];
	/** IAM actions required for the DescribeComponentConfiguration API call. */
	static readonly DESCRIBE_COMPONENT_CONFIGURATION: string[] = [];
	/** IAM actions required for the DescribeComponentConfigurationRecommendation API call. */
	static readonly DESCRIBE_COMPONENT_CONFIGURATION_RECOMMENDATION: string[] =
		[];
	/** IAM actions required for the DescribeLogPattern API call. */
	static readonly DESCRIBE_LOG_PATTERN: string[] = [];
	/** IAM actions required for the DescribeObservation API call. */
	static readonly DESCRIBE_OBSERVATION: string[] = [];
	/** IAM actions required for the DescribeProblem API call. */
	static readonly DESCRIBE_PROBLEM: string[] = [];
	/** IAM actions required for the DescribeProblemObservations API call. */
	static readonly DESCRIBE_PROBLEM_OBSERVATIONS: string[] = [];
	/** IAM actions required for the DescribeWorkload API call. */
	static readonly DESCRIBE_WORKLOAD: string[] = [];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [];
	/** IAM actions required for the ListComponents API call. */
	static readonly LIST_COMPONENTS: string[] = [];
	/** IAM actions required for the ListConfigurationHistory API call. */
	static readonly LIST_CONFIGURATION_HISTORY: string[] = [];
	/** IAM actions required for the ListLogPatternSets API call. */
	static readonly LIST_LOG_PATTERN_SETS: string[] = [];
	/** IAM actions required for the ListLogPatterns API call. */
	static readonly LIST_LOG_PATTERNS: string[] = [];
	/** IAM actions required for the ListProblems API call. */
	static readonly LIST_PROBLEMS: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [];
	/** IAM actions required for the ListWorkloads API call. */
	static readonly LIST_WORKLOADS: string[] = [];
	/** IAM actions required for the RemoveWorkload API call. */
	static readonly REMOVE_WORKLOAD: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [];
	/** IAM actions required for the UpdateComponent API call. */
	static readonly UPDATE_COMPONENT: string[] = [];
	/** IAM actions required for the UpdateComponentConfiguration API call. */
	static readonly UPDATE_COMPONENT_CONFIGURATION: string[] = [];
	/** IAM actions required for the UpdateLogPattern API call. */
	static readonly UPDATE_LOG_PATTERN: string[] = [];
	/** IAM actions required for the UpdateProblem API call. */
	static readonly UPDATE_PROBLEM: string[] = [];
	/** IAM actions required for the UpdateWorkload API call. */
	static readonly UPDATE_WORKLOAD: string[] = [];
}

/**
 * Condition key constants and builders for applicationinsights.
 */
export class ApplicationinsightsConditions {
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
