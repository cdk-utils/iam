// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/autoscaling.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the autoscaling service.
 */
export class AutoscalingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "autoscaling";

	/** [Write] autoscaling:AttachInstances */
	static readonly AttachInstances = "autoscaling:AttachInstances";
	/** [Write] autoscaling:AttachLoadBalancerTargetGroups */
	static readonly AttachLoadBalancerTargetGroups =
		"autoscaling:AttachLoadBalancerTargetGroups";
	/** [Write] autoscaling:AttachLoadBalancers */
	static readonly AttachLoadBalancers = "autoscaling:AttachLoadBalancers";
	/** [Write] autoscaling:AttachTrafficSources */
	static readonly AttachTrafficSources = "autoscaling:AttachTrafficSources";
	/** [Write] autoscaling:BatchDeleteScheduledAction */
	static readonly BatchDeleteScheduledAction =
		"autoscaling:BatchDeleteScheduledAction";
	/** [Write] autoscaling:BatchPutScheduledUpdateGroupAction */
	static readonly BatchPutScheduledUpdateGroupAction =
		"autoscaling:BatchPutScheduledUpdateGroupAction";
	/** [Write] autoscaling:CancelInstanceRefresh */
	static readonly CancelInstanceRefresh = "autoscaling:CancelInstanceRefresh";
	/** [Write] autoscaling:CompleteLifecycleAction */
	static readonly CompleteLifecycleAction =
		"autoscaling:CompleteLifecycleAction";
	/** [Write] autoscaling:CreateAutoScalingGroup */
	static readonly CreateAutoScalingGroup = "autoscaling:CreateAutoScalingGroup";
	/** [Write] autoscaling:CreateLaunchConfiguration */
	static readonly CreateLaunchConfiguration =
		"autoscaling:CreateLaunchConfiguration";
	/** [Tagging] autoscaling:CreateOrUpdateTags */
	static readonly CreateOrUpdateTags = "autoscaling:CreateOrUpdateTags";
	/** [Write] autoscaling:DeleteAutoScalingGroup */
	static readonly DeleteAutoScalingGroup = "autoscaling:DeleteAutoScalingGroup";
	/** [Write] autoscaling:DeleteLaunchConfiguration */
	static readonly DeleteLaunchConfiguration =
		"autoscaling:DeleteLaunchConfiguration";
	/** [Write] autoscaling:DeleteLifecycleHook */
	static readonly DeleteLifecycleHook = "autoscaling:DeleteLifecycleHook";
	/** [Write] autoscaling:DeleteNotificationConfiguration */
	static readonly DeleteNotificationConfiguration =
		"autoscaling:DeleteNotificationConfiguration";
	/** [Write] autoscaling:DeletePolicy */
	static readonly DeletePolicy = "autoscaling:DeletePolicy";
	/** [Write] autoscaling:DeleteScheduledAction */
	static readonly DeleteScheduledAction = "autoscaling:DeleteScheduledAction";
	/** [Tagging] autoscaling:DeleteTags */
	static readonly DeleteTags = "autoscaling:DeleteTags";
	/** [Write] autoscaling:DeleteWarmPool */
	static readonly DeleteWarmPool = "autoscaling:DeleteWarmPool";
	/** [List] autoscaling:DescribeAccountLimits */
	static readonly DescribeAccountLimits = "autoscaling:DescribeAccountLimits";
	/** [List] autoscaling:DescribeAccountSettings */
	static readonly DescribeAccountSettings =
		"autoscaling:DescribeAccountSettings";
	/** [List] autoscaling:DescribeAdjustmentTypes */
	static readonly DescribeAdjustmentTypes =
		"autoscaling:DescribeAdjustmentTypes";
	/** [List] autoscaling:DescribeAutoScalingGroups */
	static readonly DescribeAutoScalingGroups =
		"autoscaling:DescribeAutoScalingGroups";
	/** [List] autoscaling:DescribeAutoScalingInstances */
	static readonly DescribeAutoScalingInstances =
		"autoscaling:DescribeAutoScalingInstances";
	/** [List] autoscaling:DescribeAutoScalingNotificationTypes */
	static readonly DescribeAutoScalingNotificationTypes =
		"autoscaling:DescribeAutoScalingNotificationTypes";
	/** [List] autoscaling:DescribeInstanceRefreshes */
	static readonly DescribeInstanceRefreshes =
		"autoscaling:DescribeInstanceRefreshes";
	/** [List] autoscaling:DescribeLaunchConfigurations */
	static readonly DescribeLaunchConfigurations =
		"autoscaling:DescribeLaunchConfigurations";
	/** [List] autoscaling:DescribeLifecycleHookTypes */
	static readonly DescribeLifecycleHookTypes =
		"autoscaling:DescribeLifecycleHookTypes";
	/** [List] autoscaling:DescribeLifecycleHooks */
	static readonly DescribeLifecycleHooks = "autoscaling:DescribeLifecycleHooks";
	/** [List] autoscaling:DescribeLoadBalancerTargetGroups */
	static readonly DescribeLoadBalancerTargetGroups =
		"autoscaling:DescribeLoadBalancerTargetGroups";
	/** [List] autoscaling:DescribeLoadBalancers */
	static readonly DescribeLoadBalancers = "autoscaling:DescribeLoadBalancers";
	/** [List] autoscaling:DescribeMetricCollectionTypes */
	static readonly DescribeMetricCollectionTypes =
		"autoscaling:DescribeMetricCollectionTypes";
	/** [List] autoscaling:DescribeNotificationConfigurations */
	static readonly DescribeNotificationConfigurations =
		"autoscaling:DescribeNotificationConfigurations";
	/** [List] autoscaling:DescribePolicies */
	static readonly DescribePolicies = "autoscaling:DescribePolicies";
	/** [List] autoscaling:DescribeScalingActivities */
	static readonly DescribeScalingActivities =
		"autoscaling:DescribeScalingActivities";
	/** [List] autoscaling:DescribeScalingProcessTypes */
	static readonly DescribeScalingProcessTypes =
		"autoscaling:DescribeScalingProcessTypes";
	/** [List] autoscaling:DescribeScheduledActions */
	static readonly DescribeScheduledActions =
		"autoscaling:DescribeScheduledActions";
	/** [Read] autoscaling:DescribeTags */
	static readonly DescribeTags = "autoscaling:DescribeTags";
	/** [List] autoscaling:DescribeTerminationPolicyTypes */
	static readonly DescribeTerminationPolicyTypes =
		"autoscaling:DescribeTerminationPolicyTypes";
	/** [List] autoscaling:DescribeTrafficSources */
	static readonly DescribeTrafficSources = "autoscaling:DescribeTrafficSources";
	/** [List] autoscaling:DescribeWarmPool */
	static readonly DescribeWarmPool = "autoscaling:DescribeWarmPool";
	/** [Write] autoscaling:DetachInstances */
	static readonly DetachInstances = "autoscaling:DetachInstances";
	/** [Write] autoscaling:DetachLoadBalancerTargetGroups */
	static readonly DetachLoadBalancerTargetGroups =
		"autoscaling:DetachLoadBalancerTargetGroups";
	/** [Write] autoscaling:DetachLoadBalancers */
	static readonly DetachLoadBalancers = "autoscaling:DetachLoadBalancers";
	/** [Write] autoscaling:DetachTrafficSources */
	static readonly DetachTrafficSources = "autoscaling:DetachTrafficSources";
	/** [Write] autoscaling:DisableMetricsCollection */
	static readonly DisableMetricsCollection =
		"autoscaling:DisableMetricsCollection";
	/** [Write] autoscaling:EnableMetricsCollection */
	static readonly EnableMetricsCollection =
		"autoscaling:EnableMetricsCollection";
	/** [Write] autoscaling:EnterStandby */
	static readonly EnterStandby = "autoscaling:EnterStandby";
	/** [Write] autoscaling:ExecutePolicy */
	static readonly ExecutePolicy = "autoscaling:ExecutePolicy";
	/** [Write] autoscaling:ExitStandby */
	static readonly ExitStandby = "autoscaling:ExitStandby";
	/** [List] autoscaling:GetPredictiveScalingForecast */
	static readonly actionGetPredictiveScalingForecast =
		"autoscaling:GetPredictiveScalingForecast";
	/** [Write] autoscaling:LaunchInstances */
	static readonly LaunchInstances = "autoscaling:LaunchInstances";
	/** [Write] autoscaling:PutAccountSetting */
	static readonly PutAccountSetting = "autoscaling:PutAccountSetting";
	/** [Write] autoscaling:PutLifecycleHook */
	static readonly PutLifecycleHook = "autoscaling:PutLifecycleHook";
	/** [Write] autoscaling:PutNotificationConfiguration */
	static readonly PutNotificationConfiguration =
		"autoscaling:PutNotificationConfiguration";
	/** [Write] autoscaling:PutScalingPolicy */
	static readonly PutScalingPolicy = "autoscaling:PutScalingPolicy";
	/** [Write] autoscaling:PutScheduledUpdateGroupAction */
	static readonly PutScheduledUpdateGroupAction =
		"autoscaling:PutScheduledUpdateGroupAction";
	/** [Write] autoscaling:PutWarmPool */
	static readonly PutWarmPool = "autoscaling:PutWarmPool";
	/** [Write] autoscaling:RecordLifecycleActionHeartbeat */
	static readonly RecordLifecycleActionHeartbeat =
		"autoscaling:RecordLifecycleActionHeartbeat";
	/** [Write] autoscaling:ResumeProcesses */
	static readonly ResumeProcesses = "autoscaling:ResumeProcesses";
	/** [Write] autoscaling:RollbackInstanceRefresh */
	static readonly RollbackInstanceRefresh =
		"autoscaling:RollbackInstanceRefresh";
	/** [Write] autoscaling:SetDesiredCapacity */
	static readonly actionSetDesiredCapacity = "autoscaling:SetDesiredCapacity";
	/** [Write] autoscaling:SetInstanceHealth */
	static readonly actionSetInstanceHealth = "autoscaling:SetInstanceHealth";
	/** [Write] autoscaling:SetInstanceProtection */
	static readonly actionSetInstanceProtection =
		"autoscaling:SetInstanceProtection";
	/** [Write] autoscaling:StartInstanceRefresh */
	static readonly StartInstanceRefresh = "autoscaling:StartInstanceRefresh";
	/** [Write] autoscaling:SuspendProcesses */
	static readonly SuspendProcesses = "autoscaling:SuspendProcesses";
	/** [Write] autoscaling:TerminateInstanceInAutoScalingGroup */
	static readonly TerminateInstanceInAutoScalingGroup =
		"autoscaling:TerminateInstanceInAutoScalingGroup";
	/** [Write] autoscaling:UpdateAutoScalingGroup */
	static readonly UpdateAutoScalingGroup = "autoscaling:UpdateAutoScalingGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [AutoscalingActions.DescribeTags];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AutoscalingActions.AttachInstances,
		AutoscalingActions.AttachLoadBalancerTargetGroups,
		AutoscalingActions.AttachLoadBalancers,
		AutoscalingActions.AttachTrafficSources,
		AutoscalingActions.BatchDeleteScheduledAction,
		AutoscalingActions.BatchPutScheduledUpdateGroupAction,
		AutoscalingActions.CancelInstanceRefresh,
		AutoscalingActions.CompleteLifecycleAction,
		AutoscalingActions.CreateAutoScalingGroup,
		AutoscalingActions.CreateLaunchConfiguration,
		AutoscalingActions.DeleteAutoScalingGroup,
		AutoscalingActions.DeleteLaunchConfiguration,
		AutoscalingActions.DeleteLifecycleHook,
		AutoscalingActions.DeleteNotificationConfiguration,
		AutoscalingActions.DeletePolicy,
		AutoscalingActions.DeleteScheduledAction,
		AutoscalingActions.DeleteWarmPool,
		AutoscalingActions.DetachInstances,
		AutoscalingActions.DetachLoadBalancerTargetGroups,
		AutoscalingActions.DetachLoadBalancers,
		AutoscalingActions.DetachTrafficSources,
		AutoscalingActions.DisableMetricsCollection,
		AutoscalingActions.EnableMetricsCollection,
		AutoscalingActions.EnterStandby,
		AutoscalingActions.ExecutePolicy,
		AutoscalingActions.ExitStandby,
		AutoscalingActions.LaunchInstances,
		AutoscalingActions.PutAccountSetting,
		AutoscalingActions.PutLifecycleHook,
		AutoscalingActions.PutNotificationConfiguration,
		AutoscalingActions.PutScalingPolicy,
		AutoscalingActions.PutScheduledUpdateGroupAction,
		AutoscalingActions.PutWarmPool,
		AutoscalingActions.RecordLifecycleActionHeartbeat,
		AutoscalingActions.ResumeProcesses,
		AutoscalingActions.RollbackInstanceRefresh,
		AutoscalingActions.actionSetDesiredCapacity,
		AutoscalingActions.actionSetInstanceHealth,
		AutoscalingActions.actionSetInstanceProtection,
		AutoscalingActions.StartInstanceRefresh,
		AutoscalingActions.SuspendProcesses,
		AutoscalingActions.TerminateInstanceInAutoScalingGroup,
		AutoscalingActions.UpdateAutoScalingGroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AutoscalingActions.DescribeAccountLimits,
		AutoscalingActions.DescribeAccountSettings,
		AutoscalingActions.DescribeAdjustmentTypes,
		AutoscalingActions.DescribeAutoScalingGroups,
		AutoscalingActions.DescribeAutoScalingInstances,
		AutoscalingActions.DescribeAutoScalingNotificationTypes,
		AutoscalingActions.DescribeInstanceRefreshes,
		AutoscalingActions.DescribeLaunchConfigurations,
		AutoscalingActions.DescribeLifecycleHookTypes,
		AutoscalingActions.DescribeLifecycleHooks,
		AutoscalingActions.DescribeLoadBalancerTargetGroups,
		AutoscalingActions.DescribeLoadBalancers,
		AutoscalingActions.DescribeMetricCollectionTypes,
		AutoscalingActions.DescribeNotificationConfigurations,
		AutoscalingActions.DescribePolicies,
		AutoscalingActions.DescribeScalingActivities,
		AutoscalingActions.DescribeScalingProcessTypes,
		AutoscalingActions.DescribeScheduledActions,
		AutoscalingActions.DescribeTerminationPolicyTypes,
		AutoscalingActions.DescribeTrafficSources,
		AutoscalingActions.DescribeWarmPool,
		AutoscalingActions.actionGetPredictiveScalingForecast,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AutoscalingActions.CreateOrUpdateTags,
		AutoscalingActions.DeleteTags,
	];
}

