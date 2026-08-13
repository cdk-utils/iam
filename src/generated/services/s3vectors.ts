// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/s3vectors.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the s3vectors service.
 */
export class S3vectorsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "s3vectors";

	/** [Write] s3vectors:CreateIndex */
	static readonly CREATE_INDEX = "s3vectors:CreateIndex";
	/** [Write] s3vectors:CreateVectorBucket */
	static readonly CREATE_VECTOR_BUCKET = "s3vectors:CreateVectorBucket";
	/** [Write] s3vectors:DeleteIndex */
	static readonly DELETE_INDEX = "s3vectors:DeleteIndex";
	/** [Write] s3vectors:DeleteVectorBucket */
	static readonly DELETE_VECTOR_BUCKET = "s3vectors:DeleteVectorBucket";
	/** [PermissionManagement] s3vectors:DeleteVectorBucketPolicy */
	static readonly DELETE_VECTOR_BUCKET_POLICY =
		"s3vectors:DeleteVectorBucketPolicy";
	/** [Write] s3vectors:DeleteVectors */
	static readonly DELETE_VECTORS = "s3vectors:DeleteVectors";
	/** [Read] s3vectors:GetIndex */
	static readonly GET_INDEX = "s3vectors:GetIndex";
	/** [Read] s3vectors:GetVectorBucket */
	static readonly GET_VECTOR_BUCKET = "s3vectors:GetVectorBucket";
	/** [Read] s3vectors:GetVectorBucketPolicy */
	static readonly GET_VECTOR_BUCKET_POLICY = "s3vectors:GetVectorBucketPolicy";
	/** [Read] s3vectors:GetVectors */
	static readonly GET_VECTORS = "s3vectors:GetVectors";
	/** [List] s3vectors:ListIndexes */
	static readonly LIST_INDEXES = "s3vectors:ListIndexes";
	/** [List] s3vectors:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "s3vectors:ListTagsForResource";
	/** [List] s3vectors:ListVectorBuckets */
	static readonly LIST_VECTOR_BUCKETS = "s3vectors:ListVectorBuckets";
	/** [List] s3vectors:ListVectors */
	static readonly LIST_VECTORS = "s3vectors:ListVectors";
	/** [PermissionManagement] s3vectors:PutVectorBucketPolicy */
	static readonly PUT_VECTOR_BUCKET_POLICY = "s3vectors:PutVectorBucketPolicy";
	/** [Write] s3vectors:PutVectors */
	static readonly PUT_VECTORS = "s3vectors:PutVectors";
	/** [Read] s3vectors:QueryVectors */
	static readonly QUERY_VECTORS = "s3vectors:QueryVectors";
	/** [Tagging] s3vectors:TagResource */
	static readonly TAG_RESOURCE = "s3vectors:TagResource";
	/** [Tagging] s3vectors:UntagResource */
	static readonly UNTAG_RESOURCE = "s3vectors:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		S3vectorsActions.GET_INDEX,
		S3vectorsActions.GET_VECTOR_BUCKET,
		S3vectorsActions.GET_VECTOR_BUCKET_POLICY,
		S3vectorsActions.GET_VECTORS,
		S3vectorsActions.QUERY_VECTORS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		S3vectorsActions.CREATE_INDEX,
		S3vectorsActions.CREATE_VECTOR_BUCKET,
		S3vectorsActions.DELETE_INDEX,
		S3vectorsActions.DELETE_VECTOR_BUCKET,
		S3vectorsActions.DELETE_VECTORS,
		S3vectorsActions.PUT_VECTORS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		S3vectorsActions.LIST_INDEXES,
		S3vectorsActions.LIST_TAGS_FOR_RESOURCE,
		S3vectorsActions.LIST_VECTOR_BUCKETS,
		S3vectorsActions.LIST_VECTORS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		S3vectorsActions.DELETE_VECTOR_BUCKET_POLICY,
		S3vectorsActions.PUT_VECTOR_BUCKET_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		S3vectorsActions.TAG_RESOURCE,
		S3vectorsActions.UNTAG_RESOURCE,
	];
}

const IndexArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3vectors:(?<region>[^:]*):(?<account>[^:]*):bucket/(?<bucketName>[^:/?]+)/index/(?<indexName>[^:/?]+)$",
);
const VectorBucketArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):s3vectors:(?<region>[^:]*):(?<account>[^:]*):bucket/(?<bucketName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for s3vectors resources.
 */
export class S3vectorsResources {
	/**
	 * Builds an ARN for the Index resource.
	 */
	static index(props: {
		/** The BucketName component of the ARN. */
		readonly bucketName: string;
		/** The IndexName component of the ARN. */
		readonly indexName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3vectors:${props.region ?? "*"}:${props.account ?? "*"}:bucket/${props.bucketName}/index/${props.indexName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Index resource.
	 */
	static isValidIndexArn(arn: string): boolean {
		return IndexArnRegex.test(arn);
	}

	/**
	 * Parses a Index ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIndexArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		bucketName: string;
		indexName: string;
	} {
		const match = IndexArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Index ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			bucketName: match.groups!.bucketName,
			indexName: match.groups!.indexName,
		};
	}

	/**
	 * Builds an ARN for the VectorBucket resource.
	 */
	static vectorBucket(props: {
		/** The BucketName component of the ARN. */
		readonly bucketName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3vectors:${props.region ?? "*"}:${props.account ?? "*"}:bucket/${props.bucketName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the VectorBucket resource.
	 */
	static isValidVectorBucketArn(arn: string): boolean {
		return VectorBucketArnRegex.test(arn);
	}

	/**
	 * Parses a VectorBucket ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVectorBucketArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		bucketName: string;
	} {
		const match = VectorBucketArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid VectorBucket ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			bucketName: match.groups!.bucketName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for s3vectors.
 */
export class S3vectorsOperations {
	/** IAM actions required for the CreateIndex API call. */
	static readonly CREATE_INDEX: string[] = [];
	/** IAM actions required for the CreateVectorBucket API call. */
	static readonly CREATE_VECTOR_BUCKET: string[] = [];
	/** IAM actions required for the DeleteIndex API call. */
	static readonly DELETE_INDEX: string[] = [];
	/** IAM actions required for the DeleteVectorBucket API call. */
	static readonly DELETE_VECTOR_BUCKET: string[] = [];
	/** IAM actions required for the DeleteVectorBucketPolicy API call. */
	static readonly DELETE_VECTOR_BUCKET_POLICY: string[] = [];
	/** IAM actions required for the DeleteVectors API call. */
	static readonly DELETE_VECTORS: string[] = [];
	/** IAM actions required for the GetIndex API call. */
	static readonly GET_INDEX: string[] = [];
	/** IAM actions required for the GetVectorBucket API call. */
	static readonly GET_VECTOR_BUCKET: string[] = [];
	/** IAM actions required for the GetVectorBucketPolicy API call. */
	static readonly GET_VECTOR_BUCKET_POLICY: string[] = [];
	/** IAM actions required for the GetVectors API call. */
	static readonly GET_VECTORS: string[] = [];
	/** IAM actions required for the ListIndexes API call. */
	static readonly LIST_INDEXES: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [];
	/** IAM actions required for the ListVectorBuckets API call. */
	static readonly LIST_VECTOR_BUCKETS: string[] = [];
	/** IAM actions required for the ListVectors API call. */
	static readonly LIST_VECTORS: string[] = [];
	/** IAM actions required for the PutVectorBucketPolicy API call. */
	static readonly PUT_VECTOR_BUCKET_POLICY: string[] = [];
	/** IAM actions required for the PutVectors API call. */
	static readonly PUT_VECTORS: string[] = [];
	/** IAM actions required for the QueryVectors API call. */
	static readonly QUERY_VECTORS: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [];
}

/**
 * Condition key constants and builders for s3vectors.
 */
export class S3vectorsConditions {
	/** Condition keys applicable to the CreateIndex action. */
	static readonly CREATE_INDEX_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3vectors:VectorBucketTag/${TagKey}",
		"s3vectors:kmsKeyArn",
		"s3vectors:sseType",
	];
	/** Condition keys applicable to the CreateVectorBucket action. */
	static readonly CREATE_VECTOR_BUCKET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3vectors:VectorBucketTag/${TagKey}",
		"s3vectors:kmsKeyArn",
		"s3vectors:sseType",
	];
	/** Condition keys applicable to the DeleteIndex action. */
	static readonly DELETE_INDEX_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteVectorBucket action. */
	static readonly DELETE_VECTOR_BUCKET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteVectorBucketPolicy action. */
	static readonly DELETE_VECTOR_BUCKET_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteVectors action. */
	static readonly DELETE_VECTORS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the GetIndex action. */
	static readonly GET_INDEX_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the GetVectorBucket action. */
	static readonly GET_VECTOR_BUCKET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the GetVectorBucketPolicy action. */
	static readonly GET_VECTOR_BUCKET_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the GetVectors action. */
	static readonly GET_VECTORS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the ListIndexes action. */
	static readonly LIST_INDEXES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the ListVectors action. */
	static readonly LIST_VECTORS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the PutVectorBucketPolicy action. */
	static readonly PUT_VECTOR_BUCKET_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the PutVectors action. */
	static readonly PUT_VECTORS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the QueryVectors action. */
	static readonly QUERY_VECTORS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3vectors:VectorBucketTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: s3vectors:VectorBucketTag/${TagKey} (String) */
	static readonly VECTOR_BUCKET_TAG = "s3vectors:VectorBucketTag/${TagKey}";
	/** Condition key: s3vectors:kmsKeyArn (ARN) */
	static readonly KMS_KEY_ARN = "s3vectors:kmsKeyArn";
	/** Condition key: s3vectors:sseType (String) */
	static readonly SSE_TYPE = "s3vectors:sseType";

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
	 * Generates a condition block for `s3vectors:VectorBucketTag/${TagKey}`.
	 */
	static vectorBucketTag(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "s3vectors:VectorBucketTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `s3vectors:kmsKeyArn`.
	 */
	static kmsKeyARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "s3vectors:kmsKeyArn": value } };
	}

	/**
	 * Generates a condition block for `s3vectors:sseType`.
	 */
	static sseType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "s3vectors:sseType": value } };
	}
}
