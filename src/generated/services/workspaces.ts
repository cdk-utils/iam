// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/workspaces.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the workspaces service.
 */
export class WorkSpacesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "workspaces";

	/** [Write] workspaces:AcceptAccountLinkInvitation */
	static readonly AcceptAccountLinkInvitation =
		"workspaces:AcceptAccountLinkInvitation";
	/** [Write] workspaces:AssociateConnectionAlias */
	static readonly AssociateConnectionAlias =
		"workspaces:AssociateConnectionAlias";
	/** [Write] workspaces:AssociateIpGroups */
	static readonly AssociateIpGroups = "workspaces:AssociateIpGroups";
	/** [Write] workspaces:AssociateWorkspaceApplication */
	static readonly AssociateWorkspaceApplication =
		"workspaces:AssociateWorkspaceApplication";
	/** [Write] workspaces:AuthorizeIpRules */
	static readonly AuthorizeIpRules = "workspaces:AuthorizeIpRules";
	/** [Write] workspaces:CopyWorkspaceImage */
	static readonly CopyWorkspaceImage = "workspaces:CopyWorkspaceImage";
	/** [Write] workspaces:CreateAccountLinkInvitation */
	static readonly CreateAccountLinkInvitation =
		"workspaces:CreateAccountLinkInvitation";
	/** [Write] workspaces:CreateConnectClientAddIn */
	static readonly CreateConnectClientAddIn =
		"workspaces:CreateConnectClientAddIn";
	/** [Write] workspaces:CreateConnectionAlias */
	static readonly CreateConnectionAlias = "workspaces:CreateConnectionAlias";
	/** [Write] workspaces:CreateIpGroup */
	static readonly CreateIpGroup = "workspaces:CreateIpGroup";
	/** [Write] workspaces:CreateRootClientCertificate */
	static readonly CreateRootClientCertificate =
		"workspaces:CreateRootClientCertificate";
	/** [Write] workspaces:CreateStandbyWorkspaces */
	static readonly CreateStandbyWorkspaces =
		"workspaces:CreateStandbyWorkspaces";
	/** [Tagging] workspaces:CreateTags */
	static readonly CreateTags = "workspaces:CreateTags";
	/** [Write] workspaces:CreateUpdatedWorkspaceImage */
	static readonly CreateUpdatedWorkspaceImage =
		"workspaces:CreateUpdatedWorkspaceImage";
	/** [Write] workspaces:CreateWorkspaceBundle */
	static readonly CreateWorkspaceBundle = "workspaces:CreateWorkspaceBundle";
	/** [Write] workspaces:CreateWorkspaceImage */
	static readonly CreateWorkspaceImage = "workspaces:CreateWorkspaceImage";
	/** [Write] workspaces:CreateWorkspaces */
	static readonly CreateWorkspaces = "workspaces:CreateWorkspaces";
	/** [Write] workspaces:CreateWorkspacesPool */
	static readonly CreateWorkspacesPool = "workspaces:CreateWorkspacesPool";
	/** [Write] workspaces:DeleteAccountLinkInvitation */
	static readonly DeleteAccountLinkInvitation =
		"workspaces:DeleteAccountLinkInvitation";
	/** [Write] workspaces:DeleteClientBranding */
	static readonly DeleteClientBranding = "workspaces:DeleteClientBranding";
	/** [Write] workspaces:DeleteConnectClientAddIn */
	static readonly DeleteConnectClientAddIn =
		"workspaces:DeleteConnectClientAddIn";
	/** [Write] workspaces:DeleteConnectionAlias */
	static readonly DeleteConnectionAlias = "workspaces:DeleteConnectionAlias";
	/** [Write] workspaces:DeleteIpGroup */
	static readonly DeleteIpGroup = "workspaces:DeleteIpGroup";
	/** [Write] workspaces:DeleteRootClientCertificate */
	static readonly DeleteRootClientCertificate =
		"workspaces:DeleteRootClientCertificate";
	/** [Tagging] workspaces:DeleteTags */
	static readonly DeleteTags = "workspaces:DeleteTags";
	/** [Write] workspaces:DeleteWorkspaceBundle */
	static readonly DeleteWorkspaceBundle = "workspaces:DeleteWorkspaceBundle";
	/** [Write] workspaces:DeleteWorkspaceImage */
	static readonly DeleteWorkspaceImage = "workspaces:DeleteWorkspaceImage";
	/** [Write] workspaces:DeployWorkspaceApplications */
	static readonly DeployWorkspaceApplications =
		"workspaces:DeployWorkspaceApplications";
	/** [Write] workspaces:DeregisterWorkspaceDirectory */
	static readonly DeregisterWorkspaceDirectory =
		"workspaces:DeregisterWorkspaceDirectory";
	/** [Read] workspaces:DescribeAccount */
	static readonly DescribeAccount = "workspaces:DescribeAccount";
	/** [Read] workspaces:DescribeAccountModifications */
	static readonly DescribeAccountModifications =
		"workspaces:DescribeAccountModifications";
	/** [List] workspaces:DescribeApplicationAssociations */
	static readonly DescribeApplicationAssociations =
		"workspaces:DescribeApplicationAssociations";
	/** [List] workspaces:DescribeApplications */
	static readonly DescribeApplications = "workspaces:DescribeApplications";
	/** [List] workspaces:DescribeBundleAssociations */
	static readonly DescribeBundleAssociations =
		"workspaces:DescribeBundleAssociations";
	/** [Read] workspaces:DescribeClientBranding */
	static readonly DescribeClientBranding = "workspaces:DescribeClientBranding";
	/** [List] workspaces:DescribeClientProperties */
	static readonly DescribeClientProperties =
		"workspaces:DescribeClientProperties";
	/** [List] workspaces:DescribeConnectClientAddIns */
	static readonly DescribeConnectClientAddIns =
		"workspaces:DescribeConnectClientAddIns";
	/** [Read] workspaces:DescribeConnectionAliasPermissions */
	static readonly DescribeConnectionAliasPermissions =
		"workspaces:DescribeConnectionAliasPermissions";
	/** [Read] workspaces:DescribeConnectionAliases */
	static readonly DescribeConnectionAliases =
		"workspaces:DescribeConnectionAliases";
	/** [Read] workspaces:DescribeConsent */
	static readonly DescribeConsent = "workspaces:DescribeConsent";
	/** [Read] workspaces:DescribeCustomWorkspaceImageImport */
	static readonly DescribeCustomWorkspaceImageImport =
		"workspaces:DescribeCustomWorkspaceImageImport";
	/** [List] workspaces:DescribeImageAssociations */
	static readonly DescribeImageAssociations =
		"workspaces:DescribeImageAssociations";
	/** [Read] workspaces:DescribeIpGroups */
	static readonly DescribeIpGroups = "workspaces:DescribeIpGroups";
	/** [Read] workspaces:DescribeTags */
	static readonly DescribeTags = "workspaces:DescribeTags";
	/** [List] workspaces:DescribeWorkspaceAssociations */
	static readonly DescribeWorkspaceAssociations =
		"workspaces:DescribeWorkspaceAssociations";
	/** [List] workspaces:DescribeWorkspaceBundles */
	static readonly DescribeWorkspaceBundles =
		"workspaces:DescribeWorkspaceBundles";
	/** [Read] workspaces:DescribeWorkspaceDirectories */
	static readonly DescribeWorkspaceDirectories =
		"workspaces:DescribeWorkspaceDirectories";
	/** [Read] workspaces:DescribeWorkspaceImagePermissions */
	static readonly DescribeWorkspaceImagePermissions =
		"workspaces:DescribeWorkspaceImagePermissions";
	/** [List] workspaces:DescribeWorkspaceImages */
	static readonly DescribeWorkspaceImages =
		"workspaces:DescribeWorkspaceImages";
	/** [List] workspaces:DescribeWorkspaceSnapshots */
	static readonly DescribeWorkspaceSnapshots =
		"workspaces:DescribeWorkspaceSnapshots";
	/** [List] workspaces:DescribeWorkspaces */
	static readonly DescribeWorkspaces = "workspaces:DescribeWorkspaces";
	/** [Read] workspaces:DescribeWorkspacesConnectionStatus */
	static readonly DescribeWorkspacesConnectionStatus =
		"workspaces:DescribeWorkspacesConnectionStatus";
	/** [List] workspaces:DescribeWorkspacesPoolSessions */
	static readonly DescribeWorkspacesPoolSessions =
		"workspaces:DescribeWorkspacesPoolSessions";
	/** [List] workspaces:DescribeWorkspacesPools */
	static readonly DescribeWorkspacesPools =
		"workspaces:DescribeWorkspacesPools";
	/** [List] workspaces:DirectoryAccessManagement */
	static readonly DirectoryAccessManagement =
		"workspaces:DirectoryAccessManagement";
	/** [Write] workspaces:DisassociateConnectionAlias */
	static readonly DisassociateConnectionAlias =
		"workspaces:DisassociateConnectionAlias";
	/** [Write] workspaces:DisassociateIpGroups */
	static readonly DisassociateIpGroups = "workspaces:DisassociateIpGroups";
	/** [Write] workspaces:DisassociateWorkspaceApplication */
	static readonly DisassociateWorkspaceApplication =
		"workspaces:DisassociateWorkspaceApplication";
	/** [Read] workspaces:GetAccountLink */
	static readonly actionGetAccountLink = "workspaces:GetAccountLink";
	/** [Read] workspaces:GetTroubleshootingRecommendation */
	static readonly actionGetTroubleshootingRecommendation =
		"workspaces:GetTroubleshootingRecommendation";
	/** [Write] workspaces:ImportClientBranding */
	static readonly ImportClientBranding = "workspaces:ImportClientBranding";
	/** [Write] workspaces:ImportCustomWorkspaceImage */
	static readonly ImportCustomWorkspaceImage =
		"workspaces:ImportCustomWorkspaceImage";
	/** [Write] workspaces:ImportWorkspaceImage */
	static readonly ImportWorkspaceImage = "workspaces:ImportWorkspaceImage";
	/** [Write] workspaces:InvokeOnboardingAgent */
	static readonly InvokeOnboardingAgent = "workspaces:InvokeOnboardingAgent";
	/** [Read] workspaces:InvokeTroubleshootingInvestigation */
	static readonly InvokeTroubleshootingInvestigation =
		"workspaces:InvokeTroubleshootingInvestigation";
	/** [List] workspaces:ListAccountLinks */
	static readonly ListAccountLinks = "workspaces:ListAccountLinks";
	/** [List] workspaces:ListAvailableManagementCidrRanges */
	static readonly ListAvailableManagementCidrRanges =
		"workspaces:ListAvailableManagementCidrRanges";
	/** [Read] workspaces:ListTroubleshootingRecommendations */
	static readonly ListTroubleshootingRecommendations =
		"workspaces:ListTroubleshootingRecommendations";
	/** [Write] workspaces:MigrateWorkspace */
	static readonly MigrateWorkspace = "workspaces:MigrateWorkspace";
	/** [Write] workspaces:ModifyAccount */
	static readonly ModifyAccount = "workspaces:ModifyAccount";
	/** [Write] workspaces:ModifyCertificateBasedAuthProperties */
	static readonly ModifyCertificateBasedAuthProperties =
		"workspaces:ModifyCertificateBasedAuthProperties";
	/** [Write] workspaces:ModifyClientProperties */
	static readonly ModifyClientProperties = "workspaces:ModifyClientProperties";
	/** [Write] workspaces:ModifyEndpointEncryptionMode */
	static readonly ModifyEndpointEncryptionMode =
		"workspaces:ModifyEndpointEncryptionMode";
	/** [Write] workspaces:ModifySamlProperties */
	static readonly ModifySamlProperties = "workspaces:ModifySamlProperties";
	/** [PermissionManagement] workspaces:ModifySelfservicePermissions */
	static readonly ModifySelfservicePermissions =
		"workspaces:ModifySelfservicePermissions";
	/** [Write] workspaces:ModifyStreamingProperties */
	static readonly ModifyStreamingProperties =
		"workspaces:ModifyStreamingProperties";
	/** [Write] workspaces:ModifyWorkspaceAccessProperties */
	static readonly ModifyWorkspaceAccessProperties =
		"workspaces:ModifyWorkspaceAccessProperties";
	/** [Write] workspaces:ModifyWorkspaceCreationProperties */
	static readonly ModifyWorkspaceCreationProperties =
		"workspaces:ModifyWorkspaceCreationProperties";
	/** [Write] workspaces:ModifyWorkspaceProperties */
	static readonly ModifyWorkspaceProperties =
		"workspaces:ModifyWorkspaceProperties";
	/** [Write] workspaces:ModifyWorkspaceState */
	static readonly ModifyWorkspaceState = "workspaces:ModifyWorkspaceState";
	/** [Write] workspaces:Personalization */
	static readonly Personalization = "workspaces:Personalization";
	/** [Write] workspaces:RebootWorkspaces */
	static readonly RebootWorkspaces = "workspaces:RebootWorkspaces";
	/** [Write] workspaces:RebuildWorkspaces */
	static readonly RebuildWorkspaces = "workspaces:RebuildWorkspaces";
	/** [Write] workspaces:RegisterWorkspaceDirectory */
	static readonly RegisterWorkspaceDirectory =
		"workspaces:RegisterWorkspaceDirectory";
	/** [Write] workspaces:RejectAccountLinkInvitation */
	static readonly RejectAccountLinkInvitation =
		"workspaces:RejectAccountLinkInvitation";
	/** [Write] workspaces:RestoreWorkspace */
	static readonly RestoreWorkspace = "workspaces:RestoreWorkspace";
	/** [Write] workspaces:RevokeIpRules */
	static readonly RevokeIpRules = "workspaces:RevokeIpRules";
	/** [Write] workspaces:StartWorkspaces */
	static readonly StartWorkspaces = "workspaces:StartWorkspaces";
	/** [Write] workspaces:StartWorkspacesPool */
	static readonly StartWorkspacesPool = "workspaces:StartWorkspacesPool";
	/** [Write] workspaces:StopWorkspaces */
	static readonly StopWorkspaces = "workspaces:StopWorkspaces";
	/** [Write] workspaces:StopWorkspacesPool */
	static readonly StopWorkspacesPool = "workspaces:StopWorkspacesPool";
	/** [Write] workspaces:Stream */
	static readonly Stream = "workspaces:Stream";
	/** [Write] workspaces:TerminateWorkspaces */
	static readonly TerminateWorkspaces = "workspaces:TerminateWorkspaces";
	/** [Write] workspaces:TerminateWorkspacesPool */
	static readonly TerminateWorkspacesPool =
		"workspaces:TerminateWorkspacesPool";
	/** [Write] workspaces:TerminateWorkspacesPoolSession */
	static readonly TerminateWorkspacesPoolSession =
		"workspaces:TerminateWorkspacesPoolSession";
	/** [Write] workspaces:UpdateConnectClientAddIn */
	static readonly UpdateConnectClientAddIn =
		"workspaces:UpdateConnectClientAddIn";
	/** [PermissionManagement] workspaces:UpdateConnectionAliasPermission */
	static readonly UpdateConnectionAliasPermission =
		"workspaces:UpdateConnectionAliasPermission";
	/** [Write] workspaces:UpdateConsent */
	static readonly UpdateConsent = "workspaces:UpdateConsent";
	/** [Write] workspaces:UpdateRootClientCertificate */
	static readonly UpdateRootClientCertificate =
		"workspaces:UpdateRootClientCertificate";
	/** [Write] workspaces:UpdateRulesOfIpGroup */
	static readonly UpdateRulesOfIpGroup = "workspaces:UpdateRulesOfIpGroup";
	/** [Write] workspaces:UpdateWorkspaceBundle */
	static readonly UpdateWorkspaceBundle = "workspaces:UpdateWorkspaceBundle";
	/** [PermissionManagement] workspaces:UpdateWorkspaceImagePermission */
	static readonly UpdateWorkspaceImagePermission =
		"workspaces:UpdateWorkspaceImagePermission";
	/** [Write] workspaces:UpdateWorkspacesPool */
	static readonly UpdateWorkspacesPool = "workspaces:UpdateWorkspacesPool";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		WorkSpacesActions.DescribeAccount,
		WorkSpacesActions.DescribeAccountModifications,
		WorkSpacesActions.DescribeClientBranding,
		WorkSpacesActions.DescribeConnectionAliasPermissions,
		WorkSpacesActions.DescribeConnectionAliases,
		WorkSpacesActions.DescribeConsent,
		WorkSpacesActions.DescribeCustomWorkspaceImageImport,
		WorkSpacesActions.DescribeIpGroups,
		WorkSpacesActions.DescribeTags,
		WorkSpacesActions.DescribeWorkspaceDirectories,
		WorkSpacesActions.DescribeWorkspaceImagePermissions,
		WorkSpacesActions.DescribeWorkspacesConnectionStatus,
		WorkSpacesActions.actionGetAccountLink,
		WorkSpacesActions.actionGetTroubleshootingRecommendation,
		WorkSpacesActions.InvokeTroubleshootingInvestigation,
		WorkSpacesActions.ListTroubleshootingRecommendations,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		WorkSpacesActions.AcceptAccountLinkInvitation,
		WorkSpacesActions.AssociateConnectionAlias,
		WorkSpacesActions.AssociateIpGroups,
		WorkSpacesActions.AssociateWorkspaceApplication,
		WorkSpacesActions.AuthorizeIpRules,
		WorkSpacesActions.CopyWorkspaceImage,
		WorkSpacesActions.CreateAccountLinkInvitation,
		WorkSpacesActions.CreateConnectClientAddIn,
		WorkSpacesActions.CreateConnectionAlias,
		WorkSpacesActions.CreateIpGroup,
		WorkSpacesActions.CreateRootClientCertificate,
		WorkSpacesActions.CreateStandbyWorkspaces,
		WorkSpacesActions.CreateUpdatedWorkspaceImage,
		WorkSpacesActions.CreateWorkspaceBundle,
		WorkSpacesActions.CreateWorkspaceImage,
		WorkSpacesActions.CreateWorkspaces,
		WorkSpacesActions.CreateWorkspacesPool,
		WorkSpacesActions.DeleteAccountLinkInvitation,
		WorkSpacesActions.DeleteClientBranding,
		WorkSpacesActions.DeleteConnectClientAddIn,
		WorkSpacesActions.DeleteConnectionAlias,
		WorkSpacesActions.DeleteIpGroup,
		WorkSpacesActions.DeleteRootClientCertificate,
		WorkSpacesActions.DeleteWorkspaceBundle,
		WorkSpacesActions.DeleteWorkspaceImage,
		WorkSpacesActions.DeployWorkspaceApplications,
		WorkSpacesActions.DeregisterWorkspaceDirectory,
		WorkSpacesActions.DisassociateConnectionAlias,
		WorkSpacesActions.DisassociateIpGroups,
		WorkSpacesActions.DisassociateWorkspaceApplication,
		WorkSpacesActions.ImportClientBranding,
		WorkSpacesActions.ImportCustomWorkspaceImage,
		WorkSpacesActions.ImportWorkspaceImage,
		WorkSpacesActions.InvokeOnboardingAgent,
		WorkSpacesActions.MigrateWorkspace,
		WorkSpacesActions.ModifyAccount,
		WorkSpacesActions.ModifyCertificateBasedAuthProperties,
		WorkSpacesActions.ModifyClientProperties,
		WorkSpacesActions.ModifyEndpointEncryptionMode,
		WorkSpacesActions.ModifySamlProperties,
		WorkSpacesActions.ModifyStreamingProperties,
		WorkSpacesActions.ModifyWorkspaceAccessProperties,
		WorkSpacesActions.ModifyWorkspaceCreationProperties,
		WorkSpacesActions.ModifyWorkspaceProperties,
		WorkSpacesActions.ModifyWorkspaceState,
		WorkSpacesActions.Personalization,
		WorkSpacesActions.RebootWorkspaces,
		WorkSpacesActions.RebuildWorkspaces,
		WorkSpacesActions.RegisterWorkspaceDirectory,
		WorkSpacesActions.RejectAccountLinkInvitation,
		WorkSpacesActions.RestoreWorkspace,
		WorkSpacesActions.RevokeIpRules,
		WorkSpacesActions.StartWorkspaces,
		WorkSpacesActions.StartWorkspacesPool,
		WorkSpacesActions.StopWorkspaces,
		WorkSpacesActions.StopWorkspacesPool,
		WorkSpacesActions.Stream,
		WorkSpacesActions.TerminateWorkspaces,
		WorkSpacesActions.TerminateWorkspacesPool,
		WorkSpacesActions.TerminateWorkspacesPoolSession,
		WorkSpacesActions.UpdateConnectClientAddIn,
		WorkSpacesActions.UpdateConsent,
		WorkSpacesActions.UpdateRootClientCertificate,
		WorkSpacesActions.UpdateRulesOfIpGroup,
		WorkSpacesActions.UpdateWorkspaceBundle,
		WorkSpacesActions.UpdateWorkspacesPool,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		WorkSpacesActions.DescribeApplicationAssociations,
		WorkSpacesActions.DescribeApplications,
		WorkSpacesActions.DescribeBundleAssociations,
		WorkSpacesActions.DescribeClientProperties,
		WorkSpacesActions.DescribeConnectClientAddIns,
		WorkSpacesActions.DescribeImageAssociations,
		WorkSpacesActions.DescribeWorkspaceAssociations,
		WorkSpacesActions.DescribeWorkspaceBundles,
		WorkSpacesActions.DescribeWorkspaceImages,
		WorkSpacesActions.DescribeWorkspaceSnapshots,
		WorkSpacesActions.DescribeWorkspaces,
		WorkSpacesActions.DescribeWorkspacesPoolSessions,
		WorkSpacesActions.DescribeWorkspacesPools,
		WorkSpacesActions.DirectoryAccessManagement,
		WorkSpacesActions.ListAccountLinks,
		WorkSpacesActions.ListAvailableManagementCidrRanges,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		WorkSpacesActions.ModifySelfservicePermissions,
		WorkSpacesActions.UpdateConnectionAliasPermission,
		WorkSpacesActions.UpdateWorkspaceImagePermission,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		WorkSpacesActions.CreateTags,
		WorkSpacesActions.DeleteTags,
	];
}

