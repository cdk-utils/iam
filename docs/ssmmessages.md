# `ssmmessages` Submodule <a name="`ssmmessages` Submodule" id="@cdk_utils/iam.ssmmessages"></a>


## Structs <a name="Structs" id="Structs"></a>

### SsmmessagesSessionArnComponents <a name="SsmmessagesSessionArnComponents" id="@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnComponents"></a>

Parsed components of a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnComponents.Initializer"></a>

```typescript
import { ssmmessages } from '@cdk_utils/iam'

const ssmmessagesSessionArnComponents: ssmmessages.SsmmessagesSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnComponents.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnComponents.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component.

---

### SsmmessagesSessionArnProps <a name="SsmmessagesSessionArnProps" id="@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnProps"></a>

Properties for building a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnProps.Initializer"></a>

```typescript
import { ssmmessages } from '@cdk_utils/iam'

const ssmmessagesSessionArnProps: ssmmessages.SsmmessagesSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnProps.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnProps.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SsmmessagesActions <a name="SsmmessagesActions" id="@cdk_utils/iam.ssmmessages.SsmmessagesActions"></a>

IAM action constants for the ssmmessages service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssmmessages.SsmmessagesActions.Initializer"></a>

```typescript
import { ssmmessages } from '@cdk_utils/iam'

new ssmmessages.SsmmessagesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.CreateControlChannel">CreateControlChannel</a></code> | <code>string</code> | [Write] ssmmessages:CreateControlChannel. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.CreateDataChannel">CreateDataChannel</a></code> | <code>string</code> | [Write] ssmmessages:CreateDataChannel. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.OpenControlChannel">OpenControlChannel</a></code> | <code>string</code> | [Write] ssmmessages:OpenControlChannel. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.OpenDataChannel">OpenDataChannel</a></code> | <code>string</code> | [Write] ssmmessages:OpenDataChannel. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateControlChannel`<sup>Required</sup> <a name="CreateControlChannel" id="@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.CreateControlChannel"></a>

```typescript
public readonly CreateControlChannel: string;
```

- *Type:* string

[Write] ssmmessages:CreateControlChannel.

---

##### `CreateDataChannel`<sup>Required</sup> <a name="CreateDataChannel" id="@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.CreateDataChannel"></a>

```typescript
public readonly CreateDataChannel: string;
```

- *Type:* string

[Write] ssmmessages:CreateDataChannel.

---

##### `OpenControlChannel`<sup>Required</sup> <a name="OpenControlChannel" id="@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.OpenControlChannel"></a>

```typescript
public readonly OpenControlChannel: string;
```

- *Type:* string

[Write] ssmmessages:OpenControlChannel.

---

##### `OpenDataChannel`<sup>Required</sup> <a name="OpenDataChannel" id="@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.OpenDataChannel"></a>

```typescript
public readonly OpenDataChannel: string;
```

- *Type:* string

[Write] ssmmessages:OpenDataChannel.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ssmmessages.SsmmessagesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### SsmmessagesConditions <a name="SsmmessagesConditions" id="@cdk_utils/iam.ssmmessages.SsmmessagesConditions"></a>

Condition key constants and builders for ssmmessages.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssmmessages.SsmmessagesConditions.Initializer"></a>

```typescript
import { ssmmessages } from '@cdk_utils/iam'

new ssmmessages.SsmmessagesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesConditions.property.CreateControlChannelConditionKeys">CreateControlChannelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateControlChannel action. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesConditions.property.RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID">RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID</a></code> | <code>string</code> | Condition key: ssm:resourceTag/aws:ssmmessages:session-id (String). |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesConditions.property.RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID">RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID</a></code> | <code>string</code> | Condition key: ssm:resourceTag/aws:ssmmessages:target-id (String). |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesConditions.property.SOURCE_INSTANCE_ARN">SOURCE_INSTANCE_ARN</a></code> | <code>string</code> | Condition key: ec2:SourceInstanceARN (ARN). |

---

##### `CreateControlChannelConditionKeys`<sup>Required</sup> <a name="CreateControlChannelConditionKeys" id="@cdk_utils/iam.ssmmessages.SsmmessagesConditions.property.CreateControlChannelConditionKeys"></a>

```typescript
public readonly CreateControlChannelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateControlChannel action.

---

##### `RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID`<sup>Required</sup> <a name="RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID" id="@cdk_utils/iam.ssmmessages.SsmmessagesConditions.property.RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID"></a>

```typescript
public readonly RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID: string;
```

- *Type:* string

Condition key: ssm:resourceTag/aws:ssmmessages:session-id (String).

---

##### `RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID`<sup>Required</sup> <a name="RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID" id="@cdk_utils/iam.ssmmessages.SsmmessagesConditions.property.RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID"></a>

```typescript
public readonly RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID: string;
```

- *Type:* string

Condition key: ssm:resourceTag/aws:ssmmessages:target-id (String).

---

##### `SOURCE_INSTANCE_ARN`<sup>Required</sup> <a name="SOURCE_INSTANCE_ARN" id="@cdk_utils/iam.ssmmessages.SsmmessagesConditions.property.SOURCE_INSTANCE_ARN"></a>

```typescript
public readonly SOURCE_INSTANCE_ARN: string;
```

- *Type:* string

Condition key: ec2:SourceInstanceARN (ARN).

---

### SsmmessagesResources <a name="SsmmessagesResources" id="@cdk_utils/iam.ssmmessages.SsmmessagesResources"></a>

ARN builders, validators, and parsers for ssmmessages resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssmmessages.SsmmessagesResources.Initializer"></a>

```typescript
import { ssmmessages } from '@cdk_utils/iam'

new ssmmessages.SsmmessagesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesResources.isValidSessionArn">isValidSessionArn</a></code> | Validates whether a string is a valid ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesResources.parseSessionArn">parseSessionArn</a></code> | Parses a session ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssmmessages.SsmmessagesResources.session">session</a></code> | Builds an ARN for the session resource. |

---

##### `isValidSessionArn` <a name="isValidSessionArn" id="@cdk_utils/iam.ssmmessages.SsmmessagesResources.isValidSessionArn"></a>

```typescript
import { ssmmessages } from '@cdk_utils/iam'

ssmmessages.SsmmessagesResources.isValidSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssmmessages.SsmmessagesResources.isValidSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSessionArn` <a name="parseSessionArn" id="@cdk_utils/iam.ssmmessages.SsmmessagesResources.parseSessionArn"></a>

```typescript
import { ssmmessages } from '@cdk_utils/iam'

ssmmessages.SsmmessagesResources.parseSessionArn(arn: string)
```

Parses a session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssmmessages.SsmmessagesResources.parseSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `session` <a name="session" id="@cdk_utils/iam.ssmmessages.SsmmessagesResources.session"></a>

```typescript
import { ssmmessages } from '@cdk_utils/iam'

ssmmessages.SsmmessagesResources.session(props: SsmmessagesSessionArnProps)
```

Builds an ARN for the session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssmmessages.SsmmessagesResources.session.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssmmessages.SsmmessagesSessionArnProps">SsmmessagesSessionArnProps</a>

---




