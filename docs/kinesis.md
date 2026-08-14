# `kinesis` Submodule <a name="`kinesis` Submodule" id="@cdk_utils/iam.kinesis"></a>


## Structs <a name="Structs" id="Structs"></a>

### KinesisConsumerArnComponents <a name="KinesisConsumerArnComponents" id="@cdk_utils/iam.kinesis.KinesisConsumerArnComponents"></a>

Parsed components of a consumer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.Initializer"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

const kinesisConsumerArnComponents: kinesis.KinesisConsumerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.consumerCreationTimpstamp">consumerCreationTimpstamp</a></code> | <code>string</code> | The ConsumerCreationTimpstamp component. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.consumerName">consumerName</a></code> | <code>string</code> | The ConsumerName component. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.streamName">streamName</a></code> | <code>string</code> | The StreamName component. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.streamType">streamType</a></code> | <code>string</code> | The StreamType component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `consumerCreationTimpstamp`<sup>Required</sup> <a name="consumerCreationTimpstamp" id="@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.consumerCreationTimpstamp"></a>

```typescript
public readonly consumerCreationTimpstamp: string;
```

- *Type:* string

The ConsumerCreationTimpstamp component.

---

##### `consumerName`<sup>Required</sup> <a name="consumerName" id="@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.consumerName"></a>

```typescript
public readonly consumerName: string;
```

- *Type:* string

The ConsumerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

The StreamName component.

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdk_utils/iam.kinesis.KinesisConsumerArnComponents.property.streamType"></a>

```typescript
public readonly streamType: string;
```

- *Type:* string

The StreamType component.

---

### KinesisConsumerArnProps <a name="KinesisConsumerArnProps" id="@cdk_utils/iam.kinesis.KinesisConsumerArnProps"></a>

Properties for building a consumer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kinesis.KinesisConsumerArnProps.Initializer"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

const kinesisConsumerArnProps: kinesis.KinesisConsumerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.consumerCreationTimpstamp">consumerCreationTimpstamp</a></code> | <code>string</code> | The ConsumerCreationTimpstamp component of the ARN. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.consumerName">consumerName</a></code> | <code>string</code> | The ConsumerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.streamName">streamName</a></code> | <code>string</code> | The StreamName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.streamType">streamType</a></code> | <code>string</code> | The StreamType component of the ARN. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `consumerCreationTimpstamp`<sup>Required</sup> <a name="consumerCreationTimpstamp" id="@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.consumerCreationTimpstamp"></a>

```typescript
public readonly consumerCreationTimpstamp: string;
```

- *Type:* string

The ConsumerCreationTimpstamp component of the ARN.

---

##### `consumerName`<sup>Required</sup> <a name="consumerName" id="@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.consumerName"></a>

```typescript
public readonly consumerName: string;
```

- *Type:* string

The ConsumerName component of the ARN.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

The StreamName component of the ARN.

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.streamType"></a>

```typescript
public readonly streamType: string;
```

- *Type:* string

The StreamType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kinesis.KinesisConsumerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KinesisKMSKeyArnComponents <a name="KinesisKMSKeyArnComponents" id="@cdk_utils/iam.kinesis.KinesisKMSKeyArnComponents"></a>

Parsed components of a kmsKey ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kinesis.KinesisKMSKeyArnComponents.Initializer"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

const kinesisKMSKeyArnComponents: kinesis.KinesisKMSKeyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisKMSKeyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisKMSKeyArnComponents.property.keyId">keyId</a></code> | <code>string</code> | The KeyId component. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisKMSKeyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisKMSKeyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kinesis.KinesisKMSKeyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdk_utils/iam.kinesis.KinesisKMSKeyArnComponents.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The KeyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kinesis.KinesisKMSKeyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kinesis.KinesisKMSKeyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KinesisKMSKeyArnProps <a name="KinesisKMSKeyArnProps" id="@cdk_utils/iam.kinesis.KinesisKMSKeyArnProps"></a>

Properties for building a kmsKey ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kinesis.KinesisKMSKeyArnProps.Initializer"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

const kinesisKMSKeyArnProps: kinesis.KinesisKMSKeyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisKMSKeyArnProps.property.keyId">keyId</a></code> | <code>string</code> | The KeyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisKMSKeyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisKMSKeyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisKMSKeyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdk_utils/iam.kinesis.KinesisKMSKeyArnProps.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The KeyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kinesis.KinesisKMSKeyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kinesis.KinesisKMSKeyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kinesis.KinesisKMSKeyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KinesisStreamArnComponents <a name="KinesisStreamArnComponents" id="@cdk_utils/iam.kinesis.KinesisStreamArnComponents"></a>

Parsed components of a stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kinesis.KinesisStreamArnComponents.Initializer"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

const kinesisStreamArnComponents: kinesis.KinesisStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisStreamArnComponents.property.streamName">streamName</a></code> | <code>string</code> | The StreamName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kinesis.KinesisStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kinesis.KinesisStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kinesis.KinesisStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdk_utils/iam.kinesis.KinesisStreamArnComponents.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

The StreamName component.

---

### KinesisStreamArnProps <a name="KinesisStreamArnProps" id="@cdk_utils/iam.kinesis.KinesisStreamArnProps"></a>

Properties for building a stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kinesis.KinesisStreamArnProps.Initializer"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

const kinesisStreamArnProps: kinesis.KinesisStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisStreamArnProps.property.streamName">streamName</a></code> | <code>string</code> | The StreamName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdk_utils/iam.kinesis.KinesisStreamArnProps.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

