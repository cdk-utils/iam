// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/qldb.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the qldb service.
 */
export class QldbActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "qldb";

	/** [Write] qldb:CancelJournalKinesisStream */
	static readonly CANCEL_JOURNAL_KINESIS_STREAM =
		"qldb:CancelJournalKinesisStream";
	/** [Write] qldb:CreateLedger */
	static readonly CREATE_LEDGER = "qldb:CreateLedger";
	/** [Write] qldb:DeleteLedger */
	static readonly DELETE_LEDGER = "qldb:DeleteLedger";
	/** [Read] qldb:DescribeJournalKinesisStream */
	static readonly DESCRIBE_JOURNAL_KINESIS_STREAM =
		"qldb:DescribeJournalKinesisStream";
	/** [Read] qldb:DescribeJournalS3Export */
	static readonly DESCRIBE_JOURNAL_S3_EXPORT = "qldb:DescribeJournalS3Export";
	/** [Read] qldb:DescribeLedger */
	static readonly DESCRIBE_LEDGER = "qldb:DescribeLedger";
	/** [Write] qldb:ExecuteStatement */
	static readonly EXECUTE_STATEMENT = "qldb:ExecuteStatement";
	/** [Write] qldb:ExportJournalToS3 */
	static readonly EXPORT_JOURNAL_TO_S3 = "qldb:ExportJournalToS3";
	/** [Read] qldb:GetBlock */
	static readonly GET_BLOCK = "qldb:GetBlock";
	/** [Read] qldb:GetDigest */
	static readonly GET_DIGEST = "qldb:GetDigest";
	/** [Read] qldb:GetRevision */
	static readonly GET_REVISION = "qldb:GetRevision";
	/** [Write] qldb:InsertSampleData */
	static readonly INSERT_SAMPLE_DATA = "qldb:InsertSampleData";
	/** [List] qldb:ListJournalKinesisStreamsForLedger */
	static readonly LIST_JOURNAL_KINESIS_STREAMS_FOR_LEDGER =
		"qldb:ListJournalKinesisStreamsForLedger";
	/** [List] qldb:ListJournalS3Exports */
	static readonly LIST_JOURNAL_S3_EXPORTS = "qldb:ListJournalS3Exports";
	/** [List] qldb:ListJournalS3ExportsForLedger */
	static readonly LIST_JOURNAL_S3_EXPORTS_FOR_LEDGER =
		"qldb:ListJournalS3ExportsForLedger";
	/** [List] qldb:ListLedgers */
	static readonly LIST_LEDGERS = "qldb:ListLedgers";
	/** [Read] qldb:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "qldb:ListTagsForResource";
	/** [Write] qldb:PartiQLCreateIndex */
	static readonly PARTI_QL_CREATE_INDEX = "qldb:PartiQLCreateIndex";
	/** [Write] qldb:PartiQLCreateTable */
	static readonly PARTI_QL_CREATE_TABLE = "qldb:PartiQLCreateTable";
	/** [Write] qldb:PartiQLDelete */
	static readonly PARTI_QL_DELETE = "qldb:PartiQLDelete";
	/** [Write] qldb:PartiQLDropIndex */
	static readonly PARTI_QL_DROP_INDEX = "qldb:PartiQLDropIndex";
	/** [Write] qldb:PartiQLDropTable */
	static readonly PARTI_QL_DROP_TABLE = "qldb:PartiQLDropTable";
	/** [Read] qldb:PartiQLHistoryFunction */
	static readonly PARTI_QL_HISTORY_FUNCTION = "qldb:PartiQLHistoryFunction";
	/** [Write] qldb:PartiQLInsert */
	static readonly PARTI_QL_INSERT = "qldb:PartiQLInsert";
	/** [Write] qldb:PartiQLRedact */
	static readonly PARTI_QL_REDACT = "qldb:PartiQLRedact";
	/** [Read] qldb:PartiQLSelect */
	static readonly PARTI_QL_SELECT = "qldb:PartiQLSelect";
	/** [Write] qldb:PartiQLUndropTable */
	static readonly PARTI_QL_UNDROP_TABLE = "qldb:PartiQLUndropTable";
	/** [Write] qldb:PartiQLUpdate */
	static readonly PARTI_QL_UPDATE = "qldb:PartiQLUpdate";
	/** [Write] qldb:SendCommand */
	static readonly SEND_COMMAND = "qldb:SendCommand";
	/** [Write] qldb:ShowCatalog */
	static readonly SHOW_CATALOG = "qldb:ShowCatalog";
	/** [Write] qldb:StreamJournalToKinesis */
	static readonly STREAM_JOURNAL_TO_KINESIS = "qldb:StreamJournalToKinesis";
	/** [Tagging] qldb:TagResource */
	static readonly TAG_RESOURCE = "qldb:TagResource";
	/** [Tagging] qldb:UntagResource */
	static readonly UNTAG_RESOURCE = "qldb:UntagResource";
	/** [Write] qldb:UpdateLedger */
	static readonly UPDATE_LEDGER = "qldb:UpdateLedger";
	/** [Write] qldb:UpdateLedgerPermissionsMode */
	static readonly UPDATE_LEDGER_PERMISSIONS_MODE =
		"qldb:UpdateLedgerPermissionsMode";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		QldbActions.DESCRIBE_JOURNAL_KINESIS_STREAM,
		QldbActions.DESCRIBE_JOURNAL_S3_EXPORT,
		QldbActions.DESCRIBE_LEDGER,
		QldbActions.GET_BLOCK,
		QldbActions.GET_DIGEST,
		QldbActions.GET_REVISION,
		QldbActions.LIST_TAGS_FOR_RESOURCE,
		QldbActions.PARTI_QL_HISTORY_FUNCTION,
		QldbActions.PARTI_QL_SELECT,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		QldbActions.CANCEL_JOURNAL_KINESIS_STREAM,
		QldbActions.CREATE_LEDGER,
		QldbActions.DELETE_LEDGER,
		QldbActions.EXECUTE_STATEMENT,
		QldbActions.EXPORT_JOURNAL_TO_S3,
		QldbActions.INSERT_SAMPLE_DATA,
		QldbActions.PARTI_QL_CREATE_INDEX,
		QldbActions.PARTI_QL_CREATE_TABLE,
		QldbActions.PARTI_QL_DELETE,
		QldbActions.PARTI_QL_DROP_INDEX,
		QldbActions.PARTI_QL_DROP_TABLE,
		QldbActions.PARTI_QL_INSERT,
		QldbActions.PARTI_QL_REDACT,
		QldbActions.PARTI_QL_UNDROP_TABLE,
		QldbActions.PARTI_QL_UPDATE,
		QldbActions.SEND_COMMAND,
		QldbActions.SHOW_CATALOG,
		QldbActions.STREAM_JOURNAL_TO_KINESIS,
		QldbActions.UPDATE_LEDGER,
		QldbActions.UPDATE_LEDGER_PERMISSIONS_MODE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		QldbActions.LIST_JOURNAL_KINESIS_STREAMS_FOR_LEDGER,
		QldbActions.LIST_JOURNAL_S3_EXPORTS,
		QldbActions.LIST_JOURNAL_S3_EXPORTS_FOR_LEDGER,
		QldbActions.LIST_LEDGERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		QldbActions.TAG_RESOURCE,
		QldbActions.UNTAG_RESOURCE,
	];
}

const CatalogArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qldb:(?<region>[^:]*):(?<account>[^:]*):ledger/(?<ledgerName>[^:/?]+)/information_schema/user_tables$",
);
const LedgerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qldb:(?<region>[^:]*):(?<account>[^:]*):ledger/(?<ledgerName>[^:/?]+)$",
);
const StreamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qldb:(?<region>[^:]*):(?<account>[^:]*):stream/(?<ledgerName>[^:/?]+)/(?<streamId>[^:/?]+)$",
);
const TableArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qldb:(?<region>[^:]*):(?<account>[^:]*):ledger/(?<ledgerName>[^:/?]+)/table/(?<tableId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for qldb resources.
 */
export class QldbResources {
	/**
	 * Builds an ARN for the catalog resource.
	 */
	static catalog(props: {
		/** The LedgerName component of the ARN. */
		readonly ledgerName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:qldb:${props.region ?? "*"}:${props.account ?? "*"}:ledger/${props.ledgerName}/information_schema/user_tables`;
	}

	/**
	 * Validates whether a string is a valid ARN for the catalog resource.
	 */
	static isValidCatalogArn(arn: string): boolean {
		return CatalogArnRegex.test(arn);
	}

	/**
	 * Parses a catalog ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCatalogArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ledgerName: string;
	} {
		const match = CatalogArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid catalog ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ledgerName: match.groups!.ledgerName,
		};
	}

	/**
	 * Builds an ARN for the ledger resource.
	 */
	static ledger(props: {
		/** The LedgerName component of the ARN. */
		readonly ledgerName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:qldb:${props.region ?? "*"}:${props.account ?? "*"}:ledger/${props.ledgerName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ledger resource.
	 */
	static isValidLedgerArn(arn: string): boolean {
		return LedgerArnRegex.test(arn);
	}

	/**
	 * Parses a ledger ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLedgerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ledgerName: string;
	} {
		const match = LedgerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ledger ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ledgerName: match.groups!.ledgerName,
		};
	}

	/**
	 * Builds an ARN for the stream resource.
	 */
	static stream(props: {
		/** The LedgerName component of the ARN. */
		readonly ledgerName: string;
		/** The StreamId component of the ARN. */
		readonly streamId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:qldb:${props.region ?? "*"}:${props.account ?? "*"}:stream/${props.ledgerName}/${props.streamId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stream resource.
	 */
	static isValidStreamArn(arn: string): boolean {
		return StreamArnRegex.test(arn);
	}

	/**
	 * Parses a stream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ledgerName: string;
		streamId: string;
	} {
		const match = StreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ledgerName: match.groups!.ledgerName,
			streamId: match.groups!.streamId,
		};
	}

	/**
	 * Builds an ARN for the table resource.
	 */
	static table(props: {
		/** The LedgerName component of the ARN. */
		readonly ledgerName: string;
		/** The TableId component of the ARN. */
		readonly tableId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:qldb:${props.region ?? "*"}:${props.account ?? "*"}:ledger/${props.ledgerName}/table/${props.tableId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the table resource.
	 */
	static isValidTableArn(arn: string): boolean {
		return TableArnRegex.test(arn);
	}

	/**
	 * Parses a table ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTableArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ledgerName: string;
		tableId: string;
	} {
		const match = TableArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid table ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ledgerName: match.groups!.ledgerName,
			tableId: match.groups!.tableId,
		};
	}
}

/**
 * Condition key constants and builders for qldb.
 */
export class QldbConditions {
	/** Condition keys applicable to the CreateLedger action. */
	static readonly CREATE_LEDGER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PartiQLCreateTable action. */
	static readonly PARTI_QL_CREATE_TABLE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PartiQLDropIndex action. */
	static readonly PARTI_QL_DROP_INDEX_CONDITION_KEYS: string[] = ["qldb:Purge"];
	/** Condition keys applicable to the PartiQLDropTable action. */
	static readonly PARTI_QL_DROP_TABLE_CONDITION_KEYS: string[] = ["qldb:Purge"];
	/** Condition keys applicable to the StreamJournalToKinesis action. */
	static readonly STREAM_JOURNAL_TO_KINESIS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: qldb:Purge (String) */
	static readonly PURGE = "qldb:Purge";

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
	 * Generates a condition block for `qldb:Purge`.
	 */
	static purge(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "qldb:Purge": value } };
	}
}
