# `docdb_elastic` Submodule <a name="`docdb_elastic` Submodule" id="@cdk_utils/iam.docdb_elastic"></a>


## Structs <a name="Structs" id="Structs"></a>

### DocdbElasticClusterArnComponents <a name="DocdbElasticClusterArnComponents" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnComponents.Initializer"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

const docdbElasticClusterArnComponents: docdb_elastic.DocdbElasticClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DocdbElasticClusterArnProps <a name="DocdbElasticClusterArnProps" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnProps.Initializer"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

const docdbElasticClusterArnProps: docdb_elastic.DocdbElasticClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DocdbElasticClusterSnapshotArnComponents <a name="DocdbElasticClusterSnapshotArnComponents" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnComponents"></a>

Parsed components of a cluster-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnComponents.Initializer"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

const docdbElasticClusterSnapshotArnComponents: docdb_elastic.DocdbElasticClusterSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DocdbElasticClusterSnapshotArnProps <a name="DocdbElasticClusterSnapshotArnProps" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnProps"></a>

Properties for building a cluster-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnProps.Initializer"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

const docdbElasticClusterSnapshotArnProps: docdb_elastic.DocdbElasticClusterSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbElasticActions <a name="DocdbElasticActions" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions"></a>

IAM action constants for the docdb-elastic service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.Initializer"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

new docdb_elastic.DocdbElasticActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.actionGetCluster">actionGetCluster</a></code> | <code>string</code> | [Read] docdb-elastic:GetCluster. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.actionGetClusterSnapshot">actionGetClusterSnapshot</a></code> | <code>string</code> | [Read] docdb-elastic:GetClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.actionGetPendingMaintenanceAction">actionGetPendingMaintenanceAction</a></code> | <code>string</code> | [Read] docdb-elastic:GetPendingMaintenanceAction. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.ApplyPendingMaintenanceAction">ApplyPendingMaintenanceAction</a></code> | <code>string</code> | [Write] docdb-elastic:ApplyPendingMaintenanceAction. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.CopyClusterSnapshot">CopyClusterSnapshot</a></code> | <code>string</code> | [Write] docdb-elastic:CopyClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] docdb-elastic:CreateCluster. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.CreateClusterSnapshot">CreateClusterSnapshot</a></code> | <code>string</code> | [Write] docdb-elastic:CreateClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.DeleteCluster">DeleteCluster</a></code> | <code>string</code> | [Write] docdb-elastic:DeleteCluster. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.DeleteClusterSnapshot">DeleteClusterSnapshot</a></code> | <code>string</code> | [Write] docdb-elastic:DeleteClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.ListClusters">ListClusters</a></code> | <code>string</code> | [List] docdb-elastic:ListClusters. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.ListClusterSnapshots">ListClusterSnapshots</a></code> | <code>string</code> | [List] docdb-elastic:ListClusterSnapshots. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.ListPendingMaintenanceActions">ListPendingMaintenanceActions</a></code> | <code>string</code> | [List] docdb-elastic:ListPendingMaintenanceActions. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] docdb-elastic:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.RestoreClusterFromSnapshot">RestoreClusterFromSnapshot</a></code> | <code>string</code> | [Write] docdb-elastic:RestoreClusterFromSnapshot. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.StartCluster">StartCluster</a></code> | <code>string</code> | [Write] docdb-elastic:StartCluster. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.StopCluster">StopCluster</a></code> | <code>string</code> | [Write] docdb-elastic:StopCluster. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] docdb-elastic:TagResource. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] docdb-elastic:UntagResource. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.UpdateCluster">UpdateCluster</a></code> | <code>string</code> | [Write] docdb-elastic:UpdateCluster. |

---

##### `actionGetCluster`<sup>Required</sup> <a name="actionGetCluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.actionGetCluster"></a>

```typescript
public readonly actionGetCluster: string;
```

- *Type:* string

[Read] docdb-elastic:GetCluster.

---

##### `actionGetClusterSnapshot`<sup>Required</sup> <a name="actionGetClusterSnapshot" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.actionGetClusterSnapshot"></a>

