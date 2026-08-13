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
	static readonly DELETE_KEY = "cloudfront-keyvaluestore:DeleteKey";
	/** [Read] cloudfront-keyvaluestore:DescribeKeyValueStore */
	static readonly DESCRIBE_KEY_VALUE_STORE =
		"cloudfront-keyvaluestore:DescribeKeyValueStore";
	/** [Read] cloudfront-keyvaluestore:GetKey */
	static readonly GET_KEY = "cloudfront-keyvaluestore:GetKey";
	/** [List] cloudfront-keyvaluestore:ListKeys */
	static readonly LIST_KEYS = "cloudfront-keyvaluestore:ListKeys";
	/** [Write] cloudfront-keyvaluestore:PutKey */
	static readonly PUT_KEY = "cloudfront-keyvaluestore:PutKey";
	/** [Write] cloudfront-keyvaluestore:UpdateKeys */
	static readonly UPDATE_KEYS = "cloudfront-keyvaluestore:UpdateKeys";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CloudfrontKeyvaluestoreActions.DESCRIBE_KEY_VALUE_STORE,
		CloudfrontKeyvaluestoreActions.GET_KEY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CloudfrontKeyvaluestoreActions.DELETE_KEY,
		CloudfrontKeyvaluestoreActions.PUT_KEY,
		CloudfrontKeyvaluestoreActions.UPDATE_KEYS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CloudfrontKeyvaluestoreActions.LIST_KEYS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const KeyValueStoreArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudfront::(?<account>[^:]*):key-value-store/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cloudfront-keyvaluestore resources.
 */
export class CloudfrontKeyvaluestoreResources {
	/**
	 * Builds an ARN for the key-value-store resource.
	 */
	static keyValueStore(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseKeyValueStoreArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly DELETE_KEY: string[] = ["cloudfront-keyvaluestore:DeleteKey"];
	/** IAM actions required for the DescribeKeyValueStore API call. */
	static readonly DESCRIBE_KEY_VALUE_STORE: string[] = [
		"cloudfront-keyvaluestore:DescribeKeyValueStore",
	];
	/** IAM actions required for the GetKey API call. */
	static readonly GET_KEY: string[] = ["cloudfront-keyvaluestore:GetKey"];
	/** IAM actions required for the ListKeys API call. */
	static readonly LIST_KEYS: string[] = ["cloudfront-keyvaluestore:ListKeys"];
	/** IAM actions required for the PutKey API call. */
	static readonly PUT_KEY: string[] = ["cloudfront-keyvaluestore:PutKey"];
	/** IAM actions required for the UpdateKeys API call. */
	static readonly UPDATE_KEYS: string[] = [
		"cloudfront-keyvaluestore:UpdateKeys",
	];
}
