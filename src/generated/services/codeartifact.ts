// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codeartifact.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codeartifact service.
 */
export class CodeArtifactActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codeartifact";

	/** [Write] codeartifact:AssociateExternalConnection */
	static readonly ASSOCIATE_EXTERNAL_CONNECTION =
		"codeartifact:AssociateExternalConnection";
	/** [Write] codeartifact:AssociateWithDownstreamRepository */
	static readonly ASSOCIATE_WITH_DOWNSTREAM_REPOSITORY =
		"codeartifact:AssociateWithDownstreamRepository";
	/** [Write] codeartifact:CopyPackageVersions */
	static readonly COPY_PACKAGE_VERSIONS = "codeartifact:CopyPackageVersions";
	/** [Write] codeartifact:CreateDomain */
	static readonly CREATE_DOMAIN = "codeartifact:CreateDomain";
	/** [Write] codeartifact:CreatePackageGroup */
	static readonly CREATE_PACKAGE_GROUP = "codeartifact:CreatePackageGroup";
	/** [Write] codeartifact:CreateRepository */
	static readonly CREATE_REPOSITORY = "codeartifact:CreateRepository";
	/** [Write] codeartifact:DeleteDomain */
	static readonly DELETE_DOMAIN = "codeartifact:DeleteDomain";
	/** [PermissionManagement] codeartifact:DeleteDomainPermissionsPolicy */
	static readonly DELETE_DOMAIN_PERMISSIONS_POLICY =
		"codeartifact:DeleteDomainPermissionsPolicy";
	/** [Write] codeartifact:DeletePackage */
	static readonly DELETE_PACKAGE = "codeartifact:DeletePackage";
	/** [Write] codeartifact:DeletePackageGroup */
	static readonly DELETE_PACKAGE_GROUP = "codeartifact:DeletePackageGroup";
	/** [Write] codeartifact:DeletePackageVersions */
	static readonly DELETE_PACKAGE_VERSIONS =
		"codeartifact:DeletePackageVersions";
	/** [Write] codeartifact:DeleteRepository */
	static readonly DELETE_REPOSITORY = "codeartifact:DeleteRepository";
	/** [PermissionManagement] codeartifact:DeleteRepositoryPermissionsPolicy */
	static readonly DELETE_REPOSITORY_PERMISSIONS_POLICY =
		"codeartifact:DeleteRepositoryPermissionsPolicy";
	/** [Read] codeartifact:DescribeDomain */
	static readonly DESCRIBE_DOMAIN = "codeartifact:DescribeDomain";
	/** [Read] codeartifact:DescribePackage */
	static readonly DESCRIBE_PACKAGE = "codeartifact:DescribePackage";
	/** [Read] codeartifact:DescribePackageGroup */
	static readonly DESCRIBE_PACKAGE_GROUP = "codeartifact:DescribePackageGroup";
	/** [Read] codeartifact:DescribePackageVersion */
	static readonly DESCRIBE_PACKAGE_VERSION =
		"codeartifact:DescribePackageVersion";
	/** [Read] codeartifact:DescribeRepository */
	static readonly DESCRIBE_REPOSITORY = "codeartifact:DescribeRepository";
	/** [Write] codeartifact:DisassociateExternalConnection */
	static readonly DISASSOCIATE_EXTERNAL_CONNECTION =
		"codeartifact:DisassociateExternalConnection";
	/** [Write] codeartifact:DisposePackageVersions */
	static readonly DISPOSE_PACKAGE_VERSIONS =
		"codeartifact:DisposePackageVersions";
	/** [Read] codeartifact:GetAssociatedPackageGroup */
	static readonly GET_ASSOCIATED_PACKAGE_GROUP =
		"codeartifact:GetAssociatedPackageGroup";
	/** [Read] codeartifact:GetAuthorizationToken */
	static readonly GET_AUTHORIZATION_TOKEN =
		"codeartifact:GetAuthorizationToken";
	/** [Read] codeartifact:GetDomainPermissionsPolicy */
	static readonly GET_DOMAIN_PERMISSIONS_POLICY =
		"codeartifact:GetDomainPermissionsPolicy";
	/** [Read] codeartifact:GetPackageVersionAsset */
	static readonly GET_PACKAGE_VERSION_ASSET =
		"codeartifact:GetPackageVersionAsset";
	/** [Read] codeartifact:GetPackageVersionReadme */
	static readonly GET_PACKAGE_VERSION_README =
		"codeartifact:GetPackageVersionReadme";
	/** [Read] codeartifact:GetRepositoryEndpoint */
	static readonly GET_REPOSITORY_ENDPOINT =
		"codeartifact:GetRepositoryEndpoint";
	/** [Read] codeartifact:GetRepositoryPermissionsPolicy */
	static readonly GET_REPOSITORY_PERMISSIONS_POLICY =
		"codeartifact:GetRepositoryPermissionsPolicy";
	/** [List] codeartifact:ListAllowedRepositoriesForGroup */
	static readonly LIST_ALLOWED_REPOSITORIES_FOR_GROUP =
		"codeartifact:ListAllowedRepositoriesForGroup";
	/** [List] codeartifact:ListAssociatedPackages */
	static readonly LIST_ASSOCIATED_PACKAGES =
		"codeartifact:ListAssociatedPackages";
	/** [List] codeartifact:ListDomains */
	static readonly LIST_DOMAINS = "codeartifact:ListDomains";
	/** [List] codeartifact:ListPackageGroups */
	static readonly LIST_PACKAGE_GROUPS = "codeartifact:ListPackageGroups";
	/** [List] codeartifact:ListPackageVersionAssets */
	static readonly LIST_PACKAGE_VERSION_ASSETS =
		"codeartifact:ListPackageVersionAssets";
	/** [List] codeartifact:ListPackageVersionDependencies */
	static readonly LIST_PACKAGE_VERSION_DEPENDENCIES =
		"codeartifact:ListPackageVersionDependencies";
	/** [List] codeartifact:ListPackageVersions */
	static readonly LIST_PACKAGE_VERSIONS = "codeartifact:ListPackageVersions";
	/** [List] codeartifact:ListPackages */
	static readonly LIST_PACKAGES = "codeartifact:ListPackages";
	/** [List] codeartifact:ListRepositories */
	static readonly LIST_REPOSITORIES = "codeartifact:ListRepositories";
	/** [List] codeartifact:ListRepositoriesInDomain */
	static readonly LIST_REPOSITORIES_IN_DOMAIN =
		"codeartifact:ListRepositoriesInDomain";
	/** [List] codeartifact:ListSubPackageGroups */
	static readonly LIST_SUB_PACKAGE_GROUPS = "codeartifact:ListSubPackageGroups";
	/** [List] codeartifact:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "codeartifact:ListTagsForResource";
	/** [Write] codeartifact:PublishPackageVersion */
	static readonly PUBLISH_PACKAGE_VERSION =
		"codeartifact:PublishPackageVersion";
	/** [Write] codeartifact:PutDomainPermissionsPolicy */
	static readonly PUT_DOMAIN_PERMISSIONS_POLICY =
		"codeartifact:PutDomainPermissionsPolicy";
	/** [Write] codeartifact:PutPackageMetadata */
	static readonly PUT_PACKAGE_METADATA = "codeartifact:PutPackageMetadata";
	/** [Write] codeartifact:PutPackageOriginConfiguration */
	static readonly PUT_PACKAGE_ORIGIN_CONFIGURATION =
		"codeartifact:PutPackageOriginConfiguration";
	/** [Write] codeartifact:PutRepositoryPermissionsPolicy */
	static readonly PUT_REPOSITORY_PERMISSIONS_POLICY =
		"codeartifact:PutRepositoryPermissionsPolicy";
	/** [Read] codeartifact:ReadFromRepository */
	static readonly READ_FROM_REPOSITORY = "codeartifact:ReadFromRepository";
	/** [Tagging] codeartifact:TagResource */
	static readonly TAG_RESOURCE = "codeartifact:TagResource";
	/** [Tagging] codeartifact:UntagResource */
	static readonly UNTAG_RESOURCE = "codeartifact:UntagResource";
	/** [Write] codeartifact:UpdatePackageGroup */
	static readonly UPDATE_PACKAGE_GROUP = "codeartifact:UpdatePackageGroup";
	/** [Write] codeartifact:UpdatePackageGroupOriginConfiguration */
	static readonly UPDATE_PACKAGE_GROUP_ORIGIN_CONFIGURATION =
		"codeartifact:UpdatePackageGroupOriginConfiguration";
	/** [Write] codeartifact:UpdatePackageVersionsStatus */
	static readonly UPDATE_PACKAGE_VERSIONS_STATUS =
		"codeartifact:UpdatePackageVersionsStatus";
	/** [Write] codeartifact:UpdateRepository */
	static readonly UPDATE_REPOSITORY = "codeartifact:UpdateRepository";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodeArtifactActions.DESCRIBE_DOMAIN,
		CodeArtifactActions.DESCRIBE_PACKAGE,
		CodeArtifactActions.DESCRIBE_PACKAGE_GROUP,
		CodeArtifactActions.DESCRIBE_PACKAGE_VERSION,
		CodeArtifactActions.DESCRIBE_REPOSITORY,
		CodeArtifactActions.GET_ASSOCIATED_PACKAGE_GROUP,
		CodeArtifactActions.GET_AUTHORIZATION_TOKEN,
		CodeArtifactActions.GET_DOMAIN_PERMISSIONS_POLICY,
		CodeArtifactActions.GET_PACKAGE_VERSION_ASSET,
		CodeArtifactActions.GET_PACKAGE_VERSION_README,
		CodeArtifactActions.GET_REPOSITORY_ENDPOINT,
		CodeArtifactActions.GET_REPOSITORY_PERMISSIONS_POLICY,
		CodeArtifactActions.READ_FROM_REPOSITORY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodeArtifactActions.ASSOCIATE_EXTERNAL_CONNECTION,
		CodeArtifactActions.ASSOCIATE_WITH_DOWNSTREAM_REPOSITORY,
		CodeArtifactActions.COPY_PACKAGE_VERSIONS,
		CodeArtifactActions.CREATE_DOMAIN,
		CodeArtifactActions.CREATE_PACKAGE_GROUP,
		CodeArtifactActions.CREATE_REPOSITORY,
		CodeArtifactActions.DELETE_DOMAIN,
		CodeArtifactActions.DELETE_PACKAGE,
		CodeArtifactActions.DELETE_PACKAGE_GROUP,
		CodeArtifactActions.DELETE_PACKAGE_VERSIONS,
		CodeArtifactActions.DELETE_REPOSITORY,
		CodeArtifactActions.DISASSOCIATE_EXTERNAL_CONNECTION,
		CodeArtifactActions.DISPOSE_PACKAGE_VERSIONS,
		CodeArtifactActions.PUBLISH_PACKAGE_VERSION,
		CodeArtifactActions.PUT_DOMAIN_PERMISSIONS_POLICY,
		CodeArtifactActions.PUT_PACKAGE_METADATA,
		CodeArtifactActions.PUT_PACKAGE_ORIGIN_CONFIGURATION,
		CodeArtifactActions.PUT_REPOSITORY_PERMISSIONS_POLICY,
		CodeArtifactActions.UPDATE_PACKAGE_GROUP,
		CodeArtifactActions.UPDATE_PACKAGE_GROUP_ORIGIN_CONFIGURATION,
		CodeArtifactActions.UPDATE_PACKAGE_VERSIONS_STATUS,
		CodeArtifactActions.UPDATE_REPOSITORY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodeArtifactActions.LIST_ALLOWED_REPOSITORIES_FOR_GROUP,
		CodeArtifactActions.LIST_ASSOCIATED_PACKAGES,
		CodeArtifactActions.LIST_DOMAINS,
		CodeArtifactActions.LIST_PACKAGE_GROUPS,
		CodeArtifactActions.LIST_PACKAGE_VERSION_ASSETS,
		CodeArtifactActions.LIST_PACKAGE_VERSION_DEPENDENCIES,
		CodeArtifactActions.LIST_PACKAGE_VERSIONS,
		CodeArtifactActions.LIST_PACKAGES,
		CodeArtifactActions.LIST_REPOSITORIES,
		CodeArtifactActions.LIST_REPOSITORIES_IN_DOMAIN,
		CodeArtifactActions.LIST_SUB_PACKAGE_GROUPS,
		CodeArtifactActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		CodeArtifactActions.DELETE_DOMAIN_PERMISSIONS_POLICY,
		CodeArtifactActions.DELETE_REPOSITORY_PERMISSIONS_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodeArtifactActions.TAG_RESOURCE,
		CodeArtifactActions.UNTAG_RESOURCE,
	];
}

