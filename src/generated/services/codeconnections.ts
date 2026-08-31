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
	static readonly CreateConnection = "codeconnections:CreateConnection";
	/** [Write] codeconnections:CreateHost */
	static readonly CreateHost = "codeconnections:CreateHost";
	/** [Write] codeconnections:CreateRepositoryLink */
	static readonly CreateRepositoryLink = "codeconnections:CreateRepositoryLink";
	/** [Write] codeconnections:CreateSyncConfiguration */
	static readonly CreateSyncConfiguration =
		"codeconnections:CreateSyncConfiguration";
	/** [Write] codeconnections:DeleteConnection */
	static readonly DeleteConnection = "codeconnections:DeleteConnection";
	/** [Write] codeconnections:DeleteHost */
	static readonly DeleteHost = "codeconnections:DeleteHost";
	/** [Write] codeconnections:DeleteRepositoryLink */
	static readonly DeleteRepositoryLink = "codeconnections:DeleteRepositoryLink";
	/** [Write] codeconnections:DeleteSyncConfiguration */
	static readonly DeleteSyncConfiguration =
		"codeconnections:DeleteSyncConfiguration";
	/** [Read] codeconnections:GetConnection */
	static readonly actionGetConnection = "codeconnections:GetConnection";
	/** [Read] codeconnections:GetConnectionToken */
	static readonly actionGetConnectionToken =
		"codeconnections:GetConnectionToken";
	/** [Read] codeconnections:GetHost */
	static readonly actionGetHost = "codeconnections:GetHost";
	/** [Read] codeconnections:GetIndividualAccessToken */
	static readonly actionGetIndividualAccessToken =
		"codeconnections:GetIndividualAccessToken";
	/** [Read] codeconnections:GetInstallationUrl */
	static readonly actionGetInstallationUrl =
		"codeconnections:GetInstallationUrl";
	/** [Read] codeconnections:GetRepositoryLink */
	static readonly actionGetRepositoryLink = "codeconnections:GetRepositoryLink";
	/** [Read] codeconnections:GetRepositorySyncStatus */
	static readonly actionGetRepositorySyncStatus =
		"codeconnections:GetRepositorySyncStatus";
	/** [Read] codeconnections:GetResourceSyncStatus */
	static readonly actionGetResourceSyncStatus =
		"codeconnections:GetResourceSyncStatus";
	/** [Read] codeconnections:GetSyncBlockerSummary */
	static readonly actionGetSyncBlockerSummary =
		"codeconnections:GetSyncBlockerSummary";
	/** [Read] codeconnections:GetSyncConfiguration */
	static readonly actionGetSyncConfiguration =
		"codeconnections:GetSyncConfiguration";
	/** [List] codeconnections:ListConnections */
	static readonly ListConnections = "codeconnections:ListConnections";
	/** [List] codeconnections:ListHosts */
	static readonly ListHosts = "codeconnections:ListHosts";
	/** [List] codeconnections:ListInstallationTargets */
	static readonly ListInstallationTargets =
		"codeconnections:ListInstallationTargets";
	/** [List] codeconnections:ListRepositoryLinks */
	static readonly ListRepositoryLinks = "codeconnections:ListRepositoryLinks";
	/** [List] codeconnections:ListRepositorySyncDefinitions */
	static readonly ListRepositorySyncDefinitions =
		"codeconnections:ListRepositorySyncDefinitions";
	/** [List] codeconnections:ListSyncConfigurations */
	static readonly ListSyncConfigurations =
		"codeconnections:ListSyncConfigurations";
	/** [List] codeconnections:ListTagsForResource */
	static readonly ListTagsForResource = "codeconnections:ListTagsForResource";
	/** [Read] codeconnections:PassConnection */
	static readonly PassConnection = "codeconnections:PassConnection";
	/** [Read] codeconnections:PassRepository */
	static readonly PassRepository = "codeconnections:PassRepository";
	/** [Read] codeconnections:RegisterAppCode */
	static readonly RegisterAppCode = "codeconnections:RegisterAppCode";
	/** [Read] codeconnections:StartAppRegistrationHandshake */
	static readonly StartAppRegistrationHandshake =
		"codeconnections:StartAppRegistrationHandshake";
	/** [Read] codeconnections:StartOAuthHandshake */
	static readonly StartOAuthHandshake = "codeconnections:StartOAuthHandshake";
	/** [Tagging] codeconnections:TagResource */
	static readonly TagResource = "codeconnections:TagResource";
	/** [Tagging] codeconnections:UntagResource */
	static readonly UntagResource = "codeconnections:UntagResource";
	/** [Write] codeconnections:UpdateConnectionInstallation */
	static readonly UpdateConnectionInstallation =
		"codeconnections:UpdateConnectionInstallation";
	/** [Write] codeconnections:UpdateHost */
	static readonly UpdateHost = "codeconnections:UpdateHost";
	/** [Write] codeconnections:UpdateRepositoryLink */
	static readonly UpdateRepositoryLink = "codeconnections:UpdateRepositoryLink";
	/** [Write] codeconnections:UpdateSyncBlocker */
	static readonly UpdateSyncBlocker = "codeconnections:UpdateSyncBlocker";
	/** [Write] codeconnections:UpdateSyncConfiguration */
	static readonly UpdateSyncConfiguration =
		"codeconnections:UpdateSyncConfiguration";
	/** [Read] codeconnections:UseConnection */
	static readonly UseConnection = "codeconnections:UseConnection";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodeconnectionsActions.actionGetConnection,
		CodeconnectionsActions.actionGetConnectionToken,
		CodeconnectionsActions.actionGetHost,
		CodeconnectionsActions.actionGetIndividualAccessToken,
		CodeconnectionsActions.actionGetInstallationUrl,
		CodeconnectionsActions.actionGetRepositoryLink,
		CodeconnectionsActions.actionGetRepositorySyncStatus,
		CodeconnectionsActions.actionGetResourceSyncStatus,
		CodeconnectionsActions.actionGetSyncBlockerSummary,
		CodeconnectionsActions.actionGetSyncConfiguration,
		CodeconnectionsActions.PassConnection,
		CodeconnectionsActions.PassRepository,
		CodeconnectionsActions.RegisterAppCode,
		CodeconnectionsActions.StartAppRegistrationHandshake,
		CodeconnectionsActions.StartOAuthHandshake,
		CodeconnectionsActions.UseConnection,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodeconnectionsActions.CreateConnection,
		CodeconnectionsActions.CreateHost,
		CodeconnectionsActions.CreateRepositoryLink,
		CodeconnectionsActions.CreateSyncConfiguration,
		CodeconnectionsActions.DeleteConnection,
		CodeconnectionsActions.DeleteHost,
		CodeconnectionsActions.DeleteRepositoryLink,
		CodeconnectionsActions.DeleteSyncConfiguration,
		CodeconnectionsActions.UpdateConnectionInstallation,
		CodeconnectionsActions.UpdateHost,
		CodeconnectionsActions.UpdateRepositoryLink,
		CodeconnectionsActions.UpdateSyncBlocker,
		CodeconnectionsActions.UpdateSyncConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodeconnectionsActions.ListConnections,
		CodeconnectionsActions.ListHosts,
		CodeconnectionsActions.ListInstallationTargets,
		CodeconnectionsActions.ListRepositoryLinks,
		CodeconnectionsActions.ListRepositorySyncDefinitions,
		CodeconnectionsActions.ListSyncConfigurations,
		CodeconnectionsActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodeconnectionsActions.TagResource,
		CodeconnectionsActions.UntagResource,
	];
}

