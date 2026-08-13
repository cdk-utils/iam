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
	static readonly DeleteScalingPolicy =
		"application-autoscaling:DeleteScalingPolicy";
	/** [Write] application-autoscaling:DeleteScheduledAction */
	static readonly DeleteScheduledAction =
		"application-autoscaling:DeleteScheduledAction";
	/** [Write] application-autoscaling:DeregisterScalableTarget */
	static readonly DeregisterScalableTarget =
		"application-autoscaling:DeregisterScalableTarget";
	/** [Read] application-autoscaling:DescribeScalableTargets */
	static readonly DescribeScalableTargets =
		"application-autoscaling:DescribeScalableTargets";
	/** [Read] application-autoscaling:DescribeScalingActivities */
	static readonly DescribeScalingActivities =
		"application-autoscaling:DescribeScalingActivities";
	/** [Read] application-autoscaling:DescribeScalingPolicies */
	static readonly DescribeScalingPolicies =
		"application-autoscaling:DescribeScalingPolicies";
	/** [Read] application-autoscaling:DescribeScheduledActions */
	static readonly DescribeScheduledActions =
		"application-autoscaling:DescribeScheduledActions";
	/** [List] application-autoscaling:GetPredictiveScalingForecast */
	static readonly actionGetPredictiveScalingForecast =
		"application-autoscaling:GetPredictiveScalingForecast";
	/** [Read] application-autoscaling:ListTagsForResource */
	static readonly ListTagsForResource =
		"application-autoscaling:ListTagsForResource";
	/** [Write] application-autoscaling:PutScalingPolicy */
	static readonly PutScalingPolicy = "application-autoscaling:PutScalingPolicy";
	/** [Write] application-autoscaling:PutScheduledAction */
	static readonly PutScheduledAction =
		"application-autoscaling:PutScheduledAction";
	/** [Write] application-autoscaling:RegisterScalableTarget */
	static readonly RegisterScalableTarget =
		"application-autoscaling:RegisterScalableTarget";
	/** [Tagging] application-autoscaling:TagResource */
	static readonly TagResource = "application-autoscaling:TagResource";
	/** [Tagging] application-autoscaling:UntagResource */
	static readonly UntagResource = "application-autoscaling:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ApplicationAutoscalingActions.DescribeScalableTargets,
		ApplicationAutoscalingActions.DescribeScalingActivities,
		ApplicationAutoscalingActions.DescribeScalingPolicies,
		ApplicationAutoscalingActions.DescribeScheduledActions,
		ApplicationAutoscalingActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ApplicationAutoscalingActions.DeleteScalingPolicy,
		ApplicationAutoscalingActions.DeleteScheduledAction,
		ApplicationAutoscalingActions.DeregisterScalableTarget,
		ApplicationAutoscalingActions.PutScalingPolicy,
		ApplicationAutoscalingActions.PutScheduledAction,
		ApplicationAutoscalingActions.RegisterScalableTarget,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ApplicationAutoscalingActions.actionGetPredictiveScalingForecast,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ApplicationAutoscalingActions.TagResource,
		ApplicationAutoscalingActions.UntagResource,
	];
}

/**
 * Properties for building a ScalableTarget ARN.
 */
export interface ApplicationAutoscalingScalableTargetArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ScalableTarget ARN.
 */
export interface ApplicationAutoscalingScalableTargetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const ScalableTargetArnRegex =
	/^arn:(?<partition>[^:]+):application-autoscaling:(?<region>[^:]*):(?<account>[^:]*):scalable-target\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for application-autoscaling resources.
 */
