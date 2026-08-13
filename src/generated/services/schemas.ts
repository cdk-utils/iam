// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/schemas.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the schemas service.
 */
export class SchemasActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "schemas";

	/** [Write] schemas:CreateDiscoverer */
	static readonly CREATE_DISCOVERER = "schemas:CreateDiscoverer";
	/** [Write] schemas:CreateRegistry */
	static readonly CREATE_REGISTRY = "schemas:CreateRegistry";
	/** [Write] schemas:CreateSchema */
	static readonly CREATE_SCHEMA = "schemas:CreateSchema";
	/** [Write] schemas:DeleteDiscoverer */
	static readonly DELETE_DISCOVERER = "schemas:DeleteDiscoverer";
	/** [Write] schemas:DeleteRegistry */
	static readonly DELETE_REGISTRY = "schemas:DeleteRegistry";
	/** [Write] schemas:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "schemas:DeleteResourcePolicy";
	/** [Write] schemas:DeleteSchema */
	static readonly DELETE_SCHEMA = "schemas:DeleteSchema";
	/** [Write] schemas:DeleteSchemaVersion */
	static readonly DELETE_SCHEMA_VERSION = "schemas:DeleteSchemaVersion";
	/** [Read] schemas:DescribeCodeBinding */
	static readonly DESCRIBE_CODE_BINDING = "schemas:DescribeCodeBinding";
	/** [Read] schemas:DescribeDiscoverer */
	static readonly DESCRIBE_DISCOVERER = "schemas:DescribeDiscoverer";
	/** [Read] schemas:DescribeRegistry */
	static readonly DESCRIBE_REGISTRY = "schemas:DescribeRegistry";
	/** [Read] schemas:DescribeSchema */
	static readonly DESCRIBE_SCHEMA = "schemas:DescribeSchema";
	/** [Read] schemas:ExportSchema */
	static readonly EXPORT_SCHEMA = "schemas:ExportSchema";
	/** [Read] schemas:GetCodeBindingSource */
	static readonly GET_CODE_BINDING_SOURCE = "schemas:GetCodeBindingSource";
	/** [Read] schemas:GetDiscoveredSchema */
	static readonly GET_DISCOVERED_SCHEMA = "schemas:GetDiscoveredSchema";
	/** [Read] schemas:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "schemas:GetResourcePolicy";
	/** [List] schemas:ListDiscoverers */
	static readonly LIST_DISCOVERERS = "schemas:ListDiscoverers";
	/** [List] schemas:ListRegistries */
	static readonly LIST_REGISTRIES = "schemas:ListRegistries";
	/** [List] schemas:ListSchemaVersions */
	static readonly LIST_SCHEMA_VERSIONS = "schemas:ListSchemaVersions";
	/** [List] schemas:ListSchemas */
	static readonly LIST_SCHEMAS = "schemas:ListSchemas";
	/** [Read] schemas:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "schemas:ListTagsForResource";
	/** [Write] schemas:PutCodeBinding */
	static readonly PUT_CODE_BINDING = "schemas:PutCodeBinding";
	/** [Write] schemas:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "schemas:PutResourcePolicy";
	/** [List] schemas:SearchSchemas */
	static readonly SEARCH_SCHEMAS = "schemas:SearchSchemas";
	/** [Write] schemas:StartDiscoverer */
	static readonly START_DISCOVERER = "schemas:StartDiscoverer";
	/** [Write] schemas:StopDiscoverer */
	static readonly STOP_DISCOVERER = "schemas:StopDiscoverer";
	/** [Tagging] schemas:TagResource */
	static readonly TAG_RESOURCE = "schemas:TagResource";
	/** [Tagging] schemas:UntagResource */
	static readonly UNTAG_RESOURCE = "schemas:UntagResource";
	/** [Write] schemas:UpdateDiscoverer */
	static readonly UPDATE_DISCOVERER = "schemas:UpdateDiscoverer";
	/** [Write] schemas:UpdateRegistry */
	static readonly UPDATE_REGISTRY = "schemas:UpdateRegistry";
	/** [Write] schemas:UpdateSchema */
	static readonly UPDATE_SCHEMA = "schemas:UpdateSchema";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SchemasActions.DESCRIBE_CODE_BINDING,
		SchemasActions.DESCRIBE_DISCOVERER,
		SchemasActions.DESCRIBE_REGISTRY,
		SchemasActions.DESCRIBE_SCHEMA,
		SchemasActions.EXPORT_SCHEMA,
		SchemasActions.GET_CODE_BINDING_SOURCE,
		SchemasActions.GET_DISCOVERED_SCHEMA,
		SchemasActions.GET_RESOURCE_POLICY,
		SchemasActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SchemasActions.CREATE_DISCOVERER,
		SchemasActions.CREATE_REGISTRY,
		SchemasActions.CREATE_SCHEMA,
		SchemasActions.DELETE_DISCOVERER,
		SchemasActions.DELETE_REGISTRY,
		SchemasActions.DELETE_RESOURCE_POLICY,
		SchemasActions.DELETE_SCHEMA,
		SchemasActions.DELETE_SCHEMA_VERSION,
		SchemasActions.PUT_CODE_BINDING,
		SchemasActions.PUT_RESOURCE_POLICY,
		SchemasActions.START_DISCOVERER,
		SchemasActions.STOP_DISCOVERER,
		SchemasActions.UPDATE_DISCOVERER,
		SchemasActions.UPDATE_REGISTRY,
		SchemasActions.UPDATE_SCHEMA,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SchemasActions.LIST_DISCOVERERS,
		SchemasActions.LIST_REGISTRIES,
		SchemasActions.LIST_SCHEMA_VERSIONS,
		SchemasActions.LIST_SCHEMAS,
		SchemasActions.SEARCH_SCHEMAS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SchemasActions.TAG_RESOURCE,
		SchemasActions.UNTAG_RESOURCE,
	];
}

const DiscovererArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):schemas:(?<region>[^:]*):(?<account>[^:]*):discoverer/(?<discovererId>[^:/?]+)$",
);
const RegistryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):schemas:(?<region>[^:]*):(?<account>[^:]*):registry/(?<registryName>[^:/?]+)$",
);
const SchemaArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):schemas:(?<region>[^:]*):(?<account>[^:]*):schema/(?<registryName>[^:/?]+)/(?<schemaName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for schemas resources.
 */
export class SchemasResources {
	/**
	 * Builds an ARN for the discoverer resource.
	 */
	static discoverer(props: {
		/** The DiscovererId component of the ARN. */
		readonly discovererId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:schemas:${props.region ?? "*"}:${props.account ?? "*"}:discoverer/${props.discovererId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the discoverer resource.
	 */
	static isValidDiscovererArn(arn: string): boolean {
		return DiscovererArnRegex.test(arn);
	}

	/**
	 * Parses a discoverer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDiscovererArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		discovererId: string;
	} {
		const match = DiscovererArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid discoverer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			discovererId: match.groups!.discovererId,
		};
	}

	/**
	 * Builds an ARN for the registry resource.
	 */
	static registry(props: {
		/** The RegistryName component of the ARN. */
		readonly registryName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:schemas:${props.region ?? "*"}:${props.account ?? "*"}:registry/${props.registryName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the registry resource.
	 */
	static isValidRegistryArn(arn: string): boolean {
		return RegistryArnRegex.test(arn);
	}

	/**
	 * Parses a registry ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRegistryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		registryName: string;
	} {
		const match = RegistryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid registry ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			registryName: match.groups!.registryName,
		};
	}

	/**
	 * Builds an ARN for the schema resource.
	 */
	static schema(props: {
		/** The RegistryName component of the ARN. */
		readonly registryName: string;
		/** The SchemaName component of the ARN. */
		readonly schemaName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:schemas:${props.region ?? "*"}:${props.account ?? "*"}:schema/${props.registryName}/${props.schemaName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the schema resource.
	 */
	static isValidSchemaArn(arn: string): boolean {
		return SchemaArnRegex.test(arn);
	}

	/**
	 * Parses a schema ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSchemaArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		registryName: string;
		schemaName: string;
	} {
		const match = SchemaArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid schema ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			registryName: match.groups!.registryName,
			schemaName: match.groups!.schemaName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for schemas.
 */
export class SchemasOperations {
	/** IAM actions required for the CreateDiscoverer API call. */
	static readonly CREATE_DISCOVERER: string[] = [
		"schemas:CreateDiscoverer",
		"schemas:TagResource",
	];
	/** IAM actions required for the CreateRegistry API call. */
	static readonly CREATE_REGISTRY: string[] = [
		"schemas:CreateRegistry",
		"schemas:TagResource",
	];
	/** IAM actions required for the CreateSchema API call. */
	static readonly CREATE_SCHEMA: string[] = [
		"schemas:CreateSchema",
		"schemas:TagResource",
	];
	/** IAM actions required for the DeleteDiscoverer API call. */
	static readonly DELETE_DISCOVERER: string[] = ["schemas:DeleteDiscoverer"];
	/** IAM actions required for the DeleteRegistry API call. */
	static readonly DELETE_REGISTRY: string[] = ["schemas:DeleteRegistry"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"schemas:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteSchema API call. */
	static readonly DELETE_SCHEMA: string[] = ["schemas:DeleteSchema"];
	/** IAM actions required for the DeleteSchemaVersion API call. */
	static readonly DELETE_SCHEMA_VERSION: string[] = [
		"schemas:DeleteSchemaVersion",
	];
	/** IAM actions required for the DescribeCodeBinding API call. */
	static readonly DESCRIBE_CODE_BINDING: string[] = [
		"schemas:DescribeCodeBinding",
	];
	/** IAM actions required for the DescribeDiscoverer API call. */
	static readonly DESCRIBE_DISCOVERER: string[] = [
		"schemas:DescribeDiscoverer",
	];
	/** IAM actions required for the DescribeRegistry API call. */
	static readonly DESCRIBE_REGISTRY: string[] = ["schemas:DescribeRegistry"];
	/** IAM actions required for the DescribeSchema API call. */
	static readonly DESCRIBE_SCHEMA: string[] = ["schemas:DescribeSchema"];
	/** IAM actions required for the ExportSchema API call. */
	static readonly EXPORT_SCHEMA: string[] = ["schemas:ExportSchema"];
	/** IAM actions required for the GetCodeBindingSource API call. */
	static readonly GET_CODE_BINDING_SOURCE: string[] = [
		"schemas:GetCodeBindingSource",
	];
	/** IAM actions required for the GetDiscoveredSchema API call. */
	static readonly GET_DISCOVERED_SCHEMA: string[] = [
		"schemas:GetDiscoveredSchema",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = ["schemas:GetResourcePolicy"];
	/** IAM actions required for the ListDiscoverers API call. */
	static readonly LIST_DISCOVERERS: string[] = ["schemas:ListDiscoverers"];
	/** IAM actions required for the ListRegistries API call. */
	static readonly LIST_REGISTRIES: string[] = ["schemas:ListRegistries"];
	/** IAM actions required for the ListSchemaVersions API call. */
	static readonly LIST_SCHEMA_VERSIONS: string[] = [
		"schemas:ListSchemaVersions",
	];
	/** IAM actions required for the ListSchemas API call. */
	static readonly LIST_SCHEMAS: string[] = ["schemas:ListSchemas"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"schemas:ListTagsForResource",
	];
	/** IAM actions required for the PutCodeBinding API call. */
	static readonly PUT_CODE_BINDING: string[] = ["schemas:PutCodeBinding"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = ["schemas:PutResourcePolicy"];
	/** IAM actions required for the SearchSchemas API call. */
	static readonly SEARCH_SCHEMAS: string[] = ["schemas:SearchSchemas"];
	/** IAM actions required for the StartDiscoverer API call. */
	static readonly START_DISCOVERER: string[] = ["schemas:StartDiscoverer"];
	/** IAM actions required for the StopDiscoverer API call. */
	static readonly STOP_DISCOVERER: string[] = ["schemas:StopDiscoverer"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["schemas:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["schemas:UntagResource"];
	/** IAM actions required for the UpdateDiscoverer API call. */
	static readonly UPDATE_DISCOVERER: string[] = ["schemas:UpdateDiscoverer"];
	/** IAM actions required for the UpdateRegistry API call. */
	static readonly UPDATE_REGISTRY: string[] = ["schemas:UpdateRegistry"];
	/** IAM actions required for the UpdateSchema API call. */
	static readonly UPDATE_SCHEMA: string[] = ["schemas:UpdateSchema"];
}

/**
 * Condition key constants and builders for schemas.
 */
export class SchemasConditions {
	/** Condition keys applicable to the CreateDiscoverer action. */
	static readonly CREATE_DISCOVERER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRegistry action. */
	static readonly CREATE_REGISTRY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSchema action. */
	static readonly CREATE_SCHEMA_CONDITION_KEYS: string[] = [
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
