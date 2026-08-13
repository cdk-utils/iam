// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/rum.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the rum service.
 */
export class RumActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "rum";

	/** [Write] rum:BatchCreateRumMetricDefinitions */
	static readonly BatchCreateRumMetricDefinitions =
		"rum:BatchCreateRumMetricDefinitions";
	/** [Write] rum:BatchDeleteRumMetricDefinitions */
	static readonly BatchDeleteRumMetricDefinitions =
		"rum:BatchDeleteRumMetricDefinitions";
	/** [Read] rum:BatchGetRumMetricDefinitions */
	static readonly BatchGetRumMetricDefinitions =
		"rum:BatchGetRumMetricDefinitions";
	/** [Write] rum:CreateAppMonitor */
	static readonly CreateAppMonitor = "rum:CreateAppMonitor";
	/** [Write] rum:DeleteAppMonitor */
	static readonly DeleteAppMonitor = "rum:DeleteAppMonitor";
	/** [Write] rum:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "rum:DeleteResourcePolicy";
	/** [Write] rum:DeleteRumMetricsDestination */
	static readonly DeleteRumMetricsDestination =
		"rum:DeleteRumMetricsDestination";
	/** [Read] rum:GetAppMonitor */
	static readonly actionGetAppMonitor = "rum:GetAppMonitor";
	/** [Read] rum:GetAppMonitorData */
	static readonly actionGetAppMonitorData = "rum:GetAppMonitorData";
	/** [Read] rum:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "rum:GetResourcePolicy";
	/** [List] rum:ListAppMonitors */
	static readonly ListAppMonitors = "rum:ListAppMonitors";
	/** [Read] rum:ListRumMetricsDestinations */
	static readonly ListRumMetricsDestinations = "rum:ListRumMetricsDestinations";
	/** [Read] rum:ListTagsForResource */
	static readonly ListTagsForResource = "rum:ListTagsForResource";
	/** [Write] rum:PutResourcePolicy */
	static readonly PutResourcePolicy = "rum:PutResourcePolicy";
	/** [Write] rum:PutRumEvents */
	static readonly PutRumEvents = "rum:PutRumEvents";
	/** [Write] rum:PutRumMetricsDestination */
	static readonly PutRumMetricsDestination = "rum:PutRumMetricsDestination";
	/** [Tagging] rum:TagResource */
	static readonly TagResource = "rum:TagResource";
	/** [Tagging] rum:UntagResource */
	static readonly UntagResource = "rum:UntagResource";
	/** [Write] rum:UpdateAppMonitor */
	static readonly UpdateAppMonitor = "rum:UpdateAppMonitor";
	/** [Write] rum:UpdateRumMetricDefinition */
	static readonly UpdateRumMetricDefinition = "rum:UpdateRumMetricDefinition";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RumActions.BatchGetRumMetricDefinitions,
		RumActions.actionGetAppMonitor,
		RumActions.actionGetAppMonitorData,
		RumActions.actionGetResourcePolicy,
		RumActions.ListRumMetricsDestinations,
		RumActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RumActions.BatchCreateRumMetricDefinitions,
		RumActions.BatchDeleteRumMetricDefinitions,
		RumActions.CreateAppMonitor,
		RumActions.DeleteAppMonitor,
		RumActions.DeleteResourcePolicy,
		RumActions.DeleteRumMetricsDestination,
		RumActions.PutResourcePolicy,
		RumActions.PutRumEvents,
		RumActions.PutRumMetricsDestination,
		RumActions.UpdateAppMonitor,
		RumActions.UpdateRumMetricDefinition,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [RumActions.ListAppMonitors];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		RumActions.TagResource,
		RumActions.UntagResource,
	];
}

/**
 * Properties for building a AppMonitorResource ARN.
 */
export interface RumAppMonitorResourceArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AppMonitorResource ARN.
 */
export interface RumAppMonitorResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

