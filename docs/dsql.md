# `dsql` Submodule <a name="`dsql` Submodule" id="@cdk_utils/iam.dsql"></a>


## Structs <a name="Structs" id="Structs"></a>

### DsqlClusterArnComponents <a name="DsqlClusterArnComponents" id="@cdk_utils/iam.dsql.DsqlClusterArnComponents"></a>

Parsed components of a Cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dsql.DsqlClusterArnComponents.Initializer"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

const dsqlClusterArnComponents: dsql.DsqlClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dsql.DsqlClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlClusterArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dsql.DsqlClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.dsql.DsqlClusterArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dsql.DsqlClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dsql.DsqlClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DsqlClusterArnProps <a name="DsqlClusterArnProps" id="@cdk_utils/iam.dsql.DsqlClusterArnProps"></a>

Properties for building a Cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dsql.DsqlClusterArnProps.Initializer"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

const dsqlClusterArnProps: dsql.DsqlClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dsql.DsqlClusterArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.dsql.DsqlClusterArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dsql.DsqlClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dsql.DsqlClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dsql.DsqlClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DsqlStreamArnComponents <a name="DsqlStreamArnComponents" id="@cdk_utils/iam.dsql.DsqlStreamArnComponents"></a>

Parsed components of a Stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dsql.DsqlStreamArnComponents.Initializer"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

const dsqlStreamArnComponents: dsql.DsqlStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dsql.DsqlStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlStreamArnComponents.property.clusterId">clusterId</a></code> | <code>string</code> | The ClusterId component. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlStreamArnComponents.property.streamId">streamId</a></code> | <code>string</code> | The StreamId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dsql.DsqlStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdk_utils/iam.dsql.DsqlStreamArnComponents.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ClusterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dsql.DsqlStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dsql.DsqlStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdk_utils/iam.dsql.DsqlStreamArnComponents.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

The StreamId component.

---

### DsqlStreamArnProps <a name="DsqlStreamArnProps" id="@cdk_utils/iam.dsql.DsqlStreamArnProps"></a>

Properties for building a Stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dsql.DsqlStreamArnProps.Initializer"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

const dsqlStreamArnProps: dsql.DsqlStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dsql.DsqlStreamArnProps.property.clusterId">clusterId</a></code> | <code>string</code> | The ClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlStreamArnProps.property.streamId">streamId</a></code> | <code>string</code> | The StreamId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdk_utils/iam.dsql.DsqlStreamArnProps.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ClusterId component of the ARN.

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdk_utils/iam.dsql.DsqlStreamArnProps.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

The StreamId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dsql.DsqlStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dsql.DsqlStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dsql.DsqlStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DsqlActions <a name="DsqlActions" id="@cdk_utils/iam.dsql.DsqlActions"></a>

IAM action constants for the dsql service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dsql.DsqlActions.Initializer"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

