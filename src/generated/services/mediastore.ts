// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mediastore.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mediastore service.
 */
export class MediaStoreActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mediastore";

	/** [Write] mediastore:CreateContainer */
	static readonly CreateContainer = "mediastore:CreateContainer";
	/** [Write] mediastore:DeleteContainer */
	static readonly DeleteContainer = "mediastore:DeleteContainer";
	/** [PermissionManagement] mediastore:DeleteContainerPolicy */
	static readonly DeleteContainerPolicy = "mediastore:DeleteContainerPolicy";
	/** [Write] mediastore:DeleteCorsPolicy */
	static readonly DeleteCorsPolicy = "mediastore:DeleteCorsPolicy";
	/** [Write] mediastore:DeleteLifecyclePolicy */
	static readonly DeleteLifecyclePolicy = "mediastore:DeleteLifecyclePolicy";
	/** [Write] mediastore:DeleteMetricPolicy */
	static readonly DeleteMetricPolicy = "mediastore:DeleteMetricPolicy";
	/** [Write] mediastore:DeleteObject */
	static readonly DeleteObject = "mediastore:DeleteObject";
	/** [List] mediastore:DescribeContainer */
	static readonly DescribeContainer = "mediastore:DescribeContainer";
	/** [List] mediastore:DescribeObject */
	static readonly DescribeObject = "mediastore:DescribeObject";
	/** [Read] mediastore:GetContainerPolicy */
	static readonly actionGetContainerPolicy = "mediastore:GetContainerPolicy";
	/** [Read] mediastore:GetCorsPolicy */
	static readonly actionGetCorsPolicy = "mediastore:GetCorsPolicy";
	/** [Read] mediastore:GetLifecyclePolicy */
	static readonly actionGetLifecyclePolicy = "mediastore:GetLifecyclePolicy";
	/** [Read] mediastore:GetMetricPolicy */
	static readonly actionGetMetricPolicy = "mediastore:GetMetricPolicy";
	/** [Read] mediastore:GetObject */
	static readonly actionGetObject = "mediastore:GetObject";
	/** [List] mediastore:ListContainers */
	static readonly ListContainers = "mediastore:ListContainers";
	/** [List] mediastore:ListItems */
	static readonly ListItems = "mediastore:ListItems";
	/** [Read] mediastore:ListTagsForResource */
	static readonly ListTagsForResource = "mediastore:ListTagsForResource";
	/** [PermissionManagement] mediastore:PutContainerPolicy */
	static readonly PutContainerPolicy = "mediastore:PutContainerPolicy";
	/** [Write] mediastore:PutCorsPolicy */
	static readonly PutCorsPolicy = "mediastore:PutCorsPolicy";
	/** [Write] mediastore:PutLifecyclePolicy */
	static readonly PutLifecyclePolicy = "mediastore:PutLifecyclePolicy";
	/** [Write] mediastore:PutMetricPolicy */
	static readonly PutMetricPolicy = "mediastore:PutMetricPolicy";
	/** [Write] mediastore:PutObject */
	static readonly PutObject = "mediastore:PutObject";
	/** [Write] mediastore:StartAccessLogging */
	static readonly StartAccessLogging = "mediastore:StartAccessLogging";
	/** [Write] mediastore:StopAccessLogging */
	static readonly StopAccessLogging = "mediastore:StopAccessLogging";
	/** [Tagging] mediastore:TagResource */
	static readonly TagResource = "mediastore:TagResource";
	/** [Tagging] mediastore:UntagResource */
	static readonly UntagResource = "mediastore:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MediaStoreActions.actionGetContainerPolicy,
		MediaStoreActions.actionGetCorsPolicy,
		MediaStoreActions.actionGetLifecyclePolicy,
		MediaStoreActions.actionGetMetricPolicy,
		MediaStoreActions.actionGetObject,
		MediaStoreActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MediaStoreActions.CreateContainer,
		MediaStoreActions.DeleteContainer,
		MediaStoreActions.DeleteCorsPolicy,
		MediaStoreActions.DeleteLifecyclePolicy,
		MediaStoreActions.DeleteMetricPolicy,
		MediaStoreActions.DeleteObject,
		MediaStoreActions.PutCorsPolicy,
		MediaStoreActions.PutLifecyclePolicy,
		MediaStoreActions.PutMetricPolicy,
		MediaStoreActions.PutObject,
		MediaStoreActions.StartAccessLogging,
		MediaStoreActions.StopAccessLogging,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MediaStoreActions.DescribeContainer,
		MediaStoreActions.DescribeObject,
		MediaStoreActions.ListContainers,
		MediaStoreActions.ListItems,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		MediaStoreActions.DeleteContainerPolicy,
		MediaStoreActions.PutContainerPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MediaStoreActions.TagResource,
		MediaStoreActions.UntagResource,
	];
}