/**
 * Properties for building a certificateid ARN.
 */
export interface WorkSpacesCertificateidArnProps {
	/** The CertificateId component of the ARN. */
	readonly certificateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a certificateid ARN.
 */
export interface WorkSpacesCertificateidArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CertificateId component. */
	readonly certificateId: string;
}

/**
 * Properties for building a connectionalias ARN.
 */
export interface WorkSpacesConnectionaliasArnProps {
	/** The ConnectionAliasId component of the ARN. */
	readonly connectionAliasId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connectionalias ARN.
 */
export interface WorkSpacesConnectionaliasArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectionAliasId component. */
	readonly connectionAliasId: string;
}

/**
 * Properties for building a directoryid ARN.
 */
export interface WorkSpacesDirectoryidArnProps {
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
 * Parsed components of a directoryid ARN.
 */
export interface WorkSpacesDirectoryidArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DirectoryId component. */
	readonly directoryId: string;
}

/**
 * Properties for building a workspaceapplication ARN.
 */
export interface WorkSpacesWorkspaceapplicationArnProps {
	/** The WorkSpaceApplicationId component of the ARN. */
	readonly workSpaceApplicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workspaceapplication ARN.
 */
export interface WorkSpacesWorkspaceapplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkSpaceApplicationId component. */
	readonly workSpaceApplicationId: string;
}

