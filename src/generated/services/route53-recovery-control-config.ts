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
	static readonly CreateCluster =
		"route53-recovery-control-config:CreateCluster";
	/** [Write] route53-recovery-control-config:CreateControlPanel */
	static readonly CreateControlPanel =
		"route53-recovery-control-config:CreateControlPanel";
	/** [Write] route53-recovery-control-config:CreateRoutingControl */
	static readonly CreateRoutingControl =
		"route53-recovery-control-config:CreateRoutingControl";
	/** [Write] route53-recovery-control-config:CreateSafetyRule */
	static readonly CreateSafetyRule =
		"route53-recovery-control-config:CreateSafetyRule";
	/** [Write] route53-recovery-control-config:DeleteCluster */
	static readonly DeleteCluster =
		"route53-recovery-control-config:DeleteCluster";
	/** [Write] route53-recovery-control-config:DeleteControlPanel */
	static readonly DeleteControlPanel =
		"route53-recovery-control-config:DeleteControlPanel";
	/** [PermissionManagement] route53-recovery-control-config:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy =
		"route53-recovery-control-config:DeleteResourcePolicy";
	/** [Write] route53-recovery-control-config:DeleteRoutingControl */
	static readonly DeleteRoutingControl =
		"route53-recovery-control-config:DeleteRoutingControl";
	/** [Write] route53-recovery-control-config:DeleteSafetyRule */
	static readonly DeleteSafetyRule =
		"route53-recovery-control-config:DeleteSafetyRule";
	/** [Read] route53-recovery-control-config:DescribeCluster */
	static readonly DescribeCluster =
		"route53-recovery-control-config:DescribeCluster";
	/** [Read] route53-recovery-control-config:DescribeControlPanel */
	static readonly DescribeControlPanel =
		"route53-recovery-control-config:DescribeControlPanel";
	/** [Read] route53-recovery-control-config:DescribeRoutingControl */
	static readonly DescribeRoutingControl =
		"route53-recovery-control-config:DescribeRoutingControl";
	/** [Read] route53-recovery-control-config:DescribeSafetyRule */
	static readonly DescribeSafetyRule =
		"route53-recovery-control-config:DescribeSafetyRule";
	/** [Read] route53-recovery-control-config:GetResourcePolicy */
	static readonly actionGetResourcePolicy =
		"route53-recovery-control-config:GetResourcePolicy";
	/** [List] route53-recovery-control-config:ListAssociatedRoute53HealthChecks */
	static readonly ListAssociatedRoute53HealthChecks =
		"route53-recovery-control-config:ListAssociatedRoute53HealthChecks";
	/** [Read] route53-recovery-control-config:ListClusters */
	static readonly ListClusters = "route53-recovery-control-config:ListClusters";
	/** [Read] route53-recovery-control-config:ListControlPanels */
	static readonly ListControlPanels =
		"route53-recovery-control-config:ListControlPanels";
	/** [Read] route53-recovery-control-config:ListRoutingControls */
	static readonly ListRoutingControls =
		"route53-recovery-control-config:ListRoutingControls";
	/** [Read] route53-recovery-control-config:ListSafetyRules */
	static readonly ListSafetyRules =
		"route53-recovery-control-config:ListSafetyRules";
	/** [Read] route53-recovery-control-config:ListTagsForResource */
	static readonly ListTagsForResource =
		"route53-recovery-control-config:ListTagsForResource";
	/** [PermissionManagement] route53-recovery-control-config:PutResourcePolicy */
	static readonly PutResourcePolicy =
		"route53-recovery-control-config:PutResourcePolicy";
	/** [Tagging] route53-recovery-control-config:TagResource */
	static readonly TagResource = "route53-recovery-control-config:TagResource";
	/** [Tagging] route53-recovery-control-config:UntagResource */
	static readonly UntagResource =
		"route53-recovery-control-config:UntagResource";
	/** [Write] route53-recovery-control-config:UpdateCluster */
	static readonly UpdateCluster =
		"route53-recovery-control-config:UpdateCluster";
	/** [Write] route53-recovery-control-config:UpdateControlPanel */
	static readonly UpdateControlPanel =
		"route53-recovery-control-config:UpdateControlPanel";
	/** [Write] route53-recovery-control-config:UpdateRoutingControl */
	static readonly UpdateRoutingControl =
		"route53-recovery-control-config:UpdateRoutingControl";
	/** [Write] route53-recovery-control-config:UpdateSafetyRule */
	static readonly UpdateSafetyRule =
		"route53-recovery-control-config:UpdateSafetyRule";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		Route53RecoveryControlConfigActions.DescribeCluster,
		Route53RecoveryControlConfigActions.DescribeControlPanel,
		Route53RecoveryControlConfigActions.DescribeRoutingControl,
		Route53RecoveryControlConfigActions.DescribeSafetyRule,
		Route53RecoveryControlConfigActions.actionGetResourcePolicy,
		Route53RecoveryControlConfigActions.ListClusters,
		Route53RecoveryControlConfigActions.ListControlPanels,
		Route53RecoveryControlConfigActions.ListRoutingControls,
		Route53RecoveryControlConfigActions.ListSafetyRules,
		Route53RecoveryControlConfigActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Route53RecoveryControlConfigActions.CreateCluster,
		Route53RecoveryControlConfigActions.CreateControlPanel,
		Route53RecoveryControlConfigActions.CreateRoutingControl,
		Route53RecoveryControlConfigActions.CreateSafetyRule,
		Route53RecoveryControlConfigActions.DeleteCluster,
		Route53RecoveryControlConfigActions.DeleteControlPanel,
		Route53RecoveryControlConfigActions.DeleteRoutingControl,
		Route53RecoveryControlConfigActions.DeleteSafetyRule,
		Route53RecoveryControlConfigActions.UpdateCluster,
		Route53RecoveryControlConfigActions.UpdateControlPanel,
		Route53RecoveryControlConfigActions.UpdateRoutingControl,
		Route53RecoveryControlConfigActions.UpdateSafetyRule,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		Route53RecoveryControlConfigActions.ListAssociatedRoute53HealthChecks,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		Route53RecoveryControlConfigActions.DeleteResourcePolicy,
		Route53RecoveryControlConfigActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		Route53RecoveryControlConfigActions.TagResource,
		Route53RecoveryControlConfigActions.UntagResource,
	];
}

