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
	static readonly BatchDeleteRecipeVersion =
		"databrew:BatchDeleteRecipeVersion";
	/** [Write] databrew:CreateDataset */
	static readonly CreateDataset = "databrew:CreateDataset";
	/** [Write] databrew:CreateProfileJob */
	static readonly CreateProfileJob = "databrew:CreateProfileJob";
	/** [Write] databrew:CreateProject */
	static readonly CreateProject = "databrew:CreateProject";
	/** [Write] databrew:CreateRecipe */
	static readonly CreateRecipe = "databrew:CreateRecipe";
	/** [Write] databrew:CreateRecipeJob */
	static readonly CreateRecipeJob = "databrew:CreateRecipeJob";
	/** [Write] databrew:CreateRuleset */
	static readonly CreateRuleset = "databrew:CreateRuleset";
	/** [Write] databrew:CreateSchedule */
	static readonly CreateSchedule = "databrew:CreateSchedule";
	/** [Write] databrew:DeleteDataset */
	static readonly DeleteDataset = "databrew:DeleteDataset";
	/** [Write] databrew:DeleteJob */
	static readonly DeleteJob = "databrew:DeleteJob";
	/** [Write] databrew:DeleteProject */
	static readonly DeleteProject = "databrew:DeleteProject";
	/** [Write] databrew:DeleteRecipeVersion */
	static readonly DeleteRecipeVersion = "databrew:DeleteRecipeVersion";
	/** [Write] databrew:DeleteRuleset */
	static readonly DeleteRuleset = "databrew:DeleteRuleset";
	/** [Write] databrew:DeleteSchedule */
	static readonly DeleteSchedule = "databrew:DeleteSchedule";
	/** [Read] databrew:DescribeDataset */
	static readonly DescribeDataset = "databrew:DescribeDataset";
	/** [Read] databrew:DescribeJob */
	static readonly DescribeJob = "databrew:DescribeJob";
	/** [Read] databrew:DescribeJobRun */
	static readonly DescribeJobRun = "databrew:DescribeJobRun";
	/** [Read] databrew:DescribeProject */
	static readonly DescribeProject = "databrew:DescribeProject";
	/** [Read] databrew:DescribeRecipe */
	static readonly DescribeRecipe = "databrew:DescribeRecipe";
	/** [Read] databrew:DescribeRuleset */
	static readonly DescribeRuleset = "databrew:DescribeRuleset";
	/** [Read] databrew:DescribeSchedule */
	static readonly DescribeSchedule = "databrew:DescribeSchedule";
	/** [Read] databrew:ListDatasets */
	static readonly ListDatasets = "databrew:ListDatasets";
	/** [Read] databrew:ListJobRuns */
	static readonly ListJobRuns = "databrew:ListJobRuns";
	/** [Read] databrew:ListJobs */
	static readonly ListJobs = "databrew:ListJobs";
	/** [Read] databrew:ListProjects */
	static readonly ListProjects = "databrew:ListProjects";
	/** [Read] databrew:ListRecipeVersions */
	static readonly ListRecipeVersions = "databrew:ListRecipeVersions";
	/** [Read] databrew:ListRecipes */
	static readonly ListRecipes = "databrew:ListRecipes";
	/** [Read] databrew:ListRulesets */
	static readonly ListRulesets = "databrew:ListRulesets";
	/** [Read] databrew:ListSchedules */
	static readonly ListSchedules = "databrew:ListSchedules";
	/** [Read] databrew:ListTagsForResource */
	static readonly ListTagsForResource = "databrew:ListTagsForResource";
	/** [Write] databrew:PublishRecipe */
	static readonly PublishRecipe = "databrew:PublishRecipe";
	/** [Write] databrew:SendProjectSessionAction */
	static readonly SendProjectSessionAction =
		"databrew:SendProjectSessionAction";
	/** [Write] databrew:StartJobRun */
	static readonly StartJobRun = "databrew:StartJobRun";
	/** [Write] databrew:StartProjectSession */
	static readonly StartProjectSession = "databrew:StartProjectSession";
	/** [Write] databrew:StopJobRun */
	static readonly StopJobRun = "databrew:StopJobRun";
	/** [Tagging] databrew:TagResource */
	static readonly TagResource = "databrew:TagResource";
	/** [Tagging] databrew:UntagResource */
	static readonly UntagResource = "databrew:UntagResource";
	/** [Write] databrew:UpdateDataset */
	static readonly UpdateDataset = "databrew:UpdateDataset";
	/** [Write] databrew:UpdateProfileJob */
	static readonly UpdateProfileJob = "databrew:UpdateProfileJob";
	/** [Write] databrew:UpdateProject */
	static readonly UpdateProject = "databrew:UpdateProject";
	/** [Write] databrew:UpdateRecipe */
	static readonly UpdateRecipe = "databrew:UpdateRecipe";
	/** [Write] databrew:UpdateRecipeJob */
	static readonly UpdateRecipeJob = "databrew:UpdateRecipeJob";
	/** [Write] databrew:UpdateRuleset */
	static readonly UpdateRuleset = "databrew:UpdateRuleset";
	/** [Write] databrew:UpdateSchedule */
	static readonly UpdateSchedule = "databrew:UpdateSchedule";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DatabrewActions.DescribeDataset,
		DatabrewActions.DescribeJob,
		DatabrewActions.DescribeJobRun,
		DatabrewActions.DescribeProject,
		DatabrewActions.DescribeRecipe,
		DatabrewActions.DescribeRuleset,
		DatabrewActions.DescribeSchedule,
		DatabrewActions.ListDatasets,
		DatabrewActions.ListJobRuns,
		DatabrewActions.ListJobs,
		DatabrewActions.ListProjects,
		DatabrewActions.ListRecipeVersions,
		DatabrewActions.ListRecipes,
		DatabrewActions.ListRulesets,
		DatabrewActions.ListSchedules,
		DatabrewActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DatabrewActions.BatchDeleteRecipeVersion,
		DatabrewActions.CreateDataset,
		DatabrewActions.CreateProfileJob,
		DatabrewActions.CreateProject,
		DatabrewActions.CreateRecipe,
		DatabrewActions.CreateRecipeJob,
		DatabrewActions.CreateRuleset,
		DatabrewActions.CreateSchedule,
		DatabrewActions.DeleteDataset,
		DatabrewActions.DeleteJob,
		DatabrewActions.DeleteProject,
		DatabrewActions.DeleteRecipeVersion,
		DatabrewActions.DeleteRuleset,
		DatabrewActions.DeleteSchedule,
		DatabrewActions.PublishRecipe,
		DatabrewActions.SendProjectSessionAction,
		DatabrewActions.StartJobRun,
		DatabrewActions.StartProjectSession,
		DatabrewActions.StopJobRun,
		DatabrewActions.UpdateDataset,
		DatabrewActions.UpdateProfileJob,
		DatabrewActions.UpdateProject,
		DatabrewActions.UpdateRecipe,
		DatabrewActions.UpdateRecipeJob,
		DatabrewActions.UpdateRuleset,
		DatabrewActions.UpdateSchedule,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DatabrewActions.TagResource,
		DatabrewActions.UntagResource,
	];
}

