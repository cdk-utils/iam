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
	static readonly CreateMonitor = "networkmonitor:CreateMonitor";
	/** [Write] networkmonitor:CreateProbe */
	static readonly CreateProbe = "networkmonitor:CreateProbe";
	/** [Write] networkmonitor:DeleteMonitor */
	static readonly DeleteMonitor = "networkmonitor:DeleteMonitor";
	/** [Write] networkmonitor:DeleteProbe */
	static readonly DeleteProbe = "networkmonitor:DeleteProbe";
	/** [Read] networkmonitor:GetMonitor */
	static readonly actionGetMonitor = "networkmonitor:GetMonitor";
	/** [Read] networkmonitor:GetProbe */
	static readonly actionGetProbe = "networkmonitor:GetProbe";
	/** [List] networkmonitor:ListMonitors */
	static readonly ListMonitors = "networkmonitor:ListMonitors";
	/** [Read] networkmonitor:ListTagsForResource */
	static readonly ListTagsForResource = "networkmonitor:ListTagsForResource";
	/** [Tagging] networkmonitor:TagResource */
	static readonly TagResource = "networkmonitor:TagResource";
	/** [Tagging] networkmonitor:UntagResource */
	static readonly UntagResource = "networkmonitor:UntagResource";
	/** [Write] networkmonitor:UpdateMonitor */
	static readonly UpdateMonitor = "networkmonitor:UpdateMonitor";
	/** [Write] networkmonitor:UpdateProbe */
	static readonly UpdateProbe = "networkmonitor:UpdateProbe";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		NetworkmonitorActions.actionGetMonitor,
		NetworkmonitorActions.actionGetProbe,
		NetworkmonitorActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		NetworkmonitorActions.CreateMonitor,
		NetworkmonitorActions.CreateProbe,
		NetworkmonitorActions.DeleteMonitor,
		NetworkmonitorActions.DeleteProbe,
		NetworkmonitorActions.UpdateMonitor,
		NetworkmonitorActions.UpdateProbe,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		NetworkmonitorActions.ListMonitors,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		NetworkmonitorActions.TagResource,
		NetworkmonitorActions.UntagResource,
	];
}

/**
 * Properties for building a monitor ARN.
 */
export interface NetworkmonitorMonitorArnProps {
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
 * Parsed components of a monitor ARN.
 */
export interface NetworkmonitorMonitorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MonitorName component. */
	readonly monitorName: string;
}

/**
 * Properties for building a probe ARN.
 */
export interface NetworkmonitorProbeArnProps {
	/** The ProbeId component of the ARN. */
	readonly probeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a probe ARN.
 */
export interface NetworkmonitorProbeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProbeId component. */
	readonly probeId: string;
}

const MonitorArnRegex =
	/^arn:(?<partition>[^:]+):networkmonitor:(?<region>[^:]*):(?<account>[^:]*):monitor\/(?<monitorName>[^:/?]+)$/;
const ProbeArnRegex =
	/^arn:(?<partition>[^:]+):networkmonitor:(?<region>[^:]*):(?<account>[^:]*):probe\/(?<probeId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for networkmonitor resources.
 */
export class NetworkmonitorResources {
	/**
	 * Builds an ARN for the monitor resource.
	 */
	static monitor(props: NetworkmonitorMonitorArnProps): string {
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
	static parseMonitorArn(arn: string): NetworkmonitorMonitorArnComponents {
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
	static probe(props: NetworkmonitorProbeArnProps): string {
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
	static parseProbeArn(arn: string): NetworkmonitorProbeArnComponents {
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
	static readonly CreateMonitor: string[] = [
		"networkmonitor:CreateMonitor",
		"networkmonitor:TagResource",
	];
	/** IAM actions required for the CreateProbe API call. */
	static readonly CreateProbe: string[] = [
		"networkmonitor:CreateProbe",
		"networkmonitor:TagResource",
	];
	/** IAM actions required for the DeleteMonitor API call. */
	static readonly DeleteMonitor: string[] = ["networkmonitor:DeleteMonitor"];
	/** IAM actions required for the DeleteProbe API call. */
	static readonly DeleteProbe: string[] = ["networkmonitor:DeleteProbe"];
	/** IAM actions required for the GetMonitor API call. */
	static readonly opGetMonitor: string[] = ["networkmonitor:GetMonitor"];
	/** IAM actions required for the GetProbe API call. */
	static readonly opGetProbe: string[] = ["networkmonitor:GetProbe"];
	/** IAM actions required for the ListMonitors API call. */
	static readonly ListMonitors: string[] = ["networkmonitor:ListMonitors"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"networkmonitor:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["networkmonitor:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["networkmonitor:UntagResource"];
	/** IAM actions required for the UpdateMonitor API call. */
	static readonly UpdateMonitor: string[] = ["networkmonitor:UpdateMonitor"];
	/** IAM actions required for the UpdateProbe API call. */
	static readonly UpdateProbe: string[] = ["networkmonitor:UpdateProbe"];
}

/**
 * Condition key constants and builders for networkmonitor.
 */
export class NetworkmonitorConditions {
	/** Condition keys applicable to the CreateMonitor action. */
	static readonly CreateMonitorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProbe action. */
	static readonly CreateProbeConditionKeys: string[] = [
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
