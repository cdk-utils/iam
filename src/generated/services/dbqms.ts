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
	static readonly CREATE_FAVORITE_QUERY = "dbqms:CreateFavoriteQuery";
	/** [Write] dbqms:CreateQueryHistory */
	static readonly CREATE_QUERY_HISTORY = "dbqms:CreateQueryHistory";
	/** [Write] dbqms:CreateTab */
	static readonly CREATE_TAB = "dbqms:CreateTab";
	/** [Write] dbqms:DeleteFavoriteQueries */
	static readonly DELETE_FAVORITE_QUERIES = "dbqms:DeleteFavoriteQueries";
	/** [Write] dbqms:DeleteQueryHistory */
	static readonly DELETE_QUERY_HISTORY = "dbqms:DeleteQueryHistory";
	/** [Write] dbqms:DeleteTab */
	static readonly DELETE_TAB = "dbqms:DeleteTab";
	/** [List] dbqms:DescribeFavoriteQueries */
	static readonly DESCRIBE_FAVORITE_QUERIES = "dbqms:DescribeFavoriteQueries";
	/** [List] dbqms:DescribeQueryHistory */
	static readonly DESCRIBE_QUERY_HISTORY = "dbqms:DescribeQueryHistory";
	/** [List] dbqms:DescribeTabs */
	static readonly DESCRIBE_TABS = "dbqms:DescribeTabs";
	/** [Read] dbqms:GetQueryString */
	static readonly GET_QUERY_STRING = "dbqms:GetQueryString";
	/** [Write] dbqms:UpdateFavoriteQuery */
	static readonly UPDATE_FAVORITE_QUERY = "dbqms:UpdateFavoriteQuery";
	/** [Write] dbqms:UpdateQueryHistory */
	static readonly UPDATE_QUERY_HISTORY = "dbqms:UpdateQueryHistory";
	/** [Write] dbqms:UpdateTab */
	static readonly UPDATE_TAB = "dbqms:UpdateTab";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [DbqmsActions.GET_QUERY_STRING];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DbqmsActions.CREATE_FAVORITE_QUERY,
		DbqmsActions.CREATE_QUERY_HISTORY,
		DbqmsActions.CREATE_TAB,
		DbqmsActions.DELETE_FAVORITE_QUERIES,
		DbqmsActions.DELETE_QUERY_HISTORY,
		DbqmsActions.DELETE_TAB,
		DbqmsActions.UPDATE_FAVORITE_QUERY,
		DbqmsActions.UPDATE_QUERY_HISTORY,
		DbqmsActions.UPDATE_TAB,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DbqmsActions.DESCRIBE_FAVORITE_QUERIES,
		DbqmsActions.DESCRIBE_QUERY_HISTORY,
		DbqmsActions.DESCRIBE_TABS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
