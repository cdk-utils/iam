// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sdb.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sdb service.
 */
export class SdbActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sdb";

	/** [Write] sdb:BatchDeleteAttributes */
	static readonly BatchDeleteAttributes = "sdb:BatchDeleteAttributes";
	/** [Write] sdb:BatchPutAttributes */
	static readonly BatchPutAttributes = "sdb:BatchPutAttributes";
	/** [Write] sdb:CreateDomain */
	static readonly CreateDomain = "sdb:CreateDomain";
	/** [Write] sdb:DeleteAttributes */
	static readonly DeleteAttributes = "sdb:DeleteAttributes";
	/** [Write] sdb:DeleteDomain */
	static readonly DeleteDomain = "sdb:DeleteDomain";
	/** [Read] sdb:DomainMetadata */
	static readonly DomainMetadata = "sdb:DomainMetadata";
	/** [Read] sdb:GetAttributes */
	static readonly actionGetAttributes = "sdb:GetAttributes";
	/** [Read] sdb:GetExport */
	static readonly actionGetExport = "sdb:GetExport";
	/** [List] sdb:ListDomains */
	static readonly ListDomains = "sdb:ListDomains";
	/** [List] sdb:ListExports */
	static readonly ListExports = "sdb:ListExports";
	/** [Write] sdb:PutAttributes */
	static readonly PutAttributes = "sdb:PutAttributes";
	/** [Read] sdb:Select */
	static readonly Select = "sdb:Select";
	/** [Write] sdb:StartDomainExport */
	static readonly StartDomainExport = "sdb:StartDomainExport";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SdbActions.DomainMetadata,
		SdbActions.actionGetAttributes,
		SdbActions.actionGetExport,
		SdbActions.Select,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SdbActions.BatchDeleteAttributes,
		SdbActions.BatchPutAttributes,
		SdbActions.CreateDomain,
		SdbActions.DeleteAttributes,
		SdbActions.DeleteDomain,
		SdbActions.PutAttributes,
		SdbActions.StartDomainExport,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SdbActions.ListDomains,
		SdbActions.ListExports,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a domain ARN.
 */
export interface SdbDomainArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a domain ARN.
 */
export interface SdbDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
}

/**
 * Properties for building a export ARN.
 */
export interface SdbExportArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The ExportUUID component of the ARN. */
	readonly exportUuid: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a export ARN.
 */
export interface SdbExportArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The ExportUUID component. */
	readonly exportUuid: string;
}

const DomainArnRegex =
	/^arn:(?<partition>[^:]+):sdb:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainName>[^:/?]+)$/;
const ExportArnRegex =
	/^arn:(?<partition>[^:]+):sdb:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainName>[^:/?]+)\/export\/(?<exportUuid>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for sdb resources.
 */
export class SdbResources {
	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: SdbDomainArnProps): string {
		return `arn:${props.partition ?? "aws"}:sdb:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domain resource.
	 */
	static isValidDomainArn(arn: string): boolean {
		return DomainArnRegex.test(arn);
	}

	/**
	 * Parses a domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainArn(arn: string): SdbDomainArnComponents {
		const match = DomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
		};
	}

	/**
	 * Builds an ARN for the export resource.
	 */
	static export(props: SdbExportArnProps): string {
		return `arn:${props.partition ?? "aws"}:sdb:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainName}/export/${props.exportUuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the export resource.
	 */
	static isValidExportArn(arn: string): boolean {
		return ExportArnRegex.test(arn);
	}

	/**
	 * Parses a export ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExportArn(arn: string): SdbExportArnComponents {
		const match = ExportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid export ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			exportUuid: match.groups!.exportUuid,
		};
	}
}

/**
 * API operation to required IAM actions mapping for sdb.
 */
export class SdbOperations {
	/** IAM actions required for the BatchDeleteAttributes API call. */
	static readonly BatchDeleteAttributes: string[] = [];
	/** IAM actions required for the BatchPutAttributes API call. */
	static readonly BatchPutAttributes: string[] = [];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CreateDomain: string[] = [];
	/** IAM actions required for the DeleteAttributes API call. */
	static readonly DeleteAttributes: string[] = [];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DeleteDomain: string[] = [];
	/** IAM actions required for the DomainMetadata API call. */
	static readonly DomainMetadata: string[] = [];
	/** IAM actions required for the GetAttributes API call. */
	static readonly opGetAttributes: string[] = [];
	/** IAM actions required for the GetExport API call. */
	static readonly opGetExport: string[] = ["sdb:GetExport"];
	/** IAM actions required for the ListDomains API call. */
	static readonly ListDomains: string[] = [];
	/** IAM actions required for the ListExports API call. */
	static readonly ListExports: string[] = ["sdb:ListExports"];
	/** IAM actions required for the PutAttributes API call. */
	static readonly PutAttributes: string[] = [];
	/** IAM actions required for the Select API call. */
	static readonly Select: string[] = [];
	/** IAM actions required for the StartDomainExport API call. */
	static readonly StartDomainExport: string[] = ["sdb:StartDomainExport"];
}
