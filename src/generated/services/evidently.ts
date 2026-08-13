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
	static readonly BatchEvaluateFeature = "evidently:BatchEvaluateFeature";
	/** [Write] evidently:CreateExperiment */
	static readonly CreateExperiment = "evidently:CreateExperiment";
	/** [Write] evidently:CreateFeature */
	static readonly CreateFeature = "evidently:CreateFeature";
	/** [Write] evidently:CreateLaunch */
	static readonly CreateLaunch = "evidently:CreateLaunch";
	/** [Write] evidently:CreateProject */
	static readonly CreateProject = "evidently:CreateProject";
	/** [Write] evidently:CreateSegment */
	static readonly CreateSegment = "evidently:CreateSegment";
	/** [Write] evidently:DeleteExperiment */
	static readonly DeleteExperiment = "evidently:DeleteExperiment";
	/** [Write] evidently:DeleteFeature */
	static readonly DeleteFeature = "evidently:DeleteFeature";
	/** [Write] evidently:DeleteLaunch */
	static readonly DeleteLaunch = "evidently:DeleteLaunch";
	/** [Write] evidently:DeleteProject */
	static readonly DeleteProject = "evidently:DeleteProject";
	/** [Write] evidently:DeleteSegment */
	static readonly DeleteSegment = "evidently:DeleteSegment";
	/** [Write] evidently:EvaluateFeature */
	static readonly EvaluateFeature = "evidently:EvaluateFeature";
	/** [Read] evidently:GetExperiment */
	static readonly actionGetExperiment = "evidently:GetExperiment";
	/** [Read] evidently:GetExperimentResults */
	static readonly actionGetExperimentResults = "evidently:GetExperimentResults";
	/** [Read] evidently:GetFeature */
	static readonly actionGetFeature = "evidently:GetFeature";
	/** [Read] evidently:GetLaunch */
	static readonly actionGetLaunch = "evidently:GetLaunch";
	/** [Read] evidently:GetProject */
	static readonly actionGetProject = "evidently:GetProject";
	/** [Read] evidently:GetSegment */
	static readonly actionGetSegment = "evidently:GetSegment";
	/** [Read] evidently:ListExperiments */
	static readonly ListExperiments = "evidently:ListExperiments";
	/** [Read] evidently:ListFeatures */
	static readonly ListFeatures = "evidently:ListFeatures";
	/** [Read] evidently:ListLaunches */
	static readonly ListLaunches = "evidently:ListLaunches";
	/** [Read] evidently:ListProjects */
	static readonly ListProjects = "evidently:ListProjects";
	/** [Read] evidently:ListSegmentReferences */
	static readonly ListSegmentReferences = "evidently:ListSegmentReferences";
	/** [Read] evidently:ListSegments */
	static readonly ListSegments = "evidently:ListSegments";
	/** [Read] evidently:ListTagsForResource */
	static readonly ListTagsForResource = "evidently:ListTagsForResource";
	/** [Write] evidently:PutProjectEvents */
	static readonly PutProjectEvents = "evidently:PutProjectEvents";
	/** [Write] evidently:StartExperiment */
	static readonly StartExperiment = "evidently:StartExperiment";
	/** [Write] evidently:StartLaunch */
	static readonly StartLaunch = "evidently:StartLaunch";
	/** [Write] evidently:StopExperiment */
	static readonly StopExperiment = "evidently:StopExperiment";
	/** [Write] evidently:StopLaunch */
	static readonly StopLaunch = "evidently:StopLaunch";
	/** [Tagging] evidently:TagResource */
	static readonly TagResource = "evidently:TagResource";
	/** [Read] evidently:TestSegmentPattern */
	static readonly TestSegmentPattern = "evidently:TestSegmentPattern";
	/** [Tagging] evidently:UntagResource */
	static readonly UntagResource = "evidently:UntagResource";
	/** [Write] evidently:UpdateExperiment */
	static readonly UpdateExperiment = "evidently:UpdateExperiment";
	/** [Write] evidently:UpdateFeature */
	static readonly UpdateFeature = "evidently:UpdateFeature";
	/** [Write] evidently:UpdateLaunch */
	static readonly UpdateLaunch = "evidently:UpdateLaunch";
	/** [Write] evidently:UpdateProject */
	static readonly UpdateProject = "evidently:UpdateProject";
	/** [Write] evidently:UpdateProjectDataDelivery */
	static readonly UpdateProjectDataDelivery =
		"evidently:UpdateProjectDataDelivery";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		EvidentlyActions.actionGetExperiment,
		EvidentlyActions.actionGetExperimentResults,
		EvidentlyActions.actionGetFeature,
		EvidentlyActions.actionGetLaunch,
		EvidentlyActions.actionGetProject,
		EvidentlyActions.actionGetSegment,
		EvidentlyActions.ListExperiments,
		EvidentlyActions.ListFeatures,
		EvidentlyActions.ListLaunches,
		EvidentlyActions.ListProjects,
		EvidentlyActions.ListSegmentReferences,
		EvidentlyActions.ListSegments,
		EvidentlyActions.ListTagsForResource,
		EvidentlyActions.TestSegmentPattern,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		EvidentlyActions.BatchEvaluateFeature,
		EvidentlyActions.CreateExperiment,
		EvidentlyActions.CreateFeature,
		EvidentlyActions.CreateLaunch,
		EvidentlyActions.CreateProject,
		EvidentlyActions.CreateSegment,
		EvidentlyActions.DeleteExperiment,
		EvidentlyActions.DeleteFeature,
		EvidentlyActions.DeleteLaunch,
		EvidentlyActions.DeleteProject,
		EvidentlyActions.DeleteSegment,
		EvidentlyActions.EvaluateFeature,
		EvidentlyActions.PutProjectEvents,
		EvidentlyActions.StartExperiment,
		EvidentlyActions.StartLaunch,
		EvidentlyActions.StopExperiment,
		EvidentlyActions.StopLaunch,
		EvidentlyActions.UpdateExperiment,
		EvidentlyActions.UpdateFeature,
		EvidentlyActions.UpdateLaunch,
		EvidentlyActions.UpdateProject,
		EvidentlyActions.UpdateProjectDataDelivery,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		EvidentlyActions.TagResource,
		EvidentlyActions.UntagResource,
	];
}