const AppMonitorResourceArnRegex =
	/^arn:(?<partition>[^:]+):rum:(?<region>[^:]*):(?<account>[^:]*):appmonitor\/(?<name>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for rum resources.
 */
export class RumResources {
	/**
	 * Builds an ARN for the AppMonitorResource resource.
	 */
	static appMonitorResource(props: RumAppMonitorResourceArnProps): string {
		return `arn:${props.partition ?? "aws"}:rum:${props.region ?? "*"}:${props.account ?? "*"}:appmonitor/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AppMonitorResource resource.
	 */
	static isValidAppMonitorResourceArn(arn: string): boolean {
		return AppMonitorResourceArnRegex.test(arn);
	}

	/**
	 * Parses a AppMonitorResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppMonitorResourceArn(
		arn: string,
	): RumAppMonitorResourceArnComponents {
		const match = AppMonitorResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AppMonitorResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}
}

/**
 * API operation to required IAM actions mapping for rum.
 */
export class RumOperations {
	/** IAM actions required for the BatchCreateRumMetricDefinitions API call. */
	static readonly BatchCreateRumMetricDefinitions: string[] = [
		"rum:BatchCreateRumMetricDefinitions",
	];
	/** IAM actions required for the BatchDeleteRumMetricDefinitions API call. */
	static readonly BatchDeleteRumMetricDefinitions: string[] = [
		"rum:BatchDeleteRumMetricDefinitions",
	];
	/** IAM actions required for the BatchGetRumMetricDefinitions API call. */
	static readonly BatchGetRumMetricDefinitions: string[] = [
		"rum:BatchGetRumMetricDefinitions",
	];
	/** IAM actions required for the CreateAppMonitor API call. */
	static readonly CreateAppMonitor: string[] = [
		"rum:CreateAppMonitor",
		"rum:TagResource",
	];
	/** IAM actions required for the DeleteAppMonitor API call. */
	static readonly DeleteAppMonitor: string[] = ["rum:DeleteAppMonitor"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = ["rum:DeleteResourcePolicy"];
	/** IAM actions required for the DeleteRumMetricsDestination API call. */
	static readonly DeleteRumMetricsDestination: string[] = [
		"rum:DeleteRumMetricsDestination",
	];
	/** IAM actions required for the GetAppMonitor API call. */
	static readonly opGetAppMonitor: string[] = ["rum:GetAppMonitor"];
	/** IAM actions required for the GetAppMonitorData API call. */
	static readonly opGetAppMonitorData: string[] = ["rum:GetAppMonitorData"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = ["rum:GetResourcePolicy"];
	/** IAM actions required for the ListAppMonitors API call. */
	static readonly ListAppMonitors: string[] = ["rum:ListAppMonitors"];
	/** IAM actions required for the ListRumMetricsDestinations API call. */
	static readonly ListRumMetricsDestinations: string[] = [
		"rum:ListRumMetricsDestinations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["rum:ListTagsForResource"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["rum:PutResourcePolicy"];
	/** IAM actions required for the PutRumEvents API call. */
	static readonly PutRumEvents: string[] = ["rum:PutRumEvents"];
	/** IAM actions required for the PutRumMetricsDestination API call. */
	static readonly PutRumMetricsDestination: string[] = [
		"iam:PassRole",
		"rum:PutRumMetricsDestination",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["rum:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["rum:UntagResource"];
	/** IAM actions required for the UpdateAppMonitor API call. */
	static readonly UpdateAppMonitor: string[] = ["rum:UpdateAppMonitor"];
	/** IAM actions required for the UpdateRumMetricDefinition API call. */
	static readonly UpdateRumMetricDefinition: string[] = [
		"rum:UpdateRumMetricDefinition",
	];
}

/**
 * Condition key constants and builders for rum.
 */
export class RumConditions {
	/** Condition keys applicable to the CreateAppMonitor action. */
	static readonly CreateAppMonitorConditionKeys: string[] = [
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
