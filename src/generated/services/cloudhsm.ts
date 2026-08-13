// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cloudhsm.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cloudhsm service.
 */
export class CloudHSMActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cloudhsm";

	/** [Write] cloudhsm:CopyBackupToRegion */
	static readonly COPY_BACKUP_TO_REGION = "cloudhsm:CopyBackupToRegion";
	/** [Write] cloudhsm:CreateCluster */
	static readonly CREATE_CLUSTER = "cloudhsm:CreateCluster";
	/** [Write] cloudhsm:CreateHsm */
	static readonly CREATE_HSM = "cloudhsm:CreateHsm";
	/** [Write] cloudhsm:DeleteBackup */
	static readonly DELETE_BACKUP = "cloudhsm:DeleteBackup";
	/** [Write] cloudhsm:DeleteCluster */
	static readonly DELETE_CLUSTER = "cloudhsm:DeleteCluster";
	/** [Write] cloudhsm:DeleteHsm */
	static readonly DELETE_HSM = "cloudhsm:DeleteHsm";
	/** [PermissionManagement] cloudhsm:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "cloudhsm:DeleteResourcePolicy";
	/** [Read] cloudhsm:DescribeBackups */
	static readonly DESCRIBE_BACKUPS = "cloudhsm:DescribeBackups";
	/** [Read] cloudhsm:DescribeClusters */
	static readonly DESCRIBE_CLUSTERS = "cloudhsm:DescribeClusters";
	/** [Read] cloudhsm:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "cloudhsm:GetResourcePolicy";
	/** [Write] cloudhsm:InitializeCluster */
	static readonly INITIALIZE_CLUSTER = "cloudhsm:InitializeCluster";
	/** [Read] cloudhsm:ListTags */
	static readonly LIST_TAGS = "cloudhsm:ListTags";
	/** [Write] cloudhsm:ModifyBackupAttributes */
	static readonly MODIFY_BACKUP_ATTRIBUTES = "cloudhsm:ModifyBackupAttributes";
	/** [Write] cloudhsm:ModifyCluster */
	static readonly MODIFY_CLUSTER = "cloudhsm:ModifyCluster";
	/** [PermissionManagement] cloudhsm:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "cloudhsm:PutResourcePolicy";
	/** [Write] cloudhsm:RestoreBackup */
	static readonly RESTORE_BACKUP = "cloudhsm:RestoreBackup";
	/** [Tagging] cloudhsm:TagResource */
	static readonly TAG_RESOURCE = "cloudhsm:TagResource";
	/** [Tagging] cloudhsm:UntagResource */
	static readonly UNTAG_RESOURCE = "cloudhsm:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CloudHSMActions.DESCRIBE_BACKUPS,
		CloudHSMActions.DESCRIBE_CLUSTERS,
		CloudHSMActions.GET_RESOURCE_POLICY,
		CloudHSMActions.LIST_TAGS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CloudHSMActions.COPY_BACKUP_TO_REGION,
		CloudHSMActions.CREATE_CLUSTER,
		CloudHSMActions.CREATE_HSM,
		CloudHSMActions.DELETE_BACKUP,
		CloudHSMActions.DELETE_CLUSTER,
		CloudHSMActions.DELETE_HSM,
		CloudHSMActions.INITIALIZE_CLUSTER,
		CloudHSMActions.MODIFY_BACKUP_ATTRIBUTES,
		CloudHSMActions.MODIFY_CLUSTER,
		CloudHSMActions.RESTORE_BACKUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		CloudHSMActions.DELETE_RESOURCE_POLICY,
		CloudHSMActions.PUT_RESOURCE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CloudHSMActions.TAG_RESOURCE,
		CloudHSMActions.UNTAG_RESOURCE,
	];
}

const BackupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudhsm:(?<region>[^:]*):(?<account>[^:]*):backup/(?<cloudHsmBackupInstanceName>[^:/?]+)$",
);
const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudhsm:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<cloudHsmClusterInstanceName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cloudhsm resources.
 */
