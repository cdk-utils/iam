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
	static readonly ADD_APPLICATION_CLOUD_WATCH_LOGGING_OPTION =
		"kinesisanalytics:AddApplicationCloudWatchLoggingOption";
	/** [Write] kinesisanalytics:AddApplicationInput */
	static readonly ADD_APPLICATION_INPUT =
		"kinesisanalytics:AddApplicationInput";
	/** [Write] kinesisanalytics:AddApplicationInputProcessingConfiguration */
	static readonly ADD_APPLICATION_INPUT_PROCESSING_CONFIGURATION =
		"kinesisanalytics:AddApplicationInputProcessingConfiguration";
	/** [Write] kinesisanalytics:AddApplicationOutput */
	static readonly ADD_APPLICATION_OUTPUT =
		"kinesisanalytics:AddApplicationOutput";
	/** [Write] kinesisanalytics:AddApplicationReferenceDataSource */
	static readonly ADD_APPLICATION_REFERENCE_DATA_SOURCE =
		"kinesisanalytics:AddApplicationReferenceDataSource";
	/** [Write] kinesisanalytics:AddApplicationVpcConfiguration */
	static readonly ADD_APPLICATION_VPC_CONFIGURATION =
		"kinesisanalytics:AddApplicationVpcConfiguration";
	/** [Write] kinesisanalytics:CreateApplication */
	static readonly CREATE_APPLICATION = "kinesisanalytics:CreateApplication";
	/** [Read] kinesisanalytics:CreateApplicationPresignedUrl */
	static readonly CREATE_APPLICATION_PRESIGNED_URL =
		"kinesisanalytics:CreateApplicationPresignedUrl";
	/** [Write] kinesisanalytics:CreateApplicationSnapshot */
	static readonly CREATE_APPLICATION_SNAPSHOT =
		"kinesisanalytics:CreateApplicationSnapshot";
	/** [Write] kinesisanalytics:DeleteApplication */
	static readonly DELETE_APPLICATION = "kinesisanalytics:DeleteApplication";
	/** [Write] kinesisanalytics:DeleteApplicationCloudWatchLoggingOption */
	static readonly DELETE_APPLICATION_CLOUD_WATCH_LOGGING_OPTION =
		"kinesisanalytics:DeleteApplicationCloudWatchLoggingOption";
	/** [Write] kinesisanalytics:DeleteApplicationInputProcessingConfiguration */
	static readonly DELETE_APPLICATION_INPUT_PROCESSING_CONFIGURATION =
		"kinesisanalytics:DeleteApplicationInputProcessingConfiguration";
	/** [Write] kinesisanalytics:DeleteApplicationOutput */
	static readonly DELETE_APPLICATION_OUTPUT =
		"kinesisanalytics:DeleteApplicationOutput";
	/** [Write] kinesisanalytics:DeleteApplicationReferenceDataSource */
	static readonly DELETE_APPLICATION_REFERENCE_DATA_SOURCE =
		"kinesisanalytics:DeleteApplicationReferenceDataSource";
	/** [Write] kinesisanalytics:DeleteApplicationSnapshot */
	static readonly DELETE_APPLICATION_SNAPSHOT =
		"kinesisanalytics:DeleteApplicationSnapshot";
	/** [Write] kinesisanalytics:DeleteApplicationVpcConfiguration */
	static readonly DELETE_APPLICATION_VPC_CONFIGURATION =
		"kinesisanalytics:DeleteApplicationVpcConfiguration";
	/** [Read] kinesisanalytics:DescribeApplication */
	static readonly DESCRIBE_APPLICATION = "kinesisanalytics:DescribeApplication";
	/** [Read] kinesisanalytics:DescribeApplicationOperation */
	static readonly DESCRIBE_APPLICATION_OPERATION =
		"kinesisanalytics:DescribeApplicationOperation";
	/** [Read] kinesisanalytics:DescribeApplicationSnapshot */
	static readonly DESCRIBE_APPLICATION_SNAPSHOT =
		"kinesisanalytics:DescribeApplicationSnapshot";
	/** [Read] kinesisanalytics:DescribeApplicationVersion */
	static readonly DESCRIBE_APPLICATION_VERSION =
		"kinesisanalytics:DescribeApplicationVersion";
	/** [Read] kinesisanalytics:DiscoverInputSchema */
	static readonly DISCOVER_INPUT_SCHEMA =
		"kinesisanalytics:DiscoverInputSchema";
	/** [Read] kinesisanalytics:GetApplicationState */
	static readonly GET_APPLICATION_STATE =
		"kinesisanalytics:GetApplicationState";
	/** [Read] kinesisanalytics:ListApplicationOperations */
	static readonly LIST_APPLICATION_OPERATIONS =
		"kinesisanalytics:ListApplicationOperations";
	/** [Read] kinesisanalytics:ListApplicationSnapshots */
	static readonly LIST_APPLICATION_SNAPSHOTS =
		"kinesisanalytics:ListApplicationSnapshots";
	/** [Read] kinesisanalytics:ListApplicationVersions */
	static readonly LIST_APPLICATION_VERSIONS =
		"kinesisanalytics:ListApplicationVersions";
	/** [List] kinesisanalytics:ListApplications */
	static readonly LIST_APPLICATIONS = "kinesisanalytics:ListApplications";
	/** [Read] kinesisanalytics:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"kinesisanalytics:ListTagsForResource";
	/** [Write] kinesisanalytics:RollbackApplication */
	static readonly ROLLBACK_APPLICATION = "kinesisanalytics:RollbackApplication";
	/** [Write] kinesisanalytics:StartApplication */
	static readonly START_APPLICATION = "kinesisanalytics:StartApplication";
	/** [Write] kinesisanalytics:StopApplication */
	static readonly STOP_APPLICATION = "kinesisanalytics:StopApplication";
	/** [Tagging] kinesisanalytics:TagResource */
	static readonly TAG_RESOURCE = "kinesisanalytics:TagResource";
	/** [Tagging] kinesisanalytics:UntagResource */
	static readonly UNTAG_RESOURCE = "kinesisanalytics:UntagResource";
	/** [Write] kinesisanalytics:UpdateApplication */
	static readonly UPDATE_APPLICATION = "kinesisanalytics:UpdateApplication";
	/** [Write] kinesisanalytics:UpdateApplicationMaintenanceConfiguration */
	static readonly UPDATE_APPLICATION_MAINTENANCE_CONFIGURATION =
		"kinesisanalytics:UpdateApplicationMaintenanceConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		KinesisanalyticsActions.CREATE_APPLICATION_PRESIGNED_URL,
		KinesisanalyticsActions.DESCRIBE_APPLICATION,
		KinesisanalyticsActions.DESCRIBE_APPLICATION_OPERATION,
		KinesisanalyticsActions.DESCRIBE_APPLICATION_SNAPSHOT,
		KinesisanalyticsActions.DESCRIBE_APPLICATION_VERSION,
		KinesisanalyticsActions.DISCOVER_INPUT_SCHEMA,
		KinesisanalyticsActions.GET_APPLICATION_STATE,
		KinesisanalyticsActions.LIST_APPLICATION_OPERATIONS,
		KinesisanalyticsActions.LIST_APPLICATION_SNAPSHOTS,
		KinesisanalyticsActions.LIST_APPLICATION_VERSIONS,
		KinesisanalyticsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		KinesisanalyticsActions.ADD_APPLICATION_CLOUD_WATCH_LOGGING_OPTION,
		KinesisanalyticsActions.ADD_APPLICATION_INPUT,
		KinesisanalyticsActions.ADD_APPLICATION_INPUT_PROCESSING_CONFIGURATION,
		KinesisanalyticsActions.ADD_APPLICATION_OUTPUT,
		KinesisanalyticsActions.ADD_APPLICATION_REFERENCE_DATA_SOURCE,
		KinesisanalyticsActions.ADD_APPLICATION_VPC_CONFIGURATION,
		KinesisanalyticsActions.CREATE_APPLICATION,
		KinesisanalyticsActions.CREATE_APPLICATION_SNAPSHOT,
		KinesisanalyticsActions.DELETE_APPLICATION,
		KinesisanalyticsActions.DELETE_APPLICATION_CLOUD_WATCH_LOGGING_OPTION,
		KinesisanalyticsActions.DELETE_APPLICATION_INPUT_PROCESSING_CONFIGURATION,
		KinesisanalyticsActions.DELETE_APPLICATION_OUTPUT,
		KinesisanalyticsActions.DELETE_APPLICATION_REFERENCE_DATA_SOURCE,
		KinesisanalyticsActions.DELETE_APPLICATION_SNAPSHOT,
		KinesisanalyticsActions.DELETE_APPLICATION_VPC_CONFIGURATION,
		KinesisanalyticsActions.ROLLBACK_APPLICATION,
		KinesisanalyticsActions.START_APPLICATION,
		KinesisanalyticsActions.STOP_APPLICATION,
		KinesisanalyticsActions.UPDATE_APPLICATION,
		KinesisanalyticsActions.UPDATE_APPLICATION_MAINTENANCE_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		KinesisanalyticsActions.LIST_APPLICATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		KinesisanalyticsActions.TAG_RESOURCE,
		KinesisanalyticsActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kinesisanalytics:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for kinesisanalytics resources.
 */
