// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codedeploy.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codedeploy service.
 */
export class CodeDeployActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codedeploy";

	/** [Tagging] codedeploy:AddTagsToOnPremisesInstances */
	static readonly ADD_TAGS_TO_ON_PREMISES_INSTANCES =
		"codedeploy:AddTagsToOnPremisesInstances";
	/** [Read] codedeploy:BatchGetApplicationRevisions */
	static readonly BATCH_GET_APPLICATION_REVISIONS =
		"codedeploy:BatchGetApplicationRevisions";
	/** [Read] codedeploy:BatchGetApplications */
	static readonly BATCH_GET_APPLICATIONS = "codedeploy:BatchGetApplications";
	/** [Read] codedeploy:BatchGetDeploymentGroups */
	static readonly BATCH_GET_DEPLOYMENT_GROUPS =
		"codedeploy:BatchGetDeploymentGroups";
	/** [Read] codedeploy:BatchGetDeploymentInstances */
	static readonly BATCH_GET_DEPLOYMENT_INSTANCES =
		"codedeploy:BatchGetDeploymentInstances";
	/** [Read] codedeploy:BatchGetDeploymentTargets */
	static readonly BATCH_GET_DEPLOYMENT_TARGETS =
		"codedeploy:BatchGetDeploymentTargets";
	/** [Read] codedeploy:BatchGetDeployments */
	static readonly BATCH_GET_DEPLOYMENTS = "codedeploy:BatchGetDeployments";
	/** [Read] codedeploy:BatchGetOnPremisesInstances */
	static readonly BATCH_GET_ON_PREMISES_INSTANCES =
		"codedeploy:BatchGetOnPremisesInstances";
	/** [Write] codedeploy:ContinueDeployment */
	static readonly CONTINUE_DEPLOYMENT = "codedeploy:ContinueDeployment";
	/** [Write] codedeploy:CreateApplication */
	static readonly CREATE_APPLICATION = "codedeploy:CreateApplication";
	/** [Write] codedeploy:CreateCloudFormationDeployment */
	static readonly CREATE_CLOUD_FORMATION_DEPLOYMENT =
		"codedeploy:CreateCloudFormationDeployment";
	/** [Write] codedeploy:CreateDeployment */
	static readonly CREATE_DEPLOYMENT = "codedeploy:CreateDeployment";
	/** [Write] codedeploy:CreateDeploymentConfig */
	static readonly CREATE_DEPLOYMENT_CONFIG =
		"codedeploy:CreateDeploymentConfig";
	/** [Write] codedeploy:CreateDeploymentGroup */
	static readonly CREATE_DEPLOYMENT_GROUP = "codedeploy:CreateDeploymentGroup";
	/** [Write] codedeploy:DeleteApplication */
	static readonly DELETE_APPLICATION = "codedeploy:DeleteApplication";
	/** [Write] codedeploy:DeleteDeploymentConfig */
	static readonly DELETE_DEPLOYMENT_CONFIG =
		"codedeploy:DeleteDeploymentConfig";
	/** [Write] codedeploy:DeleteDeploymentGroup */
	static readonly DELETE_DEPLOYMENT_GROUP = "codedeploy:DeleteDeploymentGroup";
	/** [Write] codedeploy:DeleteGitHubAccountToken */
	static readonly DELETE_GIT_HUB_ACCOUNT_TOKEN =
		"codedeploy:DeleteGitHubAccountToken";
	/** [Write] codedeploy:DeleteResourcesByExternalId */
	static readonly DELETE_RESOURCES_BY_EXTERNAL_ID =
		"codedeploy:DeleteResourcesByExternalId";
	/** [Write] codedeploy:DeregisterOnPremisesInstance */
	static readonly DEREGISTER_ON_PREMISES_INSTANCE =
		"codedeploy:DeregisterOnPremisesInstance";
	/** [List] codedeploy:GetApplication */
	static readonly GET_APPLICATION = "codedeploy:GetApplication";
	/** [List] codedeploy:GetApplicationRevision */
	static readonly GET_APPLICATION_REVISION =
		"codedeploy:GetApplicationRevision";
	/** [List] codedeploy:GetDeployment */
	static readonly GET_DEPLOYMENT = "codedeploy:GetDeployment";
	/** [List] codedeploy:GetDeploymentConfig */
	static readonly GET_DEPLOYMENT_CONFIG = "codedeploy:GetDeploymentConfig";
	/** [List] codedeploy:GetDeploymentGroup */
	static readonly GET_DEPLOYMENT_GROUP = "codedeploy:GetDeploymentGroup";
	/** [List] codedeploy:GetDeploymentInstance */
	static readonly GET_DEPLOYMENT_INSTANCE = "codedeploy:GetDeploymentInstance";
	/** [Read] codedeploy:GetDeploymentTarget */
	static readonly GET_DEPLOYMENT_TARGET = "codedeploy:GetDeploymentTarget";
	/** [List] codedeploy:GetOnPremisesInstance */
	static readonly GET_ON_PREMISES_INSTANCE = "codedeploy:GetOnPremisesInstance";
	/** [List] codedeploy:ListApplicationRevisions */
	static readonly LIST_APPLICATION_REVISIONS =
		"codedeploy:ListApplicationRevisions";
	/** [List] codedeploy:ListApplications */
	static readonly LIST_APPLICATIONS = "codedeploy:ListApplications";
	/** [List] codedeploy:ListDeploymentConfigs */
	static readonly LIST_DEPLOYMENT_CONFIGS = "codedeploy:ListDeploymentConfigs";
	/** [List] codedeploy:ListDeploymentGroups */
	static readonly LIST_DEPLOYMENT_GROUPS = "codedeploy:ListDeploymentGroups";
	/** [List] codedeploy:ListDeploymentInstances */
	static readonly LIST_DEPLOYMENT_INSTANCES =
		"codedeploy:ListDeploymentInstances";
	/** [List] codedeploy:ListDeploymentTargets */
	static readonly LIST_DEPLOYMENT_TARGETS = "codedeploy:ListDeploymentTargets";
	/** [List] codedeploy:ListDeployments */
	static readonly LIST_DEPLOYMENTS = "codedeploy:ListDeployments";
	/** [List] codedeploy:ListGitHubAccountTokenNames */
	static readonly LIST_GIT_HUB_ACCOUNT_TOKEN_NAMES =
		"codedeploy:ListGitHubAccountTokenNames";
	/** [List] codedeploy:ListOnPremisesInstances */
	static readonly LIST_ON_PREMISES_INSTANCES =
		"codedeploy:ListOnPremisesInstances";
	/** [List] codedeploy:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "codedeploy:ListTagsForResource";
	/** [Write] codedeploy:PutLifecycleEventHookExecutionStatus */
	static readonly PUT_LIFECYCLE_EVENT_HOOK_EXECUTION_STATUS =
		"codedeploy:PutLifecycleEventHookExecutionStatus";
	/** [Write] codedeploy:RegisterApplicationRevision */
	static readonly REGISTER_APPLICATION_REVISION =
		"codedeploy:RegisterApplicationRevision";
	/** [Write] codedeploy:RegisterOnPremisesInstance */
	static readonly REGISTER_ON_PREMISES_INSTANCE =
		"codedeploy:RegisterOnPremisesInstance";
	/** [Tagging] codedeploy:RemoveTagsFromOnPremisesInstances */
	static readonly REMOVE_TAGS_FROM_ON_PREMISES_INSTANCES =
		"codedeploy:RemoveTagsFromOnPremisesInstances";
	/** [Write] codedeploy:SkipWaitTimeForInstanceTermination */
	static readonly SKIP_WAIT_TIME_FOR_INSTANCE_TERMINATION =
		"codedeploy:SkipWaitTimeForInstanceTermination";
	/** [Write] codedeploy:StopDeployment */
	static readonly STOP_DEPLOYMENT = "codedeploy:StopDeployment";
	/** [Tagging] codedeploy:TagResource */
	static readonly TAG_RESOURCE = "codedeploy:TagResource";
	/** [Tagging] codedeploy:UntagResource */
	static readonly UNTAG_RESOURCE = "codedeploy:UntagResource";
	/** [Write] codedeploy:UpdateApplication */
	static readonly UPDATE_APPLICATION = "codedeploy:UpdateApplication";
	/** [Write] codedeploy:UpdateDeploymentGroup */
	static readonly UPDATE_DEPLOYMENT_GROUP = "codedeploy:UpdateDeploymentGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodeDeployActions.BATCH_GET_APPLICATION_REVISIONS,
		CodeDeployActions.BATCH_GET_APPLICATIONS,
		CodeDeployActions.BATCH_GET_DEPLOYMENT_GROUPS,
		CodeDeployActions.BATCH_GET_DEPLOYMENT_INSTANCES,
		CodeDeployActions.BATCH_GET_DEPLOYMENT_TARGETS,
		CodeDeployActions.BATCH_GET_DEPLOYMENTS,
		CodeDeployActions.BATCH_GET_ON_PREMISES_INSTANCES,
		CodeDeployActions.GET_DEPLOYMENT_TARGET,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodeDeployActions.CONTINUE_DEPLOYMENT,
		CodeDeployActions.CREATE_APPLICATION,
		CodeDeployActions.CREATE_CLOUD_FORMATION_DEPLOYMENT,
		CodeDeployActions.CREATE_DEPLOYMENT,
		CodeDeployActions.CREATE_DEPLOYMENT_CONFIG,
		CodeDeployActions.CREATE_DEPLOYMENT_GROUP,
		CodeDeployActions.DELETE_APPLICATION,
		CodeDeployActions.DELETE_DEPLOYMENT_CONFIG,
		CodeDeployActions.DELETE_DEPLOYMENT_GROUP,
		CodeDeployActions.DELETE_GIT_HUB_ACCOUNT_TOKEN,
		CodeDeployActions.DELETE_RESOURCES_BY_EXTERNAL_ID,
		CodeDeployActions.DEREGISTER_ON_PREMISES_INSTANCE,
		CodeDeployActions.PUT_LIFECYCLE_EVENT_HOOK_EXECUTION_STATUS,
		CodeDeployActions.REGISTER_APPLICATION_REVISION,
		CodeDeployActions.REGISTER_ON_PREMISES_INSTANCE,
		CodeDeployActions.SKIP_WAIT_TIME_FOR_INSTANCE_TERMINATION,
		CodeDeployActions.STOP_DEPLOYMENT,
		CodeDeployActions.UPDATE_APPLICATION,
		CodeDeployActions.UPDATE_DEPLOYMENT_GROUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodeDeployActions.GET_APPLICATION,
		CodeDeployActions.GET_APPLICATION_REVISION,
		CodeDeployActions.GET_DEPLOYMENT,
		CodeDeployActions.GET_DEPLOYMENT_CONFIG,
		CodeDeployActions.GET_DEPLOYMENT_GROUP,
		CodeDeployActions.GET_DEPLOYMENT_INSTANCE,
		CodeDeployActions.GET_ON_PREMISES_INSTANCE,
		CodeDeployActions.LIST_APPLICATION_REVISIONS,
		CodeDeployActions.LIST_APPLICATIONS,
		CodeDeployActions.LIST_DEPLOYMENT_CONFIGS,
		CodeDeployActions.LIST_DEPLOYMENT_GROUPS,
		CodeDeployActions.LIST_DEPLOYMENT_INSTANCES,
		CodeDeployActions.LIST_DEPLOYMENT_TARGETS,
		CodeDeployActions.LIST_DEPLOYMENTS,
		CodeDeployActions.LIST_GIT_HUB_ACCOUNT_TOKEN_NAMES,
		CodeDeployActions.LIST_ON_PREMISES_INSTANCES,
		CodeDeployActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodeDeployActions.ADD_TAGS_TO_ON_PREMISES_INSTANCES,
		CodeDeployActions.REMOVE_TAGS_FROM_ON_PREMISES_INSTANCES,
		CodeDeployActions.TAG_RESOURCE,
		CodeDeployActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codedeploy:(?<region>[^:]*):(?<account>[^:]*):application:(?<applicationName>[^:/?]+)$",
);
const DeploymentconfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codedeploy:(?<region>[^:]*):(?<account>[^:]*):deploymentconfig:(?<deploymentConfigurationName>[^:/?]+)$",
);
const DeploymentgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codedeploy:(?<region>[^:]*):(?<account>[^:]*):deploymentgroup:(?<applicationName>[^:/?]+)/(?<deploymentGroupName>[^:/?]+)$",
);
const InstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codedeploy:(?<region>[^:]*):(?<account>[^:]*):instance:(?<instanceName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codedeploy resources.
 */
export class CodeDeployResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ApplicationName component of the ARN. */
		readonly applicationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codedeploy:${props.region ?? "*"}:${props.account ?? "*"}:application:${props.applicationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationName: string;
	} {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationName: match.groups!.applicationName,
		};
	}

	/**
	 * Builds an ARN for the deploymentconfig resource.
	 */
	static deploymentconfig(props: {
		/** The DeploymentConfigurationName component of the ARN. */
		readonly deploymentConfigurationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codedeploy:${props.region ?? "*"}:${props.account ?? "*"}:deploymentconfig:${props.deploymentConfigurationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deploymentconfig resource.
	 */
	static isValidDeploymentconfigArn(arn: string): boolean {
		return DeploymentconfigArnRegex.test(arn);
	}

	/**
	 * Parses a deploymentconfig ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentconfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deploymentConfigurationName: string;
	} {
		const match = DeploymentconfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deploymentconfig ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deploymentConfigurationName: match.groups!.deploymentConfigurationName,
		};
	}

	/**
	 * Builds an ARN for the deploymentgroup resource.
	 */
	static deploymentgroup(props: {
		/** The ApplicationName component of the ARN. */
		readonly applicationName: string;
		/** The DeploymentGroupName component of the ARN. */
		readonly deploymentGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codedeploy:${props.region ?? "*"}:${props.account ?? "*"}:deploymentgroup:${props.applicationName}/${props.deploymentGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deploymentgroup resource.
	 */
	static isValidDeploymentgroupArn(arn: string): boolean {
		return DeploymentgroupArnRegex.test(arn);
	}

	/**
	 * Parses a deploymentgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentgroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationName: string;
		deploymentGroupName: string;
	} {
		const match = DeploymentgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deploymentgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationName: match.groups!.applicationName,
			deploymentGroupName: match.groups!.deploymentGroupName,
		};
	}

	/**
	 * Builds an ARN for the instance resource.
	 */
	static instance(props: {
		/** The InstanceName component of the ARN. */
		readonly instanceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codedeploy:${props.region ?? "*"}:${props.account ?? "*"}:instance:${props.instanceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the instance resource.
	 */
	static isValidInstanceArn(arn: string): boolean {
		return InstanceArnRegex.test(arn);
	}

	/**
	 * Parses a instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceName: string;
	} {
		const match = InstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceName: match.groups!.instanceName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for codedeploy.
 */
export class CodeDeployOperations {
	/** IAM actions required for the AddTagsToOnPremisesInstances API call. */
	static readonly ADD_TAGS_TO_ON_PREMISES_INSTANCES: string[] = [
		"codedeploy:AddTagsToOnPremisesInstances",
	];
	/** IAM actions required for the BatchGetApplicationRevisions API call. */
	static readonly BATCH_GET_APPLICATION_REVISIONS: string[] = [
		"codedeploy:BatchGetApplicationRevisions",
	];
	/** IAM actions required for the BatchGetApplications API call. */
	static readonly BATCH_GET_APPLICATIONS: string[] = [
		"codedeploy:BatchGetApplications",
	];
	/** IAM actions required for the BatchGetDeploymentGroups API call. */
	static readonly BATCH_GET_DEPLOYMENT_GROUPS: string[] = [
		"codedeploy:BatchGetDeploymentGroups",
	];
	/** IAM actions required for the BatchGetDeploymentInstances API call. */
	static readonly BATCH_GET_DEPLOYMENT_INSTANCES: string[] = [
		"codedeploy:BatchGetDeploymentInstances",
	];
	/** IAM actions required for the BatchGetDeploymentTargets API call. */
	static readonly BATCH_GET_DEPLOYMENT_TARGETS: string[] = [
		"codedeploy:BatchGetDeploymentTargets",
	];
	/** IAM actions required for the BatchGetDeployments API call. */
	static readonly BATCH_GET_DEPLOYMENTS: string[] = [
		"codedeploy:BatchGetDeployments",
	];
	/** IAM actions required for the BatchGetOnPremisesInstances API call. */
	static readonly BATCH_GET_ON_PREMISES_INSTANCES: string[] = [
		"codedeploy:BatchGetOnPremisesInstances",
	];
	/** IAM actions required for the ContinueDeployment API call. */
	static readonly CONTINUE_DEPLOYMENT: string[] = [
		"codedeploy:ContinueDeployment",
		"codedeploy:CreateCloudFormationDeployment",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"codedeploy:CreateApplication",
		"codedeploy:TagResource",
	];
	/** IAM actions required for the CreateDeployment API call. */
	static readonly CREATE_DEPLOYMENT: string[] = [
		"codedeploy:CreateDeployment",
		"codedeploy:GetApplicationRevision",
		"codedeploy:GetDeploymentConfig",
		"codedeploy:RegisterApplicationRevision",
		"codedeploy:UpdateDeploymentGroup",
	];
	/** IAM actions required for the CreateDeploymentConfig API call. */
	static readonly CREATE_DEPLOYMENT_CONFIG: string[] = [
		"codedeploy:CreateDeploymentConfig",
	];
	/** IAM actions required for the CreateDeploymentGroup API call. */
	static readonly CREATE_DEPLOYMENT_GROUP: string[] = [
		"codedeploy:CreateDeploymentGroup",
		"iam:PassRole",
		"codedeploy:TagResource",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"codedeploy:DeleteApplication",
	];
	/** IAM actions required for the DeleteDeploymentConfig API call. */
	static readonly DELETE_DEPLOYMENT_CONFIG: string[] = [
		"codedeploy:DeleteDeploymentConfig",
	];
	/** IAM actions required for the DeleteDeploymentGroup API call. */
	static readonly DELETE_DEPLOYMENT_GROUP: string[] = [
		"codedeploy:DeleteDeploymentGroup",
	];
	/** IAM actions required for the DeleteGitHubAccountToken API call. */
	static readonly DELETE_GIT_HUB_ACCOUNT_TOKEN: string[] = [
		"codedeploy:DeleteGitHubAccountToken",
	];
	/** IAM actions required for the DeleteResourcesByExternalId API call. */
	static readonly DELETE_RESOURCES_BY_EXTERNAL_ID: string[] = [
		"codedeploy:DeleteResourcesByExternalId",
	];
	/** IAM actions required for the DeregisterOnPremisesInstance API call. */
	static readonly DEREGISTER_ON_PREMISES_INSTANCE: string[] = [
		"codedeploy:DeregisterOnPremisesInstance",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = ["codedeploy:GetApplication"];
	/** IAM actions required for the GetApplicationRevision API call. */
	static readonly GET_APPLICATION_REVISION: string[] = [
		"codedeploy:GetApplicationRevision",
	];
	/** IAM actions required for the GetDeployment API call. */
	static readonly GET_DEPLOYMENT: string[] = ["codedeploy:GetDeployment"];
	/** IAM actions required for the GetDeploymentConfig API call. */
	static readonly GET_DEPLOYMENT_CONFIG: string[] = [
		"codedeploy:GetDeploymentConfig",
	];
	/** IAM actions required for the GetDeploymentGroup API call. */
	static readonly GET_DEPLOYMENT_GROUP: string[] = [
		"codedeploy:GetDeploymentGroup",
	];
	/** IAM actions required for the GetDeploymentInstance API call. */
	static readonly GET_DEPLOYMENT_INSTANCE: string[] = [
		"codedeploy:GetDeploymentInstance",
	];
	/** IAM actions required for the GetDeploymentTarget API call. */
	static readonly GET_DEPLOYMENT_TARGET: string[] = [
		"codedeploy:GetDeploymentTarget",
	];
	/** IAM actions required for the GetOnPremisesInstance API call. */
	static readonly GET_ON_PREMISES_INSTANCE: string[] = [
		"codedeploy:GetOnPremisesInstance",
	];
	/** IAM actions required for the ListApplicationRevisions API call. */
	static readonly LIST_APPLICATION_REVISIONS: string[] = [
		"codedeploy:ListApplicationRevisions",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = ["codedeploy:ListApplications"];
	/** IAM actions required for the ListDeploymentConfigs API call. */
	static readonly LIST_DEPLOYMENT_CONFIGS: string[] = [
		"codedeploy:ListDeploymentConfigs",
	];
	/** IAM actions required for the ListDeploymentGroups API call. */
	static readonly LIST_DEPLOYMENT_GROUPS: string[] = [
		"codedeploy:ListDeploymentGroups",
	];
	/** IAM actions required for the ListDeploymentInstances API call. */
	static readonly LIST_DEPLOYMENT_INSTANCES: string[] = [
		"codedeploy:ListDeploymentInstances",
	];
	/** IAM actions required for the ListDeploymentTargets API call. */
	static readonly LIST_DEPLOYMENT_TARGETS: string[] = [
		"codedeploy:ListDeploymentTargets",
	];
	/** IAM actions required for the ListDeployments API call. */
	static readonly LIST_DEPLOYMENTS: string[] = ["codedeploy:ListDeployments"];
	/** IAM actions required for the ListGitHubAccountTokenNames API call. */
	static readonly LIST_GIT_HUB_ACCOUNT_TOKEN_NAMES: string[] = [
		"codedeploy:ListGitHubAccountTokenNames",
	];
	/** IAM actions required for the ListOnPremisesInstances API call. */
	static readonly LIST_ON_PREMISES_INSTANCES: string[] = [
		"codedeploy:ListOnPremisesInstances",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"codedeploy:ListTagsForResource",
	];
	/** IAM actions required for the PutLifecycleEventHookExecutionStatus API call. */
	static readonly PUT_LIFECYCLE_EVENT_HOOK_EXECUTION_STATUS: string[] = [
		"codedeploy:CreateCloudFormationDeployment",
		"codedeploy:PutLifecycleEventHookExecutionStatus",
	];
	/** IAM actions required for the RegisterApplicationRevision API call. */
	static readonly REGISTER_APPLICATION_REVISION: string[] = [
		"codedeploy:RegisterApplicationRevision",
	];
	/** IAM actions required for the RegisterOnPremisesInstance API call. */
	static readonly REGISTER_ON_PREMISES_INSTANCE: string[] = [
		"codedeploy:RegisterOnPremisesInstance",
	];
	/** IAM actions required for the RemoveTagsFromOnPremisesInstances API call. */
	static readonly REMOVE_TAGS_FROM_ON_PREMISES_INSTANCES: string[] = [
		"codedeploy:RemoveTagsFromOnPremisesInstances",
	];
	/** IAM actions required for the SkipWaitTimeForInstanceTermination API call. */
	static readonly SKIP_WAIT_TIME_FOR_INSTANCE_TERMINATION: string[] = [
		"codedeploy:CreateCloudFormationDeployment",
		"codedeploy:SkipWaitTimeForInstanceTermination",
	];
	/** IAM actions required for the StopDeployment API call. */
	static readonly STOP_DEPLOYMENT: string[] = [
		"codedeploy:CreateCloudFormationDeployment",
		"codedeploy:StopDeployment",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["codedeploy:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["codedeploy:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [
		"codedeploy:UpdateApplication",
	];
	/** IAM actions required for the UpdateDeploymentGroup API call. */
	static readonly UPDATE_DEPLOYMENT_GROUP: string[] = [
		"iam:PassRole",
		"codedeploy:UpdateDeploymentGroup",
	];
}

/**
 * Condition key constants and builders for codedeploy.
 */
export class CodeDeployConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDeploymentGroup action. */
	static readonly CREATE_DEPLOYMENT_GROUP_CONDITION_KEYS: string[] = [
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
