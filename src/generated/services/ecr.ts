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
	static readonly BatchCheckLayerAvailability =
		"ecr:BatchCheckLayerAvailability";
	/** [Write] ecr:BatchDeleteImage */
	static readonly BatchDeleteImage = "ecr:BatchDeleteImage";
	/** [Read] ecr:BatchGetImage */
	static readonly BatchGetImage = "ecr:BatchGetImage";
	/** [Read] ecr:BatchGetRepositoryScanningConfiguration */
	static readonly BatchGetRepositoryScanningConfiguration =
		"ecr:BatchGetRepositoryScanningConfiguration";
	/** [Write] ecr:BatchImportUpstreamImage */
	static readonly BatchImportUpstreamImage = "ecr:BatchImportUpstreamImage";
	/** [Write] ecr:CompleteLayerUpload */
	static readonly CompleteLayerUpload = "ecr:CompleteLayerUpload";
	/** [Write] ecr:CreatePullThroughCacheRule */
	static readonly CreatePullThroughCacheRule = "ecr:CreatePullThroughCacheRule";
	/** [Write] ecr:CreateRepository */
	static readonly CreateRepository = "ecr:CreateRepository";
	/** [Write] ecr:CreateRepositoryCreationTemplate */
	static readonly CreateRepositoryCreationTemplate =
		"ecr:CreateRepositoryCreationTemplate";
	/** [Write] ecr:DeleteLifecyclePolicy */
	static readonly DeleteLifecyclePolicy = "ecr:DeleteLifecyclePolicy";
	/** [Write] ecr:DeletePullThroughCacheRule */
	static readonly DeletePullThroughCacheRule = "ecr:DeletePullThroughCacheRule";
	/** [PermissionManagement] ecr:DeleteRegistryPolicy */
	static readonly DeleteRegistryPolicy = "ecr:DeleteRegistryPolicy";
	/** [Write] ecr:DeleteRepository */
	static readonly DeleteRepository = "ecr:DeleteRepository";
	/** [Write] ecr:DeleteRepositoryCreationTemplate */
	static readonly DeleteRepositoryCreationTemplate =
		"ecr:DeleteRepositoryCreationTemplate";
	/** [PermissionManagement] ecr:DeleteRepositoryPolicy */
	static readonly DeleteRepositoryPolicy = "ecr:DeleteRepositoryPolicy";
	/** [Write] ecr:DeleteSigningConfiguration */
	static readonly DeleteSigningConfiguration = "ecr:DeleteSigningConfiguration";
	/** [Write] ecr:DeregisterPullTimeUpdateExclusion */
	static readonly DeregisterPullTimeUpdateExclusion =
		"ecr:DeregisterPullTimeUpdateExclusion";
	/** [Read] ecr:DescribeImageReplicationStatus */
	static readonly DescribeImageReplicationStatus =
		"ecr:DescribeImageReplicationStatus";
	/** [Read] ecr:DescribeImageScanFindings */
	static readonly DescribeImageScanFindings = "ecr:DescribeImageScanFindings";
	/** [Read] ecr:DescribeImageSigningStatus */
	static readonly DescribeImageSigningStatus = "ecr:DescribeImageSigningStatus";
	/** [List] ecr:DescribeImages */
	static readonly DescribeImages = "ecr:DescribeImages";
	/** [List] ecr:DescribePullThroughCacheRules */
	static readonly DescribePullThroughCacheRules =
		"ecr:DescribePullThroughCacheRules";
	/** [Read] ecr:DescribeRegistry */
	static readonly DescribeRegistry = "ecr:DescribeRegistry";
	/** [Read] ecr:DescribeRepositories */
	static readonly DescribeRepositories = "ecr:DescribeRepositories";
	/** [Read] ecr:DescribeRepositoryCreationTemplates */
	static readonly DescribeRepositoryCreationTemplates =
		"ecr:DescribeRepositoryCreationTemplates";
	/** [Read] ecr:GetAccountSetting */
	static readonly actionGetAccountSetting = "ecr:GetAccountSetting";
	/** [Read] ecr:GetAuthorizationToken */
	static readonly actionGetAuthorizationToken = "ecr:GetAuthorizationToken";
	/** [Read] ecr:GetDownloadUrlForLayer */
	static readonly actionGetDownloadUrlForLayer = "ecr:GetDownloadUrlForLayer";
	/** [Read] ecr:GetImageCopyStatus */
	static readonly actionGetImageCopyStatus = "ecr:GetImageCopyStatus";
	/** [Read] ecr:GetLifecyclePolicy */
	static readonly actionGetLifecyclePolicy = "ecr:GetLifecyclePolicy";
	/** [Read] ecr:GetLifecyclePolicyPreview */
	static readonly actionGetLifecyclePolicyPreview =
		"ecr:GetLifecyclePolicyPreview";
	/** [Read] ecr:GetRegistryPolicy */
	static readonly actionGetRegistryPolicy = "ecr:GetRegistryPolicy";
	/** [Read] ecr:GetRegistryScanningConfiguration */
	static readonly actionGetRegistryScanningConfiguration =
		"ecr:GetRegistryScanningConfiguration";
	/** [Read] ecr:GetRepositoryPolicy */
	static readonly actionGetRepositoryPolicy = "ecr:GetRepositoryPolicy";
	/** [Read] ecr:GetSigningConfiguration */
	static readonly actionGetSigningConfiguration = "ecr:GetSigningConfiguration";
	/** [Write] ecr:InitiateLayerUpload */
	static readonly InitiateLayerUpload = "ecr:InitiateLayerUpload";
	/** [List] ecr:ListImages */
	static readonly ListImages = "ecr:ListImages";
	/** [List] ecr:ListPullTimeUpdateExclusions */
	static readonly ListPullTimeUpdateExclusions =
		"ecr:ListPullTimeUpdateExclusions";
	/** [Read] ecr:ListTagsForResource */
	static readonly ListTagsForResource = "ecr:ListTagsForResource";
	/** [Write] ecr:PutAccountSetting */
	static readonly PutAccountSetting = "ecr:PutAccountSetting";
	/** [Write] ecr:PutImage */
	static readonly PutImage = "ecr:PutImage";
	/** [Write] ecr:PutImageScanningConfiguration */
	static readonly PutImageScanningConfiguration =
		"ecr:PutImageScanningConfiguration";
	/** [Write] ecr:PutImageTagMutability */
	static readonly PutImageTagMutability = "ecr:PutImageTagMutability";
	/** [Write] ecr:PutLifecyclePolicy */
	static readonly PutLifecyclePolicy = "ecr:PutLifecyclePolicy";
	/** [PermissionManagement] ecr:PutRegistryPolicy */
	static readonly PutRegistryPolicy = "ecr:PutRegistryPolicy";
	/** [Write] ecr:PutRegistryScanningConfiguration */
	static readonly PutRegistryScanningConfiguration =
		"ecr:PutRegistryScanningConfiguration";
	/** [Write] ecr:PutReplicationConfiguration */
	static readonly PutReplicationConfiguration =
		"ecr:PutReplicationConfiguration";
	/** [Write] ecr:PutSigningConfiguration */
	static readonly PutSigningConfiguration = "ecr:PutSigningConfiguration";
	/** [Write] ecr:RegisterPullTimeUpdateExclusion */
	static readonly RegisterPullTimeUpdateExclusion =
		"ecr:RegisterPullTimeUpdateExclusion";
	/** [Write] ecr:ReplicateImage */
	static readonly ReplicateImage = "ecr:ReplicateImage";
	/** [PermissionManagement] ecr:SetRepositoryPolicy */
	static readonly actionSetRepositoryPolicy = "ecr:SetRepositoryPolicy";
	/** [Write] ecr:StartImageScan */
	static readonly StartImageScan = "ecr:StartImageScan";
	/** [Write] ecr:StartLifecyclePolicyPreview */
	static readonly StartLifecyclePolicyPreview =
		"ecr:StartLifecyclePolicyPreview";
	/** [Tagging] ecr:TagResource */
	static readonly TagResource = "ecr:TagResource";
	/** [Tagging] ecr:UntagResource */
	static readonly UntagResource = "ecr:UntagResource";
	/** [Write] ecr:UpdateImageStorageClass */
	static readonly UpdateImageStorageClass = "ecr:UpdateImageStorageClass";
	/** [Write] ecr:UpdatePullThroughCacheRule */
	static readonly UpdatePullThroughCacheRule = "ecr:UpdatePullThroughCacheRule";
	/** [Write] ecr:UpdateRepositoryCreationTemplate */
	static readonly UpdateRepositoryCreationTemplate =
		"ecr:UpdateRepositoryCreationTemplate";
	/** [Write] ecr:UploadLayerPart */
	static readonly UploadLayerPart = "ecr:UploadLayerPart";
	/** [Read] ecr:ValidatePullThroughCacheRule */
	static readonly ValidatePullThroughCacheRule =
		"ecr:ValidatePullThroughCacheRule";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ECRActions.BatchCheckLayerAvailability,
		ECRActions.BatchGetImage,
		ECRActions.BatchGetRepositoryScanningConfiguration,
		ECRActions.DescribeImageReplicationStatus,
		ECRActions.DescribeImageScanFindings,
		ECRActions.DescribeImageSigningStatus,
		ECRActions.DescribeRegistry,
		ECRActions.DescribeRepositories,
		ECRActions.DescribeRepositoryCreationTemplates,
		ECRActions.actionGetAccountSetting,
		ECRActions.actionGetAuthorizationToken,
		ECRActions.actionGetDownloadUrlForLayer,
		ECRActions.actionGetImageCopyStatus,
		ECRActions.actionGetLifecyclePolicy,
		ECRActions.actionGetLifecyclePolicyPreview,
		ECRActions.actionGetRegistryPolicy,
		ECRActions.actionGetRegistryScanningConfiguration,
		ECRActions.actionGetRepositoryPolicy,
		ECRActions.actionGetSigningConfiguration,
		ECRActions.ListTagsForResource,
		ECRActions.ValidatePullThroughCacheRule,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ECRActions.BatchDeleteImage,
		ECRActions.BatchImportUpstreamImage,
		ECRActions.CompleteLayerUpload,
		ECRActions.CreatePullThroughCacheRule,
		ECRActions.CreateRepository,
		ECRActions.CreateRepositoryCreationTemplate,
		ECRActions.DeleteLifecyclePolicy,
		ECRActions.DeletePullThroughCacheRule,
		ECRActions.DeleteRepository,
		ECRActions.DeleteRepositoryCreationTemplate,
		ECRActions.DeleteSigningConfiguration,
		ECRActions.DeregisterPullTimeUpdateExclusion,
		ECRActions.InitiateLayerUpload,
		ECRActions.PutAccountSetting,
		ECRActions.PutImage,
		ECRActions.PutImageScanningConfiguration,
		ECRActions.PutImageTagMutability,
		ECRActions.PutLifecyclePolicy,
		ECRActions.PutRegistryScanningConfiguration,
		ECRActions.PutReplicationConfiguration,
		ECRActions.PutSigningConfiguration,
		ECRActions.RegisterPullTimeUpdateExclusion,
		ECRActions.ReplicateImage,
		ECRActions.StartImageScan,
		ECRActions.StartLifecyclePolicyPreview,
		ECRActions.UpdateImageStorageClass,
		ECRActions.UpdatePullThroughCacheRule,
		ECRActions.UpdateRepositoryCreationTemplate,
		ECRActions.UploadLayerPart,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ECRActions.DescribeImages,
		ECRActions.DescribePullThroughCacheRules,
		ECRActions.ListImages,
		ECRActions.ListPullTimeUpdateExclusions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ECRActions.DeleteRegistryPolicy,
		ECRActions.DeleteRepositoryPolicy,
		ECRActions.PutRegistryPolicy,
		ECRActions.actionSetRepositoryPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ECRActions.TagResource,
		ECRActions.UntagResource,
	];
}