export class KinesisanalyticsResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ApplicationName component of the ARN. */
		readonly applicationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationName: string;
	} {
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
	static readonly ADD_APPLICATION_CLOUD_WATCH_LOGGING_OPTION: string[] = [
		"kinesisanalytics:AddApplicationCloudWatchLoggingOption",
		"iam:PassRole",
	];
	/** IAM actions required for the AddApplicationInput API call. */
	static readonly ADD_APPLICATION_INPUT: string[] = [
		"kinesisanalytics:AddApplicationInput",
		"iam:PassRole",
	];
	/** IAM actions required for the AddApplicationInputProcessingConfiguration API call. */
	static readonly ADD_APPLICATION_INPUT_PROCESSING_CONFIGURATION: string[] = [];
	/** IAM actions required for the AddApplicationOutput API call. */
	static readonly ADD_APPLICATION_OUTPUT: string[] = [
		"kinesisanalytics:AddApplicationOutput",
		"iam:PassRole",
	];
	/** IAM actions required for the AddApplicationReferenceDataSource API call. */
	static readonly ADD_APPLICATION_REFERENCE_DATA_SOURCE: string[] = [
		"kinesisanalytics:AddApplicationReferenceDataSource",
		"iam:PassRole",
	];
	/** IAM actions required for the AddApplicationVpcConfiguration API call. */
	static readonly ADD_APPLICATION_VPC_CONFIGURATION: string[] = [
		"kinesisanalytics:AddApplicationVpcConfiguration",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"kinesisanalytics:CreateApplication",
		"iam:PassRole",
		"kinesisanalytics:TagResource",
	];
	/** IAM actions required for the CreateApplicationPresignedUrl API call. */
	static readonly CREATE_APPLICATION_PRESIGNED_URL: string[] = [
		"kinesisanalytics:CreateApplicationPresignedUrl",
	];
	/** IAM actions required for the CreateApplicationSnapshot API call. */
	static readonly CREATE_APPLICATION_SNAPSHOT: string[] = [
		"kinesisanalytics:CreateApplicationSnapshot",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"kinesisanalytics:DeleteApplication",
	];
	/** IAM actions required for the DeleteApplicationCloudWatchLoggingOption API call. */
	static readonly DELETE_APPLICATION_CLOUD_WATCH_LOGGING_OPTION: string[] = [
		"kinesisanalytics:DeleteApplicationCloudWatchLoggingOption",
	];
	/** IAM actions required for the DeleteApplicationInputProcessingConfiguration API call. */
	static readonly DELETE_APPLICATION_INPUT_PROCESSING_CONFIGURATION: string[] =
		["kinesisanalytics:DeleteApplicationInputProcessingConfiguration"];
	/** IAM actions required for the DeleteApplicationOutput API call. */
	static readonly DELETE_APPLICATION_OUTPUT: string[] = [
		"kinesisanalytics:DeleteApplicationOutput",
	];
	/** IAM actions required for the DeleteApplicationReferenceDataSource API call. */
	static readonly DELETE_APPLICATION_REFERENCE_DATA_SOURCE: string[] = [
		"kinesisanalytics:DeleteApplicationReferenceDataSource",
	];
	/** IAM actions required for the DeleteApplicationSnapshot API call. */
	static readonly DELETE_APPLICATION_SNAPSHOT: string[] = [
		"kinesisanalytics:DeleteApplicationSnapshot",
	];
	/** IAM actions required for the DeleteApplicationVpcConfiguration API call. */
	static readonly DELETE_APPLICATION_VPC_CONFIGURATION: string[] = [
		"kinesisanalytics:DeleteApplicationVpcConfiguration",
	];
	/** IAM actions required for the DescribeApplication API call. */
	static readonly DESCRIBE_APPLICATION: string[] = [
		"kinesisanalytics:DescribeApplication",
	];
	/** IAM actions required for the DescribeApplicationOperation API call. */
	static readonly DESCRIBE_APPLICATION_OPERATION: string[] = [
		"kinesisanalytics:DescribeApplicationOperation",
	];
	/** IAM actions required for the DescribeApplicationSnapshot API call. */
	static readonly DESCRIBE_APPLICATION_SNAPSHOT: string[] = [
		"kinesisanalytics:DescribeApplicationSnapshot",
	];
	/** IAM actions required for the DescribeApplicationVersion API call. */
	static readonly DESCRIBE_APPLICATION_VERSION: string[] = [
		"kinesisanalytics:DescribeApplicationVersion",
	];
	/** IAM actions required for the DiscoverInputSchema API call. */
	static readonly DISCOVER_INPUT_SCHEMA: string[] = [
		"kinesisanalytics:DiscoverInputSchema",
		"iam:PassRole",
	];
	/** IAM actions required for the ListApplicationOperations API call. */
	static readonly LIST_APPLICATION_OPERATIONS: string[] = [
		"kinesisanalytics:ListApplicationOperations",
	];
	/** IAM actions required for the ListApplicationSnapshots API call. */
	static readonly LIST_APPLICATION_SNAPSHOTS: string[] = [
		"kinesisanalytics:ListApplicationSnapshots",
	];
	/** IAM actions required for the ListApplicationVersions API call. */
	static readonly LIST_APPLICATION_VERSIONS: string[] = [
		"kinesisanalytics:ListApplicationVersions",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [
		"kinesisanalytics:ListApplications",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"kinesisanalytics:ListTagsForResource",
	];
	/** IAM actions required for the RollbackApplication API call. */
	static readonly ROLLBACK_APPLICATION: string[] = [
		"kinesisanalytics:RollbackApplication",
	];
	/** IAM actions required for the StartApplication API call. */
	static readonly START_APPLICATION: string[] = [
		"kinesisanalytics:StartApplication",
	];
	/** IAM actions required for the StopApplication API call. */
	static readonly STOP_APPLICATION: string[] = [
		"kinesisanalytics:StopApplication",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["kinesisanalytics:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["kinesisanalytics:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [
		"iam:PassRole",
		"kinesisanalytics:UpdateApplication",
	];
	/** IAM actions required for the UpdateApplicationMaintenanceConfiguration API call. */
	static readonly UPDATE_APPLICATION_MAINTENANCE_CONFIGURATION: string[] = [
		"kinesisanalytics:UpdateApplicationMaintenanceConfiguration",
	];
}

/**
 * Condition key constants and builders for kinesisanalytics.
 */
export class KinesisanalyticsConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
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
