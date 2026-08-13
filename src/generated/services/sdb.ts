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
	static readonly BATCH_DELETE_ATTRIBUTES = "sdb:BatchDeleteAttributes";
	/** [Write] sdb:BatchPutAttributes */
	static readonly BATCH_PUT_ATTRIBUTES = "sdb:BatchPutAttributes";
	/** [Write] sdb:CreateDomain */
	static readonly CREATE_DOMAIN = "sdb:CreateDomain";
	/** [Write] sdb:DeleteAttributes */
	static readonly DELETE_ATTRIBUTES = "sdb:DeleteAttributes";
	/** [Write] sdb:DeleteDomain */
	static readonly DELETE_DOMAIN = "sdb:DeleteDomain";
	/** [Read] sdb:DomainMetadata */
	static readonly DOMAIN_METADATA = "sdb:DomainMetadata";
	/** [Read] sdb:GetAttributes */
	static readonly GET_ATTRIBUTES = "sdb:GetAttributes";
	/** [Read] sdb:GetExport */
	static readonly GET_EXPORT = "sdb:GetExport";
	/** [List] sdb:ListDomains */
	static readonly LIST_DOMAINS = "sdb:ListDomains";
	/** [List] sdb:ListExports */
	static readonly LIST_EXPORTS = "sdb:ListExports";
	/** [Write] sdb:PutAttributes */
	static readonly PUT_ATTRIBUTES = "sdb:PutAttributes";
	/** [Read] sdb:Select */
	static readonly SELECT = "sdb:Select";
	/** [Write] sdb:StartDomainExport */
	static readonly START_DOMAIN_EXPORT = "sdb:StartDomainExport";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SdbActions.DOMAIN_METADATA,
		SdbActions.GET_ATTRIBUTES,
		SdbActions.GET_EXPORT,
		SdbActions.SELECT,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SdbActions.BATCH_DELETE_ATTRIBUTES,
		SdbActions.BATCH_PUT_ATTRIBUTES,
		SdbActions.CREATE_DOMAIN,
		SdbActions.DELETE_ATTRIBUTES,
		SdbActions.DELETE_DOMAIN,
		SdbActions.PUT_ATTRIBUTES,
		SdbActions.START_DOMAIN_EXPORT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SdbActions.LIST_DOMAINS,
		SdbActions.LIST_EXPORTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sdb:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainName>[^:/?]+)$",
);
const ExportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sdb:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainName>[^:/?]+)/export/(?<exportUuid>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for sdb resources.
 */
export class SdbResources {
	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: {
		/** The DomainName component of the ARN. */
		readonly domainName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
	} {
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
	static export(props: {
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
	}): string {
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
	static parseExportArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		exportUuid: string;
	} {
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
	static readonly BATCH_DELETE_ATTRIBUTES: string[] = [];
	/** IAM actions required for the BatchPutAttributes API call. */
	static readonly BATCH_PUT_ATTRIBUTES: string[] = [];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CREATE_DOMAIN: string[] = [];
	/** IAM actions required for the DeleteAttributes API call. */
	static readonly DELETE_ATTRIBUTES: string[] = [];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DELETE_DOMAIN: string[] = [];
	/** IAM actions required for the DomainMetadata API call. */
	static readonly DOMAIN_METADATA: string[] = [];
	/** IAM actions required for the GetAttributes API call. */
	static readonly GET_ATTRIBUTES: string[] = [];
	/** IAM actions required for the GetExport API call. */
	static readonly GET_EXPORT: string[] = ["sdb:GetExport"];
	/** IAM actions required for the ListDomains API call. */
	static readonly LIST_DOMAINS: string[] = [];
	/** IAM actions required for the ListExports API call. */
	static readonly LIST_EXPORTS: string[] = ["sdb:ListExports"];
	/** IAM actions required for the PutAttributes API call. */
	static readonly PUT_ATTRIBUTES: string[] = [];
	/** IAM actions required for the Select API call. */
	static readonly SELECT: string[] = [];
	/** IAM actions required for the StartDomainExport API call. */
	static readonly START_DOMAIN_EXPORT: string[] = ["sdb:StartDomainExport"];
}
