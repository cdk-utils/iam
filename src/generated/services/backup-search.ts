// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/backup-search.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the backup-search service.
 */
export class BackupSearchActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "backup-search";

	/** [Read] backup-search:GetSearchJob */
	static readonly GET_SEARCH_JOB = "backup-search:GetSearchJob";
	/** [Read] backup-search:GetSearchResultExportJob */
	static readonly GET_SEARCH_RESULT_EXPORT_JOB =
		"backup-search:GetSearchResultExportJob";
	/** [Read] backup-search:ListSearchJobBackups */
	static readonly LIST_SEARCH_JOB_BACKUPS =
		"backup-search:ListSearchJobBackups";
	/** [Read] backup-search:ListSearchJobResults */
	static readonly LIST_SEARCH_JOB_RESULTS =
		"backup-search:ListSearchJobResults";
	/** [List] backup-search:ListSearchJobs */
	static readonly LIST_SEARCH_JOBS = "backup-search:ListSearchJobs";
	/** [List] backup-search:ListSearchResultExportJobs */
	static readonly LIST_SEARCH_RESULT_EXPORT_JOBS =
		"backup-search:ListSearchResultExportJobs";
	/** [Read] backup-search:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "backup-search:ListTagsForResource";
	/** [Write] backup-search:StartSearchJob */
	static readonly START_SEARCH_JOB = "backup-search:StartSearchJob";
	/** [Write] backup-search:StartSearchResultExportJob */
	static readonly START_SEARCH_RESULT_EXPORT_JOB =
		"backup-search:StartSearchResultExportJob";
	/** [Write] backup-search:StopSearchJob */
	static readonly STOP_SEARCH_JOB = "backup-search:StopSearchJob";
	/** [Tagging] backup-search:TagResource */
	static readonly TAG_RESOURCE = "backup-search:TagResource";
	/** [Tagging] backup-search:UntagResource */
	static readonly UNTAG_RESOURCE = "backup-search:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BackupSearchActions.GET_SEARCH_JOB,
		BackupSearchActions.GET_SEARCH_RESULT_EXPORT_JOB,
		BackupSearchActions.LIST_SEARCH_JOB_BACKUPS,
		BackupSearchActions.LIST_SEARCH_JOB_RESULTS,
		BackupSearchActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BackupSearchActions.START_SEARCH_JOB,
		BackupSearchActions.START_SEARCH_RESULT_EXPORT_JOB,
		BackupSearchActions.STOP_SEARCH_JOB,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		BackupSearchActions.LIST_SEARCH_JOBS,
		BackupSearchActions.LIST_SEARCH_RESULT_EXPORT_JOBS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BackupSearchActions.TAG_RESOURCE,
		BackupSearchActions.UNTAG_RESOURCE,
	];
}

const SearchExportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup-search:(?<region>[^:]*):(?<account>[^:]*):search-export-job/(?<resourceId>[^:/?]+)$",
);
const SearchJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup-search:(?<region>[^:]*):(?<account>[^:]*):search-job/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for backup-search resources.
 */
export class BackupSearchResources {
	/**
	 * Builds an ARN for the searchExportJob resource.
	 */
	static searchExportJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup-search:${props.region ?? "*"}:${props.account ?? "*"}:search-export-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the searchExportJob resource.
	 */
	static isValidSearchExportJobArn(arn: string): boolean {
		return SearchExportJobArnRegex.test(arn);
	}

	/**
	 * Parses a searchExportJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSearchExportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = SearchExportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid searchExportJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the searchJob resource.
	 */
	static searchJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup-search:${props.region ?? "*"}:${props.account ?? "*"}:search-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the searchJob resource.
	 */
	static isValidSearchJobArn(arn: string): boolean {
		return SearchJobArnRegex.test(arn);
	}

	/**
	 * Parses a searchJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSearchJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = SearchJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid searchJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for backup-search.
 */
export class BackupSearchOperations {
	/** IAM actions required for the GetSearchJob API call. */
	static readonly GET_SEARCH_JOB: string[] = ["backup-search:GetSearchJob"];
	/** IAM actions required for the GetSearchResultExportJob API call. */
	static readonly GET_SEARCH_RESULT_EXPORT_JOB: string[] = [
		"backup-search:GetSearchResultExportJob",
	];
	/** IAM actions required for the ListSearchJobBackups API call. */
	static readonly LIST_SEARCH_JOB_BACKUPS: string[] = [
		"backup-search:ListSearchJobBackups",
	];
	/** IAM actions required for the ListSearchJobResults API call. */
	static readonly LIST_SEARCH_JOB_RESULTS: string[] = [
		"backup-search:ListSearchJobResults",
	];
	/** IAM actions required for the ListSearchJobs API call. */
	static readonly LIST_SEARCH_JOBS: string[] = ["backup-search:ListSearchJobs"];
	/** IAM actions required for the ListSearchResultExportJobs API call. */
	static readonly LIST_SEARCH_RESULT_EXPORT_JOBS: string[] = [
		"backup-search:ListSearchResultExportJobs",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"backup-search:ListTagsForResource",
	];
	/** IAM actions required for the StartSearchJob API call. */
	static readonly START_SEARCH_JOB: string[] = [
		"backup-search:StartSearchJob",
		"backup-search:TagResource",
	];
	/** IAM actions required for the StartSearchResultExportJob API call. */
	static readonly START_SEARCH_RESULT_EXPORT_JOB: string[] = [];
	/** IAM actions required for the StopSearchJob API call. */
	static readonly STOP_SEARCH_JOB: string[] = ["backup-search:StopSearchJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["backup-search:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["backup-search:UntagResource"];
}

/**
 * Condition key constants and builders for backup-search.
 */
export class BackupSearchConditions {
	/** Condition keys applicable to the StartSearchJob action. */
	static readonly START_SEARCH_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartSearchResultExportJob action. */
	static readonly START_SEARCH_RESULT_EXPORT_JOB_CONDITION_KEYS: string[] = [
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
