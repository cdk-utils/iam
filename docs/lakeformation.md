# `lakeformation` Submodule <a name="`lakeformation` Submodule" id="@cdk_utils/iam.lakeformation"></a>



## Classes <a name="Classes" id="Classes"></a>

### LakeFormationActions <a name="LakeFormationActions" id="@cdk_utils/iam.lakeformation.LakeFormationActions"></a>

IAM action constants for the lakeformation service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lakeformation.LakeFormationActions.Initializer"></a>

```typescript
import { lakeformation } from '@cdk_utils/iam'

new lakeformation.LakeFormationActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetDataAccess">actionGetDataAccess</a></code> | <code>string</code> | [Write] lakeformation:GetDataAccess. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetDataCellsFilter">actionGetDataCellsFilter</a></code> | <code>string</code> | [Read] lakeformation:GetDataCellsFilter. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetDataLakePrincipal">actionGetDataLakePrincipal</a></code> | <code>string</code> | [Read] lakeformation:GetDataLakePrincipal. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetDataLakeSettings">actionGetDataLakeSettings</a></code> | <code>string</code> | [Read] lakeformation:GetDataLakeSettings. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetEffectivePermissionsForPath">actionGetEffectivePermissionsForPath</a></code> | <code>string</code> | [Read] lakeformation:GetEffectivePermissionsForPath. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetLFTag">actionGetLFTag</a></code> | <code>string</code> | [Read] lakeformation:GetLFTag. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetLFTagExpression">actionGetLFTagExpression</a></code> | <code>string</code> | [Read] lakeformation:GetLFTagExpression. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetQueryState">actionGetQueryState</a></code> | <code>string</code> | [Read] lakeformation:GetQueryState. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetQueryStatistics">actionGetQueryStatistics</a></code> | <code>string</code> | [Read] lakeformation:GetQueryStatistics. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetResourceLFTags">actionGetResourceLFTags</a></code> | <code>string</code> | [Read] lakeformation:GetResourceLFTags. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetTableObjects">actionGetTableObjects</a></code> | <code>string</code> | [Read] lakeformation:GetTableObjects. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetTemporaryGluePartitionCredentials">actionGetTemporaryGluePartitionCredentials</a></code> | <code>string</code> | [Read] lakeformation:GetTemporaryGluePartitionCredentials. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetTemporaryGlueTableCredentials">actionGetTemporaryGlueTableCredentials</a></code> | <code>string</code> | [Read] lakeformation:GetTemporaryGlueTableCredentials. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetWorkUnitResults">actionGetWorkUnitResults</a></code> | <code>string</code> | [Read] lakeformation:GetWorkUnitResults. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetWorkUnits">actionGetWorkUnits</a></code> | <code>string</code> | [Read] lakeformation:GetWorkUnits. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.AddLFTagsToResource">AddLFTagsToResource</a></code> | <code>string</code> | [Tagging] lakeformation:AddLFTagsToResource. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.BatchGrantPermissions">BatchGrantPermissions</a></code> | <code>string</code> | [PermissionManagement] lakeformation:BatchGrantPermissions. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.BatchRevokePermissions">BatchRevokePermissions</a></code> | <code>string</code> | [PermissionManagement] lakeformation:BatchRevokePermissions. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.CancelTransaction">CancelTransaction</a></code> | <code>string</code> | [Write] lakeformation:CancelTransaction. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.CommitTransaction">CommitTransaction</a></code> | <code>string</code> | [Write] lakeformation:CommitTransaction. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.CreateDataCellsFilter">CreateDataCellsFilter</a></code> | <code>string</code> | [Write] lakeformation:CreateDataCellsFilter. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.CreateLakeFormationIdentityCenterConfiguration">CreateLakeFormationIdentityCenterConfiguration</a></code> | <code>string</code> | [Write] lakeformation:CreateLakeFormationIdentityCenterConfiguration. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.CreateLakeFormationOptIn">CreateLakeFormationOptIn</a></code> | <code>string</code> | [Write] lakeformation:CreateLakeFormationOptIn. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.CreateLFTag">CreateLFTag</a></code> | <code>string</code> | [Write] lakeformation:CreateLFTag. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.CreateLFTagExpression">CreateLFTagExpression</a></code> | <code>string</code> | [Write] lakeformation:CreateLFTagExpression. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeleteDataCellsFilter">DeleteDataCellsFilter</a></code> | <code>string</code> | [Write] lakeformation:DeleteDataCellsFilter. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeleteLakeFormationIdentityCenterConfiguration">DeleteLakeFormationIdentityCenterConfiguration</a></code> | <code>string</code> | [Write] lakeformation:DeleteLakeFormationIdentityCenterConfiguration. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeleteLakeFormationOptIn">DeleteLakeFormationOptIn</a></code> | <code>string</code> | [Write] lakeformation:DeleteLakeFormationOptIn. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeleteLFTag">DeleteLFTag</a></code> | <code>string</code> | [Write] lakeformation:DeleteLFTag. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeleteLFTagExpression">DeleteLFTagExpression</a></code> | <code>string</code> | [Write] lakeformation:DeleteLFTagExpression. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeleteObjectsOnCancel">DeleteObjectsOnCancel</a></code> | <code>string</code> | [Write] lakeformation:DeleteObjectsOnCancel. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeregisterResource">DeregisterResource</a></code> | <code>string</code> | [Write] lakeformation:DeregisterResource. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.DescribeLakeFormationIdentityCenterConfiguration">DescribeLakeFormationIdentityCenterConfiguration</a></code> | <code>string</code> | [Read] lakeformation:DescribeLakeFormationIdentityCenterConfiguration. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.DescribeResource">DescribeResource</a></code> | <code>string</code> | [Read] lakeformation:DescribeResource. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.DescribeTransaction">DescribeTransaction</a></code> | <code>string</code> | [Read] lakeformation:DescribeTransaction. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.ExtendTransaction">ExtendTransaction</a></code> | <code>string</code> | [Write] lakeformation:ExtendTransaction. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.GrantPermissions">GrantPermissions</a></code> | <code>string</code> | [PermissionManagement] lakeformation:GrantPermissions. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListDataCellsFilter">ListDataCellsFilter</a></code> | <code>string</code> | [List] lakeformation:ListDataCellsFilter. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListLakeFormationOptIns">ListLakeFormationOptIns</a></code> | <code>string</code> | [List] lakeformation:ListLakeFormationOptIns. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListLFTagExpressions">ListLFTagExpressions</a></code> | <code>string</code> | [Read] lakeformation:ListLFTagExpressions. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListLFTags">ListLFTags</a></code> | <code>string</code> | [Read] lakeformation:ListLFTags. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListPermissions">ListPermissions</a></code> | <code>string</code> | [List] lakeformation:ListPermissions. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListResources">ListResources</a></code> | <code>string</code> | [List] lakeformation:ListResources. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListTableStorageOptimizers">ListTableStorageOptimizers</a></code> | <code>string</code> | [List] lakeformation:ListTableStorageOptimizers. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListTransactions">ListTransactions</a></code> | <code>string</code> | [List] lakeformation:ListTransactions. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.PutDataLakeSettings">PutDataLakeSettings</a></code> | <code>string</code> | [PermissionManagement] lakeformation:PutDataLakeSettings. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.RegisterResource">RegisterResource</a></code> | <code>string</code> | [Write] lakeformation:RegisterResource. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.RegisterResourceWithPrivilegedAccess">RegisterResourceWithPrivilegedAccess</a></code> | <code>string</code> | [Write] lakeformation:RegisterResourceWithPrivilegedAccess. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.RemoveLFTagsFromResource">RemoveLFTagsFromResource</a></code> | <code>string</code> | [Tagging] lakeformation:RemoveLFTagsFromResource. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.RevokePermissions">RevokePermissions</a></code> | <code>string</code> | [PermissionManagement] lakeformation:RevokePermissions. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.SearchDatabasesByLFTags">SearchDatabasesByLFTags</a></code> | <code>string</code> | [Read] lakeformation:SearchDatabasesByLFTags. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.SearchTablesByLFTags">SearchTablesByLFTags</a></code> | <code>string</code> | [Read] lakeformation:SearchTablesByLFTags. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.StartQueryPlanning">StartQueryPlanning</a></code> | <code>string</code> | [Write] lakeformation:StartQueryPlanning. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.StartTransaction">StartTransaction</a></code> | <code>string</code> | [Write] lakeformation:StartTransaction. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateDataCellsFilter">UpdateDataCellsFilter</a></code> | <code>string</code> | [Write] lakeformation:UpdateDataCellsFilter. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateLakeFormationIdentityCenterConfiguration">UpdateLakeFormationIdentityCenterConfiguration</a></code> | <code>string</code> | [Write] lakeformation:UpdateLakeFormationIdentityCenterConfiguration. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateLFTag">UpdateLFTag</a></code> | <code>string</code> | [Write] lakeformation:UpdateLFTag. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateLFTagExpression">UpdateLFTagExpression</a></code> | <code>string</code> | [Write] lakeformation:UpdateLFTagExpression. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateResource">UpdateResource</a></code> | <code>string</code> | [Write] lakeformation:UpdateResource. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateTableObjects">UpdateTableObjects</a></code> | <code>string</code> | [Write] lakeformation:UpdateTableObjects. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateTableStorageOptimizer">UpdateTableStorageOptimizer</a></code> | <code>string</code> | [Write] lakeformation:UpdateTableStorageOptimizer. |

---

##### `actionGetDataAccess`<sup>Required</sup> <a name="actionGetDataAccess" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetDataAccess"></a>

```typescript
public readonly actionGetDataAccess: string;
```

- *Type:* string

[Write] lakeformation:GetDataAccess.

---

##### `actionGetDataCellsFilter`<sup>Required</sup> <a name="actionGetDataCellsFilter" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetDataCellsFilter"></a>

```typescript
public readonly actionGetDataCellsFilter: string;
```

- *Type:* string

[Read] lakeformation:GetDataCellsFilter.

---

##### `actionGetDataLakePrincipal`<sup>Required</sup> <a name="actionGetDataLakePrincipal" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetDataLakePrincipal"></a>

```typescript
public readonly actionGetDataLakePrincipal: string;
```

- *Type:* string

[Read] lakeformation:GetDataLakePrincipal.

---

##### `actionGetDataLakeSettings`<sup>Required</sup> <a name="actionGetDataLakeSettings" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetDataLakeSettings"></a>

```typescript
public readonly actionGetDataLakeSettings: string;
```

- *Type:* string

[Read] lakeformation:GetDataLakeSettings.

---

##### `actionGetEffectivePermissionsForPath`<sup>Required</sup> <a name="actionGetEffectivePermissionsForPath" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetEffectivePermissionsForPath"></a>

```typescript
public readonly actionGetEffectivePermissionsForPath: string;
```

- *Type:* string

[Read] lakeformation:GetEffectivePermissionsForPath.

---

##### `actionGetLFTag`<sup>Required</sup> <a name="actionGetLFTag" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetLFTag"></a>

```typescript
public readonly actionGetLFTag: string;
```

- *Type:* string

[Read] lakeformation:GetLFTag.

---

##### `actionGetLFTagExpression`<sup>Required</sup> <a name="actionGetLFTagExpression" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetLFTagExpression"></a>

```typescript
public readonly actionGetLFTagExpression: string;
```

- *Type:* string

[Read] lakeformation:GetLFTagExpression.

---

##### `actionGetQueryState`<sup>Required</sup> <a name="actionGetQueryState" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetQueryState"></a>

```typescript
public readonly actionGetQueryState: string;
```

- *Type:* string

[Read] lakeformation:GetQueryState.

---

##### `actionGetQueryStatistics`<sup>Required</sup> <a name="actionGetQueryStatistics" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetQueryStatistics"></a>

```typescript
public readonly actionGetQueryStatistics: string;
```

- *Type:* string

[Read] lakeformation:GetQueryStatistics.

---

##### `actionGetResourceLFTags`<sup>Required</sup> <a name="actionGetResourceLFTags" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetResourceLFTags"></a>

```typescript
public readonly actionGetResourceLFTags: string;
```

- *Type:* string

[Read] lakeformation:GetResourceLFTags.

---

##### `actionGetTableObjects`<sup>Required</sup> <a name="actionGetTableObjects" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetTableObjects"></a>

```typescript
public readonly actionGetTableObjects: string;
```

- *Type:* string

[Read] lakeformation:GetTableObjects.

---

##### `actionGetTemporaryGluePartitionCredentials`<sup>Required</sup> <a name="actionGetTemporaryGluePartitionCredentials" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetTemporaryGluePartitionCredentials"></a>

```typescript
public readonly actionGetTemporaryGluePartitionCredentials: string;
```

- *Type:* string

[Read] lakeformation:GetTemporaryGluePartitionCredentials.

---

##### `actionGetTemporaryGlueTableCredentials`<sup>Required</sup> <a name="actionGetTemporaryGlueTableCredentials" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetTemporaryGlueTableCredentials"></a>

```typescript
public readonly actionGetTemporaryGlueTableCredentials: string;
```

- *Type:* string

[Read] lakeformation:GetTemporaryGlueTableCredentials.

---

##### `actionGetWorkUnitResults`<sup>Required</sup> <a name="actionGetWorkUnitResults" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetWorkUnitResults"></a>

```typescript
public readonly actionGetWorkUnitResults: string;
```

- *Type:* string

[Read] lakeformation:GetWorkUnitResults.

---

##### `actionGetWorkUnits`<sup>Required</sup> <a name="actionGetWorkUnits" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.actionGetWorkUnits"></a>

```typescript
public readonly actionGetWorkUnits: string;
```

- *Type:* string

[Read] lakeformation:GetWorkUnits.

---

##### `AddLFTagsToResource`<sup>Required</sup> <a name="AddLFTagsToResource" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.AddLFTagsToResource"></a>

```typescript
public readonly AddLFTagsToResource: string;
```

- *Type:* string

[Tagging] lakeformation:AddLFTagsToResource.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGrantPermissions`<sup>Required</sup> <a name="BatchGrantPermissions" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.BatchGrantPermissions"></a>

