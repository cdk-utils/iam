// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sso-directory.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sso-directory service.
 */
export class SSODirectoryActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sso-directory";

	/** [Write] sso-directory:AddMemberToGroup */
	static readonly AddMemberToGroup = "sso-directory:AddMemberToGroup";
	/** [Write] sso-directory:CompleteVirtualMfaDeviceRegistration */
	static readonly CompleteVirtualMfaDeviceRegistration =
		"sso-directory:CompleteVirtualMfaDeviceRegistration";
	/** [Write] sso-directory:CompleteWebAuthnDeviceRegistration */
	static readonly CompleteWebAuthnDeviceRegistration =
		"sso-directory:CompleteWebAuthnDeviceRegistration";
	/** [Write] sso-directory:CreateAlias */
	static readonly CreateAlias = "sso-directory:CreateAlias";
	/** [Write] sso-directory:CreateBearerToken */
	static readonly CreateBearerToken = "sso-directory:CreateBearerToken";
	/** [Write] sso-directory:CreateExternalIdPConfigurationForDirectory */
	static readonly CreateExternalIdPConfigurationForDirectory =
		"sso-directory:CreateExternalIdPConfigurationForDirectory";
	/** [Write] sso-directory:CreateGroup */
	static readonly CreateGroup = "sso-directory:CreateGroup";
	/** [Write] sso-directory:CreateProvisioningTenant */
	static readonly CreateProvisioningTenant =
		"sso-directory:CreateProvisioningTenant";
	/** [Write] sso-directory:CreateUser */
	static readonly CreateUser = "sso-directory:CreateUser";
	/** [Write] sso-directory:DeleteBearerToken */
	static readonly DeleteBearerToken = "sso-directory:DeleteBearerToken";
	/** [Write] sso-directory:DeleteExternalIdPCertificate */
	static readonly DeleteExternalIdPCertificate =
		"sso-directory:DeleteExternalIdPCertificate";
	/** [Write] sso-directory:DeleteExternalIdPConfigurationForDirectory */
	static readonly DeleteExternalIdPConfigurationForDirectory =
		"sso-directory:DeleteExternalIdPConfigurationForDirectory";
	/** [Write] sso-directory:DeleteGroup */
	static readonly DeleteGroup = "sso-directory:DeleteGroup";
	/** [Write] sso-directory:DeleteMfaDeviceForUser */
	static readonly DeleteMfaDeviceForUser =
		"sso-directory:DeleteMfaDeviceForUser";
	/** [Write] sso-directory:DeleteProvisioningTenant */
	static readonly DeleteProvisioningTenant =
		"sso-directory:DeleteProvisioningTenant";
	/** [Write] sso-directory:DeleteUser */
	static readonly DeleteUser = "sso-directory:DeleteUser";
	/** [Read] sso-directory:DescribeDirectory */
	static readonly DescribeDirectory = "sso-directory:DescribeDirectory";
	/** [Read] sso-directory:DescribeGroup */
	static readonly DescribeGroup = "sso-directory:DescribeGroup";
	/** [Read] sso-directory:DescribeGroups */
	static readonly DescribeGroups = "sso-directory:DescribeGroups";
	/** [Read] sso-directory:DescribeProvisioningTenant */
	static readonly DescribeProvisioningTenant =
		"sso-directory:DescribeProvisioningTenant";
	/** [Read] sso-directory:DescribeUser */
	static readonly DescribeUser = "sso-directory:DescribeUser";
	/** [Read] sso-directory:DescribeUserByUniqueAttribute */
	static readonly DescribeUserByUniqueAttribute =
		"sso-directory:DescribeUserByUniqueAttribute";
	/** [Read] sso-directory:DescribeUsers */
	static readonly DescribeUsers = "sso-directory:DescribeUsers";
	/** [Write] sso-directory:DisableExternalIdPConfigurationForDirectory */
	static readonly DisableExternalIdPConfigurationForDirectory =
		"sso-directory:DisableExternalIdPConfigurationForDirectory";
	/** [Write] sso-directory:DisableUser */
	static readonly DisableUser = "sso-directory:DisableUser";
	/** [Write] sso-directory:EnableExternalIdPConfigurationForDirectory */
	static readonly EnableExternalIdPConfigurationForDirectory =
		"sso-directory:EnableExternalIdPConfigurationForDirectory";
	/** [Write] sso-directory:EnableUser */
	static readonly EnableUser = "sso-directory:EnableUser";
	/** [Read] sso-directory:GetAWSSPConfigurationForDirectory */
	static readonly actionGetAWSSPConfigurationForDirectory =
		"sso-directory:GetAWSSPConfigurationForDirectory";
	/** [Read] sso-directory:GetGroupId */
	static readonly actionGetGroupId = "sso-directory:GetGroupId";
	/** [Read] sso-directory:GetUserId */
	static readonly actionGetUserId = "sso-directory:GetUserId";
	/** [Read] sso-directory:GetUserPoolInfo */
	static readonly actionGetUserPoolInfo = "sso-directory:GetUserPoolInfo";
	/** [Write] sso-directory:ImportExternalIdPCertificate */
	static readonly ImportExternalIdPCertificate =
		"sso-directory:ImportExternalIdPCertificate";
	/** [Read] sso-directory:IsMemberInGroup */
	static readonly IsMemberInGroup = "sso-directory:IsMemberInGroup";
	/** [Read] sso-directory:IsMemberInGroups */
	static readonly IsMemberInGroups = "sso-directory:IsMemberInGroups";
	/** [Read] sso-directory:ListBearerTokens */
	static readonly ListBearerTokens = "sso-directory:ListBearerTokens";
	/** [Read] sso-directory:ListExternalIdPCertificates */
	static readonly ListExternalIdPCertificates =
		"sso-directory:ListExternalIdPCertificates";
	/** [Read] sso-directory:ListExternalIdPConfigurationsForDirectory */
	static readonly ListExternalIdPConfigurationsForDirectory =
		"sso-directory:ListExternalIdPConfigurationsForDirectory";
	/** [Read] sso-directory:ListGroups */
	static readonly ListGroups = "sso-directory:ListGroups";
	/** [Read] sso-directory:ListGroupsForMember */
	static readonly ListGroupsForMember = "sso-directory:ListGroupsForMember";
	/** [Read] sso-directory:ListGroupsForUser */
	static readonly ListGroupsForUser = "sso-directory:ListGroupsForUser";
	/** [Read] sso-directory:ListMembersInGroup */
	static readonly ListMembersInGroup = "sso-directory:ListMembersInGroup";
	/** [Read] sso-directory:ListMfaDevicesForUser */
	static readonly ListMfaDevicesForUser = "sso-directory:ListMfaDevicesForUser";
	/** [Read] sso-directory:ListProvisioningTenants */
	static readonly ListProvisioningTenants =
		"sso-directory:ListProvisioningTenants";
	/** [Read] sso-directory:ListUsers */
	static readonly ListUsers = "sso-directory:ListUsers";
	/** [Write] sso-directory:RemoveMemberFromGroup */
	static readonly RemoveMemberFromGroup = "sso-directory:RemoveMemberFromGroup";
	/** [Read] sso-directory:SearchGroups */
	static readonly SearchGroups = "sso-directory:SearchGroups";
	/** [Read] sso-directory:SearchUsers */
	static readonly SearchUsers = "sso-directory:SearchUsers";
	/** [Write] sso-directory:StartVirtualMfaDeviceRegistration */
	static readonly StartVirtualMfaDeviceRegistration =
		"sso-directory:StartVirtualMfaDeviceRegistration";
	/** [Write] sso-directory:StartWebAuthnDeviceRegistration */
	static readonly StartWebAuthnDeviceRegistration =
		"sso-directory:StartWebAuthnDeviceRegistration";
	/** [Write] sso-directory:UpdateExternalIdPConfigurationForDirectory */
	static readonly UpdateExternalIdPConfigurationForDirectory =
		"sso-directory:UpdateExternalIdPConfigurationForDirectory";
	/** [Write] sso-directory:UpdateGroup */
	static readonly UpdateGroup = "sso-directory:UpdateGroup";
	/** [Write] sso-directory:UpdateGroupDisplayName */
	static readonly UpdateGroupDisplayName =
		"sso-directory:UpdateGroupDisplayName";
	/** [Write] sso-directory:UpdateMfaDeviceForUser */
	static readonly UpdateMfaDeviceForUser =
		"sso-directory:UpdateMfaDeviceForUser";
	/** [Write] sso-directory:UpdatePassword */
	static readonly UpdatePassword = "sso-directory:UpdatePassword";
	/** [Write] sso-directory:UpdateUser */
	static readonly UpdateUser = "sso-directory:UpdateUser";
	/** [Write] sso-directory:UpdateUserName */
	static readonly UpdateUserName = "sso-directory:UpdateUserName";
	/** [Write] sso-directory:VerifyEmail */
	static readonly VerifyEmail = "sso-directory:VerifyEmail";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SSODirectoryActions.DescribeDirectory,
		SSODirectoryActions.DescribeGroup,
		SSODirectoryActions.DescribeGroups,
		SSODirectoryActions.DescribeProvisioningTenant,
		SSODirectoryActions.DescribeUser,
		SSODirectoryActions.DescribeUserByUniqueAttribute,
		SSODirectoryActions.DescribeUsers,
		SSODirectoryActions.actionGetAWSSPConfigurationForDirectory,
		SSODirectoryActions.actionGetGroupId,
		SSODirectoryActions.actionGetUserId,
		SSODirectoryActions.actionGetUserPoolInfo,
		SSODirectoryActions.IsMemberInGroup,
		SSODirectoryActions.IsMemberInGroups,
		SSODirectoryActions.ListBearerTokens,
		SSODirectoryActions.ListExternalIdPCertificates,
		SSODirectoryActions.ListExternalIdPConfigurationsForDirectory,
		SSODirectoryActions.ListGroups,
		SSODirectoryActions.ListGroupsForMember,
		SSODirectoryActions.ListGroupsForUser,
		SSODirectoryActions.ListMembersInGroup,
		SSODirectoryActions.ListMfaDevicesForUser,
		SSODirectoryActions.ListProvisioningTenants,
		SSODirectoryActions.ListUsers,
		SSODirectoryActions.SearchGroups,
		SSODirectoryActions.SearchUsers,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SSODirectoryActions.AddMemberToGroup,
		SSODirectoryActions.CompleteVirtualMfaDeviceRegistration,
		SSODirectoryActions.CompleteWebAuthnDeviceRegistration,
		SSODirectoryActions.CreateAlias,
		SSODirectoryActions.CreateBearerToken,
		SSODirectoryActions.CreateExternalIdPConfigurationForDirectory,
		SSODirectoryActions.CreateGroup,
		SSODirectoryActions.CreateProvisioningTenant,
		SSODirectoryActions.CreateUser,
		SSODirectoryActions.DeleteBearerToken,
		SSODirectoryActions.DeleteExternalIdPCertificate,
		SSODirectoryActions.DeleteExternalIdPConfigurationForDirectory,
		SSODirectoryActions.DeleteGroup,
		SSODirectoryActions.DeleteMfaDeviceForUser,
		SSODirectoryActions.DeleteProvisioningTenant,
		SSODirectoryActions.DeleteUser,
		SSODirectoryActions.DisableExternalIdPConfigurationForDirectory,
		SSODirectoryActions.DisableUser,
		SSODirectoryActions.EnableExternalIdPConfigurationForDirectory,
		SSODirectoryActions.EnableUser,
		SSODirectoryActions.ImportExternalIdPCertificate,
		SSODirectoryActions.RemoveMemberFromGroup,
		SSODirectoryActions.StartVirtualMfaDeviceRegistration,
		SSODirectoryActions.StartWebAuthnDeviceRegistration,
		SSODirectoryActions.UpdateExternalIdPConfigurationForDirectory,
		SSODirectoryActions.UpdateGroup,
		SSODirectoryActions.UpdateGroupDisplayName,
		SSODirectoryActions.UpdateMfaDeviceForUser,
		SSODirectoryActions.UpdatePassword,
		SSODirectoryActions.UpdateUser,
		SSODirectoryActions.UpdateUserName,
		SSODirectoryActions.VerifyEmail,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
