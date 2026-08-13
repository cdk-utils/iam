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
	static readonly actionGetRoutingControlState =
		"route53-recovery-cluster:GetRoutingControlState";
	/** [Read] route53-recovery-cluster:ListRoutingControls */
	static readonly ListRoutingControls =
		"route53-recovery-cluster:ListRoutingControls";
	/** [Write] route53-recovery-cluster:UpdateRoutingControlState */
	static readonly UpdateRoutingControlState =
		"route53-recovery-cluster:UpdateRoutingControlState";
	/** [Write] route53-recovery-cluster:UpdateRoutingControlStates */
	static readonly UpdateRoutingControlStates =
		"route53-recovery-cluster:UpdateRoutingControlStates";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		Route53RecoveryClusterActions.actionGetRoutingControlState,
		Route53RecoveryClusterActions.ListRoutingControls,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Route53RecoveryClusterActions.UpdateRoutingControlState,
		Route53RecoveryClusterActions.UpdateRoutingControlStates,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a routingcontrol ARN.
 */
export interface Route53RecoveryClusterRoutingcontrolArnProps {
	/** The ControlPanelId component of the ARN. */
	readonly controlPanelId: string;
	/** The RoutingControlId component of the ARN. */
	readonly routingControlId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a routingcontrol ARN.
 */
export interface Route53RecoveryClusterRoutingcontrolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ControlPanelId component. */
	readonly controlPanelId: string;
	/** The RoutingControlId component. */
	readonly routingControlId: string;
}

const RoutingcontrolArnRegex =
	/^arn:(?<partition>[^:]+):route53-recovery-control::(?<account>[^:]*):controlpanel\/(?<controlPanelId>[^:/?]+)\/routingcontrol\/(?<routingControlId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for route53-recovery-cluster resources.
 */
export class Route53RecoveryClusterResources {
	/**
	 * Builds an ARN for the routingcontrol resource.
	 */
	static routingcontrol(
		props: Route53RecoveryClusterRoutingcontrolArnProps,
	): string {
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
	static parseRoutingcontrolArn(
		arn: string,
	): Route53RecoveryClusterRoutingcontrolArnComponents {
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
	static readonly opGetRoutingControlState: string[] = [
		"route53-recovery-cluster:GetRoutingControlState",
	];
	/** IAM actions required for the ListRoutingControls API call. */
	static readonly ListRoutingControls: string[] = [
		"route53-recovery-cluster:ListRoutingControls",
	];
	/** IAM actions required for the UpdateRoutingControlState API call. */
	static readonly UpdateRoutingControlState: string[] = [
		"route53-recovery-cluster:UpdateRoutingControlState",
	];
	/** IAM actions required for the UpdateRoutingControlStates API call. */
	static readonly UpdateRoutingControlStates: string[] = [
		"route53-recovery-cluster:UpdateRoutingControlStates",
	];
}

/**
 * Condition key constants and builders for route53-recovery-cluster.
 */
export class Route53RecoveryClusterConditions {
	/** Condition keys applicable to the UpdateRoutingControlState action. */
	static readonly UpdateRoutingControlStateConditionKeys: string[] = [
		"route53-recovery-cluster:AllowSafetyRulesOverrides",
	];
	/** Condition keys applicable to the UpdateRoutingControlStates action. */
	static readonly UpdateRoutingControlStatesConditionKeys: string[] = [
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
