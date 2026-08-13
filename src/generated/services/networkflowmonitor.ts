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
	static readonly CreateMonitor = "networkflowmonitor:CreateMonitor";
	/** [Write] networkflowmonitor:CreateScope */
	static readonly CreateScope = "networkflowmonitor:CreateScope";
	/** [Write] networkflowmonitor:DeleteMonitor */
	static readonly DeleteMonitor = "networkflowmonitor:DeleteMonitor";
	/** [Write] networkflowmonitor:DeleteScope */
	static readonly DeleteScope = "networkflowmonitor:DeleteScope";
	/** [Read] networkflowmonitor:GetMonitor */
	static readonly actionGetMonitor = "networkflowmonitor:GetMonitor";
	/** [Read] networkflowmonitor:GetQueryResultsMonitorTopContributors */
	static readonly actionGetQueryResultsMonitorTopContributors =
		"networkflowmonitor:GetQueryResultsMonitorTopContributors";
	/** [Read] networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributors */
	static readonly actionGetQueryResultsWorkloadInsightsTopContributors =
		"networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributors";
	/** [Read] networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributorsData */
	static readonly actionGetQueryResultsWorkloadInsightsTopContributorsData =
		"networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributorsData";
	/** [Read] networkflowmonitor:GetQueryStatusMonitorTopContributors */
	static readonly actionGetQueryStatusMonitorTopContributors =
		"networkflowmonitor:GetQueryStatusMonitorTopContributors";
	/** [Read] networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributors */
	static readonly actionGetQueryStatusWorkloadInsightsTopContributors =
		"networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributors";
	/** [Read] networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributorsData */
	static readonly actionGetQueryStatusWorkloadInsightsTopContributorsData =
		"networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributorsData";
	/** [Read] networkflowmonitor:GetScope */
	static readonly actionGetScope = "networkflowmonitor:GetScope";
	/** [List] networkflowmonitor:ListMonitors */
	static readonly ListMonitors = "networkflowmonitor:ListMonitors";
	/** [List] networkflowmonitor:ListScopes */
	static readonly ListScopes = "networkflowmonitor:ListScopes";
	/** [Read] networkflowmonitor:ListTagsForResource */
	static readonly ListTagsForResource =
		"networkflowmonitor:ListTagsForResource";
	/** [Write] networkflowmonitor:Publish */
	static readonly Publish = "networkflowmonitor:Publish";
	/** [Write] networkflowmonitor:StartQueryMonitorTopContributors */
	static readonly StartQueryMonitorTopContributors =
		"networkflowmonitor:StartQueryMonitorTopContributors";
	/** [Write] networkflowmonitor:StartQueryWorkloadInsightsTopContributors */
	static readonly StartQueryWorkloadInsightsTopContributors =
		"networkflowmonitor:StartQueryWorkloadInsightsTopContributors";
	/** [Write] networkflowmonitor:StartQueryWorkloadInsightsTopContributorsData */
	static readonly StartQueryWorkloadInsightsTopContributorsData =
		"networkflowmonitor:StartQueryWorkloadInsightsTopContributorsData";
	/** [Write] networkflowmonitor:StopQueryMonitorTopContributors */
	static readonly StopQueryMonitorTopContributors =
		"networkflowmonitor:StopQueryMonitorTopContributors";
	/** [Write] networkflowmonitor:StopQueryWorkloadInsightsTopContributors */
	static readonly StopQueryWorkloadInsightsTopContributors =
		"networkflowmonitor:StopQueryWorkloadInsightsTopContributors";
	/** [Write] networkflowmonitor:StopQueryWorkloadInsightsTopContributorsData */
	static readonly StopQueryWorkloadInsightsTopContributorsData =
		"networkflowmonitor:StopQueryWorkloadInsightsTopContributorsData";
	/** [Tagging] networkflowmonitor:TagResource */
	static readonly TagResource = "networkflowmonitor:TagResource";
	/** [Tagging] networkflowmonitor:UntagResource */
	static readonly UntagResource = "networkflowmonitor:UntagResource";
	/** [Write] networkflowmonitor:UpdateMonitor */
	static readonly UpdateMonitor = "networkflowmonitor:UpdateMonitor";
	/** [Write] networkflowmonitor:UpdateScope */
	static readonly UpdateScope = "networkflowmonitor:UpdateScope";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		NetworkflowmonitorActions.actionGetMonitor,
		NetworkflowmonitorActions.actionGetQueryResultsMonitorTopContributors,
		NetworkflowmonitorActions.actionGetQueryResultsWorkloadInsightsTopContributors,
		NetworkflowmonitorActions.actionGetQueryResultsWorkloadInsightsTopContributorsData,
		NetworkflowmonitorActions.actionGetQueryStatusMonitorTopContributors,
		NetworkflowmonitorActions.actionGetQueryStatusWorkloadInsightsTopContributors,
		NetworkflowmonitorActions.actionGetQueryStatusWorkloadInsightsTopContributorsData,
		NetworkflowmonitorActions.actionGetScope,
		NetworkflowmonitorActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		NetworkflowmonitorActions.CreateMonitor,
		NetworkflowmonitorActions.CreateScope,
		NetworkflowmonitorActions.DeleteMonitor,
		NetworkflowmonitorActions.DeleteScope,
		NetworkflowmonitorActions.Publish,
		NetworkflowmonitorActions.StartQueryMonitorTopContributors,
		NetworkflowmonitorActions.StartQueryWorkloadInsightsTopContributors,
		NetworkflowmonitorActions.StartQueryWorkloadInsightsTopContributorsData,
		NetworkflowmonitorActions.StopQueryMonitorTopContributors,
		NetworkflowmonitorActions.StopQueryWorkloadInsightsTopContributors,
		NetworkflowmonitorActions.StopQueryWorkloadInsightsTopContributorsData,
		NetworkflowmonitorActions.UpdateMonitor,
		NetworkflowmonitorActions.UpdateScope,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		NetworkflowmonitorActions.ListMonitors,
		NetworkflowmonitorActions.ListScopes,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		NetworkflowmonitorActions.TagResource,
		NetworkflowmonitorActions.UntagResource,
	];
}