/**
 * Properties for building a container ARN.
 */
export interface MediaStoreContainerArnProps {
	/** The ContainerName component of the ARN. */
	readonly containerName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a container ARN.
 */
export interface MediaStoreContainerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ContainerName component. */
	readonly containerName: string;
}

/**
 * Properties for building a folder ARN.
 */
export interface MediaStoreFolderArnProps {
	/** The ContainerName component of the ARN. */
	readonly containerName: string;
	/** The FolderPath component of the ARN. */
	readonly folderPath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a folder ARN.
 */
export interface MediaStoreFolderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ContainerName component. */
	readonly containerName: string;
	/** The FolderPath component. */
	readonly folderPath: string;
}

/**
 * Properties for building a object ARN.
 */
export interface MediaStoreObjectArnProps {
	/** The ContainerName component of the ARN. */
	readonly containerName: string;
	/** The ObjectPath component of the ARN. */
	readonly objectPath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a object ARN.
 */
export interface MediaStoreObjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ContainerName component. */
	readonly containerName: string;
	/** The ObjectPath component. */
	readonly objectPath: string;
}

const ContainerArnRegex =
	/^arn:(?<partition>[^:]+):mediastore:(?<region>[^:]*):(?<account>[^:]*):container\/(?<containerName>[^:/?]+)$/;
const FolderArnRegex =
	/^arn:(?<partition>[^:]+):mediastore:(?<region>[^:]*):(?<account>[^:]*):container\/(?<containerName>[^:/?]+)\/(?<folderPath>[^:/?]+)$/;
