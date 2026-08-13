// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/evidently.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the evidently service.
 */
export class EvidentlyActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "evidently";

	/** [Write] evidently:BatchEvaluateFeature */
	static readonly BATCH_EVALUATE_FEATURE = "evidently:BatchEvaluateFeature";
	/** [Write] evidently:CreateExperiment */
	static readonly CREATE_EXPERIMENT = "evidently:CreateExperiment";
	/** [Write] evidently:CreateFeature */
	static readonly CREATE_FEATURE = "evidently:CreateFeature";
	/** [Write] evidently:CreateLaunch */
	static readonly CREATE_LAUNCH = "evidently:CreateLaunch";
	/** [Write] evidently:CreateProject */
	static readonly CREATE_PROJECT = "evidently:CreateProject";
	/** [Write] evidently:CreateSegment */
	static readonly CREATE_SEGMENT = "evidently:CreateSegment";
	/** [Write] evidently:DeleteExperiment */
	static readonly DELETE_EXPERIMENT = "evidently:DeleteExperiment";
	/** [Write] evidently:DeleteFeature */
	static readonly DELETE_FEATURE = "evidently:DeleteFeature";
	/** [Write] evidently:DeleteLaunch */
	static readonly DELETE_LAUNCH = "evidently:DeleteLaunch";
	/** [Write] evidently:DeleteProject */
	static readonly DELETE_PROJECT = "evidently:DeleteProject";
	/** [Write] evidently:DeleteSegment */
	static readonly DELETE_SEGMENT = "evidently:DeleteSegment";
	/** [Write] evidently:EvaluateFeature */
	static readonly EVALUATE_FEATURE = "evidently:EvaluateFeature";
	/** [Read] evidently:GetExperiment */
	static readonly GET_EXPERIMENT = "evidently:GetExperiment";
	/** [Read] evidently:GetExperimentResults */
	static readonly GET_EXPERIMENT_RESULTS = "evidently:GetExperimentResults";
	/** [Read] evidently:GetFeature */
	static readonly GET_FEATURE = "evidently:GetFeature";
	/** [Read] evidently:GetLaunch */
	static readonly GET_LAUNCH = "evidently:GetLaunch";
	/** [Read] evidently:GetProject */
	static readonly GET_PROJECT = "evidently:GetProject";
	/** [Read] evidently:GetSegment */
	static readonly GET_SEGMENT = "evidently:GetSegment";
	/** [Read] evidently:ListExperiments */
	static readonly LIST_EXPERIMENTS = "evidently:ListExperiments";
	/** [Read] evidently:ListFeatures */
	static readonly LIST_FEATURES = "evidently:ListFeatures";
	/** [Read] evidently:ListLaunches */
	static readonly LIST_LAUNCHES = "evidently:ListLaunches";
	/** [Read] evidently:ListProjects */
	static readonly LIST_PROJECTS = "evidently:ListProjects";
	/** [Read] evidently:ListSegmentReferences */
	static readonly LIST_SEGMENT_REFERENCES = "evidently:ListSegmentReferences";
	/** [Read] evidently:ListSegments */
	static readonly LIST_SEGMENTS = "evidently:ListSegments";
	/** [Read] evidently:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "evidently:ListTagsForResource";
	/** [Write] evidently:PutProjectEvents */
	static readonly PUT_PROJECT_EVENTS = "evidently:PutProjectEvents";
	/** [Write] evidently:StartExperiment */
	static readonly START_EXPERIMENT = "evidently:StartExperiment";
	/** [Write] evidently:StartLaunch */
	static readonly START_LAUNCH = "evidently:StartLaunch";
	/** [Write] evidently:StopExperiment */
	static readonly STOP_EXPERIMENT = "evidently:StopExperiment";
	/** [Write] evidently:StopLaunch */
	static readonly STOP_LAUNCH = "evidently:StopLaunch";
	/** [Tagging] evidently:TagResource */
	static readonly TAG_RESOURCE = "evidently:TagResource";
	/** [Read] evidently:TestSegmentPattern */
	static readonly TEST_SEGMENT_PATTERN = "evidently:TestSegmentPattern";
	/** [Tagging] evidently:UntagResource */
	static readonly UNTAG_RESOURCE = "evidently:UntagResource";
	/** [Write] evidently:UpdateExperiment */
	static readonly UPDATE_EXPERIMENT = "evidently:UpdateExperiment";
	/** [Write] evidently:UpdateFeature */
	static readonly UPDATE_FEATURE = "evidently:UpdateFeature";
	/** [Write] evidently:UpdateLaunch */
	static readonly UPDATE_LAUNCH = "evidently:UpdateLaunch";
	/** [Write] evidently:UpdateProject */
	static readonly UPDATE_PROJECT = "evidently:UpdateProject";
	/** [Write] evidently:UpdateProjectDataDelivery */
	static readonly UPDATE_PROJECT_DATA_DELIVERY =
		"evidently:UpdateProjectDataDelivery";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		EvidentlyActions.GET_EXPERIMENT,
		EvidentlyActions.GET_EXPERIMENT_RESULTS,
		EvidentlyActions.GET_FEATURE,
		EvidentlyActions.GET_LAUNCH,
		EvidentlyActions.GET_PROJECT,
		EvidentlyActions.GET_SEGMENT,
		EvidentlyActions.LIST_EXPERIMENTS,
		EvidentlyActions.LIST_FEATURES,
		EvidentlyActions.LIST_LAUNCHES,
		EvidentlyActions.LIST_PROJECTS,
		EvidentlyActions.LIST_SEGMENT_REFERENCES,
		EvidentlyActions.LIST_SEGMENTS,
		EvidentlyActions.LIST_TAGS_FOR_RESOURCE,
		EvidentlyActions.TEST_SEGMENT_PATTERN,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		EvidentlyActions.BATCH_EVALUATE_FEATURE,
		EvidentlyActions.CREATE_EXPERIMENT,
		EvidentlyActions.CREATE_FEATURE,
		EvidentlyActions.CREATE_LAUNCH,
		EvidentlyActions.CREATE_PROJECT,
		EvidentlyActions.CREATE_SEGMENT,
		EvidentlyActions.DELETE_EXPERIMENT,
		EvidentlyActions.DELETE_FEATURE,
		EvidentlyActions.DELETE_LAUNCH,
		EvidentlyActions.DELETE_PROJECT,
		EvidentlyActions.DELETE_SEGMENT,
		EvidentlyActions.EVALUATE_FEATURE,
		EvidentlyActions.PUT_PROJECT_EVENTS,
		EvidentlyActions.START_EXPERIMENT,
		EvidentlyActions.START_LAUNCH,
		EvidentlyActions.STOP_EXPERIMENT,
		EvidentlyActions.STOP_LAUNCH,
		EvidentlyActions.UPDATE_EXPERIMENT,
		EvidentlyActions.UPDATE_FEATURE,
		EvidentlyActions.UPDATE_LAUNCH,
		EvidentlyActions.UPDATE_PROJECT,
		EvidentlyActions.UPDATE_PROJECT_DATA_DELIVERY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		EvidentlyActions.TAG_RESOURCE,
		EvidentlyActions.UNTAG_RESOURCE,
	];
}

const ExperimentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):evidently:(?<region>[^:]*):(?<account>[^:]*):project/(?<projectName>[^:/?]+)/experiment/(?<experimentName>[^:/?]+)$",
);
const FeatureArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):evidently:(?<region>[^:]*):(?<account>[^:]*):project/(?<projectName>[^:/?]+)/feature/(?<featureName>[^:/?]+)$",
);
const LaunchArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):evidently:(?<region>[^:]*):(?<account>[^:]*):project/(?<projectName>[^:/?]+)/launch/(?<launchName>[^:/?]+)$",
);
const ProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):evidently:(?<region>[^:]*):(?<account>[^:]*):project/(?<projectName>[^:/?]+)$",
);
const SegmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):evidently:(?<region>[^:]*):(?<account>[^:]*):segment/(?<segmentName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for evidently resources.
 */
export class EvidentlyResources {
	/**
	 * Builds an ARN for the Experiment resource.
	 */
	static experiment(props: {
		/** The ProjectName component of the ARN. */
		readonly projectName: string;
		/** The ExperimentName component of the ARN. */
		readonly experimentName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:evidently:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectName}/experiment/${props.experimentName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Experiment resource.
	 */
	static isValidExperimentArn(arn: string): boolean {
		return ExperimentArnRegex.test(arn);
	}

	/**
	 * Parses a Experiment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExperimentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		projectName: string;
		experimentName: string;
	} {
		const match = ExperimentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Experiment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectName: match.groups!.projectName,
			experimentName: match.groups!.experimentName,
		};
	}

	/**
	 * Builds an ARN for the Feature resource.
	 */
	static feature(props: {
		/** The ProjectName component of the ARN. */
		readonly projectName: string;
		/** The FeatureName component of the ARN. */
		readonly featureName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:evidently:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectName}/feature/${props.featureName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Feature resource.
	 */
	static isValidFeatureArn(arn: string): boolean {
		return FeatureArnRegex.test(arn);
	}

	/**
	 * Parses a Feature ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFeatureArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		projectName: string;
		featureName: string;
	} {
		const match = FeatureArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Feature ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectName: match.groups!.projectName,
			featureName: match.groups!.featureName,
		};
	}

	/**
	 * Builds an ARN for the Launch resource.
	 */
	static launch(props: {
		/** The ProjectName component of the ARN. */
		readonly projectName: string;
		/** The LaunchName component of the ARN. */
		readonly launchName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:evidently:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectName}/launch/${props.launchName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Launch resource.
	 */
	static isValidLaunchArn(arn: string): boolean {
		return LaunchArnRegex.test(arn);
	}

	/**
	 * Parses a Launch ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLaunchArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		projectName: string;
		launchName: string;
	} {
		const match = LaunchArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Launch ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectName: match.groups!.projectName,
			launchName: match.groups!.launchName,
		};
	}

	/**
	 * Builds an ARN for the Project resource.
	 */
	static project(props: {
		/** The ProjectName component of the ARN. */
		readonly projectName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:evidently:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectName}`;
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
		projectName: string;
	} {
		const match = ProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectName: match.groups!.projectName,
		};
	}

	/**
	 * Builds an ARN for the Segment resource.
	 */
	static segment(props: {
		/** The SegmentName component of the ARN. */
		readonly segmentName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:evidently:${props.region ?? "*"}:${props.account ?? "*"}:segment/${props.segmentName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Segment resource.
	 */
	static isValidSegmentArn(arn: string): boolean {
		return SegmentArnRegex.test(arn);
	}

	/**
	 * Parses a Segment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSegmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		segmentName: string;
	} {
		const match = SegmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Segment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			segmentName: match.groups!.segmentName,
		};
	}
}

/**
 * Condition key constants and builders for evidently.
 */
export class EvidentlyConditions {
	/** Condition keys applicable to the CreateExperiment action. */
	static readonly CREATE_EXPERIMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFeature action. */
	static readonly CREATE_FEATURE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLaunch action. */
	static readonly CREATE_LAUNCH_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CREATE_PROJECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSegment action. */
	static readonly CREATE_SEGMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
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
