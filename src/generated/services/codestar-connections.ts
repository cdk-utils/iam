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
	static readonly CreateConnection = "codestar-connections:CreateConnection";
	/** [Write] codestar-connections:CreateHost */
	static readonly CreateHost = "codestar-connections:CreateHost";
	/** [Write] codestar-connections:CreateRepositoryLink */
	static readonly CreateRepositoryLink =
		"codestar-connections:CreateRepositoryLink";
	/** [Write] codestar-connections:CreateSyncConfiguration */
	static readonly CreateSyncConfiguration =
		"codestar-connections:CreateSyncConfiguration";
	/** [Write] codestar-connections:DeleteConnection */
	static readonly DeleteConnection = "codestar-connections:DeleteConnection";
	/** [Write] codestar-connections:DeleteHost */
	static readonly DeleteHost = "codestar-connections:DeleteHost";
	/** [Write] codestar-connections:DeleteRepositoryLink */
	static readonly DeleteRepositoryLink =
		"codestar-connections:DeleteRepositoryLink";
	/** [Write] codestar-connections:DeleteSyncConfiguration */
	static readonly DeleteSyncConfiguration =
		"codestar-connections:DeleteSyncConfiguration";
	/** [Read] codestar-connections:GetConnection */
	static readonly actionGetConnection = "codestar-connections:GetConnection";
	/** [Read] codestar-connections:GetConnectionToken */
	static readonly actionGetConnectionToken =
		"codestar-connections:GetConnectionToken";
	/** [Read] codestar-connections:GetHost */
	static readonly actionGetHost = "codestar-connections:GetHost";
	/** [Read] codestar-connections:GetIndividualAccessToken */
	static readonly actionGetIndividualAccessToken =
		"codestar-connections:GetIndividualAccessToken";
	/** [Read] codestar-connections:GetInstallationUrl */
	static readonly actionGetInstallationUrl =
		"codestar-connections:GetInstallationUrl";
	/** [Read] codestar-connections:GetRepositoryLink */
	static readonly actionGetRepositoryLink =
		"codestar-connections:GetRepositoryLink";
	/** [Read] codestar-connections:GetRepositorySyncStatus */
	static readonly actionGetRepositorySyncStatus =
		"codestar-connections:GetRepositorySyncStatus";
	/** [Read] codestar-connections:GetResourceSyncStatus */
	static readonly actionGetResourceSyncStatus =
		"codestar-connections:GetResourceSyncStatus";
	/** [Read] codestar-connections:GetSyncBlockerSummary */
	static readonly actionGetSyncBlockerSummary =
		"codestar-connections:GetSyncBlockerSummary";
	/** [Read] codestar-connections:GetSyncConfiguration */
	static readonly actionGetSyncConfiguration =
		"codestar-connections:GetSyncConfiguration";
	/** [List] codestar-connections:ListConnections */
	static readonly ListConnections = "codestar-connections:ListConnections";
	/** [List] codestar-connections:ListHosts */
	static readonly ListHosts = "codestar-connections:ListHosts";
	/** [List] codestar-connections:ListInstallationTargets */
	static readonly ListInstallationTargets =
		"codestar-connections:ListInstallationTargets";
	/** [List] codestar-connections:ListRepositoryLinks */
	static readonly ListRepositoryLinks =
		"codestar-connections:ListRepositoryLinks";
	/** [List] codestar-connections:ListRepositorySyncDefinitions */
	static readonly ListRepositorySyncDefinitions =
		"codestar-connections:ListRepositorySyncDefinitions";
	/** [List] codestar-connections:ListSyncConfigurations */
	static readonly ListSyncConfigurations =
		"codestar-connections:ListSyncConfigurations";
	/** [List] codestar-connections:ListTagsForResource */
	static readonly ListTagsForResource =
		"codestar-connections:ListTagsForResource";
	/** [Read] codestar-connections:PassConnection */
	static readonly PassConnection = "codestar-connections:PassConnection";
	/** [Read] codestar-connections:PassRepository */
	static readonly PassRepository = "codestar-connections:PassRepository";
	/** [Read] codestar-connections:RegisterAppCode */
	static readonly RegisterAppCode = "codestar-connections:RegisterAppCode";
	/** [Read] codestar-connections:StartAppRegistrationHandshake */
	static readonly StartAppRegistrationHandshake =
		"codestar-connections:StartAppRegistrationHandshake";
	/** [Read] codestar-connections:StartOAuthHandshake */
	static readonly StartOAuthHandshake =
		"codestar-connections:StartOAuthHandshake";
	/** [Tagging] codestar-connections:TagResource */
	static readonly TagResource = "codestar-connections:TagResource";
	/** [Tagging] codestar-connections:UntagResource */
	static readonly UntagResource = "codestar-connections:UntagResource";
	/** [Write] codestar-connections:UpdateConnectionInstallation */
	static readonly UpdateConnectionInstallation =
		"codestar-connections:UpdateConnectionInstallation";
	/** [Write] codestar-connections:UpdateHost */
	static readonly UpdateHost = "codestar-connections:UpdateHost";
	/** [Write] codestar-connections:UpdateRepositoryLink */
	static readonly UpdateRepositoryLink =
		"codestar-connections:UpdateRepositoryLink";
	/** [Write] codestar-connections:UpdateSyncBlocker */
	static readonly UpdateSyncBlocker = "codestar-connections:UpdateSyncBlocker";
	/** [Write] codestar-connections:UpdateSyncConfiguration */
	static readonly UpdateSyncConfiguration =
		"codestar-connections:UpdateSyncConfiguration";
	/** [Read] codestar-connections:UseConnection */
	static readonly UseConnection = "codestar-connections:UseConnection";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodestarConnectionsActions.actionGetConnection,
		CodestarConnectionsActions.actionGetConnectionToken,
		CodestarConnectionsActions.actionGetHost,
		CodestarConnectionsActions.actionGetIndividualAccessToken,
		CodestarConnectionsActions.actionGetInstallationUrl,
		CodestarConnectionsActions.actionGetRepositoryLink,
		CodestarConnectionsActions.actionGetRepositorySyncStatus,
		CodestarConnectionsActions.actionGetResourceSyncStatus,
		CodestarConnectionsActions.actionGetSyncBlockerSummary,
		CodestarConnectionsActions.actionGetSyncConfiguration,
		CodestarConnectionsActions.PassConnection,
		CodestarConnectionsActions.PassRepository,
		CodestarConnectionsActions.RegisterAppCode,
		CodestarConnectionsActions.StartAppRegistrationHandshake,
		CodestarConnectionsActions.StartOAuthHandshake,
		CodestarConnectionsActions.UseConnection,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodestarConnectionsActions.CreateConnection,
		CodestarConnectionsActions.CreateHost,
		CodestarConnectionsActions.CreateRepositoryLink,
		CodestarConnectionsActions.CreateSyncConfiguration,
		CodestarConnectionsActions.DeleteConnection,
		CodestarConnectionsActions.DeleteHost,
		CodestarConnectionsActions.DeleteRepositoryLink,
		CodestarConnectionsActions.DeleteSyncConfiguration,
		CodestarConnectionsActions.UpdateConnectionInstallation,
		CodestarConnectionsActions.UpdateHost,
		CodestarConnectionsActions.UpdateRepositoryLink,
		CodestarConnectionsActions.UpdateSyncBlocker,
		CodestarConnectionsActions.UpdateSyncConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodestarConnectionsActions.ListConnections,
		CodestarConnectionsActions.ListHosts,
		CodestarConnectionsActions.ListInstallationTargets,
		CodestarConnectionsActions.ListRepositoryLinks,
		CodestarConnectionsActions.ListRepositorySyncDefinitions,
		CodestarConnectionsActions.ListSyncConfigurations,
		CodestarConnectionsActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodestarConnectionsActions.TagResource,
		CodestarConnectionsActions.UntagResource,
	];
}

