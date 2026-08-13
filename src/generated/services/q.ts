// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/q.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the q service.
 */
export class QActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "q";

	/** [Write] q:AssociateConnectorResource */
	static readonly AssociateConnectorResource = "q:AssociateConnectorResource";
	/** [Write] q:AssociateLoginDomain */
	static readonly AssociateLoginDomain = "q:AssociateLoginDomain";
	/** [Read] q:BatchDescribeGroups */
	static readonly BatchDescribeGroups = "q:BatchDescribeGroups";
	/** [Read] q:BatchDescribeUsers */
	static readonly BatchDescribeUsers = "q:BatchDescribeUsers";
	/** [Read] q:BatchGetGroups */
	static readonly BatchGetGroups = "q:BatchGetGroups";
	/** [Read] q:BatchGetUsers */
	static readonly BatchGetUsers = "q:BatchGetUsers";
	/** [Write] q:CreateArtifact */
	static readonly CreateArtifact = "q:CreateArtifact";
	/** [Write] q:CreateAssignment */
	static readonly CreateAssignment = "q:CreateAssignment";
	/** [Write] q:CreateAuthGrant */
	static readonly CreateAuthGrant = "q:CreateAuthGrant";
	/** [Write] q:CreateOAuthAppConnection */
	static readonly CreateOAuthAppConnection = "q:CreateOAuthAppConnection";
	/** [Write] q:CreatePlugin */
	static readonly CreatePlugin = "q:CreatePlugin";
	/** [Write] q:CreateScimAccessToken */
	static readonly CreateScimAccessToken = "q:CreateScimAccessToken";
	/** [Write] q:DeleteAssignment */
	static readonly DeleteAssignment = "q:DeleteAssignment";
	/** [Write] q:DeleteConversation */
	static readonly DeleteConversation = "q:DeleteConversation";
	/** [Write] q:DeleteOAuthAppConnection */
	static readonly DeleteOAuthAppConnection = "q:DeleteOAuthAppConnection";
	/** [Write] q:DeletePlugin */
	static readonly DeletePlugin = "q:DeletePlugin";
	/** [Write] q:DeleteScimAccessToken */
	static readonly DeleteScimAccessToken = "q:DeleteScimAccessToken";
	/** [Write] q:DisassociateLoginDomain */
	static readonly DisassociateLoginDomain = "q:DisassociateLoginDomain";
	/** [Read] q:GenerateCodeFromCommands */
	static readonly GenerateCodeFromCommands = "q:GenerateCodeFromCommands";
	/** [Read] q:GenerateCodeRecommendations */
	static readonly GenerateCodeRecommendations = "q:GenerateCodeRecommendations";
	/** [Read] q:GetArtifact */
	static readonly actionGetArtifact = "q:GetArtifact";
	/** [Read] q:GetArtifactActionResult */
	static readonly actionGetArtifactActionResult = "q:GetArtifactActionResult";
	/** [Read] q:GetConnector */
	static readonly actionGetConnector = "q:GetConnector";
	/** [Read] q:GetConversation */
	static readonly actionGetConversation = "q:GetConversation";
	/** [Read] q:GetIdentityMetadata */
	static readonly actionGetIdentityMetadata = "q:GetIdentityMetadata";
	/** [Read] q:GetPlugin */
	static readonly actionGetPlugin = "q:GetPlugin";
	/** [Read] q:GetTroubleshootingResults */
	static readonly actionGetTroubleshootingResults =
		"q:GetTroubleshootingResults";
	/** [Read] q:ListConversations */
	static readonly ListConversations = "q:ListConversations";
	/** [List] q:ListDashboardMetrics */
	static readonly ListDashboardMetrics = "q:ListDashboardMetrics";
	/** [List] q:ListGroups */
	static readonly ListGroups = "q:ListGroups";
	/** [List] q:ListLoginDomains */
	static readonly ListLoginDomains = "q:ListLoginDomains";
	/** [List] q:ListPluginProviders */
	static readonly ListPluginProviders = "q:ListPluginProviders";
	/** [List] q:ListPlugins */
	static readonly ListPlugins = "q:ListPlugins";
	/** [List] q:ListScimAccessTokens */
	static readonly ListScimAccessTokens = "q:ListScimAccessTokens";
	/** [List] q:ListTagsForResource */
	static readonly ListTagsForResource = "q:ListTagsForResource";
	/** [List] q:ListUsers */
	static readonly ListUsers = "q:ListUsers";
	/** [Write] q:PassRequest */
	static readonly PassRequest = "q:PassRequest";
	/** [Write] q:PerformArtifactAction */
	static readonly PerformArtifactAction = "q:PerformArtifactAction";
	/** [Write] q:RejectConnector */
	static readonly RejectConnector = "q:RejectConnector";
	/** [Write] q:SendEvent */
	static readonly SendEvent = "q:SendEvent";
	/** [Write] q:SendMessage */
	static readonly SendMessage = "q:SendMessage";
	/** [Write] q:StartConversation */
	static readonly StartConversation = "q:StartConversation";
	/** [Write] q:StartTroubleshootingAnalysis */
	static readonly StartTroubleshootingAnalysis =
		"q:StartTroubleshootingAnalysis";
	/** [Write] q:StartTroubleshootingResolutionExplanation */
	static readonly StartTroubleshootingResolutionExplanation =
		"q:StartTroubleshootingResolutionExplanation";
	/** [Tagging] q:TagResource */
	static readonly TagResource = "q:TagResource";
	/** [Tagging] q:UntagResource */
	static readonly UntagResource = "q:UntagResource";
	/** [Write] q:UpdateAssignment */
	static readonly UpdateAssignment = "q:UpdateAssignment";
	/** [Write] q:UpdateAuthGrant */
	static readonly UpdateAuthGrant = "q:UpdateAuthGrant";
	/** [Write] q:UpdateConversation */
	static readonly UpdateConversation = "q:UpdateConversation";
	/** [Write] q:UpdateOAuthAppConnection */
	static readonly UpdateOAuthAppConnection = "q:UpdateOAuthAppConnection";
	/** [Write] q:UpdatePlugin */
	static readonly UpdatePlugin = "q:UpdatePlugin";
	/** [Write] q:UpdateTroubleshootingCommandResult */
	static readonly UpdateTroubleshootingCommandResult =
		"q:UpdateTroubleshootingCommandResult";
	/** [Write] q:UsePlugin */
	static readonly UsePlugin = "q:UsePlugin";
	/** [Write] q:VerifyOAuthAppConnection */
	static readonly VerifyOAuthAppConnection = "q:VerifyOAuthAppConnection";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		QActions.BatchDescribeGroups,
		QActions.BatchDescribeUsers,
		QActions.BatchGetGroups,
		QActions.BatchGetUsers,
		QActions.GenerateCodeFromCommands,
		QActions.GenerateCodeRecommendations,
		QActions.actionGetArtifact,
		QActions.actionGetArtifactActionResult,
		QActions.actionGetConnector,
		QActions.actionGetConversation,
		QActions.actionGetIdentityMetadata,
		QActions.actionGetPlugin,
		QActions.actionGetTroubleshootingResults,
		QActions.ListConversations,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		QActions.AssociateConnectorResource,
		QActions.AssociateLoginDomain,
		QActions.CreateArtifact,
		QActions.CreateAssignment,
		QActions.CreateAuthGrant,
		QActions.CreateOAuthAppConnection,
		QActions.CreatePlugin,
		QActions.CreateScimAccessToken,
		QActions.DeleteAssignment,
		QActions.DeleteConversation,
		QActions.DeleteOAuthAppConnection,
		QActions.DeletePlugin,
		QActions.DeleteScimAccessToken,
		QActions.DisassociateLoginDomain,
		QActions.PassRequest,
		QActions.PerformArtifactAction,
		QActions.RejectConnector,
		QActions.SendEvent,
		QActions.SendMessage,
		QActions.StartConversation,
		QActions.StartTroubleshootingAnalysis,
		QActions.StartTroubleshootingResolutionExplanation,
		QActions.UpdateAssignment,
		QActions.UpdateAuthGrant,
		QActions.UpdateConversation,
		QActions.UpdateOAuthAppConnection,
		QActions.UpdatePlugin,
		QActions.UpdateTroubleshootingCommandResult,
		QActions.UsePlugin,
		QActions.VerifyOAuthAppConnection,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		QActions.ListDashboardMetrics,
		QActions.ListGroups,
		QActions.ListLoginDomains,
		QActions.ListPluginProviders,
		QActions.ListPlugins,
		QActions.ListScimAccessTokens,
		QActions.ListTagsForResource,
		QActions.ListUsers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		QActions.TagResource,
		QActions.UntagResource,
	];
}

