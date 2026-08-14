# `dax` Submodule <a name="`dax` Submodule" id="@cdk_utils/iam.dax"></a>


## Structs <a name="Structs" id="Structs"></a>

### DaxApplicationArnComponents <a name="DaxApplicationArnComponents" id="@cdk_utils/iam.dax.DaxApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dax.DaxApplicationArnComponents.Initializer"></a>

```typescript
import { dax } from '@cdk_utils/iam'

const daxApplicationArnComponents: dax.DaxApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dax.DaxApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dax.DaxApplicationArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.dax.DaxApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dax.DaxApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dax.DaxApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.dax.DaxApplicationArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dax.DaxApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dax.DaxApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DaxApplicationArnProps <a name="DaxApplicationArnProps" id="@cdk_utils/iam.dax.DaxApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dax.DaxApplicationArnProps.Initializer"></a>

```typescript
import { dax } from '@cdk_utils/iam'

const daxApplicationArnProps: dax.DaxApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dax.DaxApplicationArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dax.DaxApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dax.DaxApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dax.DaxApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.dax.DaxApplicationArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dax.DaxApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dax.DaxApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dax.DaxApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DaxActions <a name="DaxActions" id="@cdk_utils/iam.dax.DaxActions"></a>

IAM action constants for the dax service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dax.DaxActions.Initializer"></a>

```typescript
import { dax } from '@cdk_utils/iam'

new dax.DaxActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.actionGetItem">actionGetItem</a></code> | <code>string</code> | [Read] dax:GetItem. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.BatchGetItem">BatchGetItem</a></code> | <code>string</code> | [Read] dax:BatchGetItem. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.BatchWriteItem">BatchWriteItem</a></code> | <code>string</code> | [Write] dax:BatchWriteItem. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.ConditionCheckItem">ConditionCheckItem</a></code> | <code>string</code> | [Read] dax:ConditionCheckItem. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] dax:CreateCluster. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.CreateParameterGroup">CreateParameterGroup</a></code> | <code>string</code> | [Write] dax:CreateParameterGroup. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.CreateSubnetGroup">CreateSubnetGroup</a></code> | <code>string</code> | [Write] dax:CreateSubnetGroup. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.DecreaseReplicationFactor">DecreaseReplicationFactor</a></code> | <code>string</code> | [Write] dax:DecreaseReplicationFactor. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.DeleteCluster">DeleteCluster</a></code> | <code>string</code> | [Write] dax:DeleteCluster. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.DeleteItem">DeleteItem</a></code> | <code>string</code> | [Write] dax:DeleteItem. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.DeleteParameterGroup">DeleteParameterGroup</a></code> | <code>string</code> | [Write] dax:DeleteParameterGroup. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.DeleteSubnetGroup">DeleteSubnetGroup</a></code> | <code>string</code> | [Write] dax:DeleteSubnetGroup. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.DescribeClusters">DescribeClusters</a></code> | <code>string</code> | [List] dax:DescribeClusters. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.DescribeDefaultParameters">DescribeDefaultParameters</a></code> | <code>string</code> | [List] dax:DescribeDefaultParameters. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.DescribeEvents">DescribeEvents</a></code> | <code>string</code> | [List] dax:DescribeEvents. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.DescribeParameterGroups">DescribeParameterGroups</a></code> | <code>string</code> | [List] dax:DescribeParameterGroups. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.DescribeParameters">DescribeParameters</a></code> | <code>string</code> | [Read] dax:DescribeParameters. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.DescribeSubnetGroups">DescribeSubnetGroups</a></code> | <code>string</code> | [List] dax:DescribeSubnetGroups. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.IncreaseReplicationFactor">IncreaseReplicationFactor</a></code> | <code>string</code> | [Write] dax:IncreaseReplicationFactor. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.ListTags">ListTags</a></code> | <code>string</code> | [Read] dax:ListTags. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.PutItem">PutItem</a></code> | <code>string</code> | [Write] dax:PutItem. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.Query">Query</a></code> | <code>string</code> | [Read] dax:Query. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.RebootNode">RebootNode</a></code> | <code>string</code> | [Write] dax:RebootNode. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.Scan">Scan</a></code> | <code>string</code> | [Read] dax:Scan. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] dax:TagResource. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] dax:UntagResource. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.UpdateCluster">UpdateCluster</a></code> | <code>string</code> | [Write] dax:UpdateCluster. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.UpdateItem">UpdateItem</a></code> | <code>string</code> | [Write] dax:UpdateItem. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.UpdateParameterGroup">UpdateParameterGroup</a></code> | <code>string</code> | [Write] dax:UpdateParameterGroup. |
| <code><a href="#@cdk_utils/iam.dax.DaxActions.property.UpdateSubnetGroup">UpdateSubnetGroup</a></code> | <code>string</code> | [Write] dax:UpdateSubnetGroup. |

---

##### `actionGetItem`<sup>Required</sup> <a name="actionGetItem" id="@cdk_utils/iam.dax.DaxActions.property.actionGetItem"></a>

```typescript
public readonly actionGetItem: string;
```

- *Type:* string

[Read] dax:GetItem.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.dax.DaxActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.dax.DaxActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.dax.DaxActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.dax.DaxActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.dax.DaxActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetItem`<sup>Required</sup> <a name="BatchGetItem" id="@cdk_utils/iam.dax.DaxActions.property.BatchGetItem"></a>

