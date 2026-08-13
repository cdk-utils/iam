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
	static readonly AssociateLicense = "grafana:AssociateLicense";
	/** [Write] grafana:CreateWorkspace */
	static readonly CreateWorkspace = "grafana:CreateWorkspace";
	/** [Write] grafana:CreateWorkspaceApiKey */
	static readonly CreateWorkspaceApiKey = "grafana:CreateWorkspaceApiKey";
	/** [Write] grafana:CreateWorkspaceServiceAccount */
	static readonly CreateWorkspaceServiceAccount =
		"grafana:CreateWorkspaceServiceAccount";
	/** [Write] grafana:CreateWorkspaceServiceAccountToken */
	static readonly CreateWorkspaceServiceAccountToken =
		"grafana:CreateWorkspaceServiceAccountToken";
	/** [Write] grafana:DeleteWorkspace */
	static readonly DeleteWorkspace = "grafana:DeleteWorkspace";
	/** [Write] grafana:DeleteWorkspaceApiKey */
	static readonly DeleteWorkspaceApiKey = "grafana:DeleteWorkspaceApiKey";
	/** [Write] grafana:DeleteWorkspaceServiceAccount */
	static readonly DeleteWorkspaceServiceAccount =
		"grafana:DeleteWorkspaceServiceAccount";
	/** [Write] grafana:DeleteWorkspaceServiceAccountToken */
	static readonly DeleteWorkspaceServiceAccountToken =
		"grafana:DeleteWorkspaceServiceAccountToken";
	/** [Read] grafana:DescribeWorkspace */
	static readonly DescribeWorkspace = "grafana:DescribeWorkspace";
	/** [Read] grafana:DescribeWorkspaceAuthentication */
	static readonly DescribeWorkspaceAuthentication =
		"grafana:DescribeWorkspaceAuthentication";
	/** [Read] grafana:DescribeWorkspaceConfiguration */
	static readonly DescribeWorkspaceConfiguration =
		"grafana:DescribeWorkspaceConfiguration";
	/** [Write] grafana:DisassociateLicense */
	static readonly DisassociateLicense = "grafana:DisassociateLicense";
	/** [List] grafana:ListPermissions */
	static readonly ListPermissions = "grafana:ListPermissions";
	/** [Read] grafana:ListTagsForResource */
	static readonly ListTagsForResource = "grafana:ListTagsForResource";
	/** [List] grafana:ListVersions */
	static readonly ListVersions = "grafana:ListVersions";
	/** [Read] grafana:ListWorkspaceServiceAccountTokens */
	static readonly ListWorkspaceServiceAccountTokens =
		"grafana:ListWorkspaceServiceAccountTokens";
	/** [Read] grafana:ListWorkspaceServiceAccounts */
	static readonly ListWorkspaceServiceAccounts =
		"grafana:ListWorkspaceServiceAccounts";
	/** [Read] grafana:ListWorkspaces */
	static readonly ListWorkspaces = "grafana:ListWorkspaces";
	/** [Tagging] grafana:TagResource */
	static readonly TagResource = "grafana:TagResource";
	/** [Tagging] grafana:UntagResource */
	static readonly UntagResource = "grafana:UntagResource";
	/** [PermissionManagement] grafana:UpdatePermissions */
	static readonly UpdatePermissions = "grafana:UpdatePermissions";
	/** [Write] grafana:UpdateWorkspace */
	static readonly UpdateWorkspace = "grafana:UpdateWorkspace";
	/** [Write] grafana:UpdateWorkspaceAuthentication */
	static readonly UpdateWorkspaceAuthentication =
		"grafana:UpdateWorkspaceAuthentication";
	/** [Write] grafana:UpdateWorkspaceConfiguration */
	static readonly UpdateWorkspaceConfiguration =
		"grafana:UpdateWorkspaceConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GrafanaActions.DescribeWorkspace,
		GrafanaActions.DescribeWorkspaceAuthentication,
		GrafanaActions.DescribeWorkspaceConfiguration,
		GrafanaActions.ListTagsForResource,
		GrafanaActions.ListWorkspaceServiceAccountTokens,
		GrafanaActions.ListWorkspaceServiceAccounts,
		GrafanaActions.ListWorkspaces,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		GrafanaActions.AssociateLicense,
		GrafanaActions.CreateWorkspace,
		GrafanaActions.CreateWorkspaceApiKey,
		GrafanaActions.CreateWorkspaceServiceAccount,
		GrafanaActions.CreateWorkspaceServiceAccountToken,
		GrafanaActions.DeleteWorkspace,
		GrafanaActions.DeleteWorkspaceApiKey,
		GrafanaActions.DeleteWorkspaceServiceAccount,
		GrafanaActions.DeleteWorkspaceServiceAccountToken,
		GrafanaActions.DisassociateLicense,
		GrafanaActions.UpdateWorkspace,
		GrafanaActions.UpdateWorkspaceAuthentication,
		GrafanaActions.UpdateWorkspaceConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		GrafanaActions.ListPermissions,
		GrafanaActions.ListVersions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		GrafanaActions.UpdatePermissions,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		GrafanaActions.TagResource,
		GrafanaActions.UntagResource,
	];
}

