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
	static readonly ADD_MEMBER_TO_GROUP = "sso-directory:AddMemberToGroup";
	/** [Write] sso-directory:CompleteVirtualMfaDeviceRegistration */
	static readonly COMPLETE_VIRTUAL_MFA_DEVICE_REGISTRATION =
		"sso-directory:CompleteVirtualMfaDeviceRegistration";
	/** [Write] sso-directory:CompleteWebAuthnDeviceRegistration */
	static readonly COMPLETE_WEB_AUTHN_DEVICE_REGISTRATION =
		"sso-directory:CompleteWebAuthnDeviceRegistration";
	/** [Write] sso-directory:CreateAlias */
	static readonly CREATE_ALIAS = "sso-directory:CreateAlias";
	/** [Write] sso-directory:CreateBearerToken */
	static readonly CREATE_BEARER_TOKEN = "sso-directory:CreateBearerToken";
	/** [Write] sso-directory:CreateExternalIdPConfigurationForDirectory */
	static readonly CREATE_EXTERNAL_ID_P_CONFIGURATION_FOR_DIRECTORY =
		"sso-directory:CreateExternalIdPConfigurationForDirectory";
	/** [Write] sso-directory:CreateGroup */
	static readonly CREATE_GROUP = "sso-directory:CreateGroup";
	/** [Write] sso-directory:CreateProvisioningTenant */
	static readonly CREATE_PROVISIONING_TENANT =
		"sso-directory:CreateProvisioningTenant";
	/** [Write] sso-directory:CreateUser */
	static readonly CREATE_USER = "sso-directory:CreateUser";
	/** [Write] sso-directory:DeleteBearerToken */
	static readonly DELETE_BEARER_TOKEN = "sso-directory:DeleteBearerToken";
	/** [Write] sso-directory:DeleteExternalIdPCertificate */
	static readonly DELETE_EXTERNAL_ID_P_CERTIFICATE =
		"sso-directory:DeleteExternalIdPCertificate";
	/** [Write] sso-directory:DeleteExternalIdPConfigurationForDirectory */
	static readonly DELETE_EXTERNAL_ID_P_CONFIGURATION_FOR_DIRECTORY =
		"sso-directory:DeleteExternalIdPConfigurationForDirectory";
	/** [Write] sso-directory:DeleteGroup */
	static readonly DELETE_GROUP = "sso-directory:DeleteGroup";
	/** [Write] sso-directory:DeleteMfaDeviceForUser */
	static readonly DELETE_MFA_DEVICE_FOR_USER =
		"sso-directory:DeleteMfaDeviceForUser";
	/** [Write] sso-directory:DeleteProvisioningTenant */
	static readonly DELETE_PROVISIONING_TENANT =
		"sso-directory:DeleteProvisioningTenant";
	/** [Write] sso-directory:DeleteUser */
	static readonly DELETE_USER = "sso-directory:DeleteUser";
	/** [Read] sso-directory:DescribeDirectory */
	static readonly DESCRIBE_DIRECTORY = "sso-directory:DescribeDirectory";
	/** [Read] sso-directory:DescribeGroup */
	static readonly DESCRIBE_GROUP = "sso-directory:DescribeGroup";
	/** [Read] sso-directory:DescribeGroups */
	static readonly DESCRIBE_GROUPS = "sso-directory:DescribeGroups";
	/** [Read] sso-directory:DescribeProvisioningTenant */
	static readonly DESCRIBE_PROVISIONING_TENANT =
		"sso-directory:DescribeProvisioningTenant";
	/** [Read] sso-directory:DescribeUser */
	static readonly DESCRIBE_USER = "sso-directory:DescribeUser";
	/** [Read] sso-directory:DescribeUserByUniqueAttribute */
	static readonly DESCRIBE_USER_BY_UNIQUE_ATTRIBUTE =
		"sso-directory:DescribeUserByUniqueAttribute";
	/** [Read] sso-directory:DescribeUsers */
	static readonly DESCRIBE_USERS = "sso-directory:DescribeUsers";
	/** [Write] sso-directory:DisableExternalIdPConfigurationForDirectory */
	static readonly DISABLE_EXTERNAL_ID_P_CONFIGURATION_FOR_DIRECTORY =
		"sso-directory:DisableExternalIdPConfigurationForDirectory";
	/** [Write] sso-directory:DisableUser */
	static readonly DISABLE_USER = "sso-directory:DisableUser";
	/** [Write] sso-directory:EnableExternalIdPConfigurationForDirectory */
	static readonly ENABLE_EXTERNAL_ID_P_CONFIGURATION_FOR_DIRECTORY =
		"sso-directory:EnableExternalIdPConfigurationForDirectory";
	/** [Write] sso-directory:EnableUser */
	static readonly ENABLE_USER = "sso-directory:EnableUser";
	/** [Read] sso-directory:GetAWSSPConfigurationForDirectory */
	static readonly GET_AWSSP_CONFIGURATION_FOR_DIRECTORY =
		"sso-directory:GetAWSSPConfigurationForDirectory";
	/** [Read] sso-directory:GetGroupId */
	static readonly GET_GROUP_ID = "sso-directory:GetGroupId";
	/** [Read] sso-directory:GetUserId */
	static readonly GET_USER_ID = "sso-directory:GetUserId";
	/** [Read] sso-directory:GetUserPoolInfo */
	static readonly GET_USER_POOL_INFO = "sso-directory:GetUserPoolInfo";
	/** [Write] sso-directory:ImportExternalIdPCertificate */
	static readonly IMPORT_EXTERNAL_ID_P_CERTIFICATE =
		"sso-directory:ImportExternalIdPCertificate";
	/** [Read] sso-directory:IsMemberInGroup */
	static readonly IS_MEMBER_IN_GROUP = "sso-directory:IsMemberInGroup";
	/** [Read] sso-directory:IsMemberInGroups */
	static readonly IS_MEMBER_IN_GROUPS = "sso-directory:IsMemberInGroups";
	/** [Read] sso-directory:ListBearerTokens */
	static readonly LIST_BEARER_TOKENS = "sso-directory:ListBearerTokens";
	/** [Read] sso-directory:ListExternalIdPCertificates */
	static readonly LIST_EXTERNAL_ID_P_CERTIFICATES =
		"sso-directory:ListExternalIdPCertificates";
	/** [Read] sso-directory:ListExternalIdPConfigurationsForDirectory */
	static readonly LIST_EXTERNAL_ID_P_CONFIGURATIONS_FOR_DIRECTORY =
		"sso-directory:ListExternalIdPConfigurationsForDirectory";
	/** [Read] sso-directory:ListGroups */
	static readonly LIST_GROUPS = "sso-directory:ListGroups";
	/** [Read] sso-directory:ListGroupsForMember */
	static readonly LIST_GROUPS_FOR_MEMBER = "sso-directory:ListGroupsForMember";
	/** [Read] sso-directory:ListGroupsForUser */
	static readonly LIST_GROUPS_FOR_USER = "sso-directory:ListGroupsForUser";
	/** [Read] sso-directory:ListMembersInGroup */
	static readonly LIST_MEMBERS_IN_GROUP = "sso-directory:ListMembersInGroup";
	/** [Read] sso-directory:ListMfaDevicesForUser */
	static readonly LIST_MFA_DEVICES_FOR_USER =
		"sso-directory:ListMfaDevicesForUser";
	/** [Read] sso-directory:ListProvisioningTenants */
	static readonly LIST_PROVISIONING_TENANTS =
		"sso-directory:ListProvisioningTenants";
	/** [Read] sso-directory:ListUsers */
	static readonly LIST_USERS = "sso-directory:ListUsers";
	/** [Write] sso-directory:RemoveMemberFromGroup */
	static readonly REMOVE_MEMBER_FROM_GROUP =
		"sso-directory:RemoveMemberFromGroup";
	/** [Read] sso-directory:SearchGroups */
	static readonly SEARCH_GROUPS = "sso-directory:SearchGroups";
	/** [Read] sso-directory:SearchUsers */
	static readonly SEARCH_USERS = "sso-directory:SearchUsers";
	/** [Write] sso-directory:StartVirtualMfaDeviceRegistration */
	static readonly START_VIRTUAL_MFA_DEVICE_REGISTRATION =
		"sso-directory:StartVirtualMfaDeviceRegistration";
	/** [Write] sso-directory:StartWebAuthnDeviceRegistration */
	static readonly START_WEB_AUTHN_DEVICE_REGISTRATION =
		"sso-directory:StartWebAuthnDeviceRegistration";
	/** [Write] sso-directory:UpdateExternalIdPConfigurationForDirectory */
	static readonly UPDATE_EXTERNAL_ID_P_CONFIGURATION_FOR_DIRECTORY =
		"sso-directory:UpdateExternalIdPConfigurationForDirectory";
	/** [Write] sso-directory:UpdateGroup */
	static readonly UPDATE_GROUP = "sso-directory:UpdateGroup";
	/** [Write] sso-directory:UpdateGroupDisplayName */
	static readonly UPDATE_GROUP_DISPLAY_NAME =
		"sso-directory:UpdateGroupDisplayName";
	/** [Write] sso-directory:UpdateMfaDeviceForUser */
	static readonly UPDATE_MFA_DEVICE_FOR_USER =
		"sso-directory:UpdateMfaDeviceForUser";
	/** [Write] sso-directory:UpdatePassword */
	static readonly UPDATE_PASSWORD = "sso-directory:UpdatePassword";
	/** [Write] sso-directory:UpdateUser */
	static readonly UPDATE_USER = "sso-directory:UpdateUser";
	/** [Write] sso-directory:UpdateUserName */
	static readonly UPDATE_USER_NAME = "sso-directory:UpdateUserName";
	/** [Write] sso-directory:VerifyEmail */
	static readonly VERIFY_EMAIL = "sso-directory:VerifyEmail";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SSODirectoryActions.DESCRIBE_DIRECTORY,
		SSODirectoryActions.DESCRIBE_GROUP,
		SSODirectoryActions.DESCRIBE_GROUPS,
		SSODirectoryActions.DESCRIBE_PROVISIONING_TENANT,
		SSODirectoryActions.DESCRIBE_USER,
		SSODirectoryActions.DESCRIBE_USER_BY_UNIQUE_ATTRIBUTE,
		SSODirectoryActions.DESCRIBE_USERS,
		SSODirectoryActions.GET_AWSSP_CONFIGURATION_FOR_DIRECTORY,
		SSODirectoryActions.GET_GROUP_ID,
		SSODirectoryActions.GET_USER_ID,
		SSODirectoryActions.GET_USER_POOL_INFO,
		SSODirectoryActions.IS_MEMBER_IN_GROUP,
		SSODirectoryActions.IS_MEMBER_IN_GROUPS,
		SSODirectoryActions.LIST_BEARER_TOKENS,
		SSODirectoryActions.LIST_EXTERNAL_ID_P_CERTIFICATES,
		SSODirectoryActions.LIST_EXTERNAL_ID_P_CONFIGURATIONS_FOR_DIRECTORY,
		SSODirectoryActions.LIST_GROUPS,
		SSODirectoryActions.LIST_GROUPS_FOR_MEMBER,
		SSODirectoryActions.LIST_GROUPS_FOR_USER,
		SSODirectoryActions.LIST_MEMBERS_IN_GROUP,
		SSODirectoryActions.LIST_MFA_DEVICES_FOR_USER,
		SSODirectoryActions.LIST_PROVISIONING_TENANTS,
		SSODirectoryActions.LIST_USERS,
		SSODirectoryActions.SEARCH_GROUPS,
		SSODirectoryActions.SEARCH_USERS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SSODirectoryActions.ADD_MEMBER_TO_GROUP,
		SSODirectoryActions.COMPLETE_VIRTUAL_MFA_DEVICE_REGISTRATION,
		SSODirectoryActions.COMPLETE_WEB_AUTHN_DEVICE_REGISTRATION,
		SSODirectoryActions.CREATE_ALIAS,
		SSODirectoryActions.CREATE_BEARER_TOKEN,
		SSODirectoryActions.CREATE_EXTERNAL_ID_P_CONFIGURATION_FOR_DIRECTORY,
		SSODirectoryActions.CREATE_GROUP,
		SSODirectoryActions.CREATE_PROVISIONING_TENANT,
		SSODirectoryActions.CREATE_USER,
		SSODirectoryActions.DELETE_BEARER_TOKEN,
		SSODirectoryActions.DELETE_EXTERNAL_ID_P_CERTIFICATE,
		SSODirectoryActions.DELETE_EXTERNAL_ID_P_CONFIGURATION_FOR_DIRECTORY,
		SSODirectoryActions.DELETE_GROUP,
		SSODirectoryActions.DELETE_MFA_DEVICE_FOR_USER,
		SSODirectoryActions.DELETE_PROVISIONING_TENANT,
		SSODirectoryActions.DELETE_USER,
		SSODirectoryActions.DISABLE_EXTERNAL_ID_P_CONFIGURATION_FOR_DIRECTORY,
		SSODirectoryActions.DISABLE_USER,
		SSODirectoryActions.ENABLE_EXTERNAL_ID_P_CONFIGURATION_FOR_DIRECTORY,
		SSODirectoryActions.ENABLE_USER,
		SSODirectoryActions.IMPORT_EXTERNAL_ID_P_CERTIFICATE,
		SSODirectoryActions.REMOVE_MEMBER_FROM_GROUP,
		SSODirectoryActions.START_VIRTUAL_MFA_DEVICE_REGISTRATION,
		SSODirectoryActions.START_WEB_AUTHN_DEVICE_REGISTRATION,
		SSODirectoryActions.UPDATE_EXTERNAL_ID_P_CONFIGURATION_FOR_DIRECTORY,
		SSODirectoryActions.UPDATE_GROUP,
		SSODirectoryActions.UPDATE_GROUP_DISPLAY_NAME,
		SSODirectoryActions.UPDATE_MFA_DEVICE_FOR_USER,
		SSODirectoryActions.UPDATE_PASSWORD,
		SSODirectoryActions.UPDATE_USER,
		SSODirectoryActions.UPDATE_USER_NAME,
		SSODirectoryActions.VERIFY_EMAIL,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
