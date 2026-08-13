// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/application-autoscaling.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the application-autoscaling service.
 */
export class ApplicationAutoscalingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "application-autoscaling";

	/** [Write] application-autoscaling:DeleteScalingPolicy */
	static readonly DELETE_SCALING_POLICY =
		"application-autoscaling:DeleteScalingPolicy";
	/** [Write] application-autoscaling:DeleteScheduledAction */
	static readonly DELETE_SCHEDULED_ACTION =
		"application-autoscaling:DeleteScheduledAction";
	/** [Write] application-autoscaling:DeregisterScalableTarget */
	static readonly DEREGISTER_SCALABLE_TARGET =
		"application-autoscaling:DeregisterScalableTarget";
	/** [Read] application-autoscaling:DescribeScalableTargets */
	static readonly DESCRIBE_SCALABLE_TARGETS =
		"application-autoscaling:DescribeScalableTargets";
	/** [Read] application-autoscaling:DescribeScalingActivities */
	static readonly DESCRIBE_SCALING_ACTIVITIES =
		"application-autoscaling:DescribeScalingActivities";
	/** [Read] application-autoscaling:DescribeScalingPolicies */
	static readonly DESCRIBE_SCALING_POLICIES =
		"application-autoscaling:DescribeScalingPolicies";
	/** [Read] application-autoscaling:DescribeScheduledActions */
	static readonly DESCRIBE_SCHEDULED_ACTIONS =
		"application-autoscaling:DescribeScheduledActions";
	/** [List] application-autoscaling:GetPredictiveScalingForecast */
	static readonly GET_PREDICTIVE_SCALING_FORECAST =
		"application-autoscaling:GetPredictiveScalingForecast";
	/** [Read] application-autoscaling:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"application-autoscaling:ListTagsForResource";
	/** [Write] application-autoscaling:PutScalingPolicy */
	static readonly PUT_SCALING_POLICY =
		"application-autoscaling:PutScalingPolicy";
	/** [Write] application-autoscaling:PutScheduledAction */
	static readonly PUT_SCHEDULED_ACTION =
		"application-autoscaling:PutScheduledAction";
	/** [Write] application-autoscaling:RegisterScalableTarget */
	static readonly REGISTER_SCALABLE_TARGET =
		"application-autoscaling:RegisterScalableTarget";
	/** [Tagging] application-autoscaling:TagResource */
	static readonly TAG_RESOURCE = "application-autoscaling:TagResource";
	/** [Tagging] application-autoscaling:UntagResource */
	static readonly UNTAG_RESOURCE = "application-autoscaling:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ApplicationAutoscalingActions.DESCRIBE_SCALABLE_TARGETS,
		ApplicationAutoscalingActions.DESCRIBE_SCALING_ACTIVITIES,
		ApplicationAutoscalingActions.DESCRIBE_SCALING_POLICIES,
		ApplicationAutoscalingActions.DESCRIBE_SCHEDULED_ACTIONS,
		ApplicationAutoscalingActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ApplicationAutoscalingActions.DELETE_SCALING_POLICY,
		ApplicationAutoscalingActions.DELETE_SCHEDULED_ACTION,
		ApplicationAutoscalingActions.DEREGISTER_SCALABLE_TARGET,
		ApplicationAutoscalingActions.PUT_SCALING_POLICY,
		ApplicationAutoscalingActions.PUT_SCHEDULED_ACTION,
		ApplicationAutoscalingActions.REGISTER_SCALABLE_TARGET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ApplicationAutoscalingActions.GET_PREDICTIVE_SCALING_FORECAST,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ApplicationAutoscalingActions.TAG_RESOURCE,
		ApplicationAutoscalingActions.UNTAG_RESOURCE,
	];
}

const ScalableTargetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):application-autoscaling:(?<region>[^:]*):(?<account>[^:]*):scalable-target/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for application-autoscaling resources.
 */
