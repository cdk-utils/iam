# `finspace_api` Submodule <a name="`finspace_api` Submodule" id="@cdk_utils/iam.finspace_api"></a>


## Structs <a name="Structs" id="Structs"></a>

### FinspaceAPICredentialArnComponents <a name="FinspaceAPICredentialArnComponents" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents"></a>

Parsed components of a credential ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.Initializer"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

const finspaceAPICredentialArnComponents: finspace_api.FinspaceAPICredentialArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FinspaceAPICredentialArnProps <a name="FinspaceAPICredentialArnProps" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps"></a>

Properties for building a credential ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.Initializer"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

const finspaceAPICredentialArnProps: finspace_api.FinspaceAPICredentialArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceAPIActions <a name="FinspaceAPIActions" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions"></a>

IAM action constants for the finspace-api service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.Initializer"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

new finspace_api.FinspaceAPIActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.actionGetProgrammaticAccessCredentials">actionGetProgrammaticAccessCredentials</a></code> | <code>string</code> | [Read] finspace-api:GetProgrammaticAccessCredentials. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetProgrammaticAccessCredentials`<sup>Required</sup> <a name="actionGetProgrammaticAccessCredentials" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.actionGetProgrammaticAccessCredentials"></a>

```typescript
public readonly actionGetProgrammaticAccessCredentials: string;
```

- *Type:* string

[Read] finspace-api:GetProgrammaticAccessCredentials.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### FinspaceAPIOperations <a name="FinspaceAPIOperations" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations"></a>

API operation to required IAM actions mapping for finspace-api.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.Initializer"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

new finspace_api.FinspaceAPIOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.AssociateUserToPermissionGroup">AssociateUserToPermissionGroup</a></code> | <code>string[]</code> | IAM actions required for the AssociateUserToPermissionGroup API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.CreateChangeset">CreateChangeset</a></code> | <code>string[]</code> | IAM actions required for the CreateChangeset API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.CreateDataset">CreateDataset</a></code> | <code>string[]</code> | IAM actions required for the CreateDataset API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.CreateDataView">CreateDataView</a></code> | <code>string[]</code> | IAM actions required for the CreateDataView API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.CreatePermissionGroup">CreatePermissionGroup</a></code> | <code>string[]</code> | IAM actions required for the CreatePermissionGroup API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.DeleteDataset">DeleteDataset</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataset API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.DeletePermissionGroup">DeletePermissionGroup</a></code> | <code>string[]</code> | IAM actions required for the DeletePermissionGroup API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.DisableUser">DisableUser</a></code> | <code>string[]</code> | IAM actions required for the DisableUser API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.DisassociateUserFromPermissionGroup">DisassociateUserFromPermissionGroup</a></code> | <code>string[]</code> | IAM actions required for the DisassociateUserFromPermissionGroup API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.EnableUser">EnableUser</a></code> | <code>string[]</code> | IAM actions required for the EnableUser API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListChangesets">ListChangesets</a></code> | <code>string[]</code> | IAM actions required for the ListChangesets API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListDatasets">ListDatasets</a></code> | <code>string[]</code> | IAM actions required for the ListDatasets API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListDataViews">ListDataViews</a></code> | <code>string[]</code> | IAM actions required for the ListDataViews API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListPermissionGroups">ListPermissionGroups</a></code> | <code>string[]</code> | IAM actions required for the ListPermissionGroups API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListPermissionGroupsByUser">ListPermissionGroupsByUser</a></code> | <code>string[]</code> | IAM actions required for the ListPermissionGroupsByUser API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListUsersByPermissionGroup">ListUsersByPermissionGroup</a></code> | <code>string[]</code> | IAM actions required for the ListUsersByPermissionGroup API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetChangeset">opGetChangeset</a></code> | <code>string[]</code> | IAM actions required for the GetChangeset API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetDataset">opGetDataset</a></code> | <code>string[]</code> | IAM actions required for the GetDataset API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetDataView">opGetDataView</a></code> | <code>string[]</code> | IAM actions required for the GetDataView API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetExternalDataViewAccessDetails">opGetExternalDataViewAccessDetails</a></code> | <code>string[]</code> | IAM actions required for the GetExternalDataViewAccessDetails API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetPermissionGroup">opGetPermissionGroup</a></code> | <code>string[]</code> | IAM actions required for the GetPermissionGroup API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetProgrammaticAccessCredentials">opGetProgrammaticAccessCredentials</a></code> | <code>string[]</code> | IAM actions required for the GetProgrammaticAccessCredentials API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetUser">opGetUser</a></code> | <code>string[]</code> | IAM actions required for the GetUser API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetWorkingLocation">opGetWorkingLocation</a></code> | <code>string[]</code> | IAM actions required for the GetWorkingLocation API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ResetUserPassword">ResetUserPassword</a></code> | <code>string[]</code> | IAM actions required for the ResetUserPassword API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.UpdateChangeset">UpdateChangeset</a></code> | <code>string[]</code> | IAM actions required for the UpdateChangeset API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.UpdateDataset">UpdateDataset</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataset API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.UpdatePermissionGroup">UpdatePermissionGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdatePermissionGroup API call. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |

