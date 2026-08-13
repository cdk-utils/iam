// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/workdocs.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the workdocs service.
 */
export class WorkDocsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "workdocs";

	/** [Write] workdocs:AbortDocumentVersionUpload */
	static readonly AbortDocumentVersionUpload =
		"workdocs:AbortDocumentVersionUpload";
	/** [Write] workdocs:ActivateUser */
	static readonly ActivateUser = "workdocs:ActivateUser";
	/** [Write] workdocs:AddNotificationPermissions */
	static readonly AddNotificationPermissions =
		"workdocs:AddNotificationPermissions";
	/** [Write] workdocs:AddResourcePermissions */
	static readonly AddResourcePermissions = "workdocs:AddResourcePermissions";
	/** [Write] workdocs:AddUserToGroup */
	static readonly AddUserToGroup = "workdocs:AddUserToGroup";
	/** [Read] workdocs:CheckAlias */
	static readonly CheckAlias = "workdocs:CheckAlias";
	/** [Write] workdocs:CreateComment */
	static readonly CreateComment = "workdocs:CreateComment";
	/** [Write] workdocs:CreateCustomMetadata */
	static readonly CreateCustomMetadata = "workdocs:CreateCustomMetadata";
	/** [Write] workdocs:CreateFolder */
	static readonly CreateFolder = "workdocs:CreateFolder";
	/** [Write] workdocs:CreateInstance */
	static readonly CreateInstance = "workdocs:CreateInstance";
	/** [Write] workdocs:CreateLabels */
	static readonly CreateLabels = "workdocs:CreateLabels";
	/** [Write] workdocs:CreateNotificationSubscription */
	static readonly CreateNotificationSubscription =
		"workdocs:CreateNotificationSubscription";
	/** [Write] workdocs:CreateUser */
	static readonly CreateUser = "workdocs:CreateUser";
	/** [Write] workdocs:DeactivateUser */
	static readonly DeactivateUser = "workdocs:DeactivateUser";
	/** [Write] workdocs:DeleteComment */
	static readonly DeleteComment = "workdocs:DeleteComment";
	/** [Write] workdocs:DeleteCustomMetadata */
	static readonly DeleteCustomMetadata = "workdocs:DeleteCustomMetadata";
	/** [Write] workdocs:DeleteDocument */
	static readonly DeleteDocument = "workdocs:DeleteDocument";
	/** [Write] workdocs:DeleteDocumentVersion */
	static readonly DeleteDocumentVersion = "workdocs:DeleteDocumentVersion";
	/** [Write] workdocs:DeleteFolder */
	static readonly DeleteFolder = "workdocs:DeleteFolder";
	/** [Write] workdocs:DeleteFolderContents */
	static readonly DeleteFolderContents = "workdocs:DeleteFolderContents";
	/** [Write] workdocs:DeleteInstance */
	static readonly DeleteInstance = "workdocs:DeleteInstance";
	/** [Write] workdocs:DeleteLabels */
	static readonly DeleteLabels = "workdocs:DeleteLabels";
	/** [Write] workdocs:DeleteNotificationPermissions */
	static readonly DeleteNotificationPermissions =
		"workdocs:DeleteNotificationPermissions";
	/** [Write] workdocs:DeleteNotificationSubscription */
	static readonly DeleteNotificationSubscription =
		"workdocs:DeleteNotificationSubscription";
	/** [Write] workdocs:DeleteUser */
	static readonly DeleteUser = "workdocs:DeleteUser";
	/** [Write] workdocs:DeregisterDirectory */
	static readonly DeregisterDirectory = "workdocs:DeregisterDirectory";
	/** [List] workdocs:DescribeActivities */
	static readonly DescribeActivities = "workdocs:DescribeActivities";
	/** [List] workdocs:DescribeAvailableDirectories */
	static readonly DescribeAvailableDirectories =
		"workdocs:DescribeAvailableDirectories";
	/** [List] workdocs:DescribeComments */
	static readonly DescribeComments = "workdocs:DescribeComments";
	/** [List] workdocs:DescribeDocumentVersions */
	static readonly DescribeDocumentVersions =
		"workdocs:DescribeDocumentVersions";
	/** [List] workdocs:DescribeFolderContents */
	static readonly DescribeFolderContents = "workdocs:DescribeFolderContents";
	/** [List] workdocs:DescribeGroups */
	static readonly DescribeGroups = "workdocs:DescribeGroups";
	/** [List] workdocs:DescribeInstanceExports */
	static readonly DescribeInstanceExports = "workdocs:DescribeInstanceExports";
	/** [List] workdocs:DescribeInstances */
	static readonly DescribeInstances = "workdocs:DescribeInstances";
	/** [List] workdocs:DescribeNotificationPermissions */
	static readonly DescribeNotificationPermissions =
		"workdocs:DescribeNotificationPermissions";
	/** [List] workdocs:DescribeNotificationSubscriptions */
	static readonly DescribeNotificationSubscriptions =
		"workdocs:DescribeNotificationSubscriptions";
	/** [List] workdocs:DescribeResourcePermissions */
	static readonly DescribeResourcePermissions =
		"workdocs:DescribeResourcePermissions";
	/** [List] workdocs:DescribeRootFolders */
	static readonly DescribeRootFolders = "workdocs:DescribeRootFolders";
	/** [List] workdocs:DescribeUsers */
	static readonly DescribeUsers = "workdocs:DescribeUsers";
	/** [Read] workdocs:DownloadDocumentVersion */
	static readonly DownloadDocumentVersion = "workdocs:DownloadDocumentVersion";
	/** [Read] workdocs:GetCurrentUser */
	static readonly actionGetCurrentUser = "workdocs:GetCurrentUser";
	/** [Read] workdocs:GetDocument */
	static readonly actionGetDocument = "workdocs:GetDocument";
	/** [Read] workdocs:GetDocumentPath */
	static readonly actionGetDocumentPath = "workdocs:GetDocumentPath";
	/** [Read] workdocs:GetDocumentVersion */
	static readonly actionGetDocumentVersion = "workdocs:GetDocumentVersion";
	/** [Read] workdocs:GetFolder */
	static readonly actionGetFolder = "workdocs:GetFolder";
	/** [Read] workdocs:GetFolderPath */
	static readonly actionGetFolderPath = "workdocs:GetFolderPath";
	/** [Read] workdocs:GetGroup */
	static readonly actionGetGroup = "workdocs:GetGroup";
	/** [Read] workdocs:GetResources */
	static readonly actionGetResources = "workdocs:GetResources";
	/** [Write] workdocs:InitiateDocumentVersionUpload */
	static readonly InitiateDocumentVersionUpload =
		"workdocs:InitiateDocumentVersionUpload";
	/** [Write] workdocs:RegisterDirectory */
	static readonly RegisterDirectory = "workdocs:RegisterDirectory";
	/** [Write] workdocs:RemoveAllResourcePermissions */
	static readonly RemoveAllResourcePermissions =
		"workdocs:RemoveAllResourcePermissions";
	/** [Write] workdocs:RemoveResourcePermission */
	static readonly RemoveResourcePermission =
		"workdocs:RemoveResourcePermission";
	/** [Write] workdocs:RestoreDocumentVersions */
	static readonly RestoreDocumentVersions = "workdocs:RestoreDocumentVersions";
	/** [List] workdocs:SearchResources */
	static readonly SearchResources = "workdocs:SearchResources";
	/** [Write] workdocs:StartInstanceExport */
	static readonly StartInstanceExport = "workdocs:StartInstanceExport";
	/** [Write] workdocs:UpdateDocument */
	static readonly UpdateDocument = "workdocs:UpdateDocument";
	/** [Write] workdocs:UpdateDocumentVersion */
	static readonly UpdateDocumentVersion = "workdocs:UpdateDocumentVersion";
	/** [Write] workdocs:UpdateFolder */
	static readonly UpdateFolder = "workdocs:UpdateFolder";
	/** [Write] workdocs:UpdateInstanceAlias */
	static readonly UpdateInstanceAlias = "workdocs:UpdateInstanceAlias";
	/** [Write] workdocs:UpdateUser */
	static readonly UpdateUser = "workdocs:UpdateUser";
	/** [Write] workdocs:UpdateUserAdministrativeSettings */
	static readonly UpdateUserAdministrativeSettings =
		"workdocs:UpdateUserAdministrativeSettings";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		WorkDocsActions.CheckAlias,
		WorkDocsActions.DownloadDocumentVersion,
		WorkDocsActions.actionGetCurrentUser,
		WorkDocsActions.actionGetDocument,
		WorkDocsActions.actionGetDocumentPath,
		WorkDocsActions.actionGetDocumentVersion,
		WorkDocsActions.actionGetFolder,
		WorkDocsActions.actionGetFolderPath,
		WorkDocsActions.actionGetGroup,
		WorkDocsActions.actionGetResources,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		WorkDocsActions.AbortDocumentVersionUpload,
		WorkDocsActions.ActivateUser,
		WorkDocsActions.AddNotificationPermissions,
		WorkDocsActions.AddResourcePermissions,
		WorkDocsActions.AddUserToGroup,
		WorkDocsActions.CreateComment,
		WorkDocsActions.CreateCustomMetadata,
		WorkDocsActions.CreateFolder,
		WorkDocsActions.CreateInstance,
		WorkDocsActions.CreateLabels,
		WorkDocsActions.CreateNotificationSubscription,
		WorkDocsActions.CreateUser,
		WorkDocsActions.DeactivateUser,
		WorkDocsActions.DeleteComment,
		WorkDocsActions.DeleteCustomMetadata,
		WorkDocsActions.DeleteDocument,
		WorkDocsActions.DeleteDocumentVersion,
		WorkDocsActions.DeleteFolder,
		WorkDocsActions.DeleteFolderContents,
		WorkDocsActions.DeleteInstance,
		WorkDocsActions.DeleteLabels,
		WorkDocsActions.DeleteNotificationPermissions,
		WorkDocsActions.DeleteNotificationSubscription,
		WorkDocsActions.DeleteUser,
		WorkDocsActions.DeregisterDirectory,
		WorkDocsActions.InitiateDocumentVersionUpload,
		WorkDocsActions.RegisterDirectory,
		WorkDocsActions.RemoveAllResourcePermissions,
		WorkDocsActions.RemoveResourcePermission,
		WorkDocsActions.RestoreDocumentVersions,
		WorkDocsActions.StartInstanceExport,
		WorkDocsActions.UpdateDocument,
		WorkDocsActions.UpdateDocumentVersion,
		WorkDocsActions.UpdateFolder,
		WorkDocsActions.UpdateInstanceAlias,
		WorkDocsActions.UpdateUser,
		WorkDocsActions.UpdateUserAdministrativeSettings,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		WorkDocsActions.DescribeActivities,
		WorkDocsActions.DescribeAvailableDirectories,
		WorkDocsActions.DescribeComments,
		WorkDocsActions.DescribeDocumentVersions,
		WorkDocsActions.DescribeFolderContents,
		WorkDocsActions.DescribeGroups,
		WorkDocsActions.DescribeInstanceExports,
		WorkDocsActions.DescribeInstances,
		WorkDocsActions.DescribeNotificationPermissions,
		WorkDocsActions.DescribeNotificationSubscriptions,
		WorkDocsActions.DescribeResourcePermissions,
		WorkDocsActions.DescribeRootFolders,
		WorkDocsActions.DescribeUsers,
		WorkDocsActions.SearchResources,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a organization ARN.
 */
