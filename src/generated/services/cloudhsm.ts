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
	static readonly CopyBackupToRegion = "cloudhsm:CopyBackupToRegion";
	/** [Write] cloudhsm:CreateCluster */
	static readonly CreateCluster = "cloudhsm:CreateCluster";
	/** [Write] cloudhsm:CreateHsm */
	static readonly CreateHsm = "cloudhsm:CreateHsm";
	/** [Write] cloudhsm:DeleteBackup */
	static readonly DeleteBackup = "cloudhsm:DeleteBackup";
	/** [Write] cloudhsm:DeleteCluster */
	static readonly DeleteCluster = "cloudhsm:DeleteCluster";
	/** [Write] cloudhsm:DeleteHsm */
	static readonly DeleteHsm = "cloudhsm:DeleteHsm";
	/** [PermissionManagement] cloudhsm:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "cloudhsm:DeleteResourcePolicy";
	/** [Read] cloudhsm:DescribeBackups */
	static readonly DescribeBackups = "cloudhsm:DescribeBackups";
	/** [Read] cloudhsm:DescribeClusters */
	static readonly DescribeClusters = "cloudhsm:DescribeClusters";
	/** [Read] cloudhsm:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "cloudhsm:GetResourcePolicy";
	/** [Write] cloudhsm:InitializeCluster */
	static readonly InitializeCluster = "cloudhsm:InitializeCluster";
	/** [Read] cloudhsm:ListTags */
	static readonly ListTags = "cloudhsm:ListTags";
	/** [Write] cloudhsm:ModifyBackupAttributes */
	static readonly ModifyBackupAttributes = "cloudhsm:ModifyBackupAttributes";
	/** [Write] cloudhsm:ModifyCluster */
	static readonly ModifyCluster = "cloudhsm:ModifyCluster";
	/** [PermissionManagement] cloudhsm:PutResourcePolicy */
	static readonly PutResourcePolicy = "cloudhsm:PutResourcePolicy";
	/** [Write] cloudhsm:RestoreBackup */
	static readonly RestoreBackup = "cloudhsm:RestoreBackup";
	/** [Tagging] cloudhsm:TagResource */
	static readonly TagResource = "cloudhsm:TagResource";
	/** [Tagging] cloudhsm:UntagResource */
	static readonly UntagResource = "cloudhsm:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CloudHSMActions.DescribeBackups,
		CloudHSMActions.DescribeClusters,
		CloudHSMActions.actionGetResourcePolicy,
		CloudHSMActions.ListTags,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CloudHSMActions.CopyBackupToRegion,
		CloudHSMActions.CreateCluster,
		CloudHSMActions.CreateHsm,
		CloudHSMActions.DeleteBackup,
		CloudHSMActions.DeleteCluster,
		CloudHSMActions.DeleteHsm,
		CloudHSMActions.InitializeCluster,
		CloudHSMActions.ModifyBackupAttributes,
		CloudHSMActions.ModifyCluster,
		CloudHSMActions.RestoreBackup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		CloudHSMActions.DeleteResourcePolicy,
		CloudHSMActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CloudHSMActions.TagResource,
		CloudHSMActions.UntagResource,
	];
}

/**
 * Properties for building a backup ARN.
 */
export interface CloudHSMBackupArnProps {
	/** The CloudHsmBackupInstanceName component of the ARN. */
	readonly cloudHsmBackupInstanceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a backup ARN.
 */
export interface CloudHSMBackupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CloudHsmBackupInstanceName component. */
	readonly cloudHsmBackupInstanceName: string;
}

/**
 * Properties for building a cluster ARN.
 */
export interface CloudHSMClusterArnProps {
	/** The CloudHsmClusterInstanceName component of the ARN. */
	readonly cloudHsmClusterInstanceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster ARN.
 */
export interface CloudHSMClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CloudHsmClusterInstanceName component. */
	readonly cloudHsmClusterInstanceName: string;
}

const BackupArnRegex =
	/^arn:(?<partition>[^:]+):cloudhsm:(?<region>[^:]*):(?<account>[^:]*):backup\/(?<cloudHsmBackupInstanceName>[^:/?]+)$/;
const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):cloudhsm:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<cloudHsmClusterInstanceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cloudhsm resources.
 */
