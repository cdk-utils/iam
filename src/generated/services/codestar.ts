// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codestar.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codestar service.
 */
export class CodeStarActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codestar";

	/** [PermissionManagement] codestar:AssociateTeamMember */
	static readonly ASSOCIATE_TEAM_MEMBER = "codestar:AssociateTeamMember";
	/** [PermissionManagement] codestar:CreateProject */
	static readonly CREATE_PROJECT = "codestar:CreateProject";
	/** [Write] codestar:CreateUserProfile */
	static readonly CREATE_USER_PROFILE = "codestar:CreateUserProfile";
	/** [Write] codestar:DeleteExtendedAccess */
	static readonly DELETE_EXTENDED_ACCESS = "codestar:DeleteExtendedAccess";
	/** [PermissionManagement] codestar:DeleteProject */
	static readonly DELETE_PROJECT = "codestar:DeleteProject";
	/** [Write] codestar:DeleteUserProfile */
	static readonly DELETE_USER_PROFILE = "codestar:DeleteUserProfile";
	/** [Read] codestar:DescribeProject */
	static readonly DESCRIBE_PROJECT = "codestar:DescribeProject";
	/** [Read] codestar:DescribeUserProfile */
	static readonly DESCRIBE_USER_PROFILE = "codestar:DescribeUserProfile";
	/** [PermissionManagement] codestar:DisassociateTeamMember */
	static readonly DISASSOCIATE_TEAM_MEMBER = "codestar:DisassociateTeamMember";
	/** [Read] codestar:GetExtendedAccess */
	static readonly GET_EXTENDED_ACCESS = "codestar:GetExtendedAccess";
	/** [List] codestar:ListProjects */
	static readonly LIST_PROJECTS = "codestar:ListProjects";
	/** [List] codestar:ListResources */
	static readonly LIST_RESOURCES = "codestar:ListResources";
	/** [List] codestar:ListTagsForProject */
	static readonly LIST_TAGS_FOR_PROJECT = "codestar:ListTagsForProject";
	/** [List] codestar:ListTeamMembers */
	static readonly LIST_TEAM_MEMBERS = "codestar:ListTeamMembers";
	/** [List] codestar:ListUserProfiles */
	static readonly LIST_USER_PROFILES = "codestar:ListUserProfiles";
	/** [Write] codestar:PutExtendedAccess */
	static readonly PUT_EXTENDED_ACCESS = "codestar:PutExtendedAccess";
	/** [Tagging] codestar:TagProject */
	static readonly TAG_PROJECT = "codestar:TagProject";
	/** [Tagging] codestar:UntagProject */
	static readonly UNTAG_PROJECT = "codestar:UntagProject";
	/** [Write] codestar:UpdateProject */
	static readonly UPDATE_PROJECT = "codestar:UpdateProject";
	/** [PermissionManagement] codestar:UpdateTeamMember */
	static readonly UPDATE_TEAM_MEMBER = "codestar:UpdateTeamMember";
	/** [Write] codestar:UpdateUserProfile */
	static readonly UPDATE_USER_PROFILE = "codestar:UpdateUserProfile";
	/** [List] codestar:VerifyServiceRole */
	static readonly VERIFY_SERVICE_ROLE = "codestar:VerifyServiceRole";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodeStarActions.DESCRIBE_PROJECT,
		CodeStarActions.DESCRIBE_USER_PROFILE,
		CodeStarActions.GET_EXTENDED_ACCESS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodeStarActions.CREATE_USER_PROFILE,
		CodeStarActions.DELETE_EXTENDED_ACCESS,
		CodeStarActions.DELETE_USER_PROFILE,
		CodeStarActions.PUT_EXTENDED_ACCESS,
		CodeStarActions.UPDATE_PROJECT,
		CodeStarActions.UPDATE_USER_PROFILE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodeStarActions.LIST_PROJECTS,
		CodeStarActions.LIST_RESOURCES,
		CodeStarActions.LIST_TAGS_FOR_PROJECT,
		CodeStarActions.LIST_TEAM_MEMBERS,
		CodeStarActions.LIST_USER_PROFILES,
		CodeStarActions.VERIFY_SERVICE_ROLE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		CodeStarActions.ASSOCIATE_TEAM_MEMBER,
		CodeStarActions.CREATE_PROJECT,
		CodeStarActions.DELETE_PROJECT,
		CodeStarActions.DISASSOCIATE_TEAM_MEMBER,
		CodeStarActions.UPDATE_TEAM_MEMBER,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodeStarActions.TAG_PROJECT,
		CodeStarActions.UNTAG_PROJECT,
	];
}

const ProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codestar:(?<region>[^:]*):(?<account>[^:]*):project/(?<projectId>[^:/?]+)$",
);
const UserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):user/(?<awsUserName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codestar resources.
 */
export class CodeStarResources {
	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: {
		/** The ProjectId component of the ARN. */
		readonly projectId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codestar:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectId}`;
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
			projectId: match.groups!.projectId,
		};
	}

	/**
	 * Builds an ARN for the user resource.
	 */
	static user(props: {
		/** The AwsUserName component of the ARN. */
		readonly awsUserName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:user/${props.awsUserName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the user resource.
	 */
	static isValidUserArn(arn: string): boolean {
		return UserArnRegex.test(arn);
	}

	/**
	 * Parses a user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserArn(arn: string): {
		partition: string;
		account: string;
		awsUserName: string;
	} {
		const match = UserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			awsUserName: match.groups!.awsUserName,
		};
	}
}

/**
 * Condition key constants and builders for codestar.
 */
export class CodeStarConditions {
	/** Condition keys applicable to the CreateProject action. */
	static readonly CREATE_PROJECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagProject action. */
	static readonly TAG_PROJECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagProject action. */
	static readonly UNTAG_PROJECT_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: iam:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "iam:ResourceTag/${TagKey}";

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
