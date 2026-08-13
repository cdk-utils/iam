// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codestar-connections.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codestar-connections service.
 */
export class CodestarConnectionsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codestar-connections";

	/** [Write] codestar-connections:CreateConnection */
	static readonly CREATE_CONNECTION = "codestar-connections:CreateConnection";
	/** [Write] codestar-connections:CreateHost */
	static readonly CREATE_HOST = "codestar-connections:CreateHost";
	/** [Write] codestar-connections:CreateRepositoryLink */
	static readonly CREATE_REPOSITORY_LINK =
		"codestar-connections:CreateRepositoryLink";
	/** [Write] codestar-connections:CreateSyncConfiguration */
	static readonly CREATE_SYNC_CONFIGURATION =
		"codestar-connections:CreateSyncConfiguration";
	/** [Write] codestar-connections:DeleteConnection */
	static readonly DELETE_CONNECTION = "codestar-connections:DeleteConnection";
	/** [Write] codestar-connections:DeleteHost */
	static readonly DELETE_HOST = "codestar-connections:DeleteHost";
	/** [Write] codestar-connections:DeleteRepositoryLink */
	static readonly DELETE_REPOSITORY_LINK =
		"codestar-connections:DeleteRepositoryLink";
	/** [Write] codestar-connections:DeleteSyncConfiguration */
	static readonly DELETE_SYNC_CONFIGURATION =
		"codestar-connections:DeleteSyncConfiguration";
	/** [Read] codestar-connections:GetConnection */
	static readonly GET_CONNECTION = "codestar-connections:GetConnection";
	/** [Read] codestar-connections:GetConnectionToken */
	static readonly GET_CONNECTION_TOKEN =
		"codestar-connections:GetConnectionToken";
	/** [Read] codestar-connections:GetHost */
	static readonly GET_HOST = "codestar-connections:GetHost";
	/** [Read] codestar-connections:GetIndividualAccessToken */
	static readonly GET_INDIVIDUAL_ACCESS_TOKEN =
		"codestar-connections:GetIndividualAccessToken";
	/** [Read] codestar-connections:GetInstallationUrl */
	static readonly GET_INSTALLATION_URL =
		"codestar-connections:GetInstallationUrl";
	/** [Read] codestar-connections:GetRepositoryLink */
	static readonly GET_REPOSITORY_LINK =
		"codestar-connections:GetRepositoryLink";
	/** [Read] codestar-connections:GetRepositorySyncStatus */
	static readonly GET_REPOSITORY_SYNC_STATUS =
		"codestar-connections:GetRepositorySyncStatus";
	/** [Read] codestar-connections:GetResourceSyncStatus */
	static readonly GET_RESOURCE_SYNC_STATUS =
		"codestar-connections:GetResourceSyncStatus";
	/** [Read] codestar-connections:GetSyncBlockerSummary */
	static readonly GET_SYNC_BLOCKER_SUMMARY =
		"codestar-connections:GetSyncBlockerSummary";
	/** [Read] codestar-connections:GetSyncConfiguration */
	static readonly GET_SYNC_CONFIGURATION =
		"codestar-connections:GetSyncConfiguration";
	/** [List] codestar-connections:ListConnections */
	static readonly LIST_CONNECTIONS = "codestar-connections:ListConnections";
	/** [List] codestar-connections:ListHosts */
	static readonly LIST_HOSTS = "codestar-connections:ListHosts";
	/** [List] codestar-connections:ListInstallationTargets */
	static readonly LIST_INSTALLATION_TARGETS =
		"codestar-connections:ListInstallationTargets";
	/** [List] codestar-connections:ListRepositoryLinks */
	static readonly LIST_REPOSITORY_LINKS =
		"codestar-connections:ListRepositoryLinks";
	/** [List] codestar-connections:ListRepositorySyncDefinitions */
	static readonly LIST_REPOSITORY_SYNC_DEFINITIONS =
		"codestar-connections:ListRepositorySyncDefinitions";
	/** [List] codestar-connections:ListSyncConfigurations */
	static readonly LIST_SYNC_CONFIGURATIONS =
		"codestar-connections:ListSyncConfigurations";
	/** [List] codestar-connections:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"codestar-connections:ListTagsForResource";
	/** [Read] codestar-connections:PassConnection */
	static readonly PASS_CONNECTION = "codestar-connections:PassConnection";
	/** [Read] codestar-connections:PassRepository */
	static readonly PASS_REPOSITORY = "codestar-connections:PassRepository";
	/** [Read] codestar-connections:RegisterAppCode */
	static readonly REGISTER_APP_CODE = "codestar-connections:RegisterAppCode";
	/** [Read] codestar-connections:StartAppRegistrationHandshake */
	static readonly START_APP_REGISTRATION_HANDSHAKE =
		"codestar-connections:StartAppRegistrationHandshake";
	/** [Read] codestar-connections:StartOAuthHandshake */
	static readonly START_O_AUTH_HANDSHAKE =
		"codestar-connections:StartOAuthHandshake";
	/** [Tagging] codestar-connections:TagResource */
	static readonly TAG_RESOURCE = "codestar-connections:TagResource";
	/** [Tagging] codestar-connections:UntagResource */
	static readonly UNTAG_RESOURCE = "codestar-connections:UntagResource";
	/** [Write] codestar-connections:UpdateConnectionInstallation */
	static readonly UPDATE_CONNECTION_INSTALLATION =
		"codestar-connections:UpdateConnectionInstallation";
	/** [Write] codestar-connections:UpdateHost */
	static readonly UPDATE_HOST = "codestar-connections:UpdateHost";
	/** [Write] codestar-connections:UpdateRepositoryLink */
	static readonly UPDATE_REPOSITORY_LINK =
		"codestar-connections:UpdateRepositoryLink";
	/** [Write] codestar-connections:UpdateSyncBlocker */
	static readonly UPDATE_SYNC_BLOCKER =
		"codestar-connections:UpdateSyncBlocker";
	/** [Write] codestar-connections:UpdateSyncConfiguration */
	static readonly UPDATE_SYNC_CONFIGURATION =
		"codestar-connections:UpdateSyncConfiguration";
	/** [Read] codestar-connections:UseConnection */
	static readonly USE_CONNECTION = "codestar-connections:UseConnection";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodestarConnectionsActions.GET_CONNECTION,
		CodestarConnectionsActions.GET_CONNECTION_TOKEN,
		CodestarConnectionsActions.GET_HOST,
		CodestarConnectionsActions.GET_INDIVIDUAL_ACCESS_TOKEN,
		CodestarConnectionsActions.GET_INSTALLATION_URL,
		CodestarConnectionsActions.GET_REPOSITORY_LINK,
		CodestarConnectionsActions.GET_REPOSITORY_SYNC_STATUS,
		CodestarConnectionsActions.GET_RESOURCE_SYNC_STATUS,
		CodestarConnectionsActions.GET_SYNC_BLOCKER_SUMMARY,
		CodestarConnectionsActions.GET_SYNC_CONFIGURATION,
		CodestarConnectionsActions.PASS_CONNECTION,
		CodestarConnectionsActions.PASS_REPOSITORY,
		CodestarConnectionsActions.REGISTER_APP_CODE,
		CodestarConnectionsActions.START_APP_REGISTRATION_HANDSHAKE,
		CodestarConnectionsActions.START_O_AUTH_HANDSHAKE,
		CodestarConnectionsActions.USE_CONNECTION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodestarConnectionsActions.CREATE_CONNECTION,
		CodestarConnectionsActions.CREATE_HOST,
		CodestarConnectionsActions.CREATE_REPOSITORY_LINK,
		CodestarConnectionsActions.CREATE_SYNC_CONFIGURATION,
		CodestarConnectionsActions.DELETE_CONNECTION,
		CodestarConnectionsActions.DELETE_HOST,
		CodestarConnectionsActions.DELETE_REPOSITORY_LINK,
		CodestarConnectionsActions.DELETE_SYNC_CONFIGURATION,
		CodestarConnectionsActions.UPDATE_CONNECTION_INSTALLATION,
		CodestarConnectionsActions.UPDATE_HOST,
		CodestarConnectionsActions.UPDATE_REPOSITORY_LINK,
		CodestarConnectionsActions.UPDATE_SYNC_BLOCKER,
		CodestarConnectionsActions.UPDATE_SYNC_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodestarConnectionsActions.LIST_CONNECTIONS,
		CodestarConnectionsActions.LIST_HOSTS,
		CodestarConnectionsActions.LIST_INSTALLATION_TARGETS,
		CodestarConnectionsActions.LIST_REPOSITORY_LINKS,
		CodestarConnectionsActions.LIST_REPOSITORY_SYNC_DEFINITIONS,
		CodestarConnectionsActions.LIST_SYNC_CONFIGURATIONS,
		CodestarConnectionsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodestarConnectionsActions.TAG_RESOURCE,
		CodestarConnectionsActions.UNTAG_RESOURCE,
	];
}

const ConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codestar-connections:(?<region>[^:]*):(?<account>[^:]*):connection/(?<connectionId>[^:/?]+)$",
);
const HostArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codestar-connections:(?<region>[^:]*):(?<account>[^:]*):host/(?<hostId>[^:/?]+)$",
);
const RepositoryLinkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codestar-connections:(?<region>[^:]*):(?<account>[^:]*):repository-link/(?<repositoryLinkId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codestar-connections resources.
 */
export class CodestarConnectionsResources {
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
		return `arn:${props.partition ?? "aws"}:codestar-connections:${props.region ?? "*"}:${props.account ?? "*"}:connection/${props.connectionId}`;
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
		return `arn:${props.partition ?? "aws"}:codestar-connections:${props.region ?? "*"}:${props.account ?? "*"}:host/${props.hostId}`;
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
		return `arn:${props.partition ?? "aws"}:codestar-connections:${props.region ?? "*"}:${props.account ?? "*"}:repository-link/${props.repositoryLinkId}`;
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
 * API operation to required IAM actions mapping for codestar-connections.
 */
export class CodestarConnectionsOperations {
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
	static readonly LIST_REPOSITORY_SYNC_DEFINITIONS: string[] = [
		"codeconnections:ListRepositorySyncDefinitions",
		"codestar-connections:ListRepositorySyncDefinitions",
	];
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
	static readonly UPDATE_SYNC_BLOCKER: string[] = [
		"codeconnections:UpdateSyncBlocker",
		"codestar-connections:UpdateSyncBlocker",
	];
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
 * Condition key constants and builders for codestar-connections.
 */
export class CodestarConnectionsConditions {
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CREATE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codestar-connections:ProviderType",
	];
	/** Condition keys applicable to the CreateHost action. */
	static readonly CREATE_HOST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codestar-connections:ProviderType",
		"codestar-connections:VpcId",
	];
	/** Condition keys applicable to the CreateRepositoryLink action. */
	static readonly CREATE_REPOSITORY_LINK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSyncConfiguration action. */
	static readonly CREATE_SYNC_CONFIGURATION_CONDITION_KEYS: string[] = [
		"codestar-connections:Branch",
	];
	/** Condition keys applicable to the GetIndividualAccessToken action. */
	static readonly GET_INDIVIDUAL_ACCESS_TOKEN_CONDITION_KEYS: string[] = [
		"codestar-connections:ProviderType",
	];
	/** Condition keys applicable to the GetInstallationUrl action. */
	static readonly GET_INSTALLATION_URL_CONDITION_KEYS: string[] = [
		"codestar-connections:ProviderType",
	];
	/** Condition keys applicable to the GetRepositorySyncStatus action. */
	static readonly GET_REPOSITORY_SYNC_STATUS_CONDITION_KEYS: string[] = [
		"codestar-connections:Branch",
	];
	/** Condition keys applicable to the ListConnections action. */
	static readonly LIST_CONNECTIONS_CONDITION_KEYS: string[] = [
		"codestar-connections:ProviderTypeFilter",
	];
	/** Condition keys applicable to the ListHosts action. */
	static readonly LIST_HOSTS_CONDITION_KEYS: string[] = [
		"codestar-connections:ProviderTypeFilter",
	];
	/** Condition keys applicable to the PassConnection action. */
	static readonly PASS_CONNECTION_CONDITION_KEYS: string[] = [
		"codestar-connections:PassedToService",
	];
	/** Condition keys applicable to the PassRepository action. */
	static readonly PASS_REPOSITORY_CONDITION_KEYS: string[] = [
		"codestar-connections:PassedToService",
	];
	/** Condition keys applicable to the RegisterAppCode action. */
	static readonly REGISTER_APP_CODE_CONDITION_KEYS: string[] = [
		"codestar-connections:HostArn",
	];
	/** Condition keys applicable to the StartAppRegistrationHandshake action. */
	static readonly START_APP_REGISTRATION_HANDSHAKE_CONDITION_KEYS: string[] = [
		"codestar-connections:HostArn",
	];
	/** Condition keys applicable to the StartOAuthHandshake action. */
	static readonly START_O_AUTH_HANDSHAKE_CONDITION_KEYS: string[] = [
		"codestar-connections:ProviderType",
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
		"codestar-connections:InstallationId",
	];
	/** Condition keys applicable to the UpdateHost action. */
	static readonly UPDATE_HOST_CONDITION_KEYS: string[] = [
		"codestar-connections:VpcId",
	];
	/** Condition keys applicable to the UpdateSyncConfiguration action. */
	static readonly UPDATE_SYNC_CONFIGURATION_CONDITION_KEYS: string[] = [
		"codestar-connections:Branch",
	];
	/** Condition keys applicable to the UseConnection action. */
	static readonly USE_CONNECTION_CONDITION_KEYS: string[] = [
		"codestar-connections:BranchName",
		"codestar-connections:FullRepositoryId",
		"codestar-connections:OwnerId",
		"codestar-connections:ProviderAction",
		"codestar-connections:ProviderPermissionsRequired",
		"codestar-connections:RepositoryName",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: codestar-connections:Branch (String) */
	static readonly BRANCH = "codestar-connections:Branch";
	/** Condition key: codestar-connections:BranchName (String) */
	static readonly BRANCH_NAME = "codestar-connections:BranchName";
	/** Condition key: codestar-connections:FullRepositoryId (String) */
	static readonly FULL_REPOSITORY_ID = "codestar-connections:FullRepositoryId";
	/** Condition key: codestar-connections:HostArn (ARN) */
	static readonly HOST_ARN = "codestar-connections:HostArn";
	/** Condition key: codestar-connections:InstallationId (String) */
	static readonly INSTALLATION_ID = "codestar-connections:InstallationId";
	/** Condition key: codestar-connections:OwnerId (String) */
	static readonly OWNER_ID = "codestar-connections:OwnerId";
	/** Condition key: codestar-connections:PassedToService (String) */
	static readonly PASSED_TO_SERVICE = "codestar-connections:PassedToService";
	/** Condition key: codestar-connections:ProviderAction (String) */
	static readonly PROVIDER_ACTION = "codestar-connections:ProviderAction";
	/** Condition key: codestar-connections:ProviderPermissionsRequired (String) */
	static readonly PROVIDER_PERMISSIONS_REQUIRED =
		"codestar-connections:ProviderPermissionsRequired";
	/** Condition key: codestar-connections:ProviderType (String) */
	static readonly PROVIDER_TYPE = "codestar-connections:ProviderType";
	/** Condition key: codestar-connections:ProviderTypeFilter (String) */
	static readonly PROVIDER_TYPE_FILTER =
		"codestar-connections:ProviderTypeFilter";
	/** Condition key: codestar-connections:RepositoryName (String) */
	static readonly REPOSITORY_NAME = "codestar-connections:RepositoryName";
	/** Condition key: codestar-connections:VpcId (String) */
	static readonly VPC_ID = "codestar-connections:VpcId";

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
	 * Generates a condition block for `codestar-connections:Branch`.
	 */
	static branch(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codestar-connections:Branch": value } };
	}

	/**
	 * Generates a condition block for `codestar-connections:BranchName`.
	 */
	static branchName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codestar-connections:BranchName": value } };
	}

	/**
	 * Generates a condition block for `codestar-connections:FullRepositoryId`.
	 */
	static fullRepositoryId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codestar-connections:FullRepositoryId": value } };
	}

	/**
	 * Generates a condition block for `codestar-connections:HostArn`.
	 */
	static hostARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "codestar-connections:HostArn": value } };
	}

	/**
	 * Generates a condition block for `codestar-connections:InstallationId`.
	 */
	static installationId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codestar-connections:InstallationId": value } };
	}

	/**
	 * Generates a condition block for `codestar-connections:OwnerId`.
	 */
	static ownerId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codestar-connections:OwnerId": value } };
	}

	/**
	 * Generates a condition block for `codestar-connections:PassedToService`.
	 */
	static passedToService(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codestar-connections:PassedToService": value } };
	}

	/**
	 * Generates a condition block for `codestar-connections:ProviderAction`.
	 */
	static providerAction(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codestar-connections:ProviderAction": value } };
	}

	/**
	 * Generates a condition block for `codestar-connections:ProviderPermissionsRequired`.
	 */
	static providerPermissionsRequired(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"codestar-connections:ProviderPermissionsRequired": value,
			},
		};
	}

	/**
	 * Generates a condition block for `codestar-connections:ProviderType`.
	 */
	static providerType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codestar-connections:ProviderType": value } };
	}

	/**
	 * Generates a condition block for `codestar-connections:ProviderTypeFilter`.
	 */
	static providerTypeFilter(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "codestar-connections:ProviderTypeFilter": value },
		};
	}

	/**
	 * Generates a condition block for `codestar-connections:RepositoryName`.
	 */
	static repositoryName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codestar-connections:RepositoryName": value } };
	}

	/**
	 * Generates a condition block for `codestar-connections:VpcId`.
	 */
	static vpcId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codestar-connections:VpcId": value } };
	}
}
