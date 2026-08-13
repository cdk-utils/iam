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
	static readonly CreateDiscoverer = "schemas:CreateDiscoverer";
	/** [Write] schemas:CreateRegistry */
	static readonly CreateRegistry = "schemas:CreateRegistry";
	/** [Write] schemas:CreateSchema */
	static readonly CreateSchema = "schemas:CreateSchema";
	/** [Write] schemas:DeleteDiscoverer */
	static readonly DeleteDiscoverer = "schemas:DeleteDiscoverer";
	/** [Write] schemas:DeleteRegistry */
	static readonly DeleteRegistry = "schemas:DeleteRegistry";
	/** [Write] schemas:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "schemas:DeleteResourcePolicy";
	/** [Write] schemas:DeleteSchema */
	static readonly DeleteSchema = "schemas:DeleteSchema";
	/** [Write] schemas:DeleteSchemaVersion */
	static readonly DeleteSchemaVersion = "schemas:DeleteSchemaVersion";
	/** [Read] schemas:DescribeCodeBinding */
	static readonly DescribeCodeBinding = "schemas:DescribeCodeBinding";
	/** [Read] schemas:DescribeDiscoverer */
	static readonly DescribeDiscoverer = "schemas:DescribeDiscoverer";
	/** [Read] schemas:DescribeRegistry */
	static readonly DescribeRegistry = "schemas:DescribeRegistry";
	/** [Read] schemas:DescribeSchema */
	static readonly DescribeSchema = "schemas:DescribeSchema";
	/** [Read] schemas:ExportSchema */
	static readonly ExportSchema = "schemas:ExportSchema";
	/** [Read] schemas:GetCodeBindingSource */
	static readonly actionGetCodeBindingSource = "schemas:GetCodeBindingSource";
	/** [Read] schemas:GetDiscoveredSchema */
	static readonly actionGetDiscoveredSchema = "schemas:GetDiscoveredSchema";
	/** [Read] schemas:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "schemas:GetResourcePolicy";
	/** [List] schemas:ListDiscoverers */
	static readonly ListDiscoverers = "schemas:ListDiscoverers";
	/** [List] schemas:ListRegistries */
	static readonly ListRegistries = "schemas:ListRegistries";
	/** [List] schemas:ListSchemaVersions */
	static readonly ListSchemaVersions = "schemas:ListSchemaVersions";
	/** [List] schemas:ListSchemas */
	static readonly ListSchemas = "schemas:ListSchemas";
	/** [Read] schemas:ListTagsForResource */
	static readonly ListTagsForResource = "schemas:ListTagsForResource";
	/** [Write] schemas:PutCodeBinding */
	static readonly PutCodeBinding = "schemas:PutCodeBinding";
	/** [Write] schemas:PutResourcePolicy */
	static readonly PutResourcePolicy = "schemas:PutResourcePolicy";
	/** [List] schemas:SearchSchemas */
	static readonly SearchSchemas = "schemas:SearchSchemas";
	/** [Write] schemas:StartDiscoverer */
	static readonly StartDiscoverer = "schemas:StartDiscoverer";
	/** [Write] schemas:StopDiscoverer */
	static readonly StopDiscoverer = "schemas:StopDiscoverer";
	/** [Tagging] schemas:TagResource */
	static readonly TagResource = "schemas:TagResource";
	/** [Tagging] schemas:UntagResource */
	static readonly UntagResource = "schemas:UntagResource";
	/** [Write] schemas:UpdateDiscoverer */
	static readonly UpdateDiscoverer = "schemas:UpdateDiscoverer";
	/** [Write] schemas:UpdateRegistry */
	static readonly UpdateRegistry = "schemas:UpdateRegistry";
	/** [Write] schemas:UpdateSchema */
	static readonly UpdateSchema = "schemas:UpdateSchema";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SchemasActions.DescribeCodeBinding,
		SchemasActions.DescribeDiscoverer,
		SchemasActions.DescribeRegistry,
		SchemasActions.DescribeSchema,
		SchemasActions.ExportSchema,
		SchemasActions.actionGetCodeBindingSource,
		SchemasActions.actionGetDiscoveredSchema,
		SchemasActions.actionGetResourcePolicy,
		SchemasActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SchemasActions.CreateDiscoverer,
		SchemasActions.CreateRegistry,
		SchemasActions.CreateSchema,
		SchemasActions.DeleteDiscoverer,
		SchemasActions.DeleteRegistry,
		SchemasActions.DeleteResourcePolicy,
		SchemasActions.DeleteSchema,
		SchemasActions.DeleteSchemaVersion,
		SchemasActions.PutCodeBinding,
		SchemasActions.PutResourcePolicy,
		SchemasActions.StartDiscoverer,
		SchemasActions.StopDiscoverer,
		SchemasActions.UpdateDiscoverer,
		SchemasActions.UpdateRegistry,
		SchemasActions.UpdateSchema,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SchemasActions.ListDiscoverers,
		SchemasActions.ListRegistries,
		SchemasActions.ListSchemaVersions,
		SchemasActions.ListSchemas,
		SchemasActions.SearchSchemas,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SchemasActions.TagResource,
		SchemasActions.UntagResource,
	];
}

