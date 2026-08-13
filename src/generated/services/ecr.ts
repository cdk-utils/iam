// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ecr.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ecr service.
 */
export class ECRActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ecr";

	/** [Read] ecr:BatchCheckLayerAvailability */
	static readonly BATCH_CHECK_LAYER_AVAILABILITY =
		"ecr:BatchCheckLayerAvailability";
	/** [Write] ecr:BatchDeleteImage */
	static readonly BATCH_DELETE_IMAGE = "ecr:BatchDeleteImage";
	/** [Read] ecr:BatchGetImage */
	static readonly BATCH_GET_IMAGE = "ecr:BatchGetImage";
	/** [Read] ecr:BatchGetRepositoryScanningConfiguration */
	static readonly BATCH_GET_REPOSITORY_SCANNING_CONFIGURATION =
		"ecr:BatchGetRepositoryScanningConfiguration";
	/** [Write] ecr:BatchImportUpstreamImage */
	static readonly BATCH_IMPORT_UPSTREAM_IMAGE = "ecr:BatchImportUpstreamImage";
	/** [Write] ecr:CompleteLayerUpload */
	static readonly COMPLETE_LAYER_UPLOAD = "ecr:CompleteLayerUpload";
	/** [Write] ecr:CreatePullThroughCacheRule */
	static readonly CREATE_PULL_THROUGH_CACHE_RULE =
		"ecr:CreatePullThroughCacheRule";
	/** [Write] ecr:CreateRepository */
	static readonly CREATE_REPOSITORY = "ecr:CreateRepository";
	/** [Write] ecr:CreateRepositoryCreationTemplate */
	static readonly CREATE_REPOSITORY_CREATION_TEMPLATE =
		"ecr:CreateRepositoryCreationTemplate";
	/** [Write] ecr:DeleteLifecyclePolicy */
	static readonly DELETE_LIFECYCLE_POLICY = "ecr:DeleteLifecyclePolicy";
	/** [Write] ecr:DeletePullThroughCacheRule */
	static readonly DELETE_PULL_THROUGH_CACHE_RULE =
		"ecr:DeletePullThroughCacheRule";
	/** [PermissionManagement] ecr:DeleteRegistryPolicy */
	static readonly DELETE_REGISTRY_POLICY = "ecr:DeleteRegistryPolicy";
	/** [Write] ecr:DeleteRepository */
	static readonly DELETE_REPOSITORY = "ecr:DeleteRepository";
	/** [Write] ecr:DeleteRepositoryCreationTemplate */
	static readonly DELETE_REPOSITORY_CREATION_TEMPLATE =
		"ecr:DeleteRepositoryCreationTemplate";
	/** [PermissionManagement] ecr:DeleteRepositoryPolicy */
	static readonly DELETE_REPOSITORY_POLICY = "ecr:DeleteRepositoryPolicy";
	/** [Write] ecr:DeleteSigningConfiguration */
	static readonly DELETE_SIGNING_CONFIGURATION =
		"ecr:DeleteSigningConfiguration";
	/** [Write] ecr:DeregisterPullTimeUpdateExclusion */
	static readonly DEREGISTER_PULL_TIME_UPDATE_EXCLUSION =
		"ecr:DeregisterPullTimeUpdateExclusion";
	/** [Read] ecr:DescribeImageReplicationStatus */
	static readonly DESCRIBE_IMAGE_REPLICATION_STATUS =
		"ecr:DescribeImageReplicationStatus";
	/** [Read] ecr:DescribeImageScanFindings */
	static readonly DESCRIBE_IMAGE_SCAN_FINDINGS =
		"ecr:DescribeImageScanFindings";
	/** [Read] ecr:DescribeImageSigningStatus */
	static readonly DESCRIBE_IMAGE_SIGNING_STATUS =
		"ecr:DescribeImageSigningStatus";
	/** [List] ecr:DescribeImages */
	static readonly DESCRIBE_IMAGES = "ecr:DescribeImages";
	/** [List] ecr:DescribePullThroughCacheRules */
	static readonly DESCRIBE_PULL_THROUGH_CACHE_RULES =
		"ecr:DescribePullThroughCacheRules";
	/** [Read] ecr:DescribeRegistry */
	static readonly DESCRIBE_REGISTRY = "ecr:DescribeRegistry";
	/** [Read] ecr:DescribeRepositories */
	static readonly DESCRIBE_REPOSITORIES = "ecr:DescribeRepositories";
	/** [Read] ecr:DescribeRepositoryCreationTemplates */
	static readonly DESCRIBE_REPOSITORY_CREATION_TEMPLATES =
		"ecr:DescribeRepositoryCreationTemplates";
	/** [Read] ecr:GetAccountSetting */
	static readonly GET_ACCOUNT_SETTING = "ecr:GetAccountSetting";
	/** [Read] ecr:GetAuthorizationToken */
	static readonly GET_AUTHORIZATION_TOKEN = "ecr:GetAuthorizationToken";
	/** [Read] ecr:GetDownloadUrlForLayer */
	static readonly GET_DOWNLOAD_URL_FOR_LAYER = "ecr:GetDownloadUrlForLayer";
	/** [Read] ecr:GetImageCopyStatus */
	static readonly GET_IMAGE_COPY_STATUS = "ecr:GetImageCopyStatus";
	/** [Read] ecr:GetLifecyclePolicy */
	static readonly GET_LIFECYCLE_POLICY = "ecr:GetLifecyclePolicy";
	/** [Read] ecr:GetLifecyclePolicyPreview */
	static readonly GET_LIFECYCLE_POLICY_PREVIEW =
		"ecr:GetLifecyclePolicyPreview";
	/** [Read] ecr:GetRegistryPolicy */
	static readonly GET_REGISTRY_POLICY = "ecr:GetRegistryPolicy";
	/** [Read] ecr:GetRegistryScanningConfiguration */
	static readonly GET_REGISTRY_SCANNING_CONFIGURATION =
		"ecr:GetRegistryScanningConfiguration";
	/** [Read] ecr:GetRepositoryPolicy */
	static readonly GET_REPOSITORY_POLICY = "ecr:GetRepositoryPolicy";
	/** [Read] ecr:GetSigningConfiguration */
	static readonly GET_SIGNING_CONFIGURATION = "ecr:GetSigningConfiguration";
	/** [Write] ecr:InitiateLayerUpload */
	static readonly INITIATE_LAYER_UPLOAD = "ecr:InitiateLayerUpload";
	/** [List] ecr:ListImages */
	static readonly LIST_IMAGES = "ecr:ListImages";
	/** [List] ecr:ListPullTimeUpdateExclusions */
	static readonly LIST_PULL_TIME_UPDATE_EXCLUSIONS =
		"ecr:ListPullTimeUpdateExclusions";
	/** [Read] ecr:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ecr:ListTagsForResource";
	/** [Write] ecr:PutAccountSetting */
	static readonly PUT_ACCOUNT_SETTING = "ecr:PutAccountSetting";
	/** [Write] ecr:PutImage */
	static readonly PUT_IMAGE = "ecr:PutImage";
	/** [Write] ecr:PutImageScanningConfiguration */
	static readonly PUT_IMAGE_SCANNING_CONFIGURATION =
		"ecr:PutImageScanningConfiguration";
	/** [Write] ecr:PutImageTagMutability */
	static readonly PUT_IMAGE_TAG_MUTABILITY = "ecr:PutImageTagMutability";
	/** [Write] ecr:PutLifecyclePolicy */
	static readonly PUT_LIFECYCLE_POLICY = "ecr:PutLifecyclePolicy";
	/** [PermissionManagement] ecr:PutRegistryPolicy */
	static readonly PUT_REGISTRY_POLICY = "ecr:PutRegistryPolicy";
	/** [Write] ecr:PutRegistryScanningConfiguration */
	static readonly PUT_REGISTRY_SCANNING_CONFIGURATION =
		"ecr:PutRegistryScanningConfiguration";
	/** [Write] ecr:PutReplicationConfiguration */
	static readonly PUT_REPLICATION_CONFIGURATION =
		"ecr:PutReplicationConfiguration";
	/** [Write] ecr:PutSigningConfiguration */
	static readonly PUT_SIGNING_CONFIGURATION = "ecr:PutSigningConfiguration";
	/** [Write] ecr:RegisterPullTimeUpdateExclusion */
	static readonly REGISTER_PULL_TIME_UPDATE_EXCLUSION =
		"ecr:RegisterPullTimeUpdateExclusion";
	/** [Write] ecr:ReplicateImage */
	static readonly REPLICATE_IMAGE = "ecr:ReplicateImage";
	/** [PermissionManagement] ecr:SetRepositoryPolicy */
	static readonly SET_REPOSITORY_POLICY = "ecr:SetRepositoryPolicy";
	/** [Write] ecr:StartImageScan */
	static readonly START_IMAGE_SCAN = "ecr:StartImageScan";
	/** [Write] ecr:StartLifecyclePolicyPreview */
	static readonly START_LIFECYCLE_POLICY_PREVIEW =
		"ecr:StartLifecyclePolicyPreview";
	/** [Tagging] ecr:TagResource */
	static readonly TAG_RESOURCE = "ecr:TagResource";
	/** [Tagging] ecr:UntagResource */
	static readonly UNTAG_RESOURCE = "ecr:UntagResource";
	/** [Write] ecr:UpdateImageStorageClass */
	static readonly UPDATE_IMAGE_STORAGE_CLASS = "ecr:UpdateImageStorageClass";
	/** [Write] ecr:UpdatePullThroughCacheRule */
	static readonly UPDATE_PULL_THROUGH_CACHE_RULE =
		"ecr:UpdatePullThroughCacheRule";
	/** [Write] ecr:UpdateRepositoryCreationTemplate */
	static readonly UPDATE_REPOSITORY_CREATION_TEMPLATE =
		"ecr:UpdateRepositoryCreationTemplate";
	/** [Write] ecr:UploadLayerPart */
	static readonly UPLOAD_LAYER_PART = "ecr:UploadLayerPart";
	/** [Read] ecr:ValidatePullThroughCacheRule */
	static readonly VALIDATE_PULL_THROUGH_CACHE_RULE =
		"ecr:ValidatePullThroughCacheRule";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ECRActions.BATCH_CHECK_LAYER_AVAILABILITY,
		ECRActions.BATCH_GET_IMAGE,
		ECRActions.BATCH_GET_REPOSITORY_SCANNING_CONFIGURATION,
		ECRActions.DESCRIBE_IMAGE_REPLICATION_STATUS,
		ECRActions.DESCRIBE_IMAGE_SCAN_FINDINGS,
		ECRActions.DESCRIBE_IMAGE_SIGNING_STATUS,
		ECRActions.DESCRIBE_REGISTRY,
		ECRActions.DESCRIBE_REPOSITORIES,
		ECRActions.DESCRIBE_REPOSITORY_CREATION_TEMPLATES,
		ECRActions.GET_ACCOUNT_SETTING,
		ECRActions.GET_AUTHORIZATION_TOKEN,
		ECRActions.GET_DOWNLOAD_URL_FOR_LAYER,
		ECRActions.GET_IMAGE_COPY_STATUS,
		ECRActions.GET_LIFECYCLE_POLICY,
		ECRActions.GET_LIFECYCLE_POLICY_PREVIEW,
		ECRActions.GET_REGISTRY_POLICY,
		ECRActions.GET_REGISTRY_SCANNING_CONFIGURATION,
		ECRActions.GET_REPOSITORY_POLICY,
		ECRActions.GET_SIGNING_CONFIGURATION,
		ECRActions.LIST_TAGS_FOR_RESOURCE,
		ECRActions.VALIDATE_PULL_THROUGH_CACHE_RULE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ECRActions.BATCH_DELETE_IMAGE,
		ECRActions.BATCH_IMPORT_UPSTREAM_IMAGE,
		ECRActions.COMPLETE_LAYER_UPLOAD,
		ECRActions.CREATE_PULL_THROUGH_CACHE_RULE,
		ECRActions.CREATE_REPOSITORY,
		ECRActions.CREATE_REPOSITORY_CREATION_TEMPLATE,
		ECRActions.DELETE_LIFECYCLE_POLICY,
		ECRActions.DELETE_PULL_THROUGH_CACHE_RULE,
		ECRActions.DELETE_REPOSITORY,
		ECRActions.DELETE_REPOSITORY_CREATION_TEMPLATE,
		ECRActions.DELETE_SIGNING_CONFIGURATION,
		ECRActions.DEREGISTER_PULL_TIME_UPDATE_EXCLUSION,
		ECRActions.INITIATE_LAYER_UPLOAD,
		ECRActions.PUT_ACCOUNT_SETTING,
		ECRActions.PUT_IMAGE,
		ECRActions.PUT_IMAGE_SCANNING_CONFIGURATION,
		ECRActions.PUT_IMAGE_TAG_MUTABILITY,
		ECRActions.PUT_LIFECYCLE_POLICY,
		ECRActions.PUT_REGISTRY_SCANNING_CONFIGURATION,
		ECRActions.PUT_REPLICATION_CONFIGURATION,
		ECRActions.PUT_SIGNING_CONFIGURATION,
		ECRActions.REGISTER_PULL_TIME_UPDATE_EXCLUSION,
		ECRActions.REPLICATE_IMAGE,
		ECRActions.START_IMAGE_SCAN,
		ECRActions.START_LIFECYCLE_POLICY_PREVIEW,
		ECRActions.UPDATE_IMAGE_STORAGE_CLASS,
		ECRActions.UPDATE_PULL_THROUGH_CACHE_RULE,
		ECRActions.UPDATE_REPOSITORY_CREATION_TEMPLATE,
		ECRActions.UPLOAD_LAYER_PART,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ECRActions.DESCRIBE_IMAGES,
		ECRActions.DESCRIBE_PULL_THROUGH_CACHE_RULES,
		ECRActions.LIST_IMAGES,
		ECRActions.LIST_PULL_TIME_UPDATE_EXCLUSIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		ECRActions.DELETE_REGISTRY_POLICY,
		ECRActions.DELETE_REPOSITORY_POLICY,
		ECRActions.PUT_REGISTRY_POLICY,
		ECRActions.SET_REPOSITORY_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ECRActions.TAG_RESOURCE,
		ECRActions.UNTAG_RESOURCE,
	];
}

const RepositoryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ecr:(?<region>[^:]*):(?<account>[^:]*):repository/(?<repositoryName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ecr resources.
 */
export class ECRResources {
	/**
	 * Builds an ARN for the repository resource.
	 */
	static repository(props: {
		/** The RepositoryName component of the ARN. */
		readonly repositoryName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecr:${props.region ?? "*"}:${props.account ?? "*"}:repository/${props.repositoryName}`;
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
			repositoryName: match.groups!.repositoryName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ecr.
 */
export class ECROperations {
	/** IAM actions required for the BatchCheckLayerAvailability API call. */
	static readonly BATCH_CHECK_LAYER_AVAILABILITY: string[] = [
		"ecr:BatchCheckLayerAvailability",
	];
	/** IAM actions required for the BatchDeleteImage API call. */
	static readonly BATCH_DELETE_IMAGE: string[] = ["ecr:BatchDeleteImage"];
	/** IAM actions required for the BatchGetImage API call. */
	static readonly BATCH_GET_IMAGE: string[] = [
		"ecr:BatchGetImage",
		"ecr:BatchImportUpstreamImage",
		"ecr:CreateRepository",
		"ecr:TagResource",
	];
	/** IAM actions required for the BatchGetRepositoryScanningConfiguration API call. */
	static readonly BATCH_GET_REPOSITORY_SCANNING_CONFIGURATION: string[] = [
		"ecr:BatchGetRepositoryScanningConfiguration",
	];
	/** IAM actions required for the CompleteLayerUpload API call. */
	static readonly COMPLETE_LAYER_UPLOAD: string[] = ["ecr:CompleteLayerUpload"];
	/** IAM actions required for the CreatePullThroughCacheRule API call. */
	static readonly CREATE_PULL_THROUGH_CACHE_RULE: string[] = [
		"ecr:CreatePullThroughCacheRule",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateRepository API call. */
	static readonly CREATE_REPOSITORY: string[] = [
		"ecr:CreateRepository",
		"ecr:TagResource",
	];
	/** IAM actions required for the CreateRepositoryCreationTemplate API call. */
	static readonly CREATE_REPOSITORY_CREATION_TEMPLATE: string[] = [
		"ecr:CreateRepository",
		"ecr:CreateRepositoryCreationTemplate",
		"iam:PassRole",
		"ecr:PutLifecyclePolicy",
		"ecr:SetRepositoryPolicy",
	];
	/** IAM actions required for the DeleteLifecyclePolicy API call. */
	static readonly DELETE_LIFECYCLE_POLICY: string[] = [
		"ecr:DeleteLifecyclePolicy",
	];
	/** IAM actions required for the DeletePullThroughCacheRule API call. */
	static readonly DELETE_PULL_THROUGH_CACHE_RULE: string[] = [
		"ecr:DeletePullThroughCacheRule",
	];
	/** IAM actions required for the DeleteRegistryPolicy API call. */
	static readonly DELETE_REGISTRY_POLICY: string[] = [
		"ecr:DeleteRegistryPolicy",
	];
	/** IAM actions required for the DeleteRepository API call. */
	static readonly DELETE_REPOSITORY: string[] = ["ecr:DeleteRepository"];
	/** IAM actions required for the DeleteRepositoryCreationTemplate API call. */
	static readonly DELETE_REPOSITORY_CREATION_TEMPLATE: string[] = [
		"ecr:DeleteRepositoryCreationTemplate",
	];
	/** IAM actions required for the DeleteRepositoryPolicy API call. */
	static readonly DELETE_REPOSITORY_POLICY: string[] = [
		"ecr:DeleteRepositoryPolicy",
	];
	/** IAM actions required for the DeleteSigningConfiguration API call. */
	static readonly DELETE_SIGNING_CONFIGURATION: string[] = [
		"ecr:DeleteSigningConfiguration",
	];
	/** IAM actions required for the DeregisterPullTimeUpdateExclusion API call. */
	static readonly DEREGISTER_PULL_TIME_UPDATE_EXCLUSION: string[] = [
		"ecr:DeregisterPullTimeUpdateExclusion",
	];
	/** IAM actions required for the DescribeImageReplicationStatus API call. */
	static readonly DESCRIBE_IMAGE_REPLICATION_STATUS: string[] = [
		"ecr:DescribeImageReplicationStatus",
	];
	/** IAM actions required for the DescribeImageScanFindings API call. */
	static readonly DESCRIBE_IMAGE_SCAN_FINDINGS: string[] = [
		"ecr:DescribeImageScanFindings",
	];
	/** IAM actions required for the DescribeImageSigningStatus API call. */
	static readonly DESCRIBE_IMAGE_SIGNING_STATUS: string[] = [
		"ecr:DescribeImageSigningStatus",
	];
	/** IAM actions required for the DescribeImages API call. */
	static readonly DESCRIBE_IMAGES: string[] = ["ecr:DescribeImages"];
	/** IAM actions required for the DescribePullThroughCacheRules API call. */
	static readonly DESCRIBE_PULL_THROUGH_CACHE_RULES: string[] = [
		"ecr:DescribePullThroughCacheRules",
	];
	/** IAM actions required for the DescribeRegistry API call. */
	static readonly DESCRIBE_REGISTRY: string[] = ["ecr:DescribeRegistry"];
	/** IAM actions required for the DescribeRepositories API call. */
	static readonly DESCRIBE_REPOSITORIES: string[] = [
		"ecr:DescribeRepositories",
	];
	/** IAM actions required for the DescribeRepositoryCreationTemplates API call. */
	static readonly DESCRIBE_REPOSITORY_CREATION_TEMPLATES: string[] = [
		"ecr:DescribeRepositoryCreationTemplates",
	];
	/** IAM actions required for the GetAccountSetting API call. */
	static readonly GET_ACCOUNT_SETTING: string[] = ["ecr:GetAccountSetting"];
	/** IAM actions required for the GetAuthorizationToken API call. */
	static readonly GET_AUTHORIZATION_TOKEN: string[] = [
		"ecr:GetAuthorizationToken",
	];
	/** IAM actions required for the GetDownloadUrlForLayer API call. */
	static readonly GET_DOWNLOAD_URL_FOR_LAYER: string[] = [
		"ecr:BatchImportUpstreamImage",
		"ecr:GetDownloadUrlForLayer",
	];
	/** IAM actions required for the GetLifecyclePolicy API call. */
	static readonly GET_LIFECYCLE_POLICY: string[] = ["ecr:GetLifecyclePolicy"];
	/** IAM actions required for the GetLifecyclePolicyPreview API call. */
	static readonly GET_LIFECYCLE_POLICY_PREVIEW: string[] = [
		"ecr:GetLifecyclePolicyPreview",
	];
	/** IAM actions required for the GetRegistryPolicy API call. */
	static readonly GET_REGISTRY_POLICY: string[] = ["ecr:GetRegistryPolicy"];
	/** IAM actions required for the GetRegistryScanningConfiguration API call. */
	static readonly GET_REGISTRY_SCANNING_CONFIGURATION: string[] = [
		"ecr:GetRegistryScanningConfiguration",
	];
	/** IAM actions required for the GetRepositoryPolicy API call. */
	static readonly GET_REPOSITORY_POLICY: string[] = ["ecr:GetRepositoryPolicy"];
	/** IAM actions required for the GetSigningConfiguration API call. */
	static readonly GET_SIGNING_CONFIGURATION: string[] = [
		"ecr:GetSigningConfiguration",
	];
	/** IAM actions required for the InitiateLayerUpload API call. */
	static readonly INITIATE_LAYER_UPLOAD: string[] = ["ecr:InitiateLayerUpload"];
	/** IAM actions required for the ListImageReferrers API call. */
	static readonly LIST_IMAGE_REFERRERS: string[] = [
		"ecr:BatchGetImage",
		"ecr:BatchImportUpstreamImage",
		"ecr:CreateRepository",
	];
	/** IAM actions required for the ListImages API call. */
	static readonly LIST_IMAGES: string[] = ["ecr:ListImages"];
	/** IAM actions required for the ListPullTimeUpdateExclusions API call. */
	static readonly LIST_PULL_TIME_UPDATE_EXCLUSIONS: string[] = [
		"ecr:ListPullTimeUpdateExclusions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"ecr:ListTagsForResource",
	];
	/** IAM actions required for the PutAccountSetting API call. */
	static readonly PUT_ACCOUNT_SETTING: string[] = ["ecr:PutAccountSetting"];
	/** IAM actions required for the PutImage API call. */
	static readonly PUT_IMAGE: string[] = ["ecr:PutImage"];
	/** IAM actions required for the PutImageScanningConfiguration API call. */
	static readonly PUT_IMAGE_SCANNING_CONFIGURATION: string[] = [
		"ecr:PutImageScanningConfiguration",
	];
	/** IAM actions required for the PutImageTagMutability API call. */
	static readonly PUT_IMAGE_TAG_MUTABILITY: string[] = [
		"ecr:PutImageTagMutability",
	];
	/** IAM actions required for the PutLifecyclePolicy API call. */
	static readonly PUT_LIFECYCLE_POLICY: string[] = ["ecr:PutLifecyclePolicy"];
	/** IAM actions required for the PutRegistryPolicy API call. */
	static readonly PUT_REGISTRY_POLICY: string[] = ["ecr:PutRegistryPolicy"];
	/** IAM actions required for the PutRegistryScanningConfiguration API call. */
	static readonly PUT_REGISTRY_SCANNING_CONFIGURATION: string[] = [
		"ecr:PutRegistryScanningConfiguration",
	];
	/** IAM actions required for the PutReplicationConfiguration API call. */
	static readonly PUT_REPLICATION_CONFIGURATION: string[] = [
		"ecr:PutReplicationConfiguration",
	];
	/** IAM actions required for the PutSigningConfiguration API call. */
	static readonly PUT_SIGNING_CONFIGURATION: string[] = [
		"ecr:PutSigningConfiguration",
	];
	/** IAM actions required for the RegisterPullTimeUpdateExclusion API call. */
	static readonly REGISTER_PULL_TIME_UPDATE_EXCLUSION: string[] = [
		"ecr:RegisterPullTimeUpdateExclusion",
	];
	/** IAM actions required for the SetRepositoryPolicy API call. */
	static readonly SET_REPOSITORY_POLICY: string[] = ["ecr:SetRepositoryPolicy"];
	/** IAM actions required for the StartImageScan API call. */
	static readonly START_IMAGE_SCAN: string[] = ["ecr:StartImageScan"];
	/** IAM actions required for the StartLifecyclePolicyPreview API call. */
	static readonly START_LIFECYCLE_POLICY_PREVIEW: string[] = [
		"ecr:StartLifecyclePolicyPreview",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["ecr:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["ecr:UntagResource"];
	/** IAM actions required for the UpdateImageStorageClass API call. */
	static readonly UPDATE_IMAGE_STORAGE_CLASS: string[] = [
		"ecr:UpdateImageStorageClass",
	];
	/** IAM actions required for the UpdatePullThroughCacheRule API call. */
	static readonly UPDATE_PULL_THROUGH_CACHE_RULE: string[] = [
		"iam:PassRole",
		"ecr:UpdatePullThroughCacheRule",
	];
	/** IAM actions required for the UpdateRepositoryCreationTemplate API call. */
	static readonly UPDATE_REPOSITORY_CREATION_TEMPLATE: string[] = [
		"ecr:CreateRepository",
		"iam:PassRole",
		"ecr:PutLifecyclePolicy",
		"ecr:SetRepositoryPolicy",
		"ecr:UpdateRepositoryCreationTemplate",
	];
	/** IAM actions required for the UploadLayerPart API call. */
	static readonly UPLOAD_LAYER_PART: string[] = ["ecr:UploadLayerPart"];
	/** IAM actions required for the ValidatePullThroughCacheRule API call. */
	static readonly VALIDATE_PULL_THROUGH_CACHE_RULE: string[] = [
		"ecr:ValidatePullThroughCacheRule",
	];
}

/**
 * Condition key constants and builders for ecr.
 */
export class ECRConditions {
	/** Condition keys applicable to the CreateRepository action. */
	static readonly CREATE_REPOSITORY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetAccountSetting action. */
	static readonly GET_ACCOUNT_SETTING_CONDITION_KEYS: string[] = [
		"ecr:AccountSetting",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutAccountSetting action. */
	static readonly PUT_ACCOUNT_SETTING_CONDITION_KEYS: string[] = [
		"ecr:AccountSetting",
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
	/** Condition key: ecr:AccountSetting (String) */
	static readonly ACCOUNT_SETTING = "ecr:AccountSetting";
	/** Condition key: ecr:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "ecr:ResourceTag/${TagKey}";

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
	 * Generates a condition block for `ecr:AccountSetting`.
	 */
	static accountSetting(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ecr:AccountSetting": value } };
	}

	/**
	 * Generates a condition block for `ecr:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ecr:ResourceTag/${TagKey}": value } };
	}
}
