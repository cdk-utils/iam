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
	static readonly CreateIndex = "s3vectors:CreateIndex";
	/** [Write] s3vectors:CreateVectorBucket */
	static readonly CreateVectorBucket = "s3vectors:CreateVectorBucket";
	/** [Write] s3vectors:DeleteIndex */
	static readonly DeleteIndex = "s3vectors:DeleteIndex";
	/** [Write] s3vectors:DeleteVectorBucket */
	static readonly DeleteVectorBucket = "s3vectors:DeleteVectorBucket";
	/** [PermissionManagement] s3vectors:DeleteVectorBucketPolicy */
	static readonly DeleteVectorBucketPolicy =
		"s3vectors:DeleteVectorBucketPolicy";
	/** [Write] s3vectors:DeleteVectors */
	static readonly DeleteVectors = "s3vectors:DeleteVectors";
	/** [Read] s3vectors:GetIndex */
	static readonly actionGetIndex = "s3vectors:GetIndex";
	/** [Read] s3vectors:GetVectorBucket */
	static readonly actionGetVectorBucket = "s3vectors:GetVectorBucket";
	/** [Read] s3vectors:GetVectorBucketPolicy */
	static readonly actionGetVectorBucketPolicy =
		"s3vectors:GetVectorBucketPolicy";
	/** [Read] s3vectors:GetVectors */
	static readonly actionGetVectors = "s3vectors:GetVectors";
	/** [List] s3vectors:ListIndexes */
	static readonly ListIndexes = "s3vectors:ListIndexes";
	/** [List] s3vectors:ListTagsForResource */
	static readonly ListTagsForResource = "s3vectors:ListTagsForResource";
	/** [List] s3vectors:ListVectorBuckets */
	static readonly ListVectorBuckets = "s3vectors:ListVectorBuckets";
	/** [List] s3vectors:ListVectors */
	static readonly ListVectors = "s3vectors:ListVectors";
	/** [PermissionManagement] s3vectors:PutVectorBucketPolicy */
	static readonly PutVectorBucketPolicy = "s3vectors:PutVectorBucketPolicy";
	/** [Write] s3vectors:PutVectors */
	static readonly PutVectors = "s3vectors:PutVectors";
	/** [Read] s3vectors:QueryVectors */
	static readonly QueryVectors = "s3vectors:QueryVectors";
	/** [Tagging] s3vectors:TagResource */
	static readonly TagResource = "s3vectors:TagResource";
	/** [Tagging] s3vectors:UntagResource */
	static readonly UntagResource = "s3vectors:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		S3vectorsActions.actionGetIndex,
		S3vectorsActions.actionGetVectorBucket,
		S3vectorsActions.actionGetVectorBucketPolicy,
		S3vectorsActions.actionGetVectors,
		S3vectorsActions.QueryVectors,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		S3vectorsActions.CreateIndex,
		S3vectorsActions.CreateVectorBucket,
		S3vectorsActions.DeleteIndex,
		S3vectorsActions.DeleteVectorBucket,
		S3vectorsActions.DeleteVectors,
		S3vectorsActions.PutVectors,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		S3vectorsActions.ListIndexes,
		S3vectorsActions.ListTagsForResource,
		S3vectorsActions.ListVectorBuckets,
		S3vectorsActions.ListVectors,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		S3vectorsActions.DeleteVectorBucketPolicy,
		S3vectorsActions.PutVectorBucketPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		S3vectorsActions.TagResource,
		S3vectorsActions.UntagResource,
	];
}

/**
 * Properties for building a Index ARN.
 */
export interface S3vectorsIndexArnProps {
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
}

/**
 * Parsed components of a Index ARN.
 */
export interface S3vectorsIndexArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BucketName component. */
	readonly bucketName: string;
	/** The IndexName component. */
	readonly indexName: string;
}

/**
 * Properties for building a VectorBucket ARN.
 */
export interface S3vectorsVectorBucketArnProps {
	/** The BucketName component of the ARN. */
	readonly bucketName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a VectorBucket ARN.
 */
export interface S3vectorsVectorBucketArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BucketName component. */
	readonly bucketName: string;
}