/**
 * Properties for building a discoverer ARN.
 */
export interface SchemasDiscovererArnProps {
	/** The DiscovererId component of the ARN. */
	readonly discovererId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a discoverer ARN.
 */
export interface SchemasDiscovererArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DiscovererId component. */
	readonly discovererId: string;
}

/**
 * Properties for building a registry ARN.
 */
export interface SchemasRegistryArnProps {
	/** The RegistryName component of the ARN. */
	readonly registryName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a registry ARN.
 */
export interface SchemasRegistryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RegistryName component. */
	readonly registryName: string;
}

/**
 * Properties for building a schema ARN.
 */
export interface SchemasSchemaArnProps {
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
}

/**
 * Parsed components of a schema ARN.
 */
export interface SchemasSchemaArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RegistryName component. */
	readonly registryName: string;
	/** The SchemaName component. */
	readonly schemaName: string;
}

const DiscovererArnRegex =
	/^arn:(?<partition>[^:]+):schemas:(?<region>[^:]*):(?<account>[^:]*):discoverer\/(?<discovererId>[^:/?]+)$/;
const RegistryArnRegex =
	/^arn:(?<partition>[^:]+):schemas:(?<region>[^:]*):(?<account>[^:]*):registry\/(?<registryName>[^:/?]+)$/;