The StreamName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kinesis.KinesisStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kinesis.KinesisStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kinesis.KinesisStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisActions <a name="KinesisActions" id="@cdk_utils/iam.kinesis.KinesisActions"></a>

IAM action constants for the kinesis service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kinesis.KinesisActions.Initializer"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

new kinesis.KinesisActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.actionGetRecords">actionGetRecords</a></code> | <code>string</code> | [Read] kinesis:GetRecords. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] kinesis:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.actionGetShardIterator">actionGetShardIterator</a></code> | <code>string</code> | [Read] kinesis:GetShardIterator. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.AddTagsToStream">AddTagsToStream</a></code> | <code>string</code> | [Tagging] kinesis:AddTagsToStream. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.CreateStream">CreateStream</a></code> | <code>string</code> | [Write] kinesis:CreateStream. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.DecreaseStreamRetentionPeriod">DecreaseStreamRetentionPeriod</a></code> | <code>string</code> | [Write] kinesis:DecreaseStreamRetentionPeriod. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] kinesis:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.DeleteStream">DeleteStream</a></code> | <code>string</code> | [Write] kinesis:DeleteStream. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.DeregisterStreamConsumer">DeregisterStreamConsumer</a></code> | <code>string</code> | [Write] kinesis:DeregisterStreamConsumer. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.DescribeAccountSettings">DescribeAccountSettings</a></code> | <code>string</code> | [Read] kinesis:DescribeAccountSettings. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.DescribeLimits">DescribeLimits</a></code> | <code>string</code> | [Read] kinesis:DescribeLimits. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.DescribeStream">DescribeStream</a></code> | <code>string</code> | [Read] kinesis:DescribeStream. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.DescribeStreamConsumer">DescribeStreamConsumer</a></code> | <code>string</code> | [Read] kinesis:DescribeStreamConsumer. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.DescribeStreamSummary">DescribeStreamSummary</a></code> | <code>string</code> | [Read] kinesis:DescribeStreamSummary. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.DisableEnhancedMonitoring">DisableEnhancedMonitoring</a></code> | <code>string</code> | [Write] kinesis:DisableEnhancedMonitoring. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.EnableEnhancedMonitoring">EnableEnhancedMonitoring</a></code> | <code>string</code> | [Write] kinesis:EnableEnhancedMonitoring. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.IncreaseStreamRetentionPeriod">IncreaseStreamRetentionPeriod</a></code> | <code>string</code> | [Write] kinesis:IncreaseStreamRetentionPeriod. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.InjectApiError">InjectApiError</a></code> | <code>string</code> | [Write] kinesis:InjectApiError. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.ListShards">ListShards</a></code> | <code>string</code> | [List] kinesis:ListShards. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.ListStreamConsumers">ListStreamConsumers</a></code> | <code>string</code> | [List] kinesis:ListStreamConsumers. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.ListStreams">ListStreams</a></code> | <code>string</code> | [List] kinesis:ListStreams. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] kinesis:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.ListTagsForStream">ListTagsForStream</a></code> | <code>string</code> | [Read] kinesis:ListTagsForStream. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.MergeShards">MergeShards</a></code> | <code>string</code> | [Write] kinesis:MergeShards. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.PutRecord">PutRecord</a></code> | <code>string</code> | [Write] kinesis:PutRecord. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.PutRecords">PutRecords</a></code> | <code>string</code> | [Write] kinesis:PutRecords. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] kinesis:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.RegisterStreamConsumer">RegisterStreamConsumer</a></code> | <code>string</code> | [Write] kinesis:RegisterStreamConsumer. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.RemoveTagsFromStream">RemoveTagsFromStream</a></code> | <code>string</code> | [Tagging] kinesis:RemoveTagsFromStream. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.SplitShard">SplitShard</a></code> | <code>string</code> | [Write] kinesis:SplitShard. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.StartStreamEncryption">StartStreamEncryption</a></code> | <code>string</code> | [Write] kinesis:StartStreamEncryption. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.StopStreamEncryption">StopStreamEncryption</a></code> | <code>string</code> | [Write] kinesis:StopStreamEncryption. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.SubscribeToShard">SubscribeToShard</a></code> | <code>string</code> | [Read] kinesis:SubscribeToShard. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] kinesis:TagResource. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] kinesis:UntagResource. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string</code> | [Write] kinesis:UpdateAccountSettings. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.UpdateMaxRecordSize">UpdateMaxRecordSize</a></code> | <code>string</code> | [Write] kinesis:UpdateMaxRecordSize. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.UpdateShardCount">UpdateShardCount</a></code> | <code>string</code> | [Write] kinesis:UpdateShardCount. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.UpdateStreamMode">UpdateStreamMode</a></code> | <code>string</code> | [Write] kinesis:UpdateStreamMode. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisActions.property.UpdateStreamWarmThroughput">UpdateStreamWarmThroughput</a></code> | <code>string</code> | [Write] kinesis:UpdateStreamWarmThroughput. |

---

##### `actionGetRecords`<sup>Required</sup> <a name="actionGetRecords" id="@cdk_utils/iam.kinesis.KinesisActions.property.actionGetRecords"></a>

```typescript
public readonly actionGetRecords: string;
```

- *Type:* string

[Read] kinesis:GetRecords.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.kinesis.KinesisActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] kinesis:GetResourcePolicy.

---

##### `actionGetShardIterator`<sup>Required</sup> <a name="actionGetShardIterator" id="@cdk_utils/iam.kinesis.KinesisActions.property.actionGetShardIterator"></a>

```typescript
public readonly actionGetShardIterator: string;
```

- *Type:* string

[Read] kinesis:GetShardIterator.

---

