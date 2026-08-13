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
	static readonly AssociateExternalConnection =
		"codeartifact:AssociateExternalConnection";
	/** [Write] codeartifact:AssociateWithDownstreamRepository */
	static readonly AssociateWithDownstreamRepository =
		"codeartifact:AssociateWithDownstreamRepository";
	/** [Write] codeartifact:CopyPackageVersions */
	static readonly CopyPackageVersions = "codeartifact:CopyPackageVersions";
	/** [Write] codeartifact:CreateDomain */
	static readonly CreateDomain = "codeartifact:CreateDomain";
	/** [Write] codeartifact:CreatePackageGroup */
	static readonly CreatePackageGroup = "codeartifact:CreatePackageGroup";
	/** [Write] codeartifact:CreateRepository */
	static readonly CreateRepository = "codeartifact:CreateRepository";
	/** [Write] codeartifact:DeleteDomain */
	static readonly DeleteDomain = "codeartifact:DeleteDomain";
	/** [PermissionManagement] codeartifact:DeleteDomainPermissionsPolicy */
	static readonly DeleteDomainPermissionsPolicy =
		"codeartifact:DeleteDomainPermissionsPolicy";
	/** [Write] codeartifact:DeletePackage */
	static readonly DeletePackage = "codeartifact:DeletePackage";
	/** [Write] codeartifact:DeletePackageGroup */
	static readonly DeletePackageGroup = "codeartifact:DeletePackageGroup";
	/** [Write] codeartifact:DeletePackageVersions */
	static readonly DeletePackageVersions = "codeartifact:DeletePackageVersions";
	/** [Write] codeartifact:DeleteRepository */
	static readonly DeleteRepository = "codeartifact:DeleteRepository";
	/** [PermissionManagement] codeartifact:DeleteRepositoryPermissionsPolicy */
	static readonly DeleteRepositoryPermissionsPolicy =
		"codeartifact:DeleteRepositoryPermissionsPolicy";
	/** [Read] codeartifact:DescribeDomain */
	static readonly DescribeDomain = "codeartifact:DescribeDomain";
	/** [Read] codeartifact:DescribePackage */
	static readonly DescribePackage = "codeartifact:DescribePackage";
	/** [Read] codeartifact:DescribePackageGroup */
	static readonly DescribePackageGroup = "codeartifact:DescribePackageGroup";
	/** [Read] codeartifact:DescribePackageVersion */
	static readonly DescribePackageVersion =
		"codeartifact:DescribePackageVersion";
	/** [Read] codeartifact:DescribeRepository */
	static readonly DescribeRepository = "codeartifact:DescribeRepository";
	/** [Write] codeartifact:DisassociateExternalConnection */
	static readonly DisassociateExternalConnection =
		"codeartifact:DisassociateExternalConnection";
	/** [Write] codeartifact:DisposePackageVersions */
	static readonly DisposePackageVersions =
		"codeartifact:DisposePackageVersions";
	/** [Read] codeartifact:GetAssociatedPackageGroup */
	static readonly actionGetAssociatedPackageGroup =
		"codeartifact:GetAssociatedPackageGroup";
	/** [Read] codeartifact:GetAuthorizationToken */
	static readonly actionGetAuthorizationToken =
		"codeartifact:GetAuthorizationToken";
	/** [Read] codeartifact:GetDomainPermissionsPolicy */
	static readonly actionGetDomainPermissionsPolicy =
		"codeartifact:GetDomainPermissionsPolicy";
	/** [Read] codeartifact:GetPackageVersionAsset */
	static readonly actionGetPackageVersionAsset =
		"codeartifact:GetPackageVersionAsset";
	/** [Read] codeartifact:GetPackageVersionReadme */
	static readonly actionGetPackageVersionReadme =
		"codeartifact:GetPackageVersionReadme";
	/** [Read] codeartifact:GetRepositoryEndpoint */
	static readonly actionGetRepositoryEndpoint =
		"codeartifact:GetRepositoryEndpoint";
	/** [Read] codeartifact:GetRepositoryPermissionsPolicy */
	static readonly actionGetRepositoryPermissionsPolicy =
		"codeartifact:GetRepositoryPermissionsPolicy";
	/** [List] codeartifact:ListAllowedRepositoriesForGroup */
	static readonly ListAllowedRepositoriesForGroup =
		"codeartifact:ListAllowedRepositoriesForGroup";
	/** [List] codeartifact:ListAssociatedPackages */
	static readonly ListAssociatedPackages =
		"codeartifact:ListAssociatedPackages";
	/** [List] codeartifact:ListDomains */
	static readonly ListDomains = "codeartifact:ListDomains";
	/** [List] codeartifact:ListPackageGroups */
	static readonly ListPackageGroups = "codeartifact:ListPackageGroups";
	/** [List] codeartifact:ListPackageVersionAssets */
	static readonly ListPackageVersionAssets =
		"codeartifact:ListPackageVersionAssets";
	/** [List] codeartifact:ListPackageVersionDependencies */
	static readonly ListPackageVersionDependencies =
		"codeartifact:ListPackageVersionDependencies";
	/** [List] codeartifact:ListPackageVersions */
	static readonly ListPackageVersions = "codeartifact:ListPackageVersions";
	/** [List] codeartifact:ListPackages */
	static readonly ListPackages = "codeartifact:ListPackages";
	/** [List] codeartifact:ListRepositories */
	static readonly ListRepositories = "codeartifact:ListRepositories";
	/** [List] codeartifact:ListRepositoriesInDomain */
	static readonly ListRepositoriesInDomain =
		"codeartifact:ListRepositoriesInDomain";
	/** [List] codeartifact:ListSubPackageGroups */
	static readonly ListSubPackageGroups = "codeartifact:ListSubPackageGroups";
	/** [List] codeartifact:ListTagsForResource */
	static readonly ListTagsForResource = "codeartifact:ListTagsForResource";
	/** [Write] codeartifact:PublishPackageVersion */
	static readonly PublishPackageVersion = "codeartifact:PublishPackageVersion";
	/** [Write] codeartifact:PutDomainPermissionsPolicy */
	static readonly PutDomainPermissionsPolicy =
		"codeartifact:PutDomainPermissionsPolicy";
	/** [Write] codeartifact:PutPackageMetadata */
	static readonly PutPackageMetadata = "codeartifact:PutPackageMetadata";
	/** [Write] codeartifact:PutPackageOriginConfiguration */
	static readonly PutPackageOriginConfiguration =
		"codeartifact:PutPackageOriginConfiguration";
	/** [Write] codeartifact:PutRepositoryPermissionsPolicy */
	static readonly PutRepositoryPermissionsPolicy =
		"codeartifact:PutRepositoryPermissionsPolicy";
	/** [Read] codeartifact:ReadFromRepository */
	static readonly ReadFromRepository = "codeartifact:ReadFromRepository";
	/** [Tagging] codeartifact:TagResource */
	static readonly TagResource = "codeartifact:TagResource";
	/** [Tagging] codeartifact:UntagResource */
	static readonly UntagResource = "codeartifact:UntagResource";
	/** [Write] codeartifact:UpdatePackageGroup */
	static readonly UpdatePackageGroup = "codeartifact:UpdatePackageGroup";
	/** [Write] codeartifact:UpdatePackageGroupOriginConfiguration */
	static readonly UpdatePackageGroupOriginConfiguration =
		"codeartifact:UpdatePackageGroupOriginConfiguration";
	/** [Write] codeartifact:UpdatePackageVersionsStatus */
	static readonly UpdatePackageVersionsStatus =
		"codeartifact:UpdatePackageVersionsStatus";
	/** [Write] codeartifact:UpdateRepository */
	static readonly UpdateRepository = "codeartifact:UpdateRepository";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodeArtifactActions.DescribeDomain,
		CodeArtifactActions.DescribePackage,
		CodeArtifactActions.DescribePackageGroup,
		CodeArtifactActions.DescribePackageVersion,
		CodeArtifactActions.DescribeRepository,
		CodeArtifactActions.actionGetAssociatedPackageGroup,
		CodeArtifactActions.actionGetAuthorizationToken,
		CodeArtifactActions.actionGetDomainPermissionsPolicy,
		CodeArtifactActions.actionGetPackageVersionAsset,
		CodeArtifactActions.actionGetPackageVersionReadme,
		CodeArtifactActions.actionGetRepositoryEndpoint,
		CodeArtifactActions.actionGetRepositoryPermissionsPolicy,
		CodeArtifactActions.ReadFromRepository,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodeArtifactActions.AssociateExternalConnection,
		CodeArtifactActions.AssociateWithDownstreamRepository,
		CodeArtifactActions.CopyPackageVersions,
		CodeArtifactActions.CreateDomain,
		CodeArtifactActions.CreatePackageGroup,
		CodeArtifactActions.CreateRepository,
		CodeArtifactActions.DeleteDomain,
		CodeArtifactActions.DeletePackage,
		CodeArtifactActions.DeletePackageGroup,
		CodeArtifactActions.DeletePackageVersions,
		CodeArtifactActions.DeleteRepository,
		CodeArtifactActions.DisassociateExternalConnection,
		CodeArtifactActions.DisposePackageVersions,
		CodeArtifactActions.PublishPackageVersion,
		CodeArtifactActions.PutDomainPermissionsPolicy,
		CodeArtifactActions.PutPackageMetadata,
		CodeArtifactActions.PutPackageOriginConfiguration,
		CodeArtifactActions.PutRepositoryPermissionsPolicy,
		CodeArtifactActions.UpdatePackageGroup,
		CodeArtifactActions.UpdatePackageGroupOriginConfiguration,
		CodeArtifactActions.UpdatePackageVersionsStatus,
		CodeArtifactActions.UpdateRepository,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodeArtifactActions.ListAllowedRepositoriesForGroup,
		CodeArtifactActions.ListAssociatedPackages,
		CodeArtifactActions.ListDomains,
		CodeArtifactActions.ListPackageGroups,
		CodeArtifactActions.ListPackageVersionAssets,
		CodeArtifactActions.ListPackageVersionDependencies,
		CodeArtifactActions.ListPackageVersions,
		CodeArtifactActions.ListPackages,
		CodeArtifactActions.ListRepositories,
		CodeArtifactActions.ListRepositoriesInDomain,
		CodeArtifactActions.ListSubPackageGroups,
		CodeArtifactActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		CodeArtifactActions.DeleteDomainPermissionsPolicy,
		CodeArtifactActions.DeleteRepositoryPermissionsPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodeArtifactActions.TagResource,
		CodeArtifactActions.UntagResource,
	];
}