```typescript
public readonly actionGetClusterSnapshot: string;
```

- *Type:* string

[Read] docdb-elastic:GetClusterSnapshot.

---

##### `actionGetPendingMaintenanceAction`<sup>Required</sup> <a name="actionGetPendingMaintenanceAction" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.actionGetPendingMaintenanceAction"></a>

```typescript
public readonly actionGetPendingMaintenanceAction: string;
```

- *Type:* string

[Read] docdb-elastic:GetPendingMaintenanceAction.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApplyPendingMaintenanceAction`<sup>Required</sup> <a name="ApplyPendingMaintenanceAction" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.ApplyPendingMaintenanceAction"></a>

```typescript
public readonly ApplyPendingMaintenanceAction: string;
```

- *Type:* string

[Write] docdb-elastic:ApplyPendingMaintenanceAction.

---

##### `CopyClusterSnapshot`<sup>Required</sup> <a name="CopyClusterSnapshot" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.CopyClusterSnapshot"></a>

```typescript
public readonly CopyClusterSnapshot: string;
```

- *Type:* string

[Write] docdb-elastic:CopyClusterSnapshot.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] docdb-elastic:CreateCluster.

---

##### `CreateClusterSnapshot`<sup>Required</sup> <a name="CreateClusterSnapshot" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.CreateClusterSnapshot"></a>

```typescript
public readonly CreateClusterSnapshot: string;
```

- *Type:* string

[Write] docdb-elastic:CreateClusterSnapshot.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string;
```

- *Type:* string

[Write] docdb-elastic:DeleteCluster.

---

##### `DeleteClusterSnapshot`<sup>Required</sup> <a name="DeleteClusterSnapshot" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.DeleteClusterSnapshot"></a>

```typescript
public readonly DeleteClusterSnapshot: string;
```

- *Type:* string

[Write] docdb-elastic:DeleteClusterSnapshot.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.ListClusters"></a>

```typescript
public readonly ListClusters: string;
```

- *Type:* string

[List] docdb-elastic:ListClusters.

---

##### `ListClusterSnapshots`<sup>Required</sup> <a name="ListClusterSnapshots" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.ListClusterSnapshots"></a>

```typescript
public readonly ListClusterSnapshots: string;
```

- *Type:* string

[List] docdb-elastic:ListClusterSnapshots.

---

##### `ListPendingMaintenanceActions`<sup>Required</sup> <a name="ListPendingMaintenanceActions" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.ListPendingMaintenanceActions"></a>

```typescript
public readonly ListPendingMaintenanceActions: string;
```

- *Type:* string

[List] docdb-elastic:ListPendingMaintenanceActions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] docdb-elastic:ListTagsForResource.

---

##### `RestoreClusterFromSnapshot`<sup>Required</sup> <a name="RestoreClusterFromSnapshot" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.RestoreClusterFromSnapshot"></a>

```typescript
public readonly RestoreClusterFromSnapshot: string;
```

- *Type:* string

[Write] docdb-elastic:RestoreClusterFromSnapshot.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartCluster`<sup>Required</sup> <a name="StartCluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.StartCluster"></a>

```typescript
public readonly StartCluster: string;
```

- *Type:* string

[Write] docdb-elastic:StartCluster.

---

##### `StopCluster`<sup>Required</sup> <a name="StopCluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.StopCluster"></a>

```typescript
public readonly StopCluster: string;
```

- *Type:* string

[Write] docdb-elastic:StopCluster.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] docdb-elastic:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] docdb-elastic:UntagResource.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticActions.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string;
```

- *Type:* string

[Write] docdb-elastic:UpdateCluster.

---

### DocdbElasticConditions <a name="DocdbElasticConditions" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions"></a>

Condition key constants and builders for docdb-elastic.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.Initializer"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

new docdb_elastic.DocdbElasticConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.requestTag"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

docdb_elastic.DocdbElasticConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.resourceTag"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

