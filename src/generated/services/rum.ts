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
	static readonly BATCH_CREATE_RUM_METRIC_DEFINITIONS =
		"rum:BatchCreateRumMetricDefinitions";
	/** [Write] rum:BatchDeleteRumMetricDefinitions */
	static readonly BATCH_DELETE_RUM_METRIC_DEFINITIONS =
		"rum:BatchDeleteRumMetricDefinitions";
	/** [Read] rum:BatchGetRumMetricDefinitions */
	static readonly BATCH_GET_RUM_METRIC_DEFINITIONS =
		"rum:BatchGetRumMetricDefinitions";
	/** [Write] rum:CreateAppMonitor */
	static readonly CREATE_APP_MONITOR = "rum:CreateAppMonitor";
	/** [Write] rum:DeleteAppMonitor */
	static readonly DELETE_APP_MONITOR = "rum:DeleteAppMonitor";
	/** [Write] rum:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "rum:DeleteResourcePolicy";
	/** [Write] rum:DeleteRumMetricsDestination */
	static readonly DELETE_RUM_METRICS_DESTINATION =
		"rum:DeleteRumMetricsDestination";
	/** [Read] rum:GetAppMonitor */
	static readonly GET_APP_MONITOR = "rum:GetAppMonitor";
	/** [Read] rum:GetAppMonitorData */
	static readonly GET_APP_MONITOR_DATA = "rum:GetAppMonitorData";
	/** [Read] rum:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "rum:GetResourcePolicy";
	/** [List] rum:ListAppMonitors */
	static readonly LIST_APP_MONITORS = "rum:ListAppMonitors";
	/** [Read] rum:ListRumMetricsDestinations */
	static readonly LIST_RUM_METRICS_DESTINATIONS =
		"rum:ListRumMetricsDestinations";
	/** [Read] rum:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "rum:ListTagsForResource";
	/** [Write] rum:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "rum:PutResourcePolicy";
	/** [Write] rum:PutRumEvents */
	static readonly PUT_RUM_EVENTS = "rum:PutRumEvents";
	/** [Write] rum:PutRumMetricsDestination */
	static readonly PUT_RUM_METRICS_DESTINATION = "rum:PutRumMetricsDestination";
	/** [Tagging] rum:TagResource */
	static readonly TAG_RESOURCE = "rum:TagResource";
	/** [Tagging] rum:UntagResource */
	static readonly UNTAG_RESOURCE = "rum:UntagResource";
	/** [Write] rum:UpdateAppMonitor */
	static readonly UPDATE_APP_MONITOR = "rum:UpdateAppMonitor";
	/** [Write] rum:UpdateRumMetricDefinition */
	static readonly UPDATE_RUM_METRIC_DEFINITION =
		"rum:UpdateRumMetricDefinition";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		RumActions.BATCH_GET_RUM_METRIC_DEFINITIONS,
		RumActions.GET_APP_MONITOR,
		RumActions.GET_APP_MONITOR_DATA,
		RumActions.GET_RESOURCE_POLICY,
		RumActions.LIST_RUM_METRICS_DESTINATIONS,
		RumActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		RumActions.BATCH_CREATE_RUM_METRIC_DEFINITIONS,
		RumActions.BATCH_DELETE_RUM_METRIC_DEFINITIONS,
		RumActions.CREATE_APP_MONITOR,
		RumActions.DELETE_APP_MONITOR,
		RumActions.DELETE_RESOURCE_POLICY,
		RumActions.DELETE_RUM_METRICS_DESTINATION,
		RumActions.PUT_RESOURCE_POLICY,
		RumActions.PUT_RUM_EVENTS,
		RumActions.PUT_RUM_METRICS_DESTINATION,
		RumActions.UPDATE_APP_MONITOR,
		RumActions.UPDATE_RUM_METRIC_DEFINITION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [RumActions.LIST_APP_MONITORS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		RumActions.TAG_RESOURCE,
		RumActions.UNTAG_RESOURCE,
	];
}

const AppMonitorResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rum:(?<region>[^:]*):(?<account>[^:]*):appmonitor/(?<name>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for rum resources.
 */
export class RumResources {
	/**
	 * Builds an ARN for the AppMonitorResource resource.
	 */
	static appMonitorResource(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAppMonitorResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
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
	static readonly BATCH_CREATE_RUM_METRIC_DEFINITIONS: string[] = [
		"rum:BatchCreateRumMetricDefinitions",
	];
	/** IAM actions required for the BatchDeleteRumMetricDefinitions API call. */
	static readonly BATCH_DELETE_RUM_METRIC_DEFINITIONS: string[] = [
		"rum:BatchDeleteRumMetricDefinitions",
	];
	/** IAM actions required for the BatchGetRumMetricDefinitions API call. */
	static readonly BATCH_GET_RUM_METRIC_DEFINITIONS: string[] = [
		"rum:BatchGetRumMetricDefinitions",
	];
	/** IAM actions required for the CreateAppMonitor API call. */
	static readonly CREATE_APP_MONITOR: string[] = [
		"rum:CreateAppMonitor",
		"rum:TagResource",
	];
	/** IAM actions required for the DeleteAppMonitor API call. */
	static readonly DELETE_APP_MONITOR: string[] = ["rum:DeleteAppMonitor"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"rum:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteRumMetricsDestination API call. */
	static readonly DELETE_RUM_METRICS_DESTINATION: string[] = [
		"rum:DeleteRumMetricsDestination",
	];
	/** IAM actions required for the GetAppMonitor API call. */
	static readonly GET_APP_MONITOR: string[] = ["rum:GetAppMonitor"];
	/** IAM actions required for the GetAppMonitorData API call. */
	static readonly GET_APP_MONITOR_DATA: string[] = ["rum:GetAppMonitorData"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = ["rum:GetResourcePolicy"];
	/** IAM actions required for the ListAppMonitors API call. */
	static readonly LIST_APP_MONITORS: string[] = ["rum:ListAppMonitors"];
	/** IAM actions required for the ListRumMetricsDestinations API call. */
	static readonly LIST_RUM_METRICS_DESTINATIONS: string[] = [
		"rum:ListRumMetricsDestinations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"rum:ListTagsForResource",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = ["rum:PutResourcePolicy"];
	/** IAM actions required for the PutRumEvents API call. */
	static readonly PUT_RUM_EVENTS: string[] = ["rum:PutRumEvents"];
	/** IAM actions required for the PutRumMetricsDestination API call. */
	static readonly PUT_RUM_METRICS_DESTINATION: string[] = [
		"iam:PassRole",
		"rum:PutRumMetricsDestination",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["rum:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["rum:UntagResource"];
	/** IAM actions required for the UpdateAppMonitor API call. */
	static readonly UPDATE_APP_MONITOR: string[] = ["rum:UpdateAppMonitor"];
	/** IAM actions required for the UpdateRumMetricDefinition API call. */
	static readonly UPDATE_RUM_METRIC_DEFINITION: string[] = [
		"rum:UpdateRumMetricDefinition",
	];
}

/**
 * Condition key constants and builders for rum.
 */
export class RumConditions {
	/** Condition keys applicable to the CreateAppMonitor action. */
	static readonly CREATE_APP_MONITOR_CONDITION_KEYS: string[] = [
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
