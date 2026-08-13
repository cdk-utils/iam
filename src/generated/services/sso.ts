// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sso.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sso service.
 */
export class SSOActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sso";

	/** [Write] sso:AddRegion */
	static readonly ADD_REGION = "sso:AddRegion";
	/** [Write] sso:AssociateDirectory */
	static readonly ASSOCIATE_DIRECTORY = "sso:AssociateDirectory";
	/** [Write] sso:AssociateProfile */
	static readonly ASSOCIATE_PROFILE = "sso:AssociateProfile";
	/** [PermissionManagement] sso:AttachCustomerManagedPolicyReferenceToPermissionSet */
	static readonly ATTACH_CUSTOMER_MANAGED_POLICY_REFERENCE_TO_PERMISSION_SET =
		"sso:AttachCustomerManagedPolicyReferenceToPermissionSet";
	/** [PermissionManagement] sso:AttachManagedPolicyToPermissionSet */
	static readonly ATTACH_MANAGED_POLICY_TO_PERMISSION_SET =
		"sso:AttachManagedPolicyToPermissionSet";
	/** [Write] sso:CreateAccountAssignment */
	static readonly CREATE_ACCOUNT_ASSIGNMENT = "sso:CreateAccountAssignment";
	/** [Write] sso:CreateApplication */
	static readonly CREATE_APPLICATION = "sso:CreateApplication";
	/** [Write] sso:CreateApplicationAssignment */
	static readonly CREATE_APPLICATION_ASSIGNMENT =
		"sso:CreateApplicationAssignment";
	/** [Write] sso:CreateApplicationInstance */
	static readonly CREATE_APPLICATION_INSTANCE = "sso:CreateApplicationInstance";
	/** [Write] sso:CreateApplicationInstanceCertificate */
	static readonly CREATE_APPLICATION_INSTANCE_CERTIFICATE =
		"sso:CreateApplicationInstanceCertificate";
	/** [Write] sso:CreateInstance */
	static readonly CREATE_INSTANCE = "sso:CreateInstance";
	/** [Write] sso:CreateInstanceAccessControlAttributeConfiguration */
	static readonly CREATE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION =
		"sso:CreateInstanceAccessControlAttributeConfiguration";
	/** [Write] sso:CreateManagedApplicationInstance */
	static readonly CREATE_MANAGED_APPLICATION_INSTANCE =
		"sso:CreateManagedApplicationInstance";
	/** [Write] sso:CreatePermissionSet */
	static readonly CREATE_PERMISSION_SET = "sso:CreatePermissionSet";
	/** [Write] sso:CreateProfile */
	static readonly CREATE_PROFILE = "sso:CreateProfile";
	/** [Write] sso:CreateTrust */
	static readonly CREATE_TRUST = "sso:CreateTrust";
	/** [Write] sso:CreateTrustedTokenIssuer */
	static readonly CREATE_TRUSTED_TOKEN_ISSUER = "sso:CreateTrustedTokenIssuer";
	/** [Write] sso:DeleteAccountAssignment */
	static readonly DELETE_ACCOUNT_ASSIGNMENT = "sso:DeleteAccountAssignment";
	/** [Write] sso:DeleteApplication */
	static readonly DELETE_APPLICATION = "sso:DeleteApplication";
	/** [Write] sso:DeleteApplicationAccessScope */
	static readonly DELETE_APPLICATION_ACCESS_SCOPE =
		"sso:DeleteApplicationAccessScope";
	/** [Write] sso:DeleteApplicationAssignment */
	static readonly DELETE_APPLICATION_ASSIGNMENT =
		"sso:DeleteApplicationAssignment";
	/** [Write] sso:DeleteApplicationAuthenticationMethod */
	static readonly DELETE_APPLICATION_AUTHENTICATION_METHOD =
		"sso:DeleteApplicationAuthenticationMethod";
	/** [Write] sso:DeleteApplicationGrant */
	static readonly DELETE_APPLICATION_GRANT = "sso:DeleteApplicationGrant";
	/** [Write] sso:DeleteApplicationInstance */
	static readonly DELETE_APPLICATION_INSTANCE = "sso:DeleteApplicationInstance";
	/** [Write] sso:DeleteApplicationInstanceCertificate */
	static readonly DELETE_APPLICATION_INSTANCE_CERTIFICATE =
		"sso:DeleteApplicationInstanceCertificate";
	/** [Write] sso:DeleteInlinePolicyFromPermissionSet */
	static readonly DELETE_INLINE_POLICY_FROM_PERMISSION_SET =
		"sso:DeleteInlinePolicyFromPermissionSet";
	/** [Write] sso:DeleteInstance */
	static readonly DELETE_INSTANCE = "sso:DeleteInstance";
	/** [Write] sso:DeleteInstanceAccessControlAttributeConfiguration */
	static readonly DELETE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION =
		"sso:DeleteInstanceAccessControlAttributeConfiguration";
	/** [Write] sso:DeleteManagedApplicationInstance */
	static readonly DELETE_MANAGED_APPLICATION_INSTANCE =
		"sso:DeleteManagedApplicationInstance";
	/** [Write] sso:DeletePermissionSet */
	static readonly DELETE_PERMISSION_SET = "sso:DeletePermissionSet";
	/** [PermissionManagement] sso:DeletePermissionsBoundaryFromPermissionSet */
	static readonly DELETE_PERMISSIONS_BOUNDARY_FROM_PERMISSION_SET =
		"sso:DeletePermissionsBoundaryFromPermissionSet";
	/** [Write] sso:DeleteProfile */
	static readonly DELETE_PROFILE = "sso:DeleteProfile";
	/** [Write] sso:DeleteTrustedTokenIssuer */
	static readonly DELETE_TRUSTED_TOKEN_ISSUER = "sso:DeleteTrustedTokenIssuer";
	/** [Read] sso:DescribeAccountAssignmentCreationStatus */
	static readonly DESCRIBE_ACCOUNT_ASSIGNMENT_CREATION_STATUS =
		"sso:DescribeAccountAssignmentCreationStatus";
	/** [Read] sso:DescribeAccountAssignmentDeletionStatus */
	static readonly DESCRIBE_ACCOUNT_ASSIGNMENT_DELETION_STATUS =
		"sso:DescribeAccountAssignmentDeletionStatus";
	/** [Read] sso:DescribeApplication */
	static readonly DESCRIBE_APPLICATION = "sso:DescribeApplication";
	/** [Read] sso:DescribeApplicationAssignment */
	static readonly DESCRIBE_APPLICATION_ASSIGNMENT =
		"sso:DescribeApplicationAssignment";
	/** [Read] sso:DescribeApplicationProvider */
	static readonly DESCRIBE_APPLICATION_PROVIDER =
		"sso:DescribeApplicationProvider";
	/** [Read] sso:DescribeInstance */
	static readonly DESCRIBE_INSTANCE = "sso:DescribeInstance";
	/** [Read] sso:DescribeInstanceAccessControlAttributeConfiguration */
	static readonly DESCRIBE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION =
		"sso:DescribeInstanceAccessControlAttributeConfiguration";
	/** [Read] sso:DescribePermissionSet */
	static readonly DESCRIBE_PERMISSION_SET = "sso:DescribePermissionSet";
	/** [Read] sso:DescribePermissionSetProvisioningStatus */
	static readonly DESCRIBE_PERMISSION_SET_PROVISIONING_STATUS =
		"sso:DescribePermissionSetProvisioningStatus";
	/** [Read] sso:DescribeRegion */
	static readonly DESCRIBE_REGION = "sso:DescribeRegion";
	/** [Read] sso:DescribeRegisteredRegions */
	static readonly DESCRIBE_REGISTERED_REGIONS = "sso:DescribeRegisteredRegions";
	/** [Read] sso:DescribeTrustedTokenIssuer */
	static readonly DESCRIBE_TRUSTED_TOKEN_ISSUER =
		"sso:DescribeTrustedTokenIssuer";
	/** [PermissionManagement] sso:DetachCustomerManagedPolicyReferenceFromPermissionSet */
	static readonly DETACH_CUSTOMER_MANAGED_POLICY_REFERENCE_FROM_PERMISSION_SET =
		"sso:DetachCustomerManagedPolicyReferenceFromPermissionSet";
	/** [PermissionManagement] sso:DetachManagedPolicyFromPermissionSet */
	static readonly DETACH_MANAGED_POLICY_FROM_PERMISSION_SET =
		"sso:DetachManagedPolicyFromPermissionSet";
	/** [Write] sso:DisassociateDirectory */
	static readonly DISASSOCIATE_DIRECTORY = "sso:DisassociateDirectory";
	/** [Write] sso:DisassociateProfile */
	static readonly DISASSOCIATE_PROFILE = "sso:DisassociateProfile";
	/** [Read] sso:GetApplicationAccessScope */
	static readonly GET_APPLICATION_ACCESS_SCOPE =
		"sso:GetApplicationAccessScope";
	/** [Read] sso:GetApplicationAssignmentConfiguration */
	static readonly GET_APPLICATION_ASSIGNMENT_CONFIGURATION =
		"sso:GetApplicationAssignmentConfiguration";
	/** [Read] sso:GetApplicationAuthenticationMethod */
	static readonly GET_APPLICATION_AUTHENTICATION_METHOD =
		"sso:GetApplicationAuthenticationMethod";
	/** [Read] sso:GetApplicationGrant */
	static readonly GET_APPLICATION_GRANT = "sso:GetApplicationGrant";
	/** [Read] sso:GetApplicationInstance */
	static readonly GET_APPLICATION_INSTANCE = "sso:GetApplicationInstance";
	/** [Read] sso:GetApplicationSessionConfiguration */
	static readonly GET_APPLICATION_SESSION_CONFIGURATION =
		"sso:GetApplicationSessionConfiguration";
	/** [Read] sso:GetApplicationTemplate */
	static readonly GET_APPLICATION_TEMPLATE = "sso:GetApplicationTemplate";
	/** [Read] sso:GetInlinePolicyForPermissionSet */
	static readonly GET_INLINE_POLICY_FOR_PERMISSION_SET =
		"sso:GetInlinePolicyForPermissionSet";
	/** [Read] sso:GetManagedApplicationInstance */
	static readonly GET_MANAGED_APPLICATION_INSTANCE =
		"sso:GetManagedApplicationInstance";
	/** [Read] sso:GetMfaDeviceManagementForDirectory */
	static readonly GET_MFA_DEVICE_MANAGEMENT_FOR_DIRECTORY =
		"sso:GetMfaDeviceManagementForDirectory";
	/** [Read] sso:GetPermissionSet */
	static readonly GET_PERMISSION_SET = "sso:GetPermissionSet";
	/** [Read] sso:GetPermissionsBoundaryForPermissionSet */
	static readonly GET_PERMISSIONS_BOUNDARY_FOR_PERMISSION_SET =
		"sso:GetPermissionsBoundaryForPermissionSet";
	/** [Read] sso:GetProfile */
	static readonly GET_PROFILE = "sso:GetProfile";
	/** [Read] sso:GetSSOStatus */
	static readonly GET_SSO_STATUS = "sso:GetSSOStatus";
	/** [Read] sso:GetSharedSsoConfiguration */
	static readonly GET_SHARED_SSO_CONFIGURATION =
		"sso:GetSharedSsoConfiguration";
	/** [Read] sso:GetSsoConfiguration */
	static readonly GET_SSO_CONFIGURATION = "sso:GetSsoConfiguration";
	/** [Read] sso:GetTrust */
	static readonly GET_TRUST = "sso:GetTrust";
	/** [Write] sso:ImportApplicationInstanceServiceProviderMetadata */
	static readonly IMPORT_APPLICATION_INSTANCE_SERVICE_PROVIDER_METADATA =
		"sso:ImportApplicationInstanceServiceProviderMetadata";
	/** [List] sso:ListAccountAssignmentCreationStatus */
	static readonly LIST_ACCOUNT_ASSIGNMENT_CREATION_STATUS =
		"sso:ListAccountAssignmentCreationStatus";
	/** [List] sso:ListAccountAssignmentDeletionStatus */
	static readonly LIST_ACCOUNT_ASSIGNMENT_DELETION_STATUS =
		"sso:ListAccountAssignmentDeletionStatus";
	/** [List] sso:ListAccountAssignments */
	static readonly LIST_ACCOUNT_ASSIGNMENTS = "sso:ListAccountAssignments";
	/** [List] sso:ListAccountAssignmentsForPrincipal */
	static readonly LIST_ACCOUNT_ASSIGNMENTS_FOR_PRINCIPAL =
		"sso:ListAccountAssignmentsForPrincipal";
	/** [List] sso:ListAccountsForProvisionedPermissionSet */
	static readonly LIST_ACCOUNTS_FOR_PROVISIONED_PERMISSION_SET =
		"sso:ListAccountsForProvisionedPermissionSet";
	/** [List] sso:ListApplicationAccessScopes */
	static readonly LIST_APPLICATION_ACCESS_SCOPES =
		"sso:ListApplicationAccessScopes";
	/** [List] sso:ListApplicationAssignments */
	static readonly LIST_APPLICATION_ASSIGNMENTS =
		"sso:ListApplicationAssignments";
	/** [List] sso:ListApplicationAssignmentsForPrincipal */
	static readonly LIST_APPLICATION_ASSIGNMENTS_FOR_PRINCIPAL =
		"sso:ListApplicationAssignmentsForPrincipal";
	/** [List] sso:ListApplicationAuthenticationMethods */
	static readonly LIST_APPLICATION_AUTHENTICATION_METHODS =
		"sso:ListApplicationAuthenticationMethods";
	/** [List] sso:ListApplicationGrants */
	static readonly LIST_APPLICATION_GRANTS = "sso:ListApplicationGrants";
	/** [Read] sso:ListApplicationInstanceCertificates */
	static readonly LIST_APPLICATION_INSTANCE_CERTIFICATES =
		"sso:ListApplicationInstanceCertificates";
	/** [List] sso:ListApplicationInstances */
	static readonly LIST_APPLICATION_INSTANCES = "sso:ListApplicationInstances";
	/** [List] sso:ListApplicationProviders */
	static readonly LIST_APPLICATION_PROVIDERS = "sso:ListApplicationProviders";
	/** [List] sso:ListApplicationTemplates */
	static readonly LIST_APPLICATION_TEMPLATES = "sso:ListApplicationTemplates";
	/** [List] sso:ListApplications */
	static readonly LIST_APPLICATIONS = "sso:ListApplications";
	/** [List] sso:ListCustomerManagedPolicyReferencesInPermissionSet */
	static readonly LIST_CUSTOMER_MANAGED_POLICY_REFERENCES_IN_PERMISSION_SET =
		"sso:ListCustomerManagedPolicyReferencesInPermissionSet";
	/** [Read] sso:ListDirectoryAssociations */
	static readonly LIST_DIRECTORY_ASSOCIATIONS = "sso:ListDirectoryAssociations";
	/** [List] sso:ListInstances */
	static readonly LIST_INSTANCES = "sso:ListInstances";
	/** [List] sso:ListManagedPoliciesInPermissionSet */
	static readonly LIST_MANAGED_POLICIES_IN_PERMISSION_SET =
		"sso:ListManagedPoliciesInPermissionSet";
	/** [List] sso:ListPermissionSetProvisioningStatus */
	static readonly LIST_PERMISSION_SET_PROVISIONING_STATUS =
		"sso:ListPermissionSetProvisioningStatus";
	/** [List] sso:ListPermissionSets */
	static readonly LIST_PERMISSION_SETS = "sso:ListPermissionSets";
	/** [List] sso:ListPermissionSetsProvisionedToAccount */
	static readonly LIST_PERMISSION_SETS_PROVISIONED_TO_ACCOUNT =
		"sso:ListPermissionSetsProvisionedToAccount";
	/** [Read] sso:ListProfileAssociations */
	static readonly LIST_PROFILE_ASSOCIATIONS = "sso:ListProfileAssociations";
	/** [List] sso:ListProfiles */
	static readonly LIST_PROFILES = "sso:ListProfiles";
	/** [List] sso:ListRegions */
	static readonly LIST_REGIONS = "sso:ListRegions";
	/** [Read] sso:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "sso:ListTagsForResource";
	/** [List] sso:ListTrustedTokenIssuers */
	static readonly LIST_TRUSTED_TOKEN_ISSUERS = "sso:ListTrustedTokenIssuers";
	/** [Write] sso:ProvisionPermissionSet */
	static readonly PROVISION_PERMISSION_SET = "sso:ProvisionPermissionSet";
	/** [Write] sso:PutApplicationAccessScope */
	static readonly PUT_APPLICATION_ACCESS_SCOPE =
		"sso:PutApplicationAccessScope";
	/** [Write] sso:PutApplicationAssignmentConfiguration */
	static readonly PUT_APPLICATION_ASSIGNMENT_CONFIGURATION =
		"sso:PutApplicationAssignmentConfiguration";
	/** [Write] sso:PutApplicationAuthenticationMethod */
	static readonly PUT_APPLICATION_AUTHENTICATION_METHOD =
		"sso:PutApplicationAuthenticationMethod";
	/** [Write] sso:PutApplicationGrant */
	static readonly PUT_APPLICATION_GRANT = "sso:PutApplicationGrant";
	/** [Write] sso:PutApplicationSessionConfiguration */
	static readonly PUT_APPLICATION_SESSION_CONFIGURATION =
		"sso:PutApplicationSessionConfiguration";
	/** [Write] sso:PutInlinePolicyToPermissionSet */
	static readonly PUT_INLINE_POLICY_TO_PERMISSION_SET =
		"sso:PutInlinePolicyToPermissionSet";
	/** [Write] sso:PutMfaDeviceManagementForDirectory */
	static readonly PUT_MFA_DEVICE_MANAGEMENT_FOR_DIRECTORY =
		"sso:PutMfaDeviceManagementForDirectory";
	/** [PermissionManagement] sso:PutPermissionsBoundaryToPermissionSet */
	static readonly PUT_PERMISSIONS_BOUNDARY_TO_PERMISSION_SET =
		"sso:PutPermissionsBoundaryToPermissionSet";
	/** [PermissionManagement] sso:PutPermissionsPolicy */
	static readonly PUT_PERMISSIONS_POLICY = "sso:PutPermissionsPolicy";
	/** [Write] sso:RemoveRegion */
	static readonly REMOVE_REGION = "sso:RemoveRegion";
	/** [Read] sso:SearchGroups */
	static readonly SEARCH_GROUPS = "sso:SearchGroups";
	/** [Read] sso:SearchUsers */
	static readonly SEARCH_USERS = "sso:SearchUsers";
	/** [Write] sso:StartSSO */
	static readonly START_SSO = "sso:StartSSO";
	/** [Tagging] sso:TagResource */
	static readonly TAG_RESOURCE = "sso:TagResource";
	/** [Tagging] sso:UntagResource */
	static readonly UNTAG_RESOURCE = "sso:UntagResource";
	/** [Write] sso:UpdateApplication */
	static readonly UPDATE_APPLICATION = "sso:UpdateApplication";
	/** [Write] sso:UpdateApplicationInstanceActiveCertificate */
	static readonly UPDATE_APPLICATION_INSTANCE_ACTIVE_CERTIFICATE =
		"sso:UpdateApplicationInstanceActiveCertificate";
	/** [Write] sso:UpdateApplicationInstanceDisplayData */
	static readonly UPDATE_APPLICATION_INSTANCE_DISPLAY_DATA =
		"sso:UpdateApplicationInstanceDisplayData";
	/** [Write] sso:UpdateApplicationInstanceResponseConfiguration */
	static readonly UPDATE_APPLICATION_INSTANCE_RESPONSE_CONFIGURATION =
		"sso:UpdateApplicationInstanceResponseConfiguration";
	/** [Write] sso:UpdateApplicationInstanceResponseSchemaConfiguration */
	static readonly UPDATE_APPLICATION_INSTANCE_RESPONSE_SCHEMA_CONFIGURATION =
		"sso:UpdateApplicationInstanceResponseSchemaConfiguration";
	/** [Write] sso:UpdateApplicationInstanceSecurityConfiguration */
	static readonly UPDATE_APPLICATION_INSTANCE_SECURITY_CONFIGURATION =
		"sso:UpdateApplicationInstanceSecurityConfiguration";
	/** [Write] sso:UpdateApplicationInstanceServiceProviderConfiguration */
	static readonly UPDATE_APPLICATION_INSTANCE_SERVICE_PROVIDER_CONFIGURATION =
		"sso:UpdateApplicationInstanceServiceProviderConfiguration";
	/** [Write] sso:UpdateApplicationInstanceStatus */
	static readonly UPDATE_APPLICATION_INSTANCE_STATUS =
		"sso:UpdateApplicationInstanceStatus";
	/** [Write] sso:UpdateInstance */
	static readonly UPDATE_INSTANCE = "sso:UpdateInstance";
	/** [Write] sso:UpdateInstanceAccessControlAttributeConfiguration */
	static readonly UPDATE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION =
		"sso:UpdateInstanceAccessControlAttributeConfiguration";
	/** [Write] sso:UpdateManagedApplicationInstanceStatus */
	static readonly UPDATE_MANAGED_APPLICATION_INSTANCE_STATUS =
		"sso:UpdateManagedApplicationInstanceStatus";
	/** [PermissionManagement] sso:UpdatePermissionSet */
	static readonly UPDATE_PERMISSION_SET = "sso:UpdatePermissionSet";
	/** [Write] sso:UpdateProfile */
	static readonly UPDATE_PROFILE = "sso:UpdateProfile";
	/** [Write] sso:UpdateSSOConfiguration */
	static readonly UPDATE_SSO_CONFIGURATION = "sso:UpdateSSOConfiguration";
	/** [Write] sso:UpdateTrust */
	static readonly UPDATE_TRUST = "sso:UpdateTrust";
	/** [Write] sso:UpdateTrustedTokenIssuer */
	static readonly UPDATE_TRUSTED_TOKEN_ISSUER = "sso:UpdateTrustedTokenIssuer";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SSOActions.DESCRIBE_ACCOUNT_ASSIGNMENT_CREATION_STATUS,
		SSOActions.DESCRIBE_ACCOUNT_ASSIGNMENT_DELETION_STATUS,
		SSOActions.DESCRIBE_APPLICATION,
		SSOActions.DESCRIBE_APPLICATION_ASSIGNMENT,
		SSOActions.DESCRIBE_APPLICATION_PROVIDER,
		SSOActions.DESCRIBE_INSTANCE,
		SSOActions.DESCRIBE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION,
		SSOActions.DESCRIBE_PERMISSION_SET,
		SSOActions.DESCRIBE_PERMISSION_SET_PROVISIONING_STATUS,
		SSOActions.DESCRIBE_REGION,
		SSOActions.DESCRIBE_REGISTERED_REGIONS,
		SSOActions.DESCRIBE_TRUSTED_TOKEN_ISSUER,
		SSOActions.GET_APPLICATION_ACCESS_SCOPE,
		SSOActions.GET_APPLICATION_ASSIGNMENT_CONFIGURATION,
		SSOActions.GET_APPLICATION_AUTHENTICATION_METHOD,
		SSOActions.GET_APPLICATION_GRANT,
		SSOActions.GET_APPLICATION_INSTANCE,
		SSOActions.GET_APPLICATION_SESSION_CONFIGURATION,
		SSOActions.GET_APPLICATION_TEMPLATE,
		SSOActions.GET_INLINE_POLICY_FOR_PERMISSION_SET,
		SSOActions.GET_MANAGED_APPLICATION_INSTANCE,
		SSOActions.GET_MFA_DEVICE_MANAGEMENT_FOR_DIRECTORY,
		SSOActions.GET_PERMISSION_SET,
		SSOActions.GET_PERMISSIONS_BOUNDARY_FOR_PERMISSION_SET,
		SSOActions.GET_PROFILE,
		SSOActions.GET_SSO_STATUS,
		SSOActions.GET_SHARED_SSO_CONFIGURATION,
		SSOActions.GET_SSO_CONFIGURATION,
		SSOActions.GET_TRUST,
		SSOActions.LIST_APPLICATION_INSTANCE_CERTIFICATES,
		SSOActions.LIST_DIRECTORY_ASSOCIATIONS,
		SSOActions.LIST_PROFILE_ASSOCIATIONS,
		SSOActions.LIST_TAGS_FOR_RESOURCE,
		SSOActions.SEARCH_GROUPS,
		SSOActions.SEARCH_USERS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SSOActions.ADD_REGION,
		SSOActions.ASSOCIATE_DIRECTORY,
		SSOActions.ASSOCIATE_PROFILE,
		SSOActions.CREATE_ACCOUNT_ASSIGNMENT,
		SSOActions.CREATE_APPLICATION,
		SSOActions.CREATE_APPLICATION_ASSIGNMENT,
		SSOActions.CREATE_APPLICATION_INSTANCE,
		SSOActions.CREATE_APPLICATION_INSTANCE_CERTIFICATE,
		SSOActions.CREATE_INSTANCE,
		SSOActions.CREATE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION,
		SSOActions.CREATE_MANAGED_APPLICATION_INSTANCE,
		SSOActions.CREATE_PERMISSION_SET,
		SSOActions.CREATE_PROFILE,
		SSOActions.CREATE_TRUST,
		SSOActions.CREATE_TRUSTED_TOKEN_ISSUER,
		SSOActions.DELETE_ACCOUNT_ASSIGNMENT,
		SSOActions.DELETE_APPLICATION,
		SSOActions.DELETE_APPLICATION_ACCESS_SCOPE,
		SSOActions.DELETE_APPLICATION_ASSIGNMENT,
		SSOActions.DELETE_APPLICATION_AUTHENTICATION_METHOD,
		SSOActions.DELETE_APPLICATION_GRANT,
		SSOActions.DELETE_APPLICATION_INSTANCE,
		SSOActions.DELETE_APPLICATION_INSTANCE_CERTIFICATE,
		SSOActions.DELETE_INLINE_POLICY_FROM_PERMISSION_SET,
		SSOActions.DELETE_INSTANCE,
		SSOActions.DELETE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION,
		SSOActions.DELETE_MANAGED_APPLICATION_INSTANCE,
		SSOActions.DELETE_PERMISSION_SET,
		SSOActions.DELETE_PROFILE,
		SSOActions.DELETE_TRUSTED_TOKEN_ISSUER,
		SSOActions.DISASSOCIATE_DIRECTORY,
		SSOActions.DISASSOCIATE_PROFILE,
		SSOActions.IMPORT_APPLICATION_INSTANCE_SERVICE_PROVIDER_METADATA,
		SSOActions.PROVISION_PERMISSION_SET,
		SSOActions.PUT_APPLICATION_ACCESS_SCOPE,
		SSOActions.PUT_APPLICATION_ASSIGNMENT_CONFIGURATION,
		SSOActions.PUT_APPLICATION_AUTHENTICATION_METHOD,
		SSOActions.PUT_APPLICATION_GRANT,
		SSOActions.PUT_APPLICATION_SESSION_CONFIGURATION,
		SSOActions.PUT_INLINE_POLICY_TO_PERMISSION_SET,
		SSOActions.PUT_MFA_DEVICE_MANAGEMENT_FOR_DIRECTORY,
		SSOActions.REMOVE_REGION,
		SSOActions.START_SSO,
		SSOActions.UPDATE_APPLICATION,
		SSOActions.UPDATE_APPLICATION_INSTANCE_ACTIVE_CERTIFICATE,
		SSOActions.UPDATE_APPLICATION_INSTANCE_DISPLAY_DATA,
		SSOActions.UPDATE_APPLICATION_INSTANCE_RESPONSE_CONFIGURATION,
		SSOActions.UPDATE_APPLICATION_INSTANCE_RESPONSE_SCHEMA_CONFIGURATION,
		SSOActions.UPDATE_APPLICATION_INSTANCE_SECURITY_CONFIGURATION,
		SSOActions.UPDATE_APPLICATION_INSTANCE_SERVICE_PROVIDER_CONFIGURATION,
		SSOActions.UPDATE_APPLICATION_INSTANCE_STATUS,
		SSOActions.UPDATE_INSTANCE,
		SSOActions.UPDATE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION,
		SSOActions.UPDATE_MANAGED_APPLICATION_INSTANCE_STATUS,
		SSOActions.UPDATE_PROFILE,
		SSOActions.UPDATE_SSO_CONFIGURATION,
		SSOActions.UPDATE_TRUST,
		SSOActions.UPDATE_TRUSTED_TOKEN_ISSUER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SSOActions.LIST_ACCOUNT_ASSIGNMENT_CREATION_STATUS,
		SSOActions.LIST_ACCOUNT_ASSIGNMENT_DELETION_STATUS,
		SSOActions.LIST_ACCOUNT_ASSIGNMENTS,
		SSOActions.LIST_ACCOUNT_ASSIGNMENTS_FOR_PRINCIPAL,
		SSOActions.LIST_ACCOUNTS_FOR_PROVISIONED_PERMISSION_SET,
		SSOActions.LIST_APPLICATION_ACCESS_SCOPES,
		SSOActions.LIST_APPLICATION_ASSIGNMENTS,
		SSOActions.LIST_APPLICATION_ASSIGNMENTS_FOR_PRINCIPAL,
		SSOActions.LIST_APPLICATION_AUTHENTICATION_METHODS,
		SSOActions.LIST_APPLICATION_GRANTS,
		SSOActions.LIST_APPLICATION_INSTANCES,
		SSOActions.LIST_APPLICATION_PROVIDERS,
		SSOActions.LIST_APPLICATION_TEMPLATES,
		SSOActions.LIST_APPLICATIONS,
		SSOActions.LIST_CUSTOMER_MANAGED_POLICY_REFERENCES_IN_PERMISSION_SET,
		SSOActions.LIST_INSTANCES,
		SSOActions.LIST_MANAGED_POLICIES_IN_PERMISSION_SET,
		SSOActions.LIST_PERMISSION_SET_PROVISIONING_STATUS,
		SSOActions.LIST_PERMISSION_SETS,
		SSOActions.LIST_PERMISSION_SETS_PROVISIONED_TO_ACCOUNT,
		SSOActions.LIST_PROFILES,
		SSOActions.LIST_REGIONS,
		SSOActions.LIST_TRUSTED_TOKEN_ISSUERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		SSOActions.ATTACH_CUSTOMER_MANAGED_POLICY_REFERENCE_TO_PERMISSION_SET,
		SSOActions.ATTACH_MANAGED_POLICY_TO_PERMISSION_SET,
		SSOActions.DELETE_PERMISSIONS_BOUNDARY_FROM_PERMISSION_SET,
		SSOActions.DETACH_CUSTOMER_MANAGED_POLICY_REFERENCE_FROM_PERMISSION_SET,
		SSOActions.DETACH_MANAGED_POLICY_FROM_PERMISSION_SET,
		SSOActions.PUT_PERMISSIONS_BOUNDARY_TO_PERMISSION_SET,
		SSOActions.PUT_PERMISSIONS_POLICY,
		SSOActions.UPDATE_PERMISSION_SET,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SSOActions.TAG_RESOURCE,
		SSOActions.UNTAG_RESOURCE,
	];
}

const AccountArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sso:::account/(?<accountId>[^:/?]+)$",
);
const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sso::(?<accountId>[^:/?]+):application/(?<instanceId>[^:/?]+)/(?<applicationId>[^:/?]+)$",
);
const ApplicationProviderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sso::aws:applicationProvider/(?<applicationProviderId>[^:/?]+)$",
);
const InstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sso:::instance/(?<instanceId>[^:/?]+)$",
);
const PermissionSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sso:::permissionSet/(?<instanceId>[^:/?]+)/(?<permissionSetId>[^:/?]+)$",
);
const TrustedTokenIssuerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sso::(?<accountId>[^:/?]+):trustedTokenIssuer/(?<instanceId>[^:/?]+)/(?<trustedTokenIssuerId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for sso resources.
 */
export class SSOResources {
	/**
	 * Builds an ARN for the Account resource.
	 */
	static account(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sso:::account/${props.accountId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Account resource.
	 */
	static isValidAccountArn(arn: string): boolean {
		return AccountArnRegex.test(arn);
	}

	/**
	 * Parses a Account ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccountArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
	} {
		const match = AccountArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Account ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
		};
	}

	/**
	 * Builds an ARN for the Application resource.
	 */
	static application(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sso::${props.accountId}:application/${props.instanceId}/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a Application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		instanceId: string;
		applicationId: string;
	} {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			instanceId: match.groups!.instanceId,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the ApplicationProvider resource.
	 */
	static applicationProvider(props: {
		/** The ApplicationProviderId component of the ARN. */
		readonly applicationProviderId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sso::aws:applicationProvider/${props.applicationProviderId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ApplicationProvider resource.
	 */
	static isValidApplicationProviderArn(arn: string): boolean {
		return ApplicationProviderArnRegex.test(arn);
	}

	/**
	 * Parses a ApplicationProvider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationProviderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationProviderId: string;
	} {
		const match = ApplicationProviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ApplicationProvider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationProviderId: match.groups!.applicationProviderId,
		};
	}

	/**
	 * Builds an ARN for the Instance resource.
	 */
	static instance(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sso:::instance/${props.instanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Instance resource.
	 */
	static isValidInstanceArn(arn: string): boolean {
		return InstanceArnRegex.test(arn);
	}

	/**
	 * Parses a Instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
	} {
		const match = InstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
		};
	}

	/**
	 * Builds an ARN for the PermissionSet resource.
	 */
	static permissionSet(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The PermissionSetId component of the ARN. */
		readonly permissionSetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sso:::permissionSet/${props.instanceId}/${props.permissionSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the PermissionSet resource.
	 */
	static isValidPermissionSetArn(arn: string): boolean {
		return PermissionSetArnRegex.test(arn);
	}

	/**
	 * Parses a PermissionSet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePermissionSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		permissionSetId: string;
	} {
		const match = PermissionSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid PermissionSet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			permissionSetId: match.groups!.permissionSetId,
		};
	}

	/**
	 * Builds an ARN for the TrustedTokenIssuer resource.
	 */
	static trustedTokenIssuer(props: {
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The TrustedTokenIssuerId component of the ARN. */
		readonly trustedTokenIssuerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sso::${props.accountId}:trustedTokenIssuer/${props.instanceId}/${props.trustedTokenIssuerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the TrustedTokenIssuer resource.
	 */
	static isValidTrustedTokenIssuerArn(arn: string): boolean {
		return TrustedTokenIssuerArnRegex.test(arn);
	}

	/**
	 * Parses a TrustedTokenIssuer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTrustedTokenIssuerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accountId: string;
		instanceId: string;
		trustedTokenIssuerId: string;
	} {
		const match = TrustedTokenIssuerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid TrustedTokenIssuer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			instanceId: match.groups!.instanceId,
			trustedTokenIssuerId: match.groups!.trustedTokenIssuerId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for sso.
 */
export class SSOOperations {
	/** IAM actions required for the AddRegion API call. */
	static readonly ADD_REGION: string[] = ["sso:AddRegion"];
	/** IAM actions required for the AttachCustomerManagedPolicyReferenceToPermissionSet API call. */
	static readonly ATTACH_CUSTOMER_MANAGED_POLICY_REFERENCE_TO_PERMISSION_SET: string[] =
		["sso:AttachCustomerManagedPolicyReferenceToPermissionSet"];
	/** IAM actions required for the AttachManagedPolicyToPermissionSet API call. */
	static readonly ATTACH_MANAGED_POLICY_TO_PERMISSION_SET: string[] = [
		"sso:AttachManagedPolicyToPermissionSet",
		"sso:PutPermissionsPolicy",
	];
	/** IAM actions required for the CreateAccountAssignment API call. */
	static readonly CREATE_ACCOUNT_ASSIGNMENT: string[] = [
		"sso:AssociateProfile",
		"sso:CreateAccountAssignment",
		"sso:CreateApplicationInstance",
		"sso:CreateProfile",
		"sso:CreateTrust",
		"sso:GetApplicationInstance",
		"sso:GetProfile",
		"sso:GetTrust",
		"sso:UpdateProfile",
		"sso:UpdateTrust",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"sso:CreateApplication",
		"sso:CreateApplicationInstance",
		"sso:CreateManagedApplicationInstance",
		"sso:PutApplicationAssignmentConfiguration",
		"sso:TagResource",
	];
	/** IAM actions required for the CreateApplicationAssignment API call. */
	static readonly CREATE_APPLICATION_ASSIGNMENT: string[] = [
		"sso:AssociateProfile",
		"sso:CreateApplicationAssignment",
	];
	/** IAM actions required for the CreateInstance API call. */
	static readonly CREATE_INSTANCE: string[] = [
		"sso:CreateInstance",
		"sso:TagResource",
	];
	/** IAM actions required for the CreateInstanceAccessControlAttributeConfiguration API call. */
	static readonly CREATE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION: string[] =
		["sso:CreateInstanceAccessControlAttributeConfiguration"];
	/** IAM actions required for the CreatePermissionSet API call. */
	static readonly CREATE_PERMISSION_SET: string[] = [
		"sso:CreatePermissionSet",
		"sso:TagResource",
	];
	/** IAM actions required for the CreateTrustedTokenIssuer API call. */
	static readonly CREATE_TRUSTED_TOKEN_ISSUER: string[] = [
		"sso:CreateTrustedTokenIssuer",
		"sso:TagResource",
	];
	/** IAM actions required for the DeleteAccountAssignment API call. */
	static readonly DELETE_ACCOUNT_ASSIGNMENT: string[] = [
		"sso:DeleteAccountAssignment",
		"sso:DeleteProfile",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"sso:DeleteApplication",
		"sso:DeleteApplicationInstance",
		"sso:DeleteManagedApplicationInstance",
	];
	/** IAM actions required for the DeleteApplicationAccessScope API call. */
	static readonly DELETE_APPLICATION_ACCESS_SCOPE: string[] = [
		"sso:DeleteApplicationAccessScope",
	];
	/** IAM actions required for the DeleteApplicationAssignment API call. */
	static readonly DELETE_APPLICATION_ASSIGNMENT: string[] = [
		"sso:DeleteApplicationAssignment",
		"sso:DisassociateProfile",
	];
	/** IAM actions required for the DeleteApplicationAuthenticationMethod API call. */
	static readonly DELETE_APPLICATION_AUTHENTICATION_METHOD: string[] = [
		"sso:DeleteApplicationAuthenticationMethod",
	];
	/** IAM actions required for the DeleteApplicationGrant API call. */
	static readonly DELETE_APPLICATION_GRANT: string[] = [
		"sso:DeleteApplicationGrant",
	];
	/** IAM actions required for the DeleteInlinePolicyFromPermissionSet API call. */
	static readonly DELETE_INLINE_POLICY_FROM_PERMISSION_SET: string[] = [
		"sso:DeleteInlinePolicyFromPermissionSet",
	];
	/** IAM actions required for the DeleteInstance API call. */
	static readonly DELETE_INSTANCE: string[] = [
		"sso:DeleteInstance",
		"sso:StartSSO",
	];
	/** IAM actions required for the DeleteInstanceAccessControlAttributeConfiguration API call. */
	static readonly DELETE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION: string[] =
		["sso:DeleteInstanceAccessControlAttributeConfiguration"];
	/** IAM actions required for the DeletePermissionSet API call. */
	static readonly DELETE_PERMISSION_SET: string[] = ["sso:DeletePermissionSet"];
	/** IAM actions required for the DeletePermissionsBoundaryFromPermissionSet API call. */
	static readonly DELETE_PERMISSIONS_BOUNDARY_FROM_PERMISSION_SET: string[] = [
		"sso:DeletePermissionsBoundaryFromPermissionSet",
	];
	/** IAM actions required for the DeleteTrustedTokenIssuer API call. */
	static readonly DELETE_TRUSTED_TOKEN_ISSUER: string[] = [
		"sso:DeleteTrustedTokenIssuer",
	];
	/** IAM actions required for the DescribeAccountAssignmentCreationStatus API call. */
	static readonly DESCRIBE_ACCOUNT_ASSIGNMENT_CREATION_STATUS: string[] = [
		"sso:DescribeAccountAssignmentCreationStatus",
	];
	/** IAM actions required for the DescribeAccountAssignmentDeletionStatus API call. */
	static readonly DESCRIBE_ACCOUNT_ASSIGNMENT_DELETION_STATUS: string[] = [
		"sso:DescribeAccountAssignmentDeletionStatus",
	];
	/** IAM actions required for the DescribeApplication API call. */
	static readonly DESCRIBE_APPLICATION: string[] = [
		"sso:DescribeApplication",
		"sso:GetApplicationInstance",
		"sso:GetManagedApplicationInstance",
	];
	/** IAM actions required for the DescribeApplicationAssignment API call. */
	static readonly DESCRIBE_APPLICATION_ASSIGNMENT: string[] = [
		"sso:DescribeApplicationAssignment",
	];
	/** IAM actions required for the DescribeApplicationProvider API call. */
	static readonly DESCRIBE_APPLICATION_PROVIDER: string[] = [
		"sso:DescribeApplicationProvider",
		"sso:GetApplicationTemplate",
	];
	/** IAM actions required for the DescribeInstance API call. */
	static readonly DESCRIBE_INSTANCE: string[] = [
		"sso:DescribeInstance",
		"sso:GetSharedSsoConfiguration",
		"sso:ListDirectoryAssociations",
	];
	/** IAM actions required for the DescribeInstanceAccessControlAttributeConfiguration API call. */
	static readonly DESCRIBE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION: string[] =
		["sso:DescribeInstanceAccessControlAttributeConfiguration"];
	/** IAM actions required for the DescribePermissionSet API call. */
	static readonly DESCRIBE_PERMISSION_SET: string[] = [
		"sso:DescribePermissionSet",
		"sso:GetPermissionSet",
	];
	/** IAM actions required for the DescribePermissionSetProvisioningStatus API call. */
	static readonly DESCRIBE_PERMISSION_SET_PROVISIONING_STATUS: string[] = [
		"sso:DescribePermissionSetProvisioningStatus",
	];
	/** IAM actions required for the DescribeRegion API call. */
	static readonly DESCRIBE_REGION: string[] = ["sso:DescribeRegion"];
	/** IAM actions required for the DescribeTrustedTokenIssuer API call. */
	static readonly DESCRIBE_TRUSTED_TOKEN_ISSUER: string[] = [
		"sso:DescribeTrustedTokenIssuer",
	];
	/** IAM actions required for the DetachCustomerManagedPolicyReferenceFromPermissionSet API call. */
	static readonly DETACH_CUSTOMER_MANAGED_POLICY_REFERENCE_FROM_PERMISSION_SET: string[] =
		["sso:DetachCustomerManagedPolicyReferenceFromPermissionSet"];
	/** IAM actions required for the DetachManagedPolicyFromPermissionSet API call. */
	static readonly DETACH_MANAGED_POLICY_FROM_PERMISSION_SET: string[] = [
		"sso:DetachManagedPolicyFromPermissionSet",
	];
	/** IAM actions required for the GetApplicationAccessScope API call. */
	static readonly GET_APPLICATION_ACCESS_SCOPE: string[] = [
		"sso:GetApplicationAccessScope",
	];
	/** IAM actions required for the GetApplicationAssignmentConfiguration API call. */
	static readonly GET_APPLICATION_ASSIGNMENT_CONFIGURATION: string[] = [
		"sso:GetApplicationAssignmentConfiguration",
	];
	/** IAM actions required for the GetApplicationAuthenticationMethod API call. */
	static readonly GET_APPLICATION_AUTHENTICATION_METHOD: string[] = [
		"sso:GetApplicationAuthenticationMethod",
	];
	/** IAM actions required for the GetApplicationGrant API call. */
	static readonly GET_APPLICATION_GRANT: string[] = ["sso:GetApplicationGrant"];
	/** IAM actions required for the GetApplicationSessionConfiguration API call. */
	static readonly GET_APPLICATION_SESSION_CONFIGURATION: string[] = [
		"sso:GetApplicationSessionConfiguration",
	];
	/** IAM actions required for the GetInlinePolicyForPermissionSet API call. */
	static readonly GET_INLINE_POLICY_FOR_PERMISSION_SET: string[] = [
		"sso:GetInlinePolicyForPermissionSet",
	];
	/** IAM actions required for the GetPermissionsBoundaryForPermissionSet API call. */
	static readonly GET_PERMISSIONS_BOUNDARY_FOR_PERMISSION_SET: string[] = [
		"sso:GetPermissionsBoundaryForPermissionSet",
	];
	/** IAM actions required for the GetRoleCredentials API call. */
	static readonly GET_ROLE_CREDENTIALS: string[] = [];
	/** IAM actions required for the ListAccountAssignmentCreationStatus API call. */
	static readonly LIST_ACCOUNT_ASSIGNMENT_CREATION_STATUS: string[] = [
		"sso:ListAccountAssignmentCreationStatus",
	];
	/** IAM actions required for the ListAccountAssignmentDeletionStatus API call. */
	static readonly LIST_ACCOUNT_ASSIGNMENT_DELETION_STATUS: string[] = [
		"sso:ListAccountAssignmentDeletionStatus",
	];
	/** IAM actions required for the ListAccountAssignments API call. */
	static readonly LIST_ACCOUNT_ASSIGNMENTS: string[] = [
		"sso:ListAccountAssignments",
		"sso:ListProfileAssociations",
	];
	/** IAM actions required for the ListAccountAssignmentsForPrincipal API call. */
	static readonly LIST_ACCOUNT_ASSIGNMENTS_FOR_PRINCIPAL: string[] = [
		"sso:ListAccountAssignmentsForPrincipal",
	];
	/** IAM actions required for the ListAccountRoles API call. */
	static readonly LIST_ACCOUNT_ROLES: string[] = [];
	/** IAM actions required for the ListAccounts API call. */
	static readonly LIST_ACCOUNTS: string[] = [];
	/** IAM actions required for the ListAccountsForProvisionedPermissionSet API call. */
	static readonly LIST_ACCOUNTS_FOR_PROVISIONED_PERMISSION_SET: string[] = [
		"sso:GetApplicationInstance",
		"sso:ListAccountsForProvisionedPermissionSet",
		"sso:ListApplicationInstances",
	];
	/** IAM actions required for the ListApplicationAccessScopes API call. */
	static readonly LIST_APPLICATION_ACCESS_SCOPES: string[] = [
		"sso:ListApplicationAccessScopes",
	];
	/** IAM actions required for the ListApplicationAssignments API call. */
	static readonly LIST_APPLICATION_ASSIGNMENTS: string[] = [
		"sso:ListApplicationAssignments",
		"sso:ListProfileAssociations",
	];
	/** IAM actions required for the ListApplicationAssignmentsForPrincipal API call. */
	static readonly LIST_APPLICATION_ASSIGNMENTS_FOR_PRINCIPAL: string[] = [
		"sso:ListApplicationAssignmentsForPrincipal",
	];
	/** IAM actions required for the ListApplicationAuthenticationMethods API call. */
	static readonly LIST_APPLICATION_AUTHENTICATION_METHODS: string[] = [
		"sso:ListApplicationAuthenticationMethods",
	];
	/** IAM actions required for the ListApplicationGrants API call. */
	static readonly LIST_APPLICATION_GRANTS: string[] = [
		"sso:ListApplicationGrants",
	];
	/** IAM actions required for the ListApplicationProviders API call. */
	static readonly LIST_APPLICATION_PROVIDERS: string[] = [
		"sso:GetApplicationTemplate",
		"sso:ListApplicationProviders",
		"sso:ListApplicationTemplates",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [
		"sso:GetApplicationInstance",
		"sso:ListApplicationInstances",
		"sso:ListApplicationProviders",
		"sso:ListApplications",
	];
	/** IAM actions required for the ListCustomerManagedPolicyReferencesInPermissionSet API call. */
	static readonly LIST_CUSTOMER_MANAGED_POLICY_REFERENCES_IN_PERMISSION_SET: string[] =
		["sso:ListCustomerManagedPolicyReferencesInPermissionSet"];
	/** IAM actions required for the ListInstances API call. */
	static readonly LIST_INSTANCES: string[] = ["sso:ListInstances"];
	/** IAM actions required for the ListManagedPoliciesInPermissionSet API call. */
	static readonly LIST_MANAGED_POLICIES_IN_PERMISSION_SET: string[] = [
		"sso:ListManagedPoliciesInPermissionSet",
	];
	/** IAM actions required for the ListPermissionSetProvisioningStatus API call. */
	static readonly LIST_PERMISSION_SET_PROVISIONING_STATUS: string[] = [
		"sso:ListPermissionSetProvisioningStatus",
	];
	/** IAM actions required for the ListPermissionSets API call. */
	static readonly LIST_PERMISSION_SETS: string[] = ["sso:ListPermissionSets"];
	/** IAM actions required for the ListPermissionSetsProvisionedToAccount API call. */
	static readonly LIST_PERMISSION_SETS_PROVISIONED_TO_ACCOUNT: string[] = [
		"sso:GetProfile",
		"sso:ListPermissionSetsProvisionedToAccount",
		"sso:ListProfiles",
	];
	/** IAM actions required for the ListRegions API call. */
	static readonly LIST_REGIONS: string[] = ["sso:ListRegions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"sso:ListTagsForResource",
	];
	/** IAM actions required for the ListTrustedTokenIssuers API call. */
	static readonly LIST_TRUSTED_TOKEN_ISSUERS: string[] = [
		"sso:ListTrustedTokenIssuers",
	];
	/** IAM actions required for the Logout API call. */
	static readonly LOGOUT: string[] = [];
	/** IAM actions required for the ProvisionPermissionSet API call. */
	static readonly PROVISION_PERMISSION_SET: string[] = [
		"sso:ProvisionPermissionSet",
	];
	/** IAM actions required for the PutApplicationAccessScope API call. */
	static readonly PUT_APPLICATION_ACCESS_SCOPE: string[] = [
		"sso:PutApplicationAccessScope",
	];
	/** IAM actions required for the PutApplicationAssignmentConfiguration API call. */
	static readonly PUT_APPLICATION_ASSIGNMENT_CONFIGURATION: string[] = [
		"sso:PutApplicationAssignmentConfiguration",
	];
	/** IAM actions required for the PutApplicationAuthenticationMethod API call. */
	static readonly PUT_APPLICATION_AUTHENTICATION_METHOD: string[] = [
		"sso:CreateManagedApplicationInstance",
		"sso:PutApplicationAuthenticationMethod",
	];
	/** IAM actions required for the PutApplicationGrant API call. */
	static readonly PUT_APPLICATION_GRANT: string[] = [
		"sso:CreateManagedApplicationInstance",
		"sso:PutApplicationGrant",
	];
	/** IAM actions required for the PutApplicationSessionConfiguration API call. */
	static readonly PUT_APPLICATION_SESSION_CONFIGURATION: string[] = [
		"sso:PutApplicationSessionConfiguration",
	];
	/** IAM actions required for the PutInlinePolicyToPermissionSet API call. */
	static readonly PUT_INLINE_POLICY_TO_PERMISSION_SET: string[] = [
		"sso:PutInlinePolicyToPermissionSet",
		"sso:PutPermissionsPolicy",
	];
	/** IAM actions required for the PutPermissionsBoundaryToPermissionSet API call. */
	static readonly PUT_PERMISSIONS_BOUNDARY_TO_PERMISSION_SET: string[] = [
		"sso:PutPermissionsBoundaryToPermissionSet",
	];
	/** IAM actions required for the RemoveRegion API call. */
	static readonly REMOVE_REGION: string[] = ["sso:RemoveRegion"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["sso:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["sso:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [
		"sso:PutApplicationAssignmentConfiguration",
		"sso:UpdateApplication",
		"sso:UpdateApplicationInstanceDisplayData",
		"sso:UpdateApplicationInstanceStatus",
		"sso:UpdateManagedApplicationInstanceStatus",
	];
	/** IAM actions required for the UpdateInstance API call. */
	static readonly UPDATE_INSTANCE: string[] = ["sso:UpdateInstance"];
	/** IAM actions required for the UpdateInstanceAccessControlAttributeConfiguration API call. */
	static readonly UPDATE_INSTANCE_ACCESS_CONTROL_ATTRIBUTE_CONFIGURATION: string[] =
		["sso:UpdateInstanceAccessControlAttributeConfiguration"];
	/** IAM actions required for the UpdatePermissionSet API call. */
	static readonly UPDATE_PERMISSION_SET: string[] = ["sso:UpdatePermissionSet"];
	/** IAM actions required for the UpdateTrustedTokenIssuer API call. */
	static readonly UPDATE_TRUSTED_TOKEN_ISSUER: string[] = [
		"sso:UpdateTrustedTokenIssuer",
	];
}

/**
 * Condition key constants and builders for sso.
 */
export class SSOConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApplicationAssignment action. */
	static readonly CREATE_APPLICATION_ASSIGNMENT_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the CreateInstance action. */
	static readonly CREATE_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePermissionSet action. */
	static readonly CREATE_PERMISSION_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTrustedTokenIssuer action. */
	static readonly CREATE_TRUSTED_TOKEN_ISSUER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteApplication action. */
	static readonly DELETE_APPLICATION_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the DeleteApplicationAccessScope action. */
	static readonly DELETE_APPLICATION_ACCESS_SCOPE_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the DeleteApplicationAssignment action. */
	static readonly DELETE_APPLICATION_ASSIGNMENT_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the DeleteApplicationAuthenticationMethod action. */
	static readonly DELETE_APPLICATION_AUTHENTICATION_METHOD_CONDITION_KEYS: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the DeleteApplicationGrant action. */
	static readonly DELETE_APPLICATION_GRANT_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the DescribeApplication action. */
	static readonly DESCRIBE_APPLICATION_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the DescribeApplicationAssignment action. */
	static readonly DESCRIBE_APPLICATION_ASSIGNMENT_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the GetApplicationAccessScope action. */
	static readonly GET_APPLICATION_ACCESS_SCOPE_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the GetApplicationAssignmentConfiguration action. */
	static readonly GET_APPLICATION_ASSIGNMENT_CONFIGURATION_CONDITION_KEYS: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the GetApplicationAuthenticationMethod action. */
	static readonly GET_APPLICATION_AUTHENTICATION_METHOD_CONDITION_KEYS: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the GetApplicationGrant action. */
	static readonly GET_APPLICATION_GRANT_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the GetApplicationSessionConfiguration action. */
	static readonly GET_APPLICATION_SESSION_CONFIGURATION_CONDITION_KEYS: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the ListApplicationAccessScopes action. */
	static readonly LIST_APPLICATION_ACCESS_SCOPES_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the ListApplicationAssignments action. */
	static readonly LIST_APPLICATION_ASSIGNMENTS_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the ListApplicationAssignmentsForPrincipal action. */
	static readonly LIST_APPLICATION_ASSIGNMENTS_FOR_PRINCIPAL_CONDITION_KEYS: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the ListApplicationAuthenticationMethods action. */
	static readonly LIST_APPLICATION_AUTHENTICATION_METHODS_CONDITION_KEYS: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the ListApplicationGrants action. */
	static readonly LIST_APPLICATION_GRANTS_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the PutApplicationAccessScope action. */
	static readonly PUT_APPLICATION_ACCESS_SCOPE_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the PutApplicationAssignmentConfiguration action. */
	static readonly PUT_APPLICATION_ASSIGNMENT_CONFIGURATION_CONDITION_KEYS: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the PutApplicationAuthenticationMethod action. */
	static readonly PUT_APPLICATION_AUTHENTICATION_METHOD_CONDITION_KEYS: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the PutApplicationGrant action. */
	static readonly PUT_APPLICATION_GRANT_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the PutApplicationSessionConfiguration action. */
	static readonly PUT_APPLICATION_SESSION_CONFIGURATION_CONDITION_KEYS: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateApplication action. */
	static readonly UPDATE_APPLICATION_CONDITION_KEYS: string[] = [
		"sso:ApplicationAccount",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: identitycenter:ApplicationArn (ARN) */
	static readonly APPLICATION_ARN = "identitycenter:ApplicationArn";
	/** Condition key: identitycenter:InstanceArn (ARN) */
	static readonly INSTANCE_ARN = "identitycenter:InstanceArn";
	/** Condition key: sso:ApplicationAccount (String) */
	static readonly APPLICATION_ACCOUNT = "sso:ApplicationAccount";
	/** Condition key: sso:PrimaryRegion (String) */
	static readonly PRIMARY_REGION = "sso:PrimaryRegion";

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

	/**
	 * Generates a condition block for `sso:ApplicationAccount`.
	 */
	static applicationAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sso:ApplicationAccount": value } };
	}

	/**
	 * Generates a condition block for `sso:PrimaryRegion`.
	 */
	static primaryRegion(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sso:PrimaryRegion": value } };
	}
}
