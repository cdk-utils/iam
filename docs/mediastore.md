# `mediastore` Submodule <a name="`mediastore` Submodule" id="@cdk_utils/iam.mediastore"></a>


## Structs <a name="Structs" id="Structs"></a>

### MediaStoreContainerArnComponents <a name="MediaStoreContainerArnComponents" id="@cdk_utils/iam.mediastore.MediaStoreContainerArnComponents"></a>

Parsed components of a container ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediastore.MediaStoreContainerArnComponents.Initializer"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

const mediaStoreContainerArnComponents: mediastore.MediaStoreContainerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreContainerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreContainerArnComponents.property.containerName">containerName</a></code> | <code>string</code> | The ContainerName component. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreContainerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreContainerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediastore.MediaStoreContainerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdk_utils/iam.mediastore.MediaStoreContainerArnComponents.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

The ContainerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediastore.MediaStoreContainerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediastore.MediaStoreContainerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaStoreContainerArnProps <a name="MediaStoreContainerArnProps" id="@cdk_utils/iam.mediastore.MediaStoreContainerArnProps"></a>

Properties for building a container ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediastore.MediaStoreContainerArnProps.Initializer"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

const mediaStoreContainerArnProps: mediastore.MediaStoreContainerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreContainerArnProps.property.containerName">containerName</a></code> | <code>string</code> | The ContainerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreContainerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreContainerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreContainerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdk_utils/iam.mediastore.MediaStoreContainerArnProps.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

The ContainerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediastore.MediaStoreContainerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediastore.MediaStoreContainerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediastore.MediaStoreContainerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaStoreFolderArnComponents <a name="MediaStoreFolderArnComponents" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnComponents"></a>

Parsed components of a folder ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnComponents.Initializer"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

const mediaStoreFolderArnComponents: mediastore.MediaStoreFolderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreFolderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreFolderArnComponents.property.containerName">containerName</a></code> | <code>string</code> | The ContainerName component. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreFolderArnComponents.property.folderPath">folderPath</a></code> | <code>string</code> | The FolderPath component. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreFolderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreFolderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnComponents.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

The ContainerName component.

---

##### `folderPath`<sup>Required</sup> <a name="folderPath" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnComponents.property.folderPath"></a>

```typescript
public readonly folderPath: string;
```

- *Type:* string

The FolderPath component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaStoreFolderArnProps <a name="MediaStoreFolderArnProps" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnProps"></a>

Properties for building a folder ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnProps.Initializer"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

const mediaStoreFolderArnProps: mediastore.MediaStoreFolderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreFolderArnProps.property.containerName">containerName</a></code> | <code>string</code> | The ContainerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreFolderArnProps.property.folderPath">folderPath</a></code> | <code>string</code> | The FolderPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreFolderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreFolderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreFolderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnProps.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

The ContainerName component of the ARN.

---

##### `folderPath`<sup>Required</sup> <a name="folderPath" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnProps.property.folderPath"></a>

```typescript
public readonly folderPath: string;
```

- *Type:* string

The FolderPath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediastore.MediaStoreFolderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaStoreObjectArnComponents <a name="MediaStoreObjectArnComponents" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnComponents"></a>

Parsed components of a object ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnComponents.Initializer"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

const mediaStoreObjectArnComponents: mediastore.MediaStoreObjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreObjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreObjectArnComponents.property.containerName">containerName</a></code> | <code>string</code> | The ContainerName component. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreObjectArnComponents.property.objectPath">objectPath</a></code> | <code>string</code> | The ObjectPath component. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreObjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreObjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnComponents.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

The ContainerName component.

---

##### `objectPath`<sup>Required</sup> <a name="objectPath" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnComponents.property.objectPath"></a>

```typescript
public readonly objectPath: string;
```

- *Type:* string

The ObjectPath component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaStoreObjectArnProps <a name="MediaStoreObjectArnProps" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnProps"></a>

Properties for building a object ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnProps.Initializer"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

const mediaStoreObjectArnProps: mediastore.MediaStoreObjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreObjectArnProps.property.containerName">containerName</a></code> | <code>string</code> | The ContainerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreObjectArnProps.property.objectPath">objectPath</a></code> | <code>string</code> | The ObjectPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreObjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreObjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreObjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnProps.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

The ContainerName component of the ARN.

---

##### `objectPath`<sup>Required</sup> <a name="objectPath" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnProps.property.objectPath"></a>

```typescript
public readonly objectPath: string;
```

- *Type:* string

