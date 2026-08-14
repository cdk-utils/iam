# `workmailmessageflow` Submodule <a name="`workmailmessageflow` Submodule" id="@cdk_utils/iam.workmailmessageflow"></a>


## Structs <a name="Structs" id="Structs"></a>

### WorkmailmessageflowRawMessageArnComponents <a name="WorkmailmessageflowRawMessageArnComponents" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents"></a>

Parsed components of a RawMessage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.Initializer"></a>

```typescript
import { workmailmessageflow } from '@cdk_utils/iam'

const workmailmessageflowRawMessageArnComponents: workmailmessageflow.WorkmailmessageflowRawMessageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.property.context">context</a></code> | <code>string</code> | The Context component. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.property.messageId">messageId</a></code> | <code>string</code> | The MessageId component. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `context`<sup>Required</sup> <a name="context" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

The Context component.

---

##### `messageId`<sup>Required</sup> <a name="messageId" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.property.messageId"></a>

```typescript
public readonly messageId: string;
```

- *Type:* string

The MessageId component.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WorkmailmessageflowRawMessageArnProps <a name="WorkmailmessageflowRawMessageArnProps" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps"></a>

Properties for building a RawMessage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.Initializer"></a>

```typescript
import { workmailmessageflow } from '@cdk_utils/iam'

const workmailmessageflowRawMessageArnProps: workmailmessageflow.WorkmailmessageflowRawMessageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.property.context">context</a></code> | <code>string</code> | The Context component of the ARN. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.property.messageId">messageId</a></code> | <code>string</code> | The MessageId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `context`<sup>Required</sup> <a name="context" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

The Context component of the ARN.

---

##### `messageId`<sup>Required</sup> <a name="messageId" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.property.messageId"></a>

```typescript
public readonly messageId: string;
```

- *Type:* string

The MessageId component of the ARN.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### WorkmailmessageflowActions <a name="WorkmailmessageflowActions" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions"></a>

IAM action constants for the workmailmessageflow service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.Initializer"></a>

```typescript
import { workmailmessageflow } from '@cdk_utils/iam'

new workmailmessageflow.WorkmailmessageflowActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.actionGetRawMessageContent">actionGetRawMessageContent</a></code> | <code>string</code> | [Read] workmailmessageflow:GetRawMessageContent. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.PutRawMessageContent">PutRawMessageContent</a></code> | <code>string</code> | [Write] workmailmessageflow:PutRawMessageContent. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetRawMessageContent`<sup>Required</sup> <a name="actionGetRawMessageContent" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.actionGetRawMessageContent"></a>

```typescript
public readonly actionGetRawMessageContent: string;
```

- *Type:* string

[Read] workmailmessageflow:GetRawMessageContent.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `PutRawMessageContent`<sup>Required</sup> <a name="PutRawMessageContent" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.PutRawMessageContent"></a>

```typescript
public readonly PutRawMessageContent: string;
```

- *Type:* string

[Write] workmailmessageflow:PutRawMessageContent.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### WorkmailmessageflowOperations <a name="WorkmailmessageflowOperations" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowOperations"></a>

API operation to required IAM actions mapping for workmailmessageflow.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowOperations.Initializer"></a>

```typescript
import { workmailmessageflow } from '@cdk_utils/iam'

new workmailmessageflow.WorkmailmessageflowOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowOperations.property.opGetRawMessageContent">opGetRawMessageContent</a></code> | <code>string[]</code> | IAM actions required for the GetRawMessageContent API call. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowOperations.property.PutRawMessageContent">PutRawMessageContent</a></code> | <code>string[]</code> | IAM actions required for the PutRawMessageContent API call. |

---

##### `opGetRawMessageContent`<sup>Required</sup> <a name="opGetRawMessageContent" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowOperations.property.opGetRawMessageContent"></a>

```typescript
public readonly opGetRawMessageContent: string[];
```

- *Type:* string[]

IAM actions required for the GetRawMessageContent API call.

---

##### `PutRawMessageContent`<sup>Required</sup> <a name="PutRawMessageContent" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowOperations.property.PutRawMessageContent"></a>

```typescript
public readonly PutRawMessageContent: string[];
```

- *Type:* string[]

IAM actions required for the PutRawMessageContent API call.

---

### WorkmailmessageflowResources <a name="WorkmailmessageflowResources" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowResources"></a>

ARN builders, validators, and parsers for workmailmessageflow resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowResources.Initializer"></a>

```typescript
import { workmailmessageflow } from '@cdk_utils/iam'

new workmailmessageflow.WorkmailmessageflowResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowResources.isValidRawMessageArn">isValidRawMessageArn</a></code> | Validates whether a string is a valid ARN for the RawMessage resource. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowResources.parseRawMessageArn">parseRawMessageArn</a></code> | Parses a RawMessage ARN into its components. |
| <code><a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowResources.rawMessage">rawMessage</a></code> | Builds an ARN for the RawMessage resource. |

---

##### `isValidRawMessageArn` <a name="isValidRawMessageArn" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowResources.isValidRawMessageArn"></a>

```typescript
import { workmailmessageflow } from '@cdk_utils/iam'

workmailmessageflow.WorkmailmessageflowResources.isValidRawMessageArn(arn: string)
```

Validates whether a string is a valid ARN for the RawMessage resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowResources.isValidRawMessageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRawMessageArn` <a name="parseRawMessageArn" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowResources.parseRawMessageArn"></a>

```typescript
import { workmailmessageflow } from '@cdk_utils/iam'

workmailmessageflow.WorkmailmessageflowResources.parseRawMessageArn(arn: string)
```

Parses a RawMessage ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowResources.parseRawMessageArn.parameter.arn"></a>

- *Type:* string

---

##### `rawMessage` <a name="rawMessage" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowResources.rawMessage"></a>

```typescript
import { workmailmessageflow } from '@cdk_utils/iam'

workmailmessageflow.WorkmailmessageflowResources.rawMessage(props: WorkmailmessageflowRawMessageArnProps)
```

Builds an ARN for the RawMessage resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowResources.rawMessage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workmailmessageflow.WorkmailmessageflowRawMessageArnProps">WorkmailmessageflowRawMessageArnProps</a>

---