const IndexArnRegex =
	/^arn:(?<partition>[^:]+):s3vectors:(?<region>[^:]*):(?<account>[^:]*):bucket\/(?<bucketName>[^:/?]+)\/index\/(?<indexName>[^:/?]+)$/;
const VectorBucketArnRegex =
	/^arn:(?<partition>[^:]+):s3vectors:(?<region>[^:]*):(?<account>[^:]*):bucket\/(?<bucketName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for s3vectors resources.
 */
export class S3vectorsResources {
	/**
	 * Builds an ARN for the Index resource.
	 */
	static index(props: S3vectorsIndexArnProps): string {
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
	static parseIndexArn(arn: string): S3vectorsIndexArnComponents {
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
	static vectorBucket(props: S3vectorsVectorBucketArnProps): string {
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
	static parseVectorBucketArn(arn: string): S3vectorsVectorBucketArnComponents {
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
	static readonly CreateIndex: string[] = [];
	/** IAM actions required for the CreateVectorBucket API call. */
	static readonly CreateVectorBucket: string[] = [];
	/** IAM actions required for the DeleteIndex API call. */
	static readonly DeleteIndex: string[] = [];
	/** IAM actions required for the DeleteVectorBucket API call. */
	static readonly DeleteVectorBucket: string[] = [];
	/** IAM actions required for the DeleteVectorBucketPolicy API call. */
	static readonly DeleteVectorBucketPolicy: string[] = [];
	/** IAM actions required for the DeleteVectors API call. */
	static readonly DeleteVectors: string[] = [];
	/** IAM actions required for the GetIndex API call. */
	static readonly opGetIndex: string[] = [];
	/** IAM actions required for the GetVectorBucket API call. */
	static readonly opGetVectorBucket: string[] = [];
	/** IAM actions required for the GetVectorBucketPolicy API call. */
	static readonly opGetVectorBucketPolicy: string[] = [];
	/** IAM actions required for the GetVectors API call. */
	static readonly opGetVectors: string[] = [];
	/** IAM actions required for the ListIndexes API call. */
	static readonly ListIndexes: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [];
	/** IAM actions required for the ListVectorBuckets API call. */
	static readonly ListVectorBuckets: string[] = [];
	/** IAM actions required for the ListVectors API call. */
	static readonly ListVectors: string[] = [];
	/** IAM actions required for the PutVectorBucketPolicy API call. */
	static readonly PutVectorBucketPolicy: string[] = [];
	/** IAM actions required for the PutVectors API call. */
	static readonly PutVectors: string[] = [];
	/** IAM actions required for the QueryVectors API call. */
	static readonly QueryVectors: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [];
}

/**
 * Condition key constants and builders for s3vectors.
 */
export class S3vectorsConditions {
	/** Condition keys applicable to the CreateIndex action. */
	static readonly CreateIndexConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3vectors:VectorBucketTag/${TagKey}",
		"s3vectors:kmsKeyArn",
		"s3vectors:sseType",
	];
	/** Condition keys applicable to the CreateVectorBucket action. */
	static readonly CreateVectorBucketConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3vectors:VectorBucketTag/${TagKey}",
		"s3vectors:kmsKeyArn",
		"s3vectors:sseType",
	];
	/** Condition keys applicable to the DeleteIndex action. */
	static readonly DeleteIndexConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteVectorBucket action. */
	static readonly DeleteVectorBucketConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteVectorBucketPolicy action. */
	static readonly DeleteVectorBucketPolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteVectors action. */
	static readonly DeleteVectorsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the GetIndex action. */
	static readonly actionGetIndexConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the GetVectorBucket action. */
	static readonly actionGetVectorBucketConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the GetVectorBucketPolicy action. */
	static readonly actionGetVectorBucketPolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the GetVectors action. */
	static readonly actionGetVectorsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the ListIndexes action. */
	static readonly ListIndexesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the ListVectors action. */
	static readonly ListVectorsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the PutVectorBucketPolicy action. */
	static readonly PutVectorBucketPolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the PutVectors action. */
	static readonly PutVectorsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the QueryVectors action. */
	static readonly QueryVectorsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3vectors:VectorBucketTag/${TagKey}",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"s3vectors:VectorBucketTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