##### `AddTagsToStream`<sup>Required</sup> <a name="AddTagsToStream" id="@cdk_utils/iam.kinesis.KinesisActions.property.AddTagsToStream"></a>

```typescript
public readonly AddTagsToStream: string;
```

- *Type:* string

[Tagging] kinesis:AddTagsToStream.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.kinesis.KinesisActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.kinesis.KinesisActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.kinesis.KinesisActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.kinesis.KinesisActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.kinesis.KinesisActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateStream`<sup>Required</sup> <a name="CreateStream" id="@cdk_utils/iam.kinesis.KinesisActions.property.CreateStream"></a>

```typescript
public readonly CreateStream: string;
```

- *Type:* string

[Write] kinesis:CreateStream.

---

##### `DecreaseStreamRetentionPeriod`<sup>Required</sup> <a name="DecreaseStreamRetentionPeriod" id="@cdk_utils/iam.kinesis.KinesisActions.property.DecreaseStreamRetentionPeriod"></a>

```typescript
public readonly DecreaseStreamRetentionPeriod: string;
```

- *Type:* string

[Write] kinesis:DecreaseStreamRetentionPeriod.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.kinesis.KinesisActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] kinesis:DeleteResourcePolicy.

---

##### `DeleteStream`<sup>Required</sup> <a name="DeleteStream" id="@cdk_utils/iam.kinesis.KinesisActions.property.DeleteStream"></a>

```typescript
public readonly DeleteStream: string;
```

- *Type:* string

[Write] kinesis:DeleteStream.

---

##### `DeregisterStreamConsumer`<sup>Required</sup> <a name="DeregisterStreamConsumer" id="@cdk_utils/iam.kinesis.KinesisActions.property.DeregisterStreamConsumer"></a>

```typescript
public readonly DeregisterStreamConsumer: string;
```

- *Type:* string

[Write] kinesis:DeregisterStreamConsumer.

---

##### `DescribeAccountSettings`<sup>Required</sup> <a name="DescribeAccountSettings" id="@cdk_utils/iam.kinesis.KinesisActions.property.DescribeAccountSettings"></a>

```typescript
public readonly DescribeAccountSettings: string;
```

- *Type:* string

[Read] kinesis:DescribeAccountSettings.

---

##### `DescribeLimits`<sup>Required</sup> <a name="DescribeLimits" id="@cdk_utils/iam.kinesis.KinesisActions.property.DescribeLimits"></a>

```typescript
public readonly DescribeLimits: string;
```

- *Type:* string

[Read] kinesis:DescribeLimits.

---

##### `DescribeStream`<sup>Required</sup> <a name="DescribeStream" id="@cdk_utils/iam.kinesis.KinesisActions.property.DescribeStream"></a>

```typescript
public readonly DescribeStream: string;
```

- *Type:* string

[Read] kinesis:DescribeStream.

---

##### `DescribeStreamConsumer`<sup>Required</sup> <a name="DescribeStreamConsumer" id="@cdk_utils/iam.kinesis.KinesisActions.property.DescribeStreamConsumer"></a>

```typescript
public readonly DescribeStreamConsumer: string;
```

- *Type:* string

[Read] kinesis:DescribeStreamConsumer.

---

##### `DescribeStreamSummary`<sup>Required</sup> <a name="DescribeStreamSummary" id="@cdk_utils/iam.kinesis.KinesisActions.property.DescribeStreamSummary"></a>

```typescript
public readonly DescribeStreamSummary: string;
```

- *Type:* string

[Read] kinesis:DescribeStreamSummary.

---

##### `DisableEnhancedMonitoring`<sup>Required</sup> <a name="DisableEnhancedMonitoring" id="@cdk_utils/iam.kinesis.KinesisActions.property.DisableEnhancedMonitoring"></a>

```typescript
public readonly DisableEnhancedMonitoring: string;
```

- *Type:* string

[Write] kinesis:DisableEnhancedMonitoring.

---

##### `EnableEnhancedMonitoring`<sup>Required</sup> <a name="EnableEnhancedMonitoring" id="@cdk_utils/iam.kinesis.KinesisActions.property.EnableEnhancedMonitoring"></a>

```typescript
public readonly EnableEnhancedMonitoring: string;
```

- *Type:* string

[Write] kinesis:EnableEnhancedMonitoring.

---

##### `IncreaseStreamRetentionPeriod`<sup>Required</sup> <a name="IncreaseStreamRetentionPeriod" id="@cdk_utils/iam.kinesis.KinesisActions.property.IncreaseStreamRetentionPeriod"></a>

```typescript
public readonly IncreaseStreamRetentionPeriod: string;
```

- *Type:* string

[Write] kinesis:IncreaseStreamRetentionPeriod.

---

##### `InjectApiError`<sup>Required</sup> <a name="InjectApiError" id="@cdk_utils/iam.kinesis.KinesisActions.property.InjectApiError"></a>

```typescript
public readonly InjectApiError: string;
```

- *Type:* string

[Write] kinesis:InjectApiError.

---

##### `ListShards`<sup>Required</sup> <a name="ListShards" id="@cdk_utils/iam.kinesis.KinesisActions.property.ListShards"></a>

```typescript
public readonly ListShards: string;
```

- *Type:* string

[List] kinesis:ListShards.

---

##### `ListStreamConsumers`<sup>Required</sup> <a name="ListStreamConsumers" id="@cdk_utils/iam.kinesis.KinesisActions.property.ListStreamConsumers"></a>

```typescript
public readonly ListStreamConsumers: string;
```

- *Type:* string

[List] kinesis:ListStreamConsumers.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.kinesis.KinesisActions.property.ListStreams"></a>

```typescript
public readonly ListStreams: string;
```

- *Type:* string

[List] kinesis:ListStreams.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kinesis.KinesisActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] kinesis:ListTagsForResource.

---

##### `ListTagsForStream`<sup>Required</sup> <a name="ListTagsForStream" id="@cdk_utils/iam.kinesis.KinesisActions.property.ListTagsForStream"></a>

```typescript
public readonly ListTagsForStream: string;
```

- *Type:* string

[Read] kinesis:ListTagsForStream.

---

##### `MergeShards`<sup>Required</sup> <a name="MergeShards" id="@cdk_utils/iam.kinesis.KinesisActions.property.MergeShards"></a>

```typescript
public readonly MergeShards: string;
```

- *Type:* string

[Write] kinesis:MergeShards.

---

##### `PutRecord`<sup>Required</sup> <a name="PutRecord" id="@cdk_utils/iam.kinesis.KinesisActions.property.PutRecord"></a>

```typescript
public readonly PutRecord: string;
```

- *Type:* string

[Write] kinesis:PutRecord.

---

##### `PutRecords`<sup>Required</sup> <a name="PutRecords" id="@cdk_utils/iam.kinesis.KinesisActions.property.PutRecords"></a>

```typescript
public readonly PutRecords: string;
```

- *Type:* string

[Write] kinesis:PutRecords.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.kinesis.KinesisActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] kinesis:PutResourcePolicy.

---

##### `RegisterStreamConsumer`<sup>Required</sup> <a name="RegisterStreamConsumer" id="@cdk_utils/iam.kinesis.KinesisActions.property.RegisterStreamConsumer"></a>

```typescript
public readonly RegisterStreamConsumer: string;
```

- *Type:* string

[Write] kinesis:RegisterStreamConsumer.

---

##### `RemoveTagsFromStream`<sup>Required</sup> <a name="RemoveTagsFromStream" id="@cdk_utils/iam.kinesis.KinesisActions.property.RemoveTagsFromStream"></a>

```typescript
public readonly RemoveTagsFromStream: string;
```

- *Type:* string

[Tagging] kinesis:RemoveTagsFromStream.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.kinesis.KinesisActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SplitShard`<sup>Required</sup> <a name="SplitShard" id="@cdk_utils/iam.kinesis.KinesisActions.property.SplitShard"></a>