```typescript
public readonly BatchGrantPermissions: string;
```

- *Type:* string

[PermissionManagement] lakeformation:BatchGrantPermissions.

---

##### `BatchRevokePermissions`<sup>Required</sup> <a name="BatchRevokePermissions" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.BatchRevokePermissions"></a>

```typescript
public readonly BatchRevokePermissions: string;
```

- *Type:* string

[PermissionManagement] lakeformation:BatchRevokePermissions.

---

##### `CancelTransaction`<sup>Required</sup> <a name="CancelTransaction" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.CancelTransaction"></a>

```typescript
public readonly CancelTransaction: string;
```

- *Type:* string

[Write] lakeformation:CancelTransaction.

---

##### `CommitTransaction`<sup>Required</sup> <a name="CommitTransaction" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.CommitTransaction"></a>

```typescript
public readonly CommitTransaction: string;
```

- *Type:* string

[Write] lakeformation:CommitTransaction.

---

##### `CreateDataCellsFilter`<sup>Required</sup> <a name="CreateDataCellsFilter" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.CreateDataCellsFilter"></a>

```typescript
public readonly CreateDataCellsFilter: string;
```

- *Type:* string

[Write] lakeformation:CreateDataCellsFilter.

---

##### `CreateLakeFormationIdentityCenterConfiguration`<sup>Required</sup> <a name="CreateLakeFormationIdentityCenterConfiguration" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.CreateLakeFormationIdentityCenterConfiguration"></a>

