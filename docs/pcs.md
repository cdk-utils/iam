# `pcs` Submodule <a name="`pcs` Submodule" id="@cdk_utils/iam.pcs"></a>


## Structs <a name="Structs" id="Structs"></a>

### PcsClusterArnComponents <a name="PcsClusterArnComponents" id="@cdk_utils/iam.pcs.PcsClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pcs.PcsClusterArnComponents.Initializer"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

const pcsClusterArnComponents: pcs.PcsClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pcs.PcsClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pcs.PcsClusterArnComponents.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | The ClusterIdentifier component. |
| <code><a href="#@cdk_utils/iam.pcs.PcsClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pcs.PcsClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.pcs.PcsClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdk_utils/iam.pcs.PcsClusterArnComponents.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

The ClusterIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.pcs.PcsClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.pcs.PcsClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PcsClusterArnProps <a name="PcsClusterArnProps" id="@cdk_utils/iam.pcs.PcsClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pcs.PcsClusterArnProps.Initializer"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

const pcsClusterArnProps: pcs.PcsClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pcs.PcsClusterArnProps.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | The ClusterIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.pcs.PcsClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pcs.PcsClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pcs.PcsClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdk_utils/iam.pcs.PcsClusterArnProps.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

The ClusterIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.pcs.PcsClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.pcs.PcsClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.pcs.PcsClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PcsComputenodegroupArnComponents <a name="PcsComputenodegroupArnComponents" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnComponents"></a>

Parsed components of a computenodegroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnComponents.Initializer"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

const pcsComputenodegroupArnComponents: pcs.PcsComputenodegroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pcs.PcsComputenodegroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pcs.PcsComputenodegroupArnComponents.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | The ClusterIdentifier component. |
| <code><a href="#@cdk_utils/iam.pcs.PcsComputenodegroupArnComponents.property.computeNodeGroupIdentifier">computeNodeGroupIdentifier</a></code> | <code>string</code> | The ComputeNodeGroupIdentifier component. |
| <code><a href="#@cdk_utils/iam.pcs.PcsComputenodegroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pcs.PcsComputenodegroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnComponents.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

The ClusterIdentifier component.

---

##### `computeNodeGroupIdentifier`<sup>Required</sup> <a name="computeNodeGroupIdentifier" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnComponents.property.computeNodeGroupIdentifier"></a>

```typescript
public readonly computeNodeGroupIdentifier: string;
```

- *Type:* string

The ComputeNodeGroupIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PcsComputenodegroupArnProps <a name="PcsComputenodegroupArnProps" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnProps"></a>

Properties for building a computenodegroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnProps.Initializer"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

const pcsComputenodegroupArnProps: pcs.PcsComputenodegroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pcs.PcsComputenodegroupArnProps.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | The ClusterIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.pcs.PcsComputenodegroupArnProps.property.computeNodeGroupIdentifier">computeNodeGroupIdentifier</a></code> | <code>string</code> | The ComputeNodeGroupIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.pcs.PcsComputenodegroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pcs.PcsComputenodegroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pcs.PcsComputenodegroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnProps.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

The ClusterIdentifier component of the ARN.

---

##### `computeNodeGroupIdentifier`<sup>Required</sup> <a name="computeNodeGroupIdentifier" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnProps.property.computeNodeGroupIdentifier"></a>

```typescript
public readonly computeNodeGroupIdentifier: string;
```

- *Type:* string

The ComputeNodeGroupIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.pcs.PcsComputenodegroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PcsQueueArnComponents <a name="PcsQueueArnComponents" id="@cdk_utils/iam.pcs.PcsQueueArnComponents"></a>

Parsed components of a queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pcs.PcsQueueArnComponents.Initializer"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

const pcsQueueArnComponents: pcs.PcsQueueArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pcs.PcsQueueArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pcs.PcsQueueArnComponents.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | The ClusterIdentifier component. |
| <code><a href="#@cdk_utils/iam.pcs.PcsQueueArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pcs.PcsQueueArnComponents.property.queueIdentifier">queueIdentifier</a></code> | <code>string</code> | The QueueIdentifier component. |
| <code><a href="#@cdk_utils/iam.pcs.PcsQueueArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.pcs.PcsQueueArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdk_utils/iam.pcs.PcsQueueArnComponents.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

The ClusterIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.pcs.PcsQueueArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `queueIdentifier`<sup>Required</sup> <a name="queueIdentifier" id="@cdk_utils/iam.pcs.PcsQueueArnComponents.property.queueIdentifier"></a>

```typescript
public readonly queueIdentifier: string;
```

- *Type:* string

The QueueIdentifier component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.pcs.PcsQueueArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PcsQueueArnProps <a name="PcsQueueArnProps" id="@cdk_utils/iam.pcs.PcsQueueArnProps"></a>

Properties for building a queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pcs.PcsQueueArnProps.Initializer"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

const pcsQueueArnProps: pcs.PcsQueueArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pcs.PcsQueueArnProps.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | The ClusterIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.pcs.PcsQueueArnProps.property.queueIdentifier">queueIdentifier</a></code> | <code>string</code> | The QueueIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.pcs.PcsQueueArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pcs.PcsQueueArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pcs.PcsQueueArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdk_utils/iam.pcs.PcsQueueArnProps.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

The ClusterIdentifier component of the ARN.

---

##### `queueIdentifier`<sup>Required</sup> <a name="queueIdentifier" id="@cdk_utils/iam.pcs.PcsQueueArnProps.property.queueIdentifier"></a>

```typescript
public readonly queueIdentifier: string;
```

- *Type:* string

The QueueIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.pcs.PcsQueueArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.pcs.PcsQueueArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.pcs.PcsQueueArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### PcsActions <a name="PcsActions" id="@cdk_utils/iam.pcs.PcsActions"></a>

IAM action constants for the pcs service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pcs.PcsActions.Initializer"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

new pcs.PcsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.actionGetCluster">actionGetCluster</a></code> | <code>string</code> | [Read] pcs:GetCluster. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.actionGetComputeNodeGroup">actionGetComputeNodeGroup</a></code> | <code>string</code> | [Read] pcs:GetComputeNodeGroup. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.actionGetQueue">actionGetQueue</a></code> | <code>string</code> | [Read] pcs:GetQueue. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [Write] pcs:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] pcs:CreateCluster. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.CreateComputeNodeGroup">CreateComputeNodeGroup</a></code> | <code>string</code> | [Write] pcs:CreateComputeNodeGroup. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.CreateQueue">CreateQueue</a></code> | <code>string</code> | [Write] pcs:CreateQueue. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.DeleteCluster">DeleteCluster</a></code> | <code>string</code> | [Write] pcs:DeleteCluster. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.DeleteComputeNodeGroup">DeleteComputeNodeGroup</a></code> | <code>string</code> | [Write] pcs:DeleteComputeNodeGroup. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.DeleteQueue">DeleteQueue</a></code> | <code>string</code> | [Write] pcs:DeleteQueue. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.ListClusters">ListClusters</a></code> | <code>string</code> | [List] pcs:ListClusters. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.ListComputeNodeGroups">ListComputeNodeGroups</a></code> | <code>string</code> | [List] pcs:ListComputeNodeGroups. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.ListQueues">ListQueues</a></code> | <code>string</code> | [List] pcs:ListQueues. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] pcs:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.RegisterComputeNodeGroupInstance">RegisterComputeNodeGroupInstance</a></code> | <code>string</code> | [Write] pcs:RegisterComputeNodeGroupInstance. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] pcs:TagResource. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] pcs:UntagResource. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.UpdateCluster">UpdateCluster</a></code> | <code>string</code> | [Write] pcs:UpdateCluster. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.UpdateComputeNodeGroup">UpdateComputeNodeGroup</a></code> | <code>string</code> | [Write] pcs:UpdateComputeNodeGroup. |
| <code><a href="#@cdk_utils/iam.pcs.PcsActions.property.UpdateQueue">UpdateQueue</a></code> | <code>string</code> | [Write] pcs:UpdateQueue. |

---