```typescript
public readonly SplitShard: string;
```

- *Type:* string

[Write] kinesis:SplitShard.

---

##### `StartStreamEncryption`<sup>Required</sup> <a name="StartStreamEncryption" id="@cdk_utils/iam.kinesis.KinesisActions.property.StartStreamEncryption"></a>

```typescript
public readonly StartStreamEncryption: string;
```

- *Type:* string

[Write] kinesis:StartStreamEncryption.

---

##### `StopStreamEncryption`<sup>Required</sup> <a name="StopStreamEncryption" id="@cdk_utils/iam.kinesis.KinesisActions.property.StopStreamEncryption"></a>

```typescript
public readonly StopStreamEncryption: string;
```

- *Type:* string

[Write] kinesis:StopStreamEncryption.

---

##### `SubscribeToShard`<sup>Required</sup> <a name="SubscribeToShard" id="@cdk_utils/iam.kinesis.KinesisActions.property.SubscribeToShard"></a>

```typescript
public readonly SubscribeToShard: string;
```

- *Type:* string

[Read] kinesis:SubscribeToShard.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kinesis.KinesisActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] kinesis:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kinesis.KinesisActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] kinesis:UntagResource.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.kinesis.KinesisActions.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string;
```

- *Type:* string

[Write] kinesis:UpdateAccountSettings.

---

##### `UpdateMaxRecordSize`<sup>Required</sup> <a name="UpdateMaxRecordSize" id="@cdk_utils/iam.kinesis.KinesisActions.property.UpdateMaxRecordSize"></a>

```typescript
public readonly UpdateMaxRecordSize: string;
```

- *Type:* string

[Write] kinesis:UpdateMaxRecordSize.

---

##### `UpdateShardCount`<sup>Required</sup> <a name="UpdateShardCount" id="@cdk_utils/iam.kinesis.KinesisActions.property.UpdateShardCount"></a>

```typescript
public readonly UpdateShardCount: string;
```

- *Type:* string

[Write] kinesis:UpdateShardCount.

---

##### `UpdateStreamMode`<sup>Required</sup> <a name="UpdateStreamMode" id="@cdk_utils/iam.kinesis.KinesisActions.property.UpdateStreamMode"></a>

```typescript
public readonly UpdateStreamMode: string;
```

- *Type:* string

[Write] kinesis:UpdateStreamMode.

---

##### `UpdateStreamWarmThroughput`<sup>Required</sup> <a name="UpdateStreamWarmThroughput" id="@cdk_utils/iam.kinesis.KinesisActions.property.UpdateStreamWarmThroughput"></a>

```typescript
public readonly UpdateStreamWarmThroughput: string;
```

- *Type:* string

[Write] kinesis:UpdateStreamWarmThroughput.

---

### KinesisConditions <a name="KinesisConditions" id="@cdk_utils/iam.kinesis.KinesisConditions"></a>

Condition key constants and builders for kinesis.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kinesis.KinesisConditions.Initializer"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

new kinesis.KinesisConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.fisActionId">fisActionId</a></code> | Generates a condition block for `kinesis:FisActionId`. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.fisInjectPercentage">fisInjectPercentage</a></code> | Generates a condition block for `kinesis:FisInjectPercentage`. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.fisTargetArns">fisTargetArns</a></code> | Generates a condition block for `kinesis:FisTargetArns`. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `fisActionId` <a name="fisActionId" id="@cdk_utils/iam.kinesis.KinesisConditions.fisActionId"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisConditions.fisActionId(value: string)
```

