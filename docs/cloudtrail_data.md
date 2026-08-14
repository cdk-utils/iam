# `cloudtrail_data` Submodule <a name="`cloudtrail_data` Submodule" id="@cdk_utils/iam.cloudtrail_data"></a>


## Structs <a name="Structs" id="Structs"></a>

### CloudtrailDataChannelArnComponents <a name="CloudtrailDataChannelArnComponents" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnComponents"></a>

Parsed components of a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnComponents.Initializer"></a>

```typescript
import { cloudtrail_data } from '@cdk_utils/iam'

const cloudtrailDataChannelArnComponents: cloudtrail_data.CloudtrailDataChannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnComponents.property.channelId">channelId</a></code> | <code>string</code> | The ChannelId component. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnComponents.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

The ChannelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudtrailDataChannelArnProps <a name="CloudtrailDataChannelArnProps" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnProps"></a>

Properties for building a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnProps.Initializer"></a>

```typescript
import { cloudtrail_data } from '@cdk_utils/iam'

const cloudtrailDataChannelArnProps: cloudtrail_data.CloudtrailDataChannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnProps.property.channelId">channelId</a></code> | <code>string</code> | The ChannelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

The ChannelId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailDataActions <a name="CloudtrailDataActions" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions"></a>

IAM action constants for the cloudtrail-data service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.Initializer"></a>

```typescript
import { cloudtrail_data } from '@cdk_utils/iam'

new cloudtrail_data.CloudtrailDataActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.PutAuditEvents">PutAuditEvents</a></code> | <code>string</code> | [Write] cloudtrail-data:PutAuditEvents. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `PutAuditEvents`<sup>Required</sup> <a name="PutAuditEvents" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.PutAuditEvents"></a>

```typescript
public readonly PutAuditEvents: string;
```

- *Type:* string

[Write] cloudtrail-data:PutAuditEvents.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### CloudtrailDataConditions <a name="CloudtrailDataConditions" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions"></a>

Condition key constants and builders for cloudtrail-data.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.Initializer"></a>

```typescript
import { cloudtrail_data } from '@cdk_utils/iam'

new cloudtrail_data.CloudtrailDataConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.requestTag"></a>

```typescript
import { cloudtrail_data } from '@cdk_utils/iam'

cloudtrail_data.CloudtrailDataConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.resourceTag"></a>

```typescript
import { cloudtrail_data } from '@cdk_utils/iam'

cloudtrail_data.CloudtrailDataConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.tagKeys"></a>

```typescript
import { cloudtrail_data } from '@cdk_utils/iam'

cloudtrail_data.CloudtrailDataConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

### CloudtrailDataOperations <a name="CloudtrailDataOperations" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataOperations"></a>

API operation to required IAM actions mapping for cloudtrail-data.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataOperations.Initializer"></a>

```typescript
import { cloudtrail_data } from '@cdk_utils/iam'

new cloudtrail_data.CloudtrailDataOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataOperations.property.PutAuditEvents">PutAuditEvents</a></code> | <code>string[]</code> | IAM actions required for the PutAuditEvents API call. |

---

##### `PutAuditEvents`<sup>Required</sup> <a name="PutAuditEvents" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataOperations.property.PutAuditEvents"></a>

```typescript
public readonly PutAuditEvents: string[];
```

- *Type:* string[]

IAM actions required for the PutAuditEvents API call.

---

### CloudtrailDataResources <a name="CloudtrailDataResources" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataResources"></a>

ARN builders, validators, and parsers for cloudtrail-data resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataResources.Initializer"></a>

```typescript
import { cloudtrail_data } from '@cdk_utils/iam'

new cloudtrail_data.CloudtrailDataResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataResources.channel">channel</a></code> | Builds an ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataResources.isValidChannelArn">isValidChannelArn</a></code> | Validates whether a string is a valid ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataResources.parseChannelArn">parseChannelArn</a></code> | Parses a channel ARN into its components. |

---

##### `channel` <a name="channel" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataResources.channel"></a>

```typescript
import { cloudtrail_data } from '@cdk_utils/iam'

cloudtrail_data.CloudtrailDataResources.channel(props: CloudtrailDataChannelArnProps)
```

Builds an ARN for the channel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataResources.channel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudtrail_data.CloudtrailDataChannelArnProps">CloudtrailDataChannelArnProps</a>

---

##### `isValidChannelArn` <a name="isValidChannelArn" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataResources.isValidChannelArn"></a>

```typescript
import { cloudtrail_data } from '@cdk_utils/iam'

cloudtrail_data.CloudtrailDataResources.isValidChannelArn(arn: string)
```

Validates whether a string is a valid ARN for the channel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataResources.isValidChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelArn` <a name="parseChannelArn" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataResources.parseChannelArn"></a>

```typescript
import { cloudtrail_data } from '@cdk_utils/iam'

cloudtrail_data.CloudtrailDataResources.parseChannelArn(arn: string)
```

Parses a channel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudtrail_data.CloudtrailDataResources.parseChannelArn.parameter.arn"></a>

- *Type:* string

---




