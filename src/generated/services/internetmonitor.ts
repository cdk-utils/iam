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
	static readonly CreateMonitor = "internetmonitor:CreateMonitor";
	/** [Write] internetmonitor:DeleteMonitor */
	static readonly DeleteMonitor = "internetmonitor:DeleteMonitor";
	/** [Read] internetmonitor:GetHealthEvent */
	static readonly actionGetHealthEvent = "internetmonitor:GetHealthEvent";
	/** [Read] internetmonitor:GetInternetEvent */
	static readonly actionGetInternetEvent = "internetmonitor:GetInternetEvent";
	/** [Read] internetmonitor:GetMonitor */
	static readonly actionGetMonitor = "internetmonitor:GetMonitor";
	/** [Read] internetmonitor:GetQueryResults */
	static readonly actionGetQueryResults = "internetmonitor:GetQueryResults";
	/** [Read] internetmonitor:GetQueryStatus */
	static readonly actionGetQueryStatus = "internetmonitor:GetQueryStatus";
	/** [Write] internetmonitor:Link */
	static readonly Link = "internetmonitor:Link";
	/** [List] internetmonitor:ListHealthEvents */
	static readonly ListHealthEvents = "internetmonitor:ListHealthEvents";
	/** [List] internetmonitor:ListInternetEvents */
	static readonly ListInternetEvents = "internetmonitor:ListInternetEvents";
	/** [List] internetmonitor:ListMonitors */
	static readonly ListMonitors = "internetmonitor:ListMonitors";
	/** [Read] internetmonitor:ListTagsForResource */
	static readonly ListTagsForResource = "internetmonitor:ListTagsForResource";
	/** [Read] internetmonitor:StartQuery */
	static readonly StartQuery = "internetmonitor:StartQuery";
	/** [Read] internetmonitor:StopQuery */
	static readonly StopQuery = "internetmonitor:StopQuery";
	/** [Tagging] internetmonitor:TagResource */
	static readonly TagResource = "internetmonitor:TagResource";
	/** [Tagging] internetmonitor:UntagResource */
	static readonly UntagResource = "internetmonitor:UntagResource";
	/** [Write] internetmonitor:UpdateMonitor */
	static readonly UpdateMonitor = "internetmonitor:UpdateMonitor";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		InternetmonitorActions.actionGetHealthEvent,
		InternetmonitorActions.actionGetInternetEvent,
		InternetmonitorActions.actionGetMonitor,
		InternetmonitorActions.actionGetQueryResults,
		InternetmonitorActions.actionGetQueryStatus,
		InternetmonitorActions.ListTagsForResource,
		InternetmonitorActions.StartQuery,
		InternetmonitorActions.StopQuery,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		InternetmonitorActions.CreateMonitor,
		InternetmonitorActions.DeleteMonitor,
		InternetmonitorActions.Link,
		InternetmonitorActions.UpdateMonitor,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		InternetmonitorActions.ListHealthEvents,
		InternetmonitorActions.ListInternetEvents,
		InternetmonitorActions.ListMonitors,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		InternetmonitorActions.TagResource,
		InternetmonitorActions.UntagResource,
	];
}

/**
 * Properties for building a HealthEvent ARN.
 */
export interface InternetmonitorHealthEventArnProps {
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
}

/**
 * Parsed components of a HealthEvent ARN.
 */
export interface InternetmonitorHealthEventArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MonitorName component. */
	readonly monitorName: string;
	/** The EventId component. */
	readonly eventId: string;
}

/**
 * Properties for building a InternetEvent ARN.
 */
export interface InternetmonitorInternetEventArnProps {
	/** The InternetEventId component of the ARN. */
	readonly internetEventId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a InternetEvent ARN.
 */
export interface InternetmonitorInternetEventArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InternetEventId component. */
	readonly internetEventId: string;
}

/**
 * Properties for building a Monitor ARN.
 */
