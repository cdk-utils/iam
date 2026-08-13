// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/s3files.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the s3files service.
 */
export class S3filesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "s3files";

	/** [Read] s3files:ClientMount */
	static readonly ClientMount = "s3files:ClientMount";
	/** [Write] s3files:ClientRootAccess */
	static readonly ClientRootAccess = "s3files:ClientRootAccess";
	/** [Write] s3files:ClientWrite */
	static readonly ClientWrite = "s3files:ClientWrite";
	/** [Write] s3files:CreateAccessPoint */
	static readonly CreateAccessPoint = "s3files:CreateAccessPoint";
	/** [Write] s3files:CreateFileSystem */
	static readonly CreateFileSystem = "s3files:CreateFileSystem";
	/** [Write] s3files:CreateMountTarget */
	static readonly CreateMountTarget = "s3files:CreateMountTarget";
	/** [Write] s3files:DeleteAccessPoint */
	static readonly DeleteAccessPoint = "s3files:DeleteAccessPoint";
	/** [Write] s3files:DeleteFileSystem */
	static readonly DeleteFileSystem = "s3files:DeleteFileSystem";
	/** [PermissionManagement] s3files:DeleteFileSystemPolicy */
	static readonly DeleteFileSystemPolicy = "s3files:DeleteFileSystemPolicy";
	/** [Write] s3files:DeleteMountTarget */
	static readonly DeleteMountTarget = "s3files:DeleteMountTarget";
	/** [Read] s3files:GetAccessPoint */
	static readonly actionGetAccessPoint = "s3files:GetAccessPoint";
	/** [Read] s3files:GetFileSystem */
	static readonly actionGetFileSystem = "s3files:GetFileSystem";
	/** [Read] s3files:GetFileSystemPolicy */
	static readonly actionGetFileSystemPolicy = "s3files:GetFileSystemPolicy";
	/** [Read] s3files:GetMountTarget */
	static readonly actionGetMountTarget = "s3files:GetMountTarget";
	/** [Read] s3files:GetSynchronizationConfiguration */
	static readonly actionGetSynchronizationConfiguration =
		"s3files:GetSynchronizationConfiguration";
	/** [List] s3files:ListAccessPoints */
	static readonly ListAccessPoints = "s3files:ListAccessPoints";
	/** [List] s3files:ListFileSystems */
	static readonly ListFileSystems = "s3files:ListFileSystems";
	/** [List] s3files:ListMountTargets */
	static readonly ListMountTargets = "s3files:ListMountTargets";
	/** [Read] s3files:ListTagsForResource */
	static readonly ListTagsForResource = "s3files:ListTagsForResource";
	/** [PermissionManagement] s3files:PutFileSystemPolicy */
	static readonly PutFileSystemPolicy = "s3files:PutFileSystemPolicy";
	/** [Write] s3files:PutSynchronizationConfiguration */
	static readonly PutSynchronizationConfiguration =
		"s3files:PutSynchronizationConfiguration";
	/** [Tagging] s3files:TagResource */
	static readonly TagResource = "s3files:TagResource";
	/** [Tagging] s3files:UntagResource */
	static readonly UntagResource = "s3files:UntagResource";
	/** [Write] s3files:UpdateMountTarget */
	static readonly UpdateMountTarget = "s3files:UpdateMountTarget";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		S3filesActions.ClientMount,
		S3filesActions.actionGetAccessPoint,
		S3filesActions.actionGetFileSystem,
		S3filesActions.actionGetFileSystemPolicy,
		S3filesActions.actionGetMountTarget,
		S3filesActions.actionGetSynchronizationConfiguration,
		S3filesActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		S3filesActions.ClientRootAccess,
		S3filesActions.ClientWrite,
		S3filesActions.CreateAccessPoint,
		S3filesActions.CreateFileSystem,
		S3filesActions.CreateMountTarget,
		S3filesActions.DeleteAccessPoint,
		S3filesActions.DeleteFileSystem,
		S3filesActions.DeleteMountTarget,
		S3filesActions.PutSynchronizationConfiguration,
		S3filesActions.UpdateMountTarget,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		S3filesActions.ListAccessPoints,
		S3filesActions.ListFileSystems,
		S3filesActions.ListMountTargets,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		S3filesActions.DeleteFileSystemPolicy,
		S3filesActions.PutFileSystemPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		S3filesActions.TagResource,
		S3filesActions.UntagResource,
	];
}

/**
 * Properties for building a access-point ARN.
 */
export interface S3filesAccessPointArnProps {
	/** The FileSystemId component of the ARN. */
	readonly fileSystemId: string;
	/** The AccessPointId component of the ARN. */
	readonly accessPointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a access-point ARN.
 */
export interface S3filesAccessPointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FileSystemId component. */
	readonly fileSystemId: string;
	/** The AccessPointId component. */
	readonly accessPointId: string;
}

/**
 * Properties for building a file-system ARN.
 */
export interface S3filesFileSystemArnProps {
	/** The FileSystemId component of the ARN. */
	readonly fileSystemId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a file-system ARN.
 */
export interface S3filesFileSystemArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FileSystemId component. */
	readonly fileSystemId: string;
}

const AccessPointArnRegex =
	/^arn:(?<partition>[^:]+):s3files:(?<region>[^:]*):(?<account>[^:]*):file-system\/(?<fileSystemId>[^:/?]+)\/access-point\/(?<accessPointId>[^:/?]+)$/;