const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codeartifact:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainName>[^:/?]+)$",
);
const PackageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codeartifact:(?<region>[^:]*):(?<account>[^:]*):package/(?<domainName>[^:/?]+)/(?<repositoryName>[^:/?]+)/(?<packageFormat>[^:/?]+)/(?<packageNamespace>[^:/?]+)/(?<packageName>[^:/?]+)$",
);
const PackageGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codeartifact:(?<region>[^:]*):(?<account>[^:]*):package-group/(?<domainName>[^:/?]+)(?<encodedPackageGroupPattern>[^:/?]+)$",
);
const RepositoryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codeartifact:(?<region>[^:]*):(?<account>[^:]*):repository/(?<domainName>[^:/?]+)/(?<repositoryName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codeartifact resources.
 */
export class CodeArtifactResources {
	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: {
		/** The DomainName component of the ARN. */
		readonly domainName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codeartifact:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domain resource.
	 */
	static isValidDomainArn(arn: string): boolean {
		return DomainArnRegex.test(arn);
	}

	/**
	 * Parses a domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
	} {
		const match = DomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
		};
	}

	/**
	 * Builds an ARN for the package resource.
	 */
	static package(props: {
		/** The DomainName component of the ARN. */
		readonly domainName: string;
		/** The RepositoryName component of the ARN. */
		readonly repositoryName: string;
		/** The PackageFormat component of the ARN. */
		readonly packageFormat: string;
		/** The PackageNamespace component of the ARN. */
		readonly packageNamespace: string;
		/** The PackageName component of the ARN. */
		readonly packageName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codeartifact:${props.region ?? "*"}:${props.account ?? "*"}:package/${props.domainName}/${props.repositoryName}/${props.packageFormat}/${props.packageNamespace}/${props.packageName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the package resource.
	 */
	static isValidPackageArn(arn: string): boolean {
		return PackageArnRegex.test(arn);
	}

	/**
	 * Parses a package ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePackageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		repositoryName: string;
		packageFormat: string;
		packageNamespace: string;
		packageName: string;
	} {
		const match = PackageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid package ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			repositoryName: match.groups!.repositoryName,
			packageFormat: match.groups!.packageFormat,
			packageNamespace: match.groups!.packageNamespace,
			packageName: match.groups!.packageName,
		};
	}

	/**
	 * Builds an ARN for the package-group resource.
	 */
	static packageGroup(props: {
		/** The DomainName component of the ARN. */
		readonly domainName: string;
		/** The EncodedPackageGroupPattern component of the ARN. */
		readonly encodedPackageGroupPattern: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codeartifact:${props.region ?? "*"}:${props.account ?? "*"}:package-group/${props.domainName}${props.encodedPackageGroupPattern}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the package-group resource.
	 */
	static isValidPackageGroupArn(arn: string): boolean {
		return PackageGroupArnRegex.test(arn);
	}

	/**
	 * Parses a package-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePackageGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		encodedPackageGroupPattern: string;
	} {
		const match = PackageGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid package-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			encodedPackageGroupPattern: match.groups!.encodedPackageGroupPattern,
		};
	}

	/**
	 * Builds an ARN for the repository resource.
	 */
	static repository(props: {
		/** The DomainName component of the ARN. */
		readonly domainName: string;
		/** The RepositoryName component of the ARN. */
		readonly repositoryName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codeartifact:${props.region ?? "*"}:${props.account ?? "*"}:repository/${props.domainName}/${props.repositoryName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the repository resource.
	 */
	static isValidRepositoryArn(arn: string): boolean {
		return RepositoryArnRegex.test(arn);
	}

	/**
	 * Parses a repository ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRepositoryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		repositoryName: string;
	} {
		const match = RepositoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid repository ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			repositoryName: match.groups!.repositoryName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for codeartifact.
 */
export class CodeArtifactOperations {
	/** IAM actions required for the AssociateExternalConnection API call. */
	static readonly ASSOCIATE_EXTERNAL_CONNECTION: string[] = [];
	/** IAM actions required for the CopyPackageVersions API call. */
	static readonly COPY_PACKAGE_VERSIONS: string[] = [];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CREATE_DOMAIN: string[] = [];
	/** IAM actions required for the CreatePackageGroup API call. */
	static readonly CREATE_PACKAGE_GROUP: string[] = [];
	/** IAM actions required for the CreateRepository API call. */
	static readonly CREATE_REPOSITORY: string[] = [];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DELETE_DOMAIN: string[] = [];
	/** IAM actions required for the DeleteDomainPermissionsPolicy API call. */
	static readonly DELETE_DOMAIN_PERMISSIONS_POLICY: string[] = [];
	/** IAM actions required for the DeletePackage API call. */
	static readonly DELETE_PACKAGE: string[] = [];
	/** IAM actions required for the DeletePackageGroup API call. */
	static readonly DELETE_PACKAGE_GROUP: string[] = [];
	/** IAM actions required for the DeletePackageVersions API call. */
	static readonly DELETE_PACKAGE_VERSIONS: string[] = [];
	/** IAM actions required for the DeleteRepository API call. */
	static readonly DELETE_REPOSITORY: string[] = [];
	/** IAM actions required for the DeleteRepositoryPermissionsPolicy API call. */
	static readonly DELETE_REPOSITORY_PERMISSIONS_POLICY: string[] = [];
	/** IAM actions required for the DescribeDomain API call. */
	static readonly DESCRIBE_DOMAIN: string[] = [];
	/** IAM actions required for the DescribePackage API call. */
	static readonly DESCRIBE_PACKAGE: string[] = [];
	/** IAM actions required for the DescribePackageGroup API call. */
	static readonly DESCRIBE_PACKAGE_GROUP: string[] = [];
	/** IAM actions required for the DescribePackageVersion API call. */
	static readonly DESCRIBE_PACKAGE_VERSION: string[] = [];
	/** IAM actions required for the DescribeRepository API call. */
	static readonly DESCRIBE_REPOSITORY: string[] = [];
	/** IAM actions required for the DisassociateExternalConnection API call. */
	static readonly DISASSOCIATE_EXTERNAL_CONNECTION: string[] = [];
	/** IAM actions required for the DisposePackageVersions API call. */
	static readonly DISPOSE_PACKAGE_VERSIONS: string[] = [];
	/** IAM actions required for the GetAssociatedPackageGroup API call. */
	static readonly GET_ASSOCIATED_PACKAGE_GROUP: string[] = [];
	/** IAM actions required for the GetAuthorizationToken API call. */
	static readonly GET_AUTHORIZATION_TOKEN: string[] = [];
	/** IAM actions required for the GetDomainPermissionsPolicy API call. */
	static readonly GET_DOMAIN_PERMISSIONS_POLICY: string[] = [];
	/** IAM actions required for the GetPackageVersionAsset API call. */
	static readonly GET_PACKAGE_VERSION_ASSET: string[] = [];
	/** IAM actions required for the GetPackageVersionReadme API call. */
	static readonly GET_PACKAGE_VERSION_README: string[] = [];
	/** IAM actions required for the GetRepositoryEndpoint API call. */
	static readonly GET_REPOSITORY_ENDPOINT: string[] = [];
	/** IAM actions required for the GetRepositoryPermissionsPolicy API call. */
	static readonly GET_REPOSITORY_PERMISSIONS_POLICY: string[] = [];
	/** IAM actions required for the ListAllowedRepositoriesForGroup API call. */
	static readonly LIST_ALLOWED_REPOSITORIES_FOR_GROUP: string[] = [];
	/** IAM actions required for the ListAssociatedPackages API call. */
	static readonly LIST_ASSOCIATED_PACKAGES: string[] = [];
	/** IAM actions required for the ListDomains API call. */
	static readonly LIST_DOMAINS: string[] = [];
	/** IAM actions required for the ListPackageGroups API call. */
	static readonly LIST_PACKAGE_GROUPS: string[] = [];
	/** IAM actions required for the ListPackageVersionAssets API call. */
	static readonly LIST_PACKAGE_VERSION_ASSETS: string[] = [];
	/** IAM actions required for the ListPackageVersionDependencies API call. */
	static readonly LIST_PACKAGE_VERSION_DEPENDENCIES: string[] = [];
	/** IAM actions required for the ListPackageVersions API call. */
	static readonly LIST_PACKAGE_VERSIONS: string[] = [];
	/** IAM actions required for the ListPackages API call. */
	static readonly LIST_PACKAGES: string[] = [];
	/** IAM actions required for the ListRepositories API call. */
	static readonly LIST_REPOSITORIES: string[] = [];
	/** IAM actions required for the ListRepositoriesInDomain API call. */
	static readonly LIST_REPOSITORIES_IN_DOMAIN: string[] = [];
	/** IAM actions required for the ListSubPackageGroups API call. */
	static readonly LIST_SUB_PACKAGE_GROUPS: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [];
	/** IAM actions required for the PublishPackageVersion API call. */
	static readonly PUBLISH_PACKAGE_VERSION: string[] = [];
	/** IAM actions required for the PutDomainPermissionsPolicy API call. */
	static readonly PUT_DOMAIN_PERMISSIONS_POLICY: string[] = [];
	/** IAM actions required for the PutPackageOriginConfiguration API call. */
	static readonly PUT_PACKAGE_ORIGIN_CONFIGURATION: string[] = [];
	/** IAM actions required for the PutRepositoryPermissionsPolicy API call. */
	static readonly PUT_REPOSITORY_PERMISSIONS_POLICY: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [];
	/** IAM actions required for the UpdatePackageGroup API call. */
	static readonly UPDATE_PACKAGE_GROUP: string[] = [];
	/** IAM actions required for the UpdatePackageGroupOriginConfiguration API call. */
	static readonly UPDATE_PACKAGE_GROUP_ORIGIN_CONFIGURATION: string[] = [];
	/** IAM actions required for the UpdatePackageVersionsStatus API call. */
	static readonly UPDATE_PACKAGE_VERSIONS_STATUS: string[] = [];
	/** IAM actions required for the UpdateRepository API call. */
	static readonly UPDATE_REPOSITORY: string[] = [];
}

/**
 * Condition key constants and builders for codeartifact.
 */
export class CodeArtifactConditions {
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CREATE_DOMAIN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePackageGroup action. */
	static readonly CREATE_PACKAGE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRepository action. */
	static readonly CREATE_REPOSITORY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
}
