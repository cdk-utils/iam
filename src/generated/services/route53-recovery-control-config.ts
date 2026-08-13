// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/route53-recovery-control-config.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the route53-recovery-control-config service.
 */
export class Route53RecoveryControlConfigActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "route53-recovery-control-config";

	/** [Write] route53-recovery-control-config:CreateCluster */
	static readonly CREATE_CLUSTER =
		"route53-recovery-control-config:CreateCluster";
	/** [Write] route53-recovery-control-config:CreateControlPanel */
	static readonly CREATE_CONTROL_PANEL =
		"route53-recovery-control-config:CreateControlPanel";
	/** [Write] route53-recovery-control-config:CreateRoutingControl */
	static readonly CREATE_ROUTING_CONTROL =
		"route53-recovery-control-config:CreateRoutingControl";
	/** [Write] route53-recovery-control-config:CreateSafetyRule */
	static readonly CREATE_SAFETY_RULE =
		"route53-recovery-control-config:CreateSafetyRule";
	/** [Write] route53-recovery-control-config:DeleteCluster */
	static readonly DELETE_CLUSTER =
		"route53-recovery-control-config:DeleteCluster";
	/** [Write] route53-recovery-control-config:DeleteControlPanel */
	static readonly DELETE_CONTROL_PANEL =
		"route53-recovery-control-config:DeleteControlPanel";
	/** [PermissionManagement] route53-recovery-control-config:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY =
		"route53-recovery-control-config:DeleteResourcePolicy";
	/** [Write] route53-recovery-control-config:DeleteRoutingControl */
	static readonly DELETE_ROUTING_CONTROL =
		"route53-recovery-control-config:DeleteRoutingControl";
	/** [Write] route53-recovery-control-config:DeleteSafetyRule */
	static readonly DELETE_SAFETY_RULE =
		"route53-recovery-control-config:DeleteSafetyRule";
	/** [Read] route53-recovery-control-config:DescribeCluster */
	static readonly DESCRIBE_CLUSTER =
		"route53-recovery-control-config:DescribeCluster";
	/** [Read] route53-recovery-control-config:DescribeControlPanel */
	static readonly DESCRIBE_CONTROL_PANEL =
		"route53-recovery-control-config:DescribeControlPanel";
	/** [Read] route53-recovery-control-config:DescribeRoutingControl */
	static readonly DESCRIBE_ROUTING_CONTROL =
		"route53-recovery-control-config:DescribeRoutingControl";
	/** [Read] route53-recovery-control-config:DescribeSafetyRule */
	static readonly DESCRIBE_SAFETY_RULE =
		"route53-recovery-control-config:DescribeSafetyRule";
	/** [Read] route53-recovery-control-config:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY =
		"route53-recovery-control-config:GetResourcePolicy";
	/** [List] route53-recovery-control-config:ListAssociatedRoute53HealthChecks */
	static readonly LIST_ASSOCIATED_ROUTE53_HEALTH_CHECKS =
		"route53-recovery-control-config:ListAssociatedRoute53HealthChecks";
	/** [Read] route53-recovery-control-config:ListClusters */
	static readonly LIST_CLUSTERS =
		"route53-recovery-control-config:ListClusters";
	/** [Read] route53-recovery-control-config:ListControlPanels */
	static readonly LIST_CONTROL_PANELS =
		"route53-recovery-control-config:ListControlPanels";
	/** [Read] route53-recovery-control-config:ListRoutingControls */
	static readonly LIST_ROUTING_CONTROLS =
		"route53-recovery-control-config:ListRoutingControls";
	/** [Read] route53-recovery-control-config:ListSafetyRules */
	static readonly LIST_SAFETY_RULES =
		"route53-recovery-control-config:ListSafetyRules";
	/** [Read] route53-recovery-control-config:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"route53-recovery-control-config:ListTagsForResource";
	/** [PermissionManagement] route53-recovery-control-config:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY =
		"route53-recovery-control-config:PutResourcePolicy";
	/** [Tagging] route53-recovery-control-config:TagResource */
	static readonly TAG_RESOURCE = "route53-recovery-control-config:TagResource";
	/** [Tagging] route53-recovery-control-config:UntagResource */
	static readonly UNTAG_RESOURCE =
		"route53-recovery-control-config:UntagResource";
	/** [Write] route53-recovery-control-config:UpdateCluster */
	static readonly UPDATE_CLUSTER =
		"route53-recovery-control-config:UpdateCluster";
	/** [Write] route53-recovery-control-config:UpdateControlPanel */
	static readonly UPDATE_CONTROL_PANEL =
		"route53-recovery-control-config:UpdateControlPanel";
	/** [Write] route53-recovery-control-config:UpdateRoutingControl */
	static readonly UPDATE_ROUTING_CONTROL =
		"route53-recovery-control-config:UpdateRoutingControl";
	/** [Write] route53-recovery-control-config:UpdateSafetyRule */
	static readonly UPDATE_SAFETY_RULE =
		"route53-recovery-control-config:UpdateSafetyRule";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		Route53RecoveryControlConfigActions.DESCRIBE_CLUSTER,
		Route53RecoveryControlConfigActions.DESCRIBE_CONTROL_PANEL,
		Route53RecoveryControlConfigActions.DESCRIBE_ROUTING_CONTROL,
		Route53RecoveryControlConfigActions.DESCRIBE_SAFETY_RULE,
		Route53RecoveryControlConfigActions.GET_RESOURCE_POLICY,
		Route53RecoveryControlConfigActions.LIST_CLUSTERS,
		Route53RecoveryControlConfigActions.LIST_CONTROL_PANELS,
		Route53RecoveryControlConfigActions.LIST_ROUTING_CONTROLS,
		Route53RecoveryControlConfigActions.LIST_SAFETY_RULES,
		Route53RecoveryControlConfigActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Route53RecoveryControlConfigActions.CREATE_CLUSTER,
		Route53RecoveryControlConfigActions.CREATE_CONTROL_PANEL,
		Route53RecoveryControlConfigActions.CREATE_ROUTING_CONTROL,
		Route53RecoveryControlConfigActions.CREATE_SAFETY_RULE,
		Route53RecoveryControlConfigActions.DELETE_CLUSTER,
		Route53RecoveryControlConfigActions.DELETE_CONTROL_PANEL,
		Route53RecoveryControlConfigActions.DELETE_ROUTING_CONTROL,
		Route53RecoveryControlConfigActions.DELETE_SAFETY_RULE,
		Route53RecoveryControlConfigActions.UPDATE_CLUSTER,
		Route53RecoveryControlConfigActions.UPDATE_CONTROL_PANEL,
		Route53RecoveryControlConfigActions.UPDATE_ROUTING_CONTROL,
		Route53RecoveryControlConfigActions.UPDATE_SAFETY_RULE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		Route53RecoveryControlConfigActions.LIST_ASSOCIATED_ROUTE53_HEALTH_CHECKS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		Route53RecoveryControlConfigActions.DELETE_RESOURCE_POLICY,
		Route53RecoveryControlConfigActions.PUT_RESOURCE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		Route53RecoveryControlConfigActions.TAG_RESOURCE,
		Route53RecoveryControlConfigActions.UNTAG_RESOURCE,
	];
}

