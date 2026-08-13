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
	static readonly AssignInstance = "opsworks:AssignInstance";
	/** [Write] opsworks:AssignVolume */
	static readonly AssignVolume = "opsworks:AssignVolume";
	/** [Write] opsworks:AssociateElasticIp */
	static readonly AssociateElasticIp = "opsworks:AssociateElasticIp";
	/** [Write] opsworks:AttachElasticLoadBalancer */
	static readonly AttachElasticLoadBalancer =
		"opsworks:AttachElasticLoadBalancer";
	/** [Write] opsworks:CloneStack */
	static readonly CloneStack = "opsworks:CloneStack";
	/** [Write] opsworks:CreateApp */
	static readonly CreateApp = "opsworks:CreateApp";
	/** [Write] opsworks:CreateDeployment */
	static readonly CreateDeployment = "opsworks:CreateDeployment";
	/** [Write] opsworks:CreateInstance */
	static readonly CreateInstance = "opsworks:CreateInstance";
	/** [Write] opsworks:CreateLayer */
	static readonly CreateLayer = "opsworks:CreateLayer";
	/** [Write] opsworks:CreateStack */
	static readonly CreateStack = "opsworks:CreateStack";
	/** [Write] opsworks:CreateUserProfile */
	static readonly CreateUserProfile = "opsworks:CreateUserProfile";
	/** [Write] opsworks:DeleteApp */
	static readonly DeleteApp = "opsworks:DeleteApp";
	/** [Write] opsworks:DeleteInstance */
	static readonly DeleteInstance = "opsworks:DeleteInstance";
	/** [Write] opsworks:DeleteLayer */
	static readonly DeleteLayer = "opsworks:DeleteLayer";
	/** [Write] opsworks:DeleteStack */
	static readonly DeleteStack = "opsworks:DeleteStack";
	/** [Write] opsworks:DeleteUserProfile */
	static readonly DeleteUserProfile = "opsworks:DeleteUserProfile";
	/** [Write] opsworks:DeregisterEcsCluster */
	static readonly DeregisterEcsCluster = "opsworks:DeregisterEcsCluster";
	/** [Write] opsworks:DeregisterElasticIp */
	static readonly DeregisterElasticIp = "opsworks:DeregisterElasticIp";
	/** [Write] opsworks:DeregisterInstance */
	static readonly DeregisterInstance = "opsworks:DeregisterInstance";
	/** [Write] opsworks:DeregisterRdsDbInstance */
	static readonly DeregisterRdsDbInstance = "opsworks:DeregisterRdsDbInstance";
	/** [Write] opsworks:DeregisterVolume */
	static readonly DeregisterVolume = "opsworks:DeregisterVolume";
	/** [List] opsworks:DescribeAgentVersions */
	static readonly DescribeAgentVersions = "opsworks:DescribeAgentVersions";
	/** [List] opsworks:DescribeApps */
	static readonly DescribeApps = "opsworks:DescribeApps";
	/** [List] opsworks:DescribeCommands */
	static readonly DescribeCommands = "opsworks:DescribeCommands";
	/** [List] opsworks:DescribeDeployments */
	static readonly DescribeDeployments = "opsworks:DescribeDeployments";
	/** [List] opsworks:DescribeEcsClusters */
	static readonly DescribeEcsClusters = "opsworks:DescribeEcsClusters";
	/** [List] opsworks:DescribeElasticIps */
	static readonly DescribeElasticIps = "opsworks:DescribeElasticIps";
	/** [List] opsworks:DescribeElasticLoadBalancers */
	static readonly DescribeElasticLoadBalancers =
		"opsworks:DescribeElasticLoadBalancers";
	/** [List] opsworks:DescribeInstances */
	static readonly DescribeInstances = "opsworks:DescribeInstances";
	/** [List] opsworks:DescribeLayers */
	static readonly DescribeLayers = "opsworks:DescribeLayers";
	/** [List] opsworks:DescribeLoadBasedAutoScaling */
	static readonly DescribeLoadBasedAutoScaling =
		"opsworks:DescribeLoadBasedAutoScaling";
	/** [List] opsworks:DescribeMyUserProfile */
	static readonly DescribeMyUserProfile = "opsworks:DescribeMyUserProfile";
	/** [List] opsworks:DescribeOperatingSystems */
	static readonly DescribeOperatingSystems =
		"opsworks:DescribeOperatingSystems";
	/** [List] opsworks:DescribePermissions */
	static readonly DescribePermissions = "opsworks:DescribePermissions";
	/** [List] opsworks:DescribeRaidArrays */
	static readonly DescribeRaidArrays = "opsworks:DescribeRaidArrays";
	/** [List] opsworks:DescribeRdsDbInstances */
	static readonly DescribeRdsDbInstances = "opsworks:DescribeRdsDbInstances";
	/** [List] opsworks:DescribeServiceErrors */
	static readonly DescribeServiceErrors = "opsworks:DescribeServiceErrors";
	/** [List] opsworks:DescribeStackProvisioningParameters */
	static readonly DescribeStackProvisioningParameters =
		"opsworks:DescribeStackProvisioningParameters";
	/** [List] opsworks:DescribeStackSummary */
	static readonly DescribeStackSummary = "opsworks:DescribeStackSummary";
	/** [List] opsworks:DescribeStacks */
	static readonly DescribeStacks = "opsworks:DescribeStacks";
	/** [List] opsworks:DescribeTimeBasedAutoScaling */
	static readonly DescribeTimeBasedAutoScaling =
		"opsworks:DescribeTimeBasedAutoScaling";
	/** [List] opsworks:DescribeUserProfiles */
	static readonly DescribeUserProfiles = "opsworks:DescribeUserProfiles";
	/** [List] opsworks:DescribeVolumes */
	static readonly DescribeVolumes = "opsworks:DescribeVolumes";
	/** [Write] opsworks:DetachElasticLoadBalancer */
	static readonly DetachElasticLoadBalancer =
		"opsworks:DetachElasticLoadBalancer";
	/** [Write] opsworks:DisassociateElasticIp */
	static readonly DisassociateElasticIp = "opsworks:DisassociateElasticIp";
	/** [Read] opsworks:GetHostnameSuggestion */
	static readonly actionGetHostnameSuggestion =
		"opsworks:GetHostnameSuggestion";
	/** [Write] opsworks:GrantAccess */
	static readonly GrantAccess = "opsworks:GrantAccess";
	/** [List] opsworks:ListTags */
	static readonly ListTags = "opsworks:ListTags";
	/** [Write] opsworks:RebootInstance */
	static readonly RebootInstance = "opsworks:RebootInstance";
	/** [Write] opsworks:RegisterEcsCluster */
	static readonly RegisterEcsCluster = "opsworks:RegisterEcsCluster";
	/** [Write] opsworks:RegisterElasticIp */
	static readonly RegisterElasticIp = "opsworks:RegisterElasticIp";
	/** [Write] opsworks:RegisterInstance */
	static readonly RegisterInstance = "opsworks:RegisterInstance";
	/** [Write] opsworks:RegisterRdsDbInstance */
	static readonly RegisterRdsDbInstance = "opsworks:RegisterRdsDbInstance";
	/** [Write] opsworks:RegisterVolume */
	static readonly RegisterVolume = "opsworks:RegisterVolume";
	/** [Write] opsworks:SetLoadBasedAutoScaling */
	static readonly actionSetLoadBasedAutoScaling =
		"opsworks:SetLoadBasedAutoScaling";
	/** [PermissionManagement] opsworks:SetPermission */
	static readonly actionSetPermission = "opsworks:SetPermission";
	/** [Write] opsworks:SetTimeBasedAutoScaling */
	static readonly actionSetTimeBasedAutoScaling =
		"opsworks:SetTimeBasedAutoScaling";
	/** [Write] opsworks:StartInstance */
	static readonly StartInstance = "opsworks:StartInstance";
	/** [Write] opsworks:StartStack */
	static readonly StartStack = "opsworks:StartStack";
	/** [Write] opsworks:StopInstance */
	static readonly StopInstance = "opsworks:StopInstance";
	/** [Write] opsworks:StopStack */
	static readonly StopStack = "opsworks:StopStack";
	/** [Tagging] opsworks:TagResource */
	static readonly TagResource = "opsworks:TagResource";
	/** [Write] opsworks:UnassignInstance */
	static readonly UnassignInstance = "opsworks:UnassignInstance";
	/** [Write] opsworks:UnassignVolume */
	static readonly UnassignVolume = "opsworks:UnassignVolume";
	/** [Tagging] opsworks:UntagResource */
	static readonly UntagResource = "opsworks:UntagResource";
	/** [Write] opsworks:UpdateApp */
	static readonly UpdateApp = "opsworks:UpdateApp";
	/** [Write] opsworks:UpdateElasticIp */
	static readonly UpdateElasticIp = "opsworks:UpdateElasticIp";
	/** [Write] opsworks:UpdateInstance */
	static readonly UpdateInstance = "opsworks:UpdateInstance";
	/** [Write] opsworks:UpdateLayer */
	static readonly UpdateLayer = "opsworks:UpdateLayer";
	/** [Write] opsworks:UpdateMyUserProfile */
	static readonly UpdateMyUserProfile = "opsworks:UpdateMyUserProfile";
	/** [Write] opsworks:UpdateRdsDbInstance */
	static readonly UpdateRdsDbInstance = "opsworks:UpdateRdsDbInstance";
	/** [Write] opsworks:UpdateStack */
	static readonly UpdateStack = "opsworks:UpdateStack";
	/** [PermissionManagement] opsworks:UpdateUserProfile */
	static readonly UpdateUserProfile = "opsworks:UpdateUserProfile";
	/** [Write] opsworks:UpdateVolume */
	static readonly UpdateVolume = "opsworks:UpdateVolume";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		OpsworksActions.actionGetHostnameSuggestion,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		OpsworksActions.AssignInstance,
		OpsworksActions.AssignVolume,
		OpsworksActions.AssociateElasticIp,
		OpsworksActions.AttachElasticLoadBalancer,
		OpsworksActions.CloneStack,
		OpsworksActions.CreateApp,
		OpsworksActions.CreateDeployment,
		OpsworksActions.CreateInstance,
		OpsworksActions.CreateLayer,
		OpsworksActions.CreateStack,
		OpsworksActions.CreateUserProfile,
		OpsworksActions.DeleteApp,
		OpsworksActions.DeleteInstance,
		OpsworksActions.DeleteLayer,
		OpsworksActions.DeleteStack,
		OpsworksActions.DeleteUserProfile,
		OpsworksActions.DeregisterEcsCluster,
		OpsworksActions.DeregisterElasticIp,
		OpsworksActions.DeregisterInstance,
		OpsworksActions.DeregisterRdsDbInstance,
		OpsworksActions.DeregisterVolume,
		OpsworksActions.DetachElasticLoadBalancer,
		OpsworksActions.DisassociateElasticIp,
		OpsworksActions.GrantAccess,
		OpsworksActions.RebootInstance,
		OpsworksActions.RegisterEcsCluster,
		OpsworksActions.RegisterElasticIp,
		OpsworksActions.RegisterInstance,
		OpsworksActions.RegisterRdsDbInstance,
		OpsworksActions.RegisterVolume,
		OpsworksActions.actionSetLoadBasedAutoScaling,
		OpsworksActions.actionSetTimeBasedAutoScaling,
		OpsworksActions.StartInstance,
		OpsworksActions.StartStack,
		OpsworksActions.StopInstance,
		OpsworksActions.StopStack,
		OpsworksActions.UnassignInstance,
		OpsworksActions.UnassignVolume,
		OpsworksActions.UpdateApp,
		OpsworksActions.UpdateElasticIp,
		OpsworksActions.UpdateInstance,
		OpsworksActions.UpdateLayer,
		OpsworksActions.UpdateMyUserProfile,
		OpsworksActions.UpdateRdsDbInstance,
		OpsworksActions.UpdateStack,
		OpsworksActions.UpdateVolume,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		OpsworksActions.DescribeAgentVersions,
		OpsworksActions.DescribeApps,
		OpsworksActions.DescribeCommands,
		OpsworksActions.DescribeDeployments,
		OpsworksActions.DescribeEcsClusters,
		OpsworksActions.DescribeElasticIps,
		OpsworksActions.DescribeElasticLoadBalancers,
		OpsworksActions.DescribeInstances,
		OpsworksActions.DescribeLayers,
		OpsworksActions.DescribeLoadBasedAutoScaling,
		OpsworksActions.DescribeMyUserProfile,
		OpsworksActions.DescribeOperatingSystems,
		OpsworksActions.DescribePermissions,
		OpsworksActions.DescribeRaidArrays,
		OpsworksActions.DescribeRdsDbInstances,
		OpsworksActions.DescribeServiceErrors,
		OpsworksActions.DescribeStackProvisioningParameters,
		OpsworksActions.DescribeStackSummary,
		OpsworksActions.DescribeStacks,
		OpsworksActions.DescribeTimeBasedAutoScaling,
		OpsworksActions.DescribeUserProfiles,
		OpsworksActions.DescribeVolumes,
		OpsworksActions.ListTags,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		OpsworksActions.actionSetPermission,
		OpsworksActions.UpdateUserProfile,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		OpsworksActions.TagResource,
		OpsworksActions.UntagResource,
	];
}

/**
 * Properties for building a stack ARN.
 */
export interface OpsworksStackArnProps {
	/** The StackId component of the ARN. */
	readonly stackId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a stack ARN.
 */
export interface OpsworksStackArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StackId component. */
	readonly stackId: string;
}

const StackArnRegex =
	/^arn:(?<partition>[^:]+):opsworks:(?<region>[^:]*):(?<account>[^:]*):stack\/(?<stackId>[^:/?]+)\/$/;

/**
 * ARN builders, validators, and parsers for opsworks resources.
 */
export class OpsworksResources {
	/**
	 * Builds an ARN for the stack resource.
	 */
	static stack(props: OpsworksStackArnProps): string {
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
	static parseStackArn(arn: string): OpsworksStackArnComponents {
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