/**
 * Properties for building a domain ARN.
 */
export interface CodeArtifactDomainArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a domain ARN.
 */
export interface CodeArtifactDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
}

/**
 * Properties for building a package ARN.
 */
export interface CodeArtifactPackageArnProps {
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
}

/**
 * Parsed components of a package ARN.
 */
export interface CodeArtifactPackageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The RepositoryName component. */
	readonly repositoryName: string;
	/** The PackageFormat component. */
	readonly packageFormat: string;
	/** The PackageNamespace component. */
	readonly packageNamespace: string;
	/** The PackageName component. */
	readonly packageName: string;
}

/**
 * Properties for building a package-group ARN.
 */
export interface CodeArtifactPackageGroupArnProps {
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
}

/**
 * Parsed components of a package-group ARN.
 */
export interface CodeArtifactPackageGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The EncodedPackageGroupPattern component. */
	readonly encodedPackageGroupPattern: string;
}

/**
 * Properties for building a repository ARN.
 */
export interface CodeArtifactRepositoryArnProps {
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
}

/**
 * Parsed components of a repository ARN.
 */
export interface CodeArtifactRepositoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The RepositoryName component. */
	readonly repositoryName: string;
}

const DomainArnRegex =
	/^arn:(?<partition>[^:]+):codeartifact:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainName>[^:/?]+)$/;