/**
 * Properties for building a cluster ARN.
 */
export interface Route53RecoveryControlConfigClusterArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster ARN.
 */
export interface Route53RecoveryControlConfigClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a controlpanel ARN.
 */
export interface Route53RecoveryControlConfigControlpanelArnProps {
	/** The ControlPanelId component of the ARN. */
	readonly controlPanelId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a controlpanel ARN.
 */
export interface Route53RecoveryControlConfigControlpanelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ControlPanelId component. */
	readonly controlPanelId: string;
}

/**
 * Properties for building a routingcontrol ARN.
 */
export interface Route53RecoveryControlConfigRoutingcontrolArnProps {
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
export interface Route53RecoveryControlConfigRoutingcontrolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ControlPanelId component. */
	readonly controlPanelId: string;
	/** The RoutingControlId component. */
	readonly routingControlId: string;
}

/**
 * Properties for building a safetyrule ARN.
 */
export interface Route53RecoveryControlConfigSafetyruleArnProps {
	/** The ControlPanelId component of the ARN. */
	readonly controlPanelId: string;
	/** The SafetyRuleId component of the ARN. */
	readonly safetyRuleId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a safetyrule ARN.
 */
export interface Route53RecoveryControlConfigSafetyruleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ControlPanelId component. */
	readonly controlPanelId: string;
	/** The SafetyRuleId component. */
	readonly safetyRuleId: string;
}

const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):route53-recovery-control::(?<account>[^:]*):cluster\/(?<resourceId>[^:/?]+)$/;
const ControlpanelArnRegex =
	/^arn:(?<partition>[^:]+):route53-recovery-control::(?<account>[^:]*):controlpanel\/(?<controlPanelId>[^:/?]+)$/;
const RoutingcontrolArnRegex =
	/^arn:(?<partition>[^:]+):route53-recovery-control::(?<account>[^:]*):controlpanel\/(?<controlPanelId>[^:/?]+)\/routingcontrol\/(?<routingControlId>[^:/?]+)$/;
