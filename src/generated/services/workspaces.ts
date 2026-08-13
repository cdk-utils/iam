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
	static readonly ACCEPT_ACCOUNT_LINK_INVITATION =
		"workspaces:AcceptAccountLinkInvitation";
	/** [Write] workspaces:AssociateConnectionAlias */
	static readonly ASSOCIATE_CONNECTION_ALIAS =
		"workspaces:AssociateConnectionAlias";
	/** [Write] workspaces:AssociateIpGroups */
	static readonly ASSOCIATE_IP_GROUPS = "workspaces:AssociateIpGroups";
	/** [Write] workspaces:AssociateWorkspaceApplication */
	static readonly ASSOCIATE_WORKSPACE_APPLICATION =
		"workspaces:AssociateWorkspaceApplication";
	/** [Write] workspaces:AuthorizeIpRules */
	static readonly AUTHORIZE_IP_RULES = "workspaces:AuthorizeIpRules";
	/** [Write] workspaces:CopyWorkspaceImage */
	static readonly COPY_WORKSPACE_IMAGE = "workspaces:CopyWorkspaceImage";
	/** [Write] workspaces:CreateAccountLinkInvitation */
	static readonly CREATE_ACCOUNT_LINK_INVITATION =
		"workspaces:CreateAccountLinkInvitation";
	/** [Write] workspaces:CreateConnectClientAddIn */
	static readonly CREATE_CONNECT_CLIENT_ADD_IN =
		"workspaces:CreateConnectClientAddIn";
	/** [Write] workspaces:CreateConnectionAlias */
	static readonly CREATE_CONNECTION_ALIAS = "workspaces:CreateConnectionAlias";
	/** [Write] workspaces:CreateIpGroup */
	static readonly CREATE_IP_GROUP = "workspaces:CreateIpGroup";
	/** [Write] workspaces:CreateRootClientCertificate */
	static readonly CREATE_ROOT_CLIENT_CERTIFICATE =
		"workspaces:CreateRootClientCertificate";
	/** [Write] workspaces:CreateStandbyWorkspaces */
	static readonly CREATE_STANDBY_WORKSPACES =
		"workspaces:CreateStandbyWorkspaces";
	/** [Tagging] workspaces:CreateTags */
	static readonly CREATE_TAGS = "workspaces:CreateTags";
	/** [Write] workspaces:CreateUpdatedWorkspaceImage */
	static readonly CREATE_UPDATED_WORKSPACE_IMAGE =
		"workspaces:CreateUpdatedWorkspaceImage";
	/** [Write] workspaces:CreateWorkspaceBundle */
	static readonly CREATE_WORKSPACE_BUNDLE = "workspaces:CreateWorkspaceBundle";
	/** [Write] workspaces:CreateWorkspaceImage */
	static readonly CREATE_WORKSPACE_IMAGE = "workspaces:CreateWorkspaceImage";
	/** [Write] workspaces:CreateWorkspaces */
	static readonly CREATE_WORKSPACES = "workspaces:CreateWorkspaces";
	/** [Write] workspaces:CreateWorkspacesPool */
	static readonly CREATE_WORKSPACES_POOL = "workspaces:CreateWorkspacesPool";
	/** [Write] workspaces:DeleteAccountLinkInvitation */
	static readonly DELETE_ACCOUNT_LINK_INVITATION =
		"workspaces:DeleteAccountLinkInvitation";
	/** [Write] workspaces:DeleteClientBranding */
	static readonly DELETE_CLIENT_BRANDING = "workspaces:DeleteClientBranding";
	/** [Write] workspaces:DeleteConnectClientAddIn */
	static readonly DELETE_CONNECT_CLIENT_ADD_IN =
		"workspaces:DeleteConnectClientAddIn";
	/** [Write] workspaces:DeleteConnectionAlias */
	static readonly DELETE_CONNECTION_ALIAS = "workspaces:DeleteConnectionAlias";
	/** [Write] workspaces:DeleteIpGroup */
	static readonly DELETE_IP_GROUP = "workspaces:DeleteIpGroup";
	/** [Write] workspaces:DeleteRootClientCertificate */
	static readonly DELETE_ROOT_CLIENT_CERTIFICATE =
		"workspaces:DeleteRootClientCertificate";
	/** [Tagging] workspaces:DeleteTags */
	static readonly DELETE_TAGS = "workspaces:DeleteTags";
	/** [Write] workspaces:DeleteWorkspaceBundle */
	static readonly DELETE_WORKSPACE_BUNDLE = "workspaces:DeleteWorkspaceBundle";
	/** [Write] workspaces:DeleteWorkspaceImage */
	static readonly DELETE_WORKSPACE_IMAGE = "workspaces:DeleteWorkspaceImage";
	/** [Write] workspaces:DeployWorkspaceApplications */
	static readonly DEPLOY_WORKSPACE_APPLICATIONS =
		"workspaces:DeployWorkspaceApplications";
	/** [Write] workspaces:DeregisterWorkspaceDirectory */
	static readonly DEREGISTER_WORKSPACE_DIRECTORY =
		"workspaces:DeregisterWorkspaceDirectory";
	/** [Read] workspaces:DescribeAccount */
	static readonly DESCRIBE_ACCOUNT = "workspaces:DescribeAccount";
	/** [Read] workspaces:DescribeAccountModifications */
	static readonly DESCRIBE_ACCOUNT_MODIFICATIONS =
		"workspaces:DescribeAccountModifications";
	/** [List] workspaces:DescribeApplicationAssociations */
	static readonly DESCRIBE_APPLICATION_ASSOCIATIONS =
		"workspaces:DescribeApplicationAssociations";
	/** [List] workspaces:DescribeApplications */
	static readonly DESCRIBE_APPLICATIONS = "workspaces:DescribeApplications";
	/** [List] workspaces:DescribeBundleAssociations */
	static readonly DESCRIBE_BUNDLE_ASSOCIATIONS =
		"workspaces:DescribeBundleAssociations";
	/** [Read] workspaces:DescribeClientBranding */
	static readonly DESCRIBE_CLIENT_BRANDING =
		"workspaces:DescribeClientBranding";
	/** [List] workspaces:DescribeClientProperties */
	static readonly DESCRIBE_CLIENT_PROPERTIES =
		"workspaces:DescribeClientProperties";
	/** [List] workspaces:DescribeConnectClientAddIns */
	static readonly DESCRIBE_CONNECT_CLIENT_ADD_INS =
		"workspaces:DescribeConnectClientAddIns";
	/** [Read] workspaces:DescribeConnectionAliasPermissions */
	static readonly DESCRIBE_CONNECTION_ALIAS_PERMISSIONS =
		"workspaces:DescribeConnectionAliasPermissions";
	/** [Read] workspaces:DescribeConnectionAliases */
	static readonly DESCRIBE_CONNECTION_ALIASES =
		"workspaces:DescribeConnectionAliases";
	/** [Read] workspaces:DescribeConsent */
	static readonly DESCRIBE_CONSENT = "workspaces:DescribeConsent";
	/** [Read] workspaces:DescribeCustomWorkspaceImageImport */
	static readonly DESCRIBE_CUSTOM_WORKSPACE_IMAGE_IMPORT =
		"workspaces:DescribeCustomWorkspaceImageImport";
	/** [List] workspaces:DescribeImageAssociations */
	static readonly DESCRIBE_IMAGE_ASSOCIATIONS =
		"workspaces:DescribeImageAssociations";
	/** [Read] workspaces:DescribeIpGroups */
	static readonly DESCRIBE_IP_GROUPS = "workspaces:DescribeIpGroups";
	/** [Read] workspaces:DescribeTags */
	static readonly DESCRIBE_TAGS = "workspaces:DescribeTags";
	/** [List] workspaces:DescribeWorkspaceAssociations */
	static readonly DESCRIBE_WORKSPACE_ASSOCIATIONS =
		"workspaces:DescribeWorkspaceAssociations";
	/** [List] workspaces:DescribeWorkspaceBundles */
	static readonly DESCRIBE_WORKSPACE_BUNDLES =
		"workspaces:DescribeWorkspaceBundles";
	/** [Read] workspaces:DescribeWorkspaceDirectories */
	static readonly DESCRIBE_WORKSPACE_DIRECTORIES =
		"workspaces:DescribeWorkspaceDirectories";
	/** [Read] workspaces:DescribeWorkspaceImagePermissions */
	static readonly DESCRIBE_WORKSPACE_IMAGE_PERMISSIONS =
		"workspaces:DescribeWorkspaceImagePermissions";
	/** [List] workspaces:DescribeWorkspaceImages */
	static readonly DESCRIBE_WORKSPACE_IMAGES =
		"workspaces:DescribeWorkspaceImages";
	/** [List] workspaces:DescribeWorkspaceSnapshots */
	static readonly DESCRIBE_WORKSPACE_SNAPSHOTS =
		"workspaces:DescribeWorkspaceSnapshots";
	/** [List] workspaces:DescribeWorkspaces */
	static readonly DESCRIBE_WORKSPACES = "workspaces:DescribeWorkspaces";
	/** [Read] workspaces:DescribeWorkspacesConnectionStatus */
	static readonly DESCRIBE_WORKSPACES_CONNECTION_STATUS =
		"workspaces:DescribeWorkspacesConnectionStatus";
	/** [List] workspaces:DescribeWorkspacesPoolSessions */
	static readonly DESCRIBE_WORKSPACES_POOL_SESSIONS =
		"workspaces:DescribeWorkspacesPoolSessions";
	/** [List] workspaces:DescribeWorkspacesPools */
	static readonly DESCRIBE_WORKSPACES_POOLS =
		"workspaces:DescribeWorkspacesPools";
	/** [List] workspaces:DirectoryAccessManagement */
	static readonly DIRECTORY_ACCESS_MANAGEMENT =
		"workspaces:DirectoryAccessManagement";
	/** [Write] workspaces:DisassociateConnectionAlias */
	static readonly DISASSOCIATE_CONNECTION_ALIAS =
		"workspaces:DisassociateConnectionAlias";
	/** [Write] workspaces:DisassociateIpGroups */
	static readonly DISASSOCIATE_IP_GROUPS = "workspaces:DisassociateIpGroups";
	/** [Write] workspaces:DisassociateWorkspaceApplication */
	static readonly DISASSOCIATE_WORKSPACE_APPLICATION =
		"workspaces:DisassociateWorkspaceApplication";
	/** [Read] workspaces:GetAccountLink */
	static readonly GET_ACCOUNT_LINK = "workspaces:GetAccountLink";
	/** [Read] workspaces:GetTroubleshootingRecommendation */
	static readonly GET_TROUBLESHOOTING_RECOMMENDATION =
		"workspaces:GetTroubleshootingRecommendation";
	/** [Write] workspaces:ImportClientBranding */
	static readonly IMPORT_CLIENT_BRANDING = "workspaces:ImportClientBranding";
	/** [Write] workspaces:ImportCustomWorkspaceImage */
	static readonly IMPORT_CUSTOM_WORKSPACE_IMAGE =
		"workspaces:ImportCustomWorkspaceImage";
	/** [Write] workspaces:ImportWorkspaceImage */
	static readonly IMPORT_WORKSPACE_IMAGE = "workspaces:ImportWorkspaceImage";
	/** [Read] workspaces:InvokeTroubleshootingInvestigation */
	static readonly INVOKE_TROUBLESHOOTING_INVESTIGATION =
		"workspaces:InvokeTroubleshootingInvestigation";
	/** [List] workspaces:ListAccountLinks */
	static readonly LIST_ACCOUNT_LINKS = "workspaces:ListAccountLinks";
	/** [List] workspaces:ListAvailableManagementCidrRanges */
	static readonly LIST_AVAILABLE_MANAGEMENT_CIDR_RANGES =
		"workspaces:ListAvailableManagementCidrRanges";
	/** [Read] workspaces:ListTroubleshootingRecommendations */
	static readonly LIST_TROUBLESHOOTING_RECOMMENDATIONS =
		"workspaces:ListTroubleshootingRecommendations";
	/** [Write] workspaces:MigrateWorkspace */
	static readonly MIGRATE_WORKSPACE = "workspaces:MigrateWorkspace";
	/** [Write] workspaces:ModifyAccount */
	static readonly MODIFY_ACCOUNT = "workspaces:ModifyAccount";
	/** [Write] workspaces:ModifyCertificateBasedAuthProperties */
	static readonly MODIFY_CERTIFICATE_BASED_AUTH_PROPERTIES =
		"workspaces:ModifyCertificateBasedAuthProperties";
	/** [Write] workspaces:ModifyClientProperties */
	static readonly MODIFY_CLIENT_PROPERTIES =
		"workspaces:ModifyClientProperties";
	/** [Write] workspaces:ModifyEndpointEncryptionMode */
	static readonly MODIFY_ENDPOINT_ENCRYPTION_MODE =
		"workspaces:ModifyEndpointEncryptionMode";
	/** [Write] workspaces:ModifySamlProperties */
	static readonly MODIFY_SAML_PROPERTIES = "workspaces:ModifySamlProperties";
	/** [PermissionManagement] workspaces:ModifySelfservicePermissions */
	static readonly MODIFY_SELFSERVICE_PERMISSIONS =
		"workspaces:ModifySelfservicePermissions";
	/** [Write] workspaces:ModifyStreamingProperties */
	static readonly MODIFY_STREAMING_PROPERTIES =
		"workspaces:ModifyStreamingProperties";
	/** [Write] workspaces:ModifyWorkspaceAccessProperties */
	static readonly MODIFY_WORKSPACE_ACCESS_PROPERTIES =
		"workspaces:ModifyWorkspaceAccessProperties";
	/** [Write] workspaces:ModifyWorkspaceCreationProperties */
	static readonly MODIFY_WORKSPACE_CREATION_PROPERTIES =
		"workspaces:ModifyWorkspaceCreationProperties";
	/** [Write] workspaces:ModifyWorkspaceProperties */
	static readonly MODIFY_WORKSPACE_PROPERTIES =
		"workspaces:ModifyWorkspaceProperties";
	/** [Write] workspaces:ModifyWorkspaceState */
	static readonly MODIFY_WORKSPACE_STATE = "workspaces:ModifyWorkspaceState";
	/** [Write] workspaces:RebootWorkspaces */
	static readonly REBOOT_WORKSPACES = "workspaces:RebootWorkspaces";
	/** [Write] workspaces:RebuildWorkspaces */
	static readonly REBUILD_WORKSPACES = "workspaces:RebuildWorkspaces";
	/** [Write] workspaces:RegisterWorkspaceDirectory */
	static readonly REGISTER_WORKSPACE_DIRECTORY =
		"workspaces:RegisterWorkspaceDirectory";
	/** [Write] workspaces:RejectAccountLinkInvitation */
	static readonly REJECT_ACCOUNT_LINK_INVITATION =
		"workspaces:RejectAccountLinkInvitation";
	/** [Write] workspaces:RestoreWorkspace */
	static readonly RESTORE_WORKSPACE = "workspaces:RestoreWorkspace";
	/** [Write] workspaces:RevokeIpRules */
	static readonly REVOKE_IP_RULES = "workspaces:RevokeIpRules";
	/** [Write] workspaces:StartWorkspaces */
	static readonly START_WORKSPACES = "workspaces:StartWorkspaces";
	/** [Write] workspaces:StartWorkspacesPool */
	static readonly START_WORKSPACES_POOL = "workspaces:StartWorkspacesPool";
	/** [Write] workspaces:StopWorkspaces */
	static readonly STOP_WORKSPACES = "workspaces:StopWorkspaces";
	/** [Write] workspaces:StopWorkspacesPool */
	static readonly STOP_WORKSPACES_POOL = "workspaces:StopWorkspacesPool";
	/** [Write] workspaces:Stream */
	static readonly STREAM = "workspaces:Stream";
	/** [Write] workspaces:TerminateWorkspaces */
	static readonly TERMINATE_WORKSPACES = "workspaces:TerminateWorkspaces";
	/** [Write] workspaces:TerminateWorkspacesPool */
	static readonly TERMINATE_WORKSPACES_POOL =
		"workspaces:TerminateWorkspacesPool";
	/** [Write] workspaces:TerminateWorkspacesPoolSession */
	static readonly TERMINATE_WORKSPACES_POOL_SESSION =
		"workspaces:TerminateWorkspacesPoolSession";
	/** [Write] workspaces:UpdateConnectClientAddIn */
	static readonly UPDATE_CONNECT_CLIENT_ADD_IN =
		"workspaces:UpdateConnectClientAddIn";
	/** [PermissionManagement] workspaces:UpdateConnectionAliasPermission */
	static readonly UPDATE_CONNECTION_ALIAS_PERMISSION =
		"workspaces:UpdateConnectionAliasPermission";
	/** [Write] workspaces:UpdateConsent */
	static readonly UPDATE_CONSENT = "workspaces:UpdateConsent";
	/** [Write] workspaces:UpdateRootClientCertificate */
	static readonly UPDATE_ROOT_CLIENT_CERTIFICATE =
		"workspaces:UpdateRootClientCertificate";
	/** [Write] workspaces:UpdateRulesOfIpGroup */
	static readonly UPDATE_RULES_OF_IP_GROUP = "workspaces:UpdateRulesOfIpGroup";
	/** [Write] workspaces:UpdateWorkspaceBundle */
	static readonly UPDATE_WORKSPACE_BUNDLE = "workspaces:UpdateWorkspaceBundle";
	/** [PermissionManagement] workspaces:UpdateWorkspaceImagePermission */
	static readonly UPDATE_WORKSPACE_IMAGE_PERMISSION =
		"workspaces:UpdateWorkspaceImagePermission";
	/** [Write] workspaces:UpdateWorkspacesPool */
	static readonly UPDATE_WORKSPACES_POOL = "workspaces:UpdateWorkspacesPool";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		WorkSpacesActions.DESCRIBE_ACCOUNT,
		WorkSpacesActions.DESCRIBE_ACCOUNT_MODIFICATIONS,
		WorkSpacesActions.DESCRIBE_CLIENT_BRANDING,
		WorkSpacesActions.DESCRIBE_CONNECTION_ALIAS_PERMISSIONS,
		WorkSpacesActions.DESCRIBE_CONNECTION_ALIASES,
		WorkSpacesActions.DESCRIBE_CONSENT,
		WorkSpacesActions.DESCRIBE_CUSTOM_WORKSPACE_IMAGE_IMPORT,
		WorkSpacesActions.DESCRIBE_IP_GROUPS,
		WorkSpacesActions.DESCRIBE_TAGS,
		WorkSpacesActions.DESCRIBE_WORKSPACE_DIRECTORIES,
		WorkSpacesActions.DESCRIBE_WORKSPACE_IMAGE_PERMISSIONS,
		WorkSpacesActions.DESCRIBE_WORKSPACES_CONNECTION_STATUS,
		WorkSpacesActions.GET_ACCOUNT_LINK,
		WorkSpacesActions.GET_TROUBLESHOOTING_RECOMMENDATION,
		WorkSpacesActions.INVOKE_TROUBLESHOOTING_INVESTIGATION,
		WorkSpacesActions.LIST_TROUBLESHOOTING_RECOMMENDATIONS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		WorkSpacesActions.ACCEPT_ACCOUNT_LINK_INVITATION,
		WorkSpacesActions.ASSOCIATE_CONNECTION_ALIAS,
		WorkSpacesActions.ASSOCIATE_IP_GROUPS,
		WorkSpacesActions.ASSOCIATE_WORKSPACE_APPLICATION,
		WorkSpacesActions.AUTHORIZE_IP_RULES,
		WorkSpacesActions.COPY_WORKSPACE_IMAGE,
		WorkSpacesActions.CREATE_ACCOUNT_LINK_INVITATION,
		WorkSpacesActions.CREATE_CONNECT_CLIENT_ADD_IN,
		WorkSpacesActions.CREATE_CONNECTION_ALIAS,
		WorkSpacesActions.CREATE_IP_GROUP,
		WorkSpacesActions.CREATE_ROOT_CLIENT_CERTIFICATE,
		WorkSpacesActions.CREATE_STANDBY_WORKSPACES,
		WorkSpacesActions.CREATE_UPDATED_WORKSPACE_IMAGE,
		WorkSpacesActions.CREATE_WORKSPACE_BUNDLE,
		WorkSpacesActions.CREATE_WORKSPACE_IMAGE,
		WorkSpacesActions.CREATE_WORKSPACES,
		WorkSpacesActions.CREATE_WORKSPACES_POOL,
		WorkSpacesActions.DELETE_ACCOUNT_LINK_INVITATION,
		WorkSpacesActions.DELETE_CLIENT_BRANDING,
		WorkSpacesActions.DELETE_CONNECT_CLIENT_ADD_IN,
		WorkSpacesActions.DELETE_CONNECTION_ALIAS,
		WorkSpacesActions.DELETE_IP_GROUP,
		WorkSpacesActions.DELETE_ROOT_CLIENT_CERTIFICATE,
		WorkSpacesActions.DELETE_WORKSPACE_BUNDLE,
		WorkSpacesActions.DELETE_WORKSPACE_IMAGE,
		WorkSpacesActions.DEPLOY_WORKSPACE_APPLICATIONS,
		WorkSpacesActions.DEREGISTER_WORKSPACE_DIRECTORY,
		WorkSpacesActions.DISASSOCIATE_CONNECTION_ALIAS,
		WorkSpacesActions.DISASSOCIATE_IP_GROUPS,
		WorkSpacesActions.DISASSOCIATE_WORKSPACE_APPLICATION,
		WorkSpacesActions.IMPORT_CLIENT_BRANDING,
		WorkSpacesActions.IMPORT_CUSTOM_WORKSPACE_IMAGE,
		WorkSpacesActions.IMPORT_WORKSPACE_IMAGE,
		WorkSpacesActions.MIGRATE_WORKSPACE,
		WorkSpacesActions.MODIFY_ACCOUNT,
		WorkSpacesActions.MODIFY_CERTIFICATE_BASED_AUTH_PROPERTIES,
		WorkSpacesActions.MODIFY_CLIENT_PROPERTIES,
		WorkSpacesActions.MODIFY_ENDPOINT_ENCRYPTION_MODE,
		WorkSpacesActions.MODIFY_SAML_PROPERTIES,
		WorkSpacesActions.MODIFY_STREAMING_PROPERTIES,
		WorkSpacesActions.MODIFY_WORKSPACE_ACCESS_PROPERTIES,
		WorkSpacesActions.MODIFY_WORKSPACE_CREATION_PROPERTIES,
		WorkSpacesActions.MODIFY_WORKSPACE_PROPERTIES,
		WorkSpacesActions.MODIFY_WORKSPACE_STATE,
		WorkSpacesActions.REBOOT_WORKSPACES,
		WorkSpacesActions.REBUILD_WORKSPACES,
		WorkSpacesActions.REGISTER_WORKSPACE_DIRECTORY,
		WorkSpacesActions.REJECT_ACCOUNT_LINK_INVITATION,
		WorkSpacesActions.RESTORE_WORKSPACE,
		WorkSpacesActions.REVOKE_IP_RULES,
		WorkSpacesActions.START_WORKSPACES,
		WorkSpacesActions.START_WORKSPACES_POOL,
		WorkSpacesActions.STOP_WORKSPACES,
		WorkSpacesActions.STOP_WORKSPACES_POOL,
		WorkSpacesActions.STREAM,
		WorkSpacesActions.TERMINATE_WORKSPACES,
		WorkSpacesActions.TERMINATE_WORKSPACES_POOL,
		WorkSpacesActions.TERMINATE_WORKSPACES_POOL_SESSION,
		WorkSpacesActions.UPDATE_CONNECT_CLIENT_ADD_IN,
		WorkSpacesActions.UPDATE_CONSENT,
		WorkSpacesActions.UPDATE_ROOT_CLIENT_CERTIFICATE,
		WorkSpacesActions.UPDATE_RULES_OF_IP_GROUP,
		WorkSpacesActions.UPDATE_WORKSPACE_BUNDLE,
		WorkSpacesActions.UPDATE_WORKSPACES_POOL,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		WorkSpacesActions.DESCRIBE_APPLICATION_ASSOCIATIONS,
		WorkSpacesActions.DESCRIBE_APPLICATIONS,
		WorkSpacesActions.DESCRIBE_BUNDLE_ASSOCIATIONS,
		WorkSpacesActions.DESCRIBE_CLIENT_PROPERTIES,
		WorkSpacesActions.DESCRIBE_CONNECT_CLIENT_ADD_INS,
		WorkSpacesActions.DESCRIBE_IMAGE_ASSOCIATIONS,
		WorkSpacesActions.DESCRIBE_WORKSPACE_ASSOCIATIONS,
		WorkSpacesActions.DESCRIBE_WORKSPACE_BUNDLES,
		WorkSpacesActions.DESCRIBE_WORKSPACE_IMAGES,
		WorkSpacesActions.DESCRIBE_WORKSPACE_SNAPSHOTS,
		WorkSpacesActions.DESCRIBE_WORKSPACES,
		WorkSpacesActions.DESCRIBE_WORKSPACES_POOL_SESSIONS,
		WorkSpacesActions.DESCRIBE_WORKSPACES_POOLS,
		WorkSpacesActions.DIRECTORY_ACCESS_MANAGEMENT,
		WorkSpacesActions.LIST_ACCOUNT_LINKS,
		WorkSpacesActions.LIST_AVAILABLE_MANAGEMENT_CIDR_RANGES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		WorkSpacesActions.MODIFY_SELFSERVICE_PERMISSIONS,
		WorkSpacesActions.UPDATE_CONNECTION_ALIAS_PERMISSION,
		WorkSpacesActions.UPDATE_WORKSPACE_IMAGE_PERMISSION,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		WorkSpacesActions.CREATE_TAGS,
		WorkSpacesActions.DELETE_TAGS,
	];
}

const CertificateidArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspacecertificate/(?<certificateId>[^:/?]+)$",
);
const ConnectionaliasArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):connectionalias/(?<connectionAliasId>[^:/?]+)$",
);
const DirectoryidArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):directory/(?<directoryId>[^:/?]+)$",
);
const WorkspaceapplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspaceapplication/(?<workSpaceApplicationId>[^:/?]+)$",
);
const WorkspacebundleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspacebundle/(?<bundleId>[^:/?]+)$",
);
const WorkspaceidArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspace/(?<workspaceId>[^:/?]+)$",
);
const WorkspaceimageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspaceimage/(?<imageId>[^:/?]+)$",
);
const WorkspaceipgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspaceipgroup/(?<groupId>[^:/?]+)$",
);
const WorkspacespoolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):workspaces:(?<region>[^:]*):(?<account>[^:]*):workspacespool/(?<poolId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for workspaces resources.
 */
export class WorkSpacesResources {
	/**
	 * Builds an ARN for the certificateid resource.
	 */
	static certificateid(props: {
		/** The CertificateId component of the ARN. */
		readonly certificateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCertificateidArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		certificateId: string;
	} {
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
	static connectionalias(props: {
		/** The ConnectionAliasId component of the ARN. */
		readonly connectionAliasId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectionaliasArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectionAliasId: string;
	} {
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
	static directoryid(props: {
		/** The DirectoryId component of the ARN. */
		readonly directoryId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDirectoryidArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		directoryId: string;
	} {
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
	static workspaceapplication(props: {
		/** The WorkSpaceApplicationId component of the ARN. */
		readonly workSpaceApplicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkspaceapplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workSpaceApplicationId: string;
	} {
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
	static workspacebundle(props: {
		/** The BundleId component of the ARN. */
		readonly bundleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkspacebundleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		bundleId: string;
	} {
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
	static workspaceid(props: {
		/** The WorkspaceId component of the ARN. */
		readonly workspaceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkspaceidArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceId: string;
	} {
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
	static workspaceimage(props: {
		/** The ImageId component of the ARN. */
		readonly imageId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkspaceimageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		imageId: string;
	} {
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
	static workspaceipgroup(props: {
		/** The GroupId component of the ARN. */
		readonly groupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkspaceipgroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupId: string;
	} {
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
	static workspacespool(props: {
		/** The PoolId component of the ARN. */
		readonly poolId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkspacespoolArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		poolId: string;
	} {
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
	static readonly ACCEPT_ACCOUNT_LINK_INVITATION: string[] = [
		"workspaces:AcceptAccountLinkInvitation",
	];
	/** IAM actions required for the AssociateConnectionAlias API call. */
	static readonly ASSOCIATE_CONNECTION_ALIAS: string[] = [
		"workspaces:AssociateConnectionAlias",
	];
	/** IAM actions required for the AssociateIpGroups API call. */
	static readonly ASSOCIATE_IP_GROUPS: string[] = [
		"workspaces:AssociateIpGroups",
	];
	/** IAM actions required for the AssociateWorkspaceApplication API call. */
	static readonly ASSOCIATE_WORKSPACE_APPLICATION: string[] = [
		"workspaces:AssociateWorkspaceApplication",
	];
	/** IAM actions required for the AuthorizeIpRules API call. */
	static readonly AUTHORIZE_IP_RULES: string[] = [
		"workspaces:AuthorizeIpRules",
		"workspaces:UpdateRulesOfIpGroup",
	];
	/** IAM actions required for the CopyWorkspaceImage API call. */
	static readonly COPY_WORKSPACE_IMAGE: string[] = [
		"workspaces:CopyWorkspaceImage",
		"workspaces:CreateTags",
		"workspaces:DescribeWorkspaceImages",
	];
	/** IAM actions required for the CreateAccountLinkInvitation API call. */
	static readonly CREATE_ACCOUNT_LINK_INVITATION: string[] = [
		"workspaces:CreateAccountLinkInvitation",
	];
	/** IAM actions required for the CreateConnectClientAddIn API call. */
	static readonly CREATE_CONNECT_CLIENT_ADD_IN: string[] = [
		"workspaces:CreateConnectClientAddIn",
	];
	/** IAM actions required for the CreateConnectionAlias API call. */
	static readonly CREATE_CONNECTION_ALIAS: string[] = [
		"workspaces:CreateConnectionAlias",
		"workspaces:CreateTags",
	];
	/** IAM actions required for the CreateIpGroup API call. */
	static readonly CREATE_IP_GROUP: string[] = [
		"workspaces:CreateIpGroup",
		"workspaces:CreateTags",
	];
	/** IAM actions required for the CreateStandbyWorkspaces API call. */
	static readonly CREATE_STANDBY_WORKSPACES: string[] = [
		"workspaces:CreateStandbyWorkspaces",
		"workspaces:CreateTags",
		"workspaces:DescribeWorkspaces",
	];
	/** IAM actions required for the CreateTags API call. */
	static readonly CREATE_TAGS: string[] = ["workspaces:CreateTags"];
	/** IAM actions required for the CreateUpdatedWorkspaceImage API call. */
	static readonly CREATE_UPDATED_WORKSPACE_IMAGE: string[] = [
		"workspaces:CreateTags",
		"workspaces:CreateUpdatedWorkspaceImage",
	];
	/** IAM actions required for the CreateWorkspaceBundle API call. */
	static readonly CREATE_WORKSPACE_BUNDLE: string[] = [
		"workspaces:CreateTags",
		"workspaces:CreateWorkspaceBundle",
	];
	/** IAM actions required for the CreateWorkspaceImage API call. */
	static readonly CREATE_WORKSPACE_IMAGE: string[] = [
		"workspaces:CreateTags",
		"workspaces:CreateWorkspaceImage",
	];
	/** IAM actions required for the CreateWorkspaces API call. */
	static readonly CREATE_WORKSPACES: string[] = [
		"workspaces:CreateTags",
		"workspaces:CreateWorkspaces",
	];
	/** IAM actions required for the CreateWorkspacesPool API call. */
	static readonly CREATE_WORKSPACES_POOL: string[] = [
		"workspaces:CreateTags",
		"workspaces:CreateWorkspacesPool",
	];
	/** IAM actions required for the DeleteAccountLinkInvitation API call. */
	static readonly DELETE_ACCOUNT_LINK_INVITATION: string[] = [
		"workspaces:DeleteAccountLinkInvitation",
	];
	/** IAM actions required for the DeleteClientBranding API call. */
	static readonly DELETE_CLIENT_BRANDING: string[] = [
		"workspaces:DeleteClientBranding",
	];
	/** IAM actions required for the DeleteConnectClientAddIn API call. */
	static readonly DELETE_CONNECT_CLIENT_ADD_IN: string[] = [
		"workspaces:DeleteConnectClientAddIn",
	];
	/** IAM actions required for the DeleteConnectionAlias API call. */
	static readonly DELETE_CONNECTION_ALIAS: string[] = [
		"workspaces:DeleteConnectionAlias",
	];
	/** IAM actions required for the DeleteIpGroup API call. */
	static readonly DELETE_IP_GROUP: string[] = ["workspaces:DeleteIpGroup"];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DELETE_TAGS: string[] = ["workspaces:DeleteTags"];
	/** IAM actions required for the DeleteWorkspaceBundle API call. */
	static readonly DELETE_WORKSPACE_BUNDLE: string[] = [
		"workspaces:DeleteWorkspaceBundle",
	];
	/** IAM actions required for the DeleteWorkspaceImage API call. */
	static readonly DELETE_WORKSPACE_IMAGE: string[] = [
		"workspaces:DeleteWorkspaceImage",
	];
	/** IAM actions required for the DeployWorkspaceApplications API call. */
	static readonly DEPLOY_WORKSPACE_APPLICATIONS: string[] = [
		"workspaces:DeployWorkspaceApplications",
	];
	/** IAM actions required for the DeregisterWorkspaceDirectory API call. */
	static readonly DEREGISTER_WORKSPACE_DIRECTORY: string[] = [
		"workspaces:DeregisterWorkspaceDirectory",
	];
	/** IAM actions required for the DescribeAccount API call. */
	static readonly DESCRIBE_ACCOUNT: string[] = ["workspaces:DescribeAccount"];
	/** IAM actions required for the DescribeAccountModifications API call. */
	static readonly DESCRIBE_ACCOUNT_MODIFICATIONS: string[] = [
		"workspaces:DescribeAccountModifications",
	];
	/** IAM actions required for the DescribeApplicationAssociations API call. */
	static readonly DESCRIBE_APPLICATION_ASSOCIATIONS: string[] = [
		"workspaces:DescribeApplicationAssociations",
	];
	/** IAM actions required for the DescribeApplications API call. */
	static readonly DESCRIBE_APPLICATIONS: string[] = [
		"workspaces:DescribeApplications",
	];
	/** IAM actions required for the DescribeBundleAssociations API call. */
	static readonly DESCRIBE_BUNDLE_ASSOCIATIONS: string[] = [
		"workspaces:DescribeBundleAssociations",
	];
	/** IAM actions required for the DescribeClientBranding API call. */
	static readonly DESCRIBE_CLIENT_BRANDING: string[] = [
		"workspaces:DescribeClientBranding",
	];
	/** IAM actions required for the DescribeClientProperties API call. */
	static readonly DESCRIBE_CLIENT_PROPERTIES: string[] = [
		"workspaces:DescribeClientProperties",
	];
	/** IAM actions required for the DescribeConnectClientAddIns API call. */
	static readonly DESCRIBE_CONNECT_CLIENT_ADD_INS: string[] = [
		"workspaces:DescribeConnectClientAddIns",
	];
	/** IAM actions required for the DescribeConnectionAliasPermissions API call. */
	static readonly DESCRIBE_CONNECTION_ALIAS_PERMISSIONS: string[] = [
		"workspaces:DescribeConnectionAliasPermissions",
	];
	/** IAM actions required for the DescribeConnectionAliases API call. */
	static readonly DESCRIBE_CONNECTION_ALIASES: string[] = [
		"workspaces:DescribeConnectionAliases",
	];
	/** IAM actions required for the DescribeCustomWorkspaceImageImport API call. */
	static readonly DESCRIBE_CUSTOM_WORKSPACE_IMAGE_IMPORT: string[] = [
		"workspaces:DescribeCustomWorkspaceImageImport",
	];
	/** IAM actions required for the DescribeImageAssociations API call. */
	static readonly DESCRIBE_IMAGE_ASSOCIATIONS: string[] = [
		"workspaces:DescribeImageAssociations",
	];
	/** IAM actions required for the DescribeIpGroups API call. */
	static readonly DESCRIBE_IP_GROUPS: string[] = [
		"workspaces:DescribeIpGroups",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DESCRIBE_TAGS: string[] = ["workspaces:DescribeTags"];
	/** IAM actions required for the DescribeWorkspaceAssociations API call. */
	static readonly DESCRIBE_WORKSPACE_ASSOCIATIONS: string[] = [
		"workspaces:DescribeWorkspaceAssociations",
	];
	/** IAM actions required for the DescribeWorkspaceBundles API call. */
	static readonly DESCRIBE_WORKSPACE_BUNDLES: string[] = [
		"workspaces:DescribeWorkspaceBundles",
	];
	/** IAM actions required for the DescribeWorkspaceDirectories API call. */
	static readonly DESCRIBE_WORKSPACE_DIRECTORIES: string[] = [
		"workspaces:DescribeWorkspaceDirectories",
	];
	/** IAM actions required for the DescribeWorkspaceImagePermissions API call. */
	static readonly DESCRIBE_WORKSPACE_IMAGE_PERMISSIONS: string[] = [
		"workspaces:DescribeWorkspaceImagePermissions",
	];
	/** IAM actions required for the DescribeWorkspaceImages API call. */
	static readonly DESCRIBE_WORKSPACE_IMAGES: string[] = [
		"workspaces:DescribeWorkspaceImages",
	];
	/** IAM actions required for the DescribeWorkspaceSnapshots API call. */
	static readonly DESCRIBE_WORKSPACE_SNAPSHOTS: string[] = [
		"workspaces:DescribeWorkspaceSnapshots",
	];
	/** IAM actions required for the DescribeWorkspaces API call. */
	static readonly DESCRIBE_WORKSPACES: string[] = [
		"workspaces:DescribeWorkspaces",
	];
	/** IAM actions required for the DescribeWorkspacesConnectionStatus API call. */
	static readonly DESCRIBE_WORKSPACES_CONNECTION_STATUS: string[] = [
		"workspaces:DescribeWorkspacesConnectionStatus",
	];
	/** IAM actions required for the DescribeWorkspacesPoolSessions API call. */
	static readonly DESCRIBE_WORKSPACES_POOL_SESSIONS: string[] = [
		"workspaces:DescribeWorkspacesPoolSessions",
	];
	/** IAM actions required for the DescribeWorkspacesPools API call. */
	static readonly DESCRIBE_WORKSPACES_POOLS: string[] = [
		"workspaces:DescribeWorkspacesPools",
	];
	/** IAM actions required for the DisassociateConnectionAlias API call. */
	static readonly DISASSOCIATE_CONNECTION_ALIAS: string[] = [
		"workspaces:DisassociateConnectionAlias",
	];
	/** IAM actions required for the DisassociateIpGroups API call. */
	static readonly DISASSOCIATE_IP_GROUPS: string[] = [
		"workspaces:DisassociateIpGroups",
	];
	/** IAM actions required for the DisassociateWorkspaceApplication API call. */
	static readonly DISASSOCIATE_WORKSPACE_APPLICATION: string[] = [
		"workspaces:DisassociateWorkspaceApplication",
	];
	/** IAM actions required for the GetAccountLink API call. */
	static readonly GET_ACCOUNT_LINK: string[] = ["workspaces:GetAccountLink"];
	/** IAM actions required for the ImportClientBranding API call. */
	static readonly IMPORT_CLIENT_BRANDING: string[] = [
		"workspaces:ImportClientBranding",
	];
	/** IAM actions required for the ImportCustomWorkspaceImage API call. */
	static readonly IMPORT_CUSTOM_WORKSPACE_IMAGE: string[] = [
		"workspaces:CreateTags",
		"workspaces:ImportCustomWorkspaceImage",
	];
	/** IAM actions required for the ImportWorkspaceImage API call. */
	static readonly IMPORT_WORKSPACE_IMAGE: string[] = [
		"workspaces:CreateTags",
		"workspaces:ImportWorkspaceImage",
	];
	/** IAM actions required for the ListAccountLinks API call. */
	static readonly LIST_ACCOUNT_LINKS: string[] = [
		"workspaces:ListAccountLinks",
	];
	/** IAM actions required for the ListAvailableManagementCidrRanges API call. */
	static readonly LIST_AVAILABLE_MANAGEMENT_CIDR_RANGES: string[] = [
		"workspaces:ListAvailableManagementCidrRanges",
	];
	/** IAM actions required for the MigrateWorkspace API call. */
	static readonly MIGRATE_WORKSPACE: string[] = ["workspaces:MigrateWorkspace"];
	/** IAM actions required for the ModifyAccount API call. */
	static readonly MODIFY_ACCOUNT: string[] = ["workspaces:ModifyAccount"];
	/** IAM actions required for the ModifyCertificateBasedAuthProperties API call. */
	static readonly MODIFY_CERTIFICATE_BASED_AUTH_PROPERTIES: string[] = [
		"workspaces:ModifyCertificateBasedAuthProperties",
	];
	/** IAM actions required for the ModifyClientProperties API call. */
	static readonly MODIFY_CLIENT_PROPERTIES: string[] = [
		"workspaces:ModifyClientProperties",
	];
	/** IAM actions required for the ModifyEndpointEncryptionMode API call. */
	static readonly MODIFY_ENDPOINT_ENCRYPTION_MODE: string[] = [
		"workspaces:ModifyEndpointEncryptionMode",
	];
	/** IAM actions required for the ModifySamlProperties API call. */
	static readonly MODIFY_SAML_PROPERTIES: string[] = [
		"workspaces:ModifySamlProperties",
	];
	/** IAM actions required for the ModifySelfservicePermissions API call. */
	static readonly MODIFY_SELFSERVICE_PERMISSIONS: string[] = [
		"workspaces:ModifySelfservicePermissions",
	];
	/** IAM actions required for the ModifyStreamingProperties API call. */
	static readonly MODIFY_STREAMING_PROPERTIES: string[] = [
		"workspaces:ModifyStreamingProperties",
	];
	/** IAM actions required for the ModifyWorkspaceAccessProperties API call. */
	static readonly MODIFY_WORKSPACE_ACCESS_PROPERTIES: string[] = [
		"workspaces:ModifyWorkspaceAccessProperties",
	];
	/** IAM actions required for the ModifyWorkspaceCreationProperties API call. */
	static readonly MODIFY_WORKSPACE_CREATION_PROPERTIES: string[] = [
		"workspaces:ModifyWorkspaceCreationProperties",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyWorkspaceProperties API call. */
	static readonly MODIFY_WORKSPACE_PROPERTIES: string[] = [
		"workspaces:ModifyWorkspaceProperties",
	];
	/** IAM actions required for the ModifyWorkspaceState API call. */
	static readonly MODIFY_WORKSPACE_STATE: string[] = [
		"workspaces:ModifyWorkspaceState",
	];
	/** IAM actions required for the RebootWorkspaces API call. */
	static readonly REBOOT_WORKSPACES: string[] = ["workspaces:RebootWorkspaces"];
	/** IAM actions required for the RebuildWorkspaces API call. */
	static readonly REBUILD_WORKSPACES: string[] = [
		"workspaces:RebuildWorkspaces",
	];
	/** IAM actions required for the RegisterWorkspaceDirectory API call. */
	static readonly REGISTER_WORKSPACE_DIRECTORY: string[] = [
		"workspaces:CreateTags",
		"workspaces:RegisterWorkspaceDirectory",
	];
	/** IAM actions required for the RejectAccountLinkInvitation API call. */
	static readonly REJECT_ACCOUNT_LINK_INVITATION: string[] = [
		"workspaces:RejectAccountLinkInvitation",
	];
	/** IAM actions required for the RestoreWorkspace API call. */
	static readonly RESTORE_WORKSPACE: string[] = ["workspaces:RestoreWorkspace"];
	/** IAM actions required for the RevokeIpRules API call. */
	static readonly REVOKE_IP_RULES: string[] = [
		"workspaces:RevokeIpRules",
		"workspaces:UpdateRulesOfIpGroup",
	];
	/** IAM actions required for the StartWorkspaces API call. */
	static readonly START_WORKSPACES: string[] = ["workspaces:StartWorkspaces"];
	/** IAM actions required for the StartWorkspacesPool API call. */
	static readonly START_WORKSPACES_POOL: string[] = [
		"workspaces:StartWorkspacesPool",
	];
	/** IAM actions required for the StopWorkspaces API call. */
	static readonly STOP_WORKSPACES: string[] = ["workspaces:StopWorkspaces"];
	/** IAM actions required for the StopWorkspacesPool API call. */
	static readonly STOP_WORKSPACES_POOL: string[] = [
		"workspaces:StopWorkspacesPool",
	];
	/** IAM actions required for the TerminateWorkspaces API call. */
	static readonly TERMINATE_WORKSPACES: string[] = [
		"workspaces:TerminateWorkspaces",
	];
	/** IAM actions required for the TerminateWorkspacesPool API call. */
	static readonly TERMINATE_WORKSPACES_POOL: string[] = [
		"workspaces:TerminateWorkspacesPool",
	];
	/** IAM actions required for the TerminateWorkspacesPoolSession API call. */
	static readonly TERMINATE_WORKSPACES_POOL_SESSION: string[] = [
		"workspaces:TerminateWorkspacesPoolSession",
	];
	/** IAM actions required for the UpdateConnectClientAddIn API call. */
	static readonly UPDATE_CONNECT_CLIENT_ADD_IN: string[] = [
		"workspaces:UpdateConnectClientAddIn",
	];
	/** IAM actions required for the UpdateConnectionAliasPermission API call. */
	static readonly UPDATE_CONNECTION_ALIAS_PERMISSION: string[] = [
		"workspaces:UpdateConnectionAliasPermission",
	];
	/** IAM actions required for the UpdateRulesOfIpGroup API call. */
	static readonly UPDATE_RULES_OF_IP_GROUP: string[] = [
		"workspaces:AuthorizeIpRules",
		"workspaces:RevokeIpRules",
		"workspaces:UpdateRulesOfIpGroup",
	];
	/** IAM actions required for the UpdateWorkspaceBundle API call. */
	static readonly UPDATE_WORKSPACE_BUNDLE: string[] = [
		"workspaces:UpdateWorkspaceBundle",
	];
	/** IAM actions required for the UpdateWorkspaceImagePermission API call. */
	static readonly UPDATE_WORKSPACE_IMAGE_PERMISSION: string[] = [
		"workspaces:UpdateWorkspaceImagePermission",
	];
	/** IAM actions required for the UpdateWorkspacesPool API call. */
	static readonly UPDATE_WORKSPACES_POOL: string[] = [
		"workspaces:UpdateWorkspacesPool",
	];
}

/**
 * Condition key constants and builders for workspaces.
 */
export class WorkSpacesConditions {
	/** Condition keys applicable to the AssociateWorkspaceApplication action. */
	static readonly ASSOCIATE_WORKSPACE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateConnectionAlias action. */
	static readonly CREATE_CONNECTION_ALIAS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIpGroup action. */
	static readonly CREATE_IP_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTags action. */
	static readonly CREATE_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DELETE_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeployWorkspaceApplications action. */
	static readonly DEPLOY_WORKSPACE_APPLICATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeApplicationAssociations action. */
	static readonly DESCRIBE_APPLICATION_ASSOCIATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeBundleAssociations action. */
	static readonly DESCRIBE_BUNDLE_ASSOCIATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeImageAssociations action. */
	static readonly DESCRIBE_IMAGE_ASSOCIATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeWorkspaceAssociations action. */
	static readonly DESCRIBE_WORKSPACE_ASSOCIATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateWorkspaceApplication action. */
	static readonly DISASSOCIATE_WORKSPACE_APPLICATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ImportCustomWorkspaceImage action. */
	static readonly IMPORT_CUSTOM_WORKSPACE_IMAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportWorkspaceImage action. */
	static readonly IMPORT_WORKSPACE_IMAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterWorkspaceDirectory action. */
	static readonly REGISTER_WORKSPACE_DIRECTORY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Stream action. */
	static readonly STREAM_CONDITION_KEYS: string[] = ["workspaces:userId"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