/**
 * Properties for building a monitor ARN.
 */
export interface NetworkflowmonitorMonitorArnProps {
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
export interface NetworkflowmonitorMonitorArnComponents {
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
 * Properties for building a scope ARN.
 */
export interface NetworkflowmonitorScopeArnProps {
	/** The ScopeId component of the ARN. */
	readonly scopeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a scope ARN.
 */
export interface NetworkflowmonitorScopeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ScopeId component. */
	readonly scopeId: string;
}

const MonitorArnRegex =
	/^arn:(?<partition>[^:]+):networkflowmonitor:(?<region>[^:]*):(?<account>[^:]*):monitor\/(?<monitorName>[^:/?]+)$/;
const ScopeArnRegex =
	/^arn:(?<partition>[^:]+):networkflowmonitor:(?<region>[^:]*):(?<account>[^:]*):scope\/(?<scopeId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for networkflowmonitor resources.
 */
export class NetworkflowmonitorResources {
	/**
	 * Builds an ARN for the monitor resource.
	 */
	static monitor(props: NetworkflowmonitorMonitorArnProps): string {
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
	static parseMonitorArn(arn: string): NetworkflowmonitorMonitorArnComponents {
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
	static scope(props: NetworkflowmonitorScopeArnProps): string {
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
	static parseScopeArn(arn: string): NetworkflowmonitorScopeArnComponents {
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
	static readonly CreateMonitor: string[] = [
		"networkflowmonitor:CreateMonitor",
		"networkflowmonitor:TagResource",
	];
	/** IAM actions required for the CreateScope API call. */
	static readonly CreateScope: string[] = [
		"networkflowmonitor:CreateScope",
		"networkflowmonitor:TagResource",
	];
	/** IAM actions required for the DeleteMonitor API call. */
	static readonly DeleteMonitor: string[] = [
		"networkflowmonitor:DeleteMonitor",
	];
	/** IAM actions required for the DeleteScope API call. */
	static readonly DeleteScope: string[] = ["networkflowmonitor:DeleteScope"];
	/** IAM actions required for the GetMonitor API call. */
	static readonly opGetMonitor: string[] = ["networkflowmonitor:GetMonitor"];
	/** IAM actions required for the GetQueryResultsMonitorTopContributors API call. */
	static readonly opGetQueryResultsMonitorTopContributors: string[] = [
		"networkflowmonitor:GetQueryResultsMonitorTopContributors",
	];
	/** IAM actions required for the GetQueryResultsWorkloadInsightsTopContributors API call. */
	static readonly opGetQueryResultsWorkloadInsightsTopContributors: string[] = [
		"networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributors",
	];
	/** IAM actions required for the GetQueryResultsWorkloadInsightsTopContributorsData API call. */
	static readonly opGetQueryResultsWorkloadInsightsTopContributorsData: string[] =
		["networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributorsData"];
	/** IAM actions required for the GetQueryStatusMonitorTopContributors API call. */
	static readonly opGetQueryStatusMonitorTopContributors: string[] = [
		"networkflowmonitor:GetQueryStatusMonitorTopContributors",
	];
	/** IAM actions required for the GetQueryStatusWorkloadInsightsTopContributors API call. */
	static readonly opGetQueryStatusWorkloadInsightsTopContributors: string[] = [
		"networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributors",
	];
	/** IAM actions required for the GetQueryStatusWorkloadInsightsTopContributorsData API call. */
	static readonly opGetQueryStatusWorkloadInsightsTopContributorsData: string[] =
		["networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributorsData"];
	/** IAM actions required for the GetScope API call. */
	static readonly opGetScope: string[] = ["networkflowmonitor:GetScope"];
	/** IAM actions required for the ListMonitors API call. */
	static readonly ListMonitors: string[] = ["networkflowmonitor:ListMonitors"];
	/** IAM actions required for the ListScopes API call. */
	static readonly ListScopes: string[] = ["networkflowmonitor:ListScopes"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"networkflowmonitor:ListTagsForResource",
	];
	/** IAM actions required for the StartQueryMonitorTopContributors API call. */
	static readonly StartQueryMonitorTopContributors: string[] = [
		"networkflowmonitor:StartQueryMonitorTopContributors",
	];
	/** IAM actions required for the StartQueryWorkloadInsightsTopContributors API call. */
	static readonly StartQueryWorkloadInsightsTopContributors: string[] = [
		"networkflowmonitor:StartQueryWorkloadInsightsTopContributors",
	];
	/** IAM actions required for the StartQueryWorkloadInsightsTopContributorsData API call. */
	static readonly StartQueryWorkloadInsightsTopContributorsData: string[] = [
		"networkflowmonitor:StartQueryWorkloadInsightsTopContributorsData",
	];
	/** IAM actions required for the StopQueryMonitorTopContributors API call. */
	static readonly StopQueryMonitorTopContributors: string[] = [
		"networkflowmonitor:StopQueryMonitorTopContributors",
	];
	/** IAM actions required for the StopQueryWorkloadInsightsTopContributors API call. */
	static readonly StopQueryWorkloadInsightsTopContributors: string[] = [
		"networkflowmonitor:StopQueryWorkloadInsightsTopContributors",
	];
	/** IAM actions required for the StopQueryWorkloadInsightsTopContributorsData API call. */
	static readonly StopQueryWorkloadInsightsTopContributorsData: string[] = [
		"networkflowmonitor:StopQueryWorkloadInsightsTopContributorsData",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["networkflowmonitor:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"networkflowmonitor:UntagResource",
	];
	/** IAM actions required for the UpdateMonitor API call. */
	static readonly UpdateMonitor: string[] = [
		"networkflowmonitor:UpdateMonitor",
	];
	/** IAM actions required for the UpdateScope API call. */
	static readonly UpdateScope: string[] = ["networkflowmonitor:UpdateScope"];
}

/**
 * Condition key constants and builders for networkflowmonitor.
 */
export class NetworkflowmonitorConditions {
	/** Condition keys applicable to the CreateMonitor action. */
	static readonly CreateMonitorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScope action. */
	static readonly CreateScopeConditionKeys: string[] = [
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