export class CloudHSMResources {
	/**
	 * Builds an ARN for the backup resource.
	 */
	static backup(props: CloudHSMBackupArnProps): string {
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
	static parseBackupArn(arn: string): CloudHSMBackupArnComponents {
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
	static cluster(props: CloudHSMClusterArnProps): string {
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
	static parseClusterArn(arn: string): CloudHSMClusterArnComponents {
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
	static readonly AddTagsToResource: string[] = [];
	/** IAM actions required for the CopyBackupToRegion API call. */
	static readonly CopyBackupToRegion: string[] = [
		"cloudhsm:CopyBackupToRegion",
		"cloudhsm:TagResource",
		"cloudhsm:UntagResource",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CreateCluster: string[] = [
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
	static readonly CreateHapg: string[] = [];
	/** IAM actions required for the CreateHsm API call. */
	static readonly CreateHsm: string[] = [
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
	static readonly CreateLunaClient: string[] = [];
	/** IAM actions required for the DeleteBackup API call. */
	static readonly DeleteBackup: string[] = ["cloudhsm:DeleteBackup"];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DeleteCluster: string[] = ["cloudhsm:DeleteCluster"];
	/** IAM actions required for the DeleteHapg API call. */
	static readonly DeleteHapg: string[] = [];
	/** IAM actions required for the DeleteHsm API call. */
	static readonly DeleteHsm: string[] = [
		"cloudhsm:DeleteHsm",
		"ec2:DeleteNetworkInterface",
	];
	/** IAM actions required for the DeleteLunaClient API call. */
	static readonly DeleteLunaClient: string[] = [];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"cloudhsm:DeleteResourcePolicy",
	];
	/** IAM actions required for the DescribeBackups API call. */
	static readonly DescribeBackups: string[] = ["cloudhsm:DescribeBackups"];
	/** IAM actions required for the DescribeClusters API call. */
	static readonly DescribeClusters: string[] = ["cloudhsm:DescribeClusters"];
	/** IAM actions required for the DescribeHapg API call. */
	static readonly DescribeHapg: string[] = [];
	/** IAM actions required for the DescribeHsm API call. */
	static readonly DescribeHsm: string[] = [];
	/** IAM actions required for the DescribeLunaClient API call. */
	static readonly DescribeLunaClient: string[] = [];
	/** IAM actions required for the GetConfig API call. */
	static readonly opGetConfig: string[] = [];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"cloudhsm:GetResourcePolicy",
	];
	/** IAM actions required for the InitializeCluster API call. */
	static readonly InitializeCluster: string[] = ["cloudhsm:InitializeCluster"];
	/** IAM actions required for the ListAvailableZones API call. */
	static readonly ListAvailableZones: string[] = [];
	/** IAM actions required for the ListHapgs API call. */
	static readonly ListHapgs: string[] = [];
	/** IAM actions required for the ListHsms API call. */
	static readonly ListHsms: string[] = [];
	/** IAM actions required for the ListLunaClients API call. */
	static readonly ListLunaClients: string[] = [];
	/** IAM actions required for the ListTags API call. */
	static readonly ListTags: string[] = ["cloudhsm:ListTags"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [];
	/** IAM actions required for the ModifyBackupAttributes API call. */
	static readonly ModifyBackupAttributes: string[] = [
		"cloudhsm:ModifyBackupAttributes",
	];
	/** IAM actions required for the ModifyCluster API call. */
	static readonly ModifyCluster: string[] = ["cloudhsm:ModifyCluster"];
	/** IAM actions required for the ModifyHapg API call. */
	static readonly ModifyHapg: string[] = [];
	/** IAM actions required for the ModifyHsm API call. */
	static readonly ModifyHsm: string[] = [];
	/** IAM actions required for the ModifyLunaClient API call. */
	static readonly ModifyLunaClient: string[] = [];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["cloudhsm:PutResourcePolicy"];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly RemoveTagsFromResource: string[] = [];
	/** IAM actions required for the RestoreBackup API call. */
	static readonly RestoreBackup: string[] = ["cloudhsm:RestoreBackup"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["cloudhsm:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["cloudhsm:UntagResource"];
}

/**
 * Condition key constants and builders for cloudhsm.
 */
export class CloudHSMConditions {
	/** Condition keys applicable to the CopyBackupToRegion action. */
	static readonly CopyBackupToRegionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CreateClusterConditionKeys: string[] = [
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