##### `actionGetCluster`<sup>Required</sup> <a name="actionGetCluster" id="@cdk_utils/iam.pcs.PcsActions.property.actionGetCluster"></a>

```typescript
public readonly actionGetCluster: string;
```

- *Type:* string

[Read] pcs:GetCluster.

---

##### `actionGetComputeNodeGroup`<sup>Required</sup> <a name="actionGetComputeNodeGroup" id="@cdk_utils/iam.pcs.PcsActions.property.actionGetComputeNodeGroup"></a>

```typescript
public readonly actionGetComputeNodeGroup: string;
```

- *Type:* string

[Read] pcs:GetComputeNodeGroup.

---

##### `actionGetQueue`<sup>Required</sup> <a name="actionGetQueue" id="@cdk_utils/iam.pcs.PcsActions.property.actionGetQueue"></a>

```typescript
public readonly actionGetQueue: string;
```

- *Type:* string

[Read] pcs:GetQueue.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.pcs.PcsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.pcs.PcsActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[Write] pcs:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.pcs.PcsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.pcs.PcsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.pcs.PcsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.pcs.PcsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.pcs.PcsActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] pcs:CreateCluster.

---

##### `CreateComputeNodeGroup`<sup>Required</sup> <a name="CreateComputeNodeGroup" id="@cdk_utils/iam.pcs.PcsActions.property.CreateComputeNodeGroup"></a>

```typescript
public readonly CreateComputeNodeGroup: string;
```

- *Type:* string

[Write] pcs:CreateComputeNodeGroup.

---

##### `CreateQueue`<sup>Required</sup> <a name="CreateQueue" id="@cdk_utils/iam.pcs.PcsActions.property.CreateQueue"></a>

```typescript
public readonly CreateQueue: string;
```

- *Type:* string

[Write] pcs:CreateQueue.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.pcs.PcsActions.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string;
```

- *Type:* string

[Write] pcs:DeleteCluster.

---

##### `DeleteComputeNodeGroup`<sup>Required</sup> <a name="DeleteComputeNodeGroup" id="@cdk_utils/iam.pcs.PcsActions.property.DeleteComputeNodeGroup"></a>

```typescript
public readonly DeleteComputeNodeGroup: string;
```

- *Type:* string

[Write] pcs:DeleteComputeNodeGroup.

---

##### `DeleteQueue`<sup>Required</sup> <a name="DeleteQueue" id="@cdk_utils/iam.pcs.PcsActions.property.DeleteQueue"></a>

```typescript
public readonly DeleteQueue: string;
```

- *Type:* string

[Write] pcs:DeleteQueue.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.pcs.PcsActions.property.ListClusters"></a>

```typescript
public readonly ListClusters: string;
```

- *Type:* string

[List] pcs:ListClusters.

---

##### `ListComputeNodeGroups`<sup>Required</sup> <a name="ListComputeNodeGroups" id="@cdk_utils/iam.pcs.PcsActions.property.ListComputeNodeGroups"></a>

```typescript
public readonly ListComputeNodeGroups: string;
```

- *Type:* string

[List] pcs:ListComputeNodeGroups.

---

##### `ListQueues`<sup>Required</sup> <a name="ListQueues" id="@cdk_utils/iam.pcs.PcsActions.property.ListQueues"></a>

```typescript
public readonly ListQueues: string;
```

- *Type:* string

[List] pcs:ListQueues.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.pcs.PcsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] pcs:ListTagsForResource.

---

##### `RegisterComputeNodeGroupInstance`<sup>Required</sup> <a name="RegisterComputeNodeGroupInstance" id="@cdk_utils/iam.pcs.PcsActions.property.RegisterComputeNodeGroupInstance"></a>

```typescript
public readonly RegisterComputeNodeGroupInstance: string;
```

- *Type:* string

[Write] pcs:RegisterComputeNodeGroupInstance.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.pcs.PcsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.pcs.PcsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] pcs:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.pcs.PcsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] pcs:UntagResource.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.pcs.PcsActions.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string;
```

- *Type:* string

[Write] pcs:UpdateCluster.

---