```typescript
public readonly BatchGetItem: string;
```

- *Type:* string

[Read] dax:BatchGetItem.

---

##### `BatchWriteItem`<sup>Required</sup> <a name="BatchWriteItem" id="@cdk_utils/iam.dax.DaxActions.property.BatchWriteItem"></a>

```typescript
public readonly BatchWriteItem: string;
```

- *Type:* string

[Write] dax:BatchWriteItem.

---

##### `ConditionCheckItem`<sup>Required</sup> <a name="ConditionCheckItem" id="@cdk_utils/iam.dax.DaxActions.property.ConditionCheckItem"></a>

```typescript
public readonly ConditionCheckItem: string;
```

- *Type:* string

[Read] dax:ConditionCheckItem.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.dax.DaxActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] dax:CreateCluster.

---

##### `CreateParameterGroup`<sup>Required</sup> <a name="CreateParameterGroup" id="@cdk_utils/iam.dax.DaxActions.property.CreateParameterGroup"></a>

```typescript
public readonly CreateParameterGroup: string;
```

- *Type:* string

[Write] dax:CreateParameterGroup.

---

##### `CreateSubnetGroup`<sup>Required</sup> <a name="CreateSubnetGroup" id="@cdk_utils/iam.dax.DaxActions.property.CreateSubnetGroup"></a>

```typescript
public readonly CreateSubnetGroup: string;
```

- *Type:* string

[Write] dax:CreateSubnetGroup.

---

##### `DecreaseReplicationFactor`<sup>Required</sup> <a name="DecreaseReplicationFactor" id="@cdk_utils/iam.dax.DaxActions.property.DecreaseReplicationFactor"></a>

```typescript
public readonly DecreaseReplicationFactor: string;
```

- *Type:* string

[Write] dax:DecreaseReplicationFactor.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.dax.DaxActions.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string;
```

- *Type:* string

[Write] dax:DeleteCluster.

---

##### `DeleteItem`<sup>Required</sup> <a name="DeleteItem" id="@cdk_utils/iam.dax.DaxActions.property.DeleteItem"></a>

```typescript
public readonly DeleteItem: string;
```

- *Type:* string

[Write] dax:DeleteItem.

---

##### `DeleteParameterGroup`<sup>Required</sup> <a name="DeleteParameterGroup" id="@cdk_utils/iam.dax.DaxActions.property.DeleteParameterGroup"></a>

```typescript
public readonly DeleteParameterGroup: string;
```

- *Type:* string

[Write] dax:DeleteParameterGroup.

---

##### `DeleteSubnetGroup`<sup>Required</sup> <a name="DeleteSubnetGroup" id="@cdk_utils/iam.dax.DaxActions.property.DeleteSubnetGroup"></a>

```typescript
public readonly DeleteSubnetGroup: string;
```

- *Type:* string

[Write] dax:DeleteSubnetGroup.

---

##### `DescribeClusters`<sup>Required</sup> <a name="DescribeClusters" id="@cdk_utils/iam.dax.DaxActions.property.DescribeClusters"></a>

```typescript
public readonly DescribeClusters: string;
```

- *Type:* string

[List] dax:DescribeClusters.

---

##### `DescribeDefaultParameters`<sup>Required</sup> <a name="DescribeDefaultParameters" id="@cdk_utils/iam.dax.DaxActions.property.DescribeDefaultParameters"></a>

```typescript
public readonly DescribeDefaultParameters: string;
```

- *Type:* string

[List] dax:DescribeDefaultParameters.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.dax.DaxActions.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string;
```

- *Type:* string

[List] dax:DescribeEvents.

---

