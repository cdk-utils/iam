// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codeconnections.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codeconnections service.
 */
export class CodeconnectionsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codeconnections";

	/** [Write] codeconnections:CreateConnection */
	static readonly CREATE_CONNECTION = "codeconnections:CreateConnection";
	/** [Write] codeconnections:CreateHost */
	static readonly CREATE_HOST = "codeconnections:CreateHost";
	/** [Write] codeconnections:CreateRepositoryLink */
	static readonly CREATE_REPOSITORY_LINK =
		"codeconnections:CreateRepositoryLink";
	/** [Write] codeconnections:CreateSyncConfiguration */
	static readonly CREATE_SYNC_CONFIGURATION =
		"codeconnections:CreateSyncConfiguration";
	/** [Write] codeconnections:DeleteConnection */
	static readonly DELETE_CONNECTION = "codeconnections:DeleteConnection";
	/** [Write] codeconnections:DeleteHost */
	static readonly DELETE_HOST = "codeconnections:DeleteHost";
	/** [Write] codeconnections:DeleteRepositoryLink */
	static readonly DELETE_REPOSITORY_LINK =
		"codeconnections:DeleteRepositoryLink";
	/** [Write] codeconnections:DeleteSyncConfiguration */
	static readonly DELETE_SYNC_CONFIGURATION =
		"codeconnections:DeleteSyncConfiguration";
	/** [Read] codeconnections:GetConnection */
	static readonly GET_CONNECTION = "codeconnections:GetConnection";
	/** [Read] codeconnections:GetConnectionToken */
	static readonly GET_CONNECTION_TOKEN = "codeconnections:GetConnectionToken";
	/** [Read] codeconnections:GetHost */
	static readonly GET_HOST = "codeconnections:GetHost";
	/** [Read] codeconnections:GetIndividualAccessToken */
	static readonly GET_INDIVIDUAL_ACCESS_TOKEN =
		"codeconnections:GetIndividualAccessToken";
	/** [Read] codeconnections:GetInstallationUrl */
	static readonly GET_INSTALLATION_URL = "codeconnections:GetInstallationUrl";
	/** [Read] codeconnections:GetRepositoryLink */
	static readonly GET_REPOSITORY_LINK = "codeconnections:GetRepositoryLink";
	/** [Read] codeconnections:GetRepositorySyncStatus */
	static readonly GET_REPOSITORY_SYNC_STATUS =
		"codeconnections:GetRepositorySyncStatus";
	/** [Read] codeconnections:GetResourceSyncStatus */
	static readonly GET_RESOURCE_SYNC_STATUS =
		"codeconnections:GetResourceSyncStatus";
	/** [Read] codeconnections:GetSyncBlockerSummary */
	static readonly GET_SYNC_BLOCKER_SUMMARY =
		"codeconnections:GetSyncBlockerSummary";
	/** [Read] codeconnections:GetSyncConfiguration */
	static readonly GET_SYNC_CONFIGURATION =
		"codeconnections:GetSyncConfiguration";
	/** [List] codeconnections:ListConnections */
	static readonly LIST_CONNECTIONS = "codeconnections:ListConnections";
	/** [List] codeconnections:ListHosts */
	static readonly LIST_HOSTS = "codeconnections:ListHosts";
	/** [List] codeconnections:ListInstallationTargets */
	static readonly LIST_INSTALLATION_TARGETS =
		"codeconnections:ListInstallationTargets";
	/** [List] codeconnections:ListRepositoryLinks */
	static readonly LIST_REPOSITORY_LINKS = "codeconnections:ListRepositoryLinks";
	/** [List] codeconnections:ListRepositorySyncDefinitions */
	static readonly LIST_REPOSITORY_SYNC_DEFINITIONS =
		"codeconnections:ListRepositorySyncDefinitions";
	/** [List] codeconnections:ListSyncConfigurations */
	static readonly LIST_SYNC_CONFIGURATIONS =
		"codeconnections:ListSyncConfigurations";
	/** [List] codeconnections:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"codeconnections:ListTagsForResource";
	/** [Read] codeconnections:PassConnection */
	static readonly PASS_CONNECTION = "codeconnections:PassConnection";
	/** [Read] codeconnections:PassRepository */
	static readonly PASS_REPOSITORY = "codeconnections:PassRepository";
	/** [Read] codeconnections:RegisterAppCode */
	static readonly REGISTER_APP_CODE = "codeconnections:RegisterAppCode";
	/** [Read] codeconnections:StartAppRegistrationHandshake */
	static readonly START_APP_REGISTRATION_HANDSHAKE =
		"codeconnections:StartAppRegistrationHandshake";
	/** [Read] codeconnections:StartOAuthHandshake */
	static readonly START_O_AUTH_HANDSHAKE =
		"codeconnections:StartOAuthHandshake";
	/** [Tagging] codeconnections:TagResource */
	static readonly TAG_RESOURCE = "codeconnections:TagResource";
	/** [Tagging] codeconnections:UntagResource */
	static readonly UNTAG_RESOURCE = "codeconnections:UntagResource";
	/** [Write] codeconnections:UpdateConnectionInstallation */
	static readonly UPDATE_CONNECTION_INSTALLATION =
		"codeconnections:UpdateConnectionInstallation";
	/** [Write] codeconnections:UpdateHost */
	static readonly UPDATE_HOST = "codeconnections:UpdateHost";
	/** [Write] codeconnections:UpdateRepositoryLink */
	static readonly UPDATE_REPOSITORY_LINK =
		"codeconnections:UpdateRepositoryLink";
	/** [Write] codeconnections:UpdateSyncBlocker */
	static readonly UPDATE_SYNC_BLOCKER = "codeconnections:UpdateSyncBlocker";
	/** [Write] codeconnections:UpdateSyncConfiguration */
	static readonly UPDATE_SYNC_CONFIGURATION =
		"codeconnections:UpdateSyncConfiguration";
	/** [Read] codeconnections:UseConnection */
	static readonly USE_CONNECTION = "codeconnections:UseConnection";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodeconnectionsActions.GET_CONNECTION,
		CodeconnectionsActions.GET_CONNECTION_TOKEN,
		CodeconnectionsActions.GET_HOST,
		CodeconnectionsActions.GET_INDIVIDUAL_ACCESS_TOKEN,
		CodeconnectionsActions.GET_INSTALLATION_URL,
		CodeconnectionsActions.GET_REPOSITORY_LINK,
		CodeconnectionsActions.GET_REPOSITORY_SYNC_STATUS,
		CodeconnectionsActions.GET_RESOURCE_SYNC_STATUS,
		CodeconnectionsActions.GET_SYNC_BLOCKER_SUMMARY,
		CodeconnectionsActions.GET_SYNC_CONFIGURATION,
		CodeconnectionsActions.PASS_CONNECTION,
		CodeconnectionsActions.PASS_REPOSITORY,
		CodeconnectionsActions.REGISTER_APP_CODE,
		CodeconnectionsActions.START_APP_REGISTRATION_HANDSHAKE,
		CodeconnectionsActions.START_O_AUTH_HANDSHAKE,
		CodeconnectionsActions.USE_CONNECTION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodeconnectionsActions.CREATE_CONNECTION,
		CodeconnectionsActions.CREATE_HOST,
		CodeconnectionsActions.CREATE_REPOSITORY_LINK,
		CodeconnectionsActions.CREATE_SYNC_CONFIGURATION,
		CodeconnectionsActions.DELETE_CONNECTION,
		CodeconnectionsActions.DELETE_HOST,
		CodeconnectionsActions.DELETE_REPOSITORY_LINK,
		CodeconnectionsActions.DELETE_SYNC_CONFIGURATION,
		CodeconnectionsActions.UPDATE_CONNECTION_INSTALLATION,
		CodeconnectionsActions.UPDATE_HOST,
		CodeconnectionsActions.UPDATE_REPOSITORY_LINK,
		CodeconnectionsActions.UPDATE_SYNC_BLOCKER,
		CodeconnectionsActions.UPDATE_SYNC_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodeconnectionsActions.LIST_CONNECTIONS,
		CodeconnectionsActions.LIST_HOSTS,
		CodeconnectionsActions.LIST_INSTALLATION_TARGETS,
		CodeconnectionsActions.LIST_REPOSITORY_LINKS,
		CodeconnectionsActions.LIST_REPOSITORY_SYNC_DEFINITIONS,
		CodeconnectionsActions.LIST_SYNC_CONFIGURATIONS,
		CodeconnectionsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodeconnectionsActions.TAG_RESOURCE,
		CodeconnectionsActions.UNTAG_RESOURCE,
	];
}

const ConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codeconnections:(?<region>[^:]*):(?<account>[^:]*):connection/(?<connectionId>[^:/?]+)$",
);
const HostArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codeconnections:(?<region>[^:]*):(?<account>[^:]*):host/(?<hostId>[^:/?]+)$",
);
const RepositoryLinkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codeconnections:(?<region>[^:]*):(?<account>[^:]*):repository-link/(?<repositoryLinkId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codeconnections resources.
 */
export class CodeconnectionsResources {
	/**
	 * Builds an ARN for the Connection resource.
	 */
	static connection(props: {
		/** The ConnectionId component of the ARN. */
		readonly connectionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codeconnections:${props.region ?? "*"}:${props.account ?? "*"}:connection/${props.connectionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Connection resource.
	 */
	static isValidConnectionArn(arn: string): boolean {
		return ConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a Connection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectionId: string;
	} {
		const match = ConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectionId: match.groups!.connectionId,
		};
	}

	/**
	 * Builds an ARN for the Host resource.
	 */
	static host(props: {
		/** The HostId component of the ARN. */
		readonly hostId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codeconnections:${props.region ?? "*"}:${props.account ?? "*"}:host/${props.hostId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Host resource.
	 */
	static isValidHostArn(arn: string): boolean {
		return HostArnRegex.test(arn);
	}

	/**
	 * Parses a Host ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHostArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		hostId: string;
	} {
		const match = HostArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Host ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			hostId: match.groups!.hostId,
		};
	}

	/**
	 * Builds an ARN for the RepositoryLink resource.
	 */
	static repositoryLink(props: {
		/** The RepositoryLinkId component of the ARN. */
		readonly repositoryLinkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codeconnections:${props.region ?? "*"}:${props.account ?? "*"}:repository-link/${props.repositoryLinkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RepositoryLink resource.
	 */
	static isValidRepositoryLinkArn(arn: string): boolean {
		return RepositoryLinkArnRegex.test(arn);
	}

	/**
	 * Parses a RepositoryLink ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRepositoryLinkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		repositoryLinkId: string;
	} {
		const match = RepositoryLinkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RepositoryLink ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			repositoryLinkId: match.groups!.repositoryLinkId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for codeconnections.
 */
export class CodeconnectionsOperations {
	/** IAM actions required for the CreateConnection API call. */
	static readonly CREATE_CONNECTION: string[] = [
		"codeconnections:CreateConnection",
		"codestar-connections:CreateConnection",
		"codeconnections:TagResource",
		"codestar-connections:TagResource",
	];
	/** IAM actions required for the CreateHost API call. */
	static readonly CREATE_HOST: string[] = [
		"codeconnections:CreateHost",
		"codestar-connections:CreateHost",
		"codeconnections:TagResource",
		"codestar-connections:TagResource",
	];
	/** IAM actions required for the CreateRepositoryLink API call. */
	static readonly CREATE_REPOSITORY_LINK: string[] = [
		"codeconnections:CreateRepositoryLink",
		"codestar-connections:CreateRepositoryLink",
		"codeconnections:PassConnection",
		"codestar-connections:PassConnection",
		"codeconnections:TagResource",
		"codestar-connections:TagResource",
		"codeconnections:UseConnection",
		"codestar-connections:UseConnection",
	];
	/** IAM actions required for the CreateSyncConfiguration API call. */
	static readonly CREATE_SYNC_CONFIGURATION: string[] = [
		"codeconnections:CreateSyncConfiguration",
		"codestar-connections:CreateSyncConfiguration",
		"codeconnections:PassRepository",
		"codestar-connections:PassRepository",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DELETE_CONNECTION: string[] = [
		"codeconnections:DeleteConnection",
		"codestar-connections:DeleteConnection",
	];
	/** IAM actions required for the DeleteHost API call. */
	static readonly DELETE_HOST: string[] = [
		"codeconnections:DeleteHost",
		"codestar-connections:DeleteHost",
	];
	/** IAM actions required for the DeleteRepositoryLink API call. */
	static readonly DELETE_REPOSITORY_LINK: string[] = [
		"codeconnections:DeleteRepositoryLink",
		"codestar-connections:DeleteRepositoryLink",
	];
	/** IAM actions required for the DeleteSyncConfiguration API call. */
	static readonly DELETE_SYNC_CONFIGURATION: string[] = [
		"codeconnections:DeleteSyncConfiguration",
		"codestar-connections:DeleteSyncConfiguration",
	];
	/** IAM actions required for the GetConnection API call. */
	static readonly GET_CONNECTION: string[] = [
		"codeconnections:GetConnection",
		"codestar-connections:GetConnection",
	];
	/** IAM actions required for the GetHost API call. */
	static readonly GET_HOST: string[] = [
		"codeconnections:GetHost",
		"codestar-connections:GetHost",
	];
	/** IAM actions required for the GetRepositoryLink API call. */
	static readonly GET_REPOSITORY_LINK: string[] = [
		"codeconnections:GetRepositoryLink",
		"codestar-connections:GetRepositoryLink",
	];
	/** IAM actions required for the GetRepositorySyncStatus API call. */
	static readonly GET_REPOSITORY_SYNC_STATUS: string[] = [
		"codeconnections:GetRepositorySyncStatus",
		"codestar-connections:GetRepositorySyncStatus",
	];
	/** IAM actions required for the GetResourceSyncStatus API call. */
	static readonly GET_RESOURCE_SYNC_STATUS: string[] = [
		"codeconnections:GetResourceSyncStatus",
		"codestar-connections:GetResourceSyncStatus",
	];
	/** IAM actions required for the GetSyncBlockerSummary API call. */
	static readonly GET_SYNC_BLOCKER_SUMMARY: string[] = [
		"codeconnections:GetSyncBlockerSummary",
		"codestar-connections:GetSyncBlockerSummary",
	];
	/** IAM actions required for the GetSyncConfiguration API call. */
	static readonly GET_SYNC_CONFIGURATION: string[] = [
		"codeconnections:GetSyncConfiguration",
		"codestar-connections:GetSyncConfiguration",
	];
	/** IAM actions required for the ListConnections API call. */
	static readonly LIST_CONNECTIONS: string[] = [
		"codeconnections:ListConnections",
		"codestar-connections:ListConnections",
	];
	/** IAM actions required for the ListHosts API call. */
	static readonly LIST_HOSTS: string[] = [
		"codeconnections:ListHosts",
		"codestar-connections:ListHosts",
	];
	/** IAM actions required for the ListRepositoryLinks API call. */
	static readonly LIST_REPOSITORY_LINKS: string[] = [
		"codeconnections:ListRepositoryLinks",
		"codestar-connections:ListRepositoryLinks",
	];
	/** IAM actions required for the ListRepositorySyncDefinitions API call. */
	static readonly LIST_REPOSITORY_SYNC_DEFINITIONS: string[] = [];
	/** IAM actions required for the ListSyncConfigurations API call. */
	static readonly LIST_SYNC_CONFIGURATIONS: string[] = [
		"codeconnections:ListSyncConfigurations",
		"codestar-connections:ListSyncConfigurations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"codeconnections:ListTagsForResource",
		"codestar-connections:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"codeconnections:TagResource",
		"codestar-connections:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"codeconnections:UntagResource",
		"codestar-connections:UntagResource",
	];
	/** IAM actions required for the UpdateHost API call. */
	static readonly UPDATE_HOST: string[] = [
		"codeconnections:UpdateHost",
		"codestar-connections:UpdateHost",
	];
	/** IAM actions required for the UpdateRepositoryLink API call. */
	static readonly UPDATE_REPOSITORY_LINK: string[] = [
		"codeconnections:PassConnection",
		"codestar-connections:PassConnection",
		"codeconnections:UpdateRepositoryLink",
		"codestar-connections:UpdateRepositoryLink",
		"codeconnections:UseConnection",
		"codestar-connections:UseConnection",
	];
	/** IAM actions required for the UpdateSyncBlocker API call. */
	static readonly UPDATE_SYNC_BLOCKER: string[] = [];
	/** IAM actions required for the UpdateSyncConfiguration API call. */
	static readonly UPDATE_SYNC_CONFIGURATION: string[] = [
		"codeconnections:PassRepository",
		"codestar-connections:PassRepository",
		"iam:PassRole",
		"codeconnections:UpdateSyncConfiguration",
		"codestar-connections:UpdateSyncConfiguration",
	];
}

/**
 * Condition key constants and builders for codeconnections.
 */
export class CodeconnectionsConditions {
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CREATE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codeconnections:ProviderType",
	];
	/** Condition keys applicable to the CreateHost action. */
	static readonly CREATE_HOST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codeconnections:ProviderType",
		"codeconnections:VpcId",
	];
	/** Condition keys applicable to the CreateRepositoryLink action. */
	static readonly CREATE_REPOSITORY_LINK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSyncConfiguration action. */
	static readonly CREATE_SYNC_CONFIGURATION_CONDITION_KEYS: string[] = [
		"codeconnections:Branch",
	];
	/** Condition keys applicable to the GetIndividualAccessToken action. */
	static readonly GET_INDIVIDUAL_ACCESS_TOKEN_CONDITION_KEYS: string[] = [
		"codeconnections:ProviderType",
	];
	/** Condition keys applicable to the GetInstallationUrl action. */
	static readonly GET_INSTALLATION_URL_CONDITION_KEYS: string[] = [
		"codeconnections:ProviderType",
	];
	/** Condition keys applicable to the GetRepositorySyncStatus action. */
	static readonly GET_REPOSITORY_SYNC_STATUS_CONDITION_KEYS: string[] = [
		"codeconnections:Branch",
	];
	/** Condition keys applicable to the ListConnections action. */
	static readonly LIST_CONNECTIONS_CONDITION_KEYS: string[] = [
		"codeconnections:ProviderTypeFilter",
	];
	/** Condition keys applicable to the ListHosts action. */
	static readonly LIST_HOSTS_CONDITION_KEYS: string[] = [
		"codeconnections:ProviderTypeFilter",
	];
	/** Condition keys applicable to the PassConnection action. */
	static readonly PASS_CONNECTION_CONDITION_KEYS: string[] = [
		"codeconnections:PassedToService",
	];
	/** Condition keys applicable to the PassRepository action. */
	static readonly PASS_REPOSITORY_CONDITION_KEYS: string[] = [
		"codeconnections:PassedToService",
	];
	/** Condition keys applicable to the RegisterAppCode action. */
	static readonly REGISTER_APP_CODE_CONDITION_KEYS: string[] = [
		"codeconnections:HostArn",
	];
	/** Condition keys applicable to the StartAppRegistrationHandshake action. */
	static readonly START_APP_REGISTRATION_HANDSHAKE_CONDITION_KEYS: string[] = [
		"codeconnections:HostArn",
	];
	/** Condition keys applicable to the StartOAuthHandshake action. */
	static readonly START_O_AUTH_HANDSHAKE_CONDITION_KEYS: string[] = [
		"codeconnections:ProviderType",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateConnectionInstallation action. */
	static readonly UPDATE_CONNECTION_INSTALLATION_CONDITION_KEYS: string[] = [
		"codeconnections:InstallationId",
	];
	/** Condition keys applicable to the UpdateHost action. */
	static readonly UPDATE_HOST_CONDITION_KEYS: string[] = [
		"codeconnections:VpcId",
	];
	/** Condition keys applicable to the UpdateSyncConfiguration action. */
	static readonly UPDATE_SYNC_CONFIGURATION_CONDITION_KEYS: string[] = [
		"codeconnections:Branch",
	];
	/** Condition keys applicable to the UseConnection action. */
	static readonly USE_CONNECTION_CONDITION_KEYS: string[] = [
		"codeconnections:BranchName",
		"codeconnections:FullRepositoryId",
		"codeconnections:OwnerId",
		"codeconnections:ProviderAction",
		"codeconnections:ProviderPermissionsRequired",
		"codeconnections:RepositoryName",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: codeconnections:Branch (String) */
	static readonly BRANCH = "codeconnections:Branch";
	/** Condition key: codeconnections:BranchName (String) */
	static readonly BRANCH_NAME = "codeconnections:BranchName";
	/** Condition key: codeconnections:FullRepositoryId (String) */
	static readonly FULL_REPOSITORY_ID = "codeconnections:FullRepositoryId";
	/** Condition key: codeconnections:HostArn (ARN) */
	static readonly HOST_ARN = "codeconnections:HostArn";
	/** Condition key: codeconnections:InstallationId (String) */
	static readonly INSTALLATION_ID = "codeconnections:InstallationId";
	/** Condition key: codeconnections:OwnerId (String) */
	static readonly OWNER_ID = "codeconnections:OwnerId";
	/** Condition key: codeconnections:PassedToService (String) */
	static readonly PASSED_TO_SERVICE = "codeconnections:PassedToService";
	/** Condition key: codeconnections:ProviderAction (String) */
	static readonly PROVIDER_ACTION = "codeconnections:ProviderAction";
	/** Condition key: codeconnections:ProviderPermissionsRequired (String) */
	static readonly PROVIDER_PERMISSIONS_REQUIRED =
		"codeconnections:ProviderPermissionsRequired";
	/** Condition key: codeconnections:ProviderType (String) */
	static readonly PROVIDER_TYPE = "codeconnections:ProviderType";
	/** Condition key: codeconnections:ProviderTypeFilter (String) */
	static readonly PROVIDER_TYPE_FILTER = "codeconnections:ProviderTypeFilter";
	/** Condition key: codeconnections:RepositoryName (String) */
	static readonly REPOSITORY_NAME = "codeconnections:RepositoryName";
	/** Condition key: codeconnections:VpcId (String) */
	static readonly VPC_ID = "codeconnections:VpcId";

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
	 * Generates a condition block for `codeconnections:Branch`.
	 */
	static branch(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codeconnections:Branch": value } };
	}

	/**
	 * Generates a condition block for `codeconnections:BranchName`.
	 */
	static branchName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codeconnections:BranchName": value } };
	}

	/**
	 * Generates a condition block for `codeconnections:FullRepositoryId`.
	 */
	static fullRepositoryId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codeconnections:FullRepositoryId": value } };
	}

	/**
	 * Generates a condition block for `codeconnections:HostArn`.
	 */
	static hostARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "codeconnections:HostArn": value } };
	}

	/**
	 * Generates a condition block for `codeconnections:InstallationId`.
	 */
	static installationId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codeconnections:InstallationId": value } };
	}

	/**
	 * Generates a condition block for `codeconnections:OwnerId`.
	 */
	static ownerId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codeconnections:OwnerId": value } };
	}

	/**
	 * Generates a condition block for `codeconnections:PassedToService`.
	 */
	static passedToService(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codeconnections:PassedToService": value } };
	}

	/**
	 * Generates a condition block for `codeconnections:ProviderAction`.
	 */
	static providerAction(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codeconnections:ProviderAction": value } };
	}

	/**
	 * Generates a condition block for `codeconnections:ProviderPermissionsRequired`.
	 */
	static providerPermissionsRequired(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "codeconnections:ProviderPermissionsRequired": value },
		};
	}

	/**
	 * Generates a condition block for `codeconnections:ProviderType`.
	 */
	static providerType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codeconnections:ProviderType": value } };
	}

	/**
	 * Generates a condition block for `codeconnections:ProviderTypeFilter`.
	 */
	static providerTypeFilter(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codeconnections:ProviderTypeFilter": value } };
	}

	/**
	 * Generates a condition block for `codeconnections:RepositoryName`.
	 */
	static repositoryName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codeconnections:RepositoryName": value } };
	}

	/**
	 * Generates a condition block for `codeconnections:VpcId`.
	 */
	static vpcId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codeconnections:VpcId": value } };
	}
}