export class CloudHSMResources {
	/**
	 * Builds an ARN for the backup resource.
	 */
	static backup(props: {
		/** The CloudHsmBackupInstanceName component of the ARN. */
		readonly cloudHsmBackupInstanceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudhsm:${props.region ?? "*"}:${props.account ?? "*"}:backup/${props.cloudHsmBackupInstanceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the backup resource.
	 */
	static isValidBackupArn(arn: string): boolean {
		return BackupArnRegex.test(arn);
	}

	/**
	 * Parses a backup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBackupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		cloudHsmBackupInstanceName: string;
	} {
		const match = BackupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid backup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			cloudHsmBackupInstanceName: match.groups!.cloudHsmBackupInstanceName,
		};
	}

	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The CloudHsmClusterInstanceName component of the ARN. */
		readonly cloudHsmClusterInstanceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudhsm:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.cloudHsmClusterInstanceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster resource.
	 */
	static isValidClusterArn(arn: string): boolean {
		return ClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		cloudHsmClusterInstanceName: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			cloudHsmClusterInstanceName: match.groups!.cloudHsmClusterInstanceName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cloudhsm.
 */
export class CloudHSMOperations {
	/** IAM actions required for the AddTagsToResource API call. */
	static readonly ADD_TAGS_TO_RESOURCE: string[] = [];
	/** IAM actions required for the CopyBackupToRegion API call. */
	static readonly COPY_BACKUP_TO_REGION: string[] = [
		"cloudhsm:CopyBackupToRegion",
		"cloudhsm:TagResource",
		"cloudhsm:UntagResource",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"ec2:AuthorizeSecurityGroupEgress",
		"ec2:AuthorizeSecurityGroupIngress",
		"cloudhsm:CreateCluster",
		"ec2:CreateSecurityGroup",
		"ec2:DescribeSecurityGroups",
		"ec2:DescribeSubnets",
		"ec2:RevokeSecurityGroupEgress",
		"cloudhsm:TagResource",
	];
	/** IAM actions required for the CreateHapg API call. */
	static readonly CREATE_HAPG: string[] = [];
	/** IAM actions required for the CreateHsm API call. */
	static readonly CREATE_HSM: string[] = [
		"ec2:AuthorizeSecurityGroupEgress",
		"ec2:AuthorizeSecurityGroupIngress",
		"cloudhsm:CreateHsm",
		"ec2:CreateNetworkInterface",
		"ec2:CreateSecurityGroup",
		"ec2:DeleteNetworkInterface",
		"ec2:DescribeNetworkInterfaces",
		"ec2:DescribeSecurityGroups",
		"ec2:DescribeSubnets",
		"ec2:RevokeSecurityGroupEgress",
	];
	/** IAM actions required for the CreateLunaClient API call. */
	static readonly CREATE_LUNA_CLIENT: string[] = [];
	/** IAM actions required for the DeleteBackup API call. */
	static readonly DELETE_BACKUP: string[] = ["cloudhsm:DeleteBackup"];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = ["cloudhsm:DeleteCluster"];
	/** IAM actions required for the DeleteHapg API call. */
	static readonly DELETE_HAPG: string[] = [];
	/** IAM actions required for the DeleteHsm API call. */
	static readonly DELETE_HSM: string[] = [
		"cloudhsm:DeleteHsm",
		"ec2:DeleteNetworkInterface",
	];
	/** IAM actions required for the DeleteLunaClient API call. */
	static readonly DELETE_LUNA_CLIENT: string[] = [];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"cloudhsm:DeleteResourcePolicy",
	];
	/** IAM actions required for the DescribeBackups API call. */
	static readonly DESCRIBE_BACKUPS: string[] = ["cloudhsm:DescribeBackups"];
	/** IAM actions required for the DescribeClusters API call. */
	static readonly DESCRIBE_CLUSTERS: string[] = ["cloudhsm:DescribeClusters"];
	/** IAM actions required for the DescribeHapg API call. */
	static readonly DESCRIBE_HAPG: string[] = [];
	/** IAM actions required for the DescribeHsm API call. */
	static readonly DESCRIBE_HSM: string[] = [];
	/** IAM actions required for the DescribeLunaClient API call. */
	static readonly DESCRIBE_LUNA_CLIENT: string[] = [];
	/** IAM actions required for the GetConfig API call. */
	static readonly GET_CONFIG: string[] = [];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [
		"cloudhsm:GetResourcePolicy",
	];
	/** IAM actions required for the InitializeCluster API call. */
	static readonly INITIALIZE_CLUSTER: string[] = ["cloudhsm:InitializeCluster"];
	/** IAM actions required for the ListAvailableZones API call. */
	static readonly LIST_AVAILABLE_ZONES: string[] = [];
	/** IAM actions required for the ListHapgs API call. */
	static readonly LIST_HAPGS: string[] = [];
	/** IAM actions required for the ListHsms API call. */
	static readonly LIST_HSMS: string[] = [];
	/** IAM actions required for the ListLunaClients API call. */
	static readonly LIST_LUNA_CLIENTS: string[] = [];
	/** IAM actions required for the ListTags API call. */
	static readonly LIST_TAGS: string[] = ["cloudhsm:ListTags"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [];
	/** IAM actions required for the ModifyBackupAttributes API call. */
	static readonly MODIFY_BACKUP_ATTRIBUTES: string[] = [
		"cloudhsm:ModifyBackupAttributes",
	];
	/** IAM actions required for the ModifyCluster API call. */
	static readonly MODIFY_CLUSTER: string[] = ["cloudhsm:ModifyCluster"];
	/** IAM actions required for the ModifyHapg API call. */
	static readonly MODIFY_HAPG: string[] = [];
	/** IAM actions required for the ModifyHsm API call. */
	static readonly MODIFY_HSM: string[] = [];
	/** IAM actions required for the ModifyLunaClient API call. */
	static readonly MODIFY_LUNA_CLIENT: string[] = [];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"cloudhsm:PutResourcePolicy",
	];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly REMOVE_TAGS_FROM_RESOURCE: string[] = [];
	/** IAM actions required for the RestoreBackup API call. */
	static readonly RESTORE_BACKUP: string[] = ["cloudhsm:RestoreBackup"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["cloudhsm:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["cloudhsm:UntagResource"];
}

/**
 * Condition key constants and builders for cloudhsm.
 */
export class CloudHSMConditions {
	/** Condition keys applicable to the CopyBackupToRegion action. */
	static readonly COPY_BACKUP_TO_REGION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CREATE_CLUSTER_CONDITION_KEYS: string[] = [
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