##### `DescribeParameterGroups`<sup>Required</sup> <a name="DescribeParameterGroups" id="@cdk_utils/iam.dax.DaxActions.property.DescribeParameterGroups"></a>

```typescript
public readonly DescribeParameterGroups: string;
```

- *Type:* string

[List] dax:DescribeParameterGroups.

---

##### `DescribeParameters`<sup>Required</sup> <a name="DescribeParameters" id="@cdk_utils/iam.dax.DaxActions.property.DescribeParameters"></a>

```typescript
public readonly DescribeParameters: string;
```

- *Type:* string

[Read] dax:DescribeParameters.

---

##### `DescribeSubnetGroups`<sup>Required</sup> <a name="DescribeSubnetGroups" id="@cdk_utils/iam.dax.DaxActions.property.DescribeSubnetGroups"></a>

```typescript
public readonly DescribeSubnetGroups: string;
```

- *Type:* string

[List] dax:DescribeSubnetGroups.

---

##### `IncreaseReplicationFactor`<sup>Required</sup> <a name="IncreaseReplicationFactor" id="@cdk_utils/iam.dax.DaxActions.property.IncreaseReplicationFactor"></a>

```typescript
public readonly IncreaseReplicationFactor: string;
```

- *Type:* string

[Write] dax:IncreaseReplicationFactor.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.dax.DaxActions.property.ListTags"></a>

```typescript
public readonly ListTags: string;
```

- *Type:* string

[Read] dax:ListTags.

---

##### `PutItem`<sup>Required</sup> <a name="PutItem" id="@cdk_utils/iam.dax.DaxActions.property.PutItem"></a>

```typescript
public readonly PutItem: string;
```

- *Type:* string

[Write] dax:PutItem.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdk_utils/iam.dax.DaxActions.property.Query"></a>

```typescript
public readonly Query: string;
```

- *Type:* string

[Read] dax:Query.

---

##### `RebootNode`<sup>Required</sup> <a name="RebootNode" id="@cdk_utils/iam.dax.DaxActions.property.RebootNode"></a>

```typescript
public readonly RebootNode: string;
```

- *Type:* string

[Write] dax:RebootNode.

---

##### `Scan`<sup>Required</sup> <a name="Scan" id="@cdk_utils/iam.dax.DaxActions.property.Scan"></a>

```typescript
public readonly Scan: string;
```

- *Type:* string

[Read] dax:Scan.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.dax.DaxActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.dax.DaxActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] dax:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.dax.DaxActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] dax:UntagResource.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.dax.DaxActions.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string;
```

- *Type:* string

[Write] dax:UpdateCluster.

---

##### `UpdateItem`<sup>Required</sup> <a name="UpdateItem" id="@cdk_utils/iam.dax.DaxActions.property.UpdateItem"></a>

```typescript
public readonly UpdateItem: string;
```

- *Type:* string

[Write] dax:UpdateItem.

---

##### `UpdateParameterGroup`<sup>Required</sup> <a name="UpdateParameterGroup" id="@cdk_utils/iam.dax.DaxActions.property.UpdateParameterGroup"></a>

```typescript
public readonly UpdateParameterGroup: string;
```

- *Type:* string

[Write] dax:UpdateParameterGroup.

---

##### `UpdateSubnetGroup`<sup>Required</sup> <a name="UpdateSubnetGroup" id="@cdk_utils/iam.dax.DaxActions.property.UpdateSubnetGroup"></a>

```typescript
public readonly UpdateSubnetGroup: string;
```

- *Type:* string

[Write] dax:UpdateSubnetGroup.

---

### DaxConditions <a name="DaxConditions" id="@cdk_utils/iam.dax.DaxConditions"></a>

Condition key constants and builders for dax.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dax.DaxConditions.Initializer"></a>

```typescript
import { dax } from '@cdk_utils/iam'

new dax.DaxConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.dax.DaxConditions.enclosingOperation">enclosingOperation</a></code> | Generates a condition block for `dax:EnclosingOperation`. |

---

##### `enclosingOperation` <a name="enclosingOperation" id="@cdk_utils/iam.dax.DaxConditions.enclosingOperation"></a>

```typescript
import { dax } from '@cdk_utils/iam'

dax.DaxConditions.enclosingOperation(value: string)
```