The ObjectPath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediastore.MediaStoreObjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MediaStoreActions <a name="MediaStoreActions" id="@cdk_utils/iam.mediastore.MediaStoreActions"></a>

IAM action constants for the mediastore service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediastore.MediaStoreActions.Initializer"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

new mediastore.MediaStoreActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.actionGetContainerPolicy">actionGetContainerPolicy</a></code> | <code>string</code> | [Read] mediastore:GetContainerPolicy. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.actionGetCorsPolicy">actionGetCorsPolicy</a></code> | <code>string</code> | [Read] mediastore:GetCorsPolicy. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.actionGetLifecyclePolicy">actionGetLifecyclePolicy</a></code> | <code>string</code> | [Read] mediastore:GetLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.actionGetMetricPolicy">actionGetMetricPolicy</a></code> | <code>string</code> | [Read] mediastore:GetMetricPolicy. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.actionGetObject">actionGetObject</a></code> | <code>string</code> | [Read] mediastore:GetObject. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.CreateContainer">CreateContainer</a></code> | <code>string</code> | [Write] mediastore:CreateContainer. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.DeleteContainer">DeleteContainer</a></code> | <code>string</code> | [Write] mediastore:DeleteContainer. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.DeleteContainerPolicy">DeleteContainerPolicy</a></code> | <code>string</code> | [PermissionManagement] mediastore:DeleteContainerPolicy. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.DeleteCorsPolicy">DeleteCorsPolicy</a></code> | <code>string</code> | [Write] mediastore:DeleteCorsPolicy. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.DeleteLifecyclePolicy">DeleteLifecyclePolicy</a></code> | <code>string</code> | [Write] mediastore:DeleteLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.DeleteMetricPolicy">DeleteMetricPolicy</a></code> | <code>string</code> | [Write] mediastore:DeleteMetricPolicy. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.DeleteObject">DeleteObject</a></code> | <code>string</code> | [Write] mediastore:DeleteObject. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.DescribeContainer">DescribeContainer</a></code> | <code>string</code> | [List] mediastore:DescribeContainer. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.DescribeObject">DescribeObject</a></code> | <code>string</code> | [List] mediastore:DescribeObject. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.ListContainers">ListContainers</a></code> | <code>string</code> | [List] mediastore:ListContainers. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.ListItems">ListItems</a></code> | <code>string</code> | [List] mediastore:ListItems. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] mediastore:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.PutContainerPolicy">PutContainerPolicy</a></code> | <code>string</code> | [PermissionManagement] mediastore:PutContainerPolicy. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.PutCorsPolicy">PutCorsPolicy</a></code> | <code>string</code> | [Write] mediastore:PutCorsPolicy. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.PutLifecyclePolicy">PutLifecyclePolicy</a></code> | <code>string</code> | [Write] mediastore:PutLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.PutMetricPolicy">PutMetricPolicy</a></code> | <code>string</code> | [Write] mediastore:PutMetricPolicy. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.PutObject">PutObject</a></code> | <code>string</code> | [Write] mediastore:PutObject. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.StartAccessLogging">StartAccessLogging</a></code> | <code>string</code> | [Write] mediastore:StartAccessLogging. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.StopAccessLogging">StopAccessLogging</a></code> | <code>string</code> | [Write] mediastore:StopAccessLogging. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] mediastore:TagResource. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] mediastore:UntagResource. |

---

##### `actionGetContainerPolicy`<sup>Required</sup> <a name="actionGetContainerPolicy" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.actionGetContainerPolicy"></a>

```typescript
public readonly actionGetContainerPolicy: string;
```

- *Type:* string

[Read] mediastore:GetContainerPolicy.

---

##### `actionGetCorsPolicy`<sup>Required</sup> <a name="actionGetCorsPolicy" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.actionGetCorsPolicy"></a>

```typescript
public readonly actionGetCorsPolicy: string;
```

- *Type:* string

[Read] mediastore:GetCorsPolicy.

---

##### `actionGetLifecyclePolicy`<sup>Required</sup> <a name="actionGetLifecyclePolicy" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.actionGetLifecyclePolicy"></a>

```typescript
public readonly actionGetLifecyclePolicy: string;
```

- *Type:* string

[Read] mediastore:GetLifecyclePolicy.

---

##### `actionGetMetricPolicy`<sup>Required</sup> <a name="actionGetMetricPolicy" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.actionGetMetricPolicy"></a>

```typescript
public readonly actionGetMetricPolicy: string;
```