/**
 * Properties for building a autoScalingGroup ARN.
 */
export interface AutoscalingAutoScalingGroupArnProps {
	/** The GroupId component of the ARN. */
	readonly groupId: string;
	/** The GroupFriendlyName component of the ARN. */
	readonly groupFriendlyName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a autoScalingGroup ARN.
 */
export interface AutoscalingAutoScalingGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupId component. */
	readonly groupId: string;
	/** The GroupFriendlyName component. */
	readonly groupFriendlyName: string;
}

/**
 * Properties for building a launchConfiguration ARN.
 */
export interface AutoscalingLaunchConfigurationArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** The LaunchConfigurationName component of the ARN. */
	readonly launchConfigurationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a launchConfiguration ARN.
 */
export interface AutoscalingLaunchConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
	/** The LaunchConfigurationName component. */
	readonly launchConfigurationName: string;
}

const AutoScalingGroupArnRegex =
	/^arn:(?<partition>[^:]+):autoscaling:(?<region>[^:]*):(?<account>[^:]*):autoScalingGroup:(?<groupId>[^:/?]+):autoScalingGroupName\/(?<groupFriendlyName>[^:/?]+)$/;
const LaunchConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):autoscaling:(?<region>[^:]*):(?<account>[^:]*):launchConfiguration:(?<id>[^:/?]+):launchConfigurationName\/(?<launchConfigurationName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for autoscaling resources.
 */
export class AutoscalingResources {
	/**
	 * Builds an ARN for the autoScalingGroup resource.
	 */
	static autoScalingGroup(props: AutoscalingAutoScalingGroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:autoscaling:${props.region ?? "*"}:${props.account ?? "*"}:autoScalingGroup:${props.groupId}:autoScalingGroupName/${props.groupFriendlyName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the autoScalingGroup resource.
	 */
	static isValidAutoScalingGroupArn(arn: string): boolean {
		return AutoScalingGroupArnRegex.test(arn);
	}

	/**
	 * Parses a autoScalingGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutoScalingGroupArn(
		arn: string,
	): AutoscalingAutoScalingGroupArnComponents {
		const match = AutoScalingGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid autoScalingGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupId: match.groups!.groupId,
			groupFriendlyName: match.groups!.groupFriendlyName,
		};
	}

	/**
	 * Builds an ARN for the launchConfiguration resource.
	 */
	static launchConfiguration(
		props: AutoscalingLaunchConfigurationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:autoscaling:${props.region ?? "*"}:${props.account ?? "*"}:launchConfiguration:${props.id}:launchConfigurationName/${props.launchConfigurationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the launchConfiguration resource.
	 */
	static isValidLaunchConfigurationArn(arn: string): boolean {
		return LaunchConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a launchConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLaunchConfigurationArn(
		arn: string,
	): AutoscalingLaunchConfigurationArnComponents {
		const match = LaunchConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid launchConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
			launchConfigurationName: match.groups!.launchConfigurationName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for autoscaling.
 */
export class AutoscalingOperations {
	/** IAM actions required for the AttachInstances API call. */
	static readonly AttachInstances: string[] = ["autoscaling:AttachInstances"];
	/** IAM actions required for the AttachLoadBalancerTargetGroups API call. */
	static readonly AttachLoadBalancerTargetGroups: string[] = [
		"autoscaling:AttachLoadBalancerTargetGroups",
	];
	/** IAM actions required for the AttachLoadBalancers API call. */
	static readonly AttachLoadBalancers: string[] = [
		"autoscaling:AttachLoadBalancers",
	];
	/** IAM actions required for the AttachTrafficSources API call. */
	static readonly AttachTrafficSources: string[] = [
		"autoscaling:AttachTrafficSources",
	];
	/** IAM actions required for the BatchDeleteScheduledAction API call. */
	static readonly BatchDeleteScheduledAction: string[] = [
		"autoscaling:BatchDeleteScheduledAction",
	];
	/** IAM actions required for the BatchPutScheduledUpdateGroupAction API call. */
	static readonly BatchPutScheduledUpdateGroupAction: string[] = [
		"autoscaling:BatchPutScheduledUpdateGroupAction",
	];
	/** IAM actions required for the CancelInstanceRefresh API call. */
	static readonly CancelInstanceRefresh: string[] = [
		"autoscaling:CancelInstanceRefresh",
	];
	/** IAM actions required for the CompleteLifecycleAction API call. */
	static readonly CompleteLifecycleAction: string[] = [
		"autoscaling:CompleteLifecycleAction",
	];
	/** IAM actions required for the CreateAutoScalingGroup API call. */
	static readonly CreateAutoScalingGroup: string[] = [
		"autoscaling:CreateAutoScalingGroup",
		"autoscaling:CreateOrUpdateTags",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateLaunchConfiguration API call. */
	static readonly CreateLaunchConfiguration: string[] = [
		"autoscaling:CreateLaunchConfiguration",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateOrUpdateTags API call. */
	static readonly CreateOrUpdateTags: string[] = [
		"autoscaling:CreateOrUpdateTags",
	];
	/** IAM actions required for the DeleteAutoScalingGroup API call. */
	static readonly DeleteAutoScalingGroup: string[] = [
		"autoscaling:DeleteAutoScalingGroup",
	];
	/** IAM actions required for the DeleteLaunchConfiguration API call. */
	static readonly DeleteLaunchConfiguration: string[] = [
		"autoscaling:DeleteLaunchConfiguration",
	];
	/** IAM actions required for the DeleteLifecycleHook API call. */
	static readonly DeleteLifecycleHook: string[] = [
		"autoscaling:DeleteLifecycleHook",
	];
	/** IAM actions required for the DeleteNotificationConfiguration API call. */
	static readonly DeleteNotificationConfiguration: string[] = [
		"autoscaling:DeleteNotificationConfiguration",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DeletePolicy: string[] = ["autoscaling:DeletePolicy"];
	/** IAM actions required for the DeleteScheduledAction API call. */
	static readonly DeleteScheduledAction: string[] = [
		"autoscaling:DeleteScheduledAction",
	];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DeleteTags: string[] = ["autoscaling:DeleteTags"];
	/** IAM actions required for the DeleteWarmPool API call. */
	static readonly DeleteWarmPool: string[] = ["autoscaling:DeleteWarmPool"];
	/** IAM actions required for the DescribeAccountLimits API call. */
	static readonly DescribeAccountLimits: string[] = [
		"autoscaling:DescribeAccountLimits",
	];
	/** IAM actions required for the DescribeAdjustmentTypes API call. */
	static readonly DescribeAdjustmentTypes: string[] = [
		"autoscaling:DescribeAdjustmentTypes",
	];
	/** IAM actions required for the DescribeAutoScalingGroups API call. */
	static readonly DescribeAutoScalingGroups: string[] = [
		"autoscaling:DescribeAutoScalingGroups",
	];
	/** IAM actions required for the DescribeAutoScalingInstances API call. */
	static readonly DescribeAutoScalingInstances: string[] = [
		"autoscaling:DescribeAutoScalingInstances",
	];
	/** IAM actions required for the DescribeAutoScalingNotificationTypes API call. */
	static readonly DescribeAutoScalingNotificationTypes: string[] = [
		"autoscaling:DescribeAutoScalingNotificationTypes",
	];
	/** IAM actions required for the DescribeInstanceRefreshes API call. */
	static readonly DescribeInstanceRefreshes: string[] = [
		"autoscaling:DescribeInstanceRefreshes",
	];
	/** IAM actions required for the DescribeLaunchConfigurations API call. */
	static readonly DescribeLaunchConfigurations: string[] = [
		"autoscaling:DescribeLaunchConfigurations",
	];
	/** IAM actions required for the DescribeLifecycleHookTypes API call. */
	static readonly DescribeLifecycleHookTypes: string[] = [
		"autoscaling:DescribeLifecycleHookTypes",
	];
	/** IAM actions required for the DescribeLifecycleHooks API call. */
	static readonly DescribeLifecycleHooks: string[] = [
		"autoscaling:DescribeLifecycleHooks",
	];
	/** IAM actions required for the DescribeLoadBalancerTargetGroups API call. */
	static readonly DescribeLoadBalancerTargetGroups: string[] = [
		"autoscaling:DescribeLoadBalancerTargetGroups",
	];
	/** IAM actions required for the DescribeLoadBalancers API call. */
	static readonly DescribeLoadBalancers: string[] = [
		"autoscaling:DescribeLoadBalancers",
	];
	/** IAM actions required for the DescribeMetricCollectionTypes API call. */
	static readonly DescribeMetricCollectionTypes: string[] = [
		"autoscaling:DescribeMetricCollectionTypes",
	];
	/** IAM actions required for the DescribeNotificationConfigurations API call. */
	static readonly DescribeNotificationConfigurations: string[] = [
		"autoscaling:DescribeNotificationConfigurations",
	];
	/** IAM actions required for the DescribePolicies API call. */
	static readonly DescribePolicies: string[] = ["autoscaling:DescribePolicies"];
	/** IAM actions required for the DescribeScalingActivities API call. */
	static readonly DescribeScalingActivities: string[] = [
		"autoscaling:DescribeScalingActivities",
	];
	/** IAM actions required for the DescribeScalingProcessTypes API call. */
	static readonly DescribeScalingProcessTypes: string[] = [
		"autoscaling:DescribeScalingProcessTypes",
	];
	/** IAM actions required for the DescribeScheduledActions API call. */
	static readonly DescribeScheduledActions: string[] = [
		"autoscaling:DescribeScheduledActions",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DescribeTags: string[] = ["autoscaling:DescribeTags"];
	/** IAM actions required for the DescribeTerminationPolicyTypes API call. */
	static readonly DescribeTerminationPolicyTypes: string[] = [
		"autoscaling:DescribeTerminationPolicyTypes",
	];
	/** IAM actions required for the DescribeTrafficSources API call. */
	static readonly DescribeTrafficSources: string[] = [
		"autoscaling:DescribeTrafficSources",
	];
	/** IAM actions required for the DescribeWarmPool API call. */
	static readonly DescribeWarmPool: string[] = ["autoscaling:DescribeWarmPool"];
	/** IAM actions required for the DetachInstances API call. */
	static readonly DetachInstances: string[] = ["autoscaling:DetachInstances"];
	/** IAM actions required for the DetachLoadBalancerTargetGroups API call. */
	static readonly DetachLoadBalancerTargetGroups: string[] = [
		"autoscaling:DetachLoadBalancerTargetGroups",
	];
	/** IAM actions required for the DetachLoadBalancers API call. */
	static readonly DetachLoadBalancers: string[] = [
		"autoscaling:DetachLoadBalancers",
	];
	/** IAM actions required for the DetachTrafficSources API call. */
	static readonly DetachTrafficSources: string[] = [
		"autoscaling:DetachTrafficSources",
	];
	/** IAM actions required for the DisableMetricsCollection API call. */
	static readonly DisableMetricsCollection: string[] = [
		"autoscaling:DisableMetricsCollection",
	];
	/** IAM actions required for the EnableMetricsCollection API call. */
	static readonly EnableMetricsCollection: string[] = [
		"autoscaling:EnableMetricsCollection",
	];
	/** IAM actions required for the EnterStandby API call. */
	static readonly EnterStandby: string[] = ["autoscaling:EnterStandby"];
	/** IAM actions required for the ExecutePolicy API call. */
	static readonly ExecutePolicy: string[] = ["autoscaling:ExecutePolicy"];
	/** IAM actions required for the ExitStandby API call. */
	static readonly ExitStandby: string[] = ["autoscaling:ExitStandby"];
	/** IAM actions required for the GetPredictiveScalingForecast API call. */
	static readonly opGetPredictiveScalingForecast: string[] = [
		"autoscaling:GetPredictiveScalingForecast",
	];
	/** IAM actions required for the LaunchInstances API call. */
	static readonly LaunchInstances: string[] = ["autoscaling:LaunchInstances"];
	/** IAM actions required for the PutLifecycleHook API call. */
	static readonly PutLifecycleHook: string[] = [
		"iam:PassRole",
		"autoscaling:PutLifecycleHook",
	];
	/** IAM actions required for the PutNotificationConfiguration API call. */
	static readonly PutNotificationConfiguration: string[] = [
		"autoscaling:PutNotificationConfiguration",
	];
	/** IAM actions required for the PutScalingPolicy API call. */
	static readonly PutScalingPolicy: string[] = ["autoscaling:PutScalingPolicy"];
	/** IAM actions required for the PutScheduledUpdateGroupAction API call. */
	static readonly PutScheduledUpdateGroupAction: string[] = [
		"autoscaling:PutScheduledUpdateGroupAction",
	];
	/** IAM actions required for the PutWarmPool API call. */
	static readonly PutWarmPool: string[] = ["autoscaling:PutWarmPool"];
	/** IAM actions required for the RecordLifecycleActionHeartbeat API call. */
	static readonly RecordLifecycleActionHeartbeat: string[] = [
		"autoscaling:RecordLifecycleActionHeartbeat",
	];
	/** IAM actions required for the ResumeProcesses API call. */
	static readonly ResumeProcesses: string[] = ["autoscaling:ResumeProcesses"];
	/** IAM actions required for the RollbackInstanceRefresh API call. */
	static readonly RollbackInstanceRefresh: string[] = [
		"autoscaling:RollbackInstanceRefresh",
	];
	/** IAM actions required for the SetDesiredCapacity API call. */
	static readonly opSetDesiredCapacity: string[] = [
		"autoscaling:SetDesiredCapacity",
	];
	/** IAM actions required for the SetInstanceHealth API call. */
	static readonly opSetInstanceHealth: string[] = [
		"autoscaling:SetInstanceHealth",
	];
	/** IAM actions required for the SetInstanceProtection API call. */
	static readonly opSetInstanceProtection: string[] = [
		"autoscaling:SetInstanceProtection",
	];
	/** IAM actions required for the StartInstanceRefresh API call. */
	static readonly StartInstanceRefresh: string[] = [
		"autoscaling:StartInstanceRefresh",
	];
	/** IAM actions required for the SuspendProcesses API call. */
	static readonly SuspendProcesses: string[] = ["autoscaling:SuspendProcesses"];
	/** IAM actions required for the TerminateInstanceInAutoScalingGroup API call. */
	static readonly TerminateInstanceInAutoScalingGroup: string[] = [
		"autoscaling:TerminateInstanceInAutoScalingGroup",
	];
	/** IAM actions required for the UpdateAutoScalingGroup API call. */
	static readonly UpdateAutoScalingGroup: string[] = [
		"iam:PassRole",
		"autoscaling:UpdateAutoScalingGroup",
	];
}

/**
 * Condition key constants and builders for autoscaling.
 */
export class AutoscalingConditions {
	/** Condition keys applicable to the AttachLoadBalancerTargetGroups action. */
	static readonly AttachLoadBalancerTargetGroupsConditionKeys: string[] = [
		"autoscaling:TargetGroupARNs",
	];
	/** Condition keys applicable to the AttachLoadBalancers action. */
	static readonly AttachLoadBalancersConditionKeys: string[] = [
		"autoscaling:LoadBalancerNames",
	];
	/** Condition keys applicable to the AttachTrafficSources action. */
	static readonly AttachTrafficSourcesConditionKeys: string[] = [
		"autoscaling:TrafficSourceIdentifiers",
	];
	/** Condition keys applicable to the CreateAutoScalingGroup action. */
	static readonly CreateAutoScalingGroupConditionKeys: string[] = [
		"autoscaling:CapacityReservationIds",
		"autoscaling:CapacityReservationResourceGroupArns",
		"autoscaling:ImageId",
		"autoscaling:InstanceTypes",
		"autoscaling:LaunchConfigurationName",
		"autoscaling:LaunchTemplateVersionSpecified",
		"autoscaling:LoadBalancerNames",
		"autoscaling:MaxSize",
		"autoscaling:MinSize",
		"autoscaling:OperatorPrincipal",
		"autoscaling:TargetCapacityTypes",
		"autoscaling:TargetGroupARNs",
		"autoscaling:TrafficSourceIdentifiers",
		"autoscaling:VPCZoneIdentifiers",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLaunchConfiguration action. */
	static readonly CreateLaunchConfigurationConditionKeys: string[] = [
		"autoscaling:ImageId",
		"autoscaling:InstanceType",
		"autoscaling:MetadataHttpEndpoint",
		"autoscaling:MetadataHttpPutResponseHopLimit",
		"autoscaling:MetadataHttpTokens",
		"autoscaling:SpotPrice",
	];
	/** Condition keys applicable to the CreateOrUpdateTags action. */
	static readonly CreateOrUpdateTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DeleteTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DetachLoadBalancerTargetGroups action. */
	static readonly DetachLoadBalancerTargetGroupsConditionKeys: string[] = [
		"autoscaling:TargetGroupARNs",
	];
	/** Condition keys applicable to the DetachLoadBalancers action. */
	static readonly DetachLoadBalancersConditionKeys: string[] = [
		"autoscaling:LoadBalancerNames",
	];
	/** Condition keys applicable to the DetachTrafficSources action. */
	static readonly DetachTrafficSourcesConditionKeys: string[] = [
		"autoscaling:TrafficSourceIdentifiers",
	];
	/** Condition keys applicable to the PutScheduledUpdateGroupAction action. */
	static readonly PutScheduledUpdateGroupActionConditionKeys: string[] = [
		"autoscaling:MaxSize",
		"autoscaling:MinSize",
	];
	/** Condition keys applicable to the StartInstanceRefresh action. */
	static readonly StartInstanceRefreshConditionKeys: string[] = [
		"autoscaling:ImageId",
		"autoscaling:TargetCapacityTypes",
	];
	/** Condition keys applicable to the UpdateAutoScalingGroup action. */
	static readonly UpdateAutoScalingGroupConditionKeys: string[] = [
		"autoscaling:CapacityReservationIds",
		"autoscaling:CapacityReservationResourceGroupArns",
		"autoscaling:ImageId",
		"autoscaling:InstanceTypes",
		"autoscaling:LaunchConfigurationName",
		"autoscaling:LaunchTemplateVersionSpecified",
		"autoscaling:MaxSize",
		"autoscaling:MinSize",
		"autoscaling:TargetCapacityTypes",
		"autoscaling:VPCZoneIdentifiers",
	];

	/** Condition key: autoscaling:CapacityReservationIds (ArrayOfString) */
	static readonly CAPACITY_RESERVATION_IDS =
		"autoscaling:CapacityReservationIds";
	/** Condition key: autoscaling:CapacityReservationResourceGroupArns (ArrayOfString) */
	static readonly CAPACITY_RESERVATION_RESOURCE_GROUP_ARNS =
		"autoscaling:CapacityReservationResourceGroupArns";
	/** Condition key: autoscaling:ForceDelete (Bool) */
	static readonly FORCE_DELETE = "autoscaling:ForceDelete";
	/** Condition key: autoscaling:ImageId (String) */
	static readonly IMAGE_ID = "autoscaling:ImageId";
	/** Condition key: autoscaling:InstanceType (String) */
	static readonly INSTANCE_TYPE = "autoscaling:InstanceType";
	/** Condition key: autoscaling:InstanceTypes (String) */
	static readonly INSTANCE_TYPES = "autoscaling:InstanceTypes";
	/** Condition key: autoscaling:LaunchConfigurationName (String) */
	static readonly LAUNCH_CONFIGURATION_NAME =
		"autoscaling:LaunchConfigurationName";
	/** Condition key: autoscaling:LaunchTemplateVersionSpecified (Bool) */
	static readonly LAUNCH_TEMPLATE_VERSION_SPECIFIED =
		"autoscaling:LaunchTemplateVersionSpecified";
	/** Condition key: autoscaling:LoadBalancerNames (ArrayOfString) */
	static readonly LOAD_BALANCER_NAMES = "autoscaling:LoadBalancerNames";
	/** Condition key: autoscaling:MaxSize (Numeric) */
	static readonly MAX_SIZE = "autoscaling:MaxSize";
	/** Condition key: autoscaling:MetadataHttpEndpoint (String) */
	static readonly METADATA_HTTP_ENDPOINT = "autoscaling:MetadataHttpEndpoint";
	/** Condition key: autoscaling:MetadataHttpPutResponseHopLimit (Numeric) */
	static readonly METADATA_HTTP_PUT_RESPONSE_HOP_LIMIT =
		"autoscaling:MetadataHttpPutResponseHopLimit";
	/** Condition key: autoscaling:MetadataHttpTokens (String) */
	static readonly METADATA_HTTP_TOKENS = "autoscaling:MetadataHttpTokens";
	/** Condition key: autoscaling:MinSize (Numeric) */
	static readonly MIN_SIZE = "autoscaling:MinSize";
	/** Condition key: autoscaling:OperatorPrincipal (String) */
	static readonly OPERATOR_PRINCIPAL = "autoscaling:OperatorPrincipal";
	/** Condition key: autoscaling:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "autoscaling:ResourceTag/${TagKey}";
	/** Condition key: autoscaling:SpotPrice (Numeric) */
	static readonly SPOT_PRICE = "autoscaling:SpotPrice";
	/** Condition key: autoscaling:TargetCapacityTypes (ArrayOfString) */
	static readonly TARGET_CAPACITY_TYPES = "autoscaling:TargetCapacityTypes";
	/** Condition key: autoscaling:TargetGroupARNs (ArrayOfARN) */
	static readonly TARGET_GROUP_AR_NS = "autoscaling:TargetGroupARNs";
	/** Condition key: autoscaling:TrafficSourceIdentifiers (ArrayOfString) */
	static readonly TRAFFIC_SOURCE_IDENTIFIERS =
		"autoscaling:TrafficSourceIdentifiers";
	/** Condition key: autoscaling:VPCZoneIdentifiers (ArrayOfString) */
	static readonly VPC_ZONE_IDENTIFIERS = "autoscaling:VPCZoneIdentifiers";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `autoscaling:CapacityReservationIds`.
	 */
	static capacityReservationIds(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"autoscaling:CapacityReservationIds": values,
			},
		};
	}

	/**
	 * Generates a condition block for `autoscaling:CapacityReservationResourceGroupArns`.
	 */
	static capacityReservationResourceGroupArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"autoscaling:CapacityReservationResourceGroupArns": values,
			},
		};
	}

	/**
	 * Generates a condition block for `autoscaling:ForceDelete`.
	 */
	static forceDelete(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "autoscaling:ForceDelete": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:ImageId`.
	 */
	static imageId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "autoscaling:ImageId": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:InstanceType`.
	 */
	static instanceType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "autoscaling:InstanceType": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:InstanceTypes`.
	 */
	static instanceTypes(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "autoscaling:InstanceTypes": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:LaunchConfigurationName`.
	 */
	static launchConfigurationName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "autoscaling:LaunchConfigurationName": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:LaunchTemplateVersionSpecified`.
	 */
	static launchTemplateVersionSpecified(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "autoscaling:LaunchTemplateVersionSpecified": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:LoadBalancerNames`.
	 */
	static loadBalancerNames(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "autoscaling:LoadBalancerNames": values },
		};
	}

	/**
	 * Generates a condition block for `autoscaling:MaxSize`.
	 */
	static maxSize(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "autoscaling:MaxSize": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:MetadataHttpEndpoint`.
	 */
	static metadataHttpEndpoint(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "autoscaling:MetadataHttpEndpoint": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:MetadataHttpPutResponseHopLimit`.
	 */
	static metadataHttpPutResponseHopLimit(
		value: number,
	): Record<string, Record<string, number>> {
		return {
			NumericEquals: { "autoscaling:MetadataHttpPutResponseHopLimit": value },
		};
	}

	/**
	 * Generates a condition block for `autoscaling:MetadataHttpTokens`.
	 */
	static metadataHttpTokens(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "autoscaling:MetadataHttpTokens": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:MinSize`.
	 */
	static minSize(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "autoscaling:MinSize": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:OperatorPrincipal`.
	 */
	static operatorPrincipal(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "autoscaling:OperatorPrincipal": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "autoscaling:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:SpotPrice`.
	 */
	static spotPrice(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "autoscaling:SpotPrice": value } };
	}

	/**
	 * Generates a condition block for `autoscaling:TargetCapacityTypes`.
	 */
	static targetCapacityTypes(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"autoscaling:TargetCapacityTypes": values,
			},
		};
	}

	/**
	 * Generates a condition block for `autoscaling:TargetGroupARNs`.
	 */
	static targetGroupArNs(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": { "autoscaling:TargetGroupARNs": values },
		};
	}

	/**
	 * Generates a condition block for `autoscaling:TrafficSourceIdentifiers`.
	 */
	static trafficSourceIdentifiers(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"autoscaling:TrafficSourceIdentifiers": values,
			},
		};
	}

	/**
	 * Generates a condition block for `autoscaling:VPCZoneIdentifiers`.
	 */
	static vpcZoneIdentifiers(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "autoscaling:VPCZoneIdentifiers": values },
		};
	}

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}
}
