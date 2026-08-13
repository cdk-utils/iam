// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codecatalyst.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codecatalyst service.
 */
export class CodeCatalystActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codecatalyst";

	/** [Write] codecatalyst:AcceptConnection */
	static readonly AcceptConnection = "codecatalyst:AcceptConnection";
	/** [Write] codecatalyst:AssociateIamRoleToConnection */
	static readonly AssociateIamRoleToConnection =
		"codecatalyst:AssociateIamRoleToConnection";
	/** [Write] codecatalyst:AssociateIdentityCenterApplicationToSpace */
	static readonly AssociateIdentityCenterApplicationToSpace =
		"codecatalyst:AssociateIdentityCenterApplicationToSpace";
	/** [Write] codecatalyst:AssociateIdentityToIdentityCenterApplication */
	static readonly AssociateIdentityToIdentityCenterApplication =
		"codecatalyst:AssociateIdentityToIdentityCenterApplication";
	/** [Write] codecatalyst:BatchAssociateIdentitiesToIdentityCenterApplication */
	static readonly BatchAssociateIdentitiesToIdentityCenterApplication =
		"codecatalyst:BatchAssociateIdentitiesToIdentityCenterApplication";
	/** [Write] codecatalyst:BatchDisassociateIdentitiesFromIdentityCenterApplication */
	static readonly BatchDisassociateIdentitiesFromIdentityCenterApplication =
		"codecatalyst:BatchDisassociateIdentitiesFromIdentityCenterApplication";
	/** [Write] codecatalyst:CreateIdentityCenterApplication */
	static readonly CreateIdentityCenterApplication =
		"codecatalyst:CreateIdentityCenterApplication";
	/** [Write] codecatalyst:CreateSpace */
	static readonly CreateSpace = "codecatalyst:CreateSpace";
	/** [Write] codecatalyst:CreateSpaceAdminRoleAssignment */
	static readonly CreateSpaceAdminRoleAssignment =
		"codecatalyst:CreateSpaceAdminRoleAssignment";
	/** [Write] codecatalyst:DeleteConnection */
	static readonly DeleteConnection = "codecatalyst:DeleteConnection";
	/** [Write] codecatalyst:DeleteIdentityCenterApplication */
	static readonly DeleteIdentityCenterApplication =
		"codecatalyst:DeleteIdentityCenterApplication";
	/** [Write] codecatalyst:DisassociateIamRoleFromConnection */
	static readonly DisassociateIamRoleFromConnection =
		"codecatalyst:DisassociateIamRoleFromConnection";
	/** [Write] codecatalyst:DisassociateIdentityCenterApplicationFromSpace */
	static readonly DisassociateIdentityCenterApplicationFromSpace =
		"codecatalyst:DisassociateIdentityCenterApplicationFromSpace";
	/** [Write] codecatalyst:DisassociateIdentityFromIdentityCenterApplication */
	static readonly DisassociateIdentityFromIdentityCenterApplication =
		"codecatalyst:DisassociateIdentityFromIdentityCenterApplication";
	/** [Read] codecatalyst:GetBillingAuthorization */
	static readonly actionGetBillingAuthorization =
		"codecatalyst:GetBillingAuthorization";
	/** [Read] codecatalyst:GetConnection */
	static readonly actionGetConnection = "codecatalyst:GetConnection";
	/** [Read] codecatalyst:GetIdentityCenterApplication */
	static readonly actionGetIdentityCenterApplication =
		"codecatalyst:GetIdentityCenterApplication";
	/** [Read] codecatalyst:GetPendingConnection */
	static readonly actionGetPendingConnection =
		"codecatalyst:GetPendingConnection";
	/** [List] codecatalyst:ListConnections */
	static readonly ListConnections = "codecatalyst:ListConnections";
	/** [List] codecatalyst:ListIamRolesForConnection */
	static readonly ListIamRolesForConnection =
		"codecatalyst:ListIamRolesForConnection";
	/** [List] codecatalyst:ListIdentityCenterApplications */
	static readonly ListIdentityCenterApplications =
		"codecatalyst:ListIdentityCenterApplications";
	/** [List] codecatalyst:ListIdentityCenterApplicationsForSpace */
	static readonly ListIdentityCenterApplicationsForSpace =
		"codecatalyst:ListIdentityCenterApplicationsForSpace";
	/** [List] codecatalyst:ListSpacesForIdentityCenterApplication */
	static readonly ListSpacesForIdentityCenterApplication =
		"codecatalyst:ListSpacesForIdentityCenterApplication";
	/** [Read] codecatalyst:ListTagsForResource */
	static readonly ListTagsForResource = "codecatalyst:ListTagsForResource";
	/** [Write] codecatalyst:PutBillingAuthorization */
	static readonly PutBillingAuthorization =
		"codecatalyst:PutBillingAuthorization";
	/** [Write] codecatalyst:RejectConnection */
	static readonly RejectConnection = "codecatalyst:RejectConnection";
	/** [Write] codecatalyst:SynchronizeIdentityCenterApplication */
	static readonly SynchronizeIdentityCenterApplication =
		"codecatalyst:SynchronizeIdentityCenterApplication";
	/** [Tagging] codecatalyst:TagResource */
	static readonly TagResource = "codecatalyst:TagResource";
	/** [Tagging] codecatalyst:UntagResource */
	static readonly UntagResource = "codecatalyst:UntagResource";
	/** [Write] codecatalyst:UpdateIdentityCenterApplication */
	static readonly UpdateIdentityCenterApplication =
		"codecatalyst:UpdateIdentityCenterApplication";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodeCatalystActions.actionGetBillingAuthorization,
		CodeCatalystActions.actionGetConnection,
		CodeCatalystActions.actionGetIdentityCenterApplication,
		CodeCatalystActions.actionGetPendingConnection,
		CodeCatalystActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodeCatalystActions.AcceptConnection,
		CodeCatalystActions.AssociateIamRoleToConnection,
		CodeCatalystActions.AssociateIdentityCenterApplicationToSpace,
		CodeCatalystActions.AssociateIdentityToIdentityCenterApplication,
		CodeCatalystActions.BatchAssociateIdentitiesToIdentityCenterApplication,
		CodeCatalystActions.BatchDisassociateIdentitiesFromIdentityCenterApplication,
		CodeCatalystActions.CreateIdentityCenterApplication,
		CodeCatalystActions.CreateSpace,
		CodeCatalystActions.CreateSpaceAdminRoleAssignment,
		CodeCatalystActions.DeleteConnection,
		CodeCatalystActions.DeleteIdentityCenterApplication,
		CodeCatalystActions.DisassociateIamRoleFromConnection,
		CodeCatalystActions.DisassociateIdentityCenterApplicationFromSpace,
		CodeCatalystActions.DisassociateIdentityFromIdentityCenterApplication,
		CodeCatalystActions.PutBillingAuthorization,
		CodeCatalystActions.RejectConnection,
		CodeCatalystActions.SynchronizeIdentityCenterApplication,
		CodeCatalystActions.UpdateIdentityCenterApplication,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodeCatalystActions.ListConnections,
		CodeCatalystActions.ListIamRolesForConnection,
		CodeCatalystActions.ListIdentityCenterApplications,
		CodeCatalystActions.ListIdentityCenterApplicationsForSpace,
		CodeCatalystActions.ListSpacesForIdentityCenterApplication,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodeCatalystActions.TagResource,
		CodeCatalystActions.UntagResource,
	];
}