new dsql.DsqlActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.actionGetBackupJob">actionGetBackupJob</a></code> | <code>string</code> | [Read] dsql:GetBackupJob. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.actionGetCluster">actionGetCluster</a></code> | <code>string</code> | [Read] dsql:GetCluster. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.actionGetClusterPolicy">actionGetClusterPolicy</a></code> | <code>string</code> | [Read] dsql:GetClusterPolicy. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.actionGetRestoreJob">actionGetRestoreJob</a></code> | <code>string</code> | [Read] dsql:GetRestoreJob. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.actionGetStream">actionGetStream</a></code> | <code>string</code> | [Read] dsql:GetStream. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.actionGetVpcEndpointServiceName">actionGetVpcEndpointServiceName</a></code> | <code>string</code> | [Read] dsql:GetVpcEndpointServiceName. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.AddPeerCluster">AddPeerCluster</a></code> | <code>string</code> | [Write] dsql:AddPeerCluster. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] dsql:CreateCluster. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.CreateStream">CreateStream</a></code> | <code>string</code> | [Write] dsql:CreateStream. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.DbConnect">DbConnect</a></code> | <code>string</code> | [Write] dsql:DbConnect. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.DbConnectAdmin">DbConnectAdmin</a></code> | <code>string</code> | [Write] dsql:DbConnectAdmin. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.DeleteCluster">DeleteCluster</a></code> | <code>string</code> | [Write] dsql:DeleteCluster. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.DeleteClusterPolicy">DeleteClusterPolicy</a></code> | <code>string</code> | [Write] dsql:DeleteClusterPolicy. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.DeleteStream">DeleteStream</a></code> | <code>string</code> | [Write] dsql:DeleteStream. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.InjectError">InjectError</a></code> | <code>string</code> | [Write] dsql:InjectError. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.ListClusters">ListClusters</a></code> | <code>string</code> | [List] dsql:ListClusters. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.ListStreams">ListStreams</a></code> | <code>string</code> | [List] dsql:ListStreams. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] dsql:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.PutClusterPolicy">PutClusterPolicy</a></code> | <code>string</code> | [Write] dsql:PutClusterPolicy. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.PutMultiRegionProperties">PutMultiRegionProperties</a></code> | <code>string</code> | [Write] dsql:PutMultiRegionProperties. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.PutWitnessRegion">PutWitnessRegion</a></code> | <code>string</code> | [Write] dsql:PutWitnessRegion. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.RemovePeerCluster">RemovePeerCluster</a></code> | <code>string</code> | [Write] dsql:RemovePeerCluster. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.StartBackupJob">StartBackupJob</a></code> | <code>string</code> | [Write] dsql:StartBackupJob. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.StartRestoreJob">StartRestoreJob</a></code> | <code>string</code> | [Write] dsql:StartRestoreJob. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.StopBackupJob">StopBackupJob</a></code> | <code>string</code> | [Write] dsql:StopBackupJob. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.StopRestoreJob">StopRestoreJob</a></code> | <code>string</code> | [Write] dsql:StopRestoreJob. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] dsql:TagResource. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] dsql:UntagResource. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.UpdateCluster">UpdateCluster</a></code> | <code>string</code> | [Write] dsql:UpdateCluster. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlActions.property.UpdateStream">UpdateStream</a></code> | <code>string</code> | [Write] dsql:UpdateStream. |

---

##### `actionGetBackupJob`<sup>Required</sup> <a name="actionGetBackupJob" id="@cdk_utils/iam.dsql.DsqlActions.property.actionGetBackupJob"></a>

```typescript
public readonly actionGetBackupJob: string;
```

- *Type:* string

[Read] dsql:GetBackupJob.

---

##### `actionGetCluster`<sup>Required</sup> <a name="actionGetCluster" id="@cdk_utils/iam.dsql.DsqlActions.property.actionGetCluster"></a>

```typescript
public readonly actionGetCluster: string;
```

- *Type:* string

[Read] dsql:GetCluster.

---

##### `actionGetClusterPolicy`<sup>Required</sup> <a name="actionGetClusterPolicy" id="@cdk_utils/iam.dsql.DsqlActions.property.actionGetClusterPolicy"></a>

```typescript
public readonly actionGetClusterPolicy: string;
```

- *Type:* string

[Read] dsql:GetClusterPolicy.

---

##### `actionGetRestoreJob`<sup>Required</sup> <a name="actionGetRestoreJob" id="@cdk_utils/iam.dsql.DsqlActions.property.actionGetRestoreJob"></a>

```typescript
public readonly actionGetRestoreJob: string;
```

- *Type:* string

[Read] dsql:GetRestoreJob.

---

##### `actionGetStream`<sup>Required</sup> <a name="actionGetStream" id="@cdk_utils/iam.dsql.DsqlActions.property.actionGetStream"></a>

```typescript
public readonly actionGetStream: string;
```

- *Type:* string

[Read] dsql:GetStream.

---

##### `actionGetVpcEndpointServiceName`<sup>Required</sup> <a name="actionGetVpcEndpointServiceName" id="@cdk_utils/iam.dsql.DsqlActions.property.actionGetVpcEndpointServiceName"></a>

```typescript
public readonly actionGetVpcEndpointServiceName: string;
```

- *Type:* string

[Read] dsql:GetVpcEndpointServiceName.

---

##### `AddPeerCluster`<sup>Required</sup> <a name="AddPeerCluster" id="@cdk_utils/iam.dsql.DsqlActions.property.AddPeerCluster"></a>

```typescript
public readonly AddPeerCluster: string;
```

- *Type:* string

[Write] dsql:AddPeerCluster.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.dsql.DsqlActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.dsql.DsqlActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.dsql.DsqlActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.dsql.DsqlActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.dsql.DsqlActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.dsql.DsqlActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] dsql:CreateCluster.

