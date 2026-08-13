// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/identitystore.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the identitystore service.
 */
export class IdentitystoreActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "identitystore";

	/** [Write] identitystore:AddRegion */
	static readonly ADD_REGION = "identitystore:AddRegion";
	/** [Write] identitystore:CreateGroup */
	static readonly CREATE_GROUP = "identitystore:CreateGroup";
	/** [Write] identitystore:CreateGroupMembership */
	static readonly CREATE_GROUP_MEMBERSHIP =
		"identitystore:CreateGroupMembership";
	/** [Write] identitystore:CreateIdentityStore */
	static readonly CREATE_IDENTITY_STORE = "identitystore:CreateIdentityStore";
	/** [Write] identitystore:CreateUser */
	static readonly CREATE_USER = "identitystore:CreateUser";
	/** [Write] identitystore:DeleteGroup */
	static readonly DELETE_GROUP = "identitystore:DeleteGroup";
	/** [Write] identitystore:DeleteGroupMembership */
	static readonly DELETE_GROUP_MEMBERSHIP =
		"identitystore:DeleteGroupMembership";
	/** [Write] identitystore:DeleteIdentityStore */
	static readonly DELETE_IDENTITY_STORE = "identitystore:DeleteIdentityStore";
	/** [Write] identitystore:DeleteUser */
	static readonly DELETE_USER = "identitystore:DeleteUser";
	/** [Read] identitystore:DescribeGroup */
	static readonly DESCRIBE_GROUP = "identitystore:DescribeGroup";
	/** [Read] identitystore:DescribeGroupMembership */
	static readonly DESCRIBE_GROUP_MEMBERSHIP =
		"identitystore:DescribeGroupMembership";
	/** [Read] identitystore:DescribeRegion */
	static readonly DESCRIBE_REGION = "identitystore:DescribeRegion";
	/** [Read] identitystore:DescribeUser */
	static readonly DESCRIBE_USER = "identitystore:DescribeUser";
	/** [Read] identitystore:GetGroupId */
	static readonly GET_GROUP_ID = "identitystore:GetGroupId";
	/** [Read] identitystore:GetGroupMembershipId */
	static readonly GET_GROUP_MEMBERSHIP_ID =
		"identitystore:GetGroupMembershipId";
	/** [Read] identitystore:GetUserId */
	static readonly GET_USER_ID = "identitystore:GetUserId";
	/** [Read] identitystore:IsMemberInGroups */
	static readonly IS_MEMBER_IN_GROUPS = "identitystore:IsMemberInGroups";
	/** [List] identitystore:ListGroupMemberships */
	static readonly LIST_GROUP_MEMBERSHIPS = "identitystore:ListGroupMemberships";
	/** [List] identitystore:ListGroupMembershipsForMember */
	static readonly LIST_GROUP_MEMBERSHIPS_FOR_MEMBER =
		"identitystore:ListGroupMembershipsForMember";
	/** [List] identitystore:ListGroups */
	static readonly LIST_GROUPS = "identitystore:ListGroups";
	/** [List] identitystore:ListRegions */
	static readonly LIST_REGIONS = "identitystore:ListRegions";
	/** [List] identitystore:ListUsers */
	static readonly LIST_USERS = "identitystore:ListUsers";
	/** [Write] identitystore:RemoveRegion */
	static readonly REMOVE_REGION = "identitystore:RemoveRegion";
	/** [Write] identitystore:ReserveUser */
	static readonly RESERVE_USER = "identitystore:ReserveUser";
	/** [Write] identitystore:UpdateGroup */
	static readonly UPDATE_GROUP = "identitystore:UpdateGroup";
	/** [Write] identitystore:UpdateIdentityStore */
	static readonly UPDATE_IDENTITY_STORE = "identitystore:UpdateIdentityStore";
	/** [Write] identitystore:UpdateUser */
	static readonly UPDATE_USER = "identitystore:UpdateUser";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IdentitystoreActions.DESCRIBE_GROUP,
		IdentitystoreActions.DESCRIBE_GROUP_MEMBERSHIP,
		IdentitystoreActions.DESCRIBE_REGION,
		IdentitystoreActions.DESCRIBE_USER,
		IdentitystoreActions.GET_GROUP_ID,
		IdentitystoreActions.GET_GROUP_MEMBERSHIP_ID,
		IdentitystoreActions.GET_USER_ID,
		IdentitystoreActions.IS_MEMBER_IN_GROUPS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IdentitystoreActions.ADD_REGION,
		IdentitystoreActions.CREATE_GROUP,
		IdentitystoreActions.CREATE_GROUP_MEMBERSHIP,
		IdentitystoreActions.CREATE_IDENTITY_STORE,
		IdentitystoreActions.CREATE_USER,
		IdentitystoreActions.DELETE_GROUP,
		IdentitystoreActions.DELETE_GROUP_MEMBERSHIP,
		IdentitystoreActions.DELETE_IDENTITY_STORE,
		IdentitystoreActions.DELETE_USER,
		IdentitystoreActions.REMOVE_REGION,
		IdentitystoreActions.RESERVE_USER,
		IdentitystoreActions.UPDATE_GROUP,
		IdentitystoreActions.UPDATE_IDENTITY_STORE,
		IdentitystoreActions.UPDATE_USER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IdentitystoreActions.LIST_GROUP_MEMBERSHIPS,
		IdentitystoreActions.LIST_GROUP_MEMBERSHIPS_FOR_MEMBER,
		IdentitystoreActions.LIST_GROUPS,
		IdentitystoreActions.LIST_REGIONS,
		IdentitystoreActions.LIST_USERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const AllGroupMembershipsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):identitystore:::membership/.*$",
);
const AllGroupsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):identitystore:::group/.*$",
);
const AllUsersArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):identitystore:::user/.*$",
);
const GroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):identitystore:::group/(?<groupId>[^:/?]+)$",
);
const GroupMembershipArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):identitystore:::membership/(?<membershipId>[^:/?]+)$",
);
const IdentitystoreArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):identitystore::(?<account>[^:]*):identitystore/(?<identityStoreId>[^:/?]+)$",
);
const UserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):identitystore:::user/(?<userId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for identitystore resources.
 */
export class IdentitystoreResources {
	/**
	 * Builds an ARN for the AllGroupMemberships resource.
	 */
	static allGroupMemberships(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:identitystore:::membership/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AllGroupMemberships resource.
	 */
	static isValidAllGroupMembershipsArn(arn: string): boolean {
		return AllGroupMembershipsArnRegex.test(arn);
	}

	/**
	 * Parses a AllGroupMemberships ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAllGroupMembershipsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = AllGroupMembershipsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AllGroupMemberships ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the AllGroups resource.
	 */
	static allGroups(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:identitystore:::group/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AllGroups resource.
	 */
	static isValidAllGroupsArn(arn: string): boolean {
		return AllGroupsArnRegex.test(arn);
	}

	/**
	 * Parses a AllGroups ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAllGroupsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = AllGroupsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AllGroups ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the AllUsers resource.
	 */
	static allUsers(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:identitystore:::user/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AllUsers resource.
	 */
	static isValidAllUsersArn(arn: string): boolean {
		return AllUsersArnRegex.test(arn);
	}

	/**
	 * Parses a AllUsers ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAllUsersArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = AllUsersArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AllUsers ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the Group resource.
	 */
	static group(props: {
		/** The GroupId component of the ARN. */
		readonly groupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:identitystore:::group/${props.groupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Group resource.
	 */
	static isValidGroupArn(arn: string): boolean {
		return GroupArnRegex.test(arn);
	}

	/**
	 * Parses a Group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupId: string;
	} {
		const match = GroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupId: match.groups!.groupId,
		};
	}

	/**
	 * Builds an ARN for the GroupMembership resource.
	 */
	static groupMembership(props: {
		/** The MembershipId component of the ARN. */
		readonly membershipId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:identitystore:::membership/${props.membershipId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the GroupMembership resource.
	 */
	static isValidGroupMembershipArn(arn: string): boolean {
		return GroupMembershipArnRegex.test(arn);
	}

	/**
	 * Parses a GroupMembership ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGroupMembershipArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		membershipId: string;
	} {
		const match = GroupMembershipArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid GroupMembership ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			membershipId: match.groups!.membershipId,
		};
	}

	/**
	 * Builds an ARN for the Identitystore resource.
	 */
	static identitystore(props: {
		/** The IdentityStoreId component of the ARN. */
		readonly identityStoreId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:identitystore::${props.account ?? "*"}:identitystore/${props.identityStoreId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Identitystore resource.
	 */
	static isValidIdentitystoreArn(arn: string): boolean {
		return IdentitystoreArnRegex.test(arn);
	}

	/**
	 * Parses a Identitystore ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIdentitystoreArn(arn: string): {
		partition: string;
		account: string;
		identityStoreId: string;
	} {
		const match = IdentitystoreArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Identitystore ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			identityStoreId: match.groups!.identityStoreId,
		};
	}

	/**
	 * Builds an ARN for the User resource.
	 */
	static user(props: {
		/** The UserId component of the ARN. */
		readonly userId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:identitystore:::user/${props.userId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the User resource.
	 */
	static isValidUserArn(arn: string): boolean {
		return UserArnRegex.test(arn);
	}

	/**
	 * Parses a User ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		userId: string;
	} {
		const match = UserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid User ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			userId: match.groups!.userId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for identitystore.
 */
export class IdentitystoreOperations {
	/** IAM actions required for the CreateGroup API call. */
	static readonly CREATE_GROUP: string[] = [
		"identitystore:CreateGroup",
		"sso-directory:CreateGroup",
	];
	/** IAM actions required for the CreateGroupMembership API call. */
	static readonly CREATE_GROUP_MEMBERSHIP: string[] = [
		"sso-directory:AddMemberToGroup",
		"identitystore:CreateGroupMembership",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = [
		"identitystore:CreateUser",
		"sso-directory:CreateUser",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DELETE_GROUP: string[] = [
		"identitystore:DeleteGroup",
		"sso-directory:DeleteGroup",
	];
	/** IAM actions required for the DeleteGroupMembership API call. */
	static readonly DELETE_GROUP_MEMBERSHIP: string[] = [
		"identitystore:DeleteGroupMembership",
		"sso-directory:RemoveMemberFromGroup",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = [
		"identitystore:DeleteUser",
		"sso-directory:DeleteUser",
	];
	/** IAM actions required for the DescribeGroup API call. */
	static readonly DESCRIBE_GROUP: string[] = [
		"identitystore:DescribeGroup",
		"sso-directory:DescribeGroup",
		"sso-directory:DescribeGroups",
	];
	/** IAM actions required for the DescribeGroupMembership API call. */
	static readonly DESCRIBE_GROUP_MEMBERSHIP: string[] = [
		"identitystore:DescribeGroupMembership",
		"sso-directory:ListGroupsForMember",
		"sso-directory:ListGroupsForUser",
	];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DESCRIBE_USER: string[] = [
		"identitystore:DescribeUser",
		"sso-directory:DescribeUser",
		"sso-directory:DescribeUsers",
	];
	/** IAM actions required for the GetGroupId API call. */
	static readonly GET_GROUP_ID: string[] = [
		"identitystore:GetGroupId",
		"sso-directory:GetGroupId",
	];
	/** IAM actions required for the GetGroupMembershipId API call. */
	static readonly GET_GROUP_MEMBERSHIP_ID: string[] = [
		"identitystore:GetGroupMembershipId",
		"sso-directory:ListGroupsForMember",
		"sso-directory:ListGroupsForUser",
	];
	/** IAM actions required for the GetUserId API call. */
	static readonly GET_USER_ID: string[] = [
		"identitystore:GetUserId",
		"sso-directory:GetUserId",
	];
	/** IAM actions required for the IsMemberInGroups API call. */
	static readonly IS_MEMBER_IN_GROUPS: string[] = [
		"sso-directory:IsMemberInGroup",
		"identitystore:IsMemberInGroups",
		"sso-directory:IsMemberInGroups",
	];
	/** IAM actions required for the ListGroupMemberships API call. */
	static readonly LIST_GROUP_MEMBERSHIPS: string[] = [
		"identitystore:ListGroupMemberships",
		"sso-directory:ListMembersInGroup",
	];
	/** IAM actions required for the ListGroupMembershipsForMember API call. */
	static readonly LIST_GROUP_MEMBERSHIPS_FOR_MEMBER: string[] = [
		"identitystore:ListGroupMembershipsForMember",
		"sso-directory:ListGroupsForMember",
		"sso-directory:ListGroupsForUser",
	];
	/** IAM actions required for the ListGroups API call. */
	static readonly LIST_GROUPS: string[] = [
		"identitystore:ListGroups",
		"sso-directory:ListGroups",
		"sso-directory:SearchGroups",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = [
		"identitystore:ListUsers",
		"sso-directory:ListUsers",
		"sso-directory:SearchUsers",
	];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UPDATE_GROUP: string[] = [
		"identitystore:UpdateGroup",
		"sso-directory:UpdateGroup",
		"sso-directory:UpdateGroupDisplayName",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = [
		"identitystore:UpdateUser",
		"sso-directory:UpdateUser",
		"sso-directory:UpdateUserName",
	];
}

/**
 * Condition key constants and builders for identitystore.
 */
export class IdentitystoreConditions {
	/** Condition keys applicable to the CreateGroup action. */
	static readonly CREATE_GROUP_CONDITION_KEYS: string[] = [
		"identitystore:GroupExternalIdIssuers",
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the CreateGroupMembership action. */
	static readonly CREATE_GROUP_MEMBERSHIP_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CREATE_USER_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
		"identitystore:ReservedUserId",
		"identitystore:UserExternalIdIssuers",
	];
	/** Condition keys applicable to the DeleteGroup action. */
	static readonly DELETE_GROUP_CONDITION_KEYS: string[] = [
		"identitystore:GroupExternalIdIssuers",
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the DeleteGroupMembership action. */
	static readonly DELETE_GROUP_MEMBERSHIP_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the DeleteUser action. */
	static readonly DELETE_USER_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
		"identitystore:UserExternalIdIssuers",
	];
	/** Condition keys applicable to the DescribeGroup action. */
	static readonly DESCRIBE_GROUP_CONDITION_KEYS: string[] = [
		"identitystore:GroupExternalIdIssuers",
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the DescribeGroupMembership action. */
	static readonly DESCRIBE_GROUP_MEMBERSHIP_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the DescribeRegion action. */
	static readonly DESCRIBE_REGION_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the DescribeUser action. */
	static readonly DESCRIBE_USER_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
		"identitystore:UserExternalIdIssuers",
	];
	/** Condition keys applicable to the GetGroupId action. */
	static readonly GET_GROUP_ID_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the GetGroupMembershipId action. */
	static readonly GET_GROUP_MEMBERSHIP_ID_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the GetUserId action. */
	static readonly GET_USER_ID_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the IsMemberInGroups action. */
	static readonly IS_MEMBER_IN_GROUPS_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the ListGroupMemberships action. */
	static readonly LIST_GROUP_MEMBERSHIPS_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the ListGroupMembershipsForMember action. */
	static readonly LIST_GROUP_MEMBERSHIPS_FOR_MEMBER_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the ListGroups action. */
	static readonly LIST_GROUPS_CONDITION_KEYS: string[] = [
		"identitystore:GroupExternalIdIssuers",
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the ListRegions action. */
	static readonly LIST_REGIONS_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the ListUsers action. */
	static readonly LIST_USERS_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
		"identitystore:UserExternalIdIssuers",
	];
	/** Condition keys applicable to the ReserveUser action. */
	static readonly RESERVE_USER_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the UpdateGroup action. */
	static readonly UPDATE_GROUP_CONDITION_KEYS: string[] = [
		"identitystore:GroupExternalIdIssuers",
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the UpdateUser action. */
	static readonly UPDATE_USER_CONDITION_KEYS: string[] = [
		"identitystore:PrimaryRegion",
		"identitystore:UserExternalIdIssuers",
	];

	/** Condition key: identitystore:GroupExternalIdIssuers (ArrayOfARN) */
	static readonly GROUP_EXTERNAL_ID_ISSUERS =
		"identitystore:GroupExternalIdIssuers";
	/** Condition key: identitystore:IdentityStoreArn (ARN) */
	static readonly IDENTITY_STORE_ARN = "identitystore:IdentityStoreArn";
	/** Condition key: identitystore:PrimaryRegion (String) */
	static readonly PRIMARY_REGION = "identitystore:PrimaryRegion";
	/** Condition key: identitystore:ReservedUserId (String) */
	static readonly RESERVED_USER_ID = "identitystore:ReservedUserId";
	/** Condition key: identitystore:UserExternalIdIssuers (ArrayOfARN) */
	static readonly USER_EXTERNAL_ID_ISSUERS =
		"identitystore:UserExternalIdIssuers";
	/** Condition key: identitystore:UserId (String) */
	static readonly USER_ID = "identitystore:UserId";

	/**
	 * Generates a condition block for `identitystore:GroupExternalIdIssuers`.
	 */
	static groupExternalIdIssuers(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": {
				"identitystore:GroupExternalIdIssuers": values,
			},
		};
	}

	/**
	 * Generates a condition block for `identitystore:IdentityStoreArn`.
	 */
	static identityStoreARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "identitystore:IdentityStoreArn": value } };
	}

	/**
	 * Generates a condition block for `identitystore:PrimaryRegion`.
	 */
	static primaryRegion(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "identitystore:PrimaryRegion": value } };
	}

	/**
	 * Generates a condition block for `identitystore:ReservedUserId`.
	 */
	static reservedUserId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "identitystore:ReservedUserId": value } };
	}

	/**
	 * Generates a condition block for `identitystore:UserExternalIdIssuers`.
	 */
	static userExternalIdIssuers(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": {
				"identitystore:UserExternalIdIssuers": values,
			},
		};
	}

	/**
	 * Generates a condition block for `identitystore:UserId`.
	 */
	static userId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "identitystore:UserId": value } };
	}
}
