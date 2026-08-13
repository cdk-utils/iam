// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/aws-external-anthropic.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the aws-external-anthropic service.
 */
export class AWSExternalAnthropicActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "aws-external-anthropic";

	/** [Write] aws-external-anthropic:ArchiveAgent */
	static readonly ArchiveAgent = "aws-external-anthropic:ArchiveAgent";
	/** [Write] aws-external-anthropic:ArchiveEnvironment */
	static readonly ArchiveEnvironment =
		"aws-external-anthropic:ArchiveEnvironment";
	/** [Write] aws-external-anthropic:ArchiveMemoryStore */
	static readonly ArchiveMemoryStore =
		"aws-external-anthropic:ArchiveMemoryStore";
	/** [Write] aws-external-anthropic:ArchiveSession */
	static readonly ArchiveSession = "aws-external-anthropic:ArchiveSession";
	/** [Write] aws-external-anthropic:ArchiveVault */
	static readonly ArchiveVault = "aws-external-anthropic:ArchiveVault";
	/** [Write] aws-external-anthropic:ArchiveWorkspace */
	static readonly ArchiveWorkspace = "aws-external-anthropic:ArchiveWorkspace";
	/** [Write] aws-external-anthropic:AssumeConsole */
	static readonly AssumeConsole = "aws-external-anthropic:AssumeConsole";
	/** [List] aws-external-anthropic:CallWithBearerToken */
	static readonly CallWithBearerToken =
		"aws-external-anthropic:CallWithBearerToken";
	/** [Write] aws-external-anthropic:CancelBatchInference */
	static readonly CancelBatchInference =
		"aws-external-anthropic:CancelBatchInference";
	/** [Write] aws-external-anthropic:CountTokens */
	static readonly CountTokens = "aws-external-anthropic:CountTokens";
	/** [Write] aws-external-anthropic:CreateAgent */
	static readonly CreateAgent = "aws-external-anthropic:CreateAgent";
	/** [Write] aws-external-anthropic:CreateBatchInference */
	static readonly CreateBatchInference =
		"aws-external-anthropic:CreateBatchInference";
	/** [Write] aws-external-anthropic:CreateEnvironment */
	static readonly CreateEnvironment =
		"aws-external-anthropic:CreateEnvironment";
	/** [Write] aws-external-anthropic:CreateFile */
	static readonly CreateFile = "aws-external-anthropic:CreateFile";
	/** [Write] aws-external-anthropic:CreateInference */
	static readonly CreateInference = "aws-external-anthropic:CreateInference";
	/** [Write] aws-external-anthropic:CreateMemoryStore */
	static readonly CreateMemoryStore =
		"aws-external-anthropic:CreateMemoryStore";
	/** [Write] aws-external-anthropic:CreateSession */
	static readonly CreateSession = "aws-external-anthropic:CreateSession";
	/** [Write] aws-external-anthropic:CreateSkill */
	static readonly CreateSkill = "aws-external-anthropic:CreateSkill";
	/** [Write] aws-external-anthropic:CreateUserProfile */
	static readonly CreateUserProfile =
		"aws-external-anthropic:CreateUserProfile";
	/** [Write] aws-external-anthropic:CreateUserProfileEnrollmentUrl */
	static readonly CreateUserProfileEnrollmentUrl =
		"aws-external-anthropic:CreateUserProfileEnrollmentUrl";
	/** [Write] aws-external-anthropic:CreateVault */
	static readonly CreateVault = "aws-external-anthropic:CreateVault";
	/** [Write] aws-external-anthropic:CreateWebhook */
	static readonly CreateWebhook = "aws-external-anthropic:CreateWebhook";
	/** [Write] aws-external-anthropic:CreateWorkspace */
	static readonly CreateWorkspace = "aws-external-anthropic:CreateWorkspace";
	/** [Write] aws-external-anthropic:DeleteBatchInference */
	static readonly DeleteBatchInference =
		"aws-external-anthropic:DeleteBatchInference";
	/** [Write] aws-external-anthropic:DeleteEnvironment */
	static readonly DeleteEnvironment =
		"aws-external-anthropic:DeleteEnvironment";
	/** [Write] aws-external-anthropic:DeleteFile */
	static readonly DeleteFile = "aws-external-anthropic:DeleteFile";
	/** [Write] aws-external-anthropic:DeleteMemoryStore */
	static readonly DeleteMemoryStore =
		"aws-external-anthropic:DeleteMemoryStore";
	/** [Write] aws-external-anthropic:DeleteSession */
	static readonly DeleteSession = "aws-external-anthropic:DeleteSession";
	/** [Write] aws-external-anthropic:DeleteSkill */
	static readonly DeleteSkill = "aws-external-anthropic:DeleteSkill";
	/** [Write] aws-external-anthropic:DeleteVault */
	static readonly DeleteVault = "aws-external-anthropic:DeleteVault";
	/** [Write] aws-external-anthropic:DeleteWebhook */
	static readonly DeleteWebhook = "aws-external-anthropic:DeleteWebhook";
	/** [Read] aws-external-anthropic:GetAccountStatus */
	static readonly actionGetAccountStatus =
		"aws-external-anthropic:GetAccountStatus";
	/** [Read] aws-external-anthropic:GetAgent */
	static readonly actionGetAgent = "aws-external-anthropic:GetAgent";
	/** [Read] aws-external-anthropic:GetBatchInference */
	static readonly actionGetBatchInference =
		"aws-external-anthropic:GetBatchInference";
	/** [Read] aws-external-anthropic:GetEnvironment */
	static readonly actionGetEnvironment =
		"aws-external-anthropic:GetEnvironment";
	/** [Read] aws-external-anthropic:GetFile */
	static readonly actionGetFile = "aws-external-anthropic:GetFile";
	/** [Read] aws-external-anthropic:GetMemoryStore */
	static readonly actionGetMemoryStore =
		"aws-external-anthropic:GetMemoryStore";
	/** [Read] aws-external-anthropic:GetModel */
	static readonly actionGetModel = "aws-external-anthropic:GetModel";
	/** [Read] aws-external-anthropic:GetSession */
	static readonly actionGetSession = "aws-external-anthropic:GetSession";
	/** [Read] aws-external-anthropic:GetSkill */
	static readonly actionGetSkill = "aws-external-anthropic:GetSkill";
	/** [Read] aws-external-anthropic:GetUserProfile */
	static readonly actionGetUserProfile =
		"aws-external-anthropic:GetUserProfile";
	/** [Read] aws-external-anthropic:GetVault */
	static readonly actionGetVault = "aws-external-anthropic:GetVault";
	/** [Read] aws-external-anthropic:GetWebhook */
	static readonly actionGetWebhook = "aws-external-anthropic:GetWebhook";
	/** [Read] aws-external-anthropic:GetWorkspace */
	static readonly actionGetWorkspace = "aws-external-anthropic:GetWorkspace";
	/** [List] aws-external-anthropic:ListAgents */
	static readonly ListAgents = "aws-external-anthropic:ListAgents";
	/** [List] aws-external-anthropic:ListBatchInferences */
	static readonly ListBatchInferences =
		"aws-external-anthropic:ListBatchInferences";
	/** [List] aws-external-anthropic:ListEnvironments */
	static readonly ListEnvironments = "aws-external-anthropic:ListEnvironments";
	/** [List] aws-external-anthropic:ListFiles */
	static readonly ListFiles = "aws-external-anthropic:ListFiles";
	/** [List] aws-external-anthropic:ListMemoryStores */
	static readonly ListMemoryStores = "aws-external-anthropic:ListMemoryStores";
	/** [List] aws-external-anthropic:ListModels */
	static readonly ListModels = "aws-external-anthropic:ListModels";
	/** [List] aws-external-anthropic:ListSessions */
	static readonly ListSessions = "aws-external-anthropic:ListSessions";
	/** [List] aws-external-anthropic:ListSkills */
	static readonly ListSkills = "aws-external-anthropic:ListSkills";
	/** [Read] aws-external-anthropic:ListTagsForResource */
	static readonly ListTagsForResource =
		"aws-external-anthropic:ListTagsForResource";
	/** [List] aws-external-anthropic:ListUserProfiles */
	static readonly ListUserProfiles = "aws-external-anthropic:ListUserProfiles";
	/** [List] aws-external-anthropic:ListVaults */
	static readonly ListVaults = "aws-external-anthropic:ListVaults";
	/** [List] aws-external-anthropic:ListWebhooks */
	static readonly ListWebhooks = "aws-external-anthropic:ListWebhooks";
	/** [List] aws-external-anthropic:ListWorkspaces */
	static readonly ListWorkspaces = "aws-external-anthropic:ListWorkspaces";
	/** [Write] aws-external-anthropic:ProcessEnvironmentWork */
	static readonly ProcessEnvironmentWork =
		"aws-external-anthropic:ProcessEnvironmentWork";
	/** [Write] aws-external-anthropic:RotateWebhookSecret */
	static readonly RotateWebhookSecret =
		"aws-external-anthropic:RotateWebhookSecret";
	/** [Tagging] aws-external-anthropic:TagResource */
	static readonly TagResource = "aws-external-anthropic:TagResource";
	/** [Tagging] aws-external-anthropic:UntagResource */
	static readonly UntagResource = "aws-external-anthropic:UntagResource";
	/** [Write] aws-external-anthropic:UpdateAgent */
	static readonly UpdateAgent = "aws-external-anthropic:UpdateAgent";
	/** [Write] aws-external-anthropic:UpdateEnvironment */
	static readonly UpdateEnvironment =
		"aws-external-anthropic:UpdateEnvironment";
	/** [Write] aws-external-anthropic:UpdateMemoryStore */
	static readonly UpdateMemoryStore =
		"aws-external-anthropic:UpdateMemoryStore";
	/** [Write] aws-external-anthropic:UpdateSession */
	static readonly UpdateSession = "aws-external-anthropic:UpdateSession";
	/** [Write] aws-external-anthropic:UpdateSkill */
	static readonly UpdateSkill = "aws-external-anthropic:UpdateSkill";
	/** [Write] aws-external-anthropic:UpdateUserProfile */
	static readonly UpdateUserProfile =
		"aws-external-anthropic:UpdateUserProfile";
	/** [Write] aws-external-anthropic:UpdateVault */
	static readonly UpdateVault = "aws-external-anthropic:UpdateVault";
	/** [Write] aws-external-anthropic:UpdateWebhook */
	static readonly UpdateWebhook = "aws-external-anthropic:UpdateWebhook";
	/** [Write] aws-external-anthropic:UpdateWorkspace */
	static readonly UpdateWorkspace = "aws-external-anthropic:UpdateWorkspace";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AWSExternalAnthropicActions.actionGetAccountStatus,
		AWSExternalAnthropicActions.actionGetAgent,
		AWSExternalAnthropicActions.actionGetBatchInference,
		AWSExternalAnthropicActions.actionGetEnvironment,
		AWSExternalAnthropicActions.actionGetFile,
		AWSExternalAnthropicActions.actionGetMemoryStore,
		AWSExternalAnthropicActions.actionGetModel,
		AWSExternalAnthropicActions.actionGetSession,
		AWSExternalAnthropicActions.actionGetSkill,
		AWSExternalAnthropicActions.actionGetUserProfile,
		AWSExternalAnthropicActions.actionGetVault,
		AWSExternalAnthropicActions.actionGetWebhook,
		AWSExternalAnthropicActions.actionGetWorkspace,
		AWSExternalAnthropicActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AWSExternalAnthropicActions.ArchiveAgent,
		AWSExternalAnthropicActions.ArchiveEnvironment,
		AWSExternalAnthropicActions.ArchiveMemoryStore,
		AWSExternalAnthropicActions.ArchiveSession,
		AWSExternalAnthropicActions.ArchiveVault,
		AWSExternalAnthropicActions.ArchiveWorkspace,
		AWSExternalAnthropicActions.AssumeConsole,
		AWSExternalAnthropicActions.CancelBatchInference,
		AWSExternalAnthropicActions.CountTokens,
		AWSExternalAnthropicActions.CreateAgent,
		AWSExternalAnthropicActions.CreateBatchInference,
		AWSExternalAnthropicActions.CreateEnvironment,
		AWSExternalAnthropicActions.CreateFile,
		AWSExternalAnthropicActions.CreateInference,
		AWSExternalAnthropicActions.CreateMemoryStore,
		AWSExternalAnthropicActions.CreateSession,
		AWSExternalAnthropicActions.CreateSkill,
		AWSExternalAnthropicActions.CreateUserProfile,
		AWSExternalAnthropicActions.CreateUserProfileEnrollmentUrl,
		AWSExternalAnthropicActions.CreateVault,
		AWSExternalAnthropicActions.CreateWebhook,
		AWSExternalAnthropicActions.CreateWorkspace,
		AWSExternalAnthropicActions.DeleteBatchInference,
		AWSExternalAnthropicActions.DeleteEnvironment,
		AWSExternalAnthropicActions.DeleteFile,
		AWSExternalAnthropicActions.DeleteMemoryStore,
		AWSExternalAnthropicActions.DeleteSession,
		AWSExternalAnthropicActions.DeleteSkill,
		AWSExternalAnthropicActions.DeleteVault,
		AWSExternalAnthropicActions.DeleteWebhook,
		AWSExternalAnthropicActions.ProcessEnvironmentWork,
		AWSExternalAnthropicActions.RotateWebhookSecret,
		AWSExternalAnthropicActions.UpdateAgent,
		AWSExternalAnthropicActions.UpdateEnvironment,
		AWSExternalAnthropicActions.UpdateMemoryStore,
		AWSExternalAnthropicActions.UpdateSession,
		AWSExternalAnthropicActions.UpdateSkill,
		AWSExternalAnthropicActions.UpdateUserProfile,
		AWSExternalAnthropicActions.UpdateVault,
		AWSExternalAnthropicActions.UpdateWebhook,
		AWSExternalAnthropicActions.UpdateWorkspace,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AWSExternalAnthropicActions.CallWithBearerToken,
		AWSExternalAnthropicActions.ListAgents,
		AWSExternalAnthropicActions.ListBatchInferences,
		AWSExternalAnthropicActions.ListEnvironments,
		AWSExternalAnthropicActions.ListFiles,
		AWSExternalAnthropicActions.ListMemoryStores,
		AWSExternalAnthropicActions.ListModels,
		AWSExternalAnthropicActions.ListSessions,
		AWSExternalAnthropicActions.ListSkills,
		AWSExternalAnthropicActions.ListUserProfiles,
		AWSExternalAnthropicActions.ListVaults,
		AWSExternalAnthropicActions.ListWebhooks,
		AWSExternalAnthropicActions.ListWorkspaces,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AWSExternalAnthropicActions.TagResource,
		AWSExternalAnthropicActions.UntagResource,
	];
}

