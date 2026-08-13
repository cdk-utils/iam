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
	static readonly AddRegion = "identitystore:AddRegion";
	/** [Write] identitystore:CreateGroup */
	static readonly CreateGroup = "identitystore:CreateGroup";
	/** [Write] identitystore:CreateGroupMembership */
	static readonly CreateGroupMembership = "identitystore:CreateGroupMembership";
	/** [Write] identitystore:CreateIdentityStore */
	static readonly CreateIdentityStore = "identitystore:CreateIdentityStore";
	/** [Write] identitystore:CreateUser */
	static readonly CreateUser = "identitystore:CreateUser";
	/** [Write] identitystore:DeleteGroup */
	static readonly DeleteGroup = "identitystore:DeleteGroup";
	/** [Write] identitystore:DeleteGroupMembership */
	static readonly DeleteGroupMembership = "identitystore:DeleteGroupMembership";
	/** [Write] identitystore:DeleteIdentityStore */
	static readonly DeleteIdentityStore = "identitystore:DeleteIdentityStore";
	/** [Write] identitystore:DeleteUser */
	static readonly DeleteUser = "identitystore:DeleteUser";
	/** [Read] identitystore:DescribeGroup */
	static readonly DescribeGroup = "identitystore:DescribeGroup";
	/** [Read] identitystore:DescribeGroupMembership */
	static readonly DescribeGroupMembership =
		"identitystore:DescribeGroupMembership";
	/** [Read] identitystore:DescribeRegion */
	static readonly DescribeRegion = "identitystore:DescribeRegion";
	/** [Read] identitystore:DescribeUser */
	static readonly DescribeUser = "identitystore:DescribeUser";
	/** [Read] identitystore:GetGroupId */
	static readonly actionGetGroupId = "identitystore:GetGroupId";
	/** [Read] identitystore:GetGroupMembershipId */
	static readonly actionGetGroupMembershipId =
		"identitystore:GetGroupMembershipId";
	/** [Read] identitystore:GetUserId */
	static readonly actionGetUserId = "identitystore:GetUserId";
	/** [Read] identitystore:IsMemberInGroups */
	static readonly IsMemberInGroups = "identitystore:IsMemberInGroups";
	/** [List] identitystore:ListGroupMemberships */
	static readonly ListGroupMemberships = "identitystore:ListGroupMemberships";
	/** [List] identitystore:ListGroupMembershipsForMember */
	static readonly ListGroupMembershipsForMember =
		"identitystore:ListGroupMembershipsForMember";
	/** [List] identitystore:ListGroups */
	static readonly ListGroups = "identitystore:ListGroups";
	/** [List] identitystore:ListRegions */
	static readonly ListRegions = "identitystore:ListRegions";
	/** [List] identitystore:ListUsers */
	static readonly ListUsers = "identitystore:ListUsers";
	/** [Write] identitystore:RemoveRegion */
	static readonly RemoveRegion = "identitystore:RemoveRegion";
	/** [Write] identitystore:ReserveUser */
	static readonly ReserveUser = "identitystore:ReserveUser";
	/** [Write] identitystore:UpdateGroup */
	static readonly UpdateGroup = "identitystore:UpdateGroup";
	/** [Write] identitystore:UpdateIdentityStore */
	static readonly UpdateIdentityStore = "identitystore:UpdateIdentityStore";
	/** [Write] identitystore:UpdateUser */
	static readonly UpdateUser = "identitystore:UpdateUser";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IdentitystoreActions.DescribeGroup,
		IdentitystoreActions.DescribeGroupMembership,
		IdentitystoreActions.DescribeRegion,
		IdentitystoreActions.DescribeUser,
		IdentitystoreActions.actionGetGroupId,
		IdentitystoreActions.actionGetGroupMembershipId,
		IdentitystoreActions.actionGetUserId,
		IdentitystoreActions.IsMemberInGroups,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IdentitystoreActions.AddRegion,
		IdentitystoreActions.CreateGroup,
		IdentitystoreActions.CreateGroupMembership,
		IdentitystoreActions.CreateIdentityStore,
		IdentitystoreActions.CreateUser,
		IdentitystoreActions.DeleteGroup,
		IdentitystoreActions.DeleteGroupMembership,
		IdentitystoreActions.DeleteIdentityStore,
		IdentitystoreActions.DeleteUser,
		IdentitystoreActions.RemoveRegion,
		IdentitystoreActions.ReserveUser,
		IdentitystoreActions.UpdateGroup,
		IdentitystoreActions.UpdateIdentityStore,
		IdentitystoreActions.UpdateUser,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IdentitystoreActions.ListGroupMemberships,
		IdentitystoreActions.ListGroupMembershipsForMember,
		IdentitystoreActions.ListGroups,
		IdentitystoreActions.ListRegions,
		IdentitystoreActions.ListUsers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a AllGroupMemberships ARN.
 */
export interface IdentitystoreAllGroupMembershipsArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AllGroupMemberships ARN.
 */
export interface IdentitystoreAllGroupMembershipsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a AllGroups ARN.
 */
export interface IdentitystoreAllGroupsArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AllGroups ARN.
 */
export interface IdentitystoreAllGroupsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a AllUsers ARN.
 */
export interface IdentitystoreAllUsersArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AllUsers ARN.
 */
export interface IdentitystoreAllUsersArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a Group ARN.
 */
export interface IdentitystoreGroupArnProps {
	/** The GroupId component of the ARN. */
	readonly groupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Group ARN.
 */
export interface IdentitystoreGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupId component. */
	readonly groupId: string;
}

/**
 * Properties for building a GroupMembership ARN.
 */
export interface IdentitystoreGroupMembershipArnProps {
	/** The MembershipId component of the ARN. */
	readonly membershipId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a GroupMembership ARN.
 */
export interface IdentitystoreGroupMembershipArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MembershipId component. */
	readonly membershipId: string;
}

/**
 * Properties for building a Identitystore ARN.
 */
export interface IdentitystoreIdentitystoreArnProps {
	/** The IdentityStoreId component of the ARN. */
	readonly identityStoreId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Identitystore ARN.
 */
export interface IdentitystoreIdentitystoreArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IdentityStoreId component. */
	readonly identityStoreId: string;
}

/**
 * Properties for building a User ARN.
 */
export interface IdentitystoreUserArnProps {
	/** The UserId component of the ARN. */
	readonly userId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a User ARN.
 */
export interface IdentitystoreUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UserId component. */
	readonly userId: string;
}

const AllGroupMembershipsArnRegex =
	/^arn:(?<partition>[^:]+):identitystore:::membership\/.*$/;
const AllGroupsArnRegex = /^arn:(?<partition>[^:]+):identitystore:::group\/.*$/;
const AllUsersArnRegex = /^arn:(?<partition>[^:]+):identitystore:::user\/.*$/;
const GroupArnRegex =
	/^arn:(?<partition>[^:]+):identitystore:::group\/(?<groupId>[^:/?]+)$/;
const GroupMembershipArnRegex =
	/^arn:(?<partition>[^:]+):identitystore:::membership\/(?<membershipId>[^:/?]+)$/;
const IdentitystoreArnRegex =
	/^arn:(?<partition>[^:]+):identitystore::(?<account>[^:]*):identitystore\/(?<identityStoreId>[^:/?]+)$/;