const PackageArnRegex =
	/^arn:(?<partition>[^:]+):codeartifact:(?<region>[^:]*):(?<account>[^:]*):package\/(?<domainName>[^:/?]+)\/(?<repositoryName>[^:/?]+)\/(?<packageFormat>[^:/?]+)\/(?<packageNamespace>[^:/?]+)\/(?<packageName>[^:/?]+)$/;
const PackageGroupArnRegex =
	/^arn:(?<partition>[^:]+):codeartifact:(?<region>[^:]*):(?<account>[^:]*):package-group\/(?<domainName>[^:/?]+)(?<encodedPackageGroupPattern>[^:/?]+)$/;
const RepositoryArnRegex =
	/^arn:(?<partition>[^:]+):codeartifact:(?<region>[^:]*):(?<account>[^:]*):repository\/(?<domainName>[^:/?]+)\/(?<repositoryName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codeartifact resources.
 */
export class CodeArtifactResources {
	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: CodeArtifactDomainArnProps): string {
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
	static parseDomainArn(arn: string): CodeArtifactDomainArnComponents {
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
	static package(props: CodeArtifactPackageArnProps): string {
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
	static parsePackageArn(arn: string): CodeArtifactPackageArnComponents {
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
	static packageGroup(props: CodeArtifactPackageGroupArnProps): string {
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
	static parsePackageGroupArn(
		arn: string,
	): CodeArtifactPackageGroupArnComponents {
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
	static repository(props: CodeArtifactRepositoryArnProps): string {
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
	static parseRepositoryArn(arn: string): CodeArtifactRepositoryArnComponents {
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
	static readonly AssociateExternalConnection: string[] = [];
	/** IAM actions required for the CopyPackageVersions API call. */
	static readonly CopyPackageVersions: string[] = [];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CreateDomain: string[] = [];
	/** IAM actions required for the CreatePackageGroup API call. */
	static readonly CreatePackageGroup: string[] = [];
	/** IAM actions required for the CreateRepository API call. */
	static readonly CreateRepository: string[] = [];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DeleteDomain: string[] = [];
	/** IAM actions required for the DeleteDomainPermissionsPolicy API call. */
	static readonly DeleteDomainPermissionsPolicy: string[] = [];
	/** IAM actions required for the DeletePackage API call. */
	static readonly DeletePackage: string[] = [];
	/** IAM actions required for the DeletePackageGroup API call. */
	static readonly DeletePackageGroup: string[] = [];
	/** IAM actions required for the DeletePackageVersions API call. */
	static readonly DeletePackageVersions: string[] = [];
	/** IAM actions required for the DeleteRepository API call. */
	static readonly DeleteRepository: string[] = [];
	/** IAM actions required for the DeleteRepositoryPermissionsPolicy API call. */
	static readonly DeleteRepositoryPermissionsPolicy: string[] = [];
	/** IAM actions required for the DescribeDomain API call. */
	static readonly DescribeDomain: string[] = [];
	/** IAM actions required for the DescribePackage API call. */
	static readonly DescribePackage: string[] = [];
	/** IAM actions required for the DescribePackageGroup API call. */
	static readonly DescribePackageGroup: string[] = [];
	/** IAM actions required for the DescribePackageVersion API call. */
	static readonly DescribePackageVersion: string[] = [];
	/** IAM actions required for the DescribeRepository API call. */
	static readonly DescribeRepository: string[] = [];
	/** IAM actions required for the DisassociateExternalConnection API call. */
	static readonly DisassociateExternalConnection: string[] = [];
	/** IAM actions required for the DisposePackageVersions API call. */
	static readonly DisposePackageVersions: string[] = [];
	/** IAM actions required for the GetAssociatedPackageGroup API call. */
	static readonly opGetAssociatedPackageGroup: string[] = [];
	/** IAM actions required for the GetAuthorizationToken API call. */
	static readonly opGetAuthorizationToken: string[] = [];
	/** IAM actions required for the GetDomainPermissionsPolicy API call. */
	static readonly opGetDomainPermissionsPolicy: string[] = [];
	/** IAM actions required for the GetPackageVersionAsset API call. */
	static readonly opGetPackageVersionAsset: string[] = [];
	/** IAM actions required for the GetPackageVersionReadme API call. */
	static readonly opGetPackageVersionReadme: string[] = [];
	/** IAM actions required for the GetRepositoryEndpoint API call. */
	static readonly opGetRepositoryEndpoint: string[] = [];
	/** IAM actions required for the GetRepositoryPermissionsPolicy API call. */
	static readonly opGetRepositoryPermissionsPolicy: string[] = [];
	/** IAM actions required for the ListAllowedRepositoriesForGroup API call. */
	static readonly ListAllowedRepositoriesForGroup: string[] = [];
	/** IAM actions required for the ListAssociatedPackages API call. */
	static readonly ListAssociatedPackages: string[] = [];
	/** IAM actions required for the ListDomains API call. */
	static readonly ListDomains: string[] = [];
	/** IAM actions required for the ListPackageGroups API call. */
	static readonly ListPackageGroups: string[] = [];
	/** IAM actions required for the ListPackageVersionAssets API call. */
	static readonly ListPackageVersionAssets: string[] = [];
	/** IAM actions required for the ListPackageVersionDependencies API call. */
	static readonly ListPackageVersionDependencies: string[] = [];
	/** IAM actions required for the ListPackageVersions API call. */
	static readonly ListPackageVersions: string[] = [];
	/** IAM actions required for the ListPackages API call. */
	static readonly ListPackages: string[] = [];
	/** IAM actions required for the ListRepositories API call. */
	static readonly ListRepositories: string[] = [];
	/** IAM actions required for the ListRepositoriesInDomain API call. */
	static readonly ListRepositoriesInDomain: string[] = [];
	/** IAM actions required for the ListSubPackageGroups API call. */
	static readonly ListSubPackageGroups: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [];
	/** IAM actions required for the PublishPackageVersion API call. */
	static readonly PublishPackageVersion: string[] = [];
	/** IAM actions required for the PutDomainPermissionsPolicy API call. */
	static readonly PutDomainPermissionsPolicy: string[] = [];
	/** IAM actions required for the PutPackageOriginConfiguration API call. */
	static readonly PutPackageOriginConfiguration: string[] = [];
	/** IAM actions required for the PutRepositoryPermissionsPolicy API call. */
	static readonly PutRepositoryPermissionsPolicy: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [];
	/** IAM actions required for the UpdatePackageGroup API call. */
	static readonly UpdatePackageGroup: string[] = [];
	/** IAM actions required for the UpdatePackageGroupOriginConfiguration API call. */
	static readonly UpdatePackageGroupOriginConfiguration: string[] = [];
	/** IAM actions required for the UpdatePackageVersionsStatus API call. */
	static readonly UpdatePackageVersionsStatus: string[] = [];
	/** IAM actions required for the UpdateRepository API call. */
	static readonly UpdateRepository: string[] = [];
}

/**
 * Condition key constants and builders for codeartifact.
 */
export class CodeArtifactConditions {
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CreateDomainConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePackageGroup action. */
	static readonly CreatePackageGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRepository action. */
	static readonly CreateRepositoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