/**
 * Properties for building a connections ARN.
 */
export interface CodeCatalystConnectionsArnProps {
	/** The ConnectionId component of the ARN. */
	readonly connectionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connections ARN.
 */
export interface CodeCatalystConnectionsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectionId component. */
	readonly connectionId: string;
}

/**
 * Properties for building a identity-center-applications ARN.
 */
export interface CodeCatalystIdentityCenterApplicationsArnProps {
	/** The IdentityCenterApplicationId component of the ARN. */
	readonly identityCenterApplicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a identity-center-applications ARN.
 */
export interface CodeCatalystIdentityCenterApplicationsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IdentityCenterApplicationId component. */
	readonly identityCenterApplicationId: string;
}

/**
 * Properties for building a project ARN.
 */
export interface CodeCatalystProjectArnProps {
	/** The SpaceId component of the ARN. */
	readonly spaceId: string;
	/** The ProjectId component of the ARN. */
	readonly projectId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a project ARN.
 */
export interface CodeCatalystProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SpaceId component. */
	readonly spaceId: string;
	/** The ProjectId component. */
	readonly projectId: string;
}

/**
 * Properties for building a space ARN.
 */
export interface CodeCatalystSpaceArnProps {
	/** The SpaceId component of the ARN. */
	readonly spaceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a space ARN.
 */
export interface CodeCatalystSpaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SpaceId component. */
	readonly spaceId: string;
}

const ConnectionsArnRegex =
	/^arn:(?<partition>[^:]+):codecatalyst:(?<region>[^:]*):(?<account>[^:]*):\/connections\/(?<connectionId>[^:/?]+)$/;
const IdentityCenterApplicationsArnRegex =
	/^arn:(?<partition>[^:]+):codecatalyst:(?<region>[^:]*):(?<account>[^:]*):\/identity-center-applications\/(?<identityCenterApplicationId>[^:/?]+)$/;