##### `UpdateComputeNodeGroup`<sup>Required</sup> <a name="UpdateComputeNodeGroup" id="@cdk_utils/iam.pcs.PcsActions.property.UpdateComputeNodeGroup"></a>

```typescript
public readonly UpdateComputeNodeGroup: string;
```

- *Type:* string

[Write] pcs:UpdateComputeNodeGroup.

---

##### `UpdateQueue`<sup>Required</sup> <a name="UpdateQueue" id="@cdk_utils/iam.pcs.PcsActions.property.UpdateQueue"></a>

```typescript
public readonly UpdateQueue: string;
```

- *Type:* string

[Write] pcs:UpdateQueue.

---

### PcsConditions <a name="PcsConditions" id="@cdk_utils/iam.pcs.PcsConditions"></a>

Condition key constants and builders for pcs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pcs.PcsConditions.Initializer"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

new pcs.PcsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.pcs.PcsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.pcs.PcsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.pcs.PcsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.pcs.PcsConditions.requestTag"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

pcs.PcsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.pcs.PcsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.pcs.PcsConditions.resourceTag"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

pcs.PcsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.pcs.PcsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.pcs.PcsConditions.tagKeys"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

pcs.PcsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.pcs.PcsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pcs.PcsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.pcs.PcsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.pcs.PcsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.pcs.PcsConditions.property.CreateClusterConditionKeys">CreateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCluster action. |
| <code><a href="#@cdk_utils/iam.pcs.PcsConditions.property.CreateComputeNodeGroupConditionKeys">CreateComputeNodeGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateComputeNodeGroup action. |
| <code><a href="#@cdk_utils/iam.pcs.PcsConditions.property.CreateQueueConditionKeys">CreateQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateQueue action. |
| <code><a href="#@cdk_utils/iam.pcs.PcsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.pcs.PcsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.pcs.PcsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.pcs.PcsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.pcs.PcsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateClusterConditionKeys`<sup>Required</sup> <a name="CreateClusterConditionKeys" id="@cdk_utils/iam.pcs.PcsConditions.property.CreateClusterConditionKeys"></a>

```typescript
public readonly CreateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCluster action.

---

##### `CreateComputeNodeGroupConditionKeys`<sup>Required</sup> <a name="CreateComputeNodeGroupConditionKeys" id="@cdk_utils/iam.pcs.PcsConditions.property.CreateComputeNodeGroupConditionKeys"></a>

```typescript
public readonly CreateComputeNodeGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateComputeNodeGroup action.

---

##### `CreateQueueConditionKeys`<sup>Required</sup> <a name="CreateQueueConditionKeys" id="@cdk_utils/iam.pcs.PcsConditions.property.CreateQueueConditionKeys"></a>

```typescript
public readonly CreateQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateQueue action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.pcs.PcsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.pcs.PcsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### PcsOperations <a name="PcsOperations" id="@cdk_utils/iam.pcs.PcsOperations"></a>

API operation to required IAM actions mapping for pcs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pcs.PcsOperations.Initializer"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

new pcs.PcsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.CreateComputeNodeGroup">CreateComputeNodeGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateComputeNodeGroup API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.CreateQueue">CreateQueue</a></code> | <code>string[]</code> | IAM actions required for the CreateQueue API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.DeleteCluster">DeleteCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCluster API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.DeleteComputeNodeGroup">DeleteComputeNodeGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteComputeNodeGroup API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.DeleteQueue">DeleteQueue</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueue API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.ListClusters">ListClusters</a></code> | <code>string[]</code> | IAM actions required for the ListClusters API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.ListComputeNodeGroups">ListComputeNodeGroups</a></code> | <code>string[]</code> | IAM actions required for the ListComputeNodeGroups API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.ListQueues">ListQueues</a></code> | <code>string[]</code> | IAM actions required for the ListQueues API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.opGetCluster">opGetCluster</a></code> | <code>string[]</code> | IAM actions required for the GetCluster API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.opGetComputeNodeGroup">opGetComputeNodeGroup</a></code> | <code>string[]</code> | IAM actions required for the GetComputeNodeGroup API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.opGetQueue">opGetQueue</a></code> | <code>string[]</code> | IAM actions required for the GetQueue API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.RegisterComputeNodeGroupInstance">RegisterComputeNodeGroupInstance</a></code> | <code>string[]</code> | IAM actions required for the RegisterComputeNodeGroupInstance API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.UpdateCluster">UpdateCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateCluster API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.UpdateComputeNodeGroup">UpdateComputeNodeGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateComputeNodeGroup API call. |
| <code><a href="#@cdk_utils/iam.pcs.PcsOperations.property.UpdateQueue">UpdateQueue</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueue API call. |

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.pcs.PcsOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateComputeNodeGroup`<sup>Required</sup> <a name="CreateComputeNodeGroup" id="@cdk_utils/iam.pcs.PcsOperations.property.CreateComputeNodeGroup"></a>