- *Type:* string

[Read] mediastore:GetMetricPolicy.

---

##### `actionGetObject`<sup>Required</sup> <a name="actionGetObject" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.actionGetObject"></a>

```typescript
public readonly actionGetObject: string;
```

- *Type:* string

[Read] mediastore:GetObject.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateContainer`<sup>Required</sup> <a name="CreateContainer" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.CreateContainer"></a>

```typescript
public readonly CreateContainer: string;
```

- *Type:* string

[Write] mediastore:CreateContainer.

---

##### `DeleteContainer`<sup>Required</sup> <a name="DeleteContainer" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.DeleteContainer"></a>

```typescript
public readonly DeleteContainer: string;
```

- *Type:* string

[Write] mediastore:DeleteContainer.

---

##### `DeleteContainerPolicy`<sup>Required</sup> <a name="DeleteContainerPolicy" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.DeleteContainerPolicy"></a>

```typescript
public readonly DeleteContainerPolicy: string;
```

- *Type:* string

[PermissionManagement] mediastore:DeleteContainerPolicy.

---

##### `DeleteCorsPolicy`<sup>Required</sup> <a name="DeleteCorsPolicy" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.DeleteCorsPolicy"></a>

```typescript
public readonly DeleteCorsPolicy: string;
```

- *Type:* string

[Write] mediastore:DeleteCorsPolicy.

---

##### `DeleteLifecyclePolicy`<sup>Required</sup> <a name="DeleteLifecyclePolicy" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.DeleteLifecyclePolicy"></a>

```typescript
public readonly DeleteLifecyclePolicy: string;
```

- *Type:* string

[Write] mediastore:DeleteLifecyclePolicy.

---

##### `DeleteMetricPolicy`<sup>Required</sup> <a name="DeleteMetricPolicy" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.DeleteMetricPolicy"></a>

```typescript
public readonly DeleteMetricPolicy: string;
```

- *Type:* string

[Write] mediastore:DeleteMetricPolicy.

---

##### `DeleteObject`<sup>Required</sup> <a name="DeleteObject" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.DeleteObject"></a>

```typescript
public readonly DeleteObject: string;
```

- *Type:* string

[Write] mediastore:DeleteObject.

---

##### `DescribeContainer`<sup>Required</sup> <a name="DescribeContainer" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.DescribeContainer"></a>

```typescript
public readonly DescribeContainer: string;
```

- *Type:* string

[List] mediastore:DescribeContainer.

---

##### `DescribeObject`<sup>Required</sup> <a name="DescribeObject" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.DescribeObject"></a>

```typescript
public readonly DescribeObject: string;
```

- *Type:* string

[List] mediastore:DescribeObject.

---

##### `ListContainers`<sup>Required</sup> <a name="ListContainers" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.ListContainers"></a>

```typescript
public readonly ListContainers: string;
```

- *Type:* string

[List] mediastore:ListContainers.

---

##### `ListItems`<sup>Required</sup> <a name="ListItems" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.ListItems"></a>

```typescript
public readonly ListItems: string;
```

- *Type:* string

[List] mediastore:ListItems.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] mediastore:ListTagsForResource.

---

##### `PutContainerPolicy`<sup>Required</sup> <a name="PutContainerPolicy" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.PutContainerPolicy"></a>

```typescript
public readonly PutContainerPolicy: string;
```

- *Type:* string

[PermissionManagement] mediastore:PutContainerPolicy.

---

##### `PutCorsPolicy`<sup>Required</sup> <a name="PutCorsPolicy" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.PutCorsPolicy"></a>

```typescript
public readonly PutCorsPolicy: string;
```

- *Type:* string

[Write] mediastore:PutCorsPolicy.

---

##### `PutLifecyclePolicy`<sup>Required</sup> <a name="PutLifecyclePolicy" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.PutLifecyclePolicy"></a>

```typescript
public readonly PutLifecyclePolicy: string;
```

- *Type:* string

[Write] mediastore:PutLifecyclePolicy.

---

##### `PutMetricPolicy`<sup>Required</sup> <a name="PutMetricPolicy" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.PutMetricPolicy"></a>

```typescript
public readonly PutMetricPolicy: string;
```

- *Type:* string

[Write] mediastore:PutMetricPolicy.

---

##### `PutObject`<sup>Required</sup> <a name="PutObject" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.PutObject"></a>

```typescript
public readonly PutObject: string;
```

- *Type:* string

[Write] mediastore:PutObject.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAccessLogging`<sup>Required</sup> <a name="StartAccessLogging" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.StartAccessLogging"></a>