/**
 * Properties for building a workspacebundle ARN.
 */
export interface WorkSpacesWorkspacebundleArnProps {
	/** The BundleId component of the ARN. */
	readonly bundleId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workspacebundle ARN.
 */
export interface WorkSpacesWorkspacebundleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BundleId component. */
	readonly bundleId: string;
}

/**
 * Properties for building a workspaceid ARN.
 */
export interface WorkSpacesWorkspaceidArnProps {
	/** The WorkspaceId component of the ARN. */
	readonly workspaceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workspaceid ARN.
 */
export interface WorkSpacesWorkspaceidArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceId component. */
	readonly workspaceId: string;
}

/**
 * Properties for building a workspaceimage ARN.
 */
export interface WorkSpacesWorkspaceimageArnProps {
	/** The ImageId component of the ARN. */
	readonly imageId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workspaceimage ARN.
 */
export interface WorkSpacesWorkspaceimageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ImageId component. */
	readonly imageId: string;
}

/**
 * Properties for building a workspaceipgroup ARN.
 */
export interface WorkSpacesWorkspaceipgroupArnProps {
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
 * Parsed components of a workspaceipgroup ARN.
 */
export interface WorkSpacesWorkspaceipgroupArnComponents {
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
 * Properties for building a workspacespool ARN.
 */
export interface WorkSpacesWorkspacespoolArnProps {
	/** The PoolId component of the ARN. */
	readonly poolId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workspacespool ARN.
 */
export interface WorkSpacesWorkspacespoolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PoolId component. */
	readonly poolId: string;
}

const CertificateidArnRegex =
	/^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspacecertificate\/(?<certificateId>[^:/?]+)$/;
const ConnectionaliasArnRegex =
	/^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):connectionalias\/(?<connectionAliasId>[^:/?]+)$/;
const DirectoryidArnRegex =
	/^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):directory\/(?<directoryId>[^:/?]+)$/;
