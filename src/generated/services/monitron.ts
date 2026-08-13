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
	static readonly ASSOCIATE_PROJECT_ADMIN_USER =
		"monitron:AssociateProjectAdminUser";
	/** [Write] monitron:CreateProject */
	static readonly CREATE_PROJECT = "monitron:CreateProject";
	/** [PermissionManagement] monitron:CreateProjectUserAssociation */
	static readonly CREATE_PROJECT_USER_ASSOCIATION =
		"monitron:CreateProjectUserAssociation";
	/** [PermissionManagement] monitron:CreateUserAccessRoleAssociation */
	static readonly CREATE_USER_ACCESS_ROLE_ASSOCIATION =
		"monitron:CreateUserAccessRoleAssociation";
	/** [Write] monitron:DeleteProject */
	static readonly DELETE_PROJECT = "monitron:DeleteProject";
	/** [PermissionManagement] monitron:DeleteProjectUserAssociation */
	static readonly DELETE_PROJECT_USER_ASSOCIATION =
		"monitron:DeleteProjectUserAssociation";
	/** [PermissionManagement] monitron:DeleteUserAccessRoleAssociation */
	static readonly DELETE_USER_ACCESS_ROLE_ASSOCIATION =
		"monitron:DeleteUserAccessRoleAssociation";
	/** [PermissionManagement] monitron:DisassociateProjectAdminUser */
	static readonly DISASSOCIATE_PROJECT_ADMIN_USER =
		"monitron:DisassociateProjectAdminUser";
	/** [Read] monitron:GetProject */
	static readonly GET_PROJECT = "monitron:GetProject";
	/** [Read] monitron:GetProjectAdminUser */
	static readonly GET_PROJECT_ADMIN_USER = "monitron:GetProjectAdminUser";
	/** [PermissionManagement] monitron:ListProjectAdminUsers */
	static readonly LIST_PROJECT_ADMIN_USERS = "monitron:ListProjectAdminUsers";
	/** [List] monitron:ListProjectUserAssociations */
	static readonly LIST_PROJECT_USER_ASSOCIATIONS =
		"monitron:ListProjectUserAssociations";
	/** [List] monitron:ListProjects */
	static readonly LIST_PROJECTS = "monitron:ListProjects";
	/** [Read] monitron:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "monitron:ListTagsForResource";
	/** [List] monitron:ListUserAccessRoleAssociations */
	static readonly LIST_USER_ACCESS_ROLE_ASSOCIATIONS =
		"monitron:ListUserAccessRoleAssociations";
	/** [Tagging] monitron:TagResource */
	static readonly TAG_RESOURCE = "monitron:TagResource";
	/** [Tagging] monitron:UntagResource */
	static readonly UNTAG_RESOURCE = "monitron:UntagResource";
	/** [Write] monitron:UpdateProject */
	static readonly UPDATE_PROJECT = "monitron:UpdateProject";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MonitronActions.GET_PROJECT,
		MonitronActions.GET_PROJECT_ADMIN_USER,
		MonitronActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MonitronActions.CREATE_PROJECT,
		MonitronActions.DELETE_PROJECT,
		MonitronActions.UPDATE_PROJECT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MonitronActions.LIST_PROJECT_USER_ASSOCIATIONS,
		MonitronActions.LIST_PROJECTS,
		MonitronActions.LIST_USER_ACCESS_ROLE_ASSOCIATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		MonitronActions.ASSOCIATE_PROJECT_ADMIN_USER,
		MonitronActions.CREATE_PROJECT_USER_ASSOCIATION,
		MonitronActions.CREATE_USER_ACCESS_ROLE_ASSOCIATION,
		MonitronActions.DELETE_PROJECT_USER_ASSOCIATION,
		MonitronActions.DELETE_USER_ACCESS_ROLE_ASSOCIATION,
		MonitronActions.DISASSOCIATE_PROJECT_ADMIN_USER,
		MonitronActions.LIST_PROJECT_ADMIN_USERS,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MonitronActions.TAG_RESOURCE,
		MonitronActions.UNTAG_RESOURCE,
	];
}

const ProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):monitron:(?<region>[^:]*):(?<account>[^:]*):project/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for monitron resources.
 */
export class MonitronResources {
	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly CREATE_PROJECT_CONDITION_KEYS: string[] = [
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
