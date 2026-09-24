// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/network-security-manager.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the network-security-manager service.
 */
export class NetworkSecurityManagerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "network-security-manager";

	/** [Write] network-security-manager:CreateDeployment */
	static readonly CreateDeployment =
		"network-security-manager:CreateDeployment";
	/** [Write] network-security-manager:CreateDeploymentSnapshot */
	static readonly CreateDeploymentSnapshot =
		"network-security-manager:CreateDeploymentSnapshot";
	/** [Write] network-security-manager:CreatePolicy */
	static readonly CreatePolicy = "network-security-manager:CreatePolicy";
	/** [Write] network-security-manager:CreatePolicySnapshot */
	static readonly CreatePolicySnapshot =
		"network-security-manager:CreatePolicySnapshot";
	/** [Write] network-security-manager:CreateRule */
	static readonly CreateRule = "network-security-manager:CreateRule";
	/** [Write] network-security-manager:CreateRuleSnapshot */
	static readonly CreateRuleSnapshot =
		"network-security-manager:CreateRuleSnapshot";
	/** [Write] network-security-manager:CreateScope */
	static readonly CreateScope = "network-security-manager:CreateScope";
	/** [Write] network-security-manager:CreateScopeSnapshot */
	static readonly CreateScopeSnapshot =
		"network-security-manager:CreateScopeSnapshot";
	/** [Write] network-security-manager:CreateTemplate */
	static readonly CreateTemplate = "network-security-manager:CreateTemplate";
	/** [Write] network-security-manager:CreateTemplateSnapshot */
	static readonly CreateTemplateSnapshot =
		"network-security-manager:CreateTemplateSnapshot";
	/** [Write] network-security-manager:DeleteAdminAccount */
	static readonly DeleteAdminAccount =
		"network-security-manager:DeleteAdminAccount";
	/** [Write] network-security-manager:DeleteDeployment */
	static readonly DeleteDeployment =
		"network-security-manager:DeleteDeployment";
	/** [Write] network-security-manager:DeletePolicy */
	static readonly DeletePolicy = "network-security-manager:DeletePolicy";
	/** [Write] network-security-manager:DeleteRule */
	static readonly DeleteRule = "network-security-manager:DeleteRule";
	/** [Write] network-security-manager:DeleteScope */
	static readonly DeleteScope = "network-security-manager:DeleteScope";
	/** [Write] network-security-manager:DeleteTemplate */
	static readonly DeleteTemplate = "network-security-manager:DeleteTemplate";
	/** [Write] network-security-manager:GenerateRuleConfiguration */
	static readonly GenerateRuleConfiguration =
		"network-security-manager:GenerateRuleConfiguration";
	/** [Read] network-security-manager:GetAdminAccount */
	static readonly actionGetAdminAccount =
		"network-security-manager:GetAdminAccount";
	/** [Read] network-security-manager:GetDeployment */
	static readonly actionGetDeployment =
		"network-security-manager:GetDeployment";
	/** [Read] network-security-manager:GetPolicy */
	static readonly actionGetPolicy = "network-security-manager:GetPolicy";
	/** [Read] network-security-manager:GetRule */
	static readonly actionGetRule = "network-security-manager:GetRule";
	/** [Read] network-security-manager:GetScope */
	static readonly actionGetScope = "network-security-manager:GetScope";
	/** [Read] network-security-manager:GetTemplate */
	static readonly actionGetTemplate = "network-security-manager:GetTemplate";
	/** [List] network-security-manager:ListAdminAccounts */
	static readonly ListAdminAccounts =
		"network-security-manager:ListAdminAccounts";
	/** [Read] network-security-manager:ListAggregateResourceSynchronizationStatuses */
	static readonly ListAggregateResourceSynchronizationStatuses =
		"network-security-manager:ListAggregateResourceSynchronizationStatuses";
	/** [Read] network-security-manager:ListDeploymentSnapshots */
	static readonly ListDeploymentSnapshots =
		"network-security-manager:ListDeploymentSnapshots";
	/** [List] network-security-manager:ListDeployments */
	static readonly ListDeployments = "network-security-manager:ListDeployments";
	/** [List] network-security-manager:ListPolicies */
	static readonly ListPolicies = "network-security-manager:ListPolicies";
	/** [Read] network-security-manager:ListPolicySnapshots */
	static readonly ListPolicySnapshots =
		"network-security-manager:ListPolicySnapshots";
	/** [Read] network-security-manager:ListResourceAssociations */
	static readonly ListResourceAssociations =
		"network-security-manager:ListResourceAssociations";
	/** [Read] network-security-manager:ListResourceSynchronizationStatuses */
	static readonly ListResourceSynchronizationStatuses =
		"network-security-manager:ListResourceSynchronizationStatuses";
	/** [Read] network-security-manager:ListRuleSnapshots */
	static readonly ListRuleSnapshots =
		"network-security-manager:ListRuleSnapshots";
	/** [List] network-security-manager:ListRules */
	static readonly ListRules = "network-security-manager:ListRules";
	/** [Read] network-security-manager:ListScopeSnapshots */
	static readonly ListScopeSnapshots =
		"network-security-manager:ListScopeSnapshots";
	/** [List] network-security-manager:ListScopes */
	static readonly ListScopes = "network-security-manager:ListScopes";
	/** [Read] network-security-manager:ListTagsForResource */
	static readonly ListTagsForResource =
		"network-security-manager:ListTagsForResource";
	/** [Read] network-security-manager:ListTemplateSnapshots */
	static readonly ListTemplateSnapshots =
		"network-security-manager:ListTemplateSnapshots";
	/** [List] network-security-manager:ListTemplates */
	static readonly ListTemplates = "network-security-manager:ListTemplates";
	/** [Write] network-security-manager:PutAdminAccount */
	static readonly PutAdminAccount = "network-security-manager:PutAdminAccount";
	/** [Tagging] network-security-manager:TagResource */
	static readonly TagResource = "network-security-manager:TagResource";
	/** [Tagging] network-security-manager:UntagResource */
	static readonly UntagResource = "network-security-manager:UntagResource";
	/** [Write] network-security-manager:UpdateDeployment */
	static readonly UpdateDeployment =
		"network-security-manager:UpdateDeployment";
	/** [Write] network-security-manager:UpdatePolicy */
	static readonly UpdatePolicy = "network-security-manager:UpdatePolicy";
	/** [Write] network-security-manager:UpdateRule */
	static readonly UpdateRule = "network-security-manager:UpdateRule";
	/** [Write] network-security-manager:UpdateScope */
	static readonly UpdateScope = "network-security-manager:UpdateScope";
	/** [Write] network-security-manager:UpdateTemplate */
	static readonly UpdateTemplate = "network-security-manager:UpdateTemplate";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		NetworkSecurityManagerActions.actionGetAdminAccount,
		NetworkSecurityManagerActions.actionGetDeployment,
		NetworkSecurityManagerActions.actionGetPolicy,
		NetworkSecurityManagerActions.actionGetRule,
		NetworkSecurityManagerActions.actionGetScope,
		NetworkSecurityManagerActions.actionGetTemplate,
		NetworkSecurityManagerActions.ListAggregateResourceSynchronizationStatuses,
		NetworkSecurityManagerActions.ListDeploymentSnapshots,
		NetworkSecurityManagerActions.ListPolicySnapshots,
		NetworkSecurityManagerActions.ListResourceAssociations,
		NetworkSecurityManagerActions.ListResourceSynchronizationStatuses,
		NetworkSecurityManagerActions.ListRuleSnapshots,
		NetworkSecurityManagerActions.ListScopeSnapshots,
		NetworkSecurityManagerActions.ListTagsForResource,
		NetworkSecurityManagerActions.ListTemplateSnapshots,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		NetworkSecurityManagerActions.CreateDeployment,
		NetworkSecurityManagerActions.CreateDeploymentSnapshot,
		NetworkSecurityManagerActions.CreatePolicy,
		NetworkSecurityManagerActions.CreatePolicySnapshot,
		NetworkSecurityManagerActions.CreateRule,
		NetworkSecurityManagerActions.CreateRuleSnapshot,
		NetworkSecurityManagerActions.CreateScope,
		NetworkSecurityManagerActions.CreateScopeSnapshot,
		NetworkSecurityManagerActions.CreateTemplate,
		NetworkSecurityManagerActions.CreateTemplateSnapshot,
		NetworkSecurityManagerActions.DeleteAdminAccount,
		NetworkSecurityManagerActions.DeleteDeployment,
		NetworkSecurityManagerActions.DeletePolicy,
		NetworkSecurityManagerActions.DeleteRule,
		NetworkSecurityManagerActions.DeleteScope,
		NetworkSecurityManagerActions.DeleteTemplate,
		NetworkSecurityManagerActions.GenerateRuleConfiguration,
		NetworkSecurityManagerActions.PutAdminAccount,
		NetworkSecurityManagerActions.UpdateDeployment,
		NetworkSecurityManagerActions.UpdatePolicy,
		NetworkSecurityManagerActions.UpdateRule,
		NetworkSecurityManagerActions.UpdateScope,
		NetworkSecurityManagerActions.UpdateTemplate,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		NetworkSecurityManagerActions.ListAdminAccounts,
		NetworkSecurityManagerActions.ListDeployments,
		NetworkSecurityManagerActions.ListPolicies,
		NetworkSecurityManagerActions.ListRules,
		NetworkSecurityManagerActions.ListScopes,
		NetworkSecurityManagerActions.ListTemplates,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		NetworkSecurityManagerActions.TagResource,
		NetworkSecurityManagerActions.UntagResource,
	];
}

