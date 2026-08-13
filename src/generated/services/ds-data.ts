// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ds-data.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ds-data service.
 */
export class DsDataActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ds-data";

	/** [Write] ds-data:AddGroupMember */
	static readonly AddGroupMember = "ds-data:AddGroupMember";
	/** [Write] ds-data:CreateGroup */
	static readonly CreateGroup = "ds-data:CreateGroup";
	/** [Write] ds-data:CreateUser */
	static readonly CreateUser = "ds-data:CreateUser";
	/** [Write] ds-data:DeleteGroup */
	static readonly DeleteGroup = "ds-data:DeleteGroup";
	/** [Write] ds-data:DeleteUser */
	static readonly DeleteUser = "ds-data:DeleteUser";
	/** [Read] ds-data:DescribeGroup */
	static readonly DescribeGroup = "ds-data:DescribeGroup";
	/** [Read] ds-data:DescribeUser */
	static readonly DescribeUser = "ds-data:DescribeUser";
	/** [Write] ds-data:DisableUser */
	static readonly DisableUser = "ds-data:DisableUser";
	/** [List] ds-data:ListGroupMembers */
	static readonly ListGroupMembers = "ds-data:ListGroupMembers";
	/** [List] ds-data:ListGroups */
	static readonly ListGroups = "ds-data:ListGroups";
	/** [List] ds-data:ListGroupsForMember */
	static readonly ListGroupsForMember = "ds-data:ListGroupsForMember";
	/** [List] ds-data:ListUsers */
	static readonly ListUsers = "ds-data:ListUsers";
	/** [Write] ds-data:RemoveGroupMember */
	static readonly RemoveGroupMember = "ds-data:RemoveGroupMember";
	/** [Read] ds-data:SearchGroups */
	static readonly SearchGroups = "ds-data:SearchGroups";
	/** [Read] ds-data:SearchUsers */
	static readonly SearchUsers = "ds-data:SearchUsers";
	/** [Write] ds-data:UpdateGroup */
	static readonly UpdateGroup = "ds-data:UpdateGroup";
	/** [Write] ds-data:UpdateUser */
	static readonly UpdateUser = "ds-data:UpdateUser";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DsDataActions.DescribeGroup,
		DsDataActions.DescribeUser,
		DsDataActions.SearchGroups,
		DsDataActions.SearchUsers,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DsDataActions.AddGroupMember,
		DsDataActions.CreateGroup,
		DsDataActions.CreateUser,
		DsDataActions.DeleteGroup,
		DsDataActions.DeleteUser,
		DsDataActions.DisableUser,
		DsDataActions.RemoveGroupMember,
		DsDataActions.UpdateGroup,
		DsDataActions.UpdateUser,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DsDataActions.ListGroupMembers,
		DsDataActions.ListGroups,
		DsDataActions.ListGroupsForMember,
		DsDataActions.ListUsers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a directory ARN.
 */
export interface DsDataDirectoryArnProps {
	/** The DirectoryId component of the ARN. */
	readonly directoryId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a directory ARN.
 */
export interface DsDataDirectoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DirectoryId component. */
	readonly directoryId: string;
}

