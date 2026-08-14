# `ebs` Submodule <a name="`ebs` Submodule" id="@cdk_utils/iam.ebs"></a>


## Structs <a name="Structs" id="Structs"></a>

### EBSSnapshotArnComponents <a name="EBSSnapshotArnComponents" id="@cdk_utils/iam.ebs.EBSSnapshotArnComponents"></a>

Parsed components of a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ebs.EBSSnapshotArnComponents.Initializer"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

const eBSSnapshotArnComponents: ebs.EBSSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ebs.EBSSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ebs.EBSSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ebs.EBSSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ebs.EBSSnapshotArnComponents.property.snapshotId">snapshotId</a></code> | <code>string</code> | The SnapshotId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ebs.EBSSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ebs.EBSSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ebs.EBSSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdk_utils/iam.ebs.EBSSnapshotArnComponents.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

The SnapshotId component.

---

### EBSSnapshotArnProps <a name="EBSSnapshotArnProps" id="@cdk_utils/iam.ebs.EBSSnapshotArnProps"></a>

Properties for building a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ebs.EBSSnapshotArnProps.Initializer"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

const eBSSnapshotArnProps: ebs.EBSSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ebs.EBSSnapshotArnProps.property.snapshotId">snapshotId</a></code> | <code>string</code> | The SnapshotId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ebs.EBSSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ebs.EBSSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ebs.EBSSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdk_utils/iam.ebs.EBSSnapshotArnProps.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

The SnapshotId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ebs.EBSSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ebs.EBSSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ebs.EBSSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### EBSActions <a name="EBSActions" id="@cdk_utils/iam.ebs.EBSActions"></a>

IAM action constants for the ebs service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ebs.EBSActions.Initializer"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

new ebs.EBSActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ebs.EBSActions.property.actionGetSnapshotBlock">actionGetSnapshotBlock</a></code> | <code>string</code> | [Read] ebs:GetSnapshotBlock. |
| <code><a href="#@cdk_utils/iam.ebs.EBSActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ebs.EBSActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ebs.EBSActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ebs.EBSActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ebs.EBSActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ebs.EBSActions.property.CompleteSnapshot">CompleteSnapshot</a></code> | <code>string</code> | [Write] ebs:CompleteSnapshot. |
| <code><a href="#@cdk_utils/iam.ebs.EBSActions.property.ListChangedBlocks">ListChangedBlocks</a></code> | <code>string</code> | [Read] ebs:ListChangedBlocks. |
| <code><a href="#@cdk_utils/iam.ebs.EBSActions.property.ListSnapshotBlocks">ListSnapshotBlocks</a></code> | <code>string</code> | [Read] ebs:ListSnapshotBlocks. |
| <code><a href="#@cdk_utils/iam.ebs.EBSActions.property.PutSnapshotBlock">PutSnapshotBlock</a></code> | <code>string</code> | [Write] ebs:PutSnapshotBlock. |
| <code><a href="#@cdk_utils/iam.ebs.EBSActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ebs.EBSActions.property.StartSnapshot">StartSnapshot</a></code> | <code>string</code> | [Write] ebs:StartSnapshot. |

---

##### `actionGetSnapshotBlock`<sup>Required</sup> <a name="actionGetSnapshotBlock" id="@cdk_utils/iam.ebs.EBSActions.property.actionGetSnapshotBlock"></a>

```typescript
public readonly actionGetSnapshotBlock: string;
```

- *Type:* string