/**
 * Properties for building a deployment ARN.
 */
export interface NetworkSecurityManagerDeploymentArnProps {
	/** The DeploymentId component of the ARN. */
	readonly deploymentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a deployment ARN.
 */
export interface NetworkSecurityManagerDeploymentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeploymentId component. */
	readonly deploymentId: string;
}

/**
 * Properties for building a deployment-snapshot ARN.
 */
export interface NetworkSecurityManagerDeploymentSnapshotArnProps {
	/** The DeploymentId component of the ARN. */
	readonly deploymentId: string;
	/** The VersionNumber component of the ARN. */
	readonly versionNumber: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a deployment-snapshot ARN.
 */
export interface NetworkSecurityManagerDeploymentSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeploymentId component. */
	readonly deploymentId: string;
	/** The VersionNumber component. */
	readonly versionNumber: string;
}

/**
 * Properties for building a policy ARN.
 */
export interface NetworkSecurityManagerPolicyArnProps {
	/** The PolicyId component of the ARN. */
	readonly policyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a policy ARN.
 */
export interface NetworkSecurityManagerPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PolicyId component. */
	readonly policyId: string;
}

/**
 * Properties for building a policy-snapshot ARN.
 */
export interface NetworkSecurityManagerPolicySnapshotArnProps {
	/** The PolicyId component of the ARN. */
	readonly policyId: string;
	/** The VersionNumber component of the ARN. */
	readonly versionNumber: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a policy-snapshot ARN.
 */
export interface NetworkSecurityManagerPolicySnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PolicyId component. */
	readonly policyId: string;
	/** The VersionNumber component. */
	readonly versionNumber: string;
}

