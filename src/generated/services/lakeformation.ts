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
	static readonly AddLFTagsToResource = "lakeformation:AddLFTagsToResource";
	/** [PermissionManagement] lakeformation:BatchGrantPermissions */
	static readonly BatchGrantPermissions = "lakeformation:BatchGrantPermissions";
	/** [PermissionManagement] lakeformation:BatchRevokePermissions */
	static readonly BatchRevokePermissions =
		"lakeformation:BatchRevokePermissions";
	/** [Write] lakeformation:CancelTransaction */
	static readonly CancelTransaction = "lakeformation:CancelTransaction";
	/** [Write] lakeformation:CommitTransaction */
	static readonly CommitTransaction = "lakeformation:CommitTransaction";
	/** [Write] lakeformation:CreateDataCellsFilter */
	static readonly CreateDataCellsFilter = "lakeformation:CreateDataCellsFilter";
	/** [Write] lakeformation:CreateLFTag */
	static readonly CreateLFTag = "lakeformation:CreateLFTag";
	/** [Write] lakeformation:CreateLFTagExpression */
	static readonly CreateLFTagExpression = "lakeformation:CreateLFTagExpression";
	/** [Write] lakeformation:CreateLakeFormationIdentityCenterConfiguration */
	static readonly CreateLakeFormationIdentityCenterConfiguration =
		"lakeformation:CreateLakeFormationIdentityCenterConfiguration";
	/** [Write] lakeformation:CreateLakeFormationOptIn */
	static readonly CreateLakeFormationOptIn =
		"lakeformation:CreateLakeFormationOptIn";
	/** [Write] lakeformation:DeleteDataCellsFilter */
	static readonly DeleteDataCellsFilter = "lakeformation:DeleteDataCellsFilter";
	/** [Write] lakeformation:DeleteLFTag */
	static readonly DeleteLFTag = "lakeformation:DeleteLFTag";
	/** [Write] lakeformation:DeleteLFTagExpression */
	static readonly DeleteLFTagExpression = "lakeformation:DeleteLFTagExpression";
	/** [Write] lakeformation:DeleteLakeFormationIdentityCenterConfiguration */
	static readonly DeleteLakeFormationIdentityCenterConfiguration =
		"lakeformation:DeleteLakeFormationIdentityCenterConfiguration";
	/** [Write] lakeformation:DeleteLakeFormationOptIn */
	static readonly DeleteLakeFormationOptIn =
		"lakeformation:DeleteLakeFormationOptIn";
	/** [Write] lakeformation:DeleteObjectsOnCancel */
	static readonly DeleteObjectsOnCancel = "lakeformation:DeleteObjectsOnCancel";
	/** [Write] lakeformation:DeregisterResource */
	static readonly DeregisterResource = "lakeformation:DeregisterResource";
	/** [Read] lakeformation:DescribeLakeFormationIdentityCenterConfiguration */
	static readonly DescribeLakeFormationIdentityCenterConfiguration =
		"lakeformation:DescribeLakeFormationIdentityCenterConfiguration";
	/** [Read] lakeformation:DescribeResource */
	static readonly DescribeResource = "lakeformation:DescribeResource";
	/** [Read] lakeformation:DescribeTransaction */
	static readonly DescribeTransaction = "lakeformation:DescribeTransaction";
	/** [Write] lakeformation:ExtendTransaction */
	static readonly ExtendTransaction = "lakeformation:ExtendTransaction";
	/** [Write] lakeformation:GetDataAccess */
	static readonly actionGetDataAccess = "lakeformation:GetDataAccess";
	/** [Read] lakeformation:GetDataCellsFilter */
	static readonly actionGetDataCellsFilter = "lakeformation:GetDataCellsFilter";
	/** [Read] lakeformation:GetDataLakePrincipal */
	static readonly actionGetDataLakePrincipal =
		"lakeformation:GetDataLakePrincipal";
	/** [Read] lakeformation:GetDataLakeSettings */
	static readonly actionGetDataLakeSettings =
		"lakeformation:GetDataLakeSettings";
	/** [Read] lakeformation:GetEffectivePermissionsForPath */
	static readonly actionGetEffectivePermissionsForPath =
		"lakeformation:GetEffectivePermissionsForPath";
	/** [Read] lakeformation:GetLFTag */
	static readonly actionGetLFTag = "lakeformation:GetLFTag";
	/** [Read] lakeformation:GetLFTagExpression */
	static readonly actionGetLFTagExpression = "lakeformation:GetLFTagExpression";
	/** [Read] lakeformation:GetQueryState */
	static readonly actionGetQueryState = "lakeformation:GetQueryState";
	/** [Read] lakeformation:GetQueryStatistics */
	static readonly actionGetQueryStatistics = "lakeformation:GetQueryStatistics";
	/** [Read] lakeformation:GetResourceLFTags */
	static readonly actionGetResourceLFTags = "lakeformation:GetResourceLFTags";
	/** [Read] lakeformation:GetTableObjects */
	static readonly actionGetTableObjects = "lakeformation:GetTableObjects";
	/** [Read] lakeformation:GetTemporaryGluePartitionCredentials */
	static readonly actionGetTemporaryGluePartitionCredentials =
		"lakeformation:GetTemporaryGluePartitionCredentials";
	/** [Read] lakeformation:GetTemporaryGlueTableCredentials */
	static readonly actionGetTemporaryGlueTableCredentials =
		"lakeformation:GetTemporaryGlueTableCredentials";
	/** [Read] lakeformation:GetWorkUnitResults */
	static readonly actionGetWorkUnitResults = "lakeformation:GetWorkUnitResults";
	/** [Read] lakeformation:GetWorkUnits */
	static readonly actionGetWorkUnits = "lakeformation:GetWorkUnits";
	/** [PermissionManagement] lakeformation:GrantPermissions */
	static readonly GrantPermissions = "lakeformation:GrantPermissions";
	/** [List] lakeformation:ListDataCellsFilter */
	static readonly ListDataCellsFilter = "lakeformation:ListDataCellsFilter";
	/** [Read] lakeformation:ListLFTagExpressions */
	static readonly ListLFTagExpressions = "lakeformation:ListLFTagExpressions";
	/** [Read] lakeformation:ListLFTags */
	static readonly ListLFTags = "lakeformation:ListLFTags";
	/** [List] lakeformation:ListLakeFormationOptIns */
	static readonly ListLakeFormationOptIns =
		"lakeformation:ListLakeFormationOptIns";
	/** [List] lakeformation:ListPermissions */
	static readonly ListPermissions = "lakeformation:ListPermissions";
	/** [List] lakeformation:ListResources */
	static readonly ListResources = "lakeformation:ListResources";
	/** [List] lakeformation:ListTableStorageOptimizers */
	static readonly ListTableStorageOptimizers =
		"lakeformation:ListTableStorageOptimizers";
	/** [List] lakeformation:ListTransactions */
	static readonly ListTransactions = "lakeformation:ListTransactions";
	/** [PermissionManagement] lakeformation:PutDataLakeSettings */
	static readonly PutDataLakeSettings = "lakeformation:PutDataLakeSettings";
	/** [Write] lakeformation:RegisterResource */
	static readonly RegisterResource = "lakeformation:RegisterResource";
	/** [Write] lakeformation:RegisterResourceWithPrivilegedAccess */
	static readonly RegisterResourceWithPrivilegedAccess =
		"lakeformation:RegisterResourceWithPrivilegedAccess";
	/** [Tagging] lakeformation:RemoveLFTagsFromResource */
	static readonly RemoveLFTagsFromResource =
		"lakeformation:RemoveLFTagsFromResource";
	/** [PermissionManagement] lakeformation:RevokePermissions */
	static readonly RevokePermissions = "lakeformation:RevokePermissions";
	/** [Read] lakeformation:SearchDatabasesByLFTags */
	static readonly SearchDatabasesByLFTags =
		"lakeformation:SearchDatabasesByLFTags";
	/** [Read] lakeformation:SearchTablesByLFTags */
	static readonly SearchTablesByLFTags = "lakeformation:SearchTablesByLFTags";
	/** [Write] lakeformation:StartQueryPlanning */
	static readonly StartQueryPlanning = "lakeformation:StartQueryPlanning";
	/** [Write] lakeformation:StartTransaction */
	static readonly StartTransaction = "lakeformation:StartTransaction";
	/** [Write] lakeformation:UpdateDataCellsFilter */
	static readonly UpdateDataCellsFilter = "lakeformation:UpdateDataCellsFilter";
	/** [Write] lakeformation:UpdateLFTag */
	static readonly UpdateLFTag = "lakeformation:UpdateLFTag";
	/** [Write] lakeformation:UpdateLFTagExpression */
	static readonly UpdateLFTagExpression = "lakeformation:UpdateLFTagExpression";
	/** [Write] lakeformation:UpdateLakeFormationIdentityCenterConfiguration */
	static readonly UpdateLakeFormationIdentityCenterConfiguration =
		"lakeformation:UpdateLakeFormationIdentityCenterConfiguration";
	/** [Write] lakeformation:UpdateResource */
	static readonly UpdateResource = "lakeformation:UpdateResource";
	/** [Write] lakeformation:UpdateTableObjects */
	static readonly UpdateTableObjects = "lakeformation:UpdateTableObjects";
	/** [Write] lakeformation:UpdateTableStorageOptimizer */
	static readonly UpdateTableStorageOptimizer =
		"lakeformation:UpdateTableStorageOptimizer";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		LakeFormationActions.DescribeLakeFormationIdentityCenterConfiguration,
		LakeFormationActions.DescribeResource,
		LakeFormationActions.DescribeTransaction,
		LakeFormationActions.actionGetDataCellsFilter,
		LakeFormationActions.actionGetDataLakePrincipal,
		LakeFormationActions.actionGetDataLakeSettings,
		LakeFormationActions.actionGetEffectivePermissionsForPath,
		LakeFormationActions.actionGetLFTag,
		LakeFormationActions.actionGetLFTagExpression,
		LakeFormationActions.actionGetQueryState,
		LakeFormationActions.actionGetQueryStatistics,
		LakeFormationActions.actionGetResourceLFTags,
		LakeFormationActions.actionGetTableObjects,
		LakeFormationActions.actionGetTemporaryGluePartitionCredentials,
		LakeFormationActions.actionGetTemporaryGlueTableCredentials,
		LakeFormationActions.actionGetWorkUnitResults,
		LakeFormationActions.actionGetWorkUnits,
		LakeFormationActions.ListLFTagExpressions,
		LakeFormationActions.ListLFTags,
		LakeFormationActions.SearchDatabasesByLFTags,
		LakeFormationActions.SearchTablesByLFTags,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		LakeFormationActions.CancelTransaction,
		LakeFormationActions.CommitTransaction,
		LakeFormationActions.CreateDataCellsFilter,
		LakeFormationActions.CreateLFTag,
		LakeFormationActions.CreateLFTagExpression,
		LakeFormationActions.CreateLakeFormationIdentityCenterConfiguration,
		LakeFormationActions.CreateLakeFormationOptIn,
		LakeFormationActions.DeleteDataCellsFilter,
		LakeFormationActions.DeleteLFTag,
		LakeFormationActions.DeleteLFTagExpression,
		LakeFormationActions.DeleteLakeFormationIdentityCenterConfiguration,
		LakeFormationActions.DeleteLakeFormationOptIn,
		LakeFormationActions.DeleteObjectsOnCancel,
		LakeFormationActions.DeregisterResource,
		LakeFormationActions.ExtendTransaction,
		LakeFormationActions.actionGetDataAccess,
		LakeFormationActions.RegisterResource,
		LakeFormationActions.RegisterResourceWithPrivilegedAccess,
		LakeFormationActions.StartQueryPlanning,
		LakeFormationActions.StartTransaction,
		LakeFormationActions.UpdateDataCellsFilter,
		LakeFormationActions.UpdateLFTag,
		LakeFormationActions.UpdateLFTagExpression,
		LakeFormationActions.UpdateLakeFormationIdentityCenterConfiguration,
		LakeFormationActions.UpdateResource,
		LakeFormationActions.UpdateTableObjects,
		LakeFormationActions.UpdateTableStorageOptimizer,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		LakeFormationActions.ListDataCellsFilter,
		LakeFormationActions.ListLakeFormationOptIns,
		LakeFormationActions.ListPermissions,
		LakeFormationActions.ListResources,
		LakeFormationActions.ListTableStorageOptimizers,
		LakeFormationActions.ListTransactions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		LakeFormationActions.BatchGrantPermissions,
		LakeFormationActions.BatchRevokePermissions,
		LakeFormationActions.GrantPermissions,
		LakeFormationActions.PutDataLakeSettings,
		LakeFormationActions.RevokePermissions,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		LakeFormationActions.AddLFTagsToResource,
		LakeFormationActions.RemoveLFTagsFromResource,
	];
}

