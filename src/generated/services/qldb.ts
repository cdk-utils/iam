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
	static readonly CancelJournalKinesisStream =
		"qldb:CancelJournalKinesisStream";
	/** [Write] qldb:CreateLedger */
	static readonly CreateLedger = "qldb:CreateLedger";
	/** [Write] qldb:DeleteLedger */
	static readonly DeleteLedger = "qldb:DeleteLedger";
	/** [Read] qldb:DescribeJournalKinesisStream */
	static readonly DescribeJournalKinesisStream =
		"qldb:DescribeJournalKinesisStream";
	/** [Read] qldb:DescribeJournalS3Export */
	static readonly DescribeJournalS3Export = "qldb:DescribeJournalS3Export";
	/** [Read] qldb:DescribeLedger */
	static readonly DescribeLedger = "qldb:DescribeLedger";
	/** [Write] qldb:ExecuteStatement */
	static readonly ExecuteStatement = "qldb:ExecuteStatement";
	/** [Write] qldb:ExportJournalToS3 */
	static readonly ExportJournalToS3 = "qldb:ExportJournalToS3";
	/** [Read] qldb:GetBlock */
	static readonly actionGetBlock = "qldb:GetBlock";
	/** [Read] qldb:GetDigest */
	static readonly actionGetDigest = "qldb:GetDigest";
	/** [Read] qldb:GetRevision */
	static readonly actionGetRevision = "qldb:GetRevision";
	/** [Write] qldb:InsertSampleData */
	static readonly InsertSampleData = "qldb:InsertSampleData";
	/** [List] qldb:ListJournalKinesisStreamsForLedger */
	static readonly ListJournalKinesisStreamsForLedger =
		"qldb:ListJournalKinesisStreamsForLedger";
	/** [List] qldb:ListJournalS3Exports */
	static readonly ListJournalS3Exports = "qldb:ListJournalS3Exports";
	/** [List] qldb:ListJournalS3ExportsForLedger */
	static readonly ListJournalS3ExportsForLedger =
		"qldb:ListJournalS3ExportsForLedger";
	/** [List] qldb:ListLedgers */
	static readonly ListLedgers = "qldb:ListLedgers";
	/** [Read] qldb:ListTagsForResource */
	static readonly ListTagsForResource = "qldb:ListTagsForResource";
	/** [Write] qldb:PartiQLCreateIndex */
	static readonly PartiQLCreateIndex = "qldb:PartiQLCreateIndex";
	/** [Write] qldb:PartiQLCreateTable */
	static readonly PartiQLCreateTable = "qldb:PartiQLCreateTable";
	/** [Write] qldb:PartiQLDelete */
	static readonly PartiQLDelete = "qldb:PartiQLDelete";
	/** [Write] qldb:PartiQLDropIndex */
	static readonly PartiQLDropIndex = "qldb:PartiQLDropIndex";
	/** [Write] qldb:PartiQLDropTable */
	static readonly PartiQLDropTable = "qldb:PartiQLDropTable";
	/** [Read] qldb:PartiQLHistoryFunction */
	static readonly PartiQLHistoryFunction = "qldb:PartiQLHistoryFunction";
	/** [Write] qldb:PartiQLInsert */
	static readonly PartiQLInsert = "qldb:PartiQLInsert";
	/** [Write] qldb:PartiQLRedact */
	static readonly PartiQLRedact = "qldb:PartiQLRedact";
	/** [Read] qldb:PartiQLSelect */
	static readonly PartiQLSelect = "qldb:PartiQLSelect";
	/** [Write] qldb:PartiQLUndropTable */
	static readonly PartiQLUndropTable = "qldb:PartiQLUndropTable";
	/** [Write] qldb:PartiQLUpdate */
	static readonly PartiQLUpdate = "qldb:PartiQLUpdate";
	/** [Write] qldb:SendCommand */
	static readonly SendCommand = "qldb:SendCommand";
	/** [Write] qldb:ShowCatalog */
	static readonly ShowCatalog = "qldb:ShowCatalog";
	/** [Write] qldb:StreamJournalToKinesis */
	static readonly StreamJournalToKinesis = "qldb:StreamJournalToKinesis";
	/** [Tagging] qldb:TagResource */
	static readonly TagResource = "qldb:TagResource";
	/** [Tagging] qldb:UntagResource */
	static readonly UntagResource = "qldb:UntagResource";
	/** [Write] qldb:UpdateLedger */
	static readonly UpdateLedger = "qldb:UpdateLedger";
	/** [Write] qldb:UpdateLedgerPermissionsMode */
	static readonly UpdateLedgerPermissionsMode =
		"qldb:UpdateLedgerPermissionsMode";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		QldbActions.DescribeJournalKinesisStream,
		QldbActions.DescribeJournalS3Export,
		QldbActions.DescribeLedger,
		QldbActions.actionGetBlock,
		QldbActions.actionGetDigest,
		QldbActions.actionGetRevision,
		QldbActions.ListTagsForResource,
		QldbActions.PartiQLHistoryFunction,
		QldbActions.PartiQLSelect,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		QldbActions.CancelJournalKinesisStream,
		QldbActions.CreateLedger,
		QldbActions.DeleteLedger,
		QldbActions.ExecuteStatement,
		QldbActions.ExportJournalToS3,
		QldbActions.InsertSampleData,
		QldbActions.PartiQLCreateIndex,
		QldbActions.PartiQLCreateTable,
		QldbActions.PartiQLDelete,
		QldbActions.PartiQLDropIndex,
		QldbActions.PartiQLDropTable,
		QldbActions.PartiQLInsert,
		QldbActions.PartiQLRedact,
		QldbActions.PartiQLUndropTable,
		QldbActions.PartiQLUpdate,
		QldbActions.SendCommand,
		QldbActions.ShowCatalog,
		QldbActions.StreamJournalToKinesis,
		QldbActions.UpdateLedger,
		QldbActions.UpdateLedgerPermissionsMode,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		QldbActions.ListJournalKinesisStreamsForLedger,
		QldbActions.ListJournalS3Exports,
		QldbActions.ListJournalS3ExportsForLedger,
		QldbActions.ListLedgers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		QldbActions.TagResource,
		QldbActions.UntagResource,
	];
}