```typescript
public readonly CreateComputeNodeGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateComputeNodeGroup API call.

---

##### `CreateQueue`<sup>Required</sup> <a name="CreateQueue" id="@cdk_utils/iam.pcs.PcsOperations.property.CreateQueue"></a>

```typescript
public readonly CreateQueue: string[];
```

- *Type:* string[]

IAM actions required for the CreateQueue API call.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.pcs.PcsOperations.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCluster API call.

---

##### `DeleteComputeNodeGroup`<sup>Required</sup> <a name="DeleteComputeNodeGroup" id="@cdk_utils/iam.pcs.PcsOperations.property.DeleteComputeNodeGroup"></a>

```typescript
public readonly DeleteComputeNodeGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteComputeNodeGroup API call.

---

##### `DeleteQueue`<sup>Required</sup> <a name="DeleteQueue" id="@cdk_utils/iam.pcs.PcsOperations.property.DeleteQueue"></a>

```typescript
public readonly DeleteQueue: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueue API call.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.pcs.PcsOperations.property.ListClusters"></a>

```typescript
public readonly ListClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListClusters API call.

---

##### `ListComputeNodeGroups`<sup>Required</sup> <a name="ListComputeNodeGroups" id="@cdk_utils/iam.pcs.PcsOperations.property.ListComputeNodeGroups"></a>

```typescript
public readonly ListComputeNodeGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListComputeNodeGroups API call.

---

##### `ListQueues`<sup>Required</sup> <a name="ListQueues" id="@cdk_utils/iam.pcs.PcsOperations.property.ListQueues"></a>

```typescript
public readonly ListQueues: string[];
```

- *Type:* string[]

IAM actions required for the ListQueues API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.pcs.PcsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetCluster`<sup>Required</sup> <a name="opGetCluster" id="@cdk_utils/iam.pcs.PcsOperations.property.opGetCluster"></a>

```typescript
public readonly opGetCluster: string[];
```

- *Type:* string[]

IAM actions required for the GetCluster API call.

---

##### `opGetComputeNodeGroup`<sup>Required</sup> <a name="opGetComputeNodeGroup" id="@cdk_utils/iam.pcs.PcsOperations.property.opGetComputeNodeGroup"></a>

```typescript
public readonly opGetComputeNodeGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetComputeNodeGroup API call.

---

##### `opGetQueue`<sup>Required</sup> <a name="opGetQueue" id="@cdk_utils/iam.pcs.PcsOperations.property.opGetQueue"></a>

```typescript
public readonly opGetQueue: string[];
```

- *Type:* string[]

IAM actions required for the GetQueue API call.

---

##### `RegisterComputeNodeGroupInstance`<sup>Required</sup> <a name="RegisterComputeNodeGroupInstance" id="@cdk_utils/iam.pcs.PcsOperations.property.RegisterComputeNodeGroupInstance"></a>

```typescript
public readonly RegisterComputeNodeGroupInstance: string[];
```

- *Type:* string[]

IAM actions required for the RegisterComputeNodeGroupInstance API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.pcs.PcsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.pcs.PcsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.pcs.PcsOperations.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCluster API call.

---

##### `UpdateComputeNodeGroup`<sup>Required</sup> <a name="UpdateComputeNodeGroup" id="@cdk_utils/iam.pcs.PcsOperations.property.UpdateComputeNodeGroup"></a>

```typescript
public readonly UpdateComputeNodeGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateComputeNodeGroup API call.