---

##### `CreateStream`<sup>Required</sup> <a name="CreateStream" id="@cdk_utils/iam.dsql.DsqlActions.property.CreateStream"></a>

```typescript
public readonly CreateStream: string;
```

- *Type:* string

[Write] dsql:CreateStream.

---

##### `DbConnect`<sup>Required</sup> <a name="DbConnect" id="@cdk_utils/iam.dsql.DsqlActions.property.DbConnect"></a>

```typescript
public readonly DbConnect: string;
```

- *Type:* string

[Write] dsql:DbConnect.

---

##### `DbConnectAdmin`<sup>Required</sup> <a name="DbConnectAdmin" id="@cdk_utils/iam.dsql.DsqlActions.property.DbConnectAdmin"></a>

```typescript
public readonly DbConnectAdmin: string;
```

- *Type:* string

[Write] dsql:DbConnectAdmin.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.dsql.DsqlActions.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string;
```

- *Type:* string

[Write] dsql:DeleteCluster.

---

##### `DeleteClusterPolicy`<sup>Required</sup> <a name="DeleteClusterPolicy" id="@cdk_utils/iam.dsql.DsqlActions.property.DeleteClusterPolicy"></a>

```typescript
public readonly DeleteClusterPolicy: string;
```

- *Type:* string

[Write] dsql:DeleteClusterPolicy.

---

##### `DeleteStream`<sup>Required</sup> <a name="DeleteStream" id="@cdk_utils/iam.dsql.DsqlActions.property.DeleteStream"></a>

```typescript
public readonly DeleteStream: string;
```

- *Type:* string

[Write] dsql:DeleteStream.

---

##### `InjectError`<sup>Required</sup> <a name="InjectError" id="@cdk_utils/iam.dsql.DsqlActions.property.InjectError"></a>

```typescript
public readonly InjectError: string;
```

- *Type:* string

[Write] dsql:InjectError.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.dsql.DsqlActions.property.ListClusters"></a>

```typescript
public readonly ListClusters: string;
```

- *Type:* string

[List] dsql:ListClusters.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.dsql.DsqlActions.property.ListStreams"></a>

```typescript
public readonly ListStreams: string;
```

- *Type:* string

[List] dsql:ListStreams.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.dsql.DsqlActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] dsql:ListTagsForResource.

---

##### `PutClusterPolicy`<sup>Required</sup> <a name="PutClusterPolicy" id="@cdk_utils/iam.dsql.DsqlActions.property.PutClusterPolicy"></a>

```typescript
public readonly PutClusterPolicy: string;
```

- *Type:* string

[Write] dsql:PutClusterPolicy.

---

##### `PutMultiRegionProperties`<sup>Required</sup> <a name="PutMultiRegionProperties" id="@cdk_utils/iam.dsql.DsqlActions.property.PutMultiRegionProperties"></a>

```typescript
public readonly PutMultiRegionProperties: string;
```

- *Type:* string

[Write] dsql:PutMultiRegionProperties.

---

##### `PutWitnessRegion`<sup>Required</sup> <a name="PutWitnessRegion" id="@cdk_utils/iam.dsql.DsqlActions.property.PutWitnessRegion"></a>

```typescript
public readonly PutWitnessRegion: string;
```

- *Type:* string

[Write] dsql:PutWitnessRegion.

---

##### `RemovePeerCluster`<sup>Required</sup> <a name="RemovePeerCluster" id="@cdk_utils/iam.dsql.DsqlActions.property.RemovePeerCluster"></a>

```typescript
public readonly RemovePeerCluster: string;
```

- *Type:* string

[Write] dsql:RemovePeerCluster.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.dsql.DsqlActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartBackupJob`<sup>Required</sup> <a name="StartBackupJob" id="@cdk_utils/iam.dsql.DsqlActions.property.StartBackupJob"></a>

```typescript
public readonly StartBackupJob: string;
```

- *Type:* string

[Write] dsql:StartBackupJob.

---

##### `StartRestoreJob`<sup>Required</sup> <a name="StartRestoreJob" id="@cdk_utils/iam.dsql.DsqlActions.property.StartRestoreJob"></a>

```typescript
public readonly StartRestoreJob: string;
```

- *Type:* string

