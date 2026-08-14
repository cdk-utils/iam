# `firehose` Submodule <a name="`firehose` Submodule" id="@cdk_utils/iam.firehose"></a>


## Structs <a name="Structs" id="Structs"></a>

### FirehoseDeliverystreamArnComponents <a name="FirehoseDeliverystreamArnComponents" id="@cdk_utils/iam.firehose.FirehoseDeliverystreamArnComponents"></a>

Parsed components of a deliverystream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.firehose.FirehoseDeliverystreamArnComponents.Initializer"></a>

```typescript
import { firehose } from '@cdk_utils/iam'

const firehoseDeliverystreamArnComponents: firehose.FirehoseDeliverystreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseDeliverystreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseDeliverystreamArnComponents.property.deliveryStreamName">deliveryStreamName</a></code> | <code>string</code> | The DeliveryStreamName component. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseDeliverystreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseDeliverystreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.firehose.FirehoseDeliverystreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deliveryStreamName`<sup>Required</sup> <a name="deliveryStreamName" id="@cdk_utils/iam.firehose.FirehoseDeliverystreamArnComponents.property.deliveryStreamName"></a>

```typescript
public readonly deliveryStreamName: string;
```

- *Type:* string

The DeliveryStreamName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.firehose.FirehoseDeliverystreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.firehose.FirehoseDeliverystreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FirehoseDeliverystreamArnProps <a name="FirehoseDeliverystreamArnProps" id="@cdk_utils/iam.firehose.FirehoseDeliverystreamArnProps"></a>

Properties for building a deliverystream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.firehose.FirehoseDeliverystreamArnProps.Initializer"></a>

```typescript
import { firehose } from '@cdk_utils/iam'

const firehoseDeliverystreamArnProps: firehose.FirehoseDeliverystreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseDeliverystreamArnProps.property.deliveryStreamName">deliveryStreamName</a></code> | <code>string</code> | The DeliveryStreamName component of the ARN. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseDeliverystreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseDeliverystreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseDeliverystreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deliveryStreamName`<sup>Required</sup> <a name="deliveryStreamName" id="@cdk_utils/iam.firehose.FirehoseDeliverystreamArnProps.property.deliveryStreamName"></a>

```typescript
public readonly deliveryStreamName: string;
```

- *Type:* string

The DeliveryStreamName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.firehose.FirehoseDeliverystreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.firehose.FirehoseDeliverystreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.firehose.FirehoseDeliverystreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### FirehoseActions <a name="FirehoseActions" id="@cdk_utils/iam.firehose.FirehoseActions"></a>

IAM action constants for the firehose service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.firehose.FirehoseActions.Initializer"></a>

```typescript
import { firehose } from '@cdk_utils/iam'

new firehose.FirehoseActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.CreateDeliveryStream">CreateDeliveryStream</a></code> | <code>string</code> | [Write] firehose:CreateDeliveryStream. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.DeleteDeliveryStream">DeleteDeliveryStream</a></code> | <code>string</code> | [Write] firehose:DeleteDeliveryStream. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.DescribeDeliveryStream">DescribeDeliveryStream</a></code> | <code>string</code> | [Read] firehose:DescribeDeliveryStream. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.ListDeliveryStreams">ListDeliveryStreams</a></code> | <code>string</code> | [List] firehose:ListDeliveryStreams. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.ListTagsForDeliveryStream">ListTagsForDeliveryStream</a></code> | <code>string</code> | [List] firehose:ListTagsForDeliveryStream. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.PutRecord">PutRecord</a></code> | <code>string</code> | [Write] firehose:PutRecord. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.PutRecordBatch">PutRecordBatch</a></code> | <code>string</code> | [Write] firehose:PutRecordBatch. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.StartDeliveryStreamEncryption">StartDeliveryStreamEncryption</a></code> | <code>string</code> | [Write] firehose:StartDeliveryStreamEncryption. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.StopDeliveryStreamEncryption">StopDeliveryStreamEncryption</a></code> | <code>string</code> | [Write] firehose:StopDeliveryStreamEncryption. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.TagDeliveryStream">TagDeliveryStream</a></code> | <code>string</code> | [Tagging] firehose:TagDeliveryStream. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.UntagDeliveryStream">UntagDeliveryStream</a></code> | <code>string</code> | [Tagging] firehose:UntagDeliveryStream. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseActions.property.UpdateDestination">UpdateDestination</a></code> | <code>string</code> | [Write] firehose:UpdateDestination. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.firehose.FirehoseActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.firehose.FirehoseActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.firehose.FirehoseActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.firehose.FirehoseActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.firehose.FirehoseActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateDeliveryStream`<sup>Required</sup> <a name="CreateDeliveryStream" id="@cdk_utils/iam.firehose.FirehoseActions.property.CreateDeliveryStream"></a>

