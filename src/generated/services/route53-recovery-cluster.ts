// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/route53-recovery-cluster.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the route53-recovery-cluster service.
 */
export class Route53RecoveryClusterActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "route53-recovery-cluster";

	/** [Read] route53-recovery-cluster:GetRoutingControlState */
	static readonly GET_ROUTING_CONTROL_STATE =
		"route53-recovery-cluster:GetRoutingControlState";
	/** [Read] route53-recovery-cluster:ListRoutingControls */
	static readonly LIST_ROUTING_CONTROLS =
		"route53-recovery-cluster:ListRoutingControls";
	/** [Write] route53-recovery-cluster:UpdateRoutingControlState */
	static readonly UPDATE_ROUTING_CONTROL_STATE =
		"route53-recovery-cluster:UpdateRoutingControlState";
	/** [Write] route53-recovery-cluster:UpdateRoutingControlStates */
	static readonly UPDATE_ROUTING_CONTROL_STATES =
		"route53-recovery-cluster:UpdateRoutingControlStates";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		Route53RecoveryClusterActions.GET_ROUTING_CONTROL_STATE,
		Route53RecoveryClusterActions.LIST_ROUTING_CONTROLS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Route53RecoveryClusterActions.UPDATE_ROUTING_CONTROL_STATE,
		Route53RecoveryClusterActions.UPDATE_ROUTING_CONTROL_STATES,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const RoutingcontrolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53-recovery-control::(?<account>[^:]*):controlpanel/(?<controlPanelId>[^:/?]+)/routingcontrol/(?<routingControlId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for route53-recovery-cluster resources.
 */
export class Route53RecoveryClusterResources {
	/**
	 * Builds an ARN for the routingcontrol resource.
	 */
	static routingcontrol(props: {
		/** The ControlPanelId component of the ARN. */
		readonly controlPanelId: string;
		/** The RoutingControlId component of the ARN. */
		readonly routingControlId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53-recovery-control::${props.account ?? "*"}:controlpanel/${props.controlPanelId}/routingcontrol/${props.routingControlId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the routingcontrol resource.
	 */
	static isValidRoutingcontrolArn(arn: string): boolean {
		return RoutingcontrolArnRegex.test(arn);
	}

	/**
	 * Parses a routingcontrol ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRoutingcontrolArn(arn: string): {
		partition: string;
		account: string;
		controlPanelId: string;
		routingControlId: string;
	} {
		const match = RoutingcontrolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid routingcontrol ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			controlPanelId: match.groups!.controlPanelId,
			routingControlId: match.groups!.routingControlId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for route53-recovery-cluster.
 */
export class Route53RecoveryClusterOperations {
	/** IAM actions required for the GetRoutingControlState API call. */
	static readonly GET_ROUTING_CONTROL_STATE: string[] = [
		"route53-recovery-cluster:GetRoutingControlState",
	];
	/** IAM actions required for the ListRoutingControls API call. */
	static readonly LIST_ROUTING_CONTROLS: string[] = [
		"route53-recovery-cluster:ListRoutingControls",
	];
	/** IAM actions required for the UpdateRoutingControlState API call. */
	static readonly UPDATE_ROUTING_CONTROL_STATE: string[] = [
		"route53-recovery-cluster:UpdateRoutingControlState",
	];
	/** IAM actions required for the UpdateRoutingControlStates API call. */
	static readonly UPDATE_ROUTING_CONTROL_STATES: string[] = [
		"route53-recovery-cluster:UpdateRoutingControlStates",
	];
}

/**
 * Condition key constants and builders for route53-recovery-cluster.
 */
export class Route53RecoveryClusterConditions {
	/** Condition keys applicable to the UpdateRoutingControlState action. */
	static readonly UPDATE_ROUTING_CONTROL_STATE_CONDITION_KEYS: string[] = [
		"route53-recovery-cluster:AllowSafetyRulesOverrides",
	];
	/** Condition keys applicable to the UpdateRoutingControlStates action. */
	static readonly UPDATE_ROUTING_CONTROL_STATES_CONDITION_KEYS: string[] = [
		"route53-recovery-cluster:AllowSafetyRulesOverrides",
	];

	/** Condition key: route53-recovery-cluster:AllowSafetyRulesOverrides (Bool) */
	static readonly ALLOW_SAFETY_RULES_OVERRIDES =
		"route53-recovery-cluster:AllowSafetyRulesOverrides";

	/**
	 * Generates a condition block for `route53-recovery-cluster:AllowSafetyRulesOverrides`.
	 */
	static allowSafetyRulesOverrides(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return {
			Bool: { "route53-recovery-cluster:AllowSafetyRulesOverrides": value },
		};
	}
}