[Read] ebs:GetSnapshotBlock.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ebs.EBSActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ebs.EBSActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ebs.EBSActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ebs.EBSActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ebs.EBSActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CompleteSnapshot`<sup>Required</sup> <a name="CompleteSnapshot" id="@cdk_utils/iam.ebs.EBSActions.property.CompleteSnapshot"></a>

```typescript
public readonly CompleteSnapshot: string;
```

- *Type:* string

[Write] ebs:CompleteSnapshot.

---

##### `ListChangedBlocks`<sup>Required</sup> <a name="ListChangedBlocks" id="@cdk_utils/iam.ebs.EBSActions.property.ListChangedBlocks"></a>

```typescript
public readonly ListChangedBlocks: string;
```

- *Type:* string

[Read] ebs:ListChangedBlocks.

---

##### `ListSnapshotBlocks`<sup>Required</sup> <a name="ListSnapshotBlocks" id="@cdk_utils/iam.ebs.EBSActions.property.ListSnapshotBlocks"></a>

```typescript
public readonly ListSnapshotBlocks: string;
```

- *Type:* string

[Read] ebs:ListSnapshotBlocks.

---

##### `PutSnapshotBlock`<sup>Required</sup> <a name="PutSnapshotBlock" id="@cdk_utils/iam.ebs.EBSActions.property.PutSnapshotBlock"></a>

```typescript
public readonly PutSnapshotBlock: string;
```

- *Type:* string

[Write] ebs:PutSnapshotBlock.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ebs.EBSActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartSnapshot`<sup>Required</sup> <a name="StartSnapshot" id="@cdk_utils/iam.ebs.EBSActions.property.StartSnapshot"></a>

```typescript
public readonly StartSnapshot: string;
```

- *Type:* string

[Write] ebs:StartSnapshot.

---

### EBSConditions <a name="EBSConditions" id="@cdk_utils/iam.ebs.EBSConditions"></a>

Condition key constants and builders for ebs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ebs.EBSConditions.Initializer"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

new ebs.EBSConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.description">description</a></code> | Generates a condition block for `ebs:Description`. |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.parentSnapshot">parentSnapshot</a></code> | Generates a condition block for `ebs:ParentSnapshot`. |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.volumeSize">volumeSize</a></code> | Generates a condition block for `ebs:VolumeSize`. |

---

##### `description` <a name="description" id="@cdk_utils/iam.ebs.EBSConditions.description"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

ebs.EBSConditions.description(value: string)
```

Generates a condition block for `ebs:Description`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ebs.EBSConditions.description.parameter.value"></a>

- *Type:* string

---

##### `parentSnapshot` <a name="parentSnapshot" id="@cdk_utils/iam.ebs.EBSConditions.parentSnapshot"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

ebs.EBSConditions.parentSnapshot(value: string)
```

Generates a condition block for `ebs:ParentSnapshot`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ebs.EBSConditions.parentSnapshot.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ebs.EBSConditions.requestTag"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

ebs.EBSConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ebs.EBSConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ebs.EBSConditions.resourceTag"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

ebs.EBSConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ebs.EBSConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ebs.EBSConditions.tagKeys"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

ebs.EBSConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ebs.EBSConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `volumeSize` <a name="volumeSize" id="@cdk_utils/iam.ebs.EBSConditions.volumeSize"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

ebs.EBSConditions.volumeSize(value: number)
```

Generates a condition block for `ebs:VolumeSize`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ebs.EBSConditions.volumeSize.parameter.value"></a>

- *Type:* number

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.property.actionGetSnapshotBlockConditionKeys">actionGetSnapshotBlockConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSnapshotBlock action. |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.property.CompleteSnapshotConditionKeys">CompleteSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CompleteSnapshot action. |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.property.DESCRIPTION">DESCRIPTION</a></code> | <code>string</code> | Condition key: ebs:Description (String). |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.property.ListChangedBlocksConditionKeys">ListChangedBlocksConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListChangedBlocks action. |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.property.ListSnapshotBlocksConditionKeys">ListSnapshotBlocksConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSnapshotBlocks action. |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.property.PARENT_SNAPSHOT">PARENT_SNAPSHOT</a></code> | <code>string</code> | Condition key: ebs:ParentSnapshot (ARN). |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.property.PutSnapshotBlockConditionKeys">PutSnapshotBlockConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutSnapshotBlock action. |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.property.StartSnapshotConditionKeys">StartSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSnapshot action. |
| <code><a href="#@cdk_utils/iam.ebs.EBSConditions.property.VOLUME_SIZE">VOLUME_SIZE</a></code> | <code>string</code> | Condition key: ebs:VolumeSize (Numeric). |

---

##### `actionGetSnapshotBlockConditionKeys`<sup>Required</sup> <a name="actionGetSnapshotBlockConditionKeys" id="@cdk_utils/iam.ebs.EBSConditions.property.actionGetSnapshotBlockConditionKeys"></a>

```typescript
public readonly actionGetSnapshotBlockConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSnapshotBlock action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ebs.EBSConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ebs.EBSConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ebs.EBSConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CompleteSnapshotConditionKeys`<sup>Required</sup> <a name="CompleteSnapshotConditionKeys" id="@cdk_utils/iam.ebs.EBSConditions.property.CompleteSnapshotConditionKeys"></a>

```typescript
public readonly CompleteSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CompleteSnapshot action.