const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):codecatalyst:::space\/(?<spaceId>[^:/?]+)\/project\/(?<projectId>[^:/?]+)$/;
const SpaceArnRegex =
	/^arn:(?<partition>[^:]+):codecatalyst:::space\/(?<spaceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codecatalyst resources.
 */
export class CodeCatalystResources {
	/**
	 * Builds an ARN for the connections resource.
	 */
	static connections(props: CodeCatalystConnectionsArnProps): string {
		return `arn:${props.partition ?? "aws"}:codecatalyst:${props.region ?? "*"}:${props.account ?? "*"}:/connections/${props.connectionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connections resource.
	 */
	static isValidConnectionsArn(arn: string): boolean {
		return ConnectionsArnRegex.test(arn);
	}

	/**
	 * Parses a connections ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionsArn(
		arn: string,
	): CodeCatalystConnectionsArnComponents {
		const match = ConnectionsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connections ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectionId: match.groups!.connectionId,
		};
	}

	/**
	 * Builds an ARN for the identity-center-applications resource.
	 */
	static identityCenterApplications(
		props: CodeCatalystIdentityCenterApplicationsArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:codecatalyst:${props.region ?? "*"}:${props.account ?? "*"}:/identity-center-applications/${props.identityCenterApplicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the identity-center-applications resource.
	 */
	static isValidIdentityCenterApplicationsArn(arn: string): boolean {
		return IdentityCenterApplicationsArnRegex.test(arn);
	}

	/**
	 * Parses a identity-center-applications ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIdentityCenterApplicationsArn(
		arn: string,
	): CodeCatalystIdentityCenterApplicationsArnComponents {
		const match = IdentityCenterApplicationsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid identity-center-applications ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identityCenterApplicationId: match.groups!.identityCenterApplicationId,
		};
	}

	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: CodeCatalystProjectArnProps): string {
		return `arn:${props.partition ?? "aws"}:codecatalyst:::space/${props.spaceId}/project/${props.projectId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the project resource.
	 */
	static isValidProjectArn(arn: string): boolean {
		return ProjectArnRegex.test(arn);
	}

	/**
	 * Parses a project ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProjectArn(arn: string): CodeCatalystProjectArnComponents {
		const match = ProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			spaceId: match.groups!.spaceId,
			projectId: match.groups!.projectId,
		};
	}

	/**
	 * Builds an ARN for the space resource.
	 */
	static space(props: CodeCatalystSpaceArnProps): string {
		return `arn:${props.partition ?? "aws"}:codecatalyst:::space/${props.spaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the space resource.
	 */
	static isValidSpaceArn(arn: string): boolean {
		return SpaceArnRegex.test(arn);
	}

	/**
	 * Parses a space ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSpaceArn(arn: string): CodeCatalystSpaceArnComponents {
		const match = SpaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid space ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			spaceId: match.groups!.spaceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for codecatalyst.
 */
export class CodeCatalystOperations {
	/** IAM actions required for the CreateAccessToken API call. */
	static readonly CreateAccessToken: string[] = [];
	/** IAM actions required for the CreateDevEnvironment API call. */
	static readonly CreateDevEnvironment: string[] = [];
	/** IAM actions required for the CreateProject API call. */
	static readonly CreateProject: string[] = [];
	/** IAM actions required for the CreateSourceRepository API call. */
	static readonly CreateSourceRepository: string[] = [];
	/** IAM actions required for the CreateSourceRepositoryBranch API call. */
	static readonly CreateSourceRepositoryBranch: string[] = [];
	/** IAM actions required for the DeleteAccessToken API call. */
	static readonly DeleteAccessToken: string[] = [];
	/** IAM actions required for the DeleteDevEnvironment API call. */
	static readonly DeleteDevEnvironment: string[] = [];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DeleteProject: string[] = [];
	/** IAM actions required for the DeleteSourceRepository API call. */
	static readonly DeleteSourceRepository: string[] = [];
	/** IAM actions required for the DeleteSpace API call. */
	static readonly DeleteSpace: string[] = [];
	/** IAM actions required for the GetDevEnvironment API call. */
	static readonly opGetDevEnvironment: string[] = [];
	/** IAM actions required for the GetProject API call. */
	static readonly opGetProject: string[] = [];
	/** IAM actions required for the GetSourceRepository API call. */
	static readonly opGetSourceRepository: string[] = [];
	/** IAM actions required for the GetSourceRepositoryCloneUrls API call. */
	static readonly opGetSourceRepositoryCloneUrls: string[] = [];
	/** IAM actions required for the GetSpace API call. */
	static readonly opGetSpace: string[] = [];
	/** IAM actions required for the GetSubscription API call. */
	static readonly opGetSubscription: string[] = [];
	/** IAM actions required for the GetUserDetails API call. */
	static readonly opGetUserDetails: string[] = [];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly opGetWorkflow: string[] = [];
	/** IAM actions required for the GetWorkflowRun API call. */
	static readonly opGetWorkflowRun: string[] = [];
	/** IAM actions required for the ListAccessTokens API call. */
	static readonly ListAccessTokens: string[] = [];
	/** IAM actions required for the ListDevEnvironmentSessions API call. */
	static readonly ListDevEnvironmentSessions: string[] = [];
	/** IAM actions required for the ListDevEnvironments API call. */
	static readonly ListDevEnvironments: string[] = [];
	/** IAM actions required for the ListEventLogs API call. */
	static readonly ListEventLogs: string[] = [];
	/** IAM actions required for the ListProjects API call. */
	static readonly ListProjects: string[] = [];
	/** IAM actions required for the ListSourceRepositories API call. */
	static readonly ListSourceRepositories: string[] = [];
	/** IAM actions required for the ListSourceRepositoryBranches API call. */
	static readonly ListSourceRepositoryBranches: string[] = [];
	/** IAM actions required for the ListSpaces API call. */
	static readonly ListSpaces: string[] = [];
	/** IAM actions required for the ListWorkflowRuns API call. */
	static readonly ListWorkflowRuns: string[] = [];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly ListWorkflows: string[] = [];
	/** IAM actions required for the StartDevEnvironment API call. */
	static readonly StartDevEnvironment: string[] = [];
	/** IAM actions required for the StartDevEnvironmentSession API call. */
	static readonly StartDevEnvironmentSession: string[] = [];
	/** IAM actions required for the StartWorkflowRun API call. */
	static readonly StartWorkflowRun: string[] = [];
	/** IAM actions required for the StopDevEnvironment API call. */
	static readonly StopDevEnvironment: string[] = [];
	/** IAM actions required for the StopDevEnvironmentSession API call. */
	static readonly StopDevEnvironmentSession: string[] = [];
	/** IAM actions required for the UpdateDevEnvironment API call. */
	static readonly UpdateDevEnvironment: string[] = [];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UpdateProject: string[] = [];
	/** IAM actions required for the UpdateSpace API call. */
	static readonly UpdateSpace: string[] = [];
	/** IAM actions required for the VerifySession API call. */
	static readonly VerifySession: string[] = [];
}

/**
 * Condition key constants and builders for codecatalyst.
 */
export class CodeCatalystConditions {
	/** Condition keys applicable to the AcceptConnection action. */
	static readonly AcceptConnectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AssociateIamRoleToConnection action. */
	static readonly AssociateIamRoleToConnectionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the AssociateIdentityCenterApplicationToSpace action. */
	static readonly AssociateIdentityCenterApplicationToSpaceConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the AssociateIdentityToIdentityCenterApplication action. */
	static readonly AssociateIdentityToIdentityCenterApplicationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the BatchAssociateIdentitiesToIdentityCenterApplication action. */
	static readonly BatchAssociateIdentitiesToIdentityCenterApplicationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the BatchDisassociateIdentitiesFromIdentityCenterApplication action. */
	static readonly BatchDisassociateIdentitiesFromIdentityCenterApplicationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateIdentityCenterApplication action. */
	static readonly CreateIdentityCenterApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSpace action. */
	static readonly CreateSpaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSpaceAdminRoleAssignment action. */
	static readonly CreateSpaceAdminRoleAssignmentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteConnection action. */
	static readonly DeleteConnectionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteIdentityCenterApplication action. */
	static readonly DeleteIdentityCenterApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateIamRoleFromConnection action. */
	static readonly DisassociateIamRoleFromConnectionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateIdentityCenterApplicationFromSpace action. */
	static readonly DisassociateIdentityCenterApplicationFromSpaceConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DisassociateIdentityFromIdentityCenterApplication action. */
	static readonly DisassociateIdentityFromIdentityCenterApplicationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetBillingAuthorization action. */
	static readonly actionGetBillingAuthorizationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetConnection action. */
	static readonly actionGetConnectionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetIdentityCenterApplication action. */
	static readonly actionGetIdentityCenterApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListIamRolesForConnection action. */
	static readonly ListIamRolesForConnectionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSpacesForIdentityCenterApplication action. */
	static readonly ListSpacesForIdentityCenterApplicationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutBillingAuthorization action. */
	static readonly PutBillingAuthorizationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the SynchronizeIdentityCenterApplication action. */
	static readonly SynchronizeIdentityCenterApplicationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
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
	/** Condition keys applicable to the UpdateIdentityCenterApplication action. */
	static readonly UpdateIdentityCenterApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
