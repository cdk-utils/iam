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
	static readonly ADD_GROUP_MEMBER = "ds-data:AddGroupMember";
	/** [Write] ds-data:CreateGroup */
	static readonly CREATE_GROUP = "ds-data:CreateGroup";
	/** [Write] ds-data:CreateUser */
	static readonly CREATE_USER = "ds-data:CreateUser";
	/** [Write] ds-data:DeleteGroup */
	static readonly DELETE_GROUP = "ds-data:DeleteGroup";
	/** [Write] ds-data:DeleteUser */
	static readonly DELETE_USER = "ds-data:DeleteUser";
	/** [Read] ds-data:DescribeGroup */
	static readonly DESCRIBE_GROUP = "ds-data:DescribeGroup";
	/** [Read] ds-data:DescribeUser */
	static readonly DESCRIBE_USER = "ds-data:DescribeUser";
	/** [Write] ds-data:DisableUser */
	static readonly DISABLE_USER = "ds-data:DisableUser";
	/** [List] ds-data:ListGroupMembers */
	static readonly LIST_GROUP_MEMBERS = "ds-data:ListGroupMembers";
	/** [List] ds-data:ListGroups */
	static readonly LIST_GROUPS = "ds-data:ListGroups";
	/** [List] ds-data:ListGroupsForMember */
	static readonly LIST_GROUPS_FOR_MEMBER = "ds-data:ListGroupsForMember";
	/** [List] ds-data:ListUsers */
	static readonly LIST_USERS = "ds-data:ListUsers";
	/** [Write] ds-data:RemoveGroupMember */
	static readonly REMOVE_GROUP_MEMBER = "ds-data:RemoveGroupMember";
	/** [Read] ds-data:SearchGroups */
	static readonly SEARCH_GROUPS = "ds-data:SearchGroups";
	/** [Read] ds-data:SearchUsers */
	static readonly SEARCH_USERS = "ds-data:SearchUsers";
	/** [Write] ds-data:UpdateGroup */
	static readonly UPDATE_GROUP = "ds-data:UpdateGroup";
	/** [Write] ds-data:UpdateUser */
	static readonly UPDATE_USER = "ds-data:UpdateUser";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DsDataActions.DESCRIBE_GROUP,
		DsDataActions.DESCRIBE_USER,
		DsDataActions.SEARCH_GROUPS,
		DsDataActions.SEARCH_USERS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DsDataActions.ADD_GROUP_MEMBER,
		DsDataActions.CREATE_GROUP,
		DsDataActions.CREATE_USER,
		DsDataActions.DELETE_GROUP,
		DsDataActions.DELETE_USER,
		DsDataActions.DISABLE_USER,
		DsDataActions.REMOVE_GROUP_MEMBER,
		DsDataActions.UPDATE_GROUP,
		DsDataActions.UPDATE_USER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DsDataActions.LIST_GROUP_MEMBERS,
		DsDataActions.LIST_GROUPS,
		DsDataActions.LIST_GROUPS_FOR_MEMBER,
		DsDataActions.LIST_USERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const DirectoryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ds:(?<region>[^:]*):(?<account>[^:]*):directory/(?<directoryId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ds-data resources.
 */
export class DsDataResources {
	/**
	 * Builds an ARN for the directory resource.
	 */
	static directory(props: {
		/** The DirectoryId component of the ARN. */
		readonly directoryId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDirectoryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		directoryId: string;
	} {
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
	static readonly ADD_GROUP_MEMBER: string[] = [
		"ds:AccessDSData",
		"ds-data:AddGroupMember",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CREATE_GROUP: string[] = [
		"ds:AccessDSData",
		"ds-data:CreateGroup",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = [
		"ds:AccessDSData",
		"ds-data:CreateUser",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DELETE_GROUP: string[] = [
		"ds:AccessDSData",
		"ds-data:DeleteGroup",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = [
		"ds:AccessDSData",
		"ds-data:DeleteUser",
	];
	/** IAM actions required for the DescribeGroup API call. */
	static readonly DESCRIBE_GROUP: string[] = [
		"ds:AccessDSData",
		"ds-data:DescribeGroup",
	];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DESCRIBE_USER: string[] = [
		"ds:AccessDSData",
		"ds-data:DescribeUser",
	];
	/** IAM actions required for the DisableUser API call. */
	static readonly DISABLE_USER: string[] = [
		"ds:AccessDSData",
		"ds-data:DisableUser",
	];
	/** IAM actions required for the ListGroupMembers API call. */
	static readonly LIST_GROUP_MEMBERS: string[] = [
		"ds:AccessDSData",
		"ds-data:ListGroupMembers",
	];
	/** IAM actions required for the ListGroups API call. */
	static readonly LIST_GROUPS: string[] = [
		"ds:AccessDSData",
		"ds-data:ListGroups",
	];
	/** IAM actions required for the ListGroupsForMember API call. */
	static readonly LIST_GROUPS_FOR_MEMBER: string[] = [
		"ds:AccessDSData",
		"ds-data:ListGroupsForMember",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = [
		"ds:AccessDSData",
		"ds-data:ListUsers",
	];
	/** IAM actions required for the RemoveGroupMember API call. */
	static readonly REMOVE_GROUP_MEMBER: string[] = [
		"ds:AccessDSData",
		"ds-data:RemoveGroupMember",
	];
	/** IAM actions required for the SearchGroups API call. */
	static readonly SEARCH_GROUPS: string[] = [
		"ds:AccessDSData",
		"ds-data:DescribeGroup",
		"ds-data:SearchGroups",
	];
	/** IAM actions required for the SearchUsers API call. */
	static readonly SEARCH_USERS: string[] = [
		"ds:AccessDSData",
		"ds-data:DescribeUser",
		"ds-data:SearchUsers",
	];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UPDATE_GROUP: string[] = [
		"ds:AccessDSData",
		"ds-data:UpdateGroup",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = [
		"ds:AccessDSData",
		"ds-data:UpdateUser",
	];
}

/**
 * Condition key constants and builders for ds-data.
 */
export class DsDataConditions {
	/** Condition keys applicable to the AddGroupMember action. */
	static readonly ADD_GROUP_MEMBER_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:MemberName",
		"ds-data:MemberRealm",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the CreateGroup action. */
	static readonly CREATE_GROUP_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CREATE_USER_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the DeleteGroup action. */
	static readonly DELETE_GROUP_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the DeleteUser action. */
	static readonly DELETE_USER_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the DescribeGroup action. */
	static readonly DESCRIBE_GROUP_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the DescribeUser action. */
	static readonly DESCRIBE_USER_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the DisableUser action. */
	static readonly DISABLE_USER_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the ListGroupMembers action. */
	static readonly LIST_GROUP_MEMBERS_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:MemberRealm",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the ListGroups action. */
	static readonly LIST_GROUPS_CONDITION_KEYS: string[] = ["ds-data:Realm"];
	/** Condition keys applicable to the ListGroupsForMember action. */
	static readonly LIST_GROUPS_FOR_MEMBER_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:MemberRealm",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the ListUsers action. */
	static readonly LIST_USERS_CONDITION_KEYS: string[] = ["ds-data:Realm"];
	/** Condition keys applicable to the RemoveGroupMember action. */
	static readonly REMOVE_GROUP_MEMBER_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:MemberName",
		"ds-data:MemberRealm",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the SearchGroups action. */
	static readonly SEARCH_GROUPS_CONDITION_KEYS: string[] = ["ds-data:Realm"];
	/** Condition keys applicable to the SearchUsers action. */
	static readonly SEARCH_USERS_CONDITION_KEYS: string[] = ["ds-data:Realm"];
	/** Condition keys applicable to the UpdateGroup action. */
	static readonly UPDATE_GROUP_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];
	/** Condition keys applicable to the UpdateUser action. */
	static readonly UPDATE_USER_CONDITION_KEYS: string[] = [
		"ds-data:Identifier",
		"ds-data:Realm",
		"ds-data:SAMAccountName",
	];

	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
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
