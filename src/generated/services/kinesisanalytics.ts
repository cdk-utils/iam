// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/kinesisanalytics.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the kinesisanalytics service.
 */
export class KinesisanalyticsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "kinesisanalytics";

	/** [Write] kinesisanalytics:AddApplicationCloudWatchLoggingOption */
	static readonly AddApplicationCloudWatchLoggingOption =
		"kinesisanalytics:AddApplicationCloudWatchLoggingOption";
	/** [Write] kinesisanalytics:AddApplicationInput */
	static readonly AddApplicationInput = "kinesisanalytics:AddApplicationInput";
	/** [Write] kinesisanalytics:AddApplicationInputProcessingConfiguration */
	static readonly AddApplicationInputProcessingConfiguration =
		"kinesisanalytics:AddApplicationInputProcessingConfiguration";
	/** [Write] kinesisanalytics:AddApplicationOutput */
	static readonly AddApplicationOutput =
		"kinesisanalytics:AddApplicationOutput";
	/** [Write] kinesisanalytics:AddApplicationReferenceDataSource */
	static readonly AddApplicationReferenceDataSource =
		"kinesisanalytics:AddApplicationReferenceDataSource";
	/** [Write] kinesisanalytics:AddApplicationVpcConfiguration */
	static readonly AddApplicationVpcConfiguration =
		"kinesisanalytics:AddApplicationVpcConfiguration";
	/** [Write] kinesisanalytics:CreateApplication */
	static readonly CreateApplication = "kinesisanalytics:CreateApplication";
	/** [Read] kinesisanalytics:CreateApplicationPresignedUrl */
	static readonly CreateApplicationPresignedUrl =
		"kinesisanalytics:CreateApplicationPresignedUrl";
	/** [Write] kinesisanalytics:CreateApplicationSnapshot */
	static readonly CreateApplicationSnapshot =
		"kinesisanalytics:CreateApplicationSnapshot";
	/** [Write] kinesisanalytics:DeleteApplication */
	static readonly DeleteApplication = "kinesisanalytics:DeleteApplication";
	/** [Write] kinesisanalytics:DeleteApplicationCloudWatchLoggingOption */
	static readonly DeleteApplicationCloudWatchLoggingOption =
		"kinesisanalytics:DeleteApplicationCloudWatchLoggingOption";
	/** [Write] kinesisanalytics:DeleteApplicationInputProcessingConfiguration */
	static readonly DeleteApplicationInputProcessingConfiguration =
		"kinesisanalytics:DeleteApplicationInputProcessingConfiguration";
	/** [Write] kinesisanalytics:DeleteApplicationOutput */
	static readonly DeleteApplicationOutput =
		"kinesisanalytics:DeleteApplicationOutput";
	/** [Write] kinesisanalytics:DeleteApplicationReferenceDataSource */
	static readonly DeleteApplicationReferenceDataSource =
		"kinesisanalytics:DeleteApplicationReferenceDataSource";
	/** [Write] kinesisanalytics:DeleteApplicationSnapshot */
	static readonly DeleteApplicationSnapshot =
		"kinesisanalytics:DeleteApplicationSnapshot";
	/** [Write] kinesisanalytics:DeleteApplicationVpcConfiguration */
	static readonly DeleteApplicationVpcConfiguration =
		"kinesisanalytics:DeleteApplicationVpcConfiguration";
	/** [Read] kinesisanalytics:DescribeApplication */
	static readonly DescribeApplication = "kinesisanalytics:DescribeApplication";
	/** [Read] kinesisanalytics:DescribeApplicationOperation */
	static readonly DescribeApplicationOperation =
		"kinesisanalytics:DescribeApplicationOperation";
	/** [Read] kinesisanalytics:DescribeApplicationSnapshot */
	static readonly DescribeApplicationSnapshot =
		"kinesisanalytics:DescribeApplicationSnapshot";
	/** [Read] kinesisanalytics:DescribeApplicationVersion */
	static readonly DescribeApplicationVersion =
		"kinesisanalytics:DescribeApplicationVersion";
	/** [Read] kinesisanalytics:DiscoverInputSchema */
	static readonly DiscoverInputSchema = "kinesisanalytics:DiscoverInputSchema";
	/** [Read] kinesisanalytics:GetApplicationState */
	static readonly actionGetApplicationState =
		"kinesisanalytics:GetApplicationState";
	/** [Read] kinesisanalytics:ListApplicationOperations */
	static readonly ListApplicationOperations =
		"kinesisanalytics:ListApplicationOperations";
	/** [Read] kinesisanalytics:ListApplicationSnapshots */
	static readonly ListApplicationSnapshots =
		"kinesisanalytics:ListApplicationSnapshots";
	/** [Read] kinesisanalytics:ListApplicationVersions */
	static readonly ListApplicationVersions =
		"kinesisanalytics:ListApplicationVersions";
	/** [List] kinesisanalytics:ListApplications */
	static readonly ListApplications = "kinesisanalytics:ListApplications";
	/** [Read] kinesisanalytics:ListTagsForResource */
	static readonly ListTagsForResource = "kinesisanalytics:ListTagsForResource";
	/** [Write] kinesisanalytics:RollbackApplication */
	static readonly RollbackApplication = "kinesisanalytics:RollbackApplication";
	/** [Write] kinesisanalytics:StartApplication */
	static readonly StartApplication = "kinesisanalytics:StartApplication";
	/** [Write] kinesisanalytics:StopApplication */
	static readonly StopApplication = "kinesisanalytics:StopApplication";
	/** [Tagging] kinesisanalytics:TagResource */
	static readonly TagResource = "kinesisanalytics:TagResource";
	/** [Tagging] kinesisanalytics:UntagResource */
	static readonly UntagResource = "kinesisanalytics:UntagResource";
	/** [Write] kinesisanalytics:UpdateApplication */
	static readonly UpdateApplication = "kinesisanalytics:UpdateApplication";
	/** [Write] kinesisanalytics:UpdateApplicationMaintenanceConfiguration */
	static readonly UpdateApplicationMaintenanceConfiguration =
		"kinesisanalytics:UpdateApplicationMaintenanceConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		KinesisanalyticsActions.CreateApplicationPresignedUrl,
		KinesisanalyticsActions.DescribeApplication,
		KinesisanalyticsActions.DescribeApplicationOperation,
		KinesisanalyticsActions.DescribeApplicationSnapshot,
		KinesisanalyticsActions.DescribeApplicationVersion,
		KinesisanalyticsActions.DiscoverInputSchema,
		KinesisanalyticsActions.actionGetApplicationState,
		KinesisanalyticsActions.ListApplicationOperations,
		KinesisanalyticsActions.ListApplicationSnapshots,
		KinesisanalyticsActions.ListApplicationVersions,
		KinesisanalyticsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		KinesisanalyticsActions.AddApplicationCloudWatchLoggingOption,
		KinesisanalyticsActions.AddApplicationInput,
		KinesisanalyticsActions.AddApplicationInputProcessingConfiguration,
		KinesisanalyticsActions.AddApplicationOutput,
		KinesisanalyticsActions.AddApplicationReferenceDataSource,
		KinesisanalyticsActions.AddApplicationVpcConfiguration,
		KinesisanalyticsActions.CreateApplication,
		KinesisanalyticsActions.CreateApplicationSnapshot,
		KinesisanalyticsActions.DeleteApplication,
		KinesisanalyticsActions.DeleteApplicationCloudWatchLoggingOption,
		KinesisanalyticsActions.DeleteApplicationInputProcessingConfiguration,
		KinesisanalyticsActions.DeleteApplicationOutput,
		KinesisanalyticsActions.DeleteApplicationReferenceDataSource,
		KinesisanalyticsActions.DeleteApplicationSnapshot,
		KinesisanalyticsActions.DeleteApplicationVpcConfiguration,
		KinesisanalyticsActions.RollbackApplication,
		KinesisanalyticsActions.StartApplication,
		KinesisanalyticsActions.StopApplication,
		KinesisanalyticsActions.UpdateApplication,
		KinesisanalyticsActions.UpdateApplicationMaintenanceConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		KinesisanalyticsActions.ListApplications,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		KinesisanalyticsActions.TagResource,
		KinesisanalyticsActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface KinesisanalyticsApplicationArnProps {
	/** The ApplicationName component of the ARN. */
	readonly applicationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a application ARN.
 */
export interface KinesisanalyticsApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationName component. */
	readonly applicationName: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):kinesisanalytics:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for kinesisanalytics resources.
 */
