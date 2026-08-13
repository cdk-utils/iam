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
	static readonly AddTagsToOnPremisesInstances =
		"codedeploy:AddTagsToOnPremisesInstances";
	/** [Read] codedeploy:BatchGetApplicationRevisions */
	static readonly BatchGetApplicationRevisions =
		"codedeploy:BatchGetApplicationRevisions";
	/** [Read] codedeploy:BatchGetApplications */
	static readonly BatchGetApplications = "codedeploy:BatchGetApplications";
	/** [Read] codedeploy:BatchGetDeploymentGroups */
	static readonly BatchGetDeploymentGroups =
		"codedeploy:BatchGetDeploymentGroups";
	/** [Read] codedeploy:BatchGetDeploymentInstances */
	static readonly BatchGetDeploymentInstances =
		"codedeploy:BatchGetDeploymentInstances";
	/** [Read] codedeploy:BatchGetDeploymentTargets */
	static readonly BatchGetDeploymentTargets =
		"codedeploy:BatchGetDeploymentTargets";
	/** [Read] codedeploy:BatchGetDeployments */
	static readonly BatchGetDeployments = "codedeploy:BatchGetDeployments";
	/** [Read] codedeploy:BatchGetOnPremisesInstances */
	static readonly BatchGetOnPremisesInstances =
		"codedeploy:BatchGetOnPremisesInstances";
	/** [Write] codedeploy:ContinueDeployment */
	static readonly ContinueDeployment = "codedeploy:ContinueDeployment";
	/** [Write] codedeploy:CreateApplication */
	static readonly CreateApplication = "codedeploy:CreateApplication";
	/** [Write] codedeploy:CreateCloudFormationDeployment */
	static readonly CreateCloudFormationDeployment =
		"codedeploy:CreateCloudFormationDeployment";
	/** [Write] codedeploy:CreateDeployment */
	static readonly CreateDeployment = "codedeploy:CreateDeployment";
	/** [Write] codedeploy:CreateDeploymentConfig */
	static readonly CreateDeploymentConfig = "codedeploy:CreateDeploymentConfig";
	/** [Write] codedeploy:CreateDeploymentGroup */
	static readonly CreateDeploymentGroup = "codedeploy:CreateDeploymentGroup";
	/** [Write] codedeploy:DeleteApplication */
	static readonly DeleteApplication = "codedeploy:DeleteApplication";
	/** [Write] codedeploy:DeleteDeploymentConfig */
	static readonly DeleteDeploymentConfig = "codedeploy:DeleteDeploymentConfig";
	/** [Write] codedeploy:DeleteDeploymentGroup */
	static readonly DeleteDeploymentGroup = "codedeploy:DeleteDeploymentGroup";
	/** [Write] codedeploy:DeleteGitHubAccountToken */
	static readonly DeleteGitHubAccountToken =
		"codedeploy:DeleteGitHubAccountToken";
	/** [Write] codedeploy:DeleteResourcesByExternalId */
	static readonly DeleteResourcesByExternalId =
		"codedeploy:DeleteResourcesByExternalId";
	/** [Write] codedeploy:DeregisterOnPremisesInstance */
	static readonly DeregisterOnPremisesInstance =
		"codedeploy:DeregisterOnPremisesInstance";
	/** [List] codedeploy:GetApplication */
	static readonly actionGetApplication = "codedeploy:GetApplication";
	/** [List] codedeploy:GetApplicationRevision */
	static readonly actionGetApplicationRevision =
		"codedeploy:GetApplicationRevision";
	/** [List] codedeploy:GetDeployment */
	static readonly actionGetDeployment = "codedeploy:GetDeployment";
	/** [List] codedeploy:GetDeploymentConfig */
	static readonly actionGetDeploymentConfig = "codedeploy:GetDeploymentConfig";
	/** [List] codedeploy:GetDeploymentGroup */
	static readonly actionGetDeploymentGroup = "codedeploy:GetDeploymentGroup";
	/** [List] codedeploy:GetDeploymentInstance */
	static readonly actionGetDeploymentInstance =
		"codedeploy:GetDeploymentInstance";
	/** [Read] codedeploy:GetDeploymentTarget */
	static readonly actionGetDeploymentTarget = "codedeploy:GetDeploymentTarget";
	/** [List] codedeploy:GetOnPremisesInstance */
	static readonly actionGetOnPremisesInstance =
		"codedeploy:GetOnPremisesInstance";
	/** [List] codedeploy:ListApplicationRevisions */
	static readonly ListApplicationRevisions =
		"codedeploy:ListApplicationRevisions";
	/** [List] codedeploy:ListApplications */
	static readonly ListApplications = "codedeploy:ListApplications";
	/** [List] codedeploy:ListDeploymentConfigs */
	static readonly ListDeploymentConfigs = "codedeploy:ListDeploymentConfigs";
	/** [List] codedeploy:ListDeploymentGroups */
	static readonly ListDeploymentGroups = "codedeploy:ListDeploymentGroups";
	/** [List] codedeploy:ListDeploymentInstances */
	static readonly ListDeploymentInstances =
		"codedeploy:ListDeploymentInstances";
	/** [List] codedeploy:ListDeploymentTargets */
	static readonly ListDeploymentTargets = "codedeploy:ListDeploymentTargets";
	/** [List] codedeploy:ListDeployments */
	static readonly ListDeployments = "codedeploy:ListDeployments";
	/** [List] codedeploy:ListGitHubAccountTokenNames */
	static readonly ListGitHubAccountTokenNames =
		"codedeploy:ListGitHubAccountTokenNames";
	/** [List] codedeploy:ListOnPremisesInstances */
	static readonly ListOnPremisesInstances =
		"codedeploy:ListOnPremisesInstances";
	/** [List] codedeploy:ListTagsForResource */
	static readonly ListTagsForResource = "codedeploy:ListTagsForResource";
	/** [Write] codedeploy:PutLifecycleEventHookExecutionStatus */
	static readonly PutLifecycleEventHookExecutionStatus =
		"codedeploy:PutLifecycleEventHookExecutionStatus";
	/** [Write] codedeploy:RegisterApplicationRevision */
	static readonly RegisterApplicationRevision =
		"codedeploy:RegisterApplicationRevision";
	/** [Write] codedeploy:RegisterOnPremisesInstance */
	static readonly RegisterOnPremisesInstance =
		"codedeploy:RegisterOnPremisesInstance";
	/** [Tagging] codedeploy:RemoveTagsFromOnPremisesInstances */
	static readonly RemoveTagsFromOnPremisesInstances =
		"codedeploy:RemoveTagsFromOnPremisesInstances";
	/** [Write] codedeploy:SkipWaitTimeForInstanceTermination */
	static readonly SkipWaitTimeForInstanceTermination =
		"codedeploy:SkipWaitTimeForInstanceTermination";
	/** [Write] codedeploy:StopDeployment */
	static readonly StopDeployment = "codedeploy:StopDeployment";
	/** [Tagging] codedeploy:TagResource */
	static readonly TagResource = "codedeploy:TagResource";
	/** [Tagging] codedeploy:UntagResource */
	static readonly UntagResource = "codedeploy:UntagResource";
	/** [Write] codedeploy:UpdateApplication */
	static readonly UpdateApplication = "codedeploy:UpdateApplication";
	/** [Write] codedeploy:UpdateDeploymentGroup */
	static readonly UpdateDeploymentGroup = "codedeploy:UpdateDeploymentGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodeDeployActions.BatchGetApplicationRevisions,
		CodeDeployActions.BatchGetApplications,
		CodeDeployActions.BatchGetDeploymentGroups,
		CodeDeployActions.BatchGetDeploymentInstances,
		CodeDeployActions.BatchGetDeploymentTargets,
		CodeDeployActions.BatchGetDeployments,
		CodeDeployActions.BatchGetOnPremisesInstances,
		CodeDeployActions.actionGetDeploymentTarget,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodeDeployActions.ContinueDeployment,
		CodeDeployActions.CreateApplication,
		CodeDeployActions.CreateCloudFormationDeployment,
		CodeDeployActions.CreateDeployment,
		CodeDeployActions.CreateDeploymentConfig,
		CodeDeployActions.CreateDeploymentGroup,
		CodeDeployActions.DeleteApplication,
		CodeDeployActions.DeleteDeploymentConfig,
		CodeDeployActions.DeleteDeploymentGroup,
		CodeDeployActions.DeleteGitHubAccountToken,
		CodeDeployActions.DeleteResourcesByExternalId,
		CodeDeployActions.DeregisterOnPremisesInstance,
		CodeDeployActions.PutLifecycleEventHookExecutionStatus,
		CodeDeployActions.RegisterApplicationRevision,
		CodeDeployActions.RegisterOnPremisesInstance,
		CodeDeployActions.SkipWaitTimeForInstanceTermination,
		CodeDeployActions.StopDeployment,
		CodeDeployActions.UpdateApplication,
		CodeDeployActions.UpdateDeploymentGroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodeDeployActions.actionGetApplication,
		CodeDeployActions.actionGetApplicationRevision,
		CodeDeployActions.actionGetDeployment,
		CodeDeployActions.actionGetDeploymentConfig,
		CodeDeployActions.actionGetDeploymentGroup,
		CodeDeployActions.actionGetDeploymentInstance,
		CodeDeployActions.actionGetOnPremisesInstance,
		CodeDeployActions.ListApplicationRevisions,
		CodeDeployActions.ListApplications,
		CodeDeployActions.ListDeploymentConfigs,
		CodeDeployActions.ListDeploymentGroups,
		CodeDeployActions.ListDeploymentInstances,
		CodeDeployActions.ListDeploymentTargets,
		CodeDeployActions.ListDeployments,
		CodeDeployActions.ListGitHubAccountTokenNames,
		CodeDeployActions.ListOnPremisesInstances,
		CodeDeployActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodeDeployActions.AddTagsToOnPremisesInstances,
		CodeDeployActions.RemoveTagsFromOnPremisesInstances,
		CodeDeployActions.TagResource,
		CodeDeployActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface CodeDeployApplicationArnProps {
	/** The ApplicationName component of the ARN. */
	readonly applicationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a application ARN.
 */
export interface CodeDeployApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationName component. */
	readonly applicationName: string;
}