---

##### `DESCRIPTION`<sup>Required</sup> <a name="DESCRIPTION" id="@cdk_utils/iam.ebs.EBSConditions.property.DESCRIPTION"></a>

```typescript
public readonly DESCRIPTION: string;
```

- *Type:* string

Condition key: ebs:Description (String).

---

##### `ListChangedBlocksConditionKeys`<sup>Required</sup> <a name="ListChangedBlocksConditionKeys" id="@cdk_utils/iam.ebs.EBSConditions.property.ListChangedBlocksConditionKeys"></a>

```typescript
public readonly ListChangedBlocksConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListChangedBlocks action.

---

##### `ListSnapshotBlocksConditionKeys`<sup>Required</sup> <a name="ListSnapshotBlocksConditionKeys" id="@cdk_utils/iam.ebs.EBSConditions.property.ListSnapshotBlocksConditionKeys"></a>

```typescript
public readonly ListSnapshotBlocksConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSnapshotBlocks action.

---

##### `PARENT_SNAPSHOT`<sup>Required</sup> <a name="PARENT_SNAPSHOT" id="@cdk_utils/iam.ebs.EBSConditions.property.PARENT_SNAPSHOT"></a>

```typescript
public readonly PARENT_SNAPSHOT: string;
```

- *Type:* string

Condition key: ebs:ParentSnapshot (ARN).

---

##### `PutSnapshotBlockConditionKeys`<sup>Required</sup> <a name="PutSnapshotBlockConditionKeys" id="@cdk_utils/iam.ebs.EBSConditions.property.PutSnapshotBlockConditionKeys"></a>

```typescript
public readonly PutSnapshotBlockConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutSnapshotBlock action.

---

##### `StartSnapshotConditionKeys`<sup>Required</sup> <a name="StartSnapshotConditionKeys" id="@cdk_utils/iam.ebs.EBSConditions.property.StartSnapshotConditionKeys"></a>

```typescript
public readonly StartSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSnapshot action.

---

##### `VOLUME_SIZE`<sup>Required</sup> <a name="VOLUME_SIZE" id="@cdk_utils/iam.ebs.EBSConditions.property.VOLUME_SIZE"></a>

```typescript
public readonly VOLUME_SIZE: string;
```

- *Type:* string

Condition key: ebs:VolumeSize (Numeric).

---

### EBSOperations <a name="EBSOperations" id="@cdk_utils/iam.ebs.EBSOperations"></a>

API operation to required IAM actions mapping for ebs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ebs.EBSOperations.Initializer"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

new ebs.EBSOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ebs.EBSOperations.property.CompleteSnapshot">CompleteSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CompleteSnapshot API call. |
| <code><a href="#@cdk_utils/iam.ebs.EBSOperations.property.ListChangedBlocks">ListChangedBlocks</a></code> | <code>string[]</code> | IAM actions required for the ListChangedBlocks API call. |
| <code><a href="#@cdk_utils/iam.ebs.EBSOperations.property.ListSnapshotBlocks">ListSnapshotBlocks</a></code> | <code>string[]</code> | IAM actions required for the ListSnapshotBlocks API call. |
| <code><a href="#@cdk_utils/iam.ebs.EBSOperations.property.opGetSnapshotBlock">opGetSnapshotBlock</a></code> | <code>string[]</code> | IAM actions required for the GetSnapshotBlock API call. |
| <code><a href="#@cdk_utils/iam.ebs.EBSOperations.property.PutSnapshotBlock">PutSnapshotBlock</a></code> | <code>string[]</code> | IAM actions required for the PutSnapshotBlock API call. |
| <code><a href="#@cdk_utils/iam.ebs.EBSOperations.property.StartSnapshot">StartSnapshot</a></code> | <code>string[]</code> | IAM actions required for the StartSnapshot API call. |

