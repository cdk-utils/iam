// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/monitron.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the monitron service.
 */
export class MonitronActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "monitron";

	/** [PermissionManagement] monitron:AssociateProjectAdminUser */
	static readonly AssociateProjectAdminUser =
		"monitron:AssociateProjectAdminUser";
	/** [Write] monitron:CreateProject */
	static readonly CreateProject = "monitron:CreateProject";
	/** [PermissionManagement] monitron:CreateProjectUserAssociation */
	static readonly CreateProjectUserAssociation =
		"monitron:CreateProjectUserAssociation";
	/** [PermissionManagement] monitron:CreateUserAccessRoleAssociation */
	static readonly CreateUserAccessRoleAssociation =
		"monitron:CreateUserAccessRoleAssociation";
	/** [Write] monitron:DeleteProject */
	static readonly DeleteProject = "monitron:DeleteProject";
	/** [PermissionManagement] monitron:DeleteProjectUserAssociation */
	static readonly DeleteProjectUserAssociation =
		"monitron:DeleteProjectUserAssociation";
	/** [PermissionManagement] monitron:DeleteUserAccessRoleAssociation */
	static readonly DeleteUserAccessRoleAssociation =
		"monitron:DeleteUserAccessRoleAssociation";
	/** [PermissionManagement] monitron:DisassociateProjectAdminUser */
	static readonly DisassociateProjectAdminUser =
		"monitron:DisassociateProjectAdminUser";
	/** [Read] monitron:GetProject */
	static readonly actionGetProject = "monitron:GetProject";
	/** [Read] monitron:GetProjectAdminUser */
	static readonly actionGetProjectAdminUser = "monitron:GetProjectAdminUser";
	/** [PermissionManagement] monitron:ListProjectAdminUsers */
	static readonly ListProjectAdminUsers = "monitron:ListProjectAdminUsers";
	/** [List] monitron:ListProjectUserAssociations */
	static readonly ListProjectUserAssociations =
		"monitron:ListProjectUserAssociations";
	/** [List] monitron:ListProjects */
	static readonly ListProjects = "monitron:ListProjects";
	/** [Read] monitron:ListTagsForResource */
	static readonly ListTagsForResource = "monitron:ListTagsForResource";
	/** [List] monitron:ListUserAccessRoleAssociations */
	static readonly ListUserAccessRoleAssociations =
		"monitron:ListUserAccessRoleAssociations";
	/** [Tagging] monitron:TagResource */
	static readonly TagResource = "monitron:TagResource";
	/** [Tagging] monitron:UntagResource */
	static readonly UntagResource = "monitron:UntagResource";
	/** [Write] monitron:UpdateProject */
	static readonly UpdateProject = "monitron:UpdateProject";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MonitronActions.actionGetProject,
		MonitronActions.actionGetProjectAdminUser,
		MonitronActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MonitronActions.CreateProject,
		MonitronActions.DeleteProject,
		MonitronActions.UpdateProject,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MonitronActions.ListProjectUserAssociations,
		MonitronActions.ListProjects,
		MonitronActions.ListUserAccessRoleAssociations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		MonitronActions.AssociateProjectAdminUser,
		MonitronActions.CreateProjectUserAssociation,
		MonitronActions.CreateUserAccessRoleAssociation,
		MonitronActions.DeleteProjectUserAssociation,
		MonitronActions.DeleteUserAccessRoleAssociation,
		MonitronActions.DisassociateProjectAdminUser,
		MonitronActions.ListProjectAdminUsers,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MonitronActions.TagResource,
		MonitronActions.UntagResource,
	];
}

/**
 * Properties for building a project ARN.
 */
export interface MonitronProjectArnProps {
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
 * Parsed components of a project ARN.
 */
export interface MonitronProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):monitron:(?<region>[^:]*):(?<account>[^:]*):project\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for monitron resources.
 */
export class MonitronResources {
	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: MonitronProjectArnProps): string {
		return `arn:${props.partition ?? "aws"}:monitron:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.resourceId}`;
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
	static parseProjectArn(arn: string): MonitronProjectArnComponents {
		const match = ProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid project ARN: ${arn}`);
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
 * Condition key constants and builders for monitron.
 */
export class MonitronConditions {
	/** Condition keys applicable to the CreateProject action. */
	static readonly CreateProjectConditionKeys: string[] = [
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
