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
	static readonly AddRegion = "sso:AddRegion";
	/** [Write] sso:AssociateDirectory */
	static readonly AssociateDirectory = "sso:AssociateDirectory";
	/** [Write] sso:AssociateProfile */
	static readonly AssociateProfile = "sso:AssociateProfile";
	/** [PermissionManagement] sso:AttachCustomerManagedPolicyReferenceToPermissionSet */
	static readonly AttachCustomerManagedPolicyReferenceToPermissionSet =
		"sso:AttachCustomerManagedPolicyReferenceToPermissionSet";
	/** [PermissionManagement] sso:AttachManagedPolicyToPermissionSet */
	static readonly AttachManagedPolicyToPermissionSet =
		"sso:AttachManagedPolicyToPermissionSet";
	/** [Write] sso:CreateAccountAssignment */
	static readonly CreateAccountAssignment = "sso:CreateAccountAssignment";
	/** [Write] sso:CreateApplication */
	static readonly CreateApplication = "sso:CreateApplication";
	/** [Write] sso:CreateApplicationAssignment */
	static readonly CreateApplicationAssignment =
		"sso:CreateApplicationAssignment";
	/** [Write] sso:CreateApplicationInstance */
	static readonly CreateApplicationInstance = "sso:CreateApplicationInstance";
	/** [Write] sso:CreateApplicationInstanceCertificate */
	static readonly CreateApplicationInstanceCertificate =
		"sso:CreateApplicationInstanceCertificate";
	/** [Write] sso:CreateInstance */
	static readonly CreateInstance = "sso:CreateInstance";
	/** [Write] sso:CreateInstanceAccessControlAttributeConfiguration */
	static readonly CreateInstanceAccessControlAttributeConfiguration =
		"sso:CreateInstanceAccessControlAttributeConfiguration";
	/** [Write] sso:CreateManagedApplicationInstance */
	static readonly CreateManagedApplicationInstance =
		"sso:CreateManagedApplicationInstance";
	/** [Write] sso:CreatePermissionSet */
	static readonly CreatePermissionSet = "sso:CreatePermissionSet";
	/** [Write] sso:CreateProfile */
	static readonly CreateProfile = "sso:CreateProfile";
	/** [Write] sso:CreateTrust */
	static readonly CreateTrust = "sso:CreateTrust";
	/** [Write] sso:CreateTrustedTokenIssuer */
	static readonly CreateTrustedTokenIssuer = "sso:CreateTrustedTokenIssuer";
	/** [Write] sso:DeleteAccountAssignment */
	static readonly DeleteAccountAssignment = "sso:DeleteAccountAssignment";
	/** [Write] sso:DeleteApplication */
	static readonly DeleteApplication = "sso:DeleteApplication";
	/** [Write] sso:DeleteApplicationAccessScope */
	static readonly DeleteApplicationAccessScope =
		"sso:DeleteApplicationAccessScope";
	/** [Write] sso:DeleteApplicationAssignment */
	static readonly DeleteApplicationAssignment =
		"sso:DeleteApplicationAssignment";
	/** [Write] sso:DeleteApplicationAuthenticationMethod */
	static readonly DeleteApplicationAuthenticationMethod =
		"sso:DeleteApplicationAuthenticationMethod";
	/** [Write] sso:DeleteApplicationGrant */
	static readonly DeleteApplicationGrant = "sso:DeleteApplicationGrant";
	/** [Write] sso:DeleteApplicationInstance */
	static readonly DeleteApplicationInstance = "sso:DeleteApplicationInstance";
	/** [Write] sso:DeleteApplicationInstanceCertificate */
	static readonly DeleteApplicationInstanceCertificate =
		"sso:DeleteApplicationInstanceCertificate";
	/** [Write] sso:DeleteInlinePolicyFromPermissionSet */
	static readonly DeleteInlinePolicyFromPermissionSet =
		"sso:DeleteInlinePolicyFromPermissionSet";
	/** [Write] sso:DeleteInstance */
	static readonly DeleteInstance = "sso:DeleteInstance";
	/** [Write] sso:DeleteInstanceAccessControlAttributeConfiguration */
	static readonly DeleteInstanceAccessControlAttributeConfiguration =
		"sso:DeleteInstanceAccessControlAttributeConfiguration";
	/** [Write] sso:DeleteManagedApplicationInstance */
	static readonly DeleteManagedApplicationInstance =
		"sso:DeleteManagedApplicationInstance";
	/** [Write] sso:DeletePermissionSet */
	static readonly DeletePermissionSet = "sso:DeletePermissionSet";
	/** [PermissionManagement] sso:DeletePermissionsBoundaryFromPermissionSet */
	static readonly DeletePermissionsBoundaryFromPermissionSet =
		"sso:DeletePermissionsBoundaryFromPermissionSet";
	/** [Write] sso:DeleteProfile */
	static readonly DeleteProfile = "sso:DeleteProfile";
	/** [Write] sso:DeleteTrustedTokenIssuer */
	static readonly DeleteTrustedTokenIssuer = "sso:DeleteTrustedTokenIssuer";
	/** [Read] sso:DescribeAccountAssignmentCreationStatus */
	static readonly DescribeAccountAssignmentCreationStatus =
		"sso:DescribeAccountAssignmentCreationStatus";
	/** [Read] sso:DescribeAccountAssignmentDeletionStatus */
	static readonly DescribeAccountAssignmentDeletionStatus =
		"sso:DescribeAccountAssignmentDeletionStatus";
	/** [Read] sso:DescribeApplication */
	static readonly DescribeApplication = "sso:DescribeApplication";
	/** [Read] sso:DescribeApplicationAssignment */
	static readonly DescribeApplicationAssignment =
		"sso:DescribeApplicationAssignment";
	/** [Read] sso:DescribeApplicationProvider */
	static readonly DescribeApplicationProvider =
		"sso:DescribeApplicationProvider";
	/** [Read] sso:DescribeInstance */
	static readonly DescribeInstance = "sso:DescribeInstance";
	/** [Read] sso:DescribeInstanceAccessControlAttributeConfiguration */
	static readonly DescribeInstanceAccessControlAttributeConfiguration =
		"sso:DescribeInstanceAccessControlAttributeConfiguration";
	/** [Read] sso:DescribePermissionSet */
	static readonly DescribePermissionSet = "sso:DescribePermissionSet";
	/** [Read] sso:DescribePermissionSetProvisioningStatus */
	static readonly DescribePermissionSetProvisioningStatus =
		"sso:DescribePermissionSetProvisioningStatus";
	/** [Read] sso:DescribeRegion */
	static readonly DescribeRegion = "sso:DescribeRegion";
	/** [Read] sso:DescribeRegisteredRegions */
	static readonly DescribeRegisteredRegions = "sso:DescribeRegisteredRegions";
	/** [Read] sso:DescribeTrustedTokenIssuer */
	static readonly DescribeTrustedTokenIssuer = "sso:DescribeTrustedTokenIssuer";
	/** [PermissionManagement] sso:DetachCustomerManagedPolicyReferenceFromPermissionSet */
	static readonly DetachCustomerManagedPolicyReferenceFromPermissionSet =
		"sso:DetachCustomerManagedPolicyReferenceFromPermissionSet";
	/** [PermissionManagement] sso:DetachManagedPolicyFromPermissionSet */
	static readonly DetachManagedPolicyFromPermissionSet =
		"sso:DetachManagedPolicyFromPermissionSet";
	/** [Write] sso:DisassociateDirectory */
	static readonly DisassociateDirectory = "sso:DisassociateDirectory";
	/** [Write] sso:DisassociateProfile */
	static readonly DisassociateProfile = "sso:DisassociateProfile";
	/** [Read] sso:GetApplicationAccessScope */
	static readonly actionGetApplicationAccessScope =
		"sso:GetApplicationAccessScope";
	/** [Read] sso:GetApplicationAssignmentConfiguration */
	static readonly actionGetApplicationAssignmentConfiguration =
		"sso:GetApplicationAssignmentConfiguration";
	/** [Read] sso:GetApplicationAuthenticationMethod */
	static readonly actionGetApplicationAuthenticationMethod =
		"sso:GetApplicationAuthenticationMethod";
	/** [Read] sso:GetApplicationGrant */
	static readonly actionGetApplicationGrant = "sso:GetApplicationGrant";
	/** [Read] sso:GetApplicationInstance */
	static readonly actionGetApplicationInstance = "sso:GetApplicationInstance";
	/** [Read] sso:GetApplicationSessionConfiguration */
	static readonly actionGetApplicationSessionConfiguration =
		"sso:GetApplicationSessionConfiguration";
	/** [Read] sso:GetApplicationTemplate */
	static readonly actionGetApplicationTemplate = "sso:GetApplicationTemplate";
	/** [Read] sso:GetInlinePolicyForPermissionSet */
	static readonly actionGetInlinePolicyForPermissionSet =
		"sso:GetInlinePolicyForPermissionSet";
	/** [Read] sso:GetManagedApplicationInstance */
	static readonly actionGetManagedApplicationInstance =
		"sso:GetManagedApplicationInstance";
	/** [Read] sso:GetMfaDeviceManagementForDirectory */
	static readonly actionGetMfaDeviceManagementForDirectory =
		"sso:GetMfaDeviceManagementForDirectory";
	/** [Read] sso:GetPermissionSet */
	static readonly actionGetPermissionSet = "sso:GetPermissionSet";
	/** [Read] sso:GetPermissionsBoundaryForPermissionSet */
	static readonly actionGetPermissionsBoundaryForPermissionSet =
		"sso:GetPermissionsBoundaryForPermissionSet";
	/** [Read] sso:GetProfile */
	static readonly actionGetProfile = "sso:GetProfile";
	/** [Read] sso:GetSSOStatus */
	static readonly actionGetSSOStatus = "sso:GetSSOStatus";
	/** [Read] sso:GetSharedSsoConfiguration */
	static readonly actionGetSharedSsoConfiguration =
		"sso:GetSharedSsoConfiguration";
	/** [Read] sso:GetSsoConfiguration */
	static readonly actionGetSsoConfiguration = "sso:GetSsoConfiguration";
	/** [Read] sso:GetTrust */
	static readonly actionGetTrust = "sso:GetTrust";
	/** [Write] sso:ImportApplicationInstanceServiceProviderMetadata */
	static readonly ImportApplicationInstanceServiceProviderMetadata =
		"sso:ImportApplicationInstanceServiceProviderMetadata";
	/** [List] sso:ListAccountAssignmentCreationStatus */
	static readonly ListAccountAssignmentCreationStatus =
		"sso:ListAccountAssignmentCreationStatus";
	/** [List] sso:ListAccountAssignmentDeletionStatus */
	static readonly ListAccountAssignmentDeletionStatus =
		"sso:ListAccountAssignmentDeletionStatus";
	/** [List] sso:ListAccountAssignments */
	static readonly ListAccountAssignments = "sso:ListAccountAssignments";
	/** [List] sso:ListAccountAssignmentsForPrincipal */
	static readonly ListAccountAssignmentsForPrincipal =
		"sso:ListAccountAssignmentsForPrincipal";
	/** [List] sso:ListAccountsForProvisionedPermissionSet */
	static readonly ListAccountsForProvisionedPermissionSet =
		"sso:ListAccountsForProvisionedPermissionSet";
	/** [List] sso:ListApplicationAccessScopes */
	static readonly ListApplicationAccessScopes =
		"sso:ListApplicationAccessScopes";
	/** [List] sso:ListApplicationAssignments */
	static readonly ListApplicationAssignments = "sso:ListApplicationAssignments";
	/** [List] sso:ListApplicationAssignmentsForPrincipal */
	static readonly ListApplicationAssignmentsForPrincipal =
		"sso:ListApplicationAssignmentsForPrincipal";
	/** [List] sso:ListApplicationAuthenticationMethods */
	static readonly ListApplicationAuthenticationMethods =
		"sso:ListApplicationAuthenticationMethods";
	/** [List] sso:ListApplicationGrants */
	static readonly ListApplicationGrants = "sso:ListApplicationGrants";
	/** [Read] sso:ListApplicationInstanceCertificates */
	static readonly ListApplicationInstanceCertificates =
		"sso:ListApplicationInstanceCertificates";
	/** [List] sso:ListApplicationInstances */
	static readonly ListApplicationInstances = "sso:ListApplicationInstances";
	/** [List] sso:ListApplicationProviders */
	static readonly ListApplicationProviders = "sso:ListApplicationProviders";
	/** [List] sso:ListApplicationTemplates */
	static readonly ListApplicationTemplates = "sso:ListApplicationTemplates";
	/** [List] sso:ListApplications */
	static readonly ListApplications = "sso:ListApplications";
	/** [List] sso:ListCustomerManagedPolicyReferencesInPermissionSet */
	static readonly ListCustomerManagedPolicyReferencesInPermissionSet =
		"sso:ListCustomerManagedPolicyReferencesInPermissionSet";
	/** [Read] sso:ListDirectoryAssociations */
	static readonly ListDirectoryAssociations = "sso:ListDirectoryAssociations";
	/** [List] sso:ListInstances */
	static readonly ListInstances = "sso:ListInstances";
	/** [List] sso:ListManagedPoliciesInPermissionSet */
	static readonly ListManagedPoliciesInPermissionSet =
		"sso:ListManagedPoliciesInPermissionSet";
	/** [List] sso:ListPermissionSetProvisioningStatus */
	static readonly ListPermissionSetProvisioningStatus =
		"sso:ListPermissionSetProvisioningStatus";
	/** [List] sso:ListPermissionSets */
	static readonly ListPermissionSets = "sso:ListPermissionSets";
	/** [List] sso:ListPermissionSetsProvisionedToAccount */
	static readonly ListPermissionSetsProvisionedToAccount =
		"sso:ListPermissionSetsProvisionedToAccount";
	/** [Read] sso:ListProfileAssociations */
	static readonly ListProfileAssociations = "sso:ListProfileAssociations";
	/** [List] sso:ListProfiles */
	static readonly ListProfiles = "sso:ListProfiles";
	/** [List] sso:ListRegions */
	static readonly ListRegions = "sso:ListRegions";
	/** [Read] sso:ListTagsForResource */
	static readonly ListTagsForResource = "sso:ListTagsForResource";
	/** [List] sso:ListTrustedTokenIssuers */
	static readonly ListTrustedTokenIssuers = "sso:ListTrustedTokenIssuers";
	/** [Write] sso:ProvisionPermissionSet */
	static readonly ProvisionPermissionSet = "sso:ProvisionPermissionSet";
	/** [Write] sso:PutApplicationAccessScope */
	static readonly PutApplicationAccessScope = "sso:PutApplicationAccessScope";
	/** [Write] sso:PutApplicationAssignmentConfiguration */
	static readonly PutApplicationAssignmentConfiguration =
		"sso:PutApplicationAssignmentConfiguration";
	/** [Write] sso:PutApplicationAuthenticationMethod */
	static readonly PutApplicationAuthenticationMethod =
		"sso:PutApplicationAuthenticationMethod";
	/** [Write] sso:PutApplicationGrant */
	static readonly PutApplicationGrant = "sso:PutApplicationGrant";
	/** [Write] sso:PutApplicationSessionConfiguration */
	static readonly PutApplicationSessionConfiguration =
		"sso:PutApplicationSessionConfiguration";
	/** [Write] sso:PutInlinePolicyToPermissionSet */
	static readonly PutInlinePolicyToPermissionSet =
		"sso:PutInlinePolicyToPermissionSet";
	/** [Write] sso:PutMfaDeviceManagementForDirectory */
	static readonly PutMfaDeviceManagementForDirectory =
		"sso:PutMfaDeviceManagementForDirectory";
	/** [PermissionManagement] sso:PutPermissionsBoundaryToPermissionSet */
	static readonly PutPermissionsBoundaryToPermissionSet =
		"sso:PutPermissionsBoundaryToPermissionSet";
	/** [PermissionManagement] sso:PutPermissionsPolicy */
	static readonly PutPermissionsPolicy = "sso:PutPermissionsPolicy";
	/** [Write] sso:RemoveRegion */
	static readonly RemoveRegion = "sso:RemoveRegion";
	/** [Read] sso:SearchGroups */
	static readonly SearchGroups = "sso:SearchGroups";
	/** [Read] sso:SearchUsers */
	static readonly SearchUsers = "sso:SearchUsers";
	/** [Write] sso:StartSSO */
	static readonly StartSSO = "sso:StartSSO";
	/** [Tagging] sso:TagResource */
	static readonly TagResource = "sso:TagResource";
	/** [Tagging] sso:UntagResource */
	static readonly UntagResource = "sso:UntagResource";
	/** [Write] sso:UpdateApplication */
	static readonly UpdateApplication = "sso:UpdateApplication";
	/** [Write] sso:UpdateApplicationInstanceActiveCertificate */
	static readonly UpdateApplicationInstanceActiveCertificate =
		"sso:UpdateApplicationInstanceActiveCertificate";
	/** [Write] sso:UpdateApplicationInstanceDisplayData */
	static readonly UpdateApplicationInstanceDisplayData =
		"sso:UpdateApplicationInstanceDisplayData";
	/** [Write] sso:UpdateApplicationInstanceResponseConfiguration */
	static readonly UpdateApplicationInstanceResponseConfiguration =
		"sso:UpdateApplicationInstanceResponseConfiguration";
	/** [Write] sso:UpdateApplicationInstanceResponseSchemaConfiguration */
	static readonly UpdateApplicationInstanceResponseSchemaConfiguration =
		"sso:UpdateApplicationInstanceResponseSchemaConfiguration";
	/** [Write] sso:UpdateApplicationInstanceSecurityConfiguration */
	static readonly UpdateApplicationInstanceSecurityConfiguration =
		"sso:UpdateApplicationInstanceSecurityConfiguration";
	/** [Write] sso:UpdateApplicationInstanceServiceProviderConfiguration */
	static readonly UpdateApplicationInstanceServiceProviderConfiguration =
		"sso:UpdateApplicationInstanceServiceProviderConfiguration";
	/** [Write] sso:UpdateApplicationInstanceStatus */
	static readonly UpdateApplicationInstanceStatus =
		"sso:UpdateApplicationInstanceStatus";
	/** [Write] sso:UpdateInstance */
	static readonly UpdateInstance = "sso:UpdateInstance";
	/** [Write] sso:UpdateInstanceAccessControlAttributeConfiguration */
	static readonly UpdateInstanceAccessControlAttributeConfiguration =
		"sso:UpdateInstanceAccessControlAttributeConfiguration";
	/** [Write] sso:UpdateManagedApplicationInstanceStatus */
	static readonly UpdateManagedApplicationInstanceStatus =
		"sso:UpdateManagedApplicationInstanceStatus";
	/** [PermissionManagement] sso:UpdatePermissionSet */
	static readonly UpdatePermissionSet = "sso:UpdatePermissionSet";
	/** [Write] sso:UpdateProfile */
	static readonly UpdateProfile = "sso:UpdateProfile";
	/** [Write] sso:UpdateSSOConfiguration */
	static readonly UpdateSSOConfiguration = "sso:UpdateSSOConfiguration";
	/** [Write] sso:UpdateTrust */
	static readonly UpdateTrust = "sso:UpdateTrust";
	/** [Write] sso:UpdateTrustedTokenIssuer */
	static readonly UpdateTrustedTokenIssuer = "sso:UpdateTrustedTokenIssuer";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SSOActions.DescribeAccountAssignmentCreationStatus,
		SSOActions.DescribeAccountAssignmentDeletionStatus,
		SSOActions.DescribeApplication,
		SSOActions.DescribeApplicationAssignment,
		SSOActions.DescribeApplicationProvider,
		SSOActions.DescribeInstance,
		SSOActions.DescribeInstanceAccessControlAttributeConfiguration,
		SSOActions.DescribePermissionSet,
		SSOActions.DescribePermissionSetProvisioningStatus,
		SSOActions.DescribeRegion,
		SSOActions.DescribeRegisteredRegions,
		SSOActions.DescribeTrustedTokenIssuer,
		SSOActions.actionGetApplicationAccessScope,
		SSOActions.actionGetApplicationAssignmentConfiguration,
		SSOActions.actionGetApplicationAuthenticationMethod,
		SSOActions.actionGetApplicationGrant,
		SSOActions.actionGetApplicationInstance,
		SSOActions.actionGetApplicationSessionConfiguration,
		SSOActions.actionGetApplicationTemplate,
		SSOActions.actionGetInlinePolicyForPermissionSet,
		SSOActions.actionGetManagedApplicationInstance,
		SSOActions.actionGetMfaDeviceManagementForDirectory,
		SSOActions.actionGetPermissionSet,
		SSOActions.actionGetPermissionsBoundaryForPermissionSet,
		SSOActions.actionGetProfile,
		SSOActions.actionGetSSOStatus,
		SSOActions.actionGetSharedSsoConfiguration,
		SSOActions.actionGetSsoConfiguration,
		SSOActions.actionGetTrust,
		SSOActions.ListApplicationInstanceCertificates,
		SSOActions.ListDirectoryAssociations,
		SSOActions.ListProfileAssociations,
		SSOActions.ListTagsForResource,
		SSOActions.SearchGroups,
		SSOActions.SearchUsers,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SSOActions.AddRegion,
		SSOActions.AssociateDirectory,
		SSOActions.AssociateProfile,
		SSOActions.CreateAccountAssignment,
		SSOActions.CreateApplication,
		SSOActions.CreateApplicationAssignment,
		SSOActions.CreateApplicationInstance,
		SSOActions.CreateApplicationInstanceCertificate,
		SSOActions.CreateInstance,
		SSOActions.CreateInstanceAccessControlAttributeConfiguration,
		SSOActions.CreateManagedApplicationInstance,
		SSOActions.CreatePermissionSet,
		SSOActions.CreateProfile,
		SSOActions.CreateTrust,
		SSOActions.CreateTrustedTokenIssuer,
		SSOActions.DeleteAccountAssignment,
		SSOActions.DeleteApplication,
		SSOActions.DeleteApplicationAccessScope,
		SSOActions.DeleteApplicationAssignment,
		SSOActions.DeleteApplicationAuthenticationMethod,
		SSOActions.DeleteApplicationGrant,
		SSOActions.DeleteApplicationInstance,
		SSOActions.DeleteApplicationInstanceCertificate,
		SSOActions.DeleteInlinePolicyFromPermissionSet,
		SSOActions.DeleteInstance,
		SSOActions.DeleteInstanceAccessControlAttributeConfiguration,
		SSOActions.DeleteManagedApplicationInstance,
		SSOActions.DeletePermissionSet,
		SSOActions.DeleteProfile,
		SSOActions.DeleteTrustedTokenIssuer,
		SSOActions.DisassociateDirectory,
		SSOActions.DisassociateProfile,
		SSOActions.ImportApplicationInstanceServiceProviderMetadata,
		SSOActions.ProvisionPermissionSet,
		SSOActions.PutApplicationAccessScope,
		SSOActions.PutApplicationAssignmentConfiguration,
		SSOActions.PutApplicationAuthenticationMethod,
		SSOActions.PutApplicationGrant,
		SSOActions.PutApplicationSessionConfiguration,
		SSOActions.PutInlinePolicyToPermissionSet,
		SSOActions.PutMfaDeviceManagementForDirectory,
		SSOActions.RemoveRegion,
		SSOActions.StartSSO,
		SSOActions.UpdateApplication,
		SSOActions.UpdateApplicationInstanceActiveCertificate,
		SSOActions.UpdateApplicationInstanceDisplayData,
		SSOActions.UpdateApplicationInstanceResponseConfiguration,
		SSOActions.UpdateApplicationInstanceResponseSchemaConfiguration,
		SSOActions.UpdateApplicationInstanceSecurityConfiguration,
		SSOActions.UpdateApplicationInstanceServiceProviderConfiguration,
		SSOActions.UpdateApplicationInstanceStatus,
		SSOActions.UpdateInstance,
		SSOActions.UpdateInstanceAccessControlAttributeConfiguration,
		SSOActions.UpdateManagedApplicationInstanceStatus,
		SSOActions.UpdateProfile,
		SSOActions.UpdateSSOConfiguration,
		SSOActions.UpdateTrust,
		SSOActions.UpdateTrustedTokenIssuer,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SSOActions.ListAccountAssignmentCreationStatus,
		SSOActions.ListAccountAssignmentDeletionStatus,
		SSOActions.ListAccountAssignments,
		SSOActions.ListAccountAssignmentsForPrincipal,
		SSOActions.ListAccountsForProvisionedPermissionSet,
		SSOActions.ListApplicationAccessScopes,
		SSOActions.ListApplicationAssignments,
		SSOActions.ListApplicationAssignmentsForPrincipal,
		SSOActions.ListApplicationAuthenticationMethods,
		SSOActions.ListApplicationGrants,
		SSOActions.ListApplicationInstances,
		SSOActions.ListApplicationProviders,
		SSOActions.ListApplicationTemplates,
		SSOActions.ListApplications,
		SSOActions.ListCustomerManagedPolicyReferencesInPermissionSet,
		SSOActions.ListInstances,
		SSOActions.ListManagedPoliciesInPermissionSet,
		SSOActions.ListPermissionSetProvisioningStatus,
		SSOActions.ListPermissionSets,
		SSOActions.ListPermissionSetsProvisionedToAccount,
		SSOActions.ListProfiles,
		SSOActions.ListRegions,
		SSOActions.ListTrustedTokenIssuers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		SSOActions.AttachCustomerManagedPolicyReferenceToPermissionSet,
		SSOActions.AttachManagedPolicyToPermissionSet,
		SSOActions.DeletePermissionsBoundaryFromPermissionSet,
		SSOActions.DetachCustomerManagedPolicyReferenceFromPermissionSet,
		SSOActions.DetachManagedPolicyFromPermissionSet,
		SSOActions.PutPermissionsBoundaryToPermissionSet,
		SSOActions.PutPermissionsPolicy,
		SSOActions.UpdatePermissionSet,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SSOActions.TagResource,
		SSOActions.UntagResource,
	];
}