const ObjectArnRegex =
	/^arn:(?<partition>[^:]+):mediastore:(?<region>[^:]*):(?<account>[^:]*):container\/(?<containerName>[^:/?]+)\/(?<objectPath>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for mediastore resources.
 */
export class MediaStoreResources {
	/**
	 * Builds an ARN for the container resource.
	 */
	static container(props: MediaStoreContainerArnProps): string {
		return `arn:${props.partition ?? "aws"}:mediastore:${props.region ?? "*"}:${props.account ?? "*"}:container/${props.containerName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the container resource.
	 */
	static isValidContainerArn(arn: string): boolean {
		return ContainerArnRegex.test(arn);
	}

	/**
	 * Parses a container ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContainerArn(arn: string): MediaStoreContainerArnComponents {
		const match = ContainerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid container ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			containerName: match.groups!.containerName,
		};
	}

	/**
	 * Builds an ARN for the folder resource.
	 */
	static folder(props: MediaStoreFolderArnProps): string {
		return `arn:${props.partition ?? "aws"}:mediastore:${props.region ?? "*"}:${props.account ?? "*"}:container/${props.containerName}/${props.folderPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the folder resource.
	 */
	static isValidFolderArn(arn: string): boolean {
		return FolderArnRegex.test(arn);
	}

	/**
	 * Parses a folder ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFolderArn(arn: string): MediaStoreFolderArnComponents {
		const match = FolderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid folder ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			containerName: match.groups!.containerName,
			folderPath: match.groups!.folderPath,
		};
	}

	/**
	 * Builds an ARN for the object resource.
	 */
	static object(props: MediaStoreObjectArnProps): string {
		return `arn:${props.partition ?? "aws"}:mediastore:${props.region ?? "*"}:${props.account ?? "*"}:container/${props.containerName}/${props.objectPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the object resource.
	 */
	static isValidObjectArn(arn: string): boolean {
		return ObjectArnRegex.test(arn);
	}

	/**
	 * Parses a object ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseObjectArn(arn: string): MediaStoreObjectArnComponents {
		const match = ObjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid object ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			containerName: match.groups!.containerName,
			objectPath: match.groups!.objectPath,
		};
	}
}

/**
 * API operation to required IAM actions mapping for mediastore.
 */
export class MediaStoreOperations {
	/** IAM actions required for the CreateContainer API call. */
	static readonly CreateContainer: string[] = [
		"mediastore:CreateContainer",
		"mediastore:TagResource",
	];
	/** IAM actions required for the DeleteContainer API call. */
	static readonly DeleteContainer: string[] = ["mediastore:DeleteContainer"];
	/** IAM actions required for the DeleteContainerPolicy API call. */
	static readonly DeleteContainerPolicy: string[] = [
		"mediastore:DeleteContainerPolicy",
	];
	/** IAM actions required for the DeleteCorsPolicy API call. */
	static readonly DeleteCorsPolicy: string[] = ["mediastore:DeleteCorsPolicy"];
	/** IAM actions required for the DeleteLifecyclePolicy API call. */
	static readonly DeleteLifecyclePolicy: string[] = [
		"mediastore:DeleteLifecyclePolicy",
	];
	/** IAM actions required for the DeleteMetricPolicy API call. */
	static readonly DeleteMetricPolicy: string[] = [
		"mediastore:DeleteMetricPolicy",
	];
	/** IAM actions required for the DeleteObject API call. */
	static readonly DeleteObject: string[] = ["mediastore:DeleteObject"];
	/** IAM actions required for the DescribeContainer API call. */
	static readonly DescribeContainer: string[] = [
		"mediastore:DescribeContainer",
	];
	/** IAM actions required for the DescribeObject API call. */
	static readonly DescribeObject: string[] = ["mediastore:DescribeObject"];
	/** IAM actions required for the GetContainerPolicy API call. */
	static readonly opGetContainerPolicy: string[] = [
		"mediastore:GetContainerPolicy",
	];
	/** IAM actions required for the GetCorsPolicy API call. */
	static readonly opGetCorsPolicy: string[] = ["mediastore:GetCorsPolicy"];
	/** IAM actions required for the GetLifecyclePolicy API call. */
	static readonly opGetLifecyclePolicy: string[] = [
		"mediastore:GetLifecyclePolicy",
	];
	/** IAM actions required for the GetMetricPolicy API call. */
	static readonly opGetMetricPolicy: string[] = ["mediastore:GetMetricPolicy"];
	/** IAM actions required for the GetObject API call. */
	static readonly opGetObject: string[] = ["mediastore:GetObject"];
	/** IAM actions required for the ListContainers API call. */
	static readonly ListContainers: string[] = ["mediastore:ListContainers"];
	/** IAM actions required for the ListItems API call. */
	static readonly ListItems: string[] = ["mediastore:ListItems"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"mediastore:ListTagsForResource",
	];
	/** IAM actions required for the PutContainerPolicy API call. */
	static readonly PutContainerPolicy: string[] = [
		"mediastore:PutContainerPolicy",
	];
	/** IAM actions required for the PutCorsPolicy API call. */
	static readonly PutCorsPolicy: string[] = ["mediastore:PutCorsPolicy"];
	/** IAM actions required for the PutLifecyclePolicy API call. */
	static readonly PutLifecyclePolicy: string[] = [
		"mediastore:PutLifecyclePolicy",
	];
	/** IAM actions required for the PutMetricPolicy API call. */
	static readonly PutMetricPolicy: string[] = ["mediastore:PutMetricPolicy"];
	/** IAM actions required for the PutObject API call. */
	static readonly PutObject: string[] = ["mediastore:PutObject"];
	/** IAM actions required for the StartAccessLogging API call. */
	static readonly StartAccessLogging: string[] = [
		"iam:PassRole",
		"mediastore:StartAccessLogging",
	];
	/** IAM actions required for the StopAccessLogging API call. */
	static readonly StopAccessLogging: string[] = [
		"mediastore:StopAccessLogging",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["mediastore:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["mediastore:UntagResource"];
}

/**
 * Condition key constants and builders for mediastore.
 */
export class MediaStoreConditions {
	/** Condition keys applicable to the CreateContainer action. */
	static readonly CreateContainerConditionKeys: string[] = [
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