```typescript
public readonly StartAccessLogging: string;
```

- *Type:* string

[Write] mediastore:StartAccessLogging.

---

##### `StopAccessLogging`<sup>Required</sup> <a name="StopAccessLogging" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.StopAccessLogging"></a>

```typescript
public readonly StopAccessLogging: string;
```

- *Type:* string

[Write] mediastore:StopAccessLogging.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] mediastore:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediastore.MediaStoreActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] mediastore:UntagResource.

---

### MediaStoreConditions <a name="MediaStoreConditions" id="@cdk_utils/iam.mediastore.MediaStoreConditions"></a>

Condition key constants and builders for mediastore.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediastore.MediaStoreConditions.Initializer"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

new mediastore.MediaStoreConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.mediastore.MediaStoreConditions.requestTag"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

mediastore.MediaStoreConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediastore.MediaStoreConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.mediastore.MediaStoreConditions.resourceTag"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

mediastore.MediaStoreConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediastore.MediaStoreConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.mediastore.MediaStoreConditions.tagKeys"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

mediastore.MediaStoreConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.mediastore.MediaStoreConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreConditions.property.CreateContainerConditionKeys">CreateContainerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContainer action. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.mediastore.MediaStoreConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.mediastore.MediaStoreConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.mediastore.MediaStoreConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateContainerConditionKeys`<sup>Required</sup> <a name="CreateContainerConditionKeys" id="@cdk_utils/iam.mediastore.MediaStoreConditions.property.CreateContainerConditionKeys"></a>

```typescript
public readonly CreateContainerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContainer action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.mediastore.MediaStoreConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.mediastore.MediaStoreConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### MediaStoreOperations <a name="MediaStoreOperations" id="@cdk_utils/iam.mediastore.MediaStoreOperations"></a>

API operation to required IAM actions mapping for mediastore.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediastore.MediaStoreOperations.Initializer"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

new mediastore.MediaStoreOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.CreateContainer">CreateContainer</a></code> | <code>string[]</code> | IAM actions required for the CreateContainer API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.DeleteContainer">DeleteContainer</a></code> | <code>string[]</code> | IAM actions required for the DeleteContainer API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.DeleteContainerPolicy">DeleteContainerPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteContainerPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.DeleteCorsPolicy">DeleteCorsPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteCorsPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.DeleteLifecyclePolicy">DeleteLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.DeleteMetricPolicy">DeleteMetricPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteMetricPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.DeleteObject">DeleteObject</a></code> | <code>string[]</code> | IAM actions required for the DeleteObject API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.DescribeContainer">DescribeContainer</a></code> | <code>string[]</code> | IAM actions required for the DescribeContainer API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.DescribeObject">DescribeObject</a></code> | <code>string[]</code> | IAM actions required for the DescribeObject API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.ListContainers">ListContainers</a></code> | <code>string[]</code> | IAM actions required for the ListContainers API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.ListItems">ListItems</a></code> | <code>string[]</code> | IAM actions required for the ListItems API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.opGetContainerPolicy">opGetContainerPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetContainerPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.opGetCorsPolicy">opGetCorsPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetCorsPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.opGetLifecyclePolicy">opGetLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.opGetMetricPolicy">opGetMetricPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetMetricPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.opGetObject">opGetObject</a></code> | <code>string[]</code> | IAM actions required for the GetObject API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.PutContainerPolicy">PutContainerPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutContainerPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.PutCorsPolicy">PutCorsPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutCorsPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.PutLifecyclePolicy">PutLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.PutMetricPolicy">PutMetricPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutMetricPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.PutObject">PutObject</a></code> | <code>string[]</code> | IAM actions required for the PutObject API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.StartAccessLogging">StartAccessLogging</a></code> | <code>string[]</code> | IAM actions required for the StartAccessLogging API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.StopAccessLogging">StopAccessLogging</a></code> | <code>string[]</code> | IAM actions required for the StopAccessLogging API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `CreateContainer`<sup>Required</sup> <a name="CreateContainer" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.CreateContainer"></a>

```typescript
public readonly CreateContainer: string[];
```

- *Type:* string[]

IAM actions required for the CreateContainer API call.

---

##### `DeleteContainer`<sup>Required</sup> <a name="DeleteContainer" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.DeleteContainer"></a>

```typescript
public readonly DeleteContainer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContainer API call.

---