/**
 * Properties for building a Dataset ARN.
 */
export interface DatabrewDatasetArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Dataset ARN.
 */
export interface DatabrewDatasetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a Job ARN.
 */
export interface DatabrewJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Job ARN.
 */
export interface DatabrewJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a Project ARN.
 */
export interface DatabrewProjectArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Project ARN.
 */
export interface DatabrewProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a Recipe ARN.
 */
export interface DatabrewRecipeArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Recipe ARN.
 */
export interface DatabrewRecipeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a Ruleset ARN.
 */
export interface DatabrewRulesetArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Ruleset ARN.
 */
export interface DatabrewRulesetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a Schedule ARN.
 */
export interface DatabrewScheduleArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Schedule ARN.
 */
export interface DatabrewScheduleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):databrew:(?<region>[^:]*):(?<account>[^:]*):dataset\/(?<resourceId>[^:/?]+)$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):databrew:(?<region>[^:]*):(?<account>[^:]*):job\/(?<resourceId>[^:/?]+)$/;
const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):databrew:(?<region>[^:]*):(?<account>[^:]*):project\/(?<resourceId>[^:/?]+)$/;
const RecipeArnRegex =
	/^arn:(?<partition>[^:]+):databrew:(?<region>[^:]*):(?<account>[^:]*):recipe\/(?<resourceId>[^:/?]+)$/;