```typescript
public readonly CreateLakeFormationIdentityCenterConfiguration: string;
```

- *Type:* string

[Write] lakeformation:CreateLakeFormationIdentityCenterConfiguration.

---

##### `CreateLakeFormationOptIn`<sup>Required</sup> <a name="CreateLakeFormationOptIn" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.CreateLakeFormationOptIn"></a>

```typescript
public readonly CreateLakeFormationOptIn: string;
```

- *Type:* string

[Write] lakeformation:CreateLakeFormationOptIn.

---

##### `CreateLFTag`<sup>Required</sup> <a name="CreateLFTag" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.CreateLFTag"></a>

```typescript
public readonly CreateLFTag: string;
```

- *Type:* string

[Write] lakeformation:CreateLFTag.

---

##### `CreateLFTagExpression`<sup>Required</sup> <a name="CreateLFTagExpression" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.CreateLFTagExpression"></a>

```typescript
public readonly CreateLFTagExpression: string;
```

- *Type:* string

[Write] lakeformation:CreateLFTagExpression.

---

##### `DeleteDataCellsFilter`<sup>Required</sup> <a name="DeleteDataCellsFilter" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeleteDataCellsFilter"></a>

```typescript
public readonly DeleteDataCellsFilter: string;
```

- *Type:* string

[Write] lakeformation:DeleteDataCellsFilter.

---

##### `DeleteLakeFormationIdentityCenterConfiguration`<sup>Required</sup> <a name="DeleteLakeFormationIdentityCenterConfiguration" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeleteLakeFormationIdentityCenterConfiguration"></a>

```typescript
public readonly DeleteLakeFormationIdentityCenterConfiguration: string;
```

- *Type:* string

[Write] lakeformation:DeleteLakeFormationIdentityCenterConfiguration.

---

##### `DeleteLakeFormationOptIn`<sup>Required</sup> <a name="DeleteLakeFormationOptIn" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeleteLakeFormationOptIn"></a>

```typescript
public readonly DeleteLakeFormationOptIn: string;
```

- *Type:* string

[Write] lakeformation:DeleteLakeFormationOptIn.

---

##### `DeleteLFTag`<sup>Required</sup> <a name="DeleteLFTag" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeleteLFTag"></a>

```typescript
public readonly DeleteLFTag: string;
```

- *Type:* string

[Write] lakeformation:DeleteLFTag.

---

##### `DeleteLFTagExpression`<sup>Required</sup> <a name="DeleteLFTagExpression" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeleteLFTagExpression"></a>

```typescript
public readonly DeleteLFTagExpression: string;
```

- *Type:* string

[Write] lakeformation:DeleteLFTagExpression.

---

##### `DeleteObjectsOnCancel`<sup>Required</sup> <a name="DeleteObjectsOnCancel" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeleteObjectsOnCancel"></a>

```typescript
public readonly DeleteObjectsOnCancel: string;
```

- *Type:* string

[Write] lakeformation:DeleteObjectsOnCancel.

---

##### `DeregisterResource`<sup>Required</sup> <a name="DeregisterResource" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.DeregisterResource"></a>

```typescript
public readonly DeregisterResource: string;
```

- *Type:* string

[Write] lakeformation:DeregisterResource.

---

##### `DescribeLakeFormationIdentityCenterConfiguration`<sup>Required</sup> <a name="DescribeLakeFormationIdentityCenterConfiguration" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.DescribeLakeFormationIdentityCenterConfiguration"></a>

```typescript
public readonly DescribeLakeFormationIdentityCenterConfiguration: string;
```

- *Type:* string

[Read] lakeformation:DescribeLakeFormationIdentityCenterConfiguration.

---

##### `DescribeResource`<sup>Required</sup> <a name="DescribeResource" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.DescribeResource"></a>

```typescript
public readonly DescribeResource: string;
```

- *Type:* string

[Read] lakeformation:DescribeResource.

---

##### `DescribeTransaction`<sup>Required</sup> <a name="DescribeTransaction" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.DescribeTransaction"></a>

```typescript
public readonly DescribeTransaction: string;
```

- *Type:* string

[Read] lakeformation:DescribeTransaction.

---

##### `ExtendTransaction`<sup>Required</sup> <a name="ExtendTransaction" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.ExtendTransaction"></a>

```typescript
public readonly ExtendTransaction: string;
```

- *Type:* string

[Write] lakeformation:ExtendTransaction.

---

##### `GrantPermissions`<sup>Required</sup> <a name="GrantPermissions" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.GrantPermissions"></a>

```typescript
public readonly GrantPermissions: string;
```

- *Type:* string

[PermissionManagement] lakeformation:GrantPermissions.

---

