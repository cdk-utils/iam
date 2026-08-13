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
	static readonly DescribeReportCreation = "tag:DescribeReportCreation";
	/** [Read] tag:GetComplianceSummary */
	static readonly actionGetComplianceSummary = "tag:GetComplianceSummary";
	/** [Read] tag:GetResources */
	static readonly actionGetResources = "tag:GetResources";
	/** [Read] tag:GetTagKeys */
	static readonly actionGetTagKeys = "tag:GetTagKeys";
	/** [Read] tag:GetTagValues */
	static readonly actionGetTagValues = "tag:GetTagValues";
	/** [List] tag:ListRequiredTags */
	static readonly ListRequiredTags = "tag:ListRequiredTags";
	/** [Write] tag:StartReportCreation */
	static readonly StartReportCreation = "tag:StartReportCreation";
	/** [Tagging] tag:TagResources */
	static readonly TagResources = "tag:TagResources";
	/** [Tagging] tag:UntagResources */
	static readonly UntagResources = "tag:UntagResources";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TagActions.DescribeReportCreation,
		TagActions.actionGetComplianceSummary,
		TagActions.actionGetResources,
		TagActions.actionGetTagKeys,
		TagActions.actionGetTagValues,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [TagActions.StartReportCreation];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [TagActions.ListRequiredTags];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		TagActions.TagResources,
		TagActions.UntagResources,
	];
}

/**
 * API operation to required IAM actions mapping for tag.
 */
export class TagOperations {
	/** IAM actions required for the DescribeReportCreation API call. */
	static readonly DescribeReportCreation: string[] = [
		"tag:DescribeReportCreation",
	];
	/** IAM actions required for the GetComplianceSummary API call. */
	static readonly opGetComplianceSummary: string[] = [
		"tag:GetComplianceSummary",
	];
	/** IAM actions required for the GetResources API call. */
	static readonly opGetResources: string[] = ["tag:GetResources"];
	/** IAM actions required for the GetTagKeys API call. */
	static readonly opGetTagKeys: string[] = ["tag:GetTagKeys"];
	/** IAM actions required for the GetTagValues API call. */
	static readonly opGetTagValues: string[] = ["tag:GetTagValues"];
	/** IAM actions required for the ListRequiredTags API call. */
	static readonly ListRequiredTags: string[] = ["tag:ListRequiredTags"];
	/** IAM actions required for the StartReportCreation API call. */
	static readonly StartReportCreation: string[] = ["tag:StartReportCreation"];
	/** IAM actions required for the TagResources API call. */
	static readonly TagResources: string[] = ["tag:TagResources"];
	/** IAM actions required for the UntagResources API call. */
	static readonly UntagResources: string[] = ["tag:UntagResources"];
}
