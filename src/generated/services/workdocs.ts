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
	static readonly ABORT_DOCUMENT_VERSION_UPLOAD =
		"workdocs:AbortDocumentVersionUpload";
	/** [Write] workdocs:ActivateUser */
	static readonly ACTIVATE_USER = "workdocs:ActivateUser";
	/** [Write] workdocs:AddNotificationPermissions */
	static readonly ADD_NOTIFICATION_PERMISSIONS =
		"workdocs:AddNotificationPermissions";
	/** [Write] workdocs:AddResourcePermissions */
	static readonly ADD_RESOURCE_PERMISSIONS = "workdocs:AddResourcePermissions";
	/** [Write] workdocs:AddUserToGroup */
	static readonly ADD_USER_TO_GROUP = "workdocs:AddUserToGroup";
	/** [Read] workdocs:CheckAlias */
	static readonly CHECK_ALIAS = "workdocs:CheckAlias";
	/** [Write] workdocs:CreateComment */
	static readonly CREATE_COMMENT = "workdocs:CreateComment";
	/** [Write] workdocs:CreateCustomMetadata */
	static readonly CREATE_CUSTOM_METADATA = "workdocs:CreateCustomMetadata";
	/** [Write] workdocs:CreateFolder */
	static readonly CREATE_FOLDER = "workdocs:CreateFolder";
	/** [Write] workdocs:CreateInstance */
	static readonly CREATE_INSTANCE = "workdocs:CreateInstance";
	/** [Write] workdocs:CreateLabels */
	static readonly CREATE_LABELS = "workdocs:CreateLabels";
	/** [Write] workdocs:CreateNotificationSubscription */
	static readonly CREATE_NOTIFICATION_SUBSCRIPTION =
		"workdocs:CreateNotificationSubscription";
	/** [Write] workdocs:CreateUser */
	static readonly CREATE_USER = "workdocs:CreateUser";
	/** [Write] workdocs:DeactivateUser */
	static readonly DEACTIVATE_USER = "workdocs:DeactivateUser";
	/** [Write] workdocs:DeleteComment */
	static readonly DELETE_COMMENT = "workdocs:DeleteComment";
	/** [Write] workdocs:DeleteCustomMetadata */
	static readonly DELETE_CUSTOM_METADATA = "workdocs:DeleteCustomMetadata";
	/** [Write] workdocs:DeleteDocument */
	static readonly DELETE_DOCUMENT = "workdocs:DeleteDocument";
	/** [Write] workdocs:DeleteDocumentVersion */
	static readonly DELETE_DOCUMENT_VERSION = "workdocs:DeleteDocumentVersion";
	/** [Write] workdocs:DeleteFolder */
	static readonly DELETE_FOLDER = "workdocs:DeleteFolder";
	/** [Write] workdocs:DeleteFolderContents */
	static readonly DELETE_FOLDER_CONTENTS = "workdocs:DeleteFolderContents";
	/** [Write] workdocs:DeleteInstance */
	static readonly DELETE_INSTANCE = "workdocs:DeleteInstance";
	/** [Write] workdocs:DeleteLabels */
	static readonly DELETE_LABELS = "workdocs:DeleteLabels";
	/** [Write] workdocs:DeleteNotificationPermissions */
	static readonly DELETE_NOTIFICATION_PERMISSIONS =
		"workdocs:DeleteNotificationPermissions";
	/** [Write] workdocs:DeleteNotificationSubscription */
	static readonly DELETE_NOTIFICATION_SUBSCRIPTION =
		"workdocs:DeleteNotificationSubscription";
	/** [Write] workdocs:DeleteUser */
	static readonly DELETE_USER = "workdocs:DeleteUser";
	/** [Write] workdocs:DeregisterDirectory */
	static readonly DEREGISTER_DIRECTORY = "workdocs:DeregisterDirectory";
	/** [List] workdocs:DescribeActivities */
	static readonly DESCRIBE_ACTIVITIES = "workdocs:DescribeActivities";
	/** [List] workdocs:DescribeAvailableDirectories */
	static readonly DESCRIBE_AVAILABLE_DIRECTORIES =
		"workdocs:DescribeAvailableDirectories";
	/** [List] workdocs:DescribeComments */
	static readonly DESCRIBE_COMMENTS = "workdocs:DescribeComments";
	/** [List] workdocs:DescribeDocumentVersions */
	static readonly DESCRIBE_DOCUMENT_VERSIONS =
		"workdocs:DescribeDocumentVersions";
	/** [List] workdocs:DescribeFolderContents */
	static readonly DESCRIBE_FOLDER_CONTENTS = "workdocs:DescribeFolderContents";
	/** [List] workdocs:DescribeGroups */
	static readonly DESCRIBE_GROUPS = "workdocs:DescribeGroups";
	/** [List] workdocs:DescribeInstanceExports */
	static readonly DESCRIBE_INSTANCE_EXPORTS =
		"workdocs:DescribeInstanceExports";
	/** [List] workdocs:DescribeInstances */
	static readonly DESCRIBE_INSTANCES = "workdocs:DescribeInstances";
	/** [List] workdocs:DescribeNotificationPermissions */
	static readonly DESCRIBE_NOTIFICATION_PERMISSIONS =
		"workdocs:DescribeNotificationPermissions";
	/** [List] workdocs:DescribeNotificationSubscriptions */
	static readonly DESCRIBE_NOTIFICATION_SUBSCRIPTIONS =
		"workdocs:DescribeNotificationSubscriptions";
	/** [List] workdocs:DescribeResourcePermissions */
	static readonly DESCRIBE_RESOURCE_PERMISSIONS =
		"workdocs:DescribeResourcePermissions";
	/** [List] workdocs:DescribeRootFolders */
	static readonly DESCRIBE_ROOT_FOLDERS = "workdocs:DescribeRootFolders";
	/** [List] workdocs:DescribeUsers */
	static readonly DESCRIBE_USERS = "workdocs:DescribeUsers";
	/** [Read] workdocs:DownloadDocumentVersion */
	static readonly DOWNLOAD_DOCUMENT_VERSION =
		"workdocs:DownloadDocumentVersion";
	/** [Read] workdocs:GetCurrentUser */
	static readonly GET_CURRENT_USER = "workdocs:GetCurrentUser";
	/** [Read] workdocs:GetDocument */
	static readonly GET_DOCUMENT = "workdocs:GetDocument";
	/** [Read] workdocs:GetDocumentPath */
	static readonly GET_DOCUMENT_PATH = "workdocs:GetDocumentPath";
	/** [Read] workdocs:GetDocumentVersion */
	static readonly GET_DOCUMENT_VERSION = "workdocs:GetDocumentVersion";
	/** [Read] workdocs:GetFolder */
	static readonly GET_FOLDER = "workdocs:GetFolder";
	/** [Read] workdocs:GetFolderPath */
	static readonly GET_FOLDER_PATH = "workdocs:GetFolderPath";
	/** [Read] workdocs:GetGroup */
	static readonly GET_GROUP = "workdocs:GetGroup";
	/** [Read] workdocs:GetResources */
	static readonly GET_RESOURCES = "workdocs:GetResources";
	/** [Write] workdocs:InitiateDocumentVersionUpload */
	static readonly INITIATE_DOCUMENT_VERSION_UPLOAD =
		"workdocs:InitiateDocumentVersionUpload";
	/** [Write] workdocs:RegisterDirectory */
	static readonly REGISTER_DIRECTORY = "workdocs:RegisterDirectory";
	/** [Write] workdocs:RemoveAllResourcePermissions */
	static readonly REMOVE_ALL_RESOURCE_PERMISSIONS =
		"workdocs:RemoveAllResourcePermissions";
	/** [Write] workdocs:RemoveResourcePermission */
	static readonly REMOVE_RESOURCE_PERMISSION =
		"workdocs:RemoveResourcePermission";
	/** [Write] workdocs:RestoreDocumentVersions */
	static readonly RESTORE_DOCUMENT_VERSIONS =
		"workdocs:RestoreDocumentVersions";
	/** [List] workdocs:SearchResources */
	static readonly SEARCH_RESOURCES = "workdocs:SearchResources";
	/** [Write] workdocs:StartInstanceExport */
	static readonly START_INSTANCE_EXPORT = "workdocs:StartInstanceExport";
	/** [Write] workdocs:UpdateDocument */
	static readonly UPDATE_DOCUMENT = "workdocs:UpdateDocument";
	/** [Write] workdocs:UpdateDocumentVersion */
	static readonly UPDATE_DOCUMENT_VERSION = "workdocs:UpdateDocumentVersion";
	/** [Write] workdocs:UpdateFolder */
	static readonly UPDATE_FOLDER = "workdocs:UpdateFolder";
	/** [Write] workdocs:UpdateInstanceAlias */
	static readonly UPDATE_INSTANCE_ALIAS = "workdocs:UpdateInstanceAlias";
	/** [Write] workdocs:UpdateUser */
	static readonly UPDATE_USER = "workdocs:UpdateUser";
	/** [Write] workdocs:UpdateUserAdministrativeSettings */
	static readonly UPDATE_USER_ADMINISTRATIVE_SETTINGS =
		"workdocs:UpdateUserAdministrativeSettings";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		WorkDocsActions.CHECK_ALIAS,
		WorkDocsActions.DOWNLOAD_DOCUMENT_VERSION,
		WorkDocsActions.GET_CURRENT_USER,
		WorkDocsActions.GET_DOCUMENT,
		WorkDocsActions.GET_DOCUMENT_PATH,
		WorkDocsActions.GET_DOCUMENT_VERSION,
		WorkDocsActions.GET_FOLDER,
		WorkDocsActions.GET_FOLDER_PATH,
		WorkDocsActions.GET_GROUP,
		WorkDocsActions.GET_RESOURCES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		WorkDocsActions.ABORT_DOCUMENT_VERSION_UPLOAD,
		WorkDocsActions.ACTIVATE_USER,
		WorkDocsActions.ADD_NOTIFICATION_PERMISSIONS,
		WorkDocsActions.ADD_RESOURCE_PERMISSIONS,
		WorkDocsActions.ADD_USER_TO_GROUP,
		WorkDocsActions.CREATE_COMMENT,
		WorkDocsActions.CREATE_CUSTOM_METADATA,
		WorkDocsActions.CREATE_FOLDER,
		WorkDocsActions.CREATE_INSTANCE,
		WorkDocsActions.CREATE_LABELS,
		WorkDocsActions.CREATE_NOTIFICATION_SUBSCRIPTION,
		WorkDocsActions.CREATE_USER,
		WorkDocsActions.DEACTIVATE_USER,
		WorkDocsActions.DELETE_COMMENT,
		WorkDocsActions.DELETE_CUSTOM_METADATA,
		WorkDocsActions.DELETE_DOCUMENT,
		WorkDocsActions.DELETE_DOCUMENT_VERSION,
		WorkDocsActions.DELETE_FOLDER,
		WorkDocsActions.DELETE_FOLDER_CONTENTS,
		WorkDocsActions.DELETE_INSTANCE,
		WorkDocsActions.DELETE_LABELS,
		WorkDocsActions.DELETE_NOTIFICATION_PERMISSIONS,
		WorkDocsActions.DELETE_NOTIFICATION_SUBSCRIPTION,
		WorkDocsActions.DELETE_USER,
		WorkDocsActions.DEREGISTER_DIRECTORY,
		WorkDocsActions.INITIATE_DOCUMENT_VERSION_UPLOAD,
		WorkDocsActions.REGISTER_DIRECTORY,
		WorkDocsActions.REMOVE_ALL_RESOURCE_PERMISSIONS,
		WorkDocsActions.REMOVE_RESOURCE_PERMISSION,
		WorkDocsActions.RESTORE_DOCUMENT_VERSIONS,
		WorkDocsActions.START_INSTANCE_EXPORT,
		WorkDocsActions.UPDATE_DOCUMENT,
		WorkDocsActions.UPDATE_DOCUMENT_VERSION,
		WorkDocsActions.UPDATE_FOLDER,
		WorkDocsActions.UPDATE_INSTANCE_ALIAS,
		WorkDocsActions.UPDATE_USER,
		WorkDocsActions.UPDATE_USER_ADMINISTRATIVE_SETTINGS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		WorkDocsActions.DESCRIBE_ACTIVITIES,
		WorkDocsActions.DESCRIBE_AVAILABLE_DIRECTORIES,
		WorkDocsActions.DESCRIBE_COMMENTS,
		WorkDocsActions.DESCRIBE_DOCUMENT_VERSIONS,
		WorkDocsActions.DESCRIBE_FOLDER_CONTENTS,
		WorkDocsActions.DESCRIBE_GROUPS,
		WorkDocsActions.DESCRIBE_INSTANCE_EXPORTS,
		WorkDocsActions.DESCRIBE_INSTANCES,
		WorkDocsActions.DESCRIBE_NOTIFICATION_PERMISSIONS,
		WorkDocsActions.DESCRIBE_NOTIFICATION_SUBSCRIPTIONS,
		WorkDocsActions.DESCRIBE_RESOURCE_PERMISSIONS,
		WorkDocsActions.DESCRIBE_ROOT_FOLDERS,
		WorkDocsActions.DESCRIBE_USERS,
		WorkDocsActions.SEARCH_RESOURCES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const OrganizationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):workdocs:(?<region>[^:]*):(?<account>[^:]*):organization/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for workdocs resources.
 */