const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53-recovery-control::(?<account>[^:]*):cluster/(?<resourceId>[^:/?]+)$",
);
const ControlpanelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53-recovery-control::(?<account>[^:]*):controlpanel/(?<controlPanelId>[^:/?]+)$",
);
const RoutingcontrolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53-recovery-control::(?<account>[^:]*):controlpanel/(?<controlPanelId>[^:/?]+)/routingcontrol/(?<routingControlId>[^:/?]+)$",
);
const SafetyruleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53-recovery-control::(?<account>[^:]*):controlpanel/(?<controlPanelId>[^:/?]+)/safetyrule/(?<safetyRuleId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for route53-recovery-control-config resources.
 */
export class Route53RecoveryControlConfigResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53-recovery-control::${props.account ?? "*"}:cluster/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster resource.
	 */
	static isValidClusterArn(arn: string): boolean {
		return ClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the controlpanel resource.
	 */
	static controlpanel(props: {
		/** The ControlPanelId component of the ARN. */
		readonly controlPanelId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53-recovery-control::${props.account ?? "*"}:controlpanel/${props.controlPanelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the controlpanel resource.
	 */
	static isValidControlpanelArn(arn: string): boolean {
		return ControlpanelArnRegex.test(arn);
	}

	/**
	 * Parses a controlpanel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseControlpanelArn(arn: string): {
		partition: string;
		account: string;
		controlPanelId: string;
	} {
		const match = ControlpanelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid controlpanel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			controlPanelId: match.groups!.controlPanelId,
		};
	}

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

	/**
	 * Builds an ARN for the safetyrule resource.
	 */
	static safetyrule(props: {
		/** The ControlPanelId component of the ARN. */
		readonly controlPanelId: string;
		/** The SafetyRuleId component of the ARN. */
		readonly safetyRuleId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53-recovery-control::${props.account ?? "*"}:controlpanel/${props.controlPanelId}/safetyrule/${props.safetyRuleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the safetyrule resource.
	 */
	static isValidSafetyruleArn(arn: string): boolean {
		return SafetyruleArnRegex.test(arn);
	}

	/**
	 * Parses a safetyrule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSafetyruleArn(arn: string): {
		partition: string;
		account: string;
		controlPanelId: string;
		safetyRuleId: string;
	} {
		const match = SafetyruleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid safetyrule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			controlPanelId: match.groups!.controlPanelId,
			safetyRuleId: match.groups!.safetyRuleId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for route53-recovery-control-config.
 */
export class Route53RecoveryControlConfigOperations {
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"route53-recovery-control-config:CreateCluster",
		"route53-recovery-control-config:TagResource",
	];
	/** IAM actions required for the CreateControlPanel API call. */
	static readonly CREATE_CONTROL_PANEL: string[] = [
		"route53-recovery-control-config:CreateControlPanel",
		"route53-recovery-control-config:TagResource",
	];
	/** IAM actions required for the CreateRoutingControl API call. */
	static readonly CREATE_ROUTING_CONTROL: string[] = [
		"route53-recovery-control-config:CreateRoutingControl",
	];
	/** IAM actions required for the CreateSafetyRule API call. */
	static readonly CREATE_SAFETY_RULE: string[] = [
		"route53-recovery-control-config:CreateSafetyRule",
		"route53-recovery-control-config:TagResource",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = [
		"route53-recovery-control-config:DeleteCluster",
	];
	/** IAM actions required for the DeleteControlPanel API call. */
	static readonly DELETE_CONTROL_PANEL: string[] = [
		"route53-recovery-control-config:DeleteControlPanel",
	];
	/** IAM actions required for the DeleteRoutingControl API call. */
	static readonly DELETE_ROUTING_CONTROL: string[] = [
		"route53-recovery-control-config:DeleteRoutingControl",
	];
	/** IAM actions required for the DeleteSafetyRule API call. */
	static readonly DELETE_SAFETY_RULE: string[] = [
		"route53-recovery-control-config:DeleteSafetyRule",
	];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DESCRIBE_CLUSTER: string[] = [
		"route53-recovery-control-config:DescribeCluster",
	];
	/** IAM actions required for the DescribeControlPanel API call. */
	static readonly DESCRIBE_CONTROL_PANEL: string[] = [
		"route53-recovery-control-config:DescribeControlPanel",
	];
	/** IAM actions required for the DescribeRoutingControl API call. */
	static readonly DESCRIBE_ROUTING_CONTROL: string[] = [
		"route53-recovery-control-config:DescribeRoutingControl",
	];
	/** IAM actions required for the DescribeSafetyRule API call. */
	static readonly DESCRIBE_SAFETY_RULE: string[] = [
		"route53-recovery-control-config:DescribeSafetyRule",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [
		"route53-recovery-control-config:GetResourcePolicy",
	];
	/** IAM actions required for the ListAssociatedRoute53HealthChecks API call. */
	static readonly LIST_ASSOCIATED_ROUTE53_HEALTH_CHECKS: string[] = [
		"route53-recovery-control-config:ListAssociatedRoute53HealthChecks",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly LIST_CLUSTERS: string[] = [
		"route53-recovery-control-config:ListClusters",
	];
	/** IAM actions required for the ListControlPanels API call. */
	static readonly LIST_CONTROL_PANELS: string[] = [
		"route53-recovery-control-config:ListControlPanels",
	];
	/** IAM actions required for the ListRoutingControls API call. */
	static readonly LIST_ROUTING_CONTROLS: string[] = [
		"route53-recovery-control-config:ListRoutingControls",
	];
	/** IAM actions required for the ListSafetyRules API call. */
	static readonly LIST_SAFETY_RULES: string[] = [
		"route53-recovery-control-config:ListSafetyRules",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"route53-recovery-control-config:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"route53-recovery-control-config:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"route53-recovery-control-config:UntagResource",
	];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UPDATE_CLUSTER: string[] = [
		"route53-recovery-control-config:UpdateCluster",
	];
	/** IAM actions required for the UpdateControlPanel API call. */
	static readonly UPDATE_CONTROL_PANEL: string[] = [
		"route53-recovery-control-config:UpdateControlPanel",
	];
	/** IAM actions required for the UpdateRoutingControl API call. */
	static readonly UPDATE_ROUTING_CONTROL: string[] = [
		"route53-recovery-control-config:UpdateRoutingControl",
	];
	/** IAM actions required for the UpdateSafetyRule API call. */
	static readonly UPDATE_SAFETY_RULE: string[] = [
		"route53-recovery-control-config:UpdateSafetyRule",
	];
}

/**
 * Condition key constants and builders for route53-recovery-control-config.
 */
export class Route53RecoveryControlConfigConditions {
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CREATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateControlPanel action. */
	static readonly CREATE_CONTROL_PANEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSafetyRule action. */
	static readonly CREATE_SAFETY_RULE_CONDITION_KEYS: string[] = [
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
