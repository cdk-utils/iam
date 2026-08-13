// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/networkmonitor.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the networkmonitor service.
 */
export class NetworkmonitorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "networkmonitor";

	/** [Write] networkmonitor:CreateMonitor */
	static readonly CREATE_MONITOR = "networkmonitor:CreateMonitor";
	/** [Write] networkmonitor:CreateProbe */
	static readonly CREATE_PROBE = "networkmonitor:CreateProbe";
	/** [Write] networkmonitor:DeleteMonitor */
	static readonly DELETE_MONITOR = "networkmonitor:DeleteMonitor";
	/** [Write] networkmonitor:DeleteProbe */
	static readonly DELETE_PROBE = "networkmonitor:DeleteProbe";
	/** [Read] networkmonitor:GetMonitor */
	static readonly GET_MONITOR = "networkmonitor:GetMonitor";
	/** [Read] networkmonitor:GetProbe */
	static readonly GET_PROBE = "networkmonitor:GetProbe";
	/** [List] networkmonitor:ListMonitors */
	static readonly LIST_MONITORS = "networkmonitor:ListMonitors";
	/** [Read] networkmonitor:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "networkmonitor:ListTagsForResource";
	/** [Tagging] networkmonitor:TagResource */
	static readonly TAG_RESOURCE = "networkmonitor:TagResource";
	/** [Tagging] networkmonitor:UntagResource */
	static readonly UNTAG_RESOURCE = "networkmonitor:UntagResource";
	/** [Write] networkmonitor:UpdateMonitor */
	static readonly UPDATE_MONITOR = "networkmonitor:UpdateMonitor";
	/** [Write] networkmonitor:UpdateProbe */
	static readonly UPDATE_PROBE = "networkmonitor:UpdateProbe";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		NetworkmonitorActions.GET_MONITOR,
		NetworkmonitorActions.GET_PROBE,
		NetworkmonitorActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		NetworkmonitorActions.CREATE_MONITOR,
		NetworkmonitorActions.CREATE_PROBE,
		NetworkmonitorActions.DELETE_MONITOR,
		NetworkmonitorActions.DELETE_PROBE,
		NetworkmonitorActions.UPDATE_MONITOR,
		NetworkmonitorActions.UPDATE_PROBE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		NetworkmonitorActions.LIST_MONITORS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		NetworkmonitorActions.TAG_RESOURCE,
		NetworkmonitorActions.UNTAG_RESOURCE,
	];
}

const MonitorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkmonitor:(?<region>[^:]*):(?<account>[^:]*):monitor/(?<monitorName>[^:/?]+)$",
);
const ProbeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):networkmonitor:(?<region>[^:]*):(?<account>[^:]*):probe/(?<probeId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for networkmonitor resources.
 */
export class NetworkmonitorResources {
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
		return `arn:${props.partition ?? "aws"}:networkmonitor:${props.region ?? "*"}:${props.account ?? "*"}:monitor/${props.monitorName}`;
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
	 * Builds an ARN for the probe resource.
	 */
	static probe(props: {
		/** The ProbeId component of the ARN. */
		readonly probeId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:networkmonitor:${props.region ?? "*"}:${props.account ?? "*"}:probe/${props.probeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the probe resource.
	 */
	static isValidProbeArn(arn: string): boolean {
		return ProbeArnRegex.test(arn);
	}

	/**
	 * Parses a probe ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProbeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		probeId: string;
	} {
		const match = ProbeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid probe ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			probeId: match.groups!.probeId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for networkmonitor.
 */
export class NetworkmonitorOperations {
	/** IAM actions required for the CreateMonitor API call. */
	static readonly CREATE_MONITOR: string[] = [
		"networkmonitor:CreateMonitor",
		"networkmonitor:TagResource",
	];
	/** IAM actions required for the CreateProbe API call. */
	static readonly CREATE_PROBE: string[] = [
		"networkmonitor:CreateProbe",
		"networkmonitor:TagResource",
	];
	/** IAM actions required for the DeleteMonitor API call. */
	static readonly DELETE_MONITOR: string[] = ["networkmonitor:DeleteMonitor"];
	/** IAM actions required for the DeleteProbe API call. */
	static readonly DELETE_PROBE: string[] = ["networkmonitor:DeleteProbe"];
	/** IAM actions required for the GetMonitor API call. */
	static readonly GET_MONITOR: string[] = ["networkmonitor:GetMonitor"];
	/** IAM actions required for the GetProbe API call. */
	static readonly GET_PROBE: string[] = ["networkmonitor:GetProbe"];
	/** IAM actions required for the ListMonitors API call. */
	static readonly LIST_MONITORS: string[] = ["networkmonitor:ListMonitors"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"networkmonitor:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["networkmonitor:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["networkmonitor:UntagResource"];
	/** IAM actions required for the UpdateMonitor API call. */
	static readonly UPDATE_MONITOR: string[] = ["networkmonitor:UpdateMonitor"];
	/** IAM actions required for the UpdateProbe API call. */
	static readonly UPDATE_PROBE: string[] = ["networkmonitor:UpdateProbe"];
}

/**
 * Condition key constants and builders for networkmonitor.
 */
export class NetworkmonitorConditions {
	/** Condition keys applicable to the CreateMonitor action. */
	static readonly CREATE_MONITOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProbe action. */
	static readonly CREATE_PROBE_CONDITION_KEYS: string[] = [
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
