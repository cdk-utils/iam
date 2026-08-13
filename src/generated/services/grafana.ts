// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/grafana.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the grafana service.
 */
export class GrafanaActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "grafana";

	/** [Write] grafana:AssociateLicense */
	static readonly ASSOCIATE_LICENSE = "grafana:AssociateLicense";
	/** [Write] grafana:CreateWorkspace */
	static readonly CREATE_WORKSPACE = "grafana:CreateWorkspace";
	/** [Write] grafana:CreateWorkspaceApiKey */
	static readonly CREATE_WORKSPACE_API_KEY = "grafana:CreateWorkspaceApiKey";
	/** [Write] grafana:CreateWorkspaceServiceAccount */
	static readonly CREATE_WORKSPACE_SERVICE_ACCOUNT =
		"grafana:CreateWorkspaceServiceAccount";
	/** [Write] grafana:CreateWorkspaceServiceAccountToken */
	static readonly CREATE_WORKSPACE_SERVICE_ACCOUNT_TOKEN =
		"grafana:CreateWorkspaceServiceAccountToken";
	/** [Write] grafana:DeleteWorkspace */
	static readonly DELETE_WORKSPACE = "grafana:DeleteWorkspace";
	/** [Write] grafana:DeleteWorkspaceApiKey */
	static readonly DELETE_WORKSPACE_API_KEY = "grafana:DeleteWorkspaceApiKey";
	/** [Write] grafana:DeleteWorkspaceServiceAccount */
	static readonly DELETE_WORKSPACE_SERVICE_ACCOUNT =
		"grafana:DeleteWorkspaceServiceAccount";
	/** [Write] grafana:DeleteWorkspaceServiceAccountToken */
	static readonly DELETE_WORKSPACE_SERVICE_ACCOUNT_TOKEN =
		"grafana:DeleteWorkspaceServiceAccountToken";
	/** [Read] grafana:DescribeWorkspace */
	static readonly DESCRIBE_WORKSPACE = "grafana:DescribeWorkspace";
	/** [Read] grafana:DescribeWorkspaceAuthentication */
	static readonly DESCRIBE_WORKSPACE_AUTHENTICATION =
		"grafana:DescribeWorkspaceAuthentication";
	/** [Read] grafana:DescribeWorkspaceConfiguration */
	static readonly DESCRIBE_WORKSPACE_CONFIGURATION =
		"grafana:DescribeWorkspaceConfiguration";
	/** [Write] grafana:DisassociateLicense */
	static readonly DISASSOCIATE_LICENSE = "grafana:DisassociateLicense";
	/** [List] grafana:ListPermissions */
	static readonly LIST_PERMISSIONS = "grafana:ListPermissions";
	/** [Read] grafana:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "grafana:ListTagsForResource";
	/** [List] grafana:ListVersions */
	static readonly LIST_VERSIONS = "grafana:ListVersions";
	/** [Read] grafana:ListWorkspaceServiceAccountTokens */
	static readonly LIST_WORKSPACE_SERVICE_ACCOUNT_TOKENS =
		"grafana:ListWorkspaceServiceAccountTokens";
	/** [Read] grafana:ListWorkspaceServiceAccounts */
	static readonly LIST_WORKSPACE_SERVICE_ACCOUNTS =
		"grafana:ListWorkspaceServiceAccounts";
	/** [Read] grafana:ListWorkspaces */
	static readonly LIST_WORKSPACES = "grafana:ListWorkspaces";
	/** [Tagging] grafana:TagResource */
	static readonly TAG_RESOURCE = "grafana:TagResource";
	/** [Tagging] grafana:UntagResource */
	static readonly UNTAG_RESOURCE = "grafana:UntagResource";
	/** [PermissionManagement] grafana:UpdatePermissions */
	static readonly UPDATE_PERMISSIONS = "grafana:UpdatePermissions";
	/** [Write] grafana:UpdateWorkspace */
	static readonly UPDATE_WORKSPACE = "grafana:UpdateWorkspace";
	/** [Write] grafana:UpdateWorkspaceAuthentication */
	static readonly UPDATE_WORKSPACE_AUTHENTICATION =
		"grafana:UpdateWorkspaceAuthentication";
	/** [Write] grafana:UpdateWorkspaceConfiguration */
	static readonly UPDATE_WORKSPACE_CONFIGURATION =
		"grafana:UpdateWorkspaceConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		GrafanaActions.DESCRIBE_WORKSPACE,
		GrafanaActions.DESCRIBE_WORKSPACE_AUTHENTICATION,
		GrafanaActions.DESCRIBE_WORKSPACE_CONFIGURATION,
		GrafanaActions.LIST_TAGS_FOR_RESOURCE,
		GrafanaActions.LIST_WORKSPACE_SERVICE_ACCOUNT_TOKENS,
		GrafanaActions.LIST_WORKSPACE_SERVICE_ACCOUNTS,
		GrafanaActions.LIST_WORKSPACES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		GrafanaActions.ASSOCIATE_LICENSE,
		GrafanaActions.CREATE_WORKSPACE,
		GrafanaActions.CREATE_WORKSPACE_API_KEY,
		GrafanaActions.CREATE_WORKSPACE_SERVICE_ACCOUNT,
		GrafanaActions.CREATE_WORKSPACE_SERVICE_ACCOUNT_TOKEN,
		GrafanaActions.DELETE_WORKSPACE,
		GrafanaActions.DELETE_WORKSPACE_API_KEY,
		GrafanaActions.DELETE_WORKSPACE_SERVICE_ACCOUNT,
		GrafanaActions.DELETE_WORKSPACE_SERVICE_ACCOUNT_TOKEN,
		GrafanaActions.DISASSOCIATE_LICENSE,
		GrafanaActions.UPDATE_WORKSPACE,
		GrafanaActions.UPDATE_WORKSPACE_AUTHENTICATION,
		GrafanaActions.UPDATE_WORKSPACE_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		GrafanaActions.LIST_PERMISSIONS,
		GrafanaActions.LIST_VERSIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		GrafanaActions.UPDATE_PERMISSIONS,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		GrafanaActions.TAG_RESOURCE,
		GrafanaActions.UNTAG_RESOURCE,
	];
}

const WorkspaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):grafana:(?<region>[^:]*):(?<account>[^:]*):/workspaces/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for grafana resources.
 */
export class GrafanaResources {
	/**
	 * Builds an ARN for the workspace resource.
	 */
	static workspace(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:grafana:${props.region ?? "*"}:${props.account ?? "*"}:/workspaces/${props.resourceId}`;
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
	static parseWorkspaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
 * API operation to required IAM actions mapping for grafana.
 */
export class GrafanaOperations {
	/** IAM actions required for the AssociateLicense API call. */
	static readonly ASSOCIATE_LICENSE: string[] = ["grafana:AssociateLicense"];
	/** IAM actions required for the CreateWorkspace API call. */
	static readonly CREATE_WORKSPACE: string[] = [
		"grafana:CreateWorkspace",
		"iam:PassRole",
		"grafana:TagResource",
	];
	/** IAM actions required for the CreateWorkspaceApiKey API call. */
	static readonly CREATE_WORKSPACE_API_KEY: string[] = [
		"grafana:CreateWorkspaceApiKey",
	];
	/** IAM actions required for the CreateWorkspaceServiceAccount API call. */
	static readonly CREATE_WORKSPACE_SERVICE_ACCOUNT: string[] = [
		"grafana:CreateWorkspaceServiceAccount",
	];
	/** IAM actions required for the CreateWorkspaceServiceAccountToken API call. */
	static readonly CREATE_WORKSPACE_SERVICE_ACCOUNT_TOKEN: string[] = [
		"grafana:CreateWorkspaceServiceAccountToken",
	];
	/** IAM actions required for the DeleteWorkspace API call. */
	static readonly DELETE_WORKSPACE: string[] = ["grafana:DeleteWorkspace"];
	/** IAM actions required for the DeleteWorkspaceApiKey API call. */
	static readonly DELETE_WORKSPACE_API_KEY: string[] = [
		"grafana:DeleteWorkspaceApiKey",
	];
	/** IAM actions required for the DeleteWorkspaceServiceAccount API call. */
	static readonly DELETE_WORKSPACE_SERVICE_ACCOUNT: string[] = [
		"grafana:DeleteWorkspaceServiceAccount",
	];
	/** IAM actions required for the DeleteWorkspaceServiceAccountToken API call. */
	static readonly DELETE_WORKSPACE_SERVICE_ACCOUNT_TOKEN: string[] = [
		"grafana:DeleteWorkspaceServiceAccountToken",
	];
	/** IAM actions required for the DescribeWorkspace API call. */
	static readonly DESCRIBE_WORKSPACE: string[] = ["grafana:DescribeWorkspace"];
	/** IAM actions required for the DescribeWorkspaceAuthentication API call. */
	static readonly DESCRIBE_WORKSPACE_AUTHENTICATION: string[] = [
		"grafana:DescribeWorkspaceAuthentication",
	];
	/** IAM actions required for the DescribeWorkspaceConfiguration API call. */
	static readonly DESCRIBE_WORKSPACE_CONFIGURATION: string[] = [
		"grafana:DescribeWorkspaceConfiguration",
	];
	/** IAM actions required for the DisassociateLicense API call. */
	static readonly DISASSOCIATE_LICENSE: string[] = [
		"grafana:DisassociateLicense",
	];
	/** IAM actions required for the ListPermissions API call. */
	static readonly LIST_PERMISSIONS: string[] = ["grafana:ListPermissions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"grafana:ListTagsForResource",
	];
	/** IAM actions required for the ListVersions API call. */
	static readonly LIST_VERSIONS: string[] = [
		"grafana:DescribeWorkspace",
		"grafana:ListVersions",
	];
	/** IAM actions required for the ListWorkspaceServiceAccountTokens API call. */
	static readonly LIST_WORKSPACE_SERVICE_ACCOUNT_TOKENS: string[] = [
		"grafana:ListWorkspaceServiceAccountTokens",
	];
	/** IAM actions required for the ListWorkspaceServiceAccounts API call. */
	static readonly LIST_WORKSPACE_SERVICE_ACCOUNTS: string[] = [
		"grafana:ListWorkspaceServiceAccounts",
	];
	/** IAM actions required for the ListWorkspaces API call. */
	static readonly LIST_WORKSPACES: string[] = ["grafana:ListWorkspaces"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["grafana:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["grafana:UntagResource"];
	/** IAM actions required for the UpdatePermissions API call. */
	static readonly UPDATE_PERMISSIONS: string[] = ["grafana:UpdatePermissions"];
	/** IAM actions required for the UpdateWorkspace API call. */
	static readonly UPDATE_WORKSPACE: string[] = [
		"iam:PassRole",
		"grafana:UpdateWorkspace",
	];
	/** IAM actions required for the UpdateWorkspaceAuthentication API call. */
	static readonly UPDATE_WORKSPACE_AUTHENTICATION: string[] = [
		"grafana:UpdateWorkspaceAuthentication",
	];
	/** IAM actions required for the UpdateWorkspaceConfiguration API call. */
	static readonly UPDATE_WORKSPACE_CONFIGURATION: string[] = [
		"grafana:UpdateWorkspaceConfiguration",
	];
}

/**
 * Condition key constants and builders for grafana.
 */
export class GrafanaConditions {
	/** Condition keys applicable to the CreateWorkspace action. */
	static readonly CREATE_WORKSPACE_CONDITION_KEYS: string[] = [
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
