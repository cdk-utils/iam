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
	static readonly ACCEPT_CONNECTION = "codecatalyst:AcceptConnection";
	/** [Write] codecatalyst:AssociateIamRoleToConnection */
	static readonly ASSOCIATE_IAM_ROLE_TO_CONNECTION =
		"codecatalyst:AssociateIamRoleToConnection";
	/** [Write] codecatalyst:AssociateIdentityCenterApplicationToSpace */
	static readonly ASSOCIATE_IDENTITY_CENTER_APPLICATION_TO_SPACE =
		"codecatalyst:AssociateIdentityCenterApplicationToSpace";
	/** [Write] codecatalyst:AssociateIdentityToIdentityCenterApplication */
	static readonly ASSOCIATE_IDENTITY_TO_IDENTITY_CENTER_APPLICATION =
		"codecatalyst:AssociateIdentityToIdentityCenterApplication";
	/** [Write] codecatalyst:BatchAssociateIdentitiesToIdentityCenterApplication */
	static readonly BATCH_ASSOCIATE_IDENTITIES_TO_IDENTITY_CENTER_APPLICATION =
		"codecatalyst:BatchAssociateIdentitiesToIdentityCenterApplication";
	/** [Write] codecatalyst:BatchDisassociateIdentitiesFromIdentityCenterApplication */
	static readonly BATCH_DISASSOCIATE_IDENTITIES_FROM_IDENTITY_CENTER_APPLICATION =
		"codecatalyst:BatchDisassociateIdentitiesFromIdentityCenterApplication";
	/** [Write] codecatalyst:CreateIdentityCenterApplication */
	static readonly CREATE_IDENTITY_CENTER_APPLICATION =
		"codecatalyst:CreateIdentityCenterApplication";
	/** [Write] codecatalyst:CreateSpace */
	static readonly CREATE_SPACE = "codecatalyst:CreateSpace";
	/** [Write] codecatalyst:CreateSpaceAdminRoleAssignment */
	static readonly CREATE_SPACE_ADMIN_ROLE_ASSIGNMENT =
		"codecatalyst:CreateSpaceAdminRoleAssignment";
	/** [Write] codecatalyst:DeleteConnection */
	static readonly DELETE_CONNECTION = "codecatalyst:DeleteConnection";
	/** [Write] codecatalyst:DeleteIdentityCenterApplication */
	static readonly DELETE_IDENTITY_CENTER_APPLICATION =
		"codecatalyst:DeleteIdentityCenterApplication";
	/** [Write] codecatalyst:DisassociateIamRoleFromConnection */
	static readonly DISASSOCIATE_IAM_ROLE_FROM_CONNECTION =
		"codecatalyst:DisassociateIamRoleFromConnection";
	/** [Write] codecatalyst:DisassociateIdentityCenterApplicationFromSpace */
	static readonly DISASSOCIATE_IDENTITY_CENTER_APPLICATION_FROM_SPACE =
		"codecatalyst:DisassociateIdentityCenterApplicationFromSpace";
	/** [Write] codecatalyst:DisassociateIdentityFromIdentityCenterApplication */
	static readonly DISASSOCIATE_IDENTITY_FROM_IDENTITY_CENTER_APPLICATION =
		"codecatalyst:DisassociateIdentityFromIdentityCenterApplication";
	/** [Read] codecatalyst:GetBillingAuthorization */
	static readonly GET_BILLING_AUTHORIZATION =
		"codecatalyst:GetBillingAuthorization";
	/** [Read] codecatalyst:GetConnection */
	static readonly GET_CONNECTION = "codecatalyst:GetConnection";
	/** [Read] codecatalyst:GetIdentityCenterApplication */
	static readonly GET_IDENTITY_CENTER_APPLICATION =
		"codecatalyst:GetIdentityCenterApplication";
	/** [Read] codecatalyst:GetPendingConnection */
	static readonly GET_PENDING_CONNECTION = "codecatalyst:GetPendingConnection";
	/** [List] codecatalyst:ListConnections */
	static readonly LIST_CONNECTIONS = "codecatalyst:ListConnections";
	/** [List] codecatalyst:ListIamRolesForConnection */
	static readonly LIST_IAM_ROLES_FOR_CONNECTION =
		"codecatalyst:ListIamRolesForConnection";
	/** [List] codecatalyst:ListIdentityCenterApplications */
	static readonly LIST_IDENTITY_CENTER_APPLICATIONS =
		"codecatalyst:ListIdentityCenterApplications";
	/** [List] codecatalyst:ListIdentityCenterApplicationsForSpace */
	static readonly LIST_IDENTITY_CENTER_APPLICATIONS_FOR_SPACE =
		"codecatalyst:ListIdentityCenterApplicationsForSpace";
	/** [List] codecatalyst:ListSpacesForIdentityCenterApplication */
	static readonly LIST_SPACES_FOR_IDENTITY_CENTER_APPLICATION =
		"codecatalyst:ListSpacesForIdentityCenterApplication";
	/** [Read] codecatalyst:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "codecatalyst:ListTagsForResource";
	/** [Write] codecatalyst:PutBillingAuthorization */
	static readonly PUT_BILLING_AUTHORIZATION =
		"codecatalyst:PutBillingAuthorization";
	/** [Write] codecatalyst:RejectConnection */
	static readonly REJECT_CONNECTION = "codecatalyst:RejectConnection";
	/** [Write] codecatalyst:SynchronizeIdentityCenterApplication */
	static readonly SYNCHRONIZE_IDENTITY_CENTER_APPLICATION =
		"codecatalyst:SynchronizeIdentityCenterApplication";
	/** [Tagging] codecatalyst:TagResource */
	static readonly TAG_RESOURCE = "codecatalyst:TagResource";
	/** [Tagging] codecatalyst:UntagResource */
	static readonly UNTAG_RESOURCE = "codecatalyst:UntagResource";
	/** [Write] codecatalyst:UpdateIdentityCenterApplication */
	static readonly UPDATE_IDENTITY_CENTER_APPLICATION =
		"codecatalyst:UpdateIdentityCenterApplication";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodeCatalystActions.GET_BILLING_AUTHORIZATION,
		CodeCatalystActions.GET_CONNECTION,
		CodeCatalystActions.GET_IDENTITY_CENTER_APPLICATION,
		CodeCatalystActions.GET_PENDING_CONNECTION,
		CodeCatalystActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodeCatalystActions.ACCEPT_CONNECTION,
		CodeCatalystActions.ASSOCIATE_IAM_ROLE_TO_CONNECTION,
		CodeCatalystActions.ASSOCIATE_IDENTITY_CENTER_APPLICATION_TO_SPACE,
		CodeCatalystActions.ASSOCIATE_IDENTITY_TO_IDENTITY_CENTER_APPLICATION,
		CodeCatalystActions.BATCH_ASSOCIATE_IDENTITIES_TO_IDENTITY_CENTER_APPLICATION,
		CodeCatalystActions.BATCH_DISASSOCIATE_IDENTITIES_FROM_IDENTITY_CENTER_APPLICATION,
		CodeCatalystActions.CREATE_IDENTITY_CENTER_APPLICATION,
		CodeCatalystActions.CREATE_SPACE,
		CodeCatalystActions.CREATE_SPACE_ADMIN_ROLE_ASSIGNMENT,
		CodeCatalystActions.DELETE_CONNECTION,
		CodeCatalystActions.DELETE_IDENTITY_CENTER_APPLICATION,
		CodeCatalystActions.DISASSOCIATE_IAM_ROLE_FROM_CONNECTION,
		CodeCatalystActions.DISASSOCIATE_IDENTITY_CENTER_APPLICATION_FROM_SPACE,
		CodeCatalystActions.DISASSOCIATE_IDENTITY_FROM_IDENTITY_CENTER_APPLICATION,
		CodeCatalystActions.PUT_BILLING_AUTHORIZATION,
		CodeCatalystActions.REJECT_CONNECTION,
		CodeCatalystActions.SYNCHRONIZE_IDENTITY_CENTER_APPLICATION,
		CodeCatalystActions.UPDATE_IDENTITY_CENTER_APPLICATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodeCatalystActions.LIST_CONNECTIONS,
		CodeCatalystActions.LIST_IAM_ROLES_FOR_CONNECTION,
		CodeCatalystActions.LIST_IDENTITY_CENTER_APPLICATIONS,
		CodeCatalystActions.LIST_IDENTITY_CENTER_APPLICATIONS_FOR_SPACE,
		CodeCatalystActions.LIST_SPACES_FOR_IDENTITY_CENTER_APPLICATION,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodeCatalystActions.TAG_RESOURCE,
		CodeCatalystActions.UNTAG_RESOURCE,
	];
}

const ConnectionsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codecatalyst:(?<region>[^:]*):(?<account>[^:]*):/connections/(?<connectionId>[^:/?]+)$",
);
const IdentityCenterApplicationsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codecatalyst:(?<region>[^:]*):(?<account>[^:]*):/identity-center-applications/(?<identityCenterApplicationId>[^:/?]+)$",
);
const ProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codecatalyst:::space/(?<spaceId>[^:/?]+)/project/(?<projectId>[^:/?]+)$",
);
const SpaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codecatalyst:::space/(?<spaceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codecatalyst resources.
 */
export class CodeCatalystResources {
	/**
	 * Builds an ARN for the connections resource.
	 */
	static connections(props: {
		/** The ConnectionId component of the ARN. */
		readonly connectionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectionsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectionId: string;
	} {
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
	static identityCenterApplications(props: {
		/** The IdentityCenterApplicationId component of the ARN. */
		readonly identityCenterApplicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseIdentityCenterApplicationsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identityCenterApplicationId: string;
	} {
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
	static project(props: {
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
	}): string {
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
	static parseProjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		spaceId: string;
		projectId: string;
	} {
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
	static space(props: {
		/** The SpaceId component of the ARN. */
		readonly spaceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSpaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		spaceId: string;
	} {
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
	static readonly CREATE_ACCESS_TOKEN: string[] = [];
	/** IAM actions required for the CreateDevEnvironment API call. */
	static readonly CREATE_DEV_ENVIRONMENT: string[] = [];
	/** IAM actions required for the CreateProject API call. */
	static readonly CREATE_PROJECT: string[] = [];
	/** IAM actions required for the CreateSourceRepository API call. */
	static readonly CREATE_SOURCE_REPOSITORY: string[] = [];
	/** IAM actions required for the CreateSourceRepositoryBranch API call. */
	static readonly CREATE_SOURCE_REPOSITORY_BRANCH: string[] = [];
	/** IAM actions required for the DeleteAccessToken API call. */
	static readonly DELETE_ACCESS_TOKEN: string[] = [];
	/** IAM actions required for the DeleteDevEnvironment API call. */
	static readonly DELETE_DEV_ENVIRONMENT: string[] = [];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DELETE_PROJECT: string[] = [];
	/** IAM actions required for the DeleteSourceRepository API call. */
	static readonly DELETE_SOURCE_REPOSITORY: string[] = [];
	/** IAM actions required for the DeleteSpace API call. */
	static readonly DELETE_SPACE: string[] = [];
	/** IAM actions required for the GetDevEnvironment API call. */
	static readonly GET_DEV_ENVIRONMENT: string[] = [];
	/** IAM actions required for the GetProject API call. */
	static readonly GET_PROJECT: string[] = [];
	/** IAM actions required for the GetSourceRepository API call. */
	static readonly GET_SOURCE_REPOSITORY: string[] = [];
	/** IAM actions required for the GetSourceRepositoryCloneUrls API call. */
	static readonly GET_SOURCE_REPOSITORY_CLONE_URLS: string[] = [];
	/** IAM actions required for the GetSpace API call. */
	static readonly GET_SPACE: string[] = [];
	/** IAM actions required for the GetSubscription API call. */
	static readonly GET_SUBSCRIPTION: string[] = [];
	/** IAM actions required for the GetUserDetails API call. */
	static readonly GET_USER_DETAILS: string[] = [];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly GET_WORKFLOW: string[] = [];
	/** IAM actions required for the GetWorkflowRun API call. */
	static readonly GET_WORKFLOW_RUN: string[] = [];
	/** IAM actions required for the ListAccessTokens API call. */
	static readonly LIST_ACCESS_TOKENS: string[] = [];
	/** IAM actions required for the ListDevEnvironmentSessions API call. */
	static readonly LIST_DEV_ENVIRONMENT_SESSIONS: string[] = [];
	/** IAM actions required for the ListDevEnvironments API call. */
	static readonly LIST_DEV_ENVIRONMENTS: string[] = [];
	/** IAM actions required for the ListEventLogs API call. */
	static readonly LIST_EVENT_LOGS: string[] = [];
	/** IAM actions required for the ListProjects API call. */
	static readonly LIST_PROJECTS: string[] = [];
	/** IAM actions required for the ListSourceRepositories API call. */
	static readonly LIST_SOURCE_REPOSITORIES: string[] = [];
	/** IAM actions required for the ListSourceRepositoryBranches API call. */
	static readonly LIST_SOURCE_REPOSITORY_BRANCHES: string[] = [];
	/** IAM actions required for the ListSpaces API call. */
	static readonly LIST_SPACES: string[] = [];
	/** IAM actions required for the ListWorkflowRuns API call. */
	static readonly LIST_WORKFLOW_RUNS: string[] = [];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly LIST_WORKFLOWS: string[] = [];
	/** IAM actions required for the StartDevEnvironment API call. */
	static readonly START_DEV_ENVIRONMENT: string[] = [];
	/** IAM actions required for the StartDevEnvironmentSession API call. */
	static readonly START_DEV_ENVIRONMENT_SESSION: string[] = [];
	/** IAM actions required for the StartWorkflowRun API call. */
	static readonly START_WORKFLOW_RUN: string[] = [];
	/** IAM actions required for the StopDevEnvironment API call. */
	static readonly STOP_DEV_ENVIRONMENT: string[] = [];
	/** IAM actions required for the StopDevEnvironmentSession API call. */
	static readonly STOP_DEV_ENVIRONMENT_SESSION: string[] = [];
	/** IAM actions required for the UpdateDevEnvironment API call. */
	static readonly UPDATE_DEV_ENVIRONMENT: string[] = [];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UPDATE_PROJECT: string[] = [];
	/** IAM actions required for the UpdateSpace API call. */
	static readonly UPDATE_SPACE: string[] = [];
	/** IAM actions required for the VerifySession API call. */
	static readonly VERIFY_SESSION: string[] = [];
}

/**
 * Condition key constants and builders for codecatalyst.
 */
export class CodeCatalystConditions {
	/** Condition keys applicable to the AcceptConnection action. */
	static readonly ACCEPT_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the AssociateIamRoleToConnection action. */
	static readonly ASSOCIATE_IAM_ROLE_TO_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the AssociateIdentityCenterApplicationToSpace action. */
	static readonly ASSOCIATE_IDENTITY_CENTER_APPLICATION_TO_SPACE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the AssociateIdentityToIdentityCenterApplication action. */
	static readonly ASSOCIATE_IDENTITY_TO_IDENTITY_CENTER_APPLICATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the BatchAssociateIdentitiesToIdentityCenterApplication action. */
	static readonly BATCH_ASSOCIATE_IDENTITIES_TO_IDENTITY_CENTER_APPLICATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the BatchDisassociateIdentitiesFromIdentityCenterApplication action. */
	static readonly BATCH_DISASSOCIATE_IDENTITIES_FROM_IDENTITY_CENTER_APPLICATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateIdentityCenterApplication action. */
	static readonly CREATE_IDENTITY_CENTER_APPLICATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateSpace action. */
	static readonly CREATE_SPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSpaceAdminRoleAssignment action. */
	static readonly CREATE_SPACE_ADMIN_ROLE_ASSIGNMENT_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteConnection action. */
	static readonly DELETE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteIdentityCenterApplication action. */
	static readonly DELETE_IDENTITY_CENTER_APPLICATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DisassociateIamRoleFromConnection action. */
	static readonly DISASSOCIATE_IAM_ROLE_FROM_CONNECTION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DisassociateIdentityCenterApplicationFromSpace action. */
	static readonly DISASSOCIATE_IDENTITY_CENTER_APPLICATION_FROM_SPACE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DisassociateIdentityFromIdentityCenterApplication action. */
	static readonly DISASSOCIATE_IDENTITY_FROM_IDENTITY_CENTER_APPLICATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetBillingAuthorization action. */
	static readonly GET_BILLING_AUTHORIZATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetConnection action. */
	static readonly GET_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetIdentityCenterApplication action. */
	static readonly GET_IDENTITY_CENTER_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListIamRolesForConnection action. */
	static readonly LIST_IAM_ROLES_FOR_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSpacesForIdentityCenterApplication action. */
	static readonly LIST_SPACES_FOR_IDENTITY_CENTER_APPLICATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutBillingAuthorization action. */
	static readonly PUT_BILLING_AUTHORIZATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the SynchronizeIdentityCenterApplication action. */
	static readonly SYNCHRONIZE_IDENTITY_CENTER_APPLICATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateIdentityCenterApplication action. */
	static readonly UPDATE_IDENTITY_CENTER_APPLICATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];

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