export class KinesisanalyticsResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: KinesisanalyticsApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:kinesisanalytics:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(
		arn: string,
	): KinesisanalyticsApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationName: match.groups!.applicationName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for kinesisanalytics.
 */
export class KinesisanalyticsOperations {
	/** IAM actions required for the AddApplicationCloudWatchLoggingOption API call. */
	static readonly AddApplicationCloudWatchLoggingOption: string[] = [
		"kinesisanalytics:AddApplicationCloudWatchLoggingOption",
		"iam:PassRole",
	];
	/** IAM actions required for the AddApplicationInput API call. */
	static readonly AddApplicationInput: string[] = [
		"kinesisanalytics:AddApplicationInput",
		"iam:PassRole",
	];
	/** IAM actions required for the AddApplicationInputProcessingConfiguration API call. */
	static readonly AddApplicationInputProcessingConfiguration: string[] = [];
	/** IAM actions required for the AddApplicationOutput API call. */
	static readonly AddApplicationOutput: string[] = [
		"kinesisanalytics:AddApplicationOutput",
		"iam:PassRole",
	];
	/** IAM actions required for the AddApplicationReferenceDataSource API call. */
	static readonly AddApplicationReferenceDataSource: string[] = [
		"kinesisanalytics:AddApplicationReferenceDataSource",
		"iam:PassRole",
	];
	/** IAM actions required for the AddApplicationVpcConfiguration API call. */
	static readonly AddApplicationVpcConfiguration: string[] = [
		"kinesisanalytics:AddApplicationVpcConfiguration",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [
		"kinesisanalytics:CreateApplication",
		"iam:PassRole",
		"kinesisanalytics:TagResource",
	];
	/** IAM actions required for the CreateApplicationPresignedUrl API call. */
	static readonly CreateApplicationPresignedUrl: string[] = [
		"kinesisanalytics:CreateApplicationPresignedUrl",
	];
	/** IAM actions required for the CreateApplicationSnapshot API call. */
	static readonly CreateApplicationSnapshot: string[] = [
		"kinesisanalytics:CreateApplicationSnapshot",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [
		"kinesisanalytics:DeleteApplication",
	];
	/** IAM actions required for the DeleteApplicationCloudWatchLoggingOption API call. */
	static readonly DeleteApplicationCloudWatchLoggingOption: string[] = [
		"kinesisanalytics:DeleteApplicationCloudWatchLoggingOption",
	];
	/** IAM actions required for the DeleteApplicationInputProcessingConfiguration API call. */
	static readonly DeleteApplicationInputProcessingConfiguration: string[] = [
		"kinesisanalytics:DeleteApplicationInputProcessingConfiguration",
	];
	/** IAM actions required for the DeleteApplicationOutput API call. */
	static readonly DeleteApplicationOutput: string[] = [
		"kinesisanalytics:DeleteApplicationOutput",
	];
	/** IAM actions required for the DeleteApplicationReferenceDataSource API call. */
	static readonly DeleteApplicationReferenceDataSource: string[] = [
		"kinesisanalytics:DeleteApplicationReferenceDataSource",
	];
	/** IAM actions required for the DeleteApplicationSnapshot API call. */
	static readonly DeleteApplicationSnapshot: string[] = [
		"kinesisanalytics:DeleteApplicationSnapshot",
	];
	/** IAM actions required for the DeleteApplicationVpcConfiguration API call. */
	static readonly DeleteApplicationVpcConfiguration: string[] = [
		"kinesisanalytics:DeleteApplicationVpcConfiguration",
	];
	/** IAM actions required for the DescribeApplication API call. */
	static readonly DescribeApplication: string[] = [
		"kinesisanalytics:DescribeApplication",
	];
	/** IAM actions required for the DescribeApplicationOperation API call. */
	static readonly DescribeApplicationOperation: string[] = [
		"kinesisanalytics:DescribeApplicationOperation",
	];
	/** IAM actions required for the DescribeApplicationSnapshot API call. */
	static readonly DescribeApplicationSnapshot: string[] = [
		"kinesisanalytics:DescribeApplicationSnapshot",
	];
	/** IAM actions required for the DescribeApplicationVersion API call. */
	static readonly DescribeApplicationVersion: string[] = [
		"kinesisanalytics:DescribeApplicationVersion",
	];
	/** IAM actions required for the DiscoverInputSchema API call. */
	static readonly DiscoverInputSchema: string[] = [
		"kinesisanalytics:DiscoverInputSchema",
		"iam:PassRole",
	];
	/** IAM actions required for the ListApplicationOperations API call. */
	static readonly ListApplicationOperations: string[] = [
		"kinesisanalytics:ListApplicationOperations",
	];
	/** IAM actions required for the ListApplicationSnapshots API call. */
	static readonly ListApplicationSnapshots: string[] = [
		"kinesisanalytics:ListApplicationSnapshots",
	];
	/** IAM actions required for the ListApplicationVersions API call. */
	static readonly ListApplicationVersions: string[] = [
		"kinesisanalytics:ListApplicationVersions",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = [
		"kinesisanalytics:ListApplications",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"kinesisanalytics:ListTagsForResource",
	];
	/** IAM actions required for the RollbackApplication API call. */
	static readonly RollbackApplication: string[] = [
		"kinesisanalytics:RollbackApplication",
	];
	/** IAM actions required for the StartApplication API call. */
	static readonly StartApplication: string[] = [
		"kinesisanalytics:StartApplication",
	];
	/** IAM actions required for the StopApplication API call. */
	static readonly StopApplication: string[] = [
		"kinesisanalytics:StopApplication",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["kinesisanalytics:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["kinesisanalytics:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [
		"iam:PassRole",
		"kinesisanalytics:UpdateApplication",
	];
	/** IAM actions required for the UpdateApplicationMaintenanceConfiguration API call. */
	static readonly UpdateApplicationMaintenanceConfiguration: string[] = [
		"kinesisanalytics:UpdateApplicationMaintenanceConfiguration",
	];
}

/**
 * Condition key constants and builders for kinesisanalytics.
 */
export class KinesisanalyticsConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
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