---

##### `AssociateUserToPermissionGroup`<sup>Required</sup> <a name="AssociateUserToPermissionGroup" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.AssociateUserToPermissionGroup"></a>

```typescript
public readonly AssociateUserToPermissionGroup: string[];
```

- *Type:* string[]

IAM actions required for the AssociateUserToPermissionGroup API call.

---

##### `CreateChangeset`<sup>Required</sup> <a name="CreateChangeset" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.CreateChangeset"></a>

```typescript
public readonly CreateChangeset: string[];
```

- *Type:* string[]

IAM actions required for the CreateChangeset API call.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataset API call.

---

##### `CreateDataView`<sup>Required</sup> <a name="CreateDataView" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.CreateDataView"></a>

```typescript
public readonly CreateDataView: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataView API call.

---

##### `CreatePermissionGroup`<sup>Required</sup> <a name="CreatePermissionGroup" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.CreatePermissionGroup"></a>

```typescript
public readonly CreatePermissionGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreatePermissionGroup API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataset API call.

---

##### `DeletePermissionGroup`<sup>Required</sup> <a name="DeletePermissionGroup" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.DeletePermissionGroup"></a>

```typescript
public readonly DeletePermissionGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeletePermissionGroup API call.

---

##### `DisableUser`<sup>Required</sup> <a name="DisableUser" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.DisableUser"></a>

```typescript
public readonly DisableUser: string[];
```

- *Type:* string[]

IAM actions required for the DisableUser API call.

---

##### `DisassociateUserFromPermissionGroup`<sup>Required</sup> <a name="DisassociateUserFromPermissionGroup" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.DisassociateUserFromPermissionGroup"></a>

```typescript
public readonly DisassociateUserFromPermissionGroup: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateUserFromPermissionGroup API call.

---

##### `EnableUser`<sup>Required</sup> <a name="EnableUser" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.EnableUser"></a>

```typescript
public readonly EnableUser: string[];
```

- *Type:* string[]

IAM actions required for the EnableUser API call.

---

##### `ListChangesets`<sup>Required</sup> <a name="ListChangesets" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListChangesets"></a>

```typescript
public readonly ListChangesets: string[];
```

- *Type:* string[]

IAM actions required for the ListChangesets API call.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasets API call.

---

##### `ListDataViews`<sup>Required</sup> <a name="ListDataViews" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListDataViews"></a>

```typescript
public readonly ListDataViews: string[];
```

- *Type:* string[]

IAM actions required for the ListDataViews API call.

---

##### `ListPermissionGroups`<sup>Required</sup> <a name="ListPermissionGroups" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListPermissionGroups"></a>