/**
 * Properties for building a rule ARN.
 */
export interface NetworkSecurityManagerRuleArnProps {
	/** The RuleId component of the ARN. */
	readonly ruleId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a rule ARN.
 */
export interface NetworkSecurityManagerRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RuleId component. */
	readonly ruleId: string;
}

/**
 * Properties for building a rule-snapshot ARN.
 */
export interface NetworkSecurityManagerRuleSnapshotArnProps {
	/** The RuleId component of the ARN. */
	readonly ruleId: string;
	/** The VersionNumber component of the ARN. */
	readonly versionNumber: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a rule-snapshot ARN.
 */
export interface NetworkSecurityManagerRuleSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RuleId component. */
	readonly ruleId: string;
	/** The VersionNumber component. */
	readonly versionNumber: string;
}

/**
 * Properties for building a scope ARN.
 */
export interface NetworkSecurityManagerScopeArnProps {
	/** The ScopeId component of the ARN. */
	readonly scopeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a scope ARN.
 */
export interface NetworkSecurityManagerScopeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ScopeId component. */
	readonly scopeId: string;
}

/**
 * Properties for building a scope-snapshot ARN.
 */
export interface NetworkSecurityManagerScopeSnapshotArnProps {
	/** The ScopeId component of the ARN. */
	readonly scopeId: string;
	/** The VersionNumber component of the ARN. */
	readonly versionNumber: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a scope-snapshot ARN.
 */
export interface NetworkSecurityManagerScopeSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ScopeId component. */
	readonly scopeId: string;
	/** The VersionNumber component. */
	readonly versionNumber: string;
}