docdb_elastic.DocdbElasticConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.tagKeys"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

docdb_elastic.DocdbElasticConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.actionGetClusterConditionKeys">actionGetClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCluster action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.actionGetClusterSnapshotConditionKeys">actionGetClusterSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetClusterSnapshot action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.actionGetPendingMaintenanceActionConditionKeys">actionGetPendingMaintenanceActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPendingMaintenanceAction action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.ApplyPendingMaintenanceActionConditionKeys">ApplyPendingMaintenanceActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ApplyPendingMaintenanceAction action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.CopyClusterSnapshotConditionKeys">CopyClusterSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyClusterSnapshot action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.CreateClusterConditionKeys">CreateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCluster action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.CreateClusterSnapshotConditionKeys">CreateClusterSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateClusterSnapshot action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.DeleteClusterConditionKeys">DeleteClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCluster action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.DeleteClusterSnapshotConditionKeys">DeleteClusterSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteClusterSnapshot action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.ListPendingMaintenanceActionsConditionKeys">ListPendingMaintenanceActionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListPendingMaintenanceActions action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.RestoreClusterFromSnapshotConditionKeys">RestoreClusterFromSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreClusterFromSnapshot action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.StartClusterConditionKeys">StartClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartCluster action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.StopClusterConditionKeys">StopClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopCluster action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.UpdateClusterConditionKeys">UpdateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCluster action. |

---

##### `actionGetClusterConditionKeys`<sup>Required</sup> <a name="actionGetClusterConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.actionGetClusterConditionKeys"></a>

```typescript
public readonly actionGetClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCluster action.

---

##### `actionGetClusterSnapshotConditionKeys`<sup>Required</sup> <a name="actionGetClusterSnapshotConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.actionGetClusterSnapshotConditionKeys"></a>

```typescript
public readonly actionGetClusterSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetClusterSnapshot action.

---

##### `actionGetPendingMaintenanceActionConditionKeys`<sup>Required</sup> <a name="actionGetPendingMaintenanceActionConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.actionGetPendingMaintenanceActionConditionKeys"></a>

```typescript
public readonly actionGetPendingMaintenanceActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPendingMaintenanceAction action.

---

##### `ApplyPendingMaintenanceActionConditionKeys`<sup>Required</sup> <a name="ApplyPendingMaintenanceActionConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.ApplyPendingMaintenanceActionConditionKeys"></a>

```typescript
public readonly ApplyPendingMaintenanceActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ApplyPendingMaintenanceAction action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CopyClusterSnapshotConditionKeys`<sup>Required</sup> <a name="CopyClusterSnapshotConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.CopyClusterSnapshotConditionKeys"></a>

```typescript
public readonly CopyClusterSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyClusterSnapshot action.

---

##### `CreateClusterConditionKeys`<sup>Required</sup> <a name="CreateClusterConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.CreateClusterConditionKeys"></a>

```typescript
public readonly CreateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCluster action.

---

##### `CreateClusterSnapshotConditionKeys`<sup>Required</sup> <a name="CreateClusterSnapshotConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.CreateClusterSnapshotConditionKeys"></a>

```typescript
public readonly CreateClusterSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateClusterSnapshot action.

---

##### `DeleteClusterConditionKeys`<sup>Required</sup> <a name="DeleteClusterConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.DeleteClusterConditionKeys"></a>

```typescript
public readonly DeleteClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCluster action.

---

##### `DeleteClusterSnapshotConditionKeys`<sup>Required</sup> <a name="DeleteClusterSnapshotConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.DeleteClusterSnapshotConditionKeys"></a>

```typescript
public readonly DeleteClusterSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteClusterSnapshot action.

---

##### `ListPendingMaintenanceActionsConditionKeys`<sup>Required</sup> <a name="ListPendingMaintenanceActionsConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.ListPendingMaintenanceActionsConditionKeys"></a>