Generates a condition block for `dax:EnclosingOperation`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dax.DaxConditions.enclosingOperation.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dax.DaxConditions.property.actionGetItemConditionKeys">actionGetItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetItem action. |
| <code><a href="#@cdk_utils/iam.dax.DaxConditions.property.DeleteItemConditionKeys">DeleteItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteItem action. |
| <code><a href="#@cdk_utils/iam.dax.DaxConditions.property.ENCLOSING_OPERATION">ENCLOSING_OPERATION</a></code> | <code>string</code> | Condition key: dax:EnclosingOperation (String). |
| <code><a href="#@cdk_utils/iam.dax.DaxConditions.property.PutItemConditionKeys">PutItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutItem action. |
| <code><a href="#@cdk_utils/iam.dax.DaxConditions.property.UpdateItemConditionKeys">UpdateItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateItem action. |

---

##### `actionGetItemConditionKeys`<sup>Required</sup> <a name="actionGetItemConditionKeys" id="@cdk_utils/iam.dax.DaxConditions.property.actionGetItemConditionKeys"></a>

```typescript
public readonly actionGetItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetItem action.

---

##### `DeleteItemConditionKeys`<sup>Required</sup> <a name="DeleteItemConditionKeys" id="@cdk_utils/iam.dax.DaxConditions.property.DeleteItemConditionKeys"></a>

```typescript
public readonly DeleteItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteItem action.

---

##### `ENCLOSING_OPERATION`<sup>Required</sup> <a name="ENCLOSING_OPERATION" id="@cdk_utils/iam.dax.DaxConditions.property.ENCLOSING_OPERATION"></a>

```typescript
public readonly ENCLOSING_OPERATION: string;
```

- *Type:* string

Condition key: dax:EnclosingOperation (String).

---

##### `PutItemConditionKeys`<sup>Required</sup> <a name="PutItemConditionKeys" id="@cdk_utils/iam.dax.DaxConditions.property.PutItemConditionKeys"></a>

```typescript
public readonly PutItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutItem action.

---

##### `UpdateItemConditionKeys`<sup>Required</sup> <a name="UpdateItemConditionKeys" id="@cdk_utils/iam.dax.DaxConditions.property.UpdateItemConditionKeys"></a>

```typescript
public readonly UpdateItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateItem action.

---

### DaxOperations <a name="DaxOperations" id="@cdk_utils/iam.dax.DaxOperations"></a>

API operation to required IAM actions mapping for dax.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dax.DaxOperations.Initializer"></a>

```typescript
import { dax } from '@cdk_utils/iam'

new dax.DaxOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.CreateParameterGroup">CreateParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.CreateSubnetGroup">CreateSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.DecreaseReplicationFactor">DecreaseReplicationFactor</a></code> | <code>string[]</code> | IAM actions required for the DecreaseReplicationFactor API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.DeleteCluster">DeleteCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCluster API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.DeleteParameterGroup">DeleteParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.DeleteSubnetGroup">DeleteSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.DescribeClusters">DescribeClusters</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusters API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.DescribeDefaultParameters">DescribeDefaultParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeDefaultParameters API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.DescribeEvents">DescribeEvents</a></code> | <code>string[]</code> | IAM actions required for the DescribeEvents API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.DescribeParameterGroups">DescribeParameterGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeParameterGroups API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.DescribeParameters">DescribeParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeParameters API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.DescribeSubnetGroups">DescribeSubnetGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeSubnetGroups API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.IncreaseReplicationFactor">IncreaseReplicationFactor</a></code> | <code>string[]</code> | IAM actions required for the IncreaseReplicationFactor API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.ListTags">ListTags</a></code> | <code>string[]</code> | IAM actions required for the ListTags API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.RebootNode">RebootNode</a></code> | <code>string[]</code> | IAM actions required for the RebootNode API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.UpdateCluster">UpdateCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateCluster API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.UpdateParameterGroup">UpdateParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.dax.DaxOperations.property.UpdateSubnetGroup">UpdateSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubnetGroup API call. |

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.dax.DaxOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateParameterGroup`<sup>Required</sup> <a name="CreateParameterGroup" id="@cdk_utils/iam.dax.DaxOperations.property.CreateParameterGroup"></a>

```typescript
public readonly CreateParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateParameterGroup API call.

---

##### `CreateSubnetGroup`<sup>Required</sup> <a name="CreateSubnetGroup" id="@cdk_utils/iam.dax.DaxOperations.property.CreateSubnetGroup"></a>

```typescript
public readonly CreateSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubnetGroup API call.

---

##### `DecreaseReplicationFactor`<sup>Required</sup> <a name="DecreaseReplicationFactor" id="@cdk_utils/iam.dax.DaxOperations.property.DecreaseReplicationFactor"></a>

```typescript
public readonly DecreaseReplicationFactor: string[];
```