/**
 * Properties for building a deploymentconfig ARN.
 */
export interface CodeDeployDeploymentconfigArnProps {
	/** The DeploymentConfigurationName component of the ARN. */
	readonly deploymentConfigurationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a deploymentconfig ARN.
 */
export interface CodeDeployDeploymentconfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeploymentConfigurationName component. */
	readonly deploymentConfigurationName: string;
}

/**
 * Properties for building a deploymentgroup ARN.
 */
export interface CodeDeployDeploymentgroupArnProps {
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
}

/**
 * Parsed components of a deploymentgroup ARN.
 */
export interface CodeDeployDeploymentgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationName component. */
	readonly applicationName: string;
	/** The DeploymentGroupName component. */
	readonly deploymentGroupName: string;
}

/**
 * Properties for building a instance ARN.
 */
export interface CodeDeployInstanceArnProps {
	/** The InstanceName component of the ARN. */
	readonly instanceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a instance ARN.
 */
export interface CodeDeployInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceName component. */
	readonly instanceName: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):codedeploy:(?<region>[^:]*):(?<account>[^:]*):application:(?<applicationName>[^:/?]+)$/;
const DeploymentconfigArnRegex =
	/^arn:(?<partition>[^:]+):codedeploy:(?<region>[^:]*):(?<account>[^:]*):deploymentconfig:(?<deploymentConfigurationName>[^:/?]+)$/;