const RulesetArnRegex =
	/^arn:(?<partition>[^:]+):databrew:(?<region>[^:]*):(?<account>[^:]*):ruleset\/(?<resourceId>[^:/?]+)$/;
const ScheduleArnRegex =
	/^arn:(?<partition>[^:]+):databrew:(?<region>[^:]*):(?<account>[^:]*):schedule\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for databrew resources.
 */
export class DatabrewResources {
	/**
	 * Builds an ARN for the Dataset resource.
	 */
	static dataset(props: DatabrewDatasetArnProps): string {
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
	static parseDatasetArn(arn: string): DatabrewDatasetArnComponents {
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
	static job(props: DatabrewJobArnProps): string {
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
	static parseJobArn(arn: string): DatabrewJobArnComponents {
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
	static project(props: DatabrewProjectArnProps): string {
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
	static parseProjectArn(arn: string): DatabrewProjectArnComponents {
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
	static recipe(props: DatabrewRecipeArnProps): string {
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
	static parseRecipeArn(arn: string): DatabrewRecipeArnComponents {
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
	static ruleset(props: DatabrewRulesetArnProps): string {
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
	static parseRulesetArn(arn: string): DatabrewRulesetArnComponents {
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
	static schedule(props: DatabrewScheduleArnProps): string {
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
	static parseScheduleArn(arn: string): DatabrewScheduleArnComponents {
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
	static readonly BatchDeleteRecipeVersion: string[] = [
		"databrew:BatchDeleteRecipeVersion",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CreateDataset: string[] = [
		"databrew:CreateDataset",
		"databrew:TagResource",
	];
	/** IAM actions required for the CreateProfileJob API call. */
	static readonly CreateProfileJob: string[] = [
		"databrew:CreateProfileJob",
		"iam:PassRole",
		"databrew:TagResource",
	];
	/** IAM actions required for the CreateProject API call. */
	static readonly CreateProject: string[] = [
		"databrew:CreateProject",
		"iam:PassRole",
		"databrew:TagResource",
	];
	/** IAM actions required for the CreateRecipe API call. */
	static readonly CreateRecipe: string[] = [
		"databrew:CreateRecipe",
		"databrew:TagResource",
	];
	/** IAM actions required for the CreateRecipeJob API call. */
	static readonly CreateRecipeJob: string[] = [
		"databrew:CreateRecipeJob",
		"iam:PassRole",
		"databrew:TagResource",
	];
	/** IAM actions required for the CreateRuleset API call. */
	static readonly CreateRuleset: string[] = [
		"databrew:CreateRuleset",
		"databrew:TagResource",
	];
	/** IAM actions required for the CreateSchedule API call. */
	static readonly CreateSchedule: string[] = [
		"databrew:CreateSchedule",
		"databrew:TagResource",
	];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DeleteDataset: string[] = ["databrew:DeleteDataset"];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DeleteJob: string[] = ["databrew:DeleteJob"];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DeleteProject: string[] = ["databrew:DeleteProject"];
	/** IAM actions required for the DeleteRecipeVersion API call. */
	static readonly DeleteRecipeVersion: string[] = [
		"databrew:DeleteRecipeVersion",
	];
	/** IAM actions required for the DeleteRuleset API call. */
	static readonly DeleteRuleset: string[] = ["databrew:DeleteRuleset"];
	/** IAM actions required for the DeleteSchedule API call. */
	static readonly DeleteSchedule: string[] = ["databrew:DeleteSchedule"];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DescribeDataset: string[] = ["databrew:DescribeDataset"];
	/** IAM actions required for the DescribeJob API call. */
	static readonly DescribeJob: string[] = ["databrew:DescribeJob"];
	/** IAM actions required for the DescribeJobRun API call. */
	static readonly DescribeJobRun: string[] = ["databrew:DescribeJobRun"];
	/** IAM actions required for the DescribeProject API call. */
	static readonly DescribeProject: string[] = ["databrew:DescribeProject"];
	/** IAM actions required for the DescribeRecipe API call. */
	static readonly DescribeRecipe: string[] = ["databrew:DescribeRecipe"];
	/** IAM actions required for the DescribeRuleset API call. */
	static readonly DescribeRuleset: string[] = ["databrew:DescribeRuleset"];
	/** IAM actions required for the DescribeSchedule API call. */
	static readonly DescribeSchedule: string[] = ["databrew:DescribeSchedule"];
	/** IAM actions required for the ListDatasets API call. */
	static readonly ListDatasets: string[] = ["databrew:ListDatasets"];
	/** IAM actions required for the ListJobRuns API call. */
	static readonly ListJobRuns: string[] = ["databrew:ListJobRuns"];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["databrew:ListJobs"];
	/** IAM actions required for the ListProjects API call. */
	static readonly ListProjects: string[] = ["databrew:ListProjects"];
	/** IAM actions required for the ListRecipeVersions API call. */
	static readonly ListRecipeVersions: string[] = [
		"databrew:ListRecipeVersions",
	];
	/** IAM actions required for the ListRecipes API call. */
	static readonly ListRecipes: string[] = ["databrew:ListRecipes"];
	/** IAM actions required for the ListRulesets API call. */
	static readonly ListRulesets: string[] = ["databrew:ListRulesets"];
	/** IAM actions required for the ListSchedules API call. */
	static readonly ListSchedules: string[] = ["databrew:ListSchedules"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"databrew:ListTagsForResource",
	];
	/** IAM actions required for the PublishRecipe API call. */
	static readonly PublishRecipe: string[] = ["databrew:PublishRecipe"];
	/** IAM actions required for the SendProjectSessionAction API call. */
	static readonly SendProjectSessionAction: string[] = [
		"databrew:SendProjectSessionAction",
	];
	/** IAM actions required for the StartJobRun API call. */
	static readonly StartJobRun: string[] = ["databrew:StartJobRun"];
	/** IAM actions required for the StartProjectSession API call. */
	static readonly StartProjectSession: string[] = [
		"databrew:StartProjectSession",
	];
	/** IAM actions required for the StopJobRun API call. */
	static readonly StopJobRun: string[] = ["databrew:StopJobRun"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["databrew:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["databrew:UntagResource"];
	/** IAM actions required for the UpdateDataset API call. */
	static readonly UpdateDataset: string[] = ["databrew:UpdateDataset"];
	/** IAM actions required for the UpdateProfileJob API call. */
	static readonly UpdateProfileJob: string[] = [
		"iam:PassRole",
		"databrew:UpdateProfileJob",
	];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UpdateProject: string[] = [
		"iam:PassRole",
		"databrew:UpdateProject",
	];
	/** IAM actions required for the UpdateRecipe API call. */
	static readonly UpdateRecipe: string[] = ["databrew:UpdateRecipe"];
	/** IAM actions required for the UpdateRecipeJob API call. */
	static readonly UpdateRecipeJob: string[] = [
		"iam:PassRole",
		"databrew:UpdateRecipeJob",
	];
	/** IAM actions required for the UpdateRuleset API call. */
	static readonly UpdateRuleset: string[] = ["databrew:UpdateRuleset"];
	/** IAM actions required for the UpdateSchedule API call. */
	static readonly UpdateSchedule: string[] = ["databrew:UpdateSchedule"];
}

/**
 * Condition key constants and builders for databrew.
 */
export class DatabrewConditions {
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CreateDatasetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProfileJob action. */
	static readonly CreateProfileJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CreateProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecipe action. */
	static readonly CreateRecipeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecipeJob action. */
	static readonly CreateRecipeJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRuleset action. */
	static readonly CreateRulesetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSchedule action. */
	static readonly CreateScheduleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
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
