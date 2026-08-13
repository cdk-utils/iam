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
	static readonly AssociateTeamMember = "codestar:AssociateTeamMember";
	/** [PermissionManagement] codestar:CreateProject */
	static readonly CreateProject = "codestar:CreateProject";
	/** [Write] codestar:CreateUserProfile */
	static readonly CreateUserProfile = "codestar:CreateUserProfile";
	/** [Write] codestar:DeleteExtendedAccess */
	static readonly DeleteExtendedAccess = "codestar:DeleteExtendedAccess";
	/** [PermissionManagement] codestar:DeleteProject */
	static readonly DeleteProject = "codestar:DeleteProject";
	/** [Write] codestar:DeleteUserProfile */
	static readonly DeleteUserProfile = "codestar:DeleteUserProfile";
	/** [Read] codestar:DescribeProject */
	static readonly DescribeProject = "codestar:DescribeProject";
	/** [Read] codestar:DescribeUserProfile */
	static readonly DescribeUserProfile = "codestar:DescribeUserProfile";
	/** [PermissionManagement] codestar:DisassociateTeamMember */
	static readonly DisassociateTeamMember = "codestar:DisassociateTeamMember";
	/** [Read] codestar:GetExtendedAccess */
	static readonly actionGetExtendedAccess = "codestar:GetExtendedAccess";
	/** [List] codestar:ListProjects */
	static readonly ListProjects = "codestar:ListProjects";
	/** [List] codestar:ListResources */
	static readonly ListResources = "codestar:ListResources";
	/** [List] codestar:ListTagsForProject */
	static readonly ListTagsForProject = "codestar:ListTagsForProject";
	/** [List] codestar:ListTeamMembers */
	static readonly ListTeamMembers = "codestar:ListTeamMembers";
	/** [List] codestar:ListUserProfiles */
	static readonly ListUserProfiles = "codestar:ListUserProfiles";
	/** [Write] codestar:PutExtendedAccess */
	static readonly PutExtendedAccess = "codestar:PutExtendedAccess";
	/** [Tagging] codestar:TagProject */
	static readonly TagProject = "codestar:TagProject";
	/** [Tagging] codestar:UntagProject */
	static readonly UntagProject = "codestar:UntagProject";
	/** [Write] codestar:UpdateProject */
	static readonly UpdateProject = "codestar:UpdateProject";
	/** [PermissionManagement] codestar:UpdateTeamMember */
	static readonly UpdateTeamMember = "codestar:UpdateTeamMember";
	/** [Write] codestar:UpdateUserProfile */
	static readonly UpdateUserProfile = "codestar:UpdateUserProfile";
	/** [List] codestar:VerifyServiceRole */
	static readonly VerifyServiceRole = "codestar:VerifyServiceRole";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodeStarActions.DescribeProject,
		CodeStarActions.DescribeUserProfile,
		CodeStarActions.actionGetExtendedAccess,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodeStarActions.CreateUserProfile,
		CodeStarActions.DeleteExtendedAccess,
		CodeStarActions.DeleteUserProfile,
		CodeStarActions.PutExtendedAccess,
		CodeStarActions.UpdateProject,
		CodeStarActions.UpdateUserProfile,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodeStarActions.ListProjects,
		CodeStarActions.ListResources,
		CodeStarActions.ListTagsForProject,
		CodeStarActions.ListTeamMembers,
		CodeStarActions.ListUserProfiles,
		CodeStarActions.VerifyServiceRole,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		CodeStarActions.AssociateTeamMember,
		CodeStarActions.CreateProject,
		CodeStarActions.DeleteProject,
		CodeStarActions.DisassociateTeamMember,
		CodeStarActions.UpdateTeamMember,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodeStarActions.TagProject,
		CodeStarActions.UntagProject,
	];
}

/**
 * Properties for building a project ARN.
 */
export interface CodeStarProjectArnProps {
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
export interface CodeStarProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectId component. */
	readonly projectId: string;
}

/**
 * Properties for building a user ARN.
 */
export interface CodeStarUserArnProps {
	/** The AwsUserName component of the ARN. */
	readonly awsUserName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a user ARN.
 */
export interface CodeStarUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AwsUserName component. */
	readonly awsUserName: string;
}

const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):codestar:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectId>[^:/?]+)$/;
const UserArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):user\/(?<awsUserName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codestar resources.
 */
export class CodeStarResources {
	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: CodeStarProjectArnProps): string {
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
	static parseProjectArn(arn: string): CodeStarProjectArnComponents {
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
	static user(props: CodeStarUserArnProps): string {
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
	static parseUserArn(arn: string): CodeStarUserArnComponents {
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
	static readonly CreateProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagProject action. */
	static readonly TagProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagProject action. */
	static readonly UntagProjectConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