const DeploymentgroupArnRegex =
	/^arn:(?<partition>[^:]+):codedeploy:(?<region>[^:]*):(?<account>[^:]*):deploymentgroup:(?<applicationName>[^:/?]+)\/(?<deploymentGroupName>[^:/?]+)$/;
const InstanceArnRegex =
	/^arn:(?<partition>[^:]+):codedeploy:(?<region>[^:]*):(?<account>[^:]*):instance:(?<instanceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codedeploy resources.
 */
export class CodeDeployResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: CodeDeployApplicationArnProps): string {
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
	static parseApplicationArn(arn: string): CodeDeployApplicationArnComponents {
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
	static deploymentconfig(props: CodeDeployDeploymentconfigArnProps): string {
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
	static parseDeploymentconfigArn(
		arn: string,
	): CodeDeployDeploymentconfigArnComponents {
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
	static deploymentgroup(props: CodeDeployDeploymentgroupArnProps): string {
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
	static parseDeploymentgroupArn(
		arn: string,
	): CodeDeployDeploymentgroupArnComponents {
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
	static instance(props: CodeDeployInstanceArnProps): string {
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
	static parseInstanceArn(arn: string): CodeDeployInstanceArnComponents {
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
	static readonly AddTagsToOnPremisesInstances: string[] = [
		"codedeploy:AddTagsToOnPremisesInstances",
	];
	/** IAM actions required for the BatchGetApplicationRevisions API call. */
	static readonly BatchGetApplicationRevisions: string[] = [
		"codedeploy:BatchGetApplicationRevisions",
	];
	/** IAM actions required for the BatchGetApplications API call. */
	static readonly BatchGetApplications: string[] = [
		"codedeploy:BatchGetApplications",
	];
	/** IAM actions required for the BatchGetDeploymentGroups API call. */
	static readonly BatchGetDeploymentGroups: string[] = [
		"codedeploy:BatchGetDeploymentGroups",
	];
	/** IAM actions required for the BatchGetDeploymentInstances API call. */
	static readonly BatchGetDeploymentInstances: string[] = [
		"codedeploy:BatchGetDeploymentInstances",
	];
	/** IAM actions required for the BatchGetDeploymentTargets API call. */
	static readonly BatchGetDeploymentTargets: string[] = [
		"codedeploy:BatchGetDeploymentTargets",
	];
	/** IAM actions required for the BatchGetDeployments API call. */
	static readonly BatchGetDeployments: string[] = [
		"codedeploy:BatchGetDeployments",
	];
	/** IAM actions required for the BatchGetOnPremisesInstances API call. */
	static readonly BatchGetOnPremisesInstances: string[] = [
		"codedeploy:BatchGetOnPremisesInstances",
	];
	/** IAM actions required for the ContinueDeployment API call. */
	static readonly ContinueDeployment: string[] = [
		"codedeploy:ContinueDeployment",
		"codedeploy:CreateCloudFormationDeployment",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [
		"codedeploy:CreateApplication",
		"codedeploy:TagResource",
	];
	/** IAM actions required for the CreateDeployment API call. */
	static readonly CreateDeployment: string[] = [
		"codedeploy:CreateDeployment",
		"codedeploy:GetApplicationRevision",
		"codedeploy:GetDeploymentConfig",
		"codedeploy:RegisterApplicationRevision",
		"codedeploy:UpdateDeploymentGroup",
	];
	/** IAM actions required for the CreateDeploymentConfig API call. */
	static readonly CreateDeploymentConfig: string[] = [
		"codedeploy:CreateDeploymentConfig",
	];
	/** IAM actions required for the CreateDeploymentGroup API call. */
	static readonly CreateDeploymentGroup: string[] = [
		"codedeploy:CreateDeploymentGroup",
		"iam:PassRole",
		"codedeploy:TagResource",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [
		"codedeploy:DeleteApplication",
	];
	/** IAM actions required for the DeleteDeploymentConfig API call. */
	static readonly DeleteDeploymentConfig: string[] = [
		"codedeploy:DeleteDeploymentConfig",
	];
	/** IAM actions required for the DeleteDeploymentGroup API call. */
	static readonly DeleteDeploymentGroup: string[] = [
		"codedeploy:DeleteDeploymentGroup",
	];
	/** IAM actions required for the DeleteGitHubAccountToken API call. */
	static readonly DeleteGitHubAccountToken: string[] = [
		"codedeploy:DeleteGitHubAccountToken",
	];
	/** IAM actions required for the DeleteResourcesByExternalId API call. */
	static readonly DeleteResourcesByExternalId: string[] = [
		"codedeploy:DeleteResourcesByExternalId",
	];
	/** IAM actions required for the DeregisterOnPremisesInstance API call. */
	static readonly DeregisterOnPremisesInstance: string[] = [
		"codedeploy:DeregisterOnPremisesInstance",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = ["codedeploy:GetApplication"];
	/** IAM actions required for the GetApplicationRevision API call. */
	static readonly opGetApplicationRevision: string[] = [
		"codedeploy:GetApplicationRevision",
	];
	/** IAM actions required for the GetDeployment API call. */
	static readonly opGetDeployment: string[] = ["codedeploy:GetDeployment"];
	/** IAM actions required for the GetDeploymentConfig API call. */
	static readonly opGetDeploymentConfig: string[] = [
		"codedeploy:GetDeploymentConfig",
	];
	/** IAM actions required for the GetDeploymentGroup API call. */
	static readonly opGetDeploymentGroup: string[] = [
		"codedeploy:GetDeploymentGroup",
	];
	/** IAM actions required for the GetDeploymentInstance API call. */
	static readonly opGetDeploymentInstance: string[] = [
		"codedeploy:GetDeploymentInstance",
	];
	/** IAM actions required for the GetDeploymentTarget API call. */
	static readonly opGetDeploymentTarget: string[] = [
		"codedeploy:GetDeploymentTarget",
	];
	/** IAM actions required for the GetOnPremisesInstance API call. */
	static readonly opGetOnPremisesInstance: string[] = [
		"codedeploy:GetOnPremisesInstance",
	];
	/** IAM actions required for the ListApplicationRevisions API call. */
	static readonly ListApplicationRevisions: string[] = [
		"codedeploy:ListApplicationRevisions",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = ["codedeploy:ListApplications"];
	/** IAM actions required for the ListDeploymentConfigs API call. */
	static readonly ListDeploymentConfigs: string[] = [
		"codedeploy:ListDeploymentConfigs",
	];
	/** IAM actions required for the ListDeploymentGroups API call. */
	static readonly ListDeploymentGroups: string[] = [
		"codedeploy:ListDeploymentGroups",
	];
	/** IAM actions required for the ListDeploymentInstances API call. */
	static readonly ListDeploymentInstances: string[] = [
		"codedeploy:ListDeploymentInstances",
	];
	/** IAM actions required for the ListDeploymentTargets API call. */
	static readonly ListDeploymentTargets: string[] = [
		"codedeploy:ListDeploymentTargets",
	];
	/** IAM actions required for the ListDeployments API call. */
	static readonly ListDeployments: string[] = ["codedeploy:ListDeployments"];
	/** IAM actions required for the ListGitHubAccountTokenNames API call. */
	static readonly ListGitHubAccountTokenNames: string[] = [
		"codedeploy:ListGitHubAccountTokenNames",
	];
	/** IAM actions required for the ListOnPremisesInstances API call. */
	static readonly ListOnPremisesInstances: string[] = [
		"codedeploy:ListOnPremisesInstances",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"codedeploy:ListTagsForResource",
	];
	/** IAM actions required for the PutLifecycleEventHookExecutionStatus API call. */
	static readonly PutLifecycleEventHookExecutionStatus: string[] = [
		"codedeploy:CreateCloudFormationDeployment",
		"codedeploy:PutLifecycleEventHookExecutionStatus",
	];
	/** IAM actions required for the RegisterApplicationRevision API call. */
	static readonly RegisterApplicationRevision: string[] = [
		"codedeploy:RegisterApplicationRevision",
	];
	/** IAM actions required for the RegisterOnPremisesInstance API call. */
	static readonly RegisterOnPremisesInstance: string[] = [
		"codedeploy:RegisterOnPremisesInstance",
	];
	/** IAM actions required for the RemoveTagsFromOnPremisesInstances API call. */
	static readonly RemoveTagsFromOnPremisesInstances: string[] = [
		"codedeploy:RemoveTagsFromOnPremisesInstances",
	];
	/** IAM actions required for the SkipWaitTimeForInstanceTermination API call. */
	static readonly SkipWaitTimeForInstanceTermination: string[] = [
		"codedeploy:CreateCloudFormationDeployment",
		"codedeploy:SkipWaitTimeForInstanceTermination",
	];
	/** IAM actions required for the StopDeployment API call. */
	static readonly StopDeployment: string[] = [
		"codedeploy:CreateCloudFormationDeployment",
		"codedeploy:StopDeployment",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["codedeploy:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["codedeploy:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [
		"codedeploy:UpdateApplication",
	];
	/** IAM actions required for the UpdateDeploymentGroup API call. */
	static readonly UpdateDeploymentGroup: string[] = [
		"iam:PassRole",
		"codedeploy:UpdateDeploymentGroup",
	];
}

/**
 * Condition key constants and builders for codedeploy.
 */
export class CodeDeployConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDeploymentGroup action. */
	static readonly CreateDeploymentGroupConditionKeys: string[] = [
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