---

##### `CompleteSnapshot`<sup>Required</sup> <a name="CompleteSnapshot" id="@cdk_utils/iam.ebs.EBSOperations.property.CompleteSnapshot"></a>

```typescript
public readonly CompleteSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CompleteSnapshot API call.

---

##### `ListChangedBlocks`<sup>Required</sup> <a name="ListChangedBlocks" id="@cdk_utils/iam.ebs.EBSOperations.property.ListChangedBlocks"></a>

```typescript
public readonly ListChangedBlocks: string[];
```

- *Type:* string[]

IAM actions required for the ListChangedBlocks API call.

---

##### `ListSnapshotBlocks`<sup>Required</sup> <a name="ListSnapshotBlocks" id="@cdk_utils/iam.ebs.EBSOperations.property.ListSnapshotBlocks"></a>

```typescript
public readonly ListSnapshotBlocks: string[];
```

- *Type:* string[]

IAM actions required for the ListSnapshotBlocks API call.

---

##### `opGetSnapshotBlock`<sup>Required</sup> <a name="opGetSnapshotBlock" id="@cdk_utils/iam.ebs.EBSOperations.property.opGetSnapshotBlock"></a>

```typescript
public readonly opGetSnapshotBlock: string[];
```

- *Type:* string[]

IAM actions required for the GetSnapshotBlock API call.

---

##### `PutSnapshotBlock`<sup>Required</sup> <a name="PutSnapshotBlock" id="@cdk_utils/iam.ebs.EBSOperations.property.PutSnapshotBlock"></a>

```typescript
public readonly PutSnapshotBlock: string[];
```

- *Type:* string[]

IAM actions required for the PutSnapshotBlock API call.

---

##### `StartSnapshot`<sup>Required</sup> <a name="StartSnapshot" id="@cdk_utils/iam.ebs.EBSOperations.property.StartSnapshot"></a>

```typescript
public readonly StartSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the StartSnapshot API call.

---

### EBSResources <a name="EBSResources" id="@cdk_utils/iam.ebs.EBSResources"></a>

ARN builders, validators, and parsers for ebs resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ebs.EBSResources.Initializer"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

new ebs.EBSResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ebs.EBSResources.isValidSnapshotArn">isValidSnapshotArn</a></code> | Validates whether a string is a valid ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.ebs.EBSResources.parseSnapshotArn">parseSnapshotArn</a></code> | Parses a snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.ebs.EBSResources.snapshot">snapshot</a></code> | Builds an ARN for the snapshot resource. |

---

##### `isValidSnapshotArn` <a name="isValidSnapshotArn" id="@cdk_utils/iam.ebs.EBSResources.isValidSnapshotArn"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

ebs.EBSResources.isValidSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ebs.EBSResources.isValidSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapshotArn` <a name="parseSnapshotArn" id="@cdk_utils/iam.ebs.EBSResources.parseSnapshotArn"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

ebs.EBSResources.parseSnapshotArn(arn: string)
```

Parses a snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ebs.EBSResources.parseSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `snapshot` <a name="snapshot" id="@cdk_utils/iam.ebs.EBSResources.snapshot"></a>

```typescript
import { ebs } from '@cdk_utils/iam'

ebs.EBSResources.snapshot(props: EBSSnapshotArnProps)
```

Builds an ARN for the snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ebs.EBSResources.snapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ebs.EBSSnapshotArnProps">EBSSnapshotArnProps</a>

---