/**
 * Properties for building a template ARN.
 */
export interface NetworkSecurityManagerTemplateArnProps {
	/** The TemplateId component of the ARN. */
	readonly templateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a template ARN.
 */
export interface NetworkSecurityManagerTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TemplateId component. */
	readonly templateId: string;
}

/**
 * Properties for building a template-snapshot ARN.
 */
export interface NetworkSecurityManagerTemplateSnapshotArnProps {
	/** The TemplateId component of the ARN. */
	readonly templateId: string;
	/** The VersionNumber component of the ARN. */
	readonly versionNumber: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a template-snapshot ARN.
 */
export interface NetworkSecurityManagerTemplateSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TemplateId component. */
	readonly templateId: string;
	/** The VersionNumber component. */
	readonly versionNumber: string;
}

const DeploymentArnRegex =
	/^arn:(?<partition>[^:]+):network-security-manager:(?<region>[^:]*):(?<account>[^:]*):deployment:(?<deploymentId>[^:/?]+)$/;
const DeploymentSnapshotArnRegex =
	/^arn:(?<partition>[^:]+):network-security-manager:(?<region>[^:]*):(?<account>[^:]*):deployment:(?<deploymentId>[^:/?]+):(?<versionNumber>[^:/?]+)$/;
const PolicyArnRegex =
	/^arn:(?<partition>[^:]+):network-security-manager:(?<region>[^:]*):(?<account>[^:]*):policy:(?<policyId>[^:/?]+)$/;
const PolicySnapshotArnRegex =
	/^arn:(?<partition>[^:]+):network-security-manager:(?<region>[^:]*):(?<account>[^:]*):policy:(?<policyId>[^:/?]+):(?<versionNumber>[^:/?]+)$/;
const RuleArnRegex =
	/^arn:(?<partition>[^:]+):network-security-manager:(?<region>[^:]*):(?<account>[^:]*):rule:(?<ruleId>[^:/?]+)$/;
const RuleSnapshotArnRegex =
	/^arn:(?<partition>[^:]+):network-security-manager:(?<region>[^:]*):(?<account>[^:]*):rule:(?<ruleId>[^:/?]+):(?<versionNumber>[^:/?]+)$/;
const ScopeArnRegex =
	/^arn:(?<partition>[^:]+):network-security-manager:(?<region>[^:]*):(?<account>[^:]*):scope:(?<scopeId>[^:/?]+)$/;
const ScopeSnapshotArnRegex =
	/^arn:(?<partition>[^:]+):network-security-manager:(?<region>[^:]*):(?<account>[^:]*):scope:(?<scopeId>[^:/?]+):(?<versionNumber>[^:/?]+)$/;
