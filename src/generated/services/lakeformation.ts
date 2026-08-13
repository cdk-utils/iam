// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/lakeformation.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the lakeformation service.
 */
export class LakeFormationActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "lakeformation";

	/** [Tagging] lakeformation:AddLFTagsToResource */
	static readonly ADD_LF_TAGS_TO_RESOURCE = "lakeformation:AddLFTagsToResource";
	/** [PermissionManagement] lakeformation:BatchGrantPermissions */
	static readonly BATCH_GRANT_PERMISSIONS =
		"lakeformation:BatchGrantPermissions";
	/** [PermissionManagement] lakeformation:BatchRevokePermissions */
	static readonly BATCH_REVOKE_PERMISSIONS =
		"lakeformation:BatchRevokePermissions";
	/** [Write] lakeformation:CancelTransaction */
	static readonly CANCEL_TRANSACTION = "lakeformation:CancelTransaction";
	/** [Write] lakeformation:CommitTransaction */
	static readonly COMMIT_TRANSACTION = "lakeformation:CommitTransaction";
	/** [Write] lakeformation:CreateDataCellsFilter */
	static readonly CREATE_DATA_CELLS_FILTER =
		"lakeformation:CreateDataCellsFilter";
	/** [Write] lakeformation:CreateLFTag */
	static readonly CREATE_LF_TAG = "lakeformation:CreateLFTag";
	/** [Write] lakeformation:CreateLFTagExpression */
	static readonly CREATE_LF_TAG_EXPRESSION =
		"lakeformation:CreateLFTagExpression";
	/** [Write] lakeformation:CreateLakeFormationIdentityCenterConfiguration */
	static readonly CREATE_LAKE_FORMATION_IDENTITY_CENTER_CONFIGURATION =
		"lakeformation:CreateLakeFormationIdentityCenterConfiguration";
	/** [Write] lakeformation:CreateLakeFormationOptIn */
	static readonly CREATE_LAKE_FORMATION_OPT_IN =
		"lakeformation:CreateLakeFormationOptIn";
	/** [Write] lakeformation:DeleteDataCellsFilter */
	static readonly DELETE_DATA_CELLS_FILTER =
		"lakeformation:DeleteDataCellsFilter";
	/** [Write] lakeformation:DeleteLFTag */
	static readonly DELETE_LF_TAG = "lakeformation:DeleteLFTag";
	/** [Write] lakeformation:DeleteLFTagExpression */
	static readonly DELETE_LF_TAG_EXPRESSION =
		"lakeformation:DeleteLFTagExpression";
	/** [Write] lakeformation:DeleteLakeFormationIdentityCenterConfiguration */
	static readonly DELETE_LAKE_FORMATION_IDENTITY_CENTER_CONFIGURATION =
		"lakeformation:DeleteLakeFormationIdentityCenterConfiguration";
	/** [Write] lakeformation:DeleteLakeFormationOptIn */
	static readonly DELETE_LAKE_FORMATION_OPT_IN =
		"lakeformation:DeleteLakeFormationOptIn";
	/** [Write] lakeformation:DeleteObjectsOnCancel */
	static readonly DELETE_OBJECTS_ON_CANCEL =
		"lakeformation:DeleteObjectsOnCancel";
	/** [Write] lakeformation:DeregisterResource */
	static readonly DEREGISTER_RESOURCE = "lakeformation:DeregisterResource";
	/** [Read] lakeformation:DescribeLakeFormationIdentityCenterConfiguration */
	static readonly DESCRIBE_LAKE_FORMATION_IDENTITY_CENTER_CONFIGURATION =
		"lakeformation:DescribeLakeFormationIdentityCenterConfiguration";
	/** [Read] lakeformation:DescribeResource */
	static readonly DESCRIBE_RESOURCE = "lakeformation:DescribeResource";
	/** [Read] lakeformation:DescribeTransaction */
	static readonly DESCRIBE_TRANSACTION = "lakeformation:DescribeTransaction";
	/** [Write] lakeformation:ExtendTransaction */
	static readonly EXTEND_TRANSACTION = "lakeformation:ExtendTransaction";
	/** [Write] lakeformation:GetDataAccess */
	static readonly GET_DATA_ACCESS = "lakeformation:GetDataAccess";
	/** [Read] lakeformation:GetDataCellsFilter */
	static readonly GET_DATA_CELLS_FILTER = "lakeformation:GetDataCellsFilter";
	/** [Read] lakeformation:GetDataLakePrincipal */
	static readonly GET_DATA_LAKE_PRINCIPAL =
		"lakeformation:GetDataLakePrincipal";
	/** [Read] lakeformation:GetDataLakeSettings */
	static readonly GET_DATA_LAKE_SETTINGS = "lakeformation:GetDataLakeSettings";
	/** [Read] lakeformation:GetEffectivePermissionsForPath */
	static readonly GET_EFFECTIVE_PERMISSIONS_FOR_PATH =
		"lakeformation:GetEffectivePermissionsForPath";
	/** [Read] lakeformation:GetLFTag */
	static readonly GET_LF_TAG = "lakeformation:GetLFTag";
	/** [Read] lakeformation:GetLFTagExpression */
	static readonly GET_LF_TAG_EXPRESSION = "lakeformation:GetLFTagExpression";
	/** [Read] lakeformation:GetQueryState */
	static readonly GET_QUERY_STATE = "lakeformation:GetQueryState";
	/** [Read] lakeformation:GetQueryStatistics */
	static readonly GET_QUERY_STATISTICS = "lakeformation:GetQueryStatistics";
	/** [Read] lakeformation:GetResourceLFTags */
	static readonly GET_RESOURCE_LF_TAGS = "lakeformation:GetResourceLFTags";
	/** [Read] lakeformation:GetTableObjects */
	static readonly GET_TABLE_OBJECTS = "lakeformation:GetTableObjects";
	/** [Read] lakeformation:GetTemporaryGluePartitionCredentials */
	static readonly GET_TEMPORARY_GLUE_PARTITION_CREDENTIALS =
		"lakeformation:GetTemporaryGluePartitionCredentials";
	/** [Read] lakeformation:GetTemporaryGlueTableCredentials */
	static readonly GET_TEMPORARY_GLUE_TABLE_CREDENTIALS =
		"lakeformation:GetTemporaryGlueTableCredentials";
	/** [Read] lakeformation:GetWorkUnitResults */
	static readonly GET_WORK_UNIT_RESULTS = "lakeformation:GetWorkUnitResults";
	/** [Read] lakeformation:GetWorkUnits */
	static readonly GET_WORK_UNITS = "lakeformation:GetWorkUnits";
	/** [PermissionManagement] lakeformation:GrantPermissions */
	static readonly GRANT_PERMISSIONS = "lakeformation:GrantPermissions";
	/** [List] lakeformation:ListDataCellsFilter */
	static readonly LIST_DATA_CELLS_FILTER = "lakeformation:ListDataCellsFilter";
	/** [Read] lakeformation:ListLFTagExpressions */
	static readonly LIST_LF_TAG_EXPRESSIONS =
		"lakeformation:ListLFTagExpressions";
	/** [Read] lakeformation:ListLFTags */
	static readonly LIST_LF_TAGS = "lakeformation:ListLFTags";
	/** [List] lakeformation:ListLakeFormationOptIns */
	static readonly LIST_LAKE_FORMATION_OPT_INS =
		"lakeformation:ListLakeFormationOptIns";
	/** [List] lakeformation:ListPermissions */
	static readonly LIST_PERMISSIONS = "lakeformation:ListPermissions";
	/** [List] lakeformation:ListResources */
	static readonly LIST_RESOURCES = "lakeformation:ListResources";
	/** [List] lakeformation:ListTableStorageOptimizers */
	static readonly LIST_TABLE_STORAGE_OPTIMIZERS =
		"lakeformation:ListTableStorageOptimizers";
	/** [List] lakeformation:ListTransactions */
	static readonly LIST_TRANSACTIONS = "lakeformation:ListTransactions";
	/** [PermissionManagement] lakeformation:PutDataLakeSettings */
	static readonly PUT_DATA_LAKE_SETTINGS = "lakeformation:PutDataLakeSettings";
	/** [Write] lakeformation:RegisterResource */
	static readonly REGISTER_RESOURCE = "lakeformation:RegisterResource";
	/** [Write] lakeformation:RegisterResourceWithPrivilegedAccess */
	static readonly REGISTER_RESOURCE_WITH_PRIVILEGED_ACCESS =
		"lakeformation:RegisterResourceWithPrivilegedAccess";
	/** [Tagging] lakeformation:RemoveLFTagsFromResource */
	static readonly REMOVE_LF_TAGS_FROM_RESOURCE =
		"lakeformation:RemoveLFTagsFromResource";
	/** [PermissionManagement] lakeformation:RevokePermissions */
	static readonly REVOKE_PERMISSIONS = "lakeformation:RevokePermissions";
	/** [Read] lakeformation:SearchDatabasesByLFTags */
	static readonly SEARCH_DATABASES_BY_LF_TAGS =
		"lakeformation:SearchDatabasesByLFTags";
	/** [Read] lakeformation:SearchTablesByLFTags */
	static readonly SEARCH_TABLES_BY_LF_TAGS =
		"lakeformation:SearchTablesByLFTags";
	/** [Write] lakeformation:StartQueryPlanning */
	static readonly START_QUERY_PLANNING = "lakeformation:StartQueryPlanning";
	/** [Write] lakeformation:StartTransaction */
	static readonly START_TRANSACTION = "lakeformation:StartTransaction";
	/** [Write] lakeformation:UpdateDataCellsFilter */
	static readonly UPDATE_DATA_CELLS_FILTER =
		"lakeformation:UpdateDataCellsFilter";
	/** [Write] lakeformation:UpdateLFTag */
	static readonly UPDATE_LF_TAG = "lakeformation:UpdateLFTag";
	/** [Write] lakeformation:UpdateLFTagExpression */
	static readonly UPDATE_LF_TAG_EXPRESSION =
		"lakeformation:UpdateLFTagExpression";
	/** [Write] lakeformation:UpdateLakeFormationIdentityCenterConfiguration */
	static readonly UPDATE_LAKE_FORMATION_IDENTITY_CENTER_CONFIGURATION =
		"lakeformation:UpdateLakeFormationIdentityCenterConfiguration";
	/** [Write] lakeformation:UpdateResource */
	static readonly UPDATE_RESOURCE = "lakeformation:UpdateResource";
	/** [Write] lakeformation:UpdateTableObjects */
	static readonly UPDATE_TABLE_OBJECTS = "lakeformation:UpdateTableObjects";
	/** [Write] lakeformation:UpdateTableStorageOptimizer */
	static readonly UPDATE_TABLE_STORAGE_OPTIMIZER =
		"lakeformation:UpdateTableStorageOptimizer";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		LakeFormationActions.DESCRIBE_LAKE_FORMATION_IDENTITY_CENTER_CONFIGURATION,
		LakeFormationActions.DESCRIBE_RESOURCE,
		LakeFormationActions.DESCRIBE_TRANSACTION,
		LakeFormationActions.GET_DATA_CELLS_FILTER,
		LakeFormationActions.GET_DATA_LAKE_PRINCIPAL,
		LakeFormationActions.GET_DATA_LAKE_SETTINGS,
		LakeFormationActions.GET_EFFECTIVE_PERMISSIONS_FOR_PATH,
		LakeFormationActions.GET_LF_TAG,
		LakeFormationActions.GET_LF_TAG_EXPRESSION,
		LakeFormationActions.GET_QUERY_STATE,
		LakeFormationActions.GET_QUERY_STATISTICS,
		LakeFormationActions.GET_RESOURCE_LF_TAGS,
		LakeFormationActions.GET_TABLE_OBJECTS,
		LakeFormationActions.GET_TEMPORARY_GLUE_PARTITION_CREDENTIALS,
		LakeFormationActions.GET_TEMPORARY_GLUE_TABLE_CREDENTIALS,
		LakeFormationActions.GET_WORK_UNIT_RESULTS,
		LakeFormationActions.GET_WORK_UNITS,
		LakeFormationActions.LIST_LF_TAG_EXPRESSIONS,
		LakeFormationActions.LIST_LF_TAGS,
		LakeFormationActions.SEARCH_DATABASES_BY_LF_TAGS,
		LakeFormationActions.SEARCH_TABLES_BY_LF_TAGS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		LakeFormationActions.CANCEL_TRANSACTION,
		LakeFormationActions.COMMIT_TRANSACTION,
		LakeFormationActions.CREATE_DATA_CELLS_FILTER,
		LakeFormationActions.CREATE_LF_TAG,
		LakeFormationActions.CREATE_LF_TAG_EXPRESSION,
		LakeFormationActions.CREATE_LAKE_FORMATION_IDENTITY_CENTER_CONFIGURATION,
		LakeFormationActions.CREATE_LAKE_FORMATION_OPT_IN,
		LakeFormationActions.DELETE_DATA_CELLS_FILTER,
		LakeFormationActions.DELETE_LF_TAG,
		LakeFormationActions.DELETE_LF_TAG_EXPRESSION,
		LakeFormationActions.DELETE_LAKE_FORMATION_IDENTITY_CENTER_CONFIGURATION,
		LakeFormationActions.DELETE_LAKE_FORMATION_OPT_IN,
		LakeFormationActions.DELETE_OBJECTS_ON_CANCEL,
		LakeFormationActions.DEREGISTER_RESOURCE,
		LakeFormationActions.EXTEND_TRANSACTION,
		LakeFormationActions.GET_DATA_ACCESS,
		LakeFormationActions.REGISTER_RESOURCE,
		LakeFormationActions.REGISTER_RESOURCE_WITH_PRIVILEGED_ACCESS,
		LakeFormationActions.START_QUERY_PLANNING,
		LakeFormationActions.START_TRANSACTION,
		LakeFormationActions.UPDATE_DATA_CELLS_FILTER,
		LakeFormationActions.UPDATE_LF_TAG,
		LakeFormationActions.UPDATE_LF_TAG_EXPRESSION,
		LakeFormationActions.UPDATE_LAKE_FORMATION_IDENTITY_CENTER_CONFIGURATION,
		LakeFormationActions.UPDATE_RESOURCE,
		LakeFormationActions.UPDATE_TABLE_OBJECTS,
		LakeFormationActions.UPDATE_TABLE_STORAGE_OPTIMIZER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		LakeFormationActions.LIST_DATA_CELLS_FILTER,
		LakeFormationActions.LIST_LAKE_FORMATION_OPT_INS,
		LakeFormationActions.LIST_PERMISSIONS,
		LakeFormationActions.LIST_RESOURCES,
		LakeFormationActions.LIST_TABLE_STORAGE_OPTIMIZERS,
		LakeFormationActions.LIST_TRANSACTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		LakeFormationActions.BATCH_GRANT_PERMISSIONS,
		LakeFormationActions.BATCH_REVOKE_PERMISSIONS,
		LakeFormationActions.GRANT_PERMISSIONS,
		LakeFormationActions.PUT_DATA_LAKE_SETTINGS,
		LakeFormationActions.REVOKE_PERMISSIONS,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		LakeFormationActions.ADD_LF_TAGS_TO_RESOURCE,
		LakeFormationActions.REMOVE_LF_TAGS_FROM_RESOURCE,
	];
}