const FileSystemArnRegex =
	/^arn:(?<partition>[^:]+):s3files:(?<region>[^:]*):(?<account>[^:]*):file-system\/(?<fileSystemId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for s3files resources.
 */
export class S3filesResources {
	/**
	 * Builds an ARN for the access-point resource.
	 */
	static accessPoint(props: S3filesAccessPointArnProps): string {
		return `arn:${props.partition ?? "aws"}:s3files:${props.region ?? "*"}:${props.account ?? "*"}:file-system/${props.fileSystemId}/access-point/${props.accessPointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the access-point resource.
	 */
	static isValidAccessPointArn(arn: string): boolean {
		return AccessPointArnRegex.test(arn);
	}

	/**
	 * Parses a access-point ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessPointArn(arn: string): S3filesAccessPointArnComponents {
		const match = AccessPointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid access-point ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fileSystemId: match.groups!.fileSystemId,
			accessPointId: match.groups!.accessPointId,
		};
	}

	/**
	 * Builds an ARN for the file-system resource.
	 */
	static fileSystem(props: S3filesFileSystemArnProps): string {
		return `arn:${props.partition ?? "aws"}:s3files:${props.region ?? "*"}:${props.account ?? "*"}:file-system/${props.fileSystemId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the file-system resource.
	 */
	static isValidFileSystemArn(arn: string): boolean {
		return FileSystemArnRegex.test(arn);
	}

	/**
	 * Parses a file-system ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFileSystemArn(arn: string): S3filesFileSystemArnComponents {
		const match = FileSystemArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid file-system ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fileSystemId: match.groups!.fileSystemId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for s3files.
 */
export class S3filesOperations {
	/** IAM actions required for the CreateAccessPoint API call. */
	static readonly CreateAccessPoint: string[] = [
		"s3files:CreateAccessPoint",
		"s3files:TagResource",
	];
	/** IAM actions required for the CreateFileSystem API call. */
	static readonly CreateFileSystem: string[] = [
		"s3files:CreateFileSystem",
		"iam:PassRole",
		"s3files:TagResource",
	];
	/** IAM actions required for the CreateMountTarget API call. */
	static readonly CreateMountTarget: string[] = ["s3files:CreateMountTarget"];
	/** IAM actions required for the DeleteAccessPoint API call. */
	static readonly DeleteAccessPoint: string[] = ["s3files:DeleteAccessPoint"];
	/** IAM actions required for the DeleteFileSystem API call. */
	static readonly DeleteFileSystem: string[] = ["s3files:DeleteFileSystem"];
	/** IAM actions required for the DeleteFileSystemPolicy API call. */
	static readonly DeleteFileSystemPolicy: string[] = [
		"s3files:DeleteFileSystemPolicy",
	];
	/** IAM actions required for the DeleteMountTarget API call. */
	static readonly DeleteMountTarget: string[] = ["s3files:DeleteMountTarget"];
	/** IAM actions required for the GetAccessPoint API call. */
	static readonly opGetAccessPoint: string[] = ["s3files:GetAccessPoint"];
	/** IAM actions required for the GetFileSystem API call. */
	static readonly opGetFileSystem: string[] = ["s3files:GetFileSystem"];
	/** IAM actions required for the GetFileSystemPolicy API call. */
	static readonly opGetFileSystemPolicy: string[] = [
		"s3files:GetFileSystemPolicy",
	];
	/** IAM actions required for the GetMountTarget API call. */
	static readonly opGetMountTarget: string[] = ["s3files:GetMountTarget"];
	/** IAM actions required for the GetSynchronizationConfiguration API call. */
	static readonly opGetSynchronizationConfiguration: string[] = [
		"s3files:GetSynchronizationConfiguration",
	];
	/** IAM actions required for the ListAccessPoints API call. */
	static readonly ListAccessPoints: string[] = ["s3files:ListAccessPoints"];
	/** IAM actions required for the ListFileSystems API call. */
	static readonly ListFileSystems: string[] = ["s3files:ListFileSystems"];
	/** IAM actions required for the ListMountTargets API call. */
	static readonly ListMountTargets: string[] = ["s3files:ListMountTargets"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"s3files:ListTagsForResource",
	];
	/** IAM actions required for the PutFileSystemPolicy API call. */
	static readonly PutFileSystemPolicy: string[] = [
		"s3files:PutFileSystemPolicy",
	];
	/** IAM actions required for the PutSynchronizationConfiguration API call. */
	static readonly PutSynchronizationConfiguration: string[] = [
		"s3files:PutSynchronizationConfiguration",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["s3files:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["s3files:UntagResource"];
	/** IAM actions required for the UpdateMountTarget API call. */
	static readonly UpdateMountTarget: string[] = ["s3files:UpdateMountTarget"];
}

/**
 * Condition key constants and builders for s3files.
 */
export class S3filesConditions {
	/** Condition keys applicable to the ClientMount action. */
	static readonly ClientMountConditionKeys: string[] = [
		"s3files:AccessPointArn",
	];
	/** Condition keys applicable to the ClientRootAccess action. */
	static readonly ClientRootAccessConditionKeys: string[] = [
		"s3files:AccessPointArn",
	];
	/** Condition keys applicable to the ClientWrite action. */
	static readonly ClientWriteConditionKeys: string[] = [
		"s3files:AccessPointArn",
	];
	/** Condition keys applicable to the CreateAccessPoint action. */
	static readonly CreateAccessPointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFileSystem action. */
	static readonly CreateFileSystemConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"s3files:CreateAction",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: s3files:AccessPointArn (ARN) */
	static readonly ACCESS_POINT_ARN = "s3files:AccessPointArn";
	/** Condition key: s3files:CreateAction (String) */
	static readonly CREATE_ACTION = "s3files:CreateAction";

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
	 * Generates a condition block for `s3files:AccessPointArn`.
	 */
	static accessPointARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "s3files:AccessPointArn": value } };
	}

	/**
	 * Generates a condition block for `s3files:CreateAction`.
	 */
	static createAction(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3files:CreateAction": value } };
	}
}