const DirectoryArnRegex =
	/^arn:(?<partition>[^:]+):ds:(?<region>[^:]*):(?<account>[^:]*):directory\/(?<directoryId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ds-data resources.
 */
export class DsDataResources {
	/**
	 * Builds an ARN for the directory resource.
	 */
	static directory(props: DsDataDirectoryArnProps): string {
		return `arn:${props.partition ?? "aws"}:ds:${props.region ?? "*"}:${props.account ?? "*"}:directory/${props.directoryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the directory resource.
	 */
	static isValidDirectoryArn(arn: string): boolean {
		return DirectoryArnRegex.test(arn);
	}

	/**
	 * Parses a directory ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDirectoryArn(arn: string): DsDataDirectoryArnComponents {
		const match = DirectoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid directory ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			directoryId: match.groups!.directoryId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ds-data.
 */
export class DsDataOperations {
	/** IAM actions required for the AddGroupMember API call. */
	static readonly AddGroupMember: string[] = [
		"ds:AccessDSData",
		"ds-data:AddGroupMember",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CreateGroup: string[] = [
		"ds:AccessDSData",
		"ds-data:CreateGroup",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = [
		"ds:AccessDSData",
		"ds-data:CreateUser",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DeleteGroup: string[] = [
		"ds:AccessDSData",
		"ds-data:DeleteGroup",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = [
		"ds:AccessDSData",
		"ds-data:DeleteUser",
	];
	/** IAM actions required for the DescribeGroup API call. */
	static readonly DescribeGroup: string[] = [
		"ds:AccessDSData",
		"ds-data:DescribeGroup",
	];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DescribeUser: string[] = [
		"ds:AccessDSData",
		"ds-data:DescribeUser",
	];
	/** IAM actions required for the DisableUser API call. */
	static readonly DisableUser: string[] = [
		"ds:AccessDSData",
		"ds-data:DisableUser",
	];
	/** IAM actions required for the ListGroupMembers API call. */
	static readonly ListGroupMembers: string[] = [
		"ds:AccessDSData",
		"ds-data:ListGroupMembers",
	];
	/** IAM actions required for the ListGroups API call. */
	static readonly ListGroups: string[] = [
		"ds:AccessDSData",
		"ds-data:ListGroups",
	];
	/** IAM actions required for the ListGroupsForMember API call. */
	static readonly ListGroupsForMember: string[] = [
		"ds:AccessDSData",
		"ds-data:ListGroupsForMember",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly ListUsers: string[] = [
		"ds:AccessDSData",
		"ds-data:ListUsers",
	];
	/** IAM actions required for the RemoveGroupMember API call. */
	static readonly RemoveGroupMember: string[] = [
		"ds:AccessDSData",
		"ds-data:RemoveGroupMember",
	];
	/** IAM actions required for the SearchGroups API call. */
	static readonly SearchGroups: string[] = [
		"ds:AccessDSData",
		"ds-data:DescribeGroup",
		"ds-data:SearchGroups",
	];
	/** IAM actions required for the SearchUsers API call. */
	static readonly SearchUsers: string[] = [
		"ds:AccessDSData",
		"ds-data:DescribeUser",
		"ds-data:SearchUsers",
	];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UpdateGroup: string[] = [
		"ds:AccessDSData",
		"ds-data:UpdateGroup",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UpdateUser: string[] = [
		"ds:AccessDSData",
		"ds-data:UpdateUser",
	];
}

/**
 * Condition key constants and builders for ds-data.
 */
export class DsDataConditions {
	/** Condition keys applicable to the AddGroupMember action. */
	static readonly AddGroupMemberConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:MemberName",
		"ds-data:MemberRealm",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the CreateGroup action. */
	static readonly CreateGroupConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CreateUserConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the DeleteGroup action. */
	static readonly DeleteGroupConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the DeleteUser action. */
	static readonly DeleteUserConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the DescribeGroup action. */
	static readonly DescribeGroupConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the DescribeUser action. */
	static readonly DescribeUserConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the DisableUser action. */
	static readonly DisableUserConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the ListGroupMembers action. */
	static readonly ListGroupMembersConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:MemberRealm",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the ListGroups action. */
	static readonly ListGroupsConditionKeys: string[] = ["ds-data:Realm"];
	/** Condition keys applicable to the ListGroupsForMember action. */
	static readonly ListGroupsForMemberConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:MemberRealm",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the ListUsers action. */
	static readonly ListUsersConditionKeys: string[] = ["ds-data:Realm"];
	/** Condition keys applicable to the RemoveGroupMember action. */
	static readonly RemoveGroupMemberConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:MemberName",
		"ds-data:MemberRealm",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the SearchGroups action. */
	static readonly SearchGroupsConditionKeys: string[] = ["ds-data:Realm"];
	/** Condition keys applicable to the SearchUsers action. */
	static readonly SearchUsersConditionKeys: string[] = ["ds-data:Realm"];
	/** Condition keys applicable to the UpdateGroup action. */
	static readonly UpdateGroupConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the UpdateUser action. */
	static readonly UpdateUserConditionKeys: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];

	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: ds-data:Identifier (String) */
	static readonly IDENTIFIER = "ds-data:Identifier";
	/** Condition key: ds-data:MemberName (String) */
	static readonly MEMBER_NAME = "ds-data:MemberName";
	/** Condition key: ds-data:MemberRealm (String) */
	static readonly MEMBER_REALM = "ds-data:MemberRealm";
	/** Condition key: ds-data:Realm (String) */
	static readonly REALM = "ds-data:Realm";
	/** Condition key: ds-data:SAMAccountName (String) */
	static readonly SAM_ACCOUNT_NAME = "ds-data:SAMAccountName";

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `ds-data:Identifier`.
	 */
	static identifier(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ds-data:Identifier": value } };
	}

	/**
	 * Generates a condition block for `ds-data:MemberName`.
	 */
	static memberName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ds-data:MemberName": value } };
	}

	/**
	 * Generates a condition block for `ds-data:MemberRealm`.
	 */
	static memberRealm(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ds-data:MemberRealm": value } };
	}

	/**
	 * Generates a condition block for `ds-data:Realm`.
	 */
	static realm(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ds-data:Realm": value } };
	}

	/**
	 * Generates a condition block for `ds-data:SAMAccountName`.
	 */
	static samAccountName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ds-data:SAMAccountName": value } };
	}
}
