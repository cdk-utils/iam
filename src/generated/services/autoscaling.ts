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
	static readonly ATTACH_INSTANCES = "autoscaling:AttachInstances";
	/** [Write] autoscaling:AttachLoadBalancerTargetGroups */
	static readonly ATTACH_LOAD_BALANCER_TARGET_GROUPS =
		"autoscaling:AttachLoadBalancerTargetGroups";
	/** [Write] autoscaling:AttachLoadBalancers */
	static readonly ATTACH_LOAD_BALANCERS = "autoscaling:AttachLoadBalancers";
	/** [Write] autoscaling:AttachTrafficSources */
	static readonly ATTACH_TRAFFIC_SOURCES = "autoscaling:AttachTrafficSources";
	/** [Write] autoscaling:BatchDeleteScheduledAction */
	static readonly BATCH_DELETE_SCHEDULED_ACTION =
		"autoscaling:BatchDeleteScheduledAction";
	/** [Write] autoscaling:BatchPutScheduledUpdateGroupAction */
	static readonly BATCH_PUT_SCHEDULED_UPDATE_GROUP_ACTION =
		"autoscaling:BatchPutScheduledUpdateGroupAction";
	/** [Write] autoscaling:CancelInstanceRefresh */
	static readonly CANCEL_INSTANCE_REFRESH = "autoscaling:CancelInstanceRefresh";
	/** [Write] autoscaling:CompleteLifecycleAction */
	static readonly COMPLETE_LIFECYCLE_ACTION =
		"autoscaling:CompleteLifecycleAction";
	/** [Write] autoscaling:CreateAutoScalingGroup */
	static readonly CREATE_AUTO_SCALING_GROUP =
		"autoscaling:CreateAutoScalingGroup";
	/** [Write] autoscaling:CreateLaunchConfiguration */
	static readonly CREATE_LAUNCH_CONFIGURATION =
		"autoscaling:CreateLaunchConfiguration";
	/** [Tagging] autoscaling:CreateOrUpdateTags */
	static readonly CREATE_OR_UPDATE_TAGS = "autoscaling:CreateOrUpdateTags";
	/** [Write] autoscaling:DeleteAutoScalingGroup */
	static readonly DELETE_AUTO_SCALING_GROUP =
		"autoscaling:DeleteAutoScalingGroup";
	/** [Write] autoscaling:DeleteLaunchConfiguration */
	static readonly DELETE_LAUNCH_CONFIGURATION =
		"autoscaling:DeleteLaunchConfiguration";
	/** [Write] autoscaling:DeleteLifecycleHook */
	static readonly DELETE_LIFECYCLE_HOOK = "autoscaling:DeleteLifecycleHook";
	/** [Write] autoscaling:DeleteNotificationConfiguration */
	static readonly DELETE_NOTIFICATION_CONFIGURATION =
		"autoscaling:DeleteNotificationConfiguration";
	/** [Write] autoscaling:DeletePolicy */
	static readonly DELETE_POLICY = "autoscaling:DeletePolicy";
	/** [Write] autoscaling:DeleteScheduledAction */
	static readonly DELETE_SCHEDULED_ACTION = "autoscaling:DeleteScheduledAction";
	/** [Tagging] autoscaling:DeleteTags */
	static readonly DELETE_TAGS = "autoscaling:DeleteTags";
	/** [Write] autoscaling:DeleteWarmPool */
	static readonly DELETE_WARM_POOL = "autoscaling:DeleteWarmPool";
	/** [List] autoscaling:DescribeAccountLimits */
	static readonly DESCRIBE_ACCOUNT_LIMITS = "autoscaling:DescribeAccountLimits";
	/** [List] autoscaling:DescribeAccountSettings */
	static readonly DESCRIBE_ACCOUNT_SETTINGS =
		"autoscaling:DescribeAccountSettings";
	/** [List] autoscaling:DescribeAdjustmentTypes */
	static readonly DESCRIBE_ADJUSTMENT_TYPES =
		"autoscaling:DescribeAdjustmentTypes";
	/** [List] autoscaling:DescribeAutoScalingGroups */
	static readonly DESCRIBE_AUTO_SCALING_GROUPS =
		"autoscaling:DescribeAutoScalingGroups";
	/** [List] autoscaling:DescribeAutoScalingInstances */
	static readonly DESCRIBE_AUTO_SCALING_INSTANCES =
		"autoscaling:DescribeAutoScalingInstances";
	/** [List] autoscaling:DescribeAutoScalingNotificationTypes */
	static readonly DESCRIBE_AUTO_SCALING_NOTIFICATION_TYPES =
		"autoscaling:DescribeAutoScalingNotificationTypes";
	/** [List] autoscaling:DescribeInstanceRefreshes */
	static readonly DESCRIBE_INSTANCE_REFRESHES =
		"autoscaling:DescribeInstanceRefreshes";
	/** [List] autoscaling:DescribeLaunchConfigurations */
	static readonly DESCRIBE_LAUNCH_CONFIGURATIONS =
		"autoscaling:DescribeLaunchConfigurations";
	/** [List] autoscaling:DescribeLifecycleHookTypes */
	static readonly DESCRIBE_LIFECYCLE_HOOK_TYPES =
		"autoscaling:DescribeLifecycleHookTypes";
	/** [List] autoscaling:DescribeLifecycleHooks */
	static readonly DESCRIBE_LIFECYCLE_HOOKS =
		"autoscaling:DescribeLifecycleHooks";
	/** [List] autoscaling:DescribeLoadBalancerTargetGroups */
	static readonly DESCRIBE_LOAD_BALANCER_TARGET_GROUPS =
		"autoscaling:DescribeLoadBalancerTargetGroups";
	/** [List] autoscaling:DescribeLoadBalancers */
	static readonly DESCRIBE_LOAD_BALANCERS = "autoscaling:DescribeLoadBalancers";
	/** [List] autoscaling:DescribeMetricCollectionTypes */
	static readonly DESCRIBE_METRIC_COLLECTION_TYPES =
		"autoscaling:DescribeMetricCollectionTypes";
	/** [List] autoscaling:DescribeNotificationConfigurations */
	static readonly DESCRIBE_NOTIFICATION_CONFIGURATIONS =
		"autoscaling:DescribeNotificationConfigurations";
	/** [List] autoscaling:DescribePolicies */
	static readonly DESCRIBE_POLICIES = "autoscaling:DescribePolicies";
	/** [List] autoscaling:DescribeScalingActivities */
	static readonly DESCRIBE_SCALING_ACTIVITIES =
		"autoscaling:DescribeScalingActivities";
	/** [List] autoscaling:DescribeScalingProcessTypes */
	static readonly DESCRIBE_SCALING_PROCESS_TYPES =
		"autoscaling:DescribeScalingProcessTypes";
	/** [List] autoscaling:DescribeScheduledActions */
	static readonly DESCRIBE_SCHEDULED_ACTIONS =
		"autoscaling:DescribeScheduledActions";
	/** [Read] autoscaling:DescribeTags */
	static readonly DESCRIBE_TAGS = "autoscaling:DescribeTags";
	/** [List] autoscaling:DescribeTerminationPolicyTypes */
	static readonly DESCRIBE_TERMINATION_POLICY_TYPES =
		"autoscaling:DescribeTerminationPolicyTypes";
	/** [List] autoscaling:DescribeTrafficSources */
	static readonly DESCRIBE_TRAFFIC_SOURCES =
		"autoscaling:DescribeTrafficSources";
	/** [List] autoscaling:DescribeWarmPool */
	static readonly DESCRIBE_WARM_POOL = "autoscaling:DescribeWarmPool";
	/** [Write] autoscaling:DetachInstances */
	static readonly DETACH_INSTANCES = "autoscaling:DetachInstances";
	/** [Write] autoscaling:DetachLoadBalancerTargetGroups */
	static readonly DETACH_LOAD_BALANCER_TARGET_GROUPS =
		"autoscaling:DetachLoadBalancerTargetGroups";
	/** [Write] autoscaling:DetachLoadBalancers */
	static readonly DETACH_LOAD_BALANCERS = "autoscaling:DetachLoadBalancers";
	/** [Write] autoscaling:DetachTrafficSources */
	static readonly DETACH_TRAFFIC_SOURCES = "autoscaling:DetachTrafficSources";
	/** [Write] autoscaling:DisableMetricsCollection */
	static readonly DISABLE_METRICS_COLLECTION =
		"autoscaling:DisableMetricsCollection";
	/** [Write] autoscaling:EnableMetricsCollection */
	static readonly ENABLE_METRICS_COLLECTION =
		"autoscaling:EnableMetricsCollection";
	/** [Write] autoscaling:EnterStandby */
	static readonly ENTER_STANDBY = "autoscaling:EnterStandby";
	/** [Write] autoscaling:ExecutePolicy */
	static readonly EXECUTE_POLICY = "autoscaling:ExecutePolicy";
	/** [Write] autoscaling:ExitStandby */
	static readonly EXIT_STANDBY = "autoscaling:ExitStandby";
	/** [List] autoscaling:GetPredictiveScalingForecast */
	static readonly GET_PREDICTIVE_SCALING_FORECAST =
		"autoscaling:GetPredictiveScalingForecast";
	/** [Write] autoscaling:LaunchInstances */
	static readonly LAUNCH_INSTANCES = "autoscaling:LaunchInstances";
	/** [Write] autoscaling:PutAccountSetting */
	static readonly PUT_ACCOUNT_SETTING = "autoscaling:PutAccountSetting";
	/** [Write] autoscaling:PutLifecycleHook */
	static readonly PUT_LIFECYCLE_HOOK = "autoscaling:PutLifecycleHook";
	/** [Write] autoscaling:PutNotificationConfiguration */
	static readonly PUT_NOTIFICATION_CONFIGURATION =
		"autoscaling:PutNotificationConfiguration";
	/** [Write] autoscaling:PutScalingPolicy */
	static readonly PUT_SCALING_POLICY = "autoscaling:PutScalingPolicy";
	/** [Write] autoscaling:PutScheduledUpdateGroupAction */
	static readonly PUT_SCHEDULED_UPDATE_GROUP_ACTION =
		"autoscaling:PutScheduledUpdateGroupAction";
	/** [Write] autoscaling:PutWarmPool */
	static readonly PUT_WARM_POOL = "autoscaling:PutWarmPool";
	/** [Write] autoscaling:RecordLifecycleActionHeartbeat */
	static readonly RECORD_LIFECYCLE_ACTION_HEARTBEAT =
		"autoscaling:RecordLifecycleActionHeartbeat";
	/** [Write] autoscaling:ResumeProcesses */
	static readonly RESUME_PROCESSES = "autoscaling:ResumeProcesses";
	/** [Write] autoscaling:RollbackInstanceRefresh */
	static readonly ROLLBACK_INSTANCE_REFRESH =
		"autoscaling:RollbackInstanceRefresh";
	/** [Write] autoscaling:SetDesiredCapacity */
	static readonly SET_DESIRED_CAPACITY = "autoscaling:SetDesiredCapacity";
	/** [Write] autoscaling:SetInstanceHealth */
	static readonly SET_INSTANCE_HEALTH = "autoscaling:SetInstanceHealth";
	/** [Write] autoscaling:SetInstanceProtection */
	static readonly SET_INSTANCE_PROTECTION = "autoscaling:SetInstanceProtection";
	/** [Write] autoscaling:StartInstanceRefresh */
	static readonly START_INSTANCE_REFRESH = "autoscaling:StartInstanceRefresh";
	/** [Write] autoscaling:SuspendProcesses */
	static readonly SUSPEND_PROCESSES = "autoscaling:SuspendProcesses";
	/** [Write] autoscaling:TerminateInstanceInAutoScalingGroup */
	static readonly TERMINATE_INSTANCE_IN_AUTO_SCALING_GROUP =
		"autoscaling:TerminateInstanceInAutoScalingGroup";
	/** [Write] autoscaling:UpdateAutoScalingGroup */
	static readonly UPDATE_AUTO_SCALING_GROUP =
		"autoscaling:UpdateAutoScalingGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [AutoscalingActions.DESCRIBE_TAGS];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AutoscalingActions.ATTACH_INSTANCES,
		AutoscalingActions.ATTACH_LOAD_BALANCER_TARGET_GROUPS,
		AutoscalingActions.ATTACH_LOAD_BALANCERS,
		AutoscalingActions.ATTACH_TRAFFIC_SOURCES,
		AutoscalingActions.BATCH_DELETE_SCHEDULED_ACTION,
		AutoscalingActions.BATCH_PUT_SCHEDULED_UPDATE_GROUP_ACTION,
		AutoscalingActions.CANCEL_INSTANCE_REFRESH,
		AutoscalingActions.COMPLETE_LIFECYCLE_ACTION,
		AutoscalingActions.CREATE_AUTO_SCALING_GROUP,
		AutoscalingActions.CREATE_LAUNCH_CONFIGURATION,
		AutoscalingActions.DELETE_AUTO_SCALING_GROUP,
		AutoscalingActions.DELETE_LAUNCH_CONFIGURATION,
		AutoscalingActions.DELETE_LIFECYCLE_HOOK,
		AutoscalingActions.DELETE_NOTIFICATION_CONFIGURATION,
		AutoscalingActions.DELETE_POLICY,
		AutoscalingActions.DELETE_SCHEDULED_ACTION,
		AutoscalingActions.DELETE_WARM_POOL,
		AutoscalingActions.DETACH_INSTANCES,
		AutoscalingActions.DETACH_LOAD_BALANCER_TARGET_GROUPS,
		AutoscalingActions.DETACH_LOAD_BALANCERS,
		AutoscalingActions.DETACH_TRAFFIC_SOURCES,
		AutoscalingActions.DISABLE_METRICS_COLLECTION,
		AutoscalingActions.ENABLE_METRICS_COLLECTION,
		AutoscalingActions.ENTER_STANDBY,
		AutoscalingActions.EXECUTE_POLICY,
		AutoscalingActions.EXIT_STANDBY,
		AutoscalingActions.LAUNCH_INSTANCES,
		AutoscalingActions.PUT_ACCOUNT_SETTING,
		AutoscalingActions.PUT_LIFECYCLE_HOOK,
		AutoscalingActions.PUT_NOTIFICATION_CONFIGURATION,
		AutoscalingActions.PUT_SCALING_POLICY,
		AutoscalingActions.PUT_SCHEDULED_UPDATE_GROUP_ACTION,
		AutoscalingActions.PUT_WARM_POOL,
		AutoscalingActions.RECORD_LIFECYCLE_ACTION_HEARTBEAT,
		AutoscalingActions.RESUME_PROCESSES,
		AutoscalingActions.ROLLBACK_INSTANCE_REFRESH,
		AutoscalingActions.SET_DESIRED_CAPACITY,
		AutoscalingActions.SET_INSTANCE_HEALTH,
		AutoscalingActions.SET_INSTANCE_PROTECTION,
		AutoscalingActions.START_INSTANCE_REFRESH,
		AutoscalingActions.SUSPEND_PROCESSES,
		AutoscalingActions.TERMINATE_INSTANCE_IN_AUTO_SCALING_GROUP,
		AutoscalingActions.UPDATE_AUTO_SCALING_GROUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AutoscalingActions.DESCRIBE_ACCOUNT_LIMITS,
		AutoscalingActions.DESCRIBE_ACCOUNT_SETTINGS,
		AutoscalingActions.DESCRIBE_ADJUSTMENT_TYPES,
		AutoscalingActions.DESCRIBE_AUTO_SCALING_GROUPS,
		AutoscalingActions.DESCRIBE_AUTO_SCALING_INSTANCES,
		AutoscalingActions.DESCRIBE_AUTO_SCALING_NOTIFICATION_TYPES,
		AutoscalingActions.DESCRIBE_INSTANCE_REFRESHES,
		AutoscalingActions.DESCRIBE_LAUNCH_CONFIGURATIONS,
		AutoscalingActions.DESCRIBE_LIFECYCLE_HOOK_TYPES,
		AutoscalingActions.DESCRIBE_LIFECYCLE_HOOKS,
		AutoscalingActions.DESCRIBE_LOAD_BALANCER_TARGET_GROUPS,
		AutoscalingActions.DESCRIBE_LOAD_BALANCERS,
		AutoscalingActions.DESCRIBE_METRIC_COLLECTION_TYPES,
		AutoscalingActions.DESCRIBE_NOTIFICATION_CONFIGURATIONS,
		AutoscalingActions.DESCRIBE_POLICIES,
		AutoscalingActions.DESCRIBE_SCALING_ACTIVITIES,
		AutoscalingActions.DESCRIBE_SCALING_PROCESS_TYPES,
		AutoscalingActions.DESCRIBE_SCHEDULED_ACTIONS,
		AutoscalingActions.DESCRIBE_TERMINATION_POLICY_TYPES,
		AutoscalingActions.DESCRIBE_TRAFFIC_SOURCES,
		AutoscalingActions.DESCRIBE_WARM_POOL,
		AutoscalingActions.GET_PREDICTIVE_SCALING_FORECAST,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AutoscalingActions.CREATE_OR_UPDATE_TAGS,
		AutoscalingActions.DELETE_TAGS,
	];
}

const AutoScalingGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):autoscaling:(?<region>[^:]*):(?<account>[^:]*):autoScalingGroup:(?<groupId>[^:/?]+):autoScalingGroupName/(?<groupFriendlyName>[^:/?]+)$",
);
const LaunchConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):autoscaling:(?<region>[^:]*):(?<account>[^:]*):launchConfiguration:(?<id>[^:/?]+):launchConfigurationName/(?<launchConfigurationName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for autoscaling resources.
 */
export class AutoscalingResources {
	/**
	 * Builds an ARN for the autoScalingGroup resource.
	 */
	static autoScalingGroup(props: {
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
	}): string {
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
	static parseAutoScalingGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupId: string;
		groupFriendlyName: string;
	} {
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
	static launchConfiguration(props: {
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
	}): string {
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
	static parseLaunchConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
		launchConfigurationName: string;
	} {
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
	static readonly ATTACH_INSTANCES: string[] = ["autoscaling:AttachInstances"];
	/** IAM actions required for the AttachLoadBalancerTargetGroups API call. */
	static readonly ATTACH_LOAD_BALANCER_TARGET_GROUPS: string[] = [
		"autoscaling:AttachLoadBalancerTargetGroups",
	];
	/** IAM actions required for the AttachLoadBalancers API call. */
	static readonly ATTACH_LOAD_BALANCERS: string[] = [
		"autoscaling:AttachLoadBalancers",
	];
	/** IAM actions required for the AttachTrafficSources API call. */
	static readonly ATTACH_TRAFFIC_SOURCES: string[] = [
		"autoscaling:AttachTrafficSources",
	];
	/** IAM actions required for the BatchDeleteScheduledAction API call. */
	static readonly BATCH_DELETE_SCHEDULED_ACTION: string[] = [
		"autoscaling:BatchDeleteScheduledAction",
	];
	/** IAM actions required for the BatchPutScheduledUpdateGroupAction API call. */
	static readonly BATCH_PUT_SCHEDULED_UPDATE_GROUP_ACTION: string[] = [
		"autoscaling:BatchPutScheduledUpdateGroupAction",
	];
	/** IAM actions required for the CancelInstanceRefresh API call. */
	static readonly CANCEL_INSTANCE_REFRESH: string[] = [
		"autoscaling:CancelInstanceRefresh",
	];
	/** IAM actions required for the CompleteLifecycleAction API call. */
	static readonly COMPLETE_LIFECYCLE_ACTION: string[] = [
		"autoscaling:CompleteLifecycleAction",
	];
	/** IAM actions required for the CreateAutoScalingGroup API call. */
	static readonly CREATE_AUTO_SCALING_GROUP: string[] = [
		"autoscaling:CreateAutoScalingGroup",
		"autoscaling:CreateOrUpdateTags",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateLaunchConfiguration API call. */
	static readonly CREATE_LAUNCH_CONFIGURATION: string[] = [
		"autoscaling:CreateLaunchConfiguration",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateOrUpdateTags API call. */
	static readonly CREATE_OR_UPDATE_TAGS: string[] = [
		"autoscaling:CreateOrUpdateTags",
	];
	/** IAM actions required for the DeleteAutoScalingGroup API call. */
	static readonly DELETE_AUTO_SCALING_GROUP: string[] = [
		"autoscaling:DeleteAutoScalingGroup",
	];
	/** IAM actions required for the DeleteLaunchConfiguration API call. */
	static readonly DELETE_LAUNCH_CONFIGURATION: string[] = [
		"autoscaling:DeleteLaunchConfiguration",
	];
	/** IAM actions required for the DeleteLifecycleHook API call. */
	static readonly DELETE_LIFECYCLE_HOOK: string[] = [
		"autoscaling:DeleteLifecycleHook",
	];
	/** IAM actions required for the DeleteNotificationConfiguration API call. */
	static readonly DELETE_NOTIFICATION_CONFIGURATION: string[] = [
		"autoscaling:DeleteNotificationConfiguration",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DELETE_POLICY: string[] = ["autoscaling:DeletePolicy"];
	/** IAM actions required for the DeleteScheduledAction API call. */
	static readonly DELETE_SCHEDULED_ACTION: string[] = [
		"autoscaling:DeleteScheduledAction",
	];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DELETE_TAGS: string[] = ["autoscaling:DeleteTags"];
	/** IAM actions required for the DeleteWarmPool API call. */
	static readonly DELETE_WARM_POOL: string[] = ["autoscaling:DeleteWarmPool"];
	/** IAM actions required for the DescribeAccountLimits API call. */
	static readonly DESCRIBE_ACCOUNT_LIMITS: string[] = [
		"autoscaling:DescribeAccountLimits",
	];
	/** IAM actions required for the DescribeAdjustmentTypes API call. */
	static readonly DESCRIBE_ADJUSTMENT_TYPES: string[] = [
		"autoscaling:DescribeAdjustmentTypes",
	];
	/** IAM actions required for the DescribeAutoScalingGroups API call. */
	static readonly DESCRIBE_AUTO_SCALING_GROUPS: string[] = [
		"autoscaling:DescribeAutoScalingGroups",
	];
	/** IAM actions required for the DescribeAutoScalingInstances API call. */
	static readonly DESCRIBE_AUTO_SCALING_INSTANCES: string[] = [
		"autoscaling:DescribeAutoScalingInstances",
	];
	/** IAM actions required for the DescribeAutoScalingNotificationTypes API call. */
	static readonly DESCRIBE_AUTO_SCALING_NOTIFICATION_TYPES: string[] = [
		"autoscaling:DescribeAutoScalingNotificationTypes",
	];
	/** IAM actions required for the DescribeInstanceRefreshes API call. */
	static readonly DESCRIBE_INSTANCE_REFRESHES: string[] = [
		"autoscaling:DescribeInstanceRefreshes",
	];
	/** IAM actions required for the DescribeLaunchConfigurations API call. */
	static readonly DESCRIBE_LAUNCH_CONFIGURATIONS: string[] = [
		"autoscaling:DescribeLaunchConfigurations",
	];
	/** IAM actions required for the DescribeLifecycleHookTypes API call. */
	static readonly DESCRIBE_LIFECYCLE_HOOK_TYPES: string[] = [
		"autoscaling:DescribeLifecycleHookTypes",
	];
	/** IAM actions required for the DescribeLifecycleHooks API call. */
	static readonly DESCRIBE_LIFECYCLE_HOOKS: string[] = [
		"autoscaling:DescribeLifecycleHooks",
	];
	/** IAM actions required for the DescribeLoadBalancerTargetGroups API call. */
	static readonly DESCRIBE_LOAD_BALANCER_TARGET_GROUPS: string[] = [
		"autoscaling:DescribeLoadBalancerTargetGroups",
	];
	/** IAM actions required for the DescribeLoadBalancers API call. */
	static readonly DESCRIBE_LOAD_BALANCERS: string[] = [
		"autoscaling:DescribeLoadBalancers",
	];
	/** IAM actions required for the DescribeMetricCollectionTypes API call. */
	static readonly DESCRIBE_METRIC_COLLECTION_TYPES: string[] = [
		"autoscaling:DescribeMetricCollectionTypes",
	];
	/** IAM actions required for the DescribeNotificationConfigurations API call. */
	static readonly DESCRIBE_NOTIFICATION_CONFIGURATIONS: string[] = [
		"autoscaling:DescribeNotificationConfigurations",
	];
	/** IAM actions required for the DescribePolicies API call. */
	static readonly DESCRIBE_POLICIES: string[] = [
		"autoscaling:DescribePolicies",
	];
	/** IAM actions required for the DescribeScalingActivities API call. */
	static readonly DESCRIBE_SCALING_ACTIVITIES: string[] = [
		"autoscaling:DescribeScalingActivities",
	];
	/** IAM actions required for the DescribeScalingProcessTypes API call. */
	static readonly DESCRIBE_SCALING_PROCESS_TYPES: string[] = [
		"autoscaling:DescribeScalingProcessTypes",
	];
	/** IAM actions required for the DescribeScheduledActions API call. */
	static readonly DESCRIBE_SCHEDULED_ACTIONS: string[] = [
		"autoscaling:DescribeScheduledActions",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DESCRIBE_TAGS: string[] = ["autoscaling:DescribeTags"];
	/** IAM actions required for the DescribeTerminationPolicyTypes API call. */
	static readonly DESCRIBE_TERMINATION_POLICY_TYPES: string[] = [
		"autoscaling:DescribeTerminationPolicyTypes",
	];
	/** IAM actions required for the DescribeTrafficSources API call. */
	static readonly DESCRIBE_TRAFFIC_SOURCES: string[] = [
		"autoscaling:DescribeTrafficSources",
	];
	/** IAM actions required for the DescribeWarmPool API call. */
	static readonly DESCRIBE_WARM_POOL: string[] = [
		"autoscaling:DescribeWarmPool",
	];
	/** IAM actions required for the DetachInstances API call. */
	static readonly DETACH_INSTANCES: string[] = ["autoscaling:DetachInstances"];
	/** IAM actions required for the DetachLoadBalancerTargetGroups API call. */
	static readonly DETACH_LOAD_BALANCER_TARGET_GROUPS: string[] = [
		"autoscaling:DetachLoadBalancerTargetGroups",
	];
	/** IAM actions required for the DetachLoadBalancers API call. */
	static readonly DETACH_LOAD_BALANCERS: string[] = [
		"autoscaling:DetachLoadBalancers",
	];
	/** IAM actions required for the DetachTrafficSources API call. */
	static readonly DETACH_TRAFFIC_SOURCES: string[] = [
		"autoscaling:DetachTrafficSources",
	];
	/** IAM actions required for the DisableMetricsCollection API call. */
	static readonly DISABLE_METRICS_COLLECTION: string[] = [
		"autoscaling:DisableMetricsCollection",
	];
	/** IAM actions required for the EnableMetricsCollection API call. */
	static readonly ENABLE_METRICS_COLLECTION: string[] = [
		"autoscaling:EnableMetricsCollection",
	];
	/** IAM actions required for the EnterStandby API call. */
	static readonly ENTER_STANDBY: string[] = ["autoscaling:EnterStandby"];
	/** IAM actions required for the ExecutePolicy API call. */
	static readonly EXECUTE_POLICY: string[] = ["autoscaling:ExecutePolicy"];
	/** IAM actions required for the ExitStandby API call. */
	static readonly EXIT_STANDBY: string[] = ["autoscaling:ExitStandby"];
	/** IAM actions required for the GetPredictiveScalingForecast API call. */
	static readonly GET_PREDICTIVE_SCALING_FORECAST: string[] = [
		"autoscaling:GetPredictiveScalingForecast",
	];
	/** IAM actions required for the LaunchInstances API call. */
	static readonly LAUNCH_INSTANCES: string[] = ["autoscaling:LaunchInstances"];
	/** IAM actions required for the PutLifecycleHook API call. */
	static readonly PUT_LIFECYCLE_HOOK: string[] = [
		"iam:PassRole",
		"autoscaling:PutLifecycleHook",
	];
	/** IAM actions required for the PutNotificationConfiguration API call. */
	static readonly PUT_NOTIFICATION_CONFIGURATION: string[] = [
		"autoscaling:PutNotificationConfiguration",
	];
	/** IAM actions required for the PutScalingPolicy API call. */
	static readonly PUT_SCALING_POLICY: string[] = [
		"autoscaling:PutScalingPolicy",
	];
	/** IAM actions required for the PutScheduledUpdateGroupAction API call. */
	static readonly PUT_SCHEDULED_UPDATE_GROUP_ACTION: string[] = [
		"autoscaling:PutScheduledUpdateGroupAction",
	];
	/** IAM actions required for the PutWarmPool API call. */
	static readonly PUT_WARM_POOL: string[] = ["autoscaling:PutWarmPool"];
	/** IAM actions required for the RecordLifecycleActionHeartbeat API call. */
	static readonly RECORD_LIFECYCLE_ACTION_HEARTBEAT: string[] = [
		"autoscaling:RecordLifecycleActionHeartbeat",
	];
	/** IAM actions required for the ResumeProcesses API call. */
	static readonly RESUME_PROCESSES: string[] = ["autoscaling:ResumeProcesses"];
	/** IAM actions required for the RollbackInstanceRefresh API call. */
	static readonly ROLLBACK_INSTANCE_REFRESH: string[] = [
		"autoscaling:RollbackInstanceRefresh",
	];
	/** IAM actions required for the SetDesiredCapacity API call. */
	static readonly SET_DESIRED_CAPACITY: string[] = [
		"autoscaling:SetDesiredCapacity",
	];
	/** IAM actions required for the SetInstanceHealth API call. */
	static readonly SET_INSTANCE_HEALTH: string[] = [
		"autoscaling:SetInstanceHealth",
	];
	/** IAM actions required for the SetInstanceProtection API call. */
	static readonly SET_INSTANCE_PROTECTION: string[] = [
		"autoscaling:SetInstanceProtection",
	];
	/** IAM actions required for the StartInstanceRefresh API call. */
	static readonly START_INSTANCE_REFRESH: string[] = [
		"autoscaling:StartInstanceRefresh",
	];
	/** IAM actions required for the SuspendProcesses API call. */
	static readonly SUSPEND_PROCESSES: string[] = [
		"autoscaling:SuspendProcesses",
	];
	/** IAM actions required for the TerminateInstanceInAutoScalingGroup API call. */
	static readonly TERMINATE_INSTANCE_IN_AUTO_SCALING_GROUP: string[] = [
		"autoscaling:TerminateInstanceInAutoScalingGroup",
	];
	/** IAM actions required for the UpdateAutoScalingGroup API call. */
	static readonly UPDATE_AUTO_SCALING_GROUP: string[] = [
		"iam:PassRole",
		"autoscaling:UpdateAutoScalingGroup",
	];
}

/**
 * Condition key constants and builders for autoscaling.
 */
export class AutoscalingConditions {
	/** Condition keys applicable to the AttachLoadBalancerTargetGroups action. */
	static readonly ATTACH_LOAD_BALANCER_TARGET_GROUPS_CONDITION_KEYS: string[] =
		["autoscaling:TargetGroupARNs"];
	/** Condition keys applicable to the AttachLoadBalancers action. */
	static readonly ATTACH_LOAD_BALANCERS_CONDITION_KEYS: string[] = [
		"autoscaling:LoadBalancerNames",
	];
	/** Condition keys applicable to the AttachTrafficSources action. */
	static readonly ATTACH_TRAFFIC_SOURCES_CONDITION_KEYS: string[] = [
		"autoscaling:TrafficSourceIdentifiers",
	];
	/** Condition keys applicable to the CreateAutoScalingGroup action. */
	static readonly CREATE_AUTO_SCALING_GROUP_CONDITION_KEYS: string[] = [
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
		"autoscaling:TargetGroupARNs",
		"autoscaling:TrafficSourceIdentifiers",
		"autoscaling:VPCZoneIdentifiers",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLaunchConfiguration action. */
	static readonly CREATE_LAUNCH_CONFIGURATION_CONDITION_KEYS: string[] = [
		"autoscaling:ImageId",
		"autoscaling:InstanceType",
		"autoscaling:MetadataHttpEndpoint",
		"autoscaling:MetadataHttpPutResponseHopLimit",
		"autoscaling:MetadataHttpTokens",
		"autoscaling:SpotPrice",
	];
	/** Condition keys applicable to the CreateOrUpdateTags action. */
	static readonly CREATE_OR_UPDATE_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DELETE_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DetachLoadBalancerTargetGroups action. */
	static readonly DETACH_LOAD_BALANCER_TARGET_GROUPS_CONDITION_KEYS: string[] =
		["autoscaling:TargetGroupARNs"];
	/** Condition keys applicable to the DetachLoadBalancers action. */
	static readonly DETACH_LOAD_BALANCERS_CONDITION_KEYS: string[] = [
		"autoscaling:LoadBalancerNames",
	];
	/** Condition keys applicable to the DetachTrafficSources action. */
	static readonly DETACH_TRAFFIC_SOURCES_CONDITION_KEYS: string[] = [
		"autoscaling:TrafficSourceIdentifiers",
	];
	/** Condition keys applicable to the PutScheduledUpdateGroupAction action. */
	static readonly PUT_SCHEDULED_UPDATE_GROUP_ACTION_CONDITION_KEYS: string[] = [
		"autoscaling:MaxSize",
		"autoscaling:MinSize",
	];
	/** Condition keys applicable to the StartInstanceRefresh action. */
	static readonly START_INSTANCE_REFRESH_CONDITION_KEYS: string[] = [
		"autoscaling:ImageId",
	];
	/** Condition keys applicable to the UpdateAutoScalingGroup action. */
	static readonly UPDATE_AUTO_SCALING_GROUP_CONDITION_KEYS: string[] = [
		"autoscaling:CapacityReservationIds",
		"autoscaling:CapacityReservationResourceGroupArns",
		"autoscaling:ImageId",
		"autoscaling:InstanceTypes",
		"autoscaling:LaunchConfigurationName",
		"autoscaling:LaunchTemplateVersionSpecified",
		"autoscaling:MaxSize",
		"autoscaling:MinSize",
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
	/** Condition key: autoscaling:TargetGroupARNs (ArrayOfARN) */
	static readonly TARGET_GROUP_AR_NS = "autoscaling:TargetGroupARNs";
	/** Condition key: autoscaling:TrafficSourceIdentifiers (ArrayOfString) */
	static readonly TRAFFIC_SOURCE_IDENTIFIERS =
		"autoscaling:TrafficSourceIdentifiers";
	/** Condition key: autoscaling:VPCZoneIdentifiers (ArrayOfString) */
	static readonly VPC_ZONE_IDENTIFIERS = "autoscaling:VPCZoneIdentifiers";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
