// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ecr-public.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ecr-public service.
 */
export class ECRPublicActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ecr-public";

	/** [Read] ecr-public:BatchCheckLayerAvailability */
	static readonly BatchCheckLayerAvailability =
		"ecr-public:BatchCheckLayerAvailability";
	/** [Write] ecr-public:BatchDeleteImage */
	static readonly BatchDeleteImage = "ecr-public:BatchDeleteImage";
	/** [Write] ecr-public:CompleteLayerUpload */
	static readonly CompleteLayerUpload = "ecr-public:CompleteLayerUpload";
	/** [Write] ecr-public:CreateRepository */
	static readonly CreateRepository = "ecr-public:CreateRepository";
	/** [Write] ecr-public:DeleteRepository */
	static readonly DeleteRepository = "ecr-public:DeleteRepository";
	/** [Write] ecr-public:DeleteRepositoryPolicy */
	static readonly DeleteRepositoryPolicy = "ecr-public:DeleteRepositoryPolicy";
	/** [List] ecr-public:DescribeImageTags */
	static readonly DescribeImageTags = "ecr-public:DescribeImageTags";
	/** [Read] ecr-public:DescribeImages */
	static readonly DescribeImages = "ecr-public:DescribeImages";
	/** [List] ecr-public:DescribeRegistries */
	static readonly DescribeRegistries = "ecr-public:DescribeRegistries";
	/** [List] ecr-public:DescribeRepositories */
	static readonly DescribeRepositories = "ecr-public:DescribeRepositories";
	/** [Read] ecr-public:GetAuthorizationToken */
	static readonly actionGetAuthorizationToken =
		"ecr-public:GetAuthorizationToken";
	/** [Read] ecr-public:GetRegistryCatalogData */
	static readonly actionGetRegistryCatalogData =
		"ecr-public:GetRegistryCatalogData";
	/** [Read] ecr-public:GetRepositoryCatalogData */
	static readonly actionGetRepositoryCatalogData =
		"ecr-public:GetRepositoryCatalogData";
	/** [Read] ecr-public:GetRepositoryPolicy */
	static readonly actionGetRepositoryPolicy = "ecr-public:GetRepositoryPolicy";
	/** [Write] ecr-public:InitiateLayerUpload */
	static readonly InitiateLayerUpload = "ecr-public:InitiateLayerUpload";
	/** [Read] ecr-public:ListTagsForResource */
	static readonly ListTagsForResource = "ecr-public:ListTagsForResource";
	/** [Write] ecr-public:PutImage */
	static readonly PutImage = "ecr-public:PutImage";
	/** [Write] ecr-public:PutRegistryCatalogData */
	static readonly PutRegistryCatalogData = "ecr-public:PutRegistryCatalogData";
	/** [Write] ecr-public:PutRepositoryCatalogData */
	static readonly PutRepositoryCatalogData =
		"ecr-public:PutRepositoryCatalogData";
	/** [PermissionManagement] ecr-public:SetRepositoryPolicy */
	static readonly actionSetRepositoryPolicy = "ecr-public:SetRepositoryPolicy";
	/** [Tagging] ecr-public:TagResource */
	static readonly TagResource = "ecr-public:TagResource";
	/** [Tagging] ecr-public:UntagResource */
	static readonly UntagResource = "ecr-public:UntagResource";
	/** [Write] ecr-public:UploadLayerPart */
	static readonly UploadLayerPart = "ecr-public:UploadLayerPart";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ECRPublicActions.BatchCheckLayerAvailability,
		ECRPublicActions.DescribeImages,
		ECRPublicActions.actionGetAuthorizationToken,
		ECRPublicActions.actionGetRegistryCatalogData,
		ECRPublicActions.actionGetRepositoryCatalogData,
		ECRPublicActions.actionGetRepositoryPolicy,
		ECRPublicActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ECRPublicActions.BatchDeleteImage,
		ECRPublicActions.CompleteLayerUpload,
		ECRPublicActions.CreateRepository,
		ECRPublicActions.DeleteRepository,
		ECRPublicActions.DeleteRepositoryPolicy,
		ECRPublicActions.InitiateLayerUpload,
		ECRPublicActions.PutImage,
		ECRPublicActions.PutRegistryCatalogData,
		ECRPublicActions.PutRepositoryCatalogData,
		ECRPublicActions.UploadLayerPart,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ECRPublicActions.DescribeImageTags,
		ECRPublicActions.DescribeRegistries,
		ECRPublicActions.DescribeRepositories,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ECRPublicActions.actionSetRepositoryPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ECRPublicActions.TagResource,
		ECRPublicActions.UntagResource,
	];
}

/**
 * Properties for building a registry ARN.
 */
export interface ECRPublicRegistryArnProps {
	/** The RegistryId component of the ARN. */
	readonly registryId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a registry ARN.
 */
export interface ECRPublicRegistryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RegistryId component. */
	readonly registryId: string;
}

/**
 * Properties for building a repository ARN.
 */
export interface ECRPublicRepositoryArnProps {
	/** The RepositoryName component of the ARN. */
	readonly repositoryName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a repository ARN.
 */
export interface ECRPublicRepositoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RepositoryName component. */
	readonly repositoryName: string;
}