const SafetyruleArnRegex =
	/^arn:(?<partition>[^:]+):route53-recovery-control::(?<account>[^:]*):controlpanel\/(?<controlPanelId>[^:/?]+)\/safetyrule\/(?<safetyRuleId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for route53-recovery-control-config resources.
 */
export class Route53RecoveryControlConfigResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: Route53RecoveryControlConfigClusterArnProps): string {
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
	static parseClusterArn(
		arn: string,
	): Route53RecoveryControlConfigClusterArnComponents {
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
	static controlpanel(
		props: Route53RecoveryControlConfigControlpanelArnProps,
	): string {
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
	static parseControlpanelArn(
		arn: string,
	): Route53RecoveryControlConfigControlpanelArnComponents {
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
	static routingcontrol(
		props: Route53RecoveryControlConfigRoutingcontrolArnProps,
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
	): Route53RecoveryControlConfigRoutingcontrolArnComponents {
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
	static safetyrule(
		props: Route53RecoveryControlConfigSafetyruleArnProps,
	): string {
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
	static parseSafetyruleArn(
		arn: string,
	): Route53RecoveryControlConfigSafetyruleArnComponents {
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
	static readonly CreateCluster: string[] = [
		"route53-recovery-control-config:CreateCluster",
		"route53-recovery-control-config:TagResource",
	];
	/** IAM actions required for the CreateControlPanel API call. */
	static readonly CreateControlPanel: string[] = [
		"route53-recovery-control-config:CreateControlPanel",
		"route53-recovery-control-config:TagResource",
	];
	/** IAM actions required for the CreateRoutingControl API call. */
	static readonly CreateRoutingControl: string[] = [
		"route53-recovery-control-config:CreateRoutingControl",
	];
	/** IAM actions required for the CreateSafetyRule API call. */
	static readonly CreateSafetyRule: string[] = [
		"route53-recovery-control-config:CreateSafetyRule",
		"route53-recovery-control-config:TagResource",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DeleteCluster: string[] = [
		"route53-recovery-control-config:DeleteCluster",
	];
	/** IAM actions required for the DeleteControlPanel API call. */
	static readonly DeleteControlPanel: string[] = [
		"route53-recovery-control-config:DeleteControlPanel",
	];
	/** IAM actions required for the DeleteRoutingControl API call. */
	static readonly DeleteRoutingControl: string[] = [
		"route53-recovery-control-config:DeleteRoutingControl",
	];
	/** IAM actions required for the DeleteSafetyRule API call. */
	static readonly DeleteSafetyRule: string[] = [
		"route53-recovery-control-config:DeleteSafetyRule",
	];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DescribeCluster: string[] = [
		"route53-recovery-control-config:DescribeCluster",
	];
	/** IAM actions required for the DescribeControlPanel API call. */
	static readonly DescribeControlPanel: string[] = [
		"route53-recovery-control-config:DescribeControlPanel",
	];
	/** IAM actions required for the DescribeRoutingControl API call. */
	static readonly DescribeRoutingControl: string[] = [
		"route53-recovery-control-config:DescribeRoutingControl",
	];
	/** IAM actions required for the DescribeSafetyRule API call. */
	static readonly DescribeSafetyRule: string[] = [
		"route53-recovery-control-config:DescribeSafetyRule",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"route53-recovery-control-config:GetResourcePolicy",
	];
	/** IAM actions required for the ListAssociatedRoute53HealthChecks API call. */
	static readonly ListAssociatedRoute53HealthChecks: string[] = [
		"route53-recovery-control-config:ListAssociatedRoute53HealthChecks",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly ListClusters: string[] = [
		"route53-recovery-control-config:ListClusters",
	];
	/** IAM actions required for the ListControlPanels API call. */
	static readonly ListControlPanels: string[] = [
		"route53-recovery-control-config:ListControlPanels",
	];
	/** IAM actions required for the ListRoutingControls API call. */
	static readonly ListRoutingControls: string[] = [
		"route53-recovery-control-config:ListRoutingControls",
	];
	/** IAM actions required for the ListSafetyRules API call. */
	static readonly ListSafetyRules: string[] = [
		"route53-recovery-control-config:ListSafetyRules",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"route53-recovery-control-config:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"route53-recovery-control-config:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"route53-recovery-control-config:UntagResource",
	];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UpdateCluster: string[] = [
		"route53-recovery-control-config:UpdateCluster",
	];
	/** IAM actions required for the UpdateControlPanel API call. */
	static readonly UpdateControlPanel: string[] = [
		"route53-recovery-control-config:UpdateControlPanel",
	];
	/** IAM actions required for the UpdateRoutingControl API call. */
	static readonly UpdateRoutingControl: string[] = [
		"route53-recovery-control-config:UpdateRoutingControl",
	];
	/** IAM actions required for the UpdateSafetyRule API call. */
	static readonly UpdateSafetyRule: string[] = [
		"route53-recovery-control-config:UpdateSafetyRule",
	];
}

/**
 * Condition key constants and builders for route53-recovery-control-config.
 */
export class Route53RecoveryControlConfigConditions {
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CreateClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateControlPanel action. */
	static readonly CreateControlPanelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSafetyRule action. */
	static readonly CreateSafetyRuleConditionKeys: string[] = [
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