/**
 * Properties for building a Experiment ARN.
 */
export interface EvidentlyExperimentArnProps {
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
}

/**
 * Parsed components of a Experiment ARN.
 */
export interface EvidentlyExperimentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectName component. */
	readonly projectName: string;
	/** The ExperimentName component. */
	readonly experimentName: string;
}

/**
 * Properties for building a Feature ARN.
 */
export interface EvidentlyFeatureArnProps {
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
}

/**
 * Parsed components of a Feature ARN.
 */
export interface EvidentlyFeatureArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectName component. */
	readonly projectName: string;
	/** The FeatureName component. */
	readonly featureName: string;
}

/**
 * Properties for building a Launch ARN.
 */
export interface EvidentlyLaunchArnProps {
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
}

/**
 * Parsed components of a Launch ARN.
 */
export interface EvidentlyLaunchArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectName component. */
	readonly projectName: string;
	/** The LaunchName component. */
	readonly launchName: string;
}

/**
 * Properties for building a Project ARN.
 */
export interface EvidentlyProjectArnProps {
	/** The ProjectName component of the ARN. */
	readonly projectName: string;
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
export interface EvidentlyProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectName component. */
	readonly projectName: string;
}

/**
 * Properties for building a Segment ARN.
 */
export interface EvidentlySegmentArnProps {
	/** The SegmentName component of the ARN. */
	readonly segmentName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Segment ARN.
 */
export interface EvidentlySegmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SegmentName component. */
	readonly segmentName: string;
}

const ExperimentArnRegex =
	/^arn:(?<partition>[^:]+):evidently:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectName>[^:/?]+)\/experiment\/(?<experimentName>[^:/?]+)$/;
const FeatureArnRegex =
	/^arn:(?<partition>[^:]+):evidently:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectName>[^:/?]+)\/feature\/(?<featureName>[^:/?]+)$/;
const LaunchArnRegex =
	/^arn:(?<partition>[^:]+):evidently:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectName>[^:/?]+)\/launch\/(?<launchName>[^:/?]+)$/;
const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):evidently:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectName>[^:/?]+)$/;
const SegmentArnRegex =
	/^arn:(?<partition>[^:]+):evidently:(?<region>[^:]*):(?<account>[^:]*):segment\/(?<segmentName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for evidently resources.
 */
export class EvidentlyResources {
	/**
	 * Builds an ARN for the Experiment resource.
	 */
	static experiment(props: EvidentlyExperimentArnProps): string {
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
	static parseExperimentArn(arn: string): EvidentlyExperimentArnComponents {
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
	static feature(props: EvidentlyFeatureArnProps): string {
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
	static parseFeatureArn(arn: string): EvidentlyFeatureArnComponents {
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
	static launch(props: EvidentlyLaunchArnProps): string {
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
	static parseLaunchArn(arn: string): EvidentlyLaunchArnComponents {
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
	static project(props: EvidentlyProjectArnProps): string {
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
	static parseProjectArn(arn: string): EvidentlyProjectArnComponents {
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
	static segment(props: EvidentlySegmentArnProps): string {
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
	static parseSegmentArn(arn: string): EvidentlySegmentArnComponents {
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
	static readonly CreateExperimentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFeature action. */
	static readonly CreateFeatureConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLaunch action. */
	static readonly CreateLaunchConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CreateProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSegment action. */
	static readonly CreateSegmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
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