export interface WorkDocsOrganizationArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a organization ARN.
 */
export interface WorkDocsOrganizationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const OrganizationArnRegex =
	/^arn:(?<partition>[^:]+):workdocs:(?<region>[^:]*):(?<account>[^:]*):organization\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for workdocs resources.
 */
export class WorkDocsResources {
	/**
	 * Builds an ARN for the organization resource.
	 */
	static organization(props: WorkDocsOrganizationArnProps): string {
		return `arn:${props.partition ?? "aws"}:workdocs:${props.region ?? "*"}:${props.account ?? "*"}:organization/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the organization resource.
	 */
	static isValidOrganizationArn(arn: string): boolean {
		return OrganizationArnRegex.test(arn);
	}

	/**
	 * Parses a organization ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOrganizationArn(arn: string): WorkDocsOrganizationArnComponents {
		const match = OrganizationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid organization ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for workdocs.
 */
export class WorkDocsOperations {
	/** IAM actions required for the AbortDocumentVersionUpload API call. */
	static readonly AbortDocumentVersionUpload: string[] = [
		"workdocs:AbortDocumentVersionUpload",
	];
	/** IAM actions required for the ActivateUser API call. */
	static readonly ActivateUser: string[] = ["workdocs:ActivateUser"];
	/** IAM actions required for the AddResourcePermissions API call. */
	static readonly AddResourcePermissions: string[] = [
		"workdocs:AddResourcePermissions",
	];
	/** IAM actions required for the CreateComment API call. */
	static readonly CreateComment: string[] = ["workdocs:CreateComment"];
	/** IAM actions required for the CreateCustomMetadata API call. */
	static readonly CreateCustomMetadata: string[] = [
		"workdocs:CreateCustomMetadata",
	];
	/** IAM actions required for the CreateFolder API call. */
	static readonly CreateFolder: string[] = ["workdocs:CreateFolder"];
	/** IAM actions required for the CreateLabels API call. */
	static readonly CreateLabels: string[] = ["workdocs:CreateLabels"];
	/** IAM actions required for the CreateNotificationSubscription API call. */
	static readonly CreateNotificationSubscription: string[] = [
		"workdocs:CreateNotificationSubscription",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = ["workdocs:CreateUser"];
	/** IAM actions required for the DeactivateUser API call. */
	static readonly DeactivateUser: string[] = ["workdocs:DeactivateUser"];
	/** IAM actions required for the DeleteComment API call. */
	static readonly DeleteComment: string[] = [];
	/** IAM actions required for the DeleteCustomMetadata API call. */
	static readonly DeleteCustomMetadata: string[] = [
		"workdocs:DeleteCustomMetadata",
	];
	/** IAM actions required for the DeleteDocument API call. */
	static readonly DeleteDocument: string[] = ["workdocs:DeleteDocument"];
	/** IAM actions required for the DeleteDocumentVersion API call. */
	static readonly DeleteDocumentVersion: string[] = [
		"workdocs:DeleteDocumentVersion",
	];
	/** IAM actions required for the DeleteFolder API call. */
	static readonly DeleteFolder: string[] = ["workdocs:DeleteFolder"];
	/** IAM actions required for the DeleteFolderContents API call. */
	static readonly DeleteFolderContents: string[] = [
		"workdocs:DeleteFolderContents",
	];
	/** IAM actions required for the DeleteLabels API call. */
	static readonly DeleteLabels: string[] = ["workdocs:DeleteLabels"];
	/** IAM actions required for the DeleteNotificationSubscription API call. */
	static readonly DeleteNotificationSubscription: string[] = [
		"workdocs:DeleteNotificationSubscription",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = ["workdocs:DeleteUser"];
	/** IAM actions required for the DescribeActivities API call. */
	static readonly DescribeActivities: string[] = [
		"workdocs:DescribeActivities",
	];
	/** IAM actions required for the DescribeComments API call. */
	static readonly DescribeComments: string[] = ["workdocs:DescribeComments"];
	/** IAM actions required for the DescribeDocumentVersions API call. */
	static readonly DescribeDocumentVersions: string[] = [
		"workdocs:DescribeDocumentVersions",
	];
	/** IAM actions required for the DescribeFolderContents API call. */
	static readonly DescribeFolderContents: string[] = [
		"workdocs:DescribeFolderContents",
	];
	/** IAM actions required for the DescribeGroups API call. */
	static readonly DescribeGroups: string[] = ["workdocs:DescribeGroups"];
	/** IAM actions required for the DescribeNotificationSubscriptions API call. */
	static readonly DescribeNotificationSubscriptions: string[] = [
		"workdocs:DescribeNotificationSubscriptions",
	];
	/** IAM actions required for the DescribeResourcePermissions API call. */
	static readonly DescribeResourcePermissions: string[] = [
		"workdocs:DescribeResourcePermissions",
	];
	/** IAM actions required for the DescribeRootFolders API call. */
	static readonly DescribeRootFolders: string[] = [];
	/** IAM actions required for the DescribeUsers API call. */
	static readonly DescribeUsers: string[] = ["workdocs:DescribeUsers"];
	/** IAM actions required for the GetCurrentUser API call. */
	static readonly opGetCurrentUser: string[] = [];
	/** IAM actions required for the GetDocument API call. */
	static readonly opGetDocument: string[] = ["workdocs:GetDocument"];
	/** IAM actions required for the GetDocumentPath API call. */
	static readonly opGetDocumentPath: string[] = ["workdocs:GetDocumentPath"];
	/** IAM actions required for the GetDocumentVersion API call. */
	static readonly opGetDocumentVersion: string[] = [
		"workdocs:DownloadDocumentVersion",
		"workdocs:GetDocumentVersion",
	];
	/** IAM actions required for the GetFolder API call. */
	static readonly opGetFolder: string[] = ["workdocs:GetFolder"];
	/** IAM actions required for the GetFolderPath API call. */
	static readonly opGetFolderPath: string[] = ["workdocs:GetFolderPath"];
	/** IAM actions required for the GetResources API call. */
	static readonly opGetResources: string[] = ["workdocs:GetResources"];
	/** IAM actions required for the InitiateDocumentVersionUpload API call. */
	static readonly InitiateDocumentVersionUpload: string[] = [
		"workdocs:InitiateDocumentVersionUpload",
	];
	/** IAM actions required for the RemoveAllResourcePermissions API call. */
	static readonly RemoveAllResourcePermissions: string[] = [
		"workdocs:RemoveAllResourcePermissions",
	];
	/** IAM actions required for the RemoveResourcePermission API call. */
	static readonly RemoveResourcePermission: string[] = [
		"workdocs:RemoveResourcePermission",
	];
	/** IAM actions required for the RestoreDocumentVersions API call. */
	static readonly RestoreDocumentVersions: string[] = [
		"workdocs:RestoreDocumentVersions",
	];
	/** IAM actions required for the SearchResources API call. */
	static readonly SearchResources: string[] = ["workdocs:SearchResources"];
	/** IAM actions required for the UpdateDocument API call. */
	static readonly UpdateDocument: string[] = [
		"workdocs:DeleteDocument",
		"workdocs:InitiateDocumentVersionUpload",
		"workdocs:UpdateDocument",
	];
	/** IAM actions required for the UpdateDocumentVersion API call. */
	static readonly UpdateDocumentVersion: string[] = [
		"workdocs:UpdateDocumentVersion",
	];
	/** IAM actions required for the UpdateFolder API call. */
	static readonly UpdateFolder: string[] = [
		"workdocs:CreateFolder",
		"workdocs:UpdateFolder",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UpdateUser: string[] = [
		"workdocs:UpdateUser",
		"workdocs:UpdateUserAdministrativeSettings",
	];
}