/**
 * Properties for building a Connection ARN.
 */
export interface CodestarConnectionsConnectionArnProps {
	/** The ConnectionId component of the ARN. */
	readonly connectionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Connection ARN.
 */
export interface CodestarConnectionsConnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectionId component. */
	readonly connectionId: string;
}

/**
 * Properties for building a Host ARN.
 */
export interface CodestarConnectionsHostArnProps {
	/** The HostId component of the ARN. */
	readonly hostId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Host ARN.
 */
export interface CodestarConnectionsHostArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HostId component. */
	readonly hostId: string;
}

/**
 * Properties for building a RepositoryLink ARN.
 */
export interface CodestarConnectionsRepositoryLinkArnProps {
	/** The RepositoryLinkId component of the ARN. */
	readonly repositoryLinkId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RepositoryLink ARN.
 */
export interface CodestarConnectionsRepositoryLinkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RepositoryLinkId component. */
	readonly repositoryLinkId: string;
}

const ConnectionArnRegex =
	/^arn:(?<partition>[^:]+):codestar-connections:(?<region>[^:]*):(?<account>[^:]*):connection\/(?<connectionId>[^:/?]+)$/;
const HostArnRegex =
	/^arn:(?<partition>[^:]+):codestar-connections:(?<region>[^:]*):(?<account>[^:]*):host\/(?<hostId>[^:/?]+)$/;