/**
 * Properties for building a repository ARN.
 */
export interface ECRRepositoryArnProps {
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
export interface ECRRepositoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RepositoryName component. */
	readonly repositoryName: string;
}

const RepositoryArnRegex =
	/^arn:(?<partition>[^:]+):ecr:(?<region>[^:]*):(?<account>[^:]*):repository\/(?<repositoryName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ecr resources.
 */
export class ECRResources {
	/**
	 * Builds an ARN for the repository resource.
	 */
	static repository(props: ECRRepositoryArnProps): string {
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
	static parseRepositoryArn(arn: string): ECRRepositoryArnComponents {
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
	static readonly BatchCheckLayerAvailability: string[] = [
		"ecr:BatchCheckLayerAvailability",
	];
	/** IAM actions required for the BatchDeleteImage API call. */
	static readonly BatchDeleteImage: string[] = ["ecr:BatchDeleteImage"];
	/** IAM actions required for the BatchGetImage API call. */
	static readonly BatchGetImage: string[] = [
		"ecr:BatchGetImage",
		"ecr:BatchImportUpstreamImage",
		"ecr:CreateRepository",
		"ecr:TagResource",
	];
	/** IAM actions required for the BatchGetRepositoryScanningConfiguration API call. */
	static readonly BatchGetRepositoryScanningConfiguration: string[] = [
		"ecr:BatchGetRepositoryScanningConfiguration",
	];
	/** IAM actions required for the CompleteLayerUpload API call. */
	static readonly CompleteLayerUpload: string[] = ["ecr:CompleteLayerUpload"];
	/** IAM actions required for the CreatePullThroughCacheRule API call. */
	static readonly CreatePullThroughCacheRule: string[] = [
		"ecr:CreatePullThroughCacheRule",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateRepository API call. */
	static readonly CreateRepository: string[] = [
		"ecr:CreateRepository",
		"ecr:TagResource",
	];
	/** IAM actions required for the CreateRepositoryCreationTemplate API call. */
	static readonly CreateRepositoryCreationTemplate: string[] = [
		"ecr:CreateRepository",
		"ecr:CreateRepositoryCreationTemplate",
		"iam:PassRole",
		"ecr:PutLifecyclePolicy",
		"ecr:SetRepositoryPolicy",
	];
	/** IAM actions required for the DeleteLifecyclePolicy API call. */
	static readonly DeleteLifecyclePolicy: string[] = [
		"ecr:DeleteLifecyclePolicy",
	];
	/** IAM actions required for the DeletePullThroughCacheRule API call. */
	static readonly DeletePullThroughCacheRule: string[] = [
		"ecr:DeletePullThroughCacheRule",
	];
	/** IAM actions required for the DeleteRegistryPolicy API call. */
	static readonly DeleteRegistryPolicy: string[] = ["ecr:DeleteRegistryPolicy"];
	/** IAM actions required for the DeleteRepository API call. */
	static readonly DeleteRepository: string[] = ["ecr:DeleteRepository"];
	/** IAM actions required for the DeleteRepositoryCreationTemplate API call. */
	static readonly DeleteRepositoryCreationTemplate: string[] = [
		"ecr:DeleteRepositoryCreationTemplate",
	];
	/** IAM actions required for the DeleteRepositoryPolicy API call. */
	static readonly DeleteRepositoryPolicy: string[] = [
		"ecr:DeleteRepositoryPolicy",
	];
	/** IAM actions required for the DeleteSigningConfiguration API call. */
	static readonly DeleteSigningConfiguration: string[] = [
		"ecr:DeleteSigningConfiguration",
	];
	/** IAM actions required for the DeregisterPullTimeUpdateExclusion API call. */
	static readonly DeregisterPullTimeUpdateExclusion: string[] = [
		"ecr:DeregisterPullTimeUpdateExclusion",
	];
	/** IAM actions required for the DescribeImageReplicationStatus API call. */
	static readonly DescribeImageReplicationStatus: string[] = [
		"ecr:DescribeImageReplicationStatus",
	];
	/** IAM actions required for the DescribeImageScanFindings API call. */
	static readonly DescribeImageScanFindings: string[] = [
		"ecr:DescribeImageScanFindings",
	];
	/** IAM actions required for the DescribeImageSigningStatus API call. */
	static readonly DescribeImageSigningStatus: string[] = [
		"ecr:DescribeImageSigningStatus",
	];
	/** IAM actions required for the DescribeImages API call. */
	static readonly DescribeImages: string[] = ["ecr:DescribeImages"];
	/** IAM actions required for the DescribePullThroughCacheRules API call. */
	static readonly DescribePullThroughCacheRules: string[] = [
		"ecr:DescribePullThroughCacheRules",
	];
	/** IAM actions required for the DescribeRegistry API call. */
	static readonly DescribeRegistry: string[] = ["ecr:DescribeRegistry"];
	/** IAM actions required for the DescribeRepositories API call. */
	static readonly DescribeRepositories: string[] = ["ecr:DescribeRepositories"];
	/** IAM actions required for the DescribeRepositoryCreationTemplates API call. */
	static readonly DescribeRepositoryCreationTemplates: string[] = [
		"ecr:DescribeRepositoryCreationTemplates",
	];
	/** IAM actions required for the GetAccountSetting API call. */
	static readonly opGetAccountSetting: string[] = ["ecr:GetAccountSetting"];
	/** IAM actions required for the GetAuthorizationToken API call. */
	static readonly opGetAuthorizationToken: string[] = [
		"ecr:GetAuthorizationToken",
	];
	/** IAM actions required for the GetDownloadUrlForLayer API call. */
	static readonly opGetDownloadUrlForLayer: string[] = [
		"ecr:BatchImportUpstreamImage",
		"ecr:GetDownloadUrlForLayer",
	];
	/** IAM actions required for the GetLifecyclePolicy API call. */
	static readonly opGetLifecyclePolicy: string[] = ["ecr:GetLifecyclePolicy"];
	/** IAM actions required for the GetLifecyclePolicyPreview API call. */
	static readonly opGetLifecyclePolicyPreview: string[] = [
		"ecr:GetLifecyclePolicyPreview",
	];
	/** IAM actions required for the GetRegistryPolicy API call. */
	static readonly opGetRegistryPolicy: string[] = ["ecr:GetRegistryPolicy"];
	/** IAM actions required for the GetRegistryScanningConfiguration API call. */
	static readonly opGetRegistryScanningConfiguration: string[] = [
		"ecr:GetRegistryScanningConfiguration",
	];
	/** IAM actions required for the GetRepositoryPolicy API call. */
	static readonly opGetRepositoryPolicy: string[] = ["ecr:GetRepositoryPolicy"];
	/** IAM actions required for the GetSigningConfiguration API call. */
	static readonly opGetSigningConfiguration: string[] = [
		"ecr:GetSigningConfiguration",
	];
	/** IAM actions required for the InitiateLayerUpload API call. */
	static readonly InitiateLayerUpload: string[] = ["ecr:InitiateLayerUpload"];
	/** IAM actions required for the ListImageReferrers API call. */
	static readonly ListImageReferrers: string[] = [
		"ecr:BatchGetImage",
		"ecr:BatchImportUpstreamImage",
		"ecr:CreateRepository",
	];
	/** IAM actions required for the ListImages API call. */
	static readonly ListImages: string[] = ["ecr:ListImages"];
	/** IAM actions required for the ListPullTimeUpdateExclusions API call. */
	static readonly ListPullTimeUpdateExclusions: string[] = [
		"ecr:ListPullTimeUpdateExclusions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["ecr:ListTagsForResource"];
	/** IAM actions required for the PutAccountSetting API call. */
	static readonly PutAccountSetting: string[] = ["ecr:PutAccountSetting"];
	/** IAM actions required for the PutImage API call. */
	static readonly PutImage: string[] = ["ecr:PutImage"];
	/** IAM actions required for the PutImageScanningConfiguration API call. */
	static readonly PutImageScanningConfiguration: string[] = [
		"ecr:PutImageScanningConfiguration",
	];
	/** IAM actions required for the PutImageTagMutability API call. */
	static readonly PutImageTagMutability: string[] = [
		"ecr:PutImageTagMutability",
	];
	/** IAM actions required for the PutLifecyclePolicy API call. */
	static readonly PutLifecyclePolicy: string[] = ["ecr:PutLifecyclePolicy"];
	/** IAM actions required for the PutRegistryPolicy API call. */
	static readonly PutRegistryPolicy: string[] = ["ecr:PutRegistryPolicy"];
	/** IAM actions required for the PutRegistryScanningConfiguration API call. */
	static readonly PutRegistryScanningConfiguration: string[] = [
		"ecr:PutRegistryScanningConfiguration",
	];
	/** IAM actions required for the PutReplicationConfiguration API call. */
	static readonly PutReplicationConfiguration: string[] = [
		"ecr:PutReplicationConfiguration",
	];
	/** IAM actions required for the PutSigningConfiguration API call. */
	static readonly PutSigningConfiguration: string[] = [
		"ecr:PutSigningConfiguration",
	];
	/** IAM actions required for the RegisterPullTimeUpdateExclusion API call. */
	static readonly RegisterPullTimeUpdateExclusion: string[] = [
		"ecr:RegisterPullTimeUpdateExclusion",
	];
	/** IAM actions required for the SetRepositoryPolicy API call. */
	static readonly opSetRepositoryPolicy: string[] = ["ecr:SetRepositoryPolicy"];
	/** IAM actions required for the StartImageScan API call. */
	static readonly StartImageScan: string[] = ["ecr:StartImageScan"];
	/** IAM actions required for the StartLifecyclePolicyPreview API call. */
	static readonly StartLifecyclePolicyPreview: string[] = [
		"ecr:StartLifecyclePolicyPreview",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["ecr:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["ecr:UntagResource"];
	/** IAM actions required for the UpdateImageStorageClass API call. */
	static readonly UpdateImageStorageClass: string[] = [
		"ecr:UpdateImageStorageClass",
	];
	/** IAM actions required for the UpdatePullThroughCacheRule API call. */
	static readonly UpdatePullThroughCacheRule: string[] = [
		"iam:PassRole",
		"ecr:UpdatePullThroughCacheRule",
	];
	/** IAM actions required for the UpdateRepositoryCreationTemplate API call. */
	static readonly UpdateRepositoryCreationTemplate: string[] = [
		"ecr:CreateRepository",
		"iam:PassRole",
		"ecr:PutLifecyclePolicy",
		"ecr:SetRepositoryPolicy",
		"ecr:UpdateRepositoryCreationTemplate",
	];
	/** IAM actions required for the UploadLayerPart API call. */
	static readonly UploadLayerPart: string[] = ["ecr:UploadLayerPart"];
	/** IAM actions required for the ValidatePullThroughCacheRule API call. */
	static readonly ValidatePullThroughCacheRule: string[] = [
		"ecr:ValidatePullThroughCacheRule",
	];
}

/**
 * Condition key constants and builders for ecr.
 */
export class ECRConditions {
	/** Condition keys applicable to the CreateRepository action. */
	static readonly CreateRepositoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetAccountSetting action. */
	static readonly actionGetAccountSettingConditionKeys: string[] = [
		"ecr:AccountSetting",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutAccountSetting action. */
	static readonly PutAccountSettingConditionKeys: string[] = [
		"ecr:AccountSetting",
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
}
