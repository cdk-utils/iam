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
	static readonly actionGetSearchJob = "backup-search:GetSearchJob";
	/** [Read] backup-search:GetSearchResultExportJob */
	static readonly actionGetSearchResultExportJob =
		"backup-search:GetSearchResultExportJob";
	/** [Read] backup-search:ListSearchJobBackups */
	static readonly ListSearchJobBackups = "backup-search:ListSearchJobBackups";
	/** [Read] backup-search:ListSearchJobResults */
	static readonly ListSearchJobResults = "backup-search:ListSearchJobResults";
	/** [List] backup-search:ListSearchJobs */
	static readonly ListSearchJobs = "backup-search:ListSearchJobs";
	/** [List] backup-search:ListSearchResultExportJobs */
	static readonly ListSearchResultExportJobs =
		"backup-search:ListSearchResultExportJobs";
	/** [Read] backup-search:ListTagsForResource */
	static readonly ListTagsForResource = "backup-search:ListTagsForResource";
	/** [Write] backup-search:StartSearchJob */
	static readonly StartSearchJob = "backup-search:StartSearchJob";
	/** [Write] backup-search:StartSearchResultExportJob */
	static readonly StartSearchResultExportJob =
		"backup-search:StartSearchResultExportJob";
	/** [Write] backup-search:StopSearchJob */
	static readonly StopSearchJob = "backup-search:StopSearchJob";
	/** [Tagging] backup-search:TagResource */
	static readonly TagResource = "backup-search:TagResource";
	/** [Tagging] backup-search:UntagResource */
	static readonly UntagResource = "backup-search:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BackupSearchActions.actionGetSearchJob,
		BackupSearchActions.actionGetSearchResultExportJob,
		BackupSearchActions.ListSearchJobBackups,
		BackupSearchActions.ListSearchJobResults,
		BackupSearchActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BackupSearchActions.StartSearchJob,
		BackupSearchActions.StartSearchResultExportJob,
		BackupSearchActions.StopSearchJob,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BackupSearchActions.ListSearchJobs,
		BackupSearchActions.ListSearchResultExportJobs,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BackupSearchActions.TagResource,
		BackupSearchActions.UntagResource,
	];
}

/**
 * Properties for building a searchExportJob ARN.
 */
export interface BackupSearchSearchExportJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a searchExportJob ARN.
 */
export interface BackupSearchSearchExportJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a searchJob ARN.
 */
export interface BackupSearchSearchJobArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a searchJob ARN.
 */
export interface BackupSearchSearchJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const SearchExportJobArnRegex =
	/^arn:(?<partition>[^:]+):backup-search:(?<region>[^:]*):(?<account>[^:]*):search-export-job\/(?<resourceId>[^:/?]+)$/;
const SearchJobArnRegex =
	/^arn:(?<partition>[^:]+):backup-search:(?<region>[^:]*):(?<account>[^:]*):search-job\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for backup-search resources.
 */
export class BackupSearchResources {
	/**
	 * Builds an ARN for the searchExportJob resource.
	 */
	static searchExportJob(props: BackupSearchSearchExportJobArnProps): string {
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
	static parseSearchExportJobArn(
		arn: string,
	): BackupSearchSearchExportJobArnComponents {
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
	static searchJob(props: BackupSearchSearchJobArnProps): string {
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
	static parseSearchJobArn(arn: string): BackupSearchSearchJobArnComponents {
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
	static readonly opGetSearchJob: string[] = ["backup-search:GetSearchJob"];
	/** IAM actions required for the GetSearchResultExportJob API call. */
	static readonly opGetSearchResultExportJob: string[] = [
		"backup-search:GetSearchResultExportJob",
	];
	/** IAM actions required for the ListSearchJobBackups API call. */
	static readonly ListSearchJobBackups: string[] = [
		"backup-search:ListSearchJobBackups",
	];
	/** IAM actions required for the ListSearchJobResults API call. */
	static readonly ListSearchJobResults: string[] = [
		"backup-search:ListSearchJobResults",
	];
	/** IAM actions required for the ListSearchJobs API call. */
	static readonly ListSearchJobs: string[] = ["backup-search:ListSearchJobs"];
	/** IAM actions required for the ListSearchResultExportJobs API call. */
	static readonly ListSearchResultExportJobs: string[] = [
		"backup-search:ListSearchResultExportJobs",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"backup-search:ListTagsForResource",
	];
	/** IAM actions required for the StartSearchJob API call. */
	static readonly StartSearchJob: string[] = [
		"backup-search:StartSearchJob",
		"backup-search:TagResource",
	];
	/** IAM actions required for the StartSearchResultExportJob API call. */
	static readonly StartSearchResultExportJob: string[] = [];
	/** IAM actions required for the StopSearchJob API call. */
	static readonly StopSearchJob: string[] = ["backup-search:StopSearchJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["backup-search:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["backup-search:UntagResource"];
}

/**
 * Condition key constants and builders for backup-search.
 */
export class BackupSearchConditions {
	/** Condition keys applicable to the StartSearchJob action. */
	static readonly StartSearchJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartSearchResultExportJob action. */
	static readonly StartSearchResultExportJobConditionKeys: string[] = [
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