[Write] dsql:StartRestoreJob.

---

##### `StopBackupJob`<sup>Required</sup> <a name="StopBackupJob" id="@cdk_utils/iam.dsql.DsqlActions.property.StopBackupJob"></a>

```typescript
public readonly StopBackupJob: string;
```

- *Type:* string

[Write] dsql:StopBackupJob.

---

##### `StopRestoreJob`<sup>Required</sup> <a name="StopRestoreJob" id="@cdk_utils/iam.dsql.DsqlActions.property.StopRestoreJob"></a>

```typescript
public readonly StopRestoreJob: string;
```

- *Type:* string

[Write] dsql:StopRestoreJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.dsql.DsqlActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] dsql:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.dsql.DsqlActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] dsql:UntagResource.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.dsql.DsqlActions.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string;
```

- *Type:* string

[Write] dsql:UpdateCluster.

---

##### `UpdateStream`<sup>Required</sup> <a name="UpdateStream" id="@cdk_utils/iam.dsql.DsqlActions.property.UpdateStream"></a>

```typescript
public readonly UpdateStream: string;
```

- *Type:* string

[Write] dsql:UpdateStream.

---

### DsqlConditions <a name="DsqlConditions" id="@cdk_utils/iam.dsql.DsqlConditions"></a>

Condition key constants and builders for dsql.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dsql.DsqlConditions.Initializer"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

new dsql.DsqlConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.fisActionId">fisActionId</a></code> | Generates a condition block for `dsql:FisActionId`. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.fisTargetArns">fisTargetArns</a></code> | Generates a condition block for `dsql:FisTargetArns`. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.witnessRegion">witnessRegion</a></code> | Generates a condition block for `dsql:WitnessRegion`. |

---

##### `fisActionId` <a name="fisActionId" id="@cdk_utils/iam.dsql.DsqlConditions.fisActionId"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

dsql.DsqlConditions.fisActionId(value: string)
```

Generates a condition block for `dsql:FisActionId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dsql.DsqlConditions.fisActionId.parameter.value"></a>

- *Type:* string

---

##### `fisTargetArns` <a name="fisTargetArns" id="@cdk_utils/iam.dsql.DsqlConditions.fisTargetArns"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

dsql.DsqlConditions.fisTargetArns(values: string[])
```

Generates a condition block for `dsql:FisTargetArns`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dsql.DsqlConditions.fisTargetArns.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.dsql.DsqlConditions.requestTag"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

dsql.DsqlConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dsql.DsqlConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.dsql.DsqlConditions.resourceTag"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

dsql.DsqlConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dsql.DsqlConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.dsql.DsqlConditions.tagKeys"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

dsql.DsqlConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dsql.DsqlConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `witnessRegion` <a name="witnessRegion" id="@cdk_utils/iam.dsql.DsqlConditions.witnessRegion"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

