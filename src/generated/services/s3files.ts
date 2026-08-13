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
	static readonly CLIENT_MOUNT = "s3files:ClientMount";
	/** [Write] s3files:ClientRootAccess */
	static readonly CLIENT_ROOT_ACCESS = "s3files:ClientRootAccess";
	/** [Write] s3files:ClientWrite */
	static readonly CLIENT_WRITE = "s3files:ClientWrite";
	/** [Write] s3files:CreateAccessPoint */
	static readonly CREATE_ACCESS_POINT = "s3files:CreateAccessPoint";
	/** [Write] s3files:CreateFileSystem */
	static readonly CREATE_FILE_SYSTEM = "s3files:CreateFileSystem";
	/** [Write] s3files:CreateMountTarget */
	static readonly CREATE_MOUNT_TARGET = "s3files:CreateMountTarget";
	/** [Write] s3files:DeleteAccessPoint */
	static readonly DELETE_ACCESS_POINT = "s3files:DeleteAccessPoint";
	/** [Write] s3files:DeleteFileSystem */
	static readonly DELETE_FILE_SYSTEM = "s3files:DeleteFileSystem";
	/** [PermissionManagement] s3files:DeleteFileSystemPolicy */
	static readonly DELETE_FILE_SYSTEM_POLICY = "s3files:DeleteFileSystemPolicy";
	/** [Write] s3files:DeleteMountTarget */
	static readonly DELETE_MOUNT_TARGET = "s3files:DeleteMountTarget";
	/** [Read] s3files:GetAccessPoint */
	static readonly GET_ACCESS_POINT = "s3files:GetAccessPoint";
	/** [Read] s3files:GetFileSystem */
	static readonly GET_FILE_SYSTEM = "s3files:GetFileSystem";
	/** [Read] s3files:GetFileSystemPolicy */
	static readonly GET_FILE_SYSTEM_POLICY = "s3files:GetFileSystemPolicy";
	/** [Read] s3files:GetMountTarget */
	static readonly GET_MOUNT_TARGET = "s3files:GetMountTarget";
	/** [Read] s3files:GetSynchronizationConfiguration */
	static readonly GET_SYNCHRONIZATION_CONFIGURATION =
		"s3files:GetSynchronizationConfiguration";
	/** [List] s3files:ListAccessPoints */
	static readonly LIST_ACCESS_POINTS = "s3files:ListAccessPoints";
	/** [List] s3files:ListFileSystems */
	static readonly LIST_FILE_SYSTEMS = "s3files:ListFileSystems";
	/** [List] s3files:ListMountTargets */
	static readonly LIST_MOUNT_TARGETS = "s3files:ListMountTargets";
	/** [Read] s3files:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "s3files:ListTagsForResource";
	/** [PermissionManagement] s3files:PutFileSystemPolicy */
	static readonly PUT_FILE_SYSTEM_POLICY = "s3files:PutFileSystemPolicy";
	/** [Write] s3files:PutSynchronizationConfiguration */
	static readonly PUT_SYNCHRONIZATION_CONFIGURATION =
		"s3files:PutSynchronizationConfiguration";
	/** [Tagging] s3files:TagResource */
	static readonly TAG_RESOURCE = "s3files:TagResource";
	/** [Tagging] s3files:UntagResource */
	static readonly UNTAG_RESOURCE = "s3files:UntagResource";
	/** [Write] s3files:UpdateMountTarget */
	static readonly UPDATE_MOUNT_TARGET = "s3files:UpdateMountTarget";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		S3filesActions.CLIENT_MOUNT,
		S3filesActions.GET_ACCESS_POINT,
		S3filesActions.GET_FILE_SYSTEM,
		S3filesActions.GET_FILE_SYSTEM_POLICY,
		S3filesActions.GET_MOUNT_TARGET,
		S3filesActions.GET_SYNCHRONIZATION_CONFIGURATION,
		S3filesActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		S3filesActions.CLIENT_ROOT_ACCESS,
		S3filesActions.CLIENT_WRITE,
		S3filesActions.CREATE_ACCESS_POINT,
		S3filesActions.CREATE_FILE_SYSTEM,
		S3filesActions.CREATE_MOUNT_TARGET,
		S3filesActions.DELETE_ACCESS_POINT,
		S3filesActions.DELETE_FILE_SYSTEM,
		S3filesActions.DELETE_MOUNT_TARGET,
		S3filesActions.PUT_SYNCHRONIZATION_CONFIGURATION,
		S3filesActions.UPDATE_MOUNT_TARGET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		S3filesActions.LIST_ACCESS_POINTS,
		S3filesActions.LIST_FILE_SYSTEMS,
		S3filesActions.LIST_MOUNT_TARGETS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		S3filesActions.DELETE_FILE_SYSTEM_POLICY,
		S3filesActions.PUT_FILE_SYSTEM_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		S3filesActions.TAG_RESOURCE,
		S3filesActions.UNTAG_RESOURCE,
	];
}

const AccessPointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3files:(?<region>[^:]*):(?<account>[^:]*):file-system/(?<fileSystemId>[^:/?]+)/access-point/(?<accessPointId>[^:/?]+)$",
);
const FileSystemArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3files:(?<region>[^:]*):(?<account>[^:]*):file-system/(?<fileSystemId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for s3files resources.
 */
export class S3filesResources {
	/**
	 * Builds an ARN for the access-point resource.
	 */
	static accessPoint(props: {
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
	}): string {
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
	static parseAccessPointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fileSystemId: string;
		accessPointId: string;
	} {
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
	static fileSystem(props: {
		/** The FileSystemId component of the ARN. */
		readonly fileSystemId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFileSystemArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fileSystemId: string;
	} {
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
	static readonly CREATE_ACCESS_POINT: string[] = [
		"s3files:CreateAccessPoint",
		"s3files:TagResource",
	];
	/** IAM actions required for the CreateFileSystem API call. */
	static readonly CREATE_FILE_SYSTEM: string[] = [
		"s3files:CreateFileSystem",
		"iam:PassRole",
		"s3files:TagResource",
	];
	/** IAM actions required for the CreateMountTarget API call. */
	static readonly CREATE_MOUNT_TARGET: string[] = ["s3files:CreateMountTarget"];
	/** IAM actions required for the DeleteAccessPoint API call. */
	static readonly DELETE_ACCESS_POINT: string[] = ["s3files:DeleteAccessPoint"];
	/** IAM actions required for the DeleteFileSystem API call. */
	static readonly DELETE_FILE_SYSTEM: string[] = ["s3files:DeleteFileSystem"];
	/** IAM actions required for the DeleteFileSystemPolicy API call. */
	static readonly DELETE_FILE_SYSTEM_POLICY: string[] = [
		"s3files:DeleteFileSystemPolicy",
	];
	/** IAM actions required for the DeleteMountTarget API call. */
	static readonly DELETE_MOUNT_TARGET: string[] = ["s3files:DeleteMountTarget"];
	/** IAM actions required for the GetAccessPoint API call. */
	static readonly GET_ACCESS_POINT: string[] = ["s3files:GetAccessPoint"];
	/** IAM actions required for the GetFileSystem API call. */
	static readonly GET_FILE_SYSTEM: string[] = ["s3files:GetFileSystem"];
	/** IAM actions required for the GetFileSystemPolicy API call. */
	static readonly GET_FILE_SYSTEM_POLICY: string[] = [
		"s3files:GetFileSystemPolicy",
	];
	/** IAM actions required for the GetMountTarget API call. */
	static readonly GET_MOUNT_TARGET: string[] = ["s3files:GetMountTarget"];
	/** IAM actions required for the GetSynchronizationConfiguration API call. */
	static readonly GET_SYNCHRONIZATION_CONFIGURATION: string[] = [
		"s3files:GetSynchronizationConfiguration",
	];
	/** IAM actions required for the ListAccessPoints API call. */
	static readonly LIST_ACCESS_POINTS: string[] = ["s3files:ListAccessPoints"];
	/** IAM actions required for the ListFileSystems API call. */
	static readonly LIST_FILE_SYSTEMS: string[] = ["s3files:ListFileSystems"];
	/** IAM actions required for the ListMountTargets API call. */
	static readonly LIST_MOUNT_TARGETS: string[] = ["s3files:ListMountTargets"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"s3files:ListTagsForResource",
	];
	/** IAM actions required for the PutFileSystemPolicy API call. */
	static readonly PUT_FILE_SYSTEM_POLICY: string[] = [
		"s3files:PutFileSystemPolicy",
	];
	/** IAM actions required for the PutSynchronizationConfiguration API call. */
	static readonly PUT_SYNCHRONIZATION_CONFIGURATION: string[] = [
		"s3files:PutSynchronizationConfiguration",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["s3files:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["s3files:UntagResource"];
	/** IAM actions required for the UpdateMountTarget API call. */
	static readonly UPDATE_MOUNT_TARGET: string[] = ["s3files:UpdateMountTarget"];
}

/**
 * Condition key constants and builders for s3files.
 */
export class S3filesConditions {
	/** Condition keys applicable to the ClientMount action. */
	static readonly CLIENT_MOUNT_CONDITION_KEYS: string[] = [
		"s3files:AccessPointArn",
	];
	/** Condition keys applicable to the ClientRootAccess action. */
	static readonly CLIENT_ROOT_ACCESS_CONDITION_KEYS: string[] = [
		"s3files:AccessPointArn",
	];
	/** Condition keys applicable to the ClientWrite action. */
	static readonly CLIENT_WRITE_CONDITION_KEYS: string[] = [
		"s3files:AccessPointArn",
	];
	/** Condition keys applicable to the CreateAccessPoint action. */
	static readonly CREATE_ACCESS_POINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFileSystem action. */
	static readonly CREATE_FILE_SYSTEM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"s3files:CreateAction",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