/**
 * API operation to required IAM actions mapping for lakeformation.
 */
export class LakeFormationOperations {
	/** IAM actions required for the AddLFTagsToResource API call. */
	static readonly AddLFTagsToResource: string[] = [];
	/** IAM actions required for the AssumeDecoratedRoleWithSAML API call. */
	static readonly AssumeDecoratedRoleWithSAML: string[] = [];
	/** IAM actions required for the BatchGrantPermissions API call. */
	static readonly BatchGrantPermissions: string[] = [
		"lakeformation:BatchGrantPermissions",
	];
	/** IAM actions required for the BatchRevokePermissions API call. */
	static readonly BatchRevokePermissions: string[] = [
		"lakeformation:BatchRevokePermissions",
	];
	/** IAM actions required for the CancelTransaction API call. */
	static readonly CancelTransaction: string[] = [];
	/** IAM actions required for the CommitTransaction API call. */
	static readonly CommitTransaction: string[] = [];
	/** IAM actions required for the CreateDataCellsFilter API call. */
	static readonly CreateDataCellsFilter: string[] = [
		"lakeformation:CreateDataCellsFilter",
	];
	/** IAM actions required for the CreateLFTag API call. */
	static readonly CreateLFTag: string[] = [];
	/** IAM actions required for the CreateLFTagExpression API call. */
	static readonly CreateLFTagExpression: string[] = [
		"lakeformation:CreateLFTagExpression",
	];
	/** IAM actions required for the CreateLakeFormationIdentityCenterConfiguration API call. */
	static readonly CreateLakeFormationIdentityCenterConfiguration: string[] = [
		"lakeformation:CreateLakeFormationIdentityCenterConfiguration",
	];
	/** IAM actions required for the CreateLakeFormationOptIn API call. */
	static readonly CreateLakeFormationOptIn: string[] = [
		"lakeformation:CreateLakeFormationOptIn",
	];
	/** IAM actions required for the DeleteDataCellsFilter API call. */
	static readonly DeleteDataCellsFilter: string[] = [
		"lakeformation:DeleteDataCellsFilter",
	];
	/** IAM actions required for the DeleteLFTag API call. */
	static readonly DeleteLFTag: string[] = [];
	/** IAM actions required for the DeleteLFTagExpression API call. */
	static readonly DeleteLFTagExpression: string[] = [
		"lakeformation:DeleteLFTagExpression",
	];
	/** IAM actions required for the DeleteLakeFormationIdentityCenterConfiguration API call. */
	static readonly DeleteLakeFormationIdentityCenterConfiguration: string[] = [
		"lakeformation:DeleteLakeFormationIdentityCenterConfiguration",
	];
	/** IAM actions required for the DeleteLakeFormationOptIn API call. */
	static readonly DeleteLakeFormationOptIn: string[] = [
		"lakeformation:DeleteLakeFormationOptIn",
	];
	/** IAM actions required for the DeleteObjectsOnCancel API call. */
	static readonly DeleteObjectsOnCancel: string[] = [];
	/** IAM actions required for the DeregisterResource API call. */
	static readonly DeregisterResource: string[] = [];
	/** IAM actions required for the DescribeLakeFormationIdentityCenterConfiguration API call. */
	static readonly DescribeLakeFormationIdentityCenterConfiguration: string[] = [
		"lakeformation:DescribeLakeFormationIdentityCenterConfiguration",
	];
	/** IAM actions required for the DescribeResource API call. */
	static readonly DescribeResource: string[] = [];
	/** IAM actions required for the DescribeTransaction API call. */
	static readonly DescribeTransaction: string[] = [];
	/** IAM actions required for the ExtendTransaction API call. */
	static readonly ExtendTransaction: string[] = [];
	/** IAM actions required for the GetDataCellsFilter API call. */
	static readonly opGetDataCellsFilter: string[] = [
		"lakeformation:GetDataCellsFilter",
	];
	/** IAM actions required for the GetDataLakePrincipal API call. */
	static readonly opGetDataLakePrincipal: string[] = [
		"lakeformation:GetDataLakePrincipal",
	];
	/** IAM actions required for the GetDataLakeSettings API call. */
	static readonly opGetDataLakeSettings: string[] = [
		"lakeformation:GetDataLakeSettings",
	];
	/** IAM actions required for the GetEffectivePermissionsForPath API call. */
	static readonly opGetEffectivePermissionsForPath: string[] = [
		"lakeformation:GetEffectivePermissionsForPath",
	];
	/** IAM actions required for the GetLFTag API call. */
	static readonly opGetLFTag: string[] = [];
	/** IAM actions required for the GetLFTagExpression API call. */
	static readonly opGetLFTagExpression: string[] = [
		"lakeformation:GetLFTagExpression",
	];
	/** IAM actions required for the GetQueryState API call. */
	static readonly opGetQueryState: string[] = ["lakeformation:GetQueryState"];
	/** IAM actions required for the GetQueryStatistics API call. */
	static readonly opGetQueryStatistics: string[] = [
		"lakeformation:GetQueryStatistics",
	];
	/** IAM actions required for the GetResourceLFTags API call. */
	static readonly opGetResourceLFTags: string[] = [];
	/** IAM actions required for the GetTableObjects API call. */
	static readonly opGetTableObjects: string[] = [];
	/** IAM actions required for the GetTemporaryDataLocationCredentials API call. */
	static readonly opGetTemporaryDataLocationCredentials: string[] = [
		"lakeformation:GetDataAccess",
	];
	/** IAM actions required for the GetTemporaryGluePartitionCredentials API call. */
	static readonly opGetTemporaryGluePartitionCredentials: string[] = [];
	/** IAM actions required for the GetTemporaryGlueTableCredentials API call. */
	static readonly opGetTemporaryGlueTableCredentials: string[] = [];
	/** IAM actions required for the GetWorkUnitResults API call. */
	static readonly opGetWorkUnitResults: string[] = [
		"lakeformation:GetWorkUnitResults",
	];
	/** IAM actions required for the GetWorkUnits API call. */
	static readonly opGetWorkUnits: string[] = ["lakeformation:GetWorkUnits"];
	/** IAM actions required for the GrantPermissions API call. */
	static readonly GrantPermissions: string[] = [];
	/** IAM actions required for the ListDataCellsFilter API call. */
	static readonly ListDataCellsFilter: string[] = [
		"lakeformation:ListDataCellsFilter",
	];
	/** IAM actions required for the ListLFTagExpressions API call. */
	static readonly ListLFTagExpressions: string[] = [
		"lakeformation:ListLFTagExpressions",
	];
	/** IAM actions required for the ListLFTags API call. */
	static readonly ListLFTags: string[] = [];
	/** IAM actions required for the ListLakeFormationOptIns API call. */
	static readonly ListLakeFormationOptIns: string[] = [
		"lakeformation:ListLakeFormationOptIns",
	];
	/** IAM actions required for the ListPermissions API call. */
	static readonly ListPermissions: string[] = ["lakeformation:ListPermissions"];
	/** IAM actions required for the ListResources API call. */
	static readonly ListResources: string[] = [];
	/** IAM actions required for the ListTableStorageOptimizers API call. */
	static readonly ListTableStorageOptimizers: string[] = [];
	/** IAM actions required for the ListTransactions API call. */
	static readonly ListTransactions: string[] = [];
	/** IAM actions required for the PutDataLakeSettings API call. */
	static readonly PutDataLakeSettings: string[] = [
		"lakeformation:PutDataLakeSettings",
	];
	/** IAM actions required for the RegisterResource API call. */
	static readonly RegisterResource: string[] = [];
	/** IAM actions required for the RemoveLFTagsFromResource API call. */
	static readonly RemoveLFTagsFromResource: string[] = [];
	/** IAM actions required for the RevokePermissions API call. */
	static readonly RevokePermissions: string[] = [];
	/** IAM actions required for the SearchDatabasesByLFTags API call. */
	static readonly SearchDatabasesByLFTags: string[] = [];
	/** IAM actions required for the SearchTablesByLFTags API call. */
	static readonly SearchTablesByLFTags: string[] = [];
	/** IAM actions required for the StartQueryPlanning API call. */
	static readonly StartQueryPlanning: string[] = [
		"lakeformation:StartQueryPlanning",
	];
	/** IAM actions required for the StartTransaction API call. */
	static readonly StartTransaction: string[] = [];
	/** IAM actions required for the UpdateDataCellsFilter API call. */
	static readonly UpdateDataCellsFilter: string[] = [
		"lakeformation:UpdateDataCellsFilter",
	];
	/** IAM actions required for the UpdateLFTag API call. */
	static readonly UpdateLFTag: string[] = [];
	/** IAM actions required for the UpdateLFTagExpression API call. */
	static readonly UpdateLFTagExpression: string[] = [
		"lakeformation:UpdateLFTagExpression",
	];
	/** IAM actions required for the UpdateLakeFormationIdentityCenterConfiguration API call. */
	static readonly UpdateLakeFormationIdentityCenterConfiguration: string[] = [
		"lakeformation:UpdateLakeFormationIdentityCenterConfiguration",
	];
	/** IAM actions required for the UpdateResource API call. */
	static readonly UpdateResource: string[] = [];
	/** IAM actions required for the UpdateTableObjects API call. */
	static readonly UpdateTableObjects: string[] = [];
	/** IAM actions required for the UpdateTableStorageOptimizer API call. */
	static readonly UpdateTableStorageOptimizer: string[] = [];
}

/**
 * Condition key constants and builders for lakeformation.
 */
export class LakeFormationConditions {
	/** Condition keys applicable to the GetDataAccess action. */
	static readonly actionGetDataAccessConditionKeys: string[] = [
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