/**
 * Properties for building a Account ARN.
 */
export interface SSOAccountArnProps {
	/** The AccountId component of the ARN. */
	readonly accountId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Account ARN.
 */
export interface SSOAccountArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
}

/**
 * Properties for building a Application ARN.
 */
export interface SSOApplicationArnProps {
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
}

/**
 * Parsed components of a Application ARN.
 */
export interface SSOApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a ApplicationProvider ARN.
 */
export interface SSOApplicationProviderArnProps {
	/** The ApplicationProviderId component of the ARN. */
	readonly applicationProviderId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ApplicationProvider ARN.
 */
export interface SSOApplicationProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationProviderId component. */
	readonly applicationProviderId: string;
}

/**
 * Properties for building a Instance ARN.
 */
export interface SSOInstanceArnProps {
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Instance ARN.
 */
export interface SSOInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a PermissionSet ARN.
 */
export interface SSOPermissionSetArnProps {
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
}

/**
 * Parsed components of a PermissionSet ARN.
 */
export interface SSOPermissionSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The PermissionSetId component. */
	readonly permissionSetId: string;
}

/**
 * Properties for building a TrustedTokenIssuer ARN.
 */
export interface SSOTrustedTokenIssuerArnProps {
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
}

/**
 * Parsed components of a TrustedTokenIssuer ARN.
 */
export interface SSOTrustedTokenIssuerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The TrustedTokenIssuerId component. */
	readonly trustedTokenIssuerId: string;
}

const AccountArnRegex =
	/^arn:(?<partition>[^:]+):sso:::account\/(?<accountId>[^:/?]+)$/;
const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):sso::(?<accountId>[^:/?]+):application\/(?<instanceId>[^:/?]+)\/(?<applicationId>[^:/?]+)$/;
const ApplicationProviderArnRegex =
	/^arn:(?<partition>[^:]+):sso::aws:applicationProvider\/(?<applicationProviderId>[^:/?]+)$/;
const InstanceArnRegex =
	/^arn:(?<partition>[^:]+):sso:::instance\/(?<instanceId>[^:/?]+)$/;
const PermissionSetArnRegex =
	/^arn:(?<partition>[^:]+):sso:::permissionSet\/(?<instanceId>[^:/?]+)\/(?<permissionSetId>[^:/?]+)$/;
const TrustedTokenIssuerArnRegex =
	/^arn:(?<partition>[^:]+):sso::(?<accountId>[^:/?]+):trustedTokenIssuer\/(?<instanceId>[^:/?]+)\/(?<trustedTokenIssuerId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for sso resources.
 */
export class SSOResources {
	/**
	 * Builds an ARN for the Account resource.
	 */
	static account(props: SSOAccountArnProps): string {
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
	static parseAccountArn(arn: string): SSOAccountArnComponents {
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
	static application(props: SSOApplicationArnProps): string {
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
	static parseApplicationArn(arn: string): SSOApplicationArnComponents {
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
	static applicationProvider(props: SSOApplicationProviderArnProps): string {
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
	static parseApplicationProviderArn(
		arn: string,
	): SSOApplicationProviderArnComponents {
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
	static instance(props: SSOInstanceArnProps): string {
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
	static parseInstanceArn(arn: string): SSOInstanceArnComponents {
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
	static permissionSet(props: SSOPermissionSetArnProps): string {
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
	static parsePermissionSetArn(arn: string): SSOPermissionSetArnComponents {
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
	static trustedTokenIssuer(props: SSOTrustedTokenIssuerArnProps): string {
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
	static parseTrustedTokenIssuerArn(
		arn: string,
	): SSOTrustedTokenIssuerArnComponents {
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
	static readonly AddRegion: string[] = ["sso:AddRegion"];
	/** IAM actions required for the AttachCustomerManagedPolicyReferenceToPermissionSet API call. */
	static readonly AttachCustomerManagedPolicyReferenceToPermissionSet: string[] =
		["sso:AttachCustomerManagedPolicyReferenceToPermissionSet"];
	/** IAM actions required for the AttachManagedPolicyToPermissionSet API call. */
	static readonly AttachManagedPolicyToPermissionSet: string[] = [
		"sso:AttachManagedPolicyToPermissionSet",
		"sso:PutPermissionsPolicy",
	];
	/** IAM actions required for the CreateAccountAssignment API call. */
	static readonly CreateAccountAssignment: string[] = [
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
	static readonly CreateApplication: string[] = [
		"sso:CreateApplication",
		"sso:CreateApplicationInstance",
		"sso:CreateManagedApplicationInstance",
		"sso:PutApplicationAssignmentConfiguration",
		"sso:TagResource",
	];
	/** IAM actions required for the CreateApplicationAssignment API call. */
	static readonly CreateApplicationAssignment: string[] = [
		"sso:AssociateProfile",
		"sso:CreateApplicationAssignment",
	];
	/** IAM actions required for the CreateInstance API call. */
	static readonly CreateInstance: string[] = [
		"sso:CreateInstance",
		"sso:TagResource",
	];
	/** IAM actions required for the CreateInstanceAccessControlAttributeConfiguration API call. */
	static readonly CreateInstanceAccessControlAttributeConfiguration: string[] =
		["sso:CreateInstanceAccessControlAttributeConfiguration"];
	/** IAM actions required for the CreatePermissionSet API call. */
	static readonly CreatePermissionSet: string[] = [
		"sso:CreatePermissionSet",
		"sso:TagResource",
	];
	/** IAM actions required for the CreateTrustedTokenIssuer API call. */
	static readonly CreateTrustedTokenIssuer: string[] = [
		"sso:CreateTrustedTokenIssuer",
		"sso:TagResource",
	];
	/** IAM actions required for the DeleteAccountAssignment API call. */
	static readonly DeleteAccountAssignment: string[] = [
		"sso:DeleteAccountAssignment",
		"sso:DeleteProfile",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [
		"sso:DeleteApplication",
		"sso:DeleteApplicationInstance",
		"sso:DeleteManagedApplicationInstance",
	];
	/** IAM actions required for the DeleteApplicationAccessScope API call. */
	static readonly DeleteApplicationAccessScope: string[] = [
		"sso:DeleteApplicationAccessScope",
	];
	/** IAM actions required for the DeleteApplicationAssignment API call. */
	static readonly DeleteApplicationAssignment: string[] = [
		"sso:DeleteApplicationAssignment",
		"sso:DisassociateProfile",
	];
	/** IAM actions required for the DeleteApplicationAuthenticationMethod API call. */
	static readonly DeleteApplicationAuthenticationMethod: string[] = [
		"sso:DeleteApplicationAuthenticationMethod",
	];
	/** IAM actions required for the DeleteApplicationGrant API call. */
	static readonly DeleteApplicationGrant: string[] = [
		"sso:DeleteApplicationGrant",
	];
	/** IAM actions required for the DeleteInlinePolicyFromPermissionSet API call. */
	static readonly DeleteInlinePolicyFromPermissionSet: string[] = [
		"sso:DeleteInlinePolicyFromPermissionSet",
	];
	/** IAM actions required for the DeleteInstance API call. */
	static readonly DeleteInstance: string[] = [
		"sso:DeleteInstance",
		"sso:StartSSO",
	];
	/** IAM actions required for the DeleteInstanceAccessControlAttributeConfiguration API call. */
	static readonly DeleteInstanceAccessControlAttributeConfiguration: string[] =
		["sso:DeleteInstanceAccessControlAttributeConfiguration"];
	/** IAM actions required for the DeletePermissionSet API call. */
	static readonly DeletePermissionSet: string[] = ["sso:DeletePermissionSet"];
	/** IAM actions required for the DeletePermissionsBoundaryFromPermissionSet API call. */
	static readonly DeletePermissionsBoundaryFromPermissionSet: string[] = [
		"sso:DeletePermissionsBoundaryFromPermissionSet",
	];
	/** IAM actions required for the DeleteTrustedTokenIssuer API call. */
	static readonly DeleteTrustedTokenIssuer: string[] = [
		"sso:DeleteTrustedTokenIssuer",
	];
	/** IAM actions required for the DescribeAccountAssignmentCreationStatus API call. */
	static readonly DescribeAccountAssignmentCreationStatus: string[] = [
		"sso:DescribeAccountAssignmentCreationStatus",
	];
	/** IAM actions required for the DescribeAccountAssignmentDeletionStatus API call. */
	static readonly DescribeAccountAssignmentDeletionStatus: string[] = [
		"sso:DescribeAccountAssignmentDeletionStatus",
	];
	/** IAM actions required for the DescribeApplication API call. */
	static readonly DescribeApplication: string[] = [
		"sso:DescribeApplication",
		"sso:GetApplicationInstance",
		"sso:GetManagedApplicationInstance",
	];
	/** IAM actions required for the DescribeApplicationAssignment API call. */
	static readonly DescribeApplicationAssignment: string[] = [
		"sso:DescribeApplicationAssignment",
	];
	/** IAM actions required for the DescribeApplicationProvider API call. */
	static readonly DescribeApplicationProvider: string[] = [
		"sso:DescribeApplicationProvider",
		"sso:GetApplicationTemplate",
	];
	/** IAM actions required for the DescribeInstance API call. */
	static readonly DescribeInstance: string[] = [
		"sso:DescribeInstance",
		"sso:GetSharedSsoConfiguration",
		"sso:ListDirectoryAssociations",
	];
	/** IAM actions required for the DescribeInstanceAccessControlAttributeConfiguration API call. */
	static readonly DescribeInstanceAccessControlAttributeConfiguration: string[] =
		["sso:DescribeInstanceAccessControlAttributeConfiguration"];
	/** IAM actions required for the DescribePermissionSet API call. */
	static readonly DescribePermissionSet: string[] = [
		"sso:DescribePermissionSet",
		"sso:GetPermissionSet",
	];
	/** IAM actions required for the DescribePermissionSetProvisioningStatus API call. */
	static readonly DescribePermissionSetProvisioningStatus: string[] = [
		"sso:DescribePermissionSetProvisioningStatus",
	];
	/** IAM actions required for the DescribeRegion API call. */
	static readonly DescribeRegion: string[] = ["sso:DescribeRegion"];
	/** IAM actions required for the DescribeTrustedTokenIssuer API call. */
	static readonly DescribeTrustedTokenIssuer: string[] = [
		"sso:DescribeTrustedTokenIssuer",
	];
	/** IAM actions required for the DetachCustomerManagedPolicyReferenceFromPermissionSet API call. */
	static readonly DetachCustomerManagedPolicyReferenceFromPermissionSet: string[] =
		["sso:DetachCustomerManagedPolicyReferenceFromPermissionSet"];
	/** IAM actions required for the DetachManagedPolicyFromPermissionSet API call. */
	static readonly DetachManagedPolicyFromPermissionSet: string[] = [
		"sso:DetachManagedPolicyFromPermissionSet",
	];
	/** IAM actions required for the GetApplicationAccessScope API call. */
	static readonly opGetApplicationAccessScope: string[] = [
		"sso:GetApplicationAccessScope",
	];
	/** IAM actions required for the GetApplicationAssignmentConfiguration API call. */
	static readonly opGetApplicationAssignmentConfiguration: string[] = [
		"sso:GetApplicationAssignmentConfiguration",
	];
	/** IAM actions required for the GetApplicationAuthenticationMethod API call. */
	static readonly opGetApplicationAuthenticationMethod: string[] = [
		"sso:GetApplicationAuthenticationMethod",
	];
	/** IAM actions required for the GetApplicationGrant API call. */
	static readonly opGetApplicationGrant: string[] = ["sso:GetApplicationGrant"];
	/** IAM actions required for the GetApplicationSessionConfiguration API call. */
	static readonly opGetApplicationSessionConfiguration: string[] = [
		"sso:GetApplicationSessionConfiguration",
	];
	/** IAM actions required for the GetInlinePolicyForPermissionSet API call. */
	static readonly opGetInlinePolicyForPermissionSet: string[] = [
		"sso:GetInlinePolicyForPermissionSet",
	];
	/** IAM actions required for the GetPermissionsBoundaryForPermissionSet API call. */
	static readonly opGetPermissionsBoundaryForPermissionSet: string[] = [
		"sso:GetPermissionsBoundaryForPermissionSet",
	];
	/** IAM actions required for the GetRoleCredentials API call. */
	static readonly opGetRoleCredentials: string[] = [];
	/** IAM actions required for the ListAccountAssignmentCreationStatus API call. */
	static readonly ListAccountAssignmentCreationStatus: string[] = [
		"sso:ListAccountAssignmentCreationStatus",
	];
	/** IAM actions required for the ListAccountAssignmentDeletionStatus API call. */
	static readonly ListAccountAssignmentDeletionStatus: string[] = [
		"sso:ListAccountAssignmentDeletionStatus",
	];
	/** IAM actions required for the ListAccountAssignments API call. */
	static readonly ListAccountAssignments: string[] = [
		"sso:ListAccountAssignments",
		"sso:ListProfileAssociations",
	];
	/** IAM actions required for the ListAccountAssignmentsForPrincipal API call. */
	static readonly ListAccountAssignmentsForPrincipal: string[] = [
		"sso:ListAccountAssignmentsForPrincipal",
	];
	/** IAM actions required for the ListAccountRoles API call. */
	static readonly ListAccountRoles: string[] = [];
	/** IAM actions required for the ListAccounts API call. */
	static readonly ListAccounts: string[] = [];
	/** IAM actions required for the ListAccountsForProvisionedPermissionSet API call. */
	static readonly ListAccountsForProvisionedPermissionSet: string[] = [
		"sso:GetApplicationInstance",
		"sso:ListAccountsForProvisionedPermissionSet",
		"sso:ListApplicationInstances",
	];
	/** IAM actions required for the ListApplicationAccessScopes API call. */
	static readonly ListApplicationAccessScopes: string[] = [
		"sso:ListApplicationAccessScopes",
	];
	/** IAM actions required for the ListApplicationAssignments API call. */
	static readonly ListApplicationAssignments: string[] = [
		"sso:ListApplicationAssignments",
		"sso:ListProfileAssociations",
	];
	/** IAM actions required for the ListApplicationAssignmentsForPrincipal API call. */
	static readonly ListApplicationAssignmentsForPrincipal: string[] = [
		"sso:ListApplicationAssignmentsForPrincipal",
	];
	/** IAM actions required for the ListApplicationAuthenticationMethods API call. */
	static readonly ListApplicationAuthenticationMethods: string[] = [
		"sso:ListApplicationAuthenticationMethods",
	];
	/** IAM actions required for the ListApplicationGrants API call. */
	static readonly ListApplicationGrants: string[] = [
		"sso:ListApplicationGrants",
	];
	/** IAM actions required for the ListApplicationProviders API call. */
	static readonly ListApplicationProviders: string[] = [
		"sso:GetApplicationTemplate",
		"sso:ListApplicationProviders",
		"sso:ListApplicationTemplates",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = [
		"sso:GetApplicationInstance",
		"sso:ListApplicationInstances",
		"sso:ListApplicationProviders",
		"sso:ListApplications",
	];
	/** IAM actions required for the ListCustomerManagedPolicyReferencesInPermissionSet API call. */
	static readonly ListCustomerManagedPolicyReferencesInPermissionSet: string[] =
		["sso:ListCustomerManagedPolicyReferencesInPermissionSet"];
	/** IAM actions required for the ListInstances API call. */
	static readonly ListInstances: string[] = ["sso:ListInstances"];
	/** IAM actions required for the ListManagedPoliciesInPermissionSet API call. */
	static readonly ListManagedPoliciesInPermissionSet: string[] = [
		"sso:ListManagedPoliciesInPermissionSet",
	];
	/** IAM actions required for the ListPermissionSetProvisioningStatus API call. */
	static readonly ListPermissionSetProvisioningStatus: string[] = [
		"sso:ListPermissionSetProvisioningStatus",
	];
	/** IAM actions required for the ListPermissionSets API call. */
	static readonly ListPermissionSets: string[] = ["sso:ListPermissionSets"];
	/** IAM actions required for the ListPermissionSetsProvisionedToAccount API call. */
	static readonly ListPermissionSetsProvisionedToAccount: string[] = [
		"sso:GetProfile",
		"sso:ListPermissionSetsProvisionedToAccount",
		"sso:ListProfiles",
	];
	/** IAM actions required for the ListRegions API call. */
	static readonly ListRegions: string[] = ["sso:ListRegions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["sso:ListTagsForResource"];
	/** IAM actions required for the ListTrustedTokenIssuers API call. */
	static readonly ListTrustedTokenIssuers: string[] = [
		"sso:ListTrustedTokenIssuers",
	];
	/** IAM actions required for the Logout API call. */
	static readonly Logout: string[] = [];
	/** IAM actions required for the ProvisionPermissionSet API call. */
	static readonly ProvisionPermissionSet: string[] = [
		"sso:ProvisionPermissionSet",
	];
	/** IAM actions required for the PutApplicationAccessScope API call. */
	static readonly PutApplicationAccessScope: string[] = [
		"sso:PutApplicationAccessScope",
	];
	/** IAM actions required for the PutApplicationAssignmentConfiguration API call. */
	static readonly PutApplicationAssignmentConfiguration: string[] = [
		"sso:PutApplicationAssignmentConfiguration",
	];
	/** IAM actions required for the PutApplicationAuthenticationMethod API call. */
	static readonly PutApplicationAuthenticationMethod: string[] = [
		"sso:CreateManagedApplicationInstance",
		"sso:PutApplicationAuthenticationMethod",
	];
	/** IAM actions required for the PutApplicationGrant API call. */
	static readonly PutApplicationGrant: string[] = [
		"sso:CreateManagedApplicationInstance",
		"sso:PutApplicationGrant",
	];
	/** IAM actions required for the PutApplicationSessionConfiguration API call. */
	static readonly PutApplicationSessionConfiguration: string[] = [
		"sso:PutApplicationSessionConfiguration",
	];
	/** IAM actions required for the PutInlinePolicyToPermissionSet API call. */
	static readonly PutInlinePolicyToPermissionSet: string[] = [
		"sso:PutInlinePolicyToPermissionSet",
		"sso:PutPermissionsPolicy",
	];
	/** IAM actions required for the PutPermissionsBoundaryToPermissionSet API call. */
	static readonly PutPermissionsBoundaryToPermissionSet: string[] = [
		"sso:PutPermissionsBoundaryToPermissionSet",
	];
	/** IAM actions required for the RemoveRegion API call. */
	static readonly RemoveRegion: string[] = ["sso:RemoveRegion"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["sso:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["sso:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [
		"sso:PutApplicationAssignmentConfiguration",
		"sso:UpdateApplication",
		"sso:UpdateApplicationInstanceDisplayData",
		"sso:UpdateApplicationInstanceStatus",
		"sso:UpdateManagedApplicationInstanceStatus",
	];
	/** IAM actions required for the UpdateInstance API call. */
	static readonly UpdateInstance: string[] = ["sso:UpdateInstance"];
	/** IAM actions required for the UpdateInstanceAccessControlAttributeConfiguration API call. */
	static readonly UpdateInstanceAccessControlAttributeConfiguration: string[] =
		["sso:UpdateInstanceAccessControlAttributeConfiguration"];
	/** IAM actions required for the UpdatePermissionSet API call. */
	static readonly UpdatePermissionSet: string[] = ["sso:UpdatePermissionSet"];
	/** IAM actions required for the UpdateTrustedTokenIssuer API call. */
	static readonly UpdateTrustedTokenIssuer: string[] = [
		"sso:UpdateTrustedTokenIssuer",
	];
}

/**
 * Condition key constants and builders for sso.
 */
export class SSOConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApplicationAssignment action. */
	static readonly CreateApplicationAssignmentConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the CreateInstance action. */
	static readonly CreateInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePermissionSet action. */
	static readonly CreatePermissionSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTrustedTokenIssuer action. */
	static readonly CreateTrustedTokenIssuerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteApplication action. */
	static readonly DeleteApplicationConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the DeleteApplicationAccessScope action. */
	static readonly DeleteApplicationAccessScopeConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the DeleteApplicationAssignment action. */
	static readonly DeleteApplicationAssignmentConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the DeleteApplicationAuthenticationMethod action. */
	static readonly DeleteApplicationAuthenticationMethodConditionKeys: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the DeleteApplicationGrant action. */
	static readonly DeleteApplicationGrantConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the DescribeApplication action. */
	static readonly DescribeApplicationConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the DescribeApplicationAssignment action. */
	static readonly DescribeApplicationAssignmentConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the GetApplicationAccessScope action. */
	static readonly actionGetApplicationAccessScopeConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the GetApplicationAssignmentConfiguration action. */
	static readonly actionGetApplicationAssignmentConfigurationConditionKeys: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the GetApplicationAuthenticationMethod action. */
	static readonly actionGetApplicationAuthenticationMethodConditionKeys: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the GetApplicationGrant action. */
	static readonly actionGetApplicationGrantConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the GetApplicationSessionConfiguration action. */
	static readonly actionGetApplicationSessionConfigurationConditionKeys: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the ListApplicationAccessScopes action. */
	static readonly ListApplicationAccessScopesConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the ListApplicationAssignments action. */
	static readonly ListApplicationAssignmentsConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the ListApplicationAssignmentsForPrincipal action. */
	static readonly ListApplicationAssignmentsForPrincipalConditionKeys: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the ListApplicationAuthenticationMethods action. */
	static readonly ListApplicationAuthenticationMethodsConditionKeys: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the ListApplicationGrants action. */
	static readonly ListApplicationGrantsConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the PutApplicationAccessScope action. */
	static readonly PutApplicationAccessScopeConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the PutApplicationAssignmentConfiguration action. */
	static readonly PutApplicationAssignmentConfigurationConditionKeys: string[] =
		["sso:ApplicationAccount"];
	/** Condition keys applicable to the PutApplicationAuthenticationMethod action. */
	static readonly PutApplicationAuthenticationMethodConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the PutApplicationGrant action. */
	static readonly PutApplicationGrantConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the PutApplicationSessionConfiguration action. */
	static readonly PutApplicationSessionConfigurationConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateApplication action. */
	static readonly UpdateApplicationConditionKeys: string[] = [
		"sso:ApplicationAccount",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
