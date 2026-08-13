// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/opsworks.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the opsworks service.
 */
export class OpsworksActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "opsworks";

	/** [Write] opsworks:AssignInstance */
	static readonly ASSIGN_INSTANCE = "opsworks:AssignInstance";
	/** [Write] opsworks:AssignVolume */
	static readonly ASSIGN_VOLUME = "opsworks:AssignVolume";
	/** [Write] opsworks:AssociateElasticIp */
	static readonly ASSOCIATE_ELASTIC_IP = "opsworks:AssociateElasticIp";
	/** [Write] opsworks:AttachElasticLoadBalancer */
	static readonly ATTACH_ELASTIC_LOAD_BALANCER =
		"opsworks:AttachElasticLoadBalancer";
	/** [Write] opsworks:CloneStack */
	static readonly CLONE_STACK = "opsworks:CloneStack";
	/** [Write] opsworks:CreateApp */
	static readonly CREATE_APP = "opsworks:CreateApp";
	/** [Write] opsworks:CreateDeployment */
	static readonly CREATE_DEPLOYMENT = "opsworks:CreateDeployment";
	/** [Write] opsworks:CreateInstance */
	static readonly CREATE_INSTANCE = "opsworks:CreateInstance";
	/** [Write] opsworks:CreateLayer */
	static readonly CREATE_LAYER = "opsworks:CreateLayer";
	/** [Write] opsworks:CreateStack */
	static readonly CREATE_STACK = "opsworks:CreateStack";
	/** [Write] opsworks:CreateUserProfile */
	static readonly CREATE_USER_PROFILE = "opsworks:CreateUserProfile";
	/** [Write] opsworks:DeleteApp */
	static readonly DELETE_APP = "opsworks:DeleteApp";
	/** [Write] opsworks:DeleteInstance */
	static readonly DELETE_INSTANCE = "opsworks:DeleteInstance";
	/** [Write] opsworks:DeleteLayer */
	static readonly DELETE_LAYER = "opsworks:DeleteLayer";
	/** [Write] opsworks:DeleteStack */
	static readonly DELETE_STACK = "opsworks:DeleteStack";
	/** [Write] opsworks:DeleteUserProfile */
	static readonly DELETE_USER_PROFILE = "opsworks:DeleteUserProfile";
	/** [Write] opsworks:DeregisterEcsCluster */
	static readonly DEREGISTER_ECS_CLUSTER = "opsworks:DeregisterEcsCluster";
	/** [Write] opsworks:DeregisterElasticIp */
	static readonly DEREGISTER_ELASTIC_IP = "opsworks:DeregisterElasticIp";
	/** [Write] opsworks:DeregisterInstance */
	static readonly DEREGISTER_INSTANCE = "opsworks:DeregisterInstance";
	/** [Write] opsworks:DeregisterRdsDbInstance */
	static readonly DEREGISTER_RDS_DB_INSTANCE =
		"opsworks:DeregisterRdsDbInstance";
	/** [Write] opsworks:DeregisterVolume */
	static readonly DEREGISTER_VOLUME = "opsworks:DeregisterVolume";
	/** [List] opsworks:DescribeAgentVersions */
	static readonly DESCRIBE_AGENT_VERSIONS = "opsworks:DescribeAgentVersions";
	/** [List] opsworks:DescribeApps */
	static readonly DESCRIBE_APPS = "opsworks:DescribeApps";
	/** [List] opsworks:DescribeCommands */
	static readonly DESCRIBE_COMMANDS = "opsworks:DescribeCommands";
	/** [List] opsworks:DescribeDeployments */
	static readonly DESCRIBE_DEPLOYMENTS = "opsworks:DescribeDeployments";
	/** [List] opsworks:DescribeEcsClusters */
	static readonly DESCRIBE_ECS_CLUSTERS = "opsworks:DescribeEcsClusters";
	/** [List] opsworks:DescribeElasticIps */
	static readonly DESCRIBE_ELASTIC_IPS = "opsworks:DescribeElasticIps";
	/** [List] opsworks:DescribeElasticLoadBalancers */
	static readonly DESCRIBE_ELASTIC_LOAD_BALANCERS =
		"opsworks:DescribeElasticLoadBalancers";
	/** [List] opsworks:DescribeInstances */
	static readonly DESCRIBE_INSTANCES = "opsworks:DescribeInstances";
	/** [List] opsworks:DescribeLayers */
	static readonly DESCRIBE_LAYERS = "opsworks:DescribeLayers";
	/** [List] opsworks:DescribeLoadBasedAutoScaling */
	static readonly DESCRIBE_LOAD_BASED_AUTO_SCALING =
		"opsworks:DescribeLoadBasedAutoScaling";
	/** [List] opsworks:DescribeMyUserProfile */
	static readonly DESCRIBE_MY_USER_PROFILE = "opsworks:DescribeMyUserProfile";
	/** [List] opsworks:DescribeOperatingSystems */
	static readonly DESCRIBE_OPERATING_SYSTEMS =
		"opsworks:DescribeOperatingSystems";
	/** [List] opsworks:DescribePermissions */
	static readonly DESCRIBE_PERMISSIONS = "opsworks:DescribePermissions";
	/** [List] opsworks:DescribeRaidArrays */
	static readonly DESCRIBE_RAID_ARRAYS = "opsworks:DescribeRaidArrays";
	/** [List] opsworks:DescribeRdsDbInstances */
	static readonly DESCRIBE_RDS_DB_INSTANCES = "opsworks:DescribeRdsDbInstances";
	/** [List] opsworks:DescribeServiceErrors */
	static readonly DESCRIBE_SERVICE_ERRORS = "opsworks:DescribeServiceErrors";
	/** [List] opsworks:DescribeStackProvisioningParameters */
	static readonly DESCRIBE_STACK_PROVISIONING_PARAMETERS =
		"opsworks:DescribeStackProvisioningParameters";
	/** [List] opsworks:DescribeStackSummary */
	static readonly DESCRIBE_STACK_SUMMARY = "opsworks:DescribeStackSummary";
	/** [List] opsworks:DescribeStacks */
	static readonly DESCRIBE_STACKS = "opsworks:DescribeStacks";
	/** [List] opsworks:DescribeTimeBasedAutoScaling */
	static readonly DESCRIBE_TIME_BASED_AUTO_SCALING =
		"opsworks:DescribeTimeBasedAutoScaling";
	/** [List] opsworks:DescribeUserProfiles */
	static readonly DESCRIBE_USER_PROFILES = "opsworks:DescribeUserProfiles";
	/** [List] opsworks:DescribeVolumes */
	static readonly DESCRIBE_VOLUMES = "opsworks:DescribeVolumes";
	/** [Write] opsworks:DetachElasticLoadBalancer */
	static readonly DETACH_ELASTIC_LOAD_BALANCER =
		"opsworks:DetachElasticLoadBalancer";
	/** [Write] opsworks:DisassociateElasticIp */
	static readonly DISASSOCIATE_ELASTIC_IP = "opsworks:DisassociateElasticIp";
	/** [Read] opsworks:GetHostnameSuggestion */
	static readonly GET_HOSTNAME_SUGGESTION = "opsworks:GetHostnameSuggestion";
	/** [Write] opsworks:GrantAccess */
	static readonly GRANT_ACCESS = "opsworks:GrantAccess";
	/** [List] opsworks:ListTags */
	static readonly LIST_TAGS = "opsworks:ListTags";
	/** [Write] opsworks:RebootInstance */
	static readonly REBOOT_INSTANCE = "opsworks:RebootInstance";
	/** [Write] opsworks:RegisterEcsCluster */
	static readonly REGISTER_ECS_CLUSTER = "opsworks:RegisterEcsCluster";
	/** [Write] opsworks:RegisterElasticIp */
	static readonly REGISTER_ELASTIC_IP = "opsworks:RegisterElasticIp";
	/** [Write] opsworks:RegisterInstance */
	static readonly REGISTER_INSTANCE = "opsworks:RegisterInstance";
	/** [Write] opsworks:RegisterRdsDbInstance */
	static readonly REGISTER_RDS_DB_INSTANCE = "opsworks:RegisterRdsDbInstance";
	/** [Write] opsworks:RegisterVolume */
	static readonly REGISTER_VOLUME = "opsworks:RegisterVolume";
	/** [Write] opsworks:SetLoadBasedAutoScaling */
	static readonly SET_LOAD_BASED_AUTO_SCALING =
		"opsworks:SetLoadBasedAutoScaling";
	/** [PermissionManagement] opsworks:SetPermission */
	static readonly SET_PERMISSION = "opsworks:SetPermission";
	/** [Write] opsworks:SetTimeBasedAutoScaling */
	static readonly SET_TIME_BASED_AUTO_SCALING =
		"opsworks:SetTimeBasedAutoScaling";
	/** [Write] opsworks:StartInstance */
	static readonly START_INSTANCE = "opsworks:StartInstance";
	/** [Write] opsworks:StartStack */
	static readonly START_STACK = "opsworks:StartStack";
	/** [Write] opsworks:StopInstance */
	static readonly STOP_INSTANCE = "opsworks:StopInstance";
	/** [Write] opsworks:StopStack */
	static readonly STOP_STACK = "opsworks:StopStack";
	/** [Tagging] opsworks:TagResource */
	static readonly TAG_RESOURCE = "opsworks:TagResource";
	/** [Write] opsworks:UnassignInstance */
	static readonly UNASSIGN_INSTANCE = "opsworks:UnassignInstance";
	/** [Write] opsworks:UnassignVolume */
	static readonly UNASSIGN_VOLUME = "opsworks:UnassignVolume";
	/** [Tagging] opsworks:UntagResource */
	static readonly UNTAG_RESOURCE = "opsworks:UntagResource";
	/** [Write] opsworks:UpdateApp */
	static readonly UPDATE_APP = "opsworks:UpdateApp";
	/** [Write] opsworks:UpdateElasticIp */
	static readonly UPDATE_ELASTIC_IP = "opsworks:UpdateElasticIp";
	/** [Write] opsworks:UpdateInstance */
	static readonly UPDATE_INSTANCE = "opsworks:UpdateInstance";
	/** [Write] opsworks:UpdateLayer */
	static readonly UPDATE_LAYER = "opsworks:UpdateLayer";
	/** [Write] opsworks:UpdateMyUserProfile */
	static readonly UPDATE_MY_USER_PROFILE = "opsworks:UpdateMyUserProfile";
	/** [Write] opsworks:UpdateRdsDbInstance */
	static readonly UPDATE_RDS_DB_INSTANCE = "opsworks:UpdateRdsDbInstance";
	/** [Write] opsworks:UpdateStack */
	static readonly UPDATE_STACK = "opsworks:UpdateStack";
	/** [PermissionManagement] opsworks:UpdateUserProfile */
	static readonly UPDATE_USER_PROFILE = "opsworks:UpdateUserProfile";
	/** [Write] opsworks:UpdateVolume */
	static readonly UPDATE_VOLUME = "opsworks:UpdateVolume";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		OpsworksActions.GET_HOSTNAME_SUGGESTION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		OpsworksActions.ASSIGN_INSTANCE,
		OpsworksActions.ASSIGN_VOLUME,
		OpsworksActions.ASSOCIATE_ELASTIC_IP,
		OpsworksActions.ATTACH_ELASTIC_LOAD_BALANCER,
		OpsworksActions.CLONE_STACK,
		OpsworksActions.CREATE_APP,
		OpsworksActions.CREATE_DEPLOYMENT,
		OpsworksActions.CREATE_INSTANCE,
		OpsworksActions.CREATE_LAYER,
		OpsworksActions.CREATE_STACK,
		OpsworksActions.CREATE_USER_PROFILE,
		OpsworksActions.DELETE_APP,
		OpsworksActions.DELETE_INSTANCE,
		OpsworksActions.DELETE_LAYER,
		OpsworksActions.DELETE_STACK,
		OpsworksActions.DELETE_USER_PROFILE,
		OpsworksActions.DEREGISTER_ECS_CLUSTER,
		OpsworksActions.DEREGISTER_ELASTIC_IP,
		OpsworksActions.DEREGISTER_INSTANCE,
		OpsworksActions.DEREGISTER_RDS_DB_INSTANCE,
		OpsworksActions.DEREGISTER_VOLUME,
		OpsworksActions.DETACH_ELASTIC_LOAD_BALANCER,
		OpsworksActions.DISASSOCIATE_ELASTIC_IP,
		OpsworksActions.GRANT_ACCESS,
		OpsworksActions.REBOOT_INSTANCE,
		OpsworksActions.REGISTER_ECS_CLUSTER,
		OpsworksActions.REGISTER_ELASTIC_IP,
		OpsworksActions.REGISTER_INSTANCE,
		OpsworksActions.REGISTER_RDS_DB_INSTANCE,
		OpsworksActions.REGISTER_VOLUME,
		OpsworksActions.SET_LOAD_BASED_AUTO_SCALING,
		OpsworksActions.SET_TIME_BASED_AUTO_SCALING,
		OpsworksActions.START_INSTANCE,
		OpsworksActions.START_STACK,
		OpsworksActions.STOP_INSTANCE,
		OpsworksActions.STOP_STACK,
		OpsworksActions.UNASSIGN_INSTANCE,
		OpsworksActions.UNASSIGN_VOLUME,
		OpsworksActions.UPDATE_APP,
		OpsworksActions.UPDATE_ELASTIC_IP,
		OpsworksActions.UPDATE_INSTANCE,
		OpsworksActions.UPDATE_LAYER,
		OpsworksActions.UPDATE_MY_USER_PROFILE,
		OpsworksActions.UPDATE_RDS_DB_INSTANCE,
		OpsworksActions.UPDATE_STACK,
		OpsworksActions.UPDATE_VOLUME,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		OpsworksActions.DESCRIBE_AGENT_VERSIONS,
		OpsworksActions.DESCRIBE_APPS,
		OpsworksActions.DESCRIBE_COMMANDS,
		OpsworksActions.DESCRIBE_DEPLOYMENTS,
		OpsworksActions.DESCRIBE_ECS_CLUSTERS,
		OpsworksActions.DESCRIBE_ELASTIC_IPS,
		OpsworksActions.DESCRIBE_ELASTIC_LOAD_BALANCERS,
		OpsworksActions.DESCRIBE_INSTANCES,
		OpsworksActions.DESCRIBE_LAYERS,
		OpsworksActions.DESCRIBE_LOAD_BASED_AUTO_SCALING,
		OpsworksActions.DESCRIBE_MY_USER_PROFILE,
		OpsworksActions.DESCRIBE_OPERATING_SYSTEMS,
		OpsworksActions.DESCRIBE_PERMISSIONS,
		OpsworksActions.DESCRIBE_RAID_ARRAYS,
		OpsworksActions.DESCRIBE_RDS_DB_INSTANCES,
		OpsworksActions.DESCRIBE_SERVICE_ERRORS,
		OpsworksActions.DESCRIBE_STACK_PROVISIONING_PARAMETERS,
		OpsworksActions.DESCRIBE_STACK_SUMMARY,
		OpsworksActions.DESCRIBE_STACKS,
		OpsworksActions.DESCRIBE_TIME_BASED_AUTO_SCALING,
		OpsworksActions.DESCRIBE_USER_PROFILES,
		OpsworksActions.DESCRIBE_VOLUMES,
		OpsworksActions.LIST_TAGS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		OpsworksActions.SET_PERMISSION,
		OpsworksActions.UPDATE_USER_PROFILE,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		OpsworksActions.TAG_RESOURCE,
		OpsworksActions.UNTAG_RESOURCE,
	];
}

const StackArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):opsworks:(?<region>[^:]*):(?<account>[^:]*):stack/(?<stackId>[^:/?]+)/$",
);

/**
 * ARN builders, validators, and parsers for opsworks resources.
 */
export class OpsworksResources {
	/**
	 * Builds an ARN for the stack resource.
	 */
	static stack(props: {
		/** The StackId component of the ARN. */
		readonly stackId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:opsworks:${props.region ?? "*"}:${props.account ?? "*"}:stack/${props.stackId}/`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stack resource.
	 */
	static isValidStackArn(arn: string): boolean {
		return StackArnRegex.test(arn);
	}

	/**
	 * Parses a stack ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStackArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stackId: string;
	} {
		const match = StackArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stack ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stackId: match.groups!.stackId,
		};
	}
}