/**
 * Properties for building a catalog ARN.
 */
export interface QldbCatalogArnProps {
	/** The LedgerName component of the ARN. */
	readonly ledgerName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a catalog ARN.
 */
export interface QldbCatalogArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LedgerName component. */
	readonly ledgerName: string;
}

/**
 * Properties for building a ledger ARN.
 */
export interface QldbLedgerArnProps {
	/** The LedgerName component of the ARN. */
	readonly ledgerName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ledger ARN.
 */
export interface QldbLedgerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LedgerName component. */
	readonly ledgerName: string;
}

/**
 * Properties for building a stream ARN.
 */
export interface QldbStreamArnProps {
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
}

/**
 * Parsed components of a stream ARN.
 */
export interface QldbStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LedgerName component. */
	readonly ledgerName: string;
	/** The StreamId component. */
	readonly streamId: string;
}

/**
 * Properties for building a table ARN.
 */
export interface QldbTableArnProps {
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
}

/**
 * Parsed components of a table ARN.
 */
export interface QldbTableArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LedgerName component. */
	readonly ledgerName: string;
	/** The TableId component. */
	readonly tableId: string;
}

const CatalogArnRegex =
	/^arn:(?<partition>[^:]+):qldb:(?<region>[^:]*):(?<account>[^:]*):ledger\/(?<ledgerName>[^:/?]+)\/information_schema\/user_tables$/;
const LedgerArnRegex =
	/^arn:(?<partition>[^:]+):qldb:(?<region>[^:]*):(?<account>[^:]*):ledger\/(?<ledgerName>[^:/?]+)$/;
const StreamArnRegex =
	/^arn:(?<partition>[^:]+):qldb:(?<region>[^:]*):(?<account>[^:]*):stream\/(?<ledgerName>[^:/?]+)\/(?<streamId>[^:/?]+)$/;
const TableArnRegex =
	/^arn:(?<partition>[^:]+):qldb:(?<region>[^:]*):(?<account>[^:]*):ledger\/(?<ledgerName>[^:/?]+)\/table\/(?<tableId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for qldb resources.
 */
export class QldbResources {
	/**
	 * Builds an ARN for the catalog resource.
	 */
	static catalog(props: QldbCatalogArnProps): string {
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
	static parseCatalogArn(arn: string): QldbCatalogArnComponents {
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
	static ledger(props: QldbLedgerArnProps): string {
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
	static parseLedgerArn(arn: string): QldbLedgerArnComponents {
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
	static stream(props: QldbStreamArnProps): string {
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
	static parseStreamArn(arn: string): QldbStreamArnComponents {
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
	static table(props: QldbTableArnProps): string {
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
	static parseTableArn(arn: string): QldbTableArnComponents {
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
	static readonly CreateLedgerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PartiQLCreateTable action. */
	static readonly PartiQLCreateTableConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PartiQLDropIndex action. */
	static readonly PartiQLDropIndexConditionKeys: string[] = ["qldb:Purge"];
	/** Condition keys applicable to the PartiQLDropTable action. */
	static readonly PartiQLDropTableConditionKeys: string[] = ["qldb:Purge"];
	/** Condition keys applicable to the StreamJournalToKinesis action. */
	static readonly StreamJournalToKinesisConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