/**
 * Properties for building a Connection ARN.
 */
export interface CodeconnectionsConnectionArnProps {
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
export interface CodeconnectionsConnectionArnComponents {
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
export interface CodeconnectionsHostArnProps {
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
export interface CodeconnectionsHostArnComponents {
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
export interface CodeconnectionsRepositoryLinkArnProps {
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
export interface CodeconnectionsRepositoryLinkArnComponents {
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
	/^arn:(?<partition>[^:]+):codeconnections:(?<region>[^:]*):(?<account>[^:]*):connection\/(?<connectionId>[^:/?]+)$/;
const HostArnRegex =
	/^arn:(?<partition>[^:]+):codeconnections:(?<region>[^:]*):(?<account>[^:]*):host\/(?<hostId>[^:/?]+)$/;
const RepositoryLinkArnRegex =
	/^arn:(?<partition>[^:]+):codeconnections:(?<region>[^:]*):(?<account>[^:]*):repository-link\/(?<repositoryLinkId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codeconnections resources.
 */
export class CodeconnectionsResources {
	/**
	 * Builds an ARN for the Connection resource.
	 */
	static connection(props: CodeconnectionsConnectionArnProps): string {
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
	static parseConnectionArn(
		arn: string,
	): CodeconnectionsConnectionArnComponents {
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
	static host(props: CodeconnectionsHostArnProps): string {
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
	static parseHostArn(arn: string): CodeconnectionsHostArnComponents {
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
	static repositoryLink(props: CodeconnectionsRepositoryLinkArnProps): string {
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
	static parseRepositoryLinkArn(
		arn: string,
	): CodeconnectionsRepositoryLinkArnComponents {
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
	static readonly ListRepositorySyncDefinitions: string[] = [];
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
 * Condition key constants and builders for codeconnections.
 */
export class CodeconnectionsConditions {
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CreateConnectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codeconnections:ProviderType",
	];
	/** Condition keys applicable to the CreateHost action. */
	static readonly CreateHostConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codeconnections:ProviderType",
		"codeconnections:VpcId",
	];
	/** Condition keys applicable to the CreateRepositoryLink action. */
	static readonly CreateRepositoryLinkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSyncConfiguration action. */
	static readonly CreateSyncConfigurationConditionKeys: string[] = [
		"codeconnections:Branch",
	];
	/** Condition keys applicable to the GetIndividualAccessToken action. */
	static readonly actionGetIndividualAccessTokenConditionKeys: string[] = [
		"codeconnections:ProviderType",
	];
	/** Condition keys applicable to the GetInstallationUrl action. */
	static readonly actionGetInstallationUrlConditionKeys: string[] = [
		"codeconnections:ProviderType",
	];
	/** Condition keys applicable to the GetRepositorySyncStatus action. */
	static readonly actionGetRepositorySyncStatusConditionKeys: string[] = [
		"codeconnections:Branch",
	];
	/** Condition keys applicable to the ListConnections action. */
	static readonly ListConnectionsConditionKeys: string[] = [
		"codeconnections:ProviderTypeFilter",
	];
	/** Condition keys applicable to the ListHosts action. */
	static readonly ListHostsConditionKeys: string[] = [
		"codeconnections:ProviderTypeFilter",
	];
	/** Condition keys applicable to the PassConnection action. */
	static readonly PassConnectionConditionKeys: string[] = [
		"codeconnections:PassedToService",
	];
	/** Condition keys applicable to the PassRepository action. */
	static readonly PassRepositoryConditionKeys: string[] = [
		"codeconnections:PassedToService",
	];
	/** Condition keys applicable to the RegisterAppCode action. */
	static readonly RegisterAppCodeConditionKeys: string[] = [
		"codeconnections:HostArn",
	];
	/** Condition keys applicable to the StartAppRegistrationHandshake action. */
	static readonly StartAppRegistrationHandshakeConditionKeys: string[] = [
		"codeconnections:HostArn",
	];
	/** Condition keys applicable to the StartOAuthHandshake action. */
	static readonly StartOAuthHandshakeConditionKeys: string[] = [
		"codeconnections:ProviderType",
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
		"codeconnections:InstallationId",
	];
	/** Condition keys applicable to the UpdateHost action. */
	static readonly UpdateHostConditionKeys: string[] = ["codeconnections:VpcId"];
	/** Condition keys applicable to the UpdateSyncConfiguration action. */
	static readonly UpdateSyncConfigurationConditionKeys: string[] = [
		"codeconnections:Branch",
	];
	/** Condition keys applicable to the UseConnection action. */
	static readonly UseConnectionConditionKeys: string[] = [
		"codeconnections:BranchName",
		"codeconnections:FullRepositoryId",
		"codeconnections:OwnerId",
		"codeconnections:ProviderAction",
		"codeconnections:ProviderPermissionsRequired",
		"codeconnections:RepositoryName",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
