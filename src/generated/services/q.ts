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
	static readonly ASSOCIATE_CONNECTOR_RESOURCE = "q:AssociateConnectorResource";
	/** [Write] q:AssociateLoginDomain */
	static readonly ASSOCIATE_LOGIN_DOMAIN = "q:AssociateLoginDomain";
	/** [Read] q:BatchDescribeGroups */
	static readonly BATCH_DESCRIBE_GROUPS = "q:BatchDescribeGroups";
	/** [Read] q:BatchDescribeUsers */
	static readonly BATCH_DESCRIBE_USERS = "q:BatchDescribeUsers";
	/** [Read] q:BatchGetGroups */
	static readonly BATCH_GET_GROUPS = "q:BatchGetGroups";
	/** [Read] q:BatchGetUsers */
	static readonly BATCH_GET_USERS = "q:BatchGetUsers";
	/** [Write] q:CreateArtifact */
	static readonly CREATE_ARTIFACT = "q:CreateArtifact";
	/** [Write] q:CreateAssignment */
	static readonly CREATE_ASSIGNMENT = "q:CreateAssignment";
	/** [Write] q:CreateAuthGrant */
	static readonly CREATE_AUTH_GRANT = "q:CreateAuthGrant";
	/** [Write] q:CreateOAuthAppConnection */
	static readonly CREATE_O_AUTH_APP_CONNECTION = "q:CreateOAuthAppConnection";
	/** [Write] q:CreatePlugin */
	static readonly CREATE_PLUGIN = "q:CreatePlugin";
	/** [Write] q:CreateScimAccessToken */
	static readonly CREATE_SCIM_ACCESS_TOKEN = "q:CreateScimAccessToken";
	/** [Write] q:DeleteAssignment */
	static readonly DELETE_ASSIGNMENT = "q:DeleteAssignment";
	/** [Write] q:DeleteConversation */
	static readonly DELETE_CONVERSATION = "q:DeleteConversation";
	/** [Write] q:DeleteOAuthAppConnection */
	static readonly DELETE_O_AUTH_APP_CONNECTION = "q:DeleteOAuthAppConnection";
	/** [Write] q:DeletePlugin */
	static readonly DELETE_PLUGIN = "q:DeletePlugin";
	/** [Write] q:DeleteScimAccessToken */
	static readonly DELETE_SCIM_ACCESS_TOKEN = "q:DeleteScimAccessToken";
	/** [Write] q:DisassociateLoginDomain */
	static readonly DISASSOCIATE_LOGIN_DOMAIN = "q:DisassociateLoginDomain";
	/** [Read] q:GenerateCodeFromCommands */
	static readonly GENERATE_CODE_FROM_COMMANDS = "q:GenerateCodeFromCommands";
	/** [Read] q:GenerateCodeRecommendations */
	static readonly GENERATE_CODE_RECOMMENDATIONS =
		"q:GenerateCodeRecommendations";
	/** [Read] q:GetArtifact */
	static readonly GET_ARTIFACT = "q:GetArtifact";
	/** [Read] q:GetArtifactActionResult */
	static readonly GET_ARTIFACT_ACTION_RESULT = "q:GetArtifactActionResult";
	/** [Read] q:GetConnector */
	static readonly GET_CONNECTOR = "q:GetConnector";
	/** [Read] q:GetConversation */
	static readonly GET_CONVERSATION = "q:GetConversation";
	/** [Read] q:GetIdentityMetadata */
	static readonly GET_IDENTITY_METADATA = "q:GetIdentityMetadata";
	/** [Read] q:GetPlugin */
	static readonly GET_PLUGIN = "q:GetPlugin";
	/** [Read] q:GetTroubleshootingResults */
	static readonly GET_TROUBLESHOOTING_RESULTS = "q:GetTroubleshootingResults";
	/** [Read] q:ListConversations */
	static readonly LIST_CONVERSATIONS = "q:ListConversations";
	/** [List] q:ListDashboardMetrics */
	static readonly LIST_DASHBOARD_METRICS = "q:ListDashboardMetrics";
	/** [List] q:ListGroups */
	static readonly LIST_GROUPS = "q:ListGroups";
	/** [List] q:ListLoginDomains */
	static readonly LIST_LOGIN_DOMAINS = "q:ListLoginDomains";
	/** [List] q:ListPluginProviders */
	static readonly LIST_PLUGIN_PROVIDERS = "q:ListPluginProviders";
	/** [List] q:ListPlugins */
	static readonly LIST_PLUGINS = "q:ListPlugins";
	/** [List] q:ListScimAccessTokens */
	static readonly LIST_SCIM_ACCESS_TOKENS = "q:ListScimAccessTokens";
	/** [List] q:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "q:ListTagsForResource";
	/** [List] q:ListUsers */
	static readonly LIST_USERS = "q:ListUsers";
	/** [Write] q:PassRequest */
	static readonly PASS_REQUEST = "q:PassRequest";
	/** [Write] q:PerformArtifactAction */
	static readonly PERFORM_ARTIFACT_ACTION = "q:PerformArtifactAction";
	/** [Write] q:RejectConnector */
	static readonly REJECT_CONNECTOR = "q:RejectConnector";
	/** [Write] q:SendEvent */
	static readonly SEND_EVENT = "q:SendEvent";
	/** [Write] q:SendMessage */
	static readonly SEND_MESSAGE = "q:SendMessage";
	/** [Write] q:StartConversation */
	static readonly START_CONVERSATION = "q:StartConversation";
	/** [Write] q:StartTroubleshootingAnalysis */
	static readonly START_TROUBLESHOOTING_ANALYSIS =
		"q:StartTroubleshootingAnalysis";
	/** [Write] q:StartTroubleshootingResolutionExplanation */
	static readonly START_TROUBLESHOOTING_RESOLUTION_EXPLANATION =
		"q:StartTroubleshootingResolutionExplanation";
	/** [Tagging] q:TagResource */
	static readonly TAG_RESOURCE = "q:TagResource";
	/** [Tagging] q:UntagResource */
	static readonly UNTAG_RESOURCE = "q:UntagResource";
	/** [Write] q:UpdateAssignment */
	static readonly UPDATE_ASSIGNMENT = "q:UpdateAssignment";
	/** [Write] q:UpdateAuthGrant */
	static readonly UPDATE_AUTH_GRANT = "q:UpdateAuthGrant";
	/** [Write] q:UpdateConversation */
	static readonly UPDATE_CONVERSATION = "q:UpdateConversation";
	/** [Write] q:UpdateOAuthAppConnection */
	static readonly UPDATE_O_AUTH_APP_CONNECTION = "q:UpdateOAuthAppConnection";
	/** [Write] q:UpdatePlugin */
	static readonly UPDATE_PLUGIN = "q:UpdatePlugin";
	/** [Write] q:UpdateTroubleshootingCommandResult */
	static readonly UPDATE_TROUBLESHOOTING_COMMAND_RESULT =
		"q:UpdateTroubleshootingCommandResult";
	/** [Write] q:UsePlugin */
	static readonly USE_PLUGIN = "q:UsePlugin";
	/** [Write] q:VerifyOAuthAppConnection */
	static readonly VERIFY_O_AUTH_APP_CONNECTION = "q:VerifyOAuthAppConnection";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		QActions.BATCH_DESCRIBE_GROUPS,
		QActions.BATCH_DESCRIBE_USERS,
		QActions.BATCH_GET_GROUPS,
		QActions.BATCH_GET_USERS,
		QActions.GENERATE_CODE_FROM_COMMANDS,
		QActions.GENERATE_CODE_RECOMMENDATIONS,
		QActions.GET_ARTIFACT,
		QActions.GET_ARTIFACT_ACTION_RESULT,
		QActions.GET_CONNECTOR,
		QActions.GET_CONVERSATION,
		QActions.GET_IDENTITY_METADATA,
		QActions.GET_PLUGIN,
		QActions.GET_TROUBLESHOOTING_RESULTS,
		QActions.LIST_CONVERSATIONS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		QActions.ASSOCIATE_CONNECTOR_RESOURCE,
		QActions.ASSOCIATE_LOGIN_DOMAIN,
		QActions.CREATE_ARTIFACT,
		QActions.CREATE_ASSIGNMENT,
		QActions.CREATE_AUTH_GRANT,
		QActions.CREATE_O_AUTH_APP_CONNECTION,
		QActions.CREATE_PLUGIN,
		QActions.CREATE_SCIM_ACCESS_TOKEN,
		QActions.DELETE_ASSIGNMENT,
		QActions.DELETE_CONVERSATION,
		QActions.DELETE_O_AUTH_APP_CONNECTION,
		QActions.DELETE_PLUGIN,
		QActions.DELETE_SCIM_ACCESS_TOKEN,
		QActions.DISASSOCIATE_LOGIN_DOMAIN,
		QActions.PASS_REQUEST,
		QActions.PERFORM_ARTIFACT_ACTION,
		QActions.REJECT_CONNECTOR,
		QActions.SEND_EVENT,
		QActions.SEND_MESSAGE,
		QActions.START_CONVERSATION,
		QActions.START_TROUBLESHOOTING_ANALYSIS,
		QActions.START_TROUBLESHOOTING_RESOLUTION_EXPLANATION,
		QActions.UPDATE_ASSIGNMENT,
		QActions.UPDATE_AUTH_GRANT,
		QActions.UPDATE_CONVERSATION,
		QActions.UPDATE_O_AUTH_APP_CONNECTION,
		QActions.UPDATE_PLUGIN,
		QActions.UPDATE_TROUBLESHOOTING_COMMAND_RESULT,
		QActions.USE_PLUGIN,
		QActions.VERIFY_O_AUTH_APP_CONNECTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		QActions.LIST_DASHBOARD_METRICS,
		QActions.LIST_GROUPS,
		QActions.LIST_LOGIN_DOMAINS,
		QActions.LIST_PLUGIN_PROVIDERS,
		QActions.LIST_PLUGINS,
		QActions.LIST_SCIM_ACCESS_TOKENS,
		QActions.LIST_TAGS_FOR_RESOURCE,
		QActions.LIST_USERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		QActions.TAG_RESOURCE,
		QActions.UNTAG_RESOURCE,
	];
}

const PluginArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qdeveloper:(?<region>[^:]*):(?<account>[^:]*):plugin/(?<identifier>[^:/?]+)$",
);
const ProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codewhisperer:(?<region>[^:]*):(?<account>[^:]*):profile/(?<identifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for q resources.
 */
export class QResources {
	/**
	 * Builds an ARN for the plugin resource.
	 */
	static plugin(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePluginArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identifier: string;
	} {
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
	static profile(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identifier: string;
	} {
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
	static readonly CREATE_ASSIGNMENT_CONDITION_KEYS: string[] = [
		"identitystore:GroupId",
		"identitystore:UserId",
	];
	/** Condition keys applicable to the CreatePlugin action. */
	static readonly CREATE_PLUGIN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAssignment action. */
	static readonly DELETE_ASSIGNMENT_CONDITION_KEYS: string[] = [
		"identitystore:GroupId",
		"identitystore:UserId",
	];
	/** Condition keys applicable to the DeletePlugin action. */
	static readonly DELETE_PLUGIN_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetPlugin action. */
	static readonly GET_PLUGIN_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
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
	/** Condition keys applicable to the UpdateAssignment action. */
	static readonly UPDATE_ASSIGNMENT_CONDITION_KEYS: string[] = [
		"identitystore:GroupId",
		"identitystore:UserId",
	];
	/** Condition keys applicable to the UpdatePlugin action. */
	static readonly UPDATE_PLUGIN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