##### `ListDataCellsFilter`<sup>Required</sup> <a name="ListDataCellsFilter" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListDataCellsFilter"></a>

```typescript
public readonly ListDataCellsFilter: string;
```

- *Type:* string

[List] lakeformation:ListDataCellsFilter.

---

##### `ListLakeFormationOptIns`<sup>Required</sup> <a name="ListLakeFormationOptIns" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListLakeFormationOptIns"></a>

```typescript
public readonly ListLakeFormationOptIns: string;
```

- *Type:* string

[List] lakeformation:ListLakeFormationOptIns.

---

##### `ListLFTagExpressions`<sup>Required</sup> <a name="ListLFTagExpressions" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListLFTagExpressions"></a>

```typescript
public readonly ListLFTagExpressions: string;
```

- *Type:* string

[Read] lakeformation:ListLFTagExpressions.

---

##### `ListLFTags`<sup>Required</sup> <a name="ListLFTags" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListLFTags"></a>

```typescript
public readonly ListLFTags: string;
```

- *Type:* string

[Read] lakeformation:ListLFTags.

---

##### `ListPermissions`<sup>Required</sup> <a name="ListPermissions" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListPermissions"></a>

```typescript
public readonly ListPermissions: string;
```

- *Type:* string

[List] lakeformation:ListPermissions.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListResources"></a>

```typescript
public readonly ListResources: string;
```

- *Type:* string

[List] lakeformation:ListResources.

---

##### `ListTableStorageOptimizers`<sup>Required</sup> <a name="ListTableStorageOptimizers" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListTableStorageOptimizers"></a>

```typescript
public readonly ListTableStorageOptimizers: string;
```

- *Type:* string

[List] lakeformation:ListTableStorageOptimizers.

---

##### `ListTransactions`<sup>Required</sup> <a name="ListTransactions" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.ListTransactions"></a>

```typescript
public readonly ListTransactions: string;
```

- *Type:* string

[List] lakeformation:ListTransactions.

---

##### `PutDataLakeSettings`<sup>Required</sup> <a name="PutDataLakeSettings" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.PutDataLakeSettings"></a>

```typescript
public readonly PutDataLakeSettings: string;
```

- *Type:* string

[PermissionManagement] lakeformation:PutDataLakeSettings.

---

##### `RegisterResource`<sup>Required</sup> <a name="RegisterResource" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.RegisterResource"></a>

```typescript
public readonly RegisterResource: string;
```

- *Type:* string

[Write] lakeformation:RegisterResource.

---

##### `RegisterResourceWithPrivilegedAccess`<sup>Required</sup> <a name="RegisterResourceWithPrivilegedAccess" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.RegisterResourceWithPrivilegedAccess"></a>

```typescript
public readonly RegisterResourceWithPrivilegedAccess: string;
```

- *Type:* string

[Write] lakeformation:RegisterResourceWithPrivilegedAccess.

---

##### `RemoveLFTagsFromResource`<sup>Required</sup> <a name="RemoveLFTagsFromResource" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.RemoveLFTagsFromResource"></a>

```typescript
public readonly RemoveLFTagsFromResource: string;
```

- *Type:* string

[Tagging] lakeformation:RemoveLFTagsFromResource.

---

##### `RevokePermissions`<sup>Required</sup> <a name="RevokePermissions" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.RevokePermissions"></a>

```typescript
public readonly RevokePermissions: string;
```

- *Type:* string

[PermissionManagement] lakeformation:RevokePermissions.

---

##### `SearchDatabasesByLFTags`<sup>Required</sup> <a name="SearchDatabasesByLFTags" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.SearchDatabasesByLFTags"></a>

```typescript
public readonly SearchDatabasesByLFTags: string;
```

- *Type:* string

[Read] lakeformation:SearchDatabasesByLFTags.

---

##### `SearchTablesByLFTags`<sup>Required</sup> <a name="SearchTablesByLFTags" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.SearchTablesByLFTags"></a>

```typescript
public readonly SearchTablesByLFTags: string;
```

- *Type:* string

[Read] lakeformation:SearchTablesByLFTags.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartQueryPlanning`<sup>Required</sup> <a name="StartQueryPlanning" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.StartQueryPlanning"></a>

```typescript
public readonly StartQueryPlanning: string;
```

- *Type:* string

[Write] lakeformation:StartQueryPlanning.

---

##### `StartTransaction`<sup>Required</sup> <a name="StartTransaction" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.StartTransaction"></a>

```typescript
public readonly StartTransaction: string;
```

- *Type:* string

[Write] lakeformation:StartTransaction.

---

##### `UpdateDataCellsFilter`<sup>Required</sup> <a name="UpdateDataCellsFilter" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateDataCellsFilter"></a>

```typescript
public readonly UpdateDataCellsFilter: string;
```

- *Type:* string

[Write] lakeformation:UpdateDataCellsFilter.

---

##### `UpdateLakeFormationIdentityCenterConfiguration`<sup>Required</sup> <a name="UpdateLakeFormationIdentityCenterConfiguration" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateLakeFormationIdentityCenterConfiguration"></a>

```typescript
public readonly UpdateLakeFormationIdentityCenterConfiguration: string;
```

- *Type:* string

[Write] lakeformation:UpdateLakeFormationIdentityCenterConfiguration.

---

##### `UpdateLFTag`<sup>Required</sup> <a name="UpdateLFTag" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateLFTag"></a>

```typescript
public readonly UpdateLFTag: string;
```

- *Type:* string

[Write] lakeformation:UpdateLFTag.

---

##### `UpdateLFTagExpression`<sup>Required</sup> <a name="UpdateLFTagExpression" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateLFTagExpression"></a>

```typescript
public readonly UpdateLFTagExpression: string;
```

- *Type:* string

[Write] lakeformation:UpdateLFTagExpression.

---

##### `UpdateResource`<sup>Required</sup> <a name="UpdateResource" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateResource"></a>

```typescript
public readonly UpdateResource: string;
```

- *Type:* string

[Write] lakeformation:UpdateResource.

---

##### `UpdateTableObjects`<sup>Required</sup> <a name="UpdateTableObjects" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateTableObjects"></a>

```typescript
public readonly UpdateTableObjects: string;
```

- *Type:* string

[Write] lakeformation:UpdateTableObjects.

---

##### `UpdateTableStorageOptimizer`<sup>Required</sup> <a name="UpdateTableStorageOptimizer" id="@cdk_utils/iam.lakeformation.LakeFormationActions.property.UpdateTableStorageOptimizer"></a>

```typescript
public readonly UpdateTableStorageOptimizer: string;
```

- *Type:* string

[Write] lakeformation:UpdateTableStorageOptimizer.

---

### LakeFormationConditions <a name="LakeFormationConditions" id="@cdk_utils/iam.lakeformation.LakeFormationConditions"></a>

Condition key constants and builders for lakeformation.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lakeformation.LakeFormationConditions.Initializer"></a>

```typescript
import { lakeformation } from '@cdk_utils/iam'