```typescript
public readonly CreateDeliveryStream: string;
```

- *Type:* string

[Write] firehose:CreateDeliveryStream.

---

##### `DeleteDeliveryStream`<sup>Required</sup> <a name="DeleteDeliveryStream" id="@cdk_utils/iam.firehose.FirehoseActions.property.DeleteDeliveryStream"></a>

```typescript
public readonly DeleteDeliveryStream: string;
```

- *Type:* string

[Write] firehose:DeleteDeliveryStream.

---

##### `DescribeDeliveryStream`<sup>Required</sup> <a name="DescribeDeliveryStream" id="@cdk_utils/iam.firehose.FirehoseActions.property.DescribeDeliveryStream"></a>

```typescript
public readonly DescribeDeliveryStream: string;
```

- *Type:* string

[Read] firehose:DescribeDeliveryStream.

---

##### `ListDeliveryStreams`<sup>Required</sup> <a name="ListDeliveryStreams" id="@cdk_utils/iam.firehose.FirehoseActions.property.ListDeliveryStreams"></a>

```typescript
public readonly ListDeliveryStreams: string;
```

- *Type:* string

[List] firehose:ListDeliveryStreams.

---

##### `ListTagsForDeliveryStream`<sup>Required</sup> <a name="ListTagsForDeliveryStream" id="@cdk_utils/iam.firehose.FirehoseActions.property.ListTagsForDeliveryStream"></a>

```typescript
public readonly ListTagsForDeliveryStream: string;
```

- *Type:* string

[List] firehose:ListTagsForDeliveryStream.

---

##### `PutRecord`<sup>Required</sup> <a name="PutRecord" id="@cdk_utils/iam.firehose.FirehoseActions.property.PutRecord"></a>

```typescript
public readonly PutRecord: string;
```

- *Type:* string

[Write] firehose:PutRecord.

---

##### `PutRecordBatch`<sup>Required</sup> <a name="PutRecordBatch" id="@cdk_utils/iam.firehose.FirehoseActions.property.PutRecordBatch"></a>

```typescript
public readonly PutRecordBatch: string;
```

- *Type:* string

[Write] firehose:PutRecordBatch.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.firehose.FirehoseActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDeliveryStreamEncryption`<sup>Required</sup> <a name="StartDeliveryStreamEncryption" id="@cdk_utils/iam.firehose.FirehoseActions.property.StartDeliveryStreamEncryption"></a>

```typescript
public readonly StartDeliveryStreamEncryption: string;
```

- *Type:* string

[Write] firehose:StartDeliveryStreamEncryption.

---

##### `StopDeliveryStreamEncryption`<sup>Required</sup> <a name="StopDeliveryStreamEncryption" id="@cdk_utils/iam.firehose.FirehoseActions.property.StopDeliveryStreamEncryption"></a>

```typescript
public readonly StopDeliveryStreamEncryption: string;
```

- *Type:* string

[Write] firehose:StopDeliveryStreamEncryption.

---

##### `TagDeliveryStream`<sup>Required</sup> <a name="TagDeliveryStream" id="@cdk_utils/iam.firehose.FirehoseActions.property.TagDeliveryStream"></a>

```typescript
public readonly TagDeliveryStream: string;
```

- *Type:* string

[Tagging] firehose:TagDeliveryStream.

---

##### `UntagDeliveryStream`<sup>Required</sup> <a name="UntagDeliveryStream" id="@cdk_utils/iam.firehose.FirehoseActions.property.UntagDeliveryStream"></a>

```typescript
public readonly UntagDeliveryStream: string;
```

- *Type:* string

[Tagging] firehose:UntagDeliveryStream.

---

##### `UpdateDestination`<sup>Required</sup> <a name="UpdateDestination" id="@cdk_utils/iam.firehose.FirehoseActions.property.UpdateDestination"></a>

```typescript
public readonly UpdateDestination: string;
```

- *Type:* string

[Write] firehose:UpdateDestination.

---

### FirehoseConditions <a name="FirehoseConditions" id="@cdk_utils/iam.firehose.FirehoseConditions"></a>

Condition key constants and builders for firehose.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.firehose.FirehoseConditions.Initializer"></a>

```typescript
import { firehose } from '@cdk_utils/iam'

new firehose.FirehoseConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.firehose.FirehoseConditions.requestTag"></a>

```typescript
import { firehose } from '@cdk_utils/iam'

firehose.FirehoseConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.firehose.FirehoseConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.firehose.FirehoseConditions.resourceTag"></a>

```typescript
import { firehose } from '@cdk_utils/iam'

firehose.FirehoseConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.firehose.FirehoseConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.firehose.FirehoseConditions.tagKeys"></a>