Generates a condition block for `kinesis:FisActionId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kinesis.KinesisConditions.fisActionId.parameter.value"></a>

- *Type:* string

---

##### `fisInjectPercentage` <a name="fisInjectPercentage" id="@cdk_utils/iam.kinesis.KinesisConditions.fisInjectPercentage"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisConditions.fisInjectPercentage(value: number)
```

Generates a condition block for `kinesis:FisInjectPercentage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kinesis.KinesisConditions.fisInjectPercentage.parameter.value"></a>

- *Type:* number

---

##### `fisTargetArns` <a name="fisTargetArns" id="@cdk_utils/iam.kinesis.KinesisConditions.fisTargetArns"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisConditions.fisTargetArns(values: string[])
```

Generates a condition block for `kinesis:FisTargetArns`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.kinesis.KinesisConditions.fisTargetArns.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.kinesis.KinesisConditions.requestTag"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kinesis.KinesisConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.kinesis.KinesisConditions.resourceTag"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kinesis.KinesisConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.kinesis.KinesisConditions.tagKeys"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.kinesis.KinesisConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.property.FIS_ACTION_ID">FIS_ACTION_ID</a></code> | <code>string</code> | Condition key: kinesis:FisActionId (String). |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.property.FIS_INJECT_PERCENTAGE">FIS_INJECT_PERCENTAGE</a></code> | <code>string</code> | Condition key: kinesis:FisInjectPercentage (Numeric). |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.property.FIS_TARGET_ARNS">FIS_TARGET_ARNS</a></code> | <code>string</code> | Condition key: kinesis:FisTargetArns (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisConditions.property.InjectApiErrorConditionKeys">InjectApiErrorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InjectApiError action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.kinesis.KinesisConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.kinesis.KinesisConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.kinesis.KinesisConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `FIS_ACTION_ID`<sup>Required</sup> <a name="FIS_ACTION_ID" id="@cdk_utils/iam.kinesis.KinesisConditions.property.FIS_ACTION_ID"></a>

```typescript
public readonly FIS_ACTION_ID: string;
```

- *Type:* string

Condition key: kinesis:FisActionId (String).

---

##### `FIS_INJECT_PERCENTAGE`<sup>Required</sup> <a name="FIS_INJECT_PERCENTAGE" id="@cdk_utils/iam.kinesis.KinesisConditions.property.FIS_INJECT_PERCENTAGE"></a>

```typescript
public readonly FIS_INJECT_PERCENTAGE: string;
```

- *Type:* string

Condition key: kinesis:FisInjectPercentage (Numeric).

---

##### `FIS_TARGET_ARNS`<sup>Required</sup> <a name="FIS_TARGET_ARNS" id="@cdk_utils/iam.kinesis.KinesisConditions.property.FIS_TARGET_ARNS"></a>

```typescript
public readonly FIS_TARGET_ARNS: string;
```

- *Type:* string

Condition key: kinesis:FisTargetArns (ArrayOfARN).

---

##### `InjectApiErrorConditionKeys`<sup>Required</sup> <a name="InjectApiErrorConditionKeys" id="@cdk_utils/iam.kinesis.KinesisConditions.property.InjectApiErrorConditionKeys"></a>

```typescript
public readonly InjectApiErrorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InjectApiError action.

---

### KinesisOperations <a name="KinesisOperations" id="@cdk_utils/iam.kinesis.KinesisOperations"></a>

API operation to required IAM actions mapping for kinesis.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kinesis.KinesisOperations.Initializer"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

new kinesis.KinesisOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.AddTagsToStream">AddTagsToStream</a></code> | <code>string[]</code> | IAM actions required for the AddTagsToStream API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.CreateStream">CreateStream</a></code> | <code>string[]</code> | IAM actions required for the CreateStream API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.DecreaseStreamRetentionPeriod">DecreaseStreamRetentionPeriod</a></code> | <code>string[]</code> | IAM actions required for the DecreaseStreamRetentionPeriod API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.DeleteStream">DeleteStream</a></code> | <code>string[]</code> | IAM actions required for the DeleteStream API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.DeregisterStreamConsumer">DeregisterStreamConsumer</a></code> | <code>string[]</code> | IAM actions required for the DeregisterStreamConsumer API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.DescribeAccountSettings">DescribeAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.DescribeLimits">DescribeLimits</a></code> | <code>string[]</code> | IAM actions required for the DescribeLimits API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.DescribeStream">DescribeStream</a></code> | <code>string[]</code> | IAM actions required for the DescribeStream API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.DescribeStreamConsumer">DescribeStreamConsumer</a></code> | <code>string[]</code> | IAM actions required for the DescribeStreamConsumer API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.DescribeStreamSummary">DescribeStreamSummary</a></code> | <code>string[]</code> | IAM actions required for the DescribeStreamSummary API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.DisableEnhancedMonitoring">DisableEnhancedMonitoring</a></code> | <code>string[]</code> | IAM actions required for the DisableEnhancedMonitoring API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.EnableEnhancedMonitoring">EnableEnhancedMonitoring</a></code> | <code>string[]</code> | IAM actions required for the EnableEnhancedMonitoring API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.IncreaseStreamRetentionPeriod">IncreaseStreamRetentionPeriod</a></code> | <code>string[]</code> | IAM actions required for the IncreaseStreamRetentionPeriod API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.ListShards">ListShards</a></code> | <code>string[]</code> | IAM actions required for the ListShards API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.ListStreamConsumers">ListStreamConsumers</a></code> | <code>string[]</code> | IAM actions required for the ListStreamConsumers API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.ListStreams">ListStreams</a></code> | <code>string[]</code> | IAM actions required for the ListStreams API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.ListTagsForStream">ListTagsForStream</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForStream API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.MergeShards">MergeShards</a></code> | <code>string[]</code> | IAM actions required for the MergeShards API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.opGetRecords">opGetRecords</a></code> | <code>string[]</code> | IAM actions required for the GetRecords API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.opGetShardIterator">opGetShardIterator</a></code> | <code>string[]</code> | IAM actions required for the GetShardIterator API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.PutRecord">PutRecord</a></code> | <code>string[]</code> | IAM actions required for the PutRecord API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.PutRecords">PutRecords</a></code> | <code>string[]</code> | IAM actions required for the PutRecords API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.RegisterStreamConsumer">RegisterStreamConsumer</a></code> | <code>string[]</code> | IAM actions required for the RegisterStreamConsumer API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.RemoveTagsFromStream">RemoveTagsFromStream</a></code> | <code>string[]</code> | IAM actions required for the RemoveTagsFromStream API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.SplitShard">SplitShard</a></code> | <code>string[]</code> | IAM actions required for the SplitShard API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.StartStreamEncryption">StartStreamEncryption</a></code> | <code>string[]</code> | IAM actions required for the StartStreamEncryption API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.StopStreamEncryption">StopStreamEncryption</a></code> | <code>string[]</code> | IAM actions required for the StopStreamEncryption API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.SubscribeToShard">SubscribeToShard</a></code> | <code>string[]</code> | IAM actions required for the SubscribeToShard API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.UpdateMaxRecordSize">UpdateMaxRecordSize</a></code> | <code>string[]</code> | IAM actions required for the UpdateMaxRecordSize API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.UpdateShardCount">UpdateShardCount</a></code> | <code>string[]</code> | IAM actions required for the UpdateShardCount API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.UpdateStreamMode">UpdateStreamMode</a></code> | <code>string[]</code> | IAM actions required for the UpdateStreamMode API call. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisOperations.property.UpdateStreamWarmThroughput">UpdateStreamWarmThroughput</a></code> | <code>string[]</code> | IAM actions required for the UpdateStreamWarmThroughput API call. |

---

##### `AddTagsToStream`<sup>Required</sup> <a name="AddTagsToStream" id="@cdk_utils/iam.kinesis.KinesisOperations.property.AddTagsToStream"></a>

```typescript
public readonly AddTagsToStream: string[];
```

- *Type:* string[]

IAM actions required for the AddTagsToStream API call.

---

##### `CreateStream`<sup>Required</sup> <a name="CreateStream" id="@cdk_utils/iam.kinesis.KinesisOperations.property.CreateStream"></a>

```typescript
public readonly CreateStream: string[];
```

- *Type:* string[]

IAM actions required for the CreateStream API call.

---

##### `DecreaseStreamRetentionPeriod`<sup>Required</sup> <a name="DecreaseStreamRetentionPeriod" id="@cdk_utils/iam.kinesis.KinesisOperations.property.DecreaseStreamRetentionPeriod"></a>

```typescript
public readonly DecreaseStreamRetentionPeriod: string[];
```

- *Type:* string[]

IAM actions required for the DecreaseStreamRetentionPeriod API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.kinesis.KinesisOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteStream`<sup>Required</sup> <a name="DeleteStream" id="@cdk_utils/iam.kinesis.KinesisOperations.property.DeleteStream"></a>

```typescript
public readonly DeleteStream: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStream API call.

---

##### `DeregisterStreamConsumer`<sup>Required</sup> <a name="DeregisterStreamConsumer" id="@cdk_utils/iam.kinesis.KinesisOperations.property.DeregisterStreamConsumer"></a>

```typescript
public readonly DeregisterStreamConsumer: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterStreamConsumer API call.

---

##### `DescribeAccountSettings`<sup>Required</sup> <a name="DescribeAccountSettings" id="@cdk_utils/iam.kinesis.KinesisOperations.property.DescribeAccountSettings"></a>

```typescript
public readonly DescribeAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountSettings API call.

---

##### `DescribeLimits`<sup>Required</sup> <a name="DescribeLimits" id="@cdk_utils/iam.kinesis.KinesisOperations.property.DescribeLimits"></a>

```typescript
public readonly DescribeLimits: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLimits API call.

---

##### `DescribeStream`<sup>Required</sup> <a name="DescribeStream" id="@cdk_utils/iam.kinesis.KinesisOperations.property.DescribeStream"></a>

```typescript
public readonly DescribeStream: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStream API call.

---

##### `DescribeStreamConsumer`<sup>Required</sup> <a name="DescribeStreamConsumer" id="@cdk_utils/iam.kinesis.KinesisOperations.property.DescribeStreamConsumer"></a>

```typescript
public readonly DescribeStreamConsumer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStreamConsumer API call.

---

##### `DescribeStreamSummary`<sup>Required</sup> <a name="DescribeStreamSummary" id="@cdk_utils/iam.kinesis.KinesisOperations.property.DescribeStreamSummary"></a>

```typescript
public readonly DescribeStreamSummary: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStreamSummary API call.

---

##### `DisableEnhancedMonitoring`<sup>Required</sup> <a name="DisableEnhancedMonitoring" id="@cdk_utils/iam.kinesis.KinesisOperations.property.DisableEnhancedMonitoring"></a>

```typescript
public readonly DisableEnhancedMonitoring: string[];
```

- *Type:* string[]

IAM actions required for the DisableEnhancedMonitoring API call.

---

##### `EnableEnhancedMonitoring`<sup>Required</sup> <a name="EnableEnhancedMonitoring" id="@cdk_utils/iam.kinesis.KinesisOperations.property.EnableEnhancedMonitoring"></a>

```typescript
public readonly EnableEnhancedMonitoring: string[];
```

- *Type:* string[]

IAM actions required for the EnableEnhancedMonitoring API call.

---

##### `IncreaseStreamRetentionPeriod`<sup>Required</sup> <a name="IncreaseStreamRetentionPeriod" id="@cdk_utils/iam.kinesis.KinesisOperations.property.IncreaseStreamRetentionPeriod"></a>

```typescript
public readonly IncreaseStreamRetentionPeriod: string[];
```

- *Type:* string[]

IAM actions required for the IncreaseStreamRetentionPeriod API call.

---

##### `ListShards`<sup>Required</sup> <a name="ListShards" id="@cdk_utils/iam.kinesis.KinesisOperations.property.ListShards"></a>

```typescript
public readonly ListShards: string[];
```

- *Type:* string[]

IAM actions required for the ListShards API call.

---

##### `ListStreamConsumers`<sup>Required</sup> <a name="ListStreamConsumers" id="@cdk_utils/iam.kinesis.KinesisOperations.property.ListStreamConsumers"></a>

```typescript
public readonly ListStreamConsumers: string[];
```

- *Type:* string[]

IAM actions required for the ListStreamConsumers API call.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.kinesis.KinesisOperations.property.ListStreams"></a>

```typescript
public readonly ListStreams: string[];
```

- *Type:* string[]

IAM actions required for the ListStreams API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kinesis.KinesisOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTagsForStream`<sup>Required</sup> <a name="ListTagsForStream" id="@cdk_utils/iam.kinesis.KinesisOperations.property.ListTagsForStream"></a>

```typescript
public readonly ListTagsForStream: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForStream API call.

---

##### `MergeShards`<sup>Required</sup> <a name="MergeShards" id="@cdk_utils/iam.kinesis.KinesisOperations.property.MergeShards"></a>

```typescript
public readonly MergeShards: string[];
```

- *Type:* string[]

IAM actions required for the MergeShards API call.

---

##### `opGetRecords`<sup>Required</sup> <a name="opGetRecords" id="@cdk_utils/iam.kinesis.KinesisOperations.property.opGetRecords"></a>

```typescript
public readonly opGetRecords: string[];
```

- *Type:* string[]

IAM actions required for the GetRecords API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.kinesis.KinesisOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetShardIterator`<sup>Required</sup> <a name="opGetShardIterator" id="@cdk_utils/iam.kinesis.KinesisOperations.property.opGetShardIterator"></a>

```typescript
public readonly opGetShardIterator: string[];
```

- *Type:* string[]

IAM actions required for the GetShardIterator API call.

---

##### `PutRecord`<sup>Required</sup> <a name="PutRecord" id="@cdk_utils/iam.kinesis.KinesisOperations.property.PutRecord"></a>

```typescript
public readonly PutRecord: string[];
```

- *Type:* string[]

IAM actions required for the PutRecord API call.

---

##### `PutRecords`<sup>Required</sup> <a name="PutRecords" id="@cdk_utils/iam.kinesis.KinesisOperations.property.PutRecords"></a>

```typescript
public readonly PutRecords: string[];
```

- *Type:* string[]

IAM actions required for the PutRecords API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.kinesis.KinesisOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RegisterStreamConsumer`<sup>Required</sup> <a name="RegisterStreamConsumer" id="@cdk_utils/iam.kinesis.KinesisOperations.property.RegisterStreamConsumer"></a>

```typescript
public readonly RegisterStreamConsumer: string[];
```

- *Type:* string[]

IAM actions required for the RegisterStreamConsumer API call.

---

##### `RemoveTagsFromStream`<sup>Required</sup> <a name="RemoveTagsFromStream" id="@cdk_utils/iam.kinesis.KinesisOperations.property.RemoveTagsFromStream"></a>

```typescript
public readonly RemoveTagsFromStream: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTagsFromStream API call.

---

##### `SplitShard`<sup>Required</sup> <a name="SplitShard" id="@cdk_utils/iam.kinesis.KinesisOperations.property.SplitShard"></a>

```typescript
public readonly SplitShard: string[];
```

- *Type:* string[]

IAM actions required for the SplitShard API call.

---

##### `StartStreamEncryption`<sup>Required</sup> <a name="StartStreamEncryption" id="@cdk_utils/iam.kinesis.KinesisOperations.property.StartStreamEncryption"></a>

```typescript
public readonly StartStreamEncryption: string[];
```

- *Type:* string[]

IAM actions required for the StartStreamEncryption API call.

---

##### `StopStreamEncryption`<sup>Required</sup> <a name="StopStreamEncryption" id="@cdk_utils/iam.kinesis.KinesisOperations.property.StopStreamEncryption"></a>

```typescript
public readonly StopStreamEncryption: string[];
```

- *Type:* string[]

IAM actions required for the StopStreamEncryption API call.

---

##### `SubscribeToShard`<sup>Required</sup> <a name="SubscribeToShard" id="@cdk_utils/iam.kinesis.KinesisOperations.property.SubscribeToShard"></a>

```typescript
public readonly SubscribeToShard: string[];
```

- *Type:* string[]

IAM actions required for the SubscribeToShard API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kinesis.KinesisOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kinesis.KinesisOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.kinesis.KinesisOperations.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountSettings API call.

---

##### `UpdateMaxRecordSize`<sup>Required</sup> <a name="UpdateMaxRecordSize" id="@cdk_utils/iam.kinesis.KinesisOperations.property.UpdateMaxRecordSize"></a>

```typescript
public readonly UpdateMaxRecordSize: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMaxRecordSize API call.

---

##### `UpdateShardCount`<sup>Required</sup> <a name="UpdateShardCount" id="@cdk_utils/iam.kinesis.KinesisOperations.property.UpdateShardCount"></a>

```typescript
public readonly UpdateShardCount: string[];
```

- *Type:* string[]

IAM actions required for the UpdateShardCount API call.

---

##### `UpdateStreamMode`<sup>Required</sup> <a name="UpdateStreamMode" id="@cdk_utils/iam.kinesis.KinesisOperations.property.UpdateStreamMode"></a>

```typescript
public readonly UpdateStreamMode: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStreamMode API call.

---

##### `UpdateStreamWarmThroughput`<sup>Required</sup> <a name="UpdateStreamWarmThroughput" id="@cdk_utils/iam.kinesis.KinesisOperations.property.UpdateStreamWarmThroughput"></a>

```typescript
public readonly UpdateStreamWarmThroughput: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStreamWarmThroughput API call.

---

### KinesisResources <a name="KinesisResources" id="@cdk_utils/iam.kinesis.KinesisResources"></a>

ARN builders, validators, and parsers for kinesis resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kinesis.KinesisResources.Initializer"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

new kinesis.KinesisResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisResources.consumer">consumer</a></code> | Builds an ARN for the consumer resource. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisResources.isValidConsumerArn">isValidConsumerArn</a></code> | Validates whether a string is a valid ARN for the consumer resource. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisResources.isValidKMSKeyArn">isValidKMSKeyArn</a></code> | Validates whether a string is a valid ARN for the kmsKey resource. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisResources.isValidStreamArn">isValidStreamArn</a></code> | Validates whether a string is a valid ARN for the stream resource. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisResources.kmsKey">kmsKey</a></code> | Builds an ARN for the kmsKey resource. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisResources.parseConsumerArn">parseConsumerArn</a></code> | Parses a consumer ARN into its components. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisResources.parseKMSKeyArn">parseKMSKeyArn</a></code> | Parses a kmsKey ARN into its components. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisResources.parseStreamArn">parseStreamArn</a></code> | Parses a stream ARN into its components. |
| <code><a href="#@cdk_utils/iam.kinesis.KinesisResources.stream">stream</a></code> | Builds an ARN for the stream resource. |

---

##### `consumer` <a name="consumer" id="@cdk_utils/iam.kinesis.KinesisResources.consumer"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisResources.consumer(props: KinesisConsumerArnProps)
```

Builds an ARN for the consumer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kinesis.KinesisResources.consumer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kinesis.KinesisConsumerArnProps">KinesisConsumerArnProps</a>

---

##### `isValidConsumerArn` <a name="isValidConsumerArn" id="@cdk_utils/iam.kinesis.KinesisResources.isValidConsumerArn"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisResources.isValidConsumerArn(arn: string)
```

Validates whether a string is a valid ARN for the consumer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kinesis.KinesisResources.isValidConsumerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKMSKeyArn` <a name="isValidKMSKeyArn" id="@cdk_utils/iam.kinesis.KinesisResources.isValidKMSKeyArn"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisResources.isValidKMSKeyArn(arn: string)
```

Validates whether a string is a valid ARN for the kmsKey resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kinesis.KinesisResources.isValidKMSKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamArn` <a name="isValidStreamArn" id="@cdk_utils/iam.kinesis.KinesisResources.isValidStreamArn"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisResources.isValidStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the stream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kinesis.KinesisResources.isValidStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `kmsKey` <a name="kmsKey" id="@cdk_utils/iam.kinesis.KinesisResources.kmsKey"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisResources.kmsKey(props: KinesisKMSKeyArnProps)
```

Builds an ARN for the kmsKey resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kinesis.KinesisResources.kmsKey.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kinesis.KinesisKMSKeyArnProps">KinesisKMSKeyArnProps</a>

---

##### `parseConsumerArn` <a name="parseConsumerArn" id="@cdk_utils/iam.kinesis.KinesisResources.parseConsumerArn"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisResources.parseConsumerArn(arn: string)
```

Parses a consumer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kinesis.KinesisResources.parseConsumerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKMSKeyArn` <a name="parseKMSKeyArn" id="@cdk_utils/iam.kinesis.KinesisResources.parseKMSKeyArn"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisResources.parseKMSKeyArn(arn: string)
```

Parses a kmsKey ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kinesis.KinesisResources.parseKMSKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamArn` <a name="parseStreamArn" id="@cdk_utils/iam.kinesis.KinesisResources.parseStreamArn"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisResources.parseStreamArn(arn: string)
```

Parses a stream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kinesis.KinesisResources.parseStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `stream` <a name="stream" id="@cdk_utils/iam.kinesis.KinesisResources.stream"></a>

```typescript
import { kinesis } from '@cdk_utils/iam'

kinesis.KinesisResources.stream(props: KinesisStreamArnProps)
```

Builds an ARN for the stream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kinesis.KinesisResources.stream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kinesis.KinesisStreamArnProps">KinesisStreamArnProps</a>

---




