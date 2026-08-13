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
	static readonly CREATE_CONTAINER = "mediastore:CreateContainer";
	/** [Write] mediastore:DeleteContainer */
	static readonly DELETE_CONTAINER = "mediastore:DeleteContainer";
	/** [PermissionManagement] mediastore:DeleteContainerPolicy */
	static readonly DELETE_CONTAINER_POLICY = "mediastore:DeleteContainerPolicy";
	/** [Write] mediastore:DeleteCorsPolicy */
	static readonly DELETE_CORS_POLICY = "mediastore:DeleteCorsPolicy";
	/** [Write] mediastore:DeleteLifecyclePolicy */
	static readonly DELETE_LIFECYCLE_POLICY = "mediastore:DeleteLifecyclePolicy";
	/** [Write] mediastore:DeleteMetricPolicy */
	static readonly DELETE_METRIC_POLICY = "mediastore:DeleteMetricPolicy";
	/** [Write] mediastore:DeleteObject */
	static readonly DELETE_OBJECT = "mediastore:DeleteObject";
	/** [List] mediastore:DescribeContainer */
	static readonly DESCRIBE_CONTAINER = "mediastore:DescribeContainer";
	/** [List] mediastore:DescribeObject */
	static readonly DESCRIBE_OBJECT = "mediastore:DescribeObject";
	/** [Read] mediastore:GetContainerPolicy */
	static readonly GET_CONTAINER_POLICY = "mediastore:GetContainerPolicy";
	/** [Read] mediastore:GetCorsPolicy */
	static readonly GET_CORS_POLICY = "mediastore:GetCorsPolicy";
	/** [Read] mediastore:GetLifecyclePolicy */
	static readonly GET_LIFECYCLE_POLICY = "mediastore:GetLifecyclePolicy";
	/** [Read] mediastore:GetMetricPolicy */
	static readonly GET_METRIC_POLICY = "mediastore:GetMetricPolicy";
	/** [Read] mediastore:GetObject */
	static readonly GET_OBJECT = "mediastore:GetObject";
	/** [List] mediastore:ListContainers */
	static readonly LIST_CONTAINERS = "mediastore:ListContainers";
	/** [List] mediastore:ListItems */
	static readonly LIST_ITEMS = "mediastore:ListItems";
	/** [Read] mediastore:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "mediastore:ListTagsForResource";
	/** [PermissionManagement] mediastore:PutContainerPolicy */
	static readonly PUT_CONTAINER_POLICY = "mediastore:PutContainerPolicy";
	/** [Write] mediastore:PutCorsPolicy */
	static readonly PUT_CORS_POLICY = "mediastore:PutCorsPolicy";
	/** [Write] mediastore:PutLifecyclePolicy */
	static readonly PUT_LIFECYCLE_POLICY = "mediastore:PutLifecyclePolicy";
	/** [Write] mediastore:PutMetricPolicy */
	static readonly PUT_METRIC_POLICY = "mediastore:PutMetricPolicy";
	/** [Write] mediastore:PutObject */
	static readonly PUT_OBJECT = "mediastore:PutObject";
	/** [Write] mediastore:StartAccessLogging */
	static readonly START_ACCESS_LOGGING = "mediastore:StartAccessLogging";
	/** [Write] mediastore:StopAccessLogging */
	static readonly STOP_ACCESS_LOGGING = "mediastore:StopAccessLogging";
	/** [Tagging] mediastore:TagResource */
	static readonly TAG_RESOURCE = "mediastore:TagResource";
	/** [Tagging] mediastore:UntagResource */
	static readonly UNTAG_RESOURCE = "mediastore:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MediaStoreActions.GET_CONTAINER_POLICY,
		MediaStoreActions.GET_CORS_POLICY,
		MediaStoreActions.GET_LIFECYCLE_POLICY,
		MediaStoreActions.GET_METRIC_POLICY,
		MediaStoreActions.GET_OBJECT,
		MediaStoreActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MediaStoreActions.CREATE_CONTAINER,
		MediaStoreActions.DELETE_CONTAINER,
		MediaStoreActions.DELETE_CORS_POLICY,
		MediaStoreActions.DELETE_LIFECYCLE_POLICY,
		MediaStoreActions.DELETE_METRIC_POLICY,
		MediaStoreActions.DELETE_OBJECT,
		MediaStoreActions.PUT_CORS_POLICY,
		MediaStoreActions.PUT_LIFECYCLE_POLICY,
		MediaStoreActions.PUT_METRIC_POLICY,
		MediaStoreActions.PUT_OBJECT,
		MediaStoreActions.START_ACCESS_LOGGING,
		MediaStoreActions.STOP_ACCESS_LOGGING,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MediaStoreActions.DESCRIBE_CONTAINER,
		MediaStoreActions.DESCRIBE_OBJECT,
		MediaStoreActions.LIST_CONTAINERS,
		MediaStoreActions.LIST_ITEMS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		MediaStoreActions.DELETE_CONTAINER_POLICY,
		MediaStoreActions.PUT_CONTAINER_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MediaStoreActions.TAG_RESOURCE,
		MediaStoreActions.UNTAG_RESOURCE,
	];
}

const ContainerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediastore:(?<region>[^:]*):(?<account>[^:]*):container/(?<containerName>[^:/?]+)$",
);
const FolderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediastore:(?<region>[^:]*):(?<account>[^:]*):container/(?<containerName>[^:/?]+)/(?<folderPath>[^:/?]+)$",
);
const ObjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediastore:(?<region>[^:]*):(?<account>[^:]*):container/(?<containerName>[^:/?]+)/(?<objectPath>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for mediastore resources.
 */
export class MediaStoreResources {
	/**
	 * Builds an ARN for the container resource.
	 */
	static container(props: {
		/** The ContainerName component of the ARN. */
		readonly containerName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseContainerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		containerName: string;
	} {
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
	static folder(props: {
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
	}): string {
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
	static parseFolderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		containerName: string;
		folderPath: string;
	} {
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
	static object(props: {
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
	}): string {
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
	static parseObjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		containerName: string;
		objectPath: string;
	} {
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
	static readonly CREATE_CONTAINER: string[] = [
		"mediastore:CreateContainer",
		"mediastore:TagResource",
	];
	/** IAM actions required for the DeleteContainer API call. */
	static readonly DELETE_CONTAINER: string[] = ["mediastore:DeleteContainer"];
	/** IAM actions required for the DeleteContainerPolicy API call. */
	static readonly DELETE_CONTAINER_POLICY: string[] = [
		"mediastore:DeleteContainerPolicy",
	];
	/** IAM actions required for the DeleteCorsPolicy API call. */
	static readonly DELETE_CORS_POLICY: string[] = [
		"mediastore:DeleteCorsPolicy",
	];
	/** IAM actions required for the DeleteLifecyclePolicy API call. */
	static readonly DELETE_LIFECYCLE_POLICY: string[] = [
		"mediastore:DeleteLifecyclePolicy",
	];
	/** IAM actions required for the DeleteMetricPolicy API call. */
	static readonly DELETE_METRIC_POLICY: string[] = [
		"mediastore:DeleteMetricPolicy",
	];
	/** IAM actions required for the DeleteObject API call. */
	static readonly DELETE_OBJECT: string[] = ["mediastore:DeleteObject"];
	/** IAM actions required for the DescribeContainer API call. */
	static readonly DESCRIBE_CONTAINER: string[] = [
		"mediastore:DescribeContainer",
	];
	/** IAM actions required for the DescribeObject API call. */
	static readonly DESCRIBE_OBJECT: string[] = ["mediastore:DescribeObject"];
	/** IAM actions required for the GetContainerPolicy API call. */
	static readonly GET_CONTAINER_POLICY: string[] = [
		"mediastore:GetContainerPolicy",
	];
	/** IAM actions required for the GetCorsPolicy API call. */
	static readonly GET_CORS_POLICY: string[] = ["mediastore:GetCorsPolicy"];
	/** IAM actions required for the GetLifecyclePolicy API call. */
	static readonly GET_LIFECYCLE_POLICY: string[] = [
		"mediastore:GetLifecyclePolicy",
	];
	/** IAM actions required for the GetMetricPolicy API call. */
	static readonly GET_METRIC_POLICY: string[] = ["mediastore:GetMetricPolicy"];
	/** IAM actions required for the GetObject API call. */
	static readonly GET_OBJECT: string[] = ["mediastore:GetObject"];
	/** IAM actions required for the ListContainers API call. */
	static readonly LIST_CONTAINERS: string[] = ["mediastore:ListContainers"];
	/** IAM actions required for the ListItems API call. */
	static readonly LIST_ITEMS: string[] = ["mediastore:ListItems"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"mediastore:ListTagsForResource",
	];
	/** IAM actions required for the PutContainerPolicy API call. */
	static readonly PUT_CONTAINER_POLICY: string[] = [
		"mediastore:PutContainerPolicy",
	];
	/** IAM actions required for the PutCorsPolicy API call. */
	static readonly PUT_CORS_POLICY: string[] = ["mediastore:PutCorsPolicy"];
	/** IAM actions required for the PutLifecyclePolicy API call. */
	static readonly PUT_LIFECYCLE_POLICY: string[] = [
		"mediastore:PutLifecyclePolicy",
	];
	/** IAM actions required for the PutMetricPolicy API call. */
	static readonly PUT_METRIC_POLICY: string[] = ["mediastore:PutMetricPolicy"];
	/** IAM actions required for the PutObject API call. */
	static readonly PUT_OBJECT: string[] = ["mediastore:PutObject"];
	/** IAM actions required for the StartAccessLogging API call. */
	static readonly START_ACCESS_LOGGING: string[] = [
		"iam:PassRole",
		"mediastore:StartAccessLogging",
	];
	/** IAM actions required for the StopAccessLogging API call. */
	static readonly STOP_ACCESS_LOGGING: string[] = [
		"mediastore:StopAccessLogging",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["mediastore:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["mediastore:UntagResource"];
}

/**
 * Condition key constants and builders for mediastore.
 */
export class MediaStoreConditions {
	/** Condition keys applicable to the CreateContainer action. */
	static readonly CREATE_CONTAINER_CONDITION_KEYS: string[] = [
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