/**
 * API operation to required IAM actions mapping for lakeformation.
 */
export class LakeFormationOperations {
	/** IAM actions required for the AddLFTagsToResource API call. */
	static readonly ADD_LF_TAGS_TO_RESOURCE: string[] = [];
	/** IAM actions required for the AssumeDecoratedRoleWithSAML API call. */
	static readonly ASSUME_DECORATED_ROLE_WITH_SAML: string[] = [];
	/** IAM actions required for the BatchGrantPermissions API call. */
	static readonly BATCH_GRANT_PERMISSIONS: string[] = [
		"lakeformation:BatchGrantPermissions",
	];
	/** IAM actions required for the BatchRevokePermissions API call. */
	static readonly BATCH_REVOKE_PERMISSIONS: string[] = [
		"lakeformation:BatchRevokePermissions",
	];
	/** IAM actions required for the CancelTransaction API call. */
	static readonly CANCEL_TRANSACTION: string[] = [];
	/** IAM actions required for the CommitTransaction API call. */
	static readonly COMMIT_TRANSACTION: string[] = [];
	/** IAM actions required for the CreateDataCellsFilter API call. */
	static readonly CREATE_DATA_CELLS_FILTER: string[] = [
		"lakeformation:CreateDataCellsFilter",
	];
	/** IAM actions required for the CreateLFTag API call. */
	static readonly CREATE_LF_TAG: string[] = [];
	/** IAM actions required for the CreateLFTagExpression API call. */
	static readonly CREATE_LF_TAG_EXPRESSION: string[] = [
		"lakeformation:CreateLFTagExpression",
	];
	/** IAM actions required for the CreateLakeFormationIdentityCenterConfiguration API call. */
	static readonly CREATE_LAKE_FORMATION_IDENTITY_CENTER_CONFIGURATION: string[] =
		["lakeformation:CreateLakeFormationIdentityCenterConfiguration"];
	/** IAM actions required for the CreateLakeFormationOptIn API call. */
	static readonly CREATE_LAKE_FORMATION_OPT_IN: string[] = [
		"lakeformation:CreateLakeFormationOptIn",
	];
	/** IAM actions required for the DeleteDataCellsFilter API call. */
	static readonly DELETE_DATA_CELLS_FILTER: string[] = [
		"lakeformation:DeleteDataCellsFilter",
	];
	/** IAM actions required for the DeleteLFTag API call. */
	static readonly DELETE_LF_TAG: string[] = [];
	/** IAM actions required for the DeleteLFTagExpression API call. */
	static readonly DELETE_LF_TAG_EXPRESSION: string[] = [
		"lakeformation:DeleteLFTagExpression",
	];
	/** IAM actions required for the DeleteLakeFormationIdentityCenterConfiguration API call. */
	static readonly DELETE_LAKE_FORMATION_IDENTITY_CENTER_CONFIGURATION: string[] =
		["lakeformation:DeleteLakeFormationIdentityCenterConfiguration"];
	/** IAM actions required for the DeleteLakeFormationOptIn API call. */
	static readonly DELETE_LAKE_FORMATION_OPT_IN: string[] = [
		"lakeformation:DeleteLakeFormationOptIn",
	];
	/** IAM actions required for the DeleteObjectsOnCancel API call. */
	static readonly DELETE_OBJECTS_ON_CANCEL: string[] = [];
	/** IAM actions required for the DeregisterResource API call. */
	static readonly DEREGISTER_RESOURCE: string[] = [];
	/** IAM actions required for the DescribeLakeFormationIdentityCenterConfiguration API call. */
	static readonly DESCRIBE_LAKE_FORMATION_IDENTITY_CENTER_CONFIGURATION: string[] =
		["lakeformation:DescribeLakeFormationIdentityCenterConfiguration"];
	/** IAM actions required for the DescribeResource API call. */
	static readonly DESCRIBE_RESOURCE: string[] = [];
	/** IAM actions required for the DescribeTransaction API call. */
	static readonly DESCRIBE_TRANSACTION: string[] = [];
	/** IAM actions required for the ExtendTransaction API call. */
	static readonly EXTEND_TRANSACTION: string[] = [];
	/** IAM actions required for the GetDataCellsFilter API call. */
	static readonly GET_DATA_CELLS_FILTER: string[] = [
		"lakeformation:GetDataCellsFilter",
	];
	/** IAM actions required for the GetDataLakePrincipal API call. */
	static readonly GET_DATA_LAKE_PRINCIPAL: string[] = [
		"lakeformation:GetDataLakePrincipal",
	];
	/** IAM actions required for the GetDataLakeSettings API call. */
	static readonly GET_DATA_LAKE_SETTINGS: string[] = [
		"lakeformation:GetDataLakeSettings",
	];
	/** IAM actions required for the GetEffectivePermissionsForPath API call. */
	static readonly GET_EFFECTIVE_PERMISSIONS_FOR_PATH: string[] = [
		"lakeformation:GetEffectivePermissionsForPath",
	];
	/** IAM actions required for the GetLFTag API call. */
	static readonly GET_LF_TAG: string[] = [];
	/** IAM actions required for the GetLFTagExpression API call. */
	static readonly GET_LF_TAG_EXPRESSION: string[] = [
		"lakeformation:GetLFTagExpression",
	];
	/** IAM actions required for the GetQueryState API call. */
	static readonly GET_QUERY_STATE: string[] = ["lakeformation:GetQueryState"];
	/** IAM actions required for the GetQueryStatistics API call. */
	static readonly GET_QUERY_STATISTICS: string[] = [
		"lakeformation:GetQueryStatistics",
	];
	/** IAM actions required for the GetResourceLFTags API call. */
	static readonly GET_RESOURCE_LF_TAGS: string[] = [];
	/** IAM actions required for the GetTableObjects API call. */
	static readonly GET_TABLE_OBJECTS: string[] = [];
	/** IAM actions required for the GetTemporaryDataLocationCredentials API call. */
	static readonly GET_TEMPORARY_DATA_LOCATION_CREDENTIALS: string[] = [
		"lakeformation:GetDataAccess",
	];
	/** IAM actions required for the GetTemporaryGluePartitionCredentials API call. */
	static readonly GET_TEMPORARY_GLUE_PARTITION_CREDENTIALS: string[] = [];
	/** IAM actions required for the GetTemporaryGlueTableCredentials API call. */
	static readonly GET_TEMPORARY_GLUE_TABLE_CREDENTIALS: string[] = [];
	/** IAM actions required for the GetWorkUnitResults API call. */
	static readonly GET_WORK_UNIT_RESULTS: string[] = [
		"lakeformation:GetWorkUnitResults",
	];
	/** IAM actions required for the GetWorkUnits API call. */
	static readonly GET_WORK_UNITS: string[] = ["lakeformation:GetWorkUnits"];
	/** IAM actions required for the GrantPermissions API call. */
	static readonly GRANT_PERMISSIONS: string[] = [];
	/** IAM actions required for the ListDataCellsFilter API call. */
	static readonly LIST_DATA_CELLS_FILTER: string[] = [
		"lakeformation:ListDataCellsFilter",
	];
	/** IAM actions required for the ListLFTagExpressions API call. */
	static readonly LIST_LF_TAG_EXPRESSIONS: string[] = [
		"lakeformation:ListLFTagExpressions",
	];
	/** IAM actions required for the ListLFTags API call. */
	static readonly LIST_LF_TAGS: string[] = [];
	/** IAM actions required for the ListLakeFormationOptIns API call. */
	static readonly LIST_LAKE_FORMATION_OPT_INS: string[] = [
		"lakeformation:ListLakeFormationOptIns",
	];
	/** IAM actions required for the ListPermissions API call. */
	static readonly LIST_PERMISSIONS: string[] = [
		"lakeformation:ListPermissions",
	];
	/** IAM actions required for the ListResources API call. */
	static readonly LIST_RESOURCES: string[] = [];
	/** IAM actions required for the ListTableStorageOptimizers API call. */
	static readonly LIST_TABLE_STORAGE_OPTIMIZERS: string[] = [];
	/** IAM actions required for the ListTransactions API call. */
	static readonly LIST_TRANSACTIONS: string[] = [];
	/** IAM actions required for the PutDataLakeSettings API call. */
	static readonly PUT_DATA_LAKE_SETTINGS: string[] = [
		"lakeformation:PutDataLakeSettings",
	];
	/** IAM actions required for the RegisterResource API call. */
	static readonly REGISTER_RESOURCE: string[] = [];
	/** IAM actions required for the RemoveLFTagsFromResource API call. */
	static readonly REMOVE_LF_TAGS_FROM_RESOURCE: string[] = [];
	/** IAM actions required for the RevokePermissions API call. */
	static readonly REVOKE_PERMISSIONS: string[] = [];
	/** IAM actions required for the SearchDatabasesByLFTags API call. */
	static readonly SEARCH_DATABASES_BY_LF_TAGS: string[] = [];
	/** IAM actions required for the SearchTablesByLFTags API call. */
	static readonly SEARCH_TABLES_BY_LF_TAGS: string[] = [];
	/** IAM actions required for the StartQueryPlanning API call. */
	static readonly START_QUERY_PLANNING: string[] = [
		"lakeformation:StartQueryPlanning",
	];
	/** IAM actions required for the StartTransaction API call. */
	static readonly START_TRANSACTION: string[] = [];
	/** IAM actions required for the UpdateDataCellsFilter API call. */
	static readonly UPDATE_DATA_CELLS_FILTER: string[] = [
		"lakeformation:UpdateDataCellsFilter",
	];
	/** IAM actions required for the UpdateLFTag API call. */
	static readonly UPDATE_LF_TAG: string[] = [];
	/** IAM actions required for the UpdateLFTagExpression API call. */
	static readonly UPDATE_LF_TAG_EXPRESSION: string[] = [
		"lakeformation:UpdateLFTagExpression",
	];
	/** IAM actions required for the UpdateLakeFormationIdentityCenterConfiguration API call. */
	static readonly UPDATE_LAKE_FORMATION_IDENTITY_CENTER_CONFIGURATION: string[] =
		["lakeformation:UpdateLakeFormationIdentityCenterConfiguration"];
	/** IAM actions required for the UpdateResource API call. */
	static readonly UPDATE_RESOURCE: string[] = [];
	/** IAM actions required for the UpdateTableObjects API call. */
	static readonly UPDATE_TABLE_OBJECTS: string[] = [];
	/** IAM actions required for the UpdateTableStorageOptimizer API call. */
	static readonly UPDATE_TABLE_STORAGE_OPTIMIZER: string[] = [];
}

/**
 * Condition key constants and builders for lakeformation.
 */
export class LakeFormationConditions {
	/** Condition keys applicable to the GetDataAccess action. */
	static readonly GET_DATA_ACCESS_CONDITION_KEYS: string[] = [
		"lakeformation:EnabledOnlyForMetaDataAccess",
	];

	/** Condition key: lakeformation:EnabledOnlyForMetaDataAccess (Bool) */
	static readonly ENABLED_ONLY_FOR_META_DATA_ACCESS =
		"lakeformation:EnabledOnlyForMetaDataAccess";

	/**
	 * Generates a condition block for `lakeformation:EnabledOnlyForMetaDataAccess`.
	 */
	static enabledOnlyForMetaDataAccess(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "lakeformation:EnabledOnlyForMetaDataAccess": value } };
	}
}