new lakeformation.LakeFormationConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationConditions.enabledOnlyForMetaDataAccess">enabledOnlyForMetaDataAccess</a></code> | Generates a condition block for `lakeformation:EnabledOnlyForMetaDataAccess`. |

---

##### `enabledOnlyForMetaDataAccess` <a name="enabledOnlyForMetaDataAccess" id="@cdk_utils/iam.lakeformation.LakeFormationConditions.enabledOnlyForMetaDataAccess"></a>

```typescript
import { lakeformation } from '@cdk_utils/iam'

lakeformation.LakeFormationConditions.enabledOnlyForMetaDataAccess(value: boolean)
```

Generates a condition block for `lakeformation:EnabledOnlyForMetaDataAccess`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lakeformation.LakeFormationConditions.enabledOnlyForMetaDataAccess.parameter.value"></a>

- *Type:* boolean

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationConditions.property.actionGetDataAccessConditionKeys">actionGetDataAccessConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDataAccess action. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationConditions.property.ENABLED_ONLY_FOR_META_DATA_ACCESS">ENABLED_ONLY_FOR_META_DATA_ACCESS</a></code> | <code>string</code> | Condition key: lakeformation:EnabledOnlyForMetaDataAccess (Bool). |

---

##### `actionGetDataAccessConditionKeys`<sup>Required</sup> <a name="actionGetDataAccessConditionKeys" id="@cdk_utils/iam.lakeformation.LakeFormationConditions.property.actionGetDataAccessConditionKeys"></a>

```typescript
public readonly actionGetDataAccessConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDataAccess action.

---

##### `ENABLED_ONLY_FOR_META_DATA_ACCESS`<sup>Required</sup> <a name="ENABLED_ONLY_FOR_META_DATA_ACCESS" id="@cdk_utils/iam.lakeformation.LakeFormationConditions.property.ENABLED_ONLY_FOR_META_DATA_ACCESS"></a>

```typescript
public readonly ENABLED_ONLY_FOR_META_DATA_ACCESS: string;
```

- *Type:* string

Condition key: lakeformation:EnabledOnlyForMetaDataAccess (Bool).

---

### LakeFormationOperations <a name="LakeFormationOperations" id="@cdk_utils/iam.lakeformation.LakeFormationOperations"></a>

API operation to required IAM actions mapping for lakeformation.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.Initializer"></a>

```typescript
import { lakeformation } from '@cdk_utils/iam'

new lakeformation.LakeFormationOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.AddLFTagsToResource">AddLFTagsToResource</a></code> | <code>string[]</code> | IAM actions required for the AddLFTagsToResource API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.AssumeDecoratedRoleWithSAML">AssumeDecoratedRoleWithSAML</a></code> | <code>string[]</code> | IAM actions required for the AssumeDecoratedRoleWithSAML API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.BatchGrantPermissions">BatchGrantPermissions</a></code> | <code>string[]</code> | IAM actions required for the BatchGrantPermissions API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.BatchRevokePermissions">BatchRevokePermissions</a></code> | <code>string[]</code> | IAM actions required for the BatchRevokePermissions API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CancelTransaction">CancelTransaction</a></code> | <code>string[]</code> | IAM actions required for the CancelTransaction API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CommitTransaction">CommitTransaction</a></code> | <code>string[]</code> | IAM actions required for the CommitTransaction API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CreateDataCellsFilter">CreateDataCellsFilter</a></code> | <code>string[]</code> | IAM actions required for the CreateDataCellsFilter API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CreateLakeFormationIdentityCenterConfiguration">CreateLakeFormationIdentityCenterConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateLakeFormationIdentityCenterConfiguration API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CreateLakeFormationOptIn">CreateLakeFormationOptIn</a></code> | <code>string[]</code> | IAM actions required for the CreateLakeFormationOptIn API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CreateLFTag">CreateLFTag</a></code> | <code>string[]</code> | IAM actions required for the CreateLFTag API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CreateLFTagExpression">CreateLFTagExpression</a></code> | <code>string[]</code> | IAM actions required for the CreateLFTagExpression API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeleteDataCellsFilter">DeleteDataCellsFilter</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataCellsFilter API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeleteLakeFormationIdentityCenterConfiguration">DeleteLakeFormationIdentityCenterConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteLakeFormationIdentityCenterConfiguration API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeleteLakeFormationOptIn">DeleteLakeFormationOptIn</a></code> | <code>string[]</code> | IAM actions required for the DeleteLakeFormationOptIn API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeleteLFTag">DeleteLFTag</a></code> | <code>string[]</code> | IAM actions required for the DeleteLFTag API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeleteLFTagExpression">DeleteLFTagExpression</a></code> | <code>string[]</code> | IAM actions required for the DeleteLFTagExpression API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeleteObjectsOnCancel">DeleteObjectsOnCancel</a></code> | <code>string[]</code> | IAM actions required for the DeleteObjectsOnCancel API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeregisterResource">DeregisterResource</a></code> | <code>string[]</code> | IAM actions required for the DeregisterResource API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DescribeLakeFormationIdentityCenterConfiguration">DescribeLakeFormationIdentityCenterConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeLakeFormationIdentityCenterConfiguration API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DescribeResource">DescribeResource</a></code> | <code>string[]</code> | IAM actions required for the DescribeResource API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DescribeTransaction">DescribeTransaction</a></code> | <code>string[]</code> | IAM actions required for the DescribeTransaction API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ExtendTransaction">ExtendTransaction</a></code> | <code>string[]</code> | IAM actions required for the ExtendTransaction API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.GrantPermissions">GrantPermissions</a></code> | <code>string[]</code> | IAM actions required for the GrantPermissions API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListDataCellsFilter">ListDataCellsFilter</a></code> | <code>string[]</code> | IAM actions required for the ListDataCellsFilter API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListLakeFormationOptIns">ListLakeFormationOptIns</a></code> | <code>string[]</code> | IAM actions required for the ListLakeFormationOptIns API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListLFTagExpressions">ListLFTagExpressions</a></code> | <code>string[]</code> | IAM actions required for the ListLFTagExpressions API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListLFTags">ListLFTags</a></code> | <code>string[]</code> | IAM actions required for the ListLFTags API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListPermissions">ListPermissions</a></code> | <code>string[]</code> | IAM actions required for the ListPermissions API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListResources">ListResources</a></code> | <code>string[]</code> | IAM actions required for the ListResources API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListTableStorageOptimizers">ListTableStorageOptimizers</a></code> | <code>string[]</code> | IAM actions required for the ListTableStorageOptimizers API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListTransactions">ListTransactions</a></code> | <code>string[]</code> | IAM actions required for the ListTransactions API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetDataCellsFilter">opGetDataCellsFilter</a></code> | <code>string[]</code> | IAM actions required for the GetDataCellsFilter API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetDataLakePrincipal">opGetDataLakePrincipal</a></code> | <code>string[]</code> | IAM actions required for the GetDataLakePrincipal API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetDataLakeSettings">opGetDataLakeSettings</a></code> | <code>string[]</code> | IAM actions required for the GetDataLakeSettings API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetEffectivePermissionsForPath">opGetEffectivePermissionsForPath</a></code> | <code>string[]</code> | IAM actions required for the GetEffectivePermissionsForPath API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetLFTag">opGetLFTag</a></code> | <code>string[]</code> | IAM actions required for the GetLFTag API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetLFTagExpression">opGetLFTagExpression</a></code> | <code>string[]</code> | IAM actions required for the GetLFTagExpression API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetQueryState">opGetQueryState</a></code> | <code>string[]</code> | IAM actions required for the GetQueryState API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetQueryStatistics">opGetQueryStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetQueryStatistics API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetResourceLFTags">opGetResourceLFTags</a></code> | <code>string[]</code> | IAM actions required for the GetResourceLFTags API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetTableObjects">opGetTableObjects</a></code> | <code>string[]</code> | IAM actions required for the GetTableObjects API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetTemporaryDataLocationCredentials">opGetTemporaryDataLocationCredentials</a></code> | <code>string[]</code> | IAM actions required for the GetTemporaryDataLocationCredentials API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetTemporaryGluePartitionCredentials">opGetTemporaryGluePartitionCredentials</a></code> | <code>string[]</code> | IAM actions required for the GetTemporaryGluePartitionCredentials API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetTemporaryGlueTableCredentials">opGetTemporaryGlueTableCredentials</a></code> | <code>string[]</code> | IAM actions required for the GetTemporaryGlueTableCredentials API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetWorkUnitResults">opGetWorkUnitResults</a></code> | <code>string[]</code> | IAM actions required for the GetWorkUnitResults API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetWorkUnits">opGetWorkUnits</a></code> | <code>string[]</code> | IAM actions required for the GetWorkUnits API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.PutDataLakeSettings">PutDataLakeSettings</a></code> | <code>string[]</code> | IAM actions required for the PutDataLakeSettings API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.RegisterResource">RegisterResource</a></code> | <code>string[]</code> | IAM actions required for the RegisterResource API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.RemoveLFTagsFromResource">RemoveLFTagsFromResource</a></code> | <code>string[]</code> | IAM actions required for the RemoveLFTagsFromResource API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.RevokePermissions">RevokePermissions</a></code> | <code>string[]</code> | IAM actions required for the RevokePermissions API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.SearchDatabasesByLFTags">SearchDatabasesByLFTags</a></code> | <code>string[]</code> | IAM actions required for the SearchDatabasesByLFTags API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.SearchTablesByLFTags">SearchTablesByLFTags</a></code> | <code>string[]</code> | IAM actions required for the SearchTablesByLFTags API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.StartQueryPlanning">StartQueryPlanning</a></code> | <code>string[]</code> | IAM actions required for the StartQueryPlanning API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.StartTransaction">StartTransaction</a></code> | <code>string[]</code> | IAM actions required for the StartTransaction API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateDataCellsFilter">UpdateDataCellsFilter</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataCellsFilter API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateLakeFormationIdentityCenterConfiguration">UpdateLakeFormationIdentityCenterConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateLakeFormationIdentityCenterConfiguration API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateLFTag">UpdateLFTag</a></code> | <code>string[]</code> | IAM actions required for the UpdateLFTag API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateLFTagExpression">UpdateLFTagExpression</a></code> | <code>string[]</code> | IAM actions required for the UpdateLFTagExpression API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateResource">UpdateResource</a></code> | <code>string[]</code> | IAM actions required for the UpdateResource API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateTableObjects">UpdateTableObjects</a></code> | <code>string[]</code> | IAM actions required for the UpdateTableObjects API call. |
| <code><a href="#@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateTableStorageOptimizer">UpdateTableStorageOptimizer</a></code> | <code>string[]</code> | IAM actions required for the UpdateTableStorageOptimizer API call. |