---

##### `UpdateQueue`<sup>Required</sup> <a name="UpdateQueue" id="@cdk_utils/iam.pcs.PcsOperations.property.UpdateQueue"></a>

```typescript
public readonly UpdateQueue: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueue API call.

---

### PcsResources <a name="PcsResources" id="@cdk_utils/iam.pcs.PcsResources"></a>

ARN builders, validators, and parsers for pcs resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pcs.PcsResources.Initializer"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

new pcs.PcsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.pcs.PcsResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.pcs.PcsResources.computenodegroup">computenodegroup</a></code> | Builds an ARN for the computenodegroup resource. |
| <code><a href="#@cdk_utils/iam.pcs.PcsResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.pcs.PcsResources.isValidComputenodegroupArn">isValidComputenodegroupArn</a></code> | Validates whether a string is a valid ARN for the computenodegroup resource. |
| <code><a href="#@cdk_utils/iam.pcs.PcsResources.isValidQueueArn">isValidQueueArn</a></code> | Validates whether a string is a valid ARN for the queue resource. |
| <code><a href="#@cdk_utils/iam.pcs.PcsResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.pcs.PcsResources.parseComputenodegroupArn">parseComputenodegroupArn</a></code> | Parses a computenodegroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.pcs.PcsResources.parseQueueArn">parseQueueArn</a></code> | Parses a queue ARN into its components. |
| <code><a href="#@cdk_utils/iam.pcs.PcsResources.queue">queue</a></code> | Builds an ARN for the queue resource. |

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.pcs.PcsResources.cluster"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

pcs.PcsResources.cluster(props: PcsClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.pcs.PcsResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.pcs.PcsClusterArnProps">PcsClusterArnProps</a>

---

##### `computenodegroup` <a name="computenodegroup" id="@cdk_utils/iam.pcs.PcsResources.computenodegroup"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

pcs.PcsResources.computenodegroup(props: PcsComputenodegroupArnProps)
```

Builds an ARN for the computenodegroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.pcs.PcsResources.computenodegroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.pcs.PcsComputenodegroupArnProps">PcsComputenodegroupArnProps</a>

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.pcs.PcsResources.isValidClusterArn"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

pcs.PcsResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pcs.PcsResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidComputenodegroupArn` <a name="isValidComputenodegroupArn" id="@cdk_utils/iam.pcs.PcsResources.isValidComputenodegroupArn"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

pcs.PcsResources.isValidComputenodegroupArn(arn: string)
```

Validates whether a string is a valid ARN for the computenodegroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pcs.PcsResources.isValidComputenodegroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQueueArn` <a name="isValidQueueArn" id="@cdk_utils/iam.pcs.PcsResources.isValidQueueArn"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

pcs.PcsResources.isValidQueueArn(arn: string)
```

Validates whether a string is a valid ARN for the queue resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pcs.PcsResources.isValidQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.pcs.PcsResources.parseClusterArn"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

pcs.PcsResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pcs.PcsResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseComputenodegroupArn` <a name="parseComputenodegroupArn" id="@cdk_utils/iam.pcs.PcsResources.parseComputenodegroupArn"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

pcs.PcsResources.parseComputenodegroupArn(arn: string)
```

Parses a computenodegroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pcs.PcsResources.parseComputenodegroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQueueArn` <a name="parseQueueArn" id="@cdk_utils/iam.pcs.PcsResources.parseQueueArn"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

pcs.PcsResources.parseQueueArn(arn: string)
```

Parses a queue ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pcs.PcsResources.parseQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `queue` <a name="queue" id="@cdk_utils/iam.pcs.PcsResources.queue"></a>

```typescript
import { pcs } from '@cdk_utils/iam'

pcs.PcsResources.queue(props: PcsQueueArnProps)
```

Builds an ARN for the queue resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.pcs.PcsResources.queue.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.pcs.PcsQueueArnProps">PcsQueueArnProps</a>

---