export class ApplicationAutoscalingResources {
	/**
	 * Builds an ARN for the ScalableTarget resource.
	 */
	static scalableTarget(
		props: ApplicationAutoscalingScalableTargetArnProps,
	): string {
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
	static parseScalableTargetArn(
		arn: string,
	): ApplicationAutoscalingScalableTargetArnComponents {
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
	static readonly DeleteScalingPolicy: string[] = [
		"application-autoscaling:DeleteScalingPolicy",
	];
	/** IAM actions required for the DeleteScheduledAction API call. */
	static readonly DeleteScheduledAction: string[] = [
		"application-autoscaling:DeleteScheduledAction",
	];
	/** IAM actions required for the DeregisterScalableTarget API call. */
	static readonly DeregisterScalableTarget: string[] = [
		"application-autoscaling:DeregisterScalableTarget",
	];
	/** IAM actions required for the DescribeScalableTargets API call. */
	static readonly DescribeScalableTargets: string[] = [
		"application-autoscaling:DescribeScalableTargets",
	];
	/** IAM actions required for the DescribeScalingActivities API call. */
	static readonly DescribeScalingActivities: string[] = [
		"application-autoscaling:DescribeScalingActivities",
	];
	/** IAM actions required for the DescribeScalingPolicies API call. */
	static readonly DescribeScalingPolicies: string[] = [
		"application-autoscaling:DescribeScalingPolicies",
	];
	/** IAM actions required for the DescribeScheduledActions API call. */
	static readonly DescribeScheduledActions: string[] = [
		"application-autoscaling:DescribeScheduledActions",
	];
	/** IAM actions required for the GetPredictiveScalingForecast API call. */
	static readonly opGetPredictiveScalingForecast: string[] = [
		"application-autoscaling:GetPredictiveScalingForecast",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"application-autoscaling:ListTagsForResource",
	];
	/** IAM actions required for the PutScalingPolicy API call. */
	static readonly PutScalingPolicy: string[] = [
		"application-autoscaling:PutScalingPolicy",
	];
	/** IAM actions required for the PutScheduledAction API call. */
	static readonly PutScheduledAction: string[] = [
		"application-autoscaling:PutScheduledAction",
	];
	/** IAM actions required for the RegisterScalableTarget API call. */
	static readonly RegisterScalableTarget: string[] = [
		"iam:PassRole",
		"application-autoscaling:RegisterScalableTarget",
		"application-autoscaling:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"application-autoscaling:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"application-autoscaling:UntagResource",
	];
}

/**
 * Condition key constants and builders for application-autoscaling.
 */
export class ApplicationAutoscalingConditions {
	/** Condition keys applicable to the DeleteScalingPolicy action. */
	static readonly DeleteScalingPolicyConditionKeys: string[] = [
		"application-autoscaling:scalable-dimension",
		"application-autoscaling:service-namespace",
	];
	/** Condition keys applicable to the DeleteScheduledAction action. */
	static readonly DeleteScheduledActionConditionKeys: string[] = [
		"application-autoscaling:scalable-dimension",
		"application-autoscaling:service-namespace",
	];
	/** Condition keys applicable to the DeregisterScalableTarget action. */
	static readonly DeregisterScalableTargetConditionKeys: string[] = [
		"application-autoscaling:scalable-dimension",
		"application-autoscaling:service-namespace",
	];
	/** Condition keys applicable to the PutScalingPolicy action. */
	static readonly PutScalingPolicyConditionKeys: string[] = [
		"application-autoscaling:scalable-dimension",
		"application-autoscaling:service-namespace",
	];
	/** Condition keys applicable to the PutScheduledAction action. */
	static readonly PutScheduledActionConditionKeys: string[] = [
		"application-autoscaling:scalable-dimension",
		"application-autoscaling:service-namespace",
	];
	/** Condition keys applicable to the RegisterScalableTarget action. */
	static readonly RegisterScalableTargetConditionKeys: string[] = [
		"application-autoscaling:scalable-dimension",
		"application-autoscaling:service-namespace",
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

	/** Condition key: application-autoscaling:scalable-dimension (String) */
	static readonly SCALABLE_DIMENSION =
		"application-autoscaling:scalable-dimension";
	/** Condition key: application-autoscaling:service-namespace (String) */
	static readonly SERVICE_NAMESPACE =
		"application-autoscaling:service-namespace";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