---

##### `AddLFTagsToResource`<sup>Required</sup> <a name="AddLFTagsToResource" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.AddLFTagsToResource"></a>

```typescript
public readonly AddLFTagsToResource: string[];
```

- *Type:* string[]

IAM actions required for the AddLFTagsToResource API call.

---

##### `AssumeDecoratedRoleWithSAML`<sup>Required</sup> <a name="AssumeDecoratedRoleWithSAML" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.AssumeDecoratedRoleWithSAML"></a>

```typescript
public readonly AssumeDecoratedRoleWithSAML: string[];
```

- *Type:* string[]

IAM actions required for the AssumeDecoratedRoleWithSAML API call.

---

##### `BatchGrantPermissions`<sup>Required</sup> <a name="BatchGrantPermissions" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.BatchGrantPermissions"></a>

```typescript
public readonly BatchGrantPermissions: string[];
```

- *Type:* string[]

IAM actions required for the BatchGrantPermissions API call.

---

##### `BatchRevokePermissions`<sup>Required</sup> <a name="BatchRevokePermissions" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.BatchRevokePermissions"></a>

```typescript
public readonly BatchRevokePermissions: string[];
```

- *Type:* string[]

IAM actions required for the BatchRevokePermissions API call.

---

##### `CancelTransaction`<sup>Required</sup> <a name="CancelTransaction" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CancelTransaction"></a>

```typescript
public readonly CancelTransaction: string[];
```

- *Type:* string[]

IAM actions required for the CancelTransaction API call.

---

##### `CommitTransaction`<sup>Required</sup> <a name="CommitTransaction" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CommitTransaction"></a>

```typescript
public readonly CommitTransaction: string[];
```

- *Type:* string[]

IAM actions required for the CommitTransaction API call.

---

##### `CreateDataCellsFilter`<sup>Required</sup> <a name="CreateDataCellsFilter" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CreateDataCellsFilter"></a>

```typescript
public readonly CreateDataCellsFilter: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataCellsFilter API call.

---

##### `CreateLakeFormationIdentityCenterConfiguration`<sup>Required</sup> <a name="CreateLakeFormationIdentityCenterConfiguration" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CreateLakeFormationIdentityCenterConfiguration"></a>

```typescript
public readonly CreateLakeFormationIdentityCenterConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateLakeFormationIdentityCenterConfiguration API call.

---

##### `CreateLakeFormationOptIn`<sup>Required</sup> <a name="CreateLakeFormationOptIn" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CreateLakeFormationOptIn"></a>

```typescript
public readonly CreateLakeFormationOptIn: string[];
```

- *Type:* string[]