export class WorkDocsResources {
	/**
	 * Builds an ARN for the organization resource.
	 */
	static organization(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseOrganizationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly ABORT_DOCUMENT_VERSION_UPLOAD: string[] = [
		"workdocs:AbortDocumentVersionUpload",
	];
	/** IAM actions required for the ActivateUser API call. */
	static readonly ACTIVATE_USER: string[] = ["workdocs:ActivateUser"];
	/** IAM actions required for the AddResourcePermissions API call. */
	static readonly ADD_RESOURCE_PERMISSIONS: string[] = [
		"workdocs:AddResourcePermissions",
	];
	/** IAM actions required for the CreateComment API call. */
	static readonly CREATE_COMMENT: string[] = ["workdocs:CreateComment"];
	/** IAM actions required for the CreateCustomMetadata API call. */
	static readonly CREATE_CUSTOM_METADATA: string[] = [
		"workdocs:CreateCustomMetadata",
	];
	/** IAM actions required for the CreateFolder API call. */
	static readonly CREATE_FOLDER: string[] = ["workdocs:CreateFolder"];
	/** IAM actions required for the CreateLabels API call. */
	static readonly CREATE_LABELS: string[] = ["workdocs:CreateLabels"];
	/** IAM actions required for the CreateNotificationSubscription API call. */
	static readonly CREATE_NOTIFICATION_SUBSCRIPTION: string[] = [
		"workdocs:CreateNotificationSubscription",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = ["workdocs:CreateUser"];
	/** IAM actions required for the DeactivateUser API call. */
	static readonly DEACTIVATE_USER: string[] = ["workdocs:DeactivateUser"];
	/** IAM actions required for the DeleteComment API call. */
	static readonly DELETE_COMMENT: string[] = [];
	/** IAM actions required for the DeleteCustomMetadata API call. */
	static readonly DELETE_CUSTOM_METADATA: string[] = [
		"workdocs:DeleteCustomMetadata",
	];
	/** IAM actions required for the DeleteDocument API call. */
	static readonly DELETE_DOCUMENT: string[] = ["workdocs:DeleteDocument"];
	/** IAM actions required for the DeleteDocumentVersion API call. */
	static readonly DELETE_DOCUMENT_VERSION: string[] = [
		"workdocs:DeleteDocumentVersion",
	];
	/** IAM actions required for the DeleteFolder API call. */
	static readonly DELETE_FOLDER: string[] = ["workdocs:DeleteFolder"];
	/** IAM actions required for the DeleteFolderContents API call. */
	static readonly DELETE_FOLDER_CONTENTS: string[] = [
		"workdocs:DeleteFolderContents",
	];
	/** IAM actions required for the DeleteLabels API call. */
	static readonly DELETE_LABELS: string[] = ["workdocs:DeleteLabels"];
	/** IAM actions required for the DeleteNotificationSubscription API call. */
	static readonly DELETE_NOTIFICATION_SUBSCRIPTION: string[] = [
		"workdocs:DeleteNotificationSubscription",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["workdocs:DeleteUser"];
	/** IAM actions required for the DescribeActivities API call. */
	static readonly DESCRIBE_ACTIVITIES: string[] = [
		"workdocs:DescribeActivities",
	];
	/** IAM actions required for the DescribeComments API call. */
	static readonly DESCRIBE_COMMENTS: string[] = ["workdocs:DescribeComments"];
	/** IAM actions required for the DescribeDocumentVersions API call. */
	static readonly DESCRIBE_DOCUMENT_VERSIONS: string[] = [
		"workdocs:DescribeDocumentVersions",
	];
	/** IAM actions required for the DescribeFolderContents API call. */
	static readonly DESCRIBE_FOLDER_CONTENTS: string[] = [
		"workdocs:DescribeFolderContents",
	];
	/** IAM actions required for the DescribeGroups API call. */
	static readonly DESCRIBE_GROUPS: string[] = ["workdocs:DescribeGroups"];
	/** IAM actions required for the DescribeNotificationSubscriptions API call. */
	static readonly DESCRIBE_NOTIFICATION_SUBSCRIPTIONS: string[] = [
		"workdocs:DescribeNotificationSubscriptions",
	];
	/** IAM actions required for the DescribeResourcePermissions API call. */
	static readonly DESCRIBE_RESOURCE_PERMISSIONS: string[] = [
		"workdocs:DescribeResourcePermissions",
	];
	/** IAM actions required for the DescribeRootFolders API call. */
	static readonly DESCRIBE_ROOT_FOLDERS: string[] = [];
	/** IAM actions required for the DescribeUsers API call. */
	static readonly DESCRIBE_USERS: string[] = ["workdocs:DescribeUsers"];
	/** IAM actions required for the GetCurrentUser API call. */
	static readonly GET_CURRENT_USER: string[] = [];
	/** IAM actions required for the GetDocument API call. */
	static readonly GET_DOCUMENT: string[] = ["workdocs:GetDocument"];
	/** IAM actions required for the GetDocumentPath API call. */
	static readonly GET_DOCUMENT_PATH: string[] = ["workdocs:GetDocumentPath"];
	/** IAM actions required for the GetDocumentVersion API call. */
	static readonly GET_DOCUMENT_VERSION: string[] = [
		"workdocs:DownloadDocumentVersion",
		"workdocs:GetDocumentVersion",
	];
	/** IAM actions required for the GetFolder API call. */
	static readonly GET_FOLDER: string[] = ["workdocs:GetFolder"];
	/** IAM actions required for the GetFolderPath API call. */
	static readonly GET_FOLDER_PATH: string[] = ["workdocs:GetFolderPath"];
	/** IAM actions required for the GetResources API call. */
	static readonly GET_RESOURCES: string[] = ["workdocs:GetResources"];
	/** IAM actions required for the InitiateDocumentVersionUpload API call. */
	static readonly INITIATE_DOCUMENT_VERSION_UPLOAD: string[] = [
		"workdocs:InitiateDocumentVersionUpload",
	];
	/** IAM actions required for the RemoveAllResourcePermissions API call. */
	static readonly REMOVE_ALL_RESOURCE_PERMISSIONS: string[] = [
		"workdocs:RemoveAllResourcePermissions",
	];
	/** IAM actions required for the RemoveResourcePermission API call. */
	static readonly REMOVE_RESOURCE_PERMISSION: string[] = [
		"workdocs:RemoveResourcePermission",
	];
	/** IAM actions required for the RestoreDocumentVersions API call. */
	static readonly RESTORE_DOCUMENT_VERSIONS: string[] = [
		"workdocs:RestoreDocumentVersions",
	];
	/** IAM actions required for the SearchResources API call. */
	static readonly SEARCH_RESOURCES: string[] = ["workdocs:SearchResources"];
	/** IAM actions required for the UpdateDocument API call. */
	static readonly UPDATE_DOCUMENT: string[] = [
		"workdocs:DeleteDocument",
		"workdocs:InitiateDocumentVersionUpload",
		"workdocs:UpdateDocument",
	];
	/** IAM actions required for the UpdateDocumentVersion API call. */
	static readonly UPDATE_DOCUMENT_VERSION: string[] = [
		"workdocs:UpdateDocumentVersion",
	];
	/** IAM actions required for the UpdateFolder API call. */
	static readonly UPDATE_FOLDER: string[] = [
		"workdocs:CreateFolder",
		"workdocs:UpdateFolder",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = [
		"workdocs:UpdateUser",
		"workdocs:UpdateUserAdministrativeSettings",
	];
}
