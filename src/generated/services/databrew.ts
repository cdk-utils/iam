// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/databrew.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the databrew service.
 */
export class DatabrewActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "databrew";

	/** [Write] databrew:BatchDeleteRecipeVersion */
	static readonly BATCH_DELETE_RECIPE_VERSION =
		"databrew:BatchDeleteRecipeVersion";
	/** [Write] databrew:CreateDataset */
	static readonly CREATE_DATASET = "databrew:CreateDataset";
	/** [Write] databrew:CreateProfileJob */
	static readonly CREATE_PROFILE_JOB = "databrew:CreateProfileJob";
	/** [Write] databrew:CreateProject */
	static readonly CREATE_PROJECT = "databrew:CreateProject";
	/** [Write] databrew:CreateRecipe */
	static readonly CREATE_RECIPE = "databrew:CreateRecipe";
	/** [Write] databrew:CreateRecipeJob */
	static readonly CREATE_RECIPE_JOB = "databrew:CreateRecipeJob";
	/** [Write] databrew:CreateRuleset */
	static readonly CREATE_RULESET = "databrew:CreateRuleset";
	/** [Write] databrew:CreateSchedule */
	static readonly CREATE_SCHEDULE = "databrew:CreateSchedule";
	/** [Write] databrew:DeleteDataset */
	static readonly DELETE_DATASET = "databrew:DeleteDataset";
	/** [Write] databrew:DeleteJob */
	static readonly DELETE_JOB = "databrew:DeleteJob";
	/** [Write] databrew:DeleteProject */
	static readonly DELETE_PROJECT = "databrew:DeleteProject";
	/** [Write] databrew:DeleteRecipeVersion */
	static readonly DELETE_RECIPE_VERSION = "databrew:DeleteRecipeVersion";
	/** [Write] databrew:DeleteRuleset */
	static readonly DELETE_RULESET = "databrew:DeleteRuleset";
	/** [Write] databrew:DeleteSchedule */
	static readonly DELETE_SCHEDULE = "databrew:DeleteSchedule";
	/** [Read] databrew:DescribeDataset */
	static readonly DESCRIBE_DATASET = "databrew:DescribeDataset";
	/** [Read] databrew:DescribeJob */
	static readonly DESCRIBE_JOB = "databrew:DescribeJob";
	/** [Read] databrew:DescribeJobRun */
	static readonly DESCRIBE_JOB_RUN = "databrew:DescribeJobRun";
	/** [Read] databrew:DescribeProject */
	static readonly DESCRIBE_PROJECT = "databrew:DescribeProject";
	/** [Read] databrew:DescribeRecipe */
	static readonly DESCRIBE_RECIPE = "databrew:DescribeRecipe";
	/** [Read] databrew:DescribeRuleset */
	static readonly DESCRIBE_RULESET = "databrew:DescribeRuleset";
	/** [Read] databrew:DescribeSchedule */
	static readonly DESCRIBE_SCHEDULE = "databrew:DescribeSchedule";
	/** [Read] databrew:ListDatasets */
	static readonly LIST_DATASETS = "databrew:ListDatasets";
	/** [Read] databrew:ListJobRuns */
	static readonly LIST_JOB_RUNS = "databrew:ListJobRuns";
	/** [Read] databrew:ListJobs */
	static readonly LIST_JOBS = "databrew:ListJobs";
	/** [Read] databrew:ListProjects */
	static readonly LIST_PROJECTS = "databrew:ListProjects";
	/** [Read] databrew:ListRecipeVersions */
	static readonly LIST_RECIPE_VERSIONS = "databrew:ListRecipeVersions";
	/** [Read] databrew:ListRecipes */
	static readonly LIST_RECIPES = "databrew:ListRecipes";
	/** [Read] databrew:ListRulesets */
	static readonly LIST_RULESETS = "databrew:ListRulesets";
	/** [Read] databrew:ListSchedules */
	static readonly LIST_SCHEDULES = "databrew:ListSchedules";
	/** [Read] databrew:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "databrew:ListTagsForResource";
	/** [Write] databrew:PublishRecipe */
	static readonly PUBLISH_RECIPE = "databrew:PublishRecipe";
	/** [Write] databrew:SendProjectSessionAction */
	static readonly SEND_PROJECT_SESSION_ACTION =
		"databrew:SendProjectSessionAction";
	/** [Write] databrew:StartJobRun */
	static readonly START_JOB_RUN = "databrew:StartJobRun";
	/** [Write] databrew:StartProjectSession */
	static readonly START_PROJECT_SESSION = "databrew:StartProjectSession";
	/** [Write] databrew:StopJobRun */
	static readonly STOP_JOB_RUN = "databrew:StopJobRun";
	/** [Tagging] databrew:TagResource */
	static readonly TAG_RESOURCE = "databrew:TagResource";
	/** [Tagging] databrew:UntagResource */
	static readonly UNTAG_RESOURCE = "databrew:UntagResource";
	/** [Write] databrew:UpdateDataset */
	static readonly UPDATE_DATASET = "databrew:UpdateDataset";
	/** [Write] databrew:UpdateProfileJob */
	static readonly UPDATE_PROFILE_JOB = "databrew:UpdateProfileJob";
	/** [Write] databrew:UpdateProject */
	static readonly UPDATE_PROJECT = "databrew:UpdateProject";
	/** [Write] databrew:UpdateRecipe */
	static readonly UPDATE_RECIPE = "databrew:UpdateRecipe";
	/** [Write] databrew:UpdateRecipeJob */
	static readonly UPDATE_RECIPE_JOB = "databrew:UpdateRecipeJob";
	/** [Write] databrew:UpdateRuleset */
	static readonly UPDATE_RULESET = "databrew:UpdateRuleset";
	/** [Write] databrew:UpdateSchedule */
	static readonly UPDATE_SCHEDULE = "databrew:UpdateSchedule";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DatabrewActions.DESCRIBE_DATASET,
		DatabrewActions.DESCRIBE_JOB,
		DatabrewActions.DESCRIBE_JOB_RUN,
		DatabrewActions.DESCRIBE_PROJECT,
		DatabrewActions.DESCRIBE_RECIPE,
		DatabrewActions.DESCRIBE_RULESET,
		DatabrewActions.DESCRIBE_SCHEDULE,
		DatabrewActions.LIST_DATASETS,
		DatabrewActions.LIST_JOB_RUNS,
		DatabrewActions.LIST_JOBS,
		DatabrewActions.LIST_PROJECTS,
		DatabrewActions.LIST_RECIPE_VERSIONS,
		DatabrewActions.LIST_RECIPES,
		DatabrewActions.LIST_RULESETS,
		DatabrewActions.LIST_SCHEDULES,
		DatabrewActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DatabrewActions.BATCH_DELETE_RECIPE_VERSION,
		DatabrewActions.CREATE_DATASET,
		DatabrewActions.CREATE_PROFILE_JOB,
		DatabrewActions.CREATE_PROJECT,
		DatabrewActions.CREATE_RECIPE,
		DatabrewActions.CREATE_RECIPE_JOB,
		DatabrewActions.CREATE_RULESET,
		DatabrewActions.CREATE_SCHEDULE,
		DatabrewActions.DELETE_DATASET,
		DatabrewActions.DELETE_JOB,
		DatabrewActions.DELETE_PROJECT,
		DatabrewActions.DELETE_RECIPE_VERSION,
		DatabrewActions.DELETE_RULESET,
		DatabrewActions.DELETE_SCHEDULE,
		DatabrewActions.PUBLISH_RECIPE,
		DatabrewActions.SEND_PROJECT_SESSION_ACTION,
		DatabrewActions.START_JOB_RUN,
		DatabrewActions.START_PROJECT_SESSION,
		DatabrewActions.STOP_JOB_RUN,
		DatabrewActions.UPDATE_DATASET,
		DatabrewActions.UPDATE_PROFILE_JOB,
		DatabrewActions.UPDATE_PROJECT,
		DatabrewActions.UPDATE_RECIPE,
		DatabrewActions.UPDATE_RECIPE_JOB,
		DatabrewActions.UPDATE_RULESET,
		DatabrewActions.UPDATE_SCHEDULE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DatabrewActions.TAG_RESOURCE,
		DatabrewActions.UNTAG_RESOURCE,
	];
}

const DatasetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):databrew:(?<region>[^:]*):(?<account>[^:]*):dataset/(?<resourceId>[^:/?]+)$",
);
const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):databrew:(?<region>[^:]*):(?<account>[^:]*):job/(?<resourceId>[^:/?]+)$",
);
const ProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):databrew:(?<region>[^:]*):(?<account>[^:]*):project/(?<resourceId>[^:/?]+)$",
);
const RecipeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):databrew:(?<region>[^:]*):(?<account>[^:]*):recipe/(?<resourceId>[^:/?]+)$",
);
const RulesetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):databrew:(?<region>[^:]*):(?<account>[^:]*):ruleset/(?<resourceId>[^:/?]+)$",
);
const ScheduleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):databrew:(?<region>[^:]*):(?<account>[^:]*):schedule/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for databrew resources.
 */
export class DatabrewResources {
	/**
	 * Builds an ARN for the Dataset resource.
	 */
	static dataset(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:databrew:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Dataset resource.
	 */
	static isValidDatasetArn(arn: string): boolean {
		return DatasetArnRegex.test(arn);
	}

	/**
	 * Parses a Dataset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = DatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Dataset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Job resource.
	 */
	static job(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:databrew:${props.region ?? "*"}:${props.account ?? "*"}:job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a Job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Project resource.
	 */
	static project(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:databrew:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Project resource.
	 */
	static isValidProjectArn(arn: string): boolean {
		return ProjectArnRegex.test(arn);
	}

	/**
	 * Parses a Project ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Recipe resource.
	 */
	static recipe(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:databrew:${props.region ?? "*"}:${props.account ?? "*"}:recipe/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Recipe resource.
	 */
	static isValidRecipeArn(arn: string): boolean {
		return RecipeArnRegex.test(arn);
	}

	/**
	 * Parses a Recipe ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecipeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = RecipeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Recipe ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Ruleset resource.
	 */
	static ruleset(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:databrew:${props.region ?? "*"}:${props.account ?? "*"}:ruleset/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Ruleset resource.
	 */
	static isValidRulesetArn(arn: string): boolean {
		return RulesetArnRegex.test(arn);
	}

	/**
	 * Parses a Ruleset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRulesetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = RulesetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Ruleset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Schedule resource.
	 */
	static schedule(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:databrew:${props.region ?? "*"}:${props.account ?? "*"}:schedule/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Schedule resource.
	 */
	static isValidScheduleArn(arn: string): boolean {
		return ScheduleArnRegex.test(arn);
	}

	/**
	 * Parses a Schedule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScheduleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ScheduleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Schedule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for databrew.
 */
export class DatabrewOperations {
	/** IAM actions required for the BatchDeleteRecipeVersion API call. */
	static readonly BATCH_DELETE_RECIPE_VERSION: string[] = [
		"databrew:BatchDeleteRecipeVersion",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CREATE_DATASET: string[] = [
		"databrew:CreateDataset",
		"databrew:TagResource",
	];
	/** IAM actions required for the CreateProfileJob API call. */
	static readonly CREATE_PROFILE_JOB: string[] = [
		"databrew:CreateProfileJob",
		"iam:PassRole",
		"databrew:TagResource",
	];
	/** IAM actions required for the CreateProject API call. */
	static readonly CREATE_PROJECT: string[] = [
		"databrew:CreateProject",
		"iam:PassRole",
		"databrew:TagResource",
	];
	/** IAM actions required for the CreateRecipe API call. */
	static readonly CREATE_RECIPE: string[] = [
		"databrew:CreateRecipe",
		"databrew:TagResource",
	];
	/** IAM actions required for the CreateRecipeJob API call. */
	static readonly CREATE_RECIPE_JOB: string[] = [
		"databrew:CreateRecipeJob",
		"iam:PassRole",
		"databrew:TagResource",
	];
	/** IAM actions required for the CreateRuleset API call. */
	static readonly CREATE_RULESET: string[] = [
		"databrew:CreateRuleset",
		"databrew:TagResource",
	];
	/** IAM actions required for the CreateSchedule API call. */
	static readonly CREATE_SCHEDULE: string[] = [
		"databrew:CreateSchedule",
		"databrew:TagResource",
	];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DELETE_DATASET: string[] = ["databrew:DeleteDataset"];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DELETE_JOB: string[] = ["databrew:DeleteJob"];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DELETE_PROJECT: string[] = ["databrew:DeleteProject"];
	/** IAM actions required for the DeleteRecipeVersion API call. */
	static readonly DELETE_RECIPE_VERSION: string[] = [
		"databrew:DeleteRecipeVersion",
	];
	/** IAM actions required for the DeleteRuleset API call. */
	static readonly DELETE_RULESET: string[] = ["databrew:DeleteRuleset"];
	/** IAM actions required for the DeleteSchedule API call. */
	static readonly DELETE_SCHEDULE: string[] = ["databrew:DeleteSchedule"];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DESCRIBE_DATASET: string[] = ["databrew:DescribeDataset"];
	/** IAM actions required for the DescribeJob API call. */
	static readonly DESCRIBE_JOB: string[] = ["databrew:DescribeJob"];
	/** IAM actions required for the DescribeJobRun API call. */
	static readonly DESCRIBE_JOB_RUN: string[] = ["databrew:DescribeJobRun"];
	/** IAM actions required for the DescribeProject API call. */
	static readonly DESCRIBE_PROJECT: string[] = ["databrew:DescribeProject"];
	/** IAM actions required for the DescribeRecipe API call. */
	static readonly DESCRIBE_RECIPE: string[] = ["databrew:DescribeRecipe"];
	/** IAM actions required for the DescribeRuleset API call. */
	static readonly DESCRIBE_RULESET: string[] = ["databrew:DescribeRuleset"];
	/** IAM actions required for the DescribeSchedule API call. */
	static readonly DESCRIBE_SCHEDULE: string[] = ["databrew:DescribeSchedule"];
	/** IAM actions required for the ListDatasets API call. */
	static readonly LIST_DATASETS: string[] = ["databrew:ListDatasets"];
	/** IAM actions required for the ListJobRuns API call. */
	static readonly LIST_JOB_RUNS: string[] = ["databrew:ListJobRuns"];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["databrew:ListJobs"];
	/** IAM actions required for the ListProjects API call. */
	static readonly LIST_PROJECTS: string[] = ["databrew:ListProjects"];
	/** IAM actions required for the ListRecipeVersions API call. */
	static readonly LIST_RECIPE_VERSIONS: string[] = [
		"databrew:ListRecipeVersions",
	];
	/** IAM actions required for the ListRecipes API call. */
	static readonly LIST_RECIPES: string[] = ["databrew:ListRecipes"];
	/** IAM actions required for the ListRulesets API call. */
	static readonly LIST_RULESETS: string[] = ["databrew:ListRulesets"];
	/** IAM actions required for the ListSchedules API call. */
	static readonly LIST_SCHEDULES: string[] = ["databrew:ListSchedules"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"databrew:ListTagsForResource",
	];
	/** IAM actions required for the PublishRecipe API call. */
	static readonly PUBLISH_RECIPE: string[] = ["databrew:PublishRecipe"];
	/** IAM actions required for the SendProjectSessionAction API call. */
	static readonly SEND_PROJECT_SESSION_ACTION: string[] = [
		"databrew:SendProjectSessionAction",
	];
	/** IAM actions required for the StartJobRun API call. */
	static readonly START_JOB_RUN: string[] = ["databrew:StartJobRun"];
	/** IAM actions required for the StartProjectSession API call. */
	static readonly START_PROJECT_SESSION: string[] = [
		"databrew:StartProjectSession",
	];
	/** IAM actions required for the StopJobRun API call. */
	static readonly STOP_JOB_RUN: string[] = ["databrew:StopJobRun"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["databrew:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["databrew:UntagResource"];
	/** IAM actions required for the UpdateDataset API call. */
	static readonly UPDATE_DATASET: string[] = ["databrew:UpdateDataset"];
	/** IAM actions required for the UpdateProfileJob API call. */
	static readonly UPDATE_PROFILE_JOB: string[] = [
		"iam:PassRole",
		"databrew:UpdateProfileJob",
	];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UPDATE_PROJECT: string[] = [
		"iam:PassRole",
		"databrew:UpdateProject",
	];
	/** IAM actions required for the UpdateRecipe API call. */
	static readonly UPDATE_RECIPE: string[] = ["databrew:UpdateRecipe"];
	/** IAM actions required for the UpdateRecipeJob API call. */
	static readonly UPDATE_RECIPE_JOB: string[] = [
		"iam:PassRole",
		"databrew:UpdateRecipeJob",
	];
	/** IAM actions required for the UpdateRuleset API call. */
	static readonly UPDATE_RULESET: string[] = ["databrew:UpdateRuleset"];
	/** IAM actions required for the UpdateSchedule API call. */
	static readonly UPDATE_SCHEDULE: string[] = ["databrew:UpdateSchedule"];
}

/**
 * Condition key constants and builders for databrew.
 */
export class DatabrewConditions {
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CREATE_DATASET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProfileJob action. */
	static readonly CREATE_PROFILE_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CREATE_PROJECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecipe action. */
	static readonly CREATE_RECIPE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecipeJob action. */
	static readonly CREATE_RECIPE_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRuleset action. */
	static readonly CREATE_RULESET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSchedule action. */
	static readonly CREATE_SCHEDULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
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