const RepositoryLinkArnRegex =
	/^arn:(?<partition>[^:]+):codestar-connections:(?<region>[^:]*):(?<account>[^:]*):repository-link\/(?<repositoryLinkId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codestar-connections resources.
 */
export class CodestarConnectionsResources {
	/**
	 * Builds an ARN for the Connection resource.
	 */
	static connection(props: CodestarConnectionsConnectionArnProps): string {
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
	static parseConnectionArn(
		arn: string,
	): CodestarConnectionsConnectionArnComponents {
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
	static host(props: CodestarConnectionsHostArnProps): string {
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
	static parseHostArn(arn: string): CodestarConnectionsHostArnComponents {
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
	static repositoryLink(
		props: CodestarConnectionsRepositoryLinkArnProps,
	): string {
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
	static parseRepositoryLinkArn(
		arn: string,
	): CodestarConnectionsRepositoryLinkArnComponents {
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
	static readonly CreateConnection: string[] = [
		"codeconnections:CreateConnection",
		"codestar-connections:CreateConnection",
		"codeconnections:TagResource",
		"codestar-connections:TagResource",
	];
	/** IAM actions required for the CreateHost API call. */
	static readonly CreateHost: string[] = [
		"codeconnections:CreateHost",
		"codestar-connections:CreateHost",
		"codeconnections:TagResource",
		"codestar-connections:TagResource",
	];
	/** IAM actions required for the CreateRepositoryLink API call. */
	static readonly CreateRepositoryLink: string[] = [
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
	static readonly CreateSyncConfiguration: string[] = [
		"codeconnections:CreateSyncConfiguration",
		"codestar-connections:CreateSyncConfiguration",
		"codeconnections:PassRepository",
		"codestar-connections:PassRepository",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DeleteConnection: string[] = [
		"codeconnections:DeleteConnection",
		"codestar-connections:DeleteConnection",
	];
	/** IAM actions required for the DeleteHost API call. */
	static readonly DeleteHost: string[] = [
		"codeconnections:DeleteHost",
		"codestar-connections:DeleteHost",
	];
	/** IAM actions required for the DeleteRepositoryLink API call. */
	static readonly DeleteRepositoryLink: string[] = [
		"codeconnections:DeleteRepositoryLink",
		"codestar-connections:DeleteRepositoryLink",
	];
	/** IAM actions required for the DeleteSyncConfiguration API call. */
	static readonly DeleteSyncConfiguration: string[] = [
		"codeconnections:DeleteSyncConfiguration",
		"codestar-connections:DeleteSyncConfiguration",
	];
	/** IAM actions required for the GetConnection API call. */
	static readonly opGetConnection: string[] = [
		"codeconnections:GetConnection",
		"codestar-connections:GetConnection",
	];
	/** IAM actions required for the GetHost API call. */
	static readonly opGetHost: string[] = [
		"codeconnections:GetHost",
		"codestar-connections:GetHost",
	];
	/** IAM actions required for the GetRepositoryLink API call. */
	static readonly opGetRepositoryLink: string[] = [
		"codeconnections:GetRepositoryLink",
		"codestar-connections:GetRepositoryLink",
	];
	/** IAM actions required for the GetRepositorySyncStatus API call. */
	static readonly opGetRepositorySyncStatus: string[] = [
		"codeconnections:GetRepositorySyncStatus",
		"codestar-connections:GetRepositorySyncStatus",
	];
	/** IAM actions required for the GetResourceSyncStatus API call. */
	static readonly opGetResourceSyncStatus: string[] = [
		"codeconnections:GetResourceSyncStatus",
		"codestar-connections:GetResourceSyncStatus",
	];
	/** IAM actions required for the GetSyncBlockerSummary API call. */
	static readonly opGetSyncBlockerSummary: string[] = [
		"codeconnections:GetSyncBlockerSummary",
		"codestar-connections:GetSyncBlockerSummary",
	];
	/** IAM actions required for the GetSyncConfiguration API call. */
	static readonly opGetSyncConfiguration: string[] = [
		"codeconnections:GetSyncConfiguration",
		"codestar-connections:GetSyncConfiguration",
	];
	/** IAM actions required for the ListConnections API call. */
	static readonly ListConnections: string[] = [
		"codeconnections:ListConnections",
		"codestar-connections:ListConnections",
	];
	/** IAM actions required for the ListHosts API call. */
	static readonly ListHosts: string[] = [
		"codeconnections:ListHosts",
		"codestar-connections:ListHosts",
	];
	/** IAM actions required for the ListRepositoryLinks API call. */
	static readonly ListRepositoryLinks: string[] = [
		"codeconnections:ListRepositoryLinks",
		"codestar-connections:ListRepositoryLinks",
	];
	/** IAM actions required for the ListRepositorySyncDefinitions API call. */
	static readonly ListRepositorySyncDefinitions: string[] = [
		"codeconnections:ListRepositorySyncDefinitions",
		"codestar-connections:ListRepositorySyncDefinitions",
	];
	/** IAM actions required for the ListSyncConfigurations API call. */
	static readonly ListSyncConfigurations: string[] = [
		"codeconnections:ListSyncConfigurations",
		"codestar-connections:ListSyncConfigurations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"codeconnections:ListTagsForResource",
		"codestar-connections:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"codeconnections:TagResource",
		"codestar-connections:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"codeconnections:UntagResource",
		"codestar-connections:UntagResource",
	];
	/** IAM actions required for the UpdateHost API call. */
	static readonly UpdateHost: string[] = [
		"codeconnections:UpdateHost",
		"codestar-connections:UpdateHost",
	];
	/** IAM actions required for the UpdateRepositoryLink API call. */
	static readonly UpdateRepositoryLink: string[] = [
		"codeconnections:PassConnection",
		"codestar-connections:PassConnection",
		"codeconnections:UpdateRepositoryLink",
		"codestar-connections:UpdateRepositoryLink",
		"codeconnections:UseConnection",
		"codestar-connections:UseConnection",
	];
	/** IAM actions required for the UpdateSyncBlocker API call. */
	static readonly UpdateSyncBlocker: string[] = [
		"codeconnections:UpdateSyncBlocker",
		"codestar-connections:UpdateSyncBlocker",
	];
	/** IAM actions required for the UpdateSyncConfiguration API call. */
	static readonly UpdateSyncConfiguration: string[] = [
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
	static readonly CreateConnectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codestar-connections:ProviderType",
	];
	/** Condition keys applicable to the CreateHost action. */
	static readonly CreateHostConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codestar-connections:ProviderType",
		"codestar-connections:VpcId",
	];
	/** Condition keys applicable to the CreateRepositoryLink action. */
	static readonly CreateRepositoryLinkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSyncConfiguration action. */
	static readonly CreateSyncConfigurationConditionKeys: string[] = [
		"codestar-connections:Branch",
	];
	/** Condition keys applicable to the GetIndividualAccessToken action. */
	static readonly actionGetIndividualAccessTokenConditionKeys: string[] = [
		"codestar-connections:ProviderType",
	];
	/** Condition keys applicable to the GetInstallationUrl action. */
	static readonly actionGetInstallationUrlConditionKeys: string[] = [
		"codestar-connections:ProviderType",
	];
	/** Condition keys applicable to the GetRepositorySyncStatus action. */
	static readonly actionGetRepositorySyncStatusConditionKeys: string[] = [
		"codestar-connections:Branch",
	];
	/** Condition keys applicable to the ListConnections action. */
	static readonly ListConnectionsConditionKeys: string[] = [
		"codestar-connections:ProviderTypeFilter",
	];
	/** Condition keys applicable to the ListHosts action. */
	static readonly ListHostsConditionKeys: string[] = [
		"codestar-connections:ProviderTypeFilter",
	];
	/** Condition keys applicable to the PassConnection action. */
	static readonly PassConnectionConditionKeys: string[] = [
		"codestar-connections:PassedToService",
	];
	/** Condition keys applicable to the PassRepository action. */
	static readonly PassRepositoryConditionKeys: string[] = [
		"codestar-connections:PassedToService",
	];
	/** Condition keys applicable to the RegisterAppCode action. */
	static readonly RegisterAppCodeConditionKeys: string[] = [
		"codestar-connections:HostArn",
	];
	/** Condition keys applicable to the StartAppRegistrationHandshake action. */
	static readonly StartAppRegistrationHandshakeConditionKeys: string[] = [
		"codestar-connections:HostArn",
	];
	/** Condition keys applicable to the StartOAuthHandshake action. */
	static readonly StartOAuthHandshakeConditionKeys: string[] = [
		"codestar-connections:ProviderType",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateConnectionInstallation action. */
	static readonly UpdateConnectionInstallationConditionKeys: string[] = [
		"codestar-connections:InstallationId",
	];
	/** Condition keys applicable to the UpdateHost action. */
	static readonly UpdateHostConditionKeys: string[] = [
		"codestar-connections:VpcId",
	];
	/** Condition keys applicable to the UpdateSyncConfiguration action. */
	static readonly UpdateSyncConfigurationConditionKeys: string[] = [
		"codestar-connections:Branch",
	];
	/** Condition keys applicable to the UseConnection action. */
	static readonly UseConnectionConditionKeys: string[] = [
		"codestar-connections:BranchName",
		"codestar-connections:FullRepositoryId",
		"codestar-connections:OwnerId",
		"codestar-connections:ProviderAction",
		"codestar-connections:ProviderPermissionsRequired",
		"codestar-connections:RepositoryName",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