IAM actions required for the CreateLakeFormationOptIn API call.

---

##### `CreateLFTag`<sup>Required</sup> <a name="CreateLFTag" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CreateLFTag"></a>

```typescript
public readonly CreateLFTag: string[];
```

- *Type:* string[]

IAM actions required for the CreateLFTag API call.

---

##### `CreateLFTagExpression`<sup>Required</sup> <a name="CreateLFTagExpression" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.CreateLFTagExpression"></a>

```typescript
public readonly CreateLFTagExpression: string[];
```

- *Type:* string[]

IAM actions required for the CreateLFTagExpression API call.

---

##### `DeleteDataCellsFilter`<sup>Required</sup> <a name="DeleteDataCellsFilter" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeleteDataCellsFilter"></a>

```typescript
public readonly DeleteDataCellsFilter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataCellsFilter API call.

---

##### `DeleteLakeFormationIdentityCenterConfiguration`<sup>Required</sup> <a name="DeleteLakeFormationIdentityCenterConfiguration" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeleteLakeFormationIdentityCenterConfiguration"></a>

```typescript
public readonly DeleteLakeFormationIdentityCenterConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLakeFormationIdentityCenterConfiguration API call.

---

##### `DeleteLakeFormationOptIn`<sup>Required</sup> <a name="DeleteLakeFormationOptIn" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeleteLakeFormationOptIn"></a>

```typescript
public readonly DeleteLakeFormationOptIn: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLakeFormationOptIn API call.

---

##### `DeleteLFTag`<sup>Required</sup> <a name="DeleteLFTag" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeleteLFTag"></a>

```typescript
public readonly DeleteLFTag: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLFTag API call.

---

##### `DeleteLFTagExpression`<sup>Required</sup> <a name="DeleteLFTagExpression" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeleteLFTagExpression"></a>

```typescript
public readonly DeleteLFTagExpression: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLFTagExpression API call.

---

##### `DeleteObjectsOnCancel`<sup>Required</sup> <a name="DeleteObjectsOnCancel" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeleteObjectsOnCancel"></a>

```typescript
public readonly DeleteObjectsOnCancel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteObjectsOnCancel API call.

---

##### `DeregisterResource`<sup>Required</sup> <a name="DeregisterResource" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DeregisterResource"></a>

```typescript
public readonly DeregisterResource: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterResource API call.

---

##### `DescribeLakeFormationIdentityCenterConfiguration`<sup>Required</sup> <a name="DescribeLakeFormationIdentityCenterConfiguration" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DescribeLakeFormationIdentityCenterConfiguration"></a>

```typescript
public readonly DescribeLakeFormationIdentityCenterConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLakeFormationIdentityCenterConfiguration API call.

---

##### `DescribeResource`<sup>Required</sup> <a name="DescribeResource" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DescribeResource"></a>

```typescript
public readonly DescribeResource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResource API call.

---

##### `DescribeTransaction`<sup>Required</sup> <a name="DescribeTransaction" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.DescribeTransaction"></a>

```typescript
public readonly DescribeTransaction: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTransaction API call.

---

##### `ExtendTransaction`<sup>Required</sup> <a name="ExtendTransaction" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ExtendTransaction"></a>

```typescript
public readonly ExtendTransaction: string[];
```

- *Type:* string[]

IAM actions required for the ExtendTransaction API call.

---

##### `GrantPermissions`<sup>Required</sup> <a name="GrantPermissions" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.GrantPermissions"></a>

```typescript
public readonly GrantPermissions: string[];
```

- *Type:* string[]

IAM actions required for the GrantPermissions API call.

---

##### `ListDataCellsFilter`<sup>Required</sup> <a name="ListDataCellsFilter" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListDataCellsFilter"></a>

```typescript
public readonly ListDataCellsFilter: string[];
```

- *Type:* string[]

IAM actions required for the ListDataCellsFilter API call.

---

##### `ListLakeFormationOptIns`<sup>Required</sup> <a name="ListLakeFormationOptIns" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListLakeFormationOptIns"></a>

```typescript
public readonly ListLakeFormationOptIns: string[];
```

- *Type:* string[]

IAM actions required for the ListLakeFormationOptIns API call.

---

##### `ListLFTagExpressions`<sup>Required</sup> <a name="ListLFTagExpressions" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListLFTagExpressions"></a>

```typescript
public readonly ListLFTagExpressions: string[];
```

- *Type:* string[]

IAM actions required for the ListLFTagExpressions API call.

---

##### `ListLFTags`<sup>Required</sup> <a name="ListLFTags" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListLFTags"></a>

```typescript
public readonly ListLFTags: string[];
```

- *Type:* string[]

IAM actions required for the ListLFTags API call.

---

##### `ListPermissions`<sup>Required</sup> <a name="ListPermissions" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListPermissions"></a>

```typescript
public readonly ListPermissions: string[];
```

- *Type:* string[]

IAM actions required for the ListPermissions API call.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListResources"></a>

```typescript
public readonly ListResources: string[];
```

- *Type:* string[]

IAM actions required for the ListResources API call.

---

##### `ListTableStorageOptimizers`<sup>Required</sup> <a name="ListTableStorageOptimizers" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListTableStorageOptimizers"></a>

```typescript
public readonly ListTableStorageOptimizers: string[];
```

- *Type:* string[]

IAM actions required for the ListTableStorageOptimizers API call.

---

##### `ListTransactions`<sup>Required</sup> <a name="ListTransactions" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.ListTransactions"></a>

```typescript
public readonly ListTransactions: string[];
```

- *Type:* string[]

IAM actions required for the ListTransactions API call.

---

##### `opGetDataCellsFilter`<sup>Required</sup> <a name="opGetDataCellsFilter" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetDataCellsFilter"></a>

```typescript
public readonly opGetDataCellsFilter: string[];
```

- *Type:* string[]

IAM actions required for the GetDataCellsFilter API call.

---

##### `opGetDataLakePrincipal`<sup>Required</sup> <a name="opGetDataLakePrincipal" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetDataLakePrincipal"></a>

```typescript
public readonly opGetDataLakePrincipal: string[];
```

- *Type:* string[]

IAM actions required for the GetDataLakePrincipal API call.

---

##### `opGetDataLakeSettings`<sup>Required</sup> <a name="opGetDataLakeSettings" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetDataLakeSettings"></a>