```typescript
public readonly ListPermissionGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListPermissionGroups API call.

---

##### `ListPermissionGroupsByUser`<sup>Required</sup> <a name="ListPermissionGroupsByUser" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListPermissionGroupsByUser"></a>

```typescript
public readonly ListPermissionGroupsByUser: string[];
```

- *Type:* string[]

IAM actions required for the ListPermissionGroupsByUser API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `ListUsersByPermissionGroup`<sup>Required</sup> <a name="ListUsersByPermissionGroup" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ListUsersByPermissionGroup"></a>

```typescript
public readonly ListUsersByPermissionGroup: string[];
```

- *Type:* string[]

IAM actions required for the ListUsersByPermissionGroup API call.

---

##### `opGetChangeset`<sup>Required</sup> <a name="opGetChangeset" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetChangeset"></a>

```typescript
public readonly opGetChangeset: string[];
```

- *Type:* string[]

IAM actions required for the GetChangeset API call.

---

##### `opGetDataset`<sup>Required</sup> <a name="opGetDataset" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetDataset"></a>

```typescript
public readonly opGetDataset: string[];
```

- *Type:* string[]

IAM actions required for the GetDataset API call.

---

##### `opGetDataView`<sup>Required</sup> <a name="opGetDataView" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetDataView"></a>

```typescript
public readonly opGetDataView: string[];
```

- *Type:* string[]

IAM actions required for the GetDataView API call.

---

##### `opGetExternalDataViewAccessDetails`<sup>Required</sup> <a name="opGetExternalDataViewAccessDetails" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetExternalDataViewAccessDetails"></a>

```typescript
public readonly opGetExternalDataViewAccessDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetExternalDataViewAccessDetails API call.

---

##### `opGetPermissionGroup`<sup>Required</sup> <a name="opGetPermissionGroup" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetPermissionGroup"></a>

```typescript
public readonly opGetPermissionGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetPermissionGroup API call.

---

##### `opGetProgrammaticAccessCredentials`<sup>Required</sup> <a name="opGetProgrammaticAccessCredentials" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetProgrammaticAccessCredentials"></a>

```typescript
public readonly opGetProgrammaticAccessCredentials: string[];
```

- *Type:* string[]

IAM actions required for the GetProgrammaticAccessCredentials API call.

---

##### `opGetUser`<sup>Required</sup> <a name="opGetUser" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetUser"></a>

```typescript
public readonly opGetUser: string[];
```

- *Type:* string[]

IAM actions required for the GetUser API call.

---

##### `opGetWorkingLocation`<sup>Required</sup> <a name="opGetWorkingLocation" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.opGetWorkingLocation"></a>

```typescript
public readonly opGetWorkingLocation: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkingLocation API call.

---

##### `ResetUserPassword`<sup>Required</sup> <a name="ResetUserPassword" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.ResetUserPassword"></a>

```typescript
public readonly ResetUserPassword: string[];
```

- *Type:* string[]

IAM actions required for the ResetUserPassword API call.

---

##### `UpdateChangeset`<sup>Required</sup> <a name="UpdateChangeset" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.UpdateChangeset"></a>

```typescript
public readonly UpdateChangeset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChangeset API call.

---

##### `UpdateDataset`<sup>Required</sup> <a name="UpdateDataset" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.UpdateDataset"></a>

```typescript
public readonly UpdateDataset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataset API call.

---

##### `UpdatePermissionGroup`<sup>Required</sup> <a name="UpdatePermissionGroup" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.UpdatePermissionGroup"></a>

```typescript
public readonly UpdatePermissionGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePermissionGroup API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.finspace_api.FinspaceAPIOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

### FinspaceAPIResources <a name="FinspaceAPIResources" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources"></a>

ARN builders, validators, and parsers for finspace-api resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.Initializer"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

new finspace_api.FinspaceAPIResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIResources.credential">credential</a></code> | Builds an ARN for the credential resource. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIResources.isValidCredentialArn">isValidCredentialArn</a></code> | Validates whether a string is a valid ARN for the credential resource. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIResources.parseCredentialArn">parseCredentialArn</a></code> | Parses a credential ARN into its components. |

---

##### `credential` <a name="credential" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.credential"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

finspace_api.FinspaceAPIResources.credential(props: FinspaceAPICredentialArnProps)
```

Builds an ARN for the credential resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.credential.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps">FinspaceAPICredentialArnProps</a>

---

##### `isValidCredentialArn` <a name="isValidCredentialArn" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.isValidCredentialArn"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

finspace_api.FinspaceAPIResources.isValidCredentialArn(arn: string)
```

Validates whether a string is a valid ARN for the credential resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.isValidCredentialArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCredentialArn` <a name="parseCredentialArn" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.parseCredentialArn"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

finspace_api.FinspaceAPIResources.parseCredentialArn(arn: string)
```

Parses a credential ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.parseCredentialArn.parameter.arn"></a>

- *Type:* string

---