export interface InternetmonitorMonitorArnProps {
	/** The MonitorName component of the ARN. */
	readonly monitorName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Monitor ARN.
 */
export interface InternetmonitorMonitorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MonitorName component. */
	readonly monitorName: string;
}

const HealthEventArnRegex =
	/^arn:(?<partition>[^:]+):internetmonitor:(?<region>[^:]*):(?<account>[^:]*):monitor\/(?<monitorName>[^:/?]+)\/health-event\/(?<eventId>[^:/?]+)$/;
const InternetEventArnRegex =
	/^arn:(?<partition>[^:]+):internetmonitor::(?<account>[^:]*):internet-event\/(?<internetEventId>[^:/?]+)$/;
const MonitorArnRegex =
	/^arn:(?<partition>[^:]+):internetmonitor:(?<region>[^:]*):(?<account>[^:]*):monitor\/(?<monitorName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for internetmonitor resources.
 */
export class InternetmonitorResources {
	/**
	 * Builds an ARN for the HealthEvent resource.
	 */
	static healthEvent(props: InternetmonitorHealthEventArnProps): string {
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
	static parseHealthEventArn(
		arn: string,
	): InternetmonitorHealthEventArnComponents {
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
	static internetEvent(props: InternetmonitorInternetEventArnProps): string {
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
	static parseInternetEventArn(
		arn: string,
	): InternetmonitorInternetEventArnComponents {
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
	static monitor(props: InternetmonitorMonitorArnProps): string {
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
	static parseMonitorArn(arn: string): InternetmonitorMonitorArnComponents {
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
	static readonly CreateMonitor: string[] = [
		"internetmonitor:CreateMonitor",
		"internetmonitor:TagResource",
	];
	/** IAM actions required for the DeleteMonitor API call. */
	static readonly DeleteMonitor: string[] = ["internetmonitor:DeleteMonitor"];
	/** IAM actions required for the GetHealthEvent API call. */
	static readonly opGetHealthEvent: string[] = [
		"internetmonitor:GetHealthEvent",
	];
	/** IAM actions required for the GetInternetEvent API call. */
	static readonly opGetInternetEvent: string[] = [
		"internetmonitor:GetInternetEvent",
	];
	/** IAM actions required for the GetMonitor API call. */
	static readonly opGetMonitor: string[] = ["internetmonitor:GetMonitor"];
	/** IAM actions required for the GetQueryResults API call. */
	static readonly opGetQueryResults: string[] = [
		"internetmonitor:GetQueryResults",
	];
	/** IAM actions required for the GetQueryStatus API call. */
	static readonly opGetQueryStatus: string[] = [
		"internetmonitor:GetQueryStatus",
	];
	/** IAM actions required for the ListHealthEvents API call. */
	static readonly ListHealthEvents: string[] = [
		"internetmonitor:ListHealthEvents",
	];
	/** IAM actions required for the ListInternetEvents API call. */
	static readonly ListInternetEvents: string[] = [
		"internetmonitor:ListInternetEvents",
	];
	/** IAM actions required for the ListMonitors API call. */
	static readonly ListMonitors: string[] = ["internetmonitor:ListMonitors"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"internetmonitor:ListTagsForResource",
	];
	/** IAM actions required for the StartQuery API call. */
	static readonly StartQuery: string[] = ["internetmonitor:StartQuery"];
	/** IAM actions required for the StopQuery API call. */
	static readonly StopQuery: string[] = ["internetmonitor:StopQuery"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["internetmonitor:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["internetmonitor:UntagResource"];
	/** IAM actions required for the UpdateMonitor API call. */
	static readonly UpdateMonitor: string[] = ["internetmonitor:UpdateMonitor"];
}

/**
 * Condition key constants and builders for internetmonitor.
 */
export class InternetmonitorConditions {
	/** Condition keys applicable to the CreateMonitor action. */
	static readonly CreateMonitorConditionKeys: string[] = [
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
