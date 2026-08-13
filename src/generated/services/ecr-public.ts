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
	static readonly BATCH_CHECK_LAYER_AVAILABILITY =
		"ecr-public:BatchCheckLayerAvailability";
	/** [Write] ecr-public:BatchDeleteImage */
	static readonly BATCH_DELETE_IMAGE = "ecr-public:BatchDeleteImage";
	/** [Write] ecr-public:CompleteLayerUpload */
	static readonly COMPLETE_LAYER_UPLOAD = "ecr-public:CompleteLayerUpload";
	/** [Write] ecr-public:CreateRepository */
	static readonly CREATE_REPOSITORY = "ecr-public:CreateRepository";
	/** [Write] ecr-public:DeleteRepository */
	static readonly DELETE_REPOSITORY = "ecr-public:DeleteRepository";
	/** [Write] ecr-public:DeleteRepositoryPolicy */
	static readonly DELETE_REPOSITORY_POLICY =
		"ecr-public:DeleteRepositoryPolicy";
	/** [List] ecr-public:DescribeImageTags */
	static readonly DESCRIBE_IMAGE_TAGS = "ecr-public:DescribeImageTags";
	/** [Read] ecr-public:DescribeImages */
	static readonly DESCRIBE_IMAGES = "ecr-public:DescribeImages";
	/** [List] ecr-public:DescribeRegistries */
	static readonly DESCRIBE_REGISTRIES = "ecr-public:DescribeRegistries";
	/** [List] ecr-public:DescribeRepositories */
	static readonly DESCRIBE_REPOSITORIES = "ecr-public:DescribeRepositories";
	/** [Read] ecr-public:GetAuthorizationToken */
	static readonly GET_AUTHORIZATION_TOKEN = "ecr-public:GetAuthorizationToken";
	/** [Read] ecr-public:GetRegistryCatalogData */
	static readonly GET_REGISTRY_CATALOG_DATA =
		"ecr-public:GetRegistryCatalogData";
	/** [Read] ecr-public:GetRepositoryCatalogData */
	static readonly GET_REPOSITORY_CATALOG_DATA =
		"ecr-public:GetRepositoryCatalogData";
	/** [Read] ecr-public:GetRepositoryPolicy */
	static readonly GET_REPOSITORY_POLICY = "ecr-public:GetRepositoryPolicy";
	/** [Write] ecr-public:InitiateLayerUpload */
	static readonly INITIATE_LAYER_UPLOAD = "ecr-public:InitiateLayerUpload";
	/** [Read] ecr-public:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ecr-public:ListTagsForResource";
	/** [Write] ecr-public:PutImage */
	static readonly PUT_IMAGE = "ecr-public:PutImage";
	/** [Write] ecr-public:PutRegistryCatalogData */
	static readonly PUT_REGISTRY_CATALOG_DATA =
		"ecr-public:PutRegistryCatalogData";
	/** [Write] ecr-public:PutRepositoryCatalogData */
	static readonly PUT_REPOSITORY_CATALOG_DATA =
		"ecr-public:PutRepositoryCatalogData";
	/** [PermissionManagement] ecr-public:SetRepositoryPolicy */
	static readonly SET_REPOSITORY_POLICY = "ecr-public:SetRepositoryPolicy";
	/** [Tagging] ecr-public:TagResource */
	static readonly TAG_RESOURCE = "ecr-public:TagResource";
	/** [Tagging] ecr-public:UntagResource */
	static readonly UNTAG_RESOURCE = "ecr-public:UntagResource";
	/** [Write] ecr-public:UploadLayerPart */
	static readonly UPLOAD_LAYER_PART = "ecr-public:UploadLayerPart";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ECRPublicActions.BATCH_CHECK_LAYER_AVAILABILITY,
		ECRPublicActions.DESCRIBE_IMAGES,
		ECRPublicActions.GET_AUTHORIZATION_TOKEN,
		ECRPublicActions.GET_REGISTRY_CATALOG_DATA,
		ECRPublicActions.GET_REPOSITORY_CATALOG_DATA,
		ECRPublicActions.GET_REPOSITORY_POLICY,
		ECRPublicActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ECRPublicActions.BATCH_DELETE_IMAGE,
		ECRPublicActions.COMPLETE_LAYER_UPLOAD,
		ECRPublicActions.CREATE_REPOSITORY,
		ECRPublicActions.DELETE_REPOSITORY,
		ECRPublicActions.DELETE_REPOSITORY_POLICY,
		ECRPublicActions.INITIATE_LAYER_UPLOAD,
		ECRPublicActions.PUT_IMAGE,
		ECRPublicActions.PUT_REGISTRY_CATALOG_DATA,
		ECRPublicActions.PUT_REPOSITORY_CATALOG_DATA,
		ECRPublicActions.UPLOAD_LAYER_PART,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ECRPublicActions.DESCRIBE_IMAGE_TAGS,
		ECRPublicActions.DESCRIBE_REGISTRIES,
		ECRPublicActions.DESCRIBE_REPOSITORIES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		ECRPublicActions.SET_REPOSITORY_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ECRPublicActions.TAG_RESOURCE,
		ECRPublicActions.UNTAG_RESOURCE,
	];
}

const RegistryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecr-public::(?<account>[^:]*):registry/(?<registryId>[^:/?]+)$",
);
const RepositoryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecr-public::(?<account>[^:]*):repository/(?<repositoryName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ecr-public resources.
 */
export class ECRPublicResources {
	/**
	 * Builds an ARN for the registry resource.
	 */
	static registry(props: {
		/** The RegistryId component of the ARN. */
		readonly registryId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRegistryArn(arn: string): {
		partition: string;
		account: string;
		registryId: string;
	} {
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
	static repository(props: {
		/** The RepositoryName component of the ARN. */
		readonly repositoryName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRepositoryArn(arn: string): {
		partition: string;
		account: string;
		repositoryName: string;
	} {
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
	static readonly BATCH_CHECK_LAYER_AVAILABILITY: string[] = [
		"ecr-public:BatchCheckLayerAvailability",
	];
	/** IAM actions required for the BatchDeleteImage API call. */
	static readonly BATCH_DELETE_IMAGE: string[] = [
		"ecr-public:BatchDeleteImage",
	];
	/** IAM actions required for the CompleteLayerUpload API call. */
	static readonly COMPLETE_LAYER_UPLOAD: string[] = [
		"ecr-public:CompleteLayerUpload",
	];
	/** IAM actions required for the CreateRepository API call. */
	static readonly CREATE_REPOSITORY: string[] = [
		"ecr-public:CreateRepository",
		"ecr-public:TagResource",
	];
	/** IAM actions required for the DeleteRepository API call. */
	static readonly DELETE_REPOSITORY: string[] = ["ecr-public:DeleteRepository"];
	/** IAM actions required for the DeleteRepositoryPolicy API call. */
	static readonly DELETE_REPOSITORY_POLICY: string[] = [
		"ecr-public:DeleteRepositoryPolicy",
	];
	/** IAM actions required for the DescribeImageTags API call. */
	static readonly DESCRIBE_IMAGE_TAGS: string[] = [
		"ecr-public:DescribeImageTags",
	];
	/** IAM actions required for the DescribeImages API call. */
	static readonly DESCRIBE_IMAGES: string[] = ["ecr-public:DescribeImages"];
	/** IAM actions required for the DescribeRegistries API call. */
	static readonly DESCRIBE_REGISTRIES: string[] = [
		"ecr-public:DescribeRegistries",
	];
	/** IAM actions required for the DescribeRepositories API call. */
	static readonly DESCRIBE_REPOSITORIES: string[] = [
		"ecr-public:DescribeRepositories",
	];
	/** IAM actions required for the GetAuthorizationToken API call. */
	static readonly GET_AUTHORIZATION_TOKEN: string[] = [
		"ecr-public:GetAuthorizationToken",
		"sts:GetServiceBearerToken",
	];
	/** IAM actions required for the GetRegistryCatalogData API call. */
	static readonly GET_REGISTRY_CATALOG_DATA: string[] = [
		"ecr-public:GetRegistryCatalogData",
	];
	/** IAM actions required for the GetRepositoryCatalogData API call. */
	static readonly GET_REPOSITORY_CATALOG_DATA: string[] = [
		"ecr-public:GetRepositoryCatalogData",
	];
	/** IAM actions required for the GetRepositoryPolicy API call. */
	static readonly GET_REPOSITORY_POLICY: string[] = [
		"ecr-public:GetRepositoryPolicy",
	];
	/** IAM actions required for the InitiateLayerUpload API call. */
	static readonly INITIATE_LAYER_UPLOAD: string[] = [
		"ecr-public:InitiateLayerUpload",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"ecr-public:ListTagsForResource",
	];
	/** IAM actions required for the PutImage API call. */
	static readonly PUT_IMAGE: string[] = ["ecr-public:PutImage"];
	/** IAM actions required for the PutRegistryCatalogData API call. */
	static readonly PUT_REGISTRY_CATALOG_DATA: string[] = [
		"ecr-public:PutRegistryCatalogData",
	];
	/** IAM actions required for the PutRepositoryCatalogData API call. */
	static readonly PUT_REPOSITORY_CATALOG_DATA: string[] = [
		"ecr-public:PutRepositoryCatalogData",
	];
	/** IAM actions required for the SetRepositoryPolicy API call. */
	static readonly SET_REPOSITORY_POLICY: string[] = [
		"ecr-public:SetRepositoryPolicy",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["ecr-public:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["ecr-public:UntagResource"];
	/** IAM actions required for the UploadLayerPart API call. */
	static readonly UPLOAD_LAYER_PART: string[] = ["ecr-public:UploadLayerPart"];
}

/**
 * Condition key constants and builders for ecr-public.
 */
export class ECRPublicConditions {
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

	/**
	 * Generates a condition block for `ecr-public:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ecr-public:ResourceTag/${TagKey}": value } };
	}
}