```typescript
import { firehose } from '@cdk_utils/iam'

firehose.FirehoseConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.firehose.FirehoseConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseConditions.property.CreateDeliveryStreamConditionKeys">CreateDeliveryStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeliveryStream action. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseConditions.property.TagDeliveryStreamConditionKeys">TagDeliveryStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagDeliveryStream action. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseConditions.property.UntagDeliveryStreamConditionKeys">UntagDeliveryStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagDeliveryStream action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.firehose.FirehoseConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.firehose.FirehoseConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.firehose.FirehoseConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDeliveryStreamConditionKeys`<sup>Required</sup> <a name="CreateDeliveryStreamConditionKeys" id="@cdk_utils/iam.firehose.FirehoseConditions.property.CreateDeliveryStreamConditionKeys"></a>

```typescript
public readonly CreateDeliveryStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeliveryStream action.

---

##### `TagDeliveryStreamConditionKeys`<sup>Required</sup> <a name="TagDeliveryStreamConditionKeys" id="@cdk_utils/iam.firehose.FirehoseConditions.property.TagDeliveryStreamConditionKeys"></a>

```typescript
public readonly TagDeliveryStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagDeliveryStream action.

---

##### `UntagDeliveryStreamConditionKeys`<sup>Required</sup> <a name="UntagDeliveryStreamConditionKeys" id="@cdk_utils/iam.firehose.FirehoseConditions.property.UntagDeliveryStreamConditionKeys"></a>

```typescript
public readonly UntagDeliveryStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagDeliveryStream action.

---

### FirehoseOperations <a name="FirehoseOperations" id="@cdk_utils/iam.firehose.FirehoseOperations"></a>

API operation to required IAM actions mapping for firehose.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.firehose.FirehoseOperations.Initializer"></a>

```typescript
import { firehose } from '@cdk_utils/iam'

new firehose.FirehoseOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseOperations.property.CreateDeliveryStream">CreateDeliveryStream</a></code> | <code>string[]</code> | IAM actions required for the CreateDeliveryStream API call. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseOperations.property.DeleteDeliveryStream">DeleteDeliveryStream</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeliveryStream API call. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseOperations.property.DescribeDeliveryStream">DescribeDeliveryStream</a></code> | <code>string[]</code> | IAM actions required for the DescribeDeliveryStream API call. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseOperations.property.ListDeliveryStreams">ListDeliveryStreams</a></code> | <code>string[]</code> | IAM actions required for the ListDeliveryStreams API call. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseOperations.property.ListTagsForDeliveryStream">ListTagsForDeliveryStream</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForDeliveryStream API call. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseOperations.property.PutRecord">PutRecord</a></code> | <code>string[]</code> | IAM actions required for the PutRecord API call. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseOperations.property.PutRecordBatch">PutRecordBatch</a></code> | <code>string[]</code> | IAM actions required for the PutRecordBatch API call. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseOperations.property.StartDeliveryStreamEncryption">StartDeliveryStreamEncryption</a></code> | <code>string[]</code> | IAM actions required for the StartDeliveryStreamEncryption API call. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseOperations.property.StopDeliveryStreamEncryption">StopDeliveryStreamEncryption</a></code> | <code>string[]</code> | IAM actions required for the StopDeliveryStreamEncryption API call. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseOperations.property.TagDeliveryStream">TagDeliveryStream</a></code> | <code>string[]</code> | IAM actions required for the TagDeliveryStream API call. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseOperations.property.UntagDeliveryStream">UntagDeliveryStream</a></code> | <code>string[]</code> | IAM actions required for the UntagDeliveryStream API call. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseOperations.property.UpdateDestination">UpdateDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdateDestination API call. |

---

##### `CreateDeliveryStream`<sup>Required</sup> <a name="CreateDeliveryStream" id="@cdk_utils/iam.firehose.FirehoseOperations.property.CreateDeliveryStream"></a>

```typescript
public readonly CreateDeliveryStream: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeliveryStream API call.

---

##### `DeleteDeliveryStream`<sup>Required</sup> <a name="DeleteDeliveryStream" id="@cdk_utils/iam.firehose.FirehoseOperations.property.DeleteDeliveryStream"></a>

```typescript
public readonly DeleteDeliveryStream: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeliveryStream API call.

---

##### `DescribeDeliveryStream`<sup>Required</sup> <a name="DescribeDeliveryStream" id="@cdk_utils/iam.firehose.FirehoseOperations.property.DescribeDeliveryStream"></a>

```typescript
public readonly DescribeDeliveryStream: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDeliveryStream API call.

---

##### `ListDeliveryStreams`<sup>Required</sup> <a name="ListDeliveryStreams" id="@cdk_utils/iam.firehose.FirehoseOperations.property.ListDeliveryStreams"></a>

```typescript
public readonly ListDeliveryStreams: string[];
```

- *Type:* string[]

IAM actions required for the ListDeliveryStreams API call.

---

##### `ListTagsForDeliveryStream`<sup>Required</sup> <a name="ListTagsForDeliveryStream" id="@cdk_utils/iam.firehose.FirehoseOperations.property.ListTagsForDeliveryStream"></a>

```typescript
public readonly ListTagsForDeliveryStream: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForDeliveryStream API call.

