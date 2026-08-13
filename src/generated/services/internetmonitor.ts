// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/internetmonitor.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the internetmonitor service.
 */
export class InternetmonitorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "internetmonitor";

	/** [Write] internetmonitor:CreateMonitor */
	static readonly CREATE_MONITOR = "internetmonitor:CreateMonitor";
	/** [Write] internetmonitor:DeleteMonitor */
	static readonly DELETE_MONITOR = "internetmonitor:DeleteMonitor";
	/** [Read] internetmonitor:GetHealthEvent */
	static readonly GET_HEALTH_EVENT = "internetmonitor:GetHealthEvent";
	/** [Read] internetmonitor:GetInternetEvent */
	static readonly GET_INTERNET_EVENT = "internetmonitor:GetInternetEvent";
	/** [Read] internetmonitor:GetMonitor */
	static readonly GET_MONITOR = "internetmonitor:GetMonitor";
	/** [Read] internetmonitor:GetQueryResults */
	static readonly GET_QUERY_RESULTS = "internetmonitor:GetQueryResults";
	/** [Read] internetmonitor:GetQueryStatus */
	static readonly GET_QUERY_STATUS = "internetmonitor:GetQueryStatus";
	/** [Write] internetmonitor:Link */
	static readonly LINK = "internetmonitor:Link";
	/** [List] internetmonitor:ListHealthEvents */
	static readonly LIST_HEALTH_EVENTS = "internetmonitor:ListHealthEvents";
	/** [List] internetmonitor:ListInternetEvents */
	static readonly LIST_INTERNET_EVENTS = "internetmonitor:ListInternetEvents";
	/** [List] internetmonitor:ListMonitors */
	static readonly LIST_MONITORS = "internetmonitor:ListMonitors";
	/** [Read] internetmonitor:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"internetmonitor:ListTagsForResource";
	/** [Read] internetmonitor:StartQuery */
	static readonly START_QUERY = "internetmonitor:StartQuery";
	/** [Read] internetmonitor:StopQuery */
	static readonly STOP_QUERY = "internetmonitor:StopQuery";
	/** [Tagging] internetmonitor:TagResource */
	static readonly TAG_RESOURCE = "internetmonitor:TagResource";
	/** [Tagging] internetmonitor:UntagResource */
	static readonly UNTAG_RESOURCE = "internetmonitor:UntagResource";
	/** [Write] internetmonitor:UpdateMonitor */
	static readonly UPDATE_MONITOR = "internetmonitor:UpdateMonitor";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		InternetmonitorActions.GET_HEALTH_EVENT,
		InternetmonitorActions.GET_INTERNET_EVENT,
		InternetmonitorActions.GET_MONITOR,
		InternetmonitorActions.GET_QUERY_RESULTS,
		InternetmonitorActions.GET_QUERY_STATUS,
		InternetmonitorActions.LIST_TAGS_FOR_RESOURCE,
		InternetmonitorActions.START_QUERY,
		InternetmonitorActions.STOP_QUERY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		InternetmonitorActions.CREATE_MONITOR,
		InternetmonitorActions.DELETE_MONITOR,
		InternetmonitorActions.LINK,
		InternetmonitorActions.UPDATE_MONITOR,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		InternetmonitorActions.LIST_HEALTH_EVENTS,
		InternetmonitorActions.LIST_INTERNET_EVENTS,
		InternetmonitorActions.LIST_MONITORS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		InternetmonitorActions.TAG_RESOURCE,
		InternetmonitorActions.UNTAG_RESOURCE,
	];
}

const HealthEventArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):internetmonitor:(?<region>[^:]*):(?<account>[^:]*):monitor/(?<monitorName>[^:/?]+)/health-event/(?<eventId>[^:/?]+)$",
);
const InternetEventArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):internetmonitor::(?<account>[^:]*):internet-event/(?<internetEventId>[^:/?]+)$",
);
const MonitorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):internetmonitor:(?<region>[^:]*):(?<account>[^:]*):monitor/(?<monitorName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for internetmonitor resources.
 */
export class InternetmonitorResources {
	/**
	 * Builds an ARN for the HealthEvent resource.
	 */
	static healthEvent(props: {
		/** The MonitorName component of the ARN. */
		readonly monitorName: string;
		/** The EventId component of the ARN. */
		readonly eventId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:internetmonitor:${props.region ?? "*"}:${props.account ?? "*"}:monitor/${props.monitorName}/health-event/${props.eventId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the HealthEvent resource.
	 */
	static isValidHealthEventArn(arn: string): boolean {
		return HealthEventArnRegex.test(arn);
	}

	/**
	 * Parses a HealthEvent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHealthEventArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		monitorName: string;
		eventId: string;
	} {
		const match = HealthEventArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid HealthEvent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			monitorName: match.groups!.monitorName,
			eventId: match.groups!.eventId,
		};
	}

	/**
	 * Builds an ARN for the InternetEvent resource.
	 */
	static internetEvent(props: {
		/** The InternetEventId component of the ARN. */
		readonly internetEventId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:internetmonitor::${props.account ?? "*"}:internet-event/${props.internetEventId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the InternetEvent resource.
	 */
	static isValidInternetEventArn(arn: string): boolean {
		return InternetEventArnRegex.test(arn);
	}

	/**
	 * Parses a InternetEvent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInternetEventArn(arn: string): {
		partition: string;
		account: string;
		internetEventId: string;
	} {
		const match = InternetEventArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid InternetEvent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			internetEventId: match.groups!.internetEventId,
		};
	}

	/**
	 * Builds an ARN for the Monitor resource.
	 */
	static monitor(props: {
		/** The MonitorName component of the ARN. */
		readonly monitorName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:internetmonitor:${props.region ?? "*"}:${props.account ?? "*"}:monitor/${props.monitorName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Monitor resource.
	 */
	static isValidMonitorArn(arn: string): boolean {
		return MonitorArnRegex.test(arn);
	}

	/**
	 * Parses a Monitor ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMonitorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		monitorName: string;
	} {
		const match = MonitorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Monitor ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			monitorName: match.groups!.monitorName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for internetmonitor.
 */
export class InternetmonitorOperations {
	/** IAM actions required for the CreateMonitor API call. */
	static readonly CREATE_MONITOR: string[] = [
		"internetmonitor:CreateMonitor",
		"internetmonitor:TagResource",
	];
	/** IAM actions required for the DeleteMonitor API call. */
	static readonly DELETE_MONITOR: string[] = ["internetmonitor:DeleteMonitor"];
	/** IAM actions required for the GetHealthEvent API call. */
	static readonly GET_HEALTH_EVENT: string[] = [
		"internetmonitor:GetHealthEvent",
	];
	/** IAM actions required for the GetInternetEvent API call. */
	static readonly GET_INTERNET_EVENT: string[] = [
		"internetmonitor:GetInternetEvent",
	];
	/** IAM actions required for the GetMonitor API call. */
	static readonly GET_MONITOR: string[] = ["internetmonitor:GetMonitor"];
	/** IAM actions required for the GetQueryResults API call. */
	static readonly GET_QUERY_RESULTS: string[] = [
		"internetmonitor:GetQueryResults",
	];
	/** IAM actions required for the GetQueryStatus API call. */
	static readonly GET_QUERY_STATUS: string[] = [
		"internetmonitor:GetQueryStatus",
	];
	/** IAM actions required for the ListHealthEvents API call. */
	static readonly LIST_HEALTH_EVENTS: string[] = [
		"internetmonitor:ListHealthEvents",
	];
	/** IAM actions required for the ListInternetEvents API call. */
	static readonly LIST_INTERNET_EVENTS: string[] = [
		"internetmonitor:ListInternetEvents",
	];
	/** IAM actions required for the ListMonitors API call. */
	static readonly LIST_MONITORS: string[] = ["internetmonitor:ListMonitors"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"internetmonitor:ListTagsForResource",
	];
	/** IAM actions required for the StartQuery API call. */
	static readonly START_QUERY: string[] = ["internetmonitor:StartQuery"];
	/** IAM actions required for the StopQuery API call. */
	static readonly STOP_QUERY: string[] = ["internetmonitor:StopQuery"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["internetmonitor:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["internetmonitor:UntagResource"];
	/** IAM actions required for the UpdateMonitor API call. */
	static readonly UPDATE_MONITOR: string[] = ["internetmonitor:UpdateMonitor"];
}

/**
 * Condition key constants and builders for internetmonitor.
 */
export class InternetmonitorConditions {
	/** Condition keys applicable to the CreateMonitor action. */
	static readonly CREATE_MONITOR_CONDITION_KEYS: string[] = [
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