/**
 * Properties for building a workspace ARN.
 */
export interface AWSExternalAnthropicWorkspaceArnProps {
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
 * Parsed components of a workspace ARN.
 */
export interface AWSExternalAnthropicWorkspaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const WorkspaceArnRegex =
	/^arn:(?<partition>[^:]+):aws-external-anthropic:(?<region>[^:]*):(?<account>[^:]*):workspace\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for aws-external-anthropic resources.
 */
export class AWSExternalAnthropicResources {
	/**
	 * Builds an ARN for the workspace resource.
	 */
	static workspace(props: AWSExternalAnthropicWorkspaceArnProps): string {
		return `arn:${props.partition ?? "aws"}:aws-external-anthropic:${props.region ?? "*"}:${props.account ?? "*"}:workspace/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workspace resource.
	 */
	static isValidWorkspaceArn(arn: string): boolean {
		return WorkspaceArnRegex.test(arn);
	}

	/**
	 * Parses a workspace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkspaceArn(
		arn: string,
	): AWSExternalAnthropicWorkspaceArnComponents {
		const match = WorkspaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workspace ARN: ${arn}`);
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
 * Condition key constants and builders for aws-external-anthropic.
 */
export class AWSExternalAnthropicConditions {
	/** Condition keys applicable to the AssumeConsole action. */
	static readonly AssumeConsoleConditionKeys: string[] = [
		"aws-external-anthropic:Capability",
	];
	/** Condition keys applicable to the CallWithBearerToken action. */
	static readonly CallWithBearerTokenConditionKeys: string[] = [
		"aws-external-anthropic:BearerTokenType",
	];
	/** Condition keys applicable to the CreateWorkspace action. */
	static readonly CreateWorkspaceConditionKeys: string[] = [
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

	/** Condition key: aws-external-anthropic:BearerTokenType (String) */
	static readonly BEARER_TOKEN_TYPE = "aws-external-anthropic:BearerTokenType";
	/** Condition key: aws-external-anthropic:CalledViaConsole (Bool) */
	static readonly CALLED_VIA_CONSOLE =
		"aws-external-anthropic:CalledViaConsole";
	/** Condition key: aws-external-anthropic:Capability (String) */
	static readonly CAPABILITY = "aws-external-anthropic:Capability";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `aws-external-anthropic:BearerTokenType`.
	 */
	static bearerTokenType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "aws-external-anthropic:BearerTokenType": value },
		};
	}

	/**
	 * Generates a condition block for `aws-external-anthropic:CalledViaConsole`.
	 */
	static calledViaConsole(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "aws-external-anthropic:CalledViaConsole": value } };
	}

	/**
	 * Generates a condition block for `aws-external-anthropic:Capability`.
	 */
	static capability(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws-external-anthropic:Capability": value } };
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
