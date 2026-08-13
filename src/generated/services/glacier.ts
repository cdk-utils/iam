// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/glacier.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the glacier service.
 */
export class GlacierActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "glacier";

	/** [Write] glacier:AbortMultipartUpload */
	static readonly AbortMultipartUpload = "glacier:AbortMultipartUpload";
	/** [PermissionManagement] glacier:AbortVaultLock */
	static readonly AbortVaultLock = "glacier:AbortVaultLock";
	/** [Tagging] glacier:AddTagsToVault */
	static readonly AddTagsToVault = "glacier:AddTagsToVault";
	/** [Write] glacier:CompleteMultipartUpload */
	static readonly CompleteMultipartUpload = "glacier:CompleteMultipartUpload";
	/** [PermissionManagement] glacier:CompleteVaultLock */
	static readonly CompleteVaultLock = "glacier:CompleteVaultLock";
	/** [Write] glacier:CreateVault */
	static readonly CreateVault = "glacier:CreateVault";
	/** [Write] glacier:DeleteArchive */
	static readonly DeleteArchive = "glacier:DeleteArchive";
	/** [Write] glacier:DeleteVault */
	static readonly DeleteVault = "glacier:DeleteVault";
	/** [PermissionManagement] glacier:DeleteVaultAccessPolicy */
	static readonly DeleteVaultAccessPolicy = "glacier:DeleteVaultAccessPolicy";
	/** [Write] glacier:DeleteVaultNotifications */
	static readonly DeleteVaultNotifications = "glacier:DeleteVaultNotifications";
	/** [Read] glacier:DescribeJob */
	static readonly DescribeJob = "glacier:DescribeJob";
	/** [Read] glacier:DescribeVault */
	static readonly DescribeVault = "glacier:DescribeVault";
	/** [Read] glacier:GetDataRetrievalPolicy */
	static readonly actionGetDataRetrievalPolicy =
		"glacier:GetDataRetrievalPolicy";
	/** [Read] glacier:GetJobOutput */
	static readonly actionGetJobOutput = "glacier:GetJobOutput";
	/** [Read] glacier:GetVaultAccessPolicy */
	static readonly actionGetVaultAccessPolicy = "glacier:GetVaultAccessPolicy";
	/** [Read] glacier:GetVaultLock */
	static readonly actionGetVaultLock = "glacier:GetVaultLock";
	/** [Read] glacier:GetVaultNotifications */
	static readonly actionGetVaultNotifications = "glacier:GetVaultNotifications";
	/** [Write] glacier:InitiateJob */
	static readonly InitiateJob = "glacier:InitiateJob";
	/** [Write] glacier:InitiateMultipartUpload */
	static readonly InitiateMultipartUpload = "glacier:InitiateMultipartUpload";
	/** [PermissionManagement] glacier:InitiateVaultLock */
	static readonly InitiateVaultLock = "glacier:InitiateVaultLock";
	/** [List] glacier:ListJobs */
	static readonly ListJobs = "glacier:ListJobs";
	/** [List] glacier:ListMultipartUploads */
	static readonly ListMultipartUploads = "glacier:ListMultipartUploads";
	/** [List] glacier:ListParts */
	static readonly ListParts = "glacier:ListParts";
	/** [List] glacier:ListProvisionedCapacity */
	static readonly ListProvisionedCapacity = "glacier:ListProvisionedCapacity";
	/** [List] glacier:ListTagsForVault */
	static readonly ListTagsForVault = "glacier:ListTagsForVault";
	/** [List] glacier:ListVaults */
	static readonly ListVaults = "glacier:ListVaults";
	/** [Write] glacier:PurchaseProvisionedCapacity */
	static readonly PurchaseProvisionedCapacity =
		"glacier:PurchaseProvisionedCapacity";
	/** [Tagging] glacier:RemoveTagsFromVault */
	static readonly RemoveTagsFromVault = "glacier:RemoveTagsFromVault";
	/** [PermissionManagement] glacier:SetDataRetrievalPolicy */
	static readonly actionSetDataRetrievalPolicy =
		"glacier:SetDataRetrievalPolicy";
	/** [PermissionManagement] glacier:SetVaultAccessPolicy */
	static readonly actionSetVaultAccessPolicy = "glacier:SetVaultAccessPolicy";
	/** [Write] glacier:SetVaultNotifications */
	static readonly actionSetVaultNotifications = "glacier:SetVaultNotifications";
	/** [Write] glacier:UploadArchive */
	static readonly UploadArchive = "glacier:UploadArchive";
	/** [Write] glacier:UploadMultipartPart */
	static readonly UploadMultipartPart = "glacier:UploadMultipartPart";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GlacierActions.DescribeJob,
		GlacierActions.DescribeVault,
		GlacierActions.actionGetDataRetrievalPolicy,
		GlacierActions.actionGetJobOutput,
		GlacierActions.actionGetVaultAccessPolicy,
		GlacierActions.actionGetVaultLock,
		GlacierActions.actionGetVaultNotifications,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		GlacierActions.AbortMultipartUpload,
		GlacierActions.CompleteMultipartUpload,
		GlacierActions.CreateVault,
		GlacierActions.DeleteArchive,
		GlacierActions.DeleteVault,
		GlacierActions.DeleteVaultNotifications,
		GlacierActions.InitiateJob,
		GlacierActions.InitiateMultipartUpload,
		GlacierActions.PurchaseProvisionedCapacity,
		GlacierActions.actionSetVaultNotifications,
		GlacierActions.UploadArchive,
		GlacierActions.UploadMultipartPart,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		GlacierActions.ListJobs,
		GlacierActions.ListMultipartUploads,
		GlacierActions.ListParts,
		GlacierActions.ListProvisionedCapacity,
		GlacierActions.ListTagsForVault,
		GlacierActions.ListVaults,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		GlacierActions.AbortVaultLock,
		GlacierActions.CompleteVaultLock,
		GlacierActions.DeleteVaultAccessPolicy,
		GlacierActions.InitiateVaultLock,
		GlacierActions.actionSetDataRetrievalPolicy,
		GlacierActions.actionSetVaultAccessPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		GlacierActions.AddTagsToVault,
		GlacierActions.RemoveTagsFromVault,
	];
}