const RegistryArnRegex =
	/^arn:(?<partition>[^:]+):ecr-public::(?<account>[^:]*):registry\/(?<registryId>[^:/?]+)$/;
const RepositoryArnRegex =
	/^arn:(?<partition>[^:]+):ecr-public::(?<account>[^:]*):repository\/(?<repositoryName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ecr-public resources.
 */
export class ECRPublicResources {
	/**
	 * Builds an ARN for the registry resource.
	 */
	static registry(props: ECRPublicRegistryArnProps): string {
		return `arn:${props.partition ?? "aws"}:ecr-public::${props.account ?? "*"}:registry/${props.registryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the registry resource.
	 */
	static isValidRegistryArn(arn: string): boolean {
		return RegistryArnRegex.test(arn);
	}

	/**
	 * Parses a registry ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRegistryArn(arn: string): ECRPublicRegistryArnComponents {
		const match = RegistryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid registry ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			registryId: match.groups!.registryId,
		};
	}

	/**
	 * Builds an ARN for the repository resource.
	 */
	static repository(props: ECRPublicRepositoryArnProps): string {
		return `arn:${props.partition ?? "aws"}:ecr-public::${props.account ?? "*"}:repository/${props.repositoryName}`;
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
	static parseRepositoryArn(arn: string): ECRPublicRepositoryArnComponents {
		const match = RepositoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid repository ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			repositoryName: match.groups!.repositoryName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ecr-public.
 */
export class ECRPublicOperations {
	/** IAM actions required for the BatchCheckLayerAvailability API call. */
	static readonly BatchCheckLayerAvailability: string[] = [
		"ecr-public:BatchCheckLayerAvailability",
	];
	/** IAM actions required for the BatchDeleteImage API call. */
	static readonly BatchDeleteImage: string[] = ["ecr-public:BatchDeleteImage"];
	/** IAM actions required for the CompleteLayerUpload API call. */
	static readonly CompleteLayerUpload: string[] = [
		"ecr-public:CompleteLayerUpload",
	];
	/** IAM actions required for the CreateRepository API call. */
	static readonly CreateRepository: string[] = [
		"ecr-public:CreateRepository",
		"ecr-public:TagResource",
	];
	/** IAM actions required for the DeleteRepository API call. */
	static readonly DeleteRepository: string[] = ["ecr-public:DeleteRepository"];
	/** IAM actions required for the DeleteRepositoryPolicy API call. */
	static readonly DeleteRepositoryPolicy: string[] = [
		"ecr-public:DeleteRepositoryPolicy",
	];
	/** IAM actions required for the DescribeImageTags API call. */
	static readonly DescribeImageTags: string[] = [
		"ecr-public:DescribeImageTags",
	];
	/** IAM actions required for the DescribeImages API call. */
	static readonly DescribeImages: string[] = ["ecr-public:DescribeImages"];
	/** IAM actions required for the DescribeRegistries API call. */
	static readonly DescribeRegistries: string[] = [
		"ecr-public:DescribeRegistries",
	];
	/** IAM actions required for the DescribeRepositories API call. */
	static readonly DescribeRepositories: string[] = [
		"ecr-public:DescribeRepositories",
	];
	/** IAM actions required for the GetAuthorizationToken API call. */
	static readonly opGetAuthorizationToken: string[] = [
		"ecr-public:GetAuthorizationToken",
		"sts:GetServiceBearerToken",
	];
	/** IAM actions required for the GetRegistryCatalogData API call. */
	static readonly opGetRegistryCatalogData: string[] = [
		"ecr-public:GetRegistryCatalogData",
	];
	/** IAM actions required for the GetRepositoryCatalogData API call. */
	static readonly opGetRepositoryCatalogData: string[] = [
		"ecr-public:GetRepositoryCatalogData",
	];
	/** IAM actions required for the GetRepositoryPolicy API call. */
	static readonly opGetRepositoryPolicy: string[] = [
		"ecr-public:GetRepositoryPolicy",
	];
	/** IAM actions required for the InitiateLayerUpload API call. */
	static readonly InitiateLayerUpload: string[] = [
		"ecr-public:InitiateLayerUpload",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"ecr-public:ListTagsForResource",
	];
	/** IAM actions required for the PutImage API call. */
	static readonly PutImage: string[] = ["ecr-public:PutImage"];
	/** IAM actions required for the PutRegistryCatalogData API call. */
	static readonly PutRegistryCatalogData: string[] = [
		"ecr-public:PutRegistryCatalogData",
	];
	/** IAM actions required for the PutRepositoryCatalogData API call. */
	static readonly PutRepositoryCatalogData: string[] = [
		"ecr-public:PutRepositoryCatalogData",
	];
	/** IAM actions required for the SetRepositoryPolicy API call. */
	static readonly opSetRepositoryPolicy: string[] = [
		"ecr-public:SetRepositoryPolicy",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["ecr-public:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["ecr-public:UntagResource"];
	/** IAM actions required for the UploadLayerPart API call. */
	static readonly UploadLayerPart: string[] = ["ecr-public:UploadLayerPart"];
}

/**
 * Condition key constants and builders for ecr-public.
 */
export class ECRPublicConditions {
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
	/** Condition key: ecr-public:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "ecr-public:ResourceTag/${TagKey}";

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