---

##### `PutRecord`<sup>Required</sup> <a name="PutRecord" id="@cdk_utils/iam.firehose.FirehoseOperations.property.PutRecord"></a>

```typescript
public readonly PutRecord: string[];
```

- *Type:* string[]

IAM actions required for the PutRecord API call.

---

##### `PutRecordBatch`<sup>Required</sup> <a name="PutRecordBatch" id="@cdk_utils/iam.firehose.FirehoseOperations.property.PutRecordBatch"></a>

```typescript
public readonly PutRecordBatch: string[];
```

- *Type:* string[]

IAM actions required for the PutRecordBatch API call.

---

##### `StartDeliveryStreamEncryption`<sup>Required</sup> <a name="StartDeliveryStreamEncryption" id="@cdk_utils/iam.firehose.FirehoseOperations.property.StartDeliveryStreamEncryption"></a>

```typescript
public readonly StartDeliveryStreamEncryption: string[];
```

- *Type:* string[]

IAM actions required for the StartDeliveryStreamEncryption API call.

---

##### `StopDeliveryStreamEncryption`<sup>Required</sup> <a name="StopDeliveryStreamEncryption" id="@cdk_utils/iam.firehose.FirehoseOperations.property.StopDeliveryStreamEncryption"></a>

```typescript
public readonly StopDeliveryStreamEncryption: string[];
```

- *Type:* string[]

IAM actions required for the StopDeliveryStreamEncryption API call.

---

##### `TagDeliveryStream`<sup>Required</sup> <a name="TagDeliveryStream" id="@cdk_utils/iam.firehose.FirehoseOperations.property.TagDeliveryStream"></a>

```typescript
public readonly TagDeliveryStream: string[];
```

- *Type:* string[]

IAM actions required for the TagDeliveryStream API call.

---

##### `UntagDeliveryStream`<sup>Required</sup> <a name="UntagDeliveryStream" id="@cdk_utils/iam.firehose.FirehoseOperations.property.UntagDeliveryStream"></a>

```typescript
public readonly UntagDeliveryStream: string[];
```

- *Type:* string[]

IAM actions required for the UntagDeliveryStream API call.

---

##### `UpdateDestination`<sup>Required</sup> <a name="UpdateDestination" id="@cdk_utils/iam.firehose.FirehoseOperations.property.UpdateDestination"></a>

```typescript
public readonly UpdateDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDestination API call.

---

### FirehoseResources <a name="FirehoseResources" id="@cdk_utils/iam.firehose.FirehoseResources"></a>

ARN builders, validators, and parsers for firehose resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.firehose.FirehoseResources.Initializer"></a>

```typescript
import { firehose } from '@cdk_utils/iam'

new firehose.FirehoseResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseResources.deliverystream">deliverystream</a></code> | Builds an ARN for the deliverystream resource. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseResources.isValidDeliverystreamArn">isValidDeliverystreamArn</a></code> | Validates whether a string is a valid ARN for the deliverystream resource. |
| <code><a href="#@cdk_utils/iam.firehose.FirehoseResources.parseDeliverystreamArn">parseDeliverystreamArn</a></code> | Parses a deliverystream ARN into its components. |

---

##### `deliverystream` <a name="deliverystream" id="@cdk_utils/iam.firehose.FirehoseResources.deliverystream"></a>

```typescript
import { firehose } from '@cdk_utils/iam'

firehose.FirehoseResources.deliverystream(props: FirehoseDeliverystreamArnProps)
```

Builds an ARN for the deliverystream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.firehose.FirehoseResources.deliverystream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.firehose.FirehoseDeliverystreamArnProps">FirehoseDeliverystreamArnProps</a>

---

##### `isValidDeliverystreamArn` <a name="isValidDeliverystreamArn" id="@cdk_utils/iam.firehose.FirehoseResources.isValidDeliverystreamArn"></a>

```typescript
import { firehose } from '@cdk_utils/iam'

firehose.FirehoseResources.isValidDeliverystreamArn(arn: string)
```

Validates whether a string is a valid ARN for the deliverystream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.firehose.FirehoseResources.isValidDeliverystreamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeliverystreamArn` <a name="parseDeliverystreamArn" id="@cdk_utils/iam.firehose.FirehoseResources.parseDeliverystreamArn"></a>

```typescript
import { firehose } from '@cdk_utils/iam'

firehose.FirehoseResources.parseDeliverystreamArn(arn: string)
```

Parses a deliverystream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.firehose.FirehoseResources.parseDeliverystreamArn.parameter.arn"></a>

- *Type:* string

---