const SchemaArnRegex =
	/^arn:(?<partition>[^:]+):schemas:(?<region>[^:]*):(?<account>[^:]*):schema\/(?<registryName>[^:/?]+)\/(?<schemaName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for schemas resources.
 */
export class SchemasResources {
	/**
	 * Builds an ARN for the discoverer resource.
	 */
	static discoverer(props: SchemasDiscovererArnProps): string {
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
	static parseDiscovererArn(arn: string): SchemasDiscovererArnComponents {
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
	static registry(props: SchemasRegistryArnProps): string {
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
	static parseRegistryArn(arn: string): SchemasRegistryArnComponents {
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
	static schema(props: SchemasSchemaArnProps): string {
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
	static parseSchemaArn(arn: string): SchemasSchemaArnComponents {
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
	static readonly CreateDiscoverer: string[] = [
		"schemas:CreateDiscoverer",
		"schemas:TagResource",
	];
	/** IAM actions required for the CreateRegistry API call. */
	static readonly CreateRegistry: string[] = [
		"schemas:CreateRegistry",
		"schemas:TagResource",
	];
	/** IAM actions required for the CreateSchema API call. */
	static readonly CreateSchema: string[] = [
		"schemas:CreateSchema",
		"schemas:TagResource",
	];
	/** IAM actions required for the DeleteDiscoverer API call. */
	static readonly DeleteDiscoverer: string[] = ["schemas:DeleteDiscoverer"];
	/** IAM actions required for the DeleteRegistry API call. */
	static readonly DeleteRegistry: string[] = ["schemas:DeleteRegistry"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"schemas:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteSchema API call. */
	static readonly DeleteSchema: string[] = ["schemas:DeleteSchema"];
	/** IAM actions required for the DeleteSchemaVersion API call. */
	static readonly DeleteSchemaVersion: string[] = [
		"schemas:DeleteSchemaVersion",
	];
	/** IAM actions required for the DescribeCodeBinding API call. */
	static readonly DescribeCodeBinding: string[] = [
		"schemas:DescribeCodeBinding",
	];
	/** IAM actions required for the DescribeDiscoverer API call. */
	static readonly DescribeDiscoverer: string[] = ["schemas:DescribeDiscoverer"];
	/** IAM actions required for the DescribeRegistry API call. */
	static readonly DescribeRegistry: string[] = ["schemas:DescribeRegistry"];
	/** IAM actions required for the DescribeSchema API call. */
	static readonly DescribeSchema: string[] = ["schemas:DescribeSchema"];
	/** IAM actions required for the ExportSchema API call. */
	static readonly ExportSchema: string[] = ["schemas:ExportSchema"];
	/** IAM actions required for the GetCodeBindingSource API call. */
	static readonly opGetCodeBindingSource: string[] = [
		"schemas:GetCodeBindingSource",
	];
	/** IAM actions required for the GetDiscoveredSchema API call. */
	static readonly opGetDiscoveredSchema: string[] = [
		"schemas:GetDiscoveredSchema",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = ["schemas:GetResourcePolicy"];
	/** IAM actions required for the ListDiscoverers API call. */
	static readonly ListDiscoverers: string[] = ["schemas:ListDiscoverers"];
	/** IAM actions required for the ListRegistries API call. */
	static readonly ListRegistries: string[] = ["schemas:ListRegistries"];
	/** IAM actions required for the ListSchemaVersions API call. */
	static readonly ListSchemaVersions: string[] = ["schemas:ListSchemaVersions"];
	/** IAM actions required for the ListSchemas API call. */
	static readonly ListSchemas: string[] = ["schemas:ListSchemas"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"schemas:ListTagsForResource",
	];
	/** IAM actions required for the PutCodeBinding API call. */
	static readonly PutCodeBinding: string[] = ["schemas:PutCodeBinding"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["schemas:PutResourcePolicy"];
	/** IAM actions required for the SearchSchemas API call. */
	static readonly SearchSchemas: string[] = ["schemas:SearchSchemas"];
	/** IAM actions required for the StartDiscoverer API call. */
	static readonly StartDiscoverer: string[] = ["schemas:StartDiscoverer"];
	/** IAM actions required for the StopDiscoverer API call. */
	static readonly StopDiscoverer: string[] = ["schemas:StopDiscoverer"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["schemas:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["schemas:UntagResource"];
	/** IAM actions required for the UpdateDiscoverer API call. */
	static readonly UpdateDiscoverer: string[] = ["schemas:UpdateDiscoverer"];
	/** IAM actions required for the UpdateRegistry API call. */
	static readonly UpdateRegistry: string[] = ["schemas:UpdateRegistry"];
	/** IAM actions required for the UpdateSchema API call. */
	static readonly UpdateSchema: string[] = ["schemas:UpdateSchema"];
}

/**
 * Condition key constants and builders for schemas.
 */
export class SchemasConditions {
	/** Condition keys applicable to the CreateDiscoverer action. */
	static readonly CreateDiscovererConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRegistry action. */
	static readonly CreateRegistryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSchema action. */
	static readonly CreateSchemaConditionKeys: string[] = [
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