const TemplateArnRegex =
	/^arn:(?<partition>[^:]+):network-security-manager:(?<region>[^:]*):(?<account>[^:]*):template:(?<templateId>[^:/?]+)$/;
const TemplateSnapshotArnRegex =
	/^arn:(?<partition>[^:]+):network-security-manager:(?<region>[^:]*):(?<account>[^:]*):template:(?<templateId>[^:/?]+):(?<versionNumber>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for network-security-manager resources.
 */
export class NetworkSecurityManagerResources {
	/**
	 * Builds an ARN for the deployment resource.
	 */
	static deployment(props: NetworkSecurityManagerDeploymentArnProps): string {
		return `arn:${props.partition ?? "aws"}:network-security-manager:${props.region ?? "*"}:${props.account ?? "*"}:deployment:${props.deploymentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deployment resource.
	 */
	static isValidDeploymentArn(arn: string): boolean {
		return DeploymentArnRegex.test(arn);
	}

	/**
	 * Parses a deployment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentArn(
		arn: string,
	): NetworkSecurityManagerDeploymentArnComponents {
		const match = DeploymentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deployment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deploymentId: match.groups!.deploymentId,
		};
	}

	/**
	 * Builds an ARN for the deployment-snapshot resource.
	 */
	static deploymentSnapshot(
		props: NetworkSecurityManagerDeploymentSnapshotArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:network-security-manager:${props.region ?? "*"}:${props.account ?? "*"}:deployment:${props.deploymentId}:${props.versionNumber}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deployment-snapshot resource.
	 */
	static isValidDeploymentSnapshotArn(arn: string): boolean {
		return DeploymentSnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a deployment-snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentSnapshotArn(
		arn: string,
	): NetworkSecurityManagerDeploymentSnapshotArnComponents {
		const match = DeploymentSnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deployment-snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deploymentId: match.groups!.deploymentId,
			versionNumber: match.groups!.versionNumber,
		};
	}

	/**
	 * Builds an ARN for the policy resource.
	 */
	static policy(props: NetworkSecurityManagerPolicyArnProps): string {
		return `arn:${props.partition ?? "aws"}:network-security-manager:${props.region ?? "*"}:${props.account ?? "*"}:policy:${props.policyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the policy resource.
	 */
	static isValidPolicyArn(arn: string): boolean {
		return PolicyArnRegex.test(arn);
	}

	/**
	 * Parses a policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePolicyArn(
		arn: string,
	): NetworkSecurityManagerPolicyArnComponents {
		const match = PolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			policyId: match.groups!.policyId,
		};
	}

	/**
	 * Builds an ARN for the policy-snapshot resource.
	 */
	static policySnapshot(
		props: NetworkSecurityManagerPolicySnapshotArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:network-security-manager:${props.region ?? "*"}:${props.account ?? "*"}:policy:${props.policyId}:${props.versionNumber}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the policy-snapshot resource.
	 */
	static isValidPolicySnapshotArn(arn: string): boolean {
		return PolicySnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a policy-snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePolicySnapshotArn(
		arn: string,
	): NetworkSecurityManagerPolicySnapshotArnComponents {
		const match = PolicySnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy-snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			policyId: match.groups!.policyId,
			versionNumber: match.groups!.versionNumber,
		};
	}

	/**
	 * Builds an ARN for the rule resource.
	 */
	static rule(props: NetworkSecurityManagerRuleArnProps): string {
		return `arn:${props.partition ?? "aws"}:network-security-manager:${props.region ?? "*"}:${props.account ?? "*"}:rule:${props.ruleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rule resource.
	 */
	static isValidRuleArn(arn: string): boolean {
		return RuleArnRegex.test(arn);
	}

	/**
	 * Parses a rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRuleArn(arn: string): NetworkSecurityManagerRuleArnComponents {
		const match = RuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ruleId: match.groups!.ruleId,
		};
	}

	/**
	 * Builds an ARN for the rule-snapshot resource.
	 */
	static ruleSnapshot(
		props: NetworkSecurityManagerRuleSnapshotArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:network-security-manager:${props.region ?? "*"}:${props.account ?? "*"}:rule:${props.ruleId}:${props.versionNumber}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rule-snapshot resource.
	 */
	static isValidRuleSnapshotArn(arn: string): boolean {
		return RuleSnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a rule-snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRuleSnapshotArn(
		arn: string,
	): NetworkSecurityManagerRuleSnapshotArnComponents {
		const match = RuleSnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rule-snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ruleId: match.groups!.ruleId,
			versionNumber: match.groups!.versionNumber,
		};
	}

	/**
	 * Builds an ARN for the scope resource.
	 */
	static scope(props: NetworkSecurityManagerScopeArnProps): string {
		return `arn:${props.partition ?? "aws"}:network-security-manager:${props.region ?? "*"}:${props.account ?? "*"}:scope:${props.scopeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the scope resource.
	 */
	static isValidScopeArn(arn: string): boolean {
		return ScopeArnRegex.test(arn);
	}

	/**
	 * Parses a scope ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScopeArn(arn: string): NetworkSecurityManagerScopeArnComponents {
		const match = ScopeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid scope ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scopeId: match.groups!.scopeId,
		};
	}

	/**
	 * Builds an ARN for the scope-snapshot resource.
	 */
	static scopeSnapshot(
		props: NetworkSecurityManagerScopeSnapshotArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:network-security-manager:${props.region ?? "*"}:${props.account ?? "*"}:scope:${props.scopeId}:${props.versionNumber}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the scope-snapshot resource.
	 */
	static isValidScopeSnapshotArn(arn: string): boolean {
		return ScopeSnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a scope-snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScopeSnapshotArn(
		arn: string,
	): NetworkSecurityManagerScopeSnapshotArnComponents {
		const match = ScopeSnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid scope-snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scopeId: match.groups!.scopeId,
			versionNumber: match.groups!.versionNumber,
		};
	}

	/**
	 * Builds an ARN for the template resource.
	 */
	static template(props: NetworkSecurityManagerTemplateArnProps): string {
		return `arn:${props.partition ?? "aws"}:network-security-manager:${props.region ?? "*"}:${props.account ?? "*"}:template:${props.templateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the template resource.
	 */
	static isValidTemplateArn(arn: string): boolean {
		return TemplateArnRegex.test(arn);
	}

	/**
	 * Parses a template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTemplateArn(
		arn: string,
	): NetworkSecurityManagerTemplateArnComponents {
		const match = TemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			templateId: match.groups!.templateId,
		};
	}

	/**
	 * Builds an ARN for the template-snapshot resource.
	 */
	static templateSnapshot(
		props: NetworkSecurityManagerTemplateSnapshotArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:network-security-manager:${props.region ?? "*"}:${props.account ?? "*"}:template:${props.templateId}:${props.versionNumber}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the template-snapshot resource.
	 */
	static isValidTemplateSnapshotArn(arn: string): boolean {
		return TemplateSnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a template-snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTemplateSnapshotArn(
		arn: string,
	): NetworkSecurityManagerTemplateSnapshotArnComponents {
		const match = TemplateSnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid template-snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			templateId: match.groups!.templateId,
			versionNumber: match.groups!.versionNumber,
		};
	}
}

/**
 * API operation to required IAM actions mapping for network-security-manager.
 */
export class NetworkSecurityManagerOperations {
	/** IAM actions required for the CreateDeployment API call. */
	static readonly CreateDeployment: string[] = [
		"network-security-manager:CreateDeployment",
		"network-security-manager:TagResource",
	];
	/** IAM actions required for the CreateDeploymentSnapshot API call. */
	static readonly CreateDeploymentSnapshot: string[] = [
		"network-security-manager:CreateDeploymentSnapshot",
		"network-security-manager:TagResource",
	];
	/** IAM actions required for the CreatePolicy API call. */
	static readonly CreatePolicy: string[] = [
		"network-security-manager:CreatePolicy",
		"network-security-manager:TagResource",
	];
	/** IAM actions required for the CreatePolicySnapshot API call. */
	static readonly CreatePolicySnapshot: string[] = [
		"network-security-manager:CreatePolicySnapshot",
		"network-security-manager:TagResource",
	];
	/** IAM actions required for the CreateRule API call. */
	static readonly CreateRule: string[] = [
		"network-security-manager:CreateRule",
		"network-security-manager:TagResource",
	];
	/** IAM actions required for the CreateRuleSnapshot API call. */
	static readonly CreateRuleSnapshot: string[] = [
		"network-security-manager:CreateRuleSnapshot",
		"network-security-manager:TagResource",
	];
	/** IAM actions required for the CreateScope API call. */
	static readonly CreateScope: string[] = [
		"network-security-manager:CreateScope",
		"network-security-manager:TagResource",
	];
	/** IAM actions required for the CreateScopeSnapshot API call. */
	static readonly CreateScopeSnapshot: string[] = [
		"network-security-manager:CreateScopeSnapshot",
		"network-security-manager:TagResource",
	];
	/** IAM actions required for the CreateTemplate API call. */
	static readonly CreateTemplate: string[] = [
		"network-security-manager:CreateTemplate",
		"network-security-manager:TagResource",
	];
	/** IAM actions required for the CreateTemplateSnapshot API call. */
	static readonly CreateTemplateSnapshot: string[] = [
		"network-security-manager:CreateTemplateSnapshot",
		"network-security-manager:TagResource",
	];
	/** IAM actions required for the DeleteAdminAccount API call. */
	static readonly DeleteAdminAccount: string[] = [
		"network-security-manager:DeleteAdminAccount",
	];
	/** IAM actions required for the DeleteDeployment API call. */
	static readonly DeleteDeployment: string[] = [
		"network-security-manager:DeleteDeployment",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DeletePolicy: string[] = [
		"network-security-manager:DeletePolicy",
	];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DeleteRule: string[] = [
		"network-security-manager:DeleteRule",
	];
	/** IAM actions required for the DeleteScope API call. */
	static readonly DeleteScope: string[] = [
		"network-security-manager:DeleteScope",
	];
	/** IAM actions required for the DeleteTemplate API call. */
	static readonly DeleteTemplate: string[] = [
		"network-security-manager:DeleteTemplate",
	];
	/** IAM actions required for the GenerateRuleConfiguration API call. */
	static readonly GenerateRuleConfiguration: string[] = [
		"network-security-manager:GenerateRuleConfiguration",
	];
	/** IAM actions required for the GetAdminAccount API call. */
	static readonly opGetAdminAccount: string[] = [
		"network-security-manager:GetAdminAccount",
	];
	/** IAM actions required for the GetDeployment API call. */
	static readonly opGetDeployment: string[] = [
		"network-security-manager:GetDeployment",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly opGetPolicy: string[] = [
		"network-security-manager:GetPolicy",
	];
	/** IAM actions required for the GetRule API call. */
	static readonly opGetRule: string[] = ["network-security-manager:GetRule"];
	/** IAM actions required for the GetScope API call. */
	static readonly opGetScope: string[] = ["network-security-manager:GetScope"];
	/** IAM actions required for the GetTemplate API call. */
	static readonly opGetTemplate: string[] = [
		"network-security-manager:GetTemplate",
	];
	/** IAM actions required for the ListAdminAccounts API call. */
	static readonly ListAdminAccounts: string[] = [
		"network-security-manager:ListAdminAccounts",
	];
	/** IAM actions required for the ListAggregateResourceSynchronizationStatuses API call. */
	static readonly ListAggregateResourceSynchronizationStatuses: string[] = [
		"network-security-manager:ListAggregateResourceSynchronizationStatuses",
	];
	/** IAM actions required for the ListDeploymentSnapshots API call. */
	static readonly ListDeploymentSnapshots: string[] = [
		"network-security-manager:ListDeploymentSnapshots",
	];
	/** IAM actions required for the ListDeployments API call. */
	static readonly ListDeployments: string[] = [
		"network-security-manager:ListDeployments",
	];
	/** IAM actions required for the ListPolicies API call. */
	static readonly ListPolicies: string[] = [
		"network-security-manager:ListPolicies",
	];
	/** IAM actions required for the ListPolicySnapshots API call. */
	static readonly ListPolicySnapshots: string[] = [
		"network-security-manager:ListPolicySnapshots",
	];
	/** IAM actions required for the ListResourceAssociations API call. */
	static readonly ListResourceAssociations: string[] = [
		"network-security-manager:ListResourceAssociations",
	];
	/** IAM actions required for the ListResourceSynchronizationStatuses API call. */
	static readonly ListResourceSynchronizationStatuses: string[] = [
		"network-security-manager:ListResourceSynchronizationStatuses",
	];
	/** IAM actions required for the ListRuleSnapshots API call. */
	static readonly ListRuleSnapshots: string[] = [
		"network-security-manager:ListRuleSnapshots",
	];
	/** IAM actions required for the ListRules API call. */
	static readonly ListRules: string[] = ["network-security-manager:ListRules"];
	/** IAM actions required for the ListScopeSnapshots API call. */
	static readonly ListScopeSnapshots: string[] = [
		"network-security-manager:ListScopeSnapshots",
	];
	/** IAM actions required for the ListScopes API call. */
	static readonly ListScopes: string[] = [
		"network-security-manager:ListScopes",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"network-security-manager:ListTagsForResource",
	];
	/** IAM actions required for the ListTemplateSnapshots API call. */
	static readonly ListTemplateSnapshots: string[] = [
		"network-security-manager:ListTemplateSnapshots",
	];
	/** IAM actions required for the ListTemplates API call. */
	static readonly ListTemplates: string[] = [
		"network-security-manager:ListTemplates",
	];
	/** IAM actions required for the PutAdminAccount API call. */
	static readonly PutAdminAccount: string[] = [
		"network-security-manager:PutAdminAccount",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"network-security-manager:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"network-security-manager:UntagResource",
	];
	/** IAM actions required for the UpdateDeployment API call. */
	static readonly UpdateDeployment: string[] = [
		"network-security-manager:UpdateDeployment",
	];
	/** IAM actions required for the UpdatePolicy API call. */
	static readonly UpdatePolicy: string[] = [
		"network-security-manager:UpdatePolicy",
	];
	/** IAM actions required for the UpdateRule API call. */
	static readonly UpdateRule: string[] = [
		"network-security-manager:UpdateRule",
	];
	/** IAM actions required for the UpdateScope API call. */
	static readonly UpdateScope: string[] = [
		"network-security-manager:UpdateScope",
	];
	/** IAM actions required for the UpdateTemplate API call. */
	static readonly UpdateTemplate: string[] = [
		"network-security-manager:UpdateTemplate",
	];
}

/**
 * Condition key constants and builders for network-security-manager.
 */
export class NetworkSecurityManagerConditions {
	/** Condition keys applicable to the CreateDeployment action. */
	static readonly CreateDeploymentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDeploymentSnapshot action. */
	static readonly CreateDeploymentSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePolicy action. */
	static readonly CreatePolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePolicySnapshot action. */
	static readonly CreatePolicySnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRule action. */
	static readonly CreateRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRuleSnapshot action. */
	static readonly CreateRuleSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScope action. */
	static readonly CreateScopeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScopeSnapshot action. */
	static readonly CreateScopeSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTemplate action. */
	static readonly CreateTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTemplateSnapshot action. */
	static readonly CreateTemplateSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListResourceAssociations action. */
	static readonly ListResourceAssociationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListResourceSynchronizationStatuses action. */
	static readonly ListResourceSynchronizationStatusesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

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
