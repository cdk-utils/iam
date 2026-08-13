// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/dbqms.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the dbqms service.
 */
export class DbqmsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "dbqms";

	/** [Write] dbqms:CreateFavoriteQuery */
	static readonly CreateFavoriteQuery = "dbqms:CreateFavoriteQuery";
	/** [Write] dbqms:CreateQueryHistory */
	static readonly CreateQueryHistory = "dbqms:CreateQueryHistory";
	/** [Write] dbqms:CreateTab */
	static readonly CreateTab = "dbqms:CreateTab";
	/** [Write] dbqms:DeleteFavoriteQueries */
	static readonly DeleteFavoriteQueries = "dbqms:DeleteFavoriteQueries";
	/** [Write] dbqms:DeleteQueryHistory */
	static readonly DeleteQueryHistory = "dbqms:DeleteQueryHistory";
	/** [Write] dbqms:DeleteTab */
	static readonly DeleteTab = "dbqms:DeleteTab";
	/** [List] dbqms:DescribeFavoriteQueries */
	static readonly DescribeFavoriteQueries = "dbqms:DescribeFavoriteQueries";
	/** [List] dbqms:DescribeQueryHistory */
	static readonly DescribeQueryHistory = "dbqms:DescribeQueryHistory";
	/** [List] dbqms:DescribeTabs */
	static readonly DescribeTabs = "dbqms:DescribeTabs";
	/** [Read] dbqms:GetQueryString */
	static readonly actionGetQueryString = "dbqms:GetQueryString";
	/** [Write] dbqms:UpdateFavoriteQuery */
	static readonly UpdateFavoriteQuery = "dbqms:UpdateFavoriteQuery";
	/** [Write] dbqms:UpdateQueryHistory */
	static readonly UpdateQueryHistory = "dbqms:UpdateQueryHistory";
	/** [Write] dbqms:UpdateTab */
	static readonly UpdateTab = "dbqms:UpdateTab";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DbqmsActions.actionGetQueryString,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DbqmsActions.CreateFavoriteQuery,
		DbqmsActions.CreateQueryHistory,
		DbqmsActions.CreateTab,
		DbqmsActions.DeleteFavoriteQueries,
		DbqmsActions.DeleteQueryHistory,
		DbqmsActions.DeleteTab,
		DbqmsActions.UpdateFavoriteQuery,
		DbqmsActions.UpdateQueryHistory,
		DbqmsActions.UpdateTab,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DbqmsActions.DescribeFavoriteQueries,
		DbqmsActions.DescribeQueryHistory,
		DbqmsActions.DescribeTabs,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