export class ApplicationAutoscalingResources {
	/**
	 * Builds an ARN for the ScalableTarget resource.
	 */
	static scalableTarget(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:application-autoscaling:${props.region ?? "*"}:${props.account ?? "*"}:scalable-target/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ScalableTarget resource.
	 */
	static isValidScalableTargetArn(arn: string): boolean {
		return ScalableTargetArnRegex.test(arn);
	}

	/**
	 * Parses a ScalableTarget ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScalableTargetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ScalableTargetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ScalableTarget ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for application-autoscaling.
 */
export class ApplicationAutoscalingOperations {
	/** IAM actions required for the DeleteScalingPolicy API call. */
	static readonly DELETE_SCALING_POLICY: string[] = [
		"application-autoscaling:DeleteScalingPolicy",
	];
	/** IAM actions required for the DeleteScheduledAction API call. */
	static readonly DELETE_SCHEDULED_ACTION: string[] = [
		"application-autoscaling:DeleteScheduledAction",
	];
	/** IAM actions required for the DeregisterScalableTarget API call. */
	static readonly DEREGISTER_SCALABLE_TARGET: string[] = [
		"application-autoscaling:DeregisterScalableTarget",
	];
	/** IAM actions required for the DescribeScalableTargets API call. */
	static readonly DESCRIBE_SCALABLE_TARGETS: string[] = [
		"application-autoscaling:DescribeScalableTargets",
	];
	/** IAM actions required for the DescribeScalingActivities API call. */
	static readonly DESCRIBE_SCALING_ACTIVITIES: string[] = [
		"application-autoscaling:DescribeScalingActivities",
	];
	/** IAM actions required for the DescribeScalingPolicies API call. */
	static readonly DESCRIBE_SCALING_POLICIES: string[] = [
		"application-autoscaling:DescribeScalingPolicies",
	];
	/** IAM actions required for the DescribeScheduledActions API call. */
	static readonly DESCRIBE_SCHEDULED_ACTIONS: string[] = [
		"application-autoscaling:DescribeScheduledActions",
	];
	/** IAM actions required for the GetPredictiveScalingForecast API call. */
	static readonly GET_PREDICTIVE_SCALING_FORECAST: string[] = [
		"application-autoscaling:GetPredictiveScalingForecast",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"application-autoscaling:ListTagsForResource",
	];
	/** IAM actions required for the PutScalingPolicy API call. */
	static readonly PUT_SCALING_POLICY: string[] = [
		"application-autoscaling:PutScalingPolicy",
	];
	/** IAM actions required for the PutScheduledAction API call. */
	static readonly PUT_SCHEDULED_ACTION: string[] = [
		"application-autoscaling:PutScheduledAction",
	];
	/** IAM actions required for the RegisterScalableTarget API call. */
	static readonly REGISTER_SCALABLE_TARGET: string[] = [
		"iam:PassRole",
		"application-autoscaling:RegisterScalableTarget",
		"application-autoscaling:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"application-autoscaling:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"application-autoscaling:UntagResource",
	];
}

/**
 * Condition key constants and builders for application-autoscaling.
 */
export class ApplicationAutoscalingConditions {
	/** Condition keys applicable to the DeleteScalingPolicy action. */
	static readonly DELETE_SCALING_POLICY_CONDITION_KEYS: string[] = [
		"application-autoscaling:scalable-dimension",
		"application-autoscaling:service-namespace",
	];
	/** Condition keys applicable to the DeleteScheduledAction action. */
	static readonly DELETE_SCHEDULED_ACTION_CONDITION_KEYS: string[] = [
		"application-autoscaling:scalable-dimension",
		"application-autoscaling:service-namespace",
	];
	/** Condition keys applicable to the DeregisterScalableTarget action. */
	static readonly DEREGISTER_SCALABLE_TARGET_CONDITION_KEYS: string[] = [
		"application-autoscaling:scalable-dimension",
		"application-autoscaling:service-namespace",
	];
	/** Condition keys applicable to the PutScalingPolicy action. */
	static readonly PUT_SCALING_POLICY_CONDITION_KEYS: string[] = [
		"application-autoscaling:scalable-dimension",
		"application-autoscaling:service-namespace",
	];
	/** Condition keys applicable to the PutScheduledAction action. */
	static readonly PUT_SCHEDULED_ACTION_CONDITION_KEYS: string[] = [
		"application-autoscaling:scalable-dimension",
		"application-autoscaling:service-namespace",
	];
	/** Condition keys applicable to the RegisterScalableTarget action. */
	static readonly REGISTER_SCALABLE_TARGET_CONDITION_KEYS: string[] = [
		"application-autoscaling:scalable-dimension",
		"application-autoscaling:service-namespace",
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

	/** Condition key: application-autoscaling:scalable-dimension (String) */
	static readonly SCALABLE_DIMENSION =
		"application-autoscaling:scalable-dimension";
	/** Condition key: application-autoscaling:service-namespace (String) */
	static readonly SERVICE_NAMESPACE =
		"application-autoscaling:service-namespace";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `application-autoscaling:scalable-dimension`.
	 */
	static scalableDimension(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "application-autoscaling:scalable-dimension": value },
		};
	}

	/**
	 * Generates a condition block for `application-autoscaling:service-namespace`.
	 */
	static serviceNamespace(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "application-autoscaling:service-namespace": value },
		};
	}

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