```typescript
public readonly ListPendingMaintenanceActionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListPendingMaintenanceActions action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `RestoreClusterFromSnapshotConditionKeys`<sup>Required</sup> <a name="RestoreClusterFromSnapshotConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.RestoreClusterFromSnapshotConditionKeys"></a>

```typescript
public readonly RestoreClusterFromSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreClusterFromSnapshot action.

---

##### `StartClusterConditionKeys`<sup>Required</sup> <a name="StartClusterConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.StartClusterConditionKeys"></a>

```typescript
public readonly StartClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartCluster action.

---

##### `StopClusterConditionKeys`<sup>Required</sup> <a name="StopClusterConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.StopClusterConditionKeys"></a>

```typescript
public readonly StopClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopCluster action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateClusterConditionKeys`<sup>Required</sup> <a name="UpdateClusterConditionKeys" id="@cdk_utils/iam.docdb_elastic.DocdbElasticConditions.property.UpdateClusterConditionKeys"></a>

```typescript
public readonly UpdateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCluster action.

---

### DocdbElasticOperations <a name="DocdbElasticOperations" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations"></a>

API operation to required IAM actions mapping for docdb-elastic.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.Initializer"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

new docdb_elastic.DocdbElasticOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.ApplyPendingMaintenanceAction">ApplyPendingMaintenanceAction</a></code> | <code>string[]</code> | IAM actions required for the ApplyPendingMaintenanceAction API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.CopyClusterSnapshot">CopyClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CopyClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.CreateClusterSnapshot">CreateClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.DeleteCluster">DeleteCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCluster API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.DeleteClusterSnapshot">DeleteClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.ListClusters">ListClusters</a></code> | <code>string[]</code> | IAM actions required for the ListClusters API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.ListClusterSnapshots">ListClusterSnapshots</a></code> | <code>string[]</code> | IAM actions required for the ListClusterSnapshots API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.ListPendingMaintenanceActions">ListPendingMaintenanceActions</a></code> | <code>string[]</code> | IAM actions required for the ListPendingMaintenanceActions API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.opGetCluster">opGetCluster</a></code> | <code>string[]</code> | IAM actions required for the GetCluster API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.opGetClusterSnapshot">opGetClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the GetClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.opGetPendingMaintenanceAction">opGetPendingMaintenanceAction</a></code> | <code>string[]</code> | IAM actions required for the GetPendingMaintenanceAction API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.RestoreClusterFromSnapshot">RestoreClusterFromSnapshot</a></code> | <code>string[]</code> | IAM actions required for the RestoreClusterFromSnapshot API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.StartCluster">StartCluster</a></code> | <code>string[]</code> | IAM actions required for the StartCluster API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.StopCluster">StopCluster</a></code> | <code>string[]</code> | IAM actions required for the StopCluster API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.UpdateCluster">UpdateCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateCluster API call. |

---

##### `ApplyPendingMaintenanceAction`<sup>Required</sup> <a name="ApplyPendingMaintenanceAction" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.ApplyPendingMaintenanceAction"></a>

```typescript
public readonly ApplyPendingMaintenanceAction: string[];
```

- *Type:* string[]

IAM actions required for the ApplyPendingMaintenanceAction API call.

---

##### `CopyClusterSnapshot`<sup>Required</sup> <a name="CopyClusterSnapshot" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.CopyClusterSnapshot"></a>

```typescript
public readonly CopyClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CopyClusterSnapshot API call.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateClusterSnapshot`<sup>Required</sup> <a name="CreateClusterSnapshot" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.CreateClusterSnapshot"></a>

```typescript
public readonly CreateClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateClusterSnapshot API call.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCluster API call.

---

##### `DeleteClusterSnapshot`<sup>Required</sup> <a name="DeleteClusterSnapshot" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.DeleteClusterSnapshot"></a>

```typescript
public readonly DeleteClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteClusterSnapshot API call.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.ListClusters"></a>

```typescript
public readonly ListClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListClusters API call.

---

##### `ListClusterSnapshots`<sup>Required</sup> <a name="ListClusterSnapshots" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.ListClusterSnapshots"></a>

```typescript
public readonly ListClusterSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the ListClusterSnapshots API call.