/**
 * Properties for building a plugin ARN.
 */
export interface QPluginArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a plugin ARN.
 */
export interface QPluginArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

/**
 * Properties for building a profile ARN.
 */
export interface QProfileArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a profile ARN.
 */
export interface QProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

const PluginArnRegex =
	/^arn:(?<partition>[^:]+):qdeveloper:(?<region>[^:]*):(?<account>[^:]*):plugin\/(?<identifier>[^:/?]+)$/;
const ProfileArnRegex =
	/^arn:(?<partition>[^:]+):codewhisperer:(?<region>[^:]*):(?<account>[^:]*):profile\/(?<identifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for q resources.
 */
export class QResources {
	/**
	 * Builds an ARN for the plugin resource.
	 */
	static plugin(props: QPluginArnProps): string {
		return `arn:${props.partition ?? "aws"}:qdeveloper:${props.region ?? "*"}:${props.account ?? "*"}:plugin/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the plugin resource.
	 */
	static isValidPluginArn(arn: string): boolean {
		return PluginArnRegex.test(arn);
	}

	/**
	 * Parses a plugin ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePluginArn(arn: string): QPluginArnComponents {
		const match = PluginArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid plugin ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the profile resource.
	 */
	static profile(props: QProfileArnProps): string {
		return `arn:${props.partition ?? "aws"}:codewhisperer:${props.region ?? "*"}:${props.account ?? "*"}:profile/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the profile resource.
	 */
	static isValidProfileArn(arn: string): boolean {
		return ProfileArnRegex.test(arn);
	}

	/**
	 * Parses a profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProfileArn(arn: string): QProfileArnComponents {
		const match = ProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}
}

/**
 * Condition key constants and builders for q.
 */
export class QConditions {
	/** Condition keys applicable to the CreateAssignment action. */
	static readonly CreateAssignmentConditionKeys: string[] = [
		"identitystore:GroupId",
		"identitystore:UserId",
	];
	/** Condition keys applicable to the CreatePlugin action. */
	static readonly CreatePluginConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAssignment action. */
	static readonly DeleteAssignmentConditionKeys: string[] = [
		"identitystore:GroupId",
		"identitystore:UserId",
	];
	/** Condition keys applicable to the DeletePlugin action. */
	static readonly DeletePluginConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetPlugin action. */
	static readonly actionGetPluginConditionKeys: string[] = [
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
	/** Condition keys applicable to the UpdateAssignment action. */
	static readonly UpdateAssignmentConditionKeys: string[] = [
		"identitystore:GroupId",
		"identitystore:UserId",
	];
	/** Condition keys applicable to the UpdatePlugin action. */
	static readonly UpdatePluginConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: identitystore:GroupId (ArrayOfString) */
	static readonly GROUP_ID = "identitystore:GroupId";
	/** Condition key: identitystore:UserId (ArrayOfString) */
	static readonly USER_ID = "identitystore:UserId";

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