- *Type:* string[]

IAM actions required for the DecreaseReplicationFactor API call.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.dax.DaxOperations.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCluster API call.

---

##### `DeleteParameterGroup`<sup>Required</sup> <a name="DeleteParameterGroup" id="@cdk_utils/iam.dax.DaxOperations.property.DeleteParameterGroup"></a>

```typescript
public readonly DeleteParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteParameterGroup API call.

---

##### `DeleteSubnetGroup`<sup>Required</sup> <a name="DeleteSubnetGroup" id="@cdk_utils/iam.dax.DaxOperations.property.DeleteSubnetGroup"></a>

```typescript
public readonly DeleteSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSubnetGroup API call.

---

##### `DescribeClusters`<sup>Required</sup> <a name="DescribeClusters" id="@cdk_utils/iam.dax.DaxOperations.property.DescribeClusters"></a>

```typescript
public readonly DescribeClusters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusters API call.

---

##### `DescribeDefaultParameters`<sup>Required</sup> <a name="DescribeDefaultParameters" id="@cdk_utils/iam.dax.DaxOperations.property.DescribeDefaultParameters"></a>

```typescript
public readonly DescribeDefaultParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDefaultParameters API call.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.dax.DaxOperations.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEvents API call.

---

##### `DescribeParameterGroups`<sup>Required</sup> <a name="DescribeParameterGroups" id="@cdk_utils/iam.dax.DaxOperations.property.DescribeParameterGroups"></a>

```typescript
public readonly DescribeParameterGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeParameterGroups API call.

---

##### `DescribeParameters`<sup>Required</sup> <a name="DescribeParameters" id="@cdk_utils/iam.dax.DaxOperations.property.DescribeParameters"></a>

```typescript
public readonly DescribeParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeParameters API call.

---

##### `DescribeSubnetGroups`<sup>Required</sup> <a name="DescribeSubnetGroups" id="@cdk_utils/iam.dax.DaxOperations.property.DescribeSubnetGroups"></a>

```typescript
public readonly DescribeSubnetGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSubnetGroups API call.

---

##### `IncreaseReplicationFactor`<sup>Required</sup> <a name="IncreaseReplicationFactor" id="@cdk_utils/iam.dax.DaxOperations.property.IncreaseReplicationFactor"></a>

```typescript
public readonly IncreaseReplicationFactor: string[];
```

- *Type:* string[]

IAM actions required for the IncreaseReplicationFactor API call.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.dax.DaxOperations.property.ListTags"></a>

```typescript
public readonly ListTags: string[];
```

- *Type:* string[]

IAM actions required for the ListTags API call.

---

##### `RebootNode`<sup>Required</sup> <a name="RebootNode" id="@cdk_utils/iam.dax.DaxOperations.property.RebootNode"></a>

```typescript
public readonly RebootNode: string[];
```

- *Type:* string[]

IAM actions required for the RebootNode API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.dax.DaxOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.dax.DaxOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.dax.DaxOperations.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCluster API call.

---

##### `UpdateParameterGroup`<sup>Required</sup> <a name="UpdateParameterGroup" id="@cdk_utils/iam.dax.DaxOperations.property.UpdateParameterGroup"></a>

```typescript
public readonly UpdateParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateParameterGroup API call.

---

##### `UpdateSubnetGroup`<sup>Required</sup> <a name="UpdateSubnetGroup" id="@cdk_utils/iam.dax.DaxOperations.property.UpdateSubnetGroup"></a>

```typescript
public readonly UpdateSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubnetGroup API call.

---

### DaxResources <a name="DaxResources" id="@cdk_utils/iam.dax.DaxResources"></a>

ARN builders, validators, and parsers for dax resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dax.DaxResources.Initializer"></a>

```typescript
import { dax } from '@cdk_utils/iam'

new dax.DaxResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.dax.DaxResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.dax.DaxResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.dax.DaxResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |

---

##### `application` <a name="application" id="@cdk_utils/iam.dax.DaxResources.application"></a>

```typescript
import { dax } from '@cdk_utils/iam'

dax.DaxResources.application(props: DaxApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dax.DaxResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dax.DaxApplicationArnProps">DaxApplicationArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.dax.DaxResources.isValidApplicationArn"></a>

```typescript
import { dax } from '@cdk_utils/iam'

dax.DaxResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dax.DaxResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.dax.DaxResources.parseApplicationArn"></a>

```typescript
import { dax } from '@cdk_utils/iam'

dax.DaxResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dax.DaxResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---