/**
 * Properties for building a workspace ARN.
 */
export interface GrafanaWorkspaceArnProps {
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
export interface GrafanaWorkspaceArnComponents {
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
	/^arn:(?<partition>[^:]+):grafana:(?<region>[^:]*):(?<account>[^:]*):\/workspaces\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for grafana resources.
 */
export class GrafanaResources {
	/**
	 * Builds an ARN for the workspace resource.
	 */
	static workspace(props: GrafanaWorkspaceArnProps): string {
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
	static parseWorkspaceArn(arn: string): GrafanaWorkspaceArnComponents {
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
	static readonly AssociateLicense: string[] = ["grafana:AssociateLicense"];
	/** IAM actions required for the CreateWorkspace API call. */
	static readonly CreateWorkspace: string[] = [
		"grafana:CreateWorkspace",
		"iam:PassRole",
		"grafana:TagResource",
	];
	/** IAM actions required for the CreateWorkspaceApiKey API call. */
	static readonly CreateWorkspaceApiKey: string[] = [
		"grafana:CreateWorkspaceApiKey",
	];
	/** IAM actions required for the CreateWorkspaceServiceAccount API call. */
	static readonly CreateWorkspaceServiceAccount: string[] = [
		"grafana:CreateWorkspaceServiceAccount",
	];
	/** IAM actions required for the CreateWorkspaceServiceAccountToken API call. */
	static readonly CreateWorkspaceServiceAccountToken: string[] = [
		"grafana:CreateWorkspaceServiceAccountToken",
	];
	/** IAM actions required for the DeleteWorkspace API call. */
	static readonly DeleteWorkspace: string[] = ["grafana:DeleteWorkspace"];
	/** IAM actions required for the DeleteWorkspaceApiKey API call. */
	static readonly DeleteWorkspaceApiKey: string[] = [
		"grafana:DeleteWorkspaceApiKey",
	];
	/** IAM actions required for the DeleteWorkspaceServiceAccount API call. */
	static readonly DeleteWorkspaceServiceAccount: string[] = [
		"grafana:DeleteWorkspaceServiceAccount",
	];
	/** IAM actions required for the DeleteWorkspaceServiceAccountToken API call. */
	static readonly DeleteWorkspaceServiceAccountToken: string[] = [
		"grafana:DeleteWorkspaceServiceAccountToken",
	];
	/** IAM actions required for the DescribeWorkspace API call. */
	static readonly DescribeWorkspace: string[] = ["grafana:DescribeWorkspace"];
	/** IAM actions required for the DescribeWorkspaceAuthentication API call. */
	static readonly DescribeWorkspaceAuthentication: string[] = [
		"grafana:DescribeWorkspaceAuthentication",
	];
	/** IAM actions required for the DescribeWorkspaceConfiguration API call. */
	static readonly DescribeWorkspaceConfiguration: string[] = [
		"grafana:DescribeWorkspaceConfiguration",
	];
	/** IAM actions required for the DisassociateLicense API call. */
	static readonly DisassociateLicense: string[] = [
		"grafana:DisassociateLicense",
	];
	/** IAM actions required for the ListPermissions API call. */
	static readonly ListPermissions: string[] = ["grafana:ListPermissions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"grafana:ListTagsForResource",
	];
	/** IAM actions required for the ListVersions API call. */
	static readonly ListVersions: string[] = [
		"grafana:DescribeWorkspace",
		"grafana:ListVersions",
	];
	/** IAM actions required for the ListWorkspaceServiceAccountTokens API call. */
	static readonly ListWorkspaceServiceAccountTokens: string[] = [
		"grafana:ListWorkspaceServiceAccountTokens",
	];
	/** IAM actions required for the ListWorkspaceServiceAccounts API call. */
	static readonly ListWorkspaceServiceAccounts: string[] = [
		"grafana:ListWorkspaceServiceAccounts",
	];
	/** IAM actions required for the ListWorkspaces API call. */
	static readonly ListWorkspaces: string[] = ["grafana:ListWorkspaces"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["grafana:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["grafana:UntagResource"];
	/** IAM actions required for the UpdatePermissions API call. */
	static readonly UpdatePermissions: string[] = ["grafana:UpdatePermissions"];
	/** IAM actions required for the UpdateWorkspace API call. */
	static readonly UpdateWorkspace: string[] = [
		"iam:PassRole",
		"grafana:UpdateWorkspace",
	];
	/** IAM actions required for the UpdateWorkspaceAuthentication API call. */
	static readonly UpdateWorkspaceAuthentication: string[] = [
		"grafana:UpdateWorkspaceAuthentication",
	];
	/** IAM actions required for the UpdateWorkspaceConfiguration API call. */
	static readonly UpdateWorkspaceConfiguration: string[] = [
		"grafana:UpdateWorkspaceConfiguration",
	];
}

/**
 * Condition key constants and builders for grafana.
 */
export class GrafanaConditions {
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