---

##### `ListPendingMaintenanceActions`<sup>Required</sup> <a name="ListPendingMaintenanceActions" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.ListPendingMaintenanceActions"></a>

```typescript
public readonly ListPendingMaintenanceActions: string[];
```

- *Type:* string[]

IAM actions required for the ListPendingMaintenanceActions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetCluster`<sup>Required</sup> <a name="opGetCluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.opGetCluster"></a>

```typescript
public readonly opGetCluster: string[];
```

- *Type:* string[]

IAM actions required for the GetCluster API call.

---

##### `opGetClusterSnapshot`<sup>Required</sup> <a name="opGetClusterSnapshot" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.opGetClusterSnapshot"></a>

```typescript
public readonly opGetClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the GetClusterSnapshot API call.

---

##### `opGetPendingMaintenanceAction`<sup>Required</sup> <a name="opGetPendingMaintenanceAction" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.opGetPendingMaintenanceAction"></a>

```typescript
public readonly opGetPendingMaintenanceAction: string[];
```

- *Type:* string[]

IAM actions required for the GetPendingMaintenanceAction API call.

---

##### `RestoreClusterFromSnapshot`<sup>Required</sup> <a name="RestoreClusterFromSnapshot" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.RestoreClusterFromSnapshot"></a>

```typescript
public readonly RestoreClusterFromSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the RestoreClusterFromSnapshot API call.

---

##### `StartCluster`<sup>Required</sup> <a name="StartCluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.StartCluster"></a>

```typescript
public readonly StartCluster: string[];
```

- *Type:* string[]

IAM actions required for the StartCluster API call.

---

##### `StopCluster`<sup>Required</sup> <a name="StopCluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.StopCluster"></a>

```typescript
public readonly StopCluster: string[];
```

- *Type:* string[]

IAM actions required for the StopCluster API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticOperations.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCluster API call.

---

### DocdbElasticResources <a name="DocdbElasticResources" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources"></a>

ARN builders, validators, and parsers for docdb-elastic resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.Initializer"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

new docdb_elastic.DocdbElasticResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticResources.clusterSnapshot">clusterSnapshot</a></code> | Builds an ARN for the cluster-snapshot resource. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticResources.isValidClusterSnapshotArn">isValidClusterSnapshotArn</a></code> | Validates whether a string is a valid ARN for the cluster-snapshot resource. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticResources.parseClusterSnapshotArn">parseClusterSnapshotArn</a></code> | Parses a cluster-snapshot ARN into its components. |

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.cluster"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

docdb_elastic.DocdbElasticResources.cluster(props: DocdbElasticClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterArnProps">DocdbElasticClusterArnProps</a>

---

##### `clusterSnapshot` <a name="clusterSnapshot" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.clusterSnapshot"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

docdb_elastic.DocdbElasticResources.clusterSnapshot(props: DocdbElasticClusterSnapshotArnProps)
```

Builds an ARN for the cluster-snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.clusterSnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.docdb_elastic.DocdbElasticClusterSnapshotArnProps">DocdbElasticClusterSnapshotArnProps</a>

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.isValidClusterArn"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

docdb_elastic.DocdbElasticResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterSnapshotArn` <a name="isValidClusterSnapshotArn" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.isValidClusterSnapshotArn"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

docdb_elastic.DocdbElasticResources.isValidClusterSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster-snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.isValidClusterSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.parseClusterArn"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

docdb_elastic.DocdbElasticResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterSnapshotArn` <a name="parseClusterSnapshotArn" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.parseClusterSnapshotArn"></a>

```typescript
import { docdb_elastic } from '@cdk_utils/iam'

docdb_elastic.DocdbElasticResources.parseClusterSnapshotArn(arn: string)
```

Parses a cluster-snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.docdb_elastic.DocdbElasticResources.parseClusterSnapshotArn.parameter.arn"></a>

- *Type:* string

---