/**
 * Properties for building a vault ARN.
 */
export interface GlacierVaultArnProps {
	/** The VaultName component of the ARN. */
	readonly vaultName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a vault ARN.
 */
export interface GlacierVaultArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VaultName component. */
	readonly vaultName: string;
}

const VaultArnRegex =
	/^arn:(?<partition>[^:]+):glacier:(?<region>[^:]*):(?<account>[^:]*):vaults\/(?<vaultName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for glacier resources.
 */
export class GlacierResources {
	/**
	 * Builds an ARN for the vault resource.
	 */
	static vault(props: GlacierVaultArnProps): string {
		return `arn:${props.partition ?? "aws"}:glacier:${props.region ?? "*"}:${props.account ?? "*"}:vaults/${props.vaultName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vault resource.
	 */
	static isValidVaultArn(arn: string): boolean {
		return VaultArnRegex.test(arn);
	}

	/**
	 * Parses a vault ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVaultArn(arn: string): GlacierVaultArnComponents {
		const match = VaultArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vault ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vaultName: match.groups!.vaultName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for glacier.
 */
export class GlacierOperations {
	/** IAM actions required for the AbortMultipartUpload API call. */
	static readonly AbortMultipartUpload: string[] = [
		"glacier:AbortMultipartUpload",
	];
	/** IAM actions required for the AbortVaultLock API call. */
	static readonly AbortVaultLock: string[] = ["glacier:AbortVaultLock"];
	/** IAM actions required for the AddTagsToVault API call. */
	static readonly AddTagsToVault: string[] = ["glacier:AddTagsToVault"];
	/** IAM actions required for the CompleteMultipartUpload API call. */
	static readonly CompleteMultipartUpload: string[] = [
		"glacier:CompleteMultipartUpload",
	];
	/** IAM actions required for the CompleteVaultLock API call. */
	static readonly CompleteVaultLock: string[] = ["glacier:CompleteVaultLock"];
	/** IAM actions required for the CreateVault API call. */
	static readonly CreateVault: string[] = ["glacier:CreateVault"];
	/** IAM actions required for the DeleteArchive API call. */
	static readonly DeleteArchive: string[] = ["glacier:DeleteArchive"];
	/** IAM actions required for the DeleteVault API call. */
	static readonly DeleteVault: string[] = ["glacier:DeleteVault"];
	/** IAM actions required for the DeleteVaultAccessPolicy API call. */
	static readonly DeleteVaultAccessPolicy: string[] = [
		"glacier:DeleteVaultAccessPolicy",
	];
	/** IAM actions required for the DeleteVaultNotifications API call. */
	static readonly DeleteVaultNotifications: string[] = [
		"glacier:DeleteVaultNotifications",
	];
	/** IAM actions required for the DescribeJob API call. */
	static readonly DescribeJob: string[] = ["glacier:DescribeJob"];
	/** IAM actions required for the DescribeVault API call. */
	static readonly DescribeVault: string[] = ["glacier:DescribeVault"];
	/** IAM actions required for the GetDataRetrievalPolicy API call. */
	static readonly opGetDataRetrievalPolicy: string[] = [
		"glacier:GetDataRetrievalPolicy",
	];
	/** IAM actions required for the GetJobOutput API call. */
	static readonly opGetJobOutput: string[] = ["glacier:GetJobOutput"];
	/** IAM actions required for the GetVaultAccessPolicy API call. */
	static readonly opGetVaultAccessPolicy: string[] = [
		"glacier:GetVaultAccessPolicy",
	];
	/** IAM actions required for the GetVaultLock API call. */
	static readonly opGetVaultLock: string[] = ["glacier:GetVaultLock"];
	/** IAM actions required for the GetVaultNotifications API call. */
	static readonly opGetVaultNotifications: string[] = [
		"glacier:GetVaultNotifications",
	];
	/** IAM actions required for the InitiateJob API call. */
	static readonly InitiateJob: string[] = [
		"glacier:GetJobOutput",
		"glacier:InitiateJob",
	];
	/** IAM actions required for the InitiateMultipartUpload API call. */
	static readonly InitiateMultipartUpload: string[] = [
		"glacier:InitiateMultipartUpload",
	];
	/** IAM actions required for the InitiateVaultLock API call. */
	static readonly InitiateVaultLock: string[] = ["glacier:InitiateVaultLock"];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["glacier:ListJobs"];
	/** IAM actions required for the ListMultipartUploads API call. */
	static readonly ListMultipartUploads: string[] = [
		"glacier:ListMultipartUploads",
	];
	/** IAM actions required for the ListParts API call. */
	static readonly ListParts: string[] = ["glacier:ListParts"];
	/** IAM actions required for the ListProvisionedCapacity API call. */
	static readonly ListProvisionedCapacity: string[] = [
		"glacier:ListProvisionedCapacity",
	];
	/** IAM actions required for the ListTagsForVault API call. */
	static readonly ListTagsForVault: string[] = ["glacier:ListTagsForVault"];
	/** IAM actions required for the ListVaults API call. */
	static readonly ListVaults: string[] = ["glacier:ListVaults"];
	/** IAM actions required for the PurchaseProvisionedCapacity API call. */
	static readonly PurchaseProvisionedCapacity: string[] = [
		"glacier:PurchaseProvisionedCapacity",
	];
	/** IAM actions required for the RemoveTagsFromVault API call. */
	static readonly RemoveTagsFromVault: string[] = [
		"glacier:RemoveTagsFromVault",
	];
	/** IAM actions required for the SetDataRetrievalPolicy API call. */
	static readonly opSetDataRetrievalPolicy: string[] = [
		"glacier:SetDataRetrievalPolicy",
	];
	/** IAM actions required for the SetVaultAccessPolicy API call. */
	static readonly opSetVaultAccessPolicy: string[] = [
		"glacier:SetVaultAccessPolicy",
	];
	/** IAM actions required for the SetVaultNotifications API call. */
	static readonly opSetVaultNotifications: string[] = [
		"glacier:SetVaultNotifications",
	];
	/** IAM actions required for the UploadArchive API call. */
	static readonly UploadArchive: string[] = ["glacier:UploadArchive"];
	/** IAM actions required for the UploadMultipartPart API call. */
	static readonly UploadMultipartPart: string[] = [
		"glacier:UploadMultipartPart",
	];
}

/**
 * Condition key constants and builders for glacier.
 */
export class GlacierConditions {
	/** Condition keys applicable to the DeleteArchive action. */
	static readonly DeleteArchiveConditionKeys: string[] = [
		"glacier:ArchiveAgeInDays",
	];
	/** Condition keys applicable to the InitiateJob action. */
	static readonly InitiateJobConditionKeys: string[] = [
		"glacier:ArchiveAgeInDays",
	];

	/** Condition key: glacier:ArchiveAgeInDays (String) */
	static readonly ARCHIVE_AGE_IN_DAYS = "glacier:ArchiveAgeInDays";
	/** Condition key: glacier:ResourceTag/ (String) */
	static readonly RESOURCE_TAG = "glacier:ResourceTag/";

	/**
	 * Generates a condition block for `glacier:ArchiveAgeInDays`.
	 */
	static archiveAgeInDays(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "glacier:ArchiveAgeInDays": value } };
	}

	/**
	 * Generates a condition block for `glacier:ResourceTag/`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "glacier:ResourceTag/": value } };
	}
}