dsql.DsqlConditions.witnessRegion(value: string)
```

Generates a condition block for `dsql:WitnessRegion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dsql.DsqlConditions.witnessRegion.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.CreateClusterConditionKeys">CreateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCluster action. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.CreateStreamConditionKeys">CreateStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStream action. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.FIS_ACTION_ID">FIS_ACTION_ID</a></code> | <code>string</code> | Condition key: dsql:FisActionId (String). |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.FIS_TARGET_ARNS">FIS_TARGET_ARNS</a></code> | <code>string</code> | Condition key: dsql:FisTargetArns (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.InjectErrorConditionKeys">InjectErrorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InjectError action. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.PutWitnessRegionConditionKeys">PutWitnessRegionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutWitnessRegion action. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.UpdateClusterConditionKeys">UpdateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCluster action. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlConditions.property.WITNESS_REGION">WITNESS_REGION</a></code> | <code>string</code> | Condition key: dsql:WitnessRegion (String). |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.dsql.DsqlConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.dsql.DsqlConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.dsql.DsqlConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateClusterConditionKeys`<sup>Required</sup> <a name="CreateClusterConditionKeys" id="@cdk_utils/iam.dsql.DsqlConditions.property.CreateClusterConditionKeys"></a>

```typescript
public readonly CreateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCluster action.

---

##### `CreateStreamConditionKeys`<sup>Required</sup> <a name="CreateStreamConditionKeys" id="@cdk_utils/iam.dsql.DsqlConditions.property.CreateStreamConditionKeys"></a>

```typescript
public readonly CreateStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStream action.

---

##### `FIS_ACTION_ID`<sup>Required</sup> <a name="FIS_ACTION_ID" id="@cdk_utils/iam.dsql.DsqlConditions.property.FIS_ACTION_ID"></a>

```typescript
public readonly FIS_ACTION_ID: string;
```

- *Type:* string

Condition key: dsql:FisActionId (String).

---

##### `FIS_TARGET_ARNS`<sup>Required</sup> <a name="FIS_TARGET_ARNS" id="@cdk_utils/iam.dsql.DsqlConditions.property.FIS_TARGET_ARNS"></a>

```typescript
public readonly FIS_TARGET_ARNS: string;
```

- *Type:* string

Condition key: dsql:FisTargetArns (ArrayOfARN).

---

##### `InjectErrorConditionKeys`<sup>Required</sup> <a name="InjectErrorConditionKeys" id="@cdk_utils/iam.dsql.DsqlConditions.property.InjectErrorConditionKeys"></a>

```typescript
public readonly InjectErrorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InjectError action.

---

##### `PutWitnessRegionConditionKeys`<sup>Required</sup> <a name="PutWitnessRegionConditionKeys" id="@cdk_utils/iam.dsql.DsqlConditions.property.PutWitnessRegionConditionKeys"></a>

```typescript
public readonly PutWitnessRegionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutWitnessRegion action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.dsql.DsqlConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.dsql.DsqlConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateClusterConditionKeys`<sup>Required</sup> <a name="UpdateClusterConditionKeys" id="@cdk_utils/iam.dsql.DsqlConditions.property.UpdateClusterConditionKeys"></a>

```typescript
public readonly UpdateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCluster action.

---

##### `WITNESS_REGION`<sup>Required</sup> <a name="WITNESS_REGION" id="@cdk_utils/iam.dsql.DsqlConditions.property.WITNESS_REGION"></a>

```typescript
public readonly WITNESS_REGION: string;
```

- *Type:* string

Condition key: dsql:WitnessRegion (String).

---

### DsqlOperations <a name="DsqlOperations" id="@cdk_utils/iam.dsql.DsqlOperations"></a>

API operation to required IAM actions mapping for dsql.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dsql.DsqlOperations.Initializer"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

new dsql.DsqlOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.CreateStream">CreateStream</a></code> | <code>string[]</code> | IAM actions required for the CreateStream API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.DeleteCluster">DeleteCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCluster API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.DeleteClusterPolicy">DeleteClusterPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteClusterPolicy API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.DeleteStream">DeleteStream</a></code> | <code>string[]</code> | IAM actions required for the DeleteStream API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.ListClusters">ListClusters</a></code> | <code>string[]</code> | IAM actions required for the ListClusters API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.ListStreams">ListStreams</a></code> | <code>string[]</code> | IAM actions required for the ListStreams API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.opGetCluster">opGetCluster</a></code> | <code>string[]</code> | IAM actions required for the GetCluster API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.opGetClusterPolicy">opGetClusterPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetClusterPolicy API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.opGetStream">opGetStream</a></code> | <code>string[]</code> | IAM actions required for the GetStream API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.opGetVpcEndpointServiceName">opGetVpcEndpointServiceName</a></code> | <code>string[]</code> | IAM actions required for the GetVpcEndpointServiceName API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.PutClusterPolicy">PutClusterPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutClusterPolicy API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlOperations.property.UpdateCluster">UpdateCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateCluster API call. |

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.dsql.DsqlOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateStream`<sup>Required</sup> <a name="CreateStream" id="@cdk_utils/iam.dsql.DsqlOperations.property.CreateStream"></a>

```typescript
public readonly CreateStream: string[];
```

- *Type:* string[]

IAM actions required for the CreateStream API call.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.dsql.DsqlOperations.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCluster API call.

---

##### `DeleteClusterPolicy`<sup>Required</sup> <a name="DeleteClusterPolicy" id="@cdk_utils/iam.dsql.DsqlOperations.property.DeleteClusterPolicy"></a>

```typescript
public readonly DeleteClusterPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteClusterPolicy API call.

---

##### `DeleteStream`<sup>Required</sup> <a name="DeleteStream" id="@cdk_utils/iam.dsql.DsqlOperations.property.DeleteStream"></a>

```typescript
public readonly DeleteStream: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStream API call.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.dsql.DsqlOperations.property.ListClusters"></a>

```typescript
public readonly ListClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListClusters API call.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.dsql.DsqlOperations.property.ListStreams"></a>

```typescript
public readonly ListStreams: string[];
```

- *Type:* string[]

IAM actions required for the ListStreams API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.dsql.DsqlOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetCluster`<sup>Required</sup> <a name="opGetCluster" id="@cdk_utils/iam.dsql.DsqlOperations.property.opGetCluster"></a>

```typescript
public readonly opGetCluster: string[];
```

- *Type:* string[]

IAM actions required for the GetCluster API call.

---

##### `opGetClusterPolicy`<sup>Required</sup> <a name="opGetClusterPolicy" id="@cdk_utils/iam.dsql.DsqlOperations.property.opGetClusterPolicy"></a>

```typescript
public readonly opGetClusterPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetClusterPolicy API call.

---

##### `opGetStream`<sup>Required</sup> <a name="opGetStream" id="@cdk_utils/iam.dsql.DsqlOperations.property.opGetStream"></a>

```typescript
public readonly opGetStream: string[];
```

- *Type:* string[]

IAM actions required for the GetStream API call.

---

##### `opGetVpcEndpointServiceName`<sup>Required</sup> <a name="opGetVpcEndpointServiceName" id="@cdk_utils/iam.dsql.DsqlOperations.property.opGetVpcEndpointServiceName"></a>

```typescript
public readonly opGetVpcEndpointServiceName: string[];
```

- *Type:* string[]

IAM actions required for the GetVpcEndpointServiceName API call.

---

##### `PutClusterPolicy`<sup>Required</sup> <a name="PutClusterPolicy" id="@cdk_utils/iam.dsql.DsqlOperations.property.PutClusterPolicy"></a>

```typescript
public readonly PutClusterPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutClusterPolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.dsql.DsqlOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.dsql.DsqlOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.dsql.DsqlOperations.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCluster API call.

---

### DsqlResources <a name="DsqlResources" id="@cdk_utils/iam.dsql.DsqlResources"></a>

ARN builders, validators, and parsers for dsql resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dsql.DsqlResources.Initializer"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

new dsql.DsqlResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.dsql.DsqlResources.cluster">cluster</a></code> | Builds an ARN for the Cluster resource. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the Cluster resource. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlResources.isValidStreamArn">isValidStreamArn</a></code> | Validates whether a string is a valid ARN for the Stream resource. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlResources.parseClusterArn">parseClusterArn</a></code> | Parses a Cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlResources.parseStreamArn">parseStreamArn</a></code> | Parses a Stream ARN into its components. |
| <code><a href="#@cdk_utils/iam.dsql.DsqlResources.stream">stream</a></code> | Builds an ARN for the Stream resource. |

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.dsql.DsqlResources.cluster"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

dsql.DsqlResources.cluster(props: DsqlClusterArnProps)
```

Builds an ARN for the Cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dsql.DsqlResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dsql.DsqlClusterArnProps">DsqlClusterArnProps</a>

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.dsql.DsqlResources.isValidClusterArn"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

dsql.DsqlResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the Cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dsql.DsqlResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamArn` <a name="isValidStreamArn" id="@cdk_utils/iam.dsql.DsqlResources.isValidStreamArn"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

dsql.DsqlResources.isValidStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the Stream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dsql.DsqlResources.isValidStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.dsql.DsqlResources.parseClusterArn"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

dsql.DsqlResources.parseClusterArn(arn: string)
```

Parses a Cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dsql.DsqlResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamArn` <a name="parseStreamArn" id="@cdk_utils/iam.dsql.DsqlResources.parseStreamArn"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

dsql.DsqlResources.parseStreamArn(arn: string)
```

Parses a Stream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dsql.DsqlResources.parseStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `stream` <a name="stream" id="@cdk_utils/iam.dsql.DsqlResources.stream"></a>

```typescript
import { dsql } from '@cdk_utils/iam'

dsql.DsqlResources.stream(props: DsqlStreamArnProps)
```

Builds an ARN for the Stream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dsql.DsqlResources.stream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dsql.DsqlStreamArnProps">DsqlStreamArnProps</a>

---