```typescript
public readonly opGetDataLakeSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetDataLakeSettings API call.

---

##### `opGetEffectivePermissionsForPath`<sup>Required</sup> <a name="opGetEffectivePermissionsForPath" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetEffectivePermissionsForPath"></a>

```typescript
public readonly opGetEffectivePermissionsForPath: string[];
```

- *Type:* string[]

IAM actions required for the GetEffectivePermissionsForPath API call.

---

##### `opGetLFTag`<sup>Required</sup> <a name="opGetLFTag" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetLFTag"></a>

```typescript
public readonly opGetLFTag: string[];
```

- *Type:* string[]

IAM actions required for the GetLFTag API call.

---

##### `opGetLFTagExpression`<sup>Required</sup> <a name="opGetLFTagExpression" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetLFTagExpression"></a>

```typescript
public readonly opGetLFTagExpression: string[];
```

- *Type:* string[]

IAM actions required for the GetLFTagExpression API call.

---

##### `opGetQueryState`<sup>Required</sup> <a name="opGetQueryState" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetQueryState"></a>

```typescript
public readonly opGetQueryState: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryState API call.

---

##### `opGetQueryStatistics`<sup>Required</sup> <a name="opGetQueryStatistics" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetQueryStatistics"></a>

```typescript
public readonly opGetQueryStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryStatistics API call.

---

##### `opGetResourceLFTags`<sup>Required</sup> <a name="opGetResourceLFTags" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetResourceLFTags"></a>

```typescript
public readonly opGetResourceLFTags: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceLFTags API call.

---

##### `opGetTableObjects`<sup>Required</sup> <a name="opGetTableObjects" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetTableObjects"></a>

```typescript
public readonly opGetTableObjects: string[];
```

- *Type:* string[]

IAM actions required for the GetTableObjects API call.

---

##### `opGetTemporaryDataLocationCredentials`<sup>Required</sup> <a name="opGetTemporaryDataLocationCredentials" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetTemporaryDataLocationCredentials"></a>

```typescript
public readonly opGetTemporaryDataLocationCredentials: string[];
```

- *Type:* string[]

IAM actions required for the GetTemporaryDataLocationCredentials API call.

---

##### `opGetTemporaryGluePartitionCredentials`<sup>Required</sup> <a name="opGetTemporaryGluePartitionCredentials" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetTemporaryGluePartitionCredentials"></a>

```typescript
public readonly opGetTemporaryGluePartitionCredentials: string[];
```

- *Type:* string[]

IAM actions required for the GetTemporaryGluePartitionCredentials API call.

---

##### `opGetTemporaryGlueTableCredentials`<sup>Required</sup> <a name="opGetTemporaryGlueTableCredentials" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetTemporaryGlueTableCredentials"></a>

```typescript
public readonly opGetTemporaryGlueTableCredentials: string[];
```

- *Type:* string[]

IAM actions required for the GetTemporaryGlueTableCredentials API call.

---

##### `opGetWorkUnitResults`<sup>Required</sup> <a name="opGetWorkUnitResults" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetWorkUnitResults"></a>

```typescript
public readonly opGetWorkUnitResults: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkUnitResults API call.

---

##### `opGetWorkUnits`<sup>Required</sup> <a name="opGetWorkUnits" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.opGetWorkUnits"></a>

```typescript
public readonly opGetWorkUnits: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkUnits API call.

---

##### `PutDataLakeSettings`<sup>Required</sup> <a name="PutDataLakeSettings" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.PutDataLakeSettings"></a>

```typescript
public readonly PutDataLakeSettings: string[];
```

- *Type:* string[]

IAM actions required for the PutDataLakeSettings API call.

---

##### `RegisterResource`<sup>Required</sup> <a name="RegisterResource" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.RegisterResource"></a>

```typescript
public readonly RegisterResource: string[];
```

- *Type:* string[]

IAM actions required for the RegisterResource API call.

---

##### `RemoveLFTagsFromResource`<sup>Required</sup> <a name="RemoveLFTagsFromResource" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.RemoveLFTagsFromResource"></a>

```typescript
public readonly RemoveLFTagsFromResource: string[];
```

- *Type:* string[]

IAM actions required for the RemoveLFTagsFromResource API call.

---

##### `RevokePermissions`<sup>Required</sup> <a name="RevokePermissions" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.RevokePermissions"></a>

```typescript
public readonly RevokePermissions: string[];
```

- *Type:* string[]

IAM actions required for the RevokePermissions API call.

---

##### `SearchDatabasesByLFTags`<sup>Required</sup> <a name="SearchDatabasesByLFTags" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.SearchDatabasesByLFTags"></a>

```typescript
public readonly SearchDatabasesByLFTags: string[];
```

- *Type:* string[]

IAM actions required for the SearchDatabasesByLFTags API call.

---

##### `SearchTablesByLFTags`<sup>Required</sup> <a name="SearchTablesByLFTags" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.SearchTablesByLFTags"></a>

```typescript
public readonly SearchTablesByLFTags: string[];
```

- *Type:* string[]

IAM actions required for the SearchTablesByLFTags API call.

---

##### `StartQueryPlanning`<sup>Required</sup> <a name="StartQueryPlanning" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.StartQueryPlanning"></a>

```typescript
public readonly StartQueryPlanning: string[];
```

- *Type:* string[]

IAM actions required for the StartQueryPlanning API call.

---

##### `StartTransaction`<sup>Required</sup> <a name="StartTransaction" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.StartTransaction"></a>

```typescript
public readonly StartTransaction: string[];
```

- *Type:* string[]

IAM actions required for the StartTransaction API call.

---

##### `UpdateDataCellsFilter`<sup>Required</sup> <a name="UpdateDataCellsFilter" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateDataCellsFilter"></a>

```typescript
public readonly UpdateDataCellsFilter: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataCellsFilter API call.

---

##### `UpdateLakeFormationIdentityCenterConfiguration`<sup>Required</sup> <a name="UpdateLakeFormationIdentityCenterConfiguration" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateLakeFormationIdentityCenterConfiguration"></a>

```typescript
public readonly UpdateLakeFormationIdentityCenterConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLakeFormationIdentityCenterConfiguration API call.

---

##### `UpdateLFTag`<sup>Required</sup> <a name="UpdateLFTag" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateLFTag"></a>

```typescript
public readonly UpdateLFTag: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLFTag API call.

---

##### `UpdateLFTagExpression`<sup>Required</sup> <a name="UpdateLFTagExpression" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateLFTagExpression"></a>

```typescript
public readonly UpdateLFTagExpression: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLFTagExpression API call.

---

##### `UpdateResource`<sup>Required</sup> <a name="UpdateResource" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateResource"></a>

```typescript
public readonly UpdateResource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResource API call.

---

##### `UpdateTableObjects`<sup>Required</sup> <a name="UpdateTableObjects" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateTableObjects"></a>

```typescript
public readonly UpdateTableObjects: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTableObjects API call.

---

##### `UpdateTableStorageOptimizer`<sup>Required</sup> <a name="UpdateTableStorageOptimizer" id="@cdk_utils/iam.lakeformation.LakeFormationOperations.property.UpdateTableStorageOptimizer"></a>

```typescript
public readonly UpdateTableStorageOptimizer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTableStorageOptimizer API call.

---


