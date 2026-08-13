// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/networkflowmonitor.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the networkflowmonitor service.
 */
export class NetworkflowmonitorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "networkflowmonitor";

	/** [Write] networkflowmonitor:CreateMonitor */
	static readonly CREATE_MONITOR = "networkflowmonitor:CreateMonitor";
	/** [Write] networkflowmonitor:CreateScope */
	static readonly CREATE_SCOPE = "networkflowmonitor:CreateScope";
	/** [Write] networkflowmonitor:DeleteMonitor */
	static readonly DELETE_MONITOR = "networkflowmonitor:DeleteMonitor";
	/** [Write] networkflowmonitor:DeleteScope */
	static readonly DELETE_SCOPE = "networkflowmonitor:DeleteScope";
	/** [Read] networkflowmonitor:GetMonitor */
	static readonly GET_MONITOR = "networkflowmonitor:GetMonitor";
	/** [Read] networkflowmonitor:GetQueryResultsMonitorTopContributors */
	static readonly GET_QUERY_RESULTS_MONITOR_TOP_CONTRIBUTORS =
		"networkflowmonitor:GetQueryResultsMonitorTopContributors";
	/** [Read] networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributors */
	static readonly GET_QUERY_RESULTS_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS =
		"networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributors";
	/** [Read] networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributorsData */
	static readonly GET_QUERY_RESULTS_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS_DATA =
		"networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributorsData";
	/** [Read] networkflowmonitor:GetQueryStatusMonitorTopContributors */
	static readonly GET_QUERY_STATUS_MONITOR_TOP_CONTRIBUTORS =
		"networkflowmonitor:GetQueryStatusMonitorTopContributors";
	/** [Read] networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributors */
	static readonly GET_QUERY_STATUS_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS =
		"networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributors";
	/** [Read] networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributorsData */
	static readonly GET_QUERY_STATUS_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS_DATA =
		"networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributorsData";
	/** [Read] networkflowmonitor:GetScope */
	static readonly GET_SCOPE = "networkflowmonitor:GetScope";
	/** [List] networkflowmonitor:ListMonitors */
	static readonly LIST_MONITORS = "networkflowmonitor:ListMonitors";
	/** [List] networkflowmonitor:ListScopes */
	static readonly LIST_SCOPES = "networkflowmonitor:ListScopes";
	/** [Read] networkflowmonitor:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"networkflowmonitor:ListTagsForResource";
	/** [Write] networkflowmonitor:Publish */
	static readonly PUBLISH = "networkflowmonitor:Publish";
	/** [Write] networkflowmonitor:StartQueryMonitorTopContributors */
	static readonly START_QUERY_MONITOR_TOP_CONTRIBUTORS =
		"networkflowmonitor:StartQueryMonitorTopContributors";
	/** [Write] networkflowmonitor:StartQueryWorkloadInsightsTopContributors */
	static readonly START_QUERY_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS =
		"networkflowmonitor:StartQueryWorkloadInsightsTopContributors";
	/** [Write] networkflowmonitor:StartQueryWorkloadInsightsTopContributorsData */
	static readonly START_QUERY_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS_DATA =
		"networkflowmonitor:StartQueryWorkloadInsightsTopContributorsData";
	/** [Write] networkflowmonitor:StopQueryMonitorTopContributors */
	static readonly STOP_QUERY_MONITOR_TOP_CONTRIBUTORS =
		"networkflowmonitor:StopQueryMonitorTopContributors";
	/** [Write] networkflowmonitor:StopQueryWorkloadInsightsTopContributors */
	static readonly STOP_QUERY_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS =
		"networkflowmonitor:StopQueryWorkloadInsightsTopContributors";
	/** [Write] networkflowmonitor:StopQueryWorkloadInsightsTopContributorsData */
	static readonly STOP_QUERY_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS_DATA =
		"networkflowmonitor:StopQueryWorkloadInsightsTopContributorsData";
	/** [Tagging] networkflowmonitor:TagResource */
	static readonly TAG_RESOURCE = "networkflowmonitor:TagResource";
	/** [Tagging] networkflowmonitor:UntagResource */
	static readonly UNTAG_RESOURCE = "networkflowmonitor:UntagResource";
	/** [Write] networkflowmonitor:UpdateMonitor */
	static readonly UPDATE_MONITOR = "networkflowmonitor:UpdateMonitor";
	/** [Write] networkflowmonitor:UpdateScope */
	static readonly UPDATE_SCOPE = "networkflowmonitor:UpdateScope";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		NetworkflowmonitorActions.GET_MONITOR,
		NetworkflowmonitorActions.GET_QUERY_RESULTS_MONITOR_TOP_CONTRIBUTORS,
		NetworkflowmonitorActions.GET_QUERY_RESULTS_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS,
		NetworkflowmonitorActions.GET_QUERY_RESULTS_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS_DATA,
		NetworkflowmonitorActions.GET_QUERY_STATUS_MONITOR_TOP_CONTRIBUTORS,
		NetworkflowmonitorActions.GET_QUERY_STATUS_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS,
		NetworkflowmonitorActions.GET_QUERY_STATUS_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS_DATA,
		NetworkflowmonitorActions.GET_SCOPE,
		NetworkflowmonitorActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		NetworkflowmonitorActions.CREATE_MONITOR,
		NetworkflowmonitorActions.CREATE_SCOPE,
		NetworkflowmonitorActions.DELETE_MONITOR,
		NetworkflowmonitorActions.DELETE_SCOPE,
		NetworkflowmonitorActions.PUBLISH,
		NetworkflowmonitorActions.START_QUERY_MONITOR_TOP_CONTRIBUTORS,
		NetworkflowmonitorActions.START_QUERY_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS,
		NetworkflowmonitorActions.START_QUERY_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS_DATA,
		NetworkflowmonitorActions.STOP_QUERY_MONITOR_TOP_CONTRIBUTORS,
		NetworkflowmonitorActions.STOP_QUERY_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS,
		NetworkflowmonitorActions.STOP_QUERY_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS_DATA,
		NetworkflowmonitorActions.UPDATE_MONITOR,
		NetworkflowmonitorActions.UPDATE_SCOPE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		NetworkflowmonitorActions.LIST_MONITORS,
		NetworkflowmonitorActions.LIST_SCOPES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		NetworkflowmonitorActions.TAG_RESOURCE,
		NetworkflowmonitorActions.UNTAG_RESOURCE,
	];
}

const MonitorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkflowmonitor:(?<region>[^:]*):(?<account>[^:]*):monitor/(?<monitorName>[^:/?]+)$",
);
const ScopeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkflowmonitor:(?<region>[^:]*):(?<account>[^:]*):scope/(?<scopeId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for networkflowmonitor resources.
 */
export class NetworkflowmonitorResources {
	/**
	 * Builds an ARN for the monitor resource.
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
		return `arn:${props.partition ?? "aws"}:networkflowmonitor:${props.region ?? "*"}:${props.account ?? "*"}:monitor/${props.monitorName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the monitor resource.
	 */
	static isValidMonitorArn(arn: string): boolean {
		return MonitorArnRegex.test(arn);
	}

	/**
	 * Parses a monitor ARN into its components.
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
			throw new Error(`Invalid monitor ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			monitorName: match.groups!.monitorName,
		};
	}

	/**
	 * Builds an ARN for the scope resource.
	 */
	static scope(props: {
		/** The ScopeId component of the ARN. */
		readonly scopeId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:networkflowmonitor:${props.region ?? "*"}:${props.account ?? "*"}:scope/${props.scopeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the scope resource.
	 */
	static isValidScopeArn(arn: string): boolean {
		return ScopeArnRegex.test(arn);
	}

	/**
	 * Parses a scope ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScopeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		scopeId: string;
	} {
		const match = ScopeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid scope ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scopeId: match.groups!.scopeId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for networkflowmonitor.
 */
export class NetworkflowmonitorOperations {
	/** IAM actions required for the CreateMonitor API call. */
	static readonly CREATE_MONITOR: string[] = [
		"networkflowmonitor:CreateMonitor",
		"networkflowmonitor:TagResource",
	];
	/** IAM actions required for the CreateScope API call. */
	static readonly CREATE_SCOPE: string[] = [
		"networkflowmonitor:CreateScope",
		"networkflowmonitor:TagResource",
	];
	/** IAM actions required for the DeleteMonitor API call. */
	static readonly DELETE_MONITOR: string[] = [
		"networkflowmonitor:DeleteMonitor",
	];
	/** IAM actions required for the DeleteScope API call. */
	static readonly DELETE_SCOPE: string[] = ["networkflowmonitor:DeleteScope"];
	/** IAM actions required for the GetMonitor API call. */
	static readonly GET_MONITOR: string[] = ["networkflowmonitor:GetMonitor"];
	/** IAM actions required for the GetQueryResultsMonitorTopContributors API call. */
	static readonly GET_QUERY_RESULTS_MONITOR_TOP_CONTRIBUTORS: string[] = [
		"networkflowmonitor:GetQueryResultsMonitorTopContributors",
	];
	/** IAM actions required for the GetQueryResultsWorkloadInsightsTopContributors API call. */
	static readonly GET_QUERY_RESULTS_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS: string[] =
		["networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributors"];
	/** IAM actions required for the GetQueryResultsWorkloadInsightsTopContributorsData API call. */
	static readonly GET_QUERY_RESULTS_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS_DATA: string[] =
		["networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributorsData"];
	/** IAM actions required for the GetQueryStatusMonitorTopContributors API call. */
	static readonly GET_QUERY_STATUS_MONITOR_TOP_CONTRIBUTORS: string[] = [
		"networkflowmonitor:GetQueryStatusMonitorTopContributors",
	];
	/** IAM actions required for the GetQueryStatusWorkloadInsightsTopContributors API call. */
	static readonly GET_QUERY_STATUS_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS: string[] =
		["networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributors"];
	/** IAM actions required for the GetQueryStatusWorkloadInsightsTopContributorsData API call. */
	static readonly GET_QUERY_STATUS_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS_DATA: string[] =
		["networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributorsData"];
	/** IAM actions required for the GetScope API call. */
	static readonly GET_SCOPE: string[] = ["networkflowmonitor:GetScope"];
	/** IAM actions required for the ListMonitors API call. */
	static readonly LIST_MONITORS: string[] = ["networkflowmonitor:ListMonitors"];
	/** IAM actions required for the ListScopes API call. */
	static readonly LIST_SCOPES: string[] = ["networkflowmonitor:ListScopes"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"networkflowmonitor:ListTagsForResource",
	];
	/** IAM actions required for the StartQueryMonitorTopContributors API call. */
	static readonly START_QUERY_MONITOR_TOP_CONTRIBUTORS: string[] = [
		"networkflowmonitor:StartQueryMonitorTopContributors",
	];
	/** IAM actions required for the StartQueryWorkloadInsightsTopContributors API call. */
	static readonly START_QUERY_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS: string[] = [
		"networkflowmonitor:StartQueryWorkloadInsightsTopContributors",
	];
	/** IAM actions required for the StartQueryWorkloadInsightsTopContributorsData API call. */
	static readonly START_QUERY_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS_DATA: string[] =
		["networkflowmonitor:StartQueryWorkloadInsightsTopContributorsData"];
	/** IAM actions required for the StopQueryMonitorTopContributors API call. */
	static readonly STOP_QUERY_MONITOR_TOP_CONTRIBUTORS: string[] = [
		"networkflowmonitor:StopQueryMonitorTopContributors",
	];
	/** IAM actions required for the StopQueryWorkloadInsightsTopContributors API call. */
	static readonly STOP_QUERY_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS: string[] = [
		"networkflowmonitor:StopQueryWorkloadInsightsTopContributors",
	];
	/** IAM actions required for the StopQueryWorkloadInsightsTopContributorsData API call. */
	static readonly STOP_QUERY_WORKLOAD_INSIGHTS_TOP_CONTRIBUTORS_DATA: string[] =
		["networkflowmonitor:StopQueryWorkloadInsightsTopContributorsData"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["networkflowmonitor:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"networkflowmonitor:UntagResource",
	];
	/** IAM actions required for the UpdateMonitor API call. */
	static readonly UPDATE_MONITOR: string[] = [
		"networkflowmonitor:UpdateMonitor",
	];
	/** IAM actions required for the UpdateScope API call. */
	static readonly UPDATE_SCOPE: string[] = ["networkflowmonitor:UpdateScope"];
}

/**
 * Condition key constants and builders for networkflowmonitor.
 */
export class NetworkflowmonitorConditions {
	/** Condition keys applicable to the CreateMonitor action. */
	static readonly CREATE_MONITOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScope action. */
	static readonly CREATE_SCOPE_CONDITION_KEYS: string[] = [
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