const UserArnRegex =
	/^arn:(?<partition>[^:]+):identitystore:::user\/(?<userId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for identitystore resources.
 */
export class IdentitystoreResources {
	/**
	 * Builds an ARN for the AllGroupMemberships resource.
	 */
	static allGroupMemberships(
		props: IdentitystoreAllGroupMembershipsArnProps,
	): string {
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
	static parseAllGroupMembershipsArn(
		arn: string,
	): IdentitystoreAllGroupMembershipsArnComponents {
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
	static allGroups(props: IdentitystoreAllGroupsArnProps): string {
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
	static parseAllGroupsArn(arn: string): IdentitystoreAllGroupsArnComponents {
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
	static allUsers(props: IdentitystoreAllUsersArnProps): string {
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
	static parseAllUsersArn(arn: string): IdentitystoreAllUsersArnComponents {
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
	static group(props: IdentitystoreGroupArnProps): string {
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
	static parseGroupArn(arn: string): IdentitystoreGroupArnComponents {
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
	static groupMembership(props: IdentitystoreGroupMembershipArnProps): string {
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
	static parseGroupMembershipArn(
		arn: string,
	): IdentitystoreGroupMembershipArnComponents {
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
	static identitystore(props: IdentitystoreIdentitystoreArnProps): string {
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
	static parseIdentitystoreArn(
		arn: string,
	): IdentitystoreIdentitystoreArnComponents {
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
	static user(props: IdentitystoreUserArnProps): string {
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
	static parseUserArn(arn: string): IdentitystoreUserArnComponents {
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
	static readonly CreateGroup: string[] = [
		"identitystore:CreateGroup",
		"sso-directory:CreateGroup",
	];
	/** IAM actions required for the CreateGroupMembership API call. */
	static readonly CreateGroupMembership: string[] = [
		"sso-directory:AddMemberToGroup",
		"identitystore:CreateGroupMembership",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = [
		"identitystore:CreateUser",
		"sso-directory:CreateUser",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DeleteGroup: string[] = [
		"identitystore:DeleteGroup",
		"sso-directory:DeleteGroup",
	];
	/** IAM actions required for the DeleteGroupMembership API call. */
	static readonly DeleteGroupMembership: string[] = [
		"identitystore:DeleteGroupMembership",
		"sso-directory:RemoveMemberFromGroup",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = [
		"identitystore:DeleteUser",
		"sso-directory:DeleteUser",
	];
	/** IAM actions required for the DescribeGroup API call. */
	static readonly DescribeGroup: string[] = [
		"identitystore:DescribeGroup",
		"sso-directory:DescribeGroup",
		"sso-directory:DescribeGroups",
	];
	/** IAM actions required for the DescribeGroupMembership API call. */
	static readonly DescribeGroupMembership: string[] = [
		"identitystore:DescribeGroupMembership",
		"sso-directory:ListGroupsForMember",
		"sso-directory:ListGroupsForUser",
	];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DescribeUser: string[] = [
		"identitystore:DescribeUser",
		"sso-directory:DescribeUser",
		"sso-directory:DescribeUsers",
	];
	/** IAM actions required for the GetGroupId API call. */
	static readonly opGetGroupId: string[] = [
		"identitystore:GetGroupId",
		"sso-directory:GetGroupId",
	];
	/** IAM actions required for the GetGroupMembershipId API call. */
	static readonly opGetGroupMembershipId: string[] = [
		"identitystore:GetGroupMembershipId",
		"sso-directory:ListGroupsForMember",
		"sso-directory:ListGroupsForUser",
	];
	/** IAM actions required for the GetUserId API call. */
	static readonly opGetUserId: string[] = [
		"identitystore:GetUserId",
		"sso-directory:GetUserId",
	];
	/** IAM actions required for the IsMemberInGroups API call. */
	static readonly IsMemberInGroups: string[] = [
		"sso-directory:IsMemberInGroup",
		"identitystore:IsMemberInGroups",
		"sso-directory:IsMemberInGroups",
	];
	/** IAM actions required for the ListGroupMemberships API call. */
	static readonly ListGroupMemberships: string[] = [
		"identitystore:ListGroupMemberships",
		"sso-directory:ListMembersInGroup",
	];
	/** IAM actions required for the ListGroupMembershipsForMember API call. */
	static readonly ListGroupMembershipsForMember: string[] = [
		"identitystore:ListGroupMembershipsForMember",
		"sso-directory:ListGroupsForMember",
		"sso-directory:ListGroupsForUser",
	];
	/** IAM actions required for the ListGroups API call. */
	static readonly ListGroups: string[] = [
		"identitystore:ListGroups",
		"sso-directory:ListGroups",
		"sso-directory:SearchGroups",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly ListUsers: string[] = [
		"identitystore:ListUsers",
		"sso-directory:ListUsers",
		"sso-directory:SearchUsers",
	];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UpdateGroup: string[] = [
		"identitystore:UpdateGroup",
		"sso-directory:UpdateGroup",
		"sso-directory:UpdateGroupDisplayName",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UpdateUser: string[] = [
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
	static readonly CreateGroupConditionKeys: string[] = [
		"identitystore:GroupExternalIdIssuers",
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the CreateGroupMembership action. */
	static readonly CreateGroupMembershipConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CreateUserConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
		"identitystore:ReservedUserId",
		"identitystore:UserExternalIdIssuers",
	];
	/** Condition keys applicable to the DeleteGroup action. */
	static readonly DeleteGroupConditionKeys: string[] = [
		"identitystore:GroupExternalIdIssuers",
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the DeleteGroupMembership action. */
	static readonly DeleteGroupMembershipConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the DeleteUser action. */
	static readonly DeleteUserConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
		"identitystore:UserExternalIdIssuers",
	];
	/** Condition keys applicable to the DescribeGroup action. */
	static readonly DescribeGroupConditionKeys: string[] = [
		"identitystore:GroupExternalIdIssuers",
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the DescribeGroupMembership action. */
	static readonly DescribeGroupMembershipConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the DescribeRegion action. */
	static readonly DescribeRegionConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the DescribeUser action. */
	static readonly DescribeUserConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
		"identitystore:UserExternalIdIssuers",
	];
	/** Condition keys applicable to the GetGroupId action. */
	static readonly actionGetGroupIdConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the GetGroupMembershipId action. */
	static readonly actionGetGroupMembershipIdConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the GetUserId action. */
	static readonly actionGetUserIdConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the IsMemberInGroups action. */
	static readonly IsMemberInGroupsConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the ListGroupMemberships action. */
	static readonly ListGroupMembershipsConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the ListGroupMembershipsForMember action. */
	static readonly ListGroupMembershipsForMemberConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the ListGroups action. */
	static readonly ListGroupsConditionKeys: string[] = [
		"identitystore:GroupExternalIdIssuers",
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the ListRegions action. */
	static readonly ListRegionsConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the ListUsers action. */
	static readonly ListUsersConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
		"identitystore:UserExternalIdIssuers",
	];
	/** Condition keys applicable to the ReserveUser action. */
	static readonly ReserveUserConditionKeys: string[] = [
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the UpdateGroup action. */
	static readonly UpdateGroupConditionKeys: string[] = [
		"identitystore:GroupExternalIdIssuers",
		"identitystore:PrimaryRegion",
	];
	/** Condition keys applicable to the UpdateUser action. */
	static readonly UpdateUserConditionKeys: string[] = [
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