const WorkspaceapplicationArnRegex =
	/^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspaceapplication\/(?<workSpaceApplicationId>[^:/?]+)$/;
const WorkspacebundleArnRegex =
	/^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspacebundle\/(?<bundleId>[^:/?]+)$/;
const WorkspaceidArnRegex =
	/^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspace\/(?<workspaceId>[^:/?]+)$/;
const WorkspaceimageArnRegex =
	/^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspaceimage\/(?<imageId>[^:/?]+)$/;
const WorkspaceipgroupArnRegex =
	/^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspaceipgroup\/(?<groupId>[^:/?]+)$/;
const WorkspacespoolArnRegex =
	/^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspacespool\/(?<poolId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for workspaces resources.
 */
export class WorkSpacesResources {
	/**
	 * Builds an ARN for the certificateid resource.
	 */
	static certificateid(props: WorkSpacesCertificateidArnProps): string {
		return `arn:${props.partition ?? "aws"}:workspaces:${props.region ?? "*"}:${props.account ?? "*"}:workspacecertificate/${props.certificateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the certificateid resource.
	 */
	static isValidCertificateidArn(arn: string): boolean {
		return CertificateidArnRegex.test(arn);
	}

	/**
	 * Parses a certificateid ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCertificateidArn(
		arn: string,
	): WorkSpacesCertificateidArnComponents {
		const match = CertificateidArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid certificateid ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			certificateId: match.groups!.certificateId,
		};
	}

	/**
	 * Builds an ARN for the connectionalias resource.
	 */
	static connectionalias(props: WorkSpacesConnectionaliasArnProps): string {
		return `arn:${props.partition ?? "aws"}:workspaces:${props.region ?? "*"}:${props.account ?? "*"}:connectionalias/${props.connectionAliasId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connectionalias resource.
	 */
	static isValidConnectionaliasArn(arn: string): boolean {
		return ConnectionaliasArnRegex.test(arn);
	}

	/**
	 * Parses a connectionalias ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionaliasArn(
		arn: string,
	): WorkSpacesConnectionaliasArnComponents {
		const match = ConnectionaliasArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connectionalias ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectionAliasId: match.groups!.connectionAliasId,
		};
	}

	/**
	 * Builds an ARN for the directoryid resource.
	 */
	static directoryid(props: WorkSpacesDirectoryidArnProps): string {
		return `arn:${props.partition ?? "aws"}:workspaces:${props.region ?? "*"}:${props.account ?? "*"}:directory/${props.directoryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the directoryid resource.
	 */
	static isValidDirectoryidArn(arn: string): boolean {
		return DirectoryidArnRegex.test(arn);
	}

	/**
	 * Parses a directoryid ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDirectoryidArn(arn: string): WorkSpacesDirectoryidArnComponents {
		const match = DirectoryidArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid directoryid ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			directoryId: match.groups!.directoryId,
		};
	}

	/**
	 * Builds an ARN for the workspaceapplication resource.
	 */
	static workspaceapplication(
		props: WorkSpacesWorkspaceapplicationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:workspaces:${props.region ?? "*"}:${props.account ?? "*"}:workspaceapplication/${props.workSpaceApplicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workspaceapplication resource.
	 */
	static isValidWorkspaceapplicationArn(arn: string): boolean {
		return WorkspaceapplicationArnRegex.test(arn);
	}

	/**
	 * Parses a workspaceapplication ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkspaceapplicationArn(
		arn: string,
	): WorkSpacesWorkspaceapplicationArnComponents {
		const match = WorkspaceapplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workspaceapplication ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workSpaceApplicationId: match.groups!.workSpaceApplicationId,
		};
	}

	/**
	 * Builds an ARN for the workspacebundle resource.
	 */
	static workspacebundle(props: WorkSpacesWorkspacebundleArnProps): string {
		return `arn:${props.partition ?? "aws"}:workspaces:${props.region ?? "*"}:${props.account ?? "*"}:workspacebundle/${props.bundleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workspacebundle resource.
	 */
	static isValidWorkspacebundleArn(arn: string): boolean {
		return WorkspacebundleArnRegex.test(arn);
	}

	/**
	 * Parses a workspacebundle ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkspacebundleArn(
		arn: string,
	): WorkSpacesWorkspacebundleArnComponents {
		const match = WorkspacebundleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workspacebundle ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			bundleId: match.groups!.bundleId,
		};
	}

	/**
	 * Builds an ARN for the workspaceid resource.
	 */
	static workspaceid(props: WorkSpacesWorkspaceidArnProps): string {
		return `arn:${props.partition ?? "aws"}:workspaces:${props.region ?? "*"}:${props.account ?? "*"}:workspace/${props.workspaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workspaceid resource.
	 */
	static isValidWorkspaceidArn(arn: string): boolean {
		return WorkspaceidArnRegex.test(arn);
	}

	/**
	 * Parses a workspaceid ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkspaceidArn(arn: string): WorkSpacesWorkspaceidArnComponents {
		const match = WorkspaceidArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workspaceid ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceId: match.groups!.workspaceId,
		};
	}

	/**
	 * Builds an ARN for the workspaceimage resource.
	 */
	static workspaceimage(props: WorkSpacesWorkspaceimageArnProps): string {
		return `arn:${props.partition ?? "aws"}:workspaces:${props.region ?? "*"}:${props.account ?? "*"}:workspaceimage/${props.imageId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workspaceimage resource.
	 */
	static isValidWorkspaceimageArn(arn: string): boolean {
		return WorkspaceimageArnRegex.test(arn);
	}

	/**
	 * Parses a workspaceimage ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkspaceimageArn(
		arn: string,
	): WorkSpacesWorkspaceimageArnComponents {
		const match = WorkspaceimageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workspaceimage ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			imageId: match.groups!.imageId,
		};
	}

	/**
	 * Builds an ARN for the workspaceipgroup resource.
	 */
	static workspaceipgroup(props: WorkSpacesWorkspaceipgroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:workspaces:${props.region ?? "*"}:${props.account ?? "*"}:workspaceipgroup/${props.groupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workspaceipgroup resource.
	 */
	static isValidWorkspaceipgroupArn(arn: string): boolean {
		return WorkspaceipgroupArnRegex.test(arn);
	}

	/**
	 * Parses a workspaceipgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkspaceipgroupArn(
		arn: string,
	): WorkSpacesWorkspaceipgroupArnComponents {
		const match = WorkspaceipgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workspaceipgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupId: match.groups!.groupId,
		};
	}

	/**
	 * Builds an ARN for the workspacespool resource.
	 */
	static workspacespool(props: WorkSpacesWorkspacespoolArnProps): string {
		return `arn:${props.partition ?? "aws"}:workspaces:${props.region ?? "*"}:${props.account ?? "*"}:workspacespool/${props.poolId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workspacespool resource.
	 */
	static isValidWorkspacespoolArn(arn: string): boolean {
		return WorkspacespoolArnRegex.test(arn);
	}

	/**
	 * Parses a workspacespool ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkspacespoolArn(
		arn: string,
	): WorkSpacesWorkspacespoolArnComponents {
		const match = WorkspacespoolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workspacespool ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			poolId: match.groups!.poolId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for workspaces.
 */
export class WorkSpacesOperations {
	/** IAM actions required for the AcceptAccountLinkInvitation API call. */
	static readonly AcceptAccountLinkInvitation: string[] = [
		"workspaces:AcceptAccountLinkInvitation",
	];
	/** IAM actions required for the AssociateConnectionAlias API call. */
	static readonly AssociateConnectionAlias: string[] = [
		"workspaces:AssociateConnectionAlias",
	];
	/** IAM actions required for the AssociateIpGroups API call. */
	static readonly AssociateIpGroups: string[] = [
		"workspaces:AssociateIpGroups",
	];
	/** IAM actions required for the AssociateWorkspaceApplication API call. */
	static readonly AssociateWorkspaceApplication: string[] = [
		"workspaces:AssociateWorkspaceApplication",
	];
	/** IAM actions required for the AuthorizeIpRules API call. */
	static readonly AuthorizeIpRules: string[] = [
		"workspaces:AuthorizeIpRules",
		"workspaces:UpdateRulesOfIpGroup",
	];
	/** IAM actions required for the CopyWorkspaceImage API call. */
	static readonly CopyWorkspaceImage: string[] = [
		"workspaces:CopyWorkspaceImage",
		"workspaces:CreateTags",
		"workspaces:DescribeWorkspaceImages",
	];
	/** IAM actions required for the CreateAccountLinkInvitation API call. */
	static readonly CreateAccountLinkInvitation: string[] = [
		"workspaces:CreateAccountLinkInvitation",
	];
	/** IAM actions required for the CreateConnectClientAddIn API call. */
	static readonly CreateConnectClientAddIn: string[] = [
		"workspaces:CreateConnectClientAddIn",
	];
	/** IAM actions required for the CreateConnectionAlias API call. */
	static readonly CreateConnectionAlias: string[] = [
		"workspaces:CreateConnectionAlias",
		"workspaces:CreateTags",
	];
	/** IAM actions required for the CreateIpGroup API call. */
	static readonly CreateIpGroup: string[] = [
		"workspaces:CreateIpGroup",
		"workspaces:CreateTags",
	];
	/** IAM actions required for the CreateStandbyWorkspaces API call. */
	static readonly CreateStandbyWorkspaces: string[] = [
		"workspaces:CreateStandbyWorkspaces",
		"workspaces:CreateTags",
		"workspaces:DescribeWorkspaces",
	];
	/** IAM actions required for the CreateTags API call. */
	static readonly CreateTags: string[] = ["workspaces:CreateTags"];
	/** IAM actions required for the CreateUpdatedWorkspaceImage API call. */
	static readonly CreateUpdatedWorkspaceImage: string[] = [
		"workspaces:CreateTags",
		"workspaces:CreateUpdatedWorkspaceImage",
	];
	/** IAM actions required for the CreateWorkspaceBundle API call. */
	static readonly CreateWorkspaceBundle: string[] = [
		"workspaces:CreateTags",
		"workspaces:CreateWorkspaceBundle",
	];
	/** IAM actions required for the CreateWorkspaceImage API call. */
	static readonly CreateWorkspaceImage: string[] = [
		"workspaces:CreateTags",
		"workspaces:CreateWorkspaceImage",
	];
	/** IAM actions required for the CreateWorkspaces API call. */
	static readonly CreateWorkspaces: string[] = [
		"workspaces:CreateTags",
		"workspaces:CreateWorkspaces",
	];
	/** IAM actions required for the CreateWorkspacesPool API call. */
	static readonly CreateWorkspacesPool: string[] = [
		"workspaces:CreateTags",
		"workspaces:CreateWorkspacesPool",
	];
	/** IAM actions required for the DeleteAccountLinkInvitation API call. */
	static readonly DeleteAccountLinkInvitation: string[] = [
		"workspaces:DeleteAccountLinkInvitation",
	];
	/** IAM actions required for the DeleteClientBranding API call. */
	static readonly DeleteClientBranding: string[] = [
		"workspaces:DeleteClientBranding",
	];
	/** IAM actions required for the DeleteConnectClientAddIn API call. */
	static readonly DeleteConnectClientAddIn: string[] = [
		"workspaces:DeleteConnectClientAddIn",
	];
	/** IAM actions required for the DeleteConnectionAlias API call. */
	static readonly DeleteConnectionAlias: string[] = [
		"workspaces:DeleteConnectionAlias",
	];
	/** IAM actions required for the DeleteIpGroup API call. */
	static readonly DeleteIpGroup: string[] = ["workspaces:DeleteIpGroup"];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DeleteTags: string[] = ["workspaces:DeleteTags"];
	/** IAM actions required for the DeleteWorkspaceBundle API call. */
	static readonly DeleteWorkspaceBundle: string[] = [
		"workspaces:DeleteWorkspaceBundle",
	];
	/** IAM actions required for the DeleteWorkspaceImage API call. */
	static readonly DeleteWorkspaceImage: string[] = [
		"workspaces:DeleteWorkspaceImage",
	];
	/** IAM actions required for the DeployWorkspaceApplications API call. */
	static readonly DeployWorkspaceApplications: string[] = [
		"workspaces:DeployWorkspaceApplications",
	];
	/** IAM actions required for the DeregisterWorkspaceDirectory API call. */
	static readonly DeregisterWorkspaceDirectory: string[] = [
		"workspaces:DeregisterWorkspaceDirectory",
	];
	/** IAM actions required for the DescribeAccount API call. */
	static readonly DescribeAccount: string[] = ["workspaces:DescribeAccount"];
	/** IAM actions required for the DescribeAccountModifications API call. */
	static readonly DescribeAccountModifications: string[] = [
		"workspaces:DescribeAccountModifications",
	];
	/** IAM actions required for the DescribeApplicationAssociations API call. */
	static readonly DescribeApplicationAssociations: string[] = [
		"workspaces:DescribeApplicationAssociations",
	];
	/** IAM actions required for the DescribeApplications API call. */
	static readonly DescribeApplications: string[] = [
		"workspaces:DescribeApplications",
	];
	/** IAM actions required for the DescribeBundleAssociations API call. */
	static readonly DescribeBundleAssociations: string[] = [
		"workspaces:DescribeBundleAssociations",
	];
	/** IAM actions required for the DescribeClientBranding API call. */
	static readonly DescribeClientBranding: string[] = [
		"workspaces:DescribeClientBranding",
	];
	/** IAM actions required for the DescribeClientProperties API call. */
	static readonly DescribeClientProperties: string[] = [
		"workspaces:DescribeClientProperties",
	];
	/** IAM actions required for the DescribeConnectClientAddIns API call. */
	static readonly DescribeConnectClientAddIns: string[] = [
		"workspaces:DescribeConnectClientAddIns",
	];
	/** IAM actions required for the DescribeConnectionAliasPermissions API call. */
	static readonly DescribeConnectionAliasPermissions: string[] = [
		"workspaces:DescribeConnectionAliasPermissions",
	];
	/** IAM actions required for the DescribeConnectionAliases API call. */
	static readonly DescribeConnectionAliases: string[] = [
		"workspaces:DescribeConnectionAliases",
	];
	/** IAM actions required for the DescribeCustomWorkspaceImageImport API call. */
	static readonly DescribeCustomWorkspaceImageImport: string[] = [
		"workspaces:DescribeCustomWorkspaceImageImport",
	];
	/** IAM actions required for the DescribeImageAssociations API call. */
	static readonly DescribeImageAssociations: string[] = [
		"workspaces:DescribeImageAssociations",
	];
	/** IAM actions required for the DescribeIpGroups API call. */
	static readonly DescribeIpGroups: string[] = ["workspaces:DescribeIpGroups"];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DescribeTags: string[] = ["workspaces:DescribeTags"];
	/** IAM actions required for the DescribeWorkspaceAssociations API call. */
	static readonly DescribeWorkspaceAssociations: string[] = [
		"workspaces:DescribeWorkspaceAssociations",
	];
	/** IAM actions required for the DescribeWorkspaceBundles API call. */
	static readonly DescribeWorkspaceBundles: string[] = [
		"workspaces:DescribeWorkspaceBundles",
	];
	/** IAM actions required for the DescribeWorkspaceDirectories API call. */
	static readonly DescribeWorkspaceDirectories: string[] = [
		"workspaces:DescribeWorkspaceDirectories",
	];
	/** IAM actions required for the DescribeWorkspaceImagePermissions API call. */
	static readonly DescribeWorkspaceImagePermissions: string[] = [
		"workspaces:DescribeWorkspaceImagePermissions",
	];
	/** IAM actions required for the DescribeWorkspaceImages API call. */
	static readonly DescribeWorkspaceImages: string[] = [
		"workspaces:DescribeWorkspaceImages",
	];
	/** IAM actions required for the DescribeWorkspaceSnapshots API call. */
	static readonly DescribeWorkspaceSnapshots: string[] = [
		"workspaces:DescribeWorkspaceSnapshots",
	];
	/** IAM actions required for the DescribeWorkspaces API call. */
	static readonly DescribeWorkspaces: string[] = [
		"workspaces:DescribeWorkspaces",
	];
	/** IAM actions required for the DescribeWorkspacesConnectionStatus API call. */
	static readonly DescribeWorkspacesConnectionStatus: string[] = [
		"workspaces:DescribeWorkspacesConnectionStatus",
	];
	/** IAM actions required for the DescribeWorkspacesPoolSessions API call. */
	static readonly DescribeWorkspacesPoolSessions: string[] = [
		"workspaces:DescribeWorkspacesPoolSessions",
	];
	/** IAM actions required for the DescribeWorkspacesPools API call. */
	static readonly DescribeWorkspacesPools: string[] = [
		"workspaces:DescribeWorkspacesPools",
	];
	/** IAM actions required for the DisassociateConnectionAlias API call. */
	static readonly DisassociateConnectionAlias: string[] = [
		"workspaces:DisassociateConnectionAlias",
	];
	/** IAM actions required for the DisassociateIpGroups API call. */
	static readonly DisassociateIpGroups: string[] = [
		"workspaces:DisassociateIpGroups",
	];
	/** IAM actions required for the DisassociateWorkspaceApplication API call. */
	static readonly DisassociateWorkspaceApplication: string[] = [
		"workspaces:DisassociateWorkspaceApplication",
	];
	/** IAM actions required for the GetAccountLink API call. */
	static readonly opGetAccountLink: string[] = ["workspaces:GetAccountLink"];
	/** IAM actions required for the ImportClientBranding API call. */
	static readonly ImportClientBranding: string[] = [
		"workspaces:ImportClientBranding",
	];
	/** IAM actions required for the ImportCustomWorkspaceImage API call. */
	static readonly ImportCustomWorkspaceImage: string[] = [
		"workspaces:CreateTags",
		"workspaces:ImportCustomWorkspaceImage",
	];
	/** IAM actions required for the ImportWorkspaceImage API call. */
	static readonly ImportWorkspaceImage: string[] = [
		"workspaces:CreateTags",
		"workspaces:ImportWorkspaceImage",
	];
	/** IAM actions required for the ListAccountLinks API call. */
	static readonly ListAccountLinks: string[] = ["workspaces:ListAccountLinks"];
	/** IAM actions required for the ListAvailableManagementCidrRanges API call. */
	static readonly ListAvailableManagementCidrRanges: string[] = [
		"workspaces:ListAvailableManagementCidrRanges",
	];
	/** IAM actions required for the MigrateWorkspace API call. */
	static readonly MigrateWorkspace: string[] = ["workspaces:MigrateWorkspace"];
	/** IAM actions required for the ModifyAccount API call. */
	static readonly ModifyAccount: string[] = ["workspaces:ModifyAccount"];
	/** IAM actions required for the ModifyCertificateBasedAuthProperties API call. */
	static readonly ModifyCertificateBasedAuthProperties: string[] = [
		"workspaces:ModifyCertificateBasedAuthProperties",
	];
	/** IAM actions required for the ModifyClientProperties API call. */
	static readonly ModifyClientProperties: string[] = [
		"workspaces:ModifyClientProperties",
	];
	/** IAM actions required for the ModifyEndpointEncryptionMode API call. */
	static readonly ModifyEndpointEncryptionMode: string[] = [
		"workspaces:ModifyEndpointEncryptionMode",
	];
	/** IAM actions required for the ModifySamlProperties API call. */
	static readonly ModifySamlProperties: string[] = [
		"workspaces:ModifySamlProperties",
	];
	/** IAM actions required for the ModifySelfservicePermissions API call. */
	static readonly ModifySelfservicePermissions: string[] = [
		"workspaces:ModifySelfservicePermissions",
	];
	/** IAM actions required for the ModifyStreamingProperties API call. */
	static readonly ModifyStreamingProperties: string[] = [
		"workspaces:ModifyStreamingProperties",
	];
	/** IAM actions required for the ModifyWorkspaceAccessProperties API call. */
	static readonly ModifyWorkspaceAccessProperties: string[] = [
		"workspaces:ModifyWorkspaceAccessProperties",
	];
	/** IAM actions required for the ModifyWorkspaceCreationProperties API call. */
	static readonly ModifyWorkspaceCreationProperties: string[] = [
		"workspaces:ModifyWorkspaceCreationProperties",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyWorkspaceProperties API call. */
	static readonly ModifyWorkspaceProperties: string[] = [
		"workspaces:ModifyWorkspaceProperties",
	];
	/** IAM actions required for the ModifyWorkspaceState API call. */
	static readonly ModifyWorkspaceState: string[] = [
		"workspaces:ModifyWorkspaceState",
	];
	/** IAM actions required for the RebootWorkspaces API call. */
	static readonly RebootWorkspaces: string[] = ["workspaces:RebootWorkspaces"];
	/** IAM actions required for the RebuildWorkspaces API call. */
	static readonly RebuildWorkspaces: string[] = [
		"workspaces:RebuildWorkspaces",
	];
	/** IAM actions required for the RegisterWorkspaceDirectory API call. */
	static readonly RegisterWorkspaceDirectory: string[] = [
		"workspaces:CreateTags",
		"workspaces:RegisterWorkspaceDirectory",
	];
	/** IAM actions required for the RejectAccountLinkInvitation API call. */
	static readonly RejectAccountLinkInvitation: string[] = [
		"workspaces:RejectAccountLinkInvitation",
	];
	/** IAM actions required for the RestoreWorkspace API call. */
	static readonly RestoreWorkspace: string[] = ["workspaces:RestoreWorkspace"];
	/** IAM actions required for the RevokeIpRules API call. */
	static readonly RevokeIpRules: string[] = [
		"workspaces:RevokeIpRules",
		"workspaces:UpdateRulesOfIpGroup",
	];
	/** IAM actions required for the StartWorkspaces API call. */
	static readonly StartWorkspaces: string[] = ["workspaces:StartWorkspaces"];
	/** IAM actions required for the StartWorkspacesPool API call. */
	static readonly StartWorkspacesPool: string[] = [
		"workspaces:StartWorkspacesPool",
	];
	/** IAM actions required for the StopWorkspaces API call. */
	static readonly StopWorkspaces: string[] = ["workspaces:StopWorkspaces"];
	/** IAM actions required for the StopWorkspacesPool API call. */
	static readonly StopWorkspacesPool: string[] = [
		"workspaces:StopWorkspacesPool",
	];
	/** IAM actions required for the TerminateWorkspaces API call. */
	static readonly TerminateWorkspaces: string[] = [
		"workspaces:TerminateWorkspaces",
	];
	/** IAM actions required for the TerminateWorkspacesPool API call. */
	static readonly TerminateWorkspacesPool: string[] = [
		"workspaces:TerminateWorkspacesPool",
	];
	/** IAM actions required for the TerminateWorkspacesPoolSession API call. */
	static readonly TerminateWorkspacesPoolSession: string[] = [
		"workspaces:TerminateWorkspacesPoolSession",
	];
	/** IAM actions required for the UpdateConnectClientAddIn API call. */
	static readonly UpdateConnectClientAddIn: string[] = [
		"workspaces:UpdateConnectClientAddIn",
	];
	/** IAM actions required for the UpdateConnectionAliasPermission API call. */
	static readonly UpdateConnectionAliasPermission: string[] = [
		"workspaces:UpdateConnectionAliasPermission",
	];
	/** IAM actions required for the UpdateRulesOfIpGroup API call. */
	static readonly UpdateRulesOfIpGroup: string[] = [
		"workspaces:AuthorizeIpRules",
		"workspaces:RevokeIpRules",
		"workspaces:UpdateRulesOfIpGroup",
	];
	/** IAM actions required for the UpdateWorkspaceBundle API call. */
	static readonly UpdateWorkspaceBundle: string[] = [
		"workspaces:UpdateWorkspaceBundle",
	];
	/** IAM actions required for the UpdateWorkspaceImagePermission API call. */
	static readonly UpdateWorkspaceImagePermission: string[] = [
		"workspaces:UpdateWorkspaceImagePermission",
	];
	/** IAM actions required for the UpdateWorkspacesPool API call. */
	static readonly UpdateWorkspacesPool: string[] = [
		"workspaces:UpdateWorkspacesPool",
	];
}

/**
 * Condition key constants and builders for workspaces.
 */
export class WorkSpacesConditions {
	/** Condition keys applicable to the AssociateWorkspaceApplication action. */
	static readonly AssociateWorkspaceApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateConnectionAlias action. */
	static readonly CreateConnectionAliasConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIpGroup action. */
	static readonly CreateIpGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTags action. */
	static readonly CreateTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DeleteTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeployWorkspaceApplications action. */
	static readonly DeployWorkspaceApplicationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeApplicationAssociations action. */
	static readonly DescribeApplicationAssociationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeBundleAssociations action. */
	static readonly DescribeBundleAssociationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeImageAssociations action. */
	static readonly DescribeImageAssociationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeWorkspaceAssociations action. */
	static readonly DescribeWorkspaceAssociationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateWorkspaceApplication action. */
	static readonly DisassociateWorkspaceApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ImportCustomWorkspaceImage action. */
	static readonly ImportCustomWorkspaceImageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportWorkspaceImage action. */
	static readonly ImportWorkspaceImageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterWorkspaceDirectory action. */
	static readonly RegisterWorkspaceDirectoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Stream action. */
	static readonly StreamConditionKeys: string[] = ["workspaces:userId"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: workspaces:userId (String) */
	static readonly USER_ID = "workspaces:userId";

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
	 * Generates a condition block for `workspaces:userId`.
	 */
	static userId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "workspaces:userId": value } };
	}
}
