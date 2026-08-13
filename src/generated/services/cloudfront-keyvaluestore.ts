// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cloudfront-keyvaluestore.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cloudfront-keyvaluestore service.
 */
export class CloudfrontKeyvaluestoreActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cloudfront-keyvaluestore";

	/** [Write] cloudfront-keyvaluestore:DeleteKey */
	static readonly DeleteKey = "cloudfront-keyvaluestore:DeleteKey";
	/** [Read] cloudfront-keyvaluestore:DescribeKeyValueStore */
	static readonly DescribeKeyValueStore =
		"cloudfront-keyvaluestore:DescribeKeyValueStore";
	/** [Read] cloudfront-keyvaluestore:GetKey */
	static readonly actionGetKey = "cloudfront-keyvaluestore:GetKey";
	/** [List] cloudfront-keyvaluestore:ListKeys */
	static readonly ListKeys = "cloudfront-keyvaluestore:ListKeys";
	/** [Write] cloudfront-keyvaluestore:PutKey */
	static readonly PutKey = "cloudfront-keyvaluestore:PutKey";
	/** [Write] cloudfront-keyvaluestore:UpdateKeys */
	static readonly UpdateKeys = "cloudfront-keyvaluestore:UpdateKeys";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CloudfrontKeyvaluestoreActions.DescribeKeyValueStore,
		CloudfrontKeyvaluestoreActions.actionGetKey,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CloudfrontKeyvaluestoreActions.DeleteKey,
		CloudfrontKeyvaluestoreActions.PutKey,
		CloudfrontKeyvaluestoreActions.UpdateKeys,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CloudfrontKeyvaluestoreActions.ListKeys,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a key-value-store ARN.
 */
export interface CloudfrontKeyvaluestoreKeyValueStoreArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a key-value-store ARN.
 */
export interface CloudfrontKeyvaluestoreKeyValueStoreArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const KeyValueStoreArnRegex =
	/^arn:(?<partition>[^:]+):cloudfront::(?<account>[^:]*):key-value-store\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cloudfront-keyvaluestore resources.
 */
export class CloudfrontKeyvaluestoreResources {
	/**
	 * Builds an ARN for the key-value-store resource.
	 */
	static keyValueStore(
		props: CloudfrontKeyvaluestoreKeyValueStoreArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:cloudfront::${props.account ?? "*"}:key-value-store/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the key-value-store resource.
	 */
	static isValidKeyValueStoreArn(arn: string): boolean {
		return KeyValueStoreArnRegex.test(arn);
	}

	/**
	 * Parses a key-value-store ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKeyValueStoreArn(
		arn: string,
	): CloudfrontKeyvaluestoreKeyValueStoreArnComponents {
		const match = KeyValueStoreArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid key-value-store ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cloudfront-keyvaluestore.
 */
export class CloudfrontKeyvaluestoreOperations {
	/** IAM actions required for the DeleteKey API call. */
	static readonly DeleteKey: string[] = ["cloudfront-keyvaluestore:DeleteKey"];
	/** IAM actions required for the DescribeKeyValueStore API call. */
	static readonly DescribeKeyValueStore: string[] = [
		"cloudfront-keyvaluestore:DescribeKeyValueStore",
	];
	/** IAM actions required for the GetKey API call. */
	static readonly opGetKey: string[] = ["cloudfront-keyvaluestore:GetKey"];
	/** IAM actions required for the ListKeys API call. */
	static readonly ListKeys: string[] = ["cloudfront-keyvaluestore:ListKeys"];
	/** IAM actions required for the PutKey API call. */
	static readonly PutKey: string[] = ["cloudfront-keyvaluestore:PutKey"];
	/** IAM actions required for the UpdateKeys API call. */
	static readonly UpdateKeys: string[] = [
		"cloudfront-keyvaluestore:UpdateKeys",
	];
}
