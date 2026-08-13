// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/tag.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the tag service.
 */
export class TagActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "tag";

	/** [Read] tag:DescribeReportCreation */
	static readonly DESCRIBE_REPORT_CREATION = "tag:DescribeReportCreation";
	/** [Read] tag:GetComplianceSummary */
	static readonly GET_COMPLIANCE_SUMMARY = "tag:GetComplianceSummary";
	/** [Read] tag:GetResources */
	static readonly GET_RESOURCES = "tag:GetResources";
	/** [Read] tag:GetTagKeys */
	static readonly GET_TAG_KEYS = "tag:GetTagKeys";
	/** [Read] tag:GetTagValues */
	static readonly GET_TAG_VALUES = "tag:GetTagValues";
	/** [List] tag:ListRequiredTags */
	static readonly LIST_REQUIRED_TAGS = "tag:ListRequiredTags";
	/** [Write] tag:StartReportCreation */
	static readonly START_REPORT_CREATION = "tag:StartReportCreation";
	/** [Tagging] tag:TagResources */
	static readonly TAG_RESOURCES = "tag:TagResources";
	/** [Tagging] tag:UntagResources */
	static readonly UNTAG_RESOURCES = "tag:UntagResources";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TagActions.DESCRIBE_REPORT_CREATION,
		TagActions.GET_COMPLIANCE_SUMMARY,
		TagActions.GET_RESOURCES,
		TagActions.GET_TAG_KEYS,
		TagActions.GET_TAG_VALUES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [TagActions.START_REPORT_CREATION];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [TagActions.LIST_REQUIRED_TAGS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		TagActions.TAG_RESOURCES,
		TagActions.UNTAG_RESOURCES,
	];
}

/**
 * API operation to required IAM actions mapping for tag.
 */
export class TagOperations {
	/** IAM actions required for the DescribeReportCreation API call. */
	static readonly DESCRIBE_REPORT_CREATION: string[] = [
		"tag:DescribeReportCreation",
	];
	/** IAM actions required for the GetComplianceSummary API call. */
	static readonly GET_COMPLIANCE_SUMMARY: string[] = [
		"tag:GetComplianceSummary",
	];
	/** IAM actions required for the GetResources API call. */
	static readonly GET_RESOURCES: string[] = ["tag:GetResources"];
	/** IAM actions required for the GetTagKeys API call. */
	static readonly GET_TAG_KEYS: string[] = ["tag:GetTagKeys"];
	/** IAM actions required for the GetTagValues API call. */
	static readonly GET_TAG_VALUES: string[] = ["tag:GetTagValues"];
	/** IAM actions required for the ListRequiredTags API call. */
	static readonly LIST_REQUIRED_TAGS: string[] = ["tag:ListRequiredTags"];
	/** IAM actions required for the StartReportCreation API call. */
	static readonly START_REPORT_CREATION: string[] = ["tag:StartReportCreation"];
	/** IAM actions required for the TagResources API call. */
	static readonly TAG_RESOURCES: string[] = ["tag:TagResources"];
	/** IAM actions required for the UntagResources API call. */
	static readonly UNTAG_RESOURCES: string[] = ["tag:UntagResources"];
}