##### `DeleteContainerPolicy`<sup>Required</sup> <a name="DeleteContainerPolicy" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.DeleteContainerPolicy"></a>

```typescript
public readonly DeleteContainerPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContainerPolicy API call.

---

##### `DeleteCorsPolicy`<sup>Required</sup> <a name="DeleteCorsPolicy" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.DeleteCorsPolicy"></a>

```typescript
public readonly DeleteCorsPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCorsPolicy API call.

---

##### `DeleteLifecyclePolicy`<sup>Required</sup> <a name="DeleteLifecyclePolicy" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.DeleteLifecyclePolicy"></a>

```typescript
public readonly DeleteLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLifecyclePolicy API call.

---

##### `DeleteMetricPolicy`<sup>Required</sup> <a name="DeleteMetricPolicy" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.DeleteMetricPolicy"></a>

```typescript
public readonly DeleteMetricPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMetricPolicy API call.

---

##### `DeleteObject`<sup>Required</sup> <a name="DeleteObject" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.DeleteObject"></a>

```typescript
public readonly DeleteObject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteObject API call.

---

##### `DescribeContainer`<sup>Required</sup> <a name="DescribeContainer" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.DescribeContainer"></a>

```typescript
public readonly DescribeContainer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContainer API call.

---

##### `DescribeObject`<sup>Required</sup> <a name="DescribeObject" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.DescribeObject"></a>

```typescript
public readonly DescribeObject: string[];
```

- *Type:* string[]

IAM actions required for the DescribeObject API call.

---

##### `ListContainers`<sup>Required</sup> <a name="ListContainers" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.ListContainers"></a>

```typescript
public readonly ListContainers: string[];
```

- *Type:* string[]

IAM actions required for the ListContainers API call.

---

##### `ListItems`<sup>Required</sup> <a name="ListItems" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.ListItems"></a>

```typescript
public readonly ListItems: string[];
```

- *Type:* string[]

IAM actions required for the ListItems API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetContainerPolicy`<sup>Required</sup> <a name="opGetContainerPolicy" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.opGetContainerPolicy"></a>

```typescript
public readonly opGetContainerPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetContainerPolicy API call.

---

##### `opGetCorsPolicy`<sup>Required</sup> <a name="opGetCorsPolicy" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.opGetCorsPolicy"></a>

```typescript
public readonly opGetCorsPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetCorsPolicy API call.

---

##### `opGetLifecyclePolicy`<sup>Required</sup> <a name="opGetLifecyclePolicy" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.opGetLifecyclePolicy"></a>

```typescript
public readonly opGetLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetLifecyclePolicy API call.

---

##### `opGetMetricPolicy`<sup>Required</sup> <a name="opGetMetricPolicy" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.opGetMetricPolicy"></a>

```typescript
public readonly opGetMetricPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricPolicy API call.

---

##### `opGetObject`<sup>Required</sup> <a name="opGetObject" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.opGetObject"></a>

```typescript
public readonly opGetObject: string[];
```

- *Type:* string[]

IAM actions required for the GetObject API call.

---

##### `PutContainerPolicy`<sup>Required</sup> <a name="PutContainerPolicy" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.PutContainerPolicy"></a>

```typescript
public readonly PutContainerPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutContainerPolicy API call.

---

##### `PutCorsPolicy`<sup>Required</sup> <a name="PutCorsPolicy" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.PutCorsPolicy"></a>

```typescript
public readonly PutCorsPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutCorsPolicy API call.

---

##### `PutLifecyclePolicy`<sup>Required</sup> <a name="PutLifecyclePolicy" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.PutLifecyclePolicy"></a>

```typescript
public readonly PutLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutLifecyclePolicy API call.

---

##### `PutMetricPolicy`<sup>Required</sup> <a name="PutMetricPolicy" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.PutMetricPolicy"></a>

