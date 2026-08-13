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
	static readonly ABORT_MULTIPART_UPLOAD = "glacier:AbortMultipartUpload";
	/** [PermissionManagement] glacier:AbortVaultLock */
	static readonly ABORT_VAULT_LOCK = "glacier:AbortVaultLock";
	/** [Tagging] glacier:AddTagsToVault */
	static readonly ADD_TAGS_TO_VAULT = "glacier:AddTagsToVault";
	/** [Write] glacier:CompleteMultipartUpload */
	static readonly COMPLETE_MULTIPART_UPLOAD = "glacier:CompleteMultipartUpload";
	/** [PermissionManagement] glacier:CompleteVaultLock */
	static readonly COMPLETE_VAULT_LOCK = "glacier:CompleteVaultLock";
	/** [Write] glacier:CreateVault */
	static readonly CREATE_VAULT = "glacier:CreateVault";
	/** [Write] glacier:DeleteArchive */
	static readonly DELETE_ARCHIVE = "glacier:DeleteArchive";
	/** [Write] glacier:DeleteVault */
	static readonly DELETE_VAULT = "glacier:DeleteVault";
	/** [PermissionManagement] glacier:DeleteVaultAccessPolicy */
	static readonly DELETE_VAULT_ACCESS_POLICY =
		"glacier:DeleteVaultAccessPolicy";
	/** [Write] glacier:DeleteVaultNotifications */
	static readonly DELETE_VAULT_NOTIFICATIONS =
		"glacier:DeleteVaultNotifications";
	/** [Read] glacier:DescribeJob */
	static readonly DESCRIBE_JOB = "glacier:DescribeJob";
	/** [Read] glacier:DescribeVault */
	static readonly DESCRIBE_VAULT = "glacier:DescribeVault";
	/** [Read] glacier:GetDataRetrievalPolicy */
	static readonly GET_DATA_RETRIEVAL_POLICY = "glacier:GetDataRetrievalPolicy";
	/** [Read] glacier:GetJobOutput */
	static readonly GET_JOB_OUTPUT = "glacier:GetJobOutput";
	/** [Read] glacier:GetVaultAccessPolicy */
	static readonly GET_VAULT_ACCESS_POLICY = "glacier:GetVaultAccessPolicy";
	/** [Read] glacier:GetVaultLock */
	static readonly GET_VAULT_LOCK = "glacier:GetVaultLock";
	/** [Read] glacier:GetVaultNotifications */
	static readonly GET_VAULT_NOTIFICATIONS = "glacier:GetVaultNotifications";
	/** [Write] glacier:InitiateJob */
	static readonly INITIATE_JOB = "glacier:InitiateJob";
	/** [Write] glacier:InitiateMultipartUpload */
	static readonly INITIATE_MULTIPART_UPLOAD = "glacier:InitiateMultipartUpload";
	/** [PermissionManagement] glacier:InitiateVaultLock */
	static readonly INITIATE_VAULT_LOCK = "glacier:InitiateVaultLock";
	/** [List] glacier:ListJobs */
	static readonly LIST_JOBS = "glacier:ListJobs";
	/** [List] glacier:ListMultipartUploads */
	static readonly LIST_MULTIPART_UPLOADS = "glacier:ListMultipartUploads";
	/** [List] glacier:ListParts */
	static readonly LIST_PARTS = "glacier:ListParts";
	/** [List] glacier:ListProvisionedCapacity */
	static readonly LIST_PROVISIONED_CAPACITY = "glacier:ListProvisionedCapacity";
	/** [List] glacier:ListTagsForVault */
	static readonly LIST_TAGS_FOR_VAULT = "glacier:ListTagsForVault";
	/** [List] glacier:ListVaults */
	static readonly LIST_VAULTS = "glacier:ListVaults";
	/** [Write] glacier:PurchaseProvisionedCapacity */
	static readonly PURCHASE_PROVISIONED_CAPACITY =
		"glacier:PurchaseProvisionedCapacity";
	/** [Tagging] glacier:RemoveTagsFromVault */
	static readonly REMOVE_TAGS_FROM_VAULT = "glacier:RemoveTagsFromVault";
	/** [PermissionManagement] glacier:SetDataRetrievalPolicy */
	static readonly SET_DATA_RETRIEVAL_POLICY = "glacier:SetDataRetrievalPolicy";
	/** [PermissionManagement] glacier:SetVaultAccessPolicy */
	static readonly SET_VAULT_ACCESS_POLICY = "glacier:SetVaultAccessPolicy";
	/** [Write] glacier:SetVaultNotifications */
	static readonly SET_VAULT_NOTIFICATIONS = "glacier:SetVaultNotifications";
	/** [Write] glacier:UploadArchive */
	static readonly UPLOAD_ARCHIVE = "glacier:UploadArchive";
	/** [Write] glacier:UploadMultipartPart */
	static readonly UPLOAD_MULTIPART_PART = "glacier:UploadMultipartPart";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		GlacierActions.DESCRIBE_JOB,
		GlacierActions.DESCRIBE_VAULT,
		GlacierActions.GET_DATA_RETRIEVAL_POLICY,
		GlacierActions.GET_JOB_OUTPUT,
		GlacierActions.GET_VAULT_ACCESS_POLICY,
		GlacierActions.GET_VAULT_LOCK,
		GlacierActions.GET_VAULT_NOTIFICATIONS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		GlacierActions.ABORT_MULTIPART_UPLOAD,
		GlacierActions.COMPLETE_MULTIPART_UPLOAD,
		GlacierActions.CREATE_VAULT,
		GlacierActions.DELETE_ARCHIVE,
		GlacierActions.DELETE_VAULT,
		GlacierActions.DELETE_VAULT_NOTIFICATIONS,
		GlacierActions.INITIATE_JOB,
		GlacierActions.INITIATE_MULTIPART_UPLOAD,
		GlacierActions.PURCHASE_PROVISIONED_CAPACITY,
		GlacierActions.SET_VAULT_NOTIFICATIONS,
		GlacierActions.UPLOAD_ARCHIVE,
		GlacierActions.UPLOAD_MULTIPART_PART,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		GlacierActions.LIST_JOBS,
		GlacierActions.LIST_MULTIPART_UPLOADS,
		GlacierActions.LIST_PARTS,
		GlacierActions.LIST_PROVISIONED_CAPACITY,
		GlacierActions.LIST_TAGS_FOR_VAULT,
		GlacierActions.LIST_VAULTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		GlacierActions.ABORT_VAULT_LOCK,
		GlacierActions.COMPLETE_VAULT_LOCK,
		GlacierActions.DELETE_VAULT_ACCESS_POLICY,
		GlacierActions.INITIATE_VAULT_LOCK,
		GlacierActions.SET_DATA_RETRIEVAL_POLICY,
		GlacierActions.SET_VAULT_ACCESS_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		GlacierActions.ADD_TAGS_TO_VAULT,
		GlacierActions.REMOVE_TAGS_FROM_VAULT,
	];
}

const VaultArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):glacier:(?<region>[^:]*):(?<account>[^:]*):vaults/(?<vaultName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for glacier resources.
 */
export class GlacierResources {
	/**
	 * Builds an ARN for the vault resource.
	 */
	static vault(props: {
		/** The VaultName component of the ARN. */
		readonly vaultName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseVaultArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vaultName: string;
	} {
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
	static readonly ABORT_MULTIPART_UPLOAD: string[] = [
		"glacier:AbortMultipartUpload",
	];
	/** IAM actions required for the AbortVaultLock API call. */
	static readonly ABORT_VAULT_LOCK: string[] = ["glacier:AbortVaultLock"];
	/** IAM actions required for the AddTagsToVault API call. */
	static readonly ADD_TAGS_TO_VAULT: string[] = ["glacier:AddTagsToVault"];
	/** IAM actions required for the CompleteMultipartUpload API call. */
	static readonly COMPLETE_MULTIPART_UPLOAD: string[] = [
		"glacier:CompleteMultipartUpload",
	];
	/** IAM actions required for the CompleteVaultLock API call. */
	static readonly COMPLETE_VAULT_LOCK: string[] = ["glacier:CompleteVaultLock"];
	/** IAM actions required for the CreateVault API call. */
	static readonly CREATE_VAULT: string[] = ["glacier:CreateVault"];
	/** IAM actions required for the DeleteArchive API call. */
	static readonly DELETE_ARCHIVE: string[] = ["glacier:DeleteArchive"];
	/** IAM actions required for the DeleteVault API call. */
	static readonly DELETE_VAULT: string[] = ["glacier:DeleteVault"];
	/** IAM actions required for the DeleteVaultAccessPolicy API call. */
	static readonly DELETE_VAULT_ACCESS_POLICY: string[] = [
		"glacier:DeleteVaultAccessPolicy",
	];
	/** IAM actions required for the DeleteVaultNotifications API call. */
	static readonly DELETE_VAULT_NOTIFICATIONS: string[] = [
		"glacier:DeleteVaultNotifications",
	];
	/** IAM actions required for the DescribeJob API call. */
	static readonly DESCRIBE_JOB: string[] = ["glacier:DescribeJob"];
	/** IAM actions required for the DescribeVault API call. */
	static readonly DESCRIBE_VAULT: string[] = ["glacier:DescribeVault"];
	/** IAM actions required for the GetDataRetrievalPolicy API call. */
	static readonly GET_DATA_RETRIEVAL_POLICY: string[] = [
		"glacier:GetDataRetrievalPolicy",
	];
	/** IAM actions required for the GetJobOutput API call. */
	static readonly GET_JOB_OUTPUT: string[] = ["glacier:GetJobOutput"];
	/** IAM actions required for the GetVaultAccessPolicy API call. */
	static readonly GET_VAULT_ACCESS_POLICY: string[] = [
		"glacier:GetVaultAccessPolicy",
	];
	/** IAM actions required for the GetVaultLock API call. */
	static readonly GET_VAULT_LOCK: string[] = ["glacier:GetVaultLock"];
	/** IAM actions required for the GetVaultNotifications API call. */
	static readonly GET_VAULT_NOTIFICATIONS: string[] = [
		"glacier:GetVaultNotifications",
	];
	/** IAM actions required for the InitiateJob API call. */
	static readonly INITIATE_JOB: string[] = [
		"glacier:GetJobOutput",
		"glacier:InitiateJob",
	];
	/** IAM actions required for the InitiateMultipartUpload API call. */
	static readonly INITIATE_MULTIPART_UPLOAD: string[] = [
		"glacier:InitiateMultipartUpload",
	];
	/** IAM actions required for the InitiateVaultLock API call. */
	static readonly INITIATE_VAULT_LOCK: string[] = ["glacier:InitiateVaultLock"];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["glacier:ListJobs"];
	/** IAM actions required for the ListMultipartUploads API call. */
	static readonly LIST_MULTIPART_UPLOADS: string[] = [
		"glacier:ListMultipartUploads",
	];
	/** IAM actions required for the ListParts API call. */
	static readonly LIST_PARTS: string[] = ["glacier:ListParts"];
	/** IAM actions required for the ListProvisionedCapacity API call. */
	static readonly LIST_PROVISIONED_CAPACITY: string[] = [
		"glacier:ListProvisionedCapacity",
	];
	/** IAM actions required for the ListTagsForVault API call. */
	static readonly LIST_TAGS_FOR_VAULT: string[] = ["glacier:ListTagsForVault"];
	/** IAM actions required for the ListVaults API call. */
	static readonly LIST_VAULTS: string[] = ["glacier:ListVaults"];
	/** IAM actions required for the PurchaseProvisionedCapacity API call. */
	static readonly PURCHASE_PROVISIONED_CAPACITY: string[] = [
		"glacier:PurchaseProvisionedCapacity",
	];
	/** IAM actions required for the RemoveTagsFromVault API call. */
	static readonly REMOVE_TAGS_FROM_VAULT: string[] = [
		"glacier:RemoveTagsFromVault",
	];
	/** IAM actions required for the SetDataRetrievalPolicy API call. */
	static readonly SET_DATA_RETRIEVAL_POLICY: string[] = [
		"glacier:SetDataRetrievalPolicy",
	];
	/** IAM actions required for the SetVaultAccessPolicy API call. */
	static readonly SET_VAULT_ACCESS_POLICY: string[] = [
		"glacier:SetVaultAccessPolicy",
	];
	/** IAM actions required for the SetVaultNotifications API call. */
	static readonly SET_VAULT_NOTIFICATIONS: string[] = [
		"glacier:SetVaultNotifications",
	];
	/** IAM actions required for the UploadArchive API call. */
	static readonly UPLOAD_ARCHIVE: string[] = ["glacier:UploadArchive"];
	/** IAM actions required for the UploadMultipartPart API call. */
	static readonly UPLOAD_MULTIPART_PART: string[] = [
		"glacier:UploadMultipartPart",
	];
}

/**
 * Condition key constants and builders for glacier.
 */
export class GlacierConditions {
	/** Condition keys applicable to the DeleteArchive action. */
	static readonly DELETE_ARCHIVE_CONDITION_KEYS: string[] = [
		"glacier:ArchiveAgeInDays",
	];
	/** Condition keys applicable to the InitiateJob action. */
	static readonly INITIATE_JOB_CONDITION_KEYS: string[] = [
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