```typescript
public readonly PutMetricPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutMetricPolicy API call.

---

##### `PutObject`<sup>Required</sup> <a name="PutObject" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.PutObject"></a>

```typescript
public readonly PutObject: string[];
```

- *Type:* string[]

IAM actions required for the PutObject API call.

---

##### `StartAccessLogging`<sup>Required</sup> <a name="StartAccessLogging" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.StartAccessLogging"></a>

```typescript
public readonly StartAccessLogging: string[];
```

- *Type:* string[]

IAM actions required for the StartAccessLogging API call.

---

##### `StopAccessLogging`<sup>Required</sup> <a name="StopAccessLogging" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.StopAccessLogging"></a>

```typescript
public readonly StopAccessLogging: string[];
```

- *Type:* string[]

IAM actions required for the StopAccessLogging API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediastore.MediaStoreOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### MediaStoreResources <a name="MediaStoreResources" id="@cdk_utils/iam.mediastore.MediaStoreResources"></a>

ARN builders, validators, and parsers for mediastore resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediastore.MediaStoreResources.Initializer"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

new mediastore.MediaStoreResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreResources.container">container</a></code> | Builds an ARN for the container resource. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreResources.folder">folder</a></code> | Builds an ARN for the folder resource. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreResources.isValidContainerArn">isValidContainerArn</a></code> | Validates whether a string is a valid ARN for the container resource. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreResources.isValidFolderArn">isValidFolderArn</a></code> | Validates whether a string is a valid ARN for the folder resource. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreResources.isValidObjectArn">isValidObjectArn</a></code> | Validates whether a string is a valid ARN for the object resource. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreResources.object">object</a></code> | Builds an ARN for the object resource. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreResources.parseContainerArn">parseContainerArn</a></code> | Parses a container ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreResources.parseFolderArn">parseFolderArn</a></code> | Parses a folder ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediastore.MediaStoreResources.parseObjectArn">parseObjectArn</a></code> | Parses a object ARN into its components. |

---

##### `container` <a name="container" id="@cdk_utils/iam.mediastore.MediaStoreResources.container"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

mediastore.MediaStoreResources.container(props: MediaStoreContainerArnProps)
```

Builds an ARN for the container resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediastore.MediaStoreResources.container.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediastore.MediaStoreContainerArnProps">MediaStoreContainerArnProps</a>

---

##### `folder` <a name="folder" id="@cdk_utils/iam.mediastore.MediaStoreResources.folder"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

mediastore.MediaStoreResources.folder(props: MediaStoreFolderArnProps)
```

Builds an ARN for the folder resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediastore.MediaStoreResources.folder.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediastore.MediaStoreFolderArnProps">MediaStoreFolderArnProps</a>

---

##### `isValidContainerArn` <a name="isValidContainerArn" id="@cdk_utils/iam.mediastore.MediaStoreResources.isValidContainerArn"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

mediastore.MediaStoreResources.isValidContainerArn(arn: string)
```

Validates whether a string is a valid ARN for the container resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediastore.MediaStoreResources.isValidContainerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFolderArn` <a name="isValidFolderArn" id="@cdk_utils/iam.mediastore.MediaStoreResources.isValidFolderArn"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

mediastore.MediaStoreResources.isValidFolderArn(arn: string)
```

Validates whether a string is a valid ARN for the folder resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediastore.MediaStoreResources.isValidFolderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidObjectArn` <a name="isValidObjectArn" id="@cdk_utils/iam.mediastore.MediaStoreResources.isValidObjectArn"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

mediastore.MediaStoreResources.isValidObjectArn(arn: string)
```

Validates whether a string is a valid ARN for the object resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediastore.MediaStoreResources.isValidObjectArn.parameter.arn"></a>

- *Type:* string

---

##### `object` <a name="object" id="@cdk_utils/iam.mediastore.MediaStoreResources.object"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

mediastore.MediaStoreResources.object(props: MediaStoreObjectArnProps)
```

Builds an ARN for the object resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediastore.MediaStoreResources.object.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediastore.MediaStoreObjectArnProps">MediaStoreObjectArnProps</a>

---

##### `parseContainerArn` <a name="parseContainerArn" id="@cdk_utils/iam.mediastore.MediaStoreResources.parseContainerArn"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

mediastore.MediaStoreResources.parseContainerArn(arn: string)
```

Parses a container ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediastore.MediaStoreResources.parseContainerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFolderArn` <a name="parseFolderArn" id="@cdk_utils/iam.mediastore.MediaStoreResources.parseFolderArn"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

mediastore.MediaStoreResources.parseFolderArn(arn: string)
```

Parses a folder ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediastore.MediaStoreResources.parseFolderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseObjectArn` <a name="parseObjectArn" id="@cdk_utils/iam.mediastore.MediaStoreResources.parseObjectArn"></a>

```typescript
import { mediastore } from '@cdk_utils/iam'

mediastore.MediaStoreResources.parseObjectArn(arn: string)
```

Parses a object ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediastore.MediaStoreResources.parseObjectArn.parameter.arn"></a>

- *Type:* string

---




